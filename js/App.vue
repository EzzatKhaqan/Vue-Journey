<template>
    <Login v-if="isLogin" />
    <AdminLayout v-else>
        <router-view />
    </AdminLayout>
</template>

<script setup>
import AdminLayout from "./layouts/AdminLayout.vue";
import Login from "./pages/admin/authPages/login.vue"
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isLogin = computed(() => {
    return route.name === "Login" ? true : false;
});

</script>

<style></style>