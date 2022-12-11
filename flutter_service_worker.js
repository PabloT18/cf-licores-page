'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "da3ee7feeb573e665e83a96814d1409a",
"index.html": "012a16dad48e083bade20d53f4af7314",
"/": "012a16dad48e083bade20d53f4af7314",
"main.dart.js": "952bd55be4975061dd685b8696d88a94",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "33f006afb9fec7b0effb45dc816ae633",
"icons/Icon-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-512.png": "97c7dc428a99350aba82964372883671",
"icons/Icon-512.png": "97c7dc428a99350aba82964372883671",
"manifest.json": "bc1964bba03d495900b998c7c95077b0",
".git/config": "87cd9983850ed58dda7bb2ad49b11541",
".git/objects/0d/4b1d9307546c2589407b0d7009a6f413a0cba8": "de1cbcc0c742668156982599bde61098",
".git/objects/0d/af7ddafbf80c3ef95923b57dc2cba81b2c9709": "3e6c9a3214c2d9d3e25e213082aafe89",
".git/objects/92/34b0b16193ea81fd256c16a142545746bcec04": "e9c7d1c3b7325cbf8c9def72af402648",
".git/objects/66/f6dec475cbf6ac8bab3e278bddfca52a25850c": "aac6364a710c00eedf0466213a1b334e",
".git/objects/68/141a634e13b3bb95de874262299d797f1a0c8b": "ab8bd82f80abda762862b8b1d5b20a5e",
".git/objects/3b/e02941d2ce9996965c03c9daf30d696f5a145e": "4387386fbcc87d103375a80b6e5a3936",
".git/objects/9b/f54920c5ada291ea6ca4a0711af865202db935": "e394324ec48d1b4fb047ac733a302947",
".git/objects/32/3e36389995c0c71541e205288de722e5677ffe": "3752c406d18b1e6422a562e3c4ff7278",
".git/objects/51/23b9e5454e94b32659d9efe380a47be8454c7f": "e6a6b57019fd05cedd65a8e38cc550be",
".git/objects/60/c293ea6c960221926d31ed416f383cc0a5b2ab": "953d60ce5ad49d40fad962919f97f724",
".git/objects/60/239f8811ecd6898488cc86debe381f7a50be90": "b0cc268e656ddde7caf825d1ba60ce11",
".git/objects/5f/a0e55f1d5276d0a6f18daae0260a7561681702": "92a62d183061041c90658f9036643ed7",
".git/objects/05/de7293d68506ea0d9e87e43a4f80cfa1013809": "aa3df9ab36bb9f7e3d413578a525b834",
".git/objects/9d/344ab6229776bffd62592732cfa5499bf90d86": "138c2e938a9d7b281d49a31c0557b9a2",
".git/objects/9c/00fb25b74d3c3a5a35379dde521763914851bb": "098e83842602afed9f76884d49cf1e95",
".git/objects/9c/f6f79982dc06a4bd4c1daa0f141fb1c6c87b32": "04797d47a43ae8fde37c16b9bd0fdd85",
".git/objects/a3/65e29433f2f827123c7632b63764c2e3a10e19": "88cf32581c101a9359728f2f20aa0edb",
".git/objects/b5/935493c94c3c18a22367b5ea6bd464ba2d9747": "849f22186b5fbc48e5f503784356c238",
".git/objects/be/a71bcf8dcf84a4cd52c6a07b2366a9ee48b191": "a18fc092290800ad2b4ebcc29360f750",
".git/objects/d8/08b05eee9ca76c6fe1e5c67da1a8d3f755327f": "e3477a13f28407712c16d160de9b6976",
".git/objects/ab/dfd0ccd478a4494e8f945215e7f87cbf5d104a": "f3070f86663101a31e656d1c5f32ead4",
".git/objects/f4/f1326ae9d234f699e03d44edee21d221c84958": "6312b3872e1bac933867cef82070d0e5",
".git/objects/c0/ebdc1f5414f7b7ded387f40641412dfca6b132": "5531a8bab2aadde1bd6f934fe964fb39",
".git/objects/ee/6ad01e646b7a33e5e56a5512d63b3f9a9c0225": "a5f6b99419531ab60fd5dd1b9c4a6f3c",
".git/objects/f5/72d40561705b44fbb80dcee56ce29d140a7917": "0e92d88aa3840f730bf7fa04c094aa99",
".git/objects/e3/4a67647c186dc04ba09be14fce1059f401c43b": "b2d329f322d8ca3dd64a0d6a0e59f599",
".git/objects/fe/e150ef95eed011d2fd12ba9937ca12e53b4a0c": "8905cf5174093946032e85586ea82be6",
".git/objects/fe/a13c804a14d379045473167d4ec33c910fa2f4": "cf8c410d2e835c2af04d10952b49e12f",
".git/objects/ed/f4a0ff391a50eb8c35e91974cfcdb952bedd8e": "dc0c7441aaae8eb11a545189e9354e87",
".git/objects/c6/715fc6ae1b17e1d65c232041094841eaeda94a": "dce4d0b72d767e7d034d41bd21ba620f",
".git/objects/4e/640279a50aad72eab59b4ccdedae64a7584a95": "4d1106ec6f808252e49d1cb57d1e187a",
".git/objects/pack/pack-224aa44c04e004df45f1e6a61426467271b5468b.pack": "f4686fb61acd66b6cacf4a80c45c21e5",
".git/objects/pack/pack-224aa44c04e004df45f1e6a61426467271b5468b.idx": "b187bec72e4562540ba76e7fd8df862a",
".git/objects/11/cf4d422dbb9999699e3cb25decd5278650153f": "a70efc1ea4a83e3eb34c609fc3ccc52d",
".git/objects/7c/0ba7e3fb7c259896057879a7ea484f1dd627ff": "184608b15b58e24bd47cebff9fa788db",
".git/objects/80/3a24f17ce31a30e7e6a402e0159dce746ac569": "fcc588522ef131dc97b3c9b4e5b4a5a6",
".git/objects/1a/5e8a1e6eb96ca97c92fb871b3c276ce156149d": "9acd21834ad0f23a023f2894971f6e78",
".git/objects/28/76f044ae86c48c6f836b189e39a753050e7d75": "82f7e2f6b1ff257abef5b8662a564acb",
".git/objects/8f/9cd8d5076218627e73e2ac1dae39488cc1422d": "e1477b44ad6653b0ca5c6c055e1b44d7",
".git/objects/4d/8f9180b5a6406333843012507a1ea8a579f838": "00ec398651cbfa09462e1cb502878b4f",
".git/objects/86/9ed33b4433529650695cefa7a879a2d2f84434": "f6006e07adc3a2ee905d9a6fde947428",
".git/objects/44/8c93a9f04f7cf377fb6e46fb4da5cf184b3809": "6ce940400d250c721c39901a07ec8596",
".git/objects/88/24ef021e9f821134f22d5227b85e073b9fb223": "f97d47051315372a9fffc1a321daf9fe",
".git/objects/07/65a0be60c4cfafa89f48d205ade13bfffa4d98": "737d75af9ead1670de7d1c562ba37f70",
".git/objects/09/a5664e17fe86dab5d0c067a09fb60a863bbb60": "c406ae541f3ffe261fa5e03c9cef0c72",
".git/objects/31/7e7f53d60185fd0fe06b7db0e7786796ca4a14": "f13a3d5af8aeca475e25f44e212b1cb0",
".git/objects/98/4a81bea321ea792751522823472b9efdb5800c": "68e5c5ce584824ba931c2eb3a5153b0d",
".git/objects/30/e081c7c28a383ef0a7dad5134471febe0dc557": "af2187f23da17751513cf97dcbd28f24",
".git/objects/30/02108db058270f60178acc00e7c1de688bbeba": "7baa3138f5e3d67ece14588e32751cd2",
".git/objects/30/e3abbf09fc3afaa9ce3ff43ccd56bf78a9ecc3": "99e6238c8a97c2bd2726d5f9b1ac5093",
".git/objects/6d/24403035e2e120d3719088da8ce35a8fa1bc57": "909ce96e96db209c1268a670bc13ad34",
".git/objects/99/932e3197e46f79654134f655a042fe17fba92d": "bbb3a2edea5ac268294dc09da99f7a4b",
".git/objects/55/72ea1a6a70b1fba5496ce0abbe90dd2f86549e": "cadfa44f6ad6920e436a3db6141b2fa9",
".git/objects/0f/3c1c5678512b050b3329bb67db8218e696aac5": "f90979cf4db0f5991d537da1c3c46022",
".git/objects/64/01a7dacaf9ffe9b9c4e2f3ada05ae8bd2efdf5": "a99f2e4253cb33f715119805d7dfdf13",
".git/objects/64/e2917da1ea065984cab4240f95d27b31054989": "01afe9b5426bbac5ba9455ef5619fcb9",
".git/objects/d4/e842161a82963b94f7b77b74b1d044e98f0301": "a8dae3eee6d5202545a91162529bac6a",
".git/objects/ba/8b53ba4c597b2c2e3a4aeea50ac54ec8bd85a8": "dd5552722ab17823e2f6fecb1cd5b220",
".git/objects/ba/d7105ed5278b6a675ac26b9411a7b4b228db9e": "a60c62779aebefad11ee99809fde8e3e",
".git/objects/ba/5d55256658088b44ca4ec008d67389b01ee3d5": "2fe8ee7c7fb84b3c258b7d3cc03f637e",
".git/objects/dd/f09909a578be3bf5b92ee856512b7ee6187b47": "860cb5a1e3223611811355dcf7395527",
".git/objects/dc/e22f644fd461b1efbd06a7bc93a35ba8628a6a": "91c955082981e1bb777032dce7168592",
".git/objects/a8/0ede684f547cf8669c4c8714eb08af4b11e8ba": "ba6e8d4cc34168f3b0664adfa83efe29",
".git/objects/c4/9d104278d62461686661994c35232504d37202": "0ba6500a2302459c42382fe07d07cfb4",
".git/objects/e6/9ce8cbd783593cf378e06beb921359c200ca86": "b7ff72db67fc882202e5bccdb269a495",
".git/objects/f0/1f63e776499742e4f9e5e559b173d8d1167a8a": "d07ea4536bca5cad4988aec139012a3a",
".git/objects/f7/d1cb351ebd064dbb673116f52c4f22ea5daa39": "1db48ef200c158cafde0fdde46fae5b2",
".git/objects/e8/4457fc02fe23dbdd2f08dcf64ccb4cf7c1bb68": "e19aa725617e565eab5cfff4f3a175ac",
".git/objects/e8/dc55b356805a0d2fef033f68f8575d80a1632f": "bed097dff8222c949f374956c4d06428",
".git/objects/ff/262e25ef0066f64951041e5aa229831ed83413": "18633d649ef85ee3e28964ac3062d39b",
".git/objects/cb/8526645c4a178ef8f44343a767010b3e41cb55": "811f72b23afbd412a2e85052f519c3ef",
".git/objects/f8/1a838807459bc1d3afdaae1d08137fa4429622": "2f4cd43ba418f612dae141960e71ab0e",
".git/objects/2c/07279b246a706b7accd1be3e2b44fa9e2dc579": "b37bc0476ba85700462e2dbc58da220e",
".git/objects/2d/0d41849864418bf6e4bc3c12015419bad7dea7": "8fb87fbc54db3cd6b6b7d15c1ac80965",
".git/objects/77/54ca48d764653ceb45f99f59868f7076f39c64": "f5ad57237761c55341ecec45e3dc852f",
".git/objects/84/50a974773c3b1f1f45565cf72733afe24ecb10": "9c4b2039cee3f267e9844794a42c5f1d",
".git/objects/4a/ea657d13ea7b2f78446d81bde7db1df3910aef": "8ce39c3f21cbd2f6d6c9668470c3b746",
".git/objects/4a/1a3e6e85b054f8995e9d8336727823f835d755": "f8a9bcbdba617bc06530d1958a55e511",
".git/objects/23/23ad9a0279c10ce646ba581500712e4a3f428e": "b9f28b47bd696959ad7f477a3e7c747f",
".git/objects/23/8a539689d44c07eb4f6436b26b443b07ada63c": "d55e8fc756e54b460b719ebd0fda5d21",
".git/objects/8d/ac67ac672a1a068d45a25a097cc4acc27fc211": "be26941c02a5a4ea07558e131454d12b",
".git/objects/8d/3622a996db41c3715d1fa1097176caf5baa204": "52f764d6588de33349f85569432774bd",
".git/objects/76/ea3f6dcc801b5056cfb25e4c3e5c6cb5eb6ba6": "184664d0bd6e5ee04978602ba28dd2a0",
".git/objects/76/ba5d5c35e1acec3e67329ddb45b610a5100d9e": "34fc4d864cc1e1b08c8611546ab48e2e",
".git/objects/82/71477adb2693fdac18c45616ef70c0bb63ce68": "1548a7c660015e29b41a8275ed1e2ad6",
".git/objects/47/3c0ddb382c74ec88351b8bba4be837bf8c8724": "a7eeb9f6de2617d560a5c73a5e8e978c",
".git/objects/47/ca4b443dca9232d623e4a54783faf971d6aa72": "21aee368dad914435458f524c8139bdb",
".git/objects/47/9a144dcb7db19f46470541586937fc99e04ec2": "f7fb5679c09c486913509e8173d28bd3",
".git/objects/78/e6538f76550a3a3d2ae6c1be9b6cbdde48b900": "c3e153b2ebcb9b299c1af91ebdc12ef2",
".git/objects/8b/dd906ce773d07b372dd1e6ec71c84208c80434": "def3cbecb8b39fcaa06ca9513201c6f6",
".git/objects/13/334c25cc0ff462dcce8aef024f48c1fdc2e54b": "e735dcce78ea4c90f0394ad661a62482",
".git/objects/14/bbe1c40bfcc95b1153dda94520af0319fe0ab8": "fa8c9dec069ae8fd7829e5e4ee33b351",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae8ec7d587c2b58f1a9b929eb4b413f9",
".git/logs/refs/heads/main": "ae8ec7d587c2b58f1a9b929eb4b413f9",
".git/logs/refs/remotes/origin/HEAD": "150638641b035eede9ca6ec09d4566be",
".git/logs/refs/remotes/origin/main": "cce8f335998d30561be6d67f11c6d7e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1e90ada8cb41922d750778fdca787f3d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "1e90ada8cb41922d750778fdca787f3d",
".git/index": "217a1a912fe33433e8f3e0d20d6e5208",
".git/packed-refs": "44653547f7cd47afc8e771120cfa75aa",
".git/COMMIT_EDITMSG": "1c827a56d44a7126e02821bef0015306",
"assets/AssetManifest.json": "ec429c6e975999691c9ed15303939362",
"assets/NOTICES": "ddb4a532a0069082bf15cfc101cceffc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "87886eaac04ea6e4d7b46350184e7426",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo_cf_img.png": "8cb8f25a2e220bb473c83582ef0aa70f",
"assets/assets/images/descrip.png": "b4ec697fc595cff5652962e0a381ccec",
"assets/assets/images/super_header.webp": "6e4b19d41db3a67d8ad5328b10923b56",
"assets/assets/images/super_footer.webp": "e450f558b3369276dd13bc4951e761a4",
"assets/assets/images/licores/back-ron.png": "77dc36ea745c84c6aaf67db32e8d642c",
"assets/assets/images/licores/back-vt.png": "1d3fdae31a10e53b31edca1c4573ee68",
"assets/assets/images/licores/back-vb.png": "b12b73c091a406162792dd306d923c41",
"assets/assets/images/licores/lic-combo.png": "e878d44d7ca3aade5e3f882add5591b3",
"assets/assets/images/licores/lic-vino-b.png": "e6d3dbc5476c4f9229b51811fd8a1511",
"assets/assets/images/licores/lic-vino-t.png": "e868b7d2ad6002b654565d1575edf655",
"assets/assets/images/licores/lic-espumante.png": "b388d935386313d43b4ed3314566def6",
"assets/assets/images/licores/lic-vino-d.png": "4051267247d7f8ed3d413b9a6379bab8",
"assets/assets/images/licores/lic-whiskey.png": "d1d2c745b5dfb1ffbc27f1fa6277cae6",
"assets/assets/images/licores/lic-vino-r.png": "524127bd3eff19e10410c6a75fd843e2",
"assets/assets/images/licores/back-esp.png": "fe24d8c3b7c2fe94814d838507865a1d",
"assets/assets/images/licores/lic-vino-m.png": "bcd05098a4b6175a58ba1eefb8682ecb",
"assets/assets/images/licores/lic-ron.png": "7ea43c057a105a703c1a1b4dc56a1146",
"assets/assets/images/licores/back-wis.png": "6617eb249661f6eced6ecdf194c5c845",
"assets/assets/images/navidadBar.png": "dbc974643e17c148e1c150c8d97baf04",
"assets/assets/images/descrip2.png": "15ae8c5234835d77c8e6defd009b65be",
"assets/assets/images/super_header2.png": "c3bbb6a617d9d907d44ab676e8761cf2",
"assets/assets/images/btn-tipti.png": "50f3f047f64b984fd3ebd96a7950a4df",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
