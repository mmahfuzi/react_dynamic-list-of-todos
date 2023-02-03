(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),a=c(2),i=c(1),r=(c(12),c(13),c(3)),l=c.n(r);function o(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var d=function(){return o("/todos")},j=function(e){var t=e.trim().toLowerCase();return d().then((function(e){return e.filter((function(e){return e.title.toLowerCase().includes(t)}))}))},u=c(0),b=function(e){var t=e.appTodo,c=e.setTodo,n=e.onCheck,s=e.onSelect,r=e.selected,o=Object(i.useState)([]),j=Object(a.a)(o,2),b=j[0],h=j[1];return Object(i.useEffect)((function(){d().then(h)}),[]),Object(i.useEffect)((function(){h(t)}),[t]),Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:b.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered"}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:l()("has-text-success",{"has-text-danger":!e.completed}),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){n(!0),c(e),s(e.id)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:l()("far",{"fa-eye":r!==e.id},{"fa-eye-slash":r===e.id})})})})})]},e.id)}))})]})},h=c(6),O=c(4),f=c.n(O),m=function(e){var t=e.onFilter,c=Object(i.useState)(""),n=Object(a.a)(c,2),s=n[0],r=n[1],l=Object(i.useCallback)(function(){var e=Object(h.a)(f.a.mark((function e(c){var n,s,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("all"!==c){e.next=5;break}return e.next=3,d();case 3:n=e.sent,t(n);case 5:if("completed"!==c){e.next=10;break}return e.next=8,d().then((function(e){return e.filter((function(e){return e.completed}))}));case 8:s=e.sent,t(s);case 10:if("active"!==c){e.next=15;break}return e.next=13,d().then((function(e){return e.filter((function(e){return!e.completed}))}));case 13:a=e.sent,t(a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),o=function(){var e=Object(h.a)(f.a.mark((function e(c){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(c);case 2:n=e.sent,t(n),r(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){d().then((function(){return l}))})),Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return l(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return o(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){o(""),r("")}})})]})]})},x=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.todo,c=e.onCheck,n=e.onSelect,s=Object(i.useState)(),r=Object(a.a)(s,2),d=r[0],j=r[1],b=Object(i.useState)(!0),h=Object(a.a)(b,2),O=h[0],f=h[1];return setTimeout((function(){f(!1)}),300),Object(i.useEffect)((function(){var e;(e=t.userId,o("/users/".concat(e))).then(j)}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),!O||null!==d&&void 0!==d&&d.id?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(!1),n(0)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(u.jsx)("strong",{className:l()("has-text-success",{"has-text-danger":!t.completed}),children:t.completed?"Done":"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===d||void 0===d?void 0:d.email),children:null===d||void 0===d?void 0:d.name})]})]})]}):Object(u.jsx)(x,{})]})},v=function(){var e=Object(i.useState)(),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)([]),r=Object(a.a)(s,2),l=r[0],o=r[1],j=Object(i.useState)([]),h=Object(a.a)(j,2),O=h[0],f=h[1],v=Object(i.useState)(!1),N=Object(a.a)(v,2),y=N[0],k=N[1],g=Object(i.useState)(0),S=Object(a.a)(g,2),C=S[0],w=S[1];return Object(i.useEffect)((function(){var e;e=C,d().then((function(t){return t.find((function(t){return t.id===e}))||null}))})),Object(i.useEffect)((function(){d().then(o)}),[]),Object(i.useEffect)((function(){o(l)}),[l]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(m,{onFilter:f})}),Object(u.jsx)("div",{className:"block",children:l.length?Object(u.jsx)(b,{appTodo:O,setTodo:n,onCheck:k,onSelect:w,selected:C}):Object(u.jsx)(x,{})})]})})}),c&&y&&Object(u.jsx)(p,{todo:c,onCheck:k,onSelect:w})]})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.23afb9a9.chunk.js.map