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
    "url": "assets/js/12.e72f86e8.js",
    "revision": "03527993105052e4c73337bd777913ce"
  },
  {
    "url": "assets/js/13.a04b7573.js",
    "revision": "9852fd68b9dab50019bb545dc32ccfd9"
  },
  {
    "url": "assets/js/14.d267f0a1.js",
    "revision": "168768f109869473699800b16175046f"
  },
  {
    "url": "assets/js/15.b5f428f0.js",
    "revision": "067b4ab953328901c1b6e0ecd663fb9c"
  },
  {
    "url": "assets/js/16.ed406e14.js",
    "revision": "6c8334f6235ce75c7b30bb6c235ab31c"
  },
  {
    "url": "assets/js/17.c9e1550a.js",
    "revision": "b099f9997ae5a3f0d4a78003331e0ef2"
  },
  {
    "url": "assets/js/18.039e6382.js",
    "revision": "045e0b606b0326d5faeefd5fc019a58b"
  },
  {
    "url": "assets/js/19.0c48eed6.js",
    "revision": "3a2ee65bab34e9c91d9302be1c572574"
  },
  {
    "url": "assets/js/2.e395cc85.js",
    "revision": "8b9c6a4852a6177b45be62d6fd5a189c"
  },
  {
    "url": "assets/js/20.7dc2dad5.js",
    "revision": "5b3f06886cf6cedbfd12a2f82cd689d2"
  },
  {
    "url": "assets/js/21.c3f4f521.js",
    "revision": "7442ce4abcb597e765635bde0b5ad197"
  },
  {
    "url": "assets/js/22.f905181c.js",
    "revision": "46e9093f076e1a752444f6d1fcf28b85"
  },
  {
    "url": "assets/js/23.d2333b28.js",
    "revision": "05a5738efd9a776df27247a44d6e23d4"
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
    "url": "assets/js/28.ffe195e8.js",
    "revision": "3eb07e609d057ad0ce1acb8c01df3c7d"
  },
  {
    "url": "assets/js/29.8e1f64f1.js",
    "revision": "27787ec6aa4f41bc0b0a244cdeb0779b"
  },
  {
    "url": "assets/js/3.c0db27a1.js",
    "revision": "fe34ed6ae64df4a2074dbe130f66e565"
  },
  {
    "url": "assets/js/30.7b87b76a.js",
    "revision": "487f9dd040dcfbd90e5da887a3def64e"
  },
  {
    "url": "assets/js/31.cc5e286c.js",
    "revision": "582c1c97890eab907702d87b020fcde1"
  },
  {
    "url": "assets/js/32.bdab1087.js",
    "revision": "559abe9c94a04c393d3b03f134e2da09"
  },
  {
    "url": "assets/js/33.ac16c3f2.js",
    "revision": "3aaaa34748710db291ce3da6e15d056c"
  },
  {
    "url": "assets/js/34.2964ad99.js",
    "revision": "fd351f00b14dba76fa47cd6b982b1f7a"
  },
  {
    "url": "assets/js/35.3d96eb76.js",
    "revision": "404b049474c9be852014def0d5a5c2db"
  },
  {
    "url": "assets/js/36.6ad6b5a2.js",
    "revision": "c41ee84a90d9cebd7992b0f2f39be7e6"
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
    "url": "assets/js/5.4017d218.js",
    "revision": "e5a7631fa16f8160a6b3f799948e46bb"
  },
  {
    "url": "assets/js/6.968893ac.js",
    "revision": "ec1f1670d0d0c7031c43416ad14731e5"
  },
  {
    "url": "assets/js/7.428a4ff1.js",
    "revision": "37ecb390982eddec835bdfb9aa31a60d"
  },
  {
    "url": "assets/js/8.86522682.js",
    "revision": "04eeb738cfa17acbd5fa606b2b72fb55"
  },
  {
    "url": "assets/js/9.98bbc194.js",
    "revision": "65549e6c4982e608bb83da7df26a569a"
  },
  {
    "url": "assets/js/app.6b0663b9.js",
    "revision": "49774257ddfb5ee26be9d5c593ff467c"
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
    "revision": "5dd35650d9a1ba20e7409bb4eebe3867"
  },
  {
    "url": "complie/codegen.html",
    "revision": "3838f6bacea1646423b0f95b7c939410"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "459af83af516647ffdf69a7e67bf94de"
  },
  {
    "url": "complie/index.html",
    "revision": "736de36d23f298b2f5955a67b9019049"
  },
  {
    "url": "complie/optimize.html",
    "revision": "71a11a18e57b752833283b51a9c4f90d"
  },
  {
    "url": "complie/parse.html",
    "revision": "5c42d35dcfc6e8b781abbff6d6cbda0f"
  },
  {
    "url": "complie/summary.html",
    "revision": "320c3ff2be3489d05dce7595aca4f091"
  },
  {
    "url": "complie/textParse.html",
    "revision": "9bd25341a734d19f4f24c26e315bb74c"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "747231588a2f62f131f280cf287b1daa"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "5ef16183022d18e8cbc9e8533099046d"
  },
  {
    "url": "filter/index.html",
    "revision": "1c295c96fb67e3f0c5f3f1e403162c56"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "c9c8f173068c28dfac1bc0d84b69968c"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "07d1917926a79b6428c753f34d3a8093"
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
    "revision": "357c662c9a9009296a60e1cd2d49c9fa"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "d20923fc5b30a9dcae62bf9beb50c6f9"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "35e38ff04a0afb6913b1101dfecc1ca2"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "a5b01f7d684fc9b8405f96cc8e6f9db9"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "49dc5218ae0cb91f3d4b2c5a2124f305"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "66edbda434be44a5d15c46f88d72a9b5"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "b57a9fe1a1489ef43390abbeadcdc395"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "65588494ec975d87544a351fe071d096"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "8968ca971c9e4b96e4deba2bceb489a0"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "41f1e040c31a9d9aa7979f618a29d86f"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "34bee2a73ad874ce355f9f6c4224c792"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "f6e6e02171be125786f7ccbfc3709948"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "4b4a0787549988400eb40ef0b6dde240"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "11e27f27286ca256c68822a905a0c696"
  },
  {
    "url": "reactive/index.html",
    "revision": "62c454d1601f285b2a846706e607bfdf"
  },
  {
    "url": "reactive/object.html",
    "revision": "8f369be39173ea20f8cc61ed7cbce23c"
  },
  {
    "url": "start/index.html",
    "revision": "b3b4526352b7bd5c1cd74d1bb9e70bea"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "7012afa1be631a73e877ded241d0641b"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "93106deb676acfc951b2cd9c9706b2fb"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "aab98f21b2ed4fceaccbec07ac2d7bc8"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "685af040ba32cfb34f9d56bd0e4a8689"
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
