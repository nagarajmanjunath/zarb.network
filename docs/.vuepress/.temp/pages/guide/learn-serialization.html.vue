<template><h1 id="data-serialization"><a class="header-anchor" href="#data-serialization">#</a> Data serialization</h1>
<h2 id="cbor-as-data-serialization"><a class="header-anchor" href="#cbor-as-data-serialization">#</a> CBOR as Data serialization</h2>
<p>We are using “Concise Binary Object Representation” or <a href="https://tools.ietf.org/html/rfc7049" target="_blank" rel="noopener noreferrer">CBOR<OutboundLink/></a>
for data serialization in Zarb. All data structures like <a href="./learn-block">blocks</a> or
<RouterLink to="/guide/transaction-format.html">transactions</RouterLink> or network messages are encoding using CBOR library. Key as
integer: Key is always an integer regardless of the variable name. Key IDs are fixed and can never
change.</p>
<p>An example of defining CBOR tags in golang:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Account <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   Address  Address <span class="token string">`cbor:"1,keyasint"`</span>
   Number   <span class="token builtin">int</span>     <span class="token string">`cbor:"2,keyasint"`</span>
   Sequence <span class="token builtin">int</span>     <span class="token string">`cbor:"3,keyasint"`</span>
   Balance  <span class="token builtin">int64</span>   <span class="token string">`cbor:"4,keyasint"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="cbor-me"><a class="header-anchor" href="#cbor-me">#</a> CBOR me!</h2>
<p><a href="http://cbor.me/?bytes=a40154436d9a52fd0e4c60ca8dd89f751058cff40edee002010300041a1dcd6500" target="_blank" rel="noopener noreferrer">http://cbor.me/<OutboundLink/></a>
is a cool tool for digesting the CBOR binary data. You can try to decode binary data there, as seen
in the following example:</p>
<hexdump bytes="a40154436d9a52fd0e4c60ca8dd89f751058cff40edee002010300041a1dcd6500" />
<p>As you may have guessed, this is an example of <RouterLink to="/guide/learn-account.html">account</RouterLink> data in Zarb
blockchain. The first field is a 20 bytes address, then an account number, sequence number and the
balance which is 500000000.</p>
</template>