(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(6),a=n.n(r),s=n(4),o=n(8),j=n(17),l=n(0),u=function(t){var e=Object(c.useState)(""),n=Object(s.a)(e,2),i=n[0],r=n[1];return Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.length&&(t.setList((function(t){return[].concat(Object(o.a)(t),[{id:Object(j.a)(),title:i.trim(),done:!1}])})),r(""))},className:"form-input",children:[Object(l.jsx)("input",{type:"text",value:i,onChange:function(t){r(t.target.value)},className:"input",placeholder:"Type a task here and click add to list",maxLength:"45"}),Object(l.jsx)("button",{className:"addButton",children:"+ ADD TO LIST"})]})})},d=n(7),b=function(t){var e=t.list.map((function(e,n){return Object(l.jsxs)("div",{className:"li-container",children:[Object(l.jsx)("li",{className:"listItem",children:e.title},n),Object(l.jsx)("i",{onClick:function(){t.remove(e.id)},children:Object(l.jsx)(d.a,{})})]})}));return Object(l.jsx)("div",{className:"todo-container",children:Object(l.jsx)("ul",{children:e})})};var O=function(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"LET'S STRUCTURE YOUR DAY"})})};var h=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{}),Object(l.jsx)(u,{setList:i}),Object(l.jsx)(b,{list:n,remove:function(t){var e=n.filter((function(e){return e.id!==t}));i(e)},check:function(t){i((function(e){return e.filter((function(e){return e.id===t&&(e.done=!e.done),e}))}))}})]})};n(14);a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2776bf83.chunk.js.map