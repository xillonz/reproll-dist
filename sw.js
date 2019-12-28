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
    "url": "app.75f32851.js",
    "revision": "05f91bb733d4fbebb9895bf06cdabe6e"
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
    "revision": "1f4dbf13be2a9104c94b869f88bdb2ad"
  },
  {
    "url": "main.486c1f43.css",
    "revision": "e2629744e9fa6e312aeca954fdf508be"
  },
  {
    "url": "/",
    "revision": "5cb6f0324801b535eab62e2968307bc5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL(".//index.html"));
