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
    "revision": "5aa59e3b7442d70f30b5fafa52487c07"
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
    "url": "assets/js/13.ce0bf753.js",
    "revision": "8f5d654182eaa2a6a20cd0fb4987911a"
  },
  {
    "url": "assets/js/14.d78ef694.js",
    "revision": "d87b2b481427f6b185a80fcd7d8cc1b8"
  },
  {
    "url": "assets/js/15.702b3761.js",
    "revision": "53b3746c83c7931ad41c16cf702268b2"
  },
  {
    "url": "assets/js/16.658af9e9.js",
    "revision": "407a6e4974ae88507613691c9ac331cf"
  },
  {
    "url": "assets/js/17.e05a11af.js",
    "revision": "97bc098f5b7a378635cc668239b63adc"
  },
  {
    "url": "assets/js/18.7368695a.js",
    "revision": "a5b6752ec23ba7ccffdd1e04732cfd42"
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
    "url": "assets/js/32.343e3257.js",
    "revision": "1294b6afec6cac5e5d577e6b37d9db82"
  },
  {
    "url": "assets/js/33.f0dfd98c.js",
    "revision": "8284ec01d127050c968cb5081c7903da"
  },
  {
    "url": "assets/js/34.3a76e2bf.js",
    "revision": "c2b786aac7c8ffb697bcd0f5e8c5860c"
  },
  {
    "url": "assets/js/35.227e618f.js",
    "revision": "dc721c26ce76fae3e64c46c94d7ebfad"
  },
  {
    "url": "assets/js/36.82953a51.js",
    "revision": "3d219cbd77b515659b54ff1fd977b70c"
  },
  {
    "url": "assets/js/37.4bb83d2c.js",
    "revision": "8b5724b4e8d2e2299c64b610cb676220"
  },
  {
    "url": "assets/js/38.523cf4c4.js",
    "revision": "1649838e2c9be13a9cfe6692349cf6b6"
  },
  {
    "url": "assets/js/39.81f92bca.js",
    "revision": "3d9ea365eda8ba0a3f9a5cbd23b35155"
  },
  {
    "url": "assets/js/4.01aab508.js",
    "revision": "10325d3cfd3f3ab833d2ce14acc133a1"
  },
  {
    "url": "assets/js/40.f719c0c4.js",
    "revision": "b557942eefaeb266e9e4c555dca99741"
  },
  {
    "url": "assets/js/41.52501752.js",
    "revision": "f4ab584988e78b2aeadc0b18f4216623"
  },
  {
    "url": "assets/js/42.b5f24023.js",
    "revision": "242f64c7e721cccb7deaa0e802dbb63b"
  },
  {
    "url": "assets/js/5.aaf9c86e.js",
    "revision": "232bddb095e967ef3ad5e56cda7181ba"
  },
  {
    "url": "assets/js/6.dba61f68.js",
    "revision": "0bd29f51ff3f5e32613755787666d7ab"
  },
  {
    "url": "assets/js/7.8a2cface.js",
    "revision": "2e6a0644c8ef580e78de8807a4a539a6"
  },
  {
    "url": "assets/js/8.d502752d.js",
    "revision": "45c454636a6e8b0bacf5ef3d86cc96a5"
  },
  {
    "url": "assets/js/9.5d3a8e3a.js",
    "revision": "fcf2ef4d248d7c3df3b33dbac2070e65"
  },
  {
    "url": "assets/js/app.b49e05ae.js",
    "revision": "d5b0d00e6bab55f3150de7485d2d179c"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "0a549d380cba78adb7ce6b180866ae0c"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "0ee58e6eae2bcf2eb312060f2270a3fa"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "cbd80751fd9646b4ef5d4266a1016eb5"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "c8c0bd9ff31f0f1f0448ac3cbf01ed72"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "5c6e1671d4b01b0174739355c4fb1e8a"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "1a5f7b108d967a39df70a8f651bcf5ba"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "17aa45f0cebe476c7efd132dc8ccc7db"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "8d5d1bddccd88b0032afd8c78ae3bf15"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "cda080cf251a1a9a094bdd94b1e40e51"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "e7e86232c1adf0da246e6fa8e5862599"
  },
  {
    "url": "de/index.html",
    "revision": "157d92cff3d83cfdfbca97fe29c03970"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "0d1e30cefd2c85c16f080b6422f7cebc"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "dadabd7343d9cdb30138710d610c7749"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "108ac0327ba9d340f667b11453d65e1d"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "ec2cde9971d62a52dfb92a27aeec4a28"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "b9dbdfec48a2330a9bfb92e2c816f5df"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "b8013d3de2de5634d06fe805d9d1ae73"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "fa9a0c4830dd681ec328adb6f1da5216"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "2cad414ab933f854a7dd2e4a66315eeb"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "8ffcca979faf65d40d82f3d09d30a696"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "744b90f0ab8c1334ca95c4bf4c9d9781"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "b07b37eaadec3e7837ce3c1741ef6208"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "b601b0c6896100b431084c858e0f2b45"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "2178e07cebfdd6785f0e52ca8475209b"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "843d15094562234421fb0e2bdb6fd13d"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "821d2cc8e069cd9a2f11a4aa9c3d4597"
  },
  {
    "url": "en/index.html",
    "revision": "7cb95f4ef8ee7c0c6066cb7ff666c446"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "801ca0eb6da44df18a9f6171394aebfe"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "d564e7821ef32057b99a2c2ff9883e0c"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "5775793fc98465d5f517692493214a32"
  },
  {
    "url": "index.html",
    "revision": "28c7303879373c3426a9b21b735e9089"
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