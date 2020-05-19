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
    "url": "assets/css/0.styles.029e28a2.css",
    "revision": "640508f12dc4ef00520678745997e272"
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
    "url": "assets/js/13.c4b8374c.js",
    "revision": "36103f1b52a87f09aab8fca647c24d04"
  },
  {
    "url": "assets/js/14.a0391d29.js",
    "revision": "58a00510d62c7567bf8956d0fd5702cd"
  },
  {
    "url": "assets/js/15.396eea4f.js",
    "revision": "6c7650110acc2bc70a1f648ee0db4d1c"
  },
  {
    "url": "assets/js/16.02a53e29.js",
    "revision": "9101c1f87354b72332492cde8b44ee66"
  },
  {
    "url": "assets/js/17.9158dfb4.js",
    "revision": "f3a46f101891fa428804f9552eb7cd41"
  },
  {
    "url": "assets/js/18.d453c521.js",
    "revision": "795d2dcd4ff88970d903214426858d2b"
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
    "url": "assets/js/20.024f7a91.js",
    "revision": "2c8492eaaaf2d4376ccb67cca5cba493"
  },
  {
    "url": "assets/js/21.4ca64e6c.js",
    "revision": "ad5c77a6a0116093aed6e90f5d13749d"
  },
  {
    "url": "assets/js/22.f905181c.js",
    "revision": "46e9093f076e1a752444f6d1fcf28b85"
  },
  {
    "url": "assets/js/23.7df7b328.js",
    "revision": "d8127fb226484caa6f3409188c13081c"
  },
  {
    "url": "assets/js/24.8f69c8f4.js",
    "revision": "2de44ed268ea3170e778b1ffc4d112a6"
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
    "url": "assets/js/27.d39dc2ec.js",
    "revision": "92db41397d1190cd78ebe7ca72551b9d"
  },
  {
    "url": "assets/js/28.7716cbb1.js",
    "revision": "66d6f4c79711e33a129fcfc9ee08fbf7"
  },
  {
    "url": "assets/js/29.c105538c.js",
    "revision": "5c6d40d17a1385cee5a88cc7471c4592"
  },
  {
    "url": "assets/js/3.aba0d65c.js",
    "revision": "d41b8e17a60c6fc677bae091b645aa48"
  },
  {
    "url": "assets/js/30.bcdcb32f.js",
    "revision": "05336c7138f25f7087e0f77f951b61b2"
  },
  {
    "url": "assets/js/31.cc5e286c.js",
    "revision": "582c1c97890eab907702d87b020fcde1"
  },
  {
    "url": "assets/js/32.c6cc87ef.js",
    "revision": "2b994eb1390c9d9ecdecc4d4bce20d7b"
  },
  {
    "url": "assets/js/33.14f8a026.js",
    "revision": "79affa4ab6f8f0e447e2910d054a01f0"
  },
  {
    "url": "assets/js/34.3ccc8769.js",
    "revision": "222e42c8a50f8c81ed51dc369d88752c"
  },
  {
    "url": "assets/js/35.123825ec.js",
    "revision": "0ed79a27edf889566de5e01606ac7d1a"
  },
  {
    "url": "assets/js/36.d0b698a2.js",
    "revision": "ea9f98823da4858fc332e2276a9a89bf"
  },
  {
    "url": "assets/js/37.1154c891.js",
    "revision": "8847b0a02307fddf9cb054a087756ed9"
  },
  {
    "url": "assets/js/38.3cb8763a.js",
    "revision": "c131366fc16365e2c6a9aea292a62913"
  },
  {
    "url": "assets/js/39.619cde48.js",
    "revision": "dcffd42a7e697854b33ab6522d6dc09d"
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
    "url": "assets/js/5.845c5b43.js",
    "revision": "4cef919faeb244c879f4355465b17dd9"
  },
  {
    "url": "assets/js/6.53eb947c.js",
    "revision": "44fcc83c63eb04acac576c7eeb2ba4a0"
  },
  {
    "url": "assets/js/7.345c1dce.js",
    "revision": "78148cb7b58ad94f4176f56aabc8f234"
  },
  {
    "url": "assets/js/8.344d0b07.js",
    "revision": "c24f9ccf43b6a80939ff127ebc56c80e"
  },
  {
    "url": "assets/js/9.5014eb1b.js",
    "revision": "c7a8ae5d88bce5820b0da14f4c8831f9"
  },
  {
    "url": "assets/js/app.b9fbac54.js",
    "revision": "2dc5ab85f08691f129c2758a08418b77"
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
    "revision": "ec22a5be0a1cc4775fbdca2b6f87b956"
  },
  {
    "url": "complie/codegen.html",
    "revision": "c911d0aa94b46c80b8ee0fcd906ac521"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "4edc493855b0a9a9d99b718788b104d0"
  },
  {
    "url": "complie/index.html",
    "revision": "08a0521ca4612b0ed97f3d05d0acd733"
  },
  {
    "url": "complie/optimize.html",
    "revision": "96015bc3fc521534e1cf5a9e85544ceb"
  },
  {
    "url": "complie/parse.html",
    "revision": "749fd610fa5cfc84c8e260e1a563e6fb"
  },
  {
    "url": "complie/summary.html",
    "revision": "e8a6fc52ce59a7e7d2f6f071620dca1d"
  },
  {
    "url": "complie/textParse.html",
    "revision": "f16cc87d0663f7764baf73a177141078"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "e49ff7978b4406c085cbd3a751b2162d"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "79e8d8b2d3b2127b6c86869bbb4869ea"
  },
  {
    "url": "filter/index.html",
    "revision": "9c03d5d7eed6f983256c29655ff4c37a"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "18fd7e88f4ae24bc2708642aadfa1281"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "4d1bed9ad2de606ab4925bc8ac65c6ce"
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
    "revision": "82ab17f214de813d26976fe2d8a21685"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "fbf639d8dba52709df80798bfbbfdc3d"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "33c8d684f46cc0b816ad0fe1f7a9ed3f"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "c9273f8e1dcee29ae1c933745ca1f3a1"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "1efe04fbba8d9dbf4b946b03109fe27d"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "53028f2dec6c5d1f8d14cba23b0d06aa"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "c19811c01e99489766b8f60baff2cab3"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "2487256576b8d1dc6760f8b0f0a23c09"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "63be8757d37d49384ecd80ecfb8095d5"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "5e5ea7508a93e682d9ee8424ddd02f19"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "9c686cbb2bf6622cc069838d4eaa821e"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "3c7a02ed88189e34ec69341bdf35f687"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "8710d10f2590339d540286c2a2c33e19"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "c74735ddd95af9027bc4ba49ae912d9e"
  },
  {
    "url": "reactive/index.html",
    "revision": "101c3244bcc04fe57490f2827ac822a3"
  },
  {
    "url": "reactive/object.html",
    "revision": "6e8fce37ca1eebc905c424f837da9473"
  },
  {
    "url": "start/index.html",
    "revision": "d9b238d9599e38d18570e6e0e2624d90"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "8a3411647c786b6a477655da0849f919"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "a143effd59c64ec7d761e90028ace50a"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "d09ed2ad8a000a85c8e3cb0fb0637daf"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "b595d0bbf1d2868ba3c34dbe3756b912"
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
