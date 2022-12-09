'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "da3ee7feeb573e665e83a96814d1409a",
"index.html": "6fc2e6ab94205816934801de029b285a",
"/": "6fc2e6ab94205816934801de029b285a",
"main.dart.js": "f496fd3f398f7d07a1ecd800d9f132dd",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "33f006afb9fec7b0effb45dc816ae633",
"icons/Icon-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-512.png": "97c7dc428a99350aba82964372883671",
"icons/Icon-512.png": "97c7dc428a99350aba82964372883671",
"manifest.json": "bc1964bba03d495900b998c7c95077b0",
".git/config": "87cd9983850ed58dda7bb2ad49b11541",
".git/objects/9b/d4326c0599e432c1f7aa373cfd875f88957675": "ca6f69547583b032f2975a6c45ee6d2b",
".git/objects/6a/72838d1afd2d389a595ca92d24b801ed1ec9fe": "1bf4727c660a80d5f5c95c75211ba63e",
".git/objects/3c/e32f66f9cb76ab149e2f4c72353079f175f72b": "ba7b3ff6431b0439f245c9fc69f497de",
".git/objects/58/6d47dd96265cd0d69daf2b33aa82ec4cc6d0e7": "44e75b873c5f437f03b95f68934f2fc8",
".git/objects/93/cb014c8b110be9a56f0c493f31d3c8d2b5f3ea": "0c63a2f3b0fca4d9af65d874d789a681",
".git/objects/94/a8a39cc913e747e1a3cfb1dcaa9d35502f88ec": "3cd8d672536f657156d43ff12013ffee",
".git/objects/33/a089aafdad638a0a9a359add2a55232e8a5c54": "07c8abd079b10a0fc2041003d4198190",
".git/objects/b5/303184bf50385038c45a1189832b71314e984d": "97ed9bb41011951a8510d1e139bba75a",
".git/objects/d9/4a57f284ef09425aced2d80943330926445141": "70a0961a8d06ad29dc2138d9206c05e7",
".git/objects/d0/7908604324a262a118bc44b4aebd42bc8cc04f": "c1a86855356c5e5a46f430084bac6e59",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/b3/455610437cf68bd8ca7c651e1f11e54e14230e": "806fe02c4a11d306047de1a7cc6563c6",
".git/objects/df/0f2cc6b32c9d2b0c62241476cb23e77cdd0b19": "80ce734707a42799534b587fa4f303c5",
".git/objects/b4/110c077a1e48ca5c1b082dd50e0239a216a0a6": "267338f991b9cebe8c981b9b2bb3ba6f",
".git/objects/a5/233cf7be2b9f89b5ea273208799800bfd1d3d7": "48a6cfe99b053495e62799b00b0efb70",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f71589ac38dff0813b9909d4e51685f9d6a3d3": "9524f202f59bf642de92506c4ab84747",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/3a657a2e8ff3dd93c8a5f5df7bd20b3d3cd052": "786f9a1492dff9ed0a7e6e9a9ed7bf4d",
".git/objects/f4/4cf1e82e982eb386b77ba366c90b2ffcaae6b6": "ea57f36b8398c94f8644d938891b0246",
".git/objects/f4/be7f45eb89e34839014872f4e5a6245dfbc270": "1a97c0b5f1bd1c578ea2ed17dabb88a1",
".git/objects/c7/d8da6aff8a15e6616fe9b834e2e4136c66def3": "ad904a9e7c2b4e668af317a11e52e24b",
".git/objects/f2/f5115e0720d0096391b0c704a11d917b876e83": "f8869d8325779968abb1cc930694c704",
".git/objects/fb/ef9cd96d60d9cd76404eb24768bd0d4b0c6579": "1173cadbd3bd5d942b0e97c084c243c2",
".git/objects/c1/8bbb949b6247ad274ce5bd9dd60ffa26c458d4": "d06d726552c5787cff623bfdbed5b64a",
".git/objects/c1/bd486ee0bc7e5d167da50c65dcca836e93defe": "f73a8b2df416984a97cf910620191ec4",
".git/objects/20/f70d79f6621c411b4140c27f07fb3807a2a329": "4e788aa6760ecd5674c2b1a45ed5a702",
".git/objects/20/1f5942edddd96b86db3fc8dc85f195ded0abb3": "faf6b3e1ab11a6a4929c96307ce7c994",
".git/objects/4b/9a5de40ccff7031000067ff7a2996cc6e8e0bf": "dc2054d785b5a4737b8be3c4583f5a1f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/72ea0b9aee2de93d61a86430f366dddafd1ab8": "6a3e9886fc38737b9ace214297d4a968",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/317a92afc23a728922a6a576202fa427364c70": "74d4e752d1449fa5e4774aa0651609c6",
".git/objects/7b/08849161b14be1668e5ab610f47f41ee5f1250": "1d86785631dce292a1c6e7e70fe549d8",
".git/objects/7b/b3df465bdfcbbea784debb6f50613caad15de4": "69dd6e23ac7891bccbfcdc0b22839b54",
".git/objects/5c/3421fa3bc7752569e3ee0135f5f19729c45c45": "8be5e63bce2a49eac6af5e41d025b537",
".git/objects/98/a411de65467c8dbb1d251cf6a8ac98060891ea": "aa281cd9f63c4e7e1e8cdef3436fde4b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/f775223c3e054eea4cfa29feb5fe2857d78a00": "29f682244dbcd016e9b0db3ab2667dbb",
".git/objects/30/26dc1e4198e607604abefea75f78932ca52825": "a4fc500706f533b9d8fe6dc5aa1ad020",
".git/objects/5b/1c766c682a2d5d174b508d7d59eafe30ac2f9d": "e2c95332b94b32b9d314d6c4525ba307",
".git/objects/52/d485b79fb183ad37a4dd36cfab8d469f49bad0": "0e3bab08b0bf75771d722971e6353865",
".git/objects/52/b32bc458137ff1180bc7e98bedd2301c47554f": "92d99c0dd243443cdfc641715d25705c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a7/153d84905c0d03d744fa5e1d6329d1f8484aac": "04092b3a51f30e4d641302985f6cdbb2",
".git/objects/dd/1edf964a9dbd6a96ae10d74de657de6b5013ee": "2b7b1c37f9d3188be52dba719b9370f6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e2446104246551e079c9e8ecccd4990054d1f0": "329602b28d879fe2fbf0f4fd1a5e64da",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/e2e4a5ac72f473abe95350a5851f0e1a151a54": "da732fb6aada44cf6de6d1967dfcf47b",
".git/objects/e1/55343dd33d4074e97879bd1172a56d97423713": "faa2e5a173ee1f02ae481ee5b86d5358",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/e9c692b4be3862fde6fdbe653c7cc201c58f28": "3eb67c8bc1df2f99ed5702e7ac74b93a",
".git/objects/f1/160a543cba32b6051814a46fa2b99915b2692e": "ba1fbb2bd0798d6a2fcd5ab1f50f2d58",
".git/objects/cb/524649ce8831ece47e48e702190a1ed7b66d80": "4a8105bdaa969dcc0031123a6dc87fb1",
".git/objects/cb/61f9acb55535f7fc45081e3b43564e8d0a1004": "0bb08e1bc8f3d26bce124a9b049ffce4",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/1323b9738bdb7ab631c1cfb2f7e215dade01f1": "8dc80d6e2d7993c367fd540ae97cdbc0",
".git/objects/48/31c234db6bbafddab048dc18c88c2a9783de47": "d5e6ac9be836823cdc6db3e927dd139c",
".git/objects/70/fb78fbd201377e1b09bb7e058c0bd6173ad272": "2cc3d4b8200b92714f90b151f43c0005",
".git/objects/2e/6d8a369802834be86b7b2d01c97ccd5b0305cb": "e4e3d977254d246055f92a35514ad8e3",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac040ddb3495eb5c85cdda6003b5a0f4",
".git/logs/refs/heads/main": "0769b3f47f6b9251f3b80c1984f9ec3d",
".git/logs/refs/remotes/origin/main": "be99f7499026b429682e58c2286863b7",
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
".git/refs/heads/main": "7e663b48a69aa09077e41266ec18c216",
".git/refs/remotes/origin/main": "7e663b48a69aa09077e41266ec18c216",
".git/index": "da6bc2e93dc614f85680b722880a1087",
".git/COMMIT_EDITMSG": "8c71b685cfdfc508bdd9917360337b39",
"assets/AssetManifest.json": "168b62ea79a632d1197d03ef79f745f8",
"assets/NOTICES": "022d720fe6ebe2816b8c9013696224bf",
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
