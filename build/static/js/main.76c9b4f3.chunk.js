(this.webpackJsonptest=this.webpackJsonptest||[]).push([[4],{108:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(26),o=n.n(a),u=(n(80),n(22)),i=n(8),s=n(19),b=n(40),j=n(131),l=n(132),O=n(134),d=n(135),f=n(133),h=n(136),p=function(t){return t.auth.isLogIn},g=function(t){return t.auth.user.name},x=n(2),m={onLogOut:b.a.logOut},v=Object(s.b)((function(t){return{name:g(t)}}),m)((function(t){var e=t.name,n=t.onLogOut;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:["Welcome, ",e,"!"]})}),Object(x.jsx)(h.a,{color:"inherit",type:"button",onClick:n,children:"Logout"})]})})),k=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(h.a,{color:"inherit",component:u.b,exact:!0,to:"/register",children:"Registration"}),Object(x.jsx)(h.a,{color:"inherit",component:u.b,exact:!0,to:"/login",children:"Login"})]})},y=Object(j.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1,textDecoration:"none"}}})),C=Object(s.b)((function(t){return{isAuthenticated:p(t)}}))((function(t){var e=t.isAuthenticated,n=y();return Object(x.jsx)("div",{className:n.root,children:Object(x.jsx)(l.a,{position:"static",children:Object(x.jsx)(f.a,{maxWidth:"lg",children:Object(x.jsxs)(O.a,{id:"toolbar-menu",children:[Object(x.jsx)(d.a,{variant:"h6",color:"inherit",className:n.title,component:u.b,exact:!0,to:"/",children:"Main"}),e&&Object(x.jsx)(d.a,{variant:"h6",color:"inherit",className:n.title,component:u.b,exact:!0,to:"/contacts",children:"PhoneBook"}),e?Object(x.jsx)(v,{}):Object(x.jsx)(k,{})]})})})})})),w=n(31),R=n(46),E=["children","redirectTo"];function S(t){var e=t.children,n=t.redirectTo,c=Object(R.a)(t,E),r=Object(s.d)(p);return Object(x.jsx)(i.b,Object(w.a)(Object(w.a)({},c),{},{children:r?e:Object(x.jsx)(i.a,{to:n})}))}var T=["redirectTo","children"],q=function(t){var e=t.redirectTo,n=t.children,c=Object(R.a)(t,T),r=Object(s.d)(p);return Object(x.jsx)(i.b,Object(w.a)(Object(w.a)({},c),{},{children:r&&c.restricted?Object(x.jsx)(i.a,{to:e}):n}))},z=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,192))})),L=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,193))})),U=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,196))})),A=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,198))}));function F(){var t=Object(s.c)();return Object(c.useEffect)((function(){t(b.a.getCurrentUser)}),[t]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{}),Object(x.jsx)(c.Suspense,{fallback:Object(x.jsx)("p",{children:"Wait..."}),children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{exact:!0,path:"/",component:z}),Object(x.jsx)(q,{path:"/register",restricted:!0,redirectTo:"/contacts",component:L}),Object(x.jsx)(q,{path:"/login",restricted:!0,redirectTo:"/contacts",component:U}),Object(x.jsx)(S,{path:"/contacts",redirectTo:"/login",component:A}),Object(x.jsx)(i.a,{to:"/"})]})})]})}var B,I,N,P,W,G=n(45),J=n(3),M=n(70),D=n.n(M),H=n(25),K=n(71),Q=n.n(K),V=n(6),X=n(11),Y=n(5),Z={name:null,email:null},$=Object(J.c)(Z,(B={},Object(V.a)(B,Y.l,(function(t,e){return e.payload.user})),Object(V.a)(B,Y.f,(function(t,e){return e.payload.user})),Object(V.a)(B,Y.i,(function(){return Z})),Object(V.a)(B,Y.c,(function(t,e){return e.payload})),B)),_=Object(J.c)(null,(I={},Object(V.a)(I,Y.l,(function(t,e){return e.payload.token})),Object(V.a)(I,Y.f,(function(t,e){return e.payload.token})),Object(V.a)(I,Y.i,(function(){return null})),I)),tt=function(t,e){return e.payload},et=Object(J.c)(null,(N={},Object(V.a)(N,Y.j,tt),Object(V.a)(N,Y.d,tt),Object(V.a)(N,Y.g,tt),Object(V.a)(N,Y.a,tt),N)),nt=Object(J.c)(!1,(P={},Object(V.a)(P,Y.l,(function(){return!0})),Object(V.a)(P,Y.f,(function(){return!0})),Object(V.a)(P,Y.c,(function(){return!0})),Object(V.a)(P,Y.j,(function(){return!1})),Object(V.a)(P,Y.d,(function(){return!1})),Object(V.a)(P,Y.a,(function(){return!1})),Object(V.a)(P,Y.i,(function(){return!1})),P)),ct=Object(X.b)({user:$,isLogIn:nt,token:_,error:et}),rt=n(33),at=Object(J.c)([],(W={},Object(V.a)(W,rt.i,(function(t,e){return e.payload})),Object(V.a)(W,rt.c,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object(V.a)(W,rt.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),W)),ot=Object(J.c)("",Object(V.a)({},rt.j,(function(t,e){return e.payload}))),ut=Object(X.b)({ContactsReducer:at,FilterReducer:ot}),it=[].concat(Object(G.a)(Object(J.d)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}})),[D.a]),st={key:"auth",storage:Q.a,whitelist:["token"]},bt=Object(J.a)({reducer:{contacts:ut,auth:Object(H.g)(st,ct)},middleware:it,devToolss:!1}),jt={store:bt,persistor:Object(H.h)(bt)},lt=n(72);n(107);o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(s.a,{store:jt.store,children:Object(x.jsx)(lt.a,{loading:null,persistor:jt.persistor,children:Object(x.jsx)(u.a,{children:Object(x.jsx)(F,{})})})})}),document.getElementById("root"))},33:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"j",(function(){return O}));var c=n(3),r=Object(c.b)("contacts/fetchContactRequest"),a=Object(c.b)("contacts/fetchContactSuccess"),o=Object(c.b)("contacts/fetchContactError"),u=Object(c.b)("contacts/contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),l=Object(c.b)("contacts/deleteContactError"),O=Object(c.b)("app/changeFilter")},40:function(t,e,n){"use strict";var c=n(24),r=n.n(c),a=n(34),o=n(27),u=n.n(o),i=n(5);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var s={set:function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},unset:function(){u.a.defaults.headers.common.Authorization=""}};e.a={token:s,register:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.k)()),e.prev=1,e.next=4,u.a.post("/users/signup",t);case 4:c=e.sent,s.set(c.data.token),n(Object(i.l)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.j)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n(Object(i.e)()),e.prev=2,e.next=5,u.a.post("/users/login",t);case 5:c=e.sent,s.set(c.data.token),n(Object(i.f)(c.data)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n(Object(i.d)(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.h)()),t.prev=1,t.next=4,u.a.post("/users/logout");case 4:s.unset(),e(Object(i.i)()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(i.g)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),a=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return s.set(a),e(Object(i.b)()),t.prev=5,t.next=8,u.a.get("/users/current");case 8:o=t.sent,e(Object(i.c)(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(i.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}}},5:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f}));var c=n(3),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),o=Object(c.b)("auth/registerError"),u=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),l=Object(c.b)("auth/logoutError"),O=Object(c.b)("auth/getCurrentUserRequest"),d=Object(c.b)("auth/getCurrentUserSuccess"),f=Object(c.b)("auth/getCurrentUserError")},80:function(t,e,n){}},[[108,6,7]]]);
//# sourceMappingURL=main.76c9b4f3.chunk.js.map