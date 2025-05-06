<template>
    <div class="header">
        <div class="header-left">
            <a href="#">
                <img src="../assets//images/kpu_logo1.png" alt="logo">
            </a>
        </div>
        <span @click="tgClass('sidebar')" class="toggle-btn">
            <i class="fa fa-bars">
            </i>
        </span>
        <div class="page-title">
            <h1>Post Graduate</h1>
        </div>
        <nav class="nav user-menu">
            <li @click="tgClass('lang')" class="nav-item dropdown">
                <i class="fas fa-language"> </i>
                <div :class="{ show: commonStore.activeDropdown === 'lang' }" class="dropdown-content language list">
                    <ul>
                        <li>Farsi</li>
                        <li>Pashto</li>
                        <li>English</li>
                    </ul>
                </div>
            </li>
            <li @click="tgClass('notify')" class="nav-item dropdown">
                <i class="fa fa-bell"> </i>
                <div :class="{ show: commonStore.activeDropdown === 'notify' }" class="dropdown-content notifications">
                    <div class="notify-content">
                        <a href="#">
                            Message
                        </a>
                        <a href="#">
                            Message
                        </a>
                    </div>
                </div>
            </li>
            <li @click="tgClass('user_option')" class="nav-item dropdown">
                <span class="user-img">
                    <img src="../assets/images/kpu_logo1.png" alt="user">
                    <span> Ezzat Khaqan </span>
                    <i class="fas fa-caret-down"> </i>
                </span>
                <div :class="{ show: commonStore.activeDropdown === 'user_option' }"
                    class="dropdown-content user-option list">
                    <ul>
                        <a href="#">
                            <li>Profile</li>
                        </a>
                        <a @click="logout">
                            <li>Logout</li>
                        </a>
                    </ul>
                </div>
            </li>
            <span @click="tgClass('option_menu')" class="option dropdown">
                <i class="fa fa-ellipsis"></i>
                <div :class="{ show: commonStore.activeDropdown === 'option_menu' }"
                    class="dropdown-content user-option list">
                    <ul>
                        <a href="#">
                            <li>Profile</li>
                        </a>
                        <a @click="logout">
                            <li>Logout</li>
                        </a>
                    </ul>
                </div>
            </span>
        </nav>
    </div>
</template>

<script setup>
import { callApi } from "../utils/API";
import { useRouter } from "vue-router";
import { useCommonStore } from "../store/common";
const router = useRouter();
const commonStore = useCommonStore();

const activeDr = commonStore.activeDropdown;
const tgClass = commonStore.toggleClass;

const logout = async () => {
    await callApi("post", "user/logout", {})
        .then(({ data }) => {
            localStorage.removeItem("token");
            router.replace("/login");
        }).catch(({ data }) => {
            console.log(data);
        });
}



</script>

<style></style>