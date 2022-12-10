'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "da3ee7feeb573e665e83a96814d1409a",
"index.html": "0edc5781788d3df9c6f04748da6ccf13",
"/": "0edc5781788d3df9c6f04748da6ccf13",
"main.dart.js": "27e4b67318473aac2a559e399a1412b0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "33f006afb9fec7b0effb45dc816ae633",
"icons/Icon-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-512.png": "97c7dc428a99350aba82964372883671",
"icons/Icon-512.png": "97c7dc428a99350aba82964372883671",
"manifest.json": "bc1964bba03d495900b998c7c95077b0",
".git/config": "87cd9983850ed58dda7bb2ad49b11541",
".git/objects/d8/08b05eee9ca76c6fe1e5c67da1a8d3f755327f": "e3477a13f28407712c16d160de9b6976",
".git/objects/fe/e150ef95eed011d2fd12ba9937ca12e53b4a0c": "8905cf5174093946032e85586ea82be6",
".git/objects/pack/pack-224aa44c04e004df45f1e6a61426467271b5468b.pack": "f4686fb61acd66b6cacf4a80c45c21e5",
".git/objects/pack/pack-224aa44c04e004df45f1e6a61426467271b5468b.idx": "b187bec72e4562540ba76e7fd8df862a",
".git/objects/8f/9cd8d5076218627e73e2ac1dae39488cc1422d": "e1477b44ad6653b0ca5c6c055e1b44d7",
".git/objects/86/9ed33b4433529650695cefa7a879a2d2f84434": "f6006e07adc3a2ee905d9a6fde947428",
".git/objects/07/65a0be60c4cfafa89f48d205ade13bfffa4d98": "737d75af9ead1670de7d1c562ba37f70",
".git/objects/31/7e7f53d60185fd0fe06b7db0e7786796ca4a14": "f13a3d5af8aeca475e25f44e212b1cb0",
".git/objects/98/4a81bea321ea792751522823472b9efdb5800c": "68e5c5ce584824ba931c2eb3a5153b0d",
".git/objects/30/02108db058270f60178acc00e7c1de688bbeba": "7baa3138f5e3d67ece14588e32751cd2",
".git/objects/30/e3abbf09fc3afaa9ce3ff43ccd56bf78a9ecc3": "99e6238c8a97c2bd2726d5f9b1ac5093",
".git/objects/99/932e3197e46f79654134f655a042fe17fba92d": "bbb3a2edea5ac268294dc09da99f7a4b",
".git/objects/64/01a7dacaf9ffe9b9c4e2f3ada05ae8bd2efdf5": "a99f2e4253cb33f715119805d7dfdf13",
".git/objects/ba/8b53ba4c597b2c2e3a4aeea50ac54ec8bd85a8": "dd5552722ab17823e2f6fecb1cd5b220",
".git/objects/ba/d7105ed5278b6a675ac26b9411a7b4b228db9e": "a60c62779aebefad11ee99809fde8e3e",
".git/objects/ba/5d55256658088b44ca4ec008d67389b01ee3d5": "2fe8ee7c7fb84b3c258b7d3cc03f637e",
".git/objects/c4/9d104278d62461686661994c35232504d37202": "0ba6500a2302459c42382fe07d07cfb4",
".git/objects/e8/dc55b356805a0d2fef033f68f8575d80a1632f": "bed097dff8222c949f374956c4d06428",
".git/objects/2d/0d41849864418bf6e4bc3c12015419bad7dea7": "8fb87fbc54db3cd6b6b7d15c1ac80965",
".git/objects/77/54ca48d764653ceb45f99f59868f7076f39c64": "f5ad57237761c55341ecec45e3dc852f",
".git/objects/23/8a539689d44c07eb4f6436b26b443b07ada63c": "d55e8fc756e54b460b719ebd0fda5d21",
".git/objects/8d/3622a996db41c3715d1fa1097176caf5baa204": "52f764d6588de33349f85569432774bd",
".git/objects/47/3c0ddb382c74ec88351b8bba4be837bf8c8724": "a7eeb9f6de2617d560a5c73a5e8e978c",
".git/objects/13/334c25cc0ff462dcce8aef024f48c1fdc2e54b": "e735dcce78ea4c90f0394ad661a62482",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b7501ec02d463864b919222f4b2fc69b",
".git/logs/refs/heads/main": "b7501ec02d463864b919222f4b2fc69b",
".git/logs/refs/remotes/origin/HEAD": "150638641b035eede9ca6ec09d4566be",
".git/logs/refs/remotes/origin/main": "0ed083d770358fb6d63ffee68e4eb4b3",
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
".git/refs/heads/main": "6fdc37dd4b4867b3f44f16dc80b3af4e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6fdc37dd4b4867b3f44f16dc80b3af4e",
".git/index": "812351300a716569c8d91bb84632ad60",
".git/packed-refs": "44653547f7cd47afc8e771120cfa75aa",
".git/COMMIT_EDITMSG": "2d2300ba0d235b753b94363ba574c8e2",
"assets/AssetManifest.json": "7560e3bc1fc97efcd9f161dfc556f391",
"assets/NOTICES": "d7c159bc90c1e32d33ab08b55b5bd0ee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "87886eaac04ea6e4d7b46350184e7426",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo_cf_img.png": "8cb8f25a2e220bb473c83582ef0aa70f",
"assets/assets/images/descrip.png": "b05c0ac61a6cac17d174ac38ce09deb0",
"assets/assets/images/mega_super.png": "adca5d69e0b18c2e57a623e1bfc0e05b",
"assets/assets/images/licores/lic-combo.png": "e878d44d7ca3aade5e3f882add5591b3",
"assets/assets/images/licores/lic-vino-b.png": "e6d3dbc5476c4f9229b51811fd8a1511",
"assets/assets/images/licores/lic-vino-t.png": "e868b7d2ad6002b654565d1575edf655",
"assets/assets/images/licores/lic-espumante.png": "b388d935386313d43b4ed3314566def6",
"assets/assets/images/licores/lic-whiskey.png": "cc74290c4bf3ea37ba3c6ab5416a510d",
"assets/assets/images/licores/lic-ron.png": "7ea43c057a105a703c1a1b4dc56a1146",
"assets/assets/images/descrip2.png": "777528a2e987910faeeac4b0b32d54d8",
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
