var __vueify_style__ = require("vueify-insert-css").insert("div[{{id}}]{color:red}.test[{{id}}]{color:green}.test[{{id}}]:after{content:'bye!'}@media print{div[{{id}}]{color:green}}")
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div {{id}}=\"\">hi<p class=test {{id}}=\"\">bye</div><template v-if=ok><p class=test {{id}}=\"\">yo</template><svg {{id}}=\"\"><template><p {{id}}=\"\"></template></svg>"
