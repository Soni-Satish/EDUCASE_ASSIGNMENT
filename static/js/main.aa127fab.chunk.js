(this.webpackJsonpeducase_assignment=this.webpackJsonpeducase_assignment||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},20:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),l=t.n(r),m=(t(6),t(2));var i=function(){const e=Object(m.p)();return o.a.createElement("div",{style:{position:"absolute",top:"500px",left:"20px"}},o.a.createElement("h5",{style:{font:"normal normal medium 28px/17px Rubik",color:"#1D2226"},className:"px-2"},"Welcome to PopX"),o.a.createElement("p",{style:{font:"normal normal normal 18px/26px",color:"#1D2226",opacity:"0.6"},className:"px-2"},"Lorem ipsum dolor sit amet. ",o.a.createElement("br",null)," consectetur adipisicing elit."),o.a.createElement("div",{class:"d-flex flex-column gap-2 align-items-center"},o.a.createElement("button",{style:{width:"335px",height:"46px",background:"#6C25FF 0% 0% no-repeat padding-box",borderRadius:"6px",textAlign:"center",color:"white",border:"none",font:"normal normal medium 16px/17px Rubik",cursor:"pointer"},onClick:()=>e("/Signup")},"Create Account"),o.a.createElement("button",{style:{width:"335px",height:"46px",background:"#6C25FF4B 0% 0% no-repeat padding-box",borderRadius:"6px",textAlign:"center",color:"#1D2226",cursor:"pointer",border:"none",font:"normal normal medium 16px/17px Rubik",fontWeight:600},onClick:()=>e("/Login")},"Already Registered?Login")))};var c=()=>{const e=Object(m.p)(),[a,t]=Object(n.useState)({email:"",password:""}),r=e=>{const{name:n,value:o}=e.target;t({...a,[n]:o})};return o.a.createElement("div",{className:"d-flex flex-column align-items-center"},o.a.createElement("div",{style:{textAlign:"left",width:"100%",marginLeft:30}},o.a.createElement("h5",{style:{font:"normal normal medium 28px/17px Rubik",color:"#1D2226",paddingTop:"50px",fontWeight:"bold",fontSize:"25px"},className:"px-2"},"Signin to your ",o.a.createElement("br",null)," PopX account"),o.a.createElement("p",{style:{font:"normal normal normal 18px/26px",color:"#1D2226",opacity:"0.6"},className:"px-2"},"Lorem ipsum dolor sit amet. ",o.a.createElement("br",null)," consectetur adipisicing elit.")),o.a.createElement("form",{class:"form-md"},o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{type:"email",id:"email",name:"email",className:"form-control",required:!0,onChange:e=>r(e)}),o.a.createElement("label",{for:"email"},"Email",o.a.createElement("span",{class:"gl-form-asterisk"}))),o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{type:"password",id:"pass",name:"password",className:"form-control",required:!0,onChange:e=>r(e)}),o.a.createElement("label",{for:"pass"},"Password",o.a.createElement("span",{class:"gl-form-asterisk"}))),o.a.createElement("button",{style:{width:"335px",height:"46px",background:a.email&&a.password?"#6C25FF 0% 0% no-repeat padding-box":"#CBCBCB 0% 0% no-repeat padding-box",borderRadius:"6px",textAlign:"center",color:"white",border:"none",font:"normal normal medium 16px/17px Rubik",cursor:"pointer"},onClick:()=>{a.email&&a.password&&e("/Home")}},"Login")))};var s=()=>{const e=Object(m.p)(),[a,t]=Object(n.useState)({email:"",password:"",mobile:"",name:"",companyName:"",agency:""}),r=e=>{console.log(e);const{name:n,value:o}=e.target;t({...a,[n]:o})};return console.log(a),o.a.createElement("div",{className:"d-flex flex-column align-items-center"},o.a.createElement("h5",{style:{font:"normal normal medium 28px/17px Rubik",color:"#1D2226",paddingTop:"50px",fontWeight:"bold",fontSize:"28px",width:"100%",textAlign:"left",marginLeft:"20px"},className:"px-2"},"Create your ",o.a.createElement("br",null)," PopX account"),o.a.createElement("form",{class:"form-md",onSubmit:()=>e("/Home")},o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{id:"form_name1",class:"form-control",name:"name",type:"text",required:!0,onChange:e=>r(e)}),o.a.createElement("label",{for:"form_name1"},"Full Name",o.a.createElement("span",{class:"gl-form-asterisk"}))),o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{id:"form_name3",class:"form-control",type:"number",name:"mobile",required:!0,onChange:e=>r(e)}),o.a.createElement("label",{for:"form_name3"},"Phone number",o.a.createElement("span",{class:"gl-form-asterisk"}))),o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{id:"form_name4",class:"form-control",type:"email",name:"email",required:!0,onChange:e=>r(e)}),o.a.createElement("label",{for:"form_name4"},"Email address",o.a.createElement("span",{class:"gl-form-asterisk"}))),o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{id:"form_name5",class:"form-control",type:"password",required:!0,onChange:e=>r(e),name:"password"}),o.a.createElement("label",{for:"form_name5"},"Password",o.a.createElement("span",{class:"gl-form-asterisk"}))),o.a.createElement("div",{class:"form-group"},o.a.createElement("input",{id:"form_name6",class:"form-control",type:"text",onChange:e=>r(e),name:"companyName"}),o.a.createElement("label",{for:"form_name6"},"Company Name")),o.a.createElement("div",{style:{position:"relative",textAlign:"left",width:"100%",padding:"0px 0px 0px 30px"}},o.a.createElement("p",null,"Are you an Agency?*s"),o.a.createElement("div",{class:"form-check form-check-inline "},o.a.createElement("input",{class:"form-check-input",type:"radio",name:"agency",id:"inlineRadio1",value:"Yes",onChange:e=>r(e)}),o.a.createElement("label",{class:"form-check-label",for:"inlineRadio1",style:{position:"relative",marginLeft:"-10px",marginTop:"10px"}},"Yes")),o.a.createElement("div",{class:"form-check form-check-inline"},o.a.createElement("input",{class:"form-check-input",type:"radio",name:"agency",id:"inlineRadio2",value:"No",onChange:e=>r(e)}),o.a.createElement("label",{class:"form-check-label",for:"inlineRadio2",style:{position:"relative",marginLeft:"-10px",marginTop:"10px"}},"No"))),o.a.createElement("button",{style:{width:"335px",height:"46px",background:"#642AF5 0% 0% no-repeat padding-box",borderRadius:"6px",textAlign:"center",color:"white",border:"none",font:"normal normal medium 16px/17px Rubik",cursor:"pointer",position:"absolute",left:"20px",bottom:20},type:"submit"},"Create Account")))},p=t(8),d=t.n(p),u=t(9),g=t.n(u);var f=()=>o.a.createElement("div",null,o.a.createElement("h5",{style:{font:"normal normal medium 28px/17px Rubik",color:"#1D2226",paddingTop:"5px",fontSize:"20px",background:"#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 3px 6px #00000007",opacity:"1",marginBottom:"20px",paddingBottom:"20px"},className:"px-2"},"Account Settings"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("img",{src:d.a,alt:"",style:{border:"1px solid black",height:"76px",width:"76px",borderRadius:"100%",overflow:"hidden",objectFit:"cover"}}),o.a.createElement("img",{src:g.a,alt:"",style:{position:"absolute",bottom:5,right:-10}}))),o.a.createElement("div",{className:"col-sm-9",style:{font:"normal normal medium 15px/19px Rubik"}},o.a.createElement("h6",null,"Marry Doe"),o.a.createElement("p",{style:{marginTop:-4}},"Marry@Gmail.Com"))),o.a.createElement("div",{style:{marginTop:20,color:"#1D2226",fontWeight:600}},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, perferendis obcaecati. Fugiat expedita optio pariatur perspiciatis! Commodi obcaecati eveniet facilis, laborum illum nesciunt!"))),x=t(3);var E=function(){return o.a.createElement("div",{style:{width:"375px",background:"#F7F8F9 0% 0% no-repeat padding-box",opacity:"1",position:"relative",height:"96vh"},className:"shadow-sm rounded mt-3"},o.a.createElement(x.a,null,o.a.createElement(m.d,null,o.a.createElement(m.b,{path:"/",element:o.a.createElement(i,null)}),o.a.createElement(m.b,{path:"/Login",element:o.a.createElement(c,null)}),o.a.createElement(m.b,{path:"/Signup",element:o.a.createElement(s,null)}),o.a.createElement(m.b,{path:"/Home",element:o.a.createElement(f,null)}),o.a.createElement(m.b,{path:"*",element:o.a.createElement(m.a,{to:"/"})}))))};t(18),t(19);l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)))},6:function(e,a,t){},8:function(e,a,t){e.exports=t.p+"static/media/Ellipse 114@2x.c9255dd1.png"},9:function(e,a,t){e.exports=t.p+"static/media/camera.70fe85d0.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.aa127fab.chunk.js.map