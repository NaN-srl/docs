---
sidebar_position: 60
---

# Gestione delle notifiche

Uno dei cardini di ContoAperto è la capillare gestione delle notifiche. Per ogni Contratto, Abbonamento o Richiesta di pagamento è possibile impostare un Piano di Notifiche, scegliendo tra quelli standard offerti dalla piattaforma, oppure creando piani personalizzati.

## Piani di notifica

Un piano di notifica è un set di istruzioni che determina quando, quanti e quali messaggi inviare in risposta a specifici eventi, o in seguito a una pianificazione. Sono composti da due "sezioni": le **notifiche pianificate** e le **notifiche attivate**. Le notifiche pianificate prevedono che l'oggetto sia in uno stato specifico (es. *draft*) e hanno una data di riferimento sui cui calcolare i giorni di invio (es, *dueDate*), specificando poi quanti giorni prima o dopo devono attivarsi. Le notifiche attivate, invece, partono quando l'oggetto passa da un certo stato (opzionale) a un altro. Per entrambe le notifiche è possibile inviare il messaggio sia all'entità "owner" che a quella "subject".

## Template di messaggio

Un template di messaggio è radicato su uno specifico oggetto, di cui riceve i dati come placeholder. Hh tre campi: un messaggio breve, usato per gli SMS, più oggetto e messaggio lungo utilizzati per le mail. Questi tre campi sono multilingua.

### Placeholders

I placeholder sono delle sequenza di caratteri compresi tra parentesi graffe che vengono sostituiti dai valori dell'oggetto della comunicazione. Le date e i numeri vengono localizzati.

#### Comuni e riutilizzati

Questi valori vengono spesso riutilizzati all'interno delle altre strutture, e si agganciano al placeholder. Per esempio, il `fullName` dell'`owner` di un `contract` si rappresenta con `{contract.owner.fullName}`.

##### BusinessEntity
```
.id
.profile
.fullName
.fiscalData.fiscalCode
.fiscalData.vat
.email
.headquarters.address
.headquarters.city
.headquarters.zip
.headquarters.state
.headquarters.country
.contact.firstName
.contact.lastName
.contact.birthday
.contact.nationality
.contact.residence
.contact.address.address
.contact.address.city
.contact.address.zip
.contact.address.state
.contact.address.country
```

##### PaymentMethod
```
.id
.label
.expire
.type
```

#### Contratto
```
contract.id
contract.owner              ---> BusinessEntity
contract.subject            ---> BusinessEntity
contract.freezedSubject     ---> BusinessEntity
contract.type
contract.status
contract.startDate
contract.endDate
```

#### Abbonamento
```
subscription.id
subscription.title
subscription.description
subscription.contract       ---> Contract
subscription.payer          ---> BusinessEntity
subscription.payee          ---> BusinessEntity
subscription.method         ---> PaymentMethod
subscription.status
subscription.fromDate
subscription.toDate
```

#### Richiesta di pagamento
```
paymentRequest.id
paymentRequest.title
paymentRequest.description
paymentRequest.contract     ---> Contract
paymentRequest.payer        ---> BusinessEntity
paymentRequest.payee        ---> BusinessEntity
paymentRequest.method       ---> PaymentMethod
paymentRequest.status
paymentRequest.amount
paymentRequest.dueDate
paymentRequest.postponedDate
```