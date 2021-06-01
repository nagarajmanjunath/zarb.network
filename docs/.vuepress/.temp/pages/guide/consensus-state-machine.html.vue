<template><h1 id="consensus-as-state-machine"><a class="header-anchor" href="#consensus-as-state-machine">#</a> Consensus As State Machine</h1>
<h2 id="state-machine"><a class="header-anchor" href="#state-machine">#</a> State Machine</h2>
<p>Zarb consensus algorithm is a <a href="https://en.wikipedia.org/wiki/Finite-state_machine" target="_blank" rel="noopener noreferrer">state machine<OutboundLink/></a>
replication with <a href="https://en.wikipedia.org/wiki/Byzantine_fault" target="_blank" rel="noopener noreferrer">Byzantine fault<OutboundLink/></a> tolerance. The
consensus algorithm at any given time is in one the following states:</p>
<ul>
<li>New Height state</li>
<li>Propose state</li>
<li>Proposer change state</li>
<li>Prepare state</li>
<li>Precommit state</li>
<li>Commit state</li>
</ul>
<p><img src="@source/assets/images/zarb-consensus-states.png" alt="Zarb consensus states"></p>
<!-- TODO : explain more -->
</template>