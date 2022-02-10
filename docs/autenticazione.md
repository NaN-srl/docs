---
sidebar_position: 20
---
# Autenticazione e sicurezza

## Sicurezza

Trattando dati estremamente sensibili, è consigliabile attuare misure di prevenzione più forti rispetto ad altri webservice.

### Firma crittografica dei payload

Tutte le risposte delle API REST sono firmate digitalmente, in modo che il client possa verificare che il payload ricevuto sia stato realmente generato da ContoAperto. La chiave pubblica è esposta direttamente sulle API, tramite una chiamata che non richiede autenticazione: [`GET /system/public-key`](https://api.dev.contoaperto.com/system/public-key). L'header di risposta `X-Signature` contiene l'encoding Base64 della **PKCS #1 v1.5 RSA digest signature con SHA256**: per un'implementazione di esempio si veda [l'esempio a fondo pagina](#esempio-di-chiamata).

Analogamente, se il client utilizza un'API key con annessa chiave pubblica, può aggiungere un header di richiesta `X-Signature` generato nella stessa maniera, e il server verificherà la coerenza della richiesta prima di accettarla.

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
import http from 'http';
import httpSignature from 'http-signature';
import https from 'https';

// Per prima cosa occorre caricare le chiavi crittografiche

// La propria chiave privata: conservarla col codice è una cattiva idea, questo è solo un esempio
const PRIVATE_CLIENT_KEY = fs.readFileSync('./key.pem', 'ascii');

// La chiave pubblica di ContoAperto: si può recuperare ad ogni chiamata, ma per motivi di performance
// è consigliabile tenere una copia locale.
const PUBLIC_SERVER_KEY = fs.readFileSync('./contoaperto.pem', 'ascii');

// Funzione che verifica una signature usando la chiave pubblica di ContoAperto
const verifySignature = (payload: string, base64signature: string) => {
    const data = Buffer.from(payload);
    const signature = Buffer.from(base64signature, 'base64');
    return crypto.verify('RSA-SHA256', data, PUBLIC_SERVER_KEY, signature);
};

// Funzione che calcola una signature usando la propria chiave privata
const calculateSignature = (payload: string) => {
    const data = Buffer.from(payload);
    return crypto.sign('RSA-SHA256', data, PRIVATE_CLIENT_KEY).toString('base64');
};

// Funzione che gestisce effettivamente la risposta dal server
const manageRequest = (response: http.IncomingMessage) => {
    // Annotiamo la signature della risposta
    const signature = response.headers['x-signature'] as string;

    // Riceviamo il corpo della risposta
    let jsonResponse = '';
    response.on('data', (chunk) => (jsonResponse += chunk));

    // Quando l'invio è giunto al termine verifichiamo la correttezza della signature
    response.on('end', () => {
        const isValid = verifySignature(jsonResponse, signature);
        console.log('Risultato:', { jsonResponse, isValid });
    });
};

// Funzione che aggiunge l'header di autenticazione a una richiesta.
// Aggiungere l'header della signature al checksum è opzionale, il server controlla comunque
// la validità dell'header X-Signature in un passaggio separato
const addApiKeySignature = (req: http.ClientRequest) => {
    httpSignature.sign(req, {
        key: PRIVATE_CLIENT_KEY,
        keyId: '01FVD27F7HHRSK11XHNPQ4H2J5',
        headers: ['date', 'x-signature'],
    });
};

// ##################################
// # ESEMPIO DI CHIAMATA POST/PUT   #
// ##################################

// Costruiamo il payload della richiesta
const data = JSON.stringify({ language: 'it' });

// Creiamo la richiesta, aggiungendo gli header necessari alla gestione del payload
const reqPut = https.request(
    {
        method: 'PUT',
        host: 'api.dev.contoaperto.com',
        path: '/user',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
            'X-Signature': calculateSignature(data),
        },
    },
    manageRequest,
);

// Firmiamo la richiesta
addApiKeySignature(reqPut);

// Aggiungiamo il payload alla richiesta
reqPut.write(data);

// Lanciamo la richiesta e attendiamo la risposta
reqPut.end();

// ##################################
// # ESEMPIO DI CHIAMATA GET/DELETE #
// ##################################

// Creiamo la richiesta, aggiungendo lo stesso la signature; questo passaggio è opzionale per il server,
// ma per come stiamo configurando la libreria http-signature dobbiamo lo stesso valorizzare l'header per non
// incorrere in errore
const reqGet = https.request(
    {
        method: 'GET',
        host: 'api.dev.contoaperto.com',
        path: '/user',
        headers: {
            'X-Signature': calculateSignature(''),
        },
    },
    manageRequest,
);

// Firmiamo la richiesta
addApiKeySignature(reqGet);

// Lanciamo la richiesta e attendiamo la risposta
reqGet.end();
```

Questo codice genera una chiamata che, tra i suoi header, ha: 

```
Authorization: Signature keyId="01FVD27F7HHRSK11XHNPQ4H2J5",algorithm="rsa-sha256",signature="2yaZFoJbf/QxPLpQiACb3c7UQwiqRqXa4DS+PAf7v0Yuk8tra3oevMYmiiMMr+2mf37P9zqmwDLuEUSUekipao9QqV/cBZyHhZ5d7NcAA/94m5SrfB7mwAZ8YBTEK64izGYgFfQrzNygUsMu/QiYzpszT+ypbMg7AG7mu17wzKc7/1InuHk9aq9HftR+s0jQtoLkdeHyEnqG1wf2T3DET5hoaDSWVk+VmhhSFGG6uj59a2OI7xDvUxEiuYUIMJVJk73otT0XbBqVzEsUZ4c7ygyymj0sRT8V4jKcHLyENcpEnytD278eJESFXTkk8fa+2dLm+Wtj25zMjLFJAgKaqw=="
```

Si noti che la signature varia di chiamata in chiamata, e può essere configurata in modo da avere una scadenza.

L'output a console sarebbe qualcosa di simile a questo:

```
Risultato: {
  jsonResponse: '{"id":"01FVAK8VQXTEQ6JES6P4E8A3QK","firstName":"Mario","lastName":"Rossi","email":"mario@test.com","phone":"+39399000000","language":"en"}',
  isValid: true
}
Risultato: {
  jsonResponse: '{"id":"01FVAK8VQXTEQ6JES6P4E8A3QK","firstName":"Mario","lastName":"Rossi","email":"mario@test.com","phone":"+39399000000","language":"it"}',
  isValid: true
}
```
