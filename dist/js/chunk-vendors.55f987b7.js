(self["webpackChunktodo"]=self["webpackChunktodo"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),o=String,i=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw i("Can't set "+o(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw o("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),l=i(c),u=o(s,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),o=n(3157),i=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(o(e)&&!s(e,"length").writable)throw i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},648:function(e,t,n){var r=n(1694),o=n(614),i=n(4326),s=n(5112),a=s("toStringTag"),c=Object,l="Arguments"==i(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=o(t),c=s.f,l=i.f,u=0;u<a.length;u++){var d=a[u];r(e,d)||n&&r(n,d)||c(e,d,l(t,d))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),o=n(3070),i=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&i(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),o=TypeError;e.exports=function(e,t){if(!delete e[t])throw o("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,i=n(7854),s=n(8113),a=i.process,c=i.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),o=Error,i=r("".replace),s=function(e){return String(o(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=i(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),s=n(8052),a=n(3072),c=n(9920),l=n(4705);e.exports=function(e,t){var n,u,d,f,h,p,m=e.target,g=e.global,v=e.stat;if(u=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(d in t){if(h=t[d],e.dontCallGetSet?(p=o(u,d),f=p&&p.value):f=u[d],n=l(g?d:m+(v?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h==typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&i(h,"sham",!0),s(u,d,h,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},5668:function(e,t,n){var r=n(1702),o=n(9662);e.exports=function(e,t,n){try{return r(o(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(i){}}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);e.exports=r?s:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),i=n(4326),s=Object,a=r("".split);e.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),o=n(111),i=n(7674);e.exports=function(e,t,n){var s,a;return i&&r(s=t.constructor)&&s!==n&&o(a=s.prototype)&&a!==n.prototype&&i(e,a),e}},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,s=n(4811),a=n(7854),c=n(111),l=n(8880),u=n(2597),d=n(5465),f=n(6200),h=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var _=d.state||(d.state=new g);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw m(p);return t.facade=e,_.set(e,t),t},o=function(e){return _.get(e)||{}},i=function(e){return _.has(e)}}else{var b=f("state");h[b]=!0,r=function(e,t){if(u(e,b))throw m(p);return t.facade=e,l(e,b,t),t},o=function(e){return u(e,b)?e[b]:{}},i=function(e){return u(e,b)}}e.exports={set:r,get:o,has:i,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==u||n!=l&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),o=n(4154),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),i=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),o=n(7293),i=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,l=n(2788),u=n(9909),d=u.enforce,f=u.get,h=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===m(h(t),0,7)&&(t="["+g(h(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=d(e);return s(r,"source")||(r.source=v(_,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return i(this)&&f(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),o=n(4664),i=n(3353),s=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",h="writable";t.f=r?i?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&h in n&&!n[h]){var r=u(e,t);r&&r[h]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),s=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),u)try{return d(e,t)}catch(n){}if(l(e,t))return s(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),l=0,u=[];for(n in r)!o(a,n)&&o(r,n)&&c(u,n);while(t.length>l)o(r,n=t[l++])&&(~s(u,n)||c(u,n));return u}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),o=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return o(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),o=n(614),i=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&o(n=e.toString)&&!i(a=r(n,e)))return a;if(o(n=e.valueOf)&&!i(a=r(n,e)))return a;if("string"!==t&&o(n=e.toString)&&!i(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),s=n(5181),a=n(9670),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),i=n(2190),s=n(8173),a=n(2140),c=n(5112),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,c=s(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!o(n)||i(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),o=n(614),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),s=n(9711),a=n(6293),c=n(3307),l=r.Symbol,u=o("wks"),d=c?l["for"]||l:l&&l.withoutSetter||s;e.exports=function(e){return i(u,e)||(u[e]=a&&i(l,e)?l[e]:d("Symbol."+e)),u[e]}},7658:function(e,t,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),s=n(3658),a=n(7207),c=n(7293),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=l||!u();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=o(this),n=i(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),s=n(3658),a=n(5117),c=n(7207),l=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},d=l||!u();r({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(e){var t=o(this),n=i(t),r=arguments.length;if(r){c(n+r);var l=n;while(l--){var u=l+r;l in t?t[u]=t[l]:a(t,u)}for(var d=0;d<r;d++)t[d]=arguments[d]}return s(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),o=n(7854),i=n(5005),s=n(9114),a=n(3070).f,c=n(2597),l=n(5787),u=n(9587),d=n(6277),f=n(3678),h=n(1060),p=n(9781),m=n(1913),g="DOMException",v=i("Error"),y=i(g),_=function(){l(this,b);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=v(t);return o.name=g,a(r,"stack",s(1,h(o.stack,1))),u(r,this,_),r},b=_.prototype=y.prototype,w="stack"in v(g),E="stack"in new y(1,2),I=y&&p&&Object.getOwnPropertyDescriptor(o,g),S=!!I&&!(I.writable&&I.configurable),T=w&&!S&&!E;r({global:!0,constructor:!0,forced:m||T},{DOMException:T?_:y});var k=i(g),C=k.prototype;if(C.constructor!==k)for(var O in m||a(C,"constructor",s(1,k)),f)if(c(f,O)){var A=f[O],R=A.s;c(k,R)||a(k,R,s(6,A.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return y},L:function(){return c},LL:function(){return O},Pz:function(){return v},ZR:function(){return C},aH:function(){return g},b$:function(){return E},eu:function(){return T},hl:function(){return S},m9:function(){return V},ne:function(){return M},pd:function(){return D},q4:function(){return m},ru:function(){return w},tV:function(){return l},uI:function(){return b},vZ:function(){return $},w1:function(){return I},xO:function(){return x},xb:function(){return P},z$:function(){return _},zd:function(){return L}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,i||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,a=i?n[e.charAt(o)]:0;++o;const c=o<e.length,l=c?n[e.charAt(o)]:64;++o;const u=o<e.length,d=u?n[e.charAt(o)]:64;if(++o,null==t||null==a||null==l||null==d)throw new s;const f=t<<2|a>>4;if(r.push(f),64!==l){const e=a<<4&240|l>>2;if(r.push(e),64!==d){const e=l<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return i.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>u().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_API_ID:"1:816039547665:web:56c122f52d55387f9d32b0",VUE_APP_AUTH_DOMAIN:"auth-shop-3d16c.firebaseapp.com",VUE_APP_FIREBASE_API_KEY:"AIzaSyDDrhXbXqExt9DX9YKnl4OZTdVfqcqn-oU",VUE_APP_MESSAGING_SENDER_ID:"816039547665",VUE_APP_PROJECT_ID:"auth-shop-3d16c",VUE_APP_STORAGE_BUCKET:"auth-shop-3d16c.appspot.com",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},h=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},p=()=>{try{return d()||f()||h()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function b(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function w(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function E(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){try{return"object"===typeof indexedDB}catch(e){return!1}}function T(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="FirebaseError";class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=k,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?A(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new C(r,s,n);return a}}function A(e,t){return e.replace(R,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(N(n)&&N(i)){if(!$(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function N(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function D(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=j(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{$y:function(){return Re},B:function(){return s},BK:function(){return Je},Bj:function(){return i},EB:function(){return l},Fl:function(){return Ze},IU:function(){return Ne},Jd:function(){return k},PG:function(){return Ae},SU:function(){return ze},Um:function(){return ke},WL:function(){return We},X$:function(){return R},X3:function(){return $e},XI:function(){return Ve},Xl:function(){return xe},dq:function(){return je},iH:function(){return Fe},j:function(){return O},lk:function(){return C},nZ:function(){return c},qj:function(){return Te},qq:function(){return E},yT:function(){return Pe}});n(7658);var r=n(7139);let o;class i{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=o,!e&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e){return new i(e)}function a(e,t=o){t&&t.active&&t.effects.push(e)}function c(){return o}function l(e){o&&o.cleanups.push(e)}const u=e=>{const t=new Set(e);return t.w=0,t.n=0,t},d=e=>(e.w&v)>0,f=e=>(e.n&v)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},p=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];d(o)&&!f(o)?o.delete(e):t[n++]=o,o.w&=~v,o.n&=~v}t.length=n}},m=new WeakMap;let g=0,v=1;const y=30;let _;const b=Symbol(""),w=Symbol("");class E{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=_,t=S;while(e){if(e===this)return;e=e.parent}try{return this.parent=_,_=this,S=!0,v=1<<++g,g<=y?h(this):I(this),this.fn()}finally{g<=y&&p(this),v=1<<--g,_=this.parent,S=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_===this?this.deferStop=!0:this.active&&(I(this),this.onStop&&this.onStop(),this.active=!1)}}function I(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let S=!0;const T=[];function k(){T.push(S),S=!1}function C(){const e=T.pop();S=void 0===e||e}function O(e,t,n){if(S&&_){let t=m.get(e);t||m.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=u());const o=void 0;A(r,o)}}function A(e,t){let n=!1;g<=y?f(e)||(e.n|=v,n=!d(e)):n=!e.has(_),n&&(e.add(_),_.deps.push(e))}function R(e,t,n,o,i,s){const a=m.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(o);a.forEach(((t,n)=>{("length"===n||n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(b)),(0,r._N)(e)&&c.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(b)),(0,r._N)(e)&&c.push(a.get(w)));break;case"set":(0,r._N)(e)&&c.push(a.get(b));break}if(1===c.length)c[0]&&P(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);P(u(e))}}function P(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&$(r,t);for(const r of n)r.computed||$(r,t)}function $(e,t){(e!==_||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function N(e,t){var n;return null===(n=m.get(e))||void 0===n?void 0:n.get(t)}const x=(0,r.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),D=B(),M=B(!1,!0),U=B(!0),j=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ne(this);for(let t=0,o=this.length;t<o;t++)O(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ne)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){k();const n=Ne(this)[t].apply(this,e);return C(),n}})),e}function V(e){const t=Ne(this);return O(t,"has",e),t.hasOwnProperty(e)}function B(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_isShallow"===o)return t;if("__v_raw"===o&&i===(e?t?Ee:we:t?be:_e).get(n))return n;const s=(0,r.kJ)(n);if(!e){if(s&&(0,r.RI)(j,o))return Reflect.get(j,o,i);if("hasOwnProperty"===o)return V}const a=Reflect.get(n,o,i);return((0,r.yk)(o)?L.has(o):x(o))?a:(e||O(n,"get",o),t?a:je(a)?s&&(0,r.S0)(o)?a:a.value:(0,r.Kn)(a)?e?Ce(a):Te(a):a)}}const H=q(),z=q(!0);function q(e=!1){return function(t,n,o,i){let s=t[n];if(Re(s)&&je(s)&&!je(o))return!1;if(!e&&(Pe(o)||Re(o)||(s=Ne(s),o=Ne(o)),!(0,r.kJ)(t)&&je(s)&&!je(o)))return s.value=o,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,o,i);return t===Ne(i)&&(a?(0,r.aU)(o,s)&&R(t,"set",n,o,s):R(t,"add",n,o)),c}}function W(e,t){const n=(0,r.RI)(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&R(e,"delete",t,void 0,o),i}function J(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&L.has(t)||O(e,"has",t),n}function G(e){return O(e,"iterate",(0,r.kJ)(e)?"length":b),Reflect.ownKeys(e)}const K={get:D,set:H,deleteProperty:W,has:J,ownKeys:G},Y={get:U,set(e,t){return!0},deleteProperty(e,t){return!0}},X=(0,r.l7)({},K,{get:M,set:z}),Z=e=>e,Q=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,r=!1){e=e["__v_raw"];const o=Ne(e),i=Ne(t);n||(t!==i&&O(o,"get",t),O(o,"get",i));const{has:s}=Q(o),a=r?Z:n?De:Le;return s.call(o,t)?a(e.get(t)):s.call(o,i)?a(e.get(i)):void(e!==o&&e.get(t))}function te(e,t=!1){const n=this["__v_raw"],r=Ne(n),o=Ne(e);return t||(e!==o&&O(r,"has",e),O(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function ne(e,t=!1){return e=e["__v_raw"],!t&&O(Ne(e),"iterate",b),Reflect.get(e,"size",e)}function re(e){e=Ne(e);const t=Ne(this),n=Q(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function oe(e,t){t=Ne(t);const n=Ne(this),{has:o,get:i}=Q(n);let s=o.call(n,e);s||(e=Ne(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&R(n,"set",e,t,a):R(n,"add",e,t),this}function ie(e){const t=Ne(this),{has:n,get:r}=Q(t);let o=n.call(t,e);o||(e=Ne(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&R(t,"delete",e,void 0,i),s}function se(){const e=Ne(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function ae(e,t){return function(n,r){const o=this,i=o["__v_raw"],s=Ne(i),a=t?Z:e?De:Le;return!e&&O(s,"iterate",b),i.forEach(((e,t)=>n.call(r,a(e),a(t),o)))}}function ce(e,t,n){return function(...o){const i=this["__v_raw"],s=Ne(i),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=i[e](...o),d=n?Z:t?De:Le;return!t&&O(s,"iterate",l?w:b),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function le(e){return function(...t){return"delete"!==e&&this}}function ue(){const e={get(e){return ee(this,e)},get size(){return ne(this)},has:te,add:re,set:oe,delete:ie,clear:se,forEach:ae(!1,!1)},t={get(e){return ee(this,e,!1,!0)},get size(){return ne(this)},has:te,add:re,set:oe,delete:ie,clear:se,forEach:ae(!1,!0)},n={get(e){return ee(this,e,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:le("add"),set:le("set"),delete:le("delete"),clear:le("clear"),forEach:ae(!0,!1)},r={get(e){return ee(this,e,!0,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:le("add"),set:le("set"),delete:le("delete"),clear:le("clear"),forEach:ae(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach((o=>{e[o]=ce(o,!1,!1),n[o]=ce(o,!0,!1),t[o]=ce(o,!1,!0),r[o]=ce(o,!0,!0)})),[e,n,t,r]}const[de,fe,he,pe]=ue();function me(e,t){const n=t?e?pe:he:e?fe:de;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get((0,r.RI)(n,o)&&o in t?n:t,o,i)}const ge={get:me(!1,!1)},ve={get:me(!1,!0)},ye={get:me(!0,!1)};const _e=new WeakMap,be=new WeakMap,we=new WeakMap,Ee=new WeakMap;function Ie(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Se(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ie((0,r.W7)(e))}function Te(e){return Re(e)?e:Oe(e,!1,K,ge,_e)}function ke(e){return Oe(e,!1,X,ve,be)}function Ce(e){return Oe(e,!0,Y,ye,we)}function Oe(e,t,n,o,i){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=Se(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function Ae(e){return Re(e)?Ae(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Re(e){return!(!e||!e["__v_isReadonly"])}function Pe(e){return!(!e||!e["__v_isShallow"])}function $e(e){return Ae(e)||Re(e)}function Ne(e){const t=e&&e["__v_raw"];return t?Ne(t):e}function xe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Le=e=>(0,r.Kn)(e)?Te(e):e,De=e=>(0,r.Kn)(e)?Ce(e):e;function Me(e){S&&_&&(e=Ne(e),A(e.dep||(e.dep=u())))}function Ue(e,t){e=Ne(e);const n=e.dep;n&&P(n)}function je(e){return!(!e||!0!==e.__v_isRef)}function Fe(e){return Be(e,!1)}function Ve(e){return Be(e,!0)}function Be(e,t){return je(e)?e:new He(e,t)}class He{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ne(e),this._value=t?e:Le(e)}get value(){return Me(this),this._value}set value(e){const t=this.__v_isShallow||Pe(e)||Re(e);e=t?e:Ne(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Le(e),Ue(this,e))}}function ze(e){return je(e)?e.value:e}const qe={get:(e,t,n)=>ze(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return je(o)&&!je(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function We(e){return Ae(e)?e:new Proxy(e,qe)}function Je(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=Ke(e,n);return t}class Ge{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return N(Ne(this._object),this._key)}}function Ke(e,t,n){const r=e[t];return je(r)?r:new Ge(e,t,n)}var Ye;class Xe{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ye]=!1,this._dirty=!0,this.effect=new E(e,(()=>{this._dirty||(this._dirty=!0,Ue(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ne(this);return Me(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ze(e,t,n=!1){let o,i;const s=(0,r.mf)(e);s?(o=e,i=r.dG):(o=e.get,i=e.set);const a=new Xe(o,i,s||!i,n);return a}Ye="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return s},Ah:function(){return Oe},Cn:function(){return D},FN:function(){return gn},Fl:function(){return $n},HY:function(){return Lt},Ho:function(){return rn},JJ:function(){return W},Jd:function(){return Ce},Ko:function(){return Fe},P$:function(){return oe},Q6:function(){return ue},U2:function(){return se},Uk:function(){return on},Us:function(){return At},WI:function(){return Ve},Wm:function(){return en},Y3:function(){return y},Y8:function(){return te},YP:function(){return Y},_:function(){return Qt},aZ:function(){return de},bv:function(){return Se},dD:function(){return L},dG:function(){return un},f3:function(){return J},h:function(){return Nn},iD:function(){return Wt},ic:function(){return ke},j4:function(){return Jt},kq:function(){return sn},lA:function(){return Gt},m0:function(){return G},nK:function(){return le},up:function(){return De},w5:function(){return M},wF:function(){return Ie},wg:function(){return Vt},wy:function(){return Ne}});n(7658),n(541);var r=n(4870),o=n(7139);function i(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){a(i,t,n)}return o}function s(e,t,n,r){if((0,o.mf)(e)){const s=i(e,t,n,r);return s&&(0,o.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const c=[];for(let o=0;o<e.length;o++)c.push(s(e[o],t,n,r));return c}function a(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void i(a,null,10,[e,o,s])}c(e,n,o,r)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const d=[];let f=0;const h=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function _(e){let t=f+1,n=d.length;while(t<n){const r=t+n>>>1,o=k(d[r]);o<e?t=r+1:n=r}return t}function b(e){d.length&&d.includes(e,l&&e.allowRecurse?f+1:f)||(null==e.id?d.push(e):d.splice(_(e.id),0,e),w())}function w(){l||u||(u=!0,v=g.then(O))}function E(e){const t=d.indexOf(e);t>f&&d.splice(t,1)}function I(e){(0,o.kJ)(e)?h.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||h.push(e),w()}function S(e,t=(l?f+1:0)){for(0;t<d.length;t++){const e=d[t];e&&e.pre&&(d.splice(t,1),t--,e())}}function T(e){if(h.length){const e=[...new Set(h)];if(h.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function O(e){u=!1,l=!0,d.sort(C);o.dG;try{for(f=0;f<d.length;f++){const e=d[f];e&&!1!==e.active&&i(e,null,14)}}finally{f=0,d.length=0,T(e),l=!1,v=null,(d.length||h.length)&&O(e)}}new Set;new Map;function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||o.kT;let i=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||o.kT;s&&(i=n.map((e=>(0,o.HD)(e)?e.trim():e))),t&&(i=n.map(o.h5))}let l;let u=r[l=(0,o.hR)(t)]||r[l=(0,o.hR)((0,o._A)(t))];!u&&a&&(u=r[l=(0,o.hR)((0,o.rs)(t))]),u&&s(u,e,6,i);const d=r[l+"Once"];if(d){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(d,e,6,i)}}function R(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let a={},c=!1;if(!(0,o.mf)(e)){const r=e=>{const n=R(e,t,!0);n&&(c=!0,(0,o.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,o.kJ)(s)?s.forEach((e=>a[e]=null)):(0,o.l7)(a,s),(0,o.Kn)(e)&&r.set(e,a),a):((0,o.Kn)(e)&&r.set(e,null),null)}function P(e,t){return!(!e||!(0,o.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,o.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,o.RI)(e,(0,o.rs)(t))||(0,o.RI)(e,t))}let $=null,N=null;function x(e){const t=$;return $=e,N=e&&e.type.__scopeId||null,t}function L(e){N=e}function D(){N=null}function M(e,t=$,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&zt(-1);const o=x(t);let i;try{i=e(...n)}finally{x(o),r._d&&zt(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[c],slots:l,attrs:u,emit:d,render:f,renderCache:h,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,_;const b=x(e);try{if(4&n.shapeFlag){const e=i||r;y=an(f.call(e,e,h,s,m,p,g)),_=u}else{const e=t;0,y=an(e.length>1?e(s,{attrs:u,slots:l,emit:d}):e(s,null)),_=t.props?u:j(u)}}catch(E){jt.length=0,a(E,e,1),y=en(Mt)}let w=y;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(c&&e.some(o.tR)&&(_=F(_,c)),w=rn(w,_))}return n.dirs&&(w=rn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,x(b),y}const j=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,o.F7)(n))&&((t||(t={}))[n]=e[n]);return t},F=(e,t)=>{const n={};for(const r in e)(0,o.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function V(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||B(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?B(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!P(l,n))return!0}}return!1}function B(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!P(n,i))return!0}return!1}function H({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z=e=>e.__isSuspense;function q(e,t){t&&t.pendingBranch?(0,o.kJ)(e)?t.effects.push(...e):t.effects.push(e):I(e)}function W(e,t){if(mn){let n=mn.provides;const r=mn.parent&&mn.parent.provides;r===n&&(n=mn.provides=Object.create(r)),n[e]=t}else 0}function J(e,t,n=!1){const r=mn||$;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,o.mf)(t)?t.call(r.proxy):t}else 0}function G(e,t){return X(e,null,t)}const K={};function Y(e,t,n){return X(e,t,n)}function X(e,t,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=o.kT){const d=(0,r.nZ)()===(null===mn||void 0===mn?void 0:mn.scope)?mn:null;let f,h,p=!1,m=!1;if((0,r.dq)(e)?(f=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,a=!0):(0,o.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ee(e):(0,o.mf)(e)?i(e,d,2):void 0))):f=(0,o.mf)(e)?t?()=>i(e,d,2):()=>{if(!d||!d.isUnmounted)return h&&h(),s(e,d,3,[v])}:o.dG,t&&a){const e=f;f=()=>ee(e())}let g,v=e=>{h=E.onStop=()=>{i(e,d,4)}};if(En){if(v=o.dG,t?n&&s(t,d,3,[f(),m?[]:void 0,v]):f(),"sync"!==c)return o.dG;{const e=Ln();g=e.__watcherHandles||(e.__watcherHandles=[])}}let y=m?new Array(e.length).fill(K):K;const _=()=>{if(E.active)if(t){const e=E.run();(a||p||(m?e.some(((e,t)=>(0,o.aU)(e,y[t]))):(0,o.aU)(e,y)))&&(h&&h(),s(t,d,3,[e,y===K?void 0:m&&y[0]===K?[]:y,v]),y=e)}else E.run()};let w;_.allowRecurse=!!t,"sync"===c?w=_:"post"===c?w=()=>Ot(_,d&&d.suspense):(_.pre=!0,d&&(_.id=d.uid),w=()=>b(_));const E=new r.qq(f,w);t?n?_():y=E.run():"post"===c?Ot(E.run.bind(E),d&&d.suspense):E.run();const I=()=>{E.stop(),d&&d.scope&&(0,o.Od)(d.scope.effects,E)};return g&&g.push(I),I}function Z(e,t,n){const r=this.proxy,i=(0,o.HD)(e)?e.includes(".")?Q(r,e):()=>r[e]:e.bind(r,r);let s;(0,o.mf)(t)?s=t:(s=t.handler,n=t);const a=mn;vn(this);const c=X(i,s.bind(r),n);return a?vn(a):yn(),c}function Q(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ee(e,t){if(!(0,o.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ee(e.value,t);else if((0,o.kJ)(e))for(let n=0;n<e.length;n++)ee(e[n],t);else if((0,o.DM)(e)||(0,o._N)(e))e.forEach((e=>{ee(e,t)}));else if((0,o.PO)(e))for(const n in e)ee(e[n],t);return e}function te(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Se((()=>{e.isMounted=!0})),Ce((()=>{e.isUnmounting=!0})),e}const ne=[Function,Array],re={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ne,onEnter:ne,onAfterEnter:ne,onEnterCancelled:ne,onBeforeLeave:ne,onLeave:ne,onAfterLeave:ne,onLeaveCancelled:ne,onBeforeAppear:ne,onAppear:ne,onAfterAppear:ne,onAppearCancelled:ne},setup(e,{slots:t}){const n=gn(),o=te();let i;return()=>{const s=t.default&&ue(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Mt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:l}=c;if(o.isLeaving)return ae(a);const u=ce(a);if(!u)return ae(a);const d=se(u,c,o,n);le(u,d);const f=n.subTree,h=f&&ce(f);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(h&&h.type!==Mt&&(!Kt(u,h)||p)){const e=se(h,c,o,n);if(le(h,e),"out-in"===l)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,!1!==n.update.active&&n.update()},ae(a);"in-out"===l&&u.type!==Mt&&(e.delayLeave=(e,t,n)=>{const r=ie(o,h);r[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return a}}},oe=re;function ie(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function se(e,t,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:b}=t,w=String(e.key),E=ie(n,e),I=(e,t)=>{e&&s(e,r,9,t)},S=(e,t)=>{const n=t[1];I(e,t),(0,o.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},T={mode:a,persisted:c,beforeEnter(t){let r=l;if(!n.isMounted){if(!i)return;r=v||l}t._leaveCb&&t._leaveCb(!0);const o=E[w];o&&Kt(e,o)&&o.el._leaveCb&&o.el._leaveCb(),I(r,[t])},enter(e){let t=u,r=d,o=f;if(!n.isMounted){if(!i)return;t=y||u,r=_||d,o=b||f}let s=!1;const a=e._enterCb=t=>{s||(s=!0,I(t?o:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();I(h,[t]);let i=!1;const s=t._leaveCb=n=>{i||(i=!0,r(),I(n?g:m,[t]),t._leaveCb=void 0,E[o]===e&&delete E[o])};E[o]=e,p?S(p,[t,s]):s()},clone(e){return se(e,t,n,r)}};return T}function ae(e){if(he(e))return e=rn(e),e.children=null,e}function ce(e){return he(e)?e.children?e.children[0]:void 0:e}function le(e,t){6&e.shapeFlag&&e.component?le(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ue(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===Lt?(128&s.patchFlag&&o++,r=r.concat(ue(s.children,t,a))):(t||s.type!==Mt)&&r.push(null!=a?rn(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function de(e){return(0,o.mf)(e)?{setup:e,name:e.name}:e}const fe=e=>!!e.type.__asyncLoader;const he=e=>e.type.__isKeepAlive;RegExp,RegExp;function pe(e,t){return(0,o.kJ)(e)?e.some((e=>pe(e,t))):(0,o.HD)(e)?e.split(",").includes(t):!!(0,o.Kj)(e)&&e.test(t)}function me(e,t){ve(e,"a",t)}function ge(e,t){ve(e,"da",t)}function ve(e,t,n=mn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(we(t,r,n),n){let e=n.parent;while(e&&e.parent)he(e.parent.vnode)&&ye(r,t,n,e),e=e.parent}}function ye(e,t,n,r){const i=we(t,e,r,!0);Oe((()=>{(0,o.Od)(r[t],i)}),n)}function _e(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function be(e){return 128&e.shapeFlag?e.ssContent:e}function we(e,t,n=mn,o=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;(0,r.Jd)(),vn(n);const i=s(t,n,e,o);return yn(),(0,r.lk)(),i});return o?i.unshift(a):i.push(a),a}}const Ee=e=>(t,n=mn)=>(!En||"sp"===e)&&we(e,((...e)=>t(...e)),n),Ie=Ee("bm"),Se=Ee("m"),Te=Ee("bu"),ke=Ee("u"),Ce=Ee("bum"),Oe=Ee("um"),Ae=Ee("sp"),Re=Ee("rtg"),Pe=Ee("rtc");function $e(e,t=mn){we("ec",e,t)}function Ne(e,t){const n=$;if(null===n)return e;const r=An(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=o.kT]=t[s];e&&((0,o.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ee(n),i.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function xe(e,t,n,o){const i=e.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){const l=i[c];a&&(l.oldValue=a[c].value);let u=l.dir[o];u&&((0,r.Jd)(),s(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}const Le="components";function De(e,t){return Ue(Le,e,!0,t)||e}const Me=Symbol();function Ue(e,t,n=!0,r=!1){const i=$||mn;if(i){const n=i.type;if(e===Le){const e=Rn(n,!1);if(e&&(e===t||e===(0,o._A)(t)||e===(0,o.kC)((0,o._A)(t))))return n}const s=je(i[e]||n[e],t)||je(i.appContext[e],t);return!s&&r?n:s}}function je(e,t){return e&&(e[t]||e[(0,o._A)(t)]||e[(0,o.kC)((0,o._A)(t))])}function Fe(e,t,n,r){let i;const s=n&&n[r];if((0,o.kJ)(e)||(0,o.HD)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if((0,o.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}function Ve(e,t,n={},r,o){if($.isCE||$.parent&&fe($.parent)&&$.parent.isCE)return"default"!==t&&(n.name=t),en("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Vt();const s=i&&Be(i(n)),a=Jt(Lt,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&1===e._?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Be(e){return e.some((e=>!Gt(e)||e.type!==Mt&&!(e.type===Lt&&!Be(e.children))))?e:null}const He=e=>e?_n(e)?An(e)||e.proxy:He(e.parent):null,ze=(0,o.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>He(e.parent),$root:e=>He(e.root),$emit:e=>e.emit,$options:e=>Ze(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>Z.bind(e)}),qe=(e,t)=>e!==o.kT&&!e.__isScriptSetup&&(0,o.RI)(e,t),We={get({_:e},t){const{ctx:n,setupState:i,data:s,props:a,accessCache:c,type:l,appContext:u}=e;let d;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(qe(i,t))return c[t]=1,i[t];if(s!==o.kT&&(0,o.RI)(s,t))return c[t]=2,s[t];if((d=e.propsOptions[0])&&(0,o.RI)(d,t))return c[t]=3,a[t];if(n!==o.kT&&(0,o.RI)(n,t))return c[t]=4,n[t];Je&&(c[t]=0)}}const f=ze[t];let h,p;return f?("$attrs"===t&&(0,r.j)(e,"get",t),f(e)):(h=l.__cssModules)&&(h=h[t])?h:n!==o.kT&&(0,o.RI)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,o.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return qe(i,t)?(i[t]=n,!0):r!==o.kT&&(0,o.RI)(r,t)?(r[t]=n,!0):!(0,o.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let c;return!!n[a]||e!==o.kT&&(0,o.RI)(e,a)||qe(t,a)||(c=s[0])&&(0,o.RI)(c,a)||(0,o.RI)(r,a)||(0,o.RI)(ze,a)||(0,o.RI)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,o.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Je=!0;function Ge(e){const t=Ze(e),n=e.proxy,i=e.ctx;Je=!1,t.beforeCreate&&Ye(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:d,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:E,render:I,renderTracked:S,renderTriggered:T,errorCaptured:k,serverPrefetch:C,expose:O,inheritAttrs:A,components:R,directives:P,filters:$}=t,N=null;if(d&&Ke(d,i,N,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,o.mf)(e)&&(i[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,o.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Je=!0,a)for(const r in a){const e=a[r],t=(0,o.mf)(e)?e.bind(n,n):(0,o.mf)(e.get)?e.get.bind(n,n):o.dG;0;const s=!(0,o.mf)(e)&&(0,o.mf)(e.set)?e.set.bind(n):o.dG,c=$n({get:t,set:s});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)Xe(l[r],i,n,r);if(u){const e=(0,o.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{W(t,e[t])}))}function x(e,t){(0,o.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(f&&Ye(f,e,"c"),x(Ie,h),x(Se,p),x(Te,m),x(ke,g),x(me,v),x(ge,y),x($e,k),x(Pe,S),x(Re,T),x(Ce,b),x(Oe,E),x(Ae,C),(0,o.kJ)(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===o.dG&&(e.render=I),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),P&&(e.directives=P)}function Ke(e,t,n=o.dG,i=!1){(0,o.kJ)(e)&&(e=rt(e));for(const s in e){const n=e[s];let a;a=(0,o.Kn)(n)?"default"in n?J(n.from||s,n.default,!0):J(n.from||s):J(n),(0,r.dq)(a)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function Ye(e,t,n){s((0,o.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Xe(e,t,n,r){const i=r.includes(".")?Q(n,r):()=>n[r];if((0,o.HD)(e)){const n=t[e];(0,o.mf)(n)&&Y(i,n)}else if((0,o.mf)(e))Y(i,e.bind(n));else if((0,o.Kn)(e))if((0,o.kJ)(e))e.forEach((e=>Xe(e,t,n,r)));else{const r=(0,o.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,o.mf)(r)&&Y(i,r,e)}else 0}function Ze(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let l;return c?l=c:i.length||n||r?(l={},i.length&&i.forEach((e=>Qe(l,e,a,!0))),Qe(l,t,a)):l=t,(0,o.Kn)(t)&&s.set(t,l),l}function Qe(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Qe(e,i,n,!0),o&&o.forEach((t=>Qe(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=et[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const et={data:tt,props:it,emits:it,methods:it,computed:it,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:it,directives:it,watch:st,provide:tt,inject:nt};function tt(e,t){return t?e?function(){return(0,o.l7)((0,o.mf)(e)?e.call(this,this):e,(0,o.mf)(t)?t.call(this,this):t)}:t:e}function nt(e,t){return it(rt(e),rt(t))}function rt(e){if((0,o.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ot(e,t){return e?[...new Set([].concat(e,t))]:t}function it(e,t){return e?(0,o.l7)((0,o.l7)(Object.create(null),e),t):t}function st(e,t){if(!e)return t;if(!t)return e;const n=(0,o.l7)(Object.create(null),e);for(const r in t)n[r]=ot(e[r],t[r]);return n}function at(e,t,n,i=!1){const s={},a={};(0,o.Nj)(a,Yt,1),e.propsDefaults=Object.create(null),lt(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function ct(e,t,n,i){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(s),[u]=e.propsOptions;let d=!1;if(!(i||c>0)||16&c){let r;lt(e,t,s,a)&&(d=!0);for(const i in l)t&&((0,o.RI)(t,i)||(r=(0,o.rs)(i))!==i&&(0,o.RI)(t,r))||(u?!n||void 0===n[i]&&void 0===n[r]||(s[i]=ut(u,l,i,void 0,e,!0)):delete s[i]);if(a!==l)for(const e in a)t&&(0,o.RI)(t,e)||(delete a[e],d=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(P(e.emitsOptions,i))continue;const c=t[i];if(u)if((0,o.RI)(a,i))c!==a[i]&&(a[i]=c,d=!0);else{const t=(0,o._A)(i);s[t]=ut(u,l,t,c,e,!1)}else c!==a[i]&&(a[i]=c,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function lt(e,t,n,i){const[s,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,o.Gg)(r))continue;const u=t[r];let d;s&&(0,o.RI)(s,d=(0,o._A)(r))?a&&a.includes(d)?(c||(c={}))[d]=u:n[d]=u:P(e.emitsOptions,r)||r in i&&u===i[r]||(i[r]=u,l=!0)}if(a){const t=(0,r.IU)(n),i=c||o.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ut(s,t,c,i[c],e,!(0,o.RI)(i,c))}}return l}function ut(e,t,n,r,i,s){const a=e[n];if(null!=a){const e=(0,o.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,o.mf)(e)){const{propsDefaults:o}=i;n in o?r=o[n]:(vn(i),r=o[n]=e.call(null,t),yn())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,o.rs)(n)||(r=!0))}return r}function dt(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},c=[];let l=!1;if(!(0,o.mf)(e)){const r=e=>{l=!0;const[n,r]=dt(e,t,!0);(0,o.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return(0,o.Kn)(e)&&r.set(e,o.Z6),o.Z6;if((0,o.kJ)(s))for(let d=0;d<s.length;d++){0;const e=(0,o._A)(s[d]);ft(e)&&(a[e]=o.kT)}else if(s){0;for(const e in s){const t=(0,o._A)(e);if(ft(t)){const n=s[e],r=a[t]=(0,o.kJ)(n)||(0,o.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=mt(Boolean,r.type),n=mt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,o.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return(0,o.Kn)(e)&&r.set(e,u),u}function ft(e){return"$"!==e[0]}function ht(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function pt(e,t){return ht(e)===ht(t)}function mt(e,t){return(0,o.kJ)(t)?t.findIndex((t=>pt(t,e))):(0,o.mf)(t)&&pt(t,e)?0:-1}const gt=e=>"_"===e[0]||"$stable"===e,vt=e=>(0,o.kJ)(e)?e.map(an):[an(e)],yt=(e,t,n)=>{if(t._n)return t;const r=M(((...e)=>vt(t(...e))),n);return r._c=!1,r},_t=(e,t,n)=>{const r=e._ctx;for(const i in e){if(gt(i))continue;const n=e[i];if((0,o.mf)(n))t[i]=yt(i,n,r);else if(null!=n){0;const e=vt(n);t[i]=()=>e}}},bt=(e,t)=>{const n=vt(t);e.slots.default=()=>n},wt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,o.Nj)(t,"_",n)):_t(t,e.slots={})}else e.slots={},t&&bt(e,t);(0,o.Nj)(e.slots,Yt,1)},Et=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=o.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,o.l7)(i,t),n||1!==e||delete i._):(s=!t.$stable,_t(t,i)),a=t}else t&&(bt(e,t),a={default:1});if(s)for(const o in i)gt(o)||o in a||delete i[o]};function It(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let St=0;function Tt(e,t){return function(n,r=null){(0,o.mf)(n)||(n=Object.assign({},n)),null==r||(0,o.Kn)(r)||(r=null);const i=It(),s=new Set;let a=!1;const c=i.app={_uid:St++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Dn,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,o.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,o.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(o,s,l){if(!a){0;const u=en(n,r);return u.appContext=i,s&&t?t(u,o):e(u,o,l),a=!0,c._container=o,o.__vue_app__=c,An(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}function kt(e,t,n,s,a=!1){if((0,o.kJ)(e))return void e.forEach(((e,r)=>kt(e,t&&((0,o.kJ)(t)?t[r]:t),n,s,a)));if(fe(s)&&!a)return;const c=4&s.shapeFlag?An(s.component)||s.component.proxy:s.el,l=a?null:c,{i:u,r:d}=e;const f=t&&t.r,h=u.refs===o.kT?u.refs={}:u.refs,p=u.setupState;if(null!=f&&f!==d&&((0,o.HD)(f)?(h[f]=null,(0,o.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,o.mf)(d))i(d,u,12,[l,h]);else{const t=(0,o.HD)(d),i=(0,r.dq)(d);if(t||i){const r=()=>{if(e.f){const n=t?(0,o.RI)(p,d)?p[d]:h[d]:d.value;a?(0,o.kJ)(n)&&(0,o.Od)(n,c):(0,o.kJ)(n)?n.includes(c)||n.push(c):t?(h[d]=[c],(0,o.RI)(p,d)&&(p[d]=h[d])):(d.value=[c],e.k&&(h[e.k]=d.value))}else t?(h[d]=l,(0,o.RI)(p,d)&&(p[d]=l)):i&&(d.value=l,e.k&&(h[e.k]=l))};l?(r.id=-1,Ot(r,n)):r()}else 0}}function Ct(){}const Ot=q;function At(e){return Rt(e)}function Rt(e,t){Ct();const n=(0,o.E9)();n.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:d,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=o.dG,insertStaticContent:g}=e,v=(e,t,n,r=null,o=null,i=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kt(e,t)&&(r=Z(e),J(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=t;switch(l){case Dt:y(e,t,n,r);break;case Mt:_(e,t,n,r);break;case Ut:null==e&&w(t,n,r,s);break;case Lt:x(e,t,n,r,o,i,s,a,c);break;default:1&d?C(e,t,n,r,o,i,s,a,c):6&d?L(e,t,n,r,o,i,s,a,c):(64&d||128&d)&&l.process(e,t,n,r,o,i,s,a,c,ee)}null!=u&&o&&kt(u,e&&e.ref,i,t||e,!t)},y=(e,t,n,r)=>{if(null==e)i(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},_=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=p(e),i(e,n,r),e=o;i(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},C=(e,t,n,r,o,i,s,a,c)=>{s=s||"svg"===t.type,null==e?O(t,n,r,o,i,s,a,c):P(e,t,o,i,s,a,c)},O=(e,t,n,r,s,l,u,d)=>{let h,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:_}=e;if(h=e.el=c(e.type,l,g&&g.is,g),8&v?f(h,e.children):16&v&&R(e.children,h,null,r,s,l&&"foreignObject"!==m,u,d),_&&xe(e,null,r,"created"),A(h,e,e.scopeId,u,r),g){for(const t in g)"value"===t||(0,o.Gg)(t)||a(h,t,null,g[t],l,e.children,r,s,X);"value"in g&&a(h,"value",null,g.value),(p=g.onVnodeBeforeMount)&&dn(p,r,e)}_&&xe(e,null,r,"beforeMount");const b=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(h),i(h,t,n),((p=g&&g.onVnodeMounted)||b||_)&&Ot((()=>{p&&dn(p,r,e),b&&y.enter(h),_&&xe(e,null,r,"mounted")}),s)},A=(e,t,n,r,o)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;A(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},R=(e,t,n,r,o,i,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?cn(e[l]):an(e[l]);v(null,c,t,n,r,o,i,s,a)}},P=(e,t,n,r,i,s,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:h}=t;u|=16&e.patchFlag;const p=e.props||o.kT,m=t.props||o.kT;let g;n&&Pt(n,!1),(g=m.onVnodeBeforeUpdate)&&dn(g,n,t,e),h&&xe(t,e,n,"beforeUpdate"),n&&Pt(n,!0);const v=i&&"foreignObject"!==t.type;if(d?$(e.dynamicChildren,d,l,n,r,v,s):c||B(e,t,l,null,n,r,v,s,!1),u>0){if(16&u)N(l,t,p,m,n,r,i);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,i),4&u&&a(l,"style",p.style,m.style,i),8&u){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const s=o[t],c=p[s],u=m[s];u===c&&"value"!==s||a(l,s,c,u,i,e.children,n,r,X)}}1&u&&e.children!==t.children&&f(l,t.children)}else c||null!=d||N(l,t,p,m,n,r,i);((g=m.onVnodeUpdated)||h)&&Ot((()=>{g&&dn(g,n,t,e),h&&xe(t,e,n,"updated")}),r)},$=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Lt||!Kt(c,l)||70&c.shapeFlag)?h(c.el):n;v(c,l,u,null,r,o,i,s,!0)}},N=(e,t,n,r,i,s,c)=>{if(n!==r){if(n!==o.kT)for(const l in n)(0,o.Gg)(l)||l in r||a(e,l,n[l],null,c,t.children,i,s,X);for(const l in r){if((0,o.Gg)(l))continue;const u=r[l],d=n[l];u!==d&&"value"!==l&&a(e,l,d,u,c,t.children,i,s,X)}"value"in r&&a(e,"value",n.value,r.value)}},x=(e,t,n,r,o,s,a,c,u)=>{const d=t.el=e?e.el:l(""),f=t.anchor=e?e.anchor:l("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(i(d,n,r),i(f,n,r),R(t.children,n,f,o,s,a,c,u)):h>0&&64&h&&p&&e.dynamicChildren?($(e.dynamicChildren,p,n,o,s,a,c),(null!=t.key||o&&t===o.subTree)&&$t(e,t,!0)):B(e,t,n,f,o,s,a,c,u)},L=(e,t,n,r,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,c):D(t,n,r,o,i,s,c):M(e,t,c)},D=(e,t,n,r,o,i,s)=>{const a=e.component=pn(e,r,o);if(he(e)&&(a.ctx.renderer=ee),In(a),a.asyncDep){if(o&&o.registerDep(a,j),!e.el){const e=a.subTree=en(Mt);_(null,e,t,n)}}else j(a,e,t,n,o,i,s)},M=(e,t,n)=>{const r=t.component=e.component;if(V(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},j=(e,t,n,i,s,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:i,parent:l,vnode:u}=e,d=n;0,Pt(e,!1),n?(n.el=u.el,F(e,n,c)):n=u,r&&(0,o.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&dn(t,l,n,u),Pt(e,!0);const f=U(e);0;const p=e.subTree;e.subTree=f,v(p,f,h(p.el),Z(p),e,s,a),n.el=f.el,null===d&&H(e,f.el),i&&Ot(i,s),(t=n.props&&n.props.onVnodeUpdated)&&Ot((()=>dn(t,l,n,u)),s)}else{let r;const{el:c,props:l}=t,{bm:u,m:d,parent:f}=e,h=fe(t);if(Pt(e,!1),u&&(0,o.ir)(u),!h&&(r=l&&l.onVnodeBeforeMount)&&dn(r,f,t),Pt(e,!0),c&&ne){const n=()=>{e.subTree=U(e),ne(c,e.subTree,e,s,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,v(null,r,n,i,e,s,a),t.el=r.el}if(d&&Ot(d,s),!h&&(r=l&&l.onVnodeMounted)){const e=t;Ot((()=>dn(r,f,e)),s)}(256&t.shapeFlag||f&&fe(f.vnode)&&256&f.vnode.shapeFlag)&&e.a&&Ot(e.a,s),e.isMounted=!0,t=n=i=null}},u=e.effect=new r.qq(l,(()=>b(d)),e.scope),d=e.update=()=>u.run();d.id=e.uid,Pt(e,!0),d()},F=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,ct(e,t.props,o,n),Et(e,t.children,n),(0,r.Jd)(),S(),(0,r.lk)()},B=(e,t,n,r,o,i,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void q(l,d,n,r,o,i,s,a,c);if(256&h)return void z(l,d,n,r,o,i,s,a,c)}8&p?(16&u&&X(l,o,i),d!==l&&f(n,d)):16&u?16&p?q(l,d,n,r,o,i,s,a,c):X(l,o,i,!0):(8&u&&f(n,""),16&p&&R(d,n,r,o,i,s,a,c))},z=(e,t,n,r,i,s,a,c,l)=>{e=e||o.Z6,t=t||o.Z6;const u=e.length,d=t.length,f=Math.min(u,d);let h;for(h=0;h<f;h++){const r=t[h]=l?cn(t[h]):an(t[h]);v(e[h],r,n,null,i,s,a,c,l)}u>d?X(e,i,s,!0,!1,f):R(t,n,r,i,s,a,c,l,f)},q=(e,t,n,r,i,s,a,c,l)=>{let u=0;const d=t.length;let f=e.length-1,h=d-1;while(u<=f&&u<=h){const r=e[u],o=t[u]=l?cn(t[u]):an(t[u]);if(!Kt(r,o))break;v(r,o,n,null,i,s,a,c,l),u++}while(u<=f&&u<=h){const r=e[f],o=t[h]=l?cn(t[h]):an(t[h]);if(!Kt(r,o))break;v(r,o,n,null,i,s,a,c,l),f--,h--}if(u>f){if(u<=h){const e=h+1,o=e<d?t[e].el:r;while(u<=h)v(null,t[u]=l?cn(t[u]):an(t[u]),n,o,i,s,a,c,l),u++}}else if(u>h)while(u<=f)J(e[u],i,s,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=h;u++){const e=t[u]=l?cn(t[u]):an(t[u]);null!=e.key&&g.set(e.key,u)}let y,_=0;const b=h-m+1;let w=!1,E=0;const I=new Array(b);for(u=0;u<b;u++)I[u]=0;for(u=p;u<=f;u++){const r=e[u];if(_>=b){J(r,i,s,!0);continue}let o;if(null!=r.key)o=g.get(r.key);else for(y=m;y<=h;y++)if(0===I[y-m]&&Kt(r,t[y])){o=y;break}void 0===o?J(r,i,s,!0):(I[o-m]=u+1,o>=E?E=o:w=!0,v(r,t[o],n,null,i,s,a,c,l),_++)}const S=w?Nt(I):o.Z6;for(y=S.length-1,u=b-1;u>=0;u--){const e=m+u,o=t[e],f=e+1<d?t[e+1].el:r;0===I[u]?v(null,o,n,f,i,s,a,c,l):w&&(y<0||u!==S[y]?W(o,n,f,2):y--)}}},W=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ee);if(a===Lt){i(s,t,n);for(let e=0;e<l.length;e++)W(l[e],t,n,r);return void i(e.anchor,t,n)}if(a===Ut)return void I(e,t,n);const d=2!==r&&1&u&&c;if(d)if(0===r)c.beforeEnter(s),i(s,t,n),Ot((()=>c.enter(s)),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),l=()=>{e(s,(()=>{a(),o&&o()}))};r?r(s,a,l):l()}else i(s,t,n)},J=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f}=e;if(null!=a&&kt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const h=1&u&&f,p=!fe(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&dn(m,t,e),6&u)Y(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);h&&xe(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,o,ee,r):l&&(i!==Lt||d>0&&64&d)?X(l,t,n,!1,!0):(i===Lt&&384&d||!o&&16&u)&&X(c,t,n),r&&G(e)}(p&&(m=s&&s.onVnodeUnmounted)||h)&&Ot((()=>{m&&dn(m,t,e),h&&xe(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===Lt)return void K(n,r);if(t===Ut)return void k(e);const i=()=>{s(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,s=()=>t(n,i);r?r(e.el,i,s):s()}else i()},K=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},Y=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:a,um:c}=e;r&&(0,o.ir)(r),i.stop(),s&&(s.active=!1,J(a,e,t,n)),c&&Ot(c,t),Ot((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)J(e[s],t,n,r,o)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&J(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),S(),T(),t._vnode=e},ee={p:v,um:J,m:W,r:G,mt:D,mc:R,pc:B,pbc:$,n:Z,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Q,hydrate:te,createApp:Tt(Q,te)}}function Pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function $t(e,t,n=!1){const r=e.children,i=t.children;if((0,o.kJ)(r)&&(0,o.kJ)(i))for(let o=0;o<r.length;o++){const e=r[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=cn(i[o]),t.el=e.el),n||$t(e,t)),t.type===Dt&&(t.el=e.el)}}function Nt(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}const xt=e=>e.__isTeleport;const Lt=Symbol(void 0),Dt=Symbol(void 0),Mt=Symbol(void 0),Ut=Symbol(void 0),jt=[];let Ft=null;function Vt(e=!1){jt.push(Ft=e?null:[])}function Bt(){jt.pop(),Ft=jt[jt.length-1]||null}let Ht=1;function zt(e){Ht+=e}function qt(e){return e.dynamicChildren=Ht>0?Ft||o.Z6:null,Bt(),Ht>0&&Ft&&Ft.push(e),e}function Wt(e,t,n,r,o,i){return qt(Qt(e,t,n,r,o,i,!0))}function Jt(e,t,n,r,o){return qt(en(e,t,n,r,o,!0))}function Gt(e){return!!e&&!0===e.__v_isVNode}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Yt="__vInternal",Xt=({key:e})=>null!=e?e:null,Zt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,o.HD)(e)||(0,r.dq)(e)||(0,o.mf)(e)?{i:$,r:e,k:t,f:!!n}:e:null;function Qt(e,t=null,n=null,r=0,i=null,s=(e===Lt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xt(t),ref:t&&Zt(t),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$};return c?(ln(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=(0,o.HD)(n)?8:16),Ht>0&&!a&&Ft&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Ft.push(l),l}const en=tn;function tn(e,t=null,n=null,i=0,s=null,a=!1){if(e&&e!==Me||(e=Mt),Gt(e)){const r=rn(e,t,!0);return n&&ln(r,n),Ht>0&&!a&&Ft&&(6&r.shapeFlag?Ft[Ft.indexOf(e)]=r:Ft.push(r)),r.patchFlag|=-2,r}if(Pn(e)&&(e=e.__vccOpts),t){t=nn(t);let{class:e,style:n}=t;e&&!(0,o.HD)(e)&&(t.class=(0,o.C_)(e)),(0,o.Kn)(n)&&((0,r.X3)(n)&&!(0,o.kJ)(n)&&(n=(0,o.l7)({},n)),t.style=(0,o.j5)(n))}const c=(0,o.HD)(e)?1:z(e)?128:xt(e)?64:(0,o.Kn)(e)?4:(0,o.mf)(e)?2:0;return Qt(e,t,n,i,s,c,a,!0)}function nn(e){return e?(0,r.X3)(e)||Yt in e?(0,o.l7)({},e):e:null}function rn(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,c=t?un(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Xt(c),ref:t&&t.ref?n&&i?(0,o.kJ)(i)?i.concat(Zt(t)):[i,Zt(t)]:Zt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function on(e=" ",t=0){return en(Dt,null,e,t)}function sn(e="",t=!1){return t?(Vt(),Jt(Mt,null,e)):en(Mt,null,e)}function an(e){return null==e||"boolean"===typeof e?en(Mt):(0,o.kJ)(e)?en(Lt,null,e.slice()):"object"===typeof e?cn(e):en(Dt,null,String(e))}function cn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:rn(e)}function ln(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,o.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),ln(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Yt in t?3===r&&$&&(1===$.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=$}}else(0,o.mf)(t)?(t={default:t,_ctx:$},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function un(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,o.C_)([t.class,r.class]));else if("style"===e)t.style=(0,o.j5)([t.style,r.style]);else if((0,o.F7)(e)){const n=t[e],i=r[e];!i||n===i||(0,o.kJ)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function dn(e,t,n,r=null){s(e,t,7,[n,r])}const fn=It();let hn=0;function pn(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||fn,a={uid:hn++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dt(i,s),emitsOptions:R(i,s),emit:null,emitted:null,propsDefaults:o.kT,inheritAttrs:i.inheritAttrs,ctx:o.kT,data:o.kT,props:o.kT,attrs:o.kT,slots:o.kT,refs:o.kT,setupState:o.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let mn=null;const gn=()=>mn||$,vn=e=>{mn=e,e.scope.on()},yn=()=>{mn&&mn.scope.off(),mn=null};function _n(e){return 4&e.vnode.shapeFlag}let bn,wn,En=!1;function In(e,t=!1){En=t;const{props:n,children:r}=e.vnode,o=_n(e);at(e,n,o,t),wt(e,r);const i=o?Sn(e,t):void 0;return En=!1,i}function Sn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,We));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?On(e):null;vn(e),(0,r.Jd)();const c=i(s,e,0,[e.props,n]);if((0,r.lk)(),yn(),(0,o.tI)(c)){if(c.then(yn,yn),t)return c.then((n=>{Tn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Tn(e,c,t)}else kn(e,t)}function Tn(e,t,n){(0,o.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,o.Kn)(t)&&(e.setupState=(0,r.WL)(t)),kn(e,n)}function kn(e,t,n){const i=e.type;if(!e.render){if(!t&&bn&&!i.render){const t=i.template||Ze(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=(0,o.l7)((0,o.l7)({isCustomElement:n,delimiters:s},r),a);i.render=bn(t,c)}}e.render=i.render||o.dG,wn&&wn(e)}vn(e),(0,r.Jd)(),Ge(e),(0,r.lk)(),yn()}function Cn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function On(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Cn(e))},slots:e.slots,emit:e.emit,expose:t}}function An(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in ze?ze[n](e):void 0},has(e,t){return t in e||t in ze}}))}function Rn(e,t=!0){return(0,o.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Pn(e){return(0,o.mf)(e)&&"__vccOpts"in e}const $n=(e,t)=>(0,r.Fl)(e,t,En);function Nn(e,t,n){const r=arguments.length;return 2===r?(0,o.Kn)(t)&&!(0,o.kJ)(t)?Gt(t)?en(e,null,[t]):en(e,t):en(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Gt(n)&&(n=[n]),en(e,t,n))}const xn=Symbol(""),Ln=()=>{{const e=J(xn);return e}};const Dn="3.2.47"},9242:function(e,t,n){"use strict";n.d(t,{W3:function(){return te},YZ:function(){return ve},iM:function(){return Ee},nr:function(){return le},ri:function(){return ke}});n(7658);var r=n(7139),o=n(3396),i=n(4870);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?a.createElementNS(s,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const o=c.content;if(r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d(e,t,n){const o=e.style,i=(0,r.HD)(n);if(n&&!i){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&h(o,e,"");for(const e in n)h(o,e,n[e])}else{const r=o.display;i?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const f=/\s*!important$/;function h(e,t,n){if((0,r.kJ)(n))n.forEach((n=>h(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=g(e,t);f.test(n)?e.setProperty((0,r.rs)(o),n.replace(f,""),"important"):e[o]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let o=(0,r._A)(t);if("filter"!==o&&o in e)return m[t]=o;o=(0,r.kC)(o);for(let r=0;r<p.length;r++){const n=p[r]+o;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,o,i){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const o=(0,r.Pq)(t);null==n||o&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function _(e,t,n,o,i,s,a){if("innerHTML"===t||"textContent"===t)return o&&a(o,i,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const o=typeof e[t];"boolean"===o?n=(0,r.yA)(n):null==n&&"string"===o?(n="",c=!0):"number"===o&&(n=0,c=!0)}try{e[t]=n}catch(l){0}c&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function w(e,t,n,r){e.removeEventListener(t,n,r)}function E(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=S(t);if(r){const s=i[t]=O(r,o);b(e,n,s,a)}else s&&(w(e,n,s,a),i[t]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function S(e){let t;if(I.test(e)){let n;t={};while(n=e.match(I))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let T=0;const k=Promise.resolve(),C=()=>T||(k.then((()=>T=0)),T=Date.now());function O(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,o.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=C(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,P=(e,t,n,o,i=!1,s,a,c,l)=>{"class"===t?u(e,o,i):"style"===t?d(e,n,o):(0,r.F7)(t)?(0,r.tR)(t)||E(e,t,n,o,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):$(e,t,o,i))?_(e,t,o,s,a,c,l):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),y(e,t,o,i))};function $(e,t,n,o){return o?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",x="animation",L=(e,{slots:t})=>(0,o.h)(o.P$,F(e),t);L.displayName="Transition";const D={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=L.props=(0,r.l7)({},o.P$.props,D),U=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},j=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function F(e){const t={};for(const r in e)r in D||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:o,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=V(i),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:E,onBeforeAppear:I=y,onAppear:S=_,onAppearCancelled:T=b}=t,k=(e,t,n)=>{z(e,t?d:c),z(e,t?u:a),n&&n()},C=(e,t)=>{e._isLeaving=!1,z(e,f),z(e,p),z(e,h),t&&t()},O=e=>(t,n)=>{const r=e?S:_,i=()=>k(t,e,n);U(r,[t,i]),q((()=>{z(t,e?l:s),H(t,e?d:c),j(r)||J(t,o,g,i)}))};return(0,r.l7)(t,{onBeforeEnter(e){U(y,[e]),H(e,s),H(e,a)},onBeforeAppear(e){U(I,[e]),H(e,l),H(e,u)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);H(e,f),X(),H(e,h),q((()=>{e._isLeaving&&(z(e,f),H(e,p),j(w)||J(e,o,v,n))})),U(w,[e,n])},onEnterCancelled(e){k(e,!1),U(b,[e])},onAppearCancelled(e){k(e,!0),U(T,[e])},onLeaveCancelled(e){C(e),U(E,[e])}})}function V(e){if(null==e)return null;if((0,r.Kn)(e))return[B(e.enter),B(e.leave)];{const t=B(e);return[t,t]}}function B(e){const t=(0,r.He)(e);return t}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function q(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let W=0;function J(e,t,n,r){const o=e._endId=++W,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=G(e,t);if(!s)return r();const l=s+"end";let u=0;const d=()=>{e.removeEventListener(l,f),i()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout((()=>{u<c&&d()}),a+1),e.addEventListener(l,f)}function G(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(`${N}Delay`),i=r(`${N}Duration`),s=K(o,i),a=r(`${x}Delay`),c=r(`${x}Duration`),l=K(a,c);let u=null,d=0,f=0;t===N?s>0&&(u=N,d=s,f=i.length):t===x?l>0&&(u=x,d=l,f=c.length):(d=Math.max(s,l),u=d>0?s>l?N:x:null,f=u?u===N?i.length:c.length:0);const h=u===N&&/\b(transform|all)(,|$)/.test(r(`${N}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function K(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}const Z=new WeakMap,Q=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},M,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,o.FN)(),r=(0,o.Y8)();let s,a;return(0,o.ic)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(s[0].el,n.vnode.el,t))return;s.forEach(ne),s.forEach(re);const r=s.filter(oe);X(),r.forEach((e=>{const n=e.el,r=n.style;H(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const o=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",o),n._moveCb=null,z(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const c=(0,i.IU)(e),l=F(c);let u=c.tag||o.HY;s=a,a=t.default?(0,o.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,o.nK)(t,(0,o.U2)(t,l,r,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];(0,o.nK)(t,(0,o.U2)(t,l,r,n)),Z.set(t,t.el.getBoundingClientRect())}return(0,o.Wm)(u,null,a)}}};ee.props;const te=ee;function ne(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function re(e){Q.set(e,e.el.getBoundingClientRect())}function oe(e){const t=Z.get(e),n=Q.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${o}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const o=1===t.nodeType?t:t.parentNode;o.appendChild(r);const{hasTransform:i}=G(r);return o.removeChild(r),i}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ae(e){e.target.composing=!0}function ce(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const le={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e._assign=se(i);const s=o||i.props&&"number"===i.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=(0,r.h5)(o)),e._assign(o)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",ae),b(e,"compositionend",ce),b(e,"change",ce))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:i}},s){if(e._assign=se(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(o&&e.value.trim()===t)return;if((i||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ue={deep:!0,created(e,t,n){e._assign=se(n),b(e,"change",(()=>{const t=e._modelValue,n=me(e),o=e.checked,i=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),s=-1!==e;if(o&&!s)i(t.concat(n));else if(!o&&s){const n=[...t];n.splice(e,1),i(n)}}else if((0,r.DM)(t)){const e=new Set(t);o?e.add(n):e.delete(n),i(e)}else i(ge(e,o))}))},mounted:de,beforeUpdate(e,t,n){e._assign=se(n),de(e,t,n)}};function de(e,{value:t,oldValue:n},o){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,o.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=(0,r.WV)(t,ge(e,!0)))}const fe={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=se(n),b(e,"change",(()=>{e._assign(me(e))}))},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=se(o),t!==n&&(e.checked=(0,r.WV)(t,o.props.value))}},he={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const i=(0,r.DM)(t);b(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.h5)(me(e)):me(e)));e._assign(e.multiple?i?new Set(t):t:t[0])})),e._assign=se(o)},mounted(e,{value:t}){pe(e,t)},beforeUpdate(e,t,n){e._assign=se(n)},updated(e,{value:t}){pe(e,t)}};function pe(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let o=0,i=e.options.length;o<i;o++){const i=e.options[o],s=me(i);if(n)(0,r.kJ)(t)?i.selected=(0,r.hq)(t,s)>-1:i.selected=t.has(s);else if((0,r.WV)(me(i),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function me(e){return"_value"in e?e._value:e.value}function ge(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ve={created(e,t,n){_e(e,t,n,null,"created")},mounted(e,t,n){_e(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){_e(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){_e(e,t,n,r,"updated")}};function ye(e,t){switch(e){case"SELECT":return he;case"TEXTAREA":return le;default:switch(t){case"checkbox":return ue;case"radio":return fe;default:return le}}}function _e(e,t,n,r,o){const i=ye(e.tagName,n.props&&n.props.type),s=i[o];s&&s(e,t,n,r)}const be=["ctrl","shift","alt","meta"],we={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>be.some((n=>e[`${n}Key`]&&!t.includes(n)))},Ee=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=we[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Ie=(0,r.l7)({patchProp:P},l);let Se;function Te(){return Se||(Se=(0,o.Us)(Ie))}const ke=(...e)=>{const t=Te().createApp(...e);const{mount:n}=t;return t.mount=e=>{const o=Ce(e);if(!o)return;const i=t._component;(0,r.mf)(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function Ce(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return d},DM:function(){return N},E9:function(){return se},F7:function(){return T},Gg:function(){return W},HD:function(){return M},He:function(){return oe},Kj:function(){return L},Kn:function(){return j},NO:function(){return I},Nj:function(){return ne},Od:function(){return O},PO:function(){return z},Pq:function(){return h},RI:function(){return R},S0:function(){return q},W7:function(){return H},WV:function(){return g},Z6:function(){return w},_A:function(){return K},_N:function(){return $},aU:function(){return ee},dG:function(){return E},e1:function(){return i},fY:function(){return r},h5:function(){return re},hR:function(){return Q},hq:function(){return v},ir:function(){return te},j5:function(){return s},kC:function(){return Z},kJ:function(){return P},kT:function(){return b},l7:function(){return C},mf:function(){return D},rs:function(){return X},tI:function(){return F},tR:function(){return k},yA:function(){return p},yk:function(){return U},zw:function(){return y}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(o);function s(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=M(r)?u(r):s(r);if(o)for(const e in o)t[e]=o[e]}return t}return M(e)||j(e)?e:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,l=/\/\*.*?\*\//gs;function u(e){const t={};return e.replace(l,"").split(a).forEach((e=>{if(e){const n=e.split(c);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function d(e){let t="";if(M(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(j(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const f="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",h=r(f);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=x(e),r=x(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=U(e),r=U(t),n||r)return e===t;if(n=P(e),r=P(t),n||r)return!(!n||!r)&&m(e,t);if(n=j(e),r=j(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>g(e,t)))}const y=e=>M(e)?e:null==e?"":P(e)||j(e)&&(e.toString===V||!D(e.toString))?JSON.stringify(e,_,2):String(e),_=(e,t)=>t&&t.__v_isRef?_(e,t.value):$(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:N(t)?{[`Set(${t.size})`]:[...t.values()]}:!j(t)||P(t)||z(t)?t:String(t),b={},w=[],E=()=>{},I=()=>!1,S=/^on[^a-z]/,T=e=>S.test(e),k=e=>e.startsWith("onUpdate:"),C=Object.assign,O=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,R=(e,t)=>A.call(e,t),P=Array.isArray,$=e=>"[object Map]"===B(e),N=e=>"[object Set]"===B(e),x=e=>"[object Date]"===B(e),L=e=>"[object RegExp]"===B(e),D=e=>"function"===typeof e,M=e=>"string"===typeof e,U=e=>"symbol"===typeof e,j=e=>null!==e&&"object"===typeof e,F=e=>j(e)&&D(e.then)&&D(e.catch),V=Object.prototype.toString,B=e=>V.call(e),H=e=>B(e).slice(8,-1),z=e=>"[object Object]"===B(e),q=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},G=/-(\w)/g,K=J((e=>e.replace(G,((e,t)=>t?t.toUpperCase():"")))),Y=/\B([A-Z])/g,X=J((e=>e.replace(Y,"-$1").toLowerCase())),Z=J((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=J((e=>e?`on${Z(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t},oe=e=>{const t=M(e)?Number(e):NaN;return isNaN(t)?e:t};let ie;const se=()=>ie||(ie="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},3053:function(e,t,n){"use strict";n.d(t,{Xw:function(){return x}});n(7658);var r=n(4870),o=n(3396);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((n,o)=>(t.includes(o)||(n[o]=(0,r.SU)(e[o])),n)),{})}function s(e){return"function"===typeof e}function a(e){return(0,r.PG)(e)||(0,r.$y)(e)}function c(e,t,n){let r=e;const o=t.split(".");for(let i=0;i<o.length;i++){if(!r[o[i]])return n;r=r[o[i]]}return r}function l(e,t,n){return(0,o.Fl)((()=>e.some((e=>c(t,e,{[n]:!1})[n]))))}function u(e,t,n){return(0,o.Fl)((()=>e.reduce(((e,r)=>{const o=c(t,r,{[n]:!1})[n]||[];return e.concat(o)}),[])))}function d(e,t,n,o){return e.call(o,(0,r.SU)(t),(0,r.SU)(n),o)}function f(e){return void 0!==e.$valid?!e.$valid:!e}function h(e,t,n,i,s,a,c){let{$lazy:l,$rewardEarly:u}=s,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],p=arguments.length>8?arguments[8]:void 0,m=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const v=(0,r.iH)(!!i.value),y=(0,r.iH)(0);n.value=!1;const _=(0,o.YP)([t,i].concat(h,g),(()=>{if(l&&!i.value||u&&!m.value&&!n.value)return;let r;try{r=d(e,t,p,c)}catch(o){r=Promise.reject(o)}y.value++,n.value=!!y.value,v.value=!1,Promise.resolve(r).then((e=>{y.value--,n.value=!!y.value,a.value=e,v.value=f(e)})).catch((e=>{y.value--,n.value=!!y.value,a.value=e,v.value=!0}))}),{immediate:!0,deep:"object"===typeof t});return{$invalid:v,$unwatch:_}}function p(e,t,n,r,i,s,a,c){let{$lazy:l,$rewardEarly:u}=r;const h=()=>({}),p=(0,o.Fl)((()=>{if(l&&!n.value||u&&!c.value)return!1;let r=!0;try{const n=d(e,t,a,s);i.value=n,r=f(n)}catch(o){i.value=o}return r}));return{$unwatch:h,$invalid:p}}function m(e,t,n,a,c,l,u,d,f,m,g){const v=(0,r.iH)(!1),y=e.$params||{},_=(0,r.iH)(null);let b,w;e.$async?({$invalid:b,$unwatch:w}=h(e.$validator,t,v,n,a,_,c,e.$watchTargets,f,m,g)):({$invalid:b,$unwatch:w}=p(e.$validator,t,n,a,_,c,f,m));const E=e.$message,I=s(E)?(0,o.Fl)((()=>E(i({$pending:v,$invalid:b,$params:i(y),$model:t,$response:_,$validator:l,$propertyPath:d,$property:u})))):E||"";return{$message:I,$params:y,$pending:v,$invalid:b,$response:_,$unwatch:w}}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,r.SU)(e),n=Object.keys(t),o={},i={},a={};let c=null;return n.forEach((e=>{const n=t[e];switch(!0){case s(n.$validator):o[e]=n;break;case s(n):o[e]={$validator:n};break;case"$validationGroups"===e:c=n;break;case e.startsWith("$"):a[e]=n;break;default:i[e]=n}})),{rules:o,nestedValidators:i,config:a,validationGroups:c}}function v(){}const y="__root";function _(e,t,n){if(n)return t?t(e()):e();try{var r=Promise.resolve(e());return t?r.then(t):r}catch(o){return Promise.reject(o)}}function b(e,t){return _(e,v,t)}function w(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function E(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(r){return Promise.reject(r)}}}function I(e,t,n,i,s,a,c,l,u){const d=Object.keys(e),f=i.get(s,e),h=(0,r.iH)(!1),p=(0,r.iH)(!1),g=(0,r.iH)(0);if(f){if(!f.$partial)return f;f.$unwatch(),h.value=f.$dirty.value}const v={$dirty:h,$path:s,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return d.length?(d.forEach((r=>{v[r]=m(e[r],t,v.$dirty,a,c,r,n,s,u,p,g)})),v.$externalResults=(0,o.Fl)((()=>l.value?[].concat(l.value).map(((e,t)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),v.$invalid=(0,o.Fl)((()=>{const e=d.some((e=>(0,r.SU)(v[e].$invalid)));return p.value=e,!!v.$externalResults.value.length||e})),v.$pending=(0,o.Fl)((()=>d.some((e=>(0,r.SU)(v[e].$pending))))),v.$error=(0,o.Fl)((()=>!!v.$dirty.value&&(v.$pending.value||v.$invalid.value))),v.$silentErrors=(0,o.Fl)((()=>d.filter((e=>(0,r.SU)(v[e].$invalid))).map((e=>{const t=v[e];return(0,r.qj)({$propertyPath:s,$property:n,$validator:e,$uid:`${s}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(v.$externalResults.value))),v.$errors=(0,o.Fl)((()=>v.$dirty.value?v.$silentErrors.value:[])),v.$unwatch=()=>d.forEach((e=>{v[e].$unwatch()})),v.$commit=()=>{p.value=!0,g.value=Date.now()},i.set(s,e,v),v):(f&&i.set(s,e,v),v)}function S(e,t,n,r,o,i,s){const a=Object.keys(e);return a.length?a.reduce(((a,c)=>(a[c]=k({validations:e[c],state:t,key:c,parentKey:n,resultsCache:r,globalConfig:o,instance:i,externalResults:s}),a)),{}):{}}function T(e,t,n){const i=(0,o.Fl)((()=>[t,n].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values((0,r.SU)(t)))),[]))),s=(0,o.Fl)({get(){return e.$dirty.value||!!i.value.length&&i.value.every((e=>e.$dirty))},set(t){e.$dirty.value=t}}),a=(0,o.Fl)((()=>{const t=(0,r.SU)(e.$silentErrors)||[],n=i.value.filter((e=>((0,r.SU)(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(n)})),c=(0,o.Fl)((()=>{const t=(0,r.SU)(e.$errors)||[],n=i.value.filter((e=>((0,r.SU)(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(n)})),l=(0,o.Fl)((()=>i.value.some((e=>e.$invalid))||(0,r.SU)(e.$invalid)||!1)),u=(0,o.Fl)((()=>i.value.some((e=>(0,r.SU)(e.$pending)))||(0,r.SU)(e.$pending)||!1)),d=(0,o.Fl)((()=>i.value.some((e=>e.$dirty))||i.value.some((e=>e.$anyDirty))||s.value)),f=(0,o.Fl)((()=>!!s.value&&(u.value||l.value))),h=()=>{e.$touch(),i.value.forEach((e=>{e.$touch()}))},p=()=>{e.$commit(),i.value.forEach((e=>{e.$commit()}))},m=()=>{e.$reset(),i.value.forEach((e=>{e.$reset()}))};return i.value.length&&i.value.every((e=>e.$dirty))&&h(),{$dirty:s,$errors:c,$invalid:l,$anyDirty:d,$error:f,$pending:u,$touch:h,$reset:m,$silentErrors:a,$commit:p}}function k(e){const t=E((function(){return B(),w((function(){if(A.$rewardEarly)return q(),b(o.Y3)}),(function(){return _(o.Y3,(function(){return new Promise((e=>{if(!V.value)return e(!U.value);const t=(0,o.YP)(V,(()=>{e(!U.value),t()}))}))}))}))}));let{validations:n,state:i,key:s,parentKey:a,childResults:c,resultsCache:d,globalConfig:f={},instance:h,externalResults:p}=e;const m=a?`${a}.${s}`:s,{rules:v,nestedValidators:k,config:C,validationGroups:O}=g(n),A=Object.assign({},f,C),R=s?(0,o.Fl)((()=>{const e=(0,r.SU)(i);return e?(0,r.SU)(e[s]):void 0})):i,P=Object.assign({},(0,r.SU)(p)||{}),$=(0,o.Fl)((()=>{const e=(0,r.SU)(p);return s?e?(0,r.SU)(e[s]):void 0:e})),N=I(v,R,s,d,m,A,h,$,i),x=S(k,R,m,d,A,h,$),L={};O&&Object.entries(O).forEach((e=>{let[t,n]=e;L[t]={$invalid:l(n,x,"$invalid"),$error:l(n,x,"$error"),$pending:l(n,x,"$pending"),$errors:u(n,x,"$errors"),$silentErrors:u(n,x,"$silentErrors")}}));const{$dirty:D,$errors:M,$invalid:U,$anyDirty:j,$error:F,$pending:V,$touch:B,$reset:H,$silentErrors:z,$commit:q}=T(N,x,c),W=s?(0,o.Fl)({get:()=>(0,r.SU)(R),set:e=>{D.value=!0;const t=(0,r.SU)(i),n=(0,r.SU)(p);n&&(n[s]=P[s]),(0,r.dq)(t[s])?t[s].value=e:t[s]=e}}):null;function J(e){return(c.value||{})[e]}function G(){(0,r.dq)(p)?p.value=P:0===Object.keys(P).length?Object.keys(p).forEach((e=>{delete p[e]})):Object.assign(p,P)}return s&&A.$autoDirty&&(0,o.YP)(R,(()=>{D.value||B();const e=(0,r.SU)(p);e&&(e[s]=P[s])}),{flush:"sync"}),(0,r.qj)(Object.assign({},N,{$model:W,$dirty:D,$error:F,$errors:M,$invalid:U,$anyDirty:j,$pending:V,$touch:B,$reset:H,$path:m||y,$silentErrors:z,$validate:t,$commit:q},c&&{$getResultsForChild:J,$clearExternalResults:G,$validationGroups:L},x))}class C{constructor(){this.storage=new Map}set(e,t,n){this.storage.set(e,{rules:t,result:n})}checkRulesValidity(e,t,n){const o=Object.keys(n),i=Object.keys(t);if(i.length!==o.length)return!1;const s=i.every((e=>o.includes(e)));return!!s&&i.every((e=>!t[e].$params||Object.keys(t[e].$params).every((o=>(0,r.SU)(n[e].$params[o])===(0,r.SU)(t[e].$params[o])))))}get(e,t){const n=this.storage.get(e);if(!n)return;const{rules:r,result:o}=n,i=this.checkRulesValidity(e,t,r),s=o.$unwatch?o.$unwatch:()=>({});return i?o:{$dirty:o.$dirty,$partial:!0,$unwatch:s}}}const O={COLLECT_ALL:!0,COLLECT_NONE:!1},A=Symbol("vuelidate#injectChildResults"),R=Symbol("vuelidate#removeChildResults");function P(e){let{$scope:t,instance:n}=e;const i={},s=(0,r.iH)([]),a=(0,o.Fl)((()=>s.value.reduce(((e,t)=>(e[t]=(0,r.SU)(i[t]),e)),{})));function c(e,n){let{$registerAs:r,$scope:o,$stopPropagation:a}=n;a||t===O.COLLECT_NONE||o===O.COLLECT_NONE||t!==O.COLLECT_ALL&&t!==o||(i[r]=e,s.value.push(r))}function l(e){s.value=s.value.filter((t=>t!==e)),delete i[e]}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],c),n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],l);const u=(0,o.f3)(A,[]);(0,o.JJ)(A,n.__vuelidateInjectInstances);const d=(0,o.f3)(R,[]);return(0,o.JJ)(R,n.__vuelidateRemoveInstances),{childResults:a,sendValidationResultsToParent:u,removeValidationResultsFromParent:d}}function $(e){return new Proxy(e,{get(e,t){return"object"===typeof e[t]?$(e[t]):(0,o.Fl)((()=>e[t]))}})}let N=0;function x(e,t){var n;let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(i=e,e=void 0,t=void 0);let{$registerAs:c,$scope:l=O.COLLECT_ALL,$stopPropagation:u,$externalResults:d,currentVueInstance:f}=i;const h=f||(null===(n=(0,o.FN)())||void 0===n?void 0:n.proxy),p=h?h.$options:{};c||(N+=1,c=`_vuelidate_${N}`);const m=(0,r.iH)({}),g=new C,{childResults:v,sendValidationResultsToParent:y,removeValidationResultsFromParent:_}=h?P({$scope:l,instance:h}):{childResults:(0,r.iH)({})};if(!e&&p.validations){const e=p.validations;t=(0,r.iH)({}),(0,o.wF)((()=>{t.value=h,(0,o.YP)((()=>s(e)?e.call(t.value,new $(t.value)):e),(e=>{m.value=k({validations:e,state:t,childResults:v,resultsCache:g,globalConfig:i,instance:h,externalResults:d||h.vuelidateExternalResults})}),{immediate:!0})})),i=p.validationsConfig||i}else{const n=(0,r.dq)(e)||a(e)?e:(0,r.qj)(e||{});(0,o.YP)(n,(e=>{m.value=k({validations:e,state:t,childResults:v,resultsCache:g,globalConfig:i,instance:null!==h&&void 0!==h?h:{},externalResults:d})}),{immediate:!0})}return h&&(y.forEach((e=>e(m,{$registerAs:c,$scope:l,$stopPropagation:u}))),(0,o.Jd)((()=>_.forEach((e=>e(c)))))),(0,o.Fl)((()=>Object.assign({},(0,r.SU)(m.value),v.value)))}},9117:function(e,t,n){"use strict";n.d(t,{C1:function(){return b},Ei:function(){return y}});n(7658);var r=n(4870);function o(e){return"function"===typeof e}function i(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function s(e){return o(e.$validator)?Object.assign({},e):{$validator:e}}function a(e){return"object"===typeof e?e.$valid:e}function c(e){return e.$validator||e}function l(e,t){if(!i(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!i(t)&&!o(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=s(t);return n.$params=Object.assign({},n.$params||{},e),n}function u(e,t){if(!o(e)&&"string"!==typeof(0,r.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!i(t)&&!o(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=s(t);return n.$message=e,n}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=s(e);return Object.assign({},n,{$async:!0,$watchTargets:t})}function f(e){return{$validator(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return(0,r.SU)(t).reduce(((t,n,r)=>{const i=Object.entries(n).reduce(((t,i)=>{let[s,l]=i;const u=e[s]||{},d=Object.entries(u).reduce(((e,t)=>{let[i,u]=t;const d=c(u),f=d.call(this,l,n,r,...o),h=a(f);if(e.$data[i]=f,e.$data.$invalid=!h||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!h){let t=u.$message||"";const n=u.$params||{};"function"===typeof t&&(t=t({$pending:!1,$invalid:!h,$params:n,$model:l,$response:f})),e.$errors.push({$property:s,$message:t,$params:n,$response:f,$model:l,$pending:!1,$validator:i})}return{$valid:e.$valid&&h,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return t.$data[s]=d.$data,t.$errors[s]=d.$errors,{$valid:t.$valid&&d.$valid,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&i.$valid,$data:t.$data.concat(i.$data),$errors:t.$errors.concat(i.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:t}=e;return t?t.$errors.map((e=>Object.values(e).map((e=>e.map((e=>e.$message)))).reduce(((e,t)=>e.concat(t)),[]))):[]}}}const h=e=>{if(e=(0,r.SU)(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},p=e=>(e=(0,r.SU)(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(e=(0,r.SU)(e),!h(e)||t.every((t=>t.test(e))))}r.SU,m(/^[a-zA-Z]*$/),m(/^[a-zA-Z0-9]*$/),m(/^\d*(\.\d+)?$/);const g=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;m(g);function v(e){return t=>!h(t)||p(t)>=(0,r.SU)(e)}function y(e){return{$validator:v(e),$message:e=>{let{$params:t}=e;return`This field should be at least ${t.min} characters long`},$params:{min:e,type:"minLength"}}}function _(e){return"string"===typeof e&&(e=e.trim()),h(e)}var b={$validator:_,$message:"Value is required",$params:{type:"required"}};const w=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;m(w);m(/(^[0-9]*$)|(^-[0-9]+$)/),m(/^[-]?\d*(\.\d+)?$/)},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},672:function(e,t,n){"use strict";n.d(t,{Am:function(){return ke},ZP:function(){return Oe}});n(541),n(7658);var r=n(4870),o=n(3396),i=n(9242);const s={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},a={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},c={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},l={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},u={dangerouslyHTMLString:!1,multiple:!0,position:s.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},d={rtl:!1,newestOnTop:!1,toastClassName:""},f={...u,...d};c.DEFAULT;var h=(e=>(e[e.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",e[e.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",e.CSS_NAMESPACE="Toastify",e))(h||{}),p=(e=>(e.ENTRANCE_ANIMATION_END="d",e))(p||{});const m={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},g={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},v={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},y={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function _(e){let t=m;if(e&&"string"!=typeof e)t=e;else switch(e){case"flip":t=y;break;case"zoom":t=v;break;case"slide":t=g;break}return t}function b(e){return e.containerId||String(e.position)}const w="will-unmount";function E(e=s.TOP_RIGHT){return!!document.querySelector(`.${h.CSS_NAMESPACE}__toast-container--${e}`)}function I(e=s.TOP_RIGHT){return`${h.CSS_NAMESPACE}__toast-container--${e}`}function S(e,t,n=!1){const r=[`${h.CSS_NAMESPACE}__toast-container`,`${h.CSS_NAMESPACE}__toast-container--${e}`,n?`${h.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return Y(t)?t({position:e,rtl:n,defaultClassName:r}):`${r} ${t||""}`}function T(e){var t;const{position:n,containerClassName:r,rtl:o=!1,style:i={}}=e,s=h.CSS_NAMESPACE,a=I(n),c=document.querySelector(`.${s}`),l=document.querySelector(`.${a}`),u=!!l&&!(null!=(t=l.className)&&t.includes(w)),d=c||document.createElement("div"),f=document.createElement("div");f.className=S(n,r,o),f.dataset.testid=`${h.CSS_NAMESPACE}__toast-container--${n}`,f.id=b(e);for(const h in i)if(Object.prototype.hasOwnProperty.call(i,h)){const e=i[h];f.style[h]=e}return c||(d.className=h.CSS_NAMESPACE,document.body.appendChild(d)),u||d.appendChild(f),f}function k(e){var t,n,r;const o="string"==typeof e?e:(null==(t=e.currentTarget)?void 0:t.id)||(null==(n=e.target)?void 0:n.id),i=document.getElementById(o);i&&i.removeEventListener("animationend",k,!1);try{C[o].unmount(),null==(r=document.getElementById(o))||r.remove(),delete C[o],delete j[o]}catch{}}const C=(0,r.qj)({});function O(e,t){const n=document.getElementById(String(t));n&&(C[n.id]=e)}function A(e,t=!0){const n=String(e);if(!C[n])return;const r=document.getElementById(n);r&&r.classList.add(w),t?($(e),r&&r.addEventListener("animationend",k,!1)):k(n),F.items=F.items.filter((t=>t.containerId!==e))}function R(e){for(const t in C)A(t,e);F.items=[]}function P(e,t){const n=document.getElementById(e.toastId);if(n){let r=e;r={...r,..._(r.transition)};const o=r.appendPosition?`${r.exit}--${r.position}`:r.exit;n.className+=` ${o}`,t&&t(n)}}function $(e){for(const t in j)if(t===e)for(const e of j[t]||[])P(e)}function N(e){const t=V().find((t=>t.toastId===e));return null==t?void 0:t.containerId}function x(e){return document.getElementById(e)}function L(e){const t=x(e.containerId);return t&&t.classList.contains(w)}function D(e){return((0,o.lA)(e.content)?(0,r.IU)(e.content.props):null)??(0,r.IU)(e.data??{})}function M(e){return e?F.items.filter((t=>t.containerId===e)).length>0:F.items.length>0}function U(){if(F.items.length>0){const e=F.items.shift();H(null==e?void 0:e.toastContent,null==e?void 0:e.toastProps)}}const j=(0,r.qj)({}),F=(0,r.qj)({items:[]});function V(){const e=(0,r.IU)(j);return Object.values(e).reduce(((e,t)=>[...e,...t]),[])}function B(e){return V().find((t=>t.toastId===e))}function H(e,t={}){if(L(t)){const n=x(t.containerId);n&&n.addEventListener("animationend",z.bind(null,e,t),!1)}else z(e,t)}function z(e,t={}){const n=x(t.containerId);n&&n.removeEventListener("animationend",z.bind(null,e,t),!1);const r=j[t.containerId]||[],s=r.length>0;if(!s&&!E(t.position)){const e=T(t),n=(0,i.ri)(be,t);n.mount(e),O(n,e.id)}s&&(t.position=r[0].position),(0,o.Y3)((()=>{t.updateId?q.update(t):q.add(e,t)}))}const q={add(e,t){const{containerId:n=""}=t;n&&(j[n]=j[n]||[],j[n].find((e=>e.toastId===t.toastId))||setTimeout((()=>{var e,r;t.newestOnTop?null==(e=j[n])||e.unshift(t):null==(r=j[n])||r.push(t),t.onOpen&&t.onOpen(D(t))}),t.delay||0))},remove(e){if(e){const t=N(e);if(t){const n=j[t];let r=n.find((t=>t.toastId===e));j[t]=n.filter((t=>t.toastId!==e)),!j[t].length&&!M(t)&&A(t,!1),U(),(0,o.Y3)((()=>{null!=r&&r.onClose&&(r.onClose(D(r)),r=void 0)}))}}},update(e={}){const{containerId:t=""}=e;if(t&&e.updateId){j[t]=j[t]||[];const n=j[t].find((t=>t.toastId===e.toastId));n&&setTimeout((()=>{for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const r=e[t];n[t]=r}}),e.delay||0)}},clear(e,t=!0){e?A(e,t):R(t)},dismissCallback(e){var t;const n=null==(t=e.currentTarget)?void 0:t.id,r=document.getElementById(n);r&&(r.removeEventListener("animationend",q.dismissCallback,!1),setTimeout((()=>{q.remove(n)})))},dismiss(e){if(e){const t=V();for(const n of t)if(n.toastId===e){P(n,(e=>{e.addEventListener("animationend",q.dismissCallback,!1)}));break}}}},W=(0,r.qj)({});function J(){return Math.random().toString(36).substring(2,9)}function G(e){return"number"==typeof e&&!isNaN(e)}function K(e){return"string"==typeof e}function Y(e){return"function"==typeof e}function X(...e){return(0,o.dG)(...e)}function Z(e){return"object"==typeof e&&(!(null==e||!e.render)||!(null==e||!e.setup)||"object"==typeof(null==e?void 0:e.type))}function Q(e={}){W[`${h.CSS_NAMESPACE}-default-options`]=e}function ee(){return W[`${h.CSS_NAMESPACE}-default-options`]||f}function te(){return document.documentElement.classList.contains("dark")?"dark":"light"}var ne=(e=>(e[e.Enter=0]="Enter",e[e.Exit=1]="Exit",e))(ne||{});const re={containerId:{type:[String,Number],required:!1,default:""},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:s.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:a.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:c.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},oe={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:c.DEFAULT},theme:{type:String,required:!1,default:a.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},ie=(0,o.aZ)({name:"ProgressBar",props:oe,setup(e,{attrs:t}){const n=(0,r.iH)(),i=(0,o.Fl)((()=>e.hide?"true":"false")),s=(0,o.Fl)((()=>({...t.style||{},animationDuration:`${!0===e.autoClose?5e3:e.autoClose}ms`,animationPlayState:e.isRunning?"running":"paused",opacity:e.hide?0:1,transform:e.controlledProgress?`scaleX(${e.progress})`:"none"}))),a=(0,o.Fl)((()=>[`${h.CSS_NAMESPACE}__progress-bar`,e.controlledProgress?`${h.CSS_NAMESPACE}__progress-bar--controlled`:`${h.CSS_NAMESPACE}__progress-bar--animated`,`${h.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`,`${h.CSS_NAMESPACE}__progress-bar--${e.type}`,e.rtl?`${h.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" "))),c=(0,o.Fl)((()=>`${a.value} ${(null==t?void 0:t.class)||""}`)),l=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},u=()=>{e.isIn&&e.closeToast&&!1!==e.autoClose&&(e.closeToast(),l())},d=(0,o.Fl)((()=>e.controlledProgress?null:u)),f=(0,o.Fl)((()=>e.controlledProgress?u:null));return(0,o.m0)((()=>{n.value&&(l(),n.value.onanimationend=d.value,n.value.ontransitionend=f.value)})),()=>(0,o.Wm)("div",{ref:n,role:"progressbar","aria-hidden":i.value,"aria-label":"notification timer",class:c.value,style:s.value},null)}}),se=(0,o.aZ)({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:a.AUTO},type:{type:String,required:!1,default:a.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(e){return()=>(0,o.Wm)("button",{class:`${h.CSS_NAMESPACE}__close-button ${h.CSS_NAMESPACE}__close-button--${e.theme}`,type:"button",onClick:t=>{t.stopPropagation(),e.closeToast&&e.closeToast(t)},"aria-label":e.ariaLabel},[(0,o.Wm)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[(0,o.Wm)("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),ae=({theme:e,type:t,path:n,...r})=>(0,o.Wm)("svg",(0,o.dG)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":`var(--toastify-icon-color-${t})`},r),[(0,o.Wm)("path",{d:n},null)]);function ce(e){return(0,o.Wm)(ae,(0,o.dG)(e,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function le(e){return(0,o.Wm)(ae,(0,o.dG)(e,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function ue(e){return(0,o.Wm)(ae,(0,o.dG)(e,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function de(e){return(0,o.Wm)(ae,(0,o.dG)(e,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function fe(){return(0,o.Wm)("div",{class:`${h.CSS_NAMESPACE}__spinner`},null)}const he={info:le,warning:ce,success:ue,error:de,spinner:fe},pe=e=>e in he;function me({theme:e,type:t,isLoading:n,icon:i}){let s;const a={theme:e,type:t};return n?s=he.spinner():!1===i?s=void 0:Z(i)?s=(0,r.IU)(i):Y(i)?s=i(a):(0,o.lA)(i)?s=(0,o.Ho)(i,a):K(i)||G(i)?s=i:pe(t)&&(s=he[t](a)),s}const ge=()=>{};function ve(e,t,n=h.COLLAPSE_DURATION){const{scrollHeight:r,style:o}=e,i=n;requestAnimationFrame((()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${i}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,i)}))}))}function ye(e){const t=(0,r.iH)(!1),n=(0,r.iH)(!1),i=(0,r.iH)(!1),s=(0,r.iH)(ne.Enter),a=(0,r.qj)({...e,appendPosition:e.appendPosition||!1,collapse:typeof e.collapse>"u"||e.collapse,collapseDuration:e.collapseDuration||h.COLLAPSE_DURATION}),c=a.done||ge,l=(0,o.Fl)((()=>a.appendPosition?`${a.enter}--${a.position}`:a.enter)),u=(0,o.Fl)((()=>a.appendPosition?`${a.exit}--${a.position}`:a.exit)),d=(0,o.Fl)((()=>e.pauseOnHover?{onMouseenter:b,onMouseleave:_}:{}));function f(){const t=l.value.split(" ");g().addEventListener(p.ENTRANCE_ANIMATION_END,_,{once:!0});const n=e=>{const r=g();e.target===r&&(r.dispatchEvent(new Event(p.ENTRANCE_ANIMATION_END)),r.removeEventListener("animationend",n),r.removeEventListener("animationcancel",n),s.value===ne.Enter&&"animationcancel"!==e.type&&r.classList.remove(...t))},r=()=>{const e=g();e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)};e.pauseOnFocusLoss&&v(),r()}function m(){if(!g())return;const e=()=>{const t=g();t.removeEventListener("animationend",e),a.collapse?ve(t,c,a.collapseDuration):c()},t=()=>{const t=g();s.value=ne.Exit,t&&(t.className+=` ${u.value}`,t.addEventListener("animationend",e))};n.value||(i.value?e():setTimeout(t))}function g(){return e.toastRef.value}function v(){document.hasFocus()||b(),window.addEventListener("focus",_),window.addEventListener("blur",b)}function y(){window.removeEventListener("focus",_),window.removeEventListener("blur",b)}function _(){(!e.loading.value||void 0===e.isLoading)&&(t.value=!0)}function b(){t.value=!1}function w(e){e&&(e.stopPropagation(),e.preventDefault()),n.value=!1}return(0,o.m0)(m),(0,o.m0)((()=>{const e=V();n.value=e.findIndex((e=>e.toastId===a.toastId))>-1})),(0,o.m0)((()=>{void 0!==e.isLoading&&(e.loading.value?b():_())})),(0,o.bv)(f),(0,o.Ah)((()=>{e.pauseOnFocusLoss&&y()})),{isIn:n,isRunning:t,hideToast:w,eventHandlers:d}}const _e=(0,o.aZ)({name:"ToastItem",inheritAttrs:!1,props:re,setup(e){const t=(0,r.iH)(),n=(0,o.Fl)((()=>!!e.isLoading)),i=(0,o.Fl)((()=>void 0!==e.progress&&null!==e.progress)),s=(0,o.Fl)((()=>me(e))),a=(0,o.Fl)((()=>[`${h.CSS_NAMESPACE}__toast`,`${h.CSS_NAMESPACE}__toast-theme--${e.theme}`,`${h.CSS_NAMESPACE}__toast--${e.type}`,e.rtl?`${h.CSS_NAMESPACE}__toast--rtl`:void 0,e.toastClassName||""].filter(Boolean).join(" "))),{isRunning:c,isIn:l,hideToast:u,eventHandlers:d}=ye({toastRef:t,loading:n,done:()=>{q.remove(e.toastId)},..._(e.transition),...e});return()=>(0,o.Wm)("div",(0,o.dG)({id:e.toastId,class:a.value,style:e.toastStyle||{},ref:t,"data-testid":`toast-item-${e.toastId}`,onClick:t=>{e.closeOnClick&&u(),e.onClick&&e.onClick(t)}},d.value),[(0,o.Wm)("div",{role:e.role,"data-testid":"toast-body",class:`${h.CSS_NAMESPACE}__toast-body ${e.bodyClassName||""}`},[null!=s.value&&(0,o.Wm)("div",{"data-testid":`toast-icon-${e.type}`,class:[`${h.CSS_NAMESPACE}__toast-icon`,e.isLoading?"":`${h.CSS_NAMESPACE}--animate-icon ${h.CSS_NAMESPACE}__zoom-enter`].join(" ")},[Z(s.value)?(0,o.h)((0,r.IU)(s.value),{theme:e.theme,type:e.type}):Y(s.value)?s.value({theme:e.theme,type:e.type}):s.value]),(0,o.Wm)("div",{"data-testid":"toast-content"},[Z(e.content)?(0,o.h)((0,r.IU)(e.content),{toastProps:(0,r.IU)(e),closeToast:u,data:e.data}):Y(e.content)?e.content({toastProps:(0,r.IU)(e),closeToast:u,data:e.data}):e.dangerouslyHTMLString?(0,o.h)("div",{innerHTML:e.content}):e.content])]),(void 0===e.closeButton||!0===e.closeButton)&&(0,o.Wm)(se,{theme:e.theme,closeToast:e=>{e.stopPropagation(),e.preventDefault(),u()}},null),Z(e.closeButton)?(0,o.h)((0,r.IU)(e.closeButton),{closeToast:u,type:e.type,theme:e.theme}):Y(e.closeButton)?e.closeButton({closeToast:u,type:e.type,theme:e.theme}):null,(0,o.Wm)(ie,{className:e.progressClassName,style:e.progressStyle,rtl:e.rtl,theme:e.theme,isIn:l.value,type:e.type,hide:e.hideProgressBar,isRunning:c.value,autoClose:e.autoClose,controlledProgress:i.value,progress:e.progress,closeToast:e.isLoading?void 0:u},null)])}}),be=(0,o.aZ)({name:"ToastifyContainer",inheritAttrs:!1,props:re,setup(e){const t=(0,o.Fl)((()=>e.containerId)),n=(0,o.Fl)((()=>j[t.value]||[])),r=(0,o.Fl)((()=>n.value.filter((t=>t.position===e.position))));return()=>(0,o.Wm)(o.HY,null,[r.value.map((e=>{const{toastId:t=""}=e;return(0,o.Wm)(_e,(0,o.dG)({key:t},e),null)}))])}});let we=!1;function Ee(){const e=[];return V().forEach((t=>{const n=document.getElementById(t.containerId);n&&!n.classList.contains(w)&&e.push(t)})),e}function Ie(e){const t=Ee().length,n=e??0;return n>0&&t+F.items.length>=n}function Se(e){Ie(e.limit)&&!e.updateId&&F.items.push({toastId:e.toastId,containerId:e.containerId,toastContent:e.content,toastProps:e})}function Te(e,t,n={}){if(we)return;n=X(ee(),t,n),(!n.toastId||"string"!=typeof n.toastId&&"number"!=typeof n.toastId)&&(n.toastId=J()),n={...n,content:e,containerId:n.containerId||String(n.position)};const r=Number(null==n?void 0:n.progress);return r<0&&(n.progress=0),r>1&&(n.progress=1),"auto"===n.theme&&(n.theme=te()),Se(n),n.multiple?F.items.length||H(e,n):(we=!0,ke.clearAll(void 0,!1),setTimeout((()=>{H(e,n)}),0),setTimeout((()=>{we=!1}),390)),n.toastId}const ke=(e,t)=>Te(e,c.DEFAULT,t);function Ce(e,{pending:t,error:n,success:r},o){let i;t&&(i=K(t)?ke.loading(t,o):ke.loading(t.render,{...o,...t}));const s={isLoading:void 0,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},a=(e,t,n)=>{if(null==t)return void ke.remove(i);const r={type:e,...s,...o,data:n},a=K(t)?{render:t}:t;return i?ke.update(i,{...r,...a,isLoading:!1,autoClose:!0}):ke(a.render,{...r,...a,isLoading:!1,autoClose:!0}),n},c=Y(e)?e():e;return c.then((e=>a("success",r,e))).catch((e=>a("error",n,e))),c}ke.info=(e,t)=>Te(e,c.DEFAULT,{...t,type:c.INFO}),ke.error=(e,t)=>Te(e,c.DEFAULT,{...t,type:c.ERROR}),ke.warning=(e,t)=>Te(e,c.DEFAULT,{...t,type:c.WARNING}),ke.warn=ke.warning,ke.success=(e,t)=>Te(e,c.DEFAULT,{...t,type:c.SUCCESS}),ke.loading=(e,t)=>Te(e,c.DEFAULT,X(t,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1})),ke.dark=(e,t)=>Te(e,c.DEFAULT,X(t,{theme:a.DARK})),ke.remove=e=>{e?q.dismiss(e):q.clear()},ke.clearAll=(e,t)=>{q.clear(e,t)},ke.isActive=e=>{let t=!1;return t=Ee().findIndex((t=>t.toastId===e))>-1,t},ke.update=(e,t={})=>{setTimeout((()=>{const n=B(e);if(n){const o=(0,r.IU)(n),{content:i}=o,s={...o,...t,toastId:t.toastId||e,updateId:J()},a=s.render||i;delete s.render,Te(a,s.type,s)}}),0)},ke.done=e=>{ke.update(e,{isLoading:!1,progress:1})},ke.promise=Ce,ke.POSITION=s,ke.THEME=a,ke.TYPE=c,ke.TRANSITIONS=l;const Oe={install(e,t={}){Ae(t)}};function Ae(e={}){const t=X(f,e);Q(t)}typeof window<"u"&&(window.Vue3Toastify=Oe)},1804:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return de},Xd:function(){return ue},Mq:function(){return ve},ZF:function(){return ge},KN:function(){return ye}});n(7658);var r=n(7142),o=n(5168),i=n(223);n(2801);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,h=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(E(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));f.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(I(this),t),E(d.get(this))}:function(...t){return E(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return h.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),s(e,l())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const I=e=>m.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=E(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(E(s.result),e.oldVersion,e.newVersion,E(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function O(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!T.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return C.set(t,i),i}_((e=>({...e,get:(t,n,r)=>O(t,n)||e.get(t,n,r),has:(t,n)=>!!O(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",$="0.9.9",N=new o.Yd("@firebase/app"),x="@firebase/app-compat",L="@firebase/analytics-compat",D="@firebase/analytics",M="@firebase/app-check-compat",U="@firebase/app-check",j="@firebase/auth",F="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",q="@firebase/installations",W="@firebase/installations-compat",J="@firebase/messaging",G="@firebase/messaging-compat",K="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",Z="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.21.0",ie="[DEFAULT]",se={[P]:"fire-core",[x]:"fire-core-compat",[D]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[M]:"fire-app-check-compat",[j]:"fire-auth",[F]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[q]:"fire-iid",[W]:"fire-iid-compat",[J]:"fire-fcm",[G]:"fire-fcm-compat",[K]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[Z]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new i.LL("app","Firebase",fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=oe;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!==typeof s||!s)throw he.create("bad-app-name",{appName:String(s)});if(n||(n=(0,i.aH)()),!n)throw he.create("no-options");const a=ae.get(s);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(o,a.config))return a;throw he.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const l=new pe(n,o,c);return ae.set(s,l),l}function ve(e=ie){const t=ae.get(e);if(!t&&e===ie)return ge();if(!t)throw he.create("no-app",{appName:e});return t}function ye(e,t,n){var o;let i=null!==(o=se[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}ue(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",be=1,we="firebase-heartbeat-store";let Ee=null;function Ie(){return Ee||(Ee=S(_e,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw he.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Se(e){try{const t=await Ie();return t.transaction(we).objectStore(we).get(ke(e))}catch(t){if(t instanceof i.ZR)N.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Te(e,t){try{const n=await Ie(),r=n.transaction(we,"readwrite"),o=r.objectStore(we);return await o.put(t,ke(e)),r.done}catch(n){if(n instanceof i.ZR)N.warn(n.message);else{const e=he.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=1024,Oe=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $e(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Oe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=Ce){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $e{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e){ue(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),ue(new r.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(P,$,e),ye(P,$,"esm2017"),ye("fire-js","")}xe("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return l},wA:function(){return o}});var r=n(223);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return l},in:function(){return o}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(1804),o="firebase",i="9.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(o,i,"app")},5677:function(e,t,n){"use strict";n.d(t,{Xb:function(){return Ot},v0:function(){return Fr},w$:function(){return Rt},e5:function(){return At}});n(7658);var r=n(223),o=n(1804);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var s=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.LL("auth","Firebase",c()),d=new s.Yd("@firebase/auth");function f(e,...t){d.logLevel<=s["in"].WARN&&d.warn(`Auth (${o.Jn}): ${e}`,...t)}function h(e,...t){d.logLevel<=s["in"].ERROR&&d.error(`Auth (${o.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw v(e,...t)}function m(e,...t){return v(e,...t)}function g(e,t,n){const o=Object.assign(Object.assign({},l()),{[t]:n}),i=new r.LL("auth","Firebase",o);return i.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function y(e,t,...n){if(!e)throw v(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function b(e,t){e||_(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $(e,t,n,o,i={}){return N(e,i,(async()=>{let i={},s={};o&&("GET"===t?s=o:i={body:JSON.stringify(o)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(L(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function N(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},A),t);try{const t=new D(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw M(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw M(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw M(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw M(e,"user-disabled",i);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);p(e,a)}}catch(i){if(i instanceof r.ZR)throw i;p(e,"network-request-failed",{message:String(i)})}}async function x(e,t,n,r,o={}){const i=await $(e,t,n,r,o);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function L(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?C(e.config,o):`${e.config.apiScheme}://${o}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function M(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=m(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return $(e,"POST","/v1/accounts:delete",t)}async function j(e,t){return $(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t=!1){const n=(0,r.m9)(e),o=await n.getIdToken(t),i=H(o);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:o,authTime:F(B(i.auth_time)),issuedAtTime:F(B(i.iat)),expirationTime:F(B(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function H(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(i){return h("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function z(e){const t=H(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r.ZR&&W(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function W({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=F(this.lastLoginAt),this.creationTime=F(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e){var t;const n=e.auth,r=await e.getIdToken(),o=await q(e,j(n,{idToken:r}));y(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?Z(i.providerUserInfo):[],a=X(e.providerData,s),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new G(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Y(e){const t=(0,r.m9)(e);await K(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function X(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function Z(e){return e.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t){const n=await N(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=L(e,o,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await Q(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new ee;return n&&(y("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(y("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new G(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return V(this,e)}reload(){return Y(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await K(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:I}=t;y(_&&I,e,"internal-error");const S=ee.fromJSON(this.name,I);y("string"===typeof _,e,"internal-error"),te(u,e.name),te(d,e.name),y("boolean"===typeof b,e,"internal-error"),y("boolean"===typeof w,e,"internal-error"),te(f,e.name),te(h,e.name),te(p,e.name),te(m,e.name),te(g,e.name),te(v,e.name);const T=new ne({uid:_,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new ee;r.updateFromServerResponse(t);const o=new ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await K(o),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Map;function oe(e){b(e instanceof Function,"Expected a class definition");let t=re.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,re.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ie.type="NONE";const se=ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,o),this.fullPersistenceKey=ae("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(oe(se),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||oe(se);const i=ae(n,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(i);if(t){const n=ne._fromJSON(e,t);l!==o&&(s=n),o=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(c){}}))),new ce(o,e,n)):new ce(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(he(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ue(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function he(e=(0,r.z$)()){return/iemobile/i.test(e)}function pe(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return(0,r.w1)()&&10===document.documentMode}function be(e=(0,r.z$)()){return ve(e)||pe(e)||ge(e)||me(e)||/windows phone/i.test(e)||he(e)}function we(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.Jn}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(e,t){return $(e,"GET","/v2/recaptchaConfig",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){return void 0!==e&&void 0!==e.enterprise}class Te{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Ce(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ke().appendChild(r)}))}function Oe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ae="https://www.google.com/recaptcha/enterprise.js?render=",Re="recaptcha-enterprise",Pe="NO_RECAPTCHA";class $e{constructor(e){this.type=Re,this.auth=De(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Ie(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Te(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const o=window.grecaptcha;Se(o)?o.enterprise.ready((()=>{o.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Pe)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,o)=>{n(this.auth).then((n=>{if(!t&&Se(window.grecaptcha))r(n,e,o);else{if("undefined"===typeof window)return void o(new Error("RecaptchaVerifier is only supported in browser"));Ce(Ae+n).then((()=>{r(n,e,o)})).catch((e=>{o(e)}))}})).catch((e=>{o(e)}))}))}}async function Ne(e,t,n,r=!1){const o=new $e(e);let i;try{i=await o.verify(n)}catch(a){i=await o.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Me(this),this.idTokenSubscription=new Me(this),this.beforeStateQueue=new xe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=oe(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==i||!(null===s||void 0===s?void 0:s.user)||(r=s.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await K(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(oe(e))}))}async initializeRecaptchaConfig(){const e=await Ie(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Te(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new $e(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&oe(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return y(i,this,"internal-error"),i.then((()=>o(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&f(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function De(e){return(0,r.m9)(e)}class Me{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e,t){const n=(0,o.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if((0,r.vZ)(o,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const i=n.initialize({options:t});return i}function je(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(oe);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Fe(e,t,n){const r=De(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ve(t),{host:s,port:a}=Be(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||ze()}function Ve(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Be(e){const t=Ve(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:He(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:He(t)}}}function He(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e,t){return $(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Je(e,t){return x(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}async function Ge(e,t){return $(e,"POST","/v1/accounts:sendOobCode",P(e,t))}async function Ke(e,t){return Ge(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ye(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}async function Xe(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends qe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ze(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ze(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Ne(e,n,"signInWithPassword");return Je(e,t)}return Je(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Ne(e,n,"signInWithPassword");return Je(e,t)}return Promise.reject(t)}));case"emailLink":return Ye(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return We(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xe(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return x(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new tt(n,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return $(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}async function rt(e,t){return x(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}async function ot(e,t){const n=await x(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw M(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return x(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ot(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lt(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,o=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=o?(0,r.zd)((0,r.pd)(o))["link"]:null;return i||o||n||t||e}class ut{constructor(e){var t,n,o,i,s,a;const c=(0,r.zd)((0,r.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=ct(null!==(o=c["mode"])&&void 0!==o?o:null);y(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=lt(e);try{return new ut(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(){this.providerId=dt.PROVIDER_ID}static credential(e,t){return Ze._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ut.parseLink(t);return y(n,"argument-error"),Ze._fromEmailAndCode(e,n.code,n.tenantId)}}dt.PROVIDER_ID="password",dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends ft{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ht{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com",gt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends ht{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yt(e,t){return x(e,"POST","/v1/accounts:signUp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.TWITTER_SIGN_IN_METHOD="twitter.com",vt.PROVIDER_ID="twitter.com";class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ne._fromIdTokenResponse(e,n,r),i=bt(n),s=new _t({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=bt(n);return new _t({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt extends r.ZR{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,wt.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new wt(e,t,n,r)}}function Et(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw wt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e,t,n=!1){const r=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _t._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await q(e,Et(r,o,t,e),n);y(i.idToken,r,"internal-error");const s=H(i.idToken);y(s,r,"internal-error");const{sub:a}=s;return y(e.uid===a,r,"user-mismatch"),_t._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&p(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(e,t,n=!1){const r="signIn",o=await Et(e,r,t),i=await _t._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function kt(e,t){return Tt(De(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(e,t,n){var r;y((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),y("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(y(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(y(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n){var r;const o=De(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(r=o._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Ne(o,i,"signUpPassword");s=yt(o,e)}else s=yt(o,i).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Ne(o,i,"signUpPassword");return yt(o,e)}return Promise.reject(e)}));const a=await s.catch((e=>Promise.reject(e))),c=await _t._fromIdTokenResponse(o,"signIn",a);return await o._updateCurrentUser(c.user),c}function At(e,t,n){return kt((0,r.m9)(e),dt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t){const n=(0,r.m9)(e),o=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:o};t&&Ct(n.auth,i,t);const{email:s}=await Ke(n.auth,i);s!==e.email&&await e.reload()}function Pt(e,t,n,o){return(0,r.m9)(e).onIdTokenChanged(t,n,o)}function $t(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e,t){return $(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function xt(e,t){return $(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}function Lt(e,t){return $(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function Dt(e,t){return $(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}new WeakMap;const Mt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mt,"1"),this.storage.removeItem(Mt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){const e=(0,r.z$)();return de(e)||ve(e)}const Ft=1e3,Vt=10;class Bt extends Ut{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jt()&&we(),this.fallbackToPolling=be(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);_e()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Vt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ft)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bt.type="LOCAL";const Ht=Bt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ut{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zt.type="SESSION";const qt=zt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Jt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map((async e=>e(t.origin,o))),a=await Wt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.receivers=[];class Kt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((s,a)=>{const c=Gt("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(l),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function Xt(e){Yt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return"undefined"!==typeof Yt()["WorkerGlobalScope"]&&"function"===typeof Yt()["importScripts"]}async function Qt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function en(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function tn(){return Zt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="firebaseLocalStorageDb",rn=1,on="firebaseLocalStorage",sn="fbase_key";class an{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function cn(e,t){return e.transaction([on],t?"readwrite":"readonly").objectStore(on)}function ln(){const e=indexedDB.deleteDatabase(nn);return new an(e).toPromise()}function un(){const e=indexedDB.open(nn,rn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(on,{keyPath:sn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(on)?t(n):(n.close(),await ln(),t(await un()))}))}))}async function dn(e,t,n){const r=cn(e,!0).put({[sn]:t,value:n});return new an(r).toPromise()}async function fn(e,t){const n=cn(e,!1).get(t),r=await new an(n).toPromise();return void 0===r?null:r.value}function hn(e,t){const n=cn(e,!0).delete(t);return new an(n).toPromise()}const pn=800,mn=3;class gn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await un()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>mn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jt._getInstance(tn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qt(),!this.activeServiceWorker)return;this.sender=new Kt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&en()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await un();return await dn(e,Mt,"1"),await hn(e,Mt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>dn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>fn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>hn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=cn(e,!1).getAll();return new an(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),pn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}gn.type="LOCAL";const vn=gn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e,t){return $(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}function _n(e,t){return $(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}function bn(e,t){return $(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Oe("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn="recaptcha";async function En(e,t,n){var r;const o=await n.verify();try{let i;if(y("string"===typeof o,e,"argument-error"),y(n.type===wn,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){y("enroll"===t.type,e,"internal-error");const n=await Nt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;y(n,e,"missing-multi-factor-info");const s=await yn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In{constructor(e){this.providerId=In.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return En(this.auth,e,(0,r.m9)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return In.credentialFromTaggedObject(t)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sn(e,t){return t?oe(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.PROVIDER_ID="phone",In.PHONE_SIGN_IN_METHOD="phone";class Tn extends qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kn(e){return Tt(e.auth,new Tn(e),e.bypassAuthState)}function Cn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),St(n,new Tn(e),e.bypassAuthState)}async function On(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),It(n,new Tn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kn;case"linkViaPopup":case"linkViaRedirect":return On;case"reauthViaPopup":case"reauthViaRedirect":return Cn;default:p(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new k(2e3,1e4);class Pn extends An{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Gt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Rn.get())};e()}}Pn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $n="pendingRedirect",Nn=new Map;class xn extends An{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Nn.get(this.auth._key());if(!e){try{const t=await Ln(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Nn.set(this.auth._key(),e)}return this.bypassAuthState||Nn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ln(e,t){const n=Un(t),r=Mn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function Dn(e,t){Nn.set(e._key(),t)}function Mn(e){return oe(e._redirectPersistence)}function Un(e){return ae($n,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(e,t,n=!1){const r=De(e),o=Sn(r,t),i=new xn(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fn=6e5;class Vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!zn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bn(e))}saveEventToCache(e){this.cachedEventUids.add(Bn(e)),this.lastProcessedEventTime=Date.now()}}function Bn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function zn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(e,t={}){return $(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jn=/^https?/;async function Gn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await qn(e);for(const r of t)try{if(Kn(r))return}catch(n){}p(e,"unauthorized-domain")}function Kn(e){const t=w(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!Jn.test(n))return!1;if(Wn.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new k(3e4,6e4);function Xn(){const e=Yt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Zn(e){return new Promise(((t,n)=>{var r,o,i;function s(){Xn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Xn(),n(m(e,"network-request-failed"))},timeout:Yn.get()})}if(null===(o=null===(r=Yt().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Yt().gapi)||void 0===i?void 0:i.load)){const t=Oe("iframefcb");return Yt()[t]=()=>{gapi.load?s():n(m(e,"network-request-failed"))},Ce(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Qn=null,e}))}let Qn=null;function er(e){return Qn=Qn||Zn(e),Qn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new k(5e3,15e3),nr="__/auth/iframe",rr="emulator/auth/iframe",or={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ir=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sr(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,rr):`https://${e.config.authDomain}/${nr}`,i={apiKey:t.apiKey,appName:e.name,v:o.Jn},s=ir.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function ar(e){const t=await er(e),n=Yt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:sr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:or,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=m(e,"network-request-failed"),i=Yt().setTimeout((()=>{r(o)}),tr.get());function s(){Yt().clearTimeout(i),n(t)}t.ping(s).then(s,(()=>{r(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lr=500,ur=600,dr="_blank",fr="http://localhost";class hr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function pr(e,t,n,o=lr,i=ur){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const l=Object.assign(Object.assign({},cr),{width:o.toString(),height:i.toString(),top:s,left:a}),u=(0,r.z$)().toLowerCase();n&&(c=fe(u)?dr:n),ue(u)&&(t=t||fr,l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ye(u)&&"_self"!==c)return mr(t||"",c),new hr(null);const f=window.open(t||"",c,d);y(f,e,"popup-blocked");try{f.focus()}catch(h){}return new hr(f)}function mr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="__/auth/handler",vr="emulator/auth/handler",yr=encodeURIComponent("fac");async function _r(e,t,n,i,s,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o.Jn,eventId:s};if(t instanceof ft){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];const u=await e._getAppCheckToken(),d=u?`#${yr}=${encodeURIComponent(u)}`:"";return`${br(e)}?${(0,r.xO)(l).slice(1)}${d}`}function br({config:e}){return e.emulator?C(e,vr):`https://${e.authDomain}/${gr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="webStorageSupport";class Er{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qt,this._completeRedirectFn=jn,this._overrideRedirectResult=Dn}async _openPopup(e,t,n,r){var o;b(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await _r(e,t,n,w(),r);return pr(e,i,Gt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const o=await _r(e,t,n,w(),r);return Xt(o),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ar(e),n=new Vn(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(wr,{type:wr},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[wr];void 0!==o&&t(!!o),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return be()||de()||ve()}}const Ir=Er;class Sr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class Tr extends Sr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Tr(e)}_finalizeEnroll(e,t,n){return xt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return _n(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kr{constructor(){}static assertion(e){return Tr._fromCredential(e)}}kr.FACTOR_ID="phone";class Cr{static assertionForEnrollment(e,t){return Or._fromSecret(e,t)}static assertionForSignIn(e,t){return Or._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;y("undefined"!==typeof t.auth,"internal-error");const n=await Lt(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Ar._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}Cr.FACTOR_ID="totp";class Or extends Sr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Or(t,void 0,e)}static _fromEnrollmentId(e,t){return new Or(t,e)}async _finalizeEnroll(e,t,n){return y("undefined"!==typeof this.secret,e,"argument-error"),Dt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return bn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ar{constructor(e,t,n,r,o,i,s){this.sessionInfo=i,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ar(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Rr(e)||Rr(t))&&(r=!0),r&&(Rr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Rr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Rr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Pr="@firebase/auth",$r="0.23.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Lr(e){(0,o.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;y(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),y(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},l=new Le(r,o,i,c);return je(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o.Xd)(new a.wA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Nr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KN)(Pr,$r,xr(e)),(0,o.KN)(Pr,$r,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=300,Mr=(0,r.Pz)("authIdTokenMaxAge")||Dr;let Ur=null;const jr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mr)return;const o=null===n||void 0===n?void 0:n.token;Ur!==o&&(Ur=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Fr(e=(0,o.Mq)()){const t=(0,o.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ue(e,{popupRedirectResolver:Ir,persistence:[vn,Ht,qt]}),i=(0,r.Pz)("authTokenSyncURL");if(i){const e=jr(i);$t(n,e,(()=>e(n.currentUser))),Pt(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Fe(n,`http://${s}`),n}Lr("Browser")},2578:function(e,t,n){"use strict";n.d(t,{WB:function(){return de},Q_:function(){return Ie},nv:function(){return Te},rn:function(){return Se}});n(7658),n(541);var r=n(4870),o=n(3396),i=!1;function s(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function a(){return c().__VUE_DEVTOOLS_GLOBAL_HOOK__}function c(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const l="function"===typeof Proxy,u="devtools-plugin:setup",d="plugin:settings:set";let f,h,p;function m(){var e;return void 0!==f||("undefined"!==typeof window&&window.performance?(f=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(f=!0,h=n.g.perf_hooks.performance):f=!1),f}function g(){return m()?h.now():Date.now()}class v{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const s in e.settings){const t=e.settings[s];n[s]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let o=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(o,t)}catch(i){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(i){}o=e},now(){return g()}},t&&t.on(d,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function y(e,t){const n=e,r=c(),o=a(),i=l&&n.enableEarlyProxy;if(!o||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const e=i?new v(n,o):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else o.emit(u,e,t)}const _=e=>p=e,b=Symbol();function w(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var E;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(E||(E={}));const I="undefined"!==typeof window,S=!1,T=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function k(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function C(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){$(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function O(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function A(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const R="object"===typeof navigator?navigator:{userAgent:""},P=(()=>/Macintosh/.test(R.userAgent)&&/AppleWebKit/.test(R.userAgent)&&!/Safari/.test(R.userAgent))(),$=I?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!P?N:"msSaveOrOpenBlob"in R?x:L:()=>{};function N(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?O(r.href)?C(e,t,n):(r.target="_blank",A(r)):A(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){A(r)}),0))}function x(e,t="download",n){if("string"===typeof e)if(O(e))C(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){A(t)}))}else navigator.msSaveOrOpenBlob(k(e,n),t)}function L(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return C(e,t,n);const o="application/octet-stream"===e.type,i=/constructor/i.test(String(T.HTMLElement))||"safari"in T,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||o&&i||P)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}function D(e,t){const n="🍍 "+e;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,t):"error"===t?console.error(n):"warn"===t?console.warn(n):console.log(n)}function M(e){return"_a"in e&&"install"in e}function U(){if(!("clipboard"in navigator))return D("Your browser doesn't support the Clipboard API","error"),!0}function j(e){return!!(e instanceof Error&&e.message.toLowerCase().includes("document is not focused"))&&(D('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function F(e){if(!U())try{await navigator.clipboard.writeText(JSON.stringify(e.state.value)),D("Global state copied to clipboard.")}catch(t){if(j(t))return;D("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}async function V(e){if(!U())try{e.state.value=JSON.parse(await navigator.clipboard.readText()),D("Global state pasted from clipboard.")}catch(t){if(j(t))return;D("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}async function B(e){try{$(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){D("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}let H;function z(){function e(){return new Promise(((e,t)=>{H.onchange=async()=>{const t=H.files;if(!t)return e(null);const n=t.item(0);return e(n?{text:await n.text(),file:n}:null)},H.oncancel=()=>e(null),H.onerror=t,H.click()}))}return H||(H=document.createElement("input"),H.type="file",H.accept=".json"),e}async function q(e){try{const t=await z(),n=await t();if(!n)return;const{text:r,file:o}=n;e.state.value=JSON.parse(r),D(`Global state imported from "${o.name}".`)}catch(t){D("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}function W(e){return{_custom:{display:e}}}const J="🍍 Pinia (root)",G="_root";function K(e){return M(e)?{id:G,label:J}:{id:e.$id,label:e.$id}}function Y(e){if(M(e)){const t=Array.from(e._s.keys()),n=e._s,r={state:t.map((t=>({editable:!0,key:t,value:e.state.value[t]}))),getters:t.filter((e=>n.get(e)._getters)).map((e=>{const t=n.get(e);return{editable:!1,key:e,value:t._getters.reduce(((e,n)=>(e[n]=t[n],e)),{})}}))};return r}const t={state:Object.keys(e.$state).map((t=>({editable:!0,key:t,value:e.$state[t]})))};return e._getters&&e._getters.length&&(t.getters=e._getters.map((t=>({editable:!1,key:t,value:e[t]})))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map((t=>({editable:!0,key:t,value:e[t]})))),t}function X(e){return e?Array.isArray(e)?e.reduce(((e,t)=>(e.keys.push(t.key),e.operations.push(t.type),e.oldValue[t.key]=t.oldValue,e.newValue[t.key]=t.newValue,e)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:W(e.type),key:W(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function Z(e){switch(e){case E.direct:return"mutation";case E.patchFunction:return"$patch";case E.patchObject:return"$patch";default:return"unknown"}}let Q=!0;const ee=[],te="pinia:mutations",ne="pinia",{assign:re}=Object,oe=e=>"🍍 "+e;function ie(e,t){y({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:ee,app:e},(n=>{"function"!==typeof n.now&&D("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:te,label:"Pinia 🍍",color:15064968}),n.addInspector({id:ne,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{F(t)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await V(t),n.sendInspectorTree(ne),n.sendInspectorState(ne)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{B(t)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await q(t),n.sendInspectorTree(ne),n.sendInspectorState(ne)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:e=>{const n=t._s.get(e);n?n._isOptionsAPI?(n.$reset(),D(`Store "${e}" reset.`)):D(`Cannot reset "${e}" store because it's a setup store.`,"warn"):D(`Cannot reset "${e}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(((e,t)=>{const n=e.componentInstance&&e.componentInstance.proxy;if(n&&n._pStores){const t=e.componentInstance.proxy._pStores;Object.values(t).forEach((t=>{e.instanceData.state.push({type:oe(t.$id),key:"state",editable:!0,value:t._isOptionsAPI?{_custom:{value:(0,r.IU)(t.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>t.$reset()}]}}:Object.keys(t.$state).reduce(((e,n)=>(e[n]=t.$state[n],e)),{})}),t._getters&&t._getters.length&&e.instanceData.state.push({type:oe(t.$id),key:"getters",editable:!1,value:t._getters.reduce(((e,n)=>{try{e[n]=t[n]}catch(r){e[n]=r}return e}),{})})}))}})),n.on.getInspectorTree((n=>{if(n.app===e&&n.inspectorId===ne){let e=[t];e=e.concat(Array.from(t._s.values())),n.rootNodes=(n.filter?e.filter((e=>"$id"in e?e.$id.toLowerCase().includes(n.filter.toLowerCase()):J.toLowerCase().includes(n.filter.toLowerCase()))):e).map(K)}})),n.on.getInspectorState((n=>{if(n.app===e&&n.inspectorId===ne){const e=n.nodeId===G?t:t._s.get(n.nodeId);if(!e)return;e&&(n.state=Y(e))}})),n.on.editInspectorState(((n,r)=>{if(n.app===e&&n.inspectorId===ne){const e=n.nodeId===G?t:t._s.get(n.nodeId);if(!e)return D(`store "${n.nodeId}" not found`,"error");const{path:r}=n;M(e)?r.unshift("state"):1===r.length&&e._customProperties.has(r[0])&&!(r[0]in e.$state)||r.unshift("$state"),Q=!1,n.set(e,r,n.state.value),Q=!0}})),n.on.editComponentState((e=>{if(e.type.startsWith("🍍")){const n=e.type.replace(/^🍍\s*/,""),r=t._s.get(n);if(!r)return D(`store "${n}" not found`,"error");const{path:o}=e;if("state"!==o[0])return D(`Invalid path for store "${n}":\n${o}\nOnly state can be modified.`);o[0]="$state",Q=!1,e.set(r,o,e.state.value),Q=!0}}))}))}function se(e,t){ee.includes(oe(t.$id))||ee.push(oe(t.$id)),y({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:ee,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(e=>{const n="function"===typeof e.now?e.now.bind(e):Date.now;t.$onAction((({after:r,onError:o,name:i,args:s})=>{const a=ce++;e.addTimelineEvent({layerId:te,event:{time:n(),title:"🛫 "+i,subtitle:"start",data:{store:W(t.$id),action:W(i),args:s},groupId:a}}),r((r=>{ae=void 0,e.addTimelineEvent({layerId:te,event:{time:n(),title:"🛬 "+i,subtitle:"end",data:{store:W(t.$id),action:W(i),args:s,result:r},groupId:a}})})),o((r=>{ae=void 0,e.addTimelineEvent({layerId:te,event:{time:n(),logType:"error",title:"💥 "+i,subtitle:"end",data:{store:W(t.$id),action:W(i),args:s,error:r},groupId:a}})}))}),!0),t._customProperties.forEach((i=>{(0,o.YP)((()=>(0,r.SU)(t[i])),((t,r)=>{e.notifyComponentUpdate(),e.sendInspectorState(ne),Q&&e.addTimelineEvent({layerId:te,event:{time:n(),title:"Change",subtitle:i,data:{newValue:t,oldValue:r},groupId:ae}})}),{deep:!0})})),t.$subscribe((({events:r,type:o},i)=>{if(e.notifyComponentUpdate(),e.sendInspectorState(ne),!Q)return;const s={time:n(),title:Z(o),data:re({store:W(t.$id)},X(r)),groupId:ae};ae=void 0,o===E.patchFunction?s.subtitle="⤵️":o===E.patchObject?s.subtitle="🧩":r&&!Array.isArray(r)&&(s.subtitle=r.type),r&&(s.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),e.addTimelineEvent({layerId:te,event:s})}),{detached:!0,flush:"sync"});const i=t._hotUpdate;t._hotUpdate=(0,r.Xl)((r=>{i(r),e.addTimelineEvent({layerId:te,event:{time:n(),title:"🔥 "+t.$id,subtitle:"HMR update",data:{store:W(t.$id),info:W("HMR update")}}}),e.notifyComponentUpdate(),e.sendInspectorTree(ne),e.sendInspectorState(ne)}));const{$dispose:s}=t;t.$dispose=()=>{s(),e.notifyComponentUpdate(),e.sendInspectorTree(ne),e.sendInspectorState(ne),e.getSettings().logStoreChanges&&D(`Disposed "${t.$id}" store 🗑`)},e.notifyComponentUpdate(),e.sendInspectorTree(ne),e.sendInspectorState(ne),e.getSettings().logStoreChanges&&D(`"${t.$id}" store installed 🆕`)}))}let ae,ce=0;function le(e,t){const n=t.reduce(((t,n)=>(t[n]=(0,r.IU)(e)[n],t)),{});for(const r in n)e[r]=function(){const t=ce,o=new Proxy(e,{get(...e){return ae=t,Reflect.get(...e)},set(...e){return ae=t,Reflect.set(...e)}});return n[r].apply(o,arguments)}}function ue({app:e,store:t,options:n}){if(!t.$id.startsWith("__hot:")){if(n.state&&(t._isOptionsAPI=!0),"function"===typeof n.state){le(t,Object.keys(n.actions));const e=t._hotUpdate;(0,r.IU)(t)._hotUpdate=function(n){e.apply(this,arguments),le(t,Object.keys(n._hmrPayload.actions))}}se(e,t)}}function de(){const e=(0,r.B)(!0),t=e.run((()=>(0,r.iH)({})));let n=[],o=[];const s=(0,r.Xl)({install(e){_(s),i||(s._a=e,e.provide(b,s),e.config.globalProperties.$pinia=s,S&&ie(e,s),o.forEach((e=>n.push(e))),o=[])},use(e){return this._a||i?n.push(e):o.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return S&&"undefined"!==typeof Proxy&&s.use(ue),s}const fe=()=>{};function he(e,t,n,o=fe){e.push(t);const i=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),o())};return!n&&(0,r.nZ)()&&(0,r.EB)(i),i}function pe(e,...t){e.slice().forEach((e=>{e(...t)}))}function me(e,t){e instanceof Map&&t instanceof Map&&t.forEach(((t,n)=>e.set(n,t))),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const o=t[n],i=e[n];w(i)&&w(o)&&e.hasOwnProperty(n)&&!(0,r.dq)(o)&&!(0,r.PG)(o)?e[n]=me(i,o):e[n]=o}return e}const ge=Symbol(),ve=new WeakMap;function ye(e){return i?!ve.has(e):!w(e)||!e.hasOwnProperty(ge)}const{assign:_e}=Object;function be(e){return!(!(0,r.dq)(e)||!e.effect)}function we(e,t,n,a){const{state:c,actions:l,getters:u}=t,d=n.state.value[e];let f;function h(){d||(i?s(n.state.value,e,c?c():{}):n.state.value[e]=c?c():{});const t=(0,r.BK)(n.state.value[e]);return _e(t,l,Object.keys(u||{}).reduce(((t,s)=>(t[s]=(0,r.Xl)((0,o.Fl)((()=>{_(n);const t=n._s.get(e);if(!i||t._r)return u[s].call(t,t)}))),t)),{}))}return f=Ee(e,h,t,n,a,!0),f}function Ee(e,t,n={},a,c,l){let u;const d=_e({actions:{}},n);const f={deep:!0};let h,p;let m,g=(0,r.Xl)([]),v=(0,r.Xl)([]);const y=a.state.value[e];l||y||(i?s(a.state.value,e,{}):a.state.value[e]={});const b=(0,r.iH)({});let w;function I(t){let n;h=p=!1,"function"===typeof t?(t(a.state.value[e]),n={type:E.patchFunction,storeId:e,events:m}):(me(a.state.value[e],t),n={type:E.patchObject,payload:t,storeId:e,events:m});const r=w=Symbol();(0,o.Y3)().then((()=>{w===r&&(h=!0)})),p=!0,pe(g,n,a.state.value[e])}const T=l?function(){const{state:e}=n,t=e?e():{};this.$patch((e=>{_e(e,t)}))}:fe;function k(){u.stop(),g=[],v=[],a._s.delete(e)}function C(t,n){return function(){_(a);const r=Array.from(arguments),o=[],i=[];function s(e){o.push(e)}function c(e){i.push(e)}let l;pe(v,{args:r,name:t,store:R,after:s,onError:c});try{l=n.apply(this&&this.$id===e?this:R,r)}catch(u){throw pe(i,u),u}return l instanceof Promise?l.then((e=>(pe(o,e),e))).catch((e=>(pe(i,e),Promise.reject(e)))):(pe(o,l),l)}}const O=(0,r.Xl)({actions:{},getters:{},state:[],hotState:b}),A={_p:a,$id:e,$onAction:he.bind(null,v),$patch:I,$reset:T,$subscribe(t,n={}){const r=he(g,t,n.detached,(()=>i())),i=u.run((()=>(0,o.YP)((()=>a.state.value[e]),(r=>{("sync"===n.flush?p:h)&&t({storeId:e,type:E.direct,events:m},r)}),_e({},f,n))));return r},$dispose:k};i&&(A._r=!1);const R=(0,r.qj)(S?_e({_hmrPayload:O,_customProperties:(0,r.Xl)(new Set)},A):A);a._s.set(e,R);const P=a._e.run((()=>(u=(0,r.B)(),u.run((()=>t())))));for(const o in P){const t=P[o];if((0,r.dq)(t)&&!be(t)||(0,r.PG)(t))l||(y&&ye(t)&&((0,r.dq)(t)?t.value=y[o]:me(t,y[o])),i?s(a.state.value[e],o,t):a.state.value[e][o]=t);else if("function"===typeof t){const e=C(o,t);i?s(P,o,e):P[o]=e,d.actions[o]=t}else 0}if(i?Object.keys(P).forEach((e=>{s(R,e,P[e])})):(_e(R,P),_e((0,r.IU)(R),P)),Object.defineProperty(R,"$state",{get:()=>a.state.value[e],set:e=>{I((t=>{_e(t,e)}))}}),S){const e={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((t=>{Object.defineProperty(R,t,_e({value:R[t]},e))}))}return i&&(R._r=!0),a._p.forEach((e=>{if(S){const t=u.run((()=>e({store:R,app:a._a,pinia:a,options:d})));Object.keys(t||{}).forEach((e=>R._customProperties.add(e))),_e(R,t)}else _e(R,u.run((()=>e({store:R,app:a._a,pinia:a,options:d}))))})),y&&l&&n.hydrate&&n.hydrate(R.$state,y),h=!0,p=!0,R}function Ie(e,t,n){let r,i;const s="function"===typeof t;function a(e,n){const a=(0,o.FN)();e=e||a&&(0,o.f3)(b,null),e&&_(e),e=p,e._s.has(r)||(s?Ee(r,t,i,e):we(r,i,e));const c=e._s.get(r);return c}return"string"===typeof e?(r=e,i=s?n:t):(i=e,r=e.id),a.$id=r,a}function Se(e,t){return Array.isArray(t)?t.reduce(((t,n)=>(t[n]=function(){return e(this.$pinia)[n]},t)),{}):Object.keys(t).reduce(((n,r)=>(n[r]=function(){const n=e(this.$pinia),o=t[r];return"function"===typeof o?o.call(this,n):n[o]},n)),{})}function Te(e,t){return Array.isArray(t)?t.reduce(((t,n)=>(t[n]=function(...t){return e(this.$pinia)[n](...t)},t)),{}):Object.keys(t).reduce(((n,r)=>(n[r]=function(...n){return e(this.$pinia)[t[r]](...n)},n)),{})}},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return j},p7:function(){return tt}});n(7658),n(541);var r=n(3396),o=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const o=t[r];n[r]=u(o)?o.map(e):e(o)}return n}const l=()=>{},u=Array.isArray;const d=/\/$/,f=e=>e.replace(d,"");function h(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),o=e(i)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=w(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&v(t.matched[r],n.matched[o])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_(e[n],t[n]))return!1;return!0}function _(e,t){return u(e)?b(e,t):u(t)?b(t,e):e===t}function b(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,s=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],"."!==i){if(".."!==i)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var E,I;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(I||(I={}));function S(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),f(e)}const T=/^[^#]+#/;function k(e,t){return e.replace(T,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const O=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=C(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const P=new Map;function $(e,t){P.set(e,t)}function N(e){const t=P.get(e);return P.delete(e),t}let x=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,e);return s+r+o}function D(e,t,n,r){let o=[],i=[],s=null;const c=({state:i})=>{const a=L(e,location),c=n.value,l=t.value;let u=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);u=l?i.position-l.position:0}else r(a);o.forEach((e=>{e(n.value,c,{delta:u,type:E.pop,direction:u?u>0?I.forward:I.back:I.unknown})}))};function l(){s=n.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:O()}),"")}function f(){for(const e of i)e();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:u,destroy:f}}function M(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?O():null}}function U(e){const{history:t,location:n}=window,r={value:L(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:x()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,M(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function c(e,n){const s=a({},o.value,t.state,{forward:e,scroll:O()});i(s.current,s,!0);const c=a({},M(r.value,e,null),{position:s.position+1},n);i(e,c,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:c,replace:s}}function j(e){e=S(e);const t=U(e),n=D(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function F(e){return"string"===typeof e||e&&"object"===typeof e}function V(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function q(e,t){return a(new Error,{type:e,[H]:!0},t)}function W(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const J="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function Y(e,t){const n=a({},G,t),r=[];let o=n.start?"^":"";const i=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(o+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(K,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:l}=r;i.push({name:e,repeatable:n,optional:c});const u=l||J;if(u!==J){s+=10;try{new RegExp(`(${u})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+d.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),o+=f,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:s,optional:a}=e,c=i in t?t[i]:"";if(u(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:s,score:r,keys:i,parse:c,stringify:l}}function X(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=X(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(Q(r))return 1;if(Q(o))return-1}return o.length-r.length}function Q(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,l="",u="";function d(){l&&(0===n?i.push({type:0,value:l}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function f(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&d(),s()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:te.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),d(),s(),o}function re(e,t,n){const r=Y(ne(e.path),n);const o=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function oe(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,c=se(e);c.aliasOf=r&&r.record;const d=ue(t,e),f=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,p;for(const t of f){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(h=re(t,n,d),r?r.alias.push(h):(p=p||h,p!==h&&p.alias.push(h),o&&e.name&&!ce(h)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&u(h)}return p?()=>{s(p)}:l}function s(e){if(V(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function u(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function d(e,t){let o,i,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw q(1,{location:e});0,s=o.record.name,c=a(ie(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&ie(e.params,o.keys.map((e=>e.name)))),i=o.stringify(c)}else if("path"in e)i=e.path,o=n.find((e=>e.re.test(i))),o&&(c=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw q(1,{location:e,currentLocation:t});s=o.record.name,c=a({},t.params,e.params),i=o.stringify(c)}const l=[];let u=o;while(u)l.unshift(u.record),u=u.parent;return{name:s,path:i,params:c,matched:l,meta:le(l)}}return t=ue({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:d,removeRoute:s,getRoutes:c,getRecordMatcher:o}}function ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function se(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function ue(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,he=/&/g,pe=/\//g,me=/=/g,ge=/\?/g,ve=/\+/g,ye=/%5B/g,_e=/%5D/g,be=/%5E/g,we=/%60/g,Ee=/%7B/g,Ie=/%7C/g,Se=/%7D/g,Te=/%20/g;function ke(e){return encodeURI(""+e).replace(Ie,"|").replace(ye,"[").replace(_e,"]")}function Ce(e){return ke(e).replace(Ee,"{").replace(Se,"}").replace(be,"^")}function Oe(e){return ke(e).replace(ve,"%2B").replace(Te,"+").replace(fe,"%23").replace(he,"%26").replace(we,"`").replace(Ee,"{").replace(Se,"}").replace(be,"^")}function Ae(e){return Oe(e).replace(me,"%3D")}function Re(e){return ke(e).replace(fe,"%23").replace(ge,"%3F")}function Pe(e){return null==e?"":Re(e).replace(pe,"%2F")}function $e(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ne(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(ve," "),n=e.indexOf("="),i=$e(n<0?e:e.slice(0,n)),s=n<0?null:$e(e.slice(n+1));if(i in t){let e=t[i];u(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function xe(e){let t="";for(let n in e){const r=e[n];if(n=Ae(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=u(r)?r.map((e=>e&&Oe(e))):[r&&Oe(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const De=Symbol(""),Me=Symbol(""),Ue=Symbol(""),je=Symbol(""),Fe=Symbol("");function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,a)=>{const c=e=>{!1===e?a(q(4,{from:n,to:t})):e instanceof Error?a(e):F(e)?a(q(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),s())},l=e.call(r&&r.instances[o],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function He(e,t,n,r){const o=[];for(const i of e){0;for(const e in i.components){let a=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(ze(a)){const s=a.__vccOpts||a,c=s[t];c&&o.push(Be(c,n,r,i,e))}else{let c=a();0,o.push((()=>c.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const a=s(o)?o.default:o;i.components[e]=a;const c=a.__vccOpts||a,l=c[t];return l&&Be(l,n,r,i,e)()}))))}}}return o}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function qe(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(je),i=(0,r.Fl)((()=>t.resolve((0,o.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(v.bind(null,r));if(s>-1)return s;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&o[o.length-1].path!==a?o.findIndex(v.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Ke(n.params,i.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,i.value.params)));function u(n={}){return Ge(n)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(l):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:u}}const We=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qe,setup(e,{slots:t}){const n=(0,o.qj)(qe(e)),{options:i}=(0,r.f3)(Ue),s=(0,r.Fl)((()=>({[Xe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Je=We;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!u(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(Fe),s=(0,r.Fl)((()=>e.route||i.value)),c=(0,r.f3)(Me,0),l=(0,r.Fl)((()=>{let e=(0,o.SU)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.Fl)((()=>s.value.matched[l.value]));(0,r.JJ)(Me,(0,r.Fl)((()=>l.value+1))),(0,r.JJ)(De,u),(0,r.JJ)(Fe,s);const d=(0,o.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&v(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=s.value,i=e.name,c=u.value,l=c&&c.components[i];if(!l)return Qe(n.default,{Component:l,route:o});const f=c.props[i],h=f?!0===f?o.params:"function"===typeof f?f(o):f:null,p=e=>{e.component.isUnmounted&&(c.instances[i]=null)},m=(0,r.h)(l,a({},h,t,{onVnodeUnmounted:p,ref:d}));return Qe(n.default,{Component:m,route:o})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=oe(e.routes,e),n=e.parseQuery||Ne,s=e.stringifyQuery||xe,d=e.history;const f=Ve(),m=Ve(),v=Ve(),y=(0,o.XI)(B);let _=B;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),w=c.bind(null,Pe),I=c.bind(null,$e);function S(e,n){let r,o;return V(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function P(e,r){if(r=a({},r||y.value),"string"===typeof e){const o=h(n,e,r.path),i=t.resolve({path:o.path},r),s=d.createHref(o.fullPath);return a(o,i,{params:I(i.params),hash:$e(o.hash),redirectedFrom:void 0,href:s})}let o;if("path"in e)o=a({},e,{path:h(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];o=a({},e,{params:w(e.params)}),r.params=w(r.params)}const i=t.resolve(o,r),c=e.hash||"";i.params=b(I(i.params));const l=p(s,a({},e,{hash:Ce(c),path:i.path})),u=d.createHref(l);return a({fullPath:l,hash:c,query:s===xe?Le(e.query):e.query||{}},i,{redirectedFrom:void 0,href:u})}function x(e){return"string"===typeof e?h(n,e,y.value.path):a({},e)}function L(e,t){if(_!==e)return q(8,{from:t,to:e})}function D(e){return j(e)}function M(e){return D(a(x(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function j(e,t){const n=_=P(e),r=y.value,o=e.state,i=e.force,c=!0===e.replace,l=U(n);if(l)return j(a(x(l),{state:"object"===typeof l?a({},o,l.state):o,force:i,replace:c}),t||n);const u=n;let d;return u.redirectedFrom=t,!i&&g(s,r,n)&&(d=q(16,{to:u,from:r}),ne(r,r,!0,!1)),(d?Promise.resolve(d):H(u,r)).catch((e=>W(e)?W(e,2)?e:te(e):Q(e,u,r))).then((e=>{if(e){if(W(e,2))return j(a({replace:c},x(e.to),{state:"object"===typeof e.to?a({},o,e.to.state):o,force:i}),t||u)}else e=J(u,r,!0,c,o);return z(u,r,e),e}))}function F(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function H(e,t){let n;const[r,o,i]=rt(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const s=F.bind(null,e,t);return n.push(s),nt(n).then((()=>{n=[];for(const r of f.list())n.push(Be(r,e,t));return n.push(s),nt(n)})).then((()=>{n=He(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(s),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(u(r.beforeEnter))for(const o of r.beforeEnter)n.push(Be(o,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(s),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(i,"beforeRouteEnter",e,t),n.push(s),nt(n)))).then((()=>{n=[];for(const r of m.list())n.push(Be(r,e,t));return n.push(s),nt(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of v.list())r(e,t,n)}function J(e,t,n,r,o){const s=L(e,t);if(s)return s;const c=t===B,l=i?history.state:{};n&&(r||c?d.replace(e.fullPath,a({scroll:c&&l&&l.scroll},o)):d.push(e.fullPath,o)),y.value=e,ne(e,t,n,c),te()}let G;function K(){G||(G=d.listen(((e,t,n)=>{if(!ae.listening)return;const r=P(e),o=U(r);if(o)return void j(a(o,{replace:!0}),r).catch(l);_=r;const s=y.value;i&&$(R(s.fullPath,n.delta),O()),H(r,s).catch((e=>W(e,12)?e:W(e,2)?(j(e.to,r).then((e=>{W(e,20)&&!n.delta&&n.type===E.pop&&d.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&d.go(-n.delta,!1),Q(e,r,s)))).then((e=>{e=e||J(r,s,!1),e&&(n.delta&&!W(e,8)?d.go(-n.delta,!1):n.type===E.pop&&W(e,20)&&d.go(-1,!1)),z(r,s,e)})).catch(l)})))}let Y,X=Ve(),Z=Ve();function Q(e,t,n){te(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Y&&y.value!==B?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function te(e){return Y||(Y=!e,K(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ne(t,n,o,s){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!o&&N(R(t.fullPath,0))||(s||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&A(e))).catch((e=>Q(e,t,n)))}const re=e=>d.go(e);let ie;const se=new Set,ae={currentRoute:y,listening:!0,addRoute:S,removeRoute:T,hasRoute:C,getRoutes:k,resolve:P,options:e,push:D,replace:M,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:f.add,beforeResolve:m.add,afterEach:v.add,onError:Z.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Je),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(y)}),i&&!ie&&y.value===B&&(ie=!0,D(d.location).catch((e=>{0})));const n={};for(const o in B)n[o]=(0,r.Fl)((()=>y.value[o]));e.provide(Ue,t),e.provide(je,(0,o.qj)(n)),e.provide(Fe,y);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(_=B,G&&G(),G=null,y.value=B,ie=!1,Y=!1),s()}}};return ae}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find((e=>v(e,i)))?r.push(i):n.push(i));const a=e.matched[s];a&&(t.matched.find((e=>v(e,a)))||o.push(a))}return[n,r,o]}}}]);
//# sourceMappingURL=chunk-vendors.55f987b7.js.map