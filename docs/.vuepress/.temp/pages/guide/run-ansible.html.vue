<template><h1 id="deploy-using-ansible"><a class="header-anchor" href="#deploy-using-ansible">#</a> Deploy Using Ansible</h1>
<p>In this tutorial, you will learn how to deploy Zarb into your Virtual Private Server (VPS) without
compiling Zarb and using docker.</p>
<h2 id="🎮-what-is-ansible"><a class="header-anchor" href="#🎮-what-is-ansible">#</a> 🎮 What Is Ansible?</h2>
<p>::: quote</p>
<p>Ansible is all about automation, it requires instructions to accomplish each job. With everything
written down in simple script form, it's easy to do version control.</p>
<p>In Ansible, there are two computers: the <strong>control node</strong> and <strong>managed nodes</strong>. The control node is
your computer that runs Ansible. A managed node is any device being managed by the control node.</p>
<p>::: right</p>
<p>From <a href="https://opensource.com/resources/what-ansible" target="_blank" rel="noopener noreferrer">OpenSource.com<OutboundLink/></a></p>
<p>:::</p>
<p><img src="@source/assets/images/zarb-ansible.png" alt="Deploy Zarb using ansible"></p>
<div class="custom-container warning"><p class="custom-container-title">Ansible on Windows</p>
<p>Unfortunately Windows is
<a href="http://blog.rolpdog.com/2020/03/why-no-ansible-controller-for-windows.html" target="_blank" rel="noopener noreferrer">not supported<OutboundLink/></a> for the
control node. If you want to run an Ansible controller on Windows, use WSL.</p>
</div>
<h2 id="why-ansible"><a class="header-anchor" href="#why-ansible">#</a> Why Ansible?</h2>
<p>Deploying Zarb is not a one time task. You may update the node time to time or change the
configuration or even restart the node. Ansible helps you to automate the deployment process. If you
are going to run a full node in Zarb, we recommend to use Ansible or Terraform for deploying Zarb.</p>
<h2 id="requirements"><a class="header-anchor" href="#requirements">#</a> Requirements</h2>
<p>Using a linux cloud server is the best way to run a validator in Zarb network. You may get a virtual
private server from providers like Amazon, Microsoft, Linde, Alibaba, ArvanCloud, etc.</p>
<h3 id="recommended-hardware"><a class="header-anchor" href="#recommended-hardware">#</a> Recommended Hardware</h3>
<ul>
<li>Processor: Two dedicated core of CPU</li>
<li>Memory: Two gigabyte of RAM</li>
<li>Storage: 10 Gigabytes of free space disk</li>
<li>Network: A broadband Internet connection</li>
</ul>
<h2 id="🛡️-securing-the-server"><a class="header-anchor" href="#🛡️-securing-the-server">#</a> 🛡️ Securing the server</h2>
<p>The first step is securing your server. You may read this
<a href="https://www.linode.com/docs/guides/securing-your-server/" target="_blank" rel="noopener noreferrer">guid line<OutboundLink/></a> to learn how to setup your
sever more secure.</p>
<h2 id="step-by-step"><a class="header-anchor" href="#step-by-step">#</a> Step by Step</h2>
<p>Make sure you have installed
<a href="https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html" target="_blank" rel="noopener noreferrer">Ansible<OutboundLink/></a> in
your local machine and you have
<a href="https://www.google.com/search?q=access+to+your+server+through+SSH" target="_blank" rel="noopener noreferrer">access to your server through SSH<OutboundLink/></a>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>All the commands in this tutorial will be run in your local machine (probably your laptop) and you
don't need to ssh into your server.</p>
</div>
<p>Also if you have installed firewall in your server machine, make sure these port are open:</p>
<ul>
<li>8421 for p2p network</li>
<li>8080 for gRPC gateway</li>
<li>9090 for gRPC</li>
</ul>
<p>First you need to clone this repository:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone https://github.com/zarbchain/zarb-deploy-ansible-example
cd zarb-deploy-ansible-example
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Open <code>inventory.yml</code> and update <code>ansible_host</code> with your server remote ip address. something like:
<code>root@11.22.33.44</code>.</p>
<p>Run <code>ansible all -m gather_facts</code> to make sure ansible works fine.</p>
<p>Now, you need to generate two keys in your local machine. One for the validator and another for
collecting the rewards. To generate new keys you needs to execute the Zarb in your local machine.
You can either <a href="https://github.com/zarbchain/zarb-go/releases" target="_blank" rel="noopener noreferrer">download<OutboundLink/></a> the latest precompiled
binaries or <RouterLink to="/guide/run-compile.html">compile</RouterLink> it from the source code.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb key generate -p ~/zarb/keystore/validator_key.json
zarb key generate -p ~/zarb/keystore/mintbase_key.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>This command will generate new keys and save them at: <code>~/zarb/keystore/</code></p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Make sure you write down the Mnemonics of your keys. You can recover your keys from Mnemonics, if
you lose them.</p>
<p>You should know that you are responsible for the safety of your key.</p>
</div>
<p>To store and send validator private key to server, we use
<a href="https://docs.ansible.com/ansible/latest/user_guide/vault.html" target="_blank" rel="noopener noreferrer">Ansible vault<OutboundLink/></a>. Ansible Vault
encrypts variables so you can protect sensitive content such as secret keys.</p>
<p>Before creating Ansible Vault, you need to know the private key for the validator. Using
<code>zarb inspect</code> command you can see the private key.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zarb key inspect -e ~/zarb/keystore/validator_key.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Copy the private key. You will need to paste in inside Ansible Vault in the next step.</p>
<p>Now let's create a vault and add the validator private key inside the vault.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-vault create --vault-id vault@prompt tasks/vault.yml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Set a strong password for the Vault.</p>
<p>It opens up an editor. Once you're inside, treat this like a normal variable file: add ---, then a
new variable:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---
vault_validator_key: &lt;validator_private_key&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The colon must be followed by a space.</p>
</div>
<p>Ansible will encrypt the key and save inside <code>task/vault.yml</code>. You can open the <code>task/vault.yml</code> and
see the content. It should be encrypted.</p>
<p>One more step, open the config file and update <code>MintbaseAddress</code>. This can be different from the
validator address. You can also change other configs like <code>Moniker</code>, etc.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Address in Zarb starts with <code>zrb1...</code></p>
</div>
<h2 id="installing-ansible-plugins"><a class="header-anchor" href="#installing-ansible-plugins">#</a> Installing Ansible Plugins</h2>
<p>Before deploying Zarb, you have to install two plugins for Ansible.</p>
<p>First install the <code>geerlingguy.docker</code> plugin. This plugin will install docker for the server
machine.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-galaxy install geerlingguy.docker
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>And then install the <code>geerlingguy.ntp</code> plugin. This plugin will synchronizing your server Time using
Network Time Protocol (NTP).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-galaxy install geerlingguy.ntp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="deploy-zarb"><a class="header-anchor" href="#deploy-zarb">#</a> Deploy Zarb</h2>
<p>Now you can deploy Zarb by running deploy playbook:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-playbook --ask-become-pass --vault-id tasks/vault@prompt tasks/deploy.yml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Now you can check &quot;http://&lt;ip_address&gt;:8080&quot; to see if your node works fine and it's syncing with
the main network.</p>
<h2 id="update-zarb"><a class="header-anchor" href="#update-zarb">#</a> Update Zarb</h2>
<p>If you change the configuration or if you want to update the node version, run the deploy playbook
again. This will update the docker image and restart the node.</p>
<p>Welcome to Zarb network 🤝</p>
</template>