(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function of(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var gd={exports:{}},ia={},vd={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function S0(){if(jm)return Mt;jm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(U,Y,Ae){this.props=U,this.context=Y,this.refs=w,this.updater=Ae||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function I(U,Y,Ae){this.props=U,this.context=Y,this.refs=w,this.updater=Ae||x}var L=I.prototype=new y;L.constructor=I,M(L,S.prototype),L.isPureReactComponent=!0;var T=Array.isArray,P=Object.prototype.hasOwnProperty,N={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function B(U,Y,Ae){var W,ge={},ye=null,_e=null;if(Y!=null)for(W in Y.ref!==void 0&&(_e=Y.ref),Y.key!==void 0&&(ye=""+Y.key),Y)P.call(Y,W)&&!D.hasOwnProperty(W)&&(ge[W]=Y[W]);var Pe=arguments.length-2;if(Pe===1)ge.children=Ae;else if(1<Pe){for(var Qe=Array(Pe),We=0;We<Pe;We++)Qe[We]=arguments[We+2];ge.children=Qe}if(U&&U.defaultProps)for(W in Pe=U.defaultProps,Pe)ge[W]===void 0&&(ge[W]=Pe[W]);return{$$typeof:r,type:U,key:ye,ref:_e,props:ge,_owner:N.current}}function C(U,Y){return{$$typeof:r,type:U.type,key:Y,ref:U.ref,props:U.props,_owner:U._owner}}function E(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function O(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return Y[Ae]})}var Z=/\/+/g;function te(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):Y.toString(36)}function oe(U,Y,Ae,W,ge){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(ye){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case r:case e:_e=!0}}if(_e)return _e=U,ge=ge(_e),U=W===""?"."+te(_e,0):W,T(ge)?(Ae="",U!=null&&(Ae=U.replace(Z,"$&/")+"/"),oe(ge,Y,Ae,"",function(We){return We})):ge!=null&&(E(ge)&&(ge=C(ge,Ae+(!ge.key||_e&&_e.key===ge.key?"":(""+ge.key).replace(Z,"$&/")+"/")+U)),Y.push(ge)),1;if(_e=0,W=W===""?".":W+":",T(U))for(var Pe=0;Pe<U.length;Pe++){ye=U[Pe];var Qe=W+te(ye,Pe);_e+=oe(ye,Y,Ae,Qe,ge)}else if(Qe=v(U),typeof Qe=="function")for(U=Qe.call(U),Pe=0;!(ye=U.next()).done;)ye=ye.value,Qe=W+te(ye,Pe++),_e+=oe(ye,Y,Ae,Qe,ge);else if(ye==="object")throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return _e}function he(U,Y,Ae){if(U==null)return U;var W=[],ge=0;return oe(U,W,"","",function(ye){return Y.call(Ae,ye,ge++)}),W}function de(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var me={current:null},G={transition:null},pe={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:G,ReactCurrentOwner:N};function le(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:he,forEach:function(U,Y,Ae){he(U,function(){Y.apply(this,arguments)},Ae)},count:function(U){var Y=0;return he(U,function(){Y++}),Y},toArray:function(U){return he(U,function(Y){return Y})||[]},only:function(U){if(!E(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Mt.Component=S,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=I,Mt.StrictMode=n,Mt.Suspense=h,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Mt.act=le,Mt.cloneElement=function(U,Y,Ae){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var W=M({},U.props),ge=U.key,ye=U.ref,_e=U._owner;if(Y!=null){if(Y.ref!==void 0&&(ye=Y.ref,_e=N.current),Y.key!==void 0&&(ge=""+Y.key),U.type&&U.type.defaultProps)var Pe=U.type.defaultProps;for(Qe in Y)P.call(Y,Qe)&&!D.hasOwnProperty(Qe)&&(W[Qe]=Y[Qe]===void 0&&Pe!==void 0?Pe[Qe]:Y[Qe])}var Qe=arguments.length-2;if(Qe===1)W.children=Ae;else if(1<Qe){Pe=Array(Qe);for(var We=0;We<Qe;We++)Pe[We]=arguments[We+2];W.children=Pe}return{$$typeof:r,type:U.type,key:ge,ref:ye,props:W,_owner:_e}},Mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},Mt.createElement=B,Mt.createFactory=function(U){var Y=B.bind(null,U);return Y.type=U,Y},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(U){return{$$typeof:c,render:U}},Mt.isValidElement=E,Mt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:de}},Mt.memo=function(U,Y){return{$$typeof:f,type:U,compare:Y===void 0?null:Y}},Mt.startTransition=function(U){var Y=G.transition;G.transition={};try{U()}finally{G.transition=Y}},Mt.unstable_act=le,Mt.useCallback=function(U,Y){return me.current.useCallback(U,Y)},Mt.useContext=function(U){return me.current.useContext(U)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(U){return me.current.useDeferredValue(U)},Mt.useEffect=function(U,Y){return me.current.useEffect(U,Y)},Mt.useId=function(){return me.current.useId()},Mt.useImperativeHandle=function(U,Y,Ae){return me.current.useImperativeHandle(U,Y,Ae)},Mt.useInsertionEffect=function(U,Y){return me.current.useInsertionEffect(U,Y)},Mt.useLayoutEffect=function(U,Y){return me.current.useLayoutEffect(U,Y)},Mt.useMemo=function(U,Y){return me.current.useMemo(U,Y)},Mt.useReducer=function(U,Y,Ae){return me.current.useReducer(U,Y,Ae)},Mt.useRef=function(U){return me.current.useRef(U)},Mt.useState=function(U){return me.current.useState(U)},Mt.useSyncExternalStore=function(U,Y,Ae){return me.current.useSyncExternalStore(U,Y,Ae)},Mt.useTransition=function(){return me.current.useTransition()},Mt.version="18.3.1",Mt}var $m;function af(){return $m||($m=1,vd.exports=S0()),vd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function E0(){if(Ym)return ia;Ym=1;var r=af(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,f){var m,g={},v=null,x=null;f!==void 0&&(v=""+f),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(x=h.ref);for(m in h)n.call(h,m)&&!a.hasOwnProperty(m)&&(g[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:o.current}}return ia.Fragment=t,ia.jsx=u,ia.jsxs=u,ia}var qm;function M0(){return qm||(qm=1,gd.exports=E0()),gd.exports}var ne=M0(),ht=af();const w0=of(ht);var kl={},_d={exports:{}},Xn={},yd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function T0(){return Km||(Km=1,(function(r){function e(G,pe){var le=G.length;G.push(pe);e:for(;0<le;){var U=le-1>>>1,Y=G[U];if(0<o(Y,pe))G[U]=pe,G[le]=Y,le=U;else break e}}function t(G){return G.length===0?null:G[0]}function n(G){if(G.length===0)return null;var pe=G[0],le=G.pop();if(le!==pe){G[0]=le;e:for(var U=0,Y=G.length,Ae=Y>>>1;U<Ae;){var W=2*(U+1)-1,ge=G[W],ye=W+1,_e=G[ye];if(0>o(ge,le))ye<Y&&0>o(_e,ge)?(G[U]=_e,G[ye]=le,U=ye):(G[U]=ge,G[W]=le,U=W);else if(ye<Y&&0>o(_e,le))G[U]=_e,G[ye]=le,U=ye;else break e}}return pe}function o(G,pe){var le=G.sortIndex-pe.sortIndex;return le!==0?le:G.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var h=[],f=[],m=1,g=null,v=3,x=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(G){for(var pe=t(f);pe!==null;){if(pe.callback===null)n(f);else if(pe.startTime<=G)n(f),pe.sortIndex=pe.expirationTime,e(h,pe);else break;pe=t(f)}}function T(G){if(w=!1,L(G),!M)if(t(h)!==null)M=!0,de(P);else{var pe=t(f);pe!==null&&me(T,pe.startTime-G)}}function P(G,pe){M=!1,w&&(w=!1,y(B),B=-1),x=!0;var le=v;try{for(L(pe),g=t(h);g!==null&&(!(g.expirationTime>pe)||G&&!O());){var U=g.callback;if(typeof U=="function"){g.callback=null,v=g.priorityLevel;var Y=U(g.expirationTime<=pe);pe=r.unstable_now(),typeof Y=="function"?g.callback=Y:g===t(h)&&n(h),L(pe)}else n(h);g=t(h)}if(g!==null)var Ae=!0;else{var W=t(f);W!==null&&me(T,W.startTime-pe),Ae=!1}return Ae}finally{g=null,v=le,x=!1}}var N=!1,D=null,B=-1,C=5,E=-1;function O(){return!(r.unstable_now()-E<C)}function Z(){if(D!==null){var G=r.unstable_now();E=G;var pe=!0;try{pe=D(!0,G)}finally{pe?te():(N=!1,D=null)}}else N=!1}var te;if(typeof I=="function")te=function(){I(Z)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,he=oe.port2;oe.port1.onmessage=Z,te=function(){he.postMessage(null)}}else te=function(){S(Z,0)};function de(G){D=G,N||(N=!0,te())}function me(G,pe){B=S(function(){G(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_continueExecution=function(){M||x||(M=!0,de(P))},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(G){switch(v){case 1:case 2:case 3:var pe=3;break;default:pe=v}var le=v;v=pe;try{return G()}finally{v=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(G,pe){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var le=v;v=G;try{return pe()}finally{v=le}},r.unstable_scheduleCallback=function(G,pe,le){var U=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?U+le:U):le=U,G){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=le+Y,G={id:m++,callback:pe,priorityLevel:G,startTime:le,expirationTime:Y,sortIndex:-1},le>U?(G.sortIndex=le,e(f,G),t(h)===null&&G===t(f)&&(w?(y(B),B=-1):w=!0,me(T,le-U))):(G.sortIndex=Y,e(h,G),M||x||(M=!0,de(P))),G},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(G){var pe=v;return function(){var le=v;v=pe;try{return G.apply(this,arguments)}finally{v=le}}}})(xd)),xd}var Zm;function b0(){return Zm||(Zm=1,yd.exports=T0()),yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function A0(){if(Qm)return Xn;Qm=1;var r=af(),e=b0();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return h.call(g,i)?!0:h.call(m,i)?!1:f.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,d){if(s===null||typeof s>"u"||x(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function w(i,s,l,d,p,_,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new w(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new w(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new w(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new w(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new w(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new w(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new w(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new w(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new w(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function I(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,I);S[s]=new w(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,I);S[s]=new w(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,I);S[s]=new w(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new w(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new w(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,s,l,d){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,d)&&(l=null),d||p===null?v(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),N=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),O=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),G=Symbol.iterator;function pe(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,U;function Y(i){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Ae=!1;function W(i,s){if(!i||Ae)return"";Ae=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ae){var d=ae}Reflect.construct(i,[],s)}else{try{s.call()}catch(ae){d=ae}i.call(s.prototype)}else{try{throw Error()}catch(ae){d=ae}i()}}catch(ae){if(ae&&d&&typeof ae.stack=="string"){for(var p=ae.stack.split(`
`),_=d.stack.split(`
`),b=p.length-1,z=_.length-1;1<=b&&0<=z&&p[b]!==_[z];)z--;for(;1<=b&&0<=z;b--,z--)if(p[b]!==_[z]){if(b!==1||z!==1)do if(b--,z--,0>z||p[b]!==_[z]){var V=`
`+p[b].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=b&&0<=z);break}}}finally{Ae=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Y(i):""}function ge(i){switch(i.tag){case 5:return Y(i.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return i=W(i.type,!1),i;case 11:return i=W(i.type.render,!1),i;case 1:return i=W(i.type,!0),i;default:return""}}function ye(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case N:return"Portal";case C:return"Profiler";case B:return"StrictMode";case te:return"Suspense";case oe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case E:return(i._context.displayName||"Context")+".Provider";case Z:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case he:return s=i.displayName||null,s!==null?s:ye(i.type)||"Memo";case de:s=i._payload,i=i._init;try{return ye(i(s))}catch{}}return null}function _e(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(s);case 8:return s===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Qe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function We(i){var s=Qe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(b){d=""+b,_.call(this,b)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(b){d=""+b},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function It(i){i._valueTracker||(i._valueTracker=We(i))}function Ut(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=Qe(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function gt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function H(i,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function on(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=Pe(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function St(i,s){s=s.checked,s!=null&&L(i,"checked",s,!1)}function yt(i,s){St(i,s);var l=Pe(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Nt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Nt(i,s.type,Pe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function tt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Nt(i,s,l){(s!=="number"||gt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var $e=Array.isArray;function F(i,s,l,d){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+Pe(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function A(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function re(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if($e(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Pe(l)}}function k(i,s){var l=Pe(s.value),d=Pe(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function se(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function K(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?K(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ee,He=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ee.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Xe(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(i){Ie.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Se[s]=Se[i]})});function Ke(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Se.hasOwnProperty(i)&&Se[i]?(""+s).trim():s+"px"}function et(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=Ke(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var Ue=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,s){if(s){if(Ue[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function it(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function j(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Le=null,fe=null,ve=null;function De(i){if(i=Ho(i)){if(typeof Le!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Qa(s),Le(i.stateNode,i.type,s))}}function Ne(i){fe?ve?ve.push(i):ve=[i]:fe=i}function ut(){if(fe){var i=fe,s=ve;if(ve=fe=null,De(i),s)for(i=0;i<s.length;i++)De(s[i])}}function vt(i,s){return i(s)}function zt(){}var Et=!1;function nn(i,s,l){if(Et)return i(s,l);Et=!0;try{return vt(i,s,l)}finally{Et=!1,(fe!==null||ve!==null)&&(zt(),ut())}}function pt(i,s){var l=i.stateNode;if(l===null)return null;var d=Qa(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Gt=!1;if(c)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Gt=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Gt=!1}function $t(i,s,l,d,p,_,b,z,V){var ae=Array.prototype.slice.call(arguments,3);try{s.apply(l,ae)}catch(we){this.onError(we)}}var zn=!1,Di=null,Yr=!1,pr=null,Pa={onError:function(i){zn=!0,Di=i}};function Es(i,s,l,d,p,_,b,z,V){zn=!1,Di=null,$t.apply(Pa,arguments)}function La(i,s,l,d,p,_,b,z,V){if(Es.apply(this,arguments),zn){if(zn){var ae=Di;zn=!1,Di=null}else throw Error(t(198));Yr||(Yr=!0,pr=ae)}}function Ni(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Da(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Na(i){if(Ni(i)!==i)throw Error(t(188))}function zu(i){var s=i.alternate;if(!s){if(s=Ni(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Na(p),i;if(_===d)return Na(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=_;else{for(var b=!1,z=p.child;z;){if(z===l){b=!0,l=p,d=_;break}if(z===d){b=!0,d=p,l=_;break}z=z.sibling}if(!b){for(z=_.child;z;){if(z===l){b=!0,l=_,d=p;break}if(z===d){b=!0,d=_,l=p;break}z=z.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Ia(i){return i=zu(i),i!==null?Ua(i):null}function Ua(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Ua(i);if(s!==null)return s;i=i.sibling}return null}var Fa=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,$=e.unstable_shouldYield,ue=e.unstable_requestPaint,J=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,be=e.unstable_ImmediatePriority,Fe=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,Ve=e.unstable_LowPriority,lt=e.unstable_IdlePriority,ot=null,Ye=null;function Tt(i){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ot,i,void 0,(i.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:At,Zt=Math.log,Xt=Math.LN2;function At(i){return i>>>=0,i===0?32:31-(Zt(i)/Xt|0)|0}var nt=64,Qt=4194304;function wt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function wn(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,_=i.pingedLanes,b=l&268435455;if(b!==0){var z=b&~p;z!==0?d=wt(z):(_&=b,_!==0&&(d=wt(_)))}else b=l&~p,b!==0?d=wt(b):_!==0&&(d=wt(_));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-mt(s),p=1<<l,d|=i[l],s&=~p;return d}function mr(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Un(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var b=31-mt(_),z=1<<b,V=p[b];V===-1?((z&l)===0||(z&d)!==0)&&(p[b]=mr(z,s)):V<=s&&(i.expiredLanes|=z),_&=~z}}function Hi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Bt(){var i=nt;return nt<<=1,(nt&4194240)===0&&(nt=64),i}function Tn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function fn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-mt(s),i[s]=l}function yn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-mt(l),_=1<<p;s[p]=0,d[p]=-1,i[p]=-1,l&=~_}}function pn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-mt(l),p=1<<d;p&s|i[d]&s&&(i[d]|=s),l&=~p}}var Rt=0;function Ii(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Tf,Bu,bf,Af,Rf,Gu=!1,ka=[],gr=null,vr=null,_r=null,bo=new Map,Ao=new Map,yr=[],V_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(i,s){switch(i){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":bo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(s.pointerId)}}function Ro(i,s,l,d,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Ho(s),s!==null&&Bu(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function W_(i,s,l,d,p){switch(s){case"focusin":return gr=Ro(gr,i,s,l,d,p),!0;case"dragenter":return vr=Ro(vr,i,s,l,d,p),!0;case"mouseover":return _r=Ro(_r,i,s,l,d,p),!0;case"pointerover":var _=p.pointerId;return bo.set(_,Ro(bo.get(_)||null,i,s,l,d,p)),!0;case"gotpointercapture":return _=p.pointerId,Ao.set(_,Ro(Ao.get(_)||null,i,s,l,d,p)),!0}return!1}function Pf(i){var s=qr(i.target);if(s!==null){var l=Ni(s);if(l!==null){if(s=l.tag,s===13){if(s=Da(l),s!==null){i.blockedOn=s,Rf(i.priority,function(){bf(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Oa(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Vu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);ft=d,l.target.dispatchEvent(d),ft=null}else return s=Ho(l),s!==null&&Bu(s),i.blockedOn=l,!1;s.shift()}return!0}function Lf(i,s,l){Oa(i)&&l.delete(s)}function X_(){Gu=!1,gr!==null&&Oa(gr)&&(gr=null),vr!==null&&Oa(vr)&&(vr=null),_r!==null&&Oa(_r)&&(_r=null),bo.forEach(Lf),Ao.forEach(Lf)}function Co(i,s){i.blockedOn===s&&(i.blockedOn=null,Gu||(Gu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,X_)))}function Po(i){function s(p){return Co(p,i)}if(0<ka.length){Co(ka[0],i);for(var l=1;l<ka.length;l++){var d=ka[l];d.blockedOn===i&&(d.blockedOn=null)}}for(gr!==null&&Co(gr,i),vr!==null&&Co(vr,i),_r!==null&&Co(_r,i),bo.forEach(s),Ao.forEach(s),l=0;l<yr.length;l++)d=yr[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<yr.length&&(l=yr[0],l.blockedOn===null);)Pf(l),l.blockedOn===null&&yr.shift()}var Ms=T.ReactCurrentBatchConfig,za=!0;function j_(i,s,l,d){var p=Rt,_=Ms.transition;Ms.transition=null;try{Rt=1,Hu(i,s,l,d)}finally{Rt=p,Ms.transition=_}}function $_(i,s,l,d){var p=Rt,_=Ms.transition;Ms.transition=null;try{Rt=4,Hu(i,s,l,d)}finally{Rt=p,Ms.transition=_}}function Hu(i,s,l,d){if(za){var p=Vu(i,s,l,d);if(p===null)oc(i,s,d,Ba,l),Cf(i,d);else if(W_(p,i,s,l,d))d.stopPropagation();else if(Cf(i,d),s&4&&-1<V_.indexOf(i)){for(;p!==null;){var _=Ho(p);if(_!==null&&Tf(_),_=Vu(i,s,l,d),_===null&&oc(i,s,d,Ba,l),_===p)break;p=_}p!==null&&d.stopPropagation()}else oc(i,s,d,null,l)}}var Ba=null;function Vu(i,s,l,d){if(Ba=null,i=j(d),i=qr(i),i!==null)if(s=Ni(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Da(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Ba=i,null}function Df(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case be:return 1;case Fe:return 4;case ze:case Ve:return 16;case lt:return 536870912;default:return 16}default:return 16}}var xr=null,Wu=null,Ga=null;function Nf(){if(Ga)return Ga;var i,s=Wu,l=s.length,d,p="value"in xr?xr.value:xr.textContent,_=p.length;for(i=0;i<l&&s[i]===p[i];i++);var b=l-i;for(d=1;d<=b&&s[l-d]===p[_-d];d++);return Ga=p.slice(i,1<d?1-d:void 0)}function Ha(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Va(){return!0}function If(){return!1}function Kn(i){function s(l,d,p,_,b){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=b,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Va:If,this.isPropagationStopped=If,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),s}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=Kn(ws),Lo=le({},ws,{view:0,detail:0}),Y_=Kn(Lo),ju,$u,Do,Wa=le({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Do&&(Do&&i.type==="mousemove"?(ju=i.screenX-Do.screenX,$u=i.screenY-Do.screenY):$u=ju=0,Do=i),ju)},movementY:function(i){return"movementY"in i?i.movementY:$u}}),Uf=Kn(Wa),q_=le({},Wa,{dataTransfer:0}),K_=Kn(q_),Z_=le({},Lo,{relatedTarget:0}),Yu=Kn(Z_),Q_=le({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),J_=Kn(Q_),ey=le({},ws,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ty=Kn(ey),ny=le({},ws,{data:0}),Ff=Kn(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=sy[i])?!!s[i]:!1}function qu(){return oy}var ay=le({},Lo,{key:function(i){if(i.key){var s=iy[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ha(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ry[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(i){return i.type==="keypress"?Ha(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ha(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),ly=Kn(ay),uy=le({},Wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=Kn(uy),cy=le({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),dy=Kn(cy),hy=le({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=Kn(hy),py=le({},Wa,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),my=Kn(py),gy=[9,13,27,32],Ku=c&&"CompositionEvent"in window,No=null;c&&"documentMode"in document&&(No=document.documentMode);var vy=c&&"TextEvent"in window&&!No,Of=c&&(!Ku||No&&8<No&&11>=No),zf=" ",Bf=!1;function Gf(i,s){switch(i){case"keyup":return gy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ts=!1;function _y(i,s){switch(i){case"compositionend":return Hf(s);case"keypress":return s.which!==32?null:(Bf=!0,zf);case"textInput":return i=s.data,i===zf&&Bf?null:i;default:return null}}function yy(i,s){if(Ts)return i==="compositionend"||!Ku&&Gf(i,s)?(i=Nf(),Ga=Wu=xr=null,Ts=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Of&&s.locale!=="ko"?null:s.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!xy[i.type]:s==="textarea"}function Wf(i,s,l,d){Ne(d),s=qa(s,"onChange"),0<s.length&&(l=new Xu("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var Io=null,Uo=null;function Sy(i){lp(i,0)}function Xa(i){var s=Ps(i);if(Ut(s))return i}function Ey(i,s){if(i==="change")return s}var Xf=!1;if(c){var Zu;if(c){var Qu="oninput"in document;if(!Qu){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),Qu=typeof jf.oninput=="function"}Zu=Qu}else Zu=!1;Xf=Zu&&(!document.documentMode||9<document.documentMode)}function $f(){Io&&(Io.detachEvent("onpropertychange",Yf),Uo=Io=null)}function Yf(i){if(i.propertyName==="value"&&Xa(Uo)){var s=[];Wf(s,Uo,i,j(i)),nn(Sy,s)}}function My(i,s,l){i==="focusin"?($f(),Io=s,Uo=l,Io.attachEvent("onpropertychange",Yf)):i==="focusout"&&$f()}function wy(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Xa(Uo)}function Ty(i,s){if(i==="click")return Xa(s)}function by(i,s){if(i==="input"||i==="change")return Xa(s)}function Ay(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var gi=typeof Object.is=="function"?Object.is:Ay;function Fo(i,s){if(gi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!h.call(s,p)||!gi(i[p],s[p]))return!1}return!0}function qf(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Kf(i,s){var l=qf(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qf(l)}}function Zf(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Zf(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Qf(){for(var i=window,s=gt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=gt(i.document)}return s}function Ju(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function Ry(i){var s=Qf(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Zf(l.ownerDocument.documentElement,l)){if(d!==null&&Ju(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!i.extend&&_>d&&(p=d,d=_,_=p),p=Kf(l,_);var b=Kf(l,d);p&&b&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>d?(i.addRange(s),i.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Cy=c&&"documentMode"in document&&11>=document.documentMode,bs=null,ec=null,ko=null,tc=!1;function Jf(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;tc||bs==null||bs!==gt(d)||(d=bs,"selectionStart"in d&&Ju(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ko&&Fo(ko,d)||(ko=d,d=qa(ec,"onSelect"),0<d.length&&(s=new Xu("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=bs)))}function ja(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var As={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},nc={},ep={};c&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function $a(i){if(nc[i])return nc[i];if(!As[i])return i;var s=As[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in ep)return nc[i]=s[l];return i}var tp=$a("animationend"),np=$a("animationiteration"),ip=$a("animationstart"),rp=$a("transitionend"),sp=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(i,s){sp.set(i,s),a(s,[i])}for(var ic=0;ic<op.length;ic++){var rc=op[ic],Py=rc.toLowerCase(),Ly=rc[0].toUpperCase()+rc.slice(1);Sr(Py,"on"+Ly)}Sr(tp,"onAnimationEnd"),Sr(np,"onAnimationIteration"),Sr(ip,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(rp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function ap(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,La(d,s,void 0,i),i.currentTarget=null}function lp(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var _=void 0;if(s)for(var b=d.length-1;0<=b;b--){var z=d[b],V=z.instance,ae=z.currentTarget;if(z=z.listener,V!==_&&p.isPropagationStopped())break e;ap(p,z,ae),_=V}else for(b=0;b<d.length;b++){if(z=d[b],V=z.instance,ae=z.currentTarget,z=z.listener,V!==_&&p.isPropagationStopped())break e;ap(p,z,ae),_=V}}}if(Yr)throw i=pr,Yr=!1,pr=null,i}function Vt(i,s){var l=s[hc];l===void 0&&(l=s[hc]=new Set);var d=i+"__bubble";l.has(d)||(up(s,i,2,!1),l.add(d))}function sc(i,s,l){var d=0;s&&(d|=4),up(l,i,d,s)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function zo(i){if(!i[Ya]){i[Ya]=!0,n.forEach(function(l){l!=="selectionchange"&&(Dy.has(l)||sc(l,!1,i),sc(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Ya]||(s[Ya]=!0,sc("selectionchange",!1,s))}}function up(i,s,l,d){switch(Df(s)){case 1:var p=j_;break;case 4:p=$_;break;default:p=Hu}l=p.bind(null,s,l,i),p=void 0,!Gt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function oc(i,s,l,d,p){var _=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var b=d.tag;if(b===3||b===4){var z=d.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(b===4)for(b=d.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;b=b.return}for(;z!==null;){if(b=qr(z),b===null)return;if(V=b.tag,V===5||V===6){d=_=b;continue e}z=z.parentNode}}d=d.return}nn(function(){var ae=_,we=j(l),Te=[];e:{var Ee=sp.get(i);if(Ee!==void 0){var Be=Xu,je=i;switch(i){case"keypress":if(Ha(l)===0)break e;case"keydown":case"keyup":Be=ly;break;case"focusin":je="focus",Be=Yu;break;case"focusout":je="blur",Be=Yu;break;case"beforeblur":case"afterblur":Be=Yu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=K_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=dy;break;case tp:case np:case ip:Be=J_;break;case rp:Be=fy;break;case"scroll":Be=Y_;break;case"wheel":Be=my;break;case"copy":case"cut":case"paste":Be=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=kf}var qe=(s&4)!==0,en=!qe&&i==="scroll",Q=qe?Ee!==null?Ee+"Capture":null:Ee;qe=[];for(var X=ae,ie;X!==null;){ie=X;var Re=ie.stateNode;if(ie.tag===5&&Re!==null&&(ie=Re,Q!==null&&(Re=pt(X,Q),Re!=null&&qe.push(Bo(X,Re,ie)))),en)break;X=X.return}0<qe.length&&(Ee=new Be(Ee,je,null,l,we),Te.push({event:Ee,listeners:qe}))}}if((s&7)===0){e:{if(Ee=i==="mouseover"||i==="pointerover",Be=i==="mouseout"||i==="pointerout",Ee&&l!==ft&&(je=l.relatedTarget||l.fromElement)&&(qr(je)||je[Vi]))break e;if((Be||Ee)&&(Ee=we.window===we?we:(Ee=we.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Be?(je=l.relatedTarget||l.toElement,Be=ae,je=je?qr(je):null,je!==null&&(en=Ni(je),je!==en||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=ae),Be!==je)){if(qe=Uf,Re="onMouseLeave",Q="onMouseEnter",X="mouse",(i==="pointerout"||i==="pointerover")&&(qe=kf,Re="onPointerLeave",Q="onPointerEnter",X="pointer"),en=Be==null?Ee:Ps(Be),ie=je==null?Ee:Ps(je),Ee=new qe(Re,X+"leave",Be,l,we),Ee.target=en,Ee.relatedTarget=ie,Re=null,qr(we)===ae&&(qe=new qe(Q,X+"enter",je,l,we),qe.target=ie,qe.relatedTarget=en,Re=qe),en=Re,Be&&je)t:{for(qe=Be,Q=je,X=0,ie=qe;ie;ie=Rs(ie))X++;for(ie=0,Re=Q;Re;Re=Rs(Re))ie++;for(;0<X-ie;)qe=Rs(qe),X--;for(;0<ie-X;)Q=Rs(Q),ie--;for(;X--;){if(qe===Q||Q!==null&&qe===Q.alternate)break t;qe=Rs(qe),Q=Rs(Q)}qe=null}else qe=null;Be!==null&&cp(Te,Ee,Be,qe,!1),je!==null&&en!==null&&cp(Te,en,je,qe,!0)}}e:{if(Ee=ae?Ps(ae):window,Be=Ee.nodeName&&Ee.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Ee.type==="file")var Je=Ey;else if(Vf(Ee))if(Xf)Je=by;else{Je=wy;var rt=My}else(Be=Ee.nodeName)&&Be.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Je=Ty);if(Je&&(Je=Je(i,ae))){Wf(Te,Je,l,we);break e}rt&&rt(i,Ee,ae),i==="focusout"&&(rt=Ee._wrapperState)&&rt.controlled&&Ee.type==="number"&&Nt(Ee,"number",Ee.value)}switch(rt=ae?Ps(ae):window,i){case"focusin":(Vf(rt)||rt.contentEditable==="true")&&(bs=rt,ec=ae,ko=null);break;case"focusout":ko=ec=bs=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Jf(Te,l,we);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":Jf(Te,l,we)}var st;if(Ku)e:{switch(i){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Ts?Gf(i,l)&&(ct="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Of&&l.locale!=="ko"&&(Ts||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ts&&(st=Nf()):(xr=we,Wu="value"in xr?xr.value:xr.textContent,Ts=!0)),rt=qa(ae,ct),0<rt.length&&(ct=new Ff(ct,i,null,l,we),Te.push({event:ct,listeners:rt}),st?ct.data=st:(st=Hf(l),st!==null&&(ct.data=st)))),(st=vy?_y(i,l):yy(i,l))&&(ae=qa(ae,"onBeforeInput"),0<ae.length&&(we=new Ff("onBeforeInput","beforeinput",null,l,we),Te.push({event:we,listeners:ae}),we.data=st))}lp(Te,s)})}function Bo(i,s,l){return{instance:i,listener:s,currentTarget:l}}function qa(i,s){for(var l=s+"Capture",d=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=pt(i,l),_!=null&&d.unshift(Bo(i,_,p)),_=pt(i,s),_!=null&&d.push(Bo(i,_,p))),i=i.return}return d}function Rs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function cp(i,s,l,d,p){for(var _=s._reactName,b=[];l!==null&&l!==d;){var z=l,V=z.alternate,ae=z.stateNode;if(V!==null&&V===d)break;z.tag===5&&ae!==null&&(z=ae,p?(V=pt(l,_),V!=null&&b.unshift(Bo(l,V,z))):p||(V=pt(l,_),V!=null&&b.push(Bo(l,V,z)))),l=l.return}b.length!==0&&i.push({event:s,listeners:b})}var Ny=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function dp(i){return(typeof i=="string"?i:""+i).replace(Ny,`
`).replace(Iy,"")}function Ka(i,s,l){if(s=dp(s),dp(i)!==s&&l)throw Error(t(425))}function Za(){}var ac=null,lc=null;function uc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(i){return hp.resolve(null).then(i).catch(ky)}:cc;function ky(i){setTimeout(function(){throw i})}function dc(i,s){var l=s,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),Po(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Po(s)}function Er(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function fp(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Cs,Go="__reactProps$"+Cs,Vi="__reactContainer$"+Cs,hc="__reactEvents$"+Cs,Oy="__reactListeners$"+Cs,zy="__reactHandles$"+Cs;function qr(i){var s=i[Ui];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Vi]||l[Ui]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=fp(i);i!==null;){if(l=i[Ui])return l;i=fp(i)}return s}i=l,l=i.parentNode}return null}function Ho(i){return i=i[Ui]||i[Vi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ps(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Qa(i){return i[Go]||null}var fc=[],Ls=-1;function Mr(i){return{current:i}}function Wt(i){0>Ls||(i.current=fc[Ls],fc[Ls]=null,Ls--)}function Ht(i,s){Ls++,fc[Ls]=i.current,i.current=s}var wr={},bn=Mr(wr),Bn=Mr(!1),Kr=wr;function Ds(i,s){var l=i.type.contextTypes;if(!l)return wr;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Gn(i){return i=i.childContextTypes,i!=null}function Ja(){Wt(Bn),Wt(bn)}function pp(i,s,l){if(bn.current!==wr)throw Error(t(168));Ht(bn,s),Ht(Bn,l)}function mp(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(t(108,_e(i)||"Unknown",p));return le({},l,d)}function el(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||wr,Kr=bn.current,Ht(bn,i),Ht(Bn,Bn.current),!0}function gp(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=mp(i,s,Kr),d.__reactInternalMemoizedMergedChildContext=i,Wt(Bn),Wt(bn),Ht(bn,i)):Wt(Bn),Ht(Bn,l)}var Wi=null,tl=!1,pc=!1;function vp(i){Wi===null?Wi=[i]:Wi.push(i)}function By(i){tl=!0,vp(i)}function Tr(){if(!pc&&Wi!==null){pc=!0;var i=0,s=Rt;try{var l=Wi;for(Rt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}Wi=null,tl=!1}catch(p){throw Wi!==null&&(Wi=Wi.slice(i+1)),Fa(be,Tr),p}finally{Rt=s,pc=!1}}return null}var Ns=[],Is=0,nl=null,il=0,ii=[],ri=0,Zr=null,Xi=1,ji="";function Qr(i,s){Ns[Is++]=il,Ns[Is++]=nl,nl=i,il=s}function _p(i,s,l){ii[ri++]=Xi,ii[ri++]=ji,ii[ri++]=Zr,Zr=i;var d=Xi;i=ji;var p=32-mt(d)-1;d&=~(1<<p),l+=1;var _=32-mt(s)+p;if(30<_){var b=p-p%5;_=(d&(1<<b)-1).toString(32),d>>=b,p-=b,Xi=1<<32-mt(s)+p|l<<p|d,ji=_+i}else Xi=1<<_|l<<p|d,ji=i}function mc(i){i.return!==null&&(Qr(i,1),_p(i,1,0))}function gc(i){for(;i===nl;)nl=Ns[--Is],Ns[Is]=null,il=Ns[--Is],Ns[Is]=null;for(;i===Zr;)Zr=ii[--ri],ii[ri]=null,ji=ii[--ri],ii[ri]=null,Xi=ii[--ri],ii[ri]=null}var Zn=null,Qn=null,jt=!1,vi=null;function yp(i,s){var l=li(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function xp(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Zn=i,Qn=Er(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Zn=i,Qn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Zr!==null?{id:Xi,overflow:ji}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=li(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Zn=i,Qn=null,!0):!1;default:return!1}}function vc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function _c(i){if(jt){var s=Qn;if(s){var l=s;if(!xp(i,s)){if(vc(i))throw Error(t(418));s=Er(l.nextSibling);var d=Zn;s&&xp(i,s)?yp(d,l):(i.flags=i.flags&-4097|2,jt=!1,Zn=i)}}else{if(vc(i))throw Error(t(418));i.flags=i.flags&-4097|2,jt=!1,Zn=i}}}function Sp(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Zn=i}function rl(i){if(i!==Zn)return!1;if(!jt)return Sp(i),jt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!uc(i.type,i.memoizedProps)),s&&(s=Qn)){if(vc(i))throw Ep(),Error(t(418));for(;s;)yp(i,s),s=Er(s.nextSibling)}if(Sp(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Qn=Er(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Qn=null}}else Qn=Zn?Er(i.stateNode.nextSibling):null;return!0}function Ep(){for(var i=Qn;i;)i=Er(i.nextSibling)}function Us(){Qn=Zn=null,jt=!1}function yc(i){vi===null?vi=[i]:vi.push(i)}var Gy=T.ReactCurrentBatchConfig;function Vo(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var p=d,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(b){var z=p.refs;b===null?delete z[_]:z[_]=b},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function sl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Mp(i){var s=i._init;return s(i._payload)}function wp(i){function s(Q,X){if(i){var ie=Q.deletions;ie===null?(Q.deletions=[X],Q.flags|=16):ie.push(X)}}function l(Q,X){if(!i)return null;for(;X!==null;)s(Q,X),X=X.sibling;return null}function d(Q,X){for(Q=new Map;X!==null;)X.key!==null?Q.set(X.key,X):Q.set(X.index,X),X=X.sibling;return Q}function p(Q,X){return Q=Nr(Q,X),Q.index=0,Q.sibling=null,Q}function _(Q,X,ie){return Q.index=ie,i?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<X?(Q.flags|=2,X):ie):(Q.flags|=2,X)):(Q.flags|=1048576,X)}function b(Q){return i&&Q.alternate===null&&(Q.flags|=2),Q}function z(Q,X,ie,Re){return X===null||X.tag!==6?(X=cd(ie,Q.mode,Re),X.return=Q,X):(X=p(X,ie),X.return=Q,X)}function V(Q,X,ie,Re){var Je=ie.type;return Je===D?we(Q,X,ie.props.children,Re,ie.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===de&&Mp(Je)===X.type)?(Re=p(X,ie.props),Re.ref=Vo(Q,X,ie),Re.return=Q,Re):(Re=Cl(ie.type,ie.key,ie.props,null,Q.mode,Re),Re.ref=Vo(Q,X,ie),Re.return=Q,Re)}function ae(Q,X,ie,Re){return X===null||X.tag!==4||X.stateNode.containerInfo!==ie.containerInfo||X.stateNode.implementation!==ie.implementation?(X=dd(ie,Q.mode,Re),X.return=Q,X):(X=p(X,ie.children||[]),X.return=Q,X)}function we(Q,X,ie,Re,Je){return X===null||X.tag!==7?(X=os(ie,Q.mode,Re,Je),X.return=Q,X):(X=p(X,ie),X.return=Q,X)}function Te(Q,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number")return X=cd(""+X,Q.mode,ie),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case P:return ie=Cl(X.type,X.key,X.props,null,Q.mode,ie),ie.ref=Vo(Q,null,X),ie.return=Q,ie;case N:return X=dd(X,Q.mode,ie),X.return=Q,X;case de:var Re=X._init;return Te(Q,Re(X._payload),ie)}if($e(X)||pe(X))return X=os(X,Q.mode,ie,null),X.return=Q,X;sl(Q,X)}return null}function Ee(Q,X,ie,Re){var Je=X!==null?X.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Je!==null?null:z(Q,X,""+ie,Re);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:return ie.key===Je?V(Q,X,ie,Re):null;case N:return ie.key===Je?ae(Q,X,ie,Re):null;case de:return Je=ie._init,Ee(Q,X,Je(ie._payload),Re)}if($e(ie)||pe(ie))return Je!==null?null:we(Q,X,ie,Re,null);sl(Q,ie)}return null}function Be(Q,X,ie,Re,Je){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return Q=Q.get(ie)||null,z(X,Q,""+Re,Je);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case P:return Q=Q.get(Re.key===null?ie:Re.key)||null,V(X,Q,Re,Je);case N:return Q=Q.get(Re.key===null?ie:Re.key)||null,ae(X,Q,Re,Je);case de:var rt=Re._init;return Be(Q,X,ie,rt(Re._payload),Je)}if($e(Re)||pe(Re))return Q=Q.get(ie)||null,we(X,Q,Re,Je,null);sl(X,Re)}return null}function je(Q,X,ie,Re){for(var Je=null,rt=null,st=X,ct=X=0,vn=null;st!==null&&ct<ie.length;ct++){st.index>ct?(vn=st,st=null):vn=st.sibling;var Pt=Ee(Q,st,ie[ct],Re);if(Pt===null){st===null&&(st=vn);break}i&&st&&Pt.alternate===null&&s(Q,st),X=_(Pt,X,ct),rt===null?Je=Pt:rt.sibling=Pt,rt=Pt,st=vn}if(ct===ie.length)return l(Q,st),jt&&Qr(Q,ct),Je;if(st===null){for(;ct<ie.length;ct++)st=Te(Q,ie[ct],Re),st!==null&&(X=_(st,X,ct),rt===null?Je=st:rt.sibling=st,rt=st);return jt&&Qr(Q,ct),Je}for(st=d(Q,st);ct<ie.length;ct++)vn=Be(st,Q,ct,ie[ct],Re),vn!==null&&(i&&vn.alternate!==null&&st.delete(vn.key===null?ct:vn.key),X=_(vn,X,ct),rt===null?Je=vn:rt.sibling=vn,rt=vn);return i&&st.forEach(function(Ir){return s(Q,Ir)}),jt&&Qr(Q,ct),Je}function qe(Q,X,ie,Re){var Je=pe(ie);if(typeof Je!="function")throw Error(t(150));if(ie=Je.call(ie),ie==null)throw Error(t(151));for(var rt=Je=null,st=X,ct=X=0,vn=null,Pt=ie.next();st!==null&&!Pt.done;ct++,Pt=ie.next()){st.index>ct?(vn=st,st=null):vn=st.sibling;var Ir=Ee(Q,st,Pt.value,Re);if(Ir===null){st===null&&(st=vn);break}i&&st&&Ir.alternate===null&&s(Q,st),X=_(Ir,X,ct),rt===null?Je=Ir:rt.sibling=Ir,rt=Ir,st=vn}if(Pt.done)return l(Q,st),jt&&Qr(Q,ct),Je;if(st===null){for(;!Pt.done;ct++,Pt=ie.next())Pt=Te(Q,Pt.value,Re),Pt!==null&&(X=_(Pt,X,ct),rt===null?Je=Pt:rt.sibling=Pt,rt=Pt);return jt&&Qr(Q,ct),Je}for(st=d(Q,st);!Pt.done;ct++,Pt=ie.next())Pt=Be(st,Q,ct,Pt.value,Re),Pt!==null&&(i&&Pt.alternate!==null&&st.delete(Pt.key===null?ct:Pt.key),X=_(Pt,X,ct),rt===null?Je=Pt:rt.sibling=Pt,rt=Pt);return i&&st.forEach(function(x0){return s(Q,x0)}),jt&&Qr(Q,ct),Je}function en(Q,X,ie,Re){if(typeof ie=="object"&&ie!==null&&ie.type===D&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:e:{for(var Je=ie.key,rt=X;rt!==null;){if(rt.key===Je){if(Je=ie.type,Je===D){if(rt.tag===7){l(Q,rt.sibling),X=p(rt,ie.props.children),X.return=Q,Q=X;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===de&&Mp(Je)===rt.type){l(Q,rt.sibling),X=p(rt,ie.props),X.ref=Vo(Q,rt,ie),X.return=Q,Q=X;break e}l(Q,rt);break}else s(Q,rt);rt=rt.sibling}ie.type===D?(X=os(ie.props.children,Q.mode,Re,ie.key),X.return=Q,Q=X):(Re=Cl(ie.type,ie.key,ie.props,null,Q.mode,Re),Re.ref=Vo(Q,X,ie),Re.return=Q,Q=Re)}return b(Q);case N:e:{for(rt=ie.key;X!==null;){if(X.key===rt)if(X.tag===4&&X.stateNode.containerInfo===ie.containerInfo&&X.stateNode.implementation===ie.implementation){l(Q,X.sibling),X=p(X,ie.children||[]),X.return=Q,Q=X;break e}else{l(Q,X);break}else s(Q,X);X=X.sibling}X=dd(ie,Q.mode,Re),X.return=Q,Q=X}return b(Q);case de:return rt=ie._init,en(Q,X,rt(ie._payload),Re)}if($e(ie))return je(Q,X,ie,Re);if(pe(ie))return qe(Q,X,ie,Re);sl(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,X!==null&&X.tag===6?(l(Q,X.sibling),X=p(X,ie),X.return=Q,Q=X):(l(Q,X),X=cd(ie,Q.mode,Re),X.return=Q,Q=X),b(Q)):l(Q,X)}return en}var Fs=wp(!0),Tp=wp(!1),ol=Mr(null),al=null,ks=null,xc=null;function Sc(){xc=ks=al=null}function Ec(i){var s=ol.current;Wt(ol),i._currentValue=s}function Mc(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function Os(i,s){al=i,xc=ks=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Hn=!0),i.firstContext=null)}function si(i){var s=i._currentValue;if(xc!==i)if(i={context:i,memoizedValue:s,next:null},ks===null){if(al===null)throw Error(t(308));ks=i,al.dependencies={lanes:0,firstContext:i}}else ks=ks.next=i;return s}var Jr=null;function wc(i){Jr===null?Jr=[i]:Jr.push(i)}function bp(i,s,l,d){var p=s.interleaved;return p===null?(l.next=l,wc(s)):(l.next=p.next,p.next=l),s.interleaved=l,$i(i,d)}function $i(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var br=!1;function Tc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ap(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Yi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ar(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Ct&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,$i(i,l)}return p=d.interleaved,p===null?(s.next=s,wc(d)):(s.next=p.next,p.next=s),d.interleaved=s,$i(i,l)}function ll(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,pn(i,l)}}function Rp(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=b:_=_.next=b,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function ul(i,s,l,d){var p=i.updateQueue;br=!1;var _=p.firstBaseUpdate,b=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var V=z,ae=V.next;V.next=null,b===null?_=ae:b.next=ae,b=V;var we=i.alternate;we!==null&&(we=we.updateQueue,z=we.lastBaseUpdate,z!==b&&(z===null?we.firstBaseUpdate=ae:z.next=ae,we.lastBaseUpdate=V))}if(_!==null){var Te=p.baseState;b=0,we=ae=V=null,z=_;do{var Ee=z.lane,Be=z.eventTime;if((d&Ee)===Ee){we!==null&&(we=we.next={eventTime:Be,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var je=i,qe=z;switch(Ee=s,Be=l,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Te=je.call(Be,Te,Ee);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,Ee=typeof je=="function"?je.call(Be,Te,Ee):je,Ee==null)break e;Te=le({},Te,Ee);break e;case 2:br=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,Ee=p.effects,Ee===null?p.effects=[z]:Ee.push(z))}else Be={eventTime:Be,lane:Ee,tag:z.tag,payload:z.payload,callback:z.callback,next:null},we===null?(ae=we=Be,V=Te):we=we.next=Be,b|=Ee;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;Ee=z,z=Ee.next,Ee.next=null,p.lastBaseUpdate=Ee,p.shared.pending=null}}while(!0);if(we===null&&(V=Te),p.baseState=V,p.firstBaseUpdate=ae,p.lastBaseUpdate=we,s=p.shared.interleaved,s!==null){p=s;do b|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ns|=b,i.lanes=b,i.memoizedState=Te}}function Cp(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Wo={},Fi=Mr(Wo),Xo=Mr(Wo),jo=Mr(Wo);function es(i){if(i===Wo)throw Error(t(174));return i}function bc(i,s){switch(Ht(jo,s),Ht(Xo,i),Ht(Fi,Wo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:xe(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=xe(s,i)}Wt(Fi),Ht(Fi,s)}function zs(){Wt(Fi),Wt(Xo),Wt(jo)}function Pp(i){es(jo.current);var s=es(Fi.current),l=xe(s,i.type);s!==l&&(Ht(Xo,i),Ht(Fi,l))}function Ac(i){Xo.current===i&&(Wt(Fi),Wt(Xo))}var Yt=Mr(0);function cl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Rc=[];function Cc(){for(var i=0;i<Rc.length;i++)Rc[i]._workInProgressVersionPrimary=null;Rc.length=0}var dl=T.ReactCurrentDispatcher,Pc=T.ReactCurrentBatchConfig,ts=0,qt=null,an=null,mn=null,hl=!1,$o=!1,Yo=0,Hy=0;function An(){throw Error(t(321))}function Lc(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!gi(i[l],s[l]))return!1;return!0}function Dc(i,s,l,d,p,_){if(ts=_,qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,dl.current=i===null||i.memoizedState===null?jy:$y,i=l(d,p),$o){_=0;do{if($o=!1,Yo=0,25<=_)throw Error(t(301));_+=1,mn=an=null,s.updateQueue=null,dl.current=Yy,i=l(d,p)}while($o)}if(dl.current=ml,s=an!==null&&an.next!==null,ts=0,mn=an=qt=null,hl=!1,s)throw Error(t(300));return i}function Nc(){var i=Yo!==0;return Yo=0,i}function ki(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?qt.memoizedState=mn=i:mn=mn.next=i,mn}function oi(){if(an===null){var i=qt.alternate;i=i!==null?i.memoizedState:null}else i=an.next;var s=mn===null?qt.memoizedState:mn.next;if(s!==null)mn=s,an=i;else{if(i===null)throw Error(t(310));an=i,i={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},mn===null?qt.memoizedState=mn=i:mn=mn.next=i}return mn}function qo(i,s){return typeof s=="function"?s(i):s}function Ic(i){var s=oi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=an,p=d.baseQueue,_=l.pending;if(_!==null){if(p!==null){var b=p.next;p.next=_.next,_.next=b}d.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,d=d.baseState;var z=b=null,V=null,ae=_;do{var we=ae.lane;if((ts&we)===we)V!==null&&(V=V.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),d=ae.hasEagerState?ae.eagerState:i(d,ae.action);else{var Te={lane:we,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};V===null?(z=V=Te,b=d):V=V.next=Te,qt.lanes|=we,ns|=we}ae=ae.next}while(ae!==null&&ae!==_);V===null?b=d:V.next=z,gi(d,s.memoizedState)||(Hn=!0),s.memoizedState=d,s.baseState=b,s.baseQueue=V,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do _=p.lane,qt.lanes|=_,ns|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Uc(i){var s=oi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var b=p=p.next;do _=i(_,b.action),b=b.next;while(b!==p);gi(_,s.memoizedState)||(Hn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,d]}function Lp(){}function Dp(i,s){var l=qt,d=oi(),p=s(),_=!gi(d.memoizedState,p);if(_&&(d.memoizedState=p,Hn=!0),d=d.queue,Fc(Up.bind(null,l,d,i),[i]),d.getSnapshot!==s||_||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,Ko(9,Ip.bind(null,l,d,p,s),void 0,null),gn===null)throw Error(t(349));(ts&30)!==0||Np(l,s,p)}return p}function Np(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=qt.updateQueue,s===null?(s={lastEffect:null,stores:null},qt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Ip(i,s,l,d){s.value=l,s.getSnapshot=d,Fp(s)&&kp(i)}function Up(i,s,l){return l(function(){Fp(s)&&kp(i)})}function Fp(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!gi(i,l)}catch{return!0}}function kp(i){var s=$i(i,1);s!==null&&Si(s,i,1,-1)}function Op(i){var s=ki();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:i},s.queue=i,i=i.dispatch=Xy.bind(null,qt,i),[s.memoizedState,i]}function Ko(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=qt.updateQueue,s===null?(s={lastEffect:null,stores:null},qt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function zp(){return oi().memoizedState}function fl(i,s,l,d){var p=ki();qt.flags|=i,p.memoizedState=Ko(1|s,l,void 0,d===void 0?null:d)}function pl(i,s,l,d){var p=oi();d=d===void 0?null:d;var _=void 0;if(an!==null){var b=an.memoizedState;if(_=b.destroy,d!==null&&Lc(d,b.deps)){p.memoizedState=Ko(s,l,_,d);return}}qt.flags|=i,p.memoizedState=Ko(1|s,l,_,d)}function Bp(i,s){return fl(8390656,8,i,s)}function Fc(i,s){return pl(2048,8,i,s)}function Gp(i,s){return pl(4,2,i,s)}function Hp(i,s){return pl(4,4,i,s)}function Vp(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Wp(i,s,l){return l=l!=null?l.concat([i]):null,pl(4,4,Vp.bind(null,s,i),l)}function kc(){}function Xp(i,s){var l=oi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Lc(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function jp(i,s){var l=oi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Lc(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function $p(i,s,l){return(ts&21)===0?(i.baseState&&(i.baseState=!1,Hn=!0),i.memoizedState=l):(gi(l,s)||(l=Bt(),qt.lanes|=l,ns|=l,i.baseState=!0),s)}function Vy(i,s){var l=Rt;Rt=l!==0&&4>l?l:4,i(!0);var d=Pc.transition;Pc.transition={};try{i(!1),s()}finally{Rt=l,Pc.transition=d}}function Yp(){return oi().memoizedState}function Wy(i,s,l){var d=Lr(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},qp(i))Kp(s,l);else if(l=bp(i,s,l,d),l!==null){var p=kn();Si(l,i,d,p),Zp(l,s,d)}}function Xy(i,s,l){var d=Lr(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(qp(i))Kp(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var b=s.lastRenderedState,z=_(b,l);if(p.hasEagerState=!0,p.eagerState=z,gi(z,b)){var V=s.interleaved;V===null?(p.next=p,wc(s)):(p.next=V.next,V.next=p),s.interleaved=p;return}}catch{}finally{}l=bp(i,s,p,d),l!==null&&(p=kn(),Si(l,i,d,p),Zp(l,s,d))}}function qp(i){var s=i.alternate;return i===qt||s!==null&&s===qt}function Kp(i,s){$o=hl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Zp(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,pn(i,l)}}var ml={readContext:si,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},jy={readContext:si,useCallback:function(i,s){return ki().memoizedState=[i,s===void 0?null:s],i},useContext:si,useEffect:Bp,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,fl(4194308,4,Vp.bind(null,s,i),l)},useLayoutEffect:function(i,s){return fl(4194308,4,i,s)},useInsertionEffect:function(i,s){return fl(4,2,i,s)},useMemo:function(i,s){var l=ki();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=ki();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=Wy.bind(null,qt,i),[d.memoizedState,i]},useRef:function(i){var s=ki();return i={current:i},s.memoizedState=i},useState:Op,useDebugValue:kc,useDeferredValue:function(i){return ki().memoizedState=i},useTransition:function(){var i=Op(!1),s=i[0];return i=Vy.bind(null,i[1]),ki().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=qt,p=ki();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),gn===null)throw Error(t(349));(ts&30)!==0||Np(d,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,Bp(Up.bind(null,d,_,i),[i]),d.flags|=2048,Ko(9,Ip.bind(null,d,_,l,s),void 0,null),l},useId:function(){var i=ki(),s=gn.identifierPrefix;if(jt){var l=ji,d=Xi;l=(d&~(1<<32-mt(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=Yo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=Hy++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},$y={readContext:si,useCallback:Xp,useContext:si,useEffect:Fc,useImperativeHandle:Wp,useInsertionEffect:Gp,useLayoutEffect:Hp,useMemo:jp,useReducer:Ic,useRef:zp,useState:function(){return Ic(qo)},useDebugValue:kc,useDeferredValue:function(i){var s=oi();return $p(s,an.memoizedState,i)},useTransition:function(){var i=Ic(qo)[0],s=oi().memoizedState;return[i,s]},useMutableSource:Lp,useSyncExternalStore:Dp,useId:Yp,unstable_isNewReconciler:!1},Yy={readContext:si,useCallback:Xp,useContext:si,useEffect:Fc,useImperativeHandle:Wp,useInsertionEffect:Gp,useLayoutEffect:Hp,useMemo:jp,useReducer:Uc,useRef:zp,useState:function(){return Uc(qo)},useDebugValue:kc,useDeferredValue:function(i){var s=oi();return an===null?s.memoizedState=i:$p(s,an.memoizedState,i)},useTransition:function(){var i=Uc(qo)[0],s=oi().memoizedState;return[i,s]},useMutableSource:Lp,useSyncExternalStore:Dp,useId:Yp,unstable_isNewReconciler:!1};function _i(i,s){if(i&&i.defaultProps){s=le({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Oc(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:le({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var gl={isMounted:function(i){return(i=i._reactInternals)?Ni(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=kn(),p=Lr(i),_=Yi(d,p);_.payload=s,l!=null&&(_.callback=l),s=Ar(i,_,p),s!==null&&(Si(s,i,p,d),ll(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=kn(),p=Lr(i),_=Yi(d,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Ar(i,_,p),s!==null&&(Si(s,i,p,d),ll(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=kn(),d=Lr(i),p=Yi(l,d);p.tag=2,s!=null&&(p.callback=s),s=Ar(i,p,d),s!==null&&(Si(s,i,d,l),ll(s,i,d))}};function Qp(i,s,l,d,p,_,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,b):s.prototype&&s.prototype.isPureReactComponent?!Fo(l,d)||!Fo(p,_):!0}function Jp(i,s,l){var d=!1,p=wr,_=s.contextType;return typeof _=="object"&&_!==null?_=si(_):(p=Gn(s)?Kr:bn.current,d=s.contextTypes,_=(d=d!=null)?Ds(i,p):wr),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=gl,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function em(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&gl.enqueueReplaceState(s,s.state,null)}function zc(i,s,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Tc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=si(_):(_=Gn(s)?Kr:bn.current,p.context=Ds(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Oc(i,s,_,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&gl.enqueueReplaceState(p,p.state,null),ul(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Bs(i,s){try{var l="",d=s;do l+=ge(d),d=d.return;while(d);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Bc(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Gc(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var qy=typeof WeakMap=="function"?WeakMap:Map;function tm(i,s,l){l=Yi(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Ml||(Ml=!0,nd=d),Gc(i,s)},l}function nm(i,s,l){l=Yi(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;l.payload=function(){return d(p)},l.callback=function(){Gc(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Gc(i,s),typeof d!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function im(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new qy;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(l)||(p.add(l),i=u0.bind(null,i,s,l),s.then(i,i))}function rm(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function sm(i,s,l,d,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Yi(-1,1),s.tag=2,Ar(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var Ky=T.ReactCurrentOwner,Hn=!1;function Fn(i,s,l,d){s.child=i===null?Tp(s,null,l,d):Fs(s,i.child,l,d)}function om(i,s,l,d,p){l=l.render;var _=s.ref;return Os(s,p),d=Dc(i,s,l,d,_,p),l=Nc(),i!==null&&!Hn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,qi(i,s,p)):(jt&&l&&mc(s),s.flags|=1,Fn(i,s,d,p),s.child)}function am(i,s,l,d,p){if(i===null){var _=l.type;return typeof _=="function"&&!ud(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,lm(i,s,_,d,p)):(i=Cl(l.type,null,d,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var b=_.memoizedProps;if(l=l.compare,l=l!==null?l:Fo,l(b,d)&&i.ref===s.ref)return qi(i,s,p)}return s.flags|=1,i=Nr(_,d),i.ref=s.ref,i.return=s,s.child=i}function lm(i,s,l,d,p){if(i!==null){var _=i.memoizedProps;if(Fo(_,d)&&i.ref===s.ref)if(Hn=!1,s.pendingProps=d=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Hn=!0);else return s.lanes=i.lanes,qi(i,s,p)}return Hc(i,s,l,d,p)}function um(i,s,l){var d=s.pendingProps,p=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Hs,Jn),Jn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ht(Hs,Jn),Jn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,Ht(Hs,Jn),Jn|=d}else _!==null?(d=_.baseLanes|l,s.memoizedState=null):d=l,Ht(Hs,Jn),Jn|=d;return Fn(i,s,p,l),s.child}function cm(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Hc(i,s,l,d,p){var _=Gn(l)?Kr:bn.current;return _=Ds(s,_),Os(s,p),l=Dc(i,s,l,d,_,p),d=Nc(),i!==null&&!Hn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,qi(i,s,p)):(jt&&d&&mc(s),s.flags|=1,Fn(i,s,l,p),s.child)}function dm(i,s,l,d,p){if(Gn(l)){var _=!0;el(s)}else _=!1;if(Os(s,p),s.stateNode===null)_l(i,s),Jp(s,l,d),zc(s,l,d,p),d=!0;else if(i===null){var b=s.stateNode,z=s.memoizedProps;b.props=z;var V=b.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=si(ae):(ae=Gn(l)?Kr:bn.current,ae=Ds(s,ae));var we=l.getDerivedStateFromProps,Te=typeof we=="function"||typeof b.getSnapshotBeforeUpdate=="function";Te||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==d||V!==ae)&&em(s,b,d,ae),br=!1;var Ee=s.memoizedState;b.state=Ee,ul(s,d,b,p),V=s.memoizedState,z!==d||Ee!==V||Bn.current||br?(typeof we=="function"&&(Oc(s,l,we,d),V=s.memoizedState),(z=br||Qp(s,l,z,d,Ee,V,ae))?(Te||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=V),b.props=d,b.state=V,b.context=ae,d=z):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{b=s.stateNode,Ap(i,s),z=s.memoizedProps,ae=s.type===s.elementType?z:_i(s.type,z),b.props=ae,Te=s.pendingProps,Ee=b.context,V=l.contextType,typeof V=="object"&&V!==null?V=si(V):(V=Gn(l)?Kr:bn.current,V=Ds(s,V));var Be=l.getDerivedStateFromProps;(we=typeof Be=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==Te||Ee!==V)&&em(s,b,d,V),br=!1,Ee=s.memoizedState,b.state=Ee,ul(s,d,b,p);var je=s.memoizedState;z!==Te||Ee!==je||Bn.current||br?(typeof Be=="function"&&(Oc(s,l,Be,d),je=s.memoizedState),(ae=br||Qp(s,l,ae,d,Ee,je,V)||!1)?(we||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(d,je,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(d,je,V)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||z===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=je),b.props=d,b.state=je,b.context=V,d=ae):(typeof b.componentDidUpdate!="function"||z===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=1024),d=!1)}return Vc(i,s,l,d,_,p)}function Vc(i,s,l,d,p,_){cm(i,s);var b=(s.flags&128)!==0;if(!d&&!b)return p&&gp(s,l,!1),qi(i,s,_);d=s.stateNode,Ky.current=s;var z=b&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&b?(s.child=Fs(s,i.child,null,_),s.child=Fs(s,null,z,_)):Fn(i,s,z,_),s.memoizedState=d.state,p&&gp(s,l,!0),s.child}function hm(i){var s=i.stateNode;s.pendingContext?pp(i,s.pendingContext,s.pendingContext!==s.context):s.context&&pp(i,s.context,!1),bc(i,s.containerInfo)}function fm(i,s,l,d,p){return Us(),yc(p),s.flags|=256,Fn(i,s,l,d),s.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function Xc(i){return{baseLanes:i,cachePool:null,transitions:null}}function pm(i,s,l){var d=s.pendingProps,p=Yt.current,_=!1,b=(s.flags&128)!==0,z;if((z=b)||(z=i!==null&&i.memoizedState===null?!1:(p&2)!==0),z?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ht(Yt,p&1),i===null)return _c(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=d.children,i=d.fallback,_?(d=s.mode,_=s.child,b={mode:"hidden",children:b},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=b):_=Pl(b,d,0,null),i=os(i,d,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Xc(l),s.memoizedState=Wc,i):jc(s,b));if(p=i.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return Zy(i,s,b,d,z,p,l);if(_){_=d.fallback,b=s.mode,p=i.child,z=p.sibling;var V={mode:"hidden",children:d.children};return(b&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=V,s.deletions=null):(d=Nr(p,V),d.subtreeFlags=p.subtreeFlags&14680064),z!==null?_=Nr(z,_):(_=os(_,b,l,null),_.flags|=2),_.return=s,d.return=s,d.sibling=_,s.child=d,d=_,_=s.child,b=i.child.memoizedState,b=b===null?Xc(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},_.memoizedState=b,_.childLanes=i.childLanes&~l,s.memoizedState=Wc,d}return _=i.child,i=_.sibling,d=Nr(_,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function jc(i,s){return s=Pl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function vl(i,s,l,d){return d!==null&&yc(d),Fs(s,i.child,null,l),i=jc(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function Zy(i,s,l,d,p,_,b){if(l)return s.flags&256?(s.flags&=-257,d=Bc(Error(t(422))),vl(i,s,b,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=d.fallback,p=s.mode,d=Pl({mode:"visible",children:d.children},p,0,null),_=os(_,p,b,null),_.flags|=2,d.return=s,_.return=s,d.sibling=_,s.child=d,(s.mode&1)!==0&&Fs(s,i.child,null,b),s.child.memoizedState=Xc(b),s.memoizedState=Wc,_);if((s.mode&1)===0)return vl(i,s,b,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var z=d.dgst;return d=z,_=Error(t(419)),d=Bc(_,d,void 0),vl(i,s,b,d)}if(z=(b&i.childLanes)!==0,Hn||z){if(d=gn,d!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|b))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,$i(i,p),Si(d,i,p,-1))}return ld(),d=Bc(Error(t(421))),vl(i,s,b,d)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=c0.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,Qn=Er(p.nextSibling),Zn=s,jt=!0,vi=null,i!==null&&(ii[ri++]=Xi,ii[ri++]=ji,ii[ri++]=Zr,Xi=i.id,ji=i.overflow,Zr=s),s=jc(s,d.children),s.flags|=4096,s)}function mm(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),Mc(i.return,s,l)}function $c(i,s,l,d,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=p)}function gm(i,s,l){var d=s.pendingProps,p=d.revealOrder,_=d.tail;if(Fn(i,s,d.children,l),d=Yt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&mm(i,l,s);else if(i.tag===19)mm(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Ht(Yt,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&cl(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),$c(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&cl(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}$c(s,!0,l,null,_);break;case"together":$c(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function _l(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function qi(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ns|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Nr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Nr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function Qy(i,s,l){switch(s.tag){case 3:hm(s),Us();break;case 5:Pp(s);break;case 1:Gn(s.type)&&el(s);break;case 4:bc(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;Ht(ol,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Ht(Yt,Yt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?pm(i,s,l):(Ht(Yt,Yt.current&1),i=qi(i,s,l),i!==null?i.sibling:null);Ht(Yt,Yt.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return gm(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ht(Yt,Yt.current),d)break;return null;case 22:case 23:return s.lanes=0,um(i,s,l)}return qi(i,s,l)}var vm,Yc,_m,ym;vm=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Yc=function(){},_m=function(i,s,l,d){var p=i.memoizedProps;if(p!==d){i=s.stateNode,es(Fi.current);var _=null;switch(l){case"input":p=H(i,p),d=H(i,d),_=[];break;case"select":p=le({},p,{value:void 0}),d=le({},d,{value:void 0}),_=[];break;case"textarea":p=A(i,p),d=A(i,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Za)}dt(l,d);var b;l=null;for(ae in p)if(!d.hasOwnProperty(ae)&&p.hasOwnProperty(ae)&&p[ae]!=null)if(ae==="style"){var z=p[ae];for(b in z)z.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?_||(_=[]):(_=_||[]).push(ae,null));for(ae in d){var V=d[ae];if(z=p!=null?p[ae]:void 0,d.hasOwnProperty(ae)&&V!==z&&(V!=null||z!=null))if(ae==="style")if(z){for(b in z)!z.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in V)V.hasOwnProperty(b)&&z[b]!==V[b]&&(l||(l={}),l[b]=V[b])}else l||(_||(_=[]),_.push(ae,l)),l=V;else ae==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,z=z?z.__html:void 0,V!=null&&z!==V&&(_=_||[]).push(ae,V)):ae==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(ae,""+V):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(V!=null&&ae==="onScroll"&&Vt("scroll",i),_||z===V||(_=[])):(_=_||[]).push(ae,V))}l&&(_=_||[]).push("style",l);var ae=_;(s.updateQueue=ae)&&(s.flags|=4)}},ym=function(i,s,l,d){l!==d&&(s.flags|=4)};function Zo(i,s){if(!jt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Rn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function Jy(i,s,l){var d=s.pendingProps;switch(gc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(s),null;case 1:return Gn(s.type)&&Ja(),Rn(s),null;case 3:return d=s.stateNode,zs(),Wt(Bn),Wt(bn),Cc(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(rl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,vi!==null&&(sd(vi),vi=null))),Yc(i,s),Rn(s),null;case 5:Ac(s);var p=es(jo.current);if(l=s.type,i!==null&&s.stateNode!=null)_m(i,s,l,d,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Rn(s),null}if(i=es(Fi.current),rl(s)){d=s.stateNode,l=s.type;var _=s.memoizedProps;switch(d[Ui]=s,d[Go]=_,i=(s.mode&1)!==0,l){case"dialog":Vt("cancel",d),Vt("close",d);break;case"iframe":case"object":case"embed":Vt("load",d);break;case"video":case"audio":for(p=0;p<Oo.length;p++)Vt(Oo[p],d);break;case"source":Vt("error",d);break;case"img":case"image":case"link":Vt("error",d),Vt("load",d);break;case"details":Vt("toggle",d);break;case"input":on(d,_),Vt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Vt("invalid",d);break;case"textarea":re(d,_),Vt("invalid",d)}dt(l,_),p=null;for(var b in _)if(_.hasOwnProperty(b)){var z=_[b];b==="children"?typeof z=="string"?d.textContent!==z&&(_.suppressHydrationWarning!==!0&&Ka(d.textContent,z,i),p=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&Ka(d.textContent,z,i),p=["children",""+z]):o.hasOwnProperty(b)&&z!=null&&b==="onScroll"&&Vt("scroll",d)}switch(l){case"input":It(d),tt(d,_,!0);break;case"textarea":It(d),se(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=Za)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=K(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=b.createElement(l,{is:d.is}):(i=b.createElement(l),l==="select"&&(b=i,d.multiple?b.multiple=!0:d.size&&(b.size=d.size))):i=b.createElementNS(i,l),i[Ui]=s,i[Go]=d,vm(i,s,!1,!1),s.stateNode=i;e:{switch(b=it(l,d),l){case"dialog":Vt("cancel",i),Vt("close",i),p=d;break;case"iframe":case"object":case"embed":Vt("load",i),p=d;break;case"video":case"audio":for(p=0;p<Oo.length;p++)Vt(Oo[p],i);p=d;break;case"source":Vt("error",i),p=d;break;case"img":case"image":case"link":Vt("error",i),Vt("load",i),p=d;break;case"details":Vt("toggle",i),p=d;break;case"input":on(i,d),p=H(i,d),Vt("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=le({},d,{value:void 0}),Vt("invalid",i);break;case"textarea":re(i,d),p=A(i,d),Vt("invalid",i);break;default:p=d}dt(l,p),z=p;for(_ in z)if(z.hasOwnProperty(_)){var V=z[_];_==="style"?et(i,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&He(i,V)):_==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&Xe(i,V):typeof V=="number"&&Xe(i,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?V!=null&&_==="onScroll"&&Vt("scroll",i):V!=null&&L(i,_,V,b))}switch(l){case"input":It(i),tt(i,d,!1);break;case"textarea":It(i),se(i);break;case"option":d.value!=null&&i.setAttribute("value",""+Pe(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?F(i,!!d.multiple,_,!1):d.defaultValue!=null&&F(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Za)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Rn(s),null;case 6:if(i&&s.stateNode!=null)ym(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=es(jo.current),es(Fi.current),rl(s)){if(d=s.stateNode,l=s.memoizedProps,d[Ui]=s,(_=d.nodeValue!==l)&&(i=Zn,i!==null))switch(i.tag){case 3:Ka(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ka(d.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Ui]=s,s.stateNode=d}return Rn(s),null;case 13:if(Wt(Yt),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(jt&&Qn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ep(),Us(),s.flags|=98560,_=!1;else if(_=rl(s),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ui]=s}else Us(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Rn(s),_=!1}else vi!==null&&(sd(vi),vi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Yt.current&1)!==0?ln===0&&(ln=3):ld())),s.updateQueue!==null&&(s.flags|=4),Rn(s),null);case 4:return zs(),Yc(i,s),i===null&&zo(s.stateNode.containerInfo),Rn(s),null;case 10:return Ec(s.type._context),Rn(s),null;case 17:return Gn(s.type)&&Ja(),Rn(s),null;case 19:if(Wt(Yt),_=s.memoizedState,_===null)return Rn(s),null;if(d=(s.flags&128)!==0,b=_.rendering,b===null)if(d)Zo(_,!1);else{if(ln!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(b=cl(i),b!==null){for(s.flags|=128,Zo(_,!1),d=b.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)_=l,i=d,_.flags&=14680066,b=_.alternate,b===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=b.childLanes,_.lanes=b.lanes,_.child=b.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=b.memoizedProps,_.memoizedState=b.memoizedState,_.updateQueue=b.updateQueue,_.type=b.type,i=b.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ht(Yt,Yt.current&1|2),s.child}i=i.sibling}_.tail!==null&&J()>Vs&&(s.flags|=128,d=!0,Zo(_,!1),s.lanes=4194304)}else{if(!d)if(i=cl(b),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Zo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!jt)return Rn(s),null}else 2*J()-_.renderingStartTime>Vs&&l!==1073741824&&(s.flags|=128,d=!0,Zo(_,!1),s.lanes=4194304);_.isBackwards?(b.sibling=s.child,s.child=b):(l=_.last,l!==null?l.sibling=b:s.child=b,_.last=b)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=J(),s.sibling=null,l=Yt.current,Ht(Yt,d?l&1|2:l&1),s):(Rn(s),null);case 22:case 23:return ad(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(Jn&1073741824)!==0&&(Rn(s),s.subtreeFlags&6&&(s.flags|=8192)):Rn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function e0(i,s){switch(gc(s),s.tag){case 1:return Gn(s.type)&&Ja(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return zs(),Wt(Bn),Wt(bn),Cc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Ac(s),null;case 13:if(Wt(Yt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Us()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Wt(Yt),null;case 4:return zs(),null;case 10:return Ec(s.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var yl=!1,Cn=!1,t0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Gs(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Jt(i,s,d)}else l.current=null}function qc(i,s,l){try{l()}catch(d){Jt(i,s,d)}}var xm=!1;function n0(i,s){if(ac=za,i=Qf(),Ju(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var b=0,z=-1,V=-1,ae=0,we=0,Te=i,Ee=null;t:for(;;){for(var Be;Te!==l||p!==0&&Te.nodeType!==3||(z=b+p),Te!==_||d!==0&&Te.nodeType!==3||(V=b+d),Te.nodeType===3&&(b+=Te.nodeValue.length),(Be=Te.firstChild)!==null;)Ee=Te,Te=Be;for(;;){if(Te===i)break t;if(Ee===l&&++ae===p&&(z=b),Ee===_&&++we===d&&(V=b),(Be=Te.nextSibling)!==null)break;Te=Ee,Ee=Te.parentNode}Te=Be}l=z===-1||V===-1?null:{start:z,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(lc={focusedElem:i,selectionRange:l},za=!1,Ge=s;Ge!==null;)if(s=Ge,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ge=i;else for(;Ge!==null;){s=Ge;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,en=je.memoizedState,Q=s.stateNode,X=Q.getSnapshotBeforeUpdate(s.elementType===s.type?qe:_i(s.type,qe),en);Q.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ie=s.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Jt(s,s.return,Re)}if(i=s.sibling,i!==null){i.return=s.return,Ge=i;break}Ge=s.return}return je=xm,xm=!1,je}function Qo(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&qc(s,l,_)}p=p.next}while(p!==d)}}function xl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Kc(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Sm(i){var s=i.alternate;s!==null&&(i.alternate=null,Sm(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ui],delete s[Go],delete s[hc],delete s[Oy],delete s[zy])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Em(i){return i.tag===5||i.tag===3||i.tag===4}function Mm(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Em(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Zc(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Za));else if(d!==4&&(i=i.child,i!==null))for(Zc(i,s,l),i=i.sibling;i!==null;)Zc(i,s,l),i=i.sibling}function Qc(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Qc(i,s,l),i=i.sibling;i!==null;)Qc(i,s,l),i=i.sibling}var xn=null,yi=!1;function Rr(i,s,l){for(l=l.child;l!==null;)wm(i,s,l),l=l.sibling}function wm(i,s,l){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ot,l)}catch{}switch(l.tag){case 5:Cn||Gs(l,s);case 6:var d=xn,p=yi;xn=null,Rr(i,s,l),xn=d,yi=p,xn!==null&&(yi?(i=xn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):xn.removeChild(l.stateNode));break;case 18:xn!==null&&(yi?(i=xn,l=l.stateNode,i.nodeType===8?dc(i.parentNode,l):i.nodeType===1&&dc(i,l),Po(i)):dc(xn,l.stateNode));break;case 4:d=xn,p=yi,xn=l.stateNode.containerInfo,yi=!0,Rr(i,s,l),xn=d,yi=p;break;case 0:case 11:case 14:case 15:if(!Cn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,b=_.destroy;_=_.tag,b!==void 0&&((_&2)!==0||(_&4)!==0)&&qc(l,s,b),p=p.next}while(p!==d)}Rr(i,s,l);break;case 1:if(!Cn&&(Gs(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(z){Jt(l,s,z)}Rr(i,s,l);break;case 21:Rr(i,s,l);break;case 22:l.mode&1?(Cn=(d=Cn)||l.memoizedState!==null,Rr(i,s,l),Cn=d):Rr(i,s,l);break;default:Rr(i,s,l)}}function Tm(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new t0),s.forEach(function(d){var p=d0.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function xi(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var _=i,b=s,z=b;e:for(;z!==null;){switch(z.tag){case 5:xn=z.stateNode,yi=!1;break e;case 3:xn=z.stateNode.containerInfo,yi=!0;break e;case 4:xn=z.stateNode.containerInfo,yi=!0;break e}z=z.return}if(xn===null)throw Error(t(160));wm(_,b,p),xn=null,yi=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(ae){Jt(p,s,ae)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)bm(s,i),s=s.sibling}function bm(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(xi(s,i),Oi(i),d&4){try{Qo(3,i,i.return),xl(3,i)}catch(qe){Jt(i,i.return,qe)}try{Qo(5,i,i.return)}catch(qe){Jt(i,i.return,qe)}}break;case 1:xi(s,i),Oi(i),d&512&&l!==null&&Gs(l,l.return);break;case 5:if(xi(s,i),Oi(i),d&512&&l!==null&&Gs(l,l.return),i.flags&32){var p=i.stateNode;try{Xe(p,"")}catch(qe){Jt(i,i.return,qe)}}if(d&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,b=l!==null?l.memoizedProps:_,z=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&St(p,_),it(z,b);var ae=it(z,_);for(b=0;b<V.length;b+=2){var we=V[b],Te=V[b+1];we==="style"?et(p,Te):we==="dangerouslySetInnerHTML"?He(p,Te):we==="children"?Xe(p,Te):L(p,we,Te,ae)}switch(z){case"input":yt(p,_);break;case"textarea":k(p,_);break;case"select":var Ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Be=_.value;Be!=null?F(p,!!_.multiple,Be,!1):Ee!==!!_.multiple&&(_.defaultValue!=null?F(p,!!_.multiple,_.defaultValue,!0):F(p,!!_.multiple,_.multiple?[]:"",!1))}p[Go]=_}catch(qe){Jt(i,i.return,qe)}}break;case 6:if(xi(s,i),Oi(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(qe){Jt(i,i.return,qe)}}break;case 3:if(xi(s,i),Oi(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Po(s.containerInfo)}catch(qe){Jt(i,i.return,qe)}break;case 4:xi(s,i),Oi(i);break;case 13:xi(s,i),Oi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(td=J())),d&4&&Tm(i);break;case 22:if(we=l!==null&&l.memoizedState!==null,i.mode&1?(Cn=(ae=Cn)||we,xi(s,i),Cn=ae):xi(s,i),Oi(i),d&8192){if(ae=i.memoizedState!==null,(i.stateNode.isHidden=ae)&&!we&&(i.mode&1)!==0)for(Ge=i,we=i.child;we!==null;){for(Te=Ge=we;Ge!==null;){switch(Ee=Ge,Be=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Qo(4,Ee,Ee.return);break;case 1:Gs(Ee,Ee.return);var je=Ee.stateNode;if(typeof je.componentWillUnmount=="function"){d=Ee,l=Ee.return;try{s=d,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(qe){Jt(d,l,qe)}}break;case 5:Gs(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Cm(Te);continue}}Be!==null?(Be.return=Ee,Ge=Be):Cm(Te)}we=we.sibling}e:for(we=null,Te=i;;){if(Te.tag===5){if(we===null){we=Te;try{p=Te.stateNode,ae?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Te.stateNode,V=Te.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,z.style.display=Ke("display",b))}catch(qe){Jt(i,i.return,qe)}}}else if(Te.tag===6){if(we===null)try{Te.stateNode.nodeValue=ae?"":Te.memoizedProps}catch(qe){Jt(i,i.return,qe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===i)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===i)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===i)break e;we===Te&&(we=null),Te=Te.return}we===Te&&(we=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:xi(s,i),Oi(i),d&4&&Tm(i);break;case 21:break;default:xi(s,i),Oi(i)}}function Oi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(Em(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(Xe(p,""),d.flags&=-33);var _=Mm(i);Qc(i,_,p);break;case 3:case 4:var b=d.stateNode.containerInfo,z=Mm(i);Zc(i,z,b);break;default:throw Error(t(161))}}catch(V){Jt(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function i0(i,s,l){Ge=i,Am(i)}function Am(i,s,l){for(var d=(i.mode&1)!==0;Ge!==null;){var p=Ge,_=p.child;if(p.tag===22&&d){var b=p.memoizedState!==null||yl;if(!b){var z=p.alternate,V=z!==null&&z.memoizedState!==null||Cn;z=yl;var ae=Cn;if(yl=b,(Cn=V)&&!ae)for(Ge=p;Ge!==null;)b=Ge,V=b.child,b.tag===22&&b.memoizedState!==null?Pm(p):V!==null?(V.return=b,Ge=V):Pm(p);for(;_!==null;)Ge=_,Am(_),_=_.sibling;Ge=p,yl=z,Cn=ae}Rm(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Ge=_):Rm(i)}}function Rm(i){for(;Ge!==null;){var s=Ge;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Cn||xl(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Cn)if(l===null)d.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:_i(s.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Cp(s,_,d);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Cp(s,b,l)}break;case 5:var z=s.stateNode;if(l===null&&s.flags&4){l=z;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ae=s.alternate;if(ae!==null){var we=ae.memoizedState;if(we!==null){var Te=we.dehydrated;Te!==null&&Po(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||s.flags&512&&Kc(s)}catch(Ee){Jt(s,s.return,Ee)}}if(s===i){Ge=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ge=l;break}Ge=s.return}}function Cm(i){for(;Ge!==null;){var s=Ge;if(s===i){Ge=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ge=l;break}Ge=s.return}}function Pm(i){for(;Ge!==null;){var s=Ge;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{xl(4,s)}catch(V){Jt(s,l,V)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch(V){Jt(s,p,V)}}var _=s.return;try{Kc(s)}catch(V){Jt(s,_,V)}break;case 5:var b=s.return;try{Kc(s)}catch(V){Jt(s,b,V)}}}catch(V){Jt(s,s.return,V)}if(s===i){Ge=null;break}var z=s.sibling;if(z!==null){z.return=s.return,Ge=z;break}Ge=s.return}}var r0=Math.ceil,Sl=T.ReactCurrentDispatcher,Jc=T.ReactCurrentOwner,ai=T.ReactCurrentBatchConfig,Ct=0,gn=null,rn=null,Sn=0,Jn=0,Hs=Mr(0),ln=0,Jo=null,ns=0,El=0,ed=0,ea=null,Vn=null,td=0,Vs=1/0,Ki=null,Ml=!1,nd=null,Cr=null,wl=!1,Pr=null,Tl=0,ta=0,id=null,bl=-1,Al=0;function kn(){return(Ct&6)!==0?J():bl!==-1?bl:bl=J()}function Lr(i){return(i.mode&1)===0?1:(Ct&2)!==0&&Sn!==0?Sn&-Sn:Gy.transition!==null?(Al===0&&(Al=Bt()),Al):(i=Rt,i!==0||(i=window.event,i=i===void 0?16:Df(i.type)),i)}function Si(i,s,l,d){if(50<ta)throw ta=0,id=null,Error(t(185));fn(i,l,d),((Ct&2)===0||i!==gn)&&(i===gn&&((Ct&2)===0&&(El|=l),ln===4&&Dr(i,Sn)),Wn(i,d),l===1&&Ct===0&&(s.mode&1)===0&&(Vs=J()+500,tl&&Tr()))}function Wn(i,s){var l=i.callbackNode;Un(i,s);var d=wn(i,i===gn?Sn:0);if(d===0)l!==null&&R(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&R(l),s===1)i.tag===0?By(Dm.bind(null,i)):vp(Dm.bind(null,i)),Fy(function(){(Ct&6)===0&&Tr()}),l=null;else{switch(Ii(d)){case 1:l=be;break;case 4:l=Fe;break;case 16:l=ze;break;case 536870912:l=lt;break;default:l=ze}l=Bm(l,Lm.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Lm(i,s){if(bl=-1,Al=0,(Ct&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ws()&&i.callbackNode!==l)return null;var d=wn(i,i===gn?Sn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=Rl(i,d);else{s=d;var p=Ct;Ct|=2;var _=Im();(gn!==i||Sn!==s)&&(Ki=null,Vs=J()+500,rs(i,s));do try{a0();break}catch(z){Nm(i,z)}while(!0);Sc(),Sl.current=_,Ct=p,rn!==null?s=0:(gn=null,Sn=0,s=ln)}if(s!==0){if(s===2&&(p=Hi(i),p!==0&&(d=p,s=rd(i,p))),s===1)throw l=Jo,rs(i,0),Dr(i,d),Wn(i,J()),l;if(s===6)Dr(i,d);else{if(p=i.current.alternate,(d&30)===0&&!s0(p)&&(s=Rl(i,d),s===2&&(_=Hi(i),_!==0&&(d=_,s=rd(i,_))),s===1))throw l=Jo,rs(i,0),Dr(i,d),Wn(i,J()),l;switch(i.finishedWork=p,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:ss(i,Vn,Ki);break;case 3:if(Dr(i,d),(d&130023424)===d&&(s=td+500-J(),10<s)){if(wn(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){kn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=cc(ss.bind(null,i,Vn,Ki),s);break}ss(i,Vn,Ki);break;case 4:if(Dr(i,d),(d&4194240)===d)break;for(s=i.eventTimes,p=-1;0<d;){var b=31-mt(d);_=1<<b,b=s[b],b>p&&(p=b),d&=~_}if(d=p,d=J()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*r0(d/1960))-d,10<d){i.timeoutHandle=cc(ss.bind(null,i,Vn,Ki),d);break}ss(i,Vn,Ki);break;case 5:ss(i,Vn,Ki);break;default:throw Error(t(329))}}}return Wn(i,J()),i.callbackNode===l?Lm.bind(null,i):null}function rd(i,s){var l=ea;return i.current.memoizedState.isDehydrated&&(rs(i,s).flags|=256),i=Rl(i,s),i!==2&&(s=Vn,Vn=l,s!==null&&sd(s)),i}function sd(i){Vn===null?Vn=i:Vn.push.apply(Vn,i)}function s0(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],_=p.getSnapshot;p=p.value;try{if(!gi(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Dr(i,s){for(s&=~ed,s&=~El,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-mt(s),d=1<<l;i[l]=-1,s&=~d}}function Dm(i){if((Ct&6)!==0)throw Error(t(327));Ws();var s=wn(i,0);if((s&1)===0)return Wn(i,J()),null;var l=Rl(i,s);if(i.tag!==0&&l===2){var d=Hi(i);d!==0&&(s=d,l=rd(i,d))}if(l===1)throw l=Jo,rs(i,0),Dr(i,s),Wn(i,J()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ss(i,Vn,Ki),Wn(i,J()),null}function od(i,s){var l=Ct;Ct|=1;try{return i(s)}finally{Ct=l,Ct===0&&(Vs=J()+500,tl&&Tr())}}function is(i){Pr!==null&&Pr.tag===0&&(Ct&6)===0&&Ws();var s=Ct;Ct|=1;var l=ai.transition,d=Rt;try{if(ai.transition=null,Rt=1,i)return i()}finally{Rt=d,ai.transition=l,Ct=s,(Ct&6)===0&&Tr()}}function ad(){Jn=Hs.current,Wt(Hs)}function rs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,Uy(l)),rn!==null)for(l=rn.return;l!==null;){var d=l;switch(gc(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Ja();break;case 3:zs(),Wt(Bn),Wt(bn),Cc();break;case 5:Ac(d);break;case 4:zs();break;case 13:Wt(Yt);break;case 19:Wt(Yt);break;case 10:Ec(d.type._context);break;case 22:case 23:ad()}l=l.return}if(gn=i,rn=i=Nr(i.current,null),Sn=Jn=s,ln=0,Jo=null,ed=El=ns=0,Vn=ea=null,Jr!==null){for(s=0;s<Jr.length;s++)if(l=Jr[s],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,_=l.pending;if(_!==null){var b=_.next;_.next=p,d.next=b}l.pending=d}Jr=null}return i}function Nm(i,s){do{var l=rn;try{if(Sc(),dl.current=ml,hl){for(var d=qt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}hl=!1}if(ts=0,mn=an=qt=null,$o=!1,Yo=0,Jc.current=null,l===null||l.return===null){ln=1,Jo=s,rn=null;break}e:{var _=i,b=l.return,z=l,V=s;if(s=Sn,z.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ae=V,we=z,Te=we.tag;if((we.mode&1)===0&&(Te===0||Te===11||Te===15)){var Ee=we.alternate;Ee?(we.updateQueue=Ee.updateQueue,we.memoizedState=Ee.memoizedState,we.lanes=Ee.lanes):(we.updateQueue=null,we.memoizedState=null)}var Be=rm(b);if(Be!==null){Be.flags&=-257,sm(Be,b,z,_,s),Be.mode&1&&im(_,ae,s),s=Be,V=ae;var je=s.updateQueue;if(je===null){var qe=new Set;qe.add(V),s.updateQueue=qe}else je.add(V);break e}else{if((s&1)===0){im(_,ae,s),ld();break e}V=Error(t(426))}}else if(jt&&z.mode&1){var en=rm(b);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),sm(en,b,z,_,s),yc(Bs(V,z));break e}}_=V=Bs(V,z),ln!==4&&(ln=2),ea===null?ea=[_]:ea.push(_),_=b;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Q=tm(_,V,s);Rp(_,Q);break e;case 1:z=V;var X=_.type,ie=_.stateNode;if((_.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Cr===null||!Cr.has(ie)))){_.flags|=65536,s&=-s,_.lanes|=s;var Re=nm(_,z,s);Rp(_,Re);break e}}_=_.return}while(_!==null)}Fm(l)}catch(Je){s=Je,rn===l&&l!==null&&(rn=l=l.return);continue}break}while(!0)}function Im(){var i=Sl.current;return Sl.current=ml,i===null?ml:i}function ld(){(ln===0||ln===3||ln===2)&&(ln=4),gn===null||(ns&268435455)===0&&(El&268435455)===0||Dr(gn,Sn)}function Rl(i,s){var l=Ct;Ct|=2;var d=Im();(gn!==i||Sn!==s)&&(Ki=null,rs(i,s));do try{o0();break}catch(p){Nm(i,p)}while(!0);if(Sc(),Ct=l,Sl.current=d,rn!==null)throw Error(t(261));return gn=null,Sn=0,ln}function o0(){for(;rn!==null;)Um(rn)}function a0(){for(;rn!==null&&!$();)Um(rn)}function Um(i){var s=zm(i.alternate,i,Jn);i.memoizedProps=i.pendingProps,s===null?Fm(i):rn=s,Jc.current=null}function Fm(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=Jy(l,s,Jn),l!==null){rn=l;return}}else{if(l=e0(l,s),l!==null){l.flags&=32767,rn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{ln=6,rn=null;return}}if(s=s.sibling,s!==null){rn=s;return}rn=s=i}while(s!==null);ln===0&&(ln=5)}function ss(i,s,l){var d=Rt,p=ai.transition;try{ai.transition=null,Rt=1,l0(i,s,l,d)}finally{ai.transition=p,Rt=d}return null}function l0(i,s,l,d){do Ws();while(Pr!==null);if((Ct&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(yn(i,_),i===gn&&(rn=gn=null,Sn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||wl||(wl=!0,Bm(ze,function(){return Ws(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ai.transition,ai.transition=null;var b=Rt;Rt=1;var z=Ct;Ct|=4,Jc.current=null,n0(i,l),bm(l,i),Ry(lc),za=!!ac,lc=ac=null,i.current=l,i0(l),ue(),Ct=z,Rt=b,ai.transition=_}else i.current=l;if(wl&&(wl=!1,Pr=i,Tl=p),_=i.pendingLanes,_===0&&(Cr=null),Tt(l.stateNode),Wn(i,J()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(Ml)throw Ml=!1,i=nd,nd=null,i;return(Tl&1)!==0&&i.tag!==0&&Ws(),_=i.pendingLanes,(_&1)!==0?i===id?ta++:(ta=0,id=i):ta=0,Tr(),null}function Ws(){if(Pr!==null){var i=Ii(Tl),s=ai.transition,l=Rt;try{if(ai.transition=null,Rt=16>i?16:i,Pr===null)var d=!1;else{if(i=Pr,Pr=null,Tl=0,(Ct&6)!==0)throw Error(t(331));var p=Ct;for(Ct|=4,Ge=i.current;Ge!==null;){var _=Ge,b=_.child;if((Ge.flags&16)!==0){var z=_.deletions;if(z!==null){for(var V=0;V<z.length;V++){var ae=z[V];for(Ge=ae;Ge!==null;){var we=Ge;switch(we.tag){case 0:case 11:case 15:Qo(8,we,_)}var Te=we.child;if(Te!==null)Te.return=we,Ge=Te;else for(;Ge!==null;){we=Ge;var Ee=we.sibling,Be=we.return;if(Sm(we),we===ae){Ge=null;break}if(Ee!==null){Ee.return=Be,Ge=Ee;break}Ge=Be}}}var je=_.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var en=qe.sibling;qe.sibling=null,qe=en}while(qe!==null)}}Ge=_}}if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,Ge=b;else e:for(;Ge!==null;){if(_=Ge,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Qo(9,_,_.return)}var Q=_.sibling;if(Q!==null){Q.return=_.return,Ge=Q;break e}Ge=_.return}}var X=i.current;for(Ge=X;Ge!==null;){b=Ge;var ie=b.child;if((b.subtreeFlags&2064)!==0&&ie!==null)ie.return=b,Ge=ie;else e:for(b=X;Ge!==null;){if(z=Ge,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:xl(9,z)}}catch(Je){Jt(z,z.return,Je)}if(z===b){Ge=null;break e}var Re=z.sibling;if(Re!==null){Re.return=z.return,Ge=Re;break e}Ge=z.return}}if(Ct=p,Tr(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ot,i)}catch{}d=!0}return d}finally{Rt=l,ai.transition=s}}return!1}function km(i,s,l){s=Bs(l,s),s=tm(i,s,1),i=Ar(i,s,1),s=kn(),i!==null&&(fn(i,1,s),Wn(i,s))}function Jt(i,s,l){if(i.tag===3)km(i,i,l);else for(;s!==null;){if(s.tag===3){km(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Cr===null||!Cr.has(d))){i=Bs(l,i),i=nm(s,i,1),s=Ar(s,i,1),i=kn(),s!==null&&(fn(s,1,i),Wn(s,i));break}}s=s.return}}function u0(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=kn(),i.pingedLanes|=i.suspendedLanes&l,gn===i&&(Sn&l)===l&&(ln===4||ln===3&&(Sn&130023424)===Sn&&500>J()-td?rs(i,0):ed|=l),Wn(i,s)}function Om(i,s){s===0&&((i.mode&1)===0?s=1:(s=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var l=kn();i=$i(i,s),i!==null&&(fn(i,s,l),Wn(i,l))}function c0(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Om(i,l)}function d0(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Om(i,l)}var zm;zm=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Bn.current)Hn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Hn=!1,Qy(i,s,l);Hn=(i.flags&131072)!==0}else Hn=!1,jt&&(s.flags&1048576)!==0&&_p(s,il,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;_l(i,s),i=s.pendingProps;var p=Ds(s,bn.current);Os(s,l),p=Dc(null,s,d,i,p,l);var _=Nc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gn(d)?(_=!0,el(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Tc(s),p.updater=gl,s.stateNode=p,p._reactInternals=s,zc(s,d,i,l),s=Vc(null,s,d,!0,_,l)):(s.tag=0,jt&&_&&mc(s),Fn(null,s,p,l),s=s.child),s;case 16:d=s.elementType;e:{switch(_l(i,s),i=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=f0(d),i=_i(d,i),p){case 0:s=Hc(null,s,d,i,l);break e;case 1:s=dm(null,s,d,i,l);break e;case 11:s=om(null,s,d,i,l);break e;case 14:s=am(null,s,d,_i(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:_i(d,p),Hc(i,s,d,p,l);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:_i(d,p),dm(i,s,d,p,l);case 3:e:{if(hm(s),i===null)throw Error(t(387));d=s.pendingProps,_=s.memoizedState,p=_.element,Ap(i,s),ul(s,d,null,l);var b=s.memoizedState;if(d=b.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Bs(Error(t(423)),s),s=fm(i,s,d,l,p);break e}else if(d!==p){p=Bs(Error(t(424)),s),s=fm(i,s,d,l,p);break e}else for(Qn=Er(s.stateNode.containerInfo.firstChild),Zn=s,jt=!0,vi=null,l=Tp(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Us(),d===p){s=qi(i,s,l);break e}Fn(i,s,d,l)}s=s.child}return s;case 5:return Pp(s),i===null&&_c(s),d=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,b=p.children,uc(d,p)?b=null:_!==null&&uc(d,_)&&(s.flags|=32),cm(i,s),Fn(i,s,b,l),s.child;case 6:return i===null&&_c(s),null;case 13:return pm(i,s,l);case 4:return bc(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=Fs(s,null,d,l):Fn(i,s,d,l),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:_i(d,p),om(i,s,d,p,l);case 7:return Fn(i,s,s.pendingProps,l),s.child;case 8:return Fn(i,s,s.pendingProps.children,l),s.child;case 12:return Fn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,_=s.memoizedProps,b=p.value,Ht(ol,d._currentValue),d._currentValue=b,_!==null)if(gi(_.value,b)){if(_.children===p.children&&!Bn.current){s=qi(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var z=_.dependencies;if(z!==null){b=_.child;for(var V=z.firstContext;V!==null;){if(V.context===d){if(_.tag===1){V=Yi(-1,l&-l),V.tag=2;var ae=_.updateQueue;if(ae!==null){ae=ae.shared;var we=ae.pending;we===null?V.next=V:(V.next=we.next,we.next=V),ae.pending=V}}_.lanes|=l,V=_.alternate,V!==null&&(V.lanes|=l),Mc(_.return,l,s),z.lanes|=l;break}V=V.next}}else if(_.tag===10)b=_.type===s.type?null:_.child;else if(_.tag===18){if(b=_.return,b===null)throw Error(t(341));b.lanes|=l,z=b.alternate,z!==null&&(z.lanes|=l),Mc(b,l,s),b=_.sibling}else b=_.child;if(b!==null)b.return=_;else for(b=_;b!==null;){if(b===s){b=null;break}if(_=b.sibling,_!==null){_.return=b.return,b=_;break}b=b.return}_=b}Fn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,Os(s,l),p=si(p),d=d(p),s.flags|=1,Fn(i,s,d,l),s.child;case 14:return d=s.type,p=_i(d,s.pendingProps),p=_i(d.type,p),am(i,s,d,p,l);case 15:return lm(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:_i(d,p),_l(i,s),s.tag=1,Gn(d)?(i=!0,el(s)):i=!1,Os(s,l),Jp(s,d,p),zc(s,d,p,l),Vc(null,s,d,!0,i,l);case 19:return gm(i,s,l);case 22:return um(i,s,l)}throw Error(t(156,s.tag))};function Bm(i,s){return Fa(i,s)}function h0(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(i,s,l,d){return new h0(i,s,l,d)}function ud(i){return i=i.prototype,!(!i||!i.isReactComponent)}function f0(i){if(typeof i=="function")return ud(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Z)return 11;if(i===he)return 14}return 2}function Nr(i,s){var l=i.alternate;return l===null?(l=li(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Cl(i,s,l,d,p,_){var b=2;if(d=i,typeof i=="function")ud(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case D:return os(l.children,p,_,s);case B:b=8,p|=8;break;case C:return i=li(12,l,s,p|2),i.elementType=C,i.lanes=_,i;case te:return i=li(13,l,s,p),i.elementType=te,i.lanes=_,i;case oe:return i=li(19,l,s,p),i.elementType=oe,i.lanes=_,i;case me:return Pl(l,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case E:b=10;break e;case O:b=9;break e;case Z:b=11;break e;case he:b=14;break e;case de:b=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=li(b,l,s,p),s.elementType=i,s.type=d,s.lanes=_,s}function os(i,s,l,d){return i=li(7,i,d,s),i.lanes=l,i}function Pl(i,s,l,d){return i=li(22,i,d,s),i.elementType=me,i.lanes=l,i.stateNode={isHidden:!1},i}function cd(i,s,l){return i=li(6,i,null,s),i.lanes=l,i}function dd(i,s,l){return s=li(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function p0(i,s,l,d,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function hd(i,s,l,d,p,_,b,z,V){return i=new p0(i,s,l,z,V),s===1?(s=1,_===!0&&(s|=8)):s=0,_=li(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(_),i}function m0(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function Gm(i){if(!i)return wr;i=i._reactInternals;e:{if(Ni(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Gn(l))return mp(i,l,s)}return s}function Hm(i,s,l,d,p,_,b,z,V){return i=hd(l,d,!0,i,p,_,b,z,V),i.context=Gm(null),l=i.current,d=kn(),p=Lr(l),_=Yi(d,p),_.callback=s??null,Ar(l,_,p),i.current.lanes=p,fn(i,p,d),Wn(i,d),i}function Ll(i,s,l,d){var p=s.current,_=kn(),b=Lr(p);return l=Gm(l),s.context===null?s.context=l:s.pendingContext=l,s=Yi(_,b),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Ar(p,s,b),i!==null&&(Si(i,p,b,_),ll(i,p,b)),b}function Dl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Vm(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function fd(i,s){Vm(i,s),(i=i.alternate)&&Vm(i,s)}function g0(){return null}var Wm=typeof reportError=="function"?reportError:function(i){console.error(i)};function pd(i){this._internalRoot=i}Nl.prototype.render=pd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Ll(i,s,null,null)},Nl.prototype.unmount=pd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;is(function(){Ll(null,i,null,null)}),s[Vi]=null}};function Nl(i){this._internalRoot=i}Nl.prototype.unstable_scheduleHydration=function(i){if(i){var s=Af();i={blockedOn:null,target:i,priority:s};for(var l=0;l<yr.length&&s!==0&&s<yr[l].priority;l++);yr.splice(l,0,i),l===0&&Pf(i)}};function md(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Il(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Xm(){}function v0(i,s,l,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var ae=Dl(b);_.call(ae)}}var b=Hm(s,d,i,0,null,!1,!1,"",Xm);return i._reactRootContainer=b,i[Vi]=b.current,zo(i.nodeType===8?i.parentNode:i),is(),b}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var z=d;d=function(){var ae=Dl(V);z.call(ae)}}var V=hd(i,0,!1,null,null,!1,!1,"",Xm);return i._reactRootContainer=V,i[Vi]=V.current,zo(i.nodeType===8?i.parentNode:i),is(function(){Ll(s,V,l,d)}),V}function Ul(i,s,l,d,p){var _=l._reactRootContainer;if(_){var b=_;if(typeof p=="function"){var z=p;p=function(){var V=Dl(b);z.call(V)}}Ll(s,b,i,p)}else b=v0(l,s,i,p,d);return Dl(b)}Tf=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=wt(s.pendingLanes);l!==0&&(pn(s,l|1),Wn(s,J()),(Ct&6)===0&&(Vs=J()+500,Tr()))}break;case 13:is(function(){var d=$i(i,1);if(d!==null){var p=kn();Si(d,i,1,p)}}),fd(i,1)}},Bu=function(i){if(i.tag===13){var s=$i(i,134217728);if(s!==null){var l=kn();Si(s,i,134217728,l)}fd(i,134217728)}},bf=function(i){if(i.tag===13){var s=Lr(i),l=$i(i,s);if(l!==null){var d=kn();Si(l,i,s,d)}fd(i,s)}},Af=function(){return Rt},Rf=function(i,s){var l=Rt;try{return Rt=i,s()}finally{Rt=l}},Le=function(i,s,l){switch(s){case"input":if(yt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var p=Qa(d);if(!p)throw Error(t(90));Ut(d),yt(d,p)}}}break;case"textarea":k(i,l);break;case"select":s=l.value,s!=null&&F(i,!!l.multiple,s,!1)}},vt=od,zt=is;var _0={usingClientEntryPoint:!1,Events:[Ho,Ps,Qa,Ne,ut,od]},na={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},y0={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Ia(i),i===null?null:i.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||g0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{ot=Fl.inject(y0),Ye=Fl}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0,Xn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(s))throw Error(t(200));return m0(i,s,null,l)},Xn.createRoot=function(i,s){if(!md(i))throw Error(t(299));var l=!1,d="",p=Wm;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=hd(i,1,!1,null,null,l,!1,d,p),i[Vi]=s.current,zo(i.nodeType===8?i.parentNode:i),new pd(s)},Xn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Ia(s),i=i===null?null:i.stateNode,i},Xn.flushSync=function(i){return is(i)},Xn.hydrate=function(i,s,l){if(!Il(s))throw Error(t(200));return Ul(null,i,s,!0,l)},Xn.hydrateRoot=function(i,s,l){if(!md(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,_="",b=Wm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=Hm(s,null,i,1,l??null,p,!1,_,b),i[Vi]=s.current,zo(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Nl(s)},Xn.render=function(i,s,l){if(!Il(s))throw Error(t(200));return Ul(null,i,s,!1,l)},Xn.unmountComponentAtNode=function(i){if(!Il(i))throw Error(t(40));return i._reactRootContainer?(is(function(){Ul(null,null,i,!1,function(){i._reactRootContainer=null,i[Vi]=null})}),!0):!1},Xn.unstable_batchedUpdates=od,Xn.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!Il(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Ul(i,s,l,!1,d)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Jm;function R0(){if(Jm)return _d.exports;Jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),_d.exports=A0(),_d.exports}var eg;function C0(){if(eg)return kl;eg=1;var r=R0();return kl.createRoot=r.createRoot,kl.hydrateRoot=r.hydrateRoot,kl}var P0=C0();const L0=of(P0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lf="176",D0=0,tg=1,N0=2,Dv=1,I0=2,nr=3,jr=0,Yn=1,rr=2,Vr=0,uo=1,ng=2,ig=3,rg=4,U0=5,gs=100,F0=101,k0=102,O0=103,z0=104,B0=200,G0=201,H0=202,V0=203,ch=204,dh=205,W0=206,X0=207,j0=208,$0=209,Y0=210,q0=211,K0=212,Z0=213,Q0=214,hh=0,fh=1,ph=2,fo=3,mh=4,gh=5,vh=6,_h=7,Nv=0,J0=1,ex=2,Wr=0,tx=1,nx=2,ix=3,rx=4,sx=5,ox=6,ax=7,Iv=300,po=301,mo=302,yh=303,xh=304,Nu=306,Sh=1e3,_s=1001,Eh=1002,Pi=1003,lx=1004,Ol=1005,Gi=1006,Sd=1007,ys=1008,dr=1009,Uv=1010,Fv=1011,ya=1012,uf=1013,xs=1014,or=1015,Ma=1016,cf=1017,df=1018,xa=1020,kv=35902,Ov=1021,zv=1022,Ci=1023,Sa=1026,Ea=1027,Bv=1028,hf=1029,Gv=1030,ff=1031,pf=1033,xu=33776,Su=33777,Eu=33778,Mu=33779,Mh=35840,wh=35841,Th=35842,bh=35843,Ah=36196,Rh=37492,Ch=37496,Ph=37808,Lh=37809,Dh=37810,Nh=37811,Ih=37812,Uh=37813,Fh=37814,kh=37815,Oh=37816,zh=37817,Bh=37818,Gh=37819,Hh=37820,Vh=37821,wu=36492,Wh=36494,Xh=36495,Hv=36283,jh=36284,$h=36285,Yh=36286,ux=3200,cx=3201,dx=0,hx=1,Hr="",di="srgb",go="srgb-linear",Ru="linear",Ft="srgb",Xs=7680,sg=519,fx=512,px=513,mx=514,Vv=515,gx=516,vx=517,_x=518,yx=519,og=35044,ag="300 es",ar=2e3,Cu=2001;class xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=Math.PI/180,qh=180/Math.PI;function wa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function bt(r,e,t){return Math.max(e,Math.min(t,r))}function xx(r,e){return(r%e+e)%e}function Md(r,e,t){return(1-t)*r+t*e}function ra(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class kt{constructor(e=0,t=0){kt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*o+e.x,this.y=a*o+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,n,o,a,u,c,h,f){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,c,h,f)}set(e,t,n,o,a,u,c,h,f){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=a,m[5]=h,m[6]=n,m[7]=u,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],c=n[3],h=n[6],f=n[1],m=n[4],g=n[7],v=n[2],x=n[5],M=n[8],w=o[0],S=o[3],y=o[6],I=o[1],L=o[4],T=o[7],P=o[2],N=o[5],D=o[8];return a[0]=u*w+c*I+h*P,a[3]=u*S+c*L+h*N,a[6]=u*y+c*T+h*D,a[1]=f*w+m*I+g*P,a[4]=f*S+m*L+g*N,a[7]=f*y+m*T+g*D,a[2]=v*w+x*I+M*P,a[5]=v*S+x*L+M*N,a[8]=v*y+x*T+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8];return t*u*m-t*c*f-n*a*m+n*c*h+o*a*f-o*u*h}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=m*u-c*f,v=c*h-m*a,x=f*a-u*h,M=t*g+n*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(o*f-m*n)*w,e[2]=(c*n-o*u)*w,e[3]=v*w,e[4]=(m*t-o*h)*w,e[5]=(o*a-c*t)*w,e[6]=x*w,e[7]=(n*h-f*t)*w,e[8]=(u*t-n*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,u,c){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*u+f*c)+u+e,-o*f,o*h,-o*(-f*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(wd.makeScale(e,t)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,t){return this.premultiply(wd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new _t;function Wv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Pu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sx(){const r=Pu("canvas");return r.style.display="block",r}const lg={};function Tu(r){r in lg||(lg[r]=!0,console.warn(r))}function Ex(r,e,t){return new Promise(function(n,o){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Mx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ug=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cg=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tx(){const r={enabled:!0,workingColorSpace:go,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Ft&&(o.r=ur(o.r),o.g=ur(o.g),o.b=ur(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(o.r=co(o.r),o.g=co(o.g),o.b=co(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Hr?Ru:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[go]:{primaries:e,whitePoint:n,transfer:Ru,toXYZ:ug,fromXYZ:cg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:ug,fromXYZ:cg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),r}const Lt=Tx();function ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function co(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let js;class bx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{js===void 0&&(js=Pu("canvas")),js.width=e.width,js.height=e.height;const o=js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ur(a[u]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ax=0;class mf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=wa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Td(o[u].image)):a.push(Td(o[u]))}else a=Td(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function Td(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rx=0;class qn extends xo{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,n=_s,o=_s,a=Gi,u=ys,c=Ci,h=dr,f=qn.DEFAULT_ANISOTROPY,m=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=wa(),this.name="",this.source=new mf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case Eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case Eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Iv;qn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,n=0,o=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const h=e.elements,f=h[0],m=h[4],g=h[8],v=h[1],x=h[5],M=h[9],w=h[2],S=h[6],y=h[10];if(Math.abs(m-v)<.01&&Math.abs(g-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+w)<.1&&Math.abs(M+S)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,T=(x+1)/2,P=(y+1)/2,N=(m+v)/4,D=(g+w)/4,B=(M+S)/4;return L>T&&L>P?L<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(L),o=N/n,a=D/n):T>P?T<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(T),n=N/o,a=B/o):P<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(P),n=D/a,o=B/a),this.set(n,o,a,t),this}let I=Math.sqrt((S-M)*(S-M)+(g-w)*(g-w)+(v-m)*(v-m));return Math.abs(I)<.001&&(I=1),this.x=(S-M)/I,this.y=(g-w)/I,this.z=(v-m)/I,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cx extends xo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const o={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const a=new qn(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new mf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends Cx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xv extends qn{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Px extends qn{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,u,c){let h=n[o+0],f=n[o+1],m=n[o+2],g=n[o+3];const v=a[u+0],x=a[u+1],M=a[u+2],w=a[u+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=w;return}if(g!==w||h!==v||f!==x||m!==M){let S=1-c;const y=h*v+f*x+m*M+g*w,I=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const P=Math.sqrt(L),N=Math.atan2(P,y*I);S=Math.sin(S*N)/P,c=Math.sin(c*N)/P}const T=c*I;if(h=h*S+v*T,f=f*S+x*T,m=m*S+M*T,g=g*S+w*T,S===1-c){const P=1/Math.sqrt(h*h+f*f+m*m+g*g);h*=P,f*=P,m*=P,g*=P}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,o,a,u){const c=n[o],h=n[o+1],f=n[o+2],m=n[o+3],g=a[u],v=a[u+1],x=a[u+2],M=a[u+3];return e[t]=c*M+m*g+h*x-f*v,e[t+1]=h*M+m*v+f*g-c*x,e[t+2]=f*M+m*x+c*v-h*g,e[t+3]=m*M-c*g-h*v-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,h=Math.sin,f=c(n/2),m=c(o/2),g=c(a/2),v=h(n/2),x=h(o/2),M=h(a/2);switch(u){case"XYZ":this._x=v*m*g+f*x*M,this._y=f*x*g-v*m*M,this._z=f*m*M+v*x*g,this._w=f*m*g-v*x*M;break;case"YXZ":this._x=v*m*g+f*x*M,this._y=f*x*g-v*m*M,this._z=f*m*M-v*x*g,this._w=f*m*g+v*x*M;break;case"ZXY":this._x=v*m*g-f*x*M,this._y=f*x*g+v*m*M,this._z=f*m*M+v*x*g,this._w=f*m*g-v*x*M;break;case"ZYX":this._x=v*m*g-f*x*M,this._y=f*x*g+v*m*M,this._z=f*m*M-v*x*g,this._w=f*m*g+v*x*M;break;case"YZX":this._x=v*m*g+f*x*M,this._y=f*x*g+v*m*M,this._z=f*m*M-v*x*g,this._w=f*m*g-v*x*M;break;case"XZY":this._x=v*m*g-f*x*M,this._y=f*x*g-v*m*M,this._z=f*m*M+v*x*g,this._w=f*m*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],u=t[1],c=t[5],h=t[9],f=t[2],m=t[6],g=t[10],v=n+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-h)*x,this._y=(a-f)*x,this._z=(u-o)*x}else if(n>c&&n>g){const x=2*Math.sqrt(1+n-c-g);this._w=(m-h)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+f)/x}else if(c>g){const x=2*Math.sqrt(1+c-n-g);this._w=(a-f)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+g-n-c);this._w=(u-o)/x,this._x=(a+f)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,u=e._w,c=t._x,h=t._y,f=t._z,m=t._w;return this._x=n*m+u*c+o*f-a*h,this._y=o*m+u*h+a*c-n*f,this._z=a*m+u*f+n*h-o*c,this._w=u*m-n*c-o*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=o,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*n+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(h),m=Math.atan2(f,c),g=Math.sin((1-t)*m)/f,v=Math.sin(t*m)/f;return this._w=u*g+this._w*v,this._x=n*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,t=0,n=0){ce.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,u=e.y,c=e.z,h=e.w,f=2*(u*o-c*n),m=2*(c*t-a*o),g=2*(a*n-u*t);return this.x=t+h*f+u*g-c*m,this.y=n+h*m+c*f-a*g,this.z=o+h*g+a*m-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,u=t.x,c=t.y,h=t.z;return this.x=o*h-a*c,this.y=a*u-n*h,this.z=n*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bd.copy(this).projectOnVector(e),this.sub(bd)}reflect(e){return this.sub(bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bd=new ce,dg=new Ta;class ba{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(a,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zl.copy(n.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Bl.subVectors(this.max,sa),$s.subVectors(e.a,sa),Ys.subVectors(e.b,sa),qs.subVectors(e.c,sa),Ur.subVectors(Ys,$s),Fr.subVectors(qs,Ys),as.subVectors($s,qs);let t=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-as.z,as.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,as.z,0,-as.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-as.y,as.x,0];return!Ad(t,$s,Ys,qs,Bl)||(t=[1,0,0,0,1,0,0,0,1],!Ad(t,$s,Ys,qs,Bl))?!1:(Gl.crossVectors(Ur,Fr),t=[Gl.x,Gl.y,Gl.z],Ad(t,$s,Ys,qs,Bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Ei=new ce,zl=new ba,$s=new ce,Ys=new ce,qs=new ce,Ur=new ce,Fr=new ce,as=new ce,sa=new ce,Bl=new ce,Gl=new ce,ls=new ce;function Ad(r,e,t,n,o){for(let a=0,u=r.length-3;a<=u;a+=3){ls.fromArray(r,a);const c=o.x*Math.abs(ls.x)+o.y*Math.abs(ls.y)+o.z*Math.abs(ls.z),h=e.dot(ls),f=t.dot(ls),m=n.dot(ls);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>c)return!1}return!0}const Lx=new ba,oa=new ce,Rd=new ce;class Aa{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lx.setFromPoints(e).getCenter(n);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(oa,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Rd)),this.expandByPoint(oa.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new ce,Cd=new ce,Hl=new ce,kr=new ce,Pd=new ce,Vl=new ce,Ld=new ce;class Iu{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Cd.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(Cd);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Hl),c=kr.dot(this.direction),h=-kr.dot(Hl),f=kr.lengthSq(),m=Math.abs(1-u*u);let g,v,x,M;if(m>0)if(g=u*h-c,v=u*c-h,M=a*m,g>=0)if(v>=-M)if(v<=M){const w=1/m;g*=w,v*=w,x=g*(g+u*v+2*c)+v*(u*g+v+2*h)+f}else v=a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v=-a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v<=-M?(g=Math.max(0,-(-u*a+c)),v=g>0?-a:Math.min(Math.max(-a,-h),a),x=-g*g+v*(v+2*h)+f):v<=M?(g=0,v=Math.min(Math.max(-a,-h),a),x=v*(v+2*h)+f):(g=Math.max(0,-(u*a+c)),v=g>0?a:Math.min(Math.max(-a,-h),a),x=-g*g+v*(v+2*h)+f);else v=u>0?-a:a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Cd).addScaledVector(Hl,v),x}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const n=Qi.dot(this.direction),o=Qi.dot(Qi)-n*n,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=n-u,h=n+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,u,c,h;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,o=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,o=(e.min.x-v.x)*f),m>=0?(a=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),n>u||a>o||((a>n||isNaN(n))&&(n=a),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),n>h||c>o)||((c>n||n!==n)&&(n=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,n,o,a){Pd.subVectors(t,e),Vl.subVectors(n,e),Ld.crossVectors(Pd,Vl);let u=this.direction.dot(Ld),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;kr.subVectors(this.origin,e);const h=c*this.direction.dot(Vl.crossVectors(kr,Vl));if(h<0)return null;const f=c*this.direction.dot(Pd.cross(kr));if(f<0||h+f>u)return null;const m=-c*kr.dot(Ld);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,n,o,a,u,c,h,f,m,g,v,x,M,w,S){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,c,h,f,m,g,v,x,M,w,S)}set(e,t,n,o,a,u,c,h,f,m,g,v,x,M,w,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=o,y[1]=a,y[5]=u,y[9]=c,y[13]=h,y[2]=f,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),a=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),h=Math.cos(o),f=Math.sin(o),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=u*m,x=u*g,M=c*m,w=c*g;t[0]=h*m,t[4]=-h*g,t[8]=f,t[1]=x+M*f,t[5]=v-w*f,t[9]=-c*h,t[2]=w-v*f,t[6]=M+x*f,t[10]=u*h}else if(e.order==="YXZ"){const v=h*m,x=h*g,M=f*m,w=f*g;t[0]=v+w*c,t[4]=M*c-x,t[8]=u*f,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-M,t[6]=w+v*c,t[10]=u*h}else if(e.order==="ZXY"){const v=h*m,x=h*g,M=f*m,w=f*g;t[0]=v-w*c,t[4]=-u*g,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*m,t[9]=w-v*c,t[2]=-u*f,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const v=u*m,x=u*g,M=c*m,w=c*g;t[0]=h*m,t[4]=M*f-x,t[8]=v*f+w,t[1]=h*g,t[5]=w*f+v,t[9]=x*f-M,t[2]=-f,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,x=u*f,M=c*h,w=c*f;t[0]=h*m,t[4]=w-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-f*m,t[6]=x*g+M,t[10]=v-w*g}else if(e.order==="XZY"){const v=u*h,x=u*f,M=c*h,w=c*f;t[0]=h*m,t[4]=-g,t[8]=f*m,t[1]=v*g+w,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=c*m,t[10]=w*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dx,e,Nx)}lookAt(e,t,n){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Or.crossVectors(n,ei),Or.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Or.crossVectors(n,ei)),Or.normalize(),Wl.crossVectors(ei,Or),o[0]=Or.x,o[4]=Wl.x,o[8]=ei.x,o[1]=Or.y,o[5]=Wl.y,o[9]=ei.y,o[2]=Or.z,o[6]=Wl.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],c=n[4],h=n[8],f=n[12],m=n[1],g=n[5],v=n[9],x=n[13],M=n[2],w=n[6],S=n[10],y=n[14],I=n[3],L=n[7],T=n[11],P=n[15],N=o[0],D=o[4],B=o[8],C=o[12],E=o[1],O=o[5],Z=o[9],te=o[13],oe=o[2],he=o[6],de=o[10],me=o[14],G=o[3],pe=o[7],le=o[11],U=o[15];return a[0]=u*N+c*E+h*oe+f*G,a[4]=u*D+c*O+h*he+f*pe,a[8]=u*B+c*Z+h*de+f*le,a[12]=u*C+c*te+h*me+f*U,a[1]=m*N+g*E+v*oe+x*G,a[5]=m*D+g*O+v*he+x*pe,a[9]=m*B+g*Z+v*de+x*le,a[13]=m*C+g*te+v*me+x*U,a[2]=M*N+w*E+S*oe+y*G,a[6]=M*D+w*O+S*he+y*pe,a[10]=M*B+w*Z+S*de+y*le,a[14]=M*C+w*te+S*me+y*U,a[3]=I*N+L*E+T*oe+P*G,a[7]=I*D+L*O+T*he+P*pe,a[11]=I*B+L*Z+T*de+P*le,a[15]=I*C+L*te+T*me+P*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],u=e[1],c=e[5],h=e[9],f=e[13],m=e[2],g=e[6],v=e[10],x=e[14],M=e[3],w=e[7],S=e[11],y=e[15];return M*(+a*h*g-o*f*g-a*c*v+n*f*v+o*c*x-n*h*x)+w*(+t*h*x-t*f*v+a*u*v-o*u*x+o*f*m-a*h*m)+S*(+t*f*g-t*c*x-a*u*g+n*u*x+a*c*m-n*f*m)+y*(-o*c*m-t*h*g+t*c*v+o*u*g-n*u*v+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=e[9],v=e[10],x=e[11],M=e[12],w=e[13],S=e[14],y=e[15],I=g*S*f-w*v*f+w*h*x-c*S*x-g*h*y+c*v*y,L=M*v*f-m*S*f-M*h*x+u*S*x+m*h*y-u*v*y,T=m*w*f-M*g*f+M*c*x-u*w*x-m*c*y+u*g*y,P=M*g*h-m*w*h-M*c*v+u*w*v+m*c*S-u*g*S,N=t*I+n*L+o*T+a*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=I*D,e[1]=(w*v*a-g*S*a-w*o*x+n*S*x+g*o*y-n*v*y)*D,e[2]=(c*S*a-w*h*a+w*o*f-n*S*f-c*o*y+n*h*y)*D,e[3]=(g*h*a-c*v*a-g*o*f+n*v*f+c*o*x-n*h*x)*D,e[4]=L*D,e[5]=(m*S*a-M*v*a+M*o*x-t*S*x-m*o*y+t*v*y)*D,e[6]=(M*h*a-u*S*a-M*o*f+t*S*f+u*o*y-t*h*y)*D,e[7]=(u*v*a-m*h*a+m*o*f-t*v*f-u*o*x+t*h*x)*D,e[8]=T*D,e[9]=(M*g*a-m*w*a-M*n*x+t*w*x+m*n*y-t*g*y)*D,e[10]=(u*w*a-M*c*a+M*n*f-t*w*f-u*n*y+t*c*y)*D,e[11]=(m*c*a-u*g*a-m*n*f+t*g*f+u*n*x-t*c*x)*D,e[12]=P*D,e[13]=(m*w*o-M*g*o+M*n*v-t*w*v-m*n*S+t*g*S)*D,e[14]=(M*c*o-u*w*o-M*n*h+t*w*h+u*n*S-t*c*S)*D,e[15]=(u*g*o-m*c*o+m*n*h-t*g*h-u*n*v+t*c*v)*D,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,u=e.x,c=e.y,h=e.z,f=a*u,m=a*c;return this.set(f*u+n,f*c-o*h,f*h+o*c,0,f*c+o*h,m*c+n,m*h-o*u,0,f*h-o*c,m*h+o*u,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,u){return this.set(1,n,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,u=t._y,c=t._z,h=t._w,f=a+a,m=u+u,g=c+c,v=a*f,x=a*m,M=a*g,w=u*m,S=u*g,y=c*g,I=h*f,L=h*m,T=h*g,P=n.x,N=n.y,D=n.z;return o[0]=(1-(w+y))*P,o[1]=(x+T)*P,o[2]=(M-L)*P,o[3]=0,o[4]=(x-T)*N,o[5]=(1-(v+y))*N,o[6]=(S+I)*N,o[7]=0,o[8]=(M+L)*D,o[9]=(S-I)*D,o[10]=(1-(v+w))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=Ks.set(o[0],o[1],o[2]).length();const u=Ks.set(o[4],o[5],o[6]).length(),c=Ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],Mi.copy(this);const f=1/a,m=1/u,g=1/c;return Mi.elements[0]*=f,Mi.elements[1]*=f,Mi.elements[2]*=f,Mi.elements[4]*=m,Mi.elements[5]*=m,Mi.elements[6]*=m,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,t.setFromRotationMatrix(Mi),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,o,a,u,c=ar){const h=this.elements,f=2*a/(t-e),m=2*a/(n-o),g=(t+e)/(t-e),v=(n+o)/(n-o);let x,M;if(c===ar)x=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===Cu)x=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,o,a,u,c=ar){const h=this.elements,f=1/(t-e),m=1/(n-o),g=1/(u-a),v=(t+e)*f,x=(n+o)*m;let M,w;if(c===ar)M=(u+a)*g,w=-2*g;else if(c===Cu)M=a*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=w,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ks=new ce,Mi=new Kt,Dx=new ce(0,0,0),Nx=new ce(1,1,1),Or=new ce,Wl=new ce,ei=new ce,hg=new Kt,fg=new Ta;class hr{constructor(e=0,t=0,n=0,o=hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],h=o[1],f=o[5],m=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hr.DEFAULT_ORDER="XYZ";class gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ix=0;const pg=new ce,Zs=new Ta,Ji=new Kt,Xl=new ce,aa=new ce,Ux=new ce,Fx=new Ta,mg=new ce(1,0,0),gg=new ce(0,1,0),vg=new ce(0,0,1),_g={type:"added"},kx={type:"removed"},Qs={type:"childadded",child:null},Dd={type:"childremoved",child:null};class Dn extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ce,t=new hr,n=new Ta,o=new ce(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new _t}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(vg,e)}translateOnAxis(e,t){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xl.copy(e):Xl.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(aa,Xl,this.up):Ji.lookAt(Xl,aa,this.up),this.quaternion.setFromRotationMatrix(Ji),o&&(Ji.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_g),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kx),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_g),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,Ux),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,Fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const g=h[f];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(a(e.materials,this.material[h]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(a(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),f=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),M.length>0&&(n.nodes=M)}return n.object=o,n;function u(c){const h=[];for(const f in c){const m=c[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}Dn.DEFAULT_UP=new ce(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new ce,er=new ce,Nd=new ce,tr=new ce,Js=new ce,eo=new ce,yg=new ce,Id=new ce,Ud=new ce,Fd=new ce,kd=new tn,Od=new tn,zd=new tn;class Ai{constructor(e=new ce,t=new ce,n=new ce){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),wi.subVectors(e,t),o.cross(wi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){wi.subVectors(o,t),er.subVectors(n,t),Nd.subVectors(e,t);const u=wi.dot(wi),c=wi.dot(er),h=wi.dot(Nd),f=er.dot(er),m=er.dot(Nd),g=u*f-c*c;if(g===0)return a.set(0,0,0),null;const v=1/g,x=(f*h-c*m)*v,M=(u*m-c*h)*v;return a.set(1-x-M,M,x)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,n,o,a,u,c,h){return this.getBarycoord(e,t,n,o,tr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,tr.x),h.addScaledVector(u,tr.y),h.addScaledVector(c,tr.z),h)}static getInterpolatedAttribute(e,t,n,o,a,u){return kd.setScalar(0),Od.setScalar(0),zd.setScalar(0),kd.fromBufferAttribute(e,t),Od.fromBufferAttribute(e,n),zd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(kd,a.x),u.addScaledVector(Od,a.y),u.addScaledVector(zd,a.z),u}static isFrontFacing(e,t,n,o){return wi.subVectors(n,t),er.subVectors(e,t),wi.cross(er).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),wi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,a){return Ai.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let u,c;Js.subVectors(o,n),eo.subVectors(a,n),Id.subVectors(e,n);const h=Js.dot(Id),f=eo.dot(Id);if(h<=0&&f<=0)return t.copy(n);Ud.subVectors(e,o);const m=Js.dot(Ud),g=eo.dot(Ud);if(m>=0&&g<=m)return t.copy(o);const v=h*g-m*f;if(v<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(n).addScaledVector(Js,u);Fd.subVectors(e,a);const x=Js.dot(Fd),M=eo.dot(Fd);if(M>=0&&x<=M)return t.copy(a);const w=x*f-h*M;if(w<=0&&f>=0&&M<=0)return c=f/(f-M),t.copy(n).addScaledVector(eo,c);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return yg.subVectors(a,o),c=(g-m)/(g-m+(x-M)),t.copy(o).addScaledVector(yg,c);const y=1/(S+w+v);return u=w*y,c=v*y,t.copy(n).addScaledVector(Js,u).addScaledVector(eo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Bd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=Lt.workingColorSpace){if(e=xx(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Bd(u,a,e+1/3),this.g=Bd(u,a,e),this.b=Bd(u,a,e-1/3)}return Lt.toWorkingColorSpace(this,o),this}setStyle(e,t=di){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const n=jv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Lt.fromWorkingColorSpace(Ln.copy(this),e),Math.round(bt(Ln.r*255,0,255))*65536+Math.round(bt(Ln.g*255,0,255))*256+Math.round(bt(Ln.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Ln.copy(this),t);const n=Ln.r,o=Ln.g,a=Ln.b,u=Math.max(n,o,a),c=Math.min(n,o,a);let h,f;const m=(c+u)/2;if(c===u)h=0,f=0;else{const g=u-c;switch(f=m<=.5?g/(u+c):g/(2-u-c),u){case n:h=(o-a)/g+(o<a?6:0);break;case o:h=(a-n)/g+2;break;case a:h=(n-o)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=di){Lt.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,o=Ln.b;return e!==di?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(jl);const n=Md(zr.h,jl.h,t),o=Md(zr.s,jl.s,t),a=Md(zr.l,jl.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Dt;Dt.NAMES=jv;let Ox=0;class So extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=uo,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=dh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(n.blending=this.blending),this.side!==jr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ch&&(n.blendSrc=this.blendSrc),this.blendDst!==dh&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $v extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=Nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new ce,$l=new kt;let zx=0;class ni{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=og,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ra(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array),o=jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array),o=jn(o,this.array),a=jn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==og&&(e.usage=this.usage),e}}class Yv extends ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qv extends ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xr extends ni{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bx=0;const ui=new Kt,Gd=new Dn,to=new ce,ti=new ba,la=new ba,_n=new ce;class Li extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wv(e)?qv:Yv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new _t().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return Gd.lookAt(e),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xr(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];la.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(ti.min,la.min),ti.expandByPoint(_n),_n.addVectors(ti.max,la.max),ti.expandByPoint(_n)):(ti.expandByPoint(la.min),ti.expandByPoint(la.max))}ti.getCenter(n);let o=0;for(let a=0,u=e.count;a<u;a++)_n.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(_n));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],h=this.morphTargetsRelative;for(let f=0,m=c.count;f<m;f++)_n.fromBufferAttribute(c,f),h&&(to.fromBufferAttribute(e,f),_n.add(to)),o=Math.max(o,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let B=0;B<n.count;B++)c[B]=new ce,h[B]=new ce;const f=new ce,m=new ce,g=new ce,v=new kt,x=new kt,M=new kt,w=new ce,S=new ce;function y(B,C,E){f.fromBufferAttribute(n,B),m.fromBufferAttribute(n,C),g.fromBufferAttribute(n,E),v.fromBufferAttribute(a,B),x.fromBufferAttribute(a,C),M.fromBufferAttribute(a,E),m.sub(f),g.sub(f),x.sub(v),M.sub(v);const O=1/(x.x*M.y-M.x*x.y);isFinite(O)&&(w.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(O),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(O),c[B].add(w),c[C].add(w),c[E].add(w),h[B].add(S),h[C].add(S),h[E].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let B=0,C=I.length;B<C;++B){const E=I[B],O=E.start,Z=E.count;for(let te=O,oe=O+Z;te<oe;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new ce,T=new ce,P=new ce,N=new ce;function D(B){P.fromBufferAttribute(o,B),N.copy(P);const C=c[B];L.copy(C),L.sub(P.multiplyScalar(P.dot(C))).normalize(),T.crossVectors(N,C);const O=T.dot(h[B])<0?-1:1;u.setXYZW(B,L.x,L.y,L.z,O)}for(let B=0,C=I.length;B<C;++B){const E=I[B],O=E.start,Z=E.count;for(let te=O,oe=O+Z;te<oe;te+=3)D(e.getX(te+0)),D(e.getX(te+1)),D(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const o=new ce,a=new ce,u=new ce,c=new ce,h=new ce,f=new ce,m=new ce,g=new ce;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),w=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,w),u.fromBufferAttribute(t,S),m.subVectors(u,a),g.subVectors(o,a),m.cross(g),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,S),c.add(m),h.add(m),f.add(m),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,a),g.subVectors(o,a),m.cross(g),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(c,h){const f=c.array,m=c.itemSize,g=c.normalized,v=new f.constructor(h.length*m);let x=0,M=0;for(let w=0,S=h.length;w<S;w++){c.isInterleavedBufferAttribute?x=h[w]*c.data.stride+c.offset:x=h[w]*m;for(let y=0;y<m;y++)v[M++]=f[x++]}return new ni(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Li,n=this.index.array,o=this.attributes;for(const c in o){const h=o[c],f=e(h,n);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const h=[],f=a[c];for(let m=0,g=f.length;m<g;m++){const v=f[m],x=e(v,n);h.push(x)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let g=0,v=f.length;g<v;g++){const x=f[g];m.push(x.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const f in o){const m=o[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],g=a[f];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,m=u.length;f<m;f++){const g=u[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xg=new Kt,us=new Iu,Yl=new Aa,Sg=new ce,ql=new ce,Kl=new ce,Zl=new ce,Hd=new ce,Ql=new ce,Eg=new ce,Jl=new ce;class lr extends Dn{constructor(e=new Li,t=new $v){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Ql.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const m=c[h],g=a[h];m!==0&&(Hd.fromBufferAttribute(g,e),u?Ql.addScaledVector(Hd,m):Ql.addScaledVector(Hd.sub(t),m))}t.add(Ql)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(a),us.copy(e.ray).recast(e.near),!(Yl.containsPoint(us.origin)===!1&&(us.intersectSphere(Yl,Sg)===null||us.origin.distanceToSquared(Sg)>(e.far-e.near)**2))&&(xg.copy(a).invert(),us.copy(e.ray).applyMatrix4(xg),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let o;const a=this.geometry,u=this.material,c=a.index,h=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const S=v[M],y=u[S.materialIndex],I=Math.max(S.start,x.start),L=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let T=I,P=L;T<P;T+=3){const N=c.getX(T),D=c.getX(T+1),B=c.getX(T+2);o=eu(this,y,e,n,f,m,g,N,D,B),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(c.count,x.start+x.count);for(let S=M,y=w;S<y;S+=3){const I=c.getX(S),L=c.getX(S+1),T=c.getX(S+2);o=eu(this,u,e,n,f,m,g,I,L,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const S=v[M],y=u[S.materialIndex],I=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let T=I,P=L;T<P;T+=3){const N=T,D=T+1,B=T+2;o=eu(this,y,e,n,f,m,g,N,D,B),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let S=M,y=w;S<y;S+=3){const I=S,L=S+1,T=S+2;o=eu(this,u,e,n,f,m,g,I,L,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Gx(r,e,t,n,o,a,u,c){let h;if(e.side===Yn?h=n.intersectTriangle(u,a,o,!0,c):h=n.intersectTriangle(o,a,u,e.side===jr,c),h===null)return null;Jl.copy(c),Jl.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(Jl);return f<t.near||f>t.far?null:{distance:f,point:Jl.clone(),object:r}}function eu(r,e,t,n,o,a,u,c,h,f){r.getVertexPosition(c,ql),r.getVertexPosition(h,Kl),r.getVertexPosition(f,Zl);const m=Gx(r,e,t,n,ql,Kl,Zl,Eg);if(m){const g=new ce;Ai.getBarycoord(Eg,ql,Kl,Zl,g),o&&(m.uv=Ai.getInterpolatedAttribute(o,c,h,f,g,new kt)),a&&(m.uv1=Ai.getInterpolatedAttribute(a,c,h,f,g,new kt)),u&&(m.normal=Ai.getInterpolatedAttribute(u,c,h,f,g,new ce),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:h,c:f,normal:new ce,materialIndex:0};Ai.getNormal(ql,Kl,Zl,v.normal),m.face=v,m.barycoord=g}return m}class Ra extends Li{constructor(e=1,t=1,n=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const h=[],f=[],m=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,n,t,e,u,a,0),M("z","y","x",1,-1,n,t,-e,u,a,1),M("x","z","y",1,1,e,n,t,o,u,2),M("x","z","y",1,-1,e,n,-t,o,u,3),M("x","y","z",1,-1,e,t,n,o,a,4),M("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(h),this.setAttribute("position",new Xr(f,3)),this.setAttribute("normal",new Xr(m,3)),this.setAttribute("uv",new Xr(g,2));function M(w,S,y,I,L,T,P,N,D,B,C){const E=T/D,O=P/B,Z=T/2,te=P/2,oe=N/2,he=D+1,de=B+1;let me=0,G=0;const pe=new ce;for(let le=0;le<de;le++){const U=le*O-te;for(let Y=0;Y<he;Y++){const Ae=Y*E-Z;pe[w]=Ae*I,pe[S]=U*L,pe[y]=oe,f.push(pe.x,pe.y,pe.z),pe[w]=0,pe[S]=0,pe[y]=N>0?1:-1,m.push(pe.x,pe.y,pe.z),g.push(Y/D),g.push(1-le/B),me+=1}}for(let le=0;le<B;le++)for(let U=0;U<D;U++){const Y=v+U+he*le,Ae=v+U+he*(le+1),W=v+(U+1)+he*(le+1),ge=v+(U+1)+he*le;h.push(Y,Ae,ge),h.push(Ae,W,ge),G+=6}c.addGroup(x,G,C),x+=G,v+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const o=r[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function On(r){const e={};for(let t=0;t<r.length;t++){const n=vo(r[t]);for(const o in n)e[o]=n[o]}return e}function Hx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Kv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Vx={clone:vo,merge:On};var Wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wx,this.fragmentShader=Xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=Hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Zv=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Br=new ce,Mg=new kt,wg=new kt;class hi extends Zv{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,Mg,wg),t.subVectors(wg,Mg)}setViewOffset(e,t,n,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ed*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,f=u.fullHeight;a+=u.offsetX*o/h,t-=u.offsetY*n/f,o*=u.width/h,n*=u.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class jx extends Dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(no,io,e,t);o.layers=this.layers,this.add(o);const a=new hi(no,io,e,t);a.layers=this.layers,this.add(a);const u=new hi(no,io,e,t);u.layers=this.layers,this.add(u);const c=new hi(no,io,e,t);c.layers=this.layers,this.add(c);const h=new hi(no,io,e,t);h.layers=this.layers,this.add(h);const f=new hi(no,io,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,a,u,c,h]=t;for(const f of t)this.remove(f);if(e===ar)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Cu)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,h,f,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,o),e.render(t,a),e.setRenderTarget(n,1,o),e.render(t,u),e.setRenderTarget(n,2,o),e.render(t,c),e.setRenderTarget(n,3,o),e.render(t,h),e.setRenderTarget(n,4,o),e.render(t,f),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,o),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Qv extends qn{constructor(e=[],t=po,n,o,a,u,c,h,f,m){super(e,t,n,o,a,u,c,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $x extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Qv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ra(5,5,5),a=new $r({name:"CubemapFromEquirect",uniforms:vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:Vr});a.uniforms.tEquirect.value=t;const u=new lr(o,a),c=t.minFilter;return t.minFilter===ys&&(t.minFilter=Gi),new jx(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,o);e.setRenderTarget(a)}}class tu extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yx={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,u=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,n),y=this._getHandJoint(f,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,M=.005;f.inputState.pinching&&v>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tu;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qx extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wd=new ce,Kx=new ce,Zx=new _t;class ps{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Wd.subVectors(n,t).cross(Kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wd),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zx.getNormalMatrix(e),o=this.coplanarPoint(Wd).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Aa,nu=new ce;class Jv{constructor(e=new ps,t=new ps,n=new ps,o=new ps,a=new ps,u=new ps){this.planes=[e,t,n,o,a,u]}set(e,t,n,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ar){const n=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],h=o[3],f=o[4],m=o[5],g=o[6],v=o[7],x=o[8],M=o[9],w=o[10],S=o[11],y=o[12],I=o[13],L=o[14],T=o[15];if(n[0].setComponents(h-a,v-f,S-x,T-y).normalize(),n[1].setComponents(h+a,v+f,S+x,T+y).normalize(),n[2].setComponents(h+u,v+m,S+M,T+I).normalize(),n[3].setComponents(h-u,v-m,S-M,T-I).normalize(),n[4].setComponents(h-c,v-g,S-w,T-L).normalize(),t===ar)n[5].setComponents(h+c,v+g,S+w,T+L).normalize();else if(t===Cu)n[5].setComponents(c,g,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(nu.x=o.normal.x>0?e.max.x:e.min.x,nu.y=o.normal.y>0?e.max.y:e.min.y,nu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(nu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class e_ extends So{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lu=new ce,Du=new ce,Tg=new Kt,ua=new Iu,iu=new Aa,Xd=new ce,bg=new ce;class Qx extends Dn{constructor(e=new Li,t=new e_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,a=t.count;o<a;o++)Lu.fromBufferAttribute(t,o-1),Du.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=Lu.distanceTo(Du);e.setAttribute("lineDistance",new Xr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),iu.copy(n.boundingSphere),iu.applyMatrix4(o),iu.radius+=a,e.ray.intersectsSphere(iu)===!1)return;Tg.copy(o).invert(),ua.copy(e.ray).applyMatrix4(Tg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let w=x,S=M-1;w<S;w+=f){const y=m.getX(w),I=m.getX(w+1),L=ru(this,e,ua,h,y,I,w);L&&t.push(L)}if(this.isLineLoop){const w=m.getX(M-1),S=m.getX(x),y=ru(this,e,ua,h,w,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let w=x,S=M-1;w<S;w+=f){const y=ru(this,e,ua,h,w,w+1,w);y&&t.push(y)}if(this.isLineLoop){const w=ru(this,e,ua,h,M-1,x,M-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function ru(r,e,t,n,o,a,u){const c=r.geometry.attributes.position;if(Lu.fromBufferAttribute(c,o),Du.fromBufferAttribute(c,a),t.distanceSqToSegment(Lu,Du,Xd,bg)>n)return;Xd.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Xd);if(!(f<e.near||f>e.far))return{distance:f,point:bg.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class t_ extends So{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ag=new Kt,Kh=new Iu,su=new Aa,ou=new ce;class Jx extends Dn{constructor(e=new Li,t=new t_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),su.copy(n.boundingSphere),su.applyMatrix4(o),su.radius+=a,e.ray.intersectsSphere(su)===!1)return;Ag.copy(o).invert(),Kh.copy(e.ray).applyMatrix4(Ag);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,g=n.attributes.position;if(f!==null){const v=Math.max(0,u.start),x=Math.min(f.count,u.start+u.count);for(let M=v,w=x;M<w;M++){const S=f.getX(M);ou.fromBufferAttribute(g,S),Rg(ou,S,h,o,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let M=v,w=x;M<w;M++)ou.fromBufferAttribute(g,M),Rg(ou,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Rg(r,e,t,n,o,a,u){const c=Kh.distanceSqToPoint(r);if(c<t){const h=new ce;Kh.closestPointToPoint(r,h),h.applyMatrix4(n);const f=o.ray.origin.distanceTo(h);if(f<o.near||f>o.far)return;a.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class n_ extends qn{constructor(e,t,n=xs,o,a,u,c=Pi,h=Pi,f,m=Sa){if(m!==Sa&&m!==Ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,a,u,c,h,m,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uu extends Li{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(n),h=Math.floor(o),f=c+1,m=h+1,g=e/c,v=t/h,x=[],M=[],w=[],S=[];for(let y=0;y<m;y++){const I=y*v-u;for(let L=0;L<f;L++){const T=L*g-a;M.push(T,-I,0),w.push(0,0,1),S.push(L/c),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let I=0;I<c;I++){const L=I+f*y,T=I+f*(y+1),P=I+1+f*(y+1),N=I+1+f*y;x.push(L,T,N),x.push(T,P,N)}this.setIndex(x),this.setAttribute("position",new Xr(M,3)),this.setAttribute("normal",new Xr(w,3)),this.setAttribute("uv",new Xr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class eS extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tS extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nS extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class iS extends Zv{constructor(e=-1,t=1,n=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,u=a+f*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rS extends nS{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sS extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cg=new Kt;class oS{constructor(e,t,n=0,o=1/0){this.ray=new Iu(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new gf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cg),this}intersectObject(e,t=!0,n=[]){return Zh(e,this,n,t),n.sort(Pg),n}intersectObjects(e,t=!0,n=[]){for(let o=0,a=e.length;o<a;o++)Zh(e[o],this,n,t);return n.sort(Pg),n}}function Pg(r,e){return r.distance-e.distance}function Zh(r,e,t,n){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&n===!0){const a=r.children;for(let u=0,c=a.length;u<c;u++)Zh(a[u],e,t,!0)}}function Lg(r,e,t,n){const o=aS(n);switch(t){case Ov:return r*e;case Bv:return r*e/o.components*o.byteLength;case hf:return r*e/o.components*o.byteLength;case Gv:return r*e*2/o.components*o.byteLength;case ff:return r*e*2/o.components*o.byteLength;case zv:return r*e*3/o.components*o.byteLength;case Ci:return r*e*4/o.components*o.byteLength;case pf:return r*e*4/o.components*o.byteLength;case xu:case Su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:case bh:return Math.max(r,16)*Math.max(e,8)/4;case Mh:case Th:return Math.max(r,8)*Math.max(e,8)/2;case Ah:case Rh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ch:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wu:case Wh:case Xh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hv:case jh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case $h:case Yh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aS(r){switch(r){case dr:case Uv:return{byteLength:1,components:1};case ya:case Fv:case Ma:return{byteLength:2,components:1};case cf:case df:return{byteLength:2,components:4};case xs:case uf:case or:return{byteLength:4,components:1};case kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function i_(){let r=null,e=!1,t=null,n=null;function o(a,u){t(a,u),n=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function lS(r){const e=new WeakMap;function t(c,h){const f=c.array,m=c.usage,g=f.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,f,m),c.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,h,f){const m=h.array,g=h.updateRanges;if(r.bindBuffer(f,c),g.length===0)r.bufferSubData(f,0,m);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],w=g[x];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++v,g[v]=w)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const w=g[x];r.bufferSubData(f,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(r.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:u}}var uS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cS=`#ifdef USE_ALPHAHASH
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
#endif`,dS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
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
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
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
#endif`,_S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ES=`#ifdef USE_IRIDESCENCE
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
#endif`,MS=`#ifdef USE_BUMPMAP
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
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DS=`#define PI 3.141592653589793
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
} // validated`,NS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IS=`vec3 transformedNormal = objectNormal;
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
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zS="gl_FragColor = linearToOutputTexel( gl_FragColor );",BS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GS=`#ifdef USE_ENVMAP
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
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,jS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$S=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
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
}`,ZS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
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
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
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
#endif`,aE=`struct PhysicalMaterial {
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
}`,lE=`
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
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
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_E=`#if defined( USE_POINTS_UV )
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
#endif`,yE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ME=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$E=`float getShadowMask() {
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
}`,YE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nM=`#ifdef USE_TRANSMISSION
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
#endif`,iM=`#ifdef USE_TRANSMISSION
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
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uM=`uniform sampler2D t2D;
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`#include <common>
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
}`,mM=`#if DEPTH_PACKING == 3200
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
}`,gM=`#define DISTANCE
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
}`,vM=`#define DISTANCE
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`uniform float scale;
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
}`,SM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,MM=`uniform vec3 diffuse;
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
}`,wM=`#define LAMBERT
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
}`,TM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,AM=`#define MATCAP
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
}`,RM=`#define NORMAL
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
}`,CM=`#define NORMAL
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
}`,PM=`#define PHONG
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
}`,LM=`#define PHONG
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
}`,DM=`#define STANDARD
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
}`,NM=`#define STANDARD
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
}`,IM=`#define TOON
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
}`,UM=`#define TOON
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
}`,FM=`uniform float size;
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
}`,kM=`uniform vec3 diffuse;
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
}`,OM=`#include <common>
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
}`,zM=`uniform vec3 color;
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
}`,BM=`uniform float rotation;
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
}`,GM=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:uS,alphahash_pars_fragment:cS,alphamap_fragment:dS,alphamap_pars_fragment:hS,alphatest_fragment:fS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:vS,batching_vertex:_S,begin_vertex:yS,beginnormal_vertex:xS,bsdfs:SS,iridescence_fragment:ES,bumpmap_pars_fragment:MS,clipping_planes_fragment:wS,clipping_planes_pars_fragment:TS,clipping_planes_pars_vertex:bS,clipping_planes_vertex:AS,color_fragment:RS,color_pars_fragment:CS,color_pars_vertex:PS,color_vertex:LS,common:DS,cube_uv_reflection_fragment:NS,defaultnormal_vertex:IS,displacementmap_pars_vertex:US,displacementmap_vertex:FS,emissivemap_fragment:kS,emissivemap_pars_fragment:OS,colorspace_fragment:zS,colorspace_pars_fragment:BS,envmap_fragment:GS,envmap_common_pars_fragment:HS,envmap_pars_fragment:VS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:tE,envmap_vertex:XS,fog_vertex:jS,fog_pars_vertex:$S,fog_fragment:YS,fog_pars_fragment:qS,gradientmap_pars_fragment:KS,lightmap_pars_fragment:ZS,lights_lambert_fragment:QS,lights_lambert_pars_fragment:JS,lights_pars_begin:eE,lights_toon_fragment:nE,lights_toon_pars_fragment:iE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:oE,lights_physical_pars_fragment:aE,lights_fragment_begin:lE,lights_fragment_maps:uE,lights_fragment_end:cE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:hE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:pE,map_fragment:mE,map_pars_fragment:gE,map_particle_fragment:vE,map_particle_pars_fragment:_E,metalnessmap_fragment:yE,metalnessmap_pars_fragment:xE,morphinstance_vertex:SE,morphcolor_vertex:EE,morphnormal_vertex:ME,morphtarget_pars_vertex:wE,morphtarget_vertex:TE,normal_fragment_begin:bE,normal_fragment_maps:AE,normal_pars_fragment:RE,normal_pars_vertex:CE,normal_vertex:PE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:NE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:UE,opaque_fragment:FE,packing:kE,premultiplied_alpha_fragment:OE,project_vertex:zE,dithering_fragment:BE,dithering_pars_fragment:GE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:VE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:XE,shadowmap_vertex:jE,shadowmask_pars_fragment:$E,skinbase_vertex:YE,skinning_pars_vertex:qE,skinning_vertex:KE,skinnormal_vertex:ZE,specularmap_fragment:QE,specularmap_pars_fragment:JE,tonemapping_fragment:eM,tonemapping_pars_fragment:tM,transmission_fragment:nM,transmission_pars_fragment:iM,uv_pars_fragment:rM,uv_pars_vertex:sM,uv_vertex:oM,worldpos_vertex:aM,background_vert:lM,background_frag:uM,backgroundCube_vert:cM,backgroundCube_frag:dM,cube_vert:hM,cube_frag:fM,depth_vert:pM,depth_frag:mM,distanceRGBA_vert:gM,distanceRGBA_frag:vM,equirect_vert:_M,equirect_frag:yM,linedashed_vert:xM,linedashed_frag:SM,meshbasic_vert:EM,meshbasic_frag:MM,meshlambert_vert:wM,meshlambert_frag:TM,meshmatcap_vert:bM,meshmatcap_frag:AM,meshnormal_vert:RM,meshnormal_frag:CM,meshphong_vert:PM,meshphong_frag:LM,meshphysical_vert:DM,meshphysical_frag:NM,meshtoon_vert:IM,meshtoon_frag:UM,points_vert:FM,points_frag:kM,shadow_vert:OM,shadow_frag:zM,sprite_vert:BM,sprite_frag:GM},ke={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Bi={basic:{uniforms:On([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:On([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Dt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:On([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:On([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:On([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Dt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:On([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:On([ke.points,ke.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:On([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:On([ke.common,ke.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:On([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:On([ke.sprite,ke.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:On([ke.common,ke.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:On([ke.lights,ke.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Bi.physical={uniforms:On([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const au={r:0,b:0,g:0},ds=new hr,HM=new Kt;function VM(r,e,t,n,o,a,u){const c=new Dt(0);let h=a===!0?0:1,f,m,g=null,v=0,x=null;function M(L){let T=L.isScene===!0?L.background:null;return T&&T.isTexture&&(T=(L.backgroundBlurriness>0?t:e).get(T)),T}function w(L){let T=!1;const P=M(L);P===null?y(c,h):P&&P.isColor&&(y(P,1),T=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,T){const P=M(T);P&&(P.isCubeTexture||P.mapping===Nu)?(m===void 0&&(m=new lr(new Ra(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:vo(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),ds.copy(T.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(HM.makeRotationFromEuler(ds)),m.material.toneMapped=Lt.getTransfer(P.colorSpace)!==Ft,(g!==P||v!==P.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=P,v=P.version,x=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(f===void 0&&(f=new lr(new Uu(2,2),new $r({name:"BackgroundMaterial",uniforms:vo(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=P,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.toneMapped=Lt.getTransfer(P.colorSpace)!==Ft,P.matrixAutoUpdate===!0&&P.updateMatrix(),f.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,g=P,v=P.version,x=r.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function y(L,T){L.getRGB(au,Kv(r)),n.buffers.color.setClear(au.r,au.g,au.b,T,u)}function I(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,T=1){c.set(L),h=T,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,y(c,h)},render:w,addToRenderList:S,dispose:I}}function WM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},o=v(null);let a=o,u=!1;function c(E,O,Z,te,oe){let he=!1;const de=g(te,Z,O);a!==de&&(a=de,f(a.object)),he=x(E,te,Z,oe),he&&M(E,te,Z,oe),oe!==null&&e.update(oe,r.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,T(E,O,Z,te),oe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return r.createVertexArray()}function f(E){return r.bindVertexArray(E)}function m(E){return r.deleteVertexArray(E)}function g(E,O,Z){const te=Z.wireframe===!0;let oe=n[E.id];oe===void 0&&(oe={},n[E.id]=oe);let he=oe[O.id];he===void 0&&(he={},oe[O.id]=he);let de=he[te];return de===void 0&&(de=v(h()),he[te]=de),de}function v(E){const O=[],Z=[],te=[];for(let oe=0;oe<t;oe++)O[oe]=0,Z[oe]=0,te[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:te,object:E,attributes:{},index:null}}function x(E,O,Z,te){const oe=a.attributes,he=O.attributes;let de=0;const me=Z.getAttributes();for(const G in me)if(me[G].location>=0){const le=oe[G];let U=he[G];if(U===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(U=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(U=E.instanceColor)),le===void 0||le.attribute!==U||U&&le.data!==U.data)return!0;de++}return a.attributesNum!==de||a.index!==te}function M(E,O,Z,te){const oe={},he=O.attributes;let de=0;const me=Z.getAttributes();for(const G in me)if(me[G].location>=0){let le=he[G];le===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(le=E.instanceColor));const U={};U.attribute=le,le&&le.data&&(U.data=le.data),oe[G]=U,de++}a.attributes=oe,a.attributesNum=de,a.index=te}function w(){const E=a.newAttributes;for(let O=0,Z=E.length;O<Z;O++)E[O]=0}function S(E){y(E,0)}function y(E,O){const Z=a.newAttributes,te=a.enabledAttributes,oe=a.attributeDivisors;Z[E]=1,te[E]===0&&(r.enableVertexAttribArray(E),te[E]=1),oe[E]!==O&&(r.vertexAttribDivisor(E,O),oe[E]=O)}function I(){const E=a.newAttributes,O=a.enabledAttributes;for(let Z=0,te=O.length;Z<te;Z++)O[Z]!==E[Z]&&(r.disableVertexAttribArray(Z),O[Z]=0)}function L(E,O,Z,te,oe,he,de){de===!0?r.vertexAttribIPointer(E,O,Z,oe,he):r.vertexAttribPointer(E,O,Z,te,oe,he)}function T(E,O,Z,te){w();const oe=te.attributes,he=Z.getAttributes(),de=O.defaultAttributeValues;for(const me in he){const G=he[me];if(G.location>=0){let pe=oe[me];if(pe===void 0&&(me==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),me==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),pe!==void 0){const le=pe.normalized,U=pe.itemSize,Y=e.get(pe);if(Y===void 0)continue;const Ae=Y.buffer,W=Y.type,ge=Y.bytesPerElement,ye=W===r.INT||W===r.UNSIGNED_INT||pe.gpuType===uf;if(pe.isInterleavedBufferAttribute){const _e=pe.data,Pe=_e.stride,Qe=pe.offset;if(_e.isInstancedInterleavedBuffer){for(let We=0;We<G.locationSize;We++)y(G.location+We,_e.meshPerAttribute);E.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let We=0;We<G.locationSize;We++)S(G.location+We);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let We=0;We<G.locationSize;We++)L(G.location+We,U/G.locationSize,W,le,Pe*ge,(Qe+U/G.locationSize*We)*ge,ye)}else{if(pe.isInstancedBufferAttribute){for(let _e=0;_e<G.locationSize;_e++)y(G.location+_e,pe.meshPerAttribute);E.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<G.locationSize;_e++)S(G.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let _e=0;_e<G.locationSize;_e++)L(G.location+_e,U/G.locationSize,W,le,U*ge,U/G.locationSize*_e*ge,ye)}}else if(de!==void 0){const le=de[me];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(G.location,le);break;case 3:r.vertexAttrib3fv(G.location,le);break;case 4:r.vertexAttrib4fv(G.location,le);break;default:r.vertexAttrib1fv(G.location,le)}}}}I()}function P(){B();for(const E in n){const O=n[E];for(const Z in O){const te=O[Z];for(const oe in te)m(te[oe].object),delete te[oe];delete O[Z]}delete n[E]}}function N(E){if(n[E.id]===void 0)return;const O=n[E.id];for(const Z in O){const te=O[Z];for(const oe in te)m(te[oe].object),delete te[oe];delete O[Z]}delete n[E.id]}function D(E){for(const O in n){const Z=n[O];if(Z[E.id]===void 0)continue;const te=Z[E.id];for(const oe in te)m(te[oe].object),delete te[oe];delete Z[E.id]}}function B(){C(),u=!0,a!==o&&(a=o,f(a.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:B,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:S,disableUnusedAttributes:I}}function XM(r,e,t){let n;function o(f){n=f}function a(f,m){r.drawArrays(n,f,m),t.update(m,n,1)}function u(f,m,g){g!==0&&(r.drawArraysInstanced(n,f,m,g),t.update(m,n,g))}function c(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,n,1)}function h(f,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<f.length;M++)u(f[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,m,0,v,0,g);let M=0;for(let w=0;w<g;w++)M+=m[w]*v[w];t.update(M,n,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function jM(r,e,t,n){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==Ci&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const B=D===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==dr&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==or&&!B)}function h(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:T,vertexTextures:P,maxSamples:N}}function $M(r){const e=this;let t=null,n=0,o=!1,a=!1;const u=new ps,c=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||n!==0||o;return o=v,n=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,y=r.get(g);if(!o||M===null||M.length===0||a&&!S)a?m(null):f();else{const I=a?0:n,L=I*4;let T=y.clippingState||null;h.value=T,T=m(M,v,L,x);for(let P=0;P!==L;++P)T[P]=t[P];y.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,v,x,M){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=h.value,M!==!0||S===null){const y=x+w*4,I=v.matrixWorldInverse;c.getNormalMatrix(I),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,T=x;L!==w;++L,T+=4)u.copy(g[L]).applyMatrix4(I,c),u.normal.toArray(S,T),S[T+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function YM(r){let e=new WeakMap;function t(u,c){return c===yh?u.mapping=po:c===xh&&(u.mapping=mo),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===yh||c===xh)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const f=new $x(h.height);return f.fromEquirectangularTexture(r,u),e.set(u,f),u.addEventListener("dispose",o),t(f.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ao=4,Dg=[.125,.215,.35,.446,.526,.582],vs=20,jd=new iS,Ng=new Dt;let $d=null,Yd=0,qd=0,Kd=!1;const ms=(1+Math.sqrt(5))/2,ro=1/ms,Ig=[new ce(-ms,ro,0),new ce(ms,ro,0),new ce(-ro,0,ms),new ce(ro,0,ms),new ce(0,ms,-ro),new ce(0,ms,ro),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)],qM=new ce;class Ug{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100,a={}){const{size:u=256,position:c=qM}=a;$d=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,o,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($d,Yd,qd),this._renderer.xr.enabled=Kd,e.scissorTest=!1,lu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:Ma,format:Ci,colorSpace:go,depthBuffer:!1},o=Fg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fg(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KM(a)),this._blurMaterial=ZM(a,e,t)}return o}_compileMaterial(e){const t=new lr(this._lodPlanes[0],e);this._renderer.compile(t,jd)}_sceneToCubeUV(e,t,n,o,a){const h=new hi(90,1,t,n),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Ng),g.toneMapping=Wr,g.autoClear=!1;const M=new $v({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),w=new lr(new Ra,M);let S=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,S=!0):(M.color.copy(Ng),S=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(h.up.set(0,f[I],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+m[I],a.y,a.z)):L===1?(h.up.set(0,0,f[I]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+m[I],a.z)):(h.up.set(0,f[I],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+m[I]));const T=this._cubeSize;lu(o,L*T,I>2?T:0,T,T),g.setRenderTarget(o),S&&g.render(w,h),g.render(e,h)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===po||e.mapping===mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new lr(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;lu(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(u,jd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Ig[(o-a-1)%Ig.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,o,"latitudinal",a),this._halfBlur(u,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,u,c){const h=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new lr(this._lodPlanes[o],f),v=f.uniforms,x=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*vs-1),w=a/M,S=isFinite(a)?1+Math.floor(m*w):vs;S>vs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vs}`);const y=[];let I=0;for(let D=0;D<vs;++D){const B=D/w,C=Math.exp(-B*B/2);y.push(C),D===0?I+=C:D<S&&(I+=2*C)}for(let D=0;D<y.length;D++)y[D]=y[D]/I;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:L}=this;v.dTheta.value=M,v.mipInt.value=L-n;const T=this._sizeLods[o],P=3*T*(o>L-ao?o-L+ao:0),N=4*(this._cubeSize-T);lu(t,P,N,3*T,2*T),h.setRenderTarget(t),h.render(g,jd)}}function KM(r){const e=[],t=[],n=[];let o=r;const a=r-ao+1+Dg.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let h=1/c;u>r-ao?h=Dg[u-r+ao-1]:u===0&&(h=0),n.push(h);const f=1/(c-2),m=-f,g=1+f,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,w=3,S=2,y=1,I=new Float32Array(w*M*x),L=new Float32Array(S*M*x),T=new Float32Array(y*M*x);for(let N=0;N<x;N++){const D=N%3*2/3-1,B=N>2?0:-1,C=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];I.set(C,w*M*N),L.set(v,S*M*N);const E=[N,N,N,N,N,N];T.set(E,y*M*N)}const P=new Li;P.setAttribute("position",new ni(I,w)),P.setAttribute("uv",new ni(L,S)),P.setAttribute("faceIndex",new ni(T,y)),e.push(P),o>ao&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fg(r,e,t){const n=new Ss(r,e,t);return n.texture.mapping=Nu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lu(r,e,t,n,o){r.viewport.set(e,t,n,o),r.scissor.set(e,t,n,o)}function ZM(r,e,t){const n=new Float32Array(vs),o=new ce(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:vf(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function kg(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vf(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Og(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function vf(){return`

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
	`}function QM(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===yh||h===xh,m=h===po||h===mo;if(f||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new Ug(r)),g=f?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return f&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new Ug(r)),g=f?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function o(c){let h=0;const f=6;for(let m=0;m<f;m++)c[m]!==void 0&&h++;return h===f}function a(c){const h=c.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function JM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&Tu("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function ew(r,e,t,n){const o={},a=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function f(g){const v=[],x=g.index,M=g.attributes.position;let w=0;if(x!==null){const I=x.array;w=x.version;for(let L=0,T=I.length;L<T;L+=3){const P=I[L+0],N=I[L+1],D=I[L+2];v.push(P,N,N,D,D,P)}}else if(M!==void 0){const I=M.array;w=M.version;for(let L=0,T=I.length/3-1;L<T;L+=3){const P=L+0,N=L+1,D=L+2;v.push(P,N,N,D,D,P)}}else return;const S=new(Wv(v)?qv:Yv)(v,1);S.version=w;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function m(g){const v=a.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&f(g)}else f(g);return a.get(g)}return{get:c,update:h,getWireframeAttribute:m}}function tw(r,e,t){let n;function o(v){n=v}let a,u;function c(v){a=v.type,u=v.bytesPerElement}function h(v,x){r.drawElements(n,x,a,v*u),t.update(x,n,1)}function f(v,x,M){M!==0&&(r.drawElementsInstanced(n,x,a,v*u,M),t.update(x,n,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,a,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,n,1)}function g(v,x,M,w){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)f(v[y]/u,x[y],w[y]);else{S.multiDrawElementsInstancedWEBGL(n,x,0,a,v,0,w,0,M);let y=0;for(let I=0;I<M;I++)y+=x[I]*w[I];t.update(y,n,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function nw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function iw(r,e,t){const n=new WeakMap,o=new tn;function a(u,c,h){const f=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=n.get(c);if(v===void 0||v.count!==g){let E=function(){B.dispose(),n.delete(c),c.removeEventListener("dispose",E)};var x=E;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],I=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let T=0;M===!0&&(T=1),w===!0&&(T=2),S===!0&&(T=3);let P=c.attributes.position.count*T,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*N*4*g),B=new Xv(D,P,N,g);B.type=or,B.needsUpdate=!0;const C=T*4;for(let O=0;O<g;O++){const Z=y[O],te=I[O],oe=L[O],he=P*N*4*O;for(let de=0;de<Z.count;de++){const me=de*C;M===!0&&(o.fromBufferAttribute(Z,de),D[he+me+0]=o.x,D[he+me+1]=o.y,D[he+me+2]=o.z,D[he+me+3]=0),w===!0&&(o.fromBufferAttribute(te,de),D[he+me+4]=o.x,D[he+me+5]=o.y,D[he+me+6]=o.z,D[he+me+7]=0),S===!0&&(o.fromBufferAttribute(oe,de),D[he+me+8]=o.x,D[he+me+9]=o.y,D[he+me+10]=o.z,D[he+me+11]=oe.itemSize===4?o.w:1)}}v={count:g,texture:B,size:new kt(P,N)},n.set(c,v),c.addEventListener("dispose",E)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<f.length;S++)M+=f[S];const w=c.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:a}}function rw(r,e,t,n){let o=new WeakMap;function a(h){const f=n.render.frame,m=h.geometry,g=e.get(h,m);if(o.get(g)!==f&&(e.update(g),o.set(g,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,f))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==f&&(v.update(),o.set(v,f))}return g}function u(){o=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:u}}const r_=new qn,zg=new n_(1,1),s_=new Xv,o_=new Px,a_=new Qv,Bg=[],Gg=[],Hg=new Float32Array(16),Vg=new Float32Array(9),Wg=new Float32Array(4);function Eo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const o=e*t;let a=Bg[o];if(a===void 0&&(a=new Float32Array(o),Bg[o]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Fu(r,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ow(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function aw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function lw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function uw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;Wg.set(n),r.uniformMatrix2fv(this.addr,!1,Wg),hn(t,n)}}function cw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;Vg.set(n),r.uniformMatrix3fv(this.addr,!1,Vg),hn(t,n)}}function dw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,n))return;Hg.set(n),r.uniformMatrix4fv(this.addr,!1,Hg),hn(t,n)}}function hw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function pw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function mw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function gw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function _w(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function yw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function xw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o);let a;this.type===r.SAMPLER_2D_SHADOW?(zg.compareFunction=Vv,a=zg):a=r_,t.setTexture2D(e||a,o)}function Sw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||o_,o)}function Ew(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||a_,o)}function Mw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||s_,o)}function ww(r){switch(r){case 5126:return sw;case 35664:return ow;case 35665:return aw;case 35666:return lw;case 35674:return uw;case 35675:return cw;case 35676:return dw;case 5124:case 35670:return hw;case 35667:case 35671:return fw;case 35668:case 35672:return pw;case 35669:case 35673:return mw;case 5125:return gw;case 36294:return vw;case 36295:return _w;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Mw}}function Tw(r,e){r.uniform1fv(this.addr,e)}function bw(r,e){const t=Eo(e,this.size,2);r.uniform2fv(this.addr,t)}function Aw(r,e){const t=Eo(e,this.size,3);r.uniform3fv(this.addr,t)}function Rw(r,e){const t=Eo(e,this.size,4);r.uniform4fv(this.addr,t)}function Cw(r,e){const t=Eo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Pw(r,e){const t=Eo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Lw(r,e){const t=Eo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Dw(r,e){r.uniform1iv(this.addr,e)}function Nw(r,e){r.uniform2iv(this.addr,e)}function Iw(r,e){r.uniform3iv(this.addr,e)}function Uw(r,e){r.uniform4iv(this.addr,e)}function Fw(r,e){r.uniform1uiv(this.addr,e)}function kw(r,e){r.uniform2uiv(this.addr,e)}function Ow(r,e){r.uniform3uiv(this.addr,e)}function zw(r,e){r.uniform4uiv(this.addr,e)}function Bw(r,e,t){const n=this.cache,o=e.length,a=Fu(t,o);dn(n,a)||(r.uniform1iv(this.addr,a),hn(n,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||r_,a[u])}function Gw(r,e,t){const n=this.cache,o=e.length,a=Fu(t,o);dn(n,a)||(r.uniform1iv(this.addr,a),hn(n,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||o_,a[u])}function Hw(r,e,t){const n=this.cache,o=e.length,a=Fu(t,o);dn(n,a)||(r.uniform1iv(this.addr,a),hn(n,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||a_,a[u])}function Vw(r,e,t){const n=this.cache,o=e.length,a=Fu(t,o);dn(n,a)||(r.uniform1iv(this.addr,a),hn(n,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||s_,a[u])}function Ww(r){switch(r){case 5126:return Tw;case 35664:return bw;case 35665:return Aw;case 35666:return Rw;case 35674:return Cw;case 35675:return Pw;case 35676:return Lw;case 5124:case 35670:return Dw;case 35667:case 35671:return Nw;case 35668:case 35672:return Iw;case 35669:case 35673:return Uw;case 5125:return Fw;case 36294:return kw;case 36295:return Ow;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Vw}}class Xw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ww(t.type)}}class jw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ww(t.type)}}class $w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],n)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function Xg(r,e){r.seq.push(e),r.map[e.id]=e}function Yw(r,e,t){const n=r.name,o=n.length;for(Zd.lastIndex=0;;){const a=Zd.exec(n),u=Zd.lastIndex;let c=a[1];const h=a[2]==="]",f=a[3];if(h&&(c=c|0),f===void 0||f==="["&&u+2===o){Xg(t,f===void 0?new Xw(c,r,e):new jw(c,r,e));break}else{let g=t.map[c];g===void 0&&(g=new $w(c),Xg(t,g)),t=g}}}class bu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);Yw(a,u,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&n.push(u)}return n}}function jg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qw=37297;let Kw=0;function Zw(r,e){const t=r.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const $g=new _t;function Qw(r){Lt._getMatrix($g,Lt.workingColorSpace,r);const e=`mat3( ${$g.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case Ru:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Yg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Zw(r.getShaderSource(e),u)}else return o}function Jw(r,e){const t=Qw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eT(r,e){let t;switch(e){case tx:t="Linear";break;case nx:t="Reinhard";break;case ix:t="Cineon";break;case rx:t="ACESFilmic";break;case ox:t="AgX";break;case ax:t="Neutral";break;case sx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uu=new ce;function tT(){Lt.getLuminanceCoefficients(uu);const r=uu.x.toFixed(4),e=uu.y.toFixed(4),t=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function iT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function ga(r){return r!==""}function qg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(r){return r.replace(sT,aT)}const oT=new Map;function aT(r,e){let t=xt[e];if(t===void 0){const n=oT.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qh(t)}const lT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(r){return r.replace(lT,uT)}function uT(r,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Qg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function cT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function dT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case Nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function fT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Nv:e="ENVMAP_BLENDING_MULTIPLY";break;case J0:e="ENVMAP_BLENDING_MIX";break;case ex:e="ENVMAP_BLENDING_ADD";break}return e}function pT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mT(r,e,t,n){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=cT(t),f=dT(t),m=hT(t),g=fT(t),v=pT(t),x=nT(t),M=iT(a),w=o.createProgram();let S,y,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ga).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ga).join(`
`),y.length>0&&(y+=`
`)):(S=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),y=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?xt.tonemapping_pars_fragment:"",t.toneMapping!==Wr?eT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Jw("linearToOutputTexel",t.outputColorSpace),tT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),u=Qh(u),u=qg(u,t),u=Kg(u,t),c=Qh(c),c=qg(c,t),c=Kg(c,t),u=Zg(u),c=Zg(c),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===ag?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ag?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=I+S+u,T=I+y+c,P=jg(o,o.VERTEX_SHADER,L),N=jg(o,o.FRAGMENT_SHADER,T);o.attachShader(w,P),o.attachShader(w,N),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function D(O){if(r.debug.checkShaderErrors){const Z=o.getProgramInfoLog(w).trim(),te=o.getShaderInfoLog(P).trim(),oe=o.getShaderInfoLog(N).trim();let he=!0,de=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,w,P,N);else{const me=Yg(o,P,"vertex"),G=Yg(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Z+`
`+me+`
`+G)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(te===""||oe==="")&&(de=!1);de&&(O.diagnostics={runnable:he,programLog:Z,vertexShader:{log:te,prefix:S},fragmentShader:{log:oe,prefix:y}})}o.deleteShader(P),o.deleteShader(N),B=new bu(o,w),C=rT(o,w)}let B;this.getUniforms=function(){return B===void 0&&D(this),B};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=o.getProgramParameter(w,qw)),E},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=N,this}let gT=0;class vT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _T(e),t.set(e,n)),n}}class _T{constructor(e){this.id=gT++,this.code=e,this.usedTimes=0}}function yT(r,e,t,n,o,a,u){const c=new gf,h=new vT,f=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return f.add(C),C===0?"uv":`uv${C}`}function S(C,E,O,Z,te){const oe=Z.fog,he=te.geometry,de=C.isMeshStandardMaterial?Z.environment:null,me=(C.isMeshStandardMaterial?t:e).get(C.envMap||de),G=me&&me.mapping===Nu?me.image.height:null,pe=M[C.type];C.precision!==null&&(x=o.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const le=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=le!==void 0?le.length:0;let Y=0;he.morphAttributes.position!==void 0&&(Y=1),he.morphAttributes.normal!==void 0&&(Y=2),he.morphAttributes.color!==void 0&&(Y=3);let Ae,W,ge,ye;if(pe){const Et=Bi[pe];Ae=Et.vertexShader,W=Et.fragmentShader}else Ae=C.vertexShader,W=C.fragmentShader,h.update(C),ge=h.getVertexShaderID(C),ye=h.getFragmentShaderID(C);const _e=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),Qe=te.isInstancedMesh===!0,We=te.isBatchedMesh===!0,It=!!C.map,Ut=!!C.matcap,gt=!!me,H=!!C.aoMap,on=!!C.lightMap,St=!!C.bumpMap,yt=!!C.normalMap,tt=!!C.displacementMap,Nt=!!C.emissiveMap,$e=!!C.metalnessMap,F=!!C.roughnessMap,A=C.anisotropy>0,re=C.clearcoat>0,k=C.dispersion>0,se=C.iridescence>0,K=C.sheen>0,xe=C.transmission>0,ee=A&&!!C.anisotropyMap,He=re&&!!C.clearcoatMap,Xe=re&&!!C.clearcoatNormalMap,Se=re&&!!C.clearcoatRoughnessMap,Ie=se&&!!C.iridescenceMap,Ke=se&&!!C.iridescenceThicknessMap,et=K&&!!C.sheenColorMap,Ue=K&&!!C.sheenRoughnessMap,dt=!!C.specularMap,it=!!C.specularColorMap,ft=!!C.specularIntensityMap,j=xe&&!!C.transmissionMap,Le=xe&&!!C.thicknessMap,fe=!!C.gradientMap,ve=!!C.alphaMap,De=C.alphaTest>0,Ne=!!C.alphaHash,ut=!!C.extensions;let vt=Wr;C.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(vt=r.toneMapping);const zt={shaderID:pe,shaderType:C.type,shaderName:C.name,vertexShader:Ae,fragmentShader:W,defines:C.defines,customVertexShaderID:ge,customFragmentShaderID:ye,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:We,batchingColor:We&&te._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&te.instanceColor!==null,instancingMorph:Qe&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:go,alphaToCoverage:!!C.alphaToCoverage,map:It,matcap:Ut,envMap:gt,envMapMode:gt&&me.mapping,envMapCubeUVHeight:G,aoMap:H,lightMap:on,bumpMap:St,normalMap:yt,displacementMap:v&&tt,emissiveMap:Nt,normalMapObjectSpace:yt&&C.normalMapType===hx,normalMapTangentSpace:yt&&C.normalMapType===dx,metalnessMap:$e,roughnessMap:F,anisotropy:A,anisotropyMap:ee,clearcoat:re,clearcoatMap:He,clearcoatNormalMap:Xe,clearcoatRoughnessMap:Se,dispersion:k,iridescence:se,iridescenceMap:Ie,iridescenceThicknessMap:Ke,sheen:K,sheenColorMap:et,sheenRoughnessMap:Ue,specularMap:dt,specularColorMap:it,specularIntensityMap:ft,transmission:xe,transmissionMap:j,thicknessMap:Le,gradientMap:fe,opaque:C.transparent===!1&&C.blending===uo&&C.alphaToCoverage===!1,alphaMap:ve,alphaTest:De,alphaHash:Ne,combine:C.combine,mapUv:It&&w(C.map.channel),aoMapUv:H&&w(C.aoMap.channel),lightMapUv:on&&w(C.lightMap.channel),bumpMapUv:St&&w(C.bumpMap.channel),normalMapUv:yt&&w(C.normalMap.channel),displacementMapUv:tt&&w(C.displacementMap.channel),emissiveMapUv:Nt&&w(C.emissiveMap.channel),metalnessMapUv:$e&&w(C.metalnessMap.channel),roughnessMapUv:F&&w(C.roughnessMap.channel),anisotropyMapUv:ee&&w(C.anisotropyMap.channel),clearcoatMapUv:He&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:et&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&w(C.sheenRoughnessMap.channel),specularMapUv:dt&&w(C.specularMap.channel),specularColorMapUv:it&&w(C.specularColorMap.channel),specularIntensityMapUv:ft&&w(C.specularIntensityMap.channel),transmissionMapUv:j&&w(C.transmissionMap.channel),thicknessMapUv:Le&&w(C.thicknessMap.channel),alphaMapUv:ve&&w(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(yt||A),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(It||ve),fog:!!oe,useFog:C.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Pe,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Y,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:vt,decodeVideoTexture:It&&C.map.isVideoTexture===!0&&Lt.getTransfer(C.map.colorSpace)===Ft,decodeVideoTextureEmissive:Nt&&C.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(C.emissiveMap.colorSpace)===Ft,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===rr,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ut&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&C.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return zt.vertexUv1s=f.has(1),zt.vertexUv2s=f.has(2),zt.vertexUv3s=f.has(3),f.clear(),zt}function y(C){const E=[];if(C.shaderID?E.push(C.shaderID):(E.push(C.customVertexShaderID),E.push(C.customFragmentShaderID)),C.defines!==void 0)for(const O in C.defines)E.push(O),E.push(C.defines[O]);return C.isRawShaderMaterial===!1&&(I(E,C),L(E,C),E.push(r.outputColorSpace)),E.push(C.customProgramCacheKey),E.join()}function I(C,E){C.push(E.precision),C.push(E.outputColorSpace),C.push(E.envMapMode),C.push(E.envMapCubeUVHeight),C.push(E.mapUv),C.push(E.alphaMapUv),C.push(E.lightMapUv),C.push(E.aoMapUv),C.push(E.bumpMapUv),C.push(E.normalMapUv),C.push(E.displacementMapUv),C.push(E.emissiveMapUv),C.push(E.metalnessMapUv),C.push(E.roughnessMapUv),C.push(E.anisotropyMapUv),C.push(E.clearcoatMapUv),C.push(E.clearcoatNormalMapUv),C.push(E.clearcoatRoughnessMapUv),C.push(E.iridescenceMapUv),C.push(E.iridescenceThicknessMapUv),C.push(E.sheenColorMapUv),C.push(E.sheenRoughnessMapUv),C.push(E.specularMapUv),C.push(E.specularColorMapUv),C.push(E.specularIntensityMapUv),C.push(E.transmissionMapUv),C.push(E.thicknessMapUv),C.push(E.combine),C.push(E.fogExp2),C.push(E.sizeAttenuation),C.push(E.morphTargetsCount),C.push(E.morphAttributeCount),C.push(E.numDirLights),C.push(E.numPointLights),C.push(E.numSpotLights),C.push(E.numSpotLightMaps),C.push(E.numHemiLights),C.push(E.numRectAreaLights),C.push(E.numDirLightShadows),C.push(E.numPointLightShadows),C.push(E.numSpotLightShadows),C.push(E.numSpotLightShadowsWithMaps),C.push(E.numLightProbes),C.push(E.shadowMapType),C.push(E.toneMapping),C.push(E.numClippingPlanes),C.push(E.numClipIntersection),C.push(E.depthPacking)}function L(C,E){c.disableAll(),E.supportsVertexTextures&&c.enable(0),E.instancing&&c.enable(1),E.instancingColor&&c.enable(2),E.instancingMorph&&c.enable(3),E.matcap&&c.enable(4),E.envMap&&c.enable(5),E.normalMapObjectSpace&&c.enable(6),E.normalMapTangentSpace&&c.enable(7),E.clearcoat&&c.enable(8),E.iridescence&&c.enable(9),E.alphaTest&&c.enable(10),E.vertexColors&&c.enable(11),E.vertexAlphas&&c.enable(12),E.vertexUv1s&&c.enable(13),E.vertexUv2s&&c.enable(14),E.vertexUv3s&&c.enable(15),E.vertexTangents&&c.enable(16),E.anisotropy&&c.enable(17),E.alphaHash&&c.enable(18),E.batching&&c.enable(19),E.dispersion&&c.enable(20),E.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),E.fog&&c.enable(0),E.useFog&&c.enable(1),E.flatShading&&c.enable(2),E.logarithmicDepthBuffer&&c.enable(3),E.reverseDepthBuffer&&c.enable(4),E.skinning&&c.enable(5),E.morphTargets&&c.enable(6),E.morphNormals&&c.enable(7),E.morphColors&&c.enable(8),E.premultipliedAlpha&&c.enable(9),E.shadowMapEnabled&&c.enable(10),E.doubleSided&&c.enable(11),E.flipSided&&c.enable(12),E.useDepthPacking&&c.enable(13),E.dithering&&c.enable(14),E.transmission&&c.enable(15),E.sheen&&c.enable(16),E.opaque&&c.enable(17),E.pointsUvs&&c.enable(18),E.decodeVideoTexture&&c.enable(19),E.decodeVideoTextureEmissive&&c.enable(20),E.alphaToCoverage&&c.enable(21),C.push(c.mask)}function T(C){const E=M[C.type];let O;if(E){const Z=Bi[E];O=Vx.clone(Z.uniforms)}else O=C.uniforms;return O}function P(C,E){let O;for(let Z=0,te=m.length;Z<te;Z++){const oe=m[Z];if(oe.cacheKey===E){O=oe,++O.usedTimes;break}}return O===void 0&&(O=new mT(r,E,C,a),m.push(O)),O}function N(C){if(--C.usedTimes===0){const E=m.indexOf(C);m[E]=m[m.length-1],m.pop(),C.destroy()}}function D(C){h.remove(C)}function B(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:T,acquireProgram:P,releaseProgram:N,releaseShaderCache:D,programs:m,dispose:B}}function xT(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let c=r.get(u);return c===void 0&&(c={},r.set(u,c)),c}function n(u){r.delete(u)}function o(u,c,h){r.get(u)[c]=h}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:a}}function ST(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Jg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ev(){const r=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function u(g,v,x,M,w,S){let y=r[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:w,group:S},r[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=w,y.group=S),e++,y}function c(g,v,x,M,w,S){const y=u(g,v,x,M,w,S);x.transmission>0?n.push(y):x.transparent===!0?o.push(y):t.push(y)}function h(g,v,x,M,w,S){const y=u(g,v,x,M,w,S);x.transmission>0?n.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function f(g,v){t.length>1&&t.sort(g||ST),n.length>1&&n.sort(v||Jg),o.length>1&&o.sort(v||Jg)}function m(){for(let g=e,v=r.length;g<v;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:c,unshift:h,finish:m,sort:f}}function ET(){let r=new WeakMap;function e(n,o){const a=r.get(n);let u;return a===void 0?(u=new ev,r.set(n,[u])):o>=a.length?(u=new ev,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function MT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new Dt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=t,t}}}function wT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let TT=0;function bT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function AT(r){const e=new MT,t=wT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new ce);const o=new ce,a=new Kt,u=new Kt;function c(f){let m=0,g=0,v=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,M=0,w=0,S=0,y=0,I=0,L=0,T=0,P=0,N=0,D=0;f.sort(bT);for(let C=0,E=f.length;C<E;C++){const O=f[C],Z=O.color,te=O.intensity,oe=O.distance,he=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)m+=Z.r*te,g+=Z.g*te,v+=Z.b*te;else if(O.isLightProbe){for(let de=0;de<9;de++)n.probe[de].addScaledVector(O.sh.coefficients[de],te);D++}else if(O.isDirectionalLight){const de=e.get(O);if(de.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const me=O.shadow,G=t.get(O);G.shadowIntensity=me.intensity,G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,n.directionalShadow[x]=G,n.directionalShadowMap[x]=he,n.directionalShadowMatrix[x]=O.shadow.matrix,I++}n.directional[x]=de,x++}else if(O.isSpotLight){const de=e.get(O);de.position.setFromMatrixPosition(O.matrixWorld),de.color.copy(Z).multiplyScalar(te),de.distance=oe,de.coneCos=Math.cos(O.angle),de.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),de.decay=O.decay,n.spot[w]=de;const me=O.shadow;if(O.map&&(n.spotLightMap[P]=O.map,P++,me.updateMatrices(O),O.castShadow&&N++),n.spotLightMatrix[w]=me.matrix,O.castShadow){const G=t.get(O);G.shadowIntensity=me.intensity,G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,n.spotShadow[w]=G,n.spotShadowMap[w]=he,T++}w++}else if(O.isRectAreaLight){const de=e.get(O);de.color.copy(Z).multiplyScalar(te),de.halfWidth.set(O.width*.5,0,0),de.halfHeight.set(0,O.height*.5,0),n.rectArea[S]=de,S++}else if(O.isPointLight){const de=e.get(O);if(de.color.copy(O.color).multiplyScalar(O.intensity),de.distance=O.distance,de.decay=O.decay,O.castShadow){const me=O.shadow,G=t.get(O);G.shadowIntensity=me.intensity,G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,G.shadowCameraNear=me.camera.near,G.shadowCameraFar=me.camera.far,n.pointShadow[M]=G,n.pointShadowMap[M]=he,n.pointShadowMatrix[M]=O.shadow.matrix,L++}n.point[M]=de,M++}else if(O.isHemisphereLight){const de=e.get(O);de.skyColor.copy(O.color).multiplyScalar(te),de.groundColor.copy(O.groundColor).multiplyScalar(te),n.hemi[y]=de,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=v;const B=n.hash;(B.directionalLength!==x||B.pointLength!==M||B.spotLength!==w||B.rectAreaLength!==S||B.hemiLength!==y||B.numDirectionalShadows!==I||B.numPointShadows!==L||B.numSpotShadows!==T||B.numSpotMaps!==P||B.numLightProbes!==D)&&(n.directional.length=x,n.spot.length=w,n.rectArea.length=S,n.point.length=M,n.hemi.length=y,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=T+P-N,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=D,B.directionalLength=x,B.pointLength=M,B.spotLength=w,B.rectAreaLength=S,B.hemiLength=y,B.numDirectionalShadows=I,B.numPointShadows=L,B.numSpotShadows=T,B.numSpotMaps=P,B.numLightProbes=D,n.version=TT++)}function h(f,m){let g=0,v=0,x=0,M=0,w=0;const S=m.matrixWorldInverse;for(let y=0,I=f.length;y<I;y++){const L=f[y];if(L.isDirectionalLight){const T=n.directional[g];T.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(S),g++}else if(L.isSpotLight){const T=n.spot[x];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),u.identity(),a.copy(L.matrixWorld),a.premultiply(S),u.extractRotation(a),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),M++}else if(L.isPointLight){const T=n.point[v];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const T=n.hemi[w];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(S),w++}}}return{setup:c,setupView:h,state:n}}function tv(r){const e=new AT(r),t=[],n=[];function o(m){f.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function u(m){n.push(m)}function c(){e.setup(t)}function h(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:u}}function RT(r){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let c;return u===void 0?(c=new tv(r),e.set(o,[c])):a>=u.length?(c=new tv(r),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const CT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PT=`uniform sampler2D shadow_pass;
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
}`;function LT(r,e,t){let n=new Jv;const o=new kt,a=new kt,u=new tn,c=new eS({depthPacking:cx}),h=new tS,f={},m=t.maxTextureSize,g={[jr]:Yn,[Yn]:jr,[rr]:rr},v=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:CT,fragmentShader:PT}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new Li;M.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new lr(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dv;let y=this.type;this.render=function(N,D,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),E=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Vr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const te=y!==nr&&this.type===nr,oe=y===nr&&this.type!==nr;for(let he=0,de=N.length;he<de;he++){const me=N[he],G=me.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const pe=G.getFrameExtents();if(o.multiply(pe),a.copy(G.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/pe.x),o.x=a.x*pe.x,G.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/pe.y),o.y=a.y*pe.y,G.mapSize.y=a.y)),G.map===null||te===!0||oe===!0){const U=this.type!==nr?{minFilter:Pi,magFilter:Pi}:{};G.map!==null&&G.map.dispose(),G.map=new Ss(o.x,o.y,U),G.map.texture.name=me.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const le=G.getViewportCount();for(let U=0;U<le;U++){const Y=G.getViewport(U);u.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),Z.viewport(u),G.updateMatrices(me,U),n=G.getFrustum(),T(D,B,G.camera,me,this.type)}G.isPointLightShadow!==!0&&this.type===nr&&I(G,B),G.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(C,E,O)};function I(N,D){const B=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ss(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(D,null,B,v,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(D,null,B,x,w,null)}function L(N,D,B,C){let E=null;const O=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)E=O;else if(E=B.isPointLight===!0?h:c,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Z=E.uuid,te=D.uuid;let oe=f[Z];oe===void 0&&(oe={},f[Z]=oe);let he=oe[te];he===void 0&&(he=E.clone(),oe[te]=he,D.addEventListener("dispose",P)),E=he}if(E.visible=D.visible,E.wireframe=D.wireframe,C===nr?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:g[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Z=r.properties.get(E);Z.light=B}return E}function T(N,D,B,C,E){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&E===nr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);const te=e.update(N),oe=N.material;if(Array.isArray(oe)){const he=te.groups;for(let de=0,me=he.length;de<me;de++){const G=he[de],pe=oe[G.materialIndex];if(pe&&pe.visible){const le=L(N,pe,C,E);N.onBeforeShadow(r,N,D,B,te,le,G),r.renderBufferDirect(B,null,te,le,N,G),N.onAfterShadow(r,N,D,B,te,le,G)}}}else if(oe.visible){const he=L(N,oe,C,E);N.onBeforeShadow(r,N,D,B,te,he,null),r.renderBufferDirect(B,null,te,he,N,null),N.onAfterShadow(r,N,D,B,te,he,null)}}const Z=N.children;for(let te=0,oe=Z.length;te<oe;te++)T(Z[te],D,B,C,E)}function P(N){N.target.removeEventListener("dispose",P);for(const B in f){const C=f[B],E=N.target.uuid;E in C&&(C[E].dispose(),delete C[E])}}}const DT={[hh]:fh,[ph]:vh,[mh]:_h,[fo]:gh,[fh]:hh,[vh]:ph,[_h]:mh,[gh]:fo};function NT(r,e){function t(){let j=!1;const Le=new tn;let fe=null;const ve=new tn(0,0,0,0);return{setMask:function(De){fe!==De&&!j&&(r.colorMask(De,De,De,De),fe=De)},setLocked:function(De){j=De},setClear:function(De,Ne,ut,vt,zt){zt===!0&&(De*=vt,Ne*=vt,ut*=vt),Le.set(De,Ne,ut,vt),ve.equals(Le)===!1&&(r.clearColor(De,Ne,ut,vt),ve.copy(Le))},reset:function(){j=!1,fe=null,ve.set(-1,0,0,0)}}}function n(){let j=!1,Le=!1,fe=null,ve=null,De=null;return{setReversed:function(Ne){if(Le!==Ne){const ut=e.get("EXT_clip_control");Ne?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),Le=Ne;const vt=De;De=null,this.setClear(vt)}},getReversed:function(){return Le},setTest:function(Ne){Ne?_e(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(Ne){fe!==Ne&&!j&&(r.depthMask(Ne),fe=Ne)},setFunc:function(Ne){if(Le&&(Ne=DT[Ne]),ve!==Ne){switch(Ne){case hh:r.depthFunc(r.NEVER);break;case fh:r.depthFunc(r.ALWAYS);break;case ph:r.depthFunc(r.LESS);break;case fo:r.depthFunc(r.LEQUAL);break;case mh:r.depthFunc(r.EQUAL);break;case gh:r.depthFunc(r.GEQUAL);break;case vh:r.depthFunc(r.GREATER);break;case _h:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=Ne}},setLocked:function(Ne){j=Ne},setClear:function(Ne){De!==Ne&&(Le&&(Ne=1-Ne),r.clearDepth(Ne),De=Ne)},reset:function(){j=!1,fe=null,ve=null,De=null,Le=!1}}}function o(){let j=!1,Le=null,fe=null,ve=null,De=null,Ne=null,ut=null,vt=null,zt=null;return{setTest:function(Et){j||(Et?_e(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!j&&(r.stencilMask(Et),Le=Et)},setFunc:function(Et,nn,pt){(fe!==Et||ve!==nn||De!==pt)&&(r.stencilFunc(Et,nn,pt),fe=Et,ve=nn,De=pt)},setOp:function(Et,nn,pt){(Ne!==Et||ut!==nn||vt!==pt)&&(r.stencilOp(Et,nn,pt),Ne=Et,ut=nn,vt=pt)},setLocked:function(Et){j=Et},setClear:function(Et){zt!==Et&&(r.clearStencil(Et),zt=Et)},reset:function(){j=!1,Le=null,fe=null,ve=null,De=null,Ne=null,ut=null,vt=null,zt=null}}}const a=new t,u=new n,c=new o,h=new WeakMap,f=new WeakMap;let m={},g={},v=new WeakMap,x=[],M=null,w=!1,S=null,y=null,I=null,L=null,T=null,P=null,N=null,D=new Dt(0,0,0),B=0,C=!1,E=null,O=null,Z=null,te=null,oe=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,me=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(G)[1]),de=me>=1):G.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),de=me>=2);let pe=null,le={};const U=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),Ae=new tn().fromArray(U),W=new tn().fromArray(Y);function ge(j,Le,fe,ve){const De=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(j,Ne),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<fe;ut++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Le+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Ne}const ye={};ye[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),_e(r.DEPTH_TEST),u.setFunc(fo),St(!1),yt(tg),_e(r.CULL_FACE),H(Vr);function _e(j){m[j]!==!0&&(r.enable(j),m[j]=!0)}function Pe(j){m[j]!==!1&&(r.disable(j),m[j]=!1)}function Qe(j,Le){return g[j]!==Le?(r.bindFramebuffer(j,Le),g[j]=Le,j===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Le),j===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function We(j,Le){let fe=x,ve=!1;if(j){fe=v.get(Le),fe===void 0&&(fe=[],v.set(Le,fe));const De=j.textures;if(fe.length!==De.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,ut=De.length;Ne<ut;Ne++)fe[Ne]=r.COLOR_ATTACHMENT0+Ne;fe.length=De.length,ve=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,ve=!0);ve&&r.drawBuffers(fe)}function It(j){return M!==j?(r.useProgram(j),M=j,!0):!1}const Ut={[gs]:r.FUNC_ADD,[F0]:r.FUNC_SUBTRACT,[k0]:r.FUNC_REVERSE_SUBTRACT};Ut[O0]=r.MIN,Ut[z0]=r.MAX;const gt={[B0]:r.ZERO,[G0]:r.ONE,[H0]:r.SRC_COLOR,[ch]:r.SRC_ALPHA,[Y0]:r.SRC_ALPHA_SATURATE,[j0]:r.DST_COLOR,[W0]:r.DST_ALPHA,[V0]:r.ONE_MINUS_SRC_COLOR,[dh]:r.ONE_MINUS_SRC_ALPHA,[$0]:r.ONE_MINUS_DST_COLOR,[X0]:r.ONE_MINUS_DST_ALPHA,[q0]:r.CONSTANT_COLOR,[K0]:r.ONE_MINUS_CONSTANT_COLOR,[Z0]:r.CONSTANT_ALPHA,[Q0]:r.ONE_MINUS_CONSTANT_ALPHA};function H(j,Le,fe,ve,De,Ne,ut,vt,zt,Et){if(j===Vr){w===!0&&(Pe(r.BLEND),w=!1);return}if(w===!1&&(_e(r.BLEND),w=!0),j!==U0){if(j!==S||Et!==C){if((y!==gs||T!==gs)&&(r.blendEquation(r.FUNC_ADD),y=gs,T=gs),Et)switch(j){case uo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ng:r.blendFunc(r.ONE,r.ONE);break;case ig:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case uo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ng:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ig:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}I=null,L=null,P=null,N=null,D.set(0,0,0),B=0,S=j,C=Et}return}De=De||Le,Ne=Ne||fe,ut=ut||ve,(Le!==y||De!==T)&&(r.blendEquationSeparate(Ut[Le],Ut[De]),y=Le,T=De),(fe!==I||ve!==L||Ne!==P||ut!==N)&&(r.blendFuncSeparate(gt[fe],gt[ve],gt[Ne],gt[ut]),I=fe,L=ve,P=Ne,N=ut),(vt.equals(D)===!1||zt!==B)&&(r.blendColor(vt.r,vt.g,vt.b,zt),D.copy(vt),B=zt),S=j,C=!1}function on(j,Le){j.side===rr?Pe(r.CULL_FACE):_e(r.CULL_FACE);let fe=j.side===Yn;Le&&(fe=!fe),St(fe),j.blending===uo&&j.transparent===!1?H(Vr):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),a.setMask(j.colorWrite);const ve=j.stencilWrite;c.setTest(ve),ve&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Nt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function St(j){E!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),E=j)}function yt(j){j!==D0?(_e(r.CULL_FACE),j!==O&&(j===tg?r.cullFace(r.BACK):j===N0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),O=j}function tt(j){j!==Z&&(de&&r.lineWidth(j),Z=j)}function Nt(j,Le,fe){j?(_e(r.POLYGON_OFFSET_FILL),(te!==Le||oe!==fe)&&(r.polygonOffset(Le,fe),te=Le,oe=fe)):Pe(r.POLYGON_OFFSET_FILL)}function $e(j){j?_e(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function F(j){j===void 0&&(j=r.TEXTURE0+he-1),pe!==j&&(r.activeTexture(j),pe=j)}function A(j,Le,fe){fe===void 0&&(pe===null?fe=r.TEXTURE0+he-1:fe=pe);let ve=le[fe];ve===void 0&&(ve={type:void 0,texture:void 0},le[fe]=ve),(ve.type!==j||ve.texture!==Le)&&(pe!==fe&&(r.activeTexture(fe),pe=fe),r.bindTexture(j,Le||ye[j]),ve.type=j,ve.texture=Le)}function re(){const j=le[pe];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function k(){try{r.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function se(){try{r.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function K(){try{r.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{r.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ee(){try{r.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{r.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xe(){try{r.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Se(){try{r.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{r.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ke(){try{r.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(j){Ae.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),Ae.copy(j))}function Ue(j){W.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),W.copy(j))}function dt(j,Le){let fe=f.get(Le);fe===void 0&&(fe=new WeakMap,f.set(Le,fe));let ve=fe.get(j);ve===void 0&&(ve=r.getUniformBlockIndex(Le,j.name),fe.set(j,ve))}function it(j,Le){const ve=f.get(Le).get(j);h.get(Le)!==ve&&(r.uniformBlockBinding(Le,ve,j.__bindingPointIndex),h.set(Le,ve))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},pe=null,le={},g={},v=new WeakMap,x=[],M=null,w=!1,S=null,y=null,I=null,L=null,T=null,P=null,N=null,D=new Dt(0,0,0),B=0,C=!1,E=null,O=null,Z=null,te=null,oe=null,Ae.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:_e,disable:Pe,bindFramebuffer:Qe,drawBuffers:We,useProgram:It,setBlending:H,setMaterial:on,setFlipSided:St,setCullFace:yt,setLineWidth:tt,setPolygonOffset:Nt,setScissorTest:$e,activeTexture:F,bindTexture:A,unbindTexture:re,compressedTexImage2D:k,compressedTexImage3D:se,texImage2D:Ie,texImage3D:Ke,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:Xe,texStorage3D:Se,texSubImage2D:K,texSubImage3D:xe,compressedTexSubImage2D:ee,compressedTexSubImage3D:He,scissor:et,viewport:Ue,reset:ft}}function IT(r,e,t,n,o,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new kt,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,A){return x?new OffscreenCanvas(F,A):Pu("canvas")}function w(F,A,re){let k=1;const se=$e(F);if((se.width>re||se.height>re)&&(k=re/Math.max(se.width,se.height)),k<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const K=Math.floor(k*se.width),xe=Math.floor(k*se.height);g===void 0&&(g=M(K,xe));const ee=A?M(K,xe):g;return ee.width=K,ee.height=xe,ee.getContext("2d").drawImage(F,0,0,K,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+K+"x"+xe+")."),ee}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),F;return F}function S(F){return F.generateMipmaps}function y(F){r.generateMipmap(F)}function I(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(F,A,re,k,se=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let K=A;if(A===r.RED&&(re===r.FLOAT&&(K=r.R32F),re===r.HALF_FLOAT&&(K=r.R16F),re===r.UNSIGNED_BYTE&&(K=r.R8)),A===r.RED_INTEGER&&(re===r.UNSIGNED_BYTE&&(K=r.R8UI),re===r.UNSIGNED_SHORT&&(K=r.R16UI),re===r.UNSIGNED_INT&&(K=r.R32UI),re===r.BYTE&&(K=r.R8I),re===r.SHORT&&(K=r.R16I),re===r.INT&&(K=r.R32I)),A===r.RG&&(re===r.FLOAT&&(K=r.RG32F),re===r.HALF_FLOAT&&(K=r.RG16F),re===r.UNSIGNED_BYTE&&(K=r.RG8)),A===r.RG_INTEGER&&(re===r.UNSIGNED_BYTE&&(K=r.RG8UI),re===r.UNSIGNED_SHORT&&(K=r.RG16UI),re===r.UNSIGNED_INT&&(K=r.RG32UI),re===r.BYTE&&(K=r.RG8I),re===r.SHORT&&(K=r.RG16I),re===r.INT&&(K=r.RG32I)),A===r.RGB_INTEGER&&(re===r.UNSIGNED_BYTE&&(K=r.RGB8UI),re===r.UNSIGNED_SHORT&&(K=r.RGB16UI),re===r.UNSIGNED_INT&&(K=r.RGB32UI),re===r.BYTE&&(K=r.RGB8I),re===r.SHORT&&(K=r.RGB16I),re===r.INT&&(K=r.RGB32I)),A===r.RGBA_INTEGER&&(re===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),re===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),re===r.UNSIGNED_INT&&(K=r.RGBA32UI),re===r.BYTE&&(K=r.RGBA8I),re===r.SHORT&&(K=r.RGBA16I),re===r.INT&&(K=r.RGBA32I)),A===r.RGB&&re===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),A===r.RGBA){const xe=se?Ru:Lt.getTransfer(k);re===r.FLOAT&&(K=r.RGBA32F),re===r.HALF_FLOAT&&(K=r.RGBA16F),re===r.UNSIGNED_BYTE&&(K=xe===Ft?r.SRGB8_ALPHA8:r.RGBA8),re===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),re===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function T(F,A){let re;return F?A===null||A===xs||A===xa?re=r.DEPTH24_STENCIL8:A===or?re=r.DEPTH32F_STENCIL8:A===ya&&(re=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===xs||A===xa?re=r.DEPTH_COMPONENT24:A===or?re=r.DEPTH_COMPONENT32F:A===ya&&(re=r.DEPTH_COMPONENT16),re}function P(F,A){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Pi&&F.minFilter!==Gi?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function N(F){const A=F.target;A.removeEventListener("dispose",N),B(A),A.isVideoTexture&&m.delete(A)}function D(F){const A=F.target;A.removeEventListener("dispose",D),E(A)}function B(F){const A=n.get(F);if(A.__webglInit===void 0)return;const re=F.source,k=v.get(re);if(k){const se=k[A.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(F),Object.keys(k).length===0&&v.delete(re)}n.remove(F)}function C(F){const A=n.get(F);r.deleteTexture(A.__webglTexture);const re=F.source,k=v.get(re);delete k[A.__cacheKey],u.memory.textures--}function E(F){const A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(A.__webglFramebuffer[k]))for(let se=0;se<A.__webglFramebuffer[k].length;se++)r.deleteFramebuffer(A.__webglFramebuffer[k][se]);else r.deleteFramebuffer(A.__webglFramebuffer[k]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[k])}else{if(Array.isArray(A.__webglFramebuffer))for(let k=0;k<A.__webglFramebuffer.length;k++)r.deleteFramebuffer(A.__webglFramebuffer[k]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let k=0;k<A.__webglColorRenderbuffer.length;k++)A.__webglColorRenderbuffer[k]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[k]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const re=F.textures;for(let k=0,se=re.length;k<se;k++){const K=n.get(re[k]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),u.memory.textures--),n.remove(re[k])}n.remove(F)}let O=0;function Z(){O=0}function te(){const F=O;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),O+=1,F}function oe(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function he(F,A){const re=n.get(F);if(F.isVideoTexture&&tt(F),F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){const k=F.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(re,F,A);return}}t.bindTexture(r.TEXTURE_2D,re.__webglTexture,r.TEXTURE0+A)}function de(F,A){const re=n.get(F);if(F.version>0&&re.__version!==F.version){W(re,F,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,re.__webglTexture,r.TEXTURE0+A)}function me(F,A){const re=n.get(F);if(F.version>0&&re.__version!==F.version){W(re,F,A);return}t.bindTexture(r.TEXTURE_3D,re.__webglTexture,r.TEXTURE0+A)}function G(F,A){const re=n.get(F);if(F.version>0&&re.__version!==F.version){ge(re,F,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture,r.TEXTURE0+A)}const pe={[Sh]:r.REPEAT,[_s]:r.CLAMP_TO_EDGE,[Eh]:r.MIRRORED_REPEAT},le={[Pi]:r.NEAREST,[lx]:r.NEAREST_MIPMAP_NEAREST,[Ol]:r.NEAREST_MIPMAP_LINEAR,[Gi]:r.LINEAR,[Sd]:r.LINEAR_MIPMAP_NEAREST,[ys]:r.LINEAR_MIPMAP_LINEAR},U={[fx]:r.NEVER,[yx]:r.ALWAYS,[px]:r.LESS,[Vv]:r.LEQUAL,[mx]:r.EQUAL,[_x]:r.GEQUAL,[gx]:r.GREATER,[vx]:r.NOTEQUAL};function Y(F,A){if(A.type===or&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Gi||A.magFilter===Sd||A.magFilter===Ol||A.magFilter===ys||A.minFilter===Gi||A.minFilter===Sd||A.minFilter===Ol||A.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,pe[A.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,pe[A.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,pe[A.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,le[A.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,le[A.minFilter]),A.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pi||A.minFilter!==Ol&&A.minFilter!==ys||A.type===or&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ae(F,A){let re=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",N));const k=A.source;let se=v.get(k);se===void 0&&(se={},v.set(k,se));const K=oe(A);if(K!==F.__cacheKey){se[K]===void 0&&(se[K]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,re=!0),se[K].usedTimes++;const xe=se[F.__cacheKey];xe!==void 0&&(se[F.__cacheKey].usedTimes--,xe.usedTimes===0&&C(A)),F.__cacheKey=K,F.__webglTexture=se[K].texture}return re}function W(F,A,re){let k=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(k=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(k=r.TEXTURE_3D);const se=Ae(F,A),K=A.source;t.bindTexture(k,F.__webglTexture,r.TEXTURE0+re);const xe=n.get(K);if(K.version!==xe.__version||se===!0){t.activeTexture(r.TEXTURE0+re);const ee=Lt.getPrimaries(Lt.workingColorSpace),He=A.colorSpace===Hr?null:Lt.getPrimaries(A.colorSpace),Xe=A.colorSpace===Hr||ee===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Se=w(A.image,!1,o.maxTextureSize);Se=Nt(A,Se);const Ie=a.convert(A.format,A.colorSpace),Ke=a.convert(A.type);let et=L(A.internalFormat,Ie,Ke,A.colorSpace,A.isVideoTexture);Y(k,A);let Ue;const dt=A.mipmaps,it=A.isVideoTexture!==!0,ft=xe.__version===void 0||se===!0,j=K.dataReady,Le=P(A,Se);if(A.isDepthTexture)et=T(A.format===Ea,A.type),ft&&(it?t.texStorage2D(r.TEXTURE_2D,1,et,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,et,Se.width,Se.height,0,Ie,Ke,null));else if(A.isDataTexture)if(dt.length>0){it&&ft&&t.texStorage2D(r.TEXTURE_2D,Le,et,dt[0].width,dt[0].height);for(let fe=0,ve=dt.length;fe<ve;fe++)Ue=dt[fe],it?j&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ue.width,Ue.height,Ie,Ke,Ue.data):t.texImage2D(r.TEXTURE_2D,fe,et,Ue.width,Ue.height,0,Ie,Ke,Ue.data);A.generateMipmaps=!1}else it?(ft&&t.texStorage2D(r.TEXTURE_2D,Le,et,Se.width,Se.height),j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,Ie,Ke,Se.data)):t.texImage2D(r.TEXTURE_2D,0,et,Se.width,Se.height,0,Ie,Ke,Se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,et,dt[0].width,dt[0].height,Se.depth);for(let fe=0,ve=dt.length;fe<ve;fe++)if(Ue=dt[fe],A.format!==Ci)if(Ie!==null)if(it){if(j)if(A.layerUpdates.size>0){const De=Lg(Ue.width,Ue.height,A.format,A.type);for(const Ne of A.layerUpdates){const ut=Ue.data.subarray(Ne*De/Ue.data.BYTES_PER_ELEMENT,(Ne+1)*De/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,Ne,Ue.width,Ue.height,1,Ie,ut)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ue.width,Ue.height,Se.depth,Ie,Ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,et,Ue.width,Ue.height,Se.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?j&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ue.width,Ue.height,Se.depth,Ie,Ke,Ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,et,Ue.width,Ue.height,Se.depth,0,Ie,Ke,Ue.data)}else{it&&ft&&t.texStorage2D(r.TEXTURE_2D,Le,et,dt[0].width,dt[0].height);for(let fe=0,ve=dt.length;fe<ve;fe++)Ue=dt[fe],A.format!==Ci?Ie!==null?it?j&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,Ue.width,Ue.height,Ie,Ue.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,et,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?j&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ue.width,Ue.height,Ie,Ke,Ue.data):t.texImage2D(r.TEXTURE_2D,fe,et,Ue.width,Ue.height,0,Ie,Ke,Ue.data)}else if(A.isDataArrayTexture)if(it){if(ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,et,Se.width,Se.height,Se.depth),j)if(A.layerUpdates.size>0){const fe=Lg(Se.width,Se.height,A.format,A.type);for(const ve of A.layerUpdates){const De=Se.data.subarray(ve*fe/Se.data.BYTES_PER_ELEMENT,(ve+1)*fe/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,Se.width,Se.height,1,Ie,Ke,De)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ie,Ke,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,Ie,Ke,Se.data);else if(A.isData3DTexture)it?(ft&&t.texStorage3D(r.TEXTURE_3D,Le,et,Se.width,Se.height,Se.depth),j&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ie,Ke,Se.data)):t.texImage3D(r.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,Ie,Ke,Se.data);else if(A.isFramebufferTexture){if(ft)if(it)t.texStorage2D(r.TEXTURE_2D,Le,et,Se.width,Se.height);else{let fe=Se.width,ve=Se.height;for(let De=0;De<Le;De++)t.texImage2D(r.TEXTURE_2D,De,et,fe,ve,0,Ie,Ke,null),fe>>=1,ve>>=1}}else if(dt.length>0){if(it&&ft){const fe=$e(dt[0]);t.texStorage2D(r.TEXTURE_2D,Le,et,fe.width,fe.height)}for(let fe=0,ve=dt.length;fe<ve;fe++)Ue=dt[fe],it?j&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ie,Ke,Ue):t.texImage2D(r.TEXTURE_2D,fe,et,Ie,Ke,Ue);A.generateMipmaps=!1}else if(it){if(ft){const fe=$e(Se);t.texStorage2D(r.TEXTURE_2D,Le,et,fe.width,fe.height)}j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie,Ke,Se)}else t.texImage2D(r.TEXTURE_2D,0,et,Ie,Ke,Se);S(A)&&y(k),xe.__version=K.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function ge(F,A,re){if(A.image.length!==6)return;const k=Ae(F,A),se=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+re);const K=n.get(se);if(se.version!==K.__version||k===!0){t.activeTexture(r.TEXTURE0+re);const xe=Lt.getPrimaries(Lt.workingColorSpace),ee=A.colorSpace===Hr?null:Lt.getPrimaries(A.colorSpace),He=A.colorSpace===Hr||xe===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Xe=A.isCompressedTexture||A.image[0].isCompressedTexture,Se=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let ve=0;ve<6;ve++)!Xe&&!Se?Ie[ve]=w(A.image[ve],!0,o.maxCubemapSize):Ie[ve]=Se?A.image[ve].image:A.image[ve],Ie[ve]=Nt(A,Ie[ve]);const Ke=Ie[0],et=a.convert(A.format,A.colorSpace),Ue=a.convert(A.type),dt=L(A.internalFormat,et,Ue,A.colorSpace),it=A.isVideoTexture!==!0,ft=K.__version===void 0||k===!0,j=se.dataReady;let Le=P(A,Ke);Y(r.TEXTURE_CUBE_MAP,A);let fe;if(Xe){it&&ft&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,dt,Ke.width,Ke.height);for(let ve=0;ve<6;ve++){fe=Ie[ve].mipmaps;for(let De=0;De<fe.length;De++){const Ne=fe[De];A.format!==Ci?et!==null?it?j&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De,0,0,Ne.width,Ne.height,et,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De,dt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De,0,0,Ne.width,Ne.height,et,Ue,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De,dt,Ne.width,Ne.height,0,et,Ue,Ne.data)}}}else{if(fe=A.mipmaps,it&&ft){fe.length>0&&Le++;const ve=$e(Ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,dt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Se){it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie[ve].width,Ie[ve].height,et,Ue,Ie[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,dt,Ie[ve].width,Ie[ve].height,0,et,Ue,Ie[ve].data);for(let De=0;De<fe.length;De++){const ut=fe[De].image[ve].image;it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De+1,0,0,ut.width,ut.height,et,Ue,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De+1,dt,ut.width,ut.height,0,et,Ue,ut.data)}}else{it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,et,Ue,Ie[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,dt,et,Ue,Ie[ve]);for(let De=0;De<fe.length;De++){const Ne=fe[De];it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De+1,0,0,et,Ue,Ne.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De+1,dt,et,Ue,Ne.image[ve])}}}S(A)&&y(r.TEXTURE_CUBE_MAP),K.__version=se.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function ye(F,A,re,k,se,K){const xe=a.convert(re.format,re.colorSpace),ee=a.convert(re.type),He=L(re.internalFormat,xe,ee,re.colorSpace),Xe=n.get(A),Se=n.get(re);if(Se.__renderTarget=A,!Xe.__hasExternalTextures){const Ie=Math.max(1,A.width>>K),Ke=Math.max(1,A.height>>K);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,K,He,Ie,Ke,A.depth,0,xe,ee,null):t.texImage2D(se,K,He,Ie,Ke,0,xe,ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),yt(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,se,Se.__webglTexture,0,St(A)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,k,se,Se.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(F,A,re){if(r.bindRenderbuffer(r.RENDERBUFFER,F),A.depthBuffer){const k=A.depthTexture,se=k&&k.isDepthTexture?k.type:null,K=T(A.stencilBuffer,se),xe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=St(A);yt(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,K,A.width,A.height):re?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,K,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,K,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,F)}else{const k=A.textures;for(let se=0;se<k.length;se++){const K=k[se],xe=a.convert(K.format,K.colorSpace),ee=a.convert(K.type),He=L(K.internalFormat,xe,ee,K.colorSpace),Xe=St(A);re&&yt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,He,A.width,A.height):yt(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe,He,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,He,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(A.depthTexture);k.__renderTarget=A,(!k.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),he(A.depthTexture,0);const se=k.__webglTexture,K=St(A);if(A.depthTexture.format===Sa)yt(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(A.depthTexture.format===Ea)yt(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Qe(F){const A=n.get(F),re=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const k=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),k){const se=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,k.removeEventListener("dispose",se)};k.addEventListener("dispose",se),A.__depthDisposeCallback=se}A.__boundDepthTexture=k}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");const k=F.texture.mipmaps;k&&k.length>0?Pe(A.__webglFramebuffer[0],F):Pe(A.__webglFramebuffer,F)}else if(re){A.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[k]),A.__webglDepthbuffer[k]===void 0)A.__webglDepthbuffer[k]=r.createRenderbuffer(),_e(A.__webglDepthbuffer[k],F,!1);else{const se=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=A.__webglDepthbuffer[k];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,K)}}else{const k=F.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),_e(A.__webglDepthbuffer,F,!1);else{const se=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(F,A,re){const k=n.get(F);A!==void 0&&ye(k.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),re!==void 0&&Qe(F)}function It(F){const A=F.texture,re=n.get(F),k=n.get(A);F.addEventListener("dispose",D);const se=F.textures,K=F.isWebGLCubeRenderTarget===!0,xe=se.length>1;if(xe||(k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture()),k.__version=A.version,u.memory.textures++),K){re.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[ee]=[];for(let He=0;He<A.mipmaps.length;He++)re.__webglFramebuffer[ee][He]=r.createFramebuffer()}else re.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let ee=0;ee<A.mipmaps.length;ee++)re.__webglFramebuffer[ee]=r.createFramebuffer()}else re.__webglFramebuffer=r.createFramebuffer();if(xe)for(let ee=0,He=se.length;ee<He;ee++){const Xe=n.get(se[ee]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=r.createTexture(),u.memory.textures++)}if(F.samples>0&&yt(F)===!1){re.__webglMultisampledFramebuffer=r.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ee=0;ee<se.length;ee++){const He=se[ee];re.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,re.__webglColorRenderbuffer[ee]);const Xe=a.convert(He.format,He.colorSpace),Se=a.convert(He.type),Ie=L(He.internalFormat,Xe,Se,He.colorSpace,F.isXRRenderTarget===!0),Ke=St(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Ie,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,re.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(re.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(re.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture),Y(r.TEXTURE_CUBE_MAP,A);for(let ee=0;ee<6;ee++)if(A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)ye(re.__webglFramebuffer[ee][He],F,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He);else ye(re.__webglFramebuffer[ee],F,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);S(A)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ee=0,He=se.length;ee<He;ee++){const Xe=se[ee],Se=n.get(Xe);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),Y(r.TEXTURE_2D,Xe),ye(re.__webglFramebuffer,F,Xe,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,0),S(Xe)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ee=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,k.__webglTexture),Y(ee,A),A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)ye(re.__webglFramebuffer[He],F,A,r.COLOR_ATTACHMENT0,ee,He);else ye(re.__webglFramebuffer,F,A,r.COLOR_ATTACHMENT0,ee,0);S(A)&&y(ee),t.unbindTexture()}F.depthBuffer&&Qe(F)}function Ut(F){const A=F.textures;for(let re=0,k=A.length;re<k;re++){const se=A[re];if(S(se)){const K=I(F),xe=n.get(se).__webglTexture;t.bindTexture(K,xe),y(K),t.unbindTexture()}}}const gt=[],H=[];function on(F){if(F.samples>0){if(yt(F)===!1){const A=F.textures,re=F.width,k=F.height;let se=r.COLOR_BUFFER_BIT;const K=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(F),ee=A.length>1;if(ee)for(let Xe=0;Xe<A.length;Xe++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const He=F.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Xe=0;Xe<A.length;Xe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Xe]);const Se=n.get(A[Xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,re,k,0,0,re,k,se,r.NEAREST),h===!0&&(gt.length=0,H.length=0,gt.push(r.COLOR_ATTACHMENT0+Xe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(gt.push(K),H.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let Xe=0;Xe<A.length;Xe++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Xe]);const Se=n.get(A[Xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const A=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function St(F){return Math.min(o.maxSamples,F.samples)}function yt(F){const A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function tt(F){const A=u.render.frame;m.get(F)!==A&&(m.set(F,A),F.update())}function Nt(F,A){const re=F.colorSpace,k=F.format,se=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||re!==go&&re!==Hr&&(Lt.getTransfer(re)===Ft?(k!==Ci||se!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}function $e(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=te,this.resetTextureUnits=Z,this.setTexture2D=he,this.setTexture2DArray=de,this.setTexture3D=me,this.setTextureCube=G,this.rebindTextures=We,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=yt}function UT(r,e){function t(n,o=Hr){let a;const u=Lt.getTransfer(o);if(n===dr)return r.UNSIGNED_BYTE;if(n===cf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===df)return r.UNSIGNED_SHORT_5_5_5_1;if(n===kv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Uv)return r.BYTE;if(n===Fv)return r.SHORT;if(n===ya)return r.UNSIGNED_SHORT;if(n===uf)return r.INT;if(n===xs)return r.UNSIGNED_INT;if(n===or)return r.FLOAT;if(n===Ma)return r.HALF_FLOAT;if(n===Ov)return r.ALPHA;if(n===zv)return r.RGB;if(n===Ci)return r.RGBA;if(n===Sa)return r.DEPTH_COMPONENT;if(n===Ea)return r.DEPTH_STENCIL;if(n===Bv)return r.RED;if(n===hf)return r.RED_INTEGER;if(n===Gv)return r.RG;if(n===ff)return r.RG_INTEGER;if(n===pf)return r.RGBA_INTEGER;if(n===xu||n===Su||n===Eu||n===Mu)if(u===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Su)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mh||n===wh||n===Th||n===bh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Mh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ah||n===Rh||n===Ch)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ah||n===Rh)return u===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ch)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ph||n===Lh||n===Dh||n===Nh||n===Ih||n===Uh||n===Fh||n===kh||n===Oh||n===zh||n===Bh||n===Gh||n===Hh||n===Vh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ph)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ih)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vh)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wu||n===Wh||n===Xh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===wu)return u===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hv||n===jh||n===$h||n===Yh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===wu)return a.COMPRESSED_RED_RGTC1_EXT;if(n===jh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$h)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const FT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kT=`
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

}`;class OT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const o=new qn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $r({vertexShader:FT,fragmentShader:kT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lr(new Uu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zT extends xo{constructor(e,t){super();const n=this;let o=null,a=1,u=null,c="local-floor",h=1,f=null,m=null,g=null,v=null,x=null,M=null;const w=new OT,S=t.getContextAttributes();let y=null,I=null;const L=[],T=[],P=new kt;let N=null;const D=new hi;D.viewport=new tn;const B=new hi;B.viewport=new tn;const C=[D,B],E=new sS;let O=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ge=L[W];return ge===void 0&&(ge=new Vd,L[W]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(W){let ge=L[W];return ge===void 0&&(ge=new Vd,L[W]=ge),ge.getGripSpace()},this.getHand=function(W){let ge=L[W];return ge===void 0&&(ge=new Vd,L[W]=ge),ge.getHandSpace()};function te(W){const ge=T.indexOf(W.inputSource);if(ge===-1)return;const ye=L[ge];ye!==void 0&&(ye.update(W.inputSource,W.frame,f||u),ye.dispatchEvent({type:W.type,data:W.inputSource}))}function oe(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",he);for(let W=0;W<L.length;W++){const ge=T[W];ge!==null&&(T[W]=null,L[W].disconnect(ge))}O=null,Z=null,w.reset(),e.setRenderTarget(y),x=null,v=null,g=null,o=null,I=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){c=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(W){f=W},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,_e=null,Pe=null;S.depth&&(Pe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?Ea:Sa,_e=S.stencil?xa:xs);const Qe={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Qe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new Ss(v.textureWidth,v.textureHeight,{format:Ci,type:dr,depthTexture:new n_(v.textureWidth,v.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new Ss(x.framebufferWidth,x.framebufferHeight,{format:Ci,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),f=null,u=await o.requestReferenceSpace(c),Ae.setContext(o),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function he(W){for(let ge=0;ge<W.removed.length;ge++){const ye=W.removed[ge],_e=T.indexOf(ye);_e>=0&&(T[_e]=null,L[_e].disconnect(ye))}for(let ge=0;ge<W.added.length;ge++){const ye=W.added[ge];let _e=T.indexOf(ye);if(_e===-1){for(let Qe=0;Qe<L.length;Qe++)if(Qe>=T.length){T.push(ye),_e=Qe;break}else if(T[Qe]===null){T[Qe]=ye,_e=Qe;break}if(_e===-1)break}const Pe=L[_e];Pe&&Pe.connect(ye)}}const de=new ce,me=new ce;function G(W,ge,ye){de.setFromMatrixPosition(ge.matrixWorld),me.setFromMatrixPosition(ye.matrixWorld);const _e=de.distanceTo(me),Pe=ge.projectionMatrix.elements,Qe=ye.projectionMatrix.elements,We=Pe[14]/(Pe[10]-1),It=Pe[14]/(Pe[10]+1),Ut=(Pe[9]+1)/Pe[5],gt=(Pe[9]-1)/Pe[5],H=(Pe[8]-1)/Pe[0],on=(Qe[8]+1)/Qe[0],St=We*H,yt=We*on,tt=_e/(-H+on),Nt=tt*-H;if(ge.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Nt),W.translateZ(tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Pe[10]===-1)W.projectionMatrix.copy(ge.projectionMatrix),W.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const $e=We+tt,F=It+tt,A=St-Nt,re=yt+(_e-Nt),k=Ut*It/F*$e,se=gt*It/F*$e;W.projectionMatrix.makePerspective(A,re,k,se,$e,F),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function pe(W,ge){ge===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ge.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let ge=W.near,ye=W.far;w.texture!==null&&(w.depthNear>0&&(ge=w.depthNear),w.depthFar>0&&(ye=w.depthFar)),E.near=B.near=D.near=ge,E.far=B.far=D.far=ye,(O!==E.near||Z!==E.far)&&(o.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,Z=E.far),D.layers.mask=W.layers.mask|2,B.layers.mask=W.layers.mask|4,E.layers.mask=D.layers.mask|B.layers.mask;const _e=W.parent,Pe=E.cameras;pe(E,_e);for(let Qe=0;Qe<Pe.length;Qe++)pe(Pe[Qe],_e);Pe.length===2?G(E,D,B):E.projectionMatrix.copy(D.projectionMatrix),le(W,E,_e)};function le(W,ge,ye){ye===null?W.matrix.copy(ge.matrixWorld):(W.matrix.copy(ye.matrixWorld),W.matrix.invert(),W.matrix.multiply(ge.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ge.projectionMatrix),W.projectionMatrixInverse.copy(ge.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=qh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(W){h=W,v!==null&&(v.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)};let U=null;function Y(W,ge){if(m=ge.getViewerPose(f||u),M=ge,m!==null){const ye=m.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let _e=!1;ye.length!==E.cameras.length&&(E.cameras.length=0,_e=!0);for(let We=0;We<ye.length;We++){const It=ye[We];let Ut=null;if(x!==null)Ut=x.getViewport(It);else{const H=g.getViewSubImage(v,It);Ut=H.viewport,We===0&&(e.setRenderTargetTextures(I,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(I))}let gt=C[We];gt===void 0&&(gt=new hi,gt.layers.enable(We),gt.viewport=new tn,C[We]=gt),gt.matrix.fromArray(It.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(It.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),We===0&&(E.matrix.copy(gt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),_e===!0&&E.cameras.push(gt)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const We=g.getDepthInformation(ye[0]);We&&We.isValid&&We.texture&&w.init(e,We,o.renderState)}}for(let ye=0;ye<L.length;ye++){const _e=T[ye],Pe=L[ye];_e!==null&&Pe!==void 0&&Pe.update(_e,ge,f||u)}U&&U(W,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),M=null}const Ae=new i_;Ae.setAnimationLoop(Y),this.setAnimationLoop=function(W){U=W},this.dispose=function(){}}}const hs=new hr,BT=new Kt;function GT(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function n(S,y){y.color.getRGB(S.fogColor.value,Kv(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,I,L,T){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),m(S,y)):y.isMeshStandardMaterial?(a(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,T)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),w(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?h(S,y,I,L):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Yn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Yn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const I=e.get(y),L=I.envMap,T=I.envMapRotation;L&&(S.envMap.value=L,hs.copy(T),hs.x*=-1,hs.y*=-1,hs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),S.envMapRotation.value.setFromMatrix4(BT.makeRotationFromEuler(hs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,I,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*I,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,I){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const I=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function HT(r,e,t,n){let o={},a={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const T=L.program;n.uniformBlockBinding(I,T)}function f(I,L){let T=o[I.id];T===void 0&&(M(I),T=m(I),o[I.id]=T,I.addEventListener("dispose",S));const P=L.program;n.updateUBOMapping(I,P);const N=e.render.frame;a[I.id]!==N&&(v(I),a[I.id]=N)}function m(I){const L=g();I.__bindingPointIndex=L;const T=r.createBuffer(),P=I.__size,N=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,P,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,T),T}function g(){for(let I=0;I<c;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const L=o[I.id],T=I.uniforms,P=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,D=T.length;N<D;N++){const B=Array.isArray(T[N])?T[N]:[T[N]];for(let C=0,E=B.length;C<E;C++){const O=B[C];if(x(O,N,C,P)===!0){const Z=O.__offset,te=Array.isArray(O.value)?O.value:[O.value];let oe=0;for(let he=0;he<te.length;he++){const de=te[he],me=w(de);typeof de=="number"||typeof de=="boolean"?(O.__data[0]=de,r.bufferSubData(r.UNIFORM_BUFFER,Z+oe,O.__data)):de.isMatrix3?(O.__data[0]=de.elements[0],O.__data[1]=de.elements[1],O.__data[2]=de.elements[2],O.__data[3]=0,O.__data[4]=de.elements[3],O.__data[5]=de.elements[4],O.__data[6]=de.elements[5],O.__data[7]=0,O.__data[8]=de.elements[6],O.__data[9]=de.elements[7],O.__data[10]=de.elements[8],O.__data[11]=0):(de.toArray(O.__data,oe),oe+=me.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(I,L,T,P){const N=I.value,D=L+"_"+T;if(P[D]===void 0)return typeof N=="number"||typeof N=="boolean"?P[D]=N:P[D]=N.clone(),!0;{const B=P[D];if(typeof N=="number"||typeof N=="boolean"){if(B!==N)return P[D]=N,!0}else if(B.equals(N)===!1)return B.copy(N),!0}return!1}function M(I){const L=I.uniforms;let T=0;const P=16;for(let D=0,B=L.length;D<B;D++){const C=Array.isArray(L[D])?L[D]:[L[D]];for(let E=0,O=C.length;E<O;E++){const Z=C[E],te=Array.isArray(Z.value)?Z.value:[Z.value];for(let oe=0,he=te.length;oe<he;oe++){const de=te[oe],me=w(de),G=T%P,pe=G%me.boundary,le=G+pe;T+=pe,le!==0&&P-le<me.storage&&(T+=P-le),Z.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=T,T+=me.storage}}}const N=T%P;return N>0&&(T+=P-N),I.__size=T,I.__cache={},this}function w(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function S(I){const L=I.target;L.removeEventListener("dispose",S);const T=u.indexOf(L.__bindingPointIndex);u.splice(T,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function y(){for(const I in o)r.deleteBuffer(o[I]);u=[],o={},a={}}return{bind:h,update:f,dispose:y}}class VT{constructor(e={}){const{canvas:t=Sx(),context:n=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),w=new Int32Array(4);let S=null,y=null;const I=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1;this._outputColorSpace=di;let N=0,D=0,B=null,C=-1,E=null;const O=new tn,Z=new tn;let te=null;const oe=new Dt(0);let he=0,de=t.width,me=t.height,G=1,pe=null,le=null;const U=new tn(0,0,de,me),Y=new tn(0,0,de,me);let Ae=!1;const W=new Jv;let ge=!1,ye=!1;const _e=new Kt,Pe=new Kt,Qe=new ce,We=new tn,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function gt(){return B===null?G:1}let H=n;function on(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lf}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),H===null){const $="webgl2";if(H=on($,R),H===null)throw on($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let St,yt,tt,Nt,$e,F,A,re,k,se,K,xe,ee,He,Xe,Se,Ie,Ke,et,Ue,dt,it,ft,j;function Le(){St=new JM(H),St.init(),it=new UT(H,St),yt=new jM(H,St,e,it),tt=new NT(H,St),yt.reverseDepthBuffer&&v&&tt.buffers.depth.setReversed(!0),Nt=new nw(H),$e=new xT,F=new IT(H,St,tt,$e,yt,it,Nt),A=new YM(T),re=new QM(T),k=new lS(H),ft=new WM(H,k),se=new ew(H,k,Nt,ft),K=new rw(H,se,k,Nt),et=new iw(H,yt,F),Se=new $M($e),xe=new yT(T,A,re,St,yt,ft,Se),ee=new GT(T,$e),He=new ET,Xe=new RT(St),Ke=new VM(T,A,re,tt,K,x,h),Ie=new LT(T,K,yt),j=new HT(H,Nt,yt,tt),Ue=new XM(H,St,Nt),dt=new tw(H,St,Nt),Nt.programs=xe.programs,T.capabilities=yt,T.extensions=St,T.properties=$e,T.renderLists=He,T.shadowMap=Ie,T.state=tt,T.info=Nt}Le();const fe=new zT(T,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=St.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=St.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(de,me,!1))},this.getSize=function(R){return R.set(de,me)},this.setSize=function(R,$,ue=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=R,me=$,t.width=Math.floor(R*G),t.height=Math.floor($*G),ue===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(de*G,me*G).floor()},this.setDrawingBufferSize=function(R,$,ue){de=R,me=$,G=ue,t.width=Math.floor(R*ue),t.height=Math.floor($*ue),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,$,ue,J){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,$,ue,J),tt.viewport(O.copy(U).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(Y)},this.setScissor=function(R,$,ue,J){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,$,ue,J),tt.scissor(Z.copy(Y).multiplyScalar(G).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){tt.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){pe=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,ue=!0){let J=0;if(R){let q=!1;if(B!==null){const be=B.texture.format;q=be===pf||be===ff||be===hf}if(q){const be=B.texture.type,Fe=be===dr||be===xs||be===ya||be===xa||be===cf||be===df,ze=Ke.getClearColor(),Ve=Ke.getClearAlpha(),lt=ze.r,ot=ze.g,Ye=ze.b;Fe?(M[0]=lt,M[1]=ot,M[2]=Ye,M[3]=Ve,H.clearBufferuiv(H.COLOR,0,M)):(w[0]=lt,w[1]=ot,w[2]=Ye,w[3]=Ve,H.clearBufferiv(H.COLOR,0,w))}else J|=H.COLOR_BUFFER_BIT}$&&(J|=H.DEPTH_BUFFER_BIT),ue&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ke.dispose(),He.dispose(),Xe.dispose(),$e.dispose(),A.dispose(),re.dispose(),K.dispose(),ft.dispose(),j.dispose(),xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Gt),fe.removeEventListener("sessionend",Mn),$t.stop()};function ve(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=Nt.autoReset,$=Ie.enabled,ue=Ie.autoUpdate,J=Ie.needsUpdate,q=Ie.type;Le(),Nt.autoReset=R,Ie.enabled=$,Ie.autoUpdate=ue,Ie.needsUpdate=J,Ie.type=q}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){const $=R.target;$.removeEventListener("dispose",ut),vt($)}function vt(R){zt(R),$e.remove(R)}function zt(R){const $=$e.get(R).programs;$!==void 0&&($.forEach(function(ue){xe.releaseProgram(ue)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ue,J,q,be){$===null&&($=It);const Fe=q.isMesh&&q.matrixWorld.determinant()<0,ze=Da(R,$,ue,J,q);tt.setMaterial(J,Fe);let Ve=ue.index,lt=1;if(J.wireframe===!0){if(Ve=se.getWireframeAttribute(ue),Ve===void 0)return;lt=2}const ot=ue.drawRange,Ye=ue.attributes.position;let Tt=ot.start*lt,mt=(ot.start+ot.count)*lt;be!==null&&(Tt=Math.max(Tt,be.start*lt),mt=Math.min(mt,(be.start+be.count)*lt)),Ve!==null?(Tt=Math.max(Tt,0),mt=Math.min(mt,Ve.count)):Ye!=null&&(Tt=Math.max(Tt,0),mt=Math.min(mt,Ye.count));const Zt=mt-Tt;if(Zt<0||Zt===1/0)return;ft.setup(q,J,ze,ue,Ve);let Xt,At=Ue;if(Ve!==null&&(Xt=k.get(Ve),At=dt,At.setIndex(Xt)),q.isMesh)J.wireframe===!0?(tt.setLineWidth(J.wireframeLinewidth*gt()),At.setMode(H.LINES)):At.setMode(H.TRIANGLES);else if(q.isLine){let nt=J.linewidth;nt===void 0&&(nt=1),tt.setLineWidth(nt*gt()),q.isLineSegments?At.setMode(H.LINES):q.isLineLoop?At.setMode(H.LINE_LOOP):At.setMode(H.LINE_STRIP)}else q.isPoints?At.setMode(H.POINTS):q.isSprite&&At.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Tu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))At.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const nt=q._multiDrawStarts,Qt=q._multiDrawCounts,wt=q._multiDrawCount,wn=Ve?k.get(Ve).bytesPerElement:1,mr=$e.get(J).currentProgram.getUniforms();for(let Un=0;Un<wt;Un++)mr.setValue(H,"_gl_DrawID",Un),At.render(nt[Un]/wn,Qt[Un])}else if(q.isInstancedMesh)At.renderInstances(Tt,Zt,q.count);else if(ue.isInstancedBufferGeometry){const nt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Qt=Math.min(ue.instanceCount,nt);At.renderInstances(Tt,Zt,Qt)}else At.render(Tt,Zt)};function Et(R,$,ue){R.transparent===!0&&R.side===rr&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Es(R,$,ue),R.side=jr,R.needsUpdate=!0,Es(R,$,ue),R.side=rr):Es(R,$,ue)}this.compile=function(R,$,ue=null){ue===null&&(ue=R),y=Xe.get(ue),y.init($),L.push(y),ue.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),R!==ue&&R.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights();const J=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let Fe=0;Fe<be.length;Fe++){const ze=be[Fe];Et(ze,ue,q),J.add(ze)}else Et(be,ue,q),J.add(be)}),y=L.pop(),J},this.compileAsync=function(R,$,ue=null){const J=this.compile(R,$,ue);return new Promise(q=>{function be(){if(J.forEach(function(Fe){$e.get(Fe).currentProgram.isReady()&&J.delete(Fe)}),J.size===0){q(R);return}setTimeout(be,10)}St.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let nn=null;function pt(R){nn&&nn(R)}function Gt(){$t.stop()}function Mn(){$t.start()}const $t=new i_;$t.setAnimationLoop(pt),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(R){nn=R,fe.setAnimationLoop(R),R===null?$t.stop():$t.start()},fe.addEventListener("sessionstart",Gt),fe.addEventListener("sessionend",Mn),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera($),$=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,$,B),y=Xe.get(R,L.length),y.init($),L.push(y),Pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),W.setFromProjectionMatrix(Pe),ye=this.localClippingEnabled,ge=Se.init(this.clippingPlanes,ye),S=He.get(R,I.length),S.init(),I.push(S),fe.enabled===!0&&fe.isPresenting===!0){const be=T.xr.getDepthSensingMesh();be!==null&&zn(be,$,-1/0,T.sortObjects)}zn(R,$,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(pe,le),Ut=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Ut&&Ke.addToRenderList(S,R),this.info.render.frame++,ge===!0&&Se.beginShadows();const ue=y.state.shadowsArray;Ie.render(ue,R,$),ge===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=S.opaque,q=S.transmissive;if(y.setupLights(),$.isArrayCamera){const be=$.cameras;if(q.length>0)for(let Fe=0,ze=be.length;Fe<ze;Fe++){const Ve=be[Fe];Yr(J,q,R,Ve)}Ut&&Ke.render(R);for(let Fe=0,ze=be.length;Fe<ze;Fe++){const Ve=be[Fe];Di(S,R,Ve,Ve.viewport)}}else q.length>0&&Yr(J,q,R,$),Ut&&Ke.render(R),Di(S,R,$);B!==null&&D===0&&(F.updateMultisampleRenderTarget(B),F.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(T,R,$),ft.resetDefaultState(),C=-1,E=null,L.pop(),L.length>0?(y=L[L.length-1],ge===!0&&Se.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function zn(R,$,ue,J){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){J&&We.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pe);const Fe=K.update(R),ze=R.material;ze.visible&&S.push(R,Fe,ze,ue,We.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const Fe=K.update(R),ze=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),We.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),We.copy(Fe.boundingSphere.center)),We.applyMatrix4(R.matrixWorld).applyMatrix4(Pe)),Array.isArray(ze)){const Ve=Fe.groups;for(let lt=0,ot=Ve.length;lt<ot;lt++){const Ye=Ve[lt],Tt=ze[Ye.materialIndex];Tt&&Tt.visible&&S.push(R,Fe,Tt,ue,We.z,Ye)}}else ze.visible&&S.push(R,Fe,ze,ue,We.z,null)}}const be=R.children;for(let Fe=0,ze=be.length;Fe<ze;Fe++)zn(be[Fe],$,ue,J)}function Di(R,$,ue,J){const q=R.opaque,be=R.transmissive,Fe=R.transparent;y.setupLightsView(ue),ge===!0&&Se.setGlobalState(T.clippingPlanes,ue),J&&tt.viewport(O.copy(J)),q.length>0&&pr(q,$,ue),be.length>0&&pr(be,$,ue),Fe.length>0&&pr(Fe,$,ue),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Yr(R,$,ue,J){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[J.id]===void 0&&(y.state.transmissionRenderTarget[J.id]=new Ss(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?Ma:dr,minFilter:ys,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const be=y.state.transmissionRenderTarget[J.id],Fe=J.viewport||O;be.setSize(Fe.z*T.transmissionResolutionScale,Fe.w*T.transmissionResolutionScale);const ze=T.getRenderTarget();T.setRenderTarget(be),T.getClearColor(oe),he=T.getClearAlpha(),he<1&&T.setClearColor(16777215,.5),T.clear(),Ut&&Ke.render(ue);const Ve=T.toneMapping;T.toneMapping=Wr;const lt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),y.setupLightsView(J),ge===!0&&Se.setGlobalState(T.clippingPlanes,J),pr(R,ue,J),F.updateMultisampleRenderTarget(be),F.updateRenderTargetMipmap(be),St.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ye=0,Tt=$.length;Ye<Tt;Ye++){const mt=$[Ye],Zt=mt.object,Xt=mt.geometry,At=mt.material,nt=mt.group;if(At.side===rr&&Zt.layers.test(J.layers)){const Qt=At.side;At.side=Yn,At.needsUpdate=!0,Pa(Zt,ue,J,Xt,At,nt),At.side=Qt,At.needsUpdate=!0,ot=!0}}ot===!0&&(F.updateMultisampleRenderTarget(be),F.updateRenderTargetMipmap(be))}T.setRenderTarget(ze),T.setClearColor(oe,he),lt!==void 0&&(J.viewport=lt),T.toneMapping=Ve}function pr(R,$,ue){const J=$.isScene===!0?$.overrideMaterial:null;for(let q=0,be=R.length;q<be;q++){const Fe=R[q],ze=Fe.object,Ve=Fe.geometry,lt=Fe.group;let ot=Fe.material;ot.allowOverride===!0&&J!==null&&(ot=J),ze.layers.test(ue.layers)&&Pa(ze,$,ue,Ve,ot,lt)}}function Pa(R,$,ue,J,q,be){R.onBeforeRender(T,$,ue,J,q,be),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(T,$,ue,J,R,be),q.transparent===!0&&q.side===rr&&q.forceSinglePass===!1?(q.side=Yn,q.needsUpdate=!0,T.renderBufferDirect(ue,$,J,q,R,be),q.side=jr,q.needsUpdate=!0,T.renderBufferDirect(ue,$,J,q,R,be),q.side=rr):T.renderBufferDirect(ue,$,J,q,R,be),R.onAfterRender(T,$,ue,J,q,be)}function Es(R,$,ue){$.isScene!==!0&&($=It);const J=$e.get(R),q=y.state.lights,be=y.state.shadowsArray,Fe=q.state.version,ze=xe.getParameters(R,q.state,be,$,ue),Ve=xe.getProgramCacheKey(ze);let lt=J.programs;J.environment=R.isMeshStandardMaterial?$.environment:null,J.fog=$.fog,J.envMap=(R.isMeshStandardMaterial?re:A).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,lt===void 0&&(R.addEventListener("dispose",ut),lt=new Map,J.programs=lt);let ot=lt.get(Ve);if(ot!==void 0){if(J.currentProgram===ot&&J.lightsStateVersion===Fe)return Ni(R,ze),ot}else ze.uniforms=xe.getUniforms(R),R.onBeforeCompile(ze,T),ot=xe.acquireProgram(ze,Ve),lt.set(Ve,ot),J.uniforms=ze.uniforms;const Ye=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Se.uniform),Ni(R,ze),J.needsLights=zu(R),J.lightsStateVersion=Fe,J.needsLights&&(Ye.ambientLightColor.value=q.state.ambient,Ye.lightProbe.value=q.state.probe,Ye.directionalLights.value=q.state.directional,Ye.directionalLightShadows.value=q.state.directionalShadow,Ye.spotLights.value=q.state.spot,Ye.spotLightShadows.value=q.state.spotShadow,Ye.rectAreaLights.value=q.state.rectArea,Ye.ltc_1.value=q.state.rectAreaLTC1,Ye.ltc_2.value=q.state.rectAreaLTC2,Ye.pointLights.value=q.state.point,Ye.pointLightShadows.value=q.state.pointShadow,Ye.hemisphereLights.value=q.state.hemi,Ye.directionalShadowMap.value=q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ye.spotShadowMap.value=q.state.spotShadowMap,Ye.spotLightMatrix.value=q.state.spotLightMatrix,Ye.spotLightMap.value=q.state.spotLightMap,Ye.pointShadowMap.value=q.state.pointShadowMap,Ye.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=ot,J.uniformsList=null,ot}function La(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=bu.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Ni(R,$){const ue=$e.get(R);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Da(R,$,ue,J,q){$.isScene!==!0&&($=It),F.resetTextureUnits();const be=$.fog,Fe=J.isMeshStandardMaterial?$.environment:null,ze=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:go,Ve=(J.isMeshStandardMaterial?re:A).get(J.envMap||Fe),lt=J.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ot=!!ue.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ye=!!ue.morphAttributes.position,Tt=!!ue.morphAttributes.normal,mt=!!ue.morphAttributes.color;let Zt=Wr;J.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Zt=T.toneMapping);const Xt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,At=Xt!==void 0?Xt.length:0,nt=$e.get(J),Qt=y.state.lights;if(ge===!0&&(ye===!0||R!==E)){const yn=R===E&&J.id===C;Se.setState(J,R,yn)}let wt=!1;J.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Qt.state.version||nt.outputColorSpace!==ze||q.isBatchedMesh&&nt.batching===!1||!q.isBatchedMesh&&nt.batching===!0||q.isBatchedMesh&&nt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&nt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&nt.instancing===!1||!q.isInstancedMesh&&nt.instancing===!0||q.isSkinnedMesh&&nt.skinning===!1||!q.isSkinnedMesh&&nt.skinning===!0||q.isInstancedMesh&&nt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&nt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&nt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&nt.instancingMorph===!1&&q.morphTexture!==null||nt.envMap!==Ve||J.fog===!0&&nt.fog!==be||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Se.numPlanes||nt.numIntersection!==Se.numIntersection)||nt.vertexAlphas!==lt||nt.vertexTangents!==ot||nt.morphTargets!==Ye||nt.morphNormals!==Tt||nt.morphColors!==mt||nt.toneMapping!==Zt||nt.morphTargetsCount!==At)&&(wt=!0):(wt=!0,nt.__version=J.version);let wn=nt.currentProgram;wt===!0&&(wn=Es(J,$,q));let mr=!1,Un=!1,Hi=!1;const Bt=wn.getUniforms(),Tn=nt.uniforms;if(tt.useProgram(wn.program)&&(mr=!0,Un=!0,Hi=!0),J.id!==C&&(C=J.id,Un=!0),mr||E!==R){tt.buffers.depth.getReversed()?(_e.copy(R.projectionMatrix),Mx(_e),wx(_e),Bt.setValue(H,"projectionMatrix",_e)):Bt.setValue(H,"projectionMatrix",R.projectionMatrix),Bt.setValue(H,"viewMatrix",R.matrixWorldInverse);const pn=Bt.map.cameraPosition;pn!==void 0&&pn.setValue(H,Qe.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Un=!0,Hi=!0)}if(q.isSkinnedMesh){Bt.setOptional(H,q,"bindMatrix"),Bt.setOptional(H,q,"bindMatrixInverse");const yn=q.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Bt.setValue(H,"boneTexture",yn.boneTexture,F))}q.isBatchedMesh&&(Bt.setOptional(H,q,"batchingTexture"),Bt.setValue(H,"batchingTexture",q._matricesTexture,F),Bt.setOptional(H,q,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",q._indirectTexture,F),Bt.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Bt.setValue(H,"batchingColorTexture",q._colorsTexture,F));const fn=ue.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&et.update(q,ue,wn),(Un||nt.receiveShadow!==q.receiveShadow)&&(nt.receiveShadow=q.receiveShadow,Bt.setValue(H,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Tn.envMap.value=Ve,Tn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&$.environment!==null&&(Tn.envMapIntensity.value=$.environmentIntensity),Un&&(Bt.setValue(H,"toneMappingExposure",T.toneMappingExposure),nt.needsLights&&Na(Tn,Hi),be&&J.fog===!0&&ee.refreshFogUniforms(Tn,be),ee.refreshMaterialUniforms(Tn,J,G,me,y.state.transmissionRenderTarget[R.id]),bu.upload(H,La(nt),Tn,F)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(bu.upload(H,La(nt),Tn,F),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Bt.setValue(H,"center",q.center),Bt.setValue(H,"modelViewMatrix",q.modelViewMatrix),Bt.setValue(H,"normalMatrix",q.normalMatrix),Bt.setValue(H,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const yn=J.uniformsGroups;for(let pn=0,Rt=yn.length;pn<Rt;pn++){const Ii=yn[pn];j.update(Ii,wn),j.bind(Ii,wn)}}return wn}function Na(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function zu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,$,ue){const J=$e.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),$e.get(R.texture).__webglTexture=$,$e.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ue,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const ue=$e.get(R);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0};const Ia=H.createFramebuffer();this.setRenderTarget=function(R,$=0,ue=0){B=R,N=$,D=ue;let J=!0,q=null,be=!1,Fe=!1;if(R){const Ve=$e.get(R);if(Ve.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(H.FRAMEBUFFER,null),J=!1;else if(Ve.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(Ve.__hasExternalTextures)F.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(Ve.__boundDepthTexture!==Ye){if(Ye!==null&&$e.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const lt=R.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Fe=!0);const ot=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ot[$])?q=ot[$][ue]:q=ot[$],be=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?q=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(ot)?q=ot[ue]:q=ot,O.copy(R.viewport),Z.copy(R.scissor),te=R.scissorTest}else O.copy(U).multiplyScalar(G).floor(),Z.copy(Y).multiplyScalar(G).floor(),te=Ae;if(ue!==0&&(q=Ia),tt.bindFramebuffer(H.FRAMEBUFFER,q)&&J&&tt.drawBuffers(R,q),tt.viewport(O),tt.scissor(Z),tt.setScissorTest(te),be){const Ve=$e.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ve.__webglTexture,ue)}else if(Fe){const Ve=$e.get(R.texture),lt=$;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.__webglTexture,ue,lt)}else if(R!==null&&ue!==0){const Ve=$e.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ve.__webglTexture,ue)}C=-1},this.readRenderTargetPixels=function(R,$,ue,J,q,be,Fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){tt.bindFramebuffer(H.FRAMEBUFFER,ze);try{const Ve=R.texture,lt=Ve.format,ot=Ve.type;if(!yt.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-J&&ue>=0&&ue<=R.height-q&&H.readPixels($,ue,J,q,it.convert(lt),it.convert(ot),be)}finally{const Ve=B!==null?$e.get(B).__webglFramebuffer:null;tt.bindFramebuffer(H.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,$,ue,J,q,be,Fe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze)if($>=0&&$<=R.width-J&&ue>=0&&ue<=R.height-q){tt.bindFramebuffer(H.FRAMEBUFFER,ze);const Ve=R.texture,lt=Ve.format,ot=Ve.type;if(!yt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ye),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),H.readPixels($,ue,J,q,it.convert(lt),it.convert(ot),0);const Tt=B!==null?$e.get(B).__webglFramebuffer:null;tt.bindFramebuffer(H.FRAMEBUFFER,Tt);const mt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Ex(H,mt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ye),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.deleteBuffer(Ye),H.deleteSync(mt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,ue=0){const J=Math.pow(2,-ue),q=Math.floor(R.image.width*J),be=Math.floor(R.image.height*J),Fe=$!==null?$.x:0,ze=$!==null?$.y:0;F.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ue,0,0,Fe,ze,q,be),tt.unbindTexture()};const Ua=H.createFramebuffer(),Fa=H.createFramebuffer();this.copyTextureToTexture=function(R,$,ue=null,J=null,q=0,be=null){be===null&&(q!==0?(Tu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=q,q=0):be=0);let Fe,ze,Ve,lt,ot,Ye,Tt,mt,Zt;const Xt=R.isCompressedTexture?R.mipmaps[be]:R.image;if(ue!==null)Fe=ue.max.x-ue.min.x,ze=ue.max.y-ue.min.y,Ve=ue.isBox3?ue.max.z-ue.min.z:1,lt=ue.min.x,ot=ue.min.y,Ye=ue.isBox3?ue.min.z:0;else{const fn=Math.pow(2,-q);Fe=Math.floor(Xt.width*fn),ze=Math.floor(Xt.height*fn),R.isDataArrayTexture?Ve=Xt.depth:R.isData3DTexture?Ve=Math.floor(Xt.depth*fn):Ve=1,lt=0,ot=0,Ye=0}J!==null?(Tt=J.x,mt=J.y,Zt=J.z):(Tt=0,mt=0,Zt=0);const At=it.convert($.format),nt=it.convert($.type);let Qt;$.isData3DTexture?(F.setTexture3D($,0),Qt=H.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(F.setTexture2DArray($,0),Qt=H.TEXTURE_2D_ARRAY):(F.setTexture2D($,0),Qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);const wt=H.getParameter(H.UNPACK_ROW_LENGTH),wn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),mr=H.getParameter(H.UNPACK_SKIP_PIXELS),Un=H.getParameter(H.UNPACK_SKIP_ROWS),Hi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Xt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Xt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,lt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ot),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ye);const Bt=R.isDataArrayTexture||R.isData3DTexture,Tn=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const fn=$e.get(R),yn=$e.get($),pn=$e.get(fn.__renderTarget),Rt=$e.get(yn.__renderTarget);tt.bindFramebuffer(H.READ_FRAMEBUFFER,pn.__webglFramebuffer),tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ii=0;Ii<Ve;Ii++)Bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.get(R).__webglTexture,q,Ye+Ii),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.get($).__webglTexture,be,Zt+Ii)),H.blitFramebuffer(lt,ot,Fe,ze,Tt,mt,Fe,ze,H.DEPTH_BUFFER_BIT,H.NEAREST);tt.bindFramebuffer(H.READ_FRAMEBUFFER,null),tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||$e.has(R)){const fn=$e.get(R),yn=$e.get($);tt.bindFramebuffer(H.READ_FRAMEBUFFER,Ua),tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fa);for(let pn=0;pn<Ve;pn++)Bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,q,Ye+pn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,q),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,be,Zt+pn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,be),q!==0?H.blitFramebuffer(lt,ot,Fe,ze,Tt,mt,Fe,ze,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(Qt,be,Tt,mt,Zt+pn,lt,ot,Fe,ze):H.copyTexSubImage2D(Qt,be,Tt,mt,lt,ot,Fe,ze);tt.bindFramebuffer(H.READ_FRAMEBUFFER,null),tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Qt,be,Tt,mt,Zt,Fe,ze,Ve,At,nt,Xt.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(Qt,be,Tt,mt,Zt,Fe,ze,Ve,At,Xt.data):H.texSubImage3D(Qt,be,Tt,mt,Zt,Fe,ze,Ve,At,nt,Xt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,Tt,mt,Fe,ze,At,nt,Xt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,Tt,mt,Xt.width,Xt.height,At,Xt.data):H.texSubImage2D(H.TEXTURE_2D,be,Tt,mt,Fe,ze,At,nt,Xt);H.pixelStorei(H.UNPACK_ROW_LENGTH,wt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,mr),H.pixelStorei(H.UNPACK_SKIP_ROWS,Un),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Hi),be===0&&$.generateMipmaps&&H.generateMipmap(Qt),tt.unbindTexture()},this.copyTextureToTexture3D=function(R,$,ue=null,J=null,q=0){return Tu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,ue,J,q)},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),tt.unbindTexture()},this.resetState=function(){N=0,D=0,B=null,tt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}function WT(r){const e=[...new Set(r.map(t=>String(t.session_id)))].sort();return new Map(e.map((t,n)=>[t,n]))}function XT({payload:r,currentTurnId:e,liftMode:t,onSelectTurn:n}){const o=ht.useRef(null),a=ht.useMemo(()=>WT(r.turns??[]),[r.turns]),[u,c]=ht.useState(null);return ht.useEffect(()=>{if(!o.current)return;const h=o.current;c(null);let f=null,m=null,g=null,v=null,x=0,M=null;try{const w=new qx;w.background=new Dt("#120d08");const S=new hi(45,h.clientWidth/Math.max(h.clientHeight,1),.1,1e3);S.position.set(0,0,28),f=new VT({antialias:!0}),f.setSize(h.clientWidth,Math.max(h.clientHeight,240)),h.innerHTML="",h.appendChild(f.domElement);const y=r.turns??[];g=new e_({color:12155706,transparent:!0,opacity:.5}),m=new Li;const I=new Float32Array(y.length*3),L=new Float32Array(y.length*3),T=new Map;for(const O of y){const Z=String(O.display_attractor_label??O.dominant_label??"");T.set(Z,(T.get(Z)??0)+1)}y.forEach((O,Z)=>{const te=T.get(String(O.display_attractor_label??O.dominant_label??""))??1,oe=a.get(String(O.session_id))??0,he=t==="flat"?0:t==="time_lift"?Z*.7:t==="density_lift"?te*1.2:oe*2.4;I[Z*3]=Number(O.x??0),I[Z*3+1]=Number(O.y??0),I[Z*3+2]=he;const de=e===O.turn_id;L[Z*3]=de?1:.91,L[Z*3+1]=de?.95:.66,L[Z*3+2]=de?.67:.34,O.sequence_z=he}),m.setAttribute("position",new ni(I,3)),m.setAttribute("color",new ni(L,3));const P=new Jx(m,new t_({size:.6,vertexColors:!0}));if(w.add(P),y.length>1){const O=new Li;O.setAttribute("position",new ni(I,3)),w.add(new Qx(O,g))}const N=new oS,D=new kt;v=O=>{if(!f)return;const Z=f.domElement.getBoundingClientRect();D.x=(O.clientX-Z.left)/Z.width*2-1,D.y=-((O.clientY-Z.top)/Z.height)*2+1,N.params.Points={threshold:1.2},N.setFromCamera(D,S);const oe=N.intersectObject(P)[0];if(!oe||oe.index==null)return;const he=y[oe.index];he!=null&&he.turn_id&&n(String(he.turn_id))},f.domElement.addEventListener("click",v);const B=new rS(16777215,1);w.add(B);let C=0;const E=()=>{f&&(C+=1,e||(w.rotation.y=Math.sin(C/180)*.08),f.render(w,S),x=window.requestAnimationFrame(E))};E(),M=()=>{if(!f)return;const O=h.clientWidth||640,Z=Math.max(h.clientHeight,240);S.aspect=O/Z,S.updateProjectionMatrix(),f.setSize(O,Z)},window.addEventListener("resize",M)}catch(w){h.innerHTML="",c(w instanceof Error?w.message:"Basin renderer unavailable.")}return()=>{M&&window.removeEventListener("resize",M),f!=null&&f.domElement&&v&&f.domElement.removeEventListener("click",v),window.cancelAnimationFrame(x),f==null||f.dispose(),m==null||m.dispose(),g==null||g.dispose(),h.innerHTML=""}},[r,e,t,n,a]),u?ne.jsxs("div",{className:"empty-state","data-testid":"basin-plot-fallback",role:"note",children:[ne.jsx("h2",{children:"Basin renderer unavailable"}),ne.jsx("p",{children:u}),ne.jsx("p",{children:"Use Basin Turns, transcript buttons, and projection metadata to keep the trajectory view truthful."})]},"basin-fallback"):ne.jsx("div",{"aria-label":"Basin plot",className:"basin-panel","data-testid":"basin-plot",ref:o,role:"region"},"basin-canvas")}var cu={exports:{}},nv;function jT(){if(nv)return cu.exports;nv=1;var r=typeof Reflect=="object"?Reflect:null,e=r&&typeof r.apply=="function"?r.apply:function(P,N,D){return Function.prototype.apply.call(P,N,D)},t;r&&typeof r.ownKeys=="function"?t=r.ownKeys:Object.getOwnPropertySymbols?t=function(P){return Object.getOwnPropertyNames(P).concat(Object.getOwnPropertySymbols(P))}:t=function(P){return Object.getOwnPropertyNames(P)};function n(T){console&&console.warn&&console.warn(T)}var o=Number.isNaN||function(P){return P!==P};function a(){a.init.call(this)}cu.exports=a,cu.exports.once=y,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function c(T){if(typeof T!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof T)}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(T){if(typeof T!="number"||T<0||o(T))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+T+".");u=T}}),a.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(P){if(typeof P!="number"||P<0||o(P))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+P+".");return this._maxListeners=P,this};function h(T){return T._maxListeners===void 0?a.defaultMaxListeners:T._maxListeners}a.prototype.getMaxListeners=function(){return h(this)},a.prototype.emit=function(P){for(var N=[],D=1;D<arguments.length;D++)N.push(arguments[D]);var B=P==="error",C=this._events;if(C!==void 0)B=B&&C.error===void 0;else if(!B)return!1;if(B){var E;if(N.length>0&&(E=N[0]),E instanceof Error)throw E;var O=new Error("Unhandled error."+(E?" ("+E.message+")":""));throw O.context=E,O}var Z=C[P];if(Z===void 0)return!1;if(typeof Z=="function")e(Z,this,N);else for(var te=Z.length,oe=M(Z,te),D=0;D<te;++D)e(oe[D],this,N);return!0};function f(T,P,N,D){var B,C,E;if(c(N),C=T._events,C===void 0?(C=T._events=Object.create(null),T._eventsCount=0):(C.newListener!==void 0&&(T.emit("newListener",P,N.listener?N.listener:N),C=T._events),E=C[P]),E===void 0)E=C[P]=N,++T._eventsCount;else if(typeof E=="function"?E=C[P]=D?[N,E]:[E,N]:D?E.unshift(N):E.push(N),B=h(T),B>0&&E.length>B&&!E.warned){E.warned=!0;var O=new Error("Possible EventEmitter memory leak detected. "+E.length+" "+String(P)+" listeners added. Use emitter.setMaxListeners() to increase limit");O.name="MaxListenersExceededWarning",O.emitter=T,O.type=P,O.count=E.length,n(O)}return T}a.prototype.addListener=function(P,N){return f(this,P,N,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(P,N){return f(this,P,N,!0)};function m(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(T,P,N){var D={fired:!1,wrapFn:void 0,target:T,type:P,listener:N},B=m.bind(D);return B.listener=N,D.wrapFn=B,B}a.prototype.once=function(P,N){return c(N),this.on(P,g(this,P,N)),this},a.prototype.prependOnceListener=function(P,N){return c(N),this.prependListener(P,g(this,P,N)),this},a.prototype.removeListener=function(P,N){var D,B,C,E,O;if(c(N),B=this._events,B===void 0)return this;if(D=B[P],D===void 0)return this;if(D===N||D.listener===N)--this._eventsCount===0?this._events=Object.create(null):(delete B[P],B.removeListener&&this.emit("removeListener",P,D.listener||N));else if(typeof D!="function"){for(C=-1,E=D.length-1;E>=0;E--)if(D[E]===N||D[E].listener===N){O=D[E].listener,C=E;break}if(C<0)return this;C===0?D.shift():w(D,C),D.length===1&&(B[P]=D[0]),B.removeListener!==void 0&&this.emit("removeListener",P,O||N)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(P){var N,D,B;if(D=this._events,D===void 0)return this;if(D.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):D[P]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete D[P]),this;if(arguments.length===0){var C=Object.keys(D),E;for(B=0;B<C.length;++B)E=C[B],E!=="removeListener"&&this.removeAllListeners(E);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(N=D[P],typeof N=="function")this.removeListener(P,N);else if(N!==void 0)for(B=N.length-1;B>=0;B--)this.removeListener(P,N[B]);return this};function v(T,P,N){var D=T._events;if(D===void 0)return[];var B=D[P];return B===void 0?[]:typeof B=="function"?N?[B.listener||B]:[B]:N?S(B):M(B,B.length)}a.prototype.listeners=function(P){return v(this,P,!0)},a.prototype.rawListeners=function(P){return v(this,P,!1)},a.listenerCount=function(T,P){return typeof T.listenerCount=="function"?T.listenerCount(P):x.call(T,P)},a.prototype.listenerCount=x;function x(T){var P=this._events;if(P!==void 0){var N=P[T];if(typeof N=="function")return 1;if(N!==void 0)return N.length}return 0}a.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function M(T,P){for(var N=new Array(P),D=0;D<P;++D)N[D]=T[D];return N}function w(T,P){for(;P+1<T.length;P++)T[P]=T[P+1];T.pop()}function S(T){for(var P=new Array(T.length),N=0;N<P.length;++N)P[N]=T[N].listener||T[N];return P}function y(T,P){return new Promise(function(N,D){function B(E){T.removeListener(P,C),D(E)}function C(){typeof T.removeListener=="function"&&T.removeListener("error",B),N([].slice.call(arguments))}L(T,P,C,{once:!0}),P!=="error"&&I(T,B,{once:!0})})}function I(T,P,N){typeof T.on=="function"&&L(T,"error",P,N)}function L(T,P,N,D){if(typeof T.on=="function")D.once?T.once(P,N):T.on(P,N);else if(typeof T.addEventListener=="function")T.addEventListener(P,function B(C){D.once&&T.removeEventListener(P,B),N(C)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof T)}return cu.exports}var l_=jT();function $T(){const r=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(arguments[e])for(const n in arguments[e])r[n]=arguments[e][n];return r}let cn=$T;typeof Object.assign=="function"&&(cn=Object.assign);function fi(r,e,t,n){const o=r._nodes.get(e);let a=null;return o&&(n==="mixed"?a=o.out&&o.out[t]||o.undirected&&o.undirected[t]:n==="directed"?a=o.out&&o.out[t]:a=o.undirected&&o.undirected[t]),a}function En(r){return typeof r=="object"&&r!==null}function u_(r){let e;for(e in r)return!1;return!0}function ci(r,e,t){Object.defineProperty(r,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function Ti(r,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(r,e,n)}function iv(r){return!(!En(r)||r.attributes&&!Array.isArray(r.attributes))}function YT(){let r=Math.floor(Math.random()*256)&255;return()=>r++}function cr(){const r=arguments;let e=null,t=-1;return{[Symbol.iterator](){return this},next(){let n=null;do{if(e===null){if(t++,t>=r.length)return{done:!0};e=r[t][Symbol.iterator]()}if(n=e.next(),n.done){e=null;continue}break}while(!0);return n}}}function Mo(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class _f extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class Oe extends _f{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Oe.prototype.constructor)}}class Ce extends _f{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ce.prototype.constructor)}}class at extends _f{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,at.prototype.constructor)}}function c_(r,e){this.key=r,this.attributes=e,this.clear()}c_.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function d_(r,e){this.key=r,this.attributes=e,this.clear()}d_.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function h_(r,e){this.key=r,this.attributes=e,this.clear()}h_.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function wo(r,e,t,n,o){this.key=e,this.attributes=o,this.undirected=r,this.source=t,this.target=n}wo.prototype.attach=function(){let r="out",e="in";this.undirected&&(r=e="undirected");const t=this.source.key,n=this.target.key;this.source[r][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};wo.prototype.attachMulti=function(){let r="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(r=e="undirected");const o=this.source[r],a=o[n];if(typeof a>"u"){o[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}a.previous=this,this.next=a,o[n]=this,this.target[e][t]=this};wo.prototype.detach=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][r]};wo.prototype.detachMulti=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][r]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][r]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const f_=0,p_=1,qT=2,m_=3;function fr(r,e,t,n,o,a,u){let c,h,f,m;if(n=""+n,t===f_){if(c=r._nodes.get(n),!c)throw new Ce(`Graph.${e}: could not find the "${n}" node in the graph.`);f=o,m=a}else if(t===m_){if(o=""+o,h=r._edges.get(o),!h)throw new Ce(`Graph.${e}: could not find the "${o}" edge in the graph.`);const g=h.source.key,v=h.target.key;if(n===g)c=h.target;else if(n===v)c=h.source;else throw new Ce(`Graph.${e}: the "${n}" node is not attached to the "${o}" edge (${g}, ${v}).`);f=a,m=u}else{if(h=r._edges.get(n),!h)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===p_?c=h.source:c=h.target,f=o,m=a}return[c,f,m]}function KT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=fr(this,e,t,n,o,a);return u.attributes[c]}}function ZT(r,e,t){r.prototype[e]=function(n,o){const[a]=fr(this,e,t,n,o);return a.attributes}}function QT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=fr(this,e,t,n,o,a);return u.attributes.hasOwnProperty(c)}}function JT(r,e,t){r.prototype[e]=function(n,o,a,u){const[c,h,f]=fr(this,e,t,n,o,a,u);return c.attributes[h]=f,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function eb(r,e,t){r.prototype[e]=function(n,o,a,u){const[c,h,f]=fr(this,e,t,n,o,a,u);if(typeof f!="function")throw new Oe(`Graph.${e}: updater should be a function.`);const m=c.attributes,g=f(m[h]);return m[h]=g,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function tb(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=fr(this,e,t,n,o,a);return delete u.attributes[c],this.emit("nodeAttributesUpdated",{key:u.key,type:"remove",attributes:u.attributes,name:c}),this}}function nb(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=fr(this,e,t,n,o,a);if(!En(c))throw new Oe(`Graph.${e}: provided attributes are not a plain object.`);return u.attributes=c,this.emit("nodeAttributesUpdated",{key:u.key,type:"replace",attributes:u.attributes}),this}}function ib(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=fr(this,e,t,n,o,a);if(!En(c))throw new Oe(`Graph.${e}: provided attributes are not a plain object.`);return cn(u.attributes,c),this.emit("nodeAttributesUpdated",{key:u.key,type:"merge",attributes:u.attributes,data:c}),this}}function rb(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=fr(this,e,t,n,o,a);if(typeof c!="function")throw new Oe(`Graph.${e}: provided updater is not a function.`);return u.attributes=c(u.attributes),this.emit("nodeAttributesUpdated",{key:u.key,type:"update",attributes:u.attributes}),this}}const sb=[{name:r=>`get${r}Attribute`,attacher:KT},{name:r=>`get${r}Attributes`,attacher:ZT},{name:r=>`has${r}Attribute`,attacher:QT},{name:r=>`set${r}Attribute`,attacher:JT},{name:r=>`update${r}Attribute`,attacher:eb},{name:r=>`remove${r}Attribute`,attacher:tb},{name:r=>`replace${r}Attributes`,attacher:nb},{name:r=>`merge${r}Attributes`,attacher:ib},{name:r=>`update${r}Attributes`,attacher:rb}];function ob(r){sb.forEach(function({name:e,attacher:t}){t(r,e("Node"),f_),t(r,e("Source"),p_),t(r,e("Target"),qT),t(r,e("Opposite"),m_)})}function ab(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new at(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new at(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=fi(this,u,c,t),!a)throw new Ce(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new at(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes[o]}}function lb(r,e,t){r.prototype[e]=function(n){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new at(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new at(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,u=""+arguments[1];if(o=fi(this,a,u,t),!o)throw new Ce(`Graph.${e}: could not find an edge for the given path ("${a}" - "${u}").`)}else{if(t!=="mixed")throw new at(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes}}function ub(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new at(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new at(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=fi(this,u,c,t),!a)throw new Ce(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new at(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes.hasOwnProperty(o)}}function cb(r,e,t){r.prototype[e]=function(n,o,a){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new at(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new at(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+o;if(o=arguments[2],a=arguments[3],u=fi(this,c,h,t),!u)throw new Ce(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new at(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return u.attributes[o]=a,this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:o}),this}}function db(r,e,t){r.prototype[e]=function(n,o,a){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new at(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new at(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+o;if(o=arguments[2],a=arguments[3],u=fi(this,c,h,t),!u)throw new Ce(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new at(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof a!="function")throw new Oe(`Graph.${e}: updater should be a function.`);return u.attributes[o]=a(u.attributes[o]),this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:o}),this}}function hb(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new at(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new at(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=fi(this,u,c,t),!a)throw new Ce(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new at(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete a.attributes[o],this.emit("edgeAttributesUpdated",{key:a.key,type:"remove",attributes:a.attributes,name:o}),this}}function fb(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new at(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new at(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=fi(this,u,c,t),!a)throw new Ce(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new at(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!En(o))throw new Oe(`Graph.${e}: provided attributes are not a plain object.`);return a.attributes=o,this.emit("edgeAttributesUpdated",{key:a.key,type:"replace",attributes:a.attributes}),this}}function pb(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new at(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new at(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=fi(this,u,c,t),!a)throw new Ce(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new at(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!En(o))throw new Oe(`Graph.${e}: provided attributes are not a plain object.`);return cn(a.attributes,o),this.emit("edgeAttributesUpdated",{key:a.key,type:"merge",attributes:a.attributes,data:o}),this}}function mb(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new at(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new at(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=fi(this,u,c,t),!a)throw new Ce(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new at(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Ce(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof o!="function")throw new Oe(`Graph.${e}: provided updater is not a function.`);return a.attributes=o(a.attributes),this.emit("edgeAttributesUpdated",{key:a.key,type:"update",attributes:a.attributes}),this}}const gb=[{name:r=>`get${r}Attribute`,attacher:ab},{name:r=>`get${r}Attributes`,attacher:lb},{name:r=>`has${r}Attribute`,attacher:ub},{name:r=>`set${r}Attribute`,attacher:cb},{name:r=>`update${r}Attribute`,attacher:db},{name:r=>`remove${r}Attribute`,attacher:hb},{name:r=>`replace${r}Attributes`,attacher:fb},{name:r=>`merge${r}Attributes`,attacher:pb},{name:r=>`update${r}Attributes`,attacher:mb}];function vb(r){gb.forEach(function({name:e,attacher:t}){t(r,e("Edge"),"mixed"),t(r,e("DirectedEdge"),"directed"),t(r,e("UndirectedEdge"),"undirected")})}const _b=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function yb(r,e,t,n){let o=!1;for(const a in e){if(a===n)continue;const u=e[a];if(o=t(u.key,u.attributes,u.source.key,u.target.key,u.source.attributes,u.target.attributes,u.undirected),r&&o)return u.key}}function xb(r,e,t,n){let o,a,u,c=!1;for(const h in e)if(h!==n){o=e[h];do{if(a=o.source,u=o.target,c=t(o.key,o.attributes,a.key,u.key,a.attributes,u.attributes,o.undirected),r&&c)return o.key;o=o.next}while(o!==void 0)}}function Qd(r,e){const t=Object.keys(r),n=t.length;let o,a=0;return{[Symbol.iterator](){return this},next(){do if(o)o=o.next;else{if(a>=n)return{done:!0};const u=t[a++];if(u===e){o=void 0;continue}o=r[u]}while(!o);return{done:!1,value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected}}}}}function Sb(r,e,t,n){const o=e[t];if(!o)return;const a=o.source,u=o.target;if(n(o.key,o.attributes,a.key,u.key,a.attributes,u.attributes,o.undirected)&&r)return o.key}function Eb(r,e,t,n){let o=e[t];if(!o)return;let a=!1;do{if(a=n(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),r&&a)return o.key;o=o.next}while(o!==void 0)}function Jd(r,e){let t=r[e];if(t.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!t)return{done:!0};const o={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:o}}};let n=!1;return{[Symbol.iterator](){return this},next(){return n===!0?{done:!0}:(n=!0,{done:!1,value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected}})}}}function Mb(r,e){if(r.size===0)return[];if(e==="mixed"||e===r.type)return Array.from(r._edges.keys());const t=e==="undirected"?r.undirectedSize:r.directedSize,n=new Array(t),o=e==="undirected",a=r._edges.values();let u=0,c,h;for(;c=a.next(),c.done!==!0;)h=c.value,h.undirected===o&&(n[u++]=h.key);return n}function g_(r,e,t,n){if(e.size===0)return;const o=t!=="mixed"&&t!==e.type,a=t==="undirected";let u,c,h=!1;const f=e._edges.values();for(;u=f.next(),u.done!==!0;){if(c=u.value,o&&c.undirected!==a)continue;const{key:m,attributes:g,source:v,target:x}=c;if(h=n(m,g,v.key,x.key,v.attributes,x.attributes,c.undirected),r&&h)return m}}function wb(r,e){if(r.size===0)return Mo();const t=e!=="mixed"&&e!==r.type,n=e==="undirected",o=r._edges.values();return{[Symbol.iterator](){return this},next(){let a,u;for(;;){if(a=o.next(),a.done)return a;if(u=a.value,!(t&&u.undirected!==n))break}return{value:{edge:u.key,attributes:u.attributes,source:u.source.key,target:u.target.key,sourceAttributes:u.source.attributes,targetAttributes:u.target.attributes,undirected:u.undirected},done:!1}}}}function yf(r,e,t,n,o,a){const u=e?xb:yb;let c;if(t!=="undirected"&&(n!=="out"&&(c=u(r,o.in,a),r&&c)||n!=="in"&&(c=u(r,o.out,a,n?void 0:o.key),r&&c))||t!=="directed"&&(c=u(r,o.undirected,a),r&&c))return c}function Tb(r,e,t,n){const o=[];return yf(!1,r,e,t,n,function(a){o.push(a)}),o}function bb(r,e,t){let n=Mo();return r!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=cr(n,Qd(t.in))),e!=="in"&&typeof t.out<"u"&&(n=cr(n,Qd(t.out,e?void 0:t.key)))),r!=="directed"&&typeof t.undirected<"u"&&(n=cr(n,Qd(t.undirected))),n}function xf(r,e,t,n,o,a,u){const c=t?Eb:Sb;let h;if(e!=="undirected"&&(typeof o.in<"u"&&n!=="out"&&(h=c(r,o.in,a,u),r&&h)||typeof o.out<"u"&&n!=="in"&&(n||o.key!==a)&&(h=c(r,o.out,a,u),r&&h))||e!=="directed"&&typeof o.undirected<"u"&&(h=c(r,o.undirected,a,u),r&&h))return h}function Ab(r,e,t,n,o){const a=[];return xf(!1,r,e,t,n,o,function(u){a.push(u)}),a}function Rb(r,e,t,n){let o=Mo();return r!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(o=cr(o,Jd(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(o=cr(o,Jd(t.out,n)))),r!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(o=cr(o,Jd(t.undirected,n))),o}function Cb(r,e){const{name:t,type:n,direction:o}=e;r.prototype[t]=function(a,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return Mb(this,n);if(arguments.length===1){a=""+a;const c=this._nodes.get(a);if(typeof c>"u")throw new Ce(`Graph.${t}: could not find the "${a}" node in the graph.`);return Tb(this.multi,n==="mixed"?this.type:n,o,c)}if(arguments.length===2){a=""+a,u=""+u;const c=this._nodes.get(a);if(!c)throw new Ce(`Graph.${t}:  could not find the "${a}" source node in the graph.`);if(!this._nodes.has(u))throw new Ce(`Graph.${t}:  could not find the "${u}" target node in the graph.`);return Ab(n,this.multi,o,c,u)}throw new Oe(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Pb(r,e){const{name:t,type:n,direction:o}=e,a="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[a]=function(f,m,g){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return g=f,g_(!1,this,n,g);if(arguments.length===2){f=""+f,g=m;const v=this._nodes.get(f);if(typeof v>"u")throw new Ce(`Graph.${a}: could not find the "${f}" node in the graph.`);return yf(!1,this.multi,n==="mixed"?this.type:n,o,v,g)}if(arguments.length===3){f=""+f,m=""+m;const v=this._nodes.get(f);if(!v)throw new Ce(`Graph.${a}:  could not find the "${f}" source node in the graph.`);if(!this._nodes.has(m))throw new Ce(`Graph.${a}:  could not find the "${m}" target node in the graph.`);return xf(!1,n,this.multi,o,v,m,g)}throw new Oe(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop();let g;if(f.length===0){let v=0;n!=="directed"&&(v+=this.undirectedSize),n!=="undirected"&&(v+=this.directedSize),g=new Array(v);let x=0;f.push((M,w,S,y,I,L,T)=>{g[x++]=m(M,w,S,y,I,L,T)})}else g=[],f.push((v,x,M,w,S,y,I)=>{g.push(m(v,x,M,w,S,y,I))});return this[a].apply(this,f),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop(),g=[];return f.push((v,x,M,w,S,y,I)=>{m(v,x,M,w,S,y,I)&&g.push(v)}),this[a].apply(this,f),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(){let f=Array.prototype.slice.call(arguments);if(f.length<2||f.length>4)throw new Oe(`Graph.${h}: invalid number of arguments (expecting 2, 3 or 4 and got ${f.length}).`);if(typeof f[f.length-1]=="function"&&typeof f[f.length-2]!="function")throw new Oe(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let m,g;f.length===2?(m=f[0],g=f[1],f=[]):f.length===3?(m=f[1],g=f[2],f=[f[0]]):f.length===4&&(m=f[2],g=f[3],f=[f[0],f[1]]);let v=g;return f.push((x,M,w,S,y,I,L)=>{v=m(v,x,M,w,S,y,I,L)}),this[a].apply(this,f),v}}function Lb(r,e){const{name:t,type:n,direction:o}=e,a="find"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[a]=function(h,f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return m=h,g_(!0,this,n,m);if(arguments.length===2){h=""+h,m=f;const g=this._nodes.get(h);if(typeof g>"u")throw new Ce(`Graph.${a}: could not find the "${h}" node in the graph.`);return yf(!0,this.multi,n==="mixed"?this.type:n,o,g,m)}if(arguments.length===3){h=""+h,f=""+f;const g=this._nodes.get(h);if(!g)throw new Ce(`Graph.${a}:  could not find the "${h}" source node in the graph.`);if(!this._nodes.has(f))throw new Ce(`Graph.${a}:  could not find the "${f}" target node in the graph.`);return xf(!0,n,this.multi,o,g,f,m)}throw new Oe(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const u="some"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[u]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,M,w,S,y)=>f(g,v,x,M,w,S,y)),!!this[a].apply(this,h)};const c="every"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[c]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,M,w,S,y)=>!f(g,v,x,M,w,S,y)),!this[a].apply(this,h)}}function Db(r,e){const{name:t,type:n,direction:o}=e,a=t.slice(0,-1)+"Entries";r.prototype[a]=function(u,c){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Mo();if(!arguments.length)return wb(this,n);if(arguments.length===1){u=""+u;const h=this._nodes.get(u);if(!h)throw new Ce(`Graph.${a}: could not find the "${u}" node in the graph.`);return bb(n,o,h)}if(arguments.length===2){u=""+u,c=""+c;const h=this._nodes.get(u);if(!h)throw new Ce(`Graph.${a}:  could not find the "${u}" source node in the graph.`);if(!this._nodes.has(c))throw new Ce(`Graph.${a}:  could not find the "${c}" target node in the graph.`);return Rb(n,o,h,c)}throw new Oe(`Graph.${a}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Nb(r){_b.forEach(e=>{Cb(r,e),Pb(r,e),Lb(r,e),Db(r,e)})}const Ib=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function ku(){this.A=null,this.B=null}ku.prototype.wrap=function(r){this.A===null?this.A=r:this.B===null&&(this.B=r)};ku.prototype.has=function(r){return this.A!==null&&r in this.A||this.B!==null&&r in this.B};function ca(r,e,t,n,o){for(const a in n){const u=n[a],c=u.source,h=u.target,f=c===t?h:c;if(e&&e.has(f.key))continue;const m=o(f.key,f.attributes);if(r&&m)return f.key}}function Sf(r,e,t,n,o){if(e!=="mixed"){if(e==="undirected")return ca(r,null,n,n.undirected,o);if(typeof t=="string")return ca(r,null,n,n[t],o)}const a=new ku;let u;if(e!=="undirected"){if(t!=="out"){if(u=ca(r,null,n,n.in,o),r&&u)return u;a.wrap(n.in)}if(t!=="in"){if(u=ca(r,a,n,n.out,o),r&&u)return u;a.wrap(n.out)}}if(e!=="directed"&&(u=ca(r,a,n,n.undirected,o),r&&u))return u}function Ub(r,e,t){if(r!=="mixed"){if(r==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return Sf(!1,r,e,t,function(o){n.push(o)}),n}function da(r,e,t){const n=Object.keys(t),o=n.length;let a=0;return{[Symbol.iterator](){return this},next(){let u=null;do{if(a>=o)return r&&r.wrap(t),{done:!0};const c=t[n[a++]],h=c.source,f=c.target;if(u=h===e?f:h,r&&r.has(u.key)){u=null;continue}}while(u===null);return{done:!1,value:{neighbor:u.key,attributes:u.attributes}}}}}function Fb(r,e,t){if(r!=="mixed"){if(r==="undirected")return da(null,t,t.undirected);if(typeof e=="string")return da(null,t,t[e])}let n=Mo();const o=new ku;return r!=="undirected"&&(e!=="out"&&(n=cr(n,da(o,t,t.in))),e!=="in"&&(n=cr(n,da(o,t,t.out)))),r!=="directed"&&(n=cr(n,da(o,t,t.undirected))),n}function kb(r,e){const{name:t,type:n,direction:o}=e;r.prototype[t]=function(a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];a=""+a;const u=this._nodes.get(a);if(typeof u>"u")throw new Ce(`Graph.${t}: could not find the "${a}" node in the graph.`);return Ub(n==="mixed"?this.type:n,o,u)}}function Ob(r,e){const{name:t,type:n,direction:o}=e,a="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[a]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Ce(`Graph.${a}: could not find the "${f}" node in the graph.`);Sf(!1,n==="mixed"?this.type:n,o,g,m)};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(f,m){const g=[];return this[a](f,(v,x)=>{g.push(m(v,x))}),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(f,m){const g=[];return this[a](f,(v,x)=>{m(v,x)&&g.push(v)}),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(f,m,g){if(arguments.length<3)throw new Oe(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let v=g;return this[a](f,(x,M)=>{v=m(v,x,M)}),v}}function zb(r,e){const{name:t,type:n,direction:o}=e,a=t[0].toUpperCase()+t.slice(1,-1),u="find"+a;r.prototype[u]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Ce(`Graph.${u}: could not find the "${f}" node in the graph.`);return Sf(!0,n==="mixed"?this.type:n,o,g,m)};const c="some"+a;r.prototype[c]=function(f,m){return!!this[u](f,m)};const h="every"+a;r.prototype[h]=function(f,m){return!this[u](f,(v,x)=>!m(v,x))}}function Bb(r,e){const{name:t,type:n,direction:o}=e,a=t.slice(0,-1)+"Entries";r.prototype[a]=function(u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Mo();u=""+u;const c=this._nodes.get(u);if(typeof c>"u")throw new Ce(`Graph.${a}: could not find the "${u}" node in the graph.`);return Fb(n==="mixed"?this.type:n,o,c)}}function Gb(r){Ib.forEach(e=>{kb(r,e),Ob(r,e),zb(r,e),Bb(r,e)})}function du(r,e,t,n,o){const a=n._nodes.values(),u=n.type;let c,h,f,m,g,v;for(;c=a.next(),c.done!==!0;){let x=!1;if(h=c.value,u!=="undirected"){m=h.out;for(f in m){g=m[f];do v=g.target,x=!0,o(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}if(u!=="directed"){m=h.undirected;for(f in m)if(!(e&&h.key>f)){g=m[f];do v=g.target,v.key!==f&&(v=g.source),x=!0,o(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}t&&!x&&o(h.key,null,h.attributes,null,null,null,null)}}function Hb(r,e){const t={key:r};return u_(e.attributes)||(t.attributes=cn({},e.attributes)),t}function Vb(r,e,t){const n={key:e,source:t.source.key,target:t.target.key};return u_(t.attributes)||(n.attributes=cn({},t.attributes)),r==="mixed"&&t.undirected&&(n.undirected=!0),n}function Wb(r){if(!En(r))throw new Oe('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in r))throw new Oe("Graph.import: serialized node is missing its key.");if("attributes"in r&&(!En(r.attributes)||r.attributes===null))throw new Oe("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function Xb(r){if(!En(r))throw new Oe('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in r))throw new Oe("Graph.import: serialized edge is missing its source.");if(!("target"in r))throw new Oe("Graph.import: serialized edge is missing its target.");if("attributes"in r&&(!En(r.attributes)||r.attributes===null))throw new Oe("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in r&&typeof r.undirected!="boolean")throw new Oe("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const jb=YT(),$b=new Set(["directed","undirected","mixed"]),rv=new Set(["domain","_events","_eventsCount","_maxListeners"]),Yb=[{name:r=>`${r}Edge`,generateKey:!0},{name:r=>`${r}DirectedEdge`,generateKey:!0,type:"directed"},{name:r=>`${r}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:r=>`${r}EdgeWithKey`},{name:r=>`${r}DirectedEdgeWithKey`,type:"directed"},{name:r=>`${r}UndirectedEdgeWithKey`,type:"undirected"}],qb={allowSelfLoops:!0,multi:!1,type:"mixed"};function Kb(r,e,t){if(t&&!En(t))throw new Oe(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},r._nodes.has(e))throw new at(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function sv(r,e,t){const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function v_(r,e,t,n,o,a,u,c){if(!n&&r.type==="undirected")throw new at(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new at(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(c&&!En(c))throw new Oe(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`);if(a=""+a,u=""+u,c=c||{},!r.allowSelfLoops&&a===u)throw new at(`Graph.${e}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const h=r._nodes.get(a),f=r._nodes.get(u);if(!h)throw new Ce(`Graph.${e}: source node "${a}" not found.`);if(!f)throw new Ce(`Graph.${e}: target node "${u}" not found.`);const m={key:null,undirected:n,source:a,target:u,attributes:c};if(t)o=r._edgeKeyGenerator();else if(o=""+o,r._edges.has(o))throw new at(`Graph.${e}: the "${o}" edge already exists in the graph.`);if(!r.multi&&(n?typeof h.undirected[u]<"u":typeof h.out[u]<"u"))throw new at(`Graph.${e}: an edge linking "${a}" to "${u}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const g=new wo(n,o,h,f,c);r._edges.set(o,g);const v=a===u;return n?(h.undirectedDegree++,f.undirectedDegree++,v&&(h.undirectedLoops++,r._undirectedSelfLoopCount++)):(h.outDegree++,f.inDegree++,v&&(h.directedLoops++,r._directedSelfLoopCount++)),r.multi?g.attachMulti():g.attach(),n?r._undirectedSize++:r._directedSize++,m.key=o,r.emit("edgeAdded",m),o}function Zb(r,e,t,n,o,a,u,c,h){if(!n&&r.type==="undirected")throw new at(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new at(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(c){if(h){if(typeof c!="function")throw new Oe(`Graph.${e}: invalid updater function. Expecting a function but got "${c}"`)}else if(!En(c))throw new Oe(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`)}a=""+a,u=""+u;let f;if(h&&(f=c,c=void 0),!r.allowSelfLoops&&a===u)throw new at(`Graph.${e}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let m=r._nodes.get(a),g=r._nodes.get(u),v,x;if(!t&&(v=r._edges.get(o),v)){if((v.source.key!==a||v.target.key!==u)&&(!n||v.source.key!==u||v.target.key!==a))throw new at(`Graph.${e}: inconsistency detected when attempting to merge the "${o}" edge with "${a}" source & "${u}" target vs. ("${v.source.key}", "${v.target.key}").`);x=v}if(!x&&!r.multi&&m&&(x=n?m.undirected[u]:m.out[u]),x){const I=[x.key,!1,!1,!1];if(h?!f:!c)return I;if(h){const L=x.attributes;x.attributes=f(L),r.emit("edgeAttributesUpdated",{type:"replace",key:x.key,attributes:x.attributes})}else cn(x.attributes,c),r.emit("edgeAttributesUpdated",{type:"merge",key:x.key,attributes:x.attributes,data:c});return I}c=c||{},h&&f&&(c=f(c));const M={key:null,undirected:n,source:a,target:u,attributes:c};if(t)o=r._edgeKeyGenerator();else if(o=""+o,r._edges.has(o))throw new at(`Graph.${e}: the "${o}" edge already exists in the graph.`);let w=!1,S=!1;m||(m=sv(r,a,{}),w=!0,a===u&&(g=m,S=!0)),g||(g=sv(r,u,{}),S=!0),v=new wo(n,o,m,g,c),r._edges.set(o,v);const y=a===u;return n?(m.undirectedDegree++,g.undirectedDegree++,y&&(m.undirectedLoops++,r._undirectedSelfLoopCount++)):(m.outDegree++,g.inDegree++,y&&(m.directedLoops++,r._directedSelfLoopCount++)),r.multi?v.attachMulti():v.attach(),n?r._undirectedSize++:r._directedSize++,M.key=o,r.emit("edgeAdded",M),[o,!0,w,S]}function so(r,e){r._edges.delete(e.key);const{source:t,target:n,attributes:o}=e,a=e.undirected,u=t===n;a?(t.undirectedDegree--,n.undirectedDegree--,u&&(t.undirectedLoops--,r._undirectedSelfLoopCount--)):(t.outDegree--,n.inDegree--,u&&(t.directedLoops--,r._directedSelfLoopCount--)),r.multi?e.detachMulti():e.detach(),a?r._undirectedSize--:r._directedSize--,r.emit("edgeDropped",{key:e.key,attributes:o,source:t.key,target:n.key,undirected:a})}class Ot extends l_.EventEmitter{constructor(e){if(super(),e=cn({},qb,e),typeof e.multi!="boolean")throw new Oe(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!$b.has(e.type))throw new Oe(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new Oe(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?c_:e.type==="directed"?d_:h_;ci(this,"NodeDataClass",t);const n="geid_"+jb()+"_";let o=0;const a=()=>{let u;do u=n+o++;while(this._edges.has(u));return u};ci(this,"_attributes",{}),ci(this,"_nodes",new Map),ci(this,"_edges",new Map),ci(this,"_directedSize",0),ci(this,"_undirectedSize",0),ci(this,"_directedSelfLoopCount",0),ci(this,"_undirectedSelfLoopCount",0),ci(this,"_edgeKeyGenerator",a),ci(this,"_options",e),rv.forEach(u=>ci(this,u,this[u])),Ti(this,"order",()=>this._nodes.size),Ti(this,"size",()=>this._edges.size),Ti(this,"directedSize",()=>this._directedSize),Ti(this,"undirectedSize",()=>this._undirectedSize),Ti(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),Ti(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),Ti(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),Ti(this,"multi",this._options.multi),Ti(this,"type",this._options.type),Ti(this,"allowSelfLoops",this._options.allowSelfLoops),Ti(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,o=this._edges.get(n);return!!o&&!o.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new Oe(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,o=this._edges.get(n);return!!o&&o.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new Oe(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?typeof n.out<"u"&&n.out.hasOwnProperty(t)||typeof n.undirected<"u"&&n.undirected.hasOwnProperty(t):!1}throw new Oe(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new at("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Ce(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const o=n.out&&n.out[t]||void 0;if(o)return o.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new at("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Ce(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const o=n.undirected&&n.undirected[t]||void 0;if(o)return o.key}edge(e,t){if(this.multi)throw new at("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Ce(`Graph.edge: could not find the "${t}" target node in the graph.`);const o=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(o)return o.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ce(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,o=0;return this.type!=="directed"&&(n+=t.undirectedDegree,o+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree,o+=t.directedLoops),n-o}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,o=0;return this.type!=="directed"&&(n+=t.undirectedDegree,o+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.outDegree,o+=t.directedLoops),n-o}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,o=0;return this.type!=="directed"&&(n+=t.undirectedDegree,o+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree,o+=t.directedLoops*2),n-o}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ce(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ce(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ce(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new Ce(`Graph.opposite: could not find the "${t}" edge in the graph.`);const o=n.source.key,a=n.target.key;if(e===o)return a;if(e===a)return o;throw new Ce(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${o}, ${a}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new Ce(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ce(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ce(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ce(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return Kb(this,e,t).key}mergeNode(e,t){if(t&&!En(t))throw new Oe(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(cn(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new Oe(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const a=n.attributes;n.attributes=t(a),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const o=t?t({}):{};return n=new this.NodeDataClass(e,o),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:o}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ce(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const o in t.out){n=t.out[o];do so(this,n),n=n.next;while(n)}for(const o in t.in){n=t.in[o];do so(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const o in t.undirected){n=t.undirected[o];do so(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],o=""+arguments[1];if(t=fi(this,n,o,this.type),!t)throw new Ce(`Graph.dropEdge: could not find the "${n}" -> "${o}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new Ce(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return so(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new at("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new at("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=fi(this,e,t,"directed");if(!n)throw new Ce(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return so(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new at("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new at("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=fi(this,e,t,"undirected");if(!n)throw new Ce(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return so(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new Oe("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!En(e))throw new Oe("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!En(e))throw new Oe("Graph.mergeAttributes: provided attributes are not a plain object.");return cn(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new Oe("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new Oe("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!iv(t))throw new Oe("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let o,a;for(;o=n.next(),o.done!==!0;)a=o.value,a.attributes=e(a.key,a.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new Oe("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!iv(t))throw new Oe("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let o,a,u,c;for(;o=n.next(),o.done!==!0;)a=o.value,u=a.source,c=a.target,a.attributes=e(a.key,a.attributes,u.key,c.key,u.attributes,c.attributes,a.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new Oe("Graph.forEachAdjacencyEntry: expecting a callback.");du(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Oe("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");du(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new Oe("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");du(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Oe("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");du(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!="function")throw new Oe("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)o=n.value,e(o.key,o.attributes)}findNode(e){if(typeof e!="function")throw new Oe("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)if(o=n.value,e(o.key,o.attributes))return o.key}mapNodes(e){if(typeof e!="function")throw new Oe("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,o;const a=new Array(this.order);let u=0;for(;n=t.next(),n.done!==!0;)o=n.value,a[u++]=e(o.key,o.attributes);return a}someNode(e){if(typeof e!="function")throw new Oe("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)if(o=n.value,e(o.key,o.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new Oe("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)if(o=n.value,!e(o.key,o.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new Oe("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,o;const a=[];for(;n=t.next(),n.done!==!0;)o=n.value,e(o.key,o.attributes)&&a.push(o.key);return a}reduceNodes(e,t){if(typeof e!="function")throw new Oe("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new Oe("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const o=this._nodes.values();let a,u;for(;a=o.next(),a.done!==!0;)u=a.value,n=e(n,u.key,u.attributes);return n}nodeEntries(){const e=this._nodes.values();return{[Symbol.iterator](){return this},next(){const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((o,a)=>{e[t++]=Hb(a,o)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((o,a)=>{n[t++]=Vb(this.type,a,o)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if(e instanceof Ot)return e.forEachNode((h,f)=>{t?this.mergeNode(h,f):this.addNode(h,f)}),e.forEachEdge((h,f,m,g,v,x,M)=>{t?M?this.mergeUndirectedEdgeWithKey(h,m,g,f):this.mergeDirectedEdgeWithKey(h,m,g,f):M?this.addUndirectedEdgeWithKey(h,m,g,f):this.addDirectedEdgeWithKey(h,m,g,f)}),this;if(!En(e))throw new Oe("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!En(e.attributes))throw new Oe("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,o,a,u,c;if(e.nodes){if(a=e.nodes,!Array.isArray(a))throw new Oe("Graph.import: invalid nodes. Expecting an array.");for(n=0,o=a.length;n<o;n++){u=a[n],Wb(u);const{key:h,attributes:f}=u;t?this.mergeNode(h,f):this.addNode(h,f)}}if(e.edges){let h=!1;if(this.type==="undirected"&&(h=!0),a=e.edges,!Array.isArray(a))throw new Oe("Graph.import: invalid edges. Expecting an array.");for(n=0,o=a.length;n<o;n++){c=a[n],Xb(c);const{source:f,target:m,attributes:g,undirected:v=h}=c;let x;"key"in c?(x=t?v?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:v?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,x.call(this,c.key,f,m,g)):(x=t?v?this.mergeUndirectedEdge:this.mergeDirectedEdge:v?this.addUndirectedEdge:this.addDirectedEdge,x.call(this,f,m,g))}}return this}nullCopy(e){const t=new Ot(cn({},this._options,e));return t.replaceAttributes(cn({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,o)=>{const a=cn({},n.attributes);n=new t.NodeDataClass(o,a),t._nodes.set(o,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new at(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new at("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new at("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let o,a;for(;o=n.next(),o.done!==!0;)a=o.value,v_(t,"copy",!1,a.undirected,a.key,a.source.key,a.target.key,cn({},a.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((a,u)=>{e[u]=a.attributes});const t={},n={};this._edges.forEach((a,u)=>{const c=a.undirected?"--":"->";let h="",f=a.source.key,m=a.target.key,g;a.undirected&&f>m&&(g=f,f=m,m=g);const v=`(${f})${c}(${m})`;u.startsWith("geid_")?this.multi&&(typeof n[v]>"u"?n[v]=0:n[v]++,h+=`${n[v]}. `):h+=`[${u}]: `,h+=v,t[h]=a.attributes});const o={};for(const a in this)this.hasOwnProperty(a)&&!rv.has(a)&&typeof this[a]!="function"&&typeof a!="symbol"&&(o[a]=this[a]);return o.attributes=this._attributes,o.nodes=e,o.edges=t,ci(o,"constructor",this.constructor),o}}typeof Symbol<"u"&&(Ot.prototype[Symbol.for("nodejs.util.inspect.custom")]=Ot.prototype.inspect);Yb.forEach(r=>{["add","merge","update"].forEach(e=>{const t=r.name(e),n=e==="add"?v_:Zb;r.generateKey?Ot.prototype[t]=function(o,a,u){return n(this,t,!0,(r.type||this.type)==="undirected",null,o,a,u,e==="update")}:Ot.prototype[t]=function(o,a,u,c){return n(this,t,!1,(r.type||this.type)==="undirected",o,a,u,c,e==="update")}})});ob(Ot);vb(Ot);Nb(Ot);Gb(Ot);class __ extends Ot{constructor(e){const t=cn({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new Oe("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new Oe('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class y_ extends Ot{constructor(e){const t=cn({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new Oe("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new Oe('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class x_ extends Ot{constructor(e){const t=cn({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Oe("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class S_ extends Ot{constructor(e){const t=cn({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Oe("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new Oe('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class E_ extends Ot{constructor(e){const t=cn({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Oe("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new Oe('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function To(r){r.from=function(e,t){const n=cn({},e.options,t),o=new r(n);return o.import(e),o}}To(Ot);To(__);To(y_);To(x_);To(S_);To(E_);Ot.Graph=Ot;Ot.DirectedGraph=__;Ot.UndirectedGraph=y_;Ot.MultiGraph=x_;Ot.MultiDirectedGraph=S_;Ot.MultiUndirectedGraph=E_;Ot.InvalidArgumentsGraphError=Oe;Ot.NotFoundGraphError=Ce;Ot.UsageGraphError=at;function Qb(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function _a(r){var e=Qb(r,"string");return typeof e=="symbol"?e:e+""}function Nn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ov(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,_a(n.key),n)}}function In(r,e,t){return e&&ov(r.prototype,e),t&&ov(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function _o(r){return _o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_o(r)}function M_(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(M_=function(){return!!r})()}function Jb(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function eA(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Jb(r)}function pi(r,e,t){return e=_o(e),eA(r,M_()?Reflect.construct(e,t||[],_o(r).constructor):e.apply(r,t))}function Jh(r,e){return Jh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},Jh(r,e)}function mi(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&Jh(r,e)}function tA(r){if(Array.isArray(r))return r}function nA(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,o,a,u,c=[],h=!0,f=!1;try{if(a=(t=t.call(r)).next,e===0){if(Object(t)!==t)return;h=!1}else for(;!(h=(n=a.call(t)).done)&&(c.push(n.value),c.length!==e);h=!0);}catch(m){f=!0,o=m}finally{try{if(!h&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}function ef(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function w_(r,e){if(r){if(typeof r=="string")return ef(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ef(r,e):void 0}}function iA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yo(r,e){return tA(r)||nA(r,e)||w_(r,e)||iA()}var eh={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},T_=new Int8Array(4),th=new Int32Array(T_.buffer,0,1),rA=new Float32Array(T_.buffer,0,1),sA=/^\s*rgba?\s*\(/,oA=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function aA(r){var e=0,t=0,n=0,o=1;if(r[0]==="#")r.length===4?(e=parseInt(r.charAt(1)+r.charAt(1),16),t=parseInt(r.charAt(2)+r.charAt(2),16),n=parseInt(r.charAt(3)+r.charAt(3),16)):(e=parseInt(r.charAt(1)+r.charAt(2),16),t=parseInt(r.charAt(3)+r.charAt(4),16),n=parseInt(r.charAt(5)+r.charAt(6),16)),r.length===9&&(o=parseInt(r.charAt(7)+r.charAt(8),16)/255);else if(sA.test(r)){var a=r.match(oA);a&&(e=+a[1],t=+a[2],n=+a[3],a[4]&&(o=+a[4]))}return{r:e,g:t,b:n,a:o}}var ho={};for(var hu in eh)ho[hu]=Ca(eh[hu]),ho[eh[hu]]=ho[hu];function b_(r,e,t,n,o){return th[0]=n<<24|t<<16|e<<8|r,th[0]=th[0]&4278190079,rA[0]}function Ca(r){if(r=r.toLowerCase(),typeof ho[r]<"u")return ho[r];var e=aA(r),t=e.r,n=e.g,o=e.b,a=e.a;a=a*255|0;var u=b_(t,n,o,a);return ho[r]=u,u}var nh={};function A_(r){if(typeof nh[r]<"u")return nh[r];var e=(r&16711680)>>>16,t=(r&65280)>>>8,n=r&255,o=255,a=b_(e,t,n,o);return nh[r]=a,a}function av(r,e,t,n){return t+(e<<8)+(r<<16)}function lv(r,e,t,n,o,a){var u=Math.floor(t/a*o),c=Math.floor(r.drawingBufferHeight/a-n/a*o),h=new Uint8Array(4);r.bindFramebuffer(r.FRAMEBUFFER,e),r.readPixels(u,c,1,1,r.RGBA,r.UNSIGNED_BYTE,h);var f=yo(h,4),m=f[0],g=f[1],v=f[2],x=f[3];return[m,g,v,x]}function Me(r,e,t){return(e=_a(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function uv(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function Ze(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?uv(Object(t),!0).forEach(function(n){Me(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):uv(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function lA(r,e){for(;!{}.hasOwnProperty.call(r,e)&&(r=_o(r))!==null;);return r}function tf(){return tf=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(r,e,t){var n=lA(r,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?r:t):o.value}},tf.apply(null,arguments)}function R_(r,e,t,n){var o=tf(_o(r.prototype),e,t);return typeof o=="function"?function(a){return o.apply(t,a)}:o}function uA(r){return r.normalized?1:r.size}function ih(r){var e=0;return r.forEach(function(t){return e+=uA(t)}),e}function C_(r,e,t){var n=r==="VERTEX"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,o=e.createShader(n);if(o===null)throw new Error("loadShader: error while creating the shader");e.shaderSource(o,t),e.compileShader(o);var a=e.getShaderParameter(o,e.COMPILE_STATUS);if(!a){var u=e.getShaderInfoLog(o);throw e.deleteShader(o),new Error(`loadShader: error while compiling the shader:
`.concat(u,`
`).concat(t))}return o}function cA(r,e){return C_("VERTEX",r,e)}function dA(r,e){return C_("FRAGMENT",r,e)}function hA(r,e){var t=r.createProgram();if(t===null)throw new Error("loadProgram: error while creating the program.");var n,o;for(n=0,o=e.length;n<o;n++)r.attachShader(t,e[n]);r.linkProgram(t);var a=r.getProgramParameter(t,r.LINK_STATUS);if(!a)throw r.deleteProgram(t),new Error("loadProgram: error while linking the program.");return t}function cv(r){var e=r.gl,t=r.buffer,n=r.program,o=r.vertexShader,a=r.fragmentShader;e.deleteShader(o),e.deleteShader(a),e.deleteProgram(n),e.deleteBuffer(t)}var dv=`#define PICKING_MODE
`,fA=Me(Me(Me(Me(Me(Me(Me(Me({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4),P_=(function(){function r(e,t,n){Nn(this,r),Me(this,"array",new Float32Array),Me(this,"constantArray",new Float32Array),Me(this,"capacity",0),Me(this,"verticesCount",0);var o=this.getDefinition();if(this.VERTICES=o.VERTICES,this.VERTEX_SHADER_SOURCE=o.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=o.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=o.UNIFORMS,this.ATTRIBUTES=o.ATTRIBUTES,this.METHOD=o.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in o?o.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in o?o.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in o,this.ATTRIBUTES_ITEMS_COUNT=ih(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=n,this.normalProgram=this.getProgramInfo("normal",e,o.VERTEX_SHADER_SOURCE,o.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=t?this.getProgramInfo("pick",e,dv+o.VERTEX_SHADER_SOURCE,dv+o.FRAGMENT_SHADER_SOURCE,t):null,this.isInstanced){var a=ih(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES," items, received ").concat(this.CONSTANT_DATA.length," instead)"));this.constantArray=new Float32Array(this.CONSTANT_DATA.length*a);for(var u=0;u<this.CONSTANT_DATA.length;u++){var c=this.CONSTANT_DATA[u];if(c.length!==a)throw new Error("Program: error while getting constant data (one vector has ".concat(c.length," items instead of ").concat(a,")"));for(var h=0;h<c.length;h++)this.constantArray[u*a+h]=c[h]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return In(r,[{key:"kill",value:function(){cv(this.normalProgram),this.pickProgram&&(cv(this.pickProgram),this.pickProgram=null)}},{key:"getProgramInfo",value:function(t,n,o,a,u){var c=this.getDefinition(),h=n.createBuffer();if(h===null)throw new Error("Program: error while creating the WebGL buffer.");var f=cA(n,o),m=dA(n,a),g=hA(n,[f,m]),v={};c.UNIFORMS.forEach(function(w){var S=n.getUniformLocation(g,w);S&&(v[w]=S)});var x={};c.ATTRIBUTES.forEach(function(w){x[w.name]=n.getAttribLocation(g,w.name)});var M;if("CONSTANT_ATTRIBUTES"in c&&(c.CONSTANT_ATTRIBUTES.forEach(function(w){x[w.name]=n.getAttribLocation(g,w.name)}),M=n.createBuffer(),M===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:t,program:g,gl:n,frameBuffer:u,buffer:h,constantBuffer:M||{},uniformLocations:v,attributeLocations:x,isPicking:t==="pick",vertexShader:f,fragmentShader:m}}},{key:"bindProgram",value:function(t){var n=this,o=0,a=t.gl,u=t.buffer;this.isInstanced?(a.bindBuffer(a.ARRAY_BUFFER,t.constantBuffer),o=0,this.CONSTANT_ATTRIBUTES.forEach(function(c){return o+=n.bindAttribute(c,t,o,!1)}),a.bufferData(a.ARRAY_BUFFER,this.constantArray,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,t.buffer),o=0,this.ATTRIBUTES.forEach(function(c){return o+=n.bindAttribute(c,t,o,!0)}),a.bufferData(a.ARRAY_BUFFER,this.array,a.DYNAMIC_DRAW)):(a.bindBuffer(a.ARRAY_BUFFER,u),o=0,this.ATTRIBUTES.forEach(function(c){return o+=n.bindAttribute(c,t,o)}),a.bufferData(a.ARRAY_BUFFER,this.array,a.DYNAMIC_DRAW)),a.bindBuffer(a.ARRAY_BUFFER,null)}},{key:"unbindProgram",value:function(t){var n=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(o){return n.unbindAttribute(o,t,!1)}),this.ATTRIBUTES.forEach(function(o){return n.unbindAttribute(o,t,!0)})):this.ATTRIBUTES.forEach(function(o){return n.unbindAttribute(o,t)})}},{key:"bindAttribute",value:function(t,n,o,a){var u=fA[t.type];if(typeof u!="number")throw new Error('Program.bind: yet unsupported attribute type "'.concat(t.type,'"'));var c=n.attributeLocations[t.name],h=n.gl;if(c!==-1){h.enableVertexAttribArray(c);var f=this.isInstanced?(a?this.ATTRIBUTES_ITEMS_COUNT:ih(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;if(h.vertexAttribPointer(c,t.size,t.type,t.normalized||!1,f,o),this.isInstanced&&a)if(h instanceof WebGL2RenderingContext)h.vertexAttribDivisor(c,1);else{var m=h.getExtension("ANGLE_instanced_arrays");m&&m.vertexAttribDivisorANGLE(c,1)}}return t.size*u}},{key:"unbindAttribute",value:function(t,n,o){var a=n.attributeLocations[t.name],u=n.gl;if(a!==-1&&(u.disableVertexAttribArray(a),this.isInstanced&&o))if(u instanceof WebGL2RenderingContext)u.vertexAttribDivisor(a,0);else{var c=u.getExtension("ANGLE_instanced_arrays");c&&c.vertexAttribDivisorANGLE(a,0)}}},{key:"reallocate",value:function(t){t!==this.capacity&&(this.capacity=t,this.verticesCount=this.VERTICES*t,this.array=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT))}},{key:"hasNothingToRender",value:function(){return this.verticesCount===0}},{key:"renderProgram",value:function(t,n){var o=n.gl,a=n.program;o.enable(o.BLEND),o.useProgram(a),this.setUniforms(t,n),this.drawWebGL(this.METHOD,n)}},{key:"render",value:function(t){this.hasNothingToRender()||(this.pickProgram&&(this.pickProgram.gl.viewport(0,0,t.width*t.pixelRatio/t.downSizingRatio,t.height*t.pixelRatio/t.downSizingRatio),this.bindProgram(this.pickProgram),this.renderProgram(Ze(Ze({},t),{},{pixelRatio:t.pixelRatio/t.downSizingRatio}),this.pickProgram),this.unbindProgram(this.pickProgram)),this.normalProgram.gl.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(t,this.normalProgram),this.unbindProgram(this.normalProgram))}},{key:"drawWebGL",value:function(t,n){var o=n.gl,a=n.frameBuffer;if(o.bindFramebuffer(o.FRAMEBUFFER,a),!this.isInstanced)o.drawArrays(t,0,this.verticesCount);else if(o instanceof WebGL2RenderingContext)o.drawArraysInstanced(t,0,this.VERTICES,this.capacity);else{var u=o.getExtension("ANGLE_instanced_arrays");u&&u.drawArraysInstancedANGLE(t,0,this.VERTICES,this.capacity)}}}])})(),pA=(function(r){function e(){return Nn(this,e),pi(this,e,arguments)}return mi(e,r),In(e,[{key:"kill",value:function(){R_(e,"kill",this)([])}},{key:"process",value:function(n,o,a){var u=o*this.STRIDE;if(a.hidden){for(var c=u+this.STRIDE;u<c;u++)this.array[u]=0;return}return this.processVisibleItem(A_(n),u,a)}}])})(P_),Ef=(function(r){function e(){var t;Nn(this,e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=pi(this,e,[].concat(o)),Me(t,"drawLabel",void 0),t}return mi(e,r),In(e,[{key:"kill",value:function(){R_(e,"kill",this)([])}},{key:"process",value:function(n,o,a,u,c){var h=o*this.STRIDE;if(c.hidden||a.hidden||u.hidden){for(var f=h+this.STRIDE;h<f;h++)this.array[h]=0;return}return this.processVisibleItem(A_(n),h,a,u,c)}}])})(P_);function mA(r,e){return(function(){function t(n,o,a){Nn(this,t),Me(this,"drawLabel",e),this.programs=r.map(function(u){return new u(n,o,a)})}return In(t,[{key:"reallocate",value:function(o){this.programs.forEach(function(a){return a.reallocate(o)})}},{key:"process",value:function(o,a,u,c,h){this.programs.forEach(function(f){return f.process(o,a,u,c,h)})}},{key:"render",value:function(o){this.programs.forEach(function(a){return a.render(o)})}},{key:"kill",value:function(){this.programs.forEach(function(o){return o.kill()})}}])})()}function gA(r,e,t,n,o){var a=o.edgeLabelSize,u=o.edgeLabelFont,c=o.edgeLabelWeight,h=o.edgeLabelColor.attribute?e[o.edgeLabelColor.attribute]||o.edgeLabelColor.color||"#000":o.edgeLabelColor.color,f=e.label;if(f){r.fillStyle=h,r.font="".concat(c," ").concat(a,"px ").concat(u);var m=t.size,g=n.size,v=t.x,x=t.y,M=n.x,w=n.y,S=(v+M)/2,y=(x+w)/2,I=M-v,L=w-x,T=Math.sqrt(I*I+L*L);if(!(T<m+g)){v+=I*m/T,x+=L*m/T,M-=I*g/T,w-=L*g/T,S=(v+M)/2,y=(x+w)/2,I=M-v,L=w-x,T=Math.sqrt(I*I+L*L);var P=r.measureText(f).width;if(P>T){var N="…";for(f=f+N,P=r.measureText(f).width;P>T&&f.length>1;)f=f.slice(0,-2)+N,P=r.measureText(f).width;if(f.length<4)return}var D;I>0?L>0?D=Math.acos(I/T):D=Math.asin(L/T):L>0?D=Math.acos(I/T)+Math.PI:D=Math.asin(I/T)+Math.PI/2,r.save(),r.translate(S,y),r.rotate(D),r.fillText(f,-P/2,e.size/2+a),r.restore()}}}function L_(r,e,t){if(e.label){var n=t.labelSize,o=t.labelFont,a=t.labelWeight,u=t.labelColor.attribute?e[t.labelColor.attribute]||t.labelColor.color||"#000":t.labelColor.color;r.fillStyle=u,r.font="".concat(a," ").concat(n,"px ").concat(o),r.fillText(e.label,e.x+e.size+3,e.y+n/3)}}function vA(r,e,t){var n=t.labelSize,o=t.labelFont,a=t.labelWeight;r.font="".concat(a," ").concat(n,"px ").concat(o),r.fillStyle="#FFF",r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=8,r.shadowColor="#000";var u=2;if(typeof e.label=="string"){var c=r.measureText(e.label).width,h=Math.round(c+5),f=Math.round(n+2*u),m=Math.max(e.size,n/2)+u,g=Math.asin(f/2/m),v=Math.sqrt(Math.abs(Math.pow(m,2)-Math.pow(f/2,2)));r.beginPath(),r.moveTo(e.x+v,e.y+f/2),r.lineTo(e.x+m+h,e.y+f/2),r.lineTo(e.x+m+h,e.y-f/2),r.lineTo(e.x+v,e.y-f/2),r.arc(e.x,e.y,m,g,-g),r.closePath(),r.fill()}else r.beginPath(),r.arc(e.x,e.y,e.size+u,0,Math.PI*2),r.closePath(),r.fill();r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=0,L_(r,e,t)}var _A=`
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
`,yA=_A,xA=`
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
`,SA=xA,D_=WebGLRenderingContext,hv=D_.UNSIGNED_BYTE,rh=D_.FLOAT,EA=["u_sizeRatio","u_correctionRatio","u_matrix"],Ou=(function(r){function e(){return Nn(this,e),pi(this,e,arguments)}return mi(e,r),In(e,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:SA,FRAGMENT_SHADER_SOURCE:yA,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:EA,ATTRIBUTES:[{name:"a_position",size:2,type:rh},{name:"a_size",size:1,type:rh},{name:"a_color",size:4,type:hv,normalized:!0},{name:"a_id",size:4,type:hv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_angle",size:1,type:rh}],CONSTANT_DATA:[[e.ANGLE_1],[e.ANGLE_2],[e.ANGLE_3]]}}},{key:"processVisibleItem",value:function(n,o,a){var u=this.array,c=Ca(a.color);u[o++]=a.x,u[o++]=a.y,u[o++]=a.size,u[o++]=c,u[o++]=n}},{key:"setUniforms",value:function(n,o){var a=o.gl,u=o.uniformLocations,c=u.u_sizeRatio,h=u.u_correctionRatio,f=u.u_matrix;a.uniform1f(h,n.correctionRatio),a.uniform1f(c,n.sizeRatio),a.uniformMatrix3fv(f,!1,n.matrix)}}])})(pA);Me(Ou,"ANGLE_1",0);Me(Ou,"ANGLE_2",2*Math.PI/3);Me(Ou,"ANGLE_3",4*Math.PI/3);var MA=`
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`,wA=MA,TA=`
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
`,bA=TA,N_=WebGLRenderingContext,fv=N_.UNSIGNED_BYTE,fu=N_.FLOAT,AA=["u_matrix","u_sizeRatio","u_correctionRatio","u_minEdgeThickness","u_lengthToThicknessRatio","u_widenessToThicknessRatio"],I_={extremity:"target",lengthToThicknessRatio:2.5,widenessToThicknessRatio:2};function U_(r){var e=Ze(Ze({},I_),{});return(function(t){function n(){return Nn(this,n),pi(this,n,arguments)}return mi(n,t),In(n,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:bA,FRAGMENT_SHADER_SOURCE:wA,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:AA,ATTRIBUTES:[{name:"a_position",size:2,type:fu},{name:"a_normal",size:2,type:fu},{name:"a_radius",size:1,type:fu},{name:"a_color",size:4,type:fv,normalized:!0},{name:"a_id",size:4,type:fv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_barycentric",size:3,type:fu}],CONSTANT_DATA:[[1,0,0],[0,1,0],[0,0,1]]}}},{key:"processVisibleItem",value:function(a,u,c,h,f){if(e.extremity==="source"){var m=[h,c];c=m[0],h=m[1]}var g=f.size||1,v=h.size||1,x=c.x,M=c.y,w=h.x,S=h.y,y=Ca(f.color),I=w-x,L=S-M,T=I*I+L*L,P=0,N=0;T&&(T=1/Math.sqrt(T),P=-L*T*g,N=I*T*g);var D=this.array;D[u++]=w,D[u++]=S,D[u++]=-P,D[u++]=-N,D[u++]=v,D[u++]=y,D[u++]=a}},{key:"setUniforms",value:function(a,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_sizeRatio,g=h.u_correctionRatio,v=h.u_minEdgeThickness,x=h.u_lengthToThicknessRatio,M=h.u_widenessToThicknessRatio;c.uniformMatrix3fv(f,!1,a.matrix),c.uniform1f(m,a.sizeRatio),c.uniform1f(g,a.correctionRatio),c.uniform1f(v,a.minEdgeThickness),c.uniform1f(x,e.lengthToThicknessRatio),c.uniform1f(M,e.widenessToThicknessRatio)}}])})(Ef)}U_();var RA=`
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
`,F_=RA,CA=`
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
`,PA=CA,k_=WebGLRenderingContext,pv=k_.UNSIGNED_BYTE,fs=k_.FLOAT,LA=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness","u_lengthToThicknessRatio"],DA={lengthToThicknessRatio:I_.lengthToThicknessRatio};function O_(r){var e=Ze(Ze({},DA),{});return(function(t){function n(){return Nn(this,n),pi(this,n,arguments)}return mi(n,t),In(n,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:PA,FRAGMENT_SHADER_SOURCE:F_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:LA,ATTRIBUTES:[{name:"a_positionStart",size:2,type:fs},{name:"a_positionEnd",size:2,type:fs},{name:"a_normal",size:2,type:fs},{name:"a_color",size:4,type:pv,normalized:!0},{name:"a_id",size:4,type:pv,normalized:!0},{name:"a_radius",size:1,type:fs}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:fs},{name:"a_normalCoef",size:1,type:fs},{name:"a_radiusCoef",size:1,type:fs}],CONSTANT_DATA:[[0,1,0],[0,-1,0],[1,1,1],[1,1,1],[0,-1,0],[1,-1,-1]]}}},{key:"processVisibleItem",value:function(a,u,c,h,f){var m=f.size||1,g=c.x,v=c.y,x=h.x,M=h.y,w=Ca(f.color),S=x-g,y=M-v,I=h.size||1,L=S*S+y*y,T=0,P=0;L&&(L=1/Math.sqrt(L),T=-y*L*m,P=S*L*m);var N=this.array;N[u++]=g,N[u++]=v,N[u++]=x,N[u++]=M,N[u++]=T,N[u++]=P,N[u++]=w,N[u++]=a,N[u++]=I}},{key:"setUniforms",value:function(a,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_zoomRatio,g=h.u_feather,v=h.u_pixelRatio,x=h.u_correctionRatio,M=h.u_sizeRatio,w=h.u_minEdgeThickness,S=h.u_lengthToThicknessRatio;c.uniformMatrix3fv(f,!1,a.matrix),c.uniform1f(m,a.zoomRatio),c.uniform1f(M,a.sizeRatio),c.uniform1f(x,a.correctionRatio),c.uniform1f(v,a.pixelRatio),c.uniform1f(g,a.antiAliasingFeather),c.uniform1f(w,a.minEdgeThickness),c.uniform1f(S,e.lengthToThicknessRatio)}}])})(Ef)}O_();function NA(r){return mA([O_(),U_()])}var IA=NA(),UA=IA,FA=`
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
`,kA=FA,z_=WebGLRenderingContext,mv=z_.UNSIGNED_BYTE,ha=z_.FLOAT,OA=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness"],zA=(function(r){function e(){return Nn(this,e),pi(this,e,arguments)}return mi(e,r),In(e,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:kA,FRAGMENT_SHADER_SOURCE:F_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:OA,ATTRIBUTES:[{name:"a_positionStart",size:2,type:ha},{name:"a_positionEnd",size:2,type:ha},{name:"a_normal",size:2,type:ha},{name:"a_color",size:4,type:mv,normalized:!0},{name:"a_id",size:4,type:mv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:ha},{name:"a_normalCoef",size:1,type:ha}],CONSTANT_DATA:[[0,1],[0,-1],[1,1],[1,1],[0,-1],[1,-1]]}}},{key:"processVisibleItem",value:function(n,o,a,u,c){var h=c.size||1,f=a.x,m=a.y,g=u.x,v=u.y,x=Ca(c.color),M=g-f,w=v-m,S=M*M+w*w,y=0,I=0;S&&(S=1/Math.sqrt(S),y=-w*S*h,I=M*S*h);var L=this.array;L[o++]=f,L[o++]=m,L[o++]=g,L[o++]=v,L[o++]=y,L[o++]=I,L[o++]=x,L[o++]=n}},{key:"setUniforms",value:function(n,o){var a=o.gl,u=o.uniformLocations,c=u.u_matrix,h=u.u_zoomRatio,f=u.u_feather,m=u.u_pixelRatio,g=u.u_correctionRatio,v=u.u_sizeRatio,x=u.u_minEdgeThickness;a.uniformMatrix3fv(c,!1,n.matrix),a.uniform1f(h,n.zoomRatio),a.uniform1f(v,n.sizeRatio),a.uniform1f(g,n.correctionRatio),a.uniform1f(m,n.pixelRatio),a.uniform1f(f,n.antiAliasingFeather),a.uniform1f(x,n.minEdgeThickness)}}])})(Ef),Mf=(function(r){function e(){var t;return Nn(this,e),t=pi(this,e),t.rawEmitter=t,t}return mi(e,r),In(e)})(l_.EventEmitter),sh,gv;function BA(){return gv||(gv=1,sh=function(e){return e!==null&&typeof e=="object"&&typeof e.addUndirectedEdgeWithKey=="function"&&typeof e.dropNode=="function"&&typeof e.multi=="boolean"}),sh}var GA=BA();const HA=of(GA);var VA=function(e){return e},WA=function(e){return e*e},XA=function(e){return e*(2-e)},jA=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},$A=function(e){return e*e*e},YA=function(e){return--e*e*e+1},qA=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},KA={linear:VA,quadraticIn:WA,quadraticOut:XA,quadraticInOut:jA,cubicIn:$A,cubicOut:YA,cubicInOut:qA},ZA={easing:"quadraticInOut",duration:150};function bi(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function pu(r,e,t){return r[0]=e,r[4]=typeof t=="number"?t:e,r}function vv(r,e){var t=Math.sin(e),n=Math.cos(e);return r[0]=n,r[1]=t,r[3]=-t,r[4]=n,r}function _v(r,e,t){return r[6]=e,r[7]=t,r}function Gr(r,e){var t=r[0],n=r[1],o=r[2],a=r[3],u=r[4],c=r[5],h=r[6],f=r[7],m=r[8],g=e[0],v=e[1],x=e[2],M=e[3],w=e[4],S=e[5],y=e[6],I=e[7],L=e[8];return r[0]=g*t+v*a+x*h,r[1]=g*n+v*u+x*f,r[2]=g*o+v*c+x*m,r[3]=M*t+w*a+S*h,r[4]=M*n+w*u+S*f,r[5]=M*o+w*c+S*m,r[6]=y*t+I*a+L*h,r[7]=y*n+I*u+L*f,r[8]=y*o+I*c+L*m,r}function nf(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=r[0],o=r[1],a=r[3],u=r[4],c=r[6],h=r[7],f=e.x,m=e.y;return{x:f*n+m*a+c*t,y:f*o+m*u+h*t}}function QA(r,e){var t=r.height/r.width,n=e.height/e.width;return t<1&&n>1||t>1&&n<1?1:Math.min(Math.max(n,1/n),Math.max(1/t,t))}function fa(r,e,t,n,o){var a=r.angle,u=r.ratio,c=r.x,h=r.y,f=e.width,m=e.height,g=bi(),v=Math.min(f,m)-2*n,x=QA(e,t);return o?(Gr(g,_v(bi(),c,h)),Gr(g,pu(bi(),u)),Gr(g,vv(bi(),a)),Gr(g,pu(bi(),f/v/2/x,m/v/2/x))):(Gr(g,pu(bi(),2*(v/f)*x,2*(v/m)*x)),Gr(g,vv(bi(),-a)),Gr(g,pu(bi(),1/u)),Gr(g,_v(bi(),-c,-h))),g}function JA(r,e,t){var n=nf(r,{x:Math.cos(e.angle),y:Math.sin(e.angle)},0),o=n.x,a=n.y;return 1/Math.sqrt(Math.pow(o,2)+Math.pow(a,2))/t.width}function eR(r){if(!r.order)return{x:[0,1],y:[0,1]};var e=1/0,t=-1/0,n=1/0,o=-1/0;return r.forEachNode(function(a,u){var c=u.x,h=u.y;c<e&&(e=c),c>t&&(t=c),h<n&&(n=h),h>o&&(o=h)}),{x:[e,t],y:[n,o]}}function tR(r){if(!HA(r))throw new Error("Sigma: invalid graph instance.");r.forEachNode(function(e,t){if(!Number.isFinite(t.x)||!Number.isFinite(t.y))throw new Error("Sigma: Coordinates of node ".concat(e," are invalid. A node must have a numeric 'x' and 'y' attribute."))})}function nR(r,e,t){var n=document.createElement(r);if(e)for(var o in e)n.style[o]=e[o];if(t)for(var a in t)n.setAttribute(a,t[a]);return n}function yv(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}function xv(r,e,t){return t.sort(function(n,o){var a=e(n)||0,u=e(o)||0;return a<u?-1:a>u?1:0})}function Sv(r){var e=yo(r.x,2),t=e[0],n=e[1],o=yo(r.y,2),a=o[0],u=o[1],c=Math.max(n-t,u-a),h=(n+t)/2,f=(u+a)/2;(c===0||Math.abs(c)===1/0||isNaN(c))&&(c=1),isNaN(h)&&(h=0),isNaN(f)&&(f=0);var m=function(v){return{x:.5+(v.x-h)/c,y:.5+(v.y-f)/c}};return m.applyTo=function(g){g.x=.5+(g.x-h)/c,g.y=.5+(g.y-f)/c},m.inverse=function(g){return{x:h+c*(g.x-.5),y:f+c*(g.y-.5)}},m.ratio=c,m}function rf(r){"@babel/helpers - typeof";return rf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rf(r)}function Ev(r,e){var t=e.size;if(t!==0){var n=r.length;r.length+=t;var o=0;e.forEach(function(a){r[n+o]=a,o++})}}function oh(r){r=r||{};for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;e++){var n=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];n&&Object.assign(r,n)}return r}var wf={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,enableEdgeEvents:!1,defaultNodeColor:"#999",defaultNodeType:"circle",defaultEdgeColor:"#ccc",defaultEdgeType:"line",labelFont:"Arial",labelSize:14,labelWeight:"normal",labelColor:{color:"#000"},edgeLabelFont:"Arial",edgeLabelSize:14,edgeLabelWeight:"normal",edgeLabelColor:{attribute:"color"},stagePadding:30,defaultDrawEdgeLabel:gA,defaultDrawNodeLabel:L_,defaultDrawNodeHover:vA,minEdgeThickness:1.7,antiAliasingFeather:1,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"screen",autoRescale:!0,autoCenter:!0,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,nodeReducer:null,edgeReducer:null,zIndex:!1,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,cameraPanBoundaries:null,allowInvalidContainer:!1,nodeProgramClasses:{},nodeHoverProgramClasses:{},edgeProgramClasses:{}},iR={circle:Ou},rR={arrow:UA,line:zA};function ah(r){if(typeof r.labelDensity!="number"||r.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");var e=r.minCameraRatio,t=r.maxCameraRatio;if(typeof e=="number"&&typeof t=="number"&&t<e)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function sR(r){var e=oh({},wf,r);return e.nodeProgramClasses=oh({},iR,e.nodeProgramClasses),e.edgeProgramClasses=oh({},rR,e.edgeProgramClasses),e}var mu=1.5,Mv=(function(r){function e(){var t;return Nn(this,e),t=pi(this,e),Me(t,"x",.5),Me(t,"y",.5),Me(t,"angle",0),Me(t,"ratio",1),Me(t,"minRatio",null),Me(t,"maxRatio",null),Me(t,"enabledZooming",!0),Me(t,"enabledPanning",!0),Me(t,"enabledRotation",!0),Me(t,"clean",null),Me(t,"nextFrame",null),Me(t,"previousState",null),Me(t,"enabled",!0),t.previousState=t.getState(),t}return mi(e,r),In(e,[{key:"enable",value:function(){return this.enabled=!0,this}},{key:"disable",value:function(){return this.enabled=!1,this}},{key:"getState",value:function(){return{x:this.x,y:this.y,angle:this.angle,ratio:this.ratio}}},{key:"hasState",value:function(n){return this.x===n.x&&this.y===n.y&&this.ratio===n.ratio&&this.angle===n.angle}},{key:"getPreviousState",value:function(){var n=this.previousState;return n?{x:n.x,y:n.y,angle:n.angle,ratio:n.ratio}:null}},{key:"getBoundedRatio",value:function(n){var o=n;return typeof this.minRatio=="number"&&(o=Math.max(o,this.minRatio)),typeof this.maxRatio=="number"&&(o=Math.min(o,this.maxRatio)),o}},{key:"validateState",value:function(n){var o={};return this.enabledPanning&&typeof n.x=="number"&&(o.x=n.x),this.enabledPanning&&typeof n.y=="number"&&(o.y=n.y),this.enabledZooming&&typeof n.ratio=="number"&&(o.ratio=this.getBoundedRatio(n.ratio)),this.enabledRotation&&typeof n.angle=="number"&&(o.angle=n.angle),this.clean?this.clean(Ze(Ze({},this.getState()),o)):o}},{key:"isAnimated",value:function(){return!!this.nextFrame}},{key:"setState",value:function(n){if(!this.enabled)return this;this.previousState=this.getState();var o=this.validateState(n);return typeof o.x=="number"&&(this.x=o.x),typeof o.y=="number"&&(this.y=o.y),typeof o.ratio=="number"&&(this.ratio=o.ratio),typeof o.angle=="number"&&(this.angle=o.angle),this.hasState(this.previousState)||this.emit("updated",this.getState()),this}},{key:"updateState",value:function(n){return this.setState(n(this.getState())),this}},{key:"animate",value:function(n){var o=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=arguments.length>2?arguments[2]:void 0;if(!u)return new Promise(function(x){return o.animate(n,a,x)});if(this.enabled){var c=Ze(Ze({},ZA),a),h=this.validateState(n),f=typeof c.easing=="function"?c.easing:KA[c.easing],m=Date.now(),g=this.getState(),v=function(){var M=(Date.now()-m)/c.duration;if(M>=1){o.nextFrame=null,o.setState(h),o.animationCallback&&(o.animationCallback.call(null),o.animationCallback=void 0);return}var w=f(M),S={};typeof h.x=="number"&&(S.x=g.x+(h.x-g.x)*w),typeof h.y=="number"&&(S.y=g.y+(h.y-g.y)*w),o.enabledRotation&&typeof h.angle=="number"&&(S.angle=g.angle+(h.angle-g.angle)*w),typeof h.ratio=="number"&&(S.ratio=g.ratio+(h.ratio-g.ratio)*w),o.setState(S),o.nextFrame=requestAnimationFrame(v)};this.nextFrame?(cancelAnimationFrame(this.nextFrame),this.animationCallback&&this.animationCallback.call(null),this.nextFrame=requestAnimationFrame(v)):v(),this.animationCallback=u}}},{key:"animatedZoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio/n}):this.animate({ratio:this.ratio/(n.factor||mu)},n):this.animate({ratio:this.ratio/mu})}},{key:"animatedUnzoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio*n}):this.animate({ratio:this.ratio*(n.factor||mu)},n):this.animate({ratio:this.ratio*mu})}},{key:"animatedReset",value:function(n){return this.animate({x:.5,y:.5,ratio:1,angle:0},n)}},{key:"copy",value:function(){return e.from(this.getState())}}],[{key:"from",value:function(n){var o=new e;return o.setState(n)}}])})(Mf);function Ri(r,e){var t=e.getBoundingClientRect();return{x:r.clientX-t.left,y:r.clientY-t.top}}function ir(r,e){var t=Ze(Ze({},Ri(r,e)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){t.sigmaDefaultPrevented=!0},original:r});return t}function pa(r){var e="x"in r?r:Ze(Ze({},r.touches[0]||r.previousTouches[0]),{},{original:r.original,sigmaDefaultPrevented:r.sigmaDefaultPrevented,preventSigmaDefault:function(){r.sigmaDefaultPrevented=!0,e.sigmaDefaultPrevented=!0}});return e}function oR(r,e){return Ze(Ze({},ir(r,e)),{},{delta:B_(r)})}var aR=2;function Au(r){for(var e=[],t=0,n=Math.min(r.length,aR);t<n;t++)e.push(r[t]);return e}function ma(r,e,t){var n={touches:Au(r.touches).map(function(o){return Ri(o,t)}),previousTouches:e.map(function(o){return Ri(o,t)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){n.sigmaDefaultPrevented=!0},original:r};return n}function B_(r){if(typeof r.deltaY<"u")return r.deltaY*-3/360;if(typeof r.detail<"u")return r.detail/-9;throw new Error("Captor: could not extract delta from event.")}var G_=(function(r){function e(t,n){var o;return Nn(this,e),o=pi(this,e),o.container=t,o.renderer=n,o}return mi(e,r),In(e)})(Mf),lR=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],uR=lR.reduce(function(r,e){return Ze(Ze({},r),{},Me({},e,wf[e]))},{}),cR=(function(r){function e(t,n){var o;return Nn(this,e),o=pi(this,e,[t,n]),Me(o,"enabled",!0),Me(o,"draggedEvents",0),Me(o,"downStartTime",null),Me(o,"lastMouseX",null),Me(o,"lastMouseY",null),Me(o,"isMouseDown",!1),Me(o,"isMoving",!1),Me(o,"movingTimeout",null),Me(o,"startCameraState",null),Me(o,"clicks",0),Me(o,"doubleClickTimeout",null),Me(o,"currentWheelDirection",0),Me(o,"settings",uR),o.handleClick=o.handleClick.bind(o),o.handleRightClick=o.handleRightClick.bind(o),o.handleDown=o.handleDown.bind(o),o.handleUp=o.handleUp.bind(o),o.handleMove=o.handleMove.bind(o),o.handleWheel=o.handleWheel.bind(o),o.handleLeave=o.handleLeave.bind(o),o.handleEnter=o.handleEnter.bind(o),t.addEventListener("click",o.handleClick,{capture:!1}),t.addEventListener("contextmenu",o.handleRightClick,{capture:!1}),t.addEventListener("mousedown",o.handleDown,{capture:!1}),t.addEventListener("wheel",o.handleWheel,{capture:!1}),t.addEventListener("mouseleave",o.handleLeave,{capture:!1}),t.addEventListener("mouseenter",o.handleEnter,{capture:!1}),document.addEventListener("mousemove",o.handleMove,{capture:!1}),document.addEventListener("mouseup",o.handleUp,{capture:!1}),o}return mi(e,r),In(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("click",this.handleClick),n.removeEventListener("contextmenu",this.handleRightClick),n.removeEventListener("mousedown",this.handleDown),n.removeEventListener("wheel",this.handleWheel),n.removeEventListener("mouseleave",this.handleLeave),n.removeEventListener("mouseenter",this.handleEnter),document.removeEventListener("mousemove",this.handleMove),document.removeEventListener("mouseup",this.handleUp)}},{key:"handleClick",value:function(n){var o=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(n);setTimeout(function(){o.clicks=0,o.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",ir(n,this.container))}}},{key:"handleRightClick",value:function(n){this.enabled&&this.emit("rightClick",ir(n,this.container))}},{key:"handleDoubleClick",value:function(n){if(this.enabled){n.preventDefault(),n.stopPropagation();var o=ir(n,this.container);if(this.emit("doubleClick",o),!o.sigmaDefaultPrevented){var a=this.renderer.getCamera(),u=a.getBoundedRatio(a.getState().ratio/this.settings.doubleClickZoomingRatio);a.animate(this.renderer.getViewportZoomedState(Ri(n,this.container),u),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}}},{key:"handleDown",value:function(n){if(this.enabled){if(n.button===0){this.startCameraState=this.renderer.getCamera().getState();var o=Ri(n,this.container),a=o.x,u=o.y;this.lastMouseX=a,this.lastMouseY=u,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}this.emit("mousedown",ir(n,this.container))}}},{key:"handleUp",value:function(n){var o=this;if(!(!this.enabled||!this.isMouseDown)){var a=this.renderer.getCamera();this.isMouseDown=!1,typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var u=Ri(n,this.container),c=u.x,h=u.y,f=a.getState(),m=a.getPreviousState()||{x:0,y:0};this.isMoving?a.animate({x:f.x+this.settings.inertiaRatio*(f.x-m.x),y:f.y+this.settings.inertiaRatio*(f.y-m.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==c||this.lastMouseY!==h)&&a.setState({x:f.x,y:f.y}),this.isMoving=!1,setTimeout(function(){var g=o.draggedEvents>0;o.draggedEvents=0,g&&o.renderer.getSetting("hideEdgesOnMove")&&o.renderer.refresh()},0),this.emit("mouseup",ir(n,this.container))}}},{key:"handleMove",value:function(n){var o=this;if(this.enabled){var a=ir(n,this.container);if(this.emit("mousemovebody",a),(n.target===this.container||n.composedPath()[0]===this.container)&&this.emit("mousemove",a),!a.sigmaDefaultPrevented&&this.isMouseDown){this.isMoving=!0,this.draggedEvents++,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){o.movingTimeout=null,o.isMoving=!1},this.settings.dragTimeout);var u=this.renderer.getCamera(),c=Ri(n,this.container),h=c.x,f=c.y,m=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),g=this.renderer.viewportToFramedGraph({x:h,y:f}),v=m.x-g.x,x=m.y-g.y,M=u.getState(),w=M.x+v,S=M.y+x;u.setState({x:w,y:S}),this.lastMouseX=h,this.lastMouseY=f,n.preventDefault(),n.stopPropagation()}}}},{key:"handleLeave",value:function(n){this.emit("mouseleave",ir(n,this.container))}},{key:"handleEnter",value:function(n){this.emit("mouseenter",ir(n,this.container))}},{key:"handleWheel",value:function(n){var o=this,a=this.renderer.getCamera();if(!(!this.enabled||!a.enabledZooming)){var u=B_(n);if(u){var c=oR(n,this.container);if(this.emit("wheel",c),c.sigmaDefaultPrevented){n.preventDefault(),n.stopPropagation();return}var h=a.getState().ratio,f=u>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,m=a.getBoundedRatio(h*f),g=u>0?1:-1,v=Date.now();h!==m&&(n.preventDefault(),n.stopPropagation(),!(this.currentWheelDirection===g&&this.lastWheelTriggerTime&&v-this.lastWheelTriggerTime<this.settings.zoomDuration/5)&&(a.animate(this.renderer.getViewportZoomedState(Ri(n,this.container),m),{easing:"quadraticOut",duration:this.settings.zoomDuration},function(){o.currentWheelDirection=0}),this.currentWheelDirection=g,this.lastWheelTriggerTime=v))}}}},{key:"setSettings",value:function(n){this.settings=n}}])})(G_),dR=["dragTimeout","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],hR=dR.reduce(function(r,e){return Ze(Ze({},r),{},Me({},e,wf[e]))},{}),fR=(function(r){function e(t,n){var o;return Nn(this,e),o=pi(this,e,[t,n]),Me(o,"enabled",!0),Me(o,"isMoving",!1),Me(o,"hasMoved",!1),Me(o,"touchMode",0),Me(o,"startTouchesPositions",[]),Me(o,"lastTouches",[]),Me(o,"lastTap",null),Me(o,"settings",hR),o.handleStart=o.handleStart.bind(o),o.handleLeave=o.handleLeave.bind(o),o.handleMove=o.handleMove.bind(o),t.addEventListener("touchstart",o.handleStart,{capture:!1}),t.addEventListener("touchcancel",o.handleLeave,{capture:!1}),document.addEventListener("touchend",o.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",o.handleMove,{capture:!1,passive:!1}),o}return mi(e,r),In(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("touchstart",this.handleStart),n.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}},{key:"getDimensions",value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:"handleStart",value:function(n){var o=this;if(this.enabled){n.preventDefault();var a=Au(n.touches);if(this.touchMode=a.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=a.map(function(x){return Ri(x,o.container)}),this.touchMode===2){var u=yo(this.startTouchesPositions,2),c=u[0],h=c.x,f=c.y,m=u[1],g=m.x,v=m.y;this.startTouchesAngle=Math.atan2(v-f,g-h),this.startTouchesDistance=Math.sqrt(Math.pow(g-h,2)+Math.pow(v-f,2))}this.emit("touchdown",ma(n,this.lastTouches,this.container)),this.lastTouches=a,this.lastTouchesPositions=this.startTouchesPositions}}},{key:"handleLeave",value:function(n){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(n.cancelable&&n.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(n.touches.length===1){this.handleStart(n),n.preventDefault();break}case 1:if(this.isMoving){var o=this.renderer.getCamera(),a=o.getState(),u=o.getPreviousState()||{x:0,y:0};o.animate({x:a.x+this.settings.inertiaRatio*(a.x-u.x),y:a.y+this.settings.inertiaRatio*(a.y-u.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.emit("touchup",ma(n,this.lastTouches,this.container)),!n.touches.length){var c=Ri(this.lastTouches[0],this.container),h=this.startTouchesPositions[0],f=Math.pow(c.x-h.x,2)+Math.pow(c.y-h.y,2);if(!n.touches.length&&f<Math.pow(this.settings.tapMoveTolerance,2))if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var m=ma(n,this.lastTouches,this.container);if(this.emit("doubletap",m),this.lastTap=null,!m.sigmaDefaultPrevented){var g=this.renderer.getCamera(),v=g.getBoundedRatio(g.getState().ratio/this.settings.doubleClickZoomingRatio);g.animate(this.renderer.getViewportZoomedState(c,v),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{var x=ma(n,this.lastTouches,this.container);this.emit("tap",x),this.lastTap={time:Date.now(),position:x.touches[0]||x.previousTouches[0]}}}this.lastTouches=Au(n.touches),this.startTouchesPositions=[]}}},{key:"handleMove",value:function(n){var o=this;if(!(!this.enabled||!this.startTouchesPositions.length)){n.preventDefault();var a=Au(n.touches),u=a.map(function(U){return Ri(U,o.container)}),c=this.lastTouches;this.lastTouches=a,this.lastTouchesPositions=u;var h=ma(n,c,this.container);if(this.emit("touchmove",h),!h.sigmaDefaultPrevented&&(this.hasMoved||(this.hasMoved=u.some(function(U,Y){var Ae=o.startTouchesPositions[Y];return Ae&&(U.x!==Ae.x||U.y!==Ae.y)})),!!this.hasMoved)){this.isMoving=!0,this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){o.isMoving=!1},this.settings.dragTimeout);var f=this.renderer.getCamera(),m=this.startCameraState,g=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{var v=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),x=v.x,M=v.y,w=this.renderer.viewportToFramedGraph(u[0]),S=w.x,y=w.y;f.setState({x:m.x+x-S,y:m.y+M-y});break}case 2:{var I={x:.5,y:.5,angle:0,ratio:1},L=u[0],T=L.x,P=L.y,N=u[1],D=N.x,B=N.y,C=Math.atan2(B-P,D-T)-this.startTouchesAngle,E=Math.hypot(B-P,D-T)/this.startTouchesDistance,O=f.getBoundedRatio(m.ratio/E);I.ratio=O,I.angle=m.angle+C;var Z=this.getDimensions(),te=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:m}),oe=Math.min(Z.width,Z.height)-2*g,he=oe/Z.width,de=oe/Z.height,me=O/oe,G=T-oe/2/he,pe=P-oe/2/de,le=[G*Math.cos(-I.angle)-pe*Math.sin(-I.angle),pe*Math.cos(-I.angle)+G*Math.sin(-I.angle)];G=le[0],pe=le[1],I.x=te.x-G*me,I.y=te.y+pe*me,f.setState(I);break}}}}}},{key:"setSettings",value:function(n){this.settings=n}}])})(G_);function pR(r){if(Array.isArray(r))return ef(r)}function mR(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function gR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wv(r){return pR(r)||mR(r)||w_(r)||gR()}function vR(r,e){if(r==null)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)!==-1)continue;t[n]=r[n]}return t}function lh(r,e){if(r==null)return{};var t,n,o=vR(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var Tv=(function(){function r(e,t){Nn(this,r),this.key=e,this.size=t}return In(r,null,[{key:"compare",value:function(t,n){return t.size>n.size?-1:t.size<n.size||t.key>n.key?1:-1}}])})(),bv=(function(){function r(){Nn(this,r),Me(this,"width",0),Me(this,"height",0),Me(this,"cellSize",0),Me(this,"columns",0),Me(this,"rows",0),Me(this,"cells",{})}return In(r,[{key:"resizeAndClear",value:function(t,n){this.width=t.width,this.height=t.height,this.cellSize=n,this.columns=Math.ceil(t.width/n),this.rows=Math.ceil(t.height/n),this.cells={}}},{key:"getIndex",value:function(t){var n=Math.floor(t.x/this.cellSize),o=Math.floor(t.y/this.cellSize);return o*this.columns+n}},{key:"add",value:function(t,n,o){var a=new Tv(t,n),u=this.getIndex(o),c=this.cells[u];c||(c=[],this.cells[u]=c),c.push(a)}},{key:"organize",value:function(){for(var t in this.cells){var n=this.cells[t];n.sort(Tv.compare)}}},{key:"getLabelsToDisplay",value:function(t,n){var o=this.cellSize*this.cellSize,a=o/t/t,u=a*n/o,c=Math.ceil(u),h=[];for(var f in this.cells)for(var m=this.cells[f],g=0;g<Math.min(c,m.length);g++)h.push(m[g].key);return h}}])})();function _R(r){var e=r.graph,t=r.hoveredNode,n=r.highlightedNodes,o=r.displayedNodeLabels,a=[];return e.forEachEdge(function(u,c,h,f){(h===t||f===t||n.has(h)||n.has(f)||o.has(h)&&o.has(f))&&a.push(u)}),a}var Av=150,Rv=50,sr=Object.prototype.hasOwnProperty;function yR(r,e,t){if(!sr.call(t,"x")||!sr.call(t,"y"))throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(e,'". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));return t.color||(t.color=r.defaultNodeColor),!t.label&&t.label!==""&&(t.label=null),t.label!==void 0&&t.label!==null?t.label=""+t.label:t.label=null,t.size||(t.size=2),sr.call(t,"hidden")||(t.hidden=!1),sr.call(t,"highlighted")||(t.highlighted=!1),sr.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultNodeType),t.zIndex||(t.zIndex=0),t}function xR(r,e,t){return t.color||(t.color=r.defaultEdgeColor),t.label||(t.label=""),t.size||(t.size=.5),sr.call(t,"hidden")||(t.hidden=!1),sr.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultEdgeType),t.zIndex||(t.zIndex=0),t}var SR=(function(r){function e(t,n){var o,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Nn(this,e),o=pi(this,e),Me(o,"elements",{}),Me(o,"canvasContexts",{}),Me(o,"webGLContexts",{}),Me(o,"pickingLayers",new Set),Me(o,"textures",{}),Me(o,"frameBuffers",{}),Me(o,"activeListeners",{}),Me(o,"labelGrid",new bv),Me(o,"nodeDataCache",{}),Me(o,"edgeDataCache",{}),Me(o,"nodeProgramIndex",{}),Me(o,"edgeProgramIndex",{}),Me(o,"nodesWithForcedLabels",new Set),Me(o,"edgesWithForcedLabels",new Set),Me(o,"nodeExtent",{x:[0,1],y:[0,1]}),Me(o,"nodeZExtent",[1/0,-1/0]),Me(o,"edgeZExtent",[1/0,-1/0]),Me(o,"matrix",bi()),Me(o,"invMatrix",bi()),Me(o,"correctionRatio",1),Me(o,"customBBox",null),Me(o,"normalizationFunction",Sv({x:[0,1],y:[0,1]})),Me(o,"graphToViewportRatio",1),Me(o,"itemIDsIndex",{}),Me(o,"nodeIndices",{}),Me(o,"edgeIndices",{}),Me(o,"width",0),Me(o,"height",0),Me(o,"pixelRatio",yv()),Me(o,"pickingDownSizingRatio",2*o.pixelRatio),Me(o,"displayedNodeLabels",new Set),Me(o,"displayedEdgeLabels",new Set),Me(o,"highlightedNodes",new Set),Me(o,"hoveredNode",null),Me(o,"hoveredEdge",null),Me(o,"renderFrame",null),Me(o,"renderHighlightedNodesFrame",null),Me(o,"needToProcess",!1),Me(o,"checkEdgesEventsFrame",null),Me(o,"nodePrograms",{}),Me(o,"nodeHoverPrograms",{}),Me(o,"edgePrograms",{}),o.settings=sR(a),ah(o.settings),tR(t),!(n instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");o.graph=t,o.container=n,o.createWebGLContext("edges",{picking:a.enableEdgeEvents}),o.createCanvasContext("edgeLabels"),o.createWebGLContext("nodes",{picking:!0}),o.createCanvasContext("labels"),o.createCanvasContext("hovers"),o.createWebGLContext("hoverNodes"),o.createCanvasContext("mouse",{style:{touchAction:"none",userSelect:"none"}}),o.resize();for(var u in o.settings.nodeProgramClasses)o.registerNodeProgram(u,o.settings.nodeProgramClasses[u],o.settings.nodeHoverProgramClasses[u]);for(var c in o.settings.edgeProgramClasses)o.registerEdgeProgram(c,o.settings.edgeProgramClasses[c]);return o.camera=new Mv,o.bindCameraHandlers(),o.mouseCaptor=new cR(o.elements.mouse,o),o.mouseCaptor.setSettings(o.settings),o.touchCaptor=new fR(o.elements.mouse,o),o.touchCaptor.setSettings(o.settings),o.bindEventHandlers(),o.bindGraphHandlers(),o.handleSettingsUpdate(),o.refresh(),o}return mi(e,r),In(e,[{key:"registerNodeProgram",value:function(n,o,a){return this.nodePrograms[n]&&this.nodePrograms[n].kill(),this.nodeHoverPrograms[n]&&this.nodeHoverPrograms[n].kill(),this.nodePrograms[n]=new o(this.webGLContexts.nodes,this.frameBuffers.nodes,this),this.nodeHoverPrograms[n]=new(a||o)(this.webGLContexts.hoverNodes,null,this),this}},{key:"registerEdgeProgram",value:function(n,o){return this.edgePrograms[n]&&this.edgePrograms[n].kill(),this.edgePrograms[n]=new o(this.webGLContexts.edges,this.frameBuffers.edges,this),this}},{key:"unregisterNodeProgram",value:function(n){if(this.nodePrograms[n]){var o=this.nodePrograms,a=o[n],u=lh(o,[n].map(_a));a.kill(),this.nodePrograms=u}if(this.nodeHoverPrograms[n]){var c=this.nodeHoverPrograms,h=c[n],f=lh(c,[n].map(_a));h.kill(),this.nodePrograms=f}return this}},{key:"unregisterEdgeProgram",value:function(n){if(this.edgePrograms[n]){var o=this.edgePrograms,a=o[n],u=lh(o,[n].map(_a));a.kill(),this.edgePrograms=u}return this}},{key:"resetWebGLTexture",value:function(n){var o=this.webGLContexts[n],a=this.frameBuffers[n],u=this.textures[n];u&&o.deleteTexture(u);var c=o.createTexture();return o.bindFramebuffer(o.FRAMEBUFFER,a),o.bindTexture(o.TEXTURE_2D,c),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,this.width,this.height,0,o.RGBA,o.UNSIGNED_BYTE,null),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,c,0),this.textures[n]=c,this}},{key:"bindCameraHandlers",value:function(){var n=this;return this.activeListeners.camera=function(){n.scheduleRender()},this.camera.on("updated",this.activeListeners.camera),this}},{key:"unbindCameraHandlers",value:function(){return this.camera.removeListener("updated",this.activeListeners.camera),this}},{key:"getNodeAtPosition",value:function(n){var o=n.x,a=n.y,u=lv(this.webGLContexts.nodes,this.frameBuffers.nodes,o,a,this.pixelRatio,this.pickingDownSizingRatio),c=av.apply(void 0,wv(u)),h=this.itemIDsIndex[c];return h&&h.type==="node"?h.id:null}},{key:"bindEventHandlers",value:function(){var n=this;this.activeListeners.handleResize=function(){n.scheduleRefresh()},window.addEventListener("resize",this.activeListeners.handleResize),this.activeListeners.handleMove=function(a){var u=pa(a),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}},h=n.getNodeAtPosition(u);if(h&&n.hoveredNode!==h&&!n.nodeDataCache[h].hidden){n.hoveredNode&&n.emit("leaveNode",Ze(Ze({},c),{},{node:n.hoveredNode})),n.hoveredNode=h,n.emit("enterNode",Ze(Ze({},c),{},{node:h})),n.scheduleHighlightedNodesRender();return}if(n.hoveredNode&&n.getNodeAtPosition(u)!==n.hoveredNode){var f=n.hoveredNode;n.hoveredNode=null,n.emit("leaveNode",Ze(Ze({},c),{},{node:f})),n.scheduleHighlightedNodesRender();return}if(n.settings.enableEdgeEvents){var m=n.hoveredNode?null:n.getEdgeAtPoint(c.event.x,c.event.y);m!==n.hoveredEdge&&(n.hoveredEdge&&n.emit("leaveEdge",Ze(Ze({},c),{},{edge:n.hoveredEdge})),m&&n.emit("enterEdge",Ze(Ze({},c),{},{edge:m})),n.hoveredEdge=m)}},this.activeListeners.handleMoveBody=function(a){var u=pa(a);n.emit("moveBody",{event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}})},this.activeListeners.handleLeave=function(a){var u=pa(a),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.hoveredNode&&(n.emit("leaveNode",Ze(Ze({},c),{},{node:n.hoveredNode})),n.scheduleHighlightedNodesRender()),n.settings.enableEdgeEvents&&n.hoveredEdge&&(n.emit("leaveEdge",Ze(Ze({},c),{},{edge:n.hoveredEdge})),n.scheduleHighlightedNodesRender()),n.emit("leaveStage",Ze({},c))},this.activeListeners.handleEnter=function(a){var u=pa(a),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.emit("enterStage",Ze({},c))};var o=function(u){return function(c){var h=pa(c),f={event:h,preventSigmaDefault:function(){h.preventSigmaDefault()}},m=n.getNodeAtPosition(h);if(m)return n.emit("".concat(u,"Node"),Ze(Ze({},f),{},{node:m}));if(n.settings.enableEdgeEvents){var g=n.getEdgeAtPoint(h.x,h.y);if(g)return n.emit("".concat(u,"Edge"),Ze(Ze({},f),{},{edge:g}))}return n.emit("".concat(u,"Stage"),f)}};return this.activeListeners.handleClick=o("click"),this.activeListeners.handleRightClick=o("rightClick"),this.activeListeners.handleDoubleClick=o("doubleClick"),this.activeListeners.handleWheel=o("wheel"),this.activeListeners.handleDown=o("down"),this.activeListeners.handleUp=o("up"),this.mouseCaptor.on("mousemove",this.activeListeners.handleMove),this.mouseCaptor.on("mousemovebody",this.activeListeners.handleMoveBody),this.mouseCaptor.on("click",this.activeListeners.handleClick),this.mouseCaptor.on("rightClick",this.activeListeners.handleRightClick),this.mouseCaptor.on("doubleClick",this.activeListeners.handleDoubleClick),this.mouseCaptor.on("wheel",this.activeListeners.handleWheel),this.mouseCaptor.on("mousedown",this.activeListeners.handleDown),this.mouseCaptor.on("mouseup",this.activeListeners.handleUp),this.mouseCaptor.on("mouseleave",this.activeListeners.handleLeave),this.mouseCaptor.on("mouseenter",this.activeListeners.handleEnter),this.touchCaptor.on("touchdown",this.activeListeners.handleDown),this.touchCaptor.on("touchdown",this.activeListeners.handleMove),this.touchCaptor.on("touchup",this.activeListeners.handleUp),this.touchCaptor.on("touchmove",this.activeListeners.handleMove),this.touchCaptor.on("tap",this.activeListeners.handleClick),this.touchCaptor.on("doubletap",this.activeListeners.handleDoubleClick),this.touchCaptor.on("touchmove",this.activeListeners.handleMoveBody),this}},{key:"bindGraphHandlers",value:function(){var n=this,o=this.graph,a=new Set(["x","y","zIndex","type"]);return this.activeListeners.eachNodeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachNode(function(m){return n.updateNode(m)});var f=!h||h.some(function(m){return a.has(m)});n.refresh({partialGraph:{nodes:o.nodes()},skipIndexation:!f,schedule:!0})},this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachEdge(function(m){return n.updateEdge(m)});var f=h&&["zIndex","type"].some(function(m){return h==null?void 0:h.includes(m)});n.refresh({partialGraph:{edges:o.edges()},skipIndexation:!f,schedule:!0})},this.activeListeners.addNodeGraphUpdate=function(u){var c=u.key;n.addNode(c),n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.updateNodeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropNodeGraphUpdate=function(u){var c=u.key;n.removeNode(c),n.refresh({schedule:!0})},this.activeListeners.addEdgeGraphUpdate=function(u){var c=u.key;n.addEdge(c),n.refresh({partialGraph:{edges:[c]},schedule:!0})},this.activeListeners.updateEdgeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{edges:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropEdgeGraphUpdate=function(u){var c=u.key;n.removeEdge(c),n.refresh({schedule:!0})},this.activeListeners.clearEdgesGraphUpdate=function(){n.clearEdgeState(),n.clearEdgeIndices(),n.refresh({schedule:!0})},this.activeListeners.clearGraphUpdate=function(){n.clearEdgeState(),n.clearNodeState(),n.clearEdgeIndices(),n.clearNodeIndices(),n.refresh({schedule:!0})},o.on("nodeAdded",this.activeListeners.addNodeGraphUpdate),o.on("nodeDropped",this.activeListeners.dropNodeGraphUpdate),o.on("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),o.on("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),o.on("edgeAdded",this.activeListeners.addEdgeGraphUpdate),o.on("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),o.on("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),o.on("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),o.on("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),o.on("cleared",this.activeListeners.clearGraphUpdate),this}},{key:"unbindGraphHandlers",value:function(){var n=this.graph;n.removeListener("nodeAdded",this.activeListeners.addNodeGraphUpdate),n.removeListener("nodeDropped",this.activeListeners.dropNodeGraphUpdate),n.removeListener("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),n.removeListener("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),n.removeListener("edgeAdded",this.activeListeners.addEdgeGraphUpdate),n.removeListener("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),n.removeListener("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),n.removeListener("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),n.removeListener("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),n.removeListener("cleared",this.activeListeners.clearGraphUpdate)}},{key:"getEdgeAtPoint",value:function(n,o){var a=lv(this.webGLContexts.edges,this.frameBuffers.edges,n,o,this.pixelRatio,this.pickingDownSizingRatio),u=av.apply(void 0,wv(a)),c=this.itemIDsIndex[u];return c&&c.type==="edge"?c.id:null}},{key:"process",value:function(){var n=this;this.emit("beforeProcess");var o=this.graph,a=this.settings,u=this.getDimensions();if(this.nodeExtent=eR(this.graph),!this.settings.autoRescale){var c=u.width,h=u.height,f=this.nodeExtent,m=f.x,g=f.y;this.nodeExtent={x:[(m[0]+m[1])/2-c/2,(m[0]+m[1])/2+c/2],y:[(g[0]+g[1])/2-h/2,(g[0]+g[1])/2+h/2]}}this.normalizationFunction=Sv(this.customBBox||this.nodeExtent);var v=new Mv,x=fa(v.getState(),u,this.getGraphDimensions(),this.getStagePadding());this.labelGrid.resizeAndClear(u,a.labelGridCellSize);for(var M={},w={},S={},y={},I=1,L=o.nodes(),T=0,P=L.length;T<P;T++){var N=L[T],D=this.nodeDataCache[N],B=o.getNodeAttributes(N);D.x=B.x,D.y=B.y,this.normalizationFunction.applyTo(D),typeof D.label=="string"&&!D.hidden&&this.labelGrid.add(N,D.size,this.framedGraphToViewport(D,{matrix:x})),M[D.type]=(M[D.type]||0)+1}this.labelGrid.organize();for(var C in this.nodePrograms){if(!sr.call(this.nodePrograms,C))throw new Error('Sigma: could not find a suitable program for node type "'.concat(C,'"!'));this.nodePrograms[C].reallocate(M[C]||0),M[C]=0}this.settings.zIndex&&this.nodeZExtent[0]!==this.nodeZExtent[1]&&(L=xv(this.nodeZExtent,function(ge){return n.nodeDataCache[ge].zIndex},L));for(var E=0,O=L.length;E<O;E++){var Z=L[E];w[Z]=I,y[w[Z]]={type:"node",id:Z},I++;var te=this.nodeDataCache[Z];this.addNodeToProgram(Z,w[Z],M[te.type]++)}for(var oe={},he=o.edges(),de=0,me=he.length;de<me;de++){var G=he[de],pe=this.edgeDataCache[G];oe[pe.type]=(oe[pe.type]||0)+1}this.settings.zIndex&&this.edgeZExtent[0]!==this.edgeZExtent[1]&&(he=xv(this.edgeZExtent,function(ge){return n.edgeDataCache[ge].zIndex},he));for(var le in this.edgePrograms){if(!sr.call(this.edgePrograms,le))throw new Error('Sigma: could not find a suitable program for edge type "'.concat(le,'"!'));this.edgePrograms[le].reallocate(oe[le]||0),oe[le]=0}for(var U=0,Y=he.length;U<Y;U++){var Ae=he[U];S[Ae]=I,y[S[Ae]]={type:"edge",id:Ae},I++;var W=this.edgeDataCache[Ae];this.addEdgeToProgram(Ae,S[Ae],oe[W.type]++)}return this.itemIDsIndex=y,this.nodeIndices=w,this.edgeIndices=S,this.emit("afterProcess"),this}},{key:"handleSettingsUpdate",value:function(n){var o=this,a=this.settings;if(this.camera.minRatio=a.minCameraRatio,this.camera.maxRatio=a.maxCameraRatio,this.camera.enabledZooming=a.enableCameraZooming,this.camera.enabledPanning=a.enableCameraPanning,this.camera.enabledRotation=a.enableCameraRotation,a.cameraPanBoundaries?this.camera.clean=function(m){return o.cleanCameraState(m,a.cameraPanBoundaries&&rf(a.cameraPanBoundaries)==="object"?a.cameraPanBoundaries:{})}:this.camera.clean=null,this.camera.setState(this.camera.validateState(this.camera.getState())),n){if(n.edgeProgramClasses!==a.edgeProgramClasses){for(var u in a.edgeProgramClasses)a.edgeProgramClasses[u]!==n.edgeProgramClasses[u]&&this.registerEdgeProgram(u,a.edgeProgramClasses[u]);for(var c in n.edgeProgramClasses)a.edgeProgramClasses[c]||this.unregisterEdgeProgram(c)}if(n.nodeProgramClasses!==a.nodeProgramClasses||n.nodeHoverProgramClasses!==a.nodeHoverProgramClasses){for(var h in a.nodeProgramClasses)(a.nodeProgramClasses[h]!==n.nodeProgramClasses[h]||a.nodeHoverProgramClasses[h]!==n.nodeHoverProgramClasses[h])&&this.registerNodeProgram(h,a.nodeProgramClasses[h],a.nodeHoverProgramClasses[h]);for(var f in n.nodeProgramClasses)a.nodeProgramClasses[f]||this.unregisterNodeProgram(f)}}return this.mouseCaptor.setSettings(this.settings),this.touchCaptor.setSettings(this.settings),this}},{key:"cleanCameraState",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.tolerance,u=a===void 0?0:a,c=o.boundaries,h=Ze({},n),f=c||this.nodeExtent,m=yo(f.x,2),g=m[0],v=m[1],x=yo(f.y,2),M=x[0],w=x[1],S=[this.graphToViewport({x:g,y:M},{cameraState:n}),this.graphToViewport({x:v,y:M},{cameraState:n}),this.graphToViewport({x:g,y:w},{cameraState:n}),this.graphToViewport({x:v,y:w},{cameraState:n})],y=1/0,I=-1/0,L=1/0,T=-1/0;S.forEach(function(oe){var he=oe.x,de=oe.y;y=Math.min(y,he),I=Math.max(I,he),L=Math.min(L,de),T=Math.max(T,de)});var P=I-y,N=T-L,D=this.getDimensions(),B=D.width,C=D.height,E=0,O=0;if(P>=B?I<B-u?E=I-(B-u):y>u&&(E=y-u):I>B+u?E=I-(B+u):y<-u&&(E=y+u),N>=C?T<C-u?O=T-(C-u):L>u&&(O=L-u):T>C+u?O=T-(C+u):L<-u&&(O=L+u),E||O){var Z=this.viewportToFramedGraph({x:0,y:0},{cameraState:n}),te=this.viewportToFramedGraph({x:E,y:O},{cameraState:n});E=te.x-Z.x,O=te.y-Z.y,h.x+=E,h.y+=O}return h}},{key:"renderLabels",value:function(){if(!this.settings.renderLabels)return this;var n=this.camera.getState(),o=this.labelGrid.getLabelsToDisplay(n.ratio,this.settings.labelDensity);Ev(o,this.nodesWithForcedLabels),this.displayedNodeLabels=new Set;for(var a=this.canvasContexts.labels,u=0,c=o.length;u<c;u++){var h=o[u],f=this.nodeDataCache[h];if(!this.displayedNodeLabels.has(h)&&!f.hidden){var m=this.framedGraphToViewport(f),g=m.x,v=m.y,x=this.scaleSize(f.size);if(!(!f.forceLabel&&x<this.settings.labelRenderedSizeThreshold)&&!(g<-Av||g>this.width+Av||v<-Rv||v>this.height+Rv)){this.displayedNodeLabels.add(h);var M=this.settings.defaultDrawNodeLabel,w=this.nodePrograms[f.type],S=(w==null?void 0:w.drawLabel)||M;S(a,Ze(Ze({key:h},f),{},{size:x,x:g,y:v}),this.settings)}}}return this}},{key:"renderEdgeLabels",value:function(){if(!this.settings.renderEdgeLabels)return this;var n=this.canvasContexts.edgeLabels;n.clearRect(0,0,this.width,this.height);var o=_R({graph:this.graph,hoveredNode:this.hoveredNode,displayedNodeLabels:this.displayedNodeLabels,highlightedNodes:this.highlightedNodes});Ev(o,this.edgesWithForcedLabels);for(var a=new Set,u=0,c=o.length;u<c;u++){var h=o[u],f=this.graph.extremities(h),m=this.nodeDataCache[f[0]],g=this.nodeDataCache[f[1]],v=this.edgeDataCache[h];if(!a.has(h)&&!(v.hidden||m.hidden||g.hidden)){var x=this.settings.defaultDrawEdgeLabel,M=this.edgePrograms[v.type],w=(M==null?void 0:M.drawLabel)||x;w(n,Ze(Ze({key:h},v),{},{size:this.scaleSize(v.size)}),Ze(Ze(Ze({key:f[0]},m),this.framedGraphToViewport(m)),{},{size:this.scaleSize(m.size)}),Ze(Ze(Ze({key:f[1]},g),this.framedGraphToViewport(g)),{},{size:this.scaleSize(g.size)}),this.settings),a.add(h)}}return this.displayedEdgeLabels=a,this}},{key:"renderHighlightedNodes",value:function(){var n=this,o=this.canvasContexts.hovers;o.clearRect(0,0,this.width,this.height);var a=function(x){var M=n.nodeDataCache[x],w=n.framedGraphToViewport(M),S=w.x,y=w.y,I=n.scaleSize(M.size),L=n.settings.defaultDrawNodeHover,T=n.nodePrograms[M.type],P=(T==null?void 0:T.drawHover)||L;P(o,Ze(Ze({key:x},M),{},{size:I,x:S,y}),n.settings)},u=[];this.hoveredNode&&!this.nodeDataCache[this.hoveredNode].hidden&&u.push(this.hoveredNode),this.highlightedNodes.forEach(function(v){v!==n.hoveredNode&&u.push(v)}),u.forEach(function(v){return a(v)});var c={};u.forEach(function(v){var x=n.nodeDataCache[v].type;c[x]=(c[x]||0)+1});for(var h in this.nodeHoverPrograms)this.nodeHoverPrograms[h].reallocate(c[h]||0),c[h]=0;u.forEach(function(v){var x=n.nodeDataCache[v];n.nodeHoverPrograms[x.type].process(0,c[x.type]++,x)}),this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);var f=this.getRenderParams();for(var m in this.nodeHoverPrograms){var g=this.nodeHoverPrograms[m];g.render(f)}}},{key:"scheduleHighlightedNodesRender",value:function(){var n=this;this.renderHighlightedNodesFrame||this.renderFrame||(this.renderHighlightedNodesFrame=requestAnimationFrame(function(){n.renderHighlightedNodesFrame=null,n.renderHighlightedNodes(),n.renderEdgeLabels()}))}},{key:"render",value:function(){var n=this;this.emit("beforeRender");var o=function(){return n.emit("afterRender"),n};if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),this.needToProcess&&this.process(),this.needToProcess=!1,this.clear(),this.pickingLayers.forEach(function(S){return n.resetWebGLTexture(S)}),!this.graph.order)return o();var a=this.mouseCaptor,u=this.camera.isAnimated()||a.isMoving||a.draggedEvents||a.currentWheelDirection,c=this.camera.getState(),h=this.getDimensions(),f=this.getGraphDimensions(),m=this.getStagePadding();this.matrix=fa(c,h,f,m),this.invMatrix=fa(c,h,f,m,!0),this.correctionRatio=JA(this.matrix,c,h),this.graphToViewportRatio=this.getGraphToViewportRatio();var g=this.getRenderParams();for(var v in this.nodePrograms){var x=this.nodePrograms[v];x.render(g)}if(!this.settings.hideEdgesOnMove||!u)for(var M in this.edgePrograms){var w=this.edgePrograms[M];w.render(g)}return this.settings.hideLabelsOnMove&&u||(this.renderLabels(),this.renderEdgeLabels(),this.renderHighlightedNodes()),o()}},{key:"addNode",value:function(n){var o=Object.assign({},this.graph.getNodeAttributes(n));this.settings.nodeReducer&&(o=this.settings.nodeReducer(n,o));var a=yR(this.settings,n,o);this.nodeDataCache[n]=a,this.nodesWithForcedLabels.delete(n),a.forceLabel&&!a.hidden&&this.nodesWithForcedLabels.add(n),this.highlightedNodes.delete(n),a.highlighted&&!a.hidden&&this.highlightedNodes.add(n),this.settings.zIndex&&(a.zIndex<this.nodeZExtent[0]&&(this.nodeZExtent[0]=a.zIndex),a.zIndex>this.nodeZExtent[1]&&(this.nodeZExtent[1]=a.zIndex))}},{key:"updateNode",value:function(n){this.addNode(n);var o=this.nodeDataCache[n];this.normalizationFunction.applyTo(o)}},{key:"removeNode",value:function(n){delete this.nodeDataCache[n],delete this.nodeProgramIndex[n],this.highlightedNodes.delete(n),this.hoveredNode===n&&(this.hoveredNode=null),this.nodesWithForcedLabels.delete(n)}},{key:"addEdge",value:function(n){var o=Object.assign({},this.graph.getEdgeAttributes(n));this.settings.edgeReducer&&(o=this.settings.edgeReducer(n,o));var a=xR(this.settings,n,o);this.edgeDataCache[n]=a,this.edgesWithForcedLabels.delete(n),a.forceLabel&&!a.hidden&&this.edgesWithForcedLabels.add(n),this.settings.zIndex&&(a.zIndex<this.edgeZExtent[0]&&(this.edgeZExtent[0]=a.zIndex),a.zIndex>this.edgeZExtent[1]&&(this.edgeZExtent[1]=a.zIndex))}},{key:"updateEdge",value:function(n){this.addEdge(n)}},{key:"removeEdge",value:function(n){delete this.edgeDataCache[n],delete this.edgeProgramIndex[n],this.hoveredEdge===n&&(this.hoveredEdge=null),this.edgesWithForcedLabels.delete(n)}},{key:"clearNodeIndices",value:function(){this.labelGrid=new bv,this.nodeExtent={x:[0,1],y:[0,1]},this.nodeDataCache={},this.edgeProgramIndex={},this.nodesWithForcedLabels=new Set,this.nodeZExtent=[1/0,-1/0],this.highlightedNodes=new Set}},{key:"clearEdgeIndices",value:function(){this.edgeDataCache={},this.edgeProgramIndex={},this.edgesWithForcedLabels=new Set,this.edgeZExtent=[1/0,-1/0]}},{key:"clearIndices",value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:"clearNodeState",value:function(){this.displayedNodeLabels=new Set,this.highlightedNodes=new Set,this.hoveredNode=null}},{key:"clearEdgeState",value:function(){this.displayedEdgeLabels=new Set,this.highlightedNodes=new Set,this.hoveredEdge=null}},{key:"clearState",value:function(){this.clearEdgeState(),this.clearNodeState()}},{key:"addNodeToProgram",value:function(n,o,a){var u=this.nodeDataCache[n],c=this.nodePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for node type "'.concat(u.type,'"!'));c.process(o,a,u),this.nodeProgramIndex[n]=a}},{key:"addEdgeToProgram",value:function(n,o,a){var u=this.edgeDataCache[n],c=this.edgePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for edge type "'.concat(u.type,'"!'));var h=this.graph.extremities(n),f=this.nodeDataCache[h[0]],m=this.nodeDataCache[h[1]];c.process(o,a,f,m,u),this.edgeProgramIndex[n]=a}},{key:"getRenderParams",value:function(){return{matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.pickingDownSizingRatio,minEdgeThickness:this.settings.minEdgeThickness,antiAliasingFeather:this.settings.antiAliasingFeather}}},{key:"getStagePadding",value:function(){var n=this.settings,o=n.stagePadding,a=n.autoRescale;return a&&o||0}},{key:"createLayer",value:function(n,o){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.elements[n])throw new Error('Sigma: a layer named "'.concat(n,'" already exists'));var u=nR(o,{position:"absolute"},{class:"sigma-".concat(n)});return a.style&&Object.assign(u.style,a.style),this.elements[n]=u,"beforeLayer"in a&&a.beforeLayer?this.elements[a.beforeLayer].before(u):"afterLayer"in a&&a.afterLayer?this.elements[a.afterLayer].after(u):this.container.appendChild(u),u}},{key:"createCanvas",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(n,"canvas",o)}},{key:"createCanvasContext",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.createCanvas(n,o),u={preserveDrawingBuffer:!1,antialias:!1};return this.canvasContexts[n]=a.getContext("2d",u),this}},{key:"createWebGLContext",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(o==null?void 0:o.canvas)||this.createCanvas(n,o);o.hidden&&a.remove();var u=Ze({preserveDrawingBuffer:!1,antialias:!1},o),c;c=a.getContext("webgl2",u),c||(c=a.getContext("webgl",u)),c||(c=a.getContext("experimental-webgl",u));var h=c;if(this.webGLContexts[n]=h,h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA),o.picking){this.pickingLayers.add(n);var f=h.createFramebuffer();if(!f)throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(n));this.frameBuffers[n]=f}return h}},{key:"killLayer",value:function(n){var o=this.elements[n];if(!o)throw new Error("Sigma: cannot kill layer ".concat(n,", which does not exist"));if(this.webGLContexts[n]){var a,u=this.webGLContexts[n];(a=u.getExtension("WEBGL_lose_context"))===null||a===void 0||a.loseContext(),delete this.webGLContexts[n]}else this.canvasContexts[n]&&delete this.canvasContexts[n];return o.remove(),delete this.elements[n],this}},{key:"getCamera",value:function(){return this.camera}},{key:"setCamera",value:function(n){this.unbindCameraHandlers(),this.camera=n,this.bindCameraHandlers()}},{key:"getContainer",value:function(){return this.container}},{key:"getGraph",value:function(){return this.graph}},{key:"setGraph",value:function(n){n!==this.graph&&(this.hoveredNode&&!n.hasNode(this.hoveredNode)&&(this.hoveredNode=null),this.hoveredEdge&&!n.hasEdge(this.hoveredEdge)&&(this.hoveredEdge=null),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.graph=n,this.bindGraphHandlers(),this.refresh())}},{key:"getMouseCaptor",value:function(){return this.mouseCaptor}},{key:"getTouchCaptor",value:function(){return this.touchCaptor}},{key:"getDimensions",value:function(){return{width:this.width,height:this.height}}},{key:"getGraphDimensions",value:function(){var n=this.customBBox||this.nodeExtent;return{width:n.x[1]-n.x[0]||1,height:n.y[1]-n.y[0]||1}}},{key:"getNodeDisplayData",value:function(n){var o=this.nodeDataCache[n];return o?Object.assign({},o):void 0}},{key:"getEdgeDisplayData",value:function(n){var o=this.edgeDataCache[n];return o?Object.assign({},o):void 0}},{key:"getNodeDisplayedLabels",value:function(){return new Set(this.displayedNodeLabels)}},{key:"getEdgeDisplayedLabels",value:function(){return new Set(this.displayedEdgeLabels)}},{key:"getSettings",value:function(){return Ze({},this.settings)}},{key:"getSetting",value:function(n){return this.settings[n]}},{key:"setSetting",value:function(n,o){var a=Ze({},this.settings);return this.settings[n]=o,ah(this.settings),this.handleSettingsUpdate(a),this.scheduleRefresh(),this}},{key:"updateSetting",value:function(n,o){return this.setSetting(n,o(this.settings[n])),this}},{key:"setSettings",value:function(n){var o=Ze({},this.settings);return this.settings=Ze(Ze({},this.settings),n),ah(this.settings),this.handleSettingsUpdate(o),this.scheduleRefresh(),this}},{key:"resize",value:function(n){var o=this.width,a=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.pixelRatio=yv(),this.width===0)if(this.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!n&&o===this.width&&a===this.height)return this;for(var u in this.elements){var c=this.elements[u];c.style.width=this.width+"px",c.style.height=this.height+"px"}for(var h in this.canvasContexts)this.elements[h].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[h].setAttribute("height",this.height*this.pixelRatio+"px"),this.pixelRatio!==1&&this.canvasContexts[h].scale(this.pixelRatio,this.pixelRatio);for(var f in this.webGLContexts){this.elements[f].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[f].setAttribute("height",this.height*this.pixelRatio+"px");var m=this.webGLContexts[f];if(m.viewport(0,0,this.width*this.pixelRatio,this.height*this.pixelRatio),this.pickingLayers.has(f)){var g=this.textures[f];g&&m.deleteTexture(g)}}return this.emit("resize"),this}},{key:"clear",value:function(){return this.emit("beforeClear"),this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.canvasContexts.labels.clearRect(0,0,this.width,this.height),this.canvasContexts.hovers.clearRect(0,0,this.width,this.height),this.canvasContexts.edgeLabels.clearRect(0,0,this.width,this.height),this.emit("afterClear"),this}},{key:"refresh",value:function(n){var o=this,a=(n==null?void 0:n.skipIndexation)!==void 0?n==null?void 0:n.skipIndexation:!1,u=(n==null?void 0:n.schedule)!==void 0?n.schedule:!1,c=!n||!n.partialGraph;if(c)this.clearEdgeIndices(),this.clearNodeIndices(),this.graph.forEachNode(function(T){return o.addNode(T)}),this.graph.forEachEdge(function(T){return o.addEdge(T)});else{for(var h,f,m=((h=n.partialGraph)===null||h===void 0?void 0:h.nodes)||[],g=0,v=(m==null?void 0:m.length)||0;g<v;g++){var x=m[g];if(this.updateNode(x),a){var M=this.nodeProgramIndex[x];if(M===void 0)throw new Error('Sigma: node "'.concat(x,`" can't be repaint`));this.addNodeToProgram(x,this.nodeIndices[x],M)}}for(var w=(n==null||(f=n.partialGraph)===null||f===void 0?void 0:f.edges)||[],S=0,y=w.length;S<y;S++){var I=w[S];if(this.updateEdge(I),a){var L=this.edgeProgramIndex[I];if(L===void 0)throw new Error('Sigma: edge "'.concat(I,`" can't be repaint`));this.addEdgeToProgram(I,this.edgeIndices[I],L)}}}return(c||!a)&&(this.needToProcess=!0),u?this.scheduleRender():this.render(),this}},{key:"scheduleRender",value:function(){var n=this;return this.renderFrame||(this.renderFrame=requestAnimationFrame(function(){n.render()})),this}},{key:"scheduleRefresh",value:function(n){return this.refresh(Ze(Ze({},n),{},{schedule:!0}))}},{key:"getViewportZoomedState",value:function(n,o){var a=this.camera.getState(),u=a.ratio,c=a.angle,h=a.x,f=a.y,m=this.settings,g=m.minCameraRatio,v=m.maxCameraRatio;typeof v=="number"&&(o=Math.min(o,v)),typeof g=="number"&&(o=Math.max(o,g));var x=o/u,M={x:this.width/2,y:this.height/2},w=this.viewportToFramedGraph(n),S=this.viewportToFramedGraph(M);return{angle:c,x:(w.x-S.x)*(1-x)+h,y:(w.y-S.y)*(1-x)+f,ratio:o}}},{key:"viewRectangle",value:function(){var n=this.viewportToFramedGraph({x:0,y:0}),o=this.viewportToFramedGraph({x:this.width,y:0}),a=this.viewportToFramedGraph({x:0,y:this.height});return{x1:n.x,y1:n.y,x2:o.x,y2:o.y,height:o.y-a.y}}},{key:"framedGraphToViewport",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=!!o.cameraState||!!o.viewportDimensions||!!o.graphDimensions,u=o.matrix?o.matrix:a?fa(o.cameraState||this.camera.getState(),o.viewportDimensions||this.getDimensions(),o.graphDimensions||this.getGraphDimensions(),o.padding||this.getStagePadding()):this.matrix,c=nf(u,n);return{x:(1+c.x)*this.width/2,y:(1-c.y)*this.height/2}}},{key:"viewportToFramedGraph",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=!!o.cameraState||!!o.viewportDimensions||!o.graphDimensions,u=o.matrix?o.matrix:a?fa(o.cameraState||this.camera.getState(),o.viewportDimensions||this.getDimensions(),o.graphDimensions||this.getGraphDimensions(),o.padding||this.getStagePadding(),!0):this.invMatrix,c=nf(u,{x:n.x/this.width*2-1,y:1-n.y/this.height*2});return isNaN(c.x)&&(c.x=0),isNaN(c.y)&&(c.y=0),c}},{key:"viewportToGraph",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(n,o))}},{key:"graphToViewport",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(n),o)}},{key:"getGraphToViewportRatio",value:function(){var n={x:0,y:0},o={x:1,y:1},a=Math.sqrt(Math.pow(n.x-o.x,2)+Math.pow(n.y-o.y,2)),u=this.graphToViewport(n),c=this.graphToViewport(o),h=Math.sqrt(Math.pow(u.x-c.x,2)+Math.pow(u.y-c.y,2));return h/a}},{key:"getBBox",value:function(){return this.nodeExtent}},{key:"getCustomBBox",value:function(){return this.customBBox}},{key:"setCustomBBox",value:function(n){return this.customBBox=n,this.scheduleRender(),this}},{key:"kill",value:function(){this.emit("kill"),this.removeAllListeners(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.nodeDataCache={},this.edgeDataCache={},this.highlightedNodes.clear(),this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.renderHighlightedNodesFrame&&(cancelAnimationFrame(this.renderHighlightedNodesFrame),this.renderHighlightedNodesFrame=null);for(var n=this.container;n.firstChild;)n.removeChild(n.firstChild);for(var o in this.nodePrograms)this.nodePrograms[o].kill();for(var a in this.nodeHoverPrograms)this.nodeHoverPrograms[a].kill();for(var u in this.edgePrograms)this.edgePrograms[u].kill();this.nodePrograms={},this.nodeHoverPrograms={},this.edgePrograms={};for(var c in this.elements)this.killLayer(c);this.canvasContexts={},this.webGLContexts={},this.elements={}}},{key:"scaleSize",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return n/this.settings.zoomToSizeRatioFunction(o)*(this.getSetting("itemSizesReference")==="positions"?o*this.graphToViewportRatio:1)}},{key:"getCanvases",value:function(){var n={};for(var o in this.elements)this.elements[o]instanceof HTMLCanvasElement&&(n[o]=this.elements[o]);return n}}])})(Mf),ER=SR;const Cv=["#e8aa55","#c96f32","#a4d06f","#5da271","#4a7ea8","#b7678f","#d7c35f"];function MR(r){let e=0;for(const t of r)e=e*33+t.charCodeAt(0)>>>0;return Cv[e%Cv.length]}function wR({payload:r,mode:e,currentTurnNodeIds:t,selectedNodeId:n,selectedAssembly:o,onSelectNode:a}){const u=ht.useRef(null),c=ht.useRef(null),[h,f]=ht.useState(null),m=ht.useMemo(()=>{var v;const g=new Map;for(const x of r.cluster_summaries??[]){const M=(v=x.top_meme_ids)==null?void 0:v[0];M&&g.set(M,x.display_label)}return g},[r.cluster_summaries]);return ht.useEffect(()=>{var v,x;if(!u.current)return;f(null);let g=null;try{const M=new Ot,w=new Set(t),S=new Set((o==null?void 0:o.member_meme_ids)??[]),y=new Set((o==null?void 0:o.supporting_edge_ids)??[]),I=e==="Semantic Map"||e==="Assemblies"||e==="Active Set"||e==="Compare",L=I?r.semantic_nodes:r.runtime_nodes,T=I?r.semantic_edges:r.runtime_edges;for(const P of L){const N=((v=P.render_coords)==null?void 0:v.force)??((x=P.derived_coords)==null?void 0:x.spectral)??{x:0,y:0},D=w.has(P.id)||n===P.id||S.has(P.id),B=m.has(P.id),C=Number(P.degree??0)>=3;let E="";e==="Semantic Map"&&B&&(E=m.get(P.id)??""),!E&&(D||C)&&(E=String(P.label??P.id)),M.addNode(P.id,{x:Number(N.x??0),y:Number(N.y??0),size:D?10:6,label:E,color:S.has(P.id)?"#fff0a8":w.has(P.id)?"#ffcb73":MR(String(P.cluster_signature??P.kind??P.id))})}for(const P of T)!M.hasNode(P.source)||!M.hasNode(P.target)||M.addEdge(P.source,P.target,{size:y.has(P.id)?2.5:1.1,color:y.has(P.id)?"#fff0a8":"rgba(233, 177, 90, 0.38)",label:o&&y.has(P.id)?String(P.type??""):""});g=new ER(M,u.current,{renderEdgeLabels:!!o,labelRenderedSizeThreshold:7,labelDensity:.08,allowInvalidContainer:!0}),c.current=g,g.on("clickNode",({node:P,event:N})=>{var B;const D=!!((B=N.original)!=null&&B.shiftKey);a(String(P),D)}),g.on("clickStage",()=>a("",!1)),g.getCamera().animatedReset({duration:250})}catch(M){u.current.innerHTML="",f(M instanceof Error?M.message:"Graph renderer unavailable.")}return()=>{g==null||g.kill(),c.current=null}},[r,e,t,n,o,a,m]),h?ne.jsxs("div",{className:"empty-state","data-testid":"graph-canvas-fallback",role:"note",children:[ne.jsx("h2",{children:"Graph renderer unavailable"}),ne.jsx("p",{children:h}),ne.jsx("p",{children:"Use Graph Entities, Relations, and inspector cards to keep read paths truthful."})]},"graph-fallback"):ne.jsx("div",{"aria-label":"Graph canvas",className:"graph-panel","data-testid":"graph-canvas",ref:u,role:"region"},"graph-canvas")}const Pv=["overview","graph","basin","geometry","measurements"],gu="Semantic Map",vu="hulls",uh="flat",va=12,TR=["overview","measurements","basin"],H_=["overview","measurements","basin","graph","geometry","transcript","runtimeStatus","runtimeModel"],bR={graph:null,basin:null,overview:null,measurements:null,geometry:null,transcript:null,runtimeStatus:null,runtimeModel:null,liveEnabled:!1,staleBuildWarning:null},sf={overview:{label:"Overview",detail:"Index summary and artifact counts",status:"idle",source:"none"},measurements:{label:"Measurements",detail:"Measurement ledger and attribution counts",status:"idle",source:"none"},basin:{label:"Basin",detail:"Trajectory summary and attractor metadata",status:"idle",source:"none"},graph:{label:"Graph",detail:"Large semantic graph bundle",status:"idle",source:"none"},geometry:{label:"Geometry",detail:"Large diagnostics bundle",status:"idle",source:"none"},transcript:{label:"Transcript",detail:"Turn history and active-set cross-links",status:"idle",source:"none"},runtimeStatus:{label:"Runtime status",detail:"Live backend status",status:"idle",source:"none"},runtimeModel:{label:"Runtime model",detail:"Live model metadata",status:"idle",source:"none"}};function AR(r){return r==="overview"?"Overview":r==="graph"?"Graph":r==="basin"?"Basin":r==="geometry"?"Geometry":"Measurements"}async function zi(r){const e=await fetch(r,{credentials:"same-origin"});if(!e.ok)throw new Error(`${e.status} ${e.statusText} for ${r}`);return await e.json()}function RR(r,e,t){var o,a,u;if(!t||!((o=e==null?void 0:e.turns)!=null&&o.length))return((u=(a=r==null?void 0:r.active_set_slices)==null?void 0:a.at(-1))==null?void 0:u.node_ids)??[];const n=e.turns.find(c=>c.turn_id===t);return(n==null?void 0:n.active_set_node_ids)??[]}function CR({bootstrap:r,graph:e,surface:t}){const n=r.experiment_id??"unknown",o=r.export_manifest_id??(e==null?void 0:e.export_manifest_id)??r.source_graph_hash??(e==null?void 0:e.source_graph_hash)??"live";return`eden.observatory.view_presets.v1::${n}::${t}::${o}`}function oo(r){return`badge badge-${r}`}function $n({items:r}){return ne.jsx("dl",{className:"metric-list",children:r.map(([e,t])=>ne.jsxs("div",{className:"metric-row",children:[ne.jsx("dt",{children:e}),ne.jsx("dd",{children:PR(t)})]},e))})}function PR(r){return r==null||r===""?"—":Array.isArray(r)?r.join(", "):typeof r=="object"?JSON.stringify(r):String(r)}function _u(r,e=va){return{items:r.slice(0,e),capped:r.length>e,total:r.length}}function lo(r){return String((r==null?void 0:r.label)??(r==null?void 0:r.id)??"unknown node")}function yu(r,e){const t=lo(e.get(r==null?void 0:r.source)??{id:r==null?void 0:r.source}),n=lo(e.get(r==null?void 0:r.target)??{id:r==null?void 0:r.target});return`${String((r==null?void 0:r.type)??"EDGE")}: ${t} -> ${n}`}function LR(r,e){const t=structuredClone(sf);for(const n of H_)r[n]&&(t[n].source=e?"live_api":"static_export",t[n].status=TR.includes(n)?"loading":n==="geometry"?"deferred":"idle");return t}function DR(r){return`payload-chip payload-${r}`}function Lv(r){return r==="live_api"?"live API":r==="static_export"?"static export":"unavailable"}function un({title:r,children:e}){return ne.jsxs("section",{className:"inspector-card",children:[ne.jsx("h3",{children:r}),e]})}function NR({bootstrap:r}){const e=Pv.includes(r.initial_surface??"overview")?r.initial_surface:"overview",[t,n]=ht.useState(e),[o,a]=ht.useState(gu),[u,c]=ht.useState(vu),[h,f]=ht.useState(uh),[m,g]=ht.useState("cards"),[v,x]=ht.useState([]),[M,w]=ht.useState(null),[S,y]=ht.useState(null),[I,L]=ht.useState(null),[T,P]=ht.useState(null),[N,D]=ht.useState(!0),[B,C]=ht.useState(null),[E,O]=ht.useState(bR),[Z,te]=ht.useState(null),[oe,he]=ht.useState(sf),de=ht.useMemo(()=>CR({bootstrap:r,graph:E.graph,surface:t}),[r,E.graph,t]),me=v[0]??null,G=ht.useMemo(()=>{var k,se;return new Map([...((k=E.graph)==null?void 0:k.semantic_nodes)??[],...((se=E.graph)==null?void 0:se.runtime_nodes)??[]].map(K=>[String(K.id),K]))},[E.graph]),pe=ht.useMemo(()=>{var k,se,K;return(se=(k=E.graph)==null?void 0:k.semantic_nodes)!=null&&se.length?E.graph.semantic_nodes:((K=E.graph)==null?void 0:K.runtime_nodes)??[]},[E.graph]),le=ht.useMemo(()=>{var k,se,K;return(se=(k=E.graph)==null?void 0:k.semantic_edges)!=null&&se.length?E.graph.semantic_edges:((K=E.graph)==null?void 0:K.runtime_edges)??[]},[E.graph]),U=ht.useMemo(()=>le.find(k=>k.id===M)??null,[le,M]),Y=ht.useMemo(()=>{var k,se;return((se=(k=E.graph)==null?void 0:k.assemblies)==null?void 0:se.find(K=>K.id===S))??null},[E.graph,S]),Ae=ht.useMemo(()=>{var se,K,xe;return[...((se=E.graph)==null?void 0:se.semantic_nodes)??[],...((K=E.graph)==null?void 0:K.runtime_nodes)??[],...((xe=E.graph)==null?void 0:xe.assemblies)??[]].find(ee=>ee.id===me)??null},[E.graph,me]),W=ht.useMemo(()=>{var se,K,xe,ee;const k=(K=(se=E.basin)==null?void 0:se.turns)==null?void 0:K.find(He=>He.turn_id===I);return k||(((ee=(xe=E.transcript)==null?void 0:xe.turns)==null?void 0:ee[0])??null)},[E.basin,E.transcript,I]),ge=ht.useMemo(()=>RR(E.graph,E.transcript,(W==null?void 0:W.turn_id)??null),[E.graph,E.transcript,W]),ye=U?G.get(String(U.source))??null:null,_e=U?G.get(String(U.target))??null:null,Pe=ht.useMemo(()=>_u(pe),[pe]),Qe=ht.useMemo(()=>_u(le),[le]),We=ht.useMemo(()=>{var k;return _u(((k=E.basin)==null?void 0:k.turns)??[])},[E.basin]),It=ht.useMemo(()=>{var k;return _u(((k=E.graph)==null?void 0:k.assemblies)??[])},[E.graph]);ht.useEffect(()=>{let k=gu,se=vu,K=uh;try{const xe=window.localStorage.getItem(de);if(xe){const ee=JSON.parse(xe);k=ee.graphMode??gu,se=ee.assemblyRenderMode??vu,K=ee.liftMode??uh}}catch{}a(k),c(se),f(K),P(de)},[de]),ht.useEffect(()=>{if(T!==de)return;const k=JSON.stringify({graphMode:o,assemblyRenderMode:u,liftMode:h});window.localStorage.setItem(de,k)},[u,o,h,T,de]),ht.useEffect(()=>{let k=!1;async function se(){var K,xe,ee,He,Xe,Se,Ie,Ke,et,Ue,dt,it,ft,j,Le,fe;D(!0),C(null),he(sf);try{const ve=(K=r.live_api)==null?void 0:K.status;let De=!1,Ne=null;if(ve)try{const pt=await zi(ve);De=!0,(ee=(xe=pt.status)==null?void 0:xe.frontend_build)!=null&&ee.warning&&(Ne=pt.status.frontend_build.reason??"stale frontend build")}catch{De=!1}const ut=De?{graph:(He=r.live_api)==null?void 0:He.graph,basin:(Xe=r.live_api)==null?void 0:Xe.basin,overview:(Se=r.live_api)==null?void 0:Se.overview,measurements:(Ie=r.live_api)==null?void 0:Ie.measurements,geometry:(Ke=r.live_api)==null?void 0:Ke.geometry,transcript:(et=r.live_api)==null?void 0:et.session_turns,runtimeStatus:(Ue=r.live_api)==null?void 0:Ue.runtime_status,runtimeModel:(dt=r.live_api)==null?void 0:dt.runtime_model}:{graph:(it=r.payload_urls)==null?void 0:it.graph,basin:(ft=r.payload_urls)==null?void 0:ft.basin,overview:(j=r.payload_urls)==null?void 0:j.overview,measurements:(Le=r.payload_urls)==null?void 0:Le.measurements,geometry:(fe=r.payload_urls)==null?void 0:fe.geometry,transcript:void 0,runtimeStatus:void 0,runtimeModel:void 0},vt={...ut,liveEnabled:De,staleBuildWarning:Ne};k||(te(vt),he(LR(ut,De)),O(pt=>({...pt,liveEnabled:De,staleBuildWarning:Ne})));const zt=async(pt,Gt,Mn)=>{if(k)return null;he($t=>({...$t,[pt]:{...$t[pt],status:"loading",error:void 0}}));try{const $t=await zi(Gt);return k?null:(ht.startTransition(()=>{Mn($t)}),he(zn=>({...zn,[pt]:{...zn[pt],status:"ready"}})),$t)}catch($t){if(k)return null;const zn=$t instanceof Error?$t.message:`Failed to load ${pt}.`;throw he(Di=>({...Di,[pt]:{...Di[pt],status:"error",error:zn}})),$t}},Et=[];vt.overview&&Et.push(zt("overview",vt.overview,pt=>O(Gt=>({...Gt,overview:pt})))),vt.measurements&&Et.push(zt("measurements",vt.measurements,pt=>O(Gt=>({...Gt,measurements:pt})))),vt.basin&&Et.push(zt("basin",vt.basin,pt=>{var Mn;const Gt=pt;O($t=>({...$t,basin:Gt})),!I&&((Mn=Gt.turns)!=null&&Mn.length)&&L(Gt.turns[0].turn_id)})),await Promise.allSettled(Et),k||D(!1);const nn=[];vt.graph&&nn.push(zt("graph",vt.graph,pt=>{var Mn;const Gt=pt;O($t=>({...$t,graph:Gt})),!S&&((Mn=Gt.assemblies)!=null&&Mn.length)&&y(Gt.assemblies[0].id)})),vt.transcript&&nn.push(zt("transcript",vt.transcript,pt=>O(Gt=>({...Gt,transcript:pt})))),vt.runtimeStatus&&nn.push(zt("runtimeStatus",vt.runtimeStatus,pt=>O(Gt=>({...Gt,runtimeStatus:pt})))),vt.runtimeModel&&nn.push(zt("runtimeModel",vt.runtimeModel,pt=>O(Gt=>({...Gt,runtimeModel:pt})))),Promise.allSettled(nn)}catch(ve){k||(C(ve instanceof Error?ve.message:"Failed to load observatory payloads."),D(!1))}}return se(),()=>{k=!0}},[r]),ht.useEffect(()=>{var K;if(!E.liveEnabled||!((K=r.live_api)!=null&&K.events))return;const k=new URL(r.live_api.events,window.location.href);r.session_id&&k.searchParams.set("session_id",r.session_id);const se=new EventSource(k.toString());return se.addEventListener("observatory.invalidate",()=>{ht.startTransition(()=>{O(xe=>({...xe}))})}),se.addEventListener("observatory.invalidate",async()=>{var xe,ee,He,Xe,Se,Ie,Ke;try{const[et,Ue,dt,it,ft,j,Le]=await Promise.all([(xe=r.live_api)!=null&&xe.graph?zi(r.live_api.graph):Promise.resolve(null),(ee=r.live_api)!=null&&ee.basin?zi(r.live_api.basin):Promise.resolve(null),(He=r.live_api)!=null&&He.overview?zi(r.live_api.overview):Promise.resolve(null),(Xe=r.live_api)!=null&&Xe.measurements?zi(r.live_api.measurements):Promise.resolve(null),(Se=r.live_api)!=null&&Se.session_turns?zi(r.live_api.session_turns):Promise.resolve(null),(Ie=r.live_api)!=null&&Ie.runtime_status?zi(r.live_api.runtime_status):Promise.resolve(null),(Ke=r.live_api)!=null&&Ke.runtime_model?zi(r.live_api.runtime_model):Promise.resolve(null)]);O(fe=>({...fe,graph:et,basin:Ue,overview:dt,measurements:it,transcript:ft,runtimeStatus:j,runtimeModel:Le}))}catch{}}),()=>{se.close()}},[r.live_api,r.session_id,E.liveEnabled]),ht.useEffect(()=>{if(t!=="geometry"||E.geometry||!(Z!=null&&Z.geometry))return;let k=!1;const se=Z.geometry;return he(K=>({...K,geometry:{...K.geometry,status:"loading",source:Z.liveEnabled?"live_api":"static_export",error:void 0}})),zi(se).then(K=>{k||(O(xe=>({...xe,geometry:K})),he(xe=>({...xe,geometry:{...xe.geometry,status:"ready"}})))}).catch(K=>{if(k)return;const xe=K instanceof Error?K.message:"Failed to load geometry payload.";he(ee=>({...ee,geometry:{...ee.geometry,status:"error",error:xe}}))}),()=>{k=!0}},[E.geometry,Z,t]);function Ut(k,se){if(w(null),!k){x([]);return}x(K=>se?K.includes(k)?K.filter(xe=>xe!==k):[...K,k]:[k])}function gt(k){y(k),w(null),x([])}function H(k){w(k),x([])}function on(k){L(k),y(null),w(null),x([])}function St(k){x([k]),w(null)}function yt(){var K,xe,ee,He,Xe,Se,Ie,Ke,et,Ue;const k=((K=E.overview)==null?void 0:K.graph_counts)??((xe=E.graph)==null?void 0:xe.counts)??{},se=((ee=E.measurements)==null?void 0:ee.counts)??{};return ne.jsxs("div",{className:"overview-grid",children:[ne.jsx(un,{title:"Identity",children:ne.jsx($n,{items:[["Experiment",r.experiment_id],["Session",r.session_id],["Mode",E.liveEnabled?"Live API":"Static export"],["Render","Layout/render != evidence"]]})}),ne.jsx(un,{title:"Graph",children:ne.jsx($n,{items:[["Payload",oe.graph.status],["Source",Lv(oe.graph.source)],["Assemblies",(Xe=(He=E.graph)==null?void 0:He.assemblies)==null?void 0:Xe.length],["Clusters",(Ie=(Se=E.graph)==null?void 0:Se.cluster_summaries)==null?void 0:Ie.length],...Object.entries(k)]})}),ne.jsx(un,{title:"Basin",children:ne.jsx($n,{items:[["Payload",oe.basin.status],["Projection",((Ke=E.basin)==null?void 0:Ke.projection_method)??r.projection_method],["Filtered turns",(et=E.basin)==null?void 0:et.filtered_turn_count],["Source turns",(Ue=E.basin)==null?void 0:Ue.source_turn_count],["Derived","SVD projection + lift mode"]]})}),ne.jsx(un,{title:"Measurements",children:ne.jsx($n,{items:[["Payload",oe.measurements.status],...Object.entries(se)]})})]})}function tt(){const k=H_.filter(xe=>oe[xe].source!=="none").map(xe=>[xe,oe[xe]]);if(!k.length)return null;const se=k.filter(([,xe])=>xe.status==="loading").length,K=k.filter(([,xe])=>xe.status==="deferred").length;return ne.jsxs("section",{className:"status-panel",children:[ne.jsxs("div",{className:"status-panel-copy",children:[ne.jsx("strong",{children:N?"Loading observatory payloads":se?"Background payload activity":"Payload status"}),ne.jsx("span",{children:E.liveEnabled?"Live mode prefers API payloads and refresh invalidations.":"Static export mode reads adjacent JSON artifacts; large graph and geometry bundles can take noticeable time."}),ne.jsx("span",{children:se?`${se} payload${se===1?"":"s"} still loading.`:K?`${K} payload${K===1?"":"s"} deferred until needed.`:"All requested payloads are ready."})]}),ne.jsx("div",{className:"payload-grid",children:k.map(([xe,ee])=>ne.jsxs("div",{className:"payload-card",children:[ne.jsxs("div",{className:"payload-card-header",children:[ne.jsx("strong",{children:ee.label}),ne.jsx("span",{className:DR(ee.status),children:ee.status})]}),ne.jsx("p",{children:ee.detail}),ne.jsx("small",{children:Lv(ee.source)}),ee.error?ne.jsx("small",{className:"payload-error",children:ee.error}):null]},xe))})]})}function Nt(){var K,xe;const k=((K=E.graph)==null?void 0:K.graph_modes)??[gu],se=((xe=E.graph)==null?void 0:xe.assembly_render_modes)??[vu];return ne.jsxs("div",{className:"toolbar",children:[ne.jsx("div",{className:"toolbar-group",children:k.map(ee=>ne.jsx("button",{className:ee===o?"toolbar-button is-active":"toolbar-button",onClick:()=>a(ee),type:"button",children:ee},ee))}),ne.jsx("div",{className:"toolbar-group",children:se.map(ee=>ne.jsx("button",{className:ee===u?"toolbar-button is-active":"toolbar-button",onClick:()=>c(ee),type:"button",children:ee},ee))})]})}function $e(){var k;return ne.jsxs("div",{className:"toolbar",children:[ne.jsx("div",{className:"toolbar-group",children:["flat","time_lift","density_lift","session_offset"].map(se=>ne.jsx("button",{className:se===h?"toolbar-button is-active":"toolbar-button",onClick:()=>f(se),type:"button",children:se},se))}),ne.jsxs("div",{className:"toolbar-group toolbar-badges",children:[ne.jsxs("span",{className:oo("derived"),children:["Projection: ",((k=E.basin)==null?void 0:k.projection_method)??r.projection_method??"unknown"]}),ne.jsxs("span",{className:oo("derived"),children:["Lift: ",h]}),ne.jsx("span",{className:oo("derived"),children:"Derived"})]})]})}function F(){var et,Ue,dt,it;const k=U??Ae??Y??W??E.overview??{},se=(U==null?void 0:U.measurement_history)??(Ae==null?void 0:Ae.measurement_history)??(Y==null?void 0:Y.measurement_history)??[],K=(U==null?void 0:U.operator_label)??((et=U==null?void 0:U.provenance)==null?void 0:et.assertion_origin)??(Ae==null?void 0:Ae.provenance)??(Y==null?void 0:Y.operator_label)??(W==null?void 0:W.profile_name)??"",xe=U?yu(U,G):(k==null?void 0:k.label)??(k==null?void 0:k.display_attractor_label)??(k==null?void 0:k.display_label),ee=(k==null?void 0:k.kind)??(U?"edge":Y?"memode":W?"turn":"overview"),He=U?`${(ye==null?void 0:ye.domain)??"unknown"} -> ${(_e==null?void 0:_e.domain)??"unknown"}`:(k==null?void 0:k.domain)??(k==null?void 0:k.dominant_domain),Xe=(U==null?void 0:U.assertion_origin)??((Ue=U==null?void 0:U.provenance)==null?void 0:Ue.assertion_origin)??(k==null?void 0:k.source_kind)??"observatory",Se=U?`${(ye==null?void 0:ye.cluster_label)??(ye==null?void 0:ye.cluster_signature)??"unknown"} -> ${(_e==null?void 0:_e.cluster_label)??(_e==null?void 0:_e.cluster_signature)??"unknown"}`:(k==null?void 0:k.cluster_label)??(k==null?void 0:k.display_label)??(W==null?void 0:W.display_attractor_label),Ie=U?[["Source",lo(ye??{id:U==null?void 0:U.source})],["Target",lo(_e??{id:U==null?void 0:U.target})],["Relation type",U==null?void 0:U.type]]:Ae?[["Connected relations",le.filter(ft=>ft.source===Ae.id||ft.target===Ae.id).slice(0,4).map(ft=>yu(ft,G))],["Current turn",W==null?void 0:W.turn_id],["Attractor",W==null?void 0:W.display_attractor_label]]:[["Active set nodes",W==null?void 0:W.active_set_node_ids],["Transition",W==null?void 0:W.transition_kind],["Attractor",W==null?void 0:W.display_attractor_label]],Ke=U?[["Source presence",ye==null?void 0:ye.recent_active_set_presence],["Target presence",_e==null?void 0:_e.recent_active_set_presence],["Highlighted nodes",ge.length]]:Y?[["Members in active set",(Y.member_meme_ids??[]).filter(ft=>ge.includes(ft))],["Highlighted nodes",ge.length],["Selected turn",W==null?void 0:W.turn_id]]:[["Recent presence",(k==null?void 0:k.recent_active_set_presence)??((dt=W==null?void 0:W.active_set_summary)==null?void 0:dt.size)],["Selected turn",W==null?void 0:W.turn_id],["Highlighted nodes",ge.length]];return ne.jsxs("aside",{className:"inspector",children:[ne.jsxs("div",{className:"inspector-tabs",children:[ne.jsx("button",{className:m==="cards"?"toolbar-button is-active":"toolbar-button",onClick:()=>g("cards"),type:"button",children:"Cards"}),ne.jsx("button",{className:m==="json"?"toolbar-button is-active":"toolbar-button",onClick:()=>g("json"),type:"button",children:"Raw JSON"})]}),m==="json"?ne.jsx("pre",{className:"debug-json",children:JSON.stringify(k,null,2)}):ne.jsxs("div",{className:"inspector-cards",children:[ne.jsx(un,{title:"Identity",children:ne.jsx($n,{items:[["ID",(k==null?void 0:k.id)??(k==null?void 0:k.turn_id)??(k==null?void 0:k.cluster_signature)],["Label",xe],["Created",k==null?void 0:k.created_at]]})}),ne.jsx(un,{title:"Ontology",children:ne.jsx($n,{items:[["Kind",ee],["Domain",He],["Source",Xe]]})}),ne.jsx(un,{title:"Summary/Invariance",children:ne.jsx($n,{items:[["Summary",(k==null?void 0:k.summary)??(k==null?void 0:k.manual_summary)??(k==null?void 0:k.dominant_label)],["Invariance",Y==null?void 0:Y.invariance_summary],["Recent turns",W==null?void 0:W.active_set_labels]]})}),ne.jsx(un,{title:"Provenance",children:ne.jsx($n,{items:[["Operator/Source",K],["Evidence label",(k==null?void 0:k.evidence_label)??(Y==null?void 0:Y.evidence_label)??(U==null?void 0:U.evidence_label)],["Confidence",(k==null?void 0:k.confidence)??(Y==null?void 0:Y.confidence)??(U==null?void 0:U.confidence)]]})}),ne.jsx(un,{title:"Cluster Membership",children:ne.jsx($n,{items:[["Cluster",U?`${(ye==null?void 0:ye.cluster_signature)??"unknown"} -> ${(_e==null?void 0:_e.cluster_signature)??"unknown"}`:(k==null?void 0:k.cluster_signature)??(W==null?void 0:W.dominant_cluster_signature)],["Display label",Se],["Domain mix",k==null?void 0:k.domain_mix]]})}),ne.jsx(un,{title:"Memode Membership",children:ne.jsx($n,{items:[["Assemblies",U?[...(ye==null?void 0:ye.memode_membership)??[],...(_e==null?void 0:_e.memode_membership)??[]]:(k==null?void 0:k.memode_membership)??(Y==null?void 0:Y.member_meme_ids)],["Supporting edges",Y==null?void 0:Y.supporting_edge_ids],["Member order",Y==null?void 0:Y.member_order]]})}),ne.jsx(un,{title:"Supporting Relations",children:ne.jsx($n,{items:Ie})}),ne.jsx(un,{title:"Active Set Presence",children:ne.jsx($n,{items:Ke})}),ne.jsx(un,{title:"Measurement History",children:ne.jsx($n,{items:[["Count",se.length],["Recent event",(it=se[0])==null?void 0:it.action_type],["Preview delta","Use preview/commit API; view-only presets stay out of evidence."]]})})]})]})}function A(){var k,se,K,xe;return ne.jsxs("aside",{className:"sidebar",children:[ne.jsx(un,{title:"Assemblies",children:E.graph?ne.jsxs(ne.Fragment,{children:[It.capped?ne.jsxs("p",{className:"placeholder-copy",children:["Showing first ",va," of ",It.total," assemblies. This browser list is capped and not exhaustive."]}):null,ne.jsx("div",{className:"chip-list",children:It.items.map(ee=>ne.jsx("button",{"aria-label":`Assembly ${ee.label}`,className:ee.id===S?"chip is-active":"chip",onClick:()=>gt(ee.id),type:"button",children:ee.label},ee.id))})]}):ne.jsxs("p",{className:"placeholder-copy",children:["Graph payload ",oe.graph.status,". Assemblies appear after the semantic graph bundle arrives."]})}),ne.jsx(un,{title:"Graph Entities",children:E.graph?ne.jsxs(ne.Fragment,{children:[Pe.capped?ne.jsxs("p",{className:"placeholder-copy",children:["Showing first ",va," of ",Pe.total," graph entities. This browser list is capped and not exhaustive."]}):null,ne.jsx("div",{className:"chip-list",children:Pe.items.map(ee=>ne.jsx("button",{"aria-label":`Graph entity ${lo(ee)}`,className:ee.id===me?"chip is-active":"chip",onClick:()=>St(ee.id),type:"button",children:lo(ee)},ee.id))})]}):ne.jsxs("p",{className:"placeholder-copy",children:["Graph payload ",oe.graph.status,". Text selection becomes available once the graph bundle is ready."]})}),ne.jsx(un,{title:"Relations",children:E.graph?ne.jsxs(ne.Fragment,{children:[Qe.capped?ne.jsxs("p",{className:"placeholder-copy",children:["Showing first ",va," of ",Qe.total," relations. This browser list is capped and not exhaustive."]}):null,ne.jsx("div",{className:"transcript-list",children:Qe.items.map(ee=>ne.jsxs("button",{"aria-label":`Graph relation ${yu(ee,G)}`,className:ee.id===M?"transcript-turn is-active":"transcript-turn",onClick:()=>H(ee.id),type:"button",children:[ne.jsx("span",{children:ee.type}),ne.jsx("span",{children:yu(ee,G)})]},ee.id))})]}):ne.jsx("p",{className:"placeholder-copy",children:"Relations stay unavailable until the graph payload is ready."})}),ne.jsx(un,{title:"Semantic Clusters",children:E.graph?ne.jsx("div",{className:"chip-list",children:(((k=E.graph)==null?void 0:k.cluster_summaries)??[]).slice(0,12).map(ee=>ne.jsxs("div",{className:"cluster-pill",children:[ne.jsx("strong",{children:ee.display_label}),ne.jsxs("span",{children:[ee.member_meme_ids.length," memes"]})]},ee.cluster_signature))}):ne.jsx("p",{className:"placeholder-copy",children:"Cluster summaries depend on the graph payload and are loaded separately from the overview."})}),ne.jsx(un,{title:"Basin Turns",children:(K=(se=E.basin)==null?void 0:se.turns)!=null&&K.length?ne.jsxs(ne.Fragment,{children:[We.capped?ne.jsxs("p",{className:"placeholder-copy",children:["Showing first ",va," of ",We.total," basin turns. This browser list is capped and not exhaustive."]}):null,ne.jsx("div",{className:"transcript-list",children:We.items.map(ee=>ne.jsxs("button",{"aria-label":`Basin turn T${ee.turn_index??"?"} ${ee.turn_id} ${ee.display_attractor_label??ee.dominant_label??ee.turn_id}`,className:ee.turn_id===(W==null?void 0:W.turn_id)?"transcript-turn is-active":"transcript-turn",onClick:()=>on(ee.turn_id),type:"button",children:[ne.jsxs("span",{children:["T",ee.turn_index??"?"]}),ne.jsx("span",{children:ee.display_attractor_label??ee.dominant_label??ee.turn_id})]},ee.turn_id))})]}):ne.jsx("p",{className:"placeholder-copy",children:"Basin turns become selectable when filtered trajectory data is available."})}),ne.jsx(un,{title:"Transcript",children:E.transcript?ne.jsx("div",{className:"transcript-list",children:(((xe=E.transcript)==null?void 0:xe.turns)??[]).slice(0,10).map(ee=>ne.jsxs("button",{"aria-label":`Transcript turn T${ee.turn_index} ${ee.turn_id}`,className:ee.turn_id===(W==null?void 0:W.turn_id)?"transcript-turn is-active":"transcript-turn",onClick:()=>on(ee.turn_id),type:"button",children:[ne.jsxs("span",{children:["T",ee.turn_index]}),ne.jsx("span",{children:ee.user_text})]},ee.turn_id))}):ne.jsx("p",{className:"placeholder-copy",children:E.liveEnabled?`Transcript payload ${oe.transcript.status}.`:"Transcript is only available from the live API in v1."})})]})}function re(){var k,se;return t==="overview"?yt():t==="graph"&&!E.graph?ne.jsxs("div",{className:"empty-state",children:[ne.jsx("h2",{children:"Graph payload not ready"}),ne.jsxs("p",{children:["Current status: ",oe.graph.status,". This semantic bundle is large and loads separately from the overview."]})]}):t==="graph"&&E.graph?ne.jsxs(ne.Fragment,{children:[Nt(),ne.jsx(wR,{payload:E.graph,mode:o,currentTurnNodeIds:ge,selectedNodeId:me,selectedAssembly:u==="hidden"?null:Y,onSelectNode:Ut})]}):t==="basin"&&!E.basin?ne.jsxs("div",{className:"empty-state",children:[ne.jsx("h2",{children:"Basin payload not ready"}),ne.jsxs("p",{children:["Current status: ",oe.basin.status,"."]})]}):t==="basin"&&E.basin?(E.basin.filtered_turn_count??0)<2?ne.jsxs(ne.Fragment,{children:[$e(),ne.jsxs("div",{className:"empty-state",children:[ne.jsx("h2",{children:"Sparse basin data"}),ne.jsx("p",{children:((k=E.basin.diagnostics)==null?void 0:k.reason)??"Not enough turns with non-empty active sets for basin playback."}),ne.jsx($n,{items:[["Source turns",E.basin.source_turn_count],["Filtered turns",E.basin.filtered_turn_count],["Skipped turns",(se=E.basin.diagnostics)==null?void 0:se.skipped_turn_count]]})]})]}):ne.jsxs(ne.Fragment,{children:[$e(),ne.jsx(XT,{payload:E.basin,currentTurnId:(W==null?void 0:W.turn_id)??null,liftMode:h,onSelectTurn:on})]}):t==="geometry"?E.geometry?ne.jsx("pre",{className:"debug-json",children:JSON.stringify(E.geometry??{},null,2)}):ne.jsxs("div",{className:"empty-state",children:[ne.jsxs("h2",{children:["Geometry payload ",oe.geometry.status]}),ne.jsx("p",{children:oe.geometry.status==="error"?"Geometry diagnostics are unavailable for this surface.":"The geometry bundle is intentionally deferred until you open this tab because it can be very large on seeded experiments."}),oe.geometry.error?ne.jsx("p",{children:oe.geometry.error}):null]}):ne.jsx("pre",{className:"debug-json",children:JSON.stringify(E.measurements??{},null,2)})}return ne.jsxs("div",{className:"app-shell",children:[ne.jsxs("header",{className:"app-header",children:[ne.jsxs("div",{children:[ne.jsx("p",{className:"eyebrow",children:"EDEN Observatory"}),ne.jsx("h1",{children:"Live-first semantic graph and basin instrument"})]}),ne.jsxs("div",{className:"header-badges",children:[ne.jsx("span",{className:oo("observed"),children:E.liveEnabled?"Live API":"Static export"}),ne.jsx("span",{className:oo("derived"),children:"Layout != evidence"}),E.staleBuildWarning?ne.jsxs("span",{className:oo("warning"),children:["Build warning: ",E.staleBuildWarning]}):null]})]}),ne.jsx("nav",{className:"surface-tabs",children:Pv.map(k=>ne.jsx("button",{className:k===t?"toolbar-button is-active":"toolbar-button",onClick:()=>n(k),type:"button",children:AR(k)},k))}),tt(),B?ne.jsx("div",{className:"status-banner status-error",children:B}):null,ne.jsxs("main",{className:"layout",children:[A(),ne.jsx("section",{className:"surface-panel",children:re()}),F()]})]})}L0.createRoot(document.getElementById("observatory-root")).render(ne.jsx(w0.StrictMode,{children:ne.jsx(NR,{bootstrap:window.__EDEN_BOOTSTRAP__??{}})}));
