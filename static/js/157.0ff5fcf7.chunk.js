"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[157],{4020:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i=t(5243),o=t(4164),a=t(168),s=t(6444).default.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n"]))),u=t(184),c=document.querySelector("#modal-root"),d=function(){return(0,o.createPortal)((0,u.jsx)(s,{className:"overlay",children:(0,u.jsx)(i.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}),c)}},7532:function(n,e,t){t.d(e,{a:function(){return i},j:function(){return r}});var r=50,i=/^\d{14}$/},6157:function(n,e,t){t.r(e),t.d(e,{default:function(){return sn}});var r,i,o,a,s,u,c,d,l,p,h,f,x,m,g,b=t(9439),v=t(2791),y=t(4373),w=t(7689),j=t(168),Z=t(6444),k=t(1215),N=Z.default.form(r||(r=(0,j.Z)(["\n  position: relative;\n  display: inline-block;\n"]))),S=Z.default.input(i||(i=(0,j.Z)(["\n  padding: 8px 16px;\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: ",";\n  border: ",";\n"])),k.a2,k.G9,k.Uk,k.ny),L=Z.default.button(o||(o=(0,j.Z)(["\n  position: absolute;\n  top: 2px;\n  right: 1px;\n\n  background-color: ",";\n  /* border-radius: ","; */\n  border: none;\n  padding: 2px 2px;\n  border-top-right-radius: ",";\n  border-bottom-right-radius: ",";\n  box-shadow: ",";\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    box-shadow: none;\n  }\n"])),k.a2,k.Uk,k.Uk,k.Uk,k.G9,k.BL),T=t(2876),C=t(1640),P=t(6403),A=t(184),D=function(){var n=(0,w.s0)(),e=(0,w.UO)().documentId,t=void 0===e?"":e,r=(0,v.useState)(t),i=(0,b.Z)(r,2),o=i[0],a=i[1];(0,v.useEffect)((function(){a(t)}),[t]);return(0,A.jsxs)("div",{children:[(0,A.jsx)("h2",{children:P.ii}),(0,A.jsxs)(N,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.numberTTN.value;n("".concat(T.l,"/").concat(t))},children:[(0,A.jsx)(S,{name:"numberTTN",type:"text",autoComplete:"on",autoFocus:!0,placeholder:P.j1,value:o,onChange:function(n){a(n.target.value)}}),(0,A.jsx)(L,{type:"submit",children:(0,A.jsx)(C.Z,{nameIcon:"icon-search",className:"iconSearch"})})]})]})},E=t(9434),U=function(n){return n.historyTTN.history},M=t(3777),B=Z.default.div(a||(a=(0,j.Z)(["\n  position: relative;\n  display: flex;\n\n  min-height: 120px;\n  padding: 10px 20px;\n\n  min-height: 150px;\n\n  max-height: 250px;\n  background: ",";\n  border: ",";\n  /* \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0442\u0435\u043d\u044c */\n  box-shadow: ",";\n  border-radius: ",";\n\n  @media screen and (max-width: ",") {\n    position: absolute;\n    top: 0;\n    right: 0;\n    border-color: ",";\n    min-height: 250px;\n\n    &.hiden {\n      position: absolute;\n      white-space: nowrap;\n      width: 1px;\n      height: 1px;\n      overflow: hidden;\n      border: 0;\n      padding: 0;\n      clip: rect(0 0 0 0);\n      clip-path: inset(50%);\n      margin: -1px;\n    }\n  }\n"])),k.a2,k.ny,k.G9,k.Zr,k.Mq,k.aw),F=Z.default.div(s||(s=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n"]))),I=Z.default.ul(u||(u=(0,j.Z)(["\n  display: block;\n  list-style-type: none;\n  overflow-y: auto;\n  padding-right: 8px;\n"]))),K=Z.default.li(c||(c=(0,j.Z)(["\n  cursor: pointer;\n\n  &:hover {\n    font-weight: bold;\n    color: ",";\n  }\n\n  &.Active {\n    font-weight: bold;\n    cursor: auto;\n  }\n"])),k.BL),R=Z.default.button(d||(d=(0,j.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 8px;\n  padding: 1px;\n  background-color: transparent;\n  cursor: pointer;\n\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  &:hover {\n    border-color: ",";\n    background-color: ",";\n  }\n"])),k.aw,k.BL),W=t(8820),z=function(n){var e=n.className,t=n.handlerClichHistory,r=(0,E.I0)(),i=(0,E.v9)(U),o=(0,w.s0)(),a=(0,w.UO)().documentId;return(0,A.jsx)(B,{id:"historyDocuments",className:e,children:(0,A.jsxs)(F,{children:[(0,A.jsx)("h2",{children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f"}),i.length>0&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(I,{children:i.map((function(n){return(0,A.jsx)(K,{className:n===a?"Active":"",onClick:function(){return e=n,o("".concat(T.l,"/").concat(e)),void t(!0);var e},children:n},n)}))}),(0,A.jsx)(R,{type:"buttom",onClick:function(){r((0,M.QQ)()),o("".concat(T.l))},children:(0,A.jsx)(W.XzY,{size:"16"})})]})]})})},G=Z.default.div(l||(l=(0,j.Z)(["\n  min-width: 30%;\n  min-height: 120px;\n  padding: 10px 20px;\n\n  flex-grow: 1;\n\n  background: ",";\n  border: ",";\n  /* \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0442\u0435\u043d\u044c */\n  box-shadow: ",";\n  border-radius: ",";\n"])),k.a2,k.ny,k.G9,k.Zr),O=Z.default.span(p||(p=(0,j.Z)(["\n  font-weight: bold;\n"]))),q=function(n){var e=n.informationTTN,t=e.Number,r=e.Status,i=e.WarehouseSender,o=e.WarehouseRecipient;return(0,A.jsx)(G,{children:e&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("h3",{children:["\u2116 ",t]}),(0,A.jsxs)("p",{children:[(0,A.jsx)(O,{children:P.Vu})," ",r]}),(0,A.jsxs)("p",{children:[(0,A.jsx)(O,{children:P.rF})," ",i]}),(0,A.jsxs)("p",{children:[(0,A.jsx)(O,{children:P.mL})," ",o]})]})})},H=Z.default.div(h||(h=(0,j.Z)(["\n  display: block;\n  height: 24px;\n  padding: 4px 4px 4px 16px;\n"]))),_=Z.default.p(f||(f=(0,j.Z)(["\n  color: ",";\n  font-size: 14px;\n  line-height: 1.2;\n"])),k.S_),Q=function(n){var e=n.information;return(0,A.jsx)(H,{children:(0,A.jsx)(_,{children:e})})},V=t(4020),X=Z.default.div(x||(x=(0,j.Z)(["\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n  gap: 20px;\n"]))),Y=Z.default.button(m||(m=(0,j.Z)(["\n  position: absolute;\n  right: 8px;\n  bottom: -24px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  border: ",";\n  background: ",";\n  box-shadow: ",";\n  width: 32px;\n  height: 32px;\n  padding: 1px;\n\n  @media screen and (min-width: ",") {\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    border: 0;\n    padding: 0;\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    margin: -1px;\n  }\n\n  &:hover {\n    border-color: ",";\n    /* background-color: ","; */\n  }\n"])),k.ny,k.a2,k.G9,k.Mq,k.aw,k.BL),$=Z.default.div(g||(g=(0,j.Z)(["\n  position: relative;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),J=t(5861),nn=t(7757),en=t.n(nn),tn=t(4694),rn=t(7532),on=function(){var n=(0,E.I0)(),e=(0,w.UO)().documentId,t=void 0===e?"":e,r=(0,v.useState)(""),i=(0,b.Z)(r,2),o=i[0],a=i[1],s=(0,v.useState)(""),u=(0,b.Z)(s,2),c=u[0],d=u[1],l=(0,v.useState)(!1),p=(0,b.Z)(l,2),h=p[0],f=p[1];return(0,v.useEffect)((function(){if(d(""),a(""),t)if(rn.a.test(t)){var e=new AbortController;!function(){r.apply(this,arguments)}()}else d(P.Ud);function r(){return(r=(0,J.Z)(en().mark((function r(){var i,o;return en().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return f(!0),r.prev=1,r.next=4,(0,tn.uZ)(e,t);case 4:if(i=r.sent,(o=i.data).success){r.next=9;break}return d(P.NB),r.abrupt("return");case 9:n((0,M.oc)(t)),a(o.data[0]),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),d(P.fq);case 16:return r.prev=16,f(!1),r.finish(16);case 19:case"end":return r.stop()}}),r,null,[[1,13,16,19]])})))).apply(this,arguments)}}),[t,n]),[o,c,h]},an=function(){var n=(0,v.useState)(!1),e=(0,b.Z)(n,2),t=e[0],r=e[1];return(0,v.useEffect)((function(){var n=function(n){"Escape"===n.key&&r((function(n){return!n}))},e=function(n){n.target.closest("#historyDocuments")||n.target.closest("#buttonHistoryDocuments")||r((function(n){return!n}))};return window.addEventListener("keydown",n),document.body.addEventListener("click",e),function(){window.removeEventListener("keydown",n),document.body.removeEventListener("click",e)}}),[]),[t]},sn=function(){var n=on(),e=(0,b.Z)(n,3),t=e[0],r=e[1],i=e[2],o=(0,v.useState)(!0),a=(0,b.Z)(o,2),s=a[0],u=a[1],c=an(),d=(0,b.Z)(c,1)[0];(0,v.useEffect)((function(){u(!0)}),[d]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)($,{children:[(0,A.jsx)(D,{}),(0,A.jsx)(Y,{type:"button",id:"buttonHistoryDocuments",onClick:function(){u((function(n){return!n}))},size:"16",children:(0,A.jsx)(y.ATn,{})})]}),(0,A.jsx)(Q,{information:r}),(0,A.jsxs)(X,{children:[(0,A.jsx)(q,{informationTTN:t}),(0,A.jsx)(z,{className:s?"hiden":"",handlerClichHistory:u})]}),i&&(0,A.jsx)(V.Z,{})]})}},4694:function(n,e,t){t.d(e,{fN:function(){return g},il:function(){return Z},nK:function(){return w},tV:function(){return v},uZ:function(){return x}});var r=t(5861),i=t(7757),o=t.n(i),a=t(1243),s=t(7532),u="3b13b4f3bbf7d62fa77c4bcdea3099c7",c="https://api.novaposhta.ua/v2.0/json/",d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{apiKey:u,modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:n,Phone:e}]}}},l=function(n){return{apiKey:u,modelName:"Address",calledMethod:"searchSettlements",methodProperties:{CityName:n,Limit:"10",Page:"1"}}},p=function(n,e,t,r){return{apiKey:u,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityRef:n,Page:t,Limit:s.j,Language:"UA",TypeOfWarehouseRef:e,FindByString:r}}},h=function(){return{apiKey:u,modelName:"Address",calledMethod:"getWarehouseTypes",methodProperties:{}}},f=function(n){return{apiKey:u,modelName:"Address",calledMethod:"getCities",methodProperties:{Ref:n,Page:"1",Limit:"20"}}};function x(n,e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post(c,d(t),{signal:e.signal});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post(c,l(t),{signal:e.signal});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(o().mark((function n(e){var t,r,i,s,u,d,l,h,f;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.controller,r=e.cityRef,i=e.typeOfWarehouseRef,s=void 0===i?"":i,u=e.page,d=void 0===u?1:u,l=e.searchText,h=void 0===l?"":l,n.next=3,a.Z.post(c,p(r,s,d,h),{signal:t.signal});case 3:return f=n.sent,n.abrupt("return",f);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post(c,h(),{signal:e.signal});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n,e){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post(c,f(t),{signal:e.signal});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=157.0ff5fcf7.chunk.js.map