webpackJsonp([8],{"8JCK":function(e,t){},Fs0F:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("gfkZ"),o={data:function(){return{form:{categoryName:""},rules:{categoryName:[{required:!0,message:"请输入标签名",trigger:"blur"}]}}},methods:{addCategory:function(){var e=this;this.$refs.form.validate(function(t){t&&Object(a.k)({name:e.form.categoryName}).then(function(t){1e3===t.state?e.$Message.success("标签新建成功"):e.$Message.error(t.errMsg)})})}}},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-category"},[r("span",{staticClass:"title"},[e._v("新建标签")]),e._v(" "),r("Form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("FormItem",{attrs:{prop:"categoryName"}},[r("Input",{model:{value:e.form.categoryName,callback:function(t){e.$set(e.form,"categoryName",t)},expression:"form.categoryName"}})],1)],1),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:e.addCategory}},[e._v("新建标签")])],1)},staticRenderFns:[]};var n=r("VU/8")(o,s,!1,function(e){r("8JCK")},null,null);t.default=n.exports}});
//# sourceMappingURL=8.18ec9132812bcaaf0a0d.js.map