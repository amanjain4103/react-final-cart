(this["webpackJsonpreact-final-cart"]=this["webpackJsonpreact-final-cart"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(8),c=n.n(s),i=(n(13),n(6)),o=n(2),l=n(3),u=n(5),b=n(4),d=(n(14),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",id:"mynavbar",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#mynavbar",children:"Final Cart"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item d-flex my-auto",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item my-auto",children:Object(d.jsx)("a",{className:"nav-link",href:"#",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)("button",{type:"button",className:"btn btn-primary btn-sm position-relative m-2",children:["Checkout",Object(d.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:this.props.noOfPositiveCounters})]})})]})})]})})})}}]),n}(r.a.Component),p=j,h=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.counter,n=t.productName,a=t.value,r=a>=1?"btn btn-warning btn-sm":"btn btn-warning btn-sm disabled";return Object(d.jsxs)("div",{className:"d-inline-flex align-items-center counter w-100 gap-5",children:[Object(d.jsxs)("p",{className:"my-auto w-25",children:[n,Object(d.jsx)("span",{className:"badge bg-warning",children:a})]}),Object(d.jsxs)("div",{className:"btn-group",role:"group",children:[Object(d.jsx)("button",{onClick:function(){return e.props.incrementMe(e.props.counter)},className:"btn btn-success btn-sm",children:"Inc."}),Object(d.jsx)("button",{onClick:function(){return e.props.decrementMe(e.props.counter)},className:r,children:"Dec."}),Object(d.jsx)("button",{onClick:function(){return e.props.resetMe(e.props.counter)},className:"btn btn-danger btn-sm",children:"Reset"})]})]})}}]),n}(r.a.Component),m=h,v=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).inc=function(e){console.log(e)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.counterValues;return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(t,n){return Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsx)(m,{counter:t,incrementMe:e.props.incrementThisCounter,decrementMe:e.props.decremnetThisCounter,resetMe:e.props.resetThisCounter})},n)}))})})}}]),n}(r.a.Component),O=v,f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).incrementThisCounterValueBy1=function(t){var n=Object(i.a)(e.state.counterValues),a=n.indexOf(t);n[a].value+=1,e.setState({counterValues:Object(i.a)(n)})},e.decrementThisCounterValueBy1=function(t){var n=Object(i.a)(e.state.counterValues),a=n.indexOf(t);n[a].value>0&&(n[a].value-=1,e.setState({counterValues:Object(i.a)(n)}))},e.resetThisCounter=function(t){var n=Object(i.a)(e.state.counterValues),a=n.indexOf(t);n[a].value=0,e.setState({counterValues:Object(i.a)(n)})},e.state={counterValues:[{id:1,productName:"Iphone",value:0},{id:2,productName:"Ipad",value:0},{id:3,productName:"Ipods",value:0},{id:4,productName:"Iphone Charger",value:0}]},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{noOfPositiveCounters:this.state.counterValues.filter((function(e){return e.value>=1})).length}),Object(d.jsx)(O,{counterValues:this.state.counterValues,incrementThisCounter:this.incrementThisCounterValueBy1,decremnetThisCounter:this.decrementThisCounterValueBy1,resetThisCounter:this.resetThisCounter})]})}}]),n}(r.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};n(16);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.37e7b3d2.chunk.js.map