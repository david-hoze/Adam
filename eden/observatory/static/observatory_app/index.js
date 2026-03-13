(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function lf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var _d={exports:{}},ho={},yd={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function R0(){if(Km)return Et;Km=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(G){return G===null||typeof G!="object"?null:(G=g&&G[g]||G["@@iterator"],typeof G=="function"?G:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(G,re,Ie){this.props=G,this.context=re,this.refs=M,this.updater=Ie||x}S.prototype.isReactComponent={},S.prototype.setState=function(G,re){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,re,"setState")},S.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(G,re,Ie){this.props=G,this.context=re,this.refs=M,this.updater=Ie||x}var L=N.prototype=new y;L.constructor=N,E(L,S.prototype),L.isPureReactComponent=!0;var w=Array.isArray,P=Object.prototype.hasOwnProperty,I={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function O(G,re,Ie){var te,Z={},ve=null,Ee=null;if(re!=null)for(te in re.ref!==void 0&&(Ee=re.ref),re.key!==void 0&&(ve=""+re.key),re)P.call(re,te)&&!D.hasOwnProperty(te)&&(Z[te]=re[te]);var fe=arguments.length-2;if(fe===1)Z.children=Ie;else if(1<fe){for(var Ye=Array(fe),Fe=0;Fe<fe;Fe++)Ye[Fe]=arguments[Fe+2];Z.children=Ye}if(G&&G.defaultProps)for(te in fe=G.defaultProps,fe)Z[te]===void 0&&(Z[te]=fe[te]);return{$$typeof:r,type:G,key:ve,ref:Ee,props:Z,_owner:I.current}}function R(G,re){return{$$typeof:r,type:G.type,key:re,ref:G.ref,props:G.props,_owner:G._owner}}function A(G){return typeof G=="object"&&G!==null&&G.$$typeof===r}function z(G){var re={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(Ie){return re[Ie]})}var k=/\/+/g;function Y(G,re){return typeof G=="object"&&G!==null&&G.key!=null?z(""+G.key):re.toString(36)}function se(G,re,Ie,te,Z){var ve=typeof G;(ve==="undefined"||ve==="boolean")&&(G=null);var Ee=!1;if(G===null)Ee=!0;else switch(ve){case"string":case"number":Ee=!0;break;case"object":switch(G.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=G,Z=Z(Ee),G=te===""?"."+Y(Ee,0):te,w(Z)?(Ie="",G!=null&&(Ie=G.replace(k,"$&/")+"/"),se(Z,re,Ie,"",function(Fe){return Fe})):Z!=null&&(A(Z)&&(Z=R(Z,Ie+(!Z.key||Ee&&Ee.key===Z.key?"":(""+Z.key).replace(k,"$&/")+"/")+G)),re.push(Z)),1;if(Ee=0,te=te===""?".":te+":",w(G))for(var fe=0;fe<G.length;fe++){ve=G[fe];var Ye=te+Y(ve,fe);Ee+=se(ve,re,Ie,Ye,Z)}else if(Ye=v(G),typeof Ye=="function")for(G=Ye.call(G),fe=0;!(ve=G.next()).done;)ve=ve.value,Ye=te+Y(ve,fe++),Ee+=se(ve,re,Ie,Ye,Z);else if(ve==="object")throw re=String(G),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Ee}function pe(G,re,Ie){if(G==null)return G;var te=[],Z=0;return se(G,te,"","",function(ve){return re.call(Ie,ve,Z++)}),te}function ee(G){if(G._status===-1){var re=G._result;re=re(),re.then(function(Ie){(G._status===0||G._status===-1)&&(G._status=1,G._result=Ie)},function(Ie){(G._status===0||G._status===-1)&&(G._status=2,G._result=Ie)}),G._status===-1&&(G._status=0,G._result=re)}if(G._status===1)return G._result.default;throw G._result}var de={current:null},W={transition:null},me={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:W,ReactCurrentOwner:I};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:pe,forEach:function(G,re,Ie){pe(G,function(){re.apply(this,arguments)},Ie)},count:function(G){var re=0;return pe(G,function(){re++}),re},toArray:function(G){return pe(G,function(re){return re})||[]},only:function(G){if(!A(G))throw Error("React.Children.only expected to receive a single React element child.");return G}},Et.Component=S,Et.Fragment=t,Et.Profiler=a,Et.PureComponent=N,Et.StrictMode=n,Et.Suspense=h,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Et.act=ae,Et.cloneElement=function(G,re,Ie){if(G==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+G+".");var te=E({},G.props),Z=G.key,ve=G.ref,Ee=G._owner;if(re!=null){if(re.ref!==void 0&&(ve=re.ref,Ee=I.current),re.key!==void 0&&(Z=""+re.key),G.type&&G.type.defaultProps)var fe=G.type.defaultProps;for(Ye in re)P.call(re,Ye)&&!D.hasOwnProperty(Ye)&&(te[Ye]=re[Ye]===void 0&&fe!==void 0?fe[Ye]:re[Ye])}var Ye=arguments.length-2;if(Ye===1)te.children=Ie;else if(1<Ye){fe=Array(Ye);for(var Fe=0;Fe<Ye;Fe++)fe[Fe]=arguments[Fe+2];te.children=fe}return{$$typeof:r,type:G.type,key:Z,ref:ve,props:te,_owner:Ee}},Et.createContext=function(G){return G={$$typeof:u,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},G.Provider={$$typeof:o,_context:G},G.Consumer=G},Et.createElement=O,Et.createFactory=function(G){var re=O.bind(null,G);return re.type=G,re},Et.createRef=function(){return{current:null}},Et.forwardRef=function(G){return{$$typeof:c,render:G}},Et.isValidElement=A,Et.lazy=function(G){return{$$typeof:m,_payload:{_status:-1,_result:G},_init:ee}},Et.memo=function(G,re){return{$$typeof:f,type:G,compare:re===void 0?null:re}},Et.startTransition=function(G){var re=W.transition;W.transition={};try{G()}finally{W.transition=re}},Et.unstable_act=ae,Et.useCallback=function(G,re){return de.current.useCallback(G,re)},Et.useContext=function(G){return de.current.useContext(G)},Et.useDebugValue=function(){},Et.useDeferredValue=function(G){return de.current.useDeferredValue(G)},Et.useEffect=function(G,re){return de.current.useEffect(G,re)},Et.useId=function(){return de.current.useId()},Et.useImperativeHandle=function(G,re,Ie){return de.current.useImperativeHandle(G,re,Ie)},Et.useInsertionEffect=function(G,re){return de.current.useInsertionEffect(G,re)},Et.useLayoutEffect=function(G,re){return de.current.useLayoutEffect(G,re)},Et.useMemo=function(G,re){return de.current.useMemo(G,re)},Et.useReducer=function(G,re,Ie){return de.current.useReducer(G,re,Ie)},Et.useRef=function(G){return de.current.useRef(G)},Et.useState=function(G){return de.current.useState(G)},Et.useSyncExternalStore=function(G,re,Ie){return de.current.useSyncExternalStore(G,re,Ie)},Et.useTransition=function(){return de.current.useTransition()},Et.version="18.3.1",Et}var Zm;function uf(){return Zm||(Zm=1,yd.exports=R0()),yd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function C0(){if(Qm)return ho;Qm=1;var r=uf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,f){var m,g={},v=null,x=null;f!==void 0&&(v=""+f),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(x=h.ref);for(m in h)n.call(h,m)&&!o.hasOwnProperty(m)&&(g[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:a.current}}return ho.Fragment=t,ho.jsx=u,ho.jsxs=u,ho}var Jm;function P0(){return Jm||(Jm=1,_d.exports=C0()),_d.exports}var U=P0(),Je=uf();const L0=lf(Je);var zl={},xd={exports:{}},Jn={},Sd={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function D0(){return eg||(eg=1,(function(r){function e(W,me){var ae=W.length;W.push(me);e:for(;0<ae;){var G=ae-1>>>1,re=W[G];if(0<a(re,me))W[G]=me,W[ae]=re,ae=G;else break e}}function t(W){return W.length===0?null:W[0]}function n(W){if(W.length===0)return null;var me=W[0],ae=W.pop();if(ae!==me){W[0]=ae;e:for(var G=0,re=W.length,Ie=re>>>1;G<Ie;){var te=2*(G+1)-1,Z=W[te],ve=te+1,Ee=W[ve];if(0>a(Z,ae))ve<re&&0>a(Ee,Z)?(W[G]=Ee,W[ve]=ae,G=ve):(W[G]=Z,W[te]=ae,G=te);else if(ve<re&&0>a(Ee,ae))W[G]=Ee,W[ve]=ae,G=ve;else break e}}return me}function a(W,me){var ae=W.sortIndex-me.sortIndex;return ae!==0?ae:W.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var h=[],f=[],m=1,g=null,v=3,x=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(W){for(var me=t(f);me!==null;){if(me.callback===null)n(f);else if(me.startTime<=W)n(f),me.sortIndex=me.expirationTime,e(h,me);else break;me=t(f)}}function w(W){if(M=!1,L(W),!E)if(t(h)!==null)E=!0,ee(P);else{var me=t(f);me!==null&&de(w,me.startTime-W)}}function P(W,me){E=!1,M&&(M=!1,y(O),O=-1),x=!0;var ae=v;try{for(L(me),g=t(h);g!==null&&(!(g.expirationTime>me)||W&&!z());){var G=g.callback;if(typeof G=="function"){g.callback=null,v=g.priorityLevel;var re=G(g.expirationTime<=me);me=r.unstable_now(),typeof re=="function"?g.callback=re:g===t(h)&&n(h),L(me)}else n(h);g=t(h)}if(g!==null)var Ie=!0;else{var te=t(f);te!==null&&de(w,te.startTime-me),Ie=!1}return Ie}finally{g=null,v=ae,x=!1}}var I=!1,D=null,O=-1,R=5,A=-1;function z(){return!(r.unstable_now()-A<R)}function k(){if(D!==null){var W=r.unstable_now();A=W;var me=!0;try{me=D(!0,W)}finally{me?Y():(I=!1,D=null)}}else I=!1}var Y;if(typeof N=="function")Y=function(){N(k)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,pe=se.port2;se.port1.onmessage=k,Y=function(){pe.postMessage(null)}}else Y=function(){S(k,0)};function ee(W){D=W,I||(I=!0,Y())}function de(W,me){O=S(function(){W(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(W){W.callback=null},r.unstable_continueExecution=function(){E||x||(E=!0,ee(P))},r.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<W?Math.floor(1e3/W):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(W){switch(v){case 1:case 2:case 3:var me=3;break;default:me=v}var ae=v;v=me;try{return W()}finally{v=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(W,me){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ae=v;v=W;try{return me()}finally{v=ae}},r.unstable_scheduleCallback=function(W,me,ae){var G=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?G+ae:G):ae=G,W){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ae+re,W={id:m++,callback:me,priorityLevel:W,startTime:ae,expirationTime:re,sortIndex:-1},ae>G?(W.sortIndex=ae,e(f,W),t(h)===null&&W===t(f)&&(M?(y(O),O=-1):M=!0,de(w,ae-G))):(W.sortIndex=re,e(h,W),E||x||(E=!0,ee(P))),W},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(W){var me=v;return function(){var ae=v;v=me;try{return W.apply(this,arguments)}finally{v=ae}}}})(Ed)),Ed}var tg;function N0(){return tg||(tg=1,Sd.exports=D0()),Sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function I0(){if(ng)return Jn;ng=1;var r=uf(),e=N0();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,a={};function o(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(a[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return h.call(g,i)?!0:h.call(m,i)?!1:f.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,d){if(s===null||typeof s>"u"||x(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,d,p,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,N);S[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,N);S[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,N);S[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,s,l,d){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,p,d)&&(l=null),d||p===null?v(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),I=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),W=Symbol.iterator;function me(i){return i===null||typeof i!="object"?null:(i=W&&i[W]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,G;function re(i){if(G===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);G=s&&s[1]||""}return`
`+G+i}var Ie=!1;function te(i,s){if(!i||Ie)return"";Ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(oe){var d=oe}Reflect.construct(i,[],s)}else{try{s.call()}catch(oe){d=oe}i.call(s.prototype)}else{try{throw Error()}catch(oe){d=oe}i()}}catch(oe){if(oe&&d&&typeof oe.stack=="string"){for(var p=oe.stack.split(`
`),_=d.stack.split(`
`),T=p.length-1,B=_.length-1;1<=T&&0<=B&&p[T]!==_[B];)B--;for(;1<=T&&0<=B;T--,B--)if(p[T]!==_[B]){if(T!==1||B!==1)do if(T--,B--,0>B||p[T]!==_[B]){var j=`
`+p[T].replace(" at new "," at ");return i.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",i.displayName)),j}while(1<=T&&0<=B);break}}}finally{Ie=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?re(i):""}function Z(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=te(i.type,!1),i;case 11:return i=te(i.type.render,!1),i;case 1:return i=te(i.type,!0),i;default:return""}}function ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case I:return"Portal";case R:return"Profiler";case O:return"StrictMode";case Y:return"Suspense";case se:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case A:return(i._context.displayName||"Context")+".Provider";case k:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case pe:return s=i.displayName||null,s!==null?s:ve(i.type)||"Memo";case ee:s=i._payload,i=i._init;try{return ve(i(s))}catch{}}return null}function Ee(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(s);case 8:return s===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function fe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ye(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Fe(i){var s=Ye(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){d=""+T,_.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function ft(i){i._valueTracker||(i._valueTracker=Fe(i))}function Pt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=Ye(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function vt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function V(i,s){var l=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Zt(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=fe(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function _t(i,s){s=s.checked,s!=null&&L(i,"checked",s,!1)}function Ge(i,s){_t(i,s);var l=fe(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?At(i,s.type,l):s.hasOwnProperty("defaultValue")&&At(i,s.type,fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function tt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function At(i,s,l){(s!=="number"||vt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var qe=Array.isArray;function F(i,s,l,d){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+fe(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function b(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ne(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(qe(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:fe(l)}}function Se(i,s){var l=fe(s.value),d=fe(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function Me(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function ye(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?ye(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Oe,st=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Oe=Oe||document.createElement("div"),Oe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Oe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function rt(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(i){He.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ae[s]=Ae[i]})});function at(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ae.hasOwnProperty(i)&&Ae[i]?(""+s).trim():s+"px"}function H(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=at(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var ge=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(i,s){if(s){if(ge[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function we(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var he=null;function X(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var De=null,ue=null,_e=null;function ke(i){if(i=Ka(i)){if(typeof De!="function")throw Error(t(280));var s=i.stateNode;s&&(s=el(s),De(i.stateNode,i.type,s))}}function Ne(i){ue?_e?_e.push(i):_e=[i]:ue=i}function lt(){if(ue){var i=ue,s=_e;if(_e=ue=null,ke(i),s)for(i=0;i<s.length;i++)ke(s[i])}}function Mt(i,s){return i(s)}function Ft(){}var pt=!1;function Qt(i,s,l){if(pt)return i(s,l);pt=!0;try{return Mt(i,s,l)}finally{pt=!1,(ue!==null||_e!==null)&&(Ft(),lt())}}function $t(i,s){var l=i.stateNode;if(l===null)return null;var d=el(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Wn=!1;if(c)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){Wn=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{Wn=!1}function jn(i,s,l,d,p,_,T,B,j){var oe=Array.prototype.slice.call(arguments,3);try{s.apply(l,oe)}catch(Re){this.onError(Re)}}var On=!1,Xn=null,Ti=!1,bi=null,an={onError:function(i){On=!0,Xn=i}};function $n(i,s,l,d,p,_,T,B,j){On=!1,Xn=null,jn.apply(an,arguments)}function Ki(i,s,l,d,p,_,T,B,j){if($n.apply(this,arguments),On){if(On){var oe=Xn;On=!1,Xn=null}else throw Error(t(198));Ti||(Ti=!0,bi=oe)}}function Tn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Ut(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Wt(i){if(Tn(i)!==i)throw Error(t(188))}function Ai(i){var s=i.alternate;if(!s){if(s=Tn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Wt(p),i;if(_===d)return Wt(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=_;else{for(var T=!1,B=p.child;B;){if(B===l){T=!0,l=p,d=_;break}if(B===d){T=!0,d=p,l=_;break}B=B.sibling}if(!T){for(B=_.child;B;){if(B===l){T=!0,l=_,d=p;break}if(B===d){T=!0,d=_,l=p;break}B=B.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function pn(i){return i=Ai(i),i!==null?Zi(i):null}function Zi(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Zi(i);if(s!==null)return s;i=i.sibling}return null}var is=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,q=e.unstable_shouldYield,ce=e.unstable_requestPaint,J=e.unstable_now,K=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,ze=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,Ke=e.unstable_LowPriority,mt=e.unstable_IdlePriority,dt=null,Qe=null;function Tt(i){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Rt,Jt=Math.log,jt=Math.LN2;function Rt(i){return i>>>=0,i===0?32:31-(Jt(i)/jt|0)|0}var ot=64,en=4194304;function wt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function bn(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,_=i.pingedLanes,T=l&268435455;if(T!==0){var B=T&~p;B!==0?d=wt(B):(_&=T,_!==0&&(d=wt(_)))}else T=l&~p,T!==0?d=wt(T):_!==0&&(d=wt(_));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-yt(s),p=1<<l,d|=i[l],s&=~p;return d}function wr(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zn(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-yt(_),B=1<<T,j=p[T];j===-1?((B&l)===0||(B&d)!==0)&&(p[T]=wr(B,s)):j<=s&&(i.expiredLanes|=B),_&=~B}}function Qi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Bt(){var i=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),i}function An(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function mn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-yt(s),i[s]=l}function Sn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-yt(l),_=1<<p;s[p]=0,d[p]=-1,i[p]=-1,l&=~_}}function gn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-yt(l),p=1<<d;p&s|i[d]&s&&(i[d]|=s),l&=~p}}var Lt=0;function Vi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Cf,Hu,Pf,Lf,Df,Vu=!1,zo=[],Tr=null,br=null,Ar=null,Ia=new Map,Ua=new Map,Rr=[],K_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(i,s){switch(i){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Ia.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(s.pointerId)}}function Fa(i,s,l,d,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Ka(s),s!==null&&Hu(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Z_(i,s,l,d,p){switch(s){case"focusin":return Tr=Fa(Tr,i,s,l,d,p),!0;case"dragenter":return br=Fa(br,i,s,l,d,p),!0;case"mouseover":return Ar=Fa(Ar,i,s,l,d,p),!0;case"pointerover":var _=p.pointerId;return Ia.set(_,Fa(Ia.get(_)||null,i,s,l,d,p)),!0;case"gotpointercapture":return _=p.pointerId,Ua.set(_,Fa(Ua.get(_)||null,i,s,l,d,p)),!0}return!1}function If(i){var s=rs(i.target);if(s!==null){var l=Tn(s);if(l!==null){if(s=l.tag,s===13){if(s=Ut(l),s!==null){i.blockedOn=s,Df(i.priority,function(){Pf(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Bo(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=ju(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);he=d,l.target.dispatchEvent(d),he=null}else return s=Ka(l),s!==null&&Hu(s),i.blockedOn=l,!1;s.shift()}return!0}function Uf(i,s,l){Bo(i)&&l.delete(s)}function Q_(){Vu=!1,Tr!==null&&Bo(Tr)&&(Tr=null),br!==null&&Bo(br)&&(br=null),Ar!==null&&Bo(Ar)&&(Ar=null),Ia.forEach(Uf),Ua.forEach(Uf)}function ka(i,s){i.blockedOn===s&&(i.blockedOn=null,Vu||(Vu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Q_)))}function Oa(i){function s(p){return ka(p,i)}if(0<zo.length){ka(zo[0],i);for(var l=1;l<zo.length;l++){var d=zo[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Tr!==null&&ka(Tr,i),br!==null&&ka(br,i),Ar!==null&&ka(Ar,i),Ia.forEach(s),Ua.forEach(s),l=0;l<Rr.length;l++)d=Rr[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Rr.length&&(l=Rr[0],l.blockedOn===null);)If(l),l.blockedOn===null&&Rr.shift()}var Ds=w.ReactCurrentBatchConfig,Go=!0;function J_(i,s,l,d){var p=Lt,_=Ds.transition;Ds.transition=null;try{Lt=1,Wu(i,s,l,d)}finally{Lt=p,Ds.transition=_}}function ey(i,s,l,d){var p=Lt,_=Ds.transition;Ds.transition=null;try{Lt=4,Wu(i,s,l,d)}finally{Lt=p,Ds.transition=_}}function Wu(i,s,l,d){if(Go){var p=ju(i,s,l,d);if(p===null)lc(i,s,d,Ho,l),Nf(i,d);else if(Z_(p,i,s,l,d))d.stopPropagation();else if(Nf(i,d),s&4&&-1<K_.indexOf(i)){for(;p!==null;){var _=Ka(p);if(_!==null&&Cf(_),_=ju(i,s,l,d),_===null&&lc(i,s,d,Ho,l),_===p)break;p=_}p!==null&&d.stopPropagation()}else lc(i,s,d,null,l)}}var Ho=null;function ju(i,s,l,d){if(Ho=null,i=X(d),i=rs(i),i!==null)if(s=Tn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Ut(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Ho=i,null}function Ff(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K()){case Pe:return 1;case ze:return 4;case We:case Ke:return 16;case mt:return 536870912;default:return 16}default:return 16}}var Cr=null,Xu=null,Vo=null;function kf(){if(Vo)return Vo;var i,s=Xu,l=s.length,d,p="value"in Cr?Cr.value:Cr.textContent,_=p.length;for(i=0;i<l&&s[i]===p[i];i++);var T=l-i;for(d=1;d<=T&&s[l-d]===p[_-d];d++);return Vo=p.slice(i,1<d?1-d:void 0)}function Wo(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function jo(){return!0}function Of(){return!1}function ri(i){function s(l,d,p,_,T){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(l=i[B],this[B]=l?l(_):_[B]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?jo:Of,this.isPropagationStopped=Of,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),s}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=ri(Ns),za=ae({},Ns,{view:0,detail:0}),ty=ri(za),Yu,qu,Ba,Xo=ae({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ba&&(Ba&&i.type==="mousemove"?(Yu=i.screenX-Ba.screenX,qu=i.screenY-Ba.screenY):qu=Yu=0,Ba=i),Yu)},movementY:function(i){return"movementY"in i?i.movementY:qu}}),zf=ri(Xo),ny=ae({},Xo,{dataTransfer:0}),iy=ri(ny),ry=ae({},za,{relatedTarget:0}),Ku=ri(ry),sy=ae({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=ri(sy),oy=ae({},Ns,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ly=ri(oy),uy=ae({},Ns,{data:0}),Bf=ri(uy),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=hy[i])?!!s[i]:!1}function Zu(){return fy}var py=ae({},za,{key:function(i){if(i.key){var s=cy[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Wo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?dy[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(i){return i.type==="keypress"?Wo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Wo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),my=ri(py),gy=ae({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=ri(gy),vy=ae({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),_y=ri(vy),yy=ae({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),xy=ri(yy),Sy=ae({},Xo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=ri(Sy),My=[9,13,27,32],Qu=c&&"CompositionEvent"in window,Ga=null;c&&"documentMode"in document&&(Ga=document.documentMode);var wy=c&&"TextEvent"in window&&!Ga,Hf=c&&(!Qu||Ga&&8<Ga&&11>=Ga),Vf=" ",Wf=!1;function jf(i,s){switch(i){case"keyup":return My.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Is=!1;function Ty(i,s){switch(i){case"compositionend":return Xf(s);case"keypress":return s.which!==32?null:(Wf=!0,Vf);case"textInput":return i=s.data,i===Vf&&Wf?null:i;default:return null}}function by(i,s){if(Is)return i==="compositionend"||!Qu&&jf(i,s)?(i=kf(),Vo=Xu=Cr=null,Is=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Hf&&s.locale!=="ko"?null:s.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!Ay[i.type]:s==="textarea"}function Yf(i,s,l,d){Ne(d),s=Zo(s,"onChange"),0<s.length&&(l=new $u("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var Ha=null,Va=null;function Ry(i){hp(i,0)}function $o(i){var s=zs(i);if(Pt(s))return i}function Cy(i,s){if(i==="change")return s}var qf=!1;if(c){var Ju;if(c){var ec="oninput"in document;if(!ec){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),ec=typeof Kf.oninput=="function"}Ju=ec}else Ju=!1;qf=Ju&&(!document.documentMode||9<document.documentMode)}function Zf(){Ha&&(Ha.detachEvent("onpropertychange",Qf),Va=Ha=null)}function Qf(i){if(i.propertyName==="value"&&$o(Va)){var s=[];Yf(s,Va,i,X(i)),Qt(Ry,s)}}function Py(i,s,l){i==="focusin"?(Zf(),Ha=s,Va=l,Ha.attachEvent("onpropertychange",Qf)):i==="focusout"&&Zf()}function Ly(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return $o(Va)}function Dy(i,s){if(i==="click")return $o(s)}function Ny(i,s){if(i==="input"||i==="change")return $o(s)}function Iy(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ri=typeof Object.is=="function"?Object.is:Iy;function Wa(i,s){if(Ri(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!h.call(s,p)||!Ri(i[p],s[p]))return!1}return!0}function Jf(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function ep(i,s){var l=Jf(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Jf(l)}}function tp(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?tp(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function np(){for(var i=window,s=vt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=vt(i.document)}return s}function tc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function Uy(i){var s=np(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&tp(l.ownerDocument.documentElement,l)){if(d!==null&&tc(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!i.extend&&_>d&&(p=d,d=_,_=p),p=ep(l,_);var T=ep(l,d);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>d?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Fy=c&&"documentMode"in document&&11>=document.documentMode,Us=null,nc=null,ja=null,ic=!1;function ip(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ic||Us==null||Us!==vt(d)||(d=Us,"selectionStart"in d&&tc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ja&&Wa(ja,d)||(ja=d,d=Zo(nc,"onSelect"),0<d.length&&(s=new $u("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=Us)))}function Yo(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Fs={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},rc={},rp={};c&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function qo(i){if(rc[i])return rc[i];if(!Fs[i])return i;var s=Fs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in rp)return rc[i]=s[l];return i}var sp=qo("animationend"),ap=qo("animationiteration"),op=qo("animationstart"),lp=qo("transitionend"),up=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(i,s){up.set(i,s),o(s,[i])}for(var sc=0;sc<cp.length;sc++){var ac=cp[sc],ky=ac.toLowerCase(),Oy=ac[0].toUpperCase()+ac.slice(1);Pr(ky,"on"+Oy)}Pr(sp,"onAnimationEnd"),Pr(ap,"onAnimationIteration"),Pr(op,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(lp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function dp(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,Ki(d,s,void 0,i),i.currentTarget=null}function hp(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var _=void 0;if(s)for(var T=d.length-1;0<=T;T--){var B=d[T],j=B.instance,oe=B.currentTarget;if(B=B.listener,j!==_&&p.isPropagationStopped())break e;dp(p,B,oe),_=j}else for(T=0;T<d.length;T++){if(B=d[T],j=B.instance,oe=B.currentTarget,B=B.listener,j!==_&&p.isPropagationStopped())break e;dp(p,B,oe),_=j}}}if(Ti)throw i=bi,Ti=!1,bi=null,i}function Ht(i,s){var l=s[pc];l===void 0&&(l=s[pc]=new Set);var d=i+"__bubble";l.has(d)||(fp(s,i,2,!1),l.add(d))}function oc(i,s,l){var d=0;s&&(d|=4),fp(l,i,d,s)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function $a(i){if(!i[Ko]){i[Ko]=!0,n.forEach(function(l){l!=="selectionchange"&&(zy.has(l)||oc(l,!1,i),oc(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Ko]||(s[Ko]=!0,oc("selectionchange",!1,s))}}function fp(i,s,l,d){switch(Ff(s)){case 1:var p=J_;break;case 4:p=ey;break;default:p=Wu}l=p.bind(null,s,l,i),p=void 0,!Wn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function lc(i,s,l,d,p){var _=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var B=d.stateNode.containerInfo;if(B===p||B.nodeType===8&&B.parentNode===p)break;if(T===4)for(T=d.return;T!==null;){var j=T.tag;if((j===3||j===4)&&(j=T.stateNode.containerInfo,j===p||j.nodeType===8&&j.parentNode===p))return;T=T.return}for(;B!==null;){if(T=rs(B),T===null)return;if(j=T.tag,j===5||j===6){d=_=T;continue e}B=B.parentNode}}d=d.return}Qt(function(){var oe=_,Re=X(l),Ce=[];e:{var Te=up.get(i);if(Te!==void 0){var je=$u,Ze=i;switch(i){case"keypress":if(Wo(l)===0)break e;case"keydown":case"keyup":je=my;break;case"focusin":Ze="focus",je=Ku;break;case"focusout":Ze="blur",je=Ku;break;case"beforeblur":case"afterblur":je=Ku;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=_y;break;case sp:case ap:case op:je=ay;break;case lp:je=xy;break;case"scroll":je=ty;break;case"wheel":je=Ey;break;case"copy":case"cut":case"paste":je=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=Gf}var et=(s&4)!==0,nn=!et&&i==="scroll",Q=et?Te!==null?Te+"Capture":null:Te;et=[];for(var $=oe,ie;$!==null;){ie=$;var Le=ie.stateNode;if(ie.tag===5&&Le!==null&&(ie=Le,Q!==null&&(Le=$t($,Q),Le!=null&&et.push(Ya($,Le,ie)))),nn)break;$=$.return}0<et.length&&(Te=new je(Te,Ze,null,l,Re),Ce.push({event:Te,listeners:et}))}}if((s&7)===0){e:{if(Te=i==="mouseover"||i==="pointerover",je=i==="mouseout"||i==="pointerout",Te&&l!==he&&(Ze=l.relatedTarget||l.fromElement)&&(rs(Ze)||Ze[Ji]))break e;if((je||Te)&&(Te=Re.window===Re?Re:(Te=Re.ownerDocument)?Te.defaultView||Te.parentWindow:window,je?(Ze=l.relatedTarget||l.toElement,je=oe,Ze=Ze?rs(Ze):null,Ze!==null&&(nn=Tn(Ze),Ze!==nn||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(je=null,Ze=oe),je!==Ze)){if(et=zf,Le="onMouseLeave",Q="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(et=Gf,Le="onPointerLeave",Q="onPointerEnter",$="pointer"),nn=je==null?Te:zs(je),ie=Ze==null?Te:zs(Ze),Te=new et(Le,$+"leave",je,l,Re),Te.target=nn,Te.relatedTarget=ie,Le=null,rs(Re)===oe&&(et=new et(Q,$+"enter",Ze,l,Re),et.target=ie,et.relatedTarget=nn,Le=et),nn=Le,je&&Ze)t:{for(et=je,Q=Ze,$=0,ie=et;ie;ie=ks(ie))$++;for(ie=0,Le=Q;Le;Le=ks(Le))ie++;for(;0<$-ie;)et=ks(et),$--;for(;0<ie-$;)Q=ks(Q),ie--;for(;$--;){if(et===Q||Q!==null&&et===Q.alternate)break t;et=ks(et),Q=ks(Q)}et=null}else et=null;je!==null&&pp(Ce,Te,je,et,!1),Ze!==null&&nn!==null&&pp(Ce,nn,Ze,et,!0)}}e:{if(Te=oe?zs(oe):window,je=Te.nodeName&&Te.nodeName.toLowerCase(),je==="select"||je==="input"&&Te.type==="file")var it=Cy;else if($f(Te))if(qf)it=Ny;else{it=Ly;var ut=Py}else(je=Te.nodeName)&&je.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(it=Dy);if(it&&(it=it(i,oe))){Yf(Ce,it,l,Re);break e}ut&&ut(i,Te,oe),i==="focusout"&&(ut=Te._wrapperState)&&ut.controlled&&Te.type==="number"&&At(Te,"number",Te.value)}switch(ut=oe?zs(oe):window,i){case"focusin":($f(ut)||ut.contentEditable==="true")&&(Us=ut,nc=oe,ja=null);break;case"focusout":ja=nc=Us=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,ip(Ce,l,Re);break;case"selectionchange":if(Fy)break;case"keydown":case"keyup":ip(Ce,l,Re)}var ct;if(Qu)e:{switch(i){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Is?jf(i,l)&&(gt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(gt="onCompositionStart");gt&&(Hf&&l.locale!=="ko"&&(Is||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Is&&(ct=kf()):(Cr=Re,Xu="value"in Cr?Cr.value:Cr.textContent,Is=!0)),ut=Zo(oe,gt),0<ut.length&&(gt=new Bf(gt,i,null,l,Re),Ce.push({event:gt,listeners:ut}),ct?gt.data=ct:(ct=Xf(l),ct!==null&&(gt.data=ct)))),(ct=wy?Ty(i,l):by(i,l))&&(oe=Zo(oe,"onBeforeInput"),0<oe.length&&(Re=new Bf("onBeforeInput","beforeinput",null,l,Re),Ce.push({event:Re,listeners:oe}),Re.data=ct))}hp(Ce,s)})}function Ya(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Zo(i,s){for(var l=s+"Capture",d=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=$t(i,l),_!=null&&d.unshift(Ya(i,_,p)),_=$t(i,s),_!=null&&d.push(Ya(i,_,p))),i=i.return}return d}function ks(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function pp(i,s,l,d,p){for(var _=s._reactName,T=[];l!==null&&l!==d;){var B=l,j=B.alternate,oe=B.stateNode;if(j!==null&&j===d)break;B.tag===5&&oe!==null&&(B=oe,p?(j=$t(l,_),j!=null&&T.unshift(Ya(l,j,B))):p||(j=$t(l,_),j!=null&&T.push(Ya(l,j,B)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var By=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function mp(i){return(typeof i=="string"?i:""+i).replace(By,`
`).replace(Gy,"")}function Qo(i,s,l){if(s=mp(s),mp(i)!==s&&l)throw Error(t(425))}function Jo(){}var uc=null,cc=null;function dc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var hc=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(i){return gp.resolve(null).then(i).catch(Wy)}:hc;function Wy(i){setTimeout(function(){throw i})}function fc(i,s){var l=s,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),Oa(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Oa(s)}function Lr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function vp(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Wi="__reactFiber$"+Os,qa="__reactProps$"+Os,Ji="__reactContainer$"+Os,pc="__reactEvents$"+Os,jy="__reactListeners$"+Os,Xy="__reactHandles$"+Os;function rs(i){var s=i[Wi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Ji]||l[Wi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=vp(i);i!==null;){if(l=i[Wi])return l;i=vp(i)}return s}i=l,l=i.parentNode}return null}function Ka(i){return i=i[Wi]||i[Ji],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function zs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function el(i){return i[qa]||null}var mc=[],Bs=-1;function Dr(i){return{current:i}}function Vt(i){0>Bs||(i.current=mc[Bs],mc[Bs]=null,Bs--)}function Gt(i,s){Bs++,mc[Bs]=i.current,i.current=s}var Nr={},Rn=Dr(Nr),Yn=Dr(!1),ss=Nr;function Gs(i,s){var l=i.type.contextTypes;if(!l)return Nr;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function qn(i){return i=i.childContextTypes,i!=null}function tl(){Vt(Yn),Vt(Rn)}function _p(i,s,l){if(Rn.current!==Nr)throw Error(t(168));Gt(Rn,s),Gt(Yn,l)}function yp(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(t(108,Ee(i)||"Unknown",p));return ae({},l,d)}function nl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Nr,ss=Rn.current,Gt(Rn,i),Gt(Yn,Yn.current),!0}function xp(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=yp(i,s,ss),d.__reactInternalMemoizedMergedChildContext=i,Vt(Yn),Vt(Rn),Gt(Rn,i)):Vt(Yn),Gt(Yn,l)}var er=null,il=!1,gc=!1;function Sp(i){er===null?er=[i]:er.push(i)}function $y(i){il=!0,Sp(i)}function Ir(){if(!gc&&er!==null){gc=!0;var i=0,s=Lt;try{var l=er;for(Lt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}er=null,il=!1}catch(p){throw er!==null&&(er=er.slice(i+1)),is(Pe,Ir),p}finally{Lt=s,gc=!1}}return null}var Hs=[],Vs=0,rl=null,sl=0,hi=[],fi=0,as=null,tr=1,nr="";function os(i,s){Hs[Vs++]=sl,Hs[Vs++]=rl,rl=i,sl=s}function Ep(i,s,l){hi[fi++]=tr,hi[fi++]=nr,hi[fi++]=as,as=i;var d=tr;i=nr;var p=32-yt(d)-1;d&=~(1<<p),l+=1;var _=32-yt(s)+p;if(30<_){var T=p-p%5;_=(d&(1<<T)-1).toString(32),d>>=T,p-=T,tr=1<<32-yt(s)+p|l<<p|d,nr=_+i}else tr=1<<_|l<<p|d,nr=i}function vc(i){i.return!==null&&(os(i,1),Ep(i,1,0))}function _c(i){for(;i===rl;)rl=Hs[--Vs],Hs[Vs]=null,sl=Hs[--Vs],Hs[Vs]=null;for(;i===as;)as=hi[--fi],hi[fi]=null,nr=hi[--fi],hi[fi]=null,tr=hi[--fi],hi[fi]=null}var si=null,ai=null,Xt=!1,Ci=null;function Mp(i,s){var l=vi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function wp(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,si=i,ai=Lr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,si=i,ai=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=as!==null?{id:tr,overflow:nr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=vi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,si=i,ai=null,!0):!1;default:return!1}}function yc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function xc(i){if(Xt){var s=ai;if(s){var l=s;if(!wp(i,s)){if(yc(i))throw Error(t(418));s=Lr(l.nextSibling);var d=si;s&&wp(i,s)?Mp(d,l):(i.flags=i.flags&-4097|2,Xt=!1,si=i)}}else{if(yc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Xt=!1,si=i}}}function Tp(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;si=i}function al(i){if(i!==si)return!1;if(!Xt)return Tp(i),Xt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!dc(i.type,i.memoizedProps)),s&&(s=ai)){if(yc(i))throw bp(),Error(t(418));for(;s;)Mp(i,s),s=Lr(s.nextSibling)}if(Tp(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){ai=Lr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}ai=null}}else ai=si?Lr(i.stateNode.nextSibling):null;return!0}function bp(){for(var i=ai;i;)i=Lr(i.nextSibling)}function Ws(){ai=si=null,Xt=!1}function Sc(i){Ci===null?Ci=[i]:Ci.push(i)}var Yy=w.ReactCurrentBatchConfig;function Za(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var p=d,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var B=p.refs;T===null?delete B[_]:B[_]=T},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function ol(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Ap(i){var s=i._init;return s(i._payload)}function Rp(i){function s(Q,$){if(i){var ie=Q.deletions;ie===null?(Q.deletions=[$],Q.flags|=16):ie.push($)}}function l(Q,$){if(!i)return null;for(;$!==null;)s(Q,$),$=$.sibling;return null}function d(Q,$){for(Q=new Map;$!==null;)$.key!==null?Q.set($.key,$):Q.set($.index,$),$=$.sibling;return Q}function p(Q,$){return Q=Hr(Q,$),Q.index=0,Q.sibling=null,Q}function _(Q,$,ie){return Q.index=ie,i?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<$?(Q.flags|=2,$):ie):(Q.flags|=2,$)):(Q.flags|=1048576,$)}function T(Q){return i&&Q.alternate===null&&(Q.flags|=2),Q}function B(Q,$,ie,Le){return $===null||$.tag!==6?($=hd(ie,Q.mode,Le),$.return=Q,$):($=p($,ie),$.return=Q,$)}function j(Q,$,ie,Le){var it=ie.type;return it===D?Re(Q,$,ie.props.children,Le,ie.key):$!==null&&($.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ee&&Ap(it)===$.type)?(Le=p($,ie.props),Le.ref=Za(Q,$,ie),Le.return=Q,Le):(Le=Ll(ie.type,ie.key,ie.props,null,Q.mode,Le),Le.ref=Za(Q,$,ie),Le.return=Q,Le)}function oe(Q,$,ie,Le){return $===null||$.tag!==4||$.stateNode.containerInfo!==ie.containerInfo||$.stateNode.implementation!==ie.implementation?($=fd(ie,Q.mode,Le),$.return=Q,$):($=p($,ie.children||[]),$.return=Q,$)}function Re(Q,$,ie,Le,it){return $===null||$.tag!==7?($=ms(ie,Q.mode,Le,it),$.return=Q,$):($=p($,ie),$.return=Q,$)}function Ce(Q,$,ie){if(typeof $=="string"&&$!==""||typeof $=="number")return $=hd(""+$,Q.mode,ie),$.return=Q,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case P:return ie=Ll($.type,$.key,$.props,null,Q.mode,ie),ie.ref=Za(Q,null,$),ie.return=Q,ie;case I:return $=fd($,Q.mode,ie),$.return=Q,$;case ee:var Le=$._init;return Ce(Q,Le($._payload),ie)}if(qe($)||me($))return $=ms($,Q.mode,ie,null),$.return=Q,$;ol(Q,$)}return null}function Te(Q,$,ie,Le){var it=$!==null?$.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return it!==null?null:B(Q,$,""+ie,Le);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:return ie.key===it?j(Q,$,ie,Le):null;case I:return ie.key===it?oe(Q,$,ie,Le):null;case ee:return it=ie._init,Te(Q,$,it(ie._payload),Le)}if(qe(ie)||me(ie))return it!==null?null:Re(Q,$,ie,Le,null);ol(Q,ie)}return null}function je(Q,$,ie,Le,it){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return Q=Q.get(ie)||null,B($,Q,""+Le,it);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case P:return Q=Q.get(Le.key===null?ie:Le.key)||null,j($,Q,Le,it);case I:return Q=Q.get(Le.key===null?ie:Le.key)||null,oe($,Q,Le,it);case ee:var ut=Le._init;return je(Q,$,ie,ut(Le._payload),it)}if(qe(Le)||me(Le))return Q=Q.get(ie)||null,Re($,Q,Le,it,null);ol($,Le)}return null}function Ze(Q,$,ie,Le){for(var it=null,ut=null,ct=$,gt=$=0,yn=null;ct!==null&&gt<ie.length;gt++){ct.index>gt?(yn=ct,ct=null):yn=ct.sibling;var Nt=Te(Q,ct,ie[gt],Le);if(Nt===null){ct===null&&(ct=yn);break}i&&ct&&Nt.alternate===null&&s(Q,ct),$=_(Nt,$,gt),ut===null?it=Nt:ut.sibling=Nt,ut=Nt,ct=yn}if(gt===ie.length)return l(Q,ct),Xt&&os(Q,gt),it;if(ct===null){for(;gt<ie.length;gt++)ct=Ce(Q,ie[gt],Le),ct!==null&&($=_(ct,$,gt),ut===null?it=ct:ut.sibling=ct,ut=ct);return Xt&&os(Q,gt),it}for(ct=d(Q,ct);gt<ie.length;gt++)yn=je(ct,Q,gt,ie[gt],Le),yn!==null&&(i&&yn.alternate!==null&&ct.delete(yn.key===null?gt:yn.key),$=_(yn,$,gt),ut===null?it=yn:ut.sibling=yn,ut=yn);return i&&ct.forEach(function(Vr){return s(Q,Vr)}),Xt&&os(Q,gt),it}function et(Q,$,ie,Le){var it=me(ie);if(typeof it!="function")throw Error(t(150));if(ie=it.call(ie),ie==null)throw Error(t(151));for(var ut=it=null,ct=$,gt=$=0,yn=null,Nt=ie.next();ct!==null&&!Nt.done;gt++,Nt=ie.next()){ct.index>gt?(yn=ct,ct=null):yn=ct.sibling;var Vr=Te(Q,ct,Nt.value,Le);if(Vr===null){ct===null&&(ct=yn);break}i&&ct&&Vr.alternate===null&&s(Q,ct),$=_(Vr,$,gt),ut===null?it=Vr:ut.sibling=Vr,ut=Vr,ct=yn}if(Nt.done)return l(Q,ct),Xt&&os(Q,gt),it;if(ct===null){for(;!Nt.done;gt++,Nt=ie.next())Nt=Ce(Q,Nt.value,Le),Nt!==null&&($=_(Nt,$,gt),ut===null?it=Nt:ut.sibling=Nt,ut=Nt);return Xt&&os(Q,gt),it}for(ct=d(Q,ct);!Nt.done;gt++,Nt=ie.next())Nt=je(ct,Q,gt,Nt.value,Le),Nt!==null&&(i&&Nt.alternate!==null&&ct.delete(Nt.key===null?gt:Nt.key),$=_(Nt,$,gt),ut===null?it=Nt:ut.sibling=Nt,ut=Nt);return i&&ct.forEach(function(A0){return s(Q,A0)}),Xt&&os(Q,gt),it}function nn(Q,$,ie,Le){if(typeof ie=="object"&&ie!==null&&ie.type===D&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:e:{for(var it=ie.key,ut=$;ut!==null;){if(ut.key===it){if(it=ie.type,it===D){if(ut.tag===7){l(Q,ut.sibling),$=p(ut,ie.props.children),$.return=Q,Q=$;break e}}else if(ut.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ee&&Ap(it)===ut.type){l(Q,ut.sibling),$=p(ut,ie.props),$.ref=Za(Q,ut,ie),$.return=Q,Q=$;break e}l(Q,ut);break}else s(Q,ut);ut=ut.sibling}ie.type===D?($=ms(ie.props.children,Q.mode,Le,ie.key),$.return=Q,Q=$):(Le=Ll(ie.type,ie.key,ie.props,null,Q.mode,Le),Le.ref=Za(Q,$,ie),Le.return=Q,Q=Le)}return T(Q);case I:e:{for(ut=ie.key;$!==null;){if($.key===ut)if($.tag===4&&$.stateNode.containerInfo===ie.containerInfo&&$.stateNode.implementation===ie.implementation){l(Q,$.sibling),$=p($,ie.children||[]),$.return=Q,Q=$;break e}else{l(Q,$);break}else s(Q,$);$=$.sibling}$=fd(ie,Q.mode,Le),$.return=Q,Q=$}return T(Q);case ee:return ut=ie._init,nn(Q,$,ut(ie._payload),Le)}if(qe(ie))return Ze(Q,$,ie,Le);if(me(ie))return et(Q,$,ie,Le);ol(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,$!==null&&$.tag===6?(l(Q,$.sibling),$=p($,ie),$.return=Q,Q=$):(l(Q,$),$=hd(ie,Q.mode,Le),$.return=Q,Q=$),T(Q)):l(Q,$)}return nn}var js=Rp(!0),Cp=Rp(!1),ll=Dr(null),ul=null,Xs=null,Ec=null;function Mc(){Ec=Xs=ul=null}function wc(i){var s=ll.current;Vt(ll),i._currentValue=s}function Tc(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function $s(i,s){ul=i,Ec=Xs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Kn=!0),i.firstContext=null)}function pi(i){var s=i._currentValue;if(Ec!==i)if(i={context:i,memoizedValue:s,next:null},Xs===null){if(ul===null)throw Error(t(308));Xs=i,ul.dependencies={lanes:0,firstContext:i}}else Xs=Xs.next=i;return s}var ls=null;function bc(i){ls===null?ls=[i]:ls.push(i)}function Pp(i,s,l,d){var p=s.interleaved;return p===null?(l.next=l,bc(s)):(l.next=p.next,p.next=l),s.interleaved=l,ir(i,d)}function ir(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ur=!1;function Ac(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function rr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Fr(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Dt&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,ir(i,l)}return p=d.interleaved,p===null?(s.next=s,bc(d)):(s.next=p.next,p.next=s),d.interleaved=s,ir(i,l)}function cl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,gn(i,l)}}function Dp(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function dl(i,s,l,d){var p=i.updateQueue;Ur=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,B=p.shared.pending;if(B!==null){p.shared.pending=null;var j=B,oe=j.next;j.next=null,T===null?_=oe:T.next=oe,T=j;var Re=i.alternate;Re!==null&&(Re=Re.updateQueue,B=Re.lastBaseUpdate,B!==T&&(B===null?Re.firstBaseUpdate=oe:B.next=oe,Re.lastBaseUpdate=j))}if(_!==null){var Ce=p.baseState;T=0,Re=oe=j=null,B=_;do{var Te=B.lane,je=B.eventTime;if((d&Te)===Te){Re!==null&&(Re=Re.next={eventTime:je,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ze=i,et=B;switch(Te=s,je=l,et.tag){case 1:if(Ze=et.payload,typeof Ze=="function"){Ce=Ze.call(je,Ce,Te);break e}Ce=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=et.payload,Te=typeof Ze=="function"?Ze.call(je,Ce,Te):Ze,Te==null)break e;Ce=ae({},Ce,Te);break e;case 2:Ur=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,Te=p.effects,Te===null?p.effects=[B]:Te.push(B))}else je={eventTime:je,lane:Te,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Re===null?(oe=Re=je,j=Ce):Re=Re.next=je,T|=Te;if(B=B.next,B===null){if(B=p.shared.pending,B===null)break;Te=B,B=Te.next,Te.next=null,p.lastBaseUpdate=Te,p.shared.pending=null}}while(!0);if(Re===null&&(j=Ce),p.baseState=j,p.firstBaseUpdate=oe,p.lastBaseUpdate=Re,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ds|=T,i.lanes=T,i.memoizedState=Ce}}function Np(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Qa={},ji=Dr(Qa),Ja=Dr(Qa),eo=Dr(Qa);function us(i){if(i===Qa)throw Error(t(174));return i}function Rc(i,s){switch(Gt(eo,s),Gt(Ja,i),Gt(ji,Qa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Xe(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Xe(s,i)}Vt(ji),Gt(ji,s)}function Ys(){Vt(ji),Vt(Ja),Vt(eo)}function Ip(i){us(eo.current);var s=us(ji.current),l=Xe(s,i.type);s!==l&&(Gt(Ja,i),Gt(ji,l))}function Cc(i){Ja.current===i&&(Vt(ji),Vt(Ja))}var Yt=Dr(0);function hl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Pc=[];function Lc(){for(var i=0;i<Pc.length;i++)Pc[i]._workInProgressVersionPrimary=null;Pc.length=0}var fl=w.ReactCurrentDispatcher,Dc=w.ReactCurrentBatchConfig,cs=0,qt=null,un=null,vn=null,pl=!1,to=!1,no=0,qy=0;function Cn(){throw Error(t(321))}function Nc(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Ri(i[l],s[l]))return!1;return!0}function Ic(i,s,l,d,p,_){if(cs=_,qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,fl.current=i===null||i.memoizedState===null?Jy:e0,i=l(d,p),to){_=0;do{if(to=!1,no=0,25<=_)throw Error(t(301));_+=1,vn=un=null,s.updateQueue=null,fl.current=t0,i=l(d,p)}while(to)}if(fl.current=vl,s=un!==null&&un.next!==null,cs=0,vn=un=qt=null,pl=!1,s)throw Error(t(300));return i}function Uc(){var i=no!==0;return no=0,i}function Xi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?qt.memoizedState=vn=i:vn=vn.next=i,vn}function mi(){if(un===null){var i=qt.alternate;i=i!==null?i.memoizedState:null}else i=un.next;var s=vn===null?qt.memoizedState:vn.next;if(s!==null)vn=s,un=i;else{if(i===null)throw Error(t(310));un=i,i={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},vn===null?qt.memoizedState=vn=i:vn=vn.next=i}return vn}function io(i,s){return typeof s=="function"?s(i):s}function Fc(i){var s=mi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=un,p=d.baseQueue,_=l.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}d.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,d=d.baseState;var B=T=null,j=null,oe=_;do{var Re=oe.lane;if((cs&Re)===Re)j!==null&&(j=j.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),d=oe.hasEagerState?oe.eagerState:i(d,oe.action);else{var Ce={lane:Re,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};j===null?(B=j=Ce,T=d):j=j.next=Ce,qt.lanes|=Re,ds|=Re}oe=oe.next}while(oe!==null&&oe!==_);j===null?T=d:j.next=B,Ri(d,s.memoizedState)||(Kn=!0),s.memoizedState=d,s.baseState=T,s.baseQueue=j,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do _=p.lane,qt.lanes|=_,ds|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function kc(i){var s=mi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do _=i(_,T.action),T=T.next;while(T!==p);Ri(_,s.memoizedState)||(Kn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,d]}function Up(){}function Fp(i,s){var l=qt,d=mi(),p=s(),_=!Ri(d.memoizedState,p);if(_&&(d.memoizedState=p,Kn=!0),d=d.queue,Oc(zp.bind(null,l,d,i),[i]),d.getSnapshot!==s||_||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,ro(9,Op.bind(null,l,d,p,s),void 0,null),_n===null)throw Error(t(349));(cs&30)!==0||kp(l,s,p)}return p}function kp(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=qt.updateQueue,s===null?(s={lastEffect:null,stores:null},qt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Op(i,s,l,d){s.value=l,s.getSnapshot=d,Bp(s)&&Gp(i)}function zp(i,s,l){return l(function(){Bp(s)&&Gp(i)})}function Bp(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Ri(i,l)}catch{return!0}}function Gp(i){var s=ir(i,1);s!==null&&Ni(s,i,1,-1)}function Hp(i){var s=Xi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:i},s.queue=i,i=i.dispatch=Qy.bind(null,qt,i),[s.memoizedState,i]}function ro(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=qt.updateQueue,s===null?(s={lastEffect:null,stores:null},qt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function Vp(){return mi().memoizedState}function ml(i,s,l,d){var p=Xi();qt.flags|=i,p.memoizedState=ro(1|s,l,void 0,d===void 0?null:d)}function gl(i,s,l,d){var p=mi();d=d===void 0?null:d;var _=void 0;if(un!==null){var T=un.memoizedState;if(_=T.destroy,d!==null&&Nc(d,T.deps)){p.memoizedState=ro(s,l,_,d);return}}qt.flags|=i,p.memoizedState=ro(1|s,l,_,d)}function Wp(i,s){return ml(8390656,8,i,s)}function Oc(i,s){return gl(2048,8,i,s)}function jp(i,s){return gl(4,2,i,s)}function Xp(i,s){return gl(4,4,i,s)}function $p(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Yp(i,s,l){return l=l!=null?l.concat([i]):null,gl(4,4,$p.bind(null,s,i),l)}function zc(){}function qp(i,s){var l=mi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Nc(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function Kp(i,s){var l=mi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Nc(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function Zp(i,s,l){return(cs&21)===0?(i.baseState&&(i.baseState=!1,Kn=!0),i.memoizedState=l):(Ri(l,s)||(l=Bt(),qt.lanes|=l,ds|=l,i.baseState=!0),s)}function Ky(i,s){var l=Lt;Lt=l!==0&&4>l?l:4,i(!0);var d=Dc.transition;Dc.transition={};try{i(!1),s()}finally{Lt=l,Dc.transition=d}}function Qp(){return mi().memoizedState}function Zy(i,s,l){var d=Br(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Jp(i))em(s,l);else if(l=Pp(i,s,l,d),l!==null){var p=Gn();Ni(l,i,d,p),tm(l,s,d)}}function Qy(i,s,l){var d=Br(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Jp(i))em(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,B=_(T,l);if(p.hasEagerState=!0,p.eagerState=B,Ri(B,T)){var j=s.interleaved;j===null?(p.next=p,bc(s)):(p.next=j.next,j.next=p),s.interleaved=p;return}}catch{}finally{}l=Pp(i,s,p,d),l!==null&&(p=Gn(),Ni(l,i,d,p),tm(l,s,d))}}function Jp(i){var s=i.alternate;return i===qt||s!==null&&s===qt}function em(i,s){to=pl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function tm(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,gn(i,l)}}var vl={readContext:pi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},Jy={readContext:pi,useCallback:function(i,s){return Xi().memoizedState=[i,s===void 0?null:s],i},useContext:pi,useEffect:Wp,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,ml(4194308,4,$p.bind(null,s,i),l)},useLayoutEffect:function(i,s){return ml(4194308,4,i,s)},useInsertionEffect:function(i,s){return ml(4,2,i,s)},useMemo:function(i,s){var l=Xi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=Xi();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=Zy.bind(null,qt,i),[d.memoizedState,i]},useRef:function(i){var s=Xi();return i={current:i},s.memoizedState=i},useState:Hp,useDebugValue:zc,useDeferredValue:function(i){return Xi().memoizedState=i},useTransition:function(){var i=Hp(!1),s=i[0];return i=Ky.bind(null,i[1]),Xi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=qt,p=Xi();if(Xt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),_n===null)throw Error(t(349));(cs&30)!==0||kp(d,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,Wp(zp.bind(null,d,_,i),[i]),d.flags|=2048,ro(9,Op.bind(null,d,_,l,s),void 0,null),l},useId:function(){var i=Xi(),s=_n.identifierPrefix;if(Xt){var l=nr,d=tr;l=(d&~(1<<32-yt(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=no++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=qy++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},e0={readContext:pi,useCallback:qp,useContext:pi,useEffect:Oc,useImperativeHandle:Yp,useInsertionEffect:jp,useLayoutEffect:Xp,useMemo:Kp,useReducer:Fc,useRef:Vp,useState:function(){return Fc(io)},useDebugValue:zc,useDeferredValue:function(i){var s=mi();return Zp(s,un.memoizedState,i)},useTransition:function(){var i=Fc(io)[0],s=mi().memoizedState;return[i,s]},useMutableSource:Up,useSyncExternalStore:Fp,useId:Qp,unstable_isNewReconciler:!1},t0={readContext:pi,useCallback:qp,useContext:pi,useEffect:Oc,useImperativeHandle:Yp,useInsertionEffect:jp,useLayoutEffect:Xp,useMemo:Kp,useReducer:kc,useRef:Vp,useState:function(){return kc(io)},useDebugValue:zc,useDeferredValue:function(i){var s=mi();return un===null?s.memoizedState=i:Zp(s,un.memoizedState,i)},useTransition:function(){var i=kc(io)[0],s=mi().memoizedState;return[i,s]},useMutableSource:Up,useSyncExternalStore:Fp,useId:Qp,unstable_isNewReconciler:!1};function Pi(i,s){if(i&&i.defaultProps){s=ae({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Bc(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:ae({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var _l={isMounted:function(i){return(i=i._reactInternals)?Tn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=Gn(),p=Br(i),_=rr(d,p);_.payload=s,l!=null&&(_.callback=l),s=Fr(i,_,p),s!==null&&(Ni(s,i,p,d),cl(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=Gn(),p=Br(i),_=rr(d,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Fr(i,_,p),s!==null&&(Ni(s,i,p,d),cl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Gn(),d=Br(i),p=rr(l,d);p.tag=2,s!=null&&(p.callback=s),s=Fr(i,p,d),s!==null&&(Ni(s,i,d,l),cl(s,i,d))}};function nm(i,s,l,d,p,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,T):s.prototype&&s.prototype.isPureReactComponent?!Wa(l,d)||!Wa(p,_):!0}function im(i,s,l){var d=!1,p=Nr,_=s.contextType;return typeof _=="object"&&_!==null?_=pi(_):(p=qn(s)?ss:Rn.current,d=s.contextTypes,_=(d=d!=null)?Gs(i,p):Nr),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_l,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function rm(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&_l.enqueueReplaceState(s,s.state,null)}function Gc(i,s,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Ac(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=pi(_):(_=qn(s)?ss:Rn.current,p.context=Gs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Bc(i,s,_,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&_l.enqueueReplaceState(p,p.state,null),dl(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function qs(i,s){try{var l="",d=s;do l+=Z(d),d=d.return;while(d);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Hc(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Vc(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function sm(i,s,l){l=rr(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Tl||(Tl=!0,rd=d),Vc(i,s)},l}function am(i,s,l){l=rr(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;l.payload=function(){return d(p)},l.callback=function(){Vc(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Vc(i,s),typeof d!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),l}function om(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new n0;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(l)||(p.add(l),i=g0.bind(null,i,s,l),s.then(i,i))}function lm(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function um(i,s,l,d,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=rr(-1,1),s.tag=2,Fr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var i0=w.ReactCurrentOwner,Kn=!1;function Bn(i,s,l,d){s.child=i===null?Cp(s,null,l,d):js(s,i.child,l,d)}function cm(i,s,l,d,p){l=l.render;var _=s.ref;return $s(s,p),d=Ic(i,s,l,d,_,p),l=Uc(),i!==null&&!Kn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,sr(i,s,p)):(Xt&&l&&vc(s),s.flags|=1,Bn(i,s,d,p),s.child)}function dm(i,s,l,d,p){if(i===null){var _=l.type;return typeof _=="function"&&!dd(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,hm(i,s,_,d,p)):(i=Ll(l.type,null,d,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:Wa,l(T,d)&&i.ref===s.ref)return sr(i,s,p)}return s.flags|=1,i=Hr(_,d),i.ref=s.ref,i.return=s,s.child=i}function hm(i,s,l,d,p){if(i!==null){var _=i.memoizedProps;if(Wa(_,d)&&i.ref===s.ref)if(Kn=!1,s.pendingProps=d=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Kn=!0);else return s.lanes=i.lanes,sr(i,s,p)}return Wc(i,s,l,d,p)}function fm(i,s,l){var d=s.pendingProps,p=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Zs,oi),oi|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(Zs,oi),oi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,Gt(Zs,oi),oi|=d}else _!==null?(d=_.baseLanes|l,s.memoizedState=null):d=l,Gt(Zs,oi),oi|=d;return Bn(i,s,p,l),s.child}function pm(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Wc(i,s,l,d,p){var _=qn(l)?ss:Rn.current;return _=Gs(s,_),$s(s,p),l=Ic(i,s,l,d,_,p),d=Uc(),i!==null&&!Kn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,sr(i,s,p)):(Xt&&d&&vc(s),s.flags|=1,Bn(i,s,l,p),s.child)}function mm(i,s,l,d,p){if(qn(l)){var _=!0;nl(s)}else _=!1;if($s(s,p),s.stateNode===null)xl(i,s),im(s,l,d),Gc(s,l,d,p),d=!0;else if(i===null){var T=s.stateNode,B=s.memoizedProps;T.props=B;var j=T.context,oe=l.contextType;typeof oe=="object"&&oe!==null?oe=pi(oe):(oe=qn(l)?ss:Rn.current,oe=Gs(s,oe));var Re=l.getDerivedStateFromProps,Ce=typeof Re=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ce||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==d||j!==oe)&&rm(s,T,d,oe),Ur=!1;var Te=s.memoizedState;T.state=Te,dl(s,d,T,p),j=s.memoizedState,B!==d||Te!==j||Yn.current||Ur?(typeof Re=="function"&&(Bc(s,l,Re,d),j=s.memoizedState),(B=Ur||nm(s,l,B,d,Te,j,oe))?(Ce||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=j),T.props=d,T.state=j,T.context=oe,d=B):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{T=s.stateNode,Lp(i,s),B=s.memoizedProps,oe=s.type===s.elementType?B:Pi(s.type,B),T.props=oe,Ce=s.pendingProps,Te=T.context,j=l.contextType,typeof j=="object"&&j!==null?j=pi(j):(j=qn(l)?ss:Rn.current,j=Gs(s,j));var je=l.getDerivedStateFromProps;(Re=typeof je=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==Ce||Te!==j)&&rm(s,T,d,j),Ur=!1,Te=s.memoizedState,T.state=Te,dl(s,d,T,p);var Ze=s.memoizedState;B!==Ce||Te!==Ze||Yn.current||Ur?(typeof je=="function"&&(Bc(s,l,je,d),Ze=s.memoizedState),(oe=Ur||nm(s,l,oe,d,Te,Ze,j)||!1)?(Re||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,Ze,j),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,Ze,j)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===i.memoizedProps&&Te===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&Te===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=Ze),T.props=d,T.state=Ze,T.context=j,d=oe):(typeof T.componentDidUpdate!="function"||B===i.memoizedProps&&Te===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&Te===i.memoizedState||(s.flags|=1024),d=!1)}return jc(i,s,l,d,_,p)}function jc(i,s,l,d,p,_){pm(i,s);var T=(s.flags&128)!==0;if(!d&&!T)return p&&xp(s,l,!1),sr(i,s,_);d=s.stateNode,i0.current=s;var B=T&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&T?(s.child=js(s,i.child,null,_),s.child=js(s,null,B,_)):Bn(i,s,B,_),s.memoizedState=d.state,p&&xp(s,l,!0),s.child}function gm(i){var s=i.stateNode;s.pendingContext?_p(i,s.pendingContext,s.pendingContext!==s.context):s.context&&_p(i,s.context,!1),Rc(i,s.containerInfo)}function vm(i,s,l,d,p){return Ws(),Sc(p),s.flags|=256,Bn(i,s,l,d),s.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function $c(i){return{baseLanes:i,cachePool:null,transitions:null}}function _m(i,s,l){var d=s.pendingProps,p=Yt.current,_=!1,T=(s.flags&128)!==0,B;if((B=T)||(B=i!==null&&i.memoizedState===null?!1:(p&2)!==0),B?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Gt(Yt,p&1),i===null)return xc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=d.children,i=d.fallback,_?(d=s.mode,_=s.child,T={mode:"hidden",children:T},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Dl(T,d,0,null),i=ms(i,d,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=$c(l),s.memoizedState=Xc,i):Yc(s,T));if(p=i.memoizedState,p!==null&&(B=p.dehydrated,B!==null))return r0(i,s,T,d,B,p,l);if(_){_=d.fallback,T=s.mode,p=i.child,B=p.sibling;var j={mode:"hidden",children:d.children};return(T&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=j,s.deletions=null):(d=Hr(p,j),d.subtreeFlags=p.subtreeFlags&14680064),B!==null?_=Hr(B,_):(_=ms(_,T,l,null),_.flags|=2),_.return=s,d.return=s,d.sibling=_,s.child=d,d=_,_=s.child,T=i.child.memoizedState,T=T===null?$c(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~l,s.memoizedState=Xc,d}return _=i.child,i=_.sibling,d=Hr(_,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function Yc(i,s){return s=Dl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function yl(i,s,l,d){return d!==null&&Sc(d),js(s,i.child,null,l),i=Yc(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function r0(i,s,l,d,p,_,T){if(l)return s.flags&256?(s.flags&=-257,d=Hc(Error(t(422))),yl(i,s,T,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=d.fallback,p=s.mode,d=Dl({mode:"visible",children:d.children},p,0,null),_=ms(_,p,T,null),_.flags|=2,d.return=s,_.return=s,d.sibling=_,s.child=d,(s.mode&1)!==0&&js(s,i.child,null,T),s.child.memoizedState=$c(T),s.memoizedState=Xc,_);if((s.mode&1)===0)return yl(i,s,T,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var B=d.dgst;return d=B,_=Error(t(419)),d=Hc(_,d,void 0),yl(i,s,T,d)}if(B=(T&i.childLanes)!==0,Kn||B){if(d=_n,d!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ir(i,p),Ni(d,i,p,-1))}return cd(),d=Hc(Error(t(421))),yl(i,s,T,d)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=v0.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,ai=Lr(p.nextSibling),si=s,Xt=!0,Ci=null,i!==null&&(hi[fi++]=tr,hi[fi++]=nr,hi[fi++]=as,tr=i.id,nr=i.overflow,as=s),s=Yc(s,d.children),s.flags|=4096,s)}function ym(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),Tc(i.return,s,l)}function qc(i,s,l,d,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=p)}function xm(i,s,l){var d=s.pendingProps,p=d.revealOrder,_=d.tail;if(Bn(i,s,d.children,l),d=Yt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&ym(i,l,s);else if(i.tag===19)ym(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Gt(Yt,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&hl(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),qc(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&hl(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}qc(s,!0,l,null,_);break;case"together":qc(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function xl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function sr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ds|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Hr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Hr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function s0(i,s,l){switch(s.tag){case 3:gm(s),Ws();break;case 5:Ip(s);break;case 1:qn(s.type)&&nl(s);break;case 4:Rc(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;Gt(ll,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Gt(Yt,Yt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?_m(i,s,l):(Gt(Yt,Yt.current&1),i=sr(i,s,l),i!==null?i.sibling:null);Gt(Yt,Yt.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return xm(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt(Yt,Yt.current),d)break;return null;case 22:case 23:return s.lanes=0,fm(i,s,l)}return sr(i,s,l)}var Sm,Kc,Em,Mm;Sm=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Kc=function(){},Em=function(i,s,l,d){var p=i.memoizedProps;if(p!==d){i=s.stateNode,us(ji.current);var _=null;switch(l){case"input":p=V(i,p),d=V(i,d),_=[];break;case"select":p=ae({},p,{value:void 0}),d=ae({},d,{value:void 0}),_=[];break;case"textarea":p=b(i,p),d=b(i,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Jo)}xe(l,d);var T;l=null;for(oe in p)if(!d.hasOwnProperty(oe)&&p.hasOwnProperty(oe)&&p[oe]!=null)if(oe==="style"){var B=p[oe];for(T in B)B.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?_||(_=[]):(_=_||[]).push(oe,null));for(oe in d){var j=d[oe];if(B=p!=null?p[oe]:void 0,d.hasOwnProperty(oe)&&j!==B&&(j!=null||B!=null))if(oe==="style")if(B){for(T in B)!B.hasOwnProperty(T)||j&&j.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in j)j.hasOwnProperty(T)&&B[T]!==j[T]&&(l||(l={}),l[T]=j[T])}else l||(_||(_=[]),_.push(oe,l)),l=j;else oe==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,B=B?B.__html:void 0,j!=null&&B!==j&&(_=_||[]).push(oe,j)):oe==="children"?typeof j!="string"&&typeof j!="number"||(_=_||[]).push(oe,""+j):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(j!=null&&oe==="onScroll"&&Ht("scroll",i),_||B===j||(_=[])):(_=_||[]).push(oe,j))}l&&(_=_||[]).push("style",l);var oe=_;(s.updateQueue=oe)&&(s.flags|=4)}},Mm=function(i,s,l,d){l!==d&&(s.flags|=4)};function so(i,s){if(!Xt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Pn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function a0(i,s,l){var d=s.pendingProps;switch(_c(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(s),null;case 1:return qn(s.type)&&tl(),Pn(s),null;case 3:return d=s.stateNode,Ys(),Vt(Yn),Vt(Rn),Lc(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(al(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ci!==null&&(od(Ci),Ci=null))),Kc(i,s),Pn(s),null;case 5:Cc(s);var p=us(eo.current);if(l=s.type,i!==null&&s.stateNode!=null)Em(i,s,l,d,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Pn(s),null}if(i=us(ji.current),al(s)){d=s.stateNode,l=s.type;var _=s.memoizedProps;switch(d[Wi]=s,d[qa]=_,i=(s.mode&1)!==0,l){case"dialog":Ht("cancel",d),Ht("close",d);break;case"iframe":case"object":case"embed":Ht("load",d);break;case"video":case"audio":for(p=0;p<Xa.length;p++)Ht(Xa[p],d);break;case"source":Ht("error",d);break;case"img":case"image":case"link":Ht("error",d),Ht("load",d);break;case"details":Ht("toggle",d);break;case"input":Zt(d,_),Ht("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Ht("invalid",d);break;case"textarea":ne(d,_),Ht("invalid",d)}xe(l,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var B=_[T];T==="children"?typeof B=="string"?d.textContent!==B&&(_.suppressHydrationWarning!==!0&&Qo(d.textContent,B,i),p=["children",B]):typeof B=="number"&&d.textContent!==""+B&&(_.suppressHydrationWarning!==!0&&Qo(d.textContent,B,i),p=["children",""+B]):a.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&Ht("scroll",d)}switch(l){case"input":ft(d),tt(d,_,!0);break;case"textarea":ft(d),Me(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=Jo)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=ye(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=T.createElement(l,{is:d.is}):(i=T.createElement(l),l==="select"&&(T=i,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):i=T.createElementNS(i,l),i[Wi]=s,i[qa]=d,Sm(i,s,!1,!1),s.stateNode=i;e:{switch(T=we(l,d),l){case"dialog":Ht("cancel",i),Ht("close",i),p=d;break;case"iframe":case"object":case"embed":Ht("load",i),p=d;break;case"video":case"audio":for(p=0;p<Xa.length;p++)Ht(Xa[p],i);p=d;break;case"source":Ht("error",i),p=d;break;case"img":case"image":case"link":Ht("error",i),Ht("load",i),p=d;break;case"details":Ht("toggle",i),p=d;break;case"input":Zt(i,d),p=V(i,d),Ht("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=ae({},d,{value:void 0}),Ht("invalid",i);break;case"textarea":ne(i,d),p=b(i,d),Ht("invalid",i);break;default:p=d}xe(l,p),B=p;for(_ in B)if(B.hasOwnProperty(_)){var j=B[_];_==="style"?H(i,j):_==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&st(i,j)):_==="children"?typeof j=="string"?(l!=="textarea"||j!=="")&&rt(i,j):typeof j=="number"&&rt(i,""+j):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?j!=null&&_==="onScroll"&&Ht("scroll",i):j!=null&&L(i,_,j,T))}switch(l){case"input":ft(i),tt(i,d,!1);break;case"textarea":ft(i),Me(i);break;case"option":d.value!=null&&i.setAttribute("value",""+fe(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?F(i,!!d.multiple,_,!1):d.defaultValue!=null&&F(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Jo)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Pn(s),null;case 6:if(i&&s.stateNode!=null)Mm(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=us(eo.current),us(ji.current),al(s)){if(d=s.stateNode,l=s.memoizedProps,d[Wi]=s,(_=d.nodeValue!==l)&&(i=si,i!==null))switch(i.tag){case 3:Qo(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Qo(d.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Wi]=s,s.stateNode=d}return Pn(s),null;case 13:if(Vt(Yt),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Xt&&ai!==null&&(s.mode&1)!==0&&(s.flags&128)===0)bp(),Ws(),s.flags|=98560,_=!1;else if(_=al(s),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Wi]=s}else Ws(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Pn(s),_=!1}else Ci!==null&&(od(Ci),Ci=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Yt.current&1)!==0?cn===0&&(cn=3):cd())),s.updateQueue!==null&&(s.flags|=4),Pn(s),null);case 4:return Ys(),Kc(i,s),i===null&&$a(s.stateNode.containerInfo),Pn(s),null;case 10:return wc(s.type._context),Pn(s),null;case 17:return qn(s.type)&&tl(),Pn(s),null;case 19:if(Vt(Yt),_=s.memoizedState,_===null)return Pn(s),null;if(d=(s.flags&128)!==0,T=_.rendering,T===null)if(d)so(_,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(T=hl(i),T!==null){for(s.flags|=128,so(_,!1),d=T.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)_=l,i=d,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Gt(Yt,Yt.current&1|2),s.child}i=i.sibling}_.tail!==null&&J()>Qs&&(s.flags|=128,d=!0,so(_,!1),s.lanes=4194304)}else{if(!d)if(i=hl(T),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),so(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Xt)return Pn(s),null}else 2*J()-_.renderingStartTime>Qs&&l!==1073741824&&(s.flags|=128,d=!0,so(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(l=_.last,l!==null?l.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=J(),s.sibling=null,l=Yt.current,Gt(Yt,d?l&1|2:l&1),s):(Pn(s),null);case 22:case 23:return ud(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(oi&1073741824)!==0&&(Pn(s),s.subtreeFlags&6&&(s.flags|=8192)):Pn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function o0(i,s){switch(_c(s),s.tag){case 1:return qn(s.type)&&tl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ys(),Vt(Yn),Vt(Rn),Lc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Cc(s),null;case 13:if(Vt(Yt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ws()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Vt(Yt),null;case 4:return Ys(),null;case 10:return wc(s.type._context),null;case 22:case 23:return ud(),null;case 24:return null;default:return null}}var Sl=!1,Ln=!1,l0=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Ks(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){tn(i,s,d)}else l.current=null}function Zc(i,s,l){try{l()}catch(d){tn(i,s,d)}}var wm=!1;function u0(i,s){if(uc=Go,i=np(),tc(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,B=-1,j=-1,oe=0,Re=0,Ce=i,Te=null;t:for(;;){for(var je;Ce!==l||p!==0&&Ce.nodeType!==3||(B=T+p),Ce!==_||d!==0&&Ce.nodeType!==3||(j=T+d),Ce.nodeType===3&&(T+=Ce.nodeValue.length),(je=Ce.firstChild)!==null;)Te=Ce,Ce=je;for(;;){if(Ce===i)break t;if(Te===l&&++oe===p&&(B=T),Te===_&&++Re===d&&(j=T),(je=Ce.nextSibling)!==null)break;Ce=Te,Te=Ce.parentNode}Ce=je}l=B===-1||j===-1?null:{start:B,end:j}}else l=null}l=l||{start:0,end:0}}else l=null;for(cc={focusedElem:i,selectionRange:l},Go=!1,$e=s;$e!==null;)if(s=$e,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,$e=i;else for(;$e!==null;){s=$e;try{var Ze=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var et=Ze.memoizedProps,nn=Ze.memoizedState,Q=s.stateNode,$=Q.getSnapshotBeforeUpdate(s.elementType===s.type?et:Pi(s.type,et),nn);Q.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var ie=s.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){tn(s,s.return,Le)}if(i=s.sibling,i!==null){i.return=s.return,$e=i;break}$e=s.return}return Ze=wm,wm=!1,Ze}function ao(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Zc(s,l,_)}p=p.next}while(p!==d)}}function El(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Qc(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Tm(i){var s=i.alternate;s!==null&&(i.alternate=null,Tm(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Wi],delete s[qa],delete s[pc],delete s[jy],delete s[Xy])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function bm(i){return i.tag===5||i.tag===3||i.tag===4}function Am(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||bm(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Jc(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Jo));else if(d!==4&&(i=i.child,i!==null))for(Jc(i,s,l),i=i.sibling;i!==null;)Jc(i,s,l),i=i.sibling}function ed(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(ed(i,s,l),i=i.sibling;i!==null;)ed(i,s,l),i=i.sibling}var En=null,Li=!1;function kr(i,s,l){for(l=l.child;l!==null;)Rm(i,s,l),l=l.sibling}function Rm(i,s,l){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(dt,l)}catch{}switch(l.tag){case 5:Ln||Ks(l,s);case 6:var d=En,p=Li;En=null,kr(i,s,l),En=d,Li=p,En!==null&&(Li?(i=En,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):En.removeChild(l.stateNode));break;case 18:En!==null&&(Li?(i=En,l=l.stateNode,i.nodeType===8?fc(i.parentNode,l):i.nodeType===1&&fc(i,l),Oa(i)):fc(En,l.stateNode));break;case 4:d=En,p=Li,En=l.stateNode.containerInfo,Li=!0,kr(i,s,l),En=d,Li=p;break;case 0:case 11:case 14:case 15:if(!Ln&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&Zc(l,s,T),p=p.next}while(p!==d)}kr(i,s,l);break;case 1:if(!Ln&&(Ks(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(B){tn(l,s,B)}kr(i,s,l);break;case 21:kr(i,s,l);break;case 22:l.mode&1?(Ln=(d=Ln)||l.memoizedState!==null,kr(i,s,l),Ln=d):kr(i,s,l);break;default:kr(i,s,l)}}function Cm(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new l0),s.forEach(function(d){var p=_0.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function Di(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var _=i,T=s,B=T;e:for(;B!==null;){switch(B.tag){case 5:En=B.stateNode,Li=!1;break e;case 3:En=B.stateNode.containerInfo,Li=!0;break e;case 4:En=B.stateNode.containerInfo,Li=!0;break e}B=B.return}if(En===null)throw Error(t(160));Rm(_,T,p),En=null,Li=!1;var j=p.alternate;j!==null&&(j.return=null),p.return=null}catch(oe){tn(p,s,oe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Pm(s,i),s=s.sibling}function Pm(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Di(s,i),$i(i),d&4){try{ao(3,i,i.return),El(3,i)}catch(et){tn(i,i.return,et)}try{ao(5,i,i.return)}catch(et){tn(i,i.return,et)}}break;case 1:Di(s,i),$i(i),d&512&&l!==null&&Ks(l,l.return);break;case 5:if(Di(s,i),$i(i),d&512&&l!==null&&Ks(l,l.return),i.flags&32){var p=i.stateNode;try{rt(p,"")}catch(et){tn(i,i.return,et)}}if(d&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,T=l!==null?l.memoizedProps:_,B=i.type,j=i.updateQueue;if(i.updateQueue=null,j!==null)try{B==="input"&&_.type==="radio"&&_.name!=null&&_t(p,_),we(B,T);var oe=we(B,_);for(T=0;T<j.length;T+=2){var Re=j[T],Ce=j[T+1];Re==="style"?H(p,Ce):Re==="dangerouslySetInnerHTML"?st(p,Ce):Re==="children"?rt(p,Ce):L(p,Re,Ce,oe)}switch(B){case"input":Ge(p,_);break;case"textarea":Se(p,_);break;case"select":var Te=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var je=_.value;je!=null?F(p,!!_.multiple,je,!1):Te!==!!_.multiple&&(_.defaultValue!=null?F(p,!!_.multiple,_.defaultValue,!0):F(p,!!_.multiple,_.multiple?[]:"",!1))}p[qa]=_}catch(et){tn(i,i.return,et)}}break;case 6:if(Di(s,i),$i(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(et){tn(i,i.return,et)}}break;case 3:if(Di(s,i),$i(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Oa(s.containerInfo)}catch(et){tn(i,i.return,et)}break;case 4:Di(s,i),$i(i);break;case 13:Di(s,i),$i(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(id=J())),d&4&&Cm(i);break;case 22:if(Re=l!==null&&l.memoizedState!==null,i.mode&1?(Ln=(oe=Ln)||Re,Di(s,i),Ln=oe):Di(s,i),$i(i),d&8192){if(oe=i.memoizedState!==null,(i.stateNode.isHidden=oe)&&!Re&&(i.mode&1)!==0)for($e=i,Re=i.child;Re!==null;){for(Ce=$e=Re;$e!==null;){switch(Te=$e,je=Te.child,Te.tag){case 0:case 11:case 14:case 15:ao(4,Te,Te.return);break;case 1:Ks(Te,Te.return);var Ze=Te.stateNode;if(typeof Ze.componentWillUnmount=="function"){d=Te,l=Te.return;try{s=d,Ze.props=s.memoizedProps,Ze.state=s.memoizedState,Ze.componentWillUnmount()}catch(et){tn(d,l,et)}}break;case 5:Ks(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Nm(Ce);continue}}je!==null?(je.return=Te,$e=je):Nm(Ce)}Re=Re.sibling}e:for(Re=null,Ce=i;;){if(Ce.tag===5){if(Re===null){Re=Ce;try{p=Ce.stateNode,oe?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(B=Ce.stateNode,j=Ce.memoizedProps.style,T=j!=null&&j.hasOwnProperty("display")?j.display:null,B.style.display=at("display",T))}catch(et){tn(i,i.return,et)}}}else if(Ce.tag===6){if(Re===null)try{Ce.stateNode.nodeValue=oe?"":Ce.memoizedProps}catch(et){tn(i,i.return,et)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===i)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===i)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===i)break e;Re===Ce&&(Re=null),Ce=Ce.return}Re===Ce&&(Re=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Di(s,i),$i(i),d&4&&Cm(i);break;case 21:break;default:Di(s,i),$i(i)}}function $i(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(bm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(rt(p,""),d.flags&=-33);var _=Am(i);ed(i,_,p);break;case 3:case 4:var T=d.stateNode.containerInfo,B=Am(i);Jc(i,B,T);break;default:throw Error(t(161))}}catch(j){tn(i,i.return,j)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function c0(i,s,l){$e=i,Lm(i)}function Lm(i,s,l){for(var d=(i.mode&1)!==0;$e!==null;){var p=$e,_=p.child;if(p.tag===22&&d){var T=p.memoizedState!==null||Sl;if(!T){var B=p.alternate,j=B!==null&&B.memoizedState!==null||Ln;B=Sl;var oe=Ln;if(Sl=T,(Ln=j)&&!oe)for($e=p;$e!==null;)T=$e,j=T.child,T.tag===22&&T.memoizedState!==null?Im(p):j!==null?(j.return=T,$e=j):Im(p);for(;_!==null;)$e=_,Lm(_),_=_.sibling;$e=p,Sl=B,Ln=oe}Dm(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,$e=_):Dm(i)}}function Dm(i){for(;$e!==null;){var s=$e;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ln||El(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Ln)if(l===null)d.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Pi(s.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Np(s,_,d);break;case 3:var T=s.updateQueue;if(T!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Np(s,T,l)}break;case 5:var B=s.stateNode;if(l===null&&s.flags&4){l=B;var j=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&l.focus();break;case"img":j.src&&(l.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var oe=s.alternate;if(oe!==null){var Re=oe.memoizedState;if(Re!==null){var Ce=Re.dehydrated;Ce!==null&&Oa(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||s.flags&512&&Qc(s)}catch(Te){tn(s,s.return,Te)}}if(s===i){$e=null;break}if(l=s.sibling,l!==null){l.return=s.return,$e=l;break}$e=s.return}}function Nm(i){for(;$e!==null;){var s=$e;if(s===i){$e=null;break}var l=s.sibling;if(l!==null){l.return=s.return,$e=l;break}$e=s.return}}function Im(i){for(;$e!==null;){var s=$e;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{El(4,s)}catch(j){tn(s,l,j)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch(j){tn(s,p,j)}}var _=s.return;try{Qc(s)}catch(j){tn(s,_,j)}break;case 5:var T=s.return;try{Qc(s)}catch(j){tn(s,T,j)}}}catch(j){tn(s,s.return,j)}if(s===i){$e=null;break}var B=s.sibling;if(B!==null){B.return=s.return,$e=B;break}$e=s.return}}var d0=Math.ceil,Ml=w.ReactCurrentDispatcher,td=w.ReactCurrentOwner,gi=w.ReactCurrentBatchConfig,Dt=0,_n=null,on=null,Mn=0,oi=0,Zs=Dr(0),cn=0,oo=null,ds=0,wl=0,nd=0,lo=null,Zn=null,id=0,Qs=1/0,ar=null,Tl=!1,rd=null,Or=null,bl=!1,zr=null,Al=0,uo=0,sd=null,Rl=-1,Cl=0;function Gn(){return(Dt&6)!==0?J():Rl!==-1?Rl:Rl=J()}function Br(i){return(i.mode&1)===0?1:(Dt&2)!==0&&Mn!==0?Mn&-Mn:Yy.transition!==null?(Cl===0&&(Cl=Bt()),Cl):(i=Lt,i!==0||(i=window.event,i=i===void 0?16:Ff(i.type)),i)}function Ni(i,s,l,d){if(50<uo)throw uo=0,sd=null,Error(t(185));mn(i,l,d),((Dt&2)===0||i!==_n)&&(i===_n&&((Dt&2)===0&&(wl|=l),cn===4&&Gr(i,Mn)),Qn(i,d),l===1&&Dt===0&&(s.mode&1)===0&&(Qs=J()+500,il&&Ir()))}function Qn(i,s){var l=i.callbackNode;zn(i,s);var d=bn(i,i===_n?Mn:0);if(d===0)l!==null&&C(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&C(l),s===1)i.tag===0?$y(Fm.bind(null,i)):Sp(Fm.bind(null,i)),Vy(function(){(Dt&6)===0&&Ir()}),l=null;else{switch(Vi(d)){case 1:l=Pe;break;case 4:l=ze;break;case 16:l=We;break;case 536870912:l=mt;break;default:l=We}l=Wm(l,Um.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Um(i,s){if(Rl=-1,Cl=0,(Dt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Js()&&i.callbackNode!==l)return null;var d=bn(i,i===_n?Mn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=Pl(i,d);else{s=d;var p=Dt;Dt|=2;var _=Om();(_n!==i||Mn!==s)&&(ar=null,Qs=J()+500,fs(i,s));do try{p0();break}catch(B){km(i,B)}while(!0);Mc(),Ml.current=_,Dt=p,on!==null?s=0:(_n=null,Mn=0,s=cn)}if(s!==0){if(s===2&&(p=Qi(i),p!==0&&(d=p,s=ad(i,p))),s===1)throw l=oo,fs(i,0),Gr(i,d),Qn(i,J()),l;if(s===6)Gr(i,d);else{if(p=i.current.alternate,(d&30)===0&&!h0(p)&&(s=Pl(i,d),s===2&&(_=Qi(i),_!==0&&(d=_,s=ad(i,_))),s===1))throw l=oo,fs(i,0),Gr(i,d),Qn(i,J()),l;switch(i.finishedWork=p,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:ps(i,Zn,ar);break;case 3:if(Gr(i,d),(d&130023424)===d&&(s=id+500-J(),10<s)){if(bn(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){Gn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=hc(ps.bind(null,i,Zn,ar),s);break}ps(i,Zn,ar);break;case 4:if(Gr(i,d),(d&4194240)===d)break;for(s=i.eventTimes,p=-1;0<d;){var T=31-yt(d);_=1<<T,T=s[T],T>p&&(p=T),d&=~_}if(d=p,d=J()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*d0(d/1960))-d,10<d){i.timeoutHandle=hc(ps.bind(null,i,Zn,ar),d);break}ps(i,Zn,ar);break;case 5:ps(i,Zn,ar);break;default:throw Error(t(329))}}}return Qn(i,J()),i.callbackNode===l?Um.bind(null,i):null}function ad(i,s){var l=lo;return i.current.memoizedState.isDehydrated&&(fs(i,s).flags|=256),i=Pl(i,s),i!==2&&(s=Zn,Zn=l,s!==null&&od(s)),i}function od(i){Zn===null?Zn=i:Zn.push.apply(Zn,i)}function h0(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],_=p.getSnapshot;p=p.value;try{if(!Ri(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Gr(i,s){for(s&=~nd,s&=~wl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-yt(s),d=1<<l;i[l]=-1,s&=~d}}function Fm(i){if((Dt&6)!==0)throw Error(t(327));Js();var s=bn(i,0);if((s&1)===0)return Qn(i,J()),null;var l=Pl(i,s);if(i.tag!==0&&l===2){var d=Qi(i);d!==0&&(s=d,l=ad(i,d))}if(l===1)throw l=oo,fs(i,0),Gr(i,s),Qn(i,J()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ps(i,Zn,ar),Qn(i,J()),null}function ld(i,s){var l=Dt;Dt|=1;try{return i(s)}finally{Dt=l,Dt===0&&(Qs=J()+500,il&&Ir())}}function hs(i){zr!==null&&zr.tag===0&&(Dt&6)===0&&Js();var s=Dt;Dt|=1;var l=gi.transition,d=Lt;try{if(gi.transition=null,Lt=1,i)return i()}finally{Lt=d,gi.transition=l,Dt=s,(Dt&6)===0&&Ir()}}function ud(){oi=Zs.current,Vt(Zs)}function fs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,Hy(l)),on!==null)for(l=on.return;l!==null;){var d=l;switch(_c(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&tl();break;case 3:Ys(),Vt(Yn),Vt(Rn),Lc();break;case 5:Cc(d);break;case 4:Ys();break;case 13:Vt(Yt);break;case 19:Vt(Yt);break;case 10:wc(d.type._context);break;case 22:case 23:ud()}l=l.return}if(_n=i,on=i=Hr(i.current,null),Mn=oi=s,cn=0,oo=null,nd=wl=ds=0,Zn=lo=null,ls!==null){for(s=0;s<ls.length;s++)if(l=ls[s],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,_=l.pending;if(_!==null){var T=_.next;_.next=p,d.next=T}l.pending=d}ls=null}return i}function km(i,s){do{var l=on;try{if(Mc(),fl.current=vl,pl){for(var d=qt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}pl=!1}if(cs=0,vn=un=qt=null,to=!1,no=0,td.current=null,l===null||l.return===null){cn=1,oo=s,on=null;break}e:{var _=i,T=l.return,B=l,j=s;if(s=Mn,B.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var oe=j,Re=B,Ce=Re.tag;if((Re.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Te=Re.alternate;Te?(Re.updateQueue=Te.updateQueue,Re.memoizedState=Te.memoizedState,Re.lanes=Te.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var je=lm(T);if(je!==null){je.flags&=-257,um(je,T,B,_,s),je.mode&1&&om(_,oe,s),s=je,j=oe;var Ze=s.updateQueue;if(Ze===null){var et=new Set;et.add(j),s.updateQueue=et}else Ze.add(j);break e}else{if((s&1)===0){om(_,oe,s),cd();break e}j=Error(t(426))}}else if(Xt&&B.mode&1){var nn=lm(T);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),um(nn,T,B,_,s),Sc(qs(j,B));break e}}_=j=qs(j,B),cn!==4&&(cn=2),lo===null?lo=[_]:lo.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Q=sm(_,j,s);Dp(_,Q);break e;case 1:B=j;var $=_.type,ie=_.stateNode;if((_.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Or===null||!Or.has(ie)))){_.flags|=65536,s&=-s,_.lanes|=s;var Le=am(_,B,s);Dp(_,Le);break e}}_=_.return}while(_!==null)}Bm(l)}catch(it){s=it,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function Om(){var i=Ml.current;return Ml.current=vl,i===null?vl:i}function cd(){(cn===0||cn===3||cn===2)&&(cn=4),_n===null||(ds&268435455)===0&&(wl&268435455)===0||Gr(_n,Mn)}function Pl(i,s){var l=Dt;Dt|=2;var d=Om();(_n!==i||Mn!==s)&&(ar=null,fs(i,s));do try{f0();break}catch(p){km(i,p)}while(!0);if(Mc(),Dt=l,Ml.current=d,on!==null)throw Error(t(261));return _n=null,Mn=0,cn}function f0(){for(;on!==null;)zm(on)}function p0(){for(;on!==null&&!q();)zm(on)}function zm(i){var s=Vm(i.alternate,i,oi);i.memoizedProps=i.pendingProps,s===null?Bm(i):on=s,td.current=null}function Bm(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=a0(l,s,oi),l!==null){on=l;return}}else{if(l=o0(l,s),l!==null){l.flags&=32767,on=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,on=null;return}}if(s=s.sibling,s!==null){on=s;return}on=s=i}while(s!==null);cn===0&&(cn=5)}function ps(i,s,l){var d=Lt,p=gi.transition;try{gi.transition=null,Lt=1,m0(i,s,l,d)}finally{gi.transition=p,Lt=d}return null}function m0(i,s,l,d){do Js();while(zr!==null);if((Dt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Sn(i,_),i===_n&&(on=_n=null,Mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||bl||(bl=!0,Wm(We,function(){return Js(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=gi.transition,gi.transition=null;var T=Lt;Lt=1;var B=Dt;Dt|=4,td.current=null,u0(i,l),Pm(l,i),Uy(cc),Go=!!uc,cc=uc=null,i.current=l,c0(l),ce(),Dt=B,Lt=T,gi.transition=_}else i.current=l;if(bl&&(bl=!1,zr=i,Al=p),_=i.pendingLanes,_===0&&(Or=null),Tt(l.stateNode),Qn(i,J()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(Tl)throw Tl=!1,i=rd,rd=null,i;return(Al&1)!==0&&i.tag!==0&&Js(),_=i.pendingLanes,(_&1)!==0?i===sd?uo++:(uo=0,sd=i):uo=0,Ir(),null}function Js(){if(zr!==null){var i=Vi(Al),s=gi.transition,l=Lt;try{if(gi.transition=null,Lt=16>i?16:i,zr===null)var d=!1;else{if(i=zr,zr=null,Al=0,(Dt&6)!==0)throw Error(t(331));var p=Dt;for(Dt|=4,$e=i.current;$e!==null;){var _=$e,T=_.child;if(($e.flags&16)!==0){var B=_.deletions;if(B!==null){for(var j=0;j<B.length;j++){var oe=B[j];for($e=oe;$e!==null;){var Re=$e;switch(Re.tag){case 0:case 11:case 15:ao(8,Re,_)}var Ce=Re.child;if(Ce!==null)Ce.return=Re,$e=Ce;else for(;$e!==null;){Re=$e;var Te=Re.sibling,je=Re.return;if(Tm(Re),Re===oe){$e=null;break}if(Te!==null){Te.return=je,$e=Te;break}$e=je}}}var Ze=_.alternate;if(Ze!==null){var et=Ze.child;if(et!==null){Ze.child=null;do{var nn=et.sibling;et.sibling=null,et=nn}while(et!==null)}}$e=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,$e=T;else e:for(;$e!==null;){if(_=$e,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ao(9,_,_.return)}var Q=_.sibling;if(Q!==null){Q.return=_.return,$e=Q;break e}$e=_.return}}var $=i.current;for($e=$;$e!==null;){T=$e;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,$e=ie;else e:for(T=$;$e!==null;){if(B=$e,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:El(9,B)}}catch(it){tn(B,B.return,it)}if(B===T){$e=null;break e}var Le=B.sibling;if(Le!==null){Le.return=B.return,$e=Le;break e}$e=B.return}}if(Dt=p,Ir(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(dt,i)}catch{}d=!0}return d}finally{Lt=l,gi.transition=s}}return!1}function Gm(i,s,l){s=qs(l,s),s=sm(i,s,1),i=Fr(i,s,1),s=Gn(),i!==null&&(mn(i,1,s),Qn(i,s))}function tn(i,s,l){if(i.tag===3)Gm(i,i,l);else for(;s!==null;){if(s.tag===3){Gm(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Or===null||!Or.has(d))){i=qs(l,i),i=am(s,i,1),s=Fr(s,i,1),i=Gn(),s!==null&&(mn(s,1,i),Qn(s,i));break}}s=s.return}}function g0(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=Gn(),i.pingedLanes|=i.suspendedLanes&l,_n===i&&(Mn&l)===l&&(cn===4||cn===3&&(Mn&130023424)===Mn&&500>J()-id?fs(i,0):nd|=l),Qn(i,s)}function Hm(i,s){s===0&&((i.mode&1)===0?s=1:(s=en,en<<=1,(en&130023424)===0&&(en=4194304)));var l=Gn();i=ir(i,s),i!==null&&(mn(i,s,l),Qn(i,l))}function v0(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Hm(i,l)}function _0(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Hm(i,l)}var Vm;Vm=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Yn.current)Kn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Kn=!1,s0(i,s,l);Kn=(i.flags&131072)!==0}else Kn=!1,Xt&&(s.flags&1048576)!==0&&Ep(s,sl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;xl(i,s),i=s.pendingProps;var p=Gs(s,Rn.current);$s(s,l),p=Ic(null,s,d,i,p,l);var _=Uc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,qn(d)?(_=!0,nl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Ac(s),p.updater=_l,s.stateNode=p,p._reactInternals=s,Gc(s,d,i,l),s=jc(null,s,d,!0,_,l)):(s.tag=0,Xt&&_&&vc(s),Bn(null,s,p,l),s=s.child),s;case 16:d=s.elementType;e:{switch(xl(i,s),i=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=x0(d),i=Pi(d,i),p){case 0:s=Wc(null,s,d,i,l);break e;case 1:s=mm(null,s,d,i,l);break e;case 11:s=cm(null,s,d,i,l);break e;case 14:s=dm(null,s,d,Pi(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Pi(d,p),Wc(i,s,d,p,l);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Pi(d,p),mm(i,s,d,p,l);case 3:e:{if(gm(s),i===null)throw Error(t(387));d=s.pendingProps,_=s.memoizedState,p=_.element,Lp(i,s),dl(s,d,null,l);var T=s.memoizedState;if(d=T.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=qs(Error(t(423)),s),s=vm(i,s,d,l,p);break e}else if(d!==p){p=qs(Error(t(424)),s),s=vm(i,s,d,l,p);break e}else for(ai=Lr(s.stateNode.containerInfo.firstChild),si=s,Xt=!0,Ci=null,l=Cp(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ws(),d===p){s=sr(i,s,l);break e}Bn(i,s,d,l)}s=s.child}return s;case 5:return Ip(s),i===null&&xc(s),d=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,T=p.children,dc(d,p)?T=null:_!==null&&dc(d,_)&&(s.flags|=32),pm(i,s),Bn(i,s,T,l),s.child;case 6:return i===null&&xc(s),null;case 13:return _m(i,s,l);case 4:return Rc(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=js(s,null,d,l):Bn(i,s,d,l),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Pi(d,p),cm(i,s,d,p,l);case 7:return Bn(i,s,s.pendingProps,l),s.child;case 8:return Bn(i,s,s.pendingProps.children,l),s.child;case 12:return Bn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,_=s.memoizedProps,T=p.value,Gt(ll,d._currentValue),d._currentValue=T,_!==null)if(Ri(_.value,T)){if(_.children===p.children&&!Yn.current){s=sr(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var B=_.dependencies;if(B!==null){T=_.child;for(var j=B.firstContext;j!==null;){if(j.context===d){if(_.tag===1){j=rr(-1,l&-l),j.tag=2;var oe=_.updateQueue;if(oe!==null){oe=oe.shared;var Re=oe.pending;Re===null?j.next=j:(j.next=Re.next,Re.next=j),oe.pending=j}}_.lanes|=l,j=_.alternate,j!==null&&(j.lanes|=l),Tc(_.return,l,s),B.lanes|=l;break}j=j.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,B=T.alternate,B!==null&&(B.lanes|=l),Tc(T,l,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Bn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,$s(s,l),p=pi(p),d=d(p),s.flags|=1,Bn(i,s,d,l),s.child;case 14:return d=s.type,p=Pi(d,s.pendingProps),p=Pi(d.type,p),dm(i,s,d,p,l);case 15:return hm(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Pi(d,p),xl(i,s),s.tag=1,qn(d)?(i=!0,nl(s)):i=!1,$s(s,l),im(s,d,p),Gc(s,d,p,l),jc(null,s,d,!0,i,l);case 19:return xm(i,s,l);case 22:return fm(i,s,l)}throw Error(t(156,s.tag))};function Wm(i,s){return is(i,s)}function y0(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(i,s,l,d){return new y0(i,s,l,d)}function dd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function x0(i){if(typeof i=="function")return dd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===k)return 11;if(i===pe)return 14}return 2}function Hr(i,s){var l=i.alternate;return l===null?(l=vi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Ll(i,s,l,d,p,_){var T=2;if(d=i,typeof i=="function")dd(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case D:return ms(l.children,p,_,s);case O:T=8,p|=8;break;case R:return i=vi(12,l,s,p|2),i.elementType=R,i.lanes=_,i;case Y:return i=vi(13,l,s,p),i.elementType=Y,i.lanes=_,i;case se:return i=vi(19,l,s,p),i.elementType=se,i.lanes=_,i;case de:return Dl(l,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case A:T=10;break e;case z:T=9;break e;case k:T=11;break e;case pe:T=14;break e;case ee:T=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=vi(T,l,s,p),s.elementType=i,s.type=d,s.lanes=_,s}function ms(i,s,l,d){return i=vi(7,i,d,s),i.lanes=l,i}function Dl(i,s,l,d){return i=vi(22,i,d,s),i.elementType=de,i.lanes=l,i.stateNode={isHidden:!1},i}function hd(i,s,l){return i=vi(6,i,null,s),i.lanes=l,i}function fd(i,s,l){return s=vi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function S0(i,s,l,d,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=An(0),this.expirationTimes=An(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function pd(i,s,l,d,p,_,T,B,j){return i=new S0(i,s,l,B,j),s===1?(s=1,_===!0&&(s|=8)):s=0,_=vi(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(_),i}function E0(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function jm(i){if(!i)return Nr;i=i._reactInternals;e:{if(Tn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(qn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(qn(l))return yp(i,l,s)}return s}function Xm(i,s,l,d,p,_,T,B,j){return i=pd(l,d,!0,i,p,_,T,B,j),i.context=jm(null),l=i.current,d=Gn(),p=Br(l),_=rr(d,p),_.callback=s??null,Fr(l,_,p),i.current.lanes=p,mn(i,p,d),Qn(i,d),i}function Nl(i,s,l,d){var p=s.current,_=Gn(),T=Br(p);return l=jm(l),s.context===null?s.context=l:s.pendingContext=l,s=rr(_,T),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Fr(p,s,T),i!==null&&(Ni(i,p,T,_),cl(i,p,T)),T}function Il(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function $m(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function md(i,s){$m(i,s),(i=i.alternate)&&$m(i,s)}function M0(){return null}var Ym=typeof reportError=="function"?reportError:function(i){console.error(i)};function gd(i){this._internalRoot=i}Ul.prototype.render=gd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Nl(i,s,null,null)},Ul.prototype.unmount=gd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;hs(function(){Nl(null,i,null,null)}),s[Ji]=null}};function Ul(i){this._internalRoot=i}Ul.prototype.unstable_scheduleHydration=function(i){if(i){var s=Lf();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Rr.length&&s!==0&&s<Rr[l].priority;l++);Rr.splice(l,0,i),l===0&&If(i)}};function vd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Fl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function qm(){}function w0(i,s,l,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var oe=Il(T);_.call(oe)}}var T=Xm(s,d,i,0,null,!1,!1,"",qm);return i._reactRootContainer=T,i[Ji]=T.current,$a(i.nodeType===8?i.parentNode:i),hs(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var B=d;d=function(){var oe=Il(j);B.call(oe)}}var j=pd(i,0,!1,null,null,!1,!1,"",qm);return i._reactRootContainer=j,i[Ji]=j.current,$a(i.nodeType===8?i.parentNode:i),hs(function(){Nl(s,j,l,d)}),j}function kl(i,s,l,d,p){var _=l._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var B=p;p=function(){var j=Il(T);B.call(j)}}Nl(s,T,i,p)}else T=w0(l,s,i,p,d);return Il(T)}Cf=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=wt(s.pendingLanes);l!==0&&(gn(s,l|1),Qn(s,J()),(Dt&6)===0&&(Qs=J()+500,Ir()))}break;case 13:hs(function(){var d=ir(i,1);if(d!==null){var p=Gn();Ni(d,i,1,p)}}),md(i,1)}},Hu=function(i){if(i.tag===13){var s=ir(i,134217728);if(s!==null){var l=Gn();Ni(s,i,134217728,l)}md(i,134217728)}},Pf=function(i){if(i.tag===13){var s=Br(i),l=ir(i,s);if(l!==null){var d=Gn();Ni(l,i,s,d)}md(i,s)}},Lf=function(){return Lt},Df=function(i,s){var l=Lt;try{return Lt=i,s()}finally{Lt=l}},De=function(i,s,l){switch(s){case"input":if(Ge(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var p=el(d);if(!p)throw Error(t(90));Pt(d),Ge(d,p)}}}break;case"textarea":Se(i,l);break;case"select":s=l.value,s!=null&&F(i,!!l.multiple,s,!1)}},Mt=ld,Ft=hs;var T0={usingClientEntryPoint:!1,Events:[Ka,zs,el,Ne,lt,ld]},co={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b0={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=pn(i),i===null?null:i.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||M0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{dt=Ol.inject(b0),Qe=Ol}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T0,Jn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(s))throw Error(t(200));return E0(i,s,null,l)},Jn.createRoot=function(i,s){if(!vd(i))throw Error(t(299));var l=!1,d="",p=Ym;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=pd(i,1,!1,null,null,l,!1,d,p),i[Ji]=s.current,$a(i.nodeType===8?i.parentNode:i),new gd(s)},Jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=pn(s),i=i===null?null:i.stateNode,i},Jn.flushSync=function(i){return hs(i)},Jn.hydrate=function(i,s,l){if(!Fl(s))throw Error(t(200));return kl(null,i,s,!0,l)},Jn.hydrateRoot=function(i,s,l){if(!vd(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,_="",T=Ym;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),s=Xm(s,null,i,1,l??null,p,!1,_,T),i[Ji]=s.current,$a(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Ul(s)},Jn.render=function(i,s,l){if(!Fl(s))throw Error(t(200));return kl(null,i,s,!1,l)},Jn.unmountComponentAtNode=function(i){if(!Fl(i))throw Error(t(40));return i._reactRootContainer?(hs(function(){kl(null,null,i,!1,function(){i._reactRootContainer=null,i[Ji]=null})}),!0):!1},Jn.unstable_batchedUpdates=ld,Jn.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!Fl(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return kl(i,s,l,!1,d)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var ig;function U0(){if(ig)return xd.exports;ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xd.exports=I0(),xd.exports}var rg;function F0(){if(rg)return zl;rg=1;var r=U0();return zl.createRoot=r.createRoot,zl.hydrateRoot=r.hydrateRoot,zl}var k0=F0();const O0=lf(k0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cf="176",z0=0,sg=1,B0=2,Fv=1,G0=2,hr=3,ts=0,ti=1,pr=2,Qr=0,_a=1,ag=2,og=3,lg=4,H0=5,bs=100,V0=101,W0=102,j0=103,X0=104,$0=200,Y0=201,q0=202,K0=203,hh=204,fh=205,Z0=206,Q0=207,J0=208,ex=209,tx=210,nx=211,ix=212,rx=213,sx=214,ph=0,mh=1,gh=2,Sa=3,vh=4,_h=5,yh=6,xh=7,kv=0,ax=1,ox=2,Jr=0,lx=1,ux=2,cx=3,dx=4,hx=5,fx=6,px=7,Ov=300,Ea=301,Ma=302,Sh=303,Eh=304,Fu=306,Mh=1e3,Rs=1001,wh=1002,Hi=1003,mx=1004,Bl=1005,qi=1006,Md=1007,Cs=1008,Sr=1009,zv=1010,Bv=1011,Ro=1012,df=1013,Ps=1014,gr=1015,Do=1016,hf=1017,ff=1018,Co=1020,Gv=35902,Hv=1021,Vv=1022,Gi=1023,Po=1026,Lo=1027,Wv=1028,pf=1029,jv=1030,mf=1031,gf=1033,Eu=33776,Mu=33777,wu=33778,Tu=33779,Th=35840,bh=35841,Ah=35842,Rh=35843,Ch=36196,Ph=37492,Lh=37496,Dh=37808,Nh=37809,Ih=37810,Uh=37811,Fh=37812,kh=37813,Oh=37814,zh=37815,Bh=37816,Gh=37817,Hh=37818,Vh=37819,Wh=37820,jh=37821,bu=36492,Xh=36494,$h=36495,Xv=36283,Yh=36284,qh=36285,Kh=36286,gx=3200,vx=3201,_x=0,yx=1,Zr="",Si="srgb",wa="srgb-linear",Lu="linear",kt="srgb",ea=7680,ug=519,xx=512,Sx=513,Ex=514,$v=515,Mx=516,wx=517,Tx=518,bx=519,cg=35044,dg="300 es",vr=2e3,Du=2001;class Ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=Math.PI/180,Zh=180/Math.PI;function No(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function bt(r,e,t){return Math.max(e,Math.min(t,r))}function Ax(r,e){return(r%e+e)%e}function Td(r,e,t){return(1-t)*r+t*e}function fo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(e=0,t=0){Ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*a+e.x,this.y=o*a+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,n,a,o,u,c,h,f){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,c,h,f)}set(e,t,n,a,o,u,c,h,f){const m=this.elements;return m[0]=e,m[1]=a,m[2]=c,m[3]=t,m[4]=o,m[5]=h,m[6]=n,m[7]=u,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],c=n[3],h=n[6],f=n[1],m=n[4],g=n[7],v=n[2],x=n[5],E=n[8],M=a[0],S=a[3],y=a[6],N=a[1],L=a[4],w=a[7],P=a[2],I=a[5],D=a[8];return o[0]=u*M+c*N+h*P,o[3]=u*S+c*L+h*I,o[6]=u*y+c*w+h*D,o[1]=f*M+m*N+g*P,o[4]=f*S+m*L+g*I,o[7]=f*y+m*w+g*D,o[2]=v*M+x*N+E*P,o[5]=v*S+x*L+E*I,o[8]=v*y+x*w+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8];return t*u*m-t*c*f-n*o*m+n*c*h+a*o*f-a*u*h}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=m*u-c*f,v=c*h-m*o,x=f*o-u*h,E=t*g+n*v+a*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(a*f-m*n)*M,e[2]=(c*n-a*u)*M,e[3]=v*M,e[4]=(m*t-a*h)*M,e[5]=(a*o-c*t)*M,e[6]=x*M,e[7]=(n*h-f*t)*M,e[8]=(u*t-n*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,u,c){const h=Math.cos(o),f=Math.sin(o);return this.set(n*h,n*f,-n*(h*u+f*c)+u+e,-a*f,a*h,-a*(-f*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(bd.makeScale(e,t)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bd=new xt;function Yv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rx(){const r=Nu("canvas");return r.style.display="block",r}const hg={};function Au(r){r in hg||(hg[r]=!0,console.warn(r))}function Cx(r,e,t){return new Promise(function(n,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Px(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fg=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pg=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dx(){const r={enabled:!0,workingColorSpace:wa,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===kt&&(a.r=yr(a.r),a.g=yr(a.g),a.b=yr(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(a.r=ya(a.r),a.g=ya(a.g),a.b=ya(a.b))),a},fromWorkingColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},toWorkingColorSpace:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Zr?Lu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[wa]:{primaries:e,whitePoint:n,transfer:Lu,toXYZ:fg,fromXYZ:pg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:fg,fromXYZ:pg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const It=Dx();function yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ya(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ta;class Nx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ta===void 0&&(ta=Nu("canvas")),ta.width=e.width,ta.height=e.height;const a=ta.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=ta}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=yr(o[u]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ix=0;class vf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,c=a.length;u<c;u++)a[u].isDataTexture?o.push(Ad(a[u].image)):o.push(Ad(a[u]))}else o=Ad(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function Ad(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ux=0;class ni extends Ra{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,n=Rs,a=Rs,o=qi,u=Cs,c=Gi,h=Sr,f=ni.DEFAULT_ANISOTROPY,m=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=No(),this.name="",this.source=new vf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=Ov;ni.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,n=0,a=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const h=e.elements,f=h[0],m=h[4],g=h[8],v=h[1],x=h[5],E=h[9],M=h[2],S=h[6],y=h[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,w=(x+1)/2,P=(y+1)/2,I=(m+v)/4,D=(g+M)/4,O=(E+S)/4;return L>w&&L>P?L<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(L),a=I/n,o=D/n):w>P?w<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(w),n=I/a,o=O/a):P<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(P),n=D/o,a=O/o),this.set(n,a,o,t),this}let N=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(g-M)/N,this.z=(v-m)/N,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fx extends Ra{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const a={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const o=new ni(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new vf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends Fx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qv extends ni{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kx extends ni{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,u,c){let h=n[a+0],f=n[a+1],m=n[a+2],g=n[a+3];const v=o[u+0],x=o[u+1],E=o[u+2],M=o[u+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=M;return}if(g!==M||h!==v||f!==x||m!==E){let S=1-c;const y=h*v+f*x+m*E+g*M,N=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const P=Math.sqrt(L),I=Math.atan2(P,y*N);S=Math.sin(S*I)/P,c=Math.sin(c*I)/P}const w=c*N;if(h=h*S+v*w,f=f*S+x*w,m=m*S+E*w,g=g*S+M*w,S===1-c){const P=1/Math.sqrt(h*h+f*f+m*m+g*g);h*=P,f*=P,m*=P,g*=P}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,a,o,u){const c=n[a],h=n[a+1],f=n[a+2],m=n[a+3],g=o[u],v=o[u+1],x=o[u+2],E=o[u+3];return e[t]=c*E+m*g+h*x-f*v,e[t+1]=h*E+m*v+f*g-c*x,e[t+2]=f*E+m*x+c*v-h*g,e[t+3]=m*E-c*g-h*v-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,u=e._order,c=Math.cos,h=Math.sin,f=c(n/2),m=c(a/2),g=c(o/2),v=h(n/2),x=h(a/2),E=h(o/2);switch(u){case"XYZ":this._x=v*m*g+f*x*E,this._y=f*x*g-v*m*E,this._z=f*m*E+v*x*g,this._w=f*m*g-v*x*E;break;case"YXZ":this._x=v*m*g+f*x*E,this._y=f*x*g-v*m*E,this._z=f*m*E-v*x*g,this._w=f*m*g+v*x*E;break;case"ZXY":this._x=v*m*g-f*x*E,this._y=f*x*g+v*m*E,this._z=f*m*E+v*x*g,this._w=f*m*g-v*x*E;break;case"ZYX":this._x=v*m*g-f*x*E,this._y=f*x*g+v*m*E,this._z=f*m*E-v*x*g,this._w=f*m*g+v*x*E;break;case"YZX":this._x=v*m*g+f*x*E,this._y=f*x*g+v*m*E,this._z=f*m*E-v*x*g,this._w=f*m*g-v*x*E;break;case"XZY":this._x=v*m*g-f*x*E,this._y=f*x*g-v*m*E,this._z=f*m*E+v*x*g,this._w=f*m*g+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],u=t[1],c=t[5],h=t[9],f=t[2],m=t[6],g=t[10],v=n+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-h)*x,this._y=(o-f)*x,this._z=(u-a)*x}else if(n>c&&n>g){const x=2*Math.sqrt(1+n-c-g);this._w=(m-h)/x,this._x=.25*x,this._y=(a+u)/x,this._z=(o+f)/x}else if(c>g){const x=2*Math.sqrt(1+c-n-g);this._w=(o-f)/x,this._x=(a+u)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+g-n-c);this._w=(u-a)/x,this._x=(o+f)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,u=e._w,c=t._x,h=t._y,f=t._z,m=t._w;return this._x=n*m+u*c+a*f-o*h,this._y=a*m+u*h+o*c-n*f,this._z=o*m+u*f+n*h-a*c,this._w=u*m-n*c-a*h-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,u=this._w;let c=u*e._w+n*e._x+a*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=a,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*n+t*this._x,this._y=x*a+t*this._y,this._z=x*o+t*this._z,this.normalize(),this}const f=Math.sqrt(h),m=Math.atan2(f,c),g=Math.sin((1-t)*m)/f,v=Math.sin(t*m)/f;return this._w=u*g+this._w*v,this._x=n*g+this._x*v,this._y=a*g+this._y*v,this._z=o*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,n=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,u=e.y,c=e.z,h=e.w,f=2*(u*a-c*n),m=2*(c*t-o*a),g=2*(o*n-u*t);return this.x=t+h*f+u*g-c*m,this.y=n+h*m+c*f-o*g,this.z=a+h*g+o*m-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,u=t.x,c=t.y,h=t.z;return this.x=a*h-o*c,this.y=o*u-n*h,this.z=n*c-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rd.copy(this).projectOnVector(e),this.sub(Rd)}reflect(e){return this.sub(Rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new le,mg=new Io;class Uo{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ii):Ii.fromBufferAttribute(o,u),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gl.copy(n.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Hl.subVectors(this.max,po),na.subVectors(e.a,po),ia.subVectors(e.b,po),ra.subVectors(e.c,po),Wr.subVectors(ia,na),jr.subVectors(ra,ia),gs.subVectors(na,ra);let t=[0,-Wr.z,Wr.y,0,-jr.z,jr.y,0,-gs.z,gs.y,Wr.z,0,-Wr.x,jr.z,0,-jr.x,gs.z,0,-gs.x,-Wr.y,Wr.x,0,-jr.y,jr.x,0,-gs.y,gs.x,0];return!Cd(t,na,ia,ra,Hl)||(t=[1,0,0,0,1,0,0,0,1],!Cd(t,na,ia,ra,Hl))?!1:(Vl.crossVectors(Wr,jr),t=[Vl.x,Vl.y,Vl.z],Cd(t,na,ia,ra,Hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const or=[new le,new le,new le,new le,new le,new le,new le,new le],Ii=new le,Gl=new Uo,na=new le,ia=new le,ra=new le,Wr=new le,jr=new le,gs=new le,po=new le,Hl=new le,Vl=new le,vs=new le;function Cd(r,e,t,n,a){for(let o=0,u=r.length-3;o<=u;o+=3){vs.fromArray(r,o);const c=a.x*Math.abs(vs.x)+a.y*Math.abs(vs.y)+a.z*Math.abs(vs.z),h=e.dot(vs),f=t.dot(vs),m=n.dot(vs);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>c)return!1}return!0}const Ox=new Uo,mo=new le,Pd=new le;class Fo{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ox.setFromPoints(e).getCenter(n);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const t=mo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(mo,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(Pd)),this.expandByPoint(mo.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const lr=new le,Ld=new le,Wl=new le,Xr=new le,Dd=new le,jl=new le,Nd=new le;class ku{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Ld.copy(e).add(t).multiplyScalar(.5),Wl.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Ld);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Wl),c=Xr.dot(this.direction),h=-Xr.dot(Wl),f=Xr.lengthSq(),m=Math.abs(1-u*u);let g,v,x,E;if(m>0)if(g=u*h-c,v=u*c-h,E=o*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,x=g*(g+u*v+2*c)+v*(u*g+v+2*h)+f}else v=o,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v=-o,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v<=-E?(g=Math.max(0,-(-u*o+c)),v=g>0?-o:Math.min(Math.max(-o,-h),o),x=-g*g+v*(v+2*h)+f):v<=E?(g=0,v=Math.min(Math.max(-o,-h),o),x=v*(v+2*h)+f):(g=Math.max(0,-(u*o+c)),v=g>0?o:Math.min(Math.max(-o,-h),o),x=-g*g+v*(v+2*h)+f);else v=u>0?-o:o,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ld).addScaledVector(Wl,v),x}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const n=lr.dot(this.direction),a=lr.dot(lr)-n*n,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),c=n-u,h=n+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,u,c,h;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,a=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,a=(e.min.x-v.x)*f),m>=0?(o=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(o=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),n>u||o>a||((o>n||isNaN(n))&&(n=o),(u<a||isNaN(a))&&(a=u),g>=0?(c=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),n>h||c>a)||((c>n||n!==n)&&(n=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,n,a,o){Dd.subVectors(t,e),jl.subVectors(n,e),Nd.crossVectors(Dd,jl);let u=this.direction.dot(Nd),c;if(u>0){if(a)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Xr.subVectors(this.origin,e);const h=c*this.direction.dot(jl.crossVectors(Xr,jl));if(h<0)return null;const f=c*this.direction.dot(Dd.cross(Xr));if(f<0||h+f>u)return null;const m=-c*Xr.dot(Nd);return m<0?null:this.at(m/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,n,a,o,u,c,h,f,m,g,v,x,E,M,S){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,c,h,f,m,g,v,x,E,M,S)}set(e,t,n,a,o,u,c,h,f,m,g,v,x,E,M,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=a,y[1]=o,y[5]=u,y[9]=c,y[13]=h,y[2]=f,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=E,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/sa.setFromMatrixColumn(e,0).length(),o=1/sa.setFromMatrixColumn(e,1).length(),u=1/sa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,u=Math.cos(n),c=Math.sin(n),h=Math.cos(a),f=Math.sin(a),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const v=u*m,x=u*g,E=c*m,M=c*g;t[0]=h*m,t[4]=-h*g,t[8]=f,t[1]=x+E*f,t[5]=v-M*f,t[9]=-c*h,t[2]=M-v*f,t[6]=E+x*f,t[10]=u*h}else if(e.order==="YXZ"){const v=h*m,x=h*g,E=f*m,M=f*g;t[0]=v+M*c,t[4]=E*c-x,t[8]=u*f,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-E,t[6]=M+v*c,t[10]=u*h}else if(e.order==="ZXY"){const v=h*m,x=h*g,E=f*m,M=f*g;t[0]=v-M*c,t[4]=-u*g,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*m,t[9]=M-v*c,t[2]=-u*f,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const v=u*m,x=u*g,E=c*m,M=c*g;t[0]=h*m,t[4]=E*f-x,t[8]=v*f+M,t[1]=h*g,t[5]=M*f+v,t[9]=x*f-E,t[2]=-f,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,x=u*f,E=c*h,M=c*f;t[0]=h*m,t[4]=M-v*g,t[8]=E*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-f*m,t[6]=x*g+E,t[10]=v-M*g}else if(e.order==="XZY"){const v=u*h,x=u*f,E=c*h,M=c*f;t[0]=h*m,t[4]=-g,t[8]=f*m,t[1]=v*g+M,t[5]=u*m,t[9]=x*g-E,t[2]=E*g-x,t[6]=c*m,t[10]=M*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zx,e,Bx)}lookAt(e,t,n){const a=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),$r.crossVectors(n,li),$r.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),$r.crossVectors(n,li)),$r.normalize(),Xl.crossVectors(li,$r),a[0]=$r.x,a[4]=Xl.x,a[8]=li.x,a[1]=$r.y,a[5]=Xl.y,a[9]=li.y,a[2]=$r.z,a[6]=Xl.z,a[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],c=n[4],h=n[8],f=n[12],m=n[1],g=n[5],v=n[9],x=n[13],E=n[2],M=n[6],S=n[10],y=n[14],N=n[3],L=n[7],w=n[11],P=n[15],I=a[0],D=a[4],O=a[8],R=a[12],A=a[1],z=a[5],k=a[9],Y=a[13],se=a[2],pe=a[6],ee=a[10],de=a[14],W=a[3],me=a[7],ae=a[11],G=a[15];return o[0]=u*I+c*A+h*se+f*W,o[4]=u*D+c*z+h*pe+f*me,o[8]=u*O+c*k+h*ee+f*ae,o[12]=u*R+c*Y+h*de+f*G,o[1]=m*I+g*A+v*se+x*W,o[5]=m*D+g*z+v*pe+x*me,o[9]=m*O+g*k+v*ee+x*ae,o[13]=m*R+g*Y+v*de+x*G,o[2]=E*I+M*A+S*se+y*W,o[6]=E*D+M*z+S*pe+y*me,o[10]=E*O+M*k+S*ee+y*ae,o[14]=E*R+M*Y+S*de+y*G,o[3]=N*I+L*A+w*se+P*W,o[7]=N*D+L*z+w*pe+P*me,o[11]=N*O+L*k+w*ee+P*ae,o[15]=N*R+L*Y+w*de+P*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],u=e[1],c=e[5],h=e[9],f=e[13],m=e[2],g=e[6],v=e[10],x=e[14],E=e[3],M=e[7],S=e[11],y=e[15];return E*(+o*h*g-a*f*g-o*c*v+n*f*v+a*c*x-n*h*x)+M*(+t*h*x-t*f*v+o*u*v-a*u*x+a*f*m-o*h*m)+S*(+t*f*g-t*c*x-o*u*g+n*u*x+o*c*m-n*f*m)+y*(-a*c*m-t*h*g+t*c*v+a*u*g-n*u*v+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=e[9],v=e[10],x=e[11],E=e[12],M=e[13],S=e[14],y=e[15],N=g*S*f-M*v*f+M*h*x-c*S*x-g*h*y+c*v*y,L=E*v*f-m*S*f-E*h*x+u*S*x+m*h*y-u*v*y,w=m*M*f-E*g*f+E*c*x-u*M*x-m*c*y+u*g*y,P=E*g*h-m*M*h-E*c*v+u*M*v+m*c*S-u*g*S,I=t*N+n*L+a*w+o*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=N*D,e[1]=(M*v*o-g*S*o-M*a*x+n*S*x+g*a*y-n*v*y)*D,e[2]=(c*S*o-M*h*o+M*a*f-n*S*f-c*a*y+n*h*y)*D,e[3]=(g*h*o-c*v*o-g*a*f+n*v*f+c*a*x-n*h*x)*D,e[4]=L*D,e[5]=(m*S*o-E*v*o+E*a*x-t*S*x-m*a*y+t*v*y)*D,e[6]=(E*h*o-u*S*o-E*a*f+t*S*f+u*a*y-t*h*y)*D,e[7]=(u*v*o-m*h*o+m*a*f-t*v*f-u*a*x+t*h*x)*D,e[8]=w*D,e[9]=(E*g*o-m*M*o-E*n*x+t*M*x+m*n*y-t*g*y)*D,e[10]=(u*M*o-E*c*o+E*n*f-t*M*f-u*n*y+t*c*y)*D,e[11]=(m*c*o-u*g*o-m*n*f+t*g*f+u*n*x-t*c*x)*D,e[12]=P*D,e[13]=(m*M*a-E*g*a+E*n*v-t*M*v-m*n*S+t*g*S)*D,e[14]=(E*c*a-u*M*a-E*n*h+t*M*h+u*n*S-t*c*S)*D,e[15]=(u*g*a-m*c*a+m*n*h-t*g*h-u*n*v+t*c*v)*D,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,u=e.x,c=e.y,h=e.z,f=o*u,m=o*c;return this.set(f*u+n,f*c-a*h,f*h+a*c,0,f*c+a*h,m*c+n,m*h-a*u,0,f*h-a*c,m*h+a*u,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,u){return this.set(1,n,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,u=t._y,c=t._z,h=t._w,f=o+o,m=u+u,g=c+c,v=o*f,x=o*m,E=o*g,M=u*m,S=u*g,y=c*g,N=h*f,L=h*m,w=h*g,P=n.x,I=n.y,D=n.z;return a[0]=(1-(M+y))*P,a[1]=(x+w)*P,a[2]=(E-L)*P,a[3]=0,a[4]=(x-w)*I,a[5]=(1-(v+y))*I,a[6]=(S+N)*I,a[7]=0,a[8]=(E+L)*D,a[9]=(S-N)*D,a[10]=(1-(v+M))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=sa.set(a[0],a[1],a[2]).length();const u=sa.set(a[4],a[5],a[6]).length(),c=sa.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Ui.copy(this);const f=1/o,m=1/u,g=1/c;return Ui.elements[0]*=f,Ui.elements[1]*=f,Ui.elements[2]*=f,Ui.elements[4]*=m,Ui.elements[5]*=m,Ui.elements[6]*=m,Ui.elements[8]*=g,Ui.elements[9]*=g,Ui.elements[10]*=g,t.setFromRotationMatrix(Ui),n.x=o,n.y=u,n.z=c,this}makePerspective(e,t,n,a,o,u,c=vr){const h=this.elements,f=2*o/(t-e),m=2*o/(n-a),g=(t+e)/(t-e),v=(n+a)/(n-a);let x,E;if(c===vr)x=-(u+o)/(u-o),E=-2*u*o/(u-o);else if(c===Du)x=-u/(u-o),E=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,a,o,u,c=vr){const h=this.elements,f=1/(t-e),m=1/(n-a),g=1/(u-o),v=(t+e)*f,x=(n+a)*m;let E,M;if(c===vr)E=(u+o)*g,M=-2*g;else if(c===Du)E=o*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sa=new le,Ui=new Kt,zx=new le(0,0,0),Bx=new le(1,1,1),$r=new le,Xl=new le,li=new le,gg=new Kt,vg=new Io;class Er{constructor(e=0,t=0,n=0,a=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],u=a[4],c=a[8],h=a[1],f=a[5],m=a[9],g=a[2],v=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vg.setFromEuler(this),this.setFromQuaternion(vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class _f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gx=0;const _g=new le,aa=new Io,ur=new Kt,$l=new le,go=new le,Hx=new le,Vx=new Io,yg=new le(1,0,0),xg=new le(0,1,0),Sg=new le(0,0,1),Eg={type:"added"},Wx={type:"removed"},oa={type:"childadded",child:null},Id={type:"childremoved",child:null};class Un extends Ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new le,t=new Er,n=new Io,a=new le(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new xt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(xg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,t){return _g.copy(e).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(xg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$l.copy(e):$l.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(go,$l,this.up):ur.lookAt($l,go,this.up),this.quaternion.setFromRotationMatrix(ur),a&&(ur.extractRotation(a.matrixWorld),aa.setFromRotationMatrix(ur),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eg),oa.child=e,this.dispatchEvent(oa),oa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wx),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eg),oa.child=e,this.dispatchEvent(oa),oa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,Vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(c=>({...c})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const g=h[f];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(o(e.materials,this.material[h]));a.material=c}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(o(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),f=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),E.length>0&&(n.nodes=E)}return n.object=a,n;function u(c){const h=[];for(const f in c){const m=c[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}Un.DEFAULT_UP=new le(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new le,cr=new le,Ud=new le,dr=new le,la=new le,ua=new le,Mg=new le,Fd=new le,kd=new le,Od=new le,zd=new sn,Bd=new sn,Gd=new sn;class zi{constructor(e=new le,t=new le,n=new le){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Fi.subVectors(e,t),a.cross(Fi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){Fi.subVectors(a,t),cr.subVectors(n,t),Ud.subVectors(e,t);const u=Fi.dot(Fi),c=Fi.dot(cr),h=Fi.dot(Ud),f=cr.dot(cr),m=cr.dot(Ud),g=u*f-c*c;if(g===0)return o.set(0,0,0),null;const v=1/g,x=(f*h-c*m)*v,E=(u*m-c*h)*v;return o.set(1-x-E,E,x)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,n,a,o,u,c,h){return this.getBarycoord(e,t,n,a,dr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,dr.x),h.addScaledVector(u,dr.y),h.addScaledVector(c,dr.z),h)}static getInterpolatedAttribute(e,t,n,a,o,u){return zd.setScalar(0),Bd.setScalar(0),Gd.setScalar(0),zd.fromBufferAttribute(e,t),Bd.fromBufferAttribute(e,n),Gd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(zd,o.x),u.addScaledVector(Bd,o.y),u.addScaledVector(Gd,o.z),u}static isFrontFacing(e,t,n,a){return Fi.subVectors(n,t),cr.subVectors(e,t),Fi.cross(cr).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Fi.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return zi.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let u,c;la.subVectors(a,n),ua.subVectors(o,n),Fd.subVectors(e,n);const h=la.dot(Fd),f=ua.dot(Fd);if(h<=0&&f<=0)return t.copy(n);kd.subVectors(e,a);const m=la.dot(kd),g=ua.dot(kd);if(m>=0&&g<=m)return t.copy(a);const v=h*g-m*f;if(v<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(n).addScaledVector(la,u);Od.subVectors(e,o);const x=la.dot(Od),E=ua.dot(Od);if(E>=0&&x<=E)return t.copy(o);const M=x*f-h*E;if(M<=0&&f>=0&&E<=0)return c=f/(f-E),t.copy(n).addScaledVector(ua,c);const S=m*E-x*g;if(S<=0&&g-m>=0&&x-E>=0)return Mg.subVectors(o,a),c=(g-m)/(g-m+(x-E)),t.copy(a).addScaledVector(Mg,c);const y=1/(S+M+v);return u=M*y,c=v*y,t.copy(n).addScaledVector(la,u).addScaledVector(ua,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Hd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=It.workingColorSpace){if(e=Ax(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=Hd(u,o,e+1/3),this.g=Hd(u,o,e),this.b=Hd(u,o,e-1/3)}return It.toWorkingColorSpace(this,a),this}setStyle(e,t=Si){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],c=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){const n=Kv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return It.fromWorkingColorSpace(Nn.copy(this),e),Math.round(bt(Nn.r*255,0,255))*65536+Math.round(bt(Nn.g*255,0,255))*256+Math.round(bt(Nn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Nn.copy(this),t);const n=Nn.r,a=Nn.g,o=Nn.b,u=Math.max(n,a,o),c=Math.min(n,a,o);let h,f;const m=(c+u)/2;if(c===u)h=0,f=0;else{const g=u-c;switch(f=m<=.5?g/(u+c):g/(2-u-c),u){case n:h=(a-o)/g+(a<o?6:0);break;case a:h=(o-n)/g+2;break;case o:h=(n-a)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Si){It.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,n=Nn.g,a=Nn.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Yl);const n=Td(Yr.h,Yl.h,t),a=Td(Yr.s,Yl.s,t),o=Td(Yr.l,Yl.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ct;Ct.NAMES=Kv;let jx=0;class Ca extends Ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=No(),this.name="",this.type="Material",this.blending=_a,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=fh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_a&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hh&&(n.blendSrc=this.blendSrc),this.blendDst!==fh&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ea&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ea&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ea&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const u=[];for(const c in o){const h=o[c];delete h.metadata,u.push(h)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zv extends Ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new le,ql=new Ot;let Xx=0;class Vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cg,this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ei(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),n=ei(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),n=ei(n,this.array),a=ei(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),n=ei(n,this.array),a=ei(a,this.array),o=ei(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cg&&(e.usage=this.usage),e}}class Qv extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jv extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class es extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $x=0;const _i=new Kt,Vd=new Un,ca=new le,ui=new Uo,vo=new Uo,xn=new le;class di extends Ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yv(e)?Jv:Qv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new xt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new es(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];ui.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];vo.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(ui.min,vo.min),ui.expandByPoint(xn),xn.addVectors(ui.max,vo.max),ui.expandByPoint(xn)):(ui.expandByPoint(vo.min),ui.expandByPoint(vo.max))}ui.getCenter(n);let a=0;for(let o=0,u=e.count;o<u;o++)xn.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(xn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],h=this.morphTargetsRelative;for(let f=0,m=c.count;f<m;f++)xn.fromBufferAttribute(c,f),h&&(ca.fromBufferAttribute(e,f),xn.add(ca)),a=Math.max(a,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let O=0;O<n.count;O++)c[O]=new le,h[O]=new le;const f=new le,m=new le,g=new le,v=new Ot,x=new Ot,E=new Ot,M=new le,S=new le;function y(O,R,A){f.fromBufferAttribute(n,O),m.fromBufferAttribute(n,R),g.fromBufferAttribute(n,A),v.fromBufferAttribute(o,O),x.fromBufferAttribute(o,R),E.fromBufferAttribute(o,A),m.sub(f),g.sub(f),x.sub(v),E.sub(v);const z=1/(x.x*E.y-E.x*x.y);isFinite(z)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(z),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(z),c[O].add(M),c[R].add(M),c[A].add(M),h[O].add(S),h[R].add(S),h[A].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let O=0,R=N.length;O<R;++O){const A=N[O],z=A.start,k=A.count;for(let Y=z,se=z+k;Y<se;Y+=3)y(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const L=new le,w=new le,P=new le,I=new le;function D(O){P.fromBufferAttribute(a,O),I.copy(P);const R=c[O];L.copy(R),L.sub(P.multiplyScalar(P.dot(R))).normalize(),w.crossVectors(I,R);const z=w.dot(h[O])<0?-1:1;u.setXYZW(O,L.x,L.y,L.z,z)}for(let O=0,R=N.length;O<R;++O){const A=N[O],z=A.start,k=A.count;for(let Y=z,se=z+k;Y<se;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const a=new le,o=new le,u=new le,c=new le,h=new le,f=new le,m=new le,g=new le;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);a.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),m.subVectors(u,o),g.subVectors(a,o),m.cross(g),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),c.add(m),h.add(m),f.add(m),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let v=0,x=t.count;v<x;v+=3)a.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,o),g.subVectors(a,o),m.cross(g),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(c,h){const f=c.array,m=c.itemSize,g=c.normalized,v=new f.constructor(h.length*m);let x=0,E=0;for(let M=0,S=h.length;M<S;M++){c.isInterleavedBufferAttribute?x=h[M]*c.data.stride+c.offset:x=h[M]*m;for(let y=0;y<m;y++)v[E++]=f[x++]}return new Vn(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,n=this.index.array,a=this.attributes;for(const c in a){const h=a[c],f=e(h,n);t.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const h=[],f=o[c];for(let m=0,g=f.length;m<g;m++){const v=f[m],x=e(v,n);h.push(x)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let g=0,v=f.length;g<v;g++){const x=f[g];m.push(x.toJSON(e.data))}m.length>0&&(a[h]=m,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const f in a){const m=a[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],g=o[f];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,m=u.length;f<m;f++){const g=u[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wg=new Kt,_s=new ku,Kl=new Fo,Tg=new le,Zl=new le,Ql=new le,Jl=new le,Wd=new le,eu=new le,bg=new le,tu=new le;class _r extends Un{constructor(e=new di,t=new Zv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(o&&c){eu.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const m=c[h],g=o[h];m!==0&&(Wd.fromBufferAttribute(g,e),u?eu.addScaledVector(Wd,m):eu.addScaledVector(Wd.sub(t),m))}t.add(eu)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(o),_s.copy(e.ray).recast(e.near),!(Kl.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Kl,Tg)===null||_s.origin.distanceToSquared(Tg)>(e.far-e.near)**2))&&(wg.copy(o).invert(),_s.copy(e.ray).applyMatrix4(wg),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let a;const o=this.geometry,u=this.material,c=o.index,h=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,g=o.attributes.normal,v=o.groups,x=o.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=u[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let w=N,P=L;w<P;w+=3){const I=c.getX(w),D=c.getX(w+1),O=c.getX(w+2);a=nu(this,y,e,n,f,m,g,I,D,O),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const N=c.getX(S),L=c.getX(S+1),w=c.getX(S+2);a=nu(this,u,e,n,f,m,g,N,L,w),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=u[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=N,P=L;w<P;w+=3){const I=w,D=w+1,O=w+2;a=nu(this,y,e,n,f,m,g,I,D,O),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,x.start),M=Math.min(h.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const N=S,L=S+1,w=S+2;a=nu(this,u,e,n,f,m,g,N,L,w),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function Yx(r,e,t,n,a,o,u,c){let h;if(e.side===ti?h=n.intersectTriangle(u,o,a,!0,c):h=n.intersectTriangle(a,o,u,e.side===ts,c),h===null)return null;tu.copy(c),tu.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(tu);return f<t.near||f>t.far?null:{distance:f,point:tu.clone(),object:r}}function nu(r,e,t,n,a,o,u,c,h,f){r.getVertexPosition(c,Zl),r.getVertexPosition(h,Ql),r.getVertexPosition(f,Jl);const m=Yx(r,e,t,n,Zl,Ql,Jl,bg);if(m){const g=new le;zi.getBarycoord(bg,Zl,Ql,Jl,g),a&&(m.uv=zi.getInterpolatedAttribute(a,c,h,f,g,new Ot)),o&&(m.uv1=zi.getInterpolatedAttribute(o,c,h,f,g,new Ot)),u&&(m.normal=zi.getInterpolatedAttribute(u,c,h,f,g,new le),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:h,c:f,normal:new le,materialIndex:0};zi.getNormal(Zl,Ql,Jl,v.normal),m.face=v,m.barycoord=g}return m}class ko extends di{constructor(e=1,t=1,n=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:u};const c=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const h=[],f=[],m=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,n,t,e,u,o,0),E("z","y","x",1,-1,n,t,-e,u,o,1),E("x","z","y",1,1,e,n,t,a,u,2),E("x","z","y",1,-1,e,n,-t,a,u,3),E("x","y","z",1,-1,e,t,n,a,o,4),E("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(h),this.setAttribute("position",new es(f,3)),this.setAttribute("normal",new es(m,3)),this.setAttribute("uv",new es(g,2));function E(M,S,y,N,L,w,P,I,D,O,R){const A=w/D,z=P/O,k=w/2,Y=P/2,se=I/2,pe=D+1,ee=O+1;let de=0,W=0;const me=new le;for(let ae=0;ae<ee;ae++){const G=ae*z-Y;for(let re=0;re<pe;re++){const Ie=re*A-k;me[M]=Ie*N,me[S]=G*L,me[y]=se,f.push(me.x,me.y,me.z),me[M]=0,me[S]=0,me[y]=I>0?1:-1,m.push(me.x,me.y,me.z),g.push(re/D),g.push(1-ae/O),de+=1}}for(let ae=0;ae<O;ae++)for(let G=0;G<D;G++){const re=v+G+pe*ae,Ie=v+G+pe*(ae+1),te=v+(G+1)+pe*(ae+1),Z=v+(G+1)+pe*ae;h.push(re,Ie,Z),h.push(Ie,te,Z),W+=6}c.addGroup(x,W,R),x+=W,v+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ta(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const a=r[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function Hn(r){const e={};for(let t=0;t<r.length;t++){const n=Ta(r[t]);for(const a in n)e[a]=n[a]}return e}function qx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function e_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const Kx={clone:Ta,merge:Hn};var Zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends Ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zx,this.fragmentShader=Qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let t_=class extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=vr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const qr=new le,Ag=new Ot,Rg=new Ot;class ci extends t_{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,Ag,Rg),t.subVectors(Rg,Ag)}setViewOffset(e,t,n,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wd*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,f=u.fullHeight;o+=u.offsetX*a/h,t-=u.offsetY*n/f,a*=u.width/h,n*=u.height/f}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const da=-90,ha=1;class Jx extends Un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(da,ha,e,t);a.layers=this.layers,this.add(a);const o=new ci(da,ha,e,t);o.layers=this.layers,this.add(o);const u=new ci(da,ha,e,t);u.layers=this.layers,this.add(u);const c=new ci(da,ha,e,t);c.layers=this.layers,this.add(c);const h=new ci(da,ha,e,t);h.layers=this.layers,this.add(h);const f=new ci(da,ha,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,u,c,h]=t;for(const f of t)this.remove(f);if(e===vr)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Du)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,h,f,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,u),e.setRenderTarget(n,2,a),e.render(t,c),e.setRenderTarget(n,3,a),e.render(t,h),e.setRenderTarget(n,4,a),e.render(t,f),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,a),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class n_ extends ni{constructor(e=[],t=Ea,n,a,o,u,c,h,f,m){super(e,t,n,a,o,u,c,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eS extends Ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new n_(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ko(5,5,5),o=new ns({name:"CubemapFromEquirect",uniforms:Ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ti,blending:Qr});o.uniforms.tEquirect.value=t;const u=new _r(a,o),c=t.minFilter;return t.minFilter===Cs&&(t.minFilter=qi),new Jx(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,a);e.setRenderTarget(o)}}class iu extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tS={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,u=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),y=this._getHandJoint(f,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,E=.005;f.inputState.pinching&&v>x+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=x-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(tS)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new iu;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class i_ extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xd=new le,nS=new le,iS=new xt;class ws{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Xd.subVectors(n,t).cross(nS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xd),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||iS.getNormalMatrix(e),a=this.coplanarPoint(Xd).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Fo,ru=new le;class r_{constructor(e=new ws,t=new ws,n=new ws,a=new ws,o=new ws,u=new ws){this.planes=[e,t,n,a,o,u]}set(e,t,n,a,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(a),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vr){const n=this.planes,a=e.elements,o=a[0],u=a[1],c=a[2],h=a[3],f=a[4],m=a[5],g=a[6],v=a[7],x=a[8],E=a[9],M=a[10],S=a[11],y=a[12],N=a[13],L=a[14],w=a[15];if(n[0].setComponents(h-o,v-f,S-x,w-y).normalize(),n[1].setComponents(h+o,v+f,S+x,w+y).normalize(),n[2].setComponents(h+u,v+m,S+E,w+N).normalize(),n[3].setComponents(h-u,v-m,S-E,w-N).normalize(),n[4].setComponents(h-c,v-g,S-M,w-L).normalize(),t===vr)n[5].setComponents(h+c,v+g,S+M,w+L).normalize();else if(t===Du)n[5].setComponents(c,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(ru.x=a.normal.x>0?e.max.x:e.min.x,ru.y=a.normal.y>0?e.max.y:e.min.y,ru.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yf extends Ca{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Iu=new le,Uu=new le,Cg=new Kt,_o=new ku,su=new Fo,$d=new le,Pg=new le;class s_ extends Un{constructor(e=new di,t=new yf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)Iu.fromBufferAttribute(t,a-1),Uu.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Iu.distanceTo(Uu);e.setAttribute("lineDistance",new es(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),su.copy(n.boundingSphere),su.applyMatrix4(a),su.radius+=o,e.ray.intersectsSphere(su)===!1)return;Cg.copy(a).invert(),_o.copy(e.ray).applyMatrix4(Cg);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null){const x=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=f){const y=m.getX(M),N=m.getX(M+1),L=au(this,e,_o,h,y,N,M);L&&t.push(L)}if(this.isLineLoop){const M=m.getX(E-1),S=m.getX(x),y=au(this,e,_o,h,M,S,E-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=f){const y=au(this,e,_o,h,M,M+1,M);y&&t.push(y)}if(this.isLineLoop){const M=au(this,e,_o,h,E-1,x,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function au(r,e,t,n,a,o,u){const c=r.geometry.attributes.position;if(Iu.fromBufferAttribute(c,a),Uu.fromBufferAttribute(c,o),t.distanceSqToSegment(Iu,Uu,$d,Pg)>n)return;$d.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo($d);if(!(f<e.near||f>e.far))return{distance:f,point:Pg.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class xf extends Ca{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lg=new Kt,Qh=new ku,ou=new Fo,lu=new le;class a_ extends Un{constructor(e=new di,t=new xf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ou.copy(n.boundingSphere),ou.applyMatrix4(a),ou.radius+=o,e.ray.intersectsSphere(ou)===!1)return;Lg.copy(a).invert(),Qh.copy(e.ray).applyMatrix4(Lg);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,g=n.attributes.position;if(f!==null){const v=Math.max(0,u.start),x=Math.min(f.count,u.start+u.count);for(let E=v,M=x;E<M;E++){const S=f.getX(E);lu.fromBufferAttribute(g,S),Dg(lu,S,h,a,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let E=v,M=x;E<M;E++)lu.fromBufferAttribute(g,E),Dg(lu,E,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Dg(r,e,t,n,a,o,u){const c=Qh.distanceSqToPoint(r);if(c<t){const h=new le;Qh.closestPointToPoint(r,h),h.applyMatrix4(n);const f=a.ray.origin.distanceTo(h);if(f<a.near||f>a.far)return;o.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class o_ extends ni{constructor(e,t,n=Ps,a,o,u,c=Hi,h=Hi,f,m=Po){if(m!==Po&&m!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,o,u,c,h,m,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ou extends di{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,u=t/2,c=Math.floor(n),h=Math.floor(a),f=c+1,m=h+1,g=e/c,v=t/h,x=[],E=[],M=[],S=[];for(let y=0;y<m;y++){const N=y*v-u;for(let L=0;L<f;L++){const w=L*g-o;E.push(w,-N,0),M.push(0,0,1),S.push(L/c),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let N=0;N<c;N++){const L=N+f*y,w=N+f*(y+1),P=N+1+f*(y+1),I=N+1+f*y;x.push(L,w,I),x.push(w,P,I)}this.setIndex(x),this.setAttribute("position",new es(E,3)),this.setAttribute("normal",new es(M,3)),this.setAttribute("uv",new es(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.width,e.height,e.widthSegments,e.heightSegments)}}class rS extends Ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sS extends Ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class aS extends Un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class oS extends t_{constructor(e=-1,t=1,n=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,u=n+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,u=o+f*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class l_ extends aS{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lS extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ng=new Kt;class uS{constructor(e,t,n=0,a=1/0){this.ray=new ku(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new _f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ng.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ng),this}intersectObject(e,t=!0,n=[]){return Jh(e,this,n,t),n.sort(Ig),n}intersectObjects(e,t=!0,n=[]){for(let a=0,o=e.length;a<o;a++)Jh(e[a],this,n,t);return n.sort(Ig),n}}function Ig(r,e){return r.distance-e.distance}function Jh(r,e,t,n){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const o=r.children;for(let u=0,c=o.length;u<c;u++)Jh(o[u],e,t,!0)}}function Ug(r,e,t,n){const a=cS(n);switch(t){case Hv:return r*e;case Wv:return r*e/a.components*a.byteLength;case pf:return r*e/a.components*a.byteLength;case jv:return r*e*2/a.components*a.byteLength;case mf:return r*e*2/a.components*a.byteLength;case Vv:return r*e*3/a.components*a.byteLength;case Gi:return r*e*4/a.components*a.byteLength;case gf:return r*e*4/a.components*a.byteLength;case Eu:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wu:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bh:case Rh:return Math.max(r,16)*Math.max(e,8)/4;case Th:case Ah:return Math.max(r,8)*Math.max(e,8)/2;case Ch:case Ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bu:case Xh:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xv:case Yh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case qh:case Kh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cS(r){switch(r){case Sr:case zv:return{byteLength:1,components:1};case Ro:case Bv:case Do:return{byteLength:2,components:1};case hf:case ff:return{byteLength:2,components:4};case Ps:case df:case gr:return{byteLength:4,components:1};case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u_(){let r=null,e=!1,t=null,n=null;function a(o,u){t(o,u),n=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function dS(r){const e=new WeakMap;function t(c,h){const f=c.array,m=c.usage,g=f.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,f,m),c.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,h,f){const m=h.array,g=h.updateRanges;if(r.bindBuffer(f,c),g.length===0)r.bufferSubData(f,0,m);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];r.bufferSubData(f,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(r.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:u}}var hS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_S=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,US=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HS="gl_FragColor = linearToOutputTexel( gl_FragColor );",VS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_M=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:hS,alphahash_pars_fragment:fS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:vS,aomap_fragment:_S,aomap_pars_fragment:yS,batching_pars_vertex:xS,batching_vertex:SS,begin_vertex:ES,beginnormal_vertex:MS,bsdfs:wS,iridescence_fragment:TS,bumpmap_pars_fragment:bS,clipping_planes_fragment:AS,clipping_planes_pars_fragment:RS,clipping_planes_pars_vertex:CS,clipping_planes_vertex:PS,color_fragment:LS,color_pars_fragment:DS,color_pars_vertex:NS,color_vertex:IS,common:US,cube_uv_reflection_fragment:FS,defaultnormal_vertex:kS,displacementmap_pars_vertex:OS,displacementmap_vertex:zS,emissivemap_fragment:BS,emissivemap_pars_fragment:GS,colorspace_fragment:HS,colorspace_pars_fragment:VS,envmap_fragment:WS,envmap_common_pars_fragment:jS,envmap_pars_fragment:XS,envmap_pars_vertex:$S,envmap_physical_pars_fragment:rE,envmap_vertex:YS,fog_vertex:qS,fog_pars_vertex:KS,fog_fragment:ZS,fog_pars_fragment:QS,gradientmap_pars_fragment:JS,lightmap_pars_fragment:eE,lights_lambert_fragment:tE,lights_lambert_pars_fragment:nE,lights_pars_begin:iE,lights_toon_fragment:sE,lights_toon_pars_fragment:aE,lights_phong_fragment:oE,lights_phong_pars_fragment:lE,lights_physical_fragment:uE,lights_physical_pars_fragment:cE,lights_fragment_begin:dE,lights_fragment_maps:hE,lights_fragment_end:fE,logdepthbuf_fragment:pE,logdepthbuf_pars_fragment:mE,logdepthbuf_pars_vertex:gE,logdepthbuf_vertex:vE,map_fragment:_E,map_pars_fragment:yE,map_particle_fragment:xE,map_particle_pars_fragment:SE,metalnessmap_fragment:EE,metalnessmap_pars_fragment:ME,morphinstance_vertex:wE,morphcolor_vertex:TE,morphnormal_vertex:bE,morphtarget_pars_vertex:AE,morphtarget_vertex:RE,normal_fragment_begin:CE,normal_fragment_maps:PE,normal_pars_fragment:LE,normal_pars_vertex:DE,normal_vertex:NE,normalmap_pars_fragment:IE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:kE,iridescence_pars_fragment:OE,opaque_fragment:zE,packing:BE,premultiplied_alpha_fragment:GE,project_vertex:HE,dithering_fragment:VE,dithering_pars_fragment:WE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:$E,shadowmap_pars_vertex:YE,shadowmap_vertex:qE,shadowmask_pars_fragment:KE,skinbase_vertex:ZE,skinning_pars_vertex:QE,skinning_vertex:JE,skinnormal_vertex:eM,specularmap_fragment:tM,specularmap_pars_fragment:nM,tonemapping_fragment:iM,tonemapping_pars_fragment:rM,transmission_fragment:sM,transmission_pars_fragment:aM,uv_pars_fragment:oM,uv_pars_vertex:lM,uv_vertex:uM,worldpos_vertex:cM,background_vert:dM,background_frag:hM,backgroundCube_vert:fM,backgroundCube_frag:pM,cube_vert:mM,cube_frag:gM,depth_vert:vM,depth_frag:_M,distanceRGBA_vert:yM,distanceRGBA_frag:xM,equirect_vert:SM,equirect_frag:EM,linedashed_vert:MM,linedashed_frag:wM,meshbasic_vert:TM,meshbasic_frag:bM,meshlambert_vert:AM,meshlambert_frag:RM,meshmatcap_vert:CM,meshmatcap_frag:PM,meshnormal_vert:LM,meshnormal_frag:DM,meshphong_vert:NM,meshphong_frag:IM,meshphysical_vert:UM,meshphysical_frag:FM,meshtoon_vert:kM,meshtoon_frag:OM,points_vert:zM,points_frag:BM,shadow_vert:GM,shadow_frag:HM,sprite_vert:VM,sprite_frag:WM},Be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Yi={basic:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Hn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Hn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Hn([Be.points,Be.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Hn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Hn([Be.common,Be.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Hn([Be.sprite,Be.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Hn([Be.common,Be.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Hn([Be.lights,Be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Yi.physical={uniforms:Hn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const uu={r:0,b:0,g:0},xs=new Er,jM=new Kt;function XM(r,e,t,n,a,o,u){const c=new Ct(0);let h=o===!0?0:1,f,m,g=null,v=0,x=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?t:e).get(w)),w}function M(L){let w=!1;const P=E(L);P===null?y(c,h):P&&P.isColor&&(y(P,1),w=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,w){const P=E(w);P&&(P.isCubeTexture||P.mapping===Fu)?(m===void 0&&(m=new _r(new ko(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:Ta(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),xs.copy(w.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(jM.makeRotationFromEuler(xs)),m.material.toneMapped=It.getTransfer(P.colorSpace)!==kt,(g!==P||v!==P.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=P,v=P.version,x=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(f===void 0&&(f=new _r(new Ou(2,2),new ns({name:"BackgroundMaterial",uniforms:Ta(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=P,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=It.getTransfer(P.colorSpace)!==kt,P.matrixAutoUpdate===!0&&P.updateMatrix(),f.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,g=P,v=P.version,x=r.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function y(L,w){L.getRGB(uu,e_(r)),n.buffers.color.setClear(uu.r,uu.g,uu.b,w,u)}function N(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,w=1){c.set(L),h=w,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,y(c,h)},render:M,addToRenderList:S,dispose:N}}function $M(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},a=v(null);let o=a,u=!1;function c(A,z,k,Y,se){let pe=!1;const ee=g(Y,k,z);o!==ee&&(o=ee,f(o.object)),pe=x(A,Y,k,se),pe&&E(A,Y,k,se),se!==null&&e.update(se,r.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,w(A,z,k,Y),se!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function h(){return r.createVertexArray()}function f(A){return r.bindVertexArray(A)}function m(A){return r.deleteVertexArray(A)}function g(A,z,k){const Y=k.wireframe===!0;let se=n[A.id];se===void 0&&(se={},n[A.id]=se);let pe=se[z.id];pe===void 0&&(pe={},se[z.id]=pe);let ee=pe[Y];return ee===void 0&&(ee=v(h()),pe[Y]=ee),ee}function v(A){const z=[],k=[],Y=[];for(let se=0;se<t;se++)z[se]=0,k[se]=0,Y[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:Y,object:A,attributes:{},index:null}}function x(A,z,k,Y){const se=o.attributes,pe=z.attributes;let ee=0;const de=k.getAttributes();for(const W in de)if(de[W].location>=0){const ae=se[W];let G=pe[W];if(G===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),ae===void 0||ae.attribute!==G||G&&ae.data!==G.data)return!0;ee++}return o.attributesNum!==ee||o.index!==Y}function E(A,z,k,Y){const se={},pe=z.attributes;let ee=0;const de=k.getAttributes();for(const W in de)if(de[W].location>=0){let ae=pe[W];ae===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor));const G={};G.attribute=ae,ae&&ae.data&&(G.data=ae.data),se[W]=G,ee++}o.attributes=se,o.attributesNum=ee,o.index=Y}function M(){const A=o.newAttributes;for(let z=0,k=A.length;z<k;z++)A[z]=0}function S(A){y(A,0)}function y(A,z){const k=o.newAttributes,Y=o.enabledAttributes,se=o.attributeDivisors;k[A]=1,Y[A]===0&&(r.enableVertexAttribArray(A),Y[A]=1),se[A]!==z&&(r.vertexAttribDivisor(A,z),se[A]=z)}function N(){const A=o.newAttributes,z=o.enabledAttributes;for(let k=0,Y=z.length;k<Y;k++)z[k]!==A[k]&&(r.disableVertexAttribArray(k),z[k]=0)}function L(A,z,k,Y,se,pe,ee){ee===!0?r.vertexAttribIPointer(A,z,k,se,pe):r.vertexAttribPointer(A,z,k,Y,se,pe)}function w(A,z,k,Y){M();const se=Y.attributes,pe=k.getAttributes(),ee=z.defaultAttributeValues;for(const de in pe){const W=pe[de];if(W.location>=0){let me=se[de];if(me===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(me=A.instanceColor)),me!==void 0){const ae=me.normalized,G=me.itemSize,re=e.get(me);if(re===void 0)continue;const Ie=re.buffer,te=re.type,Z=re.bytesPerElement,ve=te===r.INT||te===r.UNSIGNED_INT||me.gpuType===df;if(me.isInterleavedBufferAttribute){const Ee=me.data,fe=Ee.stride,Ye=me.offset;if(Ee.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)y(W.location+Fe,Ee.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)S(W.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Fe=0;Fe<W.locationSize;Fe++)L(W.location+Fe,G/W.locationSize,te,ae,fe*Z,(Ye+G/W.locationSize*Fe)*Z,ve)}else{if(me.isInstancedBufferAttribute){for(let Ee=0;Ee<W.locationSize;Ee++)y(W.location+Ee,me.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)S(W.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Ee=0;Ee<W.locationSize;Ee++)L(W.location+Ee,G/W.locationSize,te,ae,G*Z,G/W.locationSize*Ee*Z,ve)}}else if(ee!==void 0){const ae=ee[de];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(W.location,ae);break;case 3:r.vertexAttrib3fv(W.location,ae);break;case 4:r.vertexAttrib4fv(W.location,ae);break;default:r.vertexAttrib1fv(W.location,ae)}}}}N()}function P(){O();for(const A in n){const z=n[A];for(const k in z){const Y=z[k];for(const se in Y)m(Y[se].object),delete Y[se];delete z[k]}delete n[A]}}function I(A){if(n[A.id]===void 0)return;const z=n[A.id];for(const k in z){const Y=z[k];for(const se in Y)m(Y[se].object),delete Y[se];delete z[k]}delete n[A.id]}function D(A){for(const z in n){const k=n[z];if(k[A.id]===void 0)continue;const Y=k[A.id];for(const se in Y)m(Y[se].object),delete Y[se];delete k[A.id]}}function O(){R(),u=!0,o!==a&&(o=a,f(o.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:O,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:S,disableUnusedAttributes:N}}function YM(r,e,t){let n;function a(f){n=f}function o(f,m){r.drawArrays(n,f,m),t.update(m,n,1)}function u(f,m,g){g!==0&&(r.drawArraysInstanced(n,f,m,g),t.update(m,n,g))}function c(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,g);let x=0;for(let E=0;E<g;E++)x+=m[E];t.update(x,n,1)}function h(f,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<f.length;E++)u(f[E],m[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];t.update(E,n,1)}}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function qM(r,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(D){return!(D!==Gi&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const O=D===Do&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Sr&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==gr&&!O)}function h(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:P,maxSamples:I}}function KM(r){const e=this;let t=null,n=0,a=!1,o=!1;const u=new ws,c=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||n!==0||a;return a=v,n=g.length,x},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,y=r.get(g);if(!a||E===null||E.length===0||o&&!S)o?m(null):f();else{const N=o?0:n,L=N*4;let w=y.clippingState||null;h.value=w,w=m(E,v,L,x);for(let P=0;P!==L;++P)w[P]=t[P];y.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=N}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,v,x,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=h.value,E!==!0||S===null){const y=x+M*4,N=v.matrixWorldInverse;c.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,w=x;L!==M;++L,w+=4)u.copy(g[L]).applyMatrix4(N,c),u.normal.toArray(S,w),S[w+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function ZM(r){let e=new WeakMap;function t(u,c){return c===Sh?u.mapping=Ea:c===Eh&&(u.mapping=Ma),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Sh||c===Eh)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const f=new eS(h.height);return f.fromEquirectangularTexture(r,u),e.set(u,f),u.addEventListener("dispose",a),t(f.texture,u.mapping)}else return null}}return u}function a(u){const c=u.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const ga=4,Fg=[.125,.215,.35,.446,.526,.582],As=20,Yd=new oS,kg=new Ct;let qd=null,Kd=0,Zd=0,Qd=!1;const Ts=(1+Math.sqrt(5))/2,fa=1/Ts,Og=[new le(-Ts,fa,0),new le(Ts,fa,0),new le(-fa,0,Ts),new le(fa,0,Ts),new le(0,Ts,-fa),new le(0,Ts,fa),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)],QM=new le;class zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,o={}){const{size:u=256,position:c=QM}=o;qd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,a,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qd,Kd,Zd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,cu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ea||e.mapping===Ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:Do,format:Gi,colorSpace:wa,depthBuffer:!1},a=Bg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JM(o)),this._blurMaterial=ew(o,e,t)}return a}_compileMaterial(e){const t=new _r(this._lodPlanes[0],e);this._renderer.compile(t,Yd)}_sceneToCubeUV(e,t,n,a,o){const h=new ci(90,1,t,n),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(kg),g.toneMapping=Jr,g.autoClear=!1;const E=new Zv({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),M=new _r(new ko,E);let S=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,S=!0):(E.color.copy(kg),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(h.up.set(0,f[N],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+m[N],o.y,o.z)):L===1?(h.up.set(0,0,f[N]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+m[N],o.z)):(h.up.set(0,f[N],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+m[N]));const w=this._cubeSize;cu(a,L*w,N>2?w:0,w,w),g.setRenderTarget(a),S&&g.render(M,h),g.render(e,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ea||e.mapping===Ma;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const o=a?this._cubemapMaterial:this._equirectMaterial,u=new _r(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;cu(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(u,Yd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=Og[(a-o-1)%Og.length];this._blur(e,o-1,o,u,c)}t.autoClear=n}_blur(e,t,n,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,a,"latitudinal",o),this._halfBlur(u,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,u,c){const h=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new _r(this._lodPlanes[a],f),v=f.uniforms,x=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*As-1),M=o/E,S=isFinite(o)?1+Math.floor(m*M):As;S>As&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${As}`);const y=[];let N=0;for(let D=0;D<As;++D){const O=D/M,R=Math.exp(-O*O/2);y.push(R),D===0?N+=R:D<S&&(N+=2*R)}for(let D=0;D<y.length;D++)y[D]=y[D]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-n;const w=this._sizeLods[a],P=3*w*(a>L-ga?a-L+ga:0),I=4*(this._cubeSize-w);cu(t,P,I,3*w,2*w),h.setRenderTarget(t),h.render(g,Yd)}}function JM(r){const e=[],t=[],n=[];let a=r;const o=r-ga+1+Fg.length;for(let u=0;u<o;u++){const c=Math.pow(2,a);t.push(c);let h=1/c;u>r-ga?h=Fg[u-r+ga-1]:u===0&&(h=0),n.push(h);const f=1/(c-2),m=-f,g=1+f,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,E=6,M=3,S=2,y=1,N=new Float32Array(M*E*x),L=new Float32Array(S*E*x),w=new Float32Array(y*E*x);for(let I=0;I<x;I++){const D=I%3*2/3-1,O=I>2?0:-1,R=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];N.set(R,M*E*I),L.set(v,S*E*I);const A=[I,I,I,I,I,I];w.set(A,y*E*I)}const P=new di;P.setAttribute("position",new Vn(N,M)),P.setAttribute("uv",new Vn(L,S)),P.setAttribute("faceIndex",new Vn(w,y)),e.push(P),a>ga&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bg(r,e,t){const n=new Ls(r,e,t);return n.texture.mapping=Fu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cu(r,e,t,n,a){r.viewport.set(e,t,n,a),r.scissor.set(e,t,n,a)}function ew(r,e,t){const n=new Float32Array(As),a=new le(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Gg(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Hg(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tw(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===Sh||h===Eh,m=h===Ea||h===Ma;if(f||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new zg(r)),g=f?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return f&&x&&x.height>0||m&&x&&a(x)?(t===null&&(t=new zg(r)),g=f?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",o),g.texture):null}}}return c}function a(c){let h=0;const f=6;for(let m=0;m<f;m++)c[m]!==void 0&&h++;return h===f}function o(c){const h=c.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function nw(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Au("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function iw(r,e,t,n){const a={},o=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete a[v.id];const x=o.get(v);x&&(e.remove(x),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function f(g){const v=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const N=x.array;M=x.version;for(let L=0,w=N.length;L<w;L+=3){const P=N[L+0],I=N[L+1],D=N[L+2];v.push(P,I,I,D,D,P)}}else if(E!==void 0){const N=E.array;M=E.version;for(let L=0,w=N.length/3-1;L<w;L+=3){const P=L+0,I=L+1,D=L+2;v.push(P,I,I,D,D,P)}}else return;const S=new(Yv(v)?Jv:Qv)(v,1);S.version=M;const y=o.get(g);y&&e.remove(y),o.set(g,S)}function m(g){const v=o.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&f(g)}else f(g);return o.get(g)}return{get:c,update:h,getWireframeAttribute:m}}function rw(r,e,t){let n;function a(v){n=v}let o,u;function c(v){o=v.type,u=v.bytesPerElement}function h(v,x){r.drawElements(n,x,o,v*u),t.update(x,n,1)}function f(v,x,E){E!==0&&(r.drawElementsInstanced(n,x,o,v*u,E),t.update(x,n,E))}function m(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,o,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];t.update(S,n,1)}function g(v,x,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)f(v[y]/u,x[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(n,x,0,o,v,0,M,0,E);let y=0;for(let N=0;N<E;N++)y+=x[N]*M[N];t.update(y,n,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function sw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(o/3);break;case r.LINES:t.lines+=c*(o/2);break;case r.LINE_STRIP:t.lines+=c*(o-1);break;case r.LINE_LOOP:t.lines+=c*o;break;case r.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function aw(r,e,t){const n=new WeakMap,a=new sn;function o(u,c,h){const f=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=n.get(c);if(v===void 0||v.count!==g){let A=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",A)};var x=A;v!==void 0&&v.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],N=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let w=0;E===!0&&(w=1),M===!0&&(w=2),S===!0&&(w=3);let P=c.attributes.position.count*w,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*I*4*g),O=new qv(D,P,I,g);O.type=gr,O.needsUpdate=!0;const R=w*4;for(let z=0;z<g;z++){const k=y[z],Y=N[z],se=L[z],pe=P*I*4*z;for(let ee=0;ee<k.count;ee++){const de=ee*R;E===!0&&(a.fromBufferAttribute(k,ee),D[pe+de+0]=a.x,D[pe+de+1]=a.y,D[pe+de+2]=a.z,D[pe+de+3]=0),M===!0&&(a.fromBufferAttribute(Y,ee),D[pe+de+4]=a.x,D[pe+de+5]=a.y,D[pe+de+6]=a.z,D[pe+de+7]=0),S===!0&&(a.fromBufferAttribute(se,ee),D[pe+de+8]=a.x,D[pe+de+9]=a.y,D[pe+de+10]=a.z,D[pe+de+11]=se.itemSize===4?a.w:1)}}v={count:g,texture:O,size:new Ot(P,I)},n.set(c,v),c.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<f.length;S++)E+=f[S];const M=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:o}}function ow(r,e,t,n){let a=new WeakMap;function o(h){const f=n.render.frame,m=h.geometry,g=e.get(h,m);if(a.get(g)!==f&&(e.update(g),a.set(g,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,f))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==f&&(v.update(),a.set(v,f))}return g}function u(){a=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:u}}const c_=new ni,Vg=new o_(1,1),d_=new qv,h_=new kx,f_=new n_,Wg=[],jg=[],Xg=new Float32Array(16),$g=new Float32Array(9),Yg=new Float32Array(4);function Pa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const a=e*t;let o=Wg[a];if(o===void 0&&(o=new Float32Array(a),Wg[a]=o),e!==0){n.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(o,c)}return o}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function zu(r,e){let t=jg[e];t===void 0&&(t=new Int32Array(e),jg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function lw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function cw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function dw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function hw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Yg.set(n),r.uniformMatrix2fv(this.addr,!1,Yg),fn(t,n)}}function fw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;$g.set(n),r.uniformMatrix3fv(this.addr,!1,$g),fn(t,n)}}function pw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Xg.set(n),r.uniformMatrix4fv(this.addr,!1,Xg),fn(t,n)}}function mw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function vw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function _w(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function yw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function xw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function Sw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function Ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function Mw(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(Vg.compareFunction=$v,o=Vg):o=c_,t.setTexture2D(e||o,a)}function ww(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||h_,a)}function Tw(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||f_,a)}function bw(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||d_,a)}function Aw(r){switch(r){case 5126:return lw;case 35664:return uw;case 35665:return cw;case 35666:return dw;case 35674:return hw;case 35675:return fw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return _w;case 5125:return yw;case 36294:return xw;case 36295:return Sw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return bw}}function Rw(r,e){r.uniform1fv(this.addr,e)}function Cw(r,e){const t=Pa(e,this.size,2);r.uniform2fv(this.addr,t)}function Pw(r,e){const t=Pa(e,this.size,3);r.uniform3fv(this.addr,t)}function Lw(r,e){const t=Pa(e,this.size,4);r.uniform4fv(this.addr,t)}function Dw(r,e){const t=Pa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Nw(r,e){const t=Pa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Iw(r,e){const t=Pa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Uw(r,e){r.uniform1iv(this.addr,e)}function Fw(r,e){r.uniform2iv(this.addr,e)}function kw(r,e){r.uniform3iv(this.addr,e)}function Ow(r,e){r.uniform4iv(this.addr,e)}function zw(r,e){r.uniform1uiv(this.addr,e)}function Bw(r,e){r.uniform2uiv(this.addr,e)}function Gw(r,e){r.uniform3uiv(this.addr,e)}function Hw(r,e){r.uniform4uiv(this.addr,e)}function Vw(r,e,t){const n=this.cache,a=e.length,o=zu(t,a);hn(n,o)||(r.uniform1iv(this.addr,o),fn(n,o));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||c_,o[u])}function Ww(r,e,t){const n=this.cache,a=e.length,o=zu(t,a);hn(n,o)||(r.uniform1iv(this.addr,o),fn(n,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||h_,o[u])}function jw(r,e,t){const n=this.cache,a=e.length,o=zu(t,a);hn(n,o)||(r.uniform1iv(this.addr,o),fn(n,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||f_,o[u])}function Xw(r,e,t){const n=this.cache,a=e.length,o=zu(t,a);hn(n,o)||(r.uniform1iv(this.addr,o),fn(n,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||d_,o[u])}function $w(r){switch(r){case 5126:return Rw;case 35664:return Cw;case 35665:return Pw;case 35666:return Lw;case 35674:return Dw;case 35675:return Nw;case 35676:return Iw;case 5124:case 35670:return Uw;case 35667:case 35671:return Fw;case 35668:case 35672:return kw;case 35669:case 35673:return Ow;case 5125:return zw;case 36294:return Bw;case 36295:return Gw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Xw}}class Yw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Aw(t.type)}}class qw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$w(t.type)}}class Kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const c=a[o];c.setValue(e,t[c.id],n)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function qg(r,e){r.seq.push(e),r.map[e.id]=e}function Zw(r,e,t){const n=r.name,a=n.length;for(Jd.lastIndex=0;;){const o=Jd.exec(n),u=Jd.lastIndex;let c=o[1];const h=o[2]==="]",f=o[3];if(h&&(c=c|0),f===void 0||f==="["&&u+2===a){qg(t,f===void 0?new Yw(c,r,e):new qw(c,r,e));break}else{let g=t.map[c];g===void 0&&(g=new Kw(c),qg(t,g)),t=g}}}class Ru{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);Zw(o,u,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,u=t.length;o!==u;++o){const c=t[o],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&n.push(u)}return n}}function Kg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Qw=37297;let Jw=0;function eT(r,e){const t=r.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const Zg=new xt;function tT(r){It._getMatrix(Zg,It.workingColorSpace,r);const e=`mat3( ${Zg.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(r)){case Lu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+eT(r.getShaderSource(e),u)}else return a}function nT(r,e){const t=tT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iT(r,e){let t;switch(e){case lx:t="Linear";break;case ux:t="Reinhard";break;case cx:t="Cineon";break;case dx:t="ACESFilmic";break;case fx:t="AgX";break;case px:t="Neutral";break;case hx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const du=new le;function rT(){It.getLuminanceCoefficients(du);const r=du.x.toFixed(4),e=du.y.toFixed(4),t=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function aT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=r.getActiveAttrib(e,a),u=o.name;let c=1;o.type===r.FLOAT_MAT2&&(c=2),o.type===r.FLOAT_MAT3&&(c=3),o.type===r.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function To(r){return r!==""}function Jg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ev(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(r){return r.replace(lT,cT)}const uT=new Map;function cT(r,e){let t=St[e];if(t===void 0){const n=uT.get(e);if(n!==void 0)t=St[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ef(t)}const dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(r){return r.replace(dT,hT)}function hT(r,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function nv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===G0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function pT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ea:case Ma:e="ENVMAP_TYPE_CUBE";break;case Fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ma:e="ENVMAP_MODE_REFRACTION";break}return e}function gT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kv:e="ENVMAP_BLENDING_MULTIPLY";break;case ax:e="ENVMAP_BLENDING_MIX";break;case ox:e="ENVMAP_BLENDING_ADD";break}return e}function vT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _T(r,e,t,n){const a=r.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=fT(t),f=pT(t),m=mT(t),g=gT(t),v=vT(t),x=sT(t),E=aT(o),M=a.createProgram();let S,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(To).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(To).join(`
`),y.length>0&&(y+=`
`)):(S=[nv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),y=[nv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jr?"#define TONE_MAPPING":"",t.toneMapping!==Jr?St.tonemapping_pars_fragment:"",t.toneMapping!==Jr?iT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,nT("linearToOutputTexel",t.outputColorSpace),rT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),u=ef(u),u=Jg(u,t),u=ev(u,t),c=ef(c),c=Jg(c,t),c=ev(c,t),u=tv(u),c=tv(c),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=N+S+u,w=N+y+c,P=Kg(a,a.VERTEX_SHADER,L),I=Kg(a,a.FRAGMENT_SHADER,w);a.attachShader(M,P),a.attachShader(M,I),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function D(z){if(r.debug.checkShaderErrors){const k=a.getProgramInfoLog(M).trim(),Y=a.getShaderInfoLog(P).trim(),se=a.getShaderInfoLog(I).trim();let pe=!0,ee=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,M,P,I);else{const de=Qg(a,P,"vertex"),W=Qg(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+k+`
`+de+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(Y===""||se==="")&&(ee=!1);ee&&(z.diagnostics={runnable:pe,programLog:k,vertexShader:{log:Y,prefix:S},fragmentShader:{log:se,prefix:y}})}a.deleteShader(P),a.deleteShader(I),O=new Ru(a,M),R=oT(a,M)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(M,Qw)),A},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=I,this}let yT=0;class xT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ST(e),t.set(e,n)),n}}class ST{constructor(e){this.id=yT++,this.code=e,this.usedTimes=0}}function ET(r,e,t,n,a,o,u){const c=new _f,h=new xT,f=new Set,m=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let x=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return f.add(R),R===0?"uv":`uv${R}`}function S(R,A,z,k,Y){const se=k.fog,pe=Y.geometry,ee=R.isMeshStandardMaterial?k.environment:null,de=(R.isMeshStandardMaterial?t:e).get(R.envMap||ee),W=de&&de.mapping===Fu?de.image.height:null,me=E[R.type];R.precision!==null&&(x=a.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const ae=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,G=ae!==void 0?ae.length:0;let re=0;pe.morphAttributes.position!==void 0&&(re=1),pe.morphAttributes.normal!==void 0&&(re=2),pe.morphAttributes.color!==void 0&&(re=3);let Ie,te,Z,ve;if(me){const pt=Yi[me];Ie=pt.vertexShader,te=pt.fragmentShader}else Ie=R.vertexShader,te=R.fragmentShader,h.update(R),Z=h.getVertexShaderID(R),ve=h.getFragmentShaderID(R);const Ee=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),Ye=Y.isInstancedMesh===!0,Fe=Y.isBatchedMesh===!0,ft=!!R.map,Pt=!!R.matcap,vt=!!de,V=!!R.aoMap,Zt=!!R.lightMap,_t=!!R.bumpMap,Ge=!!R.normalMap,tt=!!R.displacementMap,At=!!R.emissiveMap,qe=!!R.metalnessMap,F=!!R.roughnessMap,b=R.anisotropy>0,ne=R.clearcoat>0,Se=R.dispersion>0,Me=R.iridescence>0,ye=R.sheen>0,Xe=R.transmission>0,Oe=b&&!!R.anisotropyMap,st=ne&&!!R.clearcoatMap,rt=ne&&!!R.clearcoatNormalMap,Ae=ne&&!!R.clearcoatRoughnessMap,He=Me&&!!R.iridescenceMap,at=Me&&!!R.iridescenceThicknessMap,H=ye&&!!R.sheenColorMap,ge=ye&&!!R.sheenRoughnessMap,xe=!!R.specularMap,we=!!R.specularColorMap,he=!!R.specularIntensityMap,X=Xe&&!!R.transmissionMap,De=Xe&&!!R.thicknessMap,ue=!!R.gradientMap,_e=!!R.alphaMap,ke=R.alphaTest>0,Ne=!!R.alphaHash,lt=!!R.extensions;let Mt=Jr;R.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Mt=r.toneMapping);const Ft={shaderID:me,shaderType:R.type,shaderName:R.name,vertexShader:Ie,fragmentShader:te,defines:R.defines,customVertexShaderID:Z,customFragmentShaderID:ve,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:Fe,batchingColor:Fe&&Y._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&Y.instanceColor!==null,instancingMorph:Ye&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:wa,alphaToCoverage:!!R.alphaToCoverage,map:ft,matcap:Pt,envMap:vt,envMapMode:vt&&de.mapping,envMapCubeUVHeight:W,aoMap:V,lightMap:Zt,bumpMap:_t,normalMap:Ge,displacementMap:v&&tt,emissiveMap:At,normalMapObjectSpace:Ge&&R.normalMapType===yx,normalMapTangentSpace:Ge&&R.normalMapType===_x,metalnessMap:qe,roughnessMap:F,anisotropy:b,anisotropyMap:Oe,clearcoat:ne,clearcoatMap:st,clearcoatNormalMap:rt,clearcoatRoughnessMap:Ae,dispersion:Se,iridescence:Me,iridescenceMap:He,iridescenceThicknessMap:at,sheen:ye,sheenColorMap:H,sheenRoughnessMap:ge,specularMap:xe,specularColorMap:we,specularIntensityMap:he,transmission:Xe,transmissionMap:X,thicknessMap:De,gradientMap:ue,opaque:R.transparent===!1&&R.blending===_a&&R.alphaToCoverage===!1,alphaMap:_e,alphaTest:ke,alphaHash:Ne,combine:R.combine,mapUv:ft&&M(R.map.channel),aoMapUv:V&&M(R.aoMap.channel),lightMapUv:Zt&&M(R.lightMap.channel),bumpMapUv:_t&&M(R.bumpMap.channel),normalMapUv:Ge&&M(R.normalMap.channel),displacementMapUv:tt&&M(R.displacementMap.channel),emissiveMapUv:At&&M(R.emissiveMap.channel),metalnessMapUv:qe&&M(R.metalnessMap.channel),roughnessMapUv:F&&M(R.roughnessMap.channel),anisotropyMapUv:Oe&&M(R.anisotropyMap.channel),clearcoatMapUv:st&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:rt&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:at&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:H&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:ge&&M(R.sheenRoughnessMap.channel),specularMapUv:xe&&M(R.specularMap.channel),specularColorMapUv:we&&M(R.specularColorMap.channel),specularIntensityMapUv:he&&M(R.specularIntensityMap.channel),transmissionMapUv:X&&M(R.transmissionMap.channel),thicknessMapUv:De&&M(R.thicknessMap.channel),alphaMapUv:_e&&M(R.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Ge||b),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!pe.attributes.uv&&(ft||_e),fog:!!se,useFog:R.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:fe,skinning:Y.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ft&&R.map.isVideoTexture===!0&&It.getTransfer(R.map.colorSpace)===kt,decodeVideoTextureEmissive:At&&R.emissiveMap.isVideoTexture===!0&&It.getTransfer(R.emissiveMap.colorSpace)===kt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===pr,flipSided:R.side===ti,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:lt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&R.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ft.vertexUv1s=f.has(1),Ft.vertexUv2s=f.has(2),Ft.vertexUv3s=f.has(3),f.clear(),Ft}function y(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)A.push(z),A.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(N(A,R),L(A,R),A.push(r.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function N(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function L(R,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),R.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),R.push(c.mask)}function w(R){const A=E[R.type];let z;if(A){const k=Yi[A];z=Kx.clone(k.uniforms)}else z=R.uniforms;return z}function P(R,A){let z;for(let k=0,Y=m.length;k<Y;k++){const se=m[k];if(se.cacheKey===A){z=se,++z.usedTimes;break}}return z===void 0&&(z=new _T(r,A,R,o),m.push(z)),z}function I(R){if(--R.usedTimes===0){const A=m.indexOf(R);m[A]=m[m.length-1],m.pop(),R.destroy()}}function D(R){h.remove(R)}function O(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:P,releaseProgram:I,releaseShaderCache:D,programs:m,dispose:O}}function MT(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let c=r.get(u);return c===void 0&&(c={},r.set(u,c)),c}function n(u){r.delete(u)}function a(u,c,h){r.get(u)[c]=h}function o(){r=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function wT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function iv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rv(){const r=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function u(g,v,x,E,M,S){let y=r[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},r[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=S),e++,y}function c(g,v,x,E,M,S){const y=u(g,v,x,E,M,S);x.transmission>0?n.push(y):x.transparent===!0?a.push(y):t.push(y)}function h(g,v,x,E,M,S){const y=u(g,v,x,E,M,S);x.transmission>0?n.unshift(y):x.transparent===!0?a.unshift(y):t.unshift(y)}function f(g,v){t.length>1&&t.sort(g||wT),n.length>1&&n.sort(v||iv),a.length>1&&a.sort(v||iv)}function m(){for(let g=e,v=r.length;g<v;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:c,unshift:h,finish:m,sort:f}}function TT(){let r=new WeakMap;function e(n,a){const o=r.get(n);let u;return o===void 0?(u=new rv,r.set(n,[u])):a>=o.length?(u=new rv,o.push(u)):u=o[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function bT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new Ct};break;case"SpotLight":t={position:new le,direction:new le,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=t,t}}}function AT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let RT=0;function CT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function PT(r){const e=new bT,t=AT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new le);const a=new le,o=new Kt,u=new Kt;function c(f){let m=0,g=0,v=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let x=0,E=0,M=0,S=0,y=0,N=0,L=0,w=0,P=0,I=0,D=0;f.sort(CT);for(let R=0,A=f.length;R<A;R++){const z=f[R],k=z.color,Y=z.intensity,se=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=k.r*Y,g+=k.g*Y,v+=k.b*Y;else if(z.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(z.sh.coefficients[ee],Y);D++}else if(z.isDirectionalLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const de=z.shadow,W=t.get(z);W.shadowIntensity=de.intensity,W.shadowBias=de.bias,W.shadowNormalBias=de.normalBias,W.shadowRadius=de.radius,W.shadowMapSize=de.mapSize,n.directionalShadow[x]=W,n.directionalShadowMap[x]=pe,n.directionalShadowMatrix[x]=z.shadow.matrix,N++}n.directional[x]=ee,x++}else if(z.isSpotLight){const ee=e.get(z);ee.position.setFromMatrixPosition(z.matrixWorld),ee.color.copy(k).multiplyScalar(Y),ee.distance=se,ee.coneCos=Math.cos(z.angle),ee.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ee.decay=z.decay,n.spot[M]=ee;const de=z.shadow;if(z.map&&(n.spotLightMap[P]=z.map,P++,de.updateMatrices(z),z.castShadow&&I++),n.spotLightMatrix[M]=de.matrix,z.castShadow){const W=t.get(z);W.shadowIntensity=de.intensity,W.shadowBias=de.bias,W.shadowNormalBias=de.normalBias,W.shadowRadius=de.radius,W.shadowMapSize=de.mapSize,n.spotShadow[M]=W,n.spotShadowMap[M]=pe,w++}M++}else if(z.isRectAreaLight){const ee=e.get(z);ee.color.copy(k).multiplyScalar(Y),ee.halfWidth.set(z.width*.5,0,0),ee.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=ee,S++}else if(z.isPointLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),ee.distance=z.distance,ee.decay=z.decay,z.castShadow){const de=z.shadow,W=t.get(z);W.shadowIntensity=de.intensity,W.shadowBias=de.bias,W.shadowNormalBias=de.normalBias,W.shadowRadius=de.radius,W.shadowMapSize=de.mapSize,W.shadowCameraNear=de.camera.near,W.shadowCameraFar=de.camera.far,n.pointShadow[E]=W,n.pointShadowMap[E]=pe,n.pointShadowMatrix[E]=z.shadow.matrix,L++}n.point[E]=ee,E++}else if(z.isHemisphereLight){const ee=e.get(z);ee.skyColor.copy(z.color).multiplyScalar(Y),ee.groundColor.copy(z.groundColor).multiplyScalar(Y),n.hemi[y]=ee,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=v;const O=n.hash;(O.directionalLength!==x||O.pointLength!==E||O.spotLength!==M||O.rectAreaLength!==S||O.hemiLength!==y||O.numDirectionalShadows!==N||O.numPointShadows!==L||O.numSpotShadows!==w||O.numSpotMaps!==P||O.numLightProbes!==D)&&(n.directional.length=x,n.spot.length=M,n.rectArea.length=S,n.point.length=E,n.hemi.length=y,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=w+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,O.directionalLength=x,O.pointLength=E,O.spotLength=M,O.rectAreaLength=S,O.hemiLength=y,O.numDirectionalShadows=N,O.numPointShadows=L,O.numSpotShadows=w,O.numSpotMaps=P,O.numLightProbes=D,n.version=RT++)}function h(f,m){let g=0,v=0,x=0,E=0,M=0;const S=m.matrixWorldInverse;for(let y=0,N=f.length;y<N;y++){const L=f[y];if(L.isDirectionalLight){const w=n.directional[g];w.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(S),g++}else if(L.isSpotLight){const w=n.spot[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const w=n.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),u.identity(),o.copy(L.matrixWorld),o.premultiply(S),u.extractRotation(o),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const w=n.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(S),M++}}}return{setup:c,setupView:h,state:n}}function sv(r){const e=new PT(r),t=[],n=[];function a(m){f.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function u(m){n.push(m)}function c(){e.setup(t)}function h(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:u}}function LT(r){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let c;return u===void 0?(c=new sv(r),e.set(a,[c])):o>=u.length?(c=new sv(r),u.push(c)):c=u[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const DT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IT(r,e,t){let n=new r_;const a=new Ot,o=new Ot,u=new sn,c=new rS({depthPacking:vx}),h=new sS,f={},m=t.maxTextureSize,g={[ts]:ti,[ti]:ts,[pr]:pr},v=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:DT,fragmentShader:NT}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new di;E.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new _r(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fv;let y=this.type;this.render=function(I,D,O){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const R=r.getRenderTarget(),A=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Qr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Y=y!==hr&&this.type===hr,se=y===hr&&this.type!==hr;for(let pe=0,ee=I.length;pe<ee;pe++){const de=I[pe],W=de.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const me=W.getFrameExtents();if(a.multiply(me),o.copy(W.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(o.x=Math.floor(m/me.x),a.x=o.x*me.x,W.mapSize.x=o.x),a.y>m&&(o.y=Math.floor(m/me.y),a.y=o.y*me.y,W.mapSize.y=o.y)),W.map===null||Y===!0||se===!0){const G=this.type!==hr?{minFilter:Hi,magFilter:Hi}:{};W.map!==null&&W.map.dispose(),W.map=new Ls(a.x,a.y,G),W.map.texture.name=de.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ae=W.getViewportCount();for(let G=0;G<ae;G++){const re=W.getViewport(G);u.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),k.viewport(u),W.updateMatrices(de,G),n=W.getFrustum(),w(D,O,W.camera,de,this.type)}W.isPointLightShadow!==!0&&this.type===hr&&N(W,O),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(R,A,z)};function N(I,D){const O=e.update(M);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ls(a.x,a.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(D,null,O,v,M,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(D,null,O,x,M,null)}function L(I,D,O,R){let A=null;const z=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)A=z;else if(A=O.isPointLight===!0?h:c,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=A.uuid,Y=D.uuid;let se=f[k];se===void 0&&(se={},f[k]=se);let pe=se[Y];pe===void 0&&(pe=A.clone(),se[Y]=pe,D.addEventListener("dispose",P)),A=pe}if(A.visible=D.visible,A.wireframe=D.wireframe,R===hr?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:g[D.side],A.alphaMap=D.alphaMap,A.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,A.map=D.map,A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.displacementMap=D.displacementMap,A.displacementScale=D.displacementScale,A.displacementBias=D.displacementBias,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=r.properties.get(A);k.light=O}return A}function w(I,D,O,R,A){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===hr)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const Y=e.update(I),se=I.material;if(Array.isArray(se)){const pe=Y.groups;for(let ee=0,de=pe.length;ee<de;ee++){const W=pe[ee],me=se[W.materialIndex];if(me&&me.visible){const ae=L(I,me,R,A);I.onBeforeShadow(r,I,D,O,Y,ae,W),r.renderBufferDirect(O,null,Y,ae,I,W),I.onAfterShadow(r,I,D,O,Y,ae,W)}}}else if(se.visible){const pe=L(I,se,R,A);I.onBeforeShadow(r,I,D,O,Y,pe,null),r.renderBufferDirect(O,null,Y,pe,I,null),I.onAfterShadow(r,I,D,O,Y,pe,null)}}const k=I.children;for(let Y=0,se=k.length;Y<se;Y++)w(k[Y],D,O,R,A)}function P(I){I.target.removeEventListener("dispose",P);for(const O in f){const R=f[O],A=I.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const UT={[ph]:mh,[gh]:yh,[vh]:xh,[Sa]:_h,[mh]:ph,[yh]:gh,[xh]:vh,[_h]:Sa};function FT(r,e){function t(){let X=!1;const De=new sn;let ue=null;const _e=new sn(0,0,0,0);return{setMask:function(ke){ue!==ke&&!X&&(r.colorMask(ke,ke,ke,ke),ue=ke)},setLocked:function(ke){X=ke},setClear:function(ke,Ne,lt,Mt,Ft){Ft===!0&&(ke*=Mt,Ne*=Mt,lt*=Mt),De.set(ke,Ne,lt,Mt),_e.equals(De)===!1&&(r.clearColor(ke,Ne,lt,Mt),_e.copy(De))},reset:function(){X=!1,ue=null,_e.set(-1,0,0,0)}}}function n(){let X=!1,De=!1,ue=null,_e=null,ke=null;return{setReversed:function(Ne){if(De!==Ne){const lt=e.get("EXT_clip_control");Ne?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),De=Ne;const Mt=ke;ke=null,this.setClear(Mt)}},getReversed:function(){return De},setTest:function(Ne){Ne?Ee(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(Ne){ue!==Ne&&!X&&(r.depthMask(Ne),ue=Ne)},setFunc:function(Ne){if(De&&(Ne=UT[Ne]),_e!==Ne){switch(Ne){case ph:r.depthFunc(r.NEVER);break;case mh:r.depthFunc(r.ALWAYS);break;case gh:r.depthFunc(r.LESS);break;case Sa:r.depthFunc(r.LEQUAL);break;case vh:r.depthFunc(r.EQUAL);break;case _h:r.depthFunc(r.GEQUAL);break;case yh:r.depthFunc(r.GREATER);break;case xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_e=Ne}},setLocked:function(Ne){X=Ne},setClear:function(Ne){ke!==Ne&&(De&&(Ne=1-Ne),r.clearDepth(Ne),ke=Ne)},reset:function(){X=!1,ue=null,_e=null,ke=null,De=!1}}}function a(){let X=!1,De=null,ue=null,_e=null,ke=null,Ne=null,lt=null,Mt=null,Ft=null;return{setTest:function(pt){X||(pt?Ee(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(pt){De!==pt&&!X&&(r.stencilMask(pt),De=pt)},setFunc:function(pt,Qt,$t){(ue!==pt||_e!==Qt||ke!==$t)&&(r.stencilFunc(pt,Qt,$t),ue=pt,_e=Qt,ke=$t)},setOp:function(pt,Qt,$t){(Ne!==pt||lt!==Qt||Mt!==$t)&&(r.stencilOp(pt,Qt,$t),Ne=pt,lt=Qt,Mt=$t)},setLocked:function(pt){X=pt},setClear:function(pt){Ft!==pt&&(r.clearStencil(pt),Ft=pt)},reset:function(){X=!1,De=null,ue=null,_e=null,ke=null,Ne=null,lt=null,Mt=null,Ft=null}}}const o=new t,u=new n,c=new a,h=new WeakMap,f=new WeakMap;let m={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,N=null,L=null,w=null,P=null,I=null,D=new Ct(0,0,0),O=0,R=!1,A=null,z=null,k=null,Y=null,se=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,de=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(W)[1]),ee=de>=1):W.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ee=de>=2);let me=null,ae={};const G=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Ie=new sn().fromArray(G),te=new sn().fromArray(re);function Z(X,De,ue,_e){const ke=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(X,Ne),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<ue;lt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,_e,0,r.RGBA,r.UNSIGNED_BYTE,ke):r.texImage2D(De+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ke);return Ne}const ve={};ve[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Ee(r.DEPTH_TEST),u.setFunc(Sa),_t(!1),Ge(sg),Ee(r.CULL_FACE),V(Qr);function Ee(X){m[X]!==!0&&(r.enable(X),m[X]=!0)}function fe(X){m[X]!==!1&&(r.disable(X),m[X]=!1)}function Ye(X,De){return g[X]!==De?(r.bindFramebuffer(X,De),g[X]=De,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=De),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=De),!0):!1}function Fe(X,De){let ue=x,_e=!1;if(X){ue=v.get(De),ue===void 0&&(ue=[],v.set(De,ue));const ke=X.textures;if(ue.length!==ke.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,lt=ke.length;Ne<lt;Ne++)ue[Ne]=r.COLOR_ATTACHMENT0+Ne;ue.length=ke.length,_e=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,_e=!0);_e&&r.drawBuffers(ue)}function ft(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Pt={[bs]:r.FUNC_ADD,[V0]:r.FUNC_SUBTRACT,[W0]:r.FUNC_REVERSE_SUBTRACT};Pt[j0]=r.MIN,Pt[X0]=r.MAX;const vt={[$0]:r.ZERO,[Y0]:r.ONE,[q0]:r.SRC_COLOR,[hh]:r.SRC_ALPHA,[tx]:r.SRC_ALPHA_SATURATE,[J0]:r.DST_COLOR,[Z0]:r.DST_ALPHA,[K0]:r.ONE_MINUS_SRC_COLOR,[fh]:r.ONE_MINUS_SRC_ALPHA,[ex]:r.ONE_MINUS_DST_COLOR,[Q0]:r.ONE_MINUS_DST_ALPHA,[nx]:r.CONSTANT_COLOR,[ix]:r.ONE_MINUS_CONSTANT_COLOR,[rx]:r.CONSTANT_ALPHA,[sx]:r.ONE_MINUS_CONSTANT_ALPHA};function V(X,De,ue,_e,ke,Ne,lt,Mt,Ft,pt){if(X===Qr){M===!0&&(fe(r.BLEND),M=!1);return}if(M===!1&&(Ee(r.BLEND),M=!0),X!==H0){if(X!==S||pt!==R){if((y!==bs||w!==bs)&&(r.blendEquation(r.FUNC_ADD),y=bs,w=bs),pt)switch(X){case _a:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ag:r.blendFunc(r.ONE,r.ONE);break;case og:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case _a:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ag:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case og:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,L=null,P=null,I=null,D.set(0,0,0),O=0,S=X,R=pt}return}ke=ke||De,Ne=Ne||ue,lt=lt||_e,(De!==y||ke!==w)&&(r.blendEquationSeparate(Pt[De],Pt[ke]),y=De,w=ke),(ue!==N||_e!==L||Ne!==P||lt!==I)&&(r.blendFuncSeparate(vt[ue],vt[_e],vt[Ne],vt[lt]),N=ue,L=_e,P=Ne,I=lt),(Mt.equals(D)===!1||Ft!==O)&&(r.blendColor(Mt.r,Mt.g,Mt.b,Ft),D.copy(Mt),O=Ft),S=X,R=!1}function Zt(X,De){X.side===pr?fe(r.CULL_FACE):Ee(r.CULL_FACE);let ue=X.side===ti;De&&(ue=!ue),_t(ue),X.blending===_a&&X.transparent===!1?V(Qr):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),o.setMask(X.colorWrite);const _e=X.stencilWrite;c.setTest(_e),_e&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),At(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(X){A!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),A=X)}function Ge(X){X!==z0?(Ee(r.CULL_FACE),X!==z&&(X===sg?r.cullFace(r.BACK):X===B0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),z=X}function tt(X){X!==k&&(ee&&r.lineWidth(X),k=X)}function At(X,De,ue){X?(Ee(r.POLYGON_OFFSET_FILL),(Y!==De||se!==ue)&&(r.polygonOffset(De,ue),Y=De,se=ue)):fe(r.POLYGON_OFFSET_FILL)}function qe(X){X?Ee(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function F(X){X===void 0&&(X=r.TEXTURE0+pe-1),me!==X&&(r.activeTexture(X),me=X)}function b(X,De,ue){ue===void 0&&(me===null?ue=r.TEXTURE0+pe-1:ue=me);let _e=ae[ue];_e===void 0&&(_e={type:void 0,texture:void 0},ae[ue]=_e),(_e.type!==X||_e.texture!==De)&&(me!==ue&&(r.activeTexture(ue),me=ue),r.bindTexture(X,De||ve[X]),_e.type=X,_e.texture=De)}function ne(){const X=ae[me];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Se(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function st(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function at(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function H(X){Ie.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ie.copy(X))}function ge(X){te.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),te.copy(X))}function xe(X,De){let ue=f.get(De);ue===void 0&&(ue=new WeakMap,f.set(De,ue));let _e=ue.get(X);_e===void 0&&(_e=r.getUniformBlockIndex(De,X.name),ue.set(X,_e))}function we(X,De){const _e=f.get(De).get(X);h.get(De)!==_e&&(r.uniformBlockBinding(De,_e,X.__bindingPointIndex),h.set(De,_e))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},me=null,ae={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,N=null,L=null,w=null,P=null,I=null,D=new Ct(0,0,0),O=0,R=!1,A=null,z=null,k=null,Y=null,se=null,Ie.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:Ee,disable:fe,bindFramebuffer:Ye,drawBuffers:Fe,useProgram:ft,setBlending:V,setMaterial:Zt,setFlipSided:_t,setCullFace:Ge,setLineWidth:tt,setPolygonOffset:At,setScissorTest:qe,activeTexture:F,bindTexture:b,unbindTexture:ne,compressedTexImage2D:Se,compressedTexImage3D:Me,texImage2D:He,texImage3D:at,updateUBOMapping:xe,uniformBlockBinding:we,texStorage2D:rt,texStorage3D:Ae,texSubImage2D:ye,texSubImage3D:Xe,compressedTexSubImage2D:Oe,compressedTexSubImage3D:st,scissor:H,viewport:ge,reset:he}}function kT(r,e,t,n,a,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ot,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,b){return x?new OffscreenCanvas(F,b):Nu("canvas")}function M(F,b,ne){let Se=1;const Me=qe(F);if((Me.width>ne||Me.height>ne)&&(Se=ne/Math.max(Me.width,Me.height)),Se<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ye=Math.floor(Se*Me.width),Xe=Math.floor(Se*Me.height);g===void 0&&(g=E(ye,Xe));const Oe=b?E(ye,Xe):g;return Oe.width=ye,Oe.height=Xe,Oe.getContext("2d").drawImage(F,0,0,ye,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ye+"x"+Xe+")."),Oe}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),F;return F}function S(F){return F.generateMipmaps}function y(F){r.generateMipmap(F)}function N(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(F,b,ne,Se,Me=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ye=b;if(b===r.RED&&(ne===r.FLOAT&&(ye=r.R32F),ne===r.HALF_FLOAT&&(ye=r.R16F),ne===r.UNSIGNED_BYTE&&(ye=r.R8)),b===r.RED_INTEGER&&(ne===r.UNSIGNED_BYTE&&(ye=r.R8UI),ne===r.UNSIGNED_SHORT&&(ye=r.R16UI),ne===r.UNSIGNED_INT&&(ye=r.R32UI),ne===r.BYTE&&(ye=r.R8I),ne===r.SHORT&&(ye=r.R16I),ne===r.INT&&(ye=r.R32I)),b===r.RG&&(ne===r.FLOAT&&(ye=r.RG32F),ne===r.HALF_FLOAT&&(ye=r.RG16F),ne===r.UNSIGNED_BYTE&&(ye=r.RG8)),b===r.RG_INTEGER&&(ne===r.UNSIGNED_BYTE&&(ye=r.RG8UI),ne===r.UNSIGNED_SHORT&&(ye=r.RG16UI),ne===r.UNSIGNED_INT&&(ye=r.RG32UI),ne===r.BYTE&&(ye=r.RG8I),ne===r.SHORT&&(ye=r.RG16I),ne===r.INT&&(ye=r.RG32I)),b===r.RGB_INTEGER&&(ne===r.UNSIGNED_BYTE&&(ye=r.RGB8UI),ne===r.UNSIGNED_SHORT&&(ye=r.RGB16UI),ne===r.UNSIGNED_INT&&(ye=r.RGB32UI),ne===r.BYTE&&(ye=r.RGB8I),ne===r.SHORT&&(ye=r.RGB16I),ne===r.INT&&(ye=r.RGB32I)),b===r.RGBA_INTEGER&&(ne===r.UNSIGNED_BYTE&&(ye=r.RGBA8UI),ne===r.UNSIGNED_SHORT&&(ye=r.RGBA16UI),ne===r.UNSIGNED_INT&&(ye=r.RGBA32UI),ne===r.BYTE&&(ye=r.RGBA8I),ne===r.SHORT&&(ye=r.RGBA16I),ne===r.INT&&(ye=r.RGBA32I)),b===r.RGB&&ne===r.UNSIGNED_INT_5_9_9_9_REV&&(ye=r.RGB9_E5),b===r.RGBA){const Xe=Me?Lu:It.getTransfer(Se);ne===r.FLOAT&&(ye=r.RGBA32F),ne===r.HALF_FLOAT&&(ye=r.RGBA16F),ne===r.UNSIGNED_BYTE&&(ye=Xe===kt?r.SRGB8_ALPHA8:r.RGBA8),ne===r.UNSIGNED_SHORT_4_4_4_4&&(ye=r.RGBA4),ne===r.UNSIGNED_SHORT_5_5_5_1&&(ye=r.RGB5_A1)}return(ye===r.R16F||ye===r.R32F||ye===r.RG16F||ye===r.RG32F||ye===r.RGBA16F||ye===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function w(F,b){let ne;return F?b===null||b===Ps||b===Co?ne=r.DEPTH24_STENCIL8:b===gr?ne=r.DEPTH32F_STENCIL8:b===Ro&&(ne=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ps||b===Co?ne=r.DEPTH_COMPONENT24:b===gr?ne=r.DEPTH_COMPONENT32F:b===Ro&&(ne=r.DEPTH_COMPONENT16),ne}function P(F,b){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Hi&&F.minFilter!==qi?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function I(F){const b=F.target;b.removeEventListener("dispose",I),O(b),b.isVideoTexture&&m.delete(b)}function D(F){const b=F.target;b.removeEventListener("dispose",D),A(b)}function O(F){const b=n.get(F);if(b.__webglInit===void 0)return;const ne=F.source,Se=v.get(ne);if(Se){const Me=Se[b.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&R(F),Object.keys(Se).length===0&&v.delete(ne)}n.remove(F)}function R(F){const b=n.get(F);r.deleteTexture(b.__webglTexture);const ne=F.source,Se=v.get(ne);delete Se[b.__cacheKey],u.memory.textures--}function A(F){const b=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(b.__webglFramebuffer[Se]))for(let Me=0;Me<b.__webglFramebuffer[Se].length;Me++)r.deleteFramebuffer(b.__webglFramebuffer[Se][Me]);else r.deleteFramebuffer(b.__webglFramebuffer[Se]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Se])}else{if(Array.isArray(b.__webglFramebuffer))for(let Se=0;Se<b.__webglFramebuffer.length;Se++)r.deleteFramebuffer(b.__webglFramebuffer[Se]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Se=0;Se<b.__webglColorRenderbuffer.length;Se++)b.__webglColorRenderbuffer[Se]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Se]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ne=F.textures;for(let Se=0,Me=ne.length;Se<Me;Se++){const ye=n.get(ne[Se]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),u.memory.textures--),n.remove(ne[Se])}n.remove(F)}let z=0;function k(){z=0}function Y(){const F=z;return F>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+a.maxTextures),z+=1,F}function se(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function pe(F,b){const ne=n.get(F);if(F.isVideoTexture&&tt(F),F.isRenderTargetTexture===!1&&F.version>0&&ne.__version!==F.version){const Se=F.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ne,F,b);return}}t.bindTexture(r.TEXTURE_2D,ne.__webglTexture,r.TEXTURE0+b)}function ee(F,b){const ne=n.get(F);if(F.version>0&&ne.__version!==F.version){te(ne,F,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ne.__webglTexture,r.TEXTURE0+b)}function de(F,b){const ne=n.get(F);if(F.version>0&&ne.__version!==F.version){te(ne,F,b);return}t.bindTexture(r.TEXTURE_3D,ne.__webglTexture,r.TEXTURE0+b)}function W(F,b){const ne=n.get(F);if(F.version>0&&ne.__version!==F.version){Z(ne,F,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture,r.TEXTURE0+b)}const me={[Mh]:r.REPEAT,[Rs]:r.CLAMP_TO_EDGE,[wh]:r.MIRRORED_REPEAT},ae={[Hi]:r.NEAREST,[mx]:r.NEAREST_MIPMAP_NEAREST,[Bl]:r.NEAREST_MIPMAP_LINEAR,[qi]:r.LINEAR,[Md]:r.LINEAR_MIPMAP_NEAREST,[Cs]:r.LINEAR_MIPMAP_LINEAR},G={[xx]:r.NEVER,[bx]:r.ALWAYS,[Sx]:r.LESS,[$v]:r.LEQUAL,[Ex]:r.EQUAL,[Tx]:r.GEQUAL,[Mx]:r.GREATER,[wx]:r.NOTEQUAL};function re(F,b){if(b.type===gr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qi||b.magFilter===Md||b.magFilter===Bl||b.magFilter===Cs||b.minFilter===qi||b.minFilter===Md||b.minFilter===Bl||b.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,me[b.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,me[b.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,me[b.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,ae[b.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,ae[b.minFilter]),b.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,G[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Hi||b.minFilter!==Bl&&b.minFilter!==Cs||b.type===gr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ie(F,b){let ne=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",I));const Se=b.source;let Me=v.get(Se);Me===void 0&&(Me={},v.set(Se,Me));const ye=se(b);if(ye!==F.__cacheKey){Me[ye]===void 0&&(Me[ye]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),Me[ye].usedTimes++;const Xe=Me[F.__cacheKey];Xe!==void 0&&(Me[F.__cacheKey].usedTimes--,Xe.usedTimes===0&&R(b)),F.__cacheKey=ye,F.__webglTexture=Me[ye].texture}return ne}function te(F,b,ne){let Se=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Se=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Se=r.TEXTURE_3D);const Me=Ie(F,b),ye=b.source;t.bindTexture(Se,F.__webglTexture,r.TEXTURE0+ne);const Xe=n.get(ye);if(ye.version!==Xe.__version||Me===!0){t.activeTexture(r.TEXTURE0+ne);const Oe=It.getPrimaries(It.workingColorSpace),st=b.colorSpace===Zr?null:It.getPrimaries(b.colorSpace),rt=b.colorSpace===Zr||Oe===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Ae=M(b.image,!1,a.maxTextureSize);Ae=At(b,Ae);const He=o.convert(b.format,b.colorSpace),at=o.convert(b.type);let H=L(b.internalFormat,He,at,b.colorSpace,b.isVideoTexture);re(Se,b);let ge;const xe=b.mipmaps,we=b.isVideoTexture!==!0,he=Xe.__version===void 0||Me===!0,X=ye.dataReady,De=P(b,Ae);if(b.isDepthTexture)H=w(b.format===Lo,b.type),he&&(we?t.texStorage2D(r.TEXTURE_2D,1,H,Ae.width,Ae.height):t.texImage2D(r.TEXTURE_2D,0,H,Ae.width,Ae.height,0,He,at,null));else if(b.isDataTexture)if(xe.length>0){we&&he&&t.texStorage2D(r.TEXTURE_2D,De,H,xe[0].width,xe[0].height);for(let ue=0,_e=xe.length;ue<_e;ue++)ge=xe[ue],we?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ge.width,ge.height,He,at,ge.data):t.texImage2D(r.TEXTURE_2D,ue,H,ge.width,ge.height,0,He,at,ge.data);b.generateMipmaps=!1}else we?(he&&t.texStorage2D(r.TEXTURE_2D,De,H,Ae.width,Ae.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae.width,Ae.height,He,at,Ae.data)):t.texImage2D(r.TEXTURE_2D,0,H,Ae.width,Ae.height,0,He,at,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){we&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,H,xe[0].width,xe[0].height,Ae.depth);for(let ue=0,_e=xe.length;ue<_e;ue++)if(ge=xe[ue],b.format!==Gi)if(He!==null)if(we){if(X)if(b.layerUpdates.size>0){const ke=Ug(ge.width,ge.height,b.format,b.type);for(const Ne of b.layerUpdates){const lt=ge.data.subarray(Ne*ke/ge.data.BYTES_PER_ELEMENT,(Ne+1)*ke/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,Ne,ge.width,ge.height,1,He,lt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ge.width,ge.height,Ae.depth,He,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,H,ge.width,ge.height,Ae.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ge.width,ge.height,Ae.depth,He,at,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,H,ge.width,ge.height,Ae.depth,0,He,at,ge.data)}else{we&&he&&t.texStorage2D(r.TEXTURE_2D,De,H,xe[0].width,xe[0].height);for(let ue=0,_e=xe.length;ue<_e;ue++)ge=xe[ue],b.format!==Gi?He!==null?we?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,ge.width,ge.height,He,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,H,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ge.width,ge.height,He,at,ge.data):t.texImage2D(r.TEXTURE_2D,ue,H,ge.width,ge.height,0,He,at,ge.data)}else if(b.isDataArrayTexture)if(we){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,H,Ae.width,Ae.height,Ae.depth),X)if(b.layerUpdates.size>0){const ue=Ug(Ae.width,Ae.height,b.format,b.type);for(const _e of b.layerUpdates){const ke=Ae.data.subarray(_e*ue/Ae.data.BYTES_PER_ELEMENT,(_e+1)*ue/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_e,Ae.width,Ae.height,1,He,at,ke)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,at,Ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,H,Ae.width,Ae.height,Ae.depth,0,He,at,Ae.data);else if(b.isData3DTexture)we?(he&&t.texStorage3D(r.TEXTURE_3D,De,H,Ae.width,Ae.height,Ae.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,at,Ae.data)):t.texImage3D(r.TEXTURE_3D,0,H,Ae.width,Ae.height,Ae.depth,0,He,at,Ae.data);else if(b.isFramebufferTexture){if(he)if(we)t.texStorage2D(r.TEXTURE_2D,De,H,Ae.width,Ae.height);else{let ue=Ae.width,_e=Ae.height;for(let ke=0;ke<De;ke++)t.texImage2D(r.TEXTURE_2D,ke,H,ue,_e,0,He,at,null),ue>>=1,_e>>=1}}else if(xe.length>0){if(we&&he){const ue=qe(xe[0]);t.texStorage2D(r.TEXTURE_2D,De,H,ue.width,ue.height)}for(let ue=0,_e=xe.length;ue<_e;ue++)ge=xe[ue],we?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,He,at,ge):t.texImage2D(r.TEXTURE_2D,ue,H,He,at,ge);b.generateMipmaps=!1}else if(we){if(he){const ue=qe(Ae);t.texStorage2D(r.TEXTURE_2D,De,H,ue.width,ue.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,at,Ae)}else t.texImage2D(r.TEXTURE_2D,0,H,He,at,Ae);S(b)&&y(Se),Xe.__version=ye.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function Z(F,b,ne){if(b.image.length!==6)return;const Se=Ie(F,b),Me=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+ne);const ye=n.get(Me);if(Me.version!==ye.__version||Se===!0){t.activeTexture(r.TEXTURE0+ne);const Xe=It.getPrimaries(It.workingColorSpace),Oe=b.colorSpace===Zr?null:It.getPrimaries(b.colorSpace),st=b.colorSpace===Zr||Xe===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const rt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,He=[];for(let _e=0;_e<6;_e++)!rt&&!Ae?He[_e]=M(b.image[_e],!0,a.maxCubemapSize):He[_e]=Ae?b.image[_e].image:b.image[_e],He[_e]=At(b,He[_e]);const at=He[0],H=o.convert(b.format,b.colorSpace),ge=o.convert(b.type),xe=L(b.internalFormat,H,ge,b.colorSpace),we=b.isVideoTexture!==!0,he=ye.__version===void 0||Se===!0,X=Me.dataReady;let De=P(b,at);re(r.TEXTURE_CUBE_MAP,b);let ue;if(rt){we&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,De,xe,at.width,at.height);for(let _e=0;_e<6;_e++){ue=He[_e].mipmaps;for(let ke=0;ke<ue.length;ke++){const Ne=ue[ke];b.format!==Gi?H!==null?we?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Ne.width,Ne.height,H,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,xe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Ne.width,Ne.height,H,ge,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,xe,Ne.width,Ne.height,0,H,ge,Ne.data)}}}else{if(ue=b.mipmaps,we&&he){ue.length>0&&De++;const _e=qe(He[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,De,xe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ae){we?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,He[_e].width,He[_e].height,H,ge,He[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,xe,He[_e].width,He[_e].height,0,H,ge,He[_e].data);for(let ke=0;ke<ue.length;ke++){const lt=ue[ke].image[_e].image;we?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,lt.width,lt.height,H,ge,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,xe,lt.width,lt.height,0,H,ge,lt.data)}}else{we?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,H,ge,He[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,xe,H,ge,He[_e]);for(let ke=0;ke<ue.length;ke++){const Ne=ue[ke];we?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,H,ge,Ne.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,xe,H,ge,Ne.image[_e])}}}S(b)&&y(r.TEXTURE_CUBE_MAP),ye.__version=Me.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function ve(F,b,ne,Se,Me,ye){const Xe=o.convert(ne.format,ne.colorSpace),Oe=o.convert(ne.type),st=L(ne.internalFormat,Xe,Oe,ne.colorSpace),rt=n.get(b),Ae=n.get(ne);if(Ae.__renderTarget=b,!rt.__hasExternalTextures){const He=Math.max(1,b.width>>ye),at=Math.max(1,b.height>>ye);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?t.texImage3D(Me,ye,st,He,at,b.depth,0,Xe,Oe,null):t.texImage2D(Me,ye,st,He,at,0,Xe,Oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),Ge(b)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,Me,Ae.__webglTexture,0,_t(b)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Se,Me,Ae.__webglTexture,ye),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(F,b,ne){if(r.bindRenderbuffer(r.RENDERBUFFER,F),b.depthBuffer){const Se=b.depthTexture,Me=Se&&Se.isDepthTexture?Se.type:null,ye=w(b.stencilBuffer,Me),Xe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=_t(b);Ge(b)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Oe,ye,b.width,b.height):ne?r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,ye,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ye,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,F)}else{const Se=b.textures;for(let Me=0;Me<Se.length;Me++){const ye=Se[Me],Xe=o.convert(ye.format,ye.colorSpace),Oe=o.convert(ye.type),st=L(ye.internalFormat,Xe,Oe,ye.colorSpace),rt=_t(b);ne&&Ge(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,st,b.width,b.height):Ge(b)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,st,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,st,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(F,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=n.get(b.depthTexture);Se.__renderTarget=b,(!Se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe(b.depthTexture,0);const Me=Se.__webglTexture,ye=_t(b);if(b.depthTexture.format===Po)Ge(b)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Me,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Me,0);else if(b.depthTexture.format===Lo)Ge(b)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Me,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Ye(F){const b=n.get(F),ne=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const Se=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Se){const Me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Se.removeEventListener("dispose",Me)};Se.addEventListener("dispose",Me),b.__depthDisposeCallback=Me}b.__boundDepthTexture=Se}if(F.depthTexture&&!b.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const Se=F.texture.mipmaps;Se&&Se.length>0?fe(b.__webglFramebuffer[0],F):fe(b.__webglFramebuffer,F)}else if(ne){b.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Se]),b.__webglDepthbuffer[Se]===void 0)b.__webglDepthbuffer[Se]=r.createRenderbuffer(),Ee(b.__webglDepthbuffer[Se],F,!1);else{const Me=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=b.__webglDepthbuffer[Se];r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,ye)}}else{const Se=F.texture.mipmaps;if(Se&&Se.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ee(b.__webglDepthbuffer,F,!1);else{const Me=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,ye)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(F,b,ne){const Se=n.get(F);b!==void 0&&ve(Se.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ne!==void 0&&Ye(F)}function ft(F){const b=F.texture,ne=n.get(F),Se=n.get(b);F.addEventListener("dispose",D);const Me=F.textures,ye=F.isWebGLCubeRenderTarget===!0,Xe=Me.length>1;if(Xe||(Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture()),Se.__version=b.version,u.memory.textures++),ye){ne.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer[Oe]=[];for(let st=0;st<b.mipmaps.length;st++)ne.__webglFramebuffer[Oe][st]=r.createFramebuffer()}else ne.__webglFramebuffer[Oe]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)ne.__webglFramebuffer[Oe]=r.createFramebuffer()}else ne.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Oe=0,st=Me.length;Oe<st;Oe++){const rt=n.get(Me[Oe]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),u.memory.textures++)}if(F.samples>0&&Ge(F)===!1){ne.__webglMultisampledFramebuffer=r.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Me.length;Oe++){const st=Me[Oe];ne.__webglColorRenderbuffer[Oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ne.__webglColorRenderbuffer[Oe]);const rt=o.convert(st.format,st.colorSpace),Ae=o.convert(st.type),He=L(st.internalFormat,rt,Ae,st.colorSpace,F.isXRRenderTarget===!0),at=_t(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,at,He,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,ne.__webglColorRenderbuffer[Oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(ne.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(ne.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ye){t.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),re(r.TEXTURE_CUBE_MAP,b);for(let Oe=0;Oe<6;Oe++)if(b.mipmaps&&b.mipmaps.length>0)for(let st=0;st<b.mipmaps.length;st++)ve(ne.__webglFramebuffer[Oe][st],F,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,st);else ve(ne.__webglFramebuffer[Oe],F,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);S(b)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Oe=0,st=Me.length;Oe<st;Oe++){const rt=Me[Oe],Ae=n.get(rt);t.bindTexture(r.TEXTURE_2D,Ae.__webglTexture),re(r.TEXTURE_2D,rt),ve(ne.__webglFramebuffer,F,rt,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,0),S(rt)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Oe=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Oe=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Oe,Se.__webglTexture),re(Oe,b),b.mipmaps&&b.mipmaps.length>0)for(let st=0;st<b.mipmaps.length;st++)ve(ne.__webglFramebuffer[st],F,b,r.COLOR_ATTACHMENT0,Oe,st);else ve(ne.__webglFramebuffer,F,b,r.COLOR_ATTACHMENT0,Oe,0);S(b)&&y(Oe),t.unbindTexture()}F.depthBuffer&&Ye(F)}function Pt(F){const b=F.textures;for(let ne=0,Se=b.length;ne<Se;ne++){const Me=b[ne];if(S(Me)){const ye=N(F),Xe=n.get(Me).__webglTexture;t.bindTexture(ye,Xe),y(ye),t.unbindTexture()}}}const vt=[],V=[];function Zt(F){if(F.samples>0){if(Ge(F)===!1){const b=F.textures,ne=F.width,Se=F.height;let Me=r.COLOR_BUFFER_BIT;const ye=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=n.get(F),Oe=b.length>1;if(Oe)for(let rt=0;rt<b.length;rt++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const st=F.texture.mipmaps;st&&st.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let rt=0;rt<b.length;rt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),Oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[rt]);const Ae=n.get(b[rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,ne,Se,0,0,ne,Se,Me,r.NEAREST),h===!0&&(vt.length=0,V.length=0,vt.push(r.COLOR_ATTACHMENT0+rt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(vt.push(ye),V.push(ye),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,V)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Oe)for(let rt=0;rt<b.length;rt++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[rt]);const Ae=n.get(b[rt]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,Ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const b=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function _t(F){return Math.min(a.maxSamples,F.samples)}function Ge(F){const b=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function tt(F){const b=u.render.frame;m.get(F)!==b&&(m.set(F,b),F.update())}function At(F,b){const ne=F.colorSpace,Se=F.format,Me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ne!==wa&&ne!==Zr&&(It.getTransfer(ne)===kt?(Se!==Gi||Me!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),b}function qe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.setTexture2D=pe,this.setTexture2DArray=ee,this.setTexture3D=de,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ge}function OT(r,e){function t(n,a=Zr){let o;const u=It.getTransfer(a);if(n===Sr)return r.UNSIGNED_BYTE;if(n===hf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ff)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zv)return r.BYTE;if(n===Bv)return r.SHORT;if(n===Ro)return r.UNSIGNED_SHORT;if(n===df)return r.INT;if(n===Ps)return r.UNSIGNED_INT;if(n===gr)return r.FLOAT;if(n===Do)return r.HALF_FLOAT;if(n===Hv)return r.ALPHA;if(n===Vv)return r.RGB;if(n===Gi)return r.RGBA;if(n===Po)return r.DEPTH_COMPONENT;if(n===Lo)return r.DEPTH_STENCIL;if(n===Wv)return r.RED;if(n===pf)return r.RED_INTEGER;if(n===jv)return r.RG;if(n===mf)return r.RG_INTEGER;if(n===gf)return r.RGBA_INTEGER;if(n===Eu||n===Mu||n===wu||n===Tu)if(u===kt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Eu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Eu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Th||n===bh||n===Ah||n===Rh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Th)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ah)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Ph||n===Lh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ch||n===Ph)return u===kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Lh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dh||n===Nh||n===Ih||n===Uh||n===Fh||n===kh||n===Oh||n===zh||n===Bh||n===Gh||n===Hh||n===Vh||n===Wh||n===jh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Dh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ih)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jh)return u===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bu||n===Xh||n===$h)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===bu)return u===kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$h)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xv||n===Yh||n===qh||n===Kh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===bu)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Yh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const zT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new ni,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ns({vertexShader:zT,fragmentShader:BT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _r(new Ou(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HT extends Ra{constructor(e,t){super();const n=this;let a=null,o=1,u=null,c="local-floor",h=1,f=null,m=null,g=null,v=null,x=null,E=null;const M=new GT,S=t.getContextAttributes();let y=null,N=null;const L=[],w=[],P=new Ot;let I=null;const D=new ci;D.viewport=new sn;const O=new ci;O.viewport=new sn;const R=[D,O],A=new lS;let z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Z=L[te];return Z===void 0&&(Z=new jd,L[te]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(te){let Z=L[te];return Z===void 0&&(Z=new jd,L[te]=Z),Z.getGripSpace()},this.getHand=function(te){let Z=L[te];return Z===void 0&&(Z=new jd,L[te]=Z),Z.getHandSpace()};function Y(te){const Z=w.indexOf(te.inputSource);if(Z===-1)return;const ve=L[Z];ve!==void 0&&(ve.update(te.inputSource,te.frame,f||u),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function se(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",se),a.removeEventListener("inputsourceschange",pe);for(let te=0;te<L.length;te++){const Z=w[te];Z!==null&&(w[te]=null,L[te].disconnect(Z))}z=null,k=null,M.reset(),e.setRenderTarget(y),x=null,v=null,g=null,a=null,N=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(te){f=te},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",se),a.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ee=null,fe=null;S.depth&&(fe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?Lo:Po,Ee=S.stencil?Co:Ps);const Ye={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:o};g=new XRWebGLBinding(a,t),v=g.createProjectionLayer(Ye),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new Ls(v.textureWidth,v.textureHeight,{format:Gi,type:Sr,depthTexture:new o_(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,ve),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new Ls(x.framebufferWidth,x.framebufferHeight,{format:Gi,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),f=null,u=await a.requestReferenceSpace(c),Ie.setContext(a),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function pe(te){for(let Z=0;Z<te.removed.length;Z++){const ve=te.removed[Z],Ee=w.indexOf(ve);Ee>=0&&(w[Ee]=null,L[Ee].disconnect(ve))}for(let Z=0;Z<te.added.length;Z++){const ve=te.added[Z];let Ee=w.indexOf(ve);if(Ee===-1){for(let Ye=0;Ye<L.length;Ye++)if(Ye>=w.length){w.push(ve),Ee=Ye;break}else if(w[Ye]===null){w[Ye]=ve,Ee=Ye;break}if(Ee===-1)break}const fe=L[Ee];fe&&fe.connect(ve)}}const ee=new le,de=new le;function W(te,Z,ve){ee.setFromMatrixPosition(Z.matrixWorld),de.setFromMatrixPosition(ve.matrixWorld);const Ee=ee.distanceTo(de),fe=Z.projectionMatrix.elements,Ye=ve.projectionMatrix.elements,Fe=fe[14]/(fe[10]-1),ft=fe[14]/(fe[10]+1),Pt=(fe[9]+1)/fe[5],vt=(fe[9]-1)/fe[5],V=(fe[8]-1)/fe[0],Zt=(Ye[8]+1)/Ye[0],_t=Fe*V,Ge=Fe*Zt,tt=Ee/(-V+Zt),At=tt*-V;if(Z.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(At),te.translateZ(tt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),fe[10]===-1)te.projectionMatrix.copy(Z.projectionMatrix),te.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const qe=Fe+tt,F=ft+tt,b=_t-At,ne=Ge+(Ee-At),Se=Pt*ft/F*qe,Me=vt*ft/F*qe;te.projectionMatrix.makePerspective(b,ne,Se,Me,qe,F),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,Z){Z===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Z.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let Z=te.near,ve=te.far;M.texture!==null&&(M.depthNear>0&&(Z=M.depthNear),M.depthFar>0&&(ve=M.depthFar)),A.near=O.near=D.near=Z,A.far=O.far=D.far=ve,(z!==A.near||k!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,k=A.far),D.layers.mask=te.layers.mask|2,O.layers.mask=te.layers.mask|4,A.layers.mask=D.layers.mask|O.layers.mask;const Ee=te.parent,fe=A.cameras;me(A,Ee);for(let Ye=0;Ye<fe.length;Ye++)me(fe[Ye],Ee);fe.length===2?W(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),ae(te,A,Ee)};function ae(te,Z,ve){ve===null?te.matrix.copy(Z.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(Z.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Z.projectionMatrix),te.projectionMatrixInverse.copy(Z.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Zh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(te){h=te,v!==null&&(v.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let G=null;function re(te,Z){if(m=Z.getViewerPose(f||u),E=Z,m!==null){const ve=m.views;x!==null&&(e.setRenderTargetFramebuffer(N,x.framebuffer),e.setRenderTarget(N));let Ee=!1;ve.length!==A.cameras.length&&(A.cameras.length=0,Ee=!0);for(let Fe=0;Fe<ve.length;Fe++){const ft=ve[Fe];let Pt=null;if(x!==null)Pt=x.getViewport(ft);else{const V=g.getViewSubImage(v,ft);Pt=V.viewport,Fe===0&&(e.setRenderTargetTextures(N,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(N))}let vt=R[Fe];vt===void 0&&(vt=new ci,vt.layers.enable(Fe),vt.viewport=new sn,R[Fe]=vt),vt.matrix.fromArray(ft.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(ft.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Fe===0&&(A.matrix.copy(vt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ee===!0&&A.cameras.push(vt)}const fe=a.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const Fe=g.getDepthInformation(ve[0]);Fe&&Fe.isValid&&Fe.texture&&M.init(e,Fe,a.renderState)}}for(let ve=0;ve<L.length;ve++){const Ee=w[ve],fe=L[ve];Ee!==null&&fe!==void 0&&fe.update(Ee,Z,f||u)}G&&G(te,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),E=null}const Ie=new u_;Ie.setAnimationLoop(re),this.setAnimationLoop=function(te){G=te},this.dispose=function(){}}}const Ss=new Er,VT=new Kt;function WT(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function n(S,y){y.color.getRGB(S.fogColor.value,e_(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,N,L,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?o(S,y):y.isMeshToonMaterial?(o(S,y),g(S,y)):y.isMeshPhongMaterial?(o(S,y),m(S,y)):y.isMeshStandardMaterial?(o(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(o(S,y),E(S,y)):y.isMeshDepthMaterial?o(S,y):y.isMeshDistanceMaterial?(o(S,y),M(S,y)):y.isMeshNormalMaterial?o(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?h(S,y,N,L):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ti&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ti&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),L=N.envMap,w=N.envMapRotation;L&&(S.envMap.value=L,Ss.copy(w),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),S.envMapRotation.value.setFromMatrix4(VT.makeRotationFromEuler(Ss)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,N,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function jT(r,e,t,n){let a={},o={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,L){const w=L.program;n.uniformBlockBinding(N,w)}function f(N,L){let w=a[N.id];w===void 0&&(E(N),w=m(N),a[N.id]=w,N.addEventListener("dispose",S));const P=L.program;n.updateUBOMapping(N,P);const I=e.render.frame;o[N.id]!==I&&(v(N),o[N.id]=I)}function m(N){const L=g();N.__bindingPointIndex=L;const w=r.createBuffer(),P=N.__size,I=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,P,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function g(){for(let N=0;N<c;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=a[N.id],w=N.uniforms,P=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let I=0,D=w.length;I<D;I++){const O=Array.isArray(w[I])?w[I]:[w[I]];for(let R=0,A=O.length;R<A;R++){const z=O[R];if(x(z,I,R,P)===!0){const k=z.__offset,Y=Array.isArray(z.value)?z.value:[z.value];let se=0;for(let pe=0;pe<Y.length;pe++){const ee=Y[pe],de=M(ee);typeof ee=="number"||typeof ee=="boolean"?(z.__data[0]=ee,r.bufferSubData(r.UNIFORM_BUFFER,k+se,z.__data)):ee.isMatrix3?(z.__data[0]=ee.elements[0],z.__data[1]=ee.elements[1],z.__data[2]=ee.elements[2],z.__data[3]=0,z.__data[4]=ee.elements[3],z.__data[5]=ee.elements[4],z.__data[6]=ee.elements[5],z.__data[7]=0,z.__data[8]=ee.elements[6],z.__data[9]=ee.elements[7],z.__data[10]=ee.elements[8],z.__data[11]=0):(ee.toArray(z.__data,se),se+=de.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(N,L,w,P){const I=N.value,D=L+"_"+w;if(P[D]===void 0)return typeof I=="number"||typeof I=="boolean"?P[D]=I:P[D]=I.clone(),!0;{const O=P[D];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return P[D]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function E(N){const L=N.uniforms;let w=0;const P=16;for(let D=0,O=L.length;D<O;D++){const R=Array.isArray(L[D])?L[D]:[L[D]];for(let A=0,z=R.length;A<z;A++){const k=R[A],Y=Array.isArray(k.value)?k.value:[k.value];for(let se=0,pe=Y.length;se<pe;se++){const ee=Y[se],de=M(ee),W=w%P,me=W%de.boundary,ae=W+me;w+=me,ae!==0&&P-ae<de.storage&&(w+=P-ae),k.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=de.storage}}}const I=w%P;return I>0&&(w+=P-I),N.__size=w,N.__cache={},this}function M(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const w=u.indexOf(L.__bindingPointIndex);u.splice(w,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function y(){for(const N in a)r.deleteBuffer(a[N]);u=[],a={},o={}}return{bind:h,update:f,dispose:y}}class p_{constructor(e={}){const{canvas:t=Rx(),context:n=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const N=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=Si;let I=0,D=0,O=null,R=-1,A=null;const z=new sn,k=new sn;let Y=null;const se=new Ct(0);let pe=0,ee=t.width,de=t.height,W=1,me=null,ae=null;const G=new sn(0,0,ee,de),re=new sn(0,0,ee,de);let Ie=!1;const te=new r_;let Z=!1,ve=!1;const Ee=new Kt,fe=new Kt,Ye=new le,Fe=new sn,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function vt(){return O===null?W:1}let V=n;function Zt(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cf}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),V===null){const q="webgl2";if(V=Zt(q,C),V===null)throw Zt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _t,Ge,tt,At,qe,F,b,ne,Se,Me,ye,Xe,Oe,st,rt,Ae,He,at,H,ge,xe,we,he,X;function De(){_t=new nw(V),_t.init(),we=new OT(V,_t),Ge=new qM(V,_t,e,we),tt=new FT(V,_t),Ge.reverseDepthBuffer&&v&&tt.buffers.depth.setReversed(!0),At=new sw(V),qe=new MT,F=new kT(V,_t,tt,qe,Ge,we,At),b=new ZM(w),ne=new tw(w),Se=new dS(V),he=new $M(V,Se),Me=new iw(V,Se,At,he),ye=new ow(V,Me,Se,At),H=new aw(V,Ge,F),Ae=new KM(qe),Xe=new ET(w,b,ne,_t,Ge,he,Ae),Oe=new WT(w,qe),st=new TT,rt=new LT(_t),at=new XM(w,b,ne,tt,ye,x,h),He=new IT(w,ye,Ge),X=new jT(V,At,Ge,tt),ge=new YM(V,_t,At),xe=new rw(V,_t,At),At.programs=Xe.programs,w.capabilities=Ge,w.extensions=_t,w.properties=qe,w.renderLists=st,w.shadowMap=He,w.state=tt,w.info=At}De();const ue=new HT(w,V);this.xr=ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=_t.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_t.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(ee,de,!1))},this.getSize=function(C){return C.set(ee,de)},this.setSize=function(C,q,ce=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,de=q,t.width=Math.floor(C*W),t.height=Math.floor(q*W),ce===!0&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(ee*W,de*W).floor()},this.setDrawingBufferSize=function(C,q,ce){ee=C,de=q,W=ce,t.width=Math.floor(C*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,q,ce,J){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,q,ce,J),tt.viewport(z.copy(G).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,q,ce,J){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,q,ce,J),tt.scissor(k.copy(re).multiplyScalar(W).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(C){tt.setScissorTest(Ie=C)},this.setOpaqueSort=function(C){me=C},this.setTransparentSort=function(C){ae=C},this.getClearColor=function(C){return C.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ce=!0){let J=0;if(C){let K=!1;if(O!==null){const Pe=O.texture.format;K=Pe===gf||Pe===mf||Pe===pf}if(K){const Pe=O.texture.type,ze=Pe===Sr||Pe===Ps||Pe===Ro||Pe===Co||Pe===hf||Pe===ff,We=at.getClearColor(),Ke=at.getClearAlpha(),mt=We.r,dt=We.g,Qe=We.b;ze?(E[0]=mt,E[1]=dt,E[2]=Qe,E[3]=Ke,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=mt,M[1]=dt,M[2]=Qe,M[3]=Ke,V.clearBufferiv(V.COLOR,0,M))}else J|=V.COLOR_BUFFER_BIT}q&&(J|=V.DEPTH_BUFFER_BIT),ce&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),at.dispose(),st.dispose(),rt.dispose(),qe.dispose(),b.dispose(),ne.dispose(),ye.dispose(),he.dispose(),X.dispose(),Xe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Wn),ue.removeEventListener("sessionend",ii),jn.stop()};function _e(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=At.autoReset,q=He.enabled,ce=He.autoUpdate,J=He.needsUpdate,K=He.type;De(),At.autoReset=C,He.enabled=q,He.autoUpdate=ce,He.needsUpdate=J,He.type=K}function Ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function lt(C){const q=C.target;q.removeEventListener("dispose",lt),Mt(q)}function Mt(C){Ft(C),qe.remove(C)}function Ft(C){const q=qe.get(C).programs;q!==void 0&&(q.forEach(function(ce){Xe.releaseProgram(ce)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ce,J,K,Pe){q===null&&(q=ft);const ze=K.isMesh&&K.matrixWorld.determinant()<0,We=Ut(C,q,ce,J,K);tt.setMaterial(J,ze);let Ke=ce.index,mt=1;if(J.wireframe===!0){if(Ke=Me.getWireframeAttribute(ce),Ke===void 0)return;mt=2}const dt=ce.drawRange,Qe=ce.attributes.position;let Tt=dt.start*mt,yt=(dt.start+dt.count)*mt;Pe!==null&&(Tt=Math.max(Tt,Pe.start*mt),yt=Math.min(yt,(Pe.start+Pe.count)*mt)),Ke!==null?(Tt=Math.max(Tt,0),yt=Math.min(yt,Ke.count)):Qe!=null&&(Tt=Math.max(Tt,0),yt=Math.min(yt,Qe.count));const Jt=yt-Tt;if(Jt<0||Jt===1/0)return;he.setup(K,J,We,ce,Ke);let jt,Rt=ge;if(Ke!==null&&(jt=Se.get(Ke),Rt=xe,Rt.setIndex(jt)),K.isMesh)J.wireframe===!0?(tt.setLineWidth(J.wireframeLinewidth*vt()),Rt.setMode(V.LINES)):Rt.setMode(V.TRIANGLES);else if(K.isLine){let ot=J.linewidth;ot===void 0&&(ot=1),tt.setLineWidth(ot*vt()),K.isLineSegments?Rt.setMode(V.LINES):K.isLineLoop?Rt.setMode(V.LINE_LOOP):Rt.setMode(V.LINE_STRIP)}else K.isPoints?Rt.setMode(V.POINTS):K.isSprite&&Rt.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Au("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Rt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ot=K._multiDrawStarts,en=K._multiDrawCounts,wt=K._multiDrawCount,bn=Ke?Se.get(Ke).bytesPerElement:1,wr=qe.get(J).currentProgram.getUniforms();for(let zn=0;zn<wt;zn++)wr.setValue(V,"_gl_DrawID",zn),Rt.render(ot[zn]/bn,en[zn])}else if(K.isInstancedMesh)Rt.renderInstances(Tt,Jt,K.count);else if(ce.isInstancedBufferGeometry){const ot=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,en=Math.min(ce.instanceCount,ot);Rt.renderInstances(Tt,Jt,en)}else Rt.render(Tt,Jt)};function pt(C,q,ce){C.transparent===!0&&C.side===pr&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,$n(C,q,ce),C.side=ts,C.needsUpdate=!0,$n(C,q,ce),C.side=pr):$n(C,q,ce)}this.compile=function(C,q,ce=null){ce===null&&(ce=C),y=rt.get(ce),y.init(q),L.push(y),ce.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),C!==ce&&C.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const J=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Pe=K.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){const We=Pe[ze];pt(We,ce,K),J.add(We)}else pt(Pe,ce,K),J.add(Pe)}),y=L.pop(),J},this.compileAsync=function(C,q,ce=null){const J=this.compile(C,q,ce);return new Promise(K=>{function Pe(){if(J.forEach(function(ze){qe.get(ze).currentProgram.isReady()&&J.delete(ze)}),J.size===0){K(C);return}setTimeout(Pe,10)}_t.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Qt=null;function $t(C){Qt&&Qt(C)}function Wn(){jn.stop()}function ii(){jn.start()}const jn=new u_;jn.setAnimationLoop($t),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(C){Qt=C,ue.setAnimationLoop(C),C===null?jn.stop():jn.start()},ue.addEventListener("sessionstart",Wn),ue.addEventListener("sessionend",ii),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(q),q=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,q,O),y=rt.get(C,L.length),y.init(q),L.push(y),fe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(fe),ve=this.localClippingEnabled,Z=Ae.init(this.clippingPlanes,ve),S=st.get(C,N.length),S.init(),N.push(S),ue.enabled===!0&&ue.isPresenting===!0){const Pe=w.xr.getDepthSensingMesh();Pe!==null&&On(Pe,q,-1/0,w.sortObjects)}On(C,q,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(me,ae),Pt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Pt&&at.addToRenderList(S,C),this.info.render.frame++,Z===!0&&Ae.beginShadows();const ce=y.state.shadowsArray;He.render(ce,C,q),Z===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=S.opaque,K=S.transmissive;if(y.setupLights(),q.isArrayCamera){const Pe=q.cameras;if(K.length>0)for(let ze=0,We=Pe.length;ze<We;ze++){const Ke=Pe[ze];Ti(J,K,C,Ke)}Pt&&at.render(C);for(let ze=0,We=Pe.length;ze<We;ze++){const Ke=Pe[ze];Xn(S,C,Ke,Ke.viewport)}}else K.length>0&&Ti(J,K,C,q),Pt&&at.render(C),Xn(S,C,q);O!==null&&D===0&&(F.updateMultisampleRenderTarget(O),F.updateRenderTargetMipmap(O)),C.isScene===!0&&C.onAfterRender(w,C,q),he.resetDefaultState(),R=-1,A=null,L.pop(),L.length>0?(y=L[L.length-1],Z===!0&&Ae.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function On(C,q,ce,J){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){J&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);const ze=ye.update(C),We=C.material;We.visible&&S.push(C,ze,We,ce,Fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const ze=ye.update(C),We=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Fe.copy(ze.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(fe)),Array.isArray(We)){const Ke=ze.groups;for(let mt=0,dt=Ke.length;mt<dt;mt++){const Qe=Ke[mt],Tt=We[Qe.materialIndex];Tt&&Tt.visible&&S.push(C,ze,Tt,ce,Fe.z,Qe)}}else We.visible&&S.push(C,ze,We,ce,Fe.z,null)}}const Pe=C.children;for(let ze=0,We=Pe.length;ze<We;ze++)On(Pe[ze],q,ce,J)}function Xn(C,q,ce,J){const K=C.opaque,Pe=C.transmissive,ze=C.transparent;y.setupLightsView(ce),Z===!0&&Ae.setGlobalState(w.clippingPlanes,ce),J&&tt.viewport(z.copy(J)),K.length>0&&bi(K,q,ce),Pe.length>0&&bi(Pe,q,ce),ze.length>0&&bi(ze,q,ce),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Ti(C,q,ce,J){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[J.id]===void 0&&(y.state.transmissionRenderTarget[J.id]=new Ls(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Do:Sr,minFilter:Cs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Pe=y.state.transmissionRenderTarget[J.id],ze=J.viewport||z;Pe.setSize(ze.z*w.transmissionResolutionScale,ze.w*w.transmissionResolutionScale);const We=w.getRenderTarget();w.setRenderTarget(Pe),w.getClearColor(se),pe=w.getClearAlpha(),pe<1&&w.setClearColor(16777215,.5),w.clear(),Pt&&at.render(ce);const Ke=w.toneMapping;w.toneMapping=Jr;const mt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),y.setupLightsView(J),Z===!0&&Ae.setGlobalState(w.clippingPlanes,J),bi(C,ce,J),F.updateMultisampleRenderTarget(Pe),F.updateRenderTargetMipmap(Pe),_t.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Qe=0,Tt=q.length;Qe<Tt;Qe++){const yt=q[Qe],Jt=yt.object,jt=yt.geometry,Rt=yt.material,ot=yt.group;if(Rt.side===pr&&Jt.layers.test(J.layers)){const en=Rt.side;Rt.side=ti,Rt.needsUpdate=!0,an(Jt,ce,J,jt,Rt,ot),Rt.side=en,Rt.needsUpdate=!0,dt=!0}}dt===!0&&(F.updateMultisampleRenderTarget(Pe),F.updateRenderTargetMipmap(Pe))}w.setRenderTarget(We),w.setClearColor(se,pe),mt!==void 0&&(J.viewport=mt),w.toneMapping=Ke}function bi(C,q,ce){const J=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Pe=C.length;K<Pe;K++){const ze=C[K],We=ze.object,Ke=ze.geometry,mt=ze.group;let dt=ze.material;dt.allowOverride===!0&&J!==null&&(dt=J),We.layers.test(ce.layers)&&an(We,q,ce,Ke,dt,mt)}}function an(C,q,ce,J,K,Pe){C.onBeforeRender(w,q,ce,J,K,Pe),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(w,q,ce,J,C,Pe),K.transparent===!0&&K.side===pr&&K.forceSinglePass===!1?(K.side=ti,K.needsUpdate=!0,w.renderBufferDirect(ce,q,J,K,C,Pe),K.side=ts,K.needsUpdate=!0,w.renderBufferDirect(ce,q,J,K,C,Pe),K.side=pr):w.renderBufferDirect(ce,q,J,K,C,Pe),C.onAfterRender(w,q,ce,J,K,Pe)}function $n(C,q,ce){q.isScene!==!0&&(q=ft);const J=qe.get(C),K=y.state.lights,Pe=y.state.shadowsArray,ze=K.state.version,We=Xe.getParameters(C,K.state,Pe,q,ce),Ke=Xe.getProgramCacheKey(We);let mt=J.programs;J.environment=C.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(C.isMeshStandardMaterial?ne:b).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,mt===void 0&&(C.addEventListener("dispose",lt),mt=new Map,J.programs=mt);let dt=mt.get(Ke);if(dt!==void 0){if(J.currentProgram===dt&&J.lightsStateVersion===ze)return Tn(C,We),dt}else We.uniforms=Xe.getUniforms(C),C.onBeforeCompile(We,w),dt=Xe.acquireProgram(We,Ke),mt.set(Ke,dt),J.uniforms=We.uniforms;const Qe=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ae.uniform),Tn(C,We),J.needsLights=Ai(C),J.lightsStateVersion=ze,J.needsLights&&(Qe.ambientLightColor.value=K.state.ambient,Qe.lightProbe.value=K.state.probe,Qe.directionalLights.value=K.state.directional,Qe.directionalLightShadows.value=K.state.directionalShadow,Qe.spotLights.value=K.state.spot,Qe.spotLightShadows.value=K.state.spotShadow,Qe.rectAreaLights.value=K.state.rectArea,Qe.ltc_1.value=K.state.rectAreaLTC1,Qe.ltc_2.value=K.state.rectAreaLTC2,Qe.pointLights.value=K.state.point,Qe.pointLightShadows.value=K.state.pointShadow,Qe.hemisphereLights.value=K.state.hemi,Qe.directionalShadowMap.value=K.state.directionalShadowMap,Qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qe.spotShadowMap.value=K.state.spotShadowMap,Qe.spotLightMatrix.value=K.state.spotLightMatrix,Qe.spotLightMap.value=K.state.spotLightMap,Qe.pointShadowMap.value=K.state.pointShadowMap,Qe.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=dt,J.uniformsList=null,dt}function Ki(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Ru.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Tn(C,q){const ce=qe.get(C);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function Ut(C,q,ce,J,K){q.isScene!==!0&&(q=ft),F.resetTextureUnits();const Pe=q.fog,ze=J.isMeshStandardMaterial?q.environment:null,We=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wa,Ke=(J.isMeshStandardMaterial?ne:b).get(J.envMap||ze),mt=J.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,dt=!!ce.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Qe=!!ce.morphAttributes.position,Tt=!!ce.morphAttributes.normal,yt=!!ce.morphAttributes.color;let Jt=Jr;J.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Jt=w.toneMapping);const jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Rt=jt!==void 0?jt.length:0,ot=qe.get(J),en=y.state.lights;if(Z===!0&&(ve===!0||C!==A)){const Sn=C===A&&J.id===R;Ae.setState(J,C,Sn)}let wt=!1;J.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==en.state.version||ot.outputColorSpace!==We||K.isBatchedMesh&&ot.batching===!1||!K.isBatchedMesh&&ot.batching===!0||K.isBatchedMesh&&ot.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ot.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ot.instancing===!1||!K.isInstancedMesh&&ot.instancing===!0||K.isSkinnedMesh&&ot.skinning===!1||!K.isSkinnedMesh&&ot.skinning===!0||K.isInstancedMesh&&ot.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ot.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ot.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ot.instancingMorph===!1&&K.morphTexture!==null||ot.envMap!==Ke||J.fog===!0&&ot.fog!==Pe||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Ae.numPlanes||ot.numIntersection!==Ae.numIntersection)||ot.vertexAlphas!==mt||ot.vertexTangents!==dt||ot.morphTargets!==Qe||ot.morphNormals!==Tt||ot.morphColors!==yt||ot.toneMapping!==Jt||ot.morphTargetsCount!==Rt)&&(wt=!0):(wt=!0,ot.__version=J.version);let bn=ot.currentProgram;wt===!0&&(bn=$n(J,q,K));let wr=!1,zn=!1,Qi=!1;const Bt=bn.getUniforms(),An=ot.uniforms;if(tt.useProgram(bn.program)&&(wr=!0,zn=!0,Qi=!0),J.id!==R&&(R=J.id,zn=!0),wr||A!==C){tt.buffers.depth.getReversed()?(Ee.copy(C.projectionMatrix),Px(Ee),Lx(Ee),Bt.setValue(V,"projectionMatrix",Ee)):Bt.setValue(V,"projectionMatrix",C.projectionMatrix),Bt.setValue(V,"viewMatrix",C.matrixWorldInverse);const gn=Bt.map.cameraPosition;gn!==void 0&&gn.setValue(V,Ye.setFromMatrixPosition(C.matrixWorld)),Ge.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,zn=!0,Qi=!0)}if(K.isSkinnedMesh){Bt.setOptional(V,K,"bindMatrix"),Bt.setOptional(V,K,"bindMatrixInverse");const Sn=K.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Bt.setValue(V,"boneTexture",Sn.boneTexture,F))}K.isBatchedMesh&&(Bt.setOptional(V,K,"batchingTexture"),Bt.setValue(V,"batchingTexture",K._matricesTexture,F),Bt.setOptional(V,K,"batchingIdTexture"),Bt.setValue(V,"batchingIdTexture",K._indirectTexture,F),Bt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Bt.setValue(V,"batchingColorTexture",K._colorsTexture,F));const mn=ce.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&H.update(K,ce,bn),(zn||ot.receiveShadow!==K.receiveShadow)&&(ot.receiveShadow=K.receiveShadow,Bt.setValue(V,"receiveShadow",K.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(An.envMap.value=Ke,An.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),zn&&(Bt.setValue(V,"toneMappingExposure",w.toneMappingExposure),ot.needsLights&&Wt(An,Qi),Pe&&J.fog===!0&&Oe.refreshFogUniforms(An,Pe),Oe.refreshMaterialUniforms(An,J,W,de,y.state.transmissionRenderTarget[C.id]),Ru.upload(V,Ki(ot),An,F)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ru.upload(V,Ki(ot),An,F),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Bt.setValue(V,"center",K.center),Bt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Bt.setValue(V,"normalMatrix",K.normalMatrix),Bt.setValue(V,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Sn=J.uniformsGroups;for(let gn=0,Lt=Sn.length;gn<Lt;gn++){const Vi=Sn[gn];X.update(Vi,bn),X.bind(Vi,bn)}}return bn}function Wt(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Ai(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,q,ce){const J=qe.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),qe.get(C.texture).__webglTexture=q,qe.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ce,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ce=qe.get(C);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0};const pn=V.createFramebuffer();this.setRenderTarget=function(C,q=0,ce=0){O=C,I=q,D=ce;let J=!0,K=null,Pe=!1,ze=!1;if(C){const Ke=qe.get(C);if(Ke.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(V.FRAMEBUFFER,null),J=!1;else if(Ke.__webglFramebuffer===void 0)F.setupRenderTarget(C);else if(Ke.__hasExternalTextures)F.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qe=C.depthTexture;if(Ke.__boundDepthTexture!==Qe){if(Qe!==null&&qe.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(C)}}const mt=C.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(ze=!0);const dt=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(dt[q])?K=dt[q][ce]:K=dt[q],Pe=!0):C.samples>0&&F.useMultisampledRTT(C)===!1?K=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(dt)?K=dt[ce]:K=dt,z.copy(C.viewport),k.copy(C.scissor),Y=C.scissorTest}else z.copy(G).multiplyScalar(W).floor(),k.copy(re).multiplyScalar(W).floor(),Y=Ie;if(ce!==0&&(K=pn),tt.bindFramebuffer(V.FRAMEBUFFER,K)&&J&&tt.drawBuffers(C,K),tt.viewport(z),tt.scissor(k),tt.setScissorTest(Y),Pe){const Ke=qe.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ke.__webglTexture,ce)}else if(ze){const Ke=qe.get(C.texture),mt=q;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ke.__webglTexture,ce,mt)}else if(C!==null&&ce!==0){const Ke=qe.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ke.__webglTexture,ce)}R=-1},this.readRenderTargetPixels=function(C,q,ce,J,K,Pe,ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We){tt.bindFramebuffer(V.FRAMEBUFFER,We);try{const Ke=C.texture,mt=Ke.format,dt=Ke.type;if(!Ge.textureFormatReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-J&&ce>=0&&ce<=C.height-K&&V.readPixels(q,ce,J,K,we.convert(mt),we.convert(dt),Pe)}finally{const Ke=O!==null?qe.get(O).__webglFramebuffer:null;tt.bindFramebuffer(V.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(C,q,ce,J,K,Pe,ze){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We)if(q>=0&&q<=C.width-J&&ce>=0&&ce<=C.height-K){tt.bindFramebuffer(V.FRAMEBUFFER,We);const Ke=C.texture,mt=Ke.format,dt=Ke.type;if(!Ge.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),V.readPixels(q,ce,J,K,we.convert(mt),we.convert(dt),0);const Tt=O!==null?qe.get(O).__webglFramebuffer:null;tt.bindFramebuffer(V.FRAMEBUFFER,Tt);const yt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Cx(V,yt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe),V.deleteBuffer(Qe),V.deleteSync(yt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ce=0){const J=Math.pow(2,-ce),K=Math.floor(C.image.width*J),Pe=Math.floor(C.image.height*J),ze=q!==null?q.x:0,We=q!==null?q.y:0;F.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,ze,We,K,Pe),tt.unbindTexture()};const Zi=V.createFramebuffer(),is=V.createFramebuffer();this.copyTextureToTexture=function(C,q,ce=null,J=null,K=0,Pe=null){Pe===null&&(K!==0?(Au("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=K,K=0):Pe=0);let ze,We,Ke,mt,dt,Qe,Tt,yt,Jt;const jt=C.isCompressedTexture?C.mipmaps[Pe]:C.image;if(ce!==null)ze=ce.max.x-ce.min.x,We=ce.max.y-ce.min.y,Ke=ce.isBox3?ce.max.z-ce.min.z:1,mt=ce.min.x,dt=ce.min.y,Qe=ce.isBox3?ce.min.z:0;else{const mn=Math.pow(2,-K);ze=Math.floor(jt.width*mn),We=Math.floor(jt.height*mn),C.isDataArrayTexture?Ke=jt.depth:C.isData3DTexture?Ke=Math.floor(jt.depth*mn):Ke=1,mt=0,dt=0,Qe=0}J!==null?(Tt=J.x,yt=J.y,Jt=J.z):(Tt=0,yt=0,Jt=0);const Rt=we.convert(q.format),ot=we.convert(q.type);let en;q.isData3DTexture?(F.setTexture3D(q,0),en=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(F.setTexture2DArray(q,0),en=V.TEXTURE_2D_ARRAY):(F.setTexture2D(q,0),en=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const wt=V.getParameter(V.UNPACK_ROW_LENGTH),bn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),wr=V.getParameter(V.UNPACK_SKIP_PIXELS),zn=V.getParameter(V.UNPACK_SKIP_ROWS),Qi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,mt),V.pixelStorei(V.UNPACK_SKIP_ROWS,dt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const Bt=C.isDataArrayTexture||C.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const mn=qe.get(C),Sn=qe.get(q),gn=qe.get(mn.__renderTarget),Lt=qe.get(Sn.__renderTarget);tt.bindFramebuffer(V.READ_FRAMEBUFFER,gn.__webglFramebuffer),tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Vi=0;Vi<Ke;Vi++)Bt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(C).__webglTexture,K,Qe+Vi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(q).__webglTexture,Pe,Jt+Vi)),V.blitFramebuffer(mt,dt,ze,We,Tt,yt,ze,We,V.DEPTH_BUFFER_BIT,V.NEAREST);tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||qe.has(C)){const mn=qe.get(C),Sn=qe.get(q);tt.bindFramebuffer(V.READ_FRAMEBUFFER,Zi),tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,is);for(let gn=0;gn<Ke;gn++)Bt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,K,Qe+gn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,K),An?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Sn.__webglTexture,Pe,Jt+gn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Sn.__webglTexture,Pe),K!==0?V.blitFramebuffer(mt,dt,ze,We,Tt,yt,ze,We,V.COLOR_BUFFER_BIT,V.NEAREST):An?V.copyTexSubImage3D(en,Pe,Tt,yt,Jt+gn,mt,dt,ze,We):V.copyTexSubImage2D(en,Pe,Tt,yt,mt,dt,ze,We);tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else An?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(en,Pe,Tt,yt,Jt,ze,We,Ke,Rt,ot,jt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(en,Pe,Tt,yt,Jt,ze,We,Ke,Rt,jt.data):V.texSubImage3D(en,Pe,Tt,yt,Jt,ze,We,Ke,Rt,ot,jt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pe,Tt,yt,ze,We,Rt,ot,jt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pe,Tt,yt,jt.width,jt.height,Rt,jt.data):V.texSubImage2D(V.TEXTURE_2D,Pe,Tt,yt,ze,We,Rt,ot,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,wt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,wr),V.pixelStorei(V.UNPACK_SKIP_ROWS,zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qi),Pe===0&&q.generateMipmaps&&V.generateMipmap(en),tt.unbindTexture()},this.copyTextureToTexture3D=function(C,q,ce=null,J=null,K=0){return Au('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,ce,J,K)},this.initRenderTarget=function(C){qe.get(C).__webglFramebuffer===void 0&&F.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?F.setTextureCube(C,0):C.isData3DTexture?F.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?F.setTexture2DArray(C,0):F.setTexture2D(C,0),tt.unbindTexture()},this.resetState=function(){I=0,D=0,O=null,tt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}function XT(r){const e=[...new Set(r.map(t=>String(t.session_id)))].sort();return new Map(e.map((t,n)=>[t,n]))}function $T({payload:r,currentTurnId:e,liftMode:t,onSelectTurn:n}){const a=Je.useRef(null),o=Je.useMemo(()=>XT(r.turns??[]),[r.turns]),[u,c]=Je.useState(null);return Je.useEffect(()=>{if(!a.current)return;const h=a.current;c(null);let f=null,m=null,g=null,v=null,x=0,E=null;try{const M=new i_;M.background=new Ct("#120d08");const S=new ci(45,h.clientWidth/Math.max(h.clientHeight,1),.1,1e3);S.position.set(0,0,28),f=new p_({antialias:!0}),f.setSize(h.clientWidth,Math.max(h.clientHeight,240)),h.innerHTML="",h.appendChild(f.domElement);const y=r.turns??[];g=new yf({color:12155706,transparent:!0,opacity:.5}),m=new di;const N=new Float32Array(y.length*3),L=new Float32Array(y.length*3),w=new Map;for(const z of y){const k=String(z.display_attractor_label??z.dominant_label??"");w.set(k,(w.get(k)??0)+1)}y.forEach((z,k)=>{const Y=w.get(String(z.display_attractor_label??z.dominant_label??""))??1,se=o.get(String(z.session_id))??0,pe=t==="flat"?0:t==="time_lift"?k*.7:t==="density_lift"?Y*1.2:se*2.4;N[k*3]=Number(z.x??0),N[k*3+1]=Number(z.y??0),N[k*3+2]=pe;const ee=e===z.turn_id;L[k*3]=ee?1:.91,L[k*3+1]=ee?.95:.66,L[k*3+2]=ee?.67:.34,z.sequence_z=pe}),m.setAttribute("position",new Vn(N,3)),m.setAttribute("color",new Vn(L,3));const P=new a_(m,new xf({size:.6,vertexColors:!0}));if(M.add(P),y.length>1){const z=new di;z.setAttribute("position",new Vn(N,3)),M.add(new s_(z,g))}const I=new uS,D=new Ot;v=z=>{if(!f)return;const k=f.domElement.getBoundingClientRect();D.x=(z.clientX-k.left)/k.width*2-1,D.y=-((z.clientY-k.top)/k.height)*2+1,I.params.Points={threshold:1.2},I.setFromCamera(D,S);const se=I.intersectObject(P)[0];if(!se||se.index==null)return;const pe=y[se.index];pe!=null&&pe.turn_id&&n(String(pe.turn_id))},f.domElement.addEventListener("click",v);const O=new l_(16777215,1);M.add(O);let R=0;const A=()=>{f&&(R+=1,e||(M.rotation.y=Math.sin(R/180)*.08),f.render(M,S),x=window.requestAnimationFrame(A))};A(),E=()=>{if(!f)return;const z=h.clientWidth||640,k=Math.max(h.clientHeight,240);S.aspect=z/k,S.updateProjectionMatrix(),f.setSize(z,k)},window.addEventListener("resize",E)}catch(M){h.innerHTML="",c(M instanceof Error?M.message:"Basin renderer unavailable.")}return()=>{E&&window.removeEventListener("resize",E),f!=null&&f.domElement&&v&&f.domElement.removeEventListener("click",v),window.cancelAnimationFrame(x),f==null||f.dispose(),m==null||m.dispose(),g==null||g.dispose(),h.innerHTML=""}},[r,e,t,n,o]),u?U.jsxs("div",{className:"empty-state","data-testid":"basin-plot-fallback",role:"note",children:[U.jsx("h2",{children:"Basin renderer unavailable"}),U.jsx("p",{children:u}),U.jsx("p",{children:"Use Basin Turns, transcript buttons, and projection metadata to keep the trajectory view truthful."})]},"basin-fallback"):U.jsx("div",{"aria-label":"Basin plot",className:"basin-panel","data-testid":"basin-plot",ref:a,role:"region"},"basin-canvas")}var hu={exports:{}},av;function YT(){if(av)return hu.exports;av=1;var r=typeof Reflect=="object"?Reflect:null,e=r&&typeof r.apply=="function"?r.apply:function(P,I,D){return Function.prototype.apply.call(P,I,D)},t;r&&typeof r.ownKeys=="function"?t=r.ownKeys:Object.getOwnPropertySymbols?t=function(P){return Object.getOwnPropertyNames(P).concat(Object.getOwnPropertySymbols(P))}:t=function(P){return Object.getOwnPropertyNames(P)};function n(w){console&&console.warn&&console.warn(w)}var a=Number.isNaN||function(P){return P!==P};function o(){o.init.call(this)}hu.exports=o,hu.exports.once=y,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var u=10;function c(w){if(typeof w!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof w)}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(w){if(typeof w!="number"||w<0||a(w))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+w+".");u=w}}),o.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(P){if(typeof P!="number"||P<0||a(P))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+P+".");return this._maxListeners=P,this};function h(w){return w._maxListeners===void 0?o.defaultMaxListeners:w._maxListeners}o.prototype.getMaxListeners=function(){return h(this)},o.prototype.emit=function(P){for(var I=[],D=1;D<arguments.length;D++)I.push(arguments[D]);var O=P==="error",R=this._events;if(R!==void 0)O=O&&R.error===void 0;else if(!O)return!1;if(O){var A;if(I.length>0&&(A=I[0]),A instanceof Error)throw A;var z=new Error("Unhandled error."+(A?" ("+A.message+")":""));throw z.context=A,z}var k=R[P];if(k===void 0)return!1;if(typeof k=="function")e(k,this,I);else for(var Y=k.length,se=E(k,Y),D=0;D<Y;++D)e(se[D],this,I);return!0};function f(w,P,I,D){var O,R,A;if(c(I),R=w._events,R===void 0?(R=w._events=Object.create(null),w._eventsCount=0):(R.newListener!==void 0&&(w.emit("newListener",P,I.listener?I.listener:I),R=w._events),A=R[P]),A===void 0)A=R[P]=I,++w._eventsCount;else if(typeof A=="function"?A=R[P]=D?[I,A]:[A,I]:D?A.unshift(I):A.push(I),O=h(w),O>0&&A.length>O&&!A.warned){A.warned=!0;var z=new Error("Possible EventEmitter memory leak detected. "+A.length+" "+String(P)+" listeners added. Use emitter.setMaxListeners() to increase limit");z.name="MaxListenersExceededWarning",z.emitter=w,z.type=P,z.count=A.length,n(z)}return w}o.prototype.addListener=function(P,I){return f(this,P,I,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(P,I){return f(this,P,I,!0)};function m(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(w,P,I){var D={fired:!1,wrapFn:void 0,target:w,type:P,listener:I},O=m.bind(D);return O.listener=I,D.wrapFn=O,O}o.prototype.once=function(P,I){return c(I),this.on(P,g(this,P,I)),this},o.prototype.prependOnceListener=function(P,I){return c(I),this.prependListener(P,g(this,P,I)),this},o.prototype.removeListener=function(P,I){var D,O,R,A,z;if(c(I),O=this._events,O===void 0)return this;if(D=O[P],D===void 0)return this;if(D===I||D.listener===I)--this._eventsCount===0?this._events=Object.create(null):(delete O[P],O.removeListener&&this.emit("removeListener",P,D.listener||I));else if(typeof D!="function"){for(R=-1,A=D.length-1;A>=0;A--)if(D[A]===I||D[A].listener===I){z=D[A].listener,R=A;break}if(R<0)return this;R===0?D.shift():M(D,R),D.length===1&&(O[P]=D[0]),O.removeListener!==void 0&&this.emit("removeListener",P,z||I)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(P){var I,D,O;if(D=this._events,D===void 0)return this;if(D.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):D[P]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete D[P]),this;if(arguments.length===0){var R=Object.keys(D),A;for(O=0;O<R.length;++O)A=R[O],A!=="removeListener"&&this.removeAllListeners(A);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(I=D[P],typeof I=="function")this.removeListener(P,I);else if(I!==void 0)for(O=I.length-1;O>=0;O--)this.removeListener(P,I[O]);return this};function v(w,P,I){var D=w._events;if(D===void 0)return[];var O=D[P];return O===void 0?[]:typeof O=="function"?I?[O.listener||O]:[O]:I?S(O):E(O,O.length)}o.prototype.listeners=function(P){return v(this,P,!0)},o.prototype.rawListeners=function(P){return v(this,P,!1)},o.listenerCount=function(w,P){return typeof w.listenerCount=="function"?w.listenerCount(P):x.call(w,P)},o.prototype.listenerCount=x;function x(w){var P=this._events;if(P!==void 0){var I=P[w];if(typeof I=="function")return 1;if(I!==void 0)return I.length}return 0}o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function E(w,P){for(var I=new Array(P),D=0;D<P;++D)I[D]=w[D];return I}function M(w,P){for(;P+1<w.length;P++)w[P]=w[P+1];w.pop()}function S(w){for(var P=new Array(w.length),I=0;I<P.length;++I)P[I]=w[I].listener||w[I];return P}function y(w,P){return new Promise(function(I,D){function O(A){w.removeListener(P,R),D(A)}function R(){typeof w.removeListener=="function"&&w.removeListener("error",O),I([].slice.call(arguments))}L(w,P,R,{once:!0}),P!=="error"&&N(w,O,{once:!0})})}function N(w,P,I){typeof w.on=="function"&&L(w,"error",P,I)}function L(w,P,I,D){if(typeof w.on=="function")D.once?w.once(P,I):w.on(P,I);else if(typeof w.addEventListener=="function")w.addEventListener(P,function O(R){D.once&&w.removeEventListener(P,O),I(R)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof w)}return hu.exports}var m_=YT();function qT(){const r=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(arguments[e])for(const n in arguments[e])r[n]=arguments[e][n];return r}let dn=qT;typeof Object.assign=="function"&&(dn=Object.assign);function Ei(r,e,t,n){const a=r._nodes.get(e);let o=null;return a&&(n==="mixed"?o=a.out&&a.out[t]||a.undirected&&a.undirected[t]:n==="directed"?o=a.out&&a.out[t]:o=a.undirected&&a.undirected[t]),o}function wn(r){return typeof r=="object"&&r!==null}function g_(r){let e;for(e in r)return!1;return!0}function yi(r,e,t){Object.defineProperty(r,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function ki(r,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(r,e,n)}function ov(r){return!(!wn(r)||r.attributes&&!Array.isArray(r.attributes))}function KT(){let r=Math.floor(Math.random()*256)&255;return()=>r++}function xr(){const r=arguments;let e=null,t=-1;return{[Symbol.iterator](){return this},next(){let n=null;do{if(e===null){if(t++,t>=r.length)return{done:!0};e=r[t][Symbol.iterator]()}if(n=e.next(),n.done){e=null;continue}break}while(!0);return n}}}function La(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class Ef extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class Ve extends Ef{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ve.prototype.constructor)}}class Ue extends Ef{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ue.prototype.constructor)}}class ht extends Ef{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ht.prototype.constructor)}}function v_(r,e){this.key=r,this.attributes=e,this.clear()}v_.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function __(r,e){this.key=r,this.attributes=e,this.clear()}__.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function y_(r,e){this.key=r,this.attributes=e,this.clear()}y_.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function Da(r,e,t,n,a){this.key=e,this.attributes=a,this.undirected=r,this.source=t,this.target=n}Da.prototype.attach=function(){let r="out",e="in";this.undirected&&(r=e="undirected");const t=this.source.key,n=this.target.key;this.source[r][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};Da.prototype.attachMulti=function(){let r="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(r=e="undirected");const a=this.source[r],o=a[n];if(typeof o>"u"){a[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}o.previous=this,this.next=o,a[n]=this,this.target[e][t]=this};Da.prototype.detach=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][r]};Da.prototype.detachMulti=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][r]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][r]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const x_=0,S_=1,ZT=2,E_=3;function Mr(r,e,t,n,a,o,u){let c,h,f,m;if(n=""+n,t===x_){if(c=r._nodes.get(n),!c)throw new Ue(`Graph.${e}: could not find the "${n}" node in the graph.`);f=a,m=o}else if(t===E_){if(a=""+a,h=r._edges.get(a),!h)throw new Ue(`Graph.${e}: could not find the "${a}" edge in the graph.`);const g=h.source.key,v=h.target.key;if(n===g)c=h.target;else if(n===v)c=h.source;else throw new Ue(`Graph.${e}: the "${n}" node is not attached to the "${a}" edge (${g}, ${v}).`);f=o,m=u}else{if(h=r._edges.get(n),!h)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===S_?c=h.source:c=h.target,f=a,m=o}return[c,f,m]}function QT(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=Mr(this,e,t,n,a,o);return u.attributes[c]}}function JT(r,e,t){r.prototype[e]=function(n,a){const[o]=Mr(this,e,t,n,a);return o.attributes}}function eb(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=Mr(this,e,t,n,a,o);return u.attributes.hasOwnProperty(c)}}function tb(r,e,t){r.prototype[e]=function(n,a,o,u){const[c,h,f]=Mr(this,e,t,n,a,o,u);return c.attributes[h]=f,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function nb(r,e,t){r.prototype[e]=function(n,a,o,u){const[c,h,f]=Mr(this,e,t,n,a,o,u);if(typeof f!="function")throw new Ve(`Graph.${e}: updater should be a function.`);const m=c.attributes,g=f(m[h]);return m[h]=g,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function ib(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=Mr(this,e,t,n,a,o);return delete u.attributes[c],this.emit("nodeAttributesUpdated",{key:u.key,type:"remove",attributes:u.attributes,name:c}),this}}function rb(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=Mr(this,e,t,n,a,o);if(!wn(c))throw new Ve(`Graph.${e}: provided attributes are not a plain object.`);return u.attributes=c,this.emit("nodeAttributesUpdated",{key:u.key,type:"replace",attributes:u.attributes}),this}}function sb(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=Mr(this,e,t,n,a,o);if(!wn(c))throw new Ve(`Graph.${e}: provided attributes are not a plain object.`);return dn(u.attributes,c),this.emit("nodeAttributesUpdated",{key:u.key,type:"merge",attributes:u.attributes,data:c}),this}}function ab(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=Mr(this,e,t,n,a,o);if(typeof c!="function")throw new Ve(`Graph.${e}: provided updater is not a function.`);return u.attributes=c(u.attributes),this.emit("nodeAttributesUpdated",{key:u.key,type:"update",attributes:u.attributes}),this}}const ob=[{name:r=>`get${r}Attribute`,attacher:QT},{name:r=>`get${r}Attributes`,attacher:JT},{name:r=>`has${r}Attribute`,attacher:eb},{name:r=>`set${r}Attribute`,attacher:tb},{name:r=>`update${r}Attribute`,attacher:nb},{name:r=>`remove${r}Attribute`,attacher:ib},{name:r=>`replace${r}Attributes`,attacher:rb},{name:r=>`merge${r}Attributes`,attacher:sb},{name:r=>`update${r}Attributes`,attacher:ab}];function lb(r){ob.forEach(function({name:e,attacher:t}){t(r,e("Node"),x_),t(r,e("Source"),S_),t(r,e("Target"),ZT),t(r,e("Opposite"),E_)})}function ub(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ht(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ht(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=Ei(this,u,c,t),!o)throw new Ue(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ht(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes[a]}}function cb(r,e,t){r.prototype[e]=function(n){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ht(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new ht(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,u=""+arguments[1];if(a=Ei(this,o,u,t),!a)throw new Ue(`Graph.${e}: could not find an edge for the given path ("${o}" - "${u}").`)}else{if(t!=="mixed")throw new ht(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes}}function db(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ht(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ht(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=Ei(this,u,c,t),!o)throw new Ue(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ht(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes.hasOwnProperty(a)}}function hb(r,e,t){r.prototype[e]=function(n,a,o){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ht(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ht(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+a;if(a=arguments[2],o=arguments[3],u=Ei(this,c,h,t),!u)throw new Ue(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new ht(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return u.attributes[a]=o,this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:a}),this}}function fb(r,e,t){r.prototype[e]=function(n,a,o){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ht(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ht(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+a;if(a=arguments[2],o=arguments[3],u=Ei(this,c,h,t),!u)throw new Ue(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new ht(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof o!="function")throw new Ve(`Graph.${e}: updater should be a function.`);return u.attributes[a]=o(u.attributes[a]),this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:a}),this}}function pb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ht(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ht(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=Ei(this,u,c,t),!o)throw new Ue(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ht(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete o.attributes[a],this.emit("edgeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:a}),this}}function mb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ht(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ht(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=Ei(this,u,c,t),!o)throw new Ue(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ht(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!wn(a))throw new Ve(`Graph.${e}: provided attributes are not a plain object.`);return o.attributes=a,this.emit("edgeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function gb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ht(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ht(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=Ei(this,u,c,t),!o)throw new Ue(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ht(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!wn(a))throw new Ve(`Graph.${e}: provided attributes are not a plain object.`);return dn(o.attributes,a),this.emit("edgeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:a}),this}}function vb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ht(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ht(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=Ei(this,u,c,t),!o)throw new Ue(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ht(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ue(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof a!="function")throw new Ve(`Graph.${e}: provided updater is not a function.`);return o.attributes=a(o.attributes),this.emit("edgeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}const _b=[{name:r=>`get${r}Attribute`,attacher:ub},{name:r=>`get${r}Attributes`,attacher:cb},{name:r=>`has${r}Attribute`,attacher:db},{name:r=>`set${r}Attribute`,attacher:hb},{name:r=>`update${r}Attribute`,attacher:fb},{name:r=>`remove${r}Attribute`,attacher:pb},{name:r=>`replace${r}Attributes`,attacher:mb},{name:r=>`merge${r}Attributes`,attacher:gb},{name:r=>`update${r}Attributes`,attacher:vb}];function yb(r){_b.forEach(function({name:e,attacher:t}){t(r,e("Edge"),"mixed"),t(r,e("DirectedEdge"),"directed"),t(r,e("UndirectedEdge"),"undirected")})}const xb=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function Sb(r,e,t,n){let a=!1;for(const o in e){if(o===n)continue;const u=e[o];if(a=t(u.key,u.attributes,u.source.key,u.target.key,u.source.attributes,u.target.attributes,u.undirected),r&&a)return u.key}}function Eb(r,e,t,n){let a,o,u,c=!1;for(const h in e)if(h!==n){a=e[h];do{if(o=a.source,u=a.target,c=t(a.key,a.attributes,o.key,u.key,o.attributes,u.attributes,a.undirected),r&&c)return a.key;a=a.next}while(a!==void 0)}}function eh(r,e){const t=Object.keys(r),n=t.length;let a,o=0;return{[Symbol.iterator](){return this},next(){do if(a)a=a.next;else{if(o>=n)return{done:!0};const u=t[o++];if(u===e){a=void 0;continue}a=r[u]}while(!a);return{done:!1,value:{edge:a.key,attributes:a.attributes,source:a.source.key,target:a.target.key,sourceAttributes:a.source.attributes,targetAttributes:a.target.attributes,undirected:a.undirected}}}}}function Mb(r,e,t,n){const a=e[t];if(!a)return;const o=a.source,u=a.target;if(n(a.key,a.attributes,o.key,u.key,o.attributes,u.attributes,a.undirected)&&r)return a.key}function wb(r,e,t,n){let a=e[t];if(!a)return;let o=!1;do{if(o=n(a.key,a.attributes,a.source.key,a.target.key,a.source.attributes,a.target.attributes,a.undirected),r&&o)return a.key;a=a.next}while(a!==void 0)}function th(r,e){let t=r[e];if(t.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!t)return{done:!0};const a={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:a}}};let n=!1;return{[Symbol.iterator](){return this},next(){return n===!0?{done:!0}:(n=!0,{done:!1,value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected}})}}}function Tb(r,e){if(r.size===0)return[];if(e==="mixed"||e===r.type)return Array.from(r._edges.keys());const t=e==="undirected"?r.undirectedSize:r.directedSize,n=new Array(t),a=e==="undirected",o=r._edges.values();let u=0,c,h;for(;c=o.next(),c.done!==!0;)h=c.value,h.undirected===a&&(n[u++]=h.key);return n}function M_(r,e,t,n){if(e.size===0)return;const a=t!=="mixed"&&t!==e.type,o=t==="undirected";let u,c,h=!1;const f=e._edges.values();for(;u=f.next(),u.done!==!0;){if(c=u.value,a&&c.undirected!==o)continue;const{key:m,attributes:g,source:v,target:x}=c;if(h=n(m,g,v.key,x.key,v.attributes,x.attributes,c.undirected),r&&h)return m}}function bb(r,e){if(r.size===0)return La();const t=e!=="mixed"&&e!==r.type,n=e==="undirected",a=r._edges.values();return{[Symbol.iterator](){return this},next(){let o,u;for(;;){if(o=a.next(),o.done)return o;if(u=o.value,!(t&&u.undirected!==n))break}return{value:{edge:u.key,attributes:u.attributes,source:u.source.key,target:u.target.key,sourceAttributes:u.source.attributes,targetAttributes:u.target.attributes,undirected:u.undirected},done:!1}}}}function Mf(r,e,t,n,a,o){const u=e?Eb:Sb;let c;if(t!=="undirected"&&(n!=="out"&&(c=u(r,a.in,o),r&&c)||n!=="in"&&(c=u(r,a.out,o,n?void 0:a.key),r&&c))||t!=="directed"&&(c=u(r,a.undirected,o),r&&c))return c}function Ab(r,e,t,n){const a=[];return Mf(!1,r,e,t,n,function(o){a.push(o)}),a}function Rb(r,e,t){let n=La();return r!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=xr(n,eh(t.in))),e!=="in"&&typeof t.out<"u"&&(n=xr(n,eh(t.out,e?void 0:t.key)))),r!=="directed"&&typeof t.undirected<"u"&&(n=xr(n,eh(t.undirected))),n}function wf(r,e,t,n,a,o,u){const c=t?wb:Mb;let h;if(e!=="undirected"&&(typeof a.in<"u"&&n!=="out"&&(h=c(r,a.in,o,u),r&&h)||typeof a.out<"u"&&n!=="in"&&(n||a.key!==o)&&(h=c(r,a.out,o,u),r&&h))||e!=="directed"&&typeof a.undirected<"u"&&(h=c(r,a.undirected,o,u),r&&h))return h}function Cb(r,e,t,n,a){const o=[];return wf(!1,r,e,t,n,a,function(u){o.push(u)}),o}function Pb(r,e,t,n){let a=La();return r!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(a=xr(a,th(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(a=xr(a,th(t.out,n)))),r!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(a=xr(a,th(t.undirected,n))),a}function Lb(r,e){const{name:t,type:n,direction:a}=e;r.prototype[t]=function(o,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return Tb(this,n);if(arguments.length===1){o=""+o;const c=this._nodes.get(o);if(typeof c>"u")throw new Ue(`Graph.${t}: could not find the "${o}" node in the graph.`);return Ab(this.multi,n==="mixed"?this.type:n,a,c)}if(arguments.length===2){o=""+o,u=""+u;const c=this._nodes.get(o);if(!c)throw new Ue(`Graph.${t}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(u))throw new Ue(`Graph.${t}:  could not find the "${u}" target node in the graph.`);return Cb(n,this.multi,a,c,u)}throw new Ve(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Db(r,e){const{name:t,type:n,direction:a}=e,o="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[o]=function(f,m,g){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return g=f,M_(!1,this,n,g);if(arguments.length===2){f=""+f,g=m;const v=this._nodes.get(f);if(typeof v>"u")throw new Ue(`Graph.${o}: could not find the "${f}" node in the graph.`);return Mf(!1,this.multi,n==="mixed"?this.type:n,a,v,g)}if(arguments.length===3){f=""+f,m=""+m;const v=this._nodes.get(f);if(!v)throw new Ue(`Graph.${o}:  could not find the "${f}" source node in the graph.`);if(!this._nodes.has(m))throw new Ue(`Graph.${o}:  could not find the "${m}" target node in the graph.`);return wf(!1,n,this.multi,a,v,m,g)}throw new Ve(`Graph.${o}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop();let g;if(f.length===0){let v=0;n!=="directed"&&(v+=this.undirectedSize),n!=="undirected"&&(v+=this.directedSize),g=new Array(v);let x=0;f.push((E,M,S,y,N,L,w)=>{g[x++]=m(E,M,S,y,N,L,w)})}else g=[],f.push((v,x,E,M,S,y,N)=>{g.push(m(v,x,E,M,S,y,N))});return this[o].apply(this,f),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop(),g=[];return f.push((v,x,E,M,S,y,N)=>{m(v,x,E,M,S,y,N)&&g.push(v)}),this[o].apply(this,f),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(){let f=Array.prototype.slice.call(arguments);if(f.length<2||f.length>4)throw new Ve(`Graph.${h}: invalid number of arguments (expecting 2, 3 or 4 and got ${f.length}).`);if(typeof f[f.length-1]=="function"&&typeof f[f.length-2]!="function")throw new Ve(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let m,g;f.length===2?(m=f[0],g=f[1],f=[]):f.length===3?(m=f[1],g=f[2],f=[f[0]]):f.length===4&&(m=f[2],g=f[3],f=[f[0],f[1]]);let v=g;return f.push((x,E,M,S,y,N,L)=>{v=m(v,x,E,M,S,y,N,L)}),this[o].apply(this,f),v}}function Nb(r,e){const{name:t,type:n,direction:a}=e,o="find"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[o]=function(h,f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return m=h,M_(!0,this,n,m);if(arguments.length===2){h=""+h,m=f;const g=this._nodes.get(h);if(typeof g>"u")throw new Ue(`Graph.${o}: could not find the "${h}" node in the graph.`);return Mf(!0,this.multi,n==="mixed"?this.type:n,a,g,m)}if(arguments.length===3){h=""+h,f=""+f;const g=this._nodes.get(h);if(!g)throw new Ue(`Graph.${o}:  could not find the "${h}" source node in the graph.`);if(!this._nodes.has(f))throw new Ue(`Graph.${o}:  could not find the "${f}" target node in the graph.`);return wf(!0,n,this.multi,a,g,f,m)}throw new Ve(`Graph.${o}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const u="some"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[u]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,E,M,S,y)=>f(g,v,x,E,M,S,y)),!!this[o].apply(this,h)};const c="every"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[c]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,E,M,S,y)=>!f(g,v,x,E,M,S,y)),!this[o].apply(this,h)}}function Ib(r,e){const{name:t,type:n,direction:a}=e,o=t.slice(0,-1)+"Entries";r.prototype[o]=function(u,c){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return La();if(!arguments.length)return bb(this,n);if(arguments.length===1){u=""+u;const h=this._nodes.get(u);if(!h)throw new Ue(`Graph.${o}: could not find the "${u}" node in the graph.`);return Rb(n,a,h)}if(arguments.length===2){u=""+u,c=""+c;const h=this._nodes.get(u);if(!h)throw new Ue(`Graph.${o}:  could not find the "${u}" source node in the graph.`);if(!this._nodes.has(c))throw new Ue(`Graph.${o}:  could not find the "${c}" target node in the graph.`);return Pb(n,a,h,c)}throw new Ve(`Graph.${o}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Ub(r){xb.forEach(e=>{Lb(r,e),Db(r,e),Nb(r,e),Ib(r,e)})}const Fb=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function Bu(){this.A=null,this.B=null}Bu.prototype.wrap=function(r){this.A===null?this.A=r:this.B===null&&(this.B=r)};Bu.prototype.has=function(r){return this.A!==null&&r in this.A||this.B!==null&&r in this.B};function yo(r,e,t,n,a){for(const o in n){const u=n[o],c=u.source,h=u.target,f=c===t?h:c;if(e&&e.has(f.key))continue;const m=a(f.key,f.attributes);if(r&&m)return f.key}}function Tf(r,e,t,n,a){if(e!=="mixed"){if(e==="undirected")return yo(r,null,n,n.undirected,a);if(typeof t=="string")return yo(r,null,n,n[t],a)}const o=new Bu;let u;if(e!=="undirected"){if(t!=="out"){if(u=yo(r,null,n,n.in,a),r&&u)return u;o.wrap(n.in)}if(t!=="in"){if(u=yo(r,o,n,n.out,a),r&&u)return u;o.wrap(n.out)}}if(e!=="directed"&&(u=yo(r,o,n,n.undirected,a),r&&u))return u}function kb(r,e,t){if(r!=="mixed"){if(r==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return Tf(!1,r,e,t,function(a){n.push(a)}),n}function xo(r,e,t){const n=Object.keys(t),a=n.length;let o=0;return{[Symbol.iterator](){return this},next(){let u=null;do{if(o>=a)return r&&r.wrap(t),{done:!0};const c=t[n[o++]],h=c.source,f=c.target;if(u=h===e?f:h,r&&r.has(u.key)){u=null;continue}}while(u===null);return{done:!1,value:{neighbor:u.key,attributes:u.attributes}}}}}function Ob(r,e,t){if(r!=="mixed"){if(r==="undirected")return xo(null,t,t.undirected);if(typeof e=="string")return xo(null,t,t[e])}let n=La();const a=new Bu;return r!=="undirected"&&(e!=="out"&&(n=xr(n,xo(a,t,t.in))),e!=="in"&&(n=xr(n,xo(a,t,t.out)))),r!=="directed"&&(n=xr(n,xo(a,t,t.undirected))),n}function zb(r,e){const{name:t,type:n,direction:a}=e;r.prototype[t]=function(o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];o=""+o;const u=this._nodes.get(o);if(typeof u>"u")throw new Ue(`Graph.${t}: could not find the "${o}" node in the graph.`);return kb(n==="mixed"?this.type:n,a,u)}}function Bb(r,e){const{name:t,type:n,direction:a}=e,o="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[o]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Ue(`Graph.${o}: could not find the "${f}" node in the graph.`);Tf(!1,n==="mixed"?this.type:n,a,g,m)};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(f,m){const g=[];return this[o](f,(v,x)=>{g.push(m(v,x))}),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(f,m){const g=[];return this[o](f,(v,x)=>{m(v,x)&&g.push(v)}),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(f,m,g){if(arguments.length<3)throw new Ve(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let v=g;return this[o](f,(x,E)=>{v=m(v,x,E)}),v}}function Gb(r,e){const{name:t,type:n,direction:a}=e,o=t[0].toUpperCase()+t.slice(1,-1),u="find"+o;r.prototype[u]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Ue(`Graph.${u}: could not find the "${f}" node in the graph.`);return Tf(!0,n==="mixed"?this.type:n,a,g,m)};const c="some"+o;r.prototype[c]=function(f,m){return!!this[u](f,m)};const h="every"+o;r.prototype[h]=function(f,m){return!this[u](f,(v,x)=>!m(v,x))}}function Hb(r,e){const{name:t,type:n,direction:a}=e,o=t.slice(0,-1)+"Entries";r.prototype[o]=function(u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return La();u=""+u;const c=this._nodes.get(u);if(typeof c>"u")throw new Ue(`Graph.${o}: could not find the "${u}" node in the graph.`);return Ob(n==="mixed"?this.type:n,a,c)}}function Vb(r){Fb.forEach(e=>{zb(r,e),Bb(r,e),Gb(r,e),Hb(r,e)})}function fu(r,e,t,n,a){const o=n._nodes.values(),u=n.type;let c,h,f,m,g,v;for(;c=o.next(),c.done!==!0;){let x=!1;if(h=c.value,u!=="undirected"){m=h.out;for(f in m){g=m[f];do v=g.target,x=!0,a(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}if(u!=="directed"){m=h.undirected;for(f in m)if(!(e&&h.key>f)){g=m[f];do v=g.target,v.key!==f&&(v=g.source),x=!0,a(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}t&&!x&&a(h.key,null,h.attributes,null,null,null,null)}}function Wb(r,e){const t={key:r};return g_(e.attributes)||(t.attributes=dn({},e.attributes)),t}function jb(r,e,t){const n={key:e,source:t.source.key,target:t.target.key};return g_(t.attributes)||(n.attributes=dn({},t.attributes)),r==="mixed"&&t.undirected&&(n.undirected=!0),n}function Xb(r){if(!wn(r))throw new Ve('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in r))throw new Ve("Graph.import: serialized node is missing its key.");if("attributes"in r&&(!wn(r.attributes)||r.attributes===null))throw new Ve("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function $b(r){if(!wn(r))throw new Ve('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in r))throw new Ve("Graph.import: serialized edge is missing its source.");if(!("target"in r))throw new Ve("Graph.import: serialized edge is missing its target.");if("attributes"in r&&(!wn(r.attributes)||r.attributes===null))throw new Ve("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in r&&typeof r.undirected!="boolean")throw new Ve("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const Yb=KT(),qb=new Set(["directed","undirected","mixed"]),lv=new Set(["domain","_events","_eventsCount","_maxListeners"]),Kb=[{name:r=>`${r}Edge`,generateKey:!0},{name:r=>`${r}DirectedEdge`,generateKey:!0,type:"directed"},{name:r=>`${r}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:r=>`${r}EdgeWithKey`},{name:r=>`${r}DirectedEdgeWithKey`,type:"directed"},{name:r=>`${r}UndirectedEdgeWithKey`,type:"undirected"}],Zb={allowSelfLoops:!0,multi:!1,type:"mixed"};function Qb(r,e,t){if(t&&!wn(t))throw new Ve(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},r._nodes.has(e))throw new ht(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function uv(r,e,t){const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function w_(r,e,t,n,a,o,u,c){if(!n&&r.type==="undirected")throw new ht(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new ht(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(c&&!wn(c))throw new Ve(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`);if(o=""+o,u=""+u,c=c||{},!r.allowSelfLoops&&o===u)throw new ht(`Graph.${e}: source & target are the same ("${o}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const h=r._nodes.get(o),f=r._nodes.get(u);if(!h)throw new Ue(`Graph.${e}: source node "${o}" not found.`);if(!f)throw new Ue(`Graph.${e}: target node "${u}" not found.`);const m={key:null,undirected:n,source:o,target:u,attributes:c};if(t)a=r._edgeKeyGenerator();else if(a=""+a,r._edges.has(a))throw new ht(`Graph.${e}: the "${a}" edge already exists in the graph.`);if(!r.multi&&(n?typeof h.undirected[u]<"u":typeof h.out[u]<"u"))throw new ht(`Graph.${e}: an edge linking "${o}" to "${u}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const g=new Da(n,a,h,f,c);r._edges.set(a,g);const v=o===u;return n?(h.undirectedDegree++,f.undirectedDegree++,v&&(h.undirectedLoops++,r._undirectedSelfLoopCount++)):(h.outDegree++,f.inDegree++,v&&(h.directedLoops++,r._directedSelfLoopCount++)),r.multi?g.attachMulti():g.attach(),n?r._undirectedSize++:r._directedSize++,m.key=a,r.emit("edgeAdded",m),a}function Jb(r,e,t,n,a,o,u,c,h){if(!n&&r.type==="undirected")throw new ht(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new ht(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(c){if(h){if(typeof c!="function")throw new Ve(`Graph.${e}: invalid updater function. Expecting a function but got "${c}"`)}else if(!wn(c))throw new Ve(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`)}o=""+o,u=""+u;let f;if(h&&(f=c,c=void 0),!r.allowSelfLoops&&o===u)throw new ht(`Graph.${e}: source & target are the same ("${o}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let m=r._nodes.get(o),g=r._nodes.get(u),v,x;if(!t&&(v=r._edges.get(a),v)){if((v.source.key!==o||v.target.key!==u)&&(!n||v.source.key!==u||v.target.key!==o))throw new ht(`Graph.${e}: inconsistency detected when attempting to merge the "${a}" edge with "${o}" source & "${u}" target vs. ("${v.source.key}", "${v.target.key}").`);x=v}if(!x&&!r.multi&&m&&(x=n?m.undirected[u]:m.out[u]),x){const N=[x.key,!1,!1,!1];if(h?!f:!c)return N;if(h){const L=x.attributes;x.attributes=f(L),r.emit("edgeAttributesUpdated",{type:"replace",key:x.key,attributes:x.attributes})}else dn(x.attributes,c),r.emit("edgeAttributesUpdated",{type:"merge",key:x.key,attributes:x.attributes,data:c});return N}c=c||{},h&&f&&(c=f(c));const E={key:null,undirected:n,source:o,target:u,attributes:c};if(t)a=r._edgeKeyGenerator();else if(a=""+a,r._edges.has(a))throw new ht(`Graph.${e}: the "${a}" edge already exists in the graph.`);let M=!1,S=!1;m||(m=uv(r,o,{}),M=!0,o===u&&(g=m,S=!0)),g||(g=uv(r,u,{}),S=!0),v=new Da(n,a,m,g,c),r._edges.set(a,v);const y=o===u;return n?(m.undirectedDegree++,g.undirectedDegree++,y&&(m.undirectedLoops++,r._undirectedSelfLoopCount++)):(m.outDegree++,g.inDegree++,y&&(m.directedLoops++,r._directedSelfLoopCount++)),r.multi?v.attachMulti():v.attach(),n?r._undirectedSize++:r._directedSize++,E.key=a,r.emit("edgeAdded",E),[a,!0,M,S]}function pa(r,e){r._edges.delete(e.key);const{source:t,target:n,attributes:a}=e,o=e.undirected,u=t===n;o?(t.undirectedDegree--,n.undirectedDegree--,u&&(t.undirectedLoops--,r._undirectedSelfLoopCount--)):(t.outDegree--,n.inDegree--,u&&(t.directedLoops--,r._directedSelfLoopCount--)),r.multi?e.detachMulti():e.detach(),o?r._undirectedSize--:r._directedSize--,r.emit("edgeDropped",{key:e.key,attributes:a,source:t.key,target:n.key,undirected:o})}class zt extends m_.EventEmitter{constructor(e){if(super(),e=dn({},Zb,e),typeof e.multi!="boolean")throw new Ve(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!qb.has(e.type))throw new Ve(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new Ve(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?v_:e.type==="directed"?__:y_;yi(this,"NodeDataClass",t);const n="geid_"+Yb()+"_";let a=0;const o=()=>{let u;do u=n+a++;while(this._edges.has(u));return u};yi(this,"_attributes",{}),yi(this,"_nodes",new Map),yi(this,"_edges",new Map),yi(this,"_directedSize",0),yi(this,"_undirectedSize",0),yi(this,"_directedSelfLoopCount",0),yi(this,"_undirectedSelfLoopCount",0),yi(this,"_edgeKeyGenerator",o),yi(this,"_options",e),lv.forEach(u=>yi(this,u,this[u])),ki(this,"order",()=>this._nodes.size),ki(this,"size",()=>this._edges.size),ki(this,"directedSize",()=>this._directedSize),ki(this,"undirectedSize",()=>this._undirectedSize),ki(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),ki(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),ki(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),ki(this,"multi",this._options.multi),ki(this,"type",this._options.type),ki(this,"allowSelfLoops",this._options.allowSelfLoops),ki(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,a=this._edges.get(n);return!!a&&!a.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new Ve(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,a=this._edges.get(n);return!!a&&a.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new Ve(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?typeof n.out<"u"&&n.out.hasOwnProperty(t)||typeof n.undirected<"u"&&n.undirected.hasOwnProperty(t):!1}throw new Ve(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new ht("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Ue(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const a=n.out&&n.out[t]||void 0;if(a)return a.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new ht("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Ue(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const a=n.undirected&&n.undirected[t]||void 0;if(a)return a.key}edge(e,t){if(this.multi)throw new ht("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Ue(`Graph.edge: could not find the "${t}" target node in the graph.`);const a=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(a)return a.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ue(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,a=0;return this.type!=="directed"&&(n+=t.undirectedDegree,a+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree,a+=t.directedLoops),n-a}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,a=0;return this.type!=="directed"&&(n+=t.undirectedDegree,a+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.outDegree,a+=t.directedLoops),n-a}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,a=0;return this.type!=="directed"&&(n+=t.undirectedDegree,a+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree,a+=t.directedLoops*2),n-a}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ue(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ue(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ue(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new Ue(`Graph.opposite: could not find the "${t}" edge in the graph.`);const a=n.source.key,o=n.target.key;if(e===a)return o;if(e===o)return a;throw new Ue(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${a}, ${o}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new Ue(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ue(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ue(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ue(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return Qb(this,e,t).key}mergeNode(e,t){if(t&&!wn(t))throw new Ve(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(dn(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new Ve(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const o=n.attributes;n.attributes=t(o),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const a=t?t({}):{};return n=new this.NodeDataClass(e,a),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:a}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ue(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const a in t.out){n=t.out[a];do pa(this,n),n=n.next;while(n)}for(const a in t.in){n=t.in[a];do pa(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const a in t.undirected){n=t.undirected[a];do pa(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],a=""+arguments[1];if(t=Ei(this,n,a,this.type),!t)throw new Ue(`Graph.dropEdge: could not find the "${n}" -> "${a}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new Ue(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return pa(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new ht("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ht("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=Ei(this,e,t,"directed");if(!n)throw new Ue(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return pa(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new ht("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ht("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=Ei(this,e,t,"undirected");if(!n)throw new Ue(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return pa(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new Ve("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!wn(e))throw new Ve("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!wn(e))throw new Ve("Graph.mergeAttributes: provided attributes are not a plain object.");return dn(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new Ve("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new Ve("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!ov(t))throw new Ve("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let a,o;for(;a=n.next(),a.done!==!0;)o=a.value,o.attributes=e(o.key,o.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new Ve("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!ov(t))throw new Ve("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let a,o,u,c;for(;a=n.next(),a.done!==!0;)o=a.value,u=o.source,c=o.target,o.attributes=e(o.key,o.attributes,u.key,c.key,u.attributes,c.attributes,o.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new Ve("Graph.forEachAdjacencyEntry: expecting a callback.");fu(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ve("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");fu(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new Ve("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");fu(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ve("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");fu(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!="function")throw new Ve("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,a;for(;n=t.next(),n.done!==!0;)a=n.value,e(a.key,a.attributes)}findNode(e){if(typeof e!="function")throw new Ve("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,a;for(;n=t.next(),n.done!==!0;)if(a=n.value,e(a.key,a.attributes))return a.key}mapNodes(e){if(typeof e!="function")throw new Ve("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,a;const o=new Array(this.order);let u=0;for(;n=t.next(),n.done!==!0;)a=n.value,o[u++]=e(a.key,a.attributes);return o}someNode(e){if(typeof e!="function")throw new Ve("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,a;for(;n=t.next(),n.done!==!0;)if(a=n.value,e(a.key,a.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new Ve("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,a;for(;n=t.next(),n.done!==!0;)if(a=n.value,!e(a.key,a.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new Ve("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,a;const o=[];for(;n=t.next(),n.done!==!0;)a=n.value,e(a.key,a.attributes)&&o.push(a.key);return o}reduceNodes(e,t){if(typeof e!="function")throw new Ve("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new Ve("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const a=this._nodes.values();let o,u;for(;o=a.next(),o.done!==!0;)u=o.value,n=e(n,u.key,u.attributes);return n}nodeEntries(){const e=this._nodes.values();return{[Symbol.iterator](){return this},next(){const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((a,o)=>{e[t++]=Wb(o,a)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((a,o)=>{n[t++]=jb(this.type,o,a)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if(e instanceof zt)return e.forEachNode((h,f)=>{t?this.mergeNode(h,f):this.addNode(h,f)}),e.forEachEdge((h,f,m,g,v,x,E)=>{t?E?this.mergeUndirectedEdgeWithKey(h,m,g,f):this.mergeDirectedEdgeWithKey(h,m,g,f):E?this.addUndirectedEdgeWithKey(h,m,g,f):this.addDirectedEdgeWithKey(h,m,g,f)}),this;if(!wn(e))throw new Ve("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!wn(e.attributes))throw new Ve("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,a,o,u,c;if(e.nodes){if(o=e.nodes,!Array.isArray(o))throw new Ve("Graph.import: invalid nodes. Expecting an array.");for(n=0,a=o.length;n<a;n++){u=o[n],Xb(u);const{key:h,attributes:f}=u;t?this.mergeNode(h,f):this.addNode(h,f)}}if(e.edges){let h=!1;if(this.type==="undirected"&&(h=!0),o=e.edges,!Array.isArray(o))throw new Ve("Graph.import: invalid edges. Expecting an array.");for(n=0,a=o.length;n<a;n++){c=o[n],$b(c);const{source:f,target:m,attributes:g,undirected:v=h}=c;let x;"key"in c?(x=t?v?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:v?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,x.call(this,c.key,f,m,g)):(x=t?v?this.mergeUndirectedEdge:this.mergeDirectedEdge:v?this.addUndirectedEdge:this.addDirectedEdge,x.call(this,f,m,g))}}return this}nullCopy(e){const t=new zt(dn({},this._options,e));return t.replaceAttributes(dn({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,a)=>{const o=dn({},n.attributes);n=new t.NodeDataClass(a,o),t._nodes.set(a,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new ht(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new ht("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new ht("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let a,o;for(;a=n.next(),a.done!==!0;)o=a.value,w_(t,"copy",!1,o.undirected,o.key,o.source.key,o.target.key,dn({},o.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((o,u)=>{e[u]=o.attributes});const t={},n={};this._edges.forEach((o,u)=>{const c=o.undirected?"--":"->";let h="",f=o.source.key,m=o.target.key,g;o.undirected&&f>m&&(g=f,f=m,m=g);const v=`(${f})${c}(${m})`;u.startsWith("geid_")?this.multi&&(typeof n[v]>"u"?n[v]=0:n[v]++,h+=`${n[v]}. `):h+=`[${u}]: `,h+=v,t[h]=o.attributes});const a={};for(const o in this)this.hasOwnProperty(o)&&!lv.has(o)&&typeof this[o]!="function"&&typeof o!="symbol"&&(a[o]=this[o]);return a.attributes=this._attributes,a.nodes=e,a.edges=t,yi(a,"constructor",this.constructor),a}}typeof Symbol<"u"&&(zt.prototype[Symbol.for("nodejs.util.inspect.custom")]=zt.prototype.inspect);Kb.forEach(r=>{["add","merge","update"].forEach(e=>{const t=r.name(e),n=e==="add"?w_:Jb;r.generateKey?zt.prototype[t]=function(a,o,u){return n(this,t,!0,(r.type||this.type)==="undirected",null,a,o,u,e==="update")}:zt.prototype[t]=function(a,o,u,c){return n(this,t,!1,(r.type||this.type)==="undirected",a,o,u,c,e==="update")}})});lb(zt);yb(zt);Ub(zt);Vb(zt);class T_ extends zt{constructor(e){const t=dn({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new Ve("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new Ve('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class b_ extends zt{constructor(e){const t=dn({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new Ve("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new Ve('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class A_ extends zt{constructor(e){const t=dn({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ve("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class R_ extends zt{constructor(e){const t=dn({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ve("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new Ve('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class C_ extends zt{constructor(e){const t=dn({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ve("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new Ve('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function Na(r){r.from=function(e,t){const n=dn({},e.options,t),a=new r(n);return a.import(e),a}}Na(zt);Na(T_);Na(b_);Na(A_);Na(R_);Na(C_);zt.Graph=zt;zt.DirectedGraph=T_;zt.UndirectedGraph=b_;zt.MultiGraph=A_;zt.MultiDirectedGraph=R_;zt.MultiUndirectedGraph=C_;zt.InvalidArgumentsGraphError=Ve;zt.NotFoundGraphError=Ue;zt.UsageGraphError=ht;function eA(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function Ao(r){var e=eA(r,"string");return typeof e=="symbol"?e:e+""}function Fn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function cv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,Ao(n.key),n)}}function kn(r,e,t){return e&&cv(r.prototype,e),t&&cv(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function ba(r){return ba=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ba(r)}function P_(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(P_=function(){return!!r})()}function tA(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function nA(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tA(r)}function Mi(r,e,t){return e=ba(e),nA(r,P_()?Reflect.construct(e,t||[],ba(r).constructor):e.apply(r,t))}function tf(r,e){return tf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},tf(r,e)}function wi(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&tf(r,e)}function iA(r){if(Array.isArray(r))return r}function rA(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,a,o,u,c=[],h=!0,f=!1;try{if(o=(t=t.call(r)).next,e===0){if(Object(t)!==t)return;h=!1}else for(;!(h=(n=o.call(t)).done)&&(c.push(n.value),c.length!==e);h=!0);}catch(m){f=!0,a=m}finally{try{if(!h&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return c}}function nf(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function L_(r,e){if(r){if(typeof r=="string")return nf(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?nf(r,e):void 0}}function sA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Aa(r,e){return iA(r)||rA(r,e)||L_(r,e)||sA()}var nh={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},D_=new Int8Array(4),ih=new Int32Array(D_.buffer,0,1),aA=new Float32Array(D_.buffer,0,1),oA=/^\s*rgba?\s*\(/,lA=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function uA(r){var e=0,t=0,n=0,a=1;if(r[0]==="#")r.length===4?(e=parseInt(r.charAt(1)+r.charAt(1),16),t=parseInt(r.charAt(2)+r.charAt(2),16),n=parseInt(r.charAt(3)+r.charAt(3),16)):(e=parseInt(r.charAt(1)+r.charAt(2),16),t=parseInt(r.charAt(3)+r.charAt(4),16),n=parseInt(r.charAt(5)+r.charAt(6),16)),r.length===9&&(a=parseInt(r.charAt(7)+r.charAt(8),16)/255);else if(oA.test(r)){var o=r.match(lA);o&&(e=+o[1],t=+o[2],n=+o[3],o[4]&&(a=+o[4]))}return{r:e,g:t,b:n,a}}var xa={};for(var pu in nh)xa[pu]=Oo(nh[pu]),xa[nh[pu]]=xa[pu];function N_(r,e,t,n,a){return ih[0]=n<<24|t<<16|e<<8|r,ih[0]=ih[0]&4278190079,aA[0]}function Oo(r){if(r=r.toLowerCase(),typeof xa[r]<"u")return xa[r];var e=uA(r),t=e.r,n=e.g,a=e.b,o=e.a;o=o*255|0;var u=N_(t,n,a,o);return xa[r]=u,u}var rh={};function I_(r){if(typeof rh[r]<"u")return rh[r];var e=(r&16711680)>>>16,t=(r&65280)>>>8,n=r&255,a=255,o=N_(e,t,n,a);return rh[r]=o,o}function dv(r,e,t,n){return t+(e<<8)+(r<<16)}function hv(r,e,t,n,a,o){var u=Math.floor(t/o*a),c=Math.floor(r.drawingBufferHeight/o-n/o*a),h=new Uint8Array(4);r.bindFramebuffer(r.FRAMEBUFFER,e),r.readPixels(u,c,1,1,r.RGBA,r.UNSIGNED_BYTE,h);var f=Aa(h,4),m=f[0],g=f[1],v=f[2],x=f[3];return[m,g,v,x]}function be(r,e,t){return(e=Ao(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function fv(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),t.push.apply(t,n)}return t}function nt(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fv(Object(t),!0).forEach(function(n){be(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):fv(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function cA(r,e){for(;!{}.hasOwnProperty.call(r,e)&&(r=ba(r))!==null;);return r}function rf(){return rf=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(r,e,t){var n=cA(r,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(arguments.length<3?r:t):a.value}},rf.apply(null,arguments)}function U_(r,e,t,n){var a=rf(ba(r.prototype),e,t);return typeof a=="function"?function(o){return a.apply(t,o)}:a}function dA(r){return r.normalized?1:r.size}function sh(r){var e=0;return r.forEach(function(t){return e+=dA(t)}),e}function F_(r,e,t){var n=r==="VERTEX"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,a=e.createShader(n);if(a===null)throw new Error("loadShader: error while creating the shader");e.shaderSource(a,t),e.compileShader(a);var o=e.getShaderParameter(a,e.COMPILE_STATUS);if(!o){var u=e.getShaderInfoLog(a);throw e.deleteShader(a),new Error(`loadShader: error while compiling the shader:
`.concat(u,`
`).concat(t))}return a}function hA(r,e){return F_("VERTEX",r,e)}function fA(r,e){return F_("FRAGMENT",r,e)}function pA(r,e){var t=r.createProgram();if(t===null)throw new Error("loadProgram: error while creating the program.");var n,a;for(n=0,a=e.length;n<a;n++)r.attachShader(t,e[n]);r.linkProgram(t);var o=r.getProgramParameter(t,r.LINK_STATUS);if(!o)throw r.deleteProgram(t),new Error("loadProgram: error while linking the program.");return t}function pv(r){var e=r.gl,t=r.buffer,n=r.program,a=r.vertexShader,o=r.fragmentShader;e.deleteShader(a),e.deleteShader(o),e.deleteProgram(n),e.deleteBuffer(t)}var mv=`#define PICKING_MODE
`,mA=be(be(be(be(be(be(be(be({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4),k_=(function(){function r(e,t,n){Fn(this,r),be(this,"array",new Float32Array),be(this,"constantArray",new Float32Array),be(this,"capacity",0),be(this,"verticesCount",0);var a=this.getDefinition();if(this.VERTICES=a.VERTICES,this.VERTEX_SHADER_SOURCE=a.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=a.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=a.UNIFORMS,this.ATTRIBUTES=a.ATTRIBUTES,this.METHOD=a.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in a?a.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in a?a.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in a,this.ATTRIBUTES_ITEMS_COUNT=sh(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=n,this.normalProgram=this.getProgramInfo("normal",e,a.VERTEX_SHADER_SOURCE,a.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=t?this.getProgramInfo("pick",e,mv+a.VERTEX_SHADER_SOURCE,mv+a.FRAGMENT_SHADER_SOURCE,t):null,this.isInstanced){var o=sh(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES," items, received ").concat(this.CONSTANT_DATA.length," instead)"));this.constantArray=new Float32Array(this.CONSTANT_DATA.length*o);for(var u=0;u<this.CONSTANT_DATA.length;u++){var c=this.CONSTANT_DATA[u];if(c.length!==o)throw new Error("Program: error while getting constant data (one vector has ".concat(c.length," items instead of ").concat(o,")"));for(var h=0;h<c.length;h++)this.constantArray[u*o+h]=c[h]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return kn(r,[{key:"kill",value:function(){pv(this.normalProgram),this.pickProgram&&(pv(this.pickProgram),this.pickProgram=null)}},{key:"getProgramInfo",value:function(t,n,a,o,u){var c=this.getDefinition(),h=n.createBuffer();if(h===null)throw new Error("Program: error while creating the WebGL buffer.");var f=hA(n,a),m=fA(n,o),g=pA(n,[f,m]),v={};c.UNIFORMS.forEach(function(M){var S=n.getUniformLocation(g,M);S&&(v[M]=S)});var x={};c.ATTRIBUTES.forEach(function(M){x[M.name]=n.getAttribLocation(g,M.name)});var E;if("CONSTANT_ATTRIBUTES"in c&&(c.CONSTANT_ATTRIBUTES.forEach(function(M){x[M.name]=n.getAttribLocation(g,M.name)}),E=n.createBuffer(),E===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:t,program:g,gl:n,frameBuffer:u,buffer:h,constantBuffer:E||{},uniformLocations:v,attributeLocations:x,isPicking:t==="pick",vertexShader:f,fragmentShader:m}}},{key:"bindProgram",value:function(t){var n=this,a=0,o=t.gl,u=t.buffer;this.isInstanced?(o.bindBuffer(o.ARRAY_BUFFER,t.constantBuffer),a=0,this.CONSTANT_ATTRIBUTES.forEach(function(c){return a+=n.bindAttribute(c,t,a,!1)}),o.bufferData(o.ARRAY_BUFFER,this.constantArray,o.STATIC_DRAW),o.bindBuffer(o.ARRAY_BUFFER,t.buffer),a=0,this.ATTRIBUTES.forEach(function(c){return a+=n.bindAttribute(c,t,a,!0)}),o.bufferData(o.ARRAY_BUFFER,this.array,o.DYNAMIC_DRAW)):(o.bindBuffer(o.ARRAY_BUFFER,u),a=0,this.ATTRIBUTES.forEach(function(c){return a+=n.bindAttribute(c,t,a)}),o.bufferData(o.ARRAY_BUFFER,this.array,o.DYNAMIC_DRAW)),o.bindBuffer(o.ARRAY_BUFFER,null)}},{key:"unbindProgram",value:function(t){var n=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(a){return n.unbindAttribute(a,t,!1)}),this.ATTRIBUTES.forEach(function(a){return n.unbindAttribute(a,t,!0)})):this.ATTRIBUTES.forEach(function(a){return n.unbindAttribute(a,t)})}},{key:"bindAttribute",value:function(t,n,a,o){var u=mA[t.type];if(typeof u!="number")throw new Error('Program.bind: yet unsupported attribute type "'.concat(t.type,'"'));var c=n.attributeLocations[t.name],h=n.gl;if(c!==-1){h.enableVertexAttribArray(c);var f=this.isInstanced?(o?this.ATTRIBUTES_ITEMS_COUNT:sh(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;if(h.vertexAttribPointer(c,t.size,t.type,t.normalized||!1,f,a),this.isInstanced&&o)if(h instanceof WebGL2RenderingContext)h.vertexAttribDivisor(c,1);else{var m=h.getExtension("ANGLE_instanced_arrays");m&&m.vertexAttribDivisorANGLE(c,1)}}return t.size*u}},{key:"unbindAttribute",value:function(t,n,a){var o=n.attributeLocations[t.name],u=n.gl;if(o!==-1&&(u.disableVertexAttribArray(o),this.isInstanced&&a))if(u instanceof WebGL2RenderingContext)u.vertexAttribDivisor(o,0);else{var c=u.getExtension("ANGLE_instanced_arrays");c&&c.vertexAttribDivisorANGLE(o,0)}}},{key:"reallocate",value:function(t){t!==this.capacity&&(this.capacity=t,this.verticesCount=this.VERTICES*t,this.array=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT))}},{key:"hasNothingToRender",value:function(){return this.verticesCount===0}},{key:"renderProgram",value:function(t,n){var a=n.gl,o=n.program;a.enable(a.BLEND),a.useProgram(o),this.setUniforms(t,n),this.drawWebGL(this.METHOD,n)}},{key:"render",value:function(t){this.hasNothingToRender()||(this.pickProgram&&(this.pickProgram.gl.viewport(0,0,t.width*t.pixelRatio/t.downSizingRatio,t.height*t.pixelRatio/t.downSizingRatio),this.bindProgram(this.pickProgram),this.renderProgram(nt(nt({},t),{},{pixelRatio:t.pixelRatio/t.downSizingRatio}),this.pickProgram),this.unbindProgram(this.pickProgram)),this.normalProgram.gl.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(t,this.normalProgram),this.unbindProgram(this.normalProgram))}},{key:"drawWebGL",value:function(t,n){var a=n.gl,o=n.frameBuffer;if(a.bindFramebuffer(a.FRAMEBUFFER,o),!this.isInstanced)a.drawArrays(t,0,this.verticesCount);else if(a instanceof WebGL2RenderingContext)a.drawArraysInstanced(t,0,this.VERTICES,this.capacity);else{var u=a.getExtension("ANGLE_instanced_arrays");u&&u.drawArraysInstancedANGLE(t,0,this.VERTICES,this.capacity)}}}])})(),gA=(function(r){function e(){return Fn(this,e),Mi(this,e,arguments)}return wi(e,r),kn(e,[{key:"kill",value:function(){U_(e,"kill",this)([])}},{key:"process",value:function(n,a,o){var u=a*this.STRIDE;if(o.hidden){for(var c=u+this.STRIDE;u<c;u++)this.array[u]=0;return}return this.processVisibleItem(I_(n),u,o)}}])})(k_),bf=(function(r){function e(){var t;Fn(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=Mi(this,e,[].concat(a)),be(t,"drawLabel",void 0),t}return wi(e,r),kn(e,[{key:"kill",value:function(){U_(e,"kill",this)([])}},{key:"process",value:function(n,a,o,u,c){var h=a*this.STRIDE;if(c.hidden||o.hidden||u.hidden){for(var f=h+this.STRIDE;h<f;h++)this.array[h]=0;return}return this.processVisibleItem(I_(n),h,o,u,c)}}])})(k_);function vA(r,e){return(function(){function t(n,a,o){Fn(this,t),be(this,"drawLabel",e),this.programs=r.map(function(u){return new u(n,a,o)})}return kn(t,[{key:"reallocate",value:function(a){this.programs.forEach(function(o){return o.reallocate(a)})}},{key:"process",value:function(a,o,u,c,h){this.programs.forEach(function(f){return f.process(a,o,u,c,h)})}},{key:"render",value:function(a){this.programs.forEach(function(o){return o.render(a)})}},{key:"kill",value:function(){this.programs.forEach(function(a){return a.kill()})}}])})()}function _A(r,e,t,n,a){var o=a.edgeLabelSize,u=a.edgeLabelFont,c=a.edgeLabelWeight,h=a.edgeLabelColor.attribute?e[a.edgeLabelColor.attribute]||a.edgeLabelColor.color||"#000":a.edgeLabelColor.color,f=e.label;if(f){r.fillStyle=h,r.font="".concat(c," ").concat(o,"px ").concat(u);var m=t.size,g=n.size,v=t.x,x=t.y,E=n.x,M=n.y,S=(v+E)/2,y=(x+M)/2,N=E-v,L=M-x,w=Math.sqrt(N*N+L*L);if(!(w<m+g)){v+=N*m/w,x+=L*m/w,E-=N*g/w,M-=L*g/w,S=(v+E)/2,y=(x+M)/2,N=E-v,L=M-x,w=Math.sqrt(N*N+L*L);var P=r.measureText(f).width;if(P>w){var I="…";for(f=f+I,P=r.measureText(f).width;P>w&&f.length>1;)f=f.slice(0,-2)+I,P=r.measureText(f).width;if(f.length<4)return}var D;N>0?L>0?D=Math.acos(N/w):D=Math.asin(L/w):L>0?D=Math.acos(N/w)+Math.PI:D=Math.asin(N/w)+Math.PI/2,r.save(),r.translate(S,y),r.rotate(D),r.fillText(f,-P/2,e.size/2+o),r.restore()}}}function O_(r,e,t){if(e.label){var n=t.labelSize,a=t.labelFont,o=t.labelWeight,u=t.labelColor.attribute?e[t.labelColor.attribute]||t.labelColor.color||"#000":t.labelColor.color;r.fillStyle=u,r.font="".concat(o," ").concat(n,"px ").concat(a),r.fillText(e.label,e.x+e.size+3,e.y+n/3)}}function yA(r,e,t){var n=t.labelSize,a=t.labelFont,o=t.labelWeight;r.font="".concat(o," ").concat(n,"px ").concat(a),r.fillStyle="#FFF",r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=8,r.shadowColor="#000";var u=2;if(typeof e.label=="string"){var c=r.measureText(e.label).width,h=Math.round(c+5),f=Math.round(n+2*u),m=Math.max(e.size,n/2)+u,g=Math.asin(f/2/m),v=Math.sqrt(Math.abs(Math.pow(m,2)-Math.pow(f/2,2)));r.beginPath(),r.moveTo(e.x+v,e.y+f/2),r.lineTo(e.x+m+h,e.y+f/2),r.lineTo(e.x+m+h,e.y-f/2),r.lineTo(e.x+v,e.y-f/2),r.arc(e.x,e.y,m,g,-g),r.closePath(),r.fill()}else r.beginPath(),r.arc(e.x,e.y,e.size+u,0,Math.PI*2),r.closePath(),r.fill();r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=0,O_(r,e,t)}var xA=`
precision highp float;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;

uniform float u_correctionRatio;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float border = u_correctionRatio * 2.0;
  float dist = length(v_diffVector) - v_radius + border;

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  if (dist > border)
    gl_FragColor = transparent;
  else
    gl_FragColor = v_color;

  #else
  float t = 0.0;
  if (dist > border)
    t = 1.0;
  else if (dist > 0.0)
    t = dist / border;

  gl_FragColor = mix(v_color, transparent, t);
  #endif
}
`,SA=xA,EA=`
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying float v_border;

const float bias = 255.0 / 254.0;

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_radius = size / 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`,MA=EA,z_=WebGLRenderingContext,gv=z_.UNSIGNED_BYTE,ah=z_.FLOAT,wA=["u_sizeRatio","u_correctionRatio","u_matrix"],Gu=(function(r){function e(){return Fn(this,e),Mi(this,e,arguments)}return wi(e,r),kn(e,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:MA,FRAGMENT_SHADER_SOURCE:SA,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:wA,ATTRIBUTES:[{name:"a_position",size:2,type:ah},{name:"a_size",size:1,type:ah},{name:"a_color",size:4,type:gv,normalized:!0},{name:"a_id",size:4,type:gv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_angle",size:1,type:ah}],CONSTANT_DATA:[[e.ANGLE_1],[e.ANGLE_2],[e.ANGLE_3]]}}},{key:"processVisibleItem",value:function(n,a,o){var u=this.array,c=Oo(o.color);u[a++]=o.x,u[a++]=o.y,u[a++]=o.size,u[a++]=c,u[a++]=n}},{key:"setUniforms",value:function(n,a){var o=a.gl,u=a.uniformLocations,c=u.u_sizeRatio,h=u.u_correctionRatio,f=u.u_matrix;o.uniform1f(h,n.correctionRatio),o.uniform1f(c,n.sizeRatio),o.uniformMatrix3fv(f,!1,n.matrix)}}])})(gA);be(Gu,"ANGLE_1",0);be(Gu,"ANGLE_2",2*Math.PI/3);be(Gu,"ANGLE_3",4*Math.PI/3);var TA=`
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`,bA=TA,AA=`
attribute vec2 a_position;
attribute vec2 a_normal;
attribute float a_radius;
attribute vec3 a_barycentric;

#ifdef PICKING_MODE
attribute vec4 a_id;
#else
attribute vec4 a_color;
#endif

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_lengthToThicknessRatio;
uniform float u_widenessToThicknessRatio;

varying vec4 v_color;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  float normalLength = length(a_normal);
  vec2 unitNormal = a_normal / normalLength;

  // These first computations are taken from edge.vert.glsl and
  // edge.clamped.vert.glsl. Please read it to get better comments on what's
  // happening:
  float pixelsThickness = max(normalLength / u_sizeRatio, minThickness);
  float webGLThickness = pixelsThickness * u_correctionRatio;
  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;
  float webGLArrowHeadThickness = webGLThickness * u_widenessToThicknessRatio;

  float da = a_barycentric.x;
  float db = a_barycentric.y;
  float dc = a_barycentric.z;

  vec2 delta = vec2(
      da * (webGLNodeRadius * unitNormal.y)
    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadThickness * unitNormal.x)
    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadThickness * unitNormal.x),

      da * (-webGLNodeRadius * unitNormal.x)
    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadThickness * unitNormal.y)
    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadThickness * unitNormal.y)
  );

  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;

  gl_Position = vec4(position, 0, 1);

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`,RA=AA,B_=WebGLRenderingContext,vv=B_.UNSIGNED_BYTE,mu=B_.FLOAT,CA=["u_matrix","u_sizeRatio","u_correctionRatio","u_minEdgeThickness","u_lengthToThicknessRatio","u_widenessToThicknessRatio"],G_={extremity:"target",lengthToThicknessRatio:2.5,widenessToThicknessRatio:2};function H_(r){var e=nt(nt({},G_),{});return(function(t){function n(){return Fn(this,n),Mi(this,n,arguments)}return wi(n,t),kn(n,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:RA,FRAGMENT_SHADER_SOURCE:bA,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:CA,ATTRIBUTES:[{name:"a_position",size:2,type:mu},{name:"a_normal",size:2,type:mu},{name:"a_radius",size:1,type:mu},{name:"a_color",size:4,type:vv,normalized:!0},{name:"a_id",size:4,type:vv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_barycentric",size:3,type:mu}],CONSTANT_DATA:[[1,0,0],[0,1,0],[0,0,1]]}}},{key:"processVisibleItem",value:function(o,u,c,h,f){if(e.extremity==="source"){var m=[h,c];c=m[0],h=m[1]}var g=f.size||1,v=h.size||1,x=c.x,E=c.y,M=h.x,S=h.y,y=Oo(f.color),N=M-x,L=S-E,w=N*N+L*L,P=0,I=0;w&&(w=1/Math.sqrt(w),P=-L*w*g,I=N*w*g);var D=this.array;D[u++]=M,D[u++]=S,D[u++]=-P,D[u++]=-I,D[u++]=v,D[u++]=y,D[u++]=o}},{key:"setUniforms",value:function(o,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_sizeRatio,g=h.u_correctionRatio,v=h.u_minEdgeThickness,x=h.u_lengthToThicknessRatio,E=h.u_widenessToThicknessRatio;c.uniformMatrix3fv(f,!1,o.matrix),c.uniform1f(m,o.sizeRatio),c.uniform1f(g,o.correctionRatio),c.uniform1f(v,o.minEdgeThickness),c.uniform1f(x,e.lengthToThicknessRatio),c.uniform1f(E,e.widenessToThicknessRatio)}}])})(bf)}H_();var PA=`
precision mediump float;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  // We only handle antialiasing for normal mode:
  #ifdef PICKING_MODE
  gl_FragColor = v_color;
  #else
  float dist = length(v_normal) * v_thickness;

  float t = smoothstep(
    v_thickness - v_feather,
    v_thickness,
    dist
  );

  gl_FragColor = mix(v_color, transparent, t);
  #endif
}
`,V_=PA,LA=`
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;
attribute float a_radius;
attribute float a_radiusCoef;

uniform mat3 u_matrix;
uniform float u_zoomRatio;
uniform float u_sizeRatio;
uniform float u_pixelRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_lengthToThicknessRatio;
uniform float u_feather;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  float radius = a_radius * a_radiusCoef;
  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;

  // These first computations are taken from edge.vert.glsl. Please read it to
  // get better comments on what's happening:
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Here, we move the point to leave space for the arrow head:
  float direction = sign(radius);
  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;

  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);

  // Here is the proper position of the vertex
  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);

  v_thickness = webGLThickness / u_zoomRatio;

  v_normal = unitNormal;

  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`,DA=LA,W_=WebGLRenderingContext,_v=W_.UNSIGNED_BYTE,Es=W_.FLOAT,NA=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness","u_lengthToThicknessRatio"],IA={lengthToThicknessRatio:G_.lengthToThicknessRatio};function j_(r){var e=nt(nt({},IA),{});return(function(t){function n(){return Fn(this,n),Mi(this,n,arguments)}return wi(n,t),kn(n,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:DA,FRAGMENT_SHADER_SOURCE:V_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:NA,ATTRIBUTES:[{name:"a_positionStart",size:2,type:Es},{name:"a_positionEnd",size:2,type:Es},{name:"a_normal",size:2,type:Es},{name:"a_color",size:4,type:_v,normalized:!0},{name:"a_id",size:4,type:_v,normalized:!0},{name:"a_radius",size:1,type:Es}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:Es},{name:"a_normalCoef",size:1,type:Es},{name:"a_radiusCoef",size:1,type:Es}],CONSTANT_DATA:[[0,1,0],[0,-1,0],[1,1,1],[1,1,1],[0,-1,0],[1,-1,-1]]}}},{key:"processVisibleItem",value:function(o,u,c,h,f){var m=f.size||1,g=c.x,v=c.y,x=h.x,E=h.y,M=Oo(f.color),S=x-g,y=E-v,N=h.size||1,L=S*S+y*y,w=0,P=0;L&&(L=1/Math.sqrt(L),w=-y*L*m,P=S*L*m);var I=this.array;I[u++]=g,I[u++]=v,I[u++]=x,I[u++]=E,I[u++]=w,I[u++]=P,I[u++]=M,I[u++]=o,I[u++]=N}},{key:"setUniforms",value:function(o,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_zoomRatio,g=h.u_feather,v=h.u_pixelRatio,x=h.u_correctionRatio,E=h.u_sizeRatio,M=h.u_minEdgeThickness,S=h.u_lengthToThicknessRatio;c.uniformMatrix3fv(f,!1,o.matrix),c.uniform1f(m,o.zoomRatio),c.uniform1f(E,o.sizeRatio),c.uniform1f(x,o.correctionRatio),c.uniform1f(v,o.pixelRatio),c.uniform1f(g,o.antiAliasingFeather),c.uniform1f(M,o.minEdgeThickness),c.uniform1f(S,e.lengthToThicknessRatio)}}])})(bf)}j_();function UA(r){return vA([j_(),H_()])}var FA=UA(),kA=FA,OA=`
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_zoomRatio;
uniform float u_pixelRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_feather;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;

  // We require edges to be at least "minThickness" pixels thick *on screen*
  // (so we need to compensate the size ratio):
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);

  // Then, we need to retrieve the normalized thickness of the edge in the WebGL
  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction
  // ratio:
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Here is the proper position of the vertex
  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);

  // For the fragment shader though, we need a thickness that takes the "magic"
  // correction ratio into account (as in webGLThickness), but so that the
  // antialiasing effect does not depend on the zoom level. So here's yet
  // another thickness version:
  v_thickness = webGLThickness / u_zoomRatio;

  v_normal = unitNormal;

  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`,zA=OA,X_=WebGLRenderingContext,yv=X_.UNSIGNED_BYTE,So=X_.FLOAT,BA=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness"],GA=(function(r){function e(){return Fn(this,e),Mi(this,e,arguments)}return wi(e,r),kn(e,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:zA,FRAGMENT_SHADER_SOURCE:V_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:BA,ATTRIBUTES:[{name:"a_positionStart",size:2,type:So},{name:"a_positionEnd",size:2,type:So},{name:"a_normal",size:2,type:So},{name:"a_color",size:4,type:yv,normalized:!0},{name:"a_id",size:4,type:yv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:So},{name:"a_normalCoef",size:1,type:So}],CONSTANT_DATA:[[0,1],[0,-1],[1,1],[1,1],[0,-1],[1,-1]]}}},{key:"processVisibleItem",value:function(n,a,o,u,c){var h=c.size||1,f=o.x,m=o.y,g=u.x,v=u.y,x=Oo(c.color),E=g-f,M=v-m,S=E*E+M*M,y=0,N=0;S&&(S=1/Math.sqrt(S),y=-M*S*h,N=E*S*h);var L=this.array;L[a++]=f,L[a++]=m,L[a++]=g,L[a++]=v,L[a++]=y,L[a++]=N,L[a++]=x,L[a++]=n}},{key:"setUniforms",value:function(n,a){var o=a.gl,u=a.uniformLocations,c=u.u_matrix,h=u.u_zoomRatio,f=u.u_feather,m=u.u_pixelRatio,g=u.u_correctionRatio,v=u.u_sizeRatio,x=u.u_minEdgeThickness;o.uniformMatrix3fv(c,!1,n.matrix),o.uniform1f(h,n.zoomRatio),o.uniform1f(v,n.sizeRatio),o.uniform1f(g,n.correctionRatio),o.uniform1f(m,n.pixelRatio),o.uniform1f(f,n.antiAliasingFeather),o.uniform1f(x,n.minEdgeThickness)}}])})(bf),Af=(function(r){function e(){var t;return Fn(this,e),t=Mi(this,e),t.rawEmitter=t,t}return wi(e,r),kn(e)})(m_.EventEmitter),oh,xv;function HA(){return xv||(xv=1,oh=function(e){return e!==null&&typeof e=="object"&&typeof e.addUndirectedEdgeWithKey=="function"&&typeof e.dropNode=="function"&&typeof e.multi=="boolean"}),oh}var VA=HA();const WA=lf(VA);var jA=function(e){return e},XA=function(e){return e*e},$A=function(e){return e*(2-e)},YA=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},qA=function(e){return e*e*e},KA=function(e){return--e*e*e+1},ZA=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},QA={linear:jA,quadraticIn:XA,quadraticOut:$A,quadraticInOut:YA,cubicIn:qA,cubicOut:KA,cubicInOut:ZA},JA={easing:"quadraticInOut",duration:150};function Oi(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function gu(r,e,t){return r[0]=e,r[4]=typeof t=="number"?t:e,r}function Sv(r,e){var t=Math.sin(e),n=Math.cos(e);return r[0]=n,r[1]=t,r[3]=-t,r[4]=n,r}function Ev(r,e,t){return r[6]=e,r[7]=t,r}function Kr(r,e){var t=r[0],n=r[1],a=r[2],o=r[3],u=r[4],c=r[5],h=r[6],f=r[7],m=r[8],g=e[0],v=e[1],x=e[2],E=e[3],M=e[4],S=e[5],y=e[6],N=e[7],L=e[8];return r[0]=g*t+v*o+x*h,r[1]=g*n+v*u+x*f,r[2]=g*a+v*c+x*m,r[3]=E*t+M*o+S*h,r[4]=E*n+M*u+S*f,r[5]=E*a+M*c+S*m,r[6]=y*t+N*o+L*h,r[7]=y*n+N*u+L*f,r[8]=y*a+N*c+L*m,r}function sf(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=r[0],a=r[1],o=r[3],u=r[4],c=r[6],h=r[7],f=e.x,m=e.y;return{x:f*n+m*o+c*t,y:f*a+m*u+h*t}}function eR(r,e){var t=r.height/r.width,n=e.height/e.width;return t<1&&n>1||t>1&&n<1?1:Math.min(Math.max(n,1/n),Math.max(1/t,t))}function Eo(r,e,t,n,a){var o=r.angle,u=r.ratio,c=r.x,h=r.y,f=e.width,m=e.height,g=Oi(),v=Math.min(f,m)-2*n,x=eR(e,t);return a?(Kr(g,Ev(Oi(),c,h)),Kr(g,gu(Oi(),u)),Kr(g,Sv(Oi(),o)),Kr(g,gu(Oi(),f/v/2/x,m/v/2/x))):(Kr(g,gu(Oi(),2*(v/f)*x,2*(v/m)*x)),Kr(g,Sv(Oi(),-o)),Kr(g,gu(Oi(),1/u)),Kr(g,Ev(Oi(),-c,-h))),g}function tR(r,e,t){var n=sf(r,{x:Math.cos(e.angle),y:Math.sin(e.angle)},0),a=n.x,o=n.y;return 1/Math.sqrt(Math.pow(a,2)+Math.pow(o,2))/t.width}function nR(r){if(!r.order)return{x:[0,1],y:[0,1]};var e=1/0,t=-1/0,n=1/0,a=-1/0;return r.forEachNode(function(o,u){var c=u.x,h=u.y;c<e&&(e=c),c>t&&(t=c),h<n&&(n=h),h>a&&(a=h)}),{x:[e,t],y:[n,a]}}function iR(r){if(!WA(r))throw new Error("Sigma: invalid graph instance.");r.forEachNode(function(e,t){if(!Number.isFinite(t.x)||!Number.isFinite(t.y))throw new Error("Sigma: Coordinates of node ".concat(e," are invalid. A node must have a numeric 'x' and 'y' attribute."))})}function rR(r,e,t){var n=document.createElement(r);if(e)for(var a in e)n.style[a]=e[a];if(t)for(var o in t)n.setAttribute(o,t[o]);return n}function Mv(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}function wv(r,e,t){return t.sort(function(n,a){var o=e(n)||0,u=e(a)||0;return o<u?-1:o>u?1:0})}function Tv(r){var e=Aa(r.x,2),t=e[0],n=e[1],a=Aa(r.y,2),o=a[0],u=a[1],c=Math.max(n-t,u-o),h=(n+t)/2,f=(u+o)/2;(c===0||Math.abs(c)===1/0||isNaN(c))&&(c=1),isNaN(h)&&(h=0),isNaN(f)&&(f=0);var m=function(v){return{x:.5+(v.x-h)/c,y:.5+(v.y-f)/c}};return m.applyTo=function(g){g.x=.5+(g.x-h)/c,g.y=.5+(g.y-f)/c},m.inverse=function(g){return{x:h+c*(g.x-.5),y:f+c*(g.y-.5)}},m.ratio=c,m}function af(r){"@babel/helpers - typeof";return af=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},af(r)}function bv(r,e){var t=e.size;if(t!==0){var n=r.length;r.length+=t;var a=0;e.forEach(function(o){r[n+a]=o,a++})}}function lh(r){r=r||{};for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;e++){var n=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];n&&Object.assign(r,n)}return r}var Rf={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,enableEdgeEvents:!1,defaultNodeColor:"#999",defaultNodeType:"circle",defaultEdgeColor:"#ccc",defaultEdgeType:"line",labelFont:"Arial",labelSize:14,labelWeight:"normal",labelColor:{color:"#000"},edgeLabelFont:"Arial",edgeLabelSize:14,edgeLabelWeight:"normal",edgeLabelColor:{attribute:"color"},stagePadding:30,defaultDrawEdgeLabel:_A,defaultDrawNodeLabel:O_,defaultDrawNodeHover:yA,minEdgeThickness:1.7,antiAliasingFeather:1,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"screen",autoRescale:!0,autoCenter:!0,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,nodeReducer:null,edgeReducer:null,zIndex:!1,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,cameraPanBoundaries:null,allowInvalidContainer:!1,nodeProgramClasses:{},nodeHoverProgramClasses:{},edgeProgramClasses:{}},sR={circle:Gu},aR={arrow:kA,line:GA};function uh(r){if(typeof r.labelDensity!="number"||r.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");var e=r.minCameraRatio,t=r.maxCameraRatio;if(typeof e=="number"&&typeof t=="number"&&t<e)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function oR(r){var e=lh({},Rf,r);return e.nodeProgramClasses=lh({},sR,e.nodeProgramClasses),e.edgeProgramClasses=lh({},aR,e.edgeProgramClasses),e}var vu=1.5,Av=(function(r){function e(){var t;return Fn(this,e),t=Mi(this,e),be(t,"x",.5),be(t,"y",.5),be(t,"angle",0),be(t,"ratio",1),be(t,"minRatio",null),be(t,"maxRatio",null),be(t,"enabledZooming",!0),be(t,"enabledPanning",!0),be(t,"enabledRotation",!0),be(t,"clean",null),be(t,"nextFrame",null),be(t,"previousState",null),be(t,"enabled",!0),t.previousState=t.getState(),t}return wi(e,r),kn(e,[{key:"enable",value:function(){return this.enabled=!0,this}},{key:"disable",value:function(){return this.enabled=!1,this}},{key:"getState",value:function(){return{x:this.x,y:this.y,angle:this.angle,ratio:this.ratio}}},{key:"hasState",value:function(n){return this.x===n.x&&this.y===n.y&&this.ratio===n.ratio&&this.angle===n.angle}},{key:"getPreviousState",value:function(){var n=this.previousState;return n?{x:n.x,y:n.y,angle:n.angle,ratio:n.ratio}:null}},{key:"getBoundedRatio",value:function(n){var a=n;return typeof this.minRatio=="number"&&(a=Math.max(a,this.minRatio)),typeof this.maxRatio=="number"&&(a=Math.min(a,this.maxRatio)),a}},{key:"validateState",value:function(n){var a={};return this.enabledPanning&&typeof n.x=="number"&&(a.x=n.x),this.enabledPanning&&typeof n.y=="number"&&(a.y=n.y),this.enabledZooming&&typeof n.ratio=="number"&&(a.ratio=this.getBoundedRatio(n.ratio)),this.enabledRotation&&typeof n.angle=="number"&&(a.angle=n.angle),this.clean?this.clean(nt(nt({},this.getState()),a)):a}},{key:"isAnimated",value:function(){return!!this.nextFrame}},{key:"setState",value:function(n){if(!this.enabled)return this;this.previousState=this.getState();var a=this.validateState(n);return typeof a.x=="number"&&(this.x=a.x),typeof a.y=="number"&&(this.y=a.y),typeof a.ratio=="number"&&(this.ratio=a.ratio),typeof a.angle=="number"&&(this.angle=a.angle),this.hasState(this.previousState)||this.emit("updated",this.getState()),this}},{key:"updateState",value:function(n){return this.setState(n(this.getState())),this}},{key:"animate",value:function(n){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=arguments.length>2?arguments[2]:void 0;if(!u)return new Promise(function(x){return a.animate(n,o,x)});if(this.enabled){var c=nt(nt({},JA),o),h=this.validateState(n),f=typeof c.easing=="function"?c.easing:QA[c.easing],m=Date.now(),g=this.getState(),v=function(){var E=(Date.now()-m)/c.duration;if(E>=1){a.nextFrame=null,a.setState(h),a.animationCallback&&(a.animationCallback.call(null),a.animationCallback=void 0);return}var M=f(E),S={};typeof h.x=="number"&&(S.x=g.x+(h.x-g.x)*M),typeof h.y=="number"&&(S.y=g.y+(h.y-g.y)*M),a.enabledRotation&&typeof h.angle=="number"&&(S.angle=g.angle+(h.angle-g.angle)*M),typeof h.ratio=="number"&&(S.ratio=g.ratio+(h.ratio-g.ratio)*M),a.setState(S),a.nextFrame=requestAnimationFrame(v)};this.nextFrame?(cancelAnimationFrame(this.nextFrame),this.animationCallback&&this.animationCallback.call(null),this.nextFrame=requestAnimationFrame(v)):v(),this.animationCallback=u}}},{key:"animatedZoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio/n}):this.animate({ratio:this.ratio/(n.factor||vu)},n):this.animate({ratio:this.ratio/vu})}},{key:"animatedUnzoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio*n}):this.animate({ratio:this.ratio*(n.factor||vu)},n):this.animate({ratio:this.ratio*vu})}},{key:"animatedReset",value:function(n){return this.animate({x:.5,y:.5,ratio:1,angle:0},n)}},{key:"copy",value:function(){return e.from(this.getState())}}],[{key:"from",value:function(n){var a=new e;return a.setState(n)}}])})(Af);function Bi(r,e){var t=e.getBoundingClientRect();return{x:r.clientX-t.left,y:r.clientY-t.top}}function fr(r,e){var t=nt(nt({},Bi(r,e)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){t.sigmaDefaultPrevented=!0},original:r});return t}function Mo(r){var e="x"in r?r:nt(nt({},r.touches[0]||r.previousTouches[0]),{},{original:r.original,sigmaDefaultPrevented:r.sigmaDefaultPrevented,preventSigmaDefault:function(){r.sigmaDefaultPrevented=!0,e.sigmaDefaultPrevented=!0}});return e}function lR(r,e){return nt(nt({},fr(r,e)),{},{delta:$_(r)})}var uR=2;function Cu(r){for(var e=[],t=0,n=Math.min(r.length,uR);t<n;t++)e.push(r[t]);return e}function wo(r,e,t){var n={touches:Cu(r.touches).map(function(a){return Bi(a,t)}),previousTouches:e.map(function(a){return Bi(a,t)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){n.sigmaDefaultPrevented=!0},original:r};return n}function $_(r){if(typeof r.deltaY<"u")return r.deltaY*-3/360;if(typeof r.detail<"u")return r.detail/-9;throw new Error("Captor: could not extract delta from event.")}var Y_=(function(r){function e(t,n){var a;return Fn(this,e),a=Mi(this,e),a.container=t,a.renderer=n,a}return wi(e,r),kn(e)})(Af),cR=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],dR=cR.reduce(function(r,e){return nt(nt({},r),{},be({},e,Rf[e]))},{}),hR=(function(r){function e(t,n){var a;return Fn(this,e),a=Mi(this,e,[t,n]),be(a,"enabled",!0),be(a,"draggedEvents",0),be(a,"downStartTime",null),be(a,"lastMouseX",null),be(a,"lastMouseY",null),be(a,"isMouseDown",!1),be(a,"isMoving",!1),be(a,"movingTimeout",null),be(a,"startCameraState",null),be(a,"clicks",0),be(a,"doubleClickTimeout",null),be(a,"currentWheelDirection",0),be(a,"settings",dR),a.handleClick=a.handleClick.bind(a),a.handleRightClick=a.handleRightClick.bind(a),a.handleDown=a.handleDown.bind(a),a.handleUp=a.handleUp.bind(a),a.handleMove=a.handleMove.bind(a),a.handleWheel=a.handleWheel.bind(a),a.handleLeave=a.handleLeave.bind(a),a.handleEnter=a.handleEnter.bind(a),t.addEventListener("click",a.handleClick,{capture:!1}),t.addEventListener("contextmenu",a.handleRightClick,{capture:!1}),t.addEventListener("mousedown",a.handleDown,{capture:!1}),t.addEventListener("wheel",a.handleWheel,{capture:!1}),t.addEventListener("mouseleave",a.handleLeave,{capture:!1}),t.addEventListener("mouseenter",a.handleEnter,{capture:!1}),document.addEventListener("mousemove",a.handleMove,{capture:!1}),document.addEventListener("mouseup",a.handleUp,{capture:!1}),a}return wi(e,r),kn(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("click",this.handleClick),n.removeEventListener("contextmenu",this.handleRightClick),n.removeEventListener("mousedown",this.handleDown),n.removeEventListener("wheel",this.handleWheel),n.removeEventListener("mouseleave",this.handleLeave),n.removeEventListener("mouseenter",this.handleEnter),document.removeEventListener("mousemove",this.handleMove),document.removeEventListener("mouseup",this.handleUp)}},{key:"handleClick",value:function(n){var a=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(n);setTimeout(function(){a.clicks=0,a.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",fr(n,this.container))}}},{key:"handleRightClick",value:function(n){this.enabled&&this.emit("rightClick",fr(n,this.container))}},{key:"handleDoubleClick",value:function(n){if(this.enabled){n.preventDefault(),n.stopPropagation();var a=fr(n,this.container);if(this.emit("doubleClick",a),!a.sigmaDefaultPrevented){var o=this.renderer.getCamera(),u=o.getBoundedRatio(o.getState().ratio/this.settings.doubleClickZoomingRatio);o.animate(this.renderer.getViewportZoomedState(Bi(n,this.container),u),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}}},{key:"handleDown",value:function(n){if(this.enabled){if(n.button===0){this.startCameraState=this.renderer.getCamera().getState();var a=Bi(n,this.container),o=a.x,u=a.y;this.lastMouseX=o,this.lastMouseY=u,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}this.emit("mousedown",fr(n,this.container))}}},{key:"handleUp",value:function(n){var a=this;if(!(!this.enabled||!this.isMouseDown)){var o=this.renderer.getCamera();this.isMouseDown=!1,typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var u=Bi(n,this.container),c=u.x,h=u.y,f=o.getState(),m=o.getPreviousState()||{x:0,y:0};this.isMoving?o.animate({x:f.x+this.settings.inertiaRatio*(f.x-m.x),y:f.y+this.settings.inertiaRatio*(f.y-m.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==c||this.lastMouseY!==h)&&o.setState({x:f.x,y:f.y}),this.isMoving=!1,setTimeout(function(){var g=a.draggedEvents>0;a.draggedEvents=0,g&&a.renderer.getSetting("hideEdgesOnMove")&&a.renderer.refresh()},0),this.emit("mouseup",fr(n,this.container))}}},{key:"handleMove",value:function(n){var a=this;if(this.enabled){var o=fr(n,this.container);if(this.emit("mousemovebody",o),(n.target===this.container||n.composedPath()[0]===this.container)&&this.emit("mousemove",o),!o.sigmaDefaultPrevented&&this.isMouseDown){this.isMoving=!0,this.draggedEvents++,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){a.movingTimeout=null,a.isMoving=!1},this.settings.dragTimeout);var u=this.renderer.getCamera(),c=Bi(n,this.container),h=c.x,f=c.y,m=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),g=this.renderer.viewportToFramedGraph({x:h,y:f}),v=m.x-g.x,x=m.y-g.y,E=u.getState(),M=E.x+v,S=E.y+x;u.setState({x:M,y:S}),this.lastMouseX=h,this.lastMouseY=f,n.preventDefault(),n.stopPropagation()}}}},{key:"handleLeave",value:function(n){this.emit("mouseleave",fr(n,this.container))}},{key:"handleEnter",value:function(n){this.emit("mouseenter",fr(n,this.container))}},{key:"handleWheel",value:function(n){var a=this,o=this.renderer.getCamera();if(!(!this.enabled||!o.enabledZooming)){var u=$_(n);if(u){var c=lR(n,this.container);if(this.emit("wheel",c),c.sigmaDefaultPrevented){n.preventDefault(),n.stopPropagation();return}var h=o.getState().ratio,f=u>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,m=o.getBoundedRatio(h*f),g=u>0?1:-1,v=Date.now();h!==m&&(n.preventDefault(),n.stopPropagation(),!(this.currentWheelDirection===g&&this.lastWheelTriggerTime&&v-this.lastWheelTriggerTime<this.settings.zoomDuration/5)&&(o.animate(this.renderer.getViewportZoomedState(Bi(n,this.container),m),{easing:"quadraticOut",duration:this.settings.zoomDuration},function(){a.currentWheelDirection=0}),this.currentWheelDirection=g,this.lastWheelTriggerTime=v))}}}},{key:"setSettings",value:function(n){this.settings=n}}])})(Y_),fR=["dragTimeout","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],pR=fR.reduce(function(r,e){return nt(nt({},r),{},be({},e,Rf[e]))},{}),mR=(function(r){function e(t,n){var a;return Fn(this,e),a=Mi(this,e,[t,n]),be(a,"enabled",!0),be(a,"isMoving",!1),be(a,"hasMoved",!1),be(a,"touchMode",0),be(a,"startTouchesPositions",[]),be(a,"lastTouches",[]),be(a,"lastTap",null),be(a,"settings",pR),a.handleStart=a.handleStart.bind(a),a.handleLeave=a.handleLeave.bind(a),a.handleMove=a.handleMove.bind(a),t.addEventListener("touchstart",a.handleStart,{capture:!1}),t.addEventListener("touchcancel",a.handleLeave,{capture:!1}),document.addEventListener("touchend",a.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",a.handleMove,{capture:!1,passive:!1}),a}return wi(e,r),kn(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("touchstart",this.handleStart),n.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}},{key:"getDimensions",value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:"handleStart",value:function(n){var a=this;if(this.enabled){n.preventDefault();var o=Cu(n.touches);if(this.touchMode=o.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=o.map(function(x){return Bi(x,a.container)}),this.touchMode===2){var u=Aa(this.startTouchesPositions,2),c=u[0],h=c.x,f=c.y,m=u[1],g=m.x,v=m.y;this.startTouchesAngle=Math.atan2(v-f,g-h),this.startTouchesDistance=Math.sqrt(Math.pow(g-h,2)+Math.pow(v-f,2))}this.emit("touchdown",wo(n,this.lastTouches,this.container)),this.lastTouches=o,this.lastTouchesPositions=this.startTouchesPositions}}},{key:"handleLeave",value:function(n){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(n.cancelable&&n.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(n.touches.length===1){this.handleStart(n),n.preventDefault();break}case 1:if(this.isMoving){var a=this.renderer.getCamera(),o=a.getState(),u=a.getPreviousState()||{x:0,y:0};a.animate({x:o.x+this.settings.inertiaRatio*(o.x-u.x),y:o.y+this.settings.inertiaRatio*(o.y-u.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.emit("touchup",wo(n,this.lastTouches,this.container)),!n.touches.length){var c=Bi(this.lastTouches[0],this.container),h=this.startTouchesPositions[0],f=Math.pow(c.x-h.x,2)+Math.pow(c.y-h.y,2);if(!n.touches.length&&f<Math.pow(this.settings.tapMoveTolerance,2))if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var m=wo(n,this.lastTouches,this.container);if(this.emit("doubletap",m),this.lastTap=null,!m.sigmaDefaultPrevented){var g=this.renderer.getCamera(),v=g.getBoundedRatio(g.getState().ratio/this.settings.doubleClickZoomingRatio);g.animate(this.renderer.getViewportZoomedState(c,v),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{var x=wo(n,this.lastTouches,this.container);this.emit("tap",x),this.lastTap={time:Date.now(),position:x.touches[0]||x.previousTouches[0]}}}this.lastTouches=Cu(n.touches),this.startTouchesPositions=[]}}},{key:"handleMove",value:function(n){var a=this;if(!(!this.enabled||!this.startTouchesPositions.length)){n.preventDefault();var o=Cu(n.touches),u=o.map(function(G){return Bi(G,a.container)}),c=this.lastTouches;this.lastTouches=o,this.lastTouchesPositions=u;var h=wo(n,c,this.container);if(this.emit("touchmove",h),!h.sigmaDefaultPrevented&&(this.hasMoved||(this.hasMoved=u.some(function(G,re){var Ie=a.startTouchesPositions[re];return Ie&&(G.x!==Ie.x||G.y!==Ie.y)})),!!this.hasMoved)){this.isMoving=!0,this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){a.isMoving=!1},this.settings.dragTimeout);var f=this.renderer.getCamera(),m=this.startCameraState,g=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{var v=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),x=v.x,E=v.y,M=this.renderer.viewportToFramedGraph(u[0]),S=M.x,y=M.y;f.setState({x:m.x+x-S,y:m.y+E-y});break}case 2:{var N={x:.5,y:.5,angle:0,ratio:1},L=u[0],w=L.x,P=L.y,I=u[1],D=I.x,O=I.y,R=Math.atan2(O-P,D-w)-this.startTouchesAngle,A=Math.hypot(O-P,D-w)/this.startTouchesDistance,z=f.getBoundedRatio(m.ratio/A);N.ratio=z,N.angle=m.angle+R;var k=this.getDimensions(),Y=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:m}),se=Math.min(k.width,k.height)-2*g,pe=se/k.width,ee=se/k.height,de=z/se,W=w-se/2/pe,me=P-se/2/ee,ae=[W*Math.cos(-N.angle)-me*Math.sin(-N.angle),me*Math.cos(-N.angle)+W*Math.sin(-N.angle)];W=ae[0],me=ae[1],N.x=Y.x-W*de,N.y=Y.y+me*de,f.setState(N);break}}}}}},{key:"setSettings",value:function(n){this.settings=n}}])})(Y_);function gR(r){if(Array.isArray(r))return nf(r)}function vR(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function _R(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rv(r){return gR(r)||vR(r)||L_(r)||_R()}function yR(r,e){if(r==null)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)!==-1)continue;t[n]=r[n]}return t}function ch(r,e){if(r==null)return{};var t,n,a=yR(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var Cv=(function(){function r(e,t){Fn(this,r),this.key=e,this.size=t}return kn(r,null,[{key:"compare",value:function(t,n){return t.size>n.size?-1:t.size<n.size||t.key>n.key?1:-1}}])})(),Pv=(function(){function r(){Fn(this,r),be(this,"width",0),be(this,"height",0),be(this,"cellSize",0),be(this,"columns",0),be(this,"rows",0),be(this,"cells",{})}return kn(r,[{key:"resizeAndClear",value:function(t,n){this.width=t.width,this.height=t.height,this.cellSize=n,this.columns=Math.ceil(t.width/n),this.rows=Math.ceil(t.height/n),this.cells={}}},{key:"getIndex",value:function(t){var n=Math.floor(t.x/this.cellSize),a=Math.floor(t.y/this.cellSize);return a*this.columns+n}},{key:"add",value:function(t,n,a){var o=new Cv(t,n),u=this.getIndex(a),c=this.cells[u];c||(c=[],this.cells[u]=c),c.push(o)}},{key:"organize",value:function(){for(var t in this.cells){var n=this.cells[t];n.sort(Cv.compare)}}},{key:"getLabelsToDisplay",value:function(t,n){var a=this.cellSize*this.cellSize,o=a/t/t,u=o*n/a,c=Math.ceil(u),h=[];for(var f in this.cells)for(var m=this.cells[f],g=0;g<Math.min(c,m.length);g++)h.push(m[g].key);return h}}])})();function xR(r){var e=r.graph,t=r.hoveredNode,n=r.highlightedNodes,a=r.displayedNodeLabels,o=[];return e.forEachEdge(function(u,c,h,f){(h===t||f===t||n.has(h)||n.has(f)||a.has(h)&&a.has(f))&&o.push(u)}),o}var Lv=150,Dv=50,mr=Object.prototype.hasOwnProperty;function SR(r,e,t){if(!mr.call(t,"x")||!mr.call(t,"y"))throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(e,'". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));return t.color||(t.color=r.defaultNodeColor),!t.label&&t.label!==""&&(t.label=null),t.label!==void 0&&t.label!==null?t.label=""+t.label:t.label=null,t.size||(t.size=2),mr.call(t,"hidden")||(t.hidden=!1),mr.call(t,"highlighted")||(t.highlighted=!1),mr.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultNodeType),t.zIndex||(t.zIndex=0),t}function ER(r,e,t){return t.color||(t.color=r.defaultEdgeColor),t.label||(t.label=""),t.size||(t.size=.5),mr.call(t,"hidden")||(t.hidden=!1),mr.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultEdgeType),t.zIndex||(t.zIndex=0),t}var MR=(function(r){function e(t,n){var a,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Fn(this,e),a=Mi(this,e),be(a,"elements",{}),be(a,"canvasContexts",{}),be(a,"webGLContexts",{}),be(a,"pickingLayers",new Set),be(a,"textures",{}),be(a,"frameBuffers",{}),be(a,"activeListeners",{}),be(a,"labelGrid",new Pv),be(a,"nodeDataCache",{}),be(a,"edgeDataCache",{}),be(a,"nodeProgramIndex",{}),be(a,"edgeProgramIndex",{}),be(a,"nodesWithForcedLabels",new Set),be(a,"edgesWithForcedLabels",new Set),be(a,"nodeExtent",{x:[0,1],y:[0,1]}),be(a,"nodeZExtent",[1/0,-1/0]),be(a,"edgeZExtent",[1/0,-1/0]),be(a,"matrix",Oi()),be(a,"invMatrix",Oi()),be(a,"correctionRatio",1),be(a,"customBBox",null),be(a,"normalizationFunction",Tv({x:[0,1],y:[0,1]})),be(a,"graphToViewportRatio",1),be(a,"itemIDsIndex",{}),be(a,"nodeIndices",{}),be(a,"edgeIndices",{}),be(a,"width",0),be(a,"height",0),be(a,"pixelRatio",Mv()),be(a,"pickingDownSizingRatio",2*a.pixelRatio),be(a,"displayedNodeLabels",new Set),be(a,"displayedEdgeLabels",new Set),be(a,"highlightedNodes",new Set),be(a,"hoveredNode",null),be(a,"hoveredEdge",null),be(a,"renderFrame",null),be(a,"renderHighlightedNodesFrame",null),be(a,"needToProcess",!1),be(a,"checkEdgesEventsFrame",null),be(a,"nodePrograms",{}),be(a,"nodeHoverPrograms",{}),be(a,"edgePrograms",{}),a.settings=oR(o),uh(a.settings),iR(t),!(n instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");a.graph=t,a.container=n,a.createWebGLContext("edges",{picking:o.enableEdgeEvents}),a.createCanvasContext("edgeLabels"),a.createWebGLContext("nodes",{picking:!0}),a.createCanvasContext("labels"),a.createCanvasContext("hovers"),a.createWebGLContext("hoverNodes"),a.createCanvasContext("mouse",{style:{touchAction:"none",userSelect:"none"}}),a.resize();for(var u in a.settings.nodeProgramClasses)a.registerNodeProgram(u,a.settings.nodeProgramClasses[u],a.settings.nodeHoverProgramClasses[u]);for(var c in a.settings.edgeProgramClasses)a.registerEdgeProgram(c,a.settings.edgeProgramClasses[c]);return a.camera=new Av,a.bindCameraHandlers(),a.mouseCaptor=new hR(a.elements.mouse,a),a.mouseCaptor.setSettings(a.settings),a.touchCaptor=new mR(a.elements.mouse,a),a.touchCaptor.setSettings(a.settings),a.bindEventHandlers(),a.bindGraphHandlers(),a.handleSettingsUpdate(),a.refresh(),a}return wi(e,r),kn(e,[{key:"registerNodeProgram",value:function(n,a,o){return this.nodePrograms[n]&&this.nodePrograms[n].kill(),this.nodeHoverPrograms[n]&&this.nodeHoverPrograms[n].kill(),this.nodePrograms[n]=new a(this.webGLContexts.nodes,this.frameBuffers.nodes,this),this.nodeHoverPrograms[n]=new(o||a)(this.webGLContexts.hoverNodes,null,this),this}},{key:"registerEdgeProgram",value:function(n,a){return this.edgePrograms[n]&&this.edgePrograms[n].kill(),this.edgePrograms[n]=new a(this.webGLContexts.edges,this.frameBuffers.edges,this),this}},{key:"unregisterNodeProgram",value:function(n){if(this.nodePrograms[n]){var a=this.nodePrograms,o=a[n],u=ch(a,[n].map(Ao));o.kill(),this.nodePrograms=u}if(this.nodeHoverPrograms[n]){var c=this.nodeHoverPrograms,h=c[n],f=ch(c,[n].map(Ao));h.kill(),this.nodePrograms=f}return this}},{key:"unregisterEdgeProgram",value:function(n){if(this.edgePrograms[n]){var a=this.edgePrograms,o=a[n],u=ch(a,[n].map(Ao));o.kill(),this.edgePrograms=u}return this}},{key:"resetWebGLTexture",value:function(n){var a=this.webGLContexts[n],o=this.frameBuffers[n],u=this.textures[n];u&&a.deleteTexture(u);var c=a.createTexture();return a.bindFramebuffer(a.FRAMEBUFFER,o),a.bindTexture(a.TEXTURE_2D,c),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,this.width,this.height,0,a.RGBA,a.UNSIGNED_BYTE,null),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,c,0),this.textures[n]=c,this}},{key:"bindCameraHandlers",value:function(){var n=this;return this.activeListeners.camera=function(){n.scheduleRender()},this.camera.on("updated",this.activeListeners.camera),this}},{key:"unbindCameraHandlers",value:function(){return this.camera.removeListener("updated",this.activeListeners.camera),this}},{key:"getNodeAtPosition",value:function(n){var a=n.x,o=n.y,u=hv(this.webGLContexts.nodes,this.frameBuffers.nodes,a,o,this.pixelRatio,this.pickingDownSizingRatio),c=dv.apply(void 0,Rv(u)),h=this.itemIDsIndex[c];return h&&h.type==="node"?h.id:null}},{key:"bindEventHandlers",value:function(){var n=this;this.activeListeners.handleResize=function(){n.scheduleRefresh()},window.addEventListener("resize",this.activeListeners.handleResize),this.activeListeners.handleMove=function(o){var u=Mo(o),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}},h=n.getNodeAtPosition(u);if(h&&n.hoveredNode!==h&&!n.nodeDataCache[h].hidden){n.hoveredNode&&n.emit("leaveNode",nt(nt({},c),{},{node:n.hoveredNode})),n.hoveredNode=h,n.emit("enterNode",nt(nt({},c),{},{node:h})),n.scheduleHighlightedNodesRender();return}if(n.hoveredNode&&n.getNodeAtPosition(u)!==n.hoveredNode){var f=n.hoveredNode;n.hoveredNode=null,n.emit("leaveNode",nt(nt({},c),{},{node:f})),n.scheduleHighlightedNodesRender();return}if(n.settings.enableEdgeEvents){var m=n.hoveredNode?null:n.getEdgeAtPoint(c.event.x,c.event.y);m!==n.hoveredEdge&&(n.hoveredEdge&&n.emit("leaveEdge",nt(nt({},c),{},{edge:n.hoveredEdge})),m&&n.emit("enterEdge",nt(nt({},c),{},{edge:m})),n.hoveredEdge=m)}},this.activeListeners.handleMoveBody=function(o){var u=Mo(o);n.emit("moveBody",{event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}})},this.activeListeners.handleLeave=function(o){var u=Mo(o),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.hoveredNode&&(n.emit("leaveNode",nt(nt({},c),{},{node:n.hoveredNode})),n.scheduleHighlightedNodesRender()),n.settings.enableEdgeEvents&&n.hoveredEdge&&(n.emit("leaveEdge",nt(nt({},c),{},{edge:n.hoveredEdge})),n.scheduleHighlightedNodesRender()),n.emit("leaveStage",nt({},c))},this.activeListeners.handleEnter=function(o){var u=Mo(o),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.emit("enterStage",nt({},c))};var a=function(u){return function(c){var h=Mo(c),f={event:h,preventSigmaDefault:function(){h.preventSigmaDefault()}},m=n.getNodeAtPosition(h);if(m)return n.emit("".concat(u,"Node"),nt(nt({},f),{},{node:m}));if(n.settings.enableEdgeEvents){var g=n.getEdgeAtPoint(h.x,h.y);if(g)return n.emit("".concat(u,"Edge"),nt(nt({},f),{},{edge:g}))}return n.emit("".concat(u,"Stage"),f)}};return this.activeListeners.handleClick=a("click"),this.activeListeners.handleRightClick=a("rightClick"),this.activeListeners.handleDoubleClick=a("doubleClick"),this.activeListeners.handleWheel=a("wheel"),this.activeListeners.handleDown=a("down"),this.activeListeners.handleUp=a("up"),this.mouseCaptor.on("mousemove",this.activeListeners.handleMove),this.mouseCaptor.on("mousemovebody",this.activeListeners.handleMoveBody),this.mouseCaptor.on("click",this.activeListeners.handleClick),this.mouseCaptor.on("rightClick",this.activeListeners.handleRightClick),this.mouseCaptor.on("doubleClick",this.activeListeners.handleDoubleClick),this.mouseCaptor.on("wheel",this.activeListeners.handleWheel),this.mouseCaptor.on("mousedown",this.activeListeners.handleDown),this.mouseCaptor.on("mouseup",this.activeListeners.handleUp),this.mouseCaptor.on("mouseleave",this.activeListeners.handleLeave),this.mouseCaptor.on("mouseenter",this.activeListeners.handleEnter),this.touchCaptor.on("touchdown",this.activeListeners.handleDown),this.touchCaptor.on("touchdown",this.activeListeners.handleMove),this.touchCaptor.on("touchup",this.activeListeners.handleUp),this.touchCaptor.on("touchmove",this.activeListeners.handleMove),this.touchCaptor.on("tap",this.activeListeners.handleClick),this.touchCaptor.on("doubletap",this.activeListeners.handleDoubleClick),this.touchCaptor.on("touchmove",this.activeListeners.handleMoveBody),this}},{key:"bindGraphHandlers",value:function(){var n=this,a=this.graph,o=new Set(["x","y","zIndex","type"]);return this.activeListeners.eachNodeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachNode(function(m){return n.updateNode(m)});var f=!h||h.some(function(m){return o.has(m)});n.refresh({partialGraph:{nodes:a.nodes()},skipIndexation:!f,schedule:!0})},this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachEdge(function(m){return n.updateEdge(m)});var f=h&&["zIndex","type"].some(function(m){return h==null?void 0:h.includes(m)});n.refresh({partialGraph:{edges:a.edges()},skipIndexation:!f,schedule:!0})},this.activeListeners.addNodeGraphUpdate=function(u){var c=u.key;n.addNode(c),n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.updateNodeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropNodeGraphUpdate=function(u){var c=u.key;n.removeNode(c),n.refresh({schedule:!0})},this.activeListeners.addEdgeGraphUpdate=function(u){var c=u.key;n.addEdge(c),n.refresh({partialGraph:{edges:[c]},schedule:!0})},this.activeListeners.updateEdgeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{edges:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropEdgeGraphUpdate=function(u){var c=u.key;n.removeEdge(c),n.refresh({schedule:!0})},this.activeListeners.clearEdgesGraphUpdate=function(){n.clearEdgeState(),n.clearEdgeIndices(),n.refresh({schedule:!0})},this.activeListeners.clearGraphUpdate=function(){n.clearEdgeState(),n.clearNodeState(),n.clearEdgeIndices(),n.clearNodeIndices(),n.refresh({schedule:!0})},a.on("nodeAdded",this.activeListeners.addNodeGraphUpdate),a.on("nodeDropped",this.activeListeners.dropNodeGraphUpdate),a.on("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),a.on("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),a.on("edgeAdded",this.activeListeners.addEdgeGraphUpdate),a.on("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),a.on("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),a.on("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),a.on("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),a.on("cleared",this.activeListeners.clearGraphUpdate),this}},{key:"unbindGraphHandlers",value:function(){var n=this.graph;n.removeListener("nodeAdded",this.activeListeners.addNodeGraphUpdate),n.removeListener("nodeDropped",this.activeListeners.dropNodeGraphUpdate),n.removeListener("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),n.removeListener("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),n.removeListener("edgeAdded",this.activeListeners.addEdgeGraphUpdate),n.removeListener("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),n.removeListener("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),n.removeListener("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),n.removeListener("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),n.removeListener("cleared",this.activeListeners.clearGraphUpdate)}},{key:"getEdgeAtPoint",value:function(n,a){var o=hv(this.webGLContexts.edges,this.frameBuffers.edges,n,a,this.pixelRatio,this.pickingDownSizingRatio),u=dv.apply(void 0,Rv(o)),c=this.itemIDsIndex[u];return c&&c.type==="edge"?c.id:null}},{key:"process",value:function(){var n=this;this.emit("beforeProcess");var a=this.graph,o=this.settings,u=this.getDimensions();if(this.nodeExtent=nR(this.graph),!this.settings.autoRescale){var c=u.width,h=u.height,f=this.nodeExtent,m=f.x,g=f.y;this.nodeExtent={x:[(m[0]+m[1])/2-c/2,(m[0]+m[1])/2+c/2],y:[(g[0]+g[1])/2-h/2,(g[0]+g[1])/2+h/2]}}this.normalizationFunction=Tv(this.customBBox||this.nodeExtent);var v=new Av,x=Eo(v.getState(),u,this.getGraphDimensions(),this.getStagePadding());this.labelGrid.resizeAndClear(u,o.labelGridCellSize);for(var E={},M={},S={},y={},N=1,L=a.nodes(),w=0,P=L.length;w<P;w++){var I=L[w],D=this.nodeDataCache[I],O=a.getNodeAttributes(I);D.x=O.x,D.y=O.y,this.normalizationFunction.applyTo(D),typeof D.label=="string"&&!D.hidden&&this.labelGrid.add(I,D.size,this.framedGraphToViewport(D,{matrix:x})),E[D.type]=(E[D.type]||0)+1}this.labelGrid.organize();for(var R in this.nodePrograms){if(!mr.call(this.nodePrograms,R))throw new Error('Sigma: could not find a suitable program for node type "'.concat(R,'"!'));this.nodePrograms[R].reallocate(E[R]||0),E[R]=0}this.settings.zIndex&&this.nodeZExtent[0]!==this.nodeZExtent[1]&&(L=wv(this.nodeZExtent,function(Z){return n.nodeDataCache[Z].zIndex},L));for(var A=0,z=L.length;A<z;A++){var k=L[A];M[k]=N,y[M[k]]={type:"node",id:k},N++;var Y=this.nodeDataCache[k];this.addNodeToProgram(k,M[k],E[Y.type]++)}for(var se={},pe=a.edges(),ee=0,de=pe.length;ee<de;ee++){var W=pe[ee],me=this.edgeDataCache[W];se[me.type]=(se[me.type]||0)+1}this.settings.zIndex&&this.edgeZExtent[0]!==this.edgeZExtent[1]&&(pe=wv(this.edgeZExtent,function(Z){return n.edgeDataCache[Z].zIndex},pe));for(var ae in this.edgePrograms){if(!mr.call(this.edgePrograms,ae))throw new Error('Sigma: could not find a suitable program for edge type "'.concat(ae,'"!'));this.edgePrograms[ae].reallocate(se[ae]||0),se[ae]=0}for(var G=0,re=pe.length;G<re;G++){var Ie=pe[G];S[Ie]=N,y[S[Ie]]={type:"edge",id:Ie},N++;var te=this.edgeDataCache[Ie];this.addEdgeToProgram(Ie,S[Ie],se[te.type]++)}return this.itemIDsIndex=y,this.nodeIndices=M,this.edgeIndices=S,this.emit("afterProcess"),this}},{key:"handleSettingsUpdate",value:function(n){var a=this,o=this.settings;if(this.camera.minRatio=o.minCameraRatio,this.camera.maxRatio=o.maxCameraRatio,this.camera.enabledZooming=o.enableCameraZooming,this.camera.enabledPanning=o.enableCameraPanning,this.camera.enabledRotation=o.enableCameraRotation,o.cameraPanBoundaries?this.camera.clean=function(m){return a.cleanCameraState(m,o.cameraPanBoundaries&&af(o.cameraPanBoundaries)==="object"?o.cameraPanBoundaries:{})}:this.camera.clean=null,this.camera.setState(this.camera.validateState(this.camera.getState())),n){if(n.edgeProgramClasses!==o.edgeProgramClasses){for(var u in o.edgeProgramClasses)o.edgeProgramClasses[u]!==n.edgeProgramClasses[u]&&this.registerEdgeProgram(u,o.edgeProgramClasses[u]);for(var c in n.edgeProgramClasses)o.edgeProgramClasses[c]||this.unregisterEdgeProgram(c)}if(n.nodeProgramClasses!==o.nodeProgramClasses||n.nodeHoverProgramClasses!==o.nodeHoverProgramClasses){for(var h in o.nodeProgramClasses)(o.nodeProgramClasses[h]!==n.nodeProgramClasses[h]||o.nodeHoverProgramClasses[h]!==n.nodeHoverProgramClasses[h])&&this.registerNodeProgram(h,o.nodeProgramClasses[h],o.nodeHoverProgramClasses[h]);for(var f in n.nodeProgramClasses)o.nodeProgramClasses[f]||this.unregisterNodeProgram(f)}}return this.mouseCaptor.setSettings(this.settings),this.touchCaptor.setSettings(this.settings),this}},{key:"cleanCameraState",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.tolerance,u=o===void 0?0:o,c=a.boundaries,h=nt({},n),f=c||this.nodeExtent,m=Aa(f.x,2),g=m[0],v=m[1],x=Aa(f.y,2),E=x[0],M=x[1],S=[this.graphToViewport({x:g,y:E},{cameraState:n}),this.graphToViewport({x:v,y:E},{cameraState:n}),this.graphToViewport({x:g,y:M},{cameraState:n}),this.graphToViewport({x:v,y:M},{cameraState:n})],y=1/0,N=-1/0,L=1/0,w=-1/0;S.forEach(function(se){var pe=se.x,ee=se.y;y=Math.min(y,pe),N=Math.max(N,pe),L=Math.min(L,ee),w=Math.max(w,ee)});var P=N-y,I=w-L,D=this.getDimensions(),O=D.width,R=D.height,A=0,z=0;if(P>=O?N<O-u?A=N-(O-u):y>u&&(A=y-u):N>O+u?A=N-(O+u):y<-u&&(A=y+u),I>=R?w<R-u?z=w-(R-u):L>u&&(z=L-u):w>R+u?z=w-(R+u):L<-u&&(z=L+u),A||z){var k=this.viewportToFramedGraph({x:0,y:0},{cameraState:n}),Y=this.viewportToFramedGraph({x:A,y:z},{cameraState:n});A=Y.x-k.x,z=Y.y-k.y,h.x+=A,h.y+=z}return h}},{key:"renderLabels",value:function(){if(!this.settings.renderLabels)return this;var n=this.camera.getState(),a=this.labelGrid.getLabelsToDisplay(n.ratio,this.settings.labelDensity);bv(a,this.nodesWithForcedLabels),this.displayedNodeLabels=new Set;for(var o=this.canvasContexts.labels,u=0,c=a.length;u<c;u++){var h=a[u],f=this.nodeDataCache[h];if(!this.displayedNodeLabels.has(h)&&!f.hidden){var m=this.framedGraphToViewport(f),g=m.x,v=m.y,x=this.scaleSize(f.size);if(!(!f.forceLabel&&x<this.settings.labelRenderedSizeThreshold)&&!(g<-Lv||g>this.width+Lv||v<-Dv||v>this.height+Dv)){this.displayedNodeLabels.add(h);var E=this.settings.defaultDrawNodeLabel,M=this.nodePrograms[f.type],S=(M==null?void 0:M.drawLabel)||E;S(o,nt(nt({key:h},f),{},{size:x,x:g,y:v}),this.settings)}}}return this}},{key:"renderEdgeLabels",value:function(){if(!this.settings.renderEdgeLabels)return this;var n=this.canvasContexts.edgeLabels;n.clearRect(0,0,this.width,this.height);var a=xR({graph:this.graph,hoveredNode:this.hoveredNode,displayedNodeLabels:this.displayedNodeLabels,highlightedNodes:this.highlightedNodes});bv(a,this.edgesWithForcedLabels);for(var o=new Set,u=0,c=a.length;u<c;u++){var h=a[u],f=this.graph.extremities(h),m=this.nodeDataCache[f[0]],g=this.nodeDataCache[f[1]],v=this.edgeDataCache[h];if(!o.has(h)&&!(v.hidden||m.hidden||g.hidden)){var x=this.settings.defaultDrawEdgeLabel,E=this.edgePrograms[v.type],M=(E==null?void 0:E.drawLabel)||x;M(n,nt(nt({key:h},v),{},{size:this.scaleSize(v.size)}),nt(nt(nt({key:f[0]},m),this.framedGraphToViewport(m)),{},{size:this.scaleSize(m.size)}),nt(nt(nt({key:f[1]},g),this.framedGraphToViewport(g)),{},{size:this.scaleSize(g.size)}),this.settings),o.add(h)}}return this.displayedEdgeLabels=o,this}},{key:"renderHighlightedNodes",value:function(){var n=this,a=this.canvasContexts.hovers;a.clearRect(0,0,this.width,this.height);var o=function(x){var E=n.nodeDataCache[x],M=n.framedGraphToViewport(E),S=M.x,y=M.y,N=n.scaleSize(E.size),L=n.settings.defaultDrawNodeHover,w=n.nodePrograms[E.type],P=(w==null?void 0:w.drawHover)||L;P(a,nt(nt({key:x},E),{},{size:N,x:S,y}),n.settings)},u=[];this.hoveredNode&&!this.nodeDataCache[this.hoveredNode].hidden&&u.push(this.hoveredNode),this.highlightedNodes.forEach(function(v){v!==n.hoveredNode&&u.push(v)}),u.forEach(function(v){return o(v)});var c={};u.forEach(function(v){var x=n.nodeDataCache[v].type;c[x]=(c[x]||0)+1});for(var h in this.nodeHoverPrograms)this.nodeHoverPrograms[h].reallocate(c[h]||0),c[h]=0;u.forEach(function(v){var x=n.nodeDataCache[v];n.nodeHoverPrograms[x.type].process(0,c[x.type]++,x)}),this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);var f=this.getRenderParams();for(var m in this.nodeHoverPrograms){var g=this.nodeHoverPrograms[m];g.render(f)}}},{key:"scheduleHighlightedNodesRender",value:function(){var n=this;this.renderHighlightedNodesFrame||this.renderFrame||(this.renderHighlightedNodesFrame=requestAnimationFrame(function(){n.renderHighlightedNodesFrame=null,n.renderHighlightedNodes(),n.renderEdgeLabels()}))}},{key:"render",value:function(){var n=this;this.emit("beforeRender");var a=function(){return n.emit("afterRender"),n};if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),this.needToProcess&&this.process(),this.needToProcess=!1,this.clear(),this.pickingLayers.forEach(function(S){return n.resetWebGLTexture(S)}),!this.graph.order)return a();var o=this.mouseCaptor,u=this.camera.isAnimated()||o.isMoving||o.draggedEvents||o.currentWheelDirection,c=this.camera.getState(),h=this.getDimensions(),f=this.getGraphDimensions(),m=this.getStagePadding();this.matrix=Eo(c,h,f,m),this.invMatrix=Eo(c,h,f,m,!0),this.correctionRatio=tR(this.matrix,c,h),this.graphToViewportRatio=this.getGraphToViewportRatio();var g=this.getRenderParams();for(var v in this.nodePrograms){var x=this.nodePrograms[v];x.render(g)}if(!this.settings.hideEdgesOnMove||!u)for(var E in this.edgePrograms){var M=this.edgePrograms[E];M.render(g)}return this.settings.hideLabelsOnMove&&u||(this.renderLabels(),this.renderEdgeLabels(),this.renderHighlightedNodes()),a()}},{key:"addNode",value:function(n){var a=Object.assign({},this.graph.getNodeAttributes(n));this.settings.nodeReducer&&(a=this.settings.nodeReducer(n,a));var o=SR(this.settings,n,a);this.nodeDataCache[n]=o,this.nodesWithForcedLabels.delete(n),o.forceLabel&&!o.hidden&&this.nodesWithForcedLabels.add(n),this.highlightedNodes.delete(n),o.highlighted&&!o.hidden&&this.highlightedNodes.add(n),this.settings.zIndex&&(o.zIndex<this.nodeZExtent[0]&&(this.nodeZExtent[0]=o.zIndex),o.zIndex>this.nodeZExtent[1]&&(this.nodeZExtent[1]=o.zIndex))}},{key:"updateNode",value:function(n){this.addNode(n);var a=this.nodeDataCache[n];this.normalizationFunction.applyTo(a)}},{key:"removeNode",value:function(n){delete this.nodeDataCache[n],delete this.nodeProgramIndex[n],this.highlightedNodes.delete(n),this.hoveredNode===n&&(this.hoveredNode=null),this.nodesWithForcedLabels.delete(n)}},{key:"addEdge",value:function(n){var a=Object.assign({},this.graph.getEdgeAttributes(n));this.settings.edgeReducer&&(a=this.settings.edgeReducer(n,a));var o=ER(this.settings,n,a);this.edgeDataCache[n]=o,this.edgesWithForcedLabels.delete(n),o.forceLabel&&!o.hidden&&this.edgesWithForcedLabels.add(n),this.settings.zIndex&&(o.zIndex<this.edgeZExtent[0]&&(this.edgeZExtent[0]=o.zIndex),o.zIndex>this.edgeZExtent[1]&&(this.edgeZExtent[1]=o.zIndex))}},{key:"updateEdge",value:function(n){this.addEdge(n)}},{key:"removeEdge",value:function(n){delete this.edgeDataCache[n],delete this.edgeProgramIndex[n],this.hoveredEdge===n&&(this.hoveredEdge=null),this.edgesWithForcedLabels.delete(n)}},{key:"clearNodeIndices",value:function(){this.labelGrid=new Pv,this.nodeExtent={x:[0,1],y:[0,1]},this.nodeDataCache={},this.edgeProgramIndex={},this.nodesWithForcedLabels=new Set,this.nodeZExtent=[1/0,-1/0],this.highlightedNodes=new Set}},{key:"clearEdgeIndices",value:function(){this.edgeDataCache={},this.edgeProgramIndex={},this.edgesWithForcedLabels=new Set,this.edgeZExtent=[1/0,-1/0]}},{key:"clearIndices",value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:"clearNodeState",value:function(){this.displayedNodeLabels=new Set,this.highlightedNodes=new Set,this.hoveredNode=null}},{key:"clearEdgeState",value:function(){this.displayedEdgeLabels=new Set,this.highlightedNodes=new Set,this.hoveredEdge=null}},{key:"clearState",value:function(){this.clearEdgeState(),this.clearNodeState()}},{key:"addNodeToProgram",value:function(n,a,o){var u=this.nodeDataCache[n],c=this.nodePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for node type "'.concat(u.type,'"!'));c.process(a,o,u),this.nodeProgramIndex[n]=o}},{key:"addEdgeToProgram",value:function(n,a,o){var u=this.edgeDataCache[n],c=this.edgePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for edge type "'.concat(u.type,'"!'));var h=this.graph.extremities(n),f=this.nodeDataCache[h[0]],m=this.nodeDataCache[h[1]];c.process(a,o,f,m,u),this.edgeProgramIndex[n]=o}},{key:"getRenderParams",value:function(){return{matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.pickingDownSizingRatio,minEdgeThickness:this.settings.minEdgeThickness,antiAliasingFeather:this.settings.antiAliasingFeather}}},{key:"getStagePadding",value:function(){var n=this.settings,a=n.stagePadding,o=n.autoRescale;return o&&a||0}},{key:"createLayer",value:function(n,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.elements[n])throw new Error('Sigma: a layer named "'.concat(n,'" already exists'));var u=rR(a,{position:"absolute"},{class:"sigma-".concat(n)});return o.style&&Object.assign(u.style,o.style),this.elements[n]=u,"beforeLayer"in o&&o.beforeLayer?this.elements[o.beforeLayer].before(u):"afterLayer"in o&&o.afterLayer?this.elements[o.afterLayer].after(u):this.container.appendChild(u),u}},{key:"createCanvas",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(n,"canvas",a)}},{key:"createCanvasContext",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.createCanvas(n,a),u={preserveDrawingBuffer:!1,antialias:!1};return this.canvasContexts[n]=o.getContext("2d",u),this}},{key:"createWebGLContext",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=(a==null?void 0:a.canvas)||this.createCanvas(n,a);a.hidden&&o.remove();var u=nt({preserveDrawingBuffer:!1,antialias:!1},a),c;c=o.getContext("webgl2",u),c||(c=o.getContext("webgl",u)),c||(c=o.getContext("experimental-webgl",u));var h=c;if(this.webGLContexts[n]=h,h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA),a.picking){this.pickingLayers.add(n);var f=h.createFramebuffer();if(!f)throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(n));this.frameBuffers[n]=f}return h}},{key:"killLayer",value:function(n){var a=this.elements[n];if(!a)throw new Error("Sigma: cannot kill layer ".concat(n,", which does not exist"));if(this.webGLContexts[n]){var o,u=this.webGLContexts[n];(o=u.getExtension("WEBGL_lose_context"))===null||o===void 0||o.loseContext(),delete this.webGLContexts[n]}else this.canvasContexts[n]&&delete this.canvasContexts[n];return a.remove(),delete this.elements[n],this}},{key:"getCamera",value:function(){return this.camera}},{key:"setCamera",value:function(n){this.unbindCameraHandlers(),this.camera=n,this.bindCameraHandlers()}},{key:"getContainer",value:function(){return this.container}},{key:"getGraph",value:function(){return this.graph}},{key:"setGraph",value:function(n){n!==this.graph&&(this.hoveredNode&&!n.hasNode(this.hoveredNode)&&(this.hoveredNode=null),this.hoveredEdge&&!n.hasEdge(this.hoveredEdge)&&(this.hoveredEdge=null),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.graph=n,this.bindGraphHandlers(),this.refresh())}},{key:"getMouseCaptor",value:function(){return this.mouseCaptor}},{key:"getTouchCaptor",value:function(){return this.touchCaptor}},{key:"getDimensions",value:function(){return{width:this.width,height:this.height}}},{key:"getGraphDimensions",value:function(){var n=this.customBBox||this.nodeExtent;return{width:n.x[1]-n.x[0]||1,height:n.y[1]-n.y[0]||1}}},{key:"getNodeDisplayData",value:function(n){var a=this.nodeDataCache[n];return a?Object.assign({},a):void 0}},{key:"getEdgeDisplayData",value:function(n){var a=this.edgeDataCache[n];return a?Object.assign({},a):void 0}},{key:"getNodeDisplayedLabels",value:function(){return new Set(this.displayedNodeLabels)}},{key:"getEdgeDisplayedLabels",value:function(){return new Set(this.displayedEdgeLabels)}},{key:"getSettings",value:function(){return nt({},this.settings)}},{key:"getSetting",value:function(n){return this.settings[n]}},{key:"setSetting",value:function(n,a){var o=nt({},this.settings);return this.settings[n]=a,uh(this.settings),this.handleSettingsUpdate(o),this.scheduleRefresh(),this}},{key:"updateSetting",value:function(n,a){return this.setSetting(n,a(this.settings[n])),this}},{key:"setSettings",value:function(n){var a=nt({},this.settings);return this.settings=nt(nt({},this.settings),n),uh(this.settings),this.handleSettingsUpdate(a),this.scheduleRefresh(),this}},{key:"resize",value:function(n){var a=this.width,o=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.pixelRatio=Mv(),this.width===0)if(this.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!n&&a===this.width&&o===this.height)return this;for(var u in this.elements){var c=this.elements[u];c.style.width=this.width+"px",c.style.height=this.height+"px"}for(var h in this.canvasContexts)this.elements[h].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[h].setAttribute("height",this.height*this.pixelRatio+"px"),this.pixelRatio!==1&&this.canvasContexts[h].scale(this.pixelRatio,this.pixelRatio);for(var f in this.webGLContexts){this.elements[f].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[f].setAttribute("height",this.height*this.pixelRatio+"px");var m=this.webGLContexts[f];if(m.viewport(0,0,this.width*this.pixelRatio,this.height*this.pixelRatio),this.pickingLayers.has(f)){var g=this.textures[f];g&&m.deleteTexture(g)}}return this.emit("resize"),this}},{key:"clear",value:function(){return this.emit("beforeClear"),this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.canvasContexts.labels.clearRect(0,0,this.width,this.height),this.canvasContexts.hovers.clearRect(0,0,this.width,this.height),this.canvasContexts.edgeLabels.clearRect(0,0,this.width,this.height),this.emit("afterClear"),this}},{key:"refresh",value:function(n){var a=this,o=(n==null?void 0:n.skipIndexation)!==void 0?n==null?void 0:n.skipIndexation:!1,u=(n==null?void 0:n.schedule)!==void 0?n.schedule:!1,c=!n||!n.partialGraph;if(c)this.clearEdgeIndices(),this.clearNodeIndices(),this.graph.forEachNode(function(w){return a.addNode(w)}),this.graph.forEachEdge(function(w){return a.addEdge(w)});else{for(var h,f,m=((h=n.partialGraph)===null||h===void 0?void 0:h.nodes)||[],g=0,v=(m==null?void 0:m.length)||0;g<v;g++){var x=m[g];if(this.updateNode(x),o){var E=this.nodeProgramIndex[x];if(E===void 0)throw new Error('Sigma: node "'.concat(x,`" can't be repaint`));this.addNodeToProgram(x,this.nodeIndices[x],E)}}for(var M=(n==null||(f=n.partialGraph)===null||f===void 0?void 0:f.edges)||[],S=0,y=M.length;S<y;S++){var N=M[S];if(this.updateEdge(N),o){var L=this.edgeProgramIndex[N];if(L===void 0)throw new Error('Sigma: edge "'.concat(N,`" can't be repaint`));this.addEdgeToProgram(N,this.edgeIndices[N],L)}}}return(c||!o)&&(this.needToProcess=!0),u?this.scheduleRender():this.render(),this}},{key:"scheduleRender",value:function(){var n=this;return this.renderFrame||(this.renderFrame=requestAnimationFrame(function(){n.render()})),this}},{key:"scheduleRefresh",value:function(n){return this.refresh(nt(nt({},n),{},{schedule:!0}))}},{key:"getViewportZoomedState",value:function(n,a){var o=this.camera.getState(),u=o.ratio,c=o.angle,h=o.x,f=o.y,m=this.settings,g=m.minCameraRatio,v=m.maxCameraRatio;typeof v=="number"&&(a=Math.min(a,v)),typeof g=="number"&&(a=Math.max(a,g));var x=a/u,E={x:this.width/2,y:this.height/2},M=this.viewportToFramedGraph(n),S=this.viewportToFramedGraph(E);return{angle:c,x:(M.x-S.x)*(1-x)+h,y:(M.y-S.y)*(1-x)+f,ratio:a}}},{key:"viewRectangle",value:function(){var n=this.viewportToFramedGraph({x:0,y:0}),a=this.viewportToFramedGraph({x:this.width,y:0}),o=this.viewportToFramedGraph({x:0,y:this.height});return{x1:n.x,y1:n.y,x2:a.x,y2:a.y,height:a.y-o.y}}},{key:"framedGraphToViewport",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=!!a.cameraState||!!a.viewportDimensions||!!a.graphDimensions,u=a.matrix?a.matrix:o?Eo(a.cameraState||this.camera.getState(),a.viewportDimensions||this.getDimensions(),a.graphDimensions||this.getGraphDimensions(),a.padding||this.getStagePadding()):this.matrix,c=sf(u,n);return{x:(1+c.x)*this.width/2,y:(1-c.y)*this.height/2}}},{key:"viewportToFramedGraph",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=!!a.cameraState||!!a.viewportDimensions||!a.graphDimensions,u=a.matrix?a.matrix:o?Eo(a.cameraState||this.camera.getState(),a.viewportDimensions||this.getDimensions(),a.graphDimensions||this.getGraphDimensions(),a.padding||this.getStagePadding(),!0):this.invMatrix,c=sf(u,{x:n.x/this.width*2-1,y:1-n.y/this.height*2});return isNaN(c.x)&&(c.x=0),isNaN(c.y)&&(c.y=0),c}},{key:"viewportToGraph",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(n,a))}},{key:"graphToViewport",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(n),a)}},{key:"getGraphToViewportRatio",value:function(){var n={x:0,y:0},a={x:1,y:1},o=Math.sqrt(Math.pow(n.x-a.x,2)+Math.pow(n.y-a.y,2)),u=this.graphToViewport(n),c=this.graphToViewport(a),h=Math.sqrt(Math.pow(u.x-c.x,2)+Math.pow(u.y-c.y,2));return h/o}},{key:"getBBox",value:function(){return this.nodeExtent}},{key:"getCustomBBox",value:function(){return this.customBBox}},{key:"setCustomBBox",value:function(n){return this.customBBox=n,this.scheduleRender(),this}},{key:"kill",value:function(){this.emit("kill"),this.removeAllListeners(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.nodeDataCache={},this.edgeDataCache={},this.highlightedNodes.clear(),this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.renderHighlightedNodesFrame&&(cancelAnimationFrame(this.renderHighlightedNodesFrame),this.renderHighlightedNodesFrame=null);for(var n=this.container;n.firstChild;)n.removeChild(n.firstChild);for(var a in this.nodePrograms)this.nodePrograms[a].kill();for(var o in this.nodeHoverPrograms)this.nodeHoverPrograms[o].kill();for(var u in this.edgePrograms)this.edgePrograms[u].kill();this.nodePrograms={},this.nodeHoverPrograms={},this.edgePrograms={};for(var c in this.elements)this.killLayer(c);this.canvasContexts={},this.webGLContexts={},this.elements={}}},{key:"scaleSize",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return n/this.settings.zoomToSizeRatioFunction(a)*(this.getSetting("itemSizesReference")==="positions"?a*this.graphToViewportRatio:1)}},{key:"getCanvases",value:function(){var n={};for(var a in this.elements)this.elements[a]instanceof HTMLCanvasElement&&(n[a]=this.elements[a]);return n}}])})(Af),wR=MR;const Nv=["#e8aa55","#c96f32","#a4d06f","#5da271","#4a7ea8","#b7678f","#d7c35f"];function TR(r){let e=0;for(const t of r)e=e*33+t.charCodeAt(0)>>>0;return Nv[e%Nv.length]}function bR({payload:r,mode:e,currentTurnNodeIds:t,selectedNodeId:n,selectedAssembly:a,onSelectNode:o}){const u=Je.useRef(null),c=Je.useRef(null),[h,f]=Je.useState(null),m=Je.useMemo(()=>{var v;const g=new Map;for(const x of r.cluster_summaries??[]){const E=(v=x.top_meme_ids)==null?void 0:v[0];E&&g.set(E,x.display_label)}return g},[r.cluster_summaries]);return Je.useEffect(()=>{var v,x;if(!u.current)return;f(null);let g=null;try{const E=new zt,M=new Set(t),S=new Set((a==null?void 0:a.member_meme_ids)??[]),y=new Set((a==null?void 0:a.supporting_edge_ids)??[]),N=e==="Semantic Map"||e==="Assemblies"||e==="Active Set"||e==="Compare",L=N?r.semantic_nodes:r.runtime_nodes,w=N?r.semantic_edges:r.runtime_edges;for(const P of L){const I=((v=P.render_coords)==null?void 0:v.force)??((x=P.derived_coords)==null?void 0:x.spectral)??{x:0,y:0},D=M.has(P.id)||n===P.id||S.has(P.id),O=m.has(P.id),R=Number(P.degree??0)>=3;let A="";e==="Semantic Map"&&O&&(A=m.get(P.id)??""),!A&&(D||R)&&(A=String(P.label??P.id)),E.addNode(P.id,{x:Number(I.x??0),y:Number(I.y??0),size:D?10:6,label:A,color:S.has(P.id)?"#fff0a8":M.has(P.id)?"#ffcb73":TR(String(P.cluster_signature??P.kind??P.id))})}for(const P of w)!E.hasNode(P.source)||!E.hasNode(P.target)||E.addEdge(P.source,P.target,{size:y.has(P.id)?2.5:1.1,color:y.has(P.id)?"#fff0a8":"rgba(233, 177, 90, 0.38)",label:a&&y.has(P.id)?String(P.type??""):""});g=new wR(E,u.current,{renderEdgeLabels:!!a,labelRenderedSizeThreshold:7,labelDensity:.08,allowInvalidContainer:!0}),c.current=g,g.on("clickNode",({node:P,event:I})=>{var O;const D=!!((O=I.original)!=null&&O.shiftKey);o(String(P),D)}),g.on("clickStage",()=>o("",!1)),g.getCamera().animatedReset({duration:250})}catch(E){u.current.innerHTML="",f(E instanceof Error?E.message:"Graph renderer unavailable.")}return()=>{g==null||g.kill(),c.current=null}},[r,e,t,n,a,o,m]),h?U.jsxs("div",{className:"empty-state","data-testid":"graph-canvas-fallback",role:"note",children:[U.jsx("h2",{children:"Graph renderer unavailable"}),U.jsx("p",{children:h}),U.jsx("p",{children:"Use Graph Entities, Relations, and inspector cards to keep read paths truthful."})]},"graph-fallback"):U.jsx("div",{"aria-label":"Graph canvas",className:"graph-panel","data-testid":"graph-canvas",ref:u,role:"region"},"graph-canvas")}function AR({scene:r}){const e=Je.useRef(null),[t,n]=Je.useState(null);return Je.useEffect(()=>{var h,f,m,g,v,x;if(!e.current)return;const a=e.current;n(null);let o=null,u=null,c=0;try{const E=new i_;E.background=new Ct("#120d08");const M=new ci(45,a.clientWidth/Math.max(a.clientHeight,1),.1,1e3);M.position.set(0,6,16),o=new p_({antialias:!0}),o.setSize(a.clientWidth,Math.max(a.clientHeight,280)),a.innerHTML="",a.appendChild(o.domElement);const S=new Map(((r==null?void 0:r.nodes)??[]).map(O=>[String(O.id),O])),y=new Float32Array(((r==null?void 0:r.nodes)??[]).length*3),N=new Float32Array(((r==null?void 0:r.nodes)??[]).length*3),L=new Map;((r==null?void 0:r.nodes)??[]).forEach((O,R)=>{var z,k,Y;const A=L.get(O.color)??new Ct(O.color??"#efb15f");L.set(O.color??"#efb15f",A),y[R*3]=Number(((z=O.position)==null?void 0:z.x)??0),y[R*3+1]=Number(((k=O.position)==null?void 0:k.y)??0),y[R*3+2]=Number(((Y=O.position)==null?void 0:Y.z)??0),N[R*3]=A.r,N[R*3+1]=A.g,N[R*3+2]=A.b});const w=new di;w.setAttribute("position",new Vn(y,3)),w.setAttribute("color",new Vn(N,3));const P=new a_(w,new xf({size:.28,vertexColors:!0}));E.add(P);for(const O of(r==null?void 0:r.edges)??[]){const R=S.get(String(O.source)),A=S.get(String(O.target));if(!R||!A)continue;const z=new di().setFromPoints([new le(Number(((h=R.position)==null?void 0:h.x)??0),Number(((f=R.position)==null?void 0:f.y)??0),Number(((m=R.position)==null?void 0:m.z)??0)),new le(Number(((g=A.position)==null?void 0:g.x)??0),Number(((v=A.position)==null?void 0:v.y)??0),Number(((x=A.position)==null?void 0:x.z)??0))]),k=new yf({color:O.kind==="sequence"?16765322:12155706,transparent:!0,opacity:.6});E.add(new s_(z,k))}E.add(new l_(16777215,1));let I=0;const D=()=>{o&&(I+=1,E.rotation.y=Math.sin(I/240)*.2,o.render(E,M),c=window.requestAnimationFrame(D))};D(),u=()=>{if(!o)return;const O=a.clientWidth||640,R=Math.max(a.clientHeight,280);M.aspect=O/R,M.updateProjectionMatrix(),o.setSize(O,R)},window.addEventListener("resize",u)}catch(E){a.innerHTML="",n(E instanceof Error?E.message:"Tanakh scene renderer unavailable.")}return()=>{u&&window.removeEventListener("resize",u),window.cancelAnimationFrame(c),o==null||o.dispose(),a.innerHTML=""}},[r]),t?U.jsxs("div",{className:"empty-state","data-testid":"tanakh-scene-fallback",role:"note",children:[U.jsx("h2",{children:"Merkavah scene unavailable"}),U.jsx("p",{children:t}),U.jsx("p",{children:"The reader and JSON artifact links remain authoritative."})]}):U.jsx("div",{"aria-label":"Tanakh merkavah scene",className:"tanakh-scene-panel","data-testid":"tanakh-scene",ref:e,role:"region"})}function Ms(r){return r?r.slice(0,12):"—"}function RR({payload:r,liveEnabled:e,canRun:t,running:n,onRun:a}){var pe,ee,de,W,me,ae,G,re,Ie,te,Z,ve,Ee,fe,Ye,Fe,ft,Pt,vt,V,Zt,_t,Ge,tt,At,qe,F;const o=(r==null?void 0:r.bundle)??{},u=o.scene??{},c=o.passage??{},h=o.analyses??{},f=o.validation??{},[m,g]=Je.useState((r==null?void 0:r.current_ref)??"Ezek 1"),[v,x]=Je.useState(((pe=o.params)==null?void 0:pe.preprocess)??"strip_pointing"),[E,M]=Je.useState(((ee=o.params)==null?void 0:ee.gematria_scheme)??"mispar_hechrechi"),[S,y]=Je.useState(((de=o.params)==null?void 0:de.notarikon_mode)??"first_letter"),[N,L]=Je.useState(((me=(W=o.params)==null?void 0:W.scene)==null?void 0:me.theme)??"amber"),[w,P]=Je.useState(String(((G=(ae=o.params)==null?void 0:ae.scene)==null?void 0:G.seed)??11)),[I,D]=Je.useState(String(((Ie=(re=o.params)==null?void 0:re.scene)==null?void 0:Ie.letter_angle)??.14)),[O,R]=Je.useState(String(((Z=(te=o.params)==null?void 0:te.scene)==null?void 0:Z.word_radius)??.22)),[A,z]=Je.useState(String(((Ee=(ve=o.params)==null?void 0:ve.scene)==null?void 0:Ee.verse_height)??1.1)),[k,Y]=Je.useState(String(((Ye=(fe=o.params)==null?void 0:fe.scene)==null?void 0:Ye.oscillation_amplitude)??.18));Je.useEffect(()=>{var b,ne,Se,Me,ye,Xe,Oe,st,rt,Ae,He,at,H,ge,xe;g((r==null?void 0:r.current_ref)??"Ezek 1"),x(((b=o.params)==null?void 0:b.preprocess)??"strip_pointing"),M(((ne=o.params)==null?void 0:ne.gematria_scheme)??"mispar_hechrechi"),y(((Se=o.params)==null?void 0:Se.notarikon_mode)??"first_letter"),L(((ye=(Me=o.params)==null?void 0:Me.scene)==null?void 0:ye.theme)??"amber"),P(String(((Oe=(Xe=o.params)==null?void 0:Xe.scene)==null?void 0:Oe.seed)??11)),D(String(((rt=(st=o.params)==null?void 0:st.scene)==null?void 0:rt.letter_angle)??.14)),R(String(((He=(Ae=o.params)==null?void 0:Ae.scene)==null?void 0:He.word_radius)??.22)),z(String(((H=(at=o.params)==null?void 0:at.scene)==null?void 0:H.verse_height)??1.1)),Y(String(((xe=(ge=o.params)==null?void 0:ge.scene)==null?void 0:xe.oscillation_amplitude)??.18))},[o.params,r==null?void 0:r.current_ref]);async function se(b){b.preventDefault(),t&&await a({ref:m,params:{preprocess:v,gematria_scheme:E,notarikon_mode:S,temurah_mapping:"atbash",scene:{theme:N,seed:Number(w),letter_angle:Number(I),word_radius:Number(O),verse_height:Number(A),oscillation_amplitude:Number(k)}}})}return U.jsxs("div",{className:"tanakh-surface",children:[U.jsxs("form",{className:"tanakh-controls",onSubmit:se,children:[U.jsxs("label",{children:[U.jsx("span",{children:"Reference"}),U.jsx("input",{onChange:b=>g(b.target.value),value:m})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Preprocess"}),U.jsxs("select",{onChange:b=>x(b.target.value),value:v,children:[U.jsx("option",{value:"strip_pointing",children:"Strip pointing"}),U.jsx("option",{value:"keep_vowels",children:"Keep vowels"}),U.jsx("option",{value:"keep_cantillation",children:"Keep cantillation"})]})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Gematria"}),U.jsxs("select",{onChange:b=>M(b.target.value),value:E,children:[U.jsx("option",{value:"mispar_hechrechi",children:"Mispar hechrechi"}),U.jsx("option",{value:"mispar_gadol",children:"Mispar gadol"})]})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Notarikon"}),U.jsxs("select",{onChange:b=>y(b.target.value),value:S,children:[U.jsx("option",{value:"first_letter",children:"First letter"}),U.jsx("option",{value:"last_letter",children:"Last letter"})]})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Theme"}),U.jsxs("select",{onChange:b=>L(b.target.value),value:N,children:[U.jsx("option",{value:"amber",children:"Amber"}),U.jsx("option",{value:"brass",children:"Brass"}),U.jsx("option",{value:"sea",children:"Sea"})]})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Seed"}),U.jsx("input",{onChange:b=>P(b.target.value),value:w})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Letter angle"}),U.jsx("input",{onChange:b=>D(b.target.value),value:I})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Word radius"}),U.jsx("input",{onChange:b=>R(b.target.value),value:O})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Verse height"}),U.jsx("input",{onChange:b=>z(b.target.value),value:A})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Oscillation"}),U.jsx("input",{onChange:b=>Y(b.target.value),value:k})]}),U.jsx("button",{className:"toolbar-button is-active",disabled:!t||n,type:"submit",children:n?"Running...":e?"Run Tanakh tool":"Static export"})]}),U.jsxs("div",{className:"toolbar toolbar-badges",children:[U.jsx("span",{className:"badge badge-observed",children:"Canonical text"}),U.jsx("span",{className:"badge badge-derived",children:"Derived scene"}),U.jsxs("span",{className:"badge badge-derived",children:["Dataset ",((Fe=o.manifest)==null?void 0:Fe.dataset_id)??"—"]}),U.jsx("span",{className:"badge badge-warning",children:"Layout != evidence"})]}),U.jsxs("div",{className:"tanakh-grid",children:[U.jsxs("section",{className:"tanakh-card tanakh-reader-card",children:[U.jsxs("header",{children:[U.jsx("h2",{children:(r==null?void 0:r.current_ref)??"Tanakh surface"}),U.jsx("p",{children:"Canonical reader stays DOM/CSS. Derived preprocess output is shown alongside it."})]}),U.jsxs("div",{className:"tanakh-provenance-row",children:[U.jsxs("span",{children:["Bundle hash ",Ms(r==null?void 0:r.bundle_hash)]}),U.jsxs("span",{children:["Scene hash ",Ms(u.scene_hash)]}),U.jsx("span",{children:t?"Live API enabled":"Static export only"})]}),U.jsx("article",{className:"tanakh-reader",dir:"rtl",lang:"he",children:(c.verses??[]).map(b=>{var ne;return U.jsxs("div",{className:"tanakh-verse",children:[U.jsx("span",{className:"tanakh-verse-ref",children:b.ref}),U.jsx("div",{className:"tanakh-verse-text",children:b.canonical_text}),U.jsx("div",{className:"tanakh-verse-processed",children:(ne=b.processed)==null?void 0:ne.text})]},b.ref)})})]}),U.jsxs("section",{className:"tanakh-card tanakh-analysis-card",children:[U.jsxs("header",{children:[U.jsx("h2",{children:"Analyzer outputs"}),U.jsx("p",{children:"Every card is derived and provenance-bearing."})]}),U.jsxs("div",{className:"tanakh-analysis-stack",children:[U.jsxs("div",{className:"tanakh-analysis-item",children:[U.jsx("strong",{children:"Gematria"}),U.jsxs("div",{children:["Total ",((ft=h.gematria)==null?void 0:ft.total)??"—"]}),U.jsxs("div",{children:["Scheme ",((Pt=h.gematria)==null?void 0:Pt.scheme)??"—"]}),U.jsxs("div",{children:["Hash ",Ms((vt=h.gematria)==null?void 0:vt.output_hash)]})]}),U.jsxs("div",{className:"tanakh-analysis-item",children:[U.jsx("strong",{children:"Notarikon"}),U.jsx("div",{children:((V=h.notarikon)==null?void 0:V.result)??"—"}),U.jsxs("div",{children:["Mode ",((Zt=h.notarikon)==null?void 0:Zt.mode)??"—"]}),U.jsxs("div",{children:["Hash ",Ms((_t=h.notarikon)==null?void 0:_t.output_hash)]})]}),U.jsxs("div",{className:"tanakh-analysis-item",children:[U.jsx("strong",{children:"Temurah"}),U.jsx("div",{className:"analysis-result",children:((Ge=h.temurah)==null?void 0:Ge.result)??"—"}),U.jsxs("div",{children:["Mapping ",((tt=h.temurah)==null?void 0:tt.mapping)??"—"]}),U.jsxs("div",{children:["Hash ",Ms((At=h.temurah)==null?void 0:At.output_hash)]})]})]})]}),U.jsxs("section",{className:"tanakh-card tanakh-scene-card",children:[U.jsxs("header",{children:[U.jsx("h2",{children:"Merkavah scene"}),U.jsx("p",{children:"Derived visualization only. Node ids map back to citation spans in the JSON artifact."})]}),U.jsx(AR,{scene:u})]}),U.jsxs("section",{className:"tanakh-card tanakh-debug-card",children:[U.jsxs("header",{children:[U.jsx("h2",{children:"Provenance and debug"}),U.jsx("p",{children:"Static files are the audit surface; no UI-only truth."})]}),U.jsxs("dl",{className:"metric-list",children:[U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:"Validation"}),U.jsx("dd",{children:f.comparison_status??"—"})]}),U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:"Validation hash"}),U.jsx("dd",{children:Ms(f.report_hash)})]}),U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:"Source hash"}),U.jsx("dd",{children:Ms((qe=o.manifest)==null?void 0:qe.archive_sha256)})]}),U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:"Build"}),U.jsx("dd",{children:((F=o.manifest)==null?void 0:F.build)??"—"})]})]}),U.jsx("pre",{className:"debug-json",children:JSON.stringify({artifacts:r==null?void 0:r.artifacts,validation:f.cases},null,2)})]})]})]})}const Iv=["overview","graph","basin","geometry","tanakh","measurements"],_u="Semantic Map",yu="hulls",dh="flat",bo=12,CR=["overview","measurements","basin"],q_=["overview","measurements","basin","graph","geometry","tanakh","transcript","runtimeStatus","runtimeModel"],PR={graph:null,basin:null,overview:null,measurements:null,geometry:null,tanakh:null,transcript:null,runtimeStatus:null,runtimeModel:null,liveEnabled:!1,staleBuildWarning:null},of={overview:{label:"Overview",detail:"Index summary and artifact counts",status:"idle",source:"none"},measurements:{label:"Measurements",detail:"Measurement ledger and attribution counts",status:"idle",source:"none"},basin:{label:"Basin",detail:"Trajectory summary and attractor metadata",status:"idle",source:"none"},graph:{label:"Graph",detail:"Large semantic graph bundle",status:"idle",source:"none"},geometry:{label:"Geometry",detail:"Large diagnostics bundle",status:"idle",source:"none"},tanakh:{label:"Tanakh",detail:"Canonical text, derived analyzers, and merkavah scene sidecars",status:"idle",source:"none"},transcript:{label:"Transcript",detail:"Turn history and active-set cross-links",status:"idle",source:"none"},runtimeStatus:{label:"Runtime status",detail:"Live backend status",status:"idle",source:"none"},runtimeModel:{label:"Runtime model",detail:"Live model metadata",status:"idle",source:"none"}};function LR(r){return r==="overview"?"Overview":r==="graph"?"Graph":r==="basin"?"Basin":r==="geometry"?"Geometry":r==="tanakh"?"Tanakh":"Measurements"}async function xi(r){const e=await fetch(r,{credentials:"same-origin"});if(!e.ok)throw new Error(`${e.status} ${e.statusText} for ${r}`);return await e.json()}function DR(r,e,t){var a,o,u;if(!t||!((a=e==null?void 0:e.turns)!=null&&a.length))return((u=(o=r==null?void 0:r.active_set_slices)==null?void 0:o.at(-1))==null?void 0:u.node_ids)??[];const n=e.turns.find(c=>c.turn_id===t);return(n==null?void 0:n.active_set_node_ids)??[]}function NR({bootstrap:r,graph:e,surface:t}){const n=r.experiment_id??"unknown",a=r.export_manifest_id??(e==null?void 0:e.export_manifest_id)??r.source_graph_hash??(e==null?void 0:e.source_graph_hash)??"live";return`eden.observatory.view_presets.v1::${n}::${t}::${a}`}function ma(r){return`badge badge-${r}`}function In({items:r}){return U.jsx("dl",{className:"metric-list",children:r.map(([e,t])=>U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:e}),U.jsx("dd",{children:IR(t)})]},e))})}function IR(r){return r==null||r===""?"—":Array.isArray(r)?r.join(", "):typeof r=="object"?JSON.stringify(r):String(r)}function xu(r,e=bo){return{items:r.slice(0,e),capped:r.length>e,total:r.length}}function Pu(r,e=560){const t=String(r??"").trim();return t?t.length>e?`${t.slice(0,e-1).trimEnd()}…`:t:""}function UR(r,e=6){const t=String(r??"").replace(/\r/g,`
`).trim();if(!t)return[];const n=t.split(/\n+/).map(o=>o.trim()).filter(Boolean);return(n.length?n:t.split(new RegExp("(?<=[.!?])\\s+")).map(o=>o.trim()).filter(Boolean)).slice(0,e).map((o,u)=>`${u+1}. ${Pu(o,120)}`)}function va(r){return String((r==null?void 0:r.label)??(r==null?void 0:r.id)??"unknown node")}function Su(r,e){const t=va(e.get(r==null?void 0:r.source)??{id:r==null?void 0:r.source}),n=va(e.get(r==null?void 0:r.target)??{id:r==null?void 0:r.target});return`${String((r==null?void 0:r.type)??"EDGE")}: ${t} -> ${n}`}function FR(r,e){const t=structuredClone(of);for(const n of q_)r[n]&&(t[n].source=e?"live_api":"static_export",t[n].status=CR.includes(n)?"loading":n==="geometry"||n==="tanakh"?"deferred":"idle");return t}function kR(r){return`payload-chip payload-${r}`}function Uv(r){return r==="live_api"?"live API":r==="static_export"?"static export":"unavailable"}function rn({title:r,children:e}){return U.jsxs("section",{className:"inspector-card",children:[U.jsx("h3",{children:r}),e]})}function OR({bootstrap:r}){var He,at;const e=Iv.includes(r.initial_surface??"overview")?r.initial_surface:"overview",[t,n]=Je.useState(e),[a,o]=Je.useState(_u),[u,c]=Je.useState(yu),[h,f]=Je.useState(dh),[m,g]=Je.useState("cards"),[v,x]=Je.useState("reasoning"),[E,M]=Je.useState([]),[S,y]=Je.useState(null),[N,L]=Je.useState(null),[w,P]=Je.useState(null),[I,D]=Je.useState(null),[O,R]=Je.useState(!0),[A,z]=Je.useState(null),[k,Y]=Je.useState(PR),[se,pe]=Je.useState(null),[ee,de]=Je.useState(of),[W,me]=Je.useState(!1),ae=Je.useMemo(()=>NR({bootstrap:r,graph:k.graph,surface:t}),[r,k.graph,t]),G=E[0]??null,re=Je.useMemo(()=>{var H,ge;return new Map([...((H=k.graph)==null?void 0:H.semantic_nodes)??[],...((ge=k.graph)==null?void 0:ge.runtime_nodes)??[]].map(xe=>[String(xe.id),xe]))},[k.graph]),Ie=Je.useMemo(()=>{var H,ge,xe;return(ge=(H=k.graph)==null?void 0:H.semantic_nodes)!=null&&ge.length?k.graph.semantic_nodes:((xe=k.graph)==null?void 0:xe.runtime_nodes)??[]},[k.graph]),te=Je.useMemo(()=>{var H,ge,xe;return(ge=(H=k.graph)==null?void 0:H.semantic_edges)!=null&&ge.length?k.graph.semantic_edges:((xe=k.graph)==null?void 0:xe.runtime_edges)??[]},[k.graph]),Z=Je.useMemo(()=>te.find(H=>H.id===S)??null,[te,S]),ve=Je.useMemo(()=>{var H,ge;return((ge=(H=k.graph)==null?void 0:H.assemblies)==null?void 0:ge.find(xe=>xe.id===N))??null},[k.graph,N]),Ee=Je.useMemo(()=>{var ge,xe,we;return[...((ge=k.graph)==null?void 0:ge.semantic_nodes)??[],...((xe=k.graph)==null?void 0:xe.runtime_nodes)??[],...((we=k.graph)==null?void 0:we.assemblies)??[]].find(he=>he.id===G)??null},[k.graph,G]),fe=Je.useMemo(()=>{var ge,xe,we,he;const H=(xe=(ge=k.basin)==null?void 0:ge.turns)==null?void 0:xe.find(X=>X.turn_id===w);return H||(((he=(we=k.transcript)==null?void 0:we.turns)==null?void 0:he[0])??null)},[k.basin,k.transcript,w]),Ye=Je.useMemo(()=>DR(k.graph,k.transcript,(fe==null?void 0:fe.turn_id)??null),[k.graph,k.transcript,fe]),Fe=Z?re.get(String(Z.source))??null:null,ft=Z?re.get(String(Z.target))??null:null,Pt=Je.useMemo(()=>xu(Ie),[Ie]),vt=Je.useMemo(()=>xu(te),[te]),V=Je.useMemo(()=>{var H;return xu(((H=k.basin)==null?void 0:H.turns)??[])},[k.basin]),Zt=Je.useMemo(()=>{var H;return xu(((H=k.graph)==null?void 0:H.assemblies)??[])},[k.graph]),_t=Je.useMemo(()=>{var ge;const H=((ge=k.transcript)==null?void 0:ge.turns)??[];return H.length?H[H.length-1]:null},[k.transcript]),Ge=((He=k.overview)==null?void 0:He.hum)??((at=k.transcript)==null?void 0:at.hum)??null;Je.useEffect(()=>{let H=_u,ge=yu,xe=dh;try{const we=window.localStorage.getItem(ae);if(we){const he=JSON.parse(we);H=he.graphMode??_u,ge=he.assemblyRenderMode??yu,xe=he.liftMode??dh}}catch{}o(H),c(ge),f(xe),D(ae)},[ae]),Je.useEffect(()=>{if(I!==ae)return;const H=JSON.stringify({graphMode:a,assemblyRenderMode:u,liftMode:h});window.localStorage.setItem(ae,H)},[u,a,h,I,ae]),Je.useEffect(()=>{let H=!1;async function ge(){var xe,we,he,X,De,ue,_e,ke,Ne,lt,Mt,Ft,pt,Qt,$t,Wn,ii,jn;R(!0),z(null),de(of);try{const On=(xe=r.live_api)==null?void 0:xe.status;let Xn=!1,Ti=null;if(On)try{const Ut=await xi(On);Xn=!0,(he=(we=Ut.status)==null?void 0:we.frontend_build)!=null&&he.warning&&(Ti=Ut.status.frontend_build.reason??"stale frontend build")}catch{Xn=!1}const bi=Xn?{graph:(X=r.live_api)==null?void 0:X.graph,basin:(De=r.live_api)==null?void 0:De.basin,overview:(ue=r.live_api)==null?void 0:ue.overview,measurements:(_e=r.live_api)==null?void 0:_e.measurements,geometry:(ke=r.live_api)==null?void 0:ke.geometry,tanakh:(Ne=r.live_api)==null?void 0:Ne.tanakh,transcript:(lt=r.live_api)==null?void 0:lt.session_turns,runtimeStatus:(Mt=r.live_api)==null?void 0:Mt.runtime_status,runtimeModel:(Ft=r.live_api)==null?void 0:Ft.runtime_model}:{graph:(pt=r.payload_urls)==null?void 0:pt.graph,basin:(Qt=r.payload_urls)==null?void 0:Qt.basin,overview:($t=r.payload_urls)==null?void 0:$t.overview,measurements:(Wn=r.payload_urls)==null?void 0:Wn.measurements,geometry:(ii=r.payload_urls)==null?void 0:ii.geometry,tanakh:(jn=r.payload_urls)==null?void 0:jn.tanakh,transcript:void 0,runtimeStatus:void 0,runtimeModel:void 0},an={...bi,liveEnabled:Xn,staleBuildWarning:Ti};H||(pe(an),de(FR(bi,Xn)),Y(Ut=>({...Ut,liveEnabled:Xn,staleBuildWarning:Ti})));const $n=async(Ut,Wt,Ai)=>{if(H)return null;de(pn=>({...pn,[Ut]:{...pn[Ut],status:"loading",error:void 0}}));try{const pn=await xi(Wt);return H?null:(Je.startTransition(()=>{Ai(pn)}),de(Zi=>({...Zi,[Ut]:{...Zi[Ut],status:"ready"}})),pn)}catch(pn){if(H)return null;const Zi=pn instanceof Error?pn.message:`Failed to load ${Ut}.`;throw de(is=>({...is,[Ut]:{...is[Ut],status:"error",error:Zi}})),pn}},Ki=[];an.overview&&Ki.push($n("overview",an.overview,Ut=>Y(Wt=>({...Wt,overview:Ut})))),an.measurements&&Ki.push($n("measurements",an.measurements,Ut=>Y(Wt=>({...Wt,measurements:Ut})))),an.basin&&Ki.push($n("basin",an.basin,Ut=>{var Ai;const Wt=Ut;Y(pn=>({...pn,basin:Wt})),!w&&((Ai=Wt.turns)!=null&&Ai.length)&&P(Wt.turns[0].turn_id)})),await Promise.allSettled(Ki),H||R(!1);const Tn=[];an.graph&&Tn.push($n("graph",an.graph,Ut=>{var Ai;const Wt=Ut;Y(pn=>({...pn,graph:Wt})),!N&&((Ai=Wt.assemblies)!=null&&Ai.length)&&L(Wt.assemblies[0].id)})),an.transcript&&Tn.push($n("transcript",an.transcript,Ut=>Y(Wt=>({...Wt,transcript:Ut})))),an.runtimeStatus&&Tn.push($n("runtimeStatus",an.runtimeStatus,Ut=>Y(Wt=>({...Wt,runtimeStatus:Ut})))),an.runtimeModel&&Tn.push($n("runtimeModel",an.runtimeModel,Ut=>Y(Wt=>({...Wt,runtimeModel:Ut})))),Promise.allSettled(Tn)}catch(On){H||(z(On instanceof Error?On.message:"Failed to load observatory payloads."),R(!1))}}return ge(),()=>{H=!0}},[r]),Je.useEffect(()=>{var xe;if(!k.liveEnabled||!((xe=r.live_api)!=null&&xe.events))return;const H=new URL(r.live_api.events,window.location.href);r.session_id&&H.searchParams.set("session_id",r.session_id);const ge=new EventSource(H.toString());return ge.addEventListener("observatory.invalidate",()=>{Je.startTransition(()=>{Y(we=>({...we}))})}),ge.addEventListener("observatory.invalidate",async()=>{var we,he,X,De,ue,_e,ke,Ne;try{const[lt,Mt,Ft,pt,Qt,$t,Wn,ii]=await Promise.all([(we=r.live_api)!=null&&we.graph?xi(r.live_api.graph):Promise.resolve(null),(he=r.live_api)!=null&&he.basin?xi(r.live_api.basin):Promise.resolve(null),(X=r.live_api)!=null&&X.overview?xi(r.live_api.overview):Promise.resolve(null),(De=r.live_api)!=null&&De.measurements?xi(r.live_api.measurements):Promise.resolve(null),(ue=r.live_api)!=null&&ue.session_turns?xi(r.live_api.session_turns):Promise.resolve(null),(_e=r.live_api)!=null&&_e.runtime_status?xi(r.live_api.runtime_status):Promise.resolve(null),(ke=r.live_api)!=null&&ke.runtime_model?xi(r.live_api.runtime_model):Promise.resolve(null),(Ne=r.live_api)!=null&&Ne.tanakh?xi(r.live_api.tanakh):Promise.resolve(null)]);Y(jn=>({...jn,graph:lt,basin:Mt,overview:Ft,measurements:pt,transcript:Qt,runtimeStatus:$t,runtimeModel:Wn,tanakh:ii}))}catch{}}),()=>{ge.close()}},[r.live_api,r.session_id,k.liveEnabled]),Je.useEffect(()=>{if(t!=="geometry"||k.geometry||!(se!=null&&se.geometry))return;let H=!1;const ge=se.geometry;return de(xe=>({...xe,geometry:{...xe.geometry,status:"loading",source:se.liveEnabled?"live_api":"static_export",error:void 0}})),xi(ge).then(xe=>{H||(Y(we=>({...we,geometry:xe})),de(we=>({...we,geometry:{...we.geometry,status:"ready"}})))}).catch(xe=>{if(H)return;const we=xe instanceof Error?xe.message:"Failed to load geometry payload.";de(he=>({...he,geometry:{...he.geometry,status:"error",error:we}}))}),()=>{H=!0}},[k.geometry,se,t]),Je.useEffect(()=>{if(t!=="tanakh"||k.tanakh||!(se!=null&&se.tanakh))return;let H=!1;const ge=se.tanakh;return de(xe=>({...xe,tanakh:{...xe.tanakh,status:"loading",source:se.liveEnabled?"live_api":"static_export",error:void 0}})),xi(ge).then(xe=>{H||(Y(we=>({...we,tanakh:xe})),de(we=>({...we,tanakh:{...we.tanakh,status:"ready"}})))}).catch(xe=>{if(H)return;const we=xe instanceof Error?xe.message:"Failed to load Tanakh payload.";de(he=>({...he,tanakh:{...he.tanakh,status:"error",error:we}}))}),()=>{H=!0}},[k.tanakh,se,t]);function tt(H,ge){if(y(null),!H){M([]);return}M(xe=>ge?xe.includes(H)?xe.filter(we=>we!==H):[...xe,H]:[H])}function At(H){L(H),y(null),M([])}function qe(H){y(H),M([])}function F(H){P(H),L(null),y(null),M([])}function b(H){M([H]),y(null)}async function ne(H){var ge;if((ge=r.live_api)!=null&&ge.tanakh_run){me(!0),de(xe=>({...xe,tanakh:{...xe.tanakh,status:"loading",source:"live_api",error:void 0}}));try{const xe=await fetch(r.live_api.tanakh_run,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_id:r.session_id,ref:H.ref,params:H.params})});if(!xe.ok)throw new Error(`${xe.status} ${xe.statusText} for ${r.live_api.tanakh_run}`);const we=await xe.json();Y(he=>({...he,tanakh:we})),de(he=>({...he,tanakh:{...he.tanakh,status:"ready",source:"live_api"}}))}catch(xe){const we=xe instanceof Error?xe.message:"Failed to run Tanakh surface.";de(he=>({...he,tanakh:{...he.tanakh,status:"error",source:"live_api",error:we}}))}finally{me(!1)}}}function Se(){var xe,we,he,X,De,ue,_e,ke,Ne,lt,Mt,Ft,pt,Qt,$t,Wn;const H=((xe=k.overview)==null?void 0:xe.graph_counts)??((we=k.graph)==null?void 0:we.counts)??{},ge=((he=k.measurements)==null?void 0:he.counts)??{};return U.jsxs("div",{className:"overview-grid",children:[U.jsx(rn,{title:"Identity",children:U.jsx(In,{items:[["Experiment",r.experiment_id],["Session",r.session_id],["Mode",k.liveEnabled?"Live API":"Static export"],["Render","Layout/render != evidence"]]})}),U.jsx(rn,{title:"Graph",children:U.jsx(In,{items:[["Payload",ee.graph.status],["Source",Uv(ee.graph.source)],["Assemblies",(De=(X=k.graph)==null?void 0:X.assemblies)==null?void 0:De.length],["Clusters",(_e=(ue=k.graph)==null?void 0:ue.cluster_summaries)==null?void 0:_e.length],...Object.entries(H)]})}),U.jsx(rn,{title:"Basin",children:U.jsx(In,{items:[["Payload",ee.basin.status],["Projection",((ke=k.basin)==null?void 0:ke.projection_method)??r.projection_method],["Filtered turns",(Ne=k.basin)==null?void 0:Ne.filtered_turn_count],["Source turns",(lt=k.basin)==null?void 0:lt.source_turn_count],["Derived","SVD projection + lift mode"]]})}),U.jsx(rn,{title:"Measurements",children:U.jsx(In,{items:[["Payload",ee.measurements.status],...Object.entries(ge)]})}),U.jsx(rn,{title:"Tanakh",children:U.jsx(In,{items:[["Payload",ee.tanakh.status],["Ref",((Mt=k.tanakh)==null?void 0:Mt.current_ref)??((pt=(Ft=k.overview)==null?void 0:Ft.tanakh)==null?void 0:pt.current_ref)],["Bundle",((Qt=k.tanakh)==null?void 0:Qt.bundle_hash)??((Wn=($t=k.overview)==null?void 0:$t.tanakh)==null?void 0:Wn.bundle_hash)],["Mode",k.liveEnabled?"Live/API + static sidecars":"Static sidecars"]]})}),U.jsx(rn,{title:"Hum",children:U.jsx(In,{items:[["Present",Ge!=null&&Ge.present?"yes":"no"],["Generated",Ge==null?void 0:Ge.generated_at],["Window",Ge==null?void 0:Ge.turn_window_size],["Recurrence",Ge!=null&&Ge.cross_turn_recurrence_present?"yes":"seed-state / no"]]})})]})}function Me(){const H=q_.filter(we=>ee[we].source!=="none").map(we=>[we,ee[we]]);if(!H.length)return null;const ge=H.filter(([,we])=>we.status==="loading").length,xe=H.filter(([,we])=>we.status==="deferred").length;return U.jsxs("section",{className:"status-panel",children:[U.jsxs("div",{className:"status-panel-copy",children:[U.jsx("strong",{children:O?"Loading observatory payloads":ge?"Background payload activity":"Payload status"}),U.jsx("span",{children:k.liveEnabled?"Live mode prefers API payloads and refresh invalidations.":"Static export mode reads adjacent JSON artifacts; large graph and geometry bundles can take noticeable time."}),U.jsx("span",{children:ge?`${ge} payload${ge===1?"":"s"} still loading.`:xe?`${xe} payload${xe===1?"":"s"} deferred until needed.`:"All requested payloads are ready."})]}),U.jsx("div",{className:"payload-grid",children:H.map(([we,he])=>U.jsxs("div",{className:"payload-card",children:[U.jsxs("div",{className:"payload-card-header",children:[U.jsx("strong",{children:he.label}),U.jsx("span",{className:kR(he.status),children:he.status})]}),U.jsx("p",{children:he.detail}),U.jsx("small",{children:Uv(he.source)}),he.error?U.jsx("small",{className:"payload-error",children:he.error}):null]},we))})]})}function ye(){var xe,we;const H=((xe=k.graph)==null?void 0:xe.graph_modes)??[_u],ge=((we=k.graph)==null?void 0:we.assembly_render_modes)??[yu];return U.jsxs("div",{className:"toolbar",children:[U.jsx("div",{"aria-label":"Graph mode",className:"toolbar-group",role:"radiogroup",children:H.map(he=>U.jsx("button",{"aria-checked":he===a,className:he===a?"toolbar-button is-active":"toolbar-button",onClick:()=>o(he),role:"radio",type:"button",children:he},he))}),U.jsx("div",{"aria-label":"Assembly render mode",className:"toolbar-group",role:"radiogroup",children:ge.map(he=>U.jsx("button",{"aria-checked":he===u,className:he===u?"toolbar-button is-active":"toolbar-button",onClick:()=>c(he),role:"radio",type:"button",children:he},he))})]})}function Xe(){var H;return U.jsxs("div",{className:"toolbar",children:[U.jsx("div",{"aria-label":"Basin lift mode",className:"toolbar-group",role:"radiogroup",children:["flat","time_lift","density_lift","session_offset"].map(ge=>U.jsx("button",{"aria-checked":ge===h,className:ge===h?"toolbar-button is-active":"toolbar-button",onClick:()=>f(ge),role:"radio",type:"button",children:ge},ge))}),U.jsxs("div",{className:"toolbar-group toolbar-badges",children:[U.jsxs("span",{className:ma("derived"),children:["Projection: ",((H=k.basin)==null?void 0:H.projection_method)??r.projection_method??"unknown"]}),U.jsxs("span",{className:ma("derived"),children:["Lift: ",h]}),U.jsx("span",{className:ma("derived"),children:"Derived"})]})]})}function Oe(){const H=(_t==null?void 0:_t.reasoning_text)??"",ge=(Ge==null?void 0:Ge.text_surface)??"",xe=UR(v==="hum_live"?ge:H),we=v==="reasoning"?Pu(H,720):v==="hum_live"?Pu(ge,720):"";return U.jsxs("section",{className:"continuity-strip",children:[U.jsxs("article",{className:"continuity-card",children:[U.jsxs("header",{children:[U.jsx("p",{className:"eyebrow",children:"Hum"}),U.jsx("h2",{children:"Bounded continuity fact"})]}),U.jsxs("div",{className:"continuity-meta",children:[U.jsxs("span",{children:["present=",Ge!=null&&Ge.present?"yes":"no"]}),U.jsxs("span",{children:["generated=",(Ge==null?void 0:Ge.generated_at)??"n/a"]}),U.jsxs("span",{children:["window=",(Ge==null?void 0:Ge.turn_window_size)??0]}),U.jsxs("span",{children:["recurrence=",Ge!=null&&Ge.cross_turn_recurrence_present?"yes":"seed-state / no"]})]}),U.jsx("p",{className:"reasoning-copy",children:Ge!=null&&Ge.present?Pu(ge,360)||"Hum present but the bounded text surface is empty.":"No bounded hum artifact is present yet for this session."})]}),U.jsxs("article",{className:"continuity-card",children:[U.jsxs("header",{children:[U.jsx("p",{className:"eyebrow",children:"Reasoning"}),U.jsx("h2",{children:"Operator-visible reasoning lens"})]}),U.jsx("div",{className:"toolbar",children:U.jsx("div",{"aria-label":"Reasoning lens",className:"toolbar-group",role:"radiogroup",children:[["reasoning","Reasoning"],["chain_like","Chain-Like"],["hum_live","Hum Live"]].map(([he,X])=>U.jsx("button",{"aria-checked":he===v,className:he===v?"toolbar-button is-active":"toolbar-button",onClick:()=>x(he),role:"radio",type:"button",children:X},he))})}),U.jsx("p",{className:"continuity-note",children:v==="hum_live"?"Hum-live mode reformats the bounded hum artifact as chain-like continuity beats. It is not hidden chain-of-thought.":"This lens only renders operator-visible reasoning artifacts. Hidden chain-of-thought remains out of scope."}),v==="chain_like"||v==="hum_live"?xe.length?U.jsx("ol",{className:"reasoning-steps",children:xe.map(he=>U.jsx("li",{children:he},he))}):U.jsx("p",{className:"reasoning-copy",children:v==="hum_live"?"Hum-live steps appear after the bounded hum artifact has been generated.":"No operator-visible reasoning artifact is loaded yet from the live session transcript."}):U.jsx("p",{className:"reasoning-copy",children:we||"No operator-visible reasoning artifact is loaded yet from the live session transcript."})]})]})}function st(){var Ne,lt,Mt,Ft;const H=Z??Ee??ve??fe??k.overview??{},ge=(Z==null?void 0:Z.measurement_history)??(Ee==null?void 0:Ee.measurement_history)??(ve==null?void 0:ve.measurement_history)??[],xe=(Z==null?void 0:Z.operator_label)??((Ne=Z==null?void 0:Z.provenance)==null?void 0:Ne.assertion_origin)??(Ee==null?void 0:Ee.provenance)??(ve==null?void 0:ve.operator_label)??(fe==null?void 0:fe.profile_name)??"",we=Z?Su(Z,re):(H==null?void 0:H.label)??(H==null?void 0:H.display_attractor_label)??(H==null?void 0:H.display_label),he=(H==null?void 0:H.kind)??(Z?"edge":ve?"memode":fe?"turn":"overview"),X=Z?`${(Fe==null?void 0:Fe.domain)??"unknown"} -> ${(ft==null?void 0:ft.domain)??"unknown"}`:(H==null?void 0:H.domain)??(H==null?void 0:H.dominant_domain),De=(Z==null?void 0:Z.assertion_origin)??((lt=Z==null?void 0:Z.provenance)==null?void 0:lt.assertion_origin)??(H==null?void 0:H.source_kind)??"observatory",ue=Z?`${(Fe==null?void 0:Fe.cluster_label)??(Fe==null?void 0:Fe.cluster_signature)??"unknown"} -> ${(ft==null?void 0:ft.cluster_label)??(ft==null?void 0:ft.cluster_signature)??"unknown"}`:(H==null?void 0:H.cluster_label)??(H==null?void 0:H.display_label)??(fe==null?void 0:fe.display_attractor_label),_e=Z?[["Source",va(Fe??{id:Z==null?void 0:Z.source})],["Target",va(ft??{id:Z==null?void 0:Z.target})],["Relation type",Z==null?void 0:Z.type]]:Ee?[["Connected relations",te.filter(pt=>pt.source===Ee.id||pt.target===Ee.id).slice(0,4).map(pt=>Su(pt,re))],["Current turn",fe==null?void 0:fe.turn_id],["Attractor",fe==null?void 0:fe.display_attractor_label]]:[["Active set nodes",fe==null?void 0:fe.active_set_node_ids],["Transition",fe==null?void 0:fe.transition_kind],["Attractor",fe==null?void 0:fe.display_attractor_label]],ke=Z?[["Source presence",Fe==null?void 0:Fe.recent_active_set_presence],["Target presence",ft==null?void 0:ft.recent_active_set_presence],["Highlighted nodes",Ye.length]]:ve?[["Members in active set",(ve.member_meme_ids??[]).filter(pt=>Ye.includes(pt))],["Highlighted nodes",Ye.length],["Selected turn",fe==null?void 0:fe.turn_id]]:[["Recent presence",(H==null?void 0:H.recent_active_set_presence)??((Mt=fe==null?void 0:fe.active_set_summary)==null?void 0:Mt.size)],["Selected turn",fe==null?void 0:fe.turn_id],["Highlighted nodes",Ye.length]];return U.jsxs("aside",{className:"inspector",children:[U.jsxs("div",{"aria-label":"Inspector view",className:"inspector-tabs",role:"tablist",children:[U.jsx("button",{"aria-controls":"observatory-inspector-panel","aria-selected":m==="cards",className:m==="cards"?"toolbar-button is-active":"toolbar-button",id:"observatory-inspector-tab-cards",onClick:()=>g("cards"),role:"tab",type:"button",children:"Cards"}),U.jsx("button",{"aria-controls":"observatory-inspector-panel","aria-selected":m==="json",className:m==="json"?"toolbar-button is-active":"toolbar-button",id:"observatory-inspector-tab-json",onClick:()=>g("json"),role:"tab",type:"button",children:"Raw JSON"})]}),U.jsx("div",{"aria-labelledby":m==="json"?"observatory-inspector-tab-json":"observatory-inspector-tab-cards",id:"observatory-inspector-panel",role:"tabpanel",children:m==="json"?U.jsx("pre",{className:"debug-json",children:JSON.stringify(H,null,2)}):U.jsxs("div",{className:"inspector-cards",children:[U.jsx(rn,{title:"Identity",children:U.jsx(In,{items:[["ID",(H==null?void 0:H.id)??(H==null?void 0:H.turn_id)??(H==null?void 0:H.cluster_signature)],["Label",we],["Created",H==null?void 0:H.created_at]]})}),U.jsx(rn,{title:"Ontology",children:U.jsx(In,{items:[["Kind",he],["Domain",X],["Source",De]]})}),U.jsx(rn,{title:"Summary/Invariance",children:U.jsx(In,{items:[["Summary",(H==null?void 0:H.summary)??(H==null?void 0:H.manual_summary)??(H==null?void 0:H.dominant_label)],["Invariance",ve==null?void 0:ve.invariance_summary],["Recent turns",fe==null?void 0:fe.active_set_labels]]})}),U.jsx(rn,{title:"Provenance",children:U.jsx(In,{items:[["Operator/Source",xe],["Evidence label",(H==null?void 0:H.evidence_label)??(ve==null?void 0:ve.evidence_label)??(Z==null?void 0:Z.evidence_label)],["Confidence",(H==null?void 0:H.confidence)??(ve==null?void 0:ve.confidence)??(Z==null?void 0:Z.confidence)]]})}),U.jsx(rn,{title:"Cluster Membership",children:U.jsx(In,{items:[["Cluster",Z?`${(Fe==null?void 0:Fe.cluster_signature)??"unknown"} -> ${(ft==null?void 0:ft.cluster_signature)??"unknown"}`:(H==null?void 0:H.cluster_signature)??(fe==null?void 0:fe.dominant_cluster_signature)],["Display label",ue],["Domain mix",H==null?void 0:H.domain_mix]]})}),U.jsx(rn,{title:"Memode Membership",children:U.jsx(In,{items:[["Assemblies",Z?[...(Fe==null?void 0:Fe.memode_membership)??[],...(ft==null?void 0:ft.memode_membership)??[]]:(H==null?void 0:H.memode_membership)??(ve==null?void 0:ve.member_meme_ids)],["Supporting edges",ve==null?void 0:ve.supporting_edge_ids],["Member order",ve==null?void 0:ve.member_order]]})}),U.jsx(rn,{title:"Supporting Relations",children:U.jsx(In,{items:_e})}),U.jsx(rn,{title:"Active Set Presence",children:U.jsx(In,{items:ke})}),U.jsx(rn,{title:"Measurement History",children:U.jsx(In,{items:[["Count",ge.length],["Recent event",(Ft=ge[0])==null?void 0:Ft.action_type],["Preview delta","Use preview/commit API; view-only presets stay out of evidence."]]})})]})})]})}function rt(){var H,ge,xe,we;return U.jsxs("aside",{className:"sidebar",children:[U.jsx(rn,{title:"Assemblies",children:k.graph?U.jsxs(U.Fragment,{children:[Zt.capped?U.jsxs("p",{className:"placeholder-copy",children:["Showing first ",bo," of ",Zt.total," assemblies. This browser list is capped and not exhaustive."]}):null,U.jsx("div",{className:"chip-list",children:Zt.items.map(he=>U.jsx("button",{"aria-label":`Assembly ${he.label}`,className:he.id===N?"chip is-active":"chip","data-state":he.id===N?"active":"inactive",onClick:()=>At(he.id),type:"button",children:he.label},he.id))})]}):U.jsxs("p",{className:"placeholder-copy",children:["Graph payload ",ee.graph.status,". Assemblies appear after the semantic graph bundle arrives."]})}),U.jsx(rn,{title:"Graph Entities",children:k.graph?U.jsxs(U.Fragment,{children:[Pt.capped?U.jsxs("p",{className:"placeholder-copy",children:["Showing first ",bo," of ",Pt.total," graph entities. This browser list is capped and not exhaustive."]}):null,U.jsx("div",{className:"chip-list",children:Pt.items.map(he=>U.jsx("button",{"aria-label":`Graph entity ${va(he)}`,className:he.id===G?"chip is-active":"chip","data-state":he.id===G?"active":"inactive",onClick:()=>b(he.id),type:"button",children:va(he)},he.id))})]}):U.jsxs("p",{className:"placeholder-copy",children:["Graph payload ",ee.graph.status,". Text selection becomes available once the graph bundle is ready."]})}),U.jsx(rn,{title:"Relations",children:k.graph?U.jsxs(U.Fragment,{children:[vt.capped?U.jsxs("p",{className:"placeholder-copy",children:["Showing first ",bo," of ",vt.total," relations. This browser list is capped and not exhaustive."]}):null,U.jsx("div",{className:"transcript-list",children:vt.items.map(he=>U.jsxs("button",{"aria-label":`Graph relation ${Su(he,re)}`,className:he.id===S?"transcript-turn is-active":"transcript-turn","data-state":he.id===S?"active":"inactive",onClick:()=>qe(he.id),type:"button",children:[U.jsx("span",{children:he.type}),U.jsx("span",{children:Su(he,re)})]},he.id))})]}):U.jsx("p",{className:"placeholder-copy",children:"Relations stay unavailable until the graph payload is ready."})}),U.jsx(rn,{title:"Semantic Clusters",children:k.graph?U.jsx("div",{className:"chip-list",children:(((H=k.graph)==null?void 0:H.cluster_summaries)??[]).slice(0,12).map(he=>U.jsxs("div",{className:"cluster-pill",children:[U.jsx("strong",{children:he.display_label}),U.jsxs("span",{children:[he.member_meme_ids.length," memes"]})]},he.cluster_signature))}):U.jsx("p",{className:"placeholder-copy",children:"Cluster summaries depend on the graph payload and are loaded separately from the overview."})}),U.jsx(rn,{title:"Basin Turns",children:(xe=(ge=k.basin)==null?void 0:ge.turns)!=null&&xe.length?U.jsxs(U.Fragment,{children:[V.capped?U.jsxs("p",{className:"placeholder-copy",children:["Showing first ",bo," of ",V.total," basin turns. This browser list is capped and not exhaustive."]}):null,U.jsx("div",{className:"transcript-list",children:V.items.map(he=>U.jsxs("button",{"aria-label":`Basin turn T${he.turn_index??"?"} ${he.turn_id} ${he.display_attractor_label??he.dominant_label??he.turn_id}`,className:he.turn_id===(fe==null?void 0:fe.turn_id)?"transcript-turn is-active":"transcript-turn","data-state":he.turn_id===(fe==null?void 0:fe.turn_id)?"active":"inactive",onClick:()=>F(he.turn_id),type:"button",children:[U.jsxs("span",{children:["T",he.turn_index??"?"]}),U.jsx("span",{children:he.display_attractor_label??he.dominant_label??he.turn_id})]},he.turn_id))})]}):U.jsx("p",{className:"placeholder-copy",children:"Basin turns become selectable when filtered trajectory data is available."})}),U.jsx(rn,{title:"Transcript",children:k.transcript?U.jsx("div",{className:"transcript-list",children:(((we=k.transcript)==null?void 0:we.turns)??[]).slice(0,10).map(he=>U.jsxs("button",{"aria-label":`Transcript turn T${he.turn_index} ${he.turn_id}`,className:he.turn_id===(fe==null?void 0:fe.turn_id)?"transcript-turn is-active":"transcript-turn","data-state":he.turn_id===(fe==null?void 0:fe.turn_id)?"active":"inactive",onClick:()=>F(he.turn_id),type:"button",children:[U.jsxs("span",{children:["T",he.turn_index]}),U.jsx("span",{children:he.user_text})]},he.turn_id))}):U.jsx("p",{className:"placeholder-copy",children:k.liveEnabled?`Transcript payload ${ee.transcript.status}.`:"Transcript is only available from the live API in v1."})})]})}function Ae(){var H,ge,xe;return t==="overview"?Se():t==="graph"&&!k.graph?U.jsxs("div",{className:"empty-state",children:[U.jsx("h2",{children:"Graph payload not ready"}),U.jsxs("p",{children:["Current status: ",ee.graph.status,". This semantic bundle is large and loads separately from the overview."]})]}):t==="graph"&&k.graph?U.jsxs(U.Fragment,{children:[ye(),U.jsx(bR,{payload:k.graph,mode:a,currentTurnNodeIds:Ye,selectedNodeId:G,selectedAssembly:u==="hidden"?null:ve,onSelectNode:tt})]}):t==="basin"&&!k.basin?U.jsxs("div",{className:"empty-state",children:[U.jsx("h2",{children:"Basin payload not ready"}),U.jsxs("p",{children:["Current status: ",ee.basin.status,"."]})]}):t==="basin"&&k.basin?(k.basin.filtered_turn_count??0)<2?U.jsxs(U.Fragment,{children:[Xe(),U.jsxs("div",{className:"empty-state",children:[U.jsx("h2",{children:"Sparse basin data"}),U.jsx("p",{children:((H=k.basin.diagnostics)==null?void 0:H.reason)??"Not enough turns with non-empty active sets for basin playback."}),U.jsx(In,{items:[["Source turns",k.basin.source_turn_count],["Filtered turns",k.basin.filtered_turn_count],["Skipped turns",(ge=k.basin.diagnostics)==null?void 0:ge.skipped_turn_count]]})]})]}):U.jsxs(U.Fragment,{children:[Xe(),U.jsx($T,{payload:k.basin,currentTurnId:(fe==null?void 0:fe.turn_id)??null,liftMode:h,onSelectTurn:F})]}):t==="geometry"?k.geometry?U.jsx("pre",{className:"debug-json",children:JSON.stringify(k.geometry??{},null,2)}):U.jsxs("div",{className:"empty-state",children:[U.jsxs("h2",{children:["Geometry payload ",ee.geometry.status]}),U.jsx("p",{children:ee.geometry.status==="error"?"Geometry diagnostics are unavailable for this surface.":"The geometry bundle is intentionally deferred until you open this tab because it can be very large on seeded experiments."}),ee.geometry.error?U.jsx("p",{children:ee.geometry.error}):null]}):t==="tanakh"?k.tanakh?U.jsx(RR,{payload:k.tanakh,liveEnabled:k.liveEnabled,canRun:!!(k.liveEnabled&&((xe=r.live_api)!=null&&xe.tanakh_run)),running:W,onRun:ne}):U.jsxs("div",{className:"empty-state",children:[U.jsxs("h2",{children:["Tanakh payload ",ee.tanakh.status]}),U.jsx("p",{children:ee.tanakh.status==="error"?"Tanakh artifacts are unavailable for this surface.":"The Tanakh bundle is deferred until you open this tab because it includes canonical text plus derived sidecars."}),ee.tanakh.error?U.jsx("p",{children:ee.tanakh.error}):null]}):U.jsx("pre",{className:"debug-json",children:JSON.stringify(k.measurements??{},null,2)})}return U.jsxs("div",{className:"app-shell",children:[U.jsxs("header",{className:"app-header",children:[U.jsxs("div",{children:[U.jsx("p",{className:"eyebrow",children:"EDEN Observatory"}),U.jsx("h1",{children:"Live-first semantic graph and basin instrument"})]}),U.jsxs("div",{className:"header-badges",children:[U.jsx("span",{className:ma("observed"),children:k.liveEnabled?"Live API":"Static export"}),U.jsx("span",{className:ma("derived"),children:"Layout != evidence"}),k.staleBuildWarning?U.jsxs("span",{className:ma("warning"),children:["Build warning: ",k.staleBuildWarning]}):null]})]}),U.jsx("nav",{"aria-label":"Observatory surface",className:"surface-tabs",role:"tablist",children:Iv.map(H=>U.jsx("button",{"aria-controls":"observatory-surface-panel","aria-selected":H===t,className:H===t?"toolbar-button is-active":"toolbar-button",id:`observatory-surface-tab-${H}`,onClick:()=>n(H),role:"tab",type:"button",children:LR(H)},H))}),Me(),Oe(),A?U.jsx("div",{className:"status-banner status-error",children:A}):null,U.jsxs("main",{className:"layout",children:[rt(),U.jsx("section",{"aria-labelledby":`observatory-surface-tab-${t}`,className:"surface-panel",id:"observatory-surface-panel",role:"tabpanel",children:Ae()}),st()]})]})}O0.createRoot(document.getElementById("observatory-root")).render(U.jsx(L0.StrictMode,{children:U.jsx(OR,{bootstrap:window.__EDEN_BOOTSTRAP__??{}})}));
