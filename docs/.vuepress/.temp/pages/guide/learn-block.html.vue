<template><h1 id="block"><a class="header-anchor" href="#block">#</a> Block</h1>
<h2 id="what-is-block"><a class="header-anchor" href="#what-is-block">#</a> What Is Block?</h2>
<p>Blocks contain the header and transactions in the form of their IDs. Each block in Zarb has a unique
<RouterLink to="/guide/learn-certificate.html">certificate</RouterLink> that is signed by committee members. A block will be committed
if it has a valid certificate. Blocks are immutable and any changes in the block will invalidate the
certificate.</p>
<h2 id="block-header"><a class="header-anchor" href="#block-header">#</a> Block Header</h2>
<p>The header includes the main information about the block.</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Header <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   Version             <span class="token builtin">int</span>     <span class="token string">`cbor:"1,keyasint"`</span>
   UnixTime            <span class="token builtin">int64</span>   <span class="token string">`cbor:"2,keyasint"`</span>
   LastBlockHash       Hash    <span class="token string">`cbor:"3,keyasint"`</span>
   StateHash           Hash    <span class="token string">`cbor:"4,keyasint"`</span>
   TxIDsHash           Hash    <span class="token string">`cbor:"5,keyasint"`</span>
   LastCertificateHash Hash    <span class="token string">`cbor:"6,keyasint"`</span>
   SortitionSeed       Seed    <span class="token string">`cbor:"7,keyasint"`</span>
   ProposerAddress     Address <span class="token string">`cbor:"8,keyasint"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li><code>Version</code> starts from 1 for the mainnet and starts from 1001 for the testnet</li>
<li><code>UnixTime</code> is the time of block in unix format (seconds from Unix Epoch)</li>
<li><code>LastBlockHash</code> is the hash of the previous block</li>
<li><code>StateHash</code> is the <RouterLink to="/guide/learn-state-hash.html">state merkle root</RouterLink> at the current height</li>
<li><code>TxIDsHash</code> is the merkle root of the transaction IDs included in this block</li>
<li><code>LastCertificateHash</code> is the hash of last block certificate. This ensures that the previous block
has a valid certificate</li>
<li><code>SortitionSeed</code> is the seed for the sortition algorithm and must be signed by the proposer</li>
<li><code>ProposerAddress</code> is the address of block proposer</li>
</ul>
<h2 id="transaction-ids"><a class="header-anchor" href="#transaction-ids">#</a> Transaction IDs</h2>
<p>TxIDs contain the list of transaction IDs in the block.</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> TxIDs <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   IDs <span class="token punctuation">[</span><span class="token punctuation">]</span>tx<span class="token punctuation">.</span>ID <span class="token string">`cbor:"1,keyasint"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Transactions in Zarb are <RouterLink to="/guide/transaction-stamping.html">stamped</RouterLink>, therefore, there is no need to store
the transaction body inside the block. Saving ID is fair enough.</p>
<h2 id="example"><a class="header-anchor" href="#example">#</a> Example</h2>
<p>Hers is an example of a block header data:</p>
<hexdump bytes="a80101021a606cf6c8035820b7791c69197a15360d20aba0c822dc2b83eea70026e330a1844a32020a5dc303045820ddc8a4b3bf95e47e6855dcd76d6790e32903b89ce1fbeaf8f1fcbd5189bcd5da055820e85544e771d1ae6057e999a202725e1151a15d81fe9681075bb911be7b246fcd065820fa527f78b78825dca6b9772786d886966adfde66c84edb67a34fcfae291d0a49075830a837496eec9429d099d0759302300347cd2e0c8409fc5b01381599f94bed9337b8170e6b1e0f6acd5acbbf0c85b71f040854436d9a52fd0e4c60ca8dd89f751058cff40edee0" />
<p>Which can be interpreted in
<a href="http://cbor.me/?bytes=a80101021a606cf6c8035820b7791c69197a15360d20aba0c822dc2b83eea70026e330a1844a32020a5dc303045820ddc8a4b3bf95e47e6855dcd76d6790e32903b89ce1fbeaf8f1fcbd5189bcd5da055820e85544e771d1ae6057e999a202725e1151a15d81fe9681075bb911be7b246fcd065820fa527f78b78825dca6b9772786d886966adfde66c84edb67a34fcfae291d0a49075830a837496eec9429d099d0759302300347cd2e0c8409fc5b01381599f94bed9337b8170e6b1e0f6acd5acbbf0c85b71f040854436d9a52fd0e4c60ca8dd89f751058cff40edee0" target="_blank" rel="noopener noreferrer">CBOR<OutboundLink/></a>
format:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  1: 1,
  2: 1617753800,
  3: h'B7791C69197A15360D20ABA0C822DC2B83EEA70026E330A1844A32020A5DC303',
  4: h'DDC8A4B3BF95E47E6855DCD76D6790E32903B89CE1FBEAF8F1FCBD5189BCD5DA',
  5: h'E85544E771D1AE6057E999A202725E1151A15D81FE9681075BB911BE7B246FCD',
  6: h'FA527F78B78825DCA6B9772786D886966ADFDE66C84EDB67A34FCFAE291D0A49',
  7: h'A837496EEC9429D099D0759302300347CD2E0C8409FC5B01381599F94BED9337B8170E6B1E0F6ACD5ACBBF0C85B71F04',
  8: h'436D9A52FD0E4C60CA8DD89F751058CFF40EDEE0'
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Block hash is the hash of the header in binary format. For this example, the block hash is:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0x0ca12eee3c791ba4b78439448d59a4b817d1eaec10aa090ea40f9af3d43e6e2b
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>