(this.webpackJsonpreact_todo_crash=this.webpackJsonpreact_todo_crash||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),i=n(8),c=n.n(i),a=n(6),s=n(2),d=n(3),l=n(5),p=n(4),u=n(0),b=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{background:"#f4f4f4",color:"#000",padding:"10px",display:"flex",justifyContent:"space-between",borderBottom:"1px #ccc dotted"}},t.ParagraghStyling=function(){return{display:"inline-block",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{style:this.getStyle(),children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",onChange:function(){return t.props.markComplete(t.props.todo.id)}}),Object(u.jsx)("p",{style:this.ParagraghStyling(),children:this.props.todo.title})]}),Object(u.jsx)("button",{type:"button",style:f,onClick:function(){return t.props.Deleteitem(t.props.todo.id)},children:"Del"})]})}}]),n}(o.Component),f={padding:"10px",backgroundColor:"#5cb85c",color:"#ffff",border:"none",fontSize:"20px",borderRadius:"5px",cursor:"pointer"},h=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todos.map((function(e){return Object(u.jsx)(b,{todo:e,markComplete:t.props.markComplete,Deleteitem:t.props.Deletelist},e.id)}));return Object(u.jsx)("div",{style:{width:"50%",margin:"0 auto"},children:e})}}]),n}(o.Component),j=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={inputtext:""},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(u.jsx)("input",{type:"text",style:m,onChange:function(e){return t.setState({inputtext:e.target.value})},value:this.state.inputtext}),Object(u.jsx)("button",{type:"button",style:x,onClick:function(){return t.props.AddItem(t.state.inputtext)},children:"ADD"})]})}}]),n}(o.Component),m={padding:"10px",fontSize:"20px",borderRadius:"10px"},x={padding:"10px",backgroundColor:"red",color:"#ffff",border:"none",fontSize:"20px",borderRadius:"5px",cursor:"pointer"},O=j,g=(n(14),function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={todos:[{id:1,title:"Take out the trash",completed:!1},{id:2,title:"Prepare for office",completed:!1},{id:3,title:"Go To office",completed:!1}]},t.markComplete=function(e){var n=Object(a.a)(t.state.todos).map((function(t){return t.id===e?(t.completed=!t.completed,t):t}));t.setState({todos:n})},t.DeletelistHandler=function(e){var n=Object(a.a)(t.state.todos).filter((function(t){return t.id!==e}));t.setState({todos:n})},t.AddItemHandler=function(e){if(t.state.todos.length>0){var n=Object(a.a)(t.state.todos),o=n[n.length-1].id;n.push({id:o+1,title:e,completed:!1}),t.setState({todos:n})}else t.setState({todos:[{id:1,title:e,completed:!1}]})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{style:{marginBottom:"20px"},children:"TODO LIST ASSIGNMENT"}),Object(u.jsx)(O,{AddItem:this.AddItemHandler}),Object(u.jsx)(h,{todos:this.state.todos,markComplete:this.markComplete,Deletelist:this.DeletelistHandler})]})}}]),n}(o.Component)),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),o(t),r(t),i(t),c(t)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.f2a5fa91.chunk.js.map