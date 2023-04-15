/*! For license information please see main.ff499b64.chunk.js.LICENSE.txt */
(this.webpackJsonpjitetb=this.webpackJsonpjitetb||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/black_logo.c332354c.jpg"},29:function(e,t,n){e.exports=n.p+"static/media/green_logo.cfe0be56.jpg"},33:function(e,t,n){e.exports=n(54)},38:function(e,t,n){},39:function(e,t,n){var a={"./about.jsx":40,"./catalog.jsx":43,"./contact.jsx":44,"./home.jsx":47,"./news.jsx":49};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=39},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(10),i=n(11),c=n(8),l=n(28),s=n.n(l),u=n(29),m=n.n(u);n(41);t.default=function(){var e="Just In Time Engineering Technology Bangladesh";return r.a.createElement(o.a,null,r.a.createElement(i.a,{className:"flex-row-reverse justify-content-center pt-5"},r.a.createElement(c.a,{xs:12,sm:8,md:4,className:"d-flex flex-column justify-content-center"},r.a.createElement("div",{style:{position:"relative",width:"100%",maxWidth:"calc(100% - 4vw)"}},r.a.createElement("img",{style:{width:"inherit",position:"absolute"},src:s.a,alt:e,loading:"lazy"}),r.a.createElement("img",{style:{width:"inherit",position:"relative",animation:"fadeSwap 15s ease-in-out infinite"},src:m.a,alt:e,loading:"lazy",className:"animeImg"}))),r.a.createElement(c.a,{xs:12,sm:10,md:6},r.a.createElement("h1",{className:"text-center py-3"},"About Us"),r.a.createElement("p",null,"The aim of JITETB Limited is to provide the latest useful technology of the world to our customers. We always try to introduce new technology which support the existing technology. We try to work in an environment where both suppliers and clients are in a win win situation. Our marketing aim is towards the customers' satisfaction. At the same time, we intimate to our suppliers about the needs of our clients. Basically we make a bridge between our suppliers and clients."))))}},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(8),i=n(20),c=n(32),l=n(10),s=n(11);t.default=function(e){var t=e.suppliers.map((function(e){var t=e.image,n=e.link,a=e.title,l=e.catalog;return r.a.createElement(o.a,{key:"catalog"+a,sm:12,md:5,lg:4},r.a.createElement(i.a,{className:"m-3"},r.a.createElement("a",{href:l,target:"_blank"},r.a.createElement(i.a.Img,{src:t,variant:"top",alt:a})),r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,null,"\xa0",a),r.a.createElement(c.a,{variant:"outline-warning",target:"_blank",href:n,style:{marginTop:"1em",width:"100%"}},"Visit Site"),r.a.createElement(c.a,{variant:"warning",target:"_blank",href:l,style:{marginTop:"1em",width:"100%"}},"View Catalogue"))))}));return r.a.createElement(l.a,null,r.a.createElement("h1",{className:"text-center py-5"},"Catalogues"),r.a.createElement(s.a,{className:"justify-content-center px-lg-5"},t))}},44:function(e,t,n){"use strict";n.r(t);var a=n(55),r=n(8),o=n(10),i=n(11),c=n(24),l=n(23),s=n(31),u=n(19),m=n(1),h=n.n(m),f=[{branch:"Corporate Office",address:[{icon:l.a,value:h.a.createElement(h.a.Fragment,null,"House 67/C Road 6/A ",h.a.createElement("br",null),"Cantonment R.A. ",h.a.createElement("br",null),"Dhaka Cantonment Dhaka")},{icon:c.a,value:"+880 171 681 4208"}]},{branch:"Mymensingh Office",address:[{icon:l.a,value:h.a.createElement(h.a.Fragment,null,"House 196/A ",h.a.createElement("br",null),"R.K. Misson Road ",h.a.createElement("br",null),"Mymensingh")},{icon:c.a,value:"+880 173 299 8295"}]},{branch:"Social Network",address:[{icon:s.a,value:"jitbdgroup@gmail.com"},{icon:u.b,value:"+880 153 517 4014"},{icon:u.c,value:"+880 153 517 4014"},{icon:u.a,value:"+880 153 517 4014"}]}],p={minWidth:"2em",minHeight:"2em",backgroundRepeat:"no-repeat",backgroundSize:"2em 2em"};function d(e){var t=e.icon,n=e.value;return h.a.createElement(a.a,{direction:"horizontal",gap:3,style:{paddingTop:"1rem"}},Object(m.createElement)(t,{style:p}),h.a.createElement("p",null,n))}var v=f.map((function(e){var t=e.branch,n=e.address;return h.a.createElement(r.a,{key:t,xs:10,sm:5,lg:3,style:{paddingTop:"1rem"}},h.a.createElement("h2",{className:"text-center"},t),n.map((function(e,n){var a=e.icon,r=e.value;return h.a.createElement(d,{key:t+n,icon:a,value:r})})))}));t.default=function(){return h.a.createElement(o.a,null,h.a.createElement("h1",{className:"text-center pt-5 pb-3"},"Contact Us"),h.a.createElement(i.a,{className:"justify-content-around pb-3"},v))}},47:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(10),i=n(11),c=n(8);n(48);t.default=function(e){var t=e.suppliers.map((function(e,t){var n=e.image,a=e.link,o=e.title;return r.a.createElement("a",{key:"home-suppliers"+o+t,href:a,target:"blank",style:{marginRight:"3em"}},r.a.createElement("img",{src:n,loading:"lazy",alt:o,style:{width:"16em"}}))})),n=e.suppliers.length/2,a=e.customers.map((function(e,t){var n=e.image,a=e.link,o=e.title;return r.a.createElement("a",{key:"home-customers"+o+t,href:a,target:"blank",style:{marginRight:"3em"}},r.a.createElement("img",{src:n,loading:"lazy",alt:o,style:{height:"6em"}}))})),l={"--suppliersCount":n,whiteSpace:"nowrap",animation:"suppliers-animation "+3*n+"s linear 1s infinite"},s={overflow:"hidden"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{fluid:!0,style:{height:"inherit"}},r.a.createElement(i.a,{className:"justify-content-center",style:{backgroundColor:"#D7E1E1",height:"50%",minHeight:"calc(380px / 2)"}},r.a.createElement("p",{className:"h1 text-center pt-5"},"Our Principals"),r.a.createElement(c.a,{sm:12,md:8,style:s},r.a.createElement(o.a,{style:l},t))),r.a.createElement(i.a,{className:"justify-content-center",style:{backgroundColor:"#E4DCC6",height:"50%",minHeight:"calc(380px / 2)"}},r.a.createElement("p",{className:"h1 text-center pt-5"},"Our Clients"),r.a.createElement(c.a,{sm:12,md:8,style:s},r.a.createElement(o.a,{style:{whiteSpace:"nowrap",animation:"customers-animation 15s linear 1s infinite"}},a)))))}},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),i=n(8),c=n(10),l=[{heading:"Elevator Analysis and Monitoring Tester",image:"ea7.jpg",title:"Elevator Analytics - EA7 - Qameleon Technology",body:r.a.createElement(r.a.Fragment,null,"Elevator Analyics\u2122 is a new elevator analysis and monitoring tools by Qameleon. Building upon the company's existing technology, the product looks for meaningful patterns in an elevator's operation and is promoted as workable with any elevator, regardless of age. The ",r.a.createElement("b",null,"EA7 Elevator Analyzer")," was designed with input from inspectors, consultants and mechanics. Working with your laptop, it provides real-time information about an elevator's operation, creates a permanent record of every trip and automatically generates reports. It can be setup in minutes inside the car and does not interfere with the elevator's operation. Uses include inspection, troubleshooting, load testing, pre-modernization evaluation and traffic-analysis enhancement.")},{heading:"Installational Mannual: Basic field practices for installation of elevator and escalator equipment",image:"nemi.png",title:"Installational Mannual: Basic field practices for installation of elevator and escalator equipment",body:r.a.createElement(r.a.Fragment,null,"Grab your copy of the latest edition of Installation Manual at ",r.a.createElement("a",{href:"https://www.elevatorbooks.com/"},"Elevator Books"),". We do not own this manual. For furthur query, contact ",r.a.createElement("a",{href:"https://www.elevatorworld.com/"},"Elevator World"),". To read the older version ",r.a.createElement("a",{href:"https://drive.google.com/file/d/1-mtrv-OVJ7pT1RIXaJ8PYfoPLA5eQSwb/view?usp=sharing"},"Click here"))}].map((function(e,t){var a=e.heading,c=e.image,l=e.title,s=e.body,u=n(50)("./"+c);return r.a.createElement(o.a,{key:l+t,className:"pb-5 justify-content-center"},r.a.createElement(i.a,{xs:8,sm:3,className:"pb-3"},r.a.createElement("img",{src:u,alt:l,style:{width:"90%"}})),r.a.createElement(i.a,{sm:10,lg:8},r.a.createElement("h3",null,a),s))}));t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",{className:"text-center py-5"},"News"),l)}},50:function(e,t,n){var a={"./ea7.jpg":51,"./nemi.png":52};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=50},51:function(e,t,n){e.exports=n.p+"static/media/ea7.b11e415d.jpg"},52:function(e,t,n){e.exports=n.p+"static/media/nemi.6aa8ec05.png"},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(27),i=n.n(o),c=(n(38),n(14)),l=n(15),s=n(18),u=n(17),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={navbar_is_collapsed:!0},a}return Object(l.a)(n,[{key:"toggleNavCollapse",value:function(){this.setState({navbar_is_collapsed:!this.state.navbar_is_collapsed})}},{key:"CollapseNavbar",value:function(){this.setState({navbar_is_collapsed:!1})}},{key:"render",value:function(){var e=this,t=this.props.routes.map((function(t,n){var a=t.title;return r.a.createElement("button",{key:"anchor"+a,className:"nav-link",onClick:function(){e.props.changeRoute(n),e.state.navbar_is_collapsed||e.toggleNavCollapse()}},a)}));return r.a.createElement("nav",{className:"navbar custom-expand navbar-light bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"navbar-brand"},r.a.createElement("img",{src:"favicon.svg",alt:"",width:"30",height:"24",className:"d-inline-block align-text-top"}),"JITETB"),r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:function(){return e.toggleNavCollapse()}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:this.state.navbar_is_collapsed?"collapse navbar-collapse":"collapse navbar-collapse show"},r.a.createElement("nav",{className:"navbar-nav nav-pills pt-3"},t,r.a.createElement("a",{className:"nav-link",href:"https://forms.gle/Hvs7o597eUcurnhq8"},"Get Price")))))}}]),n}(a.Component),h=n(9),f=n(7),p=n(10),d=n(22);function v(){v=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new N(r||[]);return a(i,"_invoke",{value:k(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var m={};function h(){}function f(){}function p(){}var d={};l(d,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(_([])));y&&y!==t&&n.call(y,o)&&(d=y);var b=p.prototype=h.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function k(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return C()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=p,a(b,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:f,configurable:!0}),f.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new E(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=_,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var g="https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pub?gid=0&single=true&output=csv",y="https://docs.google.com/spreadsheets/d/e/2PACX-1vSNVzKXaej44S0TCZOf3kk5dn708yQh4cmzgSgE5bqloM8cpejujkIaWEM_HwUofh3RxuHc__-qyy76/pub?gid=504983115&single=true&output=csv";function b(e){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(v().mark((function e(t){var n,a,r,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{methods:{"content-type":"text/csv;charset=utf-8"}}).then((function(e){return e.text()})).then((function(e){return e.split(/\r?\n|\r/)}));case 2:return n=e.sent,a=n.slice(0,1)[0].split(","),r=n.slice(1).map((function(e){return e.split(",").reduce((function(e,t,n){return e[a[n]]=t,e}),{})})),o=r.filter((function(e){return"TRUE"!=e.removed})),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(d.a)(v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(g);case 2:return t=e.sent,e.next=5,b(y);case 5:return n=e.sent,e.abrupt("return",{suppliers:t,customers:n});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){var t=Object(a.useState)([]),o=Object(f.a)(t,2),i=o[0],c=o[1];function l(){(function(){return E.apply(this,arguments)})().then((function(e){return c({suppliers:e.suppliers,customers:e.customers})}))}Object(a.useEffect)((function(){l()}),[]);var s=n(39)("./"+e.children+".jsx").default;return r.a.createElement(p.a,{fluid:!0,className:"mx-0 p-0"},i&&!Array.isArray(i)&&"catalog"==e.children&&Object(a.createElement)(s,{suppliers:i.suppliers}),i&&!Array.isArray(i)&&"home"==e.children&&Object(a.createElement)(s,{suppliers:[].concat(Object(h.a)(i.suppliers),Object(h.a)(i.suppliers)),customers:[].concat(Object(h.a)(i.customers),Object(h.a)(i.customers))}),"home"==e.children||"catalog"==e.children||Object(a.createElement)(s,null))}n(53);var x=[{title:"Home",id:"home"},{title:"About",id:"about"},{title:"News",id:"news"},{title:"Catalogue",id:"catalog"},{title:"Contact",id:"contact"}],j=x.map((function(e){return{title:e.title}})),O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={contentKey:0},a}return Object(l.a)(n,[{key:"UpdateContent",value:function(e){this.setState({contentKey:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{routes:j,changeRoute:this.UpdateContent.bind(this)}),r.a.createElement(k,null,x[this.state.contentKey].id))}}]),n}(a.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(a.createElement)(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");N?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):_(e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.ff499b64.chunk.js.map