(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-069a6ba8"],{3712:function(e,t,a){"use strict";a("b4c5")},"50fc":function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a("b775");function o(e){return Object(n["a"])({url:"admin/getUserList",method:"post",data:e})}function r(e){return Object(n["a"])({url:"admin/resetPassword",method:"post",data:e})}function s(e){return Object(n["a"])({url:"admin/deleteUser",method:"post",data:e})}function i(e){return Object(n["a"])({url:"admin/addUser",method:"post",data:e})}function l(e){return Object(n["a"])({url:"admin/addHandle",method:"post",data:e})}},b4c5:function(e,t,a){},e961:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.searchForm.title,callback:function(t){e.$set(e.searchForm,"title",t)},expression:"searchForm.title"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),a("el-button",{attrs:{type:"info"},on:{click:e.resultSearchTable}},[e._v("重置")])],1)],1)],1),a("el-divider",{attrs:{"content-position":"left"}},[e._v("工单信息")]),a("el-table",{ref:"orderTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),a("el-table-column",{attrs:{label:"标题",prop:"title","show-overflow-tooltip":"","min-width":"120"}}),a("el-table-column",{attrs:{label:"内容","show-overflow-tooltip":"","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.openInfo(n.id)}}},[e._v(e._s(e.getContent(n.content)))])]}}])}),a("el-table-column",{attrs:{label:"处理状态",align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return["0"===n.state?a("el-tag",{attrs:{type:"danger"}},[e._v("等待处理")]):"1"===n.state?a("el-tag",{attrs:{type:"success"}},[e._v("已处理")]):a("el-tag",{attrs:{type:"info"}},[e._v("已关闭")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return["2"===n.state?a("el-button",{attrs:{type:"text",disabled:""}},[e._v("处理")]):a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleOrder(n.id)}}},[e._v("处理")])]}}])})],1),a("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":e.searchForm.page,"page-sizes":[20,40,60],"page-size":e.searchForm.size,layout:"total, sizes, prev, pager, next, jumper",total:e.dataCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("Message",{attrs:{"order-id":e.dialogId,visible:e.dialog},on:{"update:visible":function(t){e.dialog=t},changeVisible:e.changeVisible}}),a("Handle",{attrs:{"order-id":e.handleId,visible:e.dialogHandle},on:{"update:visible":function(t){e.dialogHandle=t},changeVisible:e.changeVisibleHandle}})],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"工单详情","append-to-body":!0,visible:e.visible,"destroy-on-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,width:"50%"},on:{"update:visible":function(t){e.visible=t},open:e.open}},[a("el-card",{staticClass:"box-card"},[a("el-form",{ref:"orderFrom",staticClass:"demo-caseFrom",attrs:{size:"small","label-width":"200px","status-icon":!0}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{placeholder:"请输入标题",readonly:""},model:{value:e.order.title,callback:function(t){e.$set(e.order,"title",t)},expression:"order.title"}})],1),a("el-form-item",{attrs:{label:"内容"}},[a("el-input",{attrs:{type:"textarea",readonly:"",maxlength:"2000",rows:20},model:{value:e.order.content,callback:function(t){e.$set(e.order,"content",t)},expression:"order.content"}})],1),a("el-form-item",{attrs:{label:"状态"}},["0"===e.order.state?a("el-tag",{attrs:{type:"danger"}},[e._v("等待处理")]):"1"===e.order.state?a("el-tag",{attrs:{type:"success"}},[e._v("已处理")]):a("el-tag",{attrs:{type:"info"}},[e._v("已关闭")])],1),a("el-form-item",{attrs:{label:"修改时间"}},[a("el-input",{attrs:{readonly:""},model:{value:e.order.updateTime,callback:function(t){e.$set(e.order,"updateTime",t)},expression:"order.updateTime"}})],1),a("el-form-item",{attrs:{label:"提交时间"}},[a("el-input",{attrs:{readonly:""},model:{value:e.order.createTime,callback:function(t){e.$set(e.order,"createTime",t)},expression:"order.createTime"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.onClose}},[e._v("关 闭")])],1)],1)},s=[],i=a("c24f"),l={props:{visible:{type:Boolean,default:!1},orderId:{type:String,default:""}},data:function(){return{order:[]}},methods:{open:function(){this.getMessage()},getMessage:function(){var e=this;this.order=[],Object(i["c"])(this.orderId).then((function(t){var a=t.code,n=t.data;200===a&&(e.order=n)}))},onClose:function(){this.$emit("changeVisible",!1)}}},c=l,d=a("2877"),u=Object(d["a"])(c,r,s,!1,null,null,null),p=u.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"处理详情","append-to-body":!0,visible:e.visible,"destroy-on-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,width:"40%"},on:{"update:visible":function(t){e.visible=t},open:e.open}},[a("el-divider",{attrs:{"content-position":"left"}},[e._v("留言板")]),a("div",{staticClass:"div-height"},[a("el-timeline",[e._l(e.evensData,(function(t){return[a("el-timeline-item",{key:t.id,attrs:{timestamp:t.createTime,placement:"top",color:"#0bbd87",icon:"el-icon-success"}},[a("el-card",[a("h4",[e._v(e._s(t.content))]),a("p",[e._v("由 "+e._s(t.creatorName)+" 提交")])])],1)]}))],2)],1),a("el-divider",{attrs:{"content-position":"left"}},[e._v("处理信息")]),a("el-card",{staticClass:"box-card"},[a("el-form",{ref:"sendApplyFrom",attrs:{model:e.apply,rules:e.rule}},[a("el-form-item",[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:20},placeholder:"请输入内容",autocomplete:"off"},model:{value:e.apply.content,callback:function(t){e.$set(e.apply,"content",t)},expression:"apply.content"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.onClose}},[e._v("关 闭")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitData}},[e._v("提 交")])],1)],1)},f=[],m=a("50fc"),b={props:{visible:{type:Boolean,default:!1},orderId:{type:String,default:""}},data:function(){return{apply:{problemId:"",content:""},evensData:[],rule:{content:[{required:!0,message:"字段必填",trigger:"blur"}]}}},methods:{open:function(){this.apply.problemId=this.orderId,this.apply.content="",this.getMessage()},getMessage:function(){var e=this;this.evensData=[],Object(i["d"])(this.orderId).then((function(t){var a=t.code,n=t.data;200===a&&(e.evensData=n)}))},onClose:function(){this.$emit("changeVisible",!1)},submitData:function(){var e=this;this.$refs.sendApplyFrom.validate((function(t){t&&Object(m["a"])(e.apply).then((function(t){var a=t.code,n=t.msg;200===a?(e.$message.success("处理成功！"),e.apply.content="",e.getMessage()):e.$message.error(n||"处理失败")})).catch((function(t){e.$message.error(t||"处理失败")}))}))}}},g=b,v=(a("3712"),Object(d["a"])(g,h,f,!1,null,"49c8fcde",null)),y=v.exports,_={name:"Index",components:{Message:p,Handle:y},data:function(){return{dialog:!1,dialogId:"",searchForm:{page:1,size:20,title:""},tableData:[],dataCount:0,dialogHandle:!1,handleId:""}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;this.tableData=[],this.dataCount=0,Object(i["e"])(this.searchForm).then((function(t){var a=t.code,n=t.data;200===a&&(e.tableData=n.content,e.dataCount=n.totalElements)}))},search:function(){this.getData()},resultSearchTable:function(){this.searchForm={page:1,size:20,title:""},this.getData()},handleSizeChange:function(e){this.searchForm.startpage=1,this.searchForm.pagesize=e,this.getData()},handleCurrentChange:function(e){this.searchForm.startpage=e,this.getData()},openInfo:function(e){this.dialogId=e,this.changeVisible(!0)},changeVisible:function(e){e||this.getData(),this.dialog=e},changeVisibleHandle:function(e){e||this.getData(),this.dialogHandle=e},handleOrder:function(e){this.handleId=e,this.changeVisibleHandle(!0)},getContent:function(e){return e.length>50?e.substring(0,50)+"...":e},closeOrder:function(e){var t=this;this.$confirm("确定要关闭该订单吗？","提示",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["b"])(e).then((function(e){var a=e.code,n=e.message;200===a?(t.$message.success(n||"订单关闭成功！"),t.getData()):t.$message.error(n||"订单关闭失败！")})).catch((function(e){t.$message.error(e||"订单关闭失败！")}))}))}}},w=_,C=Object(d["a"])(w,n,o,!1,null,"76cdb3f8",null);t["default"]=C.exports}}]);