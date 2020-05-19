(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{320:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),a("p",[t._v("过滤器在我们日常开发中应该算是一个非常常用的功能了，它经常会被用来格式化模板中的文本。过滤器可以单个使用，也可以多个串联一起使用，还可以传参数使用。那么在"),a("code",[t._v("Vue")]),t._v("中过滤器是如何工作的呢？其内部原理是怎样的？"),a("code",[t._v("Vue")]),t._v("又是如何识别出我们所写的过滤器的？接下来，我们将从源码角度出发，探究过滤器内部的工作原理，分析其工作流程，揭开它神秘的面纱。")]),t._v(" "),a("h2",{attrs:{id:"_2-用法回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-用法回顾"}},[t._v("#")]),t._v(" 2. 用法回顾")]),t._v(" "),a("p",[t._v("在介绍过滤器内部原理之前，我们先根据官方文档来回顾一下过滤器的使用方法。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-使用方式"}},[t._v("#")]),t._v(" 2.1 使用方式")]),t._v(" "),a("p",[t._v("过滤器有两种使用方式："),a("strong",[t._v("在双花括号插值中和在 v-bind 表达式中")]),t._v(" (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“|”符号指示：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在双花括号中 --\x3e")]),t._v("\n{{ message | capitalize }}\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在 `v-bind` 中 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rawId | formatId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"_2-2-过滤器的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-过滤器的定义"}},[t._v("#")]),t._v(" 2.2 过滤器的定义")]),t._v(" "),a("p",[t._v("你可以在一个组件的选项中定义本地的过滤器：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("filters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("capitalize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("也可以在创建 "),a("code",[t._v("Vue")]),t._v(" 实例之前使用全局API"),a("code",[t._v("Vue.filter")]),t._v("来定义全局过滤器：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'capitalize'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("当全局过滤器和局部过滤器重名时，会采用局部过滤器。")]),t._v(" "),a("h3",{attrs:{id:"_2-3-串联过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-串联过滤器"}},[t._v("#")]),t._v(" 2.3 串联过滤器")]),t._v(" "),a("p",[t._v("过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数。在上述例子中，"),a("code",[t._v("capitalize")]),t._v(" 过滤器函数将会收到 "),a("code",[t._v("message")]),t._v(" 的值作为第一个参数。")]),t._v(" "),a("p",[t._v("过滤器可以串联：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" filterA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" filterB "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在这个例子中，"),a("code",[t._v("filterA")]),t._v(" 被定义为接收单个参数的过滤器函数，表达式 "),a("code",[t._v("message")]),t._v(" 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 "),a("code",[t._v("filterB")]),t._v("，将 "),a("code",[t._v("filterA")]),t._v(" 的结果传递到 "),a("code",[t._v("filterB")]),t._v(" 中。")]),t._v(" "),a("p",[t._v("过滤器是 JavaScript 函数，因此可以接收参数：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filterA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里，"),a("code",[t._v("filterA")]),t._v(" 被定义为接收三个参数的过滤器函数。其中 "),a("code",[t._v("message")]),t._v(" 的值作为第一个参数，普通字符串 "),a("code",[t._v("'arg1'")]),t._v(" 作为第二个参数，表达式 "),a("code",[t._v("arg2")]),t._v(" 的值作为第三个参数。")]),t._v(" "),a("h2",{attrs:{id:"_3-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-小结"}},[t._v("#")]),t._v(" 3. 小结")]),t._v(" "),a("p",[t._v("通过用法回顾可以知道，过滤器有两种使用方式，分别是在双花括号插值中和在 v-bind 表达式中。无论是哪种使用方式，它的使用形式都是"),a("code",[t._v("表达式 | 过滤器1 | 过滤器2 | ...")]),t._v("。")]),t._v(" "),a("p",[t._v("并且，我们知道了过滤器的定义也有两种方式，分别是在组件选项内定义和使用全局API"),a("code",[t._v("Vue.filter")]),t._v("定义全局过滤器。在组件选项内定义的过滤器称为本地过滤器，它只能用于当前组件中。使用"),a("code",[t._v("Vue.filter")]),t._v("定义的过滤器称为全局过滤器，它可以用在任意组件中。")]),t._v(" "),a("p",[t._v("另外，我们还知道了过滤器不仅可以单个使用，还可以多个串联一起使用。当多个过滤器串联一起使用的时候，前一个过滤器的输出是后一个过滤器的输入，通过将多种不同的过滤器进行组合使用来将文本处理成最终需要的格式。")]),t._v(" "),a("p",[t._v("最后，官方文档还说了所谓过滤器本质上就是一个"),a("code",[t._v("JS")]),t._v("函数，所以我们在使用过滤器的时候还可以给过滤器传入参数，过滤器接收的第一个参数永远是表达式的值，或者是前一个过滤器处理后的结果，后续其余的参数可以被用于过滤器内部的过滤规则中。")]),t._v(" "),a("p",[t._v("了解了过滤器的用法之后，那么接下来我们就对其内部原理一探究竟。")])])}),[],!1,null,null,null);s.default=e.exports}}]);