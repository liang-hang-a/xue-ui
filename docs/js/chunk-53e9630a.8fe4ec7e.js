(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53e9630a"],{"456d":function(t,s,a){var e=a("4bf8"),n=a("0d58");a("5eda")("keys",function(){return function(t){return n(e(t))}})},5525:function(t,s,a){"use strict";var e=a("af5f"),n=a.n(e);n.a},"5eda":function(t,s,a){var e=a("5ca1"),n=a("8378"),i=a("79e5");t.exports=function(t,s){var a=(n.Object||{})[t]||Object[t],c={};c[t]=s(a),e(e.S+e.F*i(function(){a(1)}),"Object",c)}},"70a1":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"viewport"},[a("section",{staticClass:"x-popover"},[a("h1",{ref:"popover",staticClass:"title"},[t._v("Popover 弹出框")]),a("p",{staticClass:"des"},[t._v("\n                常用于展示提示信息。\n            ")]),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("div",{staticClass:"example"},[a("x-popover",[a("template",{slot:"content"},[t._v("\n                            弹出内容\n                        ")]),a("x-button",[t._v("click 激活")])],2),a("x-popover",{attrs:{position:"bottom"}},[a("template",{slot:"content"},[t._v("\n                            弹出内容\n                        ")]),a("x-button",[t._v("不同方位")])],2),a("x-popover",{attrs:{trigger:"hover",position:"right"}},[a("template",{slot:"content"},[t._v("\n                            弹出内容\n                        ")]),a("x-button",[t._v("hover 激活")])],2)],1),t._m(0)]),a("h2",[t._v("Attributes")]),t._m(1)]),a("section",{staticClass:"x-message"},[a("h1",{ref:"message",staticClass:"title"},[t._v("Message 信息提示")]),a("p",{staticClass:"des"},[t._v("\n                用于确认操作或操作后的反馈提示。\n            ")]),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("h3",[t._v("消息提示框")]),a("div",{staticClass:"example"},[a("x-button",{staticStyle:{background:"#52c41a",color:"#fff"},on:{click:t.success}},[t._v("成功")]),a("x-button",{staticStyle:{background:"#1890ff",color:"#fff"},on:{click:t.info}},[t._v("提示")]),a("x-button",{staticStyle:{background:"#faad14",color:"#fff"},on:{click:t.warning}},[t._v("警告")]),a("x-button",{staticStyle:{background:"#f5222d",color:"#fff"},on:{click:t.error}},[t._v("错误")])],1),t._m(2),a("h3",[t._v("确认对话框")]),a("div",{staticClass:"example"},[a("x-button",{attrs:{primary:""},on:{click:t.onDelete}},[t._v("删除")])],1),t._m(3)]),a("h2",[t._v("全局方法")]),t._m(4),a("h2",[t._v("单独引用")]),t._m(5),a("h2",[t._v("message options")]),t._m(6),a("h2",[t._v("confirm options")]),t._m(7),t._m(8)]),a("section",{staticClass:"x-slides"},[a("h1",{ref:"slides",staticClass:"title"},[t._v("Slides 轮播")]),a("p",{staticClass:"des"},[t._v("\n                在有限的空间内循环播放图片、文字等内容。\n            ")]),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("div",{staticClass:"example"},[a("x-slides",[a("div",{staticClass:"img"},[t._v("1")]),a("div",{staticClass:"img"},[t._v("2")]),a("div",{staticClass:"img"},[t._v("3")]),a("div",{staticClass:"img"},[t._v("4")])])],1),t._m(9)]),a("h2",[t._v("x-slides Attributes")]),t._m(10)]),a("section",{staticClass:"x-table"},[a("h1",{ref:"table",staticClass:"title"},[t._v("Table 表格（未完成）")]),a("p",{staticClass:"des"},[t._v("\n                展示行列数据。\n            ")]),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("div",{staticClass:"example"},[a("x-table",{attrs:{columns:t.columns,dataSource:t.dataSource,"selected-items":t.selectedItems,number:"",striped:""},on:{"update:selectedItems":function(s){t.selectedItems=s}}})],1),a("div",{staticClass:"example"},[a("x-table",{attrs:{columns:t.columns,dataSource:t.dataSource,"selected-items":t.selectedItems,compact:""},on:{"update:selectedItems":function(s){t.selectedItems=s}}})],1),a("pre",{staticClass:"code"})]),a("h2",[t._v("table Attributes")]),t._m(11),a("h2",[t._v("table Events")]),t._m(12)]),a("x-linker",{attrs:{back:{path:"components/navigation/tabs",text:"导航"},to:{path:"components/others/spread",text:"其他"}}})],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-popover>")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<template")]),t._v(" "),a("span",{staticClass:"key"},[t._v("slot")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"content"')]),t._v(">弹出内容"),a("span",{staticClass:"tag"},[t._v("</template>")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<x-button>")]),t._v("click 激活"),a("span",{staticClass:"tag"},[t._v("</x-button>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("</x-popover>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-popover")]),t._v(" "),a("span",{staticClass:"key"},[t._v("position")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"bottom"')]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<template")]),t._v(" "),a("span",{staticClass:"key"},[t._v("slot")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"content"')]),t._v(">弹出内容"),a("span",{staticClass:"tag"},[t._v("</template>")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<x-button>")]),t._v("不同方位"),a("span",{staticClass:"tag"},[t._v("</x-button>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("</x-popover>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-popover")]),t._v(" "),a("span",{staticClass:"key"},[t._v("trigger")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"hover"')]),t._v(" "),a("span",{staticClass:"key"},[t._v("position")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"right"')]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<template")]),t._v(" "),a("span",{staticClass:"key"},[t._v("slot")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"content"')]),t._v(">弹出内容"),a("span",{staticClass:"tag"},[t._v("</template>")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<x-button>")]),t._v("hover 激活"),a("span",{staticClass:"tag"},[t._v("</x-button>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("</x-popover>")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("position")]),a("td",{staticClass:"des"},[t._v("弹框位置，默认顶部")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("top , right , left , bottom")]),a("td",[t._v("top")])]),a("tr",[a("td",[t._v("trigger")]),a("td",{staticClass:"des"},[t._v("弹框的触发方式，默认点击触发")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("click , hover")]),a("td",[t._v("click")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-button")]),t._v(" "),a("span",{staticClass:"key"},[t._v("@click")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"success"')]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("成功"),a("span",{staticClass:"tag"},[t._v("</x-button>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-button")]),t._v(" "),a("span",{staticClass:"key"},[t._v("@click")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"info"')]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("提示"),a("span",{staticClass:"tag"},[t._v("</x-button>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-button")]),t._v(" "),a("span",{staticClass:"key"},[t._v("@click")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"warning"')]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("警告"),a("span",{staticClass:"tag"},[t._v("</x-button>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-button")]),t._v(" "),a("span",{staticClass:"key"},[t._v("@click")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"error"')]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("错误"),a("span",{staticClass:"tag"},[t._v("</x-button>")]),t._v("\n        methods: {\n            success() {\n                this.$success({ message: '这是一条成功消息' });\n            },\n            info() {\n                this.$info({\n                    message: '这是一条提示消息',\n                    duration: 5000\n                });\n            },\n            warning() {\n                this.$warning({ message: '这是一条警告消息' });\n            },\n            error() {\n                this.$error({\n                    message: '这是一条错误消息，并且不会自动关闭',\n                    showClose: true\n                });\n            }\n        }\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-button")]),t._v(" "),a("span",{staticClass:"key"},[t._v("@click")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"onDelete"')]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("删除"),a("span",{staticClass:"tag"},[t._v("</x-button>")]),t._v("\n        methods: {\n            onDelete() {\n                this.$confirm({\n                    title: '请确认操作',\n                    confirmText: \"确定删除\",\n                    cancleText: \"取消删除\",\n                    message: \"永久删除该文件，是否继续？\"\n                }).then(() => {\n                    this.$success({\n                        message: '删除成功',\n                        duration: 1500\n                    });\n                }).catch(() => {\n                    this.$info({\n                        message: '已取消删除',\n                        duration: 1500\n                    });\n                })\n            }\n        }\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"des"},[a("span",{staticClass:"code"},[t._v("message")]),t._v("组件是以插件的方式引入的，它会为"),a("span",{staticClass:"code"},[t._v("Vue.prototype")]),t._v("添加全局方法"),a("span",{staticClass:"code"},[t._v("$success")]),t._v("、"),a("span",{staticClass:"code"},[t._v("$info")]),t._v("、"),a("span",{staticClass:"code"},[t._v("$warning")]),t._v("、"),a("span",{staticClass:"code"},[t._v("$error")]),t._v("和"),a("span",{staticClass:"code"},[t._v("$confirm")]),t._v(" 。因此在"),a("span",{staticClass:"code"},[t._v("Vue")]),t._v("实例中可以采用本页面中的方式调用。\n            ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"des"},[t._v("\n                你可以通过"),a("span",{staticClass:"code"},[a("span",{staticClass:"key"},[t._v("import")]),t._v(" { Message } "),a("span",{staticClass:"key"},[t._v("from")]),a("span",{staticClass:"str"},[t._v("'xue-ui'")]),t._v(";")]),t._v("来单独引入"),a("span",{staticClass:"code"},[t._v("message")]),t._v("，此时调用方法形如"),a("span",{staticClass:"code"},[t._v("Message.success(options)")]),t._v("。\n            ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("message")]),a("td",{staticClass:"des"},[t._v("消息提示的文本")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("——")])]),a("tr",[a("td",[t._v("duration")]),a("td",{staticClass:"des"},[t._v("消息提示显示时间，单位是 ms")]),a("td",{staticClass:"type"},[t._v("Number")]),a("td",[t._v("——")]),a("td",[t._v("2000")])]),a("tr",[a("td",[t._v("showClose")]),a("td",{staticClass:"des"},[t._v("是否带关闭按钮，默认不带，当关闭按钮存在时，消失提示不会自动关闭")]),a("td",{staticClass:"type"},[t._v("Boolean")]),a("td",[t._v("——")]),a("td",[t._v("false")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"des"},[a("span",{staticClass:"code"},[t._v("confirm")]),t._v("确认框将根据用户的操作返回一个"),a("span",{staticClass:"code"},[t._v("promise")]),t._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("title")]),a("td",{staticClass:"des"},[t._v("提示信息标题内容")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("提示")])]),a("tr",[a("td",[t._v("message")]),a("td",{staticClass:"des"},[t._v("提示信息正文内容")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("——")])]),a("tr",[a("td",[t._v("confirmText")]),a("td",{staticClass:"des"},[t._v("确认按钮的文本内容")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("确定")])]),a("tr",[a("td",[t._v("cancleText")]),a("td",{staticClass:"des"},[t._v("取消按钮的文本内容")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("取消")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-slides")]),t._v(" "),a("span",{staticClass:"key"},[t._v(":duration")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"2000"')]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<div")]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("1"),a("span",{staticClass:"tag"},[t._v("/div>")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<div")]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("2"),a("span",{staticClass:"tag"},[t._v("/div>")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<div")]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("3"),a("span",{staticClass:"tag"},[t._v("/div>")]),t._v("\n        "),a("span",{staticClass:"tag"},[t._v("<div")]),a("span",{staticClass:"tag"},[t._v(">")]),t._v("4"),a("span",{staticClass:"tag"},[t._v("/div>")]),t._v("    \n"),a("span",{staticClass:"tag"},[t._v("</x-slides>")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("duration")]),a("td",{staticClass:"des"},[t._v("切换间隔时间，单位为 ms")]),a("td",{staticClass:"type"},[t._v("Number")]),a("td",[t._v("——")]),a("td",[t._v("3000")])]),a("tr",[a("td",[t._v("auto-play")]),a("td",{staticClass:"des"},[t._v("是否开启自动轮播，默认开启")]),a("td",{staticClass:"type"},[t._v("Boolean")]),a("td",[t._v("——")]),a("td",[t._v("true")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("回调参数")])])]),a("tbody")])])}],i=a("e09c"),c={name:"Viewport",mixins:[i["a"]],data:function(){return{columns:[{title:"ID",filed:"id"},{title:"日期",filed:"date"},{title:"姓名",filed:"name"},{title:"省份",filed:"province"},{title:"城市",filed:"city"},{title:"地址",filed:"address"}],dataSource:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",id:200331},{date:"2016-05-02",name:"王二虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",id:200332},{date:"2016-05-04",name:"王大虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",id:200333},{date:"2016-05-01",name:"张小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",id:200334},{date:"2016-05-08",name:"张大虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",id:200335},{date:"2016-05-06",name:"徐小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",id:200336},{date:"2016-05-07",name:"赵大虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",id:200337}],selectedItems:[]}},methods:{success:function(){this.$success({message:"这是一条成功消息"})},info:function(){this.$info({message:"这是一条提示消息",duration:5e3})},warning:function(){this.$warning({message:"这是一条警告消息"})},error:function(){this.$error({message:"这是一条错误消息，并且不会自动关闭",showClose:!0})},onDelete:function(){var t=this;this.$confirm({title:"请确认操作",confirmText:"确定删除",cancleText:"取消删除",message:"永久删除该文件，是否继续？"}).then(function(){t.$success({message:"删除成功",duration:1500})}).catch(function(){t.$info({message:"已取消删除",duration:1500})})}}},v=c,l=(a("5525"),a("2877")),o=Object(l["a"])(v,e,n,!1,null,"95b61a34",null);o.options.__file="Viewport.vue";s["default"]=o.exports},af5f:function(t,s,a){},e09c:function(t,s,a){"use strict";a("ac6a"),a("456d"),a("7f7f"),a("3b2b"),a("4917");var e=a("682a"),n=a.n(e);function i(t){requestAnimationFrame(i),n.a.update(t)}function c(t,s){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,e=null;e="string"===typeof t?document.querySelector(t):t;var i=0,c=0;t===window?(i=window.scrollX,c=window.scrollY):(i=e.scrollLeft,c=e.scrollTop);var v={x:i,y:c};new n.a.Tween(v).to({x:s.x,y:s.y},a).easing(n.a.Easing.Quadratic.Out).onUpdate(function(){e.scrollTo(v.x,v.y)}).start()}requestAnimationFrame(i);var v=c;s["a"]={data:function(){return{currentComponent:"",timer:null,min:""}},inject:["eventBus"],mounted:function(){var t=this;this.$route.path.match(/^\/\w+\/\w+\/(\w+)$/);var s=RegExp.$1;s&&setTimeout(function(){t.smoothScroll(s)},0),window.addEventListener("scroll",this.listenScroll),this.eventBus.$on("link-component",this.smoothScroll)},methods:{smoothScroll:function(t){if(this.$refs[t]){var s=this.$refs[t].offsetTop-88;s!==window.scrollY&&v(window,{x:0,y:s})}},listenScroll:function(){var t=this;this.timer&&window.clearTimeout(this.timer),this.timer=setTimeout(function(){var s=document.body.scrollTop||document.documentElement.scrollTop,a=document.body.scrollHeight,e=document.documentElement.clientHeight,n=t.$refs,i=Object.keys(n);if(t.min=t.min||i[0],i.forEach(function(s){var a=Math.abs(n[s].getBoundingClientRect().top);a<Math.abs(t.$refs[t.min].getBoundingClientRect().top)&&a<e-100&&(t.min=s)}),a-s<=e+88&&(t.min=i[i.length-1]),t.currentComponent!==t.min){t.currentComponent=t.min,t.$route.path.match(/^\/(\w+\/\w+\/)\w+$/);var c=RegExp.$1;t.eventBus.$emit("instage-component",c+t.currentComponent)}},400)}},beforeDestroy:function(){this.eventBus.$off("click-tab",this.smoothScroll),window.removeEventListener("scroll",this.listenScroll),this.timer&&window.clearTimeout(this.timer),this.timer=null}}}}]);
//# sourceMappingURL=chunk-53e9630a.8fe4ec7e.js.map