<template><h1 id="sortition-transaction"><a class="header-anchor" href="#sortition-transaction">#</a> Sortition Transaction</h1>
<p>Sortition transaction is used to enter a validator in the set for the next run. Sortition
transactions are valid for 21 heights.</p>
<h1 id="payload-format"><a class="header-anchor" href="#payload-format">#</a> Payload format</h1>
<p>The sortition transaction has a payload as seen below:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> SortitionPayload <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Address Address <span class="token string">`cbor:"1,keyasint"`</span>
	Proof   Proof  <span class="token string">`cbor:"2,keyasint"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li><code>Address</code> is the address validator that evaluated the sortition</li>
<li><code>Proof</code> is the proof of evaluating sortition and it is 48 bytes length</li>
</ul>
<p>Validator doesn't need to pay fee for sortition transaction and fee should set to zero.</p>
<h2 id="example"><a class="header-anchor" href="#example">#</a> Example</h2>
<p>Hers is an example a raw sortition transaction:</p>
<hexdump bytes="a80101025820b06c40d00b1c51bb4a6855ebd9eb7c00447f2aa1918641c6997d31e67183111e03010400050306a20154162445cff4170ef128c57050be787cf20b8000370258302757d4c1083a302c25f28cbd410ed9468c0012f9dca1df6fb7d7fa4e168c31305b097d0e69768793041306e5e6b5060a145860aa6ffe4fbbd36db8a35db1bfdcdb5cdb043bf20ce4d624fff0aec65bf1216510837c4bc68e812b3d26ed6da921da20105d91ceeb065b7513353520d3a32c51cd16a299da1eca8504d5f82285850c7242832a5b933e8b3fc1b19c352134903919155830ca66e3451679531e2e3feffb9b8fa4f5e66b89d25be60e2862f58d3ac4166809f09990715fe2192b55141bf174f8a004" />
<p>Which can be interpreted in
<a href="http://cbor.me/?bytes=a80101025820b06c40d00b1c51bb4a6855ebd9eb7c00447f2aa1918641c6997d31e67183111e03010400050306a20154162445cff4170ef128c57050be787cf20b8000370258302757d4c1083a302c25f28cbd410ed9468c0012f9dca1df6fb7d7fa4e168c31305b097d0e69768793041306e5e6b5060a145860aa6ffe4fbbd36db8a35db1bfdcdb5cdb043bf20ce4d624fff0aec65bf1216510837c4bc68e812b3d26ed6da921da20105d91ceeb065b7513353520d3a32c51cd16a299da1eca8504d5f82285850c7242832a5b933e8b3fc1b19c352134903919155830ca66e3451679531e2e3feffb9b8fa4f5e66b89d25be60e2862f58d3ac4166809f09990715fe2192b55141bf174f8a004" target="_blank" rel="noopener noreferrer">CBOR<OutboundLink/></a>
format:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
	1: 1,
	2: h'B06C40D00B1C51BB4A6855EBD9EB7C00447F2AA1918641C6997D31E67183111E',
	3: 1,
	4: 0,
	5: 3,
	6: {
		1: h'162445CFF4170EF128C57050BE787CF20B800037',
		2: h'2757D4C1083A302C25F28CBD410ED9468C0012F9DCA1DF6FB7D7FA4E168C31305B097D0E69768793041306E5E6B5060A'
	},
	20: h'AA6FFE4FBBD36DB8A35DB1BFDCDB5CDB043BF20CE4D624FFF0AEC65BF1216510837C4BC68E812B3D26ED6DA921DA20105D91CEEB065B7513353520D3A32C51CD16A299DA1ECA8504D5F82285850C7242832A5B933E8B3FC1B19C352134903919',
	21: h'CA66E3451679531E2E3FEFFB9B8FA4F5E66B89D25BE60E2862F58D3AC4166809F09990715FE2192B55141BF174F8A004'
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Transaction ID for the above transaction is:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ID: c244a2969ed39ae6b0efff7f93ee168505436f65eadc223feb1aaf1ad81024fa
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>