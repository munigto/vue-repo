webpackJsonp([1],{101:function(e,t,n){function o(e){n(99)}var a=n(8)(n(77),n(106),o,"data-v-6ff8cae2",null);e.exports=a.exports},102:function(e,t,n){var o=n(8)(null,null,null,null,null);e.exports=o.exports},103:function(e,t,n){function o(e){n(98)}var a=n(8)(n(78),n(105),o,"data-v-6bc11f10",null);e.exports=a.exports},104:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},105:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"pay"}},[n("p",[e._v("Pay")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.pay}},[e._v("去支付")])],1)},staticRenderFns:[]}},106:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"done"}},[n("p",[e._v("Payment Result")]),e._v(" "),n("p",{attrs:{id:"message"}},[e._v("Please wait...")])])}]}},31:function(e,t,n){"use strict";var o=n(2),a=n(107),r=n(102),u=n.n(r),c=n(103),s=n.n(c),i=n(101),l=n.n(i);o.default.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Hello",component:u.a},{path:"/pay",name:"pay",component:s.a},{path:"/done",name:"done",component:l.a}]})},33:function(e,t){},34:function(e,t,n){function o(e){n(97)}var a=n(8)(n(76),n(104),o,null,null);e.exports=a.exports},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(34),r=n.n(a),u=n(31),c=n(33),s=(n.n(c),n(32));n.n(s);o.default.config.productionTip=!1,o.default.use(s.Button),new o.default({el:"#app",router:u.a,template:"<App/>",components:{App:r.a}})},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=null;"WebSocket"in window?o=new WebSocket("ws://localhost:3000/websocket"):alert("Not support websocket"),o.onmessage=function(e){document.getElementById("message").innerHTML=e.data},window.onbeforeunload=function(){o.close()},t.default={name:"done"}},78:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(56),a=n.n(o);t.default={name:"pay",methods:{pay:function(){a.a.post("/alipay").then(function(e){document.body.innerHTML=e.data.form,document.forms[0].submit()}).catch(function(e){alert("Oppps! "+e)})}}}},97:function(e,t){},98:function(e,t){},99:function(e,t){}},[75]);
//# sourceMappingURL=app.cd7bf7bb375bf5a02b82.js.map