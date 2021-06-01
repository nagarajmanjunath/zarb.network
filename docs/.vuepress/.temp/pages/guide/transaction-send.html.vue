<template><h1 id="send-transaction"><a class="header-anchor" href="#send-transaction">#</a> Send Transaction</h1>
<p>Send transaction is used to send values between the accounts. If the receiver account does not
exist, it will be created.</p>
<p>Send transaction has a payload like below:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> SendPayload <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   Sender   Address <span class="token string">`cbor:"1,keyasint"`</span>
   Receiver Address <span class="token string">`cbor:"2,keyasint"`</span>
   Amount   <span class="token builtin">int64</span>   <span class="token string">`cbor:"3,keyasint"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>For example a raw send transaction will look like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a9010102582008f7d9c21fdaa4a4147e60a0f3933c850b0c0d9af6b2a308c0a7b5639a7e49d603186e040a050106a301548dfaf698d3889b13251529ff971277305fbf1f440254bdd1540a13d82c38e5b4dfbd7b5b2bcab5fb5f290318640767746573742074781458603846ed5d519e51f6dd63e552ac410c531d5436c726475f6f8fb51c1133b07e32bd3bc4c674359546a1145cb1935a3c0621fc5329c6039707445e472a73d857d8eff832b971838b21c53baa090d90b02f6d2c5a1e9358e46f4f4955ff737c08991558309e6b99c60cf5ccb551efc793ec2bedd66070bde8fbddeb8305c5f670a21532304775637f9e622d5212f34c9479d12d11
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Which can be interpreted in CBOR format:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{1: 1, 2: h'08F7D9C21FDAA4A4147E60A0F3933C850B0C0D9AF6B2A308C0A7B5639A7E49D6', 3: 110, 4: 10, 5: 1, 6: {1: h'8DFAF698D3889B13251529FF971277305FBF1F44', 2: h'BDD1540A13D82C38E5B4DFBD7B5B2BCAB5FB5F29', 3: 100}, 7: &quot;test tx&quot;, 20: h'3846ED5D519E51F6DD63E552AC410C531D5436C726475F6F8FB51C1133B07E32BD3BC4C674359546A1145CB1935A3C0621FC5329C6039707445E472A73D857D8EFF832B971838B21C53BAA090D90B02F6D2C5A1E9358E46F4F4955FF737C0899', 21: h'9E6B99C60CF5CCB551EFC793EC2BEDD66070BDE8FBDDEB8305C5F670A21532304775637F9E622D5212F34C9479D12D11'}

A9                                      # map(9)
   01                                   # unsigned(1)
   01                                   # unsigned(1)
   02                                   # unsigned(2)
   58 20                                # bytes(32)
      08F7D9C21FDAA4A4147E60A0F3933C850B0C0D9AF6B2A308C0A7B5639A7E49D6 #
   03                                   # unsigned(3)
   18 6E                                # unsigned(110)
   04                                   # unsigned(4)
   0A                                   # unsigned(10)
   05                                   # unsigned(5)
   01                                   # unsigned(1)
   06                                   # unsigned(6)
   A3                                   # map(3)
      01                                # unsigned(1)
      54                                # bytes(20)
         8DFAF698D3889B13251529FF971277305FBF1F44 #
      02                                # unsigned(2)
      54                                # bytes(20)
         BDD1540A13D82C38E5B4DFBD7B5B2BCAB5FB5F29 #
      03                                # unsigned(3)
      18 64                             # unsigned(100)
   07                                   # unsigned(7)
   67                                   # text(7)
      74657374207478                    # &quot;test tx&quot;
   14                                   # unsigned(20)
   58 60                                # bytes(96)
      3846ED5D519E51F6DD63E552AC410C531D5436C726475F6F8FB51C1133B07E32BD3BC4C674359546A1145CB1935A3C0621FC5329C6039707445E472A73D857D8EFF832B971838B21C53BAA090D90B02F6D2C5A1E9358E46F4F4955FF737C0899 #
   15                                   # unsigned(21)
   58 30                                # bytes(48)
      9E6B99C60CF5CCB551EFC793EC2BEDD66070BDE8FBDDEB8305C5F670A21532304775637F9E622D5212F34C9479D12D11 #
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>Transaction ID for the above transaction is:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ID: 38ea1ad335bbfd84641a34b6af3332810aef8e52da08897273f187fd6059c50a
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Comments:</p>
<ul>
<li>Fee is calculated based on the fee structure which we have defiend</li>
<li>Fee for mintbase transaction (subsidy tx) is zero</li>
<li>Amount for subsidy transaction is reward + accumulated fee</li>
<li>There is only one subsidy transaction per block</li>
<li>Subsidy transaction should be the first transaction</li>
<li>Each block should have one subsidy transaction</li>
<li>Receiver for subsidy transaction can be any address</li>
</ul>
</template>