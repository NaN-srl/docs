---
sidebar_position: 10
---

# Ambienti

Esistono tre diversi ambienti, o *staging*, da utilizzare nelle differenti fasi di sviluppo.

## Development
| Frontend                                           | REST                                                       | Authenticazione                                                                                            |
| -------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [dev.contoaperto.com](https://dev.contoaperto.com) | [api.dev.contoaperto.com](https://api.dev.contoaperto.com) | [auth.contoaperto.com/auth/realms/ContoApertoDev](https://auth.contoaperto.com/auth/realms/ContoApertoDev) |

Un ambiente in cui tutte le transazioni sono virtuali, e sul quale vengono caricati in anteprima tutti gli aggiornamenti al software. Da utilizzare per le prime fasi dello sviluppo.

:::warning
Per questo ambiente non si garantisce la continuità del servizio, nè la persistenza e la coerenza dei dati. &Egrave; un ambiente di sviluppo e soggetto a variazioni imprevedibili.
:::

## Sandbox
| Frontend                                                   | REST                                                               | Authenticazione                                                                                                    |
| ---------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| [sandbox.contoaperto.com](https://sandbox.contoaperto.com) | [api.sandbox.contoaperto.com](https://api.sandbox.contoaperto.com) | [auth.contoaperto.com/auth/realms/ContoApertoSandbox](https://auth.contoaperto.com/auth/realms/ContoApertoSandbox) |

Un ambiente in cui tutte le transazioni sono virtuali, e che fornisce le stesse funzionalità dell'ambiente di produzione. &Egrave; un ambiente stabile, anche se di test, e gestito con le 
stesse politiche dell'ambiente di produzione.

## Production
| Frontend                                           | REST                                                       | Authenticazione                                                                                      |
| -------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [app.contoaperto.com](https://app.contoaperto.com) | [api.app.contoaperto.com](https://api.app.contoaperto.com) | [auth.contoaperto.com/auth/realms/ContoAperto](https://auth.contoaperto.com/auth/realms/ContoAperto) |

L'ambiente reale, su cui si effettuano transazioni valide.