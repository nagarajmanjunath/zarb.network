<template><h1 id="mintbase-transaction"><a class="header-anchor" href="#mintbase-transaction">#</a> Mintbase Transaction</h1>
<p>Mintbase transaction is the first transaction in each block. The format of mintbase transaction is
the same as <RouterLink to="/guide/transaction-send.html">send transaction</RouterLink> but the fee is zero.</p>
<p>Sender address is the Treasury address and receiver address is defined by the validator. The amount
of mintbase transaction should be equal to the block rewards plus transaction fee. This amount will
go to the validator account as block reward.</p>
</template>