(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Qh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cd={exports:{}},na={},dd={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function g0(){if(zm)return _t;zm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(O,re,De){this.props=O,this.context=re,this.refs=M,this.updater=De||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(O,re,De){this.props=O,this.context=re,this.refs=M,this.updater=De||x}var P=N.prototype=new y;P.constructor=N,E(P,S.prototype),P.isPureReactComponent=!0;var w=Array.isArray,I=Object.prototype.hasOwnProperty,b={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function k(O,re,De){var ne,ve={},G=null,ie=null;if(re!=null)for(ne in re.ref!==void 0&&(ie=re.ref),re.key!==void 0&&(G=""+re.key),re)I.call(re,ne)&&!D.hasOwnProperty(ne)&&(ve[ne]=re[ne]);var pe=arguments.length-2;if(pe===1)ve.children=De;else if(1<pe){for(var _e=Array(pe),Ae=0;Ae<pe;Ae++)_e[Ae]=arguments[Ae+2];ve.children=_e}if(O&&O.defaultProps)for(ne in pe=O.defaultProps,pe)ve[ne]===void 0&&(ve[ne]=pe[ne]);return{$$typeof:r,type:O,key:G,ref:ie,props:ve,_owner:b.current}}function C(O,re){return{$$typeof:r,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function T(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function z(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(De){return re[De]})}var te=/\/+/g;function Y(O,re){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):re.toString(36)}function Z(O,re,De,ne,ve){var G=typeof O;(G==="undefined"||G==="boolean")&&(O=null);var ie=!1;if(O===null)ie=!0;else switch(G){case"string":case"number":ie=!0;break;case"object":switch(O.$$typeof){case r:case e:ie=!0}}if(ie)return ie=O,ve=ve(ie),O=ne===""?"."+Y(ie,0):ne,w(ve)?(De="",O!=null&&(De=O.replace(te,"$&/")+"/"),Z(ve,re,De,"",function(Ae){return Ae})):ve!=null&&(T(ve)&&(ve=C(ve,De+(!ve.key||ie&&ie.key===ve.key?"":(""+ve.key).replace(te,"$&/")+"/")+O)),re.push(ve)),1;if(ie=0,ne=ne===""?".":ne+":",w(O))for(var pe=0;pe<O.length;pe++){G=O[pe];var _e=ne+Y(G,pe);ie+=Z(G,re,De,_e,ve)}else if(_e=v(O),typeof _e=="function")for(O=_e.call(O),pe=0;!(G=O.next()).done;)G=G.value,_e=ne+Y(G,pe++),ie+=Z(G,re,De,_e,ve);else if(G==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ie}function de(O,re,De){if(O==null)return O;var ne=[],ve=0;return Z(O,ne,"","",function(G){return re.call(De,G,ve++)}),ne}function q(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(De){(O._status===0||O._status===-1)&&(O._status=1,O._result=De)},function(De){(O._status===0||O._status===-1)&&(O._status=2,O._result=De)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var he={current:null},V={transition:null},ce={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:V,ReactCurrentOwner:b};function le(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:de,forEach:function(O,re,De){de(O,function(){re.apply(this,arguments)},De)},count:function(O){var re=0;return de(O,function(){re++}),re},toArray:function(O){return de(O,function(re){return re})||[]},only:function(O){if(!T(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=S,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=N,_t.StrictMode=n,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,_t.act=le,_t.cloneElement=function(O,re,De){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ne=E({},O.props),ve=O.key,G=O.ref,ie=O._owner;if(re!=null){if(re.ref!==void 0&&(G=re.ref,ie=b.current),re.key!==void 0&&(ve=""+re.key),O.type&&O.type.defaultProps)var pe=O.type.defaultProps;for(_e in re)I.call(re,_e)&&!D.hasOwnProperty(_e)&&(ne[_e]=re[_e]===void 0&&pe!==void 0?pe[_e]:re[_e])}var _e=arguments.length-2;if(_e===1)ne.children=De;else if(1<_e){pe=Array(_e);for(var Ae=0;Ae<_e;Ae++)pe[Ae]=arguments[Ae+2];ne.children=pe}return{$$typeof:r,type:O.type,key:ve,ref:G,props:ne,_owner:ie}},_t.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},_t.createElement=k,_t.createFactory=function(O){var re=k.bind(null,O);return re.type=O,re},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:c,render:O}},_t.isValidElement=T,_t.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:q}},_t.memo=function(O,re){return{$$typeof:f,type:O,compare:re===void 0?null:re}},_t.startTransition=function(O){var re=V.transition;V.transition={};try{O()}finally{V.transition=re}},_t.unstable_act=le,_t.useCallback=function(O,re){return he.current.useCallback(O,re)},_t.useContext=function(O){return he.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return he.current.useDeferredValue(O)},_t.useEffect=function(O,re){return he.current.useEffect(O,re)},_t.useId=function(){return he.current.useId()},_t.useImperativeHandle=function(O,re,De){return he.current.useImperativeHandle(O,re,De)},_t.useInsertionEffect=function(O,re){return he.current.useInsertionEffect(O,re)},_t.useLayoutEffect=function(O,re){return he.current.useLayoutEffect(O,re)},_t.useMemo=function(O,re){return he.current.useMemo(O,re)},_t.useReducer=function(O,re,De){return he.current.useReducer(O,re,De)},_t.useRef=function(O){return he.current.useRef(O)},_t.useState=function(O){return he.current.useState(O)},_t.useSyncExternalStore=function(O,re,De){return he.current.useSyncExternalStore(O,re,De)},_t.useTransition=function(){return he.current.useTransition()},_t.version="18.3.1",_t}var Bm;function Jh(){return Bm||(Bm=1,dd.exports=g0()),dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function v0(){if(Gm)return na;Gm=1;var r=Jh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,f){var m,g={},v=null,x=null;f!==void 0&&(v=""+f),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(x=h.ref);for(m in h)n.call(h,m)&&!a.hasOwnProperty(m)&&(g[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:o.current}}return na.Fragment=t,na.jsx=u,na.jsxs=u,na}var Hm;function _0(){return Hm||(Hm=1,cd.exports=v0()),cd.exports}var me=_0(),Ct=Jh();const y0=Qh(Ct);var Ul={},hd={exports:{}},Gn={},fd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function x0(){return Vm||(Vm=1,(function(r){function e(V,ce){var le=V.length;V.push(ce);e:for(;0<le;){var O=le-1>>>1,re=V[O];if(0<o(re,ce))V[O]=ce,V[le]=re,le=O;else break e}}function t(V){return V.length===0?null:V[0]}function n(V){if(V.length===0)return null;var ce=V[0],le=V.pop();if(le!==ce){V[0]=le;e:for(var O=0,re=V.length,De=re>>>1;O<De;){var ne=2*(O+1)-1,ve=V[ne],G=ne+1,ie=V[G];if(0>o(ve,le))G<re&&0>o(ie,ve)?(V[O]=ie,V[G]=le,O=G):(V[O]=ve,V[ne]=le,O=ne);else if(G<re&&0>o(ie,le))V[O]=ie,V[G]=le,O=G;else break e}}return ce}function o(V,ce){var le=V.sortIndex-ce.sortIndex;return le!==0?le:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var h=[],f=[],m=1,g=null,v=3,x=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var ce=t(f);ce!==null;){if(ce.callback===null)n(f);else if(ce.startTime<=V)n(f),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(f)}}function w(V){if(M=!1,P(V),!E)if(t(h)!==null)E=!0,q(I);else{var ce=t(f);ce!==null&&he(w,ce.startTime-V)}}function I(V,ce){E=!1,M&&(M=!1,y(k),k=-1),x=!0;var le=v;try{for(P(ce),g=t(h);g!==null&&(!(g.expirationTime>ce)||V&&!z());){var O=g.callback;if(typeof O=="function"){g.callback=null,v=g.priorityLevel;var re=O(g.expirationTime<=ce);ce=r.unstable_now(),typeof re=="function"?g.callback=re:g===t(h)&&n(h),P(ce)}else n(h);g=t(h)}if(g!==null)var De=!0;else{var ne=t(f);ne!==null&&he(w,ne.startTime-ce),De=!1}return De}finally{g=null,v=le,x=!1}}var b=!1,D=null,k=-1,C=5,T=-1;function z(){return!(r.unstable_now()-T<C)}function te(){if(D!==null){var V=r.unstable_now();T=V;var ce=!0;try{ce=D(!0,V)}finally{ce?Y():(b=!1,D=null)}}else b=!1}var Y;if(typeof N=="function")Y=function(){N(te)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,de=Z.port2;Z.port1.onmessage=te,Y=function(){de.postMessage(null)}}else Y=function(){S(te,0)};function q(V){D=V,b||(b=!0,Y())}function he(V,ce){k=S(function(){V(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){E||x||(E=!0,q(I))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(V){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var le=v;v=ce;try{return V()}finally{v=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var le=v;v=V;try{return ce()}finally{v=le}},r.unstable_scheduleCallback=function(V,ce,le){var O=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,V={id:m++,callback:ce,priorityLevel:V,startTime:le,expirationTime:re,sortIndex:-1},le>O?(V.sortIndex=le,e(f,V),t(h)===null&&V===t(f)&&(M?(y(k),k=-1):M=!0,he(w,le-O))):(V.sortIndex=re,e(h,V),E||x||(E=!0,q(I))),V},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(V){var ce=v;return function(){var le=v;v=ce;try{return V.apply(this,arguments)}finally{v=le}}}})(pd)),pd}var Wm;function S0(){return Wm||(Wm=1,fd.exports=x0()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function E0(){if(Xm)return Gn;Xm=1;var r=Jh(),e=S0();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return h.call(g,i)?!0:h.call(m,i)?!1:f.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,d){if(s===null||typeof s>"u"||x(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,d,p,_,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,N);S[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,N);S[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,N);S[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,l,d){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,p,d)&&(l=null),d||p===null?v(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),b=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),z=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),V=Symbol.iterator;function ce(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,O;function re(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var De=!1;function ne(i,s){if(!i||De)return"";De=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(se){var d=se}Reflect.construct(i,[],s)}else{try{s.call()}catch(se){d=se}i.call(s.prototype)}else{try{throw Error()}catch(se){d=se}i()}}catch(se){if(se&&d&&typeof se.stack=="string"){for(var p=se.stack.split(`
`),_=d.stack.split(`
`),A=p.length-1,F=_.length-1;1<=A&&0<=F&&p[A]!==_[F];)F--;for(;1<=A&&0<=F;A--,F--)if(p[A]!==_[F]){if(A!==1||F!==1)do if(A--,F--,0>F||p[A]!==_[F]){var H=`
`+p[A].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=A&&0<=F);break}}}finally{De=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?re(i):""}function ve(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=ne(i.type,!1),i;case 11:return i=ne(i.type.render,!1),i;case 1:return i=ne(i.type,!0),i;default:return""}}function G(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case b:return"Portal";case C:return"Profiler";case k:return"StrictMode";case Y:return"Suspense";case Z:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case T:return(i._context.displayName||"Context")+".Provider";case te:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case de:return s=i.displayName||null,s!==null?s:G(i.type)||"Memo";case q:s=i._payload,i=i._init;try{return G(i(s))}catch{}}return null}function ie(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function _e(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ae(i){var s=_e(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){d=""+A,_.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function yt(i){i._valueTracker||(i._valueTracker=Ae(i))}function St(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=_e(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function at(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function B(i,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Ht(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=pe(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ht(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function dt(i,s){ht(i,s);var l=pe(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?wt(i,s.type,l):s.hasOwnProperty("defaultValue")&&wt(i,s.type,pe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ke(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function wt(i,s,l){(s!=="number"||at(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var We=Array.isArray;function U(i,s,l,d){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+pe(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function R(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function J(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(We(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:pe(l)}}function ge(i,s){var l=pe(s.value),d=pe(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function xe(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function fe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $e(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?fe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Re,Qe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Re.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function et(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(i){Ce.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ee[s]=Ee[i]})});function Be(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ee.hasOwnProperty(i)&&Ee[i]?(""+s).trim():s+"px"}function tt(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=Be(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var Ne=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(i,s){if(s){if(Ne[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ut(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function X(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ie=null,ue=null,ye=null;function Oe(i){if(i=Go(i)){if(typeof Ie!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ka(s),Ie(i.stateNode,i.type,s))}}function ke(i){ue?ye?ye.push(i):ye=[i]:ue=i}function ft(){if(ue){var i=ue,s=ye;if(ye=ue=null,Oe(i),s)for(i=0;i<s.length;i++)Oe(s[i])}}function zt(i,s){return i(s)}function tn(){}var At=!1;function Un(i,s,l){if(At)return i(s,l);At=!0;try{return zt(i,s,l)}finally{At=!1,(ue!==null||ye!==null)&&(tn(),ft())}}function Cn(i,s){var l=i.stateNode;if(l===null)return null;var d=Ka(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ss=!1;if(c)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ss=!1}function ki(i,s,l,d,p,_,A,F,H){var se=Array.prototype.slice.call(arguments,3);try{s.apply(l,se)}catch(we){this.onError(we)}}var Oi=!1,$r=null,jr=!1,hr=null,Ra={onError:function(i){Oi=!0,$r=i}};function Es(i,s,l,d,p,_,A,F,H){Oi=!1,$r=null,ki.apply(Ra,arguments)}function Ca(i,s,l,d,p,_,A,F,H){if(Es.apply(this,arguments),Oi){if(Oi){var se=$r;Oi=!1,$r=null}else throw Error(t(198));jr||(jr=!0,hr=se)}}function Ri(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Pa(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function La(i){if(Ri(i)!==i)throw Error(t(188))}function Nu(i){var s=i.alternate;if(!s){if(s=Ri(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return La(p),i;if(_===d)return La(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=_;else{for(var A=!1,F=p.child;F;){if(F===l){A=!0,l=p,d=_;break}if(F===d){A=!0,d=p,l=_;break}F=F.sibling}if(!A){for(F=_.child;F;){if(F===l){A=!0,l=_,d=p;break}if(F===d){A=!0,d=_,l=p;break}F=F.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Da(i){return i=Nu(i),i!==null?Na(i):null}function Na(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Na(i);if(s!==null)return s;i=i.sibling}return null}var Ia=e.unstable_scheduleCallback,L=e.unstable_cancelCallback,$=e.unstable_shouldYield,oe=e.unstable_requestPaint,Q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,be=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,lt=e.unstable_IdlePriority,st=null,Ye=null;function Et(i){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(st,i,void 0,(i.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Tt,Yt=Math.log,Vt=Math.LN2;function Tt(i){return i>>>=0,i===0?32:31-(Yt(i)/Vt|0)|0}var nt=64,qt=4194304;function xt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function _n(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,_=i.pingedLanes,A=l&268435455;if(A!==0){var F=A&~p;F!==0?d=xt(F):(_&=A,_!==0&&(d=xt(_)))}else A=l&~p,A!==0?d=xt(A):_!==0&&(d=xt(_));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-mt(s),p=1<<l,d|=i[l],s&=~p;return d}function fr(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pn(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var A=31-mt(_),F=1<<A,H=p[A];H===-1?((F&l)===0||(F&d)!==0)&&(p[A]=fr(F,s)):H<=s&&(i.expiredLanes|=F),_&=~F}}function zi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function kt(){var i=nt;return nt<<=1,(nt&4194240)===0&&(nt=64),i}function yn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function ln(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-mt(s),i[s]=l}function pn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-mt(l),_=1<<p;s[p]=0,d[p]=-1,i[p]=-1,l&=~_}}function un(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-mt(l),p=1<<d;p&s|i[d]&s&&(i[d]|=s),l&=~p}}var bt=0;function Ci(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var _f,Iu,yf,xf,Sf,Uu=!1,Ua=[],pr=null,mr=null,gr=null,To=new Map,Ao=new Map,vr=[],O_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(i,s){switch(i){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":To.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(s.pointerId)}}function bo(i,s,l,d,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Go(s),s!==null&&Iu(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function z_(i,s,l,d,p){switch(s){case"focusin":return pr=bo(pr,i,s,l,d,p),!0;case"dragenter":return mr=bo(mr,i,s,l,d,p),!0;case"mouseover":return gr=bo(gr,i,s,l,d,p),!0;case"pointerover":var _=p.pointerId;return To.set(_,bo(To.get(_)||null,i,s,l,d,p)),!0;case"gotpointercapture":return _=p.pointerId,Ao.set(_,bo(Ao.get(_)||null,i,s,l,d,p)),!0}return!1}function Mf(i){var s=Yr(i.target);if(s!==null){var l=Ri(s);if(l!==null){if(s=l.tag,s===13){if(s=Pa(l),s!==null){i.blockedOn=s,Sf(i.priority,function(){yf(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Fa(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=ku(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);Nt=d,l.target.dispatchEvent(d),Nt=null}else return s=Go(l),s!==null&&Iu(s),i.blockedOn=l,!1;s.shift()}return!0}function wf(i,s,l){Fa(i)&&l.delete(s)}function B_(){Uu=!1,pr!==null&&Fa(pr)&&(pr=null),mr!==null&&Fa(mr)&&(mr=null),gr!==null&&Fa(gr)&&(gr=null),To.forEach(wf),Ao.forEach(wf)}function Ro(i,s){i.blockedOn===s&&(i.blockedOn=null,Uu||(Uu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,B_)))}function Co(i){function s(p){return Ro(p,i)}if(0<Ua.length){Ro(Ua[0],i);for(var l=1;l<Ua.length;l++){var d=Ua[l];d.blockedOn===i&&(d.blockedOn=null)}}for(pr!==null&&Ro(pr,i),mr!==null&&Ro(mr,i),gr!==null&&Ro(gr,i),To.forEach(s),Ao.forEach(s),l=0;l<vr.length;l++)d=vr[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<vr.length&&(l=vr[0],l.blockedOn===null);)Mf(l),l.blockedOn===null&&vr.shift()}var Ms=w.ReactCurrentBatchConfig,ka=!0;function G_(i,s,l,d){var p=bt,_=Ms.transition;Ms.transition=null;try{bt=1,Fu(i,s,l,d)}finally{bt=p,Ms.transition=_}}function H_(i,s,l,d){var p=bt,_=Ms.transition;Ms.transition=null;try{bt=4,Fu(i,s,l,d)}finally{bt=p,Ms.transition=_}}function Fu(i,s,l,d){if(ka){var p=ku(i,s,l,d);if(p===null)ec(i,s,d,Oa,l),Ef(i,d);else if(z_(p,i,s,l,d))d.stopPropagation();else if(Ef(i,d),s&4&&-1<O_.indexOf(i)){for(;p!==null;){var _=Go(p);if(_!==null&&_f(_),_=ku(i,s,l,d),_===null&&ec(i,s,d,Oa,l),_===p)break;p=_}p!==null&&d.stopPropagation()}else ec(i,s,d,null,l)}}var Oa=null;function ku(i,s,l,d){if(Oa=null,i=X(d),i=Yr(i),i!==null)if(s=Ri(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Pa(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Oa=i,null}function Tf(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case be:return 1;case Ue:return 4;case Ge:case Xe:return 16;case lt:return 536870912;default:return 16}default:return 16}}var _r=null,Ou=null,za=null;function Af(){if(za)return za;var i,s=Ou,l=s.length,d,p="value"in _r?_r.value:_r.textContent,_=p.length;for(i=0;i<l&&s[i]===p[i];i++);var A=l-i;for(d=1;d<=A&&s[l-d]===p[_-d];d++);return za=p.slice(i,1<d?1-d:void 0)}function Ba(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Ga(){return!0}function bf(){return!1}function Xn(i){function s(l,d,p,_,A){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(l=i[F],this[F]=l?l(_):_[F]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ga:bf,this.isPropagationStopped=bf,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),s}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Xn(ws),Po=le({},ws,{view:0,detail:0}),V_=Xn(Po),Bu,Gu,Lo,Ha=le({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Lo&&(Lo&&i.type==="mousemove"?(Bu=i.screenX-Lo.screenX,Gu=i.screenY-Lo.screenY):Gu=Bu=0,Lo=i),Bu)},movementY:function(i){return"movementY"in i?i.movementY:Gu}}),Rf=Xn(Ha),W_=le({},Ha,{dataTransfer:0}),X_=Xn(W_),$_=le({},Po,{relatedTarget:0}),Hu=Xn($_),j_=le({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Y_=Xn(j_),q_=le({},ws,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),K_=Xn(q_),Z_=le({},ws,{data:0}),Cf=Xn(Z_),Q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ty(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=ey[i])?!!s[i]:!1}function Vu(){return ty}var ny=le({},Po,{key:function(i){if(i.key){var s=Q_[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ba(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?J_[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(i){return i.type==="keypress"?Ba(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ba(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),iy=Xn(ny),ry=le({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=Xn(ry),sy=le({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),oy=Xn(sy),ay=le({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=Xn(ay),uy=le({},Ha,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Xn(uy),dy=[9,13,27,32],Wu=c&&"CompositionEvent"in window,Do=null;c&&"documentMode"in document&&(Do=document.documentMode);var hy=c&&"TextEvent"in window&&!Do,Lf=c&&(!Wu||Do&&8<Do&&11>=Do),Df=" ",Nf=!1;function If(i,s){switch(i){case"keyup":return dy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ts=!1;function fy(i,s){switch(i){case"compositionend":return Uf(s);case"keypress":return s.which!==32?null:(Nf=!0,Df);case"textInput":return i=s.data,i===Df&&Nf?null:i;default:return null}}function py(i,s){if(Ts)return i==="compositionend"||!Wu&&If(i,s)?(i=Af(),za=Ou=_r=null,Ts=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Lf&&s.locale!=="ko"?null:s.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!my[i.type]:s==="textarea"}function kf(i,s,l,d){ke(d),s=ja(s,"onChange"),0<s.length&&(l=new zu("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var No=null,Io=null;function gy(i){tp(i,0)}function Va(i){var s=Ps(i);if(St(s))return i}function vy(i,s){if(i==="change")return s}var Of=!1;if(c){var Xu;if(c){var $u="oninput"in document;if(!$u){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),$u=typeof zf.oninput=="function"}Xu=$u}else Xu=!1;Of=Xu&&(!document.documentMode||9<document.documentMode)}function Bf(){No&&(No.detachEvent("onpropertychange",Gf),Io=No=null)}function Gf(i){if(i.propertyName==="value"&&Va(Io)){var s=[];kf(s,Io,i,X(i)),Un(gy,s)}}function _y(i,s,l){i==="focusin"?(Bf(),No=s,Io=l,No.attachEvent("onpropertychange",Gf)):i==="focusout"&&Bf()}function yy(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Va(Io)}function xy(i,s){if(i==="click")return Va(s)}function Sy(i,s){if(i==="input"||i==="change")return Va(s)}function Ey(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var hi=typeof Object.is=="function"?Object.is:Ey;function Uo(i,s){if(hi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!h.call(s,p)||!hi(i[p],s[p]))return!1}return!0}function Hf(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Vf(i,s){var l=Hf(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Hf(l)}}function Wf(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Wf(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Xf(){for(var i=window,s=at();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=at(i.document)}return s}function ju(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function My(i){var s=Xf(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Wf(l.ownerDocument.documentElement,l)){if(d!==null&&ju(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!i.extend&&_>d&&(p=d,d=_,_=p),p=Vf(l,_);var A=Vf(l,d);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>d?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var wy=c&&"documentMode"in document&&11>=document.documentMode,As=null,Yu=null,Fo=null,qu=!1;function $f(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;qu||As==null||As!==at(d)||(d=As,"selectionStart"in d&&ju(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Fo&&Uo(Fo,d)||(Fo=d,d=ja(Yu,"onSelect"),0<d.length&&(s=new zu("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=As)))}function Wa(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var bs={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Ku={},jf={};c&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Xa(i){if(Ku[i])return Ku[i];if(!bs[i])return i;var s=bs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in jf)return Ku[i]=s[l];return i}var Yf=Xa("animationend"),qf=Xa("animationiteration"),Kf=Xa("animationstart"),Zf=Xa("transitionend"),Qf=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(i,s){Qf.set(i,s),a(s,[i])}for(var Zu=0;Zu<Jf.length;Zu++){var Qu=Jf[Zu],Ty=Qu.toLowerCase(),Ay=Qu[0].toUpperCase()+Qu.slice(1);yr(Ty,"on"+Ay)}yr(Yf,"onAnimationEnd"),yr(qf,"onAnimationIteration"),yr(Kf,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(Zf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function ep(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,Ca(d,s,void 0,i),i.currentTarget=null}function tp(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var _=void 0;if(s)for(var A=d.length-1;0<=A;A--){var F=d[A],H=F.instance,se=F.currentTarget;if(F=F.listener,H!==_&&p.isPropagationStopped())break e;ep(p,F,se),_=H}else for(A=0;A<d.length;A++){if(F=d[A],H=F.instance,se=F.currentTarget,F=F.listener,H!==_&&p.isPropagationStopped())break e;ep(p,F,se),_=H}}}if(jr)throw i=hr,jr=!1,hr=null,i}function Bt(i,s){var l=s[oc];l===void 0&&(l=s[oc]=new Set);var d=i+"__bubble";l.has(d)||(np(s,i,2,!1),l.add(d))}function Ju(i,s,l){var d=0;s&&(d|=4),np(l,i,d,s)}var $a="_reactListening"+Math.random().toString(36).slice(2);function Oo(i){if(!i[$a]){i[$a]=!0,n.forEach(function(l){l!=="selectionchange"&&(by.has(l)||Ju(l,!1,i),Ju(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[$a]||(s[$a]=!0,Ju("selectionchange",!1,s))}}function np(i,s,l,d){switch(Tf(s)){case 1:var p=G_;break;case 4:p=H_;break;default:p=Fu}l=p.bind(null,s,l,i),p=void 0,!Ss||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function ec(i,s,l,d,p){var _=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var F=d.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(A===4)for(A=d.return;A!==null;){var H=A.tag;if((H===3||H===4)&&(H=A.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;A=A.return}for(;F!==null;){if(A=Yr(F),A===null)return;if(H=A.tag,H===5||H===6){d=_=A;continue e}F=F.parentNode}}d=d.return}Un(function(){var se=_,we=X(l),Te=[];e:{var Se=Qf.get(i);if(Se!==void 0){var He=zu,je=i;switch(i){case"keypress":if(Ba(l)===0)break e;case"keydown":case"keyup":He=iy;break;case"focusin":je="focus",He=Hu;break;case"focusout":je="blur",He=Hu;break;case"beforeblur":case"afterblur":He=Hu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=X_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=oy;break;case Yf:case qf:case Kf:He=Y_;break;case Zf:He=ly;break;case"scroll":He=V_;break;case"wheel":He=cy;break;case"copy":case"cut":case"paste":He=K_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Pf}var qe=(s&4)!==0,Zt=!qe&&i==="scroll",K=qe?Se!==null?Se+"Capture":null:Se;qe=[];for(var W=se,ee;W!==null;){ee=W;var Pe=ee.stateNode;if(ee.tag===5&&Pe!==null&&(ee=Pe,K!==null&&(Pe=Cn(W,K),Pe!=null&&qe.push(zo(W,Pe,ee)))),Zt)break;W=W.return}0<qe.length&&(Se=new He(Se,je,null,l,we),Te.push({event:Se,listeners:qe}))}}if((s&7)===0){e:{if(Se=i==="mouseover"||i==="pointerover",He=i==="mouseout"||i==="pointerout",Se&&l!==Nt&&(je=l.relatedTarget||l.fromElement)&&(Yr(je)||je[Bi]))break e;if((He||Se)&&(Se=we.window===we?we:(Se=we.ownerDocument)?Se.defaultView||Se.parentWindow:window,He?(je=l.relatedTarget||l.toElement,He=se,je=je?Yr(je):null,je!==null&&(Zt=Ri(je),je!==Zt||je.tag!==5&&je.tag!==6)&&(je=null)):(He=null,je=se),He!==je)){if(qe=Rf,Pe="onMouseLeave",K="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(qe=Pf,Pe="onPointerLeave",K="onPointerEnter",W="pointer"),Zt=He==null?Se:Ps(He),ee=je==null?Se:Ps(je),Se=new qe(Pe,W+"leave",He,l,we),Se.target=Zt,Se.relatedTarget=ee,Pe=null,Yr(we)===se&&(qe=new qe(K,W+"enter",je,l,we),qe.target=ee,qe.relatedTarget=Zt,Pe=qe),Zt=Pe,He&&je)t:{for(qe=He,K=je,W=0,ee=qe;ee;ee=Rs(ee))W++;for(ee=0,Pe=K;Pe;Pe=Rs(Pe))ee++;for(;0<W-ee;)qe=Rs(qe),W--;for(;0<ee-W;)K=Rs(K),ee--;for(;W--;){if(qe===K||K!==null&&qe===K.alternate)break t;qe=Rs(qe),K=Rs(K)}qe=null}else qe=null;He!==null&&ip(Te,Se,He,qe,!1),je!==null&&Zt!==null&&ip(Te,Zt,je,qe,!0)}}e:{if(Se=se?Ps(se):window,He=Se.nodeName&&Se.nodeName.toLowerCase(),He==="select"||He==="input"&&Se.type==="file")var Je=vy;else if(Ff(Se))if(Of)Je=Sy;else{Je=yy;var it=_y}else(He=Se.nodeName)&&He.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Je=xy);if(Je&&(Je=Je(i,se))){kf(Te,Je,l,we);break e}it&&it(i,Se,se),i==="focusout"&&(it=Se._wrapperState)&&it.controlled&&Se.type==="number"&&wt(Se,"number",Se.value)}switch(it=se?Ps(se):window,i){case"focusin":(Ff(it)||it.contentEditable==="true")&&(As=it,Yu=se,Fo=null);break;case"focusout":Fo=Yu=As=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,$f(Te,l,we);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":$f(Te,l,we)}var rt;if(Wu)e:{switch(i){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Ts?If(i,l)&&(ct="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Lf&&l.locale!=="ko"&&(Ts||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ts&&(rt=Af()):(_r=we,Ou="value"in _r?_r.value:_r.textContent,Ts=!0)),it=ja(se,ct),0<it.length&&(ct=new Cf(ct,i,null,l,we),Te.push({event:ct,listeners:it}),rt?ct.data=rt:(rt=Uf(l),rt!==null&&(ct.data=rt)))),(rt=hy?fy(i,l):py(i,l))&&(se=ja(se,"onBeforeInput"),0<se.length&&(we=new Cf("onBeforeInput","beforeinput",null,l,we),Te.push({event:we,listeners:se}),we.data=rt))}tp(Te,s)})}function zo(i,s,l){return{instance:i,listener:s,currentTarget:l}}function ja(i,s){for(var l=s+"Capture",d=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Cn(i,l),_!=null&&d.unshift(zo(i,_,p)),_=Cn(i,s),_!=null&&d.push(zo(i,_,p))),i=i.return}return d}function Rs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ip(i,s,l,d,p){for(var _=s._reactName,A=[];l!==null&&l!==d;){var F=l,H=F.alternate,se=F.stateNode;if(H!==null&&H===d)break;F.tag===5&&se!==null&&(F=se,p?(H=Cn(l,_),H!=null&&A.unshift(zo(l,H,F))):p||(H=Cn(l,_),H!=null&&A.push(zo(l,H,F)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var Ry=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function rp(i){return(typeof i=="string"?i:""+i).replace(Ry,`
`).replace(Cy,"")}function Ya(i,s,l){if(s=rp(s),rp(i)!==s&&l)throw Error(t(425))}function qa(){}var tc=null,nc=null;function ic(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(i){return sp.resolve(null).then(i).catch(Dy)}:rc;function Dy(i){setTimeout(function(){throw i})}function sc(i,s){var l=s,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),Co(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Co(s)}function xr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function op(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Pi="__reactFiber$"+Cs,Bo="__reactProps$"+Cs,Bi="__reactContainer$"+Cs,oc="__reactEvents$"+Cs,Ny="__reactListeners$"+Cs,Iy="__reactHandles$"+Cs;function Yr(i){var s=i[Pi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Bi]||l[Pi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=op(i);i!==null;){if(l=i[Pi])return l;i=op(i)}return s}i=l,l=i.parentNode}return null}function Go(i){return i=i[Pi]||i[Bi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ps(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ka(i){return i[Bo]||null}var ac=[],Ls=-1;function Sr(i){return{current:i}}function Gt(i){0>Ls||(i.current=ac[Ls],ac[Ls]=null,Ls--)}function Ot(i,s){Ls++,ac[Ls]=i.current,i.current=s}var Er={},xn=Sr(Er),Fn=Sr(!1),qr=Er;function Ds(i,s){var l=i.type.contextTypes;if(!l)return Er;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function kn(i){return i=i.childContextTypes,i!=null}function Za(){Gt(Fn),Gt(xn)}function ap(i,s,l){if(xn.current!==Er)throw Error(t(168));Ot(xn,s),Ot(Fn,l)}function lp(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(t(108,ie(i)||"Unknown",p));return le({},l,d)}function Qa(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Er,qr=xn.current,Ot(xn,i),Ot(Fn,Fn.current),!0}function up(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=lp(i,s,qr),d.__reactInternalMemoizedMergedChildContext=i,Gt(Fn),Gt(xn),Ot(xn,i)):Gt(Fn),Ot(Fn,l)}var Gi=null,Ja=!1,lc=!1;function cp(i){Gi===null?Gi=[i]:Gi.push(i)}function Uy(i){Ja=!0,cp(i)}function Mr(){if(!lc&&Gi!==null){lc=!0;var i=0,s=bt;try{var l=Gi;for(bt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}Gi=null,Ja=!1}catch(p){throw Gi!==null&&(Gi=Gi.slice(i+1)),Ia(be,Mr),p}finally{bt=s,lc=!1}}return null}var Ns=[],Is=0,el=null,tl=0,Jn=[],ei=0,Kr=null,Hi=1,Vi="";function Zr(i,s){Ns[Is++]=tl,Ns[Is++]=el,el=i,tl=s}function dp(i,s,l){Jn[ei++]=Hi,Jn[ei++]=Vi,Jn[ei++]=Kr,Kr=i;var d=Hi;i=Vi;var p=32-mt(d)-1;d&=~(1<<p),l+=1;var _=32-mt(s)+p;if(30<_){var A=p-p%5;_=(d&(1<<A)-1).toString(32),d>>=A,p-=A,Hi=1<<32-mt(s)+p|l<<p|d,Vi=_+i}else Hi=1<<_|l<<p|d,Vi=i}function uc(i){i.return!==null&&(Zr(i,1),dp(i,1,0))}function cc(i){for(;i===el;)el=Ns[--Is],Ns[Is]=null,tl=Ns[--Is],Ns[Is]=null;for(;i===Kr;)Kr=Jn[--ei],Jn[ei]=null,Vi=Jn[--ei],Jn[ei]=null,Hi=Jn[--ei],Jn[ei]=null}var $n=null,jn=null,Wt=!1,fi=null;function hp(i,s){var l=ri(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function fp(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,$n=i,jn=xr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,$n=i,jn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Kr!==null?{id:Hi,overflow:Vi}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=ri(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,$n=i,jn=null,!0):!1;default:return!1}}function dc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function hc(i){if(Wt){var s=jn;if(s){var l=s;if(!fp(i,s)){if(dc(i))throw Error(t(418));s=xr(l.nextSibling);var d=$n;s&&fp(i,s)?hp(d,l):(i.flags=i.flags&-4097|2,Wt=!1,$n=i)}}else{if(dc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Wt=!1,$n=i}}}function pp(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;$n=i}function nl(i){if(i!==$n)return!1;if(!Wt)return pp(i),Wt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!ic(i.type,i.memoizedProps)),s&&(s=jn)){if(dc(i))throw mp(),Error(t(418));for(;s;)hp(i,s),s=xr(s.nextSibling)}if(pp(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){jn=xr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}jn=null}}else jn=$n?xr(i.stateNode.nextSibling):null;return!0}function mp(){for(var i=jn;i;)i=xr(i.nextSibling)}function Us(){jn=$n=null,Wt=!1}function fc(i){fi===null?fi=[i]:fi.push(i)}var Fy=w.ReactCurrentBatchConfig;function Ho(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var p=d,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(A){var F=p.refs;A===null?delete F[_]:F[_]=A},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function il(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function gp(i){var s=i._init;return s(i._payload)}function vp(i){function s(K,W){if(i){var ee=K.deletions;ee===null?(K.deletions=[W],K.flags|=16):ee.push(W)}}function l(K,W){if(!i)return null;for(;W!==null;)s(K,W),W=W.sibling;return null}function d(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function p(K,W){return K=Lr(K,W),K.index=0,K.sibling=null,K}function _(K,W,ee){return K.index=ee,i?(ee=K.alternate,ee!==null?(ee=ee.index,ee<W?(K.flags|=2,W):ee):(K.flags|=2,W)):(K.flags|=1048576,W)}function A(K){return i&&K.alternate===null&&(K.flags|=2),K}function F(K,W,ee,Pe){return W===null||W.tag!==6?(W=rd(ee,K.mode,Pe),W.return=K,W):(W=p(W,ee),W.return=K,W)}function H(K,W,ee,Pe){var Je=ee.type;return Je===D?we(K,W,ee.props.children,Pe,ee.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===q&&gp(Je)===W.type)?(Pe=p(W,ee.props),Pe.ref=Ho(K,W,ee),Pe.return=K,Pe):(Pe=bl(ee.type,ee.key,ee.props,null,K.mode,Pe),Pe.ref=Ho(K,W,ee),Pe.return=K,Pe)}function se(K,W,ee,Pe){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=sd(ee,K.mode,Pe),W.return=K,W):(W=p(W,ee.children||[]),W.return=K,W)}function we(K,W,ee,Pe,Je){return W===null||W.tag!==7?(W=ss(ee,K.mode,Pe,Je),W.return=K,W):(W=p(W,ee),W.return=K,W)}function Te(K,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return W=rd(""+W,K.mode,ee),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case I:return ee=bl(W.type,W.key,W.props,null,K.mode,ee),ee.ref=Ho(K,null,W),ee.return=K,ee;case b:return W=sd(W,K.mode,ee),W.return=K,W;case q:var Pe=W._init;return Te(K,Pe(W._payload),ee)}if(We(W)||ce(W))return W=ss(W,K.mode,ee,null),W.return=K,W;il(K,W)}return null}function Se(K,W,ee,Pe){var Je=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Je!==null?null:F(K,W,""+ee,Pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case I:return ee.key===Je?H(K,W,ee,Pe):null;case b:return ee.key===Je?se(K,W,ee,Pe):null;case q:return Je=ee._init,Se(K,W,Je(ee._payload),Pe)}if(We(ee)||ce(ee))return Je!==null?null:we(K,W,ee,Pe,null);il(K,ee)}return null}function He(K,W,ee,Pe,Je){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return K=K.get(ee)||null,F(W,K,""+Pe,Je);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case I:return K=K.get(Pe.key===null?ee:Pe.key)||null,H(W,K,Pe,Je);case b:return K=K.get(Pe.key===null?ee:Pe.key)||null,se(W,K,Pe,Je);case q:var it=Pe._init;return He(K,W,ee,it(Pe._payload),Je)}if(We(Pe)||ce(Pe))return K=K.get(ee)||null,we(W,K,Pe,Je,null);il(W,Pe)}return null}function je(K,W,ee,Pe){for(var Je=null,it=null,rt=W,ct=W=0,hn=null;rt!==null&&ct<ee.length;ct++){rt.index>ct?(hn=rt,rt=null):hn=rt.sibling;var Pt=Se(K,rt,ee[ct],Pe);if(Pt===null){rt===null&&(rt=hn);break}i&&rt&&Pt.alternate===null&&s(K,rt),W=_(Pt,W,ct),it===null?Je=Pt:it.sibling=Pt,it=Pt,rt=hn}if(ct===ee.length)return l(K,rt),Wt&&Zr(K,ct),Je;if(rt===null){for(;ct<ee.length;ct++)rt=Te(K,ee[ct],Pe),rt!==null&&(W=_(rt,W,ct),it===null?Je=rt:it.sibling=rt,it=rt);return Wt&&Zr(K,ct),Je}for(rt=d(K,rt);ct<ee.length;ct++)hn=He(rt,K,ct,ee[ct],Pe),hn!==null&&(i&&hn.alternate!==null&&rt.delete(hn.key===null?ct:hn.key),W=_(hn,W,ct),it===null?Je=hn:it.sibling=hn,it=hn);return i&&rt.forEach(function(Dr){return s(K,Dr)}),Wt&&Zr(K,ct),Je}function qe(K,W,ee,Pe){var Je=ce(ee);if(typeof Je!="function")throw Error(t(150));if(ee=Je.call(ee),ee==null)throw Error(t(151));for(var it=Je=null,rt=W,ct=W=0,hn=null,Pt=ee.next();rt!==null&&!Pt.done;ct++,Pt=ee.next()){rt.index>ct?(hn=rt,rt=null):hn=rt.sibling;var Dr=Se(K,rt,Pt.value,Pe);if(Dr===null){rt===null&&(rt=hn);break}i&&rt&&Dr.alternate===null&&s(K,rt),W=_(Dr,W,ct),it===null?Je=Dr:it.sibling=Dr,it=Dr,rt=hn}if(Pt.done)return l(K,rt),Wt&&Zr(K,ct),Je;if(rt===null){for(;!Pt.done;ct++,Pt=ee.next())Pt=Te(K,Pt.value,Pe),Pt!==null&&(W=_(Pt,W,ct),it===null?Je=Pt:it.sibling=Pt,it=Pt);return Wt&&Zr(K,ct),Je}for(rt=d(K,rt);!Pt.done;ct++,Pt=ee.next())Pt=He(rt,K,ct,Pt.value,Pe),Pt!==null&&(i&&Pt.alternate!==null&&rt.delete(Pt.key===null?ct:Pt.key),W=_(Pt,W,ct),it===null?Je=Pt:it.sibling=Pt,it=Pt);return i&&rt.forEach(function(m0){return s(K,m0)}),Wt&&Zr(K,ct),Je}function Zt(K,W,ee,Pe){if(typeof ee=="object"&&ee!==null&&ee.type===D&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case I:e:{for(var Je=ee.key,it=W;it!==null;){if(it.key===Je){if(Je=ee.type,Je===D){if(it.tag===7){l(K,it.sibling),W=p(it,ee.props.children),W.return=K,K=W;break e}}else if(it.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===q&&gp(Je)===it.type){l(K,it.sibling),W=p(it,ee.props),W.ref=Ho(K,it,ee),W.return=K,K=W;break e}l(K,it);break}else s(K,it);it=it.sibling}ee.type===D?(W=ss(ee.props.children,K.mode,Pe,ee.key),W.return=K,K=W):(Pe=bl(ee.type,ee.key,ee.props,null,K.mode,Pe),Pe.ref=Ho(K,W,ee),Pe.return=K,K=Pe)}return A(K);case b:e:{for(it=ee.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){l(K,W.sibling),W=p(W,ee.children||[]),W.return=K,K=W;break e}else{l(K,W);break}else s(K,W);W=W.sibling}W=sd(ee,K.mode,Pe),W.return=K,K=W}return A(K);case q:return it=ee._init,Zt(K,W,it(ee._payload),Pe)}if(We(ee))return je(K,W,ee,Pe);if(ce(ee))return qe(K,W,ee,Pe);il(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,W!==null&&W.tag===6?(l(K,W.sibling),W=p(W,ee),W.return=K,K=W):(l(K,W),W=rd(ee,K.mode,Pe),W.return=K,K=W),A(K)):l(K,W)}return Zt}var Fs=vp(!0),_p=vp(!1),rl=Sr(null),sl=null,ks=null,pc=null;function mc(){pc=ks=sl=null}function gc(i){var s=rl.current;Gt(rl),i._currentValue=s}function vc(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function Os(i,s){sl=i,pc=ks=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(On=!0),i.firstContext=null)}function ti(i){var s=i._currentValue;if(pc!==i)if(i={context:i,memoizedValue:s,next:null},ks===null){if(sl===null)throw Error(t(308));ks=i,sl.dependencies={lanes:0,firstContext:i}}else ks=ks.next=i;return s}var Qr=null;function _c(i){Qr===null?Qr=[i]:Qr.push(i)}function yp(i,s,l,d){var p=s.interleaved;return p===null?(l.next=l,_c(s)):(l.next=p.next,p.next=l),s.interleaved=l,Wi(i,d)}function Wi(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var wr=!1;function yc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Xi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Tr(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Rt&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,Wi(i,l)}return p=d.interleaved,p===null?(s.next=s,_c(d)):(s.next=p.next,p.next=s),d.interleaved=s,Wi(i,l)}function ol(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,un(i,l)}}function Sp(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function al(i,s,l,d){var p=i.updateQueue;wr=!1;var _=p.firstBaseUpdate,A=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var H=F,se=H.next;H.next=null,A===null?_=se:A.next=se,A=H;var we=i.alternate;we!==null&&(we=we.updateQueue,F=we.lastBaseUpdate,F!==A&&(F===null?we.firstBaseUpdate=se:F.next=se,we.lastBaseUpdate=H))}if(_!==null){var Te=p.baseState;A=0,we=se=H=null,F=_;do{var Se=F.lane,He=F.eventTime;if((d&Se)===Se){we!==null&&(we=we.next={eventTime:He,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=i,qe=F;switch(Se=s,He=l,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Te=je.call(He,Te,Se);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,Se=typeof je=="function"?je.call(He,Te,Se):je,Se==null)break e;Te=le({},Te,Se);break e;case 2:wr=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,Se=p.effects,Se===null?p.effects=[F]:Se.push(F))}else He={eventTime:He,lane:Se,tag:F.tag,payload:F.payload,callback:F.callback,next:null},we===null?(se=we=He,H=Te):we=we.next=He,A|=Se;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;Se=F,F=Se.next,Se.next=null,p.lastBaseUpdate=Se,p.shared.pending=null}}while(!0);if(we===null&&(H=Te),p.baseState=H,p.firstBaseUpdate=se,p.lastBaseUpdate=we,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ts|=A,i.lanes=A,i.memoizedState=Te}}function Ep(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Vo={},Li=Sr(Vo),Wo=Sr(Vo),Xo=Sr(Vo);function Jr(i){if(i===Vo)throw Error(t(174));return i}function xc(i,s){switch(Ot(Xo,s),Ot(Wo,i),Ot(Li,Vo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:$e(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=$e(s,i)}Gt(Li),Ot(Li,s)}function zs(){Gt(Li),Gt(Wo),Gt(Xo)}function Mp(i){Jr(Xo.current);var s=Jr(Li.current),l=$e(s,i.type);s!==l&&(Ot(Wo,i),Ot(Li,l))}function Sc(i){Wo.current===i&&(Gt(Li),Gt(Wo))}var Xt=Sr(0);function ll(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ec=[];function Mc(){for(var i=0;i<Ec.length;i++)Ec[i]._workInProgressVersionPrimary=null;Ec.length=0}var ul=w.ReactCurrentDispatcher,wc=w.ReactCurrentBatchConfig,es=0,$t=null,nn=null,cn=null,cl=!1,$o=!1,jo=0,ky=0;function Sn(){throw Error(t(321))}function Tc(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!hi(i[l],s[l]))return!1;return!0}function Ac(i,s,l,d,p,_){if(es=_,$t=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ul.current=i===null||i.memoizedState===null?Gy:Hy,i=l(d,p),$o){_=0;do{if($o=!1,jo=0,25<=_)throw Error(t(301));_+=1,cn=nn=null,s.updateQueue=null,ul.current=Vy,i=l(d,p)}while($o)}if(ul.current=fl,s=nn!==null&&nn.next!==null,es=0,cn=nn=$t=null,cl=!1,s)throw Error(t(300));return i}function bc(){var i=jo!==0;return jo=0,i}function Di(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?$t.memoizedState=cn=i:cn=cn.next=i,cn}function ni(){if(nn===null){var i=$t.alternate;i=i!==null?i.memoizedState:null}else i=nn.next;var s=cn===null?$t.memoizedState:cn.next;if(s!==null)cn=s,nn=i;else{if(i===null)throw Error(t(310));nn=i,i={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},cn===null?$t.memoizedState=cn=i:cn=cn.next=i}return cn}function Yo(i,s){return typeof s=="function"?s(i):s}function Rc(i){var s=ni(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=nn,p=d.baseQueue,_=l.pending;if(_!==null){if(p!==null){var A=p.next;p.next=_.next,_.next=A}d.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,d=d.baseState;var F=A=null,H=null,se=_;do{var we=se.lane;if((es&we)===we)H!==null&&(H=H.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),d=se.hasEagerState?se.eagerState:i(d,se.action);else{var Te={lane:we,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};H===null?(F=H=Te,A=d):H=H.next=Te,$t.lanes|=we,ts|=we}se=se.next}while(se!==null&&se!==_);H===null?A=d:H.next=F,hi(d,s.memoizedState)||(On=!0),s.memoizedState=d,s.baseState=A,s.baseQueue=H,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do _=p.lane,$t.lanes|=_,ts|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Cc(i){var s=ni(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do _=i(_,A.action),A=A.next;while(A!==p);hi(_,s.memoizedState)||(On=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,d]}function wp(){}function Tp(i,s){var l=$t,d=ni(),p=s(),_=!hi(d.memoizedState,p);if(_&&(d.memoizedState=p,On=!0),d=d.queue,Pc(Rp.bind(null,l,d,i),[i]),d.getSnapshot!==s||_||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,qo(9,bp.bind(null,l,d,p,s),void 0,null),dn===null)throw Error(t(349));(es&30)!==0||Ap(l,s,p)}return p}function Ap(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=$t.updateQueue,s===null?(s={lastEffect:null,stores:null},$t.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function bp(i,s,l,d){s.value=l,s.getSnapshot=d,Cp(s)&&Pp(i)}function Rp(i,s,l){return l(function(){Cp(s)&&Pp(i)})}function Cp(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!hi(i,l)}catch{return!0}}function Pp(i){var s=Wi(i,1);s!==null&&vi(s,i,1,-1)}function Lp(i){var s=Di();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:i},s.queue=i,i=i.dispatch=By.bind(null,$t,i),[s.memoizedState,i]}function qo(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=$t.updateQueue,s===null?(s={lastEffect:null,stores:null},$t.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function Dp(){return ni().memoizedState}function dl(i,s,l,d){var p=Di();$t.flags|=i,p.memoizedState=qo(1|s,l,void 0,d===void 0?null:d)}function hl(i,s,l,d){var p=ni();d=d===void 0?null:d;var _=void 0;if(nn!==null){var A=nn.memoizedState;if(_=A.destroy,d!==null&&Tc(d,A.deps)){p.memoizedState=qo(s,l,_,d);return}}$t.flags|=i,p.memoizedState=qo(1|s,l,_,d)}function Np(i,s){return dl(8390656,8,i,s)}function Pc(i,s){return hl(2048,8,i,s)}function Ip(i,s){return hl(4,2,i,s)}function Up(i,s){return hl(4,4,i,s)}function Fp(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function kp(i,s,l){return l=l!=null?l.concat([i]):null,hl(4,4,Fp.bind(null,s,i),l)}function Lc(){}function Op(i,s){var l=ni();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Tc(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function zp(i,s){var l=ni();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Tc(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function Bp(i,s,l){return(es&21)===0?(i.baseState&&(i.baseState=!1,On=!0),i.memoizedState=l):(hi(l,s)||(l=kt(),$t.lanes|=l,ts|=l,i.baseState=!0),s)}function Oy(i,s){var l=bt;bt=l!==0&&4>l?l:4,i(!0);var d=wc.transition;wc.transition={};try{i(!1),s()}finally{bt=l,wc.transition=d}}function Gp(){return ni().memoizedState}function zy(i,s,l){var d=Cr(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Hp(i))Vp(s,l);else if(l=yp(i,s,l,d),l!==null){var p=Dn();vi(l,i,d,p),Wp(l,s,d)}}function By(i,s,l){var d=Cr(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hp(i))Vp(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var A=s.lastRenderedState,F=_(A,l);if(p.hasEagerState=!0,p.eagerState=F,hi(F,A)){var H=s.interleaved;H===null?(p.next=p,_c(s)):(p.next=H.next,H.next=p),s.interleaved=p;return}}catch{}finally{}l=yp(i,s,p,d),l!==null&&(p=Dn(),vi(l,i,d,p),Wp(l,s,d))}}function Hp(i){var s=i.alternate;return i===$t||s!==null&&s===$t}function Vp(i,s){$o=cl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Wp(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,un(i,l)}}var fl={readContext:ti,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},Gy={readContext:ti,useCallback:function(i,s){return Di().memoizedState=[i,s===void 0?null:s],i},useContext:ti,useEffect:Np,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,dl(4194308,4,Fp.bind(null,s,i),l)},useLayoutEffect:function(i,s){return dl(4194308,4,i,s)},useInsertionEffect:function(i,s){return dl(4,2,i,s)},useMemo:function(i,s){var l=Di();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=Di();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=zy.bind(null,$t,i),[d.memoizedState,i]},useRef:function(i){var s=Di();return i={current:i},s.memoizedState=i},useState:Lp,useDebugValue:Lc,useDeferredValue:function(i){return Di().memoizedState=i},useTransition:function(){var i=Lp(!1),s=i[0];return i=Oy.bind(null,i[1]),Di().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=$t,p=Di();if(Wt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),dn===null)throw Error(t(349));(es&30)!==0||Ap(d,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,Np(Rp.bind(null,d,_,i),[i]),d.flags|=2048,qo(9,bp.bind(null,d,_,l,s),void 0,null),l},useId:function(){var i=Di(),s=dn.identifierPrefix;if(Wt){var l=Vi,d=Hi;l=(d&~(1<<32-mt(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=jo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=ky++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},Hy={readContext:ti,useCallback:Op,useContext:ti,useEffect:Pc,useImperativeHandle:kp,useInsertionEffect:Ip,useLayoutEffect:Up,useMemo:zp,useReducer:Rc,useRef:Dp,useState:function(){return Rc(Yo)},useDebugValue:Lc,useDeferredValue:function(i){var s=ni();return Bp(s,nn.memoizedState,i)},useTransition:function(){var i=Rc(Yo)[0],s=ni().memoizedState;return[i,s]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Gp,unstable_isNewReconciler:!1},Vy={readContext:ti,useCallback:Op,useContext:ti,useEffect:Pc,useImperativeHandle:kp,useInsertionEffect:Ip,useLayoutEffect:Up,useMemo:zp,useReducer:Cc,useRef:Dp,useState:function(){return Cc(Yo)},useDebugValue:Lc,useDeferredValue:function(i){var s=ni();return nn===null?s.memoizedState=i:Bp(s,nn.memoizedState,i)},useTransition:function(){var i=Cc(Yo)[0],s=ni().memoizedState;return[i,s]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Gp,unstable_isNewReconciler:!1};function pi(i,s){if(i&&i.defaultProps){s=le({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Dc(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:le({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var pl={isMounted:function(i){return(i=i._reactInternals)?Ri(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=Dn(),p=Cr(i),_=Xi(d,p);_.payload=s,l!=null&&(_.callback=l),s=Tr(i,_,p),s!==null&&(vi(s,i,p,d),ol(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=Dn(),p=Cr(i),_=Xi(d,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Tr(i,_,p),s!==null&&(vi(s,i,p,d),ol(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Dn(),d=Cr(i),p=Xi(l,d);p.tag=2,s!=null&&(p.callback=s),s=Tr(i,p,d),s!==null&&(vi(s,i,d,l),ol(s,i,d))}};function Xp(i,s,l,d,p,_,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,A):s.prototype&&s.prototype.isPureReactComponent?!Uo(l,d)||!Uo(p,_):!0}function $p(i,s,l){var d=!1,p=Er,_=s.contextType;return typeof _=="object"&&_!==null?_=ti(_):(p=kn(s)?qr:xn.current,d=s.contextTypes,_=(d=d!=null)?Ds(i,p):Er),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pl,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function jp(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&pl.enqueueReplaceState(s,s.state,null)}function Nc(i,s,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},yc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ti(_):(_=kn(s)?qr:xn.current,p.context=Ds(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Dc(i,s,_,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&pl.enqueueReplaceState(p,p.state,null),al(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Bs(i,s){try{var l="",d=s;do l+=ve(d),d=d.return;while(d);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Ic(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Uc(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function Yp(i,s,l){l=Xi(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Sl||(Sl=!0,Kc=d),Uc(i,s)},l}function qp(i,s,l){l=Xi(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;l.payload=function(){return d(p)},l.callback=function(){Uc(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Uc(i,s),typeof d!="function"&&(br===null?br=new Set([this]):br.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function Kp(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new Wy;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(l)||(p.add(l),i=r0.bind(null,i,s,l),s.then(i,i))}function Zp(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Qp(i,s,l,d,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Xi(-1,1),s.tag=2,Tr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var Xy=w.ReactCurrentOwner,On=!1;function Ln(i,s,l,d){s.child=i===null?_p(s,null,l,d):Fs(s,i.child,l,d)}function Jp(i,s,l,d,p){l=l.render;var _=s.ref;return Os(s,p),d=Ac(i,s,l,d,_,p),l=bc(),i!==null&&!On?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$i(i,s,p)):(Wt&&l&&uc(s),s.flags|=1,Ln(i,s,d,p),s.child)}function em(i,s,l,d,p){if(i===null){var _=l.type;return typeof _=="function"&&!id(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,tm(i,s,_,d,p)):(i=bl(l.type,null,d,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:Uo,l(A,d)&&i.ref===s.ref)return $i(i,s,p)}return s.flags|=1,i=Lr(_,d),i.ref=s.ref,i.return=s,s.child=i}function tm(i,s,l,d,p){if(i!==null){var _=i.memoizedProps;if(Uo(_,d)&&i.ref===s.ref)if(On=!1,s.pendingProps=d=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(On=!0);else return s.lanes=i.lanes,$i(i,s,p)}return Fc(i,s,l,d,p)}function nm(i,s,l){var d=s.pendingProps,p=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Hs,Yn),Yn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ot(Hs,Yn),Yn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,Ot(Hs,Yn),Yn|=d}else _!==null?(d=_.baseLanes|l,s.memoizedState=null):d=l,Ot(Hs,Yn),Yn|=d;return Ln(i,s,p,l),s.child}function im(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Fc(i,s,l,d,p){var _=kn(l)?qr:xn.current;return _=Ds(s,_),Os(s,p),l=Ac(i,s,l,d,_,p),d=bc(),i!==null&&!On?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,$i(i,s,p)):(Wt&&d&&uc(s),s.flags|=1,Ln(i,s,l,p),s.child)}function rm(i,s,l,d,p){if(kn(l)){var _=!0;Qa(s)}else _=!1;if(Os(s,p),s.stateNode===null)gl(i,s),$p(s,l,d),Nc(s,l,d,p),d=!0;else if(i===null){var A=s.stateNode,F=s.memoizedProps;A.props=F;var H=A.context,se=l.contextType;typeof se=="object"&&se!==null?se=ti(se):(se=kn(l)?qr:xn.current,se=Ds(s,se));var we=l.getDerivedStateFromProps,Te=typeof we=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==d||H!==se)&&jp(s,A,d,se),wr=!1;var Se=s.memoizedState;A.state=Se,al(s,d,A,p),H=s.memoizedState,F!==d||Se!==H||Fn.current||wr?(typeof we=="function"&&(Dc(s,l,we,d),H=s.memoizedState),(F=wr||Xp(s,l,F,d,Se,H,se))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=H),A.props=d,A.state=H,A.context=se,d=F):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{A=s.stateNode,xp(i,s),F=s.memoizedProps,se=s.type===s.elementType?F:pi(s.type,F),A.props=se,Te=s.pendingProps,Se=A.context,H=l.contextType,typeof H=="object"&&H!==null?H=ti(H):(H=kn(l)?qr:xn.current,H=Ds(s,H));var He=l.getDerivedStateFromProps;(we=typeof He=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==Te||Se!==H)&&jp(s,A,d,H),wr=!1,Se=s.memoizedState,A.state=Se,al(s,d,A,p);var je=s.memoizedState;F!==Te||Se!==je||Fn.current||wr?(typeof He=="function"&&(Dc(s,l,He,d),je=s.memoizedState),(se=wr||Xp(s,l,se,d,Se,je,H)||!1)?(we||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,je,H),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,je,H)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===i.memoizedProps&&Se===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&Se===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=je),A.props=d,A.state=je,A.context=H,d=se):(typeof A.componentDidUpdate!="function"||F===i.memoizedProps&&Se===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&Se===i.memoizedState||(s.flags|=1024),d=!1)}return kc(i,s,l,d,_,p)}function kc(i,s,l,d,p,_){im(i,s);var A=(s.flags&128)!==0;if(!d&&!A)return p&&up(s,l,!1),$i(i,s,_);d=s.stateNode,Xy.current=s;var F=A&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&A?(s.child=Fs(s,i.child,null,_),s.child=Fs(s,null,F,_)):Ln(i,s,F,_),s.memoizedState=d.state,p&&up(s,l,!0),s.child}function sm(i){var s=i.stateNode;s.pendingContext?ap(i,s.pendingContext,s.pendingContext!==s.context):s.context&&ap(i,s.context,!1),xc(i,s.containerInfo)}function om(i,s,l,d,p){return Us(),fc(p),s.flags|=256,Ln(i,s,l,d),s.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function zc(i){return{baseLanes:i,cachePool:null,transitions:null}}function am(i,s,l){var d=s.pendingProps,p=Xt.current,_=!1,A=(s.flags&128)!==0,F;if((F=A)||(F=i!==null&&i.memoizedState===null?!1:(p&2)!==0),F?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ot(Xt,p&1),i===null)return hc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=d.children,i=d.fallback,_?(d=s.mode,_=s.child,A={mode:"hidden",children:A},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Rl(A,d,0,null),i=ss(i,d,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=zc(l),s.memoizedState=Oc,i):Bc(s,A));if(p=i.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return $y(i,s,A,d,F,p,l);if(_){_=d.fallback,A=s.mode,p=i.child,F=p.sibling;var H={mode:"hidden",children:d.children};return(A&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=H,s.deletions=null):(d=Lr(p,H),d.subtreeFlags=p.subtreeFlags&14680064),F!==null?_=Lr(F,_):(_=ss(_,A,l,null),_.flags|=2),_.return=s,d.return=s,d.sibling=_,s.child=d,d=_,_=s.child,A=i.child.memoizedState,A=A===null?zc(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=i.childLanes&~l,s.memoizedState=Oc,d}return _=i.child,i=_.sibling,d=Lr(_,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function Bc(i,s){return s=Rl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function ml(i,s,l,d){return d!==null&&fc(d),Fs(s,i.child,null,l),i=Bc(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function $y(i,s,l,d,p,_,A){if(l)return s.flags&256?(s.flags&=-257,d=Ic(Error(t(422))),ml(i,s,A,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=d.fallback,p=s.mode,d=Rl({mode:"visible",children:d.children},p,0,null),_=ss(_,p,A,null),_.flags|=2,d.return=s,_.return=s,d.sibling=_,s.child=d,(s.mode&1)!==0&&Fs(s,i.child,null,A),s.child.memoizedState=zc(A),s.memoizedState=Oc,_);if((s.mode&1)===0)return ml(i,s,A,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var F=d.dgst;return d=F,_=Error(t(419)),d=Ic(_,d,void 0),ml(i,s,A,d)}if(F=(A&i.childLanes)!==0,On||F){if(d=dn,d!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|A))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Wi(i,p),vi(d,i,p,-1))}return nd(),d=Ic(Error(t(421))),ml(i,s,A,d)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=s0.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,jn=xr(p.nextSibling),$n=s,Wt=!0,fi=null,i!==null&&(Jn[ei++]=Hi,Jn[ei++]=Vi,Jn[ei++]=Kr,Hi=i.id,Vi=i.overflow,Kr=s),s=Bc(s,d.children),s.flags|=4096,s)}function lm(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),vc(i.return,s,l)}function Gc(i,s,l,d,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=p)}function um(i,s,l){var d=s.pendingProps,p=d.revealOrder,_=d.tail;if(Ln(i,s,d.children,l),d=Xt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&lm(i,l,s);else if(i.tag===19)lm(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Ot(Xt,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&ll(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Gc(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&ll(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Gc(s,!0,l,null,_);break;case"together":Gc(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function gl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $i(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ts|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Lr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Lr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function jy(i,s,l){switch(s.tag){case 3:sm(s),Us();break;case 5:Mp(s);break;case 1:kn(s.type)&&Qa(s);break;case 4:xc(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;Ot(rl,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Ot(Xt,Xt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?am(i,s,l):(Ot(Xt,Xt.current&1),i=$i(i,s,l),i!==null?i.sibling:null);Ot(Xt,Xt.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return um(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ot(Xt,Xt.current),d)break;return null;case 22:case 23:return s.lanes=0,nm(i,s,l)}return $i(i,s,l)}var cm,Hc,dm,hm;cm=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Hc=function(){},dm=function(i,s,l,d){var p=i.memoizedProps;if(p!==d){i=s.stateNode,Jr(Li.current);var _=null;switch(l){case"input":p=B(i,p),d=B(i,d),_=[];break;case"select":p=le({},p,{value:void 0}),d=le({},d,{value:void 0}),_=[];break;case"textarea":p=R(i,p),d=R(i,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=qa)}pt(l,d);var A;l=null;for(se in p)if(!d.hasOwnProperty(se)&&p.hasOwnProperty(se)&&p[se]!=null)if(se==="style"){var F=p[se];for(A in F)F.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?_||(_=[]):(_=_||[]).push(se,null));for(se in d){var H=d[se];if(F=p!=null?p[se]:void 0,d.hasOwnProperty(se)&&H!==F&&(H!=null||F!=null))if(se==="style")if(F){for(A in F)!F.hasOwnProperty(A)||H&&H.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in H)H.hasOwnProperty(A)&&F[A]!==H[A]&&(l||(l={}),l[A]=H[A])}else l||(_||(_=[]),_.push(se,l)),l=H;else se==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(_=_||[]).push(se,H)):se==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(se,""+H):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(H!=null&&se==="onScroll"&&Bt("scroll",i),_||F===H||(_=[])):(_=_||[]).push(se,H))}l&&(_=_||[]).push("style",l);var se=_;(s.updateQueue=se)&&(s.flags|=4)}},hm=function(i,s,l,d){l!==d&&(s.flags|=4)};function Ko(i,s){if(!Wt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function En(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function Yy(i,s,l){var d=s.pendingProps;switch(cc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(s),null;case 1:return kn(s.type)&&Za(),En(s),null;case 3:return d=s.stateNode,zs(),Gt(Fn),Gt(xn),Mc(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(nl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,fi!==null&&(Jc(fi),fi=null))),Hc(i,s),En(s),null;case 5:Sc(s);var p=Jr(Xo.current);if(l=s.type,i!==null&&s.stateNode!=null)dm(i,s,l,d,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return En(s),null}if(i=Jr(Li.current),nl(s)){d=s.stateNode,l=s.type;var _=s.memoizedProps;switch(d[Pi]=s,d[Bo]=_,i=(s.mode&1)!==0,l){case"dialog":Bt("cancel",d),Bt("close",d);break;case"iframe":case"object":case"embed":Bt("load",d);break;case"video":case"audio":for(p=0;p<ko.length;p++)Bt(ko[p],d);break;case"source":Bt("error",d);break;case"img":case"image":case"link":Bt("error",d),Bt("load",d);break;case"details":Bt("toggle",d);break;case"input":Ht(d,_),Bt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Bt("invalid",d);break;case"textarea":J(d,_),Bt("invalid",d)}pt(l,_),p=null;for(var A in _)if(_.hasOwnProperty(A)){var F=_[A];A==="children"?typeof F=="string"?d.textContent!==F&&(_.suppressHydrationWarning!==!0&&Ya(d.textContent,F,i),p=["children",F]):typeof F=="number"&&d.textContent!==""+F&&(_.suppressHydrationWarning!==!0&&Ya(d.textContent,F,i),p=["children",""+F]):o.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&Bt("scroll",d)}switch(l){case"input":yt(d),Ke(d,_,!0);break;case"textarea":yt(d),xe(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=qa)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=fe(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=A.createElement(l,{is:d.is}):(i=A.createElement(l),l==="select"&&(A=i,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):i=A.createElementNS(i,l),i[Pi]=s,i[Bo]=d,cm(i,s,!1,!1),s.stateNode=i;e:{switch(A=ut(l,d),l){case"dialog":Bt("cancel",i),Bt("close",i),p=d;break;case"iframe":case"object":case"embed":Bt("load",i),p=d;break;case"video":case"audio":for(p=0;p<ko.length;p++)Bt(ko[p],i);p=d;break;case"source":Bt("error",i),p=d;break;case"img":case"image":case"link":Bt("error",i),Bt("load",i),p=d;break;case"details":Bt("toggle",i),p=d;break;case"input":Ht(i,d),p=B(i,d),Bt("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=le({},d,{value:void 0}),Bt("invalid",i);break;case"textarea":J(i,d),p=R(i,d),Bt("invalid",i);break;default:p=d}pt(l,p),F=p;for(_ in F)if(F.hasOwnProperty(_)){var H=F[_];_==="style"?tt(i,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Qe(i,H)):_==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&et(i,H):typeof H=="number"&&et(i,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?H!=null&&_==="onScroll"&&Bt("scroll",i):H!=null&&P(i,_,H,A))}switch(l){case"input":yt(i),Ke(i,d,!1);break;case"textarea":yt(i),xe(i);break;case"option":d.value!=null&&i.setAttribute("value",""+pe(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?U(i,!!d.multiple,_,!1):d.defaultValue!=null&&U(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=qa)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return En(s),null;case 6:if(i&&s.stateNode!=null)hm(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=Jr(Xo.current),Jr(Li.current),nl(s)){if(d=s.stateNode,l=s.memoizedProps,d[Pi]=s,(_=d.nodeValue!==l)&&(i=$n,i!==null))switch(i.tag){case 3:Ya(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ya(d.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Pi]=s,s.stateNode=d}return En(s),null;case 13:if(Gt(Xt),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Wt&&jn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)mp(),Us(),s.flags|=98560,_=!1;else if(_=nl(s),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Pi]=s}else Us(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;En(s),_=!1}else fi!==null&&(Jc(fi),fi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Xt.current&1)!==0?rn===0&&(rn=3):nd())),s.updateQueue!==null&&(s.flags|=4),En(s),null);case 4:return zs(),Hc(i,s),i===null&&Oo(s.stateNode.containerInfo),En(s),null;case 10:return gc(s.type._context),En(s),null;case 17:return kn(s.type)&&Za(),En(s),null;case 19:if(Gt(Xt),_=s.memoizedState,_===null)return En(s),null;if(d=(s.flags&128)!==0,A=_.rendering,A===null)if(d)Ko(_,!1);else{if(rn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=ll(i),A!==null){for(s.flags|=128,Ko(_,!1),d=A.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)_=l,i=d,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,i=A.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ot(Xt,Xt.current&1|2),s.child}i=i.sibling}_.tail!==null&&Q()>Vs&&(s.flags|=128,d=!0,Ko(_,!1),s.lanes=4194304)}else{if(!d)if(i=ll(A),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ko(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!Wt)return En(s),null}else 2*Q()-_.renderingStartTime>Vs&&l!==1073741824&&(s.flags|=128,d=!0,Ko(_,!1),s.lanes=4194304);_.isBackwards?(A.sibling=s.child,s.child=A):(l=_.last,l!==null?l.sibling=A:s.child=A,_.last=A)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Q(),s.sibling=null,l=Xt.current,Ot(Xt,d?l&1|2:l&1),s):(En(s),null);case 22:case 23:return td(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(Yn&1073741824)!==0&&(En(s),s.subtreeFlags&6&&(s.flags|=8192)):En(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function qy(i,s){switch(cc(s),s.tag){case 1:return kn(s.type)&&Za(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return zs(),Gt(Fn),Gt(xn),Mc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Sc(s),null;case 13:if(Gt(Xt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Us()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Gt(Xt),null;case 4:return zs(),null;case 10:return gc(s.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var vl=!1,Mn=!1,Ky=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Gs(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Kt(i,s,d)}else l.current=null}function Vc(i,s,l){try{l()}catch(d){Kt(i,s,d)}}var fm=!1;function Zy(i,s){if(tc=ka,i=Xf(),ju(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,F=-1,H=-1,se=0,we=0,Te=i,Se=null;t:for(;;){for(var He;Te!==l||p!==0&&Te.nodeType!==3||(F=A+p),Te!==_||d!==0&&Te.nodeType!==3||(H=A+d),Te.nodeType===3&&(A+=Te.nodeValue.length),(He=Te.firstChild)!==null;)Se=Te,Te=He;for(;;){if(Te===i)break t;if(Se===l&&++se===p&&(F=A),Se===_&&++we===d&&(H=A),(He=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=He}l=F===-1||H===-1?null:{start:F,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(nc={focusedElem:i,selectionRange:l},ka=!1,Ve=s;Ve!==null;)if(s=Ve,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ve=i;else for(;Ve!==null;){s=Ve;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,Zt=je.memoizedState,K=s.stateNode,W=K.getSnapshotBeforeUpdate(s.elementType===s.type?qe:pi(s.type,qe),Zt);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ee=s.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){Kt(s,s.return,Pe)}if(i=s.sibling,i!==null){i.return=s.return,Ve=i;break}Ve=s.return}return je=fm,fm=!1,je}function Zo(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Vc(s,l,_)}p=p.next}while(p!==d)}}function _l(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Wc(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function pm(i){var s=i.alternate;s!==null&&(i.alternate=null,pm(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Pi],delete s[Bo],delete s[oc],delete s[Ny],delete s[Iy])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function mm(i){return i.tag===5||i.tag===3||i.tag===4}function gm(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||mm(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Xc(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=qa));else if(d!==4&&(i=i.child,i!==null))for(Xc(i,s,l),i=i.sibling;i!==null;)Xc(i,s,l),i=i.sibling}function $c(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for($c(i,s,l),i=i.sibling;i!==null;)$c(i,s,l),i=i.sibling}var mn=null,mi=!1;function Ar(i,s,l){for(l=l.child;l!==null;)vm(i,s,l),l=l.sibling}function vm(i,s,l){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(st,l)}catch{}switch(l.tag){case 5:Mn||Gs(l,s);case 6:var d=mn,p=mi;mn=null,Ar(i,s,l),mn=d,mi=p,mn!==null&&(mi?(i=mn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):mn.removeChild(l.stateNode));break;case 18:mn!==null&&(mi?(i=mn,l=l.stateNode,i.nodeType===8?sc(i.parentNode,l):i.nodeType===1&&sc(i,l),Co(i)):sc(mn,l.stateNode));break;case 4:d=mn,p=mi,mn=l.stateNode.containerInfo,mi=!0,Ar(i,s,l),mn=d,mi=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&Vc(l,s,A),p=p.next}while(p!==d)}Ar(i,s,l);break;case 1:if(!Mn&&(Gs(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(F){Kt(l,s,F)}Ar(i,s,l);break;case 21:Ar(i,s,l);break;case 22:l.mode&1?(Mn=(d=Mn)||l.memoizedState!==null,Ar(i,s,l),Mn=d):Ar(i,s,l);break;default:Ar(i,s,l)}}function _m(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new Ky),s.forEach(function(d){var p=o0.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function gi(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var _=i,A=s,F=A;e:for(;F!==null;){switch(F.tag){case 5:mn=F.stateNode,mi=!1;break e;case 3:mn=F.stateNode.containerInfo,mi=!0;break e;case 4:mn=F.stateNode.containerInfo,mi=!0;break e}F=F.return}if(mn===null)throw Error(t(160));vm(_,A,p),mn=null,mi=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(se){Kt(p,s,se)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ym(s,i),s=s.sibling}function ym(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(gi(s,i),Ni(i),d&4){try{Zo(3,i,i.return),_l(3,i)}catch(qe){Kt(i,i.return,qe)}try{Zo(5,i,i.return)}catch(qe){Kt(i,i.return,qe)}}break;case 1:gi(s,i),Ni(i),d&512&&l!==null&&Gs(l,l.return);break;case 5:if(gi(s,i),Ni(i),d&512&&l!==null&&Gs(l,l.return),i.flags&32){var p=i.stateNode;try{et(p,"")}catch(qe){Kt(i,i.return,qe)}}if(d&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,A=l!==null?l.memoizedProps:_,F=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{F==="input"&&_.type==="radio"&&_.name!=null&&ht(p,_),ut(F,A);var se=ut(F,_);for(A=0;A<H.length;A+=2){var we=H[A],Te=H[A+1];we==="style"?tt(p,Te):we==="dangerouslySetInnerHTML"?Qe(p,Te):we==="children"?et(p,Te):P(p,we,Te,se)}switch(F){case"input":dt(p,_);break;case"textarea":ge(p,_);break;case"select":var Se=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var He=_.value;He!=null?U(p,!!_.multiple,He,!1):Se!==!!_.multiple&&(_.defaultValue!=null?U(p,!!_.multiple,_.defaultValue,!0):U(p,!!_.multiple,_.multiple?[]:"",!1))}p[Bo]=_}catch(qe){Kt(i,i.return,qe)}}break;case 6:if(gi(s,i),Ni(i),d&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(qe){Kt(i,i.return,qe)}}break;case 3:if(gi(s,i),Ni(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Co(s.containerInfo)}catch(qe){Kt(i,i.return,qe)}break;case 4:gi(s,i),Ni(i);break;case 13:gi(s,i),Ni(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(qc=Q())),d&4&&_m(i);break;case 22:if(we=l!==null&&l.memoizedState!==null,i.mode&1?(Mn=(se=Mn)||we,gi(s,i),Mn=se):gi(s,i),Ni(i),d&8192){if(se=i.memoizedState!==null,(i.stateNode.isHidden=se)&&!we&&(i.mode&1)!==0)for(Ve=i,we=i.child;we!==null;){for(Te=Ve=we;Ve!==null;){switch(Se=Ve,He=Se.child,Se.tag){case 0:case 11:case 14:case 15:Zo(4,Se,Se.return);break;case 1:Gs(Se,Se.return);var je=Se.stateNode;if(typeof je.componentWillUnmount=="function"){d=Se,l=Se.return;try{s=d,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(qe){Kt(d,l,qe)}}break;case 5:Gs(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Em(Te);continue}}He!==null?(He.return=Se,Ve=He):Em(Te)}we=we.sibling}e:for(we=null,Te=i;;){if(Te.tag===5){if(we===null){we=Te;try{p=Te.stateNode,se?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(F=Te.stateNode,H=Te.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Be("display",A))}catch(qe){Kt(i,i.return,qe)}}}else if(Te.tag===6){if(we===null)try{Te.stateNode.nodeValue=se?"":Te.memoizedProps}catch(qe){Kt(i,i.return,qe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===i)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===i)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===i)break e;we===Te&&(we=null),Te=Te.return}we===Te&&(we=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:gi(s,i),Ni(i),d&4&&_m(i);break;case 21:break;default:gi(s,i),Ni(i)}}function Ni(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(mm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(et(p,""),d.flags&=-33);var _=gm(i);$c(i,_,p);break;case 3:case 4:var A=d.stateNode.containerInfo,F=gm(i);Xc(i,F,A);break;default:throw Error(t(161))}}catch(H){Kt(i,i.return,H)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function Qy(i,s,l){Ve=i,xm(i)}function xm(i,s,l){for(var d=(i.mode&1)!==0;Ve!==null;){var p=Ve,_=p.child;if(p.tag===22&&d){var A=p.memoizedState!==null||vl;if(!A){var F=p.alternate,H=F!==null&&F.memoizedState!==null||Mn;F=vl;var se=Mn;if(vl=A,(Mn=H)&&!se)for(Ve=p;Ve!==null;)A=Ve,H=A.child,A.tag===22&&A.memoizedState!==null?Mm(p):H!==null?(H.return=A,Ve=H):Mm(p);for(;_!==null;)Ve=_,xm(_),_=_.sibling;Ve=p,vl=F,Mn=se}Sm(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Ve=_):Sm(i)}}function Sm(i){for(;Ve!==null;){var s=Ve;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mn||_l(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Mn)if(l===null)d.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:pi(s.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Ep(s,_,d);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Ep(s,A,l)}break;case 5:var F=s.stateNode;if(l===null&&s.flags&4){l=F;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var se=s.alternate;if(se!==null){var we=se.memoizedState;if(we!==null){var Te=we.dehydrated;Te!==null&&Co(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||s.flags&512&&Wc(s)}catch(Se){Kt(s,s.return,Se)}}if(s===i){Ve=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ve=l;break}Ve=s.return}}function Em(i){for(;Ve!==null;){var s=Ve;if(s===i){Ve=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ve=l;break}Ve=s.return}}function Mm(i){for(;Ve!==null;){var s=Ve;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{_l(4,s)}catch(H){Kt(s,l,H)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch(H){Kt(s,p,H)}}var _=s.return;try{Wc(s)}catch(H){Kt(s,_,H)}break;case 5:var A=s.return;try{Wc(s)}catch(H){Kt(s,A,H)}}}catch(H){Kt(s,s.return,H)}if(s===i){Ve=null;break}var F=s.sibling;if(F!==null){F.return=s.return,Ve=F;break}Ve=s.return}}var Jy=Math.ceil,yl=w.ReactCurrentDispatcher,jc=w.ReactCurrentOwner,ii=w.ReactCurrentBatchConfig,Rt=0,dn=null,Jt=null,gn=0,Yn=0,Hs=Sr(0),rn=0,Qo=null,ts=0,xl=0,Yc=0,Jo=null,zn=null,qc=0,Vs=1/0,ji=null,Sl=!1,Kc=null,br=null,El=!1,Rr=null,Ml=0,ea=0,Zc=null,wl=-1,Tl=0;function Dn(){return(Rt&6)!==0?Q():wl!==-1?wl:wl=Q()}function Cr(i){return(i.mode&1)===0?1:(Rt&2)!==0&&gn!==0?gn&-gn:Fy.transition!==null?(Tl===0&&(Tl=kt()),Tl):(i=bt,i!==0||(i=window.event,i=i===void 0?16:Tf(i.type)),i)}function vi(i,s,l,d){if(50<ea)throw ea=0,Zc=null,Error(t(185));ln(i,l,d),((Rt&2)===0||i!==dn)&&(i===dn&&((Rt&2)===0&&(xl|=l),rn===4&&Pr(i,gn)),Bn(i,d),l===1&&Rt===0&&(s.mode&1)===0&&(Vs=Q()+500,Ja&&Mr()))}function Bn(i,s){var l=i.callbackNode;Pn(i,s);var d=_n(i,i===dn?gn:0);if(d===0)l!==null&&L(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&L(l),s===1)i.tag===0?Uy(Tm.bind(null,i)):cp(Tm.bind(null,i)),Ly(function(){(Rt&6)===0&&Mr()}),l=null;else{switch(Ci(d)){case 1:l=be;break;case 4:l=Ue;break;case 16:l=Ge;break;case 536870912:l=lt;break;default:l=Ge}l=Nm(l,wm.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function wm(i,s){if(wl=-1,Tl=0,(Rt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ws()&&i.callbackNode!==l)return null;var d=_n(i,i===dn?gn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=Al(i,d);else{s=d;var p=Rt;Rt|=2;var _=bm();(dn!==i||gn!==s)&&(ji=null,Vs=Q()+500,is(i,s));do try{n0();break}catch(F){Am(i,F)}while(!0);mc(),yl.current=_,Rt=p,Jt!==null?s=0:(dn=null,gn=0,s=rn)}if(s!==0){if(s===2&&(p=zi(i),p!==0&&(d=p,s=Qc(i,p))),s===1)throw l=Qo,is(i,0),Pr(i,d),Bn(i,Q()),l;if(s===6)Pr(i,d);else{if(p=i.current.alternate,(d&30)===0&&!e0(p)&&(s=Al(i,d),s===2&&(_=zi(i),_!==0&&(d=_,s=Qc(i,_))),s===1))throw l=Qo,is(i,0),Pr(i,d),Bn(i,Q()),l;switch(i.finishedWork=p,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:rs(i,zn,ji);break;case 3:if(Pr(i,d),(d&130023424)===d&&(s=qc+500-Q(),10<s)){if(_n(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){Dn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=rc(rs.bind(null,i,zn,ji),s);break}rs(i,zn,ji);break;case 4:if(Pr(i,d),(d&4194240)===d)break;for(s=i.eventTimes,p=-1;0<d;){var A=31-mt(d);_=1<<A,A=s[A],A>p&&(p=A),d&=~_}if(d=p,d=Q()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Jy(d/1960))-d,10<d){i.timeoutHandle=rc(rs.bind(null,i,zn,ji),d);break}rs(i,zn,ji);break;case 5:rs(i,zn,ji);break;default:throw Error(t(329))}}}return Bn(i,Q()),i.callbackNode===l?wm.bind(null,i):null}function Qc(i,s){var l=Jo;return i.current.memoizedState.isDehydrated&&(is(i,s).flags|=256),i=Al(i,s),i!==2&&(s=zn,zn=l,s!==null&&Jc(s)),i}function Jc(i){zn===null?zn=i:zn.push.apply(zn,i)}function e0(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],_=p.getSnapshot;p=p.value;try{if(!hi(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Pr(i,s){for(s&=~Yc,s&=~xl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-mt(s),d=1<<l;i[l]=-1,s&=~d}}function Tm(i){if((Rt&6)!==0)throw Error(t(327));Ws();var s=_n(i,0);if((s&1)===0)return Bn(i,Q()),null;var l=Al(i,s);if(i.tag!==0&&l===2){var d=zi(i);d!==0&&(s=d,l=Qc(i,d))}if(l===1)throw l=Qo,is(i,0),Pr(i,s),Bn(i,Q()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,rs(i,zn,ji),Bn(i,Q()),null}function ed(i,s){var l=Rt;Rt|=1;try{return i(s)}finally{Rt=l,Rt===0&&(Vs=Q()+500,Ja&&Mr())}}function ns(i){Rr!==null&&Rr.tag===0&&(Rt&6)===0&&Ws();var s=Rt;Rt|=1;var l=ii.transition,d=bt;try{if(ii.transition=null,bt=1,i)return i()}finally{bt=d,ii.transition=l,Rt=s,(Rt&6)===0&&Mr()}}function td(){Yn=Hs.current,Gt(Hs)}function is(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,Py(l)),Jt!==null)for(l=Jt.return;l!==null;){var d=l;switch(cc(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Za();break;case 3:zs(),Gt(Fn),Gt(xn),Mc();break;case 5:Sc(d);break;case 4:zs();break;case 13:Gt(Xt);break;case 19:Gt(Xt);break;case 10:gc(d.type._context);break;case 22:case 23:td()}l=l.return}if(dn=i,Jt=i=Lr(i.current,null),gn=Yn=s,rn=0,Qo=null,Yc=xl=ts=0,zn=Jo=null,Qr!==null){for(s=0;s<Qr.length;s++)if(l=Qr[s],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,_=l.pending;if(_!==null){var A=_.next;_.next=p,d.next=A}l.pending=d}Qr=null}return i}function Am(i,s){do{var l=Jt;try{if(mc(),ul.current=fl,cl){for(var d=$t.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}cl=!1}if(es=0,cn=nn=$t=null,$o=!1,jo=0,jc.current=null,l===null||l.return===null){rn=1,Qo=s,Jt=null;break}e:{var _=i,A=l.return,F=l,H=s;if(s=gn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var se=H,we=F,Te=we.tag;if((we.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=we.alternate;Se?(we.updateQueue=Se.updateQueue,we.memoizedState=Se.memoizedState,we.lanes=Se.lanes):(we.updateQueue=null,we.memoizedState=null)}var He=Zp(A);if(He!==null){He.flags&=-257,Qp(He,A,F,_,s),He.mode&1&&Kp(_,se,s),s=He,H=se;var je=s.updateQueue;if(je===null){var qe=new Set;qe.add(H),s.updateQueue=qe}else je.add(H);break e}else{if((s&1)===0){Kp(_,se,s),nd();break e}H=Error(t(426))}}else if(Wt&&F.mode&1){var Zt=Zp(A);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Qp(Zt,A,F,_,s),fc(Bs(H,F));break e}}_=H=Bs(H,F),rn!==4&&(rn=2),Jo===null?Jo=[_]:Jo.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var K=Yp(_,H,s);Sp(_,K);break e;case 1:F=H;var W=_.type,ee=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(br===null||!br.has(ee)))){_.flags|=65536,s&=-s,_.lanes|=s;var Pe=qp(_,F,s);Sp(_,Pe);break e}}_=_.return}while(_!==null)}Cm(l)}catch(Je){s=Je,Jt===l&&l!==null&&(Jt=l=l.return);continue}break}while(!0)}function bm(){var i=yl.current;return yl.current=fl,i===null?fl:i}function nd(){(rn===0||rn===3||rn===2)&&(rn=4),dn===null||(ts&268435455)===0&&(xl&268435455)===0||Pr(dn,gn)}function Al(i,s){var l=Rt;Rt|=2;var d=bm();(dn!==i||gn!==s)&&(ji=null,is(i,s));do try{t0();break}catch(p){Am(i,p)}while(!0);if(mc(),Rt=l,yl.current=d,Jt!==null)throw Error(t(261));return dn=null,gn=0,rn}function t0(){for(;Jt!==null;)Rm(Jt)}function n0(){for(;Jt!==null&&!$();)Rm(Jt)}function Rm(i){var s=Dm(i.alternate,i,Yn);i.memoizedProps=i.pendingProps,s===null?Cm(i):Jt=s,jc.current=null}function Cm(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=Yy(l,s,Yn),l!==null){Jt=l;return}}else{if(l=qy(l,s),l!==null){l.flags&=32767,Jt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{rn=6,Jt=null;return}}if(s=s.sibling,s!==null){Jt=s;return}Jt=s=i}while(s!==null);rn===0&&(rn=5)}function rs(i,s,l){var d=bt,p=ii.transition;try{ii.transition=null,bt=1,i0(i,s,l,d)}finally{ii.transition=p,bt=d}return null}function i0(i,s,l,d){do Ws();while(Rr!==null);if((Rt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(pn(i,_),i===dn&&(Jt=dn=null,gn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||El||(El=!0,Nm(Ge,function(){return Ws(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ii.transition,ii.transition=null;var A=bt;bt=1;var F=Rt;Rt|=4,jc.current=null,Zy(i,l),ym(l,i),My(nc),ka=!!tc,nc=tc=null,i.current=l,Qy(l),oe(),Rt=F,bt=A,ii.transition=_}else i.current=l;if(El&&(El=!1,Rr=i,Ml=p),_=i.pendingLanes,_===0&&(br=null),Et(l.stateNode),Bn(i,Q()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(Sl)throw Sl=!1,i=Kc,Kc=null,i;return(Ml&1)!==0&&i.tag!==0&&Ws(),_=i.pendingLanes,(_&1)!==0?i===Zc?ea++:(ea=0,Zc=i):ea=0,Mr(),null}function Ws(){if(Rr!==null){var i=Ci(Ml),s=ii.transition,l=bt;try{if(ii.transition=null,bt=16>i?16:i,Rr===null)var d=!1;else{if(i=Rr,Rr=null,Ml=0,(Rt&6)!==0)throw Error(t(331));var p=Rt;for(Rt|=4,Ve=i.current;Ve!==null;){var _=Ve,A=_.child;if((Ve.flags&16)!==0){var F=_.deletions;if(F!==null){for(var H=0;H<F.length;H++){var se=F[H];for(Ve=se;Ve!==null;){var we=Ve;switch(we.tag){case 0:case 11:case 15:Zo(8,we,_)}var Te=we.child;if(Te!==null)Te.return=we,Ve=Te;else for(;Ve!==null;){we=Ve;var Se=we.sibling,He=we.return;if(pm(we),we===se){Ve=null;break}if(Se!==null){Se.return=He,Ve=Se;break}Ve=He}}}var je=_.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var Zt=qe.sibling;qe.sibling=null,qe=Zt}while(qe!==null)}}Ve=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,Ve=A;else e:for(;Ve!==null;){if(_=Ve,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Zo(9,_,_.return)}var K=_.sibling;if(K!==null){K.return=_.return,Ve=K;break e}Ve=_.return}}var W=i.current;for(Ve=W;Ve!==null;){A=Ve;var ee=A.child;if((A.subtreeFlags&2064)!==0&&ee!==null)ee.return=A,Ve=ee;else e:for(A=W;Ve!==null;){if(F=Ve,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:_l(9,F)}}catch(Je){Kt(F,F.return,Je)}if(F===A){Ve=null;break e}var Pe=F.sibling;if(Pe!==null){Pe.return=F.return,Ve=Pe;break e}Ve=F.return}}if(Rt=p,Mr(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(st,i)}catch{}d=!0}return d}finally{bt=l,ii.transition=s}}return!1}function Pm(i,s,l){s=Bs(l,s),s=Yp(i,s,1),i=Tr(i,s,1),s=Dn(),i!==null&&(ln(i,1,s),Bn(i,s))}function Kt(i,s,l){if(i.tag===3)Pm(i,i,l);else for(;s!==null;){if(s.tag===3){Pm(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(br===null||!br.has(d))){i=Bs(l,i),i=qp(s,i,1),s=Tr(s,i,1),i=Dn(),s!==null&&(ln(s,1,i),Bn(s,i));break}}s=s.return}}function r0(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=Dn(),i.pingedLanes|=i.suspendedLanes&l,dn===i&&(gn&l)===l&&(rn===4||rn===3&&(gn&130023424)===gn&&500>Q()-qc?is(i,0):Yc|=l),Bn(i,s)}function Lm(i,s){s===0&&((i.mode&1)===0?s=1:(s=qt,qt<<=1,(qt&130023424)===0&&(qt=4194304)));var l=Dn();i=Wi(i,s),i!==null&&(ln(i,s,l),Bn(i,l))}function s0(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Lm(i,l)}function o0(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Lm(i,l)}var Dm;Dm=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Fn.current)On=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return On=!1,jy(i,s,l);On=(i.flags&131072)!==0}else On=!1,Wt&&(s.flags&1048576)!==0&&dp(s,tl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;gl(i,s),i=s.pendingProps;var p=Ds(s,xn.current);Os(s,l),p=Ac(null,s,d,i,p,l);var _=bc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,kn(d)?(_=!0,Qa(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,yc(s),p.updater=pl,s.stateNode=p,p._reactInternals=s,Nc(s,d,i,l),s=kc(null,s,d,!0,_,l)):(s.tag=0,Wt&&_&&uc(s),Ln(null,s,p,l),s=s.child),s;case 16:d=s.elementType;e:{switch(gl(i,s),i=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=l0(d),i=pi(d,i),p){case 0:s=Fc(null,s,d,i,l);break e;case 1:s=rm(null,s,d,i,l);break e;case 11:s=Jp(null,s,d,i,l);break e;case 14:s=em(null,s,d,pi(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:pi(d,p),Fc(i,s,d,p,l);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:pi(d,p),rm(i,s,d,p,l);case 3:e:{if(sm(s),i===null)throw Error(t(387));d=s.pendingProps,_=s.memoizedState,p=_.element,xp(i,s),al(s,d,null,l);var A=s.memoizedState;if(d=A.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Bs(Error(t(423)),s),s=om(i,s,d,l,p);break e}else if(d!==p){p=Bs(Error(t(424)),s),s=om(i,s,d,l,p);break e}else for(jn=xr(s.stateNode.containerInfo.firstChild),$n=s,Wt=!0,fi=null,l=_p(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Us(),d===p){s=$i(i,s,l);break e}Ln(i,s,d,l)}s=s.child}return s;case 5:return Mp(s),i===null&&hc(s),d=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,A=p.children,ic(d,p)?A=null:_!==null&&ic(d,_)&&(s.flags|=32),im(i,s),Ln(i,s,A,l),s.child;case 6:return i===null&&hc(s),null;case 13:return am(i,s,l);case 4:return xc(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=Fs(s,null,d,l):Ln(i,s,d,l),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:pi(d,p),Jp(i,s,d,p,l);case 7:return Ln(i,s,s.pendingProps,l),s.child;case 8:return Ln(i,s,s.pendingProps.children,l),s.child;case 12:return Ln(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,_=s.memoizedProps,A=p.value,Ot(rl,d._currentValue),d._currentValue=A,_!==null)if(hi(_.value,A)){if(_.children===p.children&&!Fn.current){s=$i(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var F=_.dependencies;if(F!==null){A=_.child;for(var H=F.firstContext;H!==null;){if(H.context===d){if(_.tag===1){H=Xi(-1,l&-l),H.tag=2;var se=_.updateQueue;if(se!==null){se=se.shared;var we=se.pending;we===null?H.next=H:(H.next=we.next,we.next=H),se.pending=H}}_.lanes|=l,H=_.alternate,H!==null&&(H.lanes|=l),vc(_.return,l,s),F.lanes|=l;break}H=H.next}}else if(_.tag===10)A=_.type===s.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,F=A.alternate,F!==null&&(F.lanes|=l),vc(A,l,s),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===s){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Ln(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,Os(s,l),p=ti(p),d=d(p),s.flags|=1,Ln(i,s,d,l),s.child;case 14:return d=s.type,p=pi(d,s.pendingProps),p=pi(d.type,p),em(i,s,d,p,l);case 15:return tm(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:pi(d,p),gl(i,s),s.tag=1,kn(d)?(i=!0,Qa(s)):i=!1,Os(s,l),$p(s,d,p),Nc(s,d,p,l),kc(null,s,d,!0,i,l);case 19:return um(i,s,l);case 22:return nm(i,s,l)}throw Error(t(156,s.tag))};function Nm(i,s){return Ia(i,s)}function a0(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(i,s,l,d){return new a0(i,s,l,d)}function id(i){return i=i.prototype,!(!i||!i.isReactComponent)}function l0(i){if(typeof i=="function")return id(i)?1:0;if(i!=null){if(i=i.$$typeof,i===te)return 11;if(i===de)return 14}return 2}function Lr(i,s){var l=i.alternate;return l===null?(l=ri(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function bl(i,s,l,d,p,_){var A=2;if(d=i,typeof i=="function")id(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case D:return ss(l.children,p,_,s);case k:A=8,p|=8;break;case C:return i=ri(12,l,s,p|2),i.elementType=C,i.lanes=_,i;case Y:return i=ri(13,l,s,p),i.elementType=Y,i.lanes=_,i;case Z:return i=ri(19,l,s,p),i.elementType=Z,i.lanes=_,i;case he:return Rl(l,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case T:A=10;break e;case z:A=9;break e;case te:A=11;break e;case de:A=14;break e;case q:A=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ri(A,l,s,p),s.elementType=i,s.type=d,s.lanes=_,s}function ss(i,s,l,d){return i=ri(7,i,d,s),i.lanes=l,i}function Rl(i,s,l,d){return i=ri(22,i,d,s),i.elementType=he,i.lanes=l,i.stateNode={isHidden:!1},i}function rd(i,s,l){return i=ri(6,i,null,s),i.lanes=l,i}function sd(i,s,l){return s=ri(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function u0(i,s,l,d,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function od(i,s,l,d,p,_,A,F,H){return i=new u0(i,s,l,F,H),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ri(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(_),i}function c0(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function Im(i){if(!i)return Er;i=i._reactInternals;e:{if(Ri(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(kn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(kn(l))return lp(i,l,s)}return s}function Um(i,s,l,d,p,_,A,F,H){return i=od(l,d,!0,i,p,_,A,F,H),i.context=Im(null),l=i.current,d=Dn(),p=Cr(l),_=Xi(d,p),_.callback=s??null,Tr(l,_,p),i.current.lanes=p,ln(i,p,d),Bn(i,d),i}function Cl(i,s,l,d){var p=s.current,_=Dn(),A=Cr(p);return l=Im(l),s.context===null?s.context=l:s.pendingContext=l,s=Xi(_,A),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Tr(p,s,A),i!==null&&(vi(i,p,A,_),ol(i,p,A)),A}function Pl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Fm(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function ad(i,s){Fm(i,s),(i=i.alternate)&&Fm(i,s)}function d0(){return null}var km=typeof reportError=="function"?reportError:function(i){console.error(i)};function ld(i){this._internalRoot=i}Ll.prototype.render=ld.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Cl(i,s,null,null)},Ll.prototype.unmount=ld.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ns(function(){Cl(null,i,null,null)}),s[Bi]=null}};function Ll(i){this._internalRoot=i}Ll.prototype.unstable_scheduleHydration=function(i){if(i){var s=xf();i={blockedOn:null,target:i,priority:s};for(var l=0;l<vr.length&&s!==0&&s<vr[l].priority;l++);vr.splice(l,0,i),l===0&&Mf(i)}};function ud(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Dl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Om(){}function h0(i,s,l,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var se=Pl(A);_.call(se)}}var A=Um(s,d,i,0,null,!1,!1,"",Om);return i._reactRootContainer=A,i[Bi]=A.current,Oo(i.nodeType===8?i.parentNode:i),ns(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var F=d;d=function(){var se=Pl(H);F.call(se)}}var H=od(i,0,!1,null,null,!1,!1,"",Om);return i._reactRootContainer=H,i[Bi]=H.current,Oo(i.nodeType===8?i.parentNode:i),ns(function(){Cl(s,H,l,d)}),H}function Nl(i,s,l,d,p){var _=l._reactRootContainer;if(_){var A=_;if(typeof p=="function"){var F=p;p=function(){var H=Pl(A);F.call(H)}}Cl(s,A,i,p)}else A=h0(l,s,i,p,d);return Pl(A)}_f=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=xt(s.pendingLanes);l!==0&&(un(s,l|1),Bn(s,Q()),(Rt&6)===0&&(Vs=Q()+500,Mr()))}break;case 13:ns(function(){var d=Wi(i,1);if(d!==null){var p=Dn();vi(d,i,1,p)}}),ad(i,1)}},Iu=function(i){if(i.tag===13){var s=Wi(i,134217728);if(s!==null){var l=Dn();vi(s,i,134217728,l)}ad(i,134217728)}},yf=function(i){if(i.tag===13){var s=Cr(i),l=Wi(i,s);if(l!==null){var d=Dn();vi(l,i,s,d)}ad(i,s)}},xf=function(){return bt},Sf=function(i,s){var l=bt;try{return bt=i,s()}finally{bt=l}},Ie=function(i,s,l){switch(s){case"input":if(dt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var p=Ka(d);if(!p)throw Error(t(90));St(d),dt(d,p)}}}break;case"textarea":ge(i,l);break;case"select":s=l.value,s!=null&&U(i,!!l.multiple,s,!1)}},zt=ed,tn=ns;var f0={usingClientEntryPoint:!1,Events:[Go,Ps,Ka,ke,ft,ed]},ta={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p0={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Da(i),i===null?null:i.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||d0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{st=Il.inject(p0),Ye=Il}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0,Gn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(s))throw Error(t(200));return c0(i,s,null,l)},Gn.createRoot=function(i,s){if(!ud(i))throw Error(t(299));var l=!1,d="",p=km;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=od(i,1,!1,null,null,l,!1,d,p),i[Bi]=s.current,Oo(i.nodeType===8?i.parentNode:i),new ld(s)},Gn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Da(s),i=i===null?null:i.stateNode,i},Gn.flushSync=function(i){return ns(i)},Gn.hydrate=function(i,s,l){if(!Dl(s))throw Error(t(200));return Nl(null,i,s,!0,l)},Gn.hydrateRoot=function(i,s,l){if(!ud(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,_="",A=km;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=Um(s,null,i,1,l??null,p,!1,_,A),i[Bi]=s.current,Oo(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Ll(s)},Gn.render=function(i,s,l){if(!Dl(s))throw Error(t(200));return Nl(null,i,s,!1,l)},Gn.unmountComponentAtNode=function(i){if(!Dl(i))throw Error(t(40));return i._reactRootContainer?(ns(function(){Nl(null,null,i,!1,function(){i._reactRootContainer=null,i[Bi]=null})}),!0):!1},Gn.unstable_batchedUpdates=ed,Gn.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!Dl(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Nl(i,s,l,!1,d)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var $m;function M0(){if($m)return hd.exports;$m=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=E0(),hd.exports}var jm;function w0(){if(jm)return Ul;jm=1;var r=M0();return Ul.createRoot=r.createRoot,Ul.hydrateRoot=r.hydrateRoot,Ul}var T0=w0();const A0=Qh(T0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="176",b0=0,Ym=1,R0=2,bv=1,C0=2,Ji=3,Wr=0,Vn=1,tr=2,Gr=0,lo=1,qm=2,Km=3,Zm=4,P0=5,ms=100,L0=101,D0=102,N0=103,I0=104,U0=200,F0=201,k0=202,O0=203,ih=204,rh=205,z0=206,B0=207,G0=208,H0=209,V0=210,W0=211,X0=212,$0=213,j0=214,sh=0,oh=1,ah=2,ho=3,lh=4,uh=5,ch=6,dh=7,Rv=0,Y0=1,q0=2,Hr=0,K0=1,Z0=2,Q0=3,J0=4,ex=5,tx=6,nx=7,Cv=300,fo=301,po=302,hh=303,fh=304,bu=306,ph=1e3,vs=1001,mh=1002,Ai=1003,ix=1004,Fl=1005,Fi=1006,md=1007,_s=1008,lr=1009,Pv=1010,Lv=1011,va=1012,tf=1013,ys=1014,ir=1015,Sa=1016,nf=1017,rf=1018,_a=1020,Dv=35902,Nv=1021,Iv=1022,Ti=1023,ya=1026,xa=1027,Uv=1028,sf=1029,Fv=1030,of=1031,af=1033,pu=33776,mu=33777,gu=33778,vu=33779,gh=35840,vh=35841,_h=35842,yh=35843,xh=36196,Sh=37492,Eh=37496,Mh=37808,wh=37809,Th=37810,Ah=37811,bh=37812,Rh=37813,Ch=37814,Ph=37815,Lh=37816,Dh=37817,Nh=37818,Ih=37819,Uh=37820,Fh=37821,_u=36492,kh=36494,Oh=36495,kv=36283,zh=36284,Bh=36285,Gh=36286,rx=3200,sx=3201,ox=0,ax=1,Br="",ai="srgb",mo="srgb-linear",Eu="linear",It="srgb",Xs=7680,Qm=519,lx=512,ux=513,cx=514,Ov=515,dx=516,hx=517,fx=518,px=519,Jm=35044,eg="300 es",rr=2e3,Mu=2001;class yo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=Math.PI/180,Hh=180/Math.PI;function Ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function mx(r,e){return(r%e+e)%e}function vd(r,e,t){return(1-t)*r+t*e}function ia(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(e=0,t=0){Ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*o+e.x,this.y=a*o+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,n,o,a,u,c,h,f){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,c,h,f)}set(e,t,n,o,a,u,c,h,f){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=a,m[5]=h,m[6]=n,m[7]=u,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],c=n[3],h=n[6],f=n[1],m=n[4],g=n[7],v=n[2],x=n[5],E=n[8],M=o[0],S=o[3],y=o[6],N=o[1],P=o[4],w=o[7],I=o[2],b=o[5],D=o[8];return a[0]=u*M+c*N+h*I,a[3]=u*S+c*P+h*b,a[6]=u*y+c*w+h*D,a[1]=f*M+m*N+g*I,a[4]=f*S+m*P+g*b,a[7]=f*y+m*w+g*D,a[2]=v*M+x*N+E*I,a[5]=v*S+x*P+E*b,a[8]=v*y+x*w+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8];return t*u*m-t*c*f-n*a*m+n*c*h+o*a*f-o*u*h}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=m*u-c*f,v=c*h-m*a,x=f*a-u*h,E=t*g+n*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*f-m*n)*M,e[2]=(c*n-o*u)*M,e[3]=v*M,e[4]=(m*t-o*h)*M,e[5]=(o*a-c*t)*M,e[6]=x*M,e[7]=(n*h-f*t)*M,e[8]=(u*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,u,c){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*u+f*c)+u+e,-o*f,o*h,-o*(-f*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(_d.makeScale(e,t)),this}rotate(e){return this.premultiply(_d.makeRotation(-e)),this}translate(e,t){return this.premultiply(_d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _d=new gt;function zv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function wu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gx(){const r=wu("canvas");return r.style.display="block",r}const tg={};function yu(r){r in tg||(tg[r]=!0,console.warn(r))}function vx(r,e,t){return new Promise(function(n,o){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function _x(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ng=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ig=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xx(){const r={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===It&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=uo(o.r),o.g=uo(o.g),o.b=uo(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Br?Eu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[mo]:{primaries:e,whitePoint:n,transfer:Eu,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:n,transfer:It,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),r}const Lt=xx();function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $s;class Sx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=wu("canvas")),$s.width=e.width,$s.height=e.height;const o=$s.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=$s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=or(a[u]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ex=0;class lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(yd(o[u].image)):a.push(yd(o[u]))}else a=yd(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function yd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mx=0;class Wn extends yo{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,n=vs,o=vs,a=Fi,u=_s,c=Ti,h=lr,f=Wn.DEFAULT_ANISOTROPY,m=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Ea(),this.name="",this.source=new lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Cv;Wn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,n=0,o=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const h=e.elements,f=h[0],m=h[4],g=h[8],v=h[1],x=h[5],E=h[9],M=h[2],S=h[6],y=h[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,w=(x+1)/2,I=(y+1)/2,b=(m+v)/4,D=(g+M)/4,k=(E+S)/4;return P>w&&P>I?P<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(P),o=b/n,a=D/n):w>I?w<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(w),n=b/o,a=k/o):I<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(I),n=D/a,o=k/a),this.set(n,o,a,t),this}let N=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(g-M)/N,this.z=(v-m)/N,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wx extends yo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const o={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const a=new Wn(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new lf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends wx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bv extends Wn{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tx extends Wn{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,u,c){let h=n[o+0],f=n[o+1],m=n[o+2],g=n[o+3];const v=a[u+0],x=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=M;return}if(g!==M||h!==v||f!==x||m!==E){let S=1-c;const y=h*v+f*x+m*E+g*M,N=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const I=Math.sqrt(P),b=Math.atan2(I,y*N);S=Math.sin(S*b)/I,c=Math.sin(c*b)/I}const w=c*N;if(h=h*S+v*w,f=f*S+x*w,m=m*S+E*w,g=g*S+M*w,S===1-c){const I=1/Math.sqrt(h*h+f*f+m*m+g*g);h*=I,f*=I,m*=I,g*=I}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,o,a,u){const c=n[o],h=n[o+1],f=n[o+2],m=n[o+3],g=a[u],v=a[u+1],x=a[u+2],E=a[u+3];return e[t]=c*E+m*g+h*x-f*v,e[t+1]=h*E+m*v+f*g-c*x,e[t+2]=f*E+m*x+c*v-h*g,e[t+3]=m*E-c*g-h*v-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,h=Math.sin,f=c(n/2),m=c(o/2),g=c(a/2),v=h(n/2),x=h(o/2),E=h(a/2);switch(u){case"XYZ":this._x=v*m*g+f*x*E,this._y=f*x*g-v*m*E,this._z=f*m*E+v*x*g,this._w=f*m*g-v*x*E;break;case"YXZ":this._x=v*m*g+f*x*E,this._y=f*x*g-v*m*E,this._z=f*m*E-v*x*g,this._w=f*m*g+v*x*E;break;case"ZXY":this._x=v*m*g-f*x*E,this._y=f*x*g+v*m*E,this._z=f*m*E+v*x*g,this._w=f*m*g-v*x*E;break;case"ZYX":this._x=v*m*g-f*x*E,this._y=f*x*g+v*m*E,this._z=f*m*E-v*x*g,this._w=f*m*g+v*x*E;break;case"YZX":this._x=v*m*g+f*x*E,this._y=f*x*g+v*m*E,this._z=f*m*E-v*x*g,this._w=f*m*g-v*x*E;break;case"XZY":this._x=v*m*g-f*x*E,this._y=f*x*g-v*m*E,this._z=f*m*E+v*x*g,this._w=f*m*g+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],u=t[1],c=t[5],h=t[9],f=t[2],m=t[6],g=t[10],v=n+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-h)*x,this._y=(a-f)*x,this._z=(u-o)*x}else if(n>c&&n>g){const x=2*Math.sqrt(1+n-c-g);this._w=(m-h)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+f)/x}else if(c>g){const x=2*Math.sqrt(1+c-n-g);this._w=(a-f)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+g-n-c);this._w=(u-o)/x,this._x=(a+f)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,u=e._w,c=t._x,h=t._y,f=t._z,m=t._w;return this._x=n*m+u*c+o*f-a*h,this._y=o*m+u*h+a*c-n*f,this._z=a*m+u*f+n*h-o*c,this._w=u*m-n*c-o*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=o,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*n+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(h),m=Math.atan2(f,c),g=Math.sin((1-t)*m)/f,v=Math.sin(t*m)/f;return this._w=u*g+this._w*v,this._x=n*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,n=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,u=e.y,c=e.z,h=e.w,f=2*(u*o-c*n),m=2*(c*t-a*o),g=2*(a*n-u*t);return this.x=t+h*f+u*g-c*m,this.y=n+h*m+c*f-a*g,this.z=o+h*g+a*m-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,u=t.x,c=t.y,h=t.z;return this.x=o*h-a*c,this.y=a*u-n*h,this.z=n*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xd=new ae,rg=new Ma;class wa{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(a,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ol.subVectors(this.max,ra),js.subVectors(e.a,ra),Ys.subVectors(e.b,ra),qs.subVectors(e.c,ra),Nr.subVectors(Ys,js),Ir.subVectors(qs,Ys),os.subVectors(js,qs);let t=[0,-Nr.z,Nr.y,0,-Ir.z,Ir.y,0,-os.z,os.y,Nr.z,0,-Nr.x,Ir.z,0,-Ir.x,os.z,0,-os.x,-Nr.y,Nr.x,0,-Ir.y,Ir.x,0,-os.y,os.x,0];return!Sd(t,js,Ys,qs,Ol)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,js,Ys,qs,Ol))?!1:(zl.crossVectors(Nr,Ir),t=[zl.x,zl.y,zl.z],Sd(t,js,Ys,qs,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],_i=new ae,kl=new wa,js=new ae,Ys=new ae,qs=new ae,Nr=new ae,Ir=new ae,os=new ae,ra=new ae,Ol=new ae,zl=new ae,as=new ae;function Sd(r,e,t,n,o){for(let a=0,u=r.length-3;a<=u;a+=3){as.fromArray(r,a);const c=o.x*Math.abs(as.x)+o.y*Math.abs(as.y)+o.z*Math.abs(as.z),h=e.dot(as),f=t.dot(as),m=n.dot(as);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>c)return!1}return!0}const Ax=new wa,sa=new ae,Ed=new ae;class Ta{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ax.setFromPoints(e).getCenter(n);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(sa,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Ed)),this.expandByPoint(sa.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new ae,Md=new ae,Bl=new ae,Ur=new ae,wd=new ae,Gl=new ae,Td=new ae;class Ru{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Md.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Md);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Bl),c=Ur.dot(this.direction),h=-Ur.dot(Bl),f=Ur.lengthSq(),m=Math.abs(1-u*u);let g,v,x,E;if(m>0)if(g=u*h-c,v=u*c-h,E=a*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,x=g*(g+u*v+2*c)+v*(u*g+v+2*h)+f}else v=a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v=-a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;else v<=-E?(g=Math.max(0,-(-u*a+c)),v=g>0?-a:Math.min(Math.max(-a,-h),a),x=-g*g+v*(v+2*h)+f):v<=E?(g=0,v=Math.min(Math.max(-a,-h),a),x=v*(v+2*h)+f):(g=Math.max(0,-(u*a+c)),v=g>0?a:Math.min(Math.max(-a,-h),a),x=-g*g+v*(v+2*h)+f);else v=u>0?-a:a,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Md).addScaledVector(Bl,v),x}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),o=qi.dot(qi)-n*n,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=n-u,h=n+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,u,c,h;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,o=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,o=(e.min.x-v.x)*f),m>=0?(a=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),n>u||a>o||((a>n||isNaN(n))&&(n=a),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),n>h||c>o)||((c>n||n!==n)&&(n=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,o,a){wd.subVectors(t,e),Gl.subVectors(n,e),Td.crossVectors(wd,Gl);let u=this.direction.dot(Td),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Ur.subVectors(this.origin,e);const h=c*this.direction.dot(Gl.crossVectors(Ur,Gl));if(h<0)return null;const f=c*this.direction.dot(wd.cross(Ur));if(f<0||h+f>u)return null;const m=-c*Ur.dot(Td);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,n,o,a,u,c,h,f,m,g,v,x,E,M,S){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,c,h,f,m,g,v,x,E,M,S)}set(e,t,n,o,a,u,c,h,f,m,g,v,x,E,M,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=o,y[1]=a,y[5]=u,y[9]=c,y[13]=h,y[2]=f,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=E,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),a=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),h=Math.cos(o),f=Math.sin(o),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=u*m,x=u*g,E=c*m,M=c*g;t[0]=h*m,t[4]=-h*g,t[8]=f,t[1]=x+E*f,t[5]=v-M*f,t[9]=-c*h,t[2]=M-v*f,t[6]=E+x*f,t[10]=u*h}else if(e.order==="YXZ"){const v=h*m,x=h*g,E=f*m,M=f*g;t[0]=v+M*c,t[4]=E*c-x,t[8]=u*f,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-E,t[6]=M+v*c,t[10]=u*h}else if(e.order==="ZXY"){const v=h*m,x=h*g,E=f*m,M=f*g;t[0]=v-M*c,t[4]=-u*g,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*m,t[9]=M-v*c,t[2]=-u*f,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const v=u*m,x=u*g,E=c*m,M=c*g;t[0]=h*m,t[4]=E*f-x,t[8]=v*f+M,t[1]=h*g,t[5]=M*f+v,t[9]=x*f-E,t[2]=-f,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,x=u*f,E=c*h,M=c*f;t[0]=h*m,t[4]=M-v*g,t[8]=E*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-f*m,t[6]=x*g+E,t[10]=v-M*g}else if(e.order==="XZY"){const v=u*h,x=u*f,E=c*h,M=c*f;t[0]=h*m,t[4]=-g,t[8]=f*m,t[1]=v*g+M,t[5]=u*m,t[9]=x*g-E,t[2]=E*g-x,t[6]=c*m,t[10]=M*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,Rx)}lookAt(e,t,n){const o=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Fr.crossVectors(n,qn),Fr.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Fr.crossVectors(n,qn)),Fr.normalize(),Hl.crossVectors(qn,Fr),o[0]=Fr.x,o[4]=Hl.x,o[8]=qn.x,o[1]=Fr.y,o[5]=Hl.y,o[9]=qn.y,o[2]=Fr.z,o[6]=Hl.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],c=n[4],h=n[8],f=n[12],m=n[1],g=n[5],v=n[9],x=n[13],E=n[2],M=n[6],S=n[10],y=n[14],N=n[3],P=n[7],w=n[11],I=n[15],b=o[0],D=o[4],k=o[8],C=o[12],T=o[1],z=o[5],te=o[9],Y=o[13],Z=o[2],de=o[6],q=o[10],he=o[14],V=o[3],ce=o[7],le=o[11],O=o[15];return a[0]=u*b+c*T+h*Z+f*V,a[4]=u*D+c*z+h*de+f*ce,a[8]=u*k+c*te+h*q+f*le,a[12]=u*C+c*Y+h*he+f*O,a[1]=m*b+g*T+v*Z+x*V,a[5]=m*D+g*z+v*de+x*ce,a[9]=m*k+g*te+v*q+x*le,a[13]=m*C+g*Y+v*he+x*O,a[2]=E*b+M*T+S*Z+y*V,a[6]=E*D+M*z+S*de+y*ce,a[10]=E*k+M*te+S*q+y*le,a[14]=E*C+M*Y+S*he+y*O,a[3]=N*b+P*T+w*Z+I*V,a[7]=N*D+P*z+w*de+I*ce,a[11]=N*k+P*te+w*q+I*le,a[15]=N*C+P*Y+w*he+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],u=e[1],c=e[5],h=e[9],f=e[13],m=e[2],g=e[6],v=e[10],x=e[14],E=e[3],M=e[7],S=e[11],y=e[15];return E*(+a*h*g-o*f*g-a*c*v+n*f*v+o*c*x-n*h*x)+M*(+t*h*x-t*f*v+a*u*v-o*u*x+o*f*m-a*h*m)+S*(+t*f*g-t*c*x-a*u*g+n*u*x+a*c*m-n*f*m)+y*(-o*c*m-t*h*g+t*c*v+o*u*g-n*u*v+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],h=e[6],f=e[7],m=e[8],g=e[9],v=e[10],x=e[11],E=e[12],M=e[13],S=e[14],y=e[15],N=g*S*f-M*v*f+M*h*x-c*S*x-g*h*y+c*v*y,P=E*v*f-m*S*f-E*h*x+u*S*x+m*h*y-u*v*y,w=m*M*f-E*g*f+E*c*x-u*M*x-m*c*y+u*g*y,I=E*g*h-m*M*h-E*c*v+u*M*v+m*c*S-u*g*S,b=t*N+n*P+o*w+a*I;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=N*D,e[1]=(M*v*a-g*S*a-M*o*x+n*S*x+g*o*y-n*v*y)*D,e[2]=(c*S*a-M*h*a+M*o*f-n*S*f-c*o*y+n*h*y)*D,e[3]=(g*h*a-c*v*a-g*o*f+n*v*f+c*o*x-n*h*x)*D,e[4]=P*D,e[5]=(m*S*a-E*v*a+E*o*x-t*S*x-m*o*y+t*v*y)*D,e[6]=(E*h*a-u*S*a-E*o*f+t*S*f+u*o*y-t*h*y)*D,e[7]=(u*v*a-m*h*a+m*o*f-t*v*f-u*o*x+t*h*x)*D,e[8]=w*D,e[9]=(E*g*a-m*M*a-E*n*x+t*M*x+m*n*y-t*g*y)*D,e[10]=(u*M*a-E*c*a+E*n*f-t*M*f-u*n*y+t*c*y)*D,e[11]=(m*c*a-u*g*a-m*n*f+t*g*f+u*n*x-t*c*x)*D,e[12]=I*D,e[13]=(m*M*o-E*g*o+E*n*v-t*M*v-m*n*S+t*g*S)*D,e[14]=(E*c*o-u*M*o-E*n*h+t*M*h+u*n*S-t*c*S)*D,e[15]=(u*g*o-m*c*o+m*n*h-t*g*h-u*n*v+t*c*v)*D,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,u=e.x,c=e.y,h=e.z,f=a*u,m=a*c;return this.set(f*u+n,f*c-o*h,f*h+o*c,0,f*c+o*h,m*c+n,m*h-o*u,0,f*h-o*c,m*h+o*u,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,u){return this.set(1,n,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,u=t._y,c=t._z,h=t._w,f=a+a,m=u+u,g=c+c,v=a*f,x=a*m,E=a*g,M=u*m,S=u*g,y=c*g,N=h*f,P=h*m,w=h*g,I=n.x,b=n.y,D=n.z;return o[0]=(1-(M+y))*I,o[1]=(x+w)*I,o[2]=(E-P)*I,o[3]=0,o[4]=(x-w)*b,o[5]=(1-(v+y))*b,o[6]=(S+N)*b,o[7]=0,o[8]=(E+P)*D,o[9]=(S-N)*D,o[10]=(1-(v+M))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=Ks.set(o[0],o[1],o[2]).length();const u=Ks.set(o[4],o[5],o[6]).length(),c=Ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],yi.copy(this);const f=1/a,m=1/u,g=1/c;return yi.elements[0]*=f,yi.elements[1]*=f,yi.elements[2]*=f,yi.elements[4]*=m,yi.elements[5]*=m,yi.elements[6]*=m,yi.elements[8]*=g,yi.elements[9]*=g,yi.elements[10]*=g,t.setFromRotationMatrix(yi),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,o,a,u,c=rr){const h=this.elements,f=2*a/(t-e),m=2*a/(n-o),g=(t+e)/(t-e),v=(n+o)/(n-o);let x,E;if(c===rr)x=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Mu)x=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,o,a,u,c=rr){const h=this.elements,f=1/(t-e),m=1/(n-o),g=1/(u-a),v=(t+e)*f,x=(n+o)*m;let E,M;if(c===rr)E=(u+a)*g,M=-2*g;else if(c===Mu)E=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ks=new ae,yi=new jt,bx=new ae(0,0,0),Rx=new ae(1,1,1),Fr=new ae,Hl=new ae,qn=new ae,sg=new jt,og=new Ma;class ur{constructor(e=0,t=0,n=0,o=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],h=o[1],f=o[5],m=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return og.setFromEuler(this),this.setFromQuaternion(og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cx=0;const ag=new ae,Zs=new Ma,Ki=new jt,Vl=new ae,oa=new ae,Px=new ae,Lx=new Ma,lg=new ae(1,0,0),ug=new ae(0,1,0),cg=new ae(0,0,1),dg={type:"added"},Dx={type:"removed"},Qs={type:"childadded",child:null},Ad={type:"childremoved",child:null};class An extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new ae,t=new ur,n=new Ma,o=new ae(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new gt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(lg,e)}rotateY(e){return this.rotateOnAxis(ug,e)}rotateZ(e){return this.rotateOnAxis(cg,e)}translateOnAxis(e,t){return ag.copy(e).applyQuaternion(this.quaternion),this.position.add(ag.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lg,e)}translateY(e){return this.translateOnAxis(ug,e)}translateZ(e){return this.translateOnAxis(cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vl.copy(e):Vl.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(oa,Vl,this.up):Ki.lookAt(Vl,oa,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(Ki),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dg),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dx),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dg),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,Px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,Lx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const g=h[f];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(a(e.materials,this.material[h]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(a(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),f=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),E.length>0&&(n.nodes=E)}return n.object=o,n;function u(c){const h=[];for(const f in c){const m=c[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}An.DEFAULT_UP=new ae(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new ae,Zi=new ae,bd=new ae,Qi=new ae,Js=new ae,eo=new ae,hg=new ae,Rd=new ae,Cd=new ae,Pd=new ae,Ld=new Qt,Dd=new Qt,Nd=new Qt;class Mi{constructor(e=new ae,t=new ae,n=new ae){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),xi.subVectors(e,t),o.cross(xi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){xi.subVectors(o,t),Zi.subVectors(n,t),bd.subVectors(e,t);const u=xi.dot(xi),c=xi.dot(Zi),h=xi.dot(bd),f=Zi.dot(Zi),m=Zi.dot(bd),g=u*f-c*c;if(g===0)return a.set(0,0,0),null;const v=1/g,x=(f*h-c*m)*v,E=(u*m-c*h)*v;return a.set(1-x-E,E,x)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,o,a,u,c,h){return this.getBarycoord(e,t,n,o,Qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Qi.x),h.addScaledVector(u,Qi.y),h.addScaledVector(c,Qi.z),h)}static getInterpolatedAttribute(e,t,n,o,a,u){return Ld.setScalar(0),Dd.setScalar(0),Nd.setScalar(0),Ld.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,n),Nd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ld,a.x),u.addScaledVector(Dd,a.y),u.addScaledVector(Nd,a.z),u}static isFrontFacing(e,t,n,o){return xi.subVectors(n,t),Zi.subVectors(e,t),xi.cross(Zi).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),xi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,a){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let u,c;Js.subVectors(o,n),eo.subVectors(a,n),Rd.subVectors(e,n);const h=Js.dot(Rd),f=eo.dot(Rd);if(h<=0&&f<=0)return t.copy(n);Cd.subVectors(e,o);const m=Js.dot(Cd),g=eo.dot(Cd);if(m>=0&&g<=m)return t.copy(o);const v=h*g-m*f;if(v<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(n).addScaledVector(Js,u);Pd.subVectors(e,a);const x=Js.dot(Pd),E=eo.dot(Pd);if(E>=0&&x<=E)return t.copy(a);const M=x*f-h*E;if(M<=0&&f>=0&&E<=0)return c=f/(f-E),t.copy(n).addScaledVector(eo,c);const S=m*E-x*g;if(S<=0&&g-m>=0&&x-E>=0)return hg.subVectors(a,o),c=(g-m)/(g-m+(x-E)),t.copy(o).addScaledVector(hg,c);const y=1/(S+M+v);return u=M*y,c=v*y,t.copy(n).addScaledVector(Js,u).addScaledVector(eo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Id(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=Lt.workingColorSpace){if(e=mx(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Id(u,a,e+1/3),this.g=Id(u,a,e),this.b=Id(u,a,e-1/3)}return Lt.toWorkingColorSpace(this,o),this}setStyle(e,t=ai){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const n=Gv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Lt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(Mt(Tn.r*255,0,255))*65536+Math.round(Mt(Tn.g*255,0,255))*256+Math.round(Mt(Tn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Tn.copy(this),t);const n=Tn.r,o=Tn.g,a=Tn.b,u=Math.max(n,o,a),c=Math.min(n,o,a);let h,f;const m=(c+u)/2;if(c===u)h=0,f=0;else{const g=u-c;switch(f=m<=.5?g/(u+c):g/(2-u-c),u){case n:h=(o-a)/g+(o<a?6:0);break;case o:h=(a-n)/g+2;break;case a:h=(n-o)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ai){Lt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,o=Tn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(Wl);const n=vd(kr.h,Wl.h,t),o=vd(kr.s,Wl.s,t),a=vd(kr.l,Wl.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Dt;Dt.NAMES=Gv;let Nx=0;class xo extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=lo,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(n.blending=this.blending),this.side!==Wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ih&&(n.blendSrc=this.blendSrc),this.blendDst!==rh&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hv extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new ae,Xl=new Ut;let Ix=0;class Qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jm,this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ia(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array),o=Hn(o,this.array),a=Hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jm&&(e.usage=this.usage),e}}class Vv extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wv extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vr extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ux=0;const si=new jt,Ud=new An,to=new ae,Kn=new wa,aa=new wa,fn=new ae;class bi extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?Wv:Vv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new gt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Vr(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];Kn.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];aa.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(Kn.min,aa.min),Kn.expandByPoint(fn),fn.addVectors(Kn.max,aa.max),Kn.expandByPoint(fn)):(Kn.expandByPoint(aa.min),Kn.expandByPoint(aa.max))}Kn.getCenter(n);let o=0;for(let a=0,u=e.count;a<u;a++)fn.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(fn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],h=this.morphTargetsRelative;for(let f=0,m=c.count;f<m;f++)fn.fromBufferAttribute(c,f),h&&(to.fromBufferAttribute(e,f),fn.add(to)),o=Math.max(o,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let k=0;k<n.count;k++)c[k]=new ae,h[k]=new ae;const f=new ae,m=new ae,g=new ae,v=new Ut,x=new Ut,E=new Ut,M=new ae,S=new ae;function y(k,C,T){f.fromBufferAttribute(n,k),m.fromBufferAttribute(n,C),g.fromBufferAttribute(n,T),v.fromBufferAttribute(a,k),x.fromBufferAttribute(a,C),E.fromBufferAttribute(a,T),m.sub(f),g.sub(f),x.sub(v),E.sub(v);const z=1/(x.x*E.y-E.x*x.y);isFinite(z)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(z),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(z),c[k].add(M),c[C].add(M),c[T].add(M),h[k].add(S),h[C].add(S),h[T].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let k=0,C=N.length;k<C;++k){const T=N[k],z=T.start,te=T.count;for(let Y=z,Z=z+te;Y<Z;Y+=3)y(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const P=new ae,w=new ae,I=new ae,b=new ae;function D(k){I.fromBufferAttribute(o,k),b.copy(I);const C=c[k];P.copy(C),P.sub(I.multiplyScalar(I.dot(C))).normalize(),w.crossVectors(b,C);const z=w.dot(h[k])<0?-1:1;u.setXYZW(k,P.x,P.y,P.z,z)}for(let k=0,C=N.length;k<C;++k){const T=N[k],z=T.start,te=T.count;for(let Y=z,Z=z+te;Y<Z;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const o=new ae,a=new ae,u=new ae,c=new ae,h=new ae,f=new ae,m=new ae,g=new ae;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),m.subVectors(u,a),g.subVectors(o,a),m.cross(g),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),c.add(m),h.add(m),f.add(m),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,a),g.subVectors(o,a),m.cross(g),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(c,h){const f=c.array,m=c.itemSize,g=c.normalized,v=new f.constructor(h.length*m);let x=0,E=0;for(let M=0,S=h.length;M<S;M++){c.isInterleavedBufferAttribute?x=h[M]*c.data.stride+c.offset:x=h[M]*m;for(let y=0;y<m;y++)v[E++]=f[x++]}return new Qn(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,n=this.index.array,o=this.attributes;for(const c in o){const h=o[c],f=e(h,n);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const h=[],f=a[c];for(let m=0,g=f.length;m<g;m++){const v=f[m],x=e(v,n);h.push(x)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let g=0,v=f.length;g<v;g++){const x=f[g];m.push(x.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const f in o){const m=o[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],g=a[f];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,m=u.length;f<m;f++){const g=u[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fg=new jt,ls=new Ru,$l=new Ta,pg=new ae,jl=new ae,Yl=new ae,ql=new ae,Fd=new ae,Kl=new ae,mg=new ae,Zl=new ae;class sr extends An{constructor(e=new bi,t=new Hv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Kl.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const m=c[h],g=a[h];m!==0&&(Fd.fromBufferAttribute(g,e),u?Kl.addScaledVector(Fd,m):Kl.addScaledVector(Fd.sub(t),m))}t.add(Kl)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(a),ls.copy(e.ray).recast(e.near),!($l.containsPoint(ls.origin)===!1&&(ls.intersectSphere($l,pg)===null||ls.origin.distanceToSquared(pg)>(e.far-e.near)**2))&&(fg.copy(a).invert(),ls.copy(e.ray).applyMatrix4(fg),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let o;const a=this.geometry,u=this.material,c=a.index,h=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=u[S.materialIndex],N=Math.max(S.start,x.start),P=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let w=N,I=P;w<I;w+=3){const b=c.getX(w),D=c.getX(w+1),k=c.getX(w+2);o=Ql(this,y,e,n,f,m,g,b,D,k),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const N=c.getX(S),P=c.getX(S+1),w=c.getX(S+2);o=Ql(this,u,e,n,f,m,g,N,P,w),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=u[S.materialIndex],N=Math.max(S.start,x.start),P=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=N,I=P;w<I;w+=3){const b=w,D=w+1,k=w+2;o=Ql(this,y,e,n,f,m,g,b,D,k),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(h.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const N=S,P=S+1,w=S+2;o=Ql(this,u,e,n,f,m,g,N,P,w),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Fx(r,e,t,n,o,a,u,c){let h;if(e.side===Vn?h=n.intersectTriangle(u,a,o,!0,c):h=n.intersectTriangle(o,a,u,e.side===Wr,c),h===null)return null;Zl.copy(c),Zl.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(Zl);return f<t.near||f>t.far?null:{distance:f,point:Zl.clone(),object:r}}function Ql(r,e,t,n,o,a,u,c,h,f){r.getVertexPosition(c,jl),r.getVertexPosition(h,Yl),r.getVertexPosition(f,ql);const m=Fx(r,e,t,n,jl,Yl,ql,mg);if(m){const g=new ae;Mi.getBarycoord(mg,jl,Yl,ql,g),o&&(m.uv=Mi.getInterpolatedAttribute(o,c,h,f,g,new Ut)),a&&(m.uv1=Mi.getInterpolatedAttribute(a,c,h,f,g,new Ut)),u&&(m.normal=Mi.getInterpolatedAttribute(u,c,h,f,g,new ae),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:h,c:f,normal:new ae,materialIndex:0};Mi.getNormal(jl,Yl,ql,v.normal),m.face=v,m.barycoord=g}return m}class Aa extends bi{constructor(e=1,t=1,n=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const h=[],f=[],m=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,o,u,2),E("x","z","y",1,-1,e,n,-t,o,u,3),E("x","y","z",1,-1,e,t,n,o,a,4),E("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(h),this.setAttribute("position",new Vr(f,3)),this.setAttribute("normal",new Vr(m,3)),this.setAttribute("uv",new Vr(g,2));function E(M,S,y,N,P,w,I,b,D,k,C){const T=w/D,z=I/k,te=w/2,Y=I/2,Z=b/2,de=D+1,q=k+1;let he=0,V=0;const ce=new ae;for(let le=0;le<q;le++){const O=le*z-Y;for(let re=0;re<de;re++){const De=re*T-te;ce[M]=De*N,ce[S]=O*P,ce[y]=Z,f.push(ce.x,ce.y,ce.z),ce[M]=0,ce[S]=0,ce[y]=b>0?1:-1,m.push(ce.x,ce.y,ce.z),g.push(re/D),g.push(1-le/k),he+=1}}for(let le=0;le<k;le++)for(let O=0;O<D;O++){const re=v+O+de*le,De=v+O+de*(le+1),ne=v+(O+1)+de*(le+1),ve=v+(O+1)+de*le;h.push(re,De,ve),h.push(De,ne,ve),V+=6}c.addGroup(x,V,C),x+=V,v+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const o=r[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function In(r){const e={};for(let t=0;t<r.length;t++){const n=go(r[t]);for(const o in n)e[o]=n[o]}return e}function kx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Ox={clone:go,merge:In};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let $v=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=rr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Or=new ae,gg=new Ut,vg=new Ut;class li extends $v{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,gg,vg),t.subVectors(vg,gg)}setViewOffset(e,t,n,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gd*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,f=u.fullHeight;a+=u.offsetX*o/h,t-=u.offsetY*n/f,o*=u.width/h,n*=u.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class Gx extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new li(no,io,e,t);o.layers=this.layers,this.add(o);const a=new li(no,io,e,t);a.layers=this.layers,this.add(a);const u=new li(no,io,e,t);u.layers=this.layers,this.add(u);const c=new li(no,io,e,t);c.layers=this.layers,this.add(c);const h=new li(no,io,e,t);h.layers=this.layers,this.add(h);const f=new li(no,io,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,a,u,c,h]=t;for(const f of t)this.remove(f);if(e===rr)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Mu)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,h,f,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,o),e.render(t,a),e.setRenderTarget(n,1,o),e.render(t,u),e.setRenderTarget(n,2,o),e.render(t,c),e.setRenderTarget(n,3,o),e.render(t,h),e.setRenderTarget(n,4,o),e.render(t,f),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,o),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class jv extends Wn{constructor(e=[],t=fo,n,o,a,u,c,h,f,m){super(e,t,n,o,a,u,c,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hx extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new jv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Aa(5,5,5),a=new Xr({name:"CubemapFromEquirect",uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Gr});a.uniforms.tEquirect.value=t;const u=new sr(o,a),c=t.minFilter;return t.minFilter===_s&&(t.minFilter=Fi),new Gx(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,o);e.setRenderTarget(a)}}class Jl extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,u=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),y=this._getHandJoint(f,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,E=.005;f.inputState.pinching&&v>x+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=x-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wx extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Od=new ae,Xx=new ae,$x=new gt;class fs{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Od.subVectors(n,t).cross(Xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Od),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$x.getNormalMatrix(e),o=this.coplanarPoint(Od).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Ta,eu=new ae;class Yv{constructor(e=new fs,t=new fs,n=new fs,o=new fs,a=new fs,u=new fs){this.planes=[e,t,n,o,a,u]}set(e,t,n,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rr){const n=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],h=o[3],f=o[4],m=o[5],g=o[6],v=o[7],x=o[8],E=o[9],M=o[10],S=o[11],y=o[12],N=o[13],P=o[14],w=o[15];if(n[0].setComponents(h-a,v-f,S-x,w-y).normalize(),n[1].setComponents(h+a,v+f,S+x,w+y).normalize(),n[2].setComponents(h+u,v+m,S+E,w+N).normalize(),n[3].setComponents(h-u,v-m,S-E,w-N).normalize(),n[4].setComponents(h-c,v-g,S-M,w-P).normalize(),t===rr)n[5].setComponents(h+c,v+g,S+M,w+P).normalize();else if(t===Mu)n[5].setComponents(c,g,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(eu.x=o.normal.x>0?e.max.x:e.min.x,eu.y=o.normal.y>0?e.max.y:e.min.y,eu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qv extends xo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tu=new ae,Au=new ae,_g=new jt,la=new Ru,tu=new Ta,zd=new ae,yg=new ae;class jx extends An{constructor(e=new bi,t=new qv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,a=t.count;o<a;o++)Tu.fromBufferAttribute(t,o-1),Au.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=Tu.distanceTo(Au);e.setAttribute("lineDistance",new Vr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tu.copy(n.boundingSphere),tu.applyMatrix4(o),tu.radius+=a,e.ray.intersectsSphere(tu)===!1)return;_g.copy(o).invert(),la.copy(e.ray).applyMatrix4(_g);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null){const x=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=f){const y=m.getX(M),N=m.getX(M+1),P=nu(this,e,la,h,y,N,M);P&&t.push(P)}if(this.isLineLoop){const M=m.getX(E-1),S=m.getX(x),y=nu(this,e,la,h,M,S,E-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=f){const y=nu(this,e,la,h,M,M+1,M);y&&t.push(y)}if(this.isLineLoop){const M=nu(this,e,la,h,E-1,x,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function nu(r,e,t,n,o,a,u){const c=r.geometry.attributes.position;if(Tu.fromBufferAttribute(c,o),Au.fromBufferAttribute(c,a),t.distanceSqToSegment(Tu,Au,zd,yg)>n)return;zd.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(zd);if(!(f<e.near||f>e.far))return{distance:f,point:yg.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class Kv extends xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xg=new jt,Vh=new Ru,iu=new Ta,ru=new ae;class Yx extends An{constructor(e=new bi,t=new Kv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),iu.copy(n.boundingSphere),iu.applyMatrix4(o),iu.radius+=a,e.ray.intersectsSphere(iu)===!1)return;xg.copy(o).invert(),Vh.copy(e.ray).applyMatrix4(xg);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,f=n.index,g=n.attributes.position;if(f!==null){const v=Math.max(0,u.start),x=Math.min(f.count,u.start+u.count);for(let E=v,M=x;E<M;E++){const S=f.getX(E);ru.fromBufferAttribute(g,S),Sg(ru,S,h,o,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let E=v,M=x;E<M;E++)ru.fromBufferAttribute(g,E),Sg(ru,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Sg(r,e,t,n,o,a,u){const c=Vh.distanceSqToPoint(r);if(c<t){const h=new ae;Vh.closestPointToPoint(r,h),h.applyMatrix4(n);const f=o.ray.origin.distanceTo(h);if(f<o.near||f>o.far)return;a.push({distance:f,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Zv extends Wn{constructor(e,t,n=ys,o,a,u,c=Ai,h=Ai,f,m=ya){if(m!==ya&&m!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,a,u,c,h,m,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cu extends bi{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(n),h=Math.floor(o),f=c+1,m=h+1,g=e/c,v=t/h,x=[],E=[],M=[],S=[];for(let y=0;y<m;y++){const N=y*v-u;for(let P=0;P<f;P++){const w=P*g-a;E.push(w,-N,0),M.push(0,0,1),S.push(P/c),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let N=0;N<c;N++){const P=N+f*y,w=N+f*(y+1),I=N+1+f*(y+1),b=N+1+f*y;x.push(P,w,b),x.push(w,I,b)}this.setIndex(x),this.setAttribute("position",new Vr(E,3)),this.setAttribute("normal",new Vr(M,3)),this.setAttribute("uv",new Vr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class qx extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kx extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zx extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Qx extends $v{constructor(e=-1,t=1,n=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,u=a+f*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jx extends Zx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class eS extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Eg=new jt;class tS{constructor(e,t,n=0,o=1/0){this.ray=new Ru(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new uf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eg),this}intersectObject(e,t=!0,n=[]){return Wh(e,this,n,t),n.sort(Mg),n}intersectObjects(e,t=!0,n=[]){for(let o=0,a=e.length;o<a;o++)Wh(e[o],this,n,t);return n.sort(Mg),n}}function Mg(r,e){return r.distance-e.distance}function Wh(r,e,t,n){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&n===!0){const a=r.children;for(let u=0,c=a.length;u<c;u++)Wh(a[u],e,t,!0)}}function wg(r,e,t,n){const o=nS(n);switch(t){case Nv:return r*e;case Uv:return r*e/o.components*o.byteLength;case sf:return r*e/o.components*o.byteLength;case Fv:return r*e*2/o.components*o.byteLength;case of:return r*e*2/o.components*o.byteLength;case Iv:return r*e*3/o.components*o.byteLength;case Ti:return r*e*4/o.components*o.byteLength;case af:return r*e*4/o.components*o.byteLength;case pu:case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:case yh:return Math.max(r,16)*Math.max(e,8)/4;case gh:case _h:return Math.max(r,8)*Math.max(e,8)/2;case xh:case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case _u:case kh:case Oh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kv:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bh:case Gh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nS(r){switch(r){case lr:case Pv:return{byteLength:1,components:1};case va:case Lv:case Sa:return{byteLength:2,components:1};case nf:case rf:return{byteLength:2,components:4};case ys:case tf:case ir:return{byteLength:4,components:1};case Dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let r=null,e=!1,t=null,n=null;function o(a,u){t(a,u),n=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function iS(r){const e=new WeakMap;function t(c,h){const f=c.array,m=c.usage,g=f.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,f,m),c.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,h,f){const m=h.array,g=h.updateRanges;if(r.bindBuffer(f,c),g.length===0)r.bufferSubData(f,0,m);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];r.bufferSubData(f,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(r.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:u}}var rS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sS=`#ifdef USE_ALPHAHASH
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
#endif`,oS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cS=`#ifdef USE_AOMAP
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
#endif`,dS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hS=`#ifdef USE_BATCHING
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
#endif`,fS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vS=`#ifdef USE_IRIDESCENCE
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
#endif`,_S=`#ifdef USE_BUMPMAP
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
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bS=`#define PI 3.141592653589793
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
} // validated`,RS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CS=`vec3 transformedNormal = objectNormal;
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
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IS="gl_FragColor = linearToOutputTexel( gl_FragColor );",US=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FS=`#ifdef USE_ENVMAP
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
#endif`,kS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OS=`#ifdef USE_ENVMAP
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
#endif`,zS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
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
#endif`,GS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XS=`#ifdef USE_GRADIENTMAP
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
}`,$S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qS=`uniform bool receiveShadow;
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
#endif`,KS=`#ifdef USE_ENVMAP
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
#endif`,ZS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tE=`PhysicalMaterial material;
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
#endif`,nE=`struct PhysicalMaterial {
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
}`,iE=`
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
#endif`,rE=`#if defined( RE_IndirectDiffuse )
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
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fE=`#if defined( USE_POINTS_UV )
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
#endif`,pE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
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
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
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
#endif`,bE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HE=`float getShadowMask() {
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
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZE=`#ifdef USE_TRANSMISSION
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
#endif`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
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
}`,cM=`#if DEPTH_PACKING == 3200
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
}`,dM=`#define DISTANCE
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
}`,hM=`#define DISTANCE
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
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
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
}`,gM=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,_M=`uniform vec3 diffuse;
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
}`,yM=`#define LAMBERT
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
}`,xM=`#define LAMBERT
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
}`,SM=`#define MATCAP
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
}`,EM=`#define MATCAP
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
}`,MM=`#define NORMAL
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
}`,wM=`#define NORMAL
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
}`,TM=`#define PHONG
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
}`,AM=`#define PHONG
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
}`,bM=`#define STANDARD
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
}`,RM=`#define STANDARD
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
}`,CM=`#define TOON
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
}`,PM=`#define TOON
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
}`,LM=`uniform float size;
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
}`,DM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,IM=`uniform vec3 color;
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
}`,UM=`uniform float rotation;
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
}`,FM=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:rS,alphahash_pars_fragment:sS,alphamap_fragment:oS,alphamap_pars_fragment:aS,alphatest_fragment:lS,alphatest_pars_fragment:uS,aomap_fragment:cS,aomap_pars_fragment:dS,batching_pars_vertex:hS,batching_vertex:fS,begin_vertex:pS,beginnormal_vertex:mS,bsdfs:gS,iridescence_fragment:vS,bumpmap_pars_fragment:_S,clipping_planes_fragment:yS,clipping_planes_pars_fragment:xS,clipping_planes_pars_vertex:SS,clipping_planes_vertex:ES,color_fragment:MS,color_pars_fragment:wS,color_pars_vertex:TS,color_vertex:AS,common:bS,cube_uv_reflection_fragment:RS,defaultnormal_vertex:CS,displacementmap_pars_vertex:PS,displacementmap_vertex:LS,emissivemap_fragment:DS,emissivemap_pars_fragment:NS,colorspace_fragment:IS,colorspace_pars_fragment:US,envmap_fragment:FS,envmap_common_pars_fragment:kS,envmap_pars_fragment:OS,envmap_pars_vertex:zS,envmap_physical_pars_fragment:KS,envmap_vertex:BS,fog_vertex:GS,fog_pars_vertex:HS,fog_fragment:VS,fog_pars_fragment:WS,gradientmap_pars_fragment:XS,lightmap_pars_fragment:$S,lights_lambert_fragment:jS,lights_lambert_pars_fragment:YS,lights_pars_begin:qS,lights_toon_fragment:ZS,lights_toon_pars_fragment:QS,lights_phong_fragment:JS,lights_phong_pars_fragment:eE,lights_physical_fragment:tE,lights_physical_pars_fragment:nE,lights_fragment_begin:iE,lights_fragment_maps:rE,lights_fragment_end:sE,logdepthbuf_fragment:oE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:uE,map_fragment:cE,map_pars_fragment:dE,map_particle_fragment:hE,map_particle_pars_fragment:fE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:vE,morphnormal_vertex:_E,morphtarget_pars_vertex:yE,morphtarget_vertex:xE,normal_fragment_begin:SE,normal_fragment_maps:EE,normal_pars_fragment:ME,normal_pars_vertex:wE,normal_vertex:TE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:bE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:PE,opaque_fragment:LE,packing:DE,premultiplied_alpha_fragment:NE,project_vertex:IE,dithering_fragment:UE,dithering_pars_fragment:FE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:BE,shadowmap_vertex:GE,shadowmask_pars_fragment:HE,skinbase_vertex:VE,skinning_pars_vertex:WE,skinning_vertex:XE,skinnormal_vertex:$E,specularmap_fragment:jE,specularmap_pars_fragment:YE,tonemapping_fragment:qE,tonemapping_pars_fragment:KE,transmission_fragment:ZE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:rM,backgroundCube_vert:sM,backgroundCube_frag:oM,cube_vert:aM,cube_frag:lM,depth_vert:uM,depth_frag:cM,distanceRGBA_vert:dM,distanceRGBA_frag:hM,equirect_vert:fM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:vM,meshbasic_frag:_M,meshlambert_vert:yM,meshlambert_frag:xM,meshmatcap_vert:SM,meshmatcap_frag:EM,meshnormal_vert:MM,meshnormal_frag:wM,meshphong_vert:TM,meshphong_frag:AM,meshphysical_vert:bM,meshphysical_frag:RM,meshtoon_vert:CM,meshtoon_frag:PM,points_vert:LM,points_frag:DM,shadow_vert:NM,shadow_frag:IM,sprite_vert:UM,sprite_frag:FM},Fe={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ui={basic:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:In([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:In([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:In([Fe.points,Fe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:In([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:In([Fe.common,Fe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:In([Fe.sprite,Fe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:In([Fe.common,Fe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:In([Fe.lights,Fe.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ui.physical={uniforms:In([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const su={r:0,b:0,g:0},cs=new ur,kM=new jt;function OM(r,e,t,n,o,a,u){const c=new Dt(0);let h=a===!0?0:1,f,m,g=null,v=0,x=null;function E(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?t:e).get(w)),w}function M(P){let w=!1;const I=E(P);I===null?y(c,h):I&&I.isColor&&(y(I,1),w=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,u):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(P,w){const I=E(w);I&&(I.isCubeTexture||I.mapping===bu)?(m===void 0&&(m=new sr(new Aa(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:go(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(b,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),cs.copy(w.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),m.material.uniforms.envMap.value=I,m.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(cs)),m.material.toneMapped=Lt.getTransfer(I.colorSpace)!==It,(g!==I||v!==I.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=I,v=I.version,x=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):I&&I.isTexture&&(f===void 0&&(f=new sr(new Cu(2,2),new Xr({name:"BackgroundMaterial",uniforms:go(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=I,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=Lt.getTransfer(I.colorSpace)!==It,I.matrixAutoUpdate===!0&&I.updateMatrix(),f.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||v!==I.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,g=I,v=I.version,x=r.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function y(P,w){P.getRGB(su,Xv(r)),n.buffers.color.setClear(su.r,su.g,su.b,w,u)}function N(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,w=1){c.set(P),h=w,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,y(c,h)},render:M,addToRenderList:S,dispose:N}}function zM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},o=v(null);let a=o,u=!1;function c(T,z,te,Y,Z){let de=!1;const q=g(Y,te,z);a!==q&&(a=q,f(a.object)),de=x(T,Y,te,Z),de&&E(T,Y,te,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,w(T,z,te,Y),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return r.createVertexArray()}function f(T){return r.bindVertexArray(T)}function m(T){return r.deleteVertexArray(T)}function g(T,z,te){const Y=te.wireframe===!0;let Z=n[T.id];Z===void 0&&(Z={},n[T.id]=Z);let de=Z[z.id];de===void 0&&(de={},Z[z.id]=de);let q=de[Y];return q===void 0&&(q=v(h()),de[Y]=q),q}function v(T){const z=[],te=[],Y=[];for(let Z=0;Z<t;Z++)z[Z]=0,te[Z]=0,Y[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:te,attributeDivisors:Y,object:T,attributes:{},index:null}}function x(T,z,te,Y){const Z=a.attributes,de=z.attributes;let q=0;const he=te.getAttributes();for(const V in he)if(he[V].location>=0){const le=Z[V];let O=de[V];if(O===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(O=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(O=T.instanceColor)),le===void 0||le.attribute!==O||O&&le.data!==O.data)return!0;q++}return a.attributesNum!==q||a.index!==Y}function E(T,z,te,Y){const Z={},de=z.attributes;let q=0;const he=te.getAttributes();for(const V in he)if(he[V].location>=0){let le=de[V];le===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(le=T.instanceColor));const O={};O.attribute=le,le&&le.data&&(O.data=le.data),Z[V]=O,q++}a.attributes=Z,a.attributesNum=q,a.index=Y}function M(){const T=a.newAttributes;for(let z=0,te=T.length;z<te;z++)T[z]=0}function S(T){y(T,0)}function y(T,z){const te=a.newAttributes,Y=a.enabledAttributes,Z=a.attributeDivisors;te[T]=1,Y[T]===0&&(r.enableVertexAttribArray(T),Y[T]=1),Z[T]!==z&&(r.vertexAttribDivisor(T,z),Z[T]=z)}function N(){const T=a.newAttributes,z=a.enabledAttributes;for(let te=0,Y=z.length;te<Y;te++)z[te]!==T[te]&&(r.disableVertexAttribArray(te),z[te]=0)}function P(T,z,te,Y,Z,de,q){q===!0?r.vertexAttribIPointer(T,z,te,Z,de):r.vertexAttribPointer(T,z,te,Y,Z,de)}function w(T,z,te,Y){M();const Z=Y.attributes,de=te.getAttributes(),q=z.defaultAttributeValues;for(const he in de){const V=de[he];if(V.location>=0){let ce=Z[he];if(ce===void 0&&(he==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),he==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor)),ce!==void 0){const le=ce.normalized,O=ce.itemSize,re=e.get(ce);if(re===void 0)continue;const De=re.buffer,ne=re.type,ve=re.bytesPerElement,G=ne===r.INT||ne===r.UNSIGNED_INT||ce.gpuType===tf;if(ce.isInterleavedBufferAttribute){const ie=ce.data,pe=ie.stride,_e=ce.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<V.locationSize;Ae++)y(V.location+Ae,ie.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<V.locationSize;Ae++)S(V.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,De);for(let Ae=0;Ae<V.locationSize;Ae++)P(V.location+Ae,O/V.locationSize,ne,le,pe*ve,(_e+O/V.locationSize*Ae)*ve,G)}else{if(ce.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)y(V.location+ie,ce.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ie=0;ie<V.locationSize;ie++)S(V.location+ie);r.bindBuffer(r.ARRAY_BUFFER,De);for(let ie=0;ie<V.locationSize;ie++)P(V.location+ie,O/V.locationSize,ne,le,O*ve,O/V.locationSize*ie*ve,G)}}else if(q!==void 0){const le=q[he];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(V.location,le);break;case 3:r.vertexAttrib3fv(V.location,le);break;case 4:r.vertexAttrib4fv(V.location,le);break;default:r.vertexAttrib1fv(V.location,le)}}}}N()}function I(){k();for(const T in n){const z=n[T];for(const te in z){const Y=z[te];for(const Z in Y)m(Y[Z].object),delete Y[Z];delete z[te]}delete n[T]}}function b(T){if(n[T.id]===void 0)return;const z=n[T.id];for(const te in z){const Y=z[te];for(const Z in Y)m(Y[Z].object),delete Y[Z];delete z[te]}delete n[T.id]}function D(T){for(const z in n){const te=n[z];if(te[T.id]===void 0)continue;const Y=te[T.id];for(const Z in Y)m(Y[Z].object),delete Y[Z];delete te[T.id]}}function k(){C(),u=!0,a!==o&&(a=o,f(a.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:k,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:S,disableUnusedAttributes:N}}function BM(r,e,t){let n;function o(f){n=f}function a(f,m){r.drawArrays(n,f,m),t.update(m,n,1)}function u(f,m,g){g!==0&&(r.drawArraysInstanced(n,f,m,g),t.update(m,n,g))}function c(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,g);let x=0;for(let E=0;E<g;E++)x+=m[E];t.update(x,n,1)}function h(f,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<f.length;E++)u(f[E],m[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];t.update(E,n,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function GM(r,e,t,n){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==Ti&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const k=D===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==lr&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ir&&!k)}function h(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:w,vertexTextures:I,maxSamples:b}}function HM(r){const e=this;let t=null,n=0,o=!1,a=!1;const u=new fs,c=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||n!==0||o;return o=v,n=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,y=r.get(g);if(!o||E===null||E.length===0||a&&!S)a?m(null):f();else{const N=a?0:n,P=N*4;let w=y.clippingState||null;h.value=w,w=m(E,v,P,x);for(let I=0;I!==P;++I)w[I]=t[I];y.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=N}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,v,x,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=h.value,E!==!0||S===null){const y=x+M*4,N=v.matrixWorldInverse;c.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,w=x;P!==M;++P,w+=4)u.copy(g[P]).applyMatrix4(N,c),u.normal.toArray(S,w),S[w+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function VM(r){let e=new WeakMap;function t(u,c){return c===hh?u.mapping=fo:c===fh&&(u.mapping=po),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===hh||c===fh)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const f=new Hx(h.height);return f.fromEquirectangularTexture(r,u),e.set(u,f),u.addEventListener("dispose",o),t(f.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ao=4,Tg=[.125,.215,.35,.446,.526,.582],gs=20,Bd=new Qx,Ag=new Dt;let Gd=null,Hd=0,Vd=0,Wd=!1;const ps=(1+Math.sqrt(5))/2,ro=1/ps,bg=[new ae(-ps,ro,0),new ae(ps,ro,0),new ae(-ro,0,ps),new ae(ro,0,ps),new ae(0,ps,-ro),new ae(0,ps,ro),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)],WM=new ae;class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100,a={}){const{size:u=256,position:c=WM}=a;Gd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,o,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,Hd,Vd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,ou(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Sa,format:Ti,colorSpace:mo,depthBuffer:!1},o=Cg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cg(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XM(a)),this._blurMaterial=$M(a,e,t)}return o}_compileMaterial(e){const t=new sr(this._lodPlanes[0],e);this._renderer.compile(t,Bd)}_sceneToCubeUV(e,t,n,o,a){const h=new li(90,1,t,n),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Ag),g.toneMapping=Hr,g.autoClear=!1;const E=new Hv({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),M=new sr(new Aa,E);let S=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,S=!0):(E.color.copy(Ag),S=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(h.up.set(0,f[N],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+m[N],a.y,a.z)):P===1?(h.up.set(0,0,f[N]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+m[N],a.z)):(h.up.set(0,f[N],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+m[N]));const w=this._cubeSize;ou(o,P*w,N>2?w:0,w,w),g.setRenderTarget(o),S&&g.render(M,h),g.render(e,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===fo||e.mapping===po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pg());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new sr(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;ou(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(u,Bd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=bg[(o-a-1)%bg.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,o,"latitudinal",a),this._halfBlur(u,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,u,c){const h=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new sr(this._lodPlanes[o],f),v=f.uniforms,x=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*gs-1),M=a/E,S=isFinite(a)?1+Math.floor(m*M):gs;S>gs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gs}`);const y=[];let N=0;for(let D=0;D<gs;++D){const k=D/M,C=Math.exp(-k*k/2);y.push(C),D===0?N+=C:D<S&&(N+=2*C)}for(let D=0;D<y.length;D++)y[D]=y[D]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:P}=this;v.dTheta.value=E,v.mipInt.value=P-n;const w=this._sizeLods[o],I=3*w*(o>P-ao?o-P+ao:0),b=4*(this._cubeSize-w);ou(t,I,b,3*w,2*w),h.setRenderTarget(t),h.render(g,Bd)}}function XM(r){const e=[],t=[],n=[];let o=r;const a=r-ao+1+Tg.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let h=1/c;u>r-ao?h=Tg[u-r+ao-1]:u===0&&(h=0),n.push(h);const f=1/(c-2),m=-f,g=1+f,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,E=6,M=3,S=2,y=1,N=new Float32Array(M*E*x),P=new Float32Array(S*E*x),w=new Float32Array(y*E*x);for(let b=0;b<x;b++){const D=b%3*2/3-1,k=b>2?0:-1,C=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];N.set(C,M*E*b),P.set(v,S*E*b);const T=[b,b,b,b,b,b];w.set(T,y*E*b)}const I=new bi;I.setAttribute("position",new Qn(N,M)),I.setAttribute("uv",new Qn(P,S)),I.setAttribute("faceIndex",new Qn(w,y)),e.push(I),o>ao&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cg(r,e,t){const n=new xs(r,e,t);return n.texture.mapping=bu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ou(r,e,t,n,o){r.viewport.set(e,t,n,o),r.scissor.set(e,t,n,o)}function $M(r,e,t){const n=new Float32Array(gs),o=new ae(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cf(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Pg(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Lg(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function cf(){return`

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
	`}function jM(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,f=h===hh||h===fh,m=h===fo||h===po;if(f||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new Rg(r)),g=f?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return f&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new Rg(r)),g=f?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function o(c){let h=0;const f=6;for(let m=0;m<f;m++)c[m]!==void 0&&h++;return h===f}function a(c){const h=c.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function YM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&yu("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function qM(r,e,t,n){const o={},a=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function f(g){const v=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const N=x.array;M=x.version;for(let P=0,w=N.length;P<w;P+=3){const I=N[P+0],b=N[P+1],D=N[P+2];v.push(I,b,b,D,D,I)}}else if(E!==void 0){const N=E.array;M=E.version;for(let P=0,w=N.length/3-1;P<w;P+=3){const I=P+0,b=P+1,D=P+2;v.push(I,b,b,D,D,I)}}else return;const S=new(zv(v)?Wv:Vv)(v,1);S.version=M;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function m(g){const v=a.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&f(g)}else f(g);return a.get(g)}return{get:c,update:h,getWireframeAttribute:m}}function KM(r,e,t){let n;function o(v){n=v}let a,u;function c(v){a=v.type,u=v.bytesPerElement}function h(v,x){r.drawElements(n,x,a,v*u),t.update(x,n,1)}function f(v,x,E){E!==0&&(r.drawElementsInstanced(n,x,a,v*u,E),t.update(x,n,E))}function m(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,a,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];t.update(S,n,1)}function g(v,x,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)f(v[y]/u,x[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(n,x,0,a,v,0,M,0,E);let y=0;for(let N=0;N<E;N++)y+=x[N]*M[N];t.update(y,n,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function ZM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function QM(r,e,t){const n=new WeakMap,o=new Qt;function a(u,c,h){const f=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=n.get(c);if(v===void 0||v.count!==g){let T=function(){k.dispose(),n.delete(c),c.removeEventListener("dispose",T)};var x=T;v!==void 0&&v.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],N=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let w=0;E===!0&&(w=1),M===!0&&(w=2),S===!0&&(w=3);let I=c.attributes.position.count*w,b=1;I>e.maxTextureSize&&(b=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const D=new Float32Array(I*b*4*g),k=new Bv(D,I,b,g);k.type=ir,k.needsUpdate=!0;const C=w*4;for(let z=0;z<g;z++){const te=y[z],Y=N[z],Z=P[z],de=I*b*4*z;for(let q=0;q<te.count;q++){const he=q*C;E===!0&&(o.fromBufferAttribute(te,q),D[de+he+0]=o.x,D[de+he+1]=o.y,D[de+he+2]=o.z,D[de+he+3]=0),M===!0&&(o.fromBufferAttribute(Y,q),D[de+he+4]=o.x,D[de+he+5]=o.y,D[de+he+6]=o.z,D[de+he+7]=0),S===!0&&(o.fromBufferAttribute(Z,q),D[de+he+8]=o.x,D[de+he+9]=o.y,D[de+he+10]=o.z,D[de+he+11]=Z.itemSize===4?o.w:1)}}v={count:g,texture:k,size:new Ut(I,b)},n.set(c,v),c.addEventListener("dispose",T)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<f.length;S++)E+=f[S];const M=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:a}}function JM(r,e,t,n){let o=new WeakMap;function a(h){const f=n.render.frame,m=h.geometry,g=e.get(h,m);if(o.get(g)!==f&&(e.update(g),o.set(g,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,f))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==f&&(v.update(),o.set(v,f))}return g}function u(){o=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:u}}const Jv=new Wn,Dg=new Zv(1,1),e_=new Bv,t_=new Tx,n_=new jv,Ng=[],Ig=[],Ug=new Float32Array(16),Fg=new Float32Array(9),kg=new Float32Array(4);function So(r,e,t){const n=r[0];if(n<=0||n>0)return r;const o=e*t;let a=Ng[o];if(a===void 0&&(a=new Float32Array(o),Ng[o]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Pu(r,e){let t=Ig[e];t===void 0&&(t=new Int32Array(e),Ig[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ew(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function tw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function iw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function rw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;kg.set(n),r.uniformMatrix2fv(this.addr,!1,kg),an(t,n)}}function sw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Fg.set(n),r.uniformMatrix3fv(this.addr,!1,Fg),an(t,n)}}function ow(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Ug.set(n),r.uniformMatrix4fv(this.addr,!1,Ug),an(t,n)}}function aw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function uw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function cw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function dw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function fw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function pw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function mw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o);let a;this.type===r.SAMPLER_2D_SHADOW?(Dg.compareFunction=Ov,a=Dg):a=Jv,t.setTexture2D(e||a,o)}function gw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||t_,o)}function vw(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||n_,o)}function _w(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||e_,o)}function yw(r){switch(r){case 5126:return ew;case 35664:return tw;case 35665:return nw;case 35666:return iw;case 35674:return rw;case 35675:return sw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return uw;case 35669:case 35673:return cw;case 5125:return dw;case 36294:return hw;case 36295:return fw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return _w}}function xw(r,e){r.uniform1fv(this.addr,e)}function Sw(r,e){const t=So(e,this.size,2);r.uniform2fv(this.addr,t)}function Ew(r,e){const t=So(e,this.size,3);r.uniform3fv(this.addr,t)}function Mw(r,e){const t=So(e,this.size,4);r.uniform4fv(this.addr,t)}function ww(r,e){const t=So(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Tw(r,e){const t=So(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Aw(r,e){const t=So(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bw(r,e){r.uniform1iv(this.addr,e)}function Rw(r,e){r.uniform2iv(this.addr,e)}function Cw(r,e){r.uniform3iv(this.addr,e)}function Pw(r,e){r.uniform4iv(this.addr,e)}function Lw(r,e){r.uniform1uiv(this.addr,e)}function Dw(r,e){r.uniform2uiv(this.addr,e)}function Nw(r,e){r.uniform3uiv(this.addr,e)}function Iw(r,e){r.uniform4uiv(this.addr,e)}function Uw(r,e,t){const n=this.cache,o=e.length,a=Pu(t,o);on(n,a)||(r.uniform1iv(this.addr,a),an(n,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Jv,a[u])}function Fw(r,e,t){const n=this.cache,o=e.length,a=Pu(t,o);on(n,a)||(r.uniform1iv(this.addr,a),an(n,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||t_,a[u])}function kw(r,e,t){const n=this.cache,o=e.length,a=Pu(t,o);on(n,a)||(r.uniform1iv(this.addr,a),an(n,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||n_,a[u])}function Ow(r,e,t){const n=this.cache,o=e.length,a=Pu(t,o);on(n,a)||(r.uniform1iv(this.addr,a),an(n,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||e_,a[u])}function zw(r){switch(r){case 5126:return xw;case 35664:return Sw;case 35665:return Ew;case 35666:return Mw;case 35674:return ww;case 35675:return Tw;case 35676:return Aw;case 5124:case 35670:return bw;case 35667:case 35671:return Rw;case 35668:case 35672:return Cw;case 35669:case 35673:return Pw;case 5125:return Lw;case 36294:return Dw;case 36295:return Nw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return Ow}}class Bw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yw(t.type)}}class Gw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zw(t.type)}}class Hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],n)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function Og(r,e){r.seq.push(e),r.map[e.id]=e}function Vw(r,e,t){const n=r.name,o=n.length;for(Xd.lastIndex=0;;){const a=Xd.exec(n),u=Xd.lastIndex;let c=a[1];const h=a[2]==="]",f=a[3];if(h&&(c=c|0),f===void 0||f==="["&&u+2===o){Og(t,f===void 0?new Bw(c,r,e):new Gw(c,r,e));break}else{let g=t.map[c];g===void 0&&(g=new Hw(c),Og(t,g)),t=g}}}class xu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);Vw(a,u,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&n.push(u)}return n}}function zg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ww=37297;let Xw=0;function $w(r,e){const t=r.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const Bg=new gt;function jw(r){Lt._getMatrix(Bg,Lt.workingColorSpace,r);const e=`mat3( ${Bg.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case Eu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Gg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+$w(r.getShaderSource(e),u)}else return o}function Yw(r,e){const t=jw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qw(r,e){let t;switch(e){case K0:t="Linear";break;case Z0:t="Reinhard";break;case Q0:t="Cineon";break;case J0:t="ACESFilmic";break;case tx:t="AgX";break;case nx:t="Neutral";break;case ex:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const au=new ae;function Kw(){Lt.getLuminanceCoefficients(au);const r=au.x.toFixed(4),e=au.y.toFixed(4),t=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function Qw(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jw(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function ma(r){return r!==""}function Hg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(r){return r.replace(eT,nT)}const tT=new Map;function nT(r,e){let t=vt[e];if(t===void 0){const n=tT.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xh(t)}const iT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(r){return r.replace(iT,rT)}function rT(r,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Xg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function sT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===C0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function oT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fo:case po:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function lT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rv:e="ENVMAP_BLENDING_MULTIPLY";break;case Y0:e="ENVMAP_BLENDING_MIX";break;case q0:e="ENVMAP_BLENDING_ADD";break}return e}function uT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cT(r,e,t,n){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=sT(t),f=oT(t),m=aT(t),g=lT(t),v=uT(t),x=Zw(t),E=Qw(a),M=o.createProgram();let S,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ma).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ma).join(`
`),y.length>0&&(y+=`
`)):(S=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),y=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?vt.tonemapping_pars_fragment:"",t.toneMapping!==Hr?qw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Yw("linearToOutputTexel",t.outputColorSpace),Kw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),u=Xh(u),u=Hg(u,t),u=Vg(u,t),c=Xh(c),c=Hg(c,t),c=Vg(c,t),u=Wg(u),c=Wg(c),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=N+S+u,w=N+y+c,I=zg(o,o.VERTEX_SHADER,P),b=zg(o,o.FRAGMENT_SHADER,w);o.attachShader(M,I),o.attachShader(M,b),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function D(z){if(r.debug.checkShaderErrors){const te=o.getProgramInfoLog(M).trim(),Y=o.getShaderInfoLog(I).trim(),Z=o.getShaderInfoLog(b).trim();let de=!0,q=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,I,b);else{const he=Gg(o,I,"vertex"),V=Gg(o,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+te+`
`+he+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Y===""||Z==="")&&(q=!1);q&&(z.diagnostics={runnable:de,programLog:te,vertexShader:{log:Y,prefix:S},fragmentShader:{log:Z,prefix:y}})}o.deleteShader(I),o.deleteShader(b),k=new xu(o,M),C=Jw(o,M)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(M,Ww)),T},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=b,this}let dT=0;class hT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fT(e),t.set(e,n)),n}}class fT{constructor(e){this.id=dT++,this.code=e,this.usedTimes=0}}function pT(r,e,t,n,o,a,u){const c=new uf,h=new hT,f=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return f.add(C),C===0?"uv":`uv${C}`}function S(C,T,z,te,Y){const Z=te.fog,de=Y.geometry,q=C.isMeshStandardMaterial?te.environment:null,he=(C.isMeshStandardMaterial?t:e).get(C.envMap||q),V=he&&he.mapping===bu?he.image.height:null,ce=E[C.type];C.precision!==null&&(x=o.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const le=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,O=le!==void 0?le.length:0;let re=0;de.morphAttributes.position!==void 0&&(re=1),de.morphAttributes.normal!==void 0&&(re=2),de.morphAttributes.color!==void 0&&(re=3);let De,ne,ve,G;if(ce){const At=Ui[ce];De=At.vertexShader,ne=At.fragmentShader}else De=C.vertexShader,ne=C.fragmentShader,h.update(C),ve=h.getVertexShaderID(C),G=h.getFragmentShaderID(C);const ie=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),_e=Y.isInstancedMesh===!0,Ae=Y.isBatchedMesh===!0,yt=!!C.map,St=!!C.matcap,at=!!he,B=!!C.aoMap,Ht=!!C.lightMap,ht=!!C.bumpMap,dt=!!C.normalMap,Ke=!!C.displacementMap,wt=!!C.emissiveMap,We=!!C.metalnessMap,U=!!C.roughnessMap,R=C.anisotropy>0,J=C.clearcoat>0,ge=C.dispersion>0,xe=C.iridescence>0,fe=C.sheen>0,$e=C.transmission>0,Re=R&&!!C.anisotropyMap,Qe=J&&!!C.clearcoatMap,et=J&&!!C.clearcoatNormalMap,Ee=J&&!!C.clearcoatRoughnessMap,Ce=xe&&!!C.iridescenceMap,Be=xe&&!!C.iridescenceThicknessMap,tt=fe&&!!C.sheenColorMap,Ne=fe&&!!C.sheenRoughnessMap,pt=!!C.specularMap,ut=!!C.specularColorMap,Nt=!!C.specularIntensityMap,X=$e&&!!C.transmissionMap,Ie=$e&&!!C.thicknessMap,ue=!!C.gradientMap,ye=!!C.alphaMap,Oe=C.alphaTest>0,ke=!!C.alphaHash,ft=!!C.extensions;let zt=Hr;C.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(zt=r.toneMapping);const tn={shaderID:ce,shaderType:C.type,shaderName:C.name,vertexShader:De,fragmentShader:ne,defines:C.defines,customVertexShaderID:ve,customFragmentShaderID:G,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Ae,batchingColor:Ae&&Y._colorsTexture!==null,instancing:_e,instancingColor:_e&&Y.instanceColor!==null,instancingMorph:_e&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:mo,alphaToCoverage:!!C.alphaToCoverage,map:yt,matcap:St,envMap:at,envMapMode:at&&he.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:Ht,bumpMap:ht,normalMap:dt,displacementMap:v&&Ke,emissiveMap:wt,normalMapObjectSpace:dt&&C.normalMapType===ax,normalMapTangentSpace:dt&&C.normalMapType===ox,metalnessMap:We,roughnessMap:U,anisotropy:R,anisotropyMap:Re,clearcoat:J,clearcoatMap:Qe,clearcoatNormalMap:et,clearcoatRoughnessMap:Ee,dispersion:ge,iridescence:xe,iridescenceMap:Ce,iridescenceThicknessMap:Be,sheen:fe,sheenColorMap:tt,sheenRoughnessMap:Ne,specularMap:pt,specularColorMap:ut,specularIntensityMap:Nt,transmission:$e,transmissionMap:X,thicknessMap:Ie,gradientMap:ue,opaque:C.transparent===!1&&C.blending===lo&&C.alphaToCoverage===!1,alphaMap:ye,alphaTest:Oe,alphaHash:ke,combine:C.combine,mapUv:yt&&M(C.map.channel),aoMapUv:B&&M(C.aoMap.channel),lightMapUv:Ht&&M(C.lightMap.channel),bumpMapUv:ht&&M(C.bumpMap.channel),normalMapUv:dt&&M(C.normalMap.channel),displacementMapUv:Ke&&M(C.displacementMap.channel),emissiveMapUv:wt&&M(C.emissiveMap.channel),metalnessMapUv:We&&M(C.metalnessMap.channel),roughnessMapUv:U&&M(C.roughnessMap.channel),anisotropyMapUv:Re&&M(C.anisotropyMap.channel),clearcoatMapUv:Qe&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:et&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&M(C.sheenRoughnessMap.channel),specularMapUv:pt&&M(C.specularMap.channel),specularColorMapUv:ut&&M(C.specularColorMap.channel),specularIntensityMapUv:Nt&&M(C.specularIntensityMap.channel),transmissionMapUv:X&&M(C.transmissionMap.channel),thicknessMapUv:Ie&&M(C.thicknessMap.channel),alphaMapUv:ye&&M(C.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(dt||R),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!de.attributes.uv&&(yt||ye),fog:!!Z,useFog:C.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:pe,skinning:Y.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,decodeVideoTexture:yt&&C.map.isVideoTexture===!0&&Lt.getTransfer(C.map.colorSpace)===It,decodeVideoTextureEmissive:wt&&C.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(C.emissiveMap.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===tr,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ft&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&C.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=f.has(1),tn.vertexUv2s=f.has(2),tn.vertexUv3s=f.has(3),f.clear(),tn}function y(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)T.push(z),T.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(N(T,C),P(T,C),T.push(r.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function N(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function P(C,T){c.disableAll(),T.supportsVertexTextures&&c.enable(0),T.instancing&&c.enable(1),T.instancingColor&&c.enable(2),T.instancingMorph&&c.enable(3),T.matcap&&c.enable(4),T.envMap&&c.enable(5),T.normalMapObjectSpace&&c.enable(6),T.normalMapTangentSpace&&c.enable(7),T.clearcoat&&c.enable(8),T.iridescence&&c.enable(9),T.alphaTest&&c.enable(10),T.vertexColors&&c.enable(11),T.vertexAlphas&&c.enable(12),T.vertexUv1s&&c.enable(13),T.vertexUv2s&&c.enable(14),T.vertexUv3s&&c.enable(15),T.vertexTangents&&c.enable(16),T.anisotropy&&c.enable(17),T.alphaHash&&c.enable(18),T.batching&&c.enable(19),T.dispersion&&c.enable(20),T.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),T.fog&&c.enable(0),T.useFog&&c.enable(1),T.flatShading&&c.enable(2),T.logarithmicDepthBuffer&&c.enable(3),T.reverseDepthBuffer&&c.enable(4),T.skinning&&c.enable(5),T.morphTargets&&c.enable(6),T.morphNormals&&c.enable(7),T.morphColors&&c.enable(8),T.premultipliedAlpha&&c.enable(9),T.shadowMapEnabled&&c.enable(10),T.doubleSided&&c.enable(11),T.flipSided&&c.enable(12),T.useDepthPacking&&c.enable(13),T.dithering&&c.enable(14),T.transmission&&c.enable(15),T.sheen&&c.enable(16),T.opaque&&c.enable(17),T.pointsUvs&&c.enable(18),T.decodeVideoTexture&&c.enable(19),T.decodeVideoTextureEmissive&&c.enable(20),T.alphaToCoverage&&c.enable(21),C.push(c.mask)}function w(C){const T=E[C.type];let z;if(T){const te=Ui[T];z=Ox.clone(te.uniforms)}else z=C.uniforms;return z}function I(C,T){let z;for(let te=0,Y=m.length;te<Y;te++){const Z=m[te];if(Z.cacheKey===T){z=Z,++z.usedTimes;break}}return z===void 0&&(z=new cT(r,T,C,a),m.push(z)),z}function b(C){if(--C.usedTimes===0){const T=m.indexOf(C);m[T]=m[m.length-1],m.pop(),C.destroy()}}function D(C){h.remove(C)}function k(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:I,releaseProgram:b,releaseShaderCache:D,programs:m,dispose:k}}function mT(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let c=r.get(u);return c===void 0&&(c={},r.set(u,c)),c}function n(u){r.delete(u)}function o(u,c,h){r.get(u)[c]=h}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:a}}function gT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $g(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jg(){const r=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function u(g,v,x,E,M,S){let y=r[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},r[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=S),e++,y}function c(g,v,x,E,M,S){const y=u(g,v,x,E,M,S);x.transmission>0?n.push(y):x.transparent===!0?o.push(y):t.push(y)}function h(g,v,x,E,M,S){const y=u(g,v,x,E,M,S);x.transmission>0?n.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function f(g,v){t.length>1&&t.sort(g||gT),n.length>1&&n.sort(v||$g),o.length>1&&o.sort(v||$g)}function m(){for(let g=e,v=r.length;g<v;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:c,unshift:h,finish:m,sort:f}}function vT(){let r=new WeakMap;function e(n,o){const a=r.get(n);let u;return a===void 0?(u=new jg,r.set(n,[u])):o>=a.length?(u=new jg,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function _T(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new Dt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=t,t}}}function yT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xT=0;function ST(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ET(r){const e=new _T,t=yT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new ae);const o=new ae,a=new jt,u=new jt;function c(f){let m=0,g=0,v=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,E=0,M=0,S=0,y=0,N=0,P=0,w=0,I=0,b=0,D=0;f.sort(ST);for(let C=0,T=f.length;C<T;C++){const z=f[C],te=z.color,Y=z.intensity,Z=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=te.r*Y,g+=te.g*Y,v+=te.b*Y;else if(z.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(z.sh.coefficients[q],Y);D++}else if(z.isDirectionalLight){const q=e.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const he=z.shadow,V=t.get(z);V.shadowIntensity=he.intensity,V.shadowBias=he.bias,V.shadowNormalBias=he.normalBias,V.shadowRadius=he.radius,V.shadowMapSize=he.mapSize,n.directionalShadow[x]=V,n.directionalShadowMap[x]=de,n.directionalShadowMatrix[x]=z.shadow.matrix,N++}n.directional[x]=q,x++}else if(z.isSpotLight){const q=e.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy(te).multiplyScalar(Y),q.distance=Z,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,n.spot[M]=q;const he=z.shadow;if(z.map&&(n.spotLightMap[I]=z.map,I++,he.updateMatrices(z),z.castShadow&&b++),n.spotLightMatrix[M]=he.matrix,z.castShadow){const V=t.get(z);V.shadowIntensity=he.intensity,V.shadowBias=he.bias,V.shadowNormalBias=he.normalBias,V.shadowRadius=he.radius,V.shadowMapSize=he.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=de,w++}M++}else if(z.isRectAreaLight){const q=e.get(z);q.color.copy(te).multiplyScalar(Y),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=q,S++}else if(z.isPointLight){const q=e.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),q.distance=z.distance,q.decay=z.decay,z.castShadow){const he=z.shadow,V=t.get(z);V.shadowIntensity=he.intensity,V.shadowBias=he.bias,V.shadowNormalBias=he.normalBias,V.shadowRadius=he.radius,V.shadowMapSize=he.mapSize,V.shadowCameraNear=he.camera.near,V.shadowCameraFar=he.camera.far,n.pointShadow[E]=V,n.pointShadowMap[E]=de,n.pointShadowMatrix[E]=z.shadow.matrix,P++}n.point[E]=q,E++}else if(z.isHemisphereLight){const q=e.get(z);q.skyColor.copy(z.color).multiplyScalar(Y),q.groundColor.copy(z.groundColor).multiplyScalar(Y),n.hemi[y]=q,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=v;const k=n.hash;(k.directionalLength!==x||k.pointLength!==E||k.spotLength!==M||k.rectAreaLength!==S||k.hemiLength!==y||k.numDirectionalShadows!==N||k.numPointShadows!==P||k.numSpotShadows!==w||k.numSpotMaps!==I||k.numLightProbes!==D)&&(n.directional.length=x,n.spot.length=M,n.rectArea.length=S,n.point.length=E,n.hemi.length=y,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=w+I-b,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,k.directionalLength=x,k.pointLength=E,k.spotLength=M,k.rectAreaLength=S,k.hemiLength=y,k.numDirectionalShadows=N,k.numPointShadows=P,k.numSpotShadows=w,k.numSpotMaps=I,k.numLightProbes=D,n.version=xT++)}function h(f,m){let g=0,v=0,x=0,E=0,M=0;const S=m.matrixWorldInverse;for(let y=0,N=f.length;y<N;y++){const P=f[y];if(P.isDirectionalLight){const w=n.directional[g];w.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),g++}else if(P.isSpotLight){const w=n.spot[x];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const w=n.rectArea[E];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),u.identity(),a.copy(P.matrixWorld),a.premultiply(S),u.extractRotation(a),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const w=n.point[v];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(S),M++}}}return{setup:c,setupView:h,state:n}}function Yg(r){const e=new ET(r),t=[],n=[];function o(m){f.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function u(m){n.push(m)}function c(){e.setup(t)}function h(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:u}}function MT(r){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let c;return u===void 0?(c=new Yg(r),e.set(o,[c])):a>=u.length?(c=new Yg(r),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const wT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TT=`uniform sampler2D shadow_pass;
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
}`;function AT(r,e,t){let n=new Yv;const o=new Ut,a=new Ut,u=new Qt,c=new qx({depthPacking:sx}),h=new Kx,f={},m=t.maxTextureSize,g={[Wr]:Vn,[Vn]:Wr,[tr]:tr},v=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:wT,fragmentShader:TT}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new bi;E.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new sr(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bv;let y=this.type;this.render=function(b,D,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||b.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),te=r.state;te.setBlending(Gr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Y=y!==Ji&&this.type===Ji,Z=y===Ji&&this.type!==Ji;for(let de=0,q=b.length;de<q;de++){const he=b[de],V=he.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ce=V.getFrameExtents();if(o.multiply(ce),a.copy(V.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/ce.x),o.x=a.x*ce.x,V.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/ce.y),o.y=a.y*ce.y,V.mapSize.y=a.y)),V.map===null||Y===!0||Z===!0){const O=this.type!==Ji?{minFilter:Ai,magFilter:Ai}:{};V.map!==null&&V.map.dispose(),V.map=new xs(o.x,o.y,O),V.map.texture.name=he.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const le=V.getViewportCount();for(let O=0;O<le;O++){const re=V.getViewport(O);u.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),te.viewport(u),V.updateMatrices(he,O),n=V.getFrustum(),w(D,k,V.camera,he,this.type)}V.isPointLightShadow!==!0&&this.type===Ji&&N(V,k),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(C,T,z)};function N(b,D){const k=e.update(M);v.defines.VSM_SAMPLES!==b.blurSamples&&(v.defines.VSM_SAMPLES=b.blurSamples,x.defines.VSM_SAMPLES=b.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new xs(o.x,o.y)),v.uniforms.shadow_pass.value=b.map.texture,v.uniforms.resolution.value=b.mapSize,v.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(D,null,k,v,M,null),x.uniforms.shadow_pass.value=b.mapPass.texture,x.uniforms.resolution.value=b.mapSize,x.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(D,null,k,x,M,null)}function P(b,D,k,C){let T=null;const z=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)T=z;else if(T=k.isPointLight===!0?h:c,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const te=T.uuid,Y=D.uuid;let Z=f[te];Z===void 0&&(Z={},f[te]=Z);let de=Z[Y];de===void 0&&(de=T.clone(),Z[Y]=de,D.addEventListener("dispose",I)),T=de}if(T.visible=D.visible,T.wireframe=D.wireframe,C===Ji?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:g[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const te=r.properties.get(T);te.light=k}return T}function w(b,D,k,C,T){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Ji)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),Z=b.material;if(Array.isArray(Z)){const de=Y.groups;for(let q=0,he=de.length;q<he;q++){const V=de[q],ce=Z[V.materialIndex];if(ce&&ce.visible){const le=P(b,ce,C,T);b.onBeforeShadow(r,b,D,k,Y,le,V),r.renderBufferDirect(k,null,Y,le,b,V),b.onAfterShadow(r,b,D,k,Y,le,V)}}}else if(Z.visible){const de=P(b,Z,C,T);b.onBeforeShadow(r,b,D,k,Y,de,null),r.renderBufferDirect(k,null,Y,de,b,null),b.onAfterShadow(r,b,D,k,Y,de,null)}}const te=b.children;for(let Y=0,Z=te.length;Y<Z;Y++)w(te[Y],D,k,C,T)}function I(b){b.target.removeEventListener("dispose",I);for(const k in f){const C=f[k],T=b.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const bT={[sh]:oh,[ah]:ch,[lh]:dh,[ho]:uh,[oh]:sh,[ch]:ah,[dh]:lh,[uh]:ho};function RT(r,e){function t(){let X=!1;const Ie=new Qt;let ue=null;const ye=new Qt(0,0,0,0);return{setMask:function(Oe){ue!==Oe&&!X&&(r.colorMask(Oe,Oe,Oe,Oe),ue=Oe)},setLocked:function(Oe){X=Oe},setClear:function(Oe,ke,ft,zt,tn){tn===!0&&(Oe*=zt,ke*=zt,ft*=zt),Ie.set(Oe,ke,ft,zt),ye.equals(Ie)===!1&&(r.clearColor(Oe,ke,ft,zt),ye.copy(Ie))},reset:function(){X=!1,ue=null,ye.set(-1,0,0,0)}}}function n(){let X=!1,Ie=!1,ue=null,ye=null,Oe=null;return{setReversed:function(ke){if(Ie!==ke){const ft=e.get("EXT_clip_control");ke?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),Ie=ke;const zt=Oe;Oe=null,this.setClear(zt)}},getReversed:function(){return Ie},setTest:function(ke){ke?ie(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(ke){ue!==ke&&!X&&(r.depthMask(ke),ue=ke)},setFunc:function(ke){if(Ie&&(ke=bT[ke]),ye!==ke){switch(ke){case sh:r.depthFunc(r.NEVER);break;case oh:r.depthFunc(r.ALWAYS);break;case ah:r.depthFunc(r.LESS);break;case ho:r.depthFunc(r.LEQUAL);break;case lh:r.depthFunc(r.EQUAL);break;case uh:r.depthFunc(r.GEQUAL);break;case ch:r.depthFunc(r.GREATER);break;case dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ye=ke}},setLocked:function(ke){X=ke},setClear:function(ke){Oe!==ke&&(Ie&&(ke=1-ke),r.clearDepth(ke),Oe=ke)},reset:function(){X=!1,ue=null,ye=null,Oe=null,Ie=!1}}}function o(){let X=!1,Ie=null,ue=null,ye=null,Oe=null,ke=null,ft=null,zt=null,tn=null;return{setTest:function(At){X||(At?ie(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(At){Ie!==At&&!X&&(r.stencilMask(At),Ie=At)},setFunc:function(At,Un,Cn){(ue!==At||ye!==Un||Oe!==Cn)&&(r.stencilFunc(At,Un,Cn),ue=At,ye=Un,Oe=Cn)},setOp:function(At,Un,Cn){(ke!==At||ft!==Un||zt!==Cn)&&(r.stencilOp(At,Un,Cn),ke=At,ft=Un,zt=Cn)},setLocked:function(At){X=At},setClear:function(At){tn!==At&&(r.clearStencil(At),tn=At)},reset:function(){X=!1,Ie=null,ue=null,ye=null,Oe=null,ke=null,ft=null,zt=null,tn=null}}}const a=new t,u=new n,c=new o,h=new WeakMap,f=new WeakMap;let m={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,N=null,P=null,w=null,I=null,b=null,D=new Dt(0,0,0),k=0,C=!1,T=null,z=null,te=null,Y=null,Z=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,he=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=he>=1):V.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=he>=2);let ce=null,le={};const O=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),De=new Qt().fromArray(O),ne=new Qt().fromArray(re);function ve(X,Ie,ue,ye){const Oe=new Uint8Array(4),ke=r.createTexture();r.bindTexture(X,ke),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ft=0;ft<ue;ft++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ie,0,r.RGBA,1,1,ye,0,r.RGBA,r.UNSIGNED_BYTE,Oe):r.texImage2D(Ie+ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Oe);return ke}const G={};G[r.TEXTURE_2D]=ve(r.TEXTURE_2D,r.TEXTURE_2D,1),G[r.TEXTURE_CUBE_MAP]=ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[r.TEXTURE_2D_ARRAY]=ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),G[r.TEXTURE_3D]=ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ie(r.DEPTH_TEST),u.setFunc(ho),ht(!1),dt(Ym),ie(r.CULL_FACE),B(Gr);function ie(X){m[X]!==!0&&(r.enable(X),m[X]=!0)}function pe(X){m[X]!==!1&&(r.disable(X),m[X]=!1)}function _e(X,Ie){return g[X]!==Ie?(r.bindFramebuffer(X,Ie),g[X]=Ie,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ie),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ae(X,Ie){let ue=x,ye=!1;if(X){ue=v.get(Ie),ue===void 0&&(ue=[],v.set(Ie,ue));const Oe=X.textures;if(ue.length!==Oe.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let ke=0,ft=Oe.length;ke<ft;ke++)ue[ke]=r.COLOR_ATTACHMENT0+ke;ue.length=Oe.length,ye=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,ye=!0);ye&&r.drawBuffers(ue)}function yt(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const St={[ms]:r.FUNC_ADD,[L0]:r.FUNC_SUBTRACT,[D0]:r.FUNC_REVERSE_SUBTRACT};St[N0]=r.MIN,St[I0]=r.MAX;const at={[U0]:r.ZERO,[F0]:r.ONE,[k0]:r.SRC_COLOR,[ih]:r.SRC_ALPHA,[V0]:r.SRC_ALPHA_SATURATE,[G0]:r.DST_COLOR,[z0]:r.DST_ALPHA,[O0]:r.ONE_MINUS_SRC_COLOR,[rh]:r.ONE_MINUS_SRC_ALPHA,[H0]:r.ONE_MINUS_DST_COLOR,[B0]:r.ONE_MINUS_DST_ALPHA,[W0]:r.CONSTANT_COLOR,[X0]:r.ONE_MINUS_CONSTANT_COLOR,[$0]:r.CONSTANT_ALPHA,[j0]:r.ONE_MINUS_CONSTANT_ALPHA};function B(X,Ie,ue,ye,Oe,ke,ft,zt,tn,At){if(X===Gr){M===!0&&(pe(r.BLEND),M=!1);return}if(M===!1&&(ie(r.BLEND),M=!0),X!==P0){if(X!==S||At!==C){if((y!==ms||w!==ms)&&(r.blendEquation(r.FUNC_ADD),y=ms,w=ms),At)switch(X){case lo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qm:r.blendFunc(r.ONE,r.ONE);break;case Km:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case lo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Km:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,P=null,I=null,b=null,D.set(0,0,0),k=0,S=X,C=At}return}Oe=Oe||Ie,ke=ke||ue,ft=ft||ye,(Ie!==y||Oe!==w)&&(r.blendEquationSeparate(St[Ie],St[Oe]),y=Ie,w=Oe),(ue!==N||ye!==P||ke!==I||ft!==b)&&(r.blendFuncSeparate(at[ue],at[ye],at[ke],at[ft]),N=ue,P=ye,I=ke,b=ft),(zt.equals(D)===!1||tn!==k)&&(r.blendColor(zt.r,zt.g,zt.b,tn),D.copy(zt),k=tn),S=X,C=!1}function Ht(X,Ie){X.side===tr?pe(r.CULL_FACE):ie(r.CULL_FACE);let ue=X.side===Vn;Ie&&(ue=!ue),ht(ue),X.blending===lo&&X.transparent===!1?B(Gr):B(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),a.setMask(X.colorWrite);const ye=X.stencilWrite;c.setTest(ye),ye&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),wt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(X){T!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),T=X)}function dt(X){X!==b0?(ie(r.CULL_FACE),X!==z&&(X===Ym?r.cullFace(r.BACK):X===R0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),z=X}function Ke(X){X!==te&&(q&&r.lineWidth(X),te=X)}function wt(X,Ie,ue){X?(ie(r.POLYGON_OFFSET_FILL),(Y!==Ie||Z!==ue)&&(r.polygonOffset(Ie,ue),Y=Ie,Z=ue)):pe(r.POLYGON_OFFSET_FILL)}function We(X){X?ie(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function U(X){X===void 0&&(X=r.TEXTURE0+de-1),ce!==X&&(r.activeTexture(X),ce=X)}function R(X,Ie,ue){ue===void 0&&(ce===null?ue=r.TEXTURE0+de-1:ue=ce);let ye=le[ue];ye===void 0&&(ye={type:void 0,texture:void 0},le[ue]=ye),(ye.type!==X||ye.texture!==Ie)&&(ce!==ue&&(r.activeTexture(ue),ce=ue),r.bindTexture(X,Ie||G[X]),ye.type=X,ye.texture=Ie)}function J(){const X=le[ce];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(X){De.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),De.copy(X))}function Ne(X){ne.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),ne.copy(X))}function pt(X,Ie){let ue=f.get(Ie);ue===void 0&&(ue=new WeakMap,f.set(Ie,ue));let ye=ue.get(X);ye===void 0&&(ye=r.getUniformBlockIndex(Ie,X.name),ue.set(X,ye))}function ut(X,Ie){const ye=f.get(Ie).get(X);h.get(Ie)!==ye&&(r.uniformBlockBinding(Ie,ye,X.__bindingPointIndex),h.set(Ie,ye))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},ce=null,le={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,N=null,P=null,w=null,I=null,b=null,D=new Dt(0,0,0),k=0,C=!1,T=null,z=null,te=null,Y=null,Z=null,De.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ie,disable:pe,bindFramebuffer:_e,drawBuffers:Ae,useProgram:yt,setBlending:B,setMaterial:Ht,setFlipSided:ht,setCullFace:dt,setLineWidth:Ke,setPolygonOffset:wt,setScissorTest:We,activeTexture:U,bindTexture:R,unbindTexture:J,compressedTexImage2D:ge,compressedTexImage3D:xe,texImage2D:Ce,texImage3D:Be,updateUBOMapping:pt,uniformBlockBinding:ut,texStorage2D:et,texStorage3D:Ee,texSubImage2D:fe,texSubImage3D:$e,compressedTexSubImage2D:Re,compressedTexSubImage3D:Qe,scissor:tt,viewport:Ne,reset:Nt}}function CT(r,e,t,n,o,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ut,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,R){return x?new OffscreenCanvas(U,R):wu("canvas")}function M(U,R,J){let ge=1;const xe=We(U);if((xe.width>J||xe.height>J)&&(ge=J/Math.max(xe.width,xe.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const fe=Math.floor(ge*xe.width),$e=Math.floor(ge*xe.height);g===void 0&&(g=E(fe,$e));const Re=R?E(fe,$e):g;return Re.width=fe,Re.height=$e,Re.getContext("2d").drawImage(U,0,0,fe,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+$e+")."),Re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),U;return U}function S(U){return U.generateMipmaps}function y(U){r.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(U,R,J,ge,xe=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=R;if(R===r.RED&&(J===r.FLOAT&&(fe=r.R32F),J===r.HALF_FLOAT&&(fe=r.R16F),J===r.UNSIGNED_BYTE&&(fe=r.R8)),R===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.R8UI),J===r.UNSIGNED_SHORT&&(fe=r.R16UI),J===r.UNSIGNED_INT&&(fe=r.R32UI),J===r.BYTE&&(fe=r.R8I),J===r.SHORT&&(fe=r.R16I),J===r.INT&&(fe=r.R32I)),R===r.RG&&(J===r.FLOAT&&(fe=r.RG32F),J===r.HALF_FLOAT&&(fe=r.RG16F),J===r.UNSIGNED_BYTE&&(fe=r.RG8)),R===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.RG8UI),J===r.UNSIGNED_SHORT&&(fe=r.RG16UI),J===r.UNSIGNED_INT&&(fe=r.RG32UI),J===r.BYTE&&(fe=r.RG8I),J===r.SHORT&&(fe=r.RG16I),J===r.INT&&(fe=r.RG32I)),R===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),J===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),J===r.UNSIGNED_INT&&(fe=r.RGB32UI),J===r.BYTE&&(fe=r.RGB8I),J===r.SHORT&&(fe=r.RGB16I),J===r.INT&&(fe=r.RGB32I)),R===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),J===r.UNSIGNED_INT&&(fe=r.RGBA32UI),J===r.BYTE&&(fe=r.RGBA8I),J===r.SHORT&&(fe=r.RGBA16I),J===r.INT&&(fe=r.RGBA32I)),R===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),R===r.RGBA){const $e=xe?Eu:Lt.getTransfer(ge);J===r.FLOAT&&(fe=r.RGBA32F),J===r.HALF_FLOAT&&(fe=r.RGBA16F),J===r.UNSIGNED_BYTE&&(fe=$e===It?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function w(U,R){let J;return U?R===null||R===ys||R===_a?J=r.DEPTH24_STENCIL8:R===ir?J=r.DEPTH32F_STENCIL8:R===va&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ys||R===_a?J=r.DEPTH_COMPONENT24:R===ir?J=r.DEPTH_COMPONENT32F:R===va&&(J=r.DEPTH_COMPONENT16),J}function I(U,R){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ai&&U.minFilter!==Fi?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function b(U){const R=U.target;R.removeEventListener("dispose",b),k(R),R.isVideoTexture&&m.delete(R)}function D(U){const R=U.target;R.removeEventListener("dispose",D),T(R)}function k(U){const R=n.get(U);if(R.__webglInit===void 0)return;const J=U.source,ge=v.get(J);if(ge){const xe=ge[R.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(U),Object.keys(ge).length===0&&v.delete(J)}n.remove(U)}function C(U){const R=n.get(U);r.deleteTexture(R.__webglTexture);const J=U.source,ge=v.get(J);delete ge[R.__cacheKey],u.memory.textures--}function T(U){const R=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(R.__webglFramebuffer[ge]))for(let xe=0;xe<R.__webglFramebuffer[ge].length;xe++)r.deleteFramebuffer(R.__webglFramebuffer[ge][xe]);else r.deleteFramebuffer(R.__webglFramebuffer[ge]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[ge])}else{if(Array.isArray(R.__webglFramebuffer))for(let ge=0;ge<R.__webglFramebuffer.length;ge++)r.deleteFramebuffer(R.__webglFramebuffer[ge]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ge=0;ge<R.__webglColorRenderbuffer.length;ge++)R.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[ge]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const J=U.textures;for(let ge=0,xe=J.length;ge<xe;ge++){const fe=n.get(J[ge]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),u.memory.textures--),n.remove(J[ge])}n.remove(U)}let z=0;function te(){z=0}function Y(){const U=z;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),z+=1,U}function Z(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function de(U,R){const J=n.get(U);if(U.isVideoTexture&&Ke(U),U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){const ge=U.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(J,U,R);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+R)}function q(U,R){const J=n.get(U);if(U.version>0&&J.__version!==U.version){ne(J,U,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+R)}function he(U,R){const J=n.get(U);if(U.version>0&&J.__version!==U.version){ne(J,U,R);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+R)}function V(U,R){const J=n.get(U);if(U.version>0&&J.__version!==U.version){ve(J,U,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+R)}const ce={[ph]:r.REPEAT,[vs]:r.CLAMP_TO_EDGE,[mh]:r.MIRRORED_REPEAT},le={[Ai]:r.NEAREST,[ix]:r.NEAREST_MIPMAP_NEAREST,[Fl]:r.NEAREST_MIPMAP_LINEAR,[Fi]:r.LINEAR,[md]:r.LINEAR_MIPMAP_NEAREST,[_s]:r.LINEAR_MIPMAP_LINEAR},O={[lx]:r.NEVER,[px]:r.ALWAYS,[ux]:r.LESS,[Ov]:r.LEQUAL,[cx]:r.EQUAL,[fx]:r.GEQUAL,[dx]:r.GREATER,[hx]:r.NOTEQUAL};function re(U,R){if(R.type===ir&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Fi||R.magFilter===md||R.magFilter===Fl||R.magFilter===_s||R.minFilter===Fi||R.minFilter===md||R.minFilter===Fl||R.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,ce[R.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,ce[R.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,ce[R.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,le[R.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,le[R.minFilter]),R.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,O[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ai||R.minFilter!==Fl&&R.minFilter!==_s||R.type===ir&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function De(U,R){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",b));const ge=R.source;let xe=v.get(ge);xe===void 0&&(xe={},v.set(ge,xe));const fe=Z(R);if(fe!==U.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),xe[fe].usedTimes++;const $e=xe[U.__cacheKey];$e!==void 0&&(xe[U.__cacheKey].usedTimes--,$e.usedTimes===0&&C(R)),U.__cacheKey=fe,U.__webglTexture=xe[fe].texture}return J}function ne(U,R,J){let ge=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ge=r.TEXTURE_3D);const xe=De(U,R),fe=R.source;t.bindTexture(ge,U.__webglTexture,r.TEXTURE0+J);const $e=n.get(fe);if(fe.version!==$e.__version||xe===!0){t.activeTexture(r.TEXTURE0+J);const Re=Lt.getPrimaries(Lt.workingColorSpace),Qe=R.colorSpace===Br?null:Lt.getPrimaries(R.colorSpace),et=R.colorSpace===Br||Re===Qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ee=M(R.image,!1,o.maxTextureSize);Ee=wt(R,Ee);const Ce=a.convert(R.format,R.colorSpace),Be=a.convert(R.type);let tt=P(R.internalFormat,Ce,Be,R.colorSpace,R.isVideoTexture);re(ge,R);let Ne;const pt=R.mipmaps,ut=R.isVideoTexture!==!0,Nt=$e.__version===void 0||xe===!0,X=fe.dataReady,Ie=I(R,Ee);if(R.isDepthTexture)tt=w(R.format===xa,R.type),Nt&&(ut?t.texStorage2D(r.TEXTURE_2D,1,tt,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,tt,Ee.width,Ee.height,0,Ce,Be,null));else if(R.isDataTexture)if(pt.length>0){ut&&Nt&&t.texStorage2D(r.TEXTURE_2D,Ie,tt,pt[0].width,pt[0].height);for(let ue=0,ye=pt.length;ue<ye;ue++)Ne=pt[ue],ut?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Ne.width,Ne.height,Ce,Be,Ne.data):t.texImage2D(r.TEXTURE_2D,ue,tt,Ne.width,Ne.height,0,Ce,Be,Ne.data);R.generateMipmaps=!1}else ut?(Nt&&t.texStorage2D(r.TEXTURE_2D,Ie,tt,Ee.width,Ee.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ce,Be,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,tt,Ee.width,Ee.height,0,Ce,Be,Ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ut&&Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,tt,pt[0].width,pt[0].height,Ee.depth);for(let ue=0,ye=pt.length;ue<ye;ue++)if(Ne=pt[ue],R.format!==Ti)if(Ce!==null)if(ut){if(X)if(R.layerUpdates.size>0){const Oe=wg(Ne.width,Ne.height,R.format,R.type);for(const ke of R.layerUpdates){const ft=Ne.data.subarray(ke*Oe/Ne.data.BYTES_PER_ELEMENT,(ke+1)*Oe/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,ke,Ne.width,Ne.height,1,Ce,ft)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Ne.width,Ne.height,Ee.depth,Ce,Ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,tt,Ne.width,Ne.height,Ee.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Ne.width,Ne.height,Ee.depth,Ce,Be,Ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,tt,Ne.width,Ne.height,Ee.depth,0,Ce,Be,Ne.data)}else{ut&&Nt&&t.texStorage2D(r.TEXTURE_2D,Ie,tt,pt[0].width,pt[0].height);for(let ue=0,ye=pt.length;ue<ye;ue++)Ne=pt[ue],R.format!==Ti?Ce!==null?ut?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Ne.width,Ne.height,Ce,Ne.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,tt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Ne.width,Ne.height,Ce,Be,Ne.data):t.texImage2D(r.TEXTURE_2D,ue,tt,Ne.width,Ne.height,0,Ce,Be,Ne.data)}else if(R.isDataArrayTexture)if(ut){if(Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,tt,Ee.width,Ee.height,Ee.depth),X)if(R.layerUpdates.size>0){const ue=wg(Ee.width,Ee.height,R.format,R.type);for(const ye of R.layerUpdates){const Oe=Ee.data.subarray(ye*ue/Ee.data.BYTES_PER_ELEMENT,(ye+1)*ue/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,Ce,Be,Oe)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ce,Be,Ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,Ee.width,Ee.height,Ee.depth,0,Ce,Be,Ee.data);else if(R.isData3DTexture)ut?(Nt&&t.texStorage3D(r.TEXTURE_3D,Ie,tt,Ee.width,Ee.height,Ee.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ce,Be,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,tt,Ee.width,Ee.height,Ee.depth,0,Ce,Be,Ee.data);else if(R.isFramebufferTexture){if(Nt)if(ut)t.texStorage2D(r.TEXTURE_2D,Ie,tt,Ee.width,Ee.height);else{let ue=Ee.width,ye=Ee.height;for(let Oe=0;Oe<Ie;Oe++)t.texImage2D(r.TEXTURE_2D,Oe,tt,ue,ye,0,Ce,Be,null),ue>>=1,ye>>=1}}else if(pt.length>0){if(ut&&Nt){const ue=We(pt[0]);t.texStorage2D(r.TEXTURE_2D,Ie,tt,ue.width,ue.height)}for(let ue=0,ye=pt.length;ue<ye;ue++)Ne=pt[ue],ut?X&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Ce,Be,Ne):t.texImage2D(r.TEXTURE_2D,ue,tt,Ce,Be,Ne);R.generateMipmaps=!1}else if(ut){if(Nt){const ue=We(Ee);t.texStorage2D(r.TEXTURE_2D,Ie,tt,ue.width,ue.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,Be,Ee)}else t.texImage2D(r.TEXTURE_2D,0,tt,Ce,Be,Ee);S(R)&&y(ge),$e.__version=fe.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ve(U,R,J){if(R.image.length!==6)return;const ge=De(U,R),xe=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+J);const fe=n.get(xe);if(xe.version!==fe.__version||ge===!0){t.activeTexture(r.TEXTURE0+J);const $e=Lt.getPrimaries(Lt.workingColorSpace),Re=R.colorSpace===Br?null:Lt.getPrimaries(R.colorSpace),Qe=R.colorSpace===Br||$e===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const et=R.isCompressedTexture||R.image[0].isCompressedTexture,Ee=R.image[0]&&R.image[0].isDataTexture,Ce=[];for(let ye=0;ye<6;ye++)!et&&!Ee?Ce[ye]=M(R.image[ye],!0,o.maxCubemapSize):Ce[ye]=Ee?R.image[ye].image:R.image[ye],Ce[ye]=wt(R,Ce[ye]);const Be=Ce[0],tt=a.convert(R.format,R.colorSpace),Ne=a.convert(R.type),pt=P(R.internalFormat,tt,Ne,R.colorSpace),ut=R.isVideoTexture!==!0,Nt=fe.__version===void 0||ge===!0,X=xe.dataReady;let Ie=I(R,Be);re(r.TEXTURE_CUBE_MAP,R);let ue;if(et){ut&&Nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,Be.width,Be.height);for(let ye=0;ye<6;ye++){ue=Ce[ye].mipmaps;for(let Oe=0;Oe<ue.length;Oe++){const ke=ue[Oe];R.format!==Ti?tt!==null?ut?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe,0,0,ke.width,ke.height,tt,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe,pt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe,0,0,ke.width,ke.height,tt,Ne,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe,pt,ke.width,ke.height,0,tt,Ne,ke.data)}}}else{if(ue=R.mipmaps,ut&&Nt){ue.length>0&&Ie++;const ye=We(Ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){ut?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ce[ye].width,Ce[ye].height,tt,Ne,Ce[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,Ce[ye].width,Ce[ye].height,0,tt,Ne,Ce[ye].data);for(let Oe=0;Oe<ue.length;Oe++){const ft=ue[Oe].image[ye].image;ut?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe+1,0,0,ft.width,ft.height,tt,Ne,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe+1,pt,ft.width,ft.height,0,tt,Ne,ft.data)}}else{ut?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,tt,Ne,Ce[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,tt,Ne,Ce[ye]);for(let Oe=0;Oe<ue.length;Oe++){const ke=ue[Oe];ut?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe+1,0,0,tt,Ne,ke.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Oe+1,pt,tt,Ne,ke.image[ye])}}}S(R)&&y(r.TEXTURE_CUBE_MAP),fe.__version=xe.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function G(U,R,J,ge,xe,fe){const $e=a.convert(J.format,J.colorSpace),Re=a.convert(J.type),Qe=P(J.internalFormat,$e,Re,J.colorSpace),et=n.get(R),Ee=n.get(J);if(Ee.__renderTarget=R,!et.__hasExternalTextures){const Ce=Math.max(1,R.width>>fe),Be=Math.max(1,R.height>>fe);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,fe,Qe,Ce,Be,R.depth,0,$e,Re,null):t.texImage2D(xe,fe,Qe,Ce,Be,0,$e,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),dt(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,xe,Ee.__webglTexture,0,ht(R)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,xe,Ee.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(U,R,J){if(r.bindRenderbuffer(r.RENDERBUFFER,U),R.depthBuffer){const ge=R.depthTexture,xe=ge&&ge.isDepthTexture?ge.type:null,fe=w(R.stencilBuffer,xe),$e=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=ht(R);dt(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,fe,R.width,R.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,fe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,fe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$e,r.RENDERBUFFER,U)}else{const ge=R.textures;for(let xe=0;xe<ge.length;xe++){const fe=ge[xe],$e=a.convert(fe.format,fe.colorSpace),Re=a.convert(fe.type),Qe=P(fe.internalFormat,$e,Re,fe.colorSpace),et=ht(R);J&&dt(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Qe,R.width,R.height):dt(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,Qe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Qe,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=n.get(R.depthTexture);ge.__renderTarget=R,(!ge.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),de(R.depthTexture,0);const xe=ge.__webglTexture,fe=ht(R);if(R.depthTexture.format===ya)dt(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(R.depthTexture.format===xa)dt(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function _e(U){const R=n.get(U),J=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const ge=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ge){const xe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ge.removeEventListener("dispose",xe)};ge.addEventListener("dispose",xe),R.__depthDisposeCallback=xe}R.__boundDepthTexture=ge}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ge=U.texture.mipmaps;ge&&ge.length>0?pe(R.__webglFramebuffer[0],U):pe(R.__webglFramebuffer,U)}else if(J){R.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[ge]),R.__webglDepthbuffer[ge]===void 0)R.__webglDepthbuffer[ge]=r.createRenderbuffer(),ie(R.__webglDepthbuffer[ge],U,!1);else{const xe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,fe)}}else{const ge=U.texture.mipmaps;if(ge&&ge.length>0?t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),ie(R.__webglDepthbuffer,U,!1);else{const xe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,fe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(U,R,J){const ge=n.get(U);R!==void 0&&G(ge.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&_e(U)}function yt(U){const R=U.texture,J=n.get(U),ge=n.get(R);U.addEventListener("dispose",D);const xe=U.textures,fe=U.isWebGLCubeRenderTarget===!0,$e=xe.length>1;if($e||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=R.version,u.memory.textures++),fe){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let Qe=0;Qe<R.mipmaps.length;Qe++)J.__webglFramebuffer[Re][Qe]=r.createFramebuffer()}else J.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)J.__webglFramebuffer[Re]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if($e)for(let Re=0,Qe=xe.length;Re<Qe;Re++){const et=n.get(xe[Re]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),u.memory.textures++)}if(U.samples>0&&dt(U)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Qe=xe[Re];J.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Re]);const et=a.convert(Qe.format,Qe.colorSpace),Ee=a.convert(Qe.type),Ce=P(Qe.internalFormat,et,Ee,Qe.colorSpace,U.isXRRenderTarget===!0),Be=ht(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Ce,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,J.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),ie(J.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),re(r.TEXTURE_CUBE_MAP,R);for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0)for(let Qe=0;Qe<R.mipmaps.length;Qe++)G(J.__webglFramebuffer[Re][Qe],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe);else G(J.__webglFramebuffer[Re],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(R)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Re=0,Qe=xe.length;Re<Qe;Re++){const et=xe[Re],Ee=n.get(et);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),re(r.TEXTURE_2D,et),G(J.__webglFramebuffer,U,et,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),S(et)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,ge.__webglTexture),re(Re,R),R.mipmaps&&R.mipmaps.length>0)for(let Qe=0;Qe<R.mipmaps.length;Qe++)G(J.__webglFramebuffer[Qe],U,R,r.COLOR_ATTACHMENT0,Re,Qe);else G(J.__webglFramebuffer,U,R,r.COLOR_ATTACHMENT0,Re,0);S(R)&&y(Re),t.unbindTexture()}U.depthBuffer&&_e(U)}function St(U){const R=U.textures;for(let J=0,ge=R.length;J<ge;J++){const xe=R[J];if(S(xe)){const fe=N(U),$e=n.get(xe).__webglTexture;t.bindTexture(fe,$e),y(fe),t.unbindTexture()}}}const at=[],B=[];function Ht(U){if(U.samples>0){if(dt(U)===!1){const R=U.textures,J=U.width,ge=U.height;let xe=r.COLOR_BUFFER_BIT;const fe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$e=n.get(U),Re=R.length>1;if(Re)for(let et=0;et<R.length;et++)t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Qe=U.texture.mipmaps;Qe&&Qe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let et=0;et<R.length;et++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$e.__webglColorRenderbuffer[et]);const Ee=n.get(R[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,J,ge,0,0,J,ge,xe,r.NEAREST),h===!0&&(at.length=0,B.length=0,at.push(r.COLOR_ATTACHMENT0+et),U.depthBuffer&&U.resolveDepthBuffer===!1&&(at.push(fe),B.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let et=0;et<R.length;et++){t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,$e.__webglColorRenderbuffer[et]);const Ee=n.get(R[et]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const R=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function ht(U){return Math.min(o.maxSamples,U.samples)}function dt(U){const R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ke(U){const R=u.render.frame;m.get(U)!==R&&(m.set(U,R),U.update())}function wt(U,R){const J=U.colorSpace,ge=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==mo&&J!==Br&&(Lt.getTransfer(J)===It?(ge!==Ti||xe!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=Y,this.resetTextureUnits=te,this.setTexture2D=de,this.setTexture2DArray=q,this.setTexture3D=he,this.setTextureCube=V,this.rebindTextures=Ae,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=G,this.useMultisampledRTT=dt}function PT(r,e){function t(n,o=Br){let a;const u=Lt.getTransfer(o);if(n===lr)return r.UNSIGNED_BYTE;if(n===nf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===rf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Dv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Pv)return r.BYTE;if(n===Lv)return r.SHORT;if(n===va)return r.UNSIGNED_SHORT;if(n===tf)return r.INT;if(n===ys)return r.UNSIGNED_INT;if(n===ir)return r.FLOAT;if(n===Sa)return r.HALF_FLOAT;if(n===Nv)return r.ALPHA;if(n===Iv)return r.RGB;if(n===Ti)return r.RGBA;if(n===ya)return r.DEPTH_COMPONENT;if(n===xa)return r.DEPTH_STENCIL;if(n===Uv)return r.RED;if(n===sf)return r.RED_INTEGER;if(n===Fv)return r.RG;if(n===of)return r.RG_INTEGER;if(n===af)return r.RGBA_INTEGER;if(n===pu||n===mu||n===gu||n===vu)if(u===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===vh||n===_h||n===yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===gh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xh||n===Sh||n===Eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===xh||n===Sh)return u===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Eh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mh||n===wh||n===Th||n===Ah||n===bh||n===Rh||n===Ch||n===Ph||n===Lh||n===Dh||n===Nh||n===Ih||n===Uh||n===Fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Mh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ih)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fh)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_u||n===kh||n===Oh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===_u)return u===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kv||n===zh||n===Bh||n===Gh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===_u)return a.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_a?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const LT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DT=`
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

}`;class NT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const o=new Wn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xr({vertexShader:LT,fragmentShader:DT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sr(new Cu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IT extends yo{constructor(e,t){super();const n=this;let o=null,a=1,u=null,c="local-floor",h=1,f=null,m=null,g=null,v=null,x=null,E=null;const M=new NT,S=t.getContextAttributes();let y=null,N=null;const P=[],w=[],I=new Ut;let b=null;const D=new li;D.viewport=new Qt;const k=new li;k.viewport=new Qt;const C=[D,k],T=new eS;let z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ve=P[ne];return ve===void 0&&(ve=new kd,P[ne]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ne){let ve=P[ne];return ve===void 0&&(ve=new kd,P[ne]=ve),ve.getGripSpace()},this.getHand=function(ne){let ve=P[ne];return ve===void 0&&(ve=new kd,P[ne]=ve),ve.getHandSpace()};function Y(ne){const ve=w.indexOf(ne.inputSource);if(ve===-1)return;const G=P[ve];G!==void 0&&(G.update(ne.inputSource,ne.frame,f||u),G.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Z(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",de);for(let ne=0;ne<P.length;ne++){const ve=w[ne];ve!==null&&(w[ne]=null,P[ne].disconnect(ve))}z=null,te=null,M.reset(),e.setRenderTarget(y),x=null,v=null,g=null,o=null,N=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(ne){f=ne},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,ie=null,pe=null;S.depth&&(pe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=S.stencil?xa:ya,ie=S.stencil?_a:ys);const _e={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:a};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(_e),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new xs(v.textureWidth,v.textureHeight,{format:Ti,type:lr,depthTexture:new Zv(v.textureWidth,v.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const G={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,G),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new xs(x.framebufferWidth,x.framebufferHeight,{format:Ti,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),f=null,u=await o.requestReferenceSpace(c),De.setContext(o),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function de(ne){for(let ve=0;ve<ne.removed.length;ve++){const G=ne.removed[ve],ie=w.indexOf(G);ie>=0&&(w[ie]=null,P[ie].disconnect(G))}for(let ve=0;ve<ne.added.length;ve++){const G=ne.added[ve];let ie=w.indexOf(G);if(ie===-1){for(let _e=0;_e<P.length;_e++)if(_e>=w.length){w.push(G),ie=_e;break}else if(w[_e]===null){w[_e]=G,ie=_e;break}if(ie===-1)break}const pe=P[ie];pe&&pe.connect(G)}}const q=new ae,he=new ae;function V(ne,ve,G){q.setFromMatrixPosition(ve.matrixWorld),he.setFromMatrixPosition(G.matrixWorld);const ie=q.distanceTo(he),pe=ve.projectionMatrix.elements,_e=G.projectionMatrix.elements,Ae=pe[14]/(pe[10]-1),yt=pe[14]/(pe[10]+1),St=(pe[9]+1)/pe[5],at=(pe[9]-1)/pe[5],B=(pe[8]-1)/pe[0],Ht=(_e[8]+1)/_e[0],ht=Ae*B,dt=Ae*Ht,Ke=ie/(-B+Ht),wt=Ke*-B;if(ve.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(wt),ne.translateZ(Ke),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),pe[10]===-1)ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const We=Ae+Ke,U=yt+Ke,R=ht-wt,J=dt+(ie-wt),ge=St*yt/U*We,xe=at*yt/U*We;ne.projectionMatrix.makePerspective(R,J,ge,xe,We,U),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ce(ne,ve){ve===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ve.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let ve=ne.near,G=ne.far;M.texture!==null&&(M.depthNear>0&&(ve=M.depthNear),M.depthFar>0&&(G=M.depthFar)),T.near=k.near=D.near=ve,T.far=k.far=D.far=G,(z!==T.near||te!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,te=T.far),D.layers.mask=ne.layers.mask|2,k.layers.mask=ne.layers.mask|4,T.layers.mask=D.layers.mask|k.layers.mask;const ie=ne.parent,pe=T.cameras;ce(T,ie);for(let _e=0;_e<pe.length;_e++)ce(pe[_e],ie);pe.length===2?V(T,D,k):T.projectionMatrix.copy(D.projectionMatrix),le(ne,T,ie)};function le(ne,ve,G){G===null?ne.matrix.copy(ve.matrixWorld):(ne.matrix.copy(G.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ve.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Hh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(ne){h=ne,v!==null&&(v.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(T)};let O=null;function re(ne,ve){if(m=ve.getViewerPose(f||u),E=ve,m!==null){const G=m.views;x!==null&&(e.setRenderTargetFramebuffer(N,x.framebuffer),e.setRenderTarget(N));let ie=!1;G.length!==T.cameras.length&&(T.cameras.length=0,ie=!0);for(let Ae=0;Ae<G.length;Ae++){const yt=G[Ae];let St=null;if(x!==null)St=x.getViewport(yt);else{const B=g.getViewSubImage(v,yt);St=B.viewport,Ae===0&&(e.setRenderTargetTextures(N,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(N))}let at=C[Ae];at===void 0&&(at=new li,at.layers.enable(Ae),at.viewport=new Qt,C[Ae]=at),at.matrix.fromArray(yt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(yt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(St.x,St.y,St.width,St.height),Ae===0&&(T.matrix.copy(at.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ie===!0&&T.cameras.push(at)}const pe=o.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const Ae=g.getDepthInformation(G[0]);Ae&&Ae.isValid&&Ae.texture&&M.init(e,Ae,o.renderState)}}for(let G=0;G<P.length;G++){const ie=w[G],pe=P[G];ie!==null&&pe!==void 0&&pe.update(ie,ve,f||u)}O&&O(ne,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),E=null}const De=new Qv;De.setAnimationLoop(re),this.setAnimationLoop=function(ne){O=ne},this.dispose=function(){}}}const ds=new ur,UT=new jt;function FT(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function n(S,y){y.color.getRGB(S.fogColor.value,Xv(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,N,P,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),m(S,y)):y.isMeshStandardMaterial?(a(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(a(S,y),E(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),M(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?h(S,y,N,P):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Vn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Vn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),P=N.envMap,w=N.envMapRotation;P&&(S.envMap.value=P,ds.copy(w),ds.x*=-1,ds.y*=-1,ds.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),S.envMapRotation.value.setFromMatrix4(UT.makeRotationFromEuler(ds)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,N,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Vn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function kT(r,e,t,n){let o={},a={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,P){const w=P.program;n.uniformBlockBinding(N,w)}function f(N,P){let w=o[N.id];w===void 0&&(E(N),w=m(N),o[N.id]=w,N.addEventListener("dispose",S));const I=P.program;n.updateUBOMapping(N,I);const b=e.render.frame;a[N.id]!==b&&(v(N),a[N.id]=b)}function m(N){const P=g();N.__bindingPointIndex=P;const w=r.createBuffer(),I=N.__size,b=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,I,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,w),w}function g(){for(let N=0;N<c;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const P=o[N.id],w=N.uniforms,I=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let b=0,D=w.length;b<D;b++){const k=Array.isArray(w[b])?w[b]:[w[b]];for(let C=0,T=k.length;C<T;C++){const z=k[C];if(x(z,b,C,I)===!0){const te=z.__offset,Y=Array.isArray(z.value)?z.value:[z.value];let Z=0;for(let de=0;de<Y.length;de++){const q=Y[de],he=M(q);typeof q=="number"||typeof q=="boolean"?(z.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,te+Z,z.__data)):q.isMatrix3?(z.__data[0]=q.elements[0],z.__data[1]=q.elements[1],z.__data[2]=q.elements[2],z.__data[3]=0,z.__data[4]=q.elements[3],z.__data[5]=q.elements[4],z.__data[6]=q.elements[5],z.__data[7]=0,z.__data[8]=q.elements[6],z.__data[9]=q.elements[7],z.__data[10]=q.elements[8],z.__data[11]=0):(q.toArray(z.__data,Z),Z+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(N,P,w,I){const b=N.value,D=P+"_"+w;if(I[D]===void 0)return typeof b=="number"||typeof b=="boolean"?I[D]=b:I[D]=b.clone(),!0;{const k=I[D];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return I[D]=b,!0}else if(k.equals(b)===!1)return k.copy(b),!0}return!1}function E(N){const P=N.uniforms;let w=0;const I=16;for(let D=0,k=P.length;D<k;D++){const C=Array.isArray(P[D])?P[D]:[P[D]];for(let T=0,z=C.length;T<z;T++){const te=C[T],Y=Array.isArray(te.value)?te.value:[te.value];for(let Z=0,de=Y.length;Z<de;Z++){const q=Y[Z],he=M(q),V=w%I,ce=V%he.boundary,le=V+ce;w+=ce,le!==0&&I-le<he.storage&&(w+=I-le),te.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=w,w+=he.storage}}}const b=w%I;return b>0&&(w+=I-b),N.__size=w,N.__cache={},this}function M(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),P}function S(N){const P=N.target;P.removeEventListener("dispose",S);const w=u.indexOf(P.__bindingPointIndex);u.splice(w,1),r.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function y(){for(const N in o)r.deleteBuffer(o[N]);u=[],o={},a={}}return{bind:h,update:f,dispose:y}}class OT{constructor(e={}){const{canvas:t=gx(),context:n=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const N=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=ai;let b=0,D=0,k=null,C=-1,T=null;const z=new Qt,te=new Qt;let Y=null;const Z=new Dt(0);let de=0,q=t.width,he=t.height,V=1,ce=null,le=null;const O=new Qt(0,0,q,he),re=new Qt(0,0,q,he);let De=!1;const ne=new Yv;let ve=!1,G=!1;const ie=new jt,pe=new jt,_e=new ae,Ae=new Qt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function at(){return k===null?V:1}let B=n;function Ht(L,$){return t.getContext(L,$)}try{const L={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ef}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",ke,!1),B===null){const $="webgl2";if(B=Ht($,L),B===null)throw Ht($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ht,dt,Ke,wt,We,U,R,J,ge,xe,fe,$e,Re,Qe,et,Ee,Ce,Be,tt,Ne,pt,ut,Nt,X;function Ie(){ht=new YM(B),ht.init(),ut=new PT(B,ht),dt=new GM(B,ht,e,ut),Ke=new RT(B,ht),dt.reverseDepthBuffer&&v&&Ke.buffers.depth.setReversed(!0),wt=new ZM(B),We=new mT,U=new CT(B,ht,Ke,We,dt,ut,wt),R=new VM(w),J=new jM(w),ge=new iS(B),Nt=new zM(B,ge),xe=new qM(B,ge,wt,Nt),fe=new JM(B,xe,ge,wt),tt=new QM(B,dt,U),Ee=new HM(We),$e=new pT(w,R,J,ht,dt,Nt,Ee),Re=new FT(w,We),Qe=new vT,et=new MT(ht),Be=new OM(w,R,J,Ke,fe,x,h),Ce=new AT(w,fe,dt),X=new kT(B,wt,dt,Ke),Ne=new BM(B,ht,wt),pt=new KM(B,ht,wt),wt.programs=$e.programs,w.capabilities=dt,w.extensions=ht,w.properties=We,w.renderLists=Qe,w.shadowMap=Ce,w.state=Ke,w.info=wt}Ie();const ue=new IT(w,B);this.xr=ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const L=ht.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ht.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(q,he,!1))},this.getSize=function(L){return L.set(q,he)},this.setSize=function(L,$,oe=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,he=$,t.width=Math.floor(L*V),t.height=Math.floor($*V),oe===!0&&(t.style.width=L+"px",t.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(q*V,he*V).floor()},this.setDrawingBufferSize=function(L,$,oe){q=L,he=$,V=oe,t.width=Math.floor(L*oe),t.height=Math.floor($*oe),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(z)},this.getViewport=function(L){return L.copy(O)},this.setViewport=function(L,$,oe,Q){L.isVector4?O.set(L.x,L.y,L.z,L.w):O.set(L,$,oe,Q),Ke.viewport(z.copy(O).multiplyScalar(V).round())},this.getScissor=function(L){return L.copy(re)},this.setScissor=function(L,$,oe,Q){L.isVector4?re.set(L.x,L.y,L.z,L.w):re.set(L,$,oe,Q),Ke.scissor(te.copy(re).multiplyScalar(V).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(L){Ke.setScissorTest(De=L)},this.setOpaqueSort=function(L){ce=L},this.setTransparentSort=function(L){le=L},this.getClearColor=function(L){return L.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(L=!0,$=!0,oe=!0){let Q=0;if(L){let j=!1;if(k!==null){const be=k.texture.format;j=be===af||be===of||be===sf}if(j){const be=k.texture.type,Ue=be===lr||be===ys||be===va||be===_a||be===nf||be===rf,Ge=Be.getClearColor(),Xe=Be.getClearAlpha(),lt=Ge.r,st=Ge.g,Ye=Ge.b;Ue?(E[0]=lt,E[1]=st,E[2]=Ye,E[3]=Xe,B.clearBufferuiv(B.COLOR,0,E)):(M[0]=lt,M[1]=st,M[2]=Ye,M[3]=Xe,B.clearBufferiv(B.COLOR,0,M))}else Q|=B.COLOR_BUFFER_BIT}$&&(Q|=B.DEPTH_BUFFER_BIT),oe&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Be.dispose(),Qe.dispose(),et.dispose(),We.dispose(),R.dispose(),J.dispose(),fe.dispose(),Nt.dispose(),X.dispose(),$e.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ss),ue.removeEventListener("sessionend",dr),ki.stop()};function ye(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const L=wt.autoReset,$=Ce.enabled,oe=Ce.autoUpdate,Q=Ce.needsUpdate,j=Ce.type;Ie(),wt.autoReset=L,Ce.enabled=$,Ce.autoUpdate=oe,Ce.needsUpdate=Q,Ce.type=j}function ke(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ft(L){const $=L.target;$.removeEventListener("dispose",ft),zt($)}function zt(L){tn(L),We.remove(L)}function tn(L){const $=We.get(L).programs;$!==void 0&&($.forEach(function(oe){$e.releaseProgram(oe)}),L.isShaderMaterial&&$e.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,oe,Q,j,be){$===null&&($=yt);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,Ge=Pa(L,$,oe,Q,j);Ke.setMaterial(Q,Ue);let Xe=oe.index,lt=1;if(Q.wireframe===!0){if(Xe=xe.getWireframeAttribute(oe),Xe===void 0)return;lt=2}const st=oe.drawRange,Ye=oe.attributes.position;let Et=st.start*lt,mt=(st.start+st.count)*lt;be!==null&&(Et=Math.max(Et,be.start*lt),mt=Math.min(mt,(be.start+be.count)*lt)),Xe!==null?(Et=Math.max(Et,0),mt=Math.min(mt,Xe.count)):Ye!=null&&(Et=Math.max(Et,0),mt=Math.min(mt,Ye.count));const Yt=mt-Et;if(Yt<0||Yt===1/0)return;Nt.setup(j,Q,Ge,oe,Xe);let Vt,Tt=Ne;if(Xe!==null&&(Vt=ge.get(Xe),Tt=pt,Tt.setIndex(Vt)),j.isMesh)Q.wireframe===!0?(Ke.setLineWidth(Q.wireframeLinewidth*at()),Tt.setMode(B.LINES)):Tt.setMode(B.TRIANGLES);else if(j.isLine){let nt=Q.linewidth;nt===void 0&&(nt=1),Ke.setLineWidth(nt*at()),j.isLineSegments?Tt.setMode(B.LINES):j.isLineLoop?Tt.setMode(B.LINE_LOOP):Tt.setMode(B.LINE_STRIP)}else j.isPoints?Tt.setMode(B.POINTS):j.isSprite&&Tt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)yu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Tt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nt=j._multiDrawStarts,qt=j._multiDrawCounts,xt=j._multiDrawCount,_n=Xe?ge.get(Xe).bytesPerElement:1,fr=We.get(Q).currentProgram.getUniforms();for(let Pn=0;Pn<xt;Pn++)fr.setValue(B,"_gl_DrawID",Pn),Tt.render(nt[Pn]/_n,qt[Pn])}else if(j.isInstancedMesh)Tt.renderInstances(Et,Yt,j.count);else if(oe.isInstancedBufferGeometry){const nt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,qt=Math.min(oe.instanceCount,nt);Tt.renderInstances(Et,Yt,qt)}else Tt.render(Et,Yt)};function At(L,$,oe){L.transparent===!0&&L.side===tr&&L.forceSinglePass===!1?(L.side=Vn,L.needsUpdate=!0,Es(L,$,oe),L.side=Wr,L.needsUpdate=!0,Es(L,$,oe),L.side=tr):Es(L,$,oe)}this.compile=function(L,$,oe=null){oe===null&&(oe=L),y=et.get(oe),y.init($),P.push(y),oe.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),L!==oe&&L.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights();const Q=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const be=j.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){const Ge=be[Ue];At(Ge,oe,j),Q.add(Ge)}else At(be,oe,j),Q.add(be)}),y=P.pop(),Q},this.compileAsync=function(L,$,oe=null){const Q=this.compile(L,$,oe);return new Promise(j=>{function be(){if(Q.forEach(function(Ue){We.get(Ue).currentProgram.isReady()&&Q.delete(Ue)}),Q.size===0){j(L);return}setTimeout(be,10)}ht.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Un=null;function Cn(L){Un&&Un(L)}function Ss(){ki.stop()}function dr(){ki.start()}const ki=new Qv;ki.setAnimationLoop(Cn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(L){Un=L,ue.setAnimationLoop(L),L===null?ki.stop():ki.start()},ue.addEventListener("sessionstart",Ss),ue.addEventListener("sessionend",dr),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera($),$=ue.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,$,k),y=et.get(L,P.length),y.init($),P.push(y),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ne.setFromProjectionMatrix(pe),G=this.localClippingEnabled,ve=Ee.init(this.clippingPlanes,G),S=Qe.get(L,N.length),S.init(),N.push(S),ue.enabled===!0&&ue.isPresenting===!0){const be=w.xr.getDepthSensingMesh();be!==null&&Oi(be,$,-1/0,w.sortObjects)}Oi(L,$,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(ce,le),St=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,St&&Be.addToRenderList(S,L),this.info.render.frame++,ve===!0&&Ee.beginShadows();const oe=y.state.shadowsArray;Ce.render(oe,L,$),ve===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,j=S.transmissive;if(y.setupLights(),$.isArrayCamera){const be=$.cameras;if(j.length>0)for(let Ue=0,Ge=be.length;Ue<Ge;Ue++){const Xe=be[Ue];jr(Q,j,L,Xe)}St&&Be.render(L);for(let Ue=0,Ge=be.length;Ue<Ge;Ue++){const Xe=be[Ue];$r(S,L,Xe,Xe.viewport)}}else j.length>0&&jr(Q,j,L,$),St&&Be.render(L),$r(S,L,$);k!==null&&D===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),L.isScene===!0&&L.onAfterRender(w,L,$),Nt.resetDefaultState(),C=-1,T=null,P.pop(),P.length>0?(y=P[P.length-1],ve===!0&&Ee.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Oi(L,$,oe,Q){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ne.intersectsSprite(L)){Q&&Ae.setFromMatrixPosition(L.matrixWorld).applyMatrix4(pe);const Ue=fe.update(L),Ge=L.material;Ge.visible&&S.push(L,Ue,Ge,oe,Ae.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ne.intersectsObject(L))){const Ue=fe.update(L),Ge=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ae.copy(L.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ae.copy(Ue.boundingSphere.center)),Ae.applyMatrix4(L.matrixWorld).applyMatrix4(pe)),Array.isArray(Ge)){const Xe=Ue.groups;for(let lt=0,st=Xe.length;lt<st;lt++){const Ye=Xe[lt],Et=Ge[Ye.materialIndex];Et&&Et.visible&&S.push(L,Ue,Et,oe,Ae.z,Ye)}}else Ge.visible&&S.push(L,Ue,Ge,oe,Ae.z,null)}}const be=L.children;for(let Ue=0,Ge=be.length;Ue<Ge;Ue++)Oi(be[Ue],$,oe,Q)}function $r(L,$,oe,Q){const j=L.opaque,be=L.transmissive,Ue=L.transparent;y.setupLightsView(oe),ve===!0&&Ee.setGlobalState(w.clippingPlanes,oe),Q&&Ke.viewport(z.copy(Q)),j.length>0&&hr(j,$,oe),be.length>0&&hr(be,$,oe),Ue.length>0&&hr(Ue,$,oe),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function jr(L,$,oe,Q){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[Q.id]===void 0&&(y.state.transmissionRenderTarget[Q.id]=new xs(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Sa:lr,minFilter:_s,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const be=y.state.transmissionRenderTarget[Q.id],Ue=Q.viewport||z;be.setSize(Ue.z*w.transmissionResolutionScale,Ue.w*w.transmissionResolutionScale);const Ge=w.getRenderTarget();w.setRenderTarget(be),w.getClearColor(Z),de=w.getClearAlpha(),de<1&&w.setClearColor(16777215,.5),w.clear(),St&&Be.render(oe);const Xe=w.toneMapping;w.toneMapping=Hr;const lt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),y.setupLightsView(Q),ve===!0&&Ee.setGlobalState(w.clippingPlanes,Q),hr(L,oe,Q),U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be),ht.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ye=0,Et=$.length;Ye<Et;Ye++){const mt=$[Ye],Yt=mt.object,Vt=mt.geometry,Tt=mt.material,nt=mt.group;if(Tt.side===tr&&Yt.layers.test(Q.layers)){const qt=Tt.side;Tt.side=Vn,Tt.needsUpdate=!0,Ra(Yt,oe,Q,Vt,Tt,nt),Tt.side=qt,Tt.needsUpdate=!0,st=!0}}st===!0&&(U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be))}w.setRenderTarget(Ge),w.setClearColor(Z,de),lt!==void 0&&(Q.viewport=lt),w.toneMapping=Xe}function hr(L,$,oe){const Q=$.isScene===!0?$.overrideMaterial:null;for(let j=0,be=L.length;j<be;j++){const Ue=L[j],Ge=Ue.object,Xe=Ue.geometry,lt=Ue.group;let st=Ue.material;st.allowOverride===!0&&Q!==null&&(st=Q),Ge.layers.test(oe.layers)&&Ra(Ge,$,oe,Xe,st,lt)}}function Ra(L,$,oe,Q,j,be){L.onBeforeRender(w,$,oe,Q,j,be),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(w,$,oe,Q,L,be),j.transparent===!0&&j.side===tr&&j.forceSinglePass===!1?(j.side=Vn,j.needsUpdate=!0,w.renderBufferDirect(oe,$,Q,j,L,be),j.side=Wr,j.needsUpdate=!0,w.renderBufferDirect(oe,$,Q,j,L,be),j.side=tr):w.renderBufferDirect(oe,$,Q,j,L,be),L.onAfterRender(w,$,oe,Q,j,be)}function Es(L,$,oe){$.isScene!==!0&&($=yt);const Q=We.get(L),j=y.state.lights,be=y.state.shadowsArray,Ue=j.state.version,Ge=$e.getParameters(L,j.state,be,$,oe),Xe=$e.getProgramCacheKey(Ge);let lt=Q.programs;Q.environment=L.isMeshStandardMaterial?$.environment:null,Q.fog=$.fog,Q.envMap=(L.isMeshStandardMaterial?J:R).get(L.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,lt===void 0&&(L.addEventListener("dispose",ft),lt=new Map,Q.programs=lt);let st=lt.get(Xe);if(st!==void 0){if(Q.currentProgram===st&&Q.lightsStateVersion===Ue)return Ri(L,Ge),st}else Ge.uniforms=$e.getUniforms(L),L.onBeforeCompile(Ge,w),st=$e.acquireProgram(Ge,Xe),lt.set(Xe,st),Q.uniforms=Ge.uniforms;const Ye=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ye.clippingPlanes=Ee.uniform),Ri(L,Ge),Q.needsLights=Nu(L),Q.lightsStateVersion=Ue,Q.needsLights&&(Ye.ambientLightColor.value=j.state.ambient,Ye.lightProbe.value=j.state.probe,Ye.directionalLights.value=j.state.directional,Ye.directionalLightShadows.value=j.state.directionalShadow,Ye.spotLights.value=j.state.spot,Ye.spotLightShadows.value=j.state.spotShadow,Ye.rectAreaLights.value=j.state.rectArea,Ye.ltc_1.value=j.state.rectAreaLTC1,Ye.ltc_2.value=j.state.rectAreaLTC2,Ye.pointLights.value=j.state.point,Ye.pointLightShadows.value=j.state.pointShadow,Ye.hemisphereLights.value=j.state.hemi,Ye.directionalShadowMap.value=j.state.directionalShadowMap,Ye.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ye.spotShadowMap.value=j.state.spotShadowMap,Ye.spotLightMatrix.value=j.state.spotLightMatrix,Ye.spotLightMap.value=j.state.spotLightMap,Ye.pointShadowMap.value=j.state.pointShadowMap,Ye.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=st,Q.uniformsList=null,st}function Ca(L){if(L.uniformsList===null){const $=L.currentProgram.getUniforms();L.uniformsList=xu.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function Ri(L,$){const oe=We.get(L);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function Pa(L,$,oe,Q,j){$.isScene!==!0&&($=yt),U.resetTextureUnits();const be=$.fog,Ue=Q.isMeshStandardMaterial?$.environment:null,Ge=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:mo,Xe=(Q.isMeshStandardMaterial?J:R).get(Q.envMap||Ue),lt=Q.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,st=!!oe.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ye=!!oe.morphAttributes.position,Et=!!oe.morphAttributes.normal,mt=!!oe.morphAttributes.color;let Yt=Hr;Q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Yt=w.toneMapping);const Vt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Tt=Vt!==void 0?Vt.length:0,nt=We.get(Q),qt=y.state.lights;if(ve===!0&&(G===!0||L!==T)){const pn=L===T&&Q.id===C;Ee.setState(Q,L,pn)}let xt=!1;Q.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==qt.state.version||nt.outputColorSpace!==Ge||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==Xe||Q.fog===!0&&nt.fog!==be||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ee.numPlanes||nt.numIntersection!==Ee.numIntersection)||nt.vertexAlphas!==lt||nt.vertexTangents!==st||nt.morphTargets!==Ye||nt.morphNormals!==Et||nt.morphColors!==mt||nt.toneMapping!==Yt||nt.morphTargetsCount!==Tt)&&(xt=!0):(xt=!0,nt.__version=Q.version);let _n=nt.currentProgram;xt===!0&&(_n=Es(Q,$,j));let fr=!1,Pn=!1,zi=!1;const kt=_n.getUniforms(),yn=nt.uniforms;if(Ke.useProgram(_n.program)&&(fr=!0,Pn=!0,zi=!0),Q.id!==C&&(C=Q.id,Pn=!0),fr||T!==L){Ke.buffers.depth.getReversed()?(ie.copy(L.projectionMatrix),_x(ie),yx(ie),kt.setValue(B,"projectionMatrix",ie)):kt.setValue(B,"projectionMatrix",L.projectionMatrix),kt.setValue(B,"viewMatrix",L.matrixWorldInverse);const un=kt.map.cameraPosition;un!==void 0&&un.setValue(B,_e.setFromMatrixPosition(L.matrixWorld)),dt.logarithmicDepthBuffer&&kt.setValue(B,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&kt.setValue(B,"isOrthographic",L.isOrthographicCamera===!0),T!==L&&(T=L,Pn=!0,zi=!0)}if(j.isSkinnedMesh){kt.setOptional(B,j,"bindMatrix"),kt.setOptional(B,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),kt.setValue(B,"boneTexture",pn.boneTexture,U))}j.isBatchedMesh&&(kt.setOptional(B,j,"batchingTexture"),kt.setValue(B,"batchingTexture",j._matricesTexture,U),kt.setOptional(B,j,"batchingIdTexture"),kt.setValue(B,"batchingIdTexture",j._indirectTexture,U),kt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&kt.setValue(B,"batchingColorTexture",j._colorsTexture,U));const ln=oe.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&tt.update(j,oe,_n),(Pn||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,kt.setValue(B,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(yn.envMap.value=Xe,yn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&$.environment!==null&&(yn.envMapIntensity.value=$.environmentIntensity),Pn&&(kt.setValue(B,"toneMappingExposure",w.toneMappingExposure),nt.needsLights&&La(yn,zi),be&&Q.fog===!0&&Re.refreshFogUniforms(yn,be),Re.refreshMaterialUniforms(yn,Q,V,he,y.state.transmissionRenderTarget[L.id]),xu.upload(B,Ca(nt),yn,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(xu.upload(B,Ca(nt),yn,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&kt.setValue(B,"center",j.center),kt.setValue(B,"modelViewMatrix",j.modelViewMatrix),kt.setValue(B,"normalMatrix",j.normalMatrix),kt.setValue(B,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const pn=Q.uniformsGroups;for(let un=0,bt=pn.length;un<bt;un++){const Ci=pn[un];X.update(Ci,_n),X.bind(Ci,_n)}}return _n}function La(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Nu(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(L,$,oe){const Q=We.get(L);Q.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),We.get(L.texture).__webglTexture=$,We.get(L.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:oe,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,$){const oe=We.get(L);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0};const Da=B.createFramebuffer();this.setRenderTarget=function(L,$=0,oe=0){k=L,b=$,D=oe;let Q=!0,j=null,be=!1,Ue=!1;if(L){const Xe=We.get(L);if(Xe.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Xe.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(Xe.__hasExternalTextures)U.rebindTextures(L,We.get(L.texture).__webglTexture,We.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ye=L.depthTexture;if(Xe.__boundDepthTexture!==Ye){if(Ye!==null&&We.has(Ye)&&(L.width!==Ye.image.width||L.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}const lt=L.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ue=!0);const st=We.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(st[$])?j=st[$][oe]:j=st[$],be=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?j=We.get(L).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[oe]:j=st,z.copy(L.viewport),te.copy(L.scissor),Y=L.scissorTest}else z.copy(O).multiplyScalar(V).floor(),te.copy(re).multiplyScalar(V).floor(),Y=De;if(oe!==0&&(j=Da),Ke.bindFramebuffer(B.FRAMEBUFFER,j)&&Q&&Ke.drawBuffers(L,j),Ke.viewport(z),Ke.scissor(te),Ke.setScissorTest(Y),be){const Xe=We.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+$,Xe.__webglTexture,oe)}else if(Ue){const Xe=We.get(L.texture),lt=$;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.__webglTexture,oe,lt)}else if(L!==null&&oe!==0){const Xe=We.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xe.__webglTexture,oe)}C=-1},this.readRenderTargetPixels=function(L,$,oe,Q,j,be,Ue){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=We.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){Ke.bindFramebuffer(B.FRAMEBUFFER,Ge);try{const Xe=L.texture,lt=Xe.format,st=Xe.type;if(!dt.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-Q&&oe>=0&&oe<=L.height-j&&B.readPixels($,oe,Q,j,ut.convert(lt),ut.convert(st),be)}finally{const Xe=k!==null?We.get(k).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(L,$,oe,Q,j,be,Ue){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=We.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge)if($>=0&&$<=L.width-Q&&oe>=0&&oe<=L.height-j){Ke.bindFramebuffer(B.FRAMEBUFFER,Ge);const Xe=L.texture,lt=Xe.format,st=Xe.type;if(!dt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ye),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),B.readPixels($,oe,Q,j,ut.convert(lt),ut.convert(st),0);const Et=k!==null?We.get(k).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,Et);const mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await vx(B,mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ye),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.deleteBuffer(Ye),B.deleteSync(mt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,$=null,oe=0){const Q=Math.pow(2,-oe),j=Math.floor(L.image.width*Q),be=Math.floor(L.image.height*Q),Ue=$!==null?$.x:0,Ge=$!==null?$.y:0;U.setTexture2D(L,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,Ue,Ge,j,be),Ke.unbindTexture()};const Na=B.createFramebuffer(),Ia=B.createFramebuffer();this.copyTextureToTexture=function(L,$,oe=null,Q=null,j=0,be=null){be===null&&(j!==0?(yu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=j,j=0):be=0);let Ue,Ge,Xe,lt,st,Ye,Et,mt,Yt;const Vt=L.isCompressedTexture?L.mipmaps[be]:L.image;if(oe!==null)Ue=oe.max.x-oe.min.x,Ge=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,lt=oe.min.x,st=oe.min.y,Ye=oe.isBox3?oe.min.z:0;else{const ln=Math.pow(2,-j);Ue=Math.floor(Vt.width*ln),Ge=Math.floor(Vt.height*ln),L.isDataArrayTexture?Xe=Vt.depth:L.isData3DTexture?Xe=Math.floor(Vt.depth*ln):Xe=1,lt=0,st=0,Ye=0}Q!==null?(Et=Q.x,mt=Q.y,Yt=Q.z):(Et=0,mt=0,Yt=0);const Tt=ut.convert($.format),nt=ut.convert($.type);let qt;$.isData3DTexture?(U.setTexture3D($,0),qt=B.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(U.setTexture2DArray($,0),qt=B.TEXTURE_2D_ARRAY):(U.setTexture2D($,0),qt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment);const xt=B.getParameter(B.UNPACK_ROW_LENGTH),_n=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fr=B.getParameter(B.UNPACK_SKIP_PIXELS),Pn=B.getParameter(B.UNPACK_SKIP_ROWS),zi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Vt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,lt),B.pixelStorei(B.UNPACK_SKIP_ROWS,st),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);const kt=L.isDataArrayTexture||L.isData3DTexture,yn=$.isDataArrayTexture||$.isData3DTexture;if(L.isDepthTexture){const ln=We.get(L),pn=We.get($),un=We.get(ln.__renderTarget),bt=We.get(pn.__renderTarget);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,un.__webglFramebuffer),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ci=0;Ci<Xe;Ci++)kt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(L).__webglTexture,j,Ye+Ci),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get($).__webglTexture,be,Yt+Ci)),B.blitFramebuffer(lt,st,Ue,Ge,Et,mt,Ue,Ge,B.DEPTH_BUFFER_BIT,B.NEAREST);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||L.isRenderTargetTexture||We.has(L)){const ln=We.get(L),pn=We.get($);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,Na),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ia);for(let un=0;un<Xe;un++)kt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,j,Ye+un):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,j),yn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,be,Yt+un):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,be),j!==0?B.blitFramebuffer(lt,st,Ue,Ge,Et,mt,Ue,Ge,B.COLOR_BUFFER_BIT,B.NEAREST):yn?B.copyTexSubImage3D(qt,be,Et,mt,Yt+un,lt,st,Ue,Ge):B.copyTexSubImage2D(qt,be,Et,mt,lt,st,Ue,Ge);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yn?L.isDataTexture||L.isData3DTexture?B.texSubImage3D(qt,be,Et,mt,Yt,Ue,Ge,Xe,Tt,nt,Vt.data):$.isCompressedArrayTexture?B.compressedTexSubImage3D(qt,be,Et,mt,Yt,Ue,Ge,Xe,Tt,Vt.data):B.texSubImage3D(qt,be,Et,mt,Yt,Ue,Ge,Xe,Tt,nt,Vt):L.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,be,Et,mt,Ue,Ge,Tt,nt,Vt.data):L.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,be,Et,mt,Vt.width,Vt.height,Tt,Vt.data):B.texSubImage2D(B.TEXTURE_2D,be,Et,mt,Ue,Ge,Tt,nt,Vt);B.pixelStorei(B.UNPACK_ROW_LENGTH,xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_n),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fr),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,zi),be===0&&$.generateMipmaps&&B.generateMipmap(qt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(L,$,oe=null,Q=null,j=0){return yu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,$,oe,Q,j)},this.initRenderTarget=function(L){We.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),Ke.unbindTexture()},this.resetState=function(){b=0,D=0,k=null,Ke.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}function zT(r){const e=[...new Set(r.map(t=>String(t.session_id)))].sort();return new Map(e.map((t,n)=>[t,n]))}function BT({payload:r,currentTurnId:e,liftMode:t,onSelectTurn:n}){const o=Ct.useRef(null),a=Ct.useMemo(()=>zT(r.turns??[]),[r.turns]);return Ct.useEffect(()=>{if(!o.current)return;const u=o.current,c=new Wx;c.background=new Dt("#120d08");const h=new li(45,u.clientWidth/Math.max(u.clientHeight,1),.1,1e3);h.position.set(0,0,28);const f=new OT({antialias:!0});f.setSize(u.clientWidth,Math.max(u.clientHeight,240)),u.innerHTML="",u.appendChild(f.domElement);const m=r.turns??[],g=new qv({color:12155706,transparent:!0,opacity:.5}),v=new bi,x=new Float32Array(m.length*3),E=new Float32Array(m.length*3),M=new Map;for(const C of m){const T=String(C.display_attractor_label??C.dominant_label??"");M.set(T,(M.get(T)??0)+1)}m.forEach((C,T)=>{const z=M.get(String(C.display_attractor_label??C.dominant_label??""))??1,te=a.get(String(C.session_id))??0,Y=t==="flat"?0:t==="time_lift"?T*.7:t==="density_lift"?z*1.2:te*2.4;x[T*3]=Number(C.x??0),x[T*3+1]=Number(C.y??0),x[T*3+2]=Y;const Z=e===C.turn_id;E[T*3]=Z?1:.91,E[T*3+1]=Z?.95:.66,E[T*3+2]=Z?.67:.34,C.sequence_z=Y}),v.setAttribute("position",new Qn(x,3)),v.setAttribute("color",new Qn(E,3));const S=new Yx(v,new Kv({size:.6,vertexColors:!0}));if(c.add(S),m.length>1){const C=new bi;C.setAttribute("position",new Qn(x,3)),c.add(new jx(C,g))}const y=new tS,N=new Ut,P=C=>{const T=f.domElement.getBoundingClientRect();N.x=(C.clientX-T.left)/T.width*2-1,N.y=-((C.clientY-T.top)/T.height)*2+1,y.params.Points={threshold:1.2},y.setFromCamera(N,h);const te=y.intersectObject(S)[0];if(!te||te.index==null)return;const Y=m[te.index];Y!=null&&Y.turn_id&&n(String(Y.turn_id))};f.domElement.addEventListener("click",P);const w=new Jx(16777215,1);c.add(w);let I=0,b=0;const D=()=>{I+=1,e||(c.rotation.y=Math.sin(I/180)*.08),f.render(c,h),b=window.requestAnimationFrame(D)};D();const k=()=>{const C=u.clientWidth||640,T=Math.max(u.clientHeight,240);h.aspect=C/T,h.updateProjectionMatrix(),f.setSize(C,T)};return window.addEventListener("resize",k),()=>{window.removeEventListener("resize",k),f.domElement.removeEventListener("click",P),window.cancelAnimationFrame(b),f.dispose(),v.dispose(),g.dispose(),u.innerHTML=""}},[r,e,t,n,a]),me.jsx("div",{className:"basin-panel",ref:o})}var lu={exports:{}},qg;function GT(){if(qg)return lu.exports;qg=1;var r=typeof Reflect=="object"?Reflect:null,e=r&&typeof r.apply=="function"?r.apply:function(I,b,D){return Function.prototype.apply.call(I,b,D)},t;r&&typeof r.ownKeys=="function"?t=r.ownKeys:Object.getOwnPropertySymbols?t=function(I){return Object.getOwnPropertyNames(I).concat(Object.getOwnPropertySymbols(I))}:t=function(I){return Object.getOwnPropertyNames(I)};function n(w){console&&console.warn&&console.warn(w)}var o=Number.isNaN||function(I){return I!==I};function a(){a.init.call(this)}lu.exports=a,lu.exports.once=y,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function c(w){if(typeof w!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof w)}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(w){if(typeof w!="number"||w<0||o(w))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+w+".");u=w}}),a.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(I){if(typeof I!="number"||I<0||o(I))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+I+".");return this._maxListeners=I,this};function h(w){return w._maxListeners===void 0?a.defaultMaxListeners:w._maxListeners}a.prototype.getMaxListeners=function(){return h(this)},a.prototype.emit=function(I){for(var b=[],D=1;D<arguments.length;D++)b.push(arguments[D]);var k=I==="error",C=this._events;if(C!==void 0)k=k&&C.error===void 0;else if(!k)return!1;if(k){var T;if(b.length>0&&(T=b[0]),T instanceof Error)throw T;var z=new Error("Unhandled error."+(T?" ("+T.message+")":""));throw z.context=T,z}var te=C[I];if(te===void 0)return!1;if(typeof te=="function")e(te,this,b);else for(var Y=te.length,Z=E(te,Y),D=0;D<Y;++D)e(Z[D],this,b);return!0};function f(w,I,b,D){var k,C,T;if(c(b),C=w._events,C===void 0?(C=w._events=Object.create(null),w._eventsCount=0):(C.newListener!==void 0&&(w.emit("newListener",I,b.listener?b.listener:b),C=w._events),T=C[I]),T===void 0)T=C[I]=b,++w._eventsCount;else if(typeof T=="function"?T=C[I]=D?[b,T]:[T,b]:D?T.unshift(b):T.push(b),k=h(w),k>0&&T.length>k&&!T.warned){T.warned=!0;var z=new Error("Possible EventEmitter memory leak detected. "+T.length+" "+String(I)+" listeners added. Use emitter.setMaxListeners() to increase limit");z.name="MaxListenersExceededWarning",z.emitter=w,z.type=I,z.count=T.length,n(z)}return w}a.prototype.addListener=function(I,b){return f(this,I,b,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(I,b){return f(this,I,b,!0)};function m(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(w,I,b){var D={fired:!1,wrapFn:void 0,target:w,type:I,listener:b},k=m.bind(D);return k.listener=b,D.wrapFn=k,k}a.prototype.once=function(I,b){return c(b),this.on(I,g(this,I,b)),this},a.prototype.prependOnceListener=function(I,b){return c(b),this.prependListener(I,g(this,I,b)),this},a.prototype.removeListener=function(I,b){var D,k,C,T,z;if(c(b),k=this._events,k===void 0)return this;if(D=k[I],D===void 0)return this;if(D===b||D.listener===b)--this._eventsCount===0?this._events=Object.create(null):(delete k[I],k.removeListener&&this.emit("removeListener",I,D.listener||b));else if(typeof D!="function"){for(C=-1,T=D.length-1;T>=0;T--)if(D[T]===b||D[T].listener===b){z=D[T].listener,C=T;break}if(C<0)return this;C===0?D.shift():M(D,C),D.length===1&&(k[I]=D[0]),k.removeListener!==void 0&&this.emit("removeListener",I,z||b)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(I){var b,D,k;if(D=this._events,D===void 0)return this;if(D.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):D[I]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete D[I]),this;if(arguments.length===0){var C=Object.keys(D),T;for(k=0;k<C.length;++k)T=C[k],T!=="removeListener"&&this.removeAllListeners(T);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(b=D[I],typeof b=="function")this.removeListener(I,b);else if(b!==void 0)for(k=b.length-1;k>=0;k--)this.removeListener(I,b[k]);return this};function v(w,I,b){var D=w._events;if(D===void 0)return[];var k=D[I];return k===void 0?[]:typeof k=="function"?b?[k.listener||k]:[k]:b?S(k):E(k,k.length)}a.prototype.listeners=function(I){return v(this,I,!0)},a.prototype.rawListeners=function(I){return v(this,I,!1)},a.listenerCount=function(w,I){return typeof w.listenerCount=="function"?w.listenerCount(I):x.call(w,I)},a.prototype.listenerCount=x;function x(w){var I=this._events;if(I!==void 0){var b=I[w];if(typeof b=="function")return 1;if(b!==void 0)return b.length}return 0}a.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function E(w,I){for(var b=new Array(I),D=0;D<I;++D)b[D]=w[D];return b}function M(w,I){for(;I+1<w.length;I++)w[I]=w[I+1];w.pop()}function S(w){for(var I=new Array(w.length),b=0;b<I.length;++b)I[b]=w[b].listener||w[b];return I}function y(w,I){return new Promise(function(b,D){function k(T){w.removeListener(I,C),D(T)}function C(){typeof w.removeListener=="function"&&w.removeListener("error",k),b([].slice.call(arguments))}P(w,I,C,{once:!0}),I!=="error"&&N(w,k,{once:!0})})}function N(w,I,b){typeof w.on=="function"&&P(w,"error",I,b)}function P(w,I,b,D){if(typeof w.on=="function")D.once?w.once(I,b):w.on(I,b);else if(typeof w.addEventListener=="function")w.addEventListener(I,function k(C){D.once&&w.removeEventListener(I,k),b(C)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof w)}return lu.exports}var i_=GT();function HT(){const r=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(arguments[e])for(const n in arguments[e])r[n]=arguments[e][n];return r}let sn=HT;typeof Object.assign=="function"&&(sn=Object.assign);function ui(r,e,t,n){const o=r._nodes.get(e);let a=null;return o&&(n==="mixed"?a=o.out&&o.out[t]||o.undirected&&o.undirected[t]:n==="directed"?a=o.out&&o.out[t]:a=o.undirected&&o.undirected[t]),a}function vn(r){return typeof r=="object"&&r!==null}function r_(r){let e;for(e in r)return!1;return!0}function oi(r,e,t){Object.defineProperty(r,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function Si(r,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(r,e,n)}function Kg(r){return!(!vn(r)||r.attributes&&!Array.isArray(r.attributes))}function VT(){let r=Math.floor(Math.random()*256)&255;return()=>r++}function ar(){const r=arguments;let e=null,t=-1;return{[Symbol.iterator](){return this},next(){let n=null;do{if(e===null){if(t++,t>=r.length)return{done:!0};e=r[t][Symbol.iterator]()}if(n=e.next(),n.done){e=null;continue}break}while(!0);return n}}}function Eo(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class df extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class ze extends df{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ze.prototype.constructor)}}class Le extends df{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Le.prototype.constructor)}}class ot extends df{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ot.prototype.constructor)}}function s_(r,e){this.key=r,this.attributes=e,this.clear()}s_.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function o_(r,e){this.key=r,this.attributes=e,this.clear()}o_.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function a_(r,e){this.key=r,this.attributes=e,this.clear()}a_.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function Mo(r,e,t,n,o){this.key=e,this.attributes=o,this.undirected=r,this.source=t,this.target=n}Mo.prototype.attach=function(){let r="out",e="in";this.undirected&&(r=e="undirected");const t=this.source.key,n=this.target.key;this.source[r][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};Mo.prototype.attachMulti=function(){let r="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(r=e="undirected");const o=this.source[r],a=o[n];if(typeof a>"u"){o[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}a.previous=this,this.next=a,o[n]=this,this.target[e][t]=this};Mo.prototype.detach=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][r]};Mo.prototype.detachMulti=function(){const r=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][r]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][r]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const l_=0,u_=1,WT=2,c_=3;function cr(r,e,t,n,o,a,u){let c,h,f,m;if(n=""+n,t===l_){if(c=r._nodes.get(n),!c)throw new Le(`Graph.${e}: could not find the "${n}" node in the graph.`);f=o,m=a}else if(t===c_){if(o=""+o,h=r._edges.get(o),!h)throw new Le(`Graph.${e}: could not find the "${o}" edge in the graph.`);const g=h.source.key,v=h.target.key;if(n===g)c=h.target;else if(n===v)c=h.source;else throw new Le(`Graph.${e}: the "${n}" node is not attached to the "${o}" edge (${g}, ${v}).`);f=a,m=u}else{if(h=r._edges.get(n),!h)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===u_?c=h.source:c=h.target,f=o,m=a}return[c,f,m]}function XT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);return u.attributes[c]}}function $T(r,e,t){r.prototype[e]=function(n,o){const[a]=cr(this,e,t,n,o);return a.attributes}}function jT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);return u.attributes.hasOwnProperty(c)}}function YT(r,e,t){r.prototype[e]=function(n,o,a,u){const[c,h,f]=cr(this,e,t,n,o,a,u);return c.attributes[h]=f,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function qT(r,e,t){r.prototype[e]=function(n,o,a,u){const[c,h,f]=cr(this,e,t,n,o,a,u);if(typeof f!="function")throw new ze(`Graph.${e}: updater should be a function.`);const m=c.attributes,g=f(m[h]);return m[h]=g,this.emit("nodeAttributesUpdated",{key:c.key,type:"set",attributes:c.attributes,name:h}),this}}function KT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);return delete u.attributes[c],this.emit("nodeAttributesUpdated",{key:u.key,type:"remove",attributes:u.attributes,name:c}),this}}function ZT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);if(!vn(c))throw new ze(`Graph.${e}: provided attributes are not a plain object.`);return u.attributes=c,this.emit("nodeAttributesUpdated",{key:u.key,type:"replace",attributes:u.attributes}),this}}function QT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);if(!vn(c))throw new ze(`Graph.${e}: provided attributes are not a plain object.`);return sn(u.attributes,c),this.emit("nodeAttributesUpdated",{key:u.key,type:"merge",attributes:u.attributes,data:c}),this}}function JT(r,e,t){r.prototype[e]=function(n,o,a){const[u,c]=cr(this,e,t,n,o,a);if(typeof c!="function")throw new ze(`Graph.${e}: provided updater is not a function.`);return u.attributes=c(u.attributes),this.emit("nodeAttributesUpdated",{key:u.key,type:"update",attributes:u.attributes}),this}}const eA=[{name:r=>`get${r}Attribute`,attacher:XT},{name:r=>`get${r}Attributes`,attacher:$T},{name:r=>`has${r}Attribute`,attacher:jT},{name:r=>`set${r}Attribute`,attacher:YT},{name:r=>`update${r}Attribute`,attacher:qT},{name:r=>`remove${r}Attribute`,attacher:KT},{name:r=>`replace${r}Attributes`,attacher:ZT},{name:r=>`merge${r}Attributes`,attacher:QT},{name:r=>`update${r}Attributes`,attacher:JT}];function tA(r){eA.forEach(function({name:e,attacher:t}){t(r,e("Node"),l_),t(r,e("Source"),u_),t(r,e("Target"),WT),t(r,e("Opposite"),c_)})}function nA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ot(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ot(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ui(this,u,c,t),!a)throw new Le(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ot(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes[o]}}function iA(r,e,t){r.prototype[e]=function(n){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ot(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new ot(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,u=""+arguments[1];if(o=ui(this,a,u,t),!o)throw new Le(`Graph.${e}: could not find an edge for the given path ("${a}" - "${u}").`)}else{if(t!=="mixed")throw new ot(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes}}function rA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ot(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ot(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ui(this,u,c,t),!a)throw new Le(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ot(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes.hasOwnProperty(o)}}function sA(r,e,t){r.prototype[e]=function(n,o,a){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ot(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ot(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+o;if(o=arguments[2],a=arguments[3],u=ui(this,c,h,t),!u)throw new Le(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new ot(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return u.attributes[o]=a,this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:o}),this}}function oA(r,e,t){r.prototype[e]=function(n,o,a){let u;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ot(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new ot(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const c=""+n,h=""+o;if(o=arguments[2],a=arguments[3],u=ui(this,c,h,t),!u)throw new Le(`Graph.${e}: could not find an edge for the given path ("${c}" - "${h}").`)}else{if(t!=="mixed")throw new ot(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,u=this._edges.get(n),!u)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof a!="function")throw new ze(`Graph.${e}: updater should be a function.`);return u.attributes[o]=a(u.attributes[o]),this.emit("edgeAttributesUpdated",{key:u.key,type:"set",attributes:u.attributes,name:o}),this}}function aA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ot(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ot(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ui(this,u,c,t),!a)throw new Le(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ot(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete a.attributes[o],this.emit("edgeAttributesUpdated",{key:a.key,type:"remove",attributes:a.attributes,name:o}),this}}function lA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ot(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ot(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ui(this,u,c,t),!a)throw new Le(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ot(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!vn(o))throw new ze(`Graph.${e}: provided attributes are not a plain object.`);return a.attributes=o,this.emit("edgeAttributesUpdated",{key:a.key,type:"replace",attributes:a.attributes}),this}}function uA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ot(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ot(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ui(this,u,c,t),!a)throw new Le(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ot(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!vn(o))throw new ze(`Graph.${e}: provided attributes are not a plain object.`);return sn(a.attributes,o),this.emit("edgeAttributesUpdated",{key:a.key,type:"merge",attributes:a.attributes,data:o}),this}}function cA(r,e,t){r.prototype[e]=function(n,o){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new ot(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new ot(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const u=""+n,c=""+o;if(o=arguments[2],a=ui(this,u,c,t),!a)throw new Le(`Graph.${e}: could not find an edge for the given path ("${u}" - "${c}").`)}else{if(t!=="mixed")throw new ot(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new Le(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof o!="function")throw new ze(`Graph.${e}: provided updater is not a function.`);return a.attributes=o(a.attributes),this.emit("edgeAttributesUpdated",{key:a.key,type:"update",attributes:a.attributes}),this}}const dA=[{name:r=>`get${r}Attribute`,attacher:nA},{name:r=>`get${r}Attributes`,attacher:iA},{name:r=>`has${r}Attribute`,attacher:rA},{name:r=>`set${r}Attribute`,attacher:sA},{name:r=>`update${r}Attribute`,attacher:oA},{name:r=>`remove${r}Attribute`,attacher:aA},{name:r=>`replace${r}Attributes`,attacher:lA},{name:r=>`merge${r}Attributes`,attacher:uA},{name:r=>`update${r}Attributes`,attacher:cA}];function hA(r){dA.forEach(function({name:e,attacher:t}){t(r,e("Edge"),"mixed"),t(r,e("DirectedEdge"),"directed"),t(r,e("UndirectedEdge"),"undirected")})}const fA=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function pA(r,e,t,n){let o=!1;for(const a in e){if(a===n)continue;const u=e[a];if(o=t(u.key,u.attributes,u.source.key,u.target.key,u.source.attributes,u.target.attributes,u.undirected),r&&o)return u.key}}function mA(r,e,t,n){let o,a,u,c=!1;for(const h in e)if(h!==n){o=e[h];do{if(a=o.source,u=o.target,c=t(o.key,o.attributes,a.key,u.key,a.attributes,u.attributes,o.undirected),r&&c)return o.key;o=o.next}while(o!==void 0)}}function $d(r,e){const t=Object.keys(r),n=t.length;let o,a=0;return{[Symbol.iterator](){return this},next(){do if(o)o=o.next;else{if(a>=n)return{done:!0};const u=t[a++];if(u===e){o=void 0;continue}o=r[u]}while(!o);return{done:!1,value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected}}}}}function gA(r,e,t,n){const o=e[t];if(!o)return;const a=o.source,u=o.target;if(n(o.key,o.attributes,a.key,u.key,a.attributes,u.attributes,o.undirected)&&r)return o.key}function vA(r,e,t,n){let o=e[t];if(!o)return;let a=!1;do{if(a=n(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),r&&a)return o.key;o=o.next}while(o!==void 0)}function jd(r,e){let t=r[e];if(t.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!t)return{done:!0};const o={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:o}}};let n=!1;return{[Symbol.iterator](){return this},next(){return n===!0?{done:!0}:(n=!0,{done:!1,value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected}})}}}function _A(r,e){if(r.size===0)return[];if(e==="mixed"||e===r.type)return Array.from(r._edges.keys());const t=e==="undirected"?r.undirectedSize:r.directedSize,n=new Array(t),o=e==="undirected",a=r._edges.values();let u=0,c,h;for(;c=a.next(),c.done!==!0;)h=c.value,h.undirected===o&&(n[u++]=h.key);return n}function d_(r,e,t,n){if(e.size===0)return;const o=t!=="mixed"&&t!==e.type,a=t==="undirected";let u,c,h=!1;const f=e._edges.values();for(;u=f.next(),u.done!==!0;){if(c=u.value,o&&c.undirected!==a)continue;const{key:m,attributes:g,source:v,target:x}=c;if(h=n(m,g,v.key,x.key,v.attributes,x.attributes,c.undirected),r&&h)return m}}function yA(r,e){if(r.size===0)return Eo();const t=e!=="mixed"&&e!==r.type,n=e==="undirected",o=r._edges.values();return{[Symbol.iterator](){return this},next(){let a,u;for(;;){if(a=o.next(),a.done)return a;if(u=a.value,!(t&&u.undirected!==n))break}return{value:{edge:u.key,attributes:u.attributes,source:u.source.key,target:u.target.key,sourceAttributes:u.source.attributes,targetAttributes:u.target.attributes,undirected:u.undirected},done:!1}}}}function hf(r,e,t,n,o,a){const u=e?mA:pA;let c;if(t!=="undirected"&&(n!=="out"&&(c=u(r,o.in,a),r&&c)||n!=="in"&&(c=u(r,o.out,a,n?void 0:o.key),r&&c))||t!=="directed"&&(c=u(r,o.undirected,a),r&&c))return c}function xA(r,e,t,n){const o=[];return hf(!1,r,e,t,n,function(a){o.push(a)}),o}function SA(r,e,t){let n=Eo();return r!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=ar(n,$d(t.in))),e!=="in"&&typeof t.out<"u"&&(n=ar(n,$d(t.out,e?void 0:t.key)))),r!=="directed"&&typeof t.undirected<"u"&&(n=ar(n,$d(t.undirected))),n}function ff(r,e,t,n,o,a,u){const c=t?vA:gA;let h;if(e!=="undirected"&&(typeof o.in<"u"&&n!=="out"&&(h=c(r,o.in,a,u),r&&h)||typeof o.out<"u"&&n!=="in"&&(n||o.key!==a)&&(h=c(r,o.out,a,u),r&&h))||e!=="directed"&&typeof o.undirected<"u"&&(h=c(r,o.undirected,a,u),r&&h))return h}function EA(r,e,t,n,o){const a=[];return ff(!1,r,e,t,n,o,function(u){a.push(u)}),a}function MA(r,e,t,n){let o=Eo();return r!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(o=ar(o,jd(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(o=ar(o,jd(t.out,n)))),r!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(o=ar(o,jd(t.undirected,n))),o}function wA(r,e){const{name:t,type:n,direction:o}=e;r.prototype[t]=function(a,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return _A(this,n);if(arguments.length===1){a=""+a;const c=this._nodes.get(a);if(typeof c>"u")throw new Le(`Graph.${t}: could not find the "${a}" node in the graph.`);return xA(this.multi,n==="mixed"?this.type:n,o,c)}if(arguments.length===2){a=""+a,u=""+u;const c=this._nodes.get(a);if(!c)throw new Le(`Graph.${t}:  could not find the "${a}" source node in the graph.`);if(!this._nodes.has(u))throw new Le(`Graph.${t}:  could not find the "${u}" target node in the graph.`);return EA(n,this.multi,o,c,u)}throw new ze(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function TA(r,e){const{name:t,type:n,direction:o}=e,a="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[a]=function(f,m,g){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return g=f,d_(!1,this,n,g);if(arguments.length===2){f=""+f,g=m;const v=this._nodes.get(f);if(typeof v>"u")throw new Le(`Graph.${a}: could not find the "${f}" node in the graph.`);return hf(!1,this.multi,n==="mixed"?this.type:n,o,v,g)}if(arguments.length===3){f=""+f,m=""+m;const v=this._nodes.get(f);if(!v)throw new Le(`Graph.${a}:  could not find the "${f}" source node in the graph.`);if(!this._nodes.has(m))throw new Le(`Graph.${a}:  could not find the "${m}" target node in the graph.`);return ff(!1,n,this.multi,o,v,m,g)}throw new ze(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop();let g;if(f.length===0){let v=0;n!=="directed"&&(v+=this.undirectedSize),n!=="undirected"&&(v+=this.directedSize),g=new Array(v);let x=0;f.push((E,M,S,y,N,P,w)=>{g[x++]=m(E,M,S,y,N,P,w)})}else g=[],f.push((v,x,E,M,S,y,N)=>{g.push(m(v,x,E,M,S,y,N))});return this[a].apply(this,f),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(){const f=Array.prototype.slice.call(arguments),m=f.pop(),g=[];return f.push((v,x,E,M,S,y,N)=>{m(v,x,E,M,S,y,N)&&g.push(v)}),this[a].apply(this,f),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(){let f=Array.prototype.slice.call(arguments);if(f.length<2||f.length>4)throw new ze(`Graph.${h}: invalid number of arguments (expecting 2, 3 or 4 and got ${f.length}).`);if(typeof f[f.length-1]=="function"&&typeof f[f.length-2]!="function")throw new ze(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let m,g;f.length===2?(m=f[0],g=f[1],f=[]):f.length===3?(m=f[1],g=f[2],f=[f[0]]):f.length===4&&(m=f[2],g=f[3],f=[f[0],f[1]]);let v=g;return f.push((x,E,M,S,y,N,P)=>{v=m(v,x,E,M,S,y,N,P)}),this[a].apply(this,f),v}}function AA(r,e){const{name:t,type:n,direction:o}=e,a="find"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[a]=function(h,f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return m=h,d_(!0,this,n,m);if(arguments.length===2){h=""+h,m=f;const g=this._nodes.get(h);if(typeof g>"u")throw new Le(`Graph.${a}: could not find the "${h}" node in the graph.`);return hf(!0,this.multi,n==="mixed"?this.type:n,o,g,m)}if(arguments.length===3){h=""+h,f=""+f;const g=this._nodes.get(h);if(!g)throw new Le(`Graph.${a}:  could not find the "${h}" source node in the graph.`);if(!this._nodes.has(f))throw new Le(`Graph.${a}:  could not find the "${f}" target node in the graph.`);return ff(!0,n,this.multi,o,g,f,m)}throw new ze(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const u="some"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[u]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,E,M,S,y)=>f(g,v,x,E,M,S,y)),!!this[a].apply(this,h)};const c="every"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[c]=function(){const h=Array.prototype.slice.call(arguments),f=h.pop();return h.push((g,v,x,E,M,S,y)=>!f(g,v,x,E,M,S,y)),!this[a].apply(this,h)}}function bA(r,e){const{name:t,type:n,direction:o}=e,a=t.slice(0,-1)+"Entries";r.prototype[a]=function(u,c){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Eo();if(!arguments.length)return yA(this,n);if(arguments.length===1){u=""+u;const h=this._nodes.get(u);if(!h)throw new Le(`Graph.${a}: could not find the "${u}" node in the graph.`);return SA(n,o,h)}if(arguments.length===2){u=""+u,c=""+c;const h=this._nodes.get(u);if(!h)throw new Le(`Graph.${a}:  could not find the "${u}" source node in the graph.`);if(!this._nodes.has(c))throw new Le(`Graph.${a}:  could not find the "${c}" target node in the graph.`);return MA(n,o,h,c)}throw new ze(`Graph.${a}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function RA(r){fA.forEach(e=>{wA(r,e),TA(r,e),AA(r,e),bA(r,e)})}const CA=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function Lu(){this.A=null,this.B=null}Lu.prototype.wrap=function(r){this.A===null?this.A=r:this.B===null&&(this.B=r)};Lu.prototype.has=function(r){return this.A!==null&&r in this.A||this.B!==null&&r in this.B};function ua(r,e,t,n,o){for(const a in n){const u=n[a],c=u.source,h=u.target,f=c===t?h:c;if(e&&e.has(f.key))continue;const m=o(f.key,f.attributes);if(r&&m)return f.key}}function pf(r,e,t,n,o){if(e!=="mixed"){if(e==="undirected")return ua(r,null,n,n.undirected,o);if(typeof t=="string")return ua(r,null,n,n[t],o)}const a=new Lu;let u;if(e!=="undirected"){if(t!=="out"){if(u=ua(r,null,n,n.in,o),r&&u)return u;a.wrap(n.in)}if(t!=="in"){if(u=ua(r,a,n,n.out,o),r&&u)return u;a.wrap(n.out)}}if(e!=="directed"&&(u=ua(r,a,n,n.undirected,o),r&&u))return u}function PA(r,e,t){if(r!=="mixed"){if(r==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return pf(!1,r,e,t,function(o){n.push(o)}),n}function ca(r,e,t){const n=Object.keys(t),o=n.length;let a=0;return{[Symbol.iterator](){return this},next(){let u=null;do{if(a>=o)return r&&r.wrap(t),{done:!0};const c=t[n[a++]],h=c.source,f=c.target;if(u=h===e?f:h,r&&r.has(u.key)){u=null;continue}}while(u===null);return{done:!1,value:{neighbor:u.key,attributes:u.attributes}}}}}function LA(r,e,t){if(r!=="mixed"){if(r==="undirected")return ca(null,t,t.undirected);if(typeof e=="string")return ca(null,t,t[e])}let n=Eo();const o=new Lu;return r!=="undirected"&&(e!=="out"&&(n=ar(n,ca(o,t,t.in))),e!=="in"&&(n=ar(n,ca(o,t,t.out)))),r!=="directed"&&(n=ar(n,ca(o,t,t.undirected))),n}function DA(r,e){const{name:t,type:n,direction:o}=e;r.prototype[t]=function(a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];a=""+a;const u=this._nodes.get(a);if(typeof u>"u")throw new Le(`Graph.${t}: could not find the "${a}" node in the graph.`);return PA(n==="mixed"?this.type:n,o,u)}}function NA(r,e){const{name:t,type:n,direction:o}=e,a="forEach"+t[0].toUpperCase()+t.slice(1,-1);r.prototype[a]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Le(`Graph.${a}: could not find the "${f}" node in the graph.`);pf(!1,n==="mixed"?this.type:n,o,g,m)};const u="map"+t[0].toUpperCase()+t.slice(1);r.prototype[u]=function(f,m){const g=[];return this[a](f,(v,x)=>{g.push(m(v,x))}),g};const c="filter"+t[0].toUpperCase()+t.slice(1);r.prototype[c]=function(f,m){const g=[];return this[a](f,(v,x)=>{m(v,x)&&g.push(v)}),g};const h="reduce"+t[0].toUpperCase()+t.slice(1);r.prototype[h]=function(f,m,g){if(arguments.length<3)throw new ze(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let v=g;return this[a](f,(x,E)=>{v=m(v,x,E)}),v}}function IA(r,e){const{name:t,type:n,direction:o}=e,a=t[0].toUpperCase()+t.slice(1,-1),u="find"+a;r.prototype[u]=function(f,m){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;f=""+f;const g=this._nodes.get(f);if(typeof g>"u")throw new Le(`Graph.${u}: could not find the "${f}" node in the graph.`);return pf(!0,n==="mixed"?this.type:n,o,g,m)};const c="some"+a;r.prototype[c]=function(f,m){return!!this[u](f,m)};const h="every"+a;r.prototype[h]=function(f,m){return!this[u](f,(v,x)=>!m(v,x))}}function UA(r,e){const{name:t,type:n,direction:o}=e,a=t.slice(0,-1)+"Entries";r.prototype[a]=function(u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Eo();u=""+u;const c=this._nodes.get(u);if(typeof c>"u")throw new Le(`Graph.${a}: could not find the "${u}" node in the graph.`);return LA(n==="mixed"?this.type:n,o,c)}}function FA(r){CA.forEach(e=>{DA(r,e),NA(r,e),IA(r,e),UA(r,e)})}function uu(r,e,t,n,o){const a=n._nodes.values(),u=n.type;let c,h,f,m,g,v;for(;c=a.next(),c.done!==!0;){let x=!1;if(h=c.value,u!=="undirected"){m=h.out;for(f in m){g=m[f];do v=g.target,x=!0,o(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}if(u!=="directed"){m=h.undirected;for(f in m)if(!(e&&h.key>f)){g=m[f];do v=g.target,v.key!==f&&(v=g.source),x=!0,o(h.key,v.key,h.attributes,v.attributes,g.key,g.attributes,g.undirected),g=g.next;while(g)}}t&&!x&&o(h.key,null,h.attributes,null,null,null,null)}}function kA(r,e){const t={key:r};return r_(e.attributes)||(t.attributes=sn({},e.attributes)),t}function OA(r,e,t){const n={key:e,source:t.source.key,target:t.target.key};return r_(t.attributes)||(n.attributes=sn({},t.attributes)),r==="mixed"&&t.undirected&&(n.undirected=!0),n}function zA(r){if(!vn(r))throw new ze('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in r))throw new ze("Graph.import: serialized node is missing its key.");if("attributes"in r&&(!vn(r.attributes)||r.attributes===null))throw new ze("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function BA(r){if(!vn(r))throw new ze('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in r))throw new ze("Graph.import: serialized edge is missing its source.");if(!("target"in r))throw new ze("Graph.import: serialized edge is missing its target.");if("attributes"in r&&(!vn(r.attributes)||r.attributes===null))throw new ze("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in r&&typeof r.undirected!="boolean")throw new ze("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const GA=VT(),HA=new Set(["directed","undirected","mixed"]),Zg=new Set(["domain","_events","_eventsCount","_maxListeners"]),VA=[{name:r=>`${r}Edge`,generateKey:!0},{name:r=>`${r}DirectedEdge`,generateKey:!0,type:"directed"},{name:r=>`${r}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:r=>`${r}EdgeWithKey`},{name:r=>`${r}DirectedEdgeWithKey`,type:"directed"},{name:r=>`${r}UndirectedEdgeWithKey`,type:"undirected"}],WA={allowSelfLoops:!0,multi:!1,type:"mixed"};function XA(r,e,t){if(t&&!vn(t))throw new ze(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},r._nodes.has(e))throw new ot(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function Qg(r,e,t){const n=new r.NodeDataClass(e,t);return r._nodes.set(e,n),r.emit("nodeAdded",{key:e,attributes:t}),n}function h_(r,e,t,n,o,a,u,c){if(!n&&r.type==="undirected")throw new ot(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new ot(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(c&&!vn(c))throw new ze(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`);if(a=""+a,u=""+u,c=c||{},!r.allowSelfLoops&&a===u)throw new ot(`Graph.${e}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const h=r._nodes.get(a),f=r._nodes.get(u);if(!h)throw new Le(`Graph.${e}: source node "${a}" not found.`);if(!f)throw new Le(`Graph.${e}: target node "${u}" not found.`);const m={key:null,undirected:n,source:a,target:u,attributes:c};if(t)o=r._edgeKeyGenerator();else if(o=""+o,r._edges.has(o))throw new ot(`Graph.${e}: the "${o}" edge already exists in the graph.`);if(!r.multi&&(n?typeof h.undirected[u]<"u":typeof h.out[u]<"u"))throw new ot(`Graph.${e}: an edge linking "${a}" to "${u}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const g=new Mo(n,o,h,f,c);r._edges.set(o,g);const v=a===u;return n?(h.undirectedDegree++,f.undirectedDegree++,v&&(h.undirectedLoops++,r._undirectedSelfLoopCount++)):(h.outDegree++,f.inDegree++,v&&(h.directedLoops++,r._directedSelfLoopCount++)),r.multi?g.attachMulti():g.attach(),n?r._undirectedSize++:r._directedSize++,m.key=o,r.emit("edgeAdded",m),o}function $A(r,e,t,n,o,a,u,c,h){if(!n&&r.type==="undirected")throw new ot(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&r.type==="directed")throw new ot(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(c){if(h){if(typeof c!="function")throw new ze(`Graph.${e}: invalid updater function. Expecting a function but got "${c}"`)}else if(!vn(c))throw new ze(`Graph.${e}: invalid attributes. Expecting an object but got "${c}"`)}a=""+a,u=""+u;let f;if(h&&(f=c,c=void 0),!r.allowSelfLoops&&a===u)throw new ot(`Graph.${e}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let m=r._nodes.get(a),g=r._nodes.get(u),v,x;if(!t&&(v=r._edges.get(o),v)){if((v.source.key!==a||v.target.key!==u)&&(!n||v.source.key!==u||v.target.key!==a))throw new ot(`Graph.${e}: inconsistency detected when attempting to merge the "${o}" edge with "${a}" source & "${u}" target vs. ("${v.source.key}", "${v.target.key}").`);x=v}if(!x&&!r.multi&&m&&(x=n?m.undirected[u]:m.out[u]),x){const N=[x.key,!1,!1,!1];if(h?!f:!c)return N;if(h){const P=x.attributes;x.attributes=f(P),r.emit("edgeAttributesUpdated",{type:"replace",key:x.key,attributes:x.attributes})}else sn(x.attributes,c),r.emit("edgeAttributesUpdated",{type:"merge",key:x.key,attributes:x.attributes,data:c});return N}c=c||{},h&&f&&(c=f(c));const E={key:null,undirected:n,source:a,target:u,attributes:c};if(t)o=r._edgeKeyGenerator();else if(o=""+o,r._edges.has(o))throw new ot(`Graph.${e}: the "${o}" edge already exists in the graph.`);let M=!1,S=!1;m||(m=Qg(r,a,{}),M=!0,a===u&&(g=m,S=!0)),g||(g=Qg(r,u,{}),S=!0),v=new Mo(n,o,m,g,c),r._edges.set(o,v);const y=a===u;return n?(m.undirectedDegree++,g.undirectedDegree++,y&&(m.undirectedLoops++,r._undirectedSelfLoopCount++)):(m.outDegree++,g.inDegree++,y&&(m.directedLoops++,r._directedSelfLoopCount++)),r.multi?v.attachMulti():v.attach(),n?r._undirectedSize++:r._directedSize++,E.key=o,r.emit("edgeAdded",E),[o,!0,M,S]}function so(r,e){r._edges.delete(e.key);const{source:t,target:n,attributes:o}=e,a=e.undirected,u=t===n;a?(t.undirectedDegree--,n.undirectedDegree--,u&&(t.undirectedLoops--,r._undirectedSelfLoopCount--)):(t.outDegree--,n.inDegree--,u&&(t.directedLoops--,r._directedSelfLoopCount--)),r.multi?e.detachMulti():e.detach(),a?r._undirectedSize--:r._directedSize--,r.emit("edgeDropped",{key:e.key,attributes:o,source:t.key,target:n.key,undirected:a})}class Ft extends i_.EventEmitter{constructor(e){if(super(),e=sn({},WA,e),typeof e.multi!="boolean")throw new ze(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!HA.has(e.type))throw new ze(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new ze(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?s_:e.type==="directed"?o_:a_;oi(this,"NodeDataClass",t);const n="geid_"+GA()+"_";let o=0;const a=()=>{let u;do u=n+o++;while(this._edges.has(u));return u};oi(this,"_attributes",{}),oi(this,"_nodes",new Map),oi(this,"_edges",new Map),oi(this,"_directedSize",0),oi(this,"_undirectedSize",0),oi(this,"_directedSelfLoopCount",0),oi(this,"_undirectedSelfLoopCount",0),oi(this,"_edgeKeyGenerator",a),oi(this,"_options",e),Zg.forEach(u=>oi(this,u,this[u])),Si(this,"order",()=>this._nodes.size),Si(this,"size",()=>this._edges.size),Si(this,"directedSize",()=>this._directedSize),Si(this,"undirectedSize",()=>this._undirectedSize),Si(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),Si(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),Si(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),Si(this,"multi",this._options.multi),Si(this,"type",this._options.type),Si(this,"allowSelfLoops",this._options.allowSelfLoops),Si(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,o=this._edges.get(n);return!!o&&!o.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new ze(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,o=this._edges.get(n);return!!o&&o.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new ze(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);return n?typeof n.out<"u"&&n.out.hasOwnProperty(t)||typeof n.undirected<"u"&&n.undirected.hasOwnProperty(t):!1}throw new ze(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new ot("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Le(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Le(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const o=n.out&&n.out[t]||void 0;if(o)return o.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new ot("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new Le(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Le(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const o=n.undirected&&n.undirected[t]||void 0;if(o)return o.key}edge(e,t){if(this.multi)throw new ot("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Le(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new Le(`Graph.edge: could not find the "${t}" target node in the graph.`);const o=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(o)return o.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Le(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Le(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Le(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Le(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Le(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Le(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new Le(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,o=0;return this.type!=="directed"&&(n+=t.undirectedDegree,o+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree,o+=t.directedLoops),n-o}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,o=0;return this.type!=="directed"&&(n+=t.undirectedDegree,o+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.outDegree,o+=t.directedLoops),n-o}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,o=0;return this.type!=="directed"&&(n+=t.undirectedDegree,o+=t.undirectedLoops*2),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree,o+=t.directedLoops*2),n-o}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Le(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Le(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Le(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new Le(`Graph.opposite: could not find the "${t}" edge in the graph.`);const o=n.source.key,a=n.target.key;if(e===o)return a;if(e===a)return o;throw new Le(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${o}, ${a}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new Le(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Le(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Le(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new Le(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return XA(this,e,t).key}mergeNode(e,t){if(t&&!vn(t))throw new ze(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(sn(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new ze(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const a=n.attributes;n.attributes=t(a),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const o=t?t({}):{};return n=new this.NodeDataClass(e,o),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:o}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new Le(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const o in t.out){n=t.out[o];do so(this,n),n=n.next;while(n)}for(const o in t.in){n=t.in[o];do so(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const o in t.undirected){n=t.undirected[o];do so(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],o=""+arguments[1];if(t=ui(this,n,o,this.type),!t)throw new Le(`Graph.dropEdge: could not find the "${n}" -> "${o}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new Le(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return so(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new ot("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ot("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=ui(this,e,t,"directed");if(!n)throw new Le(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return so(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new ot("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new ot("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=ui(this,e,t,"undirected");if(!n)throw new Le(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return so(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new ze("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!vn(e))throw new ze("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!vn(e))throw new ze("Graph.mergeAttributes: provided attributes are not a plain object.");return sn(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new ze("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new ze("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!Kg(t))throw new ze("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let o,a;for(;o=n.next(),o.done!==!0;)a=o.value,a.attributes=e(a.key,a.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new ze("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!Kg(t))throw new ze("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let o,a,u,c;for(;o=n.next(),o.done!==!0;)a=o.value,u=a.source,c=a.target,a.attributes=e(a.key,a.attributes,u.key,c.key,u.attributes,c.attributes,a.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new ze("Graph.forEachAdjacencyEntry: expecting a callback.");uu(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new ze("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");uu(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new ze("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");uu(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new ze("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");uu(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!="function")throw new ze("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)o=n.value,e(o.key,o.attributes)}findNode(e){if(typeof e!="function")throw new ze("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)if(o=n.value,e(o.key,o.attributes))return o.key}mapNodes(e){if(typeof e!="function")throw new ze("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,o;const a=new Array(this.order);let u=0;for(;n=t.next(),n.done!==!0;)o=n.value,a[u++]=e(o.key,o.attributes);return a}someNode(e){if(typeof e!="function")throw new ze("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)if(o=n.value,e(o.key,o.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new ze("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,o;for(;n=t.next(),n.done!==!0;)if(o=n.value,!e(o.key,o.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new ze("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,o;const a=[];for(;n=t.next(),n.done!==!0;)o=n.value,e(o.key,o.attributes)&&a.push(o.key);return a}reduceNodes(e,t){if(typeof e!="function")throw new ze("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new ze("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const o=this._nodes.values();let a,u;for(;a=o.next(),a.done!==!0;)u=a.value,n=e(n,u.key,u.attributes);return n}nodeEntries(){const e=this._nodes.values();return{[Symbol.iterator](){return this},next(){const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((o,a)=>{e[t++]=kA(a,o)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((o,a)=>{n[t++]=OA(this.type,a,o)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if(e instanceof Ft)return e.forEachNode((h,f)=>{t?this.mergeNode(h,f):this.addNode(h,f)}),e.forEachEdge((h,f,m,g,v,x,E)=>{t?E?this.mergeUndirectedEdgeWithKey(h,m,g,f):this.mergeDirectedEdgeWithKey(h,m,g,f):E?this.addUndirectedEdgeWithKey(h,m,g,f):this.addDirectedEdgeWithKey(h,m,g,f)}),this;if(!vn(e))throw new ze("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!vn(e.attributes))throw new ze("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,o,a,u,c;if(e.nodes){if(a=e.nodes,!Array.isArray(a))throw new ze("Graph.import: invalid nodes. Expecting an array.");for(n=0,o=a.length;n<o;n++){u=a[n],zA(u);const{key:h,attributes:f}=u;t?this.mergeNode(h,f):this.addNode(h,f)}}if(e.edges){let h=!1;if(this.type==="undirected"&&(h=!0),a=e.edges,!Array.isArray(a))throw new ze("Graph.import: invalid edges. Expecting an array.");for(n=0,o=a.length;n<o;n++){c=a[n],BA(c);const{source:f,target:m,attributes:g,undirected:v=h}=c;let x;"key"in c?(x=t?v?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:v?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,x.call(this,c.key,f,m,g)):(x=t?v?this.mergeUndirectedEdge:this.mergeDirectedEdge:v?this.addUndirectedEdge:this.addDirectedEdge,x.call(this,f,m,g))}}return this}nullCopy(e){const t=new Ft(sn({},this._options,e));return t.replaceAttributes(sn({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,o)=>{const a=sn({},n.attributes);n=new t.NodeDataClass(o,a),t._nodes.set(o,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new ot(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new ot("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new ot("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let o,a;for(;o=n.next(),o.done!==!0;)a=o.value,h_(t,"copy",!1,a.undirected,a.key,a.source.key,a.target.key,sn({},a.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((a,u)=>{e[u]=a.attributes});const t={},n={};this._edges.forEach((a,u)=>{const c=a.undirected?"--":"->";let h="",f=a.source.key,m=a.target.key,g;a.undirected&&f>m&&(g=f,f=m,m=g);const v=`(${f})${c}(${m})`;u.startsWith("geid_")?this.multi&&(typeof n[v]>"u"?n[v]=0:n[v]++,h+=`${n[v]}. `):h+=`[${u}]: `,h+=v,t[h]=a.attributes});const o={};for(const a in this)this.hasOwnProperty(a)&&!Zg.has(a)&&typeof this[a]!="function"&&typeof a!="symbol"&&(o[a]=this[a]);return o.attributes=this._attributes,o.nodes=e,o.edges=t,oi(o,"constructor",this.constructor),o}}typeof Symbol<"u"&&(Ft.prototype[Symbol.for("nodejs.util.inspect.custom")]=Ft.prototype.inspect);VA.forEach(r=>{["add","merge","update"].forEach(e=>{const t=r.name(e),n=e==="add"?h_:$A;r.generateKey?Ft.prototype[t]=function(o,a,u){return n(this,t,!0,(r.type||this.type)==="undirected",null,o,a,u,e==="update")}:Ft.prototype[t]=function(o,a,u,c){return n(this,t,!1,(r.type||this.type)==="undirected",o,a,u,c,e==="update")}})});tA(Ft);hA(Ft);RA(Ft);FA(Ft);class f_ extends Ft{constructor(e){const t=sn({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new ze("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new ze('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class p_ extends Ft{constructor(e){const t=sn({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new ze("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new ze('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class m_ extends Ft{constructor(e){const t=sn({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new ze("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class g_ extends Ft{constructor(e){const t=sn({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new ze("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new ze('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class v_ extends Ft{constructor(e){const t=sn({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new ze("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new ze('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function wo(r){r.from=function(e,t){const n=sn({},e.options,t),o=new r(n);return o.import(e),o}}wo(Ft);wo(f_);wo(p_);wo(m_);wo(g_);wo(v_);Ft.Graph=Ft;Ft.DirectedGraph=f_;Ft.UndirectedGraph=p_;Ft.MultiGraph=m_;Ft.MultiDirectedGraph=g_;Ft.MultiUndirectedGraph=v_;Ft.InvalidArgumentsGraphError=ze;Ft.NotFoundGraphError=Le;Ft.UsageGraphError=ot;function jA(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function ga(r){var e=jA(r,"string");return typeof e=="symbol"?e:e+""}function bn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Jg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,ga(n.key),n)}}function Rn(r,e,t){return e&&Jg(r.prototype,e),t&&Jg(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function vo(r){return vo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},vo(r)}function __(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(__=function(){return!!r})()}function YA(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qA(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return YA(r)}function ci(r,e,t){return e=vo(e),qA(r,__()?Reflect.construct(e,t||[],vo(r).constructor):e.apply(r,t))}function $h(r,e){return $h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},$h(r,e)}function di(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&$h(r,e)}function KA(r){if(Array.isArray(r))return r}function ZA(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,o,a,u,c=[],h=!0,f=!1;try{if(a=(t=t.call(r)).next,e===0){if(Object(t)!==t)return;h=!1}else for(;!(h=(n=a.call(t)).done)&&(c.push(n.value),c.length!==e);h=!0);}catch(m){f=!0,o=m}finally{try{if(!h&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}function jh(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function y_(r,e){if(r){if(typeof r=="string")return jh(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?jh(r,e):void 0}}function QA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _o(r,e){return KA(r)||ZA(r,e)||y_(r,e)||QA()}var Yd={black:"#000000",silver:"#C0C0C0",gray:"#808080",grey:"#808080",white:"#FFFFFF",maroon:"#800000",red:"#FF0000",purple:"#800080",fuchsia:"#FF00FF",green:"#008000",lime:"#00FF00",olive:"#808000",yellow:"#FFFF00",navy:"#000080",blue:"#0000FF",teal:"#008080",aqua:"#00FFFF",darkblue:"#00008B",mediumblue:"#0000CD",darkgreen:"#006400",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",rebeccapurple:"#663399",mediumaquamarine:"#66CDAA",dimgray:"#696969",dimgrey:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",slategrey:"#708090",lightslategray:"#778899",lightslategrey:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370DB",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",palevioletred:"#DB7093",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",lightyellow:"#FFFFE0",ivory:"#FFFFF0"},x_=new Int8Array(4),qd=new Int32Array(x_.buffer,0,1),JA=new Float32Array(x_.buffer,0,1),eb=/^\s*rgba?\s*\(/,tb=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function nb(r){var e=0,t=0,n=0,o=1;if(r[0]==="#")r.length===4?(e=parseInt(r.charAt(1)+r.charAt(1),16),t=parseInt(r.charAt(2)+r.charAt(2),16),n=parseInt(r.charAt(3)+r.charAt(3),16)):(e=parseInt(r.charAt(1)+r.charAt(2),16),t=parseInt(r.charAt(3)+r.charAt(4),16),n=parseInt(r.charAt(5)+r.charAt(6),16)),r.length===9&&(o=parseInt(r.charAt(7)+r.charAt(8),16)/255);else if(eb.test(r)){var a=r.match(tb);a&&(e=+a[1],t=+a[2],n=+a[3],a[4]&&(o=+a[4]))}return{r:e,g:t,b:n,a:o}}var co={};for(var cu in Yd)co[cu]=ba(Yd[cu]),co[Yd[cu]]=co[cu];function S_(r,e,t,n,o){return qd[0]=n<<24|t<<16|e<<8|r,qd[0]=qd[0]&4278190079,JA[0]}function ba(r){if(r=r.toLowerCase(),typeof co[r]<"u")return co[r];var e=nb(r),t=e.r,n=e.g,o=e.b,a=e.a;a=a*255|0;var u=S_(t,n,o,a);return co[r]=u,u}var Kd={};function E_(r){if(typeof Kd[r]<"u")return Kd[r];var e=(r&16711680)>>>16,t=(r&65280)>>>8,n=r&255,o=255,a=S_(e,t,n,o);return Kd[r]=a,a}function ev(r,e,t,n){return t+(e<<8)+(r<<16)}function tv(r,e,t,n,o,a){var u=Math.floor(t/a*o),c=Math.floor(r.drawingBufferHeight/a-n/a*o),h=new Uint8Array(4);r.bindFramebuffer(r.FRAMEBUFFER,e),r.readPixels(u,c,1,1,r.RGBA,r.UNSIGNED_BYTE,h);var f=_o(h,4),m=f[0],g=f[1],v=f[2],x=f[3];return[m,g,v,x]}function Me(r,e,t){return(e=ga(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function nv(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function Ze(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?nv(Object(t),!0).forEach(function(n){Me(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):nv(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function ib(r,e){for(;!{}.hasOwnProperty.call(r,e)&&(r=vo(r))!==null;);return r}function Yh(){return Yh=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(r,e,t){var n=ib(r,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?r:t):o.value}},Yh.apply(null,arguments)}function M_(r,e,t,n){var o=Yh(vo(r.prototype),e,t);return typeof o=="function"?function(a){return o.apply(t,a)}:o}function rb(r){return r.normalized?1:r.size}function Zd(r){var e=0;return r.forEach(function(t){return e+=rb(t)}),e}function w_(r,e,t){var n=r==="VERTEX"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,o=e.createShader(n);if(o===null)throw new Error("loadShader: error while creating the shader");e.shaderSource(o,t),e.compileShader(o);var a=e.getShaderParameter(o,e.COMPILE_STATUS);if(!a){var u=e.getShaderInfoLog(o);throw e.deleteShader(o),new Error(`loadShader: error while compiling the shader:
`.concat(u,`
`).concat(t))}return o}function sb(r,e){return w_("VERTEX",r,e)}function ob(r,e){return w_("FRAGMENT",r,e)}function ab(r,e){var t=r.createProgram();if(t===null)throw new Error("loadProgram: error while creating the program.");var n,o;for(n=0,o=e.length;n<o;n++)r.attachShader(t,e[n]);r.linkProgram(t);var a=r.getProgramParameter(t,r.LINK_STATUS);if(!a)throw r.deleteProgram(t),new Error("loadProgram: error while linking the program.");return t}function iv(r){var e=r.gl,t=r.buffer,n=r.program,o=r.vertexShader,a=r.fragmentShader;e.deleteShader(o),e.deleteShader(a),e.deleteProgram(n),e.deleteBuffer(t)}var rv=`#define PICKING_MODE
`,lb=Me(Me(Me(Me(Me(Me(Me(Me({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4),T_=(function(){function r(e,t,n){bn(this,r),Me(this,"array",new Float32Array),Me(this,"constantArray",new Float32Array),Me(this,"capacity",0),Me(this,"verticesCount",0);var o=this.getDefinition();if(this.VERTICES=o.VERTICES,this.VERTEX_SHADER_SOURCE=o.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=o.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=o.UNIFORMS,this.ATTRIBUTES=o.ATTRIBUTES,this.METHOD=o.METHOD,this.CONSTANT_ATTRIBUTES="CONSTANT_ATTRIBUTES"in o?o.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA="CONSTANT_DATA"in o?o.CONSTANT_DATA:[],this.isInstanced="CONSTANT_ATTRIBUTES"in o,this.ATTRIBUTES_ITEMS_COUNT=Zd(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=n,this.normalProgram=this.getProgramInfo("normal",e,o.VERTEX_SHADER_SOURCE,o.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=t?this.getProgramInfo("pick",e,rv+o.VERTEX_SHADER_SOURCE,rv+o.FRAGMENT_SHADER_SOURCE,t):null,this.isInstanced){var a=Zd(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES," items, received ").concat(this.CONSTANT_DATA.length," instead)"));this.constantArray=new Float32Array(this.CONSTANT_DATA.length*a);for(var u=0;u<this.CONSTANT_DATA.length;u++){var c=this.CONSTANT_DATA[u];if(c.length!==a)throw new Error("Program: error while getting constant data (one vector has ".concat(c.length," items instead of ").concat(a,")"));for(var h=0;h<c.length;h++)this.constantArray[u*a+h]=c[h]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return Rn(r,[{key:"kill",value:function(){iv(this.normalProgram),this.pickProgram&&(iv(this.pickProgram),this.pickProgram=null)}},{key:"getProgramInfo",value:function(t,n,o,a,u){var c=this.getDefinition(),h=n.createBuffer();if(h===null)throw new Error("Program: error while creating the WebGL buffer.");var f=sb(n,o),m=ob(n,a),g=ab(n,[f,m]),v={};c.UNIFORMS.forEach(function(M){var S=n.getUniformLocation(g,M);S&&(v[M]=S)});var x={};c.ATTRIBUTES.forEach(function(M){x[M.name]=n.getAttribLocation(g,M.name)});var E;if("CONSTANT_ATTRIBUTES"in c&&(c.CONSTANT_ATTRIBUTES.forEach(function(M){x[M.name]=n.getAttribLocation(g,M.name)}),E=n.createBuffer(),E===null))throw new Error("Program: error while creating the WebGL constant buffer.");return{name:t,program:g,gl:n,frameBuffer:u,buffer:h,constantBuffer:E||{},uniformLocations:v,attributeLocations:x,isPicking:t==="pick",vertexShader:f,fragmentShader:m}}},{key:"bindProgram",value:function(t){var n=this,o=0,a=t.gl,u=t.buffer;this.isInstanced?(a.bindBuffer(a.ARRAY_BUFFER,t.constantBuffer),o=0,this.CONSTANT_ATTRIBUTES.forEach(function(c){return o+=n.bindAttribute(c,t,o,!1)}),a.bufferData(a.ARRAY_BUFFER,this.constantArray,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,t.buffer),o=0,this.ATTRIBUTES.forEach(function(c){return o+=n.bindAttribute(c,t,o,!0)}),a.bufferData(a.ARRAY_BUFFER,this.array,a.DYNAMIC_DRAW)):(a.bindBuffer(a.ARRAY_BUFFER,u),o=0,this.ATTRIBUTES.forEach(function(c){return o+=n.bindAttribute(c,t,o)}),a.bufferData(a.ARRAY_BUFFER,this.array,a.DYNAMIC_DRAW)),a.bindBuffer(a.ARRAY_BUFFER,null)}},{key:"unbindProgram",value:function(t){var n=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(o){return n.unbindAttribute(o,t,!1)}),this.ATTRIBUTES.forEach(function(o){return n.unbindAttribute(o,t,!0)})):this.ATTRIBUTES.forEach(function(o){return n.unbindAttribute(o,t)})}},{key:"bindAttribute",value:function(t,n,o,a){var u=lb[t.type];if(typeof u!="number")throw new Error('Program.bind: yet unsupported attribute type "'.concat(t.type,'"'));var c=n.attributeLocations[t.name],h=n.gl;if(c!==-1){h.enableVertexAttribArray(c);var f=this.isInstanced?(a?this.ATTRIBUTES_ITEMS_COUNT:Zd(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;if(h.vertexAttribPointer(c,t.size,t.type,t.normalized||!1,f,o),this.isInstanced&&a)if(h instanceof WebGL2RenderingContext)h.vertexAttribDivisor(c,1);else{var m=h.getExtension("ANGLE_instanced_arrays");m&&m.vertexAttribDivisorANGLE(c,1)}}return t.size*u}},{key:"unbindAttribute",value:function(t,n,o){var a=n.attributeLocations[t.name],u=n.gl;if(a!==-1&&(u.disableVertexAttribArray(a),this.isInstanced&&o))if(u instanceof WebGL2RenderingContext)u.vertexAttribDivisor(a,0);else{var c=u.getExtension("ANGLE_instanced_arrays");c&&c.vertexAttribDivisorANGLE(a,0)}}},{key:"reallocate",value:function(t){t!==this.capacity&&(this.capacity=t,this.verticesCount=this.VERTICES*t,this.array=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT))}},{key:"hasNothingToRender",value:function(){return this.verticesCount===0}},{key:"renderProgram",value:function(t,n){var o=n.gl,a=n.program;o.enable(o.BLEND),o.useProgram(a),this.setUniforms(t,n),this.drawWebGL(this.METHOD,n)}},{key:"render",value:function(t){this.hasNothingToRender()||(this.pickProgram&&(this.pickProgram.gl.viewport(0,0,t.width*t.pixelRatio/t.downSizingRatio,t.height*t.pixelRatio/t.downSizingRatio),this.bindProgram(this.pickProgram),this.renderProgram(Ze(Ze({},t),{},{pixelRatio:t.pixelRatio/t.downSizingRatio}),this.pickProgram),this.unbindProgram(this.pickProgram)),this.normalProgram.gl.viewport(0,0,t.width*t.pixelRatio,t.height*t.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(t,this.normalProgram),this.unbindProgram(this.normalProgram))}},{key:"drawWebGL",value:function(t,n){var o=n.gl,a=n.frameBuffer;if(o.bindFramebuffer(o.FRAMEBUFFER,a),!this.isInstanced)o.drawArrays(t,0,this.verticesCount);else if(o instanceof WebGL2RenderingContext)o.drawArraysInstanced(t,0,this.VERTICES,this.capacity);else{var u=o.getExtension("ANGLE_instanced_arrays");u&&u.drawArraysInstancedANGLE(t,0,this.VERTICES,this.capacity)}}}])})(),ub=(function(r){function e(){return bn(this,e),ci(this,e,arguments)}return di(e,r),Rn(e,[{key:"kill",value:function(){M_(e,"kill",this)([])}},{key:"process",value:function(n,o,a){var u=o*this.STRIDE;if(a.hidden){for(var c=u+this.STRIDE;u<c;u++)this.array[u]=0;return}return this.processVisibleItem(E_(n),u,a)}}])})(T_),mf=(function(r){function e(){var t;bn(this,e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=ci(this,e,[].concat(o)),Me(t,"drawLabel",void 0),t}return di(e,r),Rn(e,[{key:"kill",value:function(){M_(e,"kill",this)([])}},{key:"process",value:function(n,o,a,u,c){var h=o*this.STRIDE;if(c.hidden||a.hidden||u.hidden){for(var f=h+this.STRIDE;h<f;h++)this.array[h]=0;return}return this.processVisibleItem(E_(n),h,a,u,c)}}])})(T_);function cb(r,e){return(function(){function t(n,o,a){bn(this,t),Me(this,"drawLabel",e),this.programs=r.map(function(u){return new u(n,o,a)})}return Rn(t,[{key:"reallocate",value:function(o){this.programs.forEach(function(a){return a.reallocate(o)})}},{key:"process",value:function(o,a,u,c,h){this.programs.forEach(function(f){return f.process(o,a,u,c,h)})}},{key:"render",value:function(o){this.programs.forEach(function(a){return a.render(o)})}},{key:"kill",value:function(){this.programs.forEach(function(o){return o.kill()})}}])})()}function db(r,e,t,n,o){var a=o.edgeLabelSize,u=o.edgeLabelFont,c=o.edgeLabelWeight,h=o.edgeLabelColor.attribute?e[o.edgeLabelColor.attribute]||o.edgeLabelColor.color||"#000":o.edgeLabelColor.color,f=e.label;if(f){r.fillStyle=h,r.font="".concat(c," ").concat(a,"px ").concat(u);var m=t.size,g=n.size,v=t.x,x=t.y,E=n.x,M=n.y,S=(v+E)/2,y=(x+M)/2,N=E-v,P=M-x,w=Math.sqrt(N*N+P*P);if(!(w<m+g)){v+=N*m/w,x+=P*m/w,E-=N*g/w,M-=P*g/w,S=(v+E)/2,y=(x+M)/2,N=E-v,P=M-x,w=Math.sqrt(N*N+P*P);var I=r.measureText(f).width;if(I>w){var b="…";for(f=f+b,I=r.measureText(f).width;I>w&&f.length>1;)f=f.slice(0,-2)+b,I=r.measureText(f).width;if(f.length<4)return}var D;N>0?P>0?D=Math.acos(N/w):D=Math.asin(P/w):P>0?D=Math.acos(N/w)+Math.PI:D=Math.asin(N/w)+Math.PI/2,r.save(),r.translate(S,y),r.rotate(D),r.fillText(f,-I/2,e.size/2+a),r.restore()}}}function A_(r,e,t){if(e.label){var n=t.labelSize,o=t.labelFont,a=t.labelWeight,u=t.labelColor.attribute?e[t.labelColor.attribute]||t.labelColor.color||"#000":t.labelColor.color;r.fillStyle=u,r.font="".concat(a," ").concat(n,"px ").concat(o),r.fillText(e.label,e.x+e.size+3,e.y+n/3)}}function hb(r,e,t){var n=t.labelSize,o=t.labelFont,a=t.labelWeight;r.font="".concat(a," ").concat(n,"px ").concat(o),r.fillStyle="#FFF",r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=8,r.shadowColor="#000";var u=2;if(typeof e.label=="string"){var c=r.measureText(e.label).width,h=Math.round(c+5),f=Math.round(n+2*u),m=Math.max(e.size,n/2)+u,g=Math.asin(f/2/m),v=Math.sqrt(Math.abs(Math.pow(m,2)-Math.pow(f/2,2)));r.beginPath(),r.moveTo(e.x+v,e.y+f/2),r.lineTo(e.x+m+h,e.y+f/2),r.lineTo(e.x+m+h,e.y-f/2),r.lineTo(e.x+v,e.y-f/2),r.arc(e.x,e.y,m,g,-g),r.closePath(),r.fill()}else r.beginPath(),r.arc(e.x,e.y,e.size+u,0,Math.PI*2),r.closePath(),r.fill();r.shadowOffsetX=0,r.shadowOffsetY=0,r.shadowBlur=0,A_(r,e,t)}var fb=`
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
`,pb=fb,mb=`
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
`,gb=mb,b_=WebGLRenderingContext,sv=b_.UNSIGNED_BYTE,Qd=b_.FLOAT,vb=["u_sizeRatio","u_correctionRatio","u_matrix"],Du=(function(r){function e(){return bn(this,e),ci(this,e,arguments)}return di(e,r),Rn(e,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:gb,FRAGMENT_SHADER_SOURCE:pb,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:vb,ATTRIBUTES:[{name:"a_position",size:2,type:Qd},{name:"a_size",size:1,type:Qd},{name:"a_color",size:4,type:sv,normalized:!0},{name:"a_id",size:4,type:sv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_angle",size:1,type:Qd}],CONSTANT_DATA:[[e.ANGLE_1],[e.ANGLE_2],[e.ANGLE_3]]}}},{key:"processVisibleItem",value:function(n,o,a){var u=this.array,c=ba(a.color);u[o++]=a.x,u[o++]=a.y,u[o++]=a.size,u[o++]=c,u[o++]=n}},{key:"setUniforms",value:function(n,o){var a=o.gl,u=o.uniformLocations,c=u.u_sizeRatio,h=u.u_correctionRatio,f=u.u_matrix;a.uniform1f(h,n.correctionRatio),a.uniform1f(c,n.sizeRatio),a.uniformMatrix3fv(f,!1,n.matrix)}}])})(ub);Me(Du,"ANGLE_1",0);Me(Du,"ANGLE_2",2*Math.PI/3);Me(Du,"ANGLE_3",4*Math.PI/3);var _b=`
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`,yb=_b,xb=`
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
`,Sb=xb,R_=WebGLRenderingContext,ov=R_.UNSIGNED_BYTE,du=R_.FLOAT,Eb=["u_matrix","u_sizeRatio","u_correctionRatio","u_minEdgeThickness","u_lengthToThicknessRatio","u_widenessToThicknessRatio"],C_={extremity:"target",lengthToThicknessRatio:2.5,widenessToThicknessRatio:2};function P_(r){var e=Ze(Ze({},C_),{});return(function(t){function n(){return bn(this,n),ci(this,n,arguments)}return di(n,t),Rn(n,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:Sb,FRAGMENT_SHADER_SOURCE:yb,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:Eb,ATTRIBUTES:[{name:"a_position",size:2,type:du},{name:"a_normal",size:2,type:du},{name:"a_radius",size:1,type:du},{name:"a_color",size:4,type:ov,normalized:!0},{name:"a_id",size:4,type:ov,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_barycentric",size:3,type:du}],CONSTANT_DATA:[[1,0,0],[0,1,0],[0,0,1]]}}},{key:"processVisibleItem",value:function(a,u,c,h,f){if(e.extremity==="source"){var m=[h,c];c=m[0],h=m[1]}var g=f.size||1,v=h.size||1,x=c.x,E=c.y,M=h.x,S=h.y,y=ba(f.color),N=M-x,P=S-E,w=N*N+P*P,I=0,b=0;w&&(w=1/Math.sqrt(w),I=-P*w*g,b=N*w*g);var D=this.array;D[u++]=M,D[u++]=S,D[u++]=-I,D[u++]=-b,D[u++]=v,D[u++]=y,D[u++]=a}},{key:"setUniforms",value:function(a,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_sizeRatio,g=h.u_correctionRatio,v=h.u_minEdgeThickness,x=h.u_lengthToThicknessRatio,E=h.u_widenessToThicknessRatio;c.uniformMatrix3fv(f,!1,a.matrix),c.uniform1f(m,a.sizeRatio),c.uniform1f(g,a.correctionRatio),c.uniform1f(v,a.minEdgeThickness),c.uniform1f(x,e.lengthToThicknessRatio),c.uniform1f(E,e.widenessToThicknessRatio)}}])})(mf)}P_();var Mb=`
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
`,L_=Mb,wb=`
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
`,Tb=wb,D_=WebGLRenderingContext,av=D_.UNSIGNED_BYTE,hs=D_.FLOAT,Ab=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness","u_lengthToThicknessRatio"],bb={lengthToThicknessRatio:C_.lengthToThicknessRatio};function N_(r){var e=Ze(Ze({},bb),{});return(function(t){function n(){return bn(this,n),ci(this,n,arguments)}return di(n,t),Rn(n,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:Tb,FRAGMENT_SHADER_SOURCE:L_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:Ab,ATTRIBUTES:[{name:"a_positionStart",size:2,type:hs},{name:"a_positionEnd",size:2,type:hs},{name:"a_normal",size:2,type:hs},{name:"a_color",size:4,type:av,normalized:!0},{name:"a_id",size:4,type:av,normalized:!0},{name:"a_radius",size:1,type:hs}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:hs},{name:"a_normalCoef",size:1,type:hs},{name:"a_radiusCoef",size:1,type:hs}],CONSTANT_DATA:[[0,1,0],[0,-1,0],[1,1,1],[1,1,1],[0,-1,0],[1,-1,-1]]}}},{key:"processVisibleItem",value:function(a,u,c,h,f){var m=f.size||1,g=c.x,v=c.y,x=h.x,E=h.y,M=ba(f.color),S=x-g,y=E-v,N=h.size||1,P=S*S+y*y,w=0,I=0;P&&(P=1/Math.sqrt(P),w=-y*P*m,I=S*P*m);var b=this.array;b[u++]=g,b[u++]=v,b[u++]=x,b[u++]=E,b[u++]=w,b[u++]=I,b[u++]=M,b[u++]=a,b[u++]=N}},{key:"setUniforms",value:function(a,u){var c=u.gl,h=u.uniformLocations,f=h.u_matrix,m=h.u_zoomRatio,g=h.u_feather,v=h.u_pixelRatio,x=h.u_correctionRatio,E=h.u_sizeRatio,M=h.u_minEdgeThickness,S=h.u_lengthToThicknessRatio;c.uniformMatrix3fv(f,!1,a.matrix),c.uniform1f(m,a.zoomRatio),c.uniform1f(E,a.sizeRatio),c.uniform1f(x,a.correctionRatio),c.uniform1f(v,a.pixelRatio),c.uniform1f(g,a.antiAliasingFeather),c.uniform1f(M,a.minEdgeThickness),c.uniform1f(S,e.lengthToThicknessRatio)}}])})(mf)}N_();function Rb(r){return cb([N_(),P_()])}var Cb=Rb(),Pb=Cb,Lb=`
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
`,Db=Lb,I_=WebGLRenderingContext,lv=I_.UNSIGNED_BYTE,da=I_.FLOAT,Nb=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness"],Ib=(function(r){function e(){return bn(this,e),ci(this,e,arguments)}return di(e,r),Rn(e,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:Db,FRAGMENT_SHADER_SOURCE:L_,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:Nb,ATTRIBUTES:[{name:"a_positionStart",size:2,type:da},{name:"a_positionEnd",size:2,type:da},{name:"a_normal",size:2,type:da},{name:"a_color",size:4,type:lv,normalized:!0},{name:"a_id",size:4,type:lv,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:da},{name:"a_normalCoef",size:1,type:da}],CONSTANT_DATA:[[0,1],[0,-1],[1,1],[1,1],[0,-1],[1,-1]]}}},{key:"processVisibleItem",value:function(n,o,a,u,c){var h=c.size||1,f=a.x,m=a.y,g=u.x,v=u.y,x=ba(c.color),E=g-f,M=v-m,S=E*E+M*M,y=0,N=0;S&&(S=1/Math.sqrt(S),y=-M*S*h,N=E*S*h);var P=this.array;P[o++]=f,P[o++]=m,P[o++]=g,P[o++]=v,P[o++]=y,P[o++]=N,P[o++]=x,P[o++]=n}},{key:"setUniforms",value:function(n,o){var a=o.gl,u=o.uniformLocations,c=u.u_matrix,h=u.u_zoomRatio,f=u.u_feather,m=u.u_pixelRatio,g=u.u_correctionRatio,v=u.u_sizeRatio,x=u.u_minEdgeThickness;a.uniformMatrix3fv(c,!1,n.matrix),a.uniform1f(h,n.zoomRatio),a.uniform1f(v,n.sizeRatio),a.uniform1f(g,n.correctionRatio),a.uniform1f(m,n.pixelRatio),a.uniform1f(f,n.antiAliasingFeather),a.uniform1f(x,n.minEdgeThickness)}}])})(mf),gf=(function(r){function e(){var t;return bn(this,e),t=ci(this,e),t.rawEmitter=t,t}return di(e,r),Rn(e)})(i_.EventEmitter),Jd,uv;function Ub(){return uv||(uv=1,Jd=function(e){return e!==null&&typeof e=="object"&&typeof e.addUndirectedEdgeWithKey=="function"&&typeof e.dropNode=="function"&&typeof e.multi=="boolean"}),Jd}var Fb=Ub();const kb=Qh(Fb);var Ob=function(e){return e},zb=function(e){return e*e},Bb=function(e){return e*(2-e)},Gb=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},Hb=function(e){return e*e*e},Vb=function(e){return--e*e*e+1},Wb=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},Xb={linear:Ob,quadraticIn:zb,quadraticOut:Bb,quadraticInOut:Gb,cubicIn:Hb,cubicOut:Vb,cubicInOut:Wb},$b={easing:"quadraticInOut",duration:150};function Ei(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function hu(r,e,t){return r[0]=e,r[4]=typeof t=="number"?t:e,r}function cv(r,e){var t=Math.sin(e),n=Math.cos(e);return r[0]=n,r[1]=t,r[3]=-t,r[4]=n,r}function dv(r,e,t){return r[6]=e,r[7]=t,r}function zr(r,e){var t=r[0],n=r[1],o=r[2],a=r[3],u=r[4],c=r[5],h=r[6],f=r[7],m=r[8],g=e[0],v=e[1],x=e[2],E=e[3],M=e[4],S=e[5],y=e[6],N=e[7],P=e[8];return r[0]=g*t+v*a+x*h,r[1]=g*n+v*u+x*f,r[2]=g*o+v*c+x*m,r[3]=E*t+M*a+S*h,r[4]=E*n+M*u+S*f,r[5]=E*o+M*c+S*m,r[6]=y*t+N*a+P*h,r[7]=y*n+N*u+P*f,r[8]=y*o+N*c+P*m,r}function qh(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=r[0],o=r[1],a=r[3],u=r[4],c=r[6],h=r[7],f=e.x,m=e.y;return{x:f*n+m*a+c*t,y:f*o+m*u+h*t}}function jb(r,e){var t=r.height/r.width,n=e.height/e.width;return t<1&&n>1||t>1&&n<1?1:Math.min(Math.max(n,1/n),Math.max(1/t,t))}function ha(r,e,t,n,o){var a=r.angle,u=r.ratio,c=r.x,h=r.y,f=e.width,m=e.height,g=Ei(),v=Math.min(f,m)-2*n,x=jb(e,t);return o?(zr(g,dv(Ei(),c,h)),zr(g,hu(Ei(),u)),zr(g,cv(Ei(),a)),zr(g,hu(Ei(),f/v/2/x,m/v/2/x))):(zr(g,hu(Ei(),2*(v/f)*x,2*(v/m)*x)),zr(g,cv(Ei(),-a)),zr(g,hu(Ei(),1/u)),zr(g,dv(Ei(),-c,-h))),g}function Yb(r,e,t){var n=qh(r,{x:Math.cos(e.angle),y:Math.sin(e.angle)},0),o=n.x,a=n.y;return 1/Math.sqrt(Math.pow(o,2)+Math.pow(a,2))/t.width}function qb(r){if(!r.order)return{x:[0,1],y:[0,1]};var e=1/0,t=-1/0,n=1/0,o=-1/0;return r.forEachNode(function(a,u){var c=u.x,h=u.y;c<e&&(e=c),c>t&&(t=c),h<n&&(n=h),h>o&&(o=h)}),{x:[e,t],y:[n,o]}}function Kb(r){if(!kb(r))throw new Error("Sigma: invalid graph instance.");r.forEachNode(function(e,t){if(!Number.isFinite(t.x)||!Number.isFinite(t.y))throw new Error("Sigma: Coordinates of node ".concat(e," are invalid. A node must have a numeric 'x' and 'y' attribute."))})}function Zb(r,e,t){var n=document.createElement(r);if(e)for(var o in e)n.style[o]=e[o];if(t)for(var a in t)n.setAttribute(a,t[a]);return n}function hv(){return typeof window.devicePixelRatio<"u"?window.devicePixelRatio:1}function fv(r,e,t){return t.sort(function(n,o){var a=e(n)||0,u=e(o)||0;return a<u?-1:a>u?1:0})}function pv(r){var e=_o(r.x,2),t=e[0],n=e[1],o=_o(r.y,2),a=o[0],u=o[1],c=Math.max(n-t,u-a),h=(n+t)/2,f=(u+a)/2;(c===0||Math.abs(c)===1/0||isNaN(c))&&(c=1),isNaN(h)&&(h=0),isNaN(f)&&(f=0);var m=function(v){return{x:.5+(v.x-h)/c,y:.5+(v.y-f)/c}};return m.applyTo=function(g){g.x=.5+(g.x-h)/c,g.y=.5+(g.y-f)/c},m.inverse=function(g){return{x:h+c*(g.x-.5),y:f+c*(g.y-.5)}},m.ratio=c,m}function Kh(r){"@babel/helpers - typeof";return Kh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kh(r)}function mv(r,e){var t=e.size;if(t!==0){var n=r.length;r.length+=t;var o=0;e.forEach(function(a){r[n+o]=a,o++})}}function eh(r){r=r||{};for(var e=0,t=arguments.length<=1?0:arguments.length-1;e<t;e++){var n=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];n&&Object.assign(r,n)}return r}var vf={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,enableEdgeEvents:!1,defaultNodeColor:"#999",defaultNodeType:"circle",defaultEdgeColor:"#ccc",defaultEdgeType:"line",labelFont:"Arial",labelSize:14,labelWeight:"normal",labelColor:{color:"#000"},edgeLabelFont:"Arial",edgeLabelSize:14,edgeLabelWeight:"normal",edgeLabelColor:{attribute:"color"},stagePadding:30,defaultDrawEdgeLabel:db,defaultDrawNodeLabel:A_,defaultDrawNodeHover:hb,minEdgeThickness:1.7,antiAliasingFeather:1,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:"screen",autoRescale:!0,autoCenter:!0,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,nodeReducer:null,edgeReducer:null,zIndex:!1,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,cameraPanBoundaries:null,allowInvalidContainer:!1,nodeProgramClasses:{},nodeHoverProgramClasses:{},edgeProgramClasses:{}},Qb={circle:Du},Jb={arrow:Pb,line:Ib};function th(r){if(typeof r.labelDensity!="number"||r.labelDensity<0)throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");var e=r.minCameraRatio,t=r.maxCameraRatio;if(typeof e=="number"&&typeof t=="number"&&t<e)throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function eR(r){var e=eh({},vf,r);return e.nodeProgramClasses=eh({},Qb,e.nodeProgramClasses),e.edgeProgramClasses=eh({},Jb,e.edgeProgramClasses),e}var fu=1.5,gv=(function(r){function e(){var t;return bn(this,e),t=ci(this,e),Me(t,"x",.5),Me(t,"y",.5),Me(t,"angle",0),Me(t,"ratio",1),Me(t,"minRatio",null),Me(t,"maxRatio",null),Me(t,"enabledZooming",!0),Me(t,"enabledPanning",!0),Me(t,"enabledRotation",!0),Me(t,"clean",null),Me(t,"nextFrame",null),Me(t,"previousState",null),Me(t,"enabled",!0),t.previousState=t.getState(),t}return di(e,r),Rn(e,[{key:"enable",value:function(){return this.enabled=!0,this}},{key:"disable",value:function(){return this.enabled=!1,this}},{key:"getState",value:function(){return{x:this.x,y:this.y,angle:this.angle,ratio:this.ratio}}},{key:"hasState",value:function(n){return this.x===n.x&&this.y===n.y&&this.ratio===n.ratio&&this.angle===n.angle}},{key:"getPreviousState",value:function(){var n=this.previousState;return n?{x:n.x,y:n.y,angle:n.angle,ratio:n.ratio}:null}},{key:"getBoundedRatio",value:function(n){var o=n;return typeof this.minRatio=="number"&&(o=Math.max(o,this.minRatio)),typeof this.maxRatio=="number"&&(o=Math.min(o,this.maxRatio)),o}},{key:"validateState",value:function(n){var o={};return this.enabledPanning&&typeof n.x=="number"&&(o.x=n.x),this.enabledPanning&&typeof n.y=="number"&&(o.y=n.y),this.enabledZooming&&typeof n.ratio=="number"&&(o.ratio=this.getBoundedRatio(n.ratio)),this.enabledRotation&&typeof n.angle=="number"&&(o.angle=n.angle),this.clean?this.clean(Ze(Ze({},this.getState()),o)):o}},{key:"isAnimated",value:function(){return!!this.nextFrame}},{key:"setState",value:function(n){if(!this.enabled)return this;this.previousState=this.getState();var o=this.validateState(n);return typeof o.x=="number"&&(this.x=o.x),typeof o.y=="number"&&(this.y=o.y),typeof o.ratio=="number"&&(this.ratio=o.ratio),typeof o.angle=="number"&&(this.angle=o.angle),this.hasState(this.previousState)||this.emit("updated",this.getState()),this}},{key:"updateState",value:function(n){return this.setState(n(this.getState())),this}},{key:"animate",value:function(n){var o=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=arguments.length>2?arguments[2]:void 0;if(!u)return new Promise(function(x){return o.animate(n,a,x)});if(this.enabled){var c=Ze(Ze({},$b),a),h=this.validateState(n),f=typeof c.easing=="function"?c.easing:Xb[c.easing],m=Date.now(),g=this.getState(),v=function(){var E=(Date.now()-m)/c.duration;if(E>=1){o.nextFrame=null,o.setState(h),o.animationCallback&&(o.animationCallback.call(null),o.animationCallback=void 0);return}var M=f(E),S={};typeof h.x=="number"&&(S.x=g.x+(h.x-g.x)*M),typeof h.y=="number"&&(S.y=g.y+(h.y-g.y)*M),o.enabledRotation&&typeof h.angle=="number"&&(S.angle=g.angle+(h.angle-g.angle)*M),typeof h.ratio=="number"&&(S.ratio=g.ratio+(h.ratio-g.ratio)*M),o.setState(S),o.nextFrame=requestAnimationFrame(v)};this.nextFrame?(cancelAnimationFrame(this.nextFrame),this.animationCallback&&this.animationCallback.call(null),this.nextFrame=requestAnimationFrame(v)):v(),this.animationCallback=u}}},{key:"animatedZoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio/n}):this.animate({ratio:this.ratio/(n.factor||fu)},n):this.animate({ratio:this.ratio/fu})}},{key:"animatedUnzoom",value:function(n){return n?typeof n=="number"?this.animate({ratio:this.ratio*n}):this.animate({ratio:this.ratio*(n.factor||fu)},n):this.animate({ratio:this.ratio*fu})}},{key:"animatedReset",value:function(n){return this.animate({x:.5,y:.5,ratio:1,angle:0},n)}},{key:"copy",value:function(){return e.from(this.getState())}}],[{key:"from",value:function(n){var o=new e;return o.setState(n)}}])})(gf);function wi(r,e){var t=e.getBoundingClientRect();return{x:r.clientX-t.left,y:r.clientY-t.top}}function er(r,e){var t=Ze(Ze({},wi(r,e)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){t.sigmaDefaultPrevented=!0},original:r});return t}function fa(r){var e="x"in r?r:Ze(Ze({},r.touches[0]||r.previousTouches[0]),{},{original:r.original,sigmaDefaultPrevented:r.sigmaDefaultPrevented,preventSigmaDefault:function(){r.sigmaDefaultPrevented=!0,e.sigmaDefaultPrevented=!0}});return e}function tR(r,e){return Ze(Ze({},er(r,e)),{},{delta:U_(r)})}var nR=2;function Su(r){for(var e=[],t=0,n=Math.min(r.length,nR);t<n;t++)e.push(r[t]);return e}function pa(r,e,t){var n={touches:Su(r.touches).map(function(o){return wi(o,t)}),previousTouches:e.map(function(o){return wi(o,t)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){n.sigmaDefaultPrevented=!0},original:r};return n}function U_(r){if(typeof r.deltaY<"u")return r.deltaY*-3/360;if(typeof r.detail<"u")return r.detail/-9;throw new Error("Captor: could not extract delta from event.")}var F_=(function(r){function e(t,n){var o;return bn(this,e),o=ci(this,e),o.container=t,o.renderer=n,o}return di(e,r),Rn(e)})(gf),iR=["doubleClickTimeout","doubleClickZoomingDuration","doubleClickZoomingRatio","dragTimeout","draggedEventsTolerance","inertiaDuration","inertiaRatio","zoomDuration","zoomingRatio"],rR=iR.reduce(function(r,e){return Ze(Ze({},r),{},Me({},e,vf[e]))},{}),sR=(function(r){function e(t,n){var o;return bn(this,e),o=ci(this,e,[t,n]),Me(o,"enabled",!0),Me(o,"draggedEvents",0),Me(o,"downStartTime",null),Me(o,"lastMouseX",null),Me(o,"lastMouseY",null),Me(o,"isMouseDown",!1),Me(o,"isMoving",!1),Me(o,"movingTimeout",null),Me(o,"startCameraState",null),Me(o,"clicks",0),Me(o,"doubleClickTimeout",null),Me(o,"currentWheelDirection",0),Me(o,"settings",rR),o.handleClick=o.handleClick.bind(o),o.handleRightClick=o.handleRightClick.bind(o),o.handleDown=o.handleDown.bind(o),o.handleUp=o.handleUp.bind(o),o.handleMove=o.handleMove.bind(o),o.handleWheel=o.handleWheel.bind(o),o.handleLeave=o.handleLeave.bind(o),o.handleEnter=o.handleEnter.bind(o),t.addEventListener("click",o.handleClick,{capture:!1}),t.addEventListener("contextmenu",o.handleRightClick,{capture:!1}),t.addEventListener("mousedown",o.handleDown,{capture:!1}),t.addEventListener("wheel",o.handleWheel,{capture:!1}),t.addEventListener("mouseleave",o.handleLeave,{capture:!1}),t.addEventListener("mouseenter",o.handleEnter,{capture:!1}),document.addEventListener("mousemove",o.handleMove,{capture:!1}),document.addEventListener("mouseup",o.handleUp,{capture:!1}),o}return di(e,r),Rn(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("click",this.handleClick),n.removeEventListener("contextmenu",this.handleRightClick),n.removeEventListener("mousedown",this.handleDown),n.removeEventListener("wheel",this.handleWheel),n.removeEventListener("mouseleave",this.handleLeave),n.removeEventListener("mouseenter",this.handleEnter),document.removeEventListener("mousemove",this.handleMove),document.removeEventListener("mouseup",this.handleUp)}},{key:"handleClick",value:function(n){var o=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout=="number"&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(n);setTimeout(function(){o.clicks=0,o.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit("click",er(n,this.container))}}},{key:"handleRightClick",value:function(n){this.enabled&&this.emit("rightClick",er(n,this.container))}},{key:"handleDoubleClick",value:function(n){if(this.enabled){n.preventDefault(),n.stopPropagation();var o=er(n,this.container);if(this.emit("doubleClick",o),!o.sigmaDefaultPrevented){var a=this.renderer.getCamera(),u=a.getBoundedRatio(a.getState().ratio/this.settings.doubleClickZoomingRatio);a.animate(this.renderer.getViewportZoomedState(wi(n,this.container),u),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}}},{key:"handleDown",value:function(n){if(this.enabled){if(n.button===0){this.startCameraState=this.renderer.getCamera().getState();var o=wi(n,this.container),a=o.x,u=o.y;this.lastMouseX=a,this.lastMouseY=u,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}this.emit("mousedown",er(n,this.container))}}},{key:"handleUp",value:function(n){var o=this;if(!(!this.enabled||!this.isMouseDown)){var a=this.renderer.getCamera();this.isMouseDown=!1,typeof this.movingTimeout=="number"&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var u=wi(n,this.container),c=u.x,h=u.y,f=a.getState(),m=a.getPreviousState()||{x:0,y:0};this.isMoving?a.animate({x:f.x+this.settings.inertiaRatio*(f.x-m.x),y:f.y+this.settings.inertiaRatio*(f.y-m.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"}):(this.lastMouseX!==c||this.lastMouseY!==h)&&a.setState({x:f.x,y:f.y}),this.isMoving=!1,setTimeout(function(){var g=o.draggedEvents>0;o.draggedEvents=0,g&&o.renderer.getSetting("hideEdgesOnMove")&&o.renderer.refresh()},0),this.emit("mouseup",er(n,this.container))}}},{key:"handleMove",value:function(n){var o=this;if(this.enabled){var a=er(n,this.container);if(this.emit("mousemovebody",a),(n.target===this.container||n.composedPath()[0]===this.container)&&this.emit("mousemove",a),!a.sigmaDefaultPrevented&&this.isMouseDown){this.isMoving=!0,this.draggedEvents++,typeof this.movingTimeout=="number"&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){o.movingTimeout=null,o.isMoving=!1},this.settings.dragTimeout);var u=this.renderer.getCamera(),c=wi(n,this.container),h=c.x,f=c.y,m=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),g=this.renderer.viewportToFramedGraph({x:h,y:f}),v=m.x-g.x,x=m.y-g.y,E=u.getState(),M=E.x+v,S=E.y+x;u.setState({x:M,y:S}),this.lastMouseX=h,this.lastMouseY=f,n.preventDefault(),n.stopPropagation()}}}},{key:"handleLeave",value:function(n){this.emit("mouseleave",er(n,this.container))}},{key:"handleEnter",value:function(n){this.emit("mouseenter",er(n,this.container))}},{key:"handleWheel",value:function(n){var o=this,a=this.renderer.getCamera();if(!(!this.enabled||!a.enabledZooming)){var u=U_(n);if(u){var c=tR(n,this.container);if(this.emit("wheel",c),c.sigmaDefaultPrevented){n.preventDefault(),n.stopPropagation();return}var h=a.getState().ratio,f=u>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,m=a.getBoundedRatio(h*f),g=u>0?1:-1,v=Date.now();h!==m&&(n.preventDefault(),n.stopPropagation(),!(this.currentWheelDirection===g&&this.lastWheelTriggerTime&&v-this.lastWheelTriggerTime<this.settings.zoomDuration/5)&&(a.animate(this.renderer.getViewportZoomedState(wi(n,this.container),m),{easing:"quadraticOut",duration:this.settings.zoomDuration},function(){o.currentWheelDirection=0}),this.currentWheelDirection=g,this.lastWheelTriggerTime=v))}}}},{key:"setSettings",value:function(n){this.settings=n}}])})(F_),oR=["dragTimeout","inertiaDuration","inertiaRatio","doubleClickTimeout","doubleClickZoomingRatio","doubleClickZoomingDuration","tapMoveTolerance"],aR=oR.reduce(function(r,e){return Ze(Ze({},r),{},Me({},e,vf[e]))},{}),lR=(function(r){function e(t,n){var o;return bn(this,e),o=ci(this,e,[t,n]),Me(o,"enabled",!0),Me(o,"isMoving",!1),Me(o,"hasMoved",!1),Me(o,"touchMode",0),Me(o,"startTouchesPositions",[]),Me(o,"lastTouches",[]),Me(o,"lastTap",null),Me(o,"settings",aR),o.handleStart=o.handleStart.bind(o),o.handleLeave=o.handleLeave.bind(o),o.handleMove=o.handleMove.bind(o),t.addEventListener("touchstart",o.handleStart,{capture:!1}),t.addEventListener("touchcancel",o.handleLeave,{capture:!1}),document.addEventListener("touchend",o.handleLeave,{capture:!1,passive:!1}),document.addEventListener("touchmove",o.handleMove,{capture:!1,passive:!1}),o}return di(e,r),Rn(e,[{key:"kill",value:function(){var n=this.container;n.removeEventListener("touchstart",this.handleStart),n.removeEventListener("touchcancel",this.handleLeave),document.removeEventListener("touchend",this.handleLeave),document.removeEventListener("touchmove",this.handleMove)}},{key:"getDimensions",value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:"handleStart",value:function(n){var o=this;if(this.enabled){n.preventDefault();var a=Su(n.touches);if(this.touchMode=a.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=a.map(function(x){return wi(x,o.container)}),this.touchMode===2){var u=_o(this.startTouchesPositions,2),c=u[0],h=c.x,f=c.y,m=u[1],g=m.x,v=m.y;this.startTouchesAngle=Math.atan2(v-f,g-h),this.startTouchesDistance=Math.sqrt(Math.pow(g-h,2)+Math.pow(v-f,2))}this.emit("touchdown",pa(n,this.lastTouches,this.container)),this.lastTouches=a,this.lastTouchesPositions=this.startTouchesPositions}}},{key:"handleLeave",value:function(n){if(!(!this.enabled||!this.startTouchesPositions.length)){switch(n.cancelable&&n.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(n.touches.length===1){this.handleStart(n),n.preventDefault();break}case 1:if(this.isMoving){var o=this.renderer.getCamera(),a=o.getState(),u=o.getPreviousState()||{x:0,y:0};o.animate({x:a.x+this.settings.inertiaRatio*(a.x-u.x),y:a.y+this.settings.inertiaRatio*(a.y-u.y)},{duration:this.settings.inertiaDuration,easing:"quadraticOut"})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0;break}if(this.emit("touchup",pa(n,this.lastTouches,this.container)),!n.touches.length){var c=wi(this.lastTouches[0],this.container),h=this.startTouchesPositions[0],f=Math.pow(c.x-h.x,2)+Math.pow(c.y-h.y,2);if(!n.touches.length&&f<Math.pow(this.settings.tapMoveTolerance,2))if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var m=pa(n,this.lastTouches,this.container);if(this.emit("doubletap",m),this.lastTap=null,!m.sigmaDefaultPrevented){var g=this.renderer.getCamera(),v=g.getBoundedRatio(g.getState().ratio/this.settings.doubleClickZoomingRatio);g.animate(this.renderer.getViewportZoomedState(c,v),{easing:"quadraticInOut",duration:this.settings.doubleClickZoomingDuration})}}else{var x=pa(n,this.lastTouches,this.container);this.emit("tap",x),this.lastTap={time:Date.now(),position:x.touches[0]||x.previousTouches[0]}}}this.lastTouches=Su(n.touches),this.startTouchesPositions=[]}}},{key:"handleMove",value:function(n){var o=this;if(!(!this.enabled||!this.startTouchesPositions.length)){n.preventDefault();var a=Su(n.touches),u=a.map(function(O){return wi(O,o.container)}),c=this.lastTouches;this.lastTouches=a,this.lastTouchesPositions=u;var h=pa(n,c,this.container);if(this.emit("touchmove",h),!h.sigmaDefaultPrevented&&(this.hasMoved||(this.hasMoved=u.some(function(O,re){var De=o.startTouchesPositions[re];return De&&(O.x!==De.x||O.y!==De.y)})),!!this.hasMoved)){this.isMoving=!0,this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){o.isMoving=!1},this.settings.dragTimeout);var f=this.renderer.getCamera(),m=this.startCameraState,g=this.renderer.getSetting("stagePadding");switch(this.touchMode){case 1:{var v=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),x=v.x,E=v.y,M=this.renderer.viewportToFramedGraph(u[0]),S=M.x,y=M.y;f.setState({x:m.x+x-S,y:m.y+E-y});break}case 2:{var N={x:.5,y:.5,angle:0,ratio:1},P=u[0],w=P.x,I=P.y,b=u[1],D=b.x,k=b.y,C=Math.atan2(k-I,D-w)-this.startTouchesAngle,T=Math.hypot(k-I,D-w)/this.startTouchesDistance,z=f.getBoundedRatio(m.ratio/T);N.ratio=z,N.angle=m.angle+C;var te=this.getDimensions(),Y=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:m}),Z=Math.min(te.width,te.height)-2*g,de=Z/te.width,q=Z/te.height,he=z/Z,V=w-Z/2/de,ce=I-Z/2/q,le=[V*Math.cos(-N.angle)-ce*Math.sin(-N.angle),ce*Math.cos(-N.angle)+V*Math.sin(-N.angle)];V=le[0],ce=le[1],N.x=Y.x-V*he,N.y=Y.y+ce*he,f.setState(N);break}}}}}},{key:"setSettings",value:function(n){this.settings=n}}])})(F_);function uR(r){if(Array.isArray(r))return jh(r)}function cR(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function dR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vv(r){return uR(r)||cR(r)||y_(r)||dR()}function hR(r,e){if(r==null)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)!==-1)continue;t[n]=r[n]}return t}function nh(r,e){if(r==null)return{};var t,n,o=hR(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var _v=(function(){function r(e,t){bn(this,r),this.key=e,this.size=t}return Rn(r,null,[{key:"compare",value:function(t,n){return t.size>n.size?-1:t.size<n.size||t.key>n.key?1:-1}}])})(),yv=(function(){function r(){bn(this,r),Me(this,"width",0),Me(this,"height",0),Me(this,"cellSize",0),Me(this,"columns",0),Me(this,"rows",0),Me(this,"cells",{})}return Rn(r,[{key:"resizeAndClear",value:function(t,n){this.width=t.width,this.height=t.height,this.cellSize=n,this.columns=Math.ceil(t.width/n),this.rows=Math.ceil(t.height/n),this.cells={}}},{key:"getIndex",value:function(t){var n=Math.floor(t.x/this.cellSize),o=Math.floor(t.y/this.cellSize);return o*this.columns+n}},{key:"add",value:function(t,n,o){var a=new _v(t,n),u=this.getIndex(o),c=this.cells[u];c||(c=[],this.cells[u]=c),c.push(a)}},{key:"organize",value:function(){for(var t in this.cells){var n=this.cells[t];n.sort(_v.compare)}}},{key:"getLabelsToDisplay",value:function(t,n){var o=this.cellSize*this.cellSize,a=o/t/t,u=a*n/o,c=Math.ceil(u),h=[];for(var f in this.cells)for(var m=this.cells[f],g=0;g<Math.min(c,m.length);g++)h.push(m[g].key);return h}}])})();function fR(r){var e=r.graph,t=r.hoveredNode,n=r.highlightedNodes,o=r.displayedNodeLabels,a=[];return e.forEachEdge(function(u,c,h,f){(h===t||f===t||n.has(h)||n.has(f)||o.has(h)&&o.has(f))&&a.push(u)}),a}var xv=150,Sv=50,nr=Object.prototype.hasOwnProperty;function pR(r,e,t){if(!nr.call(t,"x")||!nr.call(t,"y"))throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(e,'". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));return t.color||(t.color=r.defaultNodeColor),!t.label&&t.label!==""&&(t.label=null),t.label!==void 0&&t.label!==null?t.label=""+t.label:t.label=null,t.size||(t.size=2),nr.call(t,"hidden")||(t.hidden=!1),nr.call(t,"highlighted")||(t.highlighted=!1),nr.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultNodeType),t.zIndex||(t.zIndex=0),t}function mR(r,e,t){return t.color||(t.color=r.defaultEdgeColor),t.label||(t.label=""),t.size||(t.size=.5),nr.call(t,"hidden")||(t.hidden=!1),nr.call(t,"forceLabel")||(t.forceLabel=!1),(!t.type||t.type==="")&&(t.type=r.defaultEdgeType),t.zIndex||(t.zIndex=0),t}var gR=(function(r){function e(t,n){var o,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(bn(this,e),o=ci(this,e),Me(o,"elements",{}),Me(o,"canvasContexts",{}),Me(o,"webGLContexts",{}),Me(o,"pickingLayers",new Set),Me(o,"textures",{}),Me(o,"frameBuffers",{}),Me(o,"activeListeners",{}),Me(o,"labelGrid",new yv),Me(o,"nodeDataCache",{}),Me(o,"edgeDataCache",{}),Me(o,"nodeProgramIndex",{}),Me(o,"edgeProgramIndex",{}),Me(o,"nodesWithForcedLabels",new Set),Me(o,"edgesWithForcedLabels",new Set),Me(o,"nodeExtent",{x:[0,1],y:[0,1]}),Me(o,"nodeZExtent",[1/0,-1/0]),Me(o,"edgeZExtent",[1/0,-1/0]),Me(o,"matrix",Ei()),Me(o,"invMatrix",Ei()),Me(o,"correctionRatio",1),Me(o,"customBBox",null),Me(o,"normalizationFunction",pv({x:[0,1],y:[0,1]})),Me(o,"graphToViewportRatio",1),Me(o,"itemIDsIndex",{}),Me(o,"nodeIndices",{}),Me(o,"edgeIndices",{}),Me(o,"width",0),Me(o,"height",0),Me(o,"pixelRatio",hv()),Me(o,"pickingDownSizingRatio",2*o.pixelRatio),Me(o,"displayedNodeLabels",new Set),Me(o,"displayedEdgeLabels",new Set),Me(o,"highlightedNodes",new Set),Me(o,"hoveredNode",null),Me(o,"hoveredEdge",null),Me(o,"renderFrame",null),Me(o,"renderHighlightedNodesFrame",null),Me(o,"needToProcess",!1),Me(o,"checkEdgesEventsFrame",null),Me(o,"nodePrograms",{}),Me(o,"nodeHoverPrograms",{}),Me(o,"edgePrograms",{}),o.settings=eR(a),th(o.settings),Kb(t),!(n instanceof HTMLElement))throw new Error("Sigma: container should be an html element.");o.graph=t,o.container=n,o.createWebGLContext("edges",{picking:a.enableEdgeEvents}),o.createCanvasContext("edgeLabels"),o.createWebGLContext("nodes",{picking:!0}),o.createCanvasContext("labels"),o.createCanvasContext("hovers"),o.createWebGLContext("hoverNodes"),o.createCanvasContext("mouse",{style:{touchAction:"none",userSelect:"none"}}),o.resize();for(var u in o.settings.nodeProgramClasses)o.registerNodeProgram(u,o.settings.nodeProgramClasses[u],o.settings.nodeHoverProgramClasses[u]);for(var c in o.settings.edgeProgramClasses)o.registerEdgeProgram(c,o.settings.edgeProgramClasses[c]);return o.camera=new gv,o.bindCameraHandlers(),o.mouseCaptor=new sR(o.elements.mouse,o),o.mouseCaptor.setSettings(o.settings),o.touchCaptor=new lR(o.elements.mouse,o),o.touchCaptor.setSettings(o.settings),o.bindEventHandlers(),o.bindGraphHandlers(),o.handleSettingsUpdate(),o.refresh(),o}return di(e,r),Rn(e,[{key:"registerNodeProgram",value:function(n,o,a){return this.nodePrograms[n]&&this.nodePrograms[n].kill(),this.nodeHoverPrograms[n]&&this.nodeHoverPrograms[n].kill(),this.nodePrograms[n]=new o(this.webGLContexts.nodes,this.frameBuffers.nodes,this),this.nodeHoverPrograms[n]=new(a||o)(this.webGLContexts.hoverNodes,null,this),this}},{key:"registerEdgeProgram",value:function(n,o){return this.edgePrograms[n]&&this.edgePrograms[n].kill(),this.edgePrograms[n]=new o(this.webGLContexts.edges,this.frameBuffers.edges,this),this}},{key:"unregisterNodeProgram",value:function(n){if(this.nodePrograms[n]){var o=this.nodePrograms,a=o[n],u=nh(o,[n].map(ga));a.kill(),this.nodePrograms=u}if(this.nodeHoverPrograms[n]){var c=this.nodeHoverPrograms,h=c[n],f=nh(c,[n].map(ga));h.kill(),this.nodePrograms=f}return this}},{key:"unregisterEdgeProgram",value:function(n){if(this.edgePrograms[n]){var o=this.edgePrograms,a=o[n],u=nh(o,[n].map(ga));a.kill(),this.edgePrograms=u}return this}},{key:"resetWebGLTexture",value:function(n){var o=this.webGLContexts[n],a=this.frameBuffers[n],u=this.textures[n];u&&o.deleteTexture(u);var c=o.createTexture();return o.bindFramebuffer(o.FRAMEBUFFER,a),o.bindTexture(o.TEXTURE_2D,c),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,this.width,this.height,0,o.RGBA,o.UNSIGNED_BYTE,null),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,c,0),this.textures[n]=c,this}},{key:"bindCameraHandlers",value:function(){var n=this;return this.activeListeners.camera=function(){n.scheduleRender()},this.camera.on("updated",this.activeListeners.camera),this}},{key:"unbindCameraHandlers",value:function(){return this.camera.removeListener("updated",this.activeListeners.camera),this}},{key:"getNodeAtPosition",value:function(n){var o=n.x,a=n.y,u=tv(this.webGLContexts.nodes,this.frameBuffers.nodes,o,a,this.pixelRatio,this.pickingDownSizingRatio),c=ev.apply(void 0,vv(u)),h=this.itemIDsIndex[c];return h&&h.type==="node"?h.id:null}},{key:"bindEventHandlers",value:function(){var n=this;this.activeListeners.handleResize=function(){n.scheduleRefresh()},window.addEventListener("resize",this.activeListeners.handleResize),this.activeListeners.handleMove=function(a){var u=fa(a),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}},h=n.getNodeAtPosition(u);if(h&&n.hoveredNode!==h&&!n.nodeDataCache[h].hidden){n.hoveredNode&&n.emit("leaveNode",Ze(Ze({},c),{},{node:n.hoveredNode})),n.hoveredNode=h,n.emit("enterNode",Ze(Ze({},c),{},{node:h})),n.scheduleHighlightedNodesRender();return}if(n.hoveredNode&&n.getNodeAtPosition(u)!==n.hoveredNode){var f=n.hoveredNode;n.hoveredNode=null,n.emit("leaveNode",Ze(Ze({},c),{},{node:f})),n.scheduleHighlightedNodesRender();return}if(n.settings.enableEdgeEvents){var m=n.hoveredNode?null:n.getEdgeAtPoint(c.event.x,c.event.y);m!==n.hoveredEdge&&(n.hoveredEdge&&n.emit("leaveEdge",Ze(Ze({},c),{},{edge:n.hoveredEdge})),m&&n.emit("enterEdge",Ze(Ze({},c),{},{edge:m})),n.hoveredEdge=m)}},this.activeListeners.handleMoveBody=function(a){var u=fa(a);n.emit("moveBody",{event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}})},this.activeListeners.handleLeave=function(a){var u=fa(a),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.hoveredNode&&(n.emit("leaveNode",Ze(Ze({},c),{},{node:n.hoveredNode})),n.scheduleHighlightedNodesRender()),n.settings.enableEdgeEvents&&n.hoveredEdge&&(n.emit("leaveEdge",Ze(Ze({},c),{},{edge:n.hoveredEdge})),n.scheduleHighlightedNodesRender()),n.emit("leaveStage",Ze({},c))},this.activeListeners.handleEnter=function(a){var u=fa(a),c={event:u,preventSigmaDefault:function(){u.preventSigmaDefault()}};n.emit("enterStage",Ze({},c))};var o=function(u){return function(c){var h=fa(c),f={event:h,preventSigmaDefault:function(){h.preventSigmaDefault()}},m=n.getNodeAtPosition(h);if(m)return n.emit("".concat(u,"Node"),Ze(Ze({},f),{},{node:m}));if(n.settings.enableEdgeEvents){var g=n.getEdgeAtPoint(h.x,h.y);if(g)return n.emit("".concat(u,"Edge"),Ze(Ze({},f),{},{edge:g}))}return n.emit("".concat(u,"Stage"),f)}};return this.activeListeners.handleClick=o("click"),this.activeListeners.handleRightClick=o("rightClick"),this.activeListeners.handleDoubleClick=o("doubleClick"),this.activeListeners.handleWheel=o("wheel"),this.activeListeners.handleDown=o("down"),this.activeListeners.handleUp=o("up"),this.mouseCaptor.on("mousemove",this.activeListeners.handleMove),this.mouseCaptor.on("mousemovebody",this.activeListeners.handleMoveBody),this.mouseCaptor.on("click",this.activeListeners.handleClick),this.mouseCaptor.on("rightClick",this.activeListeners.handleRightClick),this.mouseCaptor.on("doubleClick",this.activeListeners.handleDoubleClick),this.mouseCaptor.on("wheel",this.activeListeners.handleWheel),this.mouseCaptor.on("mousedown",this.activeListeners.handleDown),this.mouseCaptor.on("mouseup",this.activeListeners.handleUp),this.mouseCaptor.on("mouseleave",this.activeListeners.handleLeave),this.mouseCaptor.on("mouseenter",this.activeListeners.handleEnter),this.touchCaptor.on("touchdown",this.activeListeners.handleDown),this.touchCaptor.on("touchdown",this.activeListeners.handleMove),this.touchCaptor.on("touchup",this.activeListeners.handleUp),this.touchCaptor.on("touchmove",this.activeListeners.handleMove),this.touchCaptor.on("tap",this.activeListeners.handleClick),this.touchCaptor.on("doubletap",this.activeListeners.handleDoubleClick),this.touchCaptor.on("touchmove",this.activeListeners.handleMoveBody),this}},{key:"bindGraphHandlers",value:function(){var n=this,o=this.graph,a=new Set(["x","y","zIndex","type"]);return this.activeListeners.eachNodeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachNode(function(m){return n.updateNode(m)});var f=!h||h.some(function(m){return a.has(m)});n.refresh({partialGraph:{nodes:o.nodes()},skipIndexation:!f,schedule:!0})},this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate=function(u){var c,h=(c=u.hints)===null||c===void 0?void 0:c.attributes;n.graph.forEachEdge(function(m){return n.updateEdge(m)});var f=h&&["zIndex","type"].some(function(m){return h==null?void 0:h.includes(m)});n.refresh({partialGraph:{edges:o.edges()},skipIndexation:!f,schedule:!0})},this.activeListeners.addNodeGraphUpdate=function(u){var c=u.key;n.addNode(c),n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.updateNodeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{nodes:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropNodeGraphUpdate=function(u){var c=u.key;n.removeNode(c),n.refresh({schedule:!0})},this.activeListeners.addEdgeGraphUpdate=function(u){var c=u.key;n.addEdge(c),n.refresh({partialGraph:{edges:[c]},schedule:!0})},this.activeListeners.updateEdgeGraphUpdate=function(u){var c=u.key;n.refresh({partialGraph:{edges:[c]},skipIndexation:!1,schedule:!0})},this.activeListeners.dropEdgeGraphUpdate=function(u){var c=u.key;n.removeEdge(c),n.refresh({schedule:!0})},this.activeListeners.clearEdgesGraphUpdate=function(){n.clearEdgeState(),n.clearEdgeIndices(),n.refresh({schedule:!0})},this.activeListeners.clearGraphUpdate=function(){n.clearEdgeState(),n.clearNodeState(),n.clearEdgeIndices(),n.clearNodeIndices(),n.refresh({schedule:!0})},o.on("nodeAdded",this.activeListeners.addNodeGraphUpdate),o.on("nodeDropped",this.activeListeners.dropNodeGraphUpdate),o.on("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),o.on("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),o.on("edgeAdded",this.activeListeners.addEdgeGraphUpdate),o.on("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),o.on("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),o.on("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),o.on("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),o.on("cleared",this.activeListeners.clearGraphUpdate),this}},{key:"unbindGraphHandlers",value:function(){var n=this.graph;n.removeListener("nodeAdded",this.activeListeners.addNodeGraphUpdate),n.removeListener("nodeDropped",this.activeListeners.dropNodeGraphUpdate),n.removeListener("nodeAttributesUpdated",this.activeListeners.updateNodeGraphUpdate),n.removeListener("eachNodeAttributesUpdated",this.activeListeners.eachNodeAttributesUpdatedGraphUpdate),n.removeListener("edgeAdded",this.activeListeners.addEdgeGraphUpdate),n.removeListener("edgeDropped",this.activeListeners.dropEdgeGraphUpdate),n.removeListener("edgeAttributesUpdated",this.activeListeners.updateEdgeGraphUpdate),n.removeListener("eachEdgeAttributesUpdated",this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate),n.removeListener("edgesCleared",this.activeListeners.clearEdgesGraphUpdate),n.removeListener("cleared",this.activeListeners.clearGraphUpdate)}},{key:"getEdgeAtPoint",value:function(n,o){var a=tv(this.webGLContexts.edges,this.frameBuffers.edges,n,o,this.pixelRatio,this.pickingDownSizingRatio),u=ev.apply(void 0,vv(a)),c=this.itemIDsIndex[u];return c&&c.type==="edge"?c.id:null}},{key:"process",value:function(){var n=this;this.emit("beforeProcess");var o=this.graph,a=this.settings,u=this.getDimensions();if(this.nodeExtent=qb(this.graph),!this.settings.autoRescale){var c=u.width,h=u.height,f=this.nodeExtent,m=f.x,g=f.y;this.nodeExtent={x:[(m[0]+m[1])/2-c/2,(m[0]+m[1])/2+c/2],y:[(g[0]+g[1])/2-h/2,(g[0]+g[1])/2+h/2]}}this.normalizationFunction=pv(this.customBBox||this.nodeExtent);var v=new gv,x=ha(v.getState(),u,this.getGraphDimensions(),this.getStagePadding());this.labelGrid.resizeAndClear(u,a.labelGridCellSize);for(var E={},M={},S={},y={},N=1,P=o.nodes(),w=0,I=P.length;w<I;w++){var b=P[w],D=this.nodeDataCache[b],k=o.getNodeAttributes(b);D.x=k.x,D.y=k.y,this.normalizationFunction.applyTo(D),typeof D.label=="string"&&!D.hidden&&this.labelGrid.add(b,D.size,this.framedGraphToViewport(D,{matrix:x})),E[D.type]=(E[D.type]||0)+1}this.labelGrid.organize();for(var C in this.nodePrograms){if(!nr.call(this.nodePrograms,C))throw new Error('Sigma: could not find a suitable program for node type "'.concat(C,'"!'));this.nodePrograms[C].reallocate(E[C]||0),E[C]=0}this.settings.zIndex&&this.nodeZExtent[0]!==this.nodeZExtent[1]&&(P=fv(this.nodeZExtent,function(ve){return n.nodeDataCache[ve].zIndex},P));for(var T=0,z=P.length;T<z;T++){var te=P[T];M[te]=N,y[M[te]]={type:"node",id:te},N++;var Y=this.nodeDataCache[te];this.addNodeToProgram(te,M[te],E[Y.type]++)}for(var Z={},de=o.edges(),q=0,he=de.length;q<he;q++){var V=de[q],ce=this.edgeDataCache[V];Z[ce.type]=(Z[ce.type]||0)+1}this.settings.zIndex&&this.edgeZExtent[0]!==this.edgeZExtent[1]&&(de=fv(this.edgeZExtent,function(ve){return n.edgeDataCache[ve].zIndex},de));for(var le in this.edgePrograms){if(!nr.call(this.edgePrograms,le))throw new Error('Sigma: could not find a suitable program for edge type "'.concat(le,'"!'));this.edgePrograms[le].reallocate(Z[le]||0),Z[le]=0}for(var O=0,re=de.length;O<re;O++){var De=de[O];S[De]=N,y[S[De]]={type:"edge",id:De},N++;var ne=this.edgeDataCache[De];this.addEdgeToProgram(De,S[De],Z[ne.type]++)}return this.itemIDsIndex=y,this.nodeIndices=M,this.edgeIndices=S,this.emit("afterProcess"),this}},{key:"handleSettingsUpdate",value:function(n){var o=this,a=this.settings;if(this.camera.minRatio=a.minCameraRatio,this.camera.maxRatio=a.maxCameraRatio,this.camera.enabledZooming=a.enableCameraZooming,this.camera.enabledPanning=a.enableCameraPanning,this.camera.enabledRotation=a.enableCameraRotation,a.cameraPanBoundaries?this.camera.clean=function(m){return o.cleanCameraState(m,a.cameraPanBoundaries&&Kh(a.cameraPanBoundaries)==="object"?a.cameraPanBoundaries:{})}:this.camera.clean=null,this.camera.setState(this.camera.validateState(this.camera.getState())),n){if(n.edgeProgramClasses!==a.edgeProgramClasses){for(var u in a.edgeProgramClasses)a.edgeProgramClasses[u]!==n.edgeProgramClasses[u]&&this.registerEdgeProgram(u,a.edgeProgramClasses[u]);for(var c in n.edgeProgramClasses)a.edgeProgramClasses[c]||this.unregisterEdgeProgram(c)}if(n.nodeProgramClasses!==a.nodeProgramClasses||n.nodeHoverProgramClasses!==a.nodeHoverProgramClasses){for(var h in a.nodeProgramClasses)(a.nodeProgramClasses[h]!==n.nodeProgramClasses[h]||a.nodeHoverProgramClasses[h]!==n.nodeHoverProgramClasses[h])&&this.registerNodeProgram(h,a.nodeProgramClasses[h],a.nodeHoverProgramClasses[h]);for(var f in n.nodeProgramClasses)a.nodeProgramClasses[f]||this.unregisterNodeProgram(f)}}return this.mouseCaptor.setSettings(this.settings),this.touchCaptor.setSettings(this.settings),this}},{key:"cleanCameraState",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.tolerance,u=a===void 0?0:a,c=o.boundaries,h=Ze({},n),f=c||this.nodeExtent,m=_o(f.x,2),g=m[0],v=m[1],x=_o(f.y,2),E=x[0],M=x[1],S=[this.graphToViewport({x:g,y:E},{cameraState:n}),this.graphToViewport({x:v,y:E},{cameraState:n}),this.graphToViewport({x:g,y:M},{cameraState:n}),this.graphToViewport({x:v,y:M},{cameraState:n})],y=1/0,N=-1/0,P=1/0,w=-1/0;S.forEach(function(Z){var de=Z.x,q=Z.y;y=Math.min(y,de),N=Math.max(N,de),P=Math.min(P,q),w=Math.max(w,q)});var I=N-y,b=w-P,D=this.getDimensions(),k=D.width,C=D.height,T=0,z=0;if(I>=k?N<k-u?T=N-(k-u):y>u&&(T=y-u):N>k+u?T=N-(k+u):y<-u&&(T=y+u),b>=C?w<C-u?z=w-(C-u):P>u&&(z=P-u):w>C+u?z=w-(C+u):P<-u&&(z=P+u),T||z){var te=this.viewportToFramedGraph({x:0,y:0},{cameraState:n}),Y=this.viewportToFramedGraph({x:T,y:z},{cameraState:n});T=Y.x-te.x,z=Y.y-te.y,h.x+=T,h.y+=z}return h}},{key:"renderLabels",value:function(){if(!this.settings.renderLabels)return this;var n=this.camera.getState(),o=this.labelGrid.getLabelsToDisplay(n.ratio,this.settings.labelDensity);mv(o,this.nodesWithForcedLabels),this.displayedNodeLabels=new Set;for(var a=this.canvasContexts.labels,u=0,c=o.length;u<c;u++){var h=o[u],f=this.nodeDataCache[h];if(!this.displayedNodeLabels.has(h)&&!f.hidden){var m=this.framedGraphToViewport(f),g=m.x,v=m.y,x=this.scaleSize(f.size);if(!(!f.forceLabel&&x<this.settings.labelRenderedSizeThreshold)&&!(g<-xv||g>this.width+xv||v<-Sv||v>this.height+Sv)){this.displayedNodeLabels.add(h);var E=this.settings.defaultDrawNodeLabel,M=this.nodePrograms[f.type],S=(M==null?void 0:M.drawLabel)||E;S(a,Ze(Ze({key:h},f),{},{size:x,x:g,y:v}),this.settings)}}}return this}},{key:"renderEdgeLabels",value:function(){if(!this.settings.renderEdgeLabels)return this;var n=this.canvasContexts.edgeLabels;n.clearRect(0,0,this.width,this.height);var o=fR({graph:this.graph,hoveredNode:this.hoveredNode,displayedNodeLabels:this.displayedNodeLabels,highlightedNodes:this.highlightedNodes});mv(o,this.edgesWithForcedLabels);for(var a=new Set,u=0,c=o.length;u<c;u++){var h=o[u],f=this.graph.extremities(h),m=this.nodeDataCache[f[0]],g=this.nodeDataCache[f[1]],v=this.edgeDataCache[h];if(!a.has(h)&&!(v.hidden||m.hidden||g.hidden)){var x=this.settings.defaultDrawEdgeLabel,E=this.edgePrograms[v.type],M=(E==null?void 0:E.drawLabel)||x;M(n,Ze(Ze({key:h},v),{},{size:this.scaleSize(v.size)}),Ze(Ze(Ze({key:f[0]},m),this.framedGraphToViewport(m)),{},{size:this.scaleSize(m.size)}),Ze(Ze(Ze({key:f[1]},g),this.framedGraphToViewport(g)),{},{size:this.scaleSize(g.size)}),this.settings),a.add(h)}}return this.displayedEdgeLabels=a,this}},{key:"renderHighlightedNodes",value:function(){var n=this,o=this.canvasContexts.hovers;o.clearRect(0,0,this.width,this.height);var a=function(x){var E=n.nodeDataCache[x],M=n.framedGraphToViewport(E),S=M.x,y=M.y,N=n.scaleSize(E.size),P=n.settings.defaultDrawNodeHover,w=n.nodePrograms[E.type],I=(w==null?void 0:w.drawHover)||P;I(o,Ze(Ze({key:x},E),{},{size:N,x:S,y}),n.settings)},u=[];this.hoveredNode&&!this.nodeDataCache[this.hoveredNode].hidden&&u.push(this.hoveredNode),this.highlightedNodes.forEach(function(v){v!==n.hoveredNode&&u.push(v)}),u.forEach(function(v){return a(v)});var c={};u.forEach(function(v){var x=n.nodeDataCache[v].type;c[x]=(c[x]||0)+1});for(var h in this.nodeHoverPrograms)this.nodeHoverPrograms[h].reallocate(c[h]||0),c[h]=0;u.forEach(function(v){var x=n.nodeDataCache[v];n.nodeHoverPrograms[x.type].process(0,c[x.type]++,x)}),this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);var f=this.getRenderParams();for(var m in this.nodeHoverPrograms){var g=this.nodeHoverPrograms[m];g.render(f)}}},{key:"scheduleHighlightedNodesRender",value:function(){var n=this;this.renderHighlightedNodesFrame||this.renderFrame||(this.renderHighlightedNodesFrame=requestAnimationFrame(function(){n.renderHighlightedNodesFrame=null,n.renderHighlightedNodes(),n.renderEdgeLabels()}))}},{key:"render",value:function(){var n=this;this.emit("beforeRender");var o=function(){return n.emit("afterRender"),n};if(this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.resize(),this.needToProcess&&this.process(),this.needToProcess=!1,this.clear(),this.pickingLayers.forEach(function(S){return n.resetWebGLTexture(S)}),!this.graph.order)return o();var a=this.mouseCaptor,u=this.camera.isAnimated()||a.isMoving||a.draggedEvents||a.currentWheelDirection,c=this.camera.getState(),h=this.getDimensions(),f=this.getGraphDimensions(),m=this.getStagePadding();this.matrix=ha(c,h,f,m),this.invMatrix=ha(c,h,f,m,!0),this.correctionRatio=Yb(this.matrix,c,h),this.graphToViewportRatio=this.getGraphToViewportRatio();var g=this.getRenderParams();for(var v in this.nodePrograms){var x=this.nodePrograms[v];x.render(g)}if(!this.settings.hideEdgesOnMove||!u)for(var E in this.edgePrograms){var M=this.edgePrograms[E];M.render(g)}return this.settings.hideLabelsOnMove&&u||(this.renderLabels(),this.renderEdgeLabels(),this.renderHighlightedNodes()),o()}},{key:"addNode",value:function(n){var o=Object.assign({},this.graph.getNodeAttributes(n));this.settings.nodeReducer&&(o=this.settings.nodeReducer(n,o));var a=pR(this.settings,n,o);this.nodeDataCache[n]=a,this.nodesWithForcedLabels.delete(n),a.forceLabel&&!a.hidden&&this.nodesWithForcedLabels.add(n),this.highlightedNodes.delete(n),a.highlighted&&!a.hidden&&this.highlightedNodes.add(n),this.settings.zIndex&&(a.zIndex<this.nodeZExtent[0]&&(this.nodeZExtent[0]=a.zIndex),a.zIndex>this.nodeZExtent[1]&&(this.nodeZExtent[1]=a.zIndex))}},{key:"updateNode",value:function(n){this.addNode(n);var o=this.nodeDataCache[n];this.normalizationFunction.applyTo(o)}},{key:"removeNode",value:function(n){delete this.nodeDataCache[n],delete this.nodeProgramIndex[n],this.highlightedNodes.delete(n),this.hoveredNode===n&&(this.hoveredNode=null),this.nodesWithForcedLabels.delete(n)}},{key:"addEdge",value:function(n){var o=Object.assign({},this.graph.getEdgeAttributes(n));this.settings.edgeReducer&&(o=this.settings.edgeReducer(n,o));var a=mR(this.settings,n,o);this.edgeDataCache[n]=a,this.edgesWithForcedLabels.delete(n),a.forceLabel&&!a.hidden&&this.edgesWithForcedLabels.add(n),this.settings.zIndex&&(a.zIndex<this.edgeZExtent[0]&&(this.edgeZExtent[0]=a.zIndex),a.zIndex>this.edgeZExtent[1]&&(this.edgeZExtent[1]=a.zIndex))}},{key:"updateEdge",value:function(n){this.addEdge(n)}},{key:"removeEdge",value:function(n){delete this.edgeDataCache[n],delete this.edgeProgramIndex[n],this.hoveredEdge===n&&(this.hoveredEdge=null),this.edgesWithForcedLabels.delete(n)}},{key:"clearNodeIndices",value:function(){this.labelGrid=new yv,this.nodeExtent={x:[0,1],y:[0,1]},this.nodeDataCache={},this.edgeProgramIndex={},this.nodesWithForcedLabels=new Set,this.nodeZExtent=[1/0,-1/0],this.highlightedNodes=new Set}},{key:"clearEdgeIndices",value:function(){this.edgeDataCache={},this.edgeProgramIndex={},this.edgesWithForcedLabels=new Set,this.edgeZExtent=[1/0,-1/0]}},{key:"clearIndices",value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:"clearNodeState",value:function(){this.displayedNodeLabels=new Set,this.highlightedNodes=new Set,this.hoveredNode=null}},{key:"clearEdgeState",value:function(){this.displayedEdgeLabels=new Set,this.highlightedNodes=new Set,this.hoveredEdge=null}},{key:"clearState",value:function(){this.clearEdgeState(),this.clearNodeState()}},{key:"addNodeToProgram",value:function(n,o,a){var u=this.nodeDataCache[n],c=this.nodePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for node type "'.concat(u.type,'"!'));c.process(o,a,u),this.nodeProgramIndex[n]=a}},{key:"addEdgeToProgram",value:function(n,o,a){var u=this.edgeDataCache[n],c=this.edgePrograms[u.type];if(!c)throw new Error('Sigma: could not find a suitable program for edge type "'.concat(u.type,'"!'));var h=this.graph.extremities(n),f=this.nodeDataCache[h[0]],m=this.nodeDataCache[h[1]];c.process(o,a,f,m,u),this.edgeProgramIndex[n]=a}},{key:"getRenderParams",value:function(){return{matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.pickingDownSizingRatio,minEdgeThickness:this.settings.minEdgeThickness,antiAliasingFeather:this.settings.antiAliasingFeather}}},{key:"getStagePadding",value:function(){var n=this.settings,o=n.stagePadding,a=n.autoRescale;return a&&o||0}},{key:"createLayer",value:function(n,o){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.elements[n])throw new Error('Sigma: a layer named "'.concat(n,'" already exists'));var u=Zb(o,{position:"absolute"},{class:"sigma-".concat(n)});return a.style&&Object.assign(u.style,a.style),this.elements[n]=u,"beforeLayer"in a&&a.beforeLayer?this.elements[a.beforeLayer].before(u):"afterLayer"in a&&a.afterLayer?this.elements[a.afterLayer].after(u):this.container.appendChild(u),u}},{key:"createCanvas",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(n,"canvas",o)}},{key:"createCanvasContext",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.createCanvas(n,o),u={preserveDrawingBuffer:!1,antialias:!1};return this.canvasContexts[n]=a.getContext("2d",u),this}},{key:"createWebGLContext",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(o==null?void 0:o.canvas)||this.createCanvas(n,o);o.hidden&&a.remove();var u=Ze({preserveDrawingBuffer:!1,antialias:!1},o),c;c=a.getContext("webgl2",u),c||(c=a.getContext("webgl",u)),c||(c=a.getContext("experimental-webgl",u));var h=c;if(this.webGLContexts[n]=h,h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA),o.picking){this.pickingLayers.add(n);var f=h.createFramebuffer();if(!f)throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(n));this.frameBuffers[n]=f}return h}},{key:"killLayer",value:function(n){var o=this.elements[n];if(!o)throw new Error("Sigma: cannot kill layer ".concat(n,", which does not exist"));if(this.webGLContexts[n]){var a,u=this.webGLContexts[n];(a=u.getExtension("WEBGL_lose_context"))===null||a===void 0||a.loseContext(),delete this.webGLContexts[n]}else this.canvasContexts[n]&&delete this.canvasContexts[n];return o.remove(),delete this.elements[n],this}},{key:"getCamera",value:function(){return this.camera}},{key:"setCamera",value:function(n){this.unbindCameraHandlers(),this.camera=n,this.bindCameraHandlers()}},{key:"getContainer",value:function(){return this.container}},{key:"getGraph",value:function(){return this.graph}},{key:"setGraph",value:function(n){n!==this.graph&&(this.hoveredNode&&!n.hasNode(this.hoveredNode)&&(this.hoveredNode=null),this.hoveredEdge&&!n.hasEdge(this.hoveredEdge)&&(this.hoveredEdge=null),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.graph=n,this.bindGraphHandlers(),this.refresh())}},{key:"getMouseCaptor",value:function(){return this.mouseCaptor}},{key:"getTouchCaptor",value:function(){return this.touchCaptor}},{key:"getDimensions",value:function(){return{width:this.width,height:this.height}}},{key:"getGraphDimensions",value:function(){var n=this.customBBox||this.nodeExtent;return{width:n.x[1]-n.x[0]||1,height:n.y[1]-n.y[0]||1}}},{key:"getNodeDisplayData",value:function(n){var o=this.nodeDataCache[n];return o?Object.assign({},o):void 0}},{key:"getEdgeDisplayData",value:function(n){var o=this.edgeDataCache[n];return o?Object.assign({},o):void 0}},{key:"getNodeDisplayedLabels",value:function(){return new Set(this.displayedNodeLabels)}},{key:"getEdgeDisplayedLabels",value:function(){return new Set(this.displayedEdgeLabels)}},{key:"getSettings",value:function(){return Ze({},this.settings)}},{key:"getSetting",value:function(n){return this.settings[n]}},{key:"setSetting",value:function(n,o){var a=Ze({},this.settings);return this.settings[n]=o,th(this.settings),this.handleSettingsUpdate(a),this.scheduleRefresh(),this}},{key:"updateSetting",value:function(n,o){return this.setSetting(n,o(this.settings[n])),this}},{key:"setSettings",value:function(n){var o=Ze({},this.settings);return this.settings=Ze(Ze({},this.settings),n),th(this.settings),this.handleSettingsUpdate(o),this.scheduleRefresh(),this}},{key:"resize",value:function(n){var o=this.width,a=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.pixelRatio=hv(),this.width===0)if(this.settings.allowInvalidContainer)this.width=1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(this.height===0)if(this.settings.allowInvalidContainer)this.height=1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");if(!n&&o===this.width&&a===this.height)return this;for(var u in this.elements){var c=this.elements[u];c.style.width=this.width+"px",c.style.height=this.height+"px"}for(var h in this.canvasContexts)this.elements[h].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[h].setAttribute("height",this.height*this.pixelRatio+"px"),this.pixelRatio!==1&&this.canvasContexts[h].scale(this.pixelRatio,this.pixelRatio);for(var f in this.webGLContexts){this.elements[f].setAttribute("width",this.width*this.pixelRatio+"px"),this.elements[f].setAttribute("height",this.height*this.pixelRatio+"px");var m=this.webGLContexts[f];if(m.viewport(0,0,this.width*this.pixelRatio,this.height*this.pixelRatio),this.pickingLayers.has(f)){var g=this.textures[f];g&&m.deleteTexture(g)}}return this.emit("resize"),this}},{key:"clear",value:function(){return this.emit("beforeClear"),this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.canvasContexts.labels.clearRect(0,0,this.width,this.height),this.canvasContexts.hovers.clearRect(0,0,this.width,this.height),this.canvasContexts.edgeLabels.clearRect(0,0,this.width,this.height),this.emit("afterClear"),this}},{key:"refresh",value:function(n){var o=this,a=(n==null?void 0:n.skipIndexation)!==void 0?n==null?void 0:n.skipIndexation:!1,u=(n==null?void 0:n.schedule)!==void 0?n.schedule:!1,c=!n||!n.partialGraph;if(c)this.clearEdgeIndices(),this.clearNodeIndices(),this.graph.forEachNode(function(w){return o.addNode(w)}),this.graph.forEachEdge(function(w){return o.addEdge(w)});else{for(var h,f,m=((h=n.partialGraph)===null||h===void 0?void 0:h.nodes)||[],g=0,v=(m==null?void 0:m.length)||0;g<v;g++){var x=m[g];if(this.updateNode(x),a){var E=this.nodeProgramIndex[x];if(E===void 0)throw new Error('Sigma: node "'.concat(x,`" can't be repaint`));this.addNodeToProgram(x,this.nodeIndices[x],E)}}for(var M=(n==null||(f=n.partialGraph)===null||f===void 0?void 0:f.edges)||[],S=0,y=M.length;S<y;S++){var N=M[S];if(this.updateEdge(N),a){var P=this.edgeProgramIndex[N];if(P===void 0)throw new Error('Sigma: edge "'.concat(N,`" can't be repaint`));this.addEdgeToProgram(N,this.edgeIndices[N],P)}}}return(c||!a)&&(this.needToProcess=!0),u?this.scheduleRender():this.render(),this}},{key:"scheduleRender",value:function(){var n=this;return this.renderFrame||(this.renderFrame=requestAnimationFrame(function(){n.render()})),this}},{key:"scheduleRefresh",value:function(n){return this.refresh(Ze(Ze({},n),{},{schedule:!0}))}},{key:"getViewportZoomedState",value:function(n,o){var a=this.camera.getState(),u=a.ratio,c=a.angle,h=a.x,f=a.y,m=this.settings,g=m.minCameraRatio,v=m.maxCameraRatio;typeof v=="number"&&(o=Math.min(o,v)),typeof g=="number"&&(o=Math.max(o,g));var x=o/u,E={x:this.width/2,y:this.height/2},M=this.viewportToFramedGraph(n),S=this.viewportToFramedGraph(E);return{angle:c,x:(M.x-S.x)*(1-x)+h,y:(M.y-S.y)*(1-x)+f,ratio:o}}},{key:"viewRectangle",value:function(){var n=this.viewportToFramedGraph({x:0,y:0}),o=this.viewportToFramedGraph({x:this.width,y:0}),a=this.viewportToFramedGraph({x:0,y:this.height});return{x1:n.x,y1:n.y,x2:o.x,y2:o.y,height:o.y-a.y}}},{key:"framedGraphToViewport",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=!!o.cameraState||!!o.viewportDimensions||!!o.graphDimensions,u=o.matrix?o.matrix:a?ha(o.cameraState||this.camera.getState(),o.viewportDimensions||this.getDimensions(),o.graphDimensions||this.getGraphDimensions(),o.padding||this.getStagePadding()):this.matrix,c=qh(u,n);return{x:(1+c.x)*this.width/2,y:(1-c.y)*this.height/2}}},{key:"viewportToFramedGraph",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=!!o.cameraState||!!o.viewportDimensions||!o.graphDimensions,u=o.matrix?o.matrix:a?ha(o.cameraState||this.camera.getState(),o.viewportDimensions||this.getDimensions(),o.graphDimensions||this.getGraphDimensions(),o.padding||this.getStagePadding(),!0):this.invMatrix,c=qh(u,{x:n.x/this.width*2-1,y:1-n.y/this.height*2});return isNaN(c.x)&&(c.x=0),isNaN(c.y)&&(c.y=0),c}},{key:"viewportToGraph",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(n,o))}},{key:"graphToViewport",value:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(n),o)}},{key:"getGraphToViewportRatio",value:function(){var n={x:0,y:0},o={x:1,y:1},a=Math.sqrt(Math.pow(n.x-o.x,2)+Math.pow(n.y-o.y,2)),u=this.graphToViewport(n),c=this.graphToViewport(o),h=Math.sqrt(Math.pow(u.x-c.x,2)+Math.pow(u.y-c.y,2));return h/a}},{key:"getBBox",value:function(){return this.nodeExtent}},{key:"getCustomBBox",value:function(){return this.customBBox}},{key:"setCustomBBox",value:function(n){return this.customBBox=n,this.scheduleRender(),this}},{key:"kill",value:function(){this.emit("kill"),this.removeAllListeners(),this.unbindCameraHandlers(),window.removeEventListener("resize",this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.nodeDataCache={},this.edgeDataCache={},this.highlightedNodes.clear(),this.renderFrame&&(cancelAnimationFrame(this.renderFrame),this.renderFrame=null),this.renderHighlightedNodesFrame&&(cancelAnimationFrame(this.renderHighlightedNodesFrame),this.renderHighlightedNodesFrame=null);for(var n=this.container;n.firstChild;)n.removeChild(n.firstChild);for(var o in this.nodePrograms)this.nodePrograms[o].kill();for(var a in this.nodeHoverPrograms)this.nodeHoverPrograms[a].kill();for(var u in this.edgePrograms)this.edgePrograms[u].kill();this.nodePrograms={},this.nodeHoverPrograms={},this.edgePrograms={};for(var c in this.elements)this.killLayer(c);this.canvasContexts={},this.webGLContexts={},this.elements={}}},{key:"scaleSize",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return n/this.settings.zoomToSizeRatioFunction(o)*(this.getSetting("itemSizesReference")==="positions"?o*this.graphToViewportRatio:1)}},{key:"getCanvases",value:function(){var n={};for(var o in this.elements)this.elements[o]instanceof HTMLCanvasElement&&(n[o]=this.elements[o]);return n}}])})(gf),vR=gR;const Ev=["#e8aa55","#c96f32","#a4d06f","#5da271","#4a7ea8","#b7678f","#d7c35f"];function _R(r){let e=0;for(const t of r)e=e*33+t.charCodeAt(0)>>>0;return Ev[e%Ev.length]}function yR({payload:r,mode:e,currentTurnNodeIds:t,selectedNodeId:n,selectedAssembly:o,onSelectNode:a}){const u=Ct.useRef(null),c=Ct.useRef(null),h=Ct.useMemo(()=>{var m;const f=new Map;for(const g of r.cluster_summaries??[]){const v=(m=g.top_meme_ids)==null?void 0:m[0];v&&f.set(v,g.display_label)}return f},[r.cluster_summaries]);return Ct.useEffect(()=>{var y,N;if(!u.current)return;const f=new Ft,m=new Set(t),g=new Set((o==null?void 0:o.member_meme_ids)??[]),v=new Set((o==null?void 0:o.supporting_edge_ids)??[]),x=e==="Semantic Map"||e==="Assemblies"||e==="Active Set"||e==="Compare",E=x?r.semantic_nodes:r.runtime_nodes,M=x?r.semantic_edges:r.runtime_edges;for(const P of E){const w=((y=P.render_coords)==null?void 0:y.force)??((N=P.derived_coords)==null?void 0:N.spectral)??{x:0,y:0},I=m.has(P.id)||n===P.id||g.has(P.id),b=h.has(P.id),D=Number(P.degree??0)>=3;let k="";e==="Semantic Map"&&b&&(k=h.get(P.id)??""),!k&&(I||D)&&(k=String(P.label??P.id)),f.addNode(P.id,{x:Number(w.x??0),y:Number(w.y??0),size:I?10:6,label:k,color:g.has(P.id)?"#fff0a8":m.has(P.id)?"#ffcb73":_R(String(P.cluster_signature??P.kind??P.id))})}for(const P of M)!f.hasNode(P.source)||!f.hasNode(P.target)||f.addEdge(P.source,P.target,{size:v.has(P.id)?2.5:1.1,color:v.has(P.id)?"#fff0a8":"rgba(233, 177, 90, 0.38)",label:o&&v.has(P.id)?String(P.type??""):""});const S=new vR(f,u.current,{renderEdgeLabels:!!o,labelRenderedSizeThreshold:7,labelDensity:.08,allowInvalidContainer:!0});return c.current=S,S.on("clickNode",({node:P,event:w})=>{var b;const I=!!((b=w.original)!=null&&b.shiftKey);a(String(P),I)}),S.on("clickStage",()=>a("",!1)),S.getCamera().animatedReset({duration:250}),()=>{S.kill(),c.current=null}},[r,e,t,n,o,a,h]),me.jsx("div",{className:"graph-panel",ref:u})}const Mv=["overview","graph","basin","geometry","measurements"],wv="Semantic Map",Tv="hulls",xR="flat",SR=["overview","measurements","basin"],k_=["overview","measurements","basin","graph","geometry","transcript","runtimeStatus","runtimeModel"],ER={graph:null,basin:null,overview:null,measurements:null,geometry:null,transcript:null,runtimeStatus:null,runtimeModel:null,liveEnabled:!1,staleBuildWarning:null},Zh={overview:{label:"Overview",detail:"Index summary and artifact counts",status:"idle",source:"none"},measurements:{label:"Measurements",detail:"Measurement ledger and attribution counts",status:"idle",source:"none"},basin:{label:"Basin",detail:"Trajectory summary and attractor metadata",status:"idle",source:"none"},graph:{label:"Graph",detail:"Large semantic graph bundle",status:"idle",source:"none"},geometry:{label:"Geometry",detail:"Large diagnostics bundle",status:"idle",source:"none"},transcript:{label:"Transcript",detail:"Turn history and active-set cross-links",status:"idle",source:"none"},runtimeStatus:{label:"Runtime status",detail:"Live backend status",status:"idle",source:"none"},runtimeModel:{label:"Runtime model",detail:"Live model metadata",status:"idle",source:"none"}};function MR(r){return r==="overview"?"Overview":r==="graph"?"Graph":r==="basin"?"Basin":r==="geometry"?"Geometry":"Measurements"}async function Ii(r){const e=await fetch(r,{credentials:"same-origin"});if(!e.ok)throw new Error(`${e.status} ${e.statusText} for ${r}`);return await e.json()}function wR(r,e,t){var o,a,u;if(!t||!((o=e==null?void 0:e.turns)!=null&&o.length))return((u=(a=r==null?void 0:r.active_set_slices)==null?void 0:a.at(-1))==null?void 0:u.node_ids)??[];const n=e.turns.find(c=>c.turn_id===t);return(n==null?void 0:n.active_set_node_ids)??[]}function TR({bootstrap:r,graph:e,surface:t}){const n=r.experiment_id??"unknown",o=r.export_manifest_id??(e==null?void 0:e.export_manifest_id)??r.source_graph_hash??(e==null?void 0:e.source_graph_hash)??"live";return`eden.observatory.view_presets.v1::${n}::${t}::${o}`}function oo(r){return`badge badge-${r}`}function Zn({items:r}){return me.jsx("dl",{className:"metric-list",children:r.map(([e,t])=>me.jsxs("div",{className:"metric-row",children:[me.jsx("dt",{children:e}),me.jsx("dd",{children:AR(t)})]},e))})}function AR(r){return r==null||r===""?"—":Array.isArray(r)?r.join(", "):typeof r=="object"?JSON.stringify(r):String(r)}function bR(r,e){const t=structuredClone(Zh);for(const n of k_)r[n]&&(t[n].source=e?"live_api":"static_export",t[n].status=SR.includes(n)?"loading":n==="geometry"?"deferred":"idle");return t}function RR(r){return`payload-chip payload-${r}`}function Av(r){return r==="live_api"?"live API":r==="static_export"?"static export":"unavailable"}function Nn({title:r,children:e}){return me.jsxs("section",{className:"inspector-card",children:[me.jsx("h3",{children:r}),e]})}function CR({bootstrap:r}){const e=Mv.includes(r.initial_surface??"overview")?r.initial_surface:"overview",[t,n]=Ct.useState(e),[o,a]=Ct.useState(wv),[u,c]=Ct.useState(Tv),[h,f]=Ct.useState(xR),[m,g]=Ct.useState("cards"),[v,x]=Ct.useState([]),[E,M]=Ct.useState(null),[S,y]=Ct.useState(null),[N,P]=Ct.useState(!0),[w,I]=Ct.useState(null),[b,D]=Ct.useState(ER),[k,C]=Ct.useState(null),[T,z]=Ct.useState(Zh),te=Ct.useMemo(()=>TR({bootstrap:r,graph:b.graph,surface:t}),[r,b.graph,t]),Y=v[0]??null,Z=Ct.useMemo(()=>{var G,ie;return((ie=(G=b.graph)==null?void 0:G.assemblies)==null?void 0:ie.find(pe=>pe.id===E))??null},[b.graph,E]),de=Ct.useMemo(()=>{var ie,pe,_e;return[...((ie=b.graph)==null?void 0:ie.semantic_nodes)??[],...((pe=b.graph)==null?void 0:pe.runtime_nodes)??[],...((_e=b.graph)==null?void 0:_e.assemblies)??[]].find(Ae=>Ae.id===Y)??null},[b.graph,Y]),q=Ct.useMemo(()=>{var ie,pe,_e,Ae;const G=(pe=(ie=b.basin)==null?void 0:ie.turns)==null?void 0:pe.find(yt=>yt.turn_id===S);return G||(((Ae=(_e=b.transcript)==null?void 0:_e.turns)==null?void 0:Ae[0])??null)},[b.basin,b.transcript,S]),he=Ct.useMemo(()=>wR(b.graph,b.transcript,(q==null?void 0:q.turn_id)??null),[b.graph,b.transcript,q]);Ct.useEffect(()=>{try{const G=window.localStorage.getItem(te);if(!G)return;const ie=JSON.parse(G);ie.graphMode&&a(ie.graphMode),ie.assemblyRenderMode&&c(ie.assemblyRenderMode),ie.liftMode&&f(ie.liftMode)}catch{}},[te]),Ct.useEffect(()=>{const G=JSON.stringify({graphMode:o,assemblyRenderMode:u,liftMode:h});window.localStorage.setItem(te,G)},[u,o,h,te]),Ct.useEffect(()=>{let G=!1;async function ie(){var pe,_e,Ae,yt,St,at,B,Ht,ht,dt,Ke,wt,We,U,R,J;P(!0),I(null),z(Zh);try{const ge=(pe=r.live_api)==null?void 0:pe.status;let xe=!1,fe=null;if(ge)try{const Ce=await Ii(ge);xe=!0,(Ae=(_e=Ce.status)==null?void 0:_e.frontend_build)!=null&&Ae.warning&&(fe=Ce.status.frontend_build.reason??"stale frontend build")}catch{xe=!1}const $e=xe?{graph:(yt=r.live_api)==null?void 0:yt.graph,basin:(St=r.live_api)==null?void 0:St.basin,overview:(at=r.live_api)==null?void 0:at.overview,measurements:(B=r.live_api)==null?void 0:B.measurements,geometry:(Ht=r.live_api)==null?void 0:Ht.geometry,transcript:(ht=r.live_api)==null?void 0:ht.session_turns,runtimeStatus:(dt=r.live_api)==null?void 0:dt.runtime_status,runtimeModel:(Ke=r.live_api)==null?void 0:Ke.runtime_model}:{graph:(wt=r.payload_urls)==null?void 0:wt.graph,basin:(We=r.payload_urls)==null?void 0:We.basin,overview:(U=r.payload_urls)==null?void 0:U.overview,measurements:(R=r.payload_urls)==null?void 0:R.measurements,geometry:(J=r.payload_urls)==null?void 0:J.geometry,transcript:void 0,runtimeStatus:void 0,runtimeModel:void 0},Re={...$e,liveEnabled:xe,staleBuildWarning:fe};G||(C(Re),z(bR($e,xe)),D(Ce=>({...Ce,liveEnabled:xe,staleBuildWarning:fe})));const Qe=async(Ce,Be,tt)=>{if(G)return null;z(Ne=>({...Ne,[Ce]:{...Ne[Ce],status:"loading",error:void 0}}));try{const Ne=await Ii(Be);return G?null:(Ct.startTransition(()=>{tt(Ne)}),z(pt=>({...pt,[Ce]:{...pt[Ce],status:"ready"}})),Ne)}catch(Ne){if(G)return null;const pt=Ne instanceof Error?Ne.message:`Failed to load ${Ce}.`;throw z(ut=>({...ut,[Ce]:{...ut[Ce],status:"error",error:pt}})),Ne}},et=[];Re.overview&&et.push(Qe("overview",Re.overview,Ce=>D(Be=>({...Be,overview:Ce})))),Re.measurements&&et.push(Qe("measurements",Re.measurements,Ce=>D(Be=>({...Be,measurements:Ce})))),Re.basin&&et.push(Qe("basin",Re.basin,Ce=>{var tt;const Be=Ce;D(Ne=>({...Ne,basin:Be})),!S&&((tt=Be.turns)!=null&&tt.length)&&y(Be.turns[0].turn_id)})),await Promise.allSettled(et),G||P(!1);const Ee=[];Re.graph&&Ee.push(Qe("graph",Re.graph,Ce=>{var tt;const Be=Ce;D(Ne=>({...Ne,graph:Be})),!E&&((tt=Be.assemblies)!=null&&tt.length)&&M(Be.assemblies[0].id)})),Re.transcript&&Ee.push(Qe("transcript",Re.transcript,Ce=>D(Be=>({...Be,transcript:Ce})))),Re.runtimeStatus&&Ee.push(Qe("runtimeStatus",Re.runtimeStatus,Ce=>D(Be=>({...Be,runtimeStatus:Ce})))),Re.runtimeModel&&Ee.push(Qe("runtimeModel",Re.runtimeModel,Ce=>D(Be=>({...Be,runtimeModel:Ce})))),Promise.allSettled(Ee)}catch(ge){G||(I(ge instanceof Error?ge.message:"Failed to load observatory payloads."),P(!1))}}return ie(),()=>{G=!0}},[r]),Ct.useEffect(()=>{var pe;if(!b.liveEnabled||!((pe=r.live_api)!=null&&pe.events))return;const G=new URL(r.live_api.events,window.location.href);r.session_id&&G.searchParams.set("session_id",r.session_id);const ie=new EventSource(G.toString());return ie.addEventListener("observatory.invalidate",()=>{Ct.startTransition(()=>{D(_e=>({..._e}))})}),ie.addEventListener("observatory.invalidate",async()=>{var _e,Ae,yt,St,at,B,Ht;try{const[ht,dt,Ke,wt,We,U,R]=await Promise.all([(_e=r.live_api)!=null&&_e.graph?Ii(r.live_api.graph):Promise.resolve(null),(Ae=r.live_api)!=null&&Ae.basin?Ii(r.live_api.basin):Promise.resolve(null),(yt=r.live_api)!=null&&yt.overview?Ii(r.live_api.overview):Promise.resolve(null),(St=r.live_api)!=null&&St.measurements?Ii(r.live_api.measurements):Promise.resolve(null),(at=r.live_api)!=null&&at.session_turns?Ii(r.live_api.session_turns):Promise.resolve(null),(B=r.live_api)!=null&&B.runtime_status?Ii(r.live_api.runtime_status):Promise.resolve(null),(Ht=r.live_api)!=null&&Ht.runtime_model?Ii(r.live_api.runtime_model):Promise.resolve(null)]);D(J=>({...J,graph:ht,basin:dt,overview:Ke,measurements:wt,transcript:We,runtimeStatus:U,runtimeModel:R}))}catch{}}),()=>{ie.close()}},[r.live_api,r.session_id,b.liveEnabled]),Ct.useEffect(()=>{if(t!=="geometry"||b.geometry||!(k!=null&&k.geometry))return;let G=!1;const ie=k.geometry;return z(pe=>({...pe,geometry:{...pe.geometry,status:"loading",source:k.liveEnabled?"live_api":"static_export",error:void 0}})),Ii(ie).then(pe=>{G||(D(_e=>({..._e,geometry:pe})),z(_e=>({..._e,geometry:{..._e.geometry,status:"ready"}})))}).catch(pe=>{if(G)return;const _e=pe instanceof Error?pe.message:"Failed to load geometry payload.";z(Ae=>({...Ae,geometry:{...Ae.geometry,status:"error",error:_e}}))}),()=>{G=!0}},[b.geometry,k,t]);function V(G,ie){if(!G){x([]);return}x(pe=>ie?pe.includes(G)?pe.filter(_e=>_e!==G):[...pe,G]:[G])}function ce(){var pe,_e,Ae,yt,St,at,B,Ht,ht,dt;const G=((pe=b.overview)==null?void 0:pe.graph_counts)??((_e=b.graph)==null?void 0:_e.counts)??{},ie=((Ae=b.measurements)==null?void 0:Ae.counts)??{};return me.jsxs("div",{className:"overview-grid",children:[me.jsx(Nn,{title:"Identity",children:me.jsx(Zn,{items:[["Experiment",r.experiment_id],["Session",r.session_id],["Mode",b.liveEnabled?"Live API":"Static export"],["Render","Layout/render != evidence"]]})}),me.jsx(Nn,{title:"Graph",children:me.jsx(Zn,{items:[["Payload",T.graph.status],["Source",Av(T.graph.source)],["Assemblies",(St=(yt=b.graph)==null?void 0:yt.assemblies)==null?void 0:St.length],["Clusters",(B=(at=b.graph)==null?void 0:at.cluster_summaries)==null?void 0:B.length],...Object.entries(G)]})}),me.jsx(Nn,{title:"Basin",children:me.jsx(Zn,{items:[["Payload",T.basin.status],["Projection",((Ht=b.basin)==null?void 0:Ht.projection_method)??r.projection_method],["Filtered turns",(ht=b.basin)==null?void 0:ht.filtered_turn_count],["Source turns",(dt=b.basin)==null?void 0:dt.source_turn_count],["Derived","SVD projection + lift mode"]]})}),me.jsx(Nn,{title:"Measurements",children:me.jsx(Zn,{items:[["Payload",T.measurements.status],...Object.entries(ie)]})})]})}function le(){const G=k_.filter(_e=>T[_e].source!=="none").map(_e=>[_e,T[_e]]);if(!G.length)return null;const ie=G.filter(([,_e])=>_e.status==="loading").length,pe=G.filter(([,_e])=>_e.status==="deferred").length;return me.jsxs("section",{className:"status-panel",children:[me.jsxs("div",{className:"status-panel-copy",children:[me.jsx("strong",{children:N?"Loading observatory payloads":ie?"Background payload activity":"Payload status"}),me.jsx("span",{children:b.liveEnabled?"Live mode prefers API payloads and refresh invalidations.":"Static export mode reads adjacent JSON artifacts; large graph and geometry bundles can take noticeable time."}),me.jsx("span",{children:ie?`${ie} payload${ie===1?"":"s"} still loading.`:pe?`${pe} payload${pe===1?"":"s"} deferred until needed.`:"All requested payloads are ready."})]}),me.jsx("div",{className:"payload-grid",children:G.map(([_e,Ae])=>me.jsxs("div",{className:"payload-card",children:[me.jsxs("div",{className:"payload-card-header",children:[me.jsx("strong",{children:Ae.label}),me.jsx("span",{className:RR(Ae.status),children:Ae.status})]}),me.jsx("p",{children:Ae.detail}),me.jsx("small",{children:Av(Ae.source)}),Ae.error?me.jsx("small",{className:"payload-error",children:Ae.error}):null]},_e))})]})}function O(){var pe,_e;const G=((pe=b.graph)==null?void 0:pe.graph_modes)??[wv],ie=((_e=b.graph)==null?void 0:_e.assembly_render_modes)??[Tv];return me.jsxs("div",{className:"toolbar",children:[me.jsx("div",{className:"toolbar-group",children:G.map(Ae=>me.jsx("button",{className:Ae===o?"toolbar-button is-active":"toolbar-button",onClick:()=>a(Ae),type:"button",children:Ae},Ae))}),me.jsx("div",{className:"toolbar-group",children:ie.map(Ae=>me.jsx("button",{className:Ae===u?"toolbar-button is-active":"toolbar-button",onClick:()=>c(Ae),type:"button",children:Ae},Ae))})]})}function re(){var G;return me.jsxs("div",{className:"toolbar",children:[me.jsx("div",{className:"toolbar-group",children:["flat","time_lift","density_lift","session_offset"].map(ie=>me.jsx("button",{className:ie===h?"toolbar-button is-active":"toolbar-button",onClick:()=>f(ie),type:"button",children:ie},ie))}),me.jsxs("div",{className:"toolbar-group toolbar-badges",children:[me.jsxs("span",{className:oo("derived"),children:["Projection: ",((G=b.basin)==null?void 0:G.projection_method)??r.projection_method??"unknown"]}),me.jsxs("span",{className:oo("derived"),children:["Lift: ",h]}),me.jsx("span",{className:oo("derived"),children:"Derived"})]})]})}function De(){var _e;const G=Z??de??q??b.overview??{},ie=(de==null?void 0:de.measurement_history)??(Z==null?void 0:Z.measurement_history)??[],pe=(de==null?void 0:de.provenance)??(Z==null?void 0:Z.operator_label)??(q==null?void 0:q.profile_name)??"";return me.jsxs("aside",{className:"inspector",children:[me.jsxs("div",{className:"inspector-tabs",children:[me.jsx("button",{className:m==="cards"?"toolbar-button is-active":"toolbar-button",onClick:()=>g("cards"),type:"button",children:"Cards"}),me.jsx("button",{className:m==="json"?"toolbar-button is-active":"toolbar-button",onClick:()=>g("json"),type:"button",children:"Raw JSON"})]}),m==="json"?me.jsx("pre",{className:"debug-json",children:JSON.stringify(G,null,2)}):me.jsxs("div",{className:"inspector-cards",children:[me.jsx(Nn,{title:"Identity",children:me.jsx(Zn,{items:[["ID",(G==null?void 0:G.id)??(G==null?void 0:G.turn_id)??(G==null?void 0:G.cluster_signature)],["Label",(G==null?void 0:G.label)??(G==null?void 0:G.display_attractor_label)??(G==null?void 0:G.display_label)],["Created",G==null?void 0:G.created_at]]})}),me.jsx(Nn,{title:"Ontology",children:me.jsx(Zn,{items:[["Kind",(G==null?void 0:G.kind)??(Z?"memode":q?"turn":"overview")],["Domain",(G==null?void 0:G.domain)??(G==null?void 0:G.dominant_domain)],["Source",(G==null?void 0:G.source_kind)??"observatory"]]})}),me.jsx(Nn,{title:"Summary/Invariance",children:me.jsx(Zn,{items:[["Summary",(G==null?void 0:G.summary)??(G==null?void 0:G.manual_summary)??(G==null?void 0:G.dominant_label)],["Invariance",Z==null?void 0:Z.invariance_summary],["Recent turns",q==null?void 0:q.active_set_labels]]})}),me.jsx(Nn,{title:"Provenance",children:me.jsx(Zn,{items:[["Operator/Source",pe],["Evidence label",(G==null?void 0:G.evidence_label)??(Z==null?void 0:Z.evidence_label)],["Confidence",(G==null?void 0:G.confidence)??(Z==null?void 0:Z.confidence)]]})}),me.jsx(Nn,{title:"Cluster Membership",children:me.jsx(Zn,{items:[["Cluster",(G==null?void 0:G.cluster_signature)??(q==null?void 0:q.dominant_cluster_signature)],["Display label",(G==null?void 0:G.cluster_label)??(G==null?void 0:G.display_label)??(q==null?void 0:q.display_attractor_label)],["Domain mix",G==null?void 0:G.domain_mix]]})}),me.jsx(Nn,{title:"Memode Membership",children:me.jsx(Zn,{items:[["Assemblies",(G==null?void 0:G.memode_membership)??(Z==null?void 0:Z.member_meme_ids)],["Supporting edges",Z==null?void 0:Z.supporting_edge_ids],["Member order",Z==null?void 0:Z.member_order]]})}),me.jsx(Nn,{title:"Supporting Relations",children:me.jsx(Zn,{items:[["Active set nodes",q==null?void 0:q.active_set_node_ids],["Transition",q==null?void 0:q.transition_kind],["Attractor",q==null?void 0:q.display_attractor_label]]})}),me.jsx(Nn,{title:"Measurement History",children:me.jsx(Zn,{items:[["Count",ie.length],["Recent event",(_e=ie[0])==null?void 0:_e.action_type],["Preview delta","Use preview/commit API; view-only presets stay out of evidence."]]})})]})]})}function ne(){var G,ie,pe;return me.jsxs("aside",{className:"sidebar",children:[me.jsx(Nn,{title:"Assemblies",children:b.graph?me.jsx("div",{className:"chip-list",children:(((G=b.graph)==null?void 0:G.assemblies)??[]).slice(0,12).map(_e=>me.jsx("button",{className:_e.id===E?"chip is-active":"chip",onClick:()=>M(_e.id),type:"button",children:_e.label},_e.id))}):me.jsxs("p",{className:"placeholder-copy",children:["Graph payload ",T.graph.status,". Assemblies appear after the semantic graph bundle arrives."]})}),me.jsx(Nn,{title:"Semantic Clusters",children:b.graph?me.jsx("div",{className:"chip-list",children:(((ie=b.graph)==null?void 0:ie.cluster_summaries)??[]).slice(0,12).map(_e=>me.jsxs("div",{className:"cluster-pill",children:[me.jsx("strong",{children:_e.display_label}),me.jsxs("span",{children:[_e.member_meme_ids.length," memes"]})]},_e.cluster_signature))}):me.jsx("p",{className:"placeholder-copy",children:"Cluster summaries depend on the graph payload and are loaded separately from the overview."})}),me.jsx(Nn,{title:"Transcript",children:b.transcript?me.jsx("div",{className:"transcript-list",children:(((pe=b.transcript)==null?void 0:pe.turns)??[]).slice(0,10).map(_e=>me.jsxs("button",{className:_e.turn_id===(q==null?void 0:q.turn_id)?"transcript-turn is-active":"transcript-turn",onClick:()=>y(_e.turn_id),type:"button",children:[me.jsxs("span",{children:["T",_e.turn_index]}),me.jsx("span",{children:_e.user_text})]},_e.turn_id))}):me.jsx("p",{className:"placeholder-copy",children:b.liveEnabled?`Transcript payload ${T.transcript.status}.`:"Transcript is only available from the live API in v1."})})]})}function ve(){var G,ie;return t==="overview"?ce():t==="graph"&&!b.graph?me.jsxs("div",{className:"empty-state",children:[me.jsx("h2",{children:"Graph payload not ready"}),me.jsxs("p",{children:["Current status: ",T.graph.status,". This semantic bundle is large and loads separately from the overview."]})]}):t==="graph"&&b.graph?me.jsxs(me.Fragment,{children:[O(),me.jsx(yR,{payload:b.graph,mode:o,currentTurnNodeIds:he,selectedNodeId:Y,selectedAssembly:u==="hidden"?null:Z,onSelectNode:V})]}):t==="basin"&&!b.basin?me.jsxs("div",{className:"empty-state",children:[me.jsx("h2",{children:"Basin payload not ready"}),me.jsxs("p",{children:["Current status: ",T.basin.status,"."]})]}):t==="basin"&&b.basin?(b.basin.filtered_turn_count??0)<2?me.jsxs(me.Fragment,{children:[re(),me.jsxs("div",{className:"empty-state",children:[me.jsx("h2",{children:"Sparse basin data"}),me.jsx("p",{children:((G=b.basin.diagnostics)==null?void 0:G.reason)??"Not enough turns with non-empty active sets for basin playback."}),me.jsx(Zn,{items:[["Source turns",b.basin.source_turn_count],["Filtered turns",b.basin.filtered_turn_count],["Skipped turns",(ie=b.basin.diagnostics)==null?void 0:ie.skipped_turn_count]]})]})]}):me.jsxs(me.Fragment,{children:[re(),me.jsx(BT,{payload:b.basin,currentTurnId:(q==null?void 0:q.turn_id)??null,liftMode:h,onSelectTurn:y})]}):t==="geometry"?b.geometry?me.jsx("pre",{className:"debug-json",children:JSON.stringify(b.geometry??{},null,2)}):me.jsxs("div",{className:"empty-state",children:[me.jsxs("h2",{children:["Geometry payload ",T.geometry.status]}),me.jsx("p",{children:"The geometry bundle is intentionally deferred until you open this tab because it can be very large on seeded experiments."})]}):me.jsx("pre",{className:"debug-json",children:JSON.stringify(b.measurements??{},null,2)})}return me.jsxs("div",{className:"app-shell",children:[me.jsxs("header",{className:"app-header",children:[me.jsxs("div",{children:[me.jsx("p",{className:"eyebrow",children:"EDEN Observatory"}),me.jsx("h1",{children:"Live-first semantic graph and basin instrument"})]}),me.jsxs("div",{className:"header-badges",children:[me.jsx("span",{className:oo("observed"),children:b.liveEnabled?"Live API":"Static export"}),me.jsx("span",{className:oo("derived"),children:"Layout != evidence"}),b.staleBuildWarning?me.jsxs("span",{className:oo("warning"),children:["Build warning: ",b.staleBuildWarning]}):null]})]}),me.jsx("nav",{className:"surface-tabs",children:Mv.map(G=>me.jsx("button",{className:G===t?"toolbar-button is-active":"toolbar-button",onClick:()=>n(G),type:"button",children:MR(G)},G))}),le(),w?me.jsx("div",{className:"status-banner status-error",children:w}):null,me.jsxs("main",{className:"layout",children:[ne(),me.jsx("section",{className:"surface-panel",children:ve()}),De()]})]})}A0.createRoot(document.getElementById("observatory-root")).render(me.jsx(y0.StrictMode,{children:me.jsx(CR,{bootstrap:window.__EDEN_BOOTSTRAP__??{}})}));
