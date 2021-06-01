<template><h1 id="account"><a class="header-anchor" href="#account">#</a> Account</h1>
<h2 id="what-is-account"><a class="header-anchor" href="#what-is-account">#</a> What is Account?</h2>
<p>Account structure is used to hold the balance and sequence number of an account.</p>
<h2 id="account-structure"><a class="header-anchor" href="#account-structure">#</a> Account Structure</h2>
<p>The format of the account is as seen below:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Account <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   Address  Address <span class="token string">`cbor:"1,keyasint"`</span>
   Number   <span class="token builtin">int</span>     <span class="token string">`cbor:"2,keyasint"`</span>
   Sequence <span class="token builtin">int</span>     <span class="token string">`cbor:"3,keyasint"`</span>
   Balance  <span class="token builtin">int64</span>   <span class="token string">`cbor:"4,keyasint"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li><code>Address</code> is the address of account which is 20 bytes in length</li>
<li><code>Number</code> is a unique and sequential number for the account</li>
<li><code>Sequence</code> increasers anytime user send a transactions to prevent replaying the transaction</li>
<li><code>Balance</code> holds the balance of the account</li>
</ul>
<h2 id="example"><a class="header-anchor" href="#example">#</a> Example</h2>
<p>Hers is an example of a account data:</p>
<hexdump bytes="a40154436d9a52fd0e4c60ca8dd89f751058cff40edee002010300041a1dcd6500" />
<p>Which can be interpreted in
<a href="http://cbor.me/?bytes=a40154436d9a52fd0e4c60ca8dd89f751058cff40edee002010300041a1dcd6500" target="_blank" rel="noopener noreferrer">CBOR<OutboundLink/></a>
format:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  1: h'436D9A52FD0E4C60CA8DD89F751058CFF40EDEE0',
  2: 1,
  3: 0,
  4: 500000000
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Account Hash is the hash of the account in binary format. For this example the account hash is:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0x8b66cb22841238f424835e6e7313cff870dfe9b851e958eb5b3bf842acc20e1d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>