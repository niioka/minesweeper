function S(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function K(){return Object.create(null)}function B(t){t.forEach(P)}function Q(t){return typeof t=="function"}function R(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function D(t,...n){if(t==null){for(const i of n)i(void 0);return S}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function V(t,n,e){t.$$.on_destroy.push(D(n,e))}function X(t,n,e,i){if(t){const c=w(t,n,e,i);return t[0](c)}}function w(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function Y(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],l=Math.max(n.dirty.length,c.length);for(let s=0;s<l;s+=1)u[s]=n.dirty[s]|c[s];return u}return n.dirty|c}return n.dirty}function Z(t,n,e,i,c,u){if(c){const l=w(n,e,i,u);t.p(l,c)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let m=!1;function tt(){m=!0}function nt(){m=!1}function L(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function M(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<n.length;a++){const o=n[a];o.claim_order!==void 0&&r.push(o)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const a=n[r].claim_order,o=(c>0&&n[e[c]].claim_order<=a?c+1:L(1,c,j=>n[e[j]].claim_order,a))-1;i[r]=e[o]+1;const v=o+1;e[v]=r,c=Math.max(v,c)}const u=[],l=[];let s=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);s>=r;s--)l.push(n[s]);s--}for(;s>=0;s--)l.push(n[s]);u.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<u.length&&l[r].claim_order>=u[a].claim_order;)a++;const o=a<u.length?u[a]:null;t.insertBefore(l[r],o)}}function O(t,n){if(m){for(M(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){m&&!e?O(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function it(t){t.parentNode&&t.parentNode.removeChild(t)}function ct(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function T(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function lt(){return g(" ")}function rt(){return g("")}function st(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ut(t){return function(n){return n.preventDefault(),t.call(this,n)}}function at(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ot(t){return t.dataset.svelteH}function ft(t){return Array.from(t.childNodes)}function q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function N(t,n,e,i,c=!1){q(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(n(s)){const r=e(s);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(n(s)){const r=e(s);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function H(t,n,e,i){return N(t,c=>c.nodeName===n,c=>{const u=[];for(let l=0;l<c.attributes.length;l++){const s=c.attributes[l];e[s.name]||u.push(s.name)}u.forEach(l=>c.removeAttribute(l))},()=>i(n))}function _t(t,n,e){return H(t,n,e,T)}function I(t,n){return N(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>g(n),!0)}function dt(t){return I(t," ")}function ht(t,n){n=""+n,t.data!==n&&(t.data=n)}function mt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function pt(t,n,e){t.classList.toggle(n,!!e)}function z(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function bt(t,n){return new t(n)}let h;function p(t){h=t}function x(){if(!h)throw new Error("Function called outside component initialization");return h}function yt(t){x().$$.on_mount.push(t)}function gt(t){x().$$.after_update.push(t)}function xt(){const t=x();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const u=z(n,e,{cancelable:i});return c.slice().forEach(l=>{l.call(t,u)}),!u.defaultPrevented}return!0}}function vt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],k=[];let _=[];const E=[],A=Promise.resolve();let y=!1;function F(){y||(y=!0,A.then(G))}function kt(){return F(),A}function U(t){_.push(t)}const b=new Set;let f=0;function G(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),J(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;E.length;)E.pop()();y=!1,b.clear(),p(t)}function J(t){if(t.fragment!==null){t.update(),B(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(U)}}function Et(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{B as A,K as B,G as C,Q as D,W as E,U as F,Et as G,h as H,p as I,P as J,d as K,F as L,tt as M,nt as N,ot as O,ct as P,xt as Q,st as R,ut as S,pt as T,vt as U,lt as a,ft as b,_t as c,I as d,T as e,it as f,dt as g,O as h,et as i,ht as j,V as k,X as l,$ as m,S as n,Y as o,rt as p,gt as q,yt as r,R as s,g as t,Z as u,at as v,mt as w,k as x,bt as y,kt as z};
