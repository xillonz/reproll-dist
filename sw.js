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
    "url": "app.41aa3bd0.js",
    "revision": "b98c117221e1452877b177984c47e75f"
  },
  {
    "url": "icon-192.0168e47d.png",
    "revision": "58e7655e5f77bfcf680f1ae9900dd86a"
  },
  {
    "url": "icon-512.05bed088.png",
    "revision": "2257a111f3f0b507d01d16059ffa11fa"
  },
  {
    "url": "index.html",
    "revision": "3f0aac71a2bd7ad79312b3ce0277fe7a"
  },
  {
    "url": "main.0d7cc12f.css",
    "revision": "dbfbd199677b616aefc16e9448aa4b19"
  },
  {
    "url": "/",
    "revision": "4c40a57a5bc92081342ea20c4ba7ed4a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL(".//index.html"));
