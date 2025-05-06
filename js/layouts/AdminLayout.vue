<template>
    <div class="main-wrapper">
        <Header />
        <Sidebar />
        <div @click="commonStore.toggleClass('hide')" class="page-wrapper">
            <slot />
        </div>
    </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import { useCommonStore } from "../store/common";
const commonStore = useCommonStore();
</script>

<style></style>