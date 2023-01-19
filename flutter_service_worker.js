'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "101dbd5743434cb40ec1fdb8241d03e0",
"index.html": "c781d63e244004375ec4dae1f6a86f5a",
"/": "c781d63e244004375ec4dae1f6a86f5a",
"main.dart.js": "7267325060cb5719827169c7effd0608",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"cors.json": "a0b74ecfb5b0504aaa095f6296578412",
"favicon.png": "33f006afb9fec7b0effb45dc816ae633",
"icons/Icon-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-512.png": "97c7dc428a99350aba82964372883671",
"icons/Icon-512.png": "97c7dc428a99350aba82964372883671",
"manifest.json": "0a1807dbc8ed1bd4743de7c12602be8c",
".git/config": "87cd9983850ed58dda7bb2ad49b11541",
".git/objects/pack/pack-1652629277b9a0639070138503b610a87437d959.pack": "a2a8b1a5673ac2280c8759e04a1b5a1c",
".git/objects/pack/pack-1652629277b9a0639070138503b610a87437d959.idx": "5be4f2e833aff17ea31564bd2c2939a2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbad96ff63db153afc6727a3e78f993b",
".git/logs/refs/heads/main": "bbad96ff63db153afc6727a3e78f993b",
".git/logs/refs/remotes/origin/HEAD": "bbad96ff63db153afc6727a3e78f993b",
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
".git/refs/heads/main": "6905540178bbb28b58202d67bd863951",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "3497a5f9efb74a72a44d1c740768e2fc",
".git/packed-refs": "d3f464de318984fec1b7aa82befc1a1a",
"assets/AssetManifest.json": "ca5cbcbf9c902a30a854a8768652c64f",
"assets/NOTICES": "a747257cd0aaa4b24f67188d56a2a3ec",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/shaders/ink_sparkle.frag": "87886eaac04ea6e4d7b46350184e7426",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo-mega.png": "bbe69af413873881b17c5c3acb743dfe",
"assets/assets/images/logo_cf_img.png": "8cb8f25a2e220bb473c83582ef0aa70f",
"assets/assets/images/home-movil/text_super_reco.webp": "6050b83d60579378d4d38a7a85c2d5d6",
"assets/assets/images/home-movil/home_port.png": "216ab6cdbfff748147cdd57cfd0eeebe",
"assets/assets/images/home-movil/home_footer.webp": "d8dee58c800ab2417ea9af6e669359a4",
"assets/assets/images/home-movil/home_port2.webp": "e2c5fc4a5375f9426236ff6c447ac17e",
"assets/assets/images/descrip.png": "fe05ed596dcdb360f15e41734ef74db5",
"assets/assets/images/logo-super.png": "e074f802a0623ba7a2f9bfd7fedecb13",
"assets/assets/images/super_header.webp": "6e4b19d41db3a67d8ad5328b10923b56",
"assets/assets/images/combos/com_001.webp": "3cb41f40dd1dce0ad31bbfbdfc62ca03",
"assets/assets/images/combos/com_002.webp": "b9327f103ed0e413c8bc3031f20ac6ec",
"assets/assets/images/combos/com_003.webp": "507e64cf1143aa8af2e40d942ddf797a",
"assets/assets/images/home-aux.jpeg": "0f298da24e0d8155c801c8c75b30fd5f",
"assets/assets/images/super_footer.webp": "e450f558b3369276dd13bc4951e761a4",
"assets/assets/images/descripRESP.png": "b4ec697fc595cff5652962e0a381ccec",
"assets/assets/images/logo_tipti.webp": "a5774f05963b404914f6e265e85b37fd",
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
"assets/assets/images/categorias/svg/cat-vin-tin.webp": "e8561e56800e2efdb425a2113e8695e8",
"assets/assets/images/categorias/svg/cat-wisky.webp": "d140c53c626653231da0c5a053d959cf",
"assets/assets/images/categorias/svg/cat-esp.webp": "16ba89479508f42d8a1a58fd0ddc101f",
"assets/assets/images/categorias/svg/cat-vin-blc.webp": "410026040c565a7fae85daf5cdb997c3",
"assets/assets/images/categorias/svg/cat-coteles.webp": "c53bf42514045fa5347417eec51f3197",
"assets/assets/images/categorias/svg/cat-vin-coc.webp": "1ca141a7046e86f55746d37fd572a3bf",
"assets/assets/images/categorias/svg/cat-ron.webp": "4c98596ad3fd64352443b9cccfb1152b",
"assets/assets/images/categorias/svg/cat-com.webp": "427d49751bdef05c162ecfe9854efee7",
"assets/assets/images/categorias/svg/cat-vin-ros.webp": "c406a6aeebe8b32221e6b745cc539198",
"assets/assets/images/categorias/cat-pro-combos.webp": "3948aba12b1701417bea6c8d22d55684",
"assets/assets/images/categorias/cat-pro-vin-ros.webp": "2871c37eebdc5e9e8cf16e30551bd040",
"assets/assets/images/categorias/cat-pro-wisky.webp": "dcdb96195c2644afcda1b4a75c3515c6",
"assets/assets/images/categorias/cat-pro-vin-coc.webp": "baba6bbb024a8ae68aae576629fcdcf8",
"assets/assets/images/categorias/cat-pro-ron.webp": "b39a192e719dd2cd1211caf436d1d6d4",
"assets/assets/images/categorias/cat-pro-vin-bla.webp": "92a13b10514191aa03f79887d9248fb3",
"assets/assets/images/categorias/cat-pro-vin-tin.webp": "8f19d8f8eb1e3566f7df7a682f8c9e33",
"assets/assets/images/categorias/cat-pro-esp.webp": "365a8dd9784d426ef93699fee21247a8",
"assets/assets/images/categorias/cat-pro-cocteles.webp": "cecb04f094b02f98dc0f0594e58117d1",
"assets/assets/images/recomendados/rec-001.webp": "cc67cfe7766a6169f255c3a922dba617",
"assets/assets/images/recomendados/rec-003.webp": "c0b15adf69bd72213734568e847f9c01",
"assets/assets/images/recomendados/rec-002.webp": "043ad393d9e1ea405808b97970e5aff6",
"assets/assets/images/navidadBar.png": "dbc974643e17c148e1c150c8d97baf04",
"assets/assets/images/descrip2.png": "15ae8c5234835d77c8e6defd009b65be",
"assets/assets/images/super_header2.png": "c3bbb6a617d9d907d44ab676e8761cf2",
"assets/assets/images/btn-tipti-com.png": "abbf29c81e12cf16bd9d746166e6370e",
"assets/assets/images/btn-tipti.png": "50f3f047f64b984fd3ebd96a7950a4df",
"assets/assets/images/home-desktop/text_super_reco.webp": "f5ee586a9f02e799035407355a83f23b",
"assets/assets/images/home-desktop/home_port.png": "dcbfdc27ce75a849e2f6e6f9b85f1391",
"assets/assets/images/home-desktop/home_footer.webp": "5b5c9d511a8d37a3e22f0d3c400314b0",
"assets/assets/images/home-desktop/home_port2.webp": "556c5a40af6cefbbda9895c4088f559e",
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
