/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-fontface-generatedcontent-input-inputtypes-setclasses-shiv !*/
!function(e,t,n){function a(e,t){return typeof e===t}function r(){var e,t,n,r,o,i,s;for(var l in d)if(d.hasOwnProperty(l)){if(e=[],t=d[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),c.push((r?"":"no-")+s.join("-"))}}function o(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(m&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),m?u.className.baseVal=t:u.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):m?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=i(m?"svg":"body"),e.fake=!0),e}function l(e,n,a,r){var o,l,c,d,f="modernizr",m=i("div"),p=s();if(parseInt(a,10))for(;a--;)c=i("div"),c.id=r?r[a]:f+(a+1),m.appendChild(c);return o=i("style"),o.type="text/css",o.id="s"+f,(p.fake?p:m).appendChild(o),p.appendChild(m),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),m.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",d=u.style.overflow,u.style.overflow="hidden",u.appendChild(p)),l=n(m,e),p.fake?(p.parentNode.removeChild(p),u.style.overflow=d,u.offsetHeight):m.parentNode.removeChild(m),!!l}var c=[],d=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){d.push({name:e,fn:t,options:n})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var u=t.documentElement,m="svg"===u.nodeName.toLowerCase();m||!function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,c(t)}function o(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function i(e,n,a){if(n||(n=t),f)return n.createElement(e);a||(a=o(n));var r;return r=a.cache[e]?a.cache[e].cloneNode():h.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!r.canHaveChildren||p.test(e)||r.tagUrn?r:a.frag.appendChild(r)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),i=0,s=a(),l=s.length;l>i;i++)r.createElement(s[i]);return r}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function c(e){e||(e=t);var a=o(e);return!b.shivCSS||d||a.hasCSS||(a.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,a),e}var d,f,u="3.7.3",m=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,f=!0}}();var b={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:m.shivCSS!==!1,supportsUnknownElements:f,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:r};e.html5=b,c(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var p=i("input"),h="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),g={};Modernizr.input=function(t){for(var n=0,a=t.length;a>n;n++)g[t[n]]=!!(t[n]in p);return g.list&&(g.list=!(!i("datalist")||!e.HTMLDataListElement)),g}(h);var v="search tel url email datetime date month week time datetime-local number range color".split(" "),y={};Modernizr.inputtypes=function(e){for(var a,r,o,i=e.length,s="1)",l=0;i>l;l++)p.setAttribute("type",a=e[l]),o="text"!==p.type&&"style"in p,o&&(p.value=s,p.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&p.style.WebkitAppearance!==n?(u.appendChild(p),r=t.defaultView,o=r.getComputedStyle&&"textfield"!==r.getComputedStyle(p,null).WebkitAppearance&&0!==p.offsetHeight,u.removeChild(p)):/^(search|tel)$/.test(a)||(o=/^(url|email)$/.test(a)?p.checkValidity&&p.checkValidity()===!1:p.value!=s)),y[e[l]]=!!o;return y}(v);var b=f.testStyles=l,E=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();E?Modernizr.addTest("fontface",!1):b('@font-face {font-family:"font";src:url("https://")}',function(e,n){var a=t.getElementById("smodernizr"),r=a.sheet||a.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),b('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}),r(),o(c),delete f.addTest,delete f.addAsyncTest;for(var C=0;C<Modernizr._q.length;C++)Modernizr._q[C]();e.Modernizr=Modernizr}(window,document);