(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{277:function(s,t,a){s.exports=a.p+"assets/img/7.810540a5.png"},326:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1. 前言")]),s._v(" "),n("p",[s._v("接下来到了生命周期流程的最后一个阶段——销毁阶段。从官方文档给出的生命周期流程图中可以看到，当调用了"),n("code",[s._v("vm.$destroy")]),s._v("方法，"),n("code",[s._v("Vue")]),s._v("实例就进入了销毁阶段，该阶段所做的主要工作是将当前的"),n("code",[s._v("Vue")]),s._v("实例从其父级实例中删除，取消当前实例上的所有依赖追踪并且移除实例上的所有事件监听器。也就是说，当这个阶段完成之后，当前的"),n("code",[s._v("Vue")]),s._v("实例的整个生命流程就全部走完了，最终“寿终正寝”了。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(277),alt:""}})]),s._v(" "),n("p",[s._v("本篇文章就来分析一下在销毁阶段都做了哪些工作。")]),s._v(" "),n("h2",{attrs:{id:"_2-销毁阶段分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-销毁阶段分析"}},[s._v("#")]),s._v(" 2. 销毁阶段分析")]),s._v(" "),n("p",[s._v("上文说了，当调用了实例的"),n("code",[s._v("$destroy")]),s._v("方法之后，当前实例就进入了销毁阶段。所以分析销毁阶段就是分析"),n("code",[s._v("$destroy")]),s._v("方法的内部实现。该方法的定义位于源码的"),n("code",[s._v("src/core/instance.lifecycle.js")]),s._v("中，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("$destroy")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vm"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Component "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_isBeingDestroyed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("callHook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'beforeDestroy'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_isBeingDestroyed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// remove self from parent")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$parent\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_isBeingDestroyed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("abstract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// teardown watchers")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_watcher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_watcher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("teardown")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_watchers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_watchers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("teardown")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// remove reference from data ob")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// frozen object may not have observer.")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__ob__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__ob__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vmCount"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// call the last hook...")]),s._v("\n  vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_isDestroyed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// invoke destroy hooks on current rendered tree")]),s._v("\n  vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("__patch__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fire destroyed hook")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("callHook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'destroyed'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// turn off all instance listeners.")]),s._v("\n  vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("$off")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// remove __vue__ reference")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__vue__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// release circular reference (##6759)")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("p",[s._v("可以看到，在上述代码中，首先判断当前实例的"),n("code",[s._v("_isBeingDestroyed")]),s._v("属性是否为"),n("code",[s._v("true")]),s._v("，因为该属性标志着当前实例是否处于正在被销毁的状态，如果它为"),n("code",[s._v("true")]),s._v("，则直接"),n("code",[s._v("return")]),s._v("退出函数，防止反复执行销毁逻辑。如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vm"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Component "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_isBeingDestroyed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("接着，触发生命周期钩子函数"),n("code",[s._v("beforeDestroy")]),s._v("，该钩子函数的调用标志着当前实例正式开始销毁。如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("callHook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'beforeDestroy'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("接下来，就进入了当前实例销毁的真正逻辑。")]),s._v(" "),n("p",[s._v("首先，需要将当前的"),n("code",[s._v("Vue")]),s._v("实例从其父级实例中删除，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$parent\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_isBeingDestroyed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("abstract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("上面代码表示：如果当前实例有父级实例，同时该父级实例没有被销毁并且不是抽象组件，那么就将当前实例从其父级实例的"),n("code",[s._v("$children")]),s._v("属性中删除，即将自己从父级实例的子实例列表中删除。")]),s._v(" "),n("p",[s._v("把自己从父级实例的子实例列表中删除之后，接下来就开始将自己身上的依赖追踪和事件监听移除。")]),s._v(" "),n("p",[s._v("我们知道， 实例身上的依赖包含两部分：一部分是实例自身依赖其他数据，需要将实例自身从其他数据的依赖列表中删除；另一部分是实例内的数据对其他数据的依赖（如用户使用"),n("code",[s._v("$watch")]),s._v("创建的依赖），也需要从其他数据的依赖列表中删除实例内数据。所以删除依赖的时候需要将这两部分依赖都删除掉。如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// teardown watchers")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_watcher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_watcher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("teardown")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_watchers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_watchers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("teardown")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("在上述代码中，首先执行"),n("code",[s._v("vm._watcher.teardown()")]),s._v("将实例自身从其他数据的依赖列表中删除，"),n("code",[s._v("teardown")]),s._v("方法的作用是从所有依赖向的"),n("code",[s._v("Dep")]),s._v("列表中将自己删除。然后，在前面文章介绍"),n("code",[s._v("initState")]),s._v("函数时我们知道，所有实例内的数据对其他数据的依赖都会存放在实例的"),n("code",[s._v("_watchers")]),s._v("属性中，所以我们只需遍历"),n("code",[s._v("_watchers")]),s._v("，将其中的每一个"),n("code",[s._v("watcher")]),s._v("都调用"),n("code",[s._v("teardown")]),s._v("方法，从而实现移除实例内数据对其他数据的依赖。")]),s._v(" "),n("p",[s._v("接下来移除实例内响应式数据的引用、给当前实例上添加"),n("code",[s._v("_isDestroyed")]),s._v("属性来表示当前实例已经被销毁，同时将实例的"),n("code",[s._v("VNode")]),s._v("树设置为"),n("code",[s._v("null")]),s._v("，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__ob__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__ob__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vmCount"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nvm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_isDestroyed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nvm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("__patch__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("接着，触发生命周期钩子函数"),n("code",[s._v("destroyed")]),s._v("，如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("callHook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'destroyed'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("最后，调用实例的"),n("code",[s._v("vm.$off")]),s._v("方法（关于该方法在后面介绍实例方法时会详细介绍），移除实例上的所有事件监听器。如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("$off")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("最后，再移除一些相关属性的引用，至此，当前实例算是销毁完毕。")]),s._v(" "),n("h2",{attrs:{id:"_3-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[s._v("#")]),s._v(" 3. 总结")]),s._v(" "),n("p",[s._v("本篇文章介绍了生命周期流程的最后一个阶段——销毁阶段。")]),s._v(" "),n("p",[s._v("我们知道了，当调用了实例上的"),n("code",[s._v("vm.$destory")]),s._v("方法后，实例就进入了销毁阶段，在该阶段所做的主要工作是将当前的"),n("code",[s._v("Vue")]),s._v("实例从其父级实例中删除，取消当前实例上的所有依赖追踪并且移除实例上的所有事件监听器。并且对照源码将所做的工作都进行了逐行分析。")])])}),[],!1,null,null,null);t.default=e.exports}}]);