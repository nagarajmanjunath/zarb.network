export const themeData = {
  "hostname": "https://zarb.netwotk/",
  "docsRepo": "https://github.com/zarbchain/zarb.network",
  "docsDir": "docs",
  "docsBranch": "main",
  "lastUpdated": "Last Updated",
  "editLinks": true,
  "editLinkText": "Help us improve this page!",
  "sidebarDepth": 0,
  "title": "ZarbNetwork",
  "nav": [
    {
      "text": "What is Zarb",
      "link": "/guide/learn-index"
    },
    {
      "text": "Get started",
      "link": "/guide/run-index"
    },
    {
      "text": "ZarbNetwork",
      "link": "http://localhost:8080"
    },
    {
      "text": "Github",
      "link": "https://github.com/zarbchain/"
    },
    {
      "text": "Twitter",
      "link": "https://twitter.com/ZarbBlockchain"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "title": "Learn",
        "collapsable": false,
        "children": [
          "learn-index",
          "learn-cryptography",
          "learn-serialization",
          "learn-genesis",
          {
            "title": "Consensus protocol",
            "collapsable": true,
            "children": [
              "consensus-zarb.md",
              "consensus-state-machine.md",
              "consensus-without-delegation.md",
              "consensus-sortition.md"
            ]
          },
          "learn-block",
          "learn-certificate",
          "learn-account",
          "learn-validator",
          "learn-committee",
          {
            "title": "Transactions",
            "collapsable": true,
            "children": [
              "transaction-stamping.md",
              "transaction-format.md",
              "transaction-send.md",
              "transaction-mintbase.md",
              "transaction-bond.md",
              "transaction-sortition.md",
              "transaction-fee.md"
            ]
          },
          "learn-incentive"
        ]
      },
      {
        "title": "Run",
        "collapsable": false,
        "children": [
          "run-index",
          "run-testnet",
          "run-compile",
          "run-docker",
          "run-validator",
          "run-ansible",
          "run-projects"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English",
      "danger": "WARNING"
    }
  },
  "navbar": [],
  "logo": null,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window"
}
