---
sidebar_position: 50
---

# Personalizzare l'interfaccia

L'interfaccia utente, ovvero quella in cui i clienti finali gestiscono i propri pagamenti, può essere in qualche misura personalizzata per rispondere alle proprie esigenze comunicative.

## Vista per Contract

Il metodo più semplice (e da cui derivano tutti gli altri) è inviare gli utenti alla pagina di contratto:

`https://[STAGING].contoaperto.com/contract/[CONTRACT_ID]`

In questo modo, nell'header verrà chiaramente mostrato il nome della Business Entity che detiene il contratto.

## Modificare i testi

Quasi tutti i testi possono essere modificati agganciando un [oggetto Frontend](/docs/oggetti/Frontend) al `Contract`