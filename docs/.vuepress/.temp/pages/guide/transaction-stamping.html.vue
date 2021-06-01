<template><h1 id="stamping-transactions"><a class="header-anchor" href="#stamping-transactions">#</a> Stamping Transactions</h1>
<h2 id="what-is-a-stamping-transaction"><a class="header-anchor" href="#what-is-a-stamping-transaction">#</a> What Is A Stamping Transaction?</h2>
<p><em>Stamping a transaction</em> simply means putting the previous block hash into the header of the
transaction. A stamped transaction, unlike normal transactions, has a lifetime (TTL) and it is only
valid for a certain time. If $TTL = N$, the stamped transaction after NN blocks will be invalid.</p>
<p>By stamping transactions, we can decouple transactions from the block. There is no need to save the
whole transaction inside a block. Keeping the transaction hash is fair enough.</p>
<p><img src="@source/assets/images/stamped_tx.png" alt="Stamping transaction"></p>
<h3 id="how-to-validate-a-stamped-transaction"><a class="header-anchor" href="#how-to-validate-a-stamped-transaction">#</a> How to Validate a Stamped Transaction</h3>
<p>A stamped transaction can easily be verified. The first step is finding the block with the
corresponding stamp (block hash). If it doesn’t exist, it means the transaction is not valid. If the
block is found, we need to iterate over the next <code>N</code> blocks to find the transaction hash. If the
transaction hash is found, it is valid. Otherwise, the transaction is invalid.</p>
<p>Tx is valid if:</p>
<p>$hash(tx) ∊ Block[S:S+N]$</p>
<p>where: $Block[S] = tx.stamp$</p>
<h2 id="consequences"><a class="header-anchor" href="#consequences">#</a> Consequences</h2>
<ul>
<li>
<p><strong>Reducing the size of mempool</strong></p>
<p>Each stamped transaction has a lifetime and the transaction will be invalid after a certain time.
It can help manage the mempool better and avoid keeping transactions with low fees forever.</p>
</li>
<li>
<p><strong>Preventing any possible forks</strong></p>
<p>Stamped transactions are loyal to the main fork. Any possible fork needs to re-stamp the
transactions and therefore re-sign them, which is not feasible. This feature especially can
mitigate <em>Nothing at stake</em> and <em>long range</em> attacks for Proof-of-Stake blockchains. There is no
solution to overcome long range attacks in PoS blockchain. Stamping transactions can mitigate this
issue by binding transactions to the main fork.</p>
</li>
</ul>
<h2 id="references"><a class="header-anchor" href="#references">#</a> References</h2>
<ul>
<li><a href="https://tradeblock.com/blog/analysis-of-bitcoin-transaction-size-trends" target="_blank" rel="noopener noreferrer">Analysis of Bitcoin Transaction Size Trends<OutboundLink/></a></li>
<li><a href="https://blog.ethereum.org/2015/01/10/light-clients-proof-stake/" target="_blank" rel="noopener noreferrer">Light Clients and Proof of Stake<OutboundLink/></a></li>
<li><a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8653269" target="_blank" rel="noopener noreferrer">A Survey on Long-Range Attacks for Proof of Stake Protocols<OutboundLink/></a></li>
</ul>
</template>