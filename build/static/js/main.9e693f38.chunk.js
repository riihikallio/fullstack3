(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(14),l=t(2),i=t(3),m=t.n(i),d=function(){return m.a.get("/persons").then(function(e){return e.data})},f=function(e){return m.a.post("/persons",e).then(function(e){return e.data})},s=function(e){return m.a.put("".concat("/persons","/").concat(e.id),e).then(function(e){return e.data})},b=function(e){return m.a.delete("".concat("/persons","/").concat(e))},h=(t(38),function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)}),E=function(e){var n=e.filter,t=e.handler;return r.a.createElement("p",null,"Filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},v=function(e){var n=e.submit,t=e.name,a=e.nameHandler,c=e.number,u=e.numberHandler;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},p=function(e){var n=e.rows;return r.a.createElement("div",null,n)},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),m=i[0],w=i[1],g=Object(a.useState)(""),j=Object(l.a)(g,2),O=j[0],C=j[1],k=Object(a.useState)(""),S=Object(l.a)(k,2),y=S[0],H=S[1],L=Object(a.useState)(null),D=Object(l.a)(L,2),F=D[0],J=D[1],N=function(e){J(e),setTimeout(function(){J(null)},5e3)};Object(a.useEffect)(function(){d().then(function(e){return c(e)}).catch(N("Retrieving list..."))},[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(h,{message:F}),r.a.createElement("h2",null,"Filter"),r.a.createElement(E,{filter:y,handler:function(e){H(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(v,{submit:function(e){e.preventDefault();var n=t.find(function(e){return e.name.toLowerCase()===m.toLowerCase()});if(n){if(window.confirm("".concat(m," is already added to phonebook, replace the old phone number with the new one?"))){var a=Object(o.a)({},n,{number:O});s(a).then(function(e){var r=t.filter(function(e){return e.id!==n.id});r.push(a),c(r),w(""),C(""),N("'".concat(a.name,"' edited"))}).catch(N("Error adding '".concat(a.name,"'")))}}else{var r={name:m,number:O};c(t.concat(r)),f(r).then(function(e){c(t.concat(e)),w(""),C(""),N("'".concat(r.name,"' added"))}).catch(N("Error adding '".concat(r.name,"'")))}},name:m,nameHandler:function(e){w(e.target.value)},number:O,numberHandler:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(p,{rows:t.filter(function(e){return e.name.toLowerCase().includes(y.toLowerCase())}).map(function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return n=e,void(window.confirm("Delete ".concat(n.name))&&b(n.id).then(function(e){c(t.filter(function(e){return e.id!==n.id})),N("'".concat(n.name,"' was deleted"))}).catch(N("Error deleting '".concat(n.name,"'"))));var n}},"Delete"))})}))};u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9e693f38.chunk.js.map