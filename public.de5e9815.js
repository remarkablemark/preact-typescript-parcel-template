!function(){var e,_,n,t,l,o,r,u,i,s,f,c,p,a,h,d,v,y={},m=[],g=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,b=Array.isArray;function k(e,_){for(var n in _)e[n]=_[n];return e}function w(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function x(e,_,n,t,l){var o={type:e,props:_,key:n,ref:t,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==l?++i:l,__i:-1,__u:0};return null==l&&null!=u.vnode&&u.vnode(o),o}function P(e){return e.children}function S(e,_){this.props=e,this.context=_}function C(e,_){if(null==_)return e.__?C(e.__,e.__i+1):null;for(var n;_<e.__k.length;_++)if(null!=(n=e.__k[_])&&null!=n.__e)return n.__e;return"function"==typeof e.type?C(e):null}function T(e){(!e.__d&&(e.__d=!0)&&s.push(e)&&!U.__r++||f!=u.debounceRendering)&&((f=u.debounceRendering)||c)(U)}function U(){for(var e,_,n,t,l,o,r=1;s.length;)s.length>r&&s.sort(p),e=s.shift(),r=s.length,e.__d&&(_=void 0,t=(n=e.__v).__e,l=[],o=[],e.__P&&((_=k({},n)).__v=n.__v+1,u.vnode&&u.vnode(_),W(e.__P,_,n,e.__n,e.__P.namespaceURI,32&n.__u?[t]:null,l,null==t?C(n):t,!!(32&n.__u),o),_.__v=n.__v,_.__.__k[_.__i]=_,F(l,_,o),_.__e!=t&&function e(_){var n,t;if(null!=(_=_.__)&&null!=_.__c){for(_.__e=_.__c.base=null,n=0;n<_.__k.length;n++)if(null!=(t=_.__k[n])&&null!=t.__e){_.__e=_.__c.base=t.__e;break}return e(_)}}(_)));U.__r=0}function D(e,_,n,t,l,o,r,i,s,f,c){var p,a,h,d,v,g,k=t&&t.__k||m,S=_.length;for(s=function(e,_,n,t,l){var o,r,i,s,f,c=n.length,p=c,a=0;for(e.__k=Array(l),o=0;o<l;o++)null!=(r=_[o])&&"boolean"!=typeof r&&"function"!=typeof r?(s=o+a,(r=e.__k[o]="string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?x(null,r,null,null,null):b(r)?x(P,{children:r},null,null,null):null==r.constructor&&r.__b>0?x(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r).__=e,r.__b=e.__b+1,i=null,-1!=(f=r.__i=function(e,_,n,t){var l,o,r=e.key,u=e.type,i=_[n];if(null===i&&null==e.key||i&&r==i.key&&u==i.type&&0==(2&i.__u))return n;if(t>+(null!=i&&0==(2&i.__u)))for(l=n-1,o=n+1;l>=0||o<_.length;){if(l>=0){if((i=_[l])&&0==(2&i.__u)&&r==i.key&&u==i.type)return l;l--}if(o<_.length){if((i=_[o])&&0==(2&i.__u)&&r==i.key&&u==i.type)return o;o++}}return -1}(r,n,s,p))&&(p--,(i=n[f])&&(i.__u|=2)),null==i||null==i.__v?(-1==f&&(l>c?a--:l<c&&a++),"function"!=typeof r.type&&(r.__u|=4)):f!=s&&(f==s-1?a--:f==s+1?a++:(f>s?a--:a++,r.__u|=4))):e.__k[o]=null;if(p)for(o=0;o<c;o++)null!=(i=n[o])&&0==(2&i.__u)&&(i.__e==t&&(t=C(i)),function e(_,n,t){var l,o;if(u.unmount&&u.unmount(_),(l=_.ref)&&(l.current&&l.current!=_.__e||N(l,null,n)),null!=(l=_.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){u.__e(e,n)}l.base=l.__P=null}if(l=_.__k)for(o=0;o<l.length;o++)l[o]&&e(l[o],n,t||"function"!=typeof _.type);t||w(_.__e),_.__c=_.__=_.__e=void 0}(i,i));return t}(n,_,k,s,S),p=0;p<S;p++)null!=(h=n.__k[p])&&(a=-1==h.__i?y:k[h.__i]||y,h.__i=p,g=W(e,h,a,l,o,r,i,s,f,c),d=h.__e,h.ref&&a.ref!=h.ref&&(a.ref&&N(a.ref,null,h),c.push(h.ref,h.__c||d,h)),null==v&&null!=d&&(v=d),4&h.__u||a.__k===h.__k?s=function e(_,n,t){var l,o;if("function"==typeof _.type){for(l=_.__k,o=0;l&&o<l.length;o++)l[o]&&(l[o].__=_,n=e(l[o],n,t));return n}_.__e!=n&&(n&&_.type&&!t.contains(n)&&(n=C(_)),t.insertBefore(_.__e,n||null),n=_.__e);do n=n&&n.nextSibling;while(null!=n&&8==n.nodeType)return n}(h,s,e):"function"==typeof h.type&&void 0!==g?s=g:d&&(s=d.nextSibling),h.__u&=-7);return n.__e=v,s}function M(e,_,n){"-"==_[0]?e.setProperty(_,null==n?"":n):e[_]=null==n?"":"number"!=typeof n||g.test(_)?n:n+"px"}function E(e,_,n,t,l){var o;e:if("style"==_)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(_ in t)n&&_ in n||M(e.style,_,"");if(n)for(_ in n)t&&n[_]==t[_]||M(e.style,_,n[_])}else if("o"==_[0]&&"n"==_[1])o=_!=(_=_.replace(a,"$1")),_=_.toLowerCase()in e||"onFocusOut"==_||"onFocusIn"==_?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=n,n?t?n.u=t.u:(n.u=h,e.addEventListener(_,o?v:d,o)):e.removeEventListener(_,o?v:d,o);else{if("http://www.w3.org/2000/svg"==l)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=_&&"height"!=_&&"href"!=_&&"list"!=_&&"form"!=_&&"tabIndex"!=_&&"download"!=_&&"rowSpan"!=_&&"colSpan"!=_&&"role"!=_&&"popover"!=_&&_ in e)try{e[_]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!=_[4]?e.removeAttribute(_):e.setAttribute(_,"popover"==_&&1==n?"":n))}}function L(e){return function(_){if(this.l){var n=this.l[_.type+e];if(null==_.t)_.t=h++;else if(_.t<n.u)return;return n(u.event?u.event(_):_)}}}function W(e,_,n,t,l,o,i,s,f,c){var p,a,h,d,v,m,g,x,T,U,M,L,W,F,N,I,H,R=_.type;if(null!=_.constructor)return null;128&n.__u&&(f=!!(32&n.__u),o=[s=_.__e=n.__e]),(p=u.__b)&&p(_);e:if("function"==typeof R)try{if(x=_.props,T="prototype"in R&&R.prototype.render,U=(p=R.contextType)&&t[p.__c],M=p?U?U.props.value:p.__:t,n.__c?g=(a=_.__c=n.__c).__=a.__E:(T?_.__c=a=new R(x,M):(_.__c=a=new S(x,M),a.constructor=R,a.render=A),U&&U.sub(a),a.props=x,a.state||(a.state={}),a.context=M,a.__n=t,h=a.__d=!0,a.__h=[],a._sb=[]),T&&null==a.__s&&(a.__s=a.state),T&&null!=R.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=k({},a.__s)),k(a.__s,R.getDerivedStateFromProps(x,a.__s))),d=a.props,v=a.state,a.__v=_,h)T&&null==R.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),T&&null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(T&&null==R.getDerivedStateFromProps&&x!==d&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(x,M),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(x,a.__s,M)||_.__v==n.__v){for(_.__v!=n.__v&&(a.props=x,a.state=a.__s,a.__d=!1),_.__e=n.__e,_.__k=n.__k,_.__k.some(function(e){e&&(e.__=_)}),L=0;L<a._sb.length;L++)a.__h.push(a._sb[L]);a._sb=[],a.__h.length&&i.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(x,a.__s,M),T&&null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(d,v,m)})}if(a.context=M,a.props=x,a.__P=e,a.__e=!1,W=u.__r,F=0,T){for(a.state=a.__s,a.__d=!1,W&&W(_),p=a.render(a.props,a.state,a.context),N=0;N<a._sb.length;N++)a.__h.push(a._sb[N]);a._sb=[]}else do a.__d=!1,W&&W(_),p=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++F<25)a.state=a.__s,null!=a.getChildContext&&(t=k(k({},t),a.getChildContext())),T&&!h&&null!=a.getSnapshotBeforeUpdate&&(m=a.getSnapshotBeforeUpdate(d,v)),I=p,null!=p&&p.type===P&&null==p.key&&(I=function e(_){return"object"!=typeof _||null==_||_.__b&&_.__b>0?_:b(_)?_.map(e):k({},_)}(p.props.children)),s=D(e,b(I)?I:[I],_,n,t,l,o,i,s,f,c),a.base=_.__e,_.__u&=-161,a.__h.length&&i.push(a),g&&(a.__E=a.__=null)}catch(e){if(_.__v=null,f||null!=o)if(e.then){for(_.__u|=f?160:128;s&&8==s.nodeType&&s.nextSibling;)s=s.nextSibling;o[o.indexOf(s)]=null,_.__e=s}else for(H=o.length;H--;)w(o[H]);else _.__e=n.__e,_.__k=n.__k;u.__e(e,_,n)}else null==o&&_.__v==n.__v?(_.__k=n.__k,_.__e=n.__e):s=_.__e=function(e,_,n,t,l,o,i,s,f){var c,p,a,h,d,v,m,g=n.props,k=_.props,x=_.type;if("svg"==x?l="http://www.w3.org/2000/svg":"math"==x?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),null!=o){for(c=0;c<o.length;c++)if((d=o[c])&&"setAttribute"in d==!!x&&(x?d.localName==x:3==d.nodeType)){e=d,o[c]=null;break}}if(null==e){if(null==x)return document.createTextNode(k);e=document.createElementNS(l,x,k.is&&k),s&&(u.__m&&u.__m(_,o),s=!1),o=null}if(null==x)g===k||s&&e.data==k||(e.data=k);else{if(o=o&&r.call(e.childNodes),g=n.props||y,!s&&null!=o)for(g={},c=0;c<e.attributes.length;c++)g[(d=e.attributes[c]).name]=d.value;for(c in g)if(d=g[c],"children"==c);else if("dangerouslySetInnerHTML"==c)a=d;else if(!(c in k)){if("value"==c&&"defaultValue"in k||"checked"==c&&"defaultChecked"in k)continue;E(e,c,null,d,l)}for(c in k)d=k[c],"children"==c?h=d:"dangerouslySetInnerHTML"==c?p=d:"value"==c?v=d:"checked"==c?m=d:s&&"function"!=typeof d||g[c]===d||E(e,c,d,g[c],l);if(p)s||a&&(p.__html==a.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),_.__k=[];else if(a&&(e.innerHTML=""),D("template"==_.type?e.content:e,b(h)?h:[h],_,n,t,"foreignObject"==x?"http://www.w3.org/1999/xhtml":l,o,i,o?o[0]:n.__k&&C(n,0),s,f),null!=o)for(c=o.length;c--;)w(o[c]);s||(c="value","progress"==x&&null==v?e.removeAttribute("value"):null==v||v===e[c]&&("progress"!=x||v)&&("option"!=x||v==g[c])||E(e,c,v,g[c],l),c="checked",null!=m&&m!=e[c]&&E(e,c,m,g[c],l))}return e}(n.__e,_,n,t,l,o,i,f,c);return(p=u.diffed)&&p(_),128&_.__u?void 0:s}function F(e,_,n){for(var t=0;t<n.length;t++)N(n[t],n[++t],n[++t]);u.__c&&u.__c(_,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(e){e.call(_)})}catch(e){u.__e(e,_.__v)}})}function N(e,_,n){try{if("function"==typeof e){var t="function"==typeof e.__u;t&&e.__u(),t&&null==_||(e.__u=e(_))}else e.current=_}catch(e){u.__e(e,n)}}function A(e,_,n){return this.constructor(e,n)}r=m.slice,u={__e:function(e,_,n,t){for(var l,o,r;_=_.__;)if((l=_.__c)&&!l.__)try{if((o=l.constructor)&&null!=o.getDerivedStateFromError&&(l.setState(o.getDerivedStateFromError(e)),r=l.__d),null!=l.componentDidCatch&&(l.componentDidCatch(e,t||{}),r=l.__d),r)return l.__E=l}catch(_){e=_}throw e}},i=0,S.prototype.setState=function(e,_){var n;n=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=k({},this.state),"function"==typeof e&&(e=e(k({},n),this.props)),e&&k(n,e),null!=e&&this.__v&&(_&&this._sb.push(_),T(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),T(this))},S.prototype.render=P,s=[],c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p=function(e,_){return e.__v.__b-_.__v.__b},U.__r=0,a=/(PointerCapture)$|Capture$/i,h=0,d=L(!1),v=L(!0);var I=0;function H(e,_,n,t,l,o){_||(_={});var r,i,s=_;if("ref"in s)for(i in s={},_)"ref"==i?r=_[i]:s[i]=_[i];var f={type:e,props:s,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--I,__i:-1,__u:0,__source:l,__self:o};if("function"==typeof e&&(r=e.defaultProps))for(i in r)void 0===s[i]&&(s[i]=r[i]);return u.vnode&&u.vnode(f),f}e=H(function(){return H("h1",{children:"Welcome to Preact TypeScript Parcel!"})},{}),(_=document.getElementById("root"))==document&&(_=document.documentElement),u.__&&u.__(e,_),t=n&&n.__k||_.__k,l=[],o=[],W(_,e=(n||_).__k=function(e,_,n){var t,l,o,u={};for(o in _)"key"==o?t=_[o]:"ref"==o?l=_[o]:u[o]=_[o];if(arguments.length>2&&(u.children=arguments.length>3?r.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)null==u[o]&&(u[o]=e.defaultProps[o]);return x(e,u,t,l,null)}(P,null,[e]),t||y,y,_.namespaceURI,n?[n]:t?null:_.firstChild?r.call(_.childNodes):null,l,n?n:t?t.__e:_.firstChild,!1,o),F(l,e,o)}();
//# sourceMappingURL=public.de5e9815.js.map
