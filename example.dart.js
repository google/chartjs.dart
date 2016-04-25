(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
return y.__proto__&&y.__proto__.p===z.prototype.p}()
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
a7.$isb=a6
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
var d=supportsDirectProtoAccess&&b1!="b"
for(var c=0;c<f.length;c++){var a0=f[c]
var a1=a0.charCodeAt(0)
if(a0==="j"){processStatics(init.statics[b1]=b2.j,b3)
delete b2.j}else if(a1===43){w[g]=a0.substring(1)
var a2=b2[a0]
if(a2>0)b2[g].$reflectable=a2}else if(a1===42){b2[g].$defaultValues=b2[a0]
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
if(b0)b2.$signature=function(b4){return function(){return init.types[b4]}}(b0)}if(a7)b3.pending[b1]=a7
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
if(d&&d.length)init.typeInformation[a0]=d}else if(c===42){m[a0].$defaultValues=d
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
Function.prototype.$2=function(c,d){return this(c,d)}
Function.prototype.$1=function(c){return this(c)}
Function.prototype.$4=function(c,d,e,f){return this(c,d,e,f)}
Function.prototype.$3=function(c,d,e){return this(c,d,e)}
function tearOffGetter(c,d,e,f){return f?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"(x) {"+"if (c === null) c = "+"H.K"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(c,d,e,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"() {"+"if (c === null) c = "+"H.K"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(c,d,e,H,null)}function tearOff(c,d,e,f,a0){var g
return e?function(){if(g===void 0)g=H.K(this,c,d,true,[],f).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ab=function(){}
var dart=[["","",,H,{"^":"",bB:{"^":"b;a"}}],["","",,J,{"^":"",
k:function(a){return void 0},
E:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
M:function(a){var z,y,x,w
z=a[init.dispatchPropertyName]
if(z==null)if($.P==null){H.b7()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(new P.a6("Return interceptor for "+H.a(y(a,z))))}w=H.bg(a)
if(w==null){if(typeof a=="function")return C.o
y=Object.getPrototypeOf(a)
if(y==null||y===Object.prototype)return C.p
else return C.q}return w},
h:{"^":"b;",
h:["F",function(a){return H.y(a)}],
"%":"ApplicationCacheErrorEvent|AutocompleteErrorEvent|CanvasRenderingContext2D|DOMError|ErrorEvent|Event|FileError|InputEvent|MediaError|MediaKeyError|Navigator|NavigatorUserMediaError|PositionError|SQLError|SpeechRecognitionError"},
aE:{"^":"h;",
h:function(a){return String(a)},
$isaY:1},
aG:{"^":"h;",
h:function(a){return"null"}},
d:{"^":"h;",
h:["G",function(a){return String(a)}],
sJ:function(a,b){return a.responsive=b},
H:function(a,b,c){return a.Line(b,c)},
gD:function(a){return a.global}},
aM:{"^":"d;"},
z:{"^":"d;"},
x:{"^":"d;",
h:function(a){var z=a[$.$get$Z()]
return z==null?this.G(a):J.u(z)}},
r:{"^":"h;",
I:function(a,b){if(!!a.fixed$length)throw H.c(new P.aU(b))},
m:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
h:function(a){return P.aC(a,"[","]")},
gi:function(a){return a.length},
si:function(a,b){this.I(a,"set length")
a.length=b},
$isH:1},
bA:{"^":"r;"},
an:{"^":"b;a,b,c,d",
k:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.bm(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
G:{"^":"h;",
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
u:function(a,b){return a+b},
$ist:1},
a0:{"^":"G;",$ist:1,$isah:1},
aF:{"^":"G;",$ist:1},
w:{"^":"h;",
u:function(a,b){if(typeof b!=="string")throw H.c(P.am(b,null,null))
return a+b},
v:function(a,b,c){H.aa(b)
if(c==null)c=a.length
H.aa(c)
if(typeof c!=="number")return H.O(c)
if(b>c)throw H.c(P.J(b,null,null))
if(c>a.length)throw H.c(P.J(c,null,null))
return a.substring(b,c)},
E:function(a,b){return this.v(a,b,null)},
h:function(a){return a},
gi:function(a){return a.length},
$isaT:1}}],["","",,H,{"^":"",
b2:function(a){return init.types[a]},
a:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.u(a)
if(typeof z!=="string")throw H.c(H.a9(a))
return z},
aN:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
I:function(a){var z,y,x,w,v,u,t,s,r
z=J.k(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.d||!!J.k(a).$isz){v=C.b(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1)r=w.charCodeAt(0)===36
else r=!1
if(r)w=C.h.E(w,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+H.ac(H.b1(a),0,null),init.mangledGlobalNames)},
y:function(a){return"Instance of '"+H.I(a)+"'"},
O:function(a){throw H.c(H.a9(a))},
i:function(a,b){if(a==null)J.m(a)
throw H.c(H.aZ(a,b))},
aZ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.p(!0,b,"index",null)
z=J.m(a)
if(!(b<0)){if(typeof z!=="number")return H.O(z)
y=b>=z}else y=!0
if(y)return P.aA(b,a,"index",null,z)
return P.J(b,"index",null)},
a9:function(a){return new P.p(!0,a,null,null)},
aa:function(a){return a},
c:function(a){var z
if(a==null)a=new P.aL()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ag})
z.name=""}else z.toString=H.ag
return z},
ag:function(){return J.u(this.dartException)},
bm:function(a){throw H.c(new P.Y(a))},
ba:function(a,b,c,d,e,f,g){switch(c){case 0:return new H.bb(a).$0()
case 1:return new H.bc(a,d).$0()
case 2:return new H.bd(a,d,e).$0()
case 3:return new H.be(a,d,e,f).$0()
case 4:return new H.bf(a,d,e,f,g).$0()}throw H.c(new P.aV("Unsupported number of arguments for wrapped closure"))},
bL:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,$,H.ba)
a.$identity=z
return z},
au:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.k(c).$isH){z.$reflectionInfo=c
x=H.aQ(z).r}else x=c
w=d?Object.create(new H.aS().constructor.prototype):Object.create(new H.R(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.f
$.f=J.o(u,1)
u=new Function("a,b,c,d","this.$initialize(a,b,c,d);"+u)
v=u}w.constructor=v
v.prototype=w
u=!d
if(u){t=e.length==1&&!0
s=H.X(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.b2,x)
else if(u&&typeof x=="function"){q=t?H.T:H.F
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$signature=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.X(a,o,t)
w[n]=m}}w["call*"]=s
w.$requiredArgCount=z.$requiredArgCount
w.$defaultValues=z.$defaultValues
return v},
ar:function(a,b,c,d){var z=H.F
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
X:function(a,b,c){var z,y,x,w,v,u
if(c)return H.at(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ar(y,!w,z,b)
if(y===0){w=$.n
if(w==null){w=H.v("self")
$.n=w}w="return function(){return this."+H.a(w)+"."+H.a(z)+"();"
v=$.f
$.f=J.o(v,1)
return new Function(w+H.a(v)+"}")()}u="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w="return function("+u+"){return this."
v=$.n
if(v==null){v=H.v("self")
$.n=v}v=w+H.a(v)+"."+H.a(z)+"("+u+");"
w=$.f
$.f=J.o(w,1)
return new Function(v+H.a(w)+"}")()},
as:function(a,b,c,d){var z,y
z=H.F
y=H.T
switch(b?-1:a){case 0:throw H.c(new H.aR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
at:function(a,b){var z,y,x,w,v,u,t,s
z=H.ao()
y=$.S
if(y==null){y=H.v("receiver")
$.S=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.as(w,!u,x,b)
if(w===1){y="return function(){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+");"
u=$.f
$.f=J.o(u,1)
return new Function(y+H.a(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+", "+s+");"
u=$.f
$.f=J.o(u,1)
return new Function(y+H.a(u)+"}")()},
K:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.k(c).$isH){c.fixed$length=Array
z=c}else z=c
return H.au(a,b,z,!!d,e,f)},
bk:function(a,b){var z=J.C(b)
throw H.c(H.aq(H.I(a),z.v(b,3,z.gi(b))))},
b9:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.k(a)[b]
else z=!0
if(z)return a
H.bk(a,b)},
bn:function(a){throw H.c(new P.av("Cyclic initialization for static "+H.a(a)))},
b1:function(a){if(a==null)return
return a.$builtinTypeInfo},
bl:function(a,b){if(a==null)return"dynamic"
else if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ac(a,1,b)
else if(typeof a=="function")return a.builtin$cls
else if(typeof a==="number"&&Math.floor(a)===a)return C.f.h(a)
else return},
ac:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.a3("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.a(H.bl(u,c))}return w?"":"<"+H.a(z)+">"},
bO:function(a){var z=$.N
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
bN:function(a){return H.aN(a)},
bM:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
bg:function(a){var z,y,x,w,v,u
z=$.N.$1(a)
y=$.B[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.D[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.a8.$2(a,z)
if(z!=null){y=$.B[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.D[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.Q(x)
$.B[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.D[z]=x
return x}if(v==="-"){u=H.Q(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ae(a,x)
if(v==="*")throw H.c(new P.a6(z))
if(init.leafTags[z]===true){u=H.Q(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ae(a,x)},
ae:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.E(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
Q:function(a){return J.E(a,!1,null,!!a.$isaH)},
bj:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.E(z,!1,null,!!z.$isaH)
else return J.E(z,c,null,null)},
b7:function(){if(!0===$.P)return
$.P=!0
H.b8()},
b8:function(){var z,y,x,w,v,u,t,s
$.B=Object.create(null)
$.D=Object.create(null)
H.b3()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.af.$1(v)
if(u!=null){t=H.bj(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
b3:function(){var z,y,x,w,v,u,t
z=C.l()
z=H.l(C.i,H.l(C.n,H.l(C.c,H.l(C.c,H.l(C.m,H.l(C.j,H.l(C.k(C.b),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.N=new H.b4(v)
$.a8=new H.b5(u)
$.af=new H.b6(t)},
l:function(a,b){return a(b)||b},
aP:{"^":"b;a,b,c,d,e,f,r,x",j:{
aQ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.aP(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
bb:{"^":"e;a",
$0:function(){return this.a.$0()}},
bc:{"^":"e;a,b",
$0:function(){return this.a.$1(this.b)}},
bd:{"^":"e;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
be:{"^":"e;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
bf:{"^":"e;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
e:{"^":"b;",
h:function(a){return"Closure '"+H.I(this)+"'"},
gC:function(){return this},
gC:function(){return this}},
a5:{"^":"e;"},
aS:{"^":"a5;",
h:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
R:{"^":"a5;a,b,c,d",
h:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.a(this.d)+"' of "+H.y(z)},
j:{
F:function(a){return a.a},
T:function(a){return a.c},
ao:function(){var z=$.n
if(z==null){z=H.v("self")
$.n=z}return z},
v:function(a){var z,y,x,w,v
z=new H.R("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
ap:{"^":"j;a",
h:function(a){return this.a},
j:{
aq:function(a,b){return new H.ap("CastError: Casting value of type "+a+" to incompatible type "+H.a(b))}}},
aR:{"^":"j;a",
h:function(a){return"RuntimeError: "+H.a(this.a)}},
b4:{"^":"e;a",
$1:function(a){return this.a(a)}},
b5:{"^":"e;a",
$2:function(a,b){return this.a(a,b)}},
b6:{"^":"e;a",
$1:function(a){return this.a(a)}}}],["","",,R,{"^":"",bt:{"^":"d;","%":""},bD:{"^":"d;","%":""},bw:{"^":"d;","%":""},bu:{"^":"d;","%":""},W:{"^":"d;","%":""},bH:{"^":"d;","%":""},V:{"^":"d;","%":""},bE:{"^":"V;","%":""},bx:{"^":"V;","%":""},bC:{"^":"W;","%":""},br:{"^":"W;","%":""},bJ:{"^":"d;","%":""},bI:{"^":"d;","%":""},bG:{"^":"d;","%":""},bs:{"^":"d;","%":""},bv:{"^":"d;","%":""}}],["","",,N,{"^":"",
ad:function(){var z,y,x,w
J.al(J.ak(self.Chart.defaults),!0)
z=H.b9(document.querySelector("#canvas"),"$isU")
z.toString
y=z.getContext("2d")
x=["January","February","March","April","May","June"]
w={datasets:[{data:new H.a1(x,new N.bh(C.a)).B(0),fillColor:"rgba(220,220,220,0.2)",label:"My First dataset",pointColor:"rgba(220,220,220,1)",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",pointStrokeColor:"#fff",strokeColor:"rgba(220,220,220,1)"},{data:new H.a1(x,new N.bi(C.a)).B(0),fillColor:"rgba(151,187,205,0.2)",label:"My Second dataset",pointColor:"rgba(151,187,205,1)",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",pointStrokeColor:"#fff",strokeColor:"rgba(151,187,205,1)"}],labels:x}
J.ai(new self.Chart(y),w,{pointDotRadius:10})},
bh:{"^":"e;a",
$1:function(a){return this.a.A(100)}},
bi:{"^":"e;a",
$1:function(a){return this.a.A(100)}}},1],["","",,H,{"^":"",aI:{"^":"aB;",
gw:function(a){return new H.aJ(this,J.m(this.a),0,null)},
K:function(a,b){var z,y,x,w,v
z=[]
C.e.si(z,J.m(this.a))
for(y=this.a,x=J.C(y),w=0;w<x.gi(y);++w){v=this.t(x.m(y,w))
if(w>=z.length)return H.i(z,w)
z[w]=v}return z},
B:function(a){return this.K(a,!0)}},aJ:{"^":"b;a,b,c,d",
gl:function(){return this.d},
k:function(){var z,y,x,w,v
z=this.a
y=z.a
x=J.C(y)
w=x.gi(y)
if(this.b!==w)throw H.c(new P.Y(z))
v=this.c
if(v>=w){this.d=null
return!1}this.d=z.t(x.m(y,v));++this.c
return!0}},a1:{"^":"aI;a,b",
gi:function(a){return J.m(this.a)},
m:function(a,b){return this.t(J.aj(this.a,b))},
t:function(a){return this.b.$1(a)}}}],["","",,P,{"^":"",
aD:function(a,b,c){var z,y
if(P.a7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$A()
y.push(a)
try{P.aX(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.a4(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
aC:function(a,b,c){var z,y,x
if(P.a7(a))return b+"..."+c
z=new P.a3(b)
y=$.$get$A()
y.push(a)
try{x=z
x.a=P.a4(x.gn(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gn()+c
y=z.gn()
return y.charCodeAt(0)==0?y:y},
a7:function(a){var z,y
for(z=0;y=$.$get$A(),z<y.length;++z)if(a===y[z])return!0
return!1},
aX:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.k())return
w=H.a(z.gl())
b.push(w)
y+=w.length+2;++x}if(!z.k()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gl();++x
if(!z.k()){if(x<=4){b.push(H.a(t))
return}v=H.a(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gl();++x
for(;z.k();t=s,s=r){r=z.gl();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.a(t)
v=H.a(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)}}],["","",,P,{"^":"",
a_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.u(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ax(a)},
ax:function(a){var z=J.k(a)
if(!!z.$ise)return z.h(a)
return H.y(a)},
aY:{"^":"b;",
h:function(a){return this?"true":"false"}},
"+bool":0,
bo:{"^":"t;"},
"+double":0,
j:{"^":"b;"},
aL:{"^":"j;",
h:function(a){return"Throw of null."}},
p:{"^":"j;a,b,c,d",
gq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gp:function(){return""},
h:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+H.a(z)+")":""
z=this.d
x=z==null?"":": "+H.a(z)
w=this.gq()+y+x
if(!this.a)return w
v=this.gp()
u=P.a_(this.b)
return w+v+": "+H.a(u)},
j:{
am:function(a,b,c){return new P.p(!0,a,b,c)}}},
a2:{"^":"p;e,f,a,b,c,d",
gq:function(){return"RangeError"},
gp:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.a(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.a(z)
else{if(typeof x!=="number")return x.L()
if(typeof z!=="number")return H.O(z)
if(x>z)y=": Not in range "+z+".."+x+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+z}}return y},
j:{
aO:function(a){return new P.a2(null,null,!1,null,null,a)},
J:function(a,b,c){return new P.a2(null,null,!0,a,b,"Value not in range")}}},
az:{"^":"p;e,i:f>,a,b,c,d",
gq:function(){return"RangeError"},
gp:function(){var z=this.b
if(typeof z!=="number")return z.M()
if(z<0)return": index must not be negative"
z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.a(z)},
j:{
aA:function(a,b,c,d,e){var z=e!=null?e:J.m(b)
return new P.az(b,z,!0,a,c,"Index out of range")}}},
aU:{"^":"j;a",
h:function(a){return"Unsupported operation: "+this.a}},
a6:{"^":"j;a",
h:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.a(z):"UnimplementedError"}},
Y:{"^":"j;a",
h:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.a(P.a_(z))+"."}},
av:{"^":"j;a",
h:function(a){return"Reading static variable '"+this.a+"' during its initialization"}},
aV:{"^":"b;a",
h:function(a){return"Exception: "+this.a}},
ah:{"^":"t;"},
"+int":0,
aB:{"^":"b;",
gi:function(a){var z,y
z=this.gw(this)
for(y=0;z.k();)++y
return y},
h:function(a){return P.aD(this,"(",")")}},
H:{"^":"b;"},
"+List":0,
bF:{"^":"b;",
h:function(a){return"null"}},
"+Null":0,
t:{"^":"b;"},
"+num":0,
b:{"^":";",
h:function(a){return H.y(this)},
toString:function(){return this.h(this)}},
aT:{"^":"b;"},
"+String":0,
a3:{"^":"b;n:a<",
gi:function(a){return this.a.length},
h:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
j:{
a4:function(a,b,c){var z=new J.an(b,b.length,0,null)
if(!z.k())return a
if(c.length===0){do a+=H.a(z.d)
while(z.k())}else{a+=H.a(z.d)
for(;z.k();)a=a+c+H.a(z.d)}return a}}}}],["","",,W,{"^":"",q:{"^":"aw;","%":"HTMLAppletElement|HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMenuItemElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement|PluginPlaceholderElement;HTMLElement"},bp:{"^":"q;",
h:function(a){return String(a)},
"%":"HTMLAnchorElement"},bq:{"^":"q;",
h:function(a){return String(a)},
"%":"HTMLAreaElement"},U:{"^":"q;",$isU:1,"%":"HTMLCanvasElement"},by:{"^":"h;",
h:function(a){return String(a)},
"%":"DOMException"},aw:{"^":"aK;",
h:function(a){return a.localName},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGCursorElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;Element"},ay:{"^":"h;","%":"DOMWindow|Window;EventTarget"},bz:{"^":"q;i:length=","%":"HTMLFormElement"},aK:{"^":"ay;",
h:function(a){var z=a.nodeValue
return z==null?this.F(a):z},
"%":"Document|HTMLDocument;Node"},bK:{"^":"q;i:length=","%":"HTMLSelectElement"}}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,P,{"^":"",aW:{"^":"b;",
A:function(a){if(a<=0||a>4294967296)throw H.c(P.aO("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}}]]
setupProgram(dart,0)
J.k=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a0.prototype
return J.aF.prototype}if(typeof a=="string")return J.w.prototype
if(a==null)return J.aG.prototype
if(typeof a=="boolean")return J.aE.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof P.b)return a
return J.M(a)}
J.b_=function(a){if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.b))return J.z.prototype
return a}
J.C=function(a){if(typeof a=="string")return J.w.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof P.b)return a
return J.M(a)}
J.b0=function(a){if(typeof a=="number")return J.G.prototype
if(typeof a=="string")return J.w.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.z.prototype
return a}
J.L=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof P.b)return a
return J.M(a)}
J.o=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.b0(a).u(a,b)}
J.ai=function(a,b,c){return J.L(a).H(a,b,c)}
J.aj=function(a,b){return J.b_(a).m(a,b)}
J.ak=function(a){return J.L(a).gD(a)}
J.m=function(a){return J.C(a).gi(a)}
J.al=function(a,b){return J.L(a).sJ(a,b)}
J.u=function(a){return J.k(a).h(a)}
var $=I.p
C.d=J.h.prototype
C.e=J.r.prototype
C.f=J.a0.prototype
C.h=J.w.prototype
C.o=J.x.prototype
C.p=J.aM.prototype
C.q=J.z.prototype
C.a=new P.aW()
C.i=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.j=function(hooks) {
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
C.b=function getTagFallback(o) {
  var constructor = o.constructor;
  if (typeof constructor == "function") {
    var name = constructor.name;
    if (typeof name == "string" &&
        name.length > 2 &&
        name !== "Object" &&
        name !== "Function.prototype") {
      return name;
    }
  }
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.c=function(hooks) { return hooks; }

C.k=function(getTagFallback) {
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
C.m=function(hooks) {
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
C.l=function() {
  function typeNameInChrome(o) {
    var constructor = o.constructor;
    if (constructor) {
      var name = constructor.name;
      if (name) return name;
    }
    var s = Object.prototype.toString.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = Object.prototype.toString.call(object);
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
    getTag: typeNameInChrome,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.n=function(hooks) {
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
$.f=0
$.n=null
$.S=null
$.N=null
$.a8=null
$.af=null
$.B=null
$.D=null
$.P=null
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){$dart_deferred_initializers$[a]($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryUris={}
init.deferredLibraryHashes={};(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["Z","$get$Z",function(){return init.getIsolateTag("_$dart_dartClosure")},"A","$get$A",function(){return[]}])
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
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}else if(x===y)H.bn(d||a)
return x}finally{this[b]=function(){return this[a]}}}}
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
Isolate.ab=a.ab
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
if(typeof dartMainRunner==="function")dartMainRunner(N.ad,[])
else N.ad([])})})()