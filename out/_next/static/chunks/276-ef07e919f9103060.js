"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{2684:function(e,s){s.Z=function(){var e=document.getElementById("before-after-slider");if(e){var s=function(s){var t=Math.max(0,Math.min(s,e.offsetWidth));a.style.width=t+"px",r.style.left=t-0+"px"},t=function(e){return e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1,!1},a=document.getElementById("before-image"),i=a.getElementsByTagName("img")[0],r=document.getElementById("resizer"),n=document.querySelector("#before-after-slider .overlay"),l=document.querySelector("#before-after-slider .twentytwenty-before-label"),c=document.querySelector("#before-after-slider .twentytwenty-after-label"),o=!1,d=e.offsetWidth;i.style.width=d+"px",window.addEventListener("resize",(function(){var s=e.offsetWidth;i.style.width=s+"px"})),r.addEventListener("mousedown",(function(){o=!0,r.classList.add("resize"),n.style.opacity=0})),r.addEventListener("mouseup",(function(){o=!1,r.classList.remove("resize"),n.style.opacity=1})),document.body.addEventListener("mousemove",(function(a){if(o){var i=a.pageX;i-=e.getBoundingClientRect().left,s(i),t(a)}})),e.addEventListener("mouseenter",(function(){n.style.opacity=1,l.style.opacity=1,c.style.opacity=1})),e.addEventListener("mouseleave",(function(){o=!1,r.classList.remove("resize"),n.style.opacity=0,l.style.opacity=0,c.style.opacity=0})),r.addEventListener("touchstart",(function(){o=!0,r.classList.add("resize")})),document.body.addEventListener("touchend",(function(){o=!1,r.classList.remove("resize")})),document.body.addEventListener("touchcancel",(function(){o=!1,r.classList.remove("resize")})),document.body.addEventListener("touchmove",(function(a){if(o){var i,r;for(r=0;r<a.changedTouches.length;r++)i=a.changedTouches[r].pageX;i-=e.getBoundingClientRect().left,s(i),t(a)}}))}}},8063:function(e,s){s.Z=function(){var e,s=document.querySelectorAll(".gallery"),t=document.querySelector(".filtering"),a=document.querySelectorAll(".filtering");if(s.length>=1&&s.forEach((function(s){e=new Isotope(s,{itemSelector:".items"})})),t){t.addEventListener("click",(function(s){if(matchesSelector(s.target,"span")){var t=s.target.getAttribute("data-filter");t=t,e.arrange({filter:t})}}));for(var i=0,r=a.length;i<r;i++){var n=a[i];n.addEventListener("click",(function(e){matchesSelector(e.target,"span")}))}}}},6967:function(e,s,t){var a=t(1311);s.Z=function(){var e=document.querySelectorAll(".full-bg .cluom"),s=document.querySelectorAll(".glry-img .tab-img");e&&e.forEach((function(e){e.addEventListener("mouseenter",(function(t){var a=t.target.getAttribute("data-tab");e.classList.remove("current"),t.target.classList.add("current"),s.forEach((function(e){e.classList.remove("current")})),document.getElementById(a).classList.add("current")})),e.addEventListener("mouseleave",(function(e){if(e.target.classList.contains("current"))return(0,a.Z)(e.target).forEach((function(e){return e.classList.remove("current")})),!1}))}))}},6697:function(e,s,t){t.d(s,{Z:function(){return u}});var a=t(5893),i=t(7294),r=JSON.parse('[{"id":1,"title":{"first":"Architecture & interior","second":"Innovative Architecture"},"content":{"first":"Right design and right ideas matter a lot of in interior design","second":"business. a style that makes a statement."},"image":"/assets/img/slid/n/SanitaTeknikGorsel.png"}]'),n=t(2873),l=t(8636),c=t(1664),o=t(1911),d=(t(933),t(8770),t(92),t(5850));function m(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=[],a=!0,i=!1,r=void 0;try{for(var n,l=e[Symbol.iterator]();!(a=(n=l.next()).done)&&(t.push(n.value),!s||t.length!==s);a=!0);}catch(c){i=!0,r=c}finally{try{a||null==l.return||l.return()}finally{if(i)throw r}}return t}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}o.ZP.use([o.W_,o.tl,o.VS]);var u=function(){var e=m(i.useState(!0),2),s=e[0],t=e[1];i.useEffect((function(){setTimeout((function(){t(!1)})),setTimeout((function(){(0,d.Z)()}),1e3)}),[]);i.useRef(null),i.useRef(null),i.useRef(null);return(0,a.jsx)("header",{className:"slider",children:(0,a.jsx)("div",{className:"swiper-container parallax-slider",children:s?null:(0,a.jsx)(n.t,{className:"swiper-wrapper",children:r.map((function(e){return(0,a.jsx)(n.o,{className:"swiper-slide",children:(0,a.jsx)("div",{className:"bg-img valign",style:{backgroundImage:"url(".concat(e.image,")")},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,a.jsxs)("div",{className:"caption hmone mt-100",children:[(0,a.jsx)("h5",{className:"thin",children:e.title.first}),(0,a.jsx)(l.Z,{children:(0,a.jsx)("h1",{"data-splitting":!0,className:"words chars splitting",children:(0,a.jsx)(c.default,{href:"#",children:e.title.second})})}),(null===e||void 0===e?void 0:e.content)&&(0,a.jsxs)("p",{className:"mt-10",children:[e.content.first," ",(0,a.jsx)("br",{}),e.content.second]}),(0,a.jsx)(c.default,{href:"/about",children:(0,a.jsx)("a",{className:"btn-curve btn-bord btn-lit mt-30",children:(0,a.jsx)("span",{children:"Read More"})})})]})})})})})},e.id)}))})})})}},6114:function(e,s,t){var a=t(5893),i=t(7294),r=t(1664),n=t(6967);s.Z=function(){return i.useEffect((function(){(0,n.Z)()}),[]),(0,a.jsxs)("section",{className:"portfolio full-bg",children:[(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-lg-3 col-md-6 cluom current","data-tab":"tab-1",children:[(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{className:"custom-font",children:"Interior"}),(0,a.jsx)("h5",{children:"Exterior Designs"})]}),(0,a.jsx)("div",{className:"more",children:(0,a.jsx)(r.default,{href:"/project-details",children:(0,a.jsxs)("a",{children:["View Project ",(0,a.jsx)("i",{className:"fas fa-chevron-right"})]})})})]}),(0,a.jsxs)("div",{className:"col-lg-3 col-md-6 cluom","data-tab":"tab-2",children:[(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{className:"custom-font",children:"Interior"}),(0,a.jsx)("h5",{children:"Maroon Beach Hotel"})]}),(0,a.jsx)("div",{className:"more",children:(0,a.jsx)(r.default,{href:"/project-details",children:(0,a.jsxs)("a",{children:["View Project ",(0,a.jsx)("i",{className:"fas fa-chevron-right"})]})})})]}),(0,a.jsxs)("div",{className:"col-lg-3 col-md-6 cluom","data-tab":"tab-3",children:[(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{className:"custom-font",children:"Interior"}),(0,a.jsx)("h5",{children:"Apartment Renovation"})]}),(0,a.jsx)("div",{className:"more",children:(0,a.jsx)(r.default,{href:"/project-details",children:(0,a.jsxs)("a",{children:["View Project ",(0,a.jsx)("i",{className:"fas fa-chevron-right"})]})})})]}),(0,a.jsxs)("div",{className:"col-lg-3 col-md-6 cluom","data-tab":"tab-4",children:[(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{className:"custom-font",children:"Interior"}),(0,a.jsx)("h5",{children:"Modern Minimalist House"})]}),(0,a.jsx)("div",{className:"more",children:(0,a.jsx)(r.default,{href:"/project-details",children:(0,a.jsxs)("a",{children:["View Project ",(0,a.jsx)("i",{className:"fas fa-chevron-right"})]})})})]})]})}),(0,a.jsxs)("div",{className:"glry-img",children:[(0,a.jsx)("div",{id:"tab-1",className:"bg-img tab-img current",style:{backgroundImage:"url(/assets/img/portfolio/full/4.jpg)"},"data-overlay-dark":"2"}),(0,a.jsx)("div",{id:"tab-2",className:"bg-img tab-img",style:{backgroundImage:"url(/assets/img/portfolio/full/22.jpg)"},"data-overlay-dark":"2"}),(0,a.jsx)("div",{id:"tab-3",className:"bg-img tab-img",style:{backgroundImage:"url(/assets/img/portfolio/full/CornerInterior.png)"},"data-overlay-dark":"2"}),(0,a.jsx)("div",{id:"tab-4",className:"bg-img tab-img",style:{backgroundImage:"url(/assets/img/portfolio/full/FrontInterior.png)"},"data-overlay-dark":"2"})]})]})}},1207:function(e,s,t){var a=t(5893),i=t(7294),r=t(1239);t(2157);function n(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=[],a=!0,i=!1,r=void 0;try{for(var n,l=e[Symbol.iterator]();!(a=(n=l.next()).done)&&(t.push(n.value),!s||t.length!==s);a=!0);}catch(c){i=!0,r=c}finally{try{a||null==l.return||l.return()}finally{if(i)throw r}}return t}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}s.Z=function(){i.useEffect((function(){console.clear()}),[]);var e=n(i.useState(!1),2),s=e[0],t=e[1];return(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"container-fluid mb-100 pl-0 pr-0",children:(0,a.jsx)("div",{className:"video-wrapper section-padding bg-img parallaxie valign",style:{backgroundImage:"url(/assets/img/portfolio/project1/videoKapak.jpeg)"},"data-overlay-dark":"4",children:(0,a.jsxs)("div",{className:"full-width text-center",children:[(0,a.jsx)(r.Z,{autoplay:!0,isOpen:s,videoId:"AzwC6umvd1s",onClose:function(){return t(!1)}}),(0,a.jsx)("a",{className:"vid",onClick:function(e){e.preventDefault(),t(!0)},href:"https://vimeo.com/127203262",children:(0,a.jsx)("div",{className:"vid-butn",children:(0,a.jsx)("span",{className:"icon",children:(0,a.jsx)("i",{className:"fas fa-play"})})})})]})})})})}},9555:function(e,s,t){var a=t(5893),i=t(7294),r=(t(1664),t(8063));s.Z=function(){return i.useEffect((function(){setTimeout((function(){window.Isotope&&(0,r.Z)()}),1e3)}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"works filter-img four-col ",children:(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsx)("div",{className:"filtering text-center mb-30",children:(0,a.jsxs)("div",{className:"filter bg-dark pt-2",children:[(0,a.jsx)("span",{"data-filter":".interior",className:"btn-light rounded-circle p-4 mr-1"}),(0,a.jsx)("span",{"data-filter":".theaters",className:"btn-danger rounded-circle p-4 mr-1"}),(0,a.jsx)("span",{"data-filter":".residential",className:"btn-primary rounded-circle p-4 mr-1"}),(0,a.jsx)("span",{"data-filter":".interior1",className:"btn-success rounded-circle p-4 mr-1"}),(0,a.jsx)("span",{"data-filter":".residential1",className:"btn-dark rounded-circle p-4 mr-1"}),(0,a.jsx)("span",{"data-filter":".theaters1",className:"btn-light rounded-circle p-4 mr-1"}),(0,a.jsx)("span",{"data-filter":".interior2",className:"btn-dark rounded-circle p-4 mr-1"})]})}),(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row gallery ",children:[(0,a.jsx)("div",{className:"col-lg-12 col-md-12 items interior",children:(0,a.jsx)("div",{className:"item ",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/assets/img/works/col/kar-beyaz.png",alt:""})})})}),(0,a.jsx)("div",{className:"col-lg-12 col-md-12 items theaters",children:(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/assets/img/works/col/ral3002.png",alt:""})})})}),(0,a.jsx)("div",{className:"col-lg-12 col-md-12 items residential",children:(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/assets/img/works/col/ral5002.png",alt:""})})})}),(0,a.jsx)("div",{className:"col-lg-12 col-md-12 items interior1",children:(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/assets/img/works/col/ral6029.png",alt:""})})})}),(0,a.jsx)("div",{className:"col-lg-12 col-md-12 items residential1",children:(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/assets/img/works/col/ral7021.png",alt:""})})})}),(0,a.jsx)("div",{className:"col-lg-12 col-md-12 items theaters1",children:(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/assets/img/works/col/ral9018.png",alt:""})})})}),(0,a.jsx)("div",{className:"col-lg-12 col-md-12 items interior2",children:(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/assets/img/works/col/ral7021.png",alt:""})})})})]})})]})})})}}}]);