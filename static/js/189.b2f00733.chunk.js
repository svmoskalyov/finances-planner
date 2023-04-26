"use strict";(self.webpackChunkfinances_planner=self.webpackChunkfinances_planner||[]).push([[189],{6717:function(e,n,t){t.d(n,{Z:function(){return r}});var a="Section_vectorImg__zw3S9",l=t(184),r=function(e){var n=e.children;return(0,l.jsx)("section",{className:a,children:n})}},4189:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var a=t(3409),l=t(4942),r=t(1413),s=t(9439),o=t(2791),c=t(9434),i=t(2755),u=t(5103),d=[{title:"RFP of both spouses, \u20b4",name:"salary",type:"text",placeholder:"75 000"},{title:"Passive income, months, \u20b4",name:"passiveIncome",type:"text",placeholder:"Enter text"},{title:"Savings, \u20b4",name:"savings",type:"text",placeholder:"Enter text"},{title:"Specify the cost of your future apartment, \u20b4",name:"cost",type:"text",placeholder:"90 000"},{title:"Specify the number of sq.m. of your future apartment",name:"footage",type:"text",placeholder:"Enter text"},{title:"Accumulation, %",name:"procent",type:"text",placeholder:"Enter text"}],m="InputForm_label__xJ7fv",p="InputForm_span__CqJO7",_="InputForm_input__JQ+ft",h="InputForm_error__h3B-n",f=t(184),v=function(e){var n=e.onChange,t=e.options,a=e.values,l=e.onBlur,r=e.errors,s=void 0===r?[]:r,o=(0,c.v9)(i.Cx);return(0,f.jsx)(f.Fragment,{children:t.map((function(e,t){return(0,f.jsxs)("label",{className:m,children:[(0,f.jsxs)("span",{className:p,children:[t+1+". ",e.title]}),(0,f.jsx)("input",{required:!0,autoComplete:"off",className:_,type:e.type,name:e.name,value:a[null===e||void 0===e?void 0:e.name]||"",onChange:n,onBlur:l,placeholder:e.placeholder,disabled:!("savings"!==e.name||!o)}),s.includes(e.name)&&(0,f.jsx)("span",{className:h,children:" invalid value "})]},e.name)}))})},x=t(4289),b="ResultForm_box__BPZG-",j="ResultForm_title__-zEMh",N="ResultForm_list__lvVlU",y="ResultForm_item__qbVxC",C="ResultForm_text__H+eFW",g="ResultForm_res__5W2t1",F="ResultForm_buttonFits__LFnXS",S="ResultForm_buttonBalance__dlb4b",A=function(e){var n=e.openModal,t=e.onClick,a=(0,c.v9)(i.qC),l=(0,c.v9)(x.RE);return(0,f.jsxs)("div",{className:b,children:[(0,f.jsx)("h2",{className:j,children:"You will have an apartment in:"}),(0,f.jsxs)("ul",{className:N,children:[(0,f.jsxs)("li",{className:y,children:[(0,f.jsx)("p",{className:C,children:"Number of years"}),(0,f.jsxs)("p",{className:g,children:[a.year," years"]})]}),(0,f.jsxs)("li",{className:y,children:[(0,f.jsx)("p",{className:C,children:"Number of months"}),(0,f.jsxs)("p",{className:g,children:[a.month," months"]})]}),(0,f.jsxs)("li",{className:y,children:[(0,f.jsx)("button",{className:F,type:"button",onClick:t,children:"Fits"}),!l&&(0,f.jsx)("button",{className:S,type:"button",onClick:n,children:"Add Balance"})]})]})]})},Z=t(3145),B="ModalAddBalance_overlayAddIncome__uiJZA",M="ModalAddBalance_modalWrapper__5ApL1",I="ModalAddBalance_modalAddIncome__qYqtL",R="ModalAddBalance_modalInput__LRtN4",k="ModalAddBalance_btnContainer__cUmYC",V="ModalAddBalance_btnAdd__Bi-8a",q="ModalAddBalance_btnClose__zyVWf",w="ModalAddBalance_btnSvg__lAcxc",E="ModalAddBalance_iconClose__HAppv",J=t(4164),L=document.querySelector("#modal-root"),P=function(e){var n=e.closeModal,t=e.text,a=e.onSubmit,c=(0,o.useState)({balance:""}),i=(0,s.Z)(c,2),u=i[0],d=i[1];return(0,J.createPortal)((0,f.jsx)("div",{className:B,children:(0,f.jsxs)("div",{className:M,children:[(0,f.jsxs)("form",{className:I,onSubmit:function(e){e.preventDefault(),a(u),n()},children:[(0,f.jsx)("input",{required:!0,className:R,autoComplete:"off",type:"text",name:"balance",placeholder:t,value:u.balance,onChange:function(e){var n=e.target,t=n.name,a=n.value;d((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,l.Z)({},t,a))}))},pattern:"[0-9]*"}),(0,f.jsxs)("div",{className:k,children:[(0,f.jsx)("button",{className:V,type:"submit",children:"Add"}),(0,f.jsx)("button",{className:q,type:"button",onClick:n,children:"Cancel"})]})]}),(0,f.jsx)("button",{className:w,onClick:n,children:(0,f.jsx)(Z.Z,{name:"icon-close",width:24,height:24,className:E})})]})}),L)},W=t(5822);function z(e){if("number"===typeof e&&(e=e.toString()),"string"!==typeof e)return!1;var n=e.trim();if(!n)return!1;if(!/^[+-]?\d+(\.\d+)?$/.test(n))return!1;var t=parseFloat(n);return!(t<=0)&&t===parseFloat(e)}var O=function(e){var n=[];for(var t in e)z(e[t])||n.push(t),"procent"===t&&e[t]>100&&n.push(t);return n.length>0?{isValid:!1,errors:n}:{isValid:!0}},Q="PlanInputsList_form__Oi2eI",U="PlanInputsList_p__bnCRJ",Y=t(6061),H=function(){var e=(0,c.I0)(),n=(0,c.v9)(i.QJ),t=(0,c.v9)(x._),a=(0,c.v9)(i.ws),m=(0,o.useState)(n),p=(0,s.Z)(m,2),_=p[0],h=p[1],b=(0,o.useState)(!1),j=(0,s.Z)(b,2),N=j[0],y=j[1],C=(0,o.useState)(!1),g=(0,s.Z)(C,2),F=g[0],S=g[1],Z=(0,o.useState)(!1),B=(0,s.Z)(Z,2),M=B[0],I=B[1],R=(0,o.useState)([]),k=(0,s.Z)(R,2),V=k[0],q=k[1],w=(0,c.v9)(i.Cx);(0,o.useEffect)((function(){t&&h(n)}),[n,t]);var E=function(){var e=O(_);return{isValid:e.isValid,errors:e.errors}};return(0,f.jsxs)(f.Fragment,{children:[a&&(0,f.jsx)(Y.Z,{}),(0,f.jsx)("form",{className:Q,children:(0,f.jsx)(v,{onChange:function(e){var n=e.target,t=n.name,a=n.value;h((function(e){var n=(0,r.Z)((0,r.Z)({},e),{},(0,l.Z)({},t,a));return S(!0),I(!0),n}))},options:d,values:_,onBlur:function(){var n=Object.values(_).every((function(e){return""!==e})),t=E(),a=t.isValid,l=t.errors;if(n&&q(l),n&&a&&F){for(var r in _)"string"===typeof _[r]&&(_[r]=Number(_[r]));e((0,u.Qm)(_)),S(!1)}},errors:V})}),(0,f.jsx)("p",{className:U,children:"Specify the percentage that you would like to accumulate per month from the total amount of income and you will see when you reach the goal"}),(0,f.jsx)(A,{openModal:function(){return y(!0)},onClick:function(){var n=E().isValid;n&&!w?e((0,u.xS)(_)):n&&M&&(e((0,u.lV)(_)),I(!1))}}),N&&(0,f.jsx)(P,{text:"Enter balance",closeModal:function(){return y(!1)},onSubmit:function(n){var t={balance:Number(n.balance)};e((0,W.aU)(t))}})]})},D=t(6717),G=function(){return(0,f.jsx)(D.Z,{children:(0,f.jsx)(a.Z,{children:(0,f.jsx)(H,{})})})}}}]);
//# sourceMappingURL=189.b2f00733.chunk.js.map