"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),s=r,h=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1486:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:10},p="Ambienti",c={unversionedId:"ambienti",id:"ambienti",title:"Ambienti",description:"Esistono tre diversi ambienti, o staging, da utilizzare nelle differenti fasi di sviluppo.",source:"@site/docs/ambienti.md",sourceDirName:".",slug:"/ambienti",permalink:"/docs/ambienti",editUrl:"https://github.com/NaN-srl/docs/edit/main/docs/ambienti.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Introduzione",permalink:"/docs/intro"},next:{title:"Autenticazione e sicurezza",permalink:"/docs/autenticazione"}},u=[{value:"Development",id:"development",children:[],level:2},{value:"Sandbox",id:"sandbox",children:[],level:2},{value:"Production",id:"production",children:[],level:2}],m={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ambienti"},"Ambienti"),(0,o.kt)("p",null,"Esistono tre diversi ambienti, o ",(0,o.kt)("em",{parentName:"p"},"staging"),", da utilizzare nelle differenti fasi di sviluppo."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,o.kt)("th",{parentName:"tr",align:null},"REST"),(0,o.kt)("th",{parentName:"tr",align:null},"Authenticazione"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://dev.contoaperto.com"},"dev.contoaperto.com")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://api.dev.contoaperto.com"},"api.dev.contoaperto.com")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://auth.contoaperto.com/auth/realms/ContoApertoDev"},"auth.contoaperto.com/auth/realms/ContoApertoDev"))))),(0,o.kt)("p",null,"Un ambiente in cui tutte le transazioni sono virtuali, e sul quale vengono caricati in anteprima tutti gli aggiornamenti al software. Da utilizzare per le prime fasi dello sviluppo."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Per questo ambiente non si garantisce la continuit\xe0 del servizio, n\xe8 la persistenza e la coerenza dei dati. ","\xc8"," un ambiente di sviluppo e soggetto a variazioni imprevedibili."))),(0,o.kt)("h2",{id:"sandbox"},"Sandbox"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,o.kt)("th",{parentName:"tr",align:null},"REST"),(0,o.kt)("th",{parentName:"tr",align:null},"Authenticazione"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://sandbox.contoaperto.com"},"sandbox.contoaperto.com")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://api.sandbox.contoaperto.com"},"api.sandbox.contoaperto.com")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://auth.contoaperto.com/auth/realms/ContoApertoSandbox"},"auth.contoaperto.com/auth/realms/ContoApertoSandbox"))))),(0,o.kt)("p",null,"Un ambiente in cui tutte le transazioni sono virtuali, e che fornisce le stesse funzionalit\xe0 dell'ambiente di produzione. ","\xc8"," un ambiente stabile, anche se di test, e gestito con le\nstesse politiche dell'ambiente di produzione."),(0,o.kt)("h2",{id:"production"},"Production"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,o.kt)("th",{parentName:"tr",align:null},"REST"),(0,o.kt)("th",{parentName:"tr",align:null},"Authenticazione"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://app.contoaperto.com"},"app.contoaperto.com")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://api.app.contoaperto.com"},"api.app.contoaperto.com")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://auth.contoaperto.com/auth/realms/ContoAperto"},"auth.contoaperto.com/auth/realms/ContoAperto"))))),(0,o.kt)("p",null,"L'ambiente reale, su cui si effettuano transazioni valide."))}d.isMDXComponent=!0}}]);