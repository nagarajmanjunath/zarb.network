<template><h1 id="genesis-block"><a class="header-anchor" href="#genesis-block">#</a> Genesis block</h1>
<h2 id="what-is-genesis-block"><a class="header-anchor" href="#what-is-genesis-block">#</a> What is genesis block</h2>
<p>The genesis block is the first block in blockchain.</p>
<h2 id="genesis-information"><a class="header-anchor" href="#genesis-information">#</a> Genesis information</h2>
<p>In Zarb, genesis information is defined inside the <code>genesis.json</code> file. It contains the consensus
parameters like size of validator set or fee settings. It also defines the Treasury account and
bootstrap validators’ information. Here is the <code>genesis.json</code> file for the MainNet in Zarb:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"GenesisTime"</span><span class="token operator">:</span> <span class="token string">"2021-04-07T00:00:00Z"</span><span class="token punctuation">,</span>
  <span class="token property">"Params"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"BlockVersion"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"BlockTimeInSecond"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">"CommitteeSize"</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
    <span class="token property">"BlockReward"</span><span class="token operator">:</span> <span class="token number">100000000</span><span class="token punctuation">,</span>
    <span class="token property">"TransactionToLiveInterval"</span><span class="token operator">:</span> <span class="token number">8640</span><span class="token punctuation">,</span>
    <span class="token property">"UnbondInterval"</span><span class="token operator">:</span> <span class="token number">181440</span><span class="token punctuation">,</span>
    <span class="token property">"MaximumTransactionPerBlock"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token property">"MaximumMemoLength"</span><span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
    <span class="token property">"FeeFraction"</span><span class="token operator">:</span> <span class="token number">0.001</span><span class="token punctuation">,</span>
    <span class="token property">"MinimumFee"</span><span class="token operator">:</span> <span class="token number">1000</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"Accounts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"Address"</span><span class="token operator">:</span> <span class="token string">"0000000000000000000000000000000000000000"</span><span class="token punctuation">,</span>
      <span class="token property">"Balance"</span><span class="token operator">:</span> <span class="token number">2100000000000000</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"Validators"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"PublicKey"</span><span class="token operator">:</span> <span class="token string">"594ac38ee38949356e139340cd9668f48d908e76b44781e7013e3f70b738a9b6b53e95dfcba23bd1bbe923d2df354815986643467f25b755d76a908c0dca20327cc111e16d30f37041a23417f8d7cb446cc891c551176df641f07c1f4e1e068b"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"PublicKey"</span><span class="token operator">:</span> <span class="token string">"332f2f3a6250b7ff955cd73a0b43e567e82b1e6f4e5ace219b74408deefe995b96481d673ce99b20ce62c2177c05880b37b42d3d63f6e7a951492166e74cec3625870582f4a8b8b135abeb4dd171455a2a4a413b79a50b7ace4f8a3123b1ed8f"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"PublicKey"</span><span class="token operator">:</span> <span class="token string">"0fe092c870d0cee720a30388e40f14ec2df38526e3db040efd30d2b59df1afd5b25568b87806799c829cd65659a84e193f1dfbb67e9aea6eefd4fbf9dd6ddaac694d59efba0df6aba336c1e373d0228514481edf9cce376933a05a9d8e60830f"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"PublicKey"</span><span class="token operator">:</span> <span class="token string">"2a59438cb5790fa9d0d3c584e54dfc6f41f998b0bbd5297ea74d5a1b62b1022f222ee1c966fcc060ef199bd867d0d80b416a10423b070d3dd5d4c8d32678b9a686703fe818ba662162416389965579162134c622a9d90d10fb508eef03c38d92"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></template>