webpackJsonp([13],{TFzi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("gfkZ"),i={data:function(){return{form:{classificationName:""},rules:{classificationName:[{required:!0,message:"请输入分类名",trigger:"blur"}]}}},methods:{addClassification:function(){var e=this;this.$refs.form.validate(function(t){t&&Object(s.l)({name:e.form.classificationName}).then(function(t){1e3===t.state?e.$Message.success("标签分类成功"):e.$Message.error(t.errMsg)})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-category"},[a("span",{staticClass:"title"},[e._v("新建分类")]),e._v(" "),a("Form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("FormItem",{attrs:{prop:"categoryName"}},[a("Input",{model:{value:e.form.classificationName,callback:function(t){e.$set(e.form,"classificationName",t)},expression:"form.classificationName"}})],1)],1),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:e.addClassification}},[e._v("新建分类")])],1)},staticRenderFns:[]};var n=a("VU/8")(i,r,!1,function(e){a("lO/c")},null,null);t.default=n.exports},"lO/c":function(e,t){}});
//# sourceMappingURL=13.d20524f156881fb6f893.js.map