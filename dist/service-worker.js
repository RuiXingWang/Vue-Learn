/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/complie/9.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/css/0.styles.65e1684a.css",
    "revision": "c3ec607b359c7d41e8f566ddefd5b9aa"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.a0a38f3f.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.c5bbac8c.js",
    "revision": "c80336a4d9f82d79a6024e1c4de63977"
  },
  {
    "url": "assets/js/11.95a27cf8.js",
    "revision": "e174083d6fc50ab61b3a5fc714e360bb"
  },
  {
    "url": "assets/js/12.5cf0c8e9.js",
    "revision": "5f71e6e60f8db836df5eeacd6d2a3999"
  },
  {
    "url": "assets/js/13.d13000f5.js",
    "revision": "9ed193f5ea5956e25eb4774cbd5c72ae"
  },
  {
    "url": "assets/js/14.cf8e8327.js",
    "revision": "47175cc350d0da58747625a72e45a5bf"
  },
  {
    "url": "assets/js/15.d32fda26.js",
    "revision": "3bfe4aba34ed56a0d205f186dd94f8b6"
  },
  {
    "url": "assets/js/16.b1b64a83.js",
    "revision": "4c6c1c9d37e95b40cab41b38c0712d91"
  },
  {
    "url": "assets/js/17.592939e9.js",
    "revision": "acb62751657b1d1e44ad7000ba5b5e02"
  },
  {
    "url": "assets/js/18.a047716f.js",
    "revision": "2899d904051eaeacb9c7e0f2843a99d7"
  },
  {
    "url": "assets/js/19.c3563bbe.js",
    "revision": "15f9cfb8f933adc34606ddcfed3dcae9"
  },
  {
    "url": "assets/js/2.e395cc85.js",
    "revision": "8b9c6a4852a6177b45be62d6fd5a189c"
  },
  {
    "url": "assets/js/20.667a176a.js",
    "revision": "d9c8a3ab174f2d09bb6c11d739b32761"
  },
  {
    "url": "assets/js/21.f62eef55.js",
    "revision": "12473fdbd5ac08b30eec6c553ed470c7"
  },
  {
    "url": "assets/js/22.f905181c.js",
    "revision": "46e9093f076e1a752444f6d1fcf28b85"
  },
  {
    "url": "assets/js/23.eda6b411.js",
    "revision": "64819fbae38edbef1063539d6d6177c7"
  },
  {
    "url": "assets/js/24.6dd54f29.js",
    "revision": "ed740e83a2fc124effac9459fce4876f"
  },
  {
    "url": "assets/js/25.428a1c44.js",
    "revision": "e6b64d61c01771836b0bba3b9b0ea28d"
  },
  {
    "url": "assets/js/26.44250e5c.js",
    "revision": "21b6496eddf7e8f3da1a2486f7937661"
  },
  {
    "url": "assets/js/27.8aa5fd94.js",
    "revision": "6f93355d1393e8c6bc31ba54be114fa4"
  },
  {
    "url": "assets/js/28.0ede8580.js",
    "revision": "a3bf7fbd02ad235a33ab00d322e154f0"
  },
  {
    "url": "assets/js/29.aeef7b26.js",
    "revision": "3e8e221061d05af22db787a9ee055dca"
  },
  {
    "url": "assets/js/3.c0db27a1.js",
    "revision": "fe34ed6ae64df4a2074dbe130f66e565"
  },
  {
    "url": "assets/js/30.b2fa6e3f.js",
    "revision": "f3f5e624c847d3aeed14fed2de3071bb"
  },
  {
    "url": "assets/js/31.65b87b8d.js",
    "revision": "6045db46760301babbeec788af25e5a7"
  },
  {
    "url": "assets/js/32.f03f66d8.js",
    "revision": "6eba56bbc07f126090515eea9f9653dc"
  },
  {
    "url": "assets/js/33.ac16c3f2.js",
    "revision": "3aaaa34748710db291ce3da6e15d056c"
  },
  {
    "url": "assets/js/34.3ccc8769.js",
    "revision": "222e42c8a50f8c81ed51dc369d88752c"
  },
  {
    "url": "assets/js/35.a15952c4.js",
    "revision": "721405283cb0387f9833ba7e8ea2d378"
  },
  {
    "url": "assets/js/36.d0b698a2.js",
    "revision": "ea9f98823da4858fc332e2276a9a89bf"
  },
  {
    "url": "assets/js/37.fda41221.js",
    "revision": "964a894db8232bbf81f0828ee601b110"
  },
  {
    "url": "assets/js/38.3cb8763a.js",
    "revision": "c131366fc16365e2c6a9aea292a62913"
  },
  {
    "url": "assets/js/39.d7abc000.js",
    "revision": "3e73fa0ea033694acadeabad7b22920e"
  },
  {
    "url": "assets/js/4.c72cab8e.js",
    "revision": "5c0a3bf29b77ca3517630be796f84da9"
  },
  {
    "url": "assets/js/40.db1d04fa.js",
    "revision": "c0f773a7c37d8a399626e778896705b7"
  },
  {
    "url": "assets/js/41.03d365a9.js",
    "revision": "9729a083fe5235702c11138a46c203af"
  },
  {
    "url": "assets/js/5.ef18a2f3.js",
    "revision": "62c241f3d9b5a43f7e8d3094291cf17e"
  },
  {
    "url": "assets/js/6.370d3852.js",
    "revision": "2c28792f6557db612aeda696efd67461"
  },
  {
    "url": "assets/js/7.345c1dce.js",
    "revision": "78148cb7b58ad94f4176f56aabc8f234"
  },
  {
    "url": "assets/js/8.e71056a1.js",
    "revision": "2954d3e66112a7270bc363d5a10d89e2"
  },
  {
    "url": "assets/js/9.c97e0df4.js",
    "revision": "8c29e2f73a099ca0b2f3065fa38d4adf"
  },
  {
    "url": "assets/js/app.422345bd.js",
    "revision": "7da663f1dd33b90ced9edb6f31c09616"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "9af745c4c7f52869c49f9af2c8b9e9d1"
  },
  {
    "url": "complie/codegen.html",
    "revision": "d8669ed0cd0f961a25c1bae00d774241"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "c8c1aa9aa6f4b912e02984851aed96c9"
  },
  {
    "url": "complie/index.html",
    "revision": "174b29988e6687ed23e0fe104c3b0b4b"
  },
  {
    "url": "complie/optimize.html",
    "revision": "807e4d35178dc924d23ee6b859d0e945"
  },
  {
    "url": "complie/parse.html",
    "revision": "8dedb81cf231529fc1434c0d41a00401"
  },
  {
    "url": "complie/summary.html",
    "revision": "40e04dbec852a9dcbaaceb535de0e6ea"
  },
  {
    "url": "complie/textParse.html",
    "revision": "cff730eebf96a55f744276f4646377ba"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "bc46b594e3188dc12486d007a92373fa"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "de544643a2682802a7027bf568a3066d"
  },
  {
    "url": "filter/index.html",
    "revision": "ebd3db656b0da2cf2ea7c620abb5a576"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "4a9a065cbb132ae94087a0d12e6cafb0"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "d61f66386d38c8b14eda3001caafb645"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "52f84b72c653022b550976460fe7d3c9"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "0e58888e84d12f0751b17630fa052e97"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "28f8194fff91ee8376731db13ca3285d"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "0b2ca33f6dfd93293d560f0ed3391ba3"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "e254ad886322aaf2a91663fae25a5172"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "7f26c6e346366698f174ac169547e104"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "a8b1647248fd7f0c0f0f4b5ae5ffbd6d"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "b0d5250fdbdd66dbe70c3a53e62080d0"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "27dbf3ba934a18a3ea2fb609405d7a8e"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "a268e175a28eaa3505381fac4edd69d3"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "229222ac928b1cb163c969d6c429632b"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "bcce83ce2b774daaef98fba3fb834f25"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "d296a45b2f935029e2ea8dce5d733607"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "da27a20e7149bc986c9509a285036947"
  },
  {
    "url": "reactive/index.html",
    "revision": "1fa8f7335f2ae824aa20a32400f02460"
  },
  {
    "url": "reactive/object.html",
    "revision": "daab208c152f25be6a98ec17e2478486"
  },
  {
    "url": "start/index.html",
    "revision": "790f2093877d5b8da91941d47bf55fd1"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "fe9bce84aa01d6d46c7446dd86651daf"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "3ba909ac2ba051c88de4017d319cf576"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "469b14d29d5bcb254ab26a7d1011fe22"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "046935e6092fe867fd1aeec3e81c87e7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
