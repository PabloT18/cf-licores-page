'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "da3ee7feeb573e665e83a96814d1409a",
"index.html": "233a96cae3d308ccae2b4578b2941b0d",
"/": "233a96cae3d308ccae2b4578b2941b0d",
"main.dart.js": "b6a0d182a81ce6d9a2052915b4813a50",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "33f006afb9fec7b0effb45dc816ae633",
"icons/Icon-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-512.png": "97c7dc428a99350aba82964372883671",
"icons/Icon-512.png": "97c7dc428a99350aba82964372883671",
"manifest.json": "bc1964bba03d495900b998c7c95077b0",
".git/config": "87cd9983850ed58dda7bb2ad49b11541",
".git/objects/51/23b9e5454e94b32659d9efe380a47be8454c7f": "e6a6b57019fd05cedd65a8e38cc550be",
".git/objects/d8/08b05eee9ca76c6fe1e5c67da1a8d3f755327f": "e3477a13f28407712c16d160de9b6976",
".git/objects/c0/ebdc1f5414f7b7ded387f40641412dfca6b132": "5531a8bab2aadde1bd6f934fe964fb39",
".git/objects/fe/e150ef95eed011d2fd12ba9937ca12e53b4a0c": "8905cf5174093946032e85586ea82be6",
".git/objects/pack/pack-224aa44c04e004df45f1e6a61426467271b5468b.pack": "f4686fb61acd66b6cacf4a80c45c21e5",
".git/objects/pack/pack-224aa44c04e004df45f1e6a61426467271b5468b.idx": "b187bec72e4562540ba76e7fd8df862a",
".git/objects/11/cf4d422dbb9999699e3cb25decd5278650153f": "a70efc1ea4a83e3eb34c609fc3ccc52d",
".git/objects/8f/9cd8d5076218627e73e2ac1dae39488cc1422d": "e1477b44ad6653b0ca5c6c055e1b44d7",
".git/objects/86/9ed33b4433529650695cefa7a879a2d2f84434": "f6006e07adc3a2ee905d9a6fde947428",
".git/objects/07/65a0be60c4cfafa89f48d205ade13bfffa4d98": "737d75af9ead1670de7d1c562ba37f70",
".git/objects/31/7e7f53d60185fd0fe06b7db0e7786796ca4a14": "f13a3d5af8aeca475e25f44e212b1cb0",
".git/objects/98/4a81bea321ea792751522823472b9efdb5800c": "68e5c5ce584824ba931c2eb3a5153b0d",
".git/objects/30/e081c7c28a383ef0a7dad5134471febe0dc557": "af2187f23da17751513cf97dcbd28f24",
".git/objects/30/02108db058270f60178acc00e7c1de688bbeba": "7baa3138f5e3d67ece14588e32751cd2",
".git/objects/30/e3abbf09fc3afaa9ce3ff43ccd56bf78a9ecc3": "99e6238c8a97c2bd2726d5f9b1ac5093",
".git/objects/99/932e3197e46f79654134f655a042fe17fba92d": "bbb3a2edea5ac268294dc09da99f7a4b",
".git/objects/64/01a7dacaf9ffe9b9c4e2f3ada05ae8bd2efdf5": "a99f2e4253cb33f715119805d7dfdf13",
".git/objects/ba/8b53ba4c597b2c2e3a4aeea50ac54ec8bd85a8": "dd5552722ab17823e2f6fecb1cd5b220",
".git/objects/ba/d7105ed5278b6a675ac26b9411a7b4b228db9e": "a60c62779aebefad11ee99809fde8e3e",
".git/objects/ba/5d55256658088b44ca4ec008d67389b01ee3d5": "2fe8ee7c7fb84b3c258b7d3cc03f637e",
".git/objects/a8/0ede684f547cf8669c4c8714eb08af4b11e8ba": "ba6e8d4cc34168f3b0664adfa83efe29",
".git/objects/c4/9d104278d62461686661994c35232504d37202": "0ba6500a2302459c42382fe07d07cfb4",
".git/objects/e8/dc55b356805a0d2fef033f68f8575d80a1632f": "bed097dff8222c949f374956c4d06428",
".git/objects/2d/0d41849864418bf6e4bc3c12015419bad7dea7": "8fb87fbc54db3cd6b6b7d15c1ac80965",
".git/objects/77/54ca48d764653ceb45f99f59868f7076f39c64": "f5ad57237761c55341ecec45e3dc852f",
".git/objects/23/8a539689d44c07eb4f6436b26b443b07ada63c": "d55e8fc756e54b460b719ebd0fda5d21",
".git/objects/8d/3622a996db41c3715d1fa1097176caf5baa204": "52f764d6588de33349f85569432774bd",
".git/objects/76/ba5d5c35e1acec3e67329ddb45b610a5100d9e": "34fc4d864cc1e1b08c8611546ab48e2e",
".git/objects/47/3c0ddb382c74ec88351b8bba4be837bf8c8724": "a7eeb9f6de2617d560a5c73a5e8e978c",
".git/objects/13/334c25cc0ff462dcce8aef024f48c1fdc2e54b": "e735dcce78ea4c90f0394ad661a62482",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e2b24687a4450e423cb5fcda1ebaafa",
".git/logs/refs/heads/main": "7e2b24687a4450e423cb5fcda1ebaafa",
".git/logs/refs/remotes/origin/HEAD": "150638641b035eede9ca6ec09d4566be",
".git/logs/refs/remotes/origin/main": "935dfd7f71a1098b1ecad6c6134f6c3d",
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
".git/refs/heads/main": "794ff6ff5bcb231be01883a3ddd2f430",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "794ff6ff5bcb231be01883a3ddd2f430",
".git/index": "dcd6f687898345c2c9319bb1008d9ba1",
".git/packed-refs": "44653547f7cd47afc8e771120cfa75aa",
".git/COMMIT_EDITMSG": "5831bb36259b5ef43855de101dd2449b",
"assets/AssetManifest.json": "dcd4b72040e4c6359470d07205e030c6",
"assets/NOTICES": "ddb4a532a0069082bf15cfc101cceffc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "87886eaac04ea6e4d7b46350184e7426",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo_cf_img.png": "8cb8f25a2e220bb473c83582ef0aa70f",
"assets/assets/images/descrip.png": "b4ec697fc595cff5652962e0a381ccec",
"assets/assets/images/super_footer2.webp": "3722c9d7ac8a19439557fdbb4d57b298",
"assets/assets/images/super_header.webp": "6e4b19d41db3a67d8ad5328b10923b56",
"assets/assets/images/super_footer.webp": "e450f558b3369276dd13bc4951e761a4",
"assets/assets/images/licores/back-ron.png": "77dc36ea745c84c6aaf67db32e8d642c",
"assets/assets/images/licores/back-vt.png": "1d3fdae31a10e53b31edca1c4573ee68",
"assets/assets/images/licores/back-vb.png": "b12b73c091a406162792dd306d923c41",
"assets/assets/images/licores/lic-combo.png": "e878d44d7ca3aade5e3f882add5591b3",
"assets/assets/images/licores/lic-vino-b.png": "e6d3dbc5476c4f9229b51811fd8a1511",
"assets/assets/images/licores/lic-vino-t.png": "e868b7d2ad6002b654565d1575edf655",
"assets/assets/images/licores/lic-espumante.png": "b388d935386313d43b4ed3314566def6",
"assets/assets/images/licores/lic-whiskey.png": "d1d2c745b5dfb1ffbc27f1fa6277cae6",
"assets/assets/images/licores/back-esp.png": "fe24d8c3b7c2fe94814d838507865a1d",
"assets/assets/images/licores/lic-ron.png": "7ea43c057a105a703c1a1b4dc56a1146",
"assets/assets/images/licores/back-wis.png": "6617eb249661f6eced6ecdf194c5c845",
"assets/assets/images/navidadBar.png": "c9c539aa61c72c5b6e6b0e7a4624065f",
"assets/assets/images/descrip2.png": "15ae8c5234835d77c8e6defd009b65be",
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
