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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9de0ee5ea8eccf414e257d8ab8a491b0"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.726b1560.css",
    "revision": "11ecb630e4ba9d4b0ffb49c6c5892fb9"
  },
  {
    "url": "assets/img/1600px-Taktisch_keil.463c6094.jpg",
    "revision": "463c60942514ad41d4b86431cfe432dc"
  },
  {
    "url": "assets/img/1600px-Taktisch_kolonne.9fb5fc7e.jpg",
    "revision": "9fb5fc7ee387c5c8ec30339539adec93"
  },
  {
    "url": "assets/img/1600px-Taktisch_linie.346cda0e.jpg",
    "revision": "346cda0e0dce339b8dac82d39127c7b1"
  },
  {
    "url": "assets/img/addon-options.af7d8107.jpg",
    "revision": "af7d8107a8787f3ca7a164eeb14abbcd"
  },
  {
    "url": "assets/img/column.457e75b3.png",
    "revision": "457e75b3d91c25fb3c095b224a7d88ab"
  },
  {
    "url": "assets/img/connect-to-repository.7b13ae58.jpg",
    "revision": "7b13ae58b09a0ef9423c6e8d6eccee18"
  },
  {
    "url": "assets/img/container-structure.32f7cc02.svg",
    "revision": "32f7cc02526aa47a4eab88a2713624d1"
  },
  {
    "url": "assets/img/create-addon-group.6949a422.jpg",
    "revision": "6949a4225849e80590c88ab4281a33e7"
  },
  {
    "url": "assets/img/create-file.f101f1ba.jpg",
    "revision": "f101f1ba378b08a3b2c9f380ab8a7d05"
  },
  {
    "url": "assets/img/create-profile.ef36c62e.jpg",
    "revision": "ef36c62e67daf98cac6b7173e6c11bd5"
  },
  {
    "url": "assets/img/edit-link.cbaa9764.jpg",
    "revision": "cbaa9764095e6247dba9c7c529abd328"
  },
  {
    "url": "assets/img/Editbutton.d735283c.jpg",
    "revision": "d735283c75574a1770ddb2f5cb86b129"
  },
  {
    "url": "assets/img/formationen.2a9b394f.gif",
    "revision": "2a9b394fe65bda8f71f3d40af80693f7"
  },
  {
    "url": "assets/img/github-commits.5aebe9e1.jpg",
    "revision": "5aebe9e1a4cfac7e7dddff62fac5f931"
  },
  {
    "url": "assets/img/gm.b0c83edb.jpg",
    "revision": "b0c83edba1490b390172654a3b315b31"
  },
  {
    "url": "assets/img/launcher-options.627fd852.jpg",
    "revision": "627fd852e8f25daafedeec9b78faf866"
  },
  {
    "url": "assets/img/line.d38c2c4a.png",
    "revision": "d38c2c4a5267de23a7fb563bf6ac3b44"
  },
  {
    "url": "assets/img/list-containers.e16871f2.png",
    "revision": "e16871f28aad9f02f04d9835702b21bd"
  },
  {
    "url": "assets/img/max-connections.2d0b3086.jpg",
    "revision": "2d0b30862b56120dcc4817156033a5dc"
  },
  {
    "url": "assets/img/new-repository.4c248ab7.jpg",
    "revision": "4c248ab77332bde82d370eb1d28b3a6a"
  },
  {
    "url": "assets/img/prozess.c96df5b5.png",
    "revision": "c96df5b59230b5bb395a8e08dfbf193c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Slotbutton.647e1ae4.jpg",
    "revision": "647e1ae408ed07ad3853a692d852b869"
  },
  {
    "url": "assets/img/Sthud.2ca991b4.png",
    "revision": "2ca991b4a66db463e423550893b83c37"
  },
  {
    "url": "assets/img/sync-mods.84919c03.jpg",
    "revision": "84919c03fad1b96301de3b8257cd71ab"
  },
  {
    "url": "assets/img/Takt_Zeichen_Auswahl.93c61306.png",
    "revision": "93c61306b7c08ed0aa43caf4824cae71"
  },
  {
    "url": "assets/img/teamspeak.9c5e3f7f.jpg",
    "revision": "9c5e3f7f2ed5629fbded752aed3bf139"
  },
  {
    "url": "assets/img/travis-status.a0a35589.jpg",
    "revision": "a0a35589a2c895b06008766230361775"
  },
  {
    "url": "assets/img/wedge.13a38d2a.png",
    "revision": "13a38d2aced397c2dc3bb370415ea8ad"
  },
  {
    "url": "assets/js/1.0b060c94.js",
    "revision": "033f3301ffe7c6ee3744d6c1da210177"
  },
  {
    "url": "assets/js/10.bbc769c2.js",
    "revision": "f8a3c403271efc37cc006dc212810b46"
  },
  {
    "url": "assets/js/11.228dd864.js",
    "revision": "0ad5e3bf0fc2e3d67c7d06e3e9c9a89e"
  },
  {
    "url": "assets/js/12.b57c3e73.js",
    "revision": "d6cee25eace8bcd81d4625e43c87952d"
  },
  {
    "url": "assets/js/13.7135bbd1.js",
    "revision": "7bad5f9625457c28290ef738de6a257d"
  },
  {
    "url": "assets/js/14.c3b9580c.js",
    "revision": "5b2be3d23286966c7861cc0e952480d5"
  },
  {
    "url": "assets/js/15.05bb63af.js",
    "revision": "04b485271d8d3df4db3eeb6278c45420"
  },
  {
    "url": "assets/js/16.d713e286.js",
    "revision": "3f4af7b1350f5aef5fdbf54ee58d0c22"
  },
  {
    "url": "assets/js/17.e2b7068d.js",
    "revision": "18d183fac3fa8648adda8de42e1acd0d"
  },
  {
    "url": "assets/js/18.4f523ac8.js",
    "revision": "4ef9bf6d2f5eb71a469fe0498739e3a3"
  },
  {
    "url": "assets/js/19.a7a30751.js",
    "revision": "36bf78a516710fea0a8c08aad1beca6b"
  },
  {
    "url": "assets/js/20.2f48632b.js",
    "revision": "581c3a8491d12a9ddae3aee7e8d1df4a"
  },
  {
    "url": "assets/js/21.fae1ea0d.js",
    "revision": "65849be2e69fb92ce6e2e6a860cf469a"
  },
  {
    "url": "assets/js/22.eeeeaca6.js",
    "revision": "52e6322276c3e73bc9476a8992f88e35"
  },
  {
    "url": "assets/js/23.9de6ee49.js",
    "revision": "1e1ae6718b54c4823e40dd14b7aebf93"
  },
  {
    "url": "assets/js/24.0d3d1fba.js",
    "revision": "43fd86e6959f758706ef9f23d50a597b"
  },
  {
    "url": "assets/js/25.e78a39fa.js",
    "revision": "24c411b0e7b17d7daa3990f6ff74ced6"
  },
  {
    "url": "assets/js/26.4ffdf930.js",
    "revision": "9d51c6593dcc43c4b740d3a4ca05e9e2"
  },
  {
    "url": "assets/js/27.6e67b7b6.js",
    "revision": "29f0ac0498248840342c09a8a827ec18"
  },
  {
    "url": "assets/js/28.827c088f.js",
    "revision": "1cb7d028858b05a08cc5c55a9202bf62"
  },
  {
    "url": "assets/js/29.583a1221.js",
    "revision": "031697e186df682ff3ca8e57901032b0"
  },
  {
    "url": "assets/js/3.662a4b00.js",
    "revision": "b149e1c039c851bdac57428fbf65b3ca"
  },
  {
    "url": "assets/js/30.7bc94357.js",
    "revision": "75f521f67ffac8e72ec0bcdda5b3e600"
  },
  {
    "url": "assets/js/31.49f7685b.js",
    "revision": "6d90ab7a0b37326f6664825a2efb3214"
  },
  {
    "url": "assets/js/32.d6593712.js",
    "revision": "56b64102b7a99c654e3913ccc86727ad"
  },
  {
    "url": "assets/js/33.5f40bc1c.js",
    "revision": "2f7f3238da47352b6e2b1a4b4df42d6c"
  },
  {
    "url": "assets/js/34.766e2a64.js",
    "revision": "47aac3d217999c7922263b7bf2bbcc1b"
  },
  {
    "url": "assets/js/35.7808afb8.js",
    "revision": "3fca45171a828b8a2401692ce1d1f651"
  },
  {
    "url": "assets/js/36.b2deb8db.js",
    "revision": "71d649f111430d0dde55cf06d440a60c"
  },
  {
    "url": "assets/js/37.6f467064.js",
    "revision": "250977e32a08f021979f618e7c690c90"
  },
  {
    "url": "assets/js/38.856d1c9b.js",
    "revision": "2561c5d8a336f524c79ec1209c8f0e50"
  },
  {
    "url": "assets/js/39.38621c09.js",
    "revision": "3efce69d3299718eceb19f6377500863"
  },
  {
    "url": "assets/js/4.e8e3c44f.js",
    "revision": "c827ad3e13188fef3c2fa95ec37b4094"
  },
  {
    "url": "assets/js/40.edae8d8e.js",
    "revision": "b63f1e3fb2aa278ee5aaeab8eec8bdd5"
  },
  {
    "url": "assets/js/41.de987d46.js",
    "revision": "01e0e4892d8ab5ad4ed02f84df5c4328"
  },
  {
    "url": "assets/js/42.7a08ecdf.js",
    "revision": "017590728b7cd08eb2ca991f053e165b"
  },
  {
    "url": "assets/js/43.32f41e4b.js",
    "revision": "ba6d497bfcdd9ae5f95fa8789fc3d494"
  },
  {
    "url": "assets/js/5.4d7432c3.js",
    "revision": "e6840bfe4a84d327064c55adb98f953a"
  },
  {
    "url": "assets/js/6.875507ec.js",
    "revision": "3a586b10a76dfb7ec00b32dd7f5cfafa"
  },
  {
    "url": "assets/js/7.85c4057c.js",
    "revision": "a4e438c4f89e9cddd17bceb53399959d"
  },
  {
    "url": "assets/js/8.9c077266.js",
    "revision": "b5ce759e0b908282a12c7ba0daab390d"
  },
  {
    "url": "assets/js/9.36206c29.js",
    "revision": "be444a007737242ac5d565dfae6aa6f3"
  },
  {
    "url": "assets/js/app.a31b87c8.js",
    "revision": "0a06085454cc176e0c8f21f975faa4bb"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "f87e2c63e43ba91c2975198c503c16bf"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "514fa6fa3b77179781637a63651aed91"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "b948b30df76df9a9fa526abdc45c5545"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "07400289e55e093cfdfbb3b1745ceeff"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "ac27e33f6a0cae511458f4945184cff1"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "8a2cb86f7438a2e95828ecdfc8b767e1"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "741d63e3a7326001675401f4e24a4ce8"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "61acee86313fb77b6265ab427de0df78"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "2a124b52c3dd2dca17a87364f4fda372"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "fc7694c0d3949aaf941a5edb0c14f930"
  },
  {
    "url": "de/index.html",
    "revision": "4de3a784893ac4e27811dc0a1dfc4bd2"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "73828794de2f954432cb86484e60eebf"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "ac2d986e38657066ff01f67a1f44dde2"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "4cb32a47d215a741388880be94f3d90f"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "0d23c46e794b2363c3d748ac1d524498"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "912bd789a8cca980d2c61673e997921d"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "33c4d7c76c53821f26a6390c07c9c321"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "6af013336728d5f773f8df3418040d87"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "b97d08de71a55cc10f8b3f820169d7d5"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "19d67514689b199f133e38b3f94bf590"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "d8d7dbb7a72b614bea1431fdddcf38cc"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "38dad5cf28c2ef38b1b7a5742eda8bc4"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "91deee8737f0d9e90a7037aa374dee2a"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "1dcdf628838aa98610ecebf3f07d4152"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "abaff80de692707319dd47faaad60ee9"
  },
  {
    "url": "en/index.html",
    "revision": "6b47e5e92df2c626fd8bb7af1a2aa629"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "678ba3366cdb156e9db9dc300aaa802a"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "09629621faff3e5c8ca09cc3c718e7a0"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "120b36b52e026c90dbffdda96f1276d6"
  },
  {
    "url": "index.html",
    "revision": "498df3b41915d636752f55d07dfd37d5"
  },
  {
    "url": "logo.png",
    "revision": "cc10714dc7b65eef7149fca8c14ceab3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
