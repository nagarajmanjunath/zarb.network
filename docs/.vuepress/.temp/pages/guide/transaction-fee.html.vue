<template><h1 id="transactions-fee"><a class="header-anchor" href="#transactions-fee">#</a> Transactions fee</h1>
<p>In Zarb, the transaction fee is calculated based on the transferee amount. The formula is quite
simple.</p>
<p>$$
fee = value \times percentage
\
\quad
\
fee =
\begin{cases}
fee &amp; \
fee_{min} &amp;  \quad if \quad fee &lt; fee_{min}
\end{cases}
$$</p>
<p>$percentage$ and $fee_{min}$ are part of <RouterLink to="/guide/learn-genesis.html">consensus parameters</RouterLink>.</p>
<p>For example, if Alice is going to send 20,000 to Bob, she should pay 20 coins as a fee for her
transaction.</p>
<p>Note: The fee for <RouterLink to="/guide/transaction-mintbase.html">Mintbase</RouterLink> and <RouterLink to="/guide/transaction-sortition.html">sortition</RouterLink>
transactions are zero.</p>
</template>