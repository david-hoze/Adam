(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function of(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vd={exports:{}},so={},_d={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function A0(){if(qm)return St;qm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(B,re,_e){this.props=B,this.context=re,this.refs=w,this.updater=_e||x}S.prototype.isReactComponent={},S.prototype.setState=function(B,re){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,re,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function y(){}y.prototype=S.prototype;function I(B,re,_e){this.props=B,this.context=re,this.refs=w,this.updater=_e||x}var L=I.prototype=new y;L.constructor=I,M(L,S.prototype),L.isPureReactComponent=!0;var T=Array.isArray,P=Object.prototype.hasOwnProperty,N={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function O(B,re,_e){var Y,ge={},le=null,Me=null;if(re!=null)for(Y in re.ref!==void 0&&(Me=re.ref),re.key!==void 0&&(le=""+re.key),re)P.call(re,Y)&&!D.hasOwnProperty(Y)&&(ge[Y]=re[Y]);var be=arguments.length-2;if(be===1)ge.children=_e;else if(1<be){for(var ke=Array(be),We=0;We<be;We++)ke[We]=arguments[We+2];ge.children=ke}if(B&&B.defaultProps)for(Y in be=B.defaultProps,be)ge[Y]===void 0&&(ge[Y]=be[Y]);return{$$typeof:r,type:B,key:le,ref:Me,props:ge,_owner:N.current}}function C(B,re){return{$$typeof:r,type:B.type,key:re,ref:B.ref,props:B.props,_owner:B._owner}}function E(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function k(B){var re={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(_e){return re[_e]})}var q=/\/+/g;function Q(B,re){return typeof B=="object"&&B!==null&&B.key!=null?k(""+B.key):re.toString(36)}function ne(B,re,_e,Y,ge){var le=typeof B;(le==="undefined"||le==="boolean")&&(B=null);var Me=!1;if(B===null)Me=!0;else switch(le){case"string":case"number":Me=!0;break;case"object":switch(B.$$typeof){case r:case e:Me=!0}}if(Me)return Me=B,ge=ge(Me),B=Y===""?"."+Q(Me,0):Y,T(ge)?(_e="",B!=null&&(_e=B.replace(q,"$&/")+"/"),ne(ge,re,_e,"",function(We){return We})):ge!=null&&(E(ge)&&(ge=C(ge,_e+(!ge.key||Me&&Me.key===ge.key?"":(""+ge.key).replace(q,"$&/")+"/")+B)),re.push(ge)),1;if(Me=0,Y=Y===""?".":Y+":",T(B))for(var be=0;be<B.length;be++){le=B[be];var ke=Y+Q(le,be);Me+=ne(le,re,_e,ke,ge)}else if(ke=v(B),typeof ke=="function")for(B=ke.call(B),be=0;!(le=B.next()).done;)le=le.value,ke=Y+Q(le,be++),Me+=ne(le,re,_e,ke,ge);else if(le==="object")throw re=String(B),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Me}function ae(B,re,_e){if(B==null)return B;var Y=[],ge=0;return ne(B,Y,"","",function(le){return re.call(_e,le,ge++)}),Y}function he(B){if(B._status===-1){var re=B._result;re=re(),re.then(function(_e){(B._status===0||B._status===-1)&&(B._status=1,B._result=_e)},function(_e){(B._status===0||B._status===-1)&&(B._status=2,B._result=_e)}),B._status===-1&&(B._status=0,B._result=re)}if(B._status===1)return B._result.default;throw B._result}var me={current:null},H={transition:null},pe={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:H,ReactCurrentOwner:N};function se(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:ae,forEach:function(B,re,_e){ae(B,function(){re.apply(this,arguments)},_e)},count:function(B){var re=0;return ae(B,function(){re++}),re},toArray:function(B){return ae(B,function(re){return re})||[]},only:function(B){if(!E(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},St.Component=S,St.Fragment=t,St.Profiler=a,St.PureComponent=I,St.StrictMode=n,St.Suspense=h,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,St.act=se,St.cloneElement=function(B,re,_e){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Y=M({},B.props),ge=B.key,le=B.ref,Me=B._owner;if(re!=null){if(re.ref!==void 0&&(le=re.ref,Me=N.current),re.key!==void 0&&(ge=""+re.key),B.type&&B.type.defaultProps)var be=B.type.defaultProps;for(ke in re)P.call(re,ke)&&!D.hasOwnProperty(ke)&&(Y[ke]=re[ke]===void 0&&be!==void 0?be[ke]:re[ke])}var ke=arguments.length-2;if(ke===1)Y.children=_e;else if(1<ke){be=Array(ke);for(var We=0;We<ke;We++)be[We]=arguments[We+2];Y.children=be}return{$$typeof:r,type:B.type,key:ge,ref:le,props:Y,_owner:Me}},St.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:o,_context:B},B.Consumer=B},St.createElement=O,St.createFactory=function(B){var re=O.bind(null,B);return re.type=B,re},St.createRef=function(){return{current:null}},St.forwardRef=function(B){return{$$typeof:c,render:B}},St.isValidElement=E,St.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:he}},St.memo=function(B,re){return{$$typeof:f,type:B,compare:re===void 0?null:re}},St.startTransition=function(B){var re=H.transition;H.transition={};try{B()}finally{H.transition=re}},St.unstable_act=se,St.useCallback=function(B,re){return me.current.useCallback(B,re)},St.useContext=function(B){return me.current.useContext(B)},St.useDebugValue=function(){},St.useDeferredValue=function(B){return me.current.useDeferredValue(B)},St.useEffect=function(B,re){return me.current.useEffect(B,re)},St.useId=function(){return me.current.useId()},St.useImperativeHandle=function(B,re,_e){return me.current.useImperativeHandle(B,re,_e)},St.useInsertionEffect=function(B,re){return me.current.useInsertionEffect(B,re)},St.useLayoutEffect=function(B,re){return me.current.useLayoutEffect(B,re)},St.useMemo=function(B,re){return me.current.useMemo(B,re)},St.useReducer=function(B,re,_e){return me.current.useReducer(B,re,_e)},St.useRef=function(B){return me.current.useRef(B)},St.useState=function(B){return me.current.useState(B)},St.useSyncExternalStore=function(B,re,_e){return me.current.useSyncExternalStore(B,re,_e)},St.useTransition=function(){return me.current.useTransition()},St.version="18.3.1",St}var Km;function lf(){return Km||(Km=1,_d.exports=A0()),_d.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function C0(){if(Zm)return so;Zm=1;var r=lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,f){var m,g={},v=null,x=null;f!==void 0&&(v=""+f),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(x=h.ref);for(m in h)n.call(h,m)&&!o.hasOwnProperty(m)&&(g[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:a.current}}return so.Fragment=t,so.jsx=u,so.jsxs=u,so}var Qm;function R0(){return Qm||(Qm=1,vd.exports=C0()),vd.exports}var U=R0(),tt=lf();const P0=of(tt);var Ol={},yd={exports:{}},Zn={},xd={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function L0(){return Jm||(Jm=1,(function(r){function e(H,pe){var se=H.length;H.push(pe);e:for(;0<se;){var B=se-1>>>1,re=H[B];if(0<a(re,pe))H[B]=pe,H[se]=re,se=B;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var pe=H[0],se=H.pop();if(se!==pe){H[0]=se;e:for(var B=0,re=H.length,_e=re>>>1;B<_e;){var Y=2*(B+1)-1,ge=H[Y],le=Y+1,Me=H[le];if(0>a(ge,se))le<re&&0>a(Me,ge)?(H[B]=Me,H[le]=se,B=le):(H[B]=ge,H[Y]=se,B=Y);else if(le<re&&0>a(Me,se))H[B]=Me,H[le]=se,B=le;else break e}}return pe}function a(H,pe){var se=H.sortIndex-pe.sortIndex;return se!==0?se:H.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var h=[],f=[],m=1,g=null,v=3,x=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var pe=t(f);pe!==null;){if(pe.callback===null)n(f);else if(pe.startTime<=H)n(f),pe.sortIndex=pe.expirationTime,e(h,pe);else break;pe=t(f)}}function T(H){if(w=!1,L(H),!M)if(t(h)!==null)M=!0,he(P);else{var pe=t(f);pe!==null&&me(T,pe.startTime-H)}}function P(H,pe){M=!1,w&&(w=!1,y(O),O=-1),x=!0;var se=v;try{for(L(pe),g=t(h);g!==null&&(!(g.expirationTime>pe)||H&&!k());){var B=g.callback;if(typeof B=="function"){g.callback=null,v=g.priorityLevel;var re=B(g.expirationTime<=pe);pe=r.unstable_now(),typeof re=="function"?g.callback=re:g===t(h)&&n(h),L(pe)}else n(h);g=t(h)}if(g!==null)var _e=!0;else{var Y=t(f);Y!==null&&me(T,Y.startTime-pe),_e=!1}return _e}finally{g=null,v=se,x=!1}}var N=!1,D=null,O=-1,C=5,E=-1;function k(){return!(r.unstable_now()-E<C)}function q(){if(D!==null){var H=r.unstable_now();E=H;var pe=!0;try{pe=D(!0,H)}finally{pe?Q():(N=!1,D=null)}}else N=!1}var Q;if(typeof I=="function")Q=function(){I(q)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ae=ne.port2;ne.port1.onmessage=q,Q=function(){ae.postMessage(null)}}else Q=function(){S(q,0)};function he(H){D=H,N||(N=!0,Q())}function me(H,pe){O=S(function(){H(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){M||x||(M=!0,he(P))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(H){switch(v){case 1:case 2:case 3:var pe=3;break;default:pe=v}var se=v;v=pe;try{return H()}finally{v=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,pe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=v;v=H;try{return pe()}finally{v=se}},r.unstable_scheduleCallback=function(H,pe,se){var B=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?B+se:B):se=B,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,H={id:m++,callback:pe,priorityLevel:H,startTime:se,expirationTime:re,sortIndex:-1},se>B?(H.sortIndex=se,e(f,H),t(h)===null&&H===t(f)&&(w?(y(O),O=-1):w=!0,me(T,se-B))):(H.sortIndex=re,e(h,H),M||x||(M=!0,he(P))),H},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(H){var pe=v;return function(){var se=v;v=pe;try{return H.apply(this,arguments)}finally{v=se}}}})(Sd)),Sd}var eg;function D0(){return eg||(eg=1,xd.exports=L0()),xd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function N0(){if(tg)return Zn;tg=1;var r=lf(),e=D0();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,a={};function o(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(a[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return h.call(g,i)?!0:h.call(m,i)?!1:f.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,d){if(s===null||typeof s>"u"||x(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function w(i,s,l,d,p,_,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new w(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new w(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new w(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new w(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new w(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new w(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new w(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new w(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new w(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function I(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,I);S[s]=new w(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,I);S[s]=new w(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,I);S[s]=new w(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new w(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new w(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,s,l,d){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,d)&&(l=null),d||p===null?v(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),N=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),k=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),H=Symbol.iterator;function pe(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,B;function re(i){if(B===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);B=s&&s[1]||""}return`
`+B+i}var _e=!1;function Y(i,s){if(!i||_e)return"";_e=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var d=ue}Reflect.construct(i,[],s)}else{try{s.call()}catch(ue){d=ue}i.call(s.prototype)}else{try{throw Error()}catch(ue){d=ue}i()}}catch(ue){if(ue&&d&&typeof ue.stack=="string"){for(var p=ue.stack.split(`
`),_=d.stack.split(`
`),b=p.length-1,z=_.length-1;1<=b&&0<=z&&p[b]!==_[z];)z--;for(;1<=b&&0<=z;b--,z--)if(p[b]!==_[z]){if(b!==1||z!==1)do if(b--,z--,0>z||p[b]!==_[z]){var W=`
`+p[b].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=b&&0<=z);break}}}finally{_e=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?re(i):""}function ge(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=Y(i.type,!1),i;case 11:return i=Y(i.type.render,!1),i;case 1:return i=Y(i.type,!0),i;default:return""}}function le(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case N:return"Portal";case C:return"Profiler";case O:return"StrictMode";case Q:return"Suspense";case ne:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case E:return(i._context.displayName||"Context")+".Provider";case q:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ae:return s=i.displayName||null,s!==null?s:le(i.type)||"Memo";case he:s=i._payload,i=i._init;try{return le(i(s))}catch{}}return null}function Me(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(s);case 8:return s===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function be(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ke(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function We(i){var s=ke(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(b){d=""+b,_.call(this,b)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(b){d=""+b},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Rt(i){i._valueTracker||(i._valueTracker=We(i))}function Pt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=ke(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function ft(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function V(i,s){var l=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function nn(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=be(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function gt(i,s){s=s.checked,s!=null&&L(i,"checked",s,!1)}function pt(i,s){gt(i,s);var l=be(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Tt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Tt(i,s.type,be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Je(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Tt(i,s,l){(s!=="number"||ft(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Xe=Array.isArray;function F(i,s,l,d){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+be(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function A(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function te(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Xe(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:be(l)}}function Se(i,s){var l=be(s.value),d=be(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function we(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function ye(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function G(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?ye(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var fe,ve=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ee(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var X={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(X).forEach(function(i){Ue.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),X[s]=X[i]})});function Ye(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||X.hasOwnProperty(i)&&X[i]?(""+s).trim():s+"px"}function Ze(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=Ye(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var Oe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(i,s){if(s){if(Oe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function it(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function j(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var De=null,oe=null,xe=null;function Fe(i){if(i=Wa(i)){if(typeof De!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Jo(s),De(i.stateNode,i.type,s))}}function Ie(i){oe?xe?xe.push(i):xe=[i]:oe=i}function ct(){if(oe){var i=oe,s=xe;if(xe=oe=null,Fe(i),s)for(i=0;i<s.length;i++)Fe(s[i])}}function Ut(i,s){return i(s)}function Ht(){}var yt=!1;function hn(i,s,l){if(yt)return i(s,l);yt=!0;try{return Ut(i,s,l)}finally{yt=!1,(oe!==null||xe!==null)&&(Ht(),ct())}}function fn(i,s){var l=i.stateNode;if(l===null)return null;var d=Jo(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Kt=!1;if(c)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Kt=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Kt=!1}function jn(i,s,l,d,p,_,b,z,W){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(l,ue)}catch(Ce){this.onError(Ce)}}var On=!1,bt=null,zt=!1,bn=null,pn={onError:function(i){On=!0,bt=i}};function Ei(i,s,l,d,p,_,b,z,W){On=!1,bt=null,jn.apply(pn,arguments)}function Zr(i,s,l,d,p,_,b,z,W){if(Ei.apply(this,arguments),On){if(On){var ue=bt;On=!1,bt=null}else throw Error(t(198));zt||(zt=!0,bn=ue)}}function Oi(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function No(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Io(i){if(Oi(i)!==i)throw Error(t(188))}function Bu(i){var s=i.alternate;if(!s){if(s=Oi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Io(p),i;if(_===d)return Io(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=_;else{for(var b=!1,z=p.child;z;){if(z===l){b=!0,l=p,d=_;break}if(z===d){b=!0,d=p,l=_;break}z=z.sibling}if(!b){for(z=_.child;z;){if(z===l){b=!0,l=_,d=p;break}if(z===d){b=!0,d=_,l=p;break}z=z.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Uo(i){return i=Bu(i),i!==null?Fo(i):null}function Fo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Fo(i);if(s!==null)return s;i=i.sibling}return null}var ko=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,K=e.unstable_shouldYield,de=e.unstable_requestPaint,ee=e.unstable_now,Z=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,ze=e.unstable_UserBlockingPriority,He=e.unstable_NormalPriority,$e=e.unstable_LowPriority,dt=e.unstable_IdlePriority,lt=null,Ke=null;function Mt(i){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(lt,i,void 0,(i.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:At,Zt=Math.log,jt=Math.LN2;function At(i){return i>>>=0,i===0?32:31-(Zt(i)/jt|0)|0}var rt=64,Qt=4194304;function Et(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function An(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,_=i.pingedLanes,b=l&268435455;if(b!==0){var z=b&~p;z!==0?d=Et(z):(_&=b,_!==0&&(d=Et(_)))}else b=l&~p,b!==0?d=Et(b):_!==0&&(d=Et(_));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-mt(s),p=1<<l,d|=i[l],s&=~p;return d}function _r(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zn(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var b=31-mt(_),z=1<<b,W=p[b];W===-1?((z&l)===0||(z&d)!==0)&&(p[b]=_r(z,s)):W<=s&&(i.expiredLanes|=z),_&=~z}}function Xi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Bt(){var i=rt;return rt<<=1,(rt&4194240)===0&&(rt=64),i}function Cn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function mn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-mt(s),i[s]=l}function Sn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-mt(l),_=1<<p;s[p]=0,d[p]=-1,i[p]=-1,l&=~_}}function gn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-mt(l),p=1<<d;p&s|i[d]&s&&(i[d]|=s),l&=~p}}var Lt=0;function zi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Cf,Gu,Rf,Pf,Lf,Hu=!1,Oo=[],yr=null,xr=null,Sr=null,Ca=new Map,Ra=new Map,Er=[],q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Df(i,s){switch(i){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Ca.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(s.pointerId)}}function Pa(i,s,l,d,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Wa(s),s!==null&&Gu(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function K_(i,s,l,d,p){switch(s){case"focusin":return yr=Pa(yr,i,s,l,d,p),!0;case"dragenter":return xr=Pa(xr,i,s,l,d,p),!0;case"mouseover":return Sr=Pa(Sr,i,s,l,d,p),!0;case"pointerover":var _=p.pointerId;return Ca.set(_,Pa(Ca.get(_)||null,i,s,l,d,p)),!0;case"gotpointercapture":return _=p.pointerId,Ra.set(_,Pa(Ra.get(_)||null,i,s,l,d,p)),!0}return!1}function Nf(i){var s=Qr(i.target);if(s!==null){var l=Oi(s);if(l!==null){if(s=l.tag,s===13){if(s=No(l),s!==null){i.blockedOn=s,Lf(i.priority,function(){Rf(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function zo(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Wu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);vt=d,l.target.dispatchEvent(d),vt=null}else return s=Wa(l),s!==null&&Gu(s),i.blockedOn=l,!1;s.shift()}return!0}function If(i,s,l){zo(i)&&l.delete(s)}function Z_(){Hu=!1,yr!==null&&zo(yr)&&(yr=null),xr!==null&&zo(xr)&&(xr=null),Sr!==null&&zo(Sr)&&(Sr=null),Ca.forEach(If),Ra.forEach(If)}function La(i,s){i.blockedOn===s&&(i.blockedOn=null,Hu||(Hu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Z_)))}function Da(i){function s(p){return La(p,i)}if(0<Oo.length){La(Oo[0],i);for(var l=1;l<Oo.length;l++){var d=Oo[l];d.blockedOn===i&&(d.blockedOn=null)}}for(yr!==null&&La(yr,i),xr!==null&&La(xr,i),Sr!==null&&La(Sr,i),Ca.forEach(s),Ra.forEach(s),l=0;l<Er.length;l++)d=Er[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Er.length&&(l=Er[0],l.blockedOn===null);)Nf(l),l.blockedOn===null&&Er.shift()}var bs=T.ReactCurrentBatchConfig,Bo=!0;function Q_(i,s,l,d){var p=Lt,_=bs.transition;bs.transition=null;try{Lt=1,Vu(i,s,l,d)}finally{Lt=p,bs.transition=_}}function J_(i,s,l,d){var p=Lt,_=bs.transition;bs.transition=null;try{Lt=4,Vu(i,s,l,d)}finally{Lt=p,bs.transition=_}}function Vu(i,s,l,d){if(Bo){var p=Wu(i,s,l,d);if(p===null)oc(i,s,d,Go,l),Df(i,d);else if(K_(p,i,s,l,d))d.stopPropagation();else if(Df(i,d),s&4&&-1<q_.indexOf(i)){for(;p!==null;){var _=Wa(p);if(_!==null&&Cf(_),_=Wu(i,s,l,d),_===null&&oc(i,s,d,Go,l),_===p)break;p=_}p!==null&&d.stopPropagation()}else oc(i,s,d,null,l)}}var Go=null;function Wu(i,s,l,d){if(Go=null,i=j(d),i=Qr(i),i!==null)if(s=Oi(i),s===null)i=null;else if(l=s.tag,l===13){if(i=No(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Go=i,null}function Uf(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z()){case Pe:return 1;case ze:return 4;case He:case $e:return 16;case dt:return 536870912;default:return 16}default:return 16}}var Mr=null,ju=null,Ho=null;function Ff(){if(Ho)return Ho;var i,s=ju,l=s.length,d,p="value"in Mr?Mr.value:Mr.textContent,_=p.length;for(i=0;i<l&&s[i]===p[i];i++);var b=l-i;for(d=1;d<=b&&s[l-d]===p[_-d];d++);return Ho=p.slice(i,1<d?1-d:void 0)}function Vo(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Wo(){return!0}function kf(){return!1}function ti(i){function s(l,d,p,_,b){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=b,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Wo:kf,this.isPropagationStopped=kf,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),s}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=ti(As),Na=se({},As,{view:0,detail:0}),ey=ti(Na),$u,Yu,Ia,jo=se({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ia&&(Ia&&i.type==="mousemove"?($u=i.screenX-Ia.screenX,Yu=i.screenY-Ia.screenY):Yu=$u=0,Ia=i),$u)},movementY:function(i){return"movementY"in i?i.movementY:Yu}}),Of=ti(jo),ty=se({},jo,{dataTransfer:0}),ny=ti(ty),iy=se({},Na,{relatedTarget:0}),qu=ti(iy),ry=se({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=ti(ry),ay=se({},As,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),oy=ti(ay),ly=se({},As,{data:0}),zf=ti(ly),uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=dy[i])?!!s[i]:!1}function Ku(){return hy}var fy=se({},Na,{key:function(i){if(i.key){var s=uy[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Vo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?cy[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(i){return i.type==="keypress"?Vo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Vo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),py=ti(fy),my=se({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=ti(my),gy=se({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),vy=ti(gy),_y=se({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),yy=ti(_y),xy=se({},jo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=ti(xy),Ey=[9,13,27,32],Zu=c&&"CompositionEvent"in window,Ua=null;c&&"documentMode"in document&&(Ua=document.documentMode);var My=c&&"TextEvent"in window&&!Ua,Gf=c&&(!Zu||Ua&&8<Ua&&11>=Ua),Hf=" ",Vf=!1;function Wf(i,s){switch(i){case"keyup":return Ey.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Cs=!1;function wy(i,s){switch(i){case"compositionend":return jf(s);case"keypress":return s.which!==32?null:(Vf=!0,Hf);case"textInput":return i=s.data,i===Hf&&Vf?null:i;default:return null}}function Ty(i,s){if(Cs)return i==="compositionend"||!Zu&&Wf(i,s)?(i=Ff(),Ho=ju=Mr=null,Cs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Gf&&s.locale!=="ko"?null:s.data;default:return null}}var by={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!by[i.type]:s==="textarea"}function $f(i,s,l,d){Ie(d),s=Ko(s,"onChange"),0<s.length&&(l=new Xu("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var Fa=null,ka=null;function Ay(i){dp(i,0)}function Xo(i){var s=Ns(i);if(Pt(s))return i}function Cy(i,s){if(i==="change")return s}var Yf=!1;if(c){var Qu;if(c){var Ju="oninput"in document;if(!Ju){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),Ju=typeof qf.oninput=="function"}Qu=Ju}else Qu=!1;Yf=Qu&&(!document.documentMode||9<document.documentMode)}function Kf(){Fa&&(Fa.detachEvent("onpropertychange",Zf),ka=Fa=null)}function Zf(i){if(i.propertyName==="value"&&Xo(ka)){var s=[];$f(s,ka,i,j(i)),hn(Ay,s)}}function Ry(i,s,l){i==="focusin"?(Kf(),Fa=s,ka=l,Fa.attachEvent("onpropertychange",Zf)):i==="focusout"&&Kf()}function Py(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Xo(ka)}function Ly(i,s){if(i==="click")return Xo(s)}function Dy(i,s){if(i==="input"||i==="change")return Xo(s)}function Ny(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Mi=typeof Object.is=="function"?Object.is:Ny;function Oa(i,s){if(Mi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!h.call(s,p)||!Mi(i[p],s[p]))return!1}return!0}function Qf(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Jf(i,s){var l=Qf(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Qf(l)}}function ep(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?ep(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function tp(){for(var i=window,s=ft();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ft(i.document)}return s}function ec(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function Iy(i){var s=tp(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&ep(l.ownerDocument.documentElement,l)){if(d!==null&&ec(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!i.extend&&_>d&&(p=d,d=_,_=p),p=Jf(l,_);var b=Jf(l,d);p&&b&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>d?(i.addRange(s),i.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Uy=c&&"documentMode"in document&&11>=document.documentMode,Rs=null,tc=null,za=null,nc=!1;function np(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;nc||Rs==null||Rs!==ft(d)||(d=Rs,"selectionStart"in d&&ec(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),za&&Oa(za,d)||(za=d,d=Ko(tc,"onSelect"),0<d.length&&(s=new Xu("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=Rs)))}function $o(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Ps={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},ic={},ip={};c&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Yo(i){if(ic[i])return ic[i];if(!Ps[i])return i;var s=Ps[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in ip)return ic[i]=s[l];return i}var rp=Yo("animationend"),sp=Yo("animationiteration"),ap=Yo("animationstart"),op=Yo("transitionend"),lp=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(i,s){lp.set(i,s),o(s,[i])}for(var rc=0;rc<up.length;rc++){var sc=up[rc],Fy=sc.toLowerCase(),ky=sc[0].toUpperCase()+sc.slice(1);wr(Fy,"on"+ky)}wr(rp,"onAnimationEnd"),wr(sp,"onAnimationIteration"),wr(ap,"onAnimationStart"),wr("dblclick","onDoubleClick"),wr("focusin","onFocus"),wr("focusout","onBlur"),wr(op,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function cp(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,Zr(d,s,void 0,i),i.currentTarget=null}function dp(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var _=void 0;if(s)for(var b=d.length-1;0<=b;b--){var z=d[b],W=z.instance,ue=z.currentTarget;if(z=z.listener,W!==_&&p.isPropagationStopped())break e;cp(p,z,ue),_=W}else for(b=0;b<d.length;b++){if(z=d[b],W=z.instance,ue=z.currentTarget,z=z.listener,W!==_&&p.isPropagationStopped())break e;cp(p,z,ue),_=W}}}if(zt)throw i=bn,zt=!1,bn=null,i}function Vt(i,s){var l=s[fc];l===void 0&&(l=s[fc]=new Set);var d=i+"__bubble";l.has(d)||(hp(s,i,2,!1),l.add(d))}function ac(i,s,l){var d=0;s&&(d|=4),hp(l,i,d,s)}var qo="_reactListening"+Math.random().toString(36).slice(2);function Ga(i){if(!i[qo]){i[qo]=!0,n.forEach(function(l){l!=="selectionchange"&&(Oy.has(l)||ac(l,!1,i),ac(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[qo]||(s[qo]=!0,ac("selectionchange",!1,s))}}function hp(i,s,l,d){switch(Uf(s)){case 1:var p=Q_;break;case 4:p=J_;break;default:p=Vu}l=p.bind(null,s,l,i),p=void 0,!Kt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function oc(i,s,l,d,p){var _=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var b=d.tag;if(b===3||b===4){var z=d.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(b===4)for(b=d.return;b!==null;){var W=b.tag;if((W===3||W===4)&&(W=b.stateNode.containerInfo,W===p||W.nodeType===8&&W.parentNode===p))return;b=b.return}for(;z!==null;){if(b=Qr(z),b===null)return;if(W=b.tag,W===5||W===6){d=_=b;continue e}z=z.parentNode}}d=d.return}hn(function(){var ue=_,Ce=j(l),Re=[];e:{var Te=lp.get(i);if(Te!==void 0){var Ve=Xu,qe=i;switch(i){case"keypress":if(Vo(l)===0)break e;case"keydown":case"keyup":Ve=py;break;case"focusin":qe="focus",Ve=qu;break;case"focusout":qe="blur",Ve=qu;break;case"beforeblur":case"afterblur":Ve=qu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=vy;break;case rp:case sp:case ap:Ve=sy;break;case op:Ve=yy;break;case"scroll":Ve=ey;break;case"wheel":Ve=Sy;break;case"copy":case"cut":case"paste":Ve=oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Bf}var Qe=(s&4)!==0,en=!Qe&&i==="scroll",J=Qe?Te!==null?Te+"Capture":null:Te;Qe=[];for(var $=ue,ie;$!==null;){ie=$;var Le=ie.stateNode;if(ie.tag===5&&Le!==null&&(ie=Le,J!==null&&(Le=fn($,J),Le!=null&&Qe.push(Ha($,Le,ie)))),en)break;$=$.return}0<Qe.length&&(Te=new Ve(Te,qe,null,l,Ce),Re.push({event:Te,listeners:Qe}))}}if((s&7)===0){e:{if(Te=i==="mouseover"||i==="pointerover",Ve=i==="mouseout"||i==="pointerout",Te&&l!==vt&&(qe=l.relatedTarget||l.fromElement)&&(Qr(qe)||qe[$i]))break e;if((Ve||Te)&&(Te=Ce.window===Ce?Ce:(Te=Ce.ownerDocument)?Te.defaultView||Te.parentWindow:window,Ve?(qe=l.relatedTarget||l.toElement,Ve=ue,qe=qe?Qr(qe):null,qe!==null&&(en=Oi(qe),qe!==en||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Ve=null,qe=ue),Ve!==qe)){if(Qe=Of,Le="onMouseLeave",J="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(Qe=Bf,Le="onPointerLeave",J="onPointerEnter",$="pointer"),en=Ve==null?Te:Ns(Ve),ie=qe==null?Te:Ns(qe),Te=new Qe(Le,$+"leave",Ve,l,Ce),Te.target=en,Te.relatedTarget=ie,Le=null,Qr(Ce)===ue&&(Qe=new Qe(J,$+"enter",qe,l,Ce),Qe.target=ie,Qe.relatedTarget=en,Le=Qe),en=Le,Ve&&qe)t:{for(Qe=Ve,J=qe,$=0,ie=Qe;ie;ie=Ls(ie))$++;for(ie=0,Le=J;Le;Le=Ls(Le))ie++;for(;0<$-ie;)Qe=Ls(Qe),$--;for(;0<ie-$;)J=Ls(J),ie--;for(;$--;){if(Qe===J||J!==null&&Qe===J.alternate)break t;Qe=Ls(Qe),J=Ls(J)}Qe=null}else Qe=null;Ve!==null&&fp(Re,Te,Ve,Qe,!1),qe!==null&&en!==null&&fp(Re,en,qe,Qe,!0)}}e:{if(Te=ue?Ns(ue):window,Ve=Te.nodeName&&Te.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&Te.type==="file")var nt=Cy;else if(Xf(Te))if(Yf)nt=Dy;else{nt=Py;var at=Ry}else(Ve=Te.nodeName)&&Ve.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(nt=Ly);if(nt&&(nt=nt(i,ue))){$f(Re,nt,l,Ce);break e}at&&at(i,Te,ue),i==="focusout"&&(at=Te._wrapperState)&&at.controlled&&Te.type==="number"&&Tt(Te,"number",Te.value)}switch(at=ue?Ns(ue):window,i){case"focusin":(Xf(at)||at.contentEditable==="true")&&(Rs=at,tc=ue,za=null);break;case"focusout":za=tc=Rs=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,np(Re,l,Ce);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":np(Re,l,Ce)}var ot;if(Zu)e:{switch(i){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Cs?Wf(i,l)&&(ht="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ht="onCompositionStart");ht&&(Gf&&l.locale!=="ko"&&(Cs||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Cs&&(ot=Ff()):(Mr=Ce,ju="value"in Mr?Mr.value:Mr.textContent,Cs=!0)),at=Ko(ue,ht),0<at.length&&(ht=new zf(ht,i,null,l,Ce),Re.push({event:ht,listeners:at}),ot?ht.data=ot:(ot=jf(l),ot!==null&&(ht.data=ot)))),(ot=My?wy(i,l):Ty(i,l))&&(ue=Ko(ue,"onBeforeInput"),0<ue.length&&(Ce=new zf("onBeforeInput","beforeinput",null,l,Ce),Re.push({event:Ce,listeners:ue}),Ce.data=ot))}dp(Re,s)})}function Ha(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Ko(i,s){for(var l=s+"Capture",d=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=fn(i,l),_!=null&&d.unshift(Ha(i,_,p)),_=fn(i,s),_!=null&&d.push(Ha(i,_,p))),i=i.return}return d}function Ls(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function fp(i,s,l,d,p){for(var _=s._reactName,b=[];l!==null&&l!==d;){var z=l,W=z.alternate,ue=z.stateNode;if(W!==null&&W===d)break;z.tag===5&&ue!==null&&(z=ue,p?(W=fn(l,_),W!=null&&b.unshift(Ha(l,W,z))):p||(W=fn(l,_),W!=null&&b.push(Ha(l,W,z)))),l=l.return}b.length!==0&&i.push({event:s,listeners:b})}var zy=/\r\n?/g,By=/\u0000|\uFFFD/g;function pp(i){return(typeof i=="string"?i:""+i).replace(zy,`
`).replace(By,"")}function Zo(i,s,l){if(s=pp(s),pp(i)!==s&&l)throw Error(t(425))}function Qo(){}var lc=null,uc=null;function cc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(i){return mp.resolve(null).then(i).catch(Vy)}:dc;function Vy(i){setTimeout(function(){throw i})}function hc(i,s){var l=s,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),Da(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Da(s)}function Tr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function gp(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Bi="__reactFiber$"+Ds,Va="__reactProps$"+Ds,$i="__reactContainer$"+Ds,fc="__reactEvents$"+Ds,Wy="__reactListeners$"+Ds,jy="__reactHandles$"+Ds;function Qr(i){var s=i[Bi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[$i]||l[Bi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=gp(i);i!==null;){if(l=i[Bi])return l;i=gp(i)}return s}i=l,l=i.parentNode}return null}function Wa(i){return i=i[Bi]||i[$i],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ns(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Jo(i){return i[Va]||null}var pc=[],Is=-1;function br(i){return{current:i}}function Wt(i){0>Is||(i.current=pc[Is],pc[Is]=null,Is--)}function Gt(i,s){Is++,pc[Is]=i.current,i.current=s}var Ar={},Rn=br(Ar),Xn=br(!1),Jr=Ar;function Us(i,s){var l=i.type.contextTypes;if(!l)return Ar;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function $n(i){return i=i.childContextTypes,i!=null}function el(){Wt(Xn),Wt(Rn)}function vp(i,s,l){if(Rn.current!==Ar)throw Error(t(168));Gt(Rn,s),Gt(Xn,l)}function _p(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(t(108,Me(i)||"Unknown",p));return se({},l,d)}function tl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ar,Jr=Rn.current,Gt(Rn,i),Gt(Xn,Xn.current),!0}function yp(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=_p(i,s,Jr),d.__reactInternalMemoizedMergedChildContext=i,Wt(Xn),Wt(Rn),Gt(Rn,i)):Wt(Xn),Gt(Xn,l)}var Yi=null,nl=!1,mc=!1;function xp(i){Yi===null?Yi=[i]:Yi.push(i)}function Xy(i){nl=!0,xp(i)}function Cr(){if(!mc&&Yi!==null){mc=!0;var i=0,s=Lt;try{var l=Yi;for(Lt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}Yi=null,nl=!1}catch(p){throw Yi!==null&&(Yi=Yi.slice(i+1)),ko(Pe,Cr),p}finally{Lt=s,mc=!1}}return null}var Fs=[],ks=0,il=null,rl=0,ui=[],ci=0,es=null,qi=1,Ki="";function ts(i,s){Fs[ks++]=rl,Fs[ks++]=il,il=i,rl=s}function Sp(i,s,l){ui[ci++]=qi,ui[ci++]=Ki,ui[ci++]=es,es=i;var d=qi;i=Ki;var p=32-mt(d)-1;d&=~(1<<p),l+=1;var _=32-mt(s)+p;if(30<_){var b=p-p%5;_=(d&(1<<b)-1).toString(32),d>>=b,p-=b,qi=1<<32-mt(s)+p|l<<p|d,Ki=_+i}else qi=1<<_|l<<p|d,Ki=i}function gc(i){i.return!==null&&(ts(i,1),Sp(i,1,0))}function vc(i){for(;i===il;)il=Fs[--ks],Fs[ks]=null,rl=Fs[--ks],Fs[ks]=null;for(;i===es;)es=ui[--ci],ui[ci]=null,Ki=ui[--ci],ui[ci]=null,qi=ui[--ci],ui[ci]=null}var ni=null,ii=null,Xt=!1,wi=null;function Ep(i,s){var l=pi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Mp(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ni=i,ii=Tr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ni=i,ii=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=es!==null?{id:qi,overflow:Ki}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=pi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ni=i,ii=null,!0):!1;default:return!1}}function _c(i){return(i.mode&1)!==0&&(i.flags&128)===0}function yc(i){if(Xt){var s=ii;if(s){var l=s;if(!Mp(i,s)){if(_c(i))throw Error(t(418));s=Tr(l.nextSibling);var d=ni;s&&Mp(i,s)?Ep(d,l):(i.flags=i.flags&-4097|2,Xt=!1,ni=i)}}else{if(_c(i))throw Error(t(418));i.flags=i.flags&-4097|2,Xt=!1,ni=i}}}function wp(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ni=i}function sl(i){if(i!==ni)return!1;if(!Xt)return wp(i),Xt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!cc(i.type,i.memoizedProps)),s&&(s=ii)){if(_c(i))throw Tp(),Error(t(418));for(;s;)Ep(i,s),s=Tr(s.nextSibling)}if(wp(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){ii=Tr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}ii=null}}else ii=ni?Tr(i.stateNode.nextSibling):null;return!0}function Tp(){for(var i=ii;i;)i=Tr(i.nextSibling)}function Os(){ii=ni=null,Xt=!1}function xc(i){wi===null?wi=[i]:wi.push(i)}var $y=T.ReactCurrentBatchConfig;function ja(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var p=d,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(b){var z=p.refs;b===null?delete z[_]:z[_]=b},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function al(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function bp(i){var s=i._init;return s(i._payload)}function Ap(i){function s(J,$){if(i){var ie=J.deletions;ie===null?(J.deletions=[$],J.flags|=16):ie.push($)}}function l(J,$){if(!i)return null;for(;$!==null;)s(J,$),$=$.sibling;return null}function d(J,$){for(J=new Map;$!==null;)$.key!==null?J.set($.key,$):J.set($.index,$),$=$.sibling;return J}function p(J,$){return J=Fr(J,$),J.index=0,J.sibling=null,J}function _(J,$,ie){return J.index=ie,i?(ie=J.alternate,ie!==null?(ie=ie.index,ie<$?(J.flags|=2,$):ie):(J.flags|=2,$)):(J.flags|=1048576,$)}function b(J){return i&&J.alternate===null&&(J.flags|=2),J}function z(J,$,ie,Le){return $===null||$.tag!==6?($=dd(ie,J.mode,Le),$.return=J,$):($=p($,ie),$.return=J,$)}function W(J,$,ie,Le){var nt=ie.type;return nt===D?Ce(J,$,ie.props.children,Le,ie.key):$!==null&&($.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===he&&bp(nt)===$.type)?(Le=p($,ie.props),Le.ref=ja(J,$,ie),Le.return=J,Le):(Le=Pl(ie.type,ie.key,ie.props,null,J.mode,Le),Le.ref=ja(J,$,ie),Le.return=J,Le)}function ue(J,$,ie,Le){return $===null||$.tag!==4||$.stateNode.containerInfo!==ie.containerInfo||$.stateNode.implementation!==ie.implementation?($=hd(ie,J.mode,Le),$.return=J,$):($=p($,ie.children||[]),$.return=J,$)}function Ce(J,$,ie,Le,nt){return $===null||$.tag!==7?($=us(ie,J.mode,Le,nt),$.return=J,$):($=p($,ie),$.return=J,$)}function Re(J,$,ie){if(typeof $=="string"&&$!==""||typeof $=="number")return $=dd(""+$,J.mode,ie),$.return=J,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case P:return ie=Pl($.type,$.key,$.props,null,J.mode,ie),ie.ref=ja(J,null,$),ie.return=J,ie;case N:return $=hd($,J.mode,ie),$.return=J,$;case he:var Le=$._init;return Re(J,Le($._payload),ie)}if(Xe($)||pe($))return $=us($,J.mode,ie,null),$.return=J,$;al(J,$)}return null}function Te(J,$,ie,Le){var nt=$!==null?$.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return nt!==null?null:z(J,$,""+ie,Le);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:return ie.key===nt?W(J,$,ie,Le):null;case N:return ie.key===nt?ue(J,$,ie,Le):null;case he:return nt=ie._init,Te(J,$,nt(ie._payload),Le)}if(Xe(ie)||pe(ie))return nt!==null?null:Ce(J,$,ie,Le,null);al(J,ie)}return null}function Ve(J,$,ie,Le,nt){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return J=J.get(ie)||null,z($,J,""+Le,nt);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case P:return J=J.get(Le.key===null?ie:Le.key)||null,W($,J,Le,nt);case N:return J=J.get(Le.key===null?ie:Le.key)||null,ue($,J,Le,nt);case he:var at=Le._init;return Ve(J,$,ie,at(Le._payload),nt)}if(Xe(Le)||pe(Le))return J=J.get(ie)||null,Ce($,J,Le,nt,null);al($,Le)}return null}function qe(J,$,ie,Le){for(var nt=null,at=null,ot=$,ht=$=0,yn=null;ot!==null&&ht<ie.length;ht++){ot.index>ht?(yn=ot,ot=null):yn=ot.sibling;var Nt=Te(J,ot,ie[ht],Le);if(Nt===null){ot===null&&(ot=yn);break}i&&ot&&Nt.alternate===null&&s(J,ot),$=_(Nt,$,ht),at===null?nt=Nt:at.sibling=Nt,at=Nt,ot=yn}if(ht===ie.length)return l(J,ot),Xt&&ts(J,ht),nt;if(ot===null){for(;ht<ie.length;ht++)ot=Re(J,ie[ht],Le),ot!==null&&($=_(ot,$,ht),at===null?nt=ot:at.sibling=ot,at=ot);return Xt&&ts(J,ht),nt}for(ot=d(J,ot);ht<ie.length;ht++)yn=Ve(ot,J,ht,ie[ht],Le),yn!==null&&(i&&yn.alternate!==null&&ot.delete(yn.key===null?ht:yn.key),$=_(yn,$,ht),at===null?nt=yn:at.sibling=yn,at=yn);return i&&ot.forEach(function(kr){return s(J,kr)}),Xt&&ts(J,ht),nt}function Qe(J,$,ie,Le){var nt=pe(ie);if(typeof nt!="function")throw Error(t(150));if(ie=nt.call(ie),ie==null)throw Error(t(151));for(var at=nt=null,ot=$,ht=$=0,yn=null,Nt=ie.next();ot!==null&&!Nt.done;ht++,Nt=ie.next()){ot.index>ht?(yn=ot,ot=null):yn=ot.sibling;var kr=Te(J,ot,Nt.value,Le);if(kr===null){ot===null&&(ot=yn);break}i&&ot&&kr.alternate===null&&s(J,ot),$=_(kr,$,ht),at===null?nt=kr:at.sibling=kr,at=kr,ot=yn}if(Nt.done)return l(J,ot),Xt&&ts(J,ht),nt;if(ot===null){for(;!Nt.done;ht++,Nt=ie.next())Nt=Re(J,Nt.value,Le),Nt!==null&&($=_(Nt,$,ht),at===null?nt=Nt:at.sibling=Nt,at=Nt);return Xt&&ts(J,ht),nt}for(ot=d(J,ot);!Nt.done;ht++,Nt=ie.next())Nt=Ve(ot,J,ht,Nt.value,Le),Nt!==null&&(i&&Nt.alternate!==null&&ot.delete(Nt.key===null?ht:Nt.key),$=_(Nt,$,ht),at===null?nt=Nt:at.sibling=Nt,at=Nt);return i&&ot.forEach(function(b0){return s(J,b0)}),Xt&&ts(J,ht),nt}function en(J,$,ie,Le){if(typeof ie=="object"&&ie!==null&&ie.type===D&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:e:{for(var nt=ie.key,at=$;at!==null;){if(at.key===nt){if(nt=ie.type,nt===D){if(at.tag===7){l(J,at.sibling),$=p(at,ie.props.children),$.return=J,J=$;break e}}else if(at.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===he&&bp(nt)===at.type){l(J,at.sibling),$=p(at,ie.props),$.ref=ja(J,at,ie),$.return=J,J=$;break e}l(J,at);break}else s(J,at);at=at.sibling}ie.type===D?($=us(ie.props.children,J.mode,Le,ie.key),$.return=J,J=$):(Le=Pl(ie.type,ie.key,ie.props,null,J.mode,Le),Le.ref=ja(J,$,ie),Le.return=J,J=Le)}return b(J);case N:e:{for(at=ie.key;$!==null;){if($.key===at)if($.tag===4&&$.stateNode.containerInfo===ie.containerInfo&&$.stateNode.implementation===ie.implementation){l(J,$.sibling),$=p($,ie.children||[]),$.return=J,J=$;break e}else{l(J,$);break}else s(J,$);$=$.sibling}$=hd(ie,J.mode,Le),$.return=J,J=$}return b(J);case he:return at=ie._init,en(J,$,at(ie._payload),Le)}if(Xe(ie))return qe(J,$,ie,Le);if(pe(ie))return Qe(J,$,ie,Le);al(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,$!==null&&$.tag===6?(l(J,$.sibling),$=p($,ie),$.return=J,J=$):(l(J,$),$=dd(ie,J.mode,Le),$.return=J,J=$),b(J)):l(J,$)}return en}var zs=Ap(!0),Cp=Ap(!1),ol=br(null),ll=null,Bs=null,Sc=null;function Ec(){Sc=Bs=ll=null}function Mc(i){var s=ol.current;Wt(ol),i._currentValue=s}function wc(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function Gs(i,s){ll=i,Sc=Bs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Yn=!0),i.firstContext=null)}function di(i){var s=i._currentValue;if(Sc!==i)if(i={context:i,memoizedValue:s,next:null},Bs===null){if(ll===null)throw Error(t(308));Bs=i,ll.dependencies={lanes:0,firstContext:i}}else Bs=Bs.next=i;return s}var ns=null;function Tc(i){ns===null?ns=[i]:ns.push(i)}function Rp(i,s,l,d){var p=s.interleaved;return p===null?(l.next=l,Tc(s)):(l.next=p.next,p.next=l),s.interleaved=l,Zi(i,d)}function Zi(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Rr=!1;function bc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pp(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Qi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Pr(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Dt&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,Zi(i,l)}return p=d.interleaved,p===null?(s.next=s,Tc(d)):(s.next=p.next,p.next=s),d.interleaved=s,Zi(i,l)}function ul(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,gn(i,l)}}function Lp(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=b:_=_.next=b,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function cl(i,s,l,d){var p=i.updateQueue;Rr=!1;var _=p.firstBaseUpdate,b=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var W=z,ue=W.next;W.next=null,b===null?_=ue:b.next=ue,b=W;var Ce=i.alternate;Ce!==null&&(Ce=Ce.updateQueue,z=Ce.lastBaseUpdate,z!==b&&(z===null?Ce.firstBaseUpdate=ue:z.next=ue,Ce.lastBaseUpdate=W))}if(_!==null){var Re=p.baseState;b=0,Ce=ue=W=null,z=_;do{var Te=z.lane,Ve=z.eventTime;if((d&Te)===Te){Ce!==null&&(Ce=Ce.next={eventTime:Ve,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var qe=i,Qe=z;switch(Te=s,Ve=l,Qe.tag){case 1:if(qe=Qe.payload,typeof qe=="function"){Re=qe.call(Ve,Re,Te);break e}Re=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Qe.payload,Te=typeof qe=="function"?qe.call(Ve,Re,Te):qe,Te==null)break e;Re=se({},Re,Te);break e;case 2:Rr=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,Te=p.effects,Te===null?p.effects=[z]:Te.push(z))}else Ve={eventTime:Ve,lane:Te,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ce===null?(ue=Ce=Ve,W=Re):Ce=Ce.next=Ve,b|=Te;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;Te=z,z=Te.next,Te.next=null,p.lastBaseUpdate=Te,p.shared.pending=null}}while(!0);if(Ce===null&&(W=Re),p.baseState=W,p.firstBaseUpdate=ue,p.lastBaseUpdate=Ce,s=p.shared.interleaved,s!==null){p=s;do b|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ss|=b,i.lanes=b,i.memoizedState=Re}}function Dp(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Xa={},Gi=br(Xa),$a=br(Xa),Ya=br(Xa);function is(i){if(i===Xa)throw Error(t(174));return i}function Ac(i,s){switch(Gt(Ya,s),Gt($a,i),Gt(Gi,Xa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:G(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=G(s,i)}Wt(Gi),Gt(Gi,s)}function Hs(){Wt(Gi),Wt($a),Wt(Ya)}function Np(i){is(Ya.current);var s=is(Gi.current),l=G(s,i.type);s!==l&&(Gt($a,i),Gt(Gi,l))}function Cc(i){$a.current===i&&(Wt(Gi),Wt($a))}var $t=br(0);function dl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Rc=[];function Pc(){for(var i=0;i<Rc.length;i++)Rc[i]._workInProgressVersionPrimary=null;Rc.length=0}var hl=T.ReactCurrentDispatcher,Lc=T.ReactCurrentBatchConfig,rs=0,Yt=null,on=null,vn=null,fl=!1,qa=!1,Ka=0,Yy=0;function Pn(){throw Error(t(321))}function Dc(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Mi(i[l],s[l]))return!1;return!0}function Nc(i,s,l,d,p,_){if(rs=_,Yt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,hl.current=i===null||i.memoizedState===null?Qy:Jy,i=l(d,p),qa){_=0;do{if(qa=!1,Ka=0,25<=_)throw Error(t(301));_+=1,vn=on=null,s.updateQueue=null,hl.current=e0,i=l(d,p)}while(qa)}if(hl.current=gl,s=on!==null&&on.next!==null,rs=0,vn=on=Yt=null,fl=!1,s)throw Error(t(300));return i}function Ic(){var i=Ka!==0;return Ka=0,i}function Hi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Yt.memoizedState=vn=i:vn=vn.next=i,vn}function hi(){if(on===null){var i=Yt.alternate;i=i!==null?i.memoizedState:null}else i=on.next;var s=vn===null?Yt.memoizedState:vn.next;if(s!==null)vn=s,on=i;else{if(i===null)throw Error(t(310));on=i,i={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},vn===null?Yt.memoizedState=vn=i:vn=vn.next=i}return vn}function Za(i,s){return typeof s=="function"?s(i):s}function Uc(i){var s=hi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=on,p=d.baseQueue,_=l.pending;if(_!==null){if(p!==null){var b=p.next;p.next=_.next,_.next=b}d.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,d=d.baseState;var z=b=null,W=null,ue=_;do{var Ce=ue.lane;if((rs&Ce)===Ce)W!==null&&(W=W.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),d=ue.hasEagerState?ue.eagerState:i(d,ue.action);else{var Re={lane:Ce,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};W===null?(z=W=Re,b=d):W=W.next=Re,Yt.lanes|=Ce,ss|=Ce}ue=ue.next}while(ue!==null&&ue!==_);W===null?b=d:W.next=z,Mi(d,s.memoizedState)||(Yn=!0),s.memoizedState=d,s.baseState=b,s.baseQueue=W,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do _=p.lane,Yt.lanes|=_,ss|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Fc(i){var s=hi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var b=p=p.next;do _=i(_,b.action),b=b.next;while(b!==p);Mi(_,s.memoizedState)||(Yn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,d]}function Ip(){}function Up(i,s){var l=Yt,d=hi(),p=s(),_=!Mi(d.memoizedState,p);if(_&&(d.memoizedState=p,Yn=!0),d=d.queue,kc(Op.bind(null,l,d,i),[i]),d.getSnapshot!==s||_||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,Qa(9,kp.bind(null,l,d,p,s),void 0,null),_n===null)throw Error(t(349));(rs&30)!==0||Fp(l,s,p)}return p}function Fp(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function kp(i,s,l,d){s.value=l,s.getSnapshot=d,zp(s)&&Bp(i)}function Op(i,s,l){return l(function(){zp(s)&&Bp(i)})}function zp(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Mi(i,l)}catch{return!0}}function Bp(i){var s=Zi(i,1);s!==null&&Ci(s,i,1,-1)}function Gp(i){var s=Hi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:i},s.queue=i,i=i.dispatch=Zy.bind(null,Yt,i),[s.memoizedState,i]}function Qa(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function Hp(){return hi().memoizedState}function pl(i,s,l,d){var p=Hi();Yt.flags|=i,p.memoizedState=Qa(1|s,l,void 0,d===void 0?null:d)}function ml(i,s,l,d){var p=hi();d=d===void 0?null:d;var _=void 0;if(on!==null){var b=on.memoizedState;if(_=b.destroy,d!==null&&Dc(d,b.deps)){p.memoizedState=Qa(s,l,_,d);return}}Yt.flags|=i,p.memoizedState=Qa(1|s,l,_,d)}function Vp(i,s){return pl(8390656,8,i,s)}function kc(i,s){return ml(2048,8,i,s)}function Wp(i,s){return ml(4,2,i,s)}function jp(i,s){return ml(4,4,i,s)}function Xp(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function $p(i,s,l){return l=l!=null?l.concat([i]):null,ml(4,4,Xp.bind(null,s,i),l)}function Oc(){}function Yp(i,s){var l=hi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Dc(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function qp(i,s){var l=hi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Dc(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function Kp(i,s,l){return(rs&21)===0?(i.baseState&&(i.baseState=!1,Yn=!0),i.memoizedState=l):(Mi(l,s)||(l=Bt(),Yt.lanes|=l,ss|=l,i.baseState=!0),s)}function qy(i,s){var l=Lt;Lt=l!==0&&4>l?l:4,i(!0);var d=Lc.transition;Lc.transition={};try{i(!1),s()}finally{Lt=l,Lc.transition=d}}function Zp(){return hi().memoizedState}function Ky(i,s,l){var d=Ir(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Qp(i))Jp(s,l);else if(l=Rp(i,s,l,d),l!==null){var p=Gn();Ci(l,i,d,p),em(l,s,d)}}function Zy(i,s,l){var d=Ir(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Qp(i))Jp(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var b=s.lastRenderedState,z=_(b,l);if(p.hasEagerState=!0,p.eagerState=z,Mi(z,b)){var W=s.interleaved;W===null?(p.next=p,Tc(s)):(p.next=W.next,W.next=p),s.interleaved=p;return}}catch{}finally{}l=Rp(i,s,p,d),l!==null&&(p=Gn(),Ci(l,i,d,p),em(l,s,d))}}function Qp(i){var s=i.alternate;return i===Yt||s!==null&&s===Yt}function Jp(i,s){qa=fl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function em(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,gn(i,l)}}var gl={readContext:di,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},Qy={readContext:di,useCallback:function(i,s){return Hi().memoizedState=[i,s===void 0?null:s],i},useContext:di,useEffect:Vp,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,pl(4194308,4,Xp.bind(null,s,i),l)},useLayoutEffect:function(i,s){return pl(4194308,4,i,s)},useInsertionEffect:function(i,s){return pl(4,2,i,s)},useMemo:function(i,s){var l=Hi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=Hi();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=Ky.bind(null,Yt,i),[d.memoizedState,i]},useRef:function(i){var s=Hi();return i={current:i},s.memoizedState=i},useState:Gp,useDebugValue:Oc,useDeferredValue:function(i){return Hi().memoizedState=i},useTransition:function(){var i=Gp(!1),s=i[0];return i=qy.bind(null,i[1]),Hi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=Yt,p=Hi();if(Xt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),_n===null)throw Error(t(349));(rs&30)!==0||Fp(d,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,Vp(Op.bind(null,d,_,i),[i]),d.flags|=2048,Qa(9,kp.bind(null,d,_,l,s),void 0,null),l},useId:function(){var i=Hi(),s=_n.identifierPrefix;if(Xt){var l=Ki,d=qi;l=(d&~(1<<32-mt(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ka++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=Yy++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},Jy={readContext:di,useCallback:Yp,useContext:di,useEffect:kc,useImperativeHandle:$p,useInsertionEffect:Wp,useLayoutEffect:jp,useMemo:qp,useReducer:Uc,useRef:Hp,useState:function(){return Uc(Za)},useDebugValue:Oc,useDeferredValue:function(i){var s=hi();return Kp(s,on.memoizedState,i)},useTransition:function(){var i=Uc(Za)[0],s=hi().memoizedState;return[i,s]},useMutableSource:Ip,useSyncExternalStore:Up,useId:Zp,unstable_isNewReconciler:!1},e0={readContext:di,useCallback:Yp,useContext:di,useEffect:kc,useImperativeHandle:$p,useInsertionEffect:Wp,useLayoutEffect:jp,useMemo:qp,useReducer:Fc,useRef:Hp,useState:function(){return Fc(Za)},useDebugValue:Oc,useDeferredValue:function(i){var s=hi();return on===null?s.memoizedState=i:Kp(s,on.memoizedState,i)},useTransition:function(){var i=Fc(Za)[0],s=hi().memoizedState;return[i,s]},useMutableSource:Ip,useSyncExternalStore:Up,useId:Zp,unstable_isNewReconciler:!1};function Ti(i,s){if(i&&i.defaultProps){s=se({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function zc(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:se({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var vl={isMounted:function(i){return(i=i._reactInternals)?Oi(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=Gn(),p=Ir(i),_=Qi(d,p);_.payload=s,l!=null&&(_.callback=l),s=Pr(i,_,p),s!==null&&(Ci(s,i,p,d),ul(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=Gn(),p=Ir(i),_=Qi(d,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Pr(i,_,p),s!==null&&(Ci(s,i,p,d),ul(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Gn(),d=Ir(i),p=Qi(l,d);p.tag=2,s!=null&&(p.callback=s),s=Pr(i,p,d),s!==null&&(Ci(s,i,d,l),ul(s,i,d))}};function tm(i,s,l,d,p,_,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,b):s.prototype&&s.prototype.isPureReactComponent?!Oa(l,d)||!Oa(p,_):!0}function nm(i,s,l){var d=!1,p=Ar,_=s.contextType;return typeof _=="object"&&_!==null?_=di(_):(p=$n(s)?Jr:Rn.current,d=s.contextTypes,_=(d=d!=null)?Us(i,p):Ar),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=vl,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function im(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&vl.enqueueReplaceState(s,s.state,null)}function Bc(i,s,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},bc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=di(_):(_=$n(s)?Jr:Rn.current,p.context=Us(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(zc(i,s,_,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&vl.enqueueReplaceState(p,p.state,null),cl(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Vs(i,s){try{var l="",d=s;do l+=ge(d),d=d.return;while(d);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Gc(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Hc(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function rm(i,s,l){l=Qi(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){wl||(wl=!0,id=d),Hc(i,s)},l}function sm(i,s,l){l=Qi(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;l.payload=function(){return d(p)},l.callback=function(){Hc(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Hc(i,s),typeof d!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function am(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new t0;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(l)||(p.add(l),i=m0.bind(null,i,s,l),s.then(i,i))}function om(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function lm(i,s,l,d,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Qi(-1,1),s.tag=2,Pr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var n0=T.ReactCurrentOwner,Yn=!1;function Bn(i,s,l,d){s.child=i===null?Cp(s,null,l,d):zs(s,i.child,l,d)}function um(i,s,l,d,p){l=l.render;var _=s.ref;return Gs(s,p),d=Nc(i,s,l,d,_,p),l=Ic(),i!==null&&!Yn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Ji(i,s,p)):(Xt&&l&&gc(s),s.flags|=1,Bn(i,s,d,p),s.child)}function cm(i,s,l,d,p){if(i===null){var _=l.type;return typeof _=="function"&&!cd(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,dm(i,s,_,d,p)):(i=Pl(l.type,null,d,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var b=_.memoizedProps;if(l=l.compare,l=l!==null?l:Oa,l(b,d)&&i.ref===s.ref)return Ji(i,s,p)}return s.flags|=1,i=Fr(_,d),i.ref=s.ref,i.return=s,s.child=i}function dm(i,s,l,d,p){if(i!==null){var _=i.memoizedProps;if(Oa(_,d)&&i.ref===s.ref)if(Yn=!1,s.pendingProps=d=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Yn=!0);else return s.lanes=i.lanes,Ji(i,s,p)}return Vc(i,s,l,d,p)}function hm(i,s,l){var d=s.pendingProps,p=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(js,ri),ri|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(js,ri),ri|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,Gt(js,ri),ri|=d}else _!==null?(d=_.baseLanes|l,s.memoizedState=null):d=l,Gt(js,ri),ri|=d;return Bn(i,s,p,l),s.child}function fm(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Vc(i,s,l,d,p){var _=$n(l)?Jr:Rn.current;return _=Us(s,_),Gs(s,p),l=Nc(i,s,l,d,_,p),d=Ic(),i!==null&&!Yn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Ji(i,s,p)):(Xt&&d&&gc(s),s.flags|=1,Bn(i,s,l,p),s.child)}function pm(i,s,l,d,p){if($n(l)){var _=!0;tl(s)}else _=!1;if(Gs(s,p),s.stateNode===null)yl(i,s),nm(s,l,d),Bc(s,l,d,p),d=!0;else if(i===null){var b=s.stateNode,z=s.memoizedProps;b.props=z;var W=b.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=di(ue):(ue=$n(l)?Jr:Rn.current,ue=Us(s,ue));var Ce=l.getDerivedStateFromProps,Re=typeof Ce=="function"||typeof b.getSnapshotBeforeUpdate=="function";Re||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==d||W!==ue)&&im(s,b,d,ue),Rr=!1;var Te=s.memoizedState;b.state=Te,cl(s,d,b,p),W=s.memoizedState,z!==d||Te!==W||Xn.current||Rr?(typeof Ce=="function"&&(zc(s,l,Ce,d),W=s.memoizedState),(z=Rr||tm(s,l,z,d,Te,W,ue))?(Re||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=W),b.props=d,b.state=W,b.context=ue,d=z):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{b=s.stateNode,Pp(i,s),z=s.memoizedProps,ue=s.type===s.elementType?z:Ti(s.type,z),b.props=ue,Re=s.pendingProps,Te=b.context,W=l.contextType,typeof W=="object"&&W!==null?W=di(W):(W=$n(l)?Jr:Rn.current,W=Us(s,W));var Ve=l.getDerivedStateFromProps;(Ce=typeof Ve=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==Re||Te!==W)&&im(s,b,d,W),Rr=!1,Te=s.memoizedState,b.state=Te,cl(s,d,b,p);var qe=s.memoizedState;z!==Re||Te!==qe||Xn.current||Rr?(typeof Ve=="function"&&(zc(s,l,Ve,d),qe=s.memoizedState),(ue=Rr||tm(s,l,ue,d,Te,qe,W)||!1)?(Ce||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(d,qe,W),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(d,qe,W)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||z===i.memoizedProps&&Te===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Te===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=qe),b.props=d,b.state=qe,b.context=W,d=ue):(typeof b.componentDidUpdate!="function"||z===i.memoizedProps&&Te===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Te===i.memoizedState||(s.flags|=1024),d=!1)}return Wc(i,s,l,d,_,p)}function Wc(i,s,l,d,p,_){fm(i,s);var b=(s.flags&128)!==0;if(!d&&!b)return p&&yp(s,l,!1),Ji(i,s,_);d=s.stateNode,n0.current=s;var z=b&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&b?(s.child=zs(s,i.child,null,_),s.child=zs(s,null,z,_)):Bn(i,s,z,_),s.memoizedState=d.state,p&&yp(s,l,!0),s.child}function mm(i){var s=i.stateNode;s.pendingContext?vp(i,s.pendingContext,s.pendingContext!==s.context):s.context&&vp(i,s.context,!1),Ac(i,s.containerInfo)}function gm(i,s,l,d,p){return Os(),xc(p),s.flags|=256,Bn(i,s,l,d),s.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function Xc(i){return{baseLanes:i,cachePool:null,transitions:null}}function vm(i,s,l){var d=s.pendingProps,p=$t.current,_=!1,b=(s.flags&128)!==0,z;if((z=b)||(z=i!==null&&i.memoizedState===null?!1:(p&2)!==0),z?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Gt($t,p&1),i===null)return yc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=d.children,i=d.fallback,_?(d=s.mode,_=s.child,b={mode:"hidden",children:b},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=b):_=Ll(b,d,0,null),i=us(i,d,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Xc(l),s.memoizedState=jc,i):$c(s,b));if(p=i.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return i0(i,s,b,d,z,p,l);if(_){_=d.fallback,b=s.mode,p=i.child,z=p.sibling;var W={mode:"hidden",children:d.children};return(b&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=W,s.deletions=null):(d=Fr(p,W),d.subtreeFlags=p.subtreeFlags&14680064),z!==null?_=Fr(z,_):(_=us(_,b,l,null),_.flags|=2),_.return=s,d.return=s,d.sibling=_,s.child=d,d=_,_=s.child,b=i.child.memoizedState,b=b===null?Xc(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},_.memoizedState=b,_.childLanes=i.childLanes&~l,s.memoizedState=jc,d}return _=i.child,i=_.sibling,d=Fr(_,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function $c(i,s){return s=Ll({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function _l(i,s,l,d){return d!==null&&xc(d),zs(s,i.child,null,l),i=$c(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function i0(i,s,l,d,p,_,b){if(l)return s.flags&256?(s.flags&=-257,d=Gc(Error(t(422))),_l(i,s,b,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=d.fallback,p=s.mode,d=Ll({mode:"visible",children:d.children},p,0,null),_=us(_,p,b,null),_.flags|=2,d.return=s,_.return=s,d.sibling=_,s.child=d,(s.mode&1)!==0&&zs(s,i.child,null,b),s.child.memoizedState=Xc(b),s.memoizedState=jc,_);if((s.mode&1)===0)return _l(i,s,b,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var z=d.dgst;return d=z,_=Error(t(419)),d=Gc(_,d,void 0),_l(i,s,b,d)}if(z=(b&i.childLanes)!==0,Yn||z){if(d=_n,d!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|b))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Zi(i,p),Ci(d,i,p,-1))}return ud(),d=Gc(Error(t(421))),_l(i,s,b,d)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=g0.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,ii=Tr(p.nextSibling),ni=s,Xt=!0,wi=null,i!==null&&(ui[ci++]=qi,ui[ci++]=Ki,ui[ci++]=es,qi=i.id,Ki=i.overflow,es=s),s=$c(s,d.children),s.flags|=4096,s)}function _m(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),wc(i.return,s,l)}function Yc(i,s,l,d,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=p)}function ym(i,s,l){var d=s.pendingProps,p=d.revealOrder,_=d.tail;if(Bn(i,s,d.children,l),d=$t.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&_m(i,l,s);else if(i.tag===19)_m(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Gt($t,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&dl(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Yc(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&dl(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Yc(s,!0,l,null,_);break;case"together":Yc(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function yl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Ji(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ss|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Fr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Fr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function r0(i,s,l){switch(s.tag){case 3:mm(s),Os();break;case 5:Np(s);break;case 1:$n(s.type)&&tl(s);break;case 4:Ac(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;Gt(ol,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Gt($t,$t.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?vm(i,s,l):(Gt($t,$t.current&1),i=Ji(i,s,l),i!==null?i.sibling:null);Gt($t,$t.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return ym(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt($t,$t.current),d)break;return null;case 22:case 23:return s.lanes=0,hm(i,s,l)}return Ji(i,s,l)}var xm,qc,Sm,Em;xm=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},qc=function(){},Sm=function(i,s,l,d){var p=i.memoizedProps;if(p!==d){i=s.stateNode,is(Gi.current);var _=null;switch(l){case"input":p=V(i,p),d=V(i,d),_=[];break;case"select":p=se({},p,{value:void 0}),d=se({},d,{value:void 0}),_=[];break;case"textarea":p=A(i,p),d=A(i,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Qo)}st(l,d);var b;l=null;for(ue in p)if(!d.hasOwnProperty(ue)&&p.hasOwnProperty(ue)&&p[ue]!=null)if(ue==="style"){var z=p[ue];for(b in z)z.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?_||(_=[]):(_=_||[]).push(ue,null));for(ue in d){var W=d[ue];if(z=p!=null?p[ue]:void 0,d.hasOwnProperty(ue)&&W!==z&&(W!=null||z!=null))if(ue==="style")if(z){for(b in z)!z.hasOwnProperty(b)||W&&W.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in W)W.hasOwnProperty(b)&&z[b]!==W[b]&&(l||(l={}),l[b]=W[b])}else l||(_||(_=[]),_.push(ue,l)),l=W;else ue==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,z=z?z.__html:void 0,W!=null&&z!==W&&(_=_||[]).push(ue,W)):ue==="children"?typeof W!="string"&&typeof W!="number"||(_=_||[]).push(ue,""+W):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(W!=null&&ue==="onScroll"&&Vt("scroll",i),_||z===W||(_=[])):(_=_||[]).push(ue,W))}l&&(_=_||[]).push("style",l);var ue=_;(s.updateQueue=ue)&&(s.flags|=4)}},Em=function(i,s,l,d){l!==d&&(s.flags|=4)};function Ja(i,s){if(!Xt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Ln(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function s0(i,s,l){var d=s.pendingProps;switch(vc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(s),null;case 1:return $n(s.type)&&el(),Ln(s),null;case 3:return d=s.stateNode,Hs(),Wt(Xn),Wt(Rn),Pc(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(sl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,wi!==null&&(ad(wi),wi=null))),qc(i,s),Ln(s),null;case 5:Cc(s);var p=is(Ya.current);if(l=s.type,i!==null&&s.stateNode!=null)Sm(i,s,l,d,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Ln(s),null}if(i=is(Gi.current),sl(s)){d=s.stateNode,l=s.type;var _=s.memoizedProps;switch(d[Bi]=s,d[Va]=_,i=(s.mode&1)!==0,l){case"dialog":Vt("cancel",d),Vt("close",d);break;case"iframe":case"object":case"embed":Vt("load",d);break;case"video":case"audio":for(p=0;p<Ba.length;p++)Vt(Ba[p],d);break;case"source":Vt("error",d);break;case"img":case"image":case"link":Vt("error",d),Vt("load",d);break;case"details":Vt("toggle",d);break;case"input":nn(d,_),Vt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Vt("invalid",d);break;case"textarea":te(d,_),Vt("invalid",d)}st(l,_),p=null;for(var b in _)if(_.hasOwnProperty(b)){var z=_[b];b==="children"?typeof z=="string"?d.textContent!==z&&(_.suppressHydrationWarning!==!0&&Zo(d.textContent,z,i),p=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&Zo(d.textContent,z,i),p=["children",""+z]):a.hasOwnProperty(b)&&z!=null&&b==="onScroll"&&Vt("scroll",d)}switch(l){case"input":Rt(d),Je(d,_,!0);break;case"textarea":Rt(d),we(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=Qo)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=ye(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=b.createElement(l,{is:d.is}):(i=b.createElement(l),l==="select"&&(b=i,d.multiple?b.multiple=!0:d.size&&(b.size=d.size))):i=b.createElementNS(i,l),i[Bi]=s,i[Va]=d,xm(i,s,!1,!1),s.stateNode=i;e:{switch(b=it(l,d),l){case"dialog":Vt("cancel",i),Vt("close",i),p=d;break;case"iframe":case"object":case"embed":Vt("load",i),p=d;break;case"video":case"audio":for(p=0;p<Ba.length;p++)Vt(Ba[p],i);p=d;break;case"source":Vt("error",i),p=d;break;case"img":case"image":case"link":Vt("error",i),Vt("load",i),p=d;break;case"details":Vt("toggle",i),p=d;break;case"input":nn(i,d),p=V(i,d),Vt("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=se({},d,{value:void 0}),Vt("invalid",i);break;case"textarea":te(i,d),p=A(i,d),Vt("invalid",i);break;default:p=d}st(l,p),z=p;for(_ in z)if(z.hasOwnProperty(_)){var W=z[_];_==="style"?Ze(i,W):_==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&ve(i,W)):_==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&Ee(i,W):typeof W=="number"&&Ee(i,""+W):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?W!=null&&_==="onScroll"&&Vt("scroll",i):W!=null&&L(i,_,W,b))}switch(l){case"input":Rt(i),Je(i,d,!1);break;case"textarea":Rt(i),we(i);break;case"option":d.value!=null&&i.setAttribute("value",""+be(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?F(i,!!d.multiple,_,!1):d.defaultValue!=null&&F(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Qo)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ln(s),null;case 6:if(i&&s.stateNode!=null)Em(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=is(Ya.current),is(Gi.current),sl(s)){if(d=s.stateNode,l=s.memoizedProps,d[Bi]=s,(_=d.nodeValue!==l)&&(i=ni,i!==null))switch(i.tag){case 3:Zo(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Zo(d.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Bi]=s,s.stateNode=d}return Ln(s),null;case 13:if(Wt($t),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Xt&&ii!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Tp(),Os(),s.flags|=98560,_=!1;else if(_=sl(s),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Bi]=s}else Os(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ln(s),_=!1}else wi!==null&&(ad(wi),wi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||($t.current&1)!==0?ln===0&&(ln=3):ud())),s.updateQueue!==null&&(s.flags|=4),Ln(s),null);case 4:return Hs(),qc(i,s),i===null&&Ga(s.stateNode.containerInfo),Ln(s),null;case 10:return Mc(s.type._context),Ln(s),null;case 17:return $n(s.type)&&el(),Ln(s),null;case 19:if(Wt($t),_=s.memoizedState,_===null)return Ln(s),null;if(d=(s.flags&128)!==0,b=_.rendering,b===null)if(d)Ja(_,!1);else{if(ln!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(b=dl(i),b!==null){for(s.flags|=128,Ja(_,!1),d=b.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)_=l,i=d,_.flags&=14680066,b=_.alternate,b===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=b.childLanes,_.lanes=b.lanes,_.child=b.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=b.memoizedProps,_.memoizedState=b.memoizedState,_.updateQueue=b.updateQueue,_.type=b.type,i=b.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Gt($t,$t.current&1|2),s.child}i=i.sibling}_.tail!==null&&ee()>Xs&&(s.flags|=128,d=!0,Ja(_,!1),s.lanes=4194304)}else{if(!d)if(i=dl(b),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ja(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!Xt)return Ln(s),null}else 2*ee()-_.renderingStartTime>Xs&&l!==1073741824&&(s.flags|=128,d=!0,Ja(_,!1),s.lanes=4194304);_.isBackwards?(b.sibling=s.child,s.child=b):(l=_.last,l!==null?l.sibling=b:s.child=b,_.last=b)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=ee(),s.sibling=null,l=$t.current,Gt($t,d?l&1|2:l&1),s):(Ln(s),null);case 22:case 23:return ld(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(ri&1073741824)!==0&&(Ln(s),s.subtreeFlags&6&&(s.flags|=8192)):Ln(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function a0(i,s){switch(vc(s),s.tag){case 1:return $n(s.type)&&el(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Hs(),Wt(Xn),Wt(Rn),Pc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Cc(s),null;case 13:if(Wt($t),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Os()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Wt($t),null;case 4:return Hs(),null;case 10:return Mc(s.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var xl=!1,Dn=!1,o0=typeof WeakSet=="function"?WeakSet:Set,je=null;function Ws(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Jt(i,s,d)}else l.current=null}function Kc(i,s,l){try{l()}catch(d){Jt(i,s,d)}}var Mm=!1;function l0(i,s){if(lc=Bo,i=tp(),ec(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var b=0,z=-1,W=-1,ue=0,Ce=0,Re=i,Te=null;t:for(;;){for(var Ve;Re!==l||p!==0&&Re.nodeType!==3||(z=b+p),Re!==_||d!==0&&Re.nodeType!==3||(W=b+d),Re.nodeType===3&&(b+=Re.nodeValue.length),(Ve=Re.firstChild)!==null;)Te=Re,Re=Ve;for(;;){if(Re===i)break t;if(Te===l&&++ue===p&&(z=b),Te===_&&++Ce===d&&(W=b),(Ve=Re.nextSibling)!==null)break;Re=Te,Te=Re.parentNode}Re=Ve}l=z===-1||W===-1?null:{start:z,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(uc={focusedElem:i,selectionRange:l},Bo=!1,je=s;je!==null;)if(s=je,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,je=i;else for(;je!==null;){s=je;try{var qe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Qe=qe.memoizedProps,en=qe.memoizedState,J=s.stateNode,$=J.getSnapshotBeforeUpdate(s.elementType===s.type?Qe:Ti(s.type,Qe),en);J.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var ie=s.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){Jt(s,s.return,Le)}if(i=s.sibling,i!==null){i.return=s.return,je=i;break}je=s.return}return qe=Mm,Mm=!1,qe}function eo(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Kc(s,l,_)}p=p.next}while(p!==d)}}function Sl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Zc(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function wm(i){var s=i.alternate;s!==null&&(i.alternate=null,wm(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Bi],delete s[Va],delete s[fc],delete s[Wy],delete s[jy])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Tm(i){return i.tag===5||i.tag===3||i.tag===4}function bm(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Tm(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Qc(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Qo));else if(d!==4&&(i=i.child,i!==null))for(Qc(i,s,l),i=i.sibling;i!==null;)Qc(i,s,l),i=i.sibling}function Jc(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Jc(i,s,l),i=i.sibling;i!==null;)Jc(i,s,l),i=i.sibling}var En=null,bi=!1;function Lr(i,s,l){for(l=l.child;l!==null;)Am(i,s,l),l=l.sibling}function Am(i,s,l){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(lt,l)}catch{}switch(l.tag){case 5:Dn||Ws(l,s);case 6:var d=En,p=bi;En=null,Lr(i,s,l),En=d,bi=p,En!==null&&(bi?(i=En,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):En.removeChild(l.stateNode));break;case 18:En!==null&&(bi?(i=En,l=l.stateNode,i.nodeType===8?hc(i.parentNode,l):i.nodeType===1&&hc(i,l),Da(i)):hc(En,l.stateNode));break;case 4:d=En,p=bi,En=l.stateNode.containerInfo,bi=!0,Lr(i,s,l),En=d,bi=p;break;case 0:case 11:case 14:case 15:if(!Dn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,b=_.destroy;_=_.tag,b!==void 0&&((_&2)!==0||(_&4)!==0)&&Kc(l,s,b),p=p.next}while(p!==d)}Lr(i,s,l);break;case 1:if(!Dn&&(Ws(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(z){Jt(l,s,z)}Lr(i,s,l);break;case 21:Lr(i,s,l);break;case 22:l.mode&1?(Dn=(d=Dn)||l.memoizedState!==null,Lr(i,s,l),Dn=d):Lr(i,s,l);break;default:Lr(i,s,l)}}function Cm(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new o0),s.forEach(function(d){var p=v0.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function Ai(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var _=i,b=s,z=b;e:for(;z!==null;){switch(z.tag){case 5:En=z.stateNode,bi=!1;break e;case 3:En=z.stateNode.containerInfo,bi=!0;break e;case 4:En=z.stateNode.containerInfo,bi=!0;break e}z=z.return}if(En===null)throw Error(t(160));Am(_,b,p),En=null,bi=!1;var W=p.alternate;W!==null&&(W.return=null),p.return=null}catch(ue){Jt(p,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Rm(s,i),s=s.sibling}function Rm(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ai(s,i),Vi(i),d&4){try{eo(3,i,i.return),Sl(3,i)}catch(Qe){Jt(i,i.return,Qe)}try{eo(5,i,i.return)}catch(Qe){Jt(i,i.return,Qe)}}break;case 1:Ai(s,i),Vi(i),d&512&&l!==null&&Ws(l,l.return);break;case 5:if(Ai(s,i),Vi(i),d&512&&l!==null&&Ws(l,l.return),i.flags&32){var p=i.stateNode;try{Ee(p,"")}catch(Qe){Jt(i,i.return,Qe)}}if(d&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,b=l!==null?l.memoizedProps:_,z=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&gt(p,_),it(z,b);var ue=it(z,_);for(b=0;b<W.length;b+=2){var Ce=W[b],Re=W[b+1];Ce==="style"?Ze(p,Re):Ce==="dangerouslySetInnerHTML"?ve(p,Re):Ce==="children"?Ee(p,Re):L(p,Ce,Re,ue)}switch(z){case"input":pt(p,_);break;case"textarea":Se(p,_);break;case"select":var Te=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ve=_.value;Ve!=null?F(p,!!_.multiple,Ve,!1):Te!==!!_.multiple&&(_.defaultValue!=null?F(p,!!_.multiple,_.defaultValue,!0):F(p,!!_.multiple,_.multiple?[]:"",!1))}p[Va]=_}catch(Qe){Jt(i,i.return,Qe)}}break;case 6:if(Ai(s,i),Vi(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(Qe){Jt(i,i.return,Qe)}}break;case 3:if(Ai(s,i),Vi(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Da(s.containerInfo)}catch(Qe){Jt(i,i.return,Qe)}break;case 4:Ai(s,i),Vi(i);break;case 13:Ai(s,i),Vi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(nd=ee())),d&4&&Cm(i);break;case 22:if(Ce=l!==null&&l.memoizedState!==null,i.mode&1?(Dn=(ue=Dn)||Ce,Ai(s,i),Dn=ue):Ai(s,i),Vi(i),d&8192){if(ue=i.memoizedState!==null,(i.stateNode.isHidden=ue)&&!Ce&&(i.mode&1)!==0)for(je=i,Ce=i.child;Ce!==null;){for(Re=je=Ce;je!==null;){switch(Te=je,Ve=Te.child,Te.tag){case 0:case 11:case 14:case 15:eo(4,Te,Te.return);break;case 1:Ws(Te,Te.return);var qe=Te.stateNode;if(typeof qe.componentWillUnmount=="function"){d=Te,l=Te.return;try{s=d,qe.props=s.memoizedProps,qe.state=s.memoizedState,qe.componentWillUnmount()}catch(Qe){Jt(d,l,Qe)}}break;case 5:Ws(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Dm(Re);continue}}Ve!==null?(Ve.return=Te,je=Ve):Dm(Re)}Ce=Ce.sibling}e:for(Ce=null,Re=i;;){if(Re.tag===5){if(Ce===null){Ce=Re;try{p=Re.stateNode,ue?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Re.stateNode,W=Re.memoizedProps.style,b=W!=null&&W.hasOwnProperty("display")?W.display:null,z.style.display=Ye("display",b))}catch(Qe){Jt(i,i.return,Qe)}}}else if(Re.tag===6){if(Ce===null)try{Re.stateNode.nodeValue=ue?"":Re.memoizedProps}catch(Qe){Jt(i,i.return,Qe)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===i)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===i)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===i)break e;Ce===Re&&(Ce=null),Re=Re.return}Ce===Re&&(Ce=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Ai(s,i),Vi(i),d&4&&Cm(i);break;case 21:break;default:Ai(s,i),Vi(i)}}function Vi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(Tm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(Ee(p,""),d.flags&=-33);var _=bm(i);Jc(i,_,p);break;case 3:case 4:var b=d.stateNode.containerInfo,z=bm(i);Qc(i,z,b);break;default:throw Error(t(161))}}catch(W){Jt(i,i.return,W)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function u0(i,s,l){je=i,Pm(i)}function Pm(i,s,l){for(var d=(i.mode&1)!==0;je!==null;){var p=je,_=p.child;if(p.tag===22&&d){var b=p.memoizedState!==null||xl;if(!b){var z=p.alternate,W=z!==null&&z.memoizedState!==null||Dn;z=xl;var ue=Dn;if(xl=b,(Dn=W)&&!ue)for(je=p;je!==null;)b=je,W=b.child,b.tag===22&&b.memoizedState!==null?Nm(p):W!==null?(W.return=b,je=W):Nm(p);for(;_!==null;)je=_,Pm(_),_=_.sibling;je=p,xl=z,Dn=ue}Lm(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,je=_):Lm(i)}}function Lm(i){for(;je!==null;){var s=je;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Dn||Sl(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Dn)if(l===null)d.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Ti(s.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Dp(s,_,d);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Dp(s,b,l)}break;case 5:var z=s.stateNode;if(l===null&&s.flags&4){l=z;var W=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var Ce=ue.memoizedState;if(Ce!==null){var Re=Ce.dehydrated;Re!==null&&Da(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||s.flags&512&&Zc(s)}catch(Te){Jt(s,s.return,Te)}}if(s===i){je=null;break}if(l=s.sibling,l!==null){l.return=s.return,je=l;break}je=s.return}}function Dm(i){for(;je!==null;){var s=je;if(s===i){je=null;break}var l=s.sibling;if(l!==null){l.return=s.return,je=l;break}je=s.return}}function Nm(i){for(;je!==null;){var s=je;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Sl(4,s)}catch(W){Jt(s,l,W)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch(W){Jt(s,p,W)}}var _=s.return;try{Zc(s)}catch(W){Jt(s,_,W)}break;case 5:var b=s.return;try{Zc(s)}catch(W){Jt(s,b,W)}}}catch(W){Jt(s,s.return,W)}if(s===i){je=null;break}var z=s.sibling;if(z!==null){z.return=s.return,je=z;break}je=s.return}}var c0=Math.ceil,El=T.ReactCurrentDispatcher,ed=T.ReactCurrentOwner,fi=T.ReactCurrentBatchConfig,Dt=0,_n=null,rn=null,Mn=0,ri=0,js=br(0),ln=0,to=null,ss=0,Ml=0,td=0,no=null,qn=null,nd=0,Xs=1/0,er=null,wl=!1,id=null,Dr=null,Tl=!1,Nr=null,bl=0,io=0,rd=null,Al=-1,Cl=0;function Gn(){return(Dt&6)!==0?ee():Al!==-1?Al:Al=ee()}function Ir(i){return(i.mode&1)===0?1:(Dt&2)!==0&&Mn!==0?Mn&-Mn:$y.transition!==null?(Cl===0&&(Cl=Bt()),Cl):(i=Lt,i!==0||(i=window.event,i=i===void 0?16:Uf(i.type)),i)}function Ci(i,s,l,d){if(50<io)throw io=0,rd=null,Error(t(185));mn(i,l,d),((Dt&2)===0||i!==_n)&&(i===_n&&((Dt&2)===0&&(Ml|=l),ln===4&&Ur(i,Mn)),Kn(i,d),l===1&&Dt===0&&(s.mode&1)===0&&(Xs=ee()+500,nl&&Cr()))}function Kn(i,s){var l=i.callbackNode;zn(i,s);var d=An(i,i===_n?Mn:0);if(d===0)l!==null&&R(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&R(l),s===1)i.tag===0?Xy(Um.bind(null,i)):xp(Um.bind(null,i)),Hy(function(){(Dt&6)===0&&Cr()}),l=null;else{switch(zi(d)){case 1:l=Pe;break;case 4:l=ze;break;case 16:l=He;break;case 536870912:l=dt;break;default:l=He}l=Vm(l,Im.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Im(i,s){if(Al=-1,Cl=0,(Dt&6)!==0)throw Error(t(327));var l=i.callbackNode;if($s()&&i.callbackNode!==l)return null;var d=An(i,i===_n?Mn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=Rl(i,d);else{s=d;var p=Dt;Dt|=2;var _=km();(_n!==i||Mn!==s)&&(er=null,Xs=ee()+500,os(i,s));do try{f0();break}catch(z){Fm(i,z)}while(!0);Ec(),El.current=_,Dt=p,rn!==null?s=0:(_n=null,Mn=0,s=ln)}if(s!==0){if(s===2&&(p=Xi(i),p!==0&&(d=p,s=sd(i,p))),s===1)throw l=to,os(i,0),Ur(i,d),Kn(i,ee()),l;if(s===6)Ur(i,d);else{if(p=i.current.alternate,(d&30)===0&&!d0(p)&&(s=Rl(i,d),s===2&&(_=Xi(i),_!==0&&(d=_,s=sd(i,_))),s===1))throw l=to,os(i,0),Ur(i,d),Kn(i,ee()),l;switch(i.finishedWork=p,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:ls(i,qn,er);break;case 3:if(Ur(i,d),(d&130023424)===d&&(s=nd+500-ee(),10<s)){if(An(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){Gn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=dc(ls.bind(null,i,qn,er),s);break}ls(i,qn,er);break;case 4:if(Ur(i,d),(d&4194240)===d)break;for(s=i.eventTimes,p=-1;0<d;){var b=31-mt(d);_=1<<b,b=s[b],b>p&&(p=b),d&=~_}if(d=p,d=ee()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*c0(d/1960))-d,10<d){i.timeoutHandle=dc(ls.bind(null,i,qn,er),d);break}ls(i,qn,er);break;case 5:ls(i,qn,er);break;default:throw Error(t(329))}}}return Kn(i,ee()),i.callbackNode===l?Im.bind(null,i):null}function sd(i,s){var l=no;return i.current.memoizedState.isDehydrated&&(os(i,s).flags|=256),i=Rl(i,s),i!==2&&(s=qn,qn=l,s!==null&&ad(s)),i}function ad(i){qn===null?qn=i:qn.push.apply(qn,i)}function d0(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],_=p.getSnapshot;p=p.value;try{if(!Mi(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ur(i,s){for(s&=~td,s&=~Ml,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-mt(s),d=1<<l;i[l]=-1,s&=~d}}function Um(i){if((Dt&6)!==0)throw Error(t(327));$s();var s=An(i,0);if((s&1)===0)return Kn(i,ee()),null;var l=Rl(i,s);if(i.tag!==0&&l===2){var d=Xi(i);d!==0&&(s=d,l=sd(i,d))}if(l===1)throw l=to,os(i,0),Ur(i,s),Kn(i,ee()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ls(i,qn,er),Kn(i,ee()),null}function od(i,s){var l=Dt;Dt|=1;try{return i(s)}finally{Dt=l,Dt===0&&(Xs=ee()+500,nl&&Cr())}}function as(i){Nr!==null&&Nr.tag===0&&(Dt&6)===0&&$s();var s=Dt;Dt|=1;var l=fi.transition,d=Lt;try{if(fi.transition=null,Lt=1,i)return i()}finally{Lt=d,fi.transition=l,Dt=s,(Dt&6)===0&&Cr()}}function ld(){ri=js.current,Wt(js)}function os(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,Gy(l)),rn!==null)for(l=rn.return;l!==null;){var d=l;switch(vc(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&el();break;case 3:Hs(),Wt(Xn),Wt(Rn),Pc();break;case 5:Cc(d);break;case 4:Hs();break;case 13:Wt($t);break;case 19:Wt($t);break;case 10:Mc(d.type._context);break;case 22:case 23:ld()}l=l.return}if(_n=i,rn=i=Fr(i.current,null),Mn=ri=s,ln=0,to=null,td=Ml=ss=0,qn=no=null,ns!==null){for(s=0;s<ns.length;s++)if(l=ns[s],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,_=l.pending;if(_!==null){var b=_.next;_.next=p,d.next=b}l.pending=d}ns=null}return i}function Fm(i,s){do{var l=rn;try{if(Ec(),hl.current=gl,fl){for(var d=Yt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}fl=!1}if(rs=0,vn=on=Yt=null,qa=!1,Ka=0,ed.current=null,l===null||l.return===null){ln=1,to=s,rn=null;break}e:{var _=i,b=l.return,z=l,W=s;if(s=Mn,z.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ue=W,Ce=z,Re=Ce.tag;if((Ce.mode&1)===0&&(Re===0||Re===11||Re===15)){var Te=Ce.alternate;Te?(Ce.updateQueue=Te.updateQueue,Ce.memoizedState=Te.memoizedState,Ce.lanes=Te.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var Ve=om(b);if(Ve!==null){Ve.flags&=-257,lm(Ve,b,z,_,s),Ve.mode&1&&am(_,ue,s),s=Ve,W=ue;var qe=s.updateQueue;if(qe===null){var Qe=new Set;Qe.add(W),s.updateQueue=Qe}else qe.add(W);break e}else{if((s&1)===0){am(_,ue,s),ud();break e}W=Error(t(426))}}else if(Xt&&z.mode&1){var en=om(b);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),lm(en,b,z,_,s),xc(Vs(W,z));break e}}_=W=Vs(W,z),ln!==4&&(ln=2),no===null?no=[_]:no.push(_),_=b;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var J=rm(_,W,s);Lp(_,J);break e;case 1:z=W;var $=_.type,ie=_.stateNode;if((_.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Dr===null||!Dr.has(ie)))){_.flags|=65536,s&=-s,_.lanes|=s;var Le=sm(_,z,s);Lp(_,Le);break e}}_=_.return}while(_!==null)}zm(l)}catch(nt){s=nt,rn===l&&l!==null&&(rn=l=l.return);continue}break}while(!0)}function km(){var i=El.current;return El.current=gl,i===null?gl:i}function ud(){(ln===0||ln===3||ln===2)&&(ln=4),_n===null||(ss&268435455)===0&&(Ml&268435455)===0||Ur(_n,Mn)}function Rl(i,s){var l=Dt;Dt|=2;var d=km();(_n!==i||Mn!==s)&&(er=null,os(i,s));do try{h0();break}catch(p){Fm(i,p)}while(!0);if(Ec(),Dt=l,El.current=d,rn!==null)throw Error(t(261));return _n=null,Mn=0,ln}function h0(){for(;rn!==null;)Om(rn)}function f0(){for(;rn!==null&&!K();)Om(rn)}function Om(i){var s=Hm(i.alternate,i,ri);i.memoizedProps=i.pendingProps,s===null?zm(i):rn=s,ed.current=null}function zm(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=s0(l,s,ri),l!==null){rn=l;return}}else{if(l=a0(l,s),l!==null){l.flags&=32767,rn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{ln=6,rn=null;return}}if(s=s.sibling,s!==null){rn=s;return}rn=s=i}while(s!==null);ln===0&&(ln=5)}function ls(i,s,l){var d=Lt,p=fi.transition;try{fi.transition=null,Lt=1,p0(i,s,l,d)}finally{fi.transition=p,Lt=d}return null}function p0(i,s,l,d){do $s();while(Nr!==null);if((Dt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Sn(i,_),i===_n&&(rn=_n=null,Mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Tl||(Tl=!0,Vm(He,function(){return $s(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=fi.transition,fi.transition=null;var b=Lt;Lt=1;var z=Dt;Dt|=4,ed.current=null,l0(i,l),Rm(l,i),Iy(uc),Bo=!!lc,uc=lc=null,i.current=l,u0(l),de(),Dt=z,Lt=b,fi.transition=_}else i.current=l;if(Tl&&(Tl=!1,Nr=i,bl=p),_=i.pendingLanes,_===0&&(Dr=null),Mt(l.stateNode),Kn(i,ee()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(wl)throw wl=!1,i=id,id=null,i;return(bl&1)!==0&&i.tag!==0&&$s(),_=i.pendingLanes,(_&1)!==0?i===rd?io++:(io=0,rd=i):io=0,Cr(),null}function $s(){if(Nr!==null){var i=zi(bl),s=fi.transition,l=Lt;try{if(fi.transition=null,Lt=16>i?16:i,Nr===null)var d=!1;else{if(i=Nr,Nr=null,bl=0,(Dt&6)!==0)throw Error(t(331));var p=Dt;for(Dt|=4,je=i.current;je!==null;){var _=je,b=_.child;if((je.flags&16)!==0){var z=_.deletions;if(z!==null){for(var W=0;W<z.length;W++){var ue=z[W];for(je=ue;je!==null;){var Ce=je;switch(Ce.tag){case 0:case 11:case 15:eo(8,Ce,_)}var Re=Ce.child;if(Re!==null)Re.return=Ce,je=Re;else for(;je!==null;){Ce=je;var Te=Ce.sibling,Ve=Ce.return;if(wm(Ce),Ce===ue){je=null;break}if(Te!==null){Te.return=Ve,je=Te;break}je=Ve}}}var qe=_.alternate;if(qe!==null){var Qe=qe.child;if(Qe!==null){qe.child=null;do{var en=Qe.sibling;Qe.sibling=null,Qe=en}while(Qe!==null)}}je=_}}if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,je=b;else e:for(;je!==null;){if(_=je,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:eo(9,_,_.return)}var J=_.sibling;if(J!==null){J.return=_.return,je=J;break e}je=_.return}}var $=i.current;for(je=$;je!==null;){b=je;var ie=b.child;if((b.subtreeFlags&2064)!==0&&ie!==null)ie.return=b,je=ie;else e:for(b=$;je!==null;){if(z=je,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Sl(9,z)}}catch(nt){Jt(z,z.return,nt)}if(z===b){je=null;break e}var Le=z.sibling;if(Le!==null){Le.return=z.return,je=Le;break e}je=z.return}}if(Dt=p,Cr(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(lt,i)}catch{}d=!0}return d}finally{Lt=l,fi.transition=s}}return!1}function Bm(i,s,l){s=Vs(l,s),s=rm(i,s,1),i=Pr(i,s,1),s=Gn(),i!==null&&(mn(i,1,s),Kn(i,s))}function Jt(i,s,l){if(i.tag===3)Bm(i,i,l);else for(;s!==null;){if(s.tag===3){Bm(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Dr===null||!Dr.has(d))){i=Vs(l,i),i=sm(s,i,1),s=Pr(s,i,1),i=Gn(),s!==null&&(mn(s,1,i),Kn(s,i));break}}s=s.return}}function m0(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=Gn(),i.pingedLanes|=i.suspendedLanes&l,_n===i&&(Mn&l)===l&&(ln===4||ln===3&&(Mn&130023424)===Mn&&500>ee()-nd?os(i,0):td|=l),Kn(i,s)}function Gm(i,s){s===0&&((i.mode&1)===0?s=1:(s=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var l=Gn();i=Zi(i,s),i!==null&&(mn(i,s,l),Kn(i,l))}function g0(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Gm(i,l)}function v0(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Gm(i,l)}var Hm;Hm=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Xn.current)Yn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Yn=!1,r0(i,s,l);Yn=(i.flags&131072)!==0}else Yn=!1,Xt&&(s.flags&1048576)!==0&&Sp(s,rl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;yl(i,s),i=s.pendingProps;var p=Us(s,Rn.current);Gs(s,l),p=Nc(null,s,d,i,p,l);var _=Ic();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,$n(d)?(_=!0,tl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,bc(s),p.updater=vl,s.stateNode=p,p._reactInternals=s,Bc(s,d,i,l),s=Wc(null,s,d,!0,_,l)):(s.tag=0,Xt&&_&&gc(s),Bn(null,s,p,l),s=s.child),s;case 16:d=s.elementType;e:{switch(yl(i,s),i=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=y0(d),i=Ti(d,i),p){case 0:s=Vc(null,s,d,i,l);break e;case 1:s=pm(null,s,d,i,l);break e;case 11:s=um(null,s,d,i,l);break e;case 14:s=cm(null,s,d,Ti(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Ti(d,p),Vc(i,s,d,p,l);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Ti(d,p),pm(i,s,d,p,l);case 3:e:{if(mm(s),i===null)throw Error(t(387));d=s.pendingProps,_=s.memoizedState,p=_.element,Pp(i,s),cl(s,d,null,l);var b=s.memoizedState;if(d=b.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Vs(Error(t(423)),s),s=gm(i,s,d,l,p);break e}else if(d!==p){p=Vs(Error(t(424)),s),s=gm(i,s,d,l,p);break e}else for(ii=Tr(s.stateNode.containerInfo.firstChild),ni=s,Xt=!0,wi=null,l=Cp(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Os(),d===p){s=Ji(i,s,l);break e}Bn(i,s,d,l)}s=s.child}return s;case 5:return Np(s),i===null&&yc(s),d=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,b=p.children,cc(d,p)?b=null:_!==null&&cc(d,_)&&(s.flags|=32),fm(i,s),Bn(i,s,b,l),s.child;case 6:return i===null&&yc(s),null;case 13:return vm(i,s,l);case 4:return Ac(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=zs(s,null,d,l):Bn(i,s,d,l),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Ti(d,p),um(i,s,d,p,l);case 7:return Bn(i,s,s.pendingProps,l),s.child;case 8:return Bn(i,s,s.pendingProps.children,l),s.child;case 12:return Bn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,_=s.memoizedProps,b=p.value,Gt(ol,d._currentValue),d._currentValue=b,_!==null)if(Mi(_.value,b)){if(_.children===p.children&&!Xn.current){s=Ji(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var z=_.dependencies;if(z!==null){b=_.child;for(var W=z.firstContext;W!==null;){if(W.context===d){if(_.tag===1){W=Qi(-1,l&-l),W.tag=2;var ue=_.updateQueue;if(ue!==null){ue=ue.shared;var Ce=ue.pending;Ce===null?W.next=W:(W.next=Ce.next,Ce.next=W),ue.pending=W}}_.lanes|=l,W=_.alternate,W!==null&&(W.lanes|=l),wc(_.return,l,s),z.lanes|=l;break}W=W.next}}else if(_.tag===10)b=_.type===s.type?null:_.child;else if(_.tag===18){if(b=_.return,b===null)throw Error(t(341));b.lanes|=l,z=b.alternate,z!==null&&(z.lanes|=l),wc(b,l,s),b=_.sibling}else b=_.child;if(b!==null)b.return=_;else for(b=_;b!==null;){if(b===s){b=null;break}if(_=b.sibling,_!==null){_.return=b.return,b=_;break}b=b.return}_=b}Bn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,Gs(s,l),p=di(p),d=d(p),s.flags|=1,Bn(i,s,d,l),s.child;case 14:return d=s.type,p=Ti(d,s.pendingProps),p=Ti(d.type,p),cm(i,s,d,p,l);case 15:return dm(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Ti(d,p),yl(i,s),s.tag=1,$n(d)?(i=!0,tl(s)):i=!1,Gs(s,l),nm(s,d,p),Bc(s,d,p,l),Wc(null,s,d,!0,i,l);case 19:return ym(i,s,l);case 22:return hm(i,s,l)}throw Error(t(156,s.tag))};function Vm(i,s){return ko(i,s)}function _0(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(i,s,l,d){return new _0(i,s,l,d)}function cd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function y0(i){if(typeof i=="function")return cd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===q)return 11;if(i===ae)return 14}return 2}function Fr(i,s){var l=i.alternate;return l===null?(l=pi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Pl(i,s,l,d,p,_){var b=2;if(d=i,typeof i=="function")cd(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case D:return us(l.children,p,_,s);case O:b=8,p|=8;break;case C:return i=pi(12,l,s,p|2),i.elementType=C,i.lanes=_,i;case Q:return i=pi(13,l,s,p),i.elementType=Q,i.lanes=_,i;case ne:return i=pi(19,l,s,p),i.elementType=ne,i.lanes=_,i;case me:return Ll(l,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case E:b=10;break e;case k:b=9;break e;case q:b=11;break e;case ae:b=14;break e;case he:b=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=pi(b,l,s,p),s.elementType=i,s.type=d,s.lanes=_,s}function us(i,s,l,d){return i=pi(7,i,d,s),i.lanes=l,i}function Ll(i,s,l,d){return i=pi(22,i,d,s),i.elementType=me,i.lanes=l,i.stateNode={isHidden:!1},i}function dd(i,s,l){return i=pi(6,i,null,s),i.lanes=l,i}function hd(i,s,l){return s=pi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function x0(i,s,l,d,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cn(0),this.expirationTimes=Cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function fd(i,s,l,d,p,_,b,z,W){return i=new x0(i,s,l,z,W),s===1?(s=1,_===!0&&(s|=8)):s=0,_=pi(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(_),i}function S0(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function Wm(i){if(!i)return Ar;i=i._reactInternals;e:{if(Oi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if($n(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if($n(l))return _p(i,l,s)}return s}function jm(i,s,l,d,p,_,b,z,W){return i=fd(l,d,!0,i,p,_,b,z,W),i.context=Wm(null),l=i.current,d=Gn(),p=Ir(l),_=Qi(d,p),_.callback=s??null,Pr(l,_,p),i.current.lanes=p,mn(i,p,d),Kn(i,d),i}function Dl(i,s,l,d){var p=s.current,_=Gn(),b=Ir(p);return l=Wm(l),s.context===null?s.context=l:s.pendingContext=l,s=Qi(_,b),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Pr(p,s,b),i!==null&&(Ci(i,p,b,_),ul(i,p,b)),b}function Nl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Xm(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function pd(i,s){Xm(i,s),(i=i.alternate)&&Xm(i,s)}function E0(){return null}var $m=typeof reportError=="function"?reportError:function(i){console.error(i)};function md(i){this._internalRoot=i}Il.prototype.render=md.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Dl(i,s,null,null)},Il.prototype.unmount=md.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;as(function(){Dl(null,i,null,null)}),s[$i]=null}};function Il(i){this._internalRoot=i}Il.prototype.unstable_scheduleHydration=function(i){if(i){var s=Pf();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Er.length&&s!==0&&s<Er[l].priority;l++);Er.splice(l,0,i),l===0&&Nf(i)}};function gd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Ul(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function M0(i,s,l,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var ue=Nl(b);_.call(ue)}}var b=jm(s,d,i,0,null,!1,!1,"",Ym);return i._reactRootContainer=b,i[$i]=b.current,Ga(i.nodeType===8?i.parentNode:i),as(),b}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var z=d;d=function(){var ue=Nl(W);z.call(ue)}}var W=fd(i,0,!1,null,null,!1,!1,"",Ym);return i._reactRootContainer=W,i[$i]=W.current,Ga(i.nodeType===8?i.parentNode:i),as(function(){Dl(s,W,l,d)}),W}function Fl(i,s,l,d,p){var _=l._reactRootContainer;if(_){var b=_;if(typeof p=="function"){var z=p;p=function(){var W=Nl(b);z.call(W)}}Dl(s,b,i,p)}else b=M0(l,s,i,p,d);return Nl(b)}Cf=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Et(s.pendingLanes);l!==0&&(gn(s,l|1),Kn(s,ee()),(Dt&6)===0&&(Xs=ee()+500,Cr()))}break;case 13:as(function(){var d=Zi(i,1);if(d!==null){var p=Gn();Ci(d,i,1,p)}}),pd(i,1)}},Gu=function(i){if(i.tag===13){var s=Zi(i,134217728);if(s!==null){var l=Gn();Ci(s,i,134217728,l)}pd(i,134217728)}},Rf=function(i){if(i.tag===13){var s=Ir(i),l=Zi(i,s);if(l!==null){var d=Gn();Ci(l,i,s,d)}pd(i,s)}},Pf=function(){return Lt},Lf=function(i,s){var l=Lt;try{return Lt=i,s()}finally{Lt=l}},De=function(i,s,l){switch(s){case"input":if(pt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var p=Jo(d);if(!p)throw Error(t(90));Pt(d),pt(d,p)}}}break;case"textarea":Se(i,l);break;case"select":s=l.value,s!=null&&F(i,!!l.multiple,s,!1)}},Ut=od,Ht=as;var w0={usingClientEntryPoint:!1,Events:[Wa,Ns,Jo,Ie,ct,od]},ro={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T0={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Uo(i),i===null?null:i.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||E0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{lt=kl.inject(T0),Ke=kl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0,Zn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(s))throw Error(t(200));return S0(i,s,null,l)},Zn.createRoot=function(i,s){if(!gd(i))throw Error(t(299));var l=!1,d="",p=$m;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=fd(i,1,!1,null,null,l,!1,d,p),i[$i]=s.current,Ga(i.nodeType===8?i.parentNode:i),new md(s)},Zn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Uo(s),i=i===null?null:i.stateNode,i},Zn.flushSync=function(i){return as(i)},Zn.hydrate=function(i,s,l){if(!Ul(s))throw Error(t(200));return Fl(null,i,s,!0,l)},Zn.hydrateRoot=function(i,s,l){if(!gd(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,_="",b=$m;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=jm(s,null,i,1,l??null,p,!1,_,b),i[$i]=s.current,Ga(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Il(s)},Zn.render=function(i,s,l){if(!Ul(s))throw Error(t(200));return Fl(null,i,s,!1,l)},Zn.unmountComponentAtNode=function(i){if(!Ul(i))throw Error(t(40));return i._reactRootContainer?(as(function(){Fl(null,null,i,!1,function(){i._reactRootContainer=null,i[$i]=null})}),!0):!1},Zn.unstable_batchedUpdates=od,Zn.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!Ul(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Fl(i,s,l,!1,d)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var ng;function I0(){if(ng)return yd.exports;ng=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yd.exports=N0(),yd.exports}var ig;function U0(){if(ig)return Ol;ig=1;var r=I0();return Ol.createRoot=r.createRoot,Ol.hydrateRoot=r.hydrateRoot,Ol}var F0=U0();const k0=of(F0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="176",O0=0,rg=1,z0=2,Uv=1,B0=2,ar=3,qr=0,Jn=1,lr=2,Xr=0,ha=1,sg=2,ag=3,og=4,G0=5,xs=100,H0=101,V0=102,W0=103,j0=104,X0=200,$0=201,Y0=202,q0=203,dh=204,hh=205,K0=206,Z0=207,Q0=208,J0=209,ex=210,tx=211,nx=212,ix=213,rx=214,fh=0,ph=1,mh=2,ma=3,gh=4,vh=5,_h=6,yh=7,Fv=0,sx=1,ax=2,$r=0,ox=1,lx=2,ux=3,cx=4,dx=5,hx=6,fx=7,kv=300,ga=301,va=302,xh=303,Sh=304,Iu=306,Eh=1e3,Es=1001,Mh=1002,ki=1003,px=1004,zl=1005,ji=1006,Ed=1007,Ms=1008,mr=1009,Ov=1010,zv=1011,Eo=1012,cf=1013,ws=1014,cr=1015,bo=1016,df=1017,hf=1018,Mo=1020,Bv=35902,Gv=1021,Hv=1022,Fi=1023,wo=1026,To=1027,Vv=1028,ff=1029,Wv=1030,pf=1031,mf=1033,Su=33776,Eu=33777,Mu=33778,wu=33779,wh=35840,Th=35841,bh=35842,Ah=35843,Ch=36196,Rh=37492,Ph=37496,Lh=37808,Dh=37809,Nh=37810,Ih=37811,Uh=37812,Fh=37813,kh=37814,Oh=37815,zh=37816,Bh=37817,Gh=37818,Hh=37819,Vh=37820,Wh=37821,Tu=36492,jh=36494,Xh=36495,jv=36283,$h=36284,Yh=36285,qh=36286,mx=3200,gx=3201,vx=0,_x=1,jr="",_i="srgb",_a="srgb-linear",Ru="linear",Ft="srgb",Ys=7680,lg=519,yx=512,xx=513,Sx=514,Xv=515,Ex=516,Mx=517,wx=518,Tx=519,ug=35044,cg="300 es",dr=2e3,Pu=2001;class Ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=Math.PI/180,Kh=180/Math.PI;function Ao(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function wt(r,e,t){return Math.max(e,Math.min(t,r))}function bx(r,e){return(r%e+e)%e}function wd(r,e,t){return(1-t)*r+t*e}function ao(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class kt{constructor(e=0,t=0){kt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*a+e.x,this.y=o*a+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,n,a,o,u,c,h,f){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,c,h,f)}set(e,t,n,a,o,u,c,h,f){const m=this.elements;return m[0]=e,m[1]=a,m[2]=c,m[3]=t,m[4]=o,m[5]=h,m[6]=n,m[7]=u,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],c=n[3],h=n[6],f=n[1],m=n[4],g=n[7],v=n[2],x=n[5],M=n[8],w=a[0],S=a[3],y=a[6],I=a[1],L=a[4],T=a[7],P=a[2],N=a[5],D=a[8];return o[0]=u*w+c*I+h*P,o[3]=u*S+c*L+h*N,o[6]=u*y+c*T+h*D,o[1]=f*w+m*I+g*P,o[4]=f*S+m*L+g*N,o[7]=f*y+m*T+g*D,o[2]=v*w+x*I+M*P,o[5]=v*S+x*L+M*N,o[8]=v*y+x*T+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8];return t*u*m-t*c*f-n*o*m+n*c*h+a*o*f-a*u*h}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=m*u-c*f,v=c*h-m*o,x=f*o-u*h,M=t*g+n*v+a*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(a*f-m*n)*w,e[2]=(c*n-a*u)*w,e[3]=v*w,e[4]=(m*t-a*h)*w,e[5]=(a*o-c*t)*w,e[6]=x*w,e[7]=(n*h-f*t)*w,e[8]=(u*t-n*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,u,c){const h=Math.cos(o),f=Math.sin(o);return this.set(n*h,n*f,-n*(h*u+f*c)+u+e,-a*f,a*h,-a*(-f*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Td.makeScale(e,t)),this}rotate(e){return this.premultiply(Td.makeRotation(-e)),this}translate(e,t){return this.premultiply(Td.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Td=new _t;function $v(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ax(){const r=Lu("canvas");return r.style.display="block",r}const dg={};function bu(r){r in dg||(dg[r]=!0,console.warn(r))}function Cx(r,e,t){return new Promise(function(n,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Rx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Px(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hg=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fg=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lx(){const r={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Ft&&(a.r=fr(a.r),a.g=fr(a.g),a.b=fr(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(a.r=fa(a.r),a.g=fa(a.g),a.b=fa(a.b))),a},fromWorkingColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},toWorkingColorSpace:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===jr?Ru:this.spaces[a].transfer},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[_a]:{primaries:e,whitePoint:n,transfer:Ru,toXYZ:hg,fromXYZ:fg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:hg,fromXYZ:fg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),r}const It=Lx();function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qs;class Dx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qs===void 0&&(qs=Lu("canvas")),qs.width=e.width,qs.height=e.height;const a=qs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=qs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=fr(o[u]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nx=0;class gf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,c=a.length;u<c;u++)a[u].isDataTexture?o.push(bd(a[u].image)):o.push(bd(a[u]))}else o=bd(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ix=0;class ei extends Ea{constructor(e=ei.DEFAULT_IMAGE,t=ei.DEFAULT_MAPPING,n=Es,a=Es,o=ji,u=Ms,c=Fi,h=mr,f=ei.DEFAULT_ANISOTROPY,m=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Ao(),this.name="",this.source=new gf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eh:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case Mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eh:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case Mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=kv;ei.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,n=0,a=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const h=e.elements,f=h[0],m=h[4],g=h[8],v=h[1],x=h[5],M=h[9],w=h[2],S=h[6],y=h[10];if(Math.abs(m-v)<.01&&Math.abs(g-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+w)<.1&&Math.abs(M+S)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,T=(x+1)/2,P=(y+1)/2,N=(m+v)/4,D=(g+w)/4,O=(M+S)/4;return L>T&&L>P?L<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(L),a=N/n,o=D/n):T>P?T<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(T),n=N/a,o=O/a):P<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(P),n=D/o,a=O/o),this.set(n,a,o,t),this}let I=Math.sqrt((S-M)*(S-M)+(g-w)*(g-w)+(v-m)*(v-m));return Math.abs(I)<.001&&(I=1),this.x=(S-M)/I,this.y=(g-w)/I,this.z=(v-m)/I,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ux extends Ea{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const a={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const o=new ei(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new gf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends Ux{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yv extends ei{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=ki,this.minFilter=ki,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fx extends ei{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=ki,this.minFilter=ki,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,u,c){let h=n[a+0],f=n[a+1],m=n[a+2],g=n[a+3];const v=o[u+0],x=o[u+1],M=o[u+2],w=o[u+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=w;return}if(g!==w||h!==v||f!==x||m!==M){let S=1-c;const y=h*v+f*x+m*M+g*w,I=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const P=Math.sqrt(L),N=Math.atan2(P,y*I);S=Math.sin(S*N)/P,c=Math.sin(c*N)/P}const T=c*I;if(h=h*S+v*T,f=f*S+x*T,m=m*S+M*T,g=g*S+w*T,S===1-c){const P=1/Math.sqrt(h*h+f*f+m*m+g*g);h*=P,f*=P,m*=P,g*=P}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,a,o,u){const c=n[a],h=n[a+1],f=n[a+2],m=n[a+3],g=o[u],v=o[u+1],x=o[u+2],M=o[u+3];return e[t]=c*M+m*g+h*x-f*v,e[t+1]=h*M+m*v+f*g-c*x,e[t+2]=f*M+m*x+c*v-h*g,e[t+3]=m*M-c*g-h*v-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,u=e._order,c=Math.cos,h=Math.sin,f=c(n/2),m=c(a/2),g=c(o/2),v=h(n/2),x=h(a/2),M=h(o/2);switch(u){case"XYZ":this._x=v*m*g+f*x*M,this._y=f*x*g-v*m*M,this._z=f*m*M+v*x*g,this._w=f*m*g-v*x*M;break;case"YXZ":this._x=v*m*g+f*x*M,this._y=f*x*g-v*m*M,this._z=f*m*M-v*x*g,this._w=f*m*g+v*x*M;break;case"ZXY":this._x=v*m*g-f*x*M,this._y=f*x*g+v*m*M,this._z=f*m*M+v*x*g,this._w=f*m*g-v*x*M;break;case"ZYX":this._x=v*m*g-f*x*M,this._y=f*x*g+v*m*M,this._z=f*m*M-v*x*g,this._w=f*m*g+v*x*M;break;case"YZX":this._x=v*m*g+f*x*M,this._y=f*x*g+v*m*M,this._z=f*m*M-v*x*g,this._w=f*m*g-v*x*M;break;case"XZY":this._x=v*m*g-f*x*M,this._y=f*x*g-v*m*M,this._z=f*m*M+v*x*g,this._w=f*m*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],u=t[1],c=t[5],h=t[9],f=t[2],m=t[6],g=t[10],v=n+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-h)*x,this._y=(o-f)*x,this._z=(u-a)*x}else if(n>c&&n>g){const x=2*Math.sqrt(1+n-c-g);this._w=(m-h)/x,this._x=.25*x,this._y=(a+u)/x,this._z=(o+f)/x}else if(c>g){const x=2*Math.sqrt(1+c-n-g);this._w=(o-f)/x,this._x=(a+u)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+g-n-c);this._w=(u-a)/x,this._x=(o+f)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,u=e._w,c=t._x,h=t._y,f=t._z,m=t._w;return this._x=n*m+u*c+a*f-o*h,this._y=a*m+u*h+o*c-n*f,this._z=o*m+u*f+n*h-a*c,this._w=u*m-n*c-a*h-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,u=this._w;let c=u*e._w+n*e._x+a*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=a,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*n+t*this._x,this._y=x*a+t*this._y,this._z=x*o+t*this._z,this.normalize(),this}const f=Math.sqrt(h),m=Math.atan2(f,c),g=Math.sin((1-t)*m)/f,v=Math.sin(t*m)/f;return this._w=u*g+this._w*v,this._x=n*g+this._x*v,this._y=a*g+this._y*v,this._z=o*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,t=0,n=0){ce.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,u=e.y,c=e.z,h=e.w,f=2*(u*a-c*n),m=2*(c*t-o*a),g=2*(o*n-u*t);return this.x=t+h*f+u*g-c*m,this.y=n+h*m+c*f-o*g,this.z=a+h*g+o*m-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,u=t.x,c=t.y,h=t.z;return this.x=a*h-o*c,this.y=o*u-n*h,this.z=n*c-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new ce,pg=new Co;class Ro{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ri):Ri.fromBufferAttribute(o,u),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bl.copy(n.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),Gl.subVectors(this.max,oo),Ks.subVectors(e.a,oo),Zs.subVectors(e.b,oo),Qs.subVectors(e.c,oo),Or.subVectors(Zs,Ks),zr.subVectors(Qs,Zs),cs.subVectors(Ks,Qs);let t=[0,-Or.z,Or.y,0,-zr.z,zr.y,0,-cs.z,cs.y,Or.z,0,-Or.x,zr.z,0,-zr.x,cs.z,0,-cs.x,-Or.y,Or.x,0,-zr.y,zr.x,0,-cs.y,cs.x,0];return!Cd(t,Ks,Zs,Qs,Gl)||(t=[1,0,0,0,1,0,0,0,1],!Cd(t,Ks,Zs,Qs,Gl))?!1:(Hl.crossVectors(Or,zr),t=[Hl.x,Hl.y,Hl.z],Cd(t,Ks,Zs,Qs,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tr=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Ri=new ce,Bl=new Ro,Ks=new ce,Zs=new ce,Qs=new ce,Or=new ce,zr=new ce,cs=new ce,oo=new ce,Gl=new ce,Hl=new ce,ds=new ce;function Cd(r,e,t,n,a){for(let o=0,u=r.length-3;o<=u;o+=3){ds.fromArray(r,o);const c=a.x*Math.abs(ds.x)+a.y*Math.abs(ds.y)+a.z*Math.abs(ds.z),h=e.dot(ds),f=t.dot(ds),m=n.dot(ds);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>c)return!1}return!0}const kx=new Ro,lo=new ce,Rd=new ce;class Po{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kx.setFromPoints(e).getCenter(n);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(lo,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Rd)),this.expandByPoint(lo.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nr=new ce,Pd=new ce,Vl=new ce,Br=new ce,Ld=new ce,Wl=new ce,Dd=new ce;class Uu{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Pd.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Pd);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Vl),c=Br.dot(this.direction),h=-Br.dot(Vl),f=Br.lengthSq(),m=Math.abs(1-u*u);let g,v,x,M;if(m>0)if(g=u*h-c,v=u*c-h,M=o*m,g>=0)if(v>=-M)if(v<=M){const w=1/m;g*=w,v*=w,x=g*(g+u*v+2*c)+v*(u*g+v+2*h)+f}else v=o,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v=-o,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v<=-M?(g=Math.max(0,-(-u*o+c)),v=g>0?-o:Math.min(Math.max(-o,-h),o),x=-g*g+v*(v+2*h)+f):v<=M?(g=0,v=Math.min(Math.max(-o,-h),o),x=v*(v+2*h)+f):(g=Math.max(0,-(u*o+c)),v=g>0?o:Math.min(Math.max(-o,-h),o),x=-g*g+v*(v+2*h)+f);else v=u>0?-o:o,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Pd).addScaledVector(Vl,v),x}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const n=nr.dot(this.direction),a=nr.dot(nr)-n*n,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),c=n-u,h=n+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,u,c,h;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,a=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,a=(e.min.x-v.x)*f),m>=0?(o=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(o=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),n>u||o>a||((o>n||isNaN(n))&&(n=o),(u<a||isNaN(a))&&(a=u),g>=0?(c=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),n>h||c>a)||((c>n||n!==n)&&(n=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,n,a,o){Ld.subVectors(t,e),Wl.subVectors(n,e),Dd.crossVectors(Ld,Wl);let u=this.direction.dot(Dd),c;if(u>0){if(a)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Br.subVectors(this.origin,e);const h=c*this.direction.dot(Wl.crossVectors(Br,Wl));if(h<0)return null;const f=c*this.direction.dot(Ld.cross(Br));if(f<0||h+f>u)return null;const m=-c*Br.dot(Dd);return m<0?null:this.at(m/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,n,a,o,u,c,h,f,m,g,v,x,M,w,S){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,c,h,f,m,g,v,x,M,w,S)}set(e,t,n,a,o,u,c,h,f,m,g,v,x,M,w,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=a,y[1]=o,y[5]=u,y[9]=c,y[13]=h,y[2]=f,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Js.setFromMatrixColumn(e,0).length(),o=1/Js.setFromMatrixColumn(e,1).length(),u=1/Js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,u=Math.cos(n),c=Math.sin(n),h=Math.cos(a),f=Math.sin(a),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const v=u*m,x=u*g,M=c*m,w=c*g;t[0]=h*m,t[4]=-h*g,t[8]=f,t[1]=x+M*f,t[5]=v-w*f,t[9]=-c*h,t[2]=w-v*f,t[6]=M+x*f,t[10]=u*h}else if(e.order==="YXZ"){const v=h*m,x=h*g,M=f*m,w=f*g;t[0]=v+w*c,t[4]=M*c-x,t[8]=u*f,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-M,t[6]=w+v*c,t[10]=u*h}else if(e.order==="ZXY"){const v=h*m,x=h*g,M=f*m,w=f*g;t[0]=v-w*c,t[4]=-u*g,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*m,t[9]=w-v*c,t[2]=-u*f,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const v=u*m,x=u*g,M=c*m,w=c*g;t[0]=h*m,t[4]=M*f-x,t[8]=v*f+w,t[1]=h*g,t[5]=w*f+v,t[9]=x*f-M,t[2]=-f,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,x=u*f,M=c*h,w=c*f;t[0]=h*m,t[4]=w-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-f*m,t[6]=x*g+M,t[10]=v-w*g}else if(e.order==="XZY"){const v=u*h,x=u*f,M=c*h,w=c*f;t[0]=h*m,t[4]=-g,t[8]=f*m,t[1]=v*g+w,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=c*m,t[10]=w*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ox,e,zx)}lookAt(e,t,n){const a=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Gr.crossVectors(n,si),Gr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Gr.crossVectors(n,si)),Gr.normalize(),jl.crossVectors(si,Gr),a[0]=Gr.x,a[4]=jl.x,a[8]=si.x,a[1]=Gr.y,a[5]=jl.y,a[9]=si.y,a[2]=Gr.z,a[6]=jl.z,a[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],c=n[4],h=n[8],f=n[12],m=n[1],g=n[5],v=n[9],x=n[13],M=n[2],w=n[6],S=n[10],y=n[14],I=n[3],L=n[7],T=n[11],P=n[15],N=a[0],D=a[4],O=a[8],C=a[12],E=a[1],k=a[5],q=a[9],Q=a[13],ne=a[2],ae=a[6],he=a[10],me=a[14],H=a[3],pe=a[7],se=a[11],B=a[15];return o[0]=u*N+c*E+h*ne+f*H,o[4]=u*D+c*k+h*ae+f*pe,o[8]=u*O+c*q+h*he+f*se,o[12]=u*C+c*Q+h*me+f*B,o[1]=m*N+g*E+v*ne+x*H,o[5]=m*D+g*k+v*ae+x*pe,o[9]=m*O+g*q+v*he+x*se,o[13]=m*C+g*Q+v*me+x*B,o[2]=M*N+w*E+S*ne+y*H,o[6]=M*D+w*k+S*ae+y*pe,o[10]=M*O+w*q+S*he+y*se,o[14]=M*C+w*Q+S*me+y*B,o[3]=I*N+L*E+T*ne+P*H,o[7]=I*D+L*k+T*ae+P*pe,o[11]=I*O+L*q+T*he+P*se,o[15]=I*C+L*Q+T*me+P*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],u=e[1],c=e[5],h=e[9],f=e[13],m=e[2],g=e[6],v=e[10],x=e[14],M=e[3],w=e[7],S=e[11],y=e[15];return M*(+o*h*g-a*f*g-o*c*v+n*f*v+a*c*x-n*h*x)+w*(+t*h*x-t*f*v+o*u*v-a*u*x+a*f*m-o*h*m)+S*(+t*f*g-t*c*x-o*u*g+n*u*x+o*c*m-n*f*m)+y*(-a*c*m-t*h*g+t*c*v+a*u*g-n*u*v+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=e[9],v=e[10],x=e[11],M=e[12],w=e[13],S=e[14],y=e[15],I=g*S*f-w*v*f+w*h*x-c*S*x-g*h*y+c*v*y,L=M*v*f-m*S*f-M*h*x+u*S*x+m*h*y-u*v*y,T=m*w*f-M*g*f+M*c*x-u*w*x-m*c*y+u*g*y,P=M*g*h-m*w*h-M*c*v+u*w*v+m*c*S-u*g*S,N=t*I+n*L+a*T+o*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=I*D,e[1]=(w*v*o-g*S*o-w*a*x+n*S*x+g*a*y-n*v*y)*D,e[2]=(c*S*o-w*h*o+w*a*f-n*S*f-c*a*y+n*h*y)*D,e[3]=(g*h*o-c*v*o-g*a*f+n*v*f+c*a*x-n*h*x)*D,e[4]=L*D,e[5]=(m*S*o-M*v*o+M*a*x-t*S*x-m*a*y+t*v*y)*D,e[6]=(M*h*o-u*S*o-M*a*f+t*S*f+u*a*y-t*h*y)*D,e[7]=(u*v*o-m*h*o+m*a*f-t*v*f-u*a*x+t*h*x)*D,e[8]=T*D,e[9]=(M*g*o-m*w*o-M*n*x+t*w*x+m*n*y-t*g*y)*D,e[10]=(u*w*o-M*c*o+M*n*f-t*w*f-u*n*y+t*c*y)*D,e[11]=(m*c*o-u*g*o-m*n*f+t*g*f+u*n*x-t*c*x)*D,e[12]=P*D,e[13]=(m*w*a-M*g*a+M*n*v-t*w*v-m*n*S+t*g*S)*D,e[14]=(M*c*a-u*w*a-M*n*h+t*w*h+u*n*S-t*c*S)*D,e[15]=(u*g*a-m*c*a+m*n*h-t*g*h-u*n*v+t*c*v)*D,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,u=e.x,c=e.y,h=e.z,f=o*u,m=o*c;return this.set(f*u+n,f*c-a*h,f*h+a*c,0,f*c+a*h,m*c+n,m*h-a*u,0,f*h-a*c,m*h+a*u,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,u){return this.set(1,n,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,u=t._y,c=t._z,h=t._w,f=o+o,m=u+u,g=c+c,v=o*f,x=o*m,M=o*g,w=u*m,S=u*g,y=c*g,I=h*f,L=h*m,T=h*g,P=n.x,N=n.y,D=n.z;return a[0]=(1-(w+y))*P,a[1]=(x+T)*P,a[2]=(M-L)*P,a[3]=0,a[4]=(x-T)*N,a[5]=(1-(v+y))*N,a[6]=(S+I)*N,a[7]=0,a[8]=(M+L)*D,a[9]=(S-I)*D,a[10]=(1-(v+w))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=Js.set(a[0],a[1],a[2]).length();const u=Js.set(a[4],a[5],a[6]).length(),c=Js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Pi.copy(this);const f=1/o,m=1/u,g=1/c;return Pi.elements[0]*=f,Pi.elements[1]*=f,Pi.elements[2]*=f,Pi.elements[4]*=m,Pi.elements[5]*=m,Pi.elements[6]*=m,Pi.elements[8]*=g,Pi.elements[9]*=g,Pi.elements[10]*=g,t.setFromRotationMatrix(Pi),n.x=o,n.y=u,n.z=c,this}makePerspective(e,t,n,a,o,u,c=dr){const h=this.elements,f=2*o/(t-e),m=2*o/(n-a),g=(t+e)/(t-e),v=(n+a)/(n-a);let x,M;if(c===dr)x=-(u+o)/(u-o),M=-2*u*o/(u-o);else if(c===Pu)x=-u/(u-o),M=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,a,o,u,c=dr){const h=this.elements,f=1/(t-e),m=1/(n-a),g=1/(u-o),v=(t+e)*f,x=(n+a)*m;let M,w;if(c===dr)M=(u+o)*g,w=-2*g;else if(c===Pu)M=o*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=w,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Js=new ce,Pi=new qt,Ox=new ce(0,0,0),zx=new ce(1,1,1),Gr=new ce,jl=new ce,si=new ce,mg=new qt,gg=new Co;class gr{constructor(e=0,t=0,n=0,a=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],u=a[4],c=a[8],h=a[1],f=a[5],m=a[9],g=a[2],v=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gg.setFromEuler(this),this.setFromQuaternion(gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bx=0;const vg=new ce,ea=new Co,ir=new qt,Xl=new ce,uo=new ce,Gx=new ce,Hx=new Co,_g=new ce(1,0,0),yg=new ce(0,1,0),xg=new ce(0,0,1),Sg={type:"added"},Vx={type:"removed"},ta={type:"childadded",child:null},Nd={type:"childremoved",child:null};class Un extends Ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new ce,t=new gr,n=new Co,a=new ce(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new _t}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(_g,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(xg,e)}translateOnAxis(e,t){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_g,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xl.copy(e):Xl.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(uo,Xl,this.up):ir.lookAt(Xl,uo,this.up),this.quaternion.setFromRotationMatrix(ir),a&&(ir.extractRotation(a.matrixWorld),ea.setFromRotationMatrix(ir),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sg),ta.child=e,this.dispatchEvent(ta),ta.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vx),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sg),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,Gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(c=>({...c})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const g=h[f];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(o(e.materials,this.material[h]));a.material=c}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(o(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),f=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),M.length>0&&(n.nodes=M)}return n.object=a,n;function u(c){const h=[];for(const f in c){const m=c[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}Un.DEFAULT_UP=new ce(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new ce,rr=new ce,Id=new ce,sr=new ce,na=new ce,ia=new ce,Eg=new ce,Ud=new ce,Fd=new ce,kd=new ce,Od=new tn,zd=new tn,Bd=new tn;class Ii{constructor(e=new ce,t=new ce,n=new ce){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Li.subVectors(e,t),a.cross(Li);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){Li.subVectors(a,t),rr.subVectors(n,t),Id.subVectors(e,t);const u=Li.dot(Li),c=Li.dot(rr),h=Li.dot(Id),f=rr.dot(rr),m=rr.dot(Id),g=u*f-c*c;if(g===0)return o.set(0,0,0),null;const v=1/g,x=(f*h-c*m)*v,M=(u*m-c*h)*v;return o.set(1-x-M,M,x)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,a,o,u,c,h){return this.getBarycoord(e,t,n,a,sr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,sr.x),h.addScaledVector(u,sr.y),h.addScaledVector(c,sr.z),h)}static getInterpolatedAttribute(e,t,n,a,o,u){return Od.setScalar(0),zd.setScalar(0),Bd.setScalar(0),Od.fromBufferAttribute(e,t),zd.fromBufferAttribute(e,n),Bd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Od,o.x),u.addScaledVector(zd,o.y),u.addScaledVector(Bd,o.z),u}static isFrontFacing(e,t,n,a){return Li.subVectors(n,t),rr.subVectors(e,t),Li.cross(rr).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Li.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return Ii.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let u,c;na.subVectors(a,n),ia.subVectors(o,n),Ud.subVectors(e,n);const h=na.dot(Ud),f=ia.dot(Ud);if(h<=0&&f<=0)return t.copy(n);Fd.subVectors(e,a);const m=na.dot(Fd),g=ia.dot(Fd);if(m>=0&&g<=m)return t.copy(a);const v=h*g-m*f;if(v<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(n).addScaledVector(na,u);kd.subVectors(e,o);const x=na.dot(kd),M=ia.dot(kd);if(M>=0&&x<=M)return t.copy(o);const w=x*f-h*M;if(w<=0&&f>=0&&M<=0)return c=f/(f-M),t.copy(n).addScaledVector(ia,c);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return Eg.subVectors(o,a),c=(g-m)/(g-m+(x-M)),t.copy(a).addScaledVector(Eg,c);const y=1/(S+w+v);return u=w*y,c=v*y,t.copy(n).addScaledVector(na,u).addScaledVector(ia,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function Gd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=It.workingColorSpace){if(e=bx(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=Gd(u,o,e+1/3),this.g=Gd(u,o,e),this.b=Gd(u,o,e-1/3)}return It.toWorkingColorSpace(this,a),this}setStyle(e,t=_i){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],c=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const n=qv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return It.fromWorkingColorSpace(In.copy(this),e),Math.round(wt(In.r*255,0,255))*65536+Math.round(wt(In.g*255,0,255))*256+Math.round(wt(In.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(In.copy(this),t);const n=In.r,a=In.g,o=In.b,u=Math.max(n,a,o),c=Math.min(n,a,o);let h,f;const m=(c+u)/2;if(c===u)h=0,f=0;else{const g=u-c;switch(f=m<=.5?g/(u+c):g/(2-u-c),u){case n:h=(a-o)/g+(a<o?6:0);break;case a:h=(o-n)/g+2;break;case o:h=(n-a)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=_i){It.fromWorkingColorSpace(In.copy(this),e);const t=In.r,n=In.g,a=In.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL($l);const n=wd(Hr.h,$l.h,t),a=wd(Hr.s,$l.s,t),o=wd(Hr.l,$l.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ct;Ct.NAMES=qv;let Wx=0;class Ma extends Ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=ha,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=hh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ha&&(n.blending=this.blending),this.side!==qr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dh&&(n.blendSrc=this.blendSrc),this.blendDst!==hh&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const u=[];for(const c in o){const h=o[c];delete h.metadata,u.push(h)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kv extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=Fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new ce,Yl=new kt;let jx=0;class Wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ug,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yl.fromBufferAttribute(this,t),Yl.applyMatrix3(e),this.setXY(t,Yl.x,Yl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ao(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),a=Qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),a=Qn(a,this.array),o=Qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ug&&(e.usage=this.usage),e}}class Zv extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qv extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yr extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xx=0;const mi=new qt,Hd=new Un,ra=new ce,ai=new Ro,co=new Ro,xn=new ce;class li extends Ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?Qv:Zv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new _t().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return Hd.lookAt(e),Hd.updateMatrix(),this.applyMatrix4(Hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yr(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];ai.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];co.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(ai.min,co.min),ai.expandByPoint(xn),xn.addVectors(ai.max,co.max),ai.expandByPoint(xn)):(ai.expandByPoint(co.min),ai.expandByPoint(co.max))}ai.getCenter(n);let a=0;for(let o=0,u=e.count;o<u;o++)xn.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(xn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],h=this.morphTargetsRelative;for(let f=0,m=c.count;f<m;f++)xn.fromBufferAttribute(c,f),h&&(ra.fromBufferAttribute(e,f),xn.add(ra)),a=Math.max(a,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let O=0;O<n.count;O++)c[O]=new ce,h[O]=new ce;const f=new ce,m=new ce,g=new ce,v=new kt,x=new kt,M=new kt,w=new ce,S=new ce;function y(O,C,E){f.fromBufferAttribute(n,O),m.fromBufferAttribute(n,C),g.fromBufferAttribute(n,E),v.fromBufferAttribute(o,O),x.fromBufferAttribute(o,C),M.fromBufferAttribute(o,E),m.sub(f),g.sub(f),x.sub(v),M.sub(v);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(w.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(k),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(k),c[O].add(w),c[C].add(w),c[E].add(w),h[O].add(S),h[C].add(S),h[E].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let O=0,C=I.length;O<C;++O){const E=I[O],k=E.start,q=E.count;for(let Q=k,ne=k+q;Q<ne;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const L=new ce,T=new ce,P=new ce,N=new ce;function D(O){P.fromBufferAttribute(a,O),N.copy(P);const C=c[O];L.copy(C),L.sub(P.multiplyScalar(P.dot(C))).normalize(),T.crossVectors(N,C);const k=T.dot(h[O])<0?-1:1;u.setXYZW(O,L.x,L.y,L.z,k)}for(let O=0,C=I.length;O<C;++O){const E=I[O],k=E.start,q=E.count;for(let Q=k,ne=k+q;Q<ne;Q+=3)D(e.getX(Q+0)),D(e.getX(Q+1)),D(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const a=new ce,o=new ce,u=new ce,c=new ce,h=new ce,f=new ce,m=new ce,g=new ce;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),w=e.getX(v+1),S=e.getX(v+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,w),u.fromBufferAttribute(t,S),m.subVectors(u,o),g.subVectors(a,o),m.cross(g),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,S),c.add(m),h.add(m),f.add(m),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(w,h.x,h.y,h.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let v=0,x=t.count;v<x;v+=3)a.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,o),g.subVectors(a,o),m.cross(g),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(c,h){const f=c.array,m=c.itemSize,g=c.normalized,v=new f.constructor(h.length*m);let x=0,M=0;for(let w=0,S=h.length;w<S;w++){c.isInterleavedBufferAttribute?x=h[w]*c.data.stride+c.offset:x=h[w]*m;for(let y=0;y<m;y++)v[M++]=f[x++]}return new Wn(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,n=this.index.array,a=this.attributes;for(const c in a){const h=a[c],f=e(h,n);t.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const h=[],f=o[c];for(let m=0,g=f.length;m<g;m++){const v=f[m],x=e(v,n);h.push(x)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let g=0,v=f.length;g<v;g++){const x=f[g];m.push(x.toJSON(e.data))}m.length>0&&(a[h]=m,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const f in a){const m=a[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],g=o[f];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,m=u.length;f<m;f++){const g=u[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mg=new qt,hs=new Uu,ql=new Po,wg=new ce,Kl=new ce,Zl=new ce,Ql=new ce,Vd=new ce,Jl=new ce,Tg=new ce,eu=new ce;class hr extends Un{constructor(e=new li,t=new Kv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(o&&c){Jl.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const m=c[h],g=o[h];m!==0&&(Vd.fromBufferAttribute(g,e),u?Jl.addScaledVector(Vd,m):Jl.addScaledVector(Vd.sub(t),m))}t.add(Jl)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(o),hs.copy(e.ray).recast(e.near),!(ql.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ql,wg)===null||hs.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Mg.copy(o).invert(),hs.copy(e.ray).applyMatrix4(Mg),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let a;const o=this.geometry,u=this.material,c=o.index,h=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,g=o.attributes.normal,v=o.groups,x=o.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const S=v[M],y=u[S.materialIndex],I=Math.max(S.start,x.start),L=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let T=I,P=L;T<P;T+=3){const N=c.getX(T),D=c.getX(T+1),O=c.getX(T+2);a=tu(this,y,e,n,f,m,g,N,D,O),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),w=Math.min(c.count,x.start+x.count);for(let S=M,y=w;S<y;S+=3){const I=c.getX(S),L=c.getX(S+1),T=c.getX(S+2);a=tu(this,u,e,n,f,m,g,I,L,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const S=v[M],y=u[S.materialIndex],I=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let T=I,P=L;T<P;T+=3){const N=T,D=T+1,O=T+2;a=tu(this,y,e,n,f,m,g,N,D,O),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let S=M,y=w;S<y;S+=3){const I=S,L=S+1,T=S+2;a=tu(this,u,e,n,f,m,g,I,L,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function $x(r,e,t,n,a,o,u,c){let h;if(e.side===Jn?h=n.intersectTriangle(u,o,a,!0,c):h=n.intersectTriangle(a,o,u,e.side===qr,c),h===null)return null;eu.copy(c),eu.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(eu);return f<t.near||f>t.far?null:{distance:f,point:eu.clone(),object:r}}function tu(r,e,t,n,a,o,u,c,h,f){r.getVertexPosition(c,Kl),r.getVertexPosition(h,Zl),r.getVertexPosition(f,Ql);const m=$x(r,e,t,n,Kl,Zl,Ql,Tg);if(m){const g=new ce;Ii.getBarycoord(Tg,Kl,Zl,Ql,g),a&&(m.uv=Ii.getInterpolatedAttribute(a,c,h,f,g,new kt)),o&&(m.uv1=Ii.getInterpolatedAttribute(o,c,h,f,g,new kt)),u&&(m.normal=Ii.getInterpolatedAttribute(u,c,h,f,g,new ce),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:h,c:f,normal:new ce,materialIndex:0};Ii.getNormal(Kl,Zl,Ql,v.normal),m.face=v,m.barycoord=g}return m}class Lo extends li{constructor(e=1,t=1,n=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:u};const c=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const h=[],f=[],m=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,n,t,e,u,o,0),M("z","y","x",1,-1,n,t,-e,u,o,1),M("x","z","y",1,1,e,n,t,a,u,2),M("x","z","y",1,-1,e,n,-t,a,u,3),M("x","y","z",1,-1,e,t,n,a,o,4),M("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(h),this.setAttribute("position",new Yr(f,3)),this.setAttribute("normal",new Yr(m,3)),this.setAttribute("uv",new Yr(g,2));function M(w,S,y,I,L,T,P,N,D,O,C){const E=T/D,k=P/O,q=T/2,Q=P/2,ne=N/2,ae=D+1,he=O+1;let me=0,H=0;const pe=new ce;for(let se=0;se<he;se++){const B=se*k-Q;for(let re=0;re<ae;re++){const _e=re*E-q;pe[w]=_e*I,pe[S]=B*L,pe[y]=ne,f.push(pe.x,pe.y,pe.z),pe[w]=0,pe[S]=0,pe[y]=N>0?1:-1,m.push(pe.x,pe.y,pe.z),g.push(re/D),g.push(1-se/O),me+=1}}for(let se=0;se<O;se++)for(let B=0;B<D;B++){const re=v+B+ae*se,_e=v+B+ae*(se+1),Y=v+(B+1)+ae*(se+1),ge=v+(B+1)+ae*se;h.push(re,_e,ge),h.push(_e,Y,ge),H+=6}c.addGroup(x,H,C),x+=H,v+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ya(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const a=r[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function Vn(r){const e={};for(let t=0;t<r.length;t++){const n=ya(r[t]);for(const a in n)e[a]=n[a]}return e}function Yx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Jv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const qx={clone:ya,merge:Vn};var Kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kr extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kx,this.fragmentShader=Zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=Yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let e_=class extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=dr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Vr=new ce,bg=new kt,Ag=new kt;class oi extends e_{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Md*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(Md*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,bg,Ag),t.subVectors(Ag,bg)}setViewOffset(e,t,n,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Md*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,f=u.fullHeight;o+=u.offsetX*a/h,t-=u.offsetY*n/f,a*=u.width/h,n*=u.height/f}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sa=-90,aa=1;class Qx extends Un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new oi(sa,aa,e,t);a.layers=this.layers,this.add(a);const o=new oi(sa,aa,e,t);o.layers=this.layers,this.add(o);const u=new oi(sa,aa,e,t);u.layers=this.layers,this.add(u);const c=new oi(sa,aa,e,t);c.layers=this.layers,this.add(c);const h=new oi(sa,aa,e,t);h.layers=this.layers,this.add(h);const f=new oi(sa,aa,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,u,c,h]=t;for(const f of t)this.remove(f);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Pu)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,h,f,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,u),e.setRenderTarget(n,2,a),e.render(t,c),e.setRenderTarget(n,3,a),e.render(t,h),e.setRenderTarget(n,4,a),e.render(t,f),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,a),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class t_ extends ei{constructor(e=[],t=ga,n,a,o,u,c,h,f,m){super(e,t,n,a,o,u,c,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jx extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new t_(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ji}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Lo(5,5,5),o=new Kr({name:"CubemapFromEquirect",uniforms:ya(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Xr});o.uniforms.tEquirect.value=t;const u=new hr(a,o),c=t.minFilter;return t.minFilter===Ms&&(t.minFilter=ji),new Qx(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,a);e.setRenderTarget(o)}}class nu extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eS={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,u=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,n),y=this._getHandJoint(f,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,M=.005;f.inputState.pinching&&v>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(eS)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nu;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class n_ extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jd=new ce,tS=new ce,nS=new _t;class _s{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=jd.subVectors(n,t).cross(tS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jd),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nS.getNormalMatrix(e),a=this.coplanarPoint(jd).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Po,iu=new ce;class i_{constructor(e=new _s,t=new _s,n=new _s,a=new _s,o=new _s,u=new _s){this.planes=[e,t,n,a,o,u]}set(e,t,n,a,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(a),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr){const n=this.planes,a=e.elements,o=a[0],u=a[1],c=a[2],h=a[3],f=a[4],m=a[5],g=a[6],v=a[7],x=a[8],M=a[9],w=a[10],S=a[11],y=a[12],I=a[13],L=a[14],T=a[15];if(n[0].setComponents(h-o,v-f,S-x,T-y).normalize(),n[1].setComponents(h+o,v+f,S+x,T+y).normalize(),n[2].setComponents(h+u,v+m,S+M,T+I).normalize(),n[3].setComponents(h-u,v-m,S-M,T-I).normalize(),n[4].setComponents(h-c,v-g,S-w,T-L).normalize(),t===dr)n[5].setComponents(h+c,v+g,S+w,T+L).normalize();else if(t===Pu)n[5].setComponents(c,g,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(iu.x=a.normal.x>0?e.max.x:e.min.x,iu.y=a.normal.y>0?e.max.y:e.min.y,iu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _f extends Ma{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Du=new ce,Nu=new ce,Cg=new qt,ho=new Uu,ru=new Po,Xd=new ce,Rg=new ce;class r_ extends Un{constructor(e=new li,t=new _f){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)Du.fromBufferAttribute(t,a-1),Nu.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Du.distanceTo(Nu);e.setAttribute("lineDistance",new Yr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ru.copy(n.boundingSphere),ru.applyMatrix4(a),ru.radius+=o,e.ray.intersectsSphere(ru)===!1)return;Cg.copy(a).invert(),ho.copy(e.ray).applyMatrix4(Cg);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let w=x,S=M-1;w<S;w+=f){const y=m.getX(w),I=m.getX(w+1),L=su(this,e,ho,h,y,I,w);L&&t.push(L)}if(this.isLineLoop){const w=m.getX(M-1),S=m.getX(x),y=su(this,e,ho,h,w,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let w=x,S=M-1;w<S;w+=f){const y=su(this,e,ho,h,w,w+1,w);y&&t.push(y)}if(this.isLineLoop){const w=su(this,e,ho,h,M-1,x,M-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function su(r,e,t,n,a,o,u){const c=r.geometry.attributes.position;if(Du.fromBufferAttribute(c,a),Nu.fromBufferAttribute(c,o),t.distanceSqToSegment(Du,Nu,Xd,Rg)>n)return;Xd.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Xd);if(!(f<e.near||f>e.far))return{distance:f,point:Rg.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class yf extends Ma{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pg=new qt,Zh=new Uu,au=new Po,ou=new ce;class s_ extends Un{constructor(e=new li,t=new yf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),au.copy(n.boundingSphere),au.applyMatrix4(a),au.radius+=o,e.ray.intersectsSphere(au)===!1)return;Pg.copy(a).invert(),Zh.copy(e.ray).applyMatrix4(Pg);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,g=n.attributes.position;if(f!==null){const v=Math.max(0,u.start),x=Math.min(f.count,u.start+u.count);for(let M=v,w=x;M<w;M++){const S=f.getX(M);ou.fromBufferAttribute(g,S),Lg(ou,S,h,a,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let M=v,w=x;M<w;M++)ou.fromBufferAttribute(g,M),Lg(ou,M,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Lg(r,e,t,n,a,o,u){const c=Zh.distanceSqToPoint(r);if(c<t){const h=new ce;Zh.closestPointToPoint(r,h),h.applyMatrix4(n);const f=a.ray.origin.distanceTo(h);if(f<a.near||f>a.far)return;o.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class a_ extends ei{constructor(e,t,n=ws,a,o,u,c=ki,h=ki,f,m=wo){if(m!==wo&&m!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,o,u,c,h,m,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fu extends li{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,u=t/2,c=Math.floor(n),h=Math.floor(a),f=c+1,m=h+1,g=e/c,v=t/h,x=[],M=[],w=[],S=[];for(let y=0;y<m;y++){const I=y*v-u;for(let L=0;L<f;L++){const T=L*g-o;M.push(T,-I,0),w.push(0,0,1),S.push(L/c),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let I=0;I<c;I++){const L=I+f*y,T=I+f*(y+1),P=I+1+f*(y+1),N=I+1+f*y;x.push(L,T,N),x.push(T,P,N)}this.setIndex(x),this.setAttribute("position",new Yr(M,3)),this.setAttribute("normal",new Yr(w,3)),this.setAttribute("uv",new Yr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class iS extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rS extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sS extends Un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class aS extends e_{constructor(e=-1,t=1,n=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,u=n+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,u=o+f*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class o_ extends sS{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oS extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dg=new qt;class lS{constructor(e,t,n=0,a=1/0){this.ray=new Uu(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new vf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dg),this}intersectObject(e,t=!0,n=[]){return Qh(e,this,n,t),n.sort(Ng),n}intersectObjects(e,t=!0,n=[]){for(let a=0,o=e.length;a<o;a++)Qh(e[a],this,n,t);return n.sort(Ng),n}}function Ng(r,e){return r.distance-e.distance}function Qh(r,e,t,n){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const o=r.children;for(let u=0,c=o.length;u<c;u++)Qh(o[u],e,t,!0)}}function Ig(r,e,t,n){const a=uS(n);switch(t){case Gv:return r*e;case Vv:return r*e/a.components*a.byteLength;case ff:return r*e/a.components*a.byteLength;case Wv:return r*e*2/a.components*a.byteLength;case pf:return r*e*2/a.components*a.byteLength;case Hv:return r*e*3/a.components*a.byteLength;case Fi:return r*e*4/a.components*a.byteLength;case mf:return r*e*4/a.components*a.byteLength;case Su:case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mu:case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Th:case Ah:return Math.max(r,16)*Math.max(e,8)/4;case wh:case bh:return Math.max(r,8)*Math.max(e,8)/2;case Ch:case Rh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Tu:case jh:case Xh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case jv:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Yh:case qh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uS(r){switch(r){case mr:case Ov:return{byteLength:1,components:1};case Eo:case zv:case bo:return{byteLength:2,components:1};case df:case hf:return{byteLength:2,components:4};case ws:case cf:case cr:return{byteLength:4,components:1};case Bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function l_(){let r=null,e=!1,t=null,n=null;function a(o,u){t(o,u),n=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function cS(r){const e=new WeakMap;function t(c,h){const f=c.array,m=c.usage,g=f.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,f,m),c.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,h,f){const m=h.array,g=h.updateRanges;if(r.bindBuffer(f,c),g.length===0)r.bufferSubData(f,0,m);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],w=g[x];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++v,g[v]=w)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const w=g[x];r.bufferSubData(f,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(r.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:u}}var dS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
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
#endif`,fS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vS=`#ifdef USE_AOMAP
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
#endif`,_S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
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
#endif`,xS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ES=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wS=`#ifdef USE_IRIDESCENCE
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
#endif`,TS=`#ifdef USE_BUMPMAP
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,IS=`#define PI 3.141592653589793
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
} // validated`,US=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FS=`vec3 transformedNormal = objectNormal;
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
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",HS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jS=`#ifdef USE_ENVMAP
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
#endif`,XS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QS=`#ifdef USE_GRADIENTMAP
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
}`,JS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
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
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
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
#endif`,uE=`struct PhysicalMaterial {
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
}`,cE=`
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
#endif`,dE=`#if defined( RE_IndirectDiffuse )
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
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xE=`#if defined( USE_POINTS_UV )
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
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ME=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
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
#endif`,AE=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
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
#endif`,IE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qE=`float getShadowMask() {
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
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,eM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rM=`#ifdef USE_TRANSMISSION
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
#endif`,sM=`#ifdef USE_TRANSMISSION
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dM=`uniform sampler2D t2D;
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,_M=`#define DISTANCE
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
}`,yM=`#define DISTANCE
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
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`uniform float scale;
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
}`,MM=`uniform vec3 diffuse;
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
}`,wM=`#include <common>
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
}`,TM=`uniform vec3 diffuse;
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
}`,bM=`#define LAMBERT
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
}`,AM=`#define LAMBERT
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
}`,RM=`#define MATCAP
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
}`,PM=`#define NORMAL
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
}`,LM=`#define NORMAL
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
}`,DM=`#define PHONG
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
}`,NM=`#define PHONG
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
}`,IM=`#define STANDARD
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
}`,UM=`#define STANDARD
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
}`,FM=`#define TOON
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
}`,kM=`#define TOON
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
}`,OM=`uniform float size;
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
}`,zM=`uniform vec3 diffuse;
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
}`,BM=`#include <common>
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
}`,GM=`uniform vec3 color;
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
}`,HM=`uniform float rotation;
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
}`,VM=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:dS,alphahash_pars_fragment:hS,alphamap_fragment:fS,alphamap_pars_fragment:pS,alphatest_fragment:mS,alphatest_pars_fragment:gS,aomap_fragment:vS,aomap_pars_fragment:_S,batching_pars_vertex:yS,batching_vertex:xS,begin_vertex:SS,beginnormal_vertex:ES,bsdfs:MS,iridescence_fragment:wS,bumpmap_pars_fragment:TS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:CS,clipping_planes_vertex:RS,color_fragment:PS,color_pars_fragment:LS,color_pars_vertex:DS,color_vertex:NS,common:IS,cube_uv_reflection_fragment:US,defaultnormal_vertex:FS,displacementmap_pars_vertex:kS,displacementmap_vertex:OS,emissivemap_fragment:zS,emissivemap_pars_fragment:BS,colorspace_fragment:GS,colorspace_pars_fragment:HS,envmap_fragment:VS,envmap_common_pars_fragment:WS,envmap_pars_fragment:jS,envmap_pars_vertex:XS,envmap_physical_pars_fragment:iE,envmap_vertex:$S,fog_vertex:YS,fog_pars_vertex:qS,fog_fragment:KS,fog_pars_fragment:ZS,gradientmap_pars_fragment:QS,lightmap_pars_fragment:JS,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:rE,lights_toon_pars_fragment:sE,lights_phong_fragment:aE,lights_phong_pars_fragment:oE,lights_physical_fragment:lE,lights_physical_pars_fragment:uE,lights_fragment_begin:cE,lights_fragment_maps:dE,lights_fragment_end:hE,logdepthbuf_fragment:fE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:gE,map_fragment:vE,map_pars_fragment:_E,map_particle_fragment:yE,map_particle_pars_fragment:xE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:EE,morphinstance_vertex:ME,morphcolor_vertex:wE,morphnormal_vertex:TE,morphtarget_pars_vertex:bE,morphtarget_vertex:AE,normal_fragment_begin:CE,normal_fragment_maps:RE,normal_pars_fragment:PE,normal_pars_vertex:LE,normal_vertex:DE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:kE,opaque_fragment:OE,packing:zE,premultiplied_alpha_fragment:BE,project_vertex:GE,dithering_fragment:HE,dithering_pars_fragment:VE,roughnessmap_fragment:WE,roughnessmap_pars_fragment:jE,shadowmap_pars_fragment:XE,shadowmap_pars_vertex:$E,shadowmap_vertex:YE,shadowmask_pars_fragment:qE,skinbase_vertex:KE,skinning_pars_vertex:ZE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:eM,specularmap_pars_fragment:tM,tonemapping_fragment:nM,tonemapping_pars_fragment:iM,transmission_fragment:rM,transmission_pars_fragment:sM,uv_pars_fragment:aM,uv_pars_vertex:oM,uv_vertex:lM,worldpos_vertex:uM,background_vert:cM,background_frag:dM,backgroundCube_vert:hM,backgroundCube_frag:fM,cube_vert:pM,cube_frag:mM,depth_vert:gM,depth_frag:vM,distanceRGBA_vert:_M,distanceRGBA_frag:yM,equirect_vert:xM,equirect_frag:SM,linedashed_vert:EM,linedashed_frag:MM,meshbasic_vert:wM,meshbasic_frag:TM,meshlambert_vert:bM,meshlambert_frag:AM,meshmatcap_vert:CM,meshmatcap_frag:RM,meshnormal_vert:PM,meshnormal_frag:LM,meshphong_vert:DM,meshphong_frag:NM,meshphysical_vert:IM,meshphysical_frag:UM,meshtoon_vert:FM,meshtoon_frag:kM,points_vert:OM,points_frag:zM,shadow_vert:BM,shadow_frag:GM,sprite_vert:HM,sprite_frag:VM},Be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Vn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Vn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Vn([Be.points,Be.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Vn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Vn([Be.common,Be.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Vn([Be.sprite,Be.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Vn([Be.common,Be.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Vn([Be.lights,Be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const lu={r:0,b:0,g:0},ps=new gr,WM=new qt;function jM(r,e,t,n,a,o,u){const c=new Ct(0);let h=o===!0?0:1,f,m,g=null,v=0,x=null;function M(L){let T=L.isScene===!0?L.background:null;return T&&T.isTexture&&(T=(L.backgroundBlurriness>0?t:e).get(T)),T}function w(L){let T=!1;const P=M(L);P===null?y(c,h):P&&P.isColor&&(y(P,1),T=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,T){const P=M(T);P&&(P.isCubeTexture||P.mapping===Iu)?(m===void 0&&(m=new hr(new Lo(1,1,1),new Kr({name:"BackgroundCubeMaterial",uniforms:ya(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),ps.copy(T.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(WM.makeRotationFromEuler(ps)),m.material.toneMapped=It.getTransfer(P.colorSpace)!==Ft,(g!==P||v!==P.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=P,v=P.version,x=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(f===void 0&&(f=new hr(new Fu(2,2),new Kr({name:"BackgroundMaterial",uniforms:ya(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=P,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.toneMapped=It.getTransfer(P.colorSpace)!==Ft,P.matrixAutoUpdate===!0&&P.updateMatrix(),f.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,g=P,v=P.version,x=r.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function y(L,T){L.getRGB(lu,Jv(r)),n.buffers.color.setClear(lu.r,lu.g,lu.b,T,u)}function I(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,T=1){c.set(L),h=T,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,y(c,h)},render:w,addToRenderList:S,dispose:I}}function XM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},a=v(null);let o=a,u=!1;function c(E,k,q,Q,ne){let ae=!1;const he=g(Q,q,k);o!==he&&(o=he,f(o.object)),ae=x(E,Q,q,ne),ae&&M(E,Q,q,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,T(E,k,q,Q),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function h(){return r.createVertexArray()}function f(E){return r.bindVertexArray(E)}function m(E){return r.deleteVertexArray(E)}function g(E,k,q){const Q=q.wireframe===!0;let ne=n[E.id];ne===void 0&&(ne={},n[E.id]=ne);let ae=ne[k.id];ae===void 0&&(ae={},ne[k.id]=ae);let he=ae[Q];return he===void 0&&(he=v(h()),ae[Q]=he),he}function v(E){const k=[],q=[],Q=[];for(let ne=0;ne<t;ne++)k[ne]=0,q[ne]=0,Q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:Q,object:E,attributes:{},index:null}}function x(E,k,q,Q){const ne=o.attributes,ae=k.attributes;let he=0;const me=q.getAttributes();for(const H in me)if(me[H].location>=0){const se=ne[H];let B=ae[H];if(B===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(B=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(B=E.instanceColor)),se===void 0||se.attribute!==B||B&&se.data!==B.data)return!0;he++}return o.attributesNum!==he||o.index!==Q}function M(E,k,q,Q){const ne={},ae=k.attributes;let he=0;const me=q.getAttributes();for(const H in me)if(me[H].location>=0){let se=ae[H];se===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(se=E.instanceColor));const B={};B.attribute=se,se&&se.data&&(B.data=se.data),ne[H]=B,he++}o.attributes=ne,o.attributesNum=he,o.index=Q}function w(){const E=o.newAttributes;for(let k=0,q=E.length;k<q;k++)E[k]=0}function S(E){y(E,0)}function y(E,k){const q=o.newAttributes,Q=o.enabledAttributes,ne=o.attributeDivisors;q[E]=1,Q[E]===0&&(r.enableVertexAttribArray(E),Q[E]=1),ne[E]!==k&&(r.vertexAttribDivisor(E,k),ne[E]=k)}function I(){const E=o.newAttributes,k=o.enabledAttributes;for(let q=0,Q=k.length;q<Q;q++)k[q]!==E[q]&&(r.disableVertexAttribArray(q),k[q]=0)}function L(E,k,q,Q,ne,ae,he){he===!0?r.vertexAttribIPointer(E,k,q,ne,ae):r.vertexAttribPointer(E,k,q,Q,ne,ae)}function T(E,k,q,Q){w();const ne=Q.attributes,ae=q.getAttributes(),he=k.defaultAttributeValues;for(const me in ae){const H=ae[me];if(H.location>=0){let pe=ne[me];if(pe===void 0&&(me==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),me==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),pe!==void 0){const se=pe.normalized,B=pe.itemSize,re=e.get(pe);if(re===void 0)continue;const _e=re.buffer,Y=re.type,ge=re.bytesPerElement,le=Y===r.INT||Y===r.UNSIGNED_INT||pe.gpuType===cf;if(pe.isInterleavedBufferAttribute){const Me=pe.data,be=Me.stride,ke=pe.offset;if(Me.isInstancedInterleavedBuffer){for(let We=0;We<H.locationSize;We++)y(H.location+We,Me.meshPerAttribute);E.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let We=0;We<H.locationSize;We++)S(H.location+We);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let We=0;We<H.locationSize;We++)L(H.location+We,B/H.locationSize,Y,se,be*ge,(ke+B/H.locationSize*We)*ge,le)}else{if(pe.isInstancedBufferAttribute){for(let Me=0;Me<H.locationSize;Me++)y(H.location+Me,pe.meshPerAttribute);E.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Me=0;Me<H.locationSize;Me++)S(H.location+Me);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Me=0;Me<H.locationSize;Me++)L(H.location+Me,B/H.locationSize,Y,se,B*ge,B/H.locationSize*Me*ge,le)}}else if(he!==void 0){const se=he[me];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(H.location,se);break;case 3:r.vertexAttrib3fv(H.location,se);break;case 4:r.vertexAttrib4fv(H.location,se);break;default:r.vertexAttrib1fv(H.location,se)}}}}I()}function P(){O();for(const E in n){const k=n[E];for(const q in k){const Q=k[q];for(const ne in Q)m(Q[ne].object),delete Q[ne];delete k[q]}delete n[E]}}function N(E){if(n[E.id]===void 0)return;const k=n[E.id];for(const q in k){const Q=k[q];for(const ne in Q)m(Q[ne].object),delete Q[ne];delete k[q]}delete n[E.id]}function D(E){for(const k in n){const q=n[k];if(q[E.id]===void 0)continue;const Q=q[E.id];for(const ne in Q)m(Q[ne].object),delete Q[ne];delete q[E.id]}}function O(){C(),u=!0,o!==a&&(o=a,f(o.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:O,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:S,disableUnusedAttributes:I}}function $M(r,e,t){let n;function a(f){n=f}function o(f,m){r.drawArrays(n,f,m),t.update(m,n,1)}function u(f,m,g){g!==0&&(r.drawArraysInstanced(n,f,m,g),t.update(m,n,g))}function c(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,n,1)}function h(f,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<f.length;M++)u(f[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,m,0,v,0,g);let M=0;for(let w=0;w<g;w++)M+=m[w]*v[w];t.update(M,n,1)}}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function YM(r,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(D){return!(D!==Fi&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const O=D===bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==mr&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==cr&&!O)}function h(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:T,vertexTextures:P,maxSamples:N}}function qM(r){const e=this;let t=null,n=0,a=!1,o=!1;const u=new _s,c=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||n!==0||a;return a=v,n=g.length,x},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,y=r.get(g);if(!a||M===null||M.length===0||o&&!S)o?m(null):f();else{const I=o?0:n,L=I*4;let T=y.clippingState||null;h.value=T,T=m(M,v,L,x);for(let P=0;P!==L;++P)T[P]=t[P];y.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,v,x,M){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=h.value,M!==!0||S===null){const y=x+w*4,I=v.matrixWorldInverse;c.getNormalMatrix(I),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,T=x;L!==w;++L,T+=4)u.copy(g[L]).applyMatrix4(I,c),u.normal.toArray(S,T),S[T+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function KM(r){let e=new WeakMap;function t(u,c){return c===xh?u.mapping=ga:c===Sh&&(u.mapping=va),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===xh||c===Sh)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const f=new Jx(h.height);return f.fromEquirectangularTexture(r,u),e.set(u,f),u.addEventListener("dispose",a),t(f.texture,u.mapping)}else return null}}return u}function a(u){const c=u.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const ca=4,Ug=[.125,.215,.35,.446,.526,.582],Ss=20,$d=new aS,Fg=new Ct;let Yd=null,qd=0,Kd=0,Zd=!1;const ys=(1+Math.sqrt(5))/2,oa=1/ys,kg=[new ce(-ys,oa,0),new ce(ys,oa,0),new ce(-oa,0,ys),new ce(oa,0,ys),new ce(0,ys,-oa),new ce(0,ys,oa),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)],ZM=new ce;class Og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,o={}){const{size:u=256,position:c=ZM}=o;Yd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,a,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,qd,Kd),this._renderer.xr.enabled=Zd,e.scissorTest=!1,uu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ga||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:bo,format:Fi,colorSpace:_a,depthBuffer:!1},a=zg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QM(o)),this._blurMaterial=JM(o,e,t)}return a}_compileMaterial(e){const t=new hr(this._lodPlanes[0],e);this._renderer.compile(t,$d)}_sceneToCubeUV(e,t,n,a,o){const h=new oi(90,1,t,n),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Fg),g.toneMapping=$r,g.autoClear=!1;const M=new Kv({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),w=new hr(new Lo,M);let S=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,S=!0):(M.color.copy(Fg),S=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(h.up.set(0,f[I],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+m[I],o.y,o.z)):L===1?(h.up.set(0,0,f[I]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+m[I],o.z)):(h.up.set(0,f[I],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+m[I]));const T=this._cubeSize;uu(a,L*T,I>2?T:0,T,T),g.setRenderTarget(a),S&&g.render(w,h),g.render(e,h)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===ga||e.mapping===va;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const o=a?this._cubemapMaterial:this._equirectMaterial,u=new hr(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;uu(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(u,$d)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=kg[(a-o-1)%kg.length];this._blur(e,o-1,o,u,c)}t.autoClear=n}_blur(e,t,n,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,a,"latitudinal",o),this._halfBlur(u,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,u,c){const h=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new hr(this._lodPlanes[a],f),v=f.uniforms,x=this._sizeLods[n]-1,M=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Ss-1),w=o/M,S=isFinite(o)?1+Math.floor(m*w):Ss;S>Ss&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ss}`);const y=[];let I=0;for(let D=0;D<Ss;++D){const O=D/w,C=Math.exp(-O*O/2);y.push(C),D===0?I+=C:D<S&&(I+=2*C)}for(let D=0;D<y.length;D++)y[D]=y[D]/I;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:L}=this;v.dTheta.value=M,v.mipInt.value=L-n;const T=this._sizeLods[a],P=3*T*(a>L-ca?a-L+ca:0),N=4*(this._cubeSize-T);uu(t,P,N,3*T,2*T),h.setRenderTarget(t),h.render(g,$d)}}function QM(r){const e=[],t=[],n=[];let a=r;const o=r-ca+1+Ug.length;for(let u=0;u<o;u++){const c=Math.pow(2,a);t.push(c);let h=1/c;u>r-ca?h=Ug[u-r+ca-1]:u===0&&(h=0),n.push(h);const f=1/(c-2),m=-f,g=1+f,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,w=3,S=2,y=1,I=new Float32Array(w*M*x),L=new Float32Array(S*M*x),T=new Float32Array(y*M*x);for(let N=0;N<x;N++){const D=N%3*2/3-1,O=N>2?0:-1,C=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];I.set(C,w*M*N),L.set(v,S*M*N);const E=[N,N,N,N,N,N];T.set(E,y*M*N)}const P=new li;P.setAttribute("position",new Wn(I,w)),P.setAttribute("uv",new Wn(L,S)),P.setAttribute("faceIndex",new Wn(T,y)),e.push(P),a>ca&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zg(r,e,t){const n=new Ts(r,e,t);return n.texture.mapping=Iu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uu(r,e,t,n,a){r.viewport.set(e,t,n,a),r.scissor.set(e,t,n,a)}function JM(r,e,t){const n=new Float32Array(Ss),a=new ce(0,1,0);return new Kr({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xf(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Bg(){return new Kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Gg(){return new Kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function xf(){return`

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
	`}function ew(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===xh||h===Sh,m=h===ga||h===va;if(f||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new Og(r)),g=f?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return f&&x&&x.height>0||m&&x&&a(x)?(t===null&&(t=new Og(r)),g=f?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",o),g.texture):null}}}return c}function a(c){let h=0;const f=6;for(let m=0;m<f;m++)c[m]!==void 0&&h++;return h===f}function o(c){const h=c.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function tw(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&bu("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function nw(r,e,t,n){const a={},o=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete a[v.id];const x=o.get(v);x&&(e.remove(x),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function f(g){const v=[],x=g.index,M=g.attributes.position;let w=0;if(x!==null){const I=x.array;w=x.version;for(let L=0,T=I.length;L<T;L+=3){const P=I[L+0],N=I[L+1],D=I[L+2];v.push(P,N,N,D,D,P)}}else if(M!==void 0){const I=M.array;w=M.version;for(let L=0,T=I.length/3-1;L<T;L+=3){const P=L+0,N=L+1,D=L+2;v.push(P,N,N,D,D,P)}}else return;const S=new($v(v)?Qv:Zv)(v,1);S.version=w;const y=o.get(g);y&&e.remove(y),o.set(g,S)}function m(g){const v=o.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&f(g)}else f(g);return o.get(g)}return{get:c,update:h,getWireframeAttribute:m}}function iw(r,e,t){let n;function a(v){n=v}let o,u;function c(v){o=v.type,u=v.bytesPerElement}function h(v,x){r.drawElements(n,x,o,v*u),t.update(x,n,1)}function f(v,x,M){M!==0&&(r.drawElementsInstanced(n,x,o,v*u,M),t.update(x,n,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,o,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,n,1)}function g(v,x,M,w){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)f(v[y]/u,x[y],w[y]);else{S.multiDrawElementsInstancedWEBGL(n,x,0,o,v,0,w,0,M);let y=0;for(let I=0;I<M;I++)y+=x[I]*w[I];t.update(y,n,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function rw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(o/3);break;case r.LINES:t.lines+=c*(o/2);break;case r.LINE_STRIP:t.lines+=c*(o-1);break;case r.LINE_LOOP:t.lines+=c*o;break;case r.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function sw(r,e,t){const n=new WeakMap,a=new tn;function o(u,c,h){const f=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=n.get(c);if(v===void 0||v.count!==g){let E=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",E)};var x=E;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],I=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let T=0;M===!0&&(T=1),w===!0&&(T=2),S===!0&&(T=3);let P=c.attributes.position.count*T,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*N*4*g),O=new Yv(D,P,N,g);O.type=cr,O.needsUpdate=!0;const C=T*4;for(let k=0;k<g;k++){const q=y[k],Q=I[k],ne=L[k],ae=P*N*4*k;for(let he=0;he<q.count;he++){const me=he*C;M===!0&&(a.fromBufferAttribute(q,he),D[ae+me+0]=a.x,D[ae+me+1]=a.y,D[ae+me+2]=a.z,D[ae+me+3]=0),w===!0&&(a.fromBufferAttribute(Q,he),D[ae+me+4]=a.x,D[ae+me+5]=a.y,D[ae+me+6]=a.z,D[ae+me+7]=0),S===!0&&(a.fromBufferAttribute(ne,he),D[ae+me+8]=a.x,D[ae+me+9]=a.y,D[ae+me+10]=a.z,D[ae+me+11]=ne.itemSize===4?a.w:1)}}v={count:g,texture:O,size:new kt(P,N)},n.set(c,v),c.addEventListener("dispose",E)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<f.length;S++)M+=f[S];const w=c.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:o}}function aw(r,e,t,n){let a=new WeakMap;function o(h){const f=n.render.frame,m=h.geometry,g=e.get(h,m);if(a.get(g)!==f&&(e.update(g),a.set(g,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,f))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==f&&(v.update(),a.set(v,f))}return g}function u(){a=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:u}}const u_=new ei,Hg=new a_(1,1),c_=new Yv,d_=new Fx,h_=new t_,Vg=[],Wg=[],jg=new Float32Array(16),Xg=new Float32Array(9),$g=new Float32Array(4);function wa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const a=e*t;let o=Vg[a];if(o===void 0&&(o=new Float32Array(a),Vg[a]=o),e!==0){n.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(o,c)}return o}function cn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function dn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ku(r,e){let t=Wg[e];t===void 0&&(t=new Int32Array(e),Wg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ow(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2fv(this.addr,e),dn(t,e)}}function uw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;r.uniform3fv(this.addr,e),dn(t,e)}}function cw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4fv(this.addr,e),dn(t,e)}}function dw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(cn(t,n))return;$g.set(n),r.uniformMatrix2fv(this.addr,!1,$g),dn(t,n)}}function hw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(cn(t,n))return;Xg.set(n),r.uniformMatrix3fv(this.addr,!1,Xg),dn(t,n)}}function fw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(cn(t,n))return;jg.set(n),r.uniformMatrix4fv(this.addr,!1,jg),dn(t,n)}}function pw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2iv(this.addr,e),dn(t,e)}}function gw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3iv(this.addr,e),dn(t,e)}}function vw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4iv(this.addr,e),dn(t,e)}}function _w(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2uiv(this.addr,e),dn(t,e)}}function xw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3uiv(this.addr,e),dn(t,e)}}function Sw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4uiv(this.addr,e),dn(t,e)}}function Ew(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(Hg.compareFunction=Xv,o=Hg):o=u_,t.setTexture2D(e||o,a)}function Mw(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||d_,a)}function ww(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||h_,a)}function Tw(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||c_,a)}function bw(r){switch(r){case 5126:return ow;case 35664:return lw;case 35665:return uw;case 35666:return cw;case 35674:return dw;case 35675:return hw;case 35676:return fw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return _w;case 36294:return yw;case 36295:return xw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Tw}}function Aw(r,e){r.uniform1fv(this.addr,e)}function Cw(r,e){const t=wa(e,this.size,2);r.uniform2fv(this.addr,t)}function Rw(r,e){const t=wa(e,this.size,3);r.uniform3fv(this.addr,t)}function Pw(r,e){const t=wa(e,this.size,4);r.uniform4fv(this.addr,t)}function Lw(r,e){const t=wa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Dw(r,e){const t=wa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nw(r,e){const t=wa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Iw(r,e){r.uniform1iv(this.addr,e)}function Uw(r,e){r.uniform2iv(this.addr,e)}function Fw(r,e){r.uniform3iv(this.addr,e)}function kw(r,e){r.uniform4iv(this.addr,e)}function Ow(r,e){r.uniform1uiv(this.addr,e)}function zw(r,e){r.uniform2uiv(this.addr,e)}function Bw(r,e){r.uniform3uiv(this.addr,e)}function Gw(r,e){r.uniform4uiv(this.addr,e)}function Hw(r,e,t){const n=this.cache,a=e.length,o=ku(t,a);cn(n,o)||(r.uniform1iv(this.addr,o),dn(n,o));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||u_,o[u])}function Vw(r,e,t){const n=this.cache,a=e.length,o=ku(t,a);cn(n,o)||(r.uniform1iv(this.addr,o),dn(n,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||d_,o[u])}function Ww(r,e,t){const n=this.cache,a=e.length,o=ku(t,a);cn(n,o)||(r.uniform1iv(this.addr,o),dn(n,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||h_,o[u])}function jw(r,e,t){const n=this.cache,a=e.length,o=ku(t,a);cn(n,o)||(r.uniform1iv(this.addr,o),dn(n,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||c_,o[u])}function Xw(r){switch(r){case 5126:return Aw;case 35664:return Cw;case 35665:return Rw;case 35666:return Pw;case 35674:return Lw;case 35675:return Dw;case 35676:return Nw;case 5124:case 35670:return Iw;case 35667:case 35671:return Uw;case 35668:case 35672:return Fw;case 35669:case 35673:return kw;case 5125:return Ow;case 36294:return zw;case 36295:return Bw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Ww;case 36289:case 36303:case 36311:case 36292:return jw}}class $w{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bw(t.type)}}class Yw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xw(t.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const c=a[o];c.setValue(e,t[c.id],n)}}}const Qd=/(\w+)(\])?(\[|\.)?/g;function Yg(r,e){r.seq.push(e),r.map[e.id]=e}function Kw(r,e,t){const n=r.name,a=n.length;for(Qd.lastIndex=0;;){const o=Qd.exec(n),u=Qd.lastIndex;let c=o[1];const h=o[2]==="]",f=o[3];if(h&&(c=c|0),f===void 0||f==="["&&u+2===a){Yg(t,f===void 0?new $w(c,r,e):new Yw(c,r,e));break}else{let g=t.map[c];g===void 0&&(g=new qw(c),Yg(t,g)),t=g}}}class Au{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);Kw(o,u,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,u=t.length;o!==u;++o){const c=t[o],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&n.push(u)}return n}}function qg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Zw=37297;let Qw=0;function Jw(r,e){const t=r.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const Kg=new _t;function eT(r){It._getMatrix(Kg,It.workingColorSpace,r);const e=`mat3( ${Kg.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(r)){case Ru:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Zg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Jw(r.getShaderSource(e),u)}else return a}function tT(r,e){const t=eT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nT(r,e){let t;switch(e){case ox:t="Linear";break;case lx:t="Reinhard";break;case ux:t="Cineon";break;case cx:t="ACESFilmic";break;case hx:t="AgX";break;case fx:t="Neutral";break;case dx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cu=new ce;function iT(){It.getLuminanceCoefficients(cu);const r=cu.x.toFixed(4),e=cu.y.toFixed(4),t=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function sT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function aT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=r.getActiveAttrib(e,a),u=o.name;let c=1;o.type===r.FLOAT_MAT2&&(c=2),o.type===r.FLOAT_MAT3&&(c=3),o.type===r.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function yo(r){return r!==""}function Qg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(r){return r.replace(oT,uT)}const lT=new Map;function uT(r,e){let t=xt[e];if(t===void 0){const n=lT.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jh(t)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ev(r){return r.replace(cT,dT)}function dT(r,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function tv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function hT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Uv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ar&&(e="SHADOWMAP_TYPE_VSM"),e}function fT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ga:case va:e="ENVMAP_TYPE_CUBE";break;case Iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function mT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fv:e="ENVMAP_BLENDING_MULTIPLY";break;case sx:e="ENVMAP_BLENDING_MIX";break;case ax:e="ENVMAP_BLENDING_ADD";break}return e}function gT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vT(r,e,t,n){const a=r.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=hT(t),f=fT(t),m=pT(t),g=mT(t),v=gT(t),x=rT(t),M=sT(o),w=a.createProgram();let S,y,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(yo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(yo).join(`
`),y.length>0&&(y+=`
`)):(S=[tv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),y=[tv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$r?"#define TONE_MAPPING":"",t.toneMapping!==$r?xt.tonemapping_pars_fragment:"",t.toneMapping!==$r?nT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,tT("linearToOutputTexel",t.outputColorSpace),iT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),u=Jh(u),u=Qg(u,t),u=Jg(u,t),c=Jh(c),c=Qg(c,t),c=Jg(c,t),u=ev(u),c=ev(c),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=I+S+u,T=I+y+c,P=qg(a,a.VERTEX_SHADER,L),N=qg(a,a.FRAGMENT_SHADER,T);a.attachShader(w,P),a.attachShader(w,N),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function D(k){if(r.debug.checkShaderErrors){const q=a.getProgramInfoLog(w).trim(),Q=a.getShaderInfoLog(P).trim(),ne=a.getShaderInfoLog(N).trim();let ae=!0,he=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,P,N);else{const me=Zg(a,P,"vertex"),H=Zg(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+me+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Q===""||ne==="")&&(he=!1);he&&(k.diagnostics={runnable:ae,programLog:q,vertexShader:{log:Q,prefix:S},fragmentShader:{log:ne,prefix:y}})}a.deleteShader(P),a.deleteShader(N),O=new Au(a,w),C=aT(a,w)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(w,Zw)),E},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=N,this}let _T=0;class yT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xT(e),t.set(e,n)),n}}class xT{constructor(e){this.id=_T++,this.code=e,this.usedTimes=0}}function ST(r,e,t,n,a,o,u){const c=new vf,h=new yT,f=new Set,m=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let x=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return f.add(C),C===0?"uv":`uv${C}`}function S(C,E,k,q,Q){const ne=q.fog,ae=Q.geometry,he=C.isMeshStandardMaterial?q.environment:null,me=(C.isMeshStandardMaterial?t:e).get(C.envMap||he),H=me&&me.mapping===Iu?me.image.height:null,pe=M[C.type];C.precision!==null&&(x=a.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const se=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,B=se!==void 0?se.length:0;let re=0;ae.morphAttributes.position!==void 0&&(re=1),ae.morphAttributes.normal!==void 0&&(re=2),ae.morphAttributes.color!==void 0&&(re=3);let _e,Y,ge,le;if(pe){const yt=Wi[pe];_e=yt.vertexShader,Y=yt.fragmentShader}else _e=C.vertexShader,Y=C.fragmentShader,h.update(C),ge=h.getVertexShaderID(C),le=h.getFragmentShaderID(C);const Me=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),ke=Q.isInstancedMesh===!0,We=Q.isBatchedMesh===!0,Rt=!!C.map,Pt=!!C.matcap,ft=!!me,V=!!C.aoMap,nn=!!C.lightMap,gt=!!C.bumpMap,pt=!!C.normalMap,Je=!!C.displacementMap,Tt=!!C.emissiveMap,Xe=!!C.metalnessMap,F=!!C.roughnessMap,A=C.anisotropy>0,te=C.clearcoat>0,Se=C.dispersion>0,we=C.iridescence>0,ye=C.sheen>0,G=C.transmission>0,fe=A&&!!C.anisotropyMap,ve=te&&!!C.clearcoatMap,Ee=te&&!!C.clearcoatNormalMap,X=te&&!!C.clearcoatRoughnessMap,Ue=we&&!!C.iridescenceMap,Ye=we&&!!C.iridescenceThicknessMap,Ze=ye&&!!C.sheenColorMap,Oe=ye&&!!C.sheenRoughnessMap,st=!!C.specularMap,it=!!C.specularColorMap,vt=!!C.specularIntensityMap,j=G&&!!C.transmissionMap,De=G&&!!C.thicknessMap,oe=!!C.gradientMap,xe=!!C.alphaMap,Fe=C.alphaTest>0,Ie=!!C.alphaHash,ct=!!C.extensions;let Ut=$r;C.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Ht={shaderID:pe,shaderType:C.type,shaderName:C.name,vertexShader:_e,fragmentShader:Y,defines:C.defines,customVertexShaderID:ge,customFragmentShaderID:le,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:We,batchingColor:We&&Q._colorsTexture!==null,instancing:ke,instancingColor:ke&&Q.instanceColor!==null,instancingMorph:ke&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:_a,alphaToCoverage:!!C.alphaToCoverage,map:Rt,matcap:Pt,envMap:ft,envMapMode:ft&&me.mapping,envMapCubeUVHeight:H,aoMap:V,lightMap:nn,bumpMap:gt,normalMap:pt,displacementMap:v&&Je,emissiveMap:Tt,normalMapObjectSpace:pt&&C.normalMapType===_x,normalMapTangentSpace:pt&&C.normalMapType===vx,metalnessMap:Xe,roughnessMap:F,anisotropy:A,anisotropyMap:fe,clearcoat:te,clearcoatMap:ve,clearcoatNormalMap:Ee,clearcoatRoughnessMap:X,dispersion:Se,iridescence:we,iridescenceMap:Ue,iridescenceThicknessMap:Ye,sheen:ye,sheenColorMap:Ze,sheenRoughnessMap:Oe,specularMap:st,specularColorMap:it,specularIntensityMap:vt,transmission:G,transmissionMap:j,thicknessMap:De,gradientMap:oe,opaque:C.transparent===!1&&C.blending===ha&&C.alphaToCoverage===!1,alphaMap:xe,alphaTest:Fe,alphaHash:Ie,combine:C.combine,mapUv:Rt&&w(C.map.channel),aoMapUv:V&&w(C.aoMap.channel),lightMapUv:nn&&w(C.lightMap.channel),bumpMapUv:gt&&w(C.bumpMap.channel),normalMapUv:pt&&w(C.normalMap.channel),displacementMapUv:Je&&w(C.displacementMap.channel),emissiveMapUv:Tt&&w(C.emissiveMap.channel),metalnessMapUv:Xe&&w(C.metalnessMap.channel),roughnessMapUv:F&&w(C.roughnessMap.channel),anisotropyMapUv:fe&&w(C.anisotropyMap.channel),clearcoatMapUv:ve&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&w(C.sheenRoughnessMap.channel),specularMapUv:st&&w(C.specularMap.channel),specularColorMapUv:it&&w(C.specularColorMap.channel),specularIntensityMapUv:vt&&w(C.specularIntensityMap.channel),transmissionMapUv:j&&w(C.transmissionMap.channel),thicknessMapUv:De&&w(C.thicknessMap.channel),alphaMapUv:xe&&w(C.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(pt||A),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ae.attributes.uv&&(Rt||xe),fog:!!ne,useFog:C.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:be,skinning:Q.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Rt&&C.map.isVideoTexture===!0&&It.getTransfer(C.map.colorSpace)===Ft,decodeVideoTextureEmissive:Tt&&C.emissiveMap.isVideoTexture===!0&&It.getTransfer(C.emissiveMap.colorSpace)===Ft,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===lr,flipSided:C.side===Jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ct&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&C.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ht.vertexUv1s=f.has(1),Ht.vertexUv2s=f.has(2),Ht.vertexUv3s=f.has(3),f.clear(),Ht}function y(C){const E=[];if(C.shaderID?E.push(C.shaderID):(E.push(C.customVertexShaderID),E.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)E.push(k),E.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(I(E,C),L(E,C),E.push(r.outputColorSpace)),E.push(C.customProgramCacheKey),E.join()}function I(C,E){C.push(E.precision),C.push(E.outputColorSpace),C.push(E.envMapMode),C.push(E.envMapCubeUVHeight),C.push(E.mapUv),C.push(E.alphaMapUv),C.push(E.lightMapUv),C.push(E.aoMapUv),C.push(E.bumpMapUv),C.push(E.normalMapUv),C.push(E.displacementMapUv),C.push(E.emissiveMapUv),C.push(E.metalnessMapUv),C.push(E.roughnessMapUv),C.push(E.anisotropyMapUv),C.push(E.clearcoatMapUv),C.push(E.clearcoatNormalMapUv),C.push(E.clearcoatRoughnessMapUv),C.push(E.iridescenceMapUv),C.push(E.iridescenceThicknessMapUv),C.push(E.sheenColorMapUv),C.push(E.sheenRoughnessMapUv),C.push(E.specularMapUv),C.push(E.specularColorMapUv),C.push(E.specularIntensityMapUv),C.push(E.transmissionMapUv),C.push(E.thicknessMapUv),C.push(E.combine),C.push(E.fogExp2),C.push(E.sizeAttenuation),C.push(E.morphTargetsCount),C.push(E.morphAttributeCount),C.push(E.numDirLights),C.push(E.numPointLights),C.push(E.numSpotLights),C.push(E.numSpotLightMaps),C.push(E.numHemiLights),C.push(E.numRectAreaLights),C.push(E.numDirLightShadows),C.push(E.numPointLightShadows),C.push(E.numSpotLightShadows),C.push(E.numSpotLightShadowsWithMaps),C.push(E.numLightProbes),C.push(E.shadowMapType),C.push(E.toneMapping),C.push(E.numClippingPlanes),C.push(E.numClipIntersection),C.push(E.depthPacking)}function L(C,E){c.disableAll(),E.supportsVertexTextures&&c.enable(0),E.instancing&&c.enable(1),E.instancingColor&&c.enable(2),E.instancingMorph&&c.enable(3),E.matcap&&c.enable(4),E.envMap&&c.enable(5),E.normalMapObjectSpace&&c.enable(6),E.normalMapTangentSpace&&c.enable(7),E.clearcoat&&c.enable(8),E.iridescence&&c.enable(9),E.alphaTest&&c.enable(10),E.vertexColors&&c.enable(11),E.vertexAlphas&&c.enable(12),E.vertexUv1s&&c.enable(13),E.vertexUv2s&&c.enable(14),E.vertexUv3s&&c.enable(15),E.vertexTangents&&c.enable(16),E.anisotropy&&c.enable(17),E.alphaHash&&c.enable(18),E.batching&&c.enable(19),E.dispersion&&c.enable(20),E.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),E.fog&&c.enable(0),E.useFog&&c.enable(1),E.flatShading&&c.enable(2),E.logarithmicDepthBuffer&&c.enable(3),E.reverseDepthBuffer&&c.enable(4),E.skinning&&c.enable(5),E.morphTargets&&c.enable(6),E.morphNormals&&c.enable(7),E.morphColors&&c.enable(8),E.premultipliedAlpha&&c.enable(9),E.shadowMapEnabled&&c.enable(10),E.doubleSided&&c.enable(11),E.flipSided&&c.enable(12),E.useDepthPacking&&c.enable(13),E.dithering&&c.enable(14),E.transmission&&c.enable(15),E.sheen&&c.enable(16),E.opaque&&c.enable(17),E.pointsUvs&&c.enable(18),E.decodeVideoTexture&&c.enable(19),E.decodeVideoTextureEmissive&&c.enable(20),E.alphaToCoverage&&c.enable(21),C.push(c.mask)}function T(C){const E=M[C.type];let k;if(E){const q=Wi[E];k=qx.clone(q.uniforms)}else k=C.uniforms;return k}function P(C,E){let k;for(let q=0,Q=m.length;q<Q;q++){const ne=m[q];if(ne.cacheKey===E){k=ne,++k.usedTimes;break}}return k===void 0&&(k=new vT(r,E,C,o),m.push(k)),k}function N(C){if(--C.usedTimes===0){const E=m.indexOf(C);m[E]=m[m.length-1],m.pop(),C.destroy()}}function D(C){h.remove(C)}function O(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:T,acquireProgram:P,releaseProgram:N,releaseShaderCache:D,programs:m,dispose:O}}function ET(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let c=r.get(u);return c===void 0&&(c={},r.set(u,c)),c}function n(u){r.delete(u)}function a(u,c,h){r.get(u)[c]=h}function o(){r=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function MT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function iv(){const r=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function u(g,v,x,M,w,S){let y=r[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:w,group:S},r[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=w,y.group=S),e++,y}function c(g,v,x,M,w,S){const y=u(g,v,x,M,w,S);x.transmission>0?n.push(y):x.transparent===!0?a.push(y):t.push(y)}function h(g,v,x,M,w,S){const y=u(g,v,x,M,w,S);x.transmission>0?n.unshift(y):x.transparent===!0?a.unshift(y):t.unshift(y)}function f(g,v){t.length>1&&t.sort(g||MT),n.length>1&&n.sort(v||nv),a.length>1&&a.sort(v||nv)}function m(){for(let g=e,v=r.length;g<v;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:c,unshift:h,finish:m,sort:f}}function wT(){let r=new WeakMap;function e(n,a){const o=r.get(n);let u;return o===void 0?(u=new iv,r.set(n,[u])):a>=o.length?(u=new iv,o.push(u)):u=o[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function TT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new Ct};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=t,t}}}function bT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let AT=0;function CT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function RT(r){const e=new TT,t=bT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new ce);const a=new ce,o=new qt,u=new qt;function c(f){let m=0,g=0,v=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,M=0,w=0,S=0,y=0,I=0,L=0,T=0,P=0,N=0,D=0;f.sort(CT);for(let C=0,E=f.length;C<E;C++){const k=f[C],q=k.color,Q=k.intensity,ne=k.distance,ae=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=q.r*Q,g+=q.g*Q,v+=q.b*Q;else if(k.isLightProbe){for(let he=0;he<9;he++)n.probe[he].addScaledVector(k.sh.coefficients[he],Q);D++}else if(k.isDirectionalLight){const he=e.get(k);if(he.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const me=k.shadow,H=t.get(k);H.shadowIntensity=me.intensity,H.shadowBias=me.bias,H.shadowNormalBias=me.normalBias,H.shadowRadius=me.radius,H.shadowMapSize=me.mapSize,n.directionalShadow[x]=H,n.directionalShadowMap[x]=ae,n.directionalShadowMatrix[x]=k.shadow.matrix,I++}n.directional[x]=he,x++}else if(k.isSpotLight){const he=e.get(k);he.position.setFromMatrixPosition(k.matrixWorld),he.color.copy(q).multiplyScalar(Q),he.distance=ne,he.coneCos=Math.cos(k.angle),he.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),he.decay=k.decay,n.spot[w]=he;const me=k.shadow;if(k.map&&(n.spotLightMap[P]=k.map,P++,me.updateMatrices(k),k.castShadow&&N++),n.spotLightMatrix[w]=me.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=me.intensity,H.shadowBias=me.bias,H.shadowNormalBias=me.normalBias,H.shadowRadius=me.radius,H.shadowMapSize=me.mapSize,n.spotShadow[w]=H,n.spotShadowMap[w]=ae,T++}w++}else if(k.isRectAreaLight){const he=e.get(k);he.color.copy(q).multiplyScalar(Q),he.halfWidth.set(k.width*.5,0,0),he.halfHeight.set(0,k.height*.5,0),n.rectArea[S]=he,S++}else if(k.isPointLight){const he=e.get(k);if(he.color.copy(k.color).multiplyScalar(k.intensity),he.distance=k.distance,he.decay=k.decay,k.castShadow){const me=k.shadow,H=t.get(k);H.shadowIntensity=me.intensity,H.shadowBias=me.bias,H.shadowNormalBias=me.normalBias,H.shadowRadius=me.radius,H.shadowMapSize=me.mapSize,H.shadowCameraNear=me.camera.near,H.shadowCameraFar=me.camera.far,n.pointShadow[M]=H,n.pointShadowMap[M]=ae,n.pointShadowMatrix[M]=k.shadow.matrix,L++}n.point[M]=he,M++}else if(k.isHemisphereLight){const he=e.get(k);he.skyColor.copy(k.color).multiplyScalar(Q),he.groundColor.copy(k.groundColor).multiplyScalar(Q),n.hemi[y]=he,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=v;const O=n.hash;(O.directionalLength!==x||O.pointLength!==M||O.spotLength!==w||O.rectAreaLength!==S||O.hemiLength!==y||O.numDirectionalShadows!==I||O.numPointShadows!==L||O.numSpotShadows!==T||O.numSpotMaps!==P||O.numLightProbes!==D)&&(n.directional.length=x,n.spot.length=w,n.rectArea.length=S,n.point.length=M,n.hemi.length=y,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=T+P-N,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=D,O.directionalLength=x,O.pointLength=M,O.spotLength=w,O.rectAreaLength=S,O.hemiLength=y,O.numDirectionalShadows=I,O.numPointShadows=L,O.numSpotShadows=T,O.numSpotMaps=P,O.numLightProbes=D,n.version=AT++)}function h(f,m){let g=0,v=0,x=0,M=0,w=0;const S=m.matrixWorldInverse;for(let y=0,I=f.length;y<I;y++){const L=f[y];if(L.isDirectionalLight){const T=n.directional[g];T.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),g++}else if(L.isSpotLight){const T=n.spot[x];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),u.identity(),o.copy(L.matrixWorld),o.premultiply(S),u.extractRotation(o),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),M++}else if(L.isPointLight){const T=n.point[v];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const T=n.hemi[w];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(S),w++}}}return{setup:c,setupView:h,state:n}}function rv(r){const e=new RT(r),t=[],n=[];function a(m){f.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function u(m){n.push(m)}function c(){e.setup(t)}function h(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:u}}function PT(r){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let c;return u===void 0?(c=new rv(r),e.set(a,[c])):o>=u.length?(c=new rv(r),u.push(c)):c=u[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const LT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DT=`uniform sampler2D shadow_pass;
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
}`;function NT(r,e,t){let n=new i_;const a=new kt,o=new kt,u=new tn,c=new iS({depthPacking:gx}),h=new rS,f={},m=t.maxTextureSize,g={[qr]:Jn,[Jn]:qr,[lr]:lr},v=new Kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:LT,fragmentShader:DT}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new li;M.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new hr(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uv;let y=this.type;this.render=function(N,D,O){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),E=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Xr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=y!==ar&&this.type===ar,ne=y===ar&&this.type!==ar;for(let ae=0,he=N.length;ae<he;ae++){const me=N[ae],H=me.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const pe=H.getFrameExtents();if(a.multiply(pe),o.copy(H.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(o.x=Math.floor(m/pe.x),a.x=o.x*pe.x,H.mapSize.x=o.x),a.y>m&&(o.y=Math.floor(m/pe.y),a.y=o.y*pe.y,H.mapSize.y=o.y)),H.map===null||Q===!0||ne===!0){const B=this.type!==ar?{minFilter:ki,magFilter:ki}:{};H.map!==null&&H.map.dispose(),H.map=new Ts(a.x,a.y,B),H.map.texture.name=me.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const se=H.getViewportCount();for(let B=0;B<se;B++){const re=H.getViewport(B);u.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),q.viewport(u),H.updateMatrices(me,B),n=H.getFrustum(),T(D,O,H.camera,me,this.type)}H.isPointLightShadow!==!0&&this.type===ar&&I(H,O),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(C,E,k)};function I(N,D){const O=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ts(a.x,a.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(D,null,O,v,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(D,null,O,x,w,null)}function L(N,D,O,C){let E=null;const k=O.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)E=k;else if(E=O.isPointLight===!0?h:c,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const q=E.uuid,Q=D.uuid;let ne=f[q];ne===void 0&&(ne={},f[q]=ne);let ae=ne[Q];ae===void 0&&(ae=E.clone(),ne[Q]=ae,D.addEventListener("dispose",P)),E=ae}if(E.visible=D.visible,E.wireframe=D.wireframe,C===ar?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:g[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const q=r.properties.get(E);q.light=O}return E}function T(N,D,O,C,E){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&E===ar)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,N.matrixWorld);const Q=e.update(N),ne=N.material;if(Array.isArray(ne)){const ae=Q.groups;for(let he=0,me=ae.length;he<me;he++){const H=ae[he],pe=ne[H.materialIndex];if(pe&&pe.visible){const se=L(N,pe,C,E);N.onBeforeShadow(r,N,D,O,Q,se,H),r.renderBufferDirect(O,null,Q,se,N,H),N.onAfterShadow(r,N,D,O,Q,se,H)}}}else if(ne.visible){const ae=L(N,ne,C,E);N.onBeforeShadow(r,N,D,O,Q,ae,null),r.renderBufferDirect(O,null,Q,ae,N,null),N.onAfterShadow(r,N,D,O,Q,ae,null)}}const q=N.children;for(let Q=0,ne=q.length;Q<ne;Q++)T(q[Q],D,O,C,E)}function P(N){N.target.removeEventListener("dispose",P);for(const O in f){const C=f[O],E=N.target.uuid;E in C&&(C[E].dispose(),delete C[E])}}}const IT={[fh]:ph,[mh]:_h,[gh]:yh,[ma]:vh,[ph]:fh,[_h]:mh,[yh]:gh,[vh]:ma};function UT(r,e){function t(){let j=!1;const De=new tn;let oe=null;const xe=new tn(0,0,0,0);return{setMask:function(Fe){oe!==Fe&&!j&&(r.colorMask(Fe,Fe,Fe,Fe),oe=Fe)},setLocked:function(Fe){j=Fe},setClear:function(Fe,Ie,ct,Ut,Ht){Ht===!0&&(Fe*=Ut,Ie*=Ut,ct*=Ut),De.set(Fe,Ie,ct,Ut),xe.equals(De)===!1&&(r.clearColor(Fe,Ie,ct,Ut),xe.copy(De))},reset:function(){j=!1,oe=null,xe.set(-1,0,0,0)}}}function n(){let j=!1,De=!1,oe=null,xe=null,Fe=null;return{setReversed:function(Ie){if(De!==Ie){const ct=e.get("EXT_clip_control");Ie?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),De=Ie;const Ut=Fe;Fe=null,this.setClear(Ut)}},getReversed:function(){return De},setTest:function(Ie){Ie?Me(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(Ie){oe!==Ie&&!j&&(r.depthMask(Ie),oe=Ie)},setFunc:function(Ie){if(De&&(Ie=IT[Ie]),xe!==Ie){switch(Ie){case fh:r.depthFunc(r.NEVER);break;case ph:r.depthFunc(r.ALWAYS);break;case mh:r.depthFunc(r.LESS);break;case ma:r.depthFunc(r.LEQUAL);break;case gh:r.depthFunc(r.EQUAL);break;case vh:r.depthFunc(r.GEQUAL);break;case _h:r.depthFunc(r.GREATER);break;case yh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=Ie}},setLocked:function(Ie){j=Ie},setClear:function(Ie){Fe!==Ie&&(De&&(Ie=1-Ie),r.clearDepth(Ie),Fe=Ie)},reset:function(){j=!1,oe=null,xe=null,Fe=null,De=!1}}}function a(){let j=!1,De=null,oe=null,xe=null,Fe=null,Ie=null,ct=null,Ut=null,Ht=null;return{setTest:function(yt){j||(yt?Me(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(yt){De!==yt&&!j&&(r.stencilMask(yt),De=yt)},setFunc:function(yt,hn,fn){(oe!==yt||xe!==hn||Fe!==fn)&&(r.stencilFunc(yt,hn,fn),oe=yt,xe=hn,Fe=fn)},setOp:function(yt,hn,fn){(Ie!==yt||ct!==hn||Ut!==fn)&&(r.stencilOp(yt,hn,fn),Ie=yt,ct=hn,Ut=fn)},setLocked:function(yt){j=yt},setClear:function(yt){Ht!==yt&&(r.clearStencil(yt),Ht=yt)},reset:function(){j=!1,De=null,oe=null,xe=null,Fe=null,Ie=null,ct=null,Ut=null,Ht=null}}}const o=new t,u=new n,c=new a,h=new WeakMap,f=new WeakMap;let m={},g={},v=new WeakMap,x=[],M=null,w=!1,S=null,y=null,I=null,L=null,T=null,P=null,N=null,D=new Ct(0,0,0),O=0,C=!1,E=null,k=null,q=null,Q=null,ne=null;const ae=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,me=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(H)[1]),he=me>=1):H.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),he=me>=2);let pe=null,se={};const B=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),_e=new tn().fromArray(B),Y=new tn().fromArray(re);function ge(j,De,oe,xe){const Fe=new Uint8Array(4),Ie=r.createTexture();r.bindTexture(j,Ie),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<oe;ct++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(De+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return Ie}const le={};le[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Me(r.DEPTH_TEST),u.setFunc(ma),gt(!1),pt(rg),Me(r.CULL_FACE),V(Xr);function Me(j){m[j]!==!0&&(r.enable(j),m[j]=!0)}function be(j){m[j]!==!1&&(r.disable(j),m[j]=!1)}function ke(j,De){return g[j]!==De?(r.bindFramebuffer(j,De),g[j]=De,j===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=De),j===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=De),!0):!1}function We(j,De){let oe=x,xe=!1;if(j){oe=v.get(De),oe===void 0&&(oe=[],v.set(De,oe));const Fe=j.textures;if(oe.length!==Fe.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let Ie=0,ct=Fe.length;Ie<ct;Ie++)oe[Ie]=r.COLOR_ATTACHMENT0+Ie;oe.length=Fe.length,xe=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,xe=!0);xe&&r.drawBuffers(oe)}function Rt(j){return M!==j?(r.useProgram(j),M=j,!0):!1}const Pt={[xs]:r.FUNC_ADD,[H0]:r.FUNC_SUBTRACT,[V0]:r.FUNC_REVERSE_SUBTRACT};Pt[W0]=r.MIN,Pt[j0]=r.MAX;const ft={[X0]:r.ZERO,[$0]:r.ONE,[Y0]:r.SRC_COLOR,[dh]:r.SRC_ALPHA,[ex]:r.SRC_ALPHA_SATURATE,[Q0]:r.DST_COLOR,[K0]:r.DST_ALPHA,[q0]:r.ONE_MINUS_SRC_COLOR,[hh]:r.ONE_MINUS_SRC_ALPHA,[J0]:r.ONE_MINUS_DST_COLOR,[Z0]:r.ONE_MINUS_DST_ALPHA,[tx]:r.CONSTANT_COLOR,[nx]:r.ONE_MINUS_CONSTANT_COLOR,[ix]:r.CONSTANT_ALPHA,[rx]:r.ONE_MINUS_CONSTANT_ALPHA};function V(j,De,oe,xe,Fe,Ie,ct,Ut,Ht,yt){if(j===Xr){w===!0&&(be(r.BLEND),w=!1);return}if(w===!1&&(Me(r.BLEND),w=!0),j!==G0){if(j!==S||yt!==C){if((y!==xs||T!==xs)&&(r.blendEquation(r.FUNC_ADD),y=xs,T=xs),yt)switch(j){case ha:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sg:r.blendFunc(r.ONE,r.ONE);break;case ag:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case og:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ha:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ag:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case og:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}I=null,L=null,P=null,N=null,D.set(0,0,0),O=0,S=j,C=yt}return}Fe=Fe||De,Ie=Ie||oe,ct=ct||xe,(De!==y||Fe!==T)&&(r.blendEquationSeparate(Pt[De],Pt[Fe]),y=De,T=Fe),(oe!==I||xe!==L||Ie!==P||ct!==N)&&(r.blendFuncSeparate(ft[oe],ft[xe],ft[Ie],ft[ct]),I=oe,L=xe,P=Ie,N=ct),(Ut.equals(D)===!1||Ht!==O)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Ht),D.copy(Ut),O=Ht),S=j,C=!1}function nn(j,De){j.side===lr?be(r.CULL_FACE):Me(r.CULL_FACE);let oe=j.side===Jn;De&&(oe=!oe),gt(oe),j.blending===ha&&j.transparent===!1?V(Xr):V(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),o.setMask(j.colorWrite);const xe=j.stencilWrite;c.setTest(xe),xe&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Tt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Me(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(j){E!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),E=j)}function pt(j){j!==O0?(Me(r.CULL_FACE),j!==k&&(j===rg?r.cullFace(r.BACK):j===z0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),k=j}function Je(j){j!==q&&(he&&r.lineWidth(j),q=j)}function Tt(j,De,oe){j?(Me(r.POLYGON_OFFSET_FILL),(Q!==De||ne!==oe)&&(r.polygonOffset(De,oe),Q=De,ne=oe)):be(r.POLYGON_OFFSET_FILL)}function Xe(j){j?Me(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function F(j){j===void 0&&(j=r.TEXTURE0+ae-1),pe!==j&&(r.activeTexture(j),pe=j)}function A(j,De,oe){oe===void 0&&(pe===null?oe=r.TEXTURE0+ae-1:oe=pe);let xe=se[oe];xe===void 0&&(xe={type:void 0,texture:void 0},se[oe]=xe),(xe.type!==j||xe.texture!==De)&&(pe!==oe&&(r.activeTexture(oe),pe=oe),r.bindTexture(j,De||le[j]),xe.type=j,xe.texture=De)}function te(){const j=se[pe];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Se(){try{r.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{r.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{r.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function G(){try{r.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{r.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function X(){try{r.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ue(){try{r.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{r.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(j){_e.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),_e.copy(j))}function Oe(j){Y.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Y.copy(j))}function st(j,De){let oe=f.get(De);oe===void 0&&(oe=new WeakMap,f.set(De,oe));let xe=oe.get(j);xe===void 0&&(xe=r.getUniformBlockIndex(De,j.name),oe.set(j,xe))}function it(j,De){const xe=f.get(De).get(j);h.get(De)!==xe&&(r.uniformBlockBinding(De,xe,j.__bindingPointIndex),h.set(De,xe))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},pe=null,se={},g={},v=new WeakMap,x=[],M=null,w=!1,S=null,y=null,I=null,L=null,T=null,P=null,N=null,D=new Ct(0,0,0),O=0,C=!1,E=null,k=null,q=null,Q=null,ne=null,_e.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:Me,disable:be,bindFramebuffer:ke,drawBuffers:We,useProgram:Rt,setBlending:V,setMaterial:nn,setFlipSided:gt,setCullFace:pt,setLineWidth:Je,setPolygonOffset:Tt,setScissorTest:Xe,activeTexture:F,bindTexture:A,unbindTexture:te,compressedTexImage2D:Se,compressedTexImage3D:we,texImage2D:Ue,texImage3D:Ye,updateUBOMapping:st,uniformBlockBinding:it,texStorage2D:Ee,texStorage3D:X,texSubImage2D:ye,texSubImage3D:G,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ze,viewport:Oe,reset:vt}}function FT(r,e,t,n,a,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new kt,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,A){return x?new OffscreenCanvas(F,A):Lu("canvas")}function w(F,A,te){let Se=1;const we=Xe(F);if((we.width>te||we.height>te)&&(Se=te/Math.max(we.width,we.height)),Se<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ye=Math.floor(Se*we.width),G=Math.floor(Se*we.height);g===void 0&&(g=M(ye,G));const fe=A?M(ye,G):g;return fe.width=ye,fe.height=G,fe.getContext("2d").drawImage(F,0,0,ye,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+ye+"x"+G+")."),fe}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),F;return F}function S(F){return F.generateMipmaps}function y(F){r.generateMipmap(F)}function I(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(F,A,te,Se,we=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ye=A;if(A===r.RED&&(te===r.FLOAT&&(ye=r.R32F),te===r.HALF_FLOAT&&(ye=r.R16F),te===r.UNSIGNED_BYTE&&(ye=r.R8)),A===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(ye=r.R8UI),te===r.UNSIGNED_SHORT&&(ye=r.R16UI),te===r.UNSIGNED_INT&&(ye=r.R32UI),te===r.BYTE&&(ye=r.R8I),te===r.SHORT&&(ye=r.R16I),te===r.INT&&(ye=r.R32I)),A===r.RG&&(te===r.FLOAT&&(ye=r.RG32F),te===r.HALF_FLOAT&&(ye=r.RG16F),te===r.UNSIGNED_BYTE&&(ye=r.RG8)),A===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(ye=r.RG8UI),te===r.UNSIGNED_SHORT&&(ye=r.RG16UI),te===r.UNSIGNED_INT&&(ye=r.RG32UI),te===r.BYTE&&(ye=r.RG8I),te===r.SHORT&&(ye=r.RG16I),te===r.INT&&(ye=r.RG32I)),A===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(ye=r.RGB8UI),te===r.UNSIGNED_SHORT&&(ye=r.RGB16UI),te===r.UNSIGNED_INT&&(ye=r.RGB32UI),te===r.BYTE&&(ye=r.RGB8I),te===r.SHORT&&(ye=r.RGB16I),te===r.INT&&(ye=r.RGB32I)),A===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(ye=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(ye=r.RGBA16UI),te===r.UNSIGNED_INT&&(ye=r.RGBA32UI),te===r.BYTE&&(ye=r.RGBA8I),te===r.SHORT&&(ye=r.RGBA16I),te===r.INT&&(ye=r.RGBA32I)),A===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(ye=r.RGB9_E5),A===r.RGBA){const G=we?Ru:It.getTransfer(Se);te===r.FLOAT&&(ye=r.RGBA32F),te===r.HALF_FLOAT&&(ye=r.RGBA16F),te===r.UNSIGNED_BYTE&&(ye=G===Ft?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(ye=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(ye=r.RGB5_A1)}return(ye===r.R16F||ye===r.R32F||ye===r.RG16F||ye===r.RG32F||ye===r.RGBA16F||ye===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function T(F,A){let te;return F?A===null||A===ws||A===Mo?te=r.DEPTH24_STENCIL8:A===cr?te=r.DEPTH32F_STENCIL8:A===Eo&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ws||A===Mo?te=r.DEPTH_COMPONENT24:A===cr?te=r.DEPTH_COMPONENT32F:A===Eo&&(te=r.DEPTH_COMPONENT16),te}function P(F,A){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==ki&&F.minFilter!==ji?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function N(F){const A=F.target;A.removeEventListener("dispose",N),O(A),A.isVideoTexture&&m.delete(A)}function D(F){const A=F.target;A.removeEventListener("dispose",D),E(A)}function O(F){const A=n.get(F);if(A.__webglInit===void 0)return;const te=F.source,Se=v.get(te);if(Se){const we=Se[A.__cacheKey];we.usedTimes--,we.usedTimes===0&&C(F),Object.keys(Se).length===0&&v.delete(te)}n.remove(F)}function C(F){const A=n.get(F);r.deleteTexture(A.__webglTexture);const te=F.source,Se=v.get(te);delete Se[A.__cacheKey],u.memory.textures--}function E(F){const A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(A.__webglFramebuffer[Se]))for(let we=0;we<A.__webglFramebuffer[Se].length;we++)r.deleteFramebuffer(A.__webglFramebuffer[Se][we]);else r.deleteFramebuffer(A.__webglFramebuffer[Se]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[Se])}else{if(Array.isArray(A.__webglFramebuffer))for(let Se=0;Se<A.__webglFramebuffer.length;Se++)r.deleteFramebuffer(A.__webglFramebuffer[Se]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Se=0;Se<A.__webglColorRenderbuffer.length;Se++)A.__webglColorRenderbuffer[Se]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[Se]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=F.textures;for(let Se=0,we=te.length;Se<we;Se++){const ye=n.get(te[Se]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),u.memory.textures--),n.remove(te[Se])}n.remove(F)}let k=0;function q(){k=0}function Q(){const F=k;return F>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+a.maxTextures),k+=1,F}function ne(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function ae(F,A){const te=n.get(F);if(F.isVideoTexture&&Je(F),F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){const Se=F.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(te,F,A);return}}t.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+A)}function he(F,A){const te=n.get(F);if(F.version>0&&te.__version!==F.version){Y(te,F,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+A)}function me(F,A){const te=n.get(F);if(F.version>0&&te.__version!==F.version){Y(te,F,A);return}t.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+A)}function H(F,A){const te=n.get(F);if(F.version>0&&te.__version!==F.version){ge(te,F,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+A)}const pe={[Eh]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[Mh]:r.MIRRORED_REPEAT},se={[ki]:r.NEAREST,[px]:r.NEAREST_MIPMAP_NEAREST,[zl]:r.NEAREST_MIPMAP_LINEAR,[ji]:r.LINEAR,[Ed]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},B={[yx]:r.NEVER,[Tx]:r.ALWAYS,[xx]:r.LESS,[Xv]:r.LEQUAL,[Sx]:r.EQUAL,[wx]:r.GEQUAL,[Ex]:r.GREATER,[Mx]:r.NOTEQUAL};function re(F,A){if(A.type===cr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ji||A.magFilter===Ed||A.magFilter===zl||A.magFilter===Ms||A.minFilter===ji||A.minFilter===Ed||A.minFilter===zl||A.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,pe[A.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,pe[A.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,pe[A.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,se[A.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,se[A.minFilter]),A.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,B[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ki||A.minFilter!==zl&&A.minFilter!==Ms||A.type===cr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function _e(F,A){let te=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",N));const Se=A.source;let we=v.get(Se);we===void 0&&(we={},v.set(Se,we));const ye=ne(A);if(ye!==F.__cacheKey){we[ye]===void 0&&(we[ye]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,te=!0),we[ye].usedTimes++;const G=we[F.__cacheKey];G!==void 0&&(we[F.__cacheKey].usedTimes--,G.usedTimes===0&&C(A)),F.__cacheKey=ye,F.__webglTexture=we[ye].texture}return te}function Y(F,A,te){let Se=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=r.TEXTURE_3D);const we=_e(F,A),ye=A.source;t.bindTexture(Se,F.__webglTexture,r.TEXTURE0+te);const G=n.get(ye);if(ye.version!==G.__version||we===!0){t.activeTexture(r.TEXTURE0+te);const fe=It.getPrimaries(It.workingColorSpace),ve=A.colorSpace===jr?null:It.getPrimaries(A.colorSpace),Ee=A.colorSpace===jr||fe===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let X=w(A.image,!1,a.maxTextureSize);X=Tt(A,X);const Ue=o.convert(A.format,A.colorSpace),Ye=o.convert(A.type);let Ze=L(A.internalFormat,Ue,Ye,A.colorSpace,A.isVideoTexture);re(Se,A);let Oe;const st=A.mipmaps,it=A.isVideoTexture!==!0,vt=G.__version===void 0||we===!0,j=ye.dataReady,De=P(A,X);if(A.isDepthTexture)Ze=T(A.format===To,A.type),vt&&(it?t.texStorage2D(r.TEXTURE_2D,1,Ze,X.width,X.height):t.texImage2D(r.TEXTURE_2D,0,Ze,X.width,X.height,0,Ue,Ye,null));else if(A.isDataTexture)if(st.length>0){it&&vt&&t.texStorage2D(r.TEXTURE_2D,De,Ze,st[0].width,st[0].height);for(let oe=0,xe=st.length;oe<xe;oe++)Oe=st[oe],it?j&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Oe.width,Oe.height,Ue,Ye,Oe.data):t.texImage2D(r.TEXTURE_2D,oe,Ze,Oe.width,Oe.height,0,Ue,Ye,Oe.data);A.generateMipmaps=!1}else it?(vt&&t.texStorage2D(r.TEXTURE_2D,De,Ze,X.width,X.height),j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,X.width,X.height,Ue,Ye,X.data)):t.texImage2D(r.TEXTURE_2D,0,Ze,X.width,X.height,0,Ue,Ye,X.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,Ze,st[0].width,st[0].height,X.depth);for(let oe=0,xe=st.length;oe<xe;oe++)if(Oe=st[oe],A.format!==Fi)if(Ue!==null)if(it){if(j)if(A.layerUpdates.size>0){const Fe=Ig(Oe.width,Oe.height,A.format,A.type);for(const Ie of A.layerUpdates){const ct=Oe.data.subarray(Ie*Fe/Oe.data.BYTES_PER_ELEMENT,(Ie+1)*Fe/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,Ie,Oe.width,Oe.height,1,Ue,ct)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Oe.width,Oe.height,X.depth,Ue,Oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,Ze,Oe.width,Oe.height,X.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?j&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Oe.width,Oe.height,X.depth,Ue,Ye,Oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,Ze,Oe.width,Oe.height,X.depth,0,Ue,Ye,Oe.data)}else{it&&vt&&t.texStorage2D(r.TEXTURE_2D,De,Ze,st[0].width,st[0].height);for(let oe=0,xe=st.length;oe<xe;oe++)Oe=st[oe],A.format!==Fi?Ue!==null?it?j&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,Oe.width,Oe.height,Ue,Oe.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,Ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?j&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Oe.width,Oe.height,Ue,Ye,Oe.data):t.texImage2D(r.TEXTURE_2D,oe,Ze,Oe.width,Oe.height,0,Ue,Ye,Oe.data)}else if(A.isDataArrayTexture)if(it){if(vt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,Ze,X.width,X.height,X.depth),j)if(A.layerUpdates.size>0){const oe=Ig(X.width,X.height,A.format,A.type);for(const xe of A.layerUpdates){const Fe=X.data.subarray(xe*oe/X.data.BYTES_PER_ELEMENT,(xe+1)*oe/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,X.width,X.height,1,Ue,Ye,Fe)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Ue,Ye,X.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ze,X.width,X.height,X.depth,0,Ue,Ye,X.data);else if(A.isData3DTexture)it?(vt&&t.texStorage3D(r.TEXTURE_3D,De,Ze,X.width,X.height,X.depth),j&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Ue,Ye,X.data)):t.texImage3D(r.TEXTURE_3D,0,Ze,X.width,X.height,X.depth,0,Ue,Ye,X.data);else if(A.isFramebufferTexture){if(vt)if(it)t.texStorage2D(r.TEXTURE_2D,De,Ze,X.width,X.height);else{let oe=X.width,xe=X.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,Ze,oe,xe,0,Ue,Ye,null),oe>>=1,xe>>=1}}else if(st.length>0){if(it&&vt){const oe=Xe(st[0]);t.texStorage2D(r.TEXTURE_2D,De,Ze,oe.width,oe.height)}for(let oe=0,xe=st.length;oe<xe;oe++)Oe=st[oe],it?j&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Ue,Ye,Oe):t.texImage2D(r.TEXTURE_2D,oe,Ze,Ue,Ye,Oe);A.generateMipmaps=!1}else if(it){if(vt){const oe=Xe(X);t.texStorage2D(r.TEXTURE_2D,De,Ze,oe.width,oe.height)}j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,Ye,X)}else t.texImage2D(r.TEXTURE_2D,0,Ze,Ue,Ye,X);S(A)&&y(Se),G.__version=ye.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function ge(F,A,te){if(A.image.length!==6)return;const Se=_e(F,A),we=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+te);const ye=n.get(we);if(we.version!==ye.__version||Se===!0){t.activeTexture(r.TEXTURE0+te);const G=It.getPrimaries(It.workingColorSpace),fe=A.colorSpace===jr?null:It.getPrimaries(A.colorSpace),ve=A.colorSpace===jr||G===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ee=A.isCompressedTexture||A.image[0].isCompressedTexture,X=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let xe=0;xe<6;xe++)!Ee&&!X?Ue[xe]=w(A.image[xe],!0,a.maxCubemapSize):Ue[xe]=X?A.image[xe].image:A.image[xe],Ue[xe]=Tt(A,Ue[xe]);const Ye=Ue[0],Ze=o.convert(A.format,A.colorSpace),Oe=o.convert(A.type),st=L(A.internalFormat,Ze,Oe,A.colorSpace),it=A.isVideoTexture!==!0,vt=ye.__version===void 0||Se===!0,j=we.dataReady;let De=P(A,Ye);re(r.TEXTURE_CUBE_MAP,A);let oe;if(Ee){it&&vt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,De,st,Ye.width,Ye.height);for(let xe=0;xe<6;xe++){oe=Ue[xe].mipmaps;for(let Fe=0;Fe<oe.length;Fe++){const Ie=oe[Fe];A.format!==Fi?Ze!==null?it?j&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,0,0,Ie.width,Ie.height,Ze,Ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,st,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,0,0,Ie.width,Ie.height,Ze,Oe,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe,st,Ie.width,Ie.height,0,Ze,Oe,Ie.data)}}}else{if(oe=A.mipmaps,it&&vt){oe.length>0&&De++;const xe=Xe(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,De,st,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(X){it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ue[xe].width,Ue[xe].height,Ze,Oe,Ue[xe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Ue[xe].width,Ue[xe].height,0,Ze,Oe,Ue[xe].data);for(let Fe=0;Fe<oe.length;Fe++){const ct=oe[Fe].image[xe].image;it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,0,0,ct.width,ct.height,Ze,Oe,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,st,ct.width,ct.height,0,Ze,Oe,ct.data)}}else{it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ze,Oe,Ue[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Ze,Oe,Ue[xe]);for(let Fe=0;Fe<oe.length;Fe++){const Ie=oe[Fe];it?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,0,0,Ze,Oe,Ie.image[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Fe+1,st,Ze,Oe,Ie.image[xe])}}}S(A)&&y(r.TEXTURE_CUBE_MAP),ye.__version=we.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function le(F,A,te,Se,we,ye){const G=o.convert(te.format,te.colorSpace),fe=o.convert(te.type),ve=L(te.internalFormat,G,fe,te.colorSpace),Ee=n.get(A),X=n.get(te);if(X.__renderTarget=A,!Ee.__hasExternalTextures){const Ue=Math.max(1,A.width>>ye),Ye=Math.max(1,A.height>>ye);we===r.TEXTURE_3D||we===r.TEXTURE_2D_ARRAY?t.texImage3D(we,ye,ve,Ue,Ye,A.depth,0,G,fe,null):t.texImage2D(we,ye,ve,Ue,Ye,0,G,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),pt(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,we,X.__webglTexture,0,gt(A)):(we===r.TEXTURE_2D||we>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Se,we,X.__webglTexture,ye),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(F,A,te){if(r.bindRenderbuffer(r.RENDERBUFFER,F),A.depthBuffer){const Se=A.depthTexture,we=Se&&Se.isDepthTexture?Se.type:null,ye=T(A.stencilBuffer,we),G=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=gt(A);pt(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,ye,A.width,A.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,ye,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ye,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,G,r.RENDERBUFFER,F)}else{const Se=A.textures;for(let we=0;we<Se.length;we++){const ye=Se[we],G=o.convert(ye.format,ye.colorSpace),fe=o.convert(ye.type),ve=L(ye.internalFormat,G,fe,ye.colorSpace),Ee=gt(A);te&&pt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ve,A.width,A.height):pt(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,ve,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ve,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=n.get(A.depthTexture);Se.__renderTarget=A,(!Se.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ae(A.depthTexture,0);const we=Se.__webglTexture,ye=gt(A);if(A.depthTexture.format===wo)pt(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,we,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,we,0);else if(A.depthTexture.format===To)pt(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,we,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function ke(F){const A=n.get(F),te=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const Se=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Se){const we=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Se.removeEventListener("dispose",we)};Se.addEventListener("dispose",we),A.__depthDisposeCallback=we}A.__boundDepthTexture=Se}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const Se=F.texture.mipmaps;Se&&Se.length>0?be(A.__webglFramebuffer[0],F):be(A.__webglFramebuffer,F)}else if(te){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]===void 0)A.__webglDepthbuffer[Se]=r.createRenderbuffer(),Me(A.__webglDepthbuffer[Se],F,!1);else{const we=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer[Se];r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,ye)}}else{const Se=F.texture.mipmaps;if(Se&&Se.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Me(A.__webglDepthbuffer,F,!1);else{const we=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,ye)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(F,A,te){const Se=n.get(F);A!==void 0&&le(Se.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&ke(F)}function Rt(F){const A=F.texture,te=n.get(F),Se=n.get(A);F.addEventListener("dispose",D);const we=F.textures,ye=F.isWebGLCubeRenderTarget===!0,G=we.length>1;if(G||(Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture()),Se.__version=A.version,u.memory.textures++),ye){te.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[fe]=[];for(let ve=0;ve<A.mipmaps.length;ve++)te.__webglFramebuffer[fe][ve]=r.createFramebuffer()}else te.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)te.__webglFramebuffer[fe]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(G)for(let fe=0,ve=we.length;fe<ve;fe++){const Ee=n.get(we[fe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),u.memory.textures++)}if(F.samples>0&&pt(F)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let fe=0;fe<we.length;fe++){const ve=we[fe];te.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[fe]);const Ee=o.convert(ve.format,ve.colorSpace),X=o.convert(ve.type),Ue=L(ve.internalFormat,Ee,X,ve.colorSpace,F.isXRRenderTarget===!0),Ye=gt(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,Ue,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,te.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(te.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ye){t.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),re(r.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)le(te.__webglFramebuffer[fe][ve],F,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else le(te.__webglFramebuffer[fe],F,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(A)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){for(let fe=0,ve=we.length;fe<ve;fe++){const Ee=we[fe],X=n.get(Ee);t.bindTexture(r.TEXTURE_2D,X.__webglTexture),re(r.TEXTURE_2D,Ee),le(te.__webglFramebuffer,F,Ee,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),S(Ee)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(fe=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,Se.__webglTexture),re(fe,A),A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)le(te.__webglFramebuffer[ve],F,A,r.COLOR_ATTACHMENT0,fe,ve);else le(te.__webglFramebuffer,F,A,r.COLOR_ATTACHMENT0,fe,0);S(A)&&y(fe),t.unbindTexture()}F.depthBuffer&&ke(F)}function Pt(F){const A=F.textures;for(let te=0,Se=A.length;te<Se;te++){const we=A[te];if(S(we)){const ye=I(F),G=n.get(we).__webglTexture;t.bindTexture(ye,G),y(ye),t.unbindTexture()}}}const ft=[],V=[];function nn(F){if(F.samples>0){if(pt(F)===!1){const A=F.textures,te=F.width,Se=F.height;let we=r.COLOR_BUFFER_BIT;const ye=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=n.get(F),fe=A.length>1;if(fe)for(let Ee=0;Ee<A.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,G.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer);const ve=F.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,G.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let Ee=0;Ee<A.length;Ee++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(we|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(we|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,G.__webglColorRenderbuffer[Ee]);const X=n.get(A[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,X,0)}r.blitFramebuffer(0,0,te,Se,0,0,te,Se,we,r.NEAREST),h===!0&&(ft.length=0,V.length=0,ft.push(r.COLOR_ATTACHMENT0+Ee),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ft.push(ye),V.push(ye),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,V)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Ee=0;Ee<A.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,G.__webglColorRenderbuffer[Ee]);const X=n.get(A[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,G.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,X,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const A=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function gt(F){return Math.min(a.maxSamples,F.samples)}function pt(F){const A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Je(F){const A=u.render.frame;m.get(F)!==A&&(m.set(F,A),F.update())}function Tt(F,A){const te=F.colorSpace,Se=F.format,we=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||te!==_a&&te!==jr&&(It.getTransfer(te)===Ft?(Se!==Fi||we!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function Xe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.setTexture2D=ae,this.setTexture2DArray=he,this.setTexture3D=me,this.setTextureCube=H,this.rebindTextures=We,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=le,this.useMultisampledRTT=pt}function kT(r,e){function t(n,a=jr){let o;const u=It.getTransfer(a);if(n===mr)return r.UNSIGNED_BYTE;if(n===df)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Bv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ov)return r.BYTE;if(n===zv)return r.SHORT;if(n===Eo)return r.UNSIGNED_SHORT;if(n===cf)return r.INT;if(n===ws)return r.UNSIGNED_INT;if(n===cr)return r.FLOAT;if(n===bo)return r.HALF_FLOAT;if(n===Gv)return r.ALPHA;if(n===Hv)return r.RGB;if(n===Fi)return r.RGBA;if(n===wo)return r.DEPTH_COMPONENT;if(n===To)return r.DEPTH_STENCIL;if(n===Vv)return r.RED;if(n===ff)return r.RED_INTEGER;if(n===Wv)return r.RG;if(n===pf)return r.RG_INTEGER;if(n===mf)return r.RGBA_INTEGER;if(n===Su||n===Eu||n===Mu||n===wu)if(u===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Su)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Su)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wh||n===Th||n===bh||n===Ah)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===wh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Th)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ah)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Rh||n===Ph)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ch||n===Rh)return u===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ph)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lh||n===Dh||n===Nh||n===Ih||n===Uh||n===Fh||n===kh||n===Oh||n===zh||n===Bh||n===Gh||n===Hh||n===Vh||n===Wh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Lh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ih)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tu||n===jh||n===Xh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Tu)return u===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jv||n===$h||n===Yh||n===qh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Tu)return o.COMPRESSED_RED_RGTC1_EXT;if(n===$h)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const OT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zT=`
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

}`;class BT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new ei,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kr({vertexShader:OT,fragmentShader:zT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hr(new Fu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GT extends Ea{constructor(e,t){super();const n=this;let a=null,o=1,u=null,c="local-floor",h=1,f=null,m=null,g=null,v=null,x=null,M=null;const w=new BT,S=t.getContextAttributes();let y=null,I=null;const L=[],T=[],P=new kt;let N=null;const D=new oi;D.viewport=new tn;const O=new oi;O.viewport=new tn;const C=[D,O],E=new oS;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ge=L[Y];return ge===void 0&&(ge=new Wd,L[Y]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Y){let ge=L[Y];return ge===void 0&&(ge=new Wd,L[Y]=ge),ge.getGripSpace()},this.getHand=function(Y){let ge=L[Y];return ge===void 0&&(ge=new Wd,L[Y]=ge),ge.getHandSpace()};function Q(Y){const ge=T.indexOf(Y.inputSource);if(ge===-1)return;const le=L[ge];le!==void 0&&(le.update(Y.inputSource,Y.frame,f||u),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ne(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ne),a.removeEventListener("inputsourceschange",ae);for(let Y=0;Y<L.length;Y++){const ge=T[Y];ge!==null&&(T[Y]=null,L[Y].disconnect(ge))}k=null,q=null,w.reset(),e.setRenderTarget(y),x=null,v=null,g=null,a=null,I=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(Y){f=Y},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ne),a.addEventListener("inputsourceschange",ae),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Me=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=S.stencil?To:wo,Me=S.stencil?Mo:ws);const ke={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:o};g=new XRWebGLBinding(a,t),v=g.createProjectionLayer(ke),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new Ts(v.textureWidth,v.textureHeight,{format:Fi,type:mr,depthTexture:new a_(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const le={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,le),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new Ts(x.framebufferWidth,x.framebufferHeight,{format:Fi,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),f=null,u=await a.requestReferenceSpace(c),_e.setContext(a),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ae(Y){for(let ge=0;ge<Y.removed.length;ge++){const le=Y.removed[ge],Me=T.indexOf(le);Me>=0&&(T[Me]=null,L[Me].disconnect(le))}for(let ge=0;ge<Y.added.length;ge++){const le=Y.added[ge];let Me=T.indexOf(le);if(Me===-1){for(let ke=0;ke<L.length;ke++)if(ke>=T.length){T.push(le),Me=ke;break}else if(T[ke]===null){T[ke]=le,Me=ke;break}if(Me===-1)break}const be=L[Me];be&&be.connect(le)}}const he=new ce,me=new ce;function H(Y,ge,le){he.setFromMatrixPosition(ge.matrixWorld),me.setFromMatrixPosition(le.matrixWorld);const Me=he.distanceTo(me),be=ge.projectionMatrix.elements,ke=le.projectionMatrix.elements,We=be[14]/(be[10]-1),Rt=be[14]/(be[10]+1),Pt=(be[9]+1)/be[5],ft=(be[9]-1)/be[5],V=(be[8]-1)/be[0],nn=(ke[8]+1)/ke[0],gt=We*V,pt=We*nn,Je=Me/(-V+nn),Tt=Je*-V;if(ge.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Tt),Y.translateZ(Je),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(ge.projectionMatrix),Y.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Xe=We+Je,F=Rt+Je,A=gt-Tt,te=pt+(Me-Tt),Se=Pt*Rt/F*Xe,we=ft*Rt/F*Xe;Y.projectionMatrix.makePerspective(A,te,Se,we,Xe,F),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pe(Y,ge){ge===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ge.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let ge=Y.near,le=Y.far;w.texture!==null&&(w.depthNear>0&&(ge=w.depthNear),w.depthFar>0&&(le=w.depthFar)),E.near=O.near=D.near=ge,E.far=O.far=D.far=le,(k!==E.near||q!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),k=E.near,q=E.far),D.layers.mask=Y.layers.mask|2,O.layers.mask=Y.layers.mask|4,E.layers.mask=D.layers.mask|O.layers.mask;const Me=Y.parent,be=E.cameras;pe(E,Me);for(let ke=0;ke<be.length;ke++)pe(be[ke],Me);be.length===2?H(E,D,O):E.projectionMatrix.copy(D.projectionMatrix),se(Y,E,Me)};function se(Y,ge,le){le===null?Y.matrix.copy(ge.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ge.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ge.projectionMatrix),Y.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Kh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(Y){h=Y,v!==null&&(v.fixedFoveation=Y),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Y)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)};let B=null;function re(Y,ge){if(m=ge.getViewerPose(f||u),M=ge,m!==null){const le=m.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let Me=!1;le.length!==E.cameras.length&&(E.cameras.length=0,Me=!0);for(let We=0;We<le.length;We++){const Rt=le[We];let Pt=null;if(x!==null)Pt=x.getViewport(Rt);else{const V=g.getViewSubImage(v,Rt);Pt=V.viewport,We===0&&(e.setRenderTargetTextures(I,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(I))}let ft=C[We];ft===void 0&&(ft=new oi,ft.layers.enable(We),ft.viewport=new tn,C[We]=ft),ft.matrix.fromArray(Rt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Rt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),We===0&&(E.matrix.copy(ft.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Me===!0&&E.cameras.push(ft)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const We=g.getDepthInformation(le[0]);We&&We.isValid&&We.texture&&w.init(e,We,a.renderState)}}for(let le=0;le<L.length;le++){const Me=T[le],be=L[le];Me!==null&&be!==void 0&&be.update(Me,ge,f||u)}B&&B(Y,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),M=null}const _e=new l_;_e.setAnimationLoop(re),this.setAnimationLoop=function(Y){B=Y},this.dispose=function(){}}}const ms=new gr,HT=new qt;function VT(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function n(S,y){y.color.getRGB(S.fogColor.value,Jv(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,I,L,T){y.isMeshBasicMaterial||y.isMeshLambertMaterial?o(S,y):y.isMeshToonMaterial?(o(S,y),g(S,y)):y.isMeshPhongMaterial?(o(S,y),m(S,y)):y.isMeshStandardMaterial?(o(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,T)):y.isMeshMatcapMaterial?(o(S,y),M(S,y)):y.isMeshDepthMaterial?o(S,y):y.isMeshDistanceMaterial?(o(S,y),w(S,y)):y.isMeshNormalMaterial?o(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?h(S,y,I,L):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const I=e.get(y),L=I.envMap,T=I.envMapRotation;L&&(S.envMap.value=L,ms.copy(T),ms.x*=-1,ms.y*=-1,ms.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),S.envMapRotation.value.setFromMatrix4(HT.makeRotationFromEuler(ms)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,I,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*I,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,I){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const I=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function WT(r,e,t,n){let a={},o={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const T=L.program;n.uniformBlockBinding(I,T)}function f(I,L){let T=a[I.id];T===void 0&&(M(I),T=m(I),a[I.id]=T,I.addEventListener("dispose",S));const P=L.program;n.updateUBOMapping(I,P);const N=e.render.frame;o[I.id]!==N&&(v(I),o[I.id]=N)}function m(I){const L=g();I.__bindingPointIndex=L;const T=r.createBuffer(),P=I.__size,N=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,P,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,T),T}function g(){for(let I=0;I<c;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const L=a[I.id],T=I.uniforms,P=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,D=T.length;N<D;N++){const O=Array.isArray(T[N])?T[N]:[T[N]];for(let C=0,E=O.length;C<E;C++){const k=O[C];if(x(k,N,C,P)===!0){const q=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let ne=0;for(let ae=0;ae<Q.length;ae++){const he=Q[ae],me=w(he);typeof he=="number"||typeof he=="boolean"?(k.__data[0]=he,r.bufferSubData(r.UNIFORM_BUFFER,q+ne,k.__data)):he.isMatrix3?(k.__data[0]=he.elements[0],k.__data[1]=he.elements[1],k.__data[2]=he.elements[2],k.__data[3]=0,k.__data[4]=he.elements[3],k.__data[5]=he.elements[4],k.__data[6]=he.elements[5],k.__data[7]=0,k.__data[8]=he.elements[6],k.__data[9]=he.elements[7],k.__data[10]=he.elements[8],k.__data[11]=0):(he.toArray(k.__data,ne),ne+=me.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(I,L,T,P){const N=I.value,D=L+"_"+T;if(P[D]===void 0)return typeof N=="number"||typeof N=="boolean"?P[D]=N:P[D]=N.clone(),!0;{const O=P[D];if(typeof N=="number"||typeof N=="boolean"){if(O!==N)return P[D]=N,!0}else if(O.equals(N)===!1)return O.copy(N),!0}return!1}function M(I){const L=I.uniforms;let T=0;const P=16;for(let D=0,O=L.length;D<O;D++){const C=Array.isArray(L[D])?L[D]:[L[D]];for(let E=0,k=C.length;E<k;E++){const q=C[E],Q=Array.isArray(q.value)?q.value:[q.value];for(let ne=0,ae=Q.length;ne<ae;ne++){const he=Q[ne],me=w(he),H=T%P,pe=H%me.boundary,se=H+pe;T+=pe,se!==0&&P-se<me.storage&&(T+=P-se),q.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=me.storage}}}const N=T%P;return N>0&&(T+=P-N),I.__size=T,I.__cache={},this}function w(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function S(I){const L=I.target;L.removeEventListener("dispose",S);const T=u.indexOf(L.__bindingPointIndex);u.splice(T,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function y(){for(const I in a)r.deleteBuffer(a[I]);u=[],a={},o={}}return{bind:h,update:f,dispose:y}}class f_{constructor(e={}){const{canvas:t=Ax(),context:n=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),w=new Int32Array(4);let S=null,y=null;const I=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1;this._outputColorSpace=_i;let N=0,D=0,O=null,C=-1,E=null;const k=new tn,q=new tn;let Q=null;const ne=new Ct(0);let ae=0,he=t.width,me=t.height,H=1,pe=null,se=null;const B=new tn(0,0,he,me),re=new tn(0,0,he,me);let _e=!1;const Y=new i_;let ge=!1,le=!1;const Me=new qt,be=new qt,ke=new ce,We=new tn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function ft(){return O===null?H:1}let V=n;function nn(R,K){return t.getContext(R,K)}try{const R={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uf}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),V===null){const K="webgl2";if(V=nn(K,R),V===null)throw nn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let gt,pt,Je,Tt,Xe,F,A,te,Se,we,ye,G,fe,ve,Ee,X,Ue,Ye,Ze,Oe,st,it,vt,j;function De(){gt=new tw(V),gt.init(),it=new kT(V,gt),pt=new YM(V,gt,e,it),Je=new UT(V,gt),pt.reverseDepthBuffer&&v&&Je.buffers.depth.setReversed(!0),Tt=new rw(V),Xe=new ET,F=new FT(V,gt,Je,Xe,pt,it,Tt),A=new KM(T),te=new ew(T),Se=new cS(V),vt=new XM(V,Se),we=new nw(V,Se,Tt,vt),ye=new aw(V,we,Se,Tt),Ze=new sw(V,pt,F),X=new qM(Xe),G=new ST(T,A,te,gt,pt,vt,X),fe=new VT(T,Xe),ve=new wT,Ee=new PT(gt),Ye=new jM(T,A,te,Je,ye,x,h),Ue=new NT(T,ye,pt),j=new WT(V,Tt,pt,Je),Oe=new $M(V,gt,Tt),st=new iw(V,gt,Tt),Tt.programs=G.programs,T.capabilities=pt,T.extensions=gt,T.properties=Xe,T.renderLists=ve,T.shadowMap=Ue,T.state=Je,T.info=Tt}De();const oe=new GT(T,V);this.xr=oe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(he,me,!1))},this.getSize=function(R){return R.set(he,me)},this.setSize=function(R,K,de=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=R,me=K,t.width=Math.floor(R*H),t.height=Math.floor(K*H),de===!0&&(t.style.width=R+"px",t.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(he*H,me*H).floor()},this.setDrawingBufferSize=function(R,K,de){he=R,me=K,H=de,t.width=Math.floor(R*de),t.height=Math.floor(K*de),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(B)},this.setViewport=function(R,K,de,ee){R.isVector4?B.set(R.x,R.y,R.z,R.w):B.set(R,K,de,ee),Je.viewport(k.copy(B).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,K,de,ee){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,K,de,ee),Je.scissor(q.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(R){Je.setScissorTest(_e=R)},this.setOpaqueSort=function(R){pe=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,de=!0){let ee=0;if(R){let Z=!1;if(O!==null){const Pe=O.texture.format;Z=Pe===mf||Pe===pf||Pe===ff}if(Z){const Pe=O.texture.type,ze=Pe===mr||Pe===ws||Pe===Eo||Pe===Mo||Pe===df||Pe===hf,He=Ye.getClearColor(),$e=Ye.getClearAlpha(),dt=He.r,lt=He.g,Ke=He.b;ze?(M[0]=dt,M[1]=lt,M[2]=Ke,M[3]=$e,V.clearBufferuiv(V.COLOR,0,M)):(w[0]=dt,w[1]=lt,w[2]=Ke,w[3]=$e,V.clearBufferiv(V.COLOR,0,w))}else ee|=V.COLOR_BUFFER_BIT}K&&(ee|=V.DEPTH_BUFFER_BIT),de&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Ye.dispose(),ve.dispose(),Ee.dispose(),Xe.dispose(),A.dispose(),te.dispose(),ye.dispose(),vt.dispose(),j.dispose(),G.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Kt),oe.removeEventListener("sessionend",Tn),jn.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=Tt.autoReset,K=Ue.enabled,de=Ue.autoUpdate,ee=Ue.needsUpdate,Z=Ue.type;De(),Tt.autoReset=R,Ue.enabled=K,Ue.autoUpdate=de,Ue.needsUpdate=ee,Ue.type=Z}function Ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ct(R){const K=R.target;K.removeEventListener("dispose",ct),Ut(K)}function Ut(R){Ht(R),Xe.remove(R)}function Ht(R){const K=Xe.get(R).programs;K!==void 0&&(K.forEach(function(de){G.releaseProgram(de)}),R.isShaderMaterial&&G.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,de,ee,Z,Pe){K===null&&(K=Rt);const ze=Z.isMesh&&Z.matrixWorld.determinant()<0,He=No(R,K,de,ee,Z);Je.setMaterial(ee,ze);let $e=de.index,dt=1;if(ee.wireframe===!0){if($e=we.getWireframeAttribute(de),$e===void 0)return;dt=2}const lt=de.drawRange,Ke=de.attributes.position;let Mt=lt.start*dt,mt=(lt.start+lt.count)*dt;Pe!==null&&(Mt=Math.max(Mt,Pe.start*dt),mt=Math.min(mt,(Pe.start+Pe.count)*dt)),$e!==null?(Mt=Math.max(Mt,0),mt=Math.min(mt,$e.count)):Ke!=null&&(Mt=Math.max(Mt,0),mt=Math.min(mt,Ke.count));const Zt=mt-Mt;if(Zt<0||Zt===1/0)return;vt.setup(Z,ee,He,de,$e);let jt,At=Oe;if($e!==null&&(jt=Se.get($e),At=st,At.setIndex(jt)),Z.isMesh)ee.wireframe===!0?(Je.setLineWidth(ee.wireframeLinewidth*ft()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(Z.isLine){let rt=ee.linewidth;rt===void 0&&(rt=1),Je.setLineWidth(rt*ft()),Z.isLineSegments?At.setMode(V.LINES):Z.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else Z.isPoints?At.setMode(V.POINTS):Z.isSprite&&At.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)bu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))At.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const rt=Z._multiDrawStarts,Qt=Z._multiDrawCounts,Et=Z._multiDrawCount,An=$e?Se.get($e).bytesPerElement:1,_r=Xe.get(ee).currentProgram.getUniforms();for(let zn=0;zn<Et;zn++)_r.setValue(V,"_gl_DrawID",zn),At.render(rt[zn]/An,Qt[zn])}else if(Z.isInstancedMesh)At.renderInstances(Mt,Zt,Z.count);else if(de.isInstancedBufferGeometry){const rt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Qt=Math.min(de.instanceCount,rt);At.renderInstances(Mt,Zt,Qt)}else At.render(Mt,Zt)};function yt(R,K,de){R.transparent===!0&&R.side===lr&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,Ei(R,K,de),R.side=qr,R.needsUpdate=!0,Ei(R,K,de),R.side=lr):Ei(R,K,de)}this.compile=function(R,K,de=null){de===null&&(de=R),y=Ee.get(de),y.init(K),L.push(y),de.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),R!==de&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights();const ee=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Pe=Z.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){const He=Pe[ze];yt(He,de,Z),ee.add(He)}else yt(Pe,de,Z),ee.add(Pe)}),y=L.pop(),ee},this.compileAsync=function(R,K,de=null){const ee=this.compile(R,K,de);return new Promise(Z=>{function Pe(){if(ee.forEach(function(ze){Xe.get(ze).currentProgram.isReady()&&ee.delete(ze)}),ee.size===0){Z(R);return}setTimeout(Pe,10)}gt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let hn=null;function fn(R){hn&&hn(R)}function Kt(){jn.stop()}function Tn(){jn.start()}const jn=new l_;jn.setAnimationLoop(fn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(R){hn=R,oe.setAnimationLoop(R),R===null?jn.stop():jn.start()},oe.addEventListener("sessionstart",Kt),oe.addEventListener("sessionend",Tn),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(K),K=oe.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,K,O),y=Ee.get(R,L.length),y.init(K),L.push(y),be.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y.setFromProjectionMatrix(be),le=this.localClippingEnabled,ge=X.init(this.clippingPlanes,le),S=ve.get(R,I.length),S.init(),I.push(S),oe.enabled===!0&&oe.isPresenting===!0){const Pe=T.xr.getDepthSensingMesh();Pe!==null&&On(Pe,K,-1/0,T.sortObjects)}On(R,K,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(pe,se),Pt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Pt&&Ye.addToRenderList(S,R),this.info.render.frame++,ge===!0&&X.beginShadows();const de=y.state.shadowsArray;Ue.render(de,R,K),ge===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,Z=S.transmissive;if(y.setupLights(),K.isArrayCamera){const Pe=K.cameras;if(Z.length>0)for(let ze=0,He=Pe.length;ze<He;ze++){const $e=Pe[ze];zt(ee,Z,R,$e)}Pt&&Ye.render(R);for(let ze=0,He=Pe.length;ze<He;ze++){const $e=Pe[ze];bt(S,R,$e,$e.viewport)}}else Z.length>0&&zt(ee,Z,R,K),Pt&&Ye.render(R),bt(S,R,K);O!==null&&D===0&&(F.updateMultisampleRenderTarget(O),F.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(T,R,K),vt.resetDefaultState(),C=-1,E=null,L.pop(),L.length>0?(y=L[L.length-1],ge===!0&&X.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function On(R,K,de,ee){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)de=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){ee&&We.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const ze=ye.update(R),He=R.material;He.visible&&S.push(R,ze,He,de,We.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const ze=ye.update(R),He=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),We.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),We.copy(ze.boundingSphere.center)),We.applyMatrix4(R.matrixWorld).applyMatrix4(be)),Array.isArray(He)){const $e=ze.groups;for(let dt=0,lt=$e.length;dt<lt;dt++){const Ke=$e[dt],Mt=He[Ke.materialIndex];Mt&&Mt.visible&&S.push(R,ze,Mt,de,We.z,Ke)}}else He.visible&&S.push(R,ze,He,de,We.z,null)}}const Pe=R.children;for(let ze=0,He=Pe.length;ze<He;ze++)On(Pe[ze],K,de,ee)}function bt(R,K,de,ee){const Z=R.opaque,Pe=R.transmissive,ze=R.transparent;y.setupLightsView(de),ge===!0&&X.setGlobalState(T.clippingPlanes,de),ee&&Je.viewport(k.copy(ee)),Z.length>0&&bn(Z,K,de),Pe.length>0&&bn(Pe,K,de),ze.length>0&&bn(ze,K,de),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function zt(R,K,de,ee){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ee.id]===void 0&&(y.state.transmissionRenderTarget[ee.id]=new Ts(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?bo:mr,minFilter:Ms,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Pe=y.state.transmissionRenderTarget[ee.id],ze=ee.viewport||k;Pe.setSize(ze.z*T.transmissionResolutionScale,ze.w*T.transmissionResolutionScale);const He=T.getRenderTarget();T.setRenderTarget(Pe),T.getClearColor(ne),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),Pt&&Ye.render(de);const $e=T.toneMapping;T.toneMapping=$r;const dt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),ge===!0&&X.setGlobalState(T.clippingPlanes,ee),bn(R,de,ee),F.updateMultisampleRenderTarget(Pe),F.updateRenderTargetMipmap(Pe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ke=0,Mt=K.length;Ke<Mt;Ke++){const mt=K[Ke],Zt=mt.object,jt=mt.geometry,At=mt.material,rt=mt.group;if(At.side===lr&&Zt.layers.test(ee.layers)){const Qt=At.side;At.side=Jn,At.needsUpdate=!0,pn(Zt,de,ee,jt,At,rt),At.side=Qt,At.needsUpdate=!0,lt=!0}}lt===!0&&(F.updateMultisampleRenderTarget(Pe),F.updateRenderTargetMipmap(Pe))}T.setRenderTarget(He),T.setClearColor(ne,ae),dt!==void 0&&(ee.viewport=dt),T.toneMapping=$e}function bn(R,K,de){const ee=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Pe=R.length;Z<Pe;Z++){const ze=R[Z],He=ze.object,$e=ze.geometry,dt=ze.group;let lt=ze.material;lt.allowOverride===!0&&ee!==null&&(lt=ee),He.layers.test(de.layers)&&pn(He,K,de,$e,lt,dt)}}function pn(R,K,de,ee,Z,Pe){R.onBeforeRender(T,K,de,ee,Z,Pe),R.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(T,K,de,ee,R,Pe),Z.transparent===!0&&Z.side===lr&&Z.forceSinglePass===!1?(Z.side=Jn,Z.needsUpdate=!0,T.renderBufferDirect(de,K,ee,Z,R,Pe),Z.side=qr,Z.needsUpdate=!0,T.renderBufferDirect(de,K,ee,Z,R,Pe),Z.side=lr):T.renderBufferDirect(de,K,ee,Z,R,Pe),R.onAfterRender(T,K,de,ee,Z,Pe)}function Ei(R,K,de){K.isScene!==!0&&(K=Rt);const ee=Xe.get(R),Z=y.state.lights,Pe=y.state.shadowsArray,ze=Z.state.version,He=G.getParameters(R,Z.state,Pe,K,de),$e=G.getProgramCacheKey(He);let dt=ee.programs;ee.environment=R.isMeshStandardMaterial?K.environment:null,ee.fog=K.fog,ee.envMap=(R.isMeshStandardMaterial?te:A).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,dt===void 0&&(R.addEventListener("dispose",ct),dt=new Map,ee.programs=dt);let lt=dt.get($e);if(lt!==void 0){if(ee.currentProgram===lt&&ee.lightsStateVersion===ze)return Oi(R,He),lt}else He.uniforms=G.getUniforms(R),R.onBeforeCompile(He,T),lt=G.acquireProgram(He,$e),dt.set($e,lt),ee.uniforms=He.uniforms;const Ke=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=X.uniform),Oi(R,He),ee.needsLights=Bu(R),ee.lightsStateVersion=ze,ee.needsLights&&(Ke.ambientLightColor.value=Z.state.ambient,Ke.lightProbe.value=Z.state.probe,Ke.directionalLights.value=Z.state.directional,Ke.directionalLightShadows.value=Z.state.directionalShadow,Ke.spotLights.value=Z.state.spot,Ke.spotLightShadows.value=Z.state.spotShadow,Ke.rectAreaLights.value=Z.state.rectArea,Ke.ltc_1.value=Z.state.rectAreaLTC1,Ke.ltc_2.value=Z.state.rectAreaLTC2,Ke.pointLights.value=Z.state.point,Ke.pointLightShadows.value=Z.state.pointShadow,Ke.hemisphereLights.value=Z.state.hemi,Ke.directionalShadowMap.value=Z.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ke.spotShadowMap.value=Z.state.spotShadowMap,Ke.spotLightMatrix.value=Z.state.spotLightMatrix,Ke.spotLightMap.value=Z.state.spotLightMap,Ke.pointShadowMap.value=Z.state.pointShadowMap,Ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=lt,ee.uniformsList=null,lt}function Zr(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Au.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Oi(R,K){const de=Xe.get(R);de.outputColorSpace=K.outputColorSpace,de.batching=K.batching,de.batchingColor=K.batchingColor,de.instancing=K.instancing,de.instancingColor=K.instancingColor,de.instancingMorph=K.instancingMorph,de.skinning=K.skinning,de.morphTargets=K.morphTargets,de.morphNormals=K.morphNormals,de.morphColors=K.morphColors,de.morphTargetsCount=K.morphTargetsCount,de.numClippingPlanes=K.numClippingPlanes,de.numIntersection=K.numClipIntersection,de.vertexAlphas=K.vertexAlphas,de.vertexTangents=K.vertexTangents,de.toneMapping=K.toneMapping}function No(R,K,de,ee,Z){K.isScene!==!0&&(K=Rt),F.resetTextureUnits();const Pe=K.fog,ze=ee.isMeshStandardMaterial?K.environment:null,He=O===null?T.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:_a,$e=(ee.isMeshStandardMaterial?te:A).get(ee.envMap||ze),dt=ee.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,lt=!!de.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ke=!!de.morphAttributes.position,Mt=!!de.morphAttributes.normal,mt=!!de.morphAttributes.color;let Zt=$r;ee.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Zt=T.toneMapping);const jt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,At=jt!==void 0?jt.length:0,rt=Xe.get(ee),Qt=y.state.lights;if(ge===!0&&(le===!0||R!==E)){const Sn=R===E&&ee.id===C;X.setState(ee,R,Sn)}let Et=!1;ee.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Qt.state.version||rt.outputColorSpace!==He||Z.isBatchedMesh&&rt.batching===!1||!Z.isBatchedMesh&&rt.batching===!0||Z.isBatchedMesh&&rt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&rt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&rt.instancing===!1||!Z.isInstancedMesh&&rt.instancing===!0||Z.isSkinnedMesh&&rt.skinning===!1||!Z.isSkinnedMesh&&rt.skinning===!0||Z.isInstancedMesh&&rt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&rt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&rt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&rt.instancingMorph===!1&&Z.morphTexture!==null||rt.envMap!==$e||ee.fog===!0&&rt.fog!==Pe||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==X.numPlanes||rt.numIntersection!==X.numIntersection)||rt.vertexAlphas!==dt||rt.vertexTangents!==lt||rt.morphTargets!==Ke||rt.morphNormals!==Mt||rt.morphColors!==mt||rt.toneMapping!==Zt||rt.morphTargetsCount!==At)&&(Et=!0):(Et=!0,rt.__version=ee.version);let An=rt.currentProgram;Et===!0&&(An=Ei(ee,K,Z));let _r=!1,zn=!1,Xi=!1;const Bt=An.getUniforms(),Cn=rt.uniforms;if(Je.useProgram(An.program)&&(_r=!0,zn=!0,Xi=!0),ee.id!==C&&(C=ee.id,zn=!0),_r||E!==R){Je.buffers.depth.getReversed()?(Me.copy(R.projectionMatrix),Rx(Me),Px(Me),Bt.setValue(V,"projectionMatrix",Me)):Bt.setValue(V,"projectionMatrix",R.projectionMatrix),Bt.setValue(V,"viewMatrix",R.matrixWorldInverse);const gn=Bt.map.cameraPosition;gn!==void 0&&gn.setValue(V,ke.setFromMatrixPosition(R.matrixWorld)),pt.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,zn=!0,Xi=!0)}if(Z.isSkinnedMesh){Bt.setOptional(V,Z,"bindMatrix"),Bt.setOptional(V,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Bt.setValue(V,"boneTexture",Sn.boneTexture,F))}Z.isBatchedMesh&&(Bt.setOptional(V,Z,"batchingTexture"),Bt.setValue(V,"batchingTexture",Z._matricesTexture,F),Bt.setOptional(V,Z,"batchingIdTexture"),Bt.setValue(V,"batchingIdTexture",Z._indirectTexture,F),Bt.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Bt.setValue(V,"batchingColorTexture",Z._colorsTexture,F));const mn=de.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Ze.update(Z,de,An),(zn||rt.receiveShadow!==Z.receiveShadow)&&(rt.receiveShadow=Z.receiveShadow,Bt.setValue(V,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Cn.envMap.value=$e,Cn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&K.environment!==null&&(Cn.envMapIntensity.value=K.environmentIntensity),zn&&(Bt.setValue(V,"toneMappingExposure",T.toneMappingExposure),rt.needsLights&&Io(Cn,Xi),Pe&&ee.fog===!0&&fe.refreshFogUniforms(Cn,Pe),fe.refreshMaterialUniforms(Cn,ee,H,me,y.state.transmissionRenderTarget[R.id]),Au.upload(V,Zr(rt),Cn,F)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Au.upload(V,Zr(rt),Cn,F),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Bt.setValue(V,"center",Z.center),Bt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Bt.setValue(V,"normalMatrix",Z.normalMatrix),Bt.setValue(V,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Sn=ee.uniformsGroups;for(let gn=0,Lt=Sn.length;gn<Lt;gn++){const zi=Sn[gn];j.update(zi,An),j.bind(zi,An)}}return An}function Io(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Bu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,K,de){const ee=Xe.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Xe.get(R.texture).__webglTexture=K,Xe.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:de,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const de=Xe.get(R);de.__webglFramebuffer=K,de.__useDefaultFramebuffer=K===void 0};const Uo=V.createFramebuffer();this.setRenderTarget=function(R,K=0,de=0){O=R,N=K,D=de;let ee=!0,Z=null,Pe=!1,ze=!1;if(R){const $e=Xe.get(R);if($e.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(V.FRAMEBUFFER,null),ee=!1;else if($e.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if($e.__hasExternalTextures)F.rebindTextures(R,Xe.get(R.texture).__webglTexture,Xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if($e.__boundDepthTexture!==Ke){if(Ke!==null&&Xe.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const dt=R.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(ze=!0);const lt=Xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(lt[K])?Z=lt[K][de]:Z=lt[K],Pe=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?Z=Xe.get(R).__webglMultisampledFramebuffer:Array.isArray(lt)?Z=lt[de]:Z=lt,k.copy(R.viewport),q.copy(R.scissor),Q=R.scissorTest}else k.copy(B).multiplyScalar(H).floor(),q.copy(re).multiplyScalar(H).floor(),Q=_e;if(de!==0&&(Z=Uo),Je.bindFramebuffer(V.FRAMEBUFFER,Z)&&ee&&Je.drawBuffers(R,Z),Je.viewport(k),Je.scissor(q),Je.setScissorTest(Q),Pe){const $e=Xe.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,$e.__webglTexture,de)}else if(ze){const $e=Xe.get(R.texture),dt=K;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,$e.__webglTexture,de,dt)}else if(R!==null&&de!==0){const $e=Xe.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$e.__webglTexture,de)}C=-1},this.readRenderTargetPixels=function(R,K,de,ee,Z,Pe,ze){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He){Je.bindFramebuffer(V.FRAMEBUFFER,He);try{const $e=R.texture,dt=$e.format,lt=$e.type;if(!pt.textureFormatReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ee&&de>=0&&de<=R.height-Z&&V.readPixels(K,de,ee,Z,it.convert(dt),it.convert(lt),Pe)}finally{const $e=O!==null?Xe.get(O).__webglFramebuffer:null;Je.bindFramebuffer(V.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,K,de,ee,Z,Pe,ze){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He)if(K>=0&&K<=R.width-ee&&de>=0&&de<=R.height-Z){Je.bindFramebuffer(V.FRAMEBUFFER,He);const $e=R.texture,dt=$e.format,lt=$e.type;if(!pt.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),V.readPixels(K,de,ee,Z,it.convert(dt),it.convert(lt),0);const Mt=O!==null?Xe.get(O).__webglFramebuffer:null;Je.bindFramebuffer(V.FRAMEBUFFER,Mt);const mt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Cx(V,mt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe),V.deleteBuffer(Ke),V.deleteSync(mt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,de=0){const ee=Math.pow(2,-de),Z=Math.floor(R.image.width*ee),Pe=Math.floor(R.image.height*ee),ze=K!==null?K.x:0,He=K!==null?K.y:0;F.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,de,0,0,ze,He,Z,Pe),Je.unbindTexture()};const Fo=V.createFramebuffer(),ko=V.createFramebuffer();this.copyTextureToTexture=function(R,K,de=null,ee=null,Z=0,Pe=null){Pe===null&&(Z!==0?(bu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=Z,Z=0):Pe=0);let ze,He,$e,dt,lt,Ke,Mt,mt,Zt;const jt=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(de!==null)ze=de.max.x-de.min.x,He=de.max.y-de.min.y,$e=de.isBox3?de.max.z-de.min.z:1,dt=de.min.x,lt=de.min.y,Ke=de.isBox3?de.min.z:0;else{const mn=Math.pow(2,-Z);ze=Math.floor(jt.width*mn),He=Math.floor(jt.height*mn),R.isDataArrayTexture?$e=jt.depth:R.isData3DTexture?$e=Math.floor(jt.depth*mn):$e=1,dt=0,lt=0,Ke=0}ee!==null?(Mt=ee.x,mt=ee.y,Zt=ee.z):(Mt=0,mt=0,Zt=0);const At=it.convert(K.format),rt=it.convert(K.type);let Qt;K.isData3DTexture?(F.setTexture3D(K,0),Qt=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(F.setTexture2DArray(K,0),Qt=V.TEXTURE_2D_ARRAY):(F.setTexture2D(K,0),Qt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const Et=V.getParameter(V.UNPACK_ROW_LENGTH),An=V.getParameter(V.UNPACK_IMAGE_HEIGHT),_r=V.getParameter(V.UNPACK_SKIP_PIXELS),zn=V.getParameter(V.UNPACK_SKIP_ROWS),Xi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,dt),V.pixelStorei(V.UNPACK_SKIP_ROWS,lt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ke);const Bt=R.isDataArrayTexture||R.isData3DTexture,Cn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const mn=Xe.get(R),Sn=Xe.get(K),gn=Xe.get(mn.__renderTarget),Lt=Xe.get(Sn.__renderTarget);Je.bindFramebuffer(V.READ_FRAMEBUFFER,gn.__webglFramebuffer),Je.bindFramebuffer(V.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let zi=0;zi<$e;zi++)Bt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(R).__webglTexture,Z,Ke+zi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(K).__webglTexture,Pe,Zt+zi)),V.blitFramebuffer(dt,lt,ze,He,Mt,mt,ze,He,V.DEPTH_BUFFER_BIT,V.NEAREST);Je.bindFramebuffer(V.READ_FRAMEBUFFER,null),Je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Xe.has(R)){const mn=Xe.get(R),Sn=Xe.get(K);Je.bindFramebuffer(V.READ_FRAMEBUFFER,Fo),Je.bindFramebuffer(V.DRAW_FRAMEBUFFER,ko);for(let gn=0;gn<$e;gn++)Bt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,Z,Ke+gn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,Z),Cn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Sn.__webglTexture,Pe,Zt+gn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Sn.__webglTexture,Pe),Z!==0?V.blitFramebuffer(dt,lt,ze,He,Mt,mt,ze,He,V.COLOR_BUFFER_BIT,V.NEAREST):Cn?V.copyTexSubImage3D(Qt,Pe,Mt,mt,Zt+gn,dt,lt,ze,He):V.copyTexSubImage2D(Qt,Pe,Mt,mt,dt,lt,ze,He);Je.bindFramebuffer(V.READ_FRAMEBUFFER,null),Je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Qt,Pe,Mt,mt,Zt,ze,He,$e,At,rt,jt.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(Qt,Pe,Mt,mt,Zt,ze,He,$e,At,jt.data):V.texSubImage3D(Qt,Pe,Mt,mt,Zt,ze,He,$e,At,rt,jt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pe,Mt,mt,ze,He,At,rt,jt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pe,Mt,mt,jt.width,jt.height,At,jt.data):V.texSubImage2D(V.TEXTURE_2D,Pe,Mt,mt,ze,He,At,rt,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,An),V.pixelStorei(V.UNPACK_SKIP_PIXELS,_r),V.pixelStorei(V.UNPACK_SKIP_ROWS,zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Xi),Pe===0&&K.generateMipmaps&&V.generateMipmap(Qt),Je.unbindTexture()},this.copyTextureToTexture3D=function(R,K,de=null,ee=null,Z=0){return bu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,de,ee,Z)},this.initRenderTarget=function(R){Xe.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),Je.unbindTexture()},this.resetState=function(){N=0,D=0,O=null,Je.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}function jT(r){const e=[...new Set(r.map(t=>String(t.session_id)))].sort();return new Map(e.map((t,n)=>[t,n]))}function XT({payload:r,currentTurnId:e,liftMode:t,onSelectTurn:n}){const a=tt.useRef(null),o=tt.useMemo(()=>jT(r.turns??[]),[r.turns]),[u,c]=tt.useState(null);return tt.useEffect(()=>{if(!a.current)return;const h=a.current;c(null);let f=null,m=null,g=null,v=null,x=0,M=null;try{const w=new n_;w.background=new Ct("#120d08");const S=new oi(45,h.clientWidth/Math.max(h.clientHeight,1),.1,1e3);S.position.set(0,0,28),f=new f_({antialias:!0}),f.setSize(h.clientWidth,Math.max(h.clientHeight,240)),h.innerHTML="",h.appendChild(f.domElement);const y=r.turns??[];g=new _f({color:12155706,transparent:!0,opacity:.5}),m=new li;const I=new Float32Array(y.length*3),L=new Float32Array(y.length*3),T=new Map;for(const k of y){const q=String(k.display_attractor_label??k.dominant_label??"");T.set(q,(T.get(q)??0)+1)}y.forEach((k,q)=>{const Q=T.get(String(k.display_attractor_label??k.dominant_label??""))??1,ne=o.get(String(k.session_id))??0,ae=t==="flat"?0:t==="time_lift"?q*.7:t==="density_lift"?Q*1.2:ne*2.4;I[q*3]=Number(k.x??0),I[q*3+1]=Number(k.y??0),I[q*3+2]=ae;const he=e===k.turn_id;L[q*3]=he?1:.91,L[q*3+1]=he?.95:.66,L[q*3+2]=he?.67:.34,k.sequence_z=ae}),m.setAttribute("position",new Wn(I,3)),m.setAttribute("color",new Wn(L,3));const P=new s_(m,new yf({size:.6,vertexColors:!0}));if(w.add(P),y.length>1){const k=new li;k.setAttribute("position",new Wn(I,3)),w.add(new r_(k,g))}const N=new lS,D=new kt;v=k=>{if(!f)return;const q=f.domElement.getBoundingClientRect();D.x=(k.clientX-q.left)/q.width*2-1,D.y=-((k.clientY-q.top)/q.height)*2+1,N.params.Points={threshold:1.2},N.setFromCamera(D,S);const ne=N.intersectObject(P)[0];if(!ne||ne.index==null)return;const ae=y[ne.index];ae!=null&&ae.turn_id&&n(String(ae.turn_id))},f.domElement.addEventListener("click",v);const O=new o_(16777215,1);w.add(O);let C=0;const E=()=>{f&&(C+=1,e||(w.rotation.y=Math.sin(C/180)*.08),f.render(w,S),x=window.requestAnimationFrame(E))};E(),M=()=>{if(!f)return;const k=h.clientWidth||640,q=Math.max(h.clientHeight,240);S.aspect=k/q,S.updateProjectionMatrix(),f.setSize(k,q)},window.addEventListener("resize",M)}catch(w){h.innerHTML="",c(w instanceof Error?w.message:"Basin renderer unavailable.")}return()=>{M&&window.removeEventListener("resize",M),f!=null&&f.domElement&&v&&f.domElement.removeEventListener("click",v),window.cancelAnimationFrame(x),f==null||f.dispose(),m==null||m.dispose(),g==null||g.dispose(),h.innerHTML=""}},[r,e,t,n,o]),u?U.jsxs("div",{className:"empty-state","data-testid":"basin-plot-fallback",role:"note",children:[U.jsx("h2",{children:"Basin renderer unavailable"}),U.jsx("p",{children:u}),U.jsx("p",{children:"Use Basin Turns, transcript buttons, and projection metadata to keep the trajectory view truthful."})]},"basin-fallback"):U.jsx("div",{"aria-label":"Basin plot",className:"basin-panel","data-testid":"basin-plot",ref:a,role:"region"},"basin-canvas")}var du={exports:{}},sv;function $T(){if(sv)return du.exports;sv=1;var r=typeof Reflect=="object"?Reflect:null,e=r&&typeof r.apply=="function"?r.apply:function(P,N,D){return Function.prototype.apply.call(P,N,D)},t;r&&typeof r.ownKeys=="function"?t=r.ownKeys:Object.getOwnPropertySymbols?t=function(P){return Object.getOwnPropertyNames(P).concat(Object.getOwnPropertySymbols(P))}:t=function(P){return Object.getOwnPropertyNames(P)};function n(T){console&&console.warn&&console.warn(T)}var a=Number.isNaN||function(P){return P!==P};function o(){o.init.call(this)}du.exports=o,du.exports.once=y,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var u=10;function c(T){if(typeof T!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof T)}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(T){if(typeof T!="number"||T<0||a(T))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+T+".");u=T}}),o.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(P){if(typeof P!="number"||P<0||a(P))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+P+".");return this._maxListeners=P,this};function h(T){return T._maxListeners===void 0?o.defaultMaxListeners:T._maxListeners}o.prototype.getMaxListeners=function(){return h(this)},o.prototype.emit=function(P){for(var N=[],D=1;D<arguments.length;D++)N.push(arguments[D]);var O=P==="error",C=this._events;if(C!==void 0)O=O&&C.error===void 0;else if(!O)return!1;if(O){var E;if(N.length>0&&(E=N[0]),E instanceof Error)throw E;var k=new Error("Unhandled error."+(E?" ("+E.message+")":""));throw k.context=E,k}var q=C[P];if(q===void 0)return!1;if(typeof q=="function")e(q,this,N);else for(var Q=q.length,ne=M(q,Q),D=0;D<Q;++D)e(ne[D],this,N);return!0};function f(T,P,N,D){var O,C,E;if(c(N),C=T._events,C===void 0?(C=T._events=Object.create(null),T._eventsCount=0):(C.newListener!==void 0&&(T.emit("newListener",P,N.listener?N.listener:N),C=T._events),E=C[P]),E===void 0)E=C[P]=N,++T._eventsCount;else if(typeof E=="function"?E=C[P]=D?[N,E]:[E,N]:D?E.unshift(N):E.push(N),O=h(T),O>0&&E.length>O&&!E.warned){E.warned=!0;var k=new Error("Possible EventEmitter memory leak detected. "+E.length+" "+String(P)+" listeners added. Use emitter.setMaxListeners() to increase limit");k.name="MaxListenersExceededWarning",k.emitter=T,k.type=P,k.count=E.length,n(k)}return T}o.prototype.addListener=function(P,N){return f(this,P,N,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(P,N){return f(this,P,N,!0)};function m(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(T,P,N){var D={fired:!1,wrapFn:void 0,target:T,type:P,listener:N},O=m.bind(D);return O.listener=N,D.wrapFn=O,O}o.prototype.once=function(P,N){return c(N),this.on(P,g(this,P,N)),this},o.prototype.prependOnceListener=function(P,N){return c(N),this.prependListener(P,g(this,P,N)),this},o.prototype.removeListener=function(P,N){var D,O,C,E,k;if(c(N),O=this._events,O===void 0)return this;if(D=O[P],D===void 0)return this;if(D===N||D.listener===N)--this._eventsCount===0?this._events=Object.create(null):(delete O[P],O.removeListener&&this.emit("removeListener",P,D.listener||N));else if(typeof D!="function"){for(C=-1,E=D.length-1;E>=0;E--)if(D[E]===N||D[E].listener===N){k=D[E].listener,C=E;break}if(C<0)return this;C===0?D.shift():w(D,C),D.length===1&&(O[P]=D[0]),O.removeListener!==void 0&&this.emit("removeListener",P,k||N)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(P){var N,D,O;if(D=this._events,D===void 0)return this;if(D.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):D[P]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete D[P]),this;if(arguments.length===0){var C=Object.keys(D),E;for(O=0;O<C.length;++O)E=C[O],E!=="removeListener"&&this.removeAllListeners(E);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(N=D[P],typeof N=="function")this.removeListener(P,N);else if(N!==void 0)for(O=N.length-1;O>=0;O--)this.removeListener(P,N[O]);return this};function v(T,P,N){var D=T._events;if(D===void 0)return[];var O=D[P];return O===void 0?[]:typeof O=="function"?N?[O.listener||O]:[O]:N?S(O):M(O,O.length)}o.prototype.listeners=function(P){return v(this,P,!0)},o.prototype.rawListeners=function(P){return v(this,P,!1)},o.listenerCount=function(T,P){return typeof T.listenerCount=="function"?T.listenerCount(P):x.call(T,P)},o.prototype.listenerCount=x;function x(T){var P=this._events;if(P!==void 0){var N=P[T];if(typeof N=="function")return 1;if(N!==void 0)return N.length}return 0}o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function M(T,P){for(var N=new Array(P),D=0;D<P;++D)N[D]=T[D];return N}function w(T,P){for(;P+1<T.length;P++)T[P]=T[P+1];T.pop()}function S(T){for(var P=new Array(T.length),N=0;N<P.length;++N)P[N]=T[N].listener||T[N];return P}function y(T,P){return new Promise(function(N,D){function O(E){T.removeListener(P,C),D(E)}function C(){typeof T.removeListener=="function"&&T.removeListener("error",O),N([].slice.call(arguments))}L(T,P,C,{once:!0}),P!=="error"&&I(T,O,{once:!0})})}function I(T,P,N){typeof T.on=="function"&&L(T,"error",P,N)}function L(T,P,N,D){if(typeof T.on=="function")D.once?T.once(P,N):T.on(P,N);else if(typeof T.addEventListener=="function")T.addEventListener(P,function O(C){D.once&&T.removeEventListener(P,O),N(C)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof T)}return du.exports}var p_=$T();function YT(){const r=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(arguments[e])for(const n in arguments[e])r[n]=arguments[e][n];return r}let un=YT;typeof Object.assign=="function"&&(un=Object.assign);function yi(r,e,t,n){const a=r._nodes.get(e);let o=null;return a&&(n==="mixed"?o=a.out&&a.out[t]||a.undirected&&a.undirected[t]:n==="directed"?o=a.out&&a.out[t]:o=a.undirected&&a.undirected[t]),o}function wn(r){return typeof r=="object"&&r!==null}function m_(r){let e;for(e in r)return!1;return!0}function gi(r,e,t){Object.defineProperty(r,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function Di(r,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(r,e,n)}function av(r){return!(!wn(r)||r.attributes&&!Array.isArray(r.attributes))}function qT(){let r=Math.floor(Math.random()*256)&255;return()=>r++}function pr(){const r=arguments;let e=null,t=-1;return{[Symbol.iterator](){return this},next(){let n=null;do{if(e===null){if(t++,t>=r.length)return{done:!0};e=r[t][Symbol.iterator]()}if(n=e.next(),n.done){e=null;continue}break}while(!0);return n}}}function Ta(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class Sf extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class Ge extends Sf{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ge.prototype.constructor)}}class Ne extends Sf{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Ne.prototype.constructor)}}class ut extends Sf{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ut.prototype.constructor)}}function g_(r,e){this.key=r,this.attributes=e,this.clear()}g_.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function v_(r,e){this.key=r,this.attributes=e,this.clear()}v_.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function __(r,e){this.key=r,this.attributes=e,this.clear()}__.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function ba(r,e,t,n,a){this.key=e,this.attributes=a,this.undirected=r,this.source=t,this.target=n}ba.prototype.attach=function(){let r="out",e="in";this.undirected&&(r=e="undirected");const t=this.source.key,n=this.target.key;this.source[r][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};ba.prototype.attachMulti=function(){let r="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(r=e="undirected");const a=this.source[r],o=a[n];if(typeof o>"u"){a[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}o.previous=this,this.next=o,a[n]=this,this.target[e][t]=this};ba.prototype.detach=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][r]};ba.prototype.detachMulti=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][r]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][r]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const y_=0,x_=1,KT=2,S_=3;function vr(r,e,t,n,a,o,u){let c,h,f,m;if(n=""+n,t===y_){if(c=r._nodes.get(n),!c)throw new Ne(`Graph.${e}: could not find the "${n}" node in the graph.`);f=a,m=o}else if(t===S_){if(a=""+a,h=r._edges.get(a),!h)throw new Ne(`Graph.${e}: could not find the "${a}" edge in the graph.`);const g=h.source.key,v=h.target.key;if(n===g)c=h.target;else if(n===v)c=h.source;else throw new Ne(`Graph.${e}: the "${n}" node is not attached to the "${a}" edge (${g}, ${v}).`);f=o,m=u}else{if(h=r._edges.get(n),!h)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===x_?c=h.source:c=h.target,f=a,m=o}return[c,f,m]}function ZT(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=vr(this,e,t,n,a,o);return u.attributes[c]}}function QT(r,e,t){r.prototype[e]=function(n,a){const[o]=vr(this,e,t,n,a);return o.attributes}}function JT(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=vr(this,e,t,n,a,o);return u.attributes.hasOwnProperty(c)}}function eb(r,e,t){r.prototype[e]=function(n,a,o,u){const[c,h,f]=vr(this,e,t,n,a,o,u);return c.attributes[h]=f,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function tb(r,e,t){r.prototype[e]=function(n,a,o,u){const[c,h,f]=vr(this,e,t,n,a,o,u);if(typeof f!="function")throw new Ge(`Graph.${e}: updater should be a function.`);const m=c.attributes,g=f(m[h]);return m[h]=g,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function nb(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=vr(this,e,t,n,a,o);return delete u.attributes[c],this.emit("nodeAttributesUpdated",{key:u.key,type:"remove",attributes:u.attributes,name:c}),this}}function ib(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=vr(this,e,t,n,a,o);if(!wn(c))throw new Ge(`Graph.${e}: provided attributes are not a plain object.`);return u.attributes=c,this.emit("nodeAttributesUpdated",{key:u.key,type:"replace",attributes:u.attributes}),this}}function rb(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=vr(this,e,t,n,a,o);if(!wn(c))throw new Ge(`Graph.${e}: provided attributes are not a plain object.`);return un(u.attributes,c),this.emit("nodeAttributesUpdated",{key:u.key,type:"merge",attributes:u.attributes,data:c}),this}}function sb(r,e,t){r.prototype[e]=function(n,a,o){const[u,c]=vr(this,e,t,n,a,o);if(typeof c!="function")throw new Ge(`Graph.${e}: provided updater is not a function.`);return u.attributes=c(u.attributes),this.emit("nodeAttributesUpdated",{key:u.key,type:"update",attributes:u.attributes}),this}}const ab=[{name:r=>`get${r}Attribute`,attacher:ZT},{name:r=>`get${r}Attributes`,attacher:QT},{name:r=>`has${r}Attribute`,attacher:JT},{name:r=>`set${r}Attribute`,attacher:eb},{name:r=>`update${r}Attribute`,attacher:tb},{name:r=>`remove${r}Attribute`,attacher:nb},{name:r=>`replace${r}Attributes`,attacher:ib},{name:r=>`merge${r}Attributes`,attacher:rb},{name:r=>`update${r}Attributes`,attacher:sb}];function ob(r){ab.forEach(function({name:e,attacher:t}){t(r,e("Node"),y_),t(r,e("Source"),x_),t(r,e("Target"),KT),t(r,e("Opposite"),S_)})}function lb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ut(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ut(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=yi(this,u,c,t),!o)throw new Ne(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ut(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes[a]}}function ub(r,e,t){r.prototype[e]=function(n){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ut(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new ut(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,u=""+arguments[1];if(a=yi(this,o,u,t),!a)throw new Ne(`Graph.${e}: could not find an edge for the given path ("${o}" - "${u}").`)}else{if(t!=="mixed")throw new ut(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes}}function cb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ut(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ut(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=yi(this,u,c,t),!o)throw new Ne(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ut(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes.hasOwnProperty(a)}}function db(r,e,t){r.prototype[e]=function(n,a,o){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ut(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ut(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+a;if(a=arguments[2],o=arguments[3],u=yi(this,c,h,t),!u)throw new Ne(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new ut(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return u.attributes[a]=o,this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:a}),this}}function hb(r,e,t){r.prototype[e]=function(n,a,o){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ut(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ut(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+a;if(a=arguments[2],o=arguments[3],u=yi(this,c,h,t),!u)throw new Ne(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new ut(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof o!="function")throw new Ge(`Graph.${e}: updater should be a function.`);return u.attributes[a]=o(u.attributes[a]),this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:a}),this}}function fb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ut(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ut(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=yi(this,u,c,t),!o)throw new Ne(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ut(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete o.attributes[a],this.emit("edgeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:a}),this}}function pb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ut(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ut(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=yi(this,u,c,t),!o)throw new Ne(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ut(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!wn(a))throw new Ge(`Graph.${e}: provided attributes are not a plain object.`);return o.attributes=a,this.emit("edgeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function mb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ut(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ut(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=yi(this,u,c,t),!o)throw new Ne(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ut(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!wn(a))throw new Ge(`Graph.${e}: provided attributes are not a plain object.`);return un(o.attributes,a),this.emit("edgeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:a}),this}}function gb(r,e,t){r.prototype[e]=function(n,a){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ut(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ut(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+a;if(a=arguments[2],o=yi(this,u,c,t),!o)throw new Ne(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ut(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof a!="function")throw new Ge(`Graph.${e}: provided updater is not a function.`);return o.attributes=a(o.attributes),this.emit("edgeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}const vb=[{name:r=>`get${r}Attribute`,attacher:lb},{name:r=>`get${r}Attributes`,attacher:ub},{name:r=>`has${r}Attribute`,attacher:cb},{name:r=>`set${r}Attribute`,attacher:db},{name:r=>`update${r}Attribute`,attacher:hb},{name:r=>`remove${r}Attribute`,attacher:fb},{name:r=>`replace${r}Attributes`,attacher:pb},{name:r=>`merge${r}Attributes`,attacher:mb},{name:r=>`update${r}Attributes`,attacher:gb}];function _b(r){vb.forEach(function({name:e,attacher:t}){t(r,e("Edge"),"mixed"),t(r,e("DirectedEdge"),"directed"),t(r,e("UndirectedEdge"),"undirected")})}const yb=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function xb(r,e,t,n){let a=!1;for(const o in e){if(o===n)continue;const u=e[o];if(a=t(u.key,u.attributes,u.source.key,u.target.key,u.source.attributes,u.target.attributes,u.undirected),r&&a)return u.key}}function Sb(r,e,t,n){let a,o,u,c=!1;for(const h in e)if(h!==n){a=e[h];do{if(o=a.source,u=a.target,c=t(a.key,a.attributes,o.key,u.key,o.attributes,u.attributes,a.undirected),r&&c)return a.key;a=a.next}while(a!==void 0)}}function Jd(r,e){const t=Object.keys(r),n=t.length;let a,o=0;return{[Symbol.iterator](){return this},next(){do if(a)a=a.next;else{if(o>=n)return{done:!0};const u=t[o++];if(u===e){a=void 0;continue}a=r[u]}while(!a);return{done:!1,value:{edge:a.key,attributes:a.attributes,source:a.source.key,target:a.target.key,sourceAttributes:a.source.attributes,targetAttributes:a.target.attributes,undirected:a.undirected}}}}}function Eb(r,e,t,n){const a=e[t];if(!a)return;const o=a.source,u=a.target;if(n(a.key,a.attributes,o.key,u.key,o.attributes,u.attributes,a.undirected)&&r)return a.key}function Mb(r,e,t,n){let a=e[t];if(!a)return;let o=!1;do{if(o=n(a.key,a.attributes,a.source.key,a.target.key,a.source.attributes,a.target.attributes,a.undirected),r&&o)return a.key;a=a.next}while(a!==void 0)}function eh(r,e){let t=r[e];if(t.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!t)return{done:!0};const a={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:a}}};let n=!1;return{[Symbol.iterator](){return this},next(){return n===!0?{done:!0}:(n=!0,{done:!1,value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected}})}}}function wb(r,e){if(r.size===0)return[];if(e==="mixed"||e===r.type)return Array.from(r._edges.keys());const t=e==="undirected"?r.undirectedSize:r.directedSize,n=new Array(t),a=e==="undirected",o=r._edges.values();let u=0,c,h;for(;c=o.next(),c.done!==!0;)h=c.value,h.undirected===a&&(n[u++]=h.key);return n}function E_(r,e,t,n){if(e.size===0)return;const a=t!=="mixed"&&t!==e.type,o=t==="undirected";let u,c,h=!1;const f=e._edges.values();for(;u=f.next(),u.done!==!0;){if(c=u.value,a&&c.undirected!==o)continue;const{key:m,attributes:g,source:v,target:x}=c;if(h=n(m,g,v.key,x.key,v.attributes,x.attributes,c.undirected),r&&h)return m}}function Tb(r,e){if(r.size===0)return Ta();const t=e!=="mixed"&&e!==r.type,n=e==="undirected",a=r._edges.values();return{[Symbol.iterator](){return this},next(){let o,u;for(;;){if(o=a.next(),o.done)return o;if(u=o.value,!(t&&u.undirected!==n))break}return{value:{edge:u.key,attributes:u.attributes,source:u.source.key,target:u.target.key,sourceAttributes:u.source.attributes,targetAttributes:u.target.attributes,undirected:u.undirected},done:!1}}}}function Ef(r,e,t,n,a,o){const u=e?Sb:xb;let c;if(t!=="undirected"&&(n!=="out"&&(c=u(r,a.in,o),r&&c)||n!=="in"&&(c=u(r,a.out,o,n?void 0:a.key),r&&c))||t!=="directed"&&(c=u(r,a.undirected,o),r&&c))return c}function bb(r,e,t,n){const a=[];return Ef(!1,r,e,t,n,function(o){a.push(o)}),a}function Ab(r,e,t){let n=Ta();return r!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=pr(n,Jd(t.in))),e!=="in"&&typeof t.out<"u"&&(n=pr(n,Jd(t.out,e?void 0:t.key)))),r!=="directed"&&typeof t.undirected<"u"&&(n=pr(n,Jd(t.undirected))),n}function Mf(r,e,t,n,a,o,u){const c=t?Mb:Eb;let h;if(e!=="undirected"&&(typeof a.in<"u"&&n!=="out"&&(h=c(r,a.in,o,u),r&&h)||typeof a.out<"u"&&n!=="in"&&(n||a.key!==o)&&(h=c(r,a.out,o,u),r&&h))||e!=="directed"&&typeof a.undirected<"u"&&(h=c(r,a.undirected,o,u),r&&h))return h}function Cb(r,e,t,n,a){const o=[];return Mf(!1,r,e,t,n,a,function(u){o.push(u)}),o}function Rb(r,e,t,n){let a=Ta();return r!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(a=pr(a,eh(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(a=pr(a,eh(t.out,n)))),r!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(a=pr(a,eh(t.undirected,n))),a}function Pb(r,e){const{name:t,type:n,direction:a}=e;r.prototype[t]=function(o,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return wb(this,n);if(arguments.length===1){o=""+o;const c=this._nodes.get(o);if(typeof c>"u")throw new Ne(`Graph.${t}: could not find the "${o}" node in the graph.`);return bb(this.multi,n==="mixed"?this.type:n,a,c)}if(arguments.length===2){o=""+o,u=""+u;const c=this._nodes.get(o);if(!c)throw new Ne(`Graph.${t}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(u))throw new Ne(`Graph.${t}:  could not find the "${u}" target node in the graph.`);return Cb(n,this.multi,a,c,u)}throw new Ge(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Lb(r,e){const{name:t,type:n,direction:a}=e,o="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[o]=function(f,m,g){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return g=f,E_(!1,this,n,g);if(arguments.length===2){f=""+f,g=m;const v=this._nodes.get(f);if(typeof v>"u")throw new Ne(`Graph.${o}: could not find the "${f}" node in the graph.`);return Ef(!1,this.multi,n==="mixed"?this.type:n,a,v,g)}if(arguments.length===3){f=""+f,m=""+m;const v=this._nodes.get(f);if(!v)throw new Ne(`Graph.${o}:  could not find the "${f}" source node in the graph.`);if(!this._nodes.has(m))throw new Ne(`Graph.${o}:  could not find the "${m}" target node in the graph.`);return Mf(!1,n,this.multi,a,v,m,g)}throw new Ge(`Graph.${o}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop();let g;if(f.length===0){let v=0;n!=="directed"&&(v+=this.undirectedSize),n!=="undirected"&&(v+=this.directedSize),g=new Array(v);let x=0;f.push((M,w,S,y,I,L,T)=>{g[x++]=m(M,w,S,y,I,L,T)})}else g=[],f.push((v,x,M,w,S,y,I)=>{g.push(m(v,x,M,w,S,y,I))});return this[o].apply(this,f),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop(),g=[];return f.push((v,x,M,w,S,y,I)=>{m(v,x,M,w,S,y,I)&&g.push(v)}),this[o].apply(this,f),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(){let f=Array.prototype.slice.call(arguments);if(f.length<2||f.length>4)throw new Ge(`Graph.${h}: invalid number of arguments (expecting 2, 3 or 4 and got ${f.length}).`);if(typeof f[f.length-1]=="function"&&typeof f[f.length-2]!="function")throw new Ge(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let m,g;f.length===2?(m=f[0],g=f[1],f=[]):f.length===3?(m=f[1],g=f[2],f=[f[0]]):f.length===4&&(m=f[2],g=f[3],f=[f[0],f[1]]);let v=g;return f.push((x,M,w,S,y,I,L)=>{v=m(v,x,M,w,S,y,I,L)}),this[o].apply(this,f),v}}function Db(r,e){const{name:t,type:n,direction:a}=e,o="find"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[o]=function(h,f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return m=h,E_(!0,this,n,m);if(arguments.length===2){h=""+h,m=f;const g=this._nodes.get(h);if(typeof g>"u")throw new Ne(`Graph.${o}: could not find the "${h}" node in the graph.`);return Ef(!0,this.multi,n==="mixed"?this.type:n,a,g,m)}if(arguments.length===3){h=""+h,f=""+f;const g=this._nodes.get(h);if(!g)throw new Ne(`Graph.${o}:  could not find the "${h}" source node in the graph.`);if(!this._nodes.has(f))throw new Ne(`Graph.${o}:  could not find the "${f}" target node in the graph.`);return Mf(!0,n,this.multi,a,g,f,m)}throw new Ge(`Graph.${o}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const u="some"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[u]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,M,w,S,y)=>f(g,v,x,M,w,S,y)),!!this[o].apply(this,h)};const c="every"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[c]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,M,w,S,y)=>!f(g,v,x,M,w,S,y)),!this[o].apply(this,h)}}function Nb(r,e){const{name:t,type:n,direction:a}=e,o=t.slice(0,-1)+"Entries";r.prototype[o]=function(u,c){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Ta();if(!arguments.length)return Tb(this,n);if(arguments.length===1){u=""+u;const h=this._nodes.get(u);if(!h)throw new Ne(`Graph.${o}: could not find the "${u}" node in the graph.`);return Ab(n,a,h)}if(arguments.length===2){u=""+u,c=""+c;const h=this._nodes.get(u);if(!h)throw new Ne(`Graph.${o}:  could not find the "${u}" source node in the graph.`);if(!this._nodes.has(c))throw new Ne(`Graph.${o}:  could not find the "${c}" target node in the graph.`);return Rb(n,a,h,c)}throw new Ge(`Graph.${o}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Ib(r){yb.forEach(e=>{Pb(r,e),Lb(r,e),Db(r,e),Nb(r,e)})}const Ub=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function Ou(){this.A=null,this.B=null}Ou.prototype.wrap=function(r){this.A===null?this.A=r:this.B===null&&(this.B=r)};Ou.prototype.has=function(r){return this.A!==null&&r in this.A||this.B!==null&&r in this.B};function fo(r,e,t,n,a){for(const o in n){const u=n[o],c=u.source,h=u.target,f=c===t?h:c;if(e&&e.has(f.key))continue;const m=a(f.key,f.attributes);if(r&&m)return f.key}}function wf(r,e,t,n,a){if(e!=="mixed"){if(e==="undirected")return fo(r,null,n,n.undirected,a);if(typeof t=="string")return fo(r,null,n,n[t],a)}const o=new Ou;let u;if(e!=="undirected"){if(t!=="out"){if(u=fo(r,null,n,n.in,a),r&&u)return u;o.wrap(n.in)}if(t!=="in"){if(u=fo(r,o,n,n.out,a),r&&u)return u;o.wrap(n.out)}}if(e!=="directed"&&(u=fo(r,o,n,n.undirected,a),r&&u))return u}function Fb(r,e,t){if(r!=="mixed"){if(r==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return wf(!1,r,e,t,function(a){n.push(a)}),n}function po(r,e,t){const n=Object.keys(t),a=n.length;let o=0;return{[Symbol.iterator](){return this},next(){let u=null;do{if(o>=a)return r&&r.wrap(t),{done:!0};const c=t[n[o++]],h=c.source,f=c.target;if(u=h===e?f:h,r&&r.has(u.key)){u=null;continue}}while(u===null);return{done:!1,value:{neighbor:u.key,attributes:u.attributes}}}}}function kb(r,e,t){if(r!=="mixed"){if(r==="undirected")return po(null,t,t.undirected);if(typeof e=="string")return po(null,t,t[e])}let n=Ta();const a=new Ou;return r!=="undirected"&&(e!=="out"&&(n=pr(n,po(a,t,t.in))),e!=="in"&&(n=pr(n,po(a,t,t.out)))),r!=="directed"&&(n=pr(n,po(a,t,t.undirected))),n}function Ob(r,e){const{name:t,type:n,direction:a}=e;r.prototype[t]=function(o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];o=""+o;const u=this._nodes.get(o);if(typeof u>"u")throw new Ne(`Graph.${t}: could not find the "${o}" node in the graph.`);return Fb(n==="mixed"?this.type:n,a,u)}}function zb(r,e){const{name:t,type:n,direction:a}=e,o="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[o]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Ne(`Graph.${o}: could not find the "${f}" node in the graph.`);wf(!1,n==="mixed"?this.type:n,a,g,m)};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(f,m){const g=[];return this[o](f,(v,x)=>{g.push(m(v,x))}),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(f,m){const g=[];return this[o](f,(v,x)=>{m(v,x)&&g.push(v)}),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(f,m,g){if(arguments.length<3)throw new Ge(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let v=g;return this[o](f,(x,M)=>{v=m(v,x,M)}),v}}function Bb(r,e){const{name:t,type:n,direction:a}=e,o=t[0].toUpperCase()+t.slice(1,-1),u="find"+o;r.prototype[u]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Ne(`Graph.${u}: could not find the "${f}" node in the graph.`);return wf(!0,n==="mixed"?this.type:n,a,g,m)};const c="some"+o;r.prototype[c]=function(f,m){return!!this[u](f,m)};const h="every"+o;r.prototype[h]=function(f,m){return!this[u](f,(v,x)=>!m(v,x))}}function Gb(r,e){const{name:t,type:n,direction:a}=e,o=t.slice(0,-1)+"Entries";r.prototype[o]=function(u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Ta();u=""+u;const c=this._nodes.get(u);if(typeof c>"u")throw new Ne(`Graph.${o}: could not find the "${u}" node in the graph.`);return kb(n==="mixed"?this.type:n,a,c)}}function Hb(r){Ub.forEach(e=>{Ob(r,e),zb(r,e),Bb(r,e),Gb(r,e)})}function hu(r,e,t,n,a){const o=n._nodes.values(),u=n.type;let c,h,f,m,g,v;for(;c=o.next(),c.done!==!0;){let x=!1;if(h=c.value,u!=="undirected"){m=h.out;for(f in m){g=m[f];do v=g.target,x=!0,a(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}if(u!=="directed"){m=h.undirected;for(f in m)if(!(e&&h.key>f)){g=m[f];do v=g.target,v.key!==f&&(v=g.source),x=!0,a(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}t&&!x&&a(h.key,null,h.attributes,null,null,null,null)}}function Vb(r,e){const t={key:r};return m_(e.attributes)||(t.attributes=un({},e.attributes)),t}function Wb(r,e,t){const n={key:e,source:t.source.key,target:t.target.key};return m_(t.attributes)||(n.attributes=un({},t.attributes)),r==="mixed"&&t.undirected&&(n.undirected=!0),n}function jb(r){if(!wn(r))throw new Ge('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in r))throw new Ge("Graph.import: serialized node is missing its key.");if("attributes"in r&&(!wn(r.attributes)||r.attributes===null))throw new Ge("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function Xb(r){if(!wn(r))throw new Ge('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in r))throw new Ge("Graph.import: serialized edge is missing its source.");if(!("target"in r))throw new Ge("Graph.import: serialized edge is missing its target.");if("attributes"in r&&(!wn(r.attributes)||r.attributes===null))throw new Ge("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in r&&typeof r.undirected!="boolean")throw new Ge("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const $b=qT(),Yb=new Set(["directed","undirected","mixed"]),ov=new Set(["domain","_events","_eventsCount","_maxListeners"]),qb=[{name:r=>`${r}Edge`,generateKey:!0},{name:r=>`${r}DirectedEdge`,generateKey:!0,type:"directed"},{name:r=>`${r}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:r=>`${r}EdgeWithKey`},{name:r=>`${r}DirectedEdgeWithKey`,type:"directed"},{name:r=>`${r}UndirectedEdgeWithKey`,type:"undirected"}],Kb={allowSelfLoops:!0,multi:!1,type:"mixed"};function Zb(r,e,t){if(t&&!wn(t))throw new Ge(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},r._nodes.has(e))throw new ut(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function lv(r,e,t){const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function M_(r,e,t,n,a,o,u,c){if(!n&&r.type==="undirected")throw new ut(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new ut(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(c&&!wn(c))throw new Ge(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`);if(o=""+o,u=""+u,c=c||{},!r.allowSelfLoops&&o===u)throw new ut(`Graph.${e}: source & target are the same ("${o}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const h=r._nodes.get(o),f=r._nodes.get(u);if(!h)throw new Ne(`Graph.${e}: source node "${o}" not found.`);if(!f)throw new Ne(`Graph.${e}: target node "${u}" not found.`);const m={key:null,undirected:n,source:o,target:u,attributes:c};if(t)a=r._edgeKeyGenerator();else if(a=""+a,r._edges.has(a))throw new ut(`Graph.${e}: the "${a}" edge already exists in the graph.`);if(!r.multi&&(n?typeof h.undirected[u]<"u":typeof h.out[u]<"u"))throw new ut(`Graph.${e}: an edge linking "${o}" to "${u}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const g=new ba(n,a,h,f,c);r._edges.set(a,g);const v=o===u;return n?(h.undirectedDegree++,f.undirectedDegree++,v&&(h.undirectedLoops++,r._undirectedSelfLoopCount++)):(h.outDegree++,f.inDegree++,v&&(h.directedLoops++,r._directedSelfLoopCount++)),r.multi?g.attachMulti():g.attach(),n?r._undirectedSize++:r._directedSize++,m.key=a,r.emit("edgeAdded",m),a}function Qb(r,e,t,n,a,o,u,c,h){if(!n&&r.type==="undirected")throw new ut(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new ut(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(c){if(h){if(typeof c!="function")throw new Ge(`Graph.${e}: invalid updater function. Expecting a function but got "${c}"`)}else if(!wn(c))throw new Ge(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`)}o=""+o,u=""+u;let f;if(h&&(f=c,c=void 0),!r.allowSelfLoops&&o===u)throw new ut(`Graph.${e}: source & target are the same ("${o}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let m=r._nodes.get(o),g=r._nodes.get(u),v,x;if(!t&&(v=r._edges.get(a),v)){if((v.source.key!==o||v.target.key!==u)&&(!n||v.source.key!==u||v.target.key!==o))throw new ut(`Graph.${e}: inconsistency detected when attempting to merge the "${a}" edge with "${o}" source & "${u}" target vs. ("${v.source.key}", "${v.target.key}").`);x=v}if(!x&&!r.multi&&m&&(x=n?m.undirected[u]:m.out[u]),x){const I=[x.key,!1,!1,!1];if(h?!f:!c)return I;if(h){const L=x.attributes;x.attributes=f(L),r.emit("edgeAttributesUpdated",{type:"replace",key:x.key,attributes:x.attributes})}else un(x.attributes,c),r.emit("edgeAttributesUpdated",{type:"merge",key:x.key,attributes:x.attributes,data:c});return I}c=c||{},h&&f&&(c=f(c));const M={key:null,undirected:n,source:o,target:u,attributes:c};if(t)a=r._edgeKeyGenerator();else if(a=""+a,r._edges.has(a))throw new ut(`Graph.${e}: the "${a}" edge already exists in the graph.`);let w=!1,S=!1;m||(m=lv(r,o,{}),w=!0,o===u&&(g=m,S=!0)),g||(g=lv(r,u,{}),S=!0),v=new ba(n,a,m,g,c),r._edges.set(a,v);const y=o===u;return n?(m.undirectedDegree++,g.undirectedDegree++,y&&(m.undirectedLoops++,r._undirectedSelfLoopCount++)):(m.outDegree++,g.inDegree++,y&&(m.directedLoops++,r._directedSelfLoopCount++)),r.multi?v.attachMulti():v.attach(),n?r._undirectedSize++:r._directedSize++,M.key=a,r.emit("edgeAdded",M),[a,!0,w,S]}function la(r,e){r._edges.delete(e.key);const{source:t,target:n,attributes:a}=e,o=e.undirected,u=t===n;o?(t.undirectedDegree--,n.undirectedDegree--,u&&(t.undirectedLoops--,r._undirectedSelfLoopCount--)):(t.outDegree--,n.inDegree--,u&&(t.directedLoops--,r._directedSelfLoopCount--)),r.multi?e.detachMulti():e.detach(),o?r._undirectedSize--:r._directedSize--,r.emit("edgeDropped",{key:e.key,attributes:a,source:t.key,target:n.key,undirected:o})}class Ot extends p_.EventEmitter{constructor(e){if(super(),e=un({},Kb,e),typeof e.multi!="boolean")throw new Ge(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!Yb.has(e.type))throw new Ge(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new Ge(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?g_:e.type==="directed"?v_:__;gi(this,"NodeDataClass",t);const n="geid_"+$b()+"_";let a=0;const o=()=>{let u;do u=n+a++;while(this._edges.has(u));return u};gi(this,"_attributes",{}),gi(this,"_nodes",new Map),gi(this,"_edges",new Map),gi(this,"_directedSize",0),gi(this,"_undirectedSize",0),gi(this,"_directedSelfLoopCount",0),gi(this,"_undirectedSelfLoopCount",0),gi(this,"_edgeKeyGenerator",o),gi(this,"_options",e),ov.forEach(u=>gi(this,u,this[u])),Di(this,"order",()=>this._nodes.size),Di(this,"size",()=>this._edges.size),Di(this,"directedSize",()=>this._directedSize),Di(this,"undirectedSize",()=>this._undirectedSize),Di(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),Di(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),Di(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),Di(this,"multi",this._options.multi),Di(this,"type",this._options.type),Di(this,"allowSelfLoops",this._options.allowSelfLoops),Di(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,a=this._edges.get(n);return!!a&&!a.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new Ge(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,a=this._edges.get(n);return!!a&&a.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new Ge(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?typeof n.out<"u"&&n.out.hasOwnProperty(t)||typeof n.undirected<"u"&&n.undirected.hasOwnProperty(t):!1}throw new Ge(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new ut("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Ne(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const a=n.out&&n.out[t]||void 0;if(a)return a.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new ut("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Ne(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const a=n.undirected&&n.undirected[t]||void 0;if(a)return a.key}edge(e,t){if(this.multi)throw new ut("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Ne(`Graph.edge: could not find the "${t}" target node in the graph.`);const a=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(a)return a.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Ne(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,a=0;return this.type!=="directed"&&(n+=t.undirectedDegree,a+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree,a+=t.directedLoops),n-a}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,a=0;return this.type!=="directed"&&(n+=t.undirectedDegree,a+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.outDegree,a+=t.directedLoops),n-a}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,a=0;return this.type!=="directed"&&(n+=t.undirectedDegree,a+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree,a+=t.directedLoops*2),n-a}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ne(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ne(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ne(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new Ne(`Graph.opposite: could not find the "${t}" edge in the graph.`);const a=n.source.key,o=n.target.key;if(e===a)return o;if(e===o)return a;throw new Ne(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${a}, ${o}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new Ne(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ne(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ne(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Ne(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return Zb(this,e,t).key}mergeNode(e,t){if(t&&!wn(t))throw new Ge(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(un(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new Ge(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const o=n.attributes;n.attributes=t(o),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const a=t?t({}):{};return n=new this.NodeDataClass(e,a),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:a}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Ne(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const a in t.out){n=t.out[a];do la(this,n),n=n.next;while(n)}for(const a in t.in){n=t.in[a];do la(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const a in t.undirected){n=t.undirected[a];do la(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],a=""+arguments[1];if(t=yi(this,n,a,this.type),!t)throw new Ne(`Graph.dropEdge: could not find the "${n}" -> "${a}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new Ne(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return la(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new ut("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ut("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=yi(this,e,t,"directed");if(!n)throw new Ne(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return la(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new ut("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ut("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=yi(this,e,t,"undirected");if(!n)throw new Ne(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return la(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new Ge("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!wn(e))throw new Ge("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!wn(e))throw new Ge("Graph.mergeAttributes: provided attributes are not a plain object.");return un(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new Ge("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new Ge("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!av(t))throw new Ge("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let a,o;for(;a=n.next(),a.done!==!0;)o=a.value,o.attributes=e(o.key,o.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new Ge("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!av(t))throw new Ge("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let a,o,u,c;for(;a=n.next(),a.done!==!0;)o=a.value,u=o.source,c=o.target,o.attributes=e(o.key,o.attributes,u.key,c.key,u.attributes,c.attributes,o.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new Ge("Graph.forEachAdjacencyEntry: expecting a callback.");hu(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ge("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");hu(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new Ge("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");hu(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new Ge("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");hu(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!="function")throw new Ge("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,a;for(;n=t.next(),n.done!==!0;)a=n.value,e(a.key,a.attributes)}findNode(e){if(typeof e!="function")throw new Ge("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,a;for(;n=t.next(),n.done!==!0;)if(a=n.value,e(a.key,a.attributes))return a.key}mapNodes(e){if(typeof e!="function")throw new Ge("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,a;const o=new Array(this.order);let u=0;for(;n=t.next(),n.done!==!0;)a=n.value,o[u++]=e(a.key,a.attributes);return o}someNode(e){if(typeof e!="function")throw new Ge("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,a;for(;n=t.next(),n.done!==!0;)if(a=n.value,e(a.key,a.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new Ge("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,a;for(;n=t.next(),n.done!==!0;)if(a=n.value,!e(a.key,a.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new Ge("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,a;const o=[];for(;n=t.next(),n.done!==!0;)a=n.value,e(a.key,a.attributes)&&o.push(a.key);return o}reduceNodes(e,t){if(typeof e!="function")throw new Ge("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new Ge("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const a=this._nodes.values();let o,u;for(;o=a.next(),o.done!==!0;)u=o.value,n=e(n,u.key,u.attributes);return n}nodeEntries(){const e=this._nodes.values();return{[Symbol.iterator](){return this},next(){const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((a,o)=>{e[t++]=Vb(o,a)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((a,o)=>{n[t++]=Wb(this.type,o,a)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if(e instanceof Ot)return e.forEachNode((h,f)=>{t?this.mergeNode(h,f):this.addNode(h,f)}),e.forEachEdge((h,f,m,g,v,x,M)=>{t?M?this.mergeUndirectedEdgeWithKey(h,m,g,f):this.mergeDirectedEdgeWithKey(h,m,g,f):M?this.addUndirectedEdgeWithKey(h,m,g,f):this.addDirectedEdgeWithKey(h,m,g,f)}),this;if(!wn(e))throw new Ge("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!wn(e.attributes))throw new Ge("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,a,o,u,c;if(e.nodes){if(o=e.nodes,!Array.isArray(o))throw new Ge("Graph.import: invalid nodes. Expecting an array.");for(n=0,a=o.length;n<a;n++){u=o[n],jb(u);const{key:h,attributes:f}=u;t?this.mergeNode(h,f):this.addNode(h,f)}}if(e.edges){let h=!1;if(this.type==="undirected"&&(h=!0),o=e.edges,!Array.isArray(o))throw new Ge("Graph.import: invalid edges. Expecting an array.");for(n=0,a=o.length;n<a;n++){c=o[n],Xb(c);const{source:f,target:m,attributes:g,undirected:v=h}=c;let x;"key"in c?(x=t?v?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:v?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,x.call(this,c.key,f,m,g)):(x=t?v?this.mergeUndirectedEdge:this.mergeDirectedEdge:v?this.addUndirectedEdge:this.addDirectedEdge,x.call(this,f,m,g))}}return this}nullCopy(e){const t=new Ot(un({},this._options,e));return t.replaceAttributes(un({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,a)=>{const o=un({},n.attributes);n=new t.NodeDataClass(a,o),t._nodes.set(a,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new ut(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new ut("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new ut("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let a,o;for(;a=n.next(),a.done!==!0;)o=a.value,M_(t,"copy",!1,o.undirected,o.key,o.source.key,o.target.key,un({},o.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((o,u)=>{e[u]=o.attributes});const t={},n={};this._edges.forEach((o,u)=>{const c=o.undirected?"--":"->";let h="",f=o.source.key,m=o.target.key,g;o.undirected&&f>m&&(g=f,f=m,m=g);const v=`(${f})${c}(${m})`;u.startsWith("geid_")?this.multi&&(typeof n[v]>"u"?n[v]=0:n[v]++,h+=`${n[v]}. `):h+=`[${u}]: `,h+=v,t[h]=o.attributes});const a={};for(const o in this)this.hasOwnProperty(o)&&!ov.has(o)&&typeof this[o]!="function"&&typeof o!="symbol"&&(a[o]=this[o]);return a.attributes=this._attributes,a.nodes=e,a.edges=t,gi(a,"constructor",this.constructor),a}}typeof Symbol<"u"&&(Ot.prototype[Symbol.for("nodejs.util.inspect.custom")]=Ot.prototype.inspect);qb.forEach(r=>{["add","merge","update"].forEach(e=>{const t=r.name(e),n=e==="add"?M_:Qb;r.generateKey?Ot.prototype[t]=function(a,o,u){return n(this,t,!0,(r.type||this.type)==="undirected",null,a,o,u,e==="update")}:Ot.prototype[t]=function(a,o,u,c){return n(this,t,!1,(r.type||this.type)==="undirected",a,o,u,c,e==="update")}})});ob(Ot);_b(Ot);Ib(Ot);Hb(Ot);class w_ extends Ot{constructor(e){const t=un({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new Ge("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new Ge('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class T_ extends Ot{constructor(e){const t=un({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new Ge("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new Ge('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class b_ extends Ot{constructor(e){const t=un({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ge("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class A_ extends Ot{constructor(e){const t=un({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ge("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new Ge('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class C_ extends Ot{constructor(e){const t=un({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new Ge("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new Ge('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function Aa(r){r.from=function(e,t){const n=un({},e.options,t),a=new r(n);return a.import(e),a}}Aa(Ot);Aa(w_);Aa(T_);Aa(b_);Aa(A_);Aa(C_);Ot.Graph=Ot;Ot.DirectedGraph=w_;Ot.UndirectedGraph=T_;Ot.MultiGraph=b_;Ot.MultiDirectedGraph=A_;Ot.MultiUndirectedGraph=C_;Ot.InvalidArgumentsGraphError=Ge;Ot.NotFoundGraphError=Ne;Ot.UsageGraphError=ut;function Jb(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function So(r){var e=Jb(r,"string");return typeof e=="symbol"?e:e+""}function Fn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function uv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,So(n.key),n)}}function kn(r,e,t){return e&&uv(r.prototype,e),t&&uv(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function xa(r){return xa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},xa(r)}function R_(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(R_=function(){return!!r})()}function eA(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tA(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eA(r)}function xi(r,e,t){return e=xa(e),tA(r,R_()?Reflect.construct(e,t||[],xa(r).constructor):e.apply(r,t))}function ef(r,e){return ef=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},ef(r,e)}function Si(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&ef(r,e)}function nA(r){if(Array.isArray(r))return r}function iA(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,a,o,u,c=[],h=!0,f=!1;try{if(o=(t=t.call(r)).next,e===0){if(Object(t)!==t)return;h=!1}else for(;!(h=(n=o.call(t)).done)&&(c.push(n.value),c.length!==e);h=!0);}catch(m){f=!0,a=m}finally{try{if(!h&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw a}}return c}}function tf(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function P_(r,e){if(r){if(typeof r=="string")return tf(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?tf(r,e):void 0}}function rA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sa(r,e){return nA(r)||iA(r,e)||P_(r,e)||rA()}var th={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},L_=new Int8Array(4),nh=new Int32Array(L_.buffer,0,1),sA=new Float32Array(L_.buffer,0,1),aA=/^\s*rgba?\s*\(/,oA=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function lA(r){var e=0,t=0,n=0,a=1;if(r[0]==="#")r.length===4?(e=parseInt(r.charAt(1)+r.charAt(1),16),t=parseInt(r.charAt(2)+r.charAt(2),16),n=parseInt(r.charAt(3)+r.charAt(3),16)):(e=parseInt(r.charAt(1)+r.charAt(2),16),t=parseInt(r.charAt(3)+r.charAt(4),16),n=parseInt(r.charAt(5)+r.charAt(6),16)),r.length===9&&(a=parseInt(r.charAt(7)+r.charAt(8),16)/255);else if(aA.test(r)){var o=r.match(oA);o&&(e=+o[1],t=+o[2],n=+o[3],o[4]&&(a=+o[4]))}return{r:e,g:t,b:n,a}}var pa={};for(var fu in th)pa[fu]=Do(th[fu]),pa[th[fu]]=pa[fu];function D_(r,e,t,n,a){return nh[0]=n<<24|t<<16|e<<8|r,nh[0]=nh[0]&4278190079,sA[0]}function Do(r){if(r=r.toLowerCase(),typeof pa[r]<"u")return pa[r];var e=lA(r),t=e.r,n=e.g,a=e.b,o=e.a;o=o*255|0;var u=D_(t,n,a,o);return pa[r]=u,u}var ih={};function N_(r){if(typeof ih[r]<"u")return ih[r];var e=(r&16711680)>>>16,t=(r&65280)>>>8,n=r&255,a=255,o=D_(e,t,n,a);return ih[r]=o,o}function cv(r,e,t,n){return t+(e<<8)+(r<<16)}function dv(r,e,t,n,a,o){var u=Math.floor(t/o*a),c=Math.floor(r.drawingBufferHeight/o-n/o*a),h=new Uint8Array(4);r.bindFramebuffer(r.FRAMEBUFFER,e),r.readPixels(u,c,1,1,r.RGBA,r.UNSIGNED_BYTE,h);var f=Sa(h,4),m=f[0],g=f[1],v=f[2],x=f[3];return[m,g,v,x]}function Ae(r,e,t){return(e=So(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function hv(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),t.push.apply(t,n)}return t}function et(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?hv(Object(t),!0).forEach(function(n){Ae(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):hv(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function uA(r,e){for(;!{}.hasOwnProperty.call(r,e)&&(r=xa(r))!==null;);return r}function nf(){return nf=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(r,e,t){var n=uA(r,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(arguments.length<3?r:t):a.value}},nf.apply(null,arguments)}function I_(r,e,t,n){var a=nf(xa(r.prototype),e,t);return typeof a=="function"?function(o){return a.apply(t,o)}:a}function cA(r){return r.normalized?1:r.size}function rh(r){var e=0;return r.forEach(function(t){return e+=cA(t)}),e}function U_(r,e,t){var n=r==="VERTEX"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,a=e.createShader(n);if(a===null)throw new Error("loadShader: error while creating the shader");e.shaderSource(a,t),e.compileShader(a);var o=e.getShaderParameter(a,e.COMPILE_STATUS);if(!o){var u=e.getShaderInfoLog(a);throw e.deleteShader(a),new Error(`loadShader: error while compiling the shader:
`.concat(u,`
`).concat(t))}return a}function dA(r,e){return U_("VERTEX",r,e)}function hA(r,e){return U_("FRAGMENT",r,e)}function fA(r,e){var t=r.createProgram();if(t===null)throw new Error("loadProgram: error while creating the program.");var n,a;for(n=0,a=e.length;n<a;n++)r.attachShader(t,e[n]);r.linkProgram(t);var o=r.getProgramParameter(t,r.LINK_STATUS);if(!o)throw r.deleteProgram(t),new Error("loadProgram: error while linking the program.");return t}function fv(r){var e=r.gl,t=r.buffer,n=r.program,a=r.vertexShader,o=r.fragmentShader;e.deleteShader(a),e.deleteShader(o),e.deleteProgram(n),e.deleteBuffer(t)}var pv=`#define PICKING_MODE
`,pA=Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4),F_=(function(){function r(e,t,n){Fn(this,r),Ae(this,"array",new Float32Array),Ae(this,"constantArray",new Float32Array),Ae(this,"capacity",0),Ae(this,"verticesCount",0);var a=this.getDefinition();if(this.VERTICES=a.VERTICES,this.VERTEX_SHADER_SOURCE=a.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=a.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=a.UNIFORMS,this.ATTRIBUTES=a.ATTRIBUTES,this.METHOD=a.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in a?a.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in a?a.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in a,this.ATTRIBUTES_ITEMS_COUNT=rh(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=n,this.normalProgram=this.getProgramInfo("normal",e,a.VERTEX_SHADER_SOURCE,a.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=t?this.getProgramInfo("pick",e,pv+a.VERTEX_SHADER_SOURCE,pv+a.FRAGMENT_SHADER_SOURCE,t):null,this.isInstanced){var o=rh(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES," items, received ").concat(this.CONSTANT_DATA.length," instead)"));this.constantArray=new Float32Array(this.CONSTANT_DATA.length*o);for(var u=0;u<this.CONSTANT_DATA.length;u++){var c=this.CONSTANT_DATA[u];if(c.length!==o)throw new Error("Program: error while getting constant data (one vector has ".concat(c.length," items instead of ").concat(o,")"));for(var h=0;h<c.length;h++)this.constantArray[u*o+h]=c[h]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return kn(r,[{key:"kill",value:function(){fv(this.normalProgram),this.pickProgram&&(fv(this.pickProgram),this.pickProgram=null)}},{key:"getProgramInfo",value:function(t,n,a,o,u){var c=this.getDefinition(),h=n.createBuffer();if(h===null)throw new Error("Program: error while creating the WebGL buffer.");var f=dA(n,a),m=hA(n,o),g=fA(n,[f,m]),v={};c.UNIFORMS.forEach(function(w){var S=n.getUniformLocation(g,w);S&&(v[w]=S)});var x={};c.ATTRIBUTES.forEach(function(w){x[w.name]=n.getAttribLocation(g,w.name)});var M;if("CONSTANT_ATTRIBUTES"in c&&(c.CONSTANT_ATTRIBUTES.forEach(function(w){x[w.name]=n.getAttribLocation(g,w.name)}),M=n.createBuffer(),M===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:t,program:g,gl:n,frameBuffer:u,buffer:h,constantBuffer:M||{},uniformLocations:v,attributeLocations:x,isPicking:t==="pick",vertexShader:f,fragmentShader:m}}},{key:"bindProgram",value:function(t){var n=this,a=0,o=t.gl,u=t.buffer;this.isInstanced?(o.bindBuffer(o.ARRAY_BUFFER,t.constantBuffer),a=0,this.CONSTANT_ATTRIBUTES.forEach(function(c){return a+=n.bindAttribute(c,t,a,!1)}),o.bufferData(o.ARRAY_BUFFER,this.constantArray,o.STATIC_DRAW),o.bindBuffer(o.ARRAY_BUFFER,t.buffer),a=0,this.ATTRIBUTES.forEach(function(c){return a+=n.bindAttribute(c,t,a,!0)}),o.bufferData(o.ARRAY_BUFFER,this.array,o.DYNAMIC_DRAW)):(o.bindBuffer(o.ARRAY_BUFFER,u),a=0,this.ATTRIBUTES.forEach(function(c){return a+=n.bindAttribute(c,t,a)}),o.bufferData(o.ARRAY_BUFFER,this.array,o.DYNAMIC_DRAW)),o.bindBuffer(o.ARRAY_BUFFER,null)}},{key:"unbindProgram",value:function(t){var n=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(a){return n.unbindAttribute(a,t,!1)}),this.ATTRIBUTES.forEach(function(a){return n.unbindAttribute(a,t,!0)})):this.ATTRIBUTES.forEach(function(a){return n.unbindAttribute(a,t)})}},{key:"bindAttribute",value:function(t,n,a,o){var u=pA[t.type];if(typeof u!="number")throw new Error('Program.bind: yet unsupported attribute type "'.concat(t.type,'"'));var c=n.attributeLocations[t.name],h=n.gl;if(c!==-1){h.enableVertexAttribArray(c);var f=this.isInstanced?(o?this.ATTRIBUTES_ITEMS_COUNT:rh(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;if(h.vertexAttribPointer(c,t.size,t.type,t.normalized||!1,f,a),this.isInstanced&&o)if(h instanceof WebGL2RenderingContext)h.vertexAttribDivisor(c,1);else{var m=h.getExtension("ANGLE_instanced_arrays");m&&m.vertexAttribDivisorANGLE(c,1)}}return t.size*u}},{key:"unbindAttribute",value:function(t,n,a){var o=n.attributeLocations[t.name],u=n.gl;if(o!==-1&&(u.disableVertexAttribArray(o),this.isInstanced&&a))if(u instanceof WebGL2RenderingContext)u.vertexAttribDivisor(o,0);else{var c=u.getExtension("ANGLE_instanced_arrays");c&&c.vertexAttribDivisorANGLE(o,0)}}},{key:"reallocate",value:function(t){t!==this.capacity&&(this.capacity=t,this.verticesCount=this.VERTICES*t,this.array=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT))}},{key:"hasNothingToRender",value:function(){return this.verticesCount===0}},{key:"renderProgram",value:function(t,n){var a=n.gl,o=n.program;a.enable(a.BLEND),a.useProgram(o),this.setUniforms(t,n),this.drawWebGL(this.METHOD,n)}},{key:"render",value:function(t){this.hasNothingToRender()||(this.pickProgram&&(this.pickProgram.gl.viewport(0,0,t.width*t.pixelRatio/t.downSizingRatio,t.height*t.pixelRatio/t.downSizingRatio),this.bindProgram(this.pickProgram),this.renderProgram(et(et({},t),{},{pixelRatio:t.pixelRatio/t.downSizingRatio}),this.pickProgram),this.unbindProgram(this.pickProgram)),this.normalProgram.gl.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(t,this.normalProgram),this.unbindProgram(this.normalProgram))}},{key:"drawWebGL",value:function(t,n){var a=n.gl,o=n.frameBuffer;if(a.bindFramebuffer(a.FRAMEBUFFER,o),!this.isInstanced)a.drawArrays(t,0,this.verticesCount);else if(a instanceof WebGL2RenderingContext)a.drawArraysInstanced(t,0,this.VERTICES,this.capacity);else{var u=a.getExtension("ANGLE_instanced_arrays");u&&u.drawArraysInstancedANGLE(t,0,this.VERTICES,this.capacity)}}}])})(),mA=(function(r){function e(){return Fn(this,e),xi(this,e,arguments)}return Si(e,r),kn(e,[{key:"kill",value:function(){I_(e,"kill",this)([])}},{key:"process",value:function(n,a,o){var u=a*this.STRIDE;if(o.hidden){for(var c=u+this.STRIDE;u<c;u++)this.array[u]=0;return}return this.processVisibleItem(N_(n),u,o)}}])})(F_),Tf=(function(r){function e(){var t;Fn(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=xi(this,e,[].concat(a)),Ae(t,"drawLabel",void 0),t}return Si(e,r),kn(e,[{key:"kill",value:function(){I_(e,"kill",this)([])}},{key:"process",value:function(n,a,o,u,c){var h=a*this.STRIDE;if(c.hidden||o.hidden||u.hidden){for(var f=h+this.STRIDE;h<f;h++)this.array[h]=0;return}return this.processVisibleItem(N_(n),h,o,u,c)}}])})(F_);function gA(r,e){return(function(){function t(n,a,o){Fn(this,t),Ae(this,"drawLabel",e),this.programs=r.map(function(u){return new u(n,a,o)})}return kn(t,[{key:"reallocate",value:function(a){this.programs.forEach(function(o){return o.reallocate(a)})}},{key:"process",value:function(a,o,u,c,h){this.programs.forEach(function(f){return f.process(a,o,u,c,h)})}},{key:"render",value:function(a){this.programs.forEach(function(o){return o.render(a)})}},{key:"kill",value:function(){this.programs.forEach(function(a){return a.kill()})}}])})()}function vA(r,e,t,n,a){var o=a.edgeLabelSize,u=a.edgeLabelFont,c=a.edgeLabelWeight,h=a.edgeLabelColor.attribute?e[a.edgeLabelColor.attribute]||a.edgeLabelColor.color||"#000":a.edgeLabelColor.color,f=e.label;if(f){r.fillStyle=h,r.font="".concat(c," ").concat(o,"px ").concat(u);var m=t.size,g=n.size,v=t.x,x=t.y,M=n.x,w=n.y,S=(v+M)/2,y=(x+w)/2,I=M-v,L=w-x,T=Math.sqrt(I*I+L*L);if(!(T<m+g)){v+=I*m/T,x+=L*m/T,M-=I*g/T,w-=L*g/T,S=(v+M)/2,y=(x+w)/2,I=M-v,L=w-x,T=Math.sqrt(I*I+L*L);var P=r.measureText(f).width;if(P>T){var N="…";for(f=f+N,P=r.measureText(f).width;P>T&&f.length>1;)f=f.slice(0,-2)+N,P=r.measureText(f).width;if(f.length<4)return}var D;I>0?L>0?D=Math.acos(I/T):D=Math.asin(L/T):L>0?D=Math.acos(I/T)+Math.PI:D=Math.asin(I/T)+Math.PI/2,r.save(),r.translate(S,y),r.rotate(D),r.fillText(f,-P/2,e.size/2+o),r.restore()}}}function k_(r,e,t){if(e.label){var n=t.labelSize,a=t.labelFont,o=t.labelWeight,u=t.labelColor.attribute?e[t.labelColor.attribute]||t.labelColor.color||"#000":t.labelColor.color;r.fillStyle=u,r.font="".concat(o," ").concat(n,"px ").concat(a),r.fillText(e.label,e.x+e.size+3,e.y+n/3)}}function _A(r,e,t){var n=t.labelSize,a=t.labelFont,o=t.labelWeight;r.font="".concat(o," ").concat(n,"px ").concat(a),r.fillStyle="#FFF",r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=8,r.shadowColor="#000";var u=2;if(typeof e.label=="string"){var c=r.measureText(e.label).width,h=Math.round(c+5),f=Math.round(n+2*u),m=Math.max(e.size,n/2)+u,g=Math.asin(f/2/m),v=Math.sqrt(Math.abs(Math.pow(m,2)-Math.pow(f/2,2)));r.beginPath(),r.moveTo(e.x+v,e.y+f/2),r.lineTo(e.x+m+h,e.y+f/2),r.lineTo(e.x+m+h,e.y-f/2),r.lineTo(e.x+v,e.y-f/2),r.arc(e.x,e.y,m,g,-g),r.closePath(),r.fill()}else r.beginPath(),r.arc(e.x,e.y,e.size+u,0,Math.PI*2),r.closePath(),r.fill();r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=0,k_(r,e,t)}var yA=`
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
`,xA=yA,SA=`
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
`,EA=SA,O_=WebGLRenderingContext,mv=O_.UNSIGNED_BYTE,sh=O_.FLOAT,MA=["u_sizeRatio","u_correctionRatio","u_matrix"],zu=(function(r){function e(){return Fn(this,e),xi(this,e,arguments)}return Si(e,r),kn(e,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:EA,FRAGMENT_SHADER_SOURCE:xA,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:MA,ATTRIBUTES:[{name:"a_position",size:2,type:sh},{name:"a_size",size:1,type:sh},{name:"a_color",size:4,type:mv,normalized:!0},{name:"a_id",size:4,type:mv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_angle",size:1,type:sh}],CONSTANT_DATA:[[e.ANGLE_1],[e.ANGLE_2],[e.ANGLE_3]]}}},{key:"processVisibleItem",value:function(n,a,o){var u=this.array,c=Do(o.color);u[a++]=o.x,u[a++]=o.y,u[a++]=o.size,u[a++]=c,u[a++]=n}},{key:"setUniforms",value:function(n,a){var o=a.gl,u=a.uniformLocations,c=u.u_sizeRatio,h=u.u_correctionRatio,f=u.u_matrix;o.uniform1f(h,n.correctionRatio),o.uniform1f(c,n.sizeRatio),o.uniformMatrix3fv(f,!1,n.matrix)}}])})(mA);Ae(zu,"ANGLE_1",0);Ae(zu,"ANGLE_2",2*Math.PI/3);Ae(zu,"ANGLE_3",4*Math.PI/3);var wA=`
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`,TA=wA,bA=`
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
`,AA=bA,z_=WebGLRenderingContext,gv=z_.UNSIGNED_BYTE,pu=z_.FLOAT,CA=["u_matrix","u_sizeRatio","u_correctionRatio","u_minEdgeThickness","u_lengthToThicknessRatio","u_widenessToThicknessRatio"],B_={extremity:"target",lengthToThicknessRatio:2.5,widenessToThicknessRatio:2};function G_(r){var e=et(et({},B_),{});return(function(t){function n(){return Fn(this,n),xi(this,n,arguments)}return Si(n,t),kn(n,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:AA,FRAGMENT_SHADER_SOURCE:TA,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:CA,ATTRIBUTES:[{name:"a_position",size:2,type:pu},{name:"a_normal",size:2,type:pu},{name:"a_radius",size:1,type:pu},{name:"a_color",size:4,type:gv,normalized:!0},{name:"a_id",size:4,type:gv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_barycentric",size:3,type:pu}],CONSTANT_DATA:[[1,0,0],[0,1,0],[0,0,1]]}}},{key:"processVisibleItem",value:function(o,u,c,h,f){if(e.extremity==="source"){var m=[h,c];c=m[0],h=m[1]}var g=f.size||1,v=h.size||1,x=c.x,M=c.y,w=h.x,S=h.y,y=Do(f.color),I=w-x,L=S-M,T=I*I+L*L,P=0,N=0;T&&(T=1/Math.sqrt(T),P=-L*T*g,N=I*T*g);var D=this.array;D[u++]=w,D[u++]=S,D[u++]=-P,D[u++]=-N,D[u++]=v,D[u++]=y,D[u++]=o}},{key:"setUniforms",value:function(o,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_sizeRatio,g=h.u_correctionRatio,v=h.u_minEdgeThickness,x=h.u_lengthToThicknessRatio,M=h.u_widenessToThicknessRatio;c.uniformMatrix3fv(f,!1,o.matrix),c.uniform1f(m,o.sizeRatio),c.uniform1f(g,o.correctionRatio),c.uniform1f(v,o.minEdgeThickness),c.uniform1f(x,e.lengthToThicknessRatio),c.uniform1f(M,e.widenessToThicknessRatio)}}])})(Tf)}G_();var RA=`
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
`,H_=RA,PA=`
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
`,LA=PA,V_=WebGLRenderingContext,vv=V_.UNSIGNED_BYTE,gs=V_.FLOAT,DA=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness","u_lengthToThicknessRatio"],NA={lengthToThicknessRatio:B_.lengthToThicknessRatio};function W_(r){var e=et(et({},NA),{});return(function(t){function n(){return Fn(this,n),xi(this,n,arguments)}return Si(n,t),kn(n,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:LA,FRAGMENT_SHADER_SOURCE:H_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:DA,ATTRIBUTES:[{name:"a_positionStart",size:2,type:gs},{name:"a_positionEnd",size:2,type:gs},{name:"a_normal",size:2,type:gs},{name:"a_color",size:4,type:vv,normalized:!0},{name:"a_id",size:4,type:vv,normalized:!0},{name:"a_radius",size:1,type:gs}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:gs},{name:"a_normalCoef",size:1,type:gs},{name:"a_radiusCoef",size:1,type:gs}],CONSTANT_DATA:[[0,1,0],[0,-1,0],[1,1,1],[1,1,1],[0,-1,0],[1,-1,-1]]}}},{key:"processVisibleItem",value:function(o,u,c,h,f){var m=f.size||1,g=c.x,v=c.y,x=h.x,M=h.y,w=Do(f.color),S=x-g,y=M-v,I=h.size||1,L=S*S+y*y,T=0,P=0;L&&(L=1/Math.sqrt(L),T=-y*L*m,P=S*L*m);var N=this.array;N[u++]=g,N[u++]=v,N[u++]=x,N[u++]=M,N[u++]=T,N[u++]=P,N[u++]=w,N[u++]=o,N[u++]=I}},{key:"setUniforms",value:function(o,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_zoomRatio,g=h.u_feather,v=h.u_pixelRatio,x=h.u_correctionRatio,M=h.u_sizeRatio,w=h.u_minEdgeThickness,S=h.u_lengthToThicknessRatio;c.uniformMatrix3fv(f,!1,o.matrix),c.uniform1f(m,o.zoomRatio),c.uniform1f(M,o.sizeRatio),c.uniform1f(x,o.correctionRatio),c.uniform1f(v,o.pixelRatio),c.uniform1f(g,o.antiAliasingFeather),c.uniform1f(w,o.minEdgeThickness),c.uniform1f(S,e.lengthToThicknessRatio)}}])})(Tf)}W_();function IA(r){return gA([W_(),G_()])}var UA=IA(),FA=UA,kA=`
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
`,OA=kA,j_=WebGLRenderingContext,_v=j_.UNSIGNED_BYTE,mo=j_.FLOAT,zA=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness"],BA=(function(r){function e(){return Fn(this,e),xi(this,e,arguments)}return Si(e,r),kn(e,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:OA,FRAGMENT_SHADER_SOURCE:H_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:zA,ATTRIBUTES:[{name:"a_positionStart",size:2,type:mo},{name:"a_positionEnd",size:2,type:mo},{name:"a_normal",size:2,type:mo},{name:"a_color",size:4,type:_v,normalized:!0},{name:"a_id",size:4,type:_v,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:mo},{name:"a_normalCoef",size:1,type:mo}],CONSTANT_DATA:[[0,1],[0,-1],[1,1],[1,1],[0,-1],[1,-1]]}}},{key:"processVisibleItem",value:function(n,a,o,u,c){var h=c.size||1,f=o.x,m=o.y,g=u.x,v=u.y,x=Do(c.color),M=g-f,w=v-m,S=M*M+w*w,y=0,I=0;S&&(S=1/Math.sqrt(S),y=-w*S*h,I=M*S*h);var L=this.array;L[a++]=f,L[a++]=m,L[a++]=g,L[a++]=v,L[a++]=y,L[a++]=I,L[a++]=x,L[a++]=n}},{key:"setUniforms",value:function(n,a){var o=a.gl,u=a.uniformLocations,c=u.u_matrix,h=u.u_zoomRatio,f=u.u_feather,m=u.u_pixelRatio,g=u.u_correctionRatio,v=u.u_sizeRatio,x=u.u_minEdgeThickness;o.uniformMatrix3fv(c,!1,n.matrix),o.uniform1f(h,n.zoomRatio),o.uniform1f(v,n.sizeRatio),o.uniform1f(g,n.correctionRatio),o.uniform1f(m,n.pixelRatio),o.uniform1f(f,n.antiAliasingFeather),o.uniform1f(x,n.minEdgeThickness)}}])})(Tf),bf=(function(r){function e(){var t;return Fn(this,e),t=xi(this,e),t.rawEmitter=t,t}return Si(e,r),kn(e)})(p_.EventEmitter),ah,yv;function GA(){return yv||(yv=1,ah=function(e){return e!==null&&typeof e=="object"&&typeof e.addUndirectedEdgeWithKey=="function"&&typeof e.dropNode=="function"&&typeof e.multi=="boolean"}),ah}var HA=GA();const VA=of(HA);var WA=function(e){return e},jA=function(e){return e*e},XA=function(e){return e*(2-e)},$A=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},YA=function(e){return e*e*e},qA=function(e){return--e*e*e+1},KA=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},ZA={linear:WA,quadraticIn:jA,quadraticOut:XA,quadraticInOut:$A,cubicIn:YA,cubicOut:qA,cubicInOut:KA},QA={easing:"quadraticInOut",duration:150};function Ni(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function mu(r,e,t){return r[0]=e,r[4]=typeof t=="number"?t:e,r}function xv(r,e){var t=Math.sin(e),n=Math.cos(e);return r[0]=n,r[1]=t,r[3]=-t,r[4]=n,r}function Sv(r,e,t){return r[6]=e,r[7]=t,r}function Wr(r,e){var t=r[0],n=r[1],a=r[2],o=r[3],u=r[4],c=r[5],h=r[6],f=r[7],m=r[8],g=e[0],v=e[1],x=e[2],M=e[3],w=e[4],S=e[5],y=e[6],I=e[7],L=e[8];return r[0]=g*t+v*o+x*h,r[1]=g*n+v*u+x*f,r[2]=g*a+v*c+x*m,r[3]=M*t+w*o+S*h,r[4]=M*n+w*u+S*f,r[5]=M*a+w*c+S*m,r[6]=y*t+I*o+L*h,r[7]=y*n+I*u+L*f,r[8]=y*a+I*c+L*m,r}function rf(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=r[0],a=r[1],o=r[3],u=r[4],c=r[6],h=r[7],f=e.x,m=e.y;return{x:f*n+m*o+c*t,y:f*a+m*u+h*t}}function JA(r,e){var t=r.height/r.width,n=e.height/e.width;return t<1&&n>1||t>1&&n<1?1:Math.min(Math.max(n,1/n),Math.max(1/t,t))}function go(r,e,t,n,a){var o=r.angle,u=r.ratio,c=r.x,h=r.y,f=e.width,m=e.height,g=Ni(),v=Math.min(f,m)-2*n,x=JA(e,t);return a?(Wr(g,Sv(Ni(),c,h)),Wr(g,mu(Ni(),u)),Wr(g,xv(Ni(),o)),Wr(g,mu(Ni(),f/v/2/x,m/v/2/x))):(Wr(g,mu(Ni(),2*(v/f)*x,2*(v/m)*x)),Wr(g,xv(Ni(),-o)),Wr(g,mu(Ni(),1/u)),Wr(g,Sv(Ni(),-c,-h))),g}function eC(r,e,t){var n=rf(r,{x:Math.cos(e.angle),y:Math.sin(e.angle)},0),a=n.x,o=n.y;return 1/Math.sqrt(Math.pow(a,2)+Math.pow(o,2))/t.width}function tC(r){if(!r.order)return{x:[0,1],y:[0,1]};var e=1/0,t=-1/0,n=1/0,a=-1/0;return r.forEachNode(function(o,u){var c=u.x,h=u.y;c<e&&(e=c),c>t&&(t=c),h<n&&(n=h),h>a&&(a=h)}),{x:[e,t],y:[n,a]}}function nC(r){if(!VA(r))throw new Error("Sigma: invalid graph instance.");r.forEachNode(function(e,t){if(!Number.isFinite(t.x)||!Number.isFinite(t.y))throw new Error("Sigma: Coordinates of node ".concat(e," are invalid. A node must have a numeric 'x' and 'y' attribute."))})}function iC(r,e,t){var n=document.createElement(r);if(e)for(var a in e)n.style[a]=e[a];if(t)for(var o in t)n.setAttribute(o,t[o]);return n}function Ev(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}function Mv(r,e,t){return t.sort(function(n,a){var o=e(n)||0,u=e(a)||0;return o<u?-1:o>u?1:0})}function wv(r){var e=Sa(r.x,2),t=e[0],n=e[1],a=Sa(r.y,2),o=a[0],u=a[1],c=Math.max(n-t,u-o),h=(n+t)/2,f=(u+o)/2;(c===0||Math.abs(c)===1/0||isNaN(c))&&(c=1),isNaN(h)&&(h=0),isNaN(f)&&(f=0);var m=function(v){return{x:.5+(v.x-h)/c,y:.5+(v.y-f)/c}};return m.applyTo=function(g){g.x=.5+(g.x-h)/c,g.y=.5+(g.y-f)/c},m.inverse=function(g){return{x:h+c*(g.x-.5),y:f+c*(g.y-.5)}},m.ratio=c,m}function sf(r){"@babel/helpers - typeof";return sf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sf(r)}function Tv(r,e){var t=e.size;if(t!==0){var n=r.length;r.length+=t;var a=0;e.forEach(function(o){r[n+a]=o,a++})}}function oh(r){r=r||{};for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;e++){var n=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];n&&Object.assign(r,n)}return r}var Af={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,enableEdgeEvents:!1,defaultNodeColor:"#999",defaultNodeType:"circle",defaultEdgeColor:"#ccc",defaultEdgeType:"line",labelFont:"Arial",labelSize:14,labelWeight:"normal",labelColor:{color:"#000"},edgeLabelFont:"Arial",edgeLabelSize:14,edgeLabelWeight:"normal",edgeLabelColor:{attribute:"color"},stagePadding:30,defaultDrawEdgeLabel:vA,defaultDrawNodeLabel:k_,defaultDrawNodeHover:_A,minEdgeThickness:1.7,antiAliasingFeather:1,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"screen",autoRescale:!0,autoCenter:!0,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,nodeReducer:null,edgeReducer:null,zIndex:!1,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,cameraPanBoundaries:null,allowInvalidContainer:!1,nodeProgramClasses:{},nodeHoverProgramClasses:{},edgeProgramClasses:{}},rC={circle:zu},sC={arrow:FA,line:BA};function lh(r){if(typeof r.labelDensity!="number"||r.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");var e=r.minCameraRatio,t=r.maxCameraRatio;if(typeof e=="number"&&typeof t=="number"&&t<e)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function aC(r){var e=oh({},Af,r);return e.nodeProgramClasses=oh({},rC,e.nodeProgramClasses),e.edgeProgramClasses=oh({},sC,e.edgeProgramClasses),e}var gu=1.5,bv=(function(r){function e(){var t;return Fn(this,e),t=xi(this,e),Ae(t,"x",.5),Ae(t,"y",.5),Ae(t,"angle",0),Ae(t,"ratio",1),Ae(t,"minRatio",null),Ae(t,"maxRatio",null),Ae(t,"enabledZooming",!0),Ae(t,"enabledPanning",!0),Ae(t,"enabledRotation",!0),Ae(t,"clean",null),Ae(t,"nextFrame",null),Ae(t,"previousState",null),Ae(t,"enabled",!0),t.previousState=t.getState(),t}return Si(e,r),kn(e,[{key:"enable",value:function(){return this.enabled=!0,this}},{key:"disable",value:function(){return this.enabled=!1,this}},{key:"getState",value:function(){return{x:this.x,y:this.y,angle:this.angle,ratio:this.ratio}}},{key:"hasState",value:function(n){return this.x===n.x&&this.y===n.y&&this.ratio===n.ratio&&this.angle===n.angle}},{key:"getPreviousState",value:function(){var n=this.previousState;return n?{x:n.x,y:n.y,angle:n.angle,ratio:n.ratio}:null}},{key:"getBoundedRatio",value:function(n){var a=n;return typeof this.minRatio=="number"&&(a=Math.max(a,this.minRatio)),typeof this.maxRatio=="number"&&(a=Math.min(a,this.maxRatio)),a}},{key:"validateState",value:function(n){var a={};return this.enabledPanning&&typeof n.x=="number"&&(a.x=n.x),this.enabledPanning&&typeof n.y=="number"&&(a.y=n.y),this.enabledZooming&&typeof n.ratio=="number"&&(a.ratio=this.getBoundedRatio(n.ratio)),this.enabledRotation&&typeof n.angle=="number"&&(a.angle=n.angle),this.clean?this.clean(et(et({},this.getState()),a)):a}},{key:"isAnimated",value:function(){return!!this.nextFrame}},{key:"setState",value:function(n){if(!this.enabled)return this;this.previousState=this.getState();var a=this.validateState(n);return typeof a.x=="number"&&(this.x=a.x),typeof a.y=="number"&&(this.y=a.y),typeof a.ratio=="number"&&(this.ratio=a.ratio),typeof a.angle=="number"&&(this.angle=a.angle),this.hasState(this.previousState)||this.emit("updated",this.getState()),this}},{key:"updateState",value:function(n){return this.setState(n(this.getState())),this}},{key:"animate",value:function(n){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=arguments.length>2?arguments[2]:void 0;if(!u)return new Promise(function(x){return a.animate(n,o,x)});if(this.enabled){var c=et(et({},QA),o),h=this.validateState(n),f=typeof c.easing=="function"?c.easing:ZA[c.easing],m=Date.now(),g=this.getState(),v=function(){var M=(Date.now()-m)/c.duration;if(M>=1){a.nextFrame=null,a.setState(h),a.animationCallback&&(a.animationCallback.call(null),a.animationCallback=void 0);return}var w=f(M),S={};typeof h.x=="number"&&(S.x=g.x+(h.x-g.x)*w),typeof h.y=="number"&&(S.y=g.y+(h.y-g.y)*w),a.enabledRotation&&typeof h.angle=="number"&&(S.angle=g.angle+(h.angle-g.angle)*w),typeof h.ratio=="number"&&(S.ratio=g.ratio+(h.ratio-g.ratio)*w),a.setState(S),a.nextFrame=requestAnimationFrame(v)};this.nextFrame?(cancelAnimationFrame(this.nextFrame),this.animationCallback&&this.animationCallback.call(null),this.nextFrame=requestAnimationFrame(v)):v(),this.animationCallback=u}}},{key:"animatedZoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio/n}):this.animate({ratio:this.ratio/(n.factor||gu)},n):this.animate({ratio:this.ratio/gu})}},{key:"animatedUnzoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio*n}):this.animate({ratio:this.ratio*(n.factor||gu)},n):this.animate({ratio:this.ratio*gu})}},{key:"animatedReset",value:function(n){return this.animate({x:.5,y:.5,ratio:1,angle:0},n)}},{key:"copy",value:function(){return e.from(this.getState())}}],[{key:"from",value:function(n){var a=new e;return a.setState(n)}}])})(bf);function Ui(r,e){var t=e.getBoundingClientRect();return{x:r.clientX-t.left,y:r.clientY-t.top}}function or(r,e){var t=et(et({},Ui(r,e)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){t.sigmaDefaultPrevented=!0},original:r});return t}function vo(r){var e="x"in r?r:et(et({},r.touches[0]||r.previousTouches[0]),{},{original:r.original,sigmaDefaultPrevented:r.sigmaDefaultPrevented,preventSigmaDefault:function(){r.sigmaDefaultPrevented=!0,e.sigmaDefaultPrevented=!0}});return e}function oC(r,e){return et(et({},or(r,e)),{},{delta:X_(r)})}var lC=2;function Cu(r){for(var e=[],t=0,n=Math.min(r.length,lC);t<n;t++)e.push(r[t]);return e}function _o(r,e,t){var n={touches:Cu(r.touches).map(function(a){return Ui(a,t)}),previousTouches:e.map(function(a){return Ui(a,t)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){n.sigmaDefaultPrevented=!0},original:r};return n}function X_(r){if(typeof r.deltaY<"u")return r.deltaY*-3/360;if(typeof r.detail<"u")return r.detail/-9;throw new Error("Captor: could not extract delta from event.")}var $_=(function(r){function e(t,n){var a;return Fn(this,e),a=xi(this,e),a.container=t,a.renderer=n,a}return Si(e,r),kn(e)})(bf),uC=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],cC=uC.reduce(function(r,e){return et(et({},r),{},Ae({},e,Af[e]))},{}),dC=(function(r){function e(t,n){var a;return Fn(this,e),a=xi(this,e,[t,n]),Ae(a,"enabled",!0),Ae(a,"draggedEvents",0),Ae(a,"downStartTime",null),Ae(a,"lastMouseX",null),Ae(a,"lastMouseY",null),Ae(a,"isMouseDown",!1),Ae(a,"isMoving",!1),Ae(a,"movingTimeout",null),Ae(a,"startCameraState",null),Ae(a,"clicks",0),Ae(a,"doubleClickTimeout",null),Ae(a,"currentWheelDirection",0),Ae(a,"settings",cC),a.handleClick=a.handleClick.bind(a),a.handleRightClick=a.handleRightClick.bind(a),a.handleDown=a.handleDown.bind(a),a.handleUp=a.handleUp.bind(a),a.handleMove=a.handleMove.bind(a),a.handleWheel=a.handleWheel.bind(a),a.handleLeave=a.handleLeave.bind(a),a.handleEnter=a.handleEnter.bind(a),t.addEventListener("click",a.handleClick,{capture:!1}),t.addEventListener("contextmenu",a.handleRightClick,{capture:!1}),t.addEventListener("mousedown",a.handleDown,{capture:!1}),t.addEventListener("wheel",a.handleWheel,{capture:!1}),t.addEventListener("mouseleave",a.handleLeave,{capture:!1}),t.addEventListener("mouseenter",a.handleEnter,{capture:!1}),document.addEventListener("mousemove",a.handleMove,{capture:!1}),document.addEventListener("mouseup",a.handleUp,{capture:!1}),a}return Si(e,r),kn(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("click",this.handleClick),n.removeEventListener("contextmenu",this.handleRightClick),n.removeEventListener("mousedown",this.handleDown),n.removeEventListener("wheel",this.handleWheel),n.removeEventListener("mouseleave",this.handleLeave),n.removeEventListener("mouseenter",this.handleEnter),document.removeEventListener("mousemove",this.handleMove),document.removeEventListener("mouseup",this.handleUp)}},{key:"handleClick",value:function(n){var a=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(n);setTimeout(function(){a.clicks=0,a.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",or(n,this.container))}}},{key:"handleRightClick",value:function(n){this.enabled&&this.emit("rightClick",or(n,this.container))}},{key:"handleDoubleClick",value:function(n){if(this.enabled){n.preventDefault(),n.stopPropagation();var a=or(n,this.container);if(this.emit("doubleClick",a),!a.sigmaDefaultPrevented){var o=this.renderer.getCamera(),u=o.getBoundedRatio(o.getState().ratio/this.settings.doubleClickZoomingRatio);o.animate(this.renderer.getViewportZoomedState(Ui(n,this.container),u),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}}},{key:"handleDown",value:function(n){if(this.enabled){if(n.button===0){this.startCameraState=this.renderer.getCamera().getState();var a=Ui(n,this.container),o=a.x,u=a.y;this.lastMouseX=o,this.lastMouseY=u,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}this.emit("mousedown",or(n,this.container))}}},{key:"handleUp",value:function(n){var a=this;if(!(!this.enabled||!this.isMouseDown)){var o=this.renderer.getCamera();this.isMouseDown=!1,typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var u=Ui(n,this.container),c=u.x,h=u.y,f=o.getState(),m=o.getPreviousState()||{x:0,y:0};this.isMoving?o.animate({x:f.x+this.settings.inertiaRatio*(f.x-m.x),y:f.y+this.settings.inertiaRatio*(f.y-m.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==c||this.lastMouseY!==h)&&o.setState({x:f.x,y:f.y}),this.isMoving=!1,setTimeout(function(){var g=a.draggedEvents>0;a.draggedEvents=0,g&&a.renderer.getSetting("hideEdgesOnMove")&&a.renderer.refresh()},0),this.emit("mouseup",or(n,this.container))}}},{key:"handleMove",value:function(n){var a=this;if(this.enabled){var o=or(n,this.container);if(this.emit("mousemovebody",o),(n.target===this.container||n.composedPath()[0]===this.container)&&this.emit("mousemove",o),!o.sigmaDefaultPrevented&&this.isMouseDown){this.isMoving=!0,this.draggedEvents++,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){a.movingTimeout=null,a.isMoving=!1},this.settings.dragTimeout);var u=this.renderer.getCamera(),c=Ui(n,this.container),h=c.x,f=c.y,m=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),g=this.renderer.viewportToFramedGraph({x:h,y:f}),v=m.x-g.x,x=m.y-g.y,M=u.getState(),w=M.x+v,S=M.y+x;u.setState({x:w,y:S}),this.lastMouseX=h,this.lastMouseY=f,n.preventDefault(),n.stopPropagation()}}}},{key:"handleLeave",value:function(n){this.emit("mouseleave",or(n,this.container))}},{key:"handleEnter",value:function(n){this.emit("mouseenter",or(n,this.container))}},{key:"handleWheel",value:function(n){var a=this,o=this.renderer.getCamera();if(!(!this.enabled||!o.enabledZooming)){var u=X_(n);if(u){var c=oC(n,this.container);if(this.emit("wheel",c),c.sigmaDefaultPrevented){n.preventDefault(),n.stopPropagation();return}var h=o.getState().ratio,f=u>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,m=o.getBoundedRatio(h*f),g=u>0?1:-1,v=Date.now();h!==m&&(n.preventDefault(),n.stopPropagation(),!(this.currentWheelDirection===g&&this.lastWheelTriggerTime&&v-this.lastWheelTriggerTime<this.settings.zoomDuration/5)&&(o.animate(this.renderer.getViewportZoomedState(Ui(n,this.container),m),{easing:"quadraticOut",duration:this.settings.zoomDuration},function(){a.currentWheelDirection=0}),this.currentWheelDirection=g,this.lastWheelTriggerTime=v))}}}},{key:"setSettings",value:function(n){this.settings=n}}])})($_),hC=["dragTimeout","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],fC=hC.reduce(function(r,e){return et(et({},r),{},Ae({},e,Af[e]))},{}),pC=(function(r){function e(t,n){var a;return Fn(this,e),a=xi(this,e,[t,n]),Ae(a,"enabled",!0),Ae(a,"isMoving",!1),Ae(a,"hasMoved",!1),Ae(a,"touchMode",0),Ae(a,"startTouchesPositions",[]),Ae(a,"lastTouches",[]),Ae(a,"lastTap",null),Ae(a,"settings",fC),a.handleStart=a.handleStart.bind(a),a.handleLeave=a.handleLeave.bind(a),a.handleMove=a.handleMove.bind(a),t.addEventListener("touchstart",a.handleStart,{capture:!1}),t.addEventListener("touchcancel",a.handleLeave,{capture:!1}),document.addEventListener("touchend",a.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",a.handleMove,{capture:!1,passive:!1}),a}return Si(e,r),kn(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("touchstart",this.handleStart),n.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}},{key:"getDimensions",value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:"handleStart",value:function(n){var a=this;if(this.enabled){n.preventDefault();var o=Cu(n.touches);if(this.touchMode=o.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=o.map(function(x){return Ui(x,a.container)}),this.touchMode===2){var u=Sa(this.startTouchesPositions,2),c=u[0],h=c.x,f=c.y,m=u[1],g=m.x,v=m.y;this.startTouchesAngle=Math.atan2(v-f,g-h),this.startTouchesDistance=Math.sqrt(Math.pow(g-h,2)+Math.pow(v-f,2))}this.emit("touchdown",_o(n,this.lastTouches,this.container)),this.lastTouches=o,this.lastTouchesPositions=this.startTouchesPositions}}},{key:"handleLeave",value:function(n){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(n.cancelable&&n.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(n.touches.length===1){this.handleStart(n),n.preventDefault();break}case 1:if(this.isMoving){var a=this.renderer.getCamera(),o=a.getState(),u=a.getPreviousState()||{x:0,y:0};a.animate({x:o.x+this.settings.inertiaRatio*(o.x-u.x),y:o.y+this.settings.inertiaRatio*(o.y-u.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.emit("touchup",_o(n,this.lastTouches,this.container)),!n.touches.length){var c=Ui(this.lastTouches[0],this.container),h=this.startTouchesPositions[0],f=Math.pow(c.x-h.x,2)+Math.pow(c.y-h.y,2);if(!n.touches.length&&f<Math.pow(this.settings.tapMoveTolerance,2))if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var m=_o(n,this.lastTouches,this.container);if(this.emit("doubletap",m),this.lastTap=null,!m.sigmaDefaultPrevented){var g=this.renderer.getCamera(),v=g.getBoundedRatio(g.getState().ratio/this.settings.doubleClickZoomingRatio);g.animate(this.renderer.getViewportZoomedState(c,v),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{var x=_o(n,this.lastTouches,this.container);this.emit("tap",x),this.lastTap={time:Date.now(),position:x.touches[0]||x.previousTouches[0]}}}this.lastTouches=Cu(n.touches),this.startTouchesPositions=[]}}},{key:"handleMove",value:function(n){var a=this;if(!(!this.enabled||!this.startTouchesPositions.length)){n.preventDefault();var o=Cu(n.touches),u=o.map(function(B){return Ui(B,a.container)}),c=this.lastTouches;this.lastTouches=o,this.lastTouchesPositions=u;var h=_o(n,c,this.container);if(this.emit("touchmove",h),!h.sigmaDefaultPrevented&&(this.hasMoved||(this.hasMoved=u.some(function(B,re){var _e=a.startTouchesPositions[re];return _e&&(B.x!==_e.x||B.y!==_e.y)})),!!this.hasMoved)){this.isMoving=!0,this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){a.isMoving=!1},this.settings.dragTimeout);var f=this.renderer.getCamera(),m=this.startCameraState,g=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{var v=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),x=v.x,M=v.y,w=this.renderer.viewportToFramedGraph(u[0]),S=w.x,y=w.y;f.setState({x:m.x+x-S,y:m.y+M-y});break}case 2:{var I={x:.5,y:.5,angle:0,ratio:1},L=u[0],T=L.x,P=L.y,N=u[1],D=N.x,O=N.y,C=Math.atan2(O-P,D-T)-this.startTouchesAngle,E=Math.hypot(O-P,D-T)/this.startTouchesDistance,k=f.getBoundedRatio(m.ratio/E);I.ratio=k,I.angle=m.angle+C;var q=this.getDimensions(),Q=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:m}),ne=Math.min(q.width,q.height)-2*g,ae=ne/q.width,he=ne/q.height,me=k/ne,H=T-ne/2/ae,pe=P-ne/2/he,se=[H*Math.cos(-I.angle)-pe*Math.sin(-I.angle),pe*Math.cos(-I.angle)+H*Math.sin(-I.angle)];H=se[0],pe=se[1],I.x=Q.x-H*me,I.y=Q.y+pe*me,f.setState(I);break}}}}}},{key:"setSettings",value:function(n){this.settings=n}}])})($_);function mC(r){if(Array.isArray(r))return tf(r)}function gC(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function vC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Av(r){return mC(r)||gC(r)||P_(r)||vC()}function _C(r,e){if(r==null)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)!==-1)continue;t[n]=r[n]}return t}function uh(r,e){if(r==null)return{};var t,n,a=_C(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var Cv=(function(){function r(e,t){Fn(this,r),this.key=e,this.size=t}return kn(r,null,[{key:"compare",value:function(t,n){return t.size>n.size?-1:t.size<n.size||t.key>n.key?1:-1}}])})(),Rv=(function(){function r(){Fn(this,r),Ae(this,"width",0),Ae(this,"height",0),Ae(this,"cellSize",0),Ae(this,"columns",0),Ae(this,"rows",0),Ae(this,"cells",{})}return kn(r,[{key:"resizeAndClear",value:function(t,n){this.width=t.width,this.height=t.height,this.cellSize=n,this.columns=Math.ceil(t.width/n),this.rows=Math.ceil(t.height/n),this.cells={}}},{key:"getIndex",value:function(t){var n=Math.floor(t.x/this.cellSize),a=Math.floor(t.y/this.cellSize);return a*this.columns+n}},{key:"add",value:function(t,n,a){var o=new Cv(t,n),u=this.getIndex(a),c=this.cells[u];c||(c=[],this.cells[u]=c),c.push(o)}},{key:"organize",value:function(){for(var t in this.cells){var n=this.cells[t];n.sort(Cv.compare)}}},{key:"getLabelsToDisplay",value:function(t,n){var a=this.cellSize*this.cellSize,o=a/t/t,u=o*n/a,c=Math.ceil(u),h=[];for(var f in this.cells)for(var m=this.cells[f],g=0;g<Math.min(c,m.length);g++)h.push(m[g].key);return h}}])})();function yC(r){var e=r.graph,t=r.hoveredNode,n=r.highlightedNodes,a=r.displayedNodeLabels,o=[];return e.forEachEdge(function(u,c,h,f){(h===t||f===t||n.has(h)||n.has(f)||a.has(h)&&a.has(f))&&o.push(u)}),o}var Pv=150,Lv=50,ur=Object.prototype.hasOwnProperty;function xC(r,e,t){if(!ur.call(t,"x")||!ur.call(t,"y"))throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(e,'". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));return t.color||(t.color=r.defaultNodeColor),!t.label&&t.label!==""&&(t.label=null),t.label!==void 0&&t.label!==null?t.label=""+t.label:t.label=null,t.size||(t.size=2),ur.call(t,"hidden")||(t.hidden=!1),ur.call(t,"highlighted")||(t.highlighted=!1),ur.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultNodeType),t.zIndex||(t.zIndex=0),t}function SC(r,e,t){return t.color||(t.color=r.defaultEdgeColor),t.label||(t.label=""),t.size||(t.size=.5),ur.call(t,"hidden")||(t.hidden=!1),ur.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultEdgeType),t.zIndex||(t.zIndex=0),t}var EC=(function(r){function e(t,n){var a,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Fn(this,e),a=xi(this,e),Ae(a,"elements",{}),Ae(a,"canvasContexts",{}),Ae(a,"webGLContexts",{}),Ae(a,"pickingLayers",new Set),Ae(a,"textures",{}),Ae(a,"frameBuffers",{}),Ae(a,"activeListeners",{}),Ae(a,"labelGrid",new Rv),Ae(a,"nodeDataCache",{}),Ae(a,"edgeDataCache",{}),Ae(a,"nodeProgramIndex",{}),Ae(a,"edgeProgramIndex",{}),Ae(a,"nodesWithForcedLabels",new Set),Ae(a,"edgesWithForcedLabels",new Set),Ae(a,"nodeExtent",{x:[0,1],y:[0,1]}),Ae(a,"nodeZExtent",[1/0,-1/0]),Ae(a,"edgeZExtent",[1/0,-1/0]),Ae(a,"matrix",Ni()),Ae(a,"invMatrix",Ni()),Ae(a,"correctionRatio",1),Ae(a,"customBBox",null),Ae(a,"normalizationFunction",wv({x:[0,1],y:[0,1]})),Ae(a,"graphToViewportRatio",1),Ae(a,"itemIDsIndex",{}),Ae(a,"nodeIndices",{}),Ae(a,"edgeIndices",{}),Ae(a,"width",0),Ae(a,"height",0),Ae(a,"pixelRatio",Ev()),Ae(a,"pickingDownSizingRatio",2*a.pixelRatio),Ae(a,"displayedNodeLabels",new Set),Ae(a,"displayedEdgeLabels",new Set),Ae(a,"highlightedNodes",new Set),Ae(a,"hoveredNode",null),Ae(a,"hoveredEdge",null),Ae(a,"renderFrame",null),Ae(a,"renderHighlightedNodesFrame",null),Ae(a,"needToProcess",!1),Ae(a,"checkEdgesEventsFrame",null),Ae(a,"nodePrograms",{}),Ae(a,"nodeHoverPrograms",{}),Ae(a,"edgePrograms",{}),a.settings=aC(o),lh(a.settings),nC(t),!(n instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");a.graph=t,a.container=n,a.createWebGLContext("edges",{picking:o.enableEdgeEvents}),a.createCanvasContext("edgeLabels"),a.createWebGLContext("nodes",{picking:!0}),a.createCanvasContext("labels"),a.createCanvasContext("hovers"),a.createWebGLContext("hoverNodes"),a.createCanvasContext("mouse",{style:{touchAction:"none",userSelect:"none"}}),a.resize();for(var u in a.settings.nodeProgramClasses)a.registerNodeProgram(u,a.settings.nodeProgramClasses[u],a.settings.nodeHoverProgramClasses[u]);for(var c in a.settings.edgeProgramClasses)a.registerEdgeProgram(c,a.settings.edgeProgramClasses[c]);return a.camera=new bv,a.bindCameraHandlers(),a.mouseCaptor=new dC(a.elements.mouse,a),a.mouseCaptor.setSettings(a.settings),a.touchCaptor=new pC(a.elements.mouse,a),a.touchCaptor.setSettings(a.settings),a.bindEventHandlers(),a.bindGraphHandlers(),a.handleSettingsUpdate(),a.refresh(),a}return Si(e,r),kn(e,[{key:"registerNodeProgram",value:function(n,a,o){return this.nodePrograms[n]&&this.nodePrograms[n].kill(),this.nodeHoverPrograms[n]&&this.nodeHoverPrograms[n].kill(),this.nodePrograms[n]=new a(this.webGLContexts.nodes,this.frameBuffers.nodes,this),this.nodeHoverPrograms[n]=new(o||a)(this.webGLContexts.hoverNodes,null,this),this}},{key:"registerEdgeProgram",value:function(n,a){return this.edgePrograms[n]&&this.edgePrograms[n].kill(),this.edgePrograms[n]=new a(this.webGLContexts.edges,this.frameBuffers.edges,this),this}},{key:"unregisterNodeProgram",value:function(n){if(this.nodePrograms[n]){var a=this.nodePrograms,o=a[n],u=uh(a,[n].map(So));o.kill(),this.nodePrograms=u}if(this.nodeHoverPrograms[n]){var c=this.nodeHoverPrograms,h=c[n],f=uh(c,[n].map(So));h.kill(),this.nodePrograms=f}return this}},{key:"unregisterEdgeProgram",value:function(n){if(this.edgePrograms[n]){var a=this.edgePrograms,o=a[n],u=uh(a,[n].map(So));o.kill(),this.edgePrograms=u}return this}},{key:"resetWebGLTexture",value:function(n){var a=this.webGLContexts[n],o=this.frameBuffers[n],u=this.textures[n];u&&a.deleteTexture(u);var c=a.createTexture();return a.bindFramebuffer(a.FRAMEBUFFER,o),a.bindTexture(a.TEXTURE_2D,c),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,this.width,this.height,0,a.RGBA,a.UNSIGNED_BYTE,null),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,c,0),this.textures[n]=c,this}},{key:"bindCameraHandlers",value:function(){var n=this;return this.activeListeners.camera=function(){n.scheduleRender()},this.camera.on("updated",this.activeListeners.camera),this}},{key:"unbindCameraHandlers",value:function(){return this.camera.removeListener("updated",this.activeListeners.camera),this}},{key:"getNodeAtPosition",value:function(n){var a=n.x,o=n.y,u=dv(this.webGLContexts.nodes,this.frameBuffers.nodes,a,o,this.pixelRatio,this.pickingDownSizingRatio),c=cv.apply(void 0,Av(u)),h=this.itemIDsIndex[c];return h&&h.type==="node"?h.id:null}},{key:"bindEventHandlers",value:function(){var n=this;this.activeListeners.handleResize=function(){n.scheduleRefresh()},window.addEventListener("resize",this.activeListeners.handleResize),this.activeListeners.handleMove=function(o){var u=vo(o),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}},h=n.getNodeAtPosition(u);if(h&&n.hoveredNode!==h&&!n.nodeDataCache[h].hidden){n.hoveredNode&&n.emit("leaveNode",et(et({},c),{},{node:n.hoveredNode})),n.hoveredNode=h,n.emit("enterNode",et(et({},c),{},{node:h})),n.scheduleHighlightedNodesRender();return}if(n.hoveredNode&&n.getNodeAtPosition(u)!==n.hoveredNode){var f=n.hoveredNode;n.hoveredNode=null,n.emit("leaveNode",et(et({},c),{},{node:f})),n.scheduleHighlightedNodesRender();return}if(n.settings.enableEdgeEvents){var m=n.hoveredNode?null:n.getEdgeAtPoint(c.event.x,c.event.y);m!==n.hoveredEdge&&(n.hoveredEdge&&n.emit("leaveEdge",et(et({},c),{},{edge:n.hoveredEdge})),m&&n.emit("enterEdge",et(et({},c),{},{edge:m})),n.hoveredEdge=m)}},this.activeListeners.handleMoveBody=function(o){var u=vo(o);n.emit("moveBody",{event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}})},this.activeListeners.handleLeave=function(o){var u=vo(o),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.hoveredNode&&(n.emit("leaveNode",et(et({},c),{},{node:n.hoveredNode})),n.scheduleHighlightedNodesRender()),n.settings.enableEdgeEvents&&n.hoveredEdge&&(n.emit("leaveEdge",et(et({},c),{},{edge:n.hoveredEdge})),n.scheduleHighlightedNodesRender()),n.emit("leaveStage",et({},c))},this.activeListeners.handleEnter=function(o){var u=vo(o),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.emit("enterStage",et({},c))};var a=function(u){return function(c){var h=vo(c),f={event:h,preventSigmaDefault:function(){h.preventSigmaDefault()}},m=n.getNodeAtPosition(h);if(m)return n.emit("".concat(u,"Node"),et(et({},f),{},{node:m}));if(n.settings.enableEdgeEvents){var g=n.getEdgeAtPoint(h.x,h.y);if(g)return n.emit("".concat(u,"Edge"),et(et({},f),{},{edge:g}))}return n.emit("".concat(u,"Stage"),f)}};return this.activeListeners.handleClick=a("click"),this.activeListeners.handleRightClick=a("rightClick"),this.activeListeners.handleDoubleClick=a("doubleClick"),this.activeListeners.handleWheel=a("wheel"),this.activeListeners.handleDown=a("down"),this.activeListeners.handleUp=a("up"),this.mouseCaptor.on("mousemove",this.activeListeners.handleMove),this.mouseCaptor.on("mousemovebody",this.activeListeners.handleMoveBody),this.mouseCaptor.on("click",this.activeListeners.handleClick),this.mouseCaptor.on("rightClick",this.activeListeners.handleRightClick),this.mouseCaptor.on("doubleClick",this.activeListeners.handleDoubleClick),this.mouseCaptor.on("wheel",this.activeListeners.handleWheel),this.mouseCaptor.on("mousedown",this.activeListeners.handleDown),this.mouseCaptor.on("mouseup",this.activeListeners.handleUp),this.mouseCaptor.on("mouseleave",this.activeListeners.handleLeave),this.mouseCaptor.on("mouseenter",this.activeListeners.handleEnter),this.touchCaptor.on("touchdown",this.activeListeners.handleDown),this.touchCaptor.on("touchdown",this.activeListeners.handleMove),this.touchCaptor.on("touchup",this.activeListeners.handleUp),this.touchCaptor.on("touchmove",this.activeListeners.handleMove),this.touchCaptor.on("tap",this.activeListeners.handleClick),this.touchCaptor.on("doubletap",this.activeListeners.handleDoubleClick),this.touchCaptor.on("touchmove",this.activeListeners.handleMoveBody),this}},{key:"bindGraphHandlers",value:function(){var n=this,a=this.graph,o=new Set(["x","y","zIndex","type"]);return this.activeListeners.eachNodeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachNode(function(m){return n.updateNode(m)});var f=!h||h.some(function(m){return o.has(m)});n.refresh({partialGraph:{nodes:a.nodes()},skipIndexation:!f,schedule:!0})},this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachEdge(function(m){return n.updateEdge(m)});var f=h&&["zIndex","type"].some(function(m){return h==null?void 0:h.includes(m)});n.refresh({partialGraph:{edges:a.edges()},skipIndexation:!f,schedule:!0})},this.activeListeners.addNodeGraphUpdate=function(u){var c=u.key;n.addNode(c),n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.updateNodeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropNodeGraphUpdate=function(u){var c=u.key;n.removeNode(c),n.refresh({schedule:!0})},this.activeListeners.addEdgeGraphUpdate=function(u){var c=u.key;n.addEdge(c),n.refresh({partialGraph:{edges:[c]},schedule:!0})},this.activeListeners.updateEdgeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{edges:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropEdgeGraphUpdate=function(u){var c=u.key;n.removeEdge(c),n.refresh({schedule:!0})},this.activeListeners.clearEdgesGraphUpdate=function(){n.clearEdgeState(),n.clearEdgeIndices(),n.refresh({schedule:!0})},this.activeListeners.clearGraphUpdate=function(){n.clearEdgeState(),n.clearNodeState(),n.clearEdgeIndices(),n.clearNodeIndices(),n.refresh({schedule:!0})},a.on("nodeAdded",this.activeListeners.addNodeGraphUpdate),a.on("nodeDropped",this.activeListeners.dropNodeGraphUpdate),a.on("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),a.on("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),a.on("edgeAdded",this.activeListeners.addEdgeGraphUpdate),a.on("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),a.on("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),a.on("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),a.on("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),a.on("cleared",this.activeListeners.clearGraphUpdate),this}},{key:"unbindGraphHandlers",value:function(){var n=this.graph;n.removeListener("nodeAdded",this.activeListeners.addNodeGraphUpdate),n.removeListener("nodeDropped",this.activeListeners.dropNodeGraphUpdate),n.removeListener("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),n.removeListener("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),n.removeListener("edgeAdded",this.activeListeners.addEdgeGraphUpdate),n.removeListener("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),n.removeListener("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),n.removeListener("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),n.removeListener("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),n.removeListener("cleared",this.activeListeners.clearGraphUpdate)}},{key:"getEdgeAtPoint",value:function(n,a){var o=dv(this.webGLContexts.edges,this.frameBuffers.edges,n,a,this.pixelRatio,this.pickingDownSizingRatio),u=cv.apply(void 0,Av(o)),c=this.itemIDsIndex[u];return c&&c.type==="edge"?c.id:null}},{key:"process",value:function(){var n=this;this.emit("beforeProcess");var a=this.graph,o=this.settings,u=this.getDimensions();if(this.nodeExtent=tC(this.graph),!this.settings.autoRescale){var c=u.width,h=u.height,f=this.nodeExtent,m=f.x,g=f.y;this.nodeExtent={x:[(m[0]+m[1])/2-c/2,(m[0]+m[1])/2+c/2],y:[(g[0]+g[1])/2-h/2,(g[0]+g[1])/2+h/2]}}this.normalizationFunction=wv(this.customBBox||this.nodeExtent);var v=new bv,x=go(v.getState(),u,this.getGraphDimensions(),this.getStagePadding());this.labelGrid.resizeAndClear(u,o.labelGridCellSize);for(var M={},w={},S={},y={},I=1,L=a.nodes(),T=0,P=L.length;T<P;T++){var N=L[T],D=this.nodeDataCache[N],O=a.getNodeAttributes(N);D.x=O.x,D.y=O.y,this.normalizationFunction.applyTo(D),typeof D.label=="string"&&!D.hidden&&this.labelGrid.add(N,D.size,this.framedGraphToViewport(D,{matrix:x})),M[D.type]=(M[D.type]||0)+1}this.labelGrid.organize();for(var C in this.nodePrograms){if(!ur.call(this.nodePrograms,C))throw new Error('Sigma: could not find a suitable program for node type "'.concat(C,'"!'));this.nodePrograms[C].reallocate(M[C]||0),M[C]=0}this.settings.zIndex&&this.nodeZExtent[0]!==this.nodeZExtent[1]&&(L=Mv(this.nodeZExtent,function(ge){return n.nodeDataCache[ge].zIndex},L));for(var E=0,k=L.length;E<k;E++){var q=L[E];w[q]=I,y[w[q]]={type:"node",id:q},I++;var Q=this.nodeDataCache[q];this.addNodeToProgram(q,w[q],M[Q.type]++)}for(var ne={},ae=a.edges(),he=0,me=ae.length;he<me;he++){var H=ae[he],pe=this.edgeDataCache[H];ne[pe.type]=(ne[pe.type]||0)+1}this.settings.zIndex&&this.edgeZExtent[0]!==this.edgeZExtent[1]&&(ae=Mv(this.edgeZExtent,function(ge){return n.edgeDataCache[ge].zIndex},ae));for(var se in this.edgePrograms){if(!ur.call(this.edgePrograms,se))throw new Error('Sigma: could not find a suitable program for edge type "'.concat(se,'"!'));this.edgePrograms[se].reallocate(ne[se]||0),ne[se]=0}for(var B=0,re=ae.length;B<re;B++){var _e=ae[B];S[_e]=I,y[S[_e]]={type:"edge",id:_e},I++;var Y=this.edgeDataCache[_e];this.addEdgeToProgram(_e,S[_e],ne[Y.type]++)}return this.itemIDsIndex=y,this.nodeIndices=w,this.edgeIndices=S,this.emit("afterProcess"),this}},{key:"handleSettingsUpdate",value:function(n){var a=this,o=this.settings;if(this.camera.minRatio=o.minCameraRatio,this.camera.maxRatio=o.maxCameraRatio,this.camera.enabledZooming=o.enableCameraZooming,this.camera.enabledPanning=o.enableCameraPanning,this.camera.enabledRotation=o.enableCameraRotation,o.cameraPanBoundaries?this.camera.clean=function(m){return a.cleanCameraState(m,o.cameraPanBoundaries&&sf(o.cameraPanBoundaries)==="object"?o.cameraPanBoundaries:{})}:this.camera.clean=null,this.camera.setState(this.camera.validateState(this.camera.getState())),n){if(n.edgeProgramClasses!==o.edgeProgramClasses){for(var u in o.edgeProgramClasses)o.edgeProgramClasses[u]!==n.edgeProgramClasses[u]&&this.registerEdgeProgram(u,o.edgeProgramClasses[u]);for(var c in n.edgeProgramClasses)o.edgeProgramClasses[c]||this.unregisterEdgeProgram(c)}if(n.nodeProgramClasses!==o.nodeProgramClasses||n.nodeHoverProgramClasses!==o.nodeHoverProgramClasses){for(var h in o.nodeProgramClasses)(o.nodeProgramClasses[h]!==n.nodeProgramClasses[h]||o.nodeHoverProgramClasses[h]!==n.nodeHoverProgramClasses[h])&&this.registerNodeProgram(h,o.nodeProgramClasses[h],o.nodeHoverProgramClasses[h]);for(var f in n.nodeProgramClasses)o.nodeProgramClasses[f]||this.unregisterNodeProgram(f)}}return this.mouseCaptor.setSettings(this.settings),this.touchCaptor.setSettings(this.settings),this}},{key:"cleanCameraState",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.tolerance,u=o===void 0?0:o,c=a.boundaries,h=et({},n),f=c||this.nodeExtent,m=Sa(f.x,2),g=m[0],v=m[1],x=Sa(f.y,2),M=x[0],w=x[1],S=[this.graphToViewport({x:g,y:M},{cameraState:n}),this.graphToViewport({x:v,y:M},{cameraState:n}),this.graphToViewport({x:g,y:w},{cameraState:n}),this.graphToViewport({x:v,y:w},{cameraState:n})],y=1/0,I=-1/0,L=1/0,T=-1/0;S.forEach(function(ne){var ae=ne.x,he=ne.y;y=Math.min(y,ae),I=Math.max(I,ae),L=Math.min(L,he),T=Math.max(T,he)});var P=I-y,N=T-L,D=this.getDimensions(),O=D.width,C=D.height,E=0,k=0;if(P>=O?I<O-u?E=I-(O-u):y>u&&(E=y-u):I>O+u?E=I-(O+u):y<-u&&(E=y+u),N>=C?T<C-u?k=T-(C-u):L>u&&(k=L-u):T>C+u?k=T-(C+u):L<-u&&(k=L+u),E||k){var q=this.viewportToFramedGraph({x:0,y:0},{cameraState:n}),Q=this.viewportToFramedGraph({x:E,y:k},{cameraState:n});E=Q.x-q.x,k=Q.y-q.y,h.x+=E,h.y+=k}return h}},{key:"renderLabels",value:function(){if(!this.settings.renderLabels)return this;var n=this.camera.getState(),a=this.labelGrid.getLabelsToDisplay(n.ratio,this.settings.labelDensity);Tv(a,this.nodesWithForcedLabels),this.displayedNodeLabels=new Set;for(var o=this.canvasContexts.labels,u=0,c=a.length;u<c;u++){var h=a[u],f=this.nodeDataCache[h];if(!this.displayedNodeLabels.has(h)&&!f.hidden){var m=this.framedGraphToViewport(f),g=m.x,v=m.y,x=this.scaleSize(f.size);if(!(!f.forceLabel&&x<this.settings.labelRenderedSizeThreshold)&&!(g<-Pv||g>this.width+Pv||v<-Lv||v>this.height+Lv)){this.displayedNodeLabels.add(h);var M=this.settings.defaultDrawNodeLabel,w=this.nodePrograms[f.type],S=(w==null?void 0:w.drawLabel)||M;S(o,et(et({key:h},f),{},{size:x,x:g,y:v}),this.settings)}}}return this}},{key:"renderEdgeLabels",value:function(){if(!this.settings.renderEdgeLabels)return this;var n=this.canvasContexts.edgeLabels;n.clearRect(0,0,this.width,this.height);var a=yC({graph:this.graph,hoveredNode:this.hoveredNode,displayedNodeLabels:this.displayedNodeLabels,highlightedNodes:this.highlightedNodes});Tv(a,this.edgesWithForcedLabels);for(var o=new Set,u=0,c=a.length;u<c;u++){var h=a[u],f=this.graph.extremities(h),m=this.nodeDataCache[f[0]],g=this.nodeDataCache[f[1]],v=this.edgeDataCache[h];if(!o.has(h)&&!(v.hidden||m.hidden||g.hidden)){var x=this.settings.defaultDrawEdgeLabel,M=this.edgePrograms[v.type],w=(M==null?void 0:M.drawLabel)||x;w(n,et(et({key:h},v),{},{size:this.scaleSize(v.size)}),et(et(et({key:f[0]},m),this.framedGraphToViewport(m)),{},{size:this.scaleSize(m.size)}),et(et(et({key:f[1]},g),this.framedGraphToViewport(g)),{},{size:this.scaleSize(g.size)}),this.settings),o.add(h)}}return this.displayedEdgeLabels=o,this}},{key:"renderHighlightedNodes",value:function(){var n=this,a=this.canvasContexts.hovers;a.clearRect(0,0,this.width,this.height);var o=function(x){var M=n.nodeDataCache[x],w=n.framedGraphToViewport(M),S=w.x,y=w.y,I=n.scaleSize(M.size),L=n.settings.defaultDrawNodeHover,T=n.nodePrograms[M.type],P=(T==null?void 0:T.drawHover)||L;P(a,et(et({key:x},M),{},{size:I,x:S,y}),n.settings)},u=[];this.hoveredNode&&!this.nodeDataCache[this.hoveredNode].hidden&&u.push(this.hoveredNode),this.highlightedNodes.forEach(function(v){v!==n.hoveredNode&&u.push(v)}),u.forEach(function(v){return o(v)});var c={};u.forEach(function(v){var x=n.nodeDataCache[v].type;c[x]=(c[x]||0)+1});for(var h in this.nodeHoverPrograms)this.nodeHoverPrograms[h].reallocate(c[h]||0),c[h]=0;u.forEach(function(v){var x=n.nodeDataCache[v];n.nodeHoverPrograms[x.type].process(0,c[x.type]++,x)}),this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);var f=this.getRenderParams();for(var m in this.nodeHoverPrograms){var g=this.nodeHoverPrograms[m];g.render(f)}}},{key:"scheduleHighlightedNodesRender",value:function(){var n=this;this.renderHighlightedNodesFrame||this.renderFrame||(this.renderHighlightedNodesFrame=requestAnimationFrame(function(){n.renderHighlightedNodesFrame=null,n.renderHighlightedNodes(),n.renderEdgeLabels()}))}},{key:"render",value:function(){var n=this;this.emit("beforeRender");var a=function(){return n.emit("afterRender"),n};if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),this.needToProcess&&this.process(),this.needToProcess=!1,this.clear(),this.pickingLayers.forEach(function(S){return n.resetWebGLTexture(S)}),!this.graph.order)return a();var o=this.mouseCaptor,u=this.camera.isAnimated()||o.isMoving||o.draggedEvents||o.currentWheelDirection,c=this.camera.getState(),h=this.getDimensions(),f=this.getGraphDimensions(),m=this.getStagePadding();this.matrix=go(c,h,f,m),this.invMatrix=go(c,h,f,m,!0),this.correctionRatio=eC(this.matrix,c,h),this.graphToViewportRatio=this.getGraphToViewportRatio();var g=this.getRenderParams();for(var v in this.nodePrograms){var x=this.nodePrograms[v];x.render(g)}if(!this.settings.hideEdgesOnMove||!u)for(var M in this.edgePrograms){var w=this.edgePrograms[M];w.render(g)}return this.settings.hideLabelsOnMove&&u||(this.renderLabels(),this.renderEdgeLabels(),this.renderHighlightedNodes()),a()}},{key:"addNode",value:function(n){var a=Object.assign({},this.graph.getNodeAttributes(n));this.settings.nodeReducer&&(a=this.settings.nodeReducer(n,a));var o=xC(this.settings,n,a);this.nodeDataCache[n]=o,this.nodesWithForcedLabels.delete(n),o.forceLabel&&!o.hidden&&this.nodesWithForcedLabels.add(n),this.highlightedNodes.delete(n),o.highlighted&&!o.hidden&&this.highlightedNodes.add(n),this.settings.zIndex&&(o.zIndex<this.nodeZExtent[0]&&(this.nodeZExtent[0]=o.zIndex),o.zIndex>this.nodeZExtent[1]&&(this.nodeZExtent[1]=o.zIndex))}},{key:"updateNode",value:function(n){this.addNode(n);var a=this.nodeDataCache[n];this.normalizationFunction.applyTo(a)}},{key:"removeNode",value:function(n){delete this.nodeDataCache[n],delete this.nodeProgramIndex[n],this.highlightedNodes.delete(n),this.hoveredNode===n&&(this.hoveredNode=null),this.nodesWithForcedLabels.delete(n)}},{key:"addEdge",value:function(n){var a=Object.assign({},this.graph.getEdgeAttributes(n));this.settings.edgeReducer&&(a=this.settings.edgeReducer(n,a));var o=SC(this.settings,n,a);this.edgeDataCache[n]=o,this.edgesWithForcedLabels.delete(n),o.forceLabel&&!o.hidden&&this.edgesWithForcedLabels.add(n),this.settings.zIndex&&(o.zIndex<this.edgeZExtent[0]&&(this.edgeZExtent[0]=o.zIndex),o.zIndex>this.edgeZExtent[1]&&(this.edgeZExtent[1]=o.zIndex))}},{key:"updateEdge",value:function(n){this.addEdge(n)}},{key:"removeEdge",value:function(n){delete this.edgeDataCache[n],delete this.edgeProgramIndex[n],this.hoveredEdge===n&&(this.hoveredEdge=null),this.edgesWithForcedLabels.delete(n)}},{key:"clearNodeIndices",value:function(){this.labelGrid=new Rv,this.nodeExtent={x:[0,1],y:[0,1]},this.nodeDataCache={},this.edgeProgramIndex={},this.nodesWithForcedLabels=new Set,this.nodeZExtent=[1/0,-1/0],this.highlightedNodes=new Set}},{key:"clearEdgeIndices",value:function(){this.edgeDataCache={},this.edgeProgramIndex={},this.edgesWithForcedLabels=new Set,this.edgeZExtent=[1/0,-1/0]}},{key:"clearIndices",value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:"clearNodeState",value:function(){this.displayedNodeLabels=new Set,this.highlightedNodes=new Set,this.hoveredNode=null}},{key:"clearEdgeState",value:function(){this.displayedEdgeLabels=new Set,this.highlightedNodes=new Set,this.hoveredEdge=null}},{key:"clearState",value:function(){this.clearEdgeState(),this.clearNodeState()}},{key:"addNodeToProgram",value:function(n,a,o){var u=this.nodeDataCache[n],c=this.nodePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for node type "'.concat(u.type,'"!'));c.process(a,o,u),this.nodeProgramIndex[n]=o}},{key:"addEdgeToProgram",value:function(n,a,o){var u=this.edgeDataCache[n],c=this.edgePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for edge type "'.concat(u.type,'"!'));var h=this.graph.extremities(n),f=this.nodeDataCache[h[0]],m=this.nodeDataCache[h[1]];c.process(a,o,f,m,u),this.edgeProgramIndex[n]=o}},{key:"getRenderParams",value:function(){return{matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.pickingDownSizingRatio,minEdgeThickness:this.settings.minEdgeThickness,antiAliasingFeather:this.settings.antiAliasingFeather}}},{key:"getStagePadding",value:function(){var n=this.settings,a=n.stagePadding,o=n.autoRescale;return o&&a||0}},{key:"createLayer",value:function(n,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.elements[n])throw new Error('Sigma: a layer named "'.concat(n,'" already exists'));var u=iC(a,{position:"absolute"},{class:"sigma-".concat(n)});return o.style&&Object.assign(u.style,o.style),this.elements[n]=u,"beforeLayer"in o&&o.beforeLayer?this.elements[o.beforeLayer].before(u):"afterLayer"in o&&o.afterLayer?this.elements[o.afterLayer].after(u):this.container.appendChild(u),u}},{key:"createCanvas",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(n,"canvas",a)}},{key:"createCanvasContext",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.createCanvas(n,a),u={preserveDrawingBuffer:!1,antialias:!1};return this.canvasContexts[n]=o.getContext("2d",u),this}},{key:"createWebGLContext",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=(a==null?void 0:a.canvas)||this.createCanvas(n,a);a.hidden&&o.remove();var u=et({preserveDrawingBuffer:!1,antialias:!1},a),c;c=o.getContext("webgl2",u),c||(c=o.getContext("webgl",u)),c||(c=o.getContext("experimental-webgl",u));var h=c;if(this.webGLContexts[n]=h,h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA),a.picking){this.pickingLayers.add(n);var f=h.createFramebuffer();if(!f)throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(n));this.frameBuffers[n]=f}return h}},{key:"killLayer",value:function(n){var a=this.elements[n];if(!a)throw new Error("Sigma: cannot kill layer ".concat(n,", which does not exist"));if(this.webGLContexts[n]){var o,u=this.webGLContexts[n];(o=u.getExtension("WEBGL_lose_context"))===null||o===void 0||o.loseContext(),delete this.webGLContexts[n]}else this.canvasContexts[n]&&delete this.canvasContexts[n];return a.remove(),delete this.elements[n],this}},{key:"getCamera",value:function(){return this.camera}},{key:"setCamera",value:function(n){this.unbindCameraHandlers(),this.camera=n,this.bindCameraHandlers()}},{key:"getContainer",value:function(){return this.container}},{key:"getGraph",value:function(){return this.graph}},{key:"setGraph",value:function(n){n!==this.graph&&(this.hoveredNode&&!n.hasNode(this.hoveredNode)&&(this.hoveredNode=null),this.hoveredEdge&&!n.hasEdge(this.hoveredEdge)&&(this.hoveredEdge=null),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.graph=n,this.bindGraphHandlers(),this.refresh())}},{key:"getMouseCaptor",value:function(){return this.mouseCaptor}},{key:"getTouchCaptor",value:function(){return this.touchCaptor}},{key:"getDimensions",value:function(){return{width:this.width,height:this.height}}},{key:"getGraphDimensions",value:function(){var n=this.customBBox||this.nodeExtent;return{width:n.x[1]-n.x[0]||1,height:n.y[1]-n.y[0]||1}}},{key:"getNodeDisplayData",value:function(n){var a=this.nodeDataCache[n];return a?Object.assign({},a):void 0}},{key:"getEdgeDisplayData",value:function(n){var a=this.edgeDataCache[n];return a?Object.assign({},a):void 0}},{key:"getNodeDisplayedLabels",value:function(){return new Set(this.displayedNodeLabels)}},{key:"getEdgeDisplayedLabels",value:function(){return new Set(this.displayedEdgeLabels)}},{key:"getSettings",value:function(){return et({},this.settings)}},{key:"getSetting",value:function(n){return this.settings[n]}},{key:"setSetting",value:function(n,a){var o=et({},this.settings);return this.settings[n]=a,lh(this.settings),this.handleSettingsUpdate(o),this.scheduleRefresh(),this}},{key:"updateSetting",value:function(n,a){return this.setSetting(n,a(this.settings[n])),this}},{key:"setSettings",value:function(n){var a=et({},this.settings);return this.settings=et(et({},this.settings),n),lh(this.settings),this.handleSettingsUpdate(a),this.scheduleRefresh(),this}},{key:"resize",value:function(n){var a=this.width,o=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.pixelRatio=Ev(),this.width===0)if(this.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!n&&a===this.width&&o===this.height)return this;for(var u in this.elements){var c=this.elements[u];c.style.width=this.width+"px",c.style.height=this.height+"px"}for(var h in this.canvasContexts)this.elements[h].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[h].setAttribute("height",this.height*this.pixelRatio+"px"),this.pixelRatio!==1&&this.canvasContexts[h].scale(this.pixelRatio,this.pixelRatio);for(var f in this.webGLContexts){this.elements[f].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[f].setAttribute("height",this.height*this.pixelRatio+"px");var m=this.webGLContexts[f];if(m.viewport(0,0,this.width*this.pixelRatio,this.height*this.pixelRatio),this.pickingLayers.has(f)){var g=this.textures[f];g&&m.deleteTexture(g)}}return this.emit("resize"),this}},{key:"clear",value:function(){return this.emit("beforeClear"),this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.canvasContexts.labels.clearRect(0,0,this.width,this.height),this.canvasContexts.hovers.clearRect(0,0,this.width,this.height),this.canvasContexts.edgeLabels.clearRect(0,0,this.width,this.height),this.emit("afterClear"),this}},{key:"refresh",value:function(n){var a=this,o=(n==null?void 0:n.skipIndexation)!==void 0?n==null?void 0:n.skipIndexation:!1,u=(n==null?void 0:n.schedule)!==void 0?n.schedule:!1,c=!n||!n.partialGraph;if(c)this.clearEdgeIndices(),this.clearNodeIndices(),this.graph.forEachNode(function(T){return a.addNode(T)}),this.graph.forEachEdge(function(T){return a.addEdge(T)});else{for(var h,f,m=((h=n.partialGraph)===null||h===void 0?void 0:h.nodes)||[],g=0,v=(m==null?void 0:m.length)||0;g<v;g++){var x=m[g];if(this.updateNode(x),o){var M=this.nodeProgramIndex[x];if(M===void 0)throw new Error('Sigma: node "'.concat(x,`" can't be repaint`));this.addNodeToProgram(x,this.nodeIndices[x],M)}}for(var w=(n==null||(f=n.partialGraph)===null||f===void 0?void 0:f.edges)||[],S=0,y=w.length;S<y;S++){var I=w[S];if(this.updateEdge(I),o){var L=this.edgeProgramIndex[I];if(L===void 0)throw new Error('Sigma: edge "'.concat(I,`" can't be repaint`));this.addEdgeToProgram(I,this.edgeIndices[I],L)}}}return(c||!o)&&(this.needToProcess=!0),u?this.scheduleRender():this.render(),this}},{key:"scheduleRender",value:function(){var n=this;return this.renderFrame||(this.renderFrame=requestAnimationFrame(function(){n.render()})),this}},{key:"scheduleRefresh",value:function(n){return this.refresh(et(et({},n),{},{schedule:!0}))}},{key:"getViewportZoomedState",value:function(n,a){var o=this.camera.getState(),u=o.ratio,c=o.angle,h=o.x,f=o.y,m=this.settings,g=m.minCameraRatio,v=m.maxCameraRatio;typeof v=="number"&&(a=Math.min(a,v)),typeof g=="number"&&(a=Math.max(a,g));var x=a/u,M={x:this.width/2,y:this.height/2},w=this.viewportToFramedGraph(n),S=this.viewportToFramedGraph(M);return{angle:c,x:(w.x-S.x)*(1-x)+h,y:(w.y-S.y)*(1-x)+f,ratio:a}}},{key:"viewRectangle",value:function(){var n=this.viewportToFramedGraph({x:0,y:0}),a=this.viewportToFramedGraph({x:this.width,y:0}),o=this.viewportToFramedGraph({x:0,y:this.height});return{x1:n.x,y1:n.y,x2:a.x,y2:a.y,height:a.y-o.y}}},{key:"framedGraphToViewport",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=!!a.cameraState||!!a.viewportDimensions||!!a.graphDimensions,u=a.matrix?a.matrix:o?go(a.cameraState||this.camera.getState(),a.viewportDimensions||this.getDimensions(),a.graphDimensions||this.getGraphDimensions(),a.padding||this.getStagePadding()):this.matrix,c=rf(u,n);return{x:(1+c.x)*this.width/2,y:(1-c.y)*this.height/2}}},{key:"viewportToFramedGraph",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=!!a.cameraState||!!a.viewportDimensions||!a.graphDimensions,u=a.matrix?a.matrix:o?go(a.cameraState||this.camera.getState(),a.viewportDimensions||this.getDimensions(),a.graphDimensions||this.getGraphDimensions(),a.padding||this.getStagePadding(),!0):this.invMatrix,c=rf(u,{x:n.x/this.width*2-1,y:1-n.y/this.height*2});return isNaN(c.x)&&(c.x=0),isNaN(c.y)&&(c.y=0),c}},{key:"viewportToGraph",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(n,a))}},{key:"graphToViewport",value:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(n),a)}},{key:"getGraphToViewportRatio",value:function(){var n={x:0,y:0},a={x:1,y:1},o=Math.sqrt(Math.pow(n.x-a.x,2)+Math.pow(n.y-a.y,2)),u=this.graphToViewport(n),c=this.graphToViewport(a),h=Math.sqrt(Math.pow(u.x-c.x,2)+Math.pow(u.y-c.y,2));return h/o}},{key:"getBBox",value:function(){return this.nodeExtent}},{key:"getCustomBBox",value:function(){return this.customBBox}},{key:"setCustomBBox",value:function(n){return this.customBBox=n,this.scheduleRender(),this}},{key:"kill",value:function(){this.emit("kill"),this.removeAllListeners(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.nodeDataCache={},this.edgeDataCache={},this.highlightedNodes.clear(),this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.renderHighlightedNodesFrame&&(cancelAnimationFrame(this.renderHighlightedNodesFrame),this.renderHighlightedNodesFrame=null);for(var n=this.container;n.firstChild;)n.removeChild(n.firstChild);for(var a in this.nodePrograms)this.nodePrograms[a].kill();for(var o in this.nodeHoverPrograms)this.nodeHoverPrograms[o].kill();for(var u in this.edgePrograms)this.edgePrograms[u].kill();this.nodePrograms={},this.nodeHoverPrograms={},this.edgePrograms={};for(var c in this.elements)this.killLayer(c);this.canvasContexts={},this.webGLContexts={},this.elements={}}},{key:"scaleSize",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return n/this.settings.zoomToSizeRatioFunction(a)*(this.getSetting("itemSizesReference")==="positions"?a*this.graphToViewportRatio:1)}},{key:"getCanvases",value:function(){var n={};for(var a in this.elements)this.elements[a]instanceof HTMLCanvasElement&&(n[a]=this.elements[a]);return n}}])})(bf),MC=EC;const Dv=["#e8aa55","#c96f32","#a4d06f","#5da271","#4a7ea8","#b7678f","#d7c35f"];function wC(r){let e=0;for(const t of r)e=e*33+t.charCodeAt(0)>>>0;return Dv[e%Dv.length]}function TC({payload:r,mode:e,currentTurnNodeIds:t,selectedNodeId:n,selectedAssembly:a,onSelectNode:o}){const u=tt.useRef(null),c=tt.useRef(null),[h,f]=tt.useState(null),m=tt.useMemo(()=>{var v;const g=new Map;for(const x of r.cluster_summaries??[]){const M=(v=x.top_meme_ids)==null?void 0:v[0];M&&g.set(M,x.display_label)}return g},[r.cluster_summaries]);return tt.useEffect(()=>{var v,x;if(!u.current)return;f(null);let g=null;try{const M=new Ot,w=new Set(t),S=new Set((a==null?void 0:a.member_meme_ids)??[]),y=new Set((a==null?void 0:a.supporting_edge_ids)??[]),I=e==="Semantic Map"||e==="Assemblies"||e==="Active Set"||e==="Compare",L=I?r.semantic_nodes:r.runtime_nodes,T=I?r.semantic_edges:r.runtime_edges;for(const P of L){const N=((v=P.render_coords)==null?void 0:v.force)??((x=P.derived_coords)==null?void 0:x.spectral)??{x:0,y:0},D=w.has(P.id)||n===P.id||S.has(P.id),O=m.has(P.id),C=Number(P.degree??0)>=3;let E="";e==="Semantic Map"&&O&&(E=m.get(P.id)??""),!E&&(D||C)&&(E=String(P.label??P.id)),M.addNode(P.id,{x:Number(N.x??0),y:Number(N.y??0),size:D?10:6,label:E,color:S.has(P.id)?"#fff0a8":w.has(P.id)?"#ffcb73":wC(String(P.cluster_signature??P.kind??P.id))})}for(const P of T)!M.hasNode(P.source)||!M.hasNode(P.target)||M.addEdge(P.source,P.target,{size:y.has(P.id)?2.5:1.1,color:y.has(P.id)?"#fff0a8":"rgba(233, 177, 90, 0.38)",label:a&&y.has(P.id)?String(P.type??""):""});g=new MC(M,u.current,{renderEdgeLabels:!!a,labelRenderedSizeThreshold:7,labelDensity:.08,allowInvalidContainer:!0}),c.current=g,g.on("clickNode",({node:P,event:N})=>{var O;const D=!!((O=N.original)!=null&&O.shiftKey);o(String(P),D)}),g.on("clickStage",()=>o("",!1)),g.getCamera().animatedReset({duration:250})}catch(M){u.current.innerHTML="",f(M instanceof Error?M.message:"Graph renderer unavailable.")}return()=>{g==null||g.kill(),c.current=null}},[r,e,t,n,a,o,m]),h?U.jsxs("div",{className:"empty-state","data-testid":"graph-canvas-fallback",role:"note",children:[U.jsx("h2",{children:"Graph renderer unavailable"}),U.jsx("p",{children:h}),U.jsx("p",{children:"Use Graph Entities, Relations, and inspector cards to keep read paths truthful."})]},"graph-fallback"):U.jsx("div",{"aria-label":"Graph canvas",className:"graph-panel","data-testid":"graph-canvas",ref:u,role:"region"},"graph-canvas")}function bC({scene:r}){const e=tt.useRef(null),[t,n]=tt.useState(null);return tt.useEffect(()=>{var h,f,m,g,v,x;if(!e.current)return;const a=e.current;n(null);let o=null,u=null,c=0;try{const M=new n_;M.background=new Ct("#120d08");const w=new oi(45,a.clientWidth/Math.max(a.clientHeight,1),.1,1e3);w.position.set(0,6,16),o=new f_({antialias:!0}),o.setSize(a.clientWidth,Math.max(a.clientHeight,280)),a.innerHTML="",a.appendChild(o.domElement);const S=new Map(((r==null?void 0:r.nodes)??[]).map(O=>[String(O.id),O])),y=new Float32Array(((r==null?void 0:r.nodes)??[]).length*3),I=new Float32Array(((r==null?void 0:r.nodes)??[]).length*3),L=new Map;((r==null?void 0:r.nodes)??[]).forEach((O,C)=>{var k,q,Q;const E=L.get(O.color)??new Ct(O.color??"#efb15f");L.set(O.color??"#efb15f",E),y[C*3]=Number(((k=O.position)==null?void 0:k.x)??0),y[C*3+1]=Number(((q=O.position)==null?void 0:q.y)??0),y[C*3+2]=Number(((Q=O.position)==null?void 0:Q.z)??0),I[C*3]=E.r,I[C*3+1]=E.g,I[C*3+2]=E.b});const T=new li;T.setAttribute("position",new Wn(y,3)),T.setAttribute("color",new Wn(I,3));const P=new s_(T,new yf({size:.28,vertexColors:!0}));M.add(P);for(const O of(r==null?void 0:r.edges)??[]){const C=S.get(String(O.source)),E=S.get(String(O.target));if(!C||!E)continue;const k=new li().setFromPoints([new ce(Number(((h=C.position)==null?void 0:h.x)??0),Number(((f=C.position)==null?void 0:f.y)??0),Number(((m=C.position)==null?void 0:m.z)??0)),new ce(Number(((g=E.position)==null?void 0:g.x)??0),Number(((v=E.position)==null?void 0:v.y)??0),Number(((x=E.position)==null?void 0:x.z)??0))]),q=new _f({color:O.kind==="sequence"?16765322:12155706,transparent:!0,opacity:.6});M.add(new r_(k,q))}M.add(new o_(16777215,1));let N=0;const D=()=>{o&&(N+=1,M.rotation.y=Math.sin(N/240)*.2,o.render(M,w),c=window.requestAnimationFrame(D))};D(),u=()=>{if(!o)return;const O=a.clientWidth||640,C=Math.max(a.clientHeight,280);w.aspect=O/C,w.updateProjectionMatrix(),o.setSize(O,C)},window.addEventListener("resize",u)}catch(M){a.innerHTML="",n(M instanceof Error?M.message:"Tanakh scene renderer unavailable.")}return()=>{u&&window.removeEventListener("resize",u),window.cancelAnimationFrame(c),o==null||o.dispose(),a.innerHTML=""}},[r]),t?U.jsxs("div",{className:"empty-state","data-testid":"tanakh-scene-fallback",role:"note",children:[U.jsx("h2",{children:"Merkavah scene unavailable"}),U.jsx("p",{children:t}),U.jsx("p",{children:"The reader and JSON artifact links remain authoritative."})]}):U.jsx("div",{"aria-label":"Tanakh merkavah scene",className:"tanakh-scene-panel","data-testid":"tanakh-scene",ref:e,role:"region"})}function vs(r){return r?r.slice(0,12):"—"}function AC({payload:r,liveEnabled:e,canRun:t,running:n,onRun:a}){var ae,he,me,H,pe,se,B,re,_e,Y,ge,le,Me,be,ke,We,Rt,Pt,ft,V,nn,gt,pt,Je,Tt,Xe,F;const o=(r==null?void 0:r.bundle)??{},u=o.scene??{},c=o.passage??{},h=o.analyses??{},f=o.validation??{},[m,g]=tt.useState((r==null?void 0:r.current_ref)??"Ezek 1"),[v,x]=tt.useState(((ae=o.params)==null?void 0:ae.preprocess)??"strip_pointing"),[M,w]=tt.useState(((he=o.params)==null?void 0:he.gematria_scheme)??"mispar_hechrechi"),[S,y]=tt.useState(((me=o.params)==null?void 0:me.notarikon_mode)??"first_letter"),[I,L]=tt.useState(((pe=(H=o.params)==null?void 0:H.scene)==null?void 0:pe.theme)??"amber"),[T,P]=tt.useState(String(((B=(se=o.params)==null?void 0:se.scene)==null?void 0:B.seed)??11)),[N,D]=tt.useState(String(((_e=(re=o.params)==null?void 0:re.scene)==null?void 0:_e.letter_angle)??.14)),[O,C]=tt.useState(String(((ge=(Y=o.params)==null?void 0:Y.scene)==null?void 0:ge.word_radius)??.22)),[E,k]=tt.useState(String(((Me=(le=o.params)==null?void 0:le.scene)==null?void 0:Me.verse_height)??1.1)),[q,Q]=tt.useState(String(((ke=(be=o.params)==null?void 0:be.scene)==null?void 0:ke.oscillation_amplitude)??.18));tt.useEffect(()=>{var A,te,Se,we,ye,G,fe,ve,Ee,X,Ue,Ye,Ze,Oe,st;g((r==null?void 0:r.current_ref)??"Ezek 1"),x(((A=o.params)==null?void 0:A.preprocess)??"strip_pointing"),w(((te=o.params)==null?void 0:te.gematria_scheme)??"mispar_hechrechi"),y(((Se=o.params)==null?void 0:Se.notarikon_mode)??"first_letter"),L(((ye=(we=o.params)==null?void 0:we.scene)==null?void 0:ye.theme)??"amber"),P(String(((fe=(G=o.params)==null?void 0:G.scene)==null?void 0:fe.seed)??11)),D(String(((Ee=(ve=o.params)==null?void 0:ve.scene)==null?void 0:Ee.letter_angle)??.14)),C(String(((Ue=(X=o.params)==null?void 0:X.scene)==null?void 0:Ue.word_radius)??.22)),k(String(((Ze=(Ye=o.params)==null?void 0:Ye.scene)==null?void 0:Ze.verse_height)??1.1)),Q(String(((st=(Oe=o.params)==null?void 0:Oe.scene)==null?void 0:st.oscillation_amplitude)??.18))},[o.params,r==null?void 0:r.current_ref]);async function ne(A){A.preventDefault(),t&&await a({ref:m,params:{preprocess:v,gematria_scheme:M,notarikon_mode:S,temurah_mapping:"atbash",scene:{theme:I,seed:Number(T),letter_angle:Number(N),word_radius:Number(O),verse_height:Number(E),oscillation_amplitude:Number(q)}}})}return U.jsxs("div",{className:"tanakh-surface",children:[U.jsxs("form",{className:"tanakh-controls",onSubmit:ne,children:[U.jsxs("label",{children:[U.jsx("span",{children:"Reference"}),U.jsx("input",{onChange:A=>g(A.target.value),value:m})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Preprocess"}),U.jsxs("select",{onChange:A=>x(A.target.value),value:v,children:[U.jsx("option",{value:"strip_pointing",children:"Strip pointing"}),U.jsx("option",{value:"keep_vowels",children:"Keep vowels"}),U.jsx("option",{value:"keep_cantillation",children:"Keep cantillation"})]})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Gematria"}),U.jsxs("select",{onChange:A=>w(A.target.value),value:M,children:[U.jsx("option",{value:"mispar_hechrechi",children:"Mispar hechrechi"}),U.jsx("option",{value:"mispar_gadol",children:"Mispar gadol"})]})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Notarikon"}),U.jsxs("select",{onChange:A=>y(A.target.value),value:S,children:[U.jsx("option",{value:"first_letter",children:"First letter"}),U.jsx("option",{value:"last_letter",children:"Last letter"})]})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Theme"}),U.jsxs("select",{onChange:A=>L(A.target.value),value:I,children:[U.jsx("option",{value:"amber",children:"Amber"}),U.jsx("option",{value:"brass",children:"Brass"}),U.jsx("option",{value:"sea",children:"Sea"})]})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Seed"}),U.jsx("input",{onChange:A=>P(A.target.value),value:T})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Letter angle"}),U.jsx("input",{onChange:A=>D(A.target.value),value:N})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Word radius"}),U.jsx("input",{onChange:A=>C(A.target.value),value:O})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Verse height"}),U.jsx("input",{onChange:A=>k(A.target.value),value:E})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Oscillation"}),U.jsx("input",{onChange:A=>Q(A.target.value),value:q})]}),U.jsx("button",{className:"toolbar-button is-active",disabled:!t||n,type:"submit",children:n?"Running...":e?"Run Tanakh tool":"Static export"})]}),U.jsxs("div",{className:"toolbar toolbar-badges",children:[U.jsx("span",{className:"badge badge-observed",children:"Canonical text"}),U.jsx("span",{className:"badge badge-derived",children:"Derived scene"}),U.jsxs("span",{className:"badge badge-derived",children:["Dataset ",((We=o.manifest)==null?void 0:We.dataset_id)??"—"]}),U.jsx("span",{className:"badge badge-warning",children:"Layout != evidence"})]}),U.jsxs("div",{className:"tanakh-grid",children:[U.jsxs("section",{className:"tanakh-card tanakh-reader-card",children:[U.jsxs("header",{children:[U.jsx("h2",{children:(r==null?void 0:r.current_ref)??"Tanakh surface"}),U.jsx("p",{children:"Canonical reader stays DOM/CSS. Derived preprocess output is shown alongside it."})]}),U.jsxs("div",{className:"tanakh-provenance-row",children:[U.jsxs("span",{children:["Bundle hash ",vs(r==null?void 0:r.bundle_hash)]}),U.jsxs("span",{children:["Scene hash ",vs(u.scene_hash)]}),U.jsx("span",{children:t?"Live API enabled":"Static export only"})]}),U.jsx("article",{className:"tanakh-reader",dir:"rtl",lang:"he",children:(c.verses??[]).map(A=>{var te;return U.jsxs("div",{className:"tanakh-verse",children:[U.jsx("span",{className:"tanakh-verse-ref",children:A.ref}),U.jsx("div",{className:"tanakh-verse-text",children:A.canonical_text}),U.jsx("div",{className:"tanakh-verse-processed",children:(te=A.processed)==null?void 0:te.text})]},A.ref)})})]}),U.jsxs("section",{className:"tanakh-card tanakh-analysis-card",children:[U.jsxs("header",{children:[U.jsx("h2",{children:"Analyzer outputs"}),U.jsx("p",{children:"Every card is derived and provenance-bearing."})]}),U.jsxs("div",{className:"tanakh-analysis-stack",children:[U.jsxs("div",{className:"tanakh-analysis-item",children:[U.jsx("strong",{children:"Gematria"}),U.jsxs("div",{children:["Total ",((Rt=h.gematria)==null?void 0:Rt.total)??"—"]}),U.jsxs("div",{children:["Scheme ",((Pt=h.gematria)==null?void 0:Pt.scheme)??"—"]}),U.jsxs("div",{children:["Hash ",vs((ft=h.gematria)==null?void 0:ft.output_hash)]})]}),U.jsxs("div",{className:"tanakh-analysis-item",children:[U.jsx("strong",{children:"Notarikon"}),U.jsx("div",{children:((V=h.notarikon)==null?void 0:V.result)??"—"}),U.jsxs("div",{children:["Mode ",((nn=h.notarikon)==null?void 0:nn.mode)??"—"]}),U.jsxs("div",{children:["Hash ",vs((gt=h.notarikon)==null?void 0:gt.output_hash)]})]}),U.jsxs("div",{className:"tanakh-analysis-item",children:[U.jsx("strong",{children:"Temurah"}),U.jsx("div",{className:"analysis-result",children:((pt=h.temurah)==null?void 0:pt.result)??"—"}),U.jsxs("div",{children:["Mapping ",((Je=h.temurah)==null?void 0:Je.mapping)??"—"]}),U.jsxs("div",{children:["Hash ",vs((Tt=h.temurah)==null?void 0:Tt.output_hash)]})]})]})]}),U.jsxs("section",{className:"tanakh-card tanakh-scene-card",children:[U.jsxs("header",{children:[U.jsx("h2",{children:"Merkavah scene"}),U.jsx("p",{children:"Derived visualization only. Node ids map back to citation spans in the JSON artifact."})]}),U.jsx(bC,{scene:u})]}),U.jsxs("section",{className:"tanakh-card tanakh-debug-card",children:[U.jsxs("header",{children:[U.jsx("h2",{children:"Provenance and debug"}),U.jsx("p",{children:"Static files are the audit surface; no UI-only truth."})]}),U.jsxs("dl",{className:"metric-list",children:[U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:"Validation"}),U.jsx("dd",{children:f.comparison_status??"—"})]}),U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:"Validation hash"}),U.jsx("dd",{children:vs(f.report_hash)})]}),U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:"Source hash"}),U.jsx("dd",{children:vs((Xe=o.manifest)==null?void 0:Xe.archive_sha256)})]}),U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:"Build"}),U.jsx("dd",{children:((F=o.manifest)==null?void 0:F.build)??"—"})]})]}),U.jsx("pre",{className:"debug-json",children:JSON.stringify({artifacts:r==null?void 0:r.artifacts,validation:f.cases},null,2)})]})]})]})}const Nv=["overview","graph","basin","geometry","tanakh","measurements"],vu="Semantic Map",_u="hulls",ch="flat",xo=12,CC=["overview","measurements","basin"],Y_=["overview","measurements","basin","graph","geometry","tanakh","transcript","runtimeStatus","runtimeModel"],RC={graph:null,basin:null,overview:null,measurements:null,geometry:null,tanakh:null,transcript:null,runtimeStatus:null,runtimeModel:null,liveEnabled:!1,staleBuildWarning:null},af={overview:{label:"Overview",detail:"Index summary and artifact counts",status:"idle",source:"none"},measurements:{label:"Measurements",detail:"Measurement ledger and attribution counts",status:"idle",source:"none"},basin:{label:"Basin",detail:"Trajectory summary and attractor metadata",status:"idle",source:"none"},graph:{label:"Graph",detail:"Large semantic graph bundle",status:"idle",source:"none"},geometry:{label:"Geometry",detail:"Large diagnostics bundle",status:"idle",source:"none"},tanakh:{label:"Tanakh",detail:"Canonical text, derived analyzers, and merkavah scene sidecars",status:"idle",source:"none"},transcript:{label:"Transcript",detail:"Turn history and active-set cross-links",status:"idle",source:"none"},runtimeStatus:{label:"Runtime status",detail:"Live backend status",status:"idle",source:"none"},runtimeModel:{label:"Runtime model",detail:"Live model metadata",status:"idle",source:"none"}};function PC(r){return r==="overview"?"Overview":r==="graph"?"Graph":r==="basin"?"Basin":r==="geometry"?"Geometry":r==="tanakh"?"Tanakh":"Measurements"}async function vi(r){const e=await fetch(r,{credentials:"same-origin"});if(!e.ok)throw new Error(`${e.status} ${e.statusText} for ${r}`);return await e.json()}function LC(r,e,t){var a,o,u;if(!t||!((a=e==null?void 0:e.turns)!=null&&a.length))return((u=(o=r==null?void 0:r.active_set_slices)==null?void 0:o.at(-1))==null?void 0:u.node_ids)??[];const n=e.turns.find(c=>c.turn_id===t);return(n==null?void 0:n.active_set_node_ids)??[]}function DC({bootstrap:r,graph:e,surface:t}){const n=r.experiment_id??"unknown",a=r.export_manifest_id??(e==null?void 0:e.export_manifest_id)??r.source_graph_hash??(e==null?void 0:e.source_graph_hash)??"live";return`eden.observatory.view_presets.v1::${n}::${t}::${a}`}function ua(r){return`badge badge-${r}`}function Hn({items:r}){return U.jsx("dl",{className:"metric-list",children:r.map(([e,t])=>U.jsxs("div",{className:"metric-row",children:[U.jsx("dt",{children:e}),U.jsx("dd",{children:NC(t)})]},e))})}function NC(r){return r==null||r===""?"—":Array.isArray(r)?r.join(", "):typeof r=="object"?JSON.stringify(r):String(r)}function yu(r,e=xo){return{items:r.slice(0,e),capped:r.length>e,total:r.length}}function da(r){return String((r==null?void 0:r.label)??(r==null?void 0:r.id)??"unknown node")}function xu(r,e){const t=da(e.get(r==null?void 0:r.source)??{id:r==null?void 0:r.source}),n=da(e.get(r==null?void 0:r.target)??{id:r==null?void 0:r.target});return`${String((r==null?void 0:r.type)??"EDGE")}: ${t} -> ${n}`}function IC(r,e){const t=structuredClone(af);for(const n of Y_)r[n]&&(t[n].source=e?"live_api":"static_export",t[n].status=CC.includes(n)?"loading":n==="geometry"||n==="tanakh"?"deferred":"idle");return t}function UC(r){return`payload-chip payload-${r}`}function Iv(r){return r==="live_api"?"live API":r==="static_export"?"static export":"unavailable"}function an({title:r,children:e}){return U.jsxs("section",{className:"inspector-card",children:[U.jsx("h3",{children:r}),e]})}function FC({bootstrap:r}){const e=Nv.includes(r.initial_surface??"overview")?r.initial_surface:"overview",[t,n]=tt.useState(e),[a,o]=tt.useState(vu),[u,c]=tt.useState(_u),[h,f]=tt.useState(ch),[m,g]=tt.useState("cards"),[v,x]=tt.useState([]),[M,w]=tt.useState(null),[S,y]=tt.useState(null),[I,L]=tt.useState(null),[T,P]=tt.useState(null),[N,D]=tt.useState(!0),[O,C]=tt.useState(null),[E,k]=tt.useState(RC),[q,Q]=tt.useState(null),[ne,ae]=tt.useState(af),[he,me]=tt.useState(!1),H=tt.useMemo(()=>DC({bootstrap:r,graph:E.graph,surface:t}),[r,E.graph,t]),pe=v[0]??null,se=tt.useMemo(()=>{var G,fe;return new Map([...((G=E.graph)==null?void 0:G.semantic_nodes)??[],...((fe=E.graph)==null?void 0:fe.runtime_nodes)??[]].map(ve=>[String(ve.id),ve]))},[E.graph]),B=tt.useMemo(()=>{var G,fe,ve;return(fe=(G=E.graph)==null?void 0:G.semantic_nodes)!=null&&fe.length?E.graph.semantic_nodes:((ve=E.graph)==null?void 0:ve.runtime_nodes)??[]},[E.graph]),re=tt.useMemo(()=>{var G,fe,ve;return(fe=(G=E.graph)==null?void 0:G.semantic_edges)!=null&&fe.length?E.graph.semantic_edges:((ve=E.graph)==null?void 0:ve.runtime_edges)??[]},[E.graph]),_e=tt.useMemo(()=>re.find(G=>G.id===M)??null,[re,M]),Y=tt.useMemo(()=>{var G,fe;return((fe=(G=E.graph)==null?void 0:G.assemblies)==null?void 0:fe.find(ve=>ve.id===S))??null},[E.graph,S]),ge=tt.useMemo(()=>{var fe,ve,Ee;return[...((fe=E.graph)==null?void 0:fe.semantic_nodes)??[],...((ve=E.graph)==null?void 0:ve.runtime_nodes)??[],...((Ee=E.graph)==null?void 0:Ee.assemblies)??[]].find(X=>X.id===pe)??null},[E.graph,pe]),le=tt.useMemo(()=>{var fe,ve,Ee,X;const G=(ve=(fe=E.basin)==null?void 0:fe.turns)==null?void 0:ve.find(Ue=>Ue.turn_id===I);return G||(((X=(Ee=E.transcript)==null?void 0:Ee.turns)==null?void 0:X[0])??null)},[E.basin,E.transcript,I]),Me=tt.useMemo(()=>LC(E.graph,E.transcript,(le==null?void 0:le.turn_id)??null),[E.graph,E.transcript,le]),be=_e?se.get(String(_e.source))??null:null,ke=_e?se.get(String(_e.target))??null:null,We=tt.useMemo(()=>yu(B),[B]),Rt=tt.useMemo(()=>yu(re),[re]),Pt=tt.useMemo(()=>{var G;return yu(((G=E.basin)==null?void 0:G.turns)??[])},[E.basin]),ft=tt.useMemo(()=>{var G;return yu(((G=E.graph)==null?void 0:G.assemblies)??[])},[E.graph]);tt.useEffect(()=>{let G=vu,fe=_u,ve=ch;try{const Ee=window.localStorage.getItem(H);if(Ee){const X=JSON.parse(Ee);G=X.graphMode??vu,fe=X.assemblyRenderMode??_u,ve=X.liftMode??ch}}catch{}o(G),c(fe),f(ve),P(H)},[H]),tt.useEffect(()=>{if(T!==H)return;const G=JSON.stringify({graphMode:a,assemblyRenderMode:u,liftMode:h});window.localStorage.setItem(H,G)},[u,a,h,T,H]),tt.useEffect(()=>{let G=!1;async function fe(){var ve,Ee,X,Ue,Ye,Ze,Oe,st,it,vt,j,De,oe,xe,Fe,Ie,ct,Ut;D(!0),C(null),ae(af);try{const Ht=(ve=r.live_api)==null?void 0:ve.status;let yt=!1,hn=null;if(Ht)try{const bt=await vi(Ht);yt=!0,(X=(Ee=bt.status)==null?void 0:Ee.frontend_build)!=null&&X.warning&&(hn=bt.status.frontend_build.reason??"stale frontend build")}catch{yt=!1}const fn=yt?{graph:(Ue=r.live_api)==null?void 0:Ue.graph,basin:(Ye=r.live_api)==null?void 0:Ye.basin,overview:(Ze=r.live_api)==null?void 0:Ze.overview,measurements:(Oe=r.live_api)==null?void 0:Oe.measurements,geometry:(st=r.live_api)==null?void 0:st.geometry,tanakh:(it=r.live_api)==null?void 0:it.tanakh,transcript:(vt=r.live_api)==null?void 0:vt.session_turns,runtimeStatus:(j=r.live_api)==null?void 0:j.runtime_status,runtimeModel:(De=r.live_api)==null?void 0:De.runtime_model}:{graph:(oe=r.payload_urls)==null?void 0:oe.graph,basin:(xe=r.payload_urls)==null?void 0:xe.basin,overview:(Fe=r.payload_urls)==null?void 0:Fe.overview,measurements:(Ie=r.payload_urls)==null?void 0:Ie.measurements,geometry:(ct=r.payload_urls)==null?void 0:ct.geometry,tanakh:(Ut=r.payload_urls)==null?void 0:Ut.tanakh,transcript:void 0,runtimeStatus:void 0,runtimeModel:void 0},Kt={...fn,liveEnabled:yt,staleBuildWarning:hn};G||(Q(Kt),ae(IC(fn,yt)),k(bt=>({...bt,liveEnabled:yt,staleBuildWarning:hn})));const Tn=async(bt,zt,bn)=>{if(G)return null;ae(pn=>({...pn,[bt]:{...pn[bt],status:"loading",error:void 0}}));try{const pn=await vi(zt);return G?null:(tt.startTransition(()=>{bn(pn)}),ae(Ei=>({...Ei,[bt]:{...Ei[bt],status:"ready"}})),pn)}catch(pn){if(G)return null;const Ei=pn instanceof Error?pn.message:`Failed to load ${bt}.`;throw ae(Zr=>({...Zr,[bt]:{...Zr[bt],status:"error",error:Ei}})),pn}},jn=[];Kt.overview&&jn.push(Tn("overview",Kt.overview,bt=>k(zt=>({...zt,overview:bt})))),Kt.measurements&&jn.push(Tn("measurements",Kt.measurements,bt=>k(zt=>({...zt,measurements:bt})))),Kt.basin&&jn.push(Tn("basin",Kt.basin,bt=>{var bn;const zt=bt;k(pn=>({...pn,basin:zt})),!I&&((bn=zt.turns)!=null&&bn.length)&&L(zt.turns[0].turn_id)})),await Promise.allSettled(jn),G||D(!1);const On=[];Kt.graph&&On.push(Tn("graph",Kt.graph,bt=>{var bn;const zt=bt;k(pn=>({...pn,graph:zt})),!S&&((bn=zt.assemblies)!=null&&bn.length)&&y(zt.assemblies[0].id)})),Kt.transcript&&On.push(Tn("transcript",Kt.transcript,bt=>k(zt=>({...zt,transcript:bt})))),Kt.runtimeStatus&&On.push(Tn("runtimeStatus",Kt.runtimeStatus,bt=>k(zt=>({...zt,runtimeStatus:bt})))),Kt.runtimeModel&&On.push(Tn("runtimeModel",Kt.runtimeModel,bt=>k(zt=>({...zt,runtimeModel:bt})))),Promise.allSettled(On)}catch(Ht){G||(C(Ht instanceof Error?Ht.message:"Failed to load observatory payloads."),D(!1))}}return fe(),()=>{G=!0}},[r]),tt.useEffect(()=>{var ve;if(!E.liveEnabled||!((ve=r.live_api)!=null&&ve.events))return;const G=new URL(r.live_api.events,window.location.href);r.session_id&&G.searchParams.set("session_id",r.session_id);const fe=new EventSource(G.toString());return fe.addEventListener("observatory.invalidate",()=>{tt.startTransition(()=>{k(Ee=>({...Ee}))})}),fe.addEventListener("observatory.invalidate",async()=>{var Ee,X,Ue,Ye,Ze,Oe,st,it;try{const[vt,j,De,oe,xe,Fe,Ie,ct]=await Promise.all([(Ee=r.live_api)!=null&&Ee.graph?vi(r.live_api.graph):Promise.resolve(null),(X=r.live_api)!=null&&X.basin?vi(r.live_api.basin):Promise.resolve(null),(Ue=r.live_api)!=null&&Ue.overview?vi(r.live_api.overview):Promise.resolve(null),(Ye=r.live_api)!=null&&Ye.measurements?vi(r.live_api.measurements):Promise.resolve(null),(Ze=r.live_api)!=null&&Ze.session_turns?vi(r.live_api.session_turns):Promise.resolve(null),(Oe=r.live_api)!=null&&Oe.runtime_status?vi(r.live_api.runtime_status):Promise.resolve(null),(st=r.live_api)!=null&&st.runtime_model?vi(r.live_api.runtime_model):Promise.resolve(null),(it=r.live_api)!=null&&it.tanakh?vi(r.live_api.tanakh):Promise.resolve(null)]);k(Ut=>({...Ut,graph:vt,basin:j,overview:De,measurements:oe,transcript:xe,runtimeStatus:Fe,runtimeModel:Ie,tanakh:ct}))}catch{}}),()=>{fe.close()}},[r.live_api,r.session_id,E.liveEnabled]),tt.useEffect(()=>{if(t!=="geometry"||E.geometry||!(q!=null&&q.geometry))return;let G=!1;const fe=q.geometry;return ae(ve=>({...ve,geometry:{...ve.geometry,status:"loading",source:q.liveEnabled?"live_api":"static_export",error:void 0}})),vi(fe).then(ve=>{G||(k(Ee=>({...Ee,geometry:ve})),ae(Ee=>({...Ee,geometry:{...Ee.geometry,status:"ready"}})))}).catch(ve=>{if(G)return;const Ee=ve instanceof Error?ve.message:"Failed to load geometry payload.";ae(X=>({...X,geometry:{...X.geometry,status:"error",error:Ee}}))}),()=>{G=!0}},[E.geometry,q,t]),tt.useEffect(()=>{if(t!=="tanakh"||E.tanakh||!(q!=null&&q.tanakh))return;let G=!1;const fe=q.tanakh;return ae(ve=>({...ve,tanakh:{...ve.tanakh,status:"loading",source:q.liveEnabled?"live_api":"static_export",error:void 0}})),vi(fe).then(ve=>{G||(k(Ee=>({...Ee,tanakh:ve})),ae(Ee=>({...Ee,tanakh:{...Ee.tanakh,status:"ready"}})))}).catch(ve=>{if(G)return;const Ee=ve instanceof Error?ve.message:"Failed to load Tanakh payload.";ae(X=>({...X,tanakh:{...X.tanakh,status:"error",error:Ee}}))}),()=>{G=!0}},[E.tanakh,q,t]);function V(G,fe){if(w(null),!G){x([]);return}x(ve=>fe?ve.includes(G)?ve.filter(Ee=>Ee!==G):[...ve,G]:[G])}function nn(G){y(G),w(null),x([])}function gt(G){w(G),x([])}function pt(G){L(G),y(null),w(null),x([])}function Je(G){x([G]),w(null)}async function Tt(G){var fe;if((fe=r.live_api)!=null&&fe.tanakh_run){me(!0),ae(ve=>({...ve,tanakh:{...ve.tanakh,status:"loading",source:"live_api",error:void 0}}));try{const ve=await fetch(r.live_api.tanakh_run,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_id:r.session_id,ref:G.ref,params:G.params})});if(!ve.ok)throw new Error(`${ve.status} ${ve.statusText} for ${r.live_api.tanakh_run}`);const Ee=await ve.json();k(X=>({...X,tanakh:Ee})),ae(X=>({...X,tanakh:{...X.tanakh,status:"ready",source:"live_api"}}))}catch(ve){const Ee=ve instanceof Error?ve.message:"Failed to run Tanakh surface.";ae(X=>({...X,tanakh:{...X.tanakh,status:"error",source:"live_api",error:Ee}}))}finally{me(!1)}}}function Xe(){var ve,Ee,X,Ue,Ye,Ze,Oe,st,it,vt,j,De,oe,xe,Fe,Ie;const G=((ve=E.overview)==null?void 0:ve.graph_counts)??((Ee=E.graph)==null?void 0:Ee.counts)??{},fe=((X=E.measurements)==null?void 0:X.counts)??{};return U.jsxs("div",{className:"overview-grid",children:[U.jsx(an,{title:"Identity",children:U.jsx(Hn,{items:[["Experiment",r.experiment_id],["Session",r.session_id],["Mode",E.liveEnabled?"Live API":"Static export"],["Render","Layout/render != evidence"]]})}),U.jsx(an,{title:"Graph",children:U.jsx(Hn,{items:[["Payload",ne.graph.status],["Source",Iv(ne.graph.source)],["Assemblies",(Ye=(Ue=E.graph)==null?void 0:Ue.assemblies)==null?void 0:Ye.length],["Clusters",(Oe=(Ze=E.graph)==null?void 0:Ze.cluster_summaries)==null?void 0:Oe.length],...Object.entries(G)]})}),U.jsx(an,{title:"Basin",children:U.jsx(Hn,{items:[["Payload",ne.basin.status],["Projection",((st=E.basin)==null?void 0:st.projection_method)??r.projection_method],["Filtered turns",(it=E.basin)==null?void 0:it.filtered_turn_count],["Source turns",(vt=E.basin)==null?void 0:vt.source_turn_count],["Derived","SVD projection + lift mode"]]})}),U.jsx(an,{title:"Measurements",children:U.jsx(Hn,{items:[["Payload",ne.measurements.status],...Object.entries(fe)]})}),U.jsx(an,{title:"Tanakh",children:U.jsx(Hn,{items:[["Payload",ne.tanakh.status],["Ref",((j=E.tanakh)==null?void 0:j.current_ref)??((oe=(De=E.overview)==null?void 0:De.tanakh)==null?void 0:oe.current_ref)],["Bundle",((xe=E.tanakh)==null?void 0:xe.bundle_hash)??((Ie=(Fe=E.overview)==null?void 0:Fe.tanakh)==null?void 0:Ie.bundle_hash)],["Mode",E.liveEnabled?"Live/API + static sidecars":"Static sidecars"]]})})]})}function F(){const G=Y_.filter(Ee=>ne[Ee].source!=="none").map(Ee=>[Ee,ne[Ee]]);if(!G.length)return null;const fe=G.filter(([,Ee])=>Ee.status==="loading").length,ve=G.filter(([,Ee])=>Ee.status==="deferred").length;return U.jsxs("section",{className:"status-panel",children:[U.jsxs("div",{className:"status-panel-copy",children:[U.jsx("strong",{children:N?"Loading observatory payloads":fe?"Background payload activity":"Payload status"}),U.jsx("span",{children:E.liveEnabled?"Live mode prefers API payloads and refresh invalidations.":"Static export mode reads adjacent JSON artifacts; large graph and geometry bundles can take noticeable time."}),U.jsx("span",{children:fe?`${fe} payload${fe===1?"":"s"} still loading.`:ve?`${ve} payload${ve===1?"":"s"} deferred until needed.`:"All requested payloads are ready."})]}),U.jsx("div",{className:"payload-grid",children:G.map(([Ee,X])=>U.jsxs("div",{className:"payload-card",children:[U.jsxs("div",{className:"payload-card-header",children:[U.jsx("strong",{children:X.label}),U.jsx("span",{className:UC(X.status),children:X.status})]}),U.jsx("p",{children:X.detail}),U.jsx("small",{children:Iv(X.source)}),X.error?U.jsx("small",{className:"payload-error",children:X.error}):null]},Ee))})]})}function A(){var ve,Ee;const G=((ve=E.graph)==null?void 0:ve.graph_modes)??[vu],fe=((Ee=E.graph)==null?void 0:Ee.assembly_render_modes)??[_u];return U.jsxs("div",{className:"toolbar",children:[U.jsx("div",{className:"toolbar-group",children:G.map(X=>U.jsx("button",{className:X===a?"toolbar-button is-active":"toolbar-button",onClick:()=>o(X),type:"button",children:X},X))}),U.jsx("div",{className:"toolbar-group",children:fe.map(X=>U.jsx("button",{className:X===u?"toolbar-button is-active":"toolbar-button",onClick:()=>c(X),type:"button",children:X},X))})]})}function te(){var G;return U.jsxs("div",{className:"toolbar",children:[U.jsx("div",{className:"toolbar-group",children:["flat","time_lift","density_lift","session_offset"].map(fe=>U.jsx("button",{className:fe===h?"toolbar-button is-active":"toolbar-button",onClick:()=>f(fe),type:"button",children:fe},fe))}),U.jsxs("div",{className:"toolbar-group toolbar-badges",children:[U.jsxs("span",{className:ua("derived"),children:["Projection: ",((G=E.basin)==null?void 0:G.projection_method)??r.projection_method??"unknown"]}),U.jsxs("span",{className:ua("derived"),children:["Lift: ",h]}),U.jsx("span",{className:ua("derived"),children:"Derived"})]})]})}function Se(){var it,vt,j,De;const G=_e??ge??Y??le??E.overview??{},fe=(_e==null?void 0:_e.measurement_history)??(ge==null?void 0:ge.measurement_history)??(Y==null?void 0:Y.measurement_history)??[],ve=(_e==null?void 0:_e.operator_label)??((it=_e==null?void 0:_e.provenance)==null?void 0:it.assertion_origin)??(ge==null?void 0:ge.provenance)??(Y==null?void 0:Y.operator_label)??(le==null?void 0:le.profile_name)??"",Ee=_e?xu(_e,se):(G==null?void 0:G.label)??(G==null?void 0:G.display_attractor_label)??(G==null?void 0:G.display_label),X=(G==null?void 0:G.kind)??(_e?"edge":Y?"memode":le?"turn":"overview"),Ue=_e?`${(be==null?void 0:be.domain)??"unknown"} -> ${(ke==null?void 0:ke.domain)??"unknown"}`:(G==null?void 0:G.domain)??(G==null?void 0:G.dominant_domain),Ye=(_e==null?void 0:_e.assertion_origin)??((vt=_e==null?void 0:_e.provenance)==null?void 0:vt.assertion_origin)??(G==null?void 0:G.source_kind)??"observatory",Ze=_e?`${(be==null?void 0:be.cluster_label)??(be==null?void 0:be.cluster_signature)??"unknown"} -> ${(ke==null?void 0:ke.cluster_label)??(ke==null?void 0:ke.cluster_signature)??"unknown"}`:(G==null?void 0:G.cluster_label)??(G==null?void 0:G.display_label)??(le==null?void 0:le.display_attractor_label),Oe=_e?[["Source",da(be??{id:_e==null?void 0:_e.source})],["Target",da(ke??{id:_e==null?void 0:_e.target})],["Relation type",_e==null?void 0:_e.type]]:ge?[["Connected relations",re.filter(oe=>oe.source===ge.id||oe.target===ge.id).slice(0,4).map(oe=>xu(oe,se))],["Current turn",le==null?void 0:le.turn_id],["Attractor",le==null?void 0:le.display_attractor_label]]:[["Active set nodes",le==null?void 0:le.active_set_node_ids],["Transition",le==null?void 0:le.transition_kind],["Attractor",le==null?void 0:le.display_attractor_label]],st=_e?[["Source presence",be==null?void 0:be.recent_active_set_presence],["Target presence",ke==null?void 0:ke.recent_active_set_presence],["Highlighted nodes",Me.length]]:Y?[["Members in active set",(Y.member_meme_ids??[]).filter(oe=>Me.includes(oe))],["Highlighted nodes",Me.length],["Selected turn",le==null?void 0:le.turn_id]]:[["Recent presence",(G==null?void 0:G.recent_active_set_presence)??((j=le==null?void 0:le.active_set_summary)==null?void 0:j.size)],["Selected turn",le==null?void 0:le.turn_id],["Highlighted nodes",Me.length]];return U.jsxs("aside",{className:"inspector",children:[U.jsxs("div",{className:"inspector-tabs",children:[U.jsx("button",{className:m==="cards"?"toolbar-button is-active":"toolbar-button",onClick:()=>g("cards"),type:"button",children:"Cards"}),U.jsx("button",{className:m==="json"?"toolbar-button is-active":"toolbar-button",onClick:()=>g("json"),type:"button",children:"Raw JSON"})]}),m==="json"?U.jsx("pre",{className:"debug-json",children:JSON.stringify(G,null,2)}):U.jsxs("div",{className:"inspector-cards",children:[U.jsx(an,{title:"Identity",children:U.jsx(Hn,{items:[["ID",(G==null?void 0:G.id)??(G==null?void 0:G.turn_id)??(G==null?void 0:G.cluster_signature)],["Label",Ee],["Created",G==null?void 0:G.created_at]]})}),U.jsx(an,{title:"Ontology",children:U.jsx(Hn,{items:[["Kind",X],["Domain",Ue],["Source",Ye]]})}),U.jsx(an,{title:"Summary/Invariance",children:U.jsx(Hn,{items:[["Summary",(G==null?void 0:G.summary)??(G==null?void 0:G.manual_summary)??(G==null?void 0:G.dominant_label)],["Invariance",Y==null?void 0:Y.invariance_summary],["Recent turns",le==null?void 0:le.active_set_labels]]})}),U.jsx(an,{title:"Provenance",children:U.jsx(Hn,{items:[["Operator/Source",ve],["Evidence label",(G==null?void 0:G.evidence_label)??(Y==null?void 0:Y.evidence_label)??(_e==null?void 0:_e.evidence_label)],["Confidence",(G==null?void 0:G.confidence)??(Y==null?void 0:Y.confidence)??(_e==null?void 0:_e.confidence)]]})}),U.jsx(an,{title:"Cluster Membership",children:U.jsx(Hn,{items:[["Cluster",_e?`${(be==null?void 0:be.cluster_signature)??"unknown"} -> ${(ke==null?void 0:ke.cluster_signature)??"unknown"}`:(G==null?void 0:G.cluster_signature)??(le==null?void 0:le.dominant_cluster_signature)],["Display label",Ze],["Domain mix",G==null?void 0:G.domain_mix]]})}),U.jsx(an,{title:"Memode Membership",children:U.jsx(Hn,{items:[["Assemblies",_e?[...(be==null?void 0:be.memode_membership)??[],...(ke==null?void 0:ke.memode_membership)??[]]:(G==null?void 0:G.memode_membership)??(Y==null?void 0:Y.member_meme_ids)],["Supporting edges",Y==null?void 0:Y.supporting_edge_ids],["Member order",Y==null?void 0:Y.member_order]]})}),U.jsx(an,{title:"Supporting Relations",children:U.jsx(Hn,{items:Oe})}),U.jsx(an,{title:"Active Set Presence",children:U.jsx(Hn,{items:st})}),U.jsx(an,{title:"Measurement History",children:U.jsx(Hn,{items:[["Count",fe.length],["Recent event",(De=fe[0])==null?void 0:De.action_type],["Preview delta","Use preview/commit API; view-only presets stay out of evidence."]]})})]})]})}function we(){var G,fe,ve,Ee;return U.jsxs("aside",{className:"sidebar",children:[U.jsx(an,{title:"Assemblies",children:E.graph?U.jsxs(U.Fragment,{children:[ft.capped?U.jsxs("p",{className:"placeholder-copy",children:["Showing first ",xo," of ",ft.total," assemblies. This browser list is capped and not exhaustive."]}):null,U.jsx("div",{className:"chip-list",children:ft.items.map(X=>U.jsx("button",{"aria-label":`Assembly ${X.label}`,className:X.id===S?"chip is-active":"chip",onClick:()=>nn(X.id),type:"button",children:X.label},X.id))})]}):U.jsxs("p",{className:"placeholder-copy",children:["Graph payload ",ne.graph.status,". Assemblies appear after the semantic graph bundle arrives."]})}),U.jsx(an,{title:"Graph Entities",children:E.graph?U.jsxs(U.Fragment,{children:[We.capped?U.jsxs("p",{className:"placeholder-copy",children:["Showing first ",xo," of ",We.total," graph entities. This browser list is capped and not exhaustive."]}):null,U.jsx("div",{className:"chip-list",children:We.items.map(X=>U.jsx("button",{"aria-label":`Graph entity ${da(X)}`,className:X.id===pe?"chip is-active":"chip",onClick:()=>Je(X.id),type:"button",children:da(X)},X.id))})]}):U.jsxs("p",{className:"placeholder-copy",children:["Graph payload ",ne.graph.status,". Text selection becomes available once the graph bundle is ready."]})}),U.jsx(an,{title:"Relations",children:E.graph?U.jsxs(U.Fragment,{children:[Rt.capped?U.jsxs("p",{className:"placeholder-copy",children:["Showing first ",xo," of ",Rt.total," relations. This browser list is capped and not exhaustive."]}):null,U.jsx("div",{className:"transcript-list",children:Rt.items.map(X=>U.jsxs("button",{"aria-label":`Graph relation ${xu(X,se)}`,className:X.id===M?"transcript-turn is-active":"transcript-turn",onClick:()=>gt(X.id),type:"button",children:[U.jsx("span",{children:X.type}),U.jsx("span",{children:xu(X,se)})]},X.id))})]}):U.jsx("p",{className:"placeholder-copy",children:"Relations stay unavailable until the graph payload is ready."})}),U.jsx(an,{title:"Semantic Clusters",children:E.graph?U.jsx("div",{className:"chip-list",children:(((G=E.graph)==null?void 0:G.cluster_summaries)??[]).slice(0,12).map(X=>U.jsxs("div",{className:"cluster-pill",children:[U.jsx("strong",{children:X.display_label}),U.jsxs("span",{children:[X.member_meme_ids.length," memes"]})]},X.cluster_signature))}):U.jsx("p",{className:"placeholder-copy",children:"Cluster summaries depend on the graph payload and are loaded separately from the overview."})}),U.jsx(an,{title:"Basin Turns",children:(ve=(fe=E.basin)==null?void 0:fe.turns)!=null&&ve.length?U.jsxs(U.Fragment,{children:[Pt.capped?U.jsxs("p",{className:"placeholder-copy",children:["Showing first ",xo," of ",Pt.total," basin turns. This browser list is capped and not exhaustive."]}):null,U.jsx("div",{className:"transcript-list",children:Pt.items.map(X=>U.jsxs("button",{"aria-label":`Basin turn T${X.turn_index??"?"} ${X.turn_id} ${X.display_attractor_label??X.dominant_label??X.turn_id}`,className:X.turn_id===(le==null?void 0:le.turn_id)?"transcript-turn is-active":"transcript-turn",onClick:()=>pt(X.turn_id),type:"button",children:[U.jsxs("span",{children:["T",X.turn_index??"?"]}),U.jsx("span",{children:X.display_attractor_label??X.dominant_label??X.turn_id})]},X.turn_id))})]}):U.jsx("p",{className:"placeholder-copy",children:"Basin turns become selectable when filtered trajectory data is available."})}),U.jsx(an,{title:"Transcript",children:E.transcript?U.jsx("div",{className:"transcript-list",children:(((Ee=E.transcript)==null?void 0:Ee.turns)??[]).slice(0,10).map(X=>U.jsxs("button",{"aria-label":`Transcript turn T${X.turn_index} ${X.turn_id}`,className:X.turn_id===(le==null?void 0:le.turn_id)?"transcript-turn is-active":"transcript-turn",onClick:()=>pt(X.turn_id),type:"button",children:[U.jsxs("span",{children:["T",X.turn_index]}),U.jsx("span",{children:X.user_text})]},X.turn_id))}):U.jsx("p",{className:"placeholder-copy",children:E.liveEnabled?`Transcript payload ${ne.transcript.status}.`:"Transcript is only available from the live API in v1."})})]})}function ye(){var G,fe,ve;return t==="overview"?Xe():t==="graph"&&!E.graph?U.jsxs("div",{className:"empty-state",children:[U.jsx("h2",{children:"Graph payload not ready"}),U.jsxs("p",{children:["Current status: ",ne.graph.status,". This semantic bundle is large and loads separately from the overview."]})]}):t==="graph"&&E.graph?U.jsxs(U.Fragment,{children:[A(),U.jsx(TC,{payload:E.graph,mode:a,currentTurnNodeIds:Me,selectedNodeId:pe,selectedAssembly:u==="hidden"?null:Y,onSelectNode:V})]}):t==="basin"&&!E.basin?U.jsxs("div",{className:"empty-state",children:[U.jsx("h2",{children:"Basin payload not ready"}),U.jsxs("p",{children:["Current status: ",ne.basin.status,"."]})]}):t==="basin"&&E.basin?(E.basin.filtered_turn_count??0)<2?U.jsxs(U.Fragment,{children:[te(),U.jsxs("div",{className:"empty-state",children:[U.jsx("h2",{children:"Sparse basin data"}),U.jsx("p",{children:((G=E.basin.diagnostics)==null?void 0:G.reason)??"Not enough turns with non-empty active sets for basin playback."}),U.jsx(Hn,{items:[["Source turns",E.basin.source_turn_count],["Filtered turns",E.basin.filtered_turn_count],["Skipped turns",(fe=E.basin.diagnostics)==null?void 0:fe.skipped_turn_count]]})]})]}):U.jsxs(U.Fragment,{children:[te(),U.jsx(XT,{payload:E.basin,currentTurnId:(le==null?void 0:le.turn_id)??null,liftMode:h,onSelectTurn:pt})]}):t==="geometry"?E.geometry?U.jsx("pre",{className:"debug-json",children:JSON.stringify(E.geometry??{},null,2)}):U.jsxs("div",{className:"empty-state",children:[U.jsxs("h2",{children:["Geometry payload ",ne.geometry.status]}),U.jsx("p",{children:ne.geometry.status==="error"?"Geometry diagnostics are unavailable for this surface.":"The geometry bundle is intentionally deferred until you open this tab because it can be very large on seeded experiments."}),ne.geometry.error?U.jsx("p",{children:ne.geometry.error}):null]}):t==="tanakh"?E.tanakh?U.jsx(AC,{payload:E.tanakh,liveEnabled:E.liveEnabled,canRun:!!(E.liveEnabled&&((ve=r.live_api)!=null&&ve.tanakh_run)),running:he,onRun:Tt}):U.jsxs("div",{className:"empty-state",children:[U.jsxs("h2",{children:["Tanakh payload ",ne.tanakh.status]}),U.jsx("p",{children:ne.tanakh.status==="error"?"Tanakh artifacts are unavailable for this surface.":"The Tanakh bundle is deferred until you open this tab because it includes canonical text plus derived sidecars."}),ne.tanakh.error?U.jsx("p",{children:ne.tanakh.error}):null]}):U.jsx("pre",{className:"debug-json",children:JSON.stringify(E.measurements??{},null,2)})}return U.jsxs("div",{className:"app-shell",children:[U.jsxs("header",{className:"app-header",children:[U.jsxs("div",{children:[U.jsx("p",{className:"eyebrow",children:"EDEN Observatory"}),U.jsx("h1",{children:"Live-first semantic graph and basin instrument"})]}),U.jsxs("div",{className:"header-badges",children:[U.jsx("span",{className:ua("observed"),children:E.liveEnabled?"Live API":"Static export"}),U.jsx("span",{className:ua("derived"),children:"Layout != evidence"}),E.staleBuildWarning?U.jsxs("span",{className:ua("warning"),children:["Build warning: ",E.staleBuildWarning]}):null]})]}),U.jsx("nav",{className:"surface-tabs",children:Nv.map(G=>U.jsx("button",{className:G===t?"toolbar-button is-active":"toolbar-button",onClick:()=>n(G),type:"button",children:PC(G)},G))}),F(),O?U.jsx("div",{className:"status-banner status-error",children:O}):null,U.jsxs("main",{className:"layout",children:[we(),U.jsx("section",{className:"surface-panel",children:ye()}),Se()]})]})}k0.createRoot(document.getElementById("observatory-root")).render(U.jsx(P0.StrictMode,{children:U.jsx(FC,{bootstrap:window.__EDEN_BOOTSTRAP__??{}})}));
