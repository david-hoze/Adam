(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Zh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cd={exports:{}},na={},dd={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function f0(){if(Om)return _t;Om=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(R){return R===null||typeof R!="object"?null:(R=g&&R[g]||R["@@iterator"],typeof R=="function"?R:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(R,X,me){this.props=R,this.context=X,this.refs=M,this.updater=me||x}S.prototype.isReactComponent={},S.prototype.setState=function(R,X){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,X,"setState")},S.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function y(){}y.prototype=S.prototype;function I(R,X,me){this.props=R,this.context=X,this.refs=M,this.updater=me||x}var L=I.prototype=new y;L.constructor=I,E(L,S.prototype),L.isPureReactComponent=!0;var w=Array.isArray,U=Object.prototype.hasOwnProperty,C={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function O(R,X,me){var W,se={},ve=null,ge=null;if(X!=null)for(W in X.ref!==void 0&&(ge=X.ref),X.key!==void 0&&(ve=""+X.key),X)U.call(X,W)&&!N.hasOwnProperty(W)&&(se[W]=X[W]);var be=arguments.length-2;if(be===1)se.children=me;else if(1<be){for(var je=Array(be),Oe=0;Oe<be;Oe++)je[Oe]=arguments[Oe+2];se.children=je}if(R&&R.defaultProps)for(W in be=R.defaultProps,be)se[W]===void 0&&(se[W]=be[W]);return{$$typeof:r,type:R,key:ve,ref:ge,props:se,_owner:C.current}}function P(R,X){return{$$typeof:r,type:R.type,key:X,ref:R.ref,props:R.props,_owner:R._owner}}function T(R){return typeof R=="object"&&R!==null&&R.$$typeof===r}function z(R){var X={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(me){return X[me]})}var j=/\/+/g;function K(R,X){return typeof R=="object"&&R!==null&&R.key!=null?z(""+R.key):X.toString(36)}function oe(R,X,me,W,se){var ve=typeof R;(ve==="undefined"||ve==="boolean")&&(R=null);var ge=!1;if(R===null)ge=!0;else switch(ve){case"string":case"number":ge=!0;break;case"object":switch(R.$$typeof){case r:case e:ge=!0}}if(ge)return ge=R,se=se(ge),R=W===""?"."+K(ge,0):W,w(se)?(me="",R!=null&&(me=R.replace(j,"$&/")+"/"),oe(se,X,me,"",function(Oe){return Oe})):se!=null&&(T(se)&&(se=P(se,me+(!se.key||ge&&ge.key===se.key?"":(""+se.key).replace(j,"$&/")+"/")+R)),X.push(se)),1;if(ge=0,W=W===""?".":W+":",w(R))for(var be=0;be<R.length;be++){ve=R[be];var je=W+K(ve,be);ge+=oe(ve,X,me,je,se)}else if(je=v(R),typeof je=="function")for(R=je.call(R),be=0;!(ve=R.next()).done;)ve=ve.value,je=W+K(ve,be++),ge+=oe(ve,X,me,je,se);else if(ve==="object")throw X=String(R),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return ge}function de(R,X,me){if(R==null)return R;var W=[],se=0;return oe(R,W,"","",function(ve){return X.call(me,ve,se++)}),W}function ae(R){if(R._status===-1){var X=R._result;X=X(),X.then(function(me){(R._status===0||R._status===-1)&&(R._status=1,R._result=me)},function(me){(R._status===0||R._status===-1)&&(R._status=2,R._result=me)}),R._status===-1&&(R._status=0,R._result=X)}if(R._status===1)return R._result.default;throw R._result}var ce={current:null},H={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:C};function re(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:de,forEach:function(R,X,me){de(R,function(){X.apply(this,arguments)},me)},count:function(R){var X=0;return de(R,function(){X++}),X},toArray:function(R){return de(R,function(X){return X})||[]},only:function(R){if(!T(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},_t.Component=S,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=I,_t.StrictMode=n,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,_t.act=re,_t.cloneElement=function(R,X,me){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var W=E({},R.props),se=R.key,ve=R.ref,ge=R._owner;if(X!=null){if(X.ref!==void 0&&(ve=X.ref,ge=C.current),X.key!==void 0&&(se=""+X.key),R.type&&R.type.defaultProps)var be=R.type.defaultProps;for(je in X)U.call(X,je)&&!N.hasOwnProperty(je)&&(W[je]=X[je]===void 0&&be!==void 0?be[je]:X[je])}var je=arguments.length-2;if(je===1)W.children=me;else if(1<je){be=Array(je);for(var Oe=0;Oe<je;Oe++)be[Oe]=arguments[Oe+2];W.children=be}return{$$typeof:r,type:R.type,key:se,ref:ve,props:W,_owner:ge}},_t.createContext=function(R){return R={$$typeof:u,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:a,_context:R},R.Consumer=R},_t.createElement=O,_t.createFactory=function(R){var X=O.bind(null,R);return X.type=R,X},_t.createRef=function(){return{current:null}},_t.forwardRef=function(R){return{$$typeof:c,render:R}},_t.isValidElement=T,_t.lazy=function(R){return{$$typeof:m,_payload:{_status:-1,_result:R},_init:ae}},_t.memo=function(R,X){return{$$typeof:f,type:R,compare:X===void 0?null:X}},_t.startTransition=function(R){var X=H.transition;H.transition={};try{R()}finally{H.transition=X}},_t.unstable_act=re,_t.useCallback=function(R,X){return ce.current.useCallback(R,X)},_t.useContext=function(R){return ce.current.useContext(R)},_t.useDebugValue=function(){},_t.useDeferredValue=function(R){return ce.current.useDeferredValue(R)},_t.useEffect=function(R,X){return ce.current.useEffect(R,X)},_t.useId=function(){return ce.current.useId()},_t.useImperativeHandle=function(R,X,me){return ce.current.useImperativeHandle(R,X,me)},_t.useInsertionEffect=function(R,X){return ce.current.useInsertionEffect(R,X)},_t.useLayoutEffect=function(R,X){return ce.current.useLayoutEffect(R,X)},_t.useMemo=function(R,X){return ce.current.useMemo(R,X)},_t.useReducer=function(R,X,me){return ce.current.useReducer(R,X,me)},_t.useRef=function(R){return ce.current.useRef(R)},_t.useState=function(R){return ce.current.useState(R)},_t.useSyncExternalStore=function(R,X,me){return ce.current.useSyncExternalStore(R,X,me)},_t.useTransition=function(){return ce.current.useTransition()},_t.version="18.3.1",_t}var zm;function Qh(){return zm||(zm=1,dd.exports=f0()),dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function p0(){if(Bm)return na;Bm=1;var r=Qh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,f){var m,g={},v=null,x=null;f!==void 0&&(v=""+f),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(x=h.ref);for(m in h)n.call(h,m)&&!a.hasOwnProperty(m)&&(g[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:o.current}}return na.Fragment=t,na.jsx=u,na.jsxs=u,na}var Gm;function m0(){return Gm||(Gm=1,cd.exports=p0()),cd.exports}var we=m0(),Nt=Qh();const g0=Zh(Nt);var Ul={},hd={exports:{}},Hn={},fd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function v0(){return Hm||(Hm=1,(function(r){function e(H,ue){var re=H.length;H.push(ue);e:for(;0<re;){var R=re-1>>>1,X=H[R];if(0<o(X,ue))H[R]=ue,H[re]=X,re=R;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var ue=H[0],re=H.pop();if(re!==ue){H[0]=re;e:for(var R=0,X=H.length,me=X>>>1;R<me;){var W=2*(R+1)-1,se=H[W],ve=W+1,ge=H[ve];if(0>o(se,re))ve<X&&0>o(ge,se)?(H[R]=ge,H[ve]=re,R=ve):(H[R]=se,H[W]=re,R=W);else if(ve<X&&0>o(ge,re))H[R]=ge,H[ve]=re,R=ve;else break e}}return ue}function o(H,ue){var re=H.sortIndex-ue.sortIndex;return re!==0?re:H.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var h=[],f=[],m=1,g=null,v=3,x=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var ue=t(f);ue!==null;){if(ue.callback===null)n(f);else if(ue.startTime<=H)n(f),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(f)}}function w(H){if(M=!1,L(H),!E)if(t(h)!==null)E=!0,ae(U);else{var ue=t(f);ue!==null&&ce(w,ue.startTime-H)}}function U(H,ue){E=!1,M&&(M=!1,y(O),O=-1),x=!0;var re=v;try{for(L(ue),g=t(h);g!==null&&(!(g.expirationTime>ue)||H&&!z());){var R=g.callback;if(typeof R=="function"){g.callback=null,v=g.priorityLevel;var X=R(g.expirationTime<=ue);ue=r.unstable_now(),typeof X=="function"?g.callback=X:g===t(h)&&n(h),L(ue)}else n(h);g=t(h)}if(g!==null)var me=!0;else{var W=t(f);W!==null&&ce(w,W.startTime-ue),me=!1}return me}finally{g=null,v=re,x=!1}}var C=!1,N=null,O=-1,P=5,T=-1;function z(){return!(r.unstable_now()-T<P)}function j(){if(N!==null){var H=r.unstable_now();T=H;var ue=!0;try{ue=N(!0,H)}finally{ue?K():(C=!1,N=null)}}else C=!1}var K;if(typeof I=="function")K=function(){I(j)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,de=oe.port2;oe.port1.onmessage=j,K=function(){de.postMessage(null)}}else K=function(){S(j,0)};function ae(H){N=H,C||(C=!0,K())}function ce(H,ue){O=S(function(){H(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){E||x||(E=!0,ae(U))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(H){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var re=v;v=ue;try{return H()}finally{v=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,ue){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=v;v=H;try{return ue()}finally{v=re}},r.unstable_scheduleCallback=function(H,ue,re){var R=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?R+re:R):re=R,H){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=re+X,H={id:m++,callback:ue,priorityLevel:H,startTime:re,expirationTime:X,sortIndex:-1},re>R?(H.sortIndex=re,e(f,H),t(h)===null&&H===t(f)&&(M?(y(O),O=-1):M=!0,ce(w,re-R))):(H.sortIndex=X,e(h,H),E||x||(E=!0,ae(U))),H},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(H){var ue=v;return function(){var re=v;v=ue;try{return H.apply(this,arguments)}finally{v=re}}}})(pd)),pd}var Vm;function _0(){return Vm||(Vm=1,fd.exports=v0()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function y0(){if(Wm)return Hn;Wm=1;var r=Qh(),e=_0();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return h.call(g,i)?!0:h.call(m,i)?!1:f.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,d){if(s===null||typeof s>"u"||x(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,d,p,_,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function I(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,I);S[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,I);S[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,I);S[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,s,l,d){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,p,d)&&(l=null),d||p===null?v(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),C=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function ue(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,R;function X(i){if(R===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);R=s&&s[1]||""}return`
`+R+i}var me=!1;function W(i,s){if(!i||me)return"";me=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(te){var d=te}Reflect.construct(i,[],s)}else{try{s.call()}catch(te){d=te}i.call(s.prototype)}else{try{throw Error()}catch(te){d=te}i()}}catch(te){if(te&&d&&typeof te.stack=="string"){for(var p=te.stack.split(`
`),_=d.stack.split(`
`),A=p.length-1,k=_.length-1;1<=A&&0<=k&&p[A]!==_[k];)k--;for(;1<=A&&0<=k;A--,k--)if(p[A]!==_[k]){if(A!==1||k!==1)do if(A--,k--,0>k||p[A]!==_[k]){var G=`
`+p[A].replace(" at new "," at ");return i.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",i.displayName)),G}while(1<=A&&0<=k);break}}}finally{me=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?X(i):""}function se(i){switch(i.tag){case 5:return X(i.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return i=W(i.type,!1),i;case 11:return i=W(i.type.render,!1),i;case 1:return i=W(i.type,!0),i;default:return""}}function ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case C:return"Portal";case P:return"Profiler";case O:return"StrictMode";case K:return"Suspense";case oe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case T:return(i._context.displayName||"Context")+".Provider";case j:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case de:return s=i.displayName||null,s!==null?s:ve(i.type)||"Memo";case ae:s=i._payload,i=i._init;try{return ve(i(s))}catch{}}return null}function ge(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(s);case 8:return s===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function be(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function je(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Oe(i){var s=je(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){d=""+A,_.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pt(i){i._valueTracker||(i._valueTracker=Oe(i))}function Lt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=je(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function ut(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function B(i,s){var l=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Qt(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=be(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pt(i,s){s=s.checked,s!=null&&L(i,"checked",s,!1)}function ht(i,s){pt(i,s);var l=be(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?xt(i,s.type,l):s.hasOwnProperty("defaultValue")&&xt(i,s.type,be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function qe(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function xt(i,s,l){(s!=="number"||ut(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Be=Array.isArray;function F(i,s,l,d){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+be(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function b(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function J(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Be(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:be(l)}}function fe(i,s){var l=be(s.value),d=be(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function _e(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,et=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Je(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ge=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(i){Ge.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ee[s]=Ee[i]})});function st(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ee.hasOwnProperty(i)&&Ee[i]?(""+s).trim():s+"px"}function ot(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=st(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var He=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(i,s){if(s){if(He[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ct(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function $(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Pe=null,le=null,pe=null;function Ie(i){if(i=Go(i)){if(typeof Pe!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ka(s),Pe(i.stateNode,i.type,s))}}function Ne(i){le?pe?pe.push(i):pe=[i]:le=i}function dt(){if(le){var i=le,s=pe;if(pe=le=null,Ie(i),s)for(i=0;i<s.length;i++)Ie(s[i])}}function zt(i,s){return i(s)}function tn(){}var wt=!1;function Fn(i,s,l){if(wt)return i(s,l);wt=!0;try{return zt(i,s,l)}finally{wt=!1,(le!==null||pe!==null)&&(tn(),dt())}}function Pn(i,s){var l=i.stateNode;if(l===null)return null;var d=Ka(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ss=!1;if(c)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ss=!1}function ki(i,s,l,d,p,_,A,k,G){var te=Array.prototype.slice.call(arguments,3);try{s.apply(l,te)}catch(Se){this.onError(Se)}}var Oi=!1,$r=null,jr=!1,hr=null,Ra={onError:function(i){Oi=!0,$r=i}};function Es(i,s,l,d,p,_,A,k,G){Oi=!1,$r=null,ki.apply(Ra,arguments)}function Ca(i,s,l,d,p,_,A,k,G){if(Es.apply(this,arguments),Oi){if(Oi){var te=$r;Oi=!1,$r=null}else throw Error(t(198));jr||(jr=!0,hr=te)}}function Ci(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Pa(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function La(i){if(Ci(i)!==i)throw Error(t(188))}function Nu(i){var s=i.alternate;if(!s){if(s=Ci(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return La(p),i;if(_===d)return La(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=_;else{for(var A=!1,k=p.child;k;){if(k===l){A=!0,l=p,d=_;break}if(k===d){A=!0,d=p,l=_;break}k=k.sibling}if(!A){for(k=_.child;k;){if(k===l){A=!0,l=_,d=p;break}if(k===d){A=!0,d=_,l=p;break}k=k.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Da(i){return i=Nu(i),i!==null?Na(i):null}function Na(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Na(i);if(s!==null)return s;i=i.sibling}return null}var Ia=e.unstable_scheduleCallback,D=e.unstable_cancelCallback,Y=e.unstable_shouldYield,ne=e.unstable_requestPaint,Q=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Te=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Ve=e.unstable_LowPriority,at=e.unstable_IdlePriority,it=null,$e=null;function St(i){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(it,i,void 0,(i.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Mt,jt=Math.log,Ht=Math.LN2;function Mt(i){return i>>>=0,i===0?32:31-(jt(i)/Ht|0)|0}var Qe=64,Yt=4194304;function yt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function _n(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,_=i.pingedLanes,A=l&268435455;if(A!==0){var k=A&~p;k!==0?d=yt(k):(_&=A,_!==0&&(d=yt(_)))}else A=l&~p,A!==0?d=yt(A):_!==0&&(d=yt(_));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-ft(s),p=1<<l,d|=i[l],s&=~p;return d}function fr(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var A=31-ft(_),k=1<<A,G=p[A];G===-1?((k&l)===0||(k&d)!==0)&&(p[A]=fr(k,s)):G<=s&&(i.expiredLanes|=k),_&=~k}}function zi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function kt(){var i=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),i}function yn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function ln(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-ft(s),i[s]=l}function pn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-ft(l),_=1<<p;s[p]=0,d[p]=-1,i[p]=-1,l&=~_}}function un(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-ft(l),p=1<<d;p&s|i[d]&s&&(i[d]|=s),l&=~p}}var Tt=0;function Pi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var vf,Iu,_f,yf,xf,Uu=!1,Ua=[],pr=null,mr=null,gr=null,To=new Map,Ao=new Map,vr=[],U_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(i,s){switch(i){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":To.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(s.pointerId)}}function bo(i,s,l,d,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Go(s),s!==null&&Iu(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function F_(i,s,l,d,p){switch(s){case"focusin":return pr=bo(pr,i,s,l,d,p),!0;case"dragenter":return mr=bo(mr,i,s,l,d,p),!0;case"mouseover":return gr=bo(gr,i,s,l,d,p),!0;case"pointerover":var _=p.pointerId;return To.set(_,bo(To.get(_)||null,i,s,l,d,p)),!0;case"gotpointercapture":return _=p.pointerId,Ao.set(_,bo(Ao.get(_)||null,i,s,l,d,p)),!0}return!1}function Ef(i){var s=Yr(i.target);if(s!==null){var l=Ci(s);if(l!==null){if(s=l.tag,s===13){if(s=Pa(l),s!==null){i.blockedOn=s,xf(i.priority,function(){_f(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Fa(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=ku(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);Dt=d,l.target.dispatchEvent(d),Dt=null}else return s=Go(l),s!==null&&Iu(s),i.blockedOn=l,!1;s.shift()}return!0}function Mf(i,s,l){Fa(i)&&l.delete(s)}function k_(){Uu=!1,pr!==null&&Fa(pr)&&(pr=null),mr!==null&&Fa(mr)&&(mr=null),gr!==null&&Fa(gr)&&(gr=null),To.forEach(Mf),Ao.forEach(Mf)}function Ro(i,s){i.blockedOn===s&&(i.blockedOn=null,Uu||(Uu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,k_)))}function Co(i){function s(p){return Ro(p,i)}if(0<Ua.length){Ro(Ua[0],i);for(var l=1;l<Ua.length;l++){var d=Ua[l];d.blockedOn===i&&(d.blockedOn=null)}}for(pr!==null&&Ro(pr,i),mr!==null&&Ro(mr,i),gr!==null&&Ro(gr,i),To.forEach(s),Ao.forEach(s),l=0;l<vr.length;l++)d=vr[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<vr.length&&(l=vr[0],l.blockedOn===null);)Ef(l),l.blockedOn===null&&vr.shift()}var Ms=w.ReactCurrentBatchConfig,ka=!0;function O_(i,s,l,d){var p=Tt,_=Ms.transition;Ms.transition=null;try{Tt=1,Fu(i,s,l,d)}finally{Tt=p,Ms.transition=_}}function z_(i,s,l,d){var p=Tt,_=Ms.transition;Ms.transition=null;try{Tt=4,Fu(i,s,l,d)}finally{Tt=p,Ms.transition=_}}function Fu(i,s,l,d){if(ka){var p=ku(i,s,l,d);if(p===null)ec(i,s,d,Oa,l),Sf(i,d);else if(F_(p,i,s,l,d))d.stopPropagation();else if(Sf(i,d),s&4&&-1<U_.indexOf(i)){for(;p!==null;){var _=Go(p);if(_!==null&&vf(_),_=ku(i,s,l,d),_===null&&ec(i,s,d,Oa,l),_===p)break;p=_}p!==null&&d.stopPropagation()}else ec(i,s,d,null,l)}}var Oa=null;function ku(i,s,l,d){if(Oa=null,i=$(d),i=Yr(i),i!==null)if(s=Ci(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Pa(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Oa=i,null}function wf(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Te:return 1;case Le:return 4;case Fe:case Ve:return 16;case at:return 536870912;default:return 16}default:return 16}}var _r=null,Ou=null,za=null;function Tf(){if(za)return za;var i,s=Ou,l=s.length,d,p="value"in _r?_r.value:_r.textContent,_=p.length;for(i=0;i<l&&s[i]===p[i];i++);var A=l-i;for(d=1;d<=A&&s[l-d]===p[_-d];d++);return za=p.slice(i,1<d?1-d:void 0)}function Ba(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Ga(){return!0}function Af(){return!1}function $n(i){function s(l,d,p,_,A){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var k in i)i.hasOwnProperty(k)&&(l=i[k],this[k]=l?l(_):_[k]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ga:Af,this.isPropagationStopped=Af,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),s}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=$n(ws),Po=re({},ws,{view:0,detail:0}),B_=$n(Po),Bu,Gu,Lo,Ha=re({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Lo&&(Lo&&i.type==="mousemove"?(Bu=i.screenX-Lo.screenX,Gu=i.screenY-Lo.screenY):Gu=Bu=0,Lo=i),Bu)},movementY:function(i){return"movementY"in i?i.movementY:Gu}}),bf=$n(Ha),G_=re({},Ha,{dataTransfer:0}),H_=$n(G_),V_=re({},Po,{relatedTarget:0}),Hu=$n(V_),W_=re({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),X_=$n(W_),$_=re({},ws,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),j_=$n($_),Y_=re({},ws,{data:0}),Rf=$n(Y_),q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Z_[i])?!!s[i]:!1}function Vu(){return Q_}var J_=re({},Po,{key:function(i){if(i.key){var s=q_[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ba(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?K_[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(i){return i.type==="keypress"?Ba(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ba(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),ey=$n(J_),ty=re({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=$n(ty),ny=re({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),iy=$n(ny),ry=re({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=$n(ry),oy=re({},Ha,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=$n(oy),ly=[9,13,27,32],Wu=c&&"CompositionEvent"in window,Do=null;c&&"documentMode"in document&&(Do=document.documentMode);var uy=c&&"TextEvent"in window&&!Do,Pf=c&&(!Wu||Do&&8<Do&&11>=Do),Lf=" ",Df=!1;function Nf(i,s){switch(i){case"keyup":return ly.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ts=!1;function cy(i,s){switch(i){case"compositionend":return If(s);case"keypress":return s.which!==32?null:(Df=!0,Lf);case"textInput":return i=s.data,i===Lf&&Df?null:i;default:return null}}function dy(i,s){if(Ts)return i==="compositionend"||!Wu&&Nf(i,s)?(i=Tf(),za=Ou=_r=null,Ts=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Pf&&s.locale!=="ko"?null:s.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!hy[i.type]:s==="textarea"}function Ff(i,s,l,d){Ne(d),s=ja(s,"onChange"),0<s.length&&(l=new zu("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var No=null,Io=null;function fy(i){ep(i,0)}function Va(i){var s=Ps(i);if(Lt(s))return i}function py(i,s){if(i==="change")return s}var kf=!1;if(c){var Xu;if(c){var $u="oninput"in document;if(!$u){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),$u=typeof Of.oninput=="function"}Xu=$u}else Xu=!1;kf=Xu&&(!document.documentMode||9<document.documentMode)}function zf(){No&&(No.detachEvent("onpropertychange",Bf),Io=No=null)}function Bf(i){if(i.propertyName==="value"&&Va(Io)){var s=[];Ff(s,Io,i,$(i)),Fn(fy,s)}}function my(i,s,l){i==="focusin"?(zf(),No=s,Io=l,No.attachEvent("onpropertychange",Bf)):i==="focusout"&&zf()}function gy(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Va(Io)}function vy(i,s){if(i==="click")return Va(s)}function _y(i,s){if(i==="input"||i==="change")return Va(s)}function yy(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var fi=typeof Object.is=="function"?Object.is:yy;function Uo(i,s){if(fi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!h.call(s,p)||!fi(i[p],s[p]))return!1}return!0}function Gf(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Hf(i,s){var l=Gf(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Gf(l)}}function Vf(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Vf(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Wf(){for(var i=window,s=ut();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ut(i.document)}return s}function ju(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function xy(i){var s=Wf(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Vf(l.ownerDocument.documentElement,l)){if(d!==null&&ju(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!i.extend&&_>d&&(p=d,d=_,_=p),p=Hf(l,_);var A=Hf(l,d);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>d?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Sy=c&&"documentMode"in document&&11>=document.documentMode,As=null,Yu=null,Fo=null,qu=!1;function Xf(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;qu||As==null||As!==ut(d)||(d=As,"selectionStart"in d&&ju(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Fo&&Uo(Fo,d)||(Fo=d,d=ja(Yu,"onSelect"),0<d.length&&(s=new zu("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=As)))}function Wa(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var bs={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Ku={},$f={};c&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Xa(i){if(Ku[i])return Ku[i];if(!bs[i])return i;var s=bs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in $f)return Ku[i]=s[l];return i}var jf=Xa("animationend"),Yf=Xa("animationiteration"),qf=Xa("animationstart"),Kf=Xa("transitionend"),Zf=new Map,Qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(i,s){Zf.set(i,s),a(s,[i])}for(var Zu=0;Zu<Qf.length;Zu++){var Qu=Qf[Zu],Ey=Qu.toLowerCase(),My=Qu[0].toUpperCase()+Qu.slice(1);yr(Ey,"on"+My)}yr(jf,"onAnimationEnd"),yr(Yf,"onAnimationIteration"),yr(qf,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(Kf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Jf(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,Ca(d,s,void 0,i),i.currentTarget=null}function ep(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var _=void 0;if(s)for(var A=d.length-1;0<=A;A--){var k=d[A],G=k.instance,te=k.currentTarget;if(k=k.listener,G!==_&&p.isPropagationStopped())break e;Jf(p,k,te),_=G}else for(A=0;A<d.length;A++){if(k=d[A],G=k.instance,te=k.currentTarget,k=k.listener,G!==_&&p.isPropagationStopped())break e;Jf(p,k,te),_=G}}}if(jr)throw i=hr,jr=!1,hr=null,i}function Bt(i,s){var l=s[oc];l===void 0&&(l=s[oc]=new Set);var d=i+"__bubble";l.has(d)||(tp(s,i,2,!1),l.add(d))}function Ju(i,s,l){var d=0;s&&(d|=4),tp(l,i,d,s)}var $a="_reactListening"+Math.random().toString(36).slice(2);function Oo(i){if(!i[$a]){i[$a]=!0,n.forEach(function(l){l!=="selectionchange"&&(wy.has(l)||Ju(l,!1,i),Ju(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[$a]||(s[$a]=!0,Ju("selectionchange",!1,s))}}function tp(i,s,l,d){switch(wf(s)){case 1:var p=O_;break;case 4:p=z_;break;default:p=Fu}l=p.bind(null,s,l,i),p=void 0,!Ss||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function ec(i,s,l,d,p){var _=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var k=d.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(A===4)for(A=d.return;A!==null;){var G=A.tag;if((G===3||G===4)&&(G=A.stateNode.containerInfo,G===p||G.nodeType===8&&G.parentNode===p))return;A=A.return}for(;k!==null;){if(A=Yr(k),A===null)return;if(G=A.tag,G===5||G===6){d=_=A;continue e}k=k.parentNode}}d=d.return}Fn(function(){var te=_,Se=$(l),Me=[];e:{var ye=Zf.get(i);if(ye!==void 0){var ke=zu,Xe=i;switch(i){case"keypress":if(Ba(l)===0)break e;case"keydown":case"keyup":ke=ey;break;case"focusin":Xe="focus",ke=Hu;break;case"focusout":Xe="blur",ke=Hu;break;case"beforeblur":case"afterblur":ke=Hu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=iy;break;case jf:case Yf:case qf:ke=X_;break;case Kf:ke=sy;break;case"scroll":ke=B_;break;case"wheel":ke=ay;break;case"copy":case"cut":case"paste":ke=j_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Cf}var Ye=(s&4)!==0,Kt=!Ye&&i==="scroll",Z=Ye?ye!==null?ye+"Capture":null:ye;Ye=[];for(var V=te,ee;V!==null;){ee=V;var Ae=ee.stateNode;if(ee.tag===5&&Ae!==null&&(ee=Ae,Z!==null&&(Ae=Pn(V,Z),Ae!=null&&Ye.push(zo(V,Ae,ee)))),Kt)break;V=V.return}0<Ye.length&&(ye=new ke(ye,Xe,null,l,Se),Me.push({event:ye,listeners:Ye}))}}if((s&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",ke=i==="mouseout"||i==="pointerout",ye&&l!==Dt&&(Xe=l.relatedTarget||l.fromElement)&&(Yr(Xe)||Xe[Bi]))break e;if((ke||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,ke?(Xe=l.relatedTarget||l.toElement,ke=te,Xe=Xe?Yr(Xe):null,Xe!==null&&(Kt=Ci(Xe),Xe!==Kt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ke=null,Xe=te),ke!==Xe)){if(Ye=bf,Ae="onMouseLeave",Z="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(Ye=Cf,Ae="onPointerLeave",Z="onPointerEnter",V="pointer"),Kt=ke==null?ye:Ps(ke),ee=Xe==null?ye:Ps(Xe),ye=new Ye(Ae,V+"leave",ke,l,Se),ye.target=Kt,ye.relatedTarget=ee,Ae=null,Yr(Se)===te&&(Ye=new Ye(Z,V+"enter",Xe,l,Se),Ye.target=ee,Ye.relatedTarget=Kt,Ae=Ye),Kt=Ae,ke&&Xe)t:{for(Ye=ke,Z=Xe,V=0,ee=Ye;ee;ee=Rs(ee))V++;for(ee=0,Ae=Z;Ae;Ae=Rs(Ae))ee++;for(;0<V-ee;)Ye=Rs(Ye),V--;for(;0<ee-V;)Z=Rs(Z),ee--;for(;V--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=Rs(Ye),Z=Rs(Z)}Ye=null}else Ye=null;ke!==null&&np(Me,ye,ke,Ye,!1),Xe!==null&&Kt!==null&&np(Me,Kt,Xe,Ye,!0)}}e:{if(ye=te?Ps(te):window,ke=ye.nodeName&&ye.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ye.type==="file")var Ze=py;else if(Uf(ye))if(kf)Ze=_y;else{Ze=gy;var tt=my}else(ke=ye.nodeName)&&ke.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Ze=vy);if(Ze&&(Ze=Ze(i,te))){Ff(Me,Ze,l,Se);break e}tt&&tt(i,ye,te),i==="focusout"&&(tt=ye._wrapperState)&&tt.controlled&&ye.type==="number"&&xt(ye,"number",ye.value)}switch(tt=te?Ps(te):window,i){case"focusin":(Uf(tt)||tt.contentEditable==="true")&&(As=tt,Yu=te,Fo=null);break;case"focusout":Fo=Yu=As=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Xf(Me,l,Se);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":Xf(Me,l,Se)}var nt;if(Wu)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Ts?Nf(i,l)&&(lt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(lt="onCompositionStart");lt&&(Pf&&l.locale!=="ko"&&(Ts||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Ts&&(nt=Tf()):(_r=Se,Ou="value"in _r?_r.value:_r.textContent,Ts=!0)),tt=ja(te,lt),0<tt.length&&(lt=new Rf(lt,i,null,l,Se),Me.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=If(l),nt!==null&&(lt.data=nt)))),(nt=uy?cy(i,l):dy(i,l))&&(te=ja(te,"onBeforeInput"),0<te.length&&(Se=new Rf("onBeforeInput","beforeinput",null,l,Se),Me.push({event:Se,listeners:te}),Se.data=nt))}ep(Me,s)})}function zo(i,s,l){return{instance:i,listener:s,currentTarget:l}}function ja(i,s){for(var l=s+"Capture",d=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Pn(i,l),_!=null&&d.unshift(zo(i,_,p)),_=Pn(i,s),_!=null&&d.push(zo(i,_,p))),i=i.return}return d}function Rs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function np(i,s,l,d,p){for(var _=s._reactName,A=[];l!==null&&l!==d;){var k=l,G=k.alternate,te=k.stateNode;if(G!==null&&G===d)break;k.tag===5&&te!==null&&(k=te,p?(G=Pn(l,_),G!=null&&A.unshift(zo(l,G,k))):p||(G=Pn(l,_),G!=null&&A.push(zo(l,G,k)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var Ty=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function ip(i){return(typeof i=="string"?i:""+i).replace(Ty,`
`).replace(Ay,"")}function Ya(i,s,l){if(s=ip(s),ip(i)!==s&&l)throw Error(t(425))}function qa(){}var tc=null,nc=null;function ic(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(i){return rp.resolve(null).then(i).catch(Cy)}:rc;function Cy(i){setTimeout(function(){throw i})}function sc(i,s){var l=s,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),Co(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Co(s)}function xr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function sp(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Li="__reactFiber$"+Cs,Bo="__reactProps$"+Cs,Bi="__reactContainer$"+Cs,oc="__reactEvents$"+Cs,Py="__reactListeners$"+Cs,Ly="__reactHandles$"+Cs;function Yr(i){var s=i[Li];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Bi]||l[Li]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=sp(i);i!==null;){if(l=i[Li])return l;i=sp(i)}return s}i=l,l=i.parentNode}return null}function Go(i){return i=i[Li]||i[Bi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ps(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ka(i){return i[Bo]||null}var ac=[],Ls=-1;function Sr(i){return{current:i}}function Gt(i){0>Ls||(i.current=ac[Ls],ac[Ls]=null,Ls--)}function Ot(i,s){Ls++,ac[Ls]=i.current,i.current=s}var Er={},xn=Sr(Er),kn=Sr(!1),qr=Er;function Ds(i,s){var l=i.type.contextTypes;if(!l)return Er;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function On(i){return i=i.childContextTypes,i!=null}function Za(){Gt(kn),Gt(xn)}function op(i,s,l){if(xn.current!==Er)throw Error(t(168));Ot(xn,s),Ot(kn,l)}function ap(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(t(108,ge(i)||"Unknown",p));return re({},l,d)}function Qa(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Er,qr=xn.current,Ot(xn,i),Ot(kn,kn.current),!0}function lp(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=ap(i,s,qr),d.__reactInternalMemoizedMergedChildContext=i,Gt(kn),Gt(xn),Ot(xn,i)):Gt(kn),Ot(kn,l)}var Gi=null,Ja=!1,lc=!1;function up(i){Gi===null?Gi=[i]:Gi.push(i)}function Dy(i){Ja=!0,up(i)}function Mr(){if(!lc&&Gi!==null){lc=!0;var i=0,s=Tt;try{var l=Gi;for(Tt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}Gi=null,Ja=!1}catch(p){throw Gi!==null&&(Gi=Gi.slice(i+1)),Ia(Te,Mr),p}finally{Tt=s,lc=!1}}return null}var Ns=[],Is=0,el=null,tl=0,ei=[],ti=0,Kr=null,Hi=1,Vi="";function Zr(i,s){Ns[Is++]=tl,Ns[Is++]=el,el=i,tl=s}function cp(i,s,l){ei[ti++]=Hi,ei[ti++]=Vi,ei[ti++]=Kr,Kr=i;var d=Hi;i=Vi;var p=32-ft(d)-1;d&=~(1<<p),l+=1;var _=32-ft(s)+p;if(30<_){var A=p-p%5;_=(d&(1<<A)-1).toString(32),d>>=A,p-=A,Hi=1<<32-ft(s)+p|l<<p|d,Vi=_+i}else Hi=1<<_|l<<p|d,Vi=i}function uc(i){i.return!==null&&(Zr(i,1),cp(i,1,0))}function cc(i){for(;i===el;)el=Ns[--Is],Ns[Is]=null,tl=Ns[--Is],Ns[Is]=null;for(;i===Kr;)Kr=ei[--ti],ei[ti]=null,Vi=ei[--ti],ei[ti]=null,Hi=ei[--ti],ei[ti]=null}var jn=null,Yn=null,Vt=!1,pi=null;function dp(i,s){var l=si(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function hp(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,jn=i,Yn=xr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,jn=i,Yn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Kr!==null?{id:Hi,overflow:Vi}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=si(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,jn=i,Yn=null,!0):!1;default:return!1}}function dc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function hc(i){if(Vt){var s=Yn;if(s){var l=s;if(!hp(i,s)){if(dc(i))throw Error(t(418));s=xr(l.nextSibling);var d=jn;s&&hp(i,s)?dp(d,l):(i.flags=i.flags&-4097|2,Vt=!1,jn=i)}}else{if(dc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Vt=!1,jn=i}}}function fp(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;jn=i}function nl(i){if(i!==jn)return!1;if(!Vt)return fp(i),Vt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!ic(i.type,i.memoizedProps)),s&&(s=Yn)){if(dc(i))throw pp(),Error(t(418));for(;s;)dp(i,s),s=xr(s.nextSibling)}if(fp(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Yn=xr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Yn=null}}else Yn=jn?xr(i.stateNode.nextSibling):null;return!0}function pp(){for(var i=Yn;i;)i=xr(i.nextSibling)}function Us(){Yn=jn=null,Vt=!1}function fc(i){pi===null?pi=[i]:pi.push(i)}var Ny=w.ReactCurrentBatchConfig;function Ho(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var p=d,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(A){var k=p.refs;A===null?delete k[_]:k[_]=A},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function il(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function mp(i){var s=i._init;return s(i._payload)}function gp(i){function s(Z,V){if(i){var ee=Z.deletions;ee===null?(Z.deletions=[V],Z.flags|=16):ee.push(V)}}function l(Z,V){if(!i)return null;for(;V!==null;)s(Z,V),V=V.sibling;return null}function d(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function p(Z,V){return Z=Lr(Z,V),Z.index=0,Z.sibling=null,Z}function _(Z,V,ee){return Z.index=ee,i?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<V?(Z.flags|=2,V):ee):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function A(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function k(Z,V,ee,Ae){return V===null||V.tag!==6?(V=rd(ee,Z.mode,Ae),V.return=Z,V):(V=p(V,ee),V.return=Z,V)}function G(Z,V,ee,Ae){var Ze=ee.type;return Ze===N?Se(Z,V,ee.props.children,Ae,ee.key):V!==null&&(V.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ae&&mp(Ze)===V.type)?(Ae=p(V,ee.props),Ae.ref=Ho(Z,V,ee),Ae.return=Z,Ae):(Ae=bl(ee.type,ee.key,ee.props,null,Z.mode,Ae),Ae.ref=Ho(Z,V,ee),Ae.return=Z,Ae)}function te(Z,V,ee,Ae){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=sd(ee,Z.mode,Ae),V.return=Z,V):(V=p(V,ee.children||[]),V.return=Z,V)}function Se(Z,V,ee,Ae,Ze){return V===null||V.tag!==7?(V=ss(ee,Z.mode,Ae,Ze),V.return=Z,V):(V=p(V,ee),V.return=Z,V)}function Me(Z,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number")return V=rd(""+V,Z.mode,ee),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case U:return ee=bl(V.type,V.key,V.props,null,Z.mode,ee),ee.ref=Ho(Z,null,V),ee.return=Z,ee;case C:return V=sd(V,Z.mode,ee),V.return=Z,V;case ae:var Ae=V._init;return Me(Z,Ae(V._payload),ee)}if(Be(V)||ue(V))return V=ss(V,Z.mode,ee,null),V.return=Z,V;il(Z,V)}return null}function ye(Z,V,ee,Ae){var Ze=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ze!==null?null:k(Z,V,""+ee,Ae);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:return ee.key===Ze?G(Z,V,ee,Ae):null;case C:return ee.key===Ze?te(Z,V,ee,Ae):null;case ae:return Ze=ee._init,ye(Z,V,Ze(ee._payload),Ae)}if(Be(ee)||ue(ee))return Ze!==null?null:Se(Z,V,ee,Ae,null);il(Z,ee)}return null}function ke(Z,V,ee,Ae,Ze){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Z=Z.get(ee)||null,k(V,Z,""+Ae,Ze);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case U:return Z=Z.get(Ae.key===null?ee:Ae.key)||null,G(V,Z,Ae,Ze);case C:return Z=Z.get(Ae.key===null?ee:Ae.key)||null,te(V,Z,Ae,Ze);case ae:var tt=Ae._init;return ke(Z,V,ee,tt(Ae._payload),Ze)}if(Be(Ae)||ue(Ae))return Z=Z.get(ee)||null,Se(V,Z,Ae,Ze,null);il(V,Ae)}return null}function Xe(Z,V,ee,Ae){for(var Ze=null,tt=null,nt=V,lt=V=0,hn=null;nt!==null&&lt<ee.length;lt++){nt.index>lt?(hn=nt,nt=null):hn=nt.sibling;var bt=ye(Z,nt,ee[lt],Ae);if(bt===null){nt===null&&(nt=hn);break}i&&nt&&bt.alternate===null&&s(Z,nt),V=_(bt,V,lt),tt===null?Ze=bt:tt.sibling=bt,tt=bt,nt=hn}if(lt===ee.length)return l(Z,nt),Vt&&Zr(Z,lt),Ze;if(nt===null){for(;lt<ee.length;lt++)nt=Me(Z,ee[lt],Ae),nt!==null&&(V=_(nt,V,lt),tt===null?Ze=nt:tt.sibling=nt,tt=nt);return Vt&&Zr(Z,lt),Ze}for(nt=d(Z,nt);lt<ee.length;lt++)hn=ke(nt,Z,lt,ee[lt],Ae),hn!==null&&(i&&hn.alternate!==null&&nt.delete(hn.key===null?lt:hn.key),V=_(hn,V,lt),tt===null?Ze=hn:tt.sibling=hn,tt=hn);return i&&nt.forEach(function(Dr){return s(Z,Dr)}),Vt&&Zr(Z,lt),Ze}function Ye(Z,V,ee,Ae){var Ze=ue(ee);if(typeof Ze!="function")throw Error(t(150));if(ee=Ze.call(ee),ee==null)throw Error(t(151));for(var tt=Ze=null,nt=V,lt=V=0,hn=null,bt=ee.next();nt!==null&&!bt.done;lt++,bt=ee.next()){nt.index>lt?(hn=nt,nt=null):hn=nt.sibling;var Dr=ye(Z,nt,bt.value,Ae);if(Dr===null){nt===null&&(nt=hn);break}i&&nt&&Dr.alternate===null&&s(Z,nt),V=_(Dr,V,lt),tt===null?Ze=Dr:tt.sibling=Dr,tt=Dr,nt=hn}if(bt.done)return l(Z,nt),Vt&&Zr(Z,lt),Ze;if(nt===null){for(;!bt.done;lt++,bt=ee.next())bt=Me(Z,bt.value,Ae),bt!==null&&(V=_(bt,V,lt),tt===null?Ze=bt:tt.sibling=bt,tt=bt);return Vt&&Zr(Z,lt),Ze}for(nt=d(Z,nt);!bt.done;lt++,bt=ee.next())bt=ke(nt,Z,lt,bt.value,Ae),bt!==null&&(i&&bt.alternate!==null&&nt.delete(bt.key===null?lt:bt.key),V=_(bt,V,lt),tt===null?Ze=bt:tt.sibling=bt,tt=bt);return i&&nt.forEach(function(h0){return s(Z,h0)}),Vt&&Zr(Z,lt),Ze}function Kt(Z,V,ee,Ae){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:e:{for(var Ze=ee.key,tt=V;tt!==null;){if(tt.key===Ze){if(Ze=ee.type,Ze===N){if(tt.tag===7){l(Z,tt.sibling),V=p(tt,ee.props.children),V.return=Z,Z=V;break e}}else if(tt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ae&&mp(Ze)===tt.type){l(Z,tt.sibling),V=p(tt,ee.props),V.ref=Ho(Z,tt,ee),V.return=Z,Z=V;break e}l(Z,tt);break}else s(Z,tt);tt=tt.sibling}ee.type===N?(V=ss(ee.props.children,Z.mode,Ae,ee.key),V.return=Z,Z=V):(Ae=bl(ee.type,ee.key,ee.props,null,Z.mode,Ae),Ae.ref=Ho(Z,V,ee),Ae.return=Z,Z=Ae)}return A(Z);case C:e:{for(tt=ee.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){l(Z,V.sibling),V=p(V,ee.children||[]),V.return=Z,Z=V;break e}else{l(Z,V);break}else s(Z,V);V=V.sibling}V=sd(ee,Z.mode,Ae),V.return=Z,Z=V}return A(Z);case ae:return tt=ee._init,Kt(Z,V,tt(ee._payload),Ae)}if(Be(ee))return Xe(Z,V,ee,Ae);if(ue(ee))return Ye(Z,V,ee,Ae);il(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,V!==null&&V.tag===6?(l(Z,V.sibling),V=p(V,ee),V.return=Z,Z=V):(l(Z,V),V=rd(ee,Z.mode,Ae),V.return=Z,Z=V),A(Z)):l(Z,V)}return Kt}var Fs=gp(!0),vp=gp(!1),rl=Sr(null),sl=null,ks=null,pc=null;function mc(){pc=ks=sl=null}function gc(i){var s=rl.current;Gt(rl),i._currentValue=s}function vc(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function Os(i,s){sl=i,pc=ks=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(zn=!0),i.firstContext=null)}function ni(i){var s=i._currentValue;if(pc!==i)if(i={context:i,memoizedValue:s,next:null},ks===null){if(sl===null)throw Error(t(308));ks=i,sl.dependencies={lanes:0,firstContext:i}}else ks=ks.next=i;return s}var Qr=null;function _c(i){Qr===null?Qr=[i]:Qr.push(i)}function _p(i,s,l,d){var p=s.interleaved;return p===null?(l.next=l,_c(s)):(l.next=p.next,p.next=l),s.interleaved=l,Wi(i,d)}function Wi(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var wr=!1;function yc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Xi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Tr(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(At&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,Wi(i,l)}return p=d.interleaved,p===null?(s.next=s,_c(d)):(s.next=p.next,p.next=s),d.interleaved=s,Wi(i,l)}function ol(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,un(i,l)}}function xp(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function al(i,s,l,d){var p=i.updateQueue;wr=!1;var _=p.firstBaseUpdate,A=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var G=k,te=G.next;G.next=null,A===null?_=te:A.next=te,A=G;var Se=i.alternate;Se!==null&&(Se=Se.updateQueue,k=Se.lastBaseUpdate,k!==A&&(k===null?Se.firstBaseUpdate=te:k.next=te,Se.lastBaseUpdate=G))}if(_!==null){var Me=p.baseState;A=0,Se=te=G=null,k=_;do{var ye=k.lane,ke=k.eventTime;if((d&ye)===ye){Se!==null&&(Se=Se.next={eventTime:ke,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Xe=i,Ye=k;switch(ye=s,ke=l,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){Me=Xe.call(ke,Me,ye);break e}Me=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,ye=typeof Xe=="function"?Xe.call(ke,Me,ye):Xe,ye==null)break e;Me=re({},Me,ye);break e;case 2:wr=!0}}k.callback!==null&&k.lane!==0&&(i.flags|=64,ye=p.effects,ye===null?p.effects=[k]:ye.push(k))}else ke={eventTime:ke,lane:ye,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Se===null?(te=Se=ke,G=Me):Se=Se.next=ke,A|=ye;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;ye=k,k=ye.next,ye.next=null,p.lastBaseUpdate=ye,p.shared.pending=null}}while(!0);if(Se===null&&(G=Me),p.baseState=G,p.firstBaseUpdate=te,p.lastBaseUpdate=Se,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ts|=A,i.lanes=A,i.memoizedState=Me}}function Sp(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Vo={},Di=Sr(Vo),Wo=Sr(Vo),Xo=Sr(Vo);function Jr(i){if(i===Vo)throw Error(t(174));return i}function xc(i,s){switch(Ot(Xo,s),Ot(Wo,i),Ot(Di,Vo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:We(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=We(s,i)}Gt(Di),Ot(Di,s)}function zs(){Gt(Di),Gt(Wo),Gt(Xo)}function Ep(i){Jr(Xo.current);var s=Jr(Di.current),l=We(s,i.type);s!==l&&(Ot(Wo,i),Ot(Di,l))}function Sc(i){Wo.current===i&&(Gt(Di),Gt(Wo))}var Wt=Sr(0);function ll(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ec=[];function Mc(){for(var i=0;i<Ec.length;i++)Ec[i]._workInProgressVersionPrimary=null;Ec.length=0}var ul=w.ReactCurrentDispatcher,wc=w.ReactCurrentBatchConfig,es=0,Xt=null,nn=null,cn=null,cl=!1,$o=!1,jo=0,Iy=0;function Sn(){throw Error(t(321))}function Tc(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!fi(i[l],s[l]))return!1;return!0}function Ac(i,s,l,d,p,_){if(es=_,Xt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ul.current=i===null||i.memoizedState===null?Oy:zy,i=l(d,p),$o){_=0;do{if($o=!1,jo=0,25<=_)throw Error(t(301));_+=1,cn=nn=null,s.updateQueue=null,ul.current=By,i=l(d,p)}while($o)}if(ul.current=fl,s=nn!==null&&nn.next!==null,es=0,cn=nn=Xt=null,cl=!1,s)throw Error(t(300));return i}function bc(){var i=jo!==0;return jo=0,i}function Ni(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Xt.memoizedState=cn=i:cn=cn.next=i,cn}function ii(){if(nn===null){var i=Xt.alternate;i=i!==null?i.memoizedState:null}else i=nn.next;var s=cn===null?Xt.memoizedState:cn.next;if(s!==null)cn=s,nn=i;else{if(i===null)throw Error(t(310));nn=i,i={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},cn===null?Xt.memoizedState=cn=i:cn=cn.next=i}return cn}function Yo(i,s){return typeof s=="function"?s(i):s}function Rc(i){var s=ii(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=nn,p=d.baseQueue,_=l.pending;if(_!==null){if(p!==null){var A=p.next;p.next=_.next,_.next=A}d.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,d=d.baseState;var k=A=null,G=null,te=_;do{var Se=te.lane;if((es&Se)===Se)G!==null&&(G=G.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),d=te.hasEagerState?te.eagerState:i(d,te.action);else{var Me={lane:Se,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};G===null?(k=G=Me,A=d):G=G.next=Me,Xt.lanes|=Se,ts|=Se}te=te.next}while(te!==null&&te!==_);G===null?A=d:G.next=k,fi(d,s.memoizedState)||(zn=!0),s.memoizedState=d,s.baseState=A,s.baseQueue=G,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do _=p.lane,Xt.lanes|=_,ts|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Cc(i){var s=ii(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do _=i(_,A.action),A=A.next;while(A!==p);fi(_,s.memoizedState)||(zn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,d]}function Mp(){}function wp(i,s){var l=Xt,d=ii(),p=s(),_=!fi(d.memoizedState,p);if(_&&(d.memoizedState=p,zn=!0),d=d.queue,Pc(bp.bind(null,l,d,i),[i]),d.getSnapshot!==s||_||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,qo(9,Ap.bind(null,l,d,p,s),void 0,null),dn===null)throw Error(t(349));(es&30)!==0||Tp(l,s,p)}return p}function Tp(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Ap(i,s,l,d){s.value=l,s.getSnapshot=d,Rp(s)&&Cp(i)}function bp(i,s,l){return l(function(){Rp(s)&&Cp(i)})}function Rp(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!fi(i,l)}catch{return!0}}function Cp(i){var s=Wi(i,1);s!==null&&_i(s,i,1,-1)}function Pp(i){var s=Ni();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:i},s.queue=i,i=i.dispatch=ky.bind(null,Xt,i),[s.memoizedState,i]}function qo(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=Xt.updateQueue,s===null?(s={lastEffect:null,stores:null},Xt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function Lp(){return ii().memoizedState}function dl(i,s,l,d){var p=Ni();Xt.flags|=i,p.memoizedState=qo(1|s,l,void 0,d===void 0?null:d)}function hl(i,s,l,d){var p=ii();d=d===void 0?null:d;var _=void 0;if(nn!==null){var A=nn.memoizedState;if(_=A.destroy,d!==null&&Tc(d,A.deps)){p.memoizedState=qo(s,l,_,d);return}}Xt.flags|=i,p.memoizedState=qo(1|s,l,_,d)}function Dp(i,s){return dl(8390656,8,i,s)}function Pc(i,s){return hl(2048,8,i,s)}function Np(i,s){return hl(4,2,i,s)}function Ip(i,s){return hl(4,4,i,s)}function Up(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Fp(i,s,l){return l=l!=null?l.concat([i]):null,hl(4,4,Up.bind(null,s,i),l)}function Lc(){}function kp(i,s){var l=ii();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Tc(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function Op(i,s){var l=ii();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Tc(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function zp(i,s,l){return(es&21)===0?(i.baseState&&(i.baseState=!1,zn=!0),i.memoizedState=l):(fi(l,s)||(l=kt(),Xt.lanes|=l,ts|=l,i.baseState=!0),s)}function Uy(i,s){var l=Tt;Tt=l!==0&&4>l?l:4,i(!0);var d=wc.transition;wc.transition={};try{i(!1),s()}finally{Tt=l,wc.transition=d}}function Bp(){return ii().memoizedState}function Fy(i,s,l){var d=Cr(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Gp(i))Hp(s,l);else if(l=_p(i,s,l,d),l!==null){var p=Nn();_i(l,i,d,p),Vp(l,s,d)}}function ky(i,s,l){var d=Cr(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Gp(i))Hp(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var A=s.lastRenderedState,k=_(A,l);if(p.hasEagerState=!0,p.eagerState=k,fi(k,A)){var G=s.interleaved;G===null?(p.next=p,_c(s)):(p.next=G.next,G.next=p),s.interleaved=p;return}}catch{}finally{}l=_p(i,s,p,d),l!==null&&(p=Nn(),_i(l,i,d,p),Vp(l,s,d))}}function Gp(i){var s=i.alternate;return i===Xt||s!==null&&s===Xt}function Hp(i,s){$o=cl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Vp(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,un(i,l)}}var fl={readContext:ni,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},Oy={readContext:ni,useCallback:function(i,s){return Ni().memoizedState=[i,s===void 0?null:s],i},useContext:ni,useEffect:Dp,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,dl(4194308,4,Up.bind(null,s,i),l)},useLayoutEffect:function(i,s){return dl(4194308,4,i,s)},useInsertionEffect:function(i,s){return dl(4,2,i,s)},useMemo:function(i,s){var l=Ni();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=Ni();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=Fy.bind(null,Xt,i),[d.memoizedState,i]},useRef:function(i){var s=Ni();return i={current:i},s.memoizedState=i},useState:Pp,useDebugValue:Lc,useDeferredValue:function(i){return Ni().memoizedState=i},useTransition:function(){var i=Pp(!1),s=i[0];return i=Uy.bind(null,i[1]),Ni().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=Xt,p=Ni();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),dn===null)throw Error(t(349));(es&30)!==0||Tp(d,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,Dp(bp.bind(null,d,_,i),[i]),d.flags|=2048,qo(9,Ap.bind(null,d,_,l,s),void 0,null),l},useId:function(){var i=Ni(),s=dn.identifierPrefix;if(Vt){var l=Vi,d=Hi;l=(d&~(1<<32-ft(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=jo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=Iy++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},zy={readContext:ni,useCallback:kp,useContext:ni,useEffect:Pc,useImperativeHandle:Fp,useInsertionEffect:Np,useLayoutEffect:Ip,useMemo:Op,useReducer:Rc,useRef:Lp,useState:function(){return Rc(Yo)},useDebugValue:Lc,useDeferredValue:function(i){var s=ii();return zp(s,nn.memoizedState,i)},useTransition:function(){var i=Rc(Yo)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Mp,useSyncExternalStore:wp,useId:Bp,unstable_isNewReconciler:!1},By={readContext:ni,useCallback:kp,useContext:ni,useEffect:Pc,useImperativeHandle:Fp,useInsertionEffect:Np,useLayoutEffect:Ip,useMemo:Op,useReducer:Cc,useRef:Lp,useState:function(){return Cc(Yo)},useDebugValue:Lc,useDeferredValue:function(i){var s=ii();return nn===null?s.memoizedState=i:zp(s,nn.memoizedState,i)},useTransition:function(){var i=Cc(Yo)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Mp,useSyncExternalStore:wp,useId:Bp,unstable_isNewReconciler:!1};function mi(i,s){if(i&&i.defaultProps){s=re({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Dc(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:re({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var pl={isMounted:function(i){return(i=i._reactInternals)?Ci(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=Nn(),p=Cr(i),_=Xi(d,p);_.payload=s,l!=null&&(_.callback=l),s=Tr(i,_,p),s!==null&&(_i(s,i,p,d),ol(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=Nn(),p=Cr(i),_=Xi(d,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Tr(i,_,p),s!==null&&(_i(s,i,p,d),ol(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Nn(),d=Cr(i),p=Xi(l,d);p.tag=2,s!=null&&(p.callback=s),s=Tr(i,p,d),s!==null&&(_i(s,i,d,l),ol(s,i,d))}};function Wp(i,s,l,d,p,_,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,A):s.prototype&&s.prototype.isPureReactComponent?!Uo(l,d)||!Uo(p,_):!0}function Xp(i,s,l){var d=!1,p=Er,_=s.contextType;return typeof _=="object"&&_!==null?_=ni(_):(p=On(s)?qr:xn.current,d=s.contextTypes,_=(d=d!=null)?Ds(i,p):Er),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pl,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function $p(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&pl.enqueueReplaceState(s,s.state,null)}function Nc(i,s,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},yc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ni(_):(_=On(s)?qr:xn.current,p.context=Ds(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Dc(i,s,_,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&pl.enqueueReplaceState(p,p.state,null),al(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Bs(i,s){try{var l="",d=s;do l+=se(d),d=d.return;while(d);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Ic(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Uc(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function jp(i,s,l){l=Xi(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Sl||(Sl=!0,Kc=d),Uc(i,s)},l}function Yp(i,s,l){l=Xi(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;l.payload=function(){return d(p)},l.callback=function(){Uc(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Uc(i,s),typeof d!="function"&&(br===null?br=new Set([this]):br.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function qp(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new Gy;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(l)||(p.add(l),i=t0.bind(null,i,s,l),s.then(i,i))}function Kp(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Zp(i,s,l,d,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Xi(-1,1),s.tag=2,Tr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var Hy=w.ReactCurrentOwner,zn=!1;function Dn(i,s,l,d){s.child=i===null?vp(s,null,l,d):Fs(s,i.child,l,d)}function Qp(i,s,l,d,p){l=l.render;var _=s.ref;return Os(s,p),d=Ac(i,s,l,d,_,p),l=bc(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$i(i,s,p)):(Vt&&l&&uc(s),s.flags|=1,Dn(i,s,d,p),s.child)}function Jp(i,s,l,d,p){if(i===null){var _=l.type;return typeof _=="function"&&!id(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,em(i,s,_,d,p)):(i=bl(l.type,null,d,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:Uo,l(A,d)&&i.ref===s.ref)return $i(i,s,p)}return s.flags|=1,i=Lr(_,d),i.ref=s.ref,i.return=s,s.child=i}function em(i,s,l,d,p){if(i!==null){var _=i.memoizedProps;if(Uo(_,d)&&i.ref===s.ref)if(zn=!1,s.pendingProps=d=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(zn=!0);else return s.lanes=i.lanes,$i(i,s,p)}return Fc(i,s,l,d,p)}function tm(i,s,l){var d=s.pendingProps,p=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Hs,qn),qn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ot(Hs,qn),qn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,Ot(Hs,qn),qn|=d}else _!==null?(d=_.baseLanes|l,s.memoizedState=null):d=l,Ot(Hs,qn),qn|=d;return Dn(i,s,p,l),s.child}function nm(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Fc(i,s,l,d,p){var _=On(l)?qr:xn.current;return _=Ds(s,_),Os(s,p),l=Ac(i,s,l,d,_,p),d=bc(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$i(i,s,p)):(Vt&&d&&uc(s),s.flags|=1,Dn(i,s,l,p),s.child)}function im(i,s,l,d,p){if(On(l)){var _=!0;Qa(s)}else _=!1;if(Os(s,p),s.stateNode===null)gl(i,s),Xp(s,l,d),Nc(s,l,d,p),d=!0;else if(i===null){var A=s.stateNode,k=s.memoizedProps;A.props=k;var G=A.context,te=l.contextType;typeof te=="object"&&te!==null?te=ni(te):(te=On(l)?qr:xn.current,te=Ds(s,te));var Se=l.getDerivedStateFromProps,Me=typeof Se=="function"||typeof A.getSnapshotBeforeUpdate=="function";Me||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==d||G!==te)&&$p(s,A,d,te),wr=!1;var ye=s.memoizedState;A.state=ye,al(s,d,A,p),G=s.memoizedState,k!==d||ye!==G||kn.current||wr?(typeof Se=="function"&&(Dc(s,l,Se,d),G=s.memoizedState),(k=wr||Wp(s,l,k,d,ye,G,te))?(Me||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=G),A.props=d,A.state=G,A.context=te,d=k):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{A=s.stateNode,yp(i,s),k=s.memoizedProps,te=s.type===s.elementType?k:mi(s.type,k),A.props=te,Me=s.pendingProps,ye=A.context,G=l.contextType,typeof G=="object"&&G!==null?G=ni(G):(G=On(l)?qr:xn.current,G=Ds(s,G));var ke=l.getDerivedStateFromProps;(Se=typeof ke=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==Me||ye!==G)&&$p(s,A,d,G),wr=!1,ye=s.memoizedState,A.state=ye,al(s,d,A,p);var Xe=s.memoizedState;k!==Me||ye!==Xe||kn.current||wr?(typeof ke=="function"&&(Dc(s,l,ke,d),Xe=s.memoizedState),(te=wr||Wp(s,l,te,d,ye,Xe,G)||!1)?(Se||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,Xe,G),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,Xe,G)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=Xe),A.props=d,A.state=Xe,A.context=G,d=te):(typeof A.componentDidUpdate!="function"||k===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),d=!1)}return kc(i,s,l,d,_,p)}function kc(i,s,l,d,p,_){nm(i,s);var A=(s.flags&128)!==0;if(!d&&!A)return p&&lp(s,l,!1),$i(i,s,_);d=s.stateNode,Hy.current=s;var k=A&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&A?(s.child=Fs(s,i.child,null,_),s.child=Fs(s,null,k,_)):Dn(i,s,k,_),s.memoizedState=d.state,p&&lp(s,l,!0),s.child}function rm(i){var s=i.stateNode;s.pendingContext?op(i,s.pendingContext,s.pendingContext!==s.context):s.context&&op(i,s.context,!1),xc(i,s.containerInfo)}function sm(i,s,l,d,p){return Us(),fc(p),s.flags|=256,Dn(i,s,l,d),s.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function zc(i){return{baseLanes:i,cachePool:null,transitions:null}}function om(i,s,l){var d=s.pendingProps,p=Wt.current,_=!1,A=(s.flags&128)!==0,k;if((k=A)||(k=i!==null&&i.memoizedState===null?!1:(p&2)!==0),k?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ot(Wt,p&1),i===null)return hc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=d.children,i=d.fallback,_?(d=s.mode,_=s.child,A={mode:"hidden",children:A},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Rl(A,d,0,null),i=ss(i,d,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=zc(l),s.memoizedState=Oc,i):Bc(s,A));if(p=i.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return Vy(i,s,A,d,k,p,l);if(_){_=d.fallback,A=s.mode,p=i.child,k=p.sibling;var G={mode:"hidden",children:d.children};return(A&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=G,s.deletions=null):(d=Lr(p,G),d.subtreeFlags=p.subtreeFlags&14680064),k!==null?_=Lr(k,_):(_=ss(_,A,l,null),_.flags|=2),_.return=s,d.return=s,d.sibling=_,s.child=d,d=_,_=s.child,A=i.child.memoizedState,A=A===null?zc(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=i.childLanes&~l,s.memoizedState=Oc,d}return _=i.child,i=_.sibling,d=Lr(_,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function Bc(i,s){return s=Rl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function ml(i,s,l,d){return d!==null&&fc(d),Fs(s,i.child,null,l),i=Bc(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function Vy(i,s,l,d,p,_,A){if(l)return s.flags&256?(s.flags&=-257,d=Ic(Error(t(422))),ml(i,s,A,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=d.fallback,p=s.mode,d=Rl({mode:"visible",children:d.children},p,0,null),_=ss(_,p,A,null),_.flags|=2,d.return=s,_.return=s,d.sibling=_,s.child=d,(s.mode&1)!==0&&Fs(s,i.child,null,A),s.child.memoizedState=zc(A),s.memoizedState=Oc,_);if((s.mode&1)===0)return ml(i,s,A,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var k=d.dgst;return d=k,_=Error(t(419)),d=Ic(_,d,void 0),ml(i,s,A,d)}if(k=(A&i.childLanes)!==0,zn||k){if(d=dn,d!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|A))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Wi(i,p),_i(d,i,p,-1))}return nd(),d=Ic(Error(t(421))),ml(i,s,A,d)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=n0.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,Yn=xr(p.nextSibling),jn=s,Vt=!0,pi=null,i!==null&&(ei[ti++]=Hi,ei[ti++]=Vi,ei[ti++]=Kr,Hi=i.id,Vi=i.overflow,Kr=s),s=Bc(s,d.children),s.flags|=4096,s)}function am(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),vc(i.return,s,l)}function Gc(i,s,l,d,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=p)}function lm(i,s,l){var d=s.pendingProps,p=d.revealOrder,_=d.tail;if(Dn(i,s,d.children,l),d=Wt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&am(i,l,s);else if(i.tag===19)am(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Ot(Wt,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&ll(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Gc(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&ll(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Gc(s,!0,l,null,_);break;case"together":Gc(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function gl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $i(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ts|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Lr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Lr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function Wy(i,s,l){switch(s.tag){case 3:rm(s),Us();break;case 5:Ep(s);break;case 1:On(s.type)&&Qa(s);break;case 4:xc(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;Ot(rl,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Ot(Wt,Wt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?om(i,s,l):(Ot(Wt,Wt.current&1),i=$i(i,s,l),i!==null?i.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return lm(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ot(Wt,Wt.current),d)break;return null;case 22:case 23:return s.lanes=0,tm(i,s,l)}return $i(i,s,l)}var um,Hc,cm,dm;um=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Hc=function(){},cm=function(i,s,l,d){var p=i.memoizedProps;if(p!==d){i=s.stateNode,Jr(Di.current);var _=null;switch(l){case"input":p=B(i,p),d=B(i,d),_=[];break;case"select":p=re({},p,{value:void 0}),d=re({},d,{value:void 0}),_=[];break;case"textarea":p=b(i,p),d=b(i,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=qa)}vt(l,d);var A;l=null;for(te in p)if(!d.hasOwnProperty(te)&&p.hasOwnProperty(te)&&p[te]!=null)if(te==="style"){var k=p[te];for(A in k)k.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?_||(_=[]):(_=_||[]).push(te,null));for(te in d){var G=d[te];if(k=p!=null?p[te]:void 0,d.hasOwnProperty(te)&&G!==k&&(G!=null||k!=null))if(te==="style")if(k){for(A in k)!k.hasOwnProperty(A)||G&&G.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in G)G.hasOwnProperty(A)&&k[A]!==G[A]&&(l||(l={}),l[A]=G[A])}else l||(_||(_=[]),_.push(te,l)),l=G;else te==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,k=k?k.__html:void 0,G!=null&&k!==G&&(_=_||[]).push(te,G)):te==="children"?typeof G!="string"&&typeof G!="number"||(_=_||[]).push(te,""+G):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(G!=null&&te==="onScroll"&&Bt("scroll",i),_||k===G||(_=[])):(_=_||[]).push(te,G))}l&&(_=_||[]).push("style",l);var te=_;(s.updateQueue=te)&&(s.flags|=4)}},dm=function(i,s,l,d){l!==d&&(s.flags|=4)};function Ko(i,s){if(!Vt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function En(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function Xy(i,s,l){var d=s.pendingProps;switch(cc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(s),null;case 1:return On(s.type)&&Za(),En(s),null;case 3:return d=s.stateNode,zs(),Gt(kn),Gt(xn),Mc(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(nl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,pi!==null&&(Jc(pi),pi=null))),Hc(i,s),En(s),null;case 5:Sc(s);var p=Jr(Xo.current);if(l=s.type,i!==null&&s.stateNode!=null)cm(i,s,l,d,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return En(s),null}if(i=Jr(Di.current),nl(s)){d=s.stateNode,l=s.type;var _=s.memoizedProps;switch(d[Li]=s,d[Bo]=_,i=(s.mode&1)!==0,l){case"dialog":Bt("cancel",d),Bt("close",d);break;case"iframe":case"object":case"embed":Bt("load",d);break;case"video":case"audio":for(p=0;p<ko.length;p++)Bt(ko[p],d);break;case"source":Bt("error",d);break;case"img":case"image":case"link":Bt("error",d),Bt("load",d);break;case"details":Bt("toggle",d);break;case"input":Qt(d,_),Bt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Bt("invalid",d);break;case"textarea":J(d,_),Bt("invalid",d)}vt(l,_),p=null;for(var A in _)if(_.hasOwnProperty(A)){var k=_[A];A==="children"?typeof k=="string"?d.textContent!==k&&(_.suppressHydrationWarning!==!0&&Ya(d.textContent,k,i),p=["children",k]):typeof k=="number"&&d.textContent!==""+k&&(_.suppressHydrationWarning!==!0&&Ya(d.textContent,k,i),p=["children",""+k]):o.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&Bt("scroll",d)}switch(l){case"input":Pt(d),qe(d,_,!0);break;case"textarea":Pt(d),_e(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=qa)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=A.createElement(l,{is:d.is}):(i=A.createElement(l),l==="select"&&(A=i,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):i=A.createElementNS(i,l),i[Li]=s,i[Bo]=d,um(i,s,!1,!1),s.stateNode=i;e:{switch(A=ct(l,d),l){case"dialog":Bt("cancel",i),Bt("close",i),p=d;break;case"iframe":case"object":case"embed":Bt("load",i),p=d;break;case"video":case"audio":for(p=0;p<ko.length;p++)Bt(ko[p],i);p=d;break;case"source":Bt("error",i),p=d;break;case"img":case"image":case"link":Bt("error",i),Bt("load",i),p=d;break;case"details":Bt("toggle",i),p=d;break;case"input":Qt(i,d),p=B(i,d),Bt("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=re({},d,{value:void 0}),Bt("invalid",i);break;case"textarea":J(i,d),p=b(i,d),Bt("invalid",i);break;default:p=d}vt(l,p),k=p;for(_ in k)if(k.hasOwnProperty(_)){var G=k[_];_==="style"?ot(i,G):_==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&et(i,G)):_==="children"?typeof G=="string"?(l!=="textarea"||G!=="")&&Je(i,G):typeof G=="number"&&Je(i,""+G):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?G!=null&&_==="onScroll"&&Bt("scroll",i):G!=null&&L(i,_,G,A))}switch(l){case"input":Pt(i),qe(i,d,!1);break;case"textarea":Pt(i),_e(i);break;case"option":d.value!=null&&i.setAttribute("value",""+be(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?F(i,!!d.multiple,_,!1):d.defaultValue!=null&&F(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=qa)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return En(s),null;case 6:if(i&&s.stateNode!=null)dm(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=Jr(Xo.current),Jr(Di.current),nl(s)){if(d=s.stateNode,l=s.memoizedProps,d[Li]=s,(_=d.nodeValue!==l)&&(i=jn,i!==null))switch(i.tag){case 3:Ya(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ya(d.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Li]=s,s.stateNode=d}return En(s),null;case 13:if(Gt(Wt),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Vt&&Yn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)pp(),Us(),s.flags|=98560,_=!1;else if(_=nl(s),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Li]=s}else Us(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;En(s),_=!1}else pi!==null&&(Jc(pi),pi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Wt.current&1)!==0?rn===0&&(rn=3):nd())),s.updateQueue!==null&&(s.flags|=4),En(s),null);case 4:return zs(),Hc(i,s),i===null&&Oo(s.stateNode.containerInfo),En(s),null;case 10:return gc(s.type._context),En(s),null;case 17:return On(s.type)&&Za(),En(s),null;case 19:if(Gt(Wt),_=s.memoizedState,_===null)return En(s),null;if(d=(s.flags&128)!==0,A=_.rendering,A===null)if(d)Ko(_,!1);else{if(rn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=ll(i),A!==null){for(s.flags|=128,Ko(_,!1),d=A.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)_=l,i=d,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,i=A.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ot(Wt,Wt.current&1|2),s.child}i=i.sibling}_.tail!==null&&Q()>Vs&&(s.flags|=128,d=!0,Ko(_,!1),s.lanes=4194304)}else{if(!d)if(i=ll(A),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ko(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!Vt)return En(s),null}else 2*Q()-_.renderingStartTime>Vs&&l!==1073741824&&(s.flags|=128,d=!0,Ko(_,!1),s.lanes=4194304);_.isBackwards?(A.sibling=s.child,s.child=A):(l=_.last,l!==null?l.sibling=A:s.child=A,_.last=A)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Q(),s.sibling=null,l=Wt.current,Ot(Wt,d?l&1|2:l&1),s):(En(s),null);case 22:case 23:return td(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(qn&1073741824)!==0&&(En(s),s.subtreeFlags&6&&(s.flags|=8192)):En(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function $y(i,s){switch(cc(s),s.tag){case 1:return On(s.type)&&Za(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return zs(),Gt(kn),Gt(xn),Mc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Sc(s),null;case 13:if(Gt(Wt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Us()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Gt(Wt),null;case 4:return zs(),null;case 10:return gc(s.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var vl=!1,Mn=!1,jy=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Gs(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){qt(i,s,d)}else l.current=null}function Vc(i,s,l){try{l()}catch(d){qt(i,s,d)}}var hm=!1;function Yy(i,s){if(tc=ka,i=Wf(),ju(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,k=-1,G=-1,te=0,Se=0,Me=i,ye=null;t:for(;;){for(var ke;Me!==l||p!==0&&Me.nodeType!==3||(k=A+p),Me!==_||d!==0&&Me.nodeType!==3||(G=A+d),Me.nodeType===3&&(A+=Me.nodeValue.length),(ke=Me.firstChild)!==null;)ye=Me,Me=ke;for(;;){if(Me===i)break t;if(ye===l&&++te===p&&(k=A),ye===_&&++Se===d&&(G=A),(ke=Me.nextSibling)!==null)break;Me=ye,ye=Me.parentNode}Me=ke}l=k===-1||G===-1?null:{start:k,end:G}}else l=null}l=l||{start:0,end:0}}else l=null;for(nc={focusedElem:i,selectionRange:l},ka=!1,ze=s;ze!==null;)if(s=ze,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ze=i;else for(;ze!==null;){s=ze;try{var Xe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,Kt=Xe.memoizedState,Z=s.stateNode,V=Z.getSnapshotBeforeUpdate(s.elementType===s.type?Ye:mi(s.type,Ye),Kt);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ee=s.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){qt(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,ze=i;break}ze=s.return}return Xe=hm,hm=!1,Xe}function Zo(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Vc(s,l,_)}p=p.next}while(p!==d)}}function _l(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Wc(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function fm(i){var s=i.alternate;s!==null&&(i.alternate=null,fm(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Li],delete s[Bo],delete s[oc],delete s[Py],delete s[Ly])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function pm(i){return i.tag===5||i.tag===3||i.tag===4}function mm(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||pm(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Xc(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=qa));else if(d!==4&&(i=i.child,i!==null))for(Xc(i,s,l),i=i.sibling;i!==null;)Xc(i,s,l),i=i.sibling}function $c(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for($c(i,s,l),i=i.sibling;i!==null;)$c(i,s,l),i=i.sibling}var mn=null,gi=!1;function Ar(i,s,l){for(l=l.child;l!==null;)gm(i,s,l),l=l.sibling}function gm(i,s,l){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(it,l)}catch{}switch(l.tag){case 5:Mn||Gs(l,s);case 6:var d=mn,p=gi;mn=null,Ar(i,s,l),mn=d,gi=p,mn!==null&&(gi?(i=mn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):mn.removeChild(l.stateNode));break;case 18:mn!==null&&(gi?(i=mn,l=l.stateNode,i.nodeType===8?sc(i.parentNode,l):i.nodeType===1&&sc(i,l),Co(i)):sc(mn,l.stateNode));break;case 4:d=mn,p=gi,mn=l.stateNode.containerInfo,gi=!0,Ar(i,s,l),mn=d,gi=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&Vc(l,s,A),p=p.next}while(p!==d)}Ar(i,s,l);break;case 1:if(!Mn&&(Gs(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(k){qt(l,s,k)}Ar(i,s,l);break;case 21:Ar(i,s,l);break;case 22:l.mode&1?(Mn=(d=Mn)||l.memoizedState!==null,Ar(i,s,l),Mn=d):Ar(i,s,l);break;default:Ar(i,s,l)}}function vm(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new jy),s.forEach(function(d){var p=i0.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function vi(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var _=i,A=s,k=A;e:for(;k!==null;){switch(k.tag){case 5:mn=k.stateNode,gi=!1;break e;case 3:mn=k.stateNode.containerInfo,gi=!0;break e;case 4:mn=k.stateNode.containerInfo,gi=!0;break e}k=k.return}if(mn===null)throw Error(t(160));gm(_,A,p),mn=null,gi=!1;var G=p.alternate;G!==null&&(G.return=null),p.return=null}catch(te){qt(p,s,te)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)_m(s,i),s=s.sibling}function _m(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(vi(s,i),Ii(i),d&4){try{Zo(3,i,i.return),_l(3,i)}catch(Ye){qt(i,i.return,Ye)}try{Zo(5,i,i.return)}catch(Ye){qt(i,i.return,Ye)}}break;case 1:vi(s,i),Ii(i),d&512&&l!==null&&Gs(l,l.return);break;case 5:if(vi(s,i),Ii(i),d&512&&l!==null&&Gs(l,l.return),i.flags&32){var p=i.stateNode;try{Je(p,"")}catch(Ye){qt(i,i.return,Ye)}}if(d&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,A=l!==null?l.memoizedProps:_,k=i.type,G=i.updateQueue;if(i.updateQueue=null,G!==null)try{k==="input"&&_.type==="radio"&&_.name!=null&&pt(p,_),ct(k,A);var te=ct(k,_);for(A=0;A<G.length;A+=2){var Se=G[A],Me=G[A+1];Se==="style"?ot(p,Me):Se==="dangerouslySetInnerHTML"?et(p,Me):Se==="children"?Je(p,Me):L(p,Se,Me,te)}switch(k){case"input":ht(p,_);break;case"textarea":fe(p,_);break;case"select":var ye=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var ke=_.value;ke!=null?F(p,!!_.multiple,ke,!1):ye!==!!_.multiple&&(_.defaultValue!=null?F(p,!!_.multiple,_.defaultValue,!0):F(p,!!_.multiple,_.multiple?[]:"",!1))}p[Bo]=_}catch(Ye){qt(i,i.return,Ye)}}break;case 6:if(vi(s,i),Ii(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(Ye){qt(i,i.return,Ye)}}break;case 3:if(vi(s,i),Ii(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Co(s.containerInfo)}catch(Ye){qt(i,i.return,Ye)}break;case 4:vi(s,i),Ii(i);break;case 13:vi(s,i),Ii(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(qc=Q())),d&4&&vm(i);break;case 22:if(Se=l!==null&&l.memoizedState!==null,i.mode&1?(Mn=(te=Mn)||Se,vi(s,i),Mn=te):vi(s,i),Ii(i),d&8192){if(te=i.memoizedState!==null,(i.stateNode.isHidden=te)&&!Se&&(i.mode&1)!==0)for(ze=i,Se=i.child;Se!==null;){for(Me=ze=Se;ze!==null;){switch(ye=ze,ke=ye.child,ye.tag){case 0:case 11:case 14:case 15:Zo(4,ye,ye.return);break;case 1:Gs(ye,ye.return);var Xe=ye.stateNode;if(typeof Xe.componentWillUnmount=="function"){d=ye,l=ye.return;try{s=d,Xe.props=s.memoizedProps,Xe.state=s.memoizedState,Xe.componentWillUnmount()}catch(Ye){qt(d,l,Ye)}}break;case 5:Gs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Sm(Me);continue}}ke!==null?(ke.return=ye,ze=ke):Sm(Me)}Se=Se.sibling}e:for(Se=null,Me=i;;){if(Me.tag===5){if(Se===null){Se=Me;try{p=Me.stateNode,te?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(k=Me.stateNode,G=Me.memoizedProps.style,A=G!=null&&G.hasOwnProperty("display")?G.display:null,k.style.display=st("display",A))}catch(Ye){qt(i,i.return,Ye)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=te?"":Me.memoizedProps}catch(Ye){qt(i,i.return,Ye)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:vi(s,i),Ii(i),d&4&&vm(i);break;case 21:break;default:vi(s,i),Ii(i)}}function Ii(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(pm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(Je(p,""),d.flags&=-33);var _=mm(i);$c(i,_,p);break;case 3:case 4:var A=d.stateNode.containerInfo,k=mm(i);Xc(i,k,A);break;default:throw Error(t(161))}}catch(G){qt(i,i.return,G)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function qy(i,s,l){ze=i,ym(i)}function ym(i,s,l){for(var d=(i.mode&1)!==0;ze!==null;){var p=ze,_=p.child;if(p.tag===22&&d){var A=p.memoizedState!==null||vl;if(!A){var k=p.alternate,G=k!==null&&k.memoizedState!==null||Mn;k=vl;var te=Mn;if(vl=A,(Mn=G)&&!te)for(ze=p;ze!==null;)A=ze,G=A.child,A.tag===22&&A.memoizedState!==null?Em(p):G!==null?(G.return=A,ze=G):Em(p);for(;_!==null;)ze=_,ym(_),_=_.sibling;ze=p,vl=k,Mn=te}xm(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ze=_):xm(i)}}function xm(i){for(;ze!==null;){var s=ze;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mn||_l(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Mn)if(l===null)d.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:mi(s.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Sp(s,_,d);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Sp(s,A,l)}break;case 5:var k=s.stateNode;if(l===null&&s.flags&4){l=k;var G=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&l.focus();break;case"img":G.src&&(l.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var te=s.alternate;if(te!==null){var Se=te.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&Co(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||s.flags&512&&Wc(s)}catch(ye){qt(s,s.return,ye)}}if(s===i){ze=null;break}if(l=s.sibling,l!==null){l.return=s.return,ze=l;break}ze=s.return}}function Sm(i){for(;ze!==null;){var s=ze;if(s===i){ze=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ze=l;break}ze=s.return}}function Em(i){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{_l(4,s)}catch(G){qt(s,l,G)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch(G){qt(s,p,G)}}var _=s.return;try{Wc(s)}catch(G){qt(s,_,G)}break;case 5:var A=s.return;try{Wc(s)}catch(G){qt(s,A,G)}}}catch(G){qt(s,s.return,G)}if(s===i){ze=null;break}var k=s.sibling;if(k!==null){k.return=s.return,ze=k;break}ze=s.return}}var Ky=Math.ceil,yl=w.ReactCurrentDispatcher,jc=w.ReactCurrentOwner,ri=w.ReactCurrentBatchConfig,At=0,dn=null,Jt=null,gn=0,qn=0,Hs=Sr(0),rn=0,Qo=null,ts=0,xl=0,Yc=0,Jo=null,Bn=null,qc=0,Vs=1/0,ji=null,Sl=!1,Kc=null,br=null,El=!1,Rr=null,Ml=0,ea=0,Zc=null,wl=-1,Tl=0;function Nn(){return(At&6)!==0?Q():wl!==-1?wl:wl=Q()}function Cr(i){return(i.mode&1)===0?1:(At&2)!==0&&gn!==0?gn&-gn:Ny.transition!==null?(Tl===0&&(Tl=kt()),Tl):(i=Tt,i!==0||(i=window.event,i=i===void 0?16:wf(i.type)),i)}function _i(i,s,l,d){if(50<ea)throw ea=0,Zc=null,Error(t(185));ln(i,l,d),((At&2)===0||i!==dn)&&(i===dn&&((At&2)===0&&(xl|=l),rn===4&&Pr(i,gn)),Gn(i,d),l===1&&At===0&&(s.mode&1)===0&&(Vs=Q()+500,Ja&&Mr()))}function Gn(i,s){var l=i.callbackNode;Ln(i,s);var d=_n(i,i===dn?gn:0);if(d===0)l!==null&&D(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&D(l),s===1)i.tag===0?Dy(wm.bind(null,i)):up(wm.bind(null,i)),Ry(function(){(At&6)===0&&Mr()}),l=null;else{switch(Pi(d)){case 1:l=Te;break;case 4:l=Le;break;case 16:l=Fe;break;case 536870912:l=at;break;default:l=Fe}l=Dm(l,Mm.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Mm(i,s){if(wl=-1,Tl=0,(At&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ws()&&i.callbackNode!==l)return null;var d=_n(i,i===dn?gn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=Al(i,d);else{s=d;var p=At;At|=2;var _=Am();(dn!==i||gn!==s)&&(ji=null,Vs=Q()+500,is(i,s));do try{Jy();break}catch(k){Tm(i,k)}while(!0);mc(),yl.current=_,At=p,Jt!==null?s=0:(dn=null,gn=0,s=rn)}if(s!==0){if(s===2&&(p=zi(i),p!==0&&(d=p,s=Qc(i,p))),s===1)throw l=Qo,is(i,0),Pr(i,d),Gn(i,Q()),l;if(s===6)Pr(i,d);else{if(p=i.current.alternate,(d&30)===0&&!Zy(p)&&(s=Al(i,d),s===2&&(_=zi(i),_!==0&&(d=_,s=Qc(i,_))),s===1))throw l=Qo,is(i,0),Pr(i,d),Gn(i,Q()),l;switch(i.finishedWork=p,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:rs(i,Bn,ji);break;case 3:if(Pr(i,d),(d&130023424)===d&&(s=qc+500-Q(),10<s)){if(_n(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){Nn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=rc(rs.bind(null,i,Bn,ji),s);break}rs(i,Bn,ji);break;case 4:if(Pr(i,d),(d&4194240)===d)break;for(s=i.eventTimes,p=-1;0<d;){var A=31-ft(d);_=1<<A,A=s[A],A>p&&(p=A),d&=~_}if(d=p,d=Q()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Ky(d/1960))-d,10<d){i.timeoutHandle=rc(rs.bind(null,i,Bn,ji),d);break}rs(i,Bn,ji);break;case 5:rs(i,Bn,ji);break;default:throw Error(t(329))}}}return Gn(i,Q()),i.callbackNode===l?Mm.bind(null,i):null}function Qc(i,s){var l=Jo;return i.current.memoizedState.isDehydrated&&(is(i,s).flags|=256),i=Al(i,s),i!==2&&(s=Bn,Bn=l,s!==null&&Jc(s)),i}function Jc(i){Bn===null?Bn=i:Bn.push.apply(Bn,i)}function Zy(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],_=p.getSnapshot;p=p.value;try{if(!fi(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Pr(i,s){for(s&=~Yc,s&=~xl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-ft(s),d=1<<l;i[l]=-1,s&=~d}}function wm(i){if((At&6)!==0)throw Error(t(327));Ws();var s=_n(i,0);if((s&1)===0)return Gn(i,Q()),null;var l=Al(i,s);if(i.tag!==0&&l===2){var d=zi(i);d!==0&&(s=d,l=Qc(i,d))}if(l===1)throw l=Qo,is(i,0),Pr(i,s),Gn(i,Q()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,rs(i,Bn,ji),Gn(i,Q()),null}function ed(i,s){var l=At;At|=1;try{return i(s)}finally{At=l,At===0&&(Vs=Q()+500,Ja&&Mr())}}function ns(i){Rr!==null&&Rr.tag===0&&(At&6)===0&&Ws();var s=At;At|=1;var l=ri.transition,d=Tt;try{if(ri.transition=null,Tt=1,i)return i()}finally{Tt=d,ri.transition=l,At=s,(At&6)===0&&Mr()}}function td(){qn=Hs.current,Gt(Hs)}function is(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,by(l)),Jt!==null)for(l=Jt.return;l!==null;){var d=l;switch(cc(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Za();break;case 3:zs(),Gt(kn),Gt(xn),Mc();break;case 5:Sc(d);break;case 4:zs();break;case 13:Gt(Wt);break;case 19:Gt(Wt);break;case 10:gc(d.type._context);break;case 22:case 23:td()}l=l.return}if(dn=i,Jt=i=Lr(i.current,null),gn=qn=s,rn=0,Qo=null,Yc=xl=ts=0,Bn=Jo=null,Qr!==null){for(s=0;s<Qr.length;s++)if(l=Qr[s],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,_=l.pending;if(_!==null){var A=_.next;_.next=p,d.next=A}l.pending=d}Qr=null}return i}function Tm(i,s){do{var l=Jt;try{if(mc(),ul.current=fl,cl){for(var d=Xt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}cl=!1}if(es=0,cn=nn=Xt=null,$o=!1,jo=0,jc.current=null,l===null||l.return===null){rn=1,Qo=s,Jt=null;break}e:{var _=i,A=l.return,k=l,G=s;if(s=gn,k.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var te=G,Se=k,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var ke=Kp(A);if(ke!==null){ke.flags&=-257,Zp(ke,A,k,_,s),ke.mode&1&&qp(_,te,s),s=ke,G=te;var Xe=s.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(G),s.updateQueue=Ye}else Xe.add(G);break e}else{if((s&1)===0){qp(_,te,s),nd();break e}G=Error(t(426))}}else if(Vt&&k.mode&1){var Kt=Kp(A);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Zp(Kt,A,k,_,s),fc(Bs(G,k));break e}}_=G=Bs(G,k),rn!==4&&(rn=2),Jo===null?Jo=[_]:Jo.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Z=jp(_,G,s);xp(_,Z);break e;case 1:k=G;var V=_.type,ee=_.stateNode;if((_.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(br===null||!br.has(ee)))){_.flags|=65536,s&=-s,_.lanes|=s;var Ae=Yp(_,k,s);xp(_,Ae);break e}}_=_.return}while(_!==null)}Rm(l)}catch(Ze){s=Ze,Jt===l&&l!==null&&(Jt=l=l.return);continue}break}while(!0)}function Am(){var i=yl.current;return yl.current=fl,i===null?fl:i}function nd(){(rn===0||rn===3||rn===2)&&(rn=4),dn===null||(ts&268435455)===0&&(xl&268435455)===0||Pr(dn,gn)}function Al(i,s){var l=At;At|=2;var d=Am();(dn!==i||gn!==s)&&(ji=null,is(i,s));do try{Qy();break}catch(p){Tm(i,p)}while(!0);if(mc(),At=l,yl.current=d,Jt!==null)throw Error(t(261));return dn=null,gn=0,rn}function Qy(){for(;Jt!==null;)bm(Jt)}function Jy(){for(;Jt!==null&&!Y();)bm(Jt)}function bm(i){var s=Lm(i.alternate,i,qn);i.memoizedProps=i.pendingProps,s===null?Rm(i):Jt=s,jc.current=null}function Rm(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=Xy(l,s,qn),l!==null){Jt=l;return}}else{if(l=$y(l,s),l!==null){l.flags&=32767,Jt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{rn=6,Jt=null;return}}if(s=s.sibling,s!==null){Jt=s;return}Jt=s=i}while(s!==null);rn===0&&(rn=5)}function rs(i,s,l){var d=Tt,p=ri.transition;try{ri.transition=null,Tt=1,e0(i,s,l,d)}finally{ri.transition=p,Tt=d}return null}function e0(i,s,l,d){do Ws();while(Rr!==null);if((At&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(pn(i,_),i===dn&&(Jt=dn=null,gn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||El||(El=!0,Dm(Fe,function(){return Ws(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ri.transition,ri.transition=null;var A=Tt;Tt=1;var k=At;At|=4,jc.current=null,Yy(i,l),_m(l,i),xy(nc),ka=!!tc,nc=tc=null,i.current=l,qy(l),ne(),At=k,Tt=A,ri.transition=_}else i.current=l;if(El&&(El=!1,Rr=i,Ml=p),_=i.pendingLanes,_===0&&(br=null),St(l.stateNode),Gn(i,Q()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(Sl)throw Sl=!1,i=Kc,Kc=null,i;return(Ml&1)!==0&&i.tag!==0&&Ws(),_=i.pendingLanes,(_&1)!==0?i===Zc?ea++:(ea=0,Zc=i):ea=0,Mr(),null}function Ws(){if(Rr!==null){var i=Pi(Ml),s=ri.transition,l=Tt;try{if(ri.transition=null,Tt=16>i?16:i,Rr===null)var d=!1;else{if(i=Rr,Rr=null,Ml=0,(At&6)!==0)throw Error(t(331));var p=At;for(At|=4,ze=i.current;ze!==null;){var _=ze,A=_.child;if((ze.flags&16)!==0){var k=_.deletions;if(k!==null){for(var G=0;G<k.length;G++){var te=k[G];for(ze=te;ze!==null;){var Se=ze;switch(Se.tag){case 0:case 11:case 15:Zo(8,Se,_)}var Me=Se.child;if(Me!==null)Me.return=Se,ze=Me;else for(;ze!==null;){Se=ze;var ye=Se.sibling,ke=Se.return;if(fm(Se),Se===te){ze=null;break}if(ye!==null){ye.return=ke,ze=ye;break}ze=ke}}}var Xe=_.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var Kt=Ye.sibling;Ye.sibling=null,Ye=Kt}while(Ye!==null)}}ze=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,ze=A;else e:for(;ze!==null;){if(_=ze,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Zo(9,_,_.return)}var Z=_.sibling;if(Z!==null){Z.return=_.return,ze=Z;break e}ze=_.return}}var V=i.current;for(ze=V;ze!==null;){A=ze;var ee=A.child;if((A.subtreeFlags&2064)!==0&&ee!==null)ee.return=A,ze=ee;else e:for(A=V;ze!==null;){if(k=ze,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:_l(9,k)}}catch(Ze){qt(k,k.return,Ze)}if(k===A){ze=null;break e}var Ae=k.sibling;if(Ae!==null){Ae.return=k.return,ze=Ae;break e}ze=k.return}}if(At=p,Mr(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(it,i)}catch{}d=!0}return d}finally{Tt=l,ri.transition=s}}return!1}function Cm(i,s,l){s=Bs(l,s),s=jp(i,s,1),i=Tr(i,s,1),s=Nn(),i!==null&&(ln(i,1,s),Gn(i,s))}function qt(i,s,l){if(i.tag===3)Cm(i,i,l);else for(;s!==null;){if(s.tag===3){Cm(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(br===null||!br.has(d))){i=Bs(l,i),i=Yp(s,i,1),s=Tr(s,i,1),i=Nn(),s!==null&&(ln(s,1,i),Gn(s,i));break}}s=s.return}}function t0(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=Nn(),i.pingedLanes|=i.suspendedLanes&l,dn===i&&(gn&l)===l&&(rn===4||rn===3&&(gn&130023424)===gn&&500>Q()-qc?is(i,0):Yc|=l),Gn(i,s)}function Pm(i,s){s===0&&((i.mode&1)===0?s=1:(s=Yt,Yt<<=1,(Yt&130023424)===0&&(Yt=4194304)));var l=Nn();i=Wi(i,s),i!==null&&(ln(i,s,l),Gn(i,l))}function n0(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Pm(i,l)}function i0(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Pm(i,l)}var Lm;Lm=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||kn.current)zn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return zn=!1,Wy(i,s,l);zn=(i.flags&131072)!==0}else zn=!1,Vt&&(s.flags&1048576)!==0&&cp(s,tl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;gl(i,s),i=s.pendingProps;var p=Ds(s,xn.current);Os(s,l),p=Ac(null,s,d,i,p,l);var _=bc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,On(d)?(_=!0,Qa(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,yc(s),p.updater=pl,s.stateNode=p,p._reactInternals=s,Nc(s,d,i,l),s=kc(null,s,d,!0,_,l)):(s.tag=0,Vt&&_&&uc(s),Dn(null,s,p,l),s=s.child),s;case 16:d=s.elementType;e:{switch(gl(i,s),i=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=s0(d),i=mi(d,i),p){case 0:s=Fc(null,s,d,i,l);break e;case 1:s=im(null,s,d,i,l);break e;case 11:s=Qp(null,s,d,i,l);break e;case 14:s=Jp(null,s,d,mi(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:mi(d,p),Fc(i,s,d,p,l);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:mi(d,p),im(i,s,d,p,l);case 3:e:{if(rm(s),i===null)throw Error(t(387));d=s.pendingProps,_=s.memoizedState,p=_.element,yp(i,s),al(s,d,null,l);var A=s.memoizedState;if(d=A.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Bs(Error(t(423)),s),s=sm(i,s,d,l,p);break e}else if(d!==p){p=Bs(Error(t(424)),s),s=sm(i,s,d,l,p);break e}else for(Yn=xr(s.stateNode.containerInfo.firstChild),jn=s,Vt=!0,pi=null,l=vp(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Us(),d===p){s=$i(i,s,l);break e}Dn(i,s,d,l)}s=s.child}return s;case 5:return Ep(s),i===null&&hc(s),d=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,A=p.children,ic(d,p)?A=null:_!==null&&ic(d,_)&&(s.flags|=32),nm(i,s),Dn(i,s,A,l),s.child;case 6:return i===null&&hc(s),null;case 13:return om(i,s,l);case 4:return xc(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=Fs(s,null,d,l):Dn(i,s,d,l),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:mi(d,p),Qp(i,s,d,p,l);case 7:return Dn(i,s,s.pendingProps,l),s.child;case 8:return Dn(i,s,s.pendingProps.children,l),s.child;case 12:return Dn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,_=s.memoizedProps,A=p.value,Ot(rl,d._currentValue),d._currentValue=A,_!==null)if(fi(_.value,A)){if(_.children===p.children&&!kn.current){s=$i(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var k=_.dependencies;if(k!==null){A=_.child;for(var G=k.firstContext;G!==null;){if(G.context===d){if(_.tag===1){G=Xi(-1,l&-l),G.tag=2;var te=_.updateQueue;if(te!==null){te=te.shared;var Se=te.pending;Se===null?G.next=G:(G.next=Se.next,Se.next=G),te.pending=G}}_.lanes|=l,G=_.alternate,G!==null&&(G.lanes|=l),vc(_.return,l,s),k.lanes|=l;break}G=G.next}}else if(_.tag===10)A=_.type===s.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,k=A.alternate,k!==null&&(k.lanes|=l),vc(A,l,s),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===s){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Dn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,Os(s,l),p=ni(p),d=d(p),s.flags|=1,Dn(i,s,d,l),s.child;case 14:return d=s.type,p=mi(d,s.pendingProps),p=mi(d.type,p),Jp(i,s,d,p,l);case 15:return em(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:mi(d,p),gl(i,s),s.tag=1,On(d)?(i=!0,Qa(s)):i=!1,Os(s,l),Xp(s,d,p),Nc(s,d,p,l),kc(null,s,d,!0,i,l);case 19:return lm(i,s,l);case 22:return tm(i,s,l)}throw Error(t(156,s.tag))};function Dm(i,s){return Ia(i,s)}function r0(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(i,s,l,d){return new r0(i,s,l,d)}function id(i){return i=i.prototype,!(!i||!i.isReactComponent)}function s0(i){if(typeof i=="function")return id(i)?1:0;if(i!=null){if(i=i.$$typeof,i===j)return 11;if(i===de)return 14}return 2}function Lr(i,s){var l=i.alternate;return l===null?(l=si(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function bl(i,s,l,d,p,_){var A=2;if(d=i,typeof i=="function")id(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case N:return ss(l.children,p,_,s);case O:A=8,p|=8;break;case P:return i=si(12,l,s,p|2),i.elementType=P,i.lanes=_,i;case K:return i=si(13,l,s,p),i.elementType=K,i.lanes=_,i;case oe:return i=si(19,l,s,p),i.elementType=oe,i.lanes=_,i;case ce:return Rl(l,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case T:A=10;break e;case z:A=9;break e;case j:A=11;break e;case de:A=14;break e;case ae:A=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=si(A,l,s,p),s.elementType=i,s.type=d,s.lanes=_,s}function ss(i,s,l,d){return i=si(7,i,d,s),i.lanes=l,i}function Rl(i,s,l,d){return i=si(22,i,d,s),i.elementType=ce,i.lanes=l,i.stateNode={isHidden:!1},i}function rd(i,s,l){return i=si(6,i,null,s),i.lanes=l,i}function sd(i,s,l){return s=si(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function o0(i,s,l,d,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function od(i,s,l,d,p,_,A,k,G){return i=new o0(i,s,l,k,G),s===1?(s=1,_===!0&&(s|=8)):s=0,_=si(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(_),i}function a0(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function Nm(i){if(!i)return Er;i=i._reactInternals;e:{if(Ci(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(On(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(On(l))return ap(i,l,s)}return s}function Im(i,s,l,d,p,_,A,k,G){return i=od(l,d,!0,i,p,_,A,k,G),i.context=Nm(null),l=i.current,d=Nn(),p=Cr(l),_=Xi(d,p),_.callback=s??null,Tr(l,_,p),i.current.lanes=p,ln(i,p,d),Gn(i,d),i}function Cl(i,s,l,d){var p=s.current,_=Nn(),A=Cr(p);return l=Nm(l),s.context===null?s.context=l:s.pendingContext=l,s=Xi(_,A),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Tr(p,s,A),i!==null&&(_i(i,p,A,_),ol(i,p,A)),A}function Pl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Um(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function ad(i,s){Um(i,s),(i=i.alternate)&&Um(i,s)}function l0(){return null}var Fm=typeof reportError=="function"?reportError:function(i){console.error(i)};function ld(i){this._internalRoot=i}Ll.prototype.render=ld.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Cl(i,s,null,null)},Ll.prototype.unmount=ld.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ns(function(){Cl(null,i,null,null)}),s[Bi]=null}};function Ll(i){this._internalRoot=i}Ll.prototype.unstable_scheduleHydration=function(i){if(i){var s=yf();i={blockedOn:null,target:i,priority:s};for(var l=0;l<vr.length&&s!==0&&s<vr[l].priority;l++);vr.splice(l,0,i),l===0&&Ef(i)}};function ud(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Dl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function km(){}function u0(i,s,l,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var te=Pl(A);_.call(te)}}var A=Im(s,d,i,0,null,!1,!1,"",km);return i._reactRootContainer=A,i[Bi]=A.current,Oo(i.nodeType===8?i.parentNode:i),ns(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var k=d;d=function(){var te=Pl(G);k.call(te)}}var G=od(i,0,!1,null,null,!1,!1,"",km);return i._reactRootContainer=G,i[Bi]=G.current,Oo(i.nodeType===8?i.parentNode:i),ns(function(){Cl(s,G,l,d)}),G}function Nl(i,s,l,d,p){var _=l._reactRootContainer;if(_){var A=_;if(typeof p=="function"){var k=p;p=function(){var G=Pl(A);k.call(G)}}Cl(s,A,i,p)}else A=u0(l,s,i,p,d);return Pl(A)}vf=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=yt(s.pendingLanes);l!==0&&(un(s,l|1),Gn(s,Q()),(At&6)===0&&(Vs=Q()+500,Mr()))}break;case 13:ns(function(){var d=Wi(i,1);if(d!==null){var p=Nn();_i(d,i,1,p)}}),ad(i,1)}},Iu=function(i){if(i.tag===13){var s=Wi(i,134217728);if(s!==null){var l=Nn();_i(s,i,134217728,l)}ad(i,134217728)}},_f=function(i){if(i.tag===13){var s=Cr(i),l=Wi(i,s);if(l!==null){var d=Nn();_i(l,i,s,d)}ad(i,s)}},yf=function(){return Tt},xf=function(i,s){var l=Tt;try{return Tt=i,s()}finally{Tt=l}},Pe=function(i,s,l){switch(s){case"input":if(ht(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var p=Ka(d);if(!p)throw Error(t(90));Lt(d),ht(d,p)}}}break;case"textarea":fe(i,l);break;case"select":s=l.value,s!=null&&F(i,!!l.multiple,s,!1)}},zt=ed,tn=ns;var c0={usingClientEntryPoint:!1,Events:[Go,Ps,Ka,Ne,dt,ed]},ta={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d0={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Da(i),i===null?null:i.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||l0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{it=Il.inject(d0),$e=Il}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c0,Hn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(s))throw Error(t(200));return a0(i,s,null,l)},Hn.createRoot=function(i,s){if(!ud(i))throw Error(t(299));var l=!1,d="",p=Fm;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=od(i,1,!1,null,null,l,!1,d,p),i[Bi]=s.current,Oo(i.nodeType===8?i.parentNode:i),new ld(s)},Hn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Da(s),i=i===null?null:i.stateNode,i},Hn.flushSync=function(i){return ns(i)},Hn.hydrate=function(i,s,l){if(!Dl(s))throw Error(t(200));return Nl(null,i,s,!0,l)},Hn.hydrateRoot=function(i,s,l){if(!ud(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,_="",A=Fm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=Im(s,null,i,1,l??null,p,!1,_,A),i[Bi]=s.current,Oo(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Ll(s)},Hn.render=function(i,s,l){if(!Dl(s))throw Error(t(200));return Nl(null,i,s,!1,l)},Hn.unmountComponentAtNode=function(i){if(!Dl(i))throw Error(t(40));return i._reactRootContainer?(ns(function(){Nl(null,null,i,!1,function(){i._reactRootContainer=null,i[Bi]=null})}),!0):!1},Hn.unstable_batchedUpdates=ed,Hn.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!Dl(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Nl(i,s,l,!1,d)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Xm;function x0(){if(Xm)return hd.exports;Xm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=y0(),hd.exports}var $m;function S0(){if($m)return Ul;$m=1;var r=x0();return Ul.createRoot=r.createRoot,Ul.hydrateRoot=r.hydrateRoot,Ul}var E0=S0();const M0=Zh(E0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jh="176",w0=0,jm=1,T0=2,Tv=1,A0=2,Ji=3,Wr=0,Wn=1,tr=2,Gr=0,lo=1,Ym=2,qm=3,Km=4,b0=5,ms=100,R0=101,C0=102,P0=103,L0=104,D0=200,N0=201,I0=202,U0=203,ih=204,rh=205,F0=206,k0=207,O0=208,z0=209,B0=210,G0=211,H0=212,V0=213,W0=214,sh=0,oh=1,ah=2,ho=3,lh=4,uh=5,ch=6,dh=7,Av=0,X0=1,$0=2,Hr=0,j0=1,Y0=2,q0=3,K0=4,Z0=5,Q0=6,J0=7,bv=300,fo=301,po=302,hh=303,fh=304,bu=306,ph=1e3,vs=1001,mh=1002,bi=1003,ex=1004,Fl=1005,Fi=1006,md=1007,_s=1008,lr=1009,Rv=1010,Cv=1011,va=1012,ef=1013,ys=1014,ir=1015,Sa=1016,tf=1017,nf=1018,_a=1020,Pv=35902,Lv=1021,Dv=1022,Ai=1023,ya=1026,xa=1027,Nv=1028,rf=1029,Iv=1030,sf=1031,of=1033,pu=33776,mu=33777,gu=33778,vu=33779,gh=35840,vh=35841,_h=35842,yh=35843,xh=36196,Sh=37492,Eh=37496,Mh=37808,wh=37809,Th=37810,Ah=37811,bh=37812,Rh=37813,Ch=37814,Ph=37815,Lh=37816,Dh=37817,Nh=37818,Ih=37819,Uh=37820,Fh=37821,_u=36492,kh=36494,Oh=36495,Uv=36283,zh=36284,Bh=36285,Gh=36286,tx=3200,nx=3201,ix=0,rx=1,Br="",li="srgb",mo="srgb-linear",Eu="linear",It="srgb",Xs=7680,Zm=519,sx=512,ox=513,ax=514,Fv=515,lx=516,ux=517,cx=518,dx=519,Qm=35044,Jm="300 es",rr=2e3,Mu=2001;class yo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=Math.PI/180,Hh=180/Math.PI;function Ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function hx(r,e){return(r%e+e)%e}function vd(r,e,t){return(1-t)*r+t*e}function ia(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(e=0,t=0){Ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*o+e.x,this.y=a*o+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,n,o,a,u,c,h,f){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,c,h,f)}set(e,t,n,o,a,u,c,h,f){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=a,m[5]=h,m[6]=n,m[7]=u,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],c=n[3],h=n[6],f=n[1],m=n[4],g=n[7],v=n[2],x=n[5],E=n[8],M=o[0],S=o[3],y=o[6],I=o[1],L=o[4],w=o[7],U=o[2],C=o[5],N=o[8];return a[0]=u*M+c*I+h*U,a[3]=u*S+c*L+h*C,a[6]=u*y+c*w+h*N,a[1]=f*M+m*I+g*U,a[4]=f*S+m*L+g*C,a[7]=f*y+m*w+g*N,a[2]=v*M+x*I+E*U,a[5]=v*S+x*L+E*C,a[8]=v*y+x*w+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8];return t*u*m-t*c*f-n*a*m+n*c*h+o*a*f-o*u*h}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=m*u-c*f,v=c*h-m*a,x=f*a-u*h,E=t*g+n*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*f-m*n)*M,e[2]=(c*n-o*u)*M,e[3]=v*M,e[4]=(m*t-o*h)*M,e[5]=(o*a-c*t)*M,e[6]=x*M,e[7]=(n*h-f*t)*M,e[8]=(u*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,u,c){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*u+f*c)+u+e,-o*f,o*h,-o*(-f*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(_d.makeScale(e,t)),this}rotate(e){return this.premultiply(_d.makeRotation(-e)),this}translate(e,t){return this.premultiply(_d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _d=new mt;function kv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function wu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fx(){const r=wu("canvas");return r.style.display="block",r}const eg={};function yu(r){r in eg||(eg[r]=!0,console.warn(r))}function px(r,e,t){return new Promise(function(n,o){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function mx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ng=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vx(){const r={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===It&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=uo(o.r),o.g=uo(o.g),o.b=uo(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Br?Eu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[mo]:{primaries:e,whitePoint:n,transfer:Eu,toXYZ:tg,fromXYZ:ng,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:n,transfer:It,toXYZ:tg,fromXYZ:ng,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const Rt=vx();function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $s;class _x{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=wu("canvas")),$s.width=e.width,$s.height=e.height;const o=$s.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=$s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=or(a[u]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class af{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(yd(o[u].image)):a.push(yd(o[u]))}else a=yd(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function yd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_x.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xx=0;class Xn extends yo{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,n=vs,o=vs,a=Fi,u=_s,c=Ai,h=lr,f=Xn.DEFAULT_ANISOTROPY,m=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Ea(),this.name="",this.source=new af(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=bv;Xn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,n=0,o=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const h=e.elements,f=h[0],m=h[4],g=h[8],v=h[1],x=h[5],E=h[9],M=h[2],S=h[6],y=h[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,w=(x+1)/2,U=(y+1)/2,C=(m+v)/4,N=(g+M)/4,O=(E+S)/4;return L>w&&L>U?L<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(L),o=C/n,a=N/n):w>U?w<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(w),n=C/o,a=O/o):U<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(U),n=N/a,o=O/a),this.set(n,o,a,t),this}let I=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(g-M)/I,this.z=(v-m)/I,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sx extends yo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const o={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const a=new Xn(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new af(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends Sx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ov extends Xn{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=bi,this.minFilter=bi,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ex extends Xn{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=bi,this.minFilter=bi,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,u,c){let h=n[o+0],f=n[o+1],m=n[o+2],g=n[o+3];const v=a[u+0],x=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=M;return}if(g!==M||h!==v||f!==x||m!==E){let S=1-c;const y=h*v+f*x+m*E+g*M,I=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const U=Math.sqrt(L),C=Math.atan2(U,y*I);S=Math.sin(S*C)/U,c=Math.sin(c*C)/U}const w=c*I;if(h=h*S+v*w,f=f*S+x*w,m=m*S+E*w,g=g*S+M*w,S===1-c){const U=1/Math.sqrt(h*h+f*f+m*m+g*g);h*=U,f*=U,m*=U,g*=U}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,o,a,u){const c=n[o],h=n[o+1],f=n[o+2],m=n[o+3],g=a[u],v=a[u+1],x=a[u+2],E=a[u+3];return e[t]=c*E+m*g+h*x-f*v,e[t+1]=h*E+m*v+f*g-c*x,e[t+2]=f*E+m*x+c*v-h*g,e[t+3]=m*E-c*g-h*v-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,h=Math.sin,f=c(n/2),m=c(o/2),g=c(a/2),v=h(n/2),x=h(o/2),E=h(a/2);switch(u){case"XYZ":this._x=v*m*g+f*x*E,this._y=f*x*g-v*m*E,this._z=f*m*E+v*x*g,this._w=f*m*g-v*x*E;break;case"YXZ":this._x=v*m*g+f*x*E,this._y=f*x*g-v*m*E,this._z=f*m*E-v*x*g,this._w=f*m*g+v*x*E;break;case"ZXY":this._x=v*m*g-f*x*E,this._y=f*x*g+v*m*E,this._z=f*m*E+v*x*g,this._w=f*m*g-v*x*E;break;case"ZYX":this._x=v*m*g-f*x*E,this._y=f*x*g+v*m*E,this._z=f*m*E-v*x*g,this._w=f*m*g+v*x*E;break;case"YZX":this._x=v*m*g+f*x*E,this._y=f*x*g+v*m*E,this._z=f*m*E-v*x*g,this._w=f*m*g-v*x*E;break;case"XZY":this._x=v*m*g-f*x*E,this._y=f*x*g-v*m*E,this._z=f*m*E+v*x*g,this._w=f*m*g+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],u=t[1],c=t[5],h=t[9],f=t[2],m=t[6],g=t[10],v=n+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-h)*x,this._y=(a-f)*x,this._z=(u-o)*x}else if(n>c&&n>g){const x=2*Math.sqrt(1+n-c-g);this._w=(m-h)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+f)/x}else if(c>g){const x=2*Math.sqrt(1+c-n-g);this._w=(a-f)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+g-n-c);this._w=(u-o)/x,this._x=(a+f)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,u=e._w,c=t._x,h=t._y,f=t._z,m=t._w;return this._x=n*m+u*c+o*f-a*h,this._y=o*m+u*h+a*c-n*f,this._z=a*m+u*f+n*h-o*c,this._w=u*m-n*c-o*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=o,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*n+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(h),m=Math.atan2(f,c),g=Math.sin((1-t)*m)/f,v=Math.sin(t*m)/f;return this._w=u*g+this._w*v,this._x=n*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,n=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ig.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,u=e.y,c=e.z,h=e.w,f=2*(u*o-c*n),m=2*(c*t-a*o),g=2*(a*n-u*t);return this.x=t+h*f+u*g-c*m,this.y=n+h*m+c*f-a*g,this.z=o+h*g+a*m-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,u=t.x,c=t.y,h=t.z;return this.x=o*h-a*c,this.y=a*u-n*h,this.z=n*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xd=new ie,ig=new Ma;class wa{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,yi):yi.fromBufferAttribute(a,u),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ol.subVectors(this.max,ra),js.subVectors(e.a,ra),Ys.subVectors(e.b,ra),qs.subVectors(e.c,ra),Nr.subVectors(Ys,js),Ir.subVectors(qs,Ys),os.subVectors(js,qs);let t=[0,-Nr.z,Nr.y,0,-Ir.z,Ir.y,0,-os.z,os.y,Nr.z,0,-Nr.x,Ir.z,0,-Ir.x,os.z,0,-os.x,-Nr.y,Nr.x,0,-Ir.y,Ir.x,0,-os.y,os.x,0];return!Sd(t,js,Ys,qs,Ol)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,js,Ys,qs,Ol))?!1:(zl.crossVectors(Nr,Ir),t=[zl.x,zl.y,zl.z],Sd(t,js,Ys,qs,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],yi=new ie,kl=new wa,js=new ie,Ys=new ie,qs=new ie,Nr=new ie,Ir=new ie,os=new ie,ra=new ie,Ol=new ie,zl=new ie,as=new ie;function Sd(r,e,t,n,o){for(let a=0,u=r.length-3;a<=u;a+=3){as.fromArray(r,a);const c=o.x*Math.abs(as.x)+o.y*Math.abs(as.y)+o.z*Math.abs(as.z),h=e.dot(as),f=t.dot(as),m=n.dot(as);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>c)return!1}return!0}const Mx=new wa,sa=new ie,Ed=new ie;class Ta{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mx.setFromPoints(e).getCenter(n);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(sa,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Ed)),this.expandByPoint(sa.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new ie,Md=new ie,Bl=new ie,Ur=new ie,wd=new ie,Gl=new ie,Td=new ie;class Ru{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Md.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Md);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Bl),c=Ur.dot(this.direction),h=-Ur.dot(Bl),f=Ur.lengthSq(),m=Math.abs(1-u*u);let g,v,x,E;if(m>0)if(g=u*h-c,v=u*c-h,E=a*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,x=g*(g+u*v+2*c)+v*(u*g+v+2*h)+f}else v=a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v=-a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v<=-E?(g=Math.max(0,-(-u*a+c)),v=g>0?-a:Math.min(Math.max(-a,-h),a),x=-g*g+v*(v+2*h)+f):v<=E?(g=0,v=Math.min(Math.max(-a,-h),a),x=v*(v+2*h)+f):(g=Math.max(0,-(u*a+c)),v=g>0?a:Math.min(Math.max(-a,-h),a),x=-g*g+v*(v+2*h)+f);else v=u>0?-a:a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Md).addScaledVector(Bl,v),x}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),o=qi.dot(qi)-n*n,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=n-u,h=n+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,u,c,h;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,o=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,o=(e.min.x-v.x)*f),m>=0?(a=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),n>u||a>o||((a>n||isNaN(n))&&(n=a),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),n>h||c>o)||((c>n||n!==n)&&(n=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,o,a){wd.subVectors(t,e),Gl.subVectors(n,e),Td.crossVectors(wd,Gl);let u=this.direction.dot(Td),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Ur.subVectors(this.origin,e);const h=c*this.direction.dot(Gl.crossVectors(Ur,Gl));if(h<0)return null;const f=c*this.direction.dot(wd.cross(Ur));if(f<0||h+f>u)return null;const m=-c*Ur.dot(Td);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,n,o,a,u,c,h,f,m,g,v,x,E,M,S){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,c,h,f,m,g,v,x,E,M,S)}set(e,t,n,o,a,u,c,h,f,m,g,v,x,E,M,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=o,y[1]=a,y[5]=u,y[9]=c,y[13]=h,y[2]=f,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=E,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),a=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),h=Math.cos(o),f=Math.sin(o),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=u*m,x=u*g,E=c*m,M=c*g;t[0]=h*m,t[4]=-h*g,t[8]=f,t[1]=x+E*f,t[5]=v-M*f,t[9]=-c*h,t[2]=M-v*f,t[6]=E+x*f,t[10]=u*h}else if(e.order==="YXZ"){const v=h*m,x=h*g,E=f*m,M=f*g;t[0]=v+M*c,t[4]=E*c-x,t[8]=u*f,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-E,t[6]=M+v*c,t[10]=u*h}else if(e.order==="ZXY"){const v=h*m,x=h*g,E=f*m,M=f*g;t[0]=v-M*c,t[4]=-u*g,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*m,t[9]=M-v*c,t[2]=-u*f,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const v=u*m,x=u*g,E=c*m,M=c*g;t[0]=h*m,t[4]=E*f-x,t[8]=v*f+M,t[1]=h*g,t[5]=M*f+v,t[9]=x*f-E,t[2]=-f,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,x=u*f,E=c*h,M=c*f;t[0]=h*m,t[4]=M-v*g,t[8]=E*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-f*m,t[6]=x*g+E,t[10]=v-M*g}else if(e.order==="XZY"){const v=u*h,x=u*f,E=c*h,M=c*f;t[0]=h*m,t[4]=-g,t[8]=f*m,t[1]=v*g+M,t[5]=u*m,t[9]=x*g-E,t[2]=E*g-x,t[6]=c*m,t[10]=M*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wx,e,Tx)}lookAt(e,t,n){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Fr.crossVectors(n,Kn),Fr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Fr.crossVectors(n,Kn)),Fr.normalize(),Hl.crossVectors(Kn,Fr),o[0]=Fr.x,o[4]=Hl.x,o[8]=Kn.x,o[1]=Fr.y,o[5]=Hl.y,o[9]=Kn.y,o[2]=Fr.z,o[6]=Hl.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],c=n[4],h=n[8],f=n[12],m=n[1],g=n[5],v=n[9],x=n[13],E=n[2],M=n[6],S=n[10],y=n[14],I=n[3],L=n[7],w=n[11],U=n[15],C=o[0],N=o[4],O=o[8],P=o[12],T=o[1],z=o[5],j=o[9],K=o[13],oe=o[2],de=o[6],ae=o[10],ce=o[14],H=o[3],ue=o[7],re=o[11],R=o[15];return a[0]=u*C+c*T+h*oe+f*H,a[4]=u*N+c*z+h*de+f*ue,a[8]=u*O+c*j+h*ae+f*re,a[12]=u*P+c*K+h*ce+f*R,a[1]=m*C+g*T+v*oe+x*H,a[5]=m*N+g*z+v*de+x*ue,a[9]=m*O+g*j+v*ae+x*re,a[13]=m*P+g*K+v*ce+x*R,a[2]=E*C+M*T+S*oe+y*H,a[6]=E*N+M*z+S*de+y*ue,a[10]=E*O+M*j+S*ae+y*re,a[14]=E*P+M*K+S*ce+y*R,a[3]=I*C+L*T+w*oe+U*H,a[7]=I*N+L*z+w*de+U*ue,a[11]=I*O+L*j+w*ae+U*re,a[15]=I*P+L*K+w*ce+U*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],u=e[1],c=e[5],h=e[9],f=e[13],m=e[2],g=e[6],v=e[10],x=e[14],E=e[3],M=e[7],S=e[11],y=e[15];return E*(+a*h*g-o*f*g-a*c*v+n*f*v+o*c*x-n*h*x)+M*(+t*h*x-t*f*v+a*u*v-o*u*x+o*f*m-a*h*m)+S*(+t*f*g-t*c*x-a*u*g+n*u*x+a*c*m-n*f*m)+y*(-o*c*m-t*h*g+t*c*v+o*u*g-n*u*v+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=e[9],v=e[10],x=e[11],E=e[12],M=e[13],S=e[14],y=e[15],I=g*S*f-M*v*f+M*h*x-c*S*x-g*h*y+c*v*y,L=E*v*f-m*S*f-E*h*x+u*S*x+m*h*y-u*v*y,w=m*M*f-E*g*f+E*c*x-u*M*x-m*c*y+u*g*y,U=E*g*h-m*M*h-E*c*v+u*M*v+m*c*S-u*g*S,C=t*I+n*L+o*w+a*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=I*N,e[1]=(M*v*a-g*S*a-M*o*x+n*S*x+g*o*y-n*v*y)*N,e[2]=(c*S*a-M*h*a+M*o*f-n*S*f-c*o*y+n*h*y)*N,e[3]=(g*h*a-c*v*a-g*o*f+n*v*f+c*o*x-n*h*x)*N,e[4]=L*N,e[5]=(m*S*a-E*v*a+E*o*x-t*S*x-m*o*y+t*v*y)*N,e[6]=(E*h*a-u*S*a-E*o*f+t*S*f+u*o*y-t*h*y)*N,e[7]=(u*v*a-m*h*a+m*o*f-t*v*f-u*o*x+t*h*x)*N,e[8]=w*N,e[9]=(E*g*a-m*M*a-E*n*x+t*M*x+m*n*y-t*g*y)*N,e[10]=(u*M*a-E*c*a+E*n*f-t*M*f-u*n*y+t*c*y)*N,e[11]=(m*c*a-u*g*a-m*n*f+t*g*f+u*n*x-t*c*x)*N,e[12]=U*N,e[13]=(m*M*o-E*g*o+E*n*v-t*M*v-m*n*S+t*g*S)*N,e[14]=(E*c*o-u*M*o-E*n*h+t*M*h+u*n*S-t*c*S)*N,e[15]=(u*g*o-m*c*o+m*n*h-t*g*h-u*n*v+t*c*v)*N,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,u=e.x,c=e.y,h=e.z,f=a*u,m=a*c;return this.set(f*u+n,f*c-o*h,f*h+o*c,0,f*c+o*h,m*c+n,m*h-o*u,0,f*h-o*c,m*h+o*u,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,u){return this.set(1,n,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,u=t._y,c=t._z,h=t._w,f=a+a,m=u+u,g=c+c,v=a*f,x=a*m,E=a*g,M=u*m,S=u*g,y=c*g,I=h*f,L=h*m,w=h*g,U=n.x,C=n.y,N=n.z;return o[0]=(1-(M+y))*U,o[1]=(x+w)*U,o[2]=(E-L)*U,o[3]=0,o[4]=(x-w)*C,o[5]=(1-(v+y))*C,o[6]=(S+I)*C,o[7]=0,o[8]=(E+L)*N,o[9]=(S-I)*N,o[10]=(1-(v+M))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=Ks.set(o[0],o[1],o[2]).length();const u=Ks.set(o[4],o[5],o[6]).length(),c=Ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],xi.copy(this);const f=1/a,m=1/u,g=1/c;return xi.elements[0]*=f,xi.elements[1]*=f,xi.elements[2]*=f,xi.elements[4]*=m,xi.elements[5]*=m,xi.elements[6]*=m,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,t.setFromRotationMatrix(xi),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,o,a,u,c=rr){const h=this.elements,f=2*a/(t-e),m=2*a/(n-o),g=(t+e)/(t-e),v=(n+o)/(n-o);let x,E;if(c===rr)x=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Mu)x=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,o,a,u,c=rr){const h=this.elements,f=1/(t-e),m=1/(n-o),g=1/(u-a),v=(t+e)*f,x=(n+o)*m;let E,M;if(c===rr)E=(u+a)*g,M=-2*g;else if(c===Mu)E=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ks=new ie,xi=new $t,wx=new ie(0,0,0),Tx=new ie(1,1,1),Fr=new ie,Hl=new ie,Kn=new ie,rg=new $t,sg=new Ma;class ur{constructor(e=0,t=0,n=0,o=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],h=o[1],f=o[5],m=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sg.setFromEuler(this),this.setFromQuaternion(sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ax=0;const og=new ie,Zs=new Ma,Ki=new $t,Vl=new ie,oa=new ie,bx=new ie,Rx=new Ma,ag=new ie(1,0,0),lg=new ie(0,1,0),ug=new ie(0,0,1),cg={type:"added"},Cx={type:"removed"},Qs={type:"childadded",child:null},Ad={type:"childremoved",child:null};class bn extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new ie,t=new ur,n=new Ma,o=new ie(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new mt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(ag,e)}rotateY(e){return this.rotateOnAxis(lg,e)}rotateZ(e){return this.rotateOnAxis(ug,e)}translateOnAxis(e,t){return og.copy(e).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ag,e)}translateY(e){return this.translateOnAxis(lg,e)}translateZ(e){return this.translateOnAxis(ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vl.copy(e):Vl.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(oa,Vl,this.up):Ki.lookAt(Vl,oa,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(Ki),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cg),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cx),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cg),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,Rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const g=h[f];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(a(e.materials,this.material[h]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(a(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),f=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),E.length>0&&(n.nodes=E)}return n.object=o,n;function u(c){const h=[];for(const f in c){const m=c[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}bn.DEFAULT_UP=new ie(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new ie,Zi=new ie,bd=new ie,Qi=new ie,Js=new ie,eo=new ie,dg=new ie,Rd=new ie,Cd=new ie,Pd=new ie,Ld=new Zt,Dd=new Zt,Nd=new Zt;class wi{constructor(e=new ie,t=new ie,n=new ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),Si.subVectors(e,t),o.cross(Si);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){Si.subVectors(o,t),Zi.subVectors(n,t),bd.subVectors(e,t);const u=Si.dot(Si),c=Si.dot(Zi),h=Si.dot(bd),f=Zi.dot(Zi),m=Zi.dot(bd),g=u*f-c*c;if(g===0)return a.set(0,0,0),null;const v=1/g,x=(f*h-c*m)*v,E=(u*m-c*h)*v;return a.set(1-x-E,E,x)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,o,a,u,c,h){return this.getBarycoord(e,t,n,o,Qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Qi.x),h.addScaledVector(u,Qi.y),h.addScaledVector(c,Qi.z),h)}static getInterpolatedAttribute(e,t,n,o,a,u){return Ld.setScalar(0),Dd.setScalar(0),Nd.setScalar(0),Ld.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,n),Nd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ld,a.x),u.addScaledVector(Dd,a.y),u.addScaledVector(Nd,a.z),u}static isFrontFacing(e,t,n,o){return Si.subVectors(n,t),Zi.subVectors(e,t),Si.cross(Zi).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Si.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,a){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let u,c;Js.subVectors(o,n),eo.subVectors(a,n),Rd.subVectors(e,n);const h=Js.dot(Rd),f=eo.dot(Rd);if(h<=0&&f<=0)return t.copy(n);Cd.subVectors(e,o);const m=Js.dot(Cd),g=eo.dot(Cd);if(m>=0&&g<=m)return t.copy(o);const v=h*g-m*f;if(v<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(n).addScaledVector(Js,u);Pd.subVectors(e,a);const x=Js.dot(Pd),E=eo.dot(Pd);if(E>=0&&x<=E)return t.copy(a);const M=x*f-h*E;if(M<=0&&f>=0&&E<=0)return c=f/(f-E),t.copy(n).addScaledVector(eo,c);const S=m*E-x*g;if(S<=0&&g-m>=0&&x-E>=0)return dg.subVectors(a,o),c=(g-m)/(g-m+(x-E)),t.copy(o).addScaledVector(dg,c);const y=1/(S+M+v);return u=M*y,c=v*y,t.copy(n).addScaledVector(Js,u).addScaledVector(eo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Id(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=Rt.workingColorSpace){if(e=hx(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Id(u,a,e+1/3),this.g=Id(u,a,e),this.b=Id(u,a,e-1/3)}return Rt.toWorkingColorSpace(this,o),this}setStyle(e,t=li){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const n=zv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Rt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(Et(Tn.r*255,0,255))*65536+Math.round(Et(Tn.g*255,0,255))*256+Math.round(Et(Tn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Tn.copy(this),t);const n=Tn.r,o=Tn.g,a=Tn.b,u=Math.max(n,o,a),c=Math.min(n,o,a);let h,f;const m=(c+u)/2;if(c===u)h=0,f=0;else{const g=u-c;switch(f=m<=.5?g/(u+c):g/(2-u-c),u){case n:h=(o-a)/g+(o<a?6:0);break;case o:h=(a-n)/g+2;break;case a:h=(n-o)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=li){Rt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,o=Tn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(Wl);const n=vd(kr.h,Wl.h,t),o=vd(kr.s,Wl.s,t),a=vd(kr.l,Wl.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Ct;Ct.NAMES=zv;let Px=0;class xo extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=lo,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(n.blending=this.blending),this.side!==Wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ih&&(n.blendSrc=this.blendSrc),this.blendDst!==rh&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bv extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new ie,Xl=new Ut;let Lx=0;class Jn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qm,this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ia(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),o=Vn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),o=Vn(o,this.array),a=Vn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qm&&(e.usage=this.usage),e}}class Gv extends Jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hv extends Jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vr extends Jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dx=0;const oi=new $t,Ud=new bn,to=new ie,Zn=new wa,aa=new wa,fn=new ie;class Ri extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kv(e)?Hv:Gv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new mt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Vr(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];aa.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(Zn.min,aa.min),Zn.expandByPoint(fn),fn.addVectors(Zn.max,aa.max),Zn.expandByPoint(fn)):(Zn.expandByPoint(aa.min),Zn.expandByPoint(aa.max))}Zn.getCenter(n);let o=0;for(let a=0,u=e.count;a<u;a++)fn.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(fn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],h=this.morphTargetsRelative;for(let f=0,m=c.count;f<m;f++)fn.fromBufferAttribute(c,f),h&&(to.fromBufferAttribute(e,f),fn.add(to)),o=Math.max(o,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let O=0;O<n.count;O++)c[O]=new ie,h[O]=new ie;const f=new ie,m=new ie,g=new ie,v=new Ut,x=new Ut,E=new Ut,M=new ie,S=new ie;function y(O,P,T){f.fromBufferAttribute(n,O),m.fromBufferAttribute(n,P),g.fromBufferAttribute(n,T),v.fromBufferAttribute(a,O),x.fromBufferAttribute(a,P),E.fromBufferAttribute(a,T),m.sub(f),g.sub(f),x.sub(v),E.sub(v);const z=1/(x.x*E.y-E.x*x.y);isFinite(z)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(z),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(z),c[O].add(M),c[P].add(M),c[T].add(M),h[O].add(S),h[P].add(S),h[T].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let O=0,P=I.length;O<P;++O){const T=I[O],z=T.start,j=T.count;for(let K=z,oe=z+j;K<oe;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new ie,w=new ie,U=new ie,C=new ie;function N(O){U.fromBufferAttribute(o,O),C.copy(U);const P=c[O];L.copy(P),L.sub(U.multiplyScalar(U.dot(P))).normalize(),w.crossVectors(C,P);const z=w.dot(h[O])<0?-1:1;u.setXYZW(O,L.x,L.y,L.z,z)}for(let O=0,P=I.length;O<P;++O){const T=I[O],z=T.start,j=T.count;for(let K=z,oe=z+j;K<oe;K+=3)N(e.getX(K+0)),N(e.getX(K+1)),N(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const o=new ie,a=new ie,u=new ie,c=new ie,h=new ie,f=new ie,m=new ie,g=new ie;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),m.subVectors(u,a),g.subVectors(o,a),m.cross(g),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),c.add(m),h.add(m),f.add(m),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,a),g.subVectors(o,a),m.cross(g),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(c,h){const f=c.array,m=c.itemSize,g=c.normalized,v=new f.constructor(h.length*m);let x=0,E=0;for(let M=0,S=h.length;M<S;M++){c.isInterleavedBufferAttribute?x=h[M]*c.data.stride+c.offset:x=h[M]*m;for(let y=0;y<m;y++)v[E++]=f[x++]}return new Jn(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ri,n=this.index.array,o=this.attributes;for(const c in o){const h=o[c],f=e(h,n);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const h=[],f=a[c];for(let m=0,g=f.length;m<g;m++){const v=f[m],x=e(v,n);h.push(x)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let g=0,v=f.length;g<v;g++){const x=f[g];m.push(x.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const f in o){const m=o[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],g=a[f];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,m=u.length;f<m;f++){const g=u[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hg=new $t,ls=new Ru,$l=new Ta,fg=new ie,jl=new ie,Yl=new ie,ql=new ie,Fd=new ie,Kl=new ie,pg=new ie,Zl=new ie;class sr extends bn{constructor(e=new Ri,t=new Bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Kl.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const m=c[h],g=a[h];m!==0&&(Fd.fromBufferAttribute(g,e),u?Kl.addScaledVector(Fd,m):Kl.addScaledVector(Fd.sub(t),m))}t.add(Kl)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(a),ls.copy(e.ray).recast(e.near),!($l.containsPoint(ls.origin)===!1&&(ls.intersectSphere($l,fg)===null||ls.origin.distanceToSquared(fg)>(e.far-e.near)**2))&&(hg.copy(a).invert(),ls.copy(e.ray).applyMatrix4(hg),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let o;const a=this.geometry,u=this.material,c=a.index,h=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=u[S.materialIndex],I=Math.max(S.start,x.start),L=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let w=I,U=L;w<U;w+=3){const C=c.getX(w),N=c.getX(w+1),O=c.getX(w+2);o=Ql(this,y,e,n,f,m,g,C,N,O),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const I=c.getX(S),L=c.getX(S+1),w=c.getX(S+2);o=Ql(this,u,e,n,f,m,g,I,L,w),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=u[S.materialIndex],I=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=I,U=L;w<U;w+=3){const C=w,N=w+1,O=w+2;o=Ql(this,y,e,n,f,m,g,C,N,O),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(h.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const I=S,L=S+1,w=S+2;o=Ql(this,u,e,n,f,m,g,I,L,w),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Nx(r,e,t,n,o,a,u,c){let h;if(e.side===Wn?h=n.intersectTriangle(u,a,o,!0,c):h=n.intersectTriangle(o,a,u,e.side===Wr,c),h===null)return null;Zl.copy(c),Zl.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(Zl);return f<t.near||f>t.far?null:{distance:f,point:Zl.clone(),object:r}}function Ql(r,e,t,n,o,a,u,c,h,f){r.getVertexPosition(c,jl),r.getVertexPosition(h,Yl),r.getVertexPosition(f,ql);const m=Nx(r,e,t,n,jl,Yl,ql,pg);if(m){const g=new ie;wi.getBarycoord(pg,jl,Yl,ql,g),o&&(m.uv=wi.getInterpolatedAttribute(o,c,h,f,g,new Ut)),a&&(m.uv1=wi.getInterpolatedAttribute(a,c,h,f,g,new Ut)),u&&(m.normal=wi.getInterpolatedAttribute(u,c,h,f,g,new ie),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:h,c:f,normal:new ie,materialIndex:0};wi.getNormal(jl,Yl,ql,v.normal),m.face=v,m.barycoord=g}return m}class Aa extends Ri{constructor(e=1,t=1,n=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const h=[],f=[],m=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,o,u,2),E("x","z","y",1,-1,e,n,-t,o,u,3),E("x","y","z",1,-1,e,t,n,o,a,4),E("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(h),this.setAttribute("position",new Vr(f,3)),this.setAttribute("normal",new Vr(m,3)),this.setAttribute("uv",new Vr(g,2));function E(M,S,y,I,L,w,U,C,N,O,P){const T=w/N,z=U/O,j=w/2,K=U/2,oe=C/2,de=N+1,ae=O+1;let ce=0,H=0;const ue=new ie;for(let re=0;re<ae;re++){const R=re*z-K;for(let X=0;X<de;X++){const me=X*T-j;ue[M]=me*I,ue[S]=R*L,ue[y]=oe,f.push(ue.x,ue.y,ue.z),ue[M]=0,ue[S]=0,ue[y]=C>0?1:-1,m.push(ue.x,ue.y,ue.z),g.push(X/N),g.push(1-re/O),ce+=1}}for(let re=0;re<O;re++)for(let R=0;R<N;R++){const X=v+R+de*re,me=v+R+de*(re+1),W=v+(R+1)+de*(re+1),se=v+(R+1)+de*re;h.push(X,me,se),h.push(me,W,se),H+=6}c.addGroup(x,H,P),x+=H,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const o=r[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function Un(r){const e={};for(let t=0;t<r.length;t++){const n=go(r[t]);for(const o in n)e[o]=n[o]}return e}function Ix(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Ux={clone:go,merge:Un};var Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=Ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Wv=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=rr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Or=new ie,mg=new Ut,gg=new Ut;class ui extends Wv{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,mg,gg),t.subVectors(gg,mg)}setViewOffset(e,t,n,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gd*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,f=u.fullHeight;a+=u.offsetX*o/h,t-=u.offsetY*n/f,o*=u.width/h,n*=u.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class Ox extends bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ui(no,io,e,t);o.layers=this.layers,this.add(o);const a=new ui(no,io,e,t);a.layers=this.layers,this.add(a);const u=new ui(no,io,e,t);u.layers=this.layers,this.add(u);const c=new ui(no,io,e,t);c.layers=this.layers,this.add(c);const h=new ui(no,io,e,t);h.layers=this.layers,this.add(h);const f=new ui(no,io,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,a,u,c,h]=t;for(const f of t)this.remove(f);if(e===rr)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Mu)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,h,f,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,o),e.render(t,a),e.setRenderTarget(n,1,o),e.render(t,u),e.setRenderTarget(n,2,o),e.render(t,c),e.setRenderTarget(n,3,o),e.render(t,h),e.setRenderTarget(n,4,o),e.render(t,f),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,o),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Xv extends Xn{constructor(e=[],t=fo,n,o,a,u,c,h,f,m){super(e,t,n,o,a,u,c,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zx extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Xv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Aa(5,5,5),a=new Xr({name:"CubemapFromEquirect",uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:Gr});a.uniforms.tEquirect.value=t;const u=new sr(o,a),c=t.minFilter;return t.minFilter===_s&&(t.minFilter=Fi),new Ox(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,o);e.setRenderTarget(a)}}class Jl extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bx={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,u=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),y=this._getHandJoint(f,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,E=.005;f.inputState.pinching&&v>x+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=x-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gx extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Od=new ie,Hx=new ie,Vx=new mt;class fs{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Od.subVectors(n,t).cross(Hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Od),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vx.getNormalMatrix(e),o=this.coplanarPoint(Od).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Ta,eu=new ie;class $v{constructor(e=new fs,t=new fs,n=new fs,o=new fs,a=new fs,u=new fs){this.planes=[e,t,n,o,a,u]}set(e,t,n,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rr){const n=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],h=o[3],f=o[4],m=o[5],g=o[6],v=o[7],x=o[8],E=o[9],M=o[10],S=o[11],y=o[12],I=o[13],L=o[14],w=o[15];if(n[0].setComponents(h-a,v-f,S-x,w-y).normalize(),n[1].setComponents(h+a,v+f,S+x,w+y).normalize(),n[2].setComponents(h+u,v+m,S+E,w+I).normalize(),n[3].setComponents(h-u,v-m,S-E,w-I).normalize(),n[4].setComponents(h-c,v-g,S-M,w-L).normalize(),t===rr)n[5].setComponents(h+c,v+g,S+M,w+L).normalize();else if(t===Mu)n[5].setComponents(c,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(eu.x=o.normal.x>0?e.max.x:e.min.x,eu.y=o.normal.y>0?e.max.y:e.min.y,eu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jv extends xo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tu=new ie,Au=new ie,vg=new $t,la=new Ru,tu=new Ta,zd=new ie,_g=new ie;class Wx extends bn{constructor(e=new Ri,t=new jv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,a=t.count;o<a;o++)Tu.fromBufferAttribute(t,o-1),Au.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=Tu.distanceTo(Au);e.setAttribute("lineDistance",new Vr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tu.copy(n.boundingSphere),tu.applyMatrix4(o),tu.radius+=a,e.ray.intersectsSphere(tu)===!1)return;vg.copy(o).invert(),la.copy(e.ray).applyMatrix4(vg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null){const x=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=f){const y=m.getX(M),I=m.getX(M+1),L=nu(this,e,la,h,y,I,M);L&&t.push(L)}if(this.isLineLoop){const M=m.getX(E-1),S=m.getX(x),y=nu(this,e,la,h,M,S,E-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=f){const y=nu(this,e,la,h,M,M+1,M);y&&t.push(y)}if(this.isLineLoop){const M=nu(this,e,la,h,E-1,x,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function nu(r,e,t,n,o,a,u){const c=r.geometry.attributes.position;if(Tu.fromBufferAttribute(c,o),Au.fromBufferAttribute(c,a),t.distanceSqToSegment(Tu,Au,zd,_g)>n)return;zd.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(zd);if(!(f<e.near||f>e.far))return{distance:f,point:_g.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class Yv extends xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yg=new $t,Vh=new Ru,iu=new Ta,ru=new ie;class Xx extends bn{constructor(e=new Ri,t=new Yv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),iu.copy(n.boundingSphere),iu.applyMatrix4(o),iu.radius+=a,e.ray.intersectsSphere(iu)===!1)return;yg.copy(o).invert(),Vh.copy(e.ray).applyMatrix4(yg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,g=n.attributes.position;if(f!==null){const v=Math.max(0,u.start),x=Math.min(f.count,u.start+u.count);for(let E=v,M=x;E<M;E++){const S=f.getX(E);ru.fromBufferAttribute(g,S),xg(ru,S,h,o,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let E=v,M=x;E<M;E++)ru.fromBufferAttribute(g,E),xg(ru,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function xg(r,e,t,n,o,a,u){const c=Vh.distanceSqToPoint(r);if(c<t){const h=new ie;Vh.closestPointToPoint(r,h),h.applyMatrix4(n);const f=o.ray.origin.distanceTo(h);if(f<o.near||f>o.far)return;a.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class qv extends Xn{constructor(e,t,n=ys,o,a,u,c=bi,h=bi,f,m=ya){if(m!==ya&&m!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,a,u,c,h,m,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new af(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cu extends Ri{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(n),h=Math.floor(o),f=c+1,m=h+1,g=e/c,v=t/h,x=[],E=[],M=[],S=[];for(let y=0;y<m;y++){const I=y*v-u;for(let L=0;L<f;L++){const w=L*g-a;E.push(w,-I,0),M.push(0,0,1),S.push(L/c),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let I=0;I<c;I++){const L=I+f*y,w=I+f*(y+1),U=I+1+f*(y+1),C=I+1+f*y;x.push(L,w,C),x.push(w,U,C)}this.setIndex(x),this.setAttribute("position",new Vr(E,3)),this.setAttribute("normal",new Vr(M,3)),this.setAttribute("uv",new Vr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class $x extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jx extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yx extends bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qx extends Wv{constructor(e=-1,t=1,n=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,u=a+f*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kx extends Yx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zx extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sg=new $t;class Qx{constructor(e,t,n=0,o=1/0){this.ray=new Ru(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new lf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sg),this}intersectObject(e,t=!0,n=[]){return Wh(e,this,n,t),n.sort(Eg),n}intersectObjects(e,t=!0,n=[]){for(let o=0,a=e.length;o<a;o++)Wh(e[o],this,n,t);return n.sort(Eg),n}}function Eg(r,e){return r.distance-e.distance}function Wh(r,e,t,n){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&n===!0){const a=r.children;for(let u=0,c=a.length;u<c;u++)Wh(a[u],e,t,!0)}}function Mg(r,e,t,n){const o=Jx(n);switch(t){case Lv:return r*e;case Nv:return r*e/o.components*o.byteLength;case rf:return r*e/o.components*o.byteLength;case Iv:return r*e*2/o.components*o.byteLength;case sf:return r*e*2/o.components*o.byteLength;case Dv:return r*e*3/o.components*o.byteLength;case Ai:return r*e*4/o.components*o.byteLength;case of:return r*e*4/o.components*o.byteLength;case pu:case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:case yh:return Math.max(r,16)*Math.max(e,8)/4;case gh:case _h:return Math.max(r,8)*Math.max(e,8)/2;case xh:case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case _u:case kh:case Oh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Uv:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bh:case Gh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jx(r){switch(r){case lr:case Rv:return{byteLength:1,components:1};case va:case Cv:case Sa:return{byteLength:2,components:1};case tf:case nf:return{byteLength:2,components:4};case ys:case ef:case ir:return{byteLength:4,components:1};case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kv(){let r=null,e=!1,t=null,n=null;function o(a,u){t(a,u),n=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function eS(r){const e=new WeakMap;function t(c,h){const f=c.array,m=c.usage,g=f.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,f,m),c.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,h,f){const m=h.array,g=h.updateRanges;if(r.bindBuffer(f,c),g.length===0)r.bufferSubData(f,0,m);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];r.bufferSubData(f,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(r.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:u}}var tS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nS=`#ifdef USE_ALPHAHASH
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
#endif`,iS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aS=`#ifdef USE_AOMAP
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
#endif`,lS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uS=`#ifdef USE_BATCHING
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
#endif`,cS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pS=`#ifdef USE_IRIDESCENCE
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
#endif`,mS=`#ifdef USE_BUMPMAP
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
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wS=`#define PI 3.141592653589793
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
} // validated`,TS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AS=`vec3 transformedNormal = objectNormal;
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
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LS="gl_FragColor = linearToOutputTexel( gl_FragColor );",DS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NS=`#ifdef USE_ENVMAP
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
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,US=`#ifdef USE_ENVMAP
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
#endif`,FS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HS=`#ifdef USE_GRADIENTMAP
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
}`,VS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
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
#endif`,jS=`#ifdef USE_ENVMAP
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
#endif`,YS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QS=`PhysicalMaterial material;
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
#endif`,JS=`struct PhysicalMaterial {
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
}`,eE=`
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cE=`#if defined( USE_POINTS_UV )
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
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,vE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
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
#endif`,wE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zE=`float getShadowMask() {
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
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,WE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
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
}`,aM=`#if DEPTH_PACKING == 3200
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
}`,lM=`#define DISTANCE
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
}`,uM=`#define DISTANCE
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`uniform float scale;
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
}`,fM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,xM=`#define NORMAL
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
}`,SM=`#define NORMAL
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
}`,EM=`#define PHONG
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
}`,MM=`#define PHONG
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
}`,wM=`#define STANDARD
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
}`,TM=`#define STANDARD
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
}`,AM=`#define TOON
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
}`,bM=`#define TOON
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
}`,RM=`uniform float size;
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
}`,CM=`uniform vec3 diffuse;
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
}`,PM=`#include <common>
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
}`,LM=`uniform vec3 color;
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
}`,DM=`uniform float rotation;
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
}`,NM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:tS,alphahash_pars_fragment:nS,alphamap_fragment:iS,alphamap_pars_fragment:rS,alphatest_fragment:sS,alphatest_pars_fragment:oS,aomap_fragment:aS,aomap_pars_fragment:lS,batching_pars_vertex:uS,batching_vertex:cS,begin_vertex:dS,beginnormal_vertex:hS,bsdfs:fS,iridescence_fragment:pS,bumpmap_pars_fragment:mS,clipping_planes_fragment:gS,clipping_planes_pars_fragment:vS,clipping_planes_pars_vertex:_S,clipping_planes_vertex:yS,color_fragment:xS,color_pars_fragment:SS,color_pars_vertex:ES,color_vertex:MS,common:wS,cube_uv_reflection_fragment:TS,defaultnormal_vertex:AS,displacementmap_pars_vertex:bS,displacementmap_vertex:RS,emissivemap_fragment:CS,emissivemap_pars_fragment:PS,colorspace_fragment:LS,colorspace_pars_fragment:DS,envmap_fragment:NS,envmap_common_pars_fragment:IS,envmap_pars_fragment:US,envmap_pars_vertex:FS,envmap_physical_pars_fragment:jS,envmap_vertex:kS,fog_vertex:OS,fog_pars_vertex:zS,fog_fragment:BS,fog_pars_fragment:GS,gradientmap_pars_fragment:HS,lightmap_pars_fragment:VS,lights_lambert_fragment:WS,lights_lambert_pars_fragment:XS,lights_pars_begin:$S,lights_toon_fragment:YS,lights_toon_pars_fragment:qS,lights_phong_fragment:KS,lights_phong_pars_fragment:ZS,lights_physical_fragment:QS,lights_physical_pars_fragment:JS,lights_fragment_begin:eE,lights_fragment_maps:tE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:sE,logdepthbuf_vertex:oE,map_fragment:aE,map_pars_fragment:lE,map_particle_fragment:uE,map_particle_pars_fragment:cE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:hE,morphinstance_vertex:fE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:vE,normal_fragment_begin:_E,normal_fragment_maps:yE,normal_pars_fragment:xE,normal_pars_vertex:SE,normal_vertex:EE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:bE,opaque_fragment:RE,packing:CE,premultiplied_alpha_fragment:PE,project_vertex:LE,dithering_fragment:DE,dithering_pars_fragment:NE,roughnessmap_fragment:IE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:kE,shadowmap_vertex:OE,shadowmask_pars_fragment:zE,skinbase_vertex:BE,skinning_pars_vertex:GE,skinning_vertex:HE,skinnormal_vertex:VE,specularmap_fragment:WE,specularmap_pars_fragment:XE,tonemapping_fragment:$E,tonemapping_pars_fragment:jE,transmission_fragment:YE,transmission_pars_fragment:qE,uv_pars_fragment:KE,uv_pars_vertex:ZE,uv_vertex:QE,worldpos_vertex:JE,background_vert:eM,background_frag:tM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:rM,cube_frag:sM,depth_vert:oM,depth_frag:aM,distanceRGBA_vert:lM,distanceRGBA_frag:uM,equirect_vert:cM,equirect_frag:dM,linedashed_vert:hM,linedashed_frag:fM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:vM,meshmatcap_vert:_M,meshmatcap_frag:yM,meshnormal_vert:xM,meshnormal_frag:SM,meshphong_vert:EM,meshphong_frag:MM,meshphysical_vert:wM,meshphysical_frag:TM,meshtoon_vert:AM,meshtoon_frag:bM,points_vert:RM,points_frag:CM,shadow_vert:PM,shadow_frag:LM,sprite_vert:DM,sprite_frag:NM},De={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ui={basic:{uniforms:Un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Un([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Un([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Un([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Un([De.points,De.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Un([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Un([De.common,De.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Un([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Un([De.sprite,De.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Un([De.common,De.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Un([De.lights,De.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ui.physical={uniforms:Un([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const su={r:0,b:0,g:0},cs=new ur,IM=new $t;function UM(r,e,t,n,o,a,u){const c=new Ct(0);let h=a===!0?0:1,f,m,g=null,v=0,x=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?t:e).get(w)),w}function M(L){let w=!1;const U=E(L);U===null?y(c,h):U&&U.isColor&&(y(U,1),w=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,u):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,w){const U=E(w);U&&(U.isCubeTexture||U.mapping===bu)?(m===void 0&&(m=new sr(new Aa(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:go(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(C,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),cs.copy(w.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),m.material.uniforms.envMap.value=U,m.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(IM.makeRotationFromEuler(cs)),m.material.toneMapped=Rt.getTransfer(U.colorSpace)!==It,(g!==U||v!==U.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=U,v=U.version,x=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(f===void 0&&(f=new sr(new Cu(2,2),new Xr({name:"BackgroundMaterial",uniforms:go(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=U,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(U.colorSpace)!==It,U.matrixAutoUpdate===!0&&U.updateMatrix(),f.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||v!==U.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,g=U,v=U.version,x=r.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function y(L,w){L.getRGB(su,Vv(r)),n.buffers.color.setClear(su.r,su.g,su.b,w,u)}function I(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,w=1){c.set(L),h=w,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,y(c,h)},render:M,addToRenderList:S,dispose:I}}function FM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},o=v(null);let a=o,u=!1;function c(T,z,j,K,oe){let de=!1;const ae=g(K,j,z);a!==ae&&(a=ae,f(a.object)),de=x(T,K,j,oe),de&&E(T,K,j,oe),oe!==null&&e.update(oe,r.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,w(T,z,j,K),oe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return r.createVertexArray()}function f(T){return r.bindVertexArray(T)}function m(T){return r.deleteVertexArray(T)}function g(T,z,j){const K=j.wireframe===!0;let oe=n[T.id];oe===void 0&&(oe={},n[T.id]=oe);let de=oe[z.id];de===void 0&&(de={},oe[z.id]=de);let ae=de[K];return ae===void 0&&(ae=v(h()),de[K]=ae),ae}function v(T){const z=[],j=[],K=[];for(let oe=0;oe<t;oe++)z[oe]=0,j[oe]=0,K[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:K,object:T,attributes:{},index:null}}function x(T,z,j,K){const oe=a.attributes,de=z.attributes;let ae=0;const ce=j.getAttributes();for(const H in ce)if(ce[H].location>=0){const re=oe[H];let R=de[H];if(R===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(R=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(R=T.instanceColor)),re===void 0||re.attribute!==R||R&&re.data!==R.data)return!0;ae++}return a.attributesNum!==ae||a.index!==K}function E(T,z,j,K){const oe={},de=z.attributes;let ae=0;const ce=j.getAttributes();for(const H in ce)if(ce[H].location>=0){let re=de[H];re===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(re=T.instanceColor));const R={};R.attribute=re,re&&re.data&&(R.data=re.data),oe[H]=R,ae++}a.attributes=oe,a.attributesNum=ae,a.index=K}function M(){const T=a.newAttributes;for(let z=0,j=T.length;z<j;z++)T[z]=0}function S(T){y(T,0)}function y(T,z){const j=a.newAttributes,K=a.enabledAttributes,oe=a.attributeDivisors;j[T]=1,K[T]===0&&(r.enableVertexAttribArray(T),K[T]=1),oe[T]!==z&&(r.vertexAttribDivisor(T,z),oe[T]=z)}function I(){const T=a.newAttributes,z=a.enabledAttributes;for(let j=0,K=z.length;j<K;j++)z[j]!==T[j]&&(r.disableVertexAttribArray(j),z[j]=0)}function L(T,z,j,K,oe,de,ae){ae===!0?r.vertexAttribIPointer(T,z,j,oe,de):r.vertexAttribPointer(T,z,j,K,oe,de)}function w(T,z,j,K){M();const oe=K.attributes,de=j.getAttributes(),ae=z.defaultAttributeValues;for(const ce in de){const H=de[ce];if(H.location>=0){let ue=oe[ce];if(ue===void 0&&(ce==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),ce==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ue!==void 0){const re=ue.normalized,R=ue.itemSize,X=e.get(ue);if(X===void 0)continue;const me=X.buffer,W=X.type,se=X.bytesPerElement,ve=W===r.INT||W===r.UNSIGNED_INT||ue.gpuType===ef;if(ue.isInterleavedBufferAttribute){const ge=ue.data,be=ge.stride,je=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)y(H.location+Oe,ge.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,me);for(let Oe=0;Oe<H.locationSize;Oe++)L(H.location+Oe,R/H.locationSize,W,re,be*se,(je+R/H.locationSize*Oe)*se,ve)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<H.locationSize;ge++)y(H.location+ge,ue.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<H.locationSize;ge++)S(H.location+ge);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ge=0;ge<H.locationSize;ge++)L(H.location+ge,R/H.locationSize,W,re,R*se,R/H.locationSize*ge*se,ve)}}else if(ae!==void 0){const re=ae[ce];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(H.location,re);break;case 3:r.vertexAttrib3fv(H.location,re);break;case 4:r.vertexAttrib4fv(H.location,re);break;default:r.vertexAttrib1fv(H.location,re)}}}}I()}function U(){O();for(const T in n){const z=n[T];for(const j in z){const K=z[j];for(const oe in K)m(K[oe].object),delete K[oe];delete z[j]}delete n[T]}}function C(T){if(n[T.id]===void 0)return;const z=n[T.id];for(const j in z){const K=z[j];for(const oe in K)m(K[oe].object),delete K[oe];delete z[j]}delete n[T.id]}function N(T){for(const z in n){const j=n[z];if(j[T.id]===void 0)continue;const K=j[T.id];for(const oe in K)m(K[oe].object),delete K[oe];delete j[T.id]}}function O(){P(),u=!0,a!==o&&(a=o,f(a.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:O,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:S,disableUnusedAttributes:I}}function kM(r,e,t){let n;function o(f){n=f}function a(f,m){r.drawArrays(n,f,m),t.update(m,n,1)}function u(f,m,g){g!==0&&(r.drawArraysInstanced(n,f,m,g),t.update(m,n,g))}function c(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,g);let x=0;for(let E=0;E<g;E++)x+=m[E];t.update(x,n,1)}function h(f,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<f.length;E++)u(f[E],m[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];t.update(E,n,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function OM(r,e,t,n){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(N){return!(N!==Ai&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const O=N===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==lr&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ir&&!O)}function h(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=E>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:U,maxSamples:C}}function zM(r){const e=this;let t=null,n=0,o=!1,a=!1;const u=new fs,c=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||n!==0||o;return o=v,n=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,y=r.get(g);if(!o||E===null||E.length===0||a&&!S)a?m(null):f();else{const I=a?0:n,L=I*4;let w=y.clippingState||null;h.value=w,w=m(E,v,L,x);for(let U=0;U!==L;++U)w[U]=t[U];y.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=I}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,v,x,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=h.value,E!==!0||S===null){const y=x+M*4,I=v.matrixWorldInverse;c.getNormalMatrix(I),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,w=x;L!==M;++L,w+=4)u.copy(g[L]).applyMatrix4(I,c),u.normal.toArray(S,w),S[w+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function BM(r){let e=new WeakMap;function t(u,c){return c===hh?u.mapping=fo:c===fh&&(u.mapping=po),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===hh||c===fh)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const f=new zx(h.height);return f.fromEquirectangularTexture(r,u),e.set(u,f),u.addEventListener("dispose",o),t(f.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ao=4,wg=[.125,.215,.35,.446,.526,.582],gs=20,Bd=new qx,Tg=new Ct;let Gd=null,Hd=0,Vd=0,Wd=!1;const ps=(1+Math.sqrt(5))/2,ro=1/ps,Ag=[new ie(-ps,ro,0),new ie(ps,ro,0),new ie(-ro,0,ps),new ie(ro,0,ps),new ie(0,ps,-ro),new ie(0,ps,ro),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],GM=new ie;class bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100,a={}){const{size:u=256,position:c=GM}=a;Gd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,o,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,Hd,Vd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,ou(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Sa,format:Ai,colorSpace:mo,depthBuffer:!1},o=Rg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HM(a)),this._blurMaterial=VM(a,e,t)}return o}_compileMaterial(e){const t=new sr(this._lodPlanes[0],e);this._renderer.compile(t,Bd)}_sceneToCubeUV(e,t,n,o,a){const h=new ui(90,1,t,n),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Tg),g.toneMapping=Hr,g.autoClear=!1;const E=new Bv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),M=new sr(new Aa,E);let S=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,S=!0):(E.color.copy(Tg),S=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(h.up.set(0,f[I],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+m[I],a.y,a.z)):L===1?(h.up.set(0,0,f[I]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+m[I],a.z)):(h.up.set(0,f[I],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+m[I]));const w=this._cubeSize;ou(o,L*w,I>2?w:0,w,w),g.setRenderTarget(o),S&&g.render(M,h),g.render(e,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===fo||e.mapping===po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new sr(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;ou(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(u,Bd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Ag[(o-a-1)%Ag.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,o,"latitudinal",a),this._halfBlur(u,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,u,c){const h=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new sr(this._lodPlanes[o],f),v=f.uniforms,x=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*gs-1),M=a/E,S=isFinite(a)?1+Math.floor(m*M):gs;S>gs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gs}`);const y=[];let I=0;for(let N=0;N<gs;++N){const O=N/M,P=Math.exp(-O*O/2);y.push(P),N===0?I+=P:N<S&&(I+=2*P)}for(let N=0;N<y.length;N++)y[N]=y[N]/I;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-n;const w=this._sizeLods[o],U=3*w*(o>L-ao?o-L+ao:0),C=4*(this._cubeSize-w);ou(t,U,C,3*w,2*w),h.setRenderTarget(t),h.render(g,Bd)}}function HM(r){const e=[],t=[],n=[];let o=r;const a=r-ao+1+wg.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let h=1/c;u>r-ao?h=wg[u-r+ao-1]:u===0&&(h=0),n.push(h);const f=1/(c-2),m=-f,g=1+f,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,E=6,M=3,S=2,y=1,I=new Float32Array(M*E*x),L=new Float32Array(S*E*x),w=new Float32Array(y*E*x);for(let C=0;C<x;C++){const N=C%3*2/3-1,O=C>2?0:-1,P=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];I.set(P,M*E*C),L.set(v,S*E*C);const T=[C,C,C,C,C,C];w.set(T,y*E*C)}const U=new Ri;U.setAttribute("position",new Jn(I,M)),U.setAttribute("uv",new Jn(L,S)),U.setAttribute("faceIndex",new Jn(w,y)),e.push(U),o>ao&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rg(r,e,t){const n=new xs(r,e,t);return n.texture.mapping=bu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ou(r,e,t,n,o){r.viewport.set(e,t,n,o),r.scissor.set(e,t,n,o)}function VM(r,e,t){const n=new Float32Array(gs),o=new ie(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:uf(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Cg(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Pg(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function uf(){return`

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
	`}function WM(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===hh||h===fh,m=h===fo||h===po;if(f||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new bg(r)),g=f?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return f&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new bg(r)),g=f?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function o(c){let h=0;const f=6;for(let m=0;m<f;m++)c[m]!==void 0&&h++;return h===f}function a(c){const h=c.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function XM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&yu("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function $M(r,e,t,n){const o={},a=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function f(g){const v=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const I=x.array;M=x.version;for(let L=0,w=I.length;L<w;L+=3){const U=I[L+0],C=I[L+1],N=I[L+2];v.push(U,C,C,N,N,U)}}else if(E!==void 0){const I=E.array;M=E.version;for(let L=0,w=I.length/3-1;L<w;L+=3){const U=L+0,C=L+1,N=L+2;v.push(U,C,C,N,N,U)}}else return;const S=new(kv(v)?Hv:Gv)(v,1);S.version=M;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function m(g){const v=a.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&f(g)}else f(g);return a.get(g)}return{get:c,update:h,getWireframeAttribute:m}}function jM(r,e,t){let n;function o(v){n=v}let a,u;function c(v){a=v.type,u=v.bytesPerElement}function h(v,x){r.drawElements(n,x,a,v*u),t.update(x,n,1)}function f(v,x,E){E!==0&&(r.drawElementsInstanced(n,x,a,v*u,E),t.update(x,n,E))}function m(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,a,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];t.update(S,n,1)}function g(v,x,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)f(v[y]/u,x[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(n,x,0,a,v,0,M,0,E);let y=0;for(let I=0;I<E;I++)y+=x[I]*M[I];t.update(y,n,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function YM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function qM(r,e,t){const n=new WeakMap,o=new Zt;function a(u,c,h){const f=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=n.get(c);if(v===void 0||v.count!==g){let T=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",T)};var x=T;v!==void 0&&v.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],I=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let w=0;E===!0&&(w=1),M===!0&&(w=2),S===!0&&(w=3);let U=c.attributes.position.count*w,C=1;U>e.maxTextureSize&&(C=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const N=new Float32Array(U*C*4*g),O=new Ov(N,U,C,g);O.type=ir,O.needsUpdate=!0;const P=w*4;for(let z=0;z<g;z++){const j=y[z],K=I[z],oe=L[z],de=U*C*4*z;for(let ae=0;ae<j.count;ae++){const ce=ae*P;E===!0&&(o.fromBufferAttribute(j,ae),N[de+ce+0]=o.x,N[de+ce+1]=o.y,N[de+ce+2]=o.z,N[de+ce+3]=0),M===!0&&(o.fromBufferAttribute(K,ae),N[de+ce+4]=o.x,N[de+ce+5]=o.y,N[de+ce+6]=o.z,N[de+ce+7]=0),S===!0&&(o.fromBufferAttribute(oe,ae),N[de+ce+8]=o.x,N[de+ce+9]=o.y,N[de+ce+10]=o.z,N[de+ce+11]=oe.itemSize===4?o.w:1)}}v={count:g,texture:O,size:new Ut(U,C)},n.set(c,v),c.addEventListener("dispose",T)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<f.length;S++)E+=f[S];const M=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:a}}function KM(r,e,t,n){let o=new WeakMap;function a(h){const f=n.render.frame,m=h.geometry,g=e.get(h,m);if(o.get(g)!==f&&(e.update(g),o.set(g,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,f))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==f&&(v.update(),o.set(v,f))}return g}function u(){o=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:u}}const Zv=new Xn,Lg=new qv(1,1),Qv=new Ov,Jv=new Ex,e_=new Xv,Dg=[],Ng=[],Ig=new Float32Array(16),Ug=new Float32Array(9),Fg=new Float32Array(4);function So(r,e,t){const n=r[0];if(n<=0||n>0)return r;const o=e*t;let a=Dg[o];if(a===void 0&&(a=new Float32Array(o),Dg[o]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Pu(r,e){let t=Ng[e];t===void 0&&(t=new Int32Array(e),Ng[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ZM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function tw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Fg.set(n),r.uniformMatrix2fv(this.addr,!1,Fg),an(t,n)}}function nw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Ug.set(n),r.uniformMatrix3fv(this.addr,!1,Ug),an(t,n)}}function iw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Ig.set(n),r.uniformMatrix4fv(this.addr,!1,Ig),an(t,n)}}function rw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function ow(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function aw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function lw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function uw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function cw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function dw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function hw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o);let a;this.type===r.SAMPLER_2D_SHADOW?(Lg.compareFunction=Fv,a=Lg):a=Zv,t.setTexture2D(e||a,o)}function fw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Jv,o)}function pw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||e_,o)}function mw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||Qv,o)}function gw(r){switch(r){case 5126:return ZM;case 35664:return QM;case 35665:return JM;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return ow;case 35669:case 35673:return aw;case 5125:return lw;case 36294:return uw;case 36295:return cw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}function vw(r,e){r.uniform1fv(this.addr,e)}function _w(r,e){const t=So(e,this.size,2);r.uniform2fv(this.addr,t)}function yw(r,e){const t=So(e,this.size,3);r.uniform3fv(this.addr,t)}function xw(r,e){const t=So(e,this.size,4);r.uniform4fv(this.addr,t)}function Sw(r,e){const t=So(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ew(r,e){const t=So(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Mw(r,e){const t=So(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ww(r,e){r.uniform1iv(this.addr,e)}function Tw(r,e){r.uniform2iv(this.addr,e)}function Aw(r,e){r.uniform3iv(this.addr,e)}function bw(r,e){r.uniform4iv(this.addr,e)}function Rw(r,e){r.uniform1uiv(this.addr,e)}function Cw(r,e){r.uniform2uiv(this.addr,e)}function Pw(r,e){r.uniform3uiv(this.addr,e)}function Lw(r,e){r.uniform4uiv(this.addr,e)}function Dw(r,e,t){const n=this.cache,o=e.length,a=Pu(t,o);on(n,a)||(r.uniform1iv(this.addr,a),an(n,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Zv,a[u])}function Nw(r,e,t){const n=this.cache,o=e.length,a=Pu(t,o);on(n,a)||(r.uniform1iv(this.addr,a),an(n,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Jv,a[u])}function Iw(r,e,t){const n=this.cache,o=e.length,a=Pu(t,o);on(n,a)||(r.uniform1iv(this.addr,a),an(n,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||e_,a[u])}function Uw(r,e,t){const n=this.cache,o=e.length,a=Pu(t,o);on(n,a)||(r.uniform1iv(this.addr,a),an(n,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Qv,a[u])}function Fw(r){switch(r){case 5126:return vw;case 35664:return _w;case 35665:return yw;case 35666:return xw;case 35674:return Sw;case 35675:return Ew;case 35676:return Mw;case 5124:case 35670:return ww;case 35667:case 35671:return Tw;case 35668:case 35672:return Aw;case 35669:case 35673:return bw;case 5125:return Rw;case 36294:return Cw;case 36295:return Pw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Uw}}class kw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gw(t.type)}}class Ow{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fw(t.type)}}class zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],n)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function kg(r,e){r.seq.push(e),r.map[e.id]=e}function Bw(r,e,t){const n=r.name,o=n.length;for(Xd.lastIndex=0;;){const a=Xd.exec(n),u=Xd.lastIndex;let c=a[1];const h=a[2]==="]",f=a[3];if(h&&(c=c|0),f===void 0||f==="["&&u+2===o){kg(t,f===void 0?new kw(c,r,e):new Ow(c,r,e));break}else{let g=t.map[c];g===void 0&&(g=new zw(c),kg(t,g)),t=g}}}class xu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);Bw(a,u,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&n.push(u)}return n}}function Og(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Gw=37297;let Hw=0;function Vw(r,e){const t=r.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const zg=new mt;function Ww(r){Rt._getMatrix(zg,Rt.workingColorSpace,r);const e=`mat3( ${zg.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(r)){case Eu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Vw(r.getShaderSource(e),u)}else return o}function Xw(r,e){const t=Ww(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $w(r,e){let t;switch(e){case j0:t="Linear";break;case Y0:t="Reinhard";break;case q0:t="Cineon";break;case K0:t="ACESFilmic";break;case Q0:t="AgX";break;case J0:t="Neutral";break;case Z0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const au=new ie;function jw(){Rt.getLuminanceCoefficients(au);const r=au.x.toFixed(4),e=au.y.toFixed(4),t=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function qw(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kw(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function ma(r){return r!==""}function Gg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(r){return r.replace(Zw,Jw)}const Qw=new Map;function Jw(r,e){let t=gt[e];if(t===void 0){const n=Qw.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xh(t)}const eT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vg(r){return r.replace(eT,tT)}function tT(r,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Wg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function nT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Tv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===A0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function iT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fo:case po:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function sT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Av:e="ENVMAP_BLENDING_MULTIPLY";break;case X0:e="ENVMAP_BLENDING_MIX";break;case $0:e="ENVMAP_BLENDING_ADD";break}return e}function oT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aT(r,e,t,n){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=nT(t),f=iT(t),m=rT(t),g=sT(t),v=oT(t),x=Yw(t),E=qw(a),M=o.createProgram();let S,y,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ma).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ma).join(`
`),y.length>0&&(y+=`
`)):(S=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),y=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?gt.tonemapping_pars_fragment:"",t.toneMapping!==Hr?$w("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Xw("linearToOutputTexel",t.outputColorSpace),jw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),u=Xh(u),u=Gg(u,t),u=Hg(u,t),c=Xh(c),c=Gg(c,t),c=Hg(c,t),u=Vg(u),c=Vg(c),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=I+S+u,w=I+y+c,U=Og(o,o.VERTEX_SHADER,L),C=Og(o,o.FRAGMENT_SHADER,w);o.attachShader(M,U),o.attachShader(M,C),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function N(z){if(r.debug.checkShaderErrors){const j=o.getProgramInfoLog(M).trim(),K=o.getShaderInfoLog(U).trim(),oe=o.getShaderInfoLog(C).trim();let de=!0,ae=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,U,C);else{const ce=Bg(o,U,"vertex"),H=Bg(o,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+ce+`
`+H)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(K===""||oe==="")&&(ae=!1);ae&&(z.diagnostics={runnable:de,programLog:j,vertexShader:{log:K,prefix:S},fragmentShader:{log:oe,prefix:y}})}o.deleteShader(U),o.deleteShader(C),O=new xu(o,M),P=Kw(o,M)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(M,Gw)),T},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=C,this}let lT=0;class uT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cT(e),t.set(e,n)),n}}class cT{constructor(e){this.id=lT++,this.code=e,this.usedTimes=0}}function dT(r,e,t,n,o,a,u){const c=new lf,h=new uT,f=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return f.add(P),P===0?"uv":`uv${P}`}function S(P,T,z,j,K){const oe=j.fog,de=K.geometry,ae=P.isMeshStandardMaterial?j.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),H=ce&&ce.mapping===bu?ce.image.height:null,ue=E[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const re=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,R=re!==void 0?re.length:0;let X=0;de.morphAttributes.position!==void 0&&(X=1),de.morphAttributes.normal!==void 0&&(X=2),de.morphAttributes.color!==void 0&&(X=3);let me,W,se,ve;if(ue){const wt=Ui[ue];me=wt.vertexShader,W=wt.fragmentShader}else me=P.vertexShader,W=P.fragmentShader,h.update(P),se=h.getVertexShaderID(P),ve=h.getFragmentShaderID(P);const ge=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),je=K.isInstancedMesh===!0,Oe=K.isBatchedMesh===!0,Pt=!!P.map,Lt=!!P.matcap,ut=!!ce,B=!!P.aoMap,Qt=!!P.lightMap,pt=!!P.bumpMap,ht=!!P.normalMap,qe=!!P.displacementMap,xt=!!P.emissiveMap,Be=!!P.metalnessMap,F=!!P.roughnessMap,b=P.anisotropy>0,J=P.clearcoat>0,fe=P.dispersion>0,_e=P.iridescence>0,he=P.sheen>0,We=P.transmission>0,Ce=b&&!!P.anisotropyMap,et=J&&!!P.clearcoatMap,Je=J&&!!P.clearcoatNormalMap,Ee=J&&!!P.clearcoatRoughnessMap,Ge=_e&&!!P.iridescenceMap,st=_e&&!!P.iridescenceThicknessMap,ot=he&&!!P.sheenColorMap,He=he&&!!P.sheenRoughnessMap,vt=!!P.specularMap,ct=!!P.specularColorMap,Dt=!!P.specularIntensityMap,$=We&&!!P.transmissionMap,Pe=We&&!!P.thicknessMap,le=!!P.gradientMap,pe=!!P.alphaMap,Ie=P.alphaTest>0,Ne=!!P.alphaHash,dt=!!P.extensions;let zt=Hr;P.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(zt=r.toneMapping);const tn={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:me,fragmentShader:W,defines:P.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Oe,batchingColor:Oe&&K._colorsTexture!==null,instancing:je,instancingColor:je&&K.instanceColor!==null,instancingMorph:je&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:mo,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:Lt,envMap:ut,envMapMode:ut&&ce.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:Qt,bumpMap:pt,normalMap:ht,displacementMap:v&&qe,emissiveMap:xt,normalMapObjectSpace:ht&&P.normalMapType===rx,normalMapTangentSpace:ht&&P.normalMapType===ix,metalnessMap:Be,roughnessMap:F,anisotropy:b,anisotropyMap:Ce,clearcoat:J,clearcoatMap:et,clearcoatNormalMap:Je,clearcoatRoughnessMap:Ee,dispersion:fe,iridescence:_e,iridescenceMap:Ge,iridescenceThicknessMap:st,sheen:he,sheenColorMap:ot,sheenRoughnessMap:He,specularMap:vt,specularColorMap:ct,specularIntensityMap:Dt,transmission:We,transmissionMap:$,thicknessMap:Pe,gradientMap:le,opaque:P.transparent===!1&&P.blending===lo&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ie,alphaHash:Ne,combine:P.combine,mapUv:Pt&&M(P.map.channel),aoMapUv:B&&M(P.aoMap.channel),lightMapUv:Qt&&M(P.lightMap.channel),bumpMapUv:pt&&M(P.bumpMap.channel),normalMapUv:ht&&M(P.normalMap.channel),displacementMapUv:qe&&M(P.displacementMap.channel),emissiveMapUv:xt&&M(P.emissiveMap.channel),metalnessMapUv:Be&&M(P.metalnessMap.channel),roughnessMapUv:F&&M(P.roughnessMap.channel),anisotropyMapUv:Ce&&M(P.anisotropyMap.channel),clearcoatMapUv:et&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:Je&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:st&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:He&&M(P.sheenRoughnessMap.channel),specularMapUv:vt&&M(P.specularMap.channel),specularColorMapUv:ct&&M(P.specularColorMap.channel),specularIntensityMapUv:Dt&&M(P.specularIntensityMap.channel),transmissionMapUv:$&&M(P.transmissionMap.channel),thicknessMapUv:Pe&&M(P.thicknessMap.channel),alphaMapUv:pe&&M(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ht||b),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!de.attributes.uv&&(Pt||pe),fog:!!oe,useFog:P.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:be,skinning:K.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:X,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&Rt.getTransfer(P.map.colorSpace)===It,decodeVideoTextureEmissive:xt&&P.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(P.emissiveMap.colorSpace)===It,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===tr,flipSided:P.side===Wn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:dt&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&P.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return tn.vertexUv1s=f.has(1),tn.vertexUv2s=f.has(2),tn.vertexUv3s=f.has(3),f.clear(),tn}function y(P){const T=[];if(P.shaderID?T.push(P.shaderID):(T.push(P.customVertexShaderID),T.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)T.push(z),T.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(I(T,P),L(T,P),T.push(r.outputColorSpace)),T.push(P.customProgramCacheKey),T.join()}function I(P,T){P.push(T.precision),P.push(T.outputColorSpace),P.push(T.envMapMode),P.push(T.envMapCubeUVHeight),P.push(T.mapUv),P.push(T.alphaMapUv),P.push(T.lightMapUv),P.push(T.aoMapUv),P.push(T.bumpMapUv),P.push(T.normalMapUv),P.push(T.displacementMapUv),P.push(T.emissiveMapUv),P.push(T.metalnessMapUv),P.push(T.roughnessMapUv),P.push(T.anisotropyMapUv),P.push(T.clearcoatMapUv),P.push(T.clearcoatNormalMapUv),P.push(T.clearcoatRoughnessMapUv),P.push(T.iridescenceMapUv),P.push(T.iridescenceThicknessMapUv),P.push(T.sheenColorMapUv),P.push(T.sheenRoughnessMapUv),P.push(T.specularMapUv),P.push(T.specularColorMapUv),P.push(T.specularIntensityMapUv),P.push(T.transmissionMapUv),P.push(T.thicknessMapUv),P.push(T.combine),P.push(T.fogExp2),P.push(T.sizeAttenuation),P.push(T.morphTargetsCount),P.push(T.morphAttributeCount),P.push(T.numDirLights),P.push(T.numPointLights),P.push(T.numSpotLights),P.push(T.numSpotLightMaps),P.push(T.numHemiLights),P.push(T.numRectAreaLights),P.push(T.numDirLightShadows),P.push(T.numPointLightShadows),P.push(T.numSpotLightShadows),P.push(T.numSpotLightShadowsWithMaps),P.push(T.numLightProbes),P.push(T.shadowMapType),P.push(T.toneMapping),P.push(T.numClippingPlanes),P.push(T.numClipIntersection),P.push(T.depthPacking)}function L(P,T){c.disableAll(),T.supportsVertexTextures&&c.enable(0),T.instancing&&c.enable(1),T.instancingColor&&c.enable(2),T.instancingMorph&&c.enable(3),T.matcap&&c.enable(4),T.envMap&&c.enable(5),T.normalMapObjectSpace&&c.enable(6),T.normalMapTangentSpace&&c.enable(7),T.clearcoat&&c.enable(8),T.iridescence&&c.enable(9),T.alphaTest&&c.enable(10),T.vertexColors&&c.enable(11),T.vertexAlphas&&c.enable(12),T.vertexUv1s&&c.enable(13),T.vertexUv2s&&c.enable(14),T.vertexUv3s&&c.enable(15),T.vertexTangents&&c.enable(16),T.anisotropy&&c.enable(17),T.alphaHash&&c.enable(18),T.batching&&c.enable(19),T.dispersion&&c.enable(20),T.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),T.fog&&c.enable(0),T.useFog&&c.enable(1),T.flatShading&&c.enable(2),T.logarithmicDepthBuffer&&c.enable(3),T.reverseDepthBuffer&&c.enable(4),T.skinning&&c.enable(5),T.morphTargets&&c.enable(6),T.morphNormals&&c.enable(7),T.morphColors&&c.enable(8),T.premultipliedAlpha&&c.enable(9),T.shadowMapEnabled&&c.enable(10),T.doubleSided&&c.enable(11),T.flipSided&&c.enable(12),T.useDepthPacking&&c.enable(13),T.dithering&&c.enable(14),T.transmission&&c.enable(15),T.sheen&&c.enable(16),T.opaque&&c.enable(17),T.pointsUvs&&c.enable(18),T.decodeVideoTexture&&c.enable(19),T.decodeVideoTextureEmissive&&c.enable(20),T.alphaToCoverage&&c.enable(21),P.push(c.mask)}function w(P){const T=E[P.type];let z;if(T){const j=Ui[T];z=Ux.clone(j.uniforms)}else z=P.uniforms;return z}function U(P,T){let z;for(let j=0,K=m.length;j<K;j++){const oe=m[j];if(oe.cacheKey===T){z=oe,++z.usedTimes;break}}return z===void 0&&(z=new aT(r,T,P,a),m.push(z)),z}function C(P){if(--P.usedTimes===0){const T=m.indexOf(P);m[T]=m[m.length-1],m.pop(),P.destroy()}}function N(P){h.remove(P)}function O(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:U,releaseProgram:C,releaseShaderCache:N,programs:m,dispose:O}}function hT(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let c=r.get(u);return c===void 0&&(c={},r.set(u,c)),c}function n(u){r.delete(u)}function o(u,c,h){r.get(u)[c]=h}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:a}}function fT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $g(){const r=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function u(g,v,x,E,M,S){let y=r[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},r[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=S),e++,y}function c(g,v,x,E,M,S){const y=u(g,v,x,E,M,S);x.transmission>0?n.push(y):x.transparent===!0?o.push(y):t.push(y)}function h(g,v,x,E,M,S){const y=u(g,v,x,E,M,S);x.transmission>0?n.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function f(g,v){t.length>1&&t.sort(g||fT),n.length>1&&n.sort(v||Xg),o.length>1&&o.sort(v||Xg)}function m(){for(let g=e,v=r.length;g<v;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:c,unshift:h,finish:m,sort:f}}function pT(){let r=new WeakMap;function e(n,o){const a=r.get(n);let u;return a===void 0?(u=new $g,r.set(n,[u])):o>=a.length?(u=new $g,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function mT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Ct};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function gT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vT=0;function _T(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yT(r){const e=new mT,t=gT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new ie);const o=new ie,a=new $t,u=new $t;function c(f){let m=0,g=0,v=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let x=0,E=0,M=0,S=0,y=0,I=0,L=0,w=0,U=0,C=0,N=0;f.sort(_T);for(let P=0,T=f.length;P<T;P++){const z=f[P],j=z.color,K=z.intensity,oe=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=j.r*K,g+=j.g*K,v+=j.b*K;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(z.sh.coefficients[ae],K);N++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,H=t.get(z);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,n.directionalShadow[x]=H,n.directionalShadowMap[x]=de,n.directionalShadowMatrix[x]=z.shadow.matrix,I++}n.directional[x]=ae,x++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(j).multiplyScalar(K),ae.distance=oe,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,n.spot[M]=ae;const ce=z.shadow;if(z.map&&(n.spotLightMap[U]=z.map,U++,ce.updateMatrices(z),z.castShadow&&C++),n.spotLightMatrix[M]=ce.matrix,z.castShadow){const H=t.get(z);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=de,w++}M++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(j).multiplyScalar(K),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=ae,S++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const ce=z.shadow,H=t.get(z);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,n.pointShadow[E]=H,n.pointShadowMap[E]=de,n.pointShadowMatrix[E]=z.shadow.matrix,L++}n.point[E]=ae,E++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(K),ae.groundColor.copy(z.groundColor).multiplyScalar(K),n.hemi[y]=ae,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=v;const O=n.hash;(O.directionalLength!==x||O.pointLength!==E||O.spotLength!==M||O.rectAreaLength!==S||O.hemiLength!==y||O.numDirectionalShadows!==I||O.numPointShadows!==L||O.numSpotShadows!==w||O.numSpotMaps!==U||O.numLightProbes!==N)&&(n.directional.length=x,n.spot.length=M,n.rectArea.length=S,n.point.length=E,n.hemi.length=y,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=w+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=N,O.directionalLength=x,O.pointLength=E,O.spotLength=M,O.rectAreaLength=S,O.hemiLength=y,O.numDirectionalShadows=I,O.numPointShadows=L,O.numSpotShadows=w,O.numSpotMaps=U,O.numLightProbes=N,n.version=vT++)}function h(f,m){let g=0,v=0,x=0,E=0,M=0;const S=m.matrixWorldInverse;for(let y=0,I=f.length;y<I;y++){const L=f[y];if(L.isDirectionalLight){const w=n.directional[g];w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),g++}else if(L.isSpotLight){const w=n.spot[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const w=n.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),u.identity(),a.copy(L.matrixWorld),a.premultiply(S),u.extractRotation(a),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const w=n.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(S),M++}}}return{setup:c,setupView:h,state:n}}function jg(r){const e=new yT(r),t=[],n=[];function o(m){f.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function u(m){n.push(m)}function c(){e.setup(t)}function h(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:u}}function xT(r){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let c;return u===void 0?(c=new jg(r),e.set(o,[c])):a>=u.length?(c=new jg(r),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const ST=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ET=`uniform sampler2D shadow_pass;
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
}`;function MT(r,e,t){let n=new $v;const o=new Ut,a=new Ut,u=new Zt,c=new $x({depthPacking:nx}),h=new jx,f={},m=t.maxTextureSize,g={[Wr]:Wn,[Wn]:Wr,[tr]:tr},v=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:ST,fragmentShader:ET}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Ri;E.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new sr(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tv;let y=this.type;this.render=function(C,N,O){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;const P=r.getRenderTarget(),T=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Gr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=y!==Ji&&this.type===Ji,oe=y===Ji&&this.type!==Ji;for(let de=0,ae=C.length;de<ae;de++){const ce=C[de],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ue=H.getFrameExtents();if(o.multiply(ue),a.copy(H.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/ue.x),o.x=a.x*ue.x,H.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/ue.y),o.y=a.y*ue.y,H.mapSize.y=a.y)),H.map===null||K===!0||oe===!0){const R=this.type!==Ji?{minFilter:bi,magFilter:bi}:{};H.map!==null&&H.map.dispose(),H.map=new xs(o.x,o.y,R),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const re=H.getViewportCount();for(let R=0;R<re;R++){const X=H.getViewport(R);u.set(a.x*X.x,a.y*X.y,a.x*X.z,a.y*X.w),j.viewport(u),H.updateMatrices(ce,R),n=H.getFrustum(),w(N,O,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===Ji&&I(H,O),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(P,T,z)};function I(C,N){const O=e.update(M);v.defines.VSM_SAMPLES!==C.blurSamples&&(v.defines.VSM_SAMPLES=C.blurSamples,x.defines.VSM_SAMPLES=C.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xs(o.x,o.y)),v.uniforms.shadow_pass.value=C.map.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(N,null,O,v,M,null),x.uniforms.shadow_pass.value=C.mapPass.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(N,null,O,x,M,null)}function L(C,N,O,P){let T=null;const z=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)T=z;else if(T=O.isPointLight===!0?h:c,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const j=T.uuid,K=N.uuid;let oe=f[j];oe===void 0&&(oe={},f[j]=oe);let de=oe[K];de===void 0&&(de=T.clone(),oe[K]=de,N.addEventListener("dispose",U)),T=de}if(T.visible=N.visible,T.wireframe=N.wireframe,P===Ji?T.side=N.shadowSide!==null?N.shadowSide:N.side:T.side=N.shadowSide!==null?N.shadowSide:g[N.side],T.alphaMap=N.alphaMap,T.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,T.map=N.map,T.clipShadows=N.clipShadows,T.clippingPlanes=N.clippingPlanes,T.clipIntersection=N.clipIntersection,T.displacementMap=N.displacementMap,T.displacementScale=N.displacementScale,T.displacementBias=N.displacementBias,T.wireframeLinewidth=N.wireframeLinewidth,T.linewidth=N.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=r.properties.get(T);j.light=O}return T}function w(C,N,O,P,T){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===Ji)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const K=e.update(C),oe=C.material;if(Array.isArray(oe)){const de=K.groups;for(let ae=0,ce=de.length;ae<ce;ae++){const H=de[ae],ue=oe[H.materialIndex];if(ue&&ue.visible){const re=L(C,ue,P,T);C.onBeforeShadow(r,C,N,O,K,re,H),r.renderBufferDirect(O,null,K,re,C,H),C.onAfterShadow(r,C,N,O,K,re,H)}}}else if(oe.visible){const de=L(C,oe,P,T);C.onBeforeShadow(r,C,N,O,K,de,null),r.renderBufferDirect(O,null,K,de,C,null),C.onAfterShadow(r,C,N,O,K,de,null)}}const j=C.children;for(let K=0,oe=j.length;K<oe;K++)w(j[K],N,O,P,T)}function U(C){C.target.removeEventListener("dispose",U);for(const O in f){const P=f[O],T=C.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}const wT={[sh]:oh,[ah]:ch,[lh]:dh,[ho]:uh,[oh]:sh,[ch]:ah,[dh]:lh,[uh]:ho};function TT(r,e){function t(){let $=!1;const Pe=new Zt;let le=null;const pe=new Zt(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!$&&(r.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){$=Ie},setClear:function(Ie,Ne,dt,zt,tn){tn===!0&&(Ie*=zt,Ne*=zt,dt*=zt),Pe.set(Ie,Ne,dt,zt),pe.equals(Pe)===!1&&(r.clearColor(Ie,Ne,dt,zt),pe.copy(Pe))},reset:function(){$=!1,le=null,pe.set(-1,0,0,0)}}}function n(){let $=!1,Pe=!1,le=null,pe=null,Ie=null;return{setReversed:function(Ne){if(Pe!==Ne){const dt=e.get("EXT_clip_control");Ne?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),Pe=Ne;const zt=Ie;Ie=null,this.setClear(zt)}},getReversed:function(){return Pe},setTest:function(Ne){Ne?ge(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(Ne){le!==Ne&&!$&&(r.depthMask(Ne),le=Ne)},setFunc:function(Ne){if(Pe&&(Ne=wT[Ne]),pe!==Ne){switch(Ne){case sh:r.depthFunc(r.NEVER);break;case oh:r.depthFunc(r.ALWAYS);break;case ah:r.depthFunc(r.LESS);break;case ho:r.depthFunc(r.LEQUAL);break;case lh:r.depthFunc(r.EQUAL);break;case uh:r.depthFunc(r.GEQUAL);break;case ch:r.depthFunc(r.GREATER);break;case dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Ne}},setLocked:function(Ne){$=Ne},setClear:function(Ne){Ie!==Ne&&(Pe&&(Ne=1-Ne),r.clearDepth(Ne),Ie=Ne)},reset:function(){$=!1,le=null,pe=null,Ie=null,Pe=!1}}}function o(){let $=!1,Pe=null,le=null,pe=null,Ie=null,Ne=null,dt=null,zt=null,tn=null;return{setTest:function(wt){$||(wt?ge(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!$&&(r.stencilMask(wt),Pe=wt)},setFunc:function(wt,Fn,Pn){(le!==wt||pe!==Fn||Ie!==Pn)&&(r.stencilFunc(wt,Fn,Pn),le=wt,pe=Fn,Ie=Pn)},setOp:function(wt,Fn,Pn){(Ne!==wt||dt!==Fn||zt!==Pn)&&(r.stencilOp(wt,Fn,Pn),Ne=wt,dt=Fn,zt=Pn)},setLocked:function(wt){$=wt},setClear:function(wt){tn!==wt&&(r.clearStencil(wt),tn=wt)},reset:function(){$=!1,Pe=null,le=null,pe=null,Ie=null,Ne=null,dt=null,zt=null,tn=null}}}const a=new t,u=new n,c=new o,h=new WeakMap,f=new WeakMap;let m={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,I=null,L=null,w=null,U=null,C=null,N=new Ct(0,0,0),O=0,P=!1,T=null,z=null,j=null,K=null,oe=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(H)[1]),ae=ce>=1):H.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ae=ce>=2);let ue=null,re={};const R=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),me=new Zt().fromArray(R),W=new Zt().fromArray(X);function se($,Pe,le,pe){const Ie=new Uint8Array(4),Ne=r.createTexture();r.bindTexture($,Ne),r.texParameteri($,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri($,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let dt=0;dt<le;dt++)$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Pe+dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Ne}const ve={};ve[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ge(r.DEPTH_TEST),u.setFunc(ho),pt(!1),ht(jm),ge(r.CULL_FACE),B(Gr);function ge($){m[$]!==!0&&(r.enable($),m[$]=!0)}function be($){m[$]!==!1&&(r.disable($),m[$]=!1)}function je($,Pe){return g[$]!==Pe?(r.bindFramebuffer($,Pe),g[$]=Pe,$===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Pe),$===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Oe($,Pe){let le=x,pe=!1;if($){le=v.get(Pe),le===void 0&&(le=[],v.set(Pe,le));const Ie=$.textures;if(le.length!==Ie.length||le[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,dt=Ie.length;Ne<dt;Ne++)le[Ne]=r.COLOR_ATTACHMENT0+Ne;le.length=Ie.length,pe=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,pe=!0);pe&&r.drawBuffers(le)}function Pt($){return E!==$?(r.useProgram($),E=$,!0):!1}const Lt={[ms]:r.FUNC_ADD,[R0]:r.FUNC_SUBTRACT,[C0]:r.FUNC_REVERSE_SUBTRACT};Lt[P0]=r.MIN,Lt[L0]=r.MAX;const ut={[D0]:r.ZERO,[N0]:r.ONE,[I0]:r.SRC_COLOR,[ih]:r.SRC_ALPHA,[B0]:r.SRC_ALPHA_SATURATE,[O0]:r.DST_COLOR,[F0]:r.DST_ALPHA,[U0]:r.ONE_MINUS_SRC_COLOR,[rh]:r.ONE_MINUS_SRC_ALPHA,[z0]:r.ONE_MINUS_DST_COLOR,[k0]:r.ONE_MINUS_DST_ALPHA,[G0]:r.CONSTANT_COLOR,[H0]:r.ONE_MINUS_CONSTANT_COLOR,[V0]:r.CONSTANT_ALPHA,[W0]:r.ONE_MINUS_CONSTANT_ALPHA};function B($,Pe,le,pe,Ie,Ne,dt,zt,tn,wt){if($===Gr){M===!0&&(be(r.BLEND),M=!1);return}if(M===!1&&(ge(r.BLEND),M=!0),$!==b0){if($!==S||wt!==P){if((y!==ms||w!==ms)&&(r.blendEquation(r.FUNC_ADD),y=ms,w=ms),wt)switch($){case lo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ym:r.blendFunc(r.ONE,r.ONE);break;case qm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Km:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case lo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ym:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Km:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}I=null,L=null,U=null,C=null,N.set(0,0,0),O=0,S=$,P=wt}return}Ie=Ie||Pe,Ne=Ne||le,dt=dt||pe,(Pe!==y||Ie!==w)&&(r.blendEquationSeparate(Lt[Pe],Lt[Ie]),y=Pe,w=Ie),(le!==I||pe!==L||Ne!==U||dt!==C)&&(r.blendFuncSeparate(ut[le],ut[pe],ut[Ne],ut[dt]),I=le,L=pe,U=Ne,C=dt),(zt.equals(N)===!1||tn!==O)&&(r.blendColor(zt.r,zt.g,zt.b,tn),N.copy(zt),O=tn),S=$,P=!1}function Qt($,Pe){$.side===tr?be(r.CULL_FACE):ge(r.CULL_FACE);let le=$.side===Wn;Pe&&(le=!le),pt(le),$.blending===lo&&$.transparent===!1?B(Gr):B($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),a.setMask($.colorWrite);const pe=$.stencilWrite;c.setTest(pe),pe&&(c.setMask($.stencilWriteMask),c.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),c.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),xt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt($){T!==$&&($?r.frontFace(r.CW):r.frontFace(r.CCW),T=$)}function ht($){$!==w0?(ge(r.CULL_FACE),$!==z&&($===jm?r.cullFace(r.BACK):$===T0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),z=$}function qe($){$!==j&&(ae&&r.lineWidth($),j=$)}function xt($,Pe,le){$?(ge(r.POLYGON_OFFSET_FILL),(K!==Pe||oe!==le)&&(r.polygonOffset(Pe,le),K=Pe,oe=le)):be(r.POLYGON_OFFSET_FILL)}function Be($){$?ge(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function F($){$===void 0&&($=r.TEXTURE0+de-1),ue!==$&&(r.activeTexture($),ue=$)}function b($,Pe,le){le===void 0&&(ue===null?le=r.TEXTURE0+de-1:le=ue);let pe=re[le];pe===void 0&&(pe={type:void 0,texture:void 0},re[le]=pe),(pe.type!==$||pe.texture!==Pe)&&(ue!==le&&(r.activeTexture(le),ue=le),r.bindTexture($,Pe||ve[$]),pe.type=$,pe.texture=Pe)}function J(){const $=re[ue];$!==void 0&&$.type!==void 0&&(r.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function fe(){try{r.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _e(){try{r.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function he(){try{r.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function We(){try{r.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ce(){try{r.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function et(){try{r.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Je(){try{r.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ee(){try{r.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ge(){try{r.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function st(){try{r.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ot($){me.equals($)===!1&&(r.scissor($.x,$.y,$.z,$.w),me.copy($))}function He($){W.equals($)===!1&&(r.viewport($.x,$.y,$.z,$.w),W.copy($))}function vt($,Pe){let le=f.get(Pe);le===void 0&&(le=new WeakMap,f.set(Pe,le));let pe=le.get($);pe===void 0&&(pe=r.getUniformBlockIndex(Pe,$.name),le.set($,pe))}function ct($,Pe){const pe=f.get(Pe).get($);h.get(Pe)!==pe&&(r.uniformBlockBinding(Pe,pe,$.__bindingPointIndex),h.set(Pe,pe))}function Dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},ue=null,re={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,I=null,L=null,w=null,U=null,C=null,N=new Ct(0,0,0),O=0,P=!1,T=null,z=null,j=null,K=null,oe=null,me.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ge,disable:be,bindFramebuffer:je,drawBuffers:Oe,useProgram:Pt,setBlending:B,setMaterial:Qt,setFlipSided:pt,setCullFace:ht,setLineWidth:qe,setPolygonOffset:xt,setScissorTest:Be,activeTexture:F,bindTexture:b,unbindTexture:J,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:Ge,texImage3D:st,updateUBOMapping:vt,uniformBlockBinding:ct,texStorage2D:Je,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:et,scissor:ot,viewport:He,reset:Dt}}function AT(r,e,t,n,o,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ut,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,b){return x?new OffscreenCanvas(F,b):wu("canvas")}function M(F,b,J){let fe=1;const _e=Be(F);if((_e.width>J||_e.height>J)&&(fe=J/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const he=Math.floor(fe*_e.width),We=Math.floor(fe*_e.height);g===void 0&&(g=E(he,We));const Ce=b?E(he,We):g;return Ce.width=he,Ce.height=We,Ce.getContext("2d").drawImage(F,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+We+")."),Ce}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),F;return F}function S(F){return F.generateMipmaps}function y(F){r.generateMipmap(F)}function I(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(F,b,J,fe,_e=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let he=b;if(b===r.RED&&(J===r.FLOAT&&(he=r.R32F),J===r.HALF_FLOAT&&(he=r.R16F),J===r.UNSIGNED_BYTE&&(he=r.R8)),b===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.R8UI),J===r.UNSIGNED_SHORT&&(he=r.R16UI),J===r.UNSIGNED_INT&&(he=r.R32UI),J===r.BYTE&&(he=r.R8I),J===r.SHORT&&(he=r.R16I),J===r.INT&&(he=r.R32I)),b===r.RG&&(J===r.FLOAT&&(he=r.RG32F),J===r.HALF_FLOAT&&(he=r.RG16F),J===r.UNSIGNED_BYTE&&(he=r.RG8)),b===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RG8UI),J===r.UNSIGNED_SHORT&&(he=r.RG16UI),J===r.UNSIGNED_INT&&(he=r.RG32UI),J===r.BYTE&&(he=r.RG8I),J===r.SHORT&&(he=r.RG16I),J===r.INT&&(he=r.RG32I)),b===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGB8UI),J===r.UNSIGNED_SHORT&&(he=r.RGB16UI),J===r.UNSIGNED_INT&&(he=r.RGB32UI),J===r.BYTE&&(he=r.RGB8I),J===r.SHORT&&(he=r.RGB16I),J===r.INT&&(he=r.RGB32I)),b===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),J===r.UNSIGNED_INT&&(he=r.RGBA32UI),J===r.BYTE&&(he=r.RGBA8I),J===r.SHORT&&(he=r.RGBA16I),J===r.INT&&(he=r.RGBA32I)),b===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),b===r.RGBA){const We=_e?Eu:Rt.getTransfer(fe);J===r.FLOAT&&(he=r.RGBA32F),J===r.HALF_FLOAT&&(he=r.RGBA16F),J===r.UNSIGNED_BYTE&&(he=We===It?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function w(F,b){let J;return F?b===null||b===ys||b===_a?J=r.DEPTH24_STENCIL8:b===ir?J=r.DEPTH32F_STENCIL8:b===va&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ys||b===_a?J=r.DEPTH_COMPONENT24:b===ir?J=r.DEPTH_COMPONENT32F:b===va&&(J=r.DEPTH_COMPONENT16),J}function U(F,b){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==bi&&F.minFilter!==Fi?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function C(F){const b=F.target;b.removeEventListener("dispose",C),O(b),b.isVideoTexture&&m.delete(b)}function N(F){const b=F.target;b.removeEventListener("dispose",N),T(b)}function O(F){const b=n.get(F);if(b.__webglInit===void 0)return;const J=F.source,fe=v.get(J);if(fe){const _e=fe[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(F),Object.keys(fe).length===0&&v.delete(J)}n.remove(F)}function P(F){const b=n.get(F);r.deleteTexture(b.__webglTexture);const J=F.source,fe=v.get(J);delete fe[b.__cacheKey],u.memory.textures--}function T(F){const b=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let _e=0;_e<b.__webglFramebuffer[fe].length;_e++)r.deleteFramebuffer(b.__webglFramebuffer[fe][_e]);else r.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)r.deleteFramebuffer(b.__webglFramebuffer[fe]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=F.textures;for(let fe=0,_e=J.length;fe<_e;fe++){const he=n.get(J[fe]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),u.memory.textures--),n.remove(J[fe])}n.remove(F)}let z=0;function j(){z=0}function K(){const F=z;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),z+=1,F}function oe(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function de(F,b){const J=n.get(F);if(F.isVideoTexture&&qe(F),F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){const fe=F.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(J,F,b);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+b)}function ae(F,b){const J=n.get(F);if(F.version>0&&J.__version!==F.version){W(J,F,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+b)}function ce(F,b){const J=n.get(F);if(F.version>0&&J.__version!==F.version){W(J,F,b);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+b)}function H(F,b){const J=n.get(F);if(F.version>0&&J.__version!==F.version){se(J,F,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+b)}const ue={[ph]:r.REPEAT,[vs]:r.CLAMP_TO_EDGE,[mh]:r.MIRRORED_REPEAT},re={[bi]:r.NEAREST,[ex]:r.NEAREST_MIPMAP_NEAREST,[Fl]:r.NEAREST_MIPMAP_LINEAR,[Fi]:r.LINEAR,[md]:r.LINEAR_MIPMAP_NEAREST,[_s]:r.LINEAR_MIPMAP_LINEAR},R={[sx]:r.NEVER,[dx]:r.ALWAYS,[ox]:r.LESS,[Fv]:r.LEQUAL,[ax]:r.EQUAL,[cx]:r.GEQUAL,[lx]:r.GREATER,[ux]:r.NOTEQUAL};function X(F,b){if(b.type===ir&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fi||b.magFilter===md||b.magFilter===Fl||b.magFilter===_s||b.minFilter===Fi||b.minFilter===md||b.minFilter===Fl||b.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,ue[b.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,ue[b.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,ue[b.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,re[b.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,re[b.minFilter]),b.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,R[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bi||b.minFilter!==Fl&&b.minFilter!==_s||b.type===ir&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function me(F,b){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",C));const fe=b.source;let _e=v.get(fe);_e===void 0&&(_e={},v.set(fe,_e));const he=oe(b);if(he!==F.__cacheKey){_e[he]===void 0&&(_e[he]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),_e[he].usedTimes++;const We=_e[F.__cacheKey];We!==void 0&&(_e[F.__cacheKey].usedTimes--,We.usedTimes===0&&P(b)),F.__cacheKey=he,F.__webglTexture=_e[he].texture}return J}function W(F,b,J){let fe=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=r.TEXTURE_3D);const _e=me(F,b),he=b.source;t.bindTexture(fe,F.__webglTexture,r.TEXTURE0+J);const We=n.get(he);if(he.version!==We.__version||_e===!0){t.activeTexture(r.TEXTURE0+J);const Ce=Rt.getPrimaries(Rt.workingColorSpace),et=b.colorSpace===Br?null:Rt.getPrimaries(b.colorSpace),Je=b.colorSpace===Br||Ce===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Ee=M(b.image,!1,o.maxTextureSize);Ee=xt(b,Ee);const Ge=a.convert(b.format,b.colorSpace),st=a.convert(b.type);let ot=L(b.internalFormat,Ge,st,b.colorSpace,b.isVideoTexture);X(fe,b);let He;const vt=b.mipmaps,ct=b.isVideoTexture!==!0,Dt=We.__version===void 0||_e===!0,$=he.dataReady,Pe=U(b,Ee);if(b.isDepthTexture)ot=w(b.format===xa,b.type),Dt&&(ct?t.texStorage2D(r.TEXTURE_2D,1,ot,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,ot,Ee.width,Ee.height,0,Ge,st,null));else if(b.isDataTexture)if(vt.length>0){ct&&Dt&&t.texStorage2D(r.TEXTURE_2D,Pe,ot,vt[0].width,vt[0].height);for(let le=0,pe=vt.length;le<pe;le++)He=vt[le],ct?$&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,He.width,He.height,Ge,st,He.data):t.texImage2D(r.TEXTURE_2D,le,ot,He.width,He.height,0,Ge,st,He.data);b.generateMipmaps=!1}else ct?(Dt&&t.texStorage2D(r.TEXTURE_2D,Pe,ot,Ee.width,Ee.height),$&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ge,st,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,ot,Ee.width,Ee.height,0,Ge,st,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ct&&Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,ot,vt[0].width,vt[0].height,Ee.depth);for(let le=0,pe=vt.length;le<pe;le++)if(He=vt[le],b.format!==Ai)if(Ge!==null)if(ct){if($)if(b.layerUpdates.size>0){const Ie=Mg(He.width,He.height,b.format,b.type);for(const Ne of b.layerUpdates){const dt=He.data.subarray(Ne*Ie/He.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,Ne,He.width,He.height,1,Ge,dt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,He.width,He.height,Ee.depth,Ge,He.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,ot,He.width,He.height,Ee.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?$&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,He.width,He.height,Ee.depth,Ge,st,He.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,ot,He.width,He.height,Ee.depth,0,Ge,st,He.data)}else{ct&&Dt&&t.texStorage2D(r.TEXTURE_2D,Pe,ot,vt[0].width,vt[0].height);for(let le=0,pe=vt.length;le<pe;le++)He=vt[le],b.format!==Ai?Ge!==null?ct?$&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,He.width,He.height,Ge,He.data):t.compressedTexImage2D(r.TEXTURE_2D,le,ot,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?$&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,He.width,He.height,Ge,st,He.data):t.texImage2D(r.TEXTURE_2D,le,ot,He.width,He.height,0,Ge,st,He.data)}else if(b.isDataArrayTexture)if(ct){if(Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,ot,Ee.width,Ee.height,Ee.depth),$)if(b.layerUpdates.size>0){const le=Mg(Ee.width,Ee.height,b.format,b.type);for(const pe of b.layerUpdates){const Ie=Ee.data.subarray(pe*le/Ee.data.BYTES_PER_ELEMENT,(pe+1)*le/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Ge,st,Ie)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ge,st,Ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ot,Ee.width,Ee.height,Ee.depth,0,Ge,st,Ee.data);else if(b.isData3DTexture)ct?(Dt&&t.texStorage3D(r.TEXTURE_3D,Pe,ot,Ee.width,Ee.height,Ee.depth),$&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ge,st,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,ot,Ee.width,Ee.height,Ee.depth,0,Ge,st,Ee.data);else if(b.isFramebufferTexture){if(Dt)if(ct)t.texStorage2D(r.TEXTURE_2D,Pe,ot,Ee.width,Ee.height);else{let le=Ee.width,pe=Ee.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,ot,le,pe,0,Ge,st,null),le>>=1,pe>>=1}}else if(vt.length>0){if(ct&&Dt){const le=Be(vt[0]);t.texStorage2D(r.TEXTURE_2D,Pe,ot,le.width,le.height)}for(let le=0,pe=vt.length;le<pe;le++)He=vt[le],ct?$&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,Ge,st,He):t.texImage2D(r.TEXTURE_2D,le,ot,Ge,st,He);b.generateMipmaps=!1}else if(ct){if(Dt){const le=Be(Ee);t.texStorage2D(r.TEXTURE_2D,Pe,ot,le.width,le.height)}$&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ge,st,Ee)}else t.texImage2D(r.TEXTURE_2D,0,ot,Ge,st,Ee);S(b)&&y(fe),We.__version=he.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function se(F,b,J){if(b.image.length!==6)return;const fe=me(F,b),_e=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+J);const he=n.get(_e);if(_e.version!==he.__version||fe===!0){t.activeTexture(r.TEXTURE0+J);const We=Rt.getPrimaries(Rt.workingColorSpace),Ce=b.colorSpace===Br?null:Rt.getPrimaries(b.colorSpace),et=b.colorSpace===Br||We===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Je=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Ge=[];for(let pe=0;pe<6;pe++)!Je&&!Ee?Ge[pe]=M(b.image[pe],!0,o.maxCubemapSize):Ge[pe]=Ee?b.image[pe].image:b.image[pe],Ge[pe]=xt(b,Ge[pe]);const st=Ge[0],ot=a.convert(b.format,b.colorSpace),He=a.convert(b.type),vt=L(b.internalFormat,ot,He,b.colorSpace),ct=b.isVideoTexture!==!0,Dt=he.__version===void 0||fe===!0,$=_e.dataReady;let Pe=U(b,st);X(r.TEXTURE_CUBE_MAP,b);let le;if(Je){ct&&Dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,vt,st.width,st.height);for(let pe=0;pe<6;pe++){le=Ge[pe].mipmaps;for(let Ie=0;Ie<le.length;Ie++){const Ne=le[Ie];b.format!==Ai?ot!==null?ct?$&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,0,0,Ne.width,Ne.height,ot,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,vt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,0,0,Ne.width,Ne.height,ot,He,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,vt,Ne.width,Ne.height,0,ot,He,Ne.data)}}}else{if(le=b.mipmaps,ct&&Dt){le.length>0&&Pe++;const pe=Be(Ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,vt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){ct?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ge[pe].width,Ge[pe].height,ot,He,Ge[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,vt,Ge[pe].width,Ge[pe].height,0,ot,He,Ge[pe].data);for(let Ie=0;Ie<le.length;Ie++){const dt=le[Ie].image[pe].image;ct?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,0,0,dt.width,dt.height,ot,He,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,vt,dt.width,dt.height,0,ot,He,dt.data)}}else{ct?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ot,He,Ge[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,vt,ot,He,Ge[pe]);for(let Ie=0;Ie<le.length;Ie++){const Ne=le[Ie];ct?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,0,0,ot,He,Ne.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,vt,ot,He,Ne.image[pe])}}}S(b)&&y(r.TEXTURE_CUBE_MAP),he.__version=_e.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function ve(F,b,J,fe,_e,he){const We=a.convert(J.format,J.colorSpace),Ce=a.convert(J.type),et=L(J.internalFormat,We,Ce,J.colorSpace),Je=n.get(b),Ee=n.get(J);if(Ee.__renderTarget=b,!Je.__hasExternalTextures){const Ge=Math.max(1,b.width>>he),st=Math.max(1,b.height>>he);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,et,Ge,st,b.depth,0,We,Ce,null):t.texImage2D(_e,he,et,Ge,st,0,We,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),ht(b)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,_e,Ee.__webglTexture,0,pt(b)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,_e,Ee.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(F,b,J){if(r.bindRenderbuffer(r.RENDERBUFFER,F),b.depthBuffer){const fe=b.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,he=w(b.stencilBuffer,_e),We=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=pt(b);ht(b)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,he,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,he,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,he,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,F)}else{const fe=b.textures;for(let _e=0;_e<fe.length;_e++){const he=fe[_e],We=a.convert(he.format,he.colorSpace),Ce=a.convert(he.type),et=L(he.internalFormat,We,Ce,he.colorSpace),Je=pt(b);J&&ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,et,b.width,b.height):ht(b)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je,et,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,et,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(F,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(b.depthTexture);fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de(b.depthTexture,0);const _e=fe.__webglTexture,he=pt(b);if(b.depthTexture.format===ya)ht(b)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(b.depthTexture.format===xa)ht(b)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function je(F){const b=n.get(F),J=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const fe=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const _e=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),b.__depthDisposeCallback=_e}b.__boundDepthTexture=fe}if(F.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const fe=F.texture.mipmaps;fe&&fe.length>0?be(b.__webglFramebuffer[0],F):be(b.__webglFramebuffer,F)}else if(J){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=r.createRenderbuffer(),ge(b.__webglDepthbuffer[fe],F,!1);else{const _e=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer[fe];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,he)}}else{const fe=F.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ge(b.__webglDepthbuffer,F,!1);else{const _e=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(F,b,J){const fe=n.get(F);b!==void 0&&ve(fe.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&je(F)}function Pt(F){const b=F.texture,J=n.get(F),fe=n.get(b);F.addEventListener("dispose",N);const _e=F.textures,he=F.isWebGLCubeRenderTarget===!0,We=_e.length>1;if(We||(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=b.version,u.memory.textures++),he){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let et=0;et<b.mipmaps.length;et++)J.__webglFramebuffer[Ce][et]=r.createFramebuffer()}else J.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(We)for(let Ce=0,et=_e.length;Ce<et;Ce++){const Je=n.get(_e[Ce]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),u.memory.textures++)}if(F.samples>0&&ht(F)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const et=_e[Ce];J.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const Je=a.convert(et.format,et.colorSpace),Ee=a.convert(et.type),Ge=L(et.internalFormat,Je,Ee,et.colorSpace,F.isXRRenderTarget===!0),st=pt(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,st,Ge,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),X(r.TEXTURE_CUBE_MAP,b);for(let Ce=0;Ce<6;Ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)ve(J.__webglFramebuffer[Ce][et],F,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,et);else ve(J.__webglFramebuffer[Ce],F,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(b)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ce=0,et=_e.length;Ce<et;Ce++){const Je=_e[Ce],Ee=n.get(Je);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),X(r.TEXTURE_2D,Je),ve(J.__webglFramebuffer,F,Je,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),S(Je)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,fe.__webglTexture),X(Ce,b),b.mipmaps&&b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)ve(J.__webglFramebuffer[et],F,b,r.COLOR_ATTACHMENT0,Ce,et);else ve(J.__webglFramebuffer,F,b,r.COLOR_ATTACHMENT0,Ce,0);S(b)&&y(Ce),t.unbindTexture()}F.depthBuffer&&je(F)}function Lt(F){const b=F.textures;for(let J=0,fe=b.length;J<fe;J++){const _e=b[J];if(S(_e)){const he=I(F),We=n.get(_e).__webglTexture;t.bindTexture(he,We),y(he),t.unbindTexture()}}}const ut=[],B=[];function Qt(F){if(F.samples>0){if(ht(F)===!1){const b=F.textures,J=F.width,fe=F.height;let _e=r.COLOR_BUFFER_BIT;const he=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=n.get(F),Ce=b.length>1;if(Ce)for(let Je=0;Je<b.length;Je++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const et=F.texture.mipmaps;et&&et.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Je=0;Je<b.length;Je++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[Je]);const Ee=n.get(b[Je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,J,fe,0,0,J,fe,_e,r.NEAREST),h===!0&&(ut.length=0,B.length=0,ut.push(r.COLOR_ATTACHMENT0+Je),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ut.push(he),B.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Je=0;Je<b.length;Je++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,We.__webglColorRenderbuffer[Je]);const Ee=n.get(b[Je]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const b=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function pt(F){return Math.min(o.maxSamples,F.samples)}function ht(F){const b=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qe(F){const b=u.render.frame;m.get(F)!==b&&(m.set(F,b),F.update())}function xt(F,b){const J=F.colorSpace,fe=F.format,_e=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==mo&&J!==Br&&(Rt.getTransfer(J)===It?(fe!==Ai||_e!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function Be(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.setTexture2D=de,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=H,this.rebindTextures=Oe,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ht}function bT(r,e){function t(n,o=Br){let a;const u=Rt.getTransfer(o);if(n===lr)return r.UNSIGNED_BYTE;if(n===tf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rv)return r.BYTE;if(n===Cv)return r.SHORT;if(n===va)return r.UNSIGNED_SHORT;if(n===ef)return r.INT;if(n===ys)return r.UNSIGNED_INT;if(n===ir)return r.FLOAT;if(n===Sa)return r.HALF_FLOAT;if(n===Lv)return r.ALPHA;if(n===Dv)return r.RGB;if(n===Ai)return r.RGBA;if(n===ya)return r.DEPTH_COMPONENT;if(n===xa)return r.DEPTH_STENCIL;if(n===Nv)return r.RED;if(n===rf)return r.RED_INTEGER;if(n===Iv)return r.RG;if(n===sf)return r.RG_INTEGER;if(n===of)return r.RGBA_INTEGER;if(n===pu||n===mu||n===gu||n===vu)if(u===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===vh||n===_h||n===yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===gh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xh||n===Sh||n===Eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===xh||n===Sh)return u===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Eh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mh||n===wh||n===Th||n===Ah||n===bh||n===Rh||n===Ch||n===Ph||n===Lh||n===Dh||n===Nh||n===Ih||n===Uh||n===Fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Mh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ih)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_u||n===kh||n===Oh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===_u)return u===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uv||n===zh||n===Bh||n===Gh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===_u)return a.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_a?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const RT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CT=`
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

}`;class PT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const o=new Xn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xr({vertexShader:RT,fragmentShader:CT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sr(new Cu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LT extends yo{constructor(e,t){super();const n=this;let o=null,a=1,u=null,c="local-floor",h=1,f=null,m=null,g=null,v=null,x=null,E=null;const M=new PT,S=t.getContextAttributes();let y=null,I=null;const L=[],w=[],U=new Ut;let C=null;const N=new ui;N.viewport=new Zt;const O=new ui;O.viewport=new Zt;const P=[N,O],T=new Zx;let z=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let se=L[W];return se===void 0&&(se=new kd,L[W]=se),se.getTargetRaySpace()},this.getControllerGrip=function(W){let se=L[W];return se===void 0&&(se=new kd,L[W]=se),se.getGripSpace()},this.getHand=function(W){let se=L[W];return se===void 0&&(se=new kd,L[W]=se),se.getHandSpace()};function K(W){const se=w.indexOf(W.inputSource);if(se===-1)return;const ve=L[se];ve!==void 0&&(ve.update(W.inputSource,W.frame,f||u),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function oe(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",de);for(let W=0;W<L.length;W++){const se=w[W];se!==null&&(w[W]=null,L[W].disconnect(se))}z=null,j=null,M.reset(),e.setRenderTarget(y),x=null,v=null,g=null,o=null,I=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){c=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(W){f=W},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ge=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?xa:ya,ge=S.stencil?_a:ys);const je={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(je),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new xs(v.textureWidth,v.textureHeight,{format:Ai,type:lr,depthTexture:new qv(v.textureWidth,v.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,ve),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new xs(x.framebufferWidth,x.framebufferHeight,{format:Ai,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),f=null,u=await o.requestReferenceSpace(c),me.setContext(o),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function de(W){for(let se=0;se<W.removed.length;se++){const ve=W.removed[se],ge=w.indexOf(ve);ge>=0&&(w[ge]=null,L[ge].disconnect(ve))}for(let se=0;se<W.added.length;se++){const ve=W.added[se];let ge=w.indexOf(ve);if(ge===-1){for(let je=0;je<L.length;je++)if(je>=w.length){w.push(ve),ge=je;break}else if(w[je]===null){w[je]=ve,ge=je;break}if(ge===-1)break}const be=L[ge];be&&be.connect(ve)}}const ae=new ie,ce=new ie;function H(W,se,ve){ae.setFromMatrixPosition(se.matrixWorld),ce.setFromMatrixPosition(ve.matrixWorld);const ge=ae.distanceTo(ce),be=se.projectionMatrix.elements,je=ve.projectionMatrix.elements,Oe=be[14]/(be[10]-1),Pt=be[14]/(be[10]+1),Lt=(be[9]+1)/be[5],ut=(be[9]-1)/be[5],B=(be[8]-1)/be[0],Qt=(je[8]+1)/je[0],pt=Oe*B,ht=Oe*Qt,qe=ge/(-B+Qt),xt=qe*-B;if(se.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(xt),W.translateZ(qe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Be=Oe+qe,F=Pt+qe,b=pt-xt,J=ht+(ge-xt),fe=Lt*Pt/F*Be,_e=ut*Pt/F*Be;W.projectionMatrix.makePerspective(b,J,fe,_e,Be,F),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ue(W,se){se===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(se.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let se=W.near,ve=W.far;M.texture!==null&&(M.depthNear>0&&(se=M.depthNear),M.depthFar>0&&(ve=M.depthFar)),T.near=O.near=N.near=se,T.far=O.far=N.far=ve,(z!==T.near||j!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,j=T.far),N.layers.mask=W.layers.mask|2,O.layers.mask=W.layers.mask|4,T.layers.mask=N.layers.mask|O.layers.mask;const ge=W.parent,be=T.cameras;ue(T,ge);for(let je=0;je<be.length;je++)ue(be[je],ge);be.length===2?H(T,N,O):T.projectionMatrix.copy(N.projectionMatrix),re(W,T,ge)};function re(W,se,ve){ve===null?W.matrix.copy(se.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(se.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Hh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(W){h=W,v!==null&&(v.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(T)};let R=null;function X(W,se){if(m=se.getViewerPose(f||u),E=se,m!==null){const ve=m.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let ge=!1;ve.length!==T.cameras.length&&(T.cameras.length=0,ge=!0);for(let Oe=0;Oe<ve.length;Oe++){const Pt=ve[Oe];let Lt=null;if(x!==null)Lt=x.getViewport(Pt);else{const B=g.getViewSubImage(v,Pt);Lt=B.viewport,Oe===0&&(e.setRenderTargetTextures(I,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(I))}let ut=P[Oe];ut===void 0&&(ut=new ui,ut.layers.enable(Oe),ut.viewport=new Zt,P[Oe]=ut),ut.matrix.fromArray(Pt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Pt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Oe===0&&(T.matrix.copy(ut.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ge===!0&&T.cameras.push(ut)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const Oe=g.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&M.init(e,Oe,o.renderState)}}for(let ve=0;ve<L.length;ve++){const ge=w[ve],be=L[ve];ge!==null&&be!==void 0&&be.update(ge,se,f||u)}R&&R(W,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),E=null}const me=new Kv;me.setAnimationLoop(X),this.setAnimationLoop=function(W){R=W},this.dispose=function(){}}}const ds=new ur,DT=new $t;function NT(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function n(S,y){y.color.getRGB(S.fogColor.value,Vv(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,I,L,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),m(S,y)):y.isMeshStandardMaterial?(a(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(a(S,y),E(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),M(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?h(S,y,I,L):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Wn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Wn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const I=e.get(y),L=I.envMap,w=I.envMapRotation;L&&(S.envMap.value=L,ds.copy(w),ds.x*=-1,ds.y*=-1,ds.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),S.envMapRotation.value.setFromMatrix4(DT.makeRotationFromEuler(ds)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,I,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*I,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,I){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Wn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const I=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function IT(r,e,t,n){let o={},a={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const w=L.program;n.uniformBlockBinding(I,w)}function f(I,L){let w=o[I.id];w===void 0&&(E(I),w=m(I),o[I.id]=w,I.addEventListener("dispose",S));const U=L.program;n.updateUBOMapping(I,U);const C=e.render.frame;a[I.id]!==C&&(v(I),a[I.id]=C)}function m(I){const L=g();I.__bindingPointIndex=L;const w=r.createBuffer(),U=I.__size,C=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,U,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function g(){for(let I=0;I<c;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const L=o[I.id],w=I.uniforms,U=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let C=0,N=w.length;C<N;C++){const O=Array.isArray(w[C])?w[C]:[w[C]];for(let P=0,T=O.length;P<T;P++){const z=O[P];if(x(z,C,P,U)===!0){const j=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let oe=0;for(let de=0;de<K.length;de++){const ae=K[de],ce=M(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,r.bufferSubData(r.UNIFORM_BUFFER,j+oe,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,oe),oe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(I,L,w,U){const C=I.value,N=L+"_"+w;if(U[N]===void 0)return typeof C=="number"||typeof C=="boolean"?U[N]=C:U[N]=C.clone(),!0;{const O=U[N];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return U[N]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function E(I){const L=I.uniforms;let w=0;const U=16;for(let N=0,O=L.length;N<O;N++){const P=Array.isArray(L[N])?L[N]:[L[N]];for(let T=0,z=P.length;T<z;T++){const j=P[T],K=Array.isArray(j.value)?j.value:[j.value];for(let oe=0,de=K.length;oe<de;oe++){const ae=K[oe],ce=M(ae),H=w%U,ue=H%ce.boundary,re=H+ue;w+=ue,re!==0&&U-re<ce.storage&&(w+=U-re),j.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=ce.storage}}}const C=w%U;return C>0&&(w+=U-C),I.__size=w,I.__cache={},this}function M(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function S(I){const L=I.target;L.removeEventListener("dispose",S);const w=u.indexOf(L.__bindingPointIndex);u.splice(w,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function y(){for(const I in o)r.deleteBuffer(o[I]);u=[],o={},a={}}return{bind:h,update:f,dispose:y}}class UT{constructor(e={}){const{canvas:t=fx(),context:n=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const I=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let U=!1;this._outputColorSpace=li;let C=0,N=0,O=null,P=-1,T=null;const z=new Zt,j=new Zt;let K=null;const oe=new Ct(0);let de=0,ae=t.width,ce=t.height,H=1,ue=null,re=null;const R=new Zt(0,0,ae,ce),X=new Zt(0,0,ae,ce);let me=!1;const W=new $v;let se=!1,ve=!1;const ge=new $t,be=new $t,je=new ie,Oe=new Zt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function ut(){return O===null?H:1}let B=n;function Qt(D,Y){return t.getContext(D,Y)}try{const D={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jh}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),B===null){const Y="webgl2";if(B=Qt(Y,D),B===null)throw Qt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let pt,ht,qe,xt,Be,F,b,J,fe,_e,he,We,Ce,et,Je,Ee,Ge,st,ot,He,vt,ct,Dt,$;function Pe(){pt=new XM(B),pt.init(),ct=new bT(B,pt),ht=new OM(B,pt,e,ct),qe=new TT(B,pt),ht.reverseDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),xt=new YM(B),Be=new hT,F=new AT(B,pt,qe,Be,ht,ct,xt),b=new BM(w),J=new WM(w),fe=new eS(B),Dt=new FM(B,fe),_e=new $M(B,fe,xt,Dt),he=new KM(B,_e,fe,xt),ot=new qM(B,ht,F),Ee=new zM(Be),We=new dT(w,b,J,pt,ht,Dt,Ee),Ce=new NT(w,Be),et=new pT,Je=new xT(pt),st=new UM(w,b,J,qe,he,x,h),Ge=new MT(w,he,ht),$=new IT(B,xt,ht,qe),He=new kM(B,pt,xt),vt=new jM(B,pt,xt),xt.programs=We.programs,w.capabilities=ht,w.extensions=pt,w.properties=Be,w.renderLists=et,w.shadowMap=Ge,w.state=qe,w.info=xt}Pe();const le=new LT(w,B);this.xr=le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const D=pt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=pt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(D){D!==void 0&&(H=D,this.setSize(ae,ce,!1))},this.getSize=function(D){return D.set(ae,ce)},this.setSize=function(D,Y,ne=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=D,ce=Y,t.width=Math.floor(D*H),t.height=Math.floor(Y*H),ne===!0&&(t.style.width=D+"px",t.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(ae*H,ce*H).floor()},this.setDrawingBufferSize=function(D,Y,ne){ae=D,ce=Y,H=ne,t.width=Math.floor(D*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(R)},this.setViewport=function(D,Y,ne,Q){D.isVector4?R.set(D.x,D.y,D.z,D.w):R.set(D,Y,ne,Q),qe.viewport(z.copy(R).multiplyScalar(H).round())},this.getScissor=function(D){return D.copy(X)},this.setScissor=function(D,Y,ne,Q){D.isVector4?X.set(D.x,D.y,D.z,D.w):X.set(D,Y,ne,Q),qe.scissor(j.copy(X).multiplyScalar(H).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(D){qe.setScissorTest(me=D)},this.setOpaqueSort=function(D){ue=D},this.setTransparentSort=function(D){re=D},this.getClearColor=function(D){return D.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(D=!0,Y=!0,ne=!0){let Q=0;if(D){let q=!1;if(O!==null){const Te=O.texture.format;q=Te===of||Te===sf||Te===rf}if(q){const Te=O.texture.type,Le=Te===lr||Te===ys||Te===va||Te===_a||Te===tf||Te===nf,Fe=st.getClearColor(),Ve=st.getClearAlpha(),at=Fe.r,it=Fe.g,$e=Fe.b;Le?(E[0]=at,E[1]=it,E[2]=$e,E[3]=Ve,B.clearBufferuiv(B.COLOR,0,E)):(M[0]=at,M[1]=it,M[2]=$e,M[3]=Ve,B.clearBufferiv(B.COLOR,0,M))}else Q|=B.COLOR_BUFFER_BIT}Y&&(Q|=B.DEPTH_BUFFER_BIT),ne&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),st.dispose(),et.dispose(),Je.dispose(),Be.dispose(),b.dispose(),J.dispose(),he.dispose(),Dt.dispose(),$.dispose(),We.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ss),le.removeEventListener("sessionend",dr),ki.stop()};function pe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const D=xt.autoReset,Y=Ge.enabled,ne=Ge.autoUpdate,Q=Ge.needsUpdate,q=Ge.type;Pe(),xt.autoReset=D,Ge.enabled=Y,Ge.autoUpdate=ne,Ge.needsUpdate=Q,Ge.type=q}function Ne(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function dt(D){const Y=D.target;Y.removeEventListener("dispose",dt),zt(Y)}function zt(D){tn(D),Be.remove(D)}function tn(D){const Y=Be.get(D).programs;Y!==void 0&&(Y.forEach(function(ne){We.releaseProgram(ne)}),D.isShaderMaterial&&We.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,ne,Q,q,Te){Y===null&&(Y=Pt);const Le=q.isMesh&&q.matrixWorld.determinant()<0,Fe=Pa(D,Y,ne,Q,q);qe.setMaterial(Q,Le);let Ve=ne.index,at=1;if(Q.wireframe===!0){if(Ve=_e.getWireframeAttribute(ne),Ve===void 0)return;at=2}const it=ne.drawRange,$e=ne.attributes.position;let St=it.start*at,ft=(it.start+it.count)*at;Te!==null&&(St=Math.max(St,Te.start*at),ft=Math.min(ft,(Te.start+Te.count)*at)),Ve!==null?(St=Math.max(St,0),ft=Math.min(ft,Ve.count)):$e!=null&&(St=Math.max(St,0),ft=Math.min(ft,$e.count));const jt=ft-St;if(jt<0||jt===1/0)return;Dt.setup(q,Q,Fe,ne,Ve);let Ht,Mt=He;if(Ve!==null&&(Ht=fe.get(Ve),Mt=vt,Mt.setIndex(Ht)),q.isMesh)Q.wireframe===!0?(qe.setLineWidth(Q.wireframeLinewidth*ut()),Mt.setMode(B.LINES)):Mt.setMode(B.TRIANGLES);else if(q.isLine){let Qe=Q.linewidth;Qe===void 0&&(Qe=1),qe.setLineWidth(Qe*ut()),q.isLineSegments?Mt.setMode(B.LINES):q.isLineLoop?Mt.setMode(B.LINE_LOOP):Mt.setMode(B.LINE_STRIP)}else q.isPoints?Mt.setMode(B.POINTS):q.isSprite&&Mt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)yu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qe=q._multiDrawStarts,Yt=q._multiDrawCounts,yt=q._multiDrawCount,_n=Ve?fe.get(Ve).bytesPerElement:1,fr=Be.get(Q).currentProgram.getUniforms();for(let Ln=0;Ln<yt;Ln++)fr.setValue(B,"_gl_DrawID",Ln),Mt.render(Qe[Ln]/_n,Yt[Ln])}else if(q.isInstancedMesh)Mt.renderInstances(St,jt,q.count);else if(ne.isInstancedBufferGeometry){const Qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Yt=Math.min(ne.instanceCount,Qe);Mt.renderInstances(St,jt,Yt)}else Mt.render(St,jt)};function wt(D,Y,ne){D.transparent===!0&&D.side===tr&&D.forceSinglePass===!1?(D.side=Wn,D.needsUpdate=!0,Es(D,Y,ne),D.side=Wr,D.needsUpdate=!0,Es(D,Y,ne),D.side=tr):Es(D,Y,ne)}this.compile=function(D,Y,ne=null){ne===null&&(ne=D),y=Je.get(ne),y.init(Y),L.push(y),ne.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),D!==ne&&D.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights();const Q=new Set;return D.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Fe=Te[Le];wt(Fe,ne,q),Q.add(Fe)}else wt(Te,ne,q),Q.add(Te)}),y=L.pop(),Q},this.compileAsync=function(D,Y,ne=null){const Q=this.compile(D,Y,ne);return new Promise(q=>{function Te(){if(Q.forEach(function(Le){Be.get(Le).currentProgram.isReady()&&Q.delete(Le)}),Q.size===0){q(D);return}setTimeout(Te,10)}pt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Fn=null;function Pn(D){Fn&&Fn(D)}function Ss(){ki.stop()}function dr(){ki.start()}const ki=new Kv;ki.setAnimationLoop(Pn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(D){Fn=D,le.setAnimationLoop(D),D===null?ki.stop():ki.start()},le.addEventListener("sessionstart",Ss),le.addEventListener("sessionend",dr),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(Y),Y=le.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,Y,O),y=Je.get(D,L.length),y.init(Y),L.push(y),be.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W.setFromProjectionMatrix(be),ve=this.localClippingEnabled,se=Ee.init(this.clippingPlanes,ve),S=et.get(D,I.length),S.init(),I.push(S),le.enabled===!0&&le.isPresenting===!0){const Te=w.xr.getDepthSensingMesh();Te!==null&&Oi(Te,Y,-1/0,w.sortObjects)}Oi(D,Y,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(ue,re),Lt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Lt&&st.addToRenderList(S,D),this.info.render.frame++,se===!0&&Ee.beginShadows();const ne=y.state.shadowsArray;Ge.render(ne,D,Y),se===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,q=S.transmissive;if(y.setupLights(),Y.isArrayCamera){const Te=Y.cameras;if(q.length>0)for(let Le=0,Fe=Te.length;Le<Fe;Le++){const Ve=Te[Le];jr(Q,q,D,Ve)}Lt&&st.render(D);for(let Le=0,Fe=Te.length;Le<Fe;Le++){const Ve=Te[Le];$r(S,D,Ve,Ve.viewport)}}else q.length>0&&jr(Q,q,D,Y),Lt&&st.render(D),$r(S,D,Y);O!==null&&N===0&&(F.updateMultisampleRenderTarget(O),F.updateRenderTargetMipmap(O)),D.isScene===!0&&D.onAfterRender(w,D,Y),Dt.resetDefaultState(),P=-1,T=null,L.pop(),L.length>0?(y=L[L.length-1],se===!0&&Ee.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Oi(D,Y,ne,Q){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)ne=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||W.intersectsSprite(D)){Q&&Oe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(be);const Le=he.update(D),Fe=D.material;Fe.visible&&S.push(D,Le,Fe,ne,Oe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||W.intersectsObject(D))){const Le=he.update(D),Fe=D.material;if(Q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Oe.copy(D.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Oe.copy(Le.boundingSphere.center)),Oe.applyMatrix4(D.matrixWorld).applyMatrix4(be)),Array.isArray(Fe)){const Ve=Le.groups;for(let at=0,it=Ve.length;at<it;at++){const $e=Ve[at],St=Fe[$e.materialIndex];St&&St.visible&&S.push(D,Le,St,ne,Oe.z,$e)}}else Fe.visible&&S.push(D,Le,Fe,ne,Oe.z,null)}}const Te=D.children;for(let Le=0,Fe=Te.length;Le<Fe;Le++)Oi(Te[Le],Y,ne,Q)}function $r(D,Y,ne,Q){const q=D.opaque,Te=D.transmissive,Le=D.transparent;y.setupLightsView(ne),se===!0&&Ee.setGlobalState(w.clippingPlanes,ne),Q&&qe.viewport(z.copy(Q)),q.length>0&&hr(q,Y,ne),Te.length>0&&hr(Te,Y,ne),Le.length>0&&hr(Le,Y,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function jr(D,Y,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[Q.id]===void 0&&(y.state.transmissionRenderTarget[Q.id]=new xs(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Sa:lr,minFilter:_s,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Te=y.state.transmissionRenderTarget[Q.id],Le=Q.viewport||z;Te.setSize(Le.z*w.transmissionResolutionScale,Le.w*w.transmissionResolutionScale);const Fe=w.getRenderTarget();w.setRenderTarget(Te),w.getClearColor(oe),de=w.getClearAlpha(),de<1&&w.setClearColor(16777215,.5),w.clear(),Lt&&st.render(ne);const Ve=w.toneMapping;w.toneMapping=Hr;const at=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),y.setupLightsView(Q),se===!0&&Ee.setGlobalState(w.clippingPlanes,Q),hr(D,ne,Q),F.updateMultisampleRenderTarget(Te),F.updateRenderTargetMipmap(Te),pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let $e=0,St=Y.length;$e<St;$e++){const ft=Y[$e],jt=ft.object,Ht=ft.geometry,Mt=ft.material,Qe=ft.group;if(Mt.side===tr&&jt.layers.test(Q.layers)){const Yt=Mt.side;Mt.side=Wn,Mt.needsUpdate=!0,Ra(jt,ne,Q,Ht,Mt,Qe),Mt.side=Yt,Mt.needsUpdate=!0,it=!0}}it===!0&&(F.updateMultisampleRenderTarget(Te),F.updateRenderTargetMipmap(Te))}w.setRenderTarget(Fe),w.setClearColor(oe,de),at!==void 0&&(Q.viewport=at),w.toneMapping=Ve}function hr(D,Y,ne){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Te=D.length;q<Te;q++){const Le=D[q],Fe=Le.object,Ve=Le.geometry,at=Le.group;let it=Le.material;it.allowOverride===!0&&Q!==null&&(it=Q),Fe.layers.test(ne.layers)&&Ra(Fe,Y,ne,Ve,it,at)}}function Ra(D,Y,ne,Q,q,Te){D.onBeforeRender(w,Y,ne,Q,q,Te),D.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),q.onBeforeRender(w,Y,ne,Q,D,Te),q.transparent===!0&&q.side===tr&&q.forceSinglePass===!1?(q.side=Wn,q.needsUpdate=!0,w.renderBufferDirect(ne,Y,Q,q,D,Te),q.side=Wr,q.needsUpdate=!0,w.renderBufferDirect(ne,Y,Q,q,D,Te),q.side=tr):w.renderBufferDirect(ne,Y,Q,q,D,Te),D.onAfterRender(w,Y,ne,Q,q,Te)}function Es(D,Y,ne){Y.isScene!==!0&&(Y=Pt);const Q=Be.get(D),q=y.state.lights,Te=y.state.shadowsArray,Le=q.state.version,Fe=We.getParameters(D,q.state,Te,Y,ne),Ve=We.getProgramCacheKey(Fe);let at=Q.programs;Q.environment=D.isMeshStandardMaterial?Y.environment:null,Q.fog=Y.fog,Q.envMap=(D.isMeshStandardMaterial?J:b).get(D.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,at===void 0&&(D.addEventListener("dispose",dt),at=new Map,Q.programs=at);let it=at.get(Ve);if(it!==void 0){if(Q.currentProgram===it&&Q.lightsStateVersion===Le)return Ci(D,Fe),it}else Fe.uniforms=We.getUniforms(D),D.onBeforeCompile(Fe,w),it=We.acquireProgram(Fe,Ve),at.set(Ve,it),Q.uniforms=Fe.uniforms;const $e=Q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($e.clippingPlanes=Ee.uniform),Ci(D,Fe),Q.needsLights=Nu(D),Q.lightsStateVersion=Le,Q.needsLights&&($e.ambientLightColor.value=q.state.ambient,$e.lightProbe.value=q.state.probe,$e.directionalLights.value=q.state.directional,$e.directionalLightShadows.value=q.state.directionalShadow,$e.spotLights.value=q.state.spot,$e.spotLightShadows.value=q.state.spotShadow,$e.rectAreaLights.value=q.state.rectArea,$e.ltc_1.value=q.state.rectAreaLTC1,$e.ltc_2.value=q.state.rectAreaLTC2,$e.pointLights.value=q.state.point,$e.pointLightShadows.value=q.state.pointShadow,$e.hemisphereLights.value=q.state.hemi,$e.directionalShadowMap.value=q.state.directionalShadowMap,$e.directionalShadowMatrix.value=q.state.directionalShadowMatrix,$e.spotShadowMap.value=q.state.spotShadowMap,$e.spotLightMatrix.value=q.state.spotLightMatrix,$e.spotLightMap.value=q.state.spotLightMap,$e.pointShadowMap.value=q.state.pointShadowMap,$e.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=it,Q.uniformsList=null,it}function Ca(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=xu.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function Ci(D,Y){const ne=Be.get(D);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function Pa(D,Y,ne,Q,q){Y.isScene!==!0&&(Y=Pt),F.resetTextureUnits();const Te=Y.fog,Le=Q.isMeshStandardMaterial?Y.environment:null,Fe=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:mo,Ve=(Q.isMeshStandardMaterial?J:b).get(Q.envMap||Le),at=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),$e=!!ne.morphAttributes.position,St=!!ne.morphAttributes.normal,ft=!!ne.morphAttributes.color;let jt=Hr;Q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(jt=w.toneMapping);const Ht=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Mt=Ht!==void 0?Ht.length:0,Qe=Be.get(Q),Yt=y.state.lights;if(se===!0&&(ve===!0||D!==T)){const pn=D===T&&Q.id===P;Ee.setState(Q,D,pn)}let yt=!1;Q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Yt.state.version||Qe.outputColorSpace!==Fe||q.isBatchedMesh&&Qe.batching===!1||!q.isBatchedMesh&&Qe.batching===!0||q.isBatchedMesh&&Qe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Qe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Qe.instancing===!1||!q.isInstancedMesh&&Qe.instancing===!0||q.isSkinnedMesh&&Qe.skinning===!1||!q.isSkinnedMesh&&Qe.skinning===!0||q.isInstancedMesh&&Qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Qe.instancingMorph===!1&&q.morphTexture!==null||Qe.envMap!==Ve||Q.fog===!0&&Qe.fog!==Te||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ee.numPlanes||Qe.numIntersection!==Ee.numIntersection)||Qe.vertexAlphas!==at||Qe.vertexTangents!==it||Qe.morphTargets!==$e||Qe.morphNormals!==St||Qe.morphColors!==ft||Qe.toneMapping!==jt||Qe.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,Qe.__version=Q.version);let _n=Qe.currentProgram;yt===!0&&(_n=Es(Q,Y,q));let fr=!1,Ln=!1,zi=!1;const kt=_n.getUniforms(),yn=Qe.uniforms;if(qe.useProgram(_n.program)&&(fr=!0,Ln=!0,zi=!0),Q.id!==P&&(P=Q.id,Ln=!0),fr||T!==D){qe.buffers.depth.getReversed()?(ge.copy(D.projectionMatrix),mx(ge),gx(ge),kt.setValue(B,"projectionMatrix",ge)):kt.setValue(B,"projectionMatrix",D.projectionMatrix),kt.setValue(B,"viewMatrix",D.matrixWorldInverse);const un=kt.map.cameraPosition;un!==void 0&&un.setValue(B,je.setFromMatrixPosition(D.matrixWorld)),ht.logarithmicDepthBuffer&&kt.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&kt.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),T!==D&&(T=D,Ln=!0,zi=!0)}if(q.isSkinnedMesh){kt.setOptional(B,q,"bindMatrix"),kt.setOptional(B,q,"bindMatrixInverse");const pn=q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),kt.setValue(B,"boneTexture",pn.boneTexture,F))}q.isBatchedMesh&&(kt.setOptional(B,q,"batchingTexture"),kt.setValue(B,"batchingTexture",q._matricesTexture,F),kt.setOptional(B,q,"batchingIdTexture"),kt.setValue(B,"batchingIdTexture",q._indirectTexture,F),kt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&kt.setValue(B,"batchingColorTexture",q._colorsTexture,F));const ln=ne.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ot.update(q,ne,_n),(Ln||Qe.receiveShadow!==q.receiveShadow)&&(Qe.receiveShadow=q.receiveShadow,kt.setValue(B,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(yn.envMap.value=Ve,yn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&Y.environment!==null&&(yn.envMapIntensity.value=Y.environmentIntensity),Ln&&(kt.setValue(B,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&La(yn,zi),Te&&Q.fog===!0&&Ce.refreshFogUniforms(yn,Te),Ce.refreshMaterialUniforms(yn,Q,H,ce,y.state.transmissionRenderTarget[D.id]),xu.upload(B,Ca(Qe),yn,F)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(xu.upload(B,Ca(Qe),yn,F),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&kt.setValue(B,"center",q.center),kt.setValue(B,"modelViewMatrix",q.modelViewMatrix),kt.setValue(B,"normalMatrix",q.normalMatrix),kt.setValue(B,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const pn=Q.uniformsGroups;for(let un=0,Tt=pn.length;un<Tt;un++){const Pi=pn[un];$.update(Pi,_n),$.bind(Pi,_n)}}return _n}function La(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function Nu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(D,Y,ne){const Q=Be.get(D);Q.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Be.get(D.texture).__webglTexture=Y,Be.get(D.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Y){const ne=Be.get(D);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0};const Da=B.createFramebuffer();this.setRenderTarget=function(D,Y=0,ne=0){O=D,C=Y,N=ne;let Q=!0,q=null,Te=!1,Le=!1;if(D){const Ve=Be.get(D);if(Ve.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Ve.__webglFramebuffer===void 0)F.setupRenderTarget(D);else if(Ve.__hasExternalTextures)F.rebindTextures(D,Be.get(D.texture).__webglTexture,Be.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const $e=D.depthTexture;if(Ve.__boundDepthTexture!==$e){if($e!==null&&Be.has($e)&&(D.width!==$e.image.width||D.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(D)}}const at=D.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Le=!0);const it=Be.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?q=it[Y][ne]:q=it[Y],Te=!0):D.samples>0&&F.useMultisampledRTT(D)===!1?q=Be.get(D).__webglMultisampledFramebuffer:Array.isArray(it)?q=it[ne]:q=it,z.copy(D.viewport),j.copy(D.scissor),K=D.scissorTest}else z.copy(R).multiplyScalar(H).floor(),j.copy(X).multiplyScalar(H).floor(),K=me;if(ne!==0&&(q=Da),qe.bindFramebuffer(B.FRAMEBUFFER,q)&&Q&&qe.drawBuffers(D,q),qe.viewport(z),qe.scissor(j),qe.setScissorTest(K),Te){const Ve=Be.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ve.__webglTexture,ne)}else if(Le){const Ve=Be.get(D.texture),at=Y;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.__webglTexture,ne,at)}else if(D!==null&&ne!==0){const Ve=Be.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ve.__webglTexture,ne)}P=-1},this.readRenderTargetPixels=function(D,Y,ne,Q,q,Te,Le){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Be.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){qe.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const Ve=D.texture,at=Ve.format,it=Ve.type;if(!ht.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-Q&&ne>=0&&ne<=D.height-q&&B.readPixels(Y,ne,Q,q,ct.convert(at),ct.convert(it),Te)}finally{const Ve=O!==null?Be.get(O).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(D,Y,ne,Q,q,Te,Le){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Be.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(Y>=0&&Y<=D.width-Q&&ne>=0&&ne<=D.height-q){qe.bindFramebuffer(B.FRAMEBUFFER,Fe);const Ve=D.texture,at=Ve.format,it=Ve.type;if(!ht.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(Y,ne,Q,q,ct.convert(at),ct.convert(it),0);const St=O!==null?Be.get(O).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,St);const ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await px(B,ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te),B.deleteBuffer($e),B.deleteSync(ft),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Y=null,ne=0){const Q=Math.pow(2,-ne),q=Math.floor(D.image.width*Q),Te=Math.floor(D.image.height*Q),Le=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;F.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,ne,0,0,Le,Fe,q,Te),qe.unbindTexture()};const Na=B.createFramebuffer(),Ia=B.createFramebuffer();this.copyTextureToTexture=function(D,Y,ne=null,Q=null,q=0,Te=null){Te===null&&(q!==0?(yu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=q,q=0):Te=0);let Le,Fe,Ve,at,it,$e,St,ft,jt;const Ht=D.isCompressedTexture?D.mipmaps[Te]:D.image;if(ne!==null)Le=ne.max.x-ne.min.x,Fe=ne.max.y-ne.min.y,Ve=ne.isBox3?ne.max.z-ne.min.z:1,at=ne.min.x,it=ne.min.y,$e=ne.isBox3?ne.min.z:0;else{const ln=Math.pow(2,-q);Le=Math.floor(Ht.width*ln),Fe=Math.floor(Ht.height*ln),D.isDataArrayTexture?Ve=Ht.depth:D.isData3DTexture?Ve=Math.floor(Ht.depth*ln):Ve=1,at=0,it=0,$e=0}Q!==null?(St=Q.x,ft=Q.y,jt=Q.z):(St=0,ft=0,jt=0);const Mt=ct.convert(Y.format),Qe=ct.convert(Y.type);let Yt;Y.isData3DTexture?(F.setTexture3D(Y,0),Yt=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(F.setTexture2DArray(Y,0),Yt=B.TEXTURE_2D_ARRAY):(F.setTexture2D(Y,0),Yt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const yt=B.getParameter(B.UNPACK_ROW_LENGTH),_n=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fr=B.getParameter(B.UNPACK_SKIP_PIXELS),Ln=B.getParameter(B.UNPACK_SKIP_ROWS),zi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,at),B.pixelStorei(B.UNPACK_SKIP_ROWS,it),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$e);const kt=D.isDataArrayTexture||D.isData3DTexture,yn=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){const ln=Be.get(D),pn=Be.get(Y),un=Be.get(ln.__renderTarget),Tt=Be.get(pn.__renderTarget);qe.bindFramebuffer(B.READ_FRAMEBUFFER,un.__webglFramebuffer),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Pi=0;Pi<Ve;Pi++)kt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(D).__webglTexture,q,$e+Pi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(Y).__webglTexture,Te,jt+Pi)),B.blitFramebuffer(at,it,Le,Fe,St,ft,Le,Fe,B.DEPTH_BUFFER_BIT,B.NEAREST);qe.bindFramebuffer(B.READ_FRAMEBUFFER,null),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||D.isRenderTargetTexture||Be.has(D)){const ln=Be.get(D),pn=Be.get(Y);qe.bindFramebuffer(B.READ_FRAMEBUFFER,Na),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ia);for(let un=0;un<Ve;un++)kt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,q,$e+un):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,q),yn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,Te,jt+un):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,Te),q!==0?B.blitFramebuffer(at,it,Le,Fe,St,ft,Le,Fe,B.COLOR_BUFFER_BIT,B.NEAREST):yn?B.copyTexSubImage3D(Yt,Te,St,ft,jt+un,at,it,Le,Fe):B.copyTexSubImage2D(Yt,Te,St,ft,at,it,Le,Fe);qe.bindFramebuffer(B.READ_FRAMEBUFFER,null),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yn?D.isDataTexture||D.isData3DTexture?B.texSubImage3D(Yt,Te,St,ft,jt,Le,Fe,Ve,Mt,Qe,Ht.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Yt,Te,St,ft,jt,Le,Fe,Ve,Mt,Ht.data):B.texSubImage3D(Yt,Te,St,ft,jt,Le,Fe,Ve,Mt,Qe,Ht):D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Te,St,ft,Le,Fe,Mt,Qe,Ht.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Te,St,ft,Ht.width,Ht.height,Mt,Ht.data):B.texSubImage2D(B.TEXTURE_2D,Te,St,ft,Le,Fe,Mt,Qe,Ht);B.pixelStorei(B.UNPACK_ROW_LENGTH,yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_n),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fr),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ln),B.pixelStorei(B.UNPACK_SKIP_IMAGES,zi),Te===0&&Y.generateMipmaps&&B.generateMipmap(Yt),qe.unbindTexture()},this.copyTextureToTexture3D=function(D,Y,ne=null,Q=null,q=0){return yu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Y,ne,Q,q)},this.initRenderTarget=function(D){Be.get(D).__webglFramebuffer===void 0&&F.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?F.setTextureCube(D,0):D.isData3DTexture?F.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?F.setTexture2DArray(D,0):F.setTexture2D(D,0),qe.unbindTexture()},this.resetState=function(){C=0,N=0,O=null,qe.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function FT(r){const e=[...new Set(r.map(t=>String(t.session_id)))].sort();return new Map(e.map((t,n)=>[t,n]))}function kT({payload:r,currentTurnId:e,liftMode:t,onSelectTurn:n}){const o=Nt.useRef(null),a=Nt.useMemo(()=>FT(r.turns??[]),[r.turns]);return Nt.useEffect(()=>{if(!o.current)return;const u=o.current,c=new Gx;c.background=new Ct("#120d08");const h=new ui(45,u.clientWidth/Math.max(u.clientHeight,1),.1,1e3);h.position.set(0,0,28);const f=new UT({antialias:!0});f.setSize(u.clientWidth,Math.max(u.clientHeight,240)),u.innerHTML="",u.appendChild(f.domElement);const m=r.turns??[],g=new jv({color:12155706,transparent:!0,opacity:.5}),v=new Ri,x=new Float32Array(m.length*3),E=new Float32Array(m.length*3),M=new Map;for(const P of m){const T=String(P.display_attractor_label??P.dominant_label??"");M.set(T,(M.get(T)??0)+1)}m.forEach((P,T)=>{const z=M.get(String(P.display_attractor_label??P.dominant_label??""))??1,j=a.get(String(P.session_id))??0,K=t==="flat"?0:t==="time_lift"?T*.7:t==="density_lift"?z*1.2:j*2.4;x[T*3]=Number(P.x??0),x[T*3+1]=Number(P.y??0),x[T*3+2]=K;const oe=e===P.turn_id;E[T*3]=oe?1:.91,E[T*3+1]=oe?.95:.66,E[T*3+2]=oe?.67:.34,P.sequence_z=K}),v.setAttribute("position",new Jn(x,3)),v.setAttribute("color",new Jn(E,3));const S=new Xx(v,new Yv({size:.6,vertexColors:!0}));if(c.add(S),m.length>1){const P=new Ri;P.setAttribute("position",new Jn(x,3)),c.add(new Wx(P,g))}const y=new Qx,I=new Ut,L=P=>{const T=f.domElement.getBoundingClientRect();I.x=(P.clientX-T.left)/T.width*2-1,I.y=-((P.clientY-T.top)/T.height)*2+1,y.params.Points={threshold:1.2},y.setFromCamera(I,h);const j=y.intersectObject(S)[0];if(!j||j.index==null)return;const K=m[j.index];K!=null&&K.turn_id&&n(String(K.turn_id))};f.domElement.addEventListener("click",L);const w=new Kx(16777215,1);c.add(w);let U=0,C=0;const N=()=>{U+=1,e||(c.rotation.y=Math.sin(U/180)*.08),f.render(c,h),C=window.requestAnimationFrame(N)};N();const O=()=>{const P=u.clientWidth||640,T=Math.max(u.clientHeight,240);h.aspect=P/T,h.updateProjectionMatrix(),f.setSize(P,T)};return window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O),f.domElement.removeEventListener("click",L),window.cancelAnimationFrame(C),f.dispose(),v.dispose(),g.dispose(),u.innerHTML=""}},[r,e,t,n,a]),we.jsx("div",{className:"basin-panel",ref:o})}var lu={exports:{}},Yg;function OT(){if(Yg)return lu.exports;Yg=1;var r=typeof Reflect=="object"?Reflect:null,e=r&&typeof r.apply=="function"?r.apply:function(U,C,N){return Function.prototype.apply.call(U,C,N)},t;r&&typeof r.ownKeys=="function"?t=r.ownKeys:Object.getOwnPropertySymbols?t=function(U){return Object.getOwnPropertyNames(U).concat(Object.getOwnPropertySymbols(U))}:t=function(U){return Object.getOwnPropertyNames(U)};function n(w){console&&console.warn&&console.warn(w)}var o=Number.isNaN||function(U){return U!==U};function a(){a.init.call(this)}lu.exports=a,lu.exports.once=y,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function c(w){if(typeof w!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof w)}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(w){if(typeof w!="number"||w<0||o(w))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+w+".");u=w}}),a.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(U){if(typeof U!="number"||U<0||o(U))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+U+".");return this._maxListeners=U,this};function h(w){return w._maxListeners===void 0?a.defaultMaxListeners:w._maxListeners}a.prototype.getMaxListeners=function(){return h(this)},a.prototype.emit=function(U){for(var C=[],N=1;N<arguments.length;N++)C.push(arguments[N]);var O=U==="error",P=this._events;if(P!==void 0)O=O&&P.error===void 0;else if(!O)return!1;if(O){var T;if(C.length>0&&(T=C[0]),T instanceof Error)throw T;var z=new Error("Unhandled error."+(T?" ("+T.message+")":""));throw z.context=T,z}var j=P[U];if(j===void 0)return!1;if(typeof j=="function")e(j,this,C);else for(var K=j.length,oe=E(j,K),N=0;N<K;++N)e(oe[N],this,C);return!0};function f(w,U,C,N){var O,P,T;if(c(C),P=w._events,P===void 0?(P=w._events=Object.create(null),w._eventsCount=0):(P.newListener!==void 0&&(w.emit("newListener",U,C.listener?C.listener:C),P=w._events),T=P[U]),T===void 0)T=P[U]=C,++w._eventsCount;else if(typeof T=="function"?T=P[U]=N?[C,T]:[T,C]:N?T.unshift(C):T.push(C),O=h(w),O>0&&T.length>O&&!T.warned){T.warned=!0;var z=new Error("Possible EventEmitter memory leak detected. "+T.length+" "+String(U)+" listeners added. Use emitter.setMaxListeners() to increase limit");z.name="MaxListenersExceededWarning",z.emitter=w,z.type=U,z.count=T.length,n(z)}return w}a.prototype.addListener=function(U,C){return f(this,U,C,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(U,C){return f(this,U,C,!0)};function m(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(w,U,C){var N={fired:!1,wrapFn:void 0,target:w,type:U,listener:C},O=m.bind(N);return O.listener=C,N.wrapFn=O,O}a.prototype.once=function(U,C){return c(C),this.on(U,g(this,U,C)),this},a.prototype.prependOnceListener=function(U,C){return c(C),this.prependListener(U,g(this,U,C)),this},a.prototype.removeListener=function(U,C){var N,O,P,T,z;if(c(C),O=this._events,O===void 0)return this;if(N=O[U],N===void 0)return this;if(N===C||N.listener===C)--this._eventsCount===0?this._events=Object.create(null):(delete O[U],O.removeListener&&this.emit("removeListener",U,N.listener||C));else if(typeof N!="function"){for(P=-1,T=N.length-1;T>=0;T--)if(N[T]===C||N[T].listener===C){z=N[T].listener,P=T;break}if(P<0)return this;P===0?N.shift():M(N,P),N.length===1&&(O[U]=N[0]),O.removeListener!==void 0&&this.emit("removeListener",U,z||C)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(U){var C,N,O;if(N=this._events,N===void 0)return this;if(N.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):N[U]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete N[U]),this;if(arguments.length===0){var P=Object.keys(N),T;for(O=0;O<P.length;++O)T=P[O],T!=="removeListener"&&this.removeAllListeners(T);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(C=N[U],typeof C=="function")this.removeListener(U,C);else if(C!==void 0)for(O=C.length-1;O>=0;O--)this.removeListener(U,C[O]);return this};function v(w,U,C){var N=w._events;if(N===void 0)return[];var O=N[U];return O===void 0?[]:typeof O=="function"?C?[O.listener||O]:[O]:C?S(O):E(O,O.length)}a.prototype.listeners=function(U){return v(this,U,!0)},a.prototype.rawListeners=function(U){return v(this,U,!1)},a.listenerCount=function(w,U){return typeof w.listenerCount=="function"?w.listenerCount(U):x.call(w,U)},a.prototype.listenerCount=x;function x(w){var U=this._events;if(U!==void 0){var C=U[w];if(typeof C=="function")return 1;if(C!==void 0)return C.length}return 0}a.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function E(w,U){for(var C=new Array(U),N=0;N<U;++N)C[N]=w[N];return C}function M(w,U){for(;U+1<w.length;U++)w[U]=w[U+1];w.pop()}function S(w){for(var U=new Array(w.length),C=0;C<U.length;++C)U[C]=w[C].listener||w[C];return U}function y(w,U){return new Promise(function(C,N){function O(T){w.removeListener(U,P),N(T)}function P(){typeof w.removeListener=="function"&&w.removeListener("error",O),C([].slice.call(arguments))}L(w,U,P,{once:!0}),U!=="error"&&I(w,O,{once:!0})})}function I(w,U,C){typeof w.on=="function"&&L(w,"error",U,C)}function L(w,U,C,N){if(typeof w.on=="function")N.once?w.once(U,C):w.on(U,C);else if(typeof w.addEventListener=="function")w.addEventListener(U,function O(P){N.once&&w.removeEventListener(U,O),C(P)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof w)}return lu.exports}var t_=OT();function zT(){const r=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(arguments[e])for(const n in arguments[e])r[n]=arguments[e][n];return r}let sn=zT;typeof Object.assign=="function"&&(sn=Object.assign);function ci(r,e,t,n){const o=r._nodes.get(e);let a=null;return o&&(n==="mixed"?a=o.out&&o.out[t]||o.undirected&&o.undirected[t]:n==="directed"?a=o.out&&o.out[t]:a=o.undirected&&o.undirected[t]),a}function vn(r){return typeof r=="object"&&r!==null}function n_(r){let e;for(e in r)return!1;return!0}function ai(r,e,t){Object.defineProperty(r,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function Ei(r,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(r,e,n)}function qg(r){return!(!vn(r)||r.attributes&&!Array.isArray(r.attributes))}function BT(){let r=Math.floor(Math.random()*256)&255;return()=>r++}function ar(){const r=arguments;let e=null,t=-1;return{[Symbol.iterator](){return this},next(){let n=null;do{if(e===null){if(t++,t>=r.length)return{done:!0};e=r[t][Symbol.iterator]()}if(n=e.next(),n.done){e=null;continue}break}while(!0);return n}}}function Eo(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class cf extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class Ue extends cf{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ue.prototype.constructor)}}class Re extends cf{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Re.prototype.constructor)}}class rt extends cf{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,rt.prototype.constructor)}}function i_(r,e){this.key=r,this.attributes=e,this.clear()}i_.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function r_(r,e){this.key=r,this.attributes=e,this.clear()}r_.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function s_(r,e){this.key=r,this.attributes=e,this.clear()}s_.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function Mo(r,e,t,n,o){this.key=e,this.attributes=o,this.undirected=r,this.source=t,this.target=n}Mo.prototype.attach=function(){let r="out",e="in";this.undirected&&(r=e="undirected");const t=this.source.key,n=this.target.key;this.source[r][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};Mo.prototype.attachMulti=function(){let r="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(r=e="undirected");const o=this.source[r],a=o[n];if(typeof a>"u"){o[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}a.previous=this,this.next=a,o[n]=this,this.target[e][t]=this};Mo.prototype.detach=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][r]};Mo.prototype.detachMulti=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][r]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][r]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const o_=0,a_=1,GT=2,l_=3;function cr(r,e,t,n,o,a,u){let c,h,f,m;if(n=""+n,t===o_){if(c=r._nodes.get(n),!c)throw new Re(`Graph.${e}: could not find the "${n}" node in the graph.`);f=o,m=a}else if(t===l_){if(o=""+o,h=r._edges.get(o),!h)throw new Re(`Graph.${e}: could not find the "${o}" edge in the graph.`);const g=h.source.key,v=h.target.key;if(n===g)c=h.target;else if(n===v)c=h.source;else throw new Re(`Graph.${e}: the "${n}" node is not attached to the "${o}" edge (${g}, ${v}).`);f=a,m=u}else{if(h=r._edges.get(n),!h)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===a_?c=h.source:c=h.target,f=o,m=a}return[c,f,m]}function HT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);return u.attributes[c]}}function VT(r,e,t){r.prototype[e]=function(n,o){const[a]=cr(this,e,t,n,o);return a.attributes}}function WT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);return u.attributes.hasOwnProperty(c)}}function XT(r,e,t){r.prototype[e]=function(n,o,a,u){const[c,h,f]=cr(this,e,t,n,o,a,u);return c.attributes[h]=f,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function $T(r,e,t){r.prototype[e]=function(n,o,a,u){const[c,h,f]=cr(this,e,t,n,o,a,u);if(typeof f!="function")throw new Ue(`Graph.${e}: updater should be a function.`);const m=c.attributes,g=f(m[h]);return m[h]=g,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function jT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);return delete u.attributes[c],this.emit("nodeAttributesUpdated",{key:u.key,type:"remove",attributes:u.attributes,name:c}),this}}function YT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);if(!vn(c))throw new Ue(`Graph.${e}: provided attributes are not a plain object.`);return u.attributes=c,this.emit("nodeAttributesUpdated",{key:u.key,type:"replace",attributes:u.attributes}),this}}function qT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);if(!vn(c))throw new Ue(`Graph.${e}: provided attributes are not a plain object.`);return sn(u.attributes,c),this.emit("nodeAttributesUpdated",{key:u.key,type:"merge",attributes:u.attributes,data:c}),this}}function KT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);if(typeof c!="function")throw new Ue(`Graph.${e}: provided updater is not a function.`);return u.attributes=c(u.attributes),this.emit("nodeAttributesUpdated",{key:u.key,type:"update",attributes:u.attributes}),this}}const ZT=[{name:r=>`get${r}Attribute`,attacher:HT},{name:r=>`get${r}Attributes`,attacher:VT},{name:r=>`has${r}Attribute`,attacher:WT},{name:r=>`set${r}Attribute`,attacher:XT},{name:r=>`update${r}Attribute`,attacher:$T},{name:r=>`remove${r}Attribute`,attacher:jT},{name:r=>`replace${r}Attributes`,attacher:YT},{name:r=>`merge${r}Attributes`,attacher:qT},{name:r=>`update${r}Attributes`,attacher:KT}];function QT(r){ZT.forEach(function({name:e,attacher:t}){t(r,e("Node"),o_),t(r,e("Source"),a_),t(r,e("Target"),GT),t(r,e("Opposite"),l_)})}function JT(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new rt(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new rt(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ci(this,u,c,t),!a)throw new Re(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new rt(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes[o]}}function eA(r,e,t){r.prototype[e]=function(n){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new rt(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new rt(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,u=""+arguments[1];if(o=ci(this,a,u,t),!o)throw new Re(`Graph.${e}: could not find an edge for the given path ("${a}" - "${u}").`)}else{if(t!=="mixed")throw new rt(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes}}function tA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new rt(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new rt(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ci(this,u,c,t),!a)throw new Re(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new rt(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes.hasOwnProperty(o)}}function nA(r,e,t){r.prototype[e]=function(n,o,a){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new rt(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new rt(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+o;if(o=arguments[2],a=arguments[3],u=ci(this,c,h,t),!u)throw new Re(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new rt(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return u.attributes[o]=a,this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:o}),this}}function iA(r,e,t){r.prototype[e]=function(n,o,a){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new rt(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new rt(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+o;if(o=arguments[2],a=arguments[3],u=ci(this,c,h,t),!u)throw new Re(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new rt(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof a!="function")throw new Ue(`Graph.${e}: updater should be a function.`);return u.attributes[o]=a(u.attributes[o]),this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:o}),this}}function rA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new rt(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new rt(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ci(this,u,c,t),!a)throw new Re(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new rt(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete a.attributes[o],this.emit("edgeAttributesUpdated",{key:a.key,type:"remove",attributes:a.attributes,name:o}),this}}function sA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new rt(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new rt(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ci(this,u,c,t),!a)throw new Re(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new rt(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!vn(o))throw new Ue(`Graph.${e}: provided attributes are not a plain object.`);return a.attributes=o,this.emit("edgeAttributesUpdated",{key:a.key,type:"replace",attributes:a.attributes}),this}}function oA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new rt(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new rt(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ci(this,u,c,t),!a)throw new Re(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new rt(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!vn(o))throw new Ue(`Graph.${e}: provided attributes are not a plain object.`);return sn(a.attributes,o),this.emit("edgeAttributesUpdated",{key:a.key,type:"merge",attributes:a.attributes,data:o}),this}}function aA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new rt(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new rt(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ci(this,u,c,t),!a)throw new Re(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new rt(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Re(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof o!="function")throw new Ue(`Graph.${e}: provided updater is not a function.`);return a.attributes=o(a.attributes),this.emit("edgeAttributesUpdated",{key:a.key,type:"update",attributes:a.attributes}),this}}const lA=[{name:r=>`get${r}Attribute`,attacher:JT},{name:r=>`get${r}Attributes`,attacher:eA},{name:r=>`has${r}Attribute`,attacher:tA},{name:r=>`set${r}Attribute`,attacher:nA},{name:r=>`update${r}Attribute`,attacher:iA},{name:r=>`remove${r}Attribute`,attacher:rA},{name:r=>`replace${r}Attributes`,attacher:sA},{name:r=>`merge${r}Attributes`,attacher:oA},{name:r=>`update${r}Attributes`,attacher:aA}];function uA(r){lA.forEach(function({name:e,attacher:t}){t(r,e("Edge"),"mixed"),t(r,e("DirectedEdge"),"directed"),t(r,e("UndirectedEdge"),"undirected")})}const cA=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function dA(r,e,t,n){let o=!1;for(const a in e){if(a===n)continue;const u=e[a];if(o=t(u.key,u.attributes,u.source.key,u.target.key,u.source.attributes,u.target.attributes,u.undirected),r&&o)return u.key}}function hA(r,e,t,n){let o,a,u,c=!1;for(const h in e)if(h!==n){o=e[h];do{if(a=o.source,u=o.target,c=t(o.key,o.attributes,a.key,u.key,a.attributes,u.attributes,o.undirected),r&&c)return o.key;o=o.next}while(o!==void 0)}}function $d(r,e){const t=Object.keys(r),n=t.length;let o,a=0;return{[Symbol.iterator](){return this},next(){do if(o)o=o.next;else{if(a>=n)return{done:!0};const u=t[a++];if(u===e){o=void 0;continue}o=r[u]}while(!o);return{done:!1,value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected}}}}}function fA(r,e,t,n){const o=e[t];if(!o)return;const a=o.source,u=o.target;if(n(o.key,o.attributes,a.key,u.key,a.attributes,u.attributes,o.undirected)&&r)return o.key}function pA(r,e,t,n){let o=e[t];if(!o)return;let a=!1;do{if(a=n(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),r&&a)return o.key;o=o.next}while(o!==void 0)}function jd(r,e){let t=r[e];if(t.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!t)return{done:!0};const o={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:o}}};let n=!1;return{[Symbol.iterator](){return this},next(){return n===!0?{done:!0}:(n=!0,{done:!1,value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected}})}}}function mA(r,e){if(r.size===0)return[];if(e==="mixed"||e===r.type)return Array.from(r._edges.keys());const t=e==="undirected"?r.undirectedSize:r.directedSize,n=new Array(t),o=e==="undirected",a=r._edges.values();let u=0,c,h;for(;c=a.next(),c.done!==!0;)h=c.value,h.undirected===o&&(n[u++]=h.key);return n}function u_(r,e,t,n){if(e.size===0)return;const o=t!=="mixed"&&t!==e.type,a=t==="undirected";let u,c,h=!1;const f=e._edges.values();for(;u=f.next(),u.done!==!0;){if(c=u.value,o&&c.undirected!==a)continue;const{key:m,attributes:g,source:v,target:x}=c;if(h=n(m,g,v.key,x.key,v.attributes,x.attributes,c.undirected),r&&h)return m}}function gA(r,e){if(r.size===0)return Eo();const t=e!=="mixed"&&e!==r.type,n=e==="undirected",o=r._edges.values();return{[Symbol.iterator](){return this},next(){let a,u;for(;;){if(a=o.next(),a.done)return a;if(u=a.value,!(t&&u.undirected!==n))break}return{value:{edge:u.key,attributes:u.attributes,source:u.source.key,target:u.target.key,sourceAttributes:u.source.attributes,targetAttributes:u.target.attributes,undirected:u.undirected},done:!1}}}}function df(r,e,t,n,o,a){const u=e?hA:dA;let c;if(t!=="undirected"&&(n!=="out"&&(c=u(r,o.in,a),r&&c)||n!=="in"&&(c=u(r,o.out,a,n?void 0:o.key),r&&c))||t!=="directed"&&(c=u(r,o.undirected,a),r&&c))return c}function vA(r,e,t,n){const o=[];return df(!1,r,e,t,n,function(a){o.push(a)}),o}function _A(r,e,t){let n=Eo();return r!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=ar(n,$d(t.in))),e!=="in"&&typeof t.out<"u"&&(n=ar(n,$d(t.out,e?void 0:t.key)))),r!=="directed"&&typeof t.undirected<"u"&&(n=ar(n,$d(t.undirected))),n}function hf(r,e,t,n,o,a,u){const c=t?pA:fA;let h;if(e!=="undirected"&&(typeof o.in<"u"&&n!=="out"&&(h=c(r,o.in,a,u),r&&h)||typeof o.out<"u"&&n!=="in"&&(n||o.key!==a)&&(h=c(r,o.out,a,u),r&&h))||e!=="directed"&&typeof o.undirected<"u"&&(h=c(r,o.undirected,a,u),r&&h))return h}function yA(r,e,t,n,o){const a=[];return hf(!1,r,e,t,n,o,function(u){a.push(u)}),a}function xA(r,e,t,n){let o=Eo();return r!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(o=ar(o,jd(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(o=ar(o,jd(t.out,n)))),r!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(o=ar(o,jd(t.undirected,n))),o}function SA(r,e){const{name:t,type:n,direction:o}=e;r.prototype[t]=function(a,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return mA(this,n);if(arguments.length===1){a=""+a;const c=this._nodes.get(a);if(typeof c>"u")throw new Re(`Graph.${t}: could not find the "${a}" node in the graph.`);return vA(this.multi,n==="mixed"?this.type:n,o,c)}if(arguments.length===2){a=""+a,u=""+u;const c=this._nodes.get(a);if(!c)throw new Re(`Graph.${t}:  could not find the "${a}" source node in the graph.`);if(!this._nodes.has(u))throw new Re(`Graph.${t}:  could not find the "${u}" target node in the graph.`);return yA(n,this.multi,o,c,u)}throw new Ue(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function EA(r,e){const{name:t,type:n,direction:o}=e,a="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[a]=function(f,m,g){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return g=f,u_(!1,this,n,g);if(arguments.length===2){f=""+f,g=m;const v=this._nodes.get(f);if(typeof v>"u")throw new Re(`Graph.${a}: could not find the "${f}" node in the graph.`);return df(!1,this.multi,n==="mixed"?this.type:n,o,v,g)}if(arguments.length===3){f=""+f,m=""+m;const v=this._nodes.get(f);if(!v)throw new Re(`Graph.${a}:  could not find the "${f}" source node in the graph.`);if(!this._nodes.has(m))throw new Re(`Graph.${a}:  could not find the "${m}" target node in the graph.`);return hf(!1,n,this.multi,o,v,m,g)}throw new Ue(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop();let g;if(f.length===0){let v=0;n!=="directed"&&(v+=this.undirectedSize),n!=="undirected"&&(v+=this.directedSize),g=new Array(v);let x=0;f.push((E,M,S,y,I,L,w)=>{g[x++]=m(E,M,S,y,I,L,w)})}else g=[],f.push((v,x,E,M,S,y,I)=>{g.push(m(v,x,E,M,S,y,I))});return this[a].apply(this,f),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop(),g=[];return f.push((v,x,E,M,S,y,I)=>{m(v,x,E,M,S,y,I)&&g.push(v)}),this[a].apply(this,f),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(){let f=Array.prototype.slice.call(arguments);if(f.length<2||f.length>4)throw new Ue(`Graph.${h}: invalid number of arguments (expecting 2, 3 or 4 and got ${f.length}).`);if(typeof f[f.length-1]=="function"&&typeof f[f.length-2]!="function")throw new Ue(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let m,g;f.length===2?(m=f[0],g=f[1],f=[]):f.length===3?(m=f[1],g=f[2],f=[f[0]]):f.length===4&&(m=f[2],g=f[3],f=[f[0],f[1]]);let v=g;return f.push((x,E,M,S,y,I,L)=>{v=m(v,x,E,M,S,y,I,L)}),this[a].apply(this,f),v}}function MA(r,e){const{name:t,type:n,direction:o}=e,a="find"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[a]=function(h,f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return m=h,u_(!0,this,n,m);if(arguments.length===2){h=""+h,m=f;const g=this._nodes.get(h);if(typeof g>"u")throw new Re(`Graph.${a}: could not find the "${h}" node in the graph.`);return df(!0,this.multi,n==="mixed"?this.type:n,o,g,m)}if(arguments.length===3){h=""+h,f=""+f;const g=this._nodes.get(h);if(!g)throw new Re(`Graph.${a}:  could not find the "${h}" source node in the graph.`);if(!this._nodes.has(f))throw new Re(`Graph.${a}:  could not find the "${f}" target node in the graph.`);return hf(!0,n,this.multi,o,g,f,m)}throw new Ue(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const u="some"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[u]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,E,M,S,y)=>f(g,v,x,E,M,S,y)),!!this[a].apply(this,h)};const c="every"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[c]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,E,M,S,y)=>!f(g,v,x,E,M,S,y)),!this[a].apply(this,h)}}function wA(r,e){const{name:t,type:n,direction:o}=e,a=t.slice(0,-1)+"Entries";r.prototype[a]=function(u,c){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Eo();if(!arguments.length)return gA(this,n);if(arguments.length===1){u=""+u;const h=this._nodes.get(u);if(!h)throw new Re(`Graph.${a}: could not find the "${u}" node in the graph.`);return _A(n,o,h)}if(arguments.length===2){u=""+u,c=""+c;const h=this._nodes.get(u);if(!h)throw new Re(`Graph.${a}:  could not find the "${u}" source node in the graph.`);if(!this._nodes.has(c))throw new Re(`Graph.${a}:  could not find the "${c}" target node in the graph.`);return xA(n,o,h,c)}throw new Ue(`Graph.${a}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function TA(r){cA.forEach(e=>{SA(r,e),EA(r,e),MA(r,e),wA(r,e)})}const AA=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function Lu(){this.A=null,this.B=null}Lu.prototype.wrap=function(r){this.A===null?this.A=r:this.B===null&&(this.B=r)};Lu.prototype.has=function(r){return this.A!==null&&r in this.A||this.B!==null&&r in this.B};function ua(r,e,t,n,o){for(const a in n){const u=n[a],c=u.source,h=u.target,f=c===t?h:c;if(e&&e.has(f.key))continue;const m=o(f.key,f.attributes);if(r&&m)return f.key}}function ff(r,e,t,n,o){if(e!=="mixed"){if(e==="undirected")return ua(r,null,n,n.undirected,o);if(typeof t=="string")return ua(r,null,n,n[t],o)}const a=new Lu;let u;if(e!=="undirected"){if(t!=="out"){if(u=ua(r,null,n,n.in,o),r&&u)return u;a.wrap(n.in)}if(t!=="in"){if(u=ua(r,a,n,n.out,o),r&&u)return u;a.wrap(n.out)}}if(e!=="directed"&&(u=ua(r,a,n,n.undirected,o),r&&u))return u}function bA(r,e,t){if(r!=="mixed"){if(r==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return ff(!1,r,e,t,function(o){n.push(o)}),n}function ca(r,e,t){const n=Object.keys(t),o=n.length;let a=0;return{[Symbol.iterator](){return this},next(){let u=null;do{if(a>=o)return r&&r.wrap(t),{done:!0};const c=t[n[a++]],h=c.source,f=c.target;if(u=h===e?f:h,r&&r.has(u.key)){u=null;continue}}while(u===null);return{done:!1,value:{neighbor:u.key,attributes:u.attributes}}}}}function RA(r,e,t){if(r!=="mixed"){if(r==="undirected")return ca(null,t,t.undirected);if(typeof e=="string")return ca(null,t,t[e])}let n=Eo();const o=new Lu;return r!=="undirected"&&(e!=="out"&&(n=ar(n,ca(o,t,t.in))),e!=="in"&&(n=ar(n,ca(o,t,t.out)))),r!=="directed"&&(n=ar(n,ca(o,t,t.undirected))),n}function CA(r,e){const{name:t,type:n,direction:o}=e;r.prototype[t]=function(a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];a=""+a;const u=this._nodes.get(a);if(typeof u>"u")throw new Re(`Graph.${t}: could not find the "${a}" node in the graph.`);return bA(n==="mixed"?this.type:n,o,u)}}function PA(r,e){const{name:t,type:n,direction:o}=e,a="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[a]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Re(`Graph.${a}: could not find the "${f}" node in the graph.`);ff(!1,n==="mixed"?this.type:n,o,g,m)};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(f,m){const g=[];return this[a](f,(v,x)=>{g.push(m(v,x))}),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(f,m){const g=[];return this[a](f,(v,x)=>{m(v,x)&&g.push(v)}),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(f,m,g){if(arguments.length<3)throw new Ue(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let v=g;return this[a](f,(x,E)=>{v=m(v,x,E)}),v}}function LA(r,e){const{name:t,type:n,direction:o}=e,a=t[0].toUpperCase()+t.slice(1,-1),u="find"+a;r.prototype[u]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Re(`Graph.${u}: could not find the "${f}" node in the graph.`);return ff(!0,n==="mixed"?this.type:n,o,g,m)};const c="some"+a;r.prototype[c]=function(f,m){return!!this[u](f,m)};const h="every"+a;r.prototype[h]=function(f,m){return!this[u](f,(v,x)=>!m(v,x))}}function DA(r,e){const{name:t,type:n,direction:o}=e,a=t.slice(0,-1)+"Entries";r.prototype[a]=function(u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Eo();u=""+u;const c=this._nodes.get(u);if(typeof c>"u")throw new Re(`Graph.${a}: could not find the "${u}" node in the graph.`);return RA(n==="mixed"?this.type:n,o,c)}}function NA(r){AA.forEach(e=>{CA(r,e),PA(r,e),LA(r,e),DA(r,e)})}function uu(r,e,t,n,o){const a=n._nodes.values(),u=n.type;let c,h,f,m,g,v;for(;c=a.next(),c.done!==!0;){let x=!1;if(h=c.value,u!=="undirected"){m=h.out;for(f in m){g=m[f];do v=g.target,x=!0,o(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}if(u!=="directed"){m=h.undirected;for(f in m)if(!(e&&h.key>f)){g=m[f];do v=g.target,v.key!==f&&(v=g.source),x=!0,o(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}t&&!x&&o(h.key,null,h.attributes,null,null,null,null)}}function IA(r,e){const t={key:r};return n_(e.attributes)||(t.attributes=sn({},e.attributes)),t}function UA(r,e,t){const n={key:e,source:t.source.key,target:t.target.key};return n_(t.attributes)||(n.attributes=sn({},t.attributes)),r==="mixed"&&t.undirected&&(n.undirected=!0),n}function FA(r){if(!vn(r))throw new Ue('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in r))throw new Ue("Graph.import: serialized node is missing its key.");if("attributes"in r&&(!vn(r.attributes)||r.attributes===null))throw new Ue("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function kA(r){if(!vn(r))throw new Ue('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in r))throw new Ue("Graph.import: serialized edge is missing its source.");if(!("target"in r))throw new Ue("Graph.import: serialized edge is missing its target.");if("attributes"in r&&(!vn(r.attributes)||r.attributes===null))throw new Ue("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in r&&typeof r.undirected!="boolean")throw new Ue("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const OA=BT(),zA=new Set(["directed","undirected","mixed"]),Kg=new Set(["domain","_events","_eventsCount","_maxListeners"]),BA=[{name:r=>`${r}Edge`,generateKey:!0},{name:r=>`${r}DirectedEdge`,generateKey:!0,type:"directed"},{name:r=>`${r}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:r=>`${r}EdgeWithKey`},{name:r=>`${r}DirectedEdgeWithKey`,type:"directed"},{name:r=>`${r}UndirectedEdgeWithKey`,type:"undirected"}],GA={allowSelfLoops:!0,multi:!1,type:"mixed"};function HA(r,e,t){if(t&&!vn(t))throw new Ue(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},r._nodes.has(e))throw new rt(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function Zg(r,e,t){const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function c_(r,e,t,n,o,a,u,c){if(!n&&r.type==="undirected")throw new rt(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new rt(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(c&&!vn(c))throw new Ue(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`);if(a=""+a,u=""+u,c=c||{},!r.allowSelfLoops&&a===u)throw new rt(`Graph.${e}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const h=r._nodes.get(a),f=r._nodes.get(u);if(!h)throw new Re(`Graph.${e}: source node "${a}" not found.`);if(!f)throw new Re(`Graph.${e}: target node "${u}" not found.`);const m={key:null,undirected:n,source:a,target:u,attributes:c};if(t)o=r._edgeKeyGenerator();else if(o=""+o,r._edges.has(o))throw new rt(`Graph.${e}: the "${o}" edge already exists in the graph.`);if(!r.multi&&(n?typeof h.undirected[u]<"u":typeof h.out[u]<"u"))throw new rt(`Graph.${e}: an edge linking "${a}" to "${u}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const g=new Mo(n,o,h,f,c);r._edges.set(o,g);const v=a===u;return n?(h.undirectedDegree++,f.undirectedDegree++,v&&(h.undirectedLoops++,r._undirectedSelfLoopCount++)):(h.outDegree++,f.inDegree++,v&&(h.directedLoops++,r._directedSelfLoopCount++)),r.multi?g.attachMulti():g.attach(),n?r._undirectedSize++:r._directedSize++,m.key=o,r.emit("edgeAdded",m),o}function VA(r,e,t,n,o,a,u,c,h){if(!n&&r.type==="undirected")throw new rt(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new rt(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(c){if(h){if(typeof c!="function")throw new Ue(`Graph.${e}: invalid updater function. Expecting a function but got "${c}"`)}else if(!vn(c))throw new Ue(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`)}a=""+a,u=""+u;let f;if(h&&(f=c,c=void 0),!r.allowSelfLoops&&a===u)throw new rt(`Graph.${e}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let m=r._nodes.get(a),g=r._nodes.get(u),v,x;if(!t&&(v=r._edges.get(o),v)){if((v.source.key!==a||v.target.key!==u)&&(!n||v.source.key!==u||v.target.key!==a))throw new rt(`Graph.${e}: inconsistency detected when attempting to merge the "${o}" edge with "${a}" source & "${u}" target vs. ("${v.source.key}", "${v.target.key}").`);x=v}if(!x&&!r.multi&&m&&(x=n?m.undirected[u]:m.out[u]),x){const I=[x.key,!1,!1,!1];if(h?!f:!c)return I;if(h){const L=x.attributes;x.attributes=f(L),r.emit("edgeAttributesUpdated",{type:"replace",key:x.key,attributes:x.attributes})}else sn(x.attributes,c),r.emit("edgeAttributesUpdated",{type:"merge",key:x.key,attributes:x.attributes,data:c});return I}c=c||{},h&&f&&(c=f(c));const E={key:null,undirected:n,source:a,target:u,attributes:c};if(t)o=r._edgeKeyGenerator();else if(o=""+o,r._edges.has(o))throw new rt(`Graph.${e}: the "${o}" edge already exists in the graph.`);let M=!1,S=!1;m||(m=Zg(r,a,{}),M=!0,a===u&&(g=m,S=!0)),g||(g=Zg(r,u,{}),S=!0),v=new Mo(n,o,m,g,c),r._edges.set(o,v);const y=a===u;return n?(m.undirectedDegree++,g.undirectedDegree++,y&&(m.undirectedLoops++,r._undirectedSelfLoopCount++)):(m.outDegree++,g.inDegree++,y&&(m.directedLoops++,r._directedSelfLoopCount++)),r.multi?v.attachMulti():v.attach(),n?r._undirectedSize++:r._directedSize++,E.key=o,r.emit("edgeAdded",E),[o,!0,M,S]}function so(r,e){r._edges.delete(e.key);const{source:t,target:n,attributes:o}=e,a=e.undirected,u=t===n;a?(t.undirectedDegree--,n.undirectedDegree--,u&&(t.undirectedLoops--,r._undirectedSelfLoopCount--)):(t.outDegree--,n.inDegree--,u&&(t.directedLoops--,r._directedSelfLoopCount--)),r.multi?e.detachMulti():e.detach(),a?r._undirectedSize--:r._directedSize--,r.emit("edgeDropped",{key:e.key,attributes:o,source:t.key,target:n.key,undirected:a})}class Ft extends t_.EventEmitter{constructor(e){if(super(),e=sn({},GA,e),typeof e.multi!="boolean")throw new Ue(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!zA.has(e.type))throw new Ue(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new Ue(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?i_:e.type==="directed"?r_:s_;ai(this,"NodeDataClass",t);const n="geid_"+OA()+"_";let o=0;const a=()=>{let u;do u=n+o++;while(this._edges.has(u));return u};ai(this,"_attributes",{}),ai(this,"_nodes",new Map),ai(this,"_edges",new Map),ai(this,"_directedSize",0),ai(this,"_undirectedSize",0),ai(this,"_directedSelfLoopCount",0),ai(this,"_undirectedSelfLoopCount",0),ai(this,"_edgeKeyGenerator",a),ai(this,"_options",e),Kg.forEach(u=>ai(this,u,this[u])),Ei(this,"order",()=>this._nodes.size),Ei(this,"size",()=>this._edges.size),Ei(this,"directedSize",()=>this._directedSize),Ei(this,"undirectedSize",()=>this._undirectedSize),Ei(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),Ei(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),Ei(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),Ei(this,"multi",this._options.multi),Ei(this,"type",this._options.type),Ei(this,"allowSelfLoops",this._options.allowSelfLoops),Ei(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,o=this._edges.get(n);return!!o&&!o.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new Ue(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,o=this._edges.get(n);return!!o&&o.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new Ue(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?typeof n.out<"u"&&n.out.hasOwnProperty(t)||typeof n.undirected<"u"&&n.undirected.hasOwnProperty(t):!1}throw new Ue(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new rt("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Re(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Re(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const o=n.out&&n.out[t]||void 0;if(o)return o.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new rt("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Re(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Re(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const o=n.undirected&&n.undirected[t]||void 0;if(o)return o.key}edge(e,t){if(this.multi)throw new rt("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Re(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Re(`Graph.edge: could not find the "${t}" target node in the graph.`);const o=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(o)return o.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Re(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Re(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Re(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Re(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Re(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Re(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Re(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,o=0;return this.type!=="directed"&&(n+=t.undirectedDegree,o+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree,o+=t.directedLoops),n-o}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,o=0;return this.type!=="directed"&&(n+=t.undirectedDegree,o+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.outDegree,o+=t.directedLoops),n-o}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,o=0;return this.type!=="directed"&&(n+=t.undirectedDegree,o+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree,o+=t.directedLoops*2),n-o}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Re(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Re(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Re(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new Re(`Graph.opposite: could not find the "${t}" edge in the graph.`);const o=n.source.key,a=n.target.key;if(e===o)return a;if(e===a)return o;throw new Re(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${o}, ${a}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new Re(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Re(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Re(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Re(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return HA(this,e,t).key}mergeNode(e,t){if(t&&!vn(t))throw new Ue(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(sn(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new Ue(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const a=n.attributes;n.attributes=t(a),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const o=t?t({}):{};return n=new this.NodeDataClass(e,o),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:o}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Re(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const o in t.out){n=t.out[o];do so(this,n),n=n.next;while(n)}for(const o in t.in){n=t.in[o];do so(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const o in t.undirected){n=t.undirected[o];do so(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],o=""+arguments[1];if(t=ci(this,n,o,this.type),!t)throw new Re(`Graph.dropEdge: could not find the "${n}" -> "${o}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new Re(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return so(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new rt("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new rt("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=ci(this,e,t,"directed");if(!n)throw new Re(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return so(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new rt("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new rt("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=ci(this,e,t,"undirected");if(!n)throw new Re(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return so(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new Ue("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!vn(e))throw new Ue("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!vn(e))throw new Ue("Graph.mergeAttributes: provided attributes are not a plain object.");return sn(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new Ue("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new Ue("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!qg(t))throw new Ue("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let o,a;for(;o=n.next(),o.done!==!0;)a=o.value,a.attributes=e(a.key,a.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new Ue("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!qg(t))throw new Ue("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let o,a,u,c;for(;o=n.next(),o.done!==!0;)a=o.value,u=a.source,c=a.target,a.attributes=e(a.key,a.attributes,u.key,c.key,u.attributes,c.attributes,a.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new Ue("Graph.forEachAdjacencyEntry: expecting a callback.");uu(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ue("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");uu(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new Ue("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");uu(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ue("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");uu(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!="function")throw new Ue("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)o=n.value,e(o.key,o.attributes)}findNode(e){if(typeof e!="function")throw new Ue("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)if(o=n.value,e(o.key,o.attributes))return o.key}mapNodes(e){if(typeof e!="function")throw new Ue("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,o;const a=new Array(this.order);let u=0;for(;n=t.next(),n.done!==!0;)o=n.value,a[u++]=e(o.key,o.attributes);return a}someNode(e){if(typeof e!="function")throw new Ue("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)if(o=n.value,e(o.key,o.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new Ue("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)if(o=n.value,!e(o.key,o.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new Ue("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,o;const a=[];for(;n=t.next(),n.done!==!0;)o=n.value,e(o.key,o.attributes)&&a.push(o.key);return a}reduceNodes(e,t){if(typeof e!="function")throw new Ue("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new Ue("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const o=this._nodes.values();let a,u;for(;a=o.next(),a.done!==!0;)u=a.value,n=e(n,u.key,u.attributes);return n}nodeEntries(){const e=this._nodes.values();return{[Symbol.iterator](){return this},next(){const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((o,a)=>{e[t++]=IA(a,o)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((o,a)=>{n[t++]=UA(this.type,a,o)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if(e instanceof Ft)return e.forEachNode((h,f)=>{t?this.mergeNode(h,f):this.addNode(h,f)}),e.forEachEdge((h,f,m,g,v,x,E)=>{t?E?this.mergeUndirectedEdgeWithKey(h,m,g,f):this.mergeDirectedEdgeWithKey(h,m,g,f):E?this.addUndirectedEdgeWithKey(h,m,g,f):this.addDirectedEdgeWithKey(h,m,g,f)}),this;if(!vn(e))throw new Ue("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!vn(e.attributes))throw new Ue("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,o,a,u,c;if(e.nodes){if(a=e.nodes,!Array.isArray(a))throw new Ue("Graph.import: invalid nodes. Expecting an array.");for(n=0,o=a.length;n<o;n++){u=a[n],FA(u);const{key:h,attributes:f}=u;t?this.mergeNode(h,f):this.addNode(h,f)}}if(e.edges){let h=!1;if(this.type==="undirected"&&(h=!0),a=e.edges,!Array.isArray(a))throw new Ue("Graph.import: invalid edges. Expecting an array.");for(n=0,o=a.length;n<o;n++){c=a[n],kA(c);const{source:f,target:m,attributes:g,undirected:v=h}=c;let x;"key"in c?(x=t?v?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:v?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,x.call(this,c.key,f,m,g)):(x=t?v?this.mergeUndirectedEdge:this.mergeDirectedEdge:v?this.addUndirectedEdge:this.addDirectedEdge,x.call(this,f,m,g))}}return this}nullCopy(e){const t=new Ft(sn({},this._options,e));return t.replaceAttributes(sn({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,o)=>{const a=sn({},n.attributes);n=new t.NodeDataClass(o,a),t._nodes.set(o,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new rt(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new rt("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new rt("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let o,a;for(;o=n.next(),o.done!==!0;)a=o.value,c_(t,"copy",!1,a.undirected,a.key,a.source.key,a.target.key,sn({},a.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((a,u)=>{e[u]=a.attributes});const t={},n={};this._edges.forEach((a,u)=>{const c=a.undirected?"--":"->";let h="",f=a.source.key,m=a.target.key,g;a.undirected&&f>m&&(g=f,f=m,m=g);const v=`(${f})${c}(${m})`;u.startsWith("geid_")?this.multi&&(typeof n[v]>"u"?n[v]=0:n[v]++,h+=`${n[v]}. `):h+=`[${u}]: `,h+=v,t[h]=a.attributes});const o={};for(const a in this)this.hasOwnProperty(a)&&!Kg.has(a)&&typeof this[a]!="function"&&typeof a!="symbol"&&(o[a]=this[a]);return o.attributes=this._attributes,o.nodes=e,o.edges=t,ai(o,"constructor",this.constructor),o}}typeof Symbol<"u"&&(Ft.prototype[Symbol.for("nodejs.util.inspect.custom")]=Ft.prototype.inspect);BA.forEach(r=>{["add","merge","update"].forEach(e=>{const t=r.name(e),n=e==="add"?c_:VA;r.generateKey?Ft.prototype[t]=function(o,a,u){return n(this,t,!0,(r.type||this.type)==="undirected",null,o,a,u,e==="update")}:Ft.prototype[t]=function(o,a,u,c){return n(this,t,!1,(r.type||this.type)==="undirected",o,a,u,c,e==="update")}})});QT(Ft);uA(Ft);TA(Ft);NA(Ft);class d_ extends Ft{constructor(e){const t=sn({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new Ue("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new Ue('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class h_ extends Ft{constructor(e){const t=sn({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new Ue("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new Ue('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class f_ extends Ft{constructor(e){const t=sn({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ue("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class p_ extends Ft{constructor(e){const t=sn({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ue("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new Ue('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class m_ extends Ft{constructor(e){const t=sn({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ue("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new Ue('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function wo(r){r.from=function(e,t){const n=sn({},e.options,t),o=new r(n);return o.import(e),o}}wo(Ft);wo(d_);wo(h_);wo(f_);wo(p_);wo(m_);Ft.Graph=Ft;Ft.DirectedGraph=d_;Ft.UndirectedGraph=h_;Ft.MultiGraph=f_;Ft.MultiDirectedGraph=p_;Ft.MultiUndirectedGraph=m_;Ft.InvalidArgumentsGraphError=Ue;Ft.NotFoundGraphError=Re;Ft.UsageGraphError=rt;function WA(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function ga(r){var e=WA(r,"string");return typeof e=="symbol"?e:e+""}function Rn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Qg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,ga(n.key),n)}}function Cn(r,e,t){return e&&Qg(r.prototype,e),t&&Qg(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function vo(r){return vo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},vo(r)}function g_(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(g_=function(){return!!r})()}function XA(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $A(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return XA(r)}function di(r,e,t){return e=vo(e),$A(r,g_()?Reflect.construct(e,t||[],vo(r).constructor):e.apply(r,t))}function $h(r,e){return $h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},$h(r,e)}function hi(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&$h(r,e)}function jA(r){if(Array.isArray(r))return r}function YA(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,o,a,u,c=[],h=!0,f=!1;try{if(a=(t=t.call(r)).next,e===0){if(Object(t)!==t)return;h=!1}else for(;!(h=(n=a.call(t)).done)&&(c.push(n.value),c.length!==e);h=!0);}catch(m){f=!0,o=m}finally{try{if(!h&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}function jh(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function v_(r,e){if(r){if(typeof r=="string")return jh(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?jh(r,e):void 0}}function qA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _o(r,e){return jA(r)||YA(r,e)||v_(r,e)||qA()}var Yd={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},__=new Int8Array(4),qd=new Int32Array(__.buffer,0,1),KA=new Float32Array(__.buffer,0,1),ZA=/^\s*rgba?\s*\(/,QA=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function JA(r){var e=0,t=0,n=0,o=1;if(r[0]==="#")r.length===4?(e=parseInt(r.charAt(1)+r.charAt(1),16),t=parseInt(r.charAt(2)+r.charAt(2),16),n=parseInt(r.charAt(3)+r.charAt(3),16)):(e=parseInt(r.charAt(1)+r.charAt(2),16),t=parseInt(r.charAt(3)+r.charAt(4),16),n=parseInt(r.charAt(5)+r.charAt(6),16)),r.length===9&&(o=parseInt(r.charAt(7)+r.charAt(8),16)/255);else if(ZA.test(r)){var a=r.match(QA);a&&(e=+a[1],t=+a[2],n=+a[3],a[4]&&(o=+a[4]))}return{r:e,g:t,b:n,a:o}}var co={};for(var cu in Yd)co[cu]=ba(Yd[cu]),co[Yd[cu]]=co[cu];function y_(r,e,t,n,o){return qd[0]=n<<24|t<<16|e<<8|r,qd[0]=qd[0]&4278190079,KA[0]}function ba(r){if(r=r.toLowerCase(),typeof co[r]<"u")return co[r];var e=JA(r),t=e.r,n=e.g,o=e.b,a=e.a;a=a*255|0;var u=y_(t,n,o,a);return co[r]=u,u}var Kd={};function x_(r){if(typeof Kd[r]<"u")return Kd[r];var e=(r&16711680)>>>16,t=(r&65280)>>>8,n=r&255,o=255,a=y_(e,t,n,o);return Kd[r]=a,a}function Jg(r,e,t,n){return t+(e<<8)+(r<<16)}function ev(r,e,t,n,o,a){var u=Math.floor(t/a*o),c=Math.floor(r.drawingBufferHeight/a-n/a*o),h=new Uint8Array(4);r.bindFramebuffer(r.FRAMEBUFFER,e),r.readPixels(u,c,1,1,r.RGBA,r.UNSIGNED_BYTE,h);var f=_o(h,4),m=f[0],g=f[1],v=f[2],x=f[3];return[m,g,v,x]}function xe(r,e,t){return(e=ga(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function tv(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function Ke(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?tv(Object(t),!0).forEach(function(n){xe(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):tv(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function eb(r,e){for(;!{}.hasOwnProperty.call(r,e)&&(r=vo(r))!==null;);return r}function Yh(){return Yh=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(r,e,t){var n=eb(r,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?r:t):o.value}},Yh.apply(null,arguments)}function S_(r,e,t,n){var o=Yh(vo(r.prototype),e,t);return typeof o=="function"?function(a){return o.apply(t,a)}:o}function tb(r){return r.normalized?1:r.size}function Zd(r){var e=0;return r.forEach(function(t){return e+=tb(t)}),e}function E_(r,e,t){var n=r==="VERTEX"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,o=e.createShader(n);if(o===null)throw new Error("loadShader: error while creating the shader");e.shaderSource(o,t),e.compileShader(o);var a=e.getShaderParameter(o,e.COMPILE_STATUS);if(!a){var u=e.getShaderInfoLog(o);throw e.deleteShader(o),new Error(`loadShader: error while compiling the shader:
`.concat(u,`
`).concat(t))}return o}function nb(r,e){return E_("VERTEX",r,e)}function ib(r,e){return E_("FRAGMENT",r,e)}function rb(r,e){var t=r.createProgram();if(t===null)throw new Error("loadProgram: error while creating the program.");var n,o;for(n=0,o=e.length;n<o;n++)r.attachShader(t,e[n]);r.linkProgram(t);var a=r.getProgramParameter(t,r.LINK_STATUS);if(!a)throw r.deleteProgram(t),new Error("loadProgram: error while linking the program.");return t}function nv(r){var e=r.gl,t=r.buffer,n=r.program,o=r.vertexShader,a=r.fragmentShader;e.deleteShader(o),e.deleteShader(a),e.deleteProgram(n),e.deleteBuffer(t)}var iv=`#define PICKING_MODE
`,sb=xe(xe(xe(xe(xe(xe(xe(xe({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4),M_=(function(){function r(e,t,n){Rn(this,r),xe(this,"array",new Float32Array),xe(this,"constantArray",new Float32Array),xe(this,"capacity",0),xe(this,"verticesCount",0);var o=this.getDefinition();if(this.VERTICES=o.VERTICES,this.VERTEX_SHADER_SOURCE=o.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=o.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=o.UNIFORMS,this.ATTRIBUTES=o.ATTRIBUTES,this.METHOD=o.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in o?o.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in o?o.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in o,this.ATTRIBUTES_ITEMS_COUNT=Zd(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=n,this.normalProgram=this.getProgramInfo("normal",e,o.VERTEX_SHADER_SOURCE,o.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=t?this.getProgramInfo("pick",e,iv+o.VERTEX_SHADER_SOURCE,iv+o.FRAGMENT_SHADER_SOURCE,t):null,this.isInstanced){var a=Zd(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES," items, received ").concat(this.CONSTANT_DATA.length," instead)"));this.constantArray=new Float32Array(this.CONSTANT_DATA.length*a);for(var u=0;u<this.CONSTANT_DATA.length;u++){var c=this.CONSTANT_DATA[u];if(c.length!==a)throw new Error("Program: error while getting constant data (one vector has ".concat(c.length," items instead of ").concat(a,")"));for(var h=0;h<c.length;h++)this.constantArray[u*a+h]=c[h]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return Cn(r,[{key:"kill",value:function(){nv(this.normalProgram),this.pickProgram&&(nv(this.pickProgram),this.pickProgram=null)}},{key:"getProgramInfo",value:function(t,n,o,a,u){var c=this.getDefinition(),h=n.createBuffer();if(h===null)throw new Error("Program: error while creating the WebGL buffer.");var f=nb(n,o),m=ib(n,a),g=rb(n,[f,m]),v={};c.UNIFORMS.forEach(function(M){var S=n.getUniformLocation(g,M);S&&(v[M]=S)});var x={};c.ATTRIBUTES.forEach(function(M){x[M.name]=n.getAttribLocation(g,M.name)});var E;if("CONSTANT_ATTRIBUTES"in c&&(c.CONSTANT_ATTRIBUTES.forEach(function(M){x[M.name]=n.getAttribLocation(g,M.name)}),E=n.createBuffer(),E===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:t,program:g,gl:n,frameBuffer:u,buffer:h,constantBuffer:E||{},uniformLocations:v,attributeLocations:x,isPicking:t==="pick",vertexShader:f,fragmentShader:m}}},{key:"bindProgram",value:function(t){var n=this,o=0,a=t.gl,u=t.buffer;this.isInstanced?(a.bindBuffer(a.ARRAY_BUFFER,t.constantBuffer),o=0,this.CONSTANT_ATTRIBUTES.forEach(function(c){return o+=n.bindAttribute(c,t,o,!1)}),a.bufferData(a.ARRAY_BUFFER,this.constantArray,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,t.buffer),o=0,this.ATTRIBUTES.forEach(function(c){return o+=n.bindAttribute(c,t,o,!0)}),a.bufferData(a.ARRAY_BUFFER,this.array,a.DYNAMIC_DRAW)):(a.bindBuffer(a.ARRAY_BUFFER,u),o=0,this.ATTRIBUTES.forEach(function(c){return o+=n.bindAttribute(c,t,o)}),a.bufferData(a.ARRAY_BUFFER,this.array,a.DYNAMIC_DRAW)),a.bindBuffer(a.ARRAY_BUFFER,null)}},{key:"unbindProgram",value:function(t){var n=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(o){return n.unbindAttribute(o,t,!1)}),this.ATTRIBUTES.forEach(function(o){return n.unbindAttribute(o,t,!0)})):this.ATTRIBUTES.forEach(function(o){return n.unbindAttribute(o,t)})}},{key:"bindAttribute",value:function(t,n,o,a){var u=sb[t.type];if(typeof u!="number")throw new Error('Program.bind: yet unsupported attribute type "'.concat(t.type,'"'));var c=n.attributeLocations[t.name],h=n.gl;if(c!==-1){h.enableVertexAttribArray(c);var f=this.isInstanced?(a?this.ATTRIBUTES_ITEMS_COUNT:Zd(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;if(h.vertexAttribPointer(c,t.size,t.type,t.normalized||!1,f,o),this.isInstanced&&a)if(h instanceof WebGL2RenderingContext)h.vertexAttribDivisor(c,1);else{var m=h.getExtension("ANGLE_instanced_arrays");m&&m.vertexAttribDivisorANGLE(c,1)}}return t.size*u}},{key:"unbindAttribute",value:function(t,n,o){var a=n.attributeLocations[t.name],u=n.gl;if(a!==-1&&(u.disableVertexAttribArray(a),this.isInstanced&&o))if(u instanceof WebGL2RenderingContext)u.vertexAttribDivisor(a,0);else{var c=u.getExtension("ANGLE_instanced_arrays");c&&c.vertexAttribDivisorANGLE(a,0)}}},{key:"reallocate",value:function(t){t!==this.capacity&&(this.capacity=t,this.verticesCount=this.VERTICES*t,this.array=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT))}},{key:"hasNothingToRender",value:function(){return this.verticesCount===0}},{key:"renderProgram",value:function(t,n){var o=n.gl,a=n.program;o.enable(o.BLEND),o.useProgram(a),this.setUniforms(t,n),this.drawWebGL(this.METHOD,n)}},{key:"render",value:function(t){this.hasNothingToRender()||(this.pickProgram&&(this.pickProgram.gl.viewport(0,0,t.width*t.pixelRatio/t.downSizingRatio,t.height*t.pixelRatio/t.downSizingRatio),this.bindProgram(this.pickProgram),this.renderProgram(Ke(Ke({},t),{},{pixelRatio:t.pixelRatio/t.downSizingRatio}),this.pickProgram),this.unbindProgram(this.pickProgram)),this.normalProgram.gl.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(t,this.normalProgram),this.unbindProgram(this.normalProgram))}},{key:"drawWebGL",value:function(t,n){var o=n.gl,a=n.frameBuffer;if(o.bindFramebuffer(o.FRAMEBUFFER,a),!this.isInstanced)o.drawArrays(t,0,this.verticesCount);else if(o instanceof WebGL2RenderingContext)o.drawArraysInstanced(t,0,this.VERTICES,this.capacity);else{var u=o.getExtension("ANGLE_instanced_arrays");u&&u.drawArraysInstancedANGLE(t,0,this.VERTICES,this.capacity)}}}])})(),ob=(function(r){function e(){return Rn(this,e),di(this,e,arguments)}return hi(e,r),Cn(e,[{key:"kill",value:function(){S_(e,"kill",this)([])}},{key:"process",value:function(n,o,a){var u=o*this.STRIDE;if(a.hidden){for(var c=u+this.STRIDE;u<c;u++)this.array[u]=0;return}return this.processVisibleItem(x_(n),u,a)}}])})(M_),pf=(function(r){function e(){var t;Rn(this,e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=di(this,e,[].concat(o)),xe(t,"drawLabel",void 0),t}return hi(e,r),Cn(e,[{key:"kill",value:function(){S_(e,"kill",this)([])}},{key:"process",value:function(n,o,a,u,c){var h=o*this.STRIDE;if(c.hidden||a.hidden||u.hidden){for(var f=h+this.STRIDE;h<f;h++)this.array[h]=0;return}return this.processVisibleItem(x_(n),h,a,u,c)}}])})(M_);function ab(r,e){return(function(){function t(n,o,a){Rn(this,t),xe(this,"drawLabel",e),this.programs=r.map(function(u){return new u(n,o,a)})}return Cn(t,[{key:"reallocate",value:function(o){this.programs.forEach(function(a){return a.reallocate(o)})}},{key:"process",value:function(o,a,u,c,h){this.programs.forEach(function(f){return f.process(o,a,u,c,h)})}},{key:"render",value:function(o){this.programs.forEach(function(a){return a.render(o)})}},{key:"kill",value:function(){this.programs.forEach(function(o){return o.kill()})}}])})()}function lb(r,e,t,n,o){var a=o.edgeLabelSize,u=o.edgeLabelFont,c=o.edgeLabelWeight,h=o.edgeLabelColor.attribute?e[o.edgeLabelColor.attribute]||o.edgeLabelColor.color||"#000":o.edgeLabelColor.color,f=e.label;if(f){r.fillStyle=h,r.font="".concat(c," ").concat(a,"px ").concat(u);var m=t.size,g=n.size,v=t.x,x=t.y,E=n.x,M=n.y,S=(v+E)/2,y=(x+M)/2,I=E-v,L=M-x,w=Math.sqrt(I*I+L*L);if(!(w<m+g)){v+=I*m/w,x+=L*m/w,E-=I*g/w,M-=L*g/w,S=(v+E)/2,y=(x+M)/2,I=E-v,L=M-x,w=Math.sqrt(I*I+L*L);var U=r.measureText(f).width;if(U>w){var C="…";for(f=f+C,U=r.measureText(f).width;U>w&&f.length>1;)f=f.slice(0,-2)+C,U=r.measureText(f).width;if(f.length<4)return}var N;I>0?L>0?N=Math.acos(I/w):N=Math.asin(L/w):L>0?N=Math.acos(I/w)+Math.PI:N=Math.asin(I/w)+Math.PI/2,r.save(),r.translate(S,y),r.rotate(N),r.fillText(f,-U/2,e.size/2+a),r.restore()}}}function w_(r,e,t){if(e.label){var n=t.labelSize,o=t.labelFont,a=t.labelWeight,u=t.labelColor.attribute?e[t.labelColor.attribute]||t.labelColor.color||"#000":t.labelColor.color;r.fillStyle=u,r.font="".concat(a," ").concat(n,"px ").concat(o),r.fillText(e.label,e.x+e.size+3,e.y+n/3)}}function ub(r,e,t){var n=t.labelSize,o=t.labelFont,a=t.labelWeight;r.font="".concat(a," ").concat(n,"px ").concat(o),r.fillStyle="#FFF",r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=8,r.shadowColor="#000";var u=2;if(typeof e.label=="string"){var c=r.measureText(e.label).width,h=Math.round(c+5),f=Math.round(n+2*u),m=Math.max(e.size,n/2)+u,g=Math.asin(f/2/m),v=Math.sqrt(Math.abs(Math.pow(m,2)-Math.pow(f/2,2)));r.beginPath(),r.moveTo(e.x+v,e.y+f/2),r.lineTo(e.x+m+h,e.y+f/2),r.lineTo(e.x+m+h,e.y-f/2),r.lineTo(e.x+v,e.y-f/2),r.arc(e.x,e.y,m,g,-g),r.closePath(),r.fill()}else r.beginPath(),r.arc(e.x,e.y,e.size+u,0,Math.PI*2),r.closePath(),r.fill();r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=0,w_(r,e,t)}var cb=`
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
`,db=cb,hb=`
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
`,fb=hb,T_=WebGLRenderingContext,rv=T_.UNSIGNED_BYTE,Qd=T_.FLOAT,pb=["u_sizeRatio","u_correctionRatio","u_matrix"],Du=(function(r){function e(){return Rn(this,e),di(this,e,arguments)}return hi(e,r),Cn(e,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:fb,FRAGMENT_SHADER_SOURCE:db,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:pb,ATTRIBUTES:[{name:"a_position",size:2,type:Qd},{name:"a_size",size:1,type:Qd},{name:"a_color",size:4,type:rv,normalized:!0},{name:"a_id",size:4,type:rv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_angle",size:1,type:Qd}],CONSTANT_DATA:[[e.ANGLE_1],[e.ANGLE_2],[e.ANGLE_3]]}}},{key:"processVisibleItem",value:function(n,o,a){var u=this.array,c=ba(a.color);u[o++]=a.x,u[o++]=a.y,u[o++]=a.size,u[o++]=c,u[o++]=n}},{key:"setUniforms",value:function(n,o){var a=o.gl,u=o.uniformLocations,c=u.u_sizeRatio,h=u.u_correctionRatio,f=u.u_matrix;a.uniform1f(h,n.correctionRatio),a.uniform1f(c,n.sizeRatio),a.uniformMatrix3fv(f,!1,n.matrix)}}])})(ob);xe(Du,"ANGLE_1",0);xe(Du,"ANGLE_2",2*Math.PI/3);xe(Du,"ANGLE_3",4*Math.PI/3);var mb=`
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`,gb=mb,vb=`
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
`,_b=vb,A_=WebGLRenderingContext,sv=A_.UNSIGNED_BYTE,du=A_.FLOAT,yb=["u_matrix","u_sizeRatio","u_correctionRatio","u_minEdgeThickness","u_lengthToThicknessRatio","u_widenessToThicknessRatio"],b_={extremity:"target",lengthToThicknessRatio:2.5,widenessToThicknessRatio:2};function R_(r){var e=Ke(Ke({},b_),{});return(function(t){function n(){return Rn(this,n),di(this,n,arguments)}return hi(n,t),Cn(n,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:_b,FRAGMENT_SHADER_SOURCE:gb,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:yb,ATTRIBUTES:[{name:"a_position",size:2,type:du},{name:"a_normal",size:2,type:du},{name:"a_radius",size:1,type:du},{name:"a_color",size:4,type:sv,normalized:!0},{name:"a_id",size:4,type:sv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_barycentric",size:3,type:du}],CONSTANT_DATA:[[1,0,0],[0,1,0],[0,0,1]]}}},{key:"processVisibleItem",value:function(a,u,c,h,f){if(e.extremity==="source"){var m=[h,c];c=m[0],h=m[1]}var g=f.size||1,v=h.size||1,x=c.x,E=c.y,M=h.x,S=h.y,y=ba(f.color),I=M-x,L=S-E,w=I*I+L*L,U=0,C=0;w&&(w=1/Math.sqrt(w),U=-L*w*g,C=I*w*g);var N=this.array;N[u++]=M,N[u++]=S,N[u++]=-U,N[u++]=-C,N[u++]=v,N[u++]=y,N[u++]=a}},{key:"setUniforms",value:function(a,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_sizeRatio,g=h.u_correctionRatio,v=h.u_minEdgeThickness,x=h.u_lengthToThicknessRatio,E=h.u_widenessToThicknessRatio;c.uniformMatrix3fv(f,!1,a.matrix),c.uniform1f(m,a.sizeRatio),c.uniform1f(g,a.correctionRatio),c.uniform1f(v,a.minEdgeThickness),c.uniform1f(x,e.lengthToThicknessRatio),c.uniform1f(E,e.widenessToThicknessRatio)}}])})(pf)}R_();var xb=`
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
`,C_=xb,Sb=`
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
`,Eb=Sb,P_=WebGLRenderingContext,ov=P_.UNSIGNED_BYTE,hs=P_.FLOAT,Mb=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness","u_lengthToThicknessRatio"],wb={lengthToThicknessRatio:b_.lengthToThicknessRatio};function L_(r){var e=Ke(Ke({},wb),{});return(function(t){function n(){return Rn(this,n),di(this,n,arguments)}return hi(n,t),Cn(n,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:Eb,FRAGMENT_SHADER_SOURCE:C_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:Mb,ATTRIBUTES:[{name:"a_positionStart",size:2,type:hs},{name:"a_positionEnd",size:2,type:hs},{name:"a_normal",size:2,type:hs},{name:"a_color",size:4,type:ov,normalized:!0},{name:"a_id",size:4,type:ov,normalized:!0},{name:"a_radius",size:1,type:hs}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:hs},{name:"a_normalCoef",size:1,type:hs},{name:"a_radiusCoef",size:1,type:hs}],CONSTANT_DATA:[[0,1,0],[0,-1,0],[1,1,1],[1,1,1],[0,-1,0],[1,-1,-1]]}}},{key:"processVisibleItem",value:function(a,u,c,h,f){var m=f.size||1,g=c.x,v=c.y,x=h.x,E=h.y,M=ba(f.color),S=x-g,y=E-v,I=h.size||1,L=S*S+y*y,w=0,U=0;L&&(L=1/Math.sqrt(L),w=-y*L*m,U=S*L*m);var C=this.array;C[u++]=g,C[u++]=v,C[u++]=x,C[u++]=E,C[u++]=w,C[u++]=U,C[u++]=M,C[u++]=a,C[u++]=I}},{key:"setUniforms",value:function(a,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_zoomRatio,g=h.u_feather,v=h.u_pixelRatio,x=h.u_correctionRatio,E=h.u_sizeRatio,M=h.u_minEdgeThickness,S=h.u_lengthToThicknessRatio;c.uniformMatrix3fv(f,!1,a.matrix),c.uniform1f(m,a.zoomRatio),c.uniform1f(E,a.sizeRatio),c.uniform1f(x,a.correctionRatio),c.uniform1f(v,a.pixelRatio),c.uniform1f(g,a.antiAliasingFeather),c.uniform1f(M,a.minEdgeThickness),c.uniform1f(S,e.lengthToThicknessRatio)}}])})(pf)}L_();function Tb(r){return ab([L_(),R_()])}var Ab=Tb(),bb=Ab,Rb=`
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
`,Cb=Rb,D_=WebGLRenderingContext,av=D_.UNSIGNED_BYTE,da=D_.FLOAT,Pb=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness"],Lb=(function(r){function e(){return Rn(this,e),di(this,e,arguments)}return hi(e,r),Cn(e,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:Cb,FRAGMENT_SHADER_SOURCE:C_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:Pb,ATTRIBUTES:[{name:"a_positionStart",size:2,type:da},{name:"a_positionEnd",size:2,type:da},{name:"a_normal",size:2,type:da},{name:"a_color",size:4,type:av,normalized:!0},{name:"a_id",size:4,type:av,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:da},{name:"a_normalCoef",size:1,type:da}],CONSTANT_DATA:[[0,1],[0,-1],[1,1],[1,1],[0,-1],[1,-1]]}}},{key:"processVisibleItem",value:function(n,o,a,u,c){var h=c.size||1,f=a.x,m=a.y,g=u.x,v=u.y,x=ba(c.color),E=g-f,M=v-m,S=E*E+M*M,y=0,I=0;S&&(S=1/Math.sqrt(S),y=-M*S*h,I=E*S*h);var L=this.array;L[o++]=f,L[o++]=m,L[o++]=g,L[o++]=v,L[o++]=y,L[o++]=I,L[o++]=x,L[o++]=n}},{key:"setUniforms",value:function(n,o){var a=o.gl,u=o.uniformLocations,c=u.u_matrix,h=u.u_zoomRatio,f=u.u_feather,m=u.u_pixelRatio,g=u.u_correctionRatio,v=u.u_sizeRatio,x=u.u_minEdgeThickness;a.uniformMatrix3fv(c,!1,n.matrix),a.uniform1f(h,n.zoomRatio),a.uniform1f(v,n.sizeRatio),a.uniform1f(g,n.correctionRatio),a.uniform1f(m,n.pixelRatio),a.uniform1f(f,n.antiAliasingFeather),a.uniform1f(x,n.minEdgeThickness)}}])})(pf),mf=(function(r){function e(){var t;return Rn(this,e),t=di(this,e),t.rawEmitter=t,t}return hi(e,r),Cn(e)})(t_.EventEmitter),Jd,lv;function Db(){return lv||(lv=1,Jd=function(e){return e!==null&&typeof e=="object"&&typeof e.addUndirectedEdgeWithKey=="function"&&typeof e.dropNode=="function"&&typeof e.multi=="boolean"}),Jd}var Nb=Db();const Ib=Zh(Nb);var Ub=function(e){return e},Fb=function(e){return e*e},kb=function(e){return e*(2-e)},Ob=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},zb=function(e){return e*e*e},Bb=function(e){return--e*e*e+1},Gb=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},Hb={linear:Ub,quadraticIn:Fb,quadraticOut:kb,quadraticInOut:Ob,cubicIn:zb,cubicOut:Bb,cubicInOut:Gb},Vb={easing:"quadraticInOut",duration:150};function Mi(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function hu(r,e,t){return r[0]=e,r[4]=typeof t=="number"?t:e,r}function uv(r,e){var t=Math.sin(e),n=Math.cos(e);return r[0]=n,r[1]=t,r[3]=-t,r[4]=n,r}function cv(r,e,t){return r[6]=e,r[7]=t,r}function zr(r,e){var t=r[0],n=r[1],o=r[2],a=r[3],u=r[4],c=r[5],h=r[6],f=r[7],m=r[8],g=e[0],v=e[1],x=e[2],E=e[3],M=e[4],S=e[5],y=e[6],I=e[7],L=e[8];return r[0]=g*t+v*a+x*h,r[1]=g*n+v*u+x*f,r[2]=g*o+v*c+x*m,r[3]=E*t+M*a+S*h,r[4]=E*n+M*u+S*f,r[5]=E*o+M*c+S*m,r[6]=y*t+I*a+L*h,r[7]=y*n+I*u+L*f,r[8]=y*o+I*c+L*m,r}function qh(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=r[0],o=r[1],a=r[3],u=r[4],c=r[6],h=r[7],f=e.x,m=e.y;return{x:f*n+m*a+c*t,y:f*o+m*u+h*t}}function Wb(r,e){var t=r.height/r.width,n=e.height/e.width;return t<1&&n>1||t>1&&n<1?1:Math.min(Math.max(n,1/n),Math.max(1/t,t))}function ha(r,e,t,n,o){var a=r.angle,u=r.ratio,c=r.x,h=r.y,f=e.width,m=e.height,g=Mi(),v=Math.min(f,m)-2*n,x=Wb(e,t);return o?(zr(g,cv(Mi(),c,h)),zr(g,hu(Mi(),u)),zr(g,uv(Mi(),a)),zr(g,hu(Mi(),f/v/2/x,m/v/2/x))):(zr(g,hu(Mi(),2*(v/f)*x,2*(v/m)*x)),zr(g,uv(Mi(),-a)),zr(g,hu(Mi(),1/u)),zr(g,cv(Mi(),-c,-h))),g}function Xb(r,e,t){var n=qh(r,{x:Math.cos(e.angle),y:Math.sin(e.angle)},0),o=n.x,a=n.y;return 1/Math.sqrt(Math.pow(o,2)+Math.pow(a,2))/t.width}function $b(r){if(!r.order)return{x:[0,1],y:[0,1]};var e=1/0,t=-1/0,n=1/0,o=-1/0;return r.forEachNode(function(a,u){var c=u.x,h=u.y;c<e&&(e=c),c>t&&(t=c),h<n&&(n=h),h>o&&(o=h)}),{x:[e,t],y:[n,o]}}function jb(r){if(!Ib(r))throw new Error("Sigma: invalid graph instance.");r.forEachNode(function(e,t){if(!Number.isFinite(t.x)||!Number.isFinite(t.y))throw new Error("Sigma: Coordinates of node ".concat(e," are invalid. A node must have a numeric 'x' and 'y' attribute."))})}function Yb(r,e,t){var n=document.createElement(r);if(e)for(var o in e)n.style[o]=e[o];if(t)for(var a in t)n.setAttribute(a,t[a]);return n}function dv(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}function hv(r,e,t){return t.sort(function(n,o){var a=e(n)||0,u=e(o)||0;return a<u?-1:a>u?1:0})}function fv(r){var e=_o(r.x,2),t=e[0],n=e[1],o=_o(r.y,2),a=o[0],u=o[1],c=Math.max(n-t,u-a),h=(n+t)/2,f=(u+a)/2;(c===0||Math.abs(c)===1/0||isNaN(c))&&(c=1),isNaN(h)&&(h=0),isNaN(f)&&(f=0);var m=function(v){return{x:.5+(v.x-h)/c,y:.5+(v.y-f)/c}};return m.applyTo=function(g){g.x=.5+(g.x-h)/c,g.y=.5+(g.y-f)/c},m.inverse=function(g){return{x:h+c*(g.x-.5),y:f+c*(g.y-.5)}},m.ratio=c,m}function Kh(r){"@babel/helpers - typeof";return Kh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kh(r)}function pv(r,e){var t=e.size;if(t!==0){var n=r.length;r.length+=t;var o=0;e.forEach(function(a){r[n+o]=a,o++})}}function eh(r){r=r||{};for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;e++){var n=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];n&&Object.assign(r,n)}return r}var gf={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,enableEdgeEvents:!1,defaultNodeColor:"#999",defaultNodeType:"circle",defaultEdgeColor:"#ccc",defaultEdgeType:"line",labelFont:"Arial",labelSize:14,labelWeight:"normal",labelColor:{color:"#000"},edgeLabelFont:"Arial",edgeLabelSize:14,edgeLabelWeight:"normal",edgeLabelColor:{attribute:"color"},stagePadding:30,defaultDrawEdgeLabel:lb,defaultDrawNodeLabel:w_,defaultDrawNodeHover:ub,minEdgeThickness:1.7,antiAliasingFeather:1,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"screen",autoRescale:!0,autoCenter:!0,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,nodeReducer:null,edgeReducer:null,zIndex:!1,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,cameraPanBoundaries:null,allowInvalidContainer:!1,nodeProgramClasses:{},nodeHoverProgramClasses:{},edgeProgramClasses:{}},qb={circle:Du},Kb={arrow:bb,line:Lb};function th(r){if(typeof r.labelDensity!="number"||r.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");var e=r.minCameraRatio,t=r.maxCameraRatio;if(typeof e=="number"&&typeof t=="number"&&t<e)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function Zb(r){var e=eh({},gf,r);return e.nodeProgramClasses=eh({},qb,e.nodeProgramClasses),e.edgeProgramClasses=eh({},Kb,e.edgeProgramClasses),e}var fu=1.5,mv=(function(r){function e(){var t;return Rn(this,e),t=di(this,e),xe(t,"x",.5),xe(t,"y",.5),xe(t,"angle",0),xe(t,"ratio",1),xe(t,"minRatio",null),xe(t,"maxRatio",null),xe(t,"enabledZooming",!0),xe(t,"enabledPanning",!0),xe(t,"enabledRotation",!0),xe(t,"clean",null),xe(t,"nextFrame",null),xe(t,"previousState",null),xe(t,"enabled",!0),t.previousState=t.getState(),t}return hi(e,r),Cn(e,[{key:"enable",value:function(){return this.enabled=!0,this}},{key:"disable",value:function(){return this.enabled=!1,this}},{key:"getState",value:function(){return{x:this.x,y:this.y,angle:this.angle,ratio:this.ratio}}},{key:"hasState",value:function(n){return this.x===n.x&&this.y===n.y&&this.ratio===n.ratio&&this.angle===n.angle}},{key:"getPreviousState",value:function(){var n=this.previousState;return n?{x:n.x,y:n.y,angle:n.angle,ratio:n.ratio}:null}},{key:"getBoundedRatio",value:function(n){var o=n;return typeof this.minRatio=="number"&&(o=Math.max(o,this.minRatio)),typeof this.maxRatio=="number"&&(o=Math.min(o,this.maxRatio)),o}},{key:"validateState",value:function(n){var o={};return this.enabledPanning&&typeof n.x=="number"&&(o.x=n.x),this.enabledPanning&&typeof n.y=="number"&&(o.y=n.y),this.enabledZooming&&typeof n.ratio=="number"&&(o.ratio=this.getBoundedRatio(n.ratio)),this.enabledRotation&&typeof n.angle=="number"&&(o.angle=n.angle),this.clean?this.clean(Ke(Ke({},this.getState()),o)):o}},{key:"isAnimated",value:function(){return!!this.nextFrame}},{key:"setState",value:function(n){if(!this.enabled)return this;this.previousState=this.getState();var o=this.validateState(n);return typeof o.x=="number"&&(this.x=o.x),typeof o.y=="number"&&(this.y=o.y),typeof o.ratio=="number"&&(this.ratio=o.ratio),typeof o.angle=="number"&&(this.angle=o.angle),this.hasState(this.previousState)||this.emit("updated",this.getState()),this}},{key:"updateState",value:function(n){return this.setState(n(this.getState())),this}},{key:"animate",value:function(n){var o=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=arguments.length>2?arguments[2]:void 0;if(!u)return new Promise(function(x){return o.animate(n,a,x)});if(this.enabled){var c=Ke(Ke({},Vb),a),h=this.validateState(n),f=typeof c.easing=="function"?c.easing:Hb[c.easing],m=Date.now(),g=this.getState(),v=function(){var E=(Date.now()-m)/c.duration;if(E>=1){o.nextFrame=null,o.setState(h),o.animationCallback&&(o.animationCallback.call(null),o.animationCallback=void 0);return}var M=f(E),S={};typeof h.x=="number"&&(S.x=g.x+(h.x-g.x)*M),typeof h.y=="number"&&(S.y=g.y+(h.y-g.y)*M),o.enabledRotation&&typeof h.angle=="number"&&(S.angle=g.angle+(h.angle-g.angle)*M),typeof h.ratio=="number"&&(S.ratio=g.ratio+(h.ratio-g.ratio)*M),o.setState(S),o.nextFrame=requestAnimationFrame(v)};this.nextFrame?(cancelAnimationFrame(this.nextFrame),this.animationCallback&&this.animationCallback.call(null),this.nextFrame=requestAnimationFrame(v)):v(),this.animationCallback=u}}},{key:"animatedZoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio/n}):this.animate({ratio:this.ratio/(n.factor||fu)},n):this.animate({ratio:this.ratio/fu})}},{key:"animatedUnzoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio*n}):this.animate({ratio:this.ratio*(n.factor||fu)},n):this.animate({ratio:this.ratio*fu})}},{key:"animatedReset",value:function(n){return this.animate({x:.5,y:.5,ratio:1,angle:0},n)}},{key:"copy",value:function(){return e.from(this.getState())}}],[{key:"from",value:function(n){var o=new e;return o.setState(n)}}])})(mf);function Ti(r,e){var t=e.getBoundingClientRect();return{x:r.clientX-t.left,y:r.clientY-t.top}}function er(r,e){var t=Ke(Ke({},Ti(r,e)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){t.sigmaDefaultPrevented=!0},original:r});return t}function fa(r){var e="x"in r?r:Ke(Ke({},r.touches[0]||r.previousTouches[0]),{},{original:r.original,sigmaDefaultPrevented:r.sigmaDefaultPrevented,preventSigmaDefault:function(){r.sigmaDefaultPrevented=!0,e.sigmaDefaultPrevented=!0}});return e}function Qb(r,e){return Ke(Ke({},er(r,e)),{},{delta:N_(r)})}var Jb=2;function Su(r){for(var e=[],t=0,n=Math.min(r.length,Jb);t<n;t++)e.push(r[t]);return e}function pa(r,e,t){var n={touches:Su(r.touches).map(function(o){return Ti(o,t)}),previousTouches:e.map(function(o){return Ti(o,t)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){n.sigmaDefaultPrevented=!0},original:r};return n}function N_(r){if(typeof r.deltaY<"u")return r.deltaY*-3/360;if(typeof r.detail<"u")return r.detail/-9;throw new Error("Captor: could not extract delta from event.")}var I_=(function(r){function e(t,n){var o;return Rn(this,e),o=di(this,e),o.container=t,o.renderer=n,o}return hi(e,r),Cn(e)})(mf),eR=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],tR=eR.reduce(function(r,e){return Ke(Ke({},r),{},xe({},e,gf[e]))},{}),nR=(function(r){function e(t,n){var o;return Rn(this,e),o=di(this,e,[t,n]),xe(o,"enabled",!0),xe(o,"draggedEvents",0),xe(o,"downStartTime",null),xe(o,"lastMouseX",null),xe(o,"lastMouseY",null),xe(o,"isMouseDown",!1),xe(o,"isMoving",!1),xe(o,"movingTimeout",null),xe(o,"startCameraState",null),xe(o,"clicks",0),xe(o,"doubleClickTimeout",null),xe(o,"currentWheelDirection",0),xe(o,"settings",tR),o.handleClick=o.handleClick.bind(o),o.handleRightClick=o.handleRightClick.bind(o),o.handleDown=o.handleDown.bind(o),o.handleUp=o.handleUp.bind(o),o.handleMove=o.handleMove.bind(o),o.handleWheel=o.handleWheel.bind(o),o.handleLeave=o.handleLeave.bind(o),o.handleEnter=o.handleEnter.bind(o),t.addEventListener("click",o.handleClick,{capture:!1}),t.addEventListener("contextmenu",o.handleRightClick,{capture:!1}),t.addEventListener("mousedown",o.handleDown,{capture:!1}),t.addEventListener("wheel",o.handleWheel,{capture:!1}),t.addEventListener("mouseleave",o.handleLeave,{capture:!1}),t.addEventListener("mouseenter",o.handleEnter,{capture:!1}),document.addEventListener("mousemove",o.handleMove,{capture:!1}),document.addEventListener("mouseup",o.handleUp,{capture:!1}),o}return hi(e,r),Cn(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("click",this.handleClick),n.removeEventListener("contextmenu",this.handleRightClick),n.removeEventListener("mousedown",this.handleDown),n.removeEventListener("wheel",this.handleWheel),n.removeEventListener("mouseleave",this.handleLeave),n.removeEventListener("mouseenter",this.handleEnter),document.removeEventListener("mousemove",this.handleMove),document.removeEventListener("mouseup",this.handleUp)}},{key:"handleClick",value:function(n){var o=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(n);setTimeout(function(){o.clicks=0,o.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",er(n,this.container))}}},{key:"handleRightClick",value:function(n){this.enabled&&this.emit("rightClick",er(n,this.container))}},{key:"handleDoubleClick",value:function(n){if(this.enabled){n.preventDefault(),n.stopPropagation();var o=er(n,this.container);if(this.emit("doubleClick",o),!o.sigmaDefaultPrevented){var a=this.renderer.getCamera(),u=a.getBoundedRatio(a.getState().ratio/this.settings.doubleClickZoomingRatio);a.animate(this.renderer.getViewportZoomedState(Ti(n,this.container),u),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}}},{key:"handleDown",value:function(n){if(this.enabled){if(n.button===0){this.startCameraState=this.renderer.getCamera().getState();var o=Ti(n,this.container),a=o.x,u=o.y;this.lastMouseX=a,this.lastMouseY=u,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}this.emit("mousedown",er(n,this.container))}}},{key:"handleUp",value:function(n){var o=this;if(!(!this.enabled||!this.isMouseDown)){var a=this.renderer.getCamera();this.isMouseDown=!1,typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var u=Ti(n,this.container),c=u.x,h=u.y,f=a.getState(),m=a.getPreviousState()||{x:0,y:0};this.isMoving?a.animate({x:f.x+this.settings.inertiaRatio*(f.x-m.x),y:f.y+this.settings.inertiaRatio*(f.y-m.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==c||this.lastMouseY!==h)&&a.setState({x:f.x,y:f.y}),this.isMoving=!1,setTimeout(function(){var g=o.draggedEvents>0;o.draggedEvents=0,g&&o.renderer.getSetting("hideEdgesOnMove")&&o.renderer.refresh()},0),this.emit("mouseup",er(n,this.container))}}},{key:"handleMove",value:function(n){var o=this;if(this.enabled){var a=er(n,this.container);if(this.emit("mousemovebody",a),(n.target===this.container||n.composedPath()[0]===this.container)&&this.emit("mousemove",a),!a.sigmaDefaultPrevented&&this.isMouseDown){this.isMoving=!0,this.draggedEvents++,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){o.movingTimeout=null,o.isMoving=!1},this.settings.dragTimeout);var u=this.renderer.getCamera(),c=Ti(n,this.container),h=c.x,f=c.y,m=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),g=this.renderer.viewportToFramedGraph({x:h,y:f}),v=m.x-g.x,x=m.y-g.y,E=u.getState(),M=E.x+v,S=E.y+x;u.setState({x:M,y:S}),this.lastMouseX=h,this.lastMouseY=f,n.preventDefault(),n.stopPropagation()}}}},{key:"handleLeave",value:function(n){this.emit("mouseleave",er(n,this.container))}},{key:"handleEnter",value:function(n){this.emit("mouseenter",er(n,this.container))}},{key:"handleWheel",value:function(n){var o=this,a=this.renderer.getCamera();if(!(!this.enabled||!a.enabledZooming)){var u=N_(n);if(u){var c=Qb(n,this.container);if(this.emit("wheel",c),c.sigmaDefaultPrevented){n.preventDefault(),n.stopPropagation();return}var h=a.getState().ratio,f=u>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,m=a.getBoundedRatio(h*f),g=u>0?1:-1,v=Date.now();h!==m&&(n.preventDefault(),n.stopPropagation(),!(this.currentWheelDirection===g&&this.lastWheelTriggerTime&&v-this.lastWheelTriggerTime<this.settings.zoomDuration/5)&&(a.animate(this.renderer.getViewportZoomedState(Ti(n,this.container),m),{easing:"quadraticOut",duration:this.settings.zoomDuration},function(){o.currentWheelDirection=0}),this.currentWheelDirection=g,this.lastWheelTriggerTime=v))}}}},{key:"setSettings",value:function(n){this.settings=n}}])})(I_),iR=["dragTimeout","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],rR=iR.reduce(function(r,e){return Ke(Ke({},r),{},xe({},e,gf[e]))},{}),sR=(function(r){function e(t,n){var o;return Rn(this,e),o=di(this,e,[t,n]),xe(o,"enabled",!0),xe(o,"isMoving",!1),xe(o,"hasMoved",!1),xe(o,"touchMode",0),xe(o,"startTouchesPositions",[]),xe(o,"lastTouches",[]),xe(o,"lastTap",null),xe(o,"settings",rR),o.handleStart=o.handleStart.bind(o),o.handleLeave=o.handleLeave.bind(o),o.handleMove=o.handleMove.bind(o),t.addEventListener("touchstart",o.handleStart,{capture:!1}),t.addEventListener("touchcancel",o.handleLeave,{capture:!1}),document.addEventListener("touchend",o.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",o.handleMove,{capture:!1,passive:!1}),o}return hi(e,r),Cn(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("touchstart",this.handleStart),n.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}},{key:"getDimensions",value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:"handleStart",value:function(n){var o=this;if(this.enabled){n.preventDefault();var a=Su(n.touches);if(this.touchMode=a.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=a.map(function(x){return Ti(x,o.container)}),this.touchMode===2){var u=_o(this.startTouchesPositions,2),c=u[0],h=c.x,f=c.y,m=u[1],g=m.x,v=m.y;this.startTouchesAngle=Math.atan2(v-f,g-h),this.startTouchesDistance=Math.sqrt(Math.pow(g-h,2)+Math.pow(v-f,2))}this.emit("touchdown",pa(n,this.lastTouches,this.container)),this.lastTouches=a,this.lastTouchesPositions=this.startTouchesPositions}}},{key:"handleLeave",value:function(n){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(n.cancelable&&n.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(n.touches.length===1){this.handleStart(n),n.preventDefault();break}case 1:if(this.isMoving){var o=this.renderer.getCamera(),a=o.getState(),u=o.getPreviousState()||{x:0,y:0};o.animate({x:a.x+this.settings.inertiaRatio*(a.x-u.x),y:a.y+this.settings.inertiaRatio*(a.y-u.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.emit("touchup",pa(n,this.lastTouches,this.container)),!n.touches.length){var c=Ti(this.lastTouches[0],this.container),h=this.startTouchesPositions[0],f=Math.pow(c.x-h.x,2)+Math.pow(c.y-h.y,2);if(!n.touches.length&&f<Math.pow(this.settings.tapMoveTolerance,2))if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var m=pa(n,this.lastTouches,this.container);if(this.emit("doubletap",m),this.lastTap=null,!m.sigmaDefaultPrevented){var g=this.renderer.getCamera(),v=g.getBoundedRatio(g.getState().ratio/this.settings.doubleClickZoomingRatio);g.animate(this.renderer.getViewportZoomedState(c,v),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{var x=pa(n,this.lastTouches,this.container);this.emit("tap",x),this.lastTap={time:Date.now(),position:x.touches[0]||x.previousTouches[0]}}}this.lastTouches=Su(n.touches),this.startTouchesPositions=[]}}},{key:"handleMove",value:function(n){var o=this;if(!(!this.enabled||!this.startTouchesPositions.length)){n.preventDefault();var a=Su(n.touches),u=a.map(function(R){return Ti(R,o.container)}),c=this.lastTouches;this.lastTouches=a,this.lastTouchesPositions=u;var h=pa(n,c,this.container);if(this.emit("touchmove",h),!h.sigmaDefaultPrevented&&(this.hasMoved||(this.hasMoved=u.some(function(R,X){var me=o.startTouchesPositions[X];return me&&(R.x!==me.x||R.y!==me.y)})),!!this.hasMoved)){this.isMoving=!0,this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){o.isMoving=!1},this.settings.dragTimeout);var f=this.renderer.getCamera(),m=this.startCameraState,g=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{var v=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),x=v.x,E=v.y,M=this.renderer.viewportToFramedGraph(u[0]),S=M.x,y=M.y;f.setState({x:m.x+x-S,y:m.y+E-y});break}case 2:{var I={x:.5,y:.5,angle:0,ratio:1},L=u[0],w=L.x,U=L.y,C=u[1],N=C.x,O=C.y,P=Math.atan2(O-U,N-w)-this.startTouchesAngle,T=Math.hypot(O-U,N-w)/this.startTouchesDistance,z=f.getBoundedRatio(m.ratio/T);I.ratio=z,I.angle=m.angle+P;var j=this.getDimensions(),K=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:m}),oe=Math.min(j.width,j.height)-2*g,de=oe/j.width,ae=oe/j.height,ce=z/oe,H=w-oe/2/de,ue=U-oe/2/ae,re=[H*Math.cos(-I.angle)-ue*Math.sin(-I.angle),ue*Math.cos(-I.angle)+H*Math.sin(-I.angle)];H=re[0],ue=re[1],I.x=K.x-H*ce,I.y=K.y+ue*ce,f.setState(I);break}}}}}},{key:"setSettings",value:function(n){this.settings=n}}])})(I_);function oR(r){if(Array.isArray(r))return jh(r)}function aR(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function lR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gv(r){return oR(r)||aR(r)||v_(r)||lR()}function uR(r,e){if(r==null)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)!==-1)continue;t[n]=r[n]}return t}function nh(r,e){if(r==null)return{};var t,n,o=uR(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var vv=(function(){function r(e,t){Rn(this,r),this.key=e,this.size=t}return Cn(r,null,[{key:"compare",value:function(t,n){return t.size>n.size?-1:t.size<n.size||t.key>n.key?1:-1}}])})(),_v=(function(){function r(){Rn(this,r),xe(this,"width",0),xe(this,"height",0),xe(this,"cellSize",0),xe(this,"columns",0),xe(this,"rows",0),xe(this,"cells",{})}return Cn(r,[{key:"resizeAndClear",value:function(t,n){this.width=t.width,this.height=t.height,this.cellSize=n,this.columns=Math.ceil(t.width/n),this.rows=Math.ceil(t.height/n),this.cells={}}},{key:"getIndex",value:function(t){var n=Math.floor(t.x/this.cellSize),o=Math.floor(t.y/this.cellSize);return o*this.columns+n}},{key:"add",value:function(t,n,o){var a=new vv(t,n),u=this.getIndex(o),c=this.cells[u];c||(c=[],this.cells[u]=c),c.push(a)}},{key:"organize",value:function(){for(var t in this.cells){var n=this.cells[t];n.sort(vv.compare)}}},{key:"getLabelsToDisplay",value:function(t,n){var o=this.cellSize*this.cellSize,a=o/t/t,u=a*n/o,c=Math.ceil(u),h=[];for(var f in this.cells)for(var m=this.cells[f],g=0;g<Math.min(c,m.length);g++)h.push(m[g].key);return h}}])})();function cR(r){var e=r.graph,t=r.hoveredNode,n=r.highlightedNodes,o=r.displayedNodeLabels,a=[];return e.forEachEdge(function(u,c,h,f){(h===t||f===t||n.has(h)||n.has(f)||o.has(h)&&o.has(f))&&a.push(u)}),a}var yv=150,xv=50,nr=Object.prototype.hasOwnProperty;function dR(r,e,t){if(!nr.call(t,"x")||!nr.call(t,"y"))throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(e,'". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));return t.color||(t.color=r.defaultNodeColor),!t.label&&t.label!==""&&(t.label=null),t.label!==void 0&&t.label!==null?t.label=""+t.label:t.label=null,t.size||(t.size=2),nr.call(t,"hidden")||(t.hidden=!1),nr.call(t,"highlighted")||(t.highlighted=!1),nr.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultNodeType),t.zIndex||(t.zIndex=0),t}function hR(r,e,t){return t.color||(t.color=r.defaultEdgeColor),t.label||(t.label=""),t.size||(t.size=.5),nr.call(t,"hidden")||(t.hidden=!1),nr.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultEdgeType),t.zIndex||(t.zIndex=0),t}var fR=(function(r){function e(t,n){var o,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Rn(this,e),o=di(this,e),xe(o,"elements",{}),xe(o,"canvasContexts",{}),xe(o,"webGLContexts",{}),xe(o,"pickingLayers",new Set),xe(o,"textures",{}),xe(o,"frameBuffers",{}),xe(o,"activeListeners",{}),xe(o,"labelGrid",new _v),xe(o,"nodeDataCache",{}),xe(o,"edgeDataCache",{}),xe(o,"nodeProgramIndex",{}),xe(o,"edgeProgramIndex",{}),xe(o,"nodesWithForcedLabels",new Set),xe(o,"edgesWithForcedLabels",new Set),xe(o,"nodeExtent",{x:[0,1],y:[0,1]}),xe(o,"nodeZExtent",[1/0,-1/0]),xe(o,"edgeZExtent",[1/0,-1/0]),xe(o,"matrix",Mi()),xe(o,"invMatrix",Mi()),xe(o,"correctionRatio",1),xe(o,"customBBox",null),xe(o,"normalizationFunction",fv({x:[0,1],y:[0,1]})),xe(o,"graphToViewportRatio",1),xe(o,"itemIDsIndex",{}),xe(o,"nodeIndices",{}),xe(o,"edgeIndices",{}),xe(o,"width",0),xe(o,"height",0),xe(o,"pixelRatio",dv()),xe(o,"pickingDownSizingRatio",2*o.pixelRatio),xe(o,"displayedNodeLabels",new Set),xe(o,"displayedEdgeLabels",new Set),xe(o,"highlightedNodes",new Set),xe(o,"hoveredNode",null),xe(o,"hoveredEdge",null),xe(o,"renderFrame",null),xe(o,"renderHighlightedNodesFrame",null),xe(o,"needToProcess",!1),xe(o,"checkEdgesEventsFrame",null),xe(o,"nodePrograms",{}),xe(o,"nodeHoverPrograms",{}),xe(o,"edgePrograms",{}),o.settings=Zb(a),th(o.settings),jb(t),!(n instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");o.graph=t,o.container=n,o.createWebGLContext("edges",{picking:a.enableEdgeEvents}),o.createCanvasContext("edgeLabels"),o.createWebGLContext("nodes",{picking:!0}),o.createCanvasContext("labels"),o.createCanvasContext("hovers"),o.createWebGLContext("hoverNodes"),o.createCanvasContext("mouse",{style:{touchAction:"none",userSelect:"none"}}),o.resize();for(var u in o.settings.nodeProgramClasses)o.registerNodeProgram(u,o.settings.nodeProgramClasses[u],o.settings.nodeHoverProgramClasses[u]);for(var c in o.settings.edgeProgramClasses)o.registerEdgeProgram(c,o.settings.edgeProgramClasses[c]);return o.camera=new mv,o.bindCameraHandlers(),o.mouseCaptor=new nR(o.elements.mouse,o),o.mouseCaptor.setSettings(o.settings),o.touchCaptor=new sR(o.elements.mouse,o),o.touchCaptor.setSettings(o.settings),o.bindEventHandlers(),o.bindGraphHandlers(),o.handleSettingsUpdate(),o.refresh(),o}return hi(e,r),Cn(e,[{key:"registerNodeProgram",value:function(n,o,a){return this.nodePrograms[n]&&this.nodePrograms[n].kill(),this.nodeHoverPrograms[n]&&this.nodeHoverPrograms[n].kill(),this.nodePrograms[n]=new o(this.webGLContexts.nodes,this.frameBuffers.nodes,this),this.nodeHoverPrograms[n]=new(a||o)(this.webGLContexts.hoverNodes,null,this),this}},{key:"registerEdgeProgram",value:function(n,o){return this.edgePrograms[n]&&this.edgePrograms[n].kill(),this.edgePrograms[n]=new o(this.webGLContexts.edges,this.frameBuffers.edges,this),this}},{key:"unregisterNodeProgram",value:function(n){if(this.nodePrograms[n]){var o=this.nodePrograms,a=o[n],u=nh(o,[n].map(ga));a.kill(),this.nodePrograms=u}if(this.nodeHoverPrograms[n]){var c=this.nodeHoverPrograms,h=c[n],f=nh(c,[n].map(ga));h.kill(),this.nodePrograms=f}return this}},{key:"unregisterEdgeProgram",value:function(n){if(this.edgePrograms[n]){var o=this.edgePrograms,a=o[n],u=nh(o,[n].map(ga));a.kill(),this.edgePrograms=u}return this}},{key:"resetWebGLTexture",value:function(n){var o=this.webGLContexts[n],a=this.frameBuffers[n],u=this.textures[n];u&&o.deleteTexture(u);var c=o.createTexture();return o.bindFramebuffer(o.FRAMEBUFFER,a),o.bindTexture(o.TEXTURE_2D,c),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,this.width,this.height,0,o.RGBA,o.UNSIGNED_BYTE,null),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,c,0),this.textures[n]=c,this}},{key:"bindCameraHandlers",value:function(){var n=this;return this.activeListeners.camera=function(){n.scheduleRender()},this.camera.on("updated",this.activeListeners.camera),this}},{key:"unbindCameraHandlers",value:function(){return this.camera.removeListener("updated",this.activeListeners.camera),this}},{key:"getNodeAtPosition",value:function(n){var o=n.x,a=n.y,u=ev(this.webGLContexts.nodes,this.frameBuffers.nodes,o,a,this.pixelRatio,this.pickingDownSizingRatio),c=Jg.apply(void 0,gv(u)),h=this.itemIDsIndex[c];return h&&h.type==="node"?h.id:null}},{key:"bindEventHandlers",value:function(){var n=this;this.activeListeners.handleResize=function(){n.scheduleRefresh()},window.addEventListener("resize",this.activeListeners.handleResize),this.activeListeners.handleMove=function(a){var u=fa(a),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}},h=n.getNodeAtPosition(u);if(h&&n.hoveredNode!==h&&!n.nodeDataCache[h].hidden){n.hoveredNode&&n.emit("leaveNode",Ke(Ke({},c),{},{node:n.hoveredNode})),n.hoveredNode=h,n.emit("enterNode",Ke(Ke({},c),{},{node:h})),n.scheduleHighlightedNodesRender();return}if(n.hoveredNode&&n.getNodeAtPosition(u)!==n.hoveredNode){var f=n.hoveredNode;n.hoveredNode=null,n.emit("leaveNode",Ke(Ke({},c),{},{node:f})),n.scheduleHighlightedNodesRender();return}if(n.settings.enableEdgeEvents){var m=n.hoveredNode?null:n.getEdgeAtPoint(c.event.x,c.event.y);m!==n.hoveredEdge&&(n.hoveredEdge&&n.emit("leaveEdge",Ke(Ke({},c),{},{edge:n.hoveredEdge})),m&&n.emit("enterEdge",Ke(Ke({},c),{},{edge:m})),n.hoveredEdge=m)}},this.activeListeners.handleMoveBody=function(a){var u=fa(a);n.emit("moveBody",{event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}})},this.activeListeners.handleLeave=function(a){var u=fa(a),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.hoveredNode&&(n.emit("leaveNode",Ke(Ke({},c),{},{node:n.hoveredNode})),n.scheduleHighlightedNodesRender()),n.settings.enableEdgeEvents&&n.hoveredEdge&&(n.emit("leaveEdge",Ke(Ke({},c),{},{edge:n.hoveredEdge})),n.scheduleHighlightedNodesRender()),n.emit("leaveStage",Ke({},c))},this.activeListeners.handleEnter=function(a){var u=fa(a),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.emit("enterStage",Ke({},c))};var o=function(u){return function(c){var h=fa(c),f={event:h,preventSigmaDefault:function(){h.preventSigmaDefault()}},m=n.getNodeAtPosition(h);if(m)return n.emit("".concat(u,"Node"),Ke(Ke({},f),{},{node:m}));if(n.settings.enableEdgeEvents){var g=n.getEdgeAtPoint(h.x,h.y);if(g)return n.emit("".concat(u,"Edge"),Ke(Ke({},f),{},{edge:g}))}return n.emit("".concat(u,"Stage"),f)}};return this.activeListeners.handleClick=o("click"),this.activeListeners.handleRightClick=o("rightClick"),this.activeListeners.handleDoubleClick=o("doubleClick"),this.activeListeners.handleWheel=o("wheel"),this.activeListeners.handleDown=o("down"),this.activeListeners.handleUp=o("up"),this.mouseCaptor.on("mousemove",this.activeListeners.handleMove),this.mouseCaptor.on("mousemovebody",this.activeListeners.handleMoveBody),this.mouseCaptor.on("click",this.activeListeners.handleClick),this.mouseCaptor.on("rightClick",this.activeListeners.handleRightClick),this.mouseCaptor.on("doubleClick",this.activeListeners.handleDoubleClick),this.mouseCaptor.on("wheel",this.activeListeners.handleWheel),this.mouseCaptor.on("mousedown",this.activeListeners.handleDown),this.mouseCaptor.on("mouseup",this.activeListeners.handleUp),this.mouseCaptor.on("mouseleave",this.activeListeners.handleLeave),this.mouseCaptor.on("mouseenter",this.activeListeners.handleEnter),this.touchCaptor.on("touchdown",this.activeListeners.handleDown),this.touchCaptor.on("touchdown",this.activeListeners.handleMove),this.touchCaptor.on("touchup",this.activeListeners.handleUp),this.touchCaptor.on("touchmove",this.activeListeners.handleMove),this.touchCaptor.on("tap",this.activeListeners.handleClick),this.touchCaptor.on("doubletap",this.activeListeners.handleDoubleClick),this.touchCaptor.on("touchmove",this.activeListeners.handleMoveBody),this}},{key:"bindGraphHandlers",value:function(){var n=this,o=this.graph,a=new Set(["x","y","zIndex","type"]);return this.activeListeners.eachNodeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachNode(function(m){return n.updateNode(m)});var f=!h||h.some(function(m){return a.has(m)});n.refresh({partialGraph:{nodes:o.nodes()},skipIndexation:!f,schedule:!0})},this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachEdge(function(m){return n.updateEdge(m)});var f=h&&["zIndex","type"].some(function(m){return h==null?void 0:h.includes(m)});n.refresh({partialGraph:{edges:o.edges()},skipIndexation:!f,schedule:!0})},this.activeListeners.addNodeGraphUpdate=function(u){var c=u.key;n.addNode(c),n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.updateNodeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropNodeGraphUpdate=function(u){var c=u.key;n.removeNode(c),n.refresh({schedule:!0})},this.activeListeners.addEdgeGraphUpdate=function(u){var c=u.key;n.addEdge(c),n.refresh({partialGraph:{edges:[c]},schedule:!0})},this.activeListeners.updateEdgeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{edges:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropEdgeGraphUpdate=function(u){var c=u.key;n.removeEdge(c),n.refresh({schedule:!0})},this.activeListeners.clearEdgesGraphUpdate=function(){n.clearEdgeState(),n.clearEdgeIndices(),n.refresh({schedule:!0})},this.activeListeners.clearGraphUpdate=function(){n.clearEdgeState(),n.clearNodeState(),n.clearEdgeIndices(),n.clearNodeIndices(),n.refresh({schedule:!0})},o.on("nodeAdded",this.activeListeners.addNodeGraphUpdate),o.on("nodeDropped",this.activeListeners.dropNodeGraphUpdate),o.on("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),o.on("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),o.on("edgeAdded",this.activeListeners.addEdgeGraphUpdate),o.on("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),o.on("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),o.on("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),o.on("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),o.on("cleared",this.activeListeners.clearGraphUpdate),this}},{key:"unbindGraphHandlers",value:function(){var n=this.graph;n.removeListener("nodeAdded",this.activeListeners.addNodeGraphUpdate),n.removeListener("nodeDropped",this.activeListeners.dropNodeGraphUpdate),n.removeListener("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),n.removeListener("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),n.removeListener("edgeAdded",this.activeListeners.addEdgeGraphUpdate),n.removeListener("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),n.removeListener("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),n.removeListener("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),n.removeListener("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),n.removeListener("cleared",this.activeListeners.clearGraphUpdate)}},{key:"getEdgeAtPoint",value:function(n,o){var a=ev(this.webGLContexts.edges,this.frameBuffers.edges,n,o,this.pixelRatio,this.pickingDownSizingRatio),u=Jg.apply(void 0,gv(a)),c=this.itemIDsIndex[u];return c&&c.type==="edge"?c.id:null}},{key:"process",value:function(){var n=this;this.emit("beforeProcess");var o=this.graph,a=this.settings,u=this.getDimensions();if(this.nodeExtent=$b(this.graph),!this.settings.autoRescale){var c=u.width,h=u.height,f=this.nodeExtent,m=f.x,g=f.y;this.nodeExtent={x:[(m[0]+m[1])/2-c/2,(m[0]+m[1])/2+c/2],y:[(g[0]+g[1])/2-h/2,(g[0]+g[1])/2+h/2]}}this.normalizationFunction=fv(this.customBBox||this.nodeExtent);var v=new mv,x=ha(v.getState(),u,this.getGraphDimensions(),this.getStagePadding());this.labelGrid.resizeAndClear(u,a.labelGridCellSize);for(var E={},M={},S={},y={},I=1,L=o.nodes(),w=0,U=L.length;w<U;w++){var C=L[w],N=this.nodeDataCache[C],O=o.getNodeAttributes(C);N.x=O.x,N.y=O.y,this.normalizationFunction.applyTo(N),typeof N.label=="string"&&!N.hidden&&this.labelGrid.add(C,N.size,this.framedGraphToViewport(N,{matrix:x})),E[N.type]=(E[N.type]||0)+1}this.labelGrid.organize();for(var P in this.nodePrograms){if(!nr.call(this.nodePrograms,P))throw new Error('Sigma: could not find a suitable program for node type "'.concat(P,'"!'));this.nodePrograms[P].reallocate(E[P]||0),E[P]=0}this.settings.zIndex&&this.nodeZExtent[0]!==this.nodeZExtent[1]&&(L=hv(this.nodeZExtent,function(se){return n.nodeDataCache[se].zIndex},L));for(var T=0,z=L.length;T<z;T++){var j=L[T];M[j]=I,y[M[j]]={type:"node",id:j},I++;var K=this.nodeDataCache[j];this.addNodeToProgram(j,M[j],E[K.type]++)}for(var oe={},de=o.edges(),ae=0,ce=de.length;ae<ce;ae++){var H=de[ae],ue=this.edgeDataCache[H];oe[ue.type]=(oe[ue.type]||0)+1}this.settings.zIndex&&this.edgeZExtent[0]!==this.edgeZExtent[1]&&(de=hv(this.edgeZExtent,function(se){return n.edgeDataCache[se].zIndex},de));for(var re in this.edgePrograms){if(!nr.call(this.edgePrograms,re))throw new Error('Sigma: could not find a suitable program for edge type "'.concat(re,'"!'));this.edgePrograms[re].reallocate(oe[re]||0),oe[re]=0}for(var R=0,X=de.length;R<X;R++){var me=de[R];S[me]=I,y[S[me]]={type:"edge",id:me},I++;var W=this.edgeDataCache[me];this.addEdgeToProgram(me,S[me],oe[W.type]++)}return this.itemIDsIndex=y,this.nodeIndices=M,this.edgeIndices=S,this.emit("afterProcess"),this}},{key:"handleSettingsUpdate",value:function(n){var o=this,a=this.settings;if(this.camera.minRatio=a.minCameraRatio,this.camera.maxRatio=a.maxCameraRatio,this.camera.enabledZooming=a.enableCameraZooming,this.camera.enabledPanning=a.enableCameraPanning,this.camera.enabledRotation=a.enableCameraRotation,a.cameraPanBoundaries?this.camera.clean=function(m){return o.cleanCameraState(m,a.cameraPanBoundaries&&Kh(a.cameraPanBoundaries)==="object"?a.cameraPanBoundaries:{})}:this.camera.clean=null,this.camera.setState(this.camera.validateState(this.camera.getState())),n){if(n.edgeProgramClasses!==a.edgeProgramClasses){for(var u in a.edgeProgramClasses)a.edgeProgramClasses[u]!==n.edgeProgramClasses[u]&&this.registerEdgeProgram(u,a.edgeProgramClasses[u]);for(var c in n.edgeProgramClasses)a.edgeProgramClasses[c]||this.unregisterEdgeProgram(c)}if(n.nodeProgramClasses!==a.nodeProgramClasses||n.nodeHoverProgramClasses!==a.nodeHoverProgramClasses){for(var h in a.nodeProgramClasses)(a.nodeProgramClasses[h]!==n.nodeProgramClasses[h]||a.nodeHoverProgramClasses[h]!==n.nodeHoverProgramClasses[h])&&this.registerNodeProgram(h,a.nodeProgramClasses[h],a.nodeHoverProgramClasses[h]);for(var f in n.nodeProgramClasses)a.nodeProgramClasses[f]||this.unregisterNodeProgram(f)}}return this.mouseCaptor.setSettings(this.settings),this.touchCaptor.setSettings(this.settings),this}},{key:"cleanCameraState",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.tolerance,u=a===void 0?0:a,c=o.boundaries,h=Ke({},n),f=c||this.nodeExtent,m=_o(f.x,2),g=m[0],v=m[1],x=_o(f.y,2),E=x[0],M=x[1],S=[this.graphToViewport({x:g,y:E},{cameraState:n}),this.graphToViewport({x:v,y:E},{cameraState:n}),this.graphToViewport({x:g,y:M},{cameraState:n}),this.graphToViewport({x:v,y:M},{cameraState:n})],y=1/0,I=-1/0,L=1/0,w=-1/0;S.forEach(function(oe){var de=oe.x,ae=oe.y;y=Math.min(y,de),I=Math.max(I,de),L=Math.min(L,ae),w=Math.max(w,ae)});var U=I-y,C=w-L,N=this.getDimensions(),O=N.width,P=N.height,T=0,z=0;if(U>=O?I<O-u?T=I-(O-u):y>u&&(T=y-u):I>O+u?T=I-(O+u):y<-u&&(T=y+u),C>=P?w<P-u?z=w-(P-u):L>u&&(z=L-u):w>P+u?z=w-(P+u):L<-u&&(z=L+u),T||z){var j=this.viewportToFramedGraph({x:0,y:0},{cameraState:n}),K=this.viewportToFramedGraph({x:T,y:z},{cameraState:n});T=K.x-j.x,z=K.y-j.y,h.x+=T,h.y+=z}return h}},{key:"renderLabels",value:function(){if(!this.settings.renderLabels)return this;var n=this.camera.getState(),o=this.labelGrid.getLabelsToDisplay(n.ratio,this.settings.labelDensity);pv(o,this.nodesWithForcedLabels),this.displayedNodeLabels=new Set;for(var a=this.canvasContexts.labels,u=0,c=o.length;u<c;u++){var h=o[u],f=this.nodeDataCache[h];if(!this.displayedNodeLabels.has(h)&&!f.hidden){var m=this.framedGraphToViewport(f),g=m.x,v=m.y,x=this.scaleSize(f.size);if(!(!f.forceLabel&&x<this.settings.labelRenderedSizeThreshold)&&!(g<-yv||g>this.width+yv||v<-xv||v>this.height+xv)){this.displayedNodeLabels.add(h);var E=this.settings.defaultDrawNodeLabel,M=this.nodePrograms[f.type],S=(M==null?void 0:M.drawLabel)||E;S(a,Ke(Ke({key:h},f),{},{size:x,x:g,y:v}),this.settings)}}}return this}},{key:"renderEdgeLabels",value:function(){if(!this.settings.renderEdgeLabels)return this;var n=this.canvasContexts.edgeLabels;n.clearRect(0,0,this.width,this.height);var o=cR({graph:this.graph,hoveredNode:this.hoveredNode,displayedNodeLabels:this.displayedNodeLabels,highlightedNodes:this.highlightedNodes});pv(o,this.edgesWithForcedLabels);for(var a=new Set,u=0,c=o.length;u<c;u++){var h=o[u],f=this.graph.extremities(h),m=this.nodeDataCache[f[0]],g=this.nodeDataCache[f[1]],v=this.edgeDataCache[h];if(!a.has(h)&&!(v.hidden||m.hidden||g.hidden)){var x=this.settings.defaultDrawEdgeLabel,E=this.edgePrograms[v.type],M=(E==null?void 0:E.drawLabel)||x;M(n,Ke(Ke({key:h},v),{},{size:this.scaleSize(v.size)}),Ke(Ke(Ke({key:f[0]},m),this.framedGraphToViewport(m)),{},{size:this.scaleSize(m.size)}),Ke(Ke(Ke({key:f[1]},g),this.framedGraphToViewport(g)),{},{size:this.scaleSize(g.size)}),this.settings),a.add(h)}}return this.displayedEdgeLabels=a,this}},{key:"renderHighlightedNodes",value:function(){var n=this,o=this.canvasContexts.hovers;o.clearRect(0,0,this.width,this.height);var a=function(x){var E=n.nodeDataCache[x],M=n.framedGraphToViewport(E),S=M.x,y=M.y,I=n.scaleSize(E.size),L=n.settings.defaultDrawNodeHover,w=n.nodePrograms[E.type],U=(w==null?void 0:w.drawHover)||L;U(o,Ke(Ke({key:x},E),{},{size:I,x:S,y}),n.settings)},u=[];this.hoveredNode&&!this.nodeDataCache[this.hoveredNode].hidden&&u.push(this.hoveredNode),this.highlightedNodes.forEach(function(v){v!==n.hoveredNode&&u.push(v)}),u.forEach(function(v){return a(v)});var c={};u.forEach(function(v){var x=n.nodeDataCache[v].type;c[x]=(c[x]||0)+1});for(var h in this.nodeHoverPrograms)this.nodeHoverPrograms[h].reallocate(c[h]||0),c[h]=0;u.forEach(function(v){var x=n.nodeDataCache[v];n.nodeHoverPrograms[x.type].process(0,c[x.type]++,x)}),this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);var f=this.getRenderParams();for(var m in this.nodeHoverPrograms){var g=this.nodeHoverPrograms[m];g.render(f)}}},{key:"scheduleHighlightedNodesRender",value:function(){var n=this;this.renderHighlightedNodesFrame||this.renderFrame||(this.renderHighlightedNodesFrame=requestAnimationFrame(function(){n.renderHighlightedNodesFrame=null,n.renderHighlightedNodes(),n.renderEdgeLabels()}))}},{key:"render",value:function(){var n=this;this.emit("beforeRender");var o=function(){return n.emit("afterRender"),n};if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),this.needToProcess&&this.process(),this.needToProcess=!1,this.clear(),this.pickingLayers.forEach(function(S){return n.resetWebGLTexture(S)}),!this.graph.order)return o();var a=this.mouseCaptor,u=this.camera.isAnimated()||a.isMoving||a.draggedEvents||a.currentWheelDirection,c=this.camera.getState(),h=this.getDimensions(),f=this.getGraphDimensions(),m=this.getStagePadding();this.matrix=ha(c,h,f,m),this.invMatrix=ha(c,h,f,m,!0),this.correctionRatio=Xb(this.matrix,c,h),this.graphToViewportRatio=this.getGraphToViewportRatio();var g=this.getRenderParams();for(var v in this.nodePrograms){var x=this.nodePrograms[v];x.render(g)}if(!this.settings.hideEdgesOnMove||!u)for(var E in this.edgePrograms){var M=this.edgePrograms[E];M.render(g)}return this.settings.hideLabelsOnMove&&u||(this.renderLabels(),this.renderEdgeLabels(),this.renderHighlightedNodes()),o()}},{key:"addNode",value:function(n){var o=Object.assign({},this.graph.getNodeAttributes(n));this.settings.nodeReducer&&(o=this.settings.nodeReducer(n,o));var a=dR(this.settings,n,o);this.nodeDataCache[n]=a,this.nodesWithForcedLabels.delete(n),a.forceLabel&&!a.hidden&&this.nodesWithForcedLabels.add(n),this.highlightedNodes.delete(n),a.highlighted&&!a.hidden&&this.highlightedNodes.add(n),this.settings.zIndex&&(a.zIndex<this.nodeZExtent[0]&&(this.nodeZExtent[0]=a.zIndex),a.zIndex>this.nodeZExtent[1]&&(this.nodeZExtent[1]=a.zIndex))}},{key:"updateNode",value:function(n){this.addNode(n);var o=this.nodeDataCache[n];this.normalizationFunction.applyTo(o)}},{key:"removeNode",value:function(n){delete this.nodeDataCache[n],delete this.nodeProgramIndex[n],this.highlightedNodes.delete(n),this.hoveredNode===n&&(this.hoveredNode=null),this.nodesWithForcedLabels.delete(n)}},{key:"addEdge",value:function(n){var o=Object.assign({},this.graph.getEdgeAttributes(n));this.settings.edgeReducer&&(o=this.settings.edgeReducer(n,o));var a=hR(this.settings,n,o);this.edgeDataCache[n]=a,this.edgesWithForcedLabels.delete(n),a.forceLabel&&!a.hidden&&this.edgesWithForcedLabels.add(n),this.settings.zIndex&&(a.zIndex<this.edgeZExtent[0]&&(this.edgeZExtent[0]=a.zIndex),a.zIndex>this.edgeZExtent[1]&&(this.edgeZExtent[1]=a.zIndex))}},{key:"updateEdge",value:function(n){this.addEdge(n)}},{key:"removeEdge",value:function(n){delete this.edgeDataCache[n],delete this.edgeProgramIndex[n],this.hoveredEdge===n&&(this.hoveredEdge=null),this.edgesWithForcedLabels.delete(n)}},{key:"clearNodeIndices",value:function(){this.labelGrid=new _v,this.nodeExtent={x:[0,1],y:[0,1]},this.nodeDataCache={},this.edgeProgramIndex={},this.nodesWithForcedLabels=new Set,this.nodeZExtent=[1/0,-1/0],this.highlightedNodes=new Set}},{key:"clearEdgeIndices",value:function(){this.edgeDataCache={},this.edgeProgramIndex={},this.edgesWithForcedLabels=new Set,this.edgeZExtent=[1/0,-1/0]}},{key:"clearIndices",value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:"clearNodeState",value:function(){this.displayedNodeLabels=new Set,this.highlightedNodes=new Set,this.hoveredNode=null}},{key:"clearEdgeState",value:function(){this.displayedEdgeLabels=new Set,this.highlightedNodes=new Set,this.hoveredEdge=null}},{key:"clearState",value:function(){this.clearEdgeState(),this.clearNodeState()}},{key:"addNodeToProgram",value:function(n,o,a){var u=this.nodeDataCache[n],c=this.nodePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for node type "'.concat(u.type,'"!'));c.process(o,a,u),this.nodeProgramIndex[n]=a}},{key:"addEdgeToProgram",value:function(n,o,a){var u=this.edgeDataCache[n],c=this.edgePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for edge type "'.concat(u.type,'"!'));var h=this.graph.extremities(n),f=this.nodeDataCache[h[0]],m=this.nodeDataCache[h[1]];c.process(o,a,f,m,u),this.edgeProgramIndex[n]=a}},{key:"getRenderParams",value:function(){return{matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.pickingDownSizingRatio,minEdgeThickness:this.settings.minEdgeThickness,antiAliasingFeather:this.settings.antiAliasingFeather}}},{key:"getStagePadding",value:function(){var n=this.settings,o=n.stagePadding,a=n.autoRescale;return a&&o||0}},{key:"createLayer",value:function(n,o){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.elements[n])throw new Error('Sigma: a layer named "'.concat(n,'" already exists'));var u=Yb(o,{position:"absolute"},{class:"sigma-".concat(n)});return a.style&&Object.assign(u.style,a.style),this.elements[n]=u,"beforeLayer"in a&&a.beforeLayer?this.elements[a.beforeLayer].before(u):"afterLayer"in a&&a.afterLayer?this.elements[a.afterLayer].after(u):this.container.appendChild(u),u}},{key:"createCanvas",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(n,"canvas",o)}},{key:"createCanvasContext",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.createCanvas(n,o),u={preserveDrawingBuffer:!1,antialias:!1};return this.canvasContexts[n]=a.getContext("2d",u),this}},{key:"createWebGLContext",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(o==null?void 0:o.canvas)||this.createCanvas(n,o);o.hidden&&a.remove();var u=Ke({preserveDrawingBuffer:!1,antialias:!1},o),c;c=a.getContext("webgl2",u),c||(c=a.getContext("webgl",u)),c||(c=a.getContext("experimental-webgl",u));var h=c;if(this.webGLContexts[n]=h,h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA),o.picking){this.pickingLayers.add(n);var f=h.createFramebuffer();if(!f)throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(n));this.frameBuffers[n]=f}return h}},{key:"killLayer",value:function(n){var o=this.elements[n];if(!o)throw new Error("Sigma: cannot kill layer ".concat(n,", which does not exist"));if(this.webGLContexts[n]){var a,u=this.webGLContexts[n];(a=u.getExtension("WEBGL_lose_context"))===null||a===void 0||a.loseContext(),delete this.webGLContexts[n]}else this.canvasContexts[n]&&delete this.canvasContexts[n];return o.remove(),delete this.elements[n],this}},{key:"getCamera",value:function(){return this.camera}},{key:"setCamera",value:function(n){this.unbindCameraHandlers(),this.camera=n,this.bindCameraHandlers()}},{key:"getContainer",value:function(){return this.container}},{key:"getGraph",value:function(){return this.graph}},{key:"setGraph",value:function(n){n!==this.graph&&(this.hoveredNode&&!n.hasNode(this.hoveredNode)&&(this.hoveredNode=null),this.hoveredEdge&&!n.hasEdge(this.hoveredEdge)&&(this.hoveredEdge=null),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.graph=n,this.bindGraphHandlers(),this.refresh())}},{key:"getMouseCaptor",value:function(){return this.mouseCaptor}},{key:"getTouchCaptor",value:function(){return this.touchCaptor}},{key:"getDimensions",value:function(){return{width:this.width,height:this.height}}},{key:"getGraphDimensions",value:function(){var n=this.customBBox||this.nodeExtent;return{width:n.x[1]-n.x[0]||1,height:n.y[1]-n.y[0]||1}}},{key:"getNodeDisplayData",value:function(n){var o=this.nodeDataCache[n];return o?Object.assign({},o):void 0}},{key:"getEdgeDisplayData",value:function(n){var o=this.edgeDataCache[n];return o?Object.assign({},o):void 0}},{key:"getNodeDisplayedLabels",value:function(){return new Set(this.displayedNodeLabels)}},{key:"getEdgeDisplayedLabels",value:function(){return new Set(this.displayedEdgeLabels)}},{key:"getSettings",value:function(){return Ke({},this.settings)}},{key:"getSetting",value:function(n){return this.settings[n]}},{key:"setSetting",value:function(n,o){var a=Ke({},this.settings);return this.settings[n]=o,th(this.settings),this.handleSettingsUpdate(a),this.scheduleRefresh(),this}},{key:"updateSetting",value:function(n,o){return this.setSetting(n,o(this.settings[n])),this}},{key:"setSettings",value:function(n){var o=Ke({},this.settings);return this.settings=Ke(Ke({},this.settings),n),th(this.settings),this.handleSettingsUpdate(o),this.scheduleRefresh(),this}},{key:"resize",value:function(n){var o=this.width,a=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.pixelRatio=dv(),this.width===0)if(this.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!n&&o===this.width&&a===this.height)return this;for(var u in this.elements){var c=this.elements[u];c.style.width=this.width+"px",c.style.height=this.height+"px"}for(var h in this.canvasContexts)this.elements[h].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[h].setAttribute("height",this.height*this.pixelRatio+"px"),this.pixelRatio!==1&&this.canvasContexts[h].scale(this.pixelRatio,this.pixelRatio);for(var f in this.webGLContexts){this.elements[f].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[f].setAttribute("height",this.height*this.pixelRatio+"px");var m=this.webGLContexts[f];if(m.viewport(0,0,this.width*this.pixelRatio,this.height*this.pixelRatio),this.pickingLayers.has(f)){var g=this.textures[f];g&&m.deleteTexture(g)}}return this.emit("resize"),this}},{key:"clear",value:function(){return this.emit("beforeClear"),this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.canvasContexts.labels.clearRect(0,0,this.width,this.height),this.canvasContexts.hovers.clearRect(0,0,this.width,this.height),this.canvasContexts.edgeLabels.clearRect(0,0,this.width,this.height),this.emit("afterClear"),this}},{key:"refresh",value:function(n){var o=this,a=(n==null?void 0:n.skipIndexation)!==void 0?n==null?void 0:n.skipIndexation:!1,u=(n==null?void 0:n.schedule)!==void 0?n.schedule:!1,c=!n||!n.partialGraph;if(c)this.clearEdgeIndices(),this.clearNodeIndices(),this.graph.forEachNode(function(w){return o.addNode(w)}),this.graph.forEachEdge(function(w){return o.addEdge(w)});else{for(var h,f,m=((h=n.partialGraph)===null||h===void 0?void 0:h.nodes)||[],g=0,v=(m==null?void 0:m.length)||0;g<v;g++){var x=m[g];if(this.updateNode(x),a){var E=this.nodeProgramIndex[x];if(E===void 0)throw new Error('Sigma: node "'.concat(x,`" can't be repaint`));this.addNodeToProgram(x,this.nodeIndices[x],E)}}for(var M=(n==null||(f=n.partialGraph)===null||f===void 0?void 0:f.edges)||[],S=0,y=M.length;S<y;S++){var I=M[S];if(this.updateEdge(I),a){var L=this.edgeProgramIndex[I];if(L===void 0)throw new Error('Sigma: edge "'.concat(I,`" can't be repaint`));this.addEdgeToProgram(I,this.edgeIndices[I],L)}}}return(c||!a)&&(this.needToProcess=!0),u?this.scheduleRender():this.render(),this}},{key:"scheduleRender",value:function(){var n=this;return this.renderFrame||(this.renderFrame=requestAnimationFrame(function(){n.render()})),this}},{key:"scheduleRefresh",value:function(n){return this.refresh(Ke(Ke({},n),{},{schedule:!0}))}},{key:"getViewportZoomedState",value:function(n,o){var a=this.camera.getState(),u=a.ratio,c=a.angle,h=a.x,f=a.y,m=this.settings,g=m.minCameraRatio,v=m.maxCameraRatio;typeof v=="number"&&(o=Math.min(o,v)),typeof g=="number"&&(o=Math.max(o,g));var x=o/u,E={x:this.width/2,y:this.height/2},M=this.viewportToFramedGraph(n),S=this.viewportToFramedGraph(E);return{angle:c,x:(M.x-S.x)*(1-x)+h,y:(M.y-S.y)*(1-x)+f,ratio:o}}},{key:"viewRectangle",value:function(){var n=this.viewportToFramedGraph({x:0,y:0}),o=this.viewportToFramedGraph({x:this.width,y:0}),a=this.viewportToFramedGraph({x:0,y:this.height});return{x1:n.x,y1:n.y,x2:o.x,y2:o.y,height:o.y-a.y}}},{key:"framedGraphToViewport",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=!!o.cameraState||!!o.viewportDimensions||!!o.graphDimensions,u=o.matrix?o.matrix:a?ha(o.cameraState||this.camera.getState(),o.viewportDimensions||this.getDimensions(),o.graphDimensions||this.getGraphDimensions(),o.padding||this.getStagePadding()):this.matrix,c=qh(u,n);return{x:(1+c.x)*this.width/2,y:(1-c.y)*this.height/2}}},{key:"viewportToFramedGraph",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=!!o.cameraState||!!o.viewportDimensions||!o.graphDimensions,u=o.matrix?o.matrix:a?ha(o.cameraState||this.camera.getState(),o.viewportDimensions||this.getDimensions(),o.graphDimensions||this.getGraphDimensions(),o.padding||this.getStagePadding(),!0):this.invMatrix,c=qh(u,{x:n.x/this.width*2-1,y:1-n.y/this.height*2});return isNaN(c.x)&&(c.x=0),isNaN(c.y)&&(c.y=0),c}},{key:"viewportToGraph",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(n,o))}},{key:"graphToViewport",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(n),o)}},{key:"getGraphToViewportRatio",value:function(){var n={x:0,y:0},o={x:1,y:1},a=Math.sqrt(Math.pow(n.x-o.x,2)+Math.pow(n.y-o.y,2)),u=this.graphToViewport(n),c=this.graphToViewport(o),h=Math.sqrt(Math.pow(u.x-c.x,2)+Math.pow(u.y-c.y,2));return h/a}},{key:"getBBox",value:function(){return this.nodeExtent}},{key:"getCustomBBox",value:function(){return this.customBBox}},{key:"setCustomBBox",value:function(n){return this.customBBox=n,this.scheduleRender(),this}},{key:"kill",value:function(){this.emit("kill"),this.removeAllListeners(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.nodeDataCache={},this.edgeDataCache={},this.highlightedNodes.clear(),this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.renderHighlightedNodesFrame&&(cancelAnimationFrame(this.renderHighlightedNodesFrame),this.renderHighlightedNodesFrame=null);for(var n=this.container;n.firstChild;)n.removeChild(n.firstChild);for(var o in this.nodePrograms)this.nodePrograms[o].kill();for(var a in this.nodeHoverPrograms)this.nodeHoverPrograms[a].kill();for(var u in this.edgePrograms)this.edgePrograms[u].kill();this.nodePrograms={},this.nodeHoverPrograms={},this.edgePrograms={};for(var c in this.elements)this.killLayer(c);this.canvasContexts={},this.webGLContexts={},this.elements={}}},{key:"scaleSize",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return n/this.settings.zoomToSizeRatioFunction(o)*(this.getSetting("itemSizesReference")==="positions"?o*this.graphToViewportRatio:1)}},{key:"getCanvases",value:function(){var n={};for(var o in this.elements)this.elements[o]instanceof HTMLCanvasElement&&(n[o]=this.elements[o]);return n}}])})(mf),pR=fR;const Sv=["#e8aa55","#c96f32","#a4d06f","#5da271","#4a7ea8","#b7678f","#d7c35f"];function mR(r){let e=0;for(const t of r)e=e*33+t.charCodeAt(0)>>>0;return Sv[e%Sv.length]}function gR({payload:r,mode:e,currentTurnNodeIds:t,selectedNodeId:n,selectedAssembly:o,onSelectNode:a}){const u=Nt.useRef(null),c=Nt.useRef(null),h=Nt.useMemo(()=>{var m;const f=new Map;for(const g of r.cluster_summaries??[]){const v=(m=g.top_meme_ids)==null?void 0:m[0];v&&f.set(v,g.display_label)}return f},[r.cluster_summaries]);return Nt.useEffect(()=>{var y,I;if(!u.current)return;const f=new Ft,m=new Set(t),g=new Set((o==null?void 0:o.member_meme_ids)??[]),v=new Set((o==null?void 0:o.supporting_edge_ids)??[]),x=e==="Semantic Map"||e==="Assemblies"||e==="Active Set"||e==="Compare",E=x?r.semantic_nodes:r.runtime_nodes,M=x?r.semantic_edges:r.runtime_edges;for(const L of E){const w=((y=L.render_coords)==null?void 0:y.force)??((I=L.derived_coords)==null?void 0:I.spectral)??{x:0,y:0},U=m.has(L.id)||n===L.id||g.has(L.id),C=h.has(L.id),N=Number(L.degree??0)>=3;let O="";e==="Semantic Map"&&C&&(O=h.get(L.id)??""),!O&&(U||N)&&(O=String(L.label??L.id)),f.addNode(L.id,{x:Number(w.x??0),y:Number(w.y??0),size:U?10:6,label:O,color:g.has(L.id)?"#fff0a8":m.has(L.id)?"#ffcb73":mR(String(L.cluster_signature??L.kind??L.id))})}for(const L of M)!f.hasNode(L.source)||!f.hasNode(L.target)||f.addEdge(L.source,L.target,{size:v.has(L.id)?2.5:1.1,color:v.has(L.id)?"#fff0a8":"rgba(233, 177, 90, 0.38)",label:o&&v.has(L.id)?String(L.type??""):""});const S=new pR(f,u.current,{renderEdgeLabels:!!o,labelRenderedSizeThreshold:7,labelDensity:.08,allowInvalidContainer:!0});return c.current=S,S.on("clickNode",({node:L,event:w})=>{var C;const U=!!((C=w.original)!=null&&C.shiftKey);a(String(L),U)}),S.on("clickStage",()=>a("",!1)),S.getCamera().animatedReset({duration:250}),()=>{S.kill(),c.current=null}},[r,e,t,n,o,a,h]),we.jsx("div",{className:"graph-panel",ref:u})}const Ev=["overview","graph","basin","geometry","measurements"],Mv="Semantic Map",wv="hulls",vR="flat",_R={graph:null,basin:null,overview:null,measurements:null,geometry:null,transcript:null,runtimeStatus:null,runtimeModel:null,liveEnabled:!1,staleBuildWarning:null};function yR(r){return r==="overview"?"Overview":r==="graph"?"Graph":r==="basin"?"Basin":r==="geometry"?"Geometry":"Measurements"}async function An(r){const e=await fetch(r,{credentials:"same-origin"});if(!e.ok)throw new Error(`${e.status} ${e.statusText} for ${r}`);return await e.json()}function xR(r,e,t){var o,a,u;if(!t||!((o=e==null?void 0:e.turns)!=null&&o.length))return((u=(a=r==null?void 0:r.active_set_slices)==null?void 0:a.at(-1))==null?void 0:u.node_ids)??[];const n=e.turns.find(c=>c.turn_id===t);return(n==null?void 0:n.active_set_node_ids)??[]}function SR({bootstrap:r,graph:e,surface:t}){const n=r.experiment_id??"unknown",o=r.export_manifest_id??(e==null?void 0:e.export_manifest_id)??r.source_graph_hash??(e==null?void 0:e.source_graph_hash)??"live";return`eden.observatory.view_presets.v1::${n}::${t}::${o}`}function oo(r){return`badge badge-${r}`}function Qn({items:r}){return we.jsx("dl",{className:"metric-list",children:r.map(([e,t])=>we.jsxs("div",{className:"metric-row",children:[we.jsx("dt",{children:e}),we.jsx("dd",{children:ER(t)})]},e))})}function ER(r){return r==null||r===""?"—":Array.isArray(r)?r.join(", "):typeof r=="object"?JSON.stringify(r):String(r)}function In({title:r,children:e}){return we.jsxs("section",{className:"inspector-card",children:[we.jsx("h3",{children:r}),e]})}function MR({bootstrap:r}){const e=Ev.includes(r.initial_surface??"overview")?r.initial_surface:"overview",[t,n]=Nt.useState(e),[o,a]=Nt.useState(Mv),[u,c]=Nt.useState(wv),[h,f]=Nt.useState(vR),[m,g]=Nt.useState("cards"),[v,x]=Nt.useState([]),[E,M]=Nt.useState(null),[S,y]=Nt.useState(null),[I,L]=Nt.useState(!0),[w,U]=Nt.useState(null),[C,N]=Nt.useState(_R),O=Nt.useMemo(()=>SR({bootstrap:r,graph:C.graph,surface:t}),[r,C.graph,t]),P=v[0]??null,T=Nt.useMemo(()=>{var R,X;return((X=(R=C.graph)==null?void 0:R.assemblies)==null?void 0:X.find(me=>me.id===E))??null},[C.graph,E]),z=Nt.useMemo(()=>{var X,me,W;return[...((X=C.graph)==null?void 0:X.semantic_nodes)??[],...((me=C.graph)==null?void 0:me.runtime_nodes)??[],...((W=C.graph)==null?void 0:W.assemblies)??[]].find(se=>se.id===P)??null},[C.graph,P]),j=Nt.useMemo(()=>{var X,me,W,se;const R=(me=(X=C.basin)==null?void 0:X.turns)==null?void 0:me.find(ve=>ve.turn_id===S);return R||(((se=(W=C.transcript)==null?void 0:W.turns)==null?void 0:se[0])??null)},[C.basin,C.transcript,S]),K=Nt.useMemo(()=>xR(C.graph,C.transcript,(j==null?void 0:j.turn_id)??null),[C.graph,C.transcript,j]);Nt.useEffect(()=>{try{const R=window.localStorage.getItem(O);if(!R)return;const X=JSON.parse(R);X.graphMode&&a(X.graphMode),X.assemblyRenderMode&&c(X.assemblyRenderMode),X.liftMode&&f(X.liftMode)}catch{}},[O]),Nt.useEffect(()=>{const R=JSON.stringify({graphMode:o,assemblyRenderMode:u,liftMode:h});window.localStorage.setItem(O,R)},[u,o,h,O]),Nt.useEffect(()=>{let R=!1;async function X(){var me,W,se,ve,ge,be,je,Oe,Pt,Lt,ut,B,Qt,pt,ht,qe;L(!0),U(null);try{const xt=(me=r.live_api)==null?void 0:me.status;let Be=!1,F=null;if(xt)try{const fe=await An(xt);Be=!0,(se=(W=fe.status)==null?void 0:W.frontend_build)!=null&&se.warning&&(F=fe.status.frontend_build.reason??"stale frontend build")}catch{Be=!1}const b=Be?{graph:(ve=r.live_api)==null?void 0:ve.graph,basin:(ge=r.live_api)==null?void 0:ge.basin,overview:(be=r.live_api)==null?void 0:be.overview,measurements:(je=r.live_api)==null?void 0:je.measurements,geometry:(Oe=r.live_api)==null?void 0:Oe.geometry,transcript:(Pt=r.live_api)==null?void 0:Pt.session_turns,runtimeStatus:(Lt=r.live_api)==null?void 0:Lt.runtime_status,runtimeModel:(ut=r.live_api)==null?void 0:ut.runtime_model}:{graph:(B=r.payload_urls)==null?void 0:B.graph,basin:(Qt=r.payload_urls)==null?void 0:Qt.basin,overview:(pt=r.payload_urls)==null?void 0:pt.overview,measurements:(ht=r.payload_urls)==null?void 0:ht.measurements,geometry:(qe=r.payload_urls)==null?void 0:qe.geometry,transcript:void 0,runtimeStatus:void 0,runtimeModel:void 0},J={graph:b.graph?await An(b.graph):null,basin:b.basin?await An(b.basin):null,overview:b.overview?await An(b.overview):null,measurements:b.measurements?await An(b.measurements):null,geometry:b.geometry?await An(b.geometry):null,transcript:b.transcript?await An(b.transcript):null,runtimeStatus:b.runtimeStatus?await An(b.runtimeStatus):null,runtimeModel:b.runtimeModel?await An(b.runtimeModel):null,liveEnabled:Be,staleBuildWarning:F};R||Nt.startTransition(()=>{var fe,_e,he,We;N(J),!S&&((_e=(fe=J.basin)==null?void 0:fe.turns)!=null&&_e.length)&&y(J.basin.turns[0].turn_id),!E&&((We=(he=J.graph)==null?void 0:he.assemblies)!=null&&We.length)&&M(J.graph.assemblies[0].id)})}catch(xt){R||U(xt instanceof Error?xt.message:"Failed to load observatory payloads.")}finally{R||L(!1)}}return X(),()=>{R=!0}},[r]),Nt.useEffect(()=>{var me;if(!C.liveEnabled||!((me=r.live_api)!=null&&me.events))return;const R=new URL(r.live_api.events,window.location.href);r.session_id&&R.searchParams.set("session_id",r.session_id);const X=new EventSource(R.toString());return X.addEventListener("observatory.invalidate",()=>{Nt.startTransition(()=>{N(W=>({...W}))})}),X.addEventListener("observatory.invalidate",async()=>{var W,se,ve,ge,be,je,Oe;try{const[Pt,Lt,ut,B,Qt,pt,ht]=await Promise.all([(W=r.live_api)!=null&&W.graph?An(r.live_api.graph):Promise.resolve(null),(se=r.live_api)!=null&&se.basin?An(r.live_api.basin):Promise.resolve(null),(ve=r.live_api)!=null&&ve.overview?An(r.live_api.overview):Promise.resolve(null),(ge=r.live_api)!=null&&ge.measurements?An(r.live_api.measurements):Promise.resolve(null),(be=r.live_api)!=null&&be.session_turns?An(r.live_api.session_turns):Promise.resolve(null),(je=r.live_api)!=null&&je.runtime_status?An(r.live_api.runtime_status):Promise.resolve(null),(Oe=r.live_api)!=null&&Oe.runtime_model?An(r.live_api.runtime_model):Promise.resolve(null)]);N(qe=>({...qe,graph:Pt,basin:Lt,overview:ut,measurements:B,transcript:Qt,runtimeStatus:pt,runtimeModel:ht}))}catch{}}),()=>{X.close()}},[r.live_api,r.session_id,C.liveEnabled]);function oe(R,X){if(!R){x([]);return}x(me=>X?me.includes(R)?me.filter(W=>W!==R):[...me,R]:[R])}function de(){var R,X,me,W,se,ve;return we.jsxs("div",{className:"overview-grid",children:[we.jsx(In,{title:"Identity",children:we.jsx(Qn,{items:[["Experiment",r.experiment_id],["Session",r.session_id],["Mode",C.liveEnabled?"Live API":"Static export"],["Render","Layout/render != evidence"]]})}),we.jsx(In,{title:"Graph",children:we.jsx(Qn,{items:Object.entries(((R=C.overview)==null?void 0:R.graph_counts)??((X=C.graph)==null?void 0:X.counts)??{})})}),we.jsx(In,{title:"Basin",children:we.jsx(Qn,{items:[["Projection",((me=C.basin)==null?void 0:me.projection_method)??r.projection_method],["Filtered turns",(W=C.basin)==null?void 0:W.filtered_turn_count],["Source turns",(se=C.basin)==null?void 0:se.source_turn_count],["Derived","SVD projection + lift mode"]]})}),we.jsx(In,{title:"Measurements",children:we.jsx(Qn,{items:Object.entries(((ve=C.measurements)==null?void 0:ve.counts)??{})})})]})}function ae(){var me,W;const R=((me=C.graph)==null?void 0:me.graph_modes)??[Mv],X=((W=C.graph)==null?void 0:W.assembly_render_modes)??[wv];return we.jsxs("div",{className:"toolbar",children:[we.jsx("div",{className:"toolbar-group",children:R.map(se=>we.jsx("button",{className:se===o?"toolbar-button is-active":"toolbar-button",onClick:()=>a(se),type:"button",children:se},se))}),we.jsx("div",{className:"toolbar-group",children:X.map(se=>we.jsx("button",{className:se===u?"toolbar-button is-active":"toolbar-button",onClick:()=>c(se),type:"button",children:se},se))})]})}function ce(){var R;return we.jsxs("div",{className:"toolbar",children:[we.jsx("div",{className:"toolbar-group",children:["flat","time_lift","density_lift","session_offset"].map(X=>we.jsx("button",{className:X===h?"toolbar-button is-active":"toolbar-button",onClick:()=>f(X),type:"button",children:X},X))}),we.jsxs("div",{className:"toolbar-group toolbar-badges",children:[we.jsxs("span",{className:oo("derived"),children:["Projection: ",((R=C.basin)==null?void 0:R.projection_method)??r.projection_method??"unknown"]}),we.jsxs("span",{className:oo("derived"),children:["Lift: ",h]}),we.jsx("span",{className:oo("derived"),children:"Derived"})]})]})}function H(){var W;const R=T??z??j??C.overview??{},X=(z==null?void 0:z.measurement_history)??(T==null?void 0:T.measurement_history)??[],me=(z==null?void 0:z.provenance)??(T==null?void 0:T.operator_label)??(j==null?void 0:j.profile_name)??"";return we.jsxs("aside",{className:"inspector",children:[we.jsxs("div",{className:"inspector-tabs",children:[we.jsx("button",{className:m==="cards"?"toolbar-button is-active":"toolbar-button",onClick:()=>g("cards"),type:"button",children:"Cards"}),we.jsx("button",{className:m==="json"?"toolbar-button is-active":"toolbar-button",onClick:()=>g("json"),type:"button",children:"Raw JSON"})]}),m==="json"?we.jsx("pre",{className:"debug-json",children:JSON.stringify(R,null,2)}):we.jsxs("div",{className:"inspector-cards",children:[we.jsx(In,{title:"Identity",children:we.jsx(Qn,{items:[["ID",(R==null?void 0:R.id)??(R==null?void 0:R.turn_id)??(R==null?void 0:R.cluster_signature)],["Label",(R==null?void 0:R.label)??(R==null?void 0:R.display_attractor_label)??(R==null?void 0:R.display_label)],["Created",R==null?void 0:R.created_at]]})}),we.jsx(In,{title:"Ontology",children:we.jsx(Qn,{items:[["Kind",(R==null?void 0:R.kind)??(T?"memode":j?"turn":"overview")],["Domain",(R==null?void 0:R.domain)??(R==null?void 0:R.dominant_domain)],["Source",(R==null?void 0:R.source_kind)??"observatory"]]})}),we.jsx(In,{title:"Summary/Invariance",children:we.jsx(Qn,{items:[["Summary",(R==null?void 0:R.summary)??(R==null?void 0:R.manual_summary)??(R==null?void 0:R.dominant_label)],["Invariance",T==null?void 0:T.invariance_summary],["Recent turns",j==null?void 0:j.active_set_labels]]})}),we.jsx(In,{title:"Provenance",children:we.jsx(Qn,{items:[["Operator/Source",me],["Evidence label",(R==null?void 0:R.evidence_label)??(T==null?void 0:T.evidence_label)],["Confidence",(R==null?void 0:R.confidence)??(T==null?void 0:T.confidence)]]})}),we.jsx(In,{title:"Cluster Membership",children:we.jsx(Qn,{items:[["Cluster",(R==null?void 0:R.cluster_signature)??(j==null?void 0:j.dominant_cluster_signature)],["Display label",(R==null?void 0:R.cluster_label)??(R==null?void 0:R.display_label)??(j==null?void 0:j.display_attractor_label)],["Domain mix",R==null?void 0:R.domain_mix]]})}),we.jsx(In,{title:"Memode Membership",children:we.jsx(Qn,{items:[["Assemblies",(R==null?void 0:R.memode_membership)??(T==null?void 0:T.member_meme_ids)],["Supporting edges",T==null?void 0:T.supporting_edge_ids],["Member order",T==null?void 0:T.member_order]]})}),we.jsx(In,{title:"Supporting Relations",children:we.jsx(Qn,{items:[["Active set nodes",j==null?void 0:j.active_set_node_ids],["Transition",j==null?void 0:j.transition_kind],["Attractor",j==null?void 0:j.display_attractor_label]]})}),we.jsx(In,{title:"Measurement History",children:we.jsx(Qn,{items:[["Count",X.length],["Recent event",(W=X[0])==null?void 0:W.action_type],["Preview delta","Use preview/commit API; view-only presets stay out of evidence."]]})})]})]})}function ue(){var R,X,me;return we.jsxs("aside",{className:"sidebar",children:[we.jsx(In,{title:"Assemblies",children:we.jsx("div",{className:"chip-list",children:(((R=C.graph)==null?void 0:R.assemblies)??[]).slice(0,12).map(W=>we.jsx("button",{className:W.id===E?"chip is-active":"chip",onClick:()=>M(W.id),type:"button",children:W.label},W.id))})}),we.jsx(In,{title:"Semantic Clusters",children:we.jsx("div",{className:"chip-list",children:(((X=C.graph)==null?void 0:X.cluster_summaries)??[]).slice(0,12).map(W=>we.jsxs("div",{className:"cluster-pill",children:[we.jsx("strong",{children:W.display_label}),we.jsxs("span",{children:[W.member_meme_ids.length," memes"]})]},W.cluster_signature))})}),we.jsx(In,{title:"Transcript",children:we.jsx("div",{className:"transcript-list",children:(((me=C.transcript)==null?void 0:me.turns)??[]).slice(0,10).map(W=>we.jsxs("button",{className:W.turn_id===(j==null?void 0:j.turn_id)?"transcript-turn is-active":"transcript-turn",onClick:()=>y(W.turn_id),type:"button",children:[we.jsxs("span",{children:["T",W.turn_index]}),we.jsx("span",{children:W.user_text})]},W.turn_id))})})]})}function re(){var R,X;return t==="overview"?de():t==="graph"&&C.graph?we.jsxs(we.Fragment,{children:[ae(),we.jsx(gR,{payload:C.graph,mode:o,currentTurnNodeIds:K,selectedNodeId:P,selectedAssembly:u==="hidden"?null:T,onSelectNode:oe})]}):t==="basin"&&C.basin?(C.basin.filtered_turn_count??0)<2?we.jsxs(we.Fragment,{children:[ce(),we.jsxs("div",{className:"empty-state",children:[we.jsx("h2",{children:"Sparse basin data"}),we.jsx("p",{children:((R=C.basin.diagnostics)==null?void 0:R.reason)??"Not enough turns with non-empty active sets for basin playback."}),we.jsx(Qn,{items:[["Source turns",C.basin.source_turn_count],["Filtered turns",C.basin.filtered_turn_count],["Skipped turns",(X=C.basin.diagnostics)==null?void 0:X.skipped_turn_count]]})]})]}):we.jsxs(we.Fragment,{children:[ce(),we.jsx(kT,{payload:C.basin,currentTurnId:(j==null?void 0:j.turn_id)??null,liftMode:h,onSelectTurn:y})]}):t==="geometry"?we.jsx("pre",{className:"debug-json",children:JSON.stringify(C.geometry??{},null,2)}):we.jsx("pre",{className:"debug-json",children:JSON.stringify(C.measurements??{},null,2)})}return we.jsxs("div",{className:"app-shell",children:[we.jsxs("header",{className:"app-header",children:[we.jsxs("div",{children:[we.jsx("p",{className:"eyebrow",children:"EDEN Observatory"}),we.jsx("h1",{children:"Live-first semantic graph and basin instrument"})]}),we.jsxs("div",{className:"header-badges",children:[we.jsx("span",{className:oo("observed"),children:C.liveEnabled?"Live API":"Static export"}),we.jsx("span",{className:oo("derived"),children:"Layout != evidence"}),C.staleBuildWarning?we.jsxs("span",{className:oo("warning"),children:["Build warning: ",C.staleBuildWarning]}):null]})]}),we.jsx("nav",{className:"surface-tabs",children:Ev.map(R=>we.jsx("button",{className:R===t?"toolbar-button is-active":"toolbar-button",onClick:()=>n(R),type:"button",children:yR(R)},R))}),I?we.jsx("div",{className:"status-banner",children:"Loading observatory payloads…"}):null,w?we.jsx("div",{className:"status-banner status-error",children:w}):null,we.jsxs("main",{className:"layout",children:[ue(),we.jsx("section",{className:"surface-panel",children:re()}),H()]})]})}M0.createRoot(document.getElementById("observatory-root")).render(we.jsx(g0.StrictMode,{children:we.jsx(MR,{bootstrap:window.__EDEN_BOOTSTRAP__??{}})}));
