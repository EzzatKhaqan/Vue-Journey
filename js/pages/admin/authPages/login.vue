<template>
    <form @submit.prevent="login">
        <div class="logo">
            <div class="img"></div>
        </div>
        <div v-if="errorMsg" class="alert alert-danger" role="alert">
            {{ errorMsg }}
        </div>
        <h1 class="mt-4 title">Login</h1>
        <div ref="title" class="mb-3">
            <label for="Email" class="form-label">Email address</label>
            <input v-model="data.email" required type="email" placeholder="Email" class="form-input" id="Email">
            <span class="line"></span>
        </div>
        <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input v-model="data.password" required type="password" placeholder="Password" class="form-input"
                id="Password">
            <span class="line"></span>
        </div>
        <div class="mb-3 form-check">
            <input v-model="data.remember_me" type="checkbox" class="form-check-input" id="remember_me">
            <label class="form-check-label" for="remember_me">Remember Me!</label>
        </div>
        <button type="submit" class="btn submit">Login</button>
    </form>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { callApi } from "../../../utils/API"
import { useRouter } from "vue-router";
const router = useRouter();
const data = reactive({ email: "", password: "", remember_me: false });
const errorMsg = ref("");
const login = async () => {
    if (data.remember_me) {
        localStorage.setItem("user", JSON.stringify({
            "email": data.email,
            "password": data.password
        }));
    } else {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
        }
    }
    callApi("post", "user/login", data)
        .then(({ data }) => {
            console.log(data);
            // localStorage.setItem("token", data.token_access);
            // router.replace("/");
        })
        .catch((error) => {
            console.log(error);
            errorMsg.value = error.response.data.msg;
        })
}
onBeforeMount(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
        const obj = JSON.parse(userData);
        data.email = obj.email;
        data.password = obj.password;
    }
});
</script>
<style scoped>
.logo {

    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
}

.logo .img {
    width: 100px;
    height: 100px;
    background-image: url('../../../assets/images/kpu_logo1.png');
    background-size: 100px;
    background-repeat: no-repeat;
}
</style>