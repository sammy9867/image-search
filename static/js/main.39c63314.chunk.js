(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{35:function(e,t,a){e.exports=a(70)},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(30),l=a.n(c),i=a(4),o=Object(n.createContext)(),s=function(e){var t=e.children,a=Object(n.useState)("mountains"),c=Object(i.a)(a,2),l=c[0],s=c[1],u=Object(n.useState)(1),m=Object(i.a)(u,2),d=m[0],b=m[1];return r.a.createElement(o.Provider,{value:{query:l,setQuery:s,pageNumber:d,setPageNumber:b}},t)},u=function(){var e=Object(n.useContext)(o);return{query:e.query,setQuery:e.setQuery}},m=function(){var e=Object(n.useContext)(o);return{pageNumber:e.pageNumber,setPageNumber:e.setPageNumber}},d=function(e){if(localStorage)try{return JSON.parse(localStorage.getItem(e))}catch(t){console.error("Error getting item ".concat(e," from localStorage"),t)}},b=function(e,t){if(localStorage)try{return localStorage.setItem(e,JSON.stringify(t))}catch(a){console.error("Error storing item ".concat(e," to localStorage"),a)}},f=Object(n.createContext)(),g=function(e){var t=e.children,a=Object(n.useState)((function(){var e=d("theme");return null==e||e})),c=Object(i.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){b("theme",l)}),[l]),r.a.createElement(f.Provider,{value:{isLightTheme:l,setIsLightTheme:o}},t)},h=function(){return Object(n.useContext)(f)},v=a(14),E=Object(n.createContext)(),p={favList:[]},y=function(e,t){switch(t.type){case"ADD_FAV":return function(e,t){var a={id:t.id,alt_description:t.alt_description,regular:t.regular};return{favList:[].concat(Object(v.a)(e.favList),[a])}}(e,t.payload.favImage);case"REMOVE_FAV":return function(e,t){return{favList:e.favList.filter((function(e){return e.id!==t.id}))}}(e,t.payload.favImage);default:return e}};var k=function(e){var t=e.children,a=Object(n.useReducer)(y,p,(function(e){var t=d("fav");return null!==t?t:e})),c=Object(i.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){b("fav",l)}),[l]),r.a.createElement(E.Provider,{value:{globalState:l,dispatch:o}},t)},N=function(){return Object(n.useContext)(E)},O=a(9),j=(a(40),function(){var e=h().isLightTheme,t=u().setQuery,a=m().setPageNumber;return r.a.createElement("div",{className:e?"search-container":"search-container-dark","data-testid":e?"search-container":"search-container-dark"},r.a.createElement("span",{"data-testid":"search-icon"}," ",r.a.createElement(O.f,null)," "),r.a.createElement("input",{type:"text",className:"search-bar","aria-label":"search bar",placeholder:"Search...",onKeyDown:function(e){"Enter"===e.key&&(t(e.target.value),a(1))}}))}),w=a(32),S=a(2),x=a(11),L=(a(41),function(){var e=h(),t=e.isLightTheme,a=e.setIsLightTheme,c=Object(n.useState)(!1),l=Object(i.a)(c,2),o=l[0],s=l[1],u=Object(S.f)(),m=Object(n.useState)("/image-search"===u.pathname),d=Object(i.a)(m,2),b=d[0],f=d[1],g=Object(n.useState)("/image-search/favourite"===u.pathname),v=Object(i.a)(g,2),E=v[0],p=v[1];return r.a.createElement("header",{className:t?"header-light":"header-dark","data-testid":t?"header-light":"header-dark"},r.a.createElement("span",{className:"searchBar"}," ",r.a.createElement(j,null)," "),r.a.createElement("nav",{className:function(){var e="sidebar";return e+=t?" sidebar-light":" sidebar-dark",e+=o?" sidebar-active":""}()},r.a.createElement("ul",{className:"topbar-items"},r.a.createElement("li",{className:"navbar-li","data-testid":"home-link"},r.a.createElement(x.b,{to:"/image-search",onClick:function(){s(!o),f(!0),p(!1)}},r.a.createElement("span",{className:"nav-visibility"}," ",r.a.createElement(O.d,{color:function(){var e="";return e=t?"black":"white",b&&t?e="#34a1cd":b&&!t&&(e="#ade6e6"),e}()})," "),r.a.createElement("span",{className:function(){var e="nav-text";return e+=b&&t?" nav-selected-light":b&&!t?" nav-selected-dark":t?" nav-light":" nav-dark"}()},r.a.createElement("b",null,"Home")))),r.a.createElement("li",{className:"navbar-li","data-testid":"fav-link"},r.a.createElement(x.b,{to:"/image-search/favourite",onClick:function(){s(!o),f(!1),p(!0)}},r.a.createElement("span",{className:"nav-visibility"}," ",r.a.createElement(O.c,{color:function(){var e="";return e=t?"black":"white",E&&t?e="#34a1cd":E&&!t&&(e="#ade6e6"),e}()})," "),r.a.createElement("span",{className:function(){var e="nav-text";return e+=E&&t?" nav-selected-light":E&&!t?" nav-selected-dark":t?" nav-light":" nav-dark"}()},r.a.createElement("b",null,"Favourite")))),r.a.createElement("li",{className:"navbar-li"},r.a.createElement("span",{className:"nav-icon nav-visibility"},r.a.createElement(O.e,{color:t?"black":"white"})," "),r.a.createElement("span",{className:t?"nav-text nav-visibility nav-light":"nav-text nav-visibility nav-dark"},r.a.createElement("b",null,"Dark Mode")),r.a.createElement("label",null,r.a.createElement("input",{"aria-label":"switch-theme",type:"checkbox",onClick:function(){return a(!t)},onChange:function(e){},checked:!t}),r.a.createElement("span",{className:"check"}))))),r.a.createElement("div",{className:"navbar","data-testid":"navbar"},r.a.createElement(x.b,{to:"#",className:"menu-bar","data-testid":"menu-link"},o?r.a.createElement("span",{"data-testid":"close"},r.a.createElement(w.a,{size:28,color:t?"black":"white",onClick:function(){s(!o)}})," "):r.a.createElement("span",{"data-testid":"bar"},r.a.createElement(O.a,{size:28,color:t?"black":"white",onClick:function(){s(!o)}}),"  "))))}),T=(a(47),function(e){var t=e.id,a=e.regular,c=e.alt_description,l=h().isLightTheme,o=N(),s=o.globalState,u=o.dispatch,m=Object(n.useState)(s.favList.find((function(e){return e.id===t}))),d=Object(i.a)(m,2),b=d[0],f=d[1],g=Object(n.useRef)(null),v=Object(n.useRef)(null);return r.a.createElement("li",{className:"img-list-item","data-testid":"img-list-item"}," ",r.a.createElement("div",{className:"img-container","data-testid":"img-container"},r.a.createElement("button",{className:"favourite-button","data-testid":"favourite-button","aria-label":"favourite button",onClick:function(){!function(e,t,a){var n;b?(console.log("Rem"),n={type:"REMOVE_FAV",payload:{favImage:{id:e}}}):(console.log("Adding"),n={type:"ADD_FAV",payload:{favImage:{id:e,regular:t,alt_description:a}}}),u(n),f(!b)}(t,a,c)}},r.a.createElement("span",{className:"cover favourite-icon"},r.a.createElement(O.c,{color:b?"red":l?"black":"white"})),r.a.createElement("span",{ref:v,className:l?"cover white-cover":"cover black-cover"})),r.a.createElement("button",{className:"download-button","data-testid":"download-button","aria-label":"download button",onClick:function(){var e;e=t,fetch(a,{method:"GET",headers:{}}).then((function(t){t.arrayBuffer().then((function(t){var a=window.URL.createObjectURL(new Blob([t])),n=document.createElement("a");n.href=a,n.setAttribute("download","".concat(e,".png")),document.body.appendChild(n),n.click()}))})).catch((function(e){console.log(e)}))}},r.a.createElement("span",{className:"cover download-icon"},r.a.createElement(O.b,{color:l?"black":"white"})),r.a.createElement("span",{ref:g,className:l?"cover white-cover":"cover black-cover"})),r.a.createElement("img",{alt:c,"aria-label":c,className:"img-card","data-testid":"img-card",onLoad:function(){g.current.style.zIndex=0,v.current.style.zIndex=0},src:a})))}),C=a(19),F=a.n(C),A=a(33),I="https://api.unsplash.com/search/photos",_="ZxptYWJJiQN0ZzjOaqTZ21E1YF6xT2eYDGf-tE3RSaA",B=a(34),R=a.n(B),P=(a(66),function(){var e=u().query,t=m(),a=t.pageNumber,c=t.setPageNumber,l=function(e,t){var a=Object(n.useState)(!0),r=Object(i.a)(a,2),c=r[0],l=r[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)([]),b=Object(i.a)(d,2),f=b[0],g=b[1],h=Object(n.useState)(!1),E=Object(i.a)(h,2),p=E[0],y=E[1];return Object(n.useEffect)((function(){g([])}),[e]),Object(n.useEffect)((function(){function a(){return(a=Object(A.a)(F.a.mark((function a(){return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R()({method:"GET",url:I,params:{client_id:_,query:e,page:t}}).then((function(e){g((function(t){return[].concat(Object(v.a)(t),Object(v.a)(e.data.results))})),y(e.data.results.length>0),l(!1)})).catch((function(e){m(!0)}));case 2:case"end":return a.stop()}}),a)})))).apply(this,arguments)}l(!0),m(!1),function(){a.apply(this,arguments)}()}),[e,t]),{loading:c,error:u,images:f,hasMore:p}}(e,a),o=l.images,s=l.loading,d=l.hasMore,b=Object(n.useRef)(),f=Object(n.useCallback)((function(e){s||(b.current&&b.current.disconnect(),b.current=new IntersectionObserver((function(e){e[0].isIntersecting&&d&&c((function(e){return e+1}))})),e&&b.current.observe(e))}),[s,d]);return r.a.createElement("div",{className:"image-gallery","data-testid":"image-gallery"},r.a.createElement("ul",{className:"image-gallery-ul","data-testid":"image-gallery-ul"},o.map((function(e){return r.a.createElement(T,{key:e.id,id:e.id,regular:e.urls.regular,alt_description:e.alt_description})})),r.a.createElement("span",{ref:f})))}),D=(a(67),function(){var e=N().globalState;return r.a.createElement("div",{className:"fav-gallery","data-testid":"fav-gallery"},r.a.createElement("ul",{className:"fav-gallery-ul","data-testid":"fav-gallery-ul"},e.favList.map((function(e){return r.a.createElement(T,{key:e.id,id:e.id,regular:e.regular,alt_description:e.alt_description})}))))}),q=function(){return h().isLightTheme?document.getElementsByTagName("body")[0].setAttribute("style","background-color:#F0F2F5"):document.getElementsByTagName("body")[0].setAttribute("style","background-color:black"),r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null))},J=function(){return h().isLightTheme?document.getElementsByTagName("body")[0].setAttribute("style","background-color:#F0F2F5"):document.getElementsByTagName("body")[0].setAttribute("style","background-color:black"),r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null))},V=(a(68),function(){var e=h().isLightTheme;return e?document.getElementsByTagName("body")[0].setAttribute("style","background-color:#F0F2F5"):document.getElementsByTagName("body")[0].setAttribute("style","background-color:black"),r.a.createElement("div",{className:"error","data-testid":"error"},r.a.createElement("h2",{className:e?"light-mode":"dark-mode"},"Oops! Page not found."),r.a.createElement("h1",{className:e?"light-mode":"dark-mode"},"404"),r.a.createElement("h3",{className:e?"light-mode":"dark-mode"},"Sorry, this page isn't available."))}),z=(a(69),function(){return r.a.createElement(g,null,r.a.createElement(k,null,r.a.createElement(s,null,r.a.createElement(x.a,null,r.a.createElement(L,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/image-search"},r.a.createElement(q,null)),r.a.createElement(S.a,{exact:!0,path:"/image-search/favourite"},r.a.createElement(J,null)),r.a.createElement(x.a,{path:"*"},r.a.createElement(V,null)))))))});l.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.39c63314.chunk.js.map