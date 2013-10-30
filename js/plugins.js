// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// spin.min.js
(function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define(e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),u=i.substring(0,i.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";if(!e[a]){r.insertRule("@"+d+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}if(o[i]!==undefined)return i}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function u(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t,e){return typeof t=="string"?t:t[e%t.length]}var p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function c(t){if(typeof this=="undefined")return new c(t);this.opts=l(t||{},c.defaults,p)}c.defaults={};l(c.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=u(t);a=u(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var d=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){d++;for(var t=0;t<n.lines;t++){c=Math.max(1-(d+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function u(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(u("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,u(d(e.color,r),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function h(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),u;function p(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:d(i.color,e),opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(u=1;u<=i.lines;u++)p(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=i.lines;u++)p(u);return n(e,l)};c.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var m=f(o("group"),{behavior:"url(#default#VML)"});if(!a(m,"transform")&&m.adj)h();else i=a(m,"animation");return c});

// rsvp.js
(function(globals){var define,requireModule;(function(){var registry={},seen={};define=function(name,deps,callback){registry[name]={deps:deps,callback:callback}};requireModule=function(name){if(seen[name]){return seen[name]}seen[name]={};var mod=registry[name];if(!mod){throw new Error("Module '"+name+"' not found.")}var deps=mod.deps,callback=mod.callback,reified=[],exports;for(var i=0,l=deps.length;i<l;i++){if(deps[i]==="exports"){reified.push(exports={})}else{reified.push(requireModule(deps[i]))}}var value=callback.apply(this,reified);return seen[name]=exports||value}})();define("rsvp/all",["rsvp/promise","exports"],function(__dependency1__,__exports__){"use strict";var Promise=__dependency1__.Promise;function all(promises){if(Object.prototype.toString.call(promises)!=="[object Array]"){throw new TypeError("You must pass an array to all.")}return new Promise(function(resolve,reject){var results=[],remaining=promises.length,promise;if(remaining===0){resolve([])}function resolver(index){return function(value){resolveAll(index,value)}}function resolveAll(index,value){results[index]=value;if(--remaining===0){resolve(results)}}for(var i=0;i<promises.length;i++){promise=promises[i];if(promise&&typeof promise.then==="function"){promise.then(resolver(i),reject)}else{resolveAll(i,promise)}}})}__exports__.all=all});define("rsvp/async",["exports"],function(__exports__){"use strict";var browserGlobal=typeof window!=="undefined"?window:{};var BrowserMutationObserver=browserGlobal.MutationObserver||browserGlobal.WebKitMutationObserver;var local=typeof global!=="undefined"?global:this;function useNextTick(){return function(){process.nextTick(flush)}}function useMutationObserver(){var observer=new BrowserMutationObserver(flush);var element=document.createElement("div");observer.observe(element,{attributes:true});window.addEventListener("unload",function(){observer.disconnect();observer=null},false);return function(){element.setAttribute("drainQueue","drainQueue")}}function useSetTimeout(){return function(){local.setTimeout(flush,1)}}var queue=[];function flush(){for(var i=0;i<queue.length;i++){var tuple=queue[i];var callback=tuple[0],arg=tuple[1];callback(arg)}queue=[]}var scheduleFlush;if(typeof process!=="undefined"&&{}.toString.call(process)==="[object process]"){scheduleFlush=useNextTick()}else if(BrowserMutationObserver){scheduleFlush=useMutationObserver()}else{scheduleFlush=useSetTimeout()}function async(callback,arg){var length=queue.push([callback,arg]);if(length===1){scheduleFlush()}}__exports__.async=async});define("rsvp/config",["rsvp/async","exports"],function(__dependency1__,__exports__){"use strict";var async=__dependency1__.async;var config={};config.async=async;__exports__.config=config});define("rsvp/defer",["rsvp/promise","exports"],function(__dependency1__,__exports__){"use strict";var Promise=__dependency1__.Promise;function defer(){var deferred={resolve:undefined,reject:undefined,promise:undefined};deferred.promise=new Promise(function(resolve,reject){deferred.resolve=resolve;deferred.reject=reject});return deferred}__exports__.defer=defer});define("rsvp/events",["exports"],function(__exports__){"use strict";var Event=function(type,options){this.type=type;for(var option in options){if(!options.hasOwnProperty(option)){continue}this[option]=options[option]}};var indexOf=function(callbacks,callback){for(var i=0,l=callbacks.length;i<l;i++){if(callbacks[i][0]===callback){return i}}return-1};var callbacksFor=function(object){var callbacks=object._promiseCallbacks;if(!callbacks){callbacks=object._promiseCallbacks={}}return callbacks};var EventTarget={mixin:function(object){object.on=this.on;object.off=this.off;object.trigger=this.trigger;return object},on:function(eventNames,callback,binding){var allCallbacks=callbacksFor(this),callbacks,eventName;eventNames=eventNames.split(/\s+/);binding=binding||this;while(eventName=eventNames.shift()){callbacks=allCallbacks[eventName];if(!callbacks){callbacks=allCallbacks[eventName]=[]}if(indexOf(callbacks,callback)===-1){callbacks.push([callback,binding])}}},off:function(eventNames,callback){var allCallbacks=callbacksFor(this),callbacks,eventName,index;eventNames=eventNames.split(/\s+/);while(eventName=eventNames.shift()){if(!callback){allCallbacks[eventName]=[];continue}callbacks=allCallbacks[eventName];index=indexOf(callbacks,callback);if(index!==-1){callbacks.splice(index,1)}}},trigger:function(eventName,options){var allCallbacks=callbacksFor(this),callbacks,callbackTuple,callback,binding,event;if(callbacks=allCallbacks[eventName]){for(var i=0;i<callbacks.length;i++){callbackTuple=callbacks[i];callback=callbackTuple[0];binding=callbackTuple[1];if(typeof options!=="object"){options={detail:options}}event=new Event(eventName,options);callback.call(binding,event)}}}};__exports__.EventTarget=EventTarget});define("rsvp/hash",["rsvp/defer","exports"],function(__dependency1__,__exports__){"use strict";var defer=__dependency1__.defer;function size(object){var s=0;for(var prop in object){s++}return s}function hash(promises){var results={},deferred=defer(),remaining=size(promises);if(remaining===0){deferred.resolve({})}var resolver=function(prop){return function(value){resolveAll(prop,value)}};var resolveAll=function(prop,value){results[prop]=value;if(--remaining===0){deferred.resolve(results)}};var rejectAll=function(error){deferred.reject(error)};for(var prop in promises){if(promises[prop]&&typeof promises[prop].then==="function"){promises[prop].then(resolver(prop),rejectAll)}else{resolveAll(prop,promises[prop])}}return deferred.promise}__exports__.hash=hash});define("rsvp/node",["rsvp/promise","rsvp/all","exports"],function(__dependency1__,__dependency2__,__exports__){"use strict";var Promise=__dependency1__.Promise;var all=__dependency2__.all;function makeNodeCallbackFor(resolve,reject){return function(error,value){if(error){reject(error)}else if(arguments.length>2){resolve(Array.prototype.slice.call(arguments,1))}else{resolve(value)}}}function denodeify(nodeFunc){return function(){var nodeArgs=Array.prototype.slice.call(arguments),resolve,reject;var thisArg=this;var promise=new Promise(function(nodeResolve,nodeReject){resolve=nodeResolve;reject=nodeReject});all(nodeArgs).then(function(nodeArgs){nodeArgs.push(makeNodeCallbackFor(resolve,reject));try{nodeFunc.apply(thisArg,nodeArgs)}catch(e){reject(e)}});return promise}}__exports__.denodeify=denodeify});define("rsvp/promise",["rsvp/config","rsvp/events","exports"],function(__dependency1__,__dependency2__,__exports__){"use strict";var config=__dependency1__.config;var EventTarget=__dependency2__.EventTarget;function objectOrFunction(x){return isFunction(x)||typeof x==="object"&&x!==null}function isFunction(x){return typeof x==="function"}var Promise=function(resolver){var promise=this,resolved=false;if(typeof resolver!=="function"){throw new TypeError("You must pass a resolver function as the sole argument to the promise constructor")}if(!(promise instanceof Promise)){return new Promise(resolver)}var resolvePromise=function(value){if(resolved){return}resolved=true;resolve(promise,value)};var rejectPromise=function(value){if(resolved){return}resolved=true;reject(promise,value)};this.on("promise:failed",function(event){this.trigger("error",{detail:event.detail})},this);this.on("error",onerror);try{resolver(resolvePromise,rejectPromise)}catch(e){rejectPromise(e)}};function onerror(event){if(config.onerror){config.onerror(event.detail)}}var invokeCallback=function(type,promise,callback,event){var hasCallback=isFunction(callback),value,error,succeeded,failed;if(hasCallback){try{value=callback(event.detail);succeeded=true}catch(e){failed=true;error=e}}else{value=event.detail;succeeded=true}if(handleThenable(promise,value)){return}else if(hasCallback&&succeeded){resolve(promise,value)}else if(failed){reject(promise,error)}else if(type==="resolve"){resolve(promise,value)}else if(type==="reject"){reject(promise,value)}};Promise.prototype={constructor:Promise,isRejected:undefined,isFulfilled:undefined,rejectedReason:undefined,fulfillmentValue:undefined,then:function(done,fail){this.off("error",onerror);var thenPromise=new this.constructor(function(){});if(this.isFulfilled){config.async(function(promise){invokeCallback("resolve",thenPromise,done,{detail:promise.fulfillmentValue})},this)}if(this.isRejected){config.async(function(promise){invokeCallback("reject",thenPromise,fail,{detail:promise.rejectedReason})},this)}this.on("promise:resolved",function(event){invokeCallback("resolve",thenPromise,done,event)});this.on("promise:failed",function(event){invokeCallback("reject",thenPromise,fail,event)});return thenPromise},fail:function(fail){return this.then(null,fail)}};EventTarget.mixin(Promise.prototype);function resolve(promise,value){if(promise===value){fulfill(promise,value)}else if(!handleThenable(promise,value)){fulfill(promise,value)}}function handleThenable(promise,value){var then=null,resolved;try{if(promise===value){throw new TypeError("A promises callback cannot return that same promise.")}if(objectOrFunction(value)){then=value.then;if(isFunction(then)){then.call(value,function(val){if(resolved){return true}resolved=true;if(value!==val){resolve(promise,val)}else{fulfill(promise,val)}},function(val){if(resolved){return true}resolved=true;reject(promise,val)});return true}}}catch(error){reject(promise,error);return true}return false}function fulfill(promise,value){config.async(function(){promise.trigger("promise:resolved",{detail:value});promise.isFulfilled=true;promise.fulfillmentValue=value})}function reject(promise,value){config.async(function(){promise.trigger("promise:failed",{detail:value});promise.isRejected=true;promise.rejectedReason=value})}__exports__.Promise=Promise});define("rsvp/reject",["rsvp/promise","exports"],function(__dependency1__,__exports__){"use strict";var Promise=__dependency1__.Promise;function reject(reason){return new Promise(function(resolve,reject){reject(reason)})}__exports__.reject=reject});define("rsvp/resolve",["rsvp/promise","exports"],function(__dependency1__,__exports__){"use strict";var Promise=__dependency1__.Promise;function resolve(thenable){return new Promise(function(resolve,reject){resolve(thenable)})}__exports__.resolve=resolve});define("rsvp/rethrow",["exports"],function(__exports__){"use strict";var local=typeof global==="undefined"?this:global;function rethrow(reason){local.setTimeout(function(){throw reason});throw reason}__exports__.rethrow=rethrow});define("rsvp",["rsvp/events","rsvp/promise","rsvp/node","rsvp/all","rsvp/hash","rsvp/rethrow","rsvp/defer","rsvp/config","rsvp/resolve","rsvp/reject","exports"],function(__dependency1__,__dependency2__,__dependency3__,__dependency4__,__dependency5__,__dependency6__,__dependency7__,__dependency8__,__dependency9__,__dependency10__,__exports__){"use strict";var EventTarget=__dependency1__.EventTarget;var Promise=__dependency2__.Promise;var denodeify=__dependency3__.denodeify;var all=__dependency4__.all;var hash=__dependency5__.hash;var rethrow=__dependency6__.rethrow;var defer=__dependency7__.defer;var config=__dependency8__.config;var resolve=__dependency9__.resolve;var reject=__dependency10__.reject;function configure(name,value){config[name]=value}__exports__.Promise=Promise;__exports__.EventTarget=EventTarget;__exports__.all=all;__exports__.hash=hash;__exports__.rethrow=rethrow;__exports__.defer=defer;__exports__.denodeify=denodeify;__exports__.configure=configure;__exports__.resolve=resolve;__exports__.reject=reject});window.RSVP=requireModule("rsvp")})(window);
