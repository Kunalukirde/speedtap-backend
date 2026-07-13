import{$ as m,$a as Et,$b as ct,Aa as k,Ac as Nn,Ba as ji,Bb as q,C as Do,Ca as Io,Cb as he,Cc as Gi,D as bt,Da as ot,Db as pe,Dc as Be,E as xo,Ea as To,Ec as Se,Fa as yt,Ga as So,Gc as Ko,H as Eo,Ha as Dt,Hb as ue,I as Pi,Ia as Ro,Ib as R,Jb as L,Kb as ye,Kc as Gt,L as Co,La as kn,Lb as At,Lc as qo,Ma as at,Mb as Mt,N as wo,Na as xt,Nb as $e,Nc as Yo,O as En,Oa as Oo,Oc as Ge,P as Cn,Pa as No,Pc as Xo,Q as Ao,Qa as Lo,Qb as Rn,Qc as Jo,R as Je,Ra as Po,Rc as G,Sa as Bo,Sb as kt,Sc as We,T as Mo,Ta as Vo,Tb as De,Tc as Qo,Ua as jo,Ub as Y,Uc as ea,V as y,Va as He,Vb as ee,W as _t,X as ne,Xb as Pe,Y as u,Yb as ge,Z as F,Zb as j,_a as N,_b as Ho,a as xn,aa as D,ab as Uo,ac as X,ba as s,bb as Fn,bc as J,c as Xe,ca as wn,cb as Ui,cc as $o,db as In,dc as Go,e as V,ea as ko,eb as zi,ec as $i,f as ho,fa as Ht,fb as Qe,fc as dt,ga as Fo,gb as ce,gc as On,hb as p,hc as P,ic as Ft,j as po,ja as $t,jb as Tn,jc as Wo,k as go,ka as An,kc as Zo,l as rt,la as oe,ma as M,na as Mn,nb as H,ob as I,p as se,pa as K,pb as g,q as bo,qa as C,qb as Sn,ra as Bi,rb as z,sb as Ct,sc as $,t as _o,ta as ie,v as vo,va as Vi,vb as wt,wa as vt,wb as Hi,xa as fe,y as yo,ya as Te,yb as zo,z as Le,zb as st}from"./chunk-CZL7FXGA.js";import{a as E,b as ae,c as fo,e as Dn}from"./chunk-JKOY2XUY.js";var ta=null;function Ae(){return ta}function Wi(t){ta??=t}var Wt=class{},et=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:()=>s(na),providedIn:"platform"})}return t})(),Hc=new m(""),na=(()=>{class t extends et{_location;_history;_doc=s(M);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ae().getBaseHref(this._doc)}onPopState(e){let n=Ae().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Ae().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Ln(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function ia(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Re(t){return t&&t[0]!=="?"?`?${t}`:t}var It=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:()=>s(oa),providedIn:"root"})}return t})(),Pn=new m(""),oa=(()=>{class t extends It{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??s(M).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ln(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Re(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+Re(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+Re(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(D(et),D(Pn,8))};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var aa=(()=>{class t{_subject=new V;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Wc(ia(ra(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Re(n))}normalize(e){return t.stripTrailingSlash(Gc(this._basePath,ra(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Re(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Re(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Re;static joinWithSlash=Ln;static stripTrailingSlash=ia;static \u0275fac=function(n){return new(n||t)(D(It))};static \u0275prov=u({token:t,factory:()=>$c(),providedIn:"root"})}return t})();function $c(){return new aa(D(It))}function Gc(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function ra(t){return t.replace(/\/index\.html$/,"")}function Wc(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Zc=(()=>{class t extends It{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Ln(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+Re(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+Re(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(D(et),D(Pn,8))};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})();var Qi=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(Qi||{});var de=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(de||{}),O=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(O||{}),be=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(be||{}),_e={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ma(t){return De(t)[Y.LocaleId]}function fa(t,i,e){let n=De(t),r=[n[Y.DayPeriodsFormat],n[Y.DayPeriodsStandalone]],o=Me(r,i);return Me(o,e)}function ha(t,i,e){let n=De(t),r=[n[Y.DaysFormat],n[Y.DaysStandalone]],o=Me(r,i);return Me(o,e)}function pa(t,i,e){let n=De(t),r=[n[Y.MonthsFormat],n[Y.MonthsStandalone]],o=Me(r,i);return Me(o,e)}function ga(t,i){let n=De(t)[Y.Eras];return Me(n,i)}function Zt(t,i){let e=De(t);return Me(e[Y.DateFormat],i)}function Kt(t,i){let e=De(t);return Me(e[Y.TimeFormat],i)}function qt(t,i){let n=De(t)[Y.DateTimeFormat];return Me(n,i)}function Ve(t,i){let e=De(t),n=e[Y.NumberSymbols][i];if(typeof n>"u"){if(i===_e.CurrencyDecimal)return e[Y.NumberSymbols][_e.Decimal];if(i===_e.CurrencyGroup)return e[Y.NumberSymbols][_e.Group]}return n}function ba(t,i){return De(t)[Y.NumberFormats][i]}function _a(t){if(!t[Y.ExtraData])throw new y(2303,!1)}function va(t){let i=De(t);return _a(i),(i[Y.ExtraData][2]||[]).map(n=>typeof n=="string"?Zi(n):[Zi(n[0]),Zi(n[1])])}function ya(t,i,e){let n=De(t);_a(n);let r=[n[Y.ExtraData][0],n[Y.ExtraData][1]],o=Me(r,i)||[];return Me(o,e)||[]}function Me(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new y(2304,!1)}function Zi(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}var Kc=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Bn={},qc=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,Yc=256;function Da(t,i,e,n){let r=ad(t);Xc(i),i=Ze(e,i)||i;let a=[],c;for(;i;)if(c=qc.exec(i),c){a=a.concat(c.slice(1));let h=a.pop();if(!h)break;i=h}else{a.push(i);break}let d=r.getTimezoneOffset();n&&(d=Ea(n,d),r=od(r,n));let l="";return a.forEach(h=>{let f=id(h);l+=f?f(r,e,d):h==="''"?"'":h.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),l}function Xc(t){if(t.length>Yc)throw new y(2300,!1)}function Hn(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function Ze(t,i){let e=ma(t);if(Bn[e]??={},Bn[e][i])return Bn[e][i];let n="";switch(i){case"shortDate":n=Zt(t,be.Short);break;case"mediumDate":n=Zt(t,be.Medium);break;case"longDate":n=Zt(t,be.Long);break;case"fullDate":n=Zt(t,be.Full);break;case"shortTime":n=Kt(t,be.Short);break;case"mediumTime":n=Kt(t,be.Medium);break;case"longTime":n=Kt(t,be.Long);break;case"fullTime":n=Kt(t,be.Full);break;case"short":let r=Ze(t,"shortTime"),o=Ze(t,"shortDate");n=Vn(qt(t,be.Short),[r,o]);break;case"medium":let a=Ze(t,"mediumTime"),c=Ze(t,"mediumDate");n=Vn(qt(t,be.Medium),[a,c]);break;case"long":let d=Ze(t,"longTime"),l=Ze(t,"longDate");n=Vn(qt(t,be.Long),[d,l]);break;case"full":let h=Ze(t,"fullTime"),f=Ze(t,"fullDate");n=Vn(qt(t,be.Full),[h,f]);break}return n&&(Bn[e][i]=n),n}function Vn(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function Oe(t,i,e="-",n,r){let o="";(t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,o=e));let a=String(t);for(;a.length<i;)a="0"+a;return n&&(a=a.slice(a.length-i)),o+a}function Jc(t,i){return Oe(t,3).substring(0,i)}function Q(t,i,e=0,n=!1,r=!1){return function(o,a){let c=Qc(t,o);if((e>0||c>-e)&&(c+=e),t===3)c===0&&e===-12&&(c=12);else if(t===6)return Jc(c,i);let d=Ve(a,_e.MinusSign);return Oe(c,i,d,n,r)}}function Qc(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new y(2301,!1)}}function U(t,i,e=de.Format,n=!1){return function(r,o){return ed(r,o,t,i,e,n)}}function ed(t,i,e,n,r,o){switch(e){case 2:return pa(i,r,n)[t.getMonth()];case 1:return ha(i,r,n)[t.getDay()];case 0:let a=t.getHours(),c=t.getMinutes();if(o){let l=va(i),h=ya(i,r,n),f=l.findIndex(v=>{if(Array.isArray(v)){let[_,T]=v,B=a>=_.hours&&c>=_.minutes,b=a<T.hours||a===T.hours&&c<T.minutes;if(_.hours<T.hours){if(B&&b)return!0}else if(B||b)return!0}else if(v.hours===a&&v.minutes===c)return!0;return!1});if(f!==-1)return h[f]}return fa(i,r,n)[a<12?0:1];case 3:return ga(i,n)[t.getFullYear()<=0?0:1];default:let d=e;throw new y(2302,!1)}}function jn(t){return function(i,e,n){let r=-1*n,o=Ve(e,_e.MinusSign),a=r>0?Math.floor(r/60):Math.ceil(r/60);switch(t){case 0:return(r>=0?"+":"")+Oe(a,2,o)+Oe(Math.abs(r%60),2,o);case 1:return"GMT"+(r>=0?"+":"")+Oe(a,1,o);case 2:return"GMT"+(r>=0?"+":"")+Oe(a,2,o)+":"+Oe(Math.abs(r%60),2,o);case 3:return n===0?"Z":(r>=0?"+":"")+Oe(a,2,o)+":"+Oe(Math.abs(r%60),2,o);default:throw new y(2310,!1)}}}var td=0,zn=4;function nd(t){let i=Hn(t,td,1).getDay();return Hn(t,0,1+(i<=zn?zn:zn+7)-i)}function xa(t){let i=t.getDay(),e=i===0?-3:zn-i;return Hn(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Ki(t,i=!1){return function(e,n){let r;if(i){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();r=1+Math.floor((a+o)/7)}else{let o=xa(e),a=nd(o.getFullYear()),c=o.getTime()-a.getTime();r=1+Math.round(c/6048e5)}return Oe(r,t,Ve(n,_e.MinusSign))}}function Un(t,i=!1){return function(e,n){let o=xa(e).getFullYear();return Oe(o,t,Ve(n,_e.MinusSign),i)}}var qi={};function id(t){if(qi[t])return qi[t];let i;switch(t){case"G":case"GG":case"GGG":i=U(3,O.Abbreviated);break;case"GGGG":i=U(3,O.Wide);break;case"GGGGG":i=U(3,O.Narrow);break;case"y":i=Q(0,1,0,!1,!0);break;case"yy":i=Q(0,2,0,!0,!0);break;case"yyy":i=Q(0,3,0,!1,!0);break;case"yyyy":i=Q(0,4,0,!1,!0);break;case"Y":i=Un(1);break;case"YY":i=Un(2,!0);break;case"YYY":i=Un(3);break;case"YYYY":i=Un(4);break;case"M":case"L":i=Q(1,1,1);break;case"MM":case"LL":i=Q(1,2,1);break;case"MMM":i=U(2,O.Abbreviated);break;case"MMMM":i=U(2,O.Wide);break;case"MMMMM":i=U(2,O.Narrow);break;case"LLL":i=U(2,O.Abbreviated,de.Standalone);break;case"LLLL":i=U(2,O.Wide,de.Standalone);break;case"LLLLL":i=U(2,O.Narrow,de.Standalone);break;case"w":i=Ki(1);break;case"ww":i=Ki(2);break;case"W":i=Ki(1,!0);break;case"d":i=Q(2,1);break;case"dd":i=Q(2,2);break;case"c":case"cc":i=Q(7,1);break;case"ccc":i=U(1,O.Abbreviated,de.Standalone);break;case"cccc":i=U(1,O.Wide,de.Standalone);break;case"ccccc":i=U(1,O.Narrow,de.Standalone);break;case"cccccc":i=U(1,O.Short,de.Standalone);break;case"E":case"EE":case"EEE":i=U(1,O.Abbreviated);break;case"EEEE":i=U(1,O.Wide);break;case"EEEEE":i=U(1,O.Narrow);break;case"EEEEEE":i=U(1,O.Short);break;case"a":case"aa":case"aaa":i=U(0,O.Abbreviated);break;case"aaaa":i=U(0,O.Wide);break;case"aaaaa":i=U(0,O.Narrow);break;case"b":case"bb":case"bbb":i=U(0,O.Abbreviated,de.Standalone,!0);break;case"bbbb":i=U(0,O.Wide,de.Standalone,!0);break;case"bbbbb":i=U(0,O.Narrow,de.Standalone,!0);break;case"B":case"BB":case"BBB":i=U(0,O.Abbreviated,de.Format,!0);break;case"BBBB":i=U(0,O.Wide,de.Format,!0);break;case"BBBBB":i=U(0,O.Narrow,de.Format,!0);break;case"h":i=Q(3,1,-12);break;case"hh":i=Q(3,2,-12);break;case"H":i=Q(3,1);break;case"HH":i=Q(3,2);break;case"m":i=Q(4,1);break;case"mm":i=Q(4,2);break;case"s":i=Q(5,1);break;case"ss":i=Q(5,2);break;case"S":i=Q(6,1);break;case"SS":i=Q(6,2);break;case"SSS":i=Q(6,3);break;case"Z":case"ZZ":case"ZZZ":i=jn(0);break;case"ZZZZZ":i=jn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=jn(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=jn(2);break;default:return null}return qi[t]=i,i}function Ea(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function rd(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function od(t,i,e){let r=t.getTimezoneOffset(),o=Ea(i,r);return rd(t,-1*(o-r))}function ad(t){if(sa(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[r,o=1,a=1]=t.split("-").map(c=>+c);return Hn(r,o-1,a)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(Kc))return sd(n)}let i=new Date(t);if(!sa(i))throw new y(2311,!1);return i}function sd(t){let i=new Date(0),e=0,n=0,r=t[8]?i.setUTCFullYear:i.setFullYear,o=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),r.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let a=Number(t[4]||0)-e,c=Number(t[5]||0)-n,d=Number(t[6]||0),l=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(i,a,c,d,l),i}function sa(t){return t instanceof Date&&!isNaN(t.valueOf())}var cd=/^(\d+)?\.((\d+)(-(\d+))?)?$/,ca=22,$n=".",Yt="0",dd=";",ld=",",Yi="#";function ud(t,i,e,n,r,o,a=!1){let c="",d=!1;if(!isFinite(t))c=Ve(e,_e.Infinity);else{let l=hd(t);a&&(l=fd(l));let h=i.minInt,f=i.minFrac,v=i.maxFrac;if(o){let A=o.match(cd);if(A===null)throw new y(2306,!1);let te=A[1],S=A[3],Ce=A[5];te!=null&&(h=Xi(te)),S!=null&&(f=Xi(S)),Ce!=null?v=Xi(Ce):S!=null&&f>v&&(v=f);let Z=100;if(h>Z||f>Z||v>Z)throw new y(2306,!1)}pd(l,f,v);let _=l.digits,T=l.integerLen,B=l.exponent,b=[];for(d=_.every(A=>!A);T<h;T++)_.unshift(0);for(;T<0;T++)_.unshift(0);T>0?b=_.splice(T,_.length):(b=_,_=[0]);let x=[];for(_.length>=i.lgSize&&x.unshift(_.splice(-i.lgSize,_.length).join(""));_.length>i.gSize;)x.unshift(_.splice(-i.gSize,_.length).join(""));_.length&&x.unshift(_.join("")),c=x.join(Ve(e,n)),b.length&&(c+=Ve(e,r)+b.join("")),B&&(c+=Ve(e,_e.Exponential)+"+"+B)}return t<0&&!d?c=i.negPre+c+i.negSuf:c=i.posPre+c+i.posSuf,c}function Ca(t,i,e){let n=ba(i,Qi.Decimal),r=md(n,Ve(i,_e.MinusSign));return ud(t,r,i,_e.Group,_e.Decimal,e)}function md(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(dd),r=n[0],o=n[1],a=r.indexOf($n)!==-1?r.split($n):[r.substring(0,r.lastIndexOf(Yt)+1),r.substring(r.lastIndexOf(Yt)+1)],c=a[0],d=a[1]||"";e.posPre=c.substring(0,c.indexOf(Yi));for(let h=0;h<d.length;h++){let f=d.charAt(h);f===Yt?e.minFrac=e.maxFrac=h+1:f===Yi?e.maxFrac=h+1:e.posSuf+=f}let l=c.split(ld);if(e.gSize=l[1]?l[1].length:0,e.lgSize=l[2]||l[1]?(l[2]||l[1]).length:0,o){let h=r.length-e.posPre.length-e.posSuf.length,f=o.indexOf(Yi);e.negPre=o.substring(0,f).replace(/'/g,""),e.negSuf=o.slice(f+h).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function fd(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function hd(t){let i=Math.abs(t)+"",e=0,n,r,o,a,c;for((r=i.indexOf($n))>-1&&(i=i.replace($n,"")),(o=i.search(/e/i))>0?(r<0&&(r=o),r+=+i.slice(o+1),i=i.substring(0,o)):r<0&&(r=i.length),o=0;i.charAt(o)===Yt;o++);if(o===(c=i.length))n=[0],r=1;else{for(c--;i.charAt(c)===Yt;)c--;for(r-=o,n=[],a=0;o<=c;o++,a++)n[a]=Number(i.charAt(o))}return r>ca&&(n=n.splice(0,ca-1),e=r-1,r=1),{digits:n,exponent:e,integerLen:r}}function pd(t,i,e){if(i>e)throw new y(2307,!1);let n=t.digits,r=n.length-t.integerLen,o=Math.min(Math.max(i,r),e),a=o+t.integerLen,c=n[a];if(a>0){n.splice(Math.max(t.integerLen,a));for(let f=a;f<n.length;f++)n[f]=0}else{r=Math.max(0,r),t.integerLen=1,n.length=Math.max(1,a=o+1),n[0]=0;for(let f=1;f<a;f++)n[f]=0}if(c>=5)if(a-1<0){for(let f=0;f>a;f--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[a-1]++;for(;r<Math.max(0,o);r++)n.push(0);let d=o!==0,l=i+t.integerLen,h=n.reduceRight(function(f,v,_,T){return v=v+f,T[_]=v<10?v:v-10,d&&(T[_]===0&&_>=l?T.pop():d=!1),v>=10?1:0},0);h&&(n.unshift(h),t.integerLen++)}function Xi(t){let i=parseInt(t);if(isNaN(i))throw new y(2305,!1);return i}var Ji=/\s+/,da=[],gd=(()=>{class t{_ngEl;_renderer;initialClasses=da;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Ji):da}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Ji):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Ji).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||t)(p(k),p(ce))};static \u0275dir=g({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Gn=class{$implicit;ngForOf;index;count;constructor(i,e,n,r){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},wa=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,o,a)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new Gn(r.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)n.remove(o===null?void 0:o);else if(o!==null){let c=n.get(o);n.move(c,a),la(c,r)}});for(let r=0,o=n.length;r<o;r++){let c=n.get(r).context;c.index=r,c.count=o,c.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);la(o,r)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(p(Tn),p(zi),p(Xo))};static \u0275dir=g({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function la(t,i){t.context.$implicit=i.item}var bd=(()=>{class t{_viewContainer;_context=new Wn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ua(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ua(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(p(Tn),p(zi))};static \u0275dir=g({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Wn=class{$implicit=null;ngIf=null};function ua(t,i){if(t&&!t.createEmbeddedView)throw new y(2020,!1)}var Xt=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=s(oe);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(p(Tn))};static \u0275dir=g({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[fe]})}return t})();function er(t,i){return new y(2100,!1)}var _d=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g,vd=(()=>{class t{transform(e){return e==null?null:(yd(t,e),e.replace(_d,n=>n[0].toUpperCase()+n.slice(1).toLowerCase()))}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=Sn({name:"titlecase",type:t,pure:!0})}return t})();function yd(t,i){if(typeof i!="string")throw er(t,i)}var Dd="mediumDate",Aa=new m(""),Ma=new m(""),xd=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,r){this.locale=e,this.defaultTimezone=n,this.defaultOptions=r}transform(e,n,r,o){if(e==null||e===""||e!==e)return null;try{let a=n??this.defaultOptions?.dateFormat??Dd,c=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Da(e,a,o||this.locale,c)}catch(a){throw er(t,a.message)}}static \u0275fac=function(n){return new(n||t)(p(Gi,16),p(Aa,24),p(Ma,24))};static \u0275pipe=Sn({name:"date",type:t,pure:!0})}return t})();var Ed=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,r){if(!Cd(e))return null;r||=this._locale;try{let o=wd(e);return Ca(o,r,n)}catch(o){throw er(t,o.message)}}static \u0275fac=function(n){return new(n||t)(p(Gi,16))};static \u0275pipe=Sn({name:"number",type:t,pure:!0})}return t})();function Cd(t){return!(t==null||t===""||t!==t)}function wd(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new y(2309,!1);return t}var ka=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({})}return t})();function Jt(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var lt=class{};var nr="browser";function Ia(t){return t===nr}var Oh=(()=>{class t{static \u0275prov=u({token:t,providedIn:"root",factory:()=>new tr(s(M),window)})}return t})(),tr=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(ae(E({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=Md(this.document,i);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch(e){console.warn(_t(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(ae(E({},e),{left:r-a[0],top:o-a[1]}))}};function Md(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(a)return a}r=n.nextNode()}}return null}var Qt=class{_doc;constructor(i){this._doc=i}manager},Zn=(()=>{class t extends Qt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(D(M))};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})(),Yn=new m(""),ar=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Zn));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Zn);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new y(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(D(Yn),D(C))};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})(),ir="ng-app-id";function Ta(t){for(let i of t)i.remove()}function Sa(t,i){let e=i.createElement("style");return e.textContent=t,e}function kd(t,i,e,n){let r=t.head?.querySelectorAll(`style[${ir}="${i}"],link[${ir}="${i}"]`);if(r)for(let o of r)o.removeAttribute(ir),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function or(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var sr=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,kd(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Sa);n?.forEach(r=>this.addUsage(r,this.external,or))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(Ta(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Ta(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Sa(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,or(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(D(M),D(ot),D(Dt,8),D(yt))};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})(),rr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},cr=/%COMP%/g;var Oa="%COMP%",Fd=`_nghost-${Oa}`,Id=`_ngcontent-${Oa}`,Td=!0,Sd=new m("",{factory:()=>Td});function Rd(t){return Id.replace(cr,t)}function Od(t){return Fd.replace(cr,t)}function Na(t,i){return i.map(e=>e.replace(cr,t))}var dr=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,c,d=null,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=d,this.tracingService=l,this.defaultRenderer=new en(e,a,c,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof qn?r.applyToHost(e):r instanceof tn&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,c=this.ngZone,d=this.eventManager,l=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case kn.Emulated:o=new qn(d,l,n,this.appId,h,a,c,f);break;case kn.ShadowDom:return new Kn(d,e,n,a,c,this.nonce,f,l);case kn.ExperimentalIsolatedShadowDom:return new Kn(d,e,n,a,c,this.nonce,f);default:o=new tn(d,l,n,h,a,c,f);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(D(ar),D(sr),D(ot),D(Sd),D(M),D(C),D(Dt),D(Fn,8))};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})(),en=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(rr[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Ra(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(Ra(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new y(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=rr[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=rr[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(Et.DashCase|Et.Important)?i.style.setProperty(e,n,r&Et.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Et.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Ae().getGlobalEventTarget(this.doc,i),!i))throw new y(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Ra(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Kn=class extends en{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,a,c,d){super(i,r,o,c),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=n.styles;l=Na(n.id,l);for(let f of l){let v=document.createElement("style");a&&v.setAttribute("nonce",a),v.textContent=f,this.shadowRoot.appendChild(v)}let h=n.getExternalStyles?.();if(h)for(let f of h){let v=or(f,r);a&&v.setAttribute("nonce",a),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},tn=class extends en{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,a,c,d){super(i,o,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=n.styles;this.styles=d?Na(d,l):l,this.styleUrls=n.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Uo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},qn=class extends tn{contentAttr;hostAttr;constructor(i,e,n,r,o,a,c,d){let l=r+"-"+n.id;super(i,e,n,o,a,c,d,l),this.contentAttr=Rd(l),this.hostAttr=Od(l)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var Xn=class t extends Wt{supportsDOMEvents=!0;static makeCurrent(){Wi(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Ld();return e==null?null:Pd(e)}resetBaseElement(){nn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Jt(document.cookie,i)}},nn=null;function Ld(){return nn=nn||document.head.querySelector("base"),nn?nn.getAttribute("href"):null}function Pd(t){return new URL(t,document.baseURI).pathname}var Bd=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})(),La=["alt","control","meta","shift"],Vd={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},jd={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Pa=(()=>{class t extends Qt{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=t.parseEventName(n),c=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ae().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),a="code."),La.forEach(l=>{let h=n.indexOf(l);h>-1&&(n.splice(h,1),a+=l+".")}),a+=o,n.length!=0||o.length===0)return null;let d={};return d.domEventName=r,d.fullKey=a,d}static matchEventFullKeyCode(e,n){let r=Vd[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),La.forEach(a=>{if(a!==r){let c=jd[a];c(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(D(M))};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})();function Ud(t,i,e){return Dn(this,null,function*(){let n=E({rootComponent:t},zd(i,e));return Jo(n)})}function zd(t,i){return{platformRef:i?.platformRef,appProviders:[...Zd,...t?.providers??[]],platformProviders:Wd}}function Hd(){Xn.makeCurrent()}function $d(){return new Bi}function Gd(){return Io(document),document}var Wd=[{provide:yt,useValue:nr},{provide:To,useValue:Hd,multi:!0},{provide:M,useFactory:Gd}];var Zd=[{provide:ko,useValue:"root"},{provide:Bi,useFactory:$d},{provide:Yn,useClass:Zn,multi:!0},{provide:Yn,useClass:Pa,multi:!0},dr,sr,ar,{provide:Qe,useExisting:dr},{provide:lt,useClass:Bd},[]];var qe=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(c=>o.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Qn=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},ei=class{encodeKey(i){return Ba(i)}encodeValue(i){return Ba(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Kd(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,c]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],d=e.get(a)||[];d.push(c),e.set(a,d)}),e}var qd=/%(\d[a-f0-9])/gi,Yd={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ba(t){return encodeURIComponent(t).replace(qd,(i,e)=>Yd[e]??i)}function Jn(t){return`${t}`}var Ke=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new ei,i.fromString){if(i.fromObject)throw new y(2805,!1);this.map=Kd(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(Jn):[Jn(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Jn(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(Jn(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function Xd(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Va(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function ja(t){return typeof Blob<"u"&&t instanceof Blob}function Ua(t){return typeof FormData<"u"&&t instanceof FormData}function Jd(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var za="Content-Type",Ha="Accept",Ga="text/plain",Wa="application/json",Qd=`${Wa}, ${Ga}, */*`,Tt=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(Xd(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new y(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new qe,this.context??=new Qn,!this.params)this.params=new Ke,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),d=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+d+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Va(this.body)||ja(this.body)||Ua(this.body)||Jd(this.body)?this.body:this.body instanceof Ke?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ua(this.body)?null:ja(this.body)?this.body.type||null:Va(this.body)?null:typeof this.body=="string"?Ga:this.body instanceof Ke?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Wa:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,c=i.cache||this.cache,d=i.mode||this.mode,l=i.redirect||this.redirect,h=i.credentials||this.credentials,f=i.referrer??this.referrer,v=i.integrity||this.integrity,_=i.referrerPolicy||this.referrerPolicy,T=i.transferCache??this.transferCache,B=i.timeout??this.timeout,b=i.body!==void 0?i.body:this.body,x=i.withCredentials??this.withCredentials,A=i.reportProgress??this.reportProgress,te=i.headers||this.headers,S=i.params||this.params,Ce=i.context??this.context;return i.setHeaders!==void 0&&(te=Object.keys(i.setHeaders).reduce((Z,we)=>Z.set(we,i.setHeaders[we]),te)),i.setParams&&(S=Object.keys(i.setParams).reduce((Z,we)=>Z.set(we,i.setParams[we]),S)),new t(e,n,b,{params:S,headers:te,context:Ce,reportProgress:A,responseType:r,withCredentials:x,transferCache:T,keepalive:o,cache:c,priority:a,timeout:B,mode:d,redirect:l,credentials:h,referrer:f,integrity:v,referrerPolicy:_})}},ut=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(ut||{}),Rt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new qe,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},ti=class t extends Rt{constructor(i={}){super(i)}type=ut.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Ot=class t extends Rt{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=ut.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},St=class extends Rt{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},el=200,tl=204;var nl=new m("");var il=/^\)\]\}',?\n/;var ur=(()=>{class t{xhrFactory;tracingService=s(Fn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new y(-2800,!1);let n=this.xhrFactory;return rt(null).pipe(Ao(()=>new Xe(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((b,x)=>a.setRequestHeader(b,x.join(","))),e.headers.has(Ha)||a.setRequestHeader(Ha,Qd),!e.headers.has(za)){let b=e.detectContentTypeHeader();b!==null&&a.setRequestHeader(za,b)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let b=e.responseType.toLowerCase();a.responseType=b!=="json"?b:"text"}let c=e.serializeBody(),d=null,l=()=>{if(d!==null)return d;let b=a.statusText||"OK",x=new qe(a.getAllResponseHeaders()),A=a.responseURL||e.url;return d=new ti({headers:x,status:a.status,statusText:b,url:A}),d},h=this.maybePropagateTrace(()=>{let{headers:b,status:x,statusText:A,url:te}=l(),S=null;x!==tl&&(S=typeof a.response>"u"?a.responseText:a.response),x===0&&(x=S?el:0);let Ce=x>=200&&x<300;if(e.responseType==="json"&&typeof S=="string"){let Z=S;S=S.replace(il,"");try{S=S!==""?JSON.parse(S):null}catch(we){S=Z,Ce&&(Ce=!1,S={error:we,text:S})}}Ce?(o.next(new Ot({body:S,headers:b,status:x,statusText:A,url:te||void 0})),o.complete()):o.error(new St({error:S,headers:b,status:x,statusText:A,url:te||void 0}))}),f=this.maybePropagateTrace(b=>{let{url:x}=l(),A=new St({error:b,status:a.status||0,statusText:a.statusText||"Unknown Error",url:x||void 0});o.error(A)}),v=f;e.timeout&&(v=this.maybePropagateTrace(b=>{let{url:x}=l(),A=new St({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:x||void 0});o.error(A)}));let _=!1,T=this.maybePropagateTrace(b=>{_||(o.next(l()),_=!0);let x={type:ut.DownloadProgress,loaded:b.loaded};b.lengthComputable&&(x.total=b.total),e.responseType==="text"&&a.responseText&&(x.partialText=a.responseText),o.next(x)}),B=this.maybePropagateTrace(b=>{let x={type:ut.UploadProgress,loaded:b.loaded};b.lengthComputable&&(x.total=b.total),o.next(x)});return a.addEventListener("load",h),a.addEventListener("error",f),a.addEventListener("timeout",v),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",T),c!==null&&a.upload&&a.upload.addEventListener("progress",B)),a.send(c),o.next({type:ut.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",h),a.removeEventListener("timeout",v),e.reportProgress&&(a.removeEventListener("progress",T),c!==null&&a.upload&&a.upload.removeEventListener("progress",B)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(D(lt))};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Za(t,i){return i(t)}function rl(t,i){return(e,n)=>i.intercept(e,{handle:r=>t(r,n)})}function ol(t,i,e){return(n,r)=>Fo(e,()=>i(n,o=>t(o,r)))}var Ka=new m(""),mr=new m("",{factory:()=>[]}),fr=new m(""),hr=new m("",{factory:()=>!0});function al(){let t=null;return(i,e)=>{t===null&&(t=(s(Ka,{optional:!0})??[]).reduceRight(rl,Za));let n=s(Vi);if(s(hr)){let o=n.add();return t(i,e).pipe(Pi(o))}else return t(i,e)}}var pr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=D(ur),r},providedIn:"root"})}return t})();var ni=(()=>{class t{backend;injector;chain=null;pendingTasks=s(Vi);contributeToStability=s(hr);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(mr),...this.injector.get(fr,[])]));this.chain=n.reduceRight((r,o)=>ol(r,o,this.injector),Za)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Pi(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(D(pr),D(Ht))};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=D(ni),r},providedIn:"root"})}return t})();function lr(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var qa=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof Tt)o=e;else{let d;r.headers instanceof qe?d=r.headers:d=new qe(r.headers);let l;r.params&&(r.params instanceof Ke?l=r.params:l=new Ke({fromObject:r.params})),o=new Tt(e,n,r.body!==void 0?r.body:null,{headers:d,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=rt(o).pipe(Do(d=>this.handler.handle(d)));if(e instanceof Tt||r.observe==="events")return a;let c=a.pipe(Le(d=>d instanceof Ot));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(se(d=>{if(d.body!==null&&!(d.body instanceof ArrayBuffer))throw new y(2806,!1);return d.body}));case"blob":return c.pipe(se(d=>{if(d.body!==null&&!(d.body instanceof Blob))throw new y(2807,!1);return d.body}));case"text":return c.pipe(se(d=>{if(d.body!==null&&typeof d.body!="string")throw new y(2808,!1);return d.body}));default:return c.pipe(se(d=>d.body))}case"response":return c;default:throw new y(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Ke().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,lr(r,n))}post(e,n,r={}){return this.request("POST",e,lr(r,n))}put(e,n,r={}){return this.request("PUT",e,lr(r,n))}static \u0275fac=function(n){return new(n||t)(D(gr))};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sl=new m("",{factory:()=>!0}),cl="XSRF-TOKEN",dl=new m("",{factory:()=>cl}),ll="X-XSRF-TOKEN",ul=new m("",{factory:()=>ll}),ml=(()=>{class t{cookieName=s(dl);doc=s(M);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Jt(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ya=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=D(ml),r},providedIn:"root"})}return t})();function fl(t,i){if(!s(sl)||t.method==="GET"||t.method==="HEAD")return i(t);try{let r=s(et).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return i(t)}catch(r){return i(t)}let e=s(Ya).getToken(),n=s(ul);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}var br=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(br||{});function hl(t,i){return{\u0275kind:t,\u0275providers:i}}function Xa(...t){let i=[qa,ni,{provide:gr,useExisting:ni},{provide:pr,useFactory:()=>s(nl,{optional:!0})??s(ur)},{provide:mr,useValue:fl,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return wn(i)}var $a=new m("");function Ja(){return hl(br.LegacyInterceptors,[{provide:$a,useFactory:al},{provide:mr,useExisting:$a,multi:!0}])}var pl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({providers:[Xa(Ja())]})}return t})();var gl=new m(""),bl="b",_l="h",vl="s",yl="st",Dl="u",xl="rt",_r=new m(""),El=["GET","HEAD"];function ns(t,i){let a=i,{isCacheActive:e}=a,n=fo(a,["isCacheActive"]),{transferCache:r,method:o}=t;return!(!e||r===!1||Ml(t)||o==="POST"&&!n.includePostRequests&&!r||o!=="POST"&&!El.includes(o)||!n.includeRequestsWithAuthHeaders&&Al(t)||Fl(t.headers)||Il(t.cache)||n.filter?.(t)===!1)}function Cl(t,i,e,n,r,o=!1){if(!o&&!ns(t,i))return null;if(n)throw new y(2803,!1);if(!r){let B=t.url;r=is(t,B)}let a=e.get(r,null);if(!a)return null;let{[bl]:c,[xl]:d,[_l]:l,[vl]:h,[yl]:f,[Dl]:v}=a,_=c;switch(d){case"arraybuffer":_=es(c);break;case"blob":_=new Blob([es(c)]);break}let T=new qe(l);return new Ot({body:_,headers:T,status:h,statusText:f,url:v})}function wl(t,i){let e=s(_r);if(!ns(t,e))return i(t);let n=s(Ro),r=s(gl,{optional:!0}),o=t.url,a=is(t,o),c=Cl(t,e,n,null,a,!0);return c?rt(c):i(t)}function Al(t){let i=t.headers;return i.has("authorization")||i.has("proxy-authorization")||i.has("cookie")}function Ml(t){let{withCredentials:i,credentials:e}=t;return i||e==="include"||e==="same-origin"}var kl=new Set(["no-store","private","no-cache"]);function Fl(t){let i=t.get("cache-control");return i?i.split(",").some(e=>{let n=e.split("=",1)[0].trim().toLowerCase();return kl.has(n)}):!1}function Il(t){return t==="no-cache"||t==="no-store"}function Qa(t){return[...t.keys()].sort().map(i=>`${i}=${t.getAll(i)}`).join("&")}function is(t,i){let{params:e,method:n,responseType:r}=t,o=Qa(e),a=t.serializeBody();a instanceof URLSearchParams?a=Qa(a):typeof a!="string"&&(a="");let c=[n,r,i,a,o].join("|"),d=Sl(c);return d}function es(t){let i=atob(t);return Uint8Array.from(i,n=>n.charCodeAt(0)).buffer}function rs(t){return[{provide:_r,useFactory:()=>(Ui("NgHttpTransferCache"),E({isCacheActive:!0},t))},{provide:fr,useValue:wl,multi:!0},{provide:zo,multi:!0,useFactory:()=>{let i=s(st),e=s(_r);return()=>{i.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var Tl=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ts;function Sl(t){ts??=new TextEncoder;let i=ts.encode(t),e=1779033703,n=3144134277,r=1013904242,o=2773480762,a=1359893119,c=2600822924,d=528734635,l=1541459225,h=i.length*8,f=(i.length+8>>6)+1<<6,v=new Uint8Array(f);v.set(i),v[i.length]=128;let _=new DataView(v.buffer),T=h>>>0,B=h/4294967296>>>0;_.setUint32(f-8,B,!1),_.setUint32(f-4,T,!1);let b=new Uint32Array(64);for(let x=0;x<f;x+=64){for(let re=0;re<16;re++)b[re]=_.getUint32(x+re*4,!1);for(let re=16;re<64;re++){let it=b[re-15],Ni=((it>>>7|it<<25)^(it>>>18|it<<14)^it>>>3)>>>0,Ye=b[re-2],Li=((Ye>>>17|Ye<<15)^(Ye>>>19|Ye<<13)^Ye>>>10)>>>0;b[re]=b[re-16]+Ni+b[re-7]+Li>>>0}let A=e,te=n,S=r,Ce=o,Z=a,we=c,yn=d,Oi=l;for(let re=0;re<64;re++){let it=((Z>>>6|Z<<26)^(Z>>>11|Z<<21)^(Z>>>25|Z<<7))>>>0,Ni=(Z&we^~Z&yn)>>>0,Ye=Oi+it+Ni+Tl[re]+b[re]>>>0,Li=((A>>>2|A<<30)^(A>>>13|A<<19)^(A>>>22|A<<10))>>>0,Uc=(A&te^A&S^te&S)>>>0,zc=Li+Uc>>>0;Oi=yn,yn=we,we=Z,Z=Ce+Ye>>>0,Ce=S,S=te,te=A,A=Ye+zc>>>0}e=e+A>>>0,n=n+te>>>0,r=r+S>>>0,o=o+Ce>>>0,a=a+Z>>>0,c=c+we>>>0,d=d+yn>>>0,l=l+Oi>>>0}return[e,n,r,o,a,c,d,l].map(x=>x.toString(16).padStart(8,"0")).join("")}var pg=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(D(M))};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=D(Rl),r},providedIn:"root"})}return t})(),Rl=(()=>{class t extends yr{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case He.NONE:return n;case He.HTML:return xt(n,"HTML")?at(n):jo(this._doc,String(n)).toString();case He.STYLE:return xt(n,"Style")?at(n):n;case He.SCRIPT:if(xt(n,"Script"))return at(n);throw new y(5200,!1);case He.URL:return xt(n,"URL")?at(n):Vo(String(n));case He.RESOURCE_URL:if(xt(n,"ResourceURL"))return at(n);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(e){return Oo(e)}bypassSecurityTrustStyle(e){return No(e)}bypassSecurityTrustScript(e){return Lo(e)}bypassSecurityTrustUrl(e){return Po(e)}bypassSecurityTrustResourceUrl(e){return Bo(e)}static \u0275fac=function(n){return new(n||t)(D(M))};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vr=(function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t[t.I18nSupport=2]="I18nSupport",t[t.EventReplay=3]="EventReplay",t[t.IncrementalHydration=4]="IncrementalHydration",t})(vr||{});function gg(...t){let i=[],e=new Set;for(let{\u0275providers:r,\u0275kind:o}of t)e.add(o),r.length&&i.push(r);let n=e.has(vr.HttpTransferCacheOptions);return wn([[],[],Yo(),e.has(vr.NoHttpTransferCache)||n?[]:rs({}),i])}function rn(t){return t.buttons===0||t.detail===0}function on(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Dr;function os(){if(Dr==null){let t=typeof document<"u"?document.head:null;Dr=!!(t&&(t.createShadowRoot||t.attachShadow))}return Dr}function xr(t){if(os()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Er(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function Ne(t){return t.composedPath?t.composedPath()[0]:t.target}var Cr;try{Cr=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){Cr=!1}var W=(()=>{class t{_platformId=s(yt);isBrowser=this._platformId?Ia(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Cr)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var an;function as(){if(an==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>an=!0}))}finally{an=an||!1}return an}function Nt(t){return as()?t:!!t.capture}function ii(t,i=0){return ss(t)?Number(t):arguments.length===2?i:0}function ss(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function xe(t){return t instanceof k?t.nativeElement:t}var cs=new m("cdk-input-modality-detector-options"),ds={ignoreKeys:[18,17,224,91,16]},ls=650,wr={passive:!0,capture:!0},us=(()=>{class t{_platform=s(W);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ho(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ne(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ls||(this._modality.next(rn(e)?"keyboard":"mouse"),this._mostRecentTarget=Ne(e))};_onTouchstart=e=>{if(on(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ne(e)};constructor(){let e=s(C),n=s(M),r=s(cs,{optional:!0});if(this._options=E(E({},ds),r),this.modalityDetected=this._modality.pipe(En(1)),this.modalityChanged=this.modalityDetected.pipe(Eo()),this._platform.isBrowser){let o=s(Qe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,wr),o.listen(n,"mousedown",this._onMousedown,wr),o.listen(n,"touchstart",this._onTouchstart,wr)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sn=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(sn||{}),ms=new m("cdk-focus-monitor-default-options"),ri=Nt({passive:!0,capture:!0}),oi=(()=>{class t{_ngZone=s(C);_platform=s(W);_inputModalityDetector=s(us);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(M);_stopInputModalityDetector=new V;constructor(){let e=s(ms,{optional:!0});this._detectionMode=e?.detectionMode||sn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Ne(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=xe(e);if(!this._platform.isBrowser||r.nodeType!==1)return rt();let o=xr(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let c={checkChildren:n,subject:new V,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let n=xe(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=xe(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,d])=>this._originChanged(c,n,d)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===sn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===sn.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?ls:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=Ne(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,ri),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,ri)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Je(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ri),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ri),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ol=(()=>{class t{_elementRef=s(k);_focusMonitor=s(oi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new K;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var ai=new WeakMap,Ee=(()=>{class t{_appRef;_injector=s(oe);_environmentInjector=s(Ht);load(e){let n=this._appRef=this._appRef||this._injector.get(st),r=ai.get(n);r||(r={loaders:new Set,refs:[]},ai.set(n,r),n.onDestroy(()=>{ai.get(n)?.refs.forEach(o=>o.destroy()),ai.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(ea(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ci=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),si;function Nl(){if(si===void 0&&(si=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(si=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return si}function Ll(t){return Nl()?.createHTML(t)||t}function fs(t,i,e){let n=e.sanitize(He.HTML,i);t.innerHTML=Ll(n||"")}function Ar(t){return Array.isArray(t)?t:[t]}var hs=new Set,mt,di=(()=>{class t{_platform=s(W);_nonce=s(Dt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Bl}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Pl(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Pl(t,i){if(!hs.has(t))try{mt||(mt=document.createElement("style"),i&&mt.setAttribute("nonce",i),mt.setAttribute("type","text/css"),document.head.appendChild(mt)),mt.sheet&&(mt.sheet.insertRule(`@media ${t} {body{ }}`,0),hs.add(t))}catch(e){console.error(e)}}function Bl(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Mr=(()=>{class t{_mediaMatcher=s(di);_zone=s(C);_queries=new Map;_destroySubject=new V;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return ps(Ar(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=ps(Ar(e)).map(a=>this._registerQuery(a).observable),o=bo(r);return o=_o(o.pipe(xo(1)),o.pipe(En(1),bt(0))),o.pipe(se(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:l})=>{c.matches=c.matches||d,c.breakpoints[l]=d}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new Xe(a=>{let c=d=>this._zone.run(()=>a.next(d));return n.addListener(c),()=>{n.removeListener(c)}}).pipe(Cn(n),se(({matches:a})=>({query:e,matches:a})),Je(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ps(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function Vl(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var gs=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bs=(()=>{class t{_mutationObserverFactory=s(gs);_observedElements=new Map;_ngZone=s(C);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=xe(e);return new Xe(r=>{let a=this._observeElement(n).pipe(se(c=>c.filter(d=>!Vl(d))),Le(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{r.next(c)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new V,r=this._mutationObserverFactory.create(o=>n.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:r}=this._observedElements.get(e);n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_b=(()=>{class t{_contentObserver=s(bs);_elementRef=s(k);event=new K;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=ii(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(bt(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",G],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),li=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({providers:[gs]})}return t})();var Ds=(()=>{class t{_platform=s(W);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Ul(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=jl(ql(e));if(n&&(_s(n)===-1||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),o=_s(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Zl(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return Kl(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jl(t){try{return t.frameElement}catch(i){return null}}function Ul(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function zl(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Hl(t){return Gl(t)&&t.type=="hidden"}function $l(t){return Wl(t)&&t.hasAttribute("href")}function Gl(t){return t.nodeName.toLowerCase()=="input"}function Wl(t){return t.nodeName.toLowerCase()=="a"}function xs(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function _s(t){if(!xs(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Zl(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function Kl(t){return Hl(t)?!1:zl(t)||$l(t)||t.hasAttribute("contenteditable")||xs(t)}function ql(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var ui=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=n,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?In(i,{injector:this._injector}):setTimeout(i)}},Es=(()=>{class t{_checker=s(Ds);_ngZone=s(C);_document=s(M);_injector=s(oe);constructor(){s(Ee).load(ci)}create(e,n=!1){return new ui(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yl=(()=>{class t{_elementRef=s(k);_focusTrapFactory=s(Es);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){s(W).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Er(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",G],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",G]},exportAs:["cdkTrapFocus"],features:[fe]})}return t})(),Cs=new m("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),ws=new m("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Xl=0,Jl=(()=>{class t{_ngZone=s(C);_defaultOptions=s(ws,{optional:!0});_liveElement;_document=s(M);_sanitizer=s(yr);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Cs,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let r=this._defaultOptions,o,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:fs(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${Xl++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tt=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(tt||{}),vs="cdk-high-contrast-black-on-white",ys="cdk-high-contrast-white-on-black",kr="cdk-high-contrast-active",As=(()=>{class t{_platform=s(W);_hasCheckedHighContrastMode=!1;_document=s(M);_breakpointSubscription;constructor(){this._breakpointSubscription=s(Mr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return tt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return tt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return tt.BLACK_ON_WHITE}return tt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(kr,vs,ys),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===tt.BLACK_ON_WHITE?e.add(kr,vs):n===tt.WHITE_ON_BLACK&&e.add(kr,ys)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ql=(()=>{class t{constructor(){s(As)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[li]})}return t})();function Ms(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var eu=200,mi=class{_letterKeyStream=new V;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new V;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:eu;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Mo(e=>this._pressedLetters.push(e)),bt(i),Le(()=>this._pressedLetters.length>0),se(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let r=(this._selectedItemIndex+n)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};var Lt=class{_items;_activeItemIndex=ie(-1);_activeItem=ie(null);_wrap=!1;_typeaheadSubscription=xn.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof ji?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):wt(i)&&(this._effectRef=vt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new V;change=new V;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new mi(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Ms(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i=="number"?i:e.indexOf(i),r=e[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let r=(this._activeItemIndex()+i*n+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return wt(this._items)?this._items():this._items instanceof ji?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Fr=class extends Lt{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Ir=class extends Lt{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Tr={},je=class t{_appId=s(ot);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Tr.hasOwnProperty(i)||(Tr[i]=0),`${i}${e?t._infix+"-":""}${Tr[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})};var Fs=" ";function tu(t,i,e){let n=hi(t,i);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(Fs)))}function nu(t,i,e){let n=hi(t,i);e=e.trim();let r=n.filter(o=>o!==e);r.length?t.setAttribute(i,r.join(Fs)):t.removeAttribute(i)}function hi(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var Is="cdk-describedby-message",fi="cdk-describedby-host",Rr=0,g_=(()=>{class t{_platform=s(W);_document=s(M);_messageRegistry=new Map;_messagesContainer=null;_id=`${Rr++}`;constructor(){s(Ee).load(ci),this._id=s(ot)+"-"+Rr++}describe(e,n,r){if(!this._canBeDescribed(e,n))return;let o=Sr(n,r);typeof n!="string"?(ks(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,r){if(!n||!this._isElementNode(e))return;let o=Sr(n,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${fi}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(fi);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let r=this._document.createElement("div");ks(r,this._id),r.textContent=e,n&&r.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Sr(e,n),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let n=hi(e,"aria-describedby").filter(r=>r.indexOf(Is)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let r=this._messageRegistry.get(n);tu(e,"aria-describedby",r.messageElement.id),e.setAttribute(fi,this._id),r.referenceCount++}_removeMessageReference(e,n){let r=this._messageRegistry.get(n);r.referenceCount--,nu(e,"aria-describedby",r.messageElement.id),e.removeAttribute(fi)}_isElementDescribedByMessage(e,n){let r=hi(e,"aria-describedby"),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let r=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Sr(t,i){return typeof t=="string"?`${i||""}/${t}`:t}function ks(t,i){t.id||(t.id=`${Is}-${i}-${Rr++}`)}var Vs=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(p(ce),p(k))};static \u0275dir=g({type:t})}return t})(),ft=(()=>{class t extends Vs{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Te(t)))(r||t)}})();static \u0275dir=g({type:t,features:[z]})}return t})(),Fe=new m(""),iu={provide:Fe,useExisting:ne(()=>ru),multi:!0},ru=(()=>{class t extends ft{writeValue(e){this.setProperty("checked",e)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Te(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,r){n&1&&ee("change",function(a){return r.onChange(a.target.checked)})("blur",function(){return r.onTouched()})},standalone:!1,features:[$([iu]),z]})}return t})(),ou={provide:Fe,useExisting:ne(()=>js),multi:!0};function au(){let t=Ae()?Ae().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var su=new m(""),js=(()=>{class t extends Vs{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!au())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(p(ce),p(k),p(su,8))};static \u0275dir=g({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&ee("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[$([ou]),z]})}return t})();function Pr(t){return t==null||Br(t)===0}function Br(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ue=new m(""),ht=new m(""),cu=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,gi=class{static min(i){return du(i)}static max(i){return lu(i)}static required(i){return uu(i)}static requiredTrue(i){return mu(i)}static email(i){return fu(i)}static minLength(i){return hu(i)}static maxLength(i){return Us(i)}static pattern(i){return pu(i)}static nullValidator(i){return bi()}static compose(i){return Zs(i)}static composeAsync(i){return Ks(i)}};function du(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function lu(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function uu(t){return Pr(t.value)?{required:!0}:null}function mu(t){return t.value===!0?null:{required:!0}}function fu(t){return Pr(t.value)||cu.test(t.value)?null:{email:!0}}function hu(t){return i=>{let e=i.value?.length??Br(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Us(t){return i=>{let e=i.value?.length??Br(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function pu(t){if(!t)return bi;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(Pr(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function bi(t){return null}function zs(t){return t!=null}function Hs(t){return Hi(t)?go(t):t}function $s(t){let i={};return t.forEach(e=>{i=e!=null?E(E({},i),e):i}),Object.keys(i).length===0?null:i}function Gs(t,i){return i.map(e=>e(t))}function gu(t){return!t.validate}function Ws(t){return t.map(i=>gu(i)?i:e=>i.validate(e))}function Zs(t){if(!t)return null;let i=t.filter(zs);return i.length==0?null:function(e){return $s(Gs(e,i))}}function Vr(t){return t!=null?Zs(Ws(t)):null}function Ks(t){if(!t)return null;let i=t.filter(zs);return i.length==0?null:function(e){let n=Gs(e,i).map(Hs);return vo(n).pipe(se($s))}}function jr(t){return t!=null?Ks(Ws(t)):null}function Ts(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function qs(t){return t._rawValidators}function Ys(t){return t._rawAsyncValidators}function Or(t){return t?Array.isArray(t)?t:[t]:[]}function _i(t,i){return Array.isArray(t)?t.includes(i):t===i}function Ss(t,i){let e=Or(i);return Or(t).forEach(r=>{_i(e,r)||e.push(r)}),e}function Rs(t,i){return Or(i).filter(e=>!_i(t,e))}var vi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Vr(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=jr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},me=class extends vi{name;get formDirective(){return null}get path(){return null}},ke=class extends vi{_parent=null;name=null;valueAccessor=null},yi=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var V_=(()=>{class t extends yi{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(p(ke,2))};static \u0275dir=g({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&P("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[z]})}return t})(),j_=(()=>{class t extends yi{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(p(me,10))};static \u0275dir=g({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&P("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[z]})}return t})();var cn="VALID",pi="INVALID",Pt="PENDING",dn="DISABLED",nt=class{},Di=class extends nt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},un=class extends nt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},mn=class extends nt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Bt=class extends nt{status;source;constructor(i,e){super(),this.status=i,this.source=e}},xi=class extends nt{source;constructor(i){super(),this.source=i}},hn=class extends nt{source;constructor(i){super(),this.source=i}};function Ur(t){return(Ai(t)?t.validators:t)||null}function bu(t){return Array.isArray(t)?Vr(t):t||null}function zr(t,i){return(Ai(i)?i.asyncValidators:t)||null}function _u(t){return Array.isArray(t)?jr(t):t||null}function Ai(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Xs(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new y(1e3,"");if(!n[e])throw new y(1001,"")}function Js(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new y(-1002,"")})}var Vt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Be(this.statusReactive)}set status(i){Be(()=>this.statusReactive.set(i))}_status=Se(()=>this.statusReactive());statusReactive=ie(void 0);get valid(){return this.status===cn}get invalid(){return this.status===pi}get pending(){return this.status===Pt}get disabled(){return this.status===dn}get enabled(){return this.status!==dn}errors;get pristine(){return Be(this.pristineReactive)}set pristine(i){Be(()=>this.pristineReactive.set(i))}_pristine=Se(()=>this.pristineReactive());pristineReactive=ie(!0);get dirty(){return!this.pristine}get touched(){return Be(this.touchedReactive)}set touched(i){Be(()=>this.touchedReactive.set(i))}_touched=Se(()=>this.touchedReactive());touchedReactive=ie(!1);get untouched(){return!this.touched}_events=new V;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Ss(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Ss(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Rs(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Rs(i,this._rawAsyncValidators))}hasValidator(i){return _i(this._rawValidators,i)}hasAsyncValidator(i){return _i(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(ae(E({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new mn(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new mn(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(ae(E({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new un(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new un(!0,n))}markAsPending(i={}){this.status=Pt;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Bt(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(ae(E({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=dn,this.errors=null,this._forEachChild(r=>{r.disable(ae(E({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Di(this.value,n)),this._events.next(new Bt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ae(E({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=cn,this._forEachChild(n=>{n.enable(ae(E({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ae(E({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===cn||this.status===Pt)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Di(this.value,e)),this._events.next(new Bt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(ae(E({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?dn:cn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Pt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=Hs(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Bt(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?dn:this.errors?pi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Pt)?Pt:this._anyControlsHaveStatus(pi)?pi:cn}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new un(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new mn(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Ai(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=bu(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=_u(this._rawAsyncValidators)}},jt=class extends Vt{constructor(i,e,n){super(Ur(e),zr(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Js(this,!0,i),Object.keys(i).forEach(n=>{Xs(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,ae(E({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new hn(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Nr=class extends jt{};var pt=new m("",{factory:()=>gn}),gn="always";function Mi(t,i){return[...i.path,t]}function pn(t,i,e=gn){Hr(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),yu(t,i),xu(t,i),Du(t,i),vu(t,i)}function Ei(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),wi(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Ci(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function vu(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Hr(t,i){let e=qs(t);i.validator!==null?t.setValidators(Ts(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Ys(t);i.asyncValidator!==null?t.setAsyncValidators(Ts(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ci(i._rawValidators,r),Ci(i._rawAsyncValidators,r)}function wi(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=qs(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=Ys(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Ci(i._rawValidators,n),Ci(i._rawAsyncValidators,n),e}function yu(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Qs(t,i)})}function Du(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Qs(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Qs(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function xu(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function ec(t,i){t==null,Hr(t,i)}function Eu(t,i){return wi(t,i)}function $r(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Cu(t){return Object.getPrototypeOf(t.constructor)===ft}function tc(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Gr(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(o=>{o.constructor===js?e=o:Cu(o)?n=o:r=o}),r||n||e||null}function wu(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var Au={provide:me,useExisting:ne(()=>Wr)},ln=Promise.resolve(),Wr=(()=>{class t extends me{callSetDisabledState;get submitted(){return Be(this.submittedReactive)}_submitted=Se(()=>this.submittedReactive());submittedReactive=ie(!1);_directives=new Set;form;ngSubmit=new K;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new jt({},Vr(e),jr(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ln.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),pn(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ln.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ln.then(()=>{let n=this._findContainer(e.path),r=new jt({});ec(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ln.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){ln.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),tc(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new xi(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(p(Ue,10),p(ht,10),p(pt,8))};static \u0275dir=g({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&ee("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[$([Au]),z]})}return t})();function Os(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Ns(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var fn=class extends Vt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(Ur(e),zr(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ai(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ns(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new hn(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Os(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Os(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Ns(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Mu=t=>t instanceof fn,ku=(()=>{class t extends me{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective?.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Mi(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Te(t)))(r||t)}})();static \u0275dir=g({type:t,standalone:!1,features:[z]})}return t})();var Fu={provide:ke,useExisting:ne(()=>Iu)},Ls=Promise.resolve(),Iu=(()=>{class t extends ke{_changeDetectorRef;callSetDisabledState;control=new fn;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new K;constructor(e,n,r,o,a,c){super(),this._changeDetectorRef=a,this.callSetDisabledState=c,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Gr(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),$r(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){pn(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ls.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&G(n);Ls.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Mi(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(p(me,9),p(Ue,10),p(ht,10),p(Fe,10),p(Ge,8),p(pt,8))};static \u0275dir=g({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[$([Fu]),z,fe]})}return t})();var z_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),Tu={provide:Fe,useExisting:ne(()=>Su),multi:!0},Su=(()=>{class t extends ft{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Te(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,r){n&1&&ee("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[$([Tu]),z]})}return t})(),Ru={provide:Fe,useExisting:ne(()=>Nu),multi:!0};var Ou=(()=>{class t{_accessors=[];add(e,n){this._accessors.push([e,n])}remove(e){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===e){this._accessors.splice(n,1);return}}select(e){this._accessors.forEach(n=>{this._isSameGroup(n,e)&&n[1]!==e&&n[1].fireUncheck(e.value)})}_isSameGroup(e,n){return e[0].control?e[0]._parent===n._control._parent&&e[1].name===n.name:!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Nu=(()=>{class t extends ft{_registry;_injector;_state;_control;_fn;setDisabledStateFired=!1;onChange=()=>{};name;formControlName;value;callSetDisabledState=s(pt,{optional:!0})??gn;constructor(e,n,r,o){super(e,n),this._registry=r,this._injector=o}ngOnInit(){this._control=this._injector.get(ke),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}setDisabledState(e){(this.setDisabledStateFired||e||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",e),this.setDisabledStateFired=!0}fireUncheck(e){this.writeValue(e)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static \u0275fac=function(n){return new(n||t)(p(ce),p(k),p(Ou),p(oe))};static \u0275dir=g({type:t,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(n,r){n&1&&ee("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},standalone:!1,features:[$([Ru]),z]})}return t})(),Lu={provide:Fe,useExisting:ne(()=>Pu),multi:!0},Pu=(()=>{class t extends ft{writeValue(e){this.setProperty("value",parseFloat(e))}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Te(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(n,r){n&1&&ee("change",function(a){return r.onChange(a.target.value)})("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[$([Lu]),z]})}return t})(),Lr=class extends Vt{constructor(i,e,n){super(Ur(e),zr(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Js(this,!1,i),i.forEach((n,r)=>{Xs(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],ae(E({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new hn(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var nc=(()=>{class t extends me{callSetDisabledState;get submitted(){return Be(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Se(()=>this._submittedReactive());_submittedReactive=ie(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(wi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return pn(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Ei(e.control||null,e,!1),wu(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,tc(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new xi(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(Ei(n||null,e),Mu(r)&&(pn(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);ec(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&Eu(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Hr(this.form,this),this._oldForm&&wi(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(p(Ue,10),p(ht,10),p(pt,8))};static \u0275dir=g({type:t,features:[z,fe]})}return t})();var Zr=new m(""),Bu={provide:ke,useExisting:ne(()=>Vu)},Vu=(()=>{class t extends ke{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new K;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=Gr(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let n=e.form.previousValue;n&&Ei(n,this,!1),pn(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}$r(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ei(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(n){return new(n||t)(p(Ue,10),p(ht,10),p(Fe,10),p(Zr,8),p(pt,8))};static \u0275dir=g({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[$([Bu]),z,fe]})}return t})(),ju={provide:me,useExisting:ne(()=>ic)},ic=(()=>{class t extends ku{name=null;constructor(e,n,r){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}_checkParentType(){oc(this._parent)}static \u0275fac=function(n){return new(n||t)(p(me,13),p(Ue,10),p(ht,10))};static \u0275dir=g({type:t,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[$([ju]),z]})}return t})(),Uu={provide:me,useExisting:ne(()=>rc)},rc=(()=>{class t extends me{_parent;name=null;constructor(e,n,r){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}ngOnInit(){oc(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Mi(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(n){return new(n||t)(p(me,13),p(Ue,10),p(ht,10))};static \u0275dir=g({type:t,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[$([Uu]),z]})}return t})();function oc(t){return!(t instanceof ic)&&!(t instanceof nc)&&!(t instanceof rc)}var zu={provide:ke,useExisting:ne(()=>Hu)},Hu=(()=>{class t extends ke{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new K;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Gr(this,o)}ngOnChanges(e){this._added||this._setUpControl(),$r(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Mi(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(p(me,13),p(Ue,10),p(ht,10),p(Fe,10),p(Zr,8))};static \u0275dir=g({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[$([zu]),z,fe]})}return t})();var $u={provide:me,useExisting:ne(()=>Kr)},Kr=(()=>{class t extends nc{form=null;ngSubmit=new K;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Te(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&ee("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[$([$u]),z]})}return t})(),Gu={provide:Fe,useExisting:ne(()=>sc),multi:!0};function ac(t,i){return t==null?`${i}`:(i&&typeof i=="object"&&(i="Object"),`${t}: ${i}`.slice(0,50))}function Wu(t){return t.split(":")[0]}var sc=(()=>{class t extends ft{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;appRefInjector=s(st).injector;destroyRef=s(Mn);cdr=s(Ge);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,In({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(e){this.cdr.markForCheck(),this.value=e;let n=this._getOptionId(e),r=ac(n,e);this.setProperty("value",r)}registerOnChange(e){this.onChange=n=>{this.value=this._getOptionValue(n),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),e))return n;return null}_getOptionValue(e){let n=Wu(e);return this._optionMap.has(n)?this._optionMap.get(n):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Te(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){n&1&&ee("change",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[$([Gu]),z]})}return t})(),H_=(()=>{class t{_element;_renderer;_select;id;constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(ac(this.id,e)),this._select._writeValueAfterRender())}set value(e){this._setElementValue(e),this._select?._writeValueAfterRender()}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static \u0275fac=function(n){return new(n||t)(p(k),p(ce),p(sc,9))};static \u0275dir=g({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})(),Zu={provide:Fe,useExisting:ne(()=>cc),multi:!0};function Ps(t,i){return t==null?`${i}`:(typeof i=="string"&&(i=`'${i}'`),i&&typeof i=="object"&&(i="Object"),`${t}: ${i}`.slice(0,50))}function Ku(t){return t.split(":")[0]}var cc=(()=>{class t extends ft{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let n;if(Array.isArray(e)){let r=e.map(o=>this._getOptionId(o));n=(o,a)=>{o._setSelected(r.indexOf(a)>-1)}}else n=r=>{r._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(e){this.onChange=n=>{let r=[],o=n.selectedOptions;if(o!==void 0){let a=o;for(let c=0;c<a.length;c++){let d=a[c],l=this._getOptionValue(d.value);r.push(l)}}else{let a=n.options;for(let c=0;c<a.length;c++){let d=a[c];if(d.selected){let l=this._getOptionValue(d.value);r.push(l)}}}this.value=r,e(r)}}_registerOption(e){let n=(this._idCounter++).toString();return this._optionMap.set(n,e),n}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,e))return n;return null}_getOptionValue(e){let n=Ku(e);return this._optionMap.has(n)?this._optionMap.get(n)._value:e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Te(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){n&1&&ee("change",function(a){return r.onChange(a.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[$([Zu]),z]})}return t})(),$_=(()=>{class t{_element;_renderer;_select;id;_value;constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Ps(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Ps(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(n){return new(n||t)(p(k),p(ce),p(cc,9))};static \u0275dir=g({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})();function qu(t){return typeof t=="number"?t:parseInt(t,10)}var Yu=(()=>{class t{_validator=bi;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):bi,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,features:[fe]})}return t})();var Xu={provide:Ue,useExisting:ne(()=>Ju),multi:!0},Ju=(()=>{class t extends Yu{maxlength;inputName="maxlength";normalizeInput=e=>qu(e);createValidator=e=>Us(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Te(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&q("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[$([Xu]),z]})}return t})();var dc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({})}return t})();function Bs(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var G_=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return Bs(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new jt(r,o)}record(e,n=null){let r=this._reduceControls(e);return new Nr(r,n)}control(e,n,r){let o={};return this.useNonNullable?(Bs(n)?o=n:(o.validators=n,o.asyncValidators=r),new fn(e,ae(E({},o),{nonNullable:!0}))):new fn(e,n,r)}array(e,n,r){let o=e.map(a=>this._createControl(a));return new Lr(o,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof fn)return e;if(e instanceof Vt)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var W_=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:pt,useValue:e.callSetDisabledState??gn}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[dc]})}return t})(),Z_=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Zr,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:pt,useValue:e.callSetDisabledState??gn}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[dc]})}return t})();var Qu=new m("cdk-dir-doc",{providedIn:"root",factory:()=>s(M)}),em=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qr(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?em.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var ki=(()=>{class t{get value(){return this.valueSignal()}valueSignal=ie("ltr");change=new K;constructor(){let e=s(Qu,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(qr(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ov=(()=>{class t{_isInitialized=!1;_rawDir="";change=new K;get dir(){return this.valueSignal()}set dir(e){let n=this.valueSignal();this.valueSignal.set(qr(e)),this._rawDir=e,n!==this.valueSignal()&&this._isInitialized&&this.change.emit(this.valueSignal())}get value(){return this.dir}valueSignal=ie("ltr");ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["","dir",""]],hostVars:1,hostBindings:function(n,r){n&2&&q("dir",r._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[$([{provide:ki,useExisting:t}])]})}return t})(),ve=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({})}return t})();function sv(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Ut(t){return t!=null&&`${t}`!="false"}var bn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(bn||{}),Fi,gt;function uv(){if(gt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return gt=!1,gt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)gt=!0;else{let t=Element.prototype.scrollTo;t?gt=!/\{\s*\[native code\]\s*\}/.test(t.toString()):gt=!1}}return gt}function mv(){if(typeof document!="object"||!document)return bn.NORMAL;if(Fi==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),Fi=bn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Fi=t.scrollLeft===0?bn.NEGATED:bn.INVERTED),t.remove()}return Fi}function hv(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var zt,lc=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Yr(){if(zt)return zt;if(typeof document!="object"||!document)return zt=new Set(lc),zt;let t=document.createElement("input");return zt=new Set(lc.filter(i=>(t.setAttribute("type",i),t.type===i))),zt}var Xr=class{_box;_destroyed=new V;_resizeSubject=new V;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Xe(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Le(e=>e.some(n=>n.target===i)),wo({bufferSize:1,refCount:!0}),Je(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},uc=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=s(C);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Xr(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Av={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var tm=new m("MATERIAL_ANIMATIONS"),mc=null;function Jr(){return s(tm,{optional:!0})?.animationsDisabled||s(So,{optional:!0})==="NoopAnimations"?"di-disabled":(mc??=s(di).matchMedia("(prefers-reduced-motion)").matches,mc?"reduced-motion":"enabled")}function ze(){return Jr()!=="enabled"}var nm=["notch"],im=["matFormFieldNotchedOutline",""],rm=["*"],fc=["iconPrefixContainer"],hc=["textPrefixContainer"],pc=["iconSuffixContainer"],gc=["textSuffixContainer"],om=["textField"],am=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],sm=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function cm(t,i){t&1&&ye(0,"span",21)}function dm(t,i){if(t&1&&(R(0,"label",20),j(1,1),he(2,cm,1,0,"span",21),L()),t&2){let e=Pe(2);ue("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),q("for",e._control.disableAutomaticLabeling?null:e._control.id),N(2),pe(!e.hideRequiredMarker&&e._control.required?2:-1)}}function lm(t,i){if(t&1&&he(0,dm,3,5,"label",20),t&2){let e=Pe();pe(e._hasFloatingLabel()?0:-1)}}function um(t,i){t&1&&ye(0,"div",7)}function mm(t,i){}function fm(t,i){if(t&1&&Ct(0,mm,0,0,"ng-template",13),t&2){Pe(2);let e=dt(1);ue("ngTemplateOutlet",e)}}function hm(t,i){if(t&1&&(R(0,"div",9),he(1,fm,1,1,null,13),L()),t&2){let e=Pe();ue("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),N(),pe(e._forceDisplayInfixLabel()?-1:1)}}function pm(t,i){t&1&&(R(0,"div",10,2),j(2,2),L())}function gm(t,i){t&1&&(R(0,"div",11,3),j(2,3),L())}function bm(t,i){}function _m(t,i){if(t&1&&Ct(0,bm,0,0,"ng-template",13),t&2){Pe();let e=dt(1);ue("ngTemplateOutlet",e)}}function vm(t,i){t&1&&(R(0,"div",14,4),j(2,4),L())}function ym(t,i){t&1&&(R(0,"div",15,5),j(2,5),L())}function Dm(t,i){t&1&&ye(0,"div",16)}function xm(t,i){t&1&&(R(0,"div",18),j(1,6),L())}function Em(t,i){if(t&1&&(R(0,"mat-hint",22),Wo(1),L()),t&2){let e=Pe(2);ue("id",e._hintLabelId),N(),Zo(e.hintLabel)}}function Cm(t,i){if(t&1&&(R(0,"div",19),he(1,Em,2,2,"mat-hint",22),j(2,7),ye(3,"div",23),j(4,8),L()),t&2){let e=Pe();N(),pe(e.hintLabel?1:-1)}}var Qr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["mat-label"]]})}return t})(),wm=new m("MatError");var eo=(()=>{class t{align="start";id=s(je).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(kt("id",r.id),q("align",null),P("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Am=new m("MatPrefix");var Mm=new m("MatSuffix");var Ec=new m("FloatingLabelParent"),bc=(()=>{class t{_elementRef=s(k);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(uc);_ngZone=s(C);_parent=s(Ec);_resizeSubscription=new xn;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return km(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&P("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function km(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var _c="mdc-line-ripple--active",Ii="mdc-line-ripple--deactivating",vc=(()=>{class t{_elementRef=s(k);_cleanupTransitionEnd;constructor(){let e=s(C),n=s(ce);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ii),e.add(_c)}deactivate(){this._elementRef.nativeElement.classList.add(Ii)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(Ii);e.propertyName==="opacity"&&r&&n.remove(_c,Ii)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),yc=(()=>{class t{_elementRef=s(k);_ngZone=s(C);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&ct(nm,5),n&2){let o;X(o=J())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&P("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:im,ngContentSelectors:rm,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(ge(),$e(0,"div",1),At(1,"div",2,0),j(3),Mt(),$e(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),to=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t})}return t})();var no=new m("MatFormField"),Fm=new m("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Dc="fill",Im="auto",xc="fixed",Tm="translateY(-50%)",Cc=(()=>{class t{_elementRef=s(k);_changeDetectorRef=s(Ge);_platform=s(W);_idGenerator=s(je);_ngZone=s(C);_defaults=s(Fm,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Gt("iconPrefixContainer");_textPrefixContainerSignal=Gt("textPrefixContainer");_iconSuffixContainerSignal=Gt("iconSuffixContainer");_textSuffixContainerSignal=Gt("textSuffixContainer");_prefixSuffixContainers=Se(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=qo(Qr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ut(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Im}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Dc;this._appearanceSignal.set(n)}_appearanceSignal=ie(Dc);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||xc}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||xc}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new V;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ze();constructor(){let e=this._defaults,n=s(ki);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),vt(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Se(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(Cn([void 0,void 0]),se(()=>[n.errorState,n.userAriaDescribedBy]),Co(),Le(([[o,a],[c,d]])=>o!==c||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Je(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),yo(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Qo({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Se(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(c=>c.align==="start"):null,a=this._hintChildren?this._hintChildren.find(c=>c.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,c=n?.getBoundingClientRect().width??0,d=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",f=`${a+c}px`,_=`calc(${h} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,T=`var(--mat-mdc-form-field-label-transform, ${Tm} translateX(${_}))`,B=a+c+d+l;return[T,B]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&($o(o,r._labelChild,Qr,5),Ho(o,to,5)(o,Am,5)(o,Mm,5)(o,wm,5)(o,eo,5)),n&2){$i();let a;X(a=J())&&(r._formFieldControl=a.first),X(a=J())&&(r._prefixChildren=a),X(a=J())&&(r._suffixChildren=a),X(a=J())&&(r._errorChildren=a),X(a=J())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(Go(r._iconPrefixContainerSignal,fc,5)(r._textPrefixContainerSignal,hc,5)(r._iconSuffixContainerSignal,pc,5)(r._textSuffixContainerSignal,gc,5),ct(om,5)(fc,5)(hc,5)(pc,5)(gc,5)(bc,5)(yc,5)(vc,5)),n&2){$i(4);let o;X(o=J())&&(r._textField=o.first),X(o=J())&&(r._iconPrefixContainer=o.first),X(o=J())&&(r._textPrefixContainer=o.first),X(o=J())&&(r._iconSuffixContainer=o.first),X(o=J())&&(r._textSuffixContainer=o.first),X(o=J())&&(r._floatingLabel=o.first),X(o=J())&&(r._notchedOutline=o.first),X(o=J())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&P("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[$([{provide:no,useExisting:t},{provide:Ec,useExisting:t}])],ngContentSelectors:sm,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(ge(am),Ct(0,lm,1,1,"ng-template",null,0,Nn),R(2,"div",6,1),ee("click",function(a){return r._control.onContainerClick(a)}),he(4,um,1,0,"div",7),R(5,"div",8),he(6,hm,2,2,"div",9),he(7,pm,3,0,"div",10),he(8,gm,3,0,"div",11),R(9,"div",12),he(10,_m,1,1,null,13),j(11),L(),he(12,vm,3,0,"div",14),he(13,ym,3,0,"div",15),L(),he(14,Dm,1,0,"div",16),L(),R(15,"div",17),he(16,xm,2,0,"div",18)(17,Cm,5,1,"div",19),L()),n&2){let o;N(2),P("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),N(2),pe(!r._hasOutline()&&!r._control.disabled?4:-1),N(2),pe(r._hasOutline()?6:-1),N(),pe(r._hasIconPrefix?7:-1),N(),pe(r._hasTextPrefix?8:-1),N(2),pe(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),N(2),pe(r._hasTextSuffix?12:-1),N(),pe(r._hasIconSuffix?13:-1),N(),pe(r._hasOutline()?-1:14),N(),P("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();N(),pe((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[bc,yc,Xt,vc,eo],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Sm=["mat-internal-form-field",""],Rm=["*"],wc=(()=>{class t{labelPosition="after";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(n,r){n&2&&P("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Sm,ngContentSelectors:Rm,decls:1,vars:0,template:function(n,r){n&1&&(ge(),j(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var Ti=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ie=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Ie||{}),io=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ie.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Ac=Nt({passive:!0,capture:!0}),ro=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ac)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Ac)))}_delegateEventHandler=i=>{let e=Ne(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},_n={enterDuration:225,exitDuration:150},Om=800,Mc=Nt({passive:!0,capture:!0}),kc=["mousedown","touchstart"],Fc=["mouseup","mouseleave","touchend","touchcancel"],Nm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),vn=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ro;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=xe(n)),o&&o.get(Ee).load(Nm)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=E(E({},_n),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||Lm(i,e,r),c=i-r.left,d=e-r.top,l=o.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${c-a}px`,h.style.top=`${d-a}px`,h.style.height=`${a*2}px`,h.style.width=`${a*2}px`,n.color!=null&&(h.style.backgroundColor=n.color),h.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(h);let f=window.getComputedStyle(h),v=f.transitionProperty,_=f.transitionDuration,T=v==="none"||_==="0s"||_==="0s, 0s"||r.width===0&&r.height===0,B=new io(this,h,n,T);h.style.transform="scale3d(1, 1, 1)",B.state=Ie.FADING_IN,n.persistent||(this._mostRecentTransientRipple=B);let b=null;return!T&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let x=()=>{b&&(b.fallbackTimer=null),clearTimeout(te),this._finishRippleTransition(B)},A=()=>this._destroyRipple(B),te=setTimeout(A,l+100);h.addEventListener("transitionend",x),h.addEventListener("transitioncancel",A),b={onTransitionEnd:x,onTransitionCancel:A,fallbackTimer:te}}),this._activeRipples.set(B,b),(T||!l)&&this._finishRippleTransition(B),B}fadeOutRipple(i){if(i.state===Ie.FADING_OUT||i.state===Ie.HIDDEN)return;let e=i.element,n=E(E({},_n),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=Ie.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=xe(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,kc.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Fc.forEach(e=>{this._triggerElement.addEventListener(e,this,Mc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Ie.FADING_IN?this._startFadeOutTransition(i):i.state===Ie.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=Ie.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Ie.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=rn(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Om;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!on(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Ie.VISIBLE||i.config.terminateOnPointerUp&&i.state===Ie.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(kc.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Fc.forEach(e=>i.removeEventListener(e,this,Mc)),this._pointerUpEventsRegistered=!1))}};function Lm(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var oo=new m("mat-ripple-global-options"),Ic=(()=>{class t{_elementRef=s(k);_animationsDisabled=ze();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(C),n=s(W),r=s(oo,{optional:!0}),o=s(oe);this._globalOptions=r||{},this._rippleRenderer=new vn(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:E(E(E({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,E(E({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,E(E({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&P("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var Pm=["input"],Bm=["label"],Vm=["*"],ao={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},jm=new m("mat-checkbox-default-options",{providedIn:"root",factory:()=>ao}),le=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(le||{}),so=class{source;checked},Um=(()=>{class t{_elementRef=s(k);_changeDetectorRef=s(Ge);_ngZone=s(C);_animationsDisabled=ze();_options=s(jm,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new so;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new K;indeterminateChange=new K;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=le.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){s(Ee).load(Ti);let e=s(new Ko("tabindex"),{optional:!0});this._options=this._options||ao,this.color=this._options.color||ao.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=s(je).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(le.Indeterminate):this._transitionCheckState(this.checked?le.Checked:le.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=ie(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,r=this._getAnimationTargetElement();if(!(n===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?le.Checked:le.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return"";switch(e){case le.Init:if(n===le.Checked)return this._animationClasses.uncheckedToChecked;if(n==le.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case le.Unchecked:return n===le.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case le.Checked:return n===le.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case le.Indeterminate:return n===le.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["mat-checkbox"]],viewQuery:function(n,r){if(n&1&&ct(Pm,5)(Bm,5),n&2){let o;X(o=J())&&(r._inputElement=o.first),X(o=J())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,r){n&2&&(kt("id",r.id),q("tabindex",null)("aria-label",null)("aria-labelledby",null),Ft(r.color?"mat-"+r.color:"mat-accent"),P("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",G],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",G],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:We(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",G],checked:[2,"checked","checked",G],disabled:[2,"disabled","disabled",G],indeterminate:[2,"indeterminate","indeterminate",G]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[$([{provide:Fe,useExisting:ne(()=>t),multi:!0},{provide:Ue,useExisting:t,multi:!0}]),fe],ngContentSelectors:Vm,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,r){if(n&1&&(ge(),R(0,"div",3),ee("click",function(a){return r._preventBubblingFromLabel(a)}),R(1,"div",4,0)(3,"div",5),ee("click",function(){return r._onTouchTargetClick()}),L(),R(4,"input",6,1),ee("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),L(),ye(6,"div",7),R(7,"div",8),$t(),R(8,"svg",9),ye(9,"path",10),L(),An(),ye(10,"div",11),L(),ye(11,"div",12),L(),R(12,"label",13,2),j(14),L()()),n&2){let o=dt(2);ue("labelPosition",r.labelPosition),N(4),P("mdc-checkbox--selected",r.checked),ue("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),q("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),N(7),ue("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),N(),ue("for",r.inputId)}},dependencies:[Ic,wc],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})(),ky=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[Um,ve]})}return t})();var zm={capture:!0},Hm=["focus","mousedown","mouseenter","touchstart"],co="mat-ripple-loader-uninitialized",lo="mat-ripple-loader-class-name",Tc="mat-ripple-loader-centered",Si="mat-ripple-loader-disabled",Sc=(()=>{class t{_document=s(M);_animationsDisabled=ze();_globalRippleOptions=s(oo,{optional:!0});_platform=s(W);_ngZone=s(C);_injector=s(oe);_eventCleanups;_hosts=new Map;constructor(){let e=s(Qe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Hm.map(n=>e.listen(this._document,n,this._onInteraction,zm)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(co,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(lo))&&e.setAttribute(lo,n.className||""),n.centered&&e.setAttribute(Tc,""),n.disabled&&e.setAttribute(Si,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(Si,""):e.removeAttribute(Si)}_onInteraction=e=>{let n=Ne(e);if(n instanceof HTMLElement){let r=n.closest(`[${co}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(lo)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??_n.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??_n.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Si),rippleConfig:{centered:e.hasAttribute(Tc),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},d=new vn(c,this._ngZone,n,this._platform,this._injector),l=!c.rippleDisabled;l&&d.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:d,hasSetUpEvents:l}),e.removeAttribute(co)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $m=["mat-icon-button",""],Gm=["*"],Wm=new m("MAT_BUTTON_CONFIG");function Rc(t){return t==null?void 0:We(t)}var uo=(()=>{class t{_elementRef=s(k);_ngZone=s(C);_animationsDisabled=ze();_config=s(Wm,{optional:!0});_focusMonitor=s(oi);_cleanupClick;_renderer=s(ce);_rippleLoader=s(Sc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(Ee).load(Ti);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(q("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ft(r.color?"mat-"+r.color:""),P("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",G],disabled:[2,"disabled","disabled",G],ariaDisabled:[2,"aria-disabled","ariaDisabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G],tabIndex:[2,"tabIndex","tabIndex",Rc],_tabindex:[2,"tabindex","_tabindex",Rc]}})}return t})(),Zm=(()=>{class t extends uo{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[z],attrs:$m,ngContentSelectors:Gm,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(ge(),$e(0,"span",0),j(1),$e(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Oc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[ve]})}return t})();var Km=["matButton",""],qm=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ym=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Nc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Qy=(()=>{class t extends uo{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Xm(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?Nc.get(this._appearance):null,o=Nc.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[z],attrs:Km,ngContentSelectors:Ym,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(ge(qm),$e(0,"span",0),j(1),At(2,"span",1),j(3,1),Mt(),j(4,2),$e(5,"span",2)(6,"span",3)),n&2&&P("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Xm(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var e0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[Oc,ve]})}return t})();var mo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[li,Cc,ve]})}return t})();var Jm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),Qm={passive:!0},Lc=(()=>{class t{_platform=s(W);_ngZone=s(C);_renderer=s(Qe).createRenderer(null,null);_styleLoader=s(Ee);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return po;this._styleLoader.load(Jm);let n=xe(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new V,a="cdk-text-field-autofilled",c=l=>{l.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",c,Qm)));return this._monitoredElements.set(n,{subject:o,unlisten:d}),o}stopMonitoring(e){let n=xe(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({})}return t})();var Bc=new m("MAT_INPUT_VALUE_ACCESSOR");var Vc=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ri=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var ef=["button","checkbox","file","hidden","image","radio","range","reset","submit"],tf=new m("MAT_INPUT_CONFIG"),H0=(()=>{class t{_elementRef=s(k);_platform=s(W);ngControl=s(ke,{optional:!0,self:!0});_autofillMonitor=s(Lc);_ngZone=s(C);_formField=s(no,{optional:!0});_renderer=s(ce);_uid=s(je).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(tf,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new V;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ut(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(gi.required)??!1}set required(e){this._required=Ut(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Yr().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ut(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Yr().has(e));constructor(){let e=s(Wr,{optional:!0}),n=s(Kr,{optional:!0}),r=s(Vc),o=s(Bc,{optional:!0,self:!0}),a=this._elementRef.nativeElement,c=a.nodeName.toLowerCase();o?wt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ri(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&vt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ef.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&ee("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(kt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),q("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),P("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},exportAs:["matInput"],features:[$([{provide:to,useExisting:t}]),fe]})}return t})(),$0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[mo,mo,Pc,ve]})}return t})();var nf=["*"];var rf=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],of=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],af=new m("MAT_CARD_CONFIG"),eD=(()=>{class t{appearance;constructor(){let e=s(af,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&P("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:nf,decls:1,vars:0,template:function(n,r){n&1&&(ge(),j(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),tD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var nD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),iD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})();var rD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:of,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(ge(rf),j(0),At(1,"div",0),j(2,1),Mt(),j(3,2))},encapsulation:2,changeDetection:0})}return t})();var oD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[ve]})}return t})();var sf=["determinateSpinner"];function cf(t,i){if(t&1&&($t(),R(0,"svg",11),ye(1,"circle",12),L()),t&2){let e=Pe();q("viewBox",e._viewBox()),N(),On("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),q("r",e._circleRadius())}}var df=new m("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:jc})}),jc=100,lf=10,bD=(()=>{class t{_elementRef=s(k);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(df),n=Jr(),r=this._elementRef.nativeElement;this._noopAnimations=n==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&n==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=jc;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-lf)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=H({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,r){if(n&1&&ct(sf,5),n&2){let o;X(o=J())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,r){n&2&&(q("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Ft("mat-"+r.color),On("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),P("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",We],diameter:[2,"diameter","diameter",We],strokeWidth:[2,"strokeWidth","strokeWidth",We]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,r){if(n&1&&(Ct(0,cf,2,8,"ng-template",null,0,Nn),R(2,"div",2,1),$t(),R(4,"svg",3),ye(5,"circle",4),L()(),An(),R(6,"div",5)(7,"div",6)(8,"div",7),Rn(9,8),L(),R(10,"div",9),Rn(11,8),L(),R(12,"div",10),Rn(13,8),L()()()),n&2){let o=dt(1);N(4),q("viewBox",r._viewBox()),N(),On("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),q("r",r._circleRadius()),N(4),ue("ngTemplateOutlet",o),N(2),ue("ngTemplateOutlet",o),N(2),ue("ngTemplateOutlet",o)}},dependencies:[Xt],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var _D=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=F({imports:[ve]})}return t})();export{Hc as a,It as b,oa as c,aa as d,Zc as e,gd as f,wa as g,bd as h,Xt as i,vd as j,xd as k,Ed as l,ka as m,Ia as n,Oh as o,dr as p,Ud as q,qe as r,qa as s,Xa as t,Ja as u,pl as v,pg as w,yr as x,gg as y,rn as z,on as A,xr as B,Er as C,Ne as D,W as E,ii as F,xe as G,oi as H,Ol as I,Ee as J,ci as K,Ll as L,Ar as M,di as N,Mr as O,_b as P,li as Q,Ds as R,Es as S,Yl as T,Jl as U,Ql as V,Ms as W,Fr as X,Ir as Y,je as Z,tu as _,nu as $,g_ as aa,bn as ba,uv as ca,mv as da,hv as ea,Av as fa,Jr as ga,ze as ha,sv as ia,Ut as ja,vn as ka,oo as la,Ic as ma,Ti as na,ki as oa,ov as pa,ve as qa,Fe as ra,ru as sa,js as ta,Ue as ua,gi as va,me as wa,ke as xa,V_ as ya,j_ as za,jt as Aa,Wr as Ba,fn as Ca,Iu as Da,z_ as Ea,Su as Fa,Nu as Ga,Pu as Ha,Vu as Ia,ic as Ja,rc as Ka,Hu as La,Kr as Ma,sc as Na,H_ as Oa,$_ as Pa,Ju as Qa,G_ as Ra,W_ as Sa,Z_ as Ta,uc as Ua,Qr as Va,eo as Wa,to as Xa,no as Ya,Cc as Za,Oc as _a,wc as $a,Um as ab,ky as bb,Sc as cb,Zm as db,Qy as eb,e0 as fb,Vc as gb,Ri as hb,mo as ib,H0 as jb,$0 as kb,eD as lb,tD as mb,nD as nb,iD as ob,rD as pb,oD as qb,bD as rb,_D as sb};
