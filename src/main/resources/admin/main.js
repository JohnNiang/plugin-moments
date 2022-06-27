var PluginJournals=function(c,et){"use strict";function dn(t){return t}function tt(t){return c.getCurrentScope()?(c.onScopeDispose(t),!0):!1}var de;const A=typeof window!="undefined",rt=Object.prototype.toString,nt=t=>rt.call(t)==="[object Object]";A&&((de=window==null?void 0:window.navigator)==null?void 0:de.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function it(t){var e;const r=c.unref(t);return(e=r==null?void 0:r.$el)!=null?e:r}const at=A?window:void 0,V=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},F="__vueuse_ssr_handlers__";V[F]=V[F]||{},V[F];function ot(t,e={}){const{immediate:r=!0,window:n=at}=e,i=c.ref(!1);let a=null;function o(){!i.value||!n||(t(),a=n.requestAnimationFrame(o))}function s(){!i.value&&n&&(i.value=!0,o())}function l(){i.value=!1,a!=null&&n&&(n.cancelAnimationFrame(a),a=null)}return r&&s(),tt(l),{isActive:i,pause:l,resume:s}}var fe;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(fe||(fe={}));const H="vue-starport-injection",st="vue-starport-options",ut={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},pe={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var lt=Object.defineProperty,_=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,je=(t,e,r)=>e in t?lt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ct=(t,e)=>{for(var r in e||(e={}))Me.call(e,r)&&je(t,r,e[r]);if(_)for(var r of _(e))Ne.call(e,r)&&je(t,r,e[r]);return t},Le=(t,e)=>{var r={};for(var n in t)Me.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&_)for(var n of _(t))e.indexOf(n)<0&&Ne.call(t,n)&&(r[n]=t[n]);return r};const dt=c.defineComponent({name:"StarportProxy",props:ct({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},pe),setup(t,e){const r=c.inject(H),n=c.computed(()=>r.getInstance(t.port,t.component)),i=c.ref(),a=n.value.generateId(),o=c.ref(!1);return n.value.isVisible||(n.value.land(),o.value=!0),c.onMounted(async()=>{n.value.el||(n.value.el=i.value,await c.nextTick(),o.value=!0,n.value.rect.update())}),c.onBeforeUnmount(async()=>{n.value.rect.update(),n.value.liftOff(),n.value.el=void 0,o.value=!1,!n.value.options.keepAlive&&(await c.nextTick(),await c.nextTick(),!n.value.el&&r.dispose(n.value.port))}),c.watch(()=>t,async()=>{n.value.props&&await c.nextTick();const s=t,{props:l}=s,f=Le(s,["props"]);n.value.props=l||{},n.value.setLocalOptions(f)},{deep:!0,immediate:!0}),()=>{const s=t,{initialProps:l,mountedProps:f}=s,u=Le(s,["initialProps","mountedProps"]),d=c.mergeProps(u,(o.value?f:l)||{});return c.h("div",c.mergeProps(d,{id:a,ref:i,"data-starport-proxy":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true"}),e.slots.default?c.h(e.slots.default):void 0)}}});var ft=Object.defineProperty,pt=Object.defineProperties,Mt=Object.getOwnPropertyDescriptors,me=Object.getOwnPropertySymbols,Nt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,we=(t,e,r)=>e in t?ft(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Lt=(t,e)=>{for(var r in e||(e={}))Nt.call(e,r)&&we(t,r,e[r]);if(me)for(var r of me(e))jt.call(e,r)&&we(t,r,e[r]);return t},mt=(t,e)=>pt(t,Mt(e));c.defineComponent({name:"Starport",inheritAttrs:!0,props:pe,setup(t,e){const r=c.ref(!1);return c.onMounted(()=>{r.value=!0}),()=>{var n,i;const a=(i=(n=e.slots).default)==null?void 0:i.call(n);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const o=a[0];let s=o.type;return(!nt(s)||c.isVNode(s))&&(s={render(){return a}}),c.h(dt,mt(Lt({},t),{key:t.port,component:c.markRaw(s),props:o.props}))}}});function wt(t){const e=c.reactive({height:0,width:0,left:0,top:0,update:n,listen:a,pause:o,margin:"0px",padding:"0px"}),r=A?document.documentElement||document.body:void 0;function n(){if(!A)return;const s=it(t);if(!s)return;const{height:l,width:f,left:u,top:d}=s.getBoundingClientRect(),M=window.getComputedStyle(s),p=M.margin,b=M.padding;Object.assign(e,{height:l,width:f,left:u,top:r.scrollTop+d,margin:p,padding:b})}const i=ot(n,{immediate:!1});function a(){!A||(n(),i.resume())}function o(){i.pause()}return e}const ye=((t,e=21)=>(r=e)=>{let n="",i=r;for(;i--;)n+=t[Math.random()*t.length|0];return n})("abcdefghijklmnopqrstuvwxyz",5);function he(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function yt(t){var e;return t.name||((e=t.__file)==null?void 0:e.split(/[\/\\.]/).slice(-2)[0])||""}var ht=Object.defineProperty,Ie=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,ve=(t,e,r)=>e in t?ht(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,J=(t,e)=>{for(var r in e||(e={}))It.call(e,r)&&ve(t,r,e[r]);if(Ie)for(var r of Ie(e))vt.call(e,r)&&ve(t,r,e[r]);return t};function Tt(t,e,r={}){const n=yt(e),i=he(n)||ye(),a=c.ref(),o=c.ref(null),s=c.ref(!1),l=c.ref(!1),f=c.effectScope(!0),u=c.ref({}),d=c.computed(()=>J(J(J({},ut),r),u.value)),M=c.ref(0);let p;f.run(()=>{p=wt(a),c.watch(a,async L=>{L&&(l.value=!0),await c.nextTick(),a.value||(l.value=!1)})});const b=he(t);function R(){return`starport-${i}-${b}-${ye()}`}const P=R();return c.reactive({el:a,id:P,port:t,props:o,rect:p,scope:f,isLanded:s,isVisible:l,options:d,liftOffTime:M,component:e,componentName:n,componentId:i,generateId:R,setLocalOptions(L={}){u.value=JSON.parse(JSON.stringify(L))},elRef(){return a},liftOff(){!s.value||(s.value=!1,M.value=Date.now(),p.listen())},land(){s.value||(s.value=!0,p.pause())}})}function Ot(t){const e=c.reactive(new Map);function r(i,a){let o=e.get(i);return o||(o=Tt(i,a,t),e.set(i,o)),o.component=a,o}function n(i){var a;(a=e.get(i))==null||a.scope.stop(),e.delete(i)}return{portMap:e,dispose:n,getInstance:r}}var gt=Object.defineProperty,Ct=Object.defineProperties,Et=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,Oe=(t,e,r)=>e in t?gt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,bt=(t,e)=>{for(var r in e||(e={}))Dt.call(e,r)&&Oe(t,r,e[r]);if(Te)for(var r of Te(e))St.call(e,r)&&Oe(t,r,e[r]);return t},xt=(t,e)=>Ct(t,Et(e));const At=c.defineComponent({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const e=c.inject(H);if(!e)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const r=c.computed(()=>e.getInstance(t.port,t.component)),n=c.computed(()=>{var o;return((o=r.value.el)==null?void 0:o.id)||r.value.id}),i=c.computed(()=>{const o=Date.now()-r.value.liftOffTime,s=Math.max(0,r.value.options.duration-o),l=r.value.rect,f={position:"absolute",left:0,top:0,width:`${l.width}px`,height:`${l.height}px`,margin:l.margin,padding:l.padding,transform:`translate3d(${l.left}px,${l.top}px,0px)`};return!r.value.isVisible||!r.value.el?xt(bt({},f),{zIndex:-1,display:"none"}):(r.value.isLanded?f.display="none":Object.assign(f,{transitionProperty:"all",transitionDuration:`${s}ms`,transitionTimingFunction:r.value.options.easing}),f)}),a={};return()=>{const o=!!(r.value.isLanded&&r.value.el);return c.h("div",{style:i.value,"data-starport-craft":r.value.componentId,"data-starport-landed":r.value.isLanded?"true":void 0,"data-starport-floating":r.value.isLanded?void 0:"true",onTransitionend:r.value.land},c.h(c.Teleport,{to:o?`#${n.value}`:"body",disabled:!o},c.h(r.value.component,c.mergeProps(a,r.value.props))))}}});c.defineComponent({name:"StarportCarrier",setup(t,{slots:e}){const r=Ot(c.inject(st,{}));return c.getCurrentInstance().appContext.app.provide(H,r),()=>{var i;return[(i=e.default)==null?void 0:i.call(e),Array.from(r.portMap.entries()).map(([a,{component:o}])=>c.h(At,{key:a,port:a,component:o}))]}}});var Q={exports:{}},ge=function(e,r){return function(){for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];return e.apply(r,i)}},zt=ge,X=Object.prototype.toString,q=function(t){return function(e){var r=X.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function v(t){return t=t.toLowerCase(),function(r){return q(r)===t}}function K(t){return Array.isArray(t)}function U(t){return typeof t=="undefined"}function Rt(t){return t!==null&&!U(t)&&t.constructor!==null&&!U(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Ce=v("ArrayBuffer");function Pt(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ce(t.buffer),e}function _t(t){return typeof t=="string"}function Ut(t){return typeof t=="number"}function Ee(t){return t!==null&&typeof t=="object"}function Y(t){if(q(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var Yt=v("Date"),kt=v("File"),Wt=v("Blob"),Zt=v("FileList");function ee(t){return X.call(t)==="[object Function]"}function Gt(t){return Ee(t)&&ee(t.pipe)}function Bt(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||X.call(t)===e||ee(t.toString)&&t.toString()===e)}var $t=v("URLSearchParams");function Vt(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Ft(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function te(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),K(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function re(){var t={};function e(i,a){Y(t[a])&&Y(i)?t[a]=re(t[a],i):Y(i)?t[a]=re({},i):K(i)?t[a]=i.slice():t[a]=i}for(var r=0,n=arguments.length;r<n;r++)te(arguments[r],e);return t}function Ht(t,e,r){return te(e,function(i,a){r&&typeof i=="function"?t[a]=zt(i,r):t[a]=i}),t}function Jt(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function Qt(t,e,r,n){t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function Xt(t,e,r){var n,i,a,o={};e=e||{};do{for(n=Object.getOwnPropertyNames(t),i=n.length;i-- >0;)a=n[i],o[a]||(e[a]=t[a],o[a]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function qt(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var n=t.indexOf(e,r);return n!==-1&&n===r}function Kt(t){if(!t)return null;var e=t.length;if(U(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var er=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),j={isArray:K,isArrayBuffer:Ce,isBuffer:Rt,isFormData:Bt,isArrayBufferView:Pt,isString:_t,isNumber:Ut,isObject:Ee,isPlainObject:Y,isUndefined:U,isDate:Yt,isFile:kt,isBlob:Wt,isFunction:ee,isStream:Gt,isURLSearchParams:$t,isStandardBrowserEnv:Ft,forEach:te,merge:re,extend:Ht,trim:Vt,stripBOM:Jt,inherits:Qt,toFlatObject:Xt,kindOf:q,kindOfTest:v,endsWith:qt,toArray:Kt,isTypedArray:er,isFileList:Zt},O=j;function De(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Se=function(e,r,n){if(!r)return e;var i;if(n)i=n(r);else if(O.isURLSearchParams(r))i=r.toString();else{var a=[];O.forEach(r,function(l,f){l===null||typeof l=="undefined"||(O.isArray(l)?f=f+"[]":l=[l],O.forEach(l,function(d){O.isDate(d)?d=d.toISOString():O.isObject(d)&&(d=JSON.stringify(d)),a.push(De(f)+"="+De(d))}))}),i=a.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},tr=j;function k(){this.handlers=[]}k.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1},k.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},k.prototype.forEach=function(e){tr.forEach(this.handlers,function(n){n!==null&&e(n)})};var rr=k,nr=j,ir=function(e,r){nr.forEach(e,function(i,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=i,delete e[a])})},be=j;function g(t,e,r,n,i){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}be.inherits(g,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var xe=g.prototype,Ae={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Ae[t]={value:t}}),Object.defineProperties(g,Ae),Object.defineProperty(xe,"isAxiosError",{value:!0}),g.from=function(t,e,r,n,i,a){var o=Object.create(xe);return be.toFlatObject(t,o,function(l){return l!==Error.prototype}),g.call(o,t.message,e,r,n,i),o.name=t.name,a&&Object.assign(o,a),o};var C=g,ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},y=j;function ar(t,e){e=e||new FormData;var r=[];function n(a){return a===null?"":y.isDate(a)?a.toISOString():y.isArrayBuffer(a)||y.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function i(a,o){if(y.isPlainObject(a)||y.isArray(a)){if(r.indexOf(a)!==-1)throw Error("Circular reference detected in "+o);r.push(a),y.forEach(a,function(l,f){if(!y.isUndefined(l)){var u=o?o+"."+f:f,d;if(l&&!o&&typeof l=="object"){if(y.endsWith(f,"{}"))l=JSON.stringify(l);else if(y.endsWith(f,"[]")&&(d=y.toArray(l))){d.forEach(function(M){!y.isUndefined(M)&&e.append(u,n(M))});return}}i(l,u)}}),r.pop()}else e.append(o,n(a))}return i(t),e}var Re=ar,ne=C,or=function(e,r,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):r(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},W=j,sr=W.isStandardBrowserEnv()?function(){return{write:function(r,n,i,a,o,s){var l=[];l.push(r+"="+encodeURIComponent(n)),W.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),W.isString(a)&&l.push("path="+a),W.isString(o)&&l.push("domain="+o),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ur=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},lr=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},cr=ur,dr=lr,Pe=function(e,r){return e&&!cr(r)?dr(e,r):r},ie=j,fr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],pr=function(e){var r={},n,i,a;return e&&ie.forEach(e.split(`
`),function(s){if(a=s.indexOf(":"),n=ie.trim(s.substr(0,a)).toLowerCase(),i=ie.trim(s.substr(a+1)),n){if(r[n]&&fr.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([i]):r[n]=r[n]?r[n]+", "+i:i}}),r},_e=j,Mr=_e.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function i(a){var o=a;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(o){var s=_e.isString(o)?i(o):o;return s.protocol===n.protocol&&s.host===n.host}}():function(){return function(){return!0}}(),ae=C,Nr=j;function Ue(t){ae.call(this,t==null?"canceled":t,ae.ERR_CANCELED),this.name="CanceledError"}Nr.inherits(Ue,ae,{__CANCEL__:!0});var Z=Ue,jr=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""},z=j,Lr=or,mr=sr,wr=Se,yr=Pe,hr=pr,Ir=Mr,vr=ze,h=C,Tr=Z,Or=jr,Ye=function(e){return new Promise(function(n,i){var a=e.data,o=e.headers,s=e.responseType,l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}z.isFormData(a)&&z.isStandardBrowserEnv()&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",M=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(d+":"+M)}var p=yr(e.baseURL,e.url);u.open(e.method.toUpperCase(),wr(p,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function b(){if(!!u){var L="getAllResponseHeaders"in u?hr(u.getAllResponseHeaders()):null,x=!s||s==="text"||s==="json"?u.responseText:u.response,T={data:x,status:u.status,statusText:u.statusText,headers:L,config:e,request:u};Lr(function(ce){n(ce),f()},function(ce){i(ce),f()},T),u=null}}if("onloadend"in u?u.onloadend=b:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(b)},u.onabort=function(){!u||(i(new h("Request aborted",h.ECONNABORTED,e,u)),u=null)},u.onerror=function(){i(new h("Network Error",h.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",T=e.transitional||vr;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),i(new h(x,T.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,u)),u=null},z.isStandardBrowserEnv()){var R=(e.withCredentials||Ir(p))&&e.xsrfCookieName?mr.read(e.xsrfCookieName):void 0;R&&(o[e.xsrfHeaderName]=R)}"setRequestHeader"in u&&z.forEach(o,function(x,T){typeof a=="undefined"&&T.toLowerCase()==="content-type"?delete o[T]:u.setRequestHeader(T,x)}),z.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&s!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(L){!u||(i(!L||L&&L.type?new Tr:L),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null);var P=Or(p);if(P&&["http","https","file"].indexOf(P)===-1){i(new h("Unsupported protocol "+P+":",h.ERR_BAD_REQUEST,e));return}u.send(a)})},gr=null,N=j,ke=ir,We=C,Cr=ze,Er=Re,Dr={"Content-Type":"application/x-www-form-urlencoded"};function Ze(t,e){!N.isUndefined(t)&&N.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Sr(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Ye),t}function br(t,e,r){if(N.isString(t))try{return(e||JSON.parse)(t),N.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var G={transitional:Cr,adapter:Sr(),transformRequest:[function(e,r){if(ke(r,"Accept"),ke(r,"Content-Type"),N.isFormData(e)||N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return Ze(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n=N.isObject(e),i=r&&r["Content-Type"],a;if((a=N.isFileList(e))||n&&i==="multipart/form-data"){var o=this.env&&this.env.FormData;return Er(a?{"files[]":e}:e,o&&new o)}else if(n||i==="application/json")return Ze(r,"application/json"),br(e);return e}],transformResponse:[function(e){var r=this.transitional||G.transitional,n=r&&r.silentJSONParsing,i=r&&r.forcedJSONParsing,a=!n&&this.responseType==="json";if(a||i&&N.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?We.from(o,We.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:gr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};N.forEach(["delete","get","head"],function(e){G.headers[e]={}}),N.forEach(["post","put","patch"],function(e){G.headers[e]=N.merge(Dr)});var oe=G,xr=j,Ar=oe,zr=function(e,r,n){var i=this||Ar;return xr.forEach(n,function(o){e=o.call(i,e,r)}),e},Ge=function(e){return!!(e&&e.__CANCEL__)},Be=j,se=zr,Rr=Ge,Pr=oe,_r=Z;function ue(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new _r}var Ur=function(e){ue(e),e.headers=e.headers||{},e.data=se.call(e,e.data,e.headers,e.transformRequest),e.headers=Be.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Be.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var r=e.adapter||Pr.adapter;return r(e).then(function(i){return ue(e),i.data=se.call(e,i.data,i.headers,e.transformResponse),i},function(i){return Rr(i)||(ue(e),i&&i.response&&(i.response.data=se.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},w=j,$e=function(e,r){r=r||{};var n={};function i(u,d){return w.isPlainObject(u)&&w.isPlainObject(d)?w.merge(u,d):w.isPlainObject(d)?w.merge({},d):w.isArray(d)?d.slice():d}function a(u){if(w.isUndefined(r[u])){if(!w.isUndefined(e[u]))return i(void 0,e[u])}else return i(e[u],r[u])}function o(u){if(!w.isUndefined(r[u]))return i(void 0,r[u])}function s(u){if(w.isUndefined(r[u])){if(!w.isUndefined(e[u]))return i(void 0,e[u])}else return i(void 0,r[u])}function l(u){if(u in r)return i(e[u],r[u]);if(u in e)return i(void 0,e[u])}var f={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l};return w.forEach(Object.keys(e).concat(Object.keys(r)),function(d){var M=f[d]||a,p=M(d);w.isUndefined(p)&&M!==l||(n[d]=p)}),n},Ve={version:"0.27.2"},Yr=Ve.version,I=C,le={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){le[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var Fe={};le.transitional=function(e,r,n){function i(a,o){return"[Axios v"+Yr+"] Transitional option '"+a+"'"+o+(n?". "+n:"")}return function(a,o,s){if(e===!1)throw new I(i(o," has been removed"+(r?" in "+r:"")),I.ERR_DEPRECATED);return r&&!Fe[o]&&(Fe[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,o,s):!0}};function kr(t,e,r){if(typeof t!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(t),i=n.length;i-- >0;){var a=n[i],o=e[a];if(o){var s=t[a],l=s===void 0||o(s,a,t);if(l!==!0)throw new I("option "+a+" must be "+l,I.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new I("Unknown option "+a,I.ERR_BAD_OPTION)}}var Wr={assertOptions:kr,validators:le},He=j,Zr=Se,Je=rr,Qe=Ur,B=$e,Gr=Pe,Xe=Wr,E=Xe.validators;function D(t){this.defaults=t,this.interceptors={request:new Je,response:new Je}}D.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=B(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&Xe.assertOptions(n,{silentJSONParsing:E.transitional(E.boolean),forcedJSONParsing:E.transitional(E.boolean),clarifyTimeoutError:E.transitional(E.boolean)},!1);var i=[],a=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(a=a&&p.synchronous,i.unshift(p.fulfilled,p.rejected))});var o=[];this.interceptors.response.forEach(function(p){o.push(p.fulfilled,p.rejected)});var s;if(!a){var l=[Qe,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(o),s=Promise.resolve(r);l.length;)s=s.then(l.shift(),l.shift());return s}for(var f=r;i.length;){var u=i.shift(),d=i.shift();try{f=u(f)}catch(M){d(M);break}}try{s=Qe(f)}catch(M){return Promise.reject(M)}for(;o.length;)s=s.then(o.shift(),o.shift());return s},D.prototype.getUri=function(e){e=B(this.defaults,e);var r=Gr(e.baseURL,e.url);return Zr(r,e.params,e.paramsSerializer)},He.forEach(["delete","get","head","options"],function(e){D.prototype[e]=function(r,n){return this.request(B(n||{},{method:e,url:r,data:(n||{}).data}))}}),He.forEach(["post","put","patch"],function(e){function r(n){return function(a,o,s){return this.request(B(s||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}D.prototype[e]=r(),D.prototype[e+"Form"]=r(!0)});var Br=D,$r=Z;function S(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(i){e=i});var r=this;this.promise.then(function(n){if(!!r._listeners){var i,a=r._listeners.length;for(i=0;i<a;i++)r._listeners[i](n);r._listeners=null}}),this.promise.then=function(n){var i,a=new Promise(function(o){r.subscribe(o),i=o}).then(n);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i){r.reason||(r.reason=new $r(i),e(r.reason))})}S.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},S.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]},S.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}},S.source=function(){var e,r=new S(function(i){e=i});return{token:r,cancel:e}};var Vr=S,Fr=function(e){return function(n){return e.apply(null,n)}},Hr=j,Jr=function(e){return Hr.isObject(e)&&e.isAxiosError===!0},qe=j,Qr=ge,$=Br,Xr=$e,qr=oe;function Ke(t){var e=new $(t),r=Qr($.prototype.request,e);return qe.extend(r,$.prototype,e),qe.extend(r,e),r.create=function(i){return Ke(Xr(t,i))},r}var m=Ke(qr);m.Axios=$,m.CanceledError=Z,m.CancelToken=Vr,m.isCancel=Ge,m.VERSION=Ve.version,m.toFormData=Re,m.AxiosError=C,m.Cancel=m.CanceledError,m.all=function(e){return Promise.all(e)},m.spread=Fr,m.isAxiosError=Jr,Q.exports=m,Q.exports.default=m;var Kr=Q.exports;const en="eyJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJIYWxvIE93bmVyIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2NTYzODYyODYsImlhdCI6MTY1NjI5OTg4Niwic2NvcGUiOlsiUk9MRV9zdXBlci1yb2xlIl19.uiBxplxctL3a8G_pNWJzEKEMD-a11VPygHh-yUmm3jaZadt5KWIonkuMl3bSASC96NJn3Lmo1OtSagWIkRWUrWqM4r4_sj3NDOiDpcjxy2msrpe8v9sp_BA4yGjAoaoMBEvdjZ3sQ7L9gJKHhL9bTNsXiSkjS5b7OJLujuF5VFJMp-fmzUDz8-EC5u43wz8MUF88bMk4gUg3nOJYnSTRlrU6759IggEM_0SjZu9wewcLxxa4Vhson_mN6hTObsOyWYjMjTbMlSBQiDfN9IXZ2cRZTnE2me0pT6J0AyP33qBp69B-K0cTaUO2Tcx5_BuWHGUCFUAFwE5FKchGgr6NuA";Kr.create({headers:{Authorization:`Bearer ${en}`},baseURL:"http://localhost:8090"});var tn="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMTQ0IDg3NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7Ij48cGF0aCBkPSJNMTAyOC4xNiwzMzkuMzMxYzE0OC4yNDksMCAyNjguNjA5LDEyMC4zNiAyNjguNjA5LDI2OC42MDljLTAsMTQ4LjI0OSAtMTIwLjM2LDI2OC42MDggLTI2OC42MDksMjY4LjYwOGMtMTQ4LjI0OSwwIC0yNjguNjA4LC0xMjAuMzU5IC0yNjguNjA4LC0yNjguNjA4Yy0wLC0xNDguMjQ5IDEyMC4zNTksLTI2OC42MDkgMjY4LjYwOCwtMjY4LjYwOVptMCwxMTkuMTUyYzgyLjQ4OCwwIDE0OS40NTcsNjYuOTY5IDE0OS40NTcsMTQ5LjQ1N2MtMCw4Mi40ODcgLTY2Ljk2OSwxNDkuNDU2IC0xNDkuNDU3LDE0OS40NTZjLTgyLjQ4NywwIC0xNDkuNDU2LC02Ni45NjkgLTE0OS40NTYsLTE0OS40NTZjLTAsLTgyLjQ4OCA2Ni45NjksLTE0OS40NTcgMTQ5LjQ1NiwtMTQ5LjQ1N1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjEpOyIvPjxwYXRoIGQ9Ik0xODc0LjU4LDMzOS4zMzFjMTQ4LjI0OSwwIDI2OC42MDgsMTIwLjM2IDI2OC42MDgsMjY4LjYwOWMwLDE0OC4yNDkgLTEyMC4zNTksMjY4LjYwOCAtMjY4LjYwOCwyNjguNjA4Yy0xNDguMjQ5LDAgLTI2OC42MDksLTEyMC4zNTkgLTI2OC42MDksLTI2OC42MDhjMCwtMTQ4LjI0OSAxMjAuMzYsLTI2OC42MDkgMjY4LjYwOSwtMjY4LjYwOVptLTAsMTE5LjE1MmM4Mi40ODcsMCAxNDkuNDU2LDY2Ljk2OSAxNDkuNDU2LDE0OS40NTdjMCw4Mi40ODcgLTY2Ljk2OSwxNDkuNDU2IC0xNDkuNDU2LDE0OS40NTZjLTgyLjQ4OCwwIC0xNDkuNDU3LC02Ni45NjkgLTE0OS40NTcsLTE0OS40NTZjMCwtODIuNDg4IDY2Ljk2OSwtMTQ5LjQ1NyAxNDkuNDU3LC0xNDkuNDU3WiIgc3R5bGU9ImZpbGw6dXJsKCNfTGluZWFyMik7Ii8+PHBhdGggZD0iTTEzMDkuMjcsMzc3LjU4NWMtMCwtMTAuMDgzIC03LjIyMiwtMTguNzE5IC0xNy4xNDYsLTIwLjUwNGMtMTkuNjE4LC0zLjUyOCAtNTEuOSwtOS4zMzQgLTc0LjE3MiwtMTMuMzRjLTYuMDczLC0xLjA5MiAtMTIuMzE4LDAuNTY0IC0xNy4wNTIsNC41MjJjLTQuNzM0LDMuOTU5IC03LjQ2OSw5LjgxMiAtNy40NjksMTUuOTgzYy0wLDkxLjM3NCAtMCw0MDcuMTUzIC0wLDQ5MS40NjljLTAsNS41MjUgMi4xOTUsMTAuODI0IDYuMTAyLDE0LjczMWMzLjkwNywzLjkwNyA5LjIwNiw2LjEwMiAxNC43MzEsNi4xMDJjMjAuOTg3LDAgNTMuMTg2LDAgNzQuMTczLDBjNS41MjUsMCAxMC44MjQsLTIuMTk1IDE0LjczMSwtNi4xMDJjMy45MDcsLTMuOTA3IDYuMTAyLC05LjIwNiA2LjEwMiwtMTQuNzMxYy0wLC04NC40MjUgLTAsLTQwMC4yODYgLTAsLTQ3OC4xM1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjMpOyIvPjxwYXRoIGQ9Ik0xNTQyLjU5LDcyLjAzM2MwLC04LjI4OCAtMy4yOTIsLTE2LjIzNyAtOS4xNTMsLTIyLjA5N2MtNS44NiwtNS44NjEgLTEzLjgwOSwtOS4xNTMgLTIyLjA5NywtOS4xNTNjLTIzLjg2NywtMCAtNTYuNjA5LC0wIC04MC40NzcsLTBjLTguMjg4LC0wIC0xNi4yMzYsMy4yOTIgLTIyLjA5Nyw5LjE1M2MtNS44Niw1Ljg2IC05LjE1MywxMy44MDkgLTkuMTUzLDIyLjA5N2MwLDEzMS43OSAwLDY0MS40NzUgMCw3NzMuMjY1YzAsOC4yODggMy4yOTMsMTYuMjM3IDkuMTUzLDIyLjA5N2M1Ljg2MSw1Ljg2MSAxMy44MDksOS4xNTMgMjIuMDk3LDkuMTUzYzIzLjg2OCwwIDU2LjYxLDAgODAuNDc3LDBjOC4yODgsMCAxNi4yMzcsLTMuMjkyIDIyLjA5NywtOS4xNTNjNS44NjEsLTUuODYgOS4xNTMsLTEzLjgwOSA5LjE1MywtMjIuMDk3YzAsLTEzMS43OSAwLC02NDEuNDc1IDAsLTc3My4yNjVaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXI0KTtmaWxsLXJ1bGU6bm9uemVybzsiLz48Zz48cGF0aCBkPSJNNTA2LjQwOSw4MjIuMDYzYy0wLDEzLjgxNSA1LjQ5NCwyNy4wNjIgMTUuMjcxLDM2LjgyMWM5Ljc3Nyw5Ljc2IDIzLjAzNCwxNS4yMyAzNi44NDgsMTUuMjA2YzE4LjY3NCwtMC4wMzQgMzkuNzExLC0wLjA3MiA1OC4zNjksLTAuMTA1YzI4LjY5NiwtMC4wNTIgNTEuOTMyLC0yMy4zMjkgNTEuOTMyLC01Mi4wMjZsMCwtNzY5LjU4NmMwLC0xMy43OTggLTUuNDgxLC0yNy4wMzEgLTE1LjIzOCwtMzYuNzg4Yy05Ljc1NiwtOS43NTcgLTIyLjk5LC0xNS4yMzggLTM2Ljc4OCwtMTUuMjM4bC01OC4zNjgsLTBjLTEzLjc5OCwtMCAtMjcuMDMxLDUuNDgxIC0zNi43ODgsMTUuMjM4Yy05Ljc1Nyw5Ljc1NyAtMTUuMjM4LDIyLjk5IC0xNS4yMzgsMzYuNzg4Yy0wLDE1NS4yODYgLTAsNjE0LjI4MyAtMCw3NjkuNjlaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXI1KTtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNNjE2Ljc0NiwzMjIuNjYyYzEzLjgxMywwIDI3LjA2MSw1LjQ4NyAzNi44MjksMTUuMjU1YzkuNzY3LDkuNzY4IDE1LjI1NCwyMy4wMTUgMTUuMjU0LDM2LjgyOWMwLDEwNS4xODUgMCwzNDEuODc3IDAsNDQ3LjA2MmMwLDEzLjgxNCAtNS40ODcsMjcuMDYxIC0xNS4yNTQsMzYuODI5Yy05Ljc2OCw5Ljc2NyAtMjMuMDE2LDE1LjI1NSAtMzYuODI5LDE1LjI1NWMtMTguNjMyLC0wIC0zOS42MjIsLTAgLTU4LjI1NCwtMGMtMTMuODEzLC0wIC0yNy4wNjEsLTUuNDg4IC0zNi44MjgsLTE1LjI1NWMtOS43NjgsLTkuNzY4IC0xNS4yNTUsLTIzLjAxNSAtMTUuMjU1LC0zNi44MjljLTAsLTY4LjIyMyAtMCwtMTg3LjE1OSAtMCwtMjU1LjM4M2MtMCwtMTMuODEzIC01LjQ4NywtMjcuMDYxIC0xNS4yNTUsLTM2LjgyOGMtOS43NjcsLTkuNzY4IC0yMy4wMTUsLTE1LjI1NSAtMzYuODI4LC0xNS4yNTVjLTEyOS4yNDksLTAgLTQ1NC4zMjYsLTAgLTQ1NC4zMjYsLTBsMCwtMTkxLjY4bDYxNi43NDYsMFoiIHN0eWxlPSJmaWxsOiMwMDUxYjA7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTS0wLDgyMi4xMDFjMCwxMy44MTcgNS40OTcsMjcuMDY3IDE1LjI3NywzNi44MjdjOS43ODEsOS43NiAyMy4wNDMsMTUuMjI5IDM2Ljg2LDE1LjE5OWMxOC42NzUsLTAuMDQgMzkuNzEzLC0wLjA4NSA1OC4zNjgsLTAuMTI0YzI4LjY5LC0wLjA2MiA1MS45MTYsLTIzLjMzNyA1MS45MTYsLTUyLjAyN2MtMCwtMTU1LjIwNSAtMCwtNjE0LjUwOSAtMCwtNzY5LjcxNGMtMCwtMjguNjkgLTIzLjIyNiwtNTEuOTY1IC01MS45MTYsLTUyLjAyNmMtMTguNjU1LC0wLjA0IC0zOS42OTMsLTAuMDg1IC01OC4zNjgsLTAuMTI1Yy0xMy44MTcsLTAuMDI5IC0yNy4wNzksNS40MzkgLTM2Ljg2LDE1LjE5OWMtOS43OCw5Ljc2IC0xNS4yNzcsMjMuMDEgLTE1LjI3NywzNi44MjdsLTAsNzY5Ljk2NFoiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Il9MaW5lYXIxIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNS4xOTgxNGUtMTQsLTg0OC45MjEsODQ4LjkyMSw1LjE5ODE0ZS0xNCwxMzA4LjgsODc1LjM5NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNTBiNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzBiODdmZDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyMiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUuMTk4MTRlLTE0LC04NDguOTIxLDg0OC45MjEsNS4xOTgxNGUtMTQsMTMwOC44LDg3NS4zOTcpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDUwYjU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwYjg3ZmQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iX0xpbmVhcjMiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg1LjE5ODE0ZS0xNCwtODQ4LjkyMSw4NDguOTIxLDUuMTk4MTRlLTE0LDEzMDguOCw4NzUuMzk3KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA1MGI1O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMGI4N2ZkO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Il9MaW5lYXI0IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNS4xOTgxNGUtMTQsLTg0OC45MjEsODQ4LjkyMSw1LjE5ODE0ZS0xNCwxMzA4LjgsODc1LjM5NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNTBiNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzBiODdmZDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0zLjkxODg1ZS0xMyw0NzIuNDU5LC00NzMuODk1LC0zLjkwNjk4ZS0xMyw1ODcuNjE5LC0wLjg2MTY1MSkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNDhhZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMzU4MDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUuNTE4NDhlLTE0LDg5OC41MDYsLTkwMS4yMzYsNS41MDE3NmUtMTQsMTYyLjQyMSwtMTIuMTMzNykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzBiODlmZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNGViMjtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",pn=(()=>`.title[data-v-e696721c]{color:red}
`)(),rn=(t,e)=>{const r=t.__vccOpts||t;for(const[n,i]of e)r[n]=i;return r};const nn=c.defineComponent({name:"DefaultView",setup(){return{logo:tn}}}),an=(t=>(c.pushScopeId("data-v-e696721c"),t=t(),c.popScopeId(),t))(()=>c.createElementVNode("div",{class:"title"},"Hello World",-1)),on=["src"];function sn(t,e,r,n,i,a){return c.openBlock(),c.createElementBlock(c.Fragment,null,[an,c.createElementVNode("img",{src:t.logo,alt:"logo"},null,8,on)],64)}var un=rn(nn,[["render",sn],["__scopeId","data-v-e696721c"]]),Nn=(()=>`.title{font-size:20px}
`)(),ln={name:"PluginJournals",components:[],extensionPoints:{},routes:[{path:"/hello-world",name:"HelloWorld",component:un}],menus:[{name:"From PluginTemplate",items:[{name:"HelloWorld",path:"/hello-world",icon:et.IconGrid}]}],activated(){},deactivated(){}};return ln}(Vue,HaloComponents);
