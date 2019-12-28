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
    "url": "app.bc1060e9.js",
    "revision": "0ddc44a45e1ece5bfde53a7d6a926eb8"
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
    "revision": "0d2a29cd6f19cc14df2bd59b2f11f4d6"
  },
  {
    "url": "main.486c1f43.css",
    "revision": "e2629744e9fa6e312aeca954fdf508be"
  },
  {
    "url": "/",
    "revision": "b6db4b5606c15605afe68209357c022f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL(".//index.html"));
