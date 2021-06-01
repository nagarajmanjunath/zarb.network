<template><h1 id="block-certificate"><a class="header-anchor" href="#block-certificate">#</a> Block Certificate</h1>
<h2 id="what-is-certificate"><a class="header-anchor" href="#what-is-certificate">#</a> What Is Certificate?</h2>
<p>Block certificate holds the proof of commitment for the block.</p>
<h2 id="certificate-structure"><a class="header-anchor" href="#certificate-structure">#</a> Certificate Structure</h2>
<p>Each block certificate contains following information:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Certificate <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   BlockHash  Hash      <span class="token string">`cbor:"1,keyasint"`</span>
   Round      <span class="token builtin">int</span>       <span class="token string">`cbor:"2,keyasint"`</span>
   Committers <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>     <span class="token string">`cbor:"3,keyasint"`</span>
   Absentees  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>     <span class="token string">`cbor:"4,keyasint"`</span>
   Signature  Signature <span class="token string">`cbor:"5,keyasint"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="certificate-verification"><a class="header-anchor" href="#certificate-verification">#</a> Certificate Verification</h2>
<p>For each round validators cast their votes by signing <code>BlockHash | Round</code>. A valid certificate
should have signature from validators with more than 2/3 of the stake for that round. If enough
votes are collected, the signatures will be aggregated into one single signature. To verify the
aggregated signature, from <code>Committers</code> and <code>Absentees</code> the aggregated public key can be formed and
therefore Signature can be verified.</p>
<h2 id="example"><a class="header-anchor" href="#example">#</a> Example</h2>
<p>Hers is an example of a certificate data.</p>
<hexdump bytes="a50158200ca12eee3c791ba4b78439448d59a4b817d1eaec10aa090ea40f9af3d43e6e2b020003840001020304800558307b4ddaeb4502b544790f73bd4d3de51e7094192cb356bb3f6ac898f46ab24779497cd3226a6025f81c5b56474a5cbd84" />
<p>Which can be interpreted in
<a href="http://cbor.me/?bytes=a50158200ca12eee3c791ba4b78439448d59a4b817d1eaec10aa090ea40f9af3d43e6e2b020003840001020304800558307b4ddaeb4502b544790f73bd4d3de51e7094192cb356bb3f6ac898f46ab24779497cd3226a6025f81c5b56474a5cbd84" target="_blank" rel="noopener noreferrer">CBOR<OutboundLink/></a>
format:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  1: h'0CA12EEE3C791BA4B78439448D59A4B817D1EAEC10AA090EA40F9AF3D43E6E2B',
  2: 0,
  3: [0, 1, 2, 3],
  4: [],
  5: h'7B4DDAEB4502B544790F73BD4D3DE51E7094192CB356BB3F6AC898F46AB24779497CD3226A6025F81C5B56474A5CBD84'
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Certificate hash is the hash of the certificate in binary format. For this example, the certificate
hash is:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0x74fabc0be964b5373800026923b1bb66bf4042d6856396511aebe083c773ee9a
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>