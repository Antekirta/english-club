(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},a={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-77394608":"0fb54849","chunk-fd5b1d56":"51ffb072"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-77394608":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-77394608":"66440731","chunk-fd5b1d56":"31d6cfe0"}[t]+".css",a=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===r||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[t],d.parentNode.removeChild(d),n(o)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){s[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t),l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");o.type=r,o.request=s,n[1](o)}a[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/english-club/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-5"},[n("header",{staticClass:"alert alert-primary app__alert"},[t._v("Pairs")]),n("ul",{staticClass:"list-group mb-5"},t._l(t.persons,function(e,r){return n("li",{key:r,staticClass:"list-group-item mb-2 app__list-group-item app__person"},[n("span",[t._v(t._s(e.name))]),n("span",{staticClass:"badge badge-danger",on:{click:function(e){return t.removePerson(r)}}},[t._v("Remove")])])}),0),n("form",{staticClass:"row justify-content-between",on:{submit:t.addPerson}},[n("div",{staticClass:"col-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newParticipantName,expression:"newParticipantName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Имя участника"},domProps:{value:t.newParticipantName},on:{input:function(e){e.target.composing||(t.newParticipantName=e.target.value)}}})]),n("div",{staticClass:"col-5"},[n("button",{staticClass:"btn btn-success ",attrs:{disabled:!t.newParticipantName}},[t._v("\n                            Add participant\n                        ")])])]),n("button",{staticClass:"btn btn-success mt-3",attrs:{disabled:!t.topicsToShow.length},on:{click:t.sortPersons}},[t._v("\n                    Sort participants\n                ")])]),n("div",{staticClass:"col-7"},[n("header",{staticClass:"alert alert-primary app__alert"},[t._v("Topics and questions")]),n("ul",{staticClass:"list-group mb-5"},t._l(t.topicsToShow,function(e,r){return n("li",{key:r,staticClass:"list-group-item mb-2 app__list-group-item",staticStyle:{"font-size":"16px",width:"100%"},domProps:{innerHTML:t._s(e)}})}),0),n("button",{staticClass:"btn btn-success",attrs:{disabled:!t.topicsToShow.length},on:{click:t.sortTopics}},[t._v("\n                    Sort topics\n                ")]),n("div"),n("button",{staticClass:"btn btn-danger mt-2",on:{click:t.downloadTopics}},[t._v("\n                    Redownload topics\n                ")])])])])])},a=[],o=(n("55dd"),n("bc3a")),i=n.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"persons-list"},t._l(t.persons,function(e,r){return n("ul",{key:r,staticClass:"persons-list__list"},[n("li",{staticClass:"persons-list__item"},[t._v(t._s(e.name))])])}),0)},l=[],u={name:"PersonsList",data:function(){return{persons:[{name:"Kirill"},{name:"Emma"}]}}},p=u,d=n("2877"),f=Object(d["a"])(p,c,l,!1,null,null,null),m=f.exports,h={name:"app",components:{PersonsList:m},data:function(){return{newParticipantName:"",persons:[],topics:[],stackOverflowSite:"meta"}},computed:{topicsToShow:function(){return this.topics.slice(0,this.persons.length/2)}},methods:{addPerson:function(t){t.preventDefault(),this.newParticipantName&&(this.persons.push({name:this.newParticipantName}),this.newParticipantName="")},removePerson:function(t){this.persons.splice(t,1)},sortPersons:function(){this.persons.sort(function(){return Math.random()-.5})},downloadTopics:function(){var t=this;i.a.get("https://opentdb.com/api.php?amount=10").then(function(e){t.topics=e.data.results.map(function(t){return t.question})})},sortTopics:function(){this.topics.sort(function(){return Math.random()-.5})}},created:function(){this.downloadTopics()}},v=h,b=(n("7faf"),Object(d["a"])(v,s,a,!1,null,null,null)),g=b.exports;n.e("chunk-77394608").then(n.t.bind(null,"f9e3",7)),n.e("chunk-fd5b1d56").then(n.t.bind(null,"f507",7)),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var r=n("8fba"),s=n.n(r);s.a},"8fba":function(t,e,n){}});
//# sourceMappingURL=app.c215e561.js.map