(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[9774],{15007:function(n,e,t){"use strict";t.r(e),t.d(e,{Children:function(){return Rn},Component:function(){return g},Fragment:function(){return b},PureComponent:function(){return Nn},StrictMode:function(){return me},Suspense:function(){return Wn},SuspenseList:function(){return Fn},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:function(){return le},cloneElement:function(){return se},createContext:function(){return $},createElement:function(){return v},createFactory:function(){return fe},createPortal:function(){return jn},createRef:function(){return y},default:function(){return Ee},findDOMNode:function(){return de},flushSync:function(){return ve},forwardRef:function(){return wn},hydrate:function(){return Qn},isValidElement:function(){return ae},lazy:function(){return In},memo:function(){return Pn},render:function(){return Kn},startTransition:function(){return ye},unmountComponentAtNode:function(){return pe},unstable_batchedUpdates:function(){return he},useCallback:function(){return an},useContext:function(){return sn},useDebugValue:function(){return pn},useDeferredValue:function(){return be},useEffect:function(){return on},useErrorBoundary:function(){return dn},useId:function(){return hn},useImperativeHandle:function(){return cn},useInsertionEffect:function(){return ke},useLayoutEffect:function(){return un},useMemo:function(){return fn},useReducer:function(){return rn},useRef:function(){return ln},useState:function(){return _n},useSyncExternalStore:function(){return Ce},useTransition:function(){return ge},version:function(){return ce}});var _,r,o,u,i,l,c,f,a={},s=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(n,e){for(var t in e)n[t]=e[t];return n}function h(n){var e=n.parentNode;e&&e.removeChild(n)}function v(n,e,t){var r,o,u,i={};for(u in e)"key"==u?r=e[u]:"ref"==u?o=e[u]:i[u]=e[u];if(arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):t),"function"==typeof n&&null!=n.defaultProps)for(u in n.defaultProps)void 0===i[u]&&(i[u]=n.defaultProps[u]);return m(n,i,r,o,null)}function m(n,e,t,_,u){var i={type:n,props:e,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==u?++o:u};return null==u&&null!=r.vnode&&r.vnode(i),i}function y(){return{current:null}}function b(n){return n.children}function g(n,e){this.props=n,this.context=e}function k(n,e){if(null==e)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?k(n):null}function C(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return C(n)}}function E(n){(!n.__d&&(n.__d=!0)&&u.push(n)&&!S.__r++||i!==r.debounceRendering)&&((i=r.debounceRendering)||l)(S)}function S(){var n,e,t,_,r,o,i,l;for(u.sort(c);n=u.shift();)n.__d&&(e=u.length,_=void 0,r=void 0,i=(o=(t=n).__v).__e,(l=t.__P)&&(_=[],(r=d({},o)).__v=o.__v+1,D(l,o,r,t.__n,void 0!==l.ownerSVGElement,null!=o.__h?[i]:null,_,null==i?k(o):i,o.__h),A(_,o),o.__e!=i&&C(o)),u.length>e&&u.sort(c));S.__r=0}function x(n,e,t,_,r,o,u,i,l,c){var f,p,d,h,v,y,g,C=_&&_.__k||s,E=C.length;for(t.__k=[],f=0;f<e.length;f++)if(null!=(h=t.__k[f]=null==(h=e[f])||"boolean"==typeof h||"function"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?m(null,h,null,null,h):Array.isArray(h)?m(b,{children:h},null,null,null):h.__b>0?m(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)){if(h.__=t,h.__b=t.__b+1,null===(d=C[f])||d&&h.key==d.key&&h.type===d.type)C[f]=void 0;else for(p=0;p<E;p++){if((d=C[p])&&h.key==d.key&&h.type===d.type){C[p]=void 0;break}d=null}D(n,h,d=d||a,r,o,u,i,l,c),v=h.__e,(p=h.ref)&&d.ref!=p&&(g||(g=[]),d.ref&&g.push(d.ref,null,h),g.push(p,h.__c||v,h)),null!=v?(null==y&&(y=v),"function"==typeof h.type&&h.__k===d.__k?h.__d=l=N(h,l,n):l=T(n,h,d,C,v,l),"function"==typeof t.type&&(t.__d=l)):l&&d.__e==l&&l.parentNode!=n&&(l=k(d))}for(t.__e=y,f=E;f--;)null!=C[f]&&("function"==typeof t.type&&null!=C[f].__e&&C[f].__e==t.__d&&(t.__d=U(_).nextSibling),V(C[f],C[f]));if(g)for(f=0;f<g.length;f++)W(g[f],g[++f],g[++f])}function N(n,e,t){for(var _,r=n.__k,o=0;r&&o<r.length;o++)(_=r[o])&&(_.__=n,e="function"==typeof _.type?N(_,e,t):T(t,_,_,r,_.__e,e));return e}function P(n,e){return e=e||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some((function(n){P(n,e)})):e.push(n)),e}function T(n,e,t,_,r,o){var u,i,l;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==t||r!=o||null==r.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(r),u=null;else{for(i=o,l=0;(i=i.nextSibling)&&l<_.length;l+=1)if(i==r)break n;n.insertBefore(r,o),u=o}return void 0!==u?u:r.nextSibling}function U(n){var e,t,_;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(e=n.__k.length-1;e>=0;e--)if((t=n.__k[e])&&(_=U(t)))return _;return null}function w(n,e,t){"-"===e[0]?n.setProperty(e,null==t?"":t):n[e]=null==t?"":"number"!=typeof t||p.test(e)?t:t+"px"}function O(n,e,t,_,r){var o;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof _&&(n.style.cssText=_=""),_)for(e in _)t&&e in t||w(n.style,e,"");if(t)for(e in t)_&&t[e]===_[e]||w(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+o]=t,t?_||n.addEventListener(e,o?H:R,o):n.removeEventListener(e,o?H:R,o);else if("dangerouslySetInnerHTML"!==e){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==e&&"height"!==e&&"href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==e[4]?n.removeAttribute(e):n.setAttribute(e,t))}}function R(n){return this.l[n.type+!1](r.event?r.event(n):n)}function H(n){return this.l[n.type+!0](r.event?r.event(n):n)}function D(n,e,t,_,o,u,i,l,c){var f,a,s,p,h,v,m,y,k,C,E,S,N,P,T,U=e.type;if(void 0!==e.constructor)return null;null!=t.__h&&(c=t.__h,l=e.__e=t.__e,e.__h=null,u=[l]),(f=r.__b)&&f(e);try{n:if("function"==typeof U){if(y=e.props,k=(f=U.contextType)&&_[f.__c],C=f?k?k.props.value:f.__:_,t.__c?m=(a=e.__c=t.__c).__=a.__E:("prototype"in U&&U.prototype.render?e.__c=a=new U(y,C):(e.__c=a=new g(y,C),a.constructor=U,a.render=I),k&&k.sub(a),a.props=y,a.state||(a.state={}),a.context=C,a.__n=_,s=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=U.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=d({},a.__s)),d(a.__s,U.getDerivedStateFromProps(y,a.__s))),p=a.props,h=a.state,a.__v=e,s)null==U.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==U.getDerivedStateFromProps&&y!==p&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(y,C),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(y,a.__s,C)||e.__v===t.__v){for(e.__v!==t.__v&&(a.props=y,a.state=a.__s,a.__d=!1),a.__e=!1,e.__e=t.__e,e.__k=t.__k,e.__k.forEach((function(n){n&&(n.__=e)})),E=0;E<a._sb.length;E++)a.__h.push(a._sb[E]);a._sb=[],a.__h.length&&i.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(y,a.__s,C),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(p,h,v)}))}if(a.context=C,a.props=y,a.__P=n,S=r.__r,N=0,"prototype"in U&&U.prototype.render){for(a.state=a.__s,a.__d=!1,S&&S(e),f=a.render(a.props,a.state,a.context),P=0;P<a._sb.length;P++)a.__h.push(a._sb[P]);a._sb=[]}else do{a.__d=!1,S&&S(e),f=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++N<25);a.state=a.__s,null!=a.getChildContext&&(_=d(d({},_),a.getChildContext())),s||null==a.getSnapshotBeforeUpdate||(v=a.getSnapshotBeforeUpdate(p,h)),T=null!=f&&f.type===b&&null==f.key?f.props.children:f,x(n,Array.isArray(T)?T:[T],e,t,_,o,u,i,l,c),a.base=e.__e,e.__h=null,a.__h.length&&i.push(a),m&&(a.__E=a.__=null),a.__e=!1}else null==u&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=L(t.__e,e,t,_,o,u,i,c);(f=r.diffed)&&f(e)}catch(n){e.__v=null,(c||null!=u)&&(e.__e=l,e.__h=!!c,u[u.indexOf(l)]=null),r.__e(n,e,t)}}function A(n,e){r.__c&&r.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){r.__e(n,e.__v)}}))}function L(n,e,t,r,o,u,i,l){var c,f,s,p=t.props,d=e.props,v=e.type,m=0;if("svg"===v&&(o=!0),null!=u)for(;m<u.length;m++)if((c=u[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){n=c,u[m]=null;break}if(null==n){if(null===v)return document.createTextNode(d);n=o?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,l=!1}if(null===v)p===d||l&&n.data===d||(n.data=d);else{if(u=u&&_.call(n.childNodes),f=(p=t.props||a).dangerouslySetInnerHTML,s=d.dangerouslySetInnerHTML,!l){if(null!=u)for(p={},m=0;m<n.attributes.length;m++)p[n.attributes[m].name]=n.attributes[m].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===n.innerHTML)||(n.innerHTML=s&&s.__html||""))}if(function(n,e,t,_,r){var o;for(o in t)"children"===o||"key"===o||o in e||O(n,o,null,t[o],_);for(o in e)r&&"function"!=typeof e[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===e[o]||O(n,o,e[o],t[o],_)}(n,d,p,o,l),s)e.__k=[];else if(m=e.props.children,x(n,Array.isArray(m)?m:[m],e,t,r,o&&"foreignObject"!==v,u,i,u?u[0]:t.__k&&k(t,0),l),null!=u)for(m=u.length;m--;)null!=u[m]&&h(u[m]);l||("value"in d&&void 0!==(m=d.value)&&(m!==n.value||"progress"===v&&!m||"option"===v&&m!==p.value)&&O(n,"value",m,p.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==n.checked&&O(n,"checked",m,p.checked,!1))}return n}function W(n,e,t){try{"function"==typeof n?n(e):n.current=e}catch(n){r.__e(n,t)}}function V(n,e,t){var _,o;if(r.unmount&&r.unmount(n),(_=n.ref)&&(_.current&&_.current!==n.__e||W(_,null,e)),null!=(_=n.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(n){r.__e(n,e)}_.base=_.__P=null,n.__c=void 0}if(_=n.__k)for(o=0;o<_.length;o++)_[o]&&V(_[o],e,t||"function"!=typeof n.type);t||null==n.__e||h(n.__e),n.__=n.__e=n.__d=void 0}function I(n,e,t){return this.constructor(n,t)}function F(n,e,t){var o,u,i;r.__&&r.__(n,e),u=(o="function"==typeof t)?null:t&&t.__k||e.__k,i=[],D(e,n=(!o&&t||e).__k=v(b,null,[n]),u||a,a,void 0!==e.ownerSVGElement,!o&&t?[t]:u?null:e.firstChild?_.call(e.childNodes):null,i,!o&&t?t:u?u.__e:e.firstChild,o),A(i,n)}function M(n,e){F(n,e,M)}function B(n,e,t){var r,o,u,i=d({},n.props);for(u in e)"key"==u?r=e[u]:"ref"==u?o=e[u]:i[u]=e[u];return arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):t),m(n.type,i,r||n.key,o||n.ref,null)}function $(n,e){var t={__c:e="__cC"+f++,__:n,Consumer:function(n,e){return n.children(e)},Provider:function(n){var t,_;return this.getChildContext||(t=[],(_={})[e]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.some((function(n){n.__e=!0,E(n)}))},this.sub=function(n){t.push(n);var e=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),e&&e.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}_=s.slice,r={__e:function(n,e,t,_){for(var r,o,u;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(n)),u=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(n,_||{}),u=r.__d),u)return r.__E=r}catch(e){n=e}throw n}},o=0,g.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},t),this.props)),n&&d(t,n),null!=n&&this.__v&&(e&&this._sb.push(e),E(this))},g.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),E(this))},g.prototype.render=b,u=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c=function(n,e){return n.__v.__b-e.__v.__b},S.__r=0,f=0;var j,z,q,Y,G=0,Z=[],J=[],K=r.__b,Q=r.__r,X=r.diffed,nn=r.__c,en=r.unmount;function tn(n,e){r.__h&&r.__h(z,n,G||e),G=0;var t=z.__H||(z.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:J}),t.__[n]}function _n(n){return G=1,rn(Cn,n)}function rn(n,e,t){var _=tn(j++,2);if(_.t=n,!_.__c&&(_.__=[t?t(e):Cn(void 0,e),function(n){var e=_.__N?_.__N[0]:_.__[0],t=_.t(e,n);e!==t&&(_.__N=[t,_.__[1]],_.__c.setState({}))}],_.__c=z,!z.u)){var r=function(n,e,t){if(!_.__c.__H)return!0;var r=_.__c.__H.__.filter((function(n){return n.__c}));if(r.every((function(n){return!n.__N})))return!o||o.call(this,n,e,t);var u=!1;return r.forEach((function(n){if(n.__N){var e=n.__[0];n.__=n.__N,n.__N=void 0,e!==n.__[0]&&(u=!0)}})),!(!u&&_.__c.props===n)&&(!o||o.call(this,n,e,t))};z.u=!0;var o=z.shouldComponentUpdate,u=z.componentWillUpdate;z.componentWillUpdate=function(n,e,t){if(this.__e){var _=o;o=void 0,r(n,e,t),o=_}u&&u.call(this,n,e,t)},z.shouldComponentUpdate=r}return _.__N||_.__}function on(n,e){var t=tn(j++,3);!r.__s&&kn(t.__H,e)&&(t.__=n,t.i=e,z.__H.__h.push(t))}function un(n,e){var t=tn(j++,4);!r.__s&&kn(t.__H,e)&&(t.__=n,t.i=e,z.__h.push(t))}function ln(n){return G=5,fn((function(){return{current:n}}),[])}function cn(n,e,t){G=6,un((function(){return"function"==typeof n?(n(e()),function(){return n(null)}):n?(n.current=e(),function(){return n.current=null}):void 0}),null==t?t:t.concat(n))}function fn(n,e){var t=tn(j++,7);return kn(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function an(n,e){return G=8,fn((function(){return n}),e)}function sn(n){var e=z.context[n.__c],t=tn(j++,9);return t.c=n,e?(null==t.__&&(t.__=!0,e.sub(z)),e.props.value):n.__}function pn(n,e){r.useDebugValue&&r.useDebugValue(e?e(n):n)}function dn(n){var e=tn(j++,10),t=_n();return e.__=n,z.componentDidCatch||(z.componentDidCatch=function(n,_){e.__&&e.__(n,_),t[1](n)}),[t[0],function(){t[1](void 0)}]}function hn(){var n=tn(j++,11);if(!n.__){for(var e=z.__v;null!==e&&!e.__m&&null!==e.__;)e=e.__;var t=e.__m||(e.__m=[0,0]);n.__="P"+t[0]+"-"+t[1]++}return n.__}function vn(){for(var n;n=Z.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(bn),n.__H.__h.forEach(gn),n.__H.__h=[]}catch(i){n.__H.__h=[],r.__e(i,n.__v)}}r.__b=function(n){z=null,K&&K(n)},r.__r=function(n){Q&&Q(n),j=0;var e=(z=n.__c).__H;e&&(q===z?(e.__h=[],z.__h=[],e.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=J,n.__N=n.i=void 0}))):(e.__h.forEach(bn),e.__h.forEach(gn),e.__h=[])),q=z},r.diffed=function(n){X&&X(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(1!==Z.push(e)&&Y===r.requestAnimationFrame||((Y=r.requestAnimationFrame)||yn)(vn)),e.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==J&&(n.__=n.__V),n.i=void 0,n.__V=J}))),q=z=null},r.__c=function(n,e){e.some((function(n){try{n.__h.forEach(bn),n.__h=n.__h.filter((function(n){return!n.__||gn(n)}))}catch(o){e.some((function(n){n.__h&&(n.__h=[])})),e=[],r.__e(o,n.__v)}})),nn&&nn(n,e)},r.unmount=function(n){en&&en(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{bn(n)}catch(n){e=n}})),t.__H=void 0,e&&r.__e(e,t.__v))};var mn="function"==typeof requestAnimationFrame;function yn(n){var e,t=function(){clearTimeout(_),mn&&cancelAnimationFrame(e),setTimeout(n)},_=setTimeout(t,100);mn&&(e=requestAnimationFrame(t))}function bn(n){var e=z,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),z=e}function gn(n){var e=z;n.__c=n.__(),z=e}function kn(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function Cn(n,e){return"function"==typeof e?e(n):e}function En(n,e){for(var t in e)n[t]=e[t];return n}function Sn(n,e){for(var t in n)if("__source"!==t&&!(t in e))return!0;for(var _ in e)if("__source"!==_&&n[_]!==e[_])return!0;return!1}function xn(n,e){return n===e&&(0!==n||1/n==1/e)||n!=n&&e!=e}function Nn(n){this.props=n}function Pn(n,e){function t(n){var t=this.props.ref,_=t==n.ref;return!_&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!_:Sn(this.props,n)}function _(e){return this.shouldComponentUpdate=t,v(n,e)}return _.displayName="Memo("+(n.displayName||n.name)+")",_.prototype.isReactComponent=!0,_.__f=!0,_}(Nn.prototype=new g).isPureReactComponent=!0,Nn.prototype.shouldComponentUpdate=function(n,e){return Sn(this.props,n)||Sn(this.state,e)};var Tn=r.__b;r.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Tn&&Tn(n)};var Un="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function wn(n){function e(e){var t=En({},e);return delete t.ref,n(t,e.ref||null)}return e.$$typeof=Un,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(n.displayName||n.name)+")",e}var On=function(n,e){return null==n?null:P(P(n).map(e))},Rn={map:On,forEach:On,count:function(n){return n?P(n).length:0},only:function(n){var e=P(n);if(1!==e.length)throw"Children.only";return e[0]},toArray:P},Hn=r.__e;r.__e=function(n,e,t,_){if(n.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return null==e.__e&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e);Hn(n,e,t,_)};var Dn=r.unmount;function An(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach((function(n){"function"==typeof n.__c&&n.__c()})),n.__c.__H=null),null!=(n=En({},n)).__c&&(n.__c.__P===t&&(n.__c.__P=e),n.__c=null),n.__k=n.__k&&n.__k.map((function(n){return An(n,e,t)}))),n}function Ln(n,e,t){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map((function(n){return Ln(n,e,t)})),n.__c&&n.__c.__P===e&&(n.__e&&t.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=t)),n}function Wn(){this.__u=0,this.t=null,this.__b=null}function Vn(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function In(n){var e,t,_;function r(r){if(e||(e=n()).then((function(n){t=n.default||n}),(function(n){_=n})),_)throw _;if(!t)throw e;return v(t,r)}return r.displayName="Lazy",r.__f=!0,r}function Fn(){this.u=null,this.o=null}r.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&!0===n.__h&&(n.type=null),Dn&&Dn(n)},(Wn.prototype=new g).__c=function(n,e){var t=e.__c,_=this;null==_.t&&(_.t=[]),_.t.push(t);var r=Vn(_.__v),o=!1,u=function(){o||(o=!0,t.__R=null,r?r(i):i())};t.__R=u;var i=function(){if(!--_.__u){if(_.state.__a){var n=_.state.__a;_.__v.__k[0]=Ln(n,n.__c.__P,n.__c.__O)}var e;for(_.setState({__a:_.__b=null});e=_.t.pop();)e.forceUpdate()}},l=!0===e.__h;_.__u++||l||_.setState({__a:_.__b=_.__v.__k[0]}),n.then(u,u)},Wn.prototype.componentWillUnmount=function(){this.t=[]},Wn.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=An(this.__b,t,_.__O=_.__P)}this.__b=null}var r=e.__a&&v(b,null,n.fallback);return r&&(r.__h=null),[v(b,null,e.__a?null:n.children),r]};var Mn=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};function Bn(n){return this.getChildContext=function(){return n.context},n.children}function $n(n){var e=this,t=n.i;e.componentWillUnmount=function(){F(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),n.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),F(v(Bn,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function jn(n,e){var t=v($n,{__v:n,i:e});return t.containerInfo=e,t}(Fn.prototype=new g).__a=function(n){var e=this,t=Vn(e.__v),_=e.o.get(n);return _[0]++,function(r){var o=function(){e.props.revealOrder?(_.push(r),Mn(e,n,_)):r()};t?t(o):o()}},Fn.prototype.render=function(n){this.u=null,this.o=new Map;var e=P(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},Fn.prototype.componentDidUpdate=Fn.prototype.componentDidMount=function(){var n=this;this.o.forEach((function(e,t){Mn(n,t,e)}))};var zn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,qn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Yn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Gn=/[A-Z0-9]/g,Zn="undefined"!=typeof document,Jn=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function Kn(n,e,t){return null==e.__k&&(e.textContent=""),F(n,e),"function"==typeof t&&t(),n?n.__c:null}function Qn(n,e,t){return M(n,e),"function"==typeof t&&t(),n?n.__c:null}g.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(n){Object.defineProperty(g.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})}));var Xn=r.event;function ne(){}function ee(){return this.cancelBubble}function te(){return this.defaultPrevented}r.event=function(n){return Xn&&(n=Xn(n)),n.persist=ne,n.isPropagationStopped=ee,n.isDefaultPrevented=te,n.nativeEvent=n};var _e,re={enumerable:!1,configurable:!0,get:function(){return this.class}},oe=r.vnode;r.vnode=function(n){"string"==typeof n.type&&function(n){var e=n.props,t=n.type,_={};for(var r in e){var o=e[r];if(!("value"===r&&"defaultValue"in e&&null==o||Zn&&"children"===r&&"noscript"===t||"class"===r||"className"===r)){var u=r.toLowerCase();"defaultValue"===r&&"value"in e&&null==e.value?r="value":"download"===r&&!0===o?o="":"ondoubleclick"===u?r="ondblclick":"onchange"!==u||"input"!==t&&"textarea"!==t||Jn(e.type)?"onfocus"===u?r="onfocusin":"onblur"===u?r="onfocusout":Yn.test(r)?r=u:-1===t.indexOf("-")&&qn.test(r)?r=r.replace(Gn,"-$&").toLowerCase():null===o&&(o=void 0):u=r="oninput","oninput"===u&&_[r=u]&&(r="oninputCapture"),_[r]=o}}"select"==t&&_.multiple&&Array.isArray(_.value)&&(_.value=P(e.children).forEach((function(n){n.props.selected=-1!=_.value.indexOf(n.props.value)}))),"select"==t&&null!=_.defaultValue&&(_.value=P(e.children).forEach((function(n){n.props.selected=_.multiple?-1!=_.defaultValue.indexOf(n.props.value):_.defaultValue==n.props.value}))),e.class&&!e.className?(_.class=e.class,Object.defineProperty(_,"className",re)):(e.className&&!e.class||e.class&&e.className)&&(_.class=_.className=e.className),n.props=_}(n),n.$$typeof=zn,oe&&oe(n)};var ue=r.__r;r.__r=function(n){ue&&ue(n),_e=n.__c};var ie=r.diffed;r.diffed=function(n){ie&&ie(n);var e=n.props,t=n.__e;null!=t&&"textarea"===n.type&&"value"in e&&e.value!==t.value&&(t.value=null==e.value?"":e.value),_e=null};var le={ReactCurrentDispatcher:{current:{readContext:function(n){return _e.__n[n.__c].props.value}}}},ce="17.0.2";function fe(n){return v.bind(null,n)}function ae(n){return!!n&&n.$$typeof===zn}function se(n){return ae(n)?B.apply(null,arguments):n}function pe(n){return!!n.__k&&(F(null,n),!0)}function de(n){return n&&(n.base||1===n.nodeType&&n)||null}var he=function(n,e){return n(e)},ve=function(n,e){return n(e)},me=b;function ye(n){n()}function be(n){return n}function ge(){return[!1,ye]}var ke=un;function Ce(n,e){var t=e(),_=_n({h:{__:t,v:e}}),r=_[0].h,o=_[1];return un((function(){r.__=t,r.v=e,xn(r.__,e())||o({h:r})}),[n,t,e]),on((function(){return xn(r.__,r.v())||o({h:r}),n((function(){xn(r.__,r.v())||o({h:r})}))}),[n]),t}var Ee={useState:_n,useId:hn,useReducer:rn,useEffect:on,useLayoutEffect:un,useInsertionEffect:un,useTransition:ge,useDeferredValue:be,useSyncExternalStore:Ce,startTransition:ye,useRef:ln,useImperativeHandle:cn,useMemo:fn,useCallback:an,useContext:sn,useDebugValue:pn,version:"17.0.2",Children:Rn,render:Kn,hydrate:Qn,unmountComponentAtNode:pe,createPortal:jn,createElement:v,createContext:$,createFactory:fe,cloneElement:se,createRef:y,Fragment:b,isValidElement:ae,findDOMNode:de,Component:g,PureComponent:Nn,memo:Pn,forwardRef:wn,flushSync:ve,unstable_batchedUpdates:he,StrictMode:b,Suspense:Wn,SuspenseList:Fn,lazy:In,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:le}},92703:function(n,e,t){"use strict";var _=t(50414);function r(){}function o(){}o.resetWarningCache=r,n.exports=function(){function n(n,e,t,r,o,u){if(u!==_){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:r};return t.PropTypes=t,t}},45697:function(n,e,t){n.exports=t(92703)()},50414:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=framework-b2e9a7774764615d3912.js.map