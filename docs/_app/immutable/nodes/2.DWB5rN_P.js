var Pe=Object.defineProperty;var Le=(i,e,t)=>e in i?Pe(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var be=(i,e,t)=>(Le(i,typeof e!="symbol"?e+"":e,t),t);import{s as q,e as g,c as b,O as X,v as E,i as M,n as z,f as c,a as G,b as T,g as V,h as d,P as Ie,Q as Z,t as R,d as P,R as ee,S as se,p as ve,A as Se,T as ie,w as Q,j as te,U as J,l as Ue,u as Ye,m as Ke,o as je,r as ze}from"../chunks/scheduler.C9lSJ9nv.js";import{S as W,i as F,b as L,d as S,m as U,t as y,a as D,e as Y,g as re,c as le}from"../chunks/index.jqbBBaer.js";function oe(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function qe(i){let e,t="MINESWEEPER";return{c(){e=g("div"),e.textContent=t,this.h()},l(n){e=b(n,"DIV",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-zcvkwj"&&(e.textContent=t),this.h()},h(){E(e,"class","title svelte-a2inip")},m(n,s){M(n,e,s)},p:z,i:z,o:z,d(n){n&&c(e)}}}class Oe extends W{constructor(e){super(),F(this,e,null,qe,q,{})}}function _e(i,e,t){const n=i.slice();return n[4]=e[t],n}function $e(i){let e,t,n,s=i[4].name+"",r,l,o,a=i[4].width+"",u,f,h=i[4].height+"",m,_,O,K=i[4].bombCount+"",k,C,v,p;function $(...B){return i[2](i[4],...B)}return{c(){e=g("div"),t=g("button"),n=g("div"),r=R(s),l=G(),o=g("div"),u=R(a),f=R(" x "),m=R(h),_=G(),O=g("div"),k=R(K),C=G(),this.h()},l(B){e=b(B,"DIV",{class:!0});var w=T(e);t=b(w,"BUTTON",{class:!0});var N=T(t);n=b(N,"DIV",{});var H=T(n);r=P(H,s),H.forEach(c),l=V(N),o=b(N,"DIV",{});var I=T(o);u=P(I,a),f=P(I," x "),m=P(I,h),I.forEach(c),_=V(N),O=b(N,"DIV",{});var A=T(O);k=P(A,K),A.forEach(c),N.forEach(c),C=V(w),w.forEach(c),this.h()},h(){E(t,"class","button svelte-11z6qv5"),E(e,"class","button-wrapper svelte-11z6qv5")},m(B,w){M(B,e,w),d(e,t),d(t,n),d(n,r),d(t,l),d(t,o),d(o,u),d(o,f),d(o,m),d(t,_),d(t,O),d(O,k),d(e,C),v||(p=ee(t,"click",se($)),v=!0)},p(B,w){i=B},d(B){B&&c(e),v=!1,p()}}}function We(i){let e,t,n,s,r;t=new Oe({});let l=oe(i[0]),o=[];for(let a=0;a<l.length;a+=1)o[a]=$e(_e(i,l,a));return{c(){e=g("div"),L(t.$$.fragment),n=G(),s=g("div");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=b(a,"DIV",{class:!0});var u=T(e);S(t.$$.fragment,u),n=V(u),s=b(u,"DIV",{class:!0});var f=T(s);for(let h=0;h<o.length;h+=1)o[h].l(f);f.forEach(c),u.forEach(c),this.h()},h(){E(s,"class","buttons svelte-11z6qv5"),E(e,"class","menu-page svelte-11z6qv5")},m(a,u){M(a,e,u),U(t,e,null),d(e,n),d(e,s);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(s,null);r=!0},p(a,[u]){if(u&3){l=oe(a[0]);let f;for(f=0;f<l.length;f+=1){const h=_e(a,l,f);o[f]?o[f].p(h,u):(o[f]=$e(h),o[f].c(),o[f].m(s,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=l.length}},i(a){r||(y(t.$$.fragment,a),r=!0)},o(a){D(t.$$.fragment,a),r=!1},d(a){a&&c(e),Y(t),Ie(o,a)}}}function Fe(i){const e=Z(),t=[{name:"Easy",width:9,height:9,bombCount:10,stageType:"EASY"},{name:"Normal",width:16,height:16,bombCount:40,stageType:"NORMAL"},{name:"Hard",width:30,height:16,bombCount:99,stageType:"HARD"}];function n(r){e("startGame",{width:r.width,height:r.height,bombCount:r.bombCount,stageType:r.stageType})}return[t,n,(r,l)=>n(r)]}class He extends W{constructor(e){super(),F(this,e,Fe,We,q,{})}}function ue({x:i,y:e}){return{x:i,y:e-1}}function fe({x:i,y:e}){return{x:i-1,y:e}}function ce({x:i,y:e}){return{x:i+1,y:e}}function de({x:i,y:e}){return{x:i,y:e+1}}function Ge(i,e){const t=Qe(i,e),n=Ve(i,[ue(fe(e)),ue(ce(e)),de(fe(e)),de(ce(e))]);return t.concat(n)}function Qe(i,e){return Ve(i,[ue(e),fe(e),ce(e),de(e)])}function Ve(i,e){let t=[];for(let n of e){const s=Xe(i,n);s&&t.push(s)}return t}function Xe(i,{x:e,y:t}){if(he(i,e,t))return i.grids[e+t*i.width]}function Je(i,{x:e,y:t}){if(!he(i,e,t))throw new Error(`x, y must be valid position: x=${e}, y=${t}`);return i.grids[Ze(i,{x:e,y:t})]}function he({height:i,width:e},t,n){return!(t<0||t>=e||n<0||n>=i)}function Ze(i,{x:e,y:t}){if(!he(i,e,t))throw new Error(`x, y must be valid position: x=${e} y=${t}`);return e+t*i.width}function xe(i){return i.grids.filter(e=>e.type==="BLANK"&&e.displayType!=="BLANK").length}function et(i,e){return i.x===e.x&&i.y===e.y}function tt(i,e){return e.some(t=>et(i,t))}function nt(i,e){return i.some(t=>t.index===e.index)}function it(i){return i.isCovered&&i.type!=="MINE"}function st({width:i,height:e,getBombPositions:t}){let n=rt(i,e);return lt(n,t(n)),ot(n),n}function rt(i,e){const t=[];for(let n=0;n<e;n++)for(let s=0;s<i;s++)t.push({index:s+n*i,type:"BLANK",isCovered:!0,displayType:"COVERED",x:s,y:n,neighborBombCount:0});return{height:e,width:i,grids:t}}function lt(i,e){for(let t of i.grids)tt(t,e)&&(t.type="MINE")}function ot(i){for(let e of i.grids)e.neighborBombCount=at(i,e.x,e.y)}function at(i,e,t){let n=0;for(let s of Ge(i,{x:e,y:t}))s.type==="MINE"&&n++;return n}class ut{constructor(){be(this,"visited",new Set)}isVisited(e){return this.visited.has(`${e.x}-${e.y}`)}isNotVisited(e){return!this.isVisited(e)}visit(e){this.visited.add(`${e.x}-${e.y}`)}}function ft(i,e){const t=e.neighborBombCount>0?[e]:ct(i,e);for(let n of t)nt(t,n)&&(n.displayType="BLANK")}function ct(i,e){const t=new ut,n=[e],s=[];for(;;){const r=n.shift();if(!r)break;if(t.isVisited(r))continue;t.visit(r),s.push(r);const l=dt(i,r).filter(o=>t.isNotVisited(o));for(let o of l)o.neighborBombCount>0?(s.push(o),t.visit(o)):n.push(o)}return s}function dt(i,e){return e.isCovered?e.type==="MINE"?[]:Ge(i,e).filter(it):[]}function ht(i){for(let e of i.grids)e.type==="MINE"&&(e.displayType="CLEARED_MINE")}function mt(i){for(let e of i.grids)e.type==="MINE"&&(e.displayType="MINE")}function Te({stageType:i,width:e,height:t,getMinePositions:n}){const s=st({width:e,height:t,getBombPositions:n}),r=s.grids.filter(l=>l.type==="MINE").length;return{isGameOverPopupOpen:!1,isCongratulationPopupOpen:!1,startTime:0,initialBombCount:r,restBombCount:r,restBlankCount:e*t-r,elapsedSeconds:0,status:"READY",board:s,stageType:i,endTime:-1,bestTime:-1}}function Ce(i){return e=>{const t=[],n=new Set;for(;t.length<i;){const s=Math.floor(Math.random()*e.width),r=Math.floor(Math.random()*e.height),l=`${s}|${r}`;n.has(l)||(t.push({x:s,y:r}),n.add(l))}return t}}function Ae(){return new Date().getTime()}function pt(i,{x:e,y:t},{getTime:n=Ae}={}){const s=Je(i.board,{x:e,y:t});if(!s.isCovered)return;if(s.type==="MINE"){Re(i);return}if(ft(i.board,s),i.restBlankCount=xe(i.board),i.status==="READY"&&(i.status="PLAYING",i.startTime=n()),i.restBlankCount<=0){gt(i);return}}function Re(i){i.status="GAMEOVER",mt(i.board)}function gt(i){i.status="COMPLETE",i.endTime=Math.floor((Ae()-i.startTime)/1e3);const e=window.localStorage.getItem("minesweeper.bestTime."+i.stageType);let t=e?Number(e):Number.MAX_SAFE_INTEGER;i.endTime<t&&(t=i.endTime,window.localStorage.setItem("minesweeper.bestTime."+i.stageType,""+t)),ht(i.board),i.bestTime=t}function bt(i,e){e.displayType==="COVERED"?(e.displayType="FLAG",i.restBombCount--):e.displayType==="FLAG"?(e.displayType="UNKNOWN",i.restBombCount++):e.displayType==="UNKNOWN"&&(e.displayType="COVERED")}function vt(i){let e,t,n,s,r=i[0].displayType==="FLAG"&&Ee(),l=i[0].displayType==="UNKNOWN"&&ye();return{c(){e=g("button"),r&&r.c(),t=G(),l&&l.c(),this.h()},l(o){e=b(o,"BUTTON",{class:!0,tabindex:!0});var a=T(e);r&&r.l(a),t=V(a),l&&l.l(a),a.forEach(c),this.h()},h(){E(e,"class","grid grid--covered svelte-1mbky95"),E(e,"tabindex","-1")},m(o,a){M(o,e,a),r&&r.m(e,null),d(e,t),l&&l.m(e,null),n||(s=[ee(e,"contextmenu",se(i[5])),ee(e,"click",se(i[6]))],n=!0)},p(o,a){o[0].displayType==="FLAG"?r||(r=Ee(),r.c(),r.m(e,t)):r&&(r.d(1),r=null),o[0].displayType==="UNKNOWN"?l||(l=ye(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(o){o&&c(e),r&&r.d(),l&&l.d(),n=!1,Se(s)}}}function _t(i){let e,t="💣";return{c(){e=g("button"),e.textContent=t,this.h()},l(n){e=b(n,"BUTTON",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-1yldtii"&&(e.textContent=t),this.h()},h(){E(e,"class","grid svelte-1mbky95"),ie(e,"grid--burst",i[0].displayType==="MINE"),ie(e,"grid--cleared",i[0].displayType==="CLEARED_MINE")},m(n,s){M(n,e,s)},p(n,s){s&1&&ie(e,"grid--burst",n[0].displayType==="MINE"),s&1&&ie(e,"grid--cleared",n[0].displayType==="CLEARED_MINE")},d(n){n&&c(e)}}}function $t(i){let e,t=i[0].neighborBombCount>0&&ke(i);return{c(){e=g("button"),t&&t.c(),this.h()},l(n){e=b(n,"BUTTON",{class:!0});var s=T(e);t&&t.l(s),s.forEach(c),this.h()},h(){E(e,"class","grid grid--blank svelte-1mbky95"),e.disabled=!0,Q(e,"color",i[1]())},m(n,s){M(n,e,s),t&&t.m(e,null)},p(n,s){n[0].neighborBombCount>0?t?t.p(n,s):(t=ke(n),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(n){n&&c(e),t&&t.d()}}}function Ee(i){let e;return{c(){e=R("🚩")},l(t){e=P(t,"🚩")},m(t,n){M(t,e,n)},d(t){t&&c(e)}}}function ye(i){let e;return{c(){e=R("❓")},l(t){e=P(t,"❓")},m(t,n){M(t,e,n)},d(t){t&&c(e)}}}function ke(i){let e=i[0].neighborBombCount+"",t;return{c(){t=R(e)},l(n){t=P(n,e)},m(n,s){M(n,t,s)},p(n,s){s&1&&e!==(e=n[0].neighborBombCount+"")&&te(t,e)},d(n){n&&c(t)}}}function Tt(i){let e;function t(r,l){if(r[0].displayType==="BLANK")return $t;if(r[0].displayType==="MINE"||r[0].displayType==="CLEARED_MINE")return _t;if(r[0].displayType==="COVERED"||r[0].displayType==="FLAG"||r[0].displayType==="UNKNOWN")return vt}let n=t(i),s=n&&n(i);return{c(){s&&s.c(),e=ve()},l(r){s&&s.l(r),e=ve()},m(r,l){s&&s.m(r,l),M(r,e,l)},p(r,[l]){n===(n=t(r))&&s?s.p(r,l):(s&&s.d(1),s=n&&n(r),s&&(s.c(),s.m(e.parentNode,e)))},i:z,o:z,d(r){r&&c(e),s&&s.d(r)}}}function Ct(i,e,t){let{grid:n}=e,{isDisabled:s=!1}=e;const r=Z();function l(){return n.neighborBombCount===1?"blue":n.neighborBombCount===2?"green":n.neighborBombCount===3?"red":n.neighborBombCount===4?"purple":n.neighborBombCount===5?"maroon":n.neighborBombCount===6?"turquoise":n.neighborBombCount===7?"black":n.neighborBombCount===8?"gray":"black"}function o(){s||r("changeMark",n)}function a(){s||r("openCover",n)}const u=h=>o(),f=h=>a();return i.$$set=h=>{"grid"in h&&t(0,n=h.grid),"isDisabled"in h&&t(4,s=h.isDisabled)},[n,l,o,a,s,u,f]}class Et extends W{constructor(e){super(),F(this,e,Ct,Tt,q,{grid:0,isDisabled:4})}}function Ne(i,e,t){const n=i.slice();return n[4]=e[t],n}function Be(i){let e,t;return e=new Et({props:{grid:i[4],isDisabled:i[1]}}),e.$on("changeMark",i[2]),e.$on("openCover",i[3]),{c(){L(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,s){U(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.grid=n[4]),s&2&&(r.isDisabled=n[1]),e.$set(r)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function yt(i){let e,t,n=oe(i[0].grids),s=[];for(let l=0;l<n.length;l+=1)s[l]=Be(Ne(i,n,l));const r=l=>D(s[l],1,1,()=>{s[l]=null});return{c(){e=g("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=b(l,"DIV",{class:!0});var o=T(e);for(let a=0;a<s.length;a+=1)s[a].l(o);o.forEach(c),this.h()},h(){E(e,"class","board-view svelte-h8ibil"),Q(e,"width",`${i[0].width*20}px`),Q(e,"height",`${i[0].height*20}px`),Q(e,"grid-template-columns",`repeat(${i[0].width}, 1fr)`)},m(l,o){M(l,e,o);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);t=!0},p(l,[o]){if(o&3){n=oe(l[0].grids);let a;for(a=0;a<n.length;a+=1){const u=Ne(l,n,a);s[a]?(s[a].p(u,o),y(s[a],1)):(s[a]=Be(u),s[a].c(),y(s[a],1),s[a].m(e,null))}for(re(),a=n.length;a<s.length;a+=1)r(a);le()}o&1&&Q(e,"width",`${l[0].width*20}px`),o&1&&Q(e,"height",`${l[0].height*20}px`),o&1&&Q(e,"grid-template-columns",`repeat(${l[0].width}, 1fr)`)},i(l){if(!t){for(let o=0;o<n.length;o+=1)y(s[o]);t=!0}},o(l){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)D(s[o]);t=!1},d(l){l&&c(e),Ie(s,l)}}}function kt(i,e,t){let{board:n}=e,{isDisabled:s=!1}=e;function r(o){J.call(this,i,o)}function l(o){J.call(this,i,o)}return i.$$set=o=>{"board"in o&&t(0,n=o.board),"isDisabled"in o&&t(1,s=o.isDisabled)},[n,s,r,l]}class Nt extends W{constructor(e){super(),F(this,e,kt,yt,q,{board:0,isDisabled:1})}}function Bt(i){let e,t,n;return{c(){e=g("div"),t=R("💣"),n=R(i[0]),this.h()},l(s){e=b(s,"DIV",{class:!0});var r=T(e);t=P(r,"💣"),n=P(r,i[0]),r.forEach(c),this.h()},h(){E(e,"class","bomb-count svelte-1r3jslb")},m(s,r){M(s,e,r),d(e,t),d(e,n)},p(s,[r]){r&1&&te(n,s[0])},i:z,o:z,d(s){s&&c(e)}}}function Dt(i,e,t){let{count:n}=e,s="";return i.$$set=r=>{"count"in r&&t(1,n=r.count)},i.$$.update=()=>{i.$$.dirty&2&&(n<=-100?t(0,s="-99"):n<0?t(0,s="-"+("00"+-n).slice(-2)):n>=1e3?t(0,s="999"):t(0,s=("000"+n).slice(-3)))},[s,n]}class Mt extends W{constructor(e){super(),F(this,e,Dt,Bt,q,{count:1})}}function wt(i){let e,t,n,s;const r=i[2].default,l=Ue(r,i,i[1],null);return{c(){e=g("button"),l&&l.c(),this.h()},l(o){e=b(o,"BUTTON",{class:!0});var a=T(e);l&&l.l(a),a.forEach(c),this.h()},h(){E(e,"class","button svelte-3m2h9r")},m(o,a){M(o,e,a),l&&l.m(e,null),t=!0,n||(s=ee(e,"click",se(i[0])),n=!0)},p(o,[a]){l&&l.p&&(!t||a&2)&&Ye(l,r,o,o[1],t?je(r,o[1],a,null):Ke(o[1]),null)},i(o){t||(y(l,o),t=!0)},o(o){D(l,o),t=!1},d(o){o&&c(e),l&&l.d(o),n=!1,s()}}}function It(i,e,t){let{$$slots:n={},$$scope:s}=e;const r=Z();function l(){r("click")}return i.$$set=o=>{"$$scope"in o&&t(1,s=o.$$scope)},[l,s,n]}class ae extends W{constructor(e){super(),F(this,e,It,wt,q,{})}}function Ot(i){let e;return{c(){e=R("RETRY")},l(t){e=P(t,"RETRY")},m(t,n){M(t,e,n)},d(t){t&&c(e)}}}function Gt(i){let e;return{c(){e=R("BACK TO MENU")},l(t){e=P(t,"BACK TO MENU")},m(t,n){M(t,e,n)},d(t){t&&c(e)}}}function Vt(i){let e,t,n="Game Over",s,r,l,o,a,u,f;return l=new ae({props:{$$slots:{default:[Ot]},$$scope:{ctx:i}}}),l.$on("click",i[0]),u=new ae({props:{$$slots:{default:[Gt]},$$scope:{ctx:i}}}),u.$on("click",i[1]),{c(){e=g("div"),t=g("div"),t.textContent=n,s=G(),r=g("div"),L(l.$$.fragment),o=G(),a=g("div"),L(u.$$.fragment),this.h()},l(h){e=b(h,"DIV",{class:!0});var m=T(e);t=b(m,"DIV",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-znvirt"&&(t.textContent=n),s=V(m),r=b(m,"DIV",{class:!0});var _=T(r);S(l.$$.fragment,_),_.forEach(c),o=V(m),a=b(m,"DIV",{class:!0});var O=T(a);S(u.$$.fragment,O),O.forEach(c),m.forEach(c),this.h()},h(){E(t,"class","title svelte-1fzmot9"),E(r,"class","button svelte-1fzmot9"),E(a,"class","button svelte-1fzmot9"),E(e,"class","root svelte-1fzmot9")},m(h,m){M(h,e,m),d(e,t),d(e,s),d(e,r),U(l,r,null),d(e,o),d(e,a),U(u,a,null),f=!0},p(h,[m]){const _={};m&8&&(_.$$scope={dirty:m,ctx:h}),l.$set(_);const O={};m&8&&(O.$$scope={dirty:m,ctx:h}),u.$set(O)},i(h){f||(y(l.$$.fragment,h),y(u.$$.fragment,h),f=!0)},o(h){D(l.$$.fragment,h),D(u.$$.fragment,h),f=!1},d(h){h&&c(e),Y(l),Y(u)}}}function At(i){const e=Z();function t(){e("retry")}function n(){e("backToMenu")}return[t,n]}class Rt extends W{constructor(e){super(),F(this,e,At,Vt,q,{})}}function Pt(i){let e;return{c(){e=R("RETRY")},l(t){e=P(t,"RETRY")},m(t,n){M(t,e,n)},d(t){t&&c(e)}}}function Lt(i){let e;return{c(){e=R("BACK TO MENU")},l(t){e=P(t,"BACK TO MENU")},m(t,n){M(t,e,n)},d(t){t&&c(e)}}}function St(i){let e,t,n="Congratulation🎉",s,r,l,o="TIME:",a,u,f,h,m,_="BEST TIME:",O,K,k,C,v,p,$,B,w,N,H;return $=new ae({props:{$$slots:{default:[Pt]},$$scope:{ctx:i}}}),$.$on("click",i[2]),N=new ae({props:{$$slots:{default:[Lt]},$$scope:{ctx:i}}}),N.$on("click",i[3]),{c(){e=g("div"),t=g("div"),t.textContent=n,s=G(),r=g("div"),l=g("div"),l.textContent=o,a=G(),u=g("div"),f=R(i[0]),h=G(),m=g("div"),m.textContent=_,O=G(),K=g("div"),k=R(i[1]),C=G(),v=g("div"),p=g("div"),L($.$$.fragment),B=G(),w=g("div"),L(N.$$.fragment),this.h()},l(I){e=b(I,"DIV",{class:!0});var A=T(e);t=b(A,"DIV",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-1hbx8cs"&&(t.textContent=n),s=V(A),r=b(A,"DIV",{class:!0});var j=T(r);l=b(j,"DIV",{"data-svelte-h":!0}),X(l)!=="svelte-1jp463r"&&(l.textContent=o),a=V(j),u=b(j,"DIV",{});var x=T(u);f=P(x,i[0]),x.forEach(c),h=V(j),m=b(j,"DIV",{"data-svelte-h":!0}),X(m)!=="svelte-11m6f6d"&&(m.textContent=_),O=V(j),K=b(j,"DIV",{});var me=T(K);k=P(me,i[1]),me.forEach(c),j.forEach(c),C=V(A),v=b(A,"DIV",{});var ne=T(v);p=b(ne,"DIV",{class:!0});var pe=T(p);S($.$$.fragment,pe),pe.forEach(c),B=V(ne),w=b(ne,"DIV",{class:!0});var ge=T(w);S(N.$$.fragment,ge),ge.forEach(c),ne.forEach(c),A.forEach(c),this.h()},h(){E(t,"class","title svelte-1arljx9"),E(r,"class","content svelte-1arljx9"),E(p,"class","button svelte-1arljx9"),E(w,"class","button svelte-1arljx9"),E(e,"class","popup svelte-1arljx9")},m(I,A){M(I,e,A),d(e,t),d(e,s),d(e,r),d(r,l),d(r,a),d(r,u),d(u,f),d(r,h),d(r,m),d(r,O),d(r,K),d(K,k),d(e,C),d(e,v),d(v,p),U($,p,null),d(v,B),d(v,w),U(N,w,null),H=!0},p(I,[A]){(!H||A&1)&&te(f,I[0]),(!H||A&2)&&te(k,I[1]);const j={};A&32&&(j.$$scope={dirty:A,ctx:I}),$.$set(j);const x={};A&32&&(x.$$scope={dirty:A,ctx:I}),N.$set(x)},i(I){H||(y($.$$.fragment,I),y(N.$$.fragment,I),H=!0)},o(I){D($.$$.fragment,I),D(N.$$.fragment,I),H=!1},d(I){I&&c(e),Y($),Y(N)}}}function Ut(i,e,t){let{time:n}=e,{bestTime:s}=e;const r=Z();function l(){r("retry")}function o(){r("backToMenu")}return i.$$set=a=>{"time"in a&&t(0,n=a.time),"bestTime"in a&&t(1,s=a.bestTime)},[n,s,l,o]}class Yt extends W{constructor(e){super(),F(this,e,Ut,St,q,{time:0,bestTime:1})}}function Kt(i){let e,t,n=("000"+i[0]).slice(-3)+"",s;return{c(){e=g("div"),t=R("⏱"),s=R(n),this.h()},l(r){e=b(r,"DIV",{class:!0});var l=T(e);t=P(l,"⏱"),s=P(l,n),l.forEach(c),this.h()},h(){E(e,"class","time svelte-6nl12l")},m(r,l){M(r,e,l),d(e,t),d(e,s)},p(r,[l]){l&1&&n!==(n=("000"+r[0]).slice(-3)+"")&&te(s,n)},i:z,o:z,d(r){r&&c(e)}}}function jt(i,e,t){let{seconds:n=0}=e;return i.$$set=s=>{"seconds"in s&&t(0,n=s.seconds)},[n]}class zt extends W{constructor(e){super(),F(this,e,jt,Kt,q,{seconds:0})}}function De(i){let e,t="✘",n,s;return{c(){e=g("button"),e.textContent=t,this.h()},l(r){e=b(r,"BUTTON",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-1grir7j"&&(e.textContent=t),this.h()},h(){E(e,"class","discard svelte-1rk966m")},m(r,l){M(r,e,l),n||(s=ee(e,"click",i[2]),n=!0)},p:z,d(r){r&&c(e),n=!1,s()}}}function Me(i){let e,t;return e=new Rt({}),e.$on("backToMenu",i[5]),e.$on("retry",i[6]),{c(){L(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,s){U(e,n,s),t=!0},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function we(i){let e,t;return e=new Yt({props:{time:i[0].endTime,bestTime:i[0].bestTime}}),e.$on("backToMenu",i[7]),e.$on("retry",i[8]),{c(){L(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,s){U(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.time=n[0].endTime),s&1&&(r.bestTime=n[0].bestTime),e.$set(r)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function qt(i){let e,t,n,s,r,l,o,a,u,f,h,m,_,O,K;s=new Oe({});let k=(i[0].status==="READY"||i[0].status==="PLAYING")&&De(i);a=new Mt({props:{count:i[0].restBombCount}}),f=new zt({props:{seconds:i[0].elapsedSeconds}}),m=new Nt({props:{board:i[0].board,isDisabled:!i[1]}}),m.$on("changeMark",i[3]),m.$on("openCover",i[4]);let C=i[0].isGameOverPopupOpen&&Me(i),v=i[0].status==="COMPLETE"&&we(i);return{c(){e=g("div"),t=g("div"),n=g("div"),L(s.$$.fragment),r=G(),k&&k.c(),l=G(),o=g("div"),L(a.$$.fragment),u=G(),L(f.$$.fragment),h=G(),L(m.$$.fragment),_=G(),C&&C.c(),O=G(),v&&v.c(),this.h()},l(p){e=b(p,"DIV",{class:!0});var $=T(e);t=b($,"DIV",{});var B=T(t);n=b(B,"DIV",{class:!0});var w=T(n);S(s.$$.fragment,w),r=V(w),k&&k.l(w),w.forEach(c),l=V(B),o=b(B,"DIV",{class:!0});var N=T(o);S(a.$$.fragment,N),u=V(N),S(f.$$.fragment,N),N.forEach(c),h=V(B),S(m.$$.fragment,B),B.forEach(c),_=V($),C&&C.l($),O=V($),v&&v.l($),$.forEach(c),this.h()},h(){E(n,"class","header svelte-1rk966m"),E(o,"class","info svelte-1rk966m"),E(e,"class","game-page svelte-1rk966m")},m(p,$){M(p,e,$),d(e,t),d(t,n),U(s,n,null),d(n,r),k&&k.m(n,null),d(t,l),d(t,o),U(a,o,null),d(o,u),U(f,o,null),d(t,h),U(m,t,null),d(e,_),C&&C.m(e,null),d(e,O),v&&v.m(e,null),K=!0},p(p,[$]){p[0].status==="READY"||p[0].status==="PLAYING"?k?k.p(p,$):(k=De(p),k.c(),k.m(n,null)):k&&(k.d(1),k=null);const B={};$&1&&(B.count=p[0].restBombCount),a.$set(B);const w={};$&1&&(w.seconds=p[0].elapsedSeconds),f.$set(w);const N={};$&1&&(N.board=p[0].board),$&2&&(N.isDisabled=!p[1]),m.$set(N),p[0].isGameOverPopupOpen?C?$&1&&y(C,1):(C=Me(p),C.c(),y(C,1),C.m(e,O)):C&&(re(),D(C,1,1,()=>{C=null}),le()),p[0].status==="COMPLETE"?v?(v.p(p,$),$&1&&y(v,1)):(v=we(p),v.c(),y(v,1),v.m(e,null)):v&&(re(),D(v,1,1,()=>{v=null}),le())},i(p){K||(y(s.$$.fragment,p),y(a.$$.fragment,p),y(f.$$.fragment,p),y(m.$$.fragment,p),y(C),y(v),K=!0)},o(p){D(s.$$.fragment,p),D(a.$$.fragment,p),D(f.$$.fragment,p),D(m.$$.fragment,p),D(C),D(v),K=!1},d(p){p&&c(e),Y(s),k&&k.d(),Y(a),Y(f),Y(m),C&&C.d(),v&&v.d()}}}function Wt(i,e,t){let n,{game:s}=e;const r=Z();ze(()=>{setInterval(()=>{s.status==="PLAYING"&&(t(0,s.elapsedSeconds=Math.floor((new Date().getTime()-s.startTime)/1e3),s),r("updateGame",s))},500)});function l(){Re(s),t(0,s.isGameOverPopupOpen=!0,s),r("updateGame",s)}function o(_){bt(s,_.detail),r("updateGame",s)}function a(_){pt(s,_.detail),r("updateGame",s)}function u(_){J.call(this,i,_)}function f(_){J.call(this,i,_)}function h(_){J.call(this,i,_)}function m(_){J.call(this,i,_)}return i.$$set=_=>{"game"in _&&t(0,s=_.game)},i.$$.update=()=>{i.$$.dirty&1&&t(1,n=s.status==="PLAYING"||s.status==="READY")},[s,n,l,o,a,u,f,h,m]}class Ft extends W{constructor(e){super(),F(this,e,Wt,qt,q,{game:0})}}function Ht(i){let e,t;return e=new Ft({props:{game:i[0]}}),e.$on("updateGame",i[3]),e.$on("backToMenu",i[4]),e.$on("retry",i[2]),{c(){L(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,s){U(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.game=n[0]),e.$set(r)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function Qt(i){let e,t;return e=new He({}),e.$on("startGame",i[1]),{c(){L(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,s){U(e,n,s),t=!0},p:z,i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function Xt(i){let e,t,n,s;const r=[Qt,Ht],l=[];function o(a,u){return a[0]===void 0?0:1}return t=o(i),n=l[t]=r[t](i),{c(){e=g("div"),n.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var u=T(e);n.l(u),u.forEach(c),this.h()},h(){E(e,"class","root svelte-ryl9ph")},m(a,u){M(a,e,u),l[t].m(e,null),s=!0},p(a,[u]){let f=t;t=o(a),t===f?l[t].p(a,u):(re(),D(l[f],1,1,()=>{l[f]=null}),le(),n=l[t],n?n.p(a,u):(n=l[t]=r[t](a),n.c()),y(n,1),n.m(e,null))},i(a){s||(y(n),s=!0)},o(a){D(n),s=!1},d(a){a&&c(e),l[t].d()}}}function Jt(i,e,t){let n;function s(a){const{stageType:u,width:f,height:h,bombCount:m}=a.detail;t(0,n=Te({stageType:u,width:f,height:h,getMinePositions:Ce(m)}))}function r(){n&&t(0,n=Te({stageType:n.stageType,width:n.board.width,height:n.board.height,getMinePositions:Ce(n.initialBombCount)}))}function l(a){let u=a.detail;t(0,n=u),u.status==="GAMEOVER"&&!u.isGameOverPopupOpen&&setTimeout(()=>{u.isGameOverPopupOpen=!0,t(0,n=u)},1e3)}function o(){t(0,n=void 0)}return[n,s,r,l,o]}class tn extends W{constructor(e){super(),F(this,e,Jt,Xt,q,{})}}export{tn as component};
