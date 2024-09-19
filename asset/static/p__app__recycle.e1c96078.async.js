"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1610],{80821:function(I,m,t){t.d(m,{Z:function(){return j}});var E=t(5574),a=t.n(E),s=t(93246),u=t(54006),i=t(31418),p=t(86738),h=t(14726),S=t(83062),D=t(67294),y=t(85893);function j(r){var M=(0,D.useState)(!1),v=a()(M,2),O=v[0],b=v[1],P=i.Z.useApp(),x=(0,u.useIntl)(),T=function(){b(!0),r.action().then(function(_){if(b(!1),typeof r.onSuccess=="function"&&r.onSuccess(_),r.messageSuccess){var n="";typeof r.messageSuccess=="function"?n=r.messageSuccess(_):n=r.messageSuccess,n.indexOf(".")>-1&&(n=x.formatMessage({id:n})),r.asynced?(0,s.Rk)(P,n):(0,s.$h)(P,n)}}).catch(function(_){b(!1),typeof r.onError=="function"&&r.onError(_)})};return r.confirm?(0,y.jsx)(p.Z,{style:{width:500},title:"\u63D0\u793A",description:r.confirm,onConfirm:T,okText:"Yes",cancelText:"No",children:(0,y.jsx)(h.ZP,{disabled:r.disabled,icon:r.icon,loading:O,danger:r.danger,type:r.type,children:r.children})}):(0,y.jsx)(S.Z,{title:r.tips,children:(0,y.jsx)(h.ZP,{disabled:r.disabled,icon:r.icon,loading:O,onClick:T,danger:r.danger,type:r.type,children:r.children})})}},78451:function(I,m,t){t.d(m,{Z:function(){return s}});var E=t(67294),a=t(85893);function s(u){return(0,a.jsx)("span",{style:{wordBreak:"break-word"},children:u.content})}},99343:function(I,m,t){t.r(m),t.d(m,{default:function(){return w}});var E=t(15009),a=t.n(E),s=t(99289),u=t.n(s),i=t(90078),p=t(10641),h=t(62597),S=t(14726),D=t(83062),y=t(42075),j=t(50136),r=t(54006),M=t(87462),v=t(67294),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"},b=O,P=t(84089),x=function(R,d){return v.createElement(P.Z,(0,M.Z)({},R,{ref:d,icon:b}))},T=v.forwardRef(x),B=T,_=t(96974),n=t(80821),l=t(67255),g=t(78451),e=t(85893);function w(){var W=(0,_.UO)(),R=(0,v.useRef)();return(0,v.useEffect)(function(){var d;(d=R.current)===null||d===void 0||d.reload()},[W]),(0,e.jsx)(i._z,{header:{extra:[(0,e.jsx)(S.ZP,{type:"primary",children:(0,e.jsx)(r.Link,{to:"/app/create/image",children:"\u521B\u5EFA\u5BB9\u5668"})},"create")]},children:(0,e.jsx)(p.Z,{scroll:{x:"max-content"},actionRef:R,columns:[{title:"\u540D\u79F0",dataIndex:"siteTitle"},{title:"\u6807\u8BC6",dataIndex:"siteName"},{title:"\u6700\u540E\u9519\u8BEF",dataIndex:"message",width:250,render:function(A,o,C,f,c){return(0,e.jsx)(g.Z,{content:o.message})}},{title:"\u5220\u9664\u65E5\u671F",ellipsis:!0,dataIndex:"deletedAt",search:!1,width:180,render:function(A,o,C,f,c){return new Date(o.deletedAt).toLocaleString()}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:100,render:function(A,o,C,f){return[(0,e.jsx)(r.Link,{to:"/app/create/image?id="+o.id,type:"link",children:(0,e.jsx)(D.Z,{title:"\u518D\u6B21\u6784\u5EFA",children:(0,e.jsx)(B,{})})},"rebuild")]}}],rowKey:"id",request:function(){var d=u()(a()().mark(function A(o,C,f){var c,K,U;return a()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,(0,h.cl)({pageSize:(c=o.pageSize)!==null&&c!==void 0?c:10,page:(K=o.current)!==null&&K!==void 0?K:1,isDelete:!0,siteTitle:o.siteTitle,siteName:o.siteName});case 2:return U=L.sent,L.abrupt("return",{data:U.data.list,success:!0,total:U.data.total});case 4:case"end":return L.stop()}},A)}));return function(A,o,C){return d.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(A){var o=A.selectedRowKeys;return(0,e.jsx)(y.Z,{size:16,children:(0,e.jsx)(n.Z,{danger:!0,type:"primary",action:function(){return(0,h.xb)({id:o})},onSuccess:function(){var f,c;return!((f=R.current)===null||f===void 0)&&f.reloadAndRest&&((c=R.current)===null||c===void 0||c.reloadAndRest()),!0},onError:function(){var f,c;return!((f=R.current)===null||f===void 0)&&f.reset&&((c=R.current)===null||c===void 0||c.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,l.O)(),search:{collapsed:!1},tableExtraRender:function(){return(0,e.jsx)(j.Z,{mode:"horizontal",selectedKeys:["recycle"],items:[{label:(0,e.jsx)(r.Link,{to:"/app/list",replace:!0,children:"\u5BB9\u5668\u5217\u8868"}),key:"all"},{label:(0,e.jsx)(r.Link,{to:"/app/recycle",replace:!0,children:"\u56DE\u6536\u7AD9"}),key:"recycle"}]})}})})}},62597:function(I,m,t){t.d(m,{$G:function(){return p},Ct:function(){return b},Tb:function(){return y},XH:function(){return r},cl:function(){return S},iE:function(){return v},lK:function(){return B},xb:function(){return x}});var E=t(15009),a=t.n(E),s=t(99289),u=t.n(s),i=t(54006);function p(n){return h.apply(this,arguments)}function h(){return h=u()(a()().mark(function n(l){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/site/create-by-image",{method:"POST",data:l}));case 1:case"end":return e.stop()}},n)})),h.apply(this,arguments)}function S(n){return D.apply(this,arguments)}function D(){return D=u()(a()().mark(function n(l){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/site/get-list",{method:"POST",data:l}));case 1:case"end":return e.stop()}},n)})),D.apply(this,arguments)}function y(n){return j.apply(this,arguments)}function j(){return j=u()(a()().mark(function n(l){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.download=!1,e.next=3,(0,i.request)("/api/app/log/run",{method:"POST",data:l});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},n)})),j.apply(this,arguments)}function r(n){return M.apply(this,arguments)}function M(){return M=u()(a()().mark(function n(l){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.download=!0,e.next=3,(0,i.request)("/api/app/log/run",{method:"POST",data:l,responseType:"blob"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},n)})),M.apply(this,arguments)}function v(n){return O.apply(this,arguments)}function O(){return O=u()(a()().mark(function n(l){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.request)("/api/app/site/get-detail",{data:l,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},n)})),O.apply(this,arguments)}function b(n){return P.apply(this,arguments)}function P(){return P=u()(a()().mark(function n(l){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/container/delete",{method:"POST",data:l}));case 1:case"end":return e.stop()}},n)})),P.apply(this,arguments)}function x(n){return T.apply(this,arguments)}function T(){return T=u()(a()().mark(function n(l){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/site/delete",{method:"POST",data:l}));case 1:case"end":return e.stop()}},n)})),T.apply(this,arguments)}function B(n){return _.apply(this,arguments)}function _(){return _=u()(a()().mark(function n(l){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.request)("/api/app/site/update-title",{method:"POST",data:l});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},n)})),_.apply(this,arguments)}},67255:function(I,m,t){t.d(m,{O:function(){return E},j:function(){return a}});function E(){var s,u=parseInt((s=localStorage.getItem("dpanel-pagesize"))!==null&&s!==void 0?s:"0");return{showSizeChanger:!0,defaultPageSize:u!=null?u:20}}function a(s){var u="dpanel-table-column-".concat(s),i={};if(localStorage.getItem(u)){var p;i=JSON.parse((p=localStorage.getItem(u))!==null&&p!==void 0?p:"{}")}return{defaultValue:i,onChange:function(S){localStorage.setItem("dpanel-table-column-".concat(s),JSON.stringify(S))}}}}}]);