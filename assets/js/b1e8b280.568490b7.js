"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[585],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:60},c="Gestione delle notifiche",l={unversionedId:"notifiche",id:"notifiche",title:"Gestione delle notifiche",description:"Uno dei cardini di ContoAperto \xe8 la capillare gestione delle notifiche. Per ogni Contratto, Abbonamento o Richiesta di pagamento \xe8 possibile impostare un Piano di Notifiche, scegliendo tra quelli standard offerti dalla piattaforma, oppure creando piani personalizzati.",source:"@site/docs/notifiche.md",sourceDirName:".",slug:"/notifiche",permalink:"/docs/notifiche",editUrl:"https://github.com/NaN-srl/docs/edit/main/docs/notifiche.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Personalizzare l'interfaccia",permalink:"/docs/personalizzazioni"},next:{title:"Esempi di flusso",permalink:"/docs/esempi"}},p={},u=[{value:"Piani di notifica",id:"piani-di-notifica",level:2},{value:"Template di messaggio",id:"template-di-messaggio",level:2},{value:"Placeholders",id:"placeholders",level:3},{value:"Comuni e riutilizzati",id:"comuni-e-riutilizzati",level:4},{value:"BusinessEntity",id:"businessentity",level:5},{value:"PaymentMethod",id:"paymentmethod",level:5},{value:"Contratto",id:"contratto",level:4},{value:"Abbonamento",id:"abbonamento",level:4},{value:"Richiesta di pagamento",id:"richiesta-di-pagamento",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gestione-delle-notifiche"},"Gestione delle notifiche"),(0,o.kt)("p",null,"Uno dei cardini di ContoAperto \xe8 la capillare gestione delle notifiche. Per ogni Contratto, Abbonamento o Richiesta di pagamento \xe8 possibile impostare un Piano di Notifiche, scegliendo tra quelli standard offerti dalla piattaforma, oppure creando piani personalizzati."),(0,o.kt)("h2",{id:"piani-di-notifica"},"Piani di notifica"),(0,o.kt)("p",null,'Un piano di notifica \xe8 un set di istruzioni che determina quando, quanti e quali messaggi inviare in risposta a specifici eventi, o in seguito a una pianificazione. Sono composti da due "sezioni": le ',(0,o.kt)("strong",{parentName:"p"},"notifiche pianificate")," e le ",(0,o.kt)("strong",{parentName:"p"},"notifiche attivate"),". Le notifiche pianificate prevedono che l'oggetto sia in uno stato specifico (es. ",(0,o.kt)("em",{parentName:"p"},"draft"),") e hanno una data di riferimento sui cui calcolare i giorni di invio (es, ",(0,o.kt)("em",{parentName:"p"},"dueDate"),'), specificando poi quanti giorni prima o dopo devono attivarsi. Le notifiche attivate, invece, partono quando l\'oggetto passa da un certo stato (opzionale) a un altro. Per entrambe le notifiche \xe8 possibile inviare il messaggio sia all\'entit\xe0 "owner" che a quella "subject".'),(0,o.kt)("h2",{id:"template-di-messaggio"},"Template di messaggio"),(0,o.kt)("p",null,"Un template di messaggio \xe8 radicato su uno specifico oggetto, di cui riceve i dati come placeholder. Hh tre campi: un messaggio breve, usato per gli SMS, pi\xf9 oggetto e messaggio lungo utilizzati per le mail. Questi tre campi sono multilingua."),(0,o.kt)("h3",{id:"placeholders"},"Placeholders"),(0,o.kt)("p",null,"I placeholder sono delle sequenza di caratteri compresi tra parentesi graffe che vengono sostituiti dai valori dell'oggetto della comunicazione. Le date e i numeri vengono localizzati."),(0,o.kt)("h4",{id:"comuni-e-riutilizzati"},"Comuni e riutilizzati"),(0,o.kt)("p",null,"Questi valori vengono spesso riutilizzati all'interno delle altre strutture, e si agganciano al placeholder. Per esempio, il ",(0,o.kt)("inlineCode",{parentName:"p"},"fullName")," dell'",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," di un ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," si rappresenta con ",(0,o.kt)("inlineCode",{parentName:"p"},"{contract.owner.fullName}"),"."),(0,o.kt)("h5",{id:"businessentity"},"BusinessEntity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".id\n.profile\n.fullName\n.fiscalData.fiscalCode\n.fiscalData.vat\n.email\n.headquarters.address\n.headquarters.city\n.headquarters.zip\n.headquarters.state\n.headquarters.country\n.contact.firstName\n.contact.lastName\n.contact.birthday\n.contact.nationality\n.contact.residence\n.contact.address.address\n.contact.address.city\n.contact.address.zip\n.contact.address.state\n.contact.address.country\n")),(0,o.kt)("h5",{id:"paymentmethod"},"PaymentMethod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".id\n.label\n.expire\n.type\n")),(0,o.kt)("h4",{id:"contratto"},"Contratto"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"contract.id\ncontract.owner              ---\x3e BusinessEntity\ncontract.subject            ---\x3e BusinessEntity\ncontract.freezedSubject     ---\x3e BusinessEntity\ncontract.type\ncontract.status\ncontract.startDate\ncontract.endDate\n")),(0,o.kt)("h4",{id:"abbonamento"},"Abbonamento"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"subscription.id\nsubscription.title\nsubscription.description\nsubscription.contract       ---\x3e Contract\nsubscription.payer          ---\x3e BusinessEntity\nsubscription.payee          ---\x3e BusinessEntity\nsubscription.method         ---\x3e PaymentMethod\nsubscription.status\nsubscription.fromDate\nsubscription.toDate\n")),(0,o.kt)("h4",{id:"richiesta-di-pagamento"},"Richiesta di pagamento"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"paymentRequest.id\npaymentRequest.title\npaymentRequest.description\npaymentRequest.contract     ---\x3e Contract\npaymentRequest.payer        ---\x3e BusinessEntity\npaymentRequest.payee        ---\x3e BusinessEntity\npaymentRequest.method       ---\x3e PaymentMethod\npaymentRequest.status\npaymentRequest.amount\npaymentRequest.dueDate\npaymentRequest.postponedDate\n")))}m.isMDXComponent=!0}}]);