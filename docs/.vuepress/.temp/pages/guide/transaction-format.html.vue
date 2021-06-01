<template><h1 id="transaction"><a class="header-anchor" href="#transaction">#</a> Transaction</h1>
<h2 id="what-is-transaction"><a class="header-anchor" href="#what-is-transaction">#</a> What Is Transaction?</h2>
<h2 id="transaction-format"><a class="header-anchor" href="#transaction-format">#</a> Transaction Format</h2>
<p>Transactions in Zarb are as seen below:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Transaction <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   Version   <span class="token builtin">int</span>              <span class="token string">`cbor:"1,keyasint"`</span>
   Stamp     Hash             <span class="token string">`cbor:"2,keyasint"`</span>
   Sequence  <span class="token builtin">int</span>              <span class="token string">`cbor:"3,keyasint"`</span>
   Fee       <span class="token builtin">int64</span>            <span class="token string">`cbor:"4,keyasint"`</span>
   Type      PayloadType      <span class="token string">`cbor:"5,keyasint"`</span>
   Payload   cbor<span class="token punctuation">.</span>RawMessage  <span class="token string">`cbor:"6,keyasint"`</span>
   Memo      <span class="token builtin">string</span>           <span class="token string">`cbor:"7,keyasint,omitempty"`</span>
   PublicKey <span class="token operator">*</span>PublicKey       <span class="token string">`cbor:"20,keyasint,omitempty"`</span>
   Signature <span class="token operator">*</span>Signature       <span class="token string">`cbor:"21,keyasint,omitempty"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Payload types are:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
   PayloadTypeSend      <span class="token operator">=</span> <span class="token function">PayloadType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
   PayloadTypeBond      <span class="token operator">=</span> <span class="token function">PayloadType</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
   PayloadTypeSortition <span class="token operator">=</span> <span class="token function">PayloadType</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Comment:</p>
<ul>
<li>The payload will be decoded based on payload type</li>
<li>Sign bytes are CBOR data of tx without public key and signature</li>
<li>Transaction ID is the hash of sign bytes</li>
</ul>
<h2 id="transaction-id"><a class="header-anchor" href="#transaction-id">#</a> Transaction ID</h2>
<p>Transaction ID is the hash of a transaction without a public key and signature.</p>
</template>