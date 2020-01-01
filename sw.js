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
    "url": "app.02a2abb6.js",
    "revision": "feb94d6ad7d0d956e915a937483489c9"
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
    "revision": "1a1046dfbc19d7935a65b1d4e35e9283"
  },
  {
    "url": "main.486c1f43.css",
    "revision": "e2629744e9fa6e312aeca954fdf508be"
  },
  {
    "url": "/",
    "revision": "849e9a6c831186dfdeda63c556524f97"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL(".//index.html"));
