(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),s=a.n(r),o=a(2),l=a(1),u=a.n(l),i=a(3),m=(a(12),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))});function p(e){var t=e.title,a=e.userId,n=e.onChangeUserId,r=e.selectedPostId,s=e.onResetUserId,o=e.id;return c.a.createElement("li",{className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(a,"]: ")),t),c.a.createElement("button",{hidden:o===r,type:"button",className:"PostsList__button button hidden",onClick:function(){return n(o)}},"Open"),c.a.createElement("button",{hidden:o!==r,type:"button",className:"PostsList__button button",onClick:s},"Close"))}p.defaultProps={title:"",userId:null};var d="https://mate-api.herokuapp.com",f=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/posts"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/posts/").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,c=n.data,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=(a(13),function(e){var t=e.selectedUser,a=e.onChangeUserId,r=e.selectedPostId,s=e.onResetUserId,l=Object(n.useState)([]),d=Object(o.a)(l,2),b=d[0],E=d[1],h=Object(n.useState)(!1),v=Object(o.a)(h,2),j=v[0],O=v[1];return Object(n.useEffect)((function(){O(!0),Object(i.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:if(a=e.sent,!t){e.next=7;break}return E(a.filter((function(e){return t===e.userId}))),O(!1),e.abrupt("return");case 7:E(a),O(!1);case 9:case"end":return e.stop()}}),e)})))()}),[t]),j?c.a.createElement(m,null):c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},b.length&&b.map((function(e){return c.a.createElement(p,{key:e.id,id:e.id,title:e.title,userId:e.userId,onChangeUserId:a,selectedPostId:r,onResetUserId:s})}))))}),h=(a(14),function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/comments?postId=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=function(e){return function(e,t){return fetch("".concat(d).concat(e),t).then((function(e){return e.json()})).then((function(e){return e.data}))}(e,{method:"DELETE"})},j=function(e,t,a,n){return fetch("".concat(d,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e,email:t,body:a,postId:n})})};function O(e){var t=e.postId,a=e.onUpdateComments,r=e.selectedPostId,s=Object(n.useState)(""),l=Object(o.a)(s,2),m=l[0],p=l[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),b=f[0],E=f[1],v=Object(n.useState)(""),O=Object(o.a)(v,2),_=O[0],N=O[1],C=Object(n.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"name":p(a);break;case"email":E(a);break;default:N(a)}}),[]),k=Object(n.useCallback)(function(){var e=Object(i.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,j(m,b,_,t);case 3:return e.next=5,h(r).then(a);case 5:p(""),E(""),N("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return c.a.createElement("form",{className:"NewCommentForm",onSubmit:k},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",value:m,onChange:C,placeholder:"Your name",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",value:b,onChange:C,placeholder:"Your email",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",value:_,onChange:C,placeholder:"Type comment here",className:"NewCommentForm__input"})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}function _(e){var t=e.comment,a=e.onUpdateComments,r=e.selectedPostId,s=Object(n.useCallback)(Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t.id,v("/comments/".concat(n));case 2:return e.next=4,h(r).then(a);case 4:case"end":return e.stop()}var n}),e)}))),[]);return c.a.createElement("li",{className:"PostDetails__list-item"},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:s},"X"),c.a.createElement("p",null,t.body))}a(15);function N(e){var t=e.selectedPostId,a=Object(n.useState)(!1),r=Object(o.a)(a,2),s=r[0],l=r[1],p=Object(n.useState)(!0),d=Object(o.a)(p,2),f=d[0],E=d[1],v=Object(n.useState)(null),j=Object(o.a)(v,2),N=j[0],C=j[1],k=Object(n.useState)(null),I=Object(o.a)(k,2),P=I[0],y=I[1],w=Object(n.useCallback)((function(){return E(!f)}),[]),x=Object(n.useCallback)(y,[]);return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var a,n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([b(t),h(t)]);case 2:a=e.sent,n=Object(o.a)(a,2),c=n[0],r=n[1],C(c),y(r),l(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l(!0),function(){e.apply(this,arguments)}()}),[t]),c.a.createElement("div",{className:"PostDetails"},s&&!!t&&c.a.createElement(m,null),N&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,N.title)),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:w},"Hide ".concat(P&&P.length," comments")),c.a.createElement("ul",{className:"PostDetails__list",hidden:f},P&&P.map((function(e){return c.a.createElement(_,{key:e.id,comment:e,selectedPostId:t,onUpdateComments:x})})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(O,{postId:t,onUpdateComments:x,selectedPostId:t})))))}function C(e){var t=e.value,a=e.onSelectUser;return c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{value:t,className:"App__user-selector",onChange:a},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))}a(16),a(17);var k=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(0),l=Object(o.a)(s,2),u=l[0],i=l[1],m=Object(n.useCallback)((function(e){return r(+e.target.value)}),[]),p=Object(n.useCallback)((function(e){return i(e)}),[]),d=Object(n.useCallback)((function(){return i(0)}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement(C,{value:a,onSelectUser:m})),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(E,{selectedUser:a,onChangeUserId:p,selectedPostId:u,onResetUserId:d})),c.a.createElement("div",{className:"App__content"},c.a.createElement(N,{selectedPostId:u}))))};s.a.render(c.a.createElement(k,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.d7578057.chunk.js.map