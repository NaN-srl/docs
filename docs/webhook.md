---
sidebar_position: 40
---

# Webhook

I webhook permettono a un servizio esterno di ricevere una chiamata HTTP per ogni modifica dei dati nel database. Al momento sono implementati per 7 entità differenti:

* BusinessEntity
* Contract
* Invoice *(funzionalità ancora in sviluppo)*
* PaymentMethod
* PaymentRequest
* Payout
* Subscription

I webhook sono direttamente collegati allo *User*, non alla *BusinessEntity* come ci si potrebbe aspettare, nel senso che possono essere modificati e cancellati solo dall'utente
che li ha creati. Si possono creare quanti webhook si desidera, ma ognuno deve puntare a un URL differente; ogni webhook poi viene collegato a una o più *BusinessEntity*,
e riceverà le notifiche che le riguardano.

Due esempi per capire:

**Esempio 1: singolo webhook**
```
https://test.com/incoming
   listen BE 123ABC
   listen BE 456DEF
   listen BE 789GHI
```

**Esempio 2: multipli webhook**
```
https://test.com/incoming/123ABC
   listen BE 123ABC
https://test.com/incoming/456DEF
   listen BE 456DEF
https://test.com/incoming/789GHI
   listen BE 789GHI
```

Il sistema utilizza il servizio <a href="https://aws.amazon.com/it/sns/" target="_blank">AWS SNS</a>, quindi sull'indirizzo di ascolto serve qualcosa in grado di <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-message-and-json-formats.html" target="_blank">ricevere e interpretare i payload SNS</a>.

Per prima cosa occorre fare una **POST /user/webhook** indicando al minimo il targetUrl; è possibile opzionalmente inviare anche gli ID delle BusinessEntity a cui ci si vuole iscrivere;
viene immediatamente mandato un evento contenente un campo `SubscribeURL`: 

![Payload](/img/webhook-payload.png)

Fino a quando non si fa una GET a quell'indirizzo il webhook non sarà attivo. Il target URL deve obbligatoriamente rispondere in HTTPS.

Nel caso l'evento iniziale sia andato perso, se ne può mandare un altro tramite **PUT /user/webhook/{webhookId}**

Si possono aggiungere o togliere le business entity osservate tramite **POST/DELETE /user/webhook/{webhookId}/{entityId}**; esiste una latenza non prevedibile tra il DELETE e l'effettivo termine degli invii di notifiche

A questo punto, per ogni INSERT, UPDATE o DELETE effettuato sulle tabelle elencate all'inizio vi verrà inviata una notifica SNS, i cui campi di interesse sono `Message` e `MessageAttributes`.

**Message**: una stringa JSON con questi dati:
* `action`: create, update o delete
* `entityName`: Contract, PaymentRequest, Subscription...
* `entityId`: l'ID della riga a database che sta venendo modificata (quindi, per esempio, l'ID della PaymentRequest)
* `doneAt`: l'ora in cui l'evento è stato originato, in UTC
* `payload`: un oggetto con tutte le colonne modificate.

:::caution
Il payload utilizza i nomi delle colonne a database, in snake case e differenti da quelle della API. In futuro unificheremo i formati, inserendo un campo `changes` con la struttura "pubblica".
:::


**MessageAttributes**: un oggetto che contiene
* `businessEntity`: un array che contiene l'ID della BusinessEntity collegata all'evento. Per ora una modifica a un Contract, per esempio, genera due messaggi differenti, ma voglio cercare in futuro di generarne uno solo. Al momento l'SDK typescript non sembra supportarlo.