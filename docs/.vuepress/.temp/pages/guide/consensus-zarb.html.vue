<template><h1 id="consensus-mechanism"><a class="header-anchor" href="#consensus-mechanism">#</a> Consensus mechanism</h1>
<h2 id="practical-byzantine-fault-tolerant"><a class="header-anchor" href="#practical-byzantine-fault-tolerant">#</a> Practical Byzantine Fault Tolerant</h2>
<p>Practical Byzantine Fault Tolerant, in short PBFT, “presents a new, practical algorithm for state
machine replication that tolerates Byzantine faults.&quot; [^first] The Zarb consensus algorithm is
highly inspired by Practical Byzantine Fault Tolerant (PBFT) algorithm.</p>
<h2 id="the-algorithm"><a class="header-anchor" href="#the-algorithm">#</a> The algorithm</h2>
<p>There are $R = 3f+1$ replicas. where $f$ is the maximum number of replicas that may be faulty or
byzantine. For example, if there is one faulty replica, the resiliency of the algorithm is optimal
if we have at least 3 non-faulty replicas. So the minimum number of replicas should be $3+1=4$.</p>
<p>In each round, one replica is the proposer and the others are validators. The normal case operation
of Zarb consensus algorithm includes these three steps: <strong>propose</strong>, <strong>prepare</strong> and <strong>precommit</strong></p>
<h3 id="propose-phase"><a class="header-anchor" href="#propose-phase">#</a> Propose phase</h3>
<p>A proposer ($P$) collects transactions and creates a proposal block. It signs and broadcasts a
proposal message with block piggybacked to all the validators.</p>
<p>Proposal message has this form:</p>
<p>$&lt;&lt;PROPOSAL,h,r,d&gt;_{\sigma p}, B&gt;$</p>
<p>where:</p>
<ul>
<li>$B$ is proposed block</li>
<li>$d$ is proposal's digest or hash</li>
<li>$h$ indicates the block height</li>
<li>$r$ is an assigned round number, which is zero for the first round</li>
</ul>
<h3 id="prepare-phase"><a class="header-anchor" href="#prepare-phase">#</a> Prepare phase</h3>
<p>If validator $i$ accepts the proposal, it enters <em>prepare</em> phase and signs and broadcasts <em>prepare</em>
message to all other validators. Otherwise, it does nothing.</p>
<p>Prepare message has this form:</p>
<p>$&lt;&lt;PREPARE,h,r,d,i&gt;_{\sigma i}&gt;$</p>
<p>If validator $i$ received $2f+1$ prepare messages from other validators (possibly including its
own), it is <strong>prepared</strong> and enters to precommit phase.</p>
<h3 id="precommit-phase"><a class="header-anchor" href="#precommit-phase">#</a> precommit phase</h3>
<p>In <em>precommit</em> phase, validator $i$ signs and broadcasts <em>precommit</em> message to the other
validators.</p>
<p>Precommit message has this form:</p>
<p>$&lt;&lt;PRECOMMIT,h,r,d,i&gt;_{\sigma i}&gt;$</p>
<p>Each validator executes and commits block $b$ after receiving $2f+1$ precommit messages (possibly
including its own) and becomes <strong>committed</strong>.</p>
<p>All the messages in the above steps are cryptographically signed and all replicas know the others’
public keys to verify signatures.</p>
<p>The picture below shows the operation of the algorithm in the normal case of no primary faults.
Replica 0 is the proposer, replica 3 is faulty.</p>
<p><img src="@source/assets/images/zarb-normal-execution.png" alt="Normal execution"></p>
<h2 id="block-announcement"><a class="header-anchor" href="#block-announcement">#</a> Block announcement</h2>
<p>Each validator that receives a valid proposal and with $2f+1$ precommit messages can make a
certificate and broadcasts <em>block_announce</em> messages with the block and certificate piggybacked to
the network.</p>
<p>$&lt;BLOCK-ANNOUNCE,h,r,B,C&gt;$</p>
<p>where:</p>
<ul>
<li>$C$ is the block certificate</li>
</ul>
<p>Validators can move to the next height and clear the message logs after receiving valid
<em>block_announce</em> message.</p>
<h2 id="change-proposer"><a class="header-anchor" href="#change-proposer">#</a> Change proposer</h2>
<p>The change-proposer protocol provides liveness by allowing the system to make progress when the
proposer fails. change-proposers are triggered by timeouts that prevent validators from waiting
indefinitely for the proposal to execute.</p>
<p>If the timer of validator expires in a round, the validator starts a change-proposer phase to move
the system to round $r+1$. It stops accepting messages (other than change-proposer and
block-announce messages) and broadcasts a change-proposer message to all validators.</p>
<p>The change-proposer message has this form:</p>
<p>$&lt;&lt;CHANGE-PROPOSER,h,r,i&gt;_{\sigma i}&gt;$</p>
<p>If the proposer for round $r+1$ receives $2f+1$ valid change-proposer messages for round $r$ from
other validators, it goes to next round and broadcasts proposal message.</p>
<p><img src="@source/assets/images/zarb-change-proposer.png" alt="Proposer change"></p>
<p>[^first]:
<a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/thesis-mcastro.pdf" target="_blank" rel="noopener noreferrer">Practical Byzantine Fault Tolerance<OutboundLink/></a></p>
</template>