/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var U=function(n,t){return U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])},U(n,t)};function R(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");U(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}function rn(n,t,r,e){function o(i){return i instanceof r?i:new r(function(u){u(i)})}return new(r||(r=Promise))(function(i,u){function f(s){try{c(e.next(s))}catch(v){u(v)}}function a(s){try{c(e.throw(s))}catch(v){u(v)}}function c(s){s.done?i(s.value):o(s.value).then(f,a)}c((e=e.apply(n,t||[])).next())})}function K(n,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,o,i,u;return u={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function f(c){return function(s){return a([c,s])}}function a(c){if(e)throw new TypeError("Generator is already executing.");for(;r;)try{if(e=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(c[0]===6&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(n,r)}catch(s){c=[6,s],o=0}finally{e=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function E(n){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(n,t){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var e=r.call(n),o,i=[],u;try{for(;(t===void 0||t-- >0)&&!(o=e.next()).done;)i.push(o.value)}catch(f){u={error:f}}finally{try{o&&!o.done&&(r=e.return)&&r.call(e)}finally{if(u)throw u.error}}return i}function _(n,t,r){if(r||arguments.length===2)for(var e=0,o=t.length,i;e<o;e++)(i||!(e in t))&&(i||(i=Array.prototype.slice.call(t,0,e)),i[e]=t[e]);return n.concat(i||Array.prototype.slice.call(t))}function w(n){return this instanceof w?(this.v=n,this):new w(n)}function tn(n,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=r.apply(n,t||[]),o,i=[];return o={},u("next"),u("throw"),u("return"),o[Symbol.asyncIterator]=function(){return this},o;function u(d){e[d]&&(o[d]=function(y){return new Promise(function(p,h){i.push([d,y,p,h])>1||f(d,y)})})}function f(d,y){try{a(e[d](y))}catch(p){v(i[0][3],p)}}function a(d){d.value instanceof w?Promise.resolve(d.value.v).then(c,s):v(i[0][2],d)}function c(d){f("next",d)}function s(d){f("throw",d)}function v(d,y){d(y),i.shift(),i.length&&f(i[0][0],i[0][1])}}function en(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],r;return t?t.call(n):(n=typeof E=="function"?E(n):n[Symbol.iterator](),r={},e("next"),e("throw"),e("return"),r[Symbol.asyncIterator]=function(){return this},r);function e(i){r[i]=n[i]&&function(u){return new Promise(function(f,a){u=n[i](u),o(f,a,u.done,u.value)})}}function o(i,u,f,a){Promise.resolve(a).then(function(c){i({value:c,done:f})},u)}}function l(n){return typeof n=="function"}function on(n){var t=function(e){Error.call(e),e.stack=new Error().stack},r=n(t);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var O=on(function(n){return function(r){n(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(e,o){return o+1+") "+e.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function D(n,t){if(n){var r=n.indexOf(t);0<=r&&n.splice(r,1)}}var V=function(){function n(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}return n.prototype.unsubscribe=function(){var t,r,e,o,i;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var f=E(u),a=f.next();!a.done;a=f.next()){var c=a.value;c.remove(this)}}catch(h){t={error:h}}finally{try{a&&!a.done&&(r=f.return)&&r.call(f)}finally{if(t)throw t.error}}else u.remove(this);var s=this.initialTeardown;if(l(s))try{s()}catch(h){i=h instanceof O?h.errors:[h]}var v=this._teardowns;if(v){this._teardowns=null;try{for(var d=E(v),y=d.next();!y.done;y=d.next()){var p=y.value;try{H(p)}catch(h){i=i!=null?i:[],h instanceof O?i=_(_([],g(i)),g(h.errors)):i.push(h)}}}catch(h){e={error:h}}finally{try{y&&!y.done&&(o=d.return)&&o.call(d)}finally{if(e)throw e.error}}}if(i)throw new O(i)}},n.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)H(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=(r=this._teardowns)!==null&&r!==void 0?r:[]).push(t)}},n.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},n.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},n.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&D(r,t)},n.prototype.remove=function(t){var r=this._teardowns;r&&D(r,t),t instanceof n&&t._removeParent(this)},n.EMPTY=function(){var t=new n;return t.closed=!0,t}(),n}();function W(n){return n instanceof V||n&&"closed"in n&&l(n.remove)&&l(n.add)&&l(n.unsubscribe)}function H(n){l(n)?n():n.unsubscribe()}var F={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},P={setTimeout:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=P.delegate;return((r==null?void 0:r.setTimeout)||setTimeout).apply(void 0,_([],g(n)))},clearTimeout:function(n){var t=P.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(n)},delegate:void 0};function X(n){P.setTimeout(function(){throw n})}function C(){}var un=function(){return j("C",void 0,void 0)}();function cn(n){return j("E",void 0,n)}function an(n){return j("N",n,void 0)}function j(n,t,r){return{kind:n,value:t,error:r}}function fn(n){n()}var G=function(n){R(t,n);function t(r){var e=n.call(this)||this;return e.isStopped=!1,r?(e.destination=r,W(r)&&r.add(e)):e.destination=hn,e}return t.create=function(r,e,o){return new M(r,e,o)},t.prototype.next=function(r){this.isStopped?L(an(r),this):this._next(r)},t.prototype.error=function(r){this.isStopped?L(cn(r),this):(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped?L(un,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(V),sn=Function.prototype.bind;function k(n,t){return sn.call(n,t)}var ln=function(){function n(t){this.partialObserver=t}return n.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(e){T(e)}},n.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(e){T(e)}else T(t)},n.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(r){T(r)}},n}(),M=function(n){R(t,n);function t(r,e,o){var i=n.call(this)||this,u;if(l(r)||!r)u={next:r!=null?r:void 0,error:e!=null?e:void 0,complete:o!=null?o:void 0};else{var f;i&&F.useDeprecatedNextContext?(f=Object.create(r),f.unsubscribe=function(){return i.unsubscribe()},u={next:r.next&&k(r.next,f),error:r.error&&k(r.error,f),complete:r.complete&&k(r.complete,f)}):u=r}return i.destination=new ln(u),i}return t}(G);function T(n){X(n)}function dn(n){throw n}function L(n,t){var r=F.onStoppedNotification;r&&P.setTimeout(function(){return r(n,t)})}var hn={closed:!0,next:C,error:dn,complete:C},Y=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Z(n){return n}function vn(n){return n.length===0?Z:n.length===1?n[0]:function(r){return n.reduce(function(e,o){return o(e)},r)}}var m=function(){function n(t){t&&(this._subscribe=t)}return n.prototype.lift=function(t){var r=new n;return r.source=this,r.operator=t,r},n.prototype.subscribe=function(t,r,e){var o=this,i=pn(t)?t:new M(t,r,e);return fn(function(){var u=o,f=u.operator,a=u.source;i.add(f?f.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},n.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},n.prototype.forEach=function(t,r){var e=this;return r=q(r),new r(function(o,i){var u=new M({next:function(f){try{t(f)}catch(a){i(a),u.unsubscribe()}},error:i,complete:o});e.subscribe(u)})},n.prototype._subscribe=function(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)},n.prototype[Y]=function(){return this},n.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return vn(t)(this)},n.prototype.toPromise=function(t){var r=this;return t=q(t),new t(function(e,o){var i;r.subscribe(function(u){return i=u},function(u){return o(u)},function(){return e(i)})})},n.create=function(t){return new n(t)},n}();function q(n){var t;return(t=n!=null?n:F.Promise)!==null&&t!==void 0?t:Promise}function yn(n){return n&&l(n.next)&&l(n.error)&&l(n.complete)}function pn(n){return n&&n instanceof G||yn(n)&&W(n)}function bn(n){return l(n==null?void 0:n.lift)}function x(n){return function(t){if(bn(t))return t.lift(function(r){try{return n(r,this)}catch(e){this.error(e)}});throw new TypeError("Unable to lift unknown Observable type")}}function b(n,t,r,e,o){return new mn(n,t,r,e,o)}var mn=function(n){R(t,n);function t(r,e,o,i,u,f){var a=n.call(this,r)||this;return a.onFinalize=u,a.shouldUnsubscribe=f,a._next=e?function(c){try{e(c)}catch(s){r.error(s)}}:n.prototype._next,a._error=i?function(c){try{i(c)}catch(s){r.error(s)}finally{this.unsubscribe()}}:n.prototype._error,a._complete=o?function(){try{o()}catch(c){r.error(c)}finally{this.unsubscribe()}}:n.prototype._complete,a}return t.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var e=this.closed;n.prototype.unsubscribe.call(this),!e&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},t}(G),$=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function wn(n){return l(n==null?void 0:n.then)}function Sn(n){return l(n[Y])}function En(n){return Symbol.asyncIterator&&l(n==null?void 0:n[Symbol.asyncIterator])}function gn(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function xn(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var In=xn();function An(n){return l(n==null?void 0:n[In])}function Tn(n){return tn(this,arguments,function(){var r,e,o,i;return K(this,function(u){switch(u.label){case 0:r=n.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,w(r.read())];case 3:return e=u.sent(),o=e.value,i=e.done,i?[4,w(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,w(o)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}})})}function _n(n){return l(n==null?void 0:n.getReader)}function I(n){if(n instanceof m)return n;if(n!=null){if(Sn(n))return Pn(n);if($(n))return On(n);if(wn(n))return kn(n);if(En(n))return B(n);if(An(n))return Ln(n);if(_n(n))return Un(n)}throw gn(n)}function Pn(n){return new m(function(t){var r=n[Y]();if(l(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function On(n){return new m(function(t){for(var r=0;r<n.length&&!t.closed;r++)t.next(n[r]);t.complete()})}function kn(n){return new m(function(t){n.then(function(r){t.closed||(t.next(r),t.complete())},function(r){return t.error(r)}).then(null,X)})}function Ln(n){return new m(function(t){var r,e;try{for(var o=E(n),i=o.next();!i.done;i=o.next()){var u=i.value;if(t.next(u),t.closed)return}}catch(f){r={error:f}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(r)throw r.error}}t.complete()})}function B(n){return new m(function(t){Cn(n,t).catch(function(r){return t.error(r)})})}function Un(n){return B(Tn(n))}function Cn(n,t){var r,e,o,i;return rn(this,void 0,void 0,function(){var u,f;return K(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),r=en(n),a.label=1;case 1:return[4,r.next()];case 2:if(e=a.sent(),!!e.done)return[3,4];if(u=e.value,t.next(u),t.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return f=a.sent(),o={error:f},[3,11];case 6:return a.trys.push([6,,9,10]),e&&!e.done&&(i=r.return)?[4,i.call(r)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function Mn(n,t,r,e,o){e===void 0&&(e=0),o===void 0&&(o=!1);var i=t.schedule(function(){r(),o?n.add(this.schedule(null,e)):this.unsubscribe()},e);if(n.add(i),!o)return i}function N(n,t){return x(function(r,e){var o=0;r.subscribe(b(e,function(i){e.next(n.call(t,i,o++))}))})}var Rn=Array.isArray;function Fn(n,t){return Rn(t)?n.apply(void 0,_([],g(t))):n(t)}function jn(n){return N(function(t){return Fn(n,t)})}function Gn(n,t,r,e,o,i,u,f){var a=[],c=0,s=0,v=!1,d=function(){v&&!a.length&&!c&&t.complete()},y=function(h){return c<e?p(h):a.push(h)},p=function(h){i&&t.next(h),c++;var z=!1;I(r(h,s++)).subscribe(b(t,function(S){o==null||o(S),i?y(S):t.next(S)},function(){z=!0},void 0,function(){if(z)try{c--;for(var S=function(){var A=a.shift();u?Mn(t,u,function(){return p(A)}):p(A)};a.length&&c<e;)S();d()}catch(A){t.error(A)}}))};return n.subscribe(b(t,y,function(){v=!0,d()})),function(){f==null||f()}}function nn(n,t,r){return r===void 0&&(r=1/0),l(t)?nn(function(e,o){return N(function(i,u){return t(e,i,o,u)})(I(n(e,o)))},r):(typeof t=="number"&&(r=t),x(function(e,o){return Gn(e,o,n,r)}))}var Yn=["addListener","removeListener"],zn=["addEventListener","removeEventListener"],Dn=["on","off"];function J(n,t,r,e){if(l(r)&&(e=r,r=void 0),e)return J(n,t,r).pipe(jn(e));var o=g(Jn(n)?zn.map(function(f){return function(a){return n[f](t,a,r)}}):Hn(n)?Yn.map(Q(n,t)):qn(n)?Dn.map(Q(n,t)):[],2),i=o[0],u=o[1];if(!i&&$(n))return nn(function(f){return J(f,t,r)})(I(n));if(!i)throw new TypeError("Invalid event target");return new m(function(f){var a=function(){for(var c=[],s=0;s<arguments.length;s++)c[s]=arguments[s];return f.next(1<c.length?c:c[0])};return i(a),function(){return u(a)}})}function Q(n,t){return function(r){return function(e){return n[r](t,e)}}}function Hn(n){return l(n.addListener)&&l(n.removeListener)}function qn(n){return l(n.on)&&l(n.off)}function Jn(n){return l(n.addEventListener)&&l(n.removeEventListener)}function Qn(n,t){return x(function(r,e){var o=null,i=0,u=!1,f=function(){return u&&!o&&e.complete()};r.subscribe(b(e,function(a){o==null||o.unsubscribe();var c=0,s=i++;I(n(a,s)).subscribe(o=b(e,function(v){return e.next(t?t(a,v,s,c++):v)},function(){o=null,f()}))},function(){u=!0,f()}))})}function Kn(n){return x(function(t,r){I(n).subscribe(b(r,function(){return r.complete()},C)),!r.closed&&t.subscribe(r)})}function Vn(n,t,r){var e=l(n)||t||r?{next:n,error:t,complete:r}:n;return e?x(function(o,i){var u;(u=e.subscribe)===null||u===void 0||u.call(e);var f=!0;o.subscribe(b(i,function(a){var c;(c=e.next)===null||c===void 0||c.call(e,a),i.next(a)},function(){var a;f=!1,(a=e.complete)===null||a===void 0||a.call(e),i.complete()},function(a){var c;f=!1,(c=e.error)===null||c===void 0||c.call(e,a),i.error(a)},function(){var a,c;f&&((a=e.unsubscribe)===null||a===void 0||a.call(e)),(c=e.finalize)===null||c===void 0||c.call(e)}))}):Z}export{Kn as a,J as f,Qn as s,Vn as t};
