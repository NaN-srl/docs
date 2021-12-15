# Frontend

Gli oggetti `Frontend` permettono di modificare l'interfaccia utente per uno o più `Contract`. Se un `Contract` non ha un `Frontend` verranno utilizzate le impostazioni di default.

## label

Un nome di riferimento, usato esclusivamente nel pannello di amministrazione

## overview

Un contenitore di oggetti traducibili, tutti opzionali, che sostituiscono i testi di default. Le chiavi disponibili sono gli step possibili del wizard utente:

* **public**: la landing page pubblica
* **take_control**: la pagina in cui una `BusinessEntity` senza amministratore può esser reclamata
* **just_see**: pagina per gli utenti che possono visualizzare ma non amministrare
* **nothing**: pagina per gli utenti che non hanno nessun diritto di visualizzare i dati
* **complete_profile**: dove si chiede di completare i dati della `BusinessEntity`
* **register_method**: dove si chiede di aggiungere un metodo di pagamento
* **check_contracts**: dove si chiede di accettare o rifiutare i contratti proposti
* **check_payments**: dove si chiede di accettare o rifiutare le richieste di pagamento
* **check_subscriptions**: dove si chiede di accettare o rifiutare gli abbonamenti

Gli oggetti traducibili sono oggetti che usano come chiave il codice lingua a 2 caratteri, in minuscolo; l'italiano è obbligatorio, tutte le altre lingue opzionali. Le stringhe possono
essere [codice markdown](https://daringfireball.net/projects/markdown/) e possono contenere i placeholder `{owner}` e `{subject}` per i nomi completi dei firmatari del contratto.

:::note Esempio

```json
{
    "it": "Ciao **{subject}**!\n\nChe *bello* vederti.",
    "en": "Hello **{subject}**!\n\nHow *nice* to see you."
}
```

Nel caso il soggetto ricevente "Mario Rossi" abbia scelto l'italiano, produrrà questo HTML:

```html
<p>Ciao <strong>Mario Rossi</strong>!</p>
<p>Che <em>bello</em> vederti.</p>
```

:::