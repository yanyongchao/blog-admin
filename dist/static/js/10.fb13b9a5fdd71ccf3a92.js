webpackJsonp([10],{kzEz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),r=i.n(n),a=i("gfkZ"),c=i("NYxO"),o=i("Q0Ca"),s={data:function(){var t=this;this.$createElement;return{articles:[],columns:[{title:"标题",key:"title"},{title:"日期",key:"createAt",render:function(t,e){return t("span",[o.a.timestampFormat(e.row.createAt,"YYYY.MM.DD HH:mm:ss")])}},{title:"分类",key:"classification",render:function(e,i){var n=i.row.classification;return e("tag",[t.getClassificationName(n)])}},{title:"标签",key:"category",render:function(e,i){return i.row.category.map(function(i){return e("tag",[t.getCategoryName(i)])})}},{title:"编辑",key:"action",align:"center",render:function(e,i){return e("div",[e("i-button",{attrs:{type:"primary"},style:{marginRight:"10px"},on:{click:function(){t.editArticle(i.row)}}},["编辑"]),e("i-button",{attrs:{type:"error"},on:{click:function(){t.deleteArticle(i.row._id)}}},["删除"])])}}],total:0}},computed:r()({},Object(c.c)(["categories","classifications"])),methods:r()({},Object(c.b)(["getCategories","getClassifications"]),{getAtricles:function(){var t=this;Object(a.f)().then(function(e){1e3===e.state&&(t.articles=e.data.articles,t.total=e.data.total)})},getCategoryName:function(t){var e=this.categories.find(function(e){return e._id===t});return e&&e.name},getClassificationName:function(t){var e=this.classifications.find(function(e){return e._id===t});return e&&e.name},editArticle:function(t){this.$router.push({name:"article-edit",params:{id:t._id}})},deleteArticle:function(t){var e=this;Object(a.b)(t).then(function(t){1e3===t.state&&e.getAtricles()})},pageChange:function(t){}}),created:function(){this.getAtricles()}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Table",{attrs:{border:"",columns:this.columns,data:this.articles}}),this._v(" "),e("Page",{attrs:{total:this.total},on:{"on-change":this.pageChange}})],1)},staticRenderFns:[]};var u=i("VU/8")(s,l,!1,function(t){i("uONE")},null,null);e.default=u.exports},uONE:function(t,e){}});
//# sourceMappingURL=10.fb13b9a5fdd71ccf3a92.js.map