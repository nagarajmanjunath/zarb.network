<template><h1 id="bond-transaction"><a class="header-anchor" href="#bond-transaction">#</a> Bond Transaction</h1>
<p>Bond transaction is used to bond stake to a validator. If the validator does not exist, it will be
created.</p>
<h1 id="payload-format"><a class="header-anchor" href="#payload-format">#</a> Payload format</h1>
<p>Bond transaction has a payload as seen below:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> BondPayload <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   Bonder    Address   <span class="token string">`cbor:"1,keyasint"`</span>
   Validator PublicKey <span class="token string">`cbor:"2,keyasint"`</span>
   Stake     <span class="token builtin">int64</span>     <span class="token string">`cbor:"3,keyasint"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><code>Boner</code> is the account address that bonds the stake</li>
<li><code>Validator</code> is the public key of the validator</li>
<li><code>Stake</code> is the amount of stake that should be bond</li>
</ul>
<h2 id="example"><a class="header-anchor" href="#example">#</a> Example</h2>
<p>Hers is an example a raw bond transaction:</p>
<hexdump bytes="a8010102582067a538e38f85166bdf9613695b6c4930acfac2efa8b4fabc34c5a7b938f2ef5e0301041a02826520050206a30154436d9a52fd0e4c60ca8dd89f751058cff40edee0025860aa6ffe4fbbd36db8a35db1bfdcdb5cdb043bf20ce4d624fff0aec65bf1216510837c4bc68e812b3d26ed6da921da20105d91ceeb065b7513353520d3a32c51cd16a299da1eca8504d5f82285850c7242832a5b933e8b3fc1b19c352134903919031b00000009cd5b0500145860594ac38ee38949356e139340cd9668f48d908e76b44781e7013e3f70b738a9b6b53e95dfcba23bd1bbe923d2df354815986643467f25b755d76a908c0dca20327cc111e16d30f37041a23417f8d7cb446cc891c551176df641f07c1f4e1e068b15583053434a0dc420d7d0a192283cef16ae0ae1c82d37465de2a208092424173526f147feed9e83aebb594309cb1254cfa786" />
<p>Which can be interpreted in
<a href="http://cbor.me/?bytes=a8010102582067a538e38f85166bdf9613695b6c4930acfac2efa8b4fabc34c5a7b938f2ef5e0301041a02826520050206a30154436d9a52fd0e4c60ca8dd89f751058cff40edee0025860aa6ffe4fbbd36db8a35db1bfdcdb5cdb043bf20ce4d624fff0aec65bf1216510837c4bc68e812b3d26ed6da921da20105d91ceeb065b7513353520d3a32c51cd16a299da1eca8504d5f82285850c7242832a5b933e8b3fc1b19c352134903919031b00000009cd5b0500145860594ac38ee38949356e139340cd9668f48d908e76b44781e7013e3f70b738a9b6b53e95dfcba23bd1bbe923d2df354815986643467f25b755d76a908c0dca20327cc111e16d30f37041a23417f8d7cb446cc891c551176df641f07c1f4e1e068b15583053434a0dc420d7d0a192283cef16ae0ae1c82d37465de2a208092424173526f147feed9e83aebb594309cb1254cfa786" target="_blank" rel="noopener noreferrer">CBOR<OutboundLink/></a>
format:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
    1: 1,
    2: h'67A538E38F85166BDF9613695B6C4930ACFAC2EFA8B4FABC34C5A7B938F2EF5E',
    3: 1,
    4: 42100000,
    5: 2,
    6: {
        1: h'436D9A52FD0E4C60CA8DD89F751058CFF40EDEE0',
        2: h'AA6FFE4FBBD36DB8A35DB1BFDCDB5CDB043BF20CE4D624FFF0AEC65BF1216510837C4BC68E812B3D26ED6DA921DA20105D91CEEB065B7513353520D3A32C51CD16A299DA1ECA8504D5F82285850C7242832A5B933E8B3FC1B19C352134903919',
        3: 42100000000
    },
    20: h'594AC38EE38949356E139340CD9668F48D908E76B44781E7013E3F70B738A9B6B53E95DFCBA23BD1BBE923D2DF354815986643467F25B755D76A908C0DCA20327CC111E16D30F37041A23417F8D7CB446CC891C551176DF641F07C1F4E1E068B',
    21: h'53434A0DC420D7D0A192283CEF16AE0AE1C82D37465DE2A208092424173526F147FEED9E83AEBB594309CB1254CFA786'
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Transaction ID for the above transaction is:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ID: fe2c044aa57e473fcf1fb344db515bc0a3fa825e317c772801f75573031a10a0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>