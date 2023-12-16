'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8cfc22c8328c13929a9fb56dda6dfdd2",
"assets/AssetManifest.json": "d79c0977e137228af923d35b04e5bf30",
"assets/assets/img/black_belt01.png": "efc35bae98664602b1d5b8828957e33b",
"assets/assets/img/blue_belt01.png": "ab362bd53ca684860e8ebff3d2dd217c",
"assets/assets/img/brown_belt01.png": "d0fa1c368d748f701fb863ed3ebd39b4",
"assets/assets/img/green_belt01.png": "26c609e2fda96e3947beab43f5a6cd23",
"assets/assets/img/karategui_01.png": "3b63447eeb0f050d55799d624809cf42",
"assets/assets/img/karategui_02.png": "dfb7731cbfbb1349ca381f3d677eeba6",
"assets/assets/img/karategui_03.png": "e02e3fd7a93a30c081e71b681c1ab4ef",
"assets/assets/img/logo_bunkapp_gris.png": "168c710568c0b1887b980979f5dc74e0",
"assets/assets/img/orange_belt01.png": "aff563b2d1b6bcf476f0160ec88a3a36",
"assets/assets/img/protecciones_blue.png": "ae6ba99bfec9254126b3f8c39924cc43",
"assets/assets/img/protecciones_red.png": "20b141dee8fc863cece96bd037b68c38",
"assets/assets/img/purple_belt01.png": "4cc602502700d07b95e934f77be7112e",
"assets/assets/img/white_belt01.png": "2202139be51f1bd0a956cc5df90a0814",
"assets/assets/img/yellow_belt01.png": "a2807a2591d117ae8dcfdc72c2bf0527",
"assets/assets/logo.png": "9d2896e5e06db17baaf3676fb280048d",
"assets/assets/logo_1024.png": "fe9a52c60ddeaf99595a8c4aaf9d7b7a",
"assets/assets/logo_icono.png": "ce67a5bcbeb81ff699061b36e2c7018f",
"assets/assets/riveAssets/animated_icons2.riv": "199cd44096de465ce6c4c308e9720784",
"assets/assets/riveAssets/icons_animated.riv": "162e8114717a3e37193d6c11d805571a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "89bf02082bafe4a7306f29e0577bb4b1",
"assets/NOTICES": "9071ae47b88ab417d7b16f525f31a12f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "9d2896e5e06db17baaf3676fb280048d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8634ae5f851db90cf6ba4f71046ddccd",
"/": "8634ae5f851db90cf6ba4f71046ddccd",
"main.dart.js": "e97e7ed7ff6ece21670eddbd562a131c",
"manifest.json": "a803281dacd44f72fd9718952c9d687c",
"splash/img/dark-1x.png": "357ab04ac175a42f9a801845fc89f9ce",
"splash/img/dark-2x.png": "69da7d4891790d31104d5fbac0e4f8d1",
"splash/img/dark-3x.png": "704d339bca3a2c2e667aeb6506bce313",
"splash/img/dark-4x.png": "e8ab7aa62e958a6075565f6d2f21cfbd",
"splash/img/light-1x.png": "357ab04ac175a42f9a801845fc89f9ce",
"splash/img/light-2x.png": "69da7d4891790d31104d5fbac0e4f8d1",
"splash/img/light-3x.png": "704d339bca3a2c2e667aeb6506bce313",
"splash/img/light-4x.png": "e8ab7aa62e958a6075565f6d2f21cfbd",
"version.json": "9c7dcc014883be8a4178715c6675c82d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
