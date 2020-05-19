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
    "url": "assets/css/0.styles.d712d575.css",
    "revision": "c94fdedb58565f4bd565e257135b59f4"
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
    "url": "assets/js/12.54b1a53c.js",
    "revision": "18438f92ee09f86e08bf0895b74af4a5"
  },
  {
    "url": "assets/js/13.4de20873.js",
    "revision": "e5c2bba4ad559f09cad832d8b7df1867"
  },
  {
    "url": "assets/js/14.61b2ddca.js",
    "revision": "8c2cf35c44fe29cf78c6c0079b2435ac"
  },
  {
    "url": "assets/js/15.2ce7c1de.js",
    "revision": "9e74fa072e36a1b032b99a9ab31e2d34"
  },
  {
    "url": "assets/js/16.a8d2a5ab.js",
    "revision": "e22a914d89e3843feb5035626d74c1f2"
  },
  {
    "url": "assets/js/17.a46790fd.js",
    "revision": "885be7cd5a63a27c879b8ffbcbfcbac5"
  },
  {
    "url": "assets/js/18.256a5c04.js",
    "revision": "0f3115b75a269c5a29c7edc4d0269796"
  },
  {
    "url": "assets/js/19.e4865d58.js",
    "revision": "4dc6aeb832e31466408ca7ec82338e40"
  },
  {
    "url": "assets/js/2.e395cc85.js",
    "revision": "8b9c6a4852a6177b45be62d6fd5a189c"
  },
  {
    "url": "assets/js/20.6776753c.js",
    "revision": "fcf4d1aa09e4fe289553e2d077ece2ac"
  },
  {
    "url": "assets/js/21.f62eef55.js",
    "revision": "12473fdbd5ac08b30eec6c553ed470c7"
  },
  {
    "url": "assets/js/22.ef684006.js",
    "revision": "c4b8869018ee0577aff902053798f404"
  },
  {
    "url": "assets/js/23.19b43d7a.js",
    "revision": "0a90facaca44e7fec16e96aee16e312d"
  },
  {
    "url": "assets/js/24.ca408ceb.js",
    "revision": "7d4885bf0c80eff78c4af0dfab209cd1"
  },
  {
    "url": "assets/js/25.428a1c44.js",
    "revision": "e6b64d61c01771836b0bba3b9b0ea28d"
  },
  {
    "url": "assets/js/26.e76ed0f6.js",
    "revision": "6791d8532ec7b5b2684ed18566df19fd"
  },
  {
    "url": "assets/js/27.42dea90c.js",
    "revision": "25d6302af51845a1c82fb88bee56933b"
  },
  {
    "url": "assets/js/28.5f2fac18.js",
    "revision": "ccbbbe2844288cc62aba813d3d773623"
  },
  {
    "url": "assets/js/29.0a97f257.js",
    "revision": "26a3bf480aa46a54941e015a874c2a02"
  },
  {
    "url": "assets/js/3.89d078b8.js",
    "revision": "9b38d202f927dc9c0ca65c76c4e0fa67"
  },
  {
    "url": "assets/js/30.b7e43f44.js",
    "revision": "fed5667570f5e886104a255c61e5e5fc"
  },
  {
    "url": "assets/js/31.5718e66c.js",
    "revision": "d648f438513e861f1ca2676cde5e9df1"
  },
  {
    "url": "assets/js/32.2b5a2d8b.js",
    "revision": "c707f899f17c34019a38a6e808957174"
  },
  {
    "url": "assets/js/33.ac16c3f2.js",
    "revision": "3aaaa34748710db291ce3da6e15d056c"
  },
  {
    "url": "assets/js/34.0f2799b7.js",
    "revision": "0273ca2cbbe25d81f5111b6887a9e7a4"
  },
  {
    "url": "assets/js/35.0408de24.js",
    "revision": "c07248b6a439f8b92e2aa46199858c78"
  },
  {
    "url": "assets/js/36.74677061.js",
    "revision": "dfdccffb41ec81e8a97a26ee56a782f5"
  },
  {
    "url": "assets/js/37.b4444a43.js",
    "revision": "514596810946604dc1f1ef3b7d11c35b"
  },
  {
    "url": "assets/js/38.8ff34ddd.js",
    "revision": "f33ce4ccbb3d7d24bdb0495d63288828"
  },
  {
    "url": "assets/js/39.ada6053a.js",
    "revision": "6abdfea0aab87f70f7536eb4f32c7c2c"
  },
  {
    "url": "assets/js/4.0b4a36a1.js",
    "revision": "173b796e6c182e7f473eccc38a8ff536"
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
    "url": "assets/js/5.db9f9379.js",
    "revision": "d1c1b43f58ee45ceea1b464060ba43b4"
  },
  {
    "url": "assets/js/6.0d3de33b.js",
    "revision": "3d7fccc2d97a638236030b87bbd7a651"
  },
  {
    "url": "assets/js/7.2f3229a6.js",
    "revision": "c16eba731bd09ef376aca520cfd99e41"
  },
  {
    "url": "assets/js/8.0d19f72a.js",
    "revision": "eb9d6d0455a2fe448d1d937eddb1f09c"
  },
  {
    "url": "assets/js/9.ead0321c.js",
    "revision": "4ac93f58893584eadb30c82d1f06a05a"
  },
  {
    "url": "assets/js/app.5980b752.js",
    "revision": "681aa73058296dc9c54900cfb5f2db22"
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
    "revision": "a34946cd23f091c04bb6d1638ae64026"
  },
  {
    "url": "complie/codegen.html",
    "revision": "a1e7eacd8542fdd5434243379cf45266"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "383c8b53eae66198b3ab046ca763bb3f"
  },
  {
    "url": "complie/index.html",
    "revision": "cc60a60d52d2e0693629b14698e1085e"
  },
  {
    "url": "complie/optimize.html",
    "revision": "61cd82bde4413b762d84d3352f4b8356"
  },
  {
    "url": "complie/parse.html",
    "revision": "1c485ef0feb9fbcbe6aa53d7b481945c"
  },
  {
    "url": "complie/summary.html",
    "revision": "4b817e5c16dad26ab4c796ea16205bdc"
  },
  {
    "url": "complie/textParse.html",
    "revision": "f619fa06d3903cdb034a3032e36d9f47"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "c03dedd5cf99267d671468da6737c32f"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "362ce03f0cd9856df79d80aacc2fc1e9"
  },
  {
    "url": "filter/index.html",
    "revision": "dde0464ab21cb8ce588b2fb60e6233f5"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "cbf695355b9bff5efd98dcbdbcd619ab"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "37103ecff84b745425d7c832e60de641"
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
    "revision": "abfdac5a989e032946bd506b3f2614e4"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "b294dda950df40b3de8494ca7b681d77"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "05cb051c24f135a388d603e840712fe5"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "6f23708f8e9719987e9015761daecfee"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "a0f077a0695fa766fb9afaab4575b5b9"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "fce8a1a1ea04e1d420dd0ff291fcc861"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "3ce3e7d632396f6ea6a236409f0f4086"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "953f91f156d1df556ebfc144b0cd6815"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "b86180d98856c4c1e196aa73178282d1"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "6e51605a1ce29f1a7d5612bb51b0b55a"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "74971916c8559d30c2d8fbf11bbe8808"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "d95d596a2dd053b780e38afd262d7e07"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "afefdfa2165849fb9eefcc7d00c34542"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "8e3648a5efd600901fd6217a52ed2029"
  },
  {
    "url": "reactive/index.html",
    "revision": "0947b29bd91d5168afd1cc47de49a337"
  },
  {
    "url": "reactive/object.html",
    "revision": "36145f998c9730377030ce8aa920529b"
  },
  {
    "url": "start/index.html",
    "revision": "5b7774170169ae83b35b8222297c1923"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "3f054fd2d0ab0893f24a32aaf02a7c1d"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "464193402b828dd0b3ee7767319befbd"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "db3be208de0839da9d1f5662319c6aaa"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "7bdc1a82602ab5f701a14d8138548e8e"
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
