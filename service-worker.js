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
    "revision": "d989c0342df79ccfaad0bb52760eb5b1"
  },
  {
    "url": "assets/css/0.styles.65636cd6.css",
    "revision": "78f1863c7a28fd04eb5de9f6452eda37"
  },
  {
    "url": "assets/img/bitcoin_reward.21aa94cc.png",
    "revision": "21aa94cc539793cae70629832124131a"
  },
  {
    "url": "assets/img/bitcoin_token_distribution.5a6bec49.png",
    "revision": "5a6bec4922e8520aa1e9829bc05b760b"
  },
  {
    "url": "assets/img/delegated_proof_of_stake.57018319.png",
    "revision": "57018319970326fd5cebf2c707513445"
  },
  {
    "url": "assets/img/discord-logo.3437c105.svg",
    "revision": "3437c10597c1526c3dbd98c737c2bcae"
  },
  {
    "url": "assets/img/reddit-logo.f3f55761.svg",
    "revision": "f3f557617596f39833a8b6b8667ae692"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/stamped_tx.ba3f73ed.png",
    "revision": "ba3f73ed0aacea9f1aee412b4394156f"
  },
  {
    "url": "assets/img/telegram-logo.49aafe51.svg",
    "revision": "49aafe51fa7aacf7edcd760e7913afa6"
  },
  {
    "url": "assets/img/testnet_v3_topology.bf344457.png",
    "revision": "bf344457e3ece270cf5e8783cb890436"
  },
  {
    "url": "assets/img/testnet_v4_reward_vs_stake.d0d03d1b.png",
    "revision": "d0d03d1b9adc33a9d0a295f8a54c6e50"
  },
  {
    "url": "assets/img/zarb_reward.f7c156bd.png",
    "revision": "f7c156bdbde7cbde5fc3997378e9b81f"
  },
  {
    "url": "assets/img/zarb_token_distribution.0073af87.png",
    "revision": "0073af8770b4b1ca1217c89071a1a160"
  },
  {
    "url": "assets/img/zarb_validator_pool.666de966.png",
    "revision": "666de96659d2d13ec1a18c1b46a1c69d"
  },
  {
    "url": "assets/img/zarb-ansible.eba83a3c.png",
    "revision": "eba83a3cde3fdfaf6ad7d8e79e8174a7"
  },
  {
    "url": "assets/img/zarb-change-proposer.afe8282c.png",
    "revision": "afe8282cb8a54736e204a266684fd3de"
  },
  {
    "url": "assets/img/zarb-consensus-states.38d1da47.png",
    "revision": "38d1da4791512ae754d58e712054f2fd"
  },
  {
    "url": "assets/img/zarb-normal-execution.f312eef9.png",
    "revision": "f312eef94c3d691680741fc490e73652"
  },
  {
    "url": "assets/js/10.e7d6de68.js",
    "revision": "6d73f4a6cee4eed5cea2aa6ab013cc4a"
  },
  {
    "url": "assets/js/11.e158080f.js",
    "revision": "06cde721044a8e19a75c35c3c3cfd2fd"
  },
  {
    "url": "assets/js/12.b1fe2da5.js",
    "revision": "919007ec8d91f17b8889c5cdb756e735"
  },
  {
    "url": "assets/js/13.c6f335fd.js",
    "revision": "2b5c422799c71f4be842171122a06750"
  },
  {
    "url": "assets/js/14.2406b4d7.js",
    "revision": "56a0f01167f239f5a6d3cf2754318d69"
  },
  {
    "url": "assets/js/15.2e05c999.js",
    "revision": "97e757f943777d78378a0d5fe175cec7"
  },
  {
    "url": "assets/js/16.0e051067.js",
    "revision": "0fad0c582b7c6852132f6d0e3a7325a4"
  },
  {
    "url": "assets/js/17.9c424661.js",
    "revision": "e24ea325ab93b84badc9d9c0849e61be"
  },
  {
    "url": "assets/js/18.3c4b14b3.js",
    "revision": "e021b282c0b52b9ed92020645764f564"
  },
  {
    "url": "assets/js/19.55439a23.js",
    "revision": "13111b056603c36a279e0d31388cb636"
  },
  {
    "url": "assets/js/2.605e8b30.js",
    "revision": "01eb5366860d8da324f6a70f54e465f9"
  },
  {
    "url": "assets/js/20.aa307d8c.js",
    "revision": "05da12be18808c9ea5ec7ed74f804487"
  },
  {
    "url": "assets/js/21.4072f120.js",
    "revision": "fc224436c3e85d79b389e62adf0cb9ef"
  },
  {
    "url": "assets/js/22.85f15285.js",
    "revision": "f6ad1b368b6f9ad04f7381c1a5a00c24"
  },
  {
    "url": "assets/js/23.9be2e45b.js",
    "revision": "3162933060ac8ab5ae965bf7a2f760ac"
  },
  {
    "url": "assets/js/24.0a4ab560.js",
    "revision": "6541158842eb63d449655d2b827d25d6"
  },
  {
    "url": "assets/js/25.2b248973.js",
    "revision": "0018637f48b2829f27e5913312e5c4c6"
  },
  {
    "url": "assets/js/26.7b22b56c.js",
    "revision": "5705812d3c24e027f073a6515a18bf61"
  },
  {
    "url": "assets/js/27.30696f8a.js",
    "revision": "a05f562f795cbd1c54f8dc30007e25e3"
  },
  {
    "url": "assets/js/28.8a8a3969.js",
    "revision": "319370e05cbbcedca7f4167c81f39a16"
  },
  {
    "url": "assets/js/29.ef113b51.js",
    "revision": "178fcf0f78c6dec91d0b7c9efde49a27"
  },
  {
    "url": "assets/js/3.93915830.js",
    "revision": "241b7ce690d804ed5911e793386dd8ff"
  },
  {
    "url": "assets/js/30.253f248d.js",
    "revision": "d3bcf584ff26e5781b8390500f2f7708"
  },
  {
    "url": "assets/js/31.641cdfd4.js",
    "revision": "4228d6615eae8caa9f402fe51279f10f"
  },
  {
    "url": "assets/js/32.85273dae.js",
    "revision": "876b6f181e79b3ec452e1c1f7385b7f6"
  },
  {
    "url": "assets/js/33.5fb8589d.js",
    "revision": "8c47bde280c280ab9a61d80fac34731b"
  },
  {
    "url": "assets/js/34.1fe1a33c.js",
    "revision": "459c4b519ce30913d2a9472869dc3450"
  },
  {
    "url": "assets/js/35.a6d1cdc5.js",
    "revision": "94c194ec9d11b7b0321c99fa8f17f376"
  },
  {
    "url": "assets/js/36.30eb2a04.js",
    "revision": "9314bfb9965046c114aaa086c586cc2f"
  },
  {
    "url": "assets/js/37.d5ecdfbc.js",
    "revision": "bce870aec6cd590b279f29989288f7fc"
  },
  {
    "url": "assets/js/38.37c589f7.js",
    "revision": "24dd63c597f7153c7cd19375155d8d6c"
  },
  {
    "url": "assets/js/4.cfe948a1.js",
    "revision": "dfe4ca74be481fd9e3da28e39201a396"
  },
  {
    "url": "assets/js/5.6f6cbc81.js",
    "revision": "57da277956c612d28afe071081b6bd1f"
  },
  {
    "url": "assets/js/6.cf48a907.js",
    "revision": "82e34590d43353df656f541c7d27b4e7"
  },
  {
    "url": "assets/js/7.50c02693.js",
    "revision": "73b73c8d391607eba554545d355ffb4f"
  },
  {
    "url": "assets/js/8.20a54a33.js",
    "revision": "b3dda5c9a1f55b2ac946847fbb9eab82"
  },
  {
    "url": "assets/js/9.d71e9ffa.js",
    "revision": "e8c45cd2af84edd76c22c96eefd192a4"
  },
  {
    "url": "assets/js/app.298bfa2c.js",
    "revision": "2f9f663c9b5fb1fb7c7f303cffdd6496"
  },
  {
    "url": "guide/consensus-sortition.html",
    "revision": "3ed65e9e36243f4b5cfb88c7a6a67ecc"
  },
  {
    "url": "guide/consensus-state-machine.html",
    "revision": "db47ceceebfc071305de6c6839155eac"
  },
  {
    "url": "guide/consensus-without-delegation.html",
    "revision": "47329a9878e96a3cf3937fd62a33d9dc"
  },
  {
    "url": "guide/consensus-zarb.html",
    "revision": "d9ab3577249c1a1c39315be25683f906"
  },
  {
    "url": "guide/learn-account.html",
    "revision": "75af615d2319c2e292627c628da2b252"
  },
  {
    "url": "guide/learn-block.html",
    "revision": "eff3a54ab79ef206a16a43e909f43176"
  },
  {
    "url": "guide/learn-certificate.html",
    "revision": "af1b1008ea9744941b4d1bcfda0995c7"
  },
  {
    "url": "guide/learn-committee.html",
    "revision": "c230792a95842287bf089dc7f056e78a"
  },
  {
    "url": "guide/learn-cryptography.html",
    "revision": "3640046471d520ef3aad5b73bc0a3117"
  },
  {
    "url": "guide/learn-genesis.html",
    "revision": "18135e17003dcfb6537ee358f44d12ab"
  },
  {
    "url": "guide/learn-incentive.html",
    "revision": "49055f58df6b2726327ecc8d70d7642b"
  },
  {
    "url": "guide/learn-index.html",
    "revision": "ee795bd6fca89342f8bc577191b00710"
  },
  {
    "url": "guide/learn-serialization.html",
    "revision": "f823983a9c514c30c4b460637a64b65d"
  },
  {
    "url": "guide/learn-state-hash.html",
    "revision": "54b8e341c87678c4bf10eedd98352ca1"
  },
  {
    "url": "guide/learn-validator.html",
    "revision": "92e553c5fd8f6319c2f053e81c1638b7"
  },
  {
    "url": "guide/run-ansible.html",
    "revision": "19f3d91479d7aad957030f0175887dae"
  },
  {
    "url": "guide/run-compile.html",
    "revision": "b60fbceff4c3019d6503a36475799fcf"
  },
  {
    "url": "guide/run-docker.html",
    "revision": "8d065993abf55b9a44b42e37c6f9db93"
  },
  {
    "url": "guide/run-index.html",
    "revision": "4e7eca66cc18bedfbb954620b2c376bc"
  },
  {
    "url": "guide/run-projects.html",
    "revision": "5bc35fca57b051eee7950b9a26e6e84b"
  },
  {
    "url": "guide/run-testnet.html",
    "revision": "17c002c2f80d336391d9f0f471cee0ab"
  },
  {
    "url": "guide/run-validator.html",
    "revision": "d020d5865134dc1ca28f01cc508db238"
  },
  {
    "url": "guide/transaction-bond.html",
    "revision": "0672cc8914e98b0521957aa87599ed8a"
  },
  {
    "url": "guide/transaction-fee.html",
    "revision": "53888e7f00a2b4fd122ec84900a5daf1"
  },
  {
    "url": "guide/transaction-format.html",
    "revision": "70009ca32c091e8a596757d6d170e7dc"
  },
  {
    "url": "guide/transaction-mintbase.html",
    "revision": "ad43f9a6d4934fb7388a72adacb9267d"
  },
  {
    "url": "guide/transaction-send.html",
    "revision": "758cf1172ba87d3beacd807dab5e6ac1"
  },
  {
    "url": "guide/transaction-sortition.html",
    "revision": "6c5ac68a7b9859d53f0a8968654f2772"
  },
  {
    "url": "guide/transaction-stamping.html",
    "revision": "b97fa3dba390ba9b852748718bbb3918"
  },
  {
    "url": "index.html",
    "revision": "b613284fad5e3ee732235ff574f31271"
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
