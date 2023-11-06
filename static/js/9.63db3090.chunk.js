(this["webpackJsonpreact-portfolio-website"]=this["webpackJsonpreact-portfolio-website"]||[]).push([[9],{511:function(e,a,t){"use strict";t.r(a);var n=t(175),r=t.n(n),o=t(245),i=t(55),s=t(246),l=t(67),c=t(155),m=t(208),u=t(47),d=t(264),p=t(506),f=t(247),b=t.n(f),g=t(0),h=t.n(g),v=t(64),j=t(66),O=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,E=t(134),C=t(5),x=t(509),w=Object(E.a)((function(e){return{contactContainer:{height:"100vh"},heading:{color:"tomato",textAlign:"center",textTransform:"uppercase",marginBottom:"1rem"},form:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute"},input:{color:"#fff"},button:{marginTop:"1rem",color:"tomato",borderColor:"tan","&:disabled":{color:"grey",borderColor:"grey",cursor:"not-allowed"}},field:{margin:"1rem 0rem"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),y=Object(C.a)({root:{"& label.Mui-focused":{color:"tomato"},"& label":{color:"tan"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"tan"},"&:hover fieldset":{borderColor:"tan"},"&.Mui-focused fieldset":{color:"#fff",borderColor:"tan"}}}})(x.a);a.default=function(){var e=w(),a=Object(g.useState)({os:"",userAgent:"",ipinfo:{}}),t=Object(l.a)(a,2),n=t[0],f=t[1],E=Object(g.useState)(!1),C=Object(l.a)(E,2),x=C[0],N=C[1],k=Object(g.useState)({name:"",email:"",message:""}),M=Object(l.a)(k,2),S=M[0],I=M[1],W=Object(g.useState)({name:"",email:"",message:""}),q=Object(l.a)(W,2),T=q[0],A=q[1],P=function(){var e,a=!0,t={};return""===S.name.trim()&&(t.name="Name is required",a=!1),""===S.email.trim()?(t.email="Email is required",a=!1):(e=S.email,O.test(e)||(t.email="Invalid email address",a=!1)),""===S.message.trim()&&(t.message="Message is required",a=!1),A(t),a},J=function(e){var a=e.target,t=a.name,n=a.value;I(Object(s.a)(Object(s.a)({},S),{},Object(i.a)({},t,n))),P()},D=function(){var e=Object(o.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),e.prev=1,N(!0),!P()){e.next=13;break}return(t=new FormData).append("name",S.name),t.append("email",S.email),t.append("message",S.message),t.append("clientInfo",JSON.stringify(n)),e.next=11,b()({method:"post",url:"https://formspree.io/f/xqkvjyqv",data:t});case 11:v.toast.success("Message sent successfully"),I({name:"",email:"",message:""});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),v.toast.error("Message failed to send");case 18:return e.prev=18,N(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})));return function(a){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){var e=navigator.platform,a=navigator.userAgent;f((function(t){return Object(s.a)(Object(s.a)({},t),{},{os:e,userAgent:a})})),b.a.get("https://api.bigdatacloud.net/data/client-info").then((function(e){f((function(a){return Object(s.a)(Object(s.a)({},a),{},{ipinfo:null===e||void 0===e?void 0:e.data})}))})).catch((function(e){console.error("Error getting IP and location:",e)}))}),[]),h.a.createElement(c.a,{component:"div",className:e.contactContainer},h.a.createElement(m.a,{container:!0,justify:"center"},h.a.createElement(c.a,{component:"div",className:e.form},h.a.createElement(u.a,{variant:"h5",className:e.heading},"Get in touch"),h.a.createElement("form",{onSubmit:D},h.a.createElement(y,{fullWidth:!0,label:"Name",variant:"outlined",name:"name",inputProps:{className:e.input},value:S.name,onChange:J,error:!!T.name,helperText:T.name}),h.a.createElement(y,{fullWidth:!0,label:"Email",variant:"outlined",name:"email",inputProps:{className:e.input},className:e.field,value:S.email,onChange:J,error:!!T.email,helperText:T.email}),h.a.createElement(y,{fullWidth:!0,label:"Message",variant:"outlined",name:"message",multiline:!0,rows:4,inputProps:{className:e.input},value:S.message,onChange:J,error:!!T.message,helperText:T.message}),h.a.createElement(d.a,{type:"submit",variant:"outlined",fullWidth:!0,endIcon:!x&&h.a.createElement(p.a,null),className:e.button,disabled:x},x?h.a.createElement(j.b,{height:25,width:25,color:"tomato",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#250220",strokeWidth:2,strokeWidthSecondary:2}):"Contact Me")))))}}}]);
//# sourceMappingURL=9.63db3090.chunk.js.map