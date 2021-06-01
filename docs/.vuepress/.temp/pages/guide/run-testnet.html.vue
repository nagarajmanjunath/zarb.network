<template><h1 id="story-of-testnets"><a class="header-anchor" href="#story-of-testnets">#</a> Story of TestNets</h1>
<p>Here is brief history of Zarb testnets:</p>
<h2 id="testnet-version-1"><a class="header-anchor" href="#testnet-version-1">#</a> TestNet Version 1:</h2>
<p>The first testNet was launched with only 4 validators. The goal was testing the stability of the
consensus engine</p>
<h2 id="testnet-version-2"><a class="header-anchor" href="#testnet-version-2">#</a> TestNet Version 2:</h2>
<p>The second testNet wasa launched with 7 validators and the <RouterLink to="/guide/learn-committee.html">committee</RouterLink> size
set to 4. The goal was testing the sortition algorithm, networking and state modules. The Size of
blockchain was about <strong>60 MegaBytes</strong> after 100,000 blocks.</p>
<h2 id="testnet-version-3"><a class="header-anchor" href="#testnet-version-3">#</a> TestNet Version 3:</h2>
<p>The third testNet was launched with 11 nodes in different time zones. Some of the nodes are
configured to be faulty and send malicious messages. The goal was to test the liveness and stability
of the network in faulty situations. The TestNet could successfully commit 130 thousands blocks.</p>
<p><img src="@source/assets/images/testnet_v3_topology.png" alt="TestNet v3, Network topology"></p>
<h2 id="testnet-version-4"><a class="header-anchor" href="#testnet-version-4">#</a> TestNet Version 4:</h2>
<p>TestNet version 4 was launched with 15 validators and the size of committee set to 7. The goal was
testing the sortition algorithm and reward distribution in the real situations. In this table you
can see the statistics after 100,000 blocks:</p>
<table>
<thead>
<tr>
<th>Validator</th>
<th>Stake</th>
<th>Stake %</th>
<th>Reward</th>
<th>Reward %</th>
</tr>
</thead>
<tbody>
<tr>
<td>Validator 1</td>
<td>1,000</td>
<td>1.25</td>
<td>3,544</td>
<td>3.54</td>
</tr>
<tr>
<td>Validator 2</td>
<td>1,000</td>
<td>1.25</td>
<td>3,558</td>
<td>3.56</td>
</tr>
<tr>
<td>Validator 3</td>
<td>2,000</td>
<td>2.50</td>
<td>5,284</td>
<td>5.29</td>
</tr>
<tr>
<td>Validator 4</td>
<td>2,000</td>
<td>2.50</td>
<td>5,220</td>
<td>5.22</td>
</tr>
<tr>
<td>Validator 5</td>
<td>3,000</td>
<td>3.75</td>
<td>6,290</td>
<td>6.29</td>
</tr>
<tr>
<td>Validator 6</td>
<td>3,000</td>
<td>3.75</td>
<td>6,418</td>
<td>6.41</td>
</tr>
<tr>
<td>Validator 7</td>
<td>4,000</td>
<td>5.00</td>
<td>7,024</td>
<td>7.02</td>
</tr>
<tr>
<td>Validator 8</td>
<td>4,000</td>
<td>5.00</td>
<td>7,104</td>
<td>7.10</td>
</tr>
<tr>
<td>Validator 9</td>
<td>6,000</td>
<td>7.50</td>
<td>7,795</td>
<td>7.79</td>
</tr>
<tr>
<td>Validator 10</td>
<td>6,000</td>
<td>7.50</td>
<td>7,890</td>
<td>7.89</td>
</tr>
<tr>
<td>Validator 11</td>
<td>8,000</td>
<td>10.00</td>
<td>8,130</td>
<td>8.13</td>
</tr>
<tr>
<td>Validator 12</td>
<td>8,000</td>
<td>10.00</td>
<td>7,978</td>
<td>7.98</td>
</tr>
<tr>
<td>Validator 13</td>
<td>10,000</td>
<td>12.50</td>
<td>8,080</td>
<td>8.08</td>
</tr>
<tr>
<td>Validator 14</td>
<td>10,000</td>
<td>12.50</td>
<td>7,970</td>
<td>7.97</td>
</tr>
<tr>
<td>Validator 15</td>
<td>12,000</td>
<td>15.00</td>
<td>7,715</td>
<td>7.71</td>
</tr>
<tr>
<td>Total</td>
<td>80000</td>
<td>100.00</td>
<td>100000</td>
<td>100.00</td>
</tr>
</tbody>
</table>
<p><img src="@source/assets/images/testnet_v4_reward_vs_stake.png" alt="TestNet v4, Reward vs stake"></p>
<p>As you can see, the reward distribution looks fair. The validator 1 with only 1.25% stake could get
3.54% of the total rewards. This helps the new validators collects coins even they have less bonded
stake. in the other hand validator with more stake collect more rewards.</p>
<p>The mainnet also should follow the same pattern. Hopefully ✌️</p>
</template>