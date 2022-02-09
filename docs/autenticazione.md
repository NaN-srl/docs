---
sidebar_position: 20
---
# Autenticazione e sicurezza

## Sicurezza

Trattando dati estremamente sensibili, è consigliabile attuare misure di prevenzione più forti rispetto ad altri webservice.

### Firma crittografica dei payload

Tutte le risposte delle API REST sono firmate digitalmente, in modo che il client possa verificare che il payload ricevuto sia stato realmente generato da ContoAperto. La chiave pubblica è esposta direttamente sulle API, tramite una chiamata che non richiede autenticazione: [`GET /system/public-key`](https://api.dev.contoaperto.com/system/public-key). L'header di risposta `X-Signature` contiene l'encoding Base64 della **PKCS #1 v1.5 RSA digest signature con SHA256**: per un'implementazione di esempio si veda [l'esempio a fondo pagina](#esempio-di-chiamata).

:::info
Questa funzionalità al momento è implementata esclusivamente nelle risposte del server. Un omologo per le richieste è in via di sviluppo, in modo da integrarsi con l'autenticazione tramite [chiave crittografica personale](#con-chiave-pubblica-header-authorization-signature) e garantire ogni aspetto della richiesta.
:::

## Autenticazione

Le API REST sono pubblicamente raggiungibili, ma tranne poche inevitabili eccezioni sono sottoposte ad autenticazione. In base ai casi d'uso sono possibili tre differenti metodi di accesso.

### OAuth 2.0 e OpenID Connect

Per autorizzare accessi da parte degli utenti si consiglia di utilizzare i flussi `authorization_code` o `implicit`. Il servizio di autenticazione è conforme alle specifiche *OpenID Connect* e un client adeguato potrà venire configurato in maniera automatica, tramite le istruzioni esposte all'indirizzo [.well-known/openid-configuration](https://auth.contoaperto.com/auth/realms/ContoApertoDev/.well-known/openid-configuration) del reame di autenticazione.

Il servizio di autenticazione è basato su [Keycloak](https://www.keycloak.org/), che fornisce varie [librerie client](https://www.keycloak.org/docs/latest/securing_apps/) per i principali linguaggi.

L'Access Token deve obbligatoriamente essere inviato tramite header di richiesta `Authorization: Bearer`; l'invio in query string, anche se permesso dal protocollo, non è volontariamente supportato.

### API key 

Un utente può generare quante API Key desidera, tramite la chiamata `POST /user/api-key`. Una API Key permette di agire in nome e per conto dell'utente, e può essere generata con uno *scope* pari o inferiore a quello della richiesta di creazione. 

Un'API Key può opzionalmente essere arricchita con una chiave pubblica in formato PEM; la presenza o meno di questa informazione determina quale tipo di autenticazione occorrerà utilizzare per accedere al servizio.

#### Senza chiave pubblica: header `X-API-Key`

Se non si è fornita una chiave pubblica, l'API key può essere utilizzata nella maniera più semplice; la chiave generata ha il campo `apikey` valorizzato con una stringa alfanumerica di 52 caratteri, da inviare attraverso l'header `X-API-Key`:

```
curl -X 'GET' \
  'https://api.dev.contoaperto.com/user' \
  -H 'accept: application/json' \
  -H 'X-API-Key: 2KBAD2FFG45PKSGW0CC9QM3P1501FB453GDC7KD5H9DDBRNR7VGJ'
```
:::caution
Un'API key con annessa chiave pubblica **non può essere utilizzata in questa modalità**, e le chiamate risulteranno in un `401 Unauthorized`.
:::

#### Con chiave pubblica: header `Authorization: Signature`

Se l'API key ha allegato una chiave pubblica deve obbligatoriamente essere utilizzata in questa modalità. Le RFC ufficiali non offrono ancora un metodo soddisfacente per firmare digitalmente le richieste HTTP, e quindi si è scelto di adottare un draft 
ormai ragionevolmente stabile: [HTTP Message Signatures](https://datatracker.ietf.org/doc/draft-ietf-httpbis-message-signatures/); la sua implementazione Javascript di riferimento, [http-signature](https://www.npmjs.com/package/http-signature), coi suoi 21 milioni di download alla settimana è indice di una discreta adozione del protocollo.

Le chiavi private e pubbliche devono venire generate autonomamente dall'implementatore, tramite questi comandi (o equivalenti):

```
# private key generation:
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem

# public key generation
openssl rsa -in key.pem -pubout > key.pub
```

L'eventuale rotazione delle chiavi deve ovviamente essere gestita autonomamente, poiché ContoAperto conosce esclusivamente la chiave pubblica.

La cifratura avviene utilizzando la chiave privata `key.pem` e indicando come keyId il campo `id` dell'API key, una stringa alfanumerica di 26 caratteri. Gli algoritmi supportati per la creazione della signature sono **rsa-sha1**, **rsa-sha256** e **rsa-sha512**.

:::caution
Un'API key senza chiave pubblica **non può essere utilizzata in questa modalità**, e le chiamate risulteranno in un `401 Unauthorized`.
:::

## Esempio di chiamata

Un'implementazione di esempio, in typescript, potrebbe quindi essere la seguente:

```typescript title="exampleCall.ts"
import crypto from 'crypto';
import fs from 'fs';
import httpSignature from 'http-signature';
import https from 'https';

export const verifySignature = (payload: string, base64signature: string) => {
    const data = Buffer.from(payload);
    const publicKey = fs.readFileSync('./contoaperto.pem', 'ascii');
    const signature = Buffer.from(base64signature, 'base64');
    return crypto.verify('RSA-SHA256', data, publicKey, signature);
};

const req = https.request(
    {
        method: 'GET',
        host: 'api.dev.contoaperto.com',
        path: '/user',
    },
    (response) => {
        let jsonResponse = '';
        const signature = response.headers['x-signature'] as string;

        response.on('data', (chunk) => {
            jsonResponse += chunk;
        });

        response.on('end', () => {
            const isValid = verifySignature(jsonResponse, signature);
            console.log('Response analisys:', { jsonResponse, signature, isValid });
        });
    },
);

httpSignature.sign(req, {
    key: fs.readFileSync('./key.pem', 'ascii'),
    keyId: '01FVD27F7HHRSK11XHNPQ4H2J5',
});

req.end();
```

Questo codice genera una chiamata che, tra i suoi header, ha: 

```
Authorization: Signature keyId="01FVD27F7HHRSK11XHNPQ4H2J5",algorithm="rsa-sha256",signature="2yaZFoJbf/QxPLpQiACb3c7UQwiqRqXa4DS+PAf7v0Yuk8tra3oevMYmiiMMr+2mf37P9zqmwDLuEUSUekipao9QqV/cBZyHhZ5d7NcAA/94m5SrfB7mwAZ8YBTEK64izGYgFfQrzNygUsMu/QiYzpszT+ypbMg7AG7mu17wzKc7/1InuHk9aq9HftR+s0jQtoLkdeHyEnqG1wf2T3DET5hoaDSWVk+VmhhSFGG6uj59a2OI7xDvUxEiuYUIMJVJk73otT0XbBqVzEsUZ4c7ygyymj0sRT8V4jKcHLyENcpEnytD278eJESFXTkk8fa+2dLm+Wtj25zMjLFJAgKaqw=="
```

Si noti che la signature varia di chiamata in chiamata, e può essere configurata in modo da avere una scadenza.

L'output a console sarebbe qualcosa di simile a questo:

```
Response analisys: {
  jsonResponse: '{"id":"01FVAK8VQXTEQ6JES6P4E8A3QK","firstName":"Mario","lastName":"Rossi","email":"mario@test.com","phone":"+39399000000","language":"it"}',
  signature: 'JKvrt56axFApTBEbV2sdT1JGsCfHteMHjnDn7Xz7i77JOPpKgMAh5PzftdZ6yafDepDG+C1gf/+9xRMaXF498SCPRxYN4CA5AmocuK5/KjBA+432SkMnijt3TlrFEfyj1ZhuNK5VSTglrIQ60jsDpKFO7/tpyeXnUJXx1Fqo0tj4Np5GihIuphxa3l7JueRuKcKvuVcxEbosHQi1vKTt2GVUCU70+smZy1w0o2apxaIbfJ5nhZnX/4pv9kmYUeQhzeRphV8Fjt1srvDRzIBawsU2Q2wFA6Xx2ubGTTp0fdehgsS2q3tOQj7KLT7+o0X3GYSAl5BRCiswsZXu+aBudw==',
  isValid: true
}
```
