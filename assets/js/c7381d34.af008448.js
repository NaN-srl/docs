"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[544],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},534:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:40},s="Webhook",p={unversionedId:"webhook",id:"webhook",title:"Webhook",description:"I webhook permettono a un servizio esterno di ricevere una chiamata HTTP per ogni modifica dei dati nel database. Al momento sono implementati per 7 entit\xe0 differenti:",source:"@site/docs/webhook.md",sourceDirName:".",slug:"/webhook",permalink:"/docs/webhook",editUrl:"https://github.com/NaN-srl/docs/edit/main/docs/webhook.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"User",permalink:"/docs/oggetti/User"},next:{title:"Personalizzare l'interfaccia",permalink:"/docs/personalizzazioni"}},c=[],u={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhook"},"Webhook"),(0,o.kt)("p",null,"I webhook permettono a un servizio esterno di ricevere una chiamata HTTP per ogni modifica dei dati nel database. Al momento sono implementati per 7 entit\xe0 differenti:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BusinessEntity"),(0,o.kt)("li",{parentName:"ul"},"Contract"),(0,o.kt)("li",{parentName:"ul"},"Invoice ",(0,o.kt)("em",{parentName:"li"},"(funzionalit\xe0 ancora in sviluppo)")),(0,o.kt)("li",{parentName:"ul"},"PaymentMethod"),(0,o.kt)("li",{parentName:"ul"},"PaymentRequest"),(0,o.kt)("li",{parentName:"ul"},"Payout"),(0,o.kt)("li",{parentName:"ul"},"Subscription")),(0,o.kt)("p",null,"I webhook sono direttamente collegati allo ",(0,o.kt)("em",{parentName:"p"},"User"),", non alla ",(0,o.kt)("em",{parentName:"p"},"BusinessEntity")," come ci si potrebbe aspettare, nel senso che possono essere modificati e cancellati solo dall'utente\nche li ha creati. Si possono creare quanti webhook si desidera, ma ognuno deve puntare a un URL differente; ogni webhook poi viene collegato a una o pi\xf9 ",(0,o.kt)("em",{parentName:"p"},"BusinessEntity"),",\ne ricever\xe0 le notifiche che le riguardano."),(0,o.kt)("p",null,"Due esempi per capire:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Esempio 1: singolo webhook")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://test.com/incoming\n   listen BE 123ABC\n   listen BE 456DEF\n   listen BE 789GHI\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Esempio 2: multipli webhook")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://test.com/incoming/123ABC\n   listen BE 123ABC\nhttps://test.com/incoming/456DEF\n   listen BE 456DEF\nhttps://test.com/incoming/789GHI\n   listen BE 789GHI\n")),(0,o.kt)("p",null,"Il sistema utilizza il servizio ",(0,o.kt)("a",{href:"https://aws.amazon.com/it/sns/",target:"_blank"},"AWS SNS"),", quindi sull'indirizzo di ascolto serve qualcosa in grado di ",(0,o.kt)("a",{href:"https://docs.aws.amazon.com/sns/latest/dg/sns-message-and-json-formats.html",target:"_blank"},"ricevere e interpretare i payload SNS"),"."),(0,o.kt)("p",null,"Per prima cosa occorre fare una ",(0,o.kt)("strong",{parentName:"p"},"POST /user/webhook")," indicando al minimo il targetUrl; \xe8 possibile opzionalmente inviare anche gli ID delle BusinessEntity a cui ci si vuole iscrivere;\nviene immediatamente mandato un evento contenente un campo ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscribeURL"),": "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Payload",src:n(6007).Z})),(0,o.kt)("p",null,"Fino a quando non si fa una GET a quell'indirizzo il webhook non sar\xe0 attivo. Il target URL deve obbligatoriamente rispondere in HTTPS."),(0,o.kt)("p",null,"Nel caso l'evento iniziale sia andato perso, se ne pu\xf2 mandare un altro tramite ",(0,o.kt)("strong",{parentName:"p"},"PUT /user/webhook/{webhookId}")),(0,o.kt)("p",null,"Si possono aggiungere o togliere le business entity osservate tramite ",(0,o.kt)("strong",{parentName:"p"},"POST/DELETE /user/webhook/{webhookId}/{entityId}"),"; esiste una latenza non prevedibile tra il DELETE e l'effettivo termine degli invii di notifiche"),(0,o.kt)("p",null,"A questo punto, per ogni INSERT, UPDATE o DELETE effettuato sulle tabelle elencate all'inizio vi verr\xe0 inviata una notifica SNS, i cui campi di interesse sono ",(0,o.kt)("inlineCode",{parentName:"p"},"Message")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageAttributes"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Message"),": una stringa JSON con questi dati:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"action"),": create, update o delete"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entityName"),": Contract, PaymentRequest, Subscription..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entityId"),": l'ID della riga a database che sta venendo modificata (quindi, per esempio, l'ID della PaymentRequest)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"doneAt"),": l'ora in cui l'evento \xe8 stato originato, in UTC"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload"),": un oggetto con tutte le colonne modificate.")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Il payload utilizza i nomi delle colonne a database, in snake case e differenti da quelle della API. In futuro unificheremo i formati, inserendo un campo ",(0,o.kt)("inlineCode",{parentName:"p"},"changes"),' con la struttura "pubblica".'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MessageAttributes"),": un oggetto che contiene"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"businessEntity"),": un array che contiene l'ID della BusinessEntity collegata all'evento. Per ora una modifica a un Contract, per esempio, genera due messaggi differenti, ma voglio cercare in futuro di generarne uno solo. Al momento l'SDK typescript non sembra supportarlo.")))}m.isMDXComponent=!0},6007:function(e,t,n){t.Z=n.p+"assets/images/webhook-payload-44bbcfb7be0e82b7cbc597bc061833ed.png"}}]);