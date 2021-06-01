<template><h1 id="compile-zarb"><a class="header-anchor" href="#compile-zarb">#</a> Compile Zarb</h1>
<h2 id="🏗️-compile-from-source-code"><a class="header-anchor" href="#🏗️-compile-from-source-code">#</a> 🏗️ Compile From Source Code</h2>
<p>Compiling Zarb is easy. The only thing you need is downloading and installing
<a href="https://golang.org/doc/install" target="_blank" rel="noopener noreferrer">go<OutboundLink/></a>.</p>
<p>After installing go, first clone the project:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone https://github.com/zarbchain/zarb-go.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Now you can build and test the project like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd zarb-go
make
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Run this command to make sure the Zarb is successfully compiled and installed in your machine:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="key-generation-and-inspection"><a class="header-anchor" href="#key-generation-and-inspection">#</a> Key Generation and Inspection</h2>
<p>You can generate new keys or inspect them:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb key generate -p ~/zarb/keystore/private_key_1.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can inspect the key and check the public key:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb key inspect ~/zarb/keystore/private_key_1.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If you want to see the private key, run inspect command with -e flag. Run this flag with great
caution.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb key inspect -e ~/zarb/keystore/private_key_1.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="joining-the-testnet"><a class="header-anchor" href="#joining-the-testnet">#</a> Joining the Testnet</h2>
<p>Let's join the testnet now. First you need to create a workspace for testnet. Like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb init -w ~/zarb/testnet --testnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Now you can join the testnet. Simply run this command:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb start -w ~/zarb/testnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Have fun 😉</p>
</template>