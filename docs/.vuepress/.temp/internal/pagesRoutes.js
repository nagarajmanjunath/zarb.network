import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-1be9811c","/guide/consensus-sortition.html","Sortition Algorithm",["/guide/consensus-sortition.md"]],
  ["v-31d9acb0","/guide/consensus-state-machine.html","Consensus as state machine",["/guide/consensus-state-machine.md"]],
  ["v-3ed6b22c","/guide/consensus-without-delegation.html","Consensus Without delegation",["/guide/consensus-without-delegation.md"]],
  ["v-19760560","/guide/consensus-zarb.html","Consensus mechanism",["/guide/consensus-zarb.md"]],
  ["v-d1a8f4be","/guide/learn-account.html","Account",["/guide/learn-account.md"]],
  ["v-23b10efe","/guide/learn-block.html","Block",["/guide/learn-block.md"]],
  ["v-07a86df7","/guide/learn-certificate.html","Block Certificate",["/guide/learn-certificate.md"]],
  ["v-2be6edde","/guide/learn-committee.html","Committee",["/guide/learn-committee.md"]],
  ["v-76ad71b8","/guide/learn-cryptography.html","Cryptography",["/guide/learn-cryptography.md"]],
  ["v-6cb811f4","/guide/learn-genesis.html","Genesis block",["/guide/learn-genesis.md"]],
  ["v-24b267e3","/guide/learn-incentive.html","Incentive",["/guide/learn-incentive.md"]],
  ["v-63fe1148","/guide/learn-index.html","What is Zarb?",["/guide/learn-index.md"]],
  ["v-28ff91fe","/guide/learn-serialization.html","Data serialization",["/guide/learn-serialization.md"]],
  ["v-03f5f75a","/guide/learn-state-hash.html","State merkle",["/guide/learn-state-hash.md"]],
  ["v-b084db48","/guide/learn-validator.html","Validator",["/guide/learn-validator.md"]],
  ["v-75c6b98f","/guide/run-ansible.html","Deploy Using Ansible",["/guide/run-ansible.md"]],
  ["v-455d5374","/guide/run-compile.html","Compile Zarb",["/guide/run-compile.md"]],
  ["v-b39b67ea","/guide/run-docker.html","Using Docker",["/guide/run-docker.md"]],
  ["v-650533b5","/guide/run-index.html","Getting Started",["/guide/run-index.md"]],
  ["v-c3ba051e","/guide/run-projects.html","Community projects",["/guide/run-projects.md"]],
  ["v-9e90ae48","/guide/run-testnet.html","TestNets history",["/guide/run-testnet.md"]],
  ["v-6f29fa35","/guide/run-validator.html","Become A Validator",["/guide/run-validator.md"]],
  ["v-e0115b4a","/guide/transaction-bond.html","Bond Transaction",["/guide/transaction-bond.md"]],
  ["v-ab88e3e4","/guide/transaction-fee.html","Transactions fee",["/guide/transaction-fee.md"]],
  ["v-5576b067","/guide/transaction-format.html","Transaction format in Zarb",["/guide/transaction-format.md"]],
  ["v-c7f0632a","/guide/transaction-mintbase.html","Mintbase Transaction",["/guide/transaction-mintbase.md"]],
  ["v-59b6f0b6","/guide/transaction-send.html","Send Transaction",["/guide/transaction-send.md"]],
  ["v-0145d4d5","/guide/transaction-sortition.html","Sortition Transaction",["/guide/transaction-sortition.md"]],
  ["v-c0623242","/guide/transaction-stamping.html","Stamping Transactions",["/guide/transaction-stamping.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
