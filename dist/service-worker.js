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
    "url": "assets/js/12.1f7e3d37.js",
    "revision": "e614736a2a35a0ac3e5bf6846b923bea"
  },
  {
    "url": "assets/js/13.6b7d688d.js",
    "revision": "adf3eb334a81dc76999cd8fb3f98a0ce"
  },
  {
    "url": "assets/js/14.801c1f18.js",
    "revision": "32af9b62722dfaf9ebf2af5f7c1e97b2"
  },
  {
    "url": "assets/js/15.17174b7c.js",
    "revision": "3106ffc6bcff65c3502b8e8b1206e9b9"
  },
  {
    "url": "assets/js/16.6c35e974.js",
    "revision": "a431d785f70416ba09dcaaa03bd3b68f"
  },
  {
    "url": "assets/js/17.c9e1550a.js",
    "revision": "b099f9997ae5a3f0d4a78003331e0ef2"
  },
  {
    "url": "assets/js/18.a373383f.js",
    "revision": "d39d8b3e31359da2b9a71eab42864cbf"
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
    "url": "assets/js/20.99f8f31f.js",
    "revision": "d89c7a1a9c45b54391c769e95e948f0a"
  },
  {
    "url": "assets/js/21.1bc42123.js",
    "revision": "8492103fb5aaa965e801a4a5fe71c566"
  },
  {
    "url": "assets/js/22.8fec3e6b.js",
    "revision": "cfefc0611b57b5a97392fc53419af2ab"
  },
  {
    "url": "assets/js/23.8cad61d9.js",
    "revision": "6784477ec5905f4d530b40a2bda0ea92"
  },
  {
    "url": "assets/js/24.26b05f85.js",
    "revision": "a0968bbeae9ba1b6fc0721a131bd6f81"
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
    "url": "assets/js/29.11544877.js",
    "revision": "dc09850a49ba400e206bf73717b7c61e"
  },
  {
    "url": "assets/js/3.632612d6.js",
    "revision": "a79050cf46c3eb03edcdc4dd7f268342"
  },
  {
    "url": "assets/js/30.d5986609.js",
    "revision": "7147fbfe2da7e54621f9a37cc5025b91"
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
    "url": "assets/js/33.78c815f4.js",
    "revision": "5732d4c47f511fc0ebccef1d185cefe7"
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
    "url": "assets/js/36.d0b698a2.js",
    "revision": "ea9f98823da4858fc332e2276a9a89bf"
  },
  {
    "url": "assets/js/37.268eaff6.js",
    "revision": "d71b76bc0969aa5366da28c4732263f6"
  },
  {
    "url": "assets/js/38.4859b863.js",
    "revision": "c6b7af4ac5e4edc906509db2e92ebcc7"
  },
  {
    "url": "assets/js/39.e2250376.js",
    "revision": "ff16921569ce4014af0896e4131a4dfc"
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
    "url": "assets/js/7.b7dad331.js",
    "revision": "626898681754228e7b8597862b8d812e"
  },
  {
    "url": "assets/js/8.4ac3440a.js",
    "revision": "ca5353ae2b30441f8b91c08ceeb95e6b"
  },
  {
    "url": "assets/js/9.34de5cb4.js",
    "revision": "9c8a1fb95890d097438c8e9b3685a30c"
  },
  {
    "url": "assets/js/app.91c7c3a5.js",
    "revision": "67be1b4f250afcb14272d2ae1895ffb9"
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
    "revision": "836e626900b420fe01f3118028d4cc17"
  },
  {
    "url": "complie/codegen.html",
    "revision": "97914d64f9ea2d8a07cbdc2d32490994"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "dd11b8ff9231ffb08a5fc5ae808d004e"
  },
  {
    "url": "complie/index.html",
    "revision": "699ed216bade8d6574e49e55fbe522cc"
  },
  {
    "url": "complie/optimize.html",
    "revision": "381134f4f6fc41dd272031daf4526ceb"
  },
  {
    "url": "complie/parse.html",
    "revision": "3df3dbddb4da1ca1a058e6ef781b8762"
  },
  {
    "url": "complie/summary.html",
    "revision": "b0feab71650057aa66d06620638146d9"
  },
  {
    "url": "complie/textParse.html",
    "revision": "c01641e99a303a2facbe90a4242d1a50"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "d611914f197b6eff5906c4a3de1309bb"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "03e74942f3ce4839986398a86f84c9c9"
  },
  {
    "url": "filter/index.html",
    "revision": "72ef014504fce1d177247c298b061ed3"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "c8a6d177d47a2759a6a81591ccf492b8"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "3bfef7a17fa0475fa3dc2383d51d3aa5"
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
    "revision": "bb044cfb926783953aefca17acabbd05"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "453f0d2ab2d3080235a341750504616f"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "4abfa7c89981cb84c978032b198e890f"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "a1a1edf94e93731df94582f204654db3"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "871519eb1eaef8bca64a58ae4aca217c"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "198c7aa3f254b8ecf35af37477ee7827"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "4bbf733b6a864b422456fb9a7f576e51"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "cac780233672aabe10f5be1c7dcdf478"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "c62faa815e22b90647d9ba42b75d517f"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "c24edbf7bc9f1be93e59548bc177568c"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "f4df507f261dbef66bb060e29e10df46"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "a7d26216e333d8422cc97c2578aadb3b"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "54b98331aa5a8883a2a3a8ca56097fea"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "06f9b1236a621a4f9bcb6eb34e91e1d5"
  },
  {
    "url": "reactive/index.html",
    "revision": "efde14b7fa4d946efee732d7bacf9379"
  },
  {
    "url": "reactive/object.html",
    "revision": "1ddc0f730c5e3bc18a38271cc26eb314"
  },
  {
    "url": "start/index.html",
    "revision": "7b29d15c2ed3ea03fc369adba9c71905"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "ebe15f3d28ba559169ed6596c77107c9"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "93f164cc62589d6ef70e6aa183ebab3f"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "1ab184c8aa16bf057e88b1f549b79ce5"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "2cec96437968de1459d284fbfca66fc9"
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
