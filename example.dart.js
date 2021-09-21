(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.eQ(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.pR(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+t+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,A.qm,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+t+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,A.qm,null)}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.qm(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={FK:function FK(){},n:function n(a){this.a=a},bQ:function bQ(){},aL:function aL(){},G:function G(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},A:function A(a,b){this.a=a
this.b=b},
NQ(a){var t,s=v.mangledGlobalNames[a]
if(s!=null)return s
t="minified:"+a
return t},
d(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.j(a)
return t},
M(a){return A.H(a)},
H(a){var t,s,r,q
if(a instanceof A.Mh)return A.F(A.z(a),null)
if(J.i(a)===B.Ok||u.o.b(a)){t=B.O4(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return A.F(A.z(a),null)},
b(a){var t,s
if(a==null)a=new A.B()
t=new Error()
t.dartException=a
s=A.J
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
J(){return J.j(this.dartException)},
v(a){throw A.b(a)},
l(a){throw A.b(A.a(a))},
iA(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.zx().constructor.prototype):Object.create(new A.rT(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else{r=$.yj
$.yj=r+1
r=new Function("a,b"+r,"this.$initialize(a,b"+r+")")
s=r}t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bx(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.im(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bx(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
im(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Tn)}throw A.b("Error in functionType of tearoff")},
vq(a,b,c,d){var t=A.yS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bx(a,b,c,d){var t,s,r,q,p,o="receiver"
if(c)return A.Hf(a,b,d)
t=b.length
s=d||t>=27
if(s)return A.vq(t,d,a,b)
if(t===0){s=$.yj
$.yj=s+1
r="self"+A.d(s)
s="return function(){var "+r+" = this."
q=$.i0
return new Function(s+(q==null?$.i0=A.L4(o):q)+";return "+r+"."+a+"();}")()}p="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
s=$.yj
$.yj=s+1
p+=A.d(s)
s="return function("+p+"){return this."
q=$.i0
return new Function(s+(q==null?$.i0=A.L4(o):q)+"."+a+"("+p+");}")()},
Z4(a,b,c,d){var t=A.yS,s=A.AO
switch(b?-1:a){case 0:throw A.b(new A.Eq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
Hf(a,b,c){var t,s,r,q,p,o=$.Hb
if(o==null)o=$.Hb=A.L4("interceptor")
t=$.i0
if(t==null)t=$.i0=A.L4("receiver")
s=b.length
r=c||s>=28
if(r)return A.Z4(s,c,a,b)
if(s===1){r="return function(){return this."+o+"."+a+"(this."+t+");"
q=$.yj
$.yj=q+1
return new Function(r+A.d(q)+"}")()}p="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
r="return function("+p+"){return this."+o+"."+a+"(this."+t+", "+p+");"
q=$.yj
$.yj=q+1
return new Function(r+A.d(q)+"}")()},
qm(a){return A.iA(a)},
Tn(a,b){return A.cE(v.typeUniverse,A.z(a.a),b)},
yS(a){return a.a},
AO(a){return a.b},
L4(a){var t,s,r,q=new A.rT("receiver","interceptor"),p=J.Ep(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.xY("Field name "+a+" not found."))},
eQ(a){throw A.b(new A.t7(a))},
E(a){return v.getIsolateTag(a)},
iw(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
w3(a){var t,s,r,q,p,o=$.NF.$1(a),n=$.nw[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.vv[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.c.$2(a,o)
if(r!=null){n=$.nw[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.vv[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.Va(t)
$.nw[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.vv[o]=t
return t}if(q==="-"){p=A.Va(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.Lc(a,t)
if(q==="*")throw A.b(A.y(o))
if(v.leafTags[o]===true){p=A.Va(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.Lc(a,t)},
Lc(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.Qu(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
Va(a){return J.Qu(a,!1,null,!!a.$iXj)},
VF(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.Va(t)
else return J.Qu(t,c,null,null)},
XD(){if(!0===$.Bv)return
$.Bv=!0
A.Z1()},
Z1(){var t,s,r,q,p,o,n,m
$.nw=Object.create(null)
$.vv=Object.create(null)
A.kO()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.x7.$1(p)
if(o!=null){n=A.VF(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
kO(){var t,s,r,q,p,o,n=B.Yq()
n=A.ud(B.KU,A.ud(B.fQ,A.ud(B.i7,A.ud(B.i7,A.ud(B.xi,A.ud(B.dk,A.ud(B.wb(B.O4),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.NF=new A.dC(q)
$.c=new A.wN(p)
$.x7=new A.VX(o)},
ud(a,b){return a(b)||b},
t:function t(){},
E1:function E1(){},
lc:function lc(){},
zx:function zx(){},
rT:function rT(a,b){this.a=a
this.b=b},
Eq:function Eq(a){this.a=a},
dC:function dC(a){this.a=a},
wN:function wN(a){this.a=a},
VX:function VX(a){this.a=a},
cz(a,b){var t=b.c
return t==null?b.c=A.Bc(a,b.z,!0):t},
xZ(a,b){var t=b.c
return t==null?b.c=A.Q2(a,"b8",[b.z]):t},
Q1(a){var t=a.y
if(t===6||t===7||t===8)return A.Q1(a.z)
return t===11||t===12},
mD(a){return a.cy},
q7(a){return A.Ew(v.typeUniverse,a,!1)},
PL(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=A.PL(a,t,c,a0)
if(s===t)return b
return A.SO(a,s,!0)
case 7:t=b.z
s=A.PL(a,t,c,a0)
if(s===t)return b
return A.Bc(a,s,!0)
case 8:t=b.z
s=A.PL(a,t,c,a0)
if(s===t)return b
return A.LN(a,s,!0)
case 9:r=b.Q
q=A.bZ(a,r,c,a0)
if(q===r)return b
return A.Q2(a,b.z,q)
case 10:p=b.z
o=A.PL(a,p,c,a0)
n=b.Q
m=A.bZ(a,n,c,a0)
if(o===p&&m===n)return b
return A.ap(a,o,m)
case 11:l=b.z
k=A.PL(a,l,c,a0)
j=b.Q
i=A.qT(a,j,c,a0)
if(k===l&&i===j)return b
return A.Nf(a,k,i)
case 12:h=b.Q
a0+=h.length
g=A.bZ(a,h,c,a0)
p=b.z
o=A.PL(a,p,c,a0)
if(g===h&&o===p)return b
return A.DS(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.hV("Attempted to substitute unexpected RTI kind "+d))}},
bZ(a,b,c,d){var t,s,r,q,p=b.length,o=A.vU(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.PL(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
vO(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.vU(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.PL(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
qT(a,b,c,d){var t,s=b.a,r=A.bZ(a,s,c,d),q=b.b,p=A.bZ(a,q,c,d),o=b.c,n=A.vO(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.ET()
t.a=r
t.b=p
t.c=n
return t},
JS(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.Bp(t)
return a.$S()}return null},
Ue(a,b){var t
if(A.Q1(b))if(a instanceof A.t){t=A.JS(a)
if(t!=null)return t}return A.z(a)},
z(a){var t
if(a instanceof A.Mh){t=a.$ti
return t!=null?t:A.VU(a)}if(Array.isArray(a))return A.t6(a)
return A.VU(J.i(a))},
t6(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
p(a){var t=a.$ti
return t!=null?t:A.VU(a)},
VU(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.r9(a,t)},
r9(a,b){var t=a instanceof A.t?a.__proto__.__proto__.constructor:b,s=A.ai(v.typeUniverse,t.name)
b.$ccache=s
return s},
Bp(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.Ew(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
JJ(a){var t,s,r,q,p=this
if(p===u.K)return A.RE(p,a,A.ke)
if(!A.A8(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.RE(p,a,A.Iw)
t=p.y
s=t===6?p.z:p
if(s===u.S)r=A.ok
else if(s===u.i||s===u.H)r=A.KH
else if(s===u.N)r=A.MM
else r=s===u.y?A.r:null
if(r!=null)return A.RE(p,a,r)
if(s.y===9){q=s.z
if(s.Q.every(A.cc)){p.r="$i"+q
if(q==="zM")return A.RE(p,a,A.yM)
return A.RE(p,a,A.t4)}}else if(t===7)return A.RE(p,a,A.AQ)
return A.RE(p,a,A.YO)},
RE(a,b,c){a.b=c
return a.b(b)},
Au(a){var t,s=this,r=A.Oz
if(!A.A8(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.hn
else if(s===u.K)r=A.Ti
else{t=A.lR(s)
if(t)r=A.l4}s.a=r
return s.a(a)},
Qj(a){var t,s=a.y
if(!A.A8(a))if(!(a===u._))if(!(a===u.A))if(s!==7)t=s===8&&A.Qj(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
YO(a){var t=this
if(a==null)return A.Qj(t)
return A.We(v.typeUniverse,A.Ue(a,t),null,t,null)},
AQ(a){if(a==null)return!0
return this.z.b(a)},
t4(a){var t,s=this
if(a==null)return A.Qj(s)
t=s.r
if(a instanceof A.Mh)return!!a[t]
return!!J.i(a)[t]},
yM(a){var t,s=this
if(a==null)return A.Qj(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.Mh)return!!a[t]
return!!J.i(a)[t]},
Oz(a){var t,s=this
if(a==null){t=A.lR(s)
if(t)return a}else if(s.b(a))return a
A.m4(a,s)},
l4(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.m4(a,t)},
m4(a,b){throw A.b(A.Zc(A.WK(a,A.Ue(a,b),A.F(b,null))))},
WK(a,b,c){var t=A.u(a),s=A.F(b==null?A.z(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
Zc(a){return new A.iM("TypeError: "+a)},
Lz(a,b){return new A.iM("TypeError: "+A.WK(a,null,b))},
ke(a){return a!=null},
Ti(a){if(a!=null)return a
throw A.b(A.Lz(a,"Object"))},
Iw(a){return!0},
hn(a){return a},
r(a){return!0===a||!1===a},
p8(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.Lz(a,"bool"))},
y8(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.Lz(a,"bool"))},
M4(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.Lz(a,"bool?"))},
jQ(a){if(typeof a=="number")return a
throw A.b(A.Lz(a,"double"))},
tF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Lz(a,"double"))},
Qk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Lz(a,"double?"))},
ok(a){return typeof a=="number"&&Math.floor(a)===a},
IZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.Lz(a,"int"))},
kY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.Lz(a,"int"))},
Uc(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.Lz(a,"int?"))},
KH(a){return typeof a=="number"},
z5(a){if(typeof a=="number")return a
throw A.b(A.Lz(a,"num"))},
W1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Lz(a,"num"))},
cU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Lz(a,"num?"))},
MM(a){return typeof a=="string"},
Bt(a){if(typeof a=="string")return a
throw A.b(A.Lz(a,"String"))},
hN(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.Lz(a,"String"))},
ra(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.Lz(a,"String?"))},
q(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.F(a[r],b)
return t},
f(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", "
if(a4!=null){t=a4.length
if(a3==null){a3=[]
s=null}else s=a3.length
r=a3.length
for(q=t;q>0;--q)a3.push("T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a1){n=B.xB.h(n+m,a3[a3.length-1-q])
l=a4[q]
k=l.y
if(!(k===2||k===3||k===4||k===5||l===p))if(!(l===o))j=!1
else j=!0
else j=!0
if(!j)n+=" extends "+A.F(l,a3)}n+=">"}else{n=""
s=null}p=a2.z
i=a2.Q
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.F(p,a3)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.F(h[q],a3)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.F(f[q],a3)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.F(d[q+2],a3)+" "+d[q]}a+="}"}if(s!=null){a3.toString
a3.length=s}return n+"("+a+") => "+b},
F(a,b){var t,s,r,q,p,o,n=a.y
if(n===5)return"erased"
if(n===2)return"dynamic"
if(n===3)return"void"
if(n===1)return"Never"
if(n===4)return"any"
if(n===6){t=A.F(a.z,b)
return t}if(n===7){s=a.z
t=A.F(s,b)
r=s.y
return(r===11||r===12?"("+t+")":t)+"?"}if(n===8)return"FutureOr<"+A.F(a.z,b)+">"
if(n===9){q=A.C(a.z)
p=a.Q
return p.length>0?q+("<"+A.q(p,b)+">"):q}if(n===11)return A.f(a,b,null)
if(n===12)return A.f(a.z,b,a.Q)
if(n===13){o=a.z
return b[b.length-1-o]}return"?"},
C(a){var t,s=v.mangledGlobalNames[a]
if(s!=null)return s
t="minified:"+a
return t},
Qo(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ai(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.Ew(a,b,!1)
else if(typeof n=="number"){t=n
s=A.mZ(a,5,"#")
r=A.vU(t)
for(q=0;q<t;++q)r[q]=s
p=A.Q2(a,b,r)
o[b]=p
return p}else return n},
xb(a,b){return A.Ix(a.tR,b)},
FF(a,b){return A.Ix(a.eT,b)},
Ew(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.eT(A.ow(a,null,b,c))
s.set(b,t)
return t},
cE(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=A.eT(A.ow(a,b,c,!0))
r.set(c,s)
return s},
v5(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=A.ap(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
BD(a,b){b.a=A.Au
b.b=A.JJ
return b},
mZ(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.Jc(null,null)
t.y=b
t.cy=c
s=A.BD(a,t)
a.eC.set(c,s)
return s},
SO(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.Z7(a,b,s,c)
a.eC.set(s,t)
return t},
Z7(a,b,c,d){var t,s,r
if(d){t=b.y
if(!A.A8(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.Jc(null,null)
r.y=6
r.z=b
r.cy=c
return A.BD(a,r)},
Bc(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.ll(a,b,s,c)
a.eC.set(s,t)
return t},
ll(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!A.A8(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.lR(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&A.lR(r.z))return r
else return A.cz(a,b)}}q=new A.Jc(null,null)
q.y=7
q.z=b
q.cy=c
return A.BD(a,q)},
LN(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.eV(a,b,s,c)
a.eC.set(s,t)
return t},
eV(a,b,c,d){var t,s,r
if(d){t=b.y
if(!A.A8(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.Q2(a,"b8",[b])
else if(b===u.P||b===u.T)return u.O}r=new A.Jc(null,null)
r.y=8
r.z=b
r.cy=c
return A.BD(a,r)},
Hc(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.Jc(null,null)
t.y=13
t.z=b
t.cy=r
s=A.BD(a,t)
a.eC.set(r,s)
return s},
Ux(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
S4(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
Q2(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.Ux(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.Jc(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=A.BD(a,s)
a.eC.set(q,r)
return r},
ap(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+A.Ux(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.Jc(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=A.BD(a,p)
a.eC.set(r,o)
return o},
Nf(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.Ux(n)
if(k>0){t=m>0?",":""
s=A.Ux(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=A.S4(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.Jc(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=A.BD(a,p)
a.eC.set(r,s)
return s},
DS(a,b,c,d){var t,s=b.cy+("<"+A.Ux(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.hw(a,b,c,s,d)
a.eC.set(s,t)
return t},
hw(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.vU(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=A.PL(a,b,s,0)
n=A.bZ(a,c,s,0)
return A.DS(a,o,n,c!==n)}}m=new A.Jc(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return A.BD(a,m)},
ow(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eT(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=A.Al(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=A.R8(a,s,i,h,!1)
else if(r===46)s=A.R8(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(A.KQ(a.u,a.e,h.pop()))
break
case 94:h.push(A.Hc(a.u,h.pop()))
break
case 35:h.push(A.mZ(a.u,5,"#"))
break
case 64:h.push(A.mZ(a.u,2,"@"))
break
case 126:h.push(A.mZ(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
A.cH(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(A.Q2(q,o,p))
else{n=A.KQ(q,a.e,o)
switch(n.y){case 11:h.push(A.DS(q,n,p,a.n))
break
default:h.push(A.ap(q,n,p))
break}}break
case 38:A.I3(a,h)
break
case 42:q=a.u
h.push(A.SO(q,A.KQ(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(A.Bc(q,A.KQ(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(A.LN(q,A.KQ(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new A.ET()
l=q.sEA
k=q.sEA
o=h.pop()
if(typeof o=="number")switch(o){case-1:l=h.pop()
break
case-2:k=h.pop()
break
default:h.push(o)
break}else h.push(o)
p=h.splice(a.p)
A.cH(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(A.Nf(q,A.KQ(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
A.cH(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
A.Be(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return A.KQ(a.u,a.e,j)},
Al(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
R8(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=A.Qo(t,p.z)[q]
if(o==null)A.v('No "'+q+'" in "'+A.mD(p)+'"')
d.push(A.cE(t,p,o))}else d.push(q)
return n},
I3(a,b){var t=b.pop()
if(0===t){b.push(A.mZ(a.u,1,"0&"))
return}if(1===t){b.push(A.mZ(a.u,4,"1&"))
return}throw A.b(A.hV("Unexpected extended operation "+A.d(t)))},
KQ(a,b,c){if(typeof c=="string")return A.Q2(a,c,a.sEA)
else if(typeof c=="number")return A.TV(a,b,c)
else return c},
cH(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.KQ(a,b,c[t])},
Be(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.KQ(a,b,c[t])},
TV(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw A.b(A.hV("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw A.b(A.hV("Bad index "+c+" for "+b.Z(0)))},
We(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.A8(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(A.A8(b))return!1
if(b.y!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(A.We(a,c[b.z],c,d,e))return!0
q=d.y
t=b===u.P||b===u.T
if(t){if(q===8)return A.We(a,b,c,d.z,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.We(a,b.z,c,d,e)
if(s===6)return A.We(a,b.z,c,d,e)
return s!==7}if(s===6)return A.We(a,b.z,c,d,e)
if(q===6){t=A.cz(a,d)
return A.We(a,b,c,t,e)}if(s===8){if(!A.We(a,b.z,c,d,e))return!1
return A.We(a,A.xZ(a,b),c,d,e)}if(s===7){t=A.We(a,u.P,c,d,e)
return t&&A.We(a,b.z,c,d,e)}if(q===8){if(A.We(a,b,c,d.z,e))return!0
return A.We(a,b,c,A.xZ(a,d),e)}if(q===7){t=A.We(a,b,c,u.P,e)
return t||A.We(a,b,c,d.z,e)}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!A.We(a,l,c,k,e)||!A.We(a,k,e,l,c))return!1}return A.bO(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return A.bO(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.pG(a,b,c,d,e)}return!1},
bO(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.We(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.We(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.We(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.We(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.We(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
pG(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.z,l=d.z
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.cE(a,b,s[p])
return A.SW(a,q,null,c,d.Q,e)}o=b.Q
n=d.Q
return A.SW(a,o,null,c,n,e)},
SW(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.We(a,s,d,r,f))return!1}return!0},
lR(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!A.A8(a))if(s!==7)if(!(s===6&&A.lR(a.z)))t=s===8&&A.lR(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cc(a){var t
if(!A.A8(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
A8(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
Ix(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
vU(a){return a>0?new Array(a):v.typeUniverse.sEA},
Jc:function Jc(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ET:function ET(){this.c=this.b=this.a=null},
u9:function u9(){},
iM:function iM(a){this.a=a},
o(a){if(a instanceof A.t)return a.Z(0)
return"Instance of '"+A.M(a)+"'"},
K(a,b){var t=A.ev(a)
return t},
ev(a){var t,s,r=[]
for(t=new A.G(a,a.a.length),s=A.p(t).c;t.F();)r.push(s.a(t.d))
return r},
k(a,b,c){var t,s=new J.m(b,b.length)
if(!s.F())return a
t=A.p(s).c
if(c.length===0){do a+=A.d(t.a(s.d))
while(s.F())}else{a+=A.d(t.a(s.d))
for(;s.F();)a=a+c+A.d(t.a(s.d))}return a},
u(a){if(typeof a=="number"||A.r(a)||a==null)return J.j(a)
if(typeof a=="string")return JSON.stringify(a)
return A.o(a)},
hV(a){return new A.C6(a)},
xY(a){return new A.AT(!1,null,null,a)},
C3(a){var t=null
return new A.bJ(t,t,!1,t,t,a)},
y(a){return new A.ds(a)},
a(a){return new A.UV(a)},
Ge:function Ge(){},
C6:function C6(a){this.a=a},
B:function B(){},
AT:function AT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ds:function ds(a){this.a=a},
UV:function UV(a){this.a=a},
t7:function t7(a){this.a=a},
cX:function cX(){},
c8:function c8(){},
Mh:function Mh(){},
Rn:function Rn(a){this.a=a},
qE:function qE(){},
Gh:function Gh(){},
fY:function fY(){},
Ny:function Ny(){},
Nh:function Nh(){},
cv:function cv(){},
D0:function D0(){},
KV:function KV(){},
mg:function mg(){},
qu:function qu(){},
A3:function A3(){},
J9:function J9(){},
FN:function FN(){},
ZP:function ZP(){},
Pn:function Pn(){},
P0:function P0(){},
Lx:function Lx(){},
j0:function j0(){},
GZ:function GZ(){},
Fm:function Fm(){},
lf:function lf(){},
OF:function OF(){},
lZ:function lZ(){},
rw:function rw(){},
pM:function pM(){},
po:function po(){},
kH:function kH(){},
yG:function yG(){},
Vg:function Vg(){},
Jt:function Jt(){},
AZ:function AZ(){},
QI:function QI(){},
Fh:function Fh(){},
U0:function U0(){},
HN:function HN(){},
L7:function L7(){},
Zs:function Zs(){},
Wf:function Wf(){},
Iu:function Iu(){},
D6:function D6(){},
Ov:function Ov(){},
tB:function tB(){},
XC:function XC(){},
wF:function wF(){},
KA:function KA(){},
uP:function uP(){},
k2:function k2(){},
c6:function c6(){},
Bs:function Bs(){},
ps:function ps(){},
LU:function LU(){},
Tv:function Tv(){},
Rd:function Rd(){},
qc:function qc(){},
E2(){var t=["January","February","March","April","May","June"],s={type:"line",data:{labels:t,datasets:[{backgroundColor:"rgba(220,220,220,0.2)",data:A.K(new A.A(t,new A.e(B.pr)),!0),label:"My First dataset"},{backgroundColor:"rgba(151,187,205,0.2)",data:A.K(new A.A(t,new A.L(B.pr)),!0),label:"My Second dataset"}]},options:{responsive:!0}}
new Chart.Chart(u.E.a(document.querySelector("#canvas")),s)},
e:function e(a){this.a=a},
L:function L(a){this.a=a},
pR(a){return A.v(new A.n("Field '"+a+"' has been assigned during initialization."))},
I(a,b,c){var t,s
if(A.h(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
$.x.push(a)
try{A.D(a,t)}finally{$.x.pop()}s=A.k(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
WE(a,b,c){var t,s
if(A.h(a))return b+"..."+c
t=new A.Rn(b)
$.x.push(a)
try{s=t
s.a=A.k(s.a,a,", ")}finally{$.x.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
h(a){var t,s
for(t=$.x.length,s=0;s<t;++s)if(a===$.x[s])return!0
return!1},
D(a,b){var t,s,r,q,p,o,n,m=new A.G(a,a.a.length),l=A.p(m).c,k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!m.F())return
t=A.d(l.a(m.d))
b.push(t)
k+=t.length+2;++j}if(!m.F()){if(j<=5)return
s=b.pop()
r=b.pop()}else{q=l.a(m.d);++j
if(!m.F()){if(j<=4){b.push(A.d(q))
return}s=A.d(q)
r=b.pop()
k+=s.length+2}else{p=l.a(m.d);++j
for(;m.F();q=p,p=o){o=l.a(m.d);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}r=A.d(q)
s=A.d(p)
k+=s.length+r.length+4}}if(j>b.length+2){k+=5
n="..."}else n=null
while(!0){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(n==null){k+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)}},J={
Qu(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ks(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.Bv==null){A.XD()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.y("Return interceptor for "+A.d(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.zm
if(p==null)p=$.zm=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.w3(a)
if(q!=null)return q
if(typeof a=="function")return B.DG
t=Object.getPrototypeOf(a)
if(t==null)return B.ZQ
if(t===Object.prototype)return B.ZQ
if(typeof r=="function"){p=$.zm
if(p==null)p=$.zm=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.vB,enumerable:false,writable:true,configurable:true})
return B.vB}return B.vB},
Ep(a){a.fixed$length=Array
return a},
i(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bU.prototype
return J.kD.prototype}if(typeof a=="string")return J.Dr.prototype
if(a==null)return J.CD.prototype
if(typeof a=="boolean")return J.yE.prototype
if(a.constructor==Array)return J.jd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof A.Mh)return a
return J.ks(a)},
j(a){return J.i(a).Z(a)},
vB:function vB(){},
yE:function yE(){},
CD:function CD(){},
MF:function MF(){},
iC:function iC(){},
kd:function kd(){},
c5:function c5(){},
jd:function jd(){},
Po:function Po(){},
m:function m(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
qI:function qI(){},
bU:function bU(){},
kD:function kD(){},
Dr:function Dr(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.FK.prototype={}
J.vB.prototype={
Z(a){return"Instance of '"+A.M(a)+"'"}}
J.yE.prototype={
Z(a){return String(a)}}
J.CD.prototype={
Z(a){return"null"}}
J.MF.prototype={
Z(a){return String(a)},
$iD6:1,
$iXC:1,
$iwF:1}
J.iC.prototype={}
J.kd.prototype={}
J.c5.prototype={
Z(a){var t=a[$.w()]
if(t==null)return this.t(a)
return"JavaScript function for "+J.j(t)}}
J.jd.prototype={
Z(a){return A.WE(a,"[","]")}}
J.Po.prototype={}
J.m.prototype={
F(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.b(A.l(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.qI.prototype={
Z(a){if(a===0&&1/a<0)return"-0.0"
else return""+a}}
J.bU.prototype={}
J.kD.prototype={}
J.Dr.prototype={
h(a,b){return a+b},
Z(a){return a},
$iqU:1}
A.n.prototype={
Z(a){var t="LateInitializationError: "+this.a
return t}}
A.bQ.prototype={}
A.aL.prototype={}
A.G.prototype={
F(){var t,s=this,r=s.a,q=r.a,p=q.length
if(s.b!==p)throw A.b(A.a(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=r.b.$1(q[t]);++s.c
return!0}}
A.A.prototype={}
A.t.prototype={
Z(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.NQ(s==null?"unknown":s)+"'"},
gKu(){return this},
$C:"$1",
$R:1,
$D:null}
A.E1.prototype={$C:"$2",$R:2}
A.lc.prototype={}
A.zx.prototype={
Z(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.NQ(t)+"'"}}
A.rT.prototype={
Z(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.M(this.a)+"'")}}
A.Eq.prototype={
Z(a){return"RuntimeError: "+this.a}}
A.dC.prototype={
$1(a){return this.a(a)}}
A.wN.prototype={
$2(a,b){return this.a(a,b)}}
A.VX.prototype={
$1(a){return this.a(a)}}
A.Jc.prototype={
CT(a){return A.cE(v.typeUniverse,this,a)},
Kq(a){return A.v5(v.typeUniverse,this,a)}}
A.ET.prototype={}
A.u9.prototype={
Z(a){return this.a}}
A.iM.prototype={}
A.Ge.prototype={}
A.C6.prototype={
Z(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.u(t)
return"Assertion failed"}}
A.B.prototype={
Z(a){return"Throw of null."}}
A.AT.prototype={
gL(){return"Invalid argument"+(!this.a?"(s)":"")},
gu(){return""},
Z(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gL()+p+n
if(!r.a)return m
t=r.gu()
s=A.u(r.b)
return m+t+": "+s}}
A.bJ.prototype={
gL(){return"RangeError"},
gu(){var t,s=this.e
if(s==null)t=""
else t=": Not greater than or equal to "+A.d(s)
return t}}
A.ds.prototype={
Z(a){var t="UnimplementedError: "+this.a
return t}}
A.UV.prototype={
Z(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.u(t)+"."}}
A.t7.prototype={
Z(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
A.cX.prototype={
Z(a){return A.I(this,"(",")")}}
A.c8.prototype={
Z(a){return"null"}}
A.Mh.prototype={$iMh:1,
Z(a){return"Instance of '"+A.M(this)+"'"},
toString(){return this.Z(this)}}
A.Rn.prototype={
Z(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.qE.prototype={}
A.Gh.prototype={
Z(a){var t=String(a)
t.toString
return t}}
A.fY.prototype={
Z(a){var t=String(a)
t.toString
return t}}
A.Ny.prototype={$iNy:1}
A.Nh.prototype={
Z(a){var t=String(a)
t.toString
return t}}
A.cv.prototype={
Z(a){var t=a.localName
t.toString
return t}}
A.D0.prototype={}
A.KV.prototype={
Z(a){var t=a.nodeValue
return t==null?this.U(a):t}}
A.mg.prototype={
j(a){if(a<=0||a>4294967296)throw A.b(A.C3("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.qu.prototype={}
A.A3.prototype={}
A.J9.prototype={}
A.FN.prototype={}
A.ZP.prototype={}
A.Pn.prototype={}
A.P0.prototype={}
A.Lx.prototype={}
A.j0.prototype={}
A.GZ.prototype={}
A.Fm.prototype={}
A.lf.prototype={}
A.OF.prototype={}
A.lZ.prototype={}
A.rw.prototype={}
A.pM.prototype={}
A.po.prototype={}
A.kH.prototype={}
A.yG.prototype={}
A.Vg.prototype={}
A.Jt.prototype={}
A.AZ.prototype={}
A.QI.prototype={}
A.Fh.prototype={}
A.U0.prototype={}
A.HN.prototype={}
A.L7.prototype={}
A.Zs.prototype={}
A.Wf.prototype={}
A.Iu.prototype={}
A.D6.prototype={}
A.Ov.prototype={}
A.tB.prototype={}
A.XC.prototype={}
A.wF.prototype={}
A.KA.prototype={}
A.uP.prototype={}
A.k2.prototype={}
A.c6.prototype={}
A.Bs.prototype={}
A.ps.prototype={}
A.LU.prototype={}
A.Tv.prototype={}
A.Rd.prototype={}
A.qc.prototype={}
A.e.prototype={
$1(a){return this.a.j(100)}}
A.L.prototype={
$1(a){return this.a.j(100)}};(function aliases(){var t=J.vB.prototype
t.U=t.Z
t=J.MF.prototype
t.t=t.Z})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(A.Mh,null)
s(A.Mh,[A.FK,J.vB,J.m,A.Ge,A.cX,A.G,A.t,A.Jc,A.ET,A.c8,A.Rn,A.mg])
s(J.vB,[J.yE,J.CD,J.MF,J.jd,J.qI,J.Dr,A.D0,A.Nh])
s(J.MF,[J.iC,J.kd,J.c5,A.qu,A.A3,A.J9,A.FN,A.ZP,A.Pn,A.P0,A.Lx,A.j0,A.GZ,A.Fm,A.lf,A.OF,A.lZ,A.rw,A.pM,A.po,A.kH,A.yG,A.Vg,A.Jt,A.AZ,A.QI,A.Fh,A.U0,A.HN,A.L7,A.Zs,A.Wf,A.Iu,A.D6,A.Ov,A.tB,A.XC,A.wF,A.KA,A.uP,A.k2,A.c6,A.Bs,A.ps,A.LU,A.Tv,A.Rd,A.qc])
t(J.Po,J.jd)
s(J.qI,[J.bU,J.kD])
s(A.Ge,[A.n,A.Eq,A.u9,A.C6,A.B,A.AT,A.ds,A.UV,A.t7])
t(A.bQ,A.cX)
t(A.aL,A.bQ)
t(A.A,A.aL)
s(A.t,[A.E1,A.lc,A.dC,A.VX,A.e,A.L])
s(A.lc,[A.zx,A.rT])
t(A.wN,A.E1)
t(A.iM,A.u9)
t(A.bJ,A.AT)
t(A.KV,A.D0)
t(A.cv,A.KV)
t(A.qE,A.cv)
s(A.qE,[A.Gh,A.fY,A.Ny])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{KN:"int",CP:"double",U1:"num",qU:"String",a2:"bool",c8:"Null",zM:"List"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.xb(v.typeUniverse,JSON.parse('{"iC":"MF","kd":"MF","c5":"MF","D6":"MF","XC":"MF","wF":"MF","qu":"MF","A3":"MF","J9":"MF","FN":"MF","ZP":"MF","Pn":"MF","P0":"MF","Lx":"MF","j0":"MF","GZ":"MF","Fm":"MF","lf":"MF","OF":"MF","lZ":"MF","rw":"MF","pM":"MF","po":"MF","kH":"MF","yG":"MF","Vg":"MF","Jt":"MF","AZ":"MF","QI":"MF","Fh":"MF","U0":"MF","HN":"MF","L7":"MF","Zs":"MF","Wf":"MF","Iu":"MF","Ov":"MF","tB":"MF","KA":"MF","uP":"MF","k2":"MF","c6":"MF","Bs":"MF","ps":"MF","LU":"MF","Tv":"MF","Rd":"MF","qc":"MF","MF":{"D6":["1&"],"XC":[],"wF":[]},"Dr":{"qU":[]}}'))
A.FF(v.typeUniverse,JSON.parse('{"jd":1,"Po":1,"m":1,"bQ":1,"aL":1,"G":1,"A":2,"cX":1,"D6":1,"uP":1}'))
var u=(function rtii(){var t=A.q7
return{E:t("Ny"),Z:t("EH"),b:t("jd<@>"),T:t("CD"),g:t("c5"),P:t("c8"),K:t("Mh"),N:t("qU"),o:t("kd"),y:t("a2"),i:t("CP"),S:t("KN"),A:t("0&*"),_:t("Mh*"),O:t("b8<c8>?"),X:t("Mh?"),H:t("U1")}})();(function constants(){B.Ok=J.vB.prototype
B.xB=J.Dr.prototype
B.DG=J.c5.prototype
B.ZQ=J.iC.prototype
B.vB=J.kd.prototype
B.O4=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.Yq=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.wb=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.KU=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.fQ=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.dk=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.xi=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.i7=function(hooks) { return hooks; }

B.pr=new A.mg()})();(function staticFields(){$.zm=null
$.yj=0
$.i0=null
$.Hb=null
$.NF=null
$.c=null
$.x7=null
$.nw=null
$.vv=null
$.Bv=null
$.x=[]})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fa","w",function(){return A.E("_$dart_dartClosure")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.vB,DOMError:J.vB,ErrorEvent:J.vB,Event:J.vB,InputEvent:J.vB,SubmitEvent:J.vB,MediaError:J.vB,NavigatorUserMediaError:J.vB,OverconstrainedError:J.vB,PositionError:J.vB,GeolocationPositionError:J.vB,SensorErrorEvent:J.vB,SpeechRecognitionError:J.vB,SQLError:J.vB,HTMLAudioElement:A.qE,HTMLBRElement:A.qE,HTMLBaseElement:A.qE,HTMLBodyElement:A.qE,HTMLButtonElement:A.qE,HTMLContentElement:A.qE,HTMLDListElement:A.qE,HTMLDataElement:A.qE,HTMLDataListElement:A.qE,HTMLDetailsElement:A.qE,HTMLDialogElement:A.qE,HTMLDivElement:A.qE,HTMLEmbedElement:A.qE,HTMLFieldSetElement:A.qE,HTMLFormElement:A.qE,HTMLHRElement:A.qE,HTMLHeadElement:A.qE,HTMLHeadingElement:A.qE,HTMLHtmlElement:A.qE,HTMLIFrameElement:A.qE,HTMLImageElement:A.qE,HTMLInputElement:A.qE,HTMLLIElement:A.qE,HTMLLabelElement:A.qE,HTMLLegendElement:A.qE,HTMLLinkElement:A.qE,HTMLMapElement:A.qE,HTMLMediaElement:A.qE,HTMLMenuElement:A.qE,HTMLMetaElement:A.qE,HTMLMeterElement:A.qE,HTMLModElement:A.qE,HTMLOListElement:A.qE,HTMLObjectElement:A.qE,HTMLOptGroupElement:A.qE,HTMLOptionElement:A.qE,HTMLOutputElement:A.qE,HTMLParagraphElement:A.qE,HTMLParamElement:A.qE,HTMLPictureElement:A.qE,HTMLPreElement:A.qE,HTMLProgressElement:A.qE,HTMLQuoteElement:A.qE,HTMLScriptElement:A.qE,HTMLSelectElement:A.qE,HTMLShadowElement:A.qE,HTMLSlotElement:A.qE,HTMLSourceElement:A.qE,HTMLSpanElement:A.qE,HTMLStyleElement:A.qE,HTMLTableCaptionElement:A.qE,HTMLTableCellElement:A.qE,HTMLTableDataCellElement:A.qE,HTMLTableHeaderCellElement:A.qE,HTMLTableColElement:A.qE,HTMLTableElement:A.qE,HTMLTableRowElement:A.qE,HTMLTableSectionElement:A.qE,HTMLTemplateElement:A.qE,HTMLTextAreaElement:A.qE,HTMLTimeElement:A.qE,HTMLTitleElement:A.qE,HTMLTrackElement:A.qE,HTMLUListElement:A.qE,HTMLUnknownElement:A.qE,HTMLVideoElement:A.qE,HTMLDirectoryElement:A.qE,HTMLFontElement:A.qE,HTMLFrameElement:A.qE,HTMLFrameSetElement:A.qE,HTMLMarqueeElement:A.qE,HTMLElement:A.qE,HTMLAnchorElement:A.Gh,HTMLAreaElement:A.fY,HTMLCanvasElement:A.Ny,DOMException:A.Nh,SVGAElement:A.cv,SVGAnimateElement:A.cv,SVGAnimateMotionElement:A.cv,SVGAnimateTransformElement:A.cv,SVGAnimationElement:A.cv,SVGCircleElement:A.cv,SVGClipPathElement:A.cv,SVGDefsElement:A.cv,SVGDescElement:A.cv,SVGDiscardElement:A.cv,SVGEllipseElement:A.cv,SVGFEBlendElement:A.cv,SVGFEColorMatrixElement:A.cv,SVGFEComponentTransferElement:A.cv,SVGFECompositeElement:A.cv,SVGFEConvolveMatrixElement:A.cv,SVGFEDiffuseLightingElement:A.cv,SVGFEDisplacementMapElement:A.cv,SVGFEDistantLightElement:A.cv,SVGFEFloodElement:A.cv,SVGFEFuncAElement:A.cv,SVGFEFuncBElement:A.cv,SVGFEFuncGElement:A.cv,SVGFEFuncRElement:A.cv,SVGFEGaussianBlurElement:A.cv,SVGFEImageElement:A.cv,SVGFEMergeElement:A.cv,SVGFEMergeNodeElement:A.cv,SVGFEMorphologyElement:A.cv,SVGFEOffsetElement:A.cv,SVGFEPointLightElement:A.cv,SVGFESpecularLightingElement:A.cv,SVGFESpotLightElement:A.cv,SVGFETileElement:A.cv,SVGFETurbulenceElement:A.cv,SVGFilterElement:A.cv,SVGForeignObjectElement:A.cv,SVGGElement:A.cv,SVGGeometryElement:A.cv,SVGGraphicsElement:A.cv,SVGImageElement:A.cv,SVGLineElement:A.cv,SVGLinearGradientElement:A.cv,SVGMarkerElement:A.cv,SVGMaskElement:A.cv,SVGMetadataElement:A.cv,SVGPathElement:A.cv,SVGPatternElement:A.cv,SVGPolygonElement:A.cv,SVGPolylineElement:A.cv,SVGRadialGradientElement:A.cv,SVGRectElement:A.cv,SVGScriptElement:A.cv,SVGSetElement:A.cv,SVGStopElement:A.cv,SVGStyleElement:A.cv,SVGElement:A.cv,SVGSVGElement:A.cv,SVGSwitchElement:A.cv,SVGSymbolElement:A.cv,SVGTSpanElement:A.cv,SVGTextContentElement:A.cv,SVGTextElement:A.cv,SVGTextPathElement:A.cv,SVGTextPositioningElement:A.cv,SVGTitleElement:A.cv,SVGUseElement:A.cv,SVGViewElement:A.cv,SVGGradientElement:A.cv,SVGComponentTransferFunctionElement:A.cv,SVGFEDropShadowElement:A.cv,SVGMPathElement:A.cv,Element:A.cv,EventTarget:A.D0,Document:A.KV,HTMLDocument:A.KV,Node:A.KV})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLFormElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLSelectElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,EventTarget:false,Document:true,HTMLDocument:true,Node:false})})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.E2
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()