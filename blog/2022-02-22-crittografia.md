---
slug: crittografia-sicurezza
title: Crittografia e sicurezza
authors: belinde
tags: [annunci, sicurezza]
---

La sicurezza è un aspetto importante di ContoAperto, e facciamo ogni sforzo per implementare tutte le migliori soluzioni per garantirla: dalle basi, con l'autenticazione.

<!--truncate-->

La sezione [Autenticazione e sicurezza](/docs/autenticazione) è già stata aggiornata per descrivere queste nuove funzionalità: da un lato è stata introdotta una nuova forma di autenticazione tramite API key che si basa sulla crittografia a chiave assimmetrica, dall'altro il server firma ogni payload di risposta in modo che l'affidabilità del messaggio possa essere confermato tramite la chiave pubblica, liberamente disponibile per tutti.

A margine, l'intera infrstruttura di autenticazione è stata riscritta, e ora si basa sul progetto open source [Keycloak](https://www.keycloak.org/). Questo ci garantisce un'elasticità molto maggiore rispetto al preesistente [AWS Cognito](https://aws.amazon.com/it/cognito/), e ci permette di guardare al futuro con una possibile integrazione col sistema [SpID](https://www.spid.gov.it/).