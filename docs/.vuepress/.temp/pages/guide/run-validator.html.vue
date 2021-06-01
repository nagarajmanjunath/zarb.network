<template><h1 id="become-a-validator"><a class="header-anchor" href="#become-a-validator">#</a> Become A Validator</h1>
<p>Now, you are ready to create a full node and become a validator in Zarb network. For running Zarb
you can either <a href="https://github.com/zarbchain/zarb-go/releases" target="_blank" rel="noopener noreferrer">download<OutboundLink/></a> the latest precompiled
binaries or <RouterLink to="/guide/run-compile.html">compile</RouterLink> it from the source code.</p>
<h2 id="initializing-working-directory"><a class="header-anchor" href="#initializing-working-directory">#</a> Initializing Working Directory</h2>
<p>Now, you need to create a working directory for your validator. A working directory is a place where
you save blockchain data, config and key files.</p>
<p>:::: tabs type:border-card</p>
<p>::: tab 🪟 Window</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb init -w c:\zarb\mainnet --mainnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This command creates a working directory for the mainnet at <code>c:\zarb\mainnet</code>.</p>
<p>:::</p>
<p>::: tab 🐧 Linux and 🍏 Mac</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb init -w ~/zarb/mainnet --mainnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This command creates a working working directory for the mainnet at <code>~/zarb/mainnet</code>.</p>
<p>:::</p>
<p>::::</p>
<p>Working directory contains:</p>
<ul>
<li>Validator private key</li>
<li>Genesis file</li>
<li>Config file</li>
</ul>
<p>Feel free to take a look at these files. The validator private key is automatically generated for
you. If you have another key for the validator you can replace it. To inspect the validator private
key, run this command:</p>
<p>:::: tabs type:border-card</p>
<p>::: tab 🪟 Window</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb key inspect c:\zarb\mainnet\validator_key.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::: tab 🐧 Linux and 🍏 Mac</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb key inspect ~/zarb/mainnet/validator_key.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::::</p>
<p>This command shows the address and public key of your validator. You are responsible for the safety
of your validator key.</p>
<h2 id="update-mintbase-address"><a class="header-anchor" href="#update-mintbase-address">#</a> Update Mintbase Address</h2>
<p>Mintbase account is the account where you receive your reward when you propose a new block. If you
do not define a Mintbase address, the rewards will go to the same account with your validator key.
We highly recommend you define a separate address to collect your reward.</p>
<p>You can generate new key like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb key generate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Then update <code>MintbaseAddress</code> in config file and set the address. Also it's good to give a name or
moniker to your node by updating the <code>Moniker</code> in config file.</p>
<h2 id="syncing-blockchain"><a class="header-anchor" href="#syncing-blockchain">#</a> Syncing Blockchain</h2>
<p>Now you can start the node and sync with the mainnet. This may take several hours:</p>
<p>:::: tabs type:border-card</p>
<p>::: tab 🪟 Window</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb start -w c:\zarb\mainnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::: tab 🐧 Linux and 🍏 Mac</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb start -w ~/zarb/mainnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::::</p>
<h2 id="enter-committee"><a class="header-anchor" href="#enter-committee">#</a> Enter Committee</h2>
<p>After syncing with the main net, you need to send a <RouterLink to="/guide/transaction-bond.html">bond transaction</RouterLink> to
bond some of your tokens as stake and enter the validator pool. If you don't have any token yet,
don't worry. There is a gentlemen agreement between validators in the network to let new validators
join the validator pool. Just post your validator's public key in Zarb groups like
<a href="https://discord.gg/zPqWqV85ch" target="_blank" rel="noopener noreferrer">Discord<OutboundLink/></a>, <a href="https://www.reddit.com/r/zarb" target="_blank" rel="noopener noreferrer">Reddit<OutboundLink/></a> or
<a href="https://t.me/zarbblockchain" target="_blank" rel="noopener noreferrer">Telegram<OutboundLink/></a>.</p>
<p>After you join the validator pool, the <RouterLink to="/guide/consensus-sortition.html">sortition</RouterLink> algorithm starts
working and after a while you will enter to <a href="./learn-committee">committee</a>.</p>
<p>When you enter the committee, you will have the chance to propose and validate the blocks. Any time
you propose a new block, you will get the <RouterLink to="/guide/learn-incentive.html">rewards</RouterLink>.</p>
<h2 id="find-your-way"><a class="header-anchor" href="#find-your-way">#</a> Find your way</h2>
<p>In this document we tried to explain a simple way to run a validator in Zarb network. you may do it
in a different way. Find your way of deployment. But never forget that security first!</p>
<p>Good luck 🍀</p>
</template>