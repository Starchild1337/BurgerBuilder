(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/BurgerLogo.b8503d26.png"},36:function(e,t,a){e.exports=a(84)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),i=a(13),o=(a(41),a(3)),s=a(4),u=a(6),d=a(5),m=a(1),p=function(e){return e.children},h=(a(42),a(43),a(31)),f=a.n(h),v=(a(44),function(e){return r.a.createElement("div",{className:"Logo",style:{height:e.height,marginBottom:e.marginBottom}},r.a.createElement("img",{src:f.a,alt:"MyBurger"}))}),g=(a(45),a(46),function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement(i.b,{to:e.link,activeClassName:"active",exact:e.exact},e.children))}),E=function(){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(g,{link:"/BurgerApp",exact:!0},"Burger Builder"),r.a.createElement(g,{link:"/orders"},"Orders"))},b=(a(52),function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement("div",{onClick:e.clicked,className:"DrawerToggle"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(v,{height:"80%"}),r.a.createElement("nav",{className:"DesktopOnly"},r.a.createElement(E,null)))}),y=(a(53),a(54),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),k=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),r.a.createElement(p,null,r.a.createElement(y,{show:e.open,clicked:e.clicked}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(v,{height:"11%",marginBottom:"32px"}),r.a.createElement("nav",null,r.a.createElement(E,null))))},C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerSwitch=function(){e.setState({showSideDrawer:!1})},e.sideDrawerHandler=function(){e.setState((function(e){return{showSideDrawer:!e.drawerSwitcher}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(b,{clicked:this.sideDrawerHandler}),r.a.createElement(k,{clicked:this.sideDrawerSwitch,open:this.state.showSideDrawer}),r.a.createElement("main",{className:"Content"},this.props.children))}}]),a}(n.Component),O=a(12),j=a(35),w=(a(55),a(56),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;default:e=null}return e}}]),a}(n.Component)),N=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(j.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(w,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Add ingredients!")),r.a.createElement("div",{className:"Burger"},r.a.createElement(w,{type:"bread-top"}),t,r.a.createElement(w,{type:"bread-bottom"}))},S=(a(57),a(58),function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.Remove,disabled:e.disabled},"Remove"),r.a.createElement("button",{className:"More",onClick:e.Add},"Add"))}),B=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],x=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),B.map((function(t){return r.a.createElement(S,{key:t.label,label:t.label,Add:function(){return e.ingredientAdd(t.type)},Remove:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.order},"CHECKOUT"))},T=(a(59),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(y,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),a}(n.Component)),P=(a(60),function(e){return r.a.createElement("button",{onClick:e.clicked,className:["Button",[e.btnType]].join(" ")},e.children)}),H=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitilize"}},t),":",e.ingredients[t])}));return r.a.createElement(p,null,r.a.createElement("h3",null,"Your Orders"),r.a.createElement("p",null,"Your burger with following Ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(P,{clicked:e.purchaseCancel,btnType:"Danger"},"CANCEL"),r.a.createElement(P,{clicked:e.purchaseContinue,btnType:"Success"},"CONTINUE"))},D=(a(61),function(){return r.a.createElement("div",{className:"loader"},"Loading...")}),A={salad:.2,bacon:.7,cheese:.5,meat:1.3},I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:3,purchasable:!1,purchasing:!1,loading:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(O.a)({},e.state.ingredients);n[t]=a;var r=A[t],c=e.state.totalPrice+r;e.setState({totalPrice:c,ingredients:n}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(O.a)({},e.state.ingredients);r[t]=n;var c=A[t],l=e.state.totalPrice-c;e.setState({totalPrice:l,ingredients:r}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){var t=[];for(var a in e.state.ingredients)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e.state.ingredients[a]));t.push("price="+e.state.totalPrice);var n=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+n})},e}return Object(s.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(O.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;console.log(this.props);var a=r.a.createElement(H,{ingredients:this.state.ingredients,purchaseCancel:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,price:this.state.totalPrice});return this.state.loading&&(a=r.a.createElement(D,null)),r.a.createElement(p,null,r.a.createElement(T,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),r.a.createElement(N,{ingredients:this.state.ingredients}),r.a.createElement(x,{ingredientAdd:this.addIngredientHandler,ingredientRemove:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,purchasable:this.state.purchasable,order:this.purchaseHandler}))}}]),a}(n.Component),R=a(33),L=(a(62),function(e){return r.a.createElement("div",{className:"checkoutSummary"},r.a.createElement("h1",null,"Delicious Burger Made with Love and Care!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(N,{ingredients:e.ingredients})),r.a.createElement("h1",null,"Proceed to checkout?"),r.a.createElement(P,{btnType:"Danger",clicked:e.cancelCheckout},"CANCEL"),r.a.createElement(P,{btnType:"Success",clicked:e.continueCheckout},"CONFIRM"))}),M=a(34),F=a.n(M).a.create({baseURL:"https://my-burger-c8634.firebaseio.com/"}),U=(a(81),a(82),function(e){var t=null;switch(e.elementType.elementConfig){case"input":t=r.a.createElement("input",Object.assign({className:"inputElement"},e.elementConfig,{value:e.value}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:"inputElement"},e.elementConfig,{value:e.value}));break;default:t=r.a.createElement("input",Object.assign({className:"inputElement"},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:"Input"},r.a.createElement("label",{className:"label"},e.label),t)}),Y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:""},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:""},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:""},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:""},email:{elementType:"input",elementConfig:{type:"email",placeholder:"E-Mail"},value:""},deliveryTime:{elementType:"select",elementConfig:{option:[{value:"normal",displayValue:"Normal"},{value:"fast",displayValue:"Fast"}]},value:""}},loading:!1},e.orderHandler=function(t){e.setState({loading:!0});var a={ingredients:e.props.ingredients,price:e.props.price};F.post("/orders.json",a).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){return e.setState({loading:!1})})),t.preventDefault()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=r.a.createElement("form",null,r.a.createElement(U,{elementType:"...",elementConfig:"...",value:"..."}),r.a.createElement(U,{inputtype:"input",type:"email",name:"email",placeholder:"E-mail"}),r.a.createElement(U,{inputtype:"input",type:"text",name:"street",placeholder:"Street"}),r.a.createElement(U,{inputtype:"input",type:"text",name:"postalCode",placeholder:"Postal Code"}),r.a.createElement(P,{btnType:"Success",clicked:this.orderHandler},"ORDER"));return!0===this.state.loading&&(e=r.a.createElement(D,null)),r.a.createElement("div",{className:"contactData"},r.a.createElement("h4",null,"Fill Your Information"),e)}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:0},e.cancelCheckoutHandler=function(){e.props.history.goBack()},e.continueCheckoutHandler=function(){e.props.history.replace("/BurgerApp")},e}return Object(s.a)(a,[{key:"componentWillMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),a={},n=0,r=Object(R.a)(t.entries());try{for(r.s();!(e=r.n()).done;){var c=e.value;"price"===c[0]?n=c[1]:a[c[0]]=+c[1]}}catch(l){r.e(l)}finally{r.f()}this.setState({ingredients:a,totalPrice:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(L,{ingredients:this.state.ingredients,cancelCheckout:this.cancelCheckoutHandler,continueCheckout:this.continueCheckoutHandler}),r.a.createElement(m.a,{path:this.props.match.path+"/BurgerApp",render:function(t){return r.a.createElement(Y,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),a}(n.Component),W=(a(83),function(e){var t=[];for(var a in e.ingredients)t.push({name:a,amount:e.ingredients[a]});var n=t.map((function(e){return r.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:"order"},r.a.createElement("p",null,"Ingredients: ",n),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,e.price.toFixed(2),"GEL")))}),J=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.get("/orders.json").then((function(t){var a=[];for(var n in t.data)a.push(Object(O.a)(Object(O.a)({},t.data[n]),{},{id:n}));e.setState({loading:!1,orders:a})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(W,{key:e.id,ingredients:e.ingredients,price:+e.price})})))}}]),a}(n.Component),V=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,null,r.a.createElement(m.a,{path:"/BurgerApp",exact:!0,component:I}),r.a.createElement(m.a,{path:"/checkout",component:z}),r.a.createElement(m.a,{path:"/orders",component:J})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=r.a.createElement(i.a,null,r.a.createElement(V,null));l.a.render(G,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.da90a69e.chunk.js.map