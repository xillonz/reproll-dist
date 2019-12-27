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

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.7ffd84b3.js",
    "revision": "e260ad2ab9eda998ef35994bbc545e6e"
  },
  {
    "url": "icon-192.5c382ae1.png",
    "revision": "47dcae137be3297273c695ccfeb82f7c"
  },
  {
    "url": "icon-512.57bdcc5c.png",
    "revision": "c879e9ac8af862306a2b0449766d52cd"
  },
  {
    "url": "index.html",
    "revision": "eef7efe5e0586f6f31a8dc490ffc39ee"
  },
  {
    "url": "main.2052a220.css",
    "revision": "111fb01b13b233760adeb20e5a1b990f"
  },
  {
    "url": "/",
    "revision": "07b086821bc0cc3a5a453980c25e0edf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL(".//index.html"));
