<template>
    <div :class="[
        commonStore.activeDropdown === 'sidebar' ? ' show' : 'hide']" class="sidebar">
        <div class="slimScrollDiv">
            <div class="sidebar-inner">
                <div class="sidebar-menu">
                    <ul>
                        <li class="menu-title">
                            <span>Main</span>
                        </li>
                        <li class="submenu">

                            <a href="#" @click="toggle('dashboard')">
                                <i class="fa fa-dashboard"></i>
                                <span>Dashboard</span>
                                <span class="menu-arrow">
                                    <i class="fa fa-caret-right"></i>
                                </span>
                            </a>
                            <ul :class="{ subdrop: activeMenu === 'dashboard' }">
                                <li>
                                    <router-link to="/" class="active">Admin Dashboard</router-link>
                                </li>

                            </ul>
                        </li>
                        <!--  -->
                        <li class="submenu">
                            <a href="#">
                                <i class="fa fa-user"></i>
                                <span>Apps</span>
                                <span class="menu-arrow">
                                    <i class="fa fa-caret-right"></i>
                                </span>
                            </a>
                        </li>
                        <li class="menu-title">
                            <span>Setting</span>
                        </li>
                        <li class="submenu">
                            <a href="#" @click="toggle('user')">
                                <i class="fa fa-user"></i>
                                <span>User</span>
                                <span class="menu-arrow">
                                    <i class="fa fa-caret-right"></i>
                                </span>
                            </a>
                            <ul :class="{ subdrop: activeMenu === 'user' }">
                                <li><router-link to="/user">Users</router-link></li>
                                <li><router-link to="/register">Register</router-link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { ref } from "vue";
import { useCommonStore } from "../store/common";
const commonStore = useCommonStore();
const activeMenu = ref("");
function toggle(submenu) {
    activeMenu.value = activeMenu.value === submenu ? null : submenu;
}


</script>

<style scoped>
.hide {
    display: none;
}

.show {
    display: block;
}
</style>