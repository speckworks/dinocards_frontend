(this.webpackJsonpfavcolours=this.webpackJsonpfavcolours||[]).push([[0],{126:function(e,t,n){e.exports=n(248)},131:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(29),i=n.n(a),c=(n(131),n(117)),s=n(15),l=n(16),u=n(18),d=n(17),h=n(19),m=(n(40),n(255)),p=n(254),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.dinocard;return r.a.createElement(m.a,{style:{background:t.color}},r.a.createElement(p.a,{src:t.img}),r.a.createElement(m.a.Content,{className:"cardContent"},r.a.createElement(m.a.Header,null,"User Name: ",t.name),r.a.createElement("button",{onClick:function(){return e.props.deleteDino(t.id)},className:"deleteButton"},"Delete"),r.a.createElement(m.a.Description,{style:{background:t.color}})))}}]),t}(o.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.log("from the DinoButton",this.props.dinos);var t=this.props.dinos.map((function(t){return r.a.createElement("button",{onClick:function(){return e.props.handleDinoClick(t.img)},style:{backgroundImage:'url("'.concat(t.img,'")')},key:t.id,className:"dinobutton"})}));return r.a.createElement("div",null,r.a.createElement("ul",null,t))}}]),t}(o.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.colors.map((function(t){return r.a.createElement("button",{onClick:function(){return e.props.handleColorClick(t.color)},style:{backgroundColor:"".concat(t.color)},key:t.id,className:"colorbutton"})}));return r.a.createElement("div",null,t)}}]),t}(o.Component),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={user_card:{},dinoFormImg:"",dinoFormColor:"",name:""},n.handleChange=function(e){e.preventDefault(),n.setState({name:e.target.value})},n.handleDinoClick=function(e){n.setState({dinoFormImg:e})},n.handleColorClick=function(e){n.setState({dinoFormColor:e})},n.onSubmit=function(e){e.preventDefault();var t=n.state.dinoFormImg,o=n.state.dinoFormColor,r=n.state.name;if(t&&o&&r){var a={user_id:1,color_id:n.props.colors.filter((function(e){return e.color===o}))[0].id,dino_id:n.props.dinos.filter((function(e){return e.img===t}))[0].id};fetch("http://localhost:3000/user_cards",{method:"POST",body:JSON.stringify(a),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(e){var a={img:t,color:o,name:r,id:e.id};n.props.createDinoCard(a),console.log("Success:",e),n.setState({dinoFormImg:"",dinoFormColor:"",name:""})}))}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"dinoContainer"},r.a.createElement("ul",null,"1. Choose a Dino."),r.a.createElement(b,{handleDinoClick:this.handleDinoClick,className:"dinobutton",dinos:this.props.dinos})),r.a.createElement("div",null,r.a.createElement("ul",null,"2. Choose a Color."),r.a.createElement("ul",{className:"color button"},r.a.createElement(v,{handleColorClick:this.handleColorClick,colors:this.props.colors}))),r.a.createElement("form",{onSubmit:this.onSubmit},"Please Enter Your Name:",r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"value",value:this.state.name,autoComplete:"off"}),"Dino Chosen:",r.a.createElement("input",{defaultValue:this.state.dinoFormImg,autoComplete:"off"}),"Color Chosen:",r.a.createElement("input",{defaultValue:this.state.dinoFormColor,autoComplete:"off"}),r.a.createElement("button",{type:"submit",value:"Submit",id:"submitButton",style:{className:"formSubmit"}},"Submit")))}}]),t}(o.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this;return this.props.dinocards.length>0&&(e=this.props.dinocards.map((function(e){return r.a.createElement(f,{key:e.id,deleteDino:t.props.deleteDino,dinocard:e})}))),r.a.createElement("div",null,r.a.createElement(C,{createDinoCard:this.props.createDinoCard,colors:this.props.colors,dinos:this.props.dinos,handleNameSubmit:this.props.handleNameSubmit}),r.a.createElement("div",{id:"card-list"},r.a.createElement("button",{onClick:function(){return t.props.reverse(e)},id:"reverse"},"Reverse"),e))}}]),t}(o.Component),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={dinos:[],colors:[],dinocards:[],users:[]},n.createDinoCard=function(e){var t=n.state.dinocards;t.push(e),n.setState({dinocards:t})},n.deleteDino=function(e){var t="http://localhost:3000/user_cards/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(t){var o=n.state.dinocards.filter((function(t){return t.id!==e}));n.setState({dinocards:o})}))},n.getDinoCards=function(){fetch("http://localhost:3000/user_cards").then((function(e){return e.json()})).then((function(e){console.log(e)}))},n.reverse=function(){var e=n.state.dinocards,t=Object(c.a)(e).reverse();n.setState({dinocards:t})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/dinos").then((function(e){return e.json()})).then((function(t){e.setState({dinos:t})})),fetch("http://localhost:3000/colors").then((function(e){return e.json()})).then((function(t){e.setState({colors:t})})),fetch("http://localhost:3000/users").then((function(e){return e.json()})).then((function(t){e.setState({users:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("p",{id:"title"},"Dinosaur Cards"),r.a.createElement(E,{colors:this.state.colors,dinos:this.state.dinos,dinocards:this.state.dinocards,handleNameSubmit:this.handleNameSubmit,createDinoCard:this.createDinoCard,deleteDino:this.deleteDino,reverse:this.reverse}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.e51c207d.chunk.js.map