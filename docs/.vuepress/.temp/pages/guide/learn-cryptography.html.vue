<template><h1 id="cryptography-and-address-format"><a class="header-anchor" href="#cryptography-and-address-format">#</a> Cryptography and Address format</h1>
<h2 id="hashing-algorithm"><a class="header-anchor" href="#hashing-algorithm">#</a> Hashing Algorithm</h2>
<p>The hashing algorithm used in Zarb is Blake2b. <a href="https://www.blake2.net/" target="_blank" rel="noopener noreferrer">Blake2<OutboundLink/></a> is considered to be
a very fast cryptographic hash function. Example:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Message: &quot;zarb&quot;
Hash256: 12b38977f2d67f06f0c0cd54aaf7324cf4fee184398ea33d295e8d1543c2ee1a
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="cryptographic-signature-scheme"><a class="header-anchor" href="#cryptographic-signature-scheme">#</a> Cryptographic Signature Scheme</h2>
<p>Zarb is using <a href="https://en.wikipedia.org/wiki/BLS_digital_signature" target="_blank" rel="noopener noreferrer">BLS<OutboundLink/></a> (Boneh–Lynn–Shacham)
threshold signature for cryptographic signing and verification. In Zarb blockchain, we are using
<a href="https://github.com/herumi/bls" target="_blank" rel="noopener noreferrer">Herumi<OutboundLink/></a>, an implementation of BLS threshold signature.</p>
<h3 id="example"><a class="header-anchor" href="#example">#</a> Example</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Private Key: (32 bytes)
d0c6a560de2e60b6ac55386defefdf93b0c907290c2ad1b4dbd3338186bfdc68

Public key: (96 bytes)
37bfe636693eac0b674ae6603442192ef0432ad84384f0cec8bea5f63c9f45c29bf085b8b9b7f069ae873ccefe61a50a59ad3fefd729af5d63e9cb2325a8f064ab2514b3f846dbfded53234800603a9e752422ad48b99f835bcd95df945aac93

Signature: (48 bytes)
76da6c523c4abac463aad1ead5b7a042f143e354c346f6921a4975cc16959559e9b738fa197ab4df123f580a553b1596

Message:
&quot;zarb&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="signature-aggregation"><a class="header-anchor" href="#signature-aggregation">#</a> Signature aggregation</h3>
<p>One of the advantages of BLS signatures is signature aggregation. BLS individual signatures can be
combined into a single aggregate signature so that the overall size does not grow beyond 1
signature.</p>
<h2 id="address-conversion"><a class="header-anchor" href="#address-conversion">#</a> Address conversion</h2>
<p>Address in Zarb is 160-bit hash of the public key hash.(RIPEMD-160 after Blake2b):</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>AddressBytes <span class="token operator">=</span> <span class="token function">Hash160</span><span class="token punctuation">(</span><span class="token function">Hash256</span><span class="token punctuation">(</span>PublicKey<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The result will convert from a byte string into a bech32 [^first] string.</p>
<h3 id="example-1"><a class="header-anchor" href="#example-1">#</a> Example:</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Public key (96 bytes):
37bfe636693eac0b674ae6603442192ef0432ad84384f0cec8bea5f63c9f45c29bf085b8b9b7f069ae873ccefe61a50a59ad3fefd729af5d63e9cb2325a8f064ab2514b3f846dbfded53234800603a9e752422ad48b99f835bcd95df945aac93

Address: (20 bytes)
f6edd7e1d53d730a3ae0d44e6b6ce5dc102c0b63

Address in bech32:
zrb17mka0cw484es5whq638xkm89msgzczmrwy64dy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="treasury-address"><a class="header-anchor" href="#treasury-address">#</a> Treasury address</h3>
<p>Treasury address in Zarb is defined as seen below:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>TreasuryAddress: 0000000000000000000000000000000000000000
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>[^first]: <a href="https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki" target="_blank" rel="noopener noreferrer">Base32 address format<OutboundLink/></a></p>
</template>