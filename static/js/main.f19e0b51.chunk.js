(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=a(5),i=Object(n.createContext)(),s=Object(n.createContext)(),m=Object(n.createContext)(),u=Object(n.createContext)(),d=function(e){var t=e.children,a=Object(n.useState)({range:3,timeRange:"all_day"}),l=Object(o.a)(a,2),c=l[0],d=l[1],f=Object(n.useState)({records:[]}),p=Object(o.a)(f,2),E=p[0],h=p[1],b=Object(n.useState)({longitude:60,zoom:1,bearing:0,pitch:0,width:window.innerWidth,height:window.innerHeight}),g=Object(o.a)(b,2),v=g[0],w=g[1],j=Object(n.useState)(null),k=Object(o.a)(j,2),N=k[0],O=k[1];return r.a.createElement(i.Provider,{value:[c,d]},r.a.createElement(s.Provider,{value:[E,h]},r.a.createElement(m.Provider,{value:[v,w]},r.a.createElement(u.Provider,{value:[N,O]},t))))},f=a(14),p=a.n(f),E=a(27),h=a(28),b=a.n(h),g=function(){var e=Object(E.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/".concat(t,".geojson"));case 3:return a=e.sent,e.abrupt("return",a.data.features);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),v=a(12),w=function(e){var t=e.children,a=e.className;return r.a.createElement("h1",{className:a},t)},j=function(e){var t=e.children,a=e.className;return r.a.createElement("h2",{className:a},t)},k=function(e){var t=e.children,a=e.className;return r.a.createElement("h4",{className:a},t)},N=a(29),O=a.n(N),y=a(10),_=function(){var e=Object(n.useContext)(u),t=Object(o.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){window.addEventListener("keydown",function(e){"Escape"===e.key&&l(null)})},[l]);return a&&r.a.createElement(y.b,{latitude:a.geometry.coordinates[1],longitude:a.geometry.coordinates[0],onClose:function(){return l(null)},tipSize:13,offsetTop:-8,offsetLeft:9},r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup__header"},r.a.createElement(k,{className:"m-0 text-center"},"Magnitude: ",a.properties.mag.toFixed(1))),r.a.createElement("div",{className:"popup__inner"},r.a.createElement("p",{className:"m-0"},"When:"," ",O()(a.properties.time).startOf("min").fromNow()),r.a.createElement("p",{className:"m-0"},"Where: ",a.properties.place),r.a.createElement("p",{className:"m-0"},"Type: ",a.properties.type),r.a.createElement("p",{className:"text-center popup__link"},r.a.createElement("a",{href:a.properties.url,target:"blank",className:"d-flex m-0"},"+")))))},x=["#bbb","#ffffaf","#fffe4b","#feff01","#ffe202","#ffd101","#ffad00","#f96400","#fe0000","#800000"],C=(a(57),function(){var e=Object(n.useContext)(i),t=Object(o.a)(e,1)[0],a=Object(n.useContext)(s),l=Object(o.a)(a,1)[0],c=Object(n.useContext)(m),d=Object(o.a)(c,2),f=d[0],p=d[1],E=Object(n.useContext)(u),h=Object(o.a)(E,2)[1],b=function(e){var t=Math.round(e);return x[t]},g=function(){p(Object(v.a)({},f,{width:window.innerWidth,height:window.innerHeight}))};return Object(n.useEffect)(function(){window.addEventListener("resize",g),g()},[]),r.a.createElement(y.c,Object.assign({},f,{mapboxApiAccessToken:"pk.eyJ1IjoiYmFndWV0dGVkaW1zdW0iLCJhIjoiY2p1cjU5bWV3MDg4ejRkbjZ5YTF6bzNibSJ9.5TvJkViFSKc4l9p9JX-41w",onViewportChange:function(e){return p(e)}}),l&&l.records.slice(0,t.range).map(function(e){var t=e.geometry.coordinates[0],a=e.geometry.coordinates[1],n=e.properties.mag,l=Math.floor(20*n);return r.a.createElement(y.a,{key:e.id,latitude:a,longitude:t},r.a.createElement("div",{className:"d-flex map-marker",onClick:function(t){t.preventDefault(),h(e)}},r.a.createElement("div",{className:"position-absolute p-20 radius-50",style:{width:l,height:l,backgroundColor:b(n),opacity:.3}}),r.a.createElement("div",null,n.toFixed(1))))}),r.a.createElement(_,null))}),R=a(1),F=function(){var e=x.map(function(e,t){var a="filter__legend-line";return 0===t?r.a.createElement("div",{key:t,className:a,style:{backgroundColor:e}},"< ",t):9===t?r.a.createElement("div",{key:t,className:a,style:{backgroundColor:e,color:"#fff"}},"> ",t):r.a.createElement("div",{key:t,className:a,style:{backgroundColor:e}},"Between ",t," and ",t+1)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"d-inline-block w-100"},"Legend:"," ",r.a.createElement("small",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Richter_magnitude_scale#Richter_magnitudes",target:"_blank",rel:"noopener noreferrer"},"More information"))," "),r.a.createElement("div",{className:"filter__legend-container"},e))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("p",null,"Real-time feeds from"," ",r.a.createElement("a",{href:"https://www.usgs.gov/natural-hazards/earthquake-hazards/earthquakes",rel:"noopener noreferrer",target:"_blank"},"USGS")," ",r.a.createElement("br",null),"Updated every minute."))},S=function(){var e=Object(n.useContext)(i),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(s),m=Object(o.a)(c,1)[0],u=function(e){var t=e.target,n=t.name,r=t.value;l(Object(v.a)({},a,Object(R.a)({},n,r)))};return r.a.createElement("div",{className:"filter px-20 d-flex"},r.a.createElement("form",null,r.a.createElement(j,null,"Filters"),r.a.createElement("div",{className:"filter__type"},r.a.createElement("label",{htmlFor:"range",className:"d-inline-block w-100"},"Display range: ",a&&a.range," / ",m&&m.records.length),r.a.createElement("div",null,r.a.createElement("input",{className:"filter__slider w-100",type:"range",min:"3",max:m&&m.records.length,value:a.range,name:"range",onChange:u}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"filter__type"},r.a.createElement("label",{htmlFor:"timeRange",className:"d-inline-block w-100"},"Time range:")," ",r.a.createElement("div",{className:"select-container"},r.a.createElement("select",{name:"timeRange",className:"filter__select w-100",value:a.timeRange,onChange:u},r.a.createElement("option",{value:"all_hour"},"Past hour"),r.a.createElement("option",{value:"all_day"},"Past day"),r.a.createElement("option",{value:"all_week"},"Past 7 days*"),r.a.createElement("option",{value:"all_month"},"Past 30 days*")),r.a.createElement("small",{className:"d-inline-block w-100"},r.a.createElement("em",null,"* May take a few seconds to load")))),r.a.createElement("hr",null),r.a.createElement("div",{className:"filter__legend"},r.a.createElement(F,null)),r.a.createElement("hr",null),r.a.createElement("p",null,"Displaying ",r.a.createElement("b",null,a.range)," earthquakes from\xa0the\xa0",r.a.createElement("b",null,"past"," ",("all_hour"===a.timeRange?"hour":"all_day"===a.timeRange&&"day")||"all_week"===a.timeRange&&"week"||"all_month"===a.timeRange&&"month"),".")),r.a.createElement("div",{className:"credits"},r.a.createElement(W,null)))},P=function(){var e=Object(n.useContext)(i),t=Object(o.a)(e,1)[0],a=Object(n.useContext)(s),l=Object(o.a)(a,2)[1];return Object(n.useEffect)(function(){g(t.timeRange).then(function(e){return l({records:e})}).catch(function(e){return console.error(e)})},[t,l]),r.a.createElement("main",{className:"main-container d-flex"},r.a.createElement("aside",{className:"sidebar"},r.a.createElement(w,{className:"m-0 text-center"},"Earthquakes Feeds Map"),r.a.createElement(S,null)),r.a.createElement("section",{className:"map-container vw-75"},r.a.createElement(C,null)))};a(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){return r.a.createElement(d,null,r.a.createElement(P,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.f19e0b51.chunk.js.map