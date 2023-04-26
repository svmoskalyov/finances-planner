"use strict";(self.webpackChunkfinances_planner=self.webpackChunkfinances_planner||[]).push([[760],{9899:function(n,e,t){t.d(e,{d:function(){return l}});var a=t(1413),s=t(7978),o=t(3145),c=t(4958),r=t(184),i=s.c.Option,l=function(n){return(0,r.jsxs)(i,(0,a.Z)((0,a.Z)({},n),{},{children:[(0,r.jsx)(o.Z,{name:n.data.value,width:18,height:18,secondaryClassName:c.Z.categoryIcon}),n.data.label]}))}},9760:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var a=t(9439),s=t(2426),o=t.n(s),c=t(3145),r="TransactionsItem_transactionItem__I4efX",i="TransactionsItem_commentWrapper__NOBZi",l="TransactionsItem_transactionThumb__8EK3s",d="TransactionsItem_thumb__siEpA",m="TransactionsItem_transactionDate__i0qAD",u="TransactionsItem_transactionComment__otRnm",_="TransactionsItem_transactionSum__heA7p",h="TransactionsItem_transactionCategory__udzxZ",p="TransactionsItem_buttonThumb__g1kfu",x="TransactionsItem_buttonItem__xDui1",f=t(184),v=function(n){var e=n.openModal,t=n.id,a=n.sum,s=n.date,v=n.category,j=n.comment,b=n.handleRemoveTransaction;return(0,f.jsxs)("li",{className:r,children:[(0,f.jsxs)("div",{className:l,children:[(0,f.jsxs)("div",{className:i,children:[(0,f.jsx)("p",{className:m,children:o()(s).format("MM.YYYY")}),(0,f.jsx)("p",{className:u,children:j})]}),(0,f.jsx)("div",{children:(0,f.jsxs)("p",{className:_,children:[a," \u20b4"]})})]}),(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("p",{className:h,children:v}),(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("button",{className:x,type:"button",onClick:function(){return e({id:t,sum:a,date:s,category:v,comment:j})},children:(0,f.jsx)(c.Z,{name:"icon-pencil",width:"22",height:"22",className:"icon-pencil"})}),(0,f.jsx)("button",{className:x,type:"button",onClick:function(){return b(t,s)},children:(0,f.jsx)(c.Z,{name:"icon-trash",width:"24",height:"24",className:"icon-trash"})})]})]})]},t)},j="Transactions_transactionList__76l1J",b="Transactions_formWrapper__jwN96",N="Transactions_formLabel__k1ayP",g="Transactions_formInput__tc3pe",I="Transactions_buttonEdit__vYe-K",T="Transactions_buttonCloseModal__xCCdw",y="Transactions_noTransactionWrapper__wWn6x",C="Transactions_noTransactionText__ncH1P",M="Transactions_options__100NG",Z="Transactions_overlayAddIncome__YfVME",A="Transactions_modalWrapper__BOCR6",w="Transactions_labelForSelector__RwlCT",S="Transactions_labelText__Vti7J",D="Transactions_flex__8v7Ld",E="Transactions_error__8eB8D",k=t(1413),q=t(4164),R=t(8630),Y=t(9434),L=t(4958),P=t(2791),F=t(9886),W=t(3255),O=t(9899),V=t(5705),J=t(8007),B=t(318),H=document.querySelector("#modal-root"),K=function(n){var e=n.closeModal,t=n.transactionData,s=t.id,o=t.sum,r=t.comment,i=t.category,l=t.date,d=(0,P.useState)(i),m=(0,a.Z)(d,2),u=m[0],_=m[1],h=(0,P.useState)(o),p=(0,a.Z)(h,1)[0],x=(0,P.useState)(r),v=(0,a.Z)(x,1)[0],j=(0,Y.v9)(F.Dw),y=(0,Y.I0)();(0,P.useEffect)((function(){y((0,B.n3)())}),[y]);var C=j.map((function(n){return{value:n.name,label:n.title}})),K=function(n){_(n.value)};return(0,q.createPortal)((0,f.jsx)("div",{className:Z,children:(0,f.jsx)("div",{className:A,children:(0,f.jsx)(V.J9,{initialValues:{type:"expense",category:u,comment:v||"no comment",sum:Number(p)},validationSchema:J.object({category:J.string().required("Required"),comment:J.string().required("Required").min(4,"Must be 4 characters or more").max(80,"Must be 80 characters or less"),sum:J.number().required("Required")}),onSubmit:function(n,t){var a=t.setSubmitting,o=new Date(l),c=o.getFullYear(),r=o.getMonth()+1;y((0,W.Ld)({id:s,values:(0,k.Z)((0,k.Z)({},n),{},{category:u}),date:{year:c,month:r}})),e(),a(!1)},children:function(n){var t=n.errors,a=n.touched;n.values;return(0,f.jsxs)(V.l0,{className:b,children:[(0,f.jsxs)("label",{className:w,children:[(0,f.jsx)("p",{className:S,children:"Per category"}),(0,f.jsx)(R.ZP,{onChange:K,value:u?C.find((function(n){return n.value===u})):"",isSearchable:!1,placeholder:u,className:"select-container",classNamePrefix:"select",options:C,name:"category",components:{Option:O.d}}),(0,f.jsx)("div",{className:M})]}),(0,f.jsxs)("div",{className:D,children:[(0,f.jsxs)("label",{className:N,style:{outline:"".concat(a.comment&&t.comment?"1px solid red":"none")},children:["Expense comment",(0,f.jsx)(V.gN,{className:g,type:"text",name:"comment",placeholder:"Enter comment"}),a.comment&&t.comment&&(0,f.jsx)("div",{className:E,children:t.comment})]}),(0,f.jsxs)("label",{className:N,style:{outline:"".concat(a.sum&&t.sum?"1px solid red":"none")},children:["Sum",(0,f.jsx)(V.gN,{className:g,type:"text",name:"sum",placeholder:"00.00"}),a.sum&&t.sum&&(0,f.jsx)("div",{className:E,children:t.sum})]}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{className:I,type:"submit",children:"Edit"})}),(0,f.jsx)("button",{className:T,type:"button",onClick:function(){return e()},children:(0,f.jsx)(c.Z,{name:"icon-close",width:24,height:24,secondaryClassName:L.Z.iconClose})})]})]})}})})}),H)},U=t(5087),z=function(){var n=(0,Y.v9)(U.Fw),e=(0,P.useState)(null),t=(0,a.Z)(e,2),s=t[0],o=t[1],c=(0,Y.I0)(),r=function(n){o(n)},i=function(n,e){var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1;c((0,W.qL)({id:n,date:{year:a,month:s}}))};return(0,f.jsxs)(f.Fragment,{children:[0===(null===n||void 0===n?void 0:n.length)?(0,f.jsx)("div",{className:y,children:(0,f.jsx)("p",{className:C,children:"You have no transactions"})}):(0,f.jsx)("ul",{className:j,children:n&&n.map((function(n){var e=n._id,t=n.sum,a=n.comment,s=n.category,o=n.date;return(0,f.jsx)(v,{openModal:r,id:e,sum:t,comment:a,category:s,date:o,handleRemoveTransaction:i},e)}))}),s&&(0,f.jsx)(K,{closeModal:function(){return o(null)},transactionData:s})]})}},9886:function(n,e,t){t.d(e,{AD:function(){return a},Dw:function(){return s},nS:function(){return o}});var a=function(n){return n.expenses.presaving},s=function(n){return n.expenses.category},o=function(n){return n.expenses.isLoading}},5087:function(n,e,t){t.d(e,{Fw:function(){return o},Vw:function(){return c},eE:function(){return r}});var a=t(1413),s=t(6916),o=function(n){return n.statistics.transactions},c=function(n){return n.statistics.isLoading},r=(0,s.P1)([function(n){return n.statistics.categoriesStat}],(function(n){var e=n.reduce((function(n,e){return n+e.amount}),0);return n.map((function(n){return(0,a.Z)((0,a.Z)({},n),{},{percentage:(n.amount/e*100).toFixed(1)})}))}))},4958:function(n,e){e.Z={overlayAddIncome:"MoadlAddIncome_overlayAddIncome__1P5D8",modalWrapper:"MoadlAddIncome_modalWrapper__TwlUa",modalAddIncome:"MoadlAddIncome_modalAddIncome__Od7vw",modalInput:"MoadlAddIncome_modalInput__ZH85Z",btnContainer:"MoadlAddIncome_btnContainer__ELtRK",btnAdd:"MoadlAddIncome_btnAdd__dTtCU",btnClose:"MoadlAddIncome_btnClose__nIubc",btnSvg:"MoadlAddIncome_btnSvg__Q6jjo",iconClose:"MoadlAddIncome_iconClose__owHnM",categoryIcon:"MoadlAddIncome_categoryIcon__C4OJV"}}}]);
//# sourceMappingURL=760.18f5c4a9.chunk.js.map