
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
!function(root, factory) {
	 if (typeof define === 'function' && define.amd) {
		 define(['jquery'], factory);
	 } else if (typeof exports === 'object') {
		 module.exports = factory(require('jquery'));
	 } else {
		 factory(root.jQuery);
	 }
}(this, function($) {

/*!
 @package noty - jQuery Notification Plugin
 @version version: 2.3.7
 @contributors https://github.com/needim/noty/graphs/contributors

 @documentation Examples and Documentation - http://needim.github.com/noty/

 @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php
 */

    if(typeof Object.create !== 'function') {
        Object.create = function(o) {
            function F() {
            }

            F.prototype = o;
            return new F();
        };
    }

    var NotyObject = {

        init: function(options) {

            // Mix in the passed in options with the default options
            this.options = $.extend({}, $.noty.defaults, options);

            this.options.layout = (this.options.custom) ? $.noty.layouts['inline'] : $.noty.layouts[this.options.layout];

            if($.noty.themes[this.options.theme])
                this.options.theme = $.noty.themes[this.options.theme];
            else
                options.themeClassName = this.options.theme;

            delete options.layout;
            delete options.theme;

            this.options = $.extend({}, this.options, this.options.layout.options);
            this.options.id = 'noty_' + (new Date().getTime() * Math.floor(Math.random() * 1000000));

            this.options = $.extend({}, this.options, options);

            // Build the noty dom initial structure
            this._build();

            // return this so we can chain/use the bridge with less code.
            return this;
        }, // end init

        _build: function() {

            // Generating noty bar
            var $bar = $('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr('id', this.options.id);
            $bar.append(this.options.template).find('.noty_text').html(this.options.text);

            this.$bar = (this.options.layout.parent.object !== null) ? $(this.options.layout.parent.object).css(this.options.layout.parent.css).append($bar) : $bar;

            if(this.options.themeClassName)
                this.$bar.addClass(this.options.themeClassName).addClass('noty_container_type_' + this.options.type);

            // Set buttons if available
            if(this.options.buttons) {

                // If we have button disable closeWith & timeout options
                this.options.closeWith = [];
                this.options.timeout = false;

                var $buttons = $('<div/>').addClass('noty_buttons');

                (this.options.layout.parent.object !== null) ? this.$bar.find('.noty_bar').append($buttons) : this.$bar.append($buttons);

                var self = this;

                $.each(this.options.buttons, function(i, button) {
                    var $button = $('<button/>').addClass((button.addClass) ? button.addClass : 'gray').html(button.text).attr('id', button.id ? button.id : 'button-' + i)
                        .attr('title', button.title)
                        .appendTo(self.$bar.find('.noty_buttons'))
                        .on('click', function(event) {
                            if($.isFunction(button.onClick)) {
                                button.onClick.call($button, self, event);
                            }
                        });
                });
            }

            // For easy access
            this.$message = this.$bar.find('.noty_message');
            this.$closeButton = this.$bar.find('.noty_close');
            this.$buttons = this.$bar.find('.noty_buttons');

            $.noty.store[this.options.id] = this; // store noty for api

        }, // end _build

        show: function() {

            var self = this;

            (self.options.custom) ? self.options.custom.find(self.options.layout.container.selector).append(self.$bar) : $(self.options.layout.container.selector).append(self.$bar);

            if(self.options.theme && self.options.theme.style)
                self.options.theme.style.apply(self);

            ($.type(self.options.layout.css) === 'function') ? this.options.layout.css.apply(self.$bar) : self.$bar.css(this.options.layout.css || {});

            self.$bar.addClass(self.options.layout.addClass);

            self.options.layout.container.style.apply($(self.options.layout.container.selector), [self.options.within]);

            self.showing = true;

            if(self.options.theme && self.options.theme.style)
                self.options.theme.callback.onShow.apply(this);

            if($.inArray('click', self.options.closeWith) > -1)
                self.$bar.css('cursor', 'pointer').one('click', function(evt) {
                    self.stopPropagation(evt);
                    if(self.options.callback.onCloseClick) {
                        self.options.callback.onCloseClick.apply(self);
                    }
                    self.close();
                });

            if($.inArray('hover', self.options.closeWith) > -1)
                self.$bar.one('mouseenter', function() {
                    self.close();
                });

            if($.inArray('button', self.options.closeWith) > -1)
                self.$closeButton.one('click', function(evt) {
                    self.stopPropagation(evt);
                    self.close();
                });

            if($.inArray('button', self.options.closeWith) == -1)
                self.$closeButton.remove();

            if(self.options.callback.onShow)
                self.options.callback.onShow.apply(self);

            if (typeof self.options.animation.open == 'string') {
                self.$bar.css('height', self.$bar.innerHeight());
                self.$bar.on('click',function(e){
                    self.wasClicked = true;
                });
                self.$bar.show().addClass(self.options.animation.open).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    if(self.options.callback.afterShow) self.options.callback.afterShow.apply(self);
                    self.showing = false;
                    self.shown = true;
                    if(self.hasOwnProperty('wasClicked')){
                        self.$bar.off('click',function(e){
                            self.wasClicked = true;
                        });
                        self.close();
                    }
                });

            } else {
                self.$bar.animate(
                    self.options.animation.open,
                    self.options.animation.speed,
                    self.options.animation.easing,
                    function() {
                        if(self.options.callback.afterShow) self.options.callback.afterShow.apply(self);
                        self.showing = false;
                        self.shown = true;
                    });
            }

            // If noty is have a timeout option
            if(self.options.timeout)
                self.$bar.delay(self.options.timeout).promise().done(function() {
                    self.close();
                });

            return this;

        }, // end show

        close: function() {

            if(this.closed) return;
            if(this.$bar && this.$bar.hasClass('i-am-closing-now')) return;

            var self = this;

            if(this.showing) {
                self.$bar.queue(
                    function() {
                        self.close.apply(self);
                    }
                );
                return;
            }

            if(!this.shown && !this.showing) { // If we are still waiting in the queue just delete from queue
                var queue = [];
                $.each($.noty.queue, function(i, n) {
                    if(n.options.id != self.options.id) {
                        queue.push(n);
                    }
                });
                $.noty.queue = queue;
                return;
            }

            self.$bar.addClass('i-am-closing-now');

            if(self.options.callback.onClose) {
                self.options.callback.onClose.apply(self);
            }

            if (typeof self.options.animation.close == 'string') {
                self.$bar.addClass(self.options.animation.close).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    if(self.options.callback.afterClose) self.options.callback.afterClose.apply(self);
                    self.closeCleanUp();
                });
            } else {
                self.$bar.clearQueue().stop().animate(
                    self.options.animation.close,
                    self.options.animation.speed,
                    self.options.animation.easing,
                    function() {
                        if(self.options.callback.afterClose) self.options.callback.afterClose.apply(self);
                    })
                    .promise().done(function() {
                        self.closeCleanUp();
                    });
            }

        }, // end close

        closeCleanUp: function() {

            var self = this;

            // Modal Cleaning
            if(self.options.modal) {
                $.notyRenderer.setModalCount(-1);
                if($.notyRenderer.getModalCount() == 0) $('.noty_modal').fadeOut(self.options.animation.fadeSpeed, function() {
                    $(this).remove();
                });
            }

            // Layout Cleaning
            $.notyRenderer.setLayoutCountFor(self, -1);
            if($.notyRenderer.getLayoutCountFor(self) == 0) $(self.options.layout.container.selector).remove();

            // Make sure self.$bar has not been removed before attempting to remove it
            if(typeof self.$bar !== 'undefined' && self.$bar !== null) {

                if (typeof self.options.animation.close == 'string') {
                    self.$bar.css('transition', 'all 100ms ease').css('border', 0).css('margin', 0).height(0);
                    self.$bar.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
                        self.$bar.remove();
                        self.$bar = null;
                        self.closed = true;

                        if(self.options.theme.callback && self.options.theme.callback.onClose) {
                            self.options.theme.callback.onClose.apply(self);
                        }
                    });
                } else {
                    self.$bar.remove();
                    self.$bar = null;
                    self.closed = true;
                }
            }

            delete $.noty.store[self.options.id]; // deleting noty from store

            if(self.options.theme.callback && self.options.theme.callback.onClose) {
                self.options.theme.callback.onClose.apply(self);
            }

            if(!self.options.dismissQueue) {
                // Queue render
                $.noty.ontap = true;

                $.notyRenderer.render();
            }

            if(self.options.maxVisible > 0 && self.options.dismissQueue) {
                $.notyRenderer.render();
            }

        }, // end close clean up

        setText: function(text) {
            if(!this.closed) {
                this.options.text = text;
                this.$bar.find('.noty_text').html(text);
            }
            return this;
        },

        setType: function(type) {
            if(!this.closed) {
                this.options.type = type;
                this.options.theme.style.apply(this);
                this.options.theme.callback.onShow.apply(this);
            }
            return this;
        },

        setTimeout: function(time) {
            if(!this.closed) {
                var self = this;
                this.options.timeout = time;
                self.$bar.delay(self.options.timeout).promise().done(function() {
                    self.close();
                });
            }
            return this;
        },

        stopPropagation: function(evt) {
            evt = evt || window.event;
            if(typeof evt.stopPropagation !== "undefined") {
                evt.stopPropagation();
            }
            else {
                evt.cancelBubble = true;
            }
        },

        closed : false,
        showing: false,
        shown  : false

    }; // end NotyObject

    $.notyRenderer = {};

    $.notyRenderer.init = function(options) {

        // Renderer creates a new noty
        var notification = Object.create(NotyObject).init(options);

        if(notification.options.killer)
            $.noty.closeAll();

        (notification.options.force) ? $.noty.queue.unshift(notification) : $.noty.queue.push(notification);

        $.notyRenderer.render();

        return ($.noty.returns == 'object') ? notification : notification.options.id;
    };

    $.notyRenderer.render = function() {

        var instance = $.noty.queue[0];

        if($.type(instance) === 'object') {
            if(instance.options.dismissQueue) {
                if(instance.options.maxVisible > 0) {
                    if($(instance.options.layout.container.selector + ' > li').length < instance.options.maxVisible) {
                        $.notyRenderer.show($.noty.queue.shift());
                    }
                    else {

                    }
                }
                else {
                    $.notyRenderer.show($.noty.queue.shift());
                }
            }
            else {
                if($.noty.ontap) {
                    $.notyRenderer.show($.noty.queue.shift());
                    $.noty.ontap = false;
                }
            }
        }
        else {
            $.noty.ontap = true; // Queue is over
        }

    };

    $.notyRenderer.show = function(notification) {

        if(notification.options.modal) {
            $.notyRenderer.createModalFor(notification);
            $.notyRenderer.setModalCount(+1);
        }

        // Where is the container?
        if(notification.options.custom) {
            if(notification.options.custom.find(notification.options.layout.container.selector).length == 0) {
                notification.options.custom.append($(notification.options.layout.container.object).addClass('i-am-new'));
            }
            else {
                notification.options.custom.find(notification.options.layout.container.selector).removeClass('i-am-new');
            }
        }
        else {
            if($(notification.options.layout.container.selector).length == 0) {
                $('body').append($(notification.options.layout.container.object).addClass('i-am-new'));
            }
            else {
                $(notification.options.layout.container.selector).removeClass('i-am-new');
            }
        }

        $.notyRenderer.setLayoutCountFor(notification, +1);

        notification.show();
    };

    $.notyRenderer.createModalFor = function(notification) {
        if($('.noty_modal').length == 0) {
            var modal = $('<div/>').addClass('noty_modal').addClass(notification.options.theme).data('noty_modal_count', 0);

            if(notification.options.theme.modal && notification.options.theme.modal.css)
                modal.css(notification.options.theme.modal.css);

            modal.prependTo($('body')).fadeIn(notification.options.animation.fadeSpeed);

            if($.inArray('backdrop', notification.options.closeWith) > -1)
                modal.on('click', function(e) {
                    $.noty.closeAll();
                });
        }
    };

    $.notyRenderer.getLayoutCountFor = function(notification) {
        return $(notification.options.layout.container.selector).data('noty_layout_count') || 0;
    };

    $.notyRenderer.setLayoutCountFor = function(notification, arg) {
        return $(notification.options.layout.container.selector).data('noty_layout_count', $.notyRenderer.getLayoutCountFor(notification) + arg);
    };

    $.notyRenderer.getModalCount = function() {
        return $('.noty_modal').data('noty_modal_count') || 0;
    };

    $.notyRenderer.setModalCount = function(arg) {
        return $('.noty_modal').data('noty_modal_count', $.notyRenderer.getModalCount() + arg);
    };

    // This is for custom container
    $.fn.noty = function(options) {
        options.custom = $(this);
        return $.notyRenderer.init(options);
    };

    $.noty = {};
    $.noty.queue = [];
    $.noty.ontap = true;
    $.noty.layouts = {};
    $.noty.themes = {};
    $.noty.returns = 'object';
    $.noty.store = {};

    $.noty.get = function(id) {
        return $.noty.store.hasOwnProperty(id) ? $.noty.store[id] : false;
    };

    $.noty.close = function(id) {
        return $.noty.get(id) ? $.noty.get(id).close() : false;
    };

    $.noty.setText = function(id, text) {
        return $.noty.get(id) ? $.noty.get(id).setText(text) : false;
    };

    $.noty.setType = function(id, type) {
        return $.noty.get(id) ? $.noty.get(id).setType(type) : false;
    };

    $.noty.clearQueue = function() {
        $.noty.queue = [];
    };

    $.noty.closeAll = function() {
        $.noty.clearQueue();
        $.each($.noty.store, function(id, noty) {
            noty.close();
        });
    };

    var windowAlert = window.alert;

    $.noty.consumeAlert = function(options) {
        window.alert = function(text) {
            if(options)
                options.text = text;
            else
                options = {text: text};

            $.notyRenderer.init(options);
        };
    };

    $.noty.stopConsumeAlert = function() {
        window.alert = windowAlert;
    };

    $.noty.defaults = {
        layout      : 'top',
        theme       : 'defaultTheme',
        type        : 'alert',
        text        : '',
        dismissQueue: true,
        template    : '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation   : {
            open  : {height: 'toggle'},
            close : {height: 'toggle'},
            easing: 'swing',
            speed : 500,
            fadeSpeed: 'fast',
        },
        timeout     : false,
        force       : false,
        modal       : false,
        maxVisible  : 5,
        killer      : false,
        closeWith   : ['click'],
        callback    : {
            onShow      : function() {
            },
            afterShow   : function() {
            },
            onClose     : function() {
            },
            afterClose  : function() {
            },
            onCloseClick: function() {
            }
        },
        buttons     : false
    };

    $(window).on('resize', function() {
        $.each($.noty.layouts, function(index, layout) {
            layout.container.style.apply($(layout.container.selector));
        });
    });

    // Helpers
    window.noty = function noty(options) {
        return $.notyRenderer.init(options);
    };

$.noty.layouts.bottom = {
    name     : 'bottom',
    options  : {},
    container: {
        object  : '<ul id="noty_bottom_layout_container" />',
        selector: 'ul#noty_bottom_layout_container',
        style   : function() {
            $(this).css({
                bottom       : 0,
                left         : '5%',
                position     : 'fixed',
                width        : '90%',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 9999999
            });
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none'
    },
    addClass : ''
};

$.noty.layouts.bottomCenter = {
    name     : 'bottomCenter',
    options  : { // overrides options

    },
    container: {
        object  : '<ul id="noty_bottomCenter_layout_container" />',
        selector: 'ul#noty_bottomCenter_layout_container',
        style   : function() {
            $(this).css({
                bottom       : 20,
                left         : 0,
                position     : 'fixed',
                width        : '310px',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            $(this).css({
                left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px'
            });
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};


$.noty.layouts.bottomLeft = {
    name     : 'bottomLeft',
    options  : { // overrides options

    },
    container: {
        object  : '<ul id="noty_bottomLeft_layout_container" />',
        selector: 'ul#noty_bottomLeft_layout_container',
        style   : function() {
            $(this).css({
                bottom       : 20,
                left         : 20,
                position     : 'fixed',
                width        : '310px',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            if(window.innerWidth < 600) {
                $(this).css({
                    left: 5
                });
            }
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};
$.noty.layouts.bottomRight = {
    name     : 'bottomRight',
    options  : { // overrides options

    },
    container: {
        object  : '<ul id="noty_bottomRight_layout_container" />',
        selector: 'ul#noty_bottomRight_layout_container',
        style   : function() {
            $(this).css({
                bottom       : 20,
                right        : 20,
                position     : 'fixed',
                width        : '310px',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            if(window.innerWidth < 600) {
                $(this).css({
                    right: 5
                });
            }
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};
$.noty.layouts.center = {
    name     : 'center',
    options  : { // overrides options

    },
    container: {
        object  : '<ul id="noty_center_layout_container" />',
        selector: 'ul#noty_center_layout_container',
        style   : function() {
            $(this).css({
                position     : 'fixed',
                width        : '310px',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            // getting hidden height
            var dupe = $(this).clone().css({visibility: "hidden", display: "block", position: "absolute", top: 0, left: 0}).attr('id', 'dupe');
            $("body").append(dupe);
            dupe.find('.i-am-closing-now').remove();
            dupe.find('li').css('display', 'block');
            var actual_height = dupe.height();
            dupe.remove();

            if($(this).hasClass('i-am-new')) {
                $(this).css({
                    left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px',
                    top : ($(window).height() - actual_height) / 2 + 'px'
                });
            }
            else {
                $(this).animate({
                    left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px',
                    top : ($(window).height() - actual_height) / 2 + 'px'
                }, 500);
            }

        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};
$.noty.layouts.centerLeft = {
    name     : 'centerLeft',
    options  : { // overrides options

    },
    container: {
        object  : '<ul id="noty_centerLeft_layout_container" />',
        selector: 'ul#noty_centerLeft_layout_container',
        style   : function() {
            $(this).css({
                left         : 20,
                position     : 'fixed',
                width        : '310px',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            // getting hidden height
            var dupe = $(this).clone().css({visibility: "hidden", display: "block", position: "absolute", top: 0, left: 0}).attr('id', 'dupe');
            $("body").append(dupe);
            dupe.find('.i-am-closing-now').remove();
            dupe.find('li').css('display', 'block');
            var actual_height = dupe.height();
            dupe.remove();

            if($(this).hasClass('i-am-new')) {
                $(this).css({
                    top: ($(window).height() - actual_height) / 2 + 'px'
                });
            }
            else {
                $(this).animate({
                    top: ($(window).height() - actual_height) / 2 + 'px'
                }, 500);
            }

            if(window.innerWidth < 600) {
                $(this).css({
                    left: 5
                });
            }

        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};

$.noty.layouts.centerRight = {
    name     : 'centerRight',
    options  : { // overrides options

    },
    container: {
        object  : '<ul id="noty_centerRight_layout_container" />',
        selector: 'ul#noty_centerRight_layout_container',
        style   : function() {
            $(this).css({
                right        : 20,
                position     : 'fixed',
                width        : '310px',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            // getting hidden height
            var dupe = $(this).clone().css({visibility: "hidden", display: "block", position: "absolute", top: 0, left: 0}).attr('id', 'dupe');
            $("body").append(dupe);
            dupe.find('.i-am-closing-now').remove();
            dupe.find('li').css('display', 'block');
            var actual_height = dupe.height();
            dupe.remove();

            if($(this).hasClass('i-am-new')) {
                $(this).css({
                    top: ($(window).height() - actual_height) / 2 + 'px'
                });
            }
            else {
                $(this).animate({
                    top: ($(window).height() - actual_height) / 2 + 'px'
                }, 500);
            }

            if(window.innerWidth < 600) {
                $(this).css({
                    right: 5
                });
            }

        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};
$.noty.layouts.inline = {
    name     : 'inline',
    options  : {},
    container: {
        object  : '<ul class="noty_inline_layout_container" />',
        selector: 'ul.noty_inline_layout_container',
        style   : function() {
            $(this).css({
                width        : '100%',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 9999999
            });
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none'
    },
    addClass : ''
};
$.noty.layouts.top = {
    name     : 'top',
    options  : {},
    container: {
        object  : '<ul id="noty_top_layout_container" />',
        selector: 'ul#noty_top_layout_container',
        style   : function() {
            $(this).css({
                top          : 0,
                left         : '5%',
                position     : 'fixed',
                width        : '90%',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 9999999
            });
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none'
    },
    addClass : ''
};
$.noty.layouts.topCenter = {
    name     : 'topCenter',
    options  : { // overrides options

    },
    container: {
        object  : '<ul id="noty_topCenter_layout_container" />',
        selector: 'ul#noty_topCenter_layout_container',
        style   : function() {
            $(this).css({
                top          : 20,
                left         : 0,
                position     : 'fixed',
                width        : '310px',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            $(this).css({
                left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px'
            });
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};

$.noty.layouts.topLeft = {
    name     : 'topLeft',
    options  : { // overrides options

    },
    container: {
        object  : '<ul id="noty_topLeft_layout_container" />',
        selector: 'ul#noty_topLeft_layout_container',
        style   : function() {
            $(this).css({
                top          : 20,
                left         : 20,
                position     : 'fixed',
                width        : '310px',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            if(window.innerWidth < 600) {
                $(this).css({
                    left: 5
                });
            }
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};
$.noty.layouts.topRight = {
    name     : 'topRight',
    options  : { // overrides options

    },
    container: {
        object  : '<ul id="noty_topRight_layout_container" />',
        selector: 'ul#noty_topRight_layout_container',
        style   : function() {
            $(this).css({
                top          : 20,
                right        : 20,
                position     : 'fixed',
                width        : '310px',
                height       : 'auto',
                margin       : 0,
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            if(window.innerWidth < 600) {
                $(this).css({
                    right: 5
                });
            }
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};
$.noty.themes.bootstrapTheme = {
    name: 'bootstrapTheme',
    modal: {
        css: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            zIndex: 10000,
            opacity: 0.6,
            display: 'none',
            left: 0,
            top: 0
        }
    },
    style: function() {

        var containerSelector = this.options.layout.container.selector;
        $(containerSelector).addClass('list-group');

        this.$closeButton.append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>');
        this.$closeButton.addClass('close');

        this.$bar.addClass( "list-group-item" ).css('padding', '0px');

        switch (this.options.type) {
            case 'alert': case 'notification':
                this.$bar.addClass( "list-group-item-info" );
                break;
            case 'warning':
                this.$bar.addClass( "list-group-item-warning" );
                break;
            case 'error':
                this.$bar.addClass( "list-group-item-danger" );
                break;
            case 'information':
                this.$bar.addClass("list-group-item-info");
                break;
            case 'success':
                this.$bar.addClass( "list-group-item-success" );
                break;
        }

        this.$message.css({
            fontSize: '13px',
            lineHeight: '16px',
            textAlign: 'center',
            padding: '8px 10px 9px',
            width: 'auto',
            position: 'relative'
        });
    },
    callback: {
        onShow: function() {  },
        onClose: function() {  }
    }
};


$.noty.themes.defaultTheme = {
    name    : 'defaultTheme',
    helpers : {
        borderFix: function() {
            if(this.options.dismissQueue) {
                var selector = this.options.layout.container.selector + ' ' + this.options.layout.parent.selector;
                switch(this.options.layout.name) {
                    case 'top':
                        $(selector).css({borderRadius: '0px 0px 0px 0px'});
                        $(selector).last().css({borderRadius: '0px 0px 5px 5px'});
                        break;
                    case 'topCenter':
                    case 'topLeft':
                    case 'topRight':
                    case 'bottomCenter':
                    case 'bottomLeft':
                    case 'bottomRight':
                    case 'center':
                    case 'centerLeft':
                    case 'centerRight':
                    case 'inline':
                        $(selector).css({borderRadius: '0px 0px 0px 0px'});
                        $(selector).first().css({'border-top-left-radius': '5px', 'border-top-right-radius': '5px'});
                        $(selector).last().css({'border-bottom-left-radius': '5px', 'border-bottom-right-radius': '5px'});
                        break;
                    case 'bottom':
                        $(selector).css({borderRadius: '0px 0px 0px 0px'});
                        $(selector).first().css({borderRadius: '5px 5px 0px 0px'});
                        break;
                    default:
                        break;
                }
            }
        }
    },
    modal   : {
        css: {
            position       : 'fixed',
            width          : '100%',
            height         : '100%',
            backgroundColor: '#000',
            zIndex         : 10000,
            opacity        : 0.6,
            display        : 'none',
            left           : 0,
            top            : 0
        }
    },
    style   : function() {

        this.$bar.css({
            overflow  : 'hidden',
            background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff"
        });

        this.$message.css({
            fontSize  : '13px',
            lineHeight: '16px',
            textAlign : 'center',
            padding   : '8px 10px 9px',
            width     : 'auto',
            position  : 'relative'
        });

        this.$closeButton.css({
            position  : 'absolute',
            top       : 4, right: 4,
            width     : 10, height: 10,
            background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
            display   : 'none',
            cursor    : 'pointer'
        });

        this.$buttons.css({
            padding        : 5,
            textAlign      : 'right',
            borderTop      : '1px solid #ccc',
            backgroundColor: '#fff'
        });

        this.$buttons.find('button').css({
            marginLeft: 5
        });

        this.$buttons.find('button:first').css({
            marginLeft: 0
        });

        this.$bar.on({
            mouseenter: function() {
                $(this).find('.noty_close').stop().fadeTo('normal', 1);
            },
            mouseleave: function() {
                $(this).find('.noty_close').stop().fadeTo('normal', 0);
            }
        });

        switch(this.options.layout.name) {
            case 'top':
                this.$bar.css({
                    borderRadius: '0px 0px 5px 5px',
                    borderBottom: '2px solid #eee',
                    borderLeft  : '2px solid #eee',
                    borderRight : '2px solid #eee',
                    boxShadow   : "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            case 'topCenter':
            case 'center':
            case 'bottomCenter':
            case 'inline':
                this.$bar.css({
                    borderRadius: '5px',
                    border      : '1px solid #eee',
                    boxShadow   : "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                this.$message.css({fontSize: '13px', textAlign: 'center'});
                break;
            case 'topLeft':
            case 'topRight':
            case 'bottomLeft':
            case 'bottomRight':
            case 'centerLeft':
            case 'centerRight':
                this.$bar.css({
                    borderRadius: '5px',
                    border      : '1px solid #eee',
                    boxShadow   : "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                this.$message.css({fontSize: '13px', textAlign: 'left'});
                break;
            case 'bottom':
                this.$bar.css({
                    borderRadius: '5px 5px 0px 0px',
                    borderTop   : '2px solid #eee',
                    borderLeft  : '2px solid #eee',
                    borderRight : '2px solid #eee',
                    boxShadow   : "0 -2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            default:
                this.$bar.css({
                    border   : '2px solid #eee',
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
        }

        switch(this.options.type) {
            case 'alert':
            case 'notification':
                this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'});
                break;
            case 'warning':
                this.$bar.css({backgroundColor: '#FFEAA8', borderColor: '#FFC237', color: '#826200'});
                this.$buttons.css({borderTop: '1px solid #FFC237'});
                break;
            case 'error':
                this.$bar.css({backgroundColor: 'red', borderColor: 'darkred', color: '#FFF'});
                this.$message.css({fontWeight: 'bold'});
                this.$buttons.css({borderTop: '1px solid darkred'});
                break;
            case 'information':
                this.$bar.css({backgroundColor: '#57B7E2', borderColor: '#0B90C4', color: '#FFF'});
                this.$buttons.css({borderTop: '1px solid #0B90C4'});
                break;
            case 'success':
                this.$bar.css({backgroundColor: 'lightgreen', borderColor: '#50C24E', color: 'darkgreen'});
                this.$buttons.css({borderTop: '1px solid #50C24E'});
                break;
            default:
                this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'});
                break;
        }
    },
    callback: {
        onShow : function() {
            $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
        },
        onClose: function() {
            $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
        }
    }
};

$.noty.themes.relax = {
    name    : 'relax',
    helpers : {},
    modal   : {
        css: {
            position       : 'fixed',
            width          : '100%',
            height         : '100%',
            backgroundColor: '#000',
            zIndex         : 10000,
            opacity        : 0.6,
            display        : 'none',
            left           : 0,
            top            : 0
        }
    },
    style   : function() {

        this.$bar.css({
            overflow    : 'hidden',
            margin      : '4px 0',
            borderRadius: '2px'
        });

        this.$message.css({
            fontSize  : '14px',
            lineHeight: '16px',
            textAlign : 'center',
            padding   : '10px',
            width     : 'auto',
            position  : 'relative'
        });

        this.$closeButton.css({
            position  : 'absolute',
            top       : 4, right: 4,
            width     : 10, height: 10,
            background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
            display   : 'none',
            cursor    : 'pointer'
        });

        this.$buttons.css({
            padding        : 5,
            textAlign      : 'right',
            borderTop      : '1px solid #ccc',
            backgroundColor: '#fff'
        });

        this.$buttons.find('button').css({
            marginLeft: 5
        });

        this.$buttons.find('button:first').css({
            marginLeft: 0
        });

        this.$bar.on({
            mouseenter: function() {
                $(this).find('.noty_close').stop().fadeTo('normal', 1);
            },
            mouseleave: function() {
                $(this).find('.noty_close').stop().fadeTo('normal', 0);
            }
        });

        switch(this.options.layout.name) {
            case 'top':
                this.$bar.css({
                    borderBottom: '2px solid #eee',
                    borderLeft  : '2px solid #eee',
                    borderRight : '2px solid #eee',
                    borderTop   : '2px solid #eee',
                    boxShadow   : "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            case 'topCenter':
            case 'center':
            case 'bottomCenter':
            case 'inline':
                this.$bar.css({
                    border   : '1px solid #eee',
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                this.$message.css({fontSize: '13px', textAlign: 'center'});
                break;
            case 'topLeft':
            case 'topRight':
            case 'bottomLeft':
            case 'bottomRight':
            case 'centerLeft':
            case 'centerRight':
                this.$bar.css({
                    border   : '1px solid #eee',
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                this.$message.css({fontSize: '13px', textAlign: 'left'});
                break;
            case 'bottom':
                this.$bar.css({
                    borderTop   : '2px solid #eee',
                    borderLeft  : '2px solid #eee',
                    borderRight : '2px solid #eee',
                    borderBottom: '2px solid #eee',
                    boxShadow   : "0 -2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            default:
                this.$bar.css({
                    border   : '2px solid #eee',
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
        }

        switch(this.options.type) {
            case 'alert':
            case 'notification':
                this.$bar.css({backgroundColor: '#FFF', borderColor: '#dedede', color: '#444'});
                break;
            case 'warning':
                this.$bar.css({backgroundColor: '#FFEAA8', borderColor: '#FFC237', color: '#826200'});
                this.$buttons.css({borderTop: '1px solid #FFC237'});
                break;
            case 'error':
                this.$bar.css({backgroundColor: '#FF8181', borderColor: '#e25353', color: '#FFF'});
                this.$message.css({fontWeight: 'bold'});
                this.$buttons.css({borderTop: '1px solid darkred'});
                break;
            case 'information':
                this.$bar.css({backgroundColor: '#78C5E7', borderColor: '#3badd6', color: '#FFF'});
                this.$buttons.css({borderTop: '1px solid #0B90C4'});
                break;
            case 'success':
                this.$bar.css({backgroundColor: '#BCF5BC', borderColor: '#7cdd77', color: 'darkgreen'});
                this.$buttons.css({borderTop: '1px solid #50C24E'});
                break;
            default:
                this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'});
                break;
        }
    },
    callback: {
        onShow : function() {

        },
        onClose: function() {

        }
    }
};


return window.noty;

});
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.map
/*
 Shameless port of a shameless port
 @defunkt => @janl => @aq

 See http://github.com/defunkt/mustache for more info.
 */

;
(function ($) {

	/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false*/

	(function (global, factory) {
		if (typeof exports === "object" && exports) {
			factory(exports); // CommonJS
		} else if (typeof define === "function" && define.amd) {
			define(['exports'], factory); // AMD
		} else {
			factory(global.Mustache = {}); // <script>
		}
	}(this, function (mustache) {

		var Object_toString = Object.prototype.toString;
		var isArray = Array.isArray || function (object) {
			return Object_toString.call(object) === '[object Array]';
		};

		function isFunction(object) {
			return typeof object === 'function';
		}

		function escapeRegExp(string) {
			return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
		}

		// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
		// See https://github.com/janl/mustache.js/issues/189
		var RegExp_test = RegExp.prototype.test;
		function testRegExp(re, string) {
			return RegExp_test.call(re, string);
		}

		var nonSpaceRe = /\S/;
		function isWhitespace(string) {
			return !testRegExp(nonSpaceRe, string);
		}

		var entityMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			"/": '&#x2F;'
		};

		function escapeHtml(string) {
			return String(string).replace(/[&<>"'\/]/g, function (s) {
				return entityMap[s];
			});
		}

		var whiteRe = /\s*/;
		var spaceRe = /\s+/;
		var equalsRe = /\s*=/;
		var curlyRe = /\s*\}/;
		var tagRe = /#|\^|\/|>|\{|&|=|!/;

		/**
		 * Breaks up the given `template` string into a tree of tokens. If the `tags`
		 * argument is given here it must be an array with two string values: the
		 * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
		 * course, the default is to use mustaches (i.e. mustache.tags).
		 *
		 * A token is an array with at least 4 elements. The first element is the
		 * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
		 * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
		 * all text that appears outside a symbol this element is "text".
		 *
		 * The second element of a token is its "value". For mustache tags this is
		 * whatever else was inside the tag besides the opening symbol. For text tokens
		 * this is the text itself.
		 *
		 * The third and fourth elements of the token are the start and end indices,
		 * respectively, of the token in the original template.
		 *
		 * Tokens that are the root node of a subtree contain two more elements: 1) an
		 * array of tokens in the subtree and 2) the index in the original template at
		 * which the closing tag for that section begins.
		 */
		function parseTemplate(template, tags) {
			if (!template)
				return [];

			var sections = [];     // Stack to hold section tokens
			var tokens = [];       // Buffer to hold the tokens
			var spaces = [];       // Indices of whitespace tokens on the current line
			var hasTag = false;    // Is there a {{tag}} on the current line?
			var nonSpace = false;  // Is there a non-space char on the current line?

			// Strips all whitespace tokens array for the current line
			// if there was a {{#tag}} on it and otherwise only space.
			function stripSpace() {
				if (hasTag && !nonSpace) {
					while (spaces.length)
						delete tokens[spaces.pop()];
				} else {
					spaces = [];
				}

				hasTag = false;
				nonSpace = false;
			}

			var openingTagRe, closingTagRe, closingCurlyRe;
			function compileTags(tags) {
				if (typeof tags === 'string')
					tags = tags.split(spaceRe, 2);

				if (!isArray(tags) || tags.length !== 2)
					throw new Error('Invalid tags: ' + tags);

				openingTagRe = new RegExp(escapeRegExp(tags[0]) + '\\s*');
				closingTagRe = new RegExp('\\s*' + escapeRegExp(tags[1]));
				closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tags[1]));
			}

			compileTags(tags || mustache.tags);

			var scanner = new Scanner(template);

			var start, type, value, chr, token, openSection;
			while (!scanner.eos()) {
				start = scanner.pos;

				// Match any text between tags.
				value = scanner.scanUntil(openingTagRe);

				if (value) {
					for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
						chr = value.charAt(i);

						if (isWhitespace(chr)) {
							spaces.push(tokens.length);
						} else {
							nonSpace = true;
						}

						tokens.push(['text', chr, start, start + 1]);
						start += 1;

						// Check for whitespace on the current line.
						if (chr === '\n')
							stripSpace();
					}
				}

				// Match the opening tag.
				if (!scanner.scan(openingTagRe))
					break;

				hasTag = true;

				// Get the tag type.
				type = scanner.scan(tagRe) || 'name';
				scanner.scan(whiteRe);

				// Get the tag value.
				if (type === '=') {
					value = scanner.scanUntil(equalsRe);
					scanner.scan(equalsRe);
					scanner.scanUntil(closingTagRe);
				} else if (type === '{') {
					value = scanner.scanUntil(closingCurlyRe);
					scanner.scan(curlyRe);
					scanner.scanUntil(closingTagRe);
					type = '&';
				} else {
					value = scanner.scanUntil(closingTagRe);
				}

				// Match the closing tag.
				if (!scanner.scan(closingTagRe))
					throw new Error('Unclosed tag at ' + scanner.pos);

				token = [type, value, start, scanner.pos];
				tokens.push(token);

				if (type === '#' || type === '^') {
					sections.push(token);
				} else if (type === '/') {
					// Check section nesting.
					openSection = sections.pop();

					if (!openSection)
						throw new Error('Unopened section "' + value + '" at ' + start);

					if (openSection[1] !== value)
						throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
				} else if (type === 'name' || type === '{' || type === '&') {
					nonSpace = true;
				} else if (type === '=') {
					// Set the tags for the next time around.
					compileTags(value);
				}
			}

			// Make sure there are no open sections when we're done.
			openSection = sections.pop();

			if (openSection)
				throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

			return nestTokens(squashTokens(tokens));
		}

		/**
		 * Combines the values of consecutive text tokens in the given `tokens` array
		 * to a single token.
		 */
		function squashTokens(tokens) {
			var squashedTokens = [];

			var token, lastToken;
			for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
				token = tokens[i];

				if (token) {
					if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
						lastToken[1] += token[1];
						lastToken[3] = token[3];
					} else {
						squashedTokens.push(token);
						lastToken = token;
					}
				}
			}

			return squashedTokens;
		}

		/**
		 * Forms the given array of `tokens` into a nested tree structure where
		 * tokens that represent a section have two additional items: 1) an array of
		 * all tokens that appear in that section and 2) the index in the original
		 * template that represents the end of that section.
		 */
		function nestTokens(tokens) {
			var nestedTokens = [];
			var collector = nestedTokens;
			var sections = [];

			var token, section;
			for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
				token = tokens[i];

				switch (token[0]) {
					case '#':
					case '^':
						collector.push(token);
						sections.push(token);
						collector = token[4] = [];
						break;
					case '/':
						section = sections.pop();
						section[5] = token[2];
						collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
						break;
					default:
						collector.push(token);
				}
			}

			return nestedTokens;
		}

		/**
		 * A simple string scanner that is used by the template parser to find
		 * tokens in template strings.
		 */
		function Scanner(string) {
			this.string = string;
			this.tail = string;
			this.pos = 0;
		}

		/**
		 * Returns `true` if the tail is empty (end of string).
		 */
		Scanner.prototype.eos = function () {
			return this.tail === "";
		};

		/**
		 * Tries to match the given regular expression at the current position.
		 * Returns the matched text if it can match, the empty string otherwise.
		 */
		Scanner.prototype.scan = function (re) {
			var match = this.tail.match(re);

			if (!match || match.index !== 0)
				return '';

			var string = match[0];

			this.tail = this.tail.substring(string.length);
			this.pos += string.length;

			return string;
		};

		/**
		 * Skips all text until the given regular expression can be matched. Returns
		 * the skipped string, which is the entire tail if no match can be made.
		 */
		Scanner.prototype.scanUntil = function (re) {
			var index = this.tail.search(re), match;

			switch (index) {
				case -1:
					match = this.tail;
					this.tail = "";
					break;
				case 0:
					match = "";
					break;
				default:
					match = this.tail.substring(0, index);
					this.tail = this.tail.substring(index);
			}

			this.pos += match.length;

			return match;
		};

		/**
		 * Represents a rendering context by wrapping a view object and
		 * maintaining a reference to the parent context.
		 */
		function Context(view, parentContext) {
			this.view = view;
			this.cache = {'.': this.view};
			this.parent = parentContext;
		}

		/**
		 * Creates a new context using the given view with this context
		 * as the parent.
		 */
		Context.prototype.push = function (view) {
			return new Context(view, this);
		};

		/**
		 * Returns the value of the given name in this context, traversing
		 * up the context hierarchy if the value is absent in this context's view.
		 */
		Context.prototype.lookup = function (name) {
			var cache = this.cache;

			var value;
			if (name in cache) {
				value = cache[name];
			} else {
				var context = this, names, index, lookupHit = false;

				while (context) {
					if (name.indexOf('.') > 0) {
						value = context.view;
						names = name.split('.');
						index = 0;

						/**
						 * Using the dot notion path in `name`, we descend through the
						 * nested objects.
						 *
						 * To be certain that the lookup has been successful, we have to
						 * check if the last object in the path actually has the property
						 * we are looking for. We store the result in `lookupHit`.
						 *
						 * This is specially necessary for when the value has been set to
						 * `undefined` and we want to avoid looking up parent contexts.
						 **/
						while (value != null && index < names.length) {
							if (index === names.length - 1 && value != null)
								lookupHit = (typeof value === 'object') &&
								value.hasOwnProperty(names[index]);
							value = value[names[index++]];
						}
					} else if (context.view != null && typeof context.view === 'object') {
						value = context.view[name];
						lookupHit = context.view.hasOwnProperty(name);
					}

					if (lookupHit)
						break;

					context = context.parent;
				}

				cache[name] = value;
			}

			if (isFunction(value))
				value = value.call(this.view);

			return value;
		};

		/**
		 * A Writer knows how to take a stream of tokens and render them to a
		 * string, given a context. It also maintains a cache of templates to
		 * avoid the need to parse the same template twice.
		 */
		function Writer() {
			this.cache = {};
		}

		/**
		 * Clears all cached templates in this writer.
		 */
		Writer.prototype.clearCache = function () {
			this.cache = {};
		};

		/**
		 * Parses and caches the given `template` and returns the array of tokens
		 * that is generated from the parse.
		 */
		Writer.prototype.parse = function (template, tags) {
			var cache = this.cache;
			var tokens = cache[template];

			if (tokens == null)
				tokens = cache[template] = parseTemplate(template, tags);

			return tokens;
		};

		/**
		 * High-level method that is used to render the given `template` with
		 * the given `view`.
		 *
		 * The optional `partials` argument may be an object that contains the
		 * names and templates of partials that are used in the template. It may
		 * also be a function that is used to load partial templates on the fly
		 * that takes a single argument: the name of the partial.
		 */
		Writer.prototype.render = function (template, view, partials) {
			var tokens = this.parse(template);
			var context = (view instanceof Context) ? view : new Context(view);
			return this.renderTokens(tokens, context, partials, template);
		};

		/**
		 * Low-level method that renders the given array of `tokens` using
		 * the given `context` and `partials`.
		 *
		 * Note: The `originalTemplate` is only ever used to extract the portion
		 * of the original template that was contained in a higher-order section.
		 * If the template doesn't use higher-order sections, this argument may
		 * be omitted.
		 */
		Writer.prototype.renderTokens = function (tokens, context, partials, originalTemplate) {
			var buffer = '';

			var token, symbol, value;
			for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
				value = undefined;
				token = tokens[i];
				symbol = token[0];

				if (symbol === '#')
					value = this._renderSection(token, context, partials, originalTemplate);
				else if (symbol === '^')
					value = this._renderInverted(token, context, partials, originalTemplate);
				else if (symbol === '>')
					value = this._renderPartial(token, context, partials, originalTemplate);
				else if (symbol === '&')
					value = this._unescapedValue(token, context);
				else if (symbol === 'name')
					value = this._escapedValue(token, context);
				else if (symbol === 'text')
					value = this._rawValue(token);

				if (value !== undefined)
					buffer += value;
			}

			return buffer;
		};

		Writer.prototype._renderSection = function (token, context, partials, originalTemplate) {
			var self = this;
			var buffer = '';
			var value = context.lookup(token[1]);

			// This function is used to render an arbitrary template
			// in the current context by higher-order sections.
			function subRender(template) {
				return self.render(template, context, partials);
			}

			if (!value)
				return;

			if (isArray(value)) {
				for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
					buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
				}
			} else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
				buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
			} else if (isFunction(value)) {
				if (typeof originalTemplate !== 'string')
					throw new Error('Cannot use higher-order sections without the original template');

				// Extract the portion of the original template that the section contains.
				value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

				if (value != null)
					buffer += value;
			} else {
				buffer += this.renderTokens(token[4], context, partials, originalTemplate);
			}
			return buffer;
		};

		Writer.prototype._renderInverted = function (token, context, partials, originalTemplate) {
			var value = context.lookup(token[1]);

			// Use JavaScript's definition of falsy. Include empty arrays.
			// See https://github.com/janl/mustache.js/issues/186
			if (!value || (isArray(value) && value.length === 0))
				return this.renderTokens(token[4], context, partials, originalTemplate);
		};

		Writer.prototype._renderPartial = function (token, context, partials) {
			if (!partials)
				return;

			var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
			if (value != null)
				return this.renderTokens(this.parse(value), context, partials, value);
		};

		Writer.prototype._unescapedValue = function (token, context) {
			var value = context.lookup(token[1]);
			if (value != null)
				return value;
		};

		Writer.prototype._escapedValue = function (token, context) {
			var value = context.lookup(token[1]);
			if (value != null)
				return mustache.escape(value);
		};

		Writer.prototype._rawValue = function (token) {
			return token[1];
		};

		mustache.name = "mustache.js";
		mustache.version = "2.0.0";
		mustache.tags = ["{{", "}}"];

		// All high-level mustache.* functions use this writer.
		var defaultWriter = new Writer();

		/**
		 * Clears all cached templates in the default writer.
		 */
		mustache.clearCache = function () {
			return defaultWriter.clearCache();
		};

		/**
		 * Parses and caches the given template in the default writer and returns the
		 * array of tokens it contains. Doing this ahead of time avoids the need to
		 * parse templates on the fly as they are rendered.
		 */
		mustache.parse = function (template, tags) {
			return defaultWriter.parse(template, tags);
		};

		/**
		 * Renders the `template` with the given `view` and `partials` using the
		 * default writer.
		 */
		mustache.render = function (template, view, partials) {
			return defaultWriter.render(template, view, partials);
		};

		// This is here for backwards compatibility with 0.4.x.
		mustache.to_html = function (template, view, partials, send) {
			var result = mustache.render(template, view, partials);

			if (isFunction(send)) {
				send(result);
			} else {
				return result;
			}
		};

		// Export the escaping function so that the user may override it.
		// See https://github.com/janl/mustache.js/issues/244
		mustache.escape = escapeHtml;

		// Export these mainly for testing, but also for advanced usage.
		mustache.Scanner = Scanner;
		mustache.Context = Context;
		mustache.Writer = Writer;

	}));
	$.mustache = function (template, view, partials) {
		return Mustache.render(template, view, partials);
	};

	$.fn.mustache = function (view, partials) {
		return $(this).map(function (i, elm) {
			var template = $.trim($(elm).html());
			var output = $.mustache(template, view, partials);
			return $(output).get();
		});
	};

})(jQuery);

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/**
 * Copyright (C) 2012 Chris Wharton (chris@weare2ndfloor.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.

 Documentation available at http://cookiecuttr.com

 */
(function ($) {
    $.cookieCuttr = function (options) {
        var defaults = {
            cookieCutter: false, // you'd like to enable the div/section/span etc. hide feature? change this to true
            cookieCutterDeclineOnly: false, // you'd like the CookieCutter to only hide when someone has clicked declined set this to true
            cookieAnalytics: true, // just using a simple analytics package? change this to true
            cookieDeclineButton: false, // this will disable non essential cookies
            cookieAcceptButton: true, // this will disable non essential cookies
            cookieResetButton: false,
            cookieOverlayEnabled: false, // don't want a discreet toolbar? Fine, set this to true
            cookiePolicyLink: '/privacy-policy/', // if applicable, enter the link to your privacy policy here...
            cookieMessage: 'We use cookies to better understand how you use our site. <br>By continuing to navigate, you accept our use of cookies on your device but you can change your cookie settings at any time. <a href="{{cookiePolicyLink}}" title="read about our cookies">Learn More…</a>',
            cookieAnalyticsMessage: 'We use cookies, just to track visits to our website, we store no personal details.',
            cookieErrorMessage: "We\'re sorry, this feature places cookies in your browser and has been disabled. <br>To continue using this functionality, please",
            cookieWhatAreTheyLink: "./privacy.php#cookies",
            cookieDisable: '',
            cookieExpires: 365,
            cookieAcceptButtonText: "ACCEPT COOKIES",
            cookieDeclineButtonText: "DECLINE COOKIES",
            cookieResetButtonText: "RESET COOKIES FOR THIS WEBSITE",
            cookieWhatAreLinkText: "What are cookies?",
            cookieNotificationLocationBottom: false, // top or bottom - they are your only options, so true for bottom, false for top
            cookiePolicyPage: false,
            cookiePolicyPageMessage: 'Please read the information below and then choose from the following options',
            cookieDiscreetLink: false,
            cookieDiscreetReset: false,
            cookieDiscreetLinkText: "Cookies?",
            cookieDiscreetPosition: "topleft", //options: topleft, topright, bottomleft, bottomright
            cookieNoMessage: false, // change to true hide message from all pages apart from your policy page
            cookieDomain: ""
        };
        var options = $.extend(defaults, options);
        var message = defaults.cookieMessage.replace('{{cookiePolicyLink}}', defaults.cookiePolicyLink);
        defaults.cookieMessage = 'We use cookies on this website, you can <a href="' + defaults.cookiePolicyLink + '" title="read about our cookies">read about them here</a>. To use the website as intended please...';
        //convert options
        var cookiePolicyLinkIn = options.cookiePolicyLink;
        var cookieCutter = options.cookieCutter;
        var cookieCutterDeclineOnly = options.cookieCutterDeclineOnly;
        var cookieAnalytics = options.cookieAnalytics;
        var cookieDeclineButton = options.cookieDeclineButton;
        var cookieAcceptButton = options.cookieAcceptButton;
        var cookieResetButton = options.cookieResetButton;
        var cookieOverlayEnabled = options.cookieOverlayEnabled;
        var cookiePolicyLink = options.cookiePolicyLink;
        var cookieMessage = message;
        var cookieAnalyticsMessage = options.cookieAnalyticsMessage;
        var cookieErrorMessage = options.cookieErrorMessage;
        var cookieDisable = options.cookieDisable;
        var cookieWhatAreTheyLink = options.cookieWhatAreTheyLink;
        var cookieExpires = options.cookieExpires;
        var cookieAcceptButtonText = options.cookieAcceptButtonText;
        var cookieDeclineButtonText = options.cookieDeclineButtonText;
        var cookieResetButtonText = options.cookieResetButtonText;
        var cookieWhatAreLinkText = options.cookieWhatAreLinkText;
        var cookieNotificationLocationBottom = options.cookieNotificationLocationBottom;
        var cookiePolicyPage = options.cookiePolicyPage;
        var cookiePolicyPageMessage = options.cookiePolicyPageMessage;
        var cookieDiscreetLink = options.cookieDiscreetLink;
        var cookieDiscreetReset = options.cookieDiscreetReset;
        var cookieDiscreetLinkText = options.cookieDiscreetLinkText;
        var cookieDiscreetPosition = options.cookieDiscreetPosition;
        var cookieNoMessage = options.cookieNoMessage;
        // cookie identifier
        var $cookieAccepted = $.cookie('cc_cookie_accept') == "cc_cookie_accept";
        $.cookieAccepted = function () {
            return $cookieAccepted;
        };
        var $cookieDeclined = $.cookie('cc_cookie_decline') == "cc_cookie_decline";
        $.cookieDeclined = function () {
            return $cookieDeclined;
        };
        // write cookie accept button
        if (cookieAcceptButton) {
            var cookieAccept = ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ';
        } else {
            var cookieAccept = "";
        }
        // write cookie decline button
        if (cookieDeclineButton) {
            var cookieDecline = ' <a href="#decline" class="cc-cookie-decline">' + cookieDeclineButtonText + '</a> ';
        } else {
            var cookieDecline = "";
        }
        // write extra class for overlay
        if (cookieOverlayEnabled) {
            var cookieOverlay = 'cc-overlay';
        } else {
            var cookieOverlay = "";
        }
        // to prepend or append, that is the question?
        if ((cookieNotificationLocationBottom) || (cookieDiscreetPosition == "bottomright") || (cookieDiscreetPosition == "bottomleft")) {
            var appOrPre = true;
        } else {
            var appOrPre = false;
        }
        if (($cookieAccepted) || ($cookieDeclined)) {
            // write cookie reset button
            if ((cookieResetButton) && (cookieDiscreetReset)) {
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies cc-discreet"><div class="inside"><a class="cc-cookie-reset" href="#" title="' + cookieResetButtonText + '">' + cookieResetButtonText + '</a></div></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies cc-discreet"><div class="inside"><a class="cc-cookie-reset" href="#" title="' + cookieResetButtonText + '">' + cookieResetButtonText + '</a></div></div>');
                }
                //add appropriate CSS depending on position chosen
                if (cookieDiscreetPosition == "topleft") {
                    $('div.cc-cookies').css("top", "0");
                    $('div.cc-cookies').css("left", "0");
                }
                if (cookieDiscreetPosition == "topright") {
                    $('div.cc-cookies').css("top", "0");
                    $('div.cc-cookies').css("right", "0");
                }
                if (cookieDiscreetPosition == "bottomleft") {
                    $('div.cc-cookies').css("bottom", "0");
                    $('div.cc-cookies').css("left", "0");
                }
                if (cookieDiscreetPosition == "bottomright") {
                    $('div.cc-cookies').css("bottom", "0");
                    $('div.cc-cookies').css("right", "0");
                }
            } else if (cookieResetButton) {
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies"><div class="inside"><a href="#" class="cc-cookie-reset">' + cookieResetButtonText + '</a></div></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies"<div class="inside">><a href="#" class="cc-cookie-reset">' + cookieResetButtonText + '</a></div></div>');
                }
            } else {
                var cookieResetButton = "";
            }
        } else {
            // add message to just after opening body tag
            if ((cookieNoMessage) && (!cookiePolicyPage)) {
                // show no link on any pages APART from the policy page
            } else if ((cookieDiscreetLink) && (!cookiePolicyPage)) { // show discreet link
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies cc-discreet"><div class="inside"><a href="' + cookiePolicyLinkIn + '" title="' + cookieDiscreetLinkText + '">' + cookieDiscreetLinkText + '</a></div></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies cc-discreet"><div class="inside"><a href="' + cookiePolicyLinkIn + '" title="' + cookieDiscreetLinkText + '">' + cookieDiscreetLinkText + '</a></div></div>');
                }
                //add appropriate CSS depending on position chosen
                if (cookieDiscreetPosition == "topleft") {
                    $('div.cc-cookies').css("top", "0");
                    $('div.cc-cookies').css("left", "0");
                }
                if (cookieDiscreetPosition == "topright") {
                    $('div.cc-cookies').css("top", "0");
                    $('div.cc-cookies').css("right", "0");
                }
                if (cookieDiscreetPosition == "bottomleft") {
                    $('div.cc-cookies').css("bottom", "0");
                    $('div.cc-cookies').css("left", "0");
                }
                if (cookieDiscreetPosition == "bottomright") {
                    $('div.cc-cookies').css("bottom", "0");
                    $('div.cc-cookies').css("right", "0");
                }
            } else if (cookieAnalytics) { // show analytics overlay
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies ' + cookieOverlay + '"><div class="inside">' + cookieAnalyticsMessage + cookieAccept + cookieDecline + '<a href="' + cookieWhatAreTheyLink + '" title="Visit All about cookies (External link)">' + cookieWhatAreLinkText + '</a></div></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies ' + cookieOverlay + '"><div class="inside">' + cookieAnalyticsMessage + '<a href="' + cookieWhatAreTheyLink + '" class="cc-cookie-link">' + cookieWhatAreLinkText + '</a>' + cookieAccept + cookieDecline + '</div></div>');
                }
            }
            if (cookiePolicyPage) { // show policy page overlay
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies ' + cookieOverlay + '"><div class="inside">' + cookiePolicyPageMessage + " " + ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ' + ' <a href="#decline" class="cc-cookie-decline">' + cookieDeclineButtonText + '</a> ' + '</div></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies ' + cookieOverlay + '"><div class="inside">' + cookiePolicyPageMessage + " " + ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ' + ' <a href="#decline" class="cc-cookie-decline">' + cookieDeclineButtonText + '</a> ' + '</div></div>');
                }
            } else if ((!cookieAnalytics) && (!cookieDiscreetLink)) { // show privacy policy option
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies ' + cookieOverlay + '"><div class="inside">' + cookieMessage + cookieAccept + cookieDecline + '</div></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies ' + cookieOverlay + '"><div class="inside">' + cookieMessage + cookieAccept + cookieDecline + '</div></div>');
                }
            }
        }
        if ((cookieCutter) && (!cookieCutterDeclineOnly) && (($cookieDeclined) || (!$cookieAccepted))) {
            $(cookieDisable).html('<div class="cc-cookies-error"><div class="inside">' + cookieErrorMessage + ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ' + '</div></div>');
        }
        if ((cookieCutter) && (cookieCutterDeclineOnly) && ($cookieDeclined)) {
            $(cookieDisable).html('<div class="cc-cookies-error"><div class="inside">' + cookieErrorMessage + ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ' + '</div></div>');
        }
        // if bottom is true, switch div to bottom if not in discreet mode
        if ((cookieNotificationLocationBottom) && (!cookieDiscreetLink)) {
            $('div.cc-cookies').css("top", "auto");
            $('div.cc-cookies').css("bottom", "0");
        }
        if ((cookieNotificationLocationBottom) && (cookieDiscreetLink) && (cookiePolicyPage)) {
            $('div.cc-cookies').css("top", "auto");
            $('div.cc-cookies').css("bottom", "0");
        }
        // setting the cookies

        // for top bar
        $('.cc-cookie-accept, .cc-cookie-decline').click(function (e) {
            e.preventDefault();
            if ($(this).is('[href$=#decline]')) {
                $.cookie("cc_cookie_accept", null, {
                    path: '/'
                });
                $.cookie("cc_cookie_decline", "cc_cookie_decline", {
                    expires: cookieExpires,
                    path: '/'
                });
                if (options.cookieDomain) {
                    // kill google analytics cookies
                    $.cookie("__utma", null, {
                        domain: '.' + options.cookieDomain,
                        path: '/'
                    });
                    $.cookie("__utmb", null, {
                        domain: '.' + options.cookieDomain,
                        path: '/'
                    });
                    $.cookie("__utmc", null, {
                        domain: '.' + options.cookieDomain,
                        path: '/'
                    });
                    $.cookie("__utmz", null, {
                        domain: '.' + options.cookieDomain,
                        path: '/'
                    });
                }
            } else {
                $.cookie("cc_cookie_decline", null, {
                    path: '/'
                });
                $.cookie("cc_cookie_accept", "cc_cookie_accept", {
                    expires: cookieExpires,
                    path: '/'
                });
            }
            $(".cc-cookies").fadeOut(function () {
                // reload page to activate cookies
                // location.reload();
            });
        });
        //reset cookies
        $('a.cc-cookie-reset').click(function (f) {
            f.preventDefault();
            $.cookie("cc_cookie_accept", null, {
                path: '/'
            });
            $.cookie("cc_cookie_decline", null, {
                path: '/'
            });
            $(".cc-cookies").fadeOut(function () {
                // reload page to activate cookies
                // location.reload();
            });
        });
        //cookie error accept
        $('.cc-cookies-error a.cc-cookie-accept').click(function (g) {
            g.preventDefault();
            $.cookie("cc_cookie_accept", "cc_cookie_accept", {
                expires: cookieExpires,
                path: '/'
            });
            $.cookie("cc_cookie_decline", null, {
                path: '/'
            });
            // reload page to activate cookies
            // location.reload();
        });
    };
})(jQuery);

jQuery(document).ready(function($) {

	// Cookies
	$.cookieCuttr({
		cookieAnalyticsMessage: $('.cookies').data('cookiesmsg'),
		cookieWhatAreLinkText: $('.cookies').data('cookieswhat'),
		cookieAcceptButtonText: $('.cookies').data('cookiesbtn'),
		cookieWhatAreTheyLink: $('.cookies').data('cookieslink')
	});

	if ($.cookie('cc_cookie_accept') == 'cc_cookie_accept') {
		// insert the code you do not want to run UNTIL cookies are accepted here
	}

	// Hide the cookie banner on click elsewhere
	$('body').one('click', function() {
	  	$('.cc-cookie-accept').trigger('click');
	});

	// Disable click propagation to body
	$('.cc-cookies').on('click', function(e) {
		e.stopPropagation();
	});

});

/**!
 COMMONS
 All commons function merged to generics jQuery plugins

 @contributors: Geoffrey Crofte (Alsacréations), PHV (Alsacréations), Damien Senger (Alsacréations)
 @date-created: 2015-03-26
 @last-update: 2015-10-19
 */

;
(function($) {

  //
  // Plugin Name
  // @Description: Do something to create good interaction
  //

  /*
  $.fn.plugin_name = function(options) {

    var settings = $.extend({
      param_name: "param_value",
      param_name2: "param_value2"
    }, options);

    return this.each(function() {

    });

  };
  */


  //
  // Toggle Slide
  // @Description: Toggle slide the targetted element
  // @Parameters: speed (int, ms)
  //

  $.fn.toggleSlide = function(options) {

    var settings = $.extend({
      speed: 200
    }, options);

    return this.each(function() {
      var $_this = $(this),
        $trigger = $(this).find('.js-toggle-trigger'),
        $target = $(this).find('.js-toggle-target');

      $trigger.on('click.ts', function() {

        if ($_this.hasClass('is-open')) {
          $target.stop().slideUp(settings.speed);
          $_this.removeClass('is-open');

        } else {
          $target.stop().slideDown(settings.speed);
          $_this.addClass('is-open');

        }

        return false;
      });
      $target.on('click.ts', function(e) {
        e.stopPropagation();
      });
      $('body').on('click', function(e) {
        if ($_this.hasClass('is-open')) {
          $trigger.trigger('click.ts');
        }
      });
    });

  };


  //
  // Toggle Slide w/o closing out of the box
  // @Description: Toggle slide the targetted element
  // @Parameters: speed (int, ms)
  //

  $.fn.toggleBox = function(options) {

    var settings = $.extend({
      speed: 200
    }, options);

    return this.each(function() {
      var $_this = $(this),
        $trigger = $(this).find('.js-toggle-trigger'),
        $target = $(this).find('.js-toggle-target');

      $trigger.on('click.ts', function() {

        if ($_this.hasClass('is-open')) {
          $target.stop().slideUp(settings.speed);
          $_this.removeClass('is-open');

        } else {
          $target.stop().slideDown(settings.speed);
          $_this.addClass('is-open');

        }

        return false;
      });
      $target.on('click.ts', function(e) {
        e.stopPropagation();
      });
    });

  };


  //
  // Toggle Fade
  // @Description: Toggle fade the targetted element
  // @Parameters: speed (int, ms)
  //

  $.fn.toggleFade = function(options) {

    var settings = $.extend({
      speed: 200
    }, options);

    return this.each(function() {
      var $_this = $(this),
        $trigger = $(this).find('.js-toggle-trigger'),
        $target = $(this).find('.js-toggle-target');

      $trigger.on('click.ts', function() {

        if ($_this.hasClass('is-visible')) {
          $target.stop().fadeIn(settings.speed);
          $_this.removeClass('is-visible');

        } else {
          $target.stop().fadeOut(settings.speed);
          $_this.addClass('is-visible');
        }

        return false;
      });
      $target.on('click.ts', function(e) {
        e.stopPropagation();
      });
    });

  };

  if ($('.js-toggle-slide').length > 0) {
    $('.js-toggle-slide').toggleSlide();
  }
  if ($('.js-toggle-box').length > 0) {
    $('.js-toggle-box').toggleBox();
  }
  if ($('.js-toggle-fade').length > 0) {
    $('.js-toggle-fade').toggleFade();
  }


  /**
   * Script permettant le changement de la largeur des selectboxes dans la
   * recherche avancée de la liste d'exposants ou de produits
   *
   * @author	Damien Senger <damien@alsacreations.fr>
   * @param 	smallWord			Value de l'élément le plus petit
   * */
  var $selectbox = $('.exhibitor-search-form .esf-form-zone select');

  $.fn.selectboxResize = function(smallWord) {
    var value = $(this).val();

    if (value == smallWord) {
      $(this).addClass('is-small');
    } else {
      $(this).removeClass('is-small');
    }
  };

  if ($selectbox.length) {
    $(document).ready(function() {
      $selectbox.selectboxResize('all');
    });

    $(this).on('change', function() {
      $selectbox.selectboxResize('all');
    });
  }


  /**
   * Script permettant la gestion de l'affichage du catalogue exposant et produits
   * sur IE 10
   *
   * @author	Damien Senger <damien@alsacreations.fr>
   * */

  $.fn.ie10Detectizr = function() {
    var isIE10 = document.all && window.atob;

    if (isIE10) {
      $(this).addClass('ie10');
    }
  };
  $('html').ie10Detectizr();

}(jQuery));

/**!
 Add Calendar

 Make date of event clickeable for pop a menu for choose where to add the event in a calendar

 @contributors: Guillaume Focheux (Alsacréations), Rodolphe Rimele (Alsacréations)
 @date-created: 2015-04-09
 @last-update: 2015-09-11
 */

;
(function ($) {
	;
	(function (exports) {
		var MS_IN_MINUTES = 60 * 1000;

		var formatTime = function (date) {
			return date.toISOString().replace(/-|:|\.\d+/g, '');
		};

		var calculateEndTime = function (event) {
			return event.end ?
				formatTime(event.end) :
				formatTime(new Date(event.start.getTime() + (event.duration * MS_IN_MINUTES)));
		};

		var calendarGenerators = {
			google: function (event) {
				var startTime = formatTime(event.start);
				var endTime = calculateEndTime(event);

				var href = encodeURI([
					'https://www.google.com/calendar/render',
					'?action=TEMPLATE',
					'&text=' + (event.title || ''),
					'&dates=' + (startTime || ''),
					'/' + (endTime || ''),
					'&details=' + (event.description || ''),
					'&location=' + (event.address || ''),
					'&sprop=&sprop=name:'
				].join(''));
				return '<a class="icon-google" target="_blank" href="' +
					href + '">Google Calendar</a>';
			},
			yahoo: function (event) {
				var eventDuration = event.end ?
					((event.end.getTime() - event.start.getTime()) / MS_IN_MINUTES) :
					event.duration;

				// Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
				var yahooHourDuration = eventDuration < 600 ?
					'0' + Math.floor((eventDuration / 60)) :
					Math.floor((eventDuration / 60)) + '';

				var yahooMinuteDuration = eventDuration % 60 < 10 ?
					'0' + eventDuration % 60 :
					eventDuration % 60 + '';

				var yahooEventDuration = yahooHourDuration + yahooMinuteDuration;

				// Remove timezone from event time
				var st = formatTime(new Date(event.start - (event.start.getTimezoneOffset() *
					MS_IN_MINUTES))) || '';

				var href = encodeURI([
					'http://calendar.yahoo.com/?v=60&view=d&type=20',
					'&title=' + (event.title || ''),
					'&st=' + st,
					'&dur=' + (yahooEventDuration || ''),
					'&desc=' + (event.description || ''),
					'&in_loc=' + (event.address || '')
				].join(''));

				return '<a class="icon-yahoo" target="_blank" href="' +
					href + '">Yahoo! Calendar</a>';
			},
			ics: function (event, eClass, calendarName) {
				var startTime = formatTime(event.start);
				var endTime = calculateEndTime(event);

				var href = encodeURI(
					'data:text/calendar;charset=utf8,' + [
						'BEGIN:VCALENDAR',
						'VERSION:2.0',
						'BEGIN:VEVENT',
						'URL:' + document.URL,
						'DTSTART:' + (startTime || ''),
						'DTEND:' + (endTime || ''),
						'SUMMARY:' + (event.title || ''),
						'DESCRIPTION:' + (event.description || ''),
						'LOCATION:' + (event.address || ''),
						'END:VEVENT',
						'END:VCALENDAR'].join('\n'));

				return '<a class="' + eClass + '" target="_blank" href="' +
					href + '">' + calendarName + ' Calendar</a>';
			},
			ical: function (event) {
				return this.ics(event, 'icon-ical', 'iCal');
			},
			outlook: function (event) {
				return this.ics(event, 'icon-outlook', 'Outlook');
			}
		};

		var generateCalendars = function (event) {
			return {
				google: calendarGenerators.google(event),
				yahoo: calendarGenerators.yahoo(event),
				ical: calendarGenerators.ical(event),
				outlook: calendarGenerators.outlook(event)
			};
		};


		// Make sure we have the necessary event data, such as start time and event duration
		var validParams = function (params) {
			return params.data !== undefined && params.data.start !== undefined &&
				(params.data.end !== undefined || params.data.duration !== undefined);
		};

		var generateMarkup = function (calendars, clazz, calendarId) {
			var resultHTML = document.createElement('div');

			res = '<label for="checkbox-for-' +
				calendarId + '" class="ac-switcher-label visually-hidden"></label>';
			res += '<input name="ac-switcher" class="ac-switcher" id="checkbox-for-' + calendarId + '" type="checkbox"><ul class="ac-list">';

			Object.keys(calendars).forEach(function (services) {
				res += '<li class="ac-item">' + calendars[services] + '</li>';
			});
			res += '</ul>';
			resultHTML.innerHTML = res;
			resultHTML.className = 'ac-add-to-calendar';
			if (clazz !== undefined) {
				resultHTML.className += (' ' + clazz);
			}

			resultHTML.id = calendarId;
			return resultHTML;
		};

		var getClass = function (params) {
			if (params.options && params.options.class) {
				return params.options.class;
			}
		};

		var getOrGenerateCalendarId = function (params) {
			return params.options && params.options.id ?
				params.options.id :
				Math.floor(Math.random() * 1000000); // Generate a 6-digit random ID
		};

		exports.createCalendar = function (params) {
			if (!validParams(params)) {
				console.log('Event details missing.');
				return;
			}

			return generateMarkup(generateCalendars(params.data),
				getClass(params),
				getOrGenerateCalendarId(params));
		};
	})(this);

	// get Zone addcalendar
	var $addCal = $('.js-add-to-calendar'),
		$the_event = $('[itemtype="http://schema.org/Event"]'),
		$remoteTrigger = $('.ac-js-switcher-remote');
		// get event information
		$startDate = $('meta[itemprop="startDate"]', $the_event).attr('content'),
		$endDate = $('meta[itemprop="endDate"]', $the_event).attr('content'),
		eventAddress = $('[itemprop="addressLocality"]').html() + ' ' + $('.sb-place-spot').html() + ' ' + $('.sb-place-country').html();

	// generate HTML for calendar
	if($the_event.length>0 && $startDate && $endDate) {
		var myCalendar = createCalendar({
			data: {
				title: $('[itemprop="name"]', $the_event).attr('content'), // Event title
				start: new Date($startDate), // Event start date
				duration: 0, // Event duration (IN MINUTES)
				end: new Date($endDate), // You can also choose to set an end time.
				// If an end time is set, this will take precedence over duration
				address: eventAddress
			}
		});

		// add HTML and events to page
		$addCal.append(myCalendar);
		$remoteTrigger.on('click', function (e) {
			$addCal.find('.ac-switcher-label').trigger('click');
			e.stopPropagation();
		});
		$('body').off('click.acswitcher').on('click.acswitcher', function() {
		  $('.ac-switcher').prop('checked',false);
		});
	}

})(jQuery);

/**!
 * CMXP Catalogue display choice
 *
 * @contributors: Damien Senger (Alsacréations)
 * @date-created: 2015-10-15
 * @last-update: 2015-10-15
 * */

;
(function($) {

  $.fn.catalogueDisplayChoice = function() {
    var $button = $(this),
      display = $button.attr('data-display'),
      $target = $('.catal-ex');

    if ($target.length) {
      if ($target.hasClass('catal-ex-array')) {
        $target.removeClass('catal-ex-array');
      }

      if ($target.hasClass('catal-ex-blocs')) {
        $target.removeClass('catal-ex-blocs');
      }

      if (display == 'array') {
        $target.addClass('catal-ex-array');
      } else if (display == 'compact') {
        $target.addClass('catal-ex-blocs');
      }

      $('.crd-toggle .is-active').removeClass('is-active');
      // #11258 / Liste Produits & Exposants > Pb d'affichage picto au changement de vue ==> It's now an .icon-catal (specific font icon) and not .icon anymore. Let's search for a class attribute matching "begins by icon followed by nothing or whatever"
      $('.crd-toggle [class^="icon"][data-displayicon="' + display + '"]').addClass('is-active');
    }
  };

  if ($('.crd-toggle').length) {
    $('.crd-toggle').on('click.cataDisplay', function() {
      $('.catal-results-display').toggleClass('is-open');
      e.preventDefault();
    });
  }

  if ($('.crd-button').length) {
    $('.crd-button').on('click.cataDisplay', function() {
      $(this).catalogueDisplayChoice();
      $('.catal-results-display').removeClass('is-open');
      e.preventDefault();
    })
  }
}(jQuery));

/**!
	Corporate Navigation
	Dropdown menu & Mega menu navigation

	@contributors: Geoffrey Crofte (Alsacréations)
	@date-created: 2015-04-01
	@last-update: 2015-05-28
 */

;(function($) {

	var $menuline = $('.mn-menu-line'),
		$menu = $('.mn-menu'),
		$submenus = $menu.find('.mn-item-has-megamenu, .mn-item-has-submenu'),
		speed = 1000,
		menuInitPos = $('#main').offset(),
		scrolltimer,
		resizetimer;

	// actions on mouse interactions
	$submenus.on('mouseenter.megamenu', function(e){
			$(this).addClass('is-open')
				.find('> .mn-sub-menu-mega, > .mn-sub-menu').stop().fadeIn(speed);
		})
		.on('mouseleave.megamenu', function(e){
			$(this).removeClass('is-open')
				.find('> .mn-sub-menu-mega, > .mn-sub-menu').stop().fadeOut(speed);
		});

	// accessibility (keyboard tab nav)
	$submenus.find('> .mn-link').on('focus', function(){
		$(this).closest('.mn-menu-item').trigger('mouseenter');
	});
	$submenus.find('a:last').on('blur', function(){
		$(this).closest('.mn-item-lvl-1').trigger('mouseleave');
	});

	// sticky things on scroll
	var bannerHeight = $menuline.closest('.site-banner').height();
	$menuline.closest('.site-banner').addClass('is-stuck');
	var bannerHeightStuck = $menuline.closest('.site-banner').height();
	$menuline.closest('.site-banner').removeClass('is-stuck');

	$( window ).on('scroll mousewheel DOMMouseScroll MozMousePixelScroll', { mousewheel: { behavior: 'debounce', delay: 500 } }, function(event){
		clearTimeout(scrolltimer);
		scrolltimer = setTimeout(function(){
			if ( ( $('body').hasClass('front') && $(window).scrollTop() > bannerHeight - bannerHeightStuck ) || ( !$('body').hasClass('front') && $(window).scrollTop() > bannerHeight)   ){
				$menuline.closest('.site-banner').addClass('is-stuck');
				if( $('.is-contentPusher').length === 0) {
					var decal = bannerHeight;
					$menuline.closest('.site-banner').before('<div class="is-contentPusher" style="height: '+decal+'px" ></div>');
					//console.log(bannerHeightStuck);
				}
				if( $('body.front').length === 0 && /iP(ad|hone|od)/.test(navigator.userAgent)){
					//correctif iPad
					$menuline.closest('.site-banner').find('.header-intro').hide().show(0);
				}
			}
			else {
				$('.is-contentPusher').remove();
				$menuline.closest('.site-banner').removeClass('is-stuck');
			}

		}, 15);
	});

	$( window ).resize( function(event) {
		clearTimeout(scrolltimer);
		resizetimer = setTimeout(function(){
			//console.log('resize');

			$('.site-banner > .inside > .header-intro').outerHeight($(window).height());
		});
	});
})(jQuery);

/**!
 Datepicker
 Datepicker module with Pikaday

 @contributors: Rodolphe (Alsacréations)
 @date-created: 2015-06-12
 */

(function($) {

  $.cxpDatepicker = function(el, options) {

    var defaults = {};

    var plugin = this;

    plugin.settings = {};

    var $element = $(el),
      element = el;

    // Plugin initialization
    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);
      updateSettingsFromHTMLData();
      registerEvents();
    };

    // Reads plugin settings from HTML data-* attributes (camelCase)
    var updateSettingsFromHTMLData = function() {
      var data = $element.data();
      for (var dat in data) plugin.settings[dat] = data[dat];
    };

    // Event Handlers on HTML components inside the plugin
    var registerEvents = function() {
      $element.on('click', false); // preventDefault in <input type="date">
      plugin.settings.picker = new Pikaday({
        field: element,
        format: 'DD/MM/YYYY',
      });
      $element.next('.btn-datepiker').on('click', function() {
        plugin.settings.picker.show();
      });
    };

    plugin.init();

  };

  $.fn.cxpDatepicker = function(options) {

    return this.each(function() {
      if (undefined === $(this).data('cxpDatepicker')) {
        var plugin = new $.cxpDatepicker(this, options);
        $(this).data('cxpDatepicker', plugin);
      }
    });

  };

  $('.cxp-datepicker').cxpDatepicker();

})(jQuery);

/*
 Summary Not Accordeon Version Only corpo
 Permet de mettre en place un menu qui scroll à l'élement et ouvre le premier item,
 Permet aussi de gérer les dépliages/repliages

 classes utilisée:
 .js-sna-menu
 .js-sna-item-container
 .js-sna-item-dist-container
 .js-sna-item-dist-link when link and content aren't
 .js-sna-item
 .js-sna-item-link
 .js-sna-item-link-list

 .js-sna-item-content


 @contributors:  Guillaume Focheux (Alsacréations)
 @date-created: 2015-04-21
 @last-update: 2016-03-07
 */
;
(function($) {

  //ScrollTo

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  $('.js-sna-menu a').off('click.sna').on('click.sna', function(e) {
    e.preventDefault();
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - 20;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);

    if ($(href).hasClass('js-sna-item-container')) {
      if ($(href).find('.js-sna-item-link').length > 0) {
        $(href).find('.js-sna-item-link').first().not('.is-active').trigger('click');
      }
    }
  });

  // Click event
  $('.js-sna-item-link').off('click.sna').on('click.sna', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    if ($('.icon-plus', this).length > 0) {
      $('.icon-plus', this).addClass('icon-minus').removeClass('icon-plus');
      $(this).closest('.js-sna-item').children('.js-sna-item-content').addClass('is-open');
    } else if ($('.icon-minus', this).length > 0) {
      $('.icon-minus', this).removeClass('icon-minus').addClass('icon-plus');
      $(this).closest('.js-sna-item').children('.js-sna-item-content').removeClass('is-open');
    }
  });

})(jQuery);

/**!
	Fold
	(Un)folds content when a trigger/cmd is activated. Not an accordion, each fold is independent. Seen on mobile catalogue / Exhibitor details

	@contributors: Philippe Vayssière (Alsacréations)
	@date-created: 2015-11-02
	@last-update: 2015-11-03
 */

;(function($) {

	var selFoldContainer = '.js-fold',
		selFoldCmd = '.js-fold-cmd',
		selFoldTarget = '.js-fold-target',
		$foldContainer = $(selFoldContainer),
		$foldCmd = $(selFoldCmd),
		$selFoldTarget = $(selFoldTarget);

	// Init: hides every foldable content
	$(document).ready(function() {
		$selFoldTarget.addClass('js-hidden'); // Content initially hidden. This class should already be in HTML code generated by server, this is just in case©
	});

	// Hide/show content after click on command button
	$foldContainer.on('click', selFoldCmd, function() {
		$(this).toggleClass('is-active');
		$(this).closest(selFoldContainer).find(selFoldTarget).toggleClass('js-hidden');
	});

})(jQuery);
/**!
 Linked form items
 Linked form items module

 @contributors: Rodolphe (Alsacréations)
 @date-created: 2015-04-28
 @last-update: 2015-04-28
 */

(function($) {

   $.cxpFormlink = function(el, options) {

      var defaults = {
        target:null, // target element to toggle
      };

      var plugin = this;

      plugin.settings = {};

      var $element = $(el),
          element = el;

      // Plugin initialization
      plugin.init = function() {
         plugin.settings = $.extend({}, defaults, options);
         updateSettingsFromHTMLData();
         // Hide target element is source element is not checked
         if(plugin.settings.target!==null) {
           if(!$element.is(':checked')) $(plugin.settings.target).hide();
         }
         registerEvents();
      };

      // Reads plugin settings from HTML data-* attributes (camelCase)
      var updateSettingsFromHTMLData = function() {
         var data = $element.data();
         for(var dat in data) plugin.settings[dat] = data[dat];
      };

      // Event Handlers on HTML components inside the plugin
      var registerEvents = function() {
        $element.on('click', function() {
          $(plugin.settings.target).toggle($element.is(':checked'));
        });
      };

      plugin.init();

   };

   $.fn.cxpFormlink = function(options) {

       return this.each(function() {
           if (undefined === $(this).data('cxpFormlink')) {
               var plugin = new $.cxpFormlink(this, options);
               $(this).data('cxpFormlink', plugin);
           }
       });

   };

   $('.cxp-formlink').cxpFormlink();

 })(jQuery);

/**!
 Gallery Slider
 Description du module

 @contributors: Guillaume Focheux (Alsacréations)
 @date-created: 2015-04-28
 @last-update: 2015-04-29
 */

;(function ($) {

	setTimeout(function () {
		var $galInfinite = $("#gallery-infinite");


		$galInfinite.infinitescroll({
			navSelector: '#galinfnav', // selector for the paged navigation
			nextSelector: '#galinfnav a', // selector for the NEXT link (to page 2)
			itemSelector: '.gal-item', // selector for all items you'll retrieve
			animate: true,
			debug: false,
			loading: {
				speed: 0,
				selector: '.loading',
			    msgText:"<div class=\"loading-inner\"><span class=\"shape\"></span><span class=\"shape\"></span><span class=\"shape\"></span></div>"+
				"<p class=\"loading-txt\">Chargement en cours, merci de patienter</p>"
			}
		},
		// trigger Masonry as a callback
		function (newElements) {
			// hide new items while they are loading
			var $newElems = $(newElements).css({opacity: 0});
			// ensure that images load before adding to masonry layout
			$newElems.imagesLoaded(function () {
				// show elems now they're ready
				$newElems.animate({opacity: 1});
				$galInfinite.masonry('appended', $newElems, true);
			});
		}
		);
	}, 500);


})(jQuery);

/**!
 Gallery Slider
 Description du module

 @contributors: Guillaume Focheux (Alsacréations)
 @date-created: 2015-04-28
 @last-update: 2015-04-29
 */

;
(function($) {

    $.cxpGallerySwiper = function(el, options) {

        var defaults = {
            surveyPostUrl: '' // URL to post results
        };

        var plugin = this;

        plugin.settings = {};

        var $element = $(el),
            element = el;

        // Plugin initialization
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            updateSettingsFromHTMLData();
            registerEvents();
        };

        // Reads plugin settings from HTML data-* attributes (camelCase)
        var updateSettingsFromHTMLData = function() {
            var data = $element.data();
            for (var dat in data) plugin.settings[dat] = data[dat];
        };

        // Event Handlers on HTML components inside the plugin
        var registerEvents = function() {
            $element.on('click', '.gal-js-item-link', plugin.updateGallerySlider);
        };

        // Update the gallery slider
        plugin.updateGallerySlider = function(e) {

            var indexSelected = $(this).closest('.gal-js-item').index();
            var $swiper = $($element.data('swiper'));
            var cxpSwiper = $swiper.data('cxpSwiper');

            // Clear swiper content
            if (cxpSwiper) cxpSwiper.destroy();
            $('.swiper-wrapper', $swiper).empty();

            $element.children('.gal-js-item').each(function() {
                $('.swiper-wrapper', $swiper).append(plugin.generateSlide($(this)));
            });

            // Reinit swiper
            $swiper.cxpSwiper();

            setTimeout(function() { // Hack for null position
                if (indexSelected > 0) {
                  $swiper.data('cxpSwiper').disableTransitions();
                  $swiper.data('cxpSwiper').goTo(indexSelected);
                }
            }, 25);


            if ($swiper.data('resize') == 1) {
                $('.swiper-wrapper', $swiper).find('.gal-item-img').each(function(e){
                    $(this).hide();
                    $(this).load(plugin.resizeImg);
                    $(this).fadeIn(500);
                    });
            }
            e.preventDefault();
        };

        // resize all Image
        plugin.resizeImg = function() {
            var $img = $(this),
                $modal = $(this).closest('.gal-modal'),
                modalHeight = $modal.height() - parseInt($img.css('marginTop')),
                modalWidth = $modal.width(),
                imgHeight = $img[0].naturalHeight,
                imgWidth = $img[0].naturalWidth,
                contentHeight = $(this).closest('.gal-item').find('.gal-item-content').innerHeight(),
                $content = $(this).closest('.gal-item').find('.gal-item-content').first(),
                contentTop = $content.position().top,
                imgMaxHeight = modalHeight;
            if ($(this).closest('.gal-item').find('.gal-item-content').css('position') != 'absolute') {
                var contentAdditionHeight = 0;
                $(this).closest('.gal-item').find('.gal-item-content').find('> *').each(function() {
                    contentAdditionHeight += $(this).outerHeight();
                });
                contentHeight = contentHeight + contentAdditionHeight;
                imgMaxHeight = modalHeight - contentHeight;
            }

            var newHeight = 0,
                newWitdh = 0,
                ratio = 1;

            if (imgMaxHeight < imgHeight) {
                newHeight = imgMaxHeight;
                ratio = imgMaxHeight / imgHeight;
                newWidth = imgWidth * ratio;
                // Adjust for width too large
                if (newWidth > modalWidth) {
                    newHeight = (modalWidth / newWidth) * newHeight;
                    newWidth = modalWidth;
                }

            } else if (imgWidth >= modalWidth) {
                newHeight = (modalWidth / imgWidth) * imgHeight;
                newWidth = modalWidth;
                // Adjust for width too large
                if (newHeight > imgMaxHeight) {
                    newWidth = (imgMaxHeight / imgHeight) * newWidth;
                    newHeightWidth = modalHeight;
                }
            } else {
                newWidth = imgWidth;
                newHeight = imgHeight;
            }

            if( newHeight > newWidth ){
                $img.closest('.gal-item').addClass('portrait-mode');
            } else {
                $img.closest('.gal-item').addClass('landscape-mode');
            }

            $img.height(newHeight);
            $img.width(newWidth);
            $img.margin = 'auto';
        };

        plugin.generateSlide = function($elem) {
            var tplGallerySlider = '<div class="gal-item gal-js-item slider-item"> ' +
                '   <div class="gal-item-illust"><img class="gal-item-img" src="{{img-src}}" width="{{img-width}}" height="{{img-height}}" alt="{{img-alt}}"></div>' +
                '   <div class="gal-item-content">' +
                '	<p class="gal-item-copy">&copy;{{img-copy}}</p>' +
                '	<h2 class="gal-item-title"><a href="#">{{img-title}}</a></h2>' +
                '	<p class="gal-item-desc">{{img-desc}}</p>' +
                '   </div>' +
                '</div>';

            tplGallerySlider = tplGallerySlider.replace('{{img-src}}', $elem.data('imgSrc'));
            tplGallerySlider = tplGallerySlider.replace('{{img-alt}}', $elem.data('imgAlt'));
            tplGallerySlider = tplGallerySlider.replace('{{img-width}}', $elem.data('imgWidth'));
            tplGallerySlider = tplGallerySlider.replace('{{img-height}}', $elem.data('imgHeight'));
            tplGallerySlider = tplGallerySlider.replace('{{img-title}}', $elem.data('imgTitle'));
            tplGallerySlider = tplGallerySlider.replace('{{img-desc}}', $elem.data('imgDesc'));
            tplGallerySlider = tplGallerySlider.replace('{{img-copy}}', $elem.data('imgCopy'));
            return tplGallerySlider;
        };

        plugin.init();

    };

    $.fn.cxpGallerySwiper = function(options) {

        return this.each(function() {
            if (undefined === $(this).data('cxpGallerySwiper')) {
                var plugin = new $.cxpGallerySwiper(this, options);
                $(this).data('cxpGallerySwiper', plugin);
            }
        });

    };

    $('.gallery-js').cxpGallerySwiper();

})(jQuery);

/**!
 Gallery
 Description du module

 @contributors: Guillaume Focheux (Alsacréations)
 @date-created: 2015-04-28
 @last-update: 2015-04-29
 */

;
(function($) {

  $.cxpGallery = function(el, options) {

    var defaults = {};

    var plugin = this;

    plugin.settings = {};

    var $element = $(el),
      element = el;

    // Plugin initialization
    plugin.init = function() {

      plugin.settings = $.extend({}, defaults, options);
      updateSettingsFromHTMLData();

      // Masonry didn't align images verticaly - bug FIX : Added delay of 100 ms
      setTimeout( function() { 

        if ($element.length > 0) {
          if ($element.parents('body-corporate').length > 0) {
            $element.masonry({
              'itemSelector': '.gal-js-item'
            });
          } else { 
            $element.masonry({
              'columnWidth': '.gal-item-simple',
              'itemSelector': '.gal-js-item',
              'percentPosition': true
            });
          }
        }

      }, 100);

    };

    // Reads plugin settings from HTML data-* attributes (camelCase)
    var updateSettingsFromHTMLData = function() {
      var data = $element.data();
      for (var dat in data) plugin.settings[dat] = data[dat];
    };

    plugin.init();

  };

  $.fn.cxpGallery = function(options) {

    return this.each(function() {
      if (undefined === $(this).data('cxpGallery')) {
        var plugin = new $.cxpGallery(this, options);
        $(this).data('cxpGallery', plugin);
      }
    });

  };

  $('.gallery-js-masonry').cxpGallery();

})(jQuery);


/**!
 History
 Stores id of items seen in pages to get a past history

 @contributors: Rodolphe (Alsacréations)
 @date-created: 2015-11-25
 @last-update: 2016-05-06
 */

(function($) {

  // Test if support
  if(!window.localStorage || !JSON.parse) return false;

  $.cxpHistory = function(el, options) {

    var defaults = {
      storageKey:'history',
      maxItems:10,
      historyItem:'.js-history-item',
      historyContainer:'.js-history-container',
      url:'dev/ajax/history.php', // default URL
      clearButton:'.js-history-clear'
    };

    var plugin = this;

    plugin.settings = {};

    var $element = $(el),
      element = el;

    // Plugin initialization
    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);
      updateSettingsFromHTMLData();
      plugin.storeCurrentIntoHistory();
      plugin.loadHistoryIntoContent();
      registerEvents();
    };

    // Reads plugin settings from HTML data-* attributes (camelCase)
    var updateSettingsFromHTMLData = function() {
      var data = $element.data();
      for(var dat in data) plugin.settings[dat] = data[dat];
    };

    // Event Handlers on HTML components inside the plugin
    var registerEvents = function() {
      plugin.$container = $(plugin.settings.historyContainer);
      plugin.$container.find(plugin.settings.clearButton).on('click',plugin.clearHistory);
    };

    // Store current id & type into history
    plugin.storeCurrentIntoHistory = function() {
      var now = new Date().getTime(); // Timestamp
      $element.find(plugin.settings.historyItem).each(function() {
        var json = null;
        var itemExists = false;
        var data = $(this).data();
        var historyData = window.localStorage.getItem(plugin.settings.storageKey);
        if(historyData!==null) { // Is there already some data ?
          json = JSON.parse(historyData);
          if(Array.isArray(json[data.historyType])) {
            // Delete last item(s) if > maxItems
            while(json[data.historyType].length>=plugin.settings.maxItems) {
              json[data.historyType].pop();
            }
          } else {
            // json = {};
            json[data.historyType] = [];
          }
          // Insert ID at the beginning of the array if needed
          for(i=0;i<json[data.historyType].length;i++) {
            if(json[data.historyType][i].id==data.historyId) itemExists = true;
          }
          if(!itemExists) { // If not exists
            json[data.historyType].unshift({id:data.historyId,ts:now});
          }
        } else { // New object
          json = {};
          json[data.historyType] = [{id:data.historyId,ts:now}];
        }
        if(json) window.localStorage.setItem(plugin.settings.storageKey,JSON.stringify(json));
      });
    };

    // Load contents from server with local history
    plugin.loadHistoryIntoContent = function() {
      plugin.$container = $(plugin.settings.historyContainer);
      if(plugin.$container) {
        // Get history from localStorage
        var historyData = window.localStorage.getItem(plugin.settings.storageKey);
        // Get URL to load from html attributes (if not, fallback to plugin settings)
        var url = plugin.$container.data('url');
        if(url===undefined) url = plugin.settings.url;
        // Construct object to send to server (POST)
        var objAjax = {history:JSON.parse(historyData)};
        // AJAX Load HTML response into container
        if(historyData!==null) plugin.$container.find('.js-content').load(url,objAjax, function() {
          // Update counter
          var cnt = $(this).find('.hist-item').length;
          plugin.$container.find('.qty-round-nb').text(cnt);
          plugin.$container.find(plugin.settings.clearButton).on('click',plugin.clearHistory);
        });
      }
    };

    // Clear all data of the history and empty the content box
    plugin.clearHistory = function(e) {
      window.localStorage.removeItem(plugin.settings.storageKey);
      plugin.$container.find('.js-content, .hist-close-btn').empty();
      plugin.$container.find('.qty-round-nb').text(0);
      plugin.$container.find('.modal').remove();
      e.preventDefault();
    };

    plugin.init();

  };

  $.fn.cxpHistory = function(options) {

    return this.each(function() {
      if (undefined === $(this).data('cxpHistory')) {
        var plugin = new $.cxpHistory(this, options);
        $(this).data('cxpHistory', plugin);
      }
    });

  };

  $('.cxp-history').cxpHistory();

})(jQuery);

/*!
 --------------------------------
 Infinite Scroll
 --------------------------------
 + https://github.com/paulirish/infinite-scroll
 + version 2.1.0
 + Copyright 2011/12 Paul Irish & Luke Shumard
 + Licensed under the MIT license

 + Documentation: http://infinite-scroll.com/
 */
;
(function(e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
})(function(e, t) {
    "use strict";
    e.infinitescroll = function(n, r, i) {
        this.element = e(i);
        if (!this._create(n, r)) {
            this.failed = true
        }
    };
    e.infinitescroll.defaults = {
        loading: {
            finished: t,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
            msg: null,
            msgText: "<em>Loading the next set of posts...</em>",
            selector: null,
            speed: "fast",
            start: t
        },
        state: {
            isDuringAjax: false,
            isInvalidPage: false,
            isDestroyed: false,
            isDone: false,
            isPaused: false,
            isBeyondMaxPage: false,
            currPage: 1
        },
        debug: false,
        behavior: t,
        binder: e(window),
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null,
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: false,
        pathParse: t,
        dataType: "html",
        appendCallback: true,
        bufferPx: 40,
        errorCallback: function() {},
        infid: 0,
        pixelsFromNavToBottom: t,
        path: t,
        prefill: false,
        maxPage: t
    };
    e.infinitescroll.prototype = {
        _binding: function(n) {
            var r = this,
                i = r.options;
            i.v = "2.0b2.120520";
            if (!!i.behavior && this["_binding_" + i.behavior] !== t) {
                this["_binding_" + i.behavior].call(this);
                return
            }
            if (n !== "bind" && n !== "unbind") {
                this._debug("Binding value  " + n + " not valid");
                return false
            }
            if (n === "unbind") {
                this.options.binder.unbind("smartscroll.infscr." + r.options.infid)
            } else {
                this.options.binder[n]("smartscroll.infscr." + r.options.infid, function() {
                    r.scroll()
                })
            }
            this._debug("Binding", n)
        },
        _create: function(r, i) {
            var s = e.extend(true, {}, e.infinitescroll.defaults, r);
            this.options = s;
            var o = e(window);
            var u = this;
            if (!u._validate(r)) {
                return false
            }
            var a = e(s.nextSelector).attr("href");
            if (!a) {
                this._debug("Navigation selector not found");
                return false
            }
            s.path = s.path || this._determinepath(a);
            s.contentSelector = s.contentSelector || this.element;
            s.loading.selector = s.loading.selector || s.contentSelector;
            s.loading.msg = s.loading.msg || e('<div id="infscr-loading"><div>' + s.loading.msgText + "</div></div>");
            (new Image).src = s.loading.img;
            if (s.pixelsFromNavToBottom === t) {
                s.pixelsFromNavToBottom = e(document).height() - e(s.navSelector).offset().top;
                this._debug("pixelsFromNavToBottom: " + s.pixelsFromNavToBottom)
            }
            var f = this;
            s.loading.start = s.loading.start || function() {
                e(s.navSelector).hide();
                s.loading.msg.appendTo(s.loading.selector).show(s.loading.speed, e.proxy(function() {
                    this.beginAjax(s)
                }, f))
            };
            s.loading.finished = s.loading.finished || function() {
                if (!s.state.isBeyondMaxPage)
                    s.loading.msg.fadeOut(s.loading.speed)
            };
            s.callback = function(n, r, u) {
                if (!!s.behavior && n["_callback_" + s.behavior] !== t) {
                    n["_callback_" + s.behavior].call(e(s.contentSelector)[0], r, u)
                }
                if (i) {
                    i.call(e(s.contentSelector)[0], r, s, u)
                }
                if (s.prefill) {
                    o.bind("resize.infinite-scroll", n._prefill)
                }
            };
            if (r.debug) {
                if (Function.prototype.bind && (typeof console === "object" || typeof console === "function") && typeof console.log === "object") {
                    ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(e) {
                        console[e] = this.call(console[e], console)
                    }, Function.prototype.bind)
                }
            }
            this._setup();
            if (s.prefill) {
                this._prefill()
            }
            return true
        },
        _prefill: function() {
            function i() {
                return e(n.options.contentSelector).height() <= r.height()
            }
            var n = this;
            var r = e(window);
            this._prefill = function() {
                if (i()) {
                    n.scroll()
                }
                r.bind("resize.infinite-scroll", function() {
                    if (i()) {
                        r.unbind("resize.infinite-scroll");
                        n.scroll()
                    }
                })
            };
            this._prefill()
        },
        _debug: function() {
            if (true !== this.options.debug) {
                return
            }
            if (typeof console !== "undefined" && typeof console.log === "function") {
                if (Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === "string") {
                    console.log(Array.prototype.slice.call(arguments).toString())
                } else {
                    console.log(Array.prototype.slice.call(arguments))
                }
            } else if (!Function.prototype.bind && typeof console !== "undefined" && typeof console.log === "object") {
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
            }
        },
        _determinepath: function(n) {
            var r = this.options;
            if (!!r.behavior && this["_determinepath_" + r.behavior] !== t) {
                return this["_determinepath_" + r.behavior].call(this, n)
            }
            if (!!r.pathParse) {
                this._debug("pathParse manual");
                return r.pathParse(n, this.options.state.currPage + 1)
            } else if (n.match(/^(.*?)\b2\b(.*?$)/)) {
                n = n.match(/^(.*?)\b2\b(.*?$)/).slice(1)
            } else if (n.match(/^(.*?)2(.*?$)/)) {
                if (n.match(/^(.*?page=)2(\/.*|$)/)) {
                    n = n.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    return n
                }
                n = n.match(/^(.*?)2(.*?$)/).slice(1)
            } else {
                if (n.match(/^(.*?page=)1(\/.*|$)/)) {
                    n = n.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    return n
                } else {
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
                    r.state.isInvalidPage = true
                }
            }
            this._debug("determinePath", n);
            return n
        },
        _error: function(n) {
            var r = this.options;
            if (!!r.behavior && this["_error_" + r.behavior] !== t) {
                this["_error_" + r.behavior].call(this, n);
                return
            }
            if (n !== "destroy" && n !== "end") {
                n = "unknown"
            }
            this._debug("Error", n);
            if (n === "end" || r.state.isBeyondMaxPage) {
                this._showdonemsg()
            }
            r.state.isDone = true;
            r.state.currPage = 1;
            r.state.isPaused = false;
            r.state.isBeyondMaxPage = false;
            this._binding("unbind")
        },
        _loadcallback: function(r, i, s) {
            var o = this.options,
                u = this.options.callback,
                a = o.state.isDone ? "done" : !o.appendCallback ? "no-append" : "append",
                f;
            if (!!o.behavior && this["_loadcallback_" + o.behavior] !== t) {
                this["_loadcallback_" + o.behavior].call(this, r, i);
                return
            }
            switch (a) {
                case "done":
                    this._showdonemsg();
                    return false;
                case "no-append":
                    if (o.dataType === "html") {
                        i = "<div>" + i + "</div>";
                        i = e(i).find(o.itemSelector)
                    }
                    if (i.length === 0) {
                        return this._error("end")
                    }
                    break;
                case "append":
                    var l = r.children();
                    if (l.length === 0) {
                        return this._error("end")
                    }
                    f = document.createDocumentFragment();
                    while (r[0].firstChild) {
                        f.appendChild(r[0].firstChild)
                    }
                    this._debug("contentSelector", e(o.contentSelector)[0]);
                    e(o.contentSelector)[0].appendChild(f);
                    i = l.get();
                    break
            }
            o.loading.finished.call(e(o.contentSelector)[0], o);
            if (o.animate) {
                var c = e(window).scrollTop() + e(o.loading.msg).height() + o.extraScrollPx + "px";
                e("html,body").animate({
                    scrollTop: c
                }, 800, function() {
                    o.state.isDuringAjax = false
                })
            }
            if (!o.animate) {
                o.state.isDuringAjax = false
            }
            u(this, i, s);
            if (o.prefill) {
                this._prefill()
            }
        },
        _nearbottom: function() {
            var r = this.options,
                i = 0 + e(document).height() - r.binder.scrollTop() - e(window).height();
            if (!!r.behavior && this["_nearbottom_" + r.behavior] !== t) {
                return this["_nearbottom_" + r.behavior].call(this)
            }
            this._debug("math:", i, r.pixelsFromNavToBottom);
            return i - r.bufferPx < r.pixelsFromNavToBottom
        },
        _pausing: function(n) {
            var r = this.options;
            if (!!r.behavior && this["_pausing_" + r.behavior] !== t) {
                this["_pausing_" + r.behavior].call(this, n);
                return
            }
            if (n !== "pause" && n !== "resume" && n !== null) {
                this._debug("Invalid argument. Toggling pause value instead")
            }
            n = n && (n === "pause" || n === "resume") ? n : "toggle";
            switch (n) {
                case "pause":
                    r.state.isPaused = true;
                    break;
                case "resume":
                    r.state.isPaused = false;
                    break;
                case "toggle":
                    r.state.isPaused = !r.state.isPaused;
                    break
            }
            this._debug("Paused", r.state.isPaused);
            return false
        },
        _setup: function() {
            var n = this.options;
            if (!!n.behavior && this["_setup_" + n.behavior] !== t) {
                this["_setup_" + n.behavior].call(this);
                return
            }
            this._binding("bind");
            return false
        },
        _showdonemsg: function() {
            var r = this.options;
            if (!!r.behavior && this["_showdonemsg_" + r.behavior] !== t) {
                this["_showdonemsg_" + r.behavior].call(this);
                return
            }
            r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({
                opacity: 1
            }, 2e3, function() {
                e(this).parent().fadeOut(r.loading.speed)
            });
            r.errorCallback.call(e(r.contentSelector)[0], "done")
        },
        _validate: function(n) {
            for (var r in n) {
                if (r.indexOf && r.indexOf("Selector") > -1 && e(n[r]).length === 0) {
                    this._debug("Your " + r + " found no elements.");
                    return false
                }
            }
            return true
        },
        bind: function() {
            this._binding("bind")
        },
        destroy: function() {
            this.options.state.isDestroyed = true;
            this.options.loading.finished();
            return this._error("destroy")
        },
        pause: function() {
            this._pausing("pause")
        },
        resume: function() {
            this._pausing("resume")
        },
        beginAjax: function(r) {
            var i = this,
                s = r.path,
                o, u, a, f;
            r.state.currPage++;
            if (r.maxPage !== t && r.state.currPage > r.maxPage) {
                r.state.isBeyondMaxPage = true;
                this.destroy();
                return
            }
            o = e(r.contentSelector).is("table, tbody") ? e("<tbody/>") : e("<div/>");
            u = typeof s === "function" ? s(r.state.currPage) : s.join(r.state.currPage);
            i._debug("heading into ajax", u);
            a = r.dataType === "html" || r.dataType === "json" ? r.dataType : "html+callback";
            if (r.appendCallback && r.dataType === "html") {
                a += "+callback"
            }
            switch (a) {
                case "html+callback":
                    i._debug("Using HTML via .load() method");
                    o.load(u + " " + r.itemSelector, t, function(t) {
                        i._loadcallback(o, t, u)
                    });
                    break;
                case "html":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    e.ajax({
                        url: u,
                        dataType: r.dataType,
                        complete: function(t, n) {
                            f = typeof t.isResolved !== "undefined" ? t.isResolved() : n === "success" || n === "notmodified";
                            if (f) {
                                i._loadcallback(o, t.responseText, u)
                            } else {
                                i._error("end")
                            }
                        }
                    });
                    break;
                case "json":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    e.ajax({
                        dataType: "json",
                        type: "GET",
                        url: u,
                        success: function(e, n, s) {
                            f = typeof s.isResolved !== "undefined" ? s.isResolved() : n === "success" || n === "notmodified";
                            if (r.appendCallback) {
                                if (r.template !== t) {
                                    var a = r.template(e);
                                    o.append(a);
                                    if (f) {
                                        i._loadcallback(o, a)
                                    } else {
                                        i._error("end")
                                    }
                                } else {
                                    i._debug("template must be defined.");
                                    i._error("end")
                                }
                            } else {
                                if (f) {
                                    i._loadcallback(o, e, u)
                                } else {
                                    i._error("end")
                                }
                            }
                        },
                        error: function() {
                            i._debug("JSON ajax request failed.");
                            i._error("end")
                        }
                    });
                    break
            }
        },
        retrieve: function(r) {
            r = r || null;
            var i = this,
                s = i.options;
            if (!!s.behavior && this["retrieve_" + s.behavior] !== t) {
                this["retrieve_" + s.behavior].call(this, r);
                return
            }
            if (s.state.isDestroyed) {
                this._debug("Instance is destroyed");
                return false
            }
            s.state.isDuringAjax = true;
            s.loading.start.call(e(s.contentSelector)[0], s)
        },
        scroll: function() {
            var n = this.options,
                r = n.state;
            if (!!n.behavior && this["scroll_" + n.behavior] !== t) {
                this["scroll_" + n.behavior].call(this);
                return
            }
            if (r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) {
                return
            }
            if (!this._nearbottom()) {
                return
            }
            this.retrieve()
        },
        toggle: function() {
            this._pausing()
        },
        unbind: function() {
            this._binding("unbind")
        },
        update: function(n) {
            if (e.isPlainObject(n)) {
                this.options = e.extend(true, this.options, n)
            }
        }
    };
    e.fn.infinitescroll = function(n, r) {
        var i = typeof n;
        switch (i) {
            case "string":
                var s = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var t = e.data(this, "infinitescroll");
                    if (!t) {
                        return false
                    }
                    if (!e.isFunction(t[n]) || n.charAt(0) === "_") {
                        return false
                    }
                    t[n].apply(t, s)
                });
                break;
            case "object":
                this.each(function() {
                    var t = e.data(this, "infinitescroll");
                    if (t) {
                        t.update(n)
                    } else {
                        t = new e.infinitescroll(n, r, this);
                        if (!t.failed) {
                            e.data(this, "infinitescroll", t)
                        }
                    }
                });
                break
        }
        return this
    };
    var n = e.event,
        r;
    n.special.smartscroll = {
        setup: function() {
            e(this).bind("scroll", n.special.smartscroll.handler)
        },
        teardown: function() {
            e(this).unbind("scroll", n.special.smartscroll.handler)
        },
        handler: function(t, n) {
            var i = this,
                s = arguments;
            t.type = "smartscroll";
            if (r) {
                clearTimeout(r)
            }
            r = setTimeout(function() {
                e(i).trigger("smartscroll", s)
            }, n === "execAsap" ? 0 : 100)
        }
    };
    e.fn.smartscroll = function(e) {
        return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
    }
});

/*! jQuery UI - v1.11.4 - 2015-09-29
* http://jqueryui.com
* Includes: core.js, widget.js, position.js, autocomplete.js, menu.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=e.widget.extend.apply(null,[a].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))})),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget,function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete});


/**!
	Lang Switcher
	Language selector usually included inside the site header

	@contributors: Geoffrey Crofte (Alsacréations), Philippe Vayssière (Alsacréations)
	@date-created: 2015-04-01
	@last-update: 2015-12-09
 */
 
;(function($) {

	$('.js-lang-switcher').each(function(){

		var $_this = $(this);

		// button creation
		$_this.find('ul').before('<button class="ls-trigger js-toggle-trigger" type="button" title="'+$_this.data('title')+'">'+$_this.find('.is-active').text()+'</button>');

		// accessibility (tab nav)
		$_this.find('a:last').on('blur', function(){
			$_this.find('.js-toggle-trigger').trigger('click');
		});

		// Allows lang switcher to be displayed above "Back to top" if opened
		// It happens in mobile where lang-switcher is in footer
		// When lang switcher is closed, we still want it to be displayed under "Back to top"
		$_this.find('.js-toggle-trigger').on('click.ls', function() {
			var $lsToggle = $(this);
			// Adding higer z-index to footer > .inside than to its sibling .is-stuck.sf-ttt
			// It seems .is-open isn't there yet when the test is made so z-index is set in the 'else' statement
			var z = $('.is-stuck.sf-ttt').css('zIndex');
			if ($_this.hasClass('is-open')) {
				$('.site-footer .inside').css({'zIndex': 'auto'});
			} else {
				$('.site-footer .inside').css({'zIndex': z + 1});
			}
			return false;
		});

	})
	.toggleSlide();

})(jQuery);
/**!
 Library
 Library module with Cart in local storage

 @contributors: Guillaume (Alsacréations), Rodolphe
 @date-created: 2015-05-20
 @last-update: 2016-02-05
 */

(function($) {

    $.cxpLibrary = function(el, options) {

        var defaults = {
            // @PROD : Edit real AJAX request URL here
            downloadurl:'dev/ajax/library-download.php'
        };

        var plugin = this;
        plugin.settings = {};
        var $element = $(el),
            element = el,
            lsPrefix = 'cxpCart_', //prefix for the localstorage
            id = $element.data('cartId'), //id for name the localstorage
            cart = {
                'folders': {},
                'items': {}
            }, //object Cart
            $modal = $('#modal' + id), //modal basket
            $modalPreview = $('#modalPreview' + id), //modal preview
            cxpStorage = localStorage, //Define storage type
            cartButton = $('[data-cart-id="' + id + '"]').find('.lb-js-btn'); // CartButton

        // Plugin initialization
        plugin.init = function() {

            plugin.settings = $.extend({}, defaults, options);
            plugin.lsGet();
            if ($element.find('.lb-js-folder').length > 0) {
                updateFoldersInfos();
            }
            if ($element.find('.lb-js-item').length > 0) {
                updateItemsInfos();
            }
            updateCartButton();
            updateTotalLength();
            registerEvents();

            return true;
        };

        // LocalStorage Actions
        // get
        plugin.lsGet = function() {
            var cartRaw = cxpStorage.getItem(lsPrefix + id);
            if (cartRaw !== null) {
                cart = JSON.parse(cartRaw);
            } else {
                plugin.lsSet();
            }
        };

        // set
        plugin.lsSet = function() {
            var cartRaw = JSON.stringify(cart);
            cxpStorage.setItem(lsPrefix + id, cartRaw);
        };

        // remove
        plugin.lsRemove = function() {
            cxpStorage.removeItem(lsPrefix + id);
        };

        // length
        plugin.getLength = function(folder) {
            if (folder !== undefined) {
                if (cart.folders[folder] === undefined) {
                    return 0;
                }
                return Object.keys(cart.folders[folder]).length;
            } else {
                return Object.keys(cart.items).length;
            }
        };

        // UPDATE method
        var updateCartButton = function() {
            var nbItem = plugin.getLength();
            cartButton.removeClass('btn-invert').removeClass('btn-primary');
            if (nbItem > 0) {
                cartButton.attr('class', 'btn-primary ' + cartButton.attr('class'));
            } else {
                cartButton.attr('class', 'btn-invert ' + cartButton.attr('class'));
            }
            cartButton.find('.nb').text(nbItem);

            //Update length for the button inside modal
        };

        var updateFoldersInfos = function() {
            var $folders = $('.lb-js-folder');

            $folders.each(function() {
                var nbSelected = plugin.getLength($(this).data('folderId'));
                if (nbSelected > 0) {
                    $(this).find('.lb-list-link').addClass('is-selected');
                } else {
                    $(this).find('.lb-list-link').removeClass('is-selected');
                }
                $(this).find('.lb-list-infos').find('.nb').text(nbSelected);

            });

        };

        // Check the items if they are stored in the cart
        var updateItemsInfos = function() {
            var $items = $('.lb-js-item');
            $items.each(function() {
                if (cart.items[$(this).data('itemId')] !== undefined) {
                    $(this).find('.lb-js-item-checkbox').prop('checked', 'checked');
                    $(this).find('.lb-select-list-link').removeClass('is-checked').addClass('is-checked');
                } else {
                    $(this).find('.lb-js-item-checkbox').prop('checked', false);
                    $(this).find('.lb-select-list-link').removeClass('is-checked');
                }
            });
        };

        var updateTotalLength = function() {
            var TotalLength = 0;
            $.each(cart.items, function() {
                TotalLength += this.itemLength;
            });
            $modal.find('.lb-js-modal-download .lb-js-total').text(TotalLength);
        };

        // Event Handlers on HTML components inside the plugin
        var registerEvents = function() {

            $element.on('click.library', '.lb-js-item-checkbox', plugin.itemAction);
            $element.on('click.library', '.lb-select-list-link', plugin.itemPreview); // Galery previews
            $element.on('click.library', '.lb-js-btn', plugin.regenModalAction); // Download basket
            $modal.on('click.library', '.lb-js-modal-drop-all', plugin.resetCartAction);
            $modal.on('click.library', '.lb-js-modal-btn-drop-item', plugin.deleteFromCartAction);

            // If there is a pagination
            $element.on('pagechange','.cxp-pagination', function() {
                updateItemsInfos();
            });

            // Download link
            $modal.on('click.library','.lb-js-modal-download', function(e) {
                // Temporary hidden form to build a POST request
                var $form = $('<form>').attr({ "target": "_blank", "id": "downloadForm", "method": "POST", "action": plugin.settings.downloadurl }).hide();
                // For each cart item we use a hidden input field to POST the id
                $.each(cart.items, function() {
                    $form.append('<input type="hidden" name="files[]" value="'+this.itemId+'">');
                });
                $('body').append($form);
                $form.submit();
                setTimeout(function() {
                    $form.remove(); // Remove the temporary form
                },3000);
            });

        };

        // Actions

        // Update cart modal content (folder and items)
        plugin.regenModalAction = function(e) {
            var nbItem = plugin.getLength(),
                $modalContent = $modal.find('.lb-js-modal-content'),
                $template = $('#tpl-lb-js-modal-content').html();
            var cft = plugin.prepareCartForTemplate(); // Cart template
            if (nbItem > 0) {
                $('.lb-js-modal-drop-all, .lb-js-modal-download').show();
                $modalContent.html($.mustache($template, cft));
            } else {
                $('.lb-js-modal-drop-all, .lb-js-modal-download').hide();
                $('.lb-js-modal-content').html('<p>Le panier est vide.</p>');
            }
            updateTotalLength();
        };

        // Item checkbox click
        plugin.itemAction = function() {
            if ($(this).prop("checked")) {
                plugin.addToCart($(this));
            } else {
                plugin.removeFromCart($(this));
            }
            plugin.lsSet();
            updateCartButton();
            updateItemsInfos();
            updateTotalLength();
        };

        // Item click to display big modal preview
        plugin.itemPreview = function() {

            // Update modal window contents
            var $item = $(this).closest('.lb-js-item');

            $modalPreview.find('.lp-item-title').text($(this).find('.lb-select-list-title').text());
            $modalPreview.find('.lp-item-desc').text($(this).find('.lb-select-list-legend').text());
            $modalPreview.find('.lp-item-copy').text($(this).find('.lb-select-list-copyright').text());
            $modalPreview.find('.lp-item-size').text($(this).find('.lb-select-list-infos').text());
            if ($item.find('.lb-js-item-checkbox').is(":checked")) {
                $modalPreview.find('.lp-js-item-btn-add').hide();
                $modalPreview.find('.lp-js-item-btn-remove').show();
            } else {
                $modalPreview.find('.lp-js-item-btn-add').show();
                $modalPreview.find('.lp-js-item-btn-remove').hide();
            }

            // Iframe or img ?
            if($item.data("itemIframe")) {
                $('.lp-item-preview',$modalPreview).html('<iframe class="lp-item-iframe" src="'+$item.data("itemSrc")+'" style="border:0" scrolling="no"></iframe>');
            } else {
                $('.lp-item-preview',$modalPreview).html('<img class="lp-item-img" src="'+$item.data("itemPreview")+'" alt="'+$item.data("itemName")+'">');
            }

            // Binding
            $modalPreview.find('.lp-js-item-btn').off('click.library').on('click.library', function(e) {
                e.preventDefault();
                $item.find('.lb-js-item-checkbox').trigger('click.library');
                if ($item.find('.lb-js-item-checkbox').is(":checked")) {
                    $modalPreview.find('.lp-js-item-btn-add').hide();
                    $modalPreview.find('.lp-js-item-btn-remove').show();
                } else {
                    $modalPreview.find('.lp-js-item-btn-add').show();
                    $modalPreview.find('.lp-js-item-btn-remove').hide();
                }
            });

            // resize img after load
            var $img = $modalPreview.find('.lp-item-img');
            if($img.length>0) {
                $img.hide().load(plugin.resizeImgAction).fadeIn('50');
            }

        };

        // Reset Cart
        plugin.resetCartAction = function(e) {
            e.preventDefault();
            cart = {
                'folders': {},
                'items': {}
            };
            plugin.lsSet();
            plugin.regenModalAction();
            updateCartButton();
            updateItemsInfos();
            updateFoldersInfos();
            updateTotalLength();
        };

        plugin.deleteFromCartAction = function(e) {
            e.preventDefault();
            plugin.removeFromCart($(this));
            plugin.lsSet();
            plugin.regenModalAction();
            updateCartButton();
            updateItemsInfos();
            updateFoldersInfos();
            updateTotalLength();
        };

        // SubAction
        // Add item to selection
        plugin.addToCart = function($elem) {
            var itemData = $elem.closest('.lb-js-item').data();
            cart.items[itemData.itemId] = itemData;
            if (cart.folders[itemData.itemFolderId] === undefined) {
                cart.folders[itemData.itemFolderId] = {};
            }
            cart.folders[itemData.itemFolderId][itemData.itemId] = itemData;
        };
        // Remove from selection
        plugin.removeFromCart = function($elem) {
            var itemData;
            if ($elem.hasClass('lb-js-modal-btn-drop-item')) {
                itemData = cart.items[$elem.data('itemId')];
            } else {
                itemData = $elem.closest('.lb-js-item').data();
            }
            delete cart.items[itemData.itemId];
            delete cart.folders[itemData.itemFolderId][itemData.itemId];
        };

        // Populate data with checked items in order to build mustache template
        plugin.prepareCartForTemplate = function() {
            var cft = []; // Cart For Template
            // Loop to get JSON data
            Object.keys(cart.folders).forEach(function(folderKey) {
                var items = [];
                var folderName = '';
                var folder = '';
                Object.keys(cart.folders[folderKey]).forEach(function(itemKey) {
                    items.push(cart.folders[folderKey][itemKey]);
                    folderName = cart.folders[folderKey][itemKey].itemFolderName;
                });
                folder = '{ "folderId":"' + folderKey + '","folderName":"' + folderName + '", "items":' + JSON.stringify(items) + ' }';
                cft.push(JSON.parse(folder));
            });

            return JSON.parse('{"folders":' + JSON.stringify(cft) + '}');
        };

        // Resize image
        plugin.resizeImgAction = function(e) {
            var $img = $modalPreview.find('.lp-item-img'),
                //$modal = $modalPreview,
                modalHeight = $modalPreview.height() - parseInt($img.css('marginTop')),
                modalWidth = $modalPreview.width(),
                imgHeight = $img[0].naturalHeight,
                imgWidth = $img[0].naturalWidth,
                imgMaxHeight = modalHeight;

             var newHeight = 0,
                 newWitdh = 0,
                 ratio = 1;

             if (imgMaxHeight < imgHeight) {
                 newHeight = imgMaxHeight;
                 ratio = imgMaxHeight / imgHeight;
                 newWidth = imgWidth * ratio;
                 // Adjust for width too large
                 if (newWidth > modalWidth) {
                     newHeight = (modalWidth / newWidth) * newHeight;
                     newWidth = modalWidth;
                 }

             } else if (imgWidth >= modalWidth) {
                 newHeight = (modalWidth / imgWidth) * imgHeight;
                 newWidth = modalWidth;
                 // Adjust for width too large
                 if (newHeight > imgMaxHeight) {
                     newWidth = (imgMaxHeight / imgHeight) * newWidth;
                     newHeightWidth = modalHeight;
                 }
             } else {
                 newWidth = imgWidth;
                 newHeight = imgHeight;
             }

            $img.height(newHeight);
            $img.width(newWidth);
            $img.margin = 'auto';

        };

        plugin.init();
    };

    $.fn.cxpLibrary = function(options) {
        return this.each(function() {
            if (undefined === $(this).data('cxpLibrary')) {
                var plugin = new $.cxpLibrary(this, options);
                $(this).data('cxpLibrary', plugin);
            }
        });
    };

    $('.lb-js').cxpLibrary();

    // For Filter add toggle slide

    $('.lb-js-filter').toggleSlide();

})(jQuery);

/*!
 jQuery modal/lightbox plugin
 @name modal.js
 @author Alsacreations (@alsacreations)
 @version 1.0
 @date 27/05/2015
 @category jQuery Plugin
 @copyright (c) 2015 Alsacréations
 @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */

(function($) {

    "use strict";
    var cxpModal, defaultOptions, modalBind;

    modalBind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };

    // Plugin default options
    defaultOptions = {
        // jQuery formatted selector to search for focusable items
        focusableElementsString: "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",
        // store the item that has focus before opening the modal window
        focusedElementBeforeModal: undefined,
        resizeDelay: 50
    };

    cxpModal = (function(options) {

        // Constructor
        function cxpModal(handler, options) {

            // plugin variables
            this.handler = handler;
            this.modaltarget = false;
            this.resizeTimer = null;

            // Extend default options
            $.extend(true, this, defaultOptions, options);

            // Bind methods.
            this.update = modalBind(this.update, this);
            //this.onResize = modalBind(this.onResize, this);
            this.init = modalBind(this.init, this);
            this.clear = modalBind(this.clear, this);

        }

        // Method for updating the plugins options
        cxpModal.prototype.update = function(options) {
            $.extend(true, this, options);
        };

        // Init
        cxpModal.prototype.init = function() {

            // Closure
            var self = this;

            // Events...
            $('html').on('click.cxpModal', this.handler.selector, function(e) {
                // Update modal target related to the handler (link)
                self.modaltarget = $($(this).data('modaltarget'));
                // Call to show the modal
                self.showModal();
                if (e !== undefined) {
                    e.preventDefault();
                }
            });

        };

        // Close method
        cxpModal.prototype.closeModal = function() {

            // Hide & mark the modal window as hidden
            this.modaltarget.hide().attr('aria-hidden', 'true');

            // Remove z-index from main element that could've been added via a class
            var selNeedingZIndex = 'main';
            $(selNeedingZIndex).removeClass('allows-over-stuck');
            // Destroy all overlay
            $('.overlay').remove();
            $('body').removeClass('bfc');

            // START custom selectors
            // mark the main page as visible
            $('body, .footer').attr('aria-hidden', 'false'); // @TODO PHV pas sur body !
            // END custom

            // set focus back to element that had it before the modal was opened
            if (this.focusedElementBeforeModal !== undefined && this.focusedElementBeforeModal.length > 0) {
                this.focusedElementBeforeModal.focus();
            }

            // Destroy key events
            $('body').off('keydown.cxpmodal');

        };

        // Resize method
        cxpModal.prototype.onResize = function() {
            // Closure
            var self = this;
            var $target = this.modaltarget;

            // modal reduce if window width or height too little

            var windowSize = {
                "w": window.innerWidth - 50,
                "h": window.innerHeight - 50,
            };
            // console.clear();
            // console.log("windows = " + windowSize.h + "/" + windowSize.w);
            // console.log("modals = " + $target.height() + '/' + $target.width());

            var modalSize = $target.data('MaxSize'),
                modalHeight = modalSize.h,
                modalWidth = modalSize.w,
                newWidth = modalWidth,
                newHeight = modalHeight,
                ratio = 1;


            if (windowSize.h < modalHeight) {
                newHeight = windowSize.h;
                ratio = windowSize.h / modalHeight;
                newWidth = modalWidth * ratio;

                // Adjust for width too large
                if (newWidth > windowSize.w) {
                    newHeight = (windowSize.w / newWidth) * newHeight;
                    newWidth = windowSize.w;
                }

            } else if (modalWidth > windowSize.w) {
                newHeight = (windowSize.w / modalWidth) * modalHeight;
                newWidth = windowSize.w;
                // Adjust for width too large
                if (newHeight > windowSize.h) {
                    newWidth = (windowSize.h / newHeight) * newWidth;
                    newHeightWidth = windowSize.h;
                }
            }

            $target.height(newHeight);
            $target.width(newWidth);

            // modal center
            $target.css( 'top', 0 );
            $target.css("margin-top", function() {
                return ($(window).height() - $target.height()) / 2;
            });
            $target.css("margin-left", function() {
                return 0 - ($target.width() / 2);
            });
        };

        // Main method: showing/opening
        cxpModal.prototype.showModal = function() {

            // Closure
            var self = this;
            var $body = $('body');
            var $window = $(window);

            // Store the predefined Modal size
            this.modaltarget.data('MaxSize', {
                "h": this.modaltarget.height(),
                "w": this.modaltarget.width()
            });

            // resize on show
            //self.onResize(); @BUGFIX iOS 8.x fires a resize event when it's going to hide controls after scrolling, even if it finally decides not to hide them. This made the modal have an height of 0

            // Show the element
            this.modaltarget.show().attr('aria-hidden', 'false');

            // #10824 - Fermeture critères - Retour à la liste
            // pushState will allow to intercept Back button when any modal is opened (not only advanced searchform)
            // and close the modal while staying on the same page instead of actually go back to previous page
            if (typeof history.pushState !== "undefined") {
                history.pushState({ modal: 'opened' }, "", ""); // object, title (unrecognized at least by Fx?) and fake URL (none because closing the modal would leave this fake URL visible)
            }
            window.onpopstate = function(e) {
              if(e.state===null) {
                 self.closeModal(); // note: can trigger closing an already closed modal (if user clicks on m-btn-to-close and then on Back button)
              }
            };

            // Bugfix for Nexus 7 and other smartphones when scrolling in modal
            $body.addClass('bfc');

            // Set the events
            this.modaltarget.find('.m-btn-to-close').on({
                'click': function(e) {
                    self.closeModal();
                    if (e !== undefined) {
                        e.preventDefault();
                    }
                },
                'keydown': function(e) {
                    self.trapSpaceKey($(this), e, function() {
                        self.closeModal();
                    });
                }

            });
            this.modaltarget.find('.m-trigger-close').on({
                'click': function(e) {
                    self.closeModal();
                    if (e !== undefined) {
                        e.preventDefault();
                    }
                },
                'keydown': function(e) {
                    self.trapSpaceKey($(this), e, function() {
                        self.closeModal();
                    });
                }

            });
            this.modaltarget.on('keydown', function(event) {
                self.trapTabKey($(this), event);
                self.trapEscapeKey($(this), event);
            });

            // Bonus : Keydown events for swipers !
            $body.on('keydown.cxpmodal', function(e) { // Keyboard
                var $swiper = $('.cxp-swiper', self.modaltarget);
                if ($swiper.length > 0) {
                    if (e.keyCode == 37) {
                        $swiper.data('cxpSwiper').swipePrev();
                    } else if (e.keyCode == 39) {
                        $swiper.data('cxpSwiper').swipeNext();
                    }
                }
            });

            // save the current focus
            this.focusedElementBeforeModal = $(':focus');

            // Mobile: modal has a z-index problem when it's a descendant of main element (all of them except the contact one which is a sibling)
            // The z-index problem is solved by adding/removing one on main element
            // Still in mobile: overlay is unnecessary. Let's add it for contact, it won't hurt
            // Test made:
            // - if modal is a descendant of main, let's add a class that will add z-index.
            // - if not, an overlay is added (should be on desktop and for contact in all cases)
            var selNeedingZIndex = 'main';
            if( $(self.modaltarget).closest(selNeedingZIndex).length === 1 ) {
                $(selNeedingZIndex).addClass('allows-over-stuck'); // (LESS file: mobile-header.less) adds z-index on main element so esf can be over stuck menu (and over "back to top" link in footer btw)
            } else {
                // insert an overlay to prevent clicking and make a visual change to indicate the main page is not available
                var $overlay = $('.overlay');
                if ($overlay.length < 1) {
                    $body.append('<div class="overlay" tabindex="-1"></div>');
                    $overlay = $('.overlay');
                    $overlay.addClass('is-open'); // @TODO pas pour ma sélection et history. Et ptet pas non plus pour contact, filters et stands
                    // A click on overlay (outside modal) closes all of the modals
                    $overlay.fadeIn().on('click', function() {
                        $(this).removeClass('is-open'); // @TODO pas pour ma sélection et history. Et ptet pas non plus pour contact, filters et stands
                        $('.m-btn-to-close').trigger('click');
                    });
                }
            }

            // START custom selectors & settings

            // Mark the main page as hidden
            $('body, .footer').attr('aria-hidden', 'true'); // @TODO PHV pas sur body !

            // Managing modal when its content is too tall to fit into viewport
            // var modalHeightModal = this.modaltarget.height();
            var modalHeightModalTitle = this.modaltarget.find('.modal-header').height();

            // Keep min-height: 528px on .modal-content or not? (0.8 = 100% - top:10% - bottom:10%)
            if (($window.height() * 0.8) - modalHeightModalTitle < 528) {
                this.modaltarget.find('.modal-content').addClass('js-no-minheight');
            }

            // $window.on('resize',function() {
            //     self.onResize();
            // });

            // END custom

            // Safari and VoiceOver shim
            // if VoiceOver in Safari is used, set the initial focus to the modal window itself instead of the first keyboard focusable item.
            // This causes VoiceOver to announce the aria-labelled attributes. Otherwise, Safari and VoiceOver will not announce the labels attached to the modal window.

            // set the focus to the first keyboard focusable item
            // this.modaltarget.find('*').filter(this.focusableElementsString).filter(':visible').first().focus();
            this.modaltarget.find(this.focusableElementsString).filter(':visible').eq(0).focus();

        };


        cxpModal.prototype.trapSpaceKey = function(target, e, f) {
            if (e.which === 32) { // if space key pressed
                f(); // fire the user passed event
                e.preventDefault();
            }
        };

        cxpModal.prototype.trapEscapeKey = function(target, e) {
            if (e.which === 27) { // if escape pressed
                target.find('.m-btn-to-close').trigger('click');
                e.preventDefault();
            }
        };

        cxpModal.prototype.trapTabKey = function(target, e) {

            // if tab or shift-tab pressed
            if (e.which === 9) {

                // get list of focusable items
                var focusableItems = target.find('*').filter(this.focusableElementsString).filter(':visible');

                // get currently focused item
                var focusedItem = $(':focus');

                // get the number of focusable items
                var numberOfFocusableItems = focusableItems.length;

                // get the index of the currently focused item
                var focusedItemIndex = focusableItems.index(focusedItem);

                if (e.shiftKey) {
                    // back tab
                    // if focused on first item and user preses back-tab, go to the last focusable item
                    if (focusedItemIndex === 0) {
                        focusableItems.get(numberOfFocusableItems - 1).focus();
                        e.preventDefault();
                    }

                } else {
                    // forward tab
                    // if focused on the last item and user preses tab, go to the first focusable item
                    if (focusedItemIndex === (numberOfFocusableItems - 1)) {
                        focusableItems.get(0).focus();
                        e.preventDefault();
                    }
                }
            }

        };

        return cxpModal;

    })();

    $.fn.cxpModal = function(options) {

        // Create a cxpModal instance if not available
        if (!this.cxpModalInstance) {
            this.cxpModalInstance = new cxpModal(this, options || {});
        } else {
            this.cxpModalInstance.update(options || {});
        }

        // Init plugin
        this.cxpModalInstance.init();

        // Display items (if hidden) and return jQuery object to maintain chainability
        return this;

    };

    $.fn.cxpContactModal = function (options) {
      var $button = $(this),
          cieName = $button.attr('data-contact-cie'),
          cieID = $button.attr('data-contact-id');

      $('.contact-element-id').val(cieID);
      $('.js-contact-cie').text(cieName);
    };

})(jQuery);

// Initialize modal components
jQuery(document).ready(function($) {

    "use strict";
    if ( $('.modalopen').length ) {
      $('.modalopen').cxpModal();
    }

    if ( $('.contactmodal').length ) {
      $('.contactmodal').click(function () {
        $(this).cxpContactModal();
      });
    }
});

/**!
	mySelection

	Zero raccoon was used for testing this plugin

	@contributors: Guillaume Focheux (Alsacréations), Kaliop
	@date-created: 2015-10-09
	@last-update: 2016-03-14

	Dependency: jquery + Noty
 */

;(function ($, window, document, undefined) {

	// Create the defaults once
	var pluginName = 'mySelection',
		defaults = {
			//Options Plugin Here
		};

	// The actual plugin constructor
	function mySelection(_caller, options) {
		this._caller = _caller;
		this.$caller = $(_caller);
		//options override
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		// initialization
		this.init();
	}

	//Prototype of the object
	mySelection.prototype = {
		init: function() {
			var _self = this;
			_self.msBinding();
			return this;
		},
		msBinding: function() {
			var _self = this,
			$_self = $(_self);
			this.$caller.off('click').on('click', function(e){
				var $_this = $(this);
				switch ($_this.attr('data-action')) {
					case "add":
						_self.msAdd().msUpdate().msRebind();
						break;
					case "remove":
						_self.msRemove().msUpdate();
						break;
					default:
					//nothing to do
				}
			});

		},
		msRebind: function(){
			$('.js-mySelection').mySelection();
		},
		// action Add
		msAdd: function() {
			var _self = this,
				$_self = $(_self);
			this.$caller.closest('.catal-ex-item-buttons').addClass('is-selected');
			this.$caller.attr('data-action','remove');

			var myselection_line = '<li class="mysel-item">'+
				'<a href="'+this.$caller.data('itemlink')+'" class="mysel-item-link">'+
						'<span class="mysel-item-txt">'+this.$caller.data('itemtitle')+'</span>'+
				'</a>'+
				'<a href="#" class="mysel-item-remove js-mySelection" data-action="remove" data-itemid="'+this.$caller.data('itemid')+'" data-itemtype="'+this.$caller.data('itemtype')+'" data-target="'+this.$caller.data('target')+'" data-removenotiftxt="'+this.$caller.data('removenotiftxt')+'" title="Remove '+this.$caller.data('itemtitle')+' from My selection"><i class="icon icon-star-delete" aria-hidden="true"></i></a>'+
						'</li>';
			$(_self.$caller.data('target')).find('.mysel-'+this.$caller.data('itemtype')+' .mysel-list').prepend(myselection_line);
			_self.msNotif(this.$caller.data('addnotiftxt'));
			return this;
		},
		// action Remove
		msRemove: function() {
			var _self = this,
			$_self = $(_self),
			$allButton = $('[data-itemid="'+ this.$caller.data('itemid')+'"]');

			$allButton.each(function(e){
				$_this = $(this);
				$parent = $_this.parents('.myselection-list');
				if ($parent.length) {
					var $group = $_this.parents('.catal-ed-group, .msl-pane'), // #11151 adding .msl-pane
						$item = $_this.parents('.catal-ex-item, .msl-brand, .msl-event'), // #11151 adding .msl-brand and .msl-event so it can be removed in "selection list" (.msl-exhibitor and .msl-product already have .catal-ex-item)
						$number = $group.find('.qty-round-nb'),
						$bigTitle = $('.mysel-cata-title-container'),
						paneIndex = $_this.parents('.msl-pane').index() - 1, // -1 because ul.msl-tabs-list is also a sibling - #11150
						$tab = $('.msl-tabs-list').find('.msl-tabs-item').eq(paneIndex).find('.qty-round-nb'); // #11150
						titleId = $group.find('.catal-ed-activity-main-title').prop('id'),
						$sidebarLink = $('.catal-nav-affix-list').find('[href=#'+titleId+']')	;
					$item.remove();
					if ($group.length && $number.length) {
						var numberOld = $number.html(),
								numberNow = numberOld - 1;
						$number.html(numberNow);
					}
					// Update bigTitle number (ex: heading H1 in catalogue selection list and mobile catalogue myselection list)
					$bigTitle.find('.qty-round-nb').html( parseInt( $bigTitle.find('.qty-round-nb').html() ) - 1 );
					// #11150 Update value in corresponding tab in mobile catalogue myselection list
					$tab.html( parseInt( $tab.html() ) - 1 );
					//Update sidebar part number
					$sidebarLink.find('.qty-round-nb').html( parseInt( $sidebarLink.find('.qty-round-nb').html() ) - 1 );

				} else {
					if( $(this).hasClass('mysel-item-remove')){
 						$(this).closest('.mysel-item').remove();
					} else {
						$(this).closest('.catal-ex-item-buttons').removeClass('is-selected');
						$(this).attr('data-action','add');
					}
				}
			});
			_self.msNotif(this.$caller.data('removenotiftxt'));
			return this;
		},// toggle
		// launch a notif
		msNotif: function(message) {

			var notif = noty({
				layout: 'topRight',
				theme: 'relax',
				type: '',
				text: message, // can be html or string
				dismissQueue: true, // If you want to use queue feature set this true
				template: '<div class="catal-ex-notif-container noty_message"><span class="catal-ex-notif-txt noty_text"></span><button class="catal-ex-notif-close-btn"><i class="icon icon-cross noty_close" aria-hidden="true"></i></button></div>',
				animation: {
						open: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceInLeft'
						close: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceOutLeft'
						easing: 'swing',
						speed: 500 // opening & closing animation speed
				},
				timeout: 1500, // delay for closing event. Set false for sticky notifications
				maxVisible: 7, // you can set max visible notification for dismissQueue true option,
				closeWith: ['click'] // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
			});

		},
		msUpdate: function(e) {
			var _self         = this,
				$_self        = $( _self ),
				container     = $( _self.$caller.data('target') ),
				totalElement  = _self.msTitleUpdate(container),
				totalExposant = _self.msPartTitleUpdate( $('.mysel-exposant', container) ),
				totalBrand    = _self.msPartTitleUpdate( $('.mysel-brand', container) ),
				totalProduct  = _self.msPartTitleUpdate( $('.mysel-product', container) );
				totalEvent    = _self.msPartTitleUpdate( $('.mysel-event', container) );

			_self.msCalcVisibility(totalElement, totalExposant, totalBrand, totalProduct, totalEvent);
			return this;
		},
		msTitleUpdate: function($elem) {
			var nbItems = $elem.find('.mysel-item').length,
				$containerModalTitle = $('.mysel-modal-title');
			$elem.find('.mysel-title .qty-round-nb').html( nbItems );

			// If there's a modal (mobile)
			if( $containerModalTitle.length !== 0 ) {
				$containerModalTitle.find('.qty-round-nb').html( nbItems );
			}

			return nbItems;
		},
		msPartTitleUpdate: function($elem) {
			$elem.find('.qty-round-nb').html($elem.find('.mysel-item').length);
			if( $elem.find('.mysel-item').length === 0 ){
				$elem.hide();
			} else {
				$elem.show();
			}
			return $elem.find('.mysel-item').length;
		},
		msCalcVisibility: function(totalElement, totalExposant, totalBrand, totalProduct, totalEvent) {
			// console.log('Calculation in progress...');
			var _self     = this,
				$_self    = $(_self),
				container = $(_self.$caller.data('target')),
				$exposantContainer = $('.mysel-exposant', container),
				$brandContainer    = $('.mysel-brand', container),
				$productContainer  = $('.mysel-product', container),
				$eventContainer    = $('.mysel-event', container), // #11181 - Taking events also in account
				nbExposantVisible  = 0,
				nbBrandVisible     = 0,
				nbProductVisible   = 0,
				nbEventVisible     = 0;

			// No more than 6 items (exhibitor, brand and product) will be displayed.
			// Display of events is coded afterward, their rules of display are: display 2 of them max
			// Example: from 1+2+8 items, only 1+2+3 will be displayed
			if( totalExposant > 1 && totalBrand > 1 && totalProduct > 1 ) {
				nbExposantVisible		= 2;
				nbBrandVisible			= 2;
				nbProductVisible		= 2;
			} else {
				if( totalExposant < 3 &&  totalBrand < 3  &&  totalProduct < 3 ) {
					nbExposantVisible	=  totalExposant;
					nbBrandVisible		=  totalBrand;
					nbProductVisible	= totalProduct;
				} else {
					var bonus = 0,
					iterate = 0;
					// define the bonus
					if( totalExposant < 2 ) {
						nbExposantVisible = totalExposant;
						bonus += 2 - totalExposant;
					} else {
						nbExposantVisible = 2;
					}
					if( totalBrand < 2 ) {
						nbBrandVisible = totalBrand;
						bonus += 2 - totalBrand;
					} else {
						nbBrandVisible = 2;
					}
					if( totalProduct < 2 ) {
						nbProductVisible = totalProduct;
						bonus += 2 - totalProduct;
					} else {
						nbProductVisible = 2;
					}
					while( bonus > 0 && iterate !== 6) {
						if( totalExposant > 2 && nbExposantVisible != totalExposant && bonus > 0) {

							nbExposantVisible++ ;
							bonus = bonus-1;
						}
						if( totalBrand > 2 && nbBrandVisible != totalBrand && bonus > 0) {
							//console.log('brand +1' );
							nbBrandVisible++ ;
							bonus = bonus-1;
						}
						if( totalProduct > 2 && nbProductVisible != totalProduct && bonus > 0) {
							//console.log('product +1' );
							nbProductVisible++ ;
							bonus = bonus-1;
						}
						iterate++;
						if( iterate === 6 ) {
							break;
						}
					}
				}
				// Number of events displayed: see rules above (I don't trust totalElement being the sum of the 3 types Ex+P+B)
				var total3Types = totalExposant + totalProduct + totalBrand;
				if ( total3Types >= 5) {
					// No more than 2 events displayed
					nbEventVisible = Math.max(2, totalEvent);
				} else {
					// A total of up to 6 items (Events included)
					// 4 (3 types) => up to 2 events
					// 3 (3 types) => up to 3 events
					// 2 (3 types) => up to 4 events
					// 1 (3 types) => up to 5 events
					// 0 (3 types) => up to 6 events
					nbEventVisible = Math.max(6 - total3Types, totalEvent);
				}
			}

			$('.mysel-item',$exposantContainer).removeClass('js-visible').removeClass('js-no-border');
			$('.mysel-item:nth-child(-n+'+nbExposantVisible+')',$exposantContainer).addClass('js-visible').last().addClass('js-no-border');
			$('.mysel-item',$brandContainer).removeClass('js-visible').removeClass('js-no-border');
			$('.mysel-item:nth-child(-n+'+nbBrandVisible+')',$brandContainer).addClass('js-visible').last().addClass('js-no-border');
			$('.mysel-item',$productContainer).removeClass('js-visible').removeClass('js-no-border');
			$('.mysel-item:nth-child(-n+'+nbProductVisible+')',$productContainer).addClass('js-visible').last().addClass('js-no-border');
			// Events: hiding them, then showing desired number
			$('.mysel-item',$eventContainer).removeClass('js-visible').removeClass('js-no-border');
			$('.mysel-item:nth-child(-n+'+nbEventVisible+')',$eventContainer).addClass('js-visible').last().addClass('js-no-border');
		},
	};

	// Instanciate the plugin and put it in a variable
	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new mySelection(this, options));
			}
		});
	};
	if( $('.js-mySelection').length > 0){
		$('.js-mySelection').mySelection();
	}

	// #11784: [Catalogue] Ajout à la sélection KO après une recherche affinée
	// Added by demand of Kaliop
	// We want the function public
	if (typeof(window.comexposium) != 'undefined') {
		window.comexposium.active = {
			mySelection: mySelection
		};
	}

})(jQuery, window, document);

/**!
 Newsletter
 Newsletter module with AJAX post

 @contributors: Rodolphe (Alsacréations)
 @date-created: 2015-05-21
 @last-update: 2015-05-21
 */

(function($) {

   $.cxpNewsletter = function(el, options) {

      var defaults = {
         newsletterPostUrl: '' // URL to post results
      };

      var plugin = this;

      plugin.settings = {};

      var $element = $(el),
          element = el;

      // Plugin initialization
      plugin.init = function() {
         plugin.settings = $.extend({}, defaults, options);
         updateSettingsFromHTMLData();
         registerEvents();
      };

      // Reads plugin settings from HTML data-* attributes (camelCase)
      var updateSettingsFromHTMLData = function() {
         var data = $element.data();
         for(var dat in data) plugin.settings[dat] = data[dat];
      };

      // Event Handlers on HTML components inside the plugin
      var registerEvents = function() {
        $('button',$element).on('click', function(e) {
          e.preventDefault();
          plugin.postData();
        });
      };

      // Plugin post data to server with AJAX request
      plugin.postData = function() {
          var $form = $('form',$element);
          $element.addClass('is-loading');
          var formData = $form.serialize();
          $('form',$element).hide();
          $.post(plugin.settings.newsletterPostUrl, formData, function(html) {
            setTimeout(function() {
              $element.addClass('with-results').removeClass('is-loading');
              $('.nf-result',$element).html(html);
              // Back button if any (in case of emergency error)
              $('.nf-result button',$element).on('click', function() {
                 $('.nf-result',$element).empty();
                 $element.removeClass('with-results');
                 $('form',$element).show();
              });
            },750);
          });
      };

      plugin.init();

   };

   $.fn.cxpNewsletter = function(options) {

       return this.each(function() {
           if (undefined === $(this).data('cxpNewsletter')) {
               var plugin = new $.cxpNewsletter(this, options);
               $(this).data('cxpNewsletter', plugin);
           }
       });

   };

   $('.cxp-newsletter').cxpNewsletter();

 })(jQuery);

/**!
 AJAX pagination
 Links that load HTML via XHR into target element and update the links list

 @contributors: Geoffrey Crofte (Alsacréations), Guillaume Focheux (Alsacréations), Rodolphe (Alsacréations)
 @date-created: 2015-04-13
 @last-update: 2015-07-06
 */

;
(function($) {

  function pagination_change(e) {

    // Vars
    var separator = '?page='; // @PROD edit to '/'
    var $this = $(this);
    var page = $this.data('page');
    if(page===undefined) return true; // Don't disturb true links (not page links)

    e.preventDefault();
    if($this.parent().hasClass('is-inactive')) {
      return false;
    }

    var $pagination_container = $this.closest('.cxp-pagination');
    var $target_container = $('[data-container-id=' + $pagination_container.data('container') + ']');
    var pagemax = $pagination_container.data('pageMax');
    var pagedisp = $this.closest('.pagination').data('pagedisp');
    if(pagedisp===undefined) pagedisp = 10;
    var pageBefore = $('.is-active a', $pagination_container).data('page'); // current
    var url = $this.data('url');
    var $link = $this;

    // Prev/next links are NOT numbers
    if (isNaN(parseInt(page))) {

      $link = $('.is-active a', $pagination_container);
      if(pagedisp<1) { // Pagination without numbers (only prev/next links)
        var currentpage = $pagination_container.data('currentpage');
        if(!currentpage) currentpage = 1;
        if(page=='next') currentpage++;
        else if(page=='prev') currentpage--;
        $pagination_container.data('currentpage',currentpage);
        page = currentpage;
      } else {
        if (page == 'next') {
          page = Math.min(pagemax, parseInt($link.data('page')) + 1);
        } else if (page == 'prev') {
          page = Math.max(1, parseInt($link.data('page')) - 1);
        }
      }

      $link = $('[data-page=' + page + ']', $pagination_container);

      // Regenerate page groups (10-20, 20-30... or less with custom pagedisp)
      if (pagedisp>0 && $link.length < 1) {
        $('li:not(.pagin-prev,.pagin-next)', $pagination_container).remove();
        var pagestart = Math.ceil(((page - 1) / 10) *10);
        var html = '';
        for (i = pagestart + 1; i <= pagestart + pagedisp; i++) {
          html += '<li class="pagin-item"><a href="' + separator + (i) + '" data-url="' + $pagination_container.data('url') + separator + (i) + '" data-page="' + (i) + '" title="page ' + (i) + '">' + (i) + '</a></li>';
        }
        // First link (page 1)
        if (pagestart !== 0) {
          i = 1;
          html = '<li class="pagin-item"><a href="' + separator + (i) + '" data-url="' + $pagination_container.data('url') + separator + (i) + '" data-page="' + (i) + '" title="page ' + (i) + '">' + (i) + '</a></li><li class="pagin-item">...</li>' + html;
        }
        // Last link (page max)
        if (pagestart + pagedisp !== pagemax) {
          i = pagemax;
          html += '<li class="pagin-item">...</li><li class="pagin-item"><a href="' + separator + (i) + '" data-url="' + $pagination_container.data('url') + separator + (i) + '" data-page="' + (i) + '" title="page ' + (i) + '">' + (i) + '</a></li>';
        }
        $('.pagin-next', $pagination_container).before(html);
        $link = $('[data-page=' + page + ']', $pagination_container);
      }
      url = $link.data('url');
      if(!url) url = $pagination_container.data('url')+separator+page; // if pagedisp==0
    }

    $('.pagin-grids-next, .pagin-next',$pagination_container).toggleClass('is-inactive',page===pagemax);
    $('.pagin-grids-prev, .pagin-prev',$pagination_container).toggleClass('is-inactive',page<=1);

    // Hide next/previous text links if not needed
    $('.pagin-next',$pagination_container).toggleClass('visually-hidden',page==pagemax).toggleClass('is-visible',page!=pagemax);
    $('.pagin-prev',$pagination_container).toggleClass('visually-hidden',page==1).toggleClass('is-visible',page!=1);

    // CSS classes
    $('li', $pagination_container).removeClass('is-active');
    $link.closest('li').addClass('is-active');

    // Ajax load
    if ($target_container !== false && $target_container.length>0) {

      // HTML5 History API push
			/*
      if (history.pushState) {
        if (!$pagination_container.data('pushState')) {
          history.replaceState({
            page: pageBefore,
            container: $pagination_container.data('container')
          }, document.title, $(this).attr('href'));
        }
        history.pushState({
          page: page,
          container: $pagination_container.data('container')
        }, document.title, $(this).attr('href'));
        $pagination_container.data('pushState', true);
      }
			*/

      // Load the contents via AJAX request
      $target_container.load(url, function() {
        // Scroll top top of content
        var top = $pagination_container.offset().top - 10 - $('.site-banner').outerHeight();
        if(top) $('body,html').animate({
          scrollTop:top
        },'fast');

        // Trigger an event to allow other scripts/plugins to be notified (ex : library)
        $pagination_container.trigger('pagechange');

      });
    } else {
      if(typeof console!=='undefined') {
        console.error('Target container not found for pagination');
      }
    }
  }

  // Pagination plugin
  $.fn.cxpPagination = function() {

    $(this).each(function() {

      $(this).on('click', 'a', pagination_change);

      // Init
      var page = -1;
      var pagemax = $(this).data('page-max');

      var $activeItem = $(this).find('.pagin-item.is-active');
      if($activeItem.length>0) {
        page = parseInt($activeItem.children('a:first').data('page'));
      }
      if(page<0) page = 1;

      // Hide next/previous text links if not needed
      if(pagemax && page==pagemax) $(this).find('.pagin-next').addClass('visually-hidden');
      if(page==1) $(this).find('.pagin-prev').addClass('visually-hidden');

    });

  };

  $('.cxp-pagination').cxpPagination();

	// HTML5 History API pop
	/*
  $(window).on('popstate', function(e) {
    var state = e.originalEvent.state;
		if(state !== undefined && state.page !== undefined && state.container !== undefined) {
			$('[data-container='+state.container+']').find('[data-page='+state.page+']').trigger('click');
		}
  });
	*/

})(jQuery);

/**!
 partner_load

 	Little plugin for get in AJAX partner list and add it in the view
	We can show or hide the new elements

 @contributors: Guillaume Focheux (Alsacréations)
 @date-created: 2015-04-24
 @last-update: 2015-04-24
 */

;
(function ($) {

	function partner_load(e) {

		// Vars
		var $this = $(this);// trigger button
		var $partner_container = $(this).closest('.js-partner-ajax-load');
		var $receiver_container = $partner_container.find('.js-pal');
		var url = $partner_container.data('url');

		if (!$(this).hasClass('js-already-load')) {
			// Ajax load
			if ($receiver_container !== false) {
				$receiver_container.load(url);
				$(this).addClass('js-already-load');
			}
		}
		// CSS classes
		$receiver_container.toggleClass('is-visible');

		$textNotHide = $(this).find('span').not('.js-hidden');
		$textHide = $(this).find('span.js-hidden');
		$textNotHide.addClass('js-hidden');
		$textHide.removeClass('js-hidden');
		e.preventDefault();
	}

	// Pagination plugin
	$.fn.partnerLoad = function () {
		$(this).each(function () {
			$(this).on('click', '.js-pal-trigger', partner_load);
		});
	};

	$('.js-partner-ajax-load').partnerLoad();

})(jQuery);

/**!
 * Smoothscrolling to an id
 *
 * @contributors: Damien Senger (Alsacréations)
 * @date-created: 2015-07-20
 * @last-update: 2015-10-15
 * */

;
(function($) {
  $.fn.smoothscrollTo = function(e) {
    // when we click on an element
    var target = $(this).attr('href'),
      heightStart = $('.site-banner').outerHeight();

    if (target != "#" && $(target).length) {
      var position = $(target).offset().top,
        decalage = heightStart * 1.5,
        destination = position - decalage,
        speed = 750; // Animation duration in ms

      // we move to the destination
      $('html, body').animate({
        scrollTop: destination,
      }, speed);
    }

    // we cancel the click on this link
    e.preventDefault();
  };

  $('a[href^="#"]').off('click.scroll').on('click.scroll', function(e) {
    $(this).smoothscrollTo(e);
    $(this).blur();
  });
}(jQuery));

/*!
 * Comexposium Extended Search Form Module
 * Formerly known as Exhibitor instead of Extended but works as well for Exhibitors and Products.
 * Class used for both is .exhibitor-search-form though
 *
 * Redesign by Alsacréations (alsacreations.fr)
 * Code design contributors: Geoffrey Crofte (Alsacréations) + patch RR
 * Vendors it depends on: jQuery UI 1.11.4 (custom build)
 *
 * File Last Update: 2015-11-18
 */

;jQuery(document).ready(function($){

	// ESF JavaScript only if we find the module

	if ( $('.exhibitor-search-form').length === 1 ) {


		// `esf` = debug function for console.log (ex: esf.log(string))
		// `esf_text` is translation ready texts

		var $dataSrc = $('.esf-all-filters');
		var esf={log:function(e){"undefined"!=typeof console&&console.log(e)}},
			esf_text = {
				remove_filter : $dataSrc.data('esfRemoveFilter'),
				unselect : $dataSrc.data('esfUnselect'),
				select : $dataSrc.data('esfSelect'),
				add : $dataSrc.data('esfAdd'),
				remove : $dataSrc.data('esfRemove'),
				space : '&nbsp;' // empty in english
			};

		$('html').addClass('js');

		/*
		 * AJAX actions
		 */

		function esf_AJAX_do_something_selection(the_id, $the_button) {

			var $the_icon = $the_button.find('i'),
				the_class = $the_button.attr('class');

			$the_icon.attr('class', 'icon-loading');

			if ( the_class === 'esf-action-add-to-selection' ) {

				// ** simulate request delay for adding exhibitor to favs **
				// have to replace setInterval by AJAX request and
				// "simulate positive" by the onsuccess respond

				// do what you want with the exhibitor id
				esf.log('Adding: ' + the_id);

				// @TOPROD : Launch real AJAX request here
				setTimeout(function(){

					// do what you want with the exhibitor id
					esf.log('Added: '+the_id);

					// simulate positive
					$the_icon.attr('class','icon-remove-selection');
					$the_button.toggleClass('esf-action-add-to-selection esf-action-remove-from-selection').find('.esf-action-text').text(esf_text.remove);

				}, 300);
				// /@TOPROD

			}
			else {

				// ** simulate request delay for removing exhibitor to favs **
				// have to replace setInterval by AJAX request and
				// "simulate positive" by the onsuccess respond

				// do what you want with the exhibitor id
				esf.log('Removing: '+the_id);

				// @TOPROD : Launch real AJAX request here
				setTimeout(function(){

					// do what you want with the exhibitor id
					esf.log('Removed: '+the_id);

					// simulate positive
					$the_icon.attr('class','icon-add-selection');
					$the_button.toggleClass('esf-action-add-to-selection esf-action-remove-from-selection').find('.esf-action-text').text(esf_text.add);

				}, 300);
				// /@TOPROD

			}

		}


		// ALSA 05/01/2016 This fake function is emptied because it conflicts with real script from Kaliop (but it still exists here and is called elsewhere in this file)
		function esf_AJAX_update_list() {

			// request begins
			//$('.exhibitor-search-form').append('<div class="esf-loader-layer"><div class="esf-loader" title="0"><div class="loading"><div class="loading-inner"><span class="shape"></span><span class="shape"></span><span class="shape"></span></div></div></div></div>');
			//$('.esf-loader-layer').hide().fadeIn(200);

			// @TOPROD : Launch real AJAX request here
			//setTimeout(function(){
				// in request success
			//	$('.esf-loader-layer').fadeOut(200, function(){
			//		$(this).remove();
			//	});
			//}, 300);
			// /@TOPROD

		}
		// AJAX END

		/*
		 * Variables init
		 */

		var $panel_header	= $('.esf-as-header'),
			$panel			= $('.esf-as-tree'),
			$panel_filters	= $('.esf-as-filters'),
			$panel_content	= $('.esf-as-panel-content'),
			$list_filters	= $('.esf-as-list-filters'),
			$tree_first_lvl = $(".esf-tree"),
			max_lvl			= 1,
			slide_panels	= '';

		/*
		 * Markup redesign
		 */
		$panel_content.find('.esf-tree li ul').closest('li').addClass('esf-has-sub-items');
		$list_filters.find('li:first').addClass('current');

		// js placeholders for multilingual solution
		$('.esf-as-heading').find('.esf-js-placeholder').each(function(){
			$(this).after('<button type="button" class="esf-remove-filters hidden" aria-hidden="true">'+$(this).attr('title')+'<i class="icon-catal icon-catal-cross" aria-hidden="true"></i></button>').remove();
		});

		// adds tree lvl class
		$tree_first_lvl.each(function(){
			$(this).find("ul").each(function() {
				var lvl = $(this).parentsUntil(".esf-tree").filter("ul").length + 2;
				$(this).addClass("tree-lvl-" + lvl);
				max_lvl = max_lvl < lvl ? lvl : max_lvl;
			});
			$(this).closest('.esf-as-tree').addClass('max-depth-'+ (max_lvl-2));
		});

		// builds slide panel for each sub lvl
		/*
		for (i=3; i<=max_lvl; i++) {
			slide_panels += '<div class="slide-panel slide-panel-'+ (i-2) +'"></div>';
		}
		$tree_first_lvl.after(slide_panels);
		*/

		// hide all panels, keep first only
		$('.esf-as-filter-panel:not(:first)').hide();

		// marks tree with only one basic lvl
		$tree_first_lvl.addClass('esf-only-one-lvl').find('.esf-has-sub-items:first').closest('.esf-only-one-lvl').removeClass('esf-only-one-lvl');

		/*
		 * some useful functions
		 */

		// reset checked checkboxes
		function esf_reset_panel(element_id) {
			var $the_tree = $('#tree_'+element_id);

			$the_tree.find('input:checkbox').prop('checked', false);
			$the_tree.find('.esf-item-checked').removeClass('esf-item-checked');
		}


		// count the selected checkboxes and display the number
		// actualizes the global filters count
		function esf_count_selected(element) {

			// element is the clicked checkbox
			var parent_tab		= element.closest('.esf-as-filter-panel'),
				element_id		= parent_tab.attr('id'),
				nb_of_items_sel = parent_tab.find('input:checkbox:checked').length,
				$filter_tag		= $('.esf-' + element_id + '-filter'),
				panel_name		= $('.esf-as-list-filters').find('a[href="#'+element_id+'"]').find('.esf-as-filter-name').text();

			if (nb_of_items_sel !== 0 ) {

				$list_filters.find('[href="#'+element_id+'"]').find('.esf-as-count').addClass('counted').find('.esf-as-count-nb').text(nb_of_items_sel);

				esf_show_filter_ui(element_id);

				// tag filter creation
				if ( $filter_tag.length === 0 ) {
					var filter_markup ='<span class="esf-' + element_id + '-filter"><span class="esf-tag-filter-label">' + panel_name + esf_text.space + ':&nbsp;</span><span class="esf-tag-filter-nb">' + nb_of_items_sel + '</span><button type="button" class="esf-tag-filter-remove" title="' + esf_text.remove_filter +'"><i class="icon-catal icon-catal-cross" aria-hidden="true"></i></button></span>';
					$('.esf-as-af-filters').append(filter_markup);
				}
				// tag filter update number
				else {
					$filter_tag.find('.esf-tag-filter-nb').text(nb_of_items_sel);
				}
			}

			else {

				$list_filters.find('[href="#' + element_id + '"]').find('.esf-as-count').removeClass('counted').find('.esf-as-count-nb').text('');
				esf_hide_filter_ui(element_id);
				$filter_tag.remove();

			}

			refresh_filters_activated();
		}

		function refresh_filters_activated() {
			if ( $('.esf-as-af-filters').find('span').length !== 0 ) {
				$('.esf-as-activated-filters').removeClass('hidden').attr('aria-hidden', 'false');
				return true;
			}
			else {
				$('.esf-as-activated-filters').addClass('hidden').attr('aria-hidden', 'true');
				return false;
			}
		}

		function refresh_global_filter_counts() {
		}

		// show filter UI elements
		function esf_show_filter_ui(element_id) {
			$('#'+element_id+'_tree').find('.esf-remove-filters').removeClass('hidden').attr('aria-hidden', 'false');
		}

		// remove filter UI elements ("Active filters" in general and "Empty all filters" in panel)
		function esf_hide_filter_ui(element_id) {
			$('#'+element_id+'_tree').find('.esf-remove-filters').addClass('hidden').attr('aria-hidden', 'true');
			$('.esf-all-filters').find('.esf-'+element_id+'-filter').remove();
		}


		/*
		 * Some useful actions
		 */

		// on advanced search activation
		$panel_header.addClass('is-closed').attr('tabindex', '0');;
		$panel_filters.hide();
		$panel_header.on('click', function(){
			$(this).toggleClass('is-closed');
			$panel_filters.slideToggle(300);
		});
		$panel_header.on('keypress', function(e) {
			if(e.keyCode === 13 || e.keyCode === 0) {
				$(this).trigger('click');
			}
			return false;
		});


		// on filter panel type click
		$('.esf-as-list-filters').find('a').on('click', function(){
			if ( $(this).closest('li').filter('.current').length === 0 ) {
				var the_id = $(this).attr('href');

				$(this).closest('ul').find('li').removeClass('current');
				$(this).closest('li').addClass('current');
				$('.esf-as-filter-panel').hide();
				$(the_id).show();
			}
			return false;
		});


		// on checkbox check
		$panel_content.find(':checkbox').on('change', function() {
			if ( $(this).is(':checked') ) {
				$(this).closest('li').addClass('esf-item-checked').find('ul li').addClass('esf-item-checked').find('input:checkbox').prop('checked', true);
				esf_count_selected($(this));
			}
			else {
				$(this).closest('li').removeClass('esf-item-checked').find('ul li').removeClass('esf-item-checked').find('input:checkbox').prop('checked', false);
				esf_count_selected($(this));
			}
			// AJAX update list
			esf_AJAX_update_list();
		});

		// on checkbox check all in the current lvl
		$panel_content.on('change', '.esf-checkbox-select-all', function() {
			if ( $(this).is(':checked') ) {
				$(this).closest('li').nextAll('li').addClass('esf-item-checked').find('input:checkbox').prop('checked', true);
				$(this).closest('li').nextAll('li').find('li').addClass('esf-item-checked');
			}
			else {
				$(this).closest('li').nextAll('li').removeClass('esf-item-checked').find('input:checkbox').prop('checked', false);
				$(this).closest('li').nextAll('li').find('li').removeClass('esf-item-checked');
			}
			esf_count_selected($(this));
			// AJAX update list
			esf_AJAX_update_list();
		});

		// on next lvl click
		$panel_content.on('click', '.esf-has-sub-items > .esf-choice-container .esf-next-lvl', function() {

			var $next_lvl		= $(this).closest('.esf-choice-container').next('ul');
				class_el 		= $next_lvl.attr('class'),
				lvl_el   		= class_el.split('-')[2],
				$lvl_parent	= $(this).closest('.esf-as-tree'),
				label_text		= $(this).prev('label').text(),
				uniqid			= $(this).prev('label').attr('for'),
				select_all_txt	= esf_text.select,
				checked_state	= '';

			$(this).closest('.esf-has-sub-items').addClass('go-to-next-lvl');
			$lvl_parent.addClass('to-lvl-' + lvl_el);

			var nb_item	= $next_lvl.find('li').length,
				nb_check	= $next_lvl.find('li').find('input:checked').length;

			if (nb_item === nb_check ) {
				//select_all_txt = esf_text.unselect;
				checked_state = ' checked="checked"';
			}

			if ( $next_lvl.find('li:first').filter('.esf-sublvl-heading').length === 0 ) {
				$next_lvl.find('li:first').before('<li class="esf-sublvl-heading"><button type="button" class="esf-back-to-prev-lvl"><i class="icon-catal icon-catal-arrow-left" aria-hidden="true"></i>' + label_text + '</button> <label for="'+uniqid+'_select_all"><span class="esf_select_all_label">'+select_all_txt+'</span> <input type="checkbox" id="'+uniqid+'_select_all" class="esf-checkbox-select-all"'+checked_state+' /></label></li>');
			}

		});

		// on prev lvl click
		$panel_content.on('click', '.esf-back-to-prev-lvl', function(){
			var $_this				= $(this),
				current_lvl_class	= $_this.closest('[class^="tree-lvl-"]').attr('class'),
				current_lvl		= current_lvl_class.split('-')[2];

			$_this.closest('.esf-as-tree').removeClass('to-lvl-'+current_lvl);
			var timer = setInterval(function(){
				$_this.closest('.go-to-next-lvl').removeClass('go-to-next-lvl');
				clearInterval(timer);
				timer = null;
			}, 300);

			return false;
		});

		// on remove filter click
		$panel.on('click', '.esf-remove-filters', function(){
			var id = $(this).closest('.esf-as-tree').attr('id'),
				name = id.split('_tree');
			esf_reset_panel(name[0]);
			esf_count_selected($(this));
			// AJAX update list
			esf_AJAX_update_list();
		});

		// on remove tag filter click
		$('.esf-as-af-filters').on('click', '.esf-tag-filter-remove', function(){
			var id = $(this).closest('span').attr('class'),
				name = id.split('-');
			$('#'+name[1]+'_tree').find('.esf-remove-filters').trigger('click');
		});

		//simulate alpha filter click
		$('.esf-results-alpha-list').find('a').on('click', function(){
			// AJAX update list
			esf_AJAX_update_list();
			return false;
		});


		/*
		 * === IE8 fixes
		 */
		// http://browserhacks.com/#hack-a43251169f364d54a7a8d9fe0686267d

		var isIE = '\v'=='v'; // IE <= 8
		if ( isIE ) {
			$('html').addClass('esf-lte-ie8');
			$panel_header.on('click.ie8', function(){
				$('.esf-as-filter-panel').eq(0).show();
			});
		}

	} // end of 'only if module here'

});

/**!
 Search Form
 Search form

 @contributors: Geoffrey Crofte (Alsacréations), Rodolphe (Alsacréations)
 @date-created: 2015-04-01
 @last-update: 2016-01-20
 */

;
(function($) {

	$.cxpSearchform = function(el, options) {

		var defaults = {};

		var plugin = this;

		plugin.settings = {};

		var $element = $(el),
			element = el;

		// Plugin initialization
		plugin.init = function() {
			plugin.settings = $.extend({}, defaults, options);
			updateSettingsFromHTMLData();
			registerEvents();
		};

		// Reads plugin settings from HTML data-* attributes (camelCase)
		var updateSettingsFromHTMLData = function() {
			var data = $element.data();
			for (var dat in data)
				plugin.settings[dat] = data[dat];
		};

		// Event Handlers on HTML components inside the plugin
		var registerEvents = function() {

			var $target = $element.find('.js-toggle-target');

			// Button to display search, only on pages with .site-banner
			if ($element.closest('.site-banner').length <1) return;

			$element.find('.js-toggle-trigger').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				var $target = $(this).closest('.js-gsf');
				$target.toggleClass('is-visible');
				if ($target.hasClass('is-visible')) {
					$target.find('input#search').focus();
				}
				return false;
			});
			$element.on('click', function(e) {
				e.stopPropagation(); // prevent Propagation to body
			});
			$element.on('click', '.js-to-close', function(e) {
				//e.preventDefault();
				closeForm();
			});
			$target.find('input#search').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
			$target.find('input#search').on('focus', function() {
				$(this).closest('.gsf-input-line').addClass('is-focused');
				return false;
			});
			$target.find('input#search').on('blur', function() {
				$(this).closest('.gsf-input-line').removeClass('is-focused');
				return false;
			});

			// Make disappear when click outside
			$('body').on('click', closeForm);

			// Close on ESC key
			$('body').on('keyup', function(e) {
				if(e.keyCode==27)	closeForm();
			});

			// Sticky things on scroll (gc)
			var gsf_scrolltimer,
				gsf_menuInitPos = $('.site-banner').outerHeight(), //gc
				$headerSearch = $('.body-visual .site-banner .js-gsf'); // gc

			if ($headerSearch.length > 0) {

				var $trigger = $('.js-toggle-trigger', $element);

				var $searchfield = $('[name=search]', $headerSearch);
				$searchfield.on('keyup', function() {
					$trigger.toggleClass('text-only', $(this).val().length > 0);
				});

				window.addEventListener('scroll', function() {

					clearTimeout(gsf_scrolltimer);
					gsf_scrolltimer = setTimeout(function() {

						if ($(window).scrollTop() >= gsf_menuInitPos) {

							$trigger.attr('title', 'Déplier la recherche');
							$trigger.on('click.cxpnosearch', function(e) {
								var $searchfield = $('[name=search]', $element);
								var searchvalue = $searchfield.val();
								if (searchvalue.length > 0) {
									$(this).closest('form').trigger('submit');
								}
								e.preventDefault();
							});

						} else {

							$trigger.off('click.cxpnosearch').attr('title', 'Lancer la recherche');

						}

					}, 30);
				}, true);

			} // end of Sticky things on scroll (gc)

		}; // End of registerEvents

		// Close the search form
		var closeForm = function() {
			var $jsToggleTrigger = $element.find('.js-toggle-trigger');
			if ($jsToggleTrigger.closest('.js-gsf').hasClass('is-visible')) {
				$jsToggleTrigger.closest('.js-gsf').toggleClass('is-visible');
				if ($jsToggleTrigger.hasClass('text-only')) {
					$jsToggleTrigger.toggleClass('text-only');
					$jsToggleTrigger.closest('.js-gsf').find('input#search').val('');
					$jsToggleTrigger.attr('title', 'Déplier la recherche');
				}
			}
		};

		plugin.init();

	};

	$.fn.cxpSearchform = function(options) {

		return this.each(function() {
			if (undefined === $(this).data('cxpSearchform')) {
				var plugin = new $.cxpSearchform(this, options);
				$(this).data('cxpSearchform', plugin);
			}
		});

	};

	$('.cxp-searchform').cxpSearchform();

})(jQuery);

/**!
 Search Suggest
 Recherche suggestive

 @contributors: Rodolphe (Alsacréations)
 @date-created: 2016-01-20
 */

;
(function($) {

	$.cxpSearchSuggest = function(el, options) {

		var defaults = {
			remoteurl:'',
			minimumInputLength:3, // minimum number of characters for input to be sent
			timeoutSuggest:250, // minimum delay timeout before sending input (between keys) (milliseconds)
			inputField:null // input element
		};

		var plugin = this;

		plugin.settings = {};

		var $element = $(el),
			element = el;

		// Plugin initialization
		plugin.init = function() {
			plugin.settings = $.extend({}, defaults, options);
			updateSettingsFromHTMLData();
			registerEvents();
		};

		// Reads plugin settings from HTML data-* attributes (camelCase)
		var updateSettingsFromHTMLData = function() {
			var data = $element.data();
			for (var dat in data)
				plugin.settings[dat] = data[dat];
		};

		// Event Handlers on HTML components inside the plugin
		var registerEvents = function() {

			// Autocomplete/autosuggest
			plugin.settings.remoteurl = $element.data('target');
			plugin.settings.inputField = $element.find('.gsf-input');

			// Text input
			plugin.settings.inputField.on('keyup', function(e) {
				clearTimeout(plugin.timeoutSuggestDo);
				var that = $(this); // closure
				plugin.timeoutSuggestDo = setTimeout(function() {
					autoSuggest(that);
				},plugin.settings.timeoutSuggest);
			});

			// Make disappear when click outside
			$('body').on('click', closeSuggest);

			// Close on ESC key
			$('body').on('keyup', function(e) {
				if(e.keyCode==27)	closeSuggest();
			});

			// Submit form with query keyword(s) if suggest clicked
			$element.on('click', '[data-query]', function(e) {
				var query = $(this).data('query');
				if(query!==undefined) {
					plugin.settings.inputField.val(query);
					$element.closest('form').trigger('submit');
				}
				e.preventDefault();
			});

		}; // End of registerEvents

		// Do an autocomplete search
		var autoSuggest = function($elem) {

			var val = $elem.val();

			// Do not send request if chars limit not reached or if previous value
			if(val.length < plugin.settings.minimumInputLength || val==plugin.previousSuggest) return;

			// If remote url is set, do json XHR
			if(plugin.settings.remoteurl) {
				plugin.previousSuggest = val;
				$.getJSON(plugin.settings.remoteurl+val, function(json) {
					if(json) {
						autoSuggestUpdate($elem,json,val);
					}
				});
			}

		};

		var autoSuggestUpdate = function($elem,json,val) {

			// Populate HTML with JSON contents
			var contents = '';
			if(json) {
				$.each(json, function(key,values) {
					if(key && values.length>0) {
						contents += '<div class="tt-dataset"><div class="typeahead-section-name">'+key+'</div><div class="tt-suggestions">';
						$.each(values, function() {
							var re = RegExp(val, 'gi');
							var text = this.title.replace(re,'<strong class="tt-highlight">'+val+'</strong>');
							contents += '<div class="tt-suggestion"><p>';
							if(this.url) contents += '<a href="'+this.url+'">';
							else if(this.query) contents += '<a href="#" data-query="'+this.query+'">';
							if(this.image) contents += '<span class="tt-suggest-img"><img src="'+this.image+'" alt="" width="31" height="31"></span>'; else contents += '<span class="tt-suggest-img"></span>';
							contents += '<span class="tt-suggest-text">'+text+'</span>';
							if(this.url || this.query) contents += '</a>';
							contents += '</p></div>';
						});
						contents += '</div></div>';
					}
				});
			}

			// Insert contents in dropdown if exists, or creates it
			if($elem.next('.tt-dropdown-menu').length<1) {
				var textintro = $elem.data('suggestion-text');
				if(textintro===undefined) textintro = '';
				$elem.after('<div class="tt-dropdown-menu"><div class="tt-text-intro">'+textintro+'</div><div class="tt-dropdown-contents">'+contents+'</div></div>');
			} else {
				$elem.next('.tt-dropdown-menu').find('.tt-dropdown-contents').html(contents);
			}

		};

		// Close the search form
		var closeSuggest = function() {
			plugin.settings.inputField.next('.tt-dropdown-menu').remove();
		};

		plugin.init();

	};

	$.fn.cxpSearchSuggest = function(options) {

		return this.each(function() {
			if (undefined === $(this).data('cxpSearchSuggest')) {
				var plugin = new $.cxpSearchSuggest(this, options);
				$(this).data('cxpSearchSuggest', plugin);
			}
		});

	};

	$('.cxp-searchsuggest').cxpSearchSuggest();

})(jQuery);

/**!
 Selection
 Add to selection module

 @contributors: Rodolphe (Alsacréations)
 @date-created: 2015-05-13
 @last-update: 2015-05-13
 */

(function($) {

  $.cxpAddToSelection = function(el, options) {

    var defaults = {
      action: '', // action of the button/link, "add" or "remove"
      modaltarget: false // modal element to display messages
    };

    var plugin = this;

    plugin.settings = {};

    var $element = $(el),
      element = el;

    // Plugin initialization
    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);
      updateSettingsFromHTMLData();
      registerEvents();
    };

    // Reads plugin settings from HTML data-* attributes (camelCase)
    var updateSettingsFromHTMLData = function() {
      // Quick add for modal confirm
      $element.data('modaltarget', '#addtoselection-modal');
      var data = $element.data();
      for (var dat in data)
        plugin.settings[dat] = data[dat];
    };

    // Event Handlers on HTML components inside the plugin
    var registerEvents = function() {
      $element.addClass('modalopen');
      $element.on('click', function(e) {
        e.preventDefault();
        if (plugin.settings.action == 'add')
          plugin.addToSelection();
        else if (plugin.settings.action == 'remove')
          plugin.removeFromSelection();
      });
    };

    // Add item to selection
    plugin.addToSelection = function() {
      // @PROD : add here code to add item to selection (for ex : AJAX request)
      // @PROD : item ID is stored in plugin.settings.itemid

      // Display confirmation message
      $('.modal-text', $(plugin.settings.modaltarget)).text(plugin.settings.addmodaltxt);

      // Switch to remove button
      $element.data('action', 'remove');
      plugin.settings.action = 'remove';
      $('.icon', $element).removeClass('icon-plusdisk').addClass('icon-minus');
      $('span', $element).text(plugin.settings.removetxt);
    };

    // Remove from selection
    plugin.removeFromSelection = function() {
      // @PROD : add here code to remove item from selection (for ex : AJAX request)
      // @PROD : item ID is stored in plugin.settings.itemid

      // Display confirmation message
      $('.modal-text', $(plugin.settings.modaltarget)).text(plugin.settings.removemodaltxt);

      // Switch to add button
      $element.data('action', 'add');
      $('.icon', $element).removeClass('icon-minus').addClass('icon-plusdisk');
      plugin.settings.action = 'add';
      $('span', $element).text(plugin.settings.addtxt);
    };

    plugin.init();

  };

  $.fn.cxpAddToSelection = function(options) {

    return this.each(function() {
      if (undefined === $(this).data('cxpAddToSelection')) {
        var plugin = new $.cxpAddToSelection(this, options);
        $(this).data('cxpAddToSelection', plugin);
      }
    });

  };

  $('.cxp-addtoselection').cxpAddToSelection();

})(jQuery);

/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

/**
 * Activation du script Sticky-kit & calcul du header pour éviter la
 * superposition de l'un et de l'autre
 *
 * @author	Damien Senger <damien@alsacreations.fr>
 * */

;
(function($) {
  if ($('.js-active-nav').length) {
    var $header = $('.site-banner');

    // Quand le document est prêt, on calcule la taille du sticky menu
    if ($header.length) {
      if ($header.hasClass('is-stuck')) {
        var headerSize = $header.outerHeight();
      } else {
        $header.addClass('is-stuck');
        var headerSize = $header.outerHeight();
        $header.removeClass('is-stuck');
      }
    }

    var decalage = headerSize * 1.3;

    $(".js-active-nav").stick_in_parent({
      sticky_class: 'sticky_is_stuck',
      offset_top: decalage
    });
  }
})(jQuery);


/**
 * Script permettant l'ajout d'une classe .is-active dans le cas où
 * un des éléments de la navigation secondaire est actuellement parcouru
 *
 * @author	Damien Senger <damien@alsacreations.fr>
 * */

;
(function($) {
  $.fn.scrollIsActivePos = function () {
    var position = $(this).scrollTop(),
      $sections = $('.js-active-group'),
      $nav = $('.js-active-nav'),
      $header = $('.site-banner'),
      headerSize = $header.outerHeight() * 2;

    $sections.each(function() {
      var top = $(this).offset().top - headerSize,
        bottom = top + $(this).outerHeight(),
        id = $(this).attr('id');

      if (position >= top && position <= bottom) {
        // console.log('active : ' + id);
        $nav.find('li').removeClass('is-active');
        $nav.find('a[href="#' + id + '"]').parents('.js-active-item').addClass('is-active');
      }
    });
  }

  if ($(".js-active-nav").length) {
    $(window).on('scroll.navactive', function() {
      $(this).scrollIsActivePos();
    })
  }
})(jQuery);

/**!
 Survey
 Survey module with AJAX post

 @contributors: Rodolphe (Alsacréations)
 @date-created: 2015-04-28
 @last-update: 2015-04-28
 */

(function($) {

  $.cxpSurvey = function(el, options) {

    var defaults = {
      surveyPostUrl: '' // URL to post results
    };

    var plugin = this;

    plugin.settings = {};

    var $element = $(el),
      element = el;

    // Plugin initialization
    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);
      updateSettingsFromHTMLData();
      registerEvents();

      //btn-disable by default if no checked
      if ($element.find(':checked').length === 0) {
        $element.find('button').addClass('btn-disabled').attr('disabled', true);
      }
    };

    // Reads plugin settings from HTML data-* attributes (camelCase)
    var updateSettingsFromHTMLData = function() {
      var data = $element.data();
      for (var dat in data)
        plugin.settings[dat] = data[dat];
    };

    // Event Handlers on HTML components inside the plugin
    var registerEvents = function() {
      $('.btn-primary', $element).on('click', function(e) {
        e.preventDefault();
        plugin.postData();
      });
      $($element).on('click', function(e) {
        if ($element.find(':checked').length === 0) {
          $element.find('button').addClass('btn-disabled').attr('disabled', true);
        } else {
          $element.find('button').removeClass('btn-disabled').attr('disabled', false);
        }
      });
    };

    // Plugin post data to server with AJAX request
    plugin.postData = function() {
      var $form = $('form', $element);
      var formData = $form.serialize();
      $form.remove();
      $element.addClass('is-loading');
      $.post(plugin.settings.surveyPostUrl, formData, function(html) {
        setTimeout(function() {
          $element.removeClass('is-loading').addClass('with-results');
          $('.sv-results', $element).html(html);
          setTimeout(function() {
            $('.sv-results .toanimate', $element).removeClass('toanimate');
          }, 100);
        }, 750);
      });
    };

    plugin.init();

  };

  $.fn.cxpSurvey = function(options) {

    return this.each(function() {
      if (undefined === $(this).data('cxpSurvey')) {
        var plugin = new $.cxpSurvey(this, options);
        $(this).data('cxpSurvey', plugin);
      }
    });

  };

  $('.cxp-survey').cxpSurvey();

})(jQuery);

/**!
 Hammer jQuery plugin
 https://github.com/hammerjs/jquery.hammer.js/blob/master/jquery.hammer.js
*/
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'hammerjs'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('hammerjs'));
  } else {
    factory(jQuery, Hammer);
  }
}(function($, Hammer) {
  function hammerify(el, options) {
    var $el = $(el);
    if (!$el.data("hammer")) {
      $el.data("hammer", new Hammer($el[0], options));
    }
  }

  $.fn.hammer = function(options) {
    return this.each(function() {
      hammerify(this, options);
    });
  };

  // extend the emit method to also trigger jQuery events
  Hammer.Manager.prototype.emit = (function(originalEmit) {
    return function(type, data) {
      originalEmit.call(this, type, data);
      $(this.element).trigger({
        type: type,
        gesture: data
      });
    };
  })(Hammer.Manager.prototype.emit);
}));


/**!
 Swiper
 Swiper with items

 @contributors: Rodolphe (Alsacréations)
 @date-created: 2015-06-04
 @last-update: 2015-07-06
 */

(function($) {

  $.cxpSwiper = function(el, options) {

    var defaults = {
      activeIndex: 0, // active slide (group) index
      touch: true, // allow touch swiping
      touching: false, // is touch active
      touchDelta: 50, // touch swipe threshold
      animating: false, // is currently animated
      itemsPerSlide: undefined, // number of items per slide
      containerWidth: 0, // width of main container
      contentWidth: 0, // real width of content
      itemsCount: 0, // number of items
      slidesCount: 0, // number of pages
      autoDelay: false, // delay between slides
      paginateByItems: false, // show pagination by number of items (not by slide number)
      paginateByBullets: false, // activate bullets
      speed: 600, // transition speed (ms)
      loop: false, // loop transition
      orientationReset: false, // reset on orientationchange
      lastOrientation: -1, // last orientation value
      useActiveClasses: false, // use classes for active/inactive items (below)
      transitionsSet: false, // transitions are initialized
      classActive: 'slider-item-active', // active HTML class, without dot
      classPrevious: 'slider-item-prev', // active HTML class, without dot
      classNext: 'slider-item-next', // active HTML class, without dot
      itemSelector: '.slider-item',
      wrapperSelector: '.swiper-wrapper',
      nextSelector: '.slider-btn-next',
      prevSelector: '.slider-btn-prev',
      playPauseSelector: '.slider-play-btn',
      pgStart: '.slider-nb-start',
      pgEnd: '.slider-nb-end',
      pgTotal: '.slider-nb-total',
      pgContainer: '.slider-pagin-nb',
      pgBulletElement: '<span class="slider-pagin-item"></span>',
      pgBulletActiveClass: 'is-active'
    };

    var plugin = this;

    plugin.settings = {};

    var $element = $(el),
      element = el;

    // Plugin initialization
    plugin.init = function() {

      plugin.settings = $.extend({}, defaults, options);
      updateSettingsFromHTMLData();
      registerEvents();

      // Values
      plugin.updateInitValues();
      plugin.updatePagination();

      if (plugin.settings.autoDelay > 0) {
        plugin.settings.isAutoplay = true;
        clearInterval(plugin.settings.interval);
        plugin.settings.interval = setInterval(plugin.swipeNext, plugin.settings.autoDelay);
      } else {
        plugin.settings.isAutoplay = false;
        clearInterval(plugin.settings.interval);
        $(plugin.settings.playPauseSelector, $element).hide();
      }

      // Initialize pagination
      if (plugin.settings.paginateByBullets) {
        for (var i = 0; i < plugin.settings.slidesCount; i++) {
          $(plugin.settings.pgContainer, $element).append(plugin.settings.pgBulletElement);
        }
        var $bullets = $(plugin.settings.pgContainer, $element).children();
        $bullets.first().addClass(plugin.settings.pgBulletActiveClass);
        $bullets.on('click', function() {
          plugin.swipePause();
          var decal = -(plugin.settings.activeIndex - $(this).index());
          if (decal !== 0) plugin.swipeTo(decal);
        });
      }

      // Initialize CSS transitions
      // plugin.initTransitions();

      // Initialize touch events
      if (plugin.settings.touch) {
        $element.hammer().off('panright.cxpSwiper').on('panright.cxpSwiper', function(e) {
          if (!plugin.settings.touching && !plugin.settings.animating && e.gesture.deltaX > plugin.settings.touchDelta) {
            plugin.settings.touching = true;
            plugin.swipePrev();
          }
        });
        $element.hammer().off('panleft.cxpSwiper').on('panleft.cxpSwiper', function(e) {
          if (!plugin.settings.touching && !plugin.settings.animating && e.gesture.deltaX < -plugin.settings.touchDelta) {
            plugin.settings.touching = true;
            plugin.swipeNext();
          }
        });
        $element.hammer().off('panend.cxpSwiper').on('panend.cxpSwiper', function(e) {
          plugin.settings.touching = false;
        });

        // Go to first slide by default
        plugin.goTo(0);

      }

      // Orientation change ?
      plugin.settings.lastOrientation = ($(window).width() > $(window).height()) ? 90 : 0;

    };

    // Update dimensions values
    plugin.updateInitValues = function() {
      plugin.settings.itemsCount = $(plugin.settings.itemSelector, $element).length;
      plugin.settings.containerWidth = $(plugin.settings.wrapperSelector, $element).outerWidth();
      plugin.settings.contentWidth = 0;
      $(plugin.settings.itemSelector, $element).each(function() {
        plugin.settings.contentWidth += $(this).outerWidth();
      });
      if (plugin.settings.itemsPerSlide !== undefined) {
        plugin.settings.slidesCount = Math.ceil(plugin.settings.itemsCount / plugin.settings.itemsPerSlide);
      } else {
        plugin.settings.slidesCount = Math.ceil(plugin.settings.contentWidth / plugin.settings.containerWidth);
      }
    };

    // Initialize transitions
    plugin.disableTransitions = function() {
      $(plugin.settings.wrapperSelector, $element).css({
        '-webkit-transition': 'none',
        'transition': 'none'
      });
      plugin.settings.transitionsSet = false;
    };

    // Initialize transitions
    plugin.initTransitions = function() {
      if(plugin.settings.transitionsSet) return;
      $(plugin.settings.wrapperSelector, $element).css({
        '-webkit-transition': 'all ' + (plugin.settings.speed / 1000) + 's',
        'transition': 'all ' + (plugin.settings.speed / 1000) + 's'
      });
      plugin.settings.transitionsSet = true;
    };

    // Reads plugin settings from HTML data-* attributes (camelCase)
    var updateSettingsFromHTMLData = function() {
      var data = $element.data();
      for (var dat in data) plugin.settings[dat] = data[dat];
    };

    // Event Handlers on HTML components inside the plugin
    var registerEvents = function() {

      $(plugin.settings.nextSelector, $element).off('click.cxpSwiper').on('click.cxpSwiper', function(e) {
        e.preventDefault();
        plugin.swipePause();
        plugin.swipeNext();
      });
      $(plugin.settings.prevSelector, $element).off('click.cxpSwiper').on('click.cxpSwiper', function(e) {
        e.preventDefault();
        plugin.swipePause();
        plugin.swipePrev();
      });
      $(plugin.settings.playPauseSelector, $element).off('click.cxpSwiper').on('click.cxpSwiper', function(e) {
        e.preventDefault();
        if (plugin.settings.isAutoplay) {
          plugin.swipePause();
        } else {
          plugin.swipePlay();
        }
      });

    };

    // Calculate offset of slides for swiping
    var getOffset = function(dir) {
      var offsetLeft = false;
      if (plugin.settings.itemsPerSlide === undefined) { // if itemsPerSlide is not defined : width is auto (container)
        offsetLeft = -plugin.settings.containerWidth * plugin.settings.activeIndex;
      } else { // if itemsPerSlide is defined
        var $items = $(plugin.settings.itemSelector, $element);
        var $item = $items.eq(plugin.settings.activeIndex * plugin.settings.itemsPerSlide);
        if ($item !== undefined && $item.length > 0) {
          offsetLeft = -($item.position().left);

          if (plugin.settings.useActiveClasses) {
            $items.removeClass(plugin.settings.classActive);
            $items.removeClass(plugin.settings.classNext);
            $items.removeClass(plugin.settings.classPrevious);
            $item.addClass(plugin.settings.classActive);
            $item.next().addClass(plugin.settings.classNext);
            $item.prev().addClass(plugin.settings.classPrevious);
          }

        }
      }
      if (offsetLeft === -0) offsetLeft = 0;
      return offsetLeft;
    };

    // Toggle pause state
    plugin.swipePause = function() {
      $(plugin.settings.playPauseSelector, $element).find('.icon').removeClass('icon-pause').addClass('icon-play');
      clearInterval(plugin.settings.interval);
      plugin.settings.isAutoplay = false;
    };

    // Toggle auto play state
    plugin.swipePlay = function() {
      $(plugin.settings.playPauseSelector, $element).find('.icon').removeClass('icon-play').addClass('icon-pause');
      clearInterval(plugin.settings.interval);
      plugin.settings.interval = setInterval(plugin.swipeNext, plugin.settings.autoDelay);
      plugin.settings.isAutoplay = true;
    };

    // Destroy
    plugin.destroy = function() {
      // Clear the autoplay interval if exists
      clearInterval(plugin.settings.interval);
      // Unregister events
      $(plugin.settings.prevSelector + ',' + plugin.settings.nextSelector, $element).off('.cxpSwiper');
      // Autodestroy
      $element.removeData('cxpSwiper');
    };

    // Next item
    plugin.swipeNext = function() {
      plugin.swipeTo(1);
    };

    // Previous item
    plugin.swipePrev = function() {
      plugin.swipeTo(-1);
    };

    // Go to item (direct)
    plugin.goTo = function(index) {
      if (index > -1) plugin.settings.activeIndex = index;
      var offsetLeft = getOffset(index);
      $(plugin.settings.wrapperSelector, $element).css({
        '-webkit-transform': 'translate3d(' + offsetLeft + 'px,0,0)',
        'transform': 'translate3d(' + offsetLeft + 'px,0,0)'
      });
      plugin.updatePagination();
    };

    // Swipe to item
    plugin.swipeTo = function(dir) {

      if (plugin.settings.animating) return false;

      plugin.initTransitions();

      // If looping : rewinds to first slide
      if (plugin.settings.loop && plugin.settings.activeIndex + dir >= plugin.settings.slidesCount) {
        plugin.goTo(0);
        return;
        // dir = -plugin.settings.activeIndex; to go back with animation
      }

      // If forward/backgards direction is ok
      if (plugin.settings.activeIndex + dir >= 0 && plugin.settings.activeIndex + dir < plugin.settings.slidesCount) {
        plugin.settings.animating = true;
        clearInterval(plugin.settings.interval);
        if (plugin.settings.isAutoplay) plugin.settings.interval = setInterval(plugin.swipeNext, plugin.settings.autoDelay);
        plugin.settings.activeIndex += dir;
        var offsetLeft = getOffset(dir);
        if (offsetLeft !== false) {
          /*$(plugin.settings.wrapperSelector, $element).animate({
            left: offsetLeft + 'px'
          },plugin.settings.speed,'swing', function() {
            plugin.settings.animating = false;
          });*/
          $(plugin.settings.wrapperSelector, $element).css({
            '-webkit-transform': 'translate3d(' + offsetLeft + 'px,0,0)',
            'transform': 'translate3d(' + offsetLeft + 'px,0,0)'
          });

          setTimeout(function() {
            plugin.settings.animating = false;
          }, plugin.settings.speed);
        } else {
          plugin.settings.animating = false;
          plugin.settings.activeIndex -= dir;
        }
        plugin.updatePagination();
      }

    };

    // Update on resize
    plugin.updateResize = function() {

      if (plugin.settings.orientationReset) {
        var screenOrientation = ($(window).width() > $(window).height()) ? 90 : 0;
        if (screenOrientation !== plugin.settings.lastOrientation) {
          plugin.settings.lastOrientation = screenOrientation;
          plugin.init();
        }
      }
      // Fix on resize
      plugin.goTo(plugin.settings.activeIndex);
    };

    // Update pagination
    plugin.updatePagination = function() {

      //if(plugin.settings.activeIndex===0) return false;
      var $next = $(plugin.settings.nextSelector, $element);
      var $prev = $(plugin.settings.prevSelector, $element);

      if (plugin.settings.paginateByBullets) { // Paginate by bullets

        // Update HTML elements (bullets)
        $(plugin.settings.pgContainer, $element).children().removeClass(plugin.settings.pgBulletActiveClass).eq(plugin.settings.activeIndex).addClass(plugin.settings.pgBulletActiveClass);
        $next.css({
          opacity: (plugin.settings.activeIndex + 1 < plugin.settings.slidesCount ? 1 : 0)
        });
        $prev.css({
          opacity: (plugin.settings.activeIndex > 0 ? 1 : 0)
        });

      }

      if (plugin.settings.paginateByItems && plugin.settings.itemsPerSlide) { // Group pagination (start-end/total)

        var start = plugin.settings.activeIndex * plugin.settings.itemsPerSlide + 1;
        var end = Math.min(plugin.settings.activeIndex * plugin.settings.itemsPerSlide + plugin.settings.itemsPerSlide, plugin.settings.itemsCount);
        $(plugin.settings.pgStart, $element).text(start);
        if (end != start && end > start) $(plugin.settings.pgEnd, $element).text('-' + end);
        else $(plugin.settings.pgEnd, $element).text('');
        $(plugin.settings.pgTotal, $element).text(plugin.settings.itemsCount);
        $next.css({
          opacity: (end < plugin.settings.itemsCount ? 1 : 0)
        });
        $prev.css({
          opacity: (start > 1 ? 1 : 0)
        });

      } else { // Classic pagination (n/total)

        $(plugin.settings.pgStart, $element).text(plugin.settings.activeIndex + 1);
        $(plugin.settings.pgTotal, $element).text(plugin.settings.slidesCount);
        $next.css({
          opacity: (plugin.settings.activeIndex + 1 < plugin.settings.slidesCount ? 1 : 0)
        });
        $prev.css({
          opacity: (plugin.settings.activeIndex > 0 ? 1 : 0)
        });

      }

    };

    plugin.init();
    $(window).on('resize.cxpSwiper', plugin.updateResize);

  };

  $.fn.cxpSwiper = function(options) {

    return this.each(function() {
      if (undefined === $(this).data('cxpSwiper')) {
        var plugin = new $.cxpSwiper(this, options);
        $(this).data('cxpSwiper', plugin);
      }
    });

  };

  $('.cxp-swiper').cxpSwiper();

})(jQuery);

/**!
 Tab Nav
 Description du module

 @contributors: Guillaume Focheux (Alsacréations)
 @date-created: 2015-04-24
 @last-update: 2016-11-29 by Hassan Akaou D-WEB (Comexposium)
 */

;
(function ($) {

    if ($('.tabs-nav').length > 0) {
        $AllTabNav = $('.tabs-nav');
        $AllTabNav.find('.tn-item-link').on('click', function (e) {
            e.preventDefault();
            var indexTab = $(this).closest('.tn-item').index(),
            $tabNav = $(this).closest('.tabs-nav');
            $('.tn-item-link', $tabNav).removeClass('is-active');
            $(this).addClass('is-active');
            $('.tn-panel', $tabNav).removeClass('is-visible');
            $('.tn-panel', $tabNav).eq(indexTab).addClass('is-visible');
            // if ($('.tn-panel', $tabNav).eq(indexTab).find('.slider').length > 0) {
                // Reset the slider in the hidden tab
                // $('.tn-panel', $tabNav).eq(indexTab).find('.slider').each(function (e) {
                //     var sliderClass = $(this).attr("class").match(/slider-instance[\w-]*\b/);
                //     sliderClass = sliderClass[0];
                // });
            // }
        });
    }

    if (!$('div.tabs-nav > ul > li:nth-child(1) > a').hasClass('is-active')) {
        $FirstlinkTabsNav = $('div.tabs-nav > ul > li:nth-child(1) > a');
        $($FirstlinkTabsNav).addClass('is-active');
    } else { 
        return false;
    }

})(jQuery);
/**!
 Affichage / masquage de tags

 @contributors: Damien Senger (Alsacréations)
 @date-created: 2015-10-16
 @last-update: 2015-10-16
 */

;
(function($) {

  $.fn.tagHideOnLoad = function() {
    var $container = $(this),
      $hiddenChildren = $container.children('.js-hide-item');

    $hiddenChildren.hide();
  };

  $.fn.tagToggleOnClick = function() {
    var $button = $(this),
      $container = $button.parents('.js-hide-container'),
      $txtHide = $button.children('.js-hide-trigger-txtHide'),
      $txtShow = $button.children('.js-hide-trigger-txtShow'),
      $toggledChildren = $container.children('.js-hide-item');

    if ($toggledChildren.length) {
      if ($container.hasClass('is-open'))  {
        $toggledChildren.fadeOut(400, function() {
          $txtHide.hide();
          $txtShow.show();

        });
      } else {
        $toggledChildren.fadeIn();
        $txtHide.show();
        $txtShow.hide();
      }
      $container.toggleClass('is-open');
    }

  };

  if ($('.js-hide-container').length) {
    $('.js-hide-container').tagHideOnLoad();
    $('.js-hide-trigger-txtHide').removeClass('visually-hidden').hide();
  }

  if ($('.js-hide-trigger').length) {
    $('.js-hide-trigger').on('click', function(e) {
      $(this).tagToggleOnClick();
      e.preventDefault();
    });
  }

})(jQuery);

$(document).ready(function() {

  /*
   * jQuery simple and accessible dialog tooltip window, using ARIA
   * Website: http://a11y.nicolas-hoffmann.net/dialog-tooltip/
   * License MIT: https://github.com/nico3333fr/jquery-accessible-dialog-tooltip-aria/blob/master/LICENSE
   */
  // loading tooltip ------------------------------------------------------------------------------------------------------------
  // init
  $js_tooltips = $('.js-tooltip');
  if ($js_tooltips.length) { // if there are at least one :)

    $js_tooltips.each(function(index_to_expand) {
      var $this = $(this),
        options = $this.data(),
        $tooltip_prefix_class = options.tooltipPrefixClass || '',
        index_lisible = index_to_expand + 1;

      $this.attr({
        'id': 'label_tooltip_' + index_lisible
      });
      // wraps element in a container
      $this.wrap('<span class="' + $tooltip_prefix_class + '-container"></span>');

    });

    // jQuery formatted selector to search for focusable items
    var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";


    // events ------------------
    $('body').on('click', function(event) {
        var $target = $(event.target);
        // if click outside => close
        if (!$target.is('.js-dialogtooltip') && !$target.is('.js-tooltip') && !$target.parents(".js-dialogtooltip").is(".js-dialogtooltip")) {
          $('.js-dialogtooltip').remove();
        }
      })
      .on('click', '.js-tooltip', function(event) {
        var $this = $(this),
          options = $this.data(),
          $tooltip_prefix_class = options.tooltipPrefixClass || '',
          $tooltip_text = options.tooltipText || '',
          $tooltip_content_id = typeof options.tooltipContentId !== 'undefined' ? '#' + options.tooltipContentId : '',
          $tooltip_title = options.tooltipTitle || '',
          $tooltip_close_text = options.tooltipCloseText || 'Close',
          $tooltip_close_title = options.tooltipCloseTitle || options.tooltipCloseText,
          $tooltip_starter_id = $this.attr('id'),
          $tooltip_code;

        // close tooltip and remove active one
        $('#js-tooltip').remove();
        $('.js-tooltip').removeClass('is-active');

        // insert code at the end
        $tooltip_code = '<dialog id="js-tooltip" class="js-dialogtooltip ' + $tooltip_prefix_class + '-tooltip" data-launched-by="click" role="dialog" aria-labelledby="tooltip-title"><div role="document">';
        $tooltip_code += '<button id="js-tooltip-close" class="' + $tooltip_prefix_class + '-tooltip__close" data-focus-back="' + $tooltip_starter_id + '" title="' + $tooltip_close_title + '">' + $tooltip_close_text + '</button>';
        if ($tooltip_title !== '') {
          $tooltip_code += '<h1 id="tooltip-title" class="tooltip-title ' + $tooltip_prefix_class + '-tooltip__title">' + $tooltip_title + '</h1>';
        }
        if ($tooltip_text !== '') {
          $tooltip_code += '<p>' + $tooltip_text + '</p>';
        } else {
          if ($tooltip_content_id !== '' && $($tooltip_content_id).length) {
            $tooltip_code += $($tooltip_content_id).html();
          }
        }
        $tooltip_code += '</div></dialog>';

        // Chrome bug
        setTimeout(function() {
          $($tooltip_code).insertAfter($this);
        }, 50);
        // fix for Chrome bug resolution…
        setTimeout(function() {
          $('#js-tooltip-close').focus();
        }, 51);

        $('#' + $tooltip_starter_id).addClass('is-active');

        event.preventDefault();

      })
      .on('mouseleave', '#js-tooltip', function(event) {
        var $this = $(this),
          options = $this.data(),
          $tooltip_launched_by = options.launchedBy,
          $focus_back = $('#' + options.focusBack),
          $close_button = $this.find('.tooltip-close');

        $close_button.click();
        $focus_back.removeClass('is-active');

      });

    // close button and esc key
    $('body').on('click', '#js-tooltip-close', function(event) {
      var $this = $(this),
        $tooltip_launched_by = $this.parents('#js-tooltip').attr('data-launched-by'),
        $focus_back = $('#' + $this.attr('data-focus-back'));


      $('#js-tooltip').remove();
      $focus_back.focus();
      $focus_back.removeClass('is-active');

    })

    .on("keydown", "#js-tooltip", function(event) {
      var $this = $(this);

      if (event.keyCode == 27) { // esc
        $('#js-tooltip-close').click();
        event.preventDefault();
      }
      if (event.keyCode == 9) { // tab or maj+tab

        // get list of all children elements in given object
        var children = $this.find('*');

        // get list of focusable items
        var focusableItems = children.filter(focusableElementsString).filter(':visible');

        // get currently focused item
        var focusedItem = $(document.activeElement);

        // get the number of focusable items
        var numberOfFocusableItems = focusableItems.length

        var focusedItemIndex = focusableItems.index(focusedItem);

        if (!event.shiftKey && (focusedItemIndex == numberOfFocusableItems - 1)) {
          focusableItems.get(0).focus();
          event.preventDefault();
        }
        if (event.shiftKey && focusedItemIndex == 0) {
          focusableItems.get(numberOfFocusableItems - 1).focus();
          event.preventDefault();
        }


      }

    });


  }

});
