(this.webpackJsonpreactlyricsfinder=this.webpackJsonpreactlyricsfinder||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(14),l=a.n(c),s=a(3),o=a.n(s),i=a(15),m=a(2);a(22);function u(e){var t=e.setBusqueda,a=Object(r.useState)(""),c=Object(m.a)(a,2),l=c[0],s=c[1],o=Object(r.useState)(""),i=Object(m.a)(o,2),u=i[0],d=i[1],f=Object(r.useState)(!1),b=Object(m.a)(f,2),h=b[0],p=b[1];Object(r.useEffect)((function(){p(""!==u&&""!==l)}),[u,l]);return n.a.createElement("form",{className:"mx-auto",style:{width:"80%"},onSubmit:function(e){e.preventDefault(),""!==u&&""!==l&&t({artista:u,cancion:l})}},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){s(e.target.value)},value:l,placeholder:"Nombre de la canci\xf3n"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){d(e.target.value)},value:u,placeholder:"Nombre del artista"})),h?n.a.createElement("button",{className:"btn btn-secondary btn-block font-weight-bold",type:"submit"},"Buscar"):null)}var d=a(4),f=a.n(d);function b(e){var t=e.letras;return""===t?null:n.a.createElement("div",{className:"card bg-dark text-light shadow-md p-3"},n.a.createElement("h2",{className:"card-title font-weight-bold"},"Letras"),n.a.createElement("p",{className:"letras font-weight-bold text-secondary"},t))}function h(e){var t=e.informacion;if(0===Object.keys(t).length)return null;var a=t.strArtistThumb,r=t.strArtist,c=t.strBiographyES,l=t.strFacebook,s=t.strTwitter,o=t.strLastFMChart,i=t.strWebsite;return n.a.createElement("div",{className:"card shadow-md"},n.a.createElement("img",{className:"w-100",src:a,alt:"artistaImg"}),n.a.createElement("h2",{className:"card-title font-weight-bold my-3"},r),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"letras font-weight-bold text-secondary"},c)),n.a.createElement("p",{className:"card-text enlaces"},n.a.createElement("a",{className:"mr-2",href:"https://".concat(l),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-facebook"})),n.a.createElement("a",{className:"mr-2",href:"https://".concat(s),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-twitter"})),n.a.createElement("a",{className:"mr-2",href:"https://".concat(o),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-lastfm"})),n.a.createElement("a",{className:"",href:"https://".concat(i),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"far fa-user"}))))}function p(){return n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"rect1"}),n.a.createElement("div",{className:"rect2"}),n.a.createElement("div",{className:"rect3"}),n.a.createElement("div",{className:"rect4"}),n.a.createElement("div",{className:"rect5"}))}var E=function(){var e=Object(r.useState)({cancion:"",artista:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(!1),s=Object(m.a)(l,2),d=s[0],E=s[1],v=Object(r.useState)(!1),N=Object(m.a)(v,2),w=N[0],g=N[1],j=Object(r.useState)(""),y=Object(m.a)(j,2),O=y[0],k=y[1],x=Object(r.useState)(""),S=Object(m.a)(x,2),C=S[0],B=S[1];return Object(r.useEffect)((function(){""!==a.cancion&&""!==a.artista&&function(){var e=Object(i.a)(o.a.mark((function e(){var t,r,n,c,l,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.artista,r=a.cancion,g(!0),n="https://api.lyrics.ovh/v1/".concat(t,"/").concat(r),c="https://www.theaudiodb.com/api/v1/json/1/search.php?s=".concat(t),e.next=6,Promise.all([f()(n).catch((function(e){return null})),f()(c).catch((function(e){return null}))]);case 6:if(l=e.sent,s=Object(m.a)(l,2),i=s[0],u=s[1],null!==i&&"object"===typeof u){e.next=14;break}return E(!0),g(!1),e.abrupt("return",null);case 14:g(!1),E(!1),k(i.data.lyrics),B(u.data.artists[0]);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),n.a.createElement("div",{className:"App"},n.a.createElement("div",{onClick:function(){if(""===O)return null;var e=document.querySelector("#letraCancion");console.log(e.scrollIntoView({behavior:"smooth"}))},className:"moveDown fixed-top rounded-pill bg-white shadow m-2 p-1",style:{width:"2rem"}},n.a.createElement("i",{className:"fas fa-sort-down"})),n.a.createElement("div",{className:"container-fluid p-5 bg-dark text-white shadow"},n.a.createElement("h1",{className:"mb-5 text-center"},"Tu Canci\xf3n"),n.a.createElement(u,{setBusqueda:c})),n.a.createElement("div",{className:"container my-5"},!0===d?n.a.createElement("div",{className:"w-75 mx-auto alert alert-warning alert-dismissible fade show mt-5",role:"alert"},n.a.createElement("strong",null,"Ups!")," No se pudo encontrar lo que esta buscando... trata con otra canci\xf3n :>",n.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):null,w?n.a.createElement(p,null):d?null:n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(h,{informacion:C})),n.a.createElement("div",{id:"letraCancion",className:"col-md-6"},n.a.createElement(b,{letras:O})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.4ceddda0.chunk.js.map