(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
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
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.eQ(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.qm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.qm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.qm(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={FK:function FK(){},bQ:function bQ(){},aL:function aL(){},a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},A:function A(a,b){this.a=a
this.b=b},
NQ:function(a){var t,s=H.Jg(a)
if(s!=null)return s
t="minified:"+a
return t},
d:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.n(a)
if(typeof t!="string")throw H.b(H.G(a))
return t},
l:function(a){var t=H.H(a)
return t},
H:function(a){var t,s,r
if(a instanceof P.a)return H.m(H.z(a),null)
if(J.i(a)===C.Ok||u.o.b(a)){t=C.O4(a)
if(H.f(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.f(r))return r}}return H.m(H.z(a),null)},
f:function(a){var t=a!=="Object"&&a!==""
return t},
G:function(a){return new P.u(!0,a,null,null)},
b:function(a){var t
if(a==null)a=new P.E()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.J})
t.name=""}else t.toString=H.J
return t},
J:function(){return J.n(this.dartException)},
vh:function(a){throw H.b(a)},
K:function(a){throw H.b(P.a4(a))},
iA:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.zx().constructor.prototype):Object.create(new H.rT(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.yj
$.yj=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}j.constructor=t
t.prototype=j
if(!e){r=H.bx(a,l,f)
r.$reflectionInfo=d}else{j.$static_name=g
r=l}q=H.im(d,e,f)
j.$S=q
j[k]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.bx(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return t},
im:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.Bp,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
t=c?H.PW:H.Tn
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.b("Error in functionType of tearoff")},
vq:function(a,b,c,d){var t=H.DV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bx:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.Hf(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.vq(s,!q,t,b)
if(s===0){q=$.yj
$.yj=q+1
o="self"+H.d(q)
return new Function("return function(){var "+o+" = this."+H.d(H.oN())+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.yj
$.yj=q+1
n+=H.d(q)
return new Function("return function("+n+"){return this."+H.d(H.oN())+"."+H.d(t)+"("+n+");}")()},
Z4:function(a,b,c,d){var t=H.DV,s=H.yS
switch(b?-1:a){case 0:throw H.b(H.Ef("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
Hf:function(a,b){var t,s,r,q,p,o,n=H.oN(),m=$.P4
if(m==null)m=$.P4=H.E2("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.Z4(s,!q,t,b)
if(s===1){q="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+m+");"
p=$.yj
$.yj=p+1
return new Function(q+H.d(p)+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+m+", "+o+");"
p=$.yj
$.yj=p+1
return new Function(q+H.d(p)+"}")()},
qm:function(a,b,c,d,e,f,g){return H.iA(a,b,c,d,!!e,!!f,g)},
Tn:function(a,b){return H.cE(v.typeUniverse,H.z(a.a),b)},
PW:function(a,b){return H.cE(v.typeUniverse,H.z(a.c),b)},
DV:function(a){return a.a},
yS:function(a){return a.c},
oN:function(){var t=$.mJ
return t==null?$.mJ=H.E2("self"):t},
E2:function(a){var t,s,r,q=new H.rT("self","target","receiver","name"),p=J.Ep(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.b(P.xY("Field name "+a+" not found."))},
eQ:function(a){throw H.b(new P.t(a))},
Ef:function(a){return new H.Eq(a)},
Yg:function(a){return v.getIsolateTag(a)},
iw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j:function(a){var t,s,r,q,p,o=$.NF.$1(a),n=$.nw[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.vv[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.TX.$2(a,o)
if(r!=null){n=$.nw[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.vv[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.Va(t)
$.nw[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.vv[o]=t
return t}if(q==="-"){p=H.Va(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.Lc(a,t)
if(q==="*")throw H.b(P.SY(o))
if(v.leafTags[o]===true){p=H.Va(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.Lc(a,t)},
Lc:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.Qu(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
Va:function(a){return J.Qu(a,!1,null,!!a.$iXj)},
VF:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.Va(t)
else return J.Qu(t,c,null,null)},
XD:function(){if(!0===$.Bv)return
$.Bv=!0
H.Z1()},
Z1:function(){var t,s,r,q,p,o,n,m
$.nw=Object.create(null)
$.vv=Object.create(null)
H.kO()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.x7.$1(p)
if(o!=null){n=H.VF(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
kO:function(){var t,s,r,q,p,o,n=C.Yq()
n=H.ud(C.KU,H.ud(C.fQ,H.ud(C.i7,H.ud(C.i7,H.ud(C.xi,H.ud(C.dk,H.ud(C.wb(C.O4),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.NF=new H.dC(q)
$.TX=new H.wN(p)
$.x7=new H.VX(o)},
ud:function(a,b){return a(b)||b},
v:function v(){},
lc:function lc(){},
zx:function zx(){},
rT:function rT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Eq:function Eq(a){this.a=a},
dC:function dC(a){this.a=a},
wN:function wN(a){this.a=a},
VX:function VX(a){this.a=a},
cz:function(a,b){var t=b.c
return t==null?b.c=H.Bc(a,b.z,!0):t},
xZ:function(a,b){var t=b.c
return t==null?b.c=H.Q2(a,"b8",[b.z]):t},
Q1:function(a){var t=a.y
if(t===6||t===7||t===8)return H.Q1(a.z)
return t===11||t===12},
mD:function(a){return a.cy},
q7:function(a){return H.Ew(v.typeUniverse,a,!1)},
PL:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.PL(a,t,c,a0)
if(s===t)return b
return H.SO(a,s,!0)
case 7:t=b.z
s=H.PL(a,t,c,a0)
if(s===t)return b
return H.Bc(a,s,!0)
case 8:t=b.z
s=H.PL(a,t,c,a0)
if(s===t)return b
return H.LN(a,s,!0)
case 9:r=b.Q
q=H.bZ(a,r,c,a0)
if(q===r)return b
return H.Q2(a,b.z,q)
case 10:p=b.z
o=H.PL(a,p,c,a0)
n=b.Q
m=H.bZ(a,n,c,a0)
if(o===p&&m===n)return b
return H.ap(a,o,m)
case 11:l=b.z
k=H.PL(a,l,c,a0)
j=b.Q
i=H.qT(a,j,c,a0)
if(k===l&&i===j)return b
return H.Nf(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bZ(a,h,c,a0)
p=b.z
o=H.PL(a,p,c,a0)
if(g===h&&o===p)return b
return H.DS(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.b(P.hV("Attempted to substitute unexpected RTI kind "+d))}},
bZ:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.PL(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
vO:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.PL(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
qT:function(a,b,c,d){var t,s=b.a,r=H.bZ(a,s,c,d),q=b.b,p=H.bZ(a,q,c,d),o=b.c,n=H.vO(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.ET()
t.a=r
t.b=p
t.c=n
return t},
JS:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.Bp(t)
return a.$S()}return null},
Ue:function(a,b){var t
if(H.Q1(b))if(a instanceof H.v){t=H.JS(a)
if(t!=null)return t}return H.z(a)},
z:function(a){var t
if(a instanceof P.a){t=a.$ti
return t!=null?t:H.VU(a)}if(Array.isArray(a))return H.t6(a)
return H.VU(J.i(a))},
t6:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
Lh:function(a){var t=a.$ti
return t!=null?t:H.VU(a)},
VU:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.r9(a,t)},
r9:function(a,b){var t=a instanceof H.v?a.__proto__.__proto__.constructor:b,s=H.ai(v.typeUniverse,t.name)
b.$ccache=s
return s},
Bp:function(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.Ew(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
JJ:function(a){var t,s,r=this,q=u.K
if(r===q)return H.RE(r,a,H.ke)
if(!H.A8(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.RE(r,a,H.Iw)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.ok
else if(t===u.i||t===u.H)s=H.KH
else if(t===u.N)s=H.MM
else s=t===u.y?H.r:null
if(s!=null)return H.RE(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.cc)){r.r="$i"+q
return H.RE(r,a,H.t4)}}else if(q===7)return H.RE(r,a,H.AQ)
return H.RE(r,a,H.YO)},
RE:function(a,b,c){a.b=c
return a.b(b)},
Au:function(a){var t,s,r=this
H.Oz
if(!H.A8(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.hn
else if(r===u.K)s=H.Ti
else s=H.l4
r.a=s
return r.a(a)},
Qj:function(a){var t,s=a.y
if(!H.A8(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
YO:function(a){var t=this
if(a==null)return H.Qj(t)
return H.We(v.typeUniverse,H.Ue(a,t),null,t,null)},
AQ:function(a){if(a==null)return!0
return this.z.b(a)},
t4:function(a){var t=this,s=t.r
if(a instanceof P.a)return!!a[s]
return!!J.i(a)[s]},
Oz:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.m4(a,t)},
l4:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.m4(a,t)},
m4:function(a,b){throw H.b(H.Zc(H.WK(a,H.Ue(a,b),H.m(b,null))))},
WK:function(a,b,c){var t=P.h(a),s=H.m(b==null?H.z(a):b,null)
return t+": type '"+H.d(s)+"' is not a subtype of type '"+H.d(c)+"'"},
Zc:function(a){return new H.iM("TypeError: "+a)},
Lz:function(a,b){return new H.iM("TypeError: "+H.WK(a,null,b))},
ke:function(a){return a!=null},
Ti:function(a){return a},
Iw:function(a){return!0},
hn:function(a){return a},
r:function(a){return!0===a||!1===a},
p8:function(a){if(!0===a||!1===a)return a
throw H.b(H.Lz(a,"bool"))},
y8:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.b(H.Lz(a,"bool"))},
M4:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.b(H.Lz(a,"bool?"))},
jQ:function(a){if(typeof a=="number")return a
throw H.b(H.Lz(a,"double"))},
tF:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.Lz(a,"double"))},
Qk:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.Lz(a,"double?"))},
ok:function(a){return typeof a=="number"&&Math.floor(a)===a},
IZ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.Lz(a,"int"))},
kY:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.Lz(a,"int"))},
Uc:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.Lz(a,"int?"))},
KH:function(a){return typeof a=="number"},
z5:function(a){if(typeof a=="number")return a
throw H.b(H.Lz(a,"num"))},
oI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.Lz(a,"num"))},
cU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.Lz(a,"num?"))},
MM:function(a){return typeof a=="string"},
Bt:function(a){if(typeof a=="string")return a
throw H.b(H.Lz(a,"String"))},
hN:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.Lz(a,"String"))},
ra:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.Lz(a,"String?"))},
q:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.xB.h(s,H.m(a[r],b))
return t},
bI:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=[]
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)a4.push("T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a2){m=C.xB.h(m+l,a4[a4.length-1-q])
k=a5[q]
j=k.y
if(!(j===2||j===3||j===4||j===5||k===p))if(!(k===o))i=k===n
else i=!0
else i=!0
if(!i)m+=C.xB.h(" extends ",H.m(k,a4))}m+=">"}else{m=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=H.m(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=C.xB.h(a1,H.m(g[q],a4))
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=C.xB.h(a1,H.m(e[q],a4))
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=J.p(H.m(c[q+2],a4)," ")+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return m+"("+a0+") => "+H.d(a)},
m:function(a,b){var t,s,r,q,p,o,n=a.y
if(n===5)return"erased"
if(n===2)return"dynamic"
if(n===3)return"void"
if(n===1)return"Never"
if(n===4)return"any"
if(n===6){t=H.m(a.z,b)
return t}if(n===7){s=a.z
t=H.m(s,b)
r=s.y
return J.p(r===11||r===12?C.xB.h("(",t)+")":t,"?")}if(n===8)return"FutureOr<"+H.d(H.m(a.z,b))+">"
if(n===9){q=H.C(a.z)
p=a.Q
return p.length!==0?q+("<"+H.q(p,b)+">"):q}if(n===11)return H.bI(a,b,null)
if(n===12)return H.bI(a.z,b,a.Q)
if(n===13){b.toString
o=a.z
return b[b.length-1-o]}return"?"},
C:function(a){var t,s=H.Jg(a)
if(s!=null)return s
t="minified:"+a
return t},
Qo:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ai:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.Ew(a,b,!1)
else if(typeof n=="number"){t=n
s=H.mZ(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.Q2(a,b,r)
o[b]=p
return p}else return n},
xb:function(a,b){return H.Ix(a.tR,b)},
FF:function(a,b){return H.Ix(a.eT,b)},
Ew:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.eT(H.ow(a,null,b,c))
s.set(b,t)
return t},
cE:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.eT(H.ow(a,b,c,!0))
r.set(c,s)
return s},
v5:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.ap(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
BD:function(a,b){b.a=H.Au
b.b=H.JJ
return b},
mZ:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.Jc(null,null)
t.y=b
t.cy=c
s=H.BD(a,t)
a.eC.set(c,s)
return s},
SO:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.Z7(a,b,s,c)
a.eC.set(s,t)
return t},
Z7:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.A8(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.Jc(null,null)
r.y=6
r.z=b
r.cy=c
return H.BD(a,r)},
Bc:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.ll(a,b,s,c)
a.eC.set(s,t)
return t},
ll:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.A8(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.lR(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.lR(r.z))return r
else return H.cz(a,b)}}q=new H.Jc(null,null)
q.y=7
q.z=b
q.cy=c
return H.BD(a,q)},
LN:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.eV(a,b,s,c)
a.eC.set(s,t)
return t},
eV:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.A8(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.Q2(a,"b8",[b])
else if(b===u.P||b===u.T)return u.O}r=new H.Jc(null,null)
r.y=8
r.z=b
r.cy=c
return H.BD(a,r)},
Hc:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.Jc(null,null)
t.y=13
t.z=b
t.cy=r
s=H.BD(a,t)
a.eC.set(r,s)
return s},
Ux:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
S4:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
Q2:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.Ux(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.Jc(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.BD(a,s)
a.eC.set(q,r)
return r},
ap:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.Ux(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.Jc(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.BD(a,p)
a.eC.set(r,o)
return o},
Nf:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.Ux(n)
if(k>0){t=m>0?",":""
s=H.Ux(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.S4(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.Jc(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.BD(a,p)
a.eC.set(r,s)
return s},
DS:function(a,b,c,d){var t,s=b.cy+("<"+H.Ux(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.hw(a,b,c,s,d)
a.eC.set(s,t)
return t},
hw:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.PL(a,b,s,0)
n=H.bZ(a,c,s,0)
return H.DS(a,o,n,c!==n)}}m=new H.Jc(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.BD(a,m)},
ow:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eT:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.Al(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.R8(a,s,h,g,!1)
else if(r===46)s=H.R8(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.KQ(a.u,a.e,g.pop()))
break
case 94:g.push(H.Hc(a.u,g.pop()))
break
case 35:g.push(H.mZ(a.u,5,"#"))
break
case 64:g.push(H.mZ(a.u,2,"@"))
break
case 126:g.push(H.mZ(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.cH(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.Q2(q,o,p))
else{n=H.KQ(q,a.e,o)
switch(n.y){case 11:g.push(H.DS(q,n,p,a.n))
break
default:g.push(H.ap(q,n,p))
break}}break
case 38:H.I3(a,g)
break
case 42:m=a.u
g.push(H.SO(m,H.KQ(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.Bc(m,H.KQ(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.LN(m,H.KQ(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.ET()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.cH(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.Nf(q,H.KQ(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.cH(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.Be(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.KQ(a.u,a.e,i)},
Al:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
R8:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.Qo(t,p.z)[q]
if(o==null)H.vh('No "'+q+'" in "'+H.mD(p)+'"')
d.push(H.cE(t,p,o))}else d.push(q)
return n},
I3:function(a,b){var t=b.pop()
if(0===t){b.push(H.mZ(a.u,1,"0&"))
return}if(1===t){b.push(H.mZ(a.u,4,"1&"))
return}throw H.b(P.hV("Unexpected extended operation "+H.d(t)))},
KQ:function(a,b,c){if(typeof c=="string")return H.Q2(a,c,a.sEA)
else if(typeof c=="number")return H.TV(a,b,c)
else return c},
cH:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.KQ(a,b,c[t])},
Be:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.KQ(a,b,c[t])},
TV:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.b(P.hV("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.b(P.hV("Bad index "+c+" for "+b.w(0)))},
We:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.A8(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.A8(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.We(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.We(a,b.z,c,d,e)
if(q===6){t=d.z
return H.We(a,b,c,t,e)}if(s===8){if(!H.We(a,b.z,c,d,e))return!1
return H.We(a,H.xZ(a,b),c,d,e)}if(s===7){t=H.We(a,b.z,c,d,e)
return t}if(q===8){if(H.We(a,b,c,d.z,e))return!0
return H.We(a,b,c,H.xZ(a,d),e)}if(q===7){t=H.We(a,b,c,d.z,e)
return t}if(r)return!1
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
if(!H.We(a,l,c,k,e)||!H.We(a,k,e,l,c))return!1}return H.bO(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.bO(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.pG(a,b,c,d,e)}return!1},
bO:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.We(a2,a3.z,a4,a5.z,a6))return!1
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
if(!H.We(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.We(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.We(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!H.We(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
pG:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.We(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.Qo(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.We(a,H.cE(a,b,m[q]),c,s[q],e))return!1
return!0},
lR:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.A8(a))if(s!==7)if(!(s===6&&H.lR(a.z)))t=s===8&&H.lR(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cc:function(a){var t
if(!H.A8(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
A8:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
Ix:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
Jc:function Jc(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ET:function ET(){this.c=this.b=this.a=null},
u9:function u9(){},
iM:function iM(a){this.a=a},
Jg:function(a){return v.mangledGlobalNames[a]}},J={
Qu:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ks:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.Bv==null){H.XD()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.b(P.SY("Return interceptor for "+H.d(t(a,p))))}r=a.constructor
q=r==null?null:r[J.RP()]
if(q!=null)return q
q=H.j(a)
if(q!=null)return q
if(typeof a=="function")return C.DG
t=Object.getPrototypeOf(a)
if(t==null)return C.ZQ
if(t===Object.prototype)return C.ZQ
if(typeof r=="function"){Object.defineProperty(r,J.RP(),{value:C.vB,enumerable:false,writable:true,configurable:true})
return C.vB}return C.vB},
RP:function(){var t=$.F
return t==null?$.F=v.getIsolateTag("_$dart_js"):t},
Ep:function(a){a.fixed$length=Array
return a},
Qc:function(a){if(typeof a=="number")return J.qI.prototype
if(typeof a=="string")return J.Dr.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.kd.prototype
return a},
i:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bU.prototype
return J.VA.prototype}if(typeof a=="string")return J.Dr.prototype
if(a==null)return J.CD.prototype
if(typeof a=="boolean")return J.yE.prototype
if(a.constructor==Array)return J.jd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.a)return a
return J.ks(a)},
n:function(a){return J.i(a).w(a)},
p:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Qc(a).h(a,b)},
vB:function vB(){},
yE:function yE(){},
CD:function CD(){},
MF:function MF(){},
iC:function iC(){},
kd:function kd(){},
c5:function c5(){},
jd:function jd(){},
Po:function Po(){},
c:function c(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
qI:function qI(){},
bU:function bU(){},
VA:function VA(){},
Dr:function Dr(){}},P={
o:function(a){if(a instanceof H.v)return a.w(0)
return"Instance of '"+H.d(H.l(a))+"'"},
B:function(a,b){var t,s,r=[]
for(t=new H.a7(a,a.a.length);t.F();){s=t.d
r.push(s)}return r},
k:function(a,b,c){var t=new J.c(b,b.length)
if(!t.F())return a
if(c.length===0){do a+=H.d(t.d)
while(t.F())}else{a+=H.d(t.d)
for(;t.F();)a=a+c+H.d(t.d)}return a},
h:function(a){if(typeof a=="number"||H.r(a)||null==a)return J.n(a)
if(typeof a=="string")return JSON.stringify(a)
return P.o(a)},
hV:function(a){return new P.C6(a)},
xY:function(a){return new P.u(!1,null,null,a)},
L3:function(a,b,c){return new P.u(!0,a,b,c)},
C3:function(a){var t=null
return new P.bJ(t,t,!1,t,t,a)},
SY:function(a){return new P.ds(a)},
a4:function(a){return new P.UV(a)},
a2:function a2(){},
CP:function CP(){},
Ge:function Ge(){},
C6:function C6(a){this.a=a},
E:function E(){},
u:function u(a,b,c,d){var _=this
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
t:function t(a){this.a=a},
KN:function KN(){},
cX:function cX(){},
zM:function zM(){},
c8:function c8(){},
lf:function lf(){},
a:function a(){},
qU:function qU(){},
M:function M(a){this.a=a},
mg:function mg(){},
I:function(a,b,c){var t,s
if(P.y(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
$.x.push(a)
try{P.D(a,t)}finally{$.x.pop()}s=P.k(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
WE:function(a,b,c){var t,s
if(P.y(a))return b+"..."+c
t=new P.M(b)
$.x.push(a)
try{s=t
s.a=P.k(s.a,a,", ")}finally{$.x.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
y:function(a){var t,s
for(t=$.x.length,s=0;s<t;++s)if(a===$.x[s])return!0
return!1},
D:function(a,b){var t,s,r,q,p,o,n,m=new H.a7(a,a.a.length),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.F())return
t=m.d
s=H.d(t)
b.push(s)
l+=s.length+2;++k}if(!m.F()){if(k<=5)return
r=b.pop()
q=b.pop()}else{p=m.gl();++k
if(!m.F()){if(k<=4){b.push(H.d(p))
return}r=H.d(p)
q=b.pop()
l+=r.length+2}else{o=m.gl();++k
for(;m.F();p=o,o=t){t=m.d;++k
if(k>100){while(!0){if(!(l>75&&k>3))break
l-=b.pop().length+2;--k}b.push("...")
return}}q=H.d(p)
r=H.d(o)
l+=r.length+q.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(q)
b.push(r)}},W={qE:function qE(){},Gh:function Gh(){},fY:function fY(){},Ny:function Ny(){},Nh:function Nh(){},cv:function cv(){},D0:function D0(){},KV:function KV(){}},T={qu:function qu(){},A3:function A3(){},J9:function J9(){},FN:function FN(){},ZP:function ZP(){},Pn:function Pn(){},P0:function P0(){},Lx:function Lx(){},j0:function j0(){},GZ:function GZ(){},Fm:function Fm(){},Ma:function Ma(){},OF:function OF(){},lZ:function lZ(){},rw:function rw(){},pM:function pM(){},po:function po(){},kH:function kH(){},yG:function yG(){},Vg:function Vg(){},Jt:function Jt(){},AZ:function AZ(){},QI:function QI(){},Fh:function Fh(){},U0:function U0(){},HN:function HN(){},L7:function L7(){},Zs:function Zs(){},Wf:function Wf(){},Iu:function Iu(){},D6:function D6(){},Ov:function Ov(){},tB:function tB(){},XC:function XC(){},wF:function wF(){},KA:function KA(){},uP:function uP(){},k2:function k2(){},c6:function c6(){},Bs:function Bs(){},ps:function ps(){},LU:function LU(){},Tv:function Tv(){},Rd:function Rd(){},qc:function qc(){}},U={
Iq:function(){var t=["January","February","March","April","May","June"],s={type:"line",data:{labels:t,datasets:[{backgroundColor:"rgba(220,220,220,0.2)",data:P.B(new H.A(t,new U.e(C.pr)),!0),label:"My First dataset"},{backgroundColor:"rgba(151,187,205,0.2)",data:P.B(new H.A(t,new U.L(C.pr)),!0),label:"My Second dataset"}]},options:{responsive:!0}}
new Chart.Chart(u.B.a(document.querySelector("#canvas")),s)},
e:function e(a){this.a=a},
L:function L(a){this.a=a}}
var w=[C,H,J,P,W,T,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.FK.prototype={}
J.vB.prototype={
w:function(a){return"Instance of '"+H.d(H.l(a))+"'"}}
J.yE.prototype={
w:function(a){return String(a)}}
J.CD.prototype={
w:function(a){return"null"}}
J.MF.prototype={
w:function(a){return String(a)},
$iD6:1,
$iXC:1,
$iwF:1}
J.iC.prototype={}
J.kd.prototype={}
J.c5.prototype={
w:function(a){var t=a[$.w()]
if(t==null)return this.t(a)
return"JavaScript function for "+H.d(J.n(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.jd.prototype={
w:function(a){return P.WE(a,"[","]")}}
J.Po.prototype={}
J.c.prototype={
F:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.b(H.K(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.qI.prototype={
w:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a}}
J.bU.prototype={}
J.VA.prototype={}
J.Dr.prototype={
h:function(a,b){if(typeof b!="string")throw H.b(P.L3(b,null,null))
return a+b},
w:function(a){return a},
$iqU:1}
H.bQ.prototype={}
H.aL.prototype={}
H.a7.prototype={
gl:function(){var t=this.d
return t},
F:function(){var t,s=this,r=s.a,q=r.a,p=q.length
if(s.b!==p)throw H.b(P.a4(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=r.b.$1(q[t]);++s.c
return!0}}
H.A.prototype={}
H.v.prototype={
w:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.NQ(s==null?"unknown":s)+"'"},
gKu:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.lc.prototype={}
H.zx.prototype={
w:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.NQ(t)+"'"}}
H.rT.prototype={
w:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.l(t))+"'")}}
H.Eq.prototype={
w:function(a){return"RuntimeError: "+H.d(this.a)}}
H.dC.prototype={
$1:function(a){return this.a(a)}}
H.wN.prototype={
$2:function(a,b){return this.a(a,b)}}
H.VX.prototype={
$1:function(a){return this.a(a)}}
H.Jc.prototype={
CT:function(a){return H.cE(v.typeUniverse,this,a)},
Kq:function(a){return H.v5(v.typeUniverse,this,a)}}
H.ET.prototype={}
H.u9.prototype={
w:function(a){return this.a}}
H.iM.prototype={}
P.a2.prototype={
w:function(a){return this?"true":"false"}}
P.CP.prototype={}
P.Ge.prototype={}
P.C6.prototype={
w:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.h(t)
return"Assertion failed"}}
P.E.prototype={
w:function(a){return"Throw of null."}}
P.u.prototype={
gZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gu:function(){return""},
w:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gZ()+p+n
if(!r.a)return m
t=r.gu()
s=P.h(r.b)
return m+t+": "+s}}
P.bJ.prototype={
gZ:function(){return"RangeError"},
gu:function(){var t,s=this.e
if(s==null)t=""
else t=": Not greater than or equal to "+H.d(s)
return t}}
P.ds.prototype={
w:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.UV.prototype={
w:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h(t)+"."}}
P.t.prototype={
w:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.KN.prototype={}
P.cX.prototype={
w:function(a){return P.I(this,"(",")")}}
P.zM.prototype={}
P.c8.prototype={
w:function(a){return"null"}}
P.lf.prototype={}
P.a.prototype={constructor:P.a,$ia:1,
w:function(a){return"Instance of '"+H.d(H.l(this))+"'"},
toString:function(){return this.w(this)}}
P.qU.prototype={}
P.M.prototype={
w:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.qE.prototype={}
W.Gh.prototype={
w:function(a){return String(a)}}
W.fY.prototype={
w:function(a){return String(a)}}
W.Ny.prototype={$iNy:1}
W.Nh.prototype={
w:function(a){return String(a)}}
W.cv.prototype={
w:function(a){return a.localName}}
W.D0.prototype={}
W.KV.prototype={
w:function(a){var t=a.nodeValue
return t==null?this.U(a):t}}
P.mg.prototype={
j:function(a){if(a<=0||a>4294967296)throw H.b(P.C3("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
T.qu.prototype={}
T.A3.prototype={}
T.J9.prototype={}
T.FN.prototype={}
T.ZP.prototype={}
T.Pn.prototype={}
T.P0.prototype={}
T.Lx.prototype={}
T.j0.prototype={}
T.GZ.prototype={}
T.Fm.prototype={}
T.Ma.prototype={}
T.OF.prototype={}
T.lZ.prototype={}
T.rw.prototype={}
T.pM.prototype={}
T.po.prototype={}
T.kH.prototype={}
T.yG.prototype={}
T.Vg.prototype={}
T.Jt.prototype={}
T.AZ.prototype={}
T.QI.prototype={}
T.Fh.prototype={}
T.U0.prototype={}
T.HN.prototype={}
T.L7.prototype={}
T.Zs.prototype={}
T.Wf.prototype={}
T.Iu.prototype={}
T.D6.prototype={}
T.Ov.prototype={}
T.tB.prototype={}
T.XC.prototype={}
T.wF.prototype={}
T.KA.prototype={}
T.uP.prototype={}
T.k2.prototype={}
T.c6.prototype={}
T.Bs.prototype={}
T.ps.prototype={}
T.LU.prototype={}
T.Tv.prototype={}
T.Rd.prototype={}
T.qc.prototype={}
U.e.prototype={
$1:function(a){return this.a.j(100)}}
U.L.prototype={
$1:function(a){return this.a.j(100)}};(function aliases(){var t=J.vB.prototype
t.U=t.w
t=J.MF.prototype
t.t=t.w})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a,null)
s(P.a,[H.FK,J.vB,J.c,P.cX,H.a7,H.v,P.Ge,H.Jc,H.ET,P.a2,P.lf,P.zM,P.c8,P.qU,P.M,P.mg])
s(J.vB,[J.yE,J.CD,J.MF,J.jd,J.qI,J.Dr,W.D0,W.Nh])
s(J.MF,[J.iC,J.kd,J.c5,T.qu,T.A3,T.J9,T.FN,T.ZP,T.Pn,T.P0,T.Lx,T.j0,T.GZ,T.Fm,T.Ma,T.OF,T.lZ,T.rw,T.pM,T.po,T.kH,T.yG,T.Vg,T.Jt,T.AZ,T.QI,T.Fh,T.U0,T.HN,T.L7,T.Zs,T.Wf,T.Iu,T.D6,T.Ov,T.tB,T.XC,T.wF,T.KA,T.uP,T.k2,T.c6,T.Bs,T.ps,T.LU,T.Tv,T.Rd,T.qc])
t(J.Po,J.jd)
s(J.qI,[J.bU,J.VA])
t(H.bQ,P.cX)
t(H.aL,H.bQ)
t(H.A,H.aL)
s(H.v,[H.lc,H.dC,H.wN,H.VX,U.e,U.L])
s(H.lc,[H.zx,H.rT])
s(P.Ge,[H.Eq,H.u9,P.C6,P.E,P.u,P.ds,P.UV,P.t])
t(H.iM,H.u9)
s(P.lf,[P.CP,P.KN])
t(P.bJ,P.u)
t(W.KV,W.D0)
t(W.cv,W.KV)
t(W.qE,W.cv)
s(W.qE,[W.Gh,W.fY,W.Ny])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{KN:"int",CP:"double",lf:"num",qU:"String",a2:"bool",c8:"Null",zM:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.xb(v.typeUniverse,JSON.parse('{"qu":"MF","A3":"MF","J9":"MF","FN":"MF","ZP":"MF","Pn":"MF","P0":"MF","Lx":"MF","j0":"MF","GZ":"MF","Fm":"MF","Ma":"MF","OF":"MF","lZ":"MF","rw":"MF","pM":"MF","po":"MF","kH":"MF","yG":"MF","Vg":"MF","Jt":"MF","AZ":"MF","QI":"MF","Fh":"MF","U0":"MF","HN":"MF","L7":"MF","Zs":"MF","Wf":"MF","Iu":"MF","D6":"MF","XC":"MF","wF":"MF","Ov":"MF","tB":"MF","KA":"MF","uP":"MF","ps":"MF","LU":"MF","Rd":"MF","k2":"MF","c6":"MF","Bs":"MF","Tv":"MF","qc":"MF","iC":"MF","kd":"MF","c5":"MF","MF":{"D6":["1&"],"XC":[],"wF":[]},"Dr":{"qU":[]}}'))
H.FF(v.typeUniverse,JSON.parse('{"jd":1,"Po":1,"c":1,"bQ":1,"aL":1,"a7":1,"A":2,"cX":1,"zM":1,"D6":1,"uP":1}'))
var u=(function rtii(){var t=H.q7
return{Z:t("EH"),b:t("jd<@>"),T:t("CD"),g:t("c5"),P:t("c8"),K:t("a"),N:t("qU"),o:t("kd"),y:t("a2"),i:t("CP"),S:t("KN"),B:t("Ny*"),A:t("0&*"),_:t("a*"),O:t("b8<c8>?"),X:t("a?"),H:t("lf")}})();(function constants(){C.Ok=J.vB.prototype
C.xB=J.Dr.prototype
C.DG=J.c5.prototype
C.ZQ=J.iC.prototype
C.vB=J.kd.prototype
C.O4=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.Yq=function() {
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
C.wb=function(getTagFallback) {
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
C.KU=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.fQ=function(hooks) {
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
C.dk=function(hooks) {
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
C.xi=function(hooks) {
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
C.i7=function(hooks) { return hooks; }

C.pr=new P.mg()})();(function staticFields(){$.F=null
$.yj=0
$.mJ=null
$.P4=null
$.NF=null
$.TX=null
$.x7=null
$.nw=null
$.vv=null
$.Bv=null
$.x=[]})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"fa","w",function(){return H.Yg("_$dart_dartClosure")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.vB,DOMError:J.vB,ErrorEvent:J.vB,Event:J.vB,InputEvent:J.vB,SubmitEvent:J.vB,MediaError:J.vB,NavigatorUserMediaError:J.vB,OverconstrainedError:J.vB,PositionError:J.vB,SensorErrorEvent:J.vB,SpeechRecognitionError:J.vB,SQLError:J.vB,HTMLAudioElement:W.qE,HTMLBRElement:W.qE,HTMLBaseElement:W.qE,HTMLBodyElement:W.qE,HTMLButtonElement:W.qE,HTMLContentElement:W.qE,HTMLDListElement:W.qE,HTMLDataElement:W.qE,HTMLDataListElement:W.qE,HTMLDetailsElement:W.qE,HTMLDialogElement:W.qE,HTMLDivElement:W.qE,HTMLEmbedElement:W.qE,HTMLFieldSetElement:W.qE,HTMLFormElement:W.qE,HTMLHRElement:W.qE,HTMLHeadElement:W.qE,HTMLHeadingElement:W.qE,HTMLHtmlElement:W.qE,HTMLIFrameElement:W.qE,HTMLImageElement:W.qE,HTMLInputElement:W.qE,HTMLLIElement:W.qE,HTMLLabelElement:W.qE,HTMLLegendElement:W.qE,HTMLLinkElement:W.qE,HTMLMapElement:W.qE,HTMLMediaElement:W.qE,HTMLMenuElement:W.qE,HTMLMetaElement:W.qE,HTMLMeterElement:W.qE,HTMLModElement:W.qE,HTMLOListElement:W.qE,HTMLObjectElement:W.qE,HTMLOptGroupElement:W.qE,HTMLOptionElement:W.qE,HTMLOutputElement:W.qE,HTMLParagraphElement:W.qE,HTMLParamElement:W.qE,HTMLPictureElement:W.qE,HTMLPreElement:W.qE,HTMLProgressElement:W.qE,HTMLQuoteElement:W.qE,HTMLScriptElement:W.qE,HTMLSelectElement:W.qE,HTMLShadowElement:W.qE,HTMLSlotElement:W.qE,HTMLSourceElement:W.qE,HTMLSpanElement:W.qE,HTMLStyleElement:W.qE,HTMLTableCaptionElement:W.qE,HTMLTableCellElement:W.qE,HTMLTableDataCellElement:W.qE,HTMLTableHeaderCellElement:W.qE,HTMLTableColElement:W.qE,HTMLTableElement:W.qE,HTMLTableRowElement:W.qE,HTMLTableSectionElement:W.qE,HTMLTemplateElement:W.qE,HTMLTextAreaElement:W.qE,HTMLTimeElement:W.qE,HTMLTitleElement:W.qE,HTMLTrackElement:W.qE,HTMLUListElement:W.qE,HTMLUnknownElement:W.qE,HTMLVideoElement:W.qE,HTMLDirectoryElement:W.qE,HTMLFontElement:W.qE,HTMLFrameElement:W.qE,HTMLFrameSetElement:W.qE,HTMLMarqueeElement:W.qE,HTMLElement:W.qE,HTMLAnchorElement:W.Gh,HTMLAreaElement:W.fY,HTMLCanvasElement:W.Ny,DOMException:W.Nh,SVGAElement:W.cv,SVGAnimateElement:W.cv,SVGAnimateMotionElement:W.cv,SVGAnimateTransformElement:W.cv,SVGAnimationElement:W.cv,SVGCircleElement:W.cv,SVGClipPathElement:W.cv,SVGDefsElement:W.cv,SVGDescElement:W.cv,SVGDiscardElement:W.cv,SVGEllipseElement:W.cv,SVGFEBlendElement:W.cv,SVGFEColorMatrixElement:W.cv,SVGFEComponentTransferElement:W.cv,SVGFECompositeElement:W.cv,SVGFEConvolveMatrixElement:W.cv,SVGFEDiffuseLightingElement:W.cv,SVGFEDisplacementMapElement:W.cv,SVGFEDistantLightElement:W.cv,SVGFEFloodElement:W.cv,SVGFEFuncAElement:W.cv,SVGFEFuncBElement:W.cv,SVGFEFuncGElement:W.cv,SVGFEFuncRElement:W.cv,SVGFEGaussianBlurElement:W.cv,SVGFEImageElement:W.cv,SVGFEMergeElement:W.cv,SVGFEMergeNodeElement:W.cv,SVGFEMorphologyElement:W.cv,SVGFEOffsetElement:W.cv,SVGFEPointLightElement:W.cv,SVGFESpecularLightingElement:W.cv,SVGFESpotLightElement:W.cv,SVGFETileElement:W.cv,SVGFETurbulenceElement:W.cv,SVGFilterElement:W.cv,SVGForeignObjectElement:W.cv,SVGGElement:W.cv,SVGGeometryElement:W.cv,SVGGraphicsElement:W.cv,SVGImageElement:W.cv,SVGLineElement:W.cv,SVGLinearGradientElement:W.cv,SVGMarkerElement:W.cv,SVGMaskElement:W.cv,SVGMetadataElement:W.cv,SVGPathElement:W.cv,SVGPatternElement:W.cv,SVGPolygonElement:W.cv,SVGPolylineElement:W.cv,SVGRadialGradientElement:W.cv,SVGRectElement:W.cv,SVGScriptElement:W.cv,SVGSetElement:W.cv,SVGStopElement:W.cv,SVGStyleElement:W.cv,SVGElement:W.cv,SVGSVGElement:W.cv,SVGSwitchElement:W.cv,SVGSymbolElement:W.cv,SVGTSpanElement:W.cv,SVGTextContentElement:W.cv,SVGTextElement:W.cv,SVGTextPathElement:W.cv,SVGTextPositioningElement:W.cv,SVGTitleElement:W.cv,SVGUseElement:W.cv,SVGViewElement:W.cv,SVGGradientElement:W.cv,SVGComponentTransferFunctionElement:W.cv,SVGFEDropShadowElement:W.cv,SVGMPathElement:W.cv,Element:W.cv,EventTarget:W.D0,Document:W.KV,HTMLDocument:W.KV,Node:W.KV})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLFormElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLSelectElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,EventTarget:false,Document:true,HTMLDocument:true,Node:false})})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.Iq,[])
else U.Iq([])})})()