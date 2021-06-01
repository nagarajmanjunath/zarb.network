<template><h1 id="sortition-algorithm"><a class="header-anchor" href="#sortition-algorithm">#</a> Sortition Algorithm</h1>
<h2 id="sortition-seed"><a class="header-anchor" href="#sortition-seed">#</a> Sortition Seed</h2>
<p>Sortition algorithm requires a seed that is random and publicly verifiable. In each height, the
proposer has to generate a new seed based on previous seed and the adversary is not able to
manipulate the seed generation.</p>
<p>To achieve this, we use BLS signature scheme to generate the seed. Since BLS signature is unique and
deterministic, the adversary cannot generate more than one valid signature per height.</p>
<p>During the block proposal stage, the proposer should take the previous seed and sign it with its
public key. The result is the seed for the next block.</p>
<p>$seed_{n+1}=generate(sk_{proposer}, hash(seed_{n}))$</p>
<p>Everyone knows the proposer's public key, therefore they can easily validate the seed for the next
block. If the seed is not valid, the proposed block will be rejected.</p>
<p>$verify(pub_{proposer}, hash(seed_{n}), seed_{n-1})==True$</p>
<ul>
<li>Note: Seed is 48 bytes.</li>
<li>Note: Seed for genesis block is 0.</li>
</ul>
<h2 id="verifiable-random-function"><a class="header-anchor" href="#verifiable-random-function">#</a> Verifiable Random Function</h2>
<p>Verifiable Random Function is a pseudo-random function that the owner of key $s$ at any point of $x$
can evaluate $v=f_s(x)$ and also provides $proof_x$ efficiently proving that v is correct. We call
such a mathematical object a verifiable(pseudo-)random function, VRF for brevity [^first].</p>
<p>In Zarb we are using BLS signature scheme as source of VRF. Since BLS signature are unique, in the
random oracle model, the hash of a BLS signature can be used as a secure VRF.</p>
<p>VRF takes the publicly-known seed for each block and generates an index and proof.</p>
<p>$&lt;index, proof&gt;=VRF(sk_{validator}, seed_{n})$</p>
<p>The result of VRF is deterministic and Zero Knowledge Provable.</p>
<h2 id="how-vrf-works"><a class="header-anchor" href="#how-vrf-works">#</a> How VRF Works?</h2>
<p>In each height, validators outside the committee run VRF to generate a verifiable random number
between 0 and 1. The seed for VRF is known to all validators and it is of part previous block
header. A validator based on its stake and its luck can enter the committee for the next height. The
formula is quite simple:</p>
<p>$$
R = index {\times} S_{p}
$$</p>
<p><em>which</em></p>
<ul>
<li>$index$ is VRF output between 0~1</li>
<li>$S_{p}$ is sum of the stake in validator pool</li>
</ul>
<p>Validator pool contains validators that are not in the committee. We can easily calculate the stake
of pool at any given height:</p>
<p>$S_{p} = S_{t} - S_{c}$</p>
<p><em>which</em></p>
<ul>
<li>$S_{t}$ is the total stake of the network</li>
<li>$S_{c}$ is the sum of the stake of committee members</li>
</ul>
<p>If the result $R$ is less than the validator's stake, then this validator is eligible to enter the
set for the next height. The validator needs to send a Sortition transaction with the $proof$ of
VRF. Other validators can easily verify the sortition:</p>
<p>$$
verify(pub_{validator}, proof, seed_n) &lt; S_v
$$</p>
<p><em>which</em></p>
<ul>
<li>$pub_{validator}$ os the public key of the validator</li>
<li>$S_v$ is the stake of validator at height $n$</li>
</ul>
<p>There is no need to send $index$ alongside $proof$ because the result should be less than
validator's stake and validator's stake is known at height $n$ for all the validators in the
network.</p>
<p>If a validator can generate a valid sortition proof, it can broadcast a
<RouterLink to="/guide/transaction-sortition.html">sortition transaction</RouterLink>. Sortition transactions are valid for 7 blocks.
When a valid sortition transaction is committed into a block, the new validator from the pool can
enter the committee and the oldest validator in the committee will leave the committee to make it
balanced.</p>
<p>[^first]:
<a href="https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Pseudo%20Randomness/Verifiable_Random_Functions.pdf" target="_blank" rel="noopener noreferrer">Verifiable Random Function<OutboundLink/></a></p>
</template>