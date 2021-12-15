"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[406],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(g,a(a({ref:t},s),{},{components:n})):i.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1068:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={},c="Frontend",p={unversionedId:"oggetti/Frontend",id:"oggetti/Frontend",title:"Frontend",description:"Gli oggetti Frontend permettono di modificare l'interfaccia utente per uno o pi\xf9 Contract. Se un Contract non ha un Frontend verranno utilizzate le impostazioni di default.",source:"@site/docs/oggetti/Frontend.md",sourceDirName:"oggetti",slug:"/oggetti/Frontend",permalink:"/docs/oggetti/Frontend",editUrl:"https://github.com/NaN-srl/docs/edit/main/docs/oggetti/Frontend.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract",permalink:"/docs/oggetti/Contract"},next:{title:"KYCDocument",permalink:"/docs/oggetti/KYCDocument"}},s=[{value:"label",id:"label",children:[],level:2},{value:"overview",id:"overview",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"Gli oggetti ",(0,o.kt)("inlineCode",{parentName:"p"},"Frontend")," permettono di modificare l'interfaccia utente per uno o pi\xf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract"),". Se un ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract")," non ha un ",(0,o.kt)("inlineCode",{parentName:"p"},"Frontend")," verranno utilizzate le impostazioni di default."),(0,o.kt)("h2",{id:"label"},"label"),(0,o.kt)("p",null,"Un nome di riferimento, usato esclusivamente nel pannello di amministrazione"),(0,o.kt)("h2",{id:"overview"},"overview"),(0,o.kt)("p",null,"Un contenitore di oggetti traducibili, tutti opzionali, che sostituiscono i testi di default. Le chiavi disponibili sono gli step possibili del wizard utente:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"public"),": la landing page pubblica"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"take_control"),": la pagina in cui una ",(0,o.kt)("inlineCode",{parentName:"li"},"BusinessEntity")," senza amministratore pu\xf2 esser reclamata"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"just_see"),": pagina per gli utenti che possono visualizzare ma non amministrare"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nothing"),": pagina per gli utenti che non hanno nessun diritto di visualizzare i dati"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"complete_profile"),": dove si chiede di completare i dati della ",(0,o.kt)("inlineCode",{parentName:"li"},"BusinessEntity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"register_method"),": dove si chiede di aggiungere un metodo di pagamento"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"check_contracts"),": dove si chiede di accettare o rifiutare i contratti proposti"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"check_payments"),": dove si chiede di accettare o rifiutare le richieste di pagamento"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"check_subscriptions"),": dove si chiede di accettare o rifiutare gli abbonamenti")),(0,o.kt)("p",null,"Gli oggetti traducibili sono oggetti che usano come chiave il codice lingua a 2 caratteri, in minuscolo; l'italiano \xe8 obbligatorio, tutte le altre lingue opzionali. Le stringhe possono\nessere ",(0,o.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/"},"codice markdown")," e possono contenere i placeholder ",(0,o.kt)("inlineCode",{parentName:"p"},"{owner}")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"{subject}")," per i nomi completi dei firmatari del contratto."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Esempio")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "it": "Ciao **{subject}**!\\n\\nChe *bello* vederti.",\n    "en": "Hello **{subject}**!\\n\\nHow *nice* to see you."\n}\n')),(0,o.kt)("p",{parentName:"div"},'Nel caso il soggetto ricevente "Mario Rossi" abbia scelto l\'italiano, produrr\xe0 questo HTML:'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<p>Ciao <strong>Mario Rossi</strong>!</p>\n<p>Che <em>bello</em> vederti.</p>\n")))))}d.isMDXComponent=!0}}]);