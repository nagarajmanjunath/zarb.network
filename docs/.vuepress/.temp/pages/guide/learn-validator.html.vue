<template><h1 id="validator"><a class="header-anchor" href="#validator">#</a> Validator</h1>
<h2 id="what-is-validator"><a class="header-anchor" href="#what-is-validator">#</a> What is Validator?</h2>
<p>Validator is a full node that participates in the consensus mechanism by broadcasting its votes.
Validators get rewards for proposing new blocks. Validators should bond tokens in the form of stake
and they are weighted by their boned stakes.</p>
<h2 id="validator-structure"><a class="header-anchor" href="#validator-structure">#</a> Validator structure</h2>
<p>Validator structure is used to hold the public key, stake and number of validators.</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Validator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   PublicKey        PublicKey <span class="token string">`cbor:"1,keyasint"`</span>
   Number           <span class="token builtin">int</span>       <span class="token string">`cbor:"2,keyasint"`</span>
   Sequence         <span class="token builtin">int</span>       <span class="token string">`cbor:"3,keyasint"`</span>
   Stake            <span class="token builtin">int64</span>     <span class="token string">`cbor:"4,keyasint"`</span>
   BondingHeight    <span class="token builtin">int</span>       <span class="token string">`cbor:"5,keyasint"`</span>
   UnbondingHeight  <span class="token builtin">int</span>       <span class="token string">`cbor:"6,keyasint"`</span>
   LastJoinedHeight <span class="token builtin">int</span>       <span class="token string">`cbor:"7,keyasint"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li><code>PublicKey</code> is the public key of validator which is 96 bytes in length</li>
<li><code>Number</code> is a unique and sequential number for the validator</li>
<li><code>Sequence</code> increasers anytime user send a transactions to prevent replaying the transaction</li>
<li><code>Stake</code> holds the stake of the validator</li>
<li><code>BondingHeight</code> is the last height that the validator is bonded some stake</li>
<li><code>UnbondingHeight</code> is the height that the validator is unbonded</li>
<li><code>LastJoinedHeight</code> is the validator joined the committee</li>
</ul>
<h2 id="example"><a class="header-anchor" href="#example">#</a> Example</h2>
<p>Hers is an example of a validator data:</p>
<hexdump bytes="a7015860594ac38ee38949356e139340cd9668f48d908e76b44781e7013e3f70b738a9b6b53e95dfcba23bd1bbe923d2df354815986643467f25b755d76a908c0dca20327cc111e16d30f37041a23417f8d7cb446cc891c551176df641f07c1f4e1e068b020003000400050006000700" />
<p>Which can be interpreted in
<a href="http://cbor.me/?bytes=a7015860594ac38ee38949356e139340cd9668f48d908e76b44781e7013e3f70b738a9b6b53e95dfcba23bd1bbe923d2df354815986643467f25b755d76a908c0dca20327cc111e16d30f37041a23417f8d7cb446cc891c551176df641f07c1f4e1e068b020003000400050006000700" target="_blank" rel="noopener noreferrer">CBOR<OutboundLink/></a>
format:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
    1: h'594AC38EE38949356E139340CD9668F48D908E76B44781E7013E3F70B738A9B6B53E95DFCBA23BD1BBE923D2DF354815986643467F25B755D76A908C0DCA20327CC111E16D30F37041A23417F8D7CB446CC891C551176DF641F07C1F4E1E068B',
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Validator Hash is the hash of the validator in binary format. For this example the validator hash
is:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0xe31bf5a07ce7264cac6e9d4e3a071a4fcf92628b101c13f2e97cd7c34066b308
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>