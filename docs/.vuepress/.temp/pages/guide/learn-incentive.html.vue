<template><h1 id="incentive"><a class="header-anchor" href="#incentive">#</a> Incentive</h1>
<h2 id="deflationary-economic-model"><a class="header-anchor" href="#deflationary-economic-model">#</a> Deflationary Economic Model</h2>
<p>Zarb is a deflationary blockchain, same as in the case of Bitcoin. The total number of coins in Zarb
is 21 million and it is set at genesis time. Zarb does not have any pre-minted token or privileged
account.</p>
<h2 id="flat-reward"><a class="header-anchor" href="#flat-reward">#</a> Flat Reward</h2>
<p>The incentive may help encourage nodes to stay honest[^first]. To have a better understanding about
the incentive model in Zarb, let's do a comparison with the Bitcoin incentive and reward
distribution model. We will use this comparison to show the difference. We love Bitcoin and Bitcoin
is the king.</p>
<table>
<thead>
<tr>
<th>Zarb</th>
<th>Bitcoin</th>
</tr>
</thead>
<tbody>
<tr>
<td>Consensus engine is Proof of Stake</td>
<td>Consensus engine is Proof of Work</td>
</tr>
<tr>
<td><em>Exactly</em> every 10 seconds one block is <em>minted</em></td>
<td>Around every 10 minutes one block is <em>mined</em></td>
</tr>
<tr>
<td>Total supply is 21,000,000 coin</td>
<td>Total supply is 21,000,000 coin</td>
</tr>
<tr>
<td>Always one coin per block</td>
<td>Initial block reward is 50 coin</td>
</tr>
<tr>
<td>No halving</td>
<td>Halving happens every 4 years</td>
</tr>
</tbody>
</table>
<p>The way Bitcoin distributes the tokens is a good solution for Proof-of-Work blockchain. Early
contributors in Bitcoin collect most of the tokens. This scheme in Proof-of-Stake blockchain will
damage the network by powering early contributors. Simply because the validators are weighed by
their stake. More stake, more power.</p>
<p><img src="@source/assets/images/bitcoin_reward.png" alt="Rewards in Bitcoin"></p>
<p><img src="@source/assets/images/zarb_reward.png" alt="Rewards in Zarb"></p>
<p>In Zarb, the token distribution is flat. It means the reward for each block is fixed and does not
change over time. There is no halving in Zarb. The flat reward is a part of the consensus parameters
and, for the main net, it sets one coin per block.</p>
<p><img src="@source/assets/images/bitcoin_token_distribution.png" alt="Token distribution in Bitcoin"></p>
<p><img src="@source/assets/images/zarb_token_distribution.png" alt="Token distribution in Zarb"></p>
<h2 id="treasury-account"><a class="header-anchor" href="#treasury-account">#</a> Treasury Account</h2>
<p>A Treasury account is a special account and is defined at the genesis time. The treasury account at
the genesis time holds the total coins (21 million).</p>
<h2 id="reward-transaction"><a class="header-anchor" href="#reward-transaction">#</a> Reward Transaction</h2>
<p>The first transaction in each block is the reward transaction.</p>
<p>[^first]: <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer">Bitcoin: A Peer-to-Peer Electronic Cash System<OutboundLink/></a></p>
</template>