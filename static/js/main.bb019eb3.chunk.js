(this["webpackJsonprice-disease"]=this["webpackJsonprice-disease"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);a(44);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),i=(a(81),a(29)),c=a.n(i),s=a(35),u=a(14),m=a(67),p=a(153),d=a(150),f=a(149),h=a(5),g=a(62),b=a.n(g),v=a(36),E=a(22),y=a(57),w=a(58),O=a(68),j=a(146),x=a(151),C=a(148),k=a(154),N=a(147),S=a(59),I=a.n(S);function R(e){return r.a.createElement(k.a,Object.assign({direction:"up"},e))}var D=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(x.a,{maxWidth:"md",open:!!this.props.img,onClose:this.props.onClose,TransitionComponent:R},r.a.createElement(j.a,{className:e.appBar},r.a.createElement(N.a,null,r.a.createElement(C.a,{color:"default",onClick:this.props.onClose,"aria-label":"Close"},r.a.createElement(I.a,null)),r.a.createElement(f.a,{variant:"h2",color:"secondary",className:e.flex},r.a.createElement("p",null,"Detection Result ")))),r.a.createElement("p",{className:e.result}," ","powdery mildew"===this.props.result?"rice blast":"brown spot"," ","Detected!"),r.a.createElement("div",{className:e.imgContainer},r.a.createElement("img",{src:this.props.img,alt:"Cropped",className:e.img})))}}]),t}(r.a.Component),P=Object(h.a)({appBar:{position:"relative",background:"#7ed957",fontFamily:"Josefin Sans, sans-serif"},flex:{flex:1},imgContainer:{position:"relative",flex:1,padding:30,display:"flex",justifyContent:"center",alignItems:"center"},img:{maxWidth:"100%",maxHeight:"100%"},result:{fontFamily:"Josefin Sans, sans-serif",color:"#5abf2f",fontSize:"medium",position:"relative",flex:1,margin:10,display:"flex",justifyContent:"center",alignItems:"center"}})(D),L=function(e){return new Promise((function(t,a){var n=new Image;n.addEventListener("load",(function(){return t(n)})),n.addEventListener("error",(function(e){return a(e)})),n.setAttribute("crossOrigin","anonymous"),n.src=e}))};function T(e){return e*Math.PI/180}function F(e,t){return B.apply(this,arguments)}function B(){return(B=Object(s.a)(c.a.mark((function e(t,a){var n,r,o,l,i,s,u,m=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>2&&void 0!==m[2]?m[2]:0,e.next=3,L(t);case 3:return r=e.sent,o=document.createElement("canvas"),l=o.getContext("2d"),i=Math.max(r.width,r.height),s=i/2*Math.sqrt(2)*2,o.width=s,o.height=s,l.translate(s/2,s/2),l.rotate(T(n)),l.translate(-s/2,-s/2),l.drawImage(r,s/2-.5*r.width,s/2-.5*r.height),u=l.getImageData(0,0,s,s),o.width=a.width,o.height=a.height,l.putImageData(u,0-s/2+.5*r.width-a.x,0-s/2+.5*r.height-a.y),e.abrupt("return",new Promise((function(e){o.toBlob((function(t){e(URL.createObjectURL(t))}),"image/jpeg")})));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=a(12),W=a(40),A=a(60),U=a.n(A),J=function(e){var t=Object(W.usePromiseTracker)().promiseInProgress;return r.a.createElement("div",null,!0===t?r.a.createElement(U.a,{type:"Puff",color:"#5abf2f",height:100,width:100,timeout:3e3}):null)},M=Object(h.a)((function(e){return{palette:{primary:"#7ed957",secondary:"#58d8bf"},cropContainer:Object(z.a)({position:"relative",width:"100%",height:200,background:"#333"},e.breakpoints.up("sm"),{height:400}),cropButton:{flexShrink:0,margin:2},controls:Object(z.a)({padding:16,display:"flex",flexDirection:"column",alignItems:"stretch"},e.breakpoints.up("sm"),{flexDirection:"row",alignItems:"center"}),sliderContainer:{display:"flex",flex:"1",alignItems:"center"},sliderLabel:Object(z.a)({},e.breakpoints.down("xs"),{minWidth:65}),slider:Object(z.a)({padding:"22px 0px",marginLeft:16,margin:10},e.breakpoints.up("sm"),{flexDirection:"row",alignItems:"center",margin:"10px"})}}))((function(e){var t=e.classes,a=Object(n.useState)(null),o=Object(u.a)(a,2),l=o[0],i=o[1],h=Object(n.useState)(null),g=Object(u.a)(h,2),v=g[0],E=g[1],y=Object(n.useState)({x:0,y:0}),w=Object(u.a)(y,2),O=w[0],j=w[1],x=Object(n.useState)(0),C=Object(u.a)(x,2),k=C[0],N=C[1],S=Object(n.useState)(5),I=Object(u.a)(S,2),R=I[0],D=I[1],L=Object(n.useState)(null),T=Object(u.a)(L,2),B=T[0],z=T[1],A=Object(n.useState)(null),U=Object(u.a)(A,2),M=U[0],q=U[1],Y=Object(n.useState)("No result"),Z=Object(u.a)(Y,2),_=Z[0],H=Z[1],$=Object(n.useState)(!1),G=Object(u.a)($,2),K=G[0],Q=G[1],V=Object(n.useState)(!1),X=Object(u.a)(V,2),ee=X[0],te=X[1],ae=function(e){if(console.log("Detect"),l){console.log("Detect er cropped Image  ",M),console.log("The get file",v),console.log("The blob in use",e);var t=new FormData;t.append("image",e),te(!0),Object(W.trackPromise)(fetch("https://agrgb-rest.herokuapp.com/api/detect",{method:"POST",body:t})).then((function(e){return e.json()})).then((function(e){return H((t=e)?(console.log(t),Q(!0),t.disease):(console.log("Please upload a valid image"),Q(!1),"Uplead a valid Image"));var t}))}te(!1)},ne=Object(n.useCallback)((function(e,t){z(t)}),[]),re=Object(n.useCallback)(Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(l,B,k);case 3:return t=e.sent,console.log("donee",t),q(t),e.next=8,fetch(t).then((function(e){return e.blob()}));case 8:a=e.sent,ae(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),[B,k,l]),oe=Object(n.useCallback)((function(){q(null),Q(!1)}),[]);return r.a.createElement("div",null,r.a.createElement("div",{className:t.cropContainer},r.a.createElement(m.a,{image:l,crop:O,rotation:k,zoom:R,aspect:.75,onCropChange:j,onRotationChange:N,onCropComplete:ne,onZoomChange:D})),r.a.createElement("div",{className:t.controls},r.a.createElement("div",{className:t.sliderContainer},r.a.createElement(f.a,{style:{margin:25,color:"green"},variant:"overline",classes:{root:t.sliderLabel}},r.a.createElement("p",{style:{fontSize:12}},"ZOOM")),r.a.createElement(p.a,{value:R,min:1,max:5,step:.1,"aria-labelledby":"Zoom",onChange:function(e,t){return D(t)}})),r.a.createElement("div",{className:t.sliderContainer},r.a.createElement(f.a,{style:{margin:24,fontSize:12},variant:"overline",classes:{root:t.sliderLabel}},r.a.createElement("p",{style:{fontSize:12,paddingRight:"3px"}},"ROTATE")),r.a.createElement(p.a,{style:{margin:"10px"},value:k,min:0,max:360,step:1,"aria-labelledby":"Rotation",onChange:function(e,t){return N(t)}})),r.a.createElement(d.a,{variant:"outlined",component:"label",classes:{root:t.cropButton}},"Upload File",r.a.createElement("input",{type:"file",onChange:function(e){return function(e){console.log("Upload"),E(e.target.files[0]),i(URL.createObjectURL(e.target.files[0])),console.log("dogImage :",e.target.files[0])}(e)},style:{display:"none"}})),r.a.createElement(d.a,{onClick:re,variant:"outlined",color:"default",classes:{root:t.cropButton},startIcon:r.a.createElement(b.a,null)},"Detect")),console.log("get result: ",_),console.log("hasResult ",K),console.log("Loder trac",ee),!K&&r.a.createElement(J,null),K&&r.a.createElement(P,{img:M,result:_,onClose:oe}))})),q=a(43),Y=a(64),Z=a(33),_=a(63),H=(a(113),function(e){var t=r.a.useState(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],l=r.a.createElement("p",null,"Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate. We only ask for personal information when we truly need it to provide a service to you."," ",r.a.createElement("strong",null,"We do not collect any browsing data or any images you upload.")," ","We don\u2019t share any personally identifying information publicly or with third-parties, except when required to by law. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us. This policy is effective as of 30 August 2020.");return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"item1",onClick:function(){return o(!0)}},"Privacy Policy"),r.a.createElement(_.Modal,{open:n,onClose:function(){return o(!1)},center:!0},r.a.createElement("h2",null,"Privacy Policy"),l))}),$=(a(114),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"item1"},r.a.createElement(H,null)),r.a.createElement("div",{className:"item2"},r.a.createElement("span",{style:{paddingRight:5}},"Copyright "),r.a.createElement(Z.a,{icon:Y.a})," ",r.a.createElement("span",{style:{paddingLeft:5}},(new Date).getFullYear()," | All Rights Reserved.")),r.a.createElement("a",{href:"https://github.com/hafizalasad121/Rice-Disease-detector",target:"_blank",className:"item3"},r.a.createElement(Z.a,{icon:q.b})),r.a.createElement("a",{href:"http://fb.com/hafiz.alasad.121",target:"_blank",className:"item4"},r.a.createElement(Z.a,{icon:q.a})),r.a.createElement("a",{href:"#",className:"item5"},r.a.createElement(Z.a,{icon:q.c})),!1))}),G=a(152),K=a(31),Q=function(e){return r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"text1"},"Find out the disease in Rile Leaf using machine learning. Just upload the image and press detect. Discover what disease your plant have!"))},V=(a(115),function(e){return r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"text2"},"Built with TensorFlow + Flask + React.",r.a.createElement("br",null)))});var X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-space"}),r.a.createElement("h1",null,"Rice Disease Classification"),r.a.createElement(Q,null),r.a.createElement(K.b,{to:"/detector"},r.a.createElement(G.a,{className:"start-button start-button-size"},"START...")),r.a.createElement(V,null))},ee=(a(117),a(24));var te=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement(ee.a,{path:"/",exact:!0,component:X}),r.a.createElement(ee.a,{path:"/detector",component:M})),r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K.a,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a(118)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.bb019eb3.chunk.js.map