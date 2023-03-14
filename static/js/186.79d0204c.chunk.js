/*! For license information please see 186.79d0204c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[186],{4020:function(e,n,t){t.d(n,{Z:function(){return l}});var r,i=t(5243),a=t(4164),s=t(168),o=t(6444).default.div(r||(r=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n"]))),c=t(184),u=document.querySelector("#modal-root"),l=function(){return(0,a.createPortal)((0,c.jsx)(o,{className:"overlay",children:(0,c.jsx)(i.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}),u)}},7532:function(e,n,t){t.d(n,{j:function(){return r}});var r=50},2186:function(e,n,t){t.r(n),t.d(n,{default:function(){return ke}});var r,i,a,s,o,c,u,l,d,f,p,h,x,v,g,y,m,Z,j,b=t(9439),C=t(2791),w=t(1087),k=t(7689),E=t(9281),S=t(168),R=t(6444),A=R.default.li(r||(r=(0,S.Z)(["\n  cursor: pointer;\n  padding: 4px;\n  border: 1px solid transparent;\n\n  &:hover {\n    border: 1px solid grey;\n  }\n"]))),D=t(184),L=function(e){var n=e.city,t=e.handlerChoiceCity,r=n.ref,i=n.name;return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(A,{onClick:function(){return t(n)},children:i},r)})},N=R.default.ul(i||(i=(0,S.Z)(["\n  margin-top: 10px;\n  padding-left: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n\n  list-style: none;\n"]))),P=function(e){var n=e.foundCities,t=e.handlerChoiceCity;return(0,D.jsx)(N,{children:n.map((function(e){var n=e.Ref,r={ref:e.DeliveryCity,name:e.Present};return(0,D.jsx)(L,{city:r,handlerChoiceCity:t},n)}))})},T=t(6871),O=t(6403),W=function(e){var n=e.descriptionCity,t=e.showOtherText,r=void 0===t||t,i=n?O.ny:O.gP;return(0,D.jsxs)(D.Fragment,{children:[n&&(0,D.jsx)("h3",{children:n}),r&&(0,D.jsx)("p",{children:i})]})},F=R.default.div(a||(a=(0,S.Z)(["\n  display: blok;\n  /* width: 50%; */\n  border: 1px solid green;\n  padding: 8px;\n"]))),K=R.default.label(s||(s=(0,S.Z)(["\n  margin-top: 5px;\n"]))),M=R.default.input(o||(o=(0,S.Z)(["\n  margin-left: 10px;\n  padding: 3px;\n"]))),_=t(5861),z=t(7757),I=t.n(z),J=t(4694),U=function(){var e=(0,C.useState)(""),n=(0,b.Z)(e,2),t=n[0],r=n[1],i=(0,C.useState)([]),a=(0,b.Z)(i,2),s=a[0],o=a[1],c=(0,C.useState)(!1),u=(0,b.Z)(c,2),l=u[0],d=u[1];return(0,C.useEffect)((function(){if(o([]),t){var e=new AbortController;return function(){n.apply(this,arguments)}(),function(){e.abort()}}function n(){return(n=(0,_.Z)(I().mark((function n(){var r,i;return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,n.next=4,(0,J.fN)(e,t);case 4:if(r=n.sent,null!==(i=r.data)&&void 0!==i&&i.success){n.next=9;break}return o([]),n.abrupt("return");case 9:o(i.data[0].Addresses),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),"ERR_CANCELED"!==n.t0.code&&console.log("Error fetch foud city",n.t0);case 15:return n.prev=15,d(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})))).apply(this,arguments)}}),[t]),[s,l,r]},V=function(){var e=(0,C.useState)(!1),n=(0,b.Z)(e,2),t=n[0],r=n[1];return(0,C.useEffect)((function(){var e=function(e){"Escape"===e.key&&r(!0)},n=function(e){e.target.closest("#descriptionCity")||e.target.closest("#searchCity")||r(!0)};return window.addEventListener("keydown",e),document.body.addEventListener("click",n),function(){window.removeEventListener("keydown",e),document.body.removeEventListener("click",n)}}),[]),[t]},q=function(e){var n=e.descriptionCity,t=e.handlerCloseSearch,r=e.handlerChoiceCity,i=U(),a=(0,b.Z)(i,3),s=a[0],o=a[1],c=a[2],u=V(),l=(0,b.Z)(u,1)[0];(0,C.useEffect)((function(){l&&t(!1)}),[l,t]);var d=(0,E.y1)((function(e){c(e)}),1e3);return(0,D.jsxs)(F,{children:[(0,D.jsx)(W,{descriptionCity:n,showOtherText:!1}),(0,D.jsxs)(K,{children:[O.vz,(0,D.jsx)(M,{name:"nameCity",type:"text",autoComplete:"off",autoFocus:!0,placeholder:O.jj,onChange:function(e){return d(e.target.value)}})]}),o&&(0,D.jsx)(T.Z,{}),!o&&s.length>0&&(0,D.jsx)(P,{foundCities:s,handlerChoiceCity:r})]})},B=R.default.div(c||(c=(0,S.Z)(["\n  position: relative;\n  margin-top: 10px;\n"]))),H=R.default.div(u||(u=(0,S.Z)(["\n  display: blok;\n  width: 50%;\n  /* border: 1px solid green; */\n  padding: 8px;\n  cursor: pointer;\n"]))),X=R.default.div(l||(l=(0,S.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 450px;\n  background-color: white;\n\n  outline: 1px solid red;\n"]))),Y=function(e){var n=e.city,t=(0,k.s0)(),r=(0,C.useState)(!1),i=(0,b.Z)(r,2),a=i[0],s=i[1],o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;s(null===e?function(e){return!e}:e)};return(0,D.jsxs)(B,{children:[(0,D.jsx)(H,{id:"descriptionCity",onClick:o,children:(0,D.jsx)(W,{descriptionCity:n?n.name:""})}),a&&(0,D.jsx)(X,{id:"searchCity",children:(0,D.jsx)(q,{descriptionCity:n?n.name:"",handlerCloseSearch:o,handlerChoiceCity:function(e){s(!1),t("/warehouses/".concat(e.ref),{replace:!0})}})})]})},G=t(8683),Q=t(6444).default,$=Q.ul(d||(d=(0,S.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 10px;\n\n  list-style: none;\n"]))),ee=Q.li(f||(f=(0,S.Z)(["\n  border: 1px solid grey;\n  border-radius: 10px;\n  padding: 4px 4px;\n  cursor: pointer;\n\n  &:hover,\n  &.Active {\n    background-color: azure;\n  }\n"]))),ne=function(e){var n,t=e.filters,r=(0,w.lr)(),i=(0,b.Z)(r,2),a=i[0],s=i[1],o=null!==(n=a.get("filter"))&&void 0!==n?n:"",c=function(e){var n=(0,G.Z)((0,G.Z)({},Object.fromEntries(a)),{},{filter:e});delete n.page,""===e&&delete n.filter,s(n)};return(0,D.jsxs)($,{children:[(0,D.jsx)(ee,{className:""===o?"Active":"",onClick:function(){return c("")},children:O.ID}),t.map((function(e){var n=e.Ref,t=e.Description;return(0,D.jsx)(ee,{className:o===n?"Active":"",onClick:function(){return c(n)},children:t},n)}))]})},te=R.default.li(p||(p=(0,S.Z)(["\n  border: 1px solid grey;\n  padding: 4px;\n"]))),re=R.default.ul(h||(h=(0,S.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 5px;\n  width: 30%;\n"]))),ie=R.default.li(x||(x=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid gray;\n  align-items: center;\n"]))),ae=R.default.p(v||(v=(0,S.Z)(["\n  width: 100%;\n  text-align: center;\n  background-color: beige;\n  font-weight: bold;\n"]))),se=function(e){var n=e.schedule,t=e.children;return(0,D.jsxs)(D.Fragment,{children:[t,(0,D.jsx)(re,{children:Object.keys(n).map((function(e){return(0,D.jsxs)(ie,{children:[(0,D.jsx)(ae,{children:O.zY[e]})," ",(0,D.jsx)("p",{children:n[e]})]},e)}))})]})},oe=t(6444).default,ce=oe.span(g||(g=(0,S.Z)(["\n  font-weight: bold;\n"]))),ue=oe.div(y||(y=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),le=function(e){var n=e.warehouse,t=n.SettlementTypeDescription,r=n.CityDescription,i=n.Description,a=n.TotalMaxWeightAllowed,s=n.ReceivingLimitationsOnDimensions,o=s.Width,c=s.Height,u=s.Length,l=n.Schedule,d=n.Reception,f=n.Delivery;return(0,D.jsxs)(ue,{children:[(0,D.jsxs)("h3",{children:[t," ",r]}),(0,D.jsx)("h4",{children:i}),(0,D.jsxs)("p",{children:[(0,D.jsxs)(ce,{children:[O.pX,": "]}),"0"===a?O.Eo:a+" "+O.kg]}),(0,D.jsxs)("p",{children:[(0,D.jsxs)(ce,{children:[O.J0," "]}),o,"x",c,"x",u]}),(0,D.jsxs)(se,{schedule:l,children:[(0,D.jsx)(ce,{children:O.vA})," "]}),(0,D.jsxs)(se,{schedule:d,children:[(0,D.jsx)(ce,{children:O.Rz})," "]}),(0,D.jsxs)(se,{schedule:f,children:[(0,D.jsx)(ce,{children:O.Jy})," "]})]})},de=function(e){var n=e.warehouse,t=(0,C.useState)(!1),r=(0,b.Z)(t,2),i=r[0],a=r[1];return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(te,{onClick:function(){a((function(e){return!e}))},children:[!i&&(0,D.jsx)("p",{children:n.Description}),i&&(0,D.jsx)(le,{warehouse:n})]})})},fe=R.default.ul(m||(m=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  list-style: none;\n  margin-top: 10px;\n"]))),pe=function(e){var n=e.foundWarehouses;return(0,D.jsx)(fe,{children:n.map((function(e,n){return(0,D.jsx)(de,{warehouse:e},e.Ref)}))})},he=t(6048),xe=t.n(he),ve=t(7532),ge=function(e){var n=e.totalElement,t=e.currentPage,r=(0,w.lr)(),i=(0,b.Z)(r,2),a=i[0],s=i[1],o=Math.ceil(n/ve.j);return(0,D.jsx)(D.Fragment,{children:o>1&&(0,D.jsx)(xe(),{className:"react-paginate",breakLabel:"...",nextLabel:"next >",onPageChange:function(e){var n=e.selected;s((0,G.Z)((0,G.Z)({},Object.fromEntries(a)),{},{page:n+1}))},forcePage:t-1,pageRangeDisplayed:3,pageCount:o,previousLabel:"< previous",renderOnZeroPageCount:null})})},ye=t(4020),me=function(){var e=(0,C.useState)([]),n=(0,b.Z)(e,2),t=n[0],r=n[1],i=(0,C.useState)(!1),a=(0,b.Z)(i,2),s=a[0],o=a[1];return(0,C.useEffect)((function(){var e=new AbortController;function n(){return(n=(0,_.Z)(I().mark((function n(){var t,i;return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.prev=1,n.next=4,(0,J.nK)(e);case 4:if(t=n.sent,null!==(i=t.data)&&void 0!==i&&i.success){n.next=9;break}return r([]),n.abrupt("return");case 9:r(i.data),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),"ERR_CANCELED"!==n.t0.code&&console.log("Error fetch filters",n.t0);case 15:return n.prev=15,o(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){e.abort()}}),[]),[t,s]},Ze=function(){var e=(0,C.useState)(),n=(0,b.Z)(e,2),t=n[0],r=n[1],i=(0,k.UO)().cityId;return(0,C.useEffect)((function(){if(i){var e=new AbortController;return function(){n.apply(this,arguments)}(),function(){e.abort()}}function n(){return(n=(0,_.Z)(I().mark((function n(){var t,a;return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,J.il)(e,i);case 3:if(t=n.sent,null!==(a=t.data)&&void 0!==a&&a.success){n.next=8;break}return r(),n.abrupt("return");case 8:r({ref:i,name:a.data[0].Description}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&console.log("Error fetch Name City",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}r()}),[i]),[t]},je=function(){var e,n,t,r=(0,w.lr)(),i=(0,b.Z)(r,1)[0],a=Ze(),s=(0,b.Z)(a,1)[0],o=(0,C.useState)([]),c=(0,b.Z)(o,2),u=c[0],l=c[1],d=(0,C.useState)(0),f=(0,b.Z)(d,2),p=f[0],h=f[1],x=(0,C.useState)(!1),v=(0,b.Z)(x,2),g=v[0],y=v[1],m=(0,C.useState)(1),Z=(0,b.Z)(m,2),j=Z[0],k=Z[1],E=(0,C.useState)(""),S=(0,b.Z)(E,2),R=S[0],A=S[1],D=(0,C.useState)(""),L=(0,b.Z)(D,2),N=L[0],P=L[1],T=null!==(e=i.get("page"))&&void 0!==e?e:1,O=null!==(n=i.get("search"))&&void 0!==n?n:"",W=null!==(t=i.get("filter"))&&void 0!==t?t:"";return(0,C.useEffect)((function(){k(T)}),[T]),(0,C.useEffect)((function(){P(O)}),[O]),(0,C.useEffect)((function(){A(W)}),[W]),(0,C.useEffect)((function(){if(!s)return l([]),void h(0);var e=new AbortController;function n(){return(n=(0,_.Z)(I().mark((function n(){var t,r;return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),n.prev=1,n.next=4,(0,J.tV)({controller:e,cityRef:s.ref,typeOfWarehouseRef:R,page:j,searchText:N});case 4:if(t=n.sent,null!==(r=t.data)&&void 0!==r&&r.success){n.next=10;break}return l([]),h(0),n.abrupt("return");case 10:l(r.data),h(r.info.totalCount),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),"ERR_CANCELED"!==n.t0.code&&console.log("Error fetch Warehouses",n.t0);case 17:return n.prev=17,y(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,14,17,20]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){e.abort()}}),[s,R,j,N]),[s,u,g,p,j]},be=R.default.label(Z||(Z=(0,S.Z)(["\n  margin-top: 5px;\n"]))),Ce=R.default.input(j||(j=(0,S.Z)(["\n  margin-left: 10px;\n  padding: 5px;\n  border-radius: 8px;\n"]))),we=function(e){var n=e.searchText,t=e.handlerChangeText,r=(0,w.lr)(),i=(0,b.Z)(r,2),a=i[0],s=i[1],o=(0,E.y1)((function(e){var n=(0,G.Z)((0,G.Z)({},Object.fromEntries(a)),{},{search:e});delete n.page,""===e&&delete n.search,s(n)}),1e3);return(0,D.jsxs)(be,{children:[O.lC,(0,D.jsx)(Ce,{name:"nameWarehouses",type:"text",autoComplete:"on",autoFocus:!0,value:n,onChange:function(e){return n=e.target.value,t(n),void o(n);var n}})]})},ke=function(){var e,n=me(),t=(0,b.Z)(n,2),r=t[0],i=t[1],a=je(),s=(0,b.Z)(a,5),o=s[0],c=s[1],u=s[2],l=s[3],d=s[4],f=(0,C.useState)(""),p=(0,b.Z)(f,2),h=p[0],x=p[1],v=(0,w.lr)(),g=null!==(e=(0,b.Z)(v,1)[0].get("search"))&&void 0!==e?e:"";return(0,C.useEffect)((function(){x(g)}),[g]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("h2",{children:O.xl}),(0,D.jsx)(Y,{city:o}),o&&(0,D.jsx)(we,{searchText:h,handlerChangeText:x}),r.length>0&&(0,D.jsx)(ne,{filters:r}),c.length>0&&(0,D.jsx)(pe,{foundWarehouses:c}),(0,D.jsx)(ge,{totalElement:l,currentPage:d}),u||i?(0,D.jsx)(ye.Z,{}):""]})}},4694:function(e,n,t){t.d(n,{fN:function(){return g},il:function(){return C},nK:function(){return j},tV:function(){return m},uZ:function(){return x}});var r=t(5861),i=t(7757),a=t.n(i),s=t(1243),o=t(7532),c="3b13b4f3bbf7d62fa77c4bcdea3099c7",u="https://api.novaposhta.ua/v2.0/json/",l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{apiKey:c,modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:e,Phone:n}]}}},d=function(e){return{apiKey:c,modelName:"Address",calledMethod:"searchSettlements",methodProperties:{CityName:e,Limit:"10",Page:"1"}}},f=function(e,n,t,r){return{apiKey:c,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityRef:e,Page:t,Limit:o.j,Language:"UA",TypeOfWarehouseRef:n,FindByString:r}}},p=function(){return{apiKey:c,modelName:"Address",calledMethod:"getWarehouseTypes",methodProperties:{}}},h=function(e){return{apiKey:c,modelName:"Address",calledMethod:"getCities",methodProperties:{Ref:e,Page:"1",Limit:"20"}}};function x(e,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(u,l(t),{signal:n.signal});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(u,d(t),{signal:n.signal});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function e(n){var t,r,i,o,c,l,d,p,h;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.controller,r=n.cityRef,i=n.typeOfWarehouseRef,o=void 0===i?"":i,c=n.page,l=void 0===c?1:c,d=n.searchText,p=void 0===d?"":d,e.next=3,s.Z.post(u,f(r,o,l,p),{signal:t.signal});case 3:return h=e.sent,e.abrupt("return",h);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(u,p(),{signal:n.signal});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(u,h(t),{signal:n.signal});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.79d0204c.chunk.js.map