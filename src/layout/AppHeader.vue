<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/zarb/zarblogo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                 <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://zarb.network/guide/run-index.html" target="_blank" rel="noopener">
                        <span class="text-white">Run</span>
                    </a>
                </li>

               <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://zarb.network/guide/learn-index.html" target="_blank" rel="noopener">
                        <span class="text-white">Learn</span>
                    </a>
                </li>

                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://github.com/zarbchain/" target="_blank" rel="noopener">
                        <span class="text-white">Contribute</span>
                    </a>
                </li>

                  <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="/docs" target="_blank" rel="noopener">
                        <span class="text-white">Docs</span>
                    </a>
                </li>

            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
