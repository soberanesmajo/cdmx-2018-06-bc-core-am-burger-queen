(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e){e.exports={desayuno:{"Caf\xe9 americano":5,"Caf\xe9 con leche":7,"Sandwich de jam\xf3n con queso":10,"Jugo natural":7},comida:{"Hamburguesa sencilla de res":10,"Hamburguesa doble de res":15,"Hamburguesa sencilla de pollo":10,"Hamburguesa doble de pollo":15,"Hamburguesa sencilla vegetariana":10,"Hamburguesa doble vegetariana":15,"+ Papas fritas":5,"+ Onion Rings":5,"Botella de agua de 500ml":5,"Botella de agua de 750ml":8,"Refresco de 500ml":7,"Refresco de 750ml":10,"+ Queso":1,"+ Huevo":1}}},25:function(e,a,t){e.exports=t(58)},30:function(e,a,t){},32:function(e,a,t){},45:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),o=t.n(c),l=(t(30),t(59)),s=t(62),i=t(61),u=(t(32),t(15)),m=t(7),d=t(8),b=t(10),p=t(9),h=t(11),f=t(60),g=t(18),v=t.n(g);v.a.initializeApp({apiKey:"AIzaSyAPTOHrZlBeSv2hfP2Kk3eFezRXTshQ74Y",authDomain:"burger-queen-72c04.firebaseapp.com",databaseURL:"https://burger-queen-72c04.firebaseio.com",projectId:"burger-queen-72c04",storageBucket:"burger-queen-72c04.appspot.com",messagingSenderId:"169607877333"});var E=v.a,y=(t(45),function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(b.a)(this,Object(p.a)(a).call(this))).handleChange=function(a){e.setState(Object(u.a)({},a.target.name,a.target.value))},e.login=function(a){a.preventDefault(),E.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then(function(a){console.log(a),e.setState({user:a})}).catch(function(e){console.log(e)})},e.state={email:"",password:"",user:null},e}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage='url("../../assets/hamburger-576419_1280.png") no-repeat center -120%'}},{key:"render",value:function(){return this.state.user?r.a.createElement(f.a,{to:"/order"}):r.a.createElement("div",{className:"body-login"},r.a.createElement("header",{className:"container title"},r.a.createElement("h1",null,"Burger Queen")),r.a.createElement("form",{className:"container form-login"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:this.handleChange,"aria-describedby":"emailHelp",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",name:"password",onChange:this.handleChange,placeholder:"Password"})),r.a.createElement("button",{type:"submit",onClick:this.login,className:"btn btn-primary"},"Iniciar sesi\xf3n")))}}]),a}(n.Component)),j=(t(50),t(19)),N=function(e){return r.a.createElement("div",null,e.menu.map(function(e,a){return r.a.createElement("div",{key:a,className:"container mt-3"},r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg btn-style"},Object.keys(e)," : ",Object.values(e))))}))},O=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(b.a)(this,Object(p.a)(a).call(this,e))).breakfast=function(){var e=[],a=j.desayuno;for(var n in a){var r=a[n],c=Object(u.a)({},n,r);e.push(c)}t.setState({menu:e})},t.meal=function(){var e=[],a=j.comida;for(var n in a){var r=a[n],c=Object(u.a)({},n,r);e.push(c)}t.setState({menu:e})},t.state={menu:[]},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 div-btn"},r.a.createElement("button",{type:"button",onClick:this.breakfast,name:"desayuno",className:"btn btn btn-outline-primary btn-lg"},"Desayuno"),r.a.createElement("button",{type:"button",onClick:this.meal,name:"comida",className:"btn btn-outline-primary btn-lg"},"Comida"),r.a.createElement(N,{menu:this.state.menu}))))}}]),a}(n.Component),k=(t(52),t(54),function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Burger Queen"))}),C=t(3),w=t.n(C),H=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(b.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).handleChange=function(e){t.props.callback(e.target.value)},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group mb-3 mt-3"},r.a.createElement("input",{type:"text",className:"form-control",name:"costumer",onChange:this.handleChange,placeholder:"Nombre del cliente","aria-label":"Nombre del cliente","aria-describedby":"button-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-secondary btn-sm",type:"button",onClick:this.saveCustomer,id:"button-addon2"},"Guardar")))}}]),a}(n.Component);H.protoTypes={callback:w.a.func};var S=H,B=(t(56),function(e){function a(){return Object(m.a)(this,a),Object(b.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card bg-light mb-3 p-3"},r.a.createElement("div",{className:"card-header"}," Cliente: ",this.props.data," "),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},"Total:"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Enviar a cocina")))}}]),a}(n.Component)),I=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(b.a)(this,Object(p.a)(a).call(this))).inputCustomer=function(a){e.setState({data:a})},e.state={data:""},e}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("div",{className:"container"},r.a.createElement(S,{callback:this.inputCustomer}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(O,null)),r.a.createElement("aside",{className:"col-6"},r.a.createElement(B,{data:this.state.data})))))}}]),a}(n.Component),q=function(){return r.a.createElement(l.a,{basename:"/cdmx-2018-06-bc-core-am-burger-queen"},r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(i.a,{path:"/",component:y,exact:!0}),r.a.createElement(i.a,{path:"/order",component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.06c6ea9f.chunk.js.map