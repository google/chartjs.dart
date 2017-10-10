(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b){"use strict"
function generateAccessor(a9,b0,b1){var g=a9.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var c
if(g.length>1)c=true
else c=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a0=d&3
var a1=d>>2
var a2=f=f.substring(0,e-1)
var a3=f.indexOf(":")
if(a3>0){a2=f.substring(0,a3)
f=f.substring(a3+1)}if(a0){var a4=a0&2?"r":""
var a5=a0&1?"this":"r"
var a6="return "+a5+"."+f
var a7=b1+".prototype.g"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}if(a1){var a4=a1&2?"r,v":"v"
var a5=a1&1?"this":"r"
var a6=a5+"."+f+"=v"
var a7=b1+".prototype.s"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}}return f}function defineClass(a1,a2){var g=[]
var f="function "+a1+"("
var e=""
for(var d=0;d<a2.length;d++){if(d!=0)f+=", "
var c=generateAccessor(a2[d],g,a1)
var a0="p_"+c
f+=a0
e+="this."+c+" = "+a0+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a1+".builtin$cls=\""+a1+"\";\n"
f+="$desc=$collectedClasses."+a1+"[1];\n"
f+=a1+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a1+".name=\""+a1+"\";\n"
f+=g.join("")
return f}var z=supportsDirectProtoAccess?function(c,d){var g=c.prototype
g.__proto__=d.prototype
g.constructor=c
g["$is"+c.name]=c
return convertToFastObject(g)}:function(){function tmp(){}return function(a0,a1){tmp.prototype=a1.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a0.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var c=e[d]
g[c]=f[c]}g["$is"+a0.name]=a0
g.constructor=a0
a0.prototype=g
return g}}()
function finishClasses(a4){var g=init.allClasses
a4.combinedConstructorFunction+="return [\n"+a4.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a4.combinedConstructorFunction)(a4.collected)
a4.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.name
var a0=a4.collected[c]
var a1=a0[0]
a0=a0[1]
g[c]=d
a1[c]=d}f=null
var a2=init.finishedClasses
function finishClass(b4){if(a2[b4])return
a2[b4]=true
var a5=a4.pending[b4]
if(!a5||typeof a5!="string"){var a6=g[b4]
var a7=a6.prototype
a7.constructor=a6
a7.$isc=a6
a7.$deferredAction=function(){}
return}finishClass(a5)
var a8=g[a5]
if(!a8)a8=existingIsolateProperties[a5]
var a6=g[b4]
var a7=z(a6,a8)
if(Object.prototype.hasOwnProperty.call(a7,"%")){var a9=a7["%"].split(";")
if(a9[0]){var b0=a9[0].split("|")
for(var b1=0;b1<b0.length;b1++){init.interceptorsByTag[b0[b1]]=a6
init.leafTags[b0[b1]]=true}}if(a9[1]){b0=a9[1].split("|")
if(a9[2]){var b2=a9[2].split("|")
for(var b1=0;b1<b2.length;b1++){var b3=g[b2[b1]]
b3.$nativeSuperclassTag=b0[0]}}for(b1=0;b1<b0.length;b1++){init.interceptorsByTag[b0[b1]]=a6
init.leafTags[b0[b1]]=false}}a7.$deferredAction()}if(a7.$ish)a7.$deferredAction()}var a3=Object.keys(a4.pending)
for(var e=0;e<a3.length;e++)finishClass(a3[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.charCodeAt(0)
var a0
if(d!=="^"&&d!=="$reflectable"&&c!==43&&c!==42&&(a0=g[d])!=null&&a0.constructor===Array&&d!=="<>")addStubs(g,a0,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function processClassData(b1,b2,b3){b2=convertToSlowObject(b2)
var g
var f=Object.keys(b2)
var e=false
var d=supportsDirectProtoAccess&&b1!="c"
for(var c=0;c<f.length;c++){var a0=f[c]
var a1=a0.charCodeAt(0)
if(a0==="j"){processStatics(init.statics[b1]=b2.j,b3)
delete b2.j}else if(a1===43){w[g]=a0.substring(1)
var a2=b2[a0]
if(a2>0)b2[g].$reflectable=a2}else if(a1===42){b2[g].$D=b2[a0]
var a3=b2.$methodsWithOptionalArguments
if(!a3)b2.$methodsWithOptionalArguments=a3={}
a3[a0]=g}else{var a4=b2[a0]
if(a0!=="^"&&a4!=null&&a4.constructor===Array&&a0!=="<>")if(d)e=true
else addStubs(b2,a4,a0,false,[])
else g=a0}}if(e)b2.$deferredAction=finishAddStubsHelper
var a5=b2["^"],a6,a7,a8=a5
var a9=a8.split(";")
a8=a9[1]?a9[1].split(","):[]
a7=a9[0]
a6=a7.split(":")
if(a6.length==2){a7=a6[0]
var b0=a6[1]
if(b0)b2.$S=function(b4){return function(){return init.types[b4]}}(b0)}if(a7)b3.pending[b1]=a7
b3.combinedConstructorFunction+=defineClass(b1,a8)
b3.constructorsList.push(b1)
b3.collected[b1]=[m,b2]
i.push(b1)}function processStatics(a3,a4){var g=Object.keys(a3)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a3[e]
var c=e.charCodeAt(0)
var a0
if(c===43){v[a0]=e.substring(1)
var a1=a3[e]
if(a1>0)a3[a0].$reflectable=a1
if(d&&d.length)init.typeInformation[a0]=d}else if(c===42){m[a0].$D=d
var a2=a3.$methodsWithOptionalArguments
if(!a2)a3.$methodsWithOptionalArguments=a2={}
a2[e]=a0}else if(typeof d==="function"){m[a0=e]=d
h.push(e)
init.globalFunctions[e]=d}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a0=e
processClassData(e,d,a4)}}}function addStubs(b2,b3,b4,b5,b6){var g=0,f=b3[g],e
if(typeof f=="string")e=b3[++g]
else{e=f
f=b4}var d=[b2[b4]=b2[f]=e]
e.$stubName=b4
b6.push(b4)
for(g++;g<b3.length;g++){e=b3[g]
if(typeof e!="function")break
if(!b5)e.$stubName=b3[++g]
d.push(e)
if(e.$stubName){b2[e.$stubName]=e
b6.push(e.$stubName)}}for(var c=0;c<d.length;g++,c++)d[c].$callName=b3[g]
var a0=b3[g]
b3=b3.slice(++g)
var a1=b3[0]
var a2=a1>>1
var a3=(a1&1)===1
var a4=a1===3
var a5=a1===1
var a6=b3[1]
var a7=a6>>1
var a8=(a6&1)===1
var a9=a2+a7!=d[0].length
var b0=b3[2]
if(typeof b0=="number")b3[2]=b0+b
var b1=2*a7+a2+3
if(a0){e=tearOff(d,b3,b5,b4,a9)
b2[b4].$getter=e
e.$getterStub=true
if(b5){init.globalFunctions[b4]=e
b6.push(a0)}b2[a0]=e
d.push(e)
e.$stubName=a0
e.$callName=null}}Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(c){return this(c)}
Function.prototype.$2=function(c,d){return this(c,d)}
Function.prototype.$4=function(c,d,e,f){return this(c,d,e,f)}
Function.prototype.$3=function(c,d,e){return this(c,d,e)}
function tearOffGetter(c,d,e,f){return f?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"(x) {"+"if (c === null) c = "+"H.M"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(c,d,e,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"() {"+"if (c === null) c = "+"H.M"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(c,d,e,H,null)}function tearOff(c,d,e,f,a0){var g
return e?function(){if(g===void 0)g=H.M(this,c,d,true,[],f).prototype
return g}:tearOffGetter(c,d,f,a0)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.a7=function(){}
var dart=[["","",,H,{"^":"",bT:{"^":"c;a"}}],["","",,J,{"^":"",
k:function(a){return void 0},
E:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
a9:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.O==null){H.b4()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(new P.a2("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$H()]
if(v!=null)return v
v=H.be(a)
if(v!=null)return v
if(typeof a=="function")return C.p
y=Object.getPrototypeOf(a)
if(y==null)return C.f
if(y===Object.prototype)return C.f
if(typeof w=="function"){Object.defineProperty(w,$.$get$H(),{value:C.a,enumerable:false,writable:true,configurable:true})
return C.a}return C.a},
h:{"^":"c;",
h:["D",function(a){return H.y(a)}],
"%":"ApplicationCacheErrorEvent|AutocompleteErrorEvent|DOMError|ErrorEvent|Event|FileError|InputEvent|MediaError|Navigator|NavigatorUserMediaError|PositionError|SQLError|SpeechRecognitionError"},
az:{"^":"h;",
h:function(a){return String(a)},
$isaU:1},
aC:{"^":"h;",
h:function(a){return"null"}},
a:{"^":"h;",
h:["E",function(a){return String(a)}]},
aI:{"^":"a;"},
z:{"^":"a;"},
I:{"^":"a;",
h:function(a){var z=a[$.$get$W()]
return z==null?this.E(a):J.v(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
t:{"^":"h;",
G:function(a,b){if(!!a.fixed$length)throw H.d(new P.aP(b))},
m:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
h:function(a){return P.ax(a,"[","]")},
gi:function(a){return a.length},
si:function(a,b){this.G(a,"set length")
a.length=b},
$isJ:1},
bS:{"^":"t;"},
ah:{"^":"c;a,b,c,d",
k:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.bj(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
G:{"^":"h;",
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
t:function(a,b){return a+b},
$isu:1},
aB:{"^":"G;",$isb6:1,$isu:1},
aA:{"^":"G;",$isu:1},
x:{"^":"h;",
F:function(a,b){if(b>=a.length)throw H.d(H.a6(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!=="string")throw H.d(P.ag(b,null,null))
return a+b},
u:function(a,b,c){if(c==null)c=a.length
if(b>c)throw H.d(P.L(b,null,null))
if(c>a.length)throw H.d(P.L(c,null,null))
return a.substring(b,c)},
C:function(a,b){return this.u(a,b,null)},
h:function(a){return a},
gi:function(a){return a.length},
$isaO:1}}],["","",,H,{"^":"",aq:{"^":"aw;"},aE:{"^":"aq;",
gv:function(a){return new H.aF(this,J.p(this.a),0,null)},
H:function(a,b){var z,y,x,w,v,u
z=[]
y=this.a
x=J.C(y)
C.i.si(z,x.gi(y))
for(w=this.b,v=0;v<x.gi(y);++v){u=w.$1(x.m(y,v))
if(v>=z.length)return H.i(z,v)
z[v]=u}return z},
A:function(a){return this.H(a,!0)}},aF:{"^":"c;a,b,c,d",
gl:function(){return this.d},
k:function(){var z,y,x,w,v
z=this.a
y=z.a
x=J.C(y)
w=x.gi(y)
if(this.b!==w)throw H.d(new P.V(z))
v=this.c
if(v>=w){this.d=null
return!1}this.d=z.b.$1(x.m(y,v));++this.c
return!0}},Y:{"^":"aE;a,b",
gi:function(a){return J.p(this.a)},
m:function(a,b){return this.b.$1(J.af(this.a,b))}}}],["","",,H,{"^":"",
aZ:function(a){return init.types[a]},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.v(a)
if(typeof z!=="string")throw H.d(H.a5(a))
return z},
K:function(a){var z,y,x,w,v,u,t,s
z=J.k(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.h||!!J.k(a).$isz){v=C.e(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.c.F(w,0)===36)w=C.c.C(w,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+H.aa(H.aY(a),0,null),init.mangledGlobalNames)},
y:function(a){return"Instance of '"+H.K(a)+"'"},
b_:function(a){throw H.d(H.a5(a))},
i:function(a,b){if(a==null)J.p(a)
throw H.d(H.a6(a,b))},
a6:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.q(!0,b,"index",null)
z=J.p(a)
if(!(b<0)){if(typeof z!=="number")return H.b_(z)
y=b>=z}else y=!0
if(y)return P.av(b,a,"index",null,z)
return P.L(b,"index",null)},
a5:function(a){return new P.q(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.aH()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ae})
z.name=""}else z.toString=H.ae
return z},
ae:function(){return J.v(this.dartException)},
bj:function(a){throw H.d(new P.V(a))},
b8:function(a,b,c,d,e,f,g){switch(c){case 0:return new H.b9(a).$0()
case 1:return new H.ba(a,d).$0()
case 2:return new H.bb(a,d,e).$0()
case 3:return new H.bc(a,d,e,f).$0()
case 4:return new H.bd(a,d,e,f,g).$0()}throw H.d(new P.aQ("Unsupported number of arguments for wrapped closure"))},
c6:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,$,H.b8)
a.$identity=z
return z},
ao:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.k(c).$isJ){z.$reflectionInfo=c
x=H.aL(z).r}else x=c
w=d?Object.create(new H.aN().constructor.prototype):Object.create(new H.Q(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.f
$.f=J.o(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.U(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.aZ,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.S:H.F
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.U(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
al:function(a,b,c,d){var z=H.F
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
U:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.an(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.al(y,!w,z,b)
if(y===0){w=$.f
$.f=J.o(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.m
if(v==null){v=H.w("self")
$.m=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.f
$.f=J.o(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.m
if(v==null){v=H.w("self")
$.m=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
am:function(a,b,c,d){var z,y
z=H.F
y=H.S
switch(b?-1:a){case 0:throw H.d(new H.aM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
an:function(a,b){var z,y,x,w,v,u,t,s
z=H.ai()
y=$.R
if(y==null){y=H.w("receiver")
$.R=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.am(w,!u,x,b)
if(w===1){y="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
u=$.f
$.f=J.o(u,1)
return new Function(y+H.b(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
u=$.f
$.f=J.o(u,1)
return new Function(y+H.b(u)+"}")()},
M:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.k(c).$isJ){c.fixed$length=Array
z=c}else z=c
return H.ao(a,b,z,!!d,e,f)},
bi:function(a,b){var z=J.C(b)
throw H.d(H.ak(H.K(a),z.u(b,3,z.gi(b))))},
b7:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.k(a)[b]
else z=!0
if(z)return a
H.bi(a,b)},
bk:function(a){throw H.d(new P.ap(a))},
a8:function(a){return init.getIsolateTag(a)},
aY:function(a){if(a==null)return
return a.$ti},
n:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.aa(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.n(z,b)
return H.aS(a,b)}return"unknown-reified-type"},
aS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.n(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.n(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.n(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.aV(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.n(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
aa:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.a_("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.n(u,c)}return w?"":"<"+z.h(0)+">"},
ca:function(a){var z=$.N
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
c9:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
c7:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
be:function(a){var z,y,x,w,v,u
z=$.N.$1(a)
y=$.B[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.D[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.a4.$2(a,z)
if(z!=null){y=$.B[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.D[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.P(x)
$.B[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.D[z]=x
return x}if(v==="-"){u=H.P(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ac(a,x)
if(v==="*")throw H.d(new P.a2(z))
if(init.leafTags[z]===true){u=H.P(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ac(a,x)},
ac:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.E(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
P:function(a){return J.E(a,!1,null,!!a.$isaD)},
bh:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.E(z,!1,null,!!z.$isaD)
else return J.E(z,c,null,null)},
b4:function(){if(!0===$.O)return
$.O=!0
H.b5()},
b5:function(){var z,y,x,w,v,u,t,s
$.B=Object.create(null)
$.D=Object.create(null)
H.b0()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ad.$1(v)
if(u!=null){t=H.bh(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
b0:function(){var z,y,x,w,v,u,t
z=C.m()
z=H.l(C.j,H.l(C.o,H.l(C.d,H.l(C.d,H.l(C.n,H.l(C.k,H.l(C.l(C.e),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.N=new H.b1(v)
$.a4=new H.b2(u)
$.ad=new H.b3(t)},
l:function(a,b){return a(b)||b},
aK:{"^":"c;a,b,c,d,e,f,r,x",j:{
aL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.aK(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
b9:{"^":"e;a",
$0:function(){return this.a.$0()}},
ba:{"^":"e;a,b",
$0:function(){return this.a.$1(this.b)}},
bb:{"^":"e;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
bc:{"^":"e;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
bd:{"^":"e;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
e:{"^":"c;",
h:function(a){return"Closure '"+H.K(this).trim()+"'"},
gB:function(){return this},
gB:function(){return this}},
a1:{"^":"e;"},
aN:{"^":"a1;",
h:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
Q:{"^":"a1;a,b,c,d",
h:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+H.y(z)},
j:{
F:function(a){return a.a},
S:function(a){return a.c},
ai:function(){var z=$.m
if(z==null){z=H.w("self")
$.m=z}return z},
w:function(a){var z,y,x,w,v
z=new H.Q("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
aj:{"^":"j;a",
h:function(a){return this.a},
j:{
ak:function(a,b){return new H.aj("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")}}},
aM:{"^":"j;a",
h:function(a){return"RuntimeError: "+H.b(this.a)}},
b1:{"^":"e;a",
$1:function(a){return this.a(a)}},
b2:{"^":"e;a",
$2:function(a,b){return this.a(a,b)}},
b3:{"^":"e;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
aV:function(a){var z=a?Object.keys(a):[]
z.fixed$length=Array
return z}}],["","",,P,{"^":"",
ay:function(a,b,c){var z,y
if(P.a3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$A()
y.push(a)
try{P.aT(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.a0(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
ax:function(a,b,c){var z,y,x
if(P.a3(a))return b+"..."+c
z=new P.a_(b)
y=$.$get$A()
y.push(a)
try{x=z
x.a=P.a0(x.gn(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gn()+c
y=z.gn()
return y.charCodeAt(0)==0?y:y},
a3:function(a){var z,y
for(z=0;y=$.$get$A(),z<y.length;++z)if(a===y[z])return!0
return!1},
aT:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gv(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.k())return
w=H.b(z.gl())
b.push(w)
y+=w.length+2;++x}if(!z.k()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gl();++x
if(!z.k()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gl();++x
for(;z.k();t=s,s=r){r=z.gl();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)}}],["","",,P,{"^":"",
X:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.v(a)
if(typeof a==="string")return JSON.stringify(a)
return P.as(a)},
as:function(a){var z=J.k(a)
if(!!z.$ise)return z.h(a)
return H.y(a)},
aU:{"^":"c;",
h:function(a){return this?"true":"false"}},
"+bool":0,
c8:{"^":"u;"},
"+double":0,
j:{"^":"c;"},
aH:{"^":"j;",
h:function(a){return"Throw of null."}},
q:{"^":"j;a,b,c,d",
gq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gp:function(){return""},
h:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gq()+y+x
if(!this.a)return w
v=this.gp()
u=P.X(this.b)
return w+v+": "+H.b(u)},
j:{
ag:function(a,b,c){return new P.q(!0,a,b,c)}}},
Z:{"^":"q;e,f,a,b,c,d",
gq:function(){return"RangeError"},
gp:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
j:{
aJ:function(a){return new P.Z(null,null,!1,null,null,a)},
L:function(a,b,c){return new P.Z(null,null,!0,a,b,"Value not in range")}}},
au:{"^":"q;e,i:f>,a,b,c,d",
gq:function(){return"RangeError"},
gp:function(){var z=this.b
if(typeof z!=="number")return z.I()
if(z<0)return": index must not be negative"
z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
j:{
av:function(a,b,c,d,e){var z=e!=null?e:J.p(b)
return new P.au(b,z,!0,a,c,"Index out of range")}}},
aP:{"^":"j;a",
h:function(a){return"Unsupported operation: "+this.a}},
a2:{"^":"j;a",
h:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"}},
V:{"^":"j;a",
h:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.X(z))+"."}},
ap:{"^":"j;a",
h:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
aQ:{"^":"c;a",
h:function(a){return"Exception: "+this.a}},
b6:{"^":"u;"},
"+int":0,
aw:{"^":"c;",
gi:function(a){var z,y
z=this.gv(this)
for(y=0;z.k();)++y
return y},
h:function(a){return P.ay(this,"(",")")}},
J:{"^":"c;"},
"+List":0,
bZ:{"^":"c;",
h:function(a){return"null"}},
"+Null":0,
u:{"^":"c;"},
"+num":0,
c:{"^":";",
h:function(a){return H.y(this)},
toString:function(){return this.h(this)}},
aO:{"^":"c;"},
"+String":0,
a_:{"^":"c;n:a<",
gi:function(a){return this.a.length},
h:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
j:{
a0:function(a,b,c){var z=new J.ah(b,b.length,0,null)
if(!z.k())return a
if(c.length===0){do a+=H.b(z.d)
while(z.k())}else{a+=H.b(z.d)
for(;z.k();)a=a+c+H.b(z.d)}return a}}}}],["","",,W,{"^":"",r:{"^":"ar;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMenuItemElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},bl:{"^":"r;",
h:function(a){return String(a)},
"%":"HTMLAnchorElement"},bn:{"^":"r;",
h:function(a){return String(a)},
"%":"HTMLAreaElement"},T:{"^":"r;",$isT:1,"%":"HTMLCanvasElement"},bP:{"^":"h;",
h:function(a){return String(a)},
"%":"DOMException"},ar:{"^":"aG;",
h:function(a){return a.localName},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGCursorElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;Element"},at:{"^":"h;","%":"DOMWindow|Window;EventTarget"},bQ:{"^":"r;i:length=","%":"HTMLFormElement"},aG:{"^":"at;",
h:function(a){var z=a.nodeValue
return z==null?this.D(a):z},
"%":"Document|HTMLDocument;Node"},c2:{"^":"r;i:length=","%":"HTMLSelectElement"}}],["","",,P,{"^":"",aR:{"^":"c;",
w:function(a){if(a<=0||a>4294967296)throw H.d(P.aJ("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,T,{"^":"",bz:{"^":"a;","%":""},bK:{"^":"a;","%":""},bJ:{"^":"a;","%":""},br:{"^":"a;","%":""},bE:{"^":"a;","%":""},bt:{"^":"a;","%":""},bu:{"^":"a;","%":""},bU:{"^":"a;","%":""},bD:{"^":"a;","%":""},bx:{"^":"a;","%":""},bI:{"^":"a;","%":""},bB:{"^":"a;","%":""},bA:{"^":"a;","%":""},bL:{"^":"a;","%":""},by:{"^":"a;","%":""},bp:{"^":"a;","%":""},bq:{"^":"a;","%":""},bw:{"^":"a;","%":""},bs:{"^":"a;","%":""},bC:{"^":"a;","%":""},bF:{"^":"a;","%":""},bG:{"^":"a;","%":""},bR:{"^":"a;","%":""},c1:{"^":"a;","%":""},c3:{"^":"a;","%":""},bm:{"^":"a;","%":""},c_:{"^":"a;","%":""},bW:{"^":"a;","%":""},bY:{"^":"a;","%":""},bv:{"^":"a;","%":""},bH:{"^":"a;","%":""},bO:{"^":"a;","%":""},bM:{"^":"a;","%":""},bN:{"^":"a;","%":""},bV:{"^":"a;","%":""},bX:{"^":"a;","%":""},c4:{"^":"a;","%":""},c5:{"^":"a;","%":""},c0:{"^":"a;","%":""},bo:{"^":"a;","%":""}}],["","",,U,{"^":"",
ab:function(){var z,y,x
z=["January","February","March","April","May","June"]
y={data:{datasets:[{backgroundColor:"rgba(220,220,220,0.2)",data:new H.Y(z,new U.bf(C.b)).A(0),label:"My First dataset"},{backgroundColor:"rgba(151,187,205,0.2)",data:new H.Y(z,new U.bg(C.b)).A(0),label:"My Second dataset"}],labels:z},options:{responsive:!0},type:"line"}
x=H.b7(document.querySelector("#canvas"),"$isT")
new self.Chart(x,y)},
bf:{"^":"e;a",
$1:function(a){return this.a.w(100)}},
bg:{"^":"e;a",
$1:function(a){return this.a.w(100)}}},1]]
setupProgram(dart,0)
J.k=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aB.prototype
return J.aA.prototype}if(typeof a=="string")return J.x.prototype
if(a==null)return J.aC.prototype
if(typeof a=="boolean")return J.az.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.c)return a
return J.a9(a)}
J.aW=function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof P.c))return J.z.prototype
return a}
J.C=function(a){if(typeof a=="string")return J.x.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.c)return a
return J.a9(a)}
J.aX=function(a){if(typeof a=="number")return J.G.prototype
if(typeof a=="string")return J.x.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.z.prototype
return a}
J.o=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.aX(a).t(a,b)}
J.af=function(a,b){return J.aW(a).m(a,b)}
J.p=function(a){return J.C(a).gi(a)}
J.v=function(a){return J.k(a).h(a)}
var $=I.p
C.h=J.h.prototype
C.i=J.t.prototype
C.c=J.x.prototype
C.p=J.I.prototype
C.f=J.aI.prototype
C.a=J.z.prototype
C.b=new P.aR()
C.j=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.k=function(hooks) {
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
C.d=function(hooks) { return hooks; }

C.l=function(getTagFallback) {
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
C.m=function() {
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
C.n=function(hooks) {
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
C.o=function(hooks) {
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
C.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$.f=0
$.m=null
$.R=null
$.N=null
$.a4=null
$.ad=null
$.B=null
$.D=null
$.O=null
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){var z=$dart_deferred_initializers$[a]
if(z==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
z($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryUris={}
init.deferredLibraryHashes={};(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["W","$get$W",function(){return H.a8("_$dart_dartClosure")},"H","$get$H",function(){return H.a8("_$dart_js")},"A","$get$A",function(){return[]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.bk(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.a7=a.a7
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.ab,[])
else U.ab([])})})()