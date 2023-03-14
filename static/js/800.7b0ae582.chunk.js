"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[800],{4020:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i=t(5243),a=t(4164),o=t(168),u=t(6444).default.div(r||(r=(0,o.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n"]))),s=t(184),c=document.querySelector("#modal-root"),d=function(){return(0,a.createPortal)((0,s.jsx)(u,{className:"overlay",children:(0,s.jsx)(i.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}),c)}},7532:function(n,e,t){t.d(e,{j:function(){return r}});var r=50},9800:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,i,a,o,u,s,c,d,p,l,f,h,x=t(5861),m=t(9439),g=t(7757),v=t.n(g),b=t(2791),y=t(7689),j=t(9434),Z=t(168),w=t(6444),k=w.default.form(r||(r=(0,Z.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n"]))),N=w.default.input(i||(i=(0,Z.Z)(["\n  border-radius: 10px;\n  padding: 8px 16px;\n"]))),T=w.default.button(a||(a=(0,Z.Z)(["\n  border-radius: 10px;\n  padding: 4px 8px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: blue;\n  }\n"]))),S=t(6403),C=t(184),P=function(){var n=(0,y.s0)(),e=(0,y.UO)().documentId,t=void 0===e?"":e,r=(0,b.useState)(t),i=(0,m.Z)(r,2),a=i[0],o=i[1];(0,b.useEffect)((function(){o(t)}),[t]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("h2",{children:S.ii}),(0,C.jsxs)(k,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.numberTTN.value;n("/documents/".concat(t))},children:[(0,C.jsx)(N,{name:"numberTTN",type:"text",autoComplete:"on",autoFocus:!0,placeholder:S.j1,value:a,onChange:function(n){o(n.target.value)}}),(0,C.jsx)(T,{type:"submit",children:S.lR})]})]})},A=function(n){return n.historyTTN.history},F=t(3777),L=w.default.div(o||(o=(0,Z.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  min-width: 30%;\n  min-height: 120px;\n  padding: 10px 20px;\n\n  max-height: 150px;\n\n  border: 1px solid gray;\n  border-radius: 20px;\n"]))),R=w.default.ul(u||(u=(0,Z.Z)(["\n  display: block;\n  list-style-type: none;\n  overflow-y: auto;\n"]))),K=w.default.li(s||(s=(0,Z.Z)(["\n  cursor: pointer;\n\n  &:hover {\n    font-weight: bold;\n  }\n\n  &.Active {\n    font-weight: bold;\n    cursor: auto;\n  }\n"]))),W=w.default.button(c||(c=(0,Z.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  padding: 1px;\n  background-color: transparent;\n  cursor: pointer;\n\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  &:hover {\n    background-color: gray;\n  }\n"]))),D=t(2134),I=function(){var n=(0,j.I0)(),e=(0,j.v9)(A),t=(0,y.s0)(),r=(0,y.UO)().documentId;return(0,C.jsxs)(L,{children:[(0,C.jsx)("h2",{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f"}),e.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(R,{children:e.map((function(n){return(0,C.jsx)(K,{className:n===r?"Active":"",onClick:function(){t("/documents/".concat(n))},children:n},n)}))}),(0,C.jsx)(W,{type:"buttom",onClick:function(){n((0,F.QQ)()),t("/documents")},children:(0,C.jsx)(D.XzY,{size:"16"})})]})]})},M=w.default.div(d||(d=(0,Z.Z)(["\n  min-width: 30%;\n  min-height: 120px;\n  padding: 10px 20px;\n\n  flex-grow: 1;\n  border: 1px solid gray;\n  border-radius: 20px;\n"]))),O=w.default.span(p||(p=(0,Z.Z)(["\n  font-weight: bold;\n"]))),U=function(n){var e=n.informationTTN,t=e.Number,r=e.Status,i=e.WarehouseSender,a=e.WarehouseRecipient;return(0,C.jsx)(M,{children:e&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("h3",{children:["\u2116 ",t]}),(0,C.jsxs)("p",{children:[(0,C.jsx)(O,{children:S.Vu})," ",r]}),(0,C.jsxs)("p",{children:[(0,C.jsx)(O,{children:S.rF})," ",i]}),(0,C.jsxs)("p",{children:[(0,C.jsx)(O,{children:S.mL})," ",a]})]})})},z=t(4694),q=w.default.div(l||(l=(0,Z.Z)(["\n  display: block;\n  height: 24px;\n  padding: 4px;\n"]))),B=w.default.p(f||(f=(0,Z.Z)(["\n  color: red;\n"]))),E=function(n){var e=n.information;return(0,C.jsx)(q,{children:(0,C.jsx)(B,{children:e})})},Q=t(4020),V=t(6444).default.div(h||(h=(0,Z.Z)(["\n  margin-top: 10px;\n  display: flex;\n  gap: 20px;\n"]))),_=/^\d{14}$/,X=function(){var n=(0,j.I0)(),e=(0,y.UO)().documentId,t=void 0===e?"":e,r=(0,b.useState)(""),i=(0,m.Z)(r,2),a=i[0],o=i[1],u=(0,b.useState)(""),s=(0,m.Z)(u,2),c=s[0],d=s[1],p=(0,b.useState)(!1),l=(0,m.Z)(p,2),f=l[0],h=l[1];return(0,b.useEffect)((function(){if(d(""),o(""),t)if(_.test(t)){var e=new AbortController;!function(){r.apply(this,arguments)}()}else d(S.Ud);function r(){return(r=(0,x.Z)(v().mark((function r(){var i,a;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return h(!0),r.prev=1,r.next=4,(0,z.uZ)(e,t);case 4:if(i=r.sent,(a=i.data).success){r.next=9;break}return d(S.NB),r.abrupt("return");case 9:n((0,F.oc)(t)),o(a.data[0]),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),d(S.fq);case 16:return r.prev=16,h(!1),r.finish(16);case 19:case"end":return r.stop()}}),r,null,[[1,13,16,19]])})))).apply(this,arguments)}}),[t,n]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(P,{}),(0,C.jsx)(E,{information:c}),(0,C.jsxs)(V,{children:[(0,C.jsx)(U,{informationTTN:a}),(0,C.jsx)(I,{})]}),f&&(0,C.jsx)(Q.Z,{})]})}},4694:function(n,e,t){t.d(e,{fN:function(){return g},il:function(){return w},nK:function(){return j},tV:function(){return b},uZ:function(){return x}});var r=t(5861),i=t(7757),a=t.n(i),o=t(1243),u=t(7532),s="3b13b4f3bbf7d62fa77c4bcdea3099c7",c="https://api.novaposhta.ua/v2.0/json/",d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{apiKey:s,modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:n,Phone:e}]}}},p=function(n){return{apiKey:s,modelName:"Address",calledMethod:"searchSettlements",methodProperties:{CityName:n,Limit:"10",Page:"1"}}},l=function(n,e,t,r){return{apiKey:s,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityRef:n,Page:t,Limit:u.j,Language:"UA",TypeOfWarehouseRef:e,FindByString:r}}},f=function(){return{apiKey:s,modelName:"Address",calledMethod:"getWarehouseTypes",methodProperties:{}}},h=function(n){return{apiKey:s,modelName:"Address",calledMethod:"getCities",methodProperties:{Ref:n,Page:"1",Limit:"20"}}};function x(n,e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post(c,d(t),{signal:e.signal});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post(c,p(t),{signal:e.signal});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(e){var t,r,i,u,s,d,p,f,h;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.controller,r=e.cityRef,i=e.typeOfWarehouseRef,u=void 0===i?"":i,s=e.page,d=void 0===s?1:s,p=e.searchText,f=void 0===p?"":p,n.next=3,o.Z.post(c,l(r,u,d,f),{signal:t.signal});case 3:return h=n.sent,n.abrupt("return",h);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post(c,f(),{signal:e.signal});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,e){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post(c,h(t),{signal:e.signal});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=800.7b0ae582.chunk.js.map