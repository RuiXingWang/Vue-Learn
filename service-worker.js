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
    "url": "assets/js/10.d3da3d61.js",
    "revision": "826cfcbdefc24867cb419c51180b37f4"
  },
  {
    "url": "assets/js/11.08b39552.js",
    "revision": "b971e47e9091e456563e7d5c5581702e"
  },
  {
    "url": "assets/js/12.5f419412.js",
    "revision": "d93c2e482d9f83130aea449b3b324c50"
  },
  {
    "url": "assets/js/13.8666d409.js",
    "revision": "2dd6ad943022d77e60d546033e3efcd3"
  },
  {
    "url": "assets/js/14.18951a85.js",
    "revision": "3a2083402b5ed023efd325c33c6fba36"
  },
  {
    "url": "assets/js/15.18dfff9e.js",
    "revision": "7a7a77de48494b56523e21332640c412"
  },
  {
    "url": "assets/js/16.5b3c209e.js",
    "revision": "b5a0fde52560f71cbc967c2f459cbf85"
  },
  {
    "url": "assets/js/17.b937c02e.js",
    "revision": "b71dfd72feedc59701cb1f25b314d36e"
  },
  {
    "url": "assets/js/18.8da62eb9.js",
    "revision": "a0549cd74471aef10fe178ddffa27d1b"
  },
  {
    "url": "assets/js/19.07fc8e7c.js",
    "revision": "95a1036a9422853c1a316ddb5553e8a1"
  },
  {
    "url": "assets/js/2.8d3d83f8.js",
    "revision": "d1cb034aaf37cc0968e49eaae3e61900"
  },
  {
    "url": "assets/js/20.6ee9c85b.js",
    "revision": "cbc4e8f1197bb37f40ebd2f90e429324"
  },
  {
    "url": "assets/js/21.16ed2533.js",
    "revision": "3dd9b8c7745268fb05607139dcf9626b"
  },
  {
    "url": "assets/js/22.07de3091.js",
    "revision": "5f7f6fe5852b6ffe3386d30a76edf57a"
  },
  {
    "url": "assets/js/23.0832127b.js",
    "revision": "a1e6097db05e5b8b14c09c2429233e0e"
  },
  {
    "url": "assets/js/24.b329963f.js",
    "revision": "7be2109318e9e6db5e3383f1e6e46a7a"
  },
  {
    "url": "assets/js/25.59966962.js",
    "revision": "0b3d39140eb3646e8a292b7e4dad6f89"
  },
  {
    "url": "assets/js/26.3a8dfdde.js",
    "revision": "8f837728a632cef2161c1c5dbc64998c"
  },
  {
    "url": "assets/js/27.b569cc66.js",
    "revision": "dc17213de62c36100f9f357deff408fd"
  },
  {
    "url": "assets/js/28.3228bb5a.js",
    "revision": "5b7c65566eb06600059cc563201242c3"
  },
  {
    "url": "assets/js/29.eca0a03c.js",
    "revision": "db68bc32cbaeaad4f899237b1fe4dc7f"
  },
  {
    "url": "assets/js/3.aba0d65c.js",
    "revision": "d41b8e17a60c6fc677bae091b645aa48"
  },
  {
    "url": "assets/js/30.7c24f0e2.js",
    "revision": "7e36da832fb2e0b51ab67938c5c50596"
  },
  {
    "url": "assets/js/31.90ebc460.js",
    "revision": "8e4aba3a8735eaf8d9957b5c935bcfdd"
  },
  {
    "url": "assets/js/32.eedc566e.js",
    "revision": "5ba9861e1f6cbfe12b8b6c8c721931c8"
  },
  {
    "url": "assets/js/33.c7bb543f.js",
    "revision": "305002d3056a27389b1f19e8137e80a8"
  },
  {
    "url": "assets/js/34.66622ca1.js",
    "revision": "69264dfa58c4763f519b774d55c35173"
  },
  {
    "url": "assets/js/35.09a3615b.js",
    "revision": "a2df1f01b7405060c1afd0f392e831c1"
  },
  {
    "url": "assets/js/36.7ebeb0fc.js",
    "revision": "27d56326c9f2c60e1d2de33ad6f960ae"
  },
  {
    "url": "assets/js/37.184a23b8.js",
    "revision": "2d24aaea80b6ed65976ab86da673f4d5"
  },
  {
    "url": "assets/js/38.5630a5cd.js",
    "revision": "2d9df67f374ac48a65e40edd1a1d7715"
  },
  {
    "url": "assets/js/39.59e9ef1a.js",
    "revision": "453db676d263d22683419292ec8ea57f"
  },
  {
    "url": "assets/js/4.30fbd195.js",
    "revision": "a9f3af5904c22a1b3dac398e7146fcd2"
  },
  {
    "url": "assets/js/40.db1d04fa.js",
    "revision": "c0f773a7c37d8a399626e778896705b7"
  },
  {
    "url": "assets/js/41.992fac98.js",
    "revision": "e9e3238c3fc843d20021130a7fae9fca"
  },
  {
    "url": "assets/js/5.5d2d0412.js",
    "revision": "7d624032c6cc08ee2697b443e3f159af"
  },
  {
    "url": "assets/js/6.ebd668ee.js",
    "revision": "1322a5925a3ee46418516e5df8abf48c"
  },
  {
    "url": "assets/js/7.ae007f00.js",
    "revision": "7d9853b9a1b404d4362f067b551a43a4"
  },
  {
    "url": "assets/js/8.b5a72e2f.js",
    "revision": "55b73669acc4aae6735dba89ff3324b8"
  },
  {
    "url": "assets/js/9.c7b7617b.js",
    "revision": "01c46bc4ae40020ee64cb97c257bfb07"
  },
  {
    "url": "assets/js/app.bd29d4cf.js",
    "revision": "8a436611c5b14faba38c3df5dfe60ed3"
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
    "revision": "f3029326538b21f2a351dd902fce2f1b"
  },
  {
    "url": "complie/codegen.html",
    "revision": "5787754b202e859b5addfa76ed37b791"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "77bef9912c717dd51a36450f0966ea09"
  },
  {
    "url": "complie/index.html",
    "revision": "47732edf19f5806c501d72da5eceebd1"
  },
  {
    "url": "complie/optimize.html",
    "revision": "56b864c2844ac90b7c797e8b6fc23a75"
  },
  {
    "url": "complie/parse.html",
    "revision": "ae0381adf6d79b0924a4a3bbc5f3698e"
  },
  {
    "url": "complie/summary.html",
    "revision": "8557c574c85a9b59541a7a7f0e785b01"
  },
  {
    "url": "complie/textParse.html",
    "revision": "4ed7cda78cbd265b42a8e1cfc9fe13e2"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "b5dee4d18ea3ac3661df8e6800fa1c95"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "edd5fae04d9f6f6fada8ecbba7a65a6b"
  },
  {
    "url": "filter/index.html",
    "revision": "0f2b27df55261c7878cb918a057307e2"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "9388e95cd84dcd4a75a39151f608085b"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "5bcfa7808155eace001260d941116f9a"
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
    "revision": "436327664bff7ac5e00fbf5fcdf7af43"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "b86fc24eeb742f1a01d81890699a03e9"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "2196957d72a3b25975637ac7d267b2a3"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "73f828be62b56cd4999427963b88d442"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "30f9bb61545b2c74deffefccc2ef158e"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "b4f89327a6a1e3f3eb434a3cb8985aae"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "02cbbc3184b78f9b0fd4cb0c35ebe113"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "287bb5b88fc12b6fecf38359126cb0c4"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "c07cbcbf44cf9d85c78de697f4f2d676"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "28e1efa4c10ba7be66857d1817d6edae"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "6dc61717a506caf01f699b97234a45d2"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "debee4d031794cc8be41b457c102c497"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "84eb2d30f933d8a888ce7ef0184b954e"
  },
  {
    "url": "logo.png",
    "revision": "c95e4fd5d3181a79fbaf1d099c2b72bd"
  },
  {
    "url": "reactive/array.html",
    "revision": "1893be72dd860c364dac7def8c409c6f"
  },
  {
    "url": "reactive/index.html",
    "revision": "b666fa700b8bf29923c8d554298ef232"
  },
  {
    "url": "reactive/object.html",
    "revision": "f7fe46d158e7171191d10b85b76db289"
  },
  {
    "url": "start/index.html",
    "revision": "43d2309c12eb2c3f969d755a4413fba6"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "b38f57ef304e388fc7051e967ef69454"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "3013e10107a22c84f203bf404f916d1d"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "b6bec556b5daa374c4d85c245729cf35"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "82a9cdcf56b21b53d8264700608ce4ff"
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
