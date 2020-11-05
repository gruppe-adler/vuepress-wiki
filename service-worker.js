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
    "revision": "97819cd166e4b1ffa024c0246e7d247e"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.533a18bd.css",
    "revision": "bbadbfb974eb6bea9996a52f6db6c5b4"
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
    "url": "assets/js/1.9d972ef3.js",
    "revision": "bc6f1e9b7bc165c3f627cc12d4fcccb5"
  },
  {
    "url": "assets/js/10.c2b6af22.js",
    "revision": "52139ea8a6689005e4a98fde98eac69f"
  },
  {
    "url": "assets/js/11.9edb86aa.js",
    "revision": "c1d1c7932edc9df7be45e8d782ab597e"
  },
  {
    "url": "assets/js/12.ac5ae795.js",
    "revision": "1d929b96c4cbe04a31e00e90cac00714"
  },
  {
    "url": "assets/js/13.b3135fcd.js",
    "revision": "f7c65393b063da2cccd6ede360658ae2"
  },
  {
    "url": "assets/js/14.d78ef694.js",
    "revision": "d87b2b481427f6b185a80fcd7d8cc1b8"
  },
  {
    "url": "assets/js/15.cf06986b.js",
    "revision": "190e72ae34de42bd07d05c65489b808d"
  },
  {
    "url": "assets/js/16.658af9e9.js",
    "revision": "407a6e4974ae88507613691c9ac331cf"
  },
  {
    "url": "assets/js/17.6296fa80.js",
    "revision": "8744d09161108a029baac6293ded10df"
  },
  {
    "url": "assets/js/18.76b88c7a.js",
    "revision": "2b6c2606037e0d3f954f9b6886bef091"
  },
  {
    "url": "assets/js/19.5b08a2e7.js",
    "revision": "639dd0e9ff5f7607f49cbac829d5dd46"
  },
  {
    "url": "assets/js/20.f97a0a55.js",
    "revision": "bc27df494fb163152bb4d5b487bf37d7"
  },
  {
    "url": "assets/js/21.f51f996d.js",
    "revision": "5742ae532675cb1a1bc7247110b92585"
  },
  {
    "url": "assets/js/22.0c7b5b5a.js",
    "revision": "d1c6b6e14076cbe91d444f7edae9efac"
  },
  {
    "url": "assets/js/23.b0c126e7.js",
    "revision": "2d6c8634f4216eae38b56af5a2636ae8"
  },
  {
    "url": "assets/js/24.906c9461.js",
    "revision": "4e48b1c892b5e46721becd4cce79e533"
  },
  {
    "url": "assets/js/25.3c621885.js",
    "revision": "9195482f824b913d91ef82c031b73218"
  },
  {
    "url": "assets/js/26.457dc371.js",
    "revision": "bfc8b0863a0e75e5d9cc895820431393"
  },
  {
    "url": "assets/js/27.068de67a.js",
    "revision": "bfcd00c3fb47bfb0ab580a785675a560"
  },
  {
    "url": "assets/js/28.bfb72218.js",
    "revision": "18f6c786f9f088147f3cceca6debac7c"
  },
  {
    "url": "assets/js/29.58dd654a.js",
    "revision": "46f1e7dd64b5102d3d9556250c079ea2"
  },
  {
    "url": "assets/js/3.a4eac80e.js",
    "revision": "7c9ec67674899b78fad1fd744905c255"
  },
  {
    "url": "assets/js/30.1fedc09e.js",
    "revision": "6538f63f5fe581b35420111201cffd7b"
  },
  {
    "url": "assets/js/31.58a9a974.js",
    "revision": "8b988a676f660b20af373f2df1b9f38a"
  },
  {
    "url": "assets/js/32.d8b72707.js",
    "revision": "b4ee9b61d4dc00c5dce5193b1530a63a"
  },
  {
    "url": "assets/js/33.ab92630a.js",
    "revision": "ac9e7e0f6061393aa699aa93d37df4c0"
  },
  {
    "url": "assets/js/34.e07a6130.js",
    "revision": "51b9b227808d99cd2bc40fe114192ea1"
  },
  {
    "url": "assets/js/35.da6314e2.js",
    "revision": "d601ed14f66f87a653261e5ce645e610"
  },
  {
    "url": "assets/js/36.7615156a.js",
    "revision": "35f708f58b2003f26f71e9f46c027950"
  },
  {
    "url": "assets/js/37.b4c4d3b4.js",
    "revision": "0e653715fca766cfa1bea1662bb3c100"
  },
  {
    "url": "assets/js/38.4cf1b100.js",
    "revision": "5610f62ead66edf0cc8ee4771b5f5f48"
  },
  {
    "url": "assets/js/39.bdfb1bf2.js",
    "revision": "d2add0779a3e3b0ab8520de60fcfc6ad"
  },
  {
    "url": "assets/js/4.01aab508.js",
    "revision": "10325d3cfd3f3ab833d2ce14acc133a1"
  },
  {
    "url": "assets/js/40.a4ccb56a.js",
    "revision": "7427bc87d5fa7350a3c89de279766ae2"
  },
  {
    "url": "assets/js/41.4325e117.js",
    "revision": "ed9d99c6831147c2a8bbe1d676041889"
  },
  {
    "url": "assets/js/5.08ceb1c3.js",
    "revision": "a02cff4e11151e053a566d46d5b14250"
  },
  {
    "url": "assets/js/6.5a2ecefb.js",
    "revision": "0dfd616513f2def8a7b757452737d806"
  },
  {
    "url": "assets/js/7.abcb407c.js",
    "revision": "f2e90ce916723ebc2a5c61f99f2f9696"
  },
  {
    "url": "assets/js/8.3d0e3a38.js",
    "revision": "96751b252211458b3a14304ac2573e89"
  },
  {
    "url": "assets/js/9.5d3a8e3a.js",
    "revision": "fcf2ef4d248d7c3df3b33dbac2070e65"
  },
  {
    "url": "assets/js/app.1c066012.js",
    "revision": "f445ef4abf2d46f2b248ce45c418fb05"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "ac6d28f98ac54bd9d6163c238b8eb7f5"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "808bd0ac2113838e15980c1e1c65493b"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "4cb22f692710d4b97484f6f0f412f215"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "6494b83bac69cbe244009c3e0e375c85"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "a08732e13713dc9b7c81e213b7b04c4d"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "d128027a58eab438c8d7c475d4e0a474"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "ba4f09c17962a888981d94c66b7c623c"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "da21a5b8697e02668440779b9bb4f97f"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "078ef27b447cb43f7262c2f9a90d80a8"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "9654413d6999480bc75ea86e1a80581c"
  },
  {
    "url": "de/index.html",
    "revision": "0baa70420e1265b66badbe10247a15e4"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "2ef8a0b791b74c85ab7877ce1e45f5c9"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "b5fb1be11c2a467c485164377d257bb5"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "0e44c94ad1ac7164847efb8cf24940fe"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "cf2f6b1cf4c3014516ee6fb730db53d8"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "3dfc90bf6389a6f6546f00b7799272d7"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "38735d9b08bec0476a04f2d7ed4e35ab"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "084a5f6e46f1cc464cd697c46c21158e"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "253fc7d34871eac5469506f45eb1897a"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "8a26c6d24458e580f9784a251e3f3ab2"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "757c70193cfdc5c4fcb4d115906eca0a"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "2607f4065af407491c3e2c9867d11834"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "6de628512a9ab0e38d85f862bcb9f9ed"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "4958d5e6aaa0e11c49c04b65bafe16eb"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "f0cec81ff78dc447c48d0d5cdec8fe64"
  },
  {
    "url": "en/index.html",
    "revision": "a804d02a8dcca6c7d6b4fd2946f4b973"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "ac8e68c74a134fa2c193a4db61368dc7"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "615ff0a400605029bb9ce51a2b85fe30"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "ea21d62d1c439b3388884d421b4b1dcc"
  },
  {
    "url": "index.html",
    "revision": "edfbcf3e6ad530b0750c231379168099"
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
