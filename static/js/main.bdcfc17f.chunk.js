(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(6),l=t.n(c),i=(t(15),t(3)),o=t(1);function u(e){var n=e.label,t=e.min,r=e.max,c=e.value,l=e.onChange;return a.a.createElement("label",null,n,a.a.createElement("input",{type:"range",min:t,max:r,value:100*c,onChange:function(e){return l(parseInt(e.target.value,10))}}))}t(5);function s(e){return a.a.createElement("div",{className:"drawer"},e.children)}var f=t(7),y=t(8),m=function(){function e(n){Object(f.a)(this,e);var t=n instanceof Object?n:v(n),r=t.r,a=t.g,c=t.b;this.r=r,this.g=a,this.b=c}return Object(y.a)(e,[{key:"asRgbCss",value:function(){var e=this.r,n=this.g,t=this.b;return"rgb(".concat(e,",").concat(n,",").concat(t,")")}}]),e}(),v=function(e){var n=e.replace(/#/,"").match(/.{1,2}/g),t=Object(o.a)(n,3),r=[t[0],t[1],t[2]].map(function(e){return parseInt(e,16)}),a=Object(o.a)(r,3),c=a[0],l=a[1],i=a[2];return new m({r:c,g:l,b:i})},x=function(e,n,t){var r=e.r,a=e.g,c=e.b,l=n.r,i=n.g,o=n.b;return new m({r:Math.round(r+(l-r)*t/100),g:Math.round(a+(i-a)*t/100),b:Math.round(c+(o-c)*t/100)})};function b(){var e=Object(r.useState)(70),n=Object(o.a)(e,2),t=n[0],c=n[1],l=Object(r.useState)(30),i=Object(o.a)(l,2),f=i[0],y=i[1];return a.a.createElement("div",null,a.a.createElement(g,{r:t/100,number:f}),a.a.createElement(s,null,a.a.createElement(u,{label:"Radius",value:t,onChange:c,min:"1",max:"100"}),a.a.createElement(u,{label:"Count",value:f,onChange:y,min:"1",max:"400"})))}function g(e){var n,t=e.r,r=e.number,c=[new m("#ffffff"),new m("#0033aa")],l=(n=r,Object(i.a)(Array(n).keys())),o=[{x:.5,y:.5,r:.5,fill:"none"},{x:t/2,y:.5,r:t/2,fill:"none"}].concat(Object(i.a)(l.map(function(e){return{x:t*(1+t)/(2*(e*e*(1-t)*(1-t)+t)),y:.5-e*t*(1-t)/(e*e*(1-t)*(1-t)+t),r:t*(1-t)/(2*(e*e*(1-t)*(1-t)+t)),fill:x(c[0],c[1],100*e/r).asRgbCss()}})));return a.a.createElement("svg",{viewBox:"0 0 1 1",xmlns:"http://www.w3.org/2000/svg"},o.map(function(e,n){var t=e.x,r=e.y,c=e.r,l=e.fill;return a.a.createElement("circle",{key:n,vectorEffect:"non-scaling-stroke",cx:t,cy:r,r:c,fill:l,stroke:"#000"})}))}var p=t(2),h=function(e,n){return Math.abs(e-n)<.001},E=function(e,n){var t=h(d(e,n),e.r),r=function(e,n){var t=e.x,r=e.y,a=e.r;return{x:a*Math.cos(n)+t,y:a*Math.sin(n)+r}},a=[r(e,0),r(e,120),r(e,240)].map(O(n));if(t)return j(a[1],a[2]);var c=k.apply(void 0,Object(i.a)(a)),l=a[0],o=c.x-l.x,u=c.y-l.y,s=Math.pow(o*o+u*u,.5);return{type:"circle",x:c.x,y:c.y,r:s}},k=function(e,n,t){var r=2*(e.x*(n.y-t.y)-e.y*(n.x-t.x)+n.x*t.y-t.x*n.y);return{x:(w(e)*(n.y-t.y)+w(n)*(t.y-e.y)+w(t)*(e.y-n.y))/r,y:(w(e)*(t.x-n.x)+w(n)*(e.x-t.x)+w(t)*(n.x-e.x))/r}},w=function(e){return e.x*e.x+e.y*e.y},O=function(e){return function(n){var t=e.x,r=e.y,a=e.r,c={x:n.x-t,y:n.y-r},l=w(c);if(0===l)return null;var i=a*a*1/l;return{x:c.x*i+t,y:c.y*i+r}}},d=function(e,n){var t=e.x,r=e.y,a=n.x,c=n.y;return Math.sqrt(Math.pow(a-t,2)+Math.pow(c-r,2))},j=function(e,n){var t=e.x,r=e.y,a=n.x,c=n.y;if(h(t,a))return{type:"line",x1:t,y1:0,x2:t,y2:100};var l=(c-r)/(a-t),i=r-l*t,o=function(e){return l*e+i};return{type:"line",x1:0,y1:o(0),x2:100,y2:o(100)}},C=function(e,n){var t=e.x,r=e.y,c=e.r,l=e.fill,i=e.stroke,o=e.centreStroke;return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement("circle",{vectorEffect:"non-scaling-stroke",cx:t,cy:r,r:c,fill:l,fillOpacity:Math.min(c,.8),stroke:i||"#000"}),a.a.createElement("circle",{vectorEffect:"non-scaling-stroke",cx:t,cy:r,r:.003,fill:"none",stroke:o||"#000"}))},M=function(e,n){var t=e.x1,r=e.y1,c=e.x2,l=e.y2;return a.a.createElement("line",{key:n,vectorEffect:"non-scaling-stroke",x1:t,y1:r,x2:c,y2:l,stroke:"#000"})};function S(){var e=Object(r.useState)({x:.75,y:.75,r:.08,fill:"#0033aa",type:"circle"}),n=Object(o.a)(e,2),t=n[0],c=n[1],l={x:.5,y:.5,r:.2,fill:"none",type:"circle"},i=Object(p.a)({},E(t,l),{fill:"#0033aa"}),u={circle:function(e,n){return C(e,n)},line:function(e,n){return M(e,n)}},s=[l,t,i].map(function(e,n){return u[e.type](e,n)});return a.a.createElement("div",{className:"circleInversion"},a.a.createElement("svg",{viewBox:"0 0 1 1",xmlns:"http://www.w3.org/2000/svg",onMouseMove:function(e){var n=e.target,r=e.clientX,a=e.clientY,l=n.clientWidth,i=n.clientHeight,o=n.getBoundingClientRect(),u=(r-o.left)/l,s=(a-o.top)/i;c(Object(p.a)({},t,{x:u,y:s}))},onWheel:function(e){var n=e.deltaY<0?.001:-.001,r=Math.max(.01,t.r+n);c(Object(p.a)({},t,{r:r}))}},s))}function B(e){var n=e.children,t=Object(r.useState)(0),c=Object(o.a)(t,2),l=c[0],i=c[1];return a.a.createElement("div",null,a.a.createElement("div",{className:"tabs"},n.map(function(e,n){var t=e.props.label;return a.a.createElement("span",{className:l===n?"active":"",key:t,onClick:function(){return i(n)}},t)})),a.a.createElement("div",{className:"tabContent"},n[l]))}var N=function(e,n){var t=e.x,r=e.y,c=e.r,l=e.fill,i=e.stroke,o=e.centreStroke;return a.a.createElement(a.a.Fragment,{key:n},a.a.createElement("circle",{vectorEffect:"non-scaling-stroke",cx:t,cy:r,r:c,fill:l||"none",stroke:i||"#000"}),a.a.createElement("circle",{vectorEffect:"non-scaling-stroke",cx:t,cy:r,r:.003,fill:"none",stroke:o||"#000"}))},I=function(e,n){var t=e.x1,r=e.y1,c=e.x2,l=e.y2;return a.a.createElement("line",{key:n,vectorEffect:"non-scaling-stroke",x1:t,y1:r,x2:c,y2:l,stroke:"#000"})};function R(){var e,n=Object(r.useState)({x:.75,y:.75,r:.08,fill:"none",stroke:"#000",type:"circle"}),t=Object(o.a)(n,2),c=t[0],l=t[1],f={x:.5,y:.5,r:.2,type:"circle"},y=(e=300,Object(i.a)(Array(e).keys())).map(function(e){return E(Object(p.a)({},c,{x:e/300}),f)}).map(function(e){return Object(p.a)({},e,{fill:"#0033aa11",stroke:"none",centreStroke:"none"})}),m={circle:function(e,n){return N(e,n)},line:function(e,n){return I(e,n)}},v=[f,c].concat(Object(i.a)(y)).map(function(e,n){return m[e.type](e,n)});return a.a.createElement("div",null,a.a.createElement("svg",{viewBox:"0 0 1 1",xmlns:"http://www.w3.org/2000/svg"},v),a.a.createElement(s,null,a.a.createElement(u,{label:"Circle y",value:c.y,onChange:function(e){return l(Object(p.a)({},c,{y:e/100}))},min:"1",max:"100"}),a.a.createElement(u,{label:"Circle r",value:c.r,onChange:function(e){return l(Object(p.a)({},c,{r:e/100}))},min:"1",max:"100"})))}var W=function(){return a.a.createElement(B,null,a.a.createElement(S,{label:"Circle inversion"}),a.a.createElement(R,{label:"Circle inversion chain"}),a.a.createElement(b,{label:"Pappus"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,n,t){},9:function(e,n,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bdcfc17f.chunk.js.map