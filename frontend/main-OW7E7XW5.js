import{$ as de,$a as Vr,A as hr,Aa as Rr,B as Me,Ba as Tr,C as gr,Ca as N,D as R,Da as X,E as bo,Ea as Dr,F as mr,Fa as xo,G as ee,Ga as Ar,H as se,Ha as Ir,I as vo,Ia as Mr,J as Ce,Ja as Or,K as Oe,Ka as Pt,L as br,La as Br,M as yo,Ma as F,N as vr,Na as Nr,O as J,Oa as Be,P as yr,Pa as me,Q as wo,Qa as rt,R as wr,Ra as Le,S as tt,Sa as Fr,T as x,Ta as Pr,U as O,Ua as I,V as Cr,Va as Lt,W as kr,Wa as Ve,X as xr,Xa as Lr,Y as Mt,Ya as Vt,Z as ot,Za as $e,_ as Co,_a as $t,a as ho,aa as B,ab as te,b as At,ba as Fe,bb as $r,c as sr,ca as K,cb as zt,d as It,da as _r,db as Se,e as go,ea as ue,eb as jt,f as Ae,fa as C,g as ar,ga as ko,h as lr,ha as Sr,i as cr,ia as ke,j as dr,ja as Er,k as ur,ka as w,l as mo,la as k,m as we,ma as A,n as Ze,na as Ot,o as b,oa as Bt,p as H,pa as Nt,q as D,qa as Pe,r as _,ra as W,s as g,sa as xe,t as et,ta as _e,u as $,ua as fe,v as G,va as he,w as z,wa as ge,x as Ie,xa as Y,y as pr,ya as Ft,z as fr,za as qr}from"./chunk-ZZESNVHO.js";import{a as m,b as U,g as fo}from"./chunk-GAL4ENT6.js";var it=class{},Ut=class{},be=class e{constructor(o){this.normalizedNames=new Map,this.lazyUpdate=null,o?typeof o=="string"?this.lazyInit=()=>{this.headers=new Map,o.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let n=t.slice(0,r),i=n.toLowerCase(),s=t.slice(r+1).trim();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:typeof Headers<"u"&&o instanceof Headers?(this.headers=new Map,o.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(o).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(o){return this.init(),this.headers.has(o.toLowerCase())}get(o){this.init();let t=this.headers.get(o.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(o){return this.init(),this.headers.get(o.toLowerCase())||null}append(o,t){return this.clone({name:o,value:t,op:"a"})}set(o,t){return this.clone({name:o,value:t,op:"s"})}delete(o,t){return this.clone({name:o,value:t,op:"d"})}maybeSetNormalizedName(o,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,o)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(o=>this.applyUpdate(o)),this.lazyUpdate=null))}copyFrom(o){o.init(),Array.from(o.headers.keys()).forEach(t=>{this.headers.set(t,o.headers.get(t)),this.normalizedNames.set(t,o.normalizedNames.get(t))})}clone(o){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([o]),t}applyUpdate(o){let t=o.name.toLowerCase();switch(o.op){case"a":case"s":let r=o.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(o.name,t);let n=(o.op==="a"?this.headers.get(t):void 0)||[];n.push(...r),this.headers.set(t,n);break;case"d":let i=o.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>i.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}setHeaderEntries(o,t){let r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),n=o.toLowerCase();this.headers.set(n,r),this.maybeSetNormalizedName(o,n)}forEach(o){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>o(this.normalizedNames.get(t),this.headers.get(t)))}};var So=class{encodeKey(o){return zr(o)}encodeValue(o){return zr(o)}decodeKey(o){return decodeURIComponent(o)}decodeValue(o){return decodeURIComponent(o)}};function da(e,o){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(n=>{let i=n.indexOf("="),[s,a]=i==-1?[o.decodeKey(n),""]:[o.decodeKey(n.slice(0,i)),o.decodeValue(n.slice(i+1))],l=t.get(s)||[];l.push(a),t.set(s,l)}),t}var ua=/%(\d[a-f0-9])/gi,pa={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function zr(e){return encodeURIComponent(e).replace(ua,(o,t)=>pa[t]??o)}function Wt(e){return`${e}`}var qe=class e{constructor(o={}){if(this.updates=null,this.cloneFrom=null,this.encoder=o.encoder||new So,o.fromString){if(o.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=da(o.fromString,this.encoder)}else o.fromObject?(this.map=new Map,Object.keys(o.fromObject).forEach(t=>{let r=o.fromObject[t],n=Array.isArray(r)?r.map(Wt):[Wt(r)];this.map.set(t,n)})):this.map=null}has(o){return this.init(),this.map.has(o)}get(o){this.init();let t=this.map.get(o);return t?t[0]:null}getAll(o){return this.init(),this.map.get(o)||null}keys(){return this.init(),Array.from(this.map.keys())}append(o,t){return this.clone({param:o,value:t,op:"a"})}appendAll(o){let t=[];return Object.keys(o).forEach(r=>{let n=o[r];Array.isArray(n)?n.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:n,op:"a"})}),this.clone(t)}set(o,t){return this.clone({param:o,value:t,op:"s"})}delete(o,t){return this.clone({param:o,value:t,op:"d"})}toString(){return this.init(),this.keys().map(o=>{let t=this.encoder.encodeKey(o);return this.map.get(o).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(o=>o!=="").join("&")}clone(o){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(o),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(o=>this.map.set(o,this.cloneFrom.map.get(o))),this.updates.forEach(o=>{switch(o.op){case"a":case"s":let t=(o.op==="a"?this.map.get(o.param):void 0)||[];t.push(Wt(o.value)),this.map.set(o.param,t);break;case"d":if(o.value!==void 0){let r=this.map.get(o.param)||[],n=r.indexOf(Wt(o.value));n!==-1&&r.splice(n,1),r.length>0?this.map.set(o.param,r):this.map.delete(o.param)}else{this.map.delete(o.param);break}}}),this.cloneFrom=this.updates=null)}};var Eo=class{constructor(){this.map=new Map}set(o,t){return this.map.set(o,t),this}get(o){return this.map.has(o)||this.map.set(o,o.defaultValue()),this.map.get(o)}delete(o){return this.map.delete(o),this}has(o){return this.map.has(o)}keys(){return this.map.keys()}};function fa(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function jr(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Wr(e){return typeof Blob<"u"&&e instanceof Blob}function Ur(e){return typeof FormData<"u"&&e instanceof FormData}function ha(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var nt=class e{constructor(o,t,r,n){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=o.toUpperCase();let i;if(fa(this.method)||n?(this.body=r!==void 0?r:null,i=n):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new be,this.context??=new Eo,!this.params)this.params=new qe,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||jr(this.body)||Wr(this.body)||Ur(this.body)||ha(this.body)?this.body:this.body instanceof qe?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ur(this.body)?null:Wr(this.body)?this.body.type||null:jr(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof qe?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(o={}){let t=o.method||this.method,r=o.url||this.url,n=o.responseType||this.responseType,i=o.transferCache??this.transferCache,s=o.body!==void 0?o.body:this.body,a=o.withCredentials??this.withCredentials,l=o.reportProgress??this.reportProgress,c=o.headers||this.headers,d=o.params||this.params,u=o.context??this.context;return o.setHeaders!==void 0&&(c=Object.keys(o.setHeaders).reduce((f,p)=>f.set(p,o.setHeaders[p]),c)),o.setParams&&(d=Object.keys(o.setParams).reduce((f,p)=>f.set(p,o.setParams[p]),d)),new e(t,r,s,{params:d,headers:c,context:u,reportProgress:l,responseType:n,withCredentials:a,transferCache:i})}},Re=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(Re||{}),st=class{constructor(o,t=200,r="OK"){this.headers=o.headers||new be,this.status=o.status!==void 0?o.status:t,this.statusText=o.statusText||r,this.url=o.url||null,this.ok=this.status>=200&&this.status<300}},Ht=class e extends st{constructor(o={}){super(o),this.type=Re.ResponseHeader}clone(o={}){return new e({headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},at=class e extends st{constructor(o={}){super(o),this.type=Re.Response,this.body=o.body!==void 0?o.body:null}clone(o={}){return new e({body:o.body!==void 0?o.body:this.body,headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},Ee=class extends st{constructor(o){super(o,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${o.url||"(unknown url)"}`:this.message=`Http failure response for ${o.url||"(unknown url)"}: ${o.status} ${o.statusText}`,this.error=o.error||null}},Yr=200,ga=204;function _o(e,o){return{body:o,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var To=(()=>{class e{constructor(t){this.handler=t}request(t,r,n={}){let i;if(t instanceof nt)i=t;else{let l;n.headers instanceof be?l=n.headers:l=new be(n.headers);let c;n.params&&(n.params instanceof qe?c=n.params:c=new qe({fromObject:n.params})),i=new nt(t,r,n.body!==void 0?n.body:null,{headers:l,context:n.context,params:c,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials,transferCache:n.transferCache})}let s=go(i).pipe(cr(l=>this.handler.handle(l)));if(t instanceof nt||n.observe==="events")return s;let a=s.pipe(lr(l=>l instanceof at));switch(n.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(Ae(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(Ae(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(Ae(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return a.pipe(Ae(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new qe().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,n={}){return this.request("PATCH",t,_o(n,r))}post(t,r,n={}){return this.request("POST",t,_o(n,r))}put(t,r,n={}){return this.request("PUT",t,_o(n,r))}static{this.\u0275fac=function(r){return new(r||e)(_(it))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),ma=/^\)\]\}',?\n/,ba="X-Request-URL";function Hr(e){if(e.url)return e.url;let o=ba.toLocaleLowerCase();return e.headers.get(o)}var va=(()=>{class e{constructor(){this.fetchImpl=g(qo,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t)),this.ngZone=g(se)}handle(t){return new ho(r=>{let n=new AbortController;return this.doRequest(t,n.signal,r).then(Ro,i=>r.error(new Ee({error:i}))),()=>n.abort()})}doRequest(t,r,n){return fo(this,null,function*(){let i=this.createRequestInit(t),s;try{let p=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,m({signal:r},i)));ya(p),n.next({type:Re.Sent}),s=yield p}catch(p){n.error(new Ee({error:p,status:p.status??0,statusText:p.statusText,url:t.urlWithParams,headers:p.headers}));return}let a=new be(s.headers),l=s.statusText,c=Hr(s)??t.urlWithParams,d=s.status,u=null;if(t.reportProgress&&n.next(new Ht({headers:a,status:d,statusText:l,url:c})),s.body){let p=s.headers.get("content-length"),v=[],h=s.body.getReader(),y=0,M,T,E=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>fo(this,null,function*(){for(;;){let{done:Z,value:ce}=yield h.read();if(Z)break;if(v.push(ce),y+=ce.length,t.reportProgress){T=t.responseType==="text"?(T??"")+(M??=new TextDecoder).decode(ce,{stream:!0}):void 0;let De=()=>n.next({type:Re.DownloadProgress,total:p?+p:void 0,loaded:y,partialText:T});E?E.run(De):De()}}}));let L=this.concatChunks(v,y);try{let Z=s.headers.get("Content-Type")??"";u=this.parseBody(t,L,Z)}catch(Z){n.error(new Ee({error:Z,headers:new be(s.headers),status:s.status,statusText:s.statusText,url:Hr(s)??t.urlWithParams}));return}}d===0&&(d=u?Yr:0),d>=200&&d<300?(n.next(new at({body:u,headers:a,status:d,statusText:l,url:c})),n.complete()):n.error(new Ee({error:u,headers:a,status:d,statusText:l,url:c}))})}parseBody(t,r,n){switch(t.responseType){case"json":let i=new TextDecoder().decode(r).replace(ma,"");return i===""?null:JSON.parse(i);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:n});case"arraybuffer":return r.buffer}}createRequestInit(t){let r={},n=t.withCredentials?"include":void 0;if(t.headers.forEach((i,s)=>r[i]=s.join(",")),t.headers.has("Accept")||(r.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let i=t.detectContentTypeHeader();i!==null&&(r["Content-Type"]=i)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:n}}concatChunks(t,r){let n=new Uint8Array(r),i=0;for(let s of t)n.set(s,i),i+=s.length;return n}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),qo=class{};function Ro(){}function ya(e){e.then(Ro,Ro)}function wa(e,o){return o(e)}function Ca(e,o,t){return(r,n)=>hr(t,()=>o(r,i=>e(i,n)))}var Xr=new D(""),ka=new D(""),xa=new D("",{providedIn:"root",factory:()=>!0});var Gr=(()=>{class e extends it{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=g(mr),this.contributeToStability=g(xa)}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Xr),...this.injector.get(ka,[])]));this.chain=r.reduceRight((n,i)=>Ca(n,i,this.injector),wa)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(t,n=>this.backend.handle(n)).pipe(dr(()=>this.pendingTasks.remove(r)))}else return this.chain(t,r=>this.backend.handle(r))}static{this.\u0275fac=function(r){return new(r||e)(_(Ut),_(fr))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})();var _a=/^\)\]\}',?\n/;function Sa(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var Kr=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new we(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?It(r.\u0275loadImpl()):go(null)).pipe(ur(()=>new ho(i=>{let s=r.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((h,y)=>s.setRequestHeader(h,y.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let h=t.detectContentTypeHeader();h!==null&&s.setRequestHeader("Content-Type",h)}if(t.responseType){let h=t.responseType.toLowerCase();s.responseType=h!=="json"?h:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let h=s.statusText||"OK",y=new be(s.getAllResponseHeaders()),M=Sa(s)||t.url;return l=new Ht({headers:y,status:s.status,statusText:h,url:M}),l},d=()=>{let{headers:h,status:y,statusText:M,url:T}=c(),E=null;y!==ga&&(E=typeof s.response>"u"?s.responseText:s.response),y===0&&(y=E?Yr:0);let L=y>=200&&y<300;if(t.responseType==="json"&&typeof E=="string"){let Z=E;E=E.replace(_a,"");try{E=E!==""?JSON.parse(E):null}catch(ce){E=Z,L&&(L=!1,E={error:ce,text:E})}}L?(i.next(new at({body:E,headers:h,status:y,statusText:M,url:T||void 0})),i.complete()):i.error(new Ee({error:E,headers:h,status:y,statusText:M,url:T||void 0}))},u=h=>{let{url:y}=c(),M=new Ee({error:h,status:s.status||0,statusText:s.statusText||"Unknown Error",url:y||void 0});i.error(M)},f=!1,p=h=>{f||(i.next(c()),f=!0);let y={type:Re.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(y.total=h.total),t.responseType==="text"&&s.responseText&&(y.partialText=s.responseText),i.next(y)},v=h=>{let y={type:Re.UploadProgress,loaded:h.loaded};h.lengthComputable&&(y.total=h.total),i.next(y)};return s.addEventListener("load",d),s.addEventListener("error",u),s.addEventListener("timeout",u),s.addEventListener("abort",u),t.reportProgress&&(s.addEventListener("progress",p),a!==null&&s.upload&&s.upload.addEventListener("progress",v)),s.send(a),i.next({type:Re.Sent}),()=>{s.removeEventListener("error",u),s.removeEventListener("abort",u),s.removeEventListener("load",d),s.removeEventListener("timeout",u),t.reportProgress&&(s.removeEventListener("progress",p),a!==null&&s.upload&&s.upload.removeEventListener("progress",v)),s.readyState!==s.DONE&&s.abort()}})))}static{this.\u0275fac=function(r){return new(r||e)(_(jt))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Jr=new D(""),Ea="XSRF-TOKEN",qa=new D("",{providedIn:"root",factory:()=>Ea}),Ra="X-XSRF-TOKEN",Ta=new D("",{providedIn:"root",factory:()=>Ra}),Gt=class{},Da=(()=>{class e{constructor(t,r,n){this.doc=t,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Lt(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(r){return new(r||e)(_(I),_(J),_(qa))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})();function Aa(e,o){let t=e.url.toLowerCase();if(!g(Jr)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return o(e);let r=g(Gt).getToken(),n=g(Ta);return r!=null&&!e.headers.has(n)&&(e=e.clone({headers:e.headers.set(n,r)})),o(e)}function Qr(...e){let o=[To,Kr,Gr,{provide:it,useExisting:Gr},{provide:Ut,useFactory:()=>g(va,{optional:!0})??g(Kr)},{provide:Xr,useValue:Aa,multi:!0},{provide:Jr,useValue:!0},{provide:Gt,useClass:Da}];for(let t of e)o.push(...t.\u0275providers);return Ie(o)}var Io=class extends Pr{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Mo=class e extends Io{static makeCurrent(){Fr(new e)}onAndCancel(o,t,r){return o.addEventListener(t,r),()=>{o.removeEventListener(t,r)}}dispatchEvent(o,t){o.dispatchEvent(t)}remove(o){o.remove()}createElement(o,t){return t=t||this.getDefaultDocument(),t.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,t){return t==="window"?window:t==="document"?o:t==="body"?o.body:null}getBaseHref(o){let t=Ba();return t==null?null:Na(t)}resetBaseElement(){lt=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return Lt(document.cookie,o)}},lt=null;function Ba(){return lt=lt||document.querySelector("base"),lt?lt.getAttribute("href"):null}function Na(e){return new URL(e,document.baseURI).pathname}var Fa=(()=>{class e{build(){return new XMLHttpRequest}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Oo=new D(""),tn=(()=>{class e{constructor(t,r){this._zone=r,this._eventNameToPlugin=new Map,t.forEach(n=>{n.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,r,n){return this._findPluginFor(r).addEventListener(t,r,n)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(i=>i.supports(t)),!r)throw new we(5101,!1);return this._eventNameToPlugin.set(t,r),r}static{this.\u0275fac=function(r){return new(r||e)(_(Oo),_(se))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Yt=class{constructor(o){this._doc=o}},Do="ng-app-id",on=(()=>{class e{constructor(t,r,n,i={}){this.doc=t,this.appId=r,this.nonce=n,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Se(i),this.resetHostNodes()}addStyles(t){for(let r of t)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(t){for(let r of t)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(r=>r.remove()),t.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let r of this.getAllStyles())this.addStyleToHost(t,r)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let r of this.hostNodes)this.addStyleToHost(r,t)}onStyleRemoved(t){let r=this.styleRef;r.get(t)?.elements?.forEach(n=>n.remove()),r.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Do}="${this.appId}"]`);if(t?.length){let r=new Map;return t.forEach(n=>{n.textContent!=null&&r.set(n.textContent,n)}),r}return null}changeUsageCount(t,r){let n=this.styleRef;if(n.has(t)){let i=n.get(t);return i.usage+=r,i.usage}return n.set(t,{usage:r,elements:[]}),r}getStyleElement(t,r){let n=this.styleNodesInDOM,i=n?.get(r);if(i?.parentNode===t)return n.delete(r),i.removeAttribute(Do),i;{let s=this.doc.createElement("style");return this.nonce&&s.setAttribute("nonce",this.nonce),s.textContent=r,this.platformIsServer&&s.setAttribute(Do,this.appId),t.appendChild(s),s}}addStyleToHost(t,r){let n=this.getStyleElement(t,r),i=this.styleRef,s=i.get(r)?.elements;s?s.push(n):i.set(r,{elements:[n],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(r){return new(r||e)(_(I),_(yo),_(wo,8),_(J))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Ao={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},No=/%COMP%/g,rn="%COMP%",Pa=`_nghost-${rn}`,La=`_ngcontent-${rn}`,Va=!0,$a=new D("",{providedIn:"root",factory:()=>Va});function za(e){return La.replace(No,e)}function ja(e){return Pa.replace(No,e)}function nn(e,o){return o.map(t=>t.replace(No,e))}var Xt=(()=>{class e{constructor(t,r,n,i,s,a,l,c=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=n,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=Se(a),this.defaultRenderer=new ct(t,s,l,this.platformIsServer)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===et.ShadowDom&&(r=U(m({},r),{encapsulation:et.Emulated}));let n=this.getOrCreateRenderer(t,r);return n instanceof Jt?n.applyToHost(t):n instanceof dt&&n.applyStyles(),n}getOrCreateRenderer(t,r){let n=this.rendererByCompId,i=n.get(r.id);if(!i){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.platformIsServer;switch(r.encapsulation){case et.Emulated:i=new Jt(l,c,r,this.appId,d,s,a,u);break;case et.ShadowDom:return new Bo(l,c,t,r,s,a,this.nonce,u);default:i=new dt(l,c,r,d,s,a,u);break}n.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(r){return new(r||e)(_(tn),_(on),_(yo),_($a),_(I),_(J),_(se),_(wo))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),ct=class{constructor(o,t,r,n){this.eventManager=o,this.doc=t,this.ngZone=r,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(o,t){return t?this.doc.createElementNS(Ao[t]||t,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,t){(Zr(o)?o.content:o).appendChild(t)}insertBefore(o,t,r){o&&(Zr(o)?o.content:o).insertBefore(t,r)}removeChild(o,t){t.remove()}selectRootElement(o,t){let r=typeof o=="string"?this.doc.querySelector(o):o;if(!r)throw new we(-5104,!1);return t||(r.textContent=""),r}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,t,r,n){if(n){t=n+":"+t;let i=Ao[n];i?o.setAttributeNS(i,t,r):o.setAttribute(t,r)}else o.setAttribute(t,r)}removeAttribute(o,t,r){if(r){let n=Ao[r];n?o.removeAttributeNS(n,t):o.removeAttribute(`${r}:${t}`)}else o.removeAttribute(t)}addClass(o,t){o.classList.add(t)}removeClass(o,t){o.classList.remove(t)}setStyle(o,t,r,n){n&(tt.DashCase|tt.Important)?o.style.setProperty(t,r,n&tt.Important?"important":""):o.style[t]=r}removeStyle(o,t,r){r&tt.DashCase?o.style.removeProperty(t):o.style[t]=""}setProperty(o,t,r){o!=null&&(o[t]=r)}setValue(o,t){o.nodeValue=t}listen(o,t,r){if(typeof o=="string"&&(o=Le().getGlobalEventTarget(this.doc,o),!o))throw new Error(`Unsupported event target ${o} for event ${t}`);return this.eventManager.addEventListener(o,t,this.decoratePreventDefault(r))}decoratePreventDefault(o){return t=>{if(t==="__ngUnwrap__")return o;(this.platformIsServer?this.ngZone.runGuarded(()=>o(t)):o(t))===!1&&t.preventDefault()}}};function Zr(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Bo=class extends ct{constructor(o,t,r,n,i,s,a,l){super(o,i,s,l),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=nn(n.id,n.styles);for(let d of c){let u=document.createElement("style");a&&u.setAttribute("nonce",a),u.textContent=d,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,t){return super.appendChild(this.nodeOrShadowRoot(o),t)}insertBefore(o,t,r){return super.insertBefore(this.nodeOrShadowRoot(o),t,r)}removeChild(o,t){return super.removeChild(null,t)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},dt=class extends ct{constructor(o,t,r,n,i,s,a,l){super(o,i,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=n,this.styles=l?nn(l,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Jt=class extends dt{constructor(o,t,r,n,i,s,a,l){let c=n+"-"+r.id;super(o,t,r,i,s,a,l,c),this.contentAttr=za(c),this.hostAttr=ja(c)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,t){let r=super.createElement(o,t);return super.setAttribute(r,this.contentAttr,""),r}},Wa=(()=>{class e extends Yt{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,n){return t.addEventListener(r,n,!1),()=>this.removeEventListener(t,r,n)}removeEventListener(t,r,n){return t.removeEventListener(r,n)}static{this.\u0275fac=function(r){return new(r||e)(_(I))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),en=["alt","control","meta","shift"],Ua={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ha={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Ga=(()=>{class e extends Yt{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,n){let i=e.parseEventName(r),s=e.eventCallback(i.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Le().onAndCancel(t,i.domEventName,s))}static parseEventName(t){let r=t.toLowerCase().split("."),n=r.shift();if(r.length===0||!(n==="keydown"||n==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),en.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=n,l.fullKey=s,l}static matchEventFullKeyCode(t,r){let n=Ua[t.key]||t.key,i="";return r.indexOf("code.")>-1&&(n=t.code,i="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),en.forEach(s=>{if(s!==n){let a=Ha[s];a(t)&&(i+=s+".")}}),i+=n,i===r)}static eventCallback(t,r,n){return i=>{e.matchEventFullKeyCode(i,t)&&n.runGuarded(()=>r(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(r){return new(r||e)(_(I))}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})();function sn(e,o){return Br(m({rootComponent:e},Ka(o)))}function Ka(e){return{appProviders:[...Za,...e?.providers??[]],platformProviders:Qa}}function Ya(){Mo.makeCurrent()}function Xa(){return new vo}function Ja(){return br(document),document}var Qa=[{provide:J,useValue:$r},{provide:vr,useValue:Ya,multi:!0},{provide:I,useFactory:Ja,deps:[]}];var Za=[{provide:pr,useValue:"root"},{provide:vo,useFactory:Xa,deps:[]},{provide:Oo,useClass:Wa,multi:!0,deps:[I,se,J]},{provide:Oo,useClass:Ga,multi:!0,deps:[I]},Xt,on,tn,{provide:Mt,useExisting:Xt},{provide:jt,useClass:Fa,deps:[]},[]];var el="@",tl=(()=>{class e{constructor(t,r,n,i,s){this.doc=t,this.delegate=r,this.zone=n,this.animationType=i,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=g(xr,{optional:!0}),this.loadingSchedulerFn=g(ol,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-MYHQXK5Z.js").then(n=>n),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(t):r=t(),r.catch(n=>{throw new we(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,r){let n=this.delegate.createRenderer(t,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new Fo(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let a=s.createRenderer(t,r);i.use(a),this.scheduler?.notify(10)}).catch(s=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){Cr()}}static{this.\u0275prov=b({token:e,factory:e.\u0275fac})}}return e})(),Fo=class{constructor(o){this.delegate=o,this.replay=[],this.\u0275type=1}use(o){if(this.delegate=o,this.replay!==null){for(let t of this.replay)t(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,t){return this.delegate.createElement(o,t)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,t){this.delegate.appendChild(o,t)}insertBefore(o,t,r,n){this.delegate.insertBefore(o,t,r,n)}removeChild(o,t,r){this.delegate.removeChild(o,t,r)}selectRootElement(o,t){return this.delegate.selectRootElement(o,t)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,t,r,n){this.delegate.setAttribute(o,t,r,n)}removeAttribute(o,t,r){this.delegate.removeAttribute(o,t,r)}addClass(o,t){this.delegate.addClass(o,t)}removeClass(o,t){this.delegate.removeClass(o,t)}setStyle(o,t,r,n){this.delegate.setStyle(o,t,r,n)}removeStyle(o,t,r){this.delegate.removeStyle(o,t,r)}setProperty(o,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(o,t,r)),this.delegate.setProperty(o,t,r)}setValue(o,t){this.delegate.setValue(o,t)}listen(o,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(o,t,r)),this.delegate.listen(o,t,r)}shouldReplay(o){return this.replay!==null&&o.startsWith(el)}},ol=new D("");function an(e="animations"){return Co("NgAsyncAnimations"),Ie([{provide:Mt,useFactory:(o,t,r)=>new tl(o,t,r,e),deps:[I,Xt,se]},{provide:yr,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}function ln(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}function Qt(e,o){if(e&&o){let t=r=>{ln(e,r)||(e.classList?e.classList.add(r):e.className+=" "+r)};[o].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function ze(e,o){if(e&&o){let t=r=>{e.classList?e.classList.remove(r):e.className=e.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(t))}}function cn(e,o){if(e instanceof HTMLElement){let t=e.offsetWidth;if(o){let r=getComputedStyle(e);t+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return t}return 0}function Po(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function Lo(e,o={}){if(Po(e)){let t=(r,n)=>{var i,s;let a=(i=e?.$attrs)!=null&&i[r]?[(s=e?.$attrs)==null?void 0:s[r]]:[];return[n].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?t(r,c):Object.entries(c).map(([f,p])=>r==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=u.length?l.concat(u.filter(f=>!!f)):l}}return l},a)};Object.entries(o).forEach(([r,n])=>{if(n!=null){let i=r.match(/^on(.+)/);i?e.addEventListener(i[1].toLowerCase(),n):r==="p-bind"||r==="pBind"?Lo(e,n):(n=r==="class"?[...new Set(t("class",n))].join(" ").trim():r==="style"?t("style",n).join(";").trim():n,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=n),e.setAttribute(r,n))}})}}function ut(e,o){return Po(e)?e.matches(o)?e:e.querySelector(o):null}function Vo(e){if(e){let o=e.offsetHeight,t=getComputedStyle(e);return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),o}return 0}function dn(e){if(e){let o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function un(e,o){if(e){let t=e.offsetHeight;if(o){let r=getComputedStyle(e);t+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return t}return 0}function $o(e){if(e){let o=e.offsetWidth,t=getComputedStyle(e);return o-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),o}return 0}function pn(e){var o;e&&("remove"in Element.prototype?e.remove():(o=e.parentNode)==null||o.removeChild(e))}function fn(e,o="",t){Po(e)&&t!==null&&t!==void 0&&e.setAttribute(o,t)}function hn(){let e=new Map;return{on(o,t){let r=e.get(o);return r?r.push(t):r=[t],e.set(o,r),this},off(o,t){let r=e.get(o);return r&&r.splice(r.indexOf(t)>>>0,1),this},emit(o,t){let r=e.get(o);r&&r.slice().map(n=>{n(t)})},clear(){e.clear()}}}function re(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function rl(e){return!!(e&&e.constructor&&e.call&&e.apply)}function q(e){return!re(e)}function ve(e,o=!0){return e instanceof Object&&e.constructor===Object&&(o||Object.keys(e).length!==0)}function oe(e,...o){return rl(e)?e(...o):e}function Te(e,o=!0){return typeof e=="string"&&(o||e!=="")}function gn(e){return Te(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Zt(e,o="",t={}){let r=gn(o).split("."),n=r.shift();return n?ve(e)?Zt(oe(e[Object.keys(e).find(i=>gn(i)===n)||""],t),r.join("."),t):void 0:oe(e,t)}function eo(e,o=!0){return Array.isArray(e)&&(o||e.length!==0)}function mn(e){return q(e)&&!isNaN(e)}function Q(e,o){if(o){let t=o.test(e);return o.lastIndex=0,t}return!1}function Ne(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function to(e){return Te(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,t)=>t===0?o:"-"+o.toLowerCase()).toLowerCase():e}function zo(e){return Te(e)?e.replace(/[A-Z]/g,(o,t)=>t===0?o:"."+o.toLowerCase()).toLowerCase():e}var oo={};function pt(e="pui_id_"){return oo.hasOwnProperty(e)||(oo[e]=0),oo[e]++,`${e}${oo[e]}`}function nl(){let e=[],o=(s,a,l=999)=>{let c=n(s,a,l),d=c.value+(c.key===s?0:l)+1;return e.push({key:s,value:d}),d},t=s=>{e=e.filter(a=>a.value!==s)},r=(s,a)=>n(s,a).value,n=(s,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,a,l)=>{a&&(a.style.zIndex=String(o(s,!0,l)))},clear:s=>{s&&(t(i(s)),s.style.zIndex="")},getCurrent:s=>r(s,!0)}}var Wd=nl();var V=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var il=["*"],bn=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["p-header"]],ngContentSelectors:il,decls:1,vars:0,template:function(r,n){r&1&&(xe(),_e(0))},encapsulation:2})}return e})();var vn=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(r){return new(r||e)(O(kr))};static \u0275dir=z({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return e})(),pe=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=G({type:e});static \u0275inj=H({imports:[te]})}return e})();var sl=Object.defineProperty,al=Object.defineProperties,ll=Object.getOwnPropertyDescriptors,ro=Object.getOwnPropertySymbols,Cn=Object.prototype.hasOwnProperty,kn=Object.prototype.propertyIsEnumerable,yn=(e,o,t)=>o in e?sl(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,le=(e,o)=>{for(var t in o||(o={}))Cn.call(o,t)&&yn(e,t,o[t]);if(ro)for(var t of ro(o))kn.call(o,t)&&yn(e,t,o[t]);return e},jo=(e,o)=>al(e,ll(o)),ye=(e,o)=>{var t={};for(var r in e)Cn.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&ro)for(var r of ro(e))o.indexOf(r)<0&&kn.call(e,r)&&(t[r]=e[r]);return t};var cl=hn(),ne=cl;function wn(e,o){eo(e)?e.push(...o||[]):ve(e)&&Object.assign(e,o)}function dl(e){return ve(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function ul(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Wo(e="",o=""){return ul(`${Te(e,!1)&&Te(o,!1)?`${e}-`:e}${o}`)}function xn(e="",o=""){return`--${Wo(e,o)}`}function pl(e=""){let o=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(o+t)%2!==0}function _n(e,o="",t="",r=[],n){if(Te(e)){let i=/{([^}]*)}/g,s=e.trim();if(pl(s))return;if(Q(s,i)){let a=s.replaceAll(i,d=>{let f=d.replace(/{|}/g,"").split(".").filter(p=>!r.some(v=>Q(p,v)));return`var(${xn(t,to(f.join("-")))}${q(n)?`, ${n}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return Q(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(mn(e))return e}function fl(e,o,t){Te(o,!1)&&e.push(`${o}:${t};`)}function je(e,o){return e?`${e}{${o}}`:""}var We=(...e)=>hl(S.getTheme(),...e),hl=(e={},o,t,r)=>{if(o){let{variable:n,options:i}=S.defaults||{},{prefix:s,transform:a}=e?.options||i||{},c=Q(o,/{([^}]*)}/g)?o:`{${o}}`;return r==="value"||re(r)&&a==="strict"?S.getTokenValue(o):_n(c,void 0,s,[n.excludedKeyRegex],t)}return""};function gl(e,o={}){let t=S.defaults.variable,{prefix:r=t.prefix,selector:n=t.selector,excludedKeyRegex:i=t.excludedKeyRegex}=o,s=(c,d="")=>Object.entries(c).reduce((u,[f,p])=>{let v=Q(f,i)?Wo(d):Wo(d,to(f)),h=dl(p);if(ve(h)){let{variables:y,tokens:M}=s(h,v);wn(u.tokens,M),wn(u.variables,y)}else u.tokens.push((r?v.replace(`${r}-`,""):v).replaceAll("-",".")),fl(u.variables,xn(v),_n(h,v,r,[i]));return u},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,r);return{value:a,tokens:l,declarations:a.join(""),css:je(n,a.join(""))}}var ae={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let o=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var r;return(r=o.map(n=>n.resolve(t)).find(n=>n.matched))!=null?r:this.rules.custom.resolve(t)})}},_toVariables(e,o){return gl(e,{prefix:o?.prefix})},getCommon({name:e="",theme:o={},params:t,set:r,defaults:n}){var i,s,a,l,c,d,u;let{preset:f,options:p}=o,v,h,y,M,T,E,L;if(q(f)&&p.transform!=="strict"){let{primitive:Z,semantic:ce,extend:De}=f,Xe=ce||{},{colorScheme:yt}=Xe,wt=ye(Xe,["colorScheme"]),Ct=De||{},{colorScheme:kt}=Ct,Je=ye(Ct,["colorScheme"]),Qe=yt||{},{dark:xt}=Qe,_t=ye(Qe,["dark"]),St=kt||{},{dark:Et}=St,qt=ye(St,["dark"]),Rt=q(Z)?this._toVariables({primitive:Z},p):{},Tt=q(wt)?this._toVariables({semantic:wt},p):{},Dt=q(_t)?this._toVariables({light:_t},p):{},or=q(xt)?this._toVariables({dark:xt},p):{},rr=q(Je)?this._toVariables({semantic:Je},p):{},nr=q(qt)?this._toVariables({light:qt},p):{},ir=q(Et)?this._toVariables({dark:Et},p):{},[Ws,Us]=[(i=Rt.declarations)!=null?i:"",Rt.tokens],[Hs,Gs]=[(s=Tt.declarations)!=null?s:"",Tt.tokens||[]],[Ks,Ys]=[(a=Dt.declarations)!=null?a:"",Dt.tokens||[]],[Xs,Js]=[(l=or.declarations)!=null?l:"",or.tokens||[]],[Qs,Zs]=[(c=rr.declarations)!=null?c:"",rr.tokens||[]],[ea,ta]=[(d=nr.declarations)!=null?d:"",nr.tokens||[]],[oa,ra]=[(u=ir.declarations)!=null?u:"",ir.tokens||[]];v=this.transformCSS(e,Ws,"light","variable",p,r,n),h=Us;let na=this.transformCSS(e,`${Hs}${Ks}`,"light","variable",p,r,n),ia=this.transformCSS(e,`${Xs}`,"dark","variable",p,r,n);y=`${na}${ia}`,M=[...new Set([...Gs,...Ys,...Js])];let sa=this.transformCSS(e,`${Qs}${ea}color-scheme:light`,"light","variable",p,r,n),aa=this.transformCSS(e,`${oa}color-scheme:dark`,"dark","variable",p,r,n);T=`${sa}${aa}`,E=[...new Set([...Zs,...ta,...ra])],L=oe(f.css,{dt:We})}return{primitive:{css:v,tokens:h},semantic:{css:y,tokens:M},global:{css:T,tokens:E},style:L}},getPreset({name:e="",preset:o={},options:t,params:r,set:n,defaults:i,selector:s}){var a,l,c;let d,u,f;if(q(o)&&t.transform!=="strict"){let p=e.replace("-directive",""),v=o,{colorScheme:h,extend:y,css:M}=v,T=ye(v,["colorScheme","extend","css"]),E=y||{},{colorScheme:L}=E,Z=ye(E,["colorScheme"]),ce=h||{},{dark:De}=ce,Xe=ye(ce,["dark"]),yt=L||{},{dark:wt}=yt,Ct=ye(yt,["dark"]),kt=q(T)?this._toVariables({[p]:le(le({},T),Z)},t):{},Je=q(Xe)?this._toVariables({[p]:le(le({},Xe),Ct)},t):{},Qe=q(De)?this._toVariables({[p]:le(le({},De),wt)},t):{},[xt,_t]=[(a=kt.declarations)!=null?a:"",kt.tokens||[]],[St,Et]=[(l=Je.declarations)!=null?l:"",Je.tokens||[]],[qt,Rt]=[(c=Qe.declarations)!=null?c:"",Qe.tokens||[]],Tt=this.transformCSS(p,`${xt}${St}`,"light","variable",t,n,i,s),Dt=this.transformCSS(p,qt,"dark","variable",t,n,i,s);d=`${Tt}${Dt}`,u=[...new Set([..._t,...Et,...Rt])],f=oe(M,{dt:We})}return{css:d,tokens:u,style:f}},getPresetC({name:e="",theme:o={},params:t,set:r,defaults:n}){var i;let{preset:s,options:a}=o,l=(i=s?.components)==null?void 0:i[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:r,defaults:n})},getPresetD({name:e="",theme:o={},params:t,set:r,defaults:n}){var i;let s=e.replace("-directive",""),{preset:a,options:l}=o,c=(i=a?.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:r,defaults:n})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,o){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?o.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:o.options.darkModeSelector):[]},getLayerOrder(e,o={},t,r){let{cssLayer:n}=o;return n?`@layer ${oe(n.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:o={},params:t,props:r={},set:n,defaults:i}){let s=this.getCommon({name:e,theme:o,params:t,set:n,defaults:i}),a=Object.entries(r).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,d])=>{if(d?.css){let u=Ne(d?.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${u}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:o={},params:t,props:r={},set:n,defaults:i}){var s;let a={name:e,theme:o,params:t,set:n,defaults:i},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(r).reduce((d,[u,f])=>d.push(`${u}="${f}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Ne(l)}</style>`:""},createTokens(e={},o,t="",r="",n={}){return Object.entries(e).forEach(([i,s])=>{let a=Q(i,o.variable.excludedKeyRegex)?t:t?`${t}.${zo(i)}`:zo(i),l=r?`${r}.${i}`:i;ve(s)?this.createTokens(s,o,a,l,n):(n[a]||(n[a]={paths:[],computed(c,d={}){var u,f;return this.paths.length===1?(u=this.paths[0])==null?void 0:u.computed(this.paths[0].scheme,d.binding):c&&c!=="none"?(f=this.paths.find(p=>p.scheme===c))==null?void 0:f.computed(c,d.binding):this.paths.map(p=>p.computed(p.scheme,d[p.scheme]))}}),n[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,d={}){let u=/{([^}]*)}/g,f=s;if(d.name=this.path,d.binding||(d.binding={}),Q(s,u)){let v=s.trim().replaceAll(u,M=>{var T;let E=M.replace(/{|}/g,""),L=(T=n[E])==null?void 0:T.computed(c,d);return eo(L)&&L.length===2?`light-dark(${L[0].value},${L[1].value})`:L?.value}),h=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,y=/var\([^)]+\)/g;f=Q(v.replace(y,"0"),h)?`calc(${v})`:v}return re(d.binding)&&delete d.binding,{colorScheme:c,path:this.path,paths:d,value:f.includes("undefined")?void 0:f}}}))}),n},getTokenValue(e,o,t){var r;let i=(l=>l.split(".").filter(d=>!Q(d.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(o),s=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,a=[(r=e[i])==null?void 0:r.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let d=c,{colorScheme:u}=d,f=ye(d,["colorScheme"]);return l[u]=f,l},void 0)},getSelectorRule(e,o,t,r){return t==="class"||t==="attr"?je(q(o)?`${e}${o},${e} ${o}`:e,r):je(e,q(o)?je(o,r):r)},transformCSS(e,o,t,r,n={},i,s,a){if(q(o)){let{cssLayer:l}=n;if(r!=="style"){let c=this.getColorSchemeOption(n,s);o=t==="dark"?c.reduce((d,{type:u,selector:f})=>(q(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",o):this.getSelectorRule(f,a,u,o)),d),""):je(a??":root",o)}if(l){let c={name:"primeui",order:"primeui"};ve(l)&&(c.name=oe(l.name,{name:e,type:r})),q(c.name)&&(o=je(`@layer ${c.name}`,o),i?.layerNames(c.name))}return o}return""}},S={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:o}=e;o&&(this._theme=jo(le({},o),{options:le(le({},this.defaults.options),o.options)}),this._tokens=ae.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),ne.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=jo(le({},this.theme),{preset:e}),this._tokens=ae.createTokens(e,this.defaults),this.clearLoadedStyleNames(),ne.emit("preset:change",e),ne.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=jo(le({},this.theme),{options:e}),this.clearLoadedStyleNames(),ne.emit("options:change",e),ne.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return ae.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",o){return ae.getCommon({name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ae.getPresetC(t)},getDirective(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ae.getPresetD(t)},getCustomPreset(e="",o,t,r){let n={name:e,preset:o,options:this.options,selector:t,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ae.getPreset(n)},getLayerOrderCSS(e=""){return ae.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",o,t="style",r){return ae.transformCSS(e,o,r,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",o,t={}){return ae.getCommonStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,o,t={}){return ae.getStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),ne.emit(`theme:${o}:load`,e),!this._loadingStyles.size&&ne.emit("theme:load"))}};var ml=0,Sn=(()=>{class e{document=g(I);use(t,r={}){let n=!1,i=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++ml}`,id:d=void 0,media:u=void 0,nonce:f=void 0,first:p=!1,props:v={}}=r;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||this.document.getElementById(d)||this.document.createElement("style"),!s.isConnected){i=t,Lo(s,{type:"text/css",media:u,nonce:f});let h=this.document.head;p&&h.firstChild?h.insertBefore(s,h.firstChild):h.appendChild(s),fn(s,"data-primeng-style-id",c)}return s.textContent!==i&&(s.textContent=i),{id:d,name:c,el:s,css:i}}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ue={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},bl=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,vl=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,j=(()=>{class e{name="base";useStyle=g(Sn);theme=bl;css=vl;classes={};inlineStyles={};load=(t,r={},n=i=>i)=>{let i=n(oe(t,{dt:We}));return i?this.useStyle.use(Ne(i),m({name:this.name},r)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},r="")=>this.load(this.theme,t,(n="")=>S.transformCSS(t.name||this.name,`${n}${r}`));getCommonTheme=t=>S.getCommon(this.name,t);getComponentTheme=t=>S.getComponent(this.name,t);getDirectiveTheme=t=>S.getDirective(this.name,t);getPresetTheme=(t,r,n)=>S.getCustomPreset(this.name,t,r,n);getLayerOrderThemeCSS=()=>S.getLayerOrderCSS(this.name);getStyleSheet=(t="",r={})=>{if(this.css){let n=oe(this.css,{dt:We}),i=Ne(`${n}${t}`),s=Object.entries(r).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${i}</style>`}return""};getCommonThemeStyleSheet=(t,r={})=>S.getCommonStyleSheet(this.name,t,r);getThemeStyleSheet=(t,r={})=>{let n=[S.getStyleSheet(this.name,t,r)];if(this.theme){let i=this.name==="base"?"global-style":`${this.name}-style`,s=oe(this.theme,{dt:We}),a=Ne(S.transformCSS(i,s)),l=Object.entries(r).reduce((c,[d,u])=>c.push(`${d}="${u}"`)&&c,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${i}" ${l}>${a}</style>`)}return n.join("")};static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var yl=(()=>{class e{theme=de(void 0);isThemeChanged=!1;document=g(I);baseStyle=g(j);constructor(){rt(()=>{ne.on("theme:change",t=>{me(()=>{this.isThemeChanged=!0,this.theme.set(t)})})},{allowSignalWrites:!0}),rt(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){S.clearLoadedStyleNames(),ne.clear()}onThemeChange(t){S.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!S.isStyleNameLoaded("common")){let{primitive:t,semantic:r,global:n,style:i}=this.baseStyle.getCommonTheme?.()||{},s={nonce:void 0};this.baseStyle.load(t?.css,m({name:"primitive-variables"},s)),this.baseStyle.load(r?.css,m({name:"semantic-variables"},s)),this.baseStyle.load(n?.css,m({name:"global-variables"},s)),this.baseStyle.loadTheme(m({name:"global-style"},s),i),S.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:r}=t||{};r&&this.theme.set(r)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ho=(()=>{class e extends yl{ripple=de(!1);platformId=g(J);inputStyle=de("outlined");inputVariant=de("outlined");overlayOptions={};csp=de({nonce:void 0});filterMatchModeOptions={text:[V.STARTS_WITH,V.CONTAINS,V.NOT_CONTAINS,V.ENDS_WITH,V.EQUALS,V.NOT_EQUALS],numeric:[V.EQUALS,V.NOT_EQUALS,V.LESS_THAN,V.LESS_THAN_OR_EQUAL_TO,V.GREATER_THAN,V.GREATER_THAN_OR_EQUAL_TO],date:[V.DATE_IS,V.DATE_IS_NOT,V.DATE_BEFORE,V.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new At;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=m(m({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:r,ripple:n,inputStyle:i,theme:s,overlayOptions:a,translation:l}=t||{};r&&this.csp.set(r),n&&this.ripple.set(n),i&&this.inputStyle.set(i),a&&(this.overlayOptions=a),l&&this.setTranslation(l),s&&this.setThemeConfig({theme:s})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),wl=new D("PRIME_NG_CONFIG");function En(...e){let o=e?.map(r=>({provide:wl,useValue:r,multi:!1})),t={provide:Or,useFactory:r=>()=>e?.forEach(n=>r.setConfig(n)),deps:[Ho],multi:!0};return Ie([...o,t])}var qn={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}};var Rn={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}};var Tn={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}};var Dn={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var An={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}};var In={root:{borderRadius:"{content.border.radius}"}};var Mn={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}};var On={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}};var Bn={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}};var Nn={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}};var Fn={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"}};var Pn={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}}};var Ln={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}};var Vn={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}};var $n={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}};var zn={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}};var jn={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var Wn={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}};var Un={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}};var Hn={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}};var Gn={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}};var Kn={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}};var Yn={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Xn={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}};var Jn={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}};var Qn={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}};var Zn={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}};var ei={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}};var ti={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}};var oi={icon:{color:"{form.field.icon.color}"}};var ri={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}};var ni={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var ii={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var si={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}};var ai={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}};var li={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}};var ci={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}};var di={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}};var ui={root:{gap:"0.5rem"},input:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}}};var pi={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}};var fi={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}};var hi={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}};var gi={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var mi={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}};var bi={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var vi={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}};var yi={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}};var wi={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}};var Ci={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var ki={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}};var xi={root:{outline:{width:"2px",color:"{content.background}"}}};var _i={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}};var Si={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}};var Ei={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}};var qi={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}};var Ri={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var Ti={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}};var Di={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}};var Ai={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}};var Ii={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}}};var Mi={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}};var Oi={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}};var Bi={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}};var Ni={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}};var Fi={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}};var Pi={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}};var Li={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}};var Vi={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}};var $i={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}};var zi={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var ji={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"}};var Wi={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}};var Ui={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}};var Hi={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var Gi={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var Ki={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Yi={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}};var Xi={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}};var Ji={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var Qi={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}};var Zi={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}};var es={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.375rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.625rem 1.25rem"}},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}};var ts={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}};var os={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}};var rs={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}};var ns={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.5rem 0"}};var is={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}};var ss={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}};var as={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};var ls=U(m({},An),{components:{accordion:qn,autocomplete:Rn,avatar:Tn,badge:Dn,blockui:In,breadcrumb:Mn,button:On,datepicker:Hn,card:Bn,carousel:Nn,cascadeselect:Fn,checkbox:Pn,chip:Ln,colorpicker:Vn,confirmdialog:$n,confirmpopup:zn,contextmenu:jn,dataview:Un,datatable:Wn,dialog:Gn,divider:Kn,dock:Yn,drawer:Xn,editor:Jn,fieldset:Qn,fileupload:Zn,iftalabel:ri,floatlabel:ei,galleria:ti,iconfield:oi,image:ni,imagecompare:ii,inlinemessage:si,inplace:ai,inputchips:li,inputgroup:ci,inputnumber:di,inputotp:ui,inputtext:pi,knob:fi,listbox:hi,megamenu:gi,menu:mi,menubar:bi,message:vi,metergroup:yi,multiselect:wi,orderlist:Ci,organizationchart:ki,overlaybadge:xi,popover:Ti,paginator:_i,password:qi,panel:Si,panelmenu:Ei,picklist:Ri,progressbar:Di,progressspinner:Ai,radiobutton:Ii,rating:Mi,scrollpanel:Bi,select:Ni,selectbutton:Fi,skeleton:Pi,slider:Li,speeddial:Vi,splitter:zi,splitbutton:$i,stepper:ji,steps:Wi,tabmenu:Ui,tabs:Hi,tabview:Gi,textarea:Xi,tieredmenu:Ji,tag:Ki,terminal:Yi,timeline:Qi,togglebutton:es,toggleswitch:ts,tree:ns,treeselect:is,treetable:ss,toast:Zi,toolbar:os,virtualscroller:as,tooltip:rs,ripple:Oi}});var cs={providers:[an(),En({theme:{preset:ls}}),Qr()]};var bs=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(r){return new(r||e)(O(ot),O(Oe))}}static{this.\u0275dir=z({type:e})}}return e})(),Cl=(()=>{class e extends bs{static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})()}static{this.\u0275dir=z({type:e,features:[B]})}}return e})(),lo=new D("");var kl={provide:lo,useExisting:Ze(()=>vs),multi:!0};function xl(){let e=Le()?Le().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var _l=new D(""),vs=(()=>{class e extends bs{constructor(t,r,n){super(t,r),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!xl())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(r){return new(r||e)(O(ot),O(Oe),O(_l,8))}}static{this.\u0275dir=z({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,n){r&1&&Pe("input",function(s){return n._handleInput(s.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(s){return n._compositionEnd(s.target.value)})},features:[N([kl]),B]})}}return e})();var Sl=new D(""),El=new D("");function ys(e){return e!=null}function ws(e){return Mr(e)?It(e):e}function Cs(e){let o={};return e.forEach(t=>{o=t!=null?m(m({},o),t):o}),Object.keys(o).length===0?null:o}function ks(e,o){return o.map(t=>t(e))}function ql(e){return!e.validate}function xs(e){return e.map(o=>ql(o)?o:t=>o.validate(t))}function Rl(e){if(!e)return null;let o=e.filter(ys);return o.length==0?null:function(t){return Cs(ks(t,o))}}function _s(e){return e!=null?Rl(xs(e)):null}function Tl(e){if(!e)return null;let o=e.filter(ys);return o.length==0?null:function(t){let r=ks(t,o).map(ws);return ar(r).pipe(Ae(Cs))}}function Ss(e){return e!=null?Tl(xs(e)):null}function ds(e,o){return e===null?[o]:Array.isArray(e)?[...e,o]:[e,o]}function Dl(e){return e._rawValidators}function Al(e){return e._rawAsyncValidators}function Go(e){return e?Array.isArray(e)?e:[e]:[]}function io(e,o){return Array.isArray(e)?e.includes(o):e===o}function us(e,o){let t=Go(o);return Go(e).forEach(n=>{io(t,n)||t.push(n)}),t}function ps(e,o){return Go(o).filter(t=>!io(e,t))}var so=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=_s(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=Ss(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,t){return this.control?this.control.hasError(o,t):!1}getError(o,t){return this.control?this.control.getError(o,t):null}},Ko=class extends so{get formDirective(){return null}get path(){return null}},vt=class extends so{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Yo=class{constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Il={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},xg=U(m({},Il),{"[class.ng-submitted]":"isSubmitted"}),Es=(()=>{class e extends Yo{constructor(t){super(t)}static{this.\u0275fac=function(r){return new(r||e)(O(vt,2))}}static{this.\u0275dir=z({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,n){r&2&&ko("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[B]})}}return e})();var ht="VALID",no="INVALID",He="PENDING",gt="DISABLED",Ke=class{},ao=class extends Ke{constructor(o,t){super(),this.value=o,this.source=t}},mt=class extends Ke{constructor(o,t){super(),this.pristine=o,this.source=t}},bt=class extends Ke{constructor(o,t){super(),this.touched=o,this.source=t}},Ge=class extends Ke{constructor(o,t){super(),this.status=o,this.source=t}};function Ml(e){return(co(e)?e.validators:e)||null}function Ol(e){return Array.isArray(e)?_s(e):e||null}function Bl(e,o){return(co(o)?o.asyncValidators:e)||null}function Nl(e){return Array.isArray(e)?Ss(e):e||null}function co(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Xo=class{constructor(o,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=Be(()=>this.statusReactive()),this.statusReactive=de(void 0),this._pristine=Be(()=>this.pristineReactive()),this.pristineReactive=de(!0),this._touched=Be(()=>this.touchedReactive()),this.touchedReactive=de(!1),this._events=new At,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(o),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return me(this.statusReactive)}set status(o){me(()=>this.statusReactive.set(o))}get valid(){return this.status===ht}get invalid(){return this.status===no}get pending(){return this.status==He}get disabled(){return this.status===gt}get enabled(){return this.status!==gt}get pristine(){return me(this.pristineReactive)}set pristine(o){me(()=>this.pristineReactive.set(o))}get dirty(){return!this.pristine}get touched(){return me(this.touchedReactive)}set touched(o){me(()=>this.touchedReactive.set(o))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(us(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(us(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(ps(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(ps(o,this._rawAsyncValidators))}hasValidator(o){return io(this._rawValidators,o)}hasAsyncValidator(o){return io(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let t=this.touched===!1;this.touched=!0;let r=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(U(m({},o),{sourceControl:r})),t&&o.emitEvent!==!1&&this._events.next(new bt(!0,r))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(o))}markAsUntouched(o={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=o.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:r})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,r),t&&o.emitEvent!==!1&&this._events.next(new bt(!1,r))}markAsDirty(o={}){let t=this.pristine===!0;this.pristine=!1;let r=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(U(m({},o),{sourceControl:r})),t&&o.emitEvent!==!1&&this._events.next(new mt(!1,r))}markAsPristine(o={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=o.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,r),t&&o.emitEvent!==!1&&this._events.next(new mt(!0,r))}markAsPending(o={}){this.status=He;let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Ge(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(U(m({},o),{sourceControl:t}))}disable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=gt,this.errors=null,this._forEachChild(n=>{n.disable(U(m({},o),{onlySelf:!0}))}),this._updateValue();let r=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new ao(this.value,r)),this._events.next(new Ge(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U(m({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=ht,this._forEachChild(r=>{r.enable(U(m({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(U(m({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(o,t){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ht||this.status===He)&&this._runAsyncValidator(r,o.emitEvent)}let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new ao(this.value,t)),this._events.next(new Ge(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(U(m({},o),{sourceControl:t}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?gt:ht}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,t){if(this.asyncValidator){this.status=He,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let r=ws(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:t,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,t={}){this.errors=o,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(o){let t=o;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((r,n)=>r&&r._find(n),this)}getError(o,t){let r=t?this.get(t):this;return r&&r.errors?r.errors[o]:null}hasError(o,t){return!!this.getError(o,t)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,t,r){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||r)&&this._events.next(new Ge(this.status,t)),this._parent&&this._parent._updateControlsErrors(o,t,r)}_initObservables(){this.valueChanges=new ee,this.statusChanges=new ee}_calculateStatus(){return this._allControlsDisabled()?gt:this.errors?no:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(He)?He:this._anyControlsHaveStatus(no)?no:ht}_anyControlsHaveStatus(o){return this._anyControls(t=>t.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,t){let r=!this._anyControlsDirty(),n=this.pristine!==r;this.pristine=r,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,t),n&&this._events.next(new mt(this.pristine,t))}_updateTouched(o={},t){this.touched=this._anyControlsTouched(),this._events.next(new bt(this.touched,t)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,t)}_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){co(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let t=this._parent&&this._parent.dirty;return!o&&!!t&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=Ol(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Nl(this._rawAsyncValidators)}};var qs=new D("CallSetDisabledState",{providedIn:"root",factory:()=>Jo}),Jo="always";function Fl(e,o){return[...o.path,e]}function Pl(e,o,t=Jo){Vl(e,o),o.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&o.valueAccessor.setDisabledState?.(e.disabled),$l(e,o),jl(e,o),zl(e,o),Ll(e,o)}function fs(e,o){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(o)})}function Ll(e,o){if(o.valueAccessor.setDisabledState){let t=r=>{o.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),o._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Vl(e,o){let t=Dl(e);o.validator!==null?e.setValidators(ds(t,o.validator)):typeof t=="function"&&e.setValidators([t]);let r=Al(e);o.asyncValidator!==null?e.setAsyncValidators(ds(r,o.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let n=()=>e.updateValueAndValidity();fs(o._rawValidators,n),fs(o._rawAsyncValidators,n)}function $l(e,o){o.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Rs(e,o)})}function zl(e,o){o.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Rs(e,o),e.updateOn!=="submit"&&e.markAsTouched()})}function Rs(e,o){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function jl(e,o){let t=(r,n)=>{o.valueAccessor.writeValue(r),n&&o.viewToModelUpdate(r)};e.registerOnChange(t),o._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Wl(e,o){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(o,t.currentValue)}function Ul(e){return Object.getPrototypeOf(e.constructor)===Cl}function Hl(e,o){if(!o)return null;Array.isArray(o);let t,r,n;return o.forEach(i=>{i.constructor===vs?t=i:Ul(i)?r=i:n=i}),n||r||t||null}function hs(e,o){let t=e.indexOf(o);t>-1&&e.splice(t,1)}function gs(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Gl=class extends Xo{constructor(o=null,t,r){super(Ml(t),Bl(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(o),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),co(t)&&(t.nonNullable||t.initialValueIsDefault)&&(gs(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,t={}){this.value=this._pendingValue=o,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(o,t={}){this.setValue(o,t)}reset(o=this.defaultValue,t={}){this._applyFormState(o),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){hs(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){hs(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){gs(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var Kl={provide:vt,useExisting:Ze(()=>Qo)},ms=Promise.resolve(),Qo=(()=>{class e extends vt{constructor(t,r,n,i,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this.control=new Gl,this._registered=!1,this.name="",this.update=new ee,this._parent=t,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=Hl(this,i)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Wl(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Pl(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ms.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,n=r!==0&&F(r);ms.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Fl(t,this._parent):[t]}static{this.\u0275fac=function(r){return new(r||e)(O(Ko,9),O(Sl,10),O(El,10),O(lo,10),O(Pt,8),O(qs,8))}}static{this.\u0275dir=z({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[N([Kl]),B,Me]})}}return e})();var Yl=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=G({type:e})}static{this.\u0275inj=H({})}}return e})();var Ts=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:qs,useValue:t.callSetDisabledState??Jo}]}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=G({type:e})}static{this.\u0275inj=H({imports:[Yl]})}}return e})();var Ds=(()=>{class e extends j{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ie=(()=>{class e{document=g(I);platformId=g(J);el=g(Oe);injector=g(bo);cd=g(Pt);renderer=g(ot);config=g(Ho);baseComponentStyle=g(Ds);baseStyle=g(j);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=pt("pc");_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,r="",n={}){return Zt(t,r,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}templates;ngAfterContentInit(){this.templates?.forEach(t=>{let r=t.getType(),n=`${r}Template`;this.hasOwnProperty(n)&&(this[n]=t.template),this.hasOwnProperty(`_${n}`)&&(this[`_${n}`]=t.template),this[r]=t.template})}ngOnChanges(t){if(this.document&&!Se(this.platformId)){let{dt:r}=t;r&&r.currentValue&&(this._loadScopedThemeStyles(r.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(r.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let t=()=>{Ue.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Ue.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Ue.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Ue.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!S.isStyleNameLoaded("common")){let{primitive:t,semantic:r,global:n,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,m({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(r?.css,m({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,m({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(m({name:"global-style"},this.styleOptions),i),S.setLoadedStyleName("common")}if(!S.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:r}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,m({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(m({name:`${this.componentStyle?.name}-style`},this.styleOptions),r),S.setLoadedStyleName(this.componentStyle?.name)}if(!S.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,m({name:"layer-order",first:!0},this.styleOptions)),S.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:r}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(r,m({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Ue.clearLoadedStyleNames(),ne.on("theme:change",t)}cx(t,r){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let r=this.componentStyle?.inlineStyles?.[t];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:m({},r)}get parent(){return this.parentInstance}static \u0275fac=function(r){return new(r||e)};static \u0275dir=z({type:e,contentQueries:function(r,n,i){if(r&1&&fe(i,vn,4),r&2){let s;he(s=ge())&&(n.templates=s)}},inputs:{dt:"dt"},standalone:!0,features:[N([Ds,j]),Me]})}return e})();var Jl=({dt:e})=>`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    inset-inline-start: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: start;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-inline-start: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-inline-start: -1.5rem;
    margin-inline-end: 0.3rem;
    text-align: end;
}
.ql-editor li.ql-direction-rtl::before {
    margin-inline-start: 0.3rem;
    margin-inline-end: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-inline-start: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-inline-end: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background: #000;
}
.ql-editor .ql-bg-red {
    background: #e60000;
}
.ql-editor .ql-bg-orange {
    background: #f90;
}
.ql-editor .ql-bg-yellow {
    background: #ff0;
}
.ql-editor .ql-bg-green {
    background: #008a00;
}
.ql-editor .ql-bg-blue {
    background: #06c;
}
.ql-editor .ql-bg-purple {
    background: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: end;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    inset-inline-start: 15px;
    pointer-events: none;
    position: absolute;
    inset-inline-end: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding-block: 3px;
    padding-inline: 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-inline-start: 4px solid #ccc;
    margin-block-end: 5px;
    margin-block-start: 5px;
    padding-inline-start: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-block-end: 5px;
    margin-block-start: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    inset-inline-start: 0;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-inline-start: 8px;
    padding-inline-end: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-block-end: 5px;
    padding-block-start: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-block-start: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    inset-inline-end: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-block-start: -9px;
    inset-inline-end: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-inline-end: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-block-start: 0;
}
.ql-snow .ql-tooltip {
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-inline-end: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-inline-end: 1px solid #ccc;
    content: 'Edit';
    margin-inline-start: 16px;
    padding-inline-end: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-inline-start: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-inline-end: 0;
    content: 'Save';
    padding-inline-end: 0;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}

.p-editor .p-editor-toolbar {
    background: ${e("editor.toolbar.background")};
    border-start-end-radius: ${e("editor.toolbar.border.radius")};
    border-start-start-radius: ${e("editor.toolbar.border.radius")};
}

.p-editor .p-editor-toolbar.ql-snow {
    border: 1px solid ${e("editor.toolbar.border.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: ${e("editor.toolbar.item.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-fill {
    fill: ${e("editor.toolbar.item.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: ${e("editor.toolbar.item.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: ${e("editor.toolbar.item.hover.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: ${e("editor.toolbar.item.hover.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: ${e("editor.toolbar.item.hover.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: ${e("editor.toolbar.item.active.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: ${e("editor.toolbar.item.active.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: ${e("editor.toolbar.item.active.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: ${e("editor.overlay.background")};
    border: 1px solid ${e("editor.overlay.border.color")};
    box-shadow: ${e("editor.overlay.shadow")};
    border-radius: ${e("editor.overlay.border.radius")};
    padding: ${e("editor.overlay.padding")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: ${e("editor.overlay.option.color")};
    border-radius: ${e("editor.overlay.option.border.radius")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    background: ${e("editor.overlay.option.focus.background")};
    color: ${e("editor.overlay.option.focus.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: ${e("editor.overlay.option.padding")};
}

.p-editor .p-editor-content {
    border-end-end-radius: ${e("editor.content.border.radius")};
    border-end-start-radius: ${e("editor.content.border.radius")};
}

.p-editor .p-editor-content.ql-snow {
    border: 1px solid ${e("editor.content.border.color")};
}

.p-editor .p-editor-content .ql-editor {
    background: ${e("editor.content.background")};
    color: ${e("editor.content.color")};
    border-end-end-radius: ${e("editor.content.border.radius")};
    border-end-start-radius: ${e("editor.content.border.radius")};
}

.p-editor .ql-snow.ql-toolbar button:hover,
.p-editor .ql-snow.ql-toolbar button:focus {
    color: ${e("editor.toolbar.item.hover.color")};
}

.p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: ${e("editor.toolbar.item.hover.color")};
}

.p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: ${e("editor.toolbar.item.hover.color")};
}

.p-editor .ql-snow.ql-toolbar button.ql-active,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: ${e("editor.toolbar.item.active.color")};
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: ${e("editor.toolbar.item.active.color")};
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: ${e("editor.toolbar.item.active.color")};
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: ${e("editor.toolbar.item.active.color")};
}
`,Ql={root:"p-editor",toolbar:"p-editor-toolbar",content:"p-editor-content"},As=(()=>{class e extends j{name="editor";theme=Jl;classes=Ql;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Zl=["header"],ec=[[["p-header"]]],tc=["p-header"];function oc(e,o){e&1&&Nt(0)}function rc(e,o){if(e&1&&(w(0,"div",3),_e(1),K(2,oc,1,0,"ng-container",4),k()),e&2){let t=W();x(2),C("ngTemplateOutlet",t.headerTemplate)}}function nc(e,o){e&1&&(w(0,"div",3)(1,"span",5)(2,"select",6)(3,"option",7),Y(4,"Heading"),k(),w(5,"option",8),Y(6,"Subheading"),k(),w(7,"option",9),Y(8,"Normal"),k()(),w(9,"select",10)(10,"option",9),Y(11,"Sans Serif"),k(),w(12,"option",11),Y(13,"Serif"),k(),w(14,"option",12),Y(15,"Monospace"),k()()(),w(16,"span",5),A(17,"button",13)(18,"button",14)(19,"button",15),k(),w(20,"span",5),A(21,"select",16)(22,"select",17),k(),w(23,"span",5),A(24,"button",18)(25,"button",19),w(26,"select",20),A(27,"option",9),w(28,"option",21),Y(29,"center"),k(),w(30,"option",22),Y(31,"right"),k(),w(32,"option",23),Y(33,"justify"),k()()(),w(34,"span",5),A(35,"button",24)(36,"button",25)(37,"button",26),k(),w(38,"span",5),A(39,"button",27),k()())}var ic={provide:lo,useExisting:Ze(()=>Zo),multi:!0},Zo=(()=>{class e extends ie{style;styleClass;placeholder;formats;modules;bounds;scrollingContainer;debug;get readonly(){return this._readonly}set readonly(t){this._readonly=t,this.quill&&(this._readonly?this.quill.disable():this.quill.enable())}onInit=new ee;onTextChange=new ee;onSelectionChange=new ee;toolbar;value;delayedCommand=null;_readonly=!1;onModelChange=()=>{};onModelTouched=()=>{};quill;dynamicQuill;headerTemplate;get isAttachedQuillEditorToDOM(){return this.quillElements?.editorElement?.isConnected}quillElements;_componentStyle=g(As);constructor(){super(),_r(()=>{this.initQuillElements(),this.initQuillEditor()})}writeValue(t){if(this.value=t,this.quill)if(t){let r=()=>{this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2")?{html:this.value}:this.value))};this.isAttachedQuillEditorToDOM?r():this.delayedCommand=r}else{let r=()=>{this.quill.setText("")};this.isAttachedQuillEditorToDOM?r():this.delayedCommand=r}}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}getQuill(){return this.quill}initQuillEditor(){Se(this.platformId)||(this.dynamicQuill?this.createQuillEditor():import("./chunk-GBOB52RX.js").then(t=>{this.dynamicQuill=t.default,this.createQuillEditor()}).catch(t=>console.error(t.message)))}createQuillEditor(){this.initQuillElements();let{toolbarElement:t,editorElement:r}=this.quillElements,n={toolbar:t},i=this.modules?m(m({},n),this.modules):n;this.quill=new this.dynamicQuill(r,{modules:i,placeholder:this.placeholder,readOnly:this.readonly,theme:"snow",formats:this.formats,bounds:this.bounds,debug:this.debug,scrollingContainer:this.scrollingContainer});let s=this.dynamicQuill.version.startsWith("2");this.value&&this.quill.setContents(this.quill.clipboard.convert(s?{html:this.value}:this.value)),this.quill.on("text-change",(a,l,c)=>{if(c==="user"){let d=s?this.quill.getSemanticHTML():ut(r,".ql-editor").innerHTML,u=this.quill.getText().trim();d==="<p><br></p>"&&(d=null),this.onTextChange.emit({htmlValue:d,textValue:u,delta:a,source:c}),this.onModelChange(d),this.onModelTouched()}}),this.quill.on("selection-change",(a,l,c)=>{this.onSelectionChange.emit({range:a,oldRange:l,source:c})}),this.onInit.emit({editor:this.quill})}initQuillElements(){this.quillElements||(this.quillElements={editorElement:ut(this.el.nativeElement,"div.p-editor-content"),toolbarElement:ut(this.el.nativeElement,"div.p-editor-toolbar")})}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["p-editor"]],contentQueries:function(r,n,i){if(r&1&&(fe(i,bn,5),fe(i,Zl,5)),r&2){let s;he(s=ge())&&(n.toolbar=s.first),he(s=ge())&&(n.headerTemplate=s.first)}},hostAttrs:[1,"p-editor"],inputs:{style:"style",styleClass:"styleClass",placeholder:"placeholder",formats:"formats",modules:"modules",bounds:"bounds",scrollingContainer:"scrollingContainer",debug:"debug",readonly:"readonly"},outputs:{onInit:"onInit",onTextChange:"onTextChange",onSelectionChange:"onSelectionChange"},standalone:!0,features:[N([ic,As]),B,X],ngContentSelectors:tc,decls:4,vars:6,consts:[[3,"ngClass"],["class","p-editor-toolbar",4,"ngIf"],[1,"p-editor-content",3,"ngStyle"],[1,"p-editor-toolbar"],[4,"ngTemplateOutlet"],[1,"ql-formats"],[1,"ql-header"],["value","1"],["value","2"],["selected",""],[1,"ql-font"],["value","serif"],["value","monospace"],["aria-label","Bold","type","button",1,"ql-bold"],["aria-label","Italic","type","button",1,"ql-italic"],["aria-label","Underline","type","button",1,"ql-underline"],[1,"ql-color"],[1,"ql-background"],["value","ordered","aria-label","Ordered List","type","button",1,"ql-list"],["value","bullet","aria-label","Unordered List","type","button",1,"ql-list"],[1,"ql-align"],["value","center"],["value","right"],["value","justify"],["aria-label","Insert Link","type","button",1,"ql-link"],["aria-label","Insert Image","type","button",1,"ql-image"],["aria-label","Insert Code Block","type","button",1,"ql-code-block"],["aria-label","Remove Styles","type","button",1,"ql-clean"]],template:function(r,n){r&1&&(xe(ec),w(0,"div",0),K(1,rc,3,1,"div",1)(2,nc,40,0,"div",1),A(3,"div",2),k()),r&2&&(ke(n.styleClass),C("ngClass","p-editor-container"),x(),C("ngIf",n.toolbar||n.headerTemplate),x(),C("ngIf",!n.toolbar&&!n.headerTemplate),x(),C("ngStyle",n.style))},dependencies:[te,Ve,Vt,$t,$e,pe],encapsulation:2,changeDetection:0})}return e})();var Is=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,r){t&&r&&(t.classList?t.classList.add(r):t.className+=" "+r)}static addMultipleClasses(t,r){if(t&&r)if(t.classList){let n=r.trim().split(" ");for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=r.split(" ");for(let i=0;i<n.length;i++)t.className+=" "+n[i]}}static removeClass(t,r){t&&r&&(t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,r){t&&r&&[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,r){return t&&r?t.classList?t.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(r){return r!==t})}static find(t,r){return Array.from(t.querySelectorAll(r))}static findSingle(t,r){return this.isElement(t)?t.querySelector(r):null}static index(t){let r=t.parentNode.childNodes,n=0;for(var i=0;i<r.length;i++){if(r[i]==t)return n;r[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,r){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(var s=0;s<n.length;s++){if(n[s]==t)return i;n[s].attributes&&n[s].attributes[r]&&n[s].nodeType==1&&i++}return-1}static appendOverlay(t,r,n="self"){n!=="self"&&t&&r&&this.appendChild(t,r)}static alignOverlay(t,r,n="self",i=!0){t&&r&&(i&&(t.style.minWidth=`${e.getOuterWidth(r)}px`),n==="self"?this.relativePosition(t,r):this.absolutePosition(t,r))}static relativePosition(t,r,n=!0){let i=T=>{if(T)return getComputedStyle(T).getPropertyValue("position")==="relative"?T:i(T.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=r.offsetHeight,l=r.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),u=this.getViewport(),p=i(t)?.getBoundingClientRect()||{top:-1*c,left:-1*d},v,h;l.top+a+s.height>u.height?(v=l.top-p.top-s.height,t.style.transformOrigin="bottom",l.top+v<0&&(v=-1*l.top)):(v=a+l.top-p.top,t.style.transformOrigin="top");let y=l.left+s.width-u.width,M=l.left-p.left;s.width>u.width?h=(l.left-p.left)*-1:y>0?h=M-y:h=l.left-p.left,t.style.top=v+"px",t.style.left=h+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,r,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=i.height,a=i.width,l=r.offsetHeight,c=r.offsetWidth,d=r.getBoundingClientRect(),u=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),p=this.getViewport(),v,h;d.top+l+s>p.height?(v=d.top+u-s,t.style.transformOrigin="bottom",v<0&&(v=u)):(v=l+d.top+u,t.style.transformOrigin="top"),d.left+a>p.width?h=Math.max(0,d.left+f+c-a):h=d.left+f,t.style.top=v+"px",t.style.left=h+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,r=[]){return t.parentNode===null?r:this.getParents(t.parentNode,r.concat([t.parentNode]))}static getScrollableParents(t){let r=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue("overflow"))||i.test(l.getPropertyValue("overflowX"))||i.test(l.getPropertyValue("overflowY"))};for(let a of n){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let d of c){let u=this.findSingle(a,d);u&&s(u)&&r.push(u)}}a.nodeType!==9&&s(a)&&r.push(a)}}return r}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let r=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",r}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let r=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",r}static getHiddenElementDimensions(t){let r={};return t.style.visibility="hidden",t.style.display="block",r.width=t.offsetWidth,r.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",r}static scrollInView(t,r){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),d=r.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,u=t.scrollTop,f=t.clientHeight,p=this.getOuterHeight(r);d<0?t.scrollTop=u+d:d+p>f&&(t.scrollTop=u+d-f+p)}static fadeIn(t,r){t.style.opacity=0;let n=+new Date,i=0,s=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/r,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,r){var n=1,i=50,s=r,a=i/s;let l=setInterval(()=>{n=n-a,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,r){var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return i.call(t,r)}static getOuterWidth(t,r){let n=t.offsetWidth;if(r){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let r=getComputedStyle(t);return parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)}static getHorizontalMargin(t){let r=getComputedStyle(t);return parseFloat(r.marginLeft)+parseFloat(r.marginRight)}static innerWidth(t){let r=t.offsetWidth,n=getComputedStyle(t);return r+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),r}static width(t){let r=t.offsetWidth,n=getComputedStyle(t);return r-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),r}static getInnerHeight(t){let r=t.offsetHeight,n=getComputedStyle(t);return r+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),r}static getOuterHeight(t,r){let n=t.offsetHeight;if(r){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let r=t.offsetHeight,n=getComputedStyle(t);return r-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),r}static getWidth(t){let r=t.offsetWidth,n=getComputedStyle(t);return r-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),r}static getViewport(){let t=window,r=document,n=r.documentElement,i=r.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||i.clientWidth,a=t.innerHeight||n.clientHeight||i.clientHeight;return{width:s,height:a}}static getOffset(t){var r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,r){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(r,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,r=t.indexOf("MSIE ");if(r>0)return!0;var n=t.indexOf("Trident/");if(n>0){var i=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,r){if(this.isElement(r))r.appendChild(t);else if(r&&r.el&&r.el.nativeElement)r.el.nativeElement.appendChild(t);else throw"Cannot append "+r+" to "+t}static removeChild(t,r){if(this.isElement(r))r.removeChild(t);else if(r.el&&r.el.nativeElement)r.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+r}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let r=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let r=document.createElement("div");r.className="p-scrollbar-measure",document.body.appendChild(r);let n=r.offsetWidth-r.clientWidth;return document.body.removeChild(r),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let r=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=r,r}static invokeElementMethod(t,r,n){t[r].apply(t,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),r=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:r[1]||"",version:r[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,r){t&&document.activeElement!==t&&t.focus(r)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,r=""){let n=this.find(t,this.getFocusableSelectorString(r)),i=[];for(let s of n){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&i.push(s)}return i}static getFocusableElement(t,r=""){let n=this.findSingle(t,this.getFocusableSelectorString(r));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!="none"&&i.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,r=""){let n=this.getFocusableElements(t,r);return n.length>0?n[0]:null}static getLastFocusableElement(t,r){let n=this.getFocusableElements(t,r);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,r=!1){let n=e.getFocusableElements(t),i=0;if(n&&n.length>0){let s=n.indexOf(n[0].ownerDocument.activeElement);r?s==-1||s===0?i=n.length-1:i=s-1:s!=-1&&s!==n.length-1&&(i=s+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,r){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return r?.nextElementSibling;case"@prev":return r?.previousElementSibling;case"@parent":return r?.parentElement;case"@grandparent":return r?.parentElement.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,r){if(t){let n=t.getAttribute(r);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,r={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,r),i.append(...n),i}}static setAttribute(t,r="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(r,n)}static setAttributes(t,r={}){if(this.isElement(t)){let n=(i,s)=>{let a=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?n(i,c):Object.entries(c).map(([f,p])=>i==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=u.length?l.concat(u.filter(f=>!!f)):l}}return l},a)};Object.entries(r).forEach(([i,s])=>{if(s!=null){let a=i.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):i==="pBind"?this.setAttributes(t,s):(s=i==="class"?[...new Set(n("class",s))].join(" ").trim():i==="style"?n("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=s),t.setAttribute(i,s))}})}}static isFocusableElement(t,r=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r}`):!1}}return e})();var Ms=(()=>{class e extends ie{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(J);document=g(I);host=g(Oe);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){zt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=Is.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275dir=z({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",F],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[Fe,B]})}return e})();var sc=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,ac={root:({props:e,instance:o})=>["p-badge p-component",{"p-badge-circle":q(e.value)&&String(e.value).length===1,"p-badge-dot":re(e.value)&&!o.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Os=(()=>{class e extends j{name="badge";theme=sc;classes=ac;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function lc(e,o){if(e&1&&(w(0,"span",1),Y(1),k()),e&2){let t=W();ke(t.styleClass()),C("ngClass",t.containerClass())("ngStyle",t.style()),x(),Ft(t.value())}}var er=(()=>{class e extends ie{styleClass=Ce();style=Ce();badgeSize=Ce();size=Ce();severity=Ce();value=Ce();badgeDisabled=Ce(!1,{transform:F});_componentStyle=g(Os);containerClass=Be(()=>({"p-badge p-component":!0,"p-badge-circle":q(this.value())&&String(this.value()).length===1,"p-badge-lg":this.badgeSize()==="large","p-badge-xl":this.badgeSize()==="xlarge","p-badge-sm":this.badgeSize()==="small","p-badge-dot":re(this.value()),[`p-badge-${this.severity()}`]:this.severity()}));static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=$({type:e,selectors:[["p-badge"]],inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[N([Os]),B,X],decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle"],[3,"ngClass","ngStyle"]],template:function(r,n){r&1&&K(0,lc,2,5,"span",0),r&2&&Er(n.badgeDisabled()?-1:0)},dependencies:[te,Ve,$e,pe],encapsulation:2,changeDetection:0})}return e})(),Bs=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=G({type:e});static \u0275inj=H({imports:[er,pe,pe]})}return e})();var dc=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,uc=(()=>{class e extends j{name="baseicon";inlineStyles=dc;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var pc=["*"],Ns=(()=>{class e extends ie{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=re(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=$({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",F],styleClass:"styleClass"},standalone:!0,features:[N([uc]),Fe,B,X],ngContentSelectors:pc,decls:1,vars:0,template:function(r,n){r&1&&(xe(),_e(0))},encapsulation:2,changeDetection:0})}return e})();var Fs=(()=>{class e extends Ns{pathId;ngOnInit(){this.pathId="url(#"+pt()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=$({type:e,selectors:[["SpinnerIcon"]],standalone:!0,features:[B,X],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(r,n){r&1&&(gr(),w(0,"svg",0)(1,"g"),A(2,"path",1),k(),w(3,"defs")(4,"clipPath",2),A(5,"rect",3),k()()()),r&2&&(ke(n.getClassNames()),ue("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),x(),ue("clip-path",n.pathId),x(3),C("id",n.pathId))},encapsulation:2})}return e})();var fc=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,hc={root:"p-ink"},Ps=(()=>{class e extends j{name="ripple";theme=fc;classes=hc;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Ls=(()=>{class e extends ie{zone=g(se);_componentStyle=g(Ps);animationListener;mouseDownListener;timeout;constructor(){super(),rt(()=>{zt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let r=this.getInk();if(!r||this.document.defaultView?.getComputedStyle(r,null).display==="none")return;if(ze(r,"p-ink-active"),!Vo(r)&&!$o(r)){let a=Math.max(cn(this.el.nativeElement),un(this.el.nativeElement));r.style.height=a+"px",r.style.width=a+"px"}let n=dn(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-$o(r)/2,s=t.pageY-n.top+this.document.body.scrollLeft-Vo(r)/2;this.renderer.setStyle(r,"top",s+"px"),this.renderer.setStyle(r,"left",i+"px"),Qt(r,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&ze(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let r=0;r<t.length;r++)if(typeof t[r].className=="string"&&t[r].className.indexOf("p-ink")!==-1)return t[r];return null}resetInk(){let t=this.getInk();t&&ze(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),ze(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,pn(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=z({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[N([Ps]),B]})}return e})();var gc=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,mc={root:({instance:e,props:o})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Vs=(()=>{class e extends j{name="button";theme=gc;classes=mc;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var bc=["content"],vc=["loading"],yc=["icon"],wc=["*"],$s=e=>({class:e});function Cc(e,o){e&1&&Nt(0)}function kc(e,o){if(e&1&&A(0,"span",8),e&2){let t=W(3);C("ngClass",t.iconClass()),ue("aria-hidden",!0)("data-pc-section","loadingicon")}}function xc(e,o){if(e&1&&A(0,"SpinnerIcon",9),e&2){let t=W(3);C("styleClass",t.spinnerIconClass())("spin",!0),ue("aria-hidden",!0)("data-pc-section","loadingicon")}}function _c(e,o){if(e&1&&(Ot(0),K(1,kc,1,3,"span",6)(2,xc,1,4,"SpinnerIcon",7),Bt()),e&2){let t=W(2);x(),C("ngIf",t.loadingIcon),x(),C("ngIf",!t.loadingIcon)}}function Sc(e,o){}function Ec(e,o){if(e&1&&K(0,Sc,0,0,"ng-template",10),e&2){let t=W(2);C("ngIf",t.loadingicon)}}function qc(e,o){if(e&1&&(Ot(0),K(1,_c,3,2,"ng-container",2)(2,Ec,1,1,null,5),Bt()),e&2){let t=W();x(),C("ngIf",!t.loadingicon),x(),C("ngTemplateOutlet",t.loadingicon)("ngTemplateOutletContext",xo(3,$s,t.iconClass()))}}function Rc(e,o){if(e&1&&A(0,"span",8),e&2){let t=W(2);ke(t.icon),C("ngClass",t.iconClass()),ue("data-pc-section","icon")}}function Tc(e,o){}function Dc(e,o){if(e&1&&K(0,Tc,0,0,"ng-template",10),e&2){let t=W(2);C("ngIf",!t.icon&&t.iconTemplate)}}function Ac(e,o){if(e&1&&(Ot(0),K(1,Rc,1,4,"span",11)(2,Dc,1,1,null,5),Bt()),e&2){let t=W();x(),C("ngIf",t.icon&&!t.iconTemplate),x(),C("ngTemplateOutlet",t.iconTemplate)("ngTemplateOutletContext",xo(3,$s,t.iconClass()))}}function Ic(e,o){if(e&1&&(w(0,"span",12),Y(1),k()),e&2){let t=W();ue("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),x(),Ft(t.label)}}function Mc(e,o){if(e&1&&A(0,"p-badge",13),e&2){let t=W();C("value",t.badge)("severity",t.badgeSeverity)}}var tr=(()=>{class e extends ie{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new ee;onFocus=new ee;onBlur=new ee;content;loadingicon;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([r,n])=>this[`_${r}`]!==n&&(this[`_${r}`]=n))}get hasFluid(){let r=this.el.nativeElement.closest("p-fluid");return re(this.fluid)?!!r:this.fluid}_componentStyle=g(Vs);ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:r}=t;if(r){let n=r.currentValue;for(let i in n)this[i]=n[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[r])=>t+` ${r}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingicon)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text,"p-button-outlined":this.outlined,"p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=$({type:e,selectors:[["p-button"]],contentQueries:function(r,n,i){if(r&1&&(fe(i,bc,5),fe(i,vc,5),fe(i,yc,5)),r&2){let s;he(s=ge())&&(n.content=s.first),he(s=ge())&&(n.loadingicon=s.first),he(s=ge())&&(n.iconTemplate=s.first)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",F],loading:[2,"loading","loading",F],loadingIcon:"loadingIcon",raised:[2,"raised","raised",F],rounded:[2,"rounded","rounded",F],text:[2,"text","text",F],plain:[2,"plain","plain",F],severity:"severity",outlined:[2,"outlined","outlined",F],link:[2,"link","link",F],tabindex:[2,"tabindex","tabindex",Nr],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",F],fluid:[2,"fluid","fluid",F],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[N([Vs]),Fe,B,Me,X],ngContentSelectors:wc,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(r,n){r&1&&(xe(),w(0,"button",0),Pe("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),_e(1),K(2,Cc,1,0,"ng-container",1)(3,qc,3,5,"ng-container",2)(4,Ac,3,5,"ng-container",2)(5,Ic,2,3,"span",3)(6,Mc,1,2,"p-badge",4),k()),r&2&&(C("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),ue("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),x(2),C("ngTemplateOutlet",n.content),x(),C("ngIf",n.loading),x(),C("ngIf",!n.loading),x(),C("ngIf",!n.content&&n.label),x(),C("ngIf",!n.content&&n.badge))},dependencies:[te,Ve,Vt,$t,$e,Ls,Ms,Fs,Bs,er,pe],encapsulation:2,changeDetection:0})}return e})(),zs=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=G({type:e});static \u0275inj=H({imports:[te,tr,pe,pe]})}return e})();var Ye=class e{constructor(o){this.http=o;this.loadComments()}apiUrl="/backend/index.php";commentsSubject=new sr([]);comments$=this.commentsSubject.asObservable();loadComments(){this.http.get(this.apiUrl).subscribe(o=>{console.log("Updated comments list:",o.comments),this.commentsSubject.next([...o.comments])})}addComment(o){return this.http.post(this.apiUrl,{comment_text:o}).pipe(mo(t=>{t.success&&(console.log("Comment added:",t.message),this.loadComments())}))}static \u0275fac=function(t){return new(t||e)(_(To))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})};function Nc(e,o){if(e&1&&(w(0,"div",2),A(1,"p",3),k()),e&2){let t=o.$implicit;x(),C("innerHTML",t,wr)}}var uo=class e{constructor(o){this.comentsService=o;this.coments$=this.comentsService.comments$}coments$;static \u0275fac=function(t){return new(t||e)(O(Ye))};static \u0275cmp=$({type:e,selectors:[["app-coments-table"]],standalone:!0,features:[N([]),X],decls:3,vars:3,consts:[[1,"coments-section"],["class","coment",4,"ngFor","ngForOf"],[1,"coment"],[1,"coment_text",3,"innerHTML"]],template:function(t,r){t&1&&(w(0,"div",0),K(1,Nc,2,1,"div",1),Ar(2,"async"),k()),t&2&&(x(),C("ngForOf",Ir(2,1,r.coments$)))},dependencies:[te,Lr,Vr],styles:[".coment[_ngcontent-%COMP%]{padding:10px;border:1px solid grey;margin-bottom:8px}"]})};var Fc=()=>({height:"320px"}),po=class e{constructor(o){this.comentsService=o}title="DevOpsPet";text="";submitComment(){this.text.trim()&&this.comentsService.addComment(this.text).subscribe(o=>{o.success?(console.log("Comment added:",o.message),this.text=""):console.error("Error adding comment:",o.message)})}static \u0275fac=function(t){return new(t||e)(O(Ye))};static \u0275cmp=$({type:e,selectors:[["app-root"]],standalone:!0,features:[N([]),X],decls:6,vars:4,consts:[[1,"card"],[3,"ngModelChange","ngModel"],[1,"card","flex","justify-center"],["label","Submit",3,"click"]],template:function(t,r){t&1&&(w(0,"div",0)(1,"p-editor",1),Tr("ngModelChange",function(i){return Rr(r.text,i)||(r.text=i),i}),k()(),w(2,"div",2)(3,"p-button",3),Pe("click",function(){return r.submitComment()}),k()(),w(4,"div",0),A(5,"app-coments-table"),k()),t&2&&(x(),Sr(Dr(3,Fc)),qr("ngModel",r.text))},dependencies:[Zo,Ts,Es,Qo,zs,tr,uo],styles:[".card[_ngcontent-%COMP%]{margin-top:20px}"]})};sn(po,cs).catch(e=>console.error(e));
