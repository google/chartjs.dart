{}(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
var y=function(){function t(){};return typeof t.name=='string'}()
function setFunctionNamesIfNecessary(a){if(y)return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$is"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)
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
return a}var x=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+x+++"(x) {"+"if (c === null) c = "+"H.qm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+x+++"() {"+"if (c === null) c = "+"H.qm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t
return d?function(){if(t===void 0)t=H.qm(this,a,b,c,true,[],e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var w=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q=q+w
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function setOrUpdateInterceptorsByTag(a){var t=u.interceptorsByTag
if(!t){u.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=u.leafTags
if(!t){u.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=u.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}function initializeDeferredHunk(a){w=u.types.length
a(inherit,mixin,lazy,makeConstList,convertToFastObject,installTearOff,setFunctionNamesIfNecessary,updateHolder,updateTypes,setOrUpdateInterceptorsByTag,setOrUpdateLeafTags,u,v,$)}function getGlobalFromName(a){for(var t=0;t<v.length;t++){if(v[t]==C)continue
if(v[t][a])return v[t][a]}}var C={},H={FK:function FK(a){this.a=a},bQ:function bQ(){},aL:function aL(){},a:function a(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},A:function A(a,b){this.a=a
this.b=b},
Dm:function(a){return u.types[a]},
d:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.j(a)
if(typeof t!=="string")throw H.b(H.t(a))
return t},
zh:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.q(t)
s=t[0]
r=t[1]
return new H.FD(a,t,(s&2)===2,s>>2,r>>1,(r&1)===1,t[2])},
l:function(a){var t,s,r,q,p,o,n,m,l
t=J.z(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.Ok||!!J.z(a).$isk){p=C.aG(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.xB.W(q,0)===36)q=C.xB.G(q,1)
l=H.M(H.oX(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
H:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.u(!0,b,"index",null)
t=J.D(a)
if(b<0||b>=t)return P.C(b,a,"index",null,t)
return P.O7(b,"index",null)},
t:function(a){return new P.u(!0,a,null,null)},
b:function(a){var t
if(a==null)a=new P.B()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.J})
t.name=""}else t.toString=H.J
return t},
J:function(){return J.j(this.dartException)},
x:function(a){throw H.b(a)},
lk:function(a){throw H.b(P.o(a))},
iA:function(a,b,c,d,e,f,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.z(d).$iszM){t.$reflectionInfo=d
r=H.zh(t).r}else r=d
q=e?Object.create(new H.zx().constructor.prototype):Object.create(new H.rT(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(e)p=function(){this.$initialize()}
else{o=$.yj
$.yj=o+1
o=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")
p=o}q.constructor=p
p.prototype=q
if(!e){n=f.length==1&&!0
m=H.bx(a,t,n)
m.$reflectionInfo=d}else{q.$static_name=a0
m=t
n=!1}if(typeof r=="number")l=function(a1,a2){return function(){return a1(a2)}}(H.Dm,r)
else if(typeof r=="function")if(e)l=r
else{k=n?H.yS:H.DV
l=function(a1,a2){return function(){return a1.apply({$receiver:a2(this)},arguments)}}(r,k)}else throw H.b("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=m,i=1;i<o;++i){h=b[i]
g=h.$callName
if(g!=null){h=e?h:H.bx(a,h,n)
q[g]=h}if(i===c){h.$reflectionInfo=d
j=h}}q["call*"]=j
q.$R=t.$R
q.$D=t.$D
return p},
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
q="return function(){var "+o+" = this."
p=$.mJ
if(p==null){p=H.E2("self")
$.mJ=p}return new Function(q+H.d(p)+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.yj
$.yj=q+1
n+=H.d(q)
q="return function("+n+"){return this."
p=$.mJ
if(p==null){p=H.E2("self")
$.mJ=p}return new Function(q+H.d(p)+"."+H.d(t)+"("+n+");}")()},
Z4:function(a,b,c,d){var t,s
t=H.DV
s=H.yS
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
Hf:function(a,b){var t,s,r,q,p,o,n,m
t=$.mJ
if(t==null){t=H.E2("self")
$.mJ=t}s=$.P4
if(s==null){s=H.E2("receiver")
$.P4=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.Z4(q,!o,r,b)
if(q===1){t="return function(){return this."+H.d(t)+"."+H.d(r)+"(this."+H.d(s)+");"
s=$.yj
$.yj=s+1
return new Function(t+H.d(s)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
t="return function("+m+"){return this."+H.d(t)+"."+H.d(r)+"(this."+H.d(s)+", "+m+");"
s=$.yj
$.yj=s+1
return new Function(t+H.d(s)+"}")()},
qm:function(a,b,c,d,e,f,g){var t,s
t=J.q(b)
s=!!J.z(d).$iszM?J.q(d):d
return H.iA(a,t,c,s,!!e,f,g)},
DV:function(a){return a.a},
yS:function(a){return a.c},
E2:function(a){var t,s,r,q,p
t=new H.rT("self","target","receiver","name")
s=J.q(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
aE:function(a,b){var t=J.U6(b)
throw H.b(H.aq(a,t.N(b,3,t.gA(b))))},
G:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.z(a)[b]
else t=!0
if(t)return a
H.aE(a,b)},
CS:function(a){var t
if("$S" in a){t=a.$S
if(typeof t=="number")return u.types[t]
else return a.$S()}return},
aq:function(a,b){return new H.Pe("CastError: "+H.d(P.h(a))+": type '"+H.N6(a)+"' is not a subtype of type '"+b+"'")},
N6:function(a){var t
if(a instanceof H.Tp){t=H.CS(J.z(a))
if(t!=null)return H.Ko(t)
return"Closure"}return H.l(a)},
eQ:function(a){throw H.b(new P.r(a))},
Ef:function(a){return new H.Eq(a)},
E:function(a){return u.getIsolateTag(a)},
oX:function(a){if(a==null)return
return a.$ti},
Ko:function(a){var t=H.i(a,null)
return t},
i:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].name+H.M(a,1,b)
if(typeof a=="function")return a.name
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
return H.d(b[b.length-a-1])}if('func' in a)return H.p(a,b)
if('futureOr' in a)return"FutureOr<"+H.i("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if("bounds" in a){t=a.bounds
if(a0==null){a0=[]
s=null}else s=a0.length
r=a0.length
for(q=t.length,p=q;p>0;--p)a0.push("T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o=C.xB.h(o+n,a0[a0.length-p-1])
m=t[p]
if(m!=null&&m!==P.Mh)o+=" extends "+H.i(m,a0)}o+=">"}else{o=""
s=null}l=!!a.v?"void":H.i(a.ret,a0)
if("args" in a){k=a.args
for(j=k.length,i="",h="",g=0;g<j;++g,h=", "){f=k[g]
i=i+h+H.i(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(j=e.length,h="",g=0;g<j;++g,h=", "){f=e[g]
i=i+h+H.i(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(j=H.kU(d),c=j.length,h="",g=0;g<c;++g,h=", "){b=j[g]
i=i+h+H.i(d[b],a0)+(" "+H.d(b))}i+="}"}if(s!=null)a0.length=s
return o+"("+i+") => "+l},
M:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.Rn("")
for(s=b,r="",q=!0,p="";s<a.length;++s,r=", "){t.a=p+r
o=a[s]
if(o!=null)q=!1
p=t.a+=H.i(o,c)}p="<"+t.D(0)+">"
return p},
iw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
w3:function(a){var t,s,r,q,p,o
t=$.NF.$1(a)
s=$.nw[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.vv[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.c.$2(a,t)
if(t!=null){s=$.nw[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.vv[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.Va(r)
$.nw[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.vv[t]=r
return r}if(p==="-"){o=H.Va(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.Lc(a,r)
if(p==="*")throw H.b(P.SY(t))
if(u.leafTags[t]===true){o=H.Va(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.Lc(a,r)},
Lc:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.Qu(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
Va:function(a){return J.Qu(a,!1,null,!!a.$isXj)},
VF:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.Va(t)
else return J.Qu(t,c,null,null)},
XD:function(){if(!0===$.Bv)return
$.Bv=!0
H.Z1()},
Z1:function(){var t,s,r,q,p,o,n,m
$.nw=Object.create(null)
$.vv=Object.create(null)
H.kO()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.x7.$1(p)
if(o!=null){n=H.VF(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
kO:function(){var t,s,r,q,p,o,n
t=C.Yq()
t=H.ud(C.Mc,H.ud(C.hQ,H.ud(C.XQ,H.ud(C.XQ,H.ud(C.M1,H.ud(C.lR,H.ud(C.ur(C.aG),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.NF=new H.dC(p)
$.c=new H.wN(o)
$.x7=new H.VX(n)},
ud:function(a,b){return a(b)||b},
FD:function FD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
Tp:function Tp(){},
Bp:function Bp(){},
zx:function zx(){},
rT:function rT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Pe:function Pe(a){this.a=a},
Eq:function Eq(a){this.a=a},
dC:function dC(a){this.a=a},
wN:function wN(a){this.a=a},
VX:function VX(a){this.a=a},
kU:function(a){return J.y(a?Object.keys(a):[])}},J={
z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.im.prototype
return J.VA.prototype}if(typeof a=="string")return J.Dr.prototype
if(a==null)return J.CD.prototype
if(typeof a=="boolean")return J.yE.prototype
if(a.constructor==Array)return J.jd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.Mh)return a
return J.ks(a)},
Qu:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ks:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.Bv==null){H.XD()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.b(P.SY("Return interceptor for "+H.d(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$RP()]
if(p!=null)return p
p=H.w3(a)
if(p!=null)return p
if(typeof a=="function")return C.DG
s=Object.getPrototypeOf(a)
if(s==null)return C.ZQ
if(s===Object.prototype)return C.ZQ
if(typeof q=="function"){Object.defineProperty(q,$.$get$RP(),{value:C.vB,enumerable:false,writable:true,configurable:true})
return C.vB}return C.vB},
y:function(a){return J.q(a)},
q:function(a){a.fixed$length=Array
return a},
U6:function(a){if(typeof a=="string")return J.Dr.prototype
if(a==null)return a
if(a.constructor==Array)return J.jd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.Mh)return a
return J.ks(a)},
lG:function(a){if(a==null)return a
if(a.constructor==Array)return J.jd.prototype
if(!(a instanceof P.Mh))return J.k.prototype
return a},
D:function(a){return J.U6(a).gA(a)},
j:function(a){return J.z(a).D(a)},
kg:function(a,b){return J.lG(a).Z(a,b)},
vB:function vB(){},
yE:function yE(){},
CD:function CD(){},
Ue:function Ue(){},
iC:function iC(){},
k:function k(){},
c5:function c5(){},
jd:function jd(){},
Po:function Po(){},
m:function m(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
qI:function qI(){},
im:function im(){},
VA:function VA(){},
Dr:function Dr(){}},P={
F:function(a){var t=J.z(a)
if(!!t.$isTp)return t.D(a)
return"Instance of '"+H.l(a)+"'"},
vg:function(a,b,c){var t=new J.m(b,b.length,0)
if(!t.F())return a
if(c.length===0){do a+=H.d(t.d)
while(t.F())}else{a+=H.d(t.d)
for(;t.F();)a=a+c+H.d(t.d)}return a},
h:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.j(a)
if(typeof a==="string")return JSON.stringify(a)
return P.F(a)},
L3:function(a,b,c){return new P.u(!0,a,b,c)},
C3:function(a){return new P.bJ(null,null,!1,null,null,a)},
O7:function(a,b,c){return new P.bJ(null,null,!0,a,b,"Value not in range")},
v:function(a,b,c,d,e){return new P.bJ(b,c,!0,a,d,"Invalid value")},
C:function(a,b,c,d,e){var t=e!=null?e:J.D(b)
return new P.eY(b,t,!0,a,c,"Index out of range")},
L4:function(a){return new P.ub(a)},
SY:function(a){return new P.ds(a)},
o:function(a){return new P.K(a)},
a2:function a2(){},
CP:function CP(){},
Ge:function Ge(){},
B:function B(){},
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
eY:function eY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ub:function ub(a){this.a=a},
ds:function ds(a){this.a=a},
K:function K(a){this.a=a},
r:function r(a){this.a=a},
KN:function KN(){},
cX:function cX(){},
zM:function zM(){},
c8:function c8(){},
lf:function lf(){},
Mh:function Mh(){},
qU:function qU(){},
Rn:function Rn(a){this.a=a},
mg:function mg(){},
I:function(a,b,c){var t,s
if(P.hB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$w()
s.push(a)
try{P.Vr(a,t)}finally{s.pop()}s=P.vg(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
WE:function(a,b,c){var t,s,r
if(P.hB(a))return b+"..."+c
t=new P.Rn(b)
s=$.$get$w()
s.push(a)
try{r=t
r.a=P.vg(r.gI(),a,", ")}finally{s.pop()}s=t
s.a=s.gI()+c
s=t.gI()
return s.charCodeAt(0)==0?s:s},
hB:function(a){var t,s
for(t=0;s=$.$get$w(),t<s.length;++t)if(a===s[t])return!0
return!1},
Vr:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.F())return
q=H.d(t.gl())
b.push(q)
s+=q.length+2;++r}if(!t.F()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gl();++r
if(!t.F()){if(r<=4){b.push(H.d(n))
return}p=H.d(n)
o=b.pop()
s+=p.length+2}else{m=t.gl();++r
for(;t.F();n=m,m=l){l=t.gl();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.d(n)
p=H.d(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)}},W={qE:function qE(){},Gh:function Gh(){},fY:function fY(){},n:function n(){},Nh:function Nh(){},cv:function cv(){},D0:function D0(){},Yu:function Yu(){},KV:function KV(){},lp:function lp(){}},T={qu:function qu(){},A3:function A3(){},J9:function J9(){},FN:function FN(){},ZP:function ZP(){},Pn:function Pn(){},P0:function P0(){},Lx:function Lx(){},j0:function j0(){},GZ:function GZ(){},Fm:function Fm(){},Ma:function Ma(){},OF:function OF(){},lZ:function lZ(){},rw:function rw(){},pM:function pM(){},po:function po(){},kH:function kH(){},yG:function yG(){},Vg:function Vg(){},Jt:function Jt(){},AZ:function AZ(){},QI:function QI(){},Fh:function Fh(){},U0:function U0(){},HN:function HN(){},L7:function L7(){},Zs:function Zs(){},Wf:function Wf(){},Iu:function Iu(){},D6:function D6(){},Ov:function Ov(){},tB:function tB(){},XC:function XC(){},wF:function wF(){},KA:function KA(){},uP:function uP(){},xZ:function xZ(){},c6:function c6(){},Bs:function Bs(){},ps:function ps(){},LU:function LU(){},Tv:function Tv(){},Rd:function Rd(){},qc:function qc(){}},U={
Iq:function(){var t,s,r
t=["January","February","March","April","May","June"]
s={data:{datasets:[{backgroundColor:"rgba(220,220,220,0.2)",data:new H.A(t,new U.e(C.pr)).p(0),label:"My First dataset"},{backgroundColor:"rgba(151,187,205,0.2)",data:new H.A(t,new U.L(C.pr)).p(0),label:"My Second dataset"}],labels:t},options:{responsive:!0},type:"line"}
r=H.G(document.querySelector("#canvas"),"$isn")
new Chart.Chart(r,s)},
e:function e(a){this.a=a},
L:function L(a){this.a=a}}
var v=[C,H,J,P,W,T,U]
setFunctionNamesIfNecessary(v)
var $={}
H.FK.prototype={}
J.vB.prototype={
D:function(a){return"Instance of '"+H.l(a)+"'"}}
J.yE.prototype={
D:function(a){return String(a)},
$isa2:1}
J.CD.prototype={
D:function(a){return"null"}}
J.Ue.prototype={
D:function(a){return String(a)}}
J.iC.prototype={}
J.k.prototype={}
J.c5.prototype={
D:function(a){var t=a[$.$get$f()]
if(t==null)return this.t(a)
return"JavaScript function for "+H.d(J.j(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.jd.prototype={
Z:function(a,b){return a[b]},
D:function(a){return P.WE(a,"[","]")},
gA:function(a){return a.length},
sA:function(a,b){if(!!a.fixed$length)H.x(P.L4("set length"))
if(b<0)throw H.b(P.v(b,0,null,"newLength",null))
a.length=b},
$iszM:1}
J.Po.prototype={}
J.m.prototype={
gl:function(){return this.d},
F:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.b(H.lk(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.qI.prototype={
D:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
$islf:1}
J.im.prototype={$isKN:1}
J.VA.prototype={}
J.Dr.prototype={
W:function(a,b){if(b>=a.length)throw H.b(H.H(a,b))
return a.charCodeAt(b)},
h:function(a,b){if(typeof b!=="string")throw H.b(P.L3(b,null,null))
return a+b},
N:function(a,b,c){if(c==null)c=a.length
if(b>c)throw H.b(P.O7(b,null,null))
if(c>a.length)throw H.b(P.O7(c,null,null))
return a.substring(b,c)},
G:function(a,b){return this.N(a,b,null)},
D:function(a){return a},
gA:function(a){return a.length},
$isqU:1}
H.bQ.prototype={}
H.aL.prototype={
gw:function(a){return new H.a(this,this.gA(this),0)},
tt:function(a,b){var t,s
t=[]
C.Nm.sA(t,this.gA(this))
for(s=0;s<this.gA(this);++s)t[s]=this.Z(0,s)
return t},
p:function(a){return this.tt(a,!0)}}
H.a.prototype={
gl:function(){return this.d},
F:function(){var t,s,r
t=this.a
s=t.gA(t)
if(this.b!==s)throw H.b(P.o(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t.Z(0,r);++this.c
return!0}}
H.A.prototype={
gA:function(a){return J.D(this.a)},
Z:function(a,b){return this.b.$1(J.kg(this.a,b))}}
H.FD.prototype={}
H.Tp.prototype={
D:function(a){return"Closure '"+H.l(this).trim()+"'"},
gKu:function(){return this},
$D:null}
H.Bp.prototype={}
H.zx.prototype={
D:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.rT.prototype={
D:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.l(t)+"'")}}
H.Pe.prototype={
D:function(a){return this.a}}
H.Eq.prototype={
D:function(a){return"RuntimeError: "+H.d(this.a)}}
H.dC.prototype={
$1:function(a){return this.a(a)}}
H.wN.prototype={
$2:function(a,b){return this.a(a,b)}}
H.VX.prototype={
$1:function(a){return this.a(a)}}
P.a2.prototype={
D:function(a){return this?"true":"false"}}
P.CP.prototype={}
P.Ge.prototype={}
P.B.prototype={
D:function(a){return"Throw of null."}}
P.u.prototype={
gL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gu:function(){return""},
D:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gL()+s+r
if(!this.a)return q
p=this.gu()
o=P.h(this.b)
return q+p+": "+H.d(o)}}
P.bJ.prototype={
gL:function(){return"RangeError"},
gu:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.d(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.d(t)
else if(r>t)s=": Not in range "+H.d(t)+".."+H.d(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.d(t)}return s}}
P.eY.prototype={
gL:function(){return"RangeError"},
gu:function(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gA:function(a){return this.f}}
P.ub.prototype={
D:function(a){return"Unsupported operation: "+this.a}}
P.ds.prototype={
D:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.K.prototype={
D:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.h(t))+"."}}
P.r.prototype={
D:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.KN.prototype={}
P.cX.prototype={
gA:function(a){var t,s
t=this.gw(this)
for(s=0;t.F();)++s
return s},
Z:function(a,b){var t,s,r
if(b<0)H.x(P.v(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.F();){r=t.gl()
if(b===s)return r;++s}throw H.b(P.C(b,this,"index",null,s))},
D:function(a){return P.I(this,"(",")")}}
P.zM.prototype={}
P.c8.prototype={
D:function(a){return"null"}}
P.lf.prototype={}
P.Mh.prototype={constructor:P.Mh,$isMh:1,
D:function(a){return"Instance of '"+H.l(this)+"'"},
toString:function(){return this.D(this)}}
P.qU.prototype={}
P.Rn.prototype={
gA:function(a){return this.a.length},
D:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gI:function(){return this.a}}
W.qE.prototype={}
W.Gh.prototype={
D:function(a){return String(a)}}
W.fY.prototype={
D:function(a){return String(a)}}
W.n.prototype={$isn:1}
W.Nh.prototype={
D:function(a){return String(a)}}
W.cv.prototype={
D:function(a){return a.localName}}
W.D0.prototype={}
W.Yu.prototype={
gA:function(a){return a.length}}
W.KV.prototype={
D:function(a){var t=a.nodeValue
return t==null?this.U(a):t}}
W.lp.prototype={
gA:function(a){return a.length}}
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
T.xZ.prototype={}
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
$1:function(a){return this.a.j(100)}}
J.vB.prototype.U=J.vB.prototype.D
J.Ue.prototype.t=J.Ue.prototype.D;(function inheritance(){inherit(P.Mh,null)
var t=P.Mh
inherit(H.FK,t)
inherit(J.vB,t)
inherit(J.m,t)
inherit(P.cX,t)
inherit(H.a,t)
inherit(H.FD,t)
inherit(H.Tp,t)
inherit(P.Ge,t)
inherit(P.a2,t)
inherit(P.lf,t)
inherit(P.zM,t)
inherit(P.c8,t)
inherit(P.qU,t)
inherit(P.Rn,t)
inherit(P.mg,t)
t=J.vB
inherit(J.yE,t)
inherit(J.CD,t)
inherit(J.Ue,t)
inherit(J.jd,t)
inherit(J.qI,t)
inherit(J.Dr,t)
inherit(W.D0,t)
inherit(W.Nh,t)
t=J.Ue
inherit(J.iC,t)
inherit(J.k,t)
inherit(J.c5,t)
inherit(T.qu,t)
inherit(T.A3,t)
inherit(T.J9,t)
inherit(T.FN,t)
inherit(T.ZP,t)
inherit(T.Pn,t)
inherit(T.P0,t)
inherit(T.Lx,t)
inherit(T.j0,t)
inherit(T.GZ,t)
inherit(T.Fm,t)
inherit(T.Ma,t)
inherit(T.OF,t)
inherit(T.lZ,t)
inherit(T.rw,t)
inherit(T.pM,t)
inherit(T.po,t)
inherit(T.kH,t)
inherit(T.yG,t)
inherit(T.Vg,t)
inherit(T.Jt,t)
inherit(T.AZ,t)
inherit(T.QI,t)
inherit(T.Fh,t)
inherit(T.U0,t)
inherit(T.HN,t)
inherit(T.L7,t)
inherit(T.Zs,t)
inherit(T.Wf,t)
inherit(T.Iu,t)
inherit(T.D6,t)
inherit(T.Ov,t)
inherit(T.tB,t)
inherit(T.XC,t)
inherit(T.wF,t)
inherit(T.KA,t)
inherit(T.uP,t)
inherit(T.xZ,t)
inherit(T.c6,t)
inherit(T.Bs,t)
inherit(T.ps,t)
inherit(T.LU,t)
inherit(T.Tv,t)
inherit(T.Rd,t)
inherit(T.qc,t)
inherit(J.Po,J.jd)
t=J.qI
inherit(J.im,t)
inherit(J.VA,t)
inherit(H.bQ,P.cX)
inherit(H.aL,H.bQ)
inherit(H.A,H.aL)
t=H.Tp
inherit(H.Bp,t)
inherit(H.dC,t)
inherit(H.wN,t)
inherit(H.VX,t)
inherit(U.e,t)
inherit(U.L,t)
t=H.Bp
inherit(H.zx,t)
inherit(H.rT,t)
t=P.Ge
inherit(H.Pe,t)
inherit(H.Eq,t)
inherit(P.B,t)
inherit(P.u,t)
inherit(P.ub,t)
inherit(P.ds,t)
inherit(P.K,t)
inherit(P.r,t)
t=P.lf
inherit(P.CP,t)
inherit(P.KN,t)
t=P.u
inherit(P.bJ,t)
inherit(P.eY,t)
inherit(W.KV,W.D0)
inherit(W.cv,W.KV)
inherit(W.qE,W.cv)
t=W.qE
inherit(W.Gh,t)
inherit(W.fY,t)
inherit(W.n,t)
inherit(W.Yu,t)
inherit(W.lp,t)})();(function constants(){C.Ok=J.vB.prototype
C.Nm=J.jd.prototype
C.xB=J.Dr.prototype
C.DG=J.c5.prototype
C.ZQ=J.iC.prototype
C.vB=J.k.prototype
C.pr=new P.mg()
C.Mc=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.lR=function(hooks) {
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
C.XQ=function(hooks) { return hooks; }

C.ur=function(getTagFallback) {
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
C.M1=function(hooks) {
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
C.hQ=function(hooks) {
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
C.aG=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}})();(function staticFields(){$.yj=0
$.mJ=null
$.P4=null
$.NF=null
$.c=null
$.x7=null
$.nw=null
$.vv=null
$.Bv=null})();(function lazyInitializers(){lazy($,"f","$get$f",function(){return H.E("_$dart_dartClosure")})
lazy($,"RP","$get$RP",function(){return H.E("_$dart_js")})
lazy($,"w","$get$w",function(){return[]})})()
var u={mangledGlobalNames:{KN:"int",CP:"double",lf:"num",qU:"String",a2:"bool",c8:"Null",zM:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(convertToFastObject(n))[0]}
u.getIsolateTag=function(a){return t("___dart_"+a+u.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
u.isolateTag=o
break}}u.dispatchPropertyName=u.getIsolateTag("dispatch_record")}()
setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.vB,DOMError:J.vB,ErrorEvent:J.vB,Event:J.vB,InputEvent:J.vB,MediaError:J.vB,Navigator:J.vB,NavigatorConcurrentHardware:J.vB,NavigatorUserMediaError:J.vB,OverconstrainedError:J.vB,PositionError:J.vB,SensorErrorEvent:J.vB,SpeechRecognitionError:J.vB,SQLError:J.vB,HTMLAudioElement:W.qE,HTMLBRElement:W.qE,HTMLBaseElement:W.qE,HTMLBodyElement:W.qE,HTMLButtonElement:W.qE,HTMLContentElement:W.qE,HTMLDListElement:W.qE,HTMLDataElement:W.qE,HTMLDataListElement:W.qE,HTMLDetailsElement:W.qE,HTMLDialogElement:W.qE,HTMLDivElement:W.qE,HTMLEmbedElement:W.qE,HTMLFieldSetElement:W.qE,HTMLHRElement:W.qE,HTMLHeadElement:W.qE,HTMLHeadingElement:W.qE,HTMLHtmlElement:W.qE,HTMLIFrameElement:W.qE,HTMLImageElement:W.qE,HTMLInputElement:W.qE,HTMLLIElement:W.qE,HTMLLabelElement:W.qE,HTMLLegendElement:W.qE,HTMLLinkElement:W.qE,HTMLMapElement:W.qE,HTMLMediaElement:W.qE,HTMLMenuElement:W.qE,HTMLMetaElement:W.qE,HTMLMeterElement:W.qE,HTMLModElement:W.qE,HTMLOListElement:W.qE,HTMLObjectElement:W.qE,HTMLOptGroupElement:W.qE,HTMLOptionElement:W.qE,HTMLOutputElement:W.qE,HTMLParagraphElement:W.qE,HTMLParamElement:W.qE,HTMLPictureElement:W.qE,HTMLPreElement:W.qE,HTMLProgressElement:W.qE,HTMLQuoteElement:W.qE,HTMLScriptElement:W.qE,HTMLShadowElement:W.qE,HTMLSlotElement:W.qE,HTMLSourceElement:W.qE,HTMLSpanElement:W.qE,HTMLStyleElement:W.qE,HTMLTableCaptionElement:W.qE,HTMLTableCellElement:W.qE,HTMLTableDataCellElement:W.qE,HTMLTableHeaderCellElement:W.qE,HTMLTableColElement:W.qE,HTMLTableElement:W.qE,HTMLTableRowElement:W.qE,HTMLTableSectionElement:W.qE,HTMLTemplateElement:W.qE,HTMLTextAreaElement:W.qE,HTMLTimeElement:W.qE,HTMLTitleElement:W.qE,HTMLTrackElement:W.qE,HTMLUListElement:W.qE,HTMLUnknownElement:W.qE,HTMLVideoElement:W.qE,HTMLDirectoryElement:W.qE,HTMLFontElement:W.qE,HTMLFrameElement:W.qE,HTMLFrameSetElement:W.qE,HTMLMarqueeElement:W.qE,HTMLElement:W.qE,HTMLAnchorElement:W.Gh,HTMLAreaElement:W.fY,HTMLCanvasElement:W.n,DOMException:W.Nh,SVGAElement:W.cv,SVGAnimateElement:W.cv,SVGAnimateMotionElement:W.cv,SVGAnimateTransformElement:W.cv,SVGAnimationElement:W.cv,SVGCircleElement:W.cv,SVGClipPathElement:W.cv,SVGDefsElement:W.cv,SVGDescElement:W.cv,SVGDiscardElement:W.cv,SVGEllipseElement:W.cv,SVGFEBlendElement:W.cv,SVGFEColorMatrixElement:W.cv,SVGFEComponentTransferElement:W.cv,SVGFECompositeElement:W.cv,SVGFEConvolveMatrixElement:W.cv,SVGFEDiffuseLightingElement:W.cv,SVGFEDisplacementMapElement:W.cv,SVGFEDistantLightElement:W.cv,SVGFEFloodElement:W.cv,SVGFEFuncAElement:W.cv,SVGFEFuncBElement:W.cv,SVGFEFuncGElement:W.cv,SVGFEFuncRElement:W.cv,SVGFEGaussianBlurElement:W.cv,SVGFEImageElement:W.cv,SVGFEMergeElement:W.cv,SVGFEMergeNodeElement:W.cv,SVGFEMorphologyElement:W.cv,SVGFEOffsetElement:W.cv,SVGFEPointLightElement:W.cv,SVGFESpecularLightingElement:W.cv,SVGFESpotLightElement:W.cv,SVGFETileElement:W.cv,SVGFETurbulenceElement:W.cv,SVGFilterElement:W.cv,SVGForeignObjectElement:W.cv,SVGGElement:W.cv,SVGGeometryElement:W.cv,SVGGraphicsElement:W.cv,SVGImageElement:W.cv,SVGLineElement:W.cv,SVGLinearGradientElement:W.cv,SVGMarkerElement:W.cv,SVGMaskElement:W.cv,SVGMetadataElement:W.cv,SVGPathElement:W.cv,SVGPatternElement:W.cv,SVGPolygonElement:W.cv,SVGPolylineElement:W.cv,SVGRadialGradientElement:W.cv,SVGRectElement:W.cv,SVGScriptElement:W.cv,SVGSetElement:W.cv,SVGStopElement:W.cv,SVGStyleElement:W.cv,SVGElement:W.cv,SVGSVGElement:W.cv,SVGSwitchElement:W.cv,SVGSymbolElement:W.cv,SVGTSpanElement:W.cv,SVGTextContentElement:W.cv,SVGTextElement:W.cv,SVGTextPathElement:W.cv,SVGTextPositioningElement:W.cv,SVGTitleElement:W.cv,SVGUseElement:W.cv,SVGViewElement:W.cv,SVGGradientElement:W.cv,SVGComponentTransferFunctionElement:W.cv,SVGFEDropShadowElement:W.cv,SVGMPathElement:W.cv,Element:W.cv,Window:W.D0,DOMWindow:W.D0,EventTarget:W.D0,HTMLFormElement:W.Yu,Document:W.KV,HTMLDocument:W.KV,Node:W.KV,HTMLSelectElement:W.lp})
setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true})})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.Iq,[])
else U.Iq([])})})()