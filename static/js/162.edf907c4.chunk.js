"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[162],{964:function(n,t,e){e.d(t,{IQ:function(){return d},Jh:function(){return h},ST:function(){return u},jK:function(){return l},v9:function(){return v}});var r=e(861),a=e(757),i=e.n(a),c=e(44),o="f3ea910b205c898fa80453aad139450a",s="https://api.themoviedb.org/3";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(i().mark((function n(){var t,e,r,a,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,e="".concat(s,"/trending/movie/day?api_key=").concat(o,"&page=").concat(t),n.next=4,c.ZP.get(e);case 4:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 7:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"?api_key=").concat(o),n.next=3,c.ZP.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o),n.next=3,c.ZP.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o),n.next=3,c.ZP.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t),n.next=3,c.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u()},162:function(n,t,e){e.r(t),e.d(t,{default:function(){return J}});var r,a,i,c,o,s,u,p,l,f,d,x,h=e(885),m=e(791),v=e(689),g=e(861),Z=e(757),y=e.n(Z),b=e(731),w=e(168),j=e(444),k=j.ZP.div(r||(r=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),P=j.ZP.form(a||(a=(0,w.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  text-transform: uppercase;\n"]))),_=j.ZP.input(i||(i=(0,w.Z)(["\n  padding: 6px 6px 6px 10px;\n  border-radius: 8px;\n  font-size: 22px;\n  width: 360px;\n"]))),S=j.ZP.button(c||(c=(0,w.Z)(["\n  font-size: 18px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  border: 1px solid #000;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #000;\n  font-weight: 500;\n  background: #cfe0e8;\n\n  :hover,\n  :focus {\n    background-color: #87bdd8;\n    color: #fff;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),z=e(964),T=e(521),q=e(184),C=function(n){var t,e=n.setSearchMovies,r=(0,b.lr)(),a=(0,h.Z)(r,2),i=a[0],c=a[1],o=null!==(t=i.get("query"))&&void 0!==t?t:"";return(0,m.useEffect)((function(){function n(){return(n=(0,g.Z)(y().mark((function n(){var t,r;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,z.v9)(o);case 2:t=n.sent,r=t.map((function(n){return{id:n.id,title:n.title,poster:"https://image.tmdb.org/t/p/w500"+n.poster_path,vote_average:n.vote_average}})),e(r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o&&function(){n.apply(this,arguments)}()}),[o,e]),(0,q.jsxs)(k,{children:[(0,q.jsxs)(P,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget,e=t.elements.search.value;""!==e.trim()?(c({query:e}),t.reset()):alert("Oops!!! Enter the film name")},children:[(0,q.jsx)(_,{type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,q.jsx)(S,{type:"submit",children:"Search"})]}),(0,q.jsx)(m.Suspense,{fallback:(0,q.jsx)(T.a,{}),children:(0,q.jsx)(v.j3,{})})]})},E=j.ZP.section(o||(o=(0,w.Z)(["\n  padding: 120px 20px;\n  margin: 0 auto;\n  max-width: 1280px;\n"]))),F=j.ZP.ul(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  /* flex-direction: column; */\n  justify-content: center;\n  gap: 20px;\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  margin: 0 auto;\n"]))),M=j.ZP.li(u||(u=(0,w.Z)(["\n  width: 200px;\n\n  :hover,\n  :focus {\n    scale: 1.1;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),N=j.ZP.div(p||(p=(0,w.Z)(["\n  padding-top: 8px;\n  width: 200px;\n"]))),U=j.ZP.p(l||(l=(0,w.Z)(["\n  margin: 0 0 10px 0;\n  font-size: 18px;\n"]))),D=(0,j.ZP)(b.rU)(f||(f=(0,w.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  color: #000;\n\n  :hover,\n  :focus {\n    color: #fff;\n    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),H=j.ZP.p(d||(d=(0,w.Z)(["\n  font-size: 40px;\n  text-align: center;\n"]))),I=j.ZP.img(x||(x=(0,w.Z)(["\n  width: 100%;\n  height: 300px;\n  display: block;\n  border-radius: 5px;\n"]))),J=function(){var n=(0,v.TH)(),t=(0,m.useState)(""),e=(0,h.Z)(t,2),r=e[0],a=e[1];return(0,q.jsx)("main",{children:(0,q.jsxs)(E,{children:[(0,q.jsx)(C,{setSearchMovies:a}),""!==r?(0,q.jsx)("div",{children:(0,q.jsx)(F,{children:r.map((function(t){var e=t.id,r=t.poster,a=t.title,i=t.vote_average;return(0,q.jsx)(M,{children:(0,q.jsxs)(D,{to:"/movies/".concat(e),state:{from:n},children:[(0,q.jsx)(I,{src:r&&"https://image.tmdb.org/t/p/w500null"!==r?r:"https://dummyimage.com/200x300/858585/fff.jpg&text=No+photo",alt:a,width:"200",height:"240"}),(0,q.jsxs)(N,{children:[(0,q.jsxs)(U,{children:[a," "]}),0!==i&&(0,q.jsxs)(U,{children:["Rating: ",i.toFixed(1)]})]})]})},e)}))})}):(0,q.jsx)(H,{children:"No movies... Try to find something"}),0===r.length&&""!==r&&(0,q.jsx)(H,{children:"There is no movies with that name"})]})})}}}]);
//# sourceMappingURL=162.edf907c4.chunk.js.map