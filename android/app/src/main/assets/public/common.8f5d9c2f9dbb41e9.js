"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(O,f,a)=>{a.d(f,{c:()=>c});var g=a(4261),l=a(1086),e=a(8607);const c=(n,i)=>{let t,r;const u=(d,p,v)=>{if(typeof document>"u")return;const E=document.elementFromPoint(d,p);E&&i(E)&&!E.disabled?E!==t&&(o(),s(E,v)):o()},s=(d,p)=>{t=d,r||(r=t);const v=t;(0,g.w)(()=>v.classList.add("ion-activated")),p()},o=(d=!1)=>{if(!t)return;const p=t;(0,g.w)(()=>p.classList.remove("ion-activated")),d&&r!==t&&t.click(),t=void 0};return(0,e.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>u(d.currentX,d.currentY,l.a),onMove:d=>u(d.currentX,d.currentY,l.b),onEnd:()=>{o(!0),(0,l.h)(),r=void 0}})}},8438:(O,f,a)=>{a.d(f,{g:()=>l});var g=a(8476);const l=()=>{if(void 0!==g.w)return g.w.Capacitor}},5572:(O,f,a)=>{a.d(f,{c:()=>g,i:()=>l});const g=(e,c,n)=>"function"==typeof n?n(e,c):"string"==typeof n?e[n]===c[n]:Array.isArray(c)?c.includes(e):e===c,l=(e,c,n)=>void 0!==e&&(Array.isArray(e)?e.some(i=>g(i,c,n)):g(e,c,n))},3351:(O,f,a)=>{a.d(f,{g:()=>g});const g=(i,t,r,u,s)=>e(i[1],t[1],r[1],u[1],s).map(o=>l(i[0],t[0],r[0],u[0],o)),l=(i,t,r,u,s)=>s*(3*t*Math.pow(s-1,2)+s*(-3*r*s+3*r+u*s))-i*Math.pow(s-1,3),e=(i,t,r,u,s)=>n((u-=s)-3*(r-=s)+3*(t-=s)-(i-=s),3*r-6*t+3*i,3*t-3*i,i).filter(d=>d>=0&&d<=1),n=(i,t,r,u)=>{if(0===i)return((i,t,r)=>{const u=t*t-4*i*r;return u<0?[]:[(-t+Math.sqrt(u))/(2*i),(-t-Math.sqrt(u))/(2*i)]})(t,r,u);const s=(3*(r/=i)-(t/=i)*t)/3,o=(2*t*t*t-9*t*r+27*(u/=i))/27;if(0===s)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-s),-Math.sqrt(-s)];const d=Math.pow(o/2,2)+Math.pow(s/3,3);if(0===d)return[Math.pow(o/2,.5)-t/3];if(d>0)return[Math.pow(-o/2+Math.sqrt(d),1/3)-Math.pow(o/2+Math.sqrt(d),1/3)-t/3];const p=Math.sqrt(Math.pow(-s/3,3)),v=Math.acos(-o/(2*Math.sqrt(Math.pow(-s/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(v/3)-t/3,E*Math.cos((v+2*Math.PI)/3)-t/3,E*Math.cos((v+4*Math.PI)/3)-t/3]}},5083:(O,f,a)=>{a.d(f,{i:()=>g});const g=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(O,f,a)=>{a.r(f),a.d(f,{startFocusVisible:()=>c});const g="ion-focused",e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=n=>{let i=[],t=!0;const r=n?n.shadowRoot:document,u=n||document.body,s=P=>{i.forEach(h=>h.classList.remove(g)),P.forEach(h=>h.classList.add(g)),i=P},o=()=>{t=!1,s([])},d=P=>{t=e.includes(P.key),t||s([])},p=P=>{if(t&&void 0!==P.composedPath){const h=P.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));s(h)}},v=()=>{r.activeElement===u&&s([])};return r.addEventListener("keydown",d),r.addEventListener("focusin",p),r.addEventListener("focusout",v),r.addEventListener("touchstart",o,{passive:!0}),r.addEventListener("mousedown",o),{destroy:()=>{r.removeEventListener("keydown",d),r.removeEventListener("focusin",p),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",o),r.removeEventListener("mousedown",o)},setFocus:s}}},1086:(O,f,a)=>{a.d(f,{I:()=>l,a:()=>t,b:()=>r,c:()=>i,d:()=>s,h:()=>u});var g=a(8438),l=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(l||{});const c={getEngine(){const o=(0,g.g)();if(null!=o&&o.isPluginAvailable("Haptics"))return o.Plugins.Haptics},available(){if(!this.getEngine())return!1;const d=(0,g.g)();return"web"!==(null==d?void 0:d.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(o){const d=this.getEngine();d&&d.impact({style:o.style})},notification(o){const d=this.getEngine();d&&d.notification({type:o.type})},selection(){this.impact({style:l.Light})},selectionStart(){const o=this.getEngine();o&&o.selectionStart()},selectionChanged(){const o=this.getEngine();o&&o.selectionChanged()},selectionEnd(){const o=this.getEngine();o&&o.selectionEnd()}},n=()=>c.available(),i=()=>{n()&&c.selection()},t=()=>{n()&&c.selectionStart()},r=()=>{n()&&c.selectionChanged()},u=()=>{n()&&c.selectionEnd()},s=o=>{n()&&c.impact(o)}},909:(O,f,a)=>{a.d(f,{I:()=>i,a:()=>s,b:()=>n,c:()=>p,d:()=>E,f:()=>o,g:()=>u,i:()=>r,p:()=>v,r:()=>P,s:()=>d});var g=a(467),l=a(4920),e=a(4929);const n="ion-content",i=".ion-content-scroll-host",t=`${n}, ${i}`,r=h=>"ION-CONTENT"===h.tagName,u=function(){var h=(0,g.A)(function*(_){return r(_)?(yield new Promise(M=>(0,l.c)(_,M)),_.getScrollElement()):_});return function(M){return h.apply(this,arguments)}}(),s=h=>h.querySelector(i)||h.querySelector(t),o=h=>h.closest(t),d=(h,_)=>r(h)?h.scrollToTop(_):Promise.resolve(h.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),p=(h,_,M,w)=>r(h)?h.scrollByPoint(_,M,w):Promise.resolve(h.scrollBy({top:M,left:_,behavior:w>0?"smooth":"auto"})),v=h=>(0,e.b)(h,n),E=h=>{if(r(h)){const M=h.scrollY;return h.scrollY=!1,M}return h.style.setProperty("overflow","hidden"),!0},P=(h,_)=>{r(h)?h.scrollY=_:h.style.removeProperty("overflow")}},3992:(O,f,a)=>{a.d(f,{a:()=>g,b:()=>p,c:()=>t,d:()=>v,e:()=>b,f:()=>i,g:()=>E,h:()=>e,i:()=>l,j:()=>m,k:()=>y,l:()=>r,m:()=>o,n:()=>P,o:()=>s,p:()=>n,q:()=>c,r:()=>C,s:()=>D,t:()=>d,u:()=>M,v:()=>w,w:()=>u,x:()=>h,y:()=>_});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(O,f,a)=>{a.d(f,{c:()=>c,g:()=>n});var g=a(8476),l=a(4920),e=a(4929);const c=(t,r,u)=>{let s,o;if(void 0!==g.w&&"MutationObserver"in g.w){const E=Array.isArray(r)?r:[r];s=new MutationObserver(P=>{for(const h of P)for(const _ of h.addedNodes)if(_.nodeType===Node.ELEMENT_NODE&&E.includes(_.slot))return u(),void(0,l.r)(()=>d(_))}),s.observe(t,{childList:!0,subtree:!0})}const d=E=>{var P;o&&(o.disconnect(),o=void 0),o=new MutationObserver(h=>{u();for(const _ of h)for(const M of _.removedNodes)M.nodeType===Node.ELEMENT_NODE&&M.slot===r&&v()}),o.observe(null!==(P=E.parentElement)&&void 0!==P?P:E,{subtree:!0,childList:!0})},v=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{s&&(s.disconnect(),s=void 0),v()}}},n=(t,r,u)=>{const s=null==t?0:t.toString().length,o=i(s,r);if(void 0===u)return o;try{return u(s,r)}catch(d){return(0,e.a)("Exception in provided `counterFormatter`.",d),o}},i=(t,r)=>`${t} / ${r}`},1622:(O,f,a)=>{a.r(f),a.d(f,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>P,resetKeyboardAssist:()=>s,setKeyboardClose:()=>v,setKeyboardOpen:()=>p,startKeyboardAssist:()=>o,trackViewportChanges:()=>w});var g=a(4379);a(8438),a(8476);const c="ionKeyboardDidShow",n="ionKeyboardDidHide";let t={},r={},u=!1;const s=()=>{t={},r={},u=!1},o=m=>{if(g.K.getEngine())d(m);else{if(!m.visualViewport)return;r=C(m.visualViewport),m.visualViewport.onresize=()=>{w(m),E()||P(m)?p(m):h(m)&&v(m)}}},d=m=>{m.addEventListener("keyboardDidShow",y=>p(m,y)),m.addEventListener("keyboardDidHide",()=>v(m))},p=(m,y)=>{_(m,y),u=!0},v=m=>{M(m),u=!1},E=()=>!u&&t.width===r.width&&(t.height-r.height)*r.scale>150,P=m=>u&&!h(m),h=m=>u&&r.height===m.innerHeight,_=(m,y)=>{const b=new CustomEvent(c,{detail:{keyboardHeight:y?y.keyboardHeight:m.innerHeight-r.height}});m.dispatchEvent(b)},M=m=>{const y=new CustomEvent(n);m.dispatchEvent(y)},w=m=>{t=Object.assign({},r),r=C(m.visualViewport)},C=m=>({width:Math.round(m.width),height:Math.round(m.height),offsetTop:m.offsetTop,offsetLeft:m.offsetLeft,pageTop:m.pageTop,pageLeft:m.pageLeft,scale:m.scale})},4379:(O,f,a)=>{a.d(f,{K:()=>c,a:()=>e});var g=a(8438),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),e=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(e||{});const c={getEngine(){const n=(0,g.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(i=>{if(i.code!==l.Unimplemented)throw i}):Promise.resolve(void 0)}}},4731:(O,f,a)=>{a.d(f,{c:()=>i});var g=a(467),l=a(8476),e=a(4379);const c=t=>{if(void 0===l.d||t===e.a.None||void 0===t)return null;const r=l.d.querySelector("ion-app");return null!=r?r:l.d.body},n=t=>{const r=c(t);return null===r?0:r.clientHeight},i=function(){var t=(0,g.A)(function*(r){let u,s,o,d;const p=function(){var _=(0,g.A)(function*(){const M=yield e.K.getResizeMode(),w=void 0===M?void 0:M.mode;u=()=>{void 0===d&&(d=n(w)),o=!0,v(o,w)},s=()=>{o=!1,v(o,w)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",s)});return function(){return _.apply(this,arguments)}}(),v=(_,M)=>{r&&r(_,E(M))},E=_=>{if(0===d||d===n(_))return;const M=c(_);return null!==M?new Promise(w=>{const m=new ResizeObserver(()=>{M.clientHeight===d&&(m.disconnect(),w())});m.observe(M)}):void 0};return yield p(),{init:p,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",s),u=s=void 0},isKeyboardVisible:()=>o}});return function(u){return t.apply(this,arguments)}}()},7838:(O,f,a)=>{a.d(f,{c:()=>l});var g=a(467);const l=()=>{let e;return{lock:function(){var n=(0,g.A)(function*(){const i=e;let t;return e=new Promise(r=>t=r),void 0!==i&&(yield i),t});return function(){return n.apply(this,arguments)}}()}}},9001:(O,f,a)=>{a.d(f,{c:()=>e});var g=a(8476),l=a(4920);const e=(c,n,i)=>{let t;const r=()=>!(void 0===n()||void 0!==c.label||null===i()),s=()=>{const d=n();if(void 0===d)return;if(!r())return void d.style.removeProperty("width");const p=i().scrollWidth;if(0===p&&null===d.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==t)return;const v=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(s(),v.disconnect(),t=void 0)},{threshold:.01,root:c});v.observe(d)}else d.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{r()&&(0,l.r)(()=>{s()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(O,f,a)=>{a.d(f,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(e,c,n)=>{const i=e*c/n-e+"ms",t=2*Math.PI*c/n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,c,n)=>{const i=c/n,t=e*i-e+"ms",r=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(r)+"%",left:32*Math.cos(r)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(e,c,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*c+(c<n/2?180:-180)}deg)`,"animation-delay":e*c/n-e+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(e,c,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*c+(c<n/2?180:-180)}deg)`,"animation-delay":e*c/n-e+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(e,c,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":e*c/n-e+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(e,c,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":e*c/n-e+"ms"}})}}},7166:(O,f,a)=>{a.r(f),a.d(f,{createSwipeBackGesture:()=>n});var g=a(4920),l=a(5083),e=a(8607);a(1970);const n=(i,t,r,u,s)=>{const o=i.ownerDocument.defaultView;let d=(0,l.i)(i);const v=M=>d?-M.deltaX:M.deltaX;return(0,e.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:M=>(d=(0,l.i)(i),(M=>{const{startX:C}=M;return d?C>=o.innerWidth-50:C<=50})(M)&&t()),onStart:r,onMove:M=>{const C=v(M)/o.innerWidth;u(C)},onEnd:M=>{const w=v(M),C=o.innerWidth,m=w/C,y=(M=>d?-M.velocityX:M.velocityX)(M),b=y>=0&&(y>.2||w>C/2),x=(b?1-m:m)*C;let A=0;if(x>5){const k=x/Math.abs(y);A=Math.min(k,540)}s(b,m<=0?.01:(0,g.j)(0,m,.9999),A)}})}},2935:(O,f,a)=>{a.d(f,{w:()=>g});const g=(c,n,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(r=>{i(l(r,n))});return t.observe(c,{childList:!0,subtree:!0}),t},l=(c,n)=>{let i;return c.forEach(t=>{for(let r=0;r<t.addedNodes.length;r++)i=e(t.addedNodes[r],n)||i}),i},e=(c,n)=>{if(1!==c.nodeType)return;const i=c;return(i.tagName===n.toUpperCase()?[i]:Array.from(i.querySelectorAll(n))).find(r=>r.value===i.value)}},9518:(O,f,a)=>{a.r(f),a.d(f,{AddPacientePageModule:()=>u});var g=a(177),l=a(9417),e=a(4742),c=a(6766),n=a(8752),i=a(4438);const t=[{path:"",component:n.w}];let r=(()=>{var s;class o{}return(s=o).\u0275fac=function(p){return new(p||s)},s.\u0275mod=i.$C({type:s}),s.\u0275inj=i.G2t({imports:[c.iI.forChild(t),c.iI]}),o})(),u=(()=>{var s;class o{}return(s=o).\u0275fac=function(p){return new(p||s)},s.\u0275mod=i.$C({type:s}),s.\u0275inj=i.G2t({imports:[g.MD,l.YN,l.X1,e.bv,r]}),o})()},8752:(O,f,a)=>{a.d(f,{w:()=>i});var g=a(467),l=a(9417),e=a(4438),c=a(7793),n=a(4742);let i=(()=>{var t;class r{constructor(s,o,d,p){this.fb=s,this.pacienteService=o,this.modalCtrl=d,this.alertCtrl=p,this.isEditMode=!1,this.pacienteForm=this.fb.group({dni:["",[l.k0.required,l.k0.pattern(/^\d{8}$/)]],nombres:["",l.k0.required],apellidos:["",l.k0.required],sexo:["",l.k0.required],estado:[1,l.k0.required]})}ngOnInit(){this.paciente&&(this.isEditMode=!0,console.log("Paciente recibido para edici\xf3n:",this.paciente),this.pacienteForm.patchValue({dni:this.paciente.DNI,nombres:this.paciente.Nombres,apellidos:this.paciente.Apellidos,sexo:this.paciente.Sexo,estado:this.paciente.Estado.toString()}),console.log("Estado despu\xe9s de patchValue:",this.pacienteForm.value.estado))}onSubmit(){var s=this;return(0,g.A)(function*(){if(s.pacienteForm.valid){const o={...s.pacienteForm.value,estado:+s.pacienteForm.value.estado};console.log("Datos del paciente antes de enviar:",o);const d=localStorage.getItem("id_doctor");if(!d)return void(yield(yield s.alertCtrl.create({header:"Error",message:"No se ha podido obtener el ID del doctor. Intente iniciar sesi\xf3n nuevamente.",buttons:["Aceptar"]})).present());o.id_doctor=+d,s.isEditMode&&void 0!==s.paciente.id_paciente?s.pacienteService.updatePaciente(s.paciente.id_paciente,o).subscribe({next:(p=(0,g.A)(function*(){yield(yield s.alertCtrl.create({header:"\xc9xito",message:"Paciente actualizado exitosamente",buttons:["OK"]})).present(),s.dismiss(!0)}),function(){return p.apply(this,arguments)}),error:function(){var p=(0,g.A)(function*(v){console.error("Error al actualizar el paciente:",v),yield(yield s.alertCtrl.create({header:"Error",message:"Hubo un problema al actualizar el paciente",buttons:["OK"]})).present()});return function(E){return p.apply(this,arguments)}}()}):s.pacienteService.addPaciente(o).subscribe({next:function(){var p=(0,g.A)(function*(){yield(yield s.alertCtrl.create({header:"\xc9xito",message:"Paciente registrado exitosamente",buttons:["OK"]})).present(),s.dismiss(!0)});return function(){return p.apply(this,arguments)}}(),error:function(){var p=(0,g.A)(function*(v){console.error("Error al registrar el paciente:",v),yield(yield s.alertCtrl.create({header:"Error",message:"Hubo un problema al registrar el paciente",buttons:["OK"]})).present()});return function(E){return p.apply(this,arguments)}}()})}else yield(yield s.alertCtrl.create({header:"Error",message:"Por favor complete todos los campos correctamente.",buttons:["OK"]})).present();var p})()}dismiss(s=!1){this.modalCtrl.dismiss(s)}}return(t=r).\u0275fac=function(s){return new(s||t)(e.rXU(l.ok),e.rXU(c.h),e.rXU(n.W3),e.rXU(n.hG))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-add-paciente"]],inputs:{paciente:"paciente"},decls:42,vars:3,consts:[[1,"ion-no-border"],["slot","start"],[3,"click"],["name","arrow-back-outline"],[1,"ion-text-center"],["name","person-add-outline"],[1,"ion-padding",3,"ngSubmit","formGroup"],[1,"form-group"],["position","floating"],["type","text","formControlName","dni","maxlength","8"],["type","text","formControlName","nombres"],["type","text","formControlName","apellidos"],[1,"select-item"],["formControlName","sexo","interface","action-sheet","placeholder","Seleccione el sexo"],["value","M"],["value","F"],["formControlName","estado","interface","action-sheet","placeholder","Seleccione el estado"],["value","1"],["value","0"],["expand","block","type","submit",1,"ion-margin-top","save-button"],["name","save-outline","slot","start"]],template:function(s,o){1&s&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),e.bIt("click",function(){return o.dismiss()}),e.nrm(4,"ion-icon",3),e.k0s()(),e.j41(5,"ion-title",4),e.nrm(6,"ion-icon",5),e.EFF(7),e.k0s()()(),e.j41(8,"ion-content")(9,"form",6),e.bIt("ngSubmit",function(){return o.onSubmit()}),e.j41(10,"div",7)(11,"ion-item")(12,"ion-label",8),e.EFF(13,"DNI"),e.k0s(),e.nrm(14,"ion-input",9),e.k0s(),e.j41(15,"ion-item")(16,"ion-label",8),e.EFF(17,"Nombres"),e.k0s(),e.nrm(18,"ion-input",10),e.k0s(),e.j41(19,"ion-item")(20,"ion-label",8),e.EFF(21,"Apellidos"),e.k0s(),e.nrm(22,"ion-input",11),e.k0s(),e.j41(23,"ion-item",12)(24,"ion-label",8),e.EFF(25,"Sexo"),e.k0s(),e.j41(26,"ion-select",13)(27,"ion-select-option",14),e.EFF(28,"Masculino"),e.k0s(),e.j41(29,"ion-select-option",15),e.EFF(30,"Femenino"),e.k0s()()(),e.j41(31,"ion-item",12)(32,"ion-label",8),e.EFF(33,"Estado"),e.k0s(),e.j41(34,"ion-select",16)(35,"ion-select-option",17),e.EFF(36,"Activo"),e.k0s(),e.j41(37,"ion-select-option",18),e.EFF(38,"Inactivo"),e.k0s()()()(),e.j41(39,"ion-button",19),e.nrm(40,"ion-icon",20),e.EFF(41),e.k0s()()()),2&s&&(e.R7$(7),e.SpI(" ",o.isEditMode?"Editar Paciente":"Nuevo Paciente"," "),e.R7$(2),e.Y8G("formGroup",o.pacienteForm),e.R7$(32),e.SpI(" ",o.isEditMode?"Actualizar":"Guardar"," "))},dependencies:[l.qT,l.BC,l.cb,l.tU,l.j4,l.JD,n.Jm,n.QW,n.W9,n.eU,n.iq,n.$w,n.uz,n.he,n.Nm,n.Ip,n.BC,n.ai,n.Je,n.Gw],styles:['@charset "UTF-8";ion-button[_ngcontent-%COMP%]{--background: transparent;--color: red}ion-button[_ngcontent-%COMP%]:hover{--color: darkred}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #ffffff}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:8px;vertical-align:middle}ion-content[_ngcontent-%COMP%]{--background: #f5f5f5}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:600px;margin:16px;padding:16px;background:#fff;border-radius:10px;box-shadow:0 2px 4px #0000001a}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: transparent;--padding-start: 0;--inner-padding-end: 0;--border-color: #dcdcdc;margin-bottom:16px}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.9rem;color:#666}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{font-size:1rem;--padding-start: 0}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: transparent;--border-color: #e0e0e0;--border-radius: 8px;--padding-start: 0;margin-bottom:15px;--highlight-color: #3498db}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item.select-item[_ngcontent-%COMP%]{--border-width: 1px;--border-style: solid;--border-color: #dcdcdc}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item.select-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{width:100%;max-width:100%;--padding-start: 10px;--padding-end: 10px;--padding-top: 12px;--padding-bottom: 12px}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item.select-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon){color:#666;opacity:1}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item.select-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(text){color:#333;font-size:.95rem}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[type=submit][_ngcontent-%COMP%]{--background: #3498db;--color: #ffffff;--border-radius: 8px;height:44px;font-size:.95rem;font-weight:500;margin-top:24px;text-transform:none}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[type=submit][_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{--color: #ffffff;margin-right:8px}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[type=submit][_ngcontent-%COMP%]:hover{--background: #2980b9}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: #3498db;margin-top:24px;font-size:1rem;font-weight:500;height:44px}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:8px}@media (max-width: 768px){form[_ngcontent-%COMP%]{margin:10px;padding:15px}}.validation-error[_ngcontent-%COMP%]{color:#e74c3c;font-size:.8rem;margin:4px 0 0}.form-section[_ngcontent-%COMP%]{padding:15px;border-radius:8px;background:#f8f9fa;margin-bottom:15px}  .select-interface-option{--color: #333333;font-size:.95rem;--padding-start: 16px}  .select-interface-option.select-interface-option-selected{--background: #e8f4fe;--color: #3498db;font-weight:500}']}),r})()},4796:(O,f,a)=>{a.d(f,{u:()=>n});var g=a(4412),l=a(8141),e=a(4438),c=a(1626);let n=(()=>{var i;class t{constructor(u){this.http=u,this.doctorData=null,this.loggedIn=new g.t(this.checkLoginStatus()),this.url="https://backendjs-dee6d131d346.herokuapp.com/api/login",this.url2="https://backendjs-dee6d131d346.herokuapp.com/api/doctores"}verificarLogin(u,s){return this.http.post(this.url,{dni:u,password:s}).pipe((0,l.M)(o=>{o&&o.doctor&&(this.doctorData=o.doctor,localStorage.setItem("doctorData",JSON.stringify(o.doctor)),localStorage.setItem("loggedIn","true"),this.loggedIn.next(!0))}))}crearDoctor(u){return this.http.post(this.url2,u)}setDoctorData(u){this.doctorData=u,localStorage.setItem("doctorData",JSON.stringify(u))}getDoctorData(){if(!this.doctorData){const u=localStorage.getItem("doctorData");u&&(this.doctorData=JSON.parse(u))}return this.doctorData}isLoggedIn(){return this.loggedIn.asObservable()}checkLoginStatus(){return"true"===localStorage.getItem("loggedIn")}logout(){this.doctorData=null,localStorage.removeItem("loggedIn"),localStorage.removeItem("id_doctor"),localStorage.removeItem("doctorData")}}return(i=t).\u0275fac=function(u){return new(u||i)(e.KVO(c.Qq))},i.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"}),t})()},6936:(O,f,a)=>{a.d(f,{C:()=>e});var g=a(4438),l=a(1626);let e=(()=>{var c;class n{constructor(t){this.http=t,this.url="https://backendjs-dee6d131d346.herokuapp.com/api/registros"}Borrar(t){return this.http.delete(this.url+"/"+t)}}return(c=n).\u0275fac=function(t){return new(t||c)(g.KVO(l.Qq))},c.\u0275prov=g.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),n})()},7793:(O,f,a)=>{a.d(f,{h:()=>e});var g=a(4438),l=a(1626);let e=(()=>{var c;class n{constructor(t){this.http=t,this.url="https://backendjs-dee6d131d346.herokuapp.com/api/pacientes"}getAllPacientes(){return this.http.get(`${this.url}`)}addPaciente(t){return this.http.post(this.url,t)}updatePaciente(t,r){return this.http.put(`${this.url}/${t}`,r)}deletePaciente(t){return this.http.delete(`${this.url}/${t}`)}}return(c=n).\u0275fac=function(t){return new(t||c)(g.KVO(l.Qq))},c.\u0275prov=g.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),n})()}}]);