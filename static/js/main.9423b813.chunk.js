(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(10),c=n.n(r),l=(n(26),n(27),n(28),n(19)),u=n(36),i=n(37),d=n(38),m=n(46),s=n(39),f=n(45),E=n(8),p={addtodo:function(e){return{type:"ADD_TODO",payload:e}}},h=Object(E.b)((function(e){return{}}),p)((function(e){var t=e.addtodo,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],E=r[1],p=function(e){if(e.preventDefault(),""===c)return alert("Enter Something");var n={title:c,id:Object(f.a)()};t(n),E("")};return o.a.createElement(u.a,{className:"form",onSubmit:p},o.a.createElement(i.a,null,o.a.createElement(d.a,{type:"text",name:"text",id:"todo input",value:c,onChange:function(e){return E(e.target.value)}}),o.a.createElement(m.a,{addonType:"prepend"},o.a.createElement(s.a,{onClick:p},"Add"))))})),v=n(40),O=n(43),b=n(44),y=n(41),g=n(42),D={removetodo:function(e){return{type:"REMOVE_TODO",payload:e}}},w=Object(E.b)((function(e){return{todos:e}}),D)((function(e){var t=e.todos,n=e.removetodo;return t===[]?"":o.a.createElement(v.a,null,o.a.createElement(y.a,null,t.map((function(e){return o.a.createElement(g.a,{key:e.id},e.title,o.a.createElement("span",{className:"float-right",onClick:function(){return t=e.id,void n(t);var t}},"Done"))}))))})),j=n(12),k=n(20),x=[],T=Object(j.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(k.a)(e),[t.payload]);case"REMOVE_TODO":return e.filter((function(e){return e.id!==t.payload}));default:return e}})),A=function(){return o.a.createElement(E.a,{store:T},o.a.createElement(v.a,{className:"themed-container"},o.a.createElement(O.a,null,o.a.createElement(b.a,{md:{offset:"4",size:"6"},sm:"10"},o.a.createElement("h4",null,"To Do App (React and Redux)"))),o.a.createElement(O.a,null,o.a.createElement(b.a,{md:{offset:"3",size:"6"},sm:"10"},o.a.createElement(w,null))),o.a.createElement(O.a,null,o.a.createElement(b.a,{md:{offset:"3",size:"6"},sm:"10"},o.a.createElement(h,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.9423b813.chunk.js.map