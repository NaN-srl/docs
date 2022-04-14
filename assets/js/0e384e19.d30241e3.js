"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:1},u="Introduzione",l={unversionedId:"intro",id:"intro",title:"Introduzione",description:"ContoAperto \xe8 una soluzione composta da pi\xf9 componenti separati.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/NaN-srl/docs/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Ambienti",permalink:"/docs/ambienti"}},p={},s=[{value:"API REST",id:"api-rest",level:2},{value:"Pannello di amministrazione",id:"pannello-di-amministrazione",level:2},{value:"Interfaccia utente",id:"interfaccia-utente",level:2},{value:"Webhooks",id:"webhooks",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduzione"},"Introduzione"),(0,i.kt)("p",null,"ContoAperto \xe8 una soluzione composta da pi\xf9 componenti separati."),(0,i.kt)("h2",{id:"api-rest"},"API REST"),(0,i.kt)("p",null,"L'unico punto di accesso al servizio. Espone tutte le funzionalit\xe0 del sistema, e viene utilizzata allo stesso modo da tutti i frontend."),(0,i.kt)("h2",{id:"pannello-di-amministrazione"},"Pannello di amministrazione"),(0,i.kt)("p",null,"Un frontend che permette ai merchant di amministrare i propri contratti e le richieste di pagamento."),(0,i.kt)("h2",{id:"interfaccia-utente"},"Interfaccia utente"),(0,i.kt)("p",null,"Un semplice frontend utilizzato dai clienti per accettare i contratti, gli abbonamenti e per gestire i propri pagamenti."),(0,i.kt)("h2",{id:"webhooks"},"Webhooks"),(0,i.kt)("p",null,"Permettono di registrare uno o pi\xf9 URL che vengono notificati quando cambia qualche dato su ContoAperto."))}f.isMDXComponent=!0}}]);