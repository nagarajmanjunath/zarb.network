<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <video class="shape shape-style-1  shape-skew"  src="video/Tunnel.mp4" autoPlay loop muted>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </video>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6" style="text-align:center">
                                <img src="img/zarb/zarblogo.png" style="height:150px;" class="img-fluid floating">
                                <h1 class="display-3" style="color:gold;font-size: 5rem;font-weight: bolder;">Zarb
                                    <!-- <span style="font-family:italic">of the people, by the people,
                                            for the people</span> -->
                                </h1>
                                <!-- <p class="lead  text-white">Zarb is a Proof-of-Stake blockchain which is not holding any ICOs and has no pre-minted tokens (unlike most PoS blockchains). The participants of the blockchain collect rewards based on their availability and honesty.</p> -->
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Run Zarb Blockchain</h6>
                                    <p class="description mt-3">Zarb blockchain able to run locally or using docker.
                                        Even able to connect testnet using few commands</p>
                                    <div>
                                        <badge type="primary" rounded>design</badge>
                                        <badge type="primary" rounded>system</badge>
                                        <badge type="primary" rounded>creative</badge>
                                    </div>
                                    <base-button tag="a" href="https://zarb.network/guide/run-index.html" type="primary" class="mt-4">
                                        RUN ZARB
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-app" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Learn Zarb Blockchain</h6>
                                    <p class="description mt-3">Zarb  give you an overview  of zarb blockchain from consnesus mechaninsum to running a node as validator</p>
                                    <div>
                                        <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge>
                                    </div>
                                    <base-button tag="a" href="https://zarb.network/guide/learn-index.html" type="success" class="mt-4">
                                        Learn Zarb
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-spaceship" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Zarb Contribute Blockchain</h6>
                                    <p class="description mt-3">Zarb focus mainly on contributors. Its a open source project if you feel like to contribute just follow below link</p>
                                    <div>
                                        <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>product</badge>
                                        <badge type="warning" rounded>launch</badge>
                                    </div>
                                    <base-button tag="a" href="https://github.com/zarbchain/" type="warning" class="mt-4">
                                        Contribute Zarb
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg" style="background-color: antiquewhite;">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/zarb/zarb-val.png" style="height:500px" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3>Why Zarb</h3>
                            <p>Zarb is designed from the ground-up to be a “pure” blockchain protocol. It has a fixed supply of tokens generated at genesis.</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-bold-down"></badge>
                                        <h6 class="mb-0">A real Proof-of-Stake blockchain without delegation</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-bold-down"></badge>
                                        <h6 class="mb-0">Securing transactions by stamping transactions</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-bold-down"></badge>
                                        <h6 class="mb-0">Optimizing blockchain size</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'img/zarb/zarb-network.png'" class="card-img-top">
        
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-bulb-61" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                            <h3>About Zarb</h3>
                            <p>
                                Zarb started with 4 bootstrap validators without any stake and now anyone can join the network by staking some tokens. The stake will be bonded and cannot be touched.</p>
                            <p>A set of 21 validators secure the network and validate blocks. However, unlike Delegated Proof-of-Stake (dPoS) blockchain, this set is not fixed.</p>
                            <p>Indeed, Zarb solves validators' scalability problem with a clever and secure mechanism. The set of validators in Zarb are dynamic and flexible, compared to the more fixed and governed set of validators.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section section-shaped my-0 overflow-hidden" style="background-color: orange;">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Zarb Goal</h4>
                                <p class="text-white">Zarb more focusing decentralized community & open source contributors</p>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">Fair Distribution</h5>
                                    <p>Zarb is secured through a novel Proof-of-Stake consensus mechanism whereby stake is locked on the network to prevent any malicious or “Byzantine” behaviors that could potentially disrupt network operations.</p>
                                    <a href="https://zarb.network/guide/learn-validator.html" class="text-success">Learn more</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">Flat Reward</h5>
                                    <p>In Zarb, the token distribution is flat. It means the reward for each block is fixed and does not change over time. There is no halving in Zarb. The flat reward is a part of the consensus parameters and, for the main net, it sets one coin per block.</p>
                                    <a href="https://zarb.network/guide/learn-incentive.html" class="text-warning">Learn more</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Images from '../components/Images.vue';
export default {
  name: "home",
  components: {Images}
};
</script>
