<script setup>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";

</script>
<template>


    <div class="wrapper">
        <Header />
        <Sidebar />
        <div class="page-wrapper">
            <router-view />
        </div>
        <Footer />
    </div>

</template>

<style>
:root {
    /* --e-primary-green: #67d3a1; */
    --e-primary-green: #1bdd83;
    --e-light-green: #6bf3b4;
    --e-primary-crimson: #DC143C;
    --e-light-crimson: #E74C5B;
    --e-white: #ffff;
    --e-soft-gray: #ecf0f1;
    --e-surface-ground: #f1f5f9;
    --e-primary-orange: #FF6F61;
    --e-light-orange: #FF897A;
    --e-navy: #1A237E;
    --e-dark-navy: #1B2A41;
    --e-neon-blue: #00A8E8;
    --e-border-color: #e2e8f0;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
}

body {
    background: var(--e-surface-ground);
}

.wrapper {
    position: absolute;
    inset: 0;
    overflow: auto;
    margin-top: 55px;
}

.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 28px;
    margin-left: 250px;
    position: relative;
}
</style>