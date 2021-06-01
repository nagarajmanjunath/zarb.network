<template><h1 id="using-docker"><a class="header-anchor" href="#using-docker">#</a> Using Docker</h1>
<h2 id="🐳-what-is-docker"><a class="header-anchor" href="#🐳-what-is-docker">#</a> 🐳 What is Docker</h2>
<p>::: quote</p>
<p>Docker is a tool designed to make it easier to create, deploy, and run applications by using
containers. Containers allow a developer to package up an application with all of the parts it
needs, such as libraries and other dependencies, and deploy it as one package. In a way, Docker is a
bit like a virtual machine, but it isn't!</p>
<p>::: right</p>
<p>From <a href="https://opensource.com/resources/what-docker" target="_blank" rel="noopener noreferrer">OpenSource.com<OutboundLink/></a></p>
<p>:::</p>
<h2 id="requirements"><a class="header-anchor" href="#requirements">#</a> Requirements</h2>
<p>The only thing you need is <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noopener noreferrer">installing docker<OutboundLink/></a> in your machine.
If you are using Windows please make sure you have installed WSL.</p>
<h2 id="docker-images"><a class="header-anchor" href="#docker-images">#</a> Docker Images</h2>
<p>The Zarb docker images are available at <a href="https://hub.docker.com/r/zarb/zarb" target="_blank" rel="noopener noreferrer">Docker Hub<OutboundLink/></a>.</p>
<p>You can pull the latest image with this command:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull zarb/zarb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="running-zarb-using-docker"><a class="header-anchor" href="#running-zarb-using-docker">#</a> Running Zarb Using Docker</h2>
<p>Let's run Zarb and join the TestNet. Firstly, we need to create a workspace for the TestNet.</p>
<p>:::: tabs type:border-card</p>
<p>::: tab 🪟 Window</p>
<p>Creating workspace at <code>c:\zarb\testnet</code>:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -it --rm -v c:\zarb\testnet:/zarb zarb/zarb init -w /zarb --testnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::: tab 🐧 Linux and 🍏 Mac</p>
<p>Creating workspace at <code>~/zarb/testnet</code>:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -it --rm -v ~/zarb/testnet:/zarb zarb/zarb init -w /zarb --testnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::::</p>
<p>Now you can join the TestNet.</p>
<p>:::: tabs type:border-card</p>
<p>::: tab 🪟 Window</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -it -v c:\zarb\testnet:/zarb -p 8080:8080 --name zarb-testnet zarb/zarb start -w /zarb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::: tab 🐧 Linux and 🍏 Mac</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -it -v ~/zarb/testnet:/zarb -p 8080:8080 --name zarb-testnet zarb/zarb start -w /zarb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::::</p>
<p>Now you can check &quot;<a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080<OutboundLink/></a>&quot; for the list of APIs.</p>
<p>You can also stop/start the docker container:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker stop zarb-testnet
docker start zarb-testnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="key-generation-and-inspection"><a class="header-anchor" href="#key-generation-and-inspection">#</a> Key Generation and Inspection</h2>
<p>You can use docker to generate new keys or inspect them:</p>
<p>:::: tabs type:border-card</p>
<p>::: tab 🪟 Window</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -i --rm -v c:\zarb\:/zarb zarb/zarb key generate -p /zarb/keystore/private_key_1.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::: tab 🐧 Linux and 🍏 Mac</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -i --rm -v ~/zarb/:/zarb zarb/zarb key generate -p /zarb/keystore/private_key_1.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::::</p>
<p>This command will generate a new key and save it at: <code>~/zarb/keystore/</code></p>
<p>You can also inspect a key:</p>
<p>:::: tabs type:border-card</p>
<p>::: tab 🪟 Window</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -i --rm -v c:\zarb\:/zarb zarb/zarb key inspect /zarb/keystore/private_key_1.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::: tab 🐧 Linux and 🍏 Mac</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -i --rm -v ~/zarb/:/zarb zarb/zarb key inspect /zarb/keystore/private_key_1.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::::</p>
<p>If you want to see the private key, run inspect command with -e flag. Run this flag with great
caution.</p>
<p>:::: tabs type:border-card</p>
<p>::: tab 🪟 Window</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -i --rm -v c:\zarb\:/zarb zarb/zarb key inspect -e /zarb/keystore/private_key_1.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::: tab 🐧 Linux and 🍏 Mac</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -i --rm -v ~/zarb/:/zarb zarb/zarb key inspect -e /zarb/keystore/private_key_1.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>:::</p>
<p>::::</p>
<p>Discover more 🧐</p>
</template>