<template>
    <form @submit.prevent="register">
        <span class="alert alert-danger" v-if="errorMsg">{{ errorMsg }}</span>
        <span class="alert alert-success" v-if="success">{{ success }}</span>
        <h1 class="mt-4 title">Register</h1>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="data.email" placeholder="Email" class="form-input" id="email" aria-describedby="emailHelp">
            <span class="line"></span>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="data.password" type="password" placeholder="Password" class="form-input" id="password">
            <span class="line"></span>
        </div>
        <button type="submit" class="btn submit">Register</button>
    </form>
</template>

<script setup>
import { ref, reactive } from "vue";
import { callApi } from "../../../utils/API";
const data = reactive({ name: "", email: "", password: "" });
const errorMsg = ref("");
const success = ref("");

const register = () => {
    callApi("post", "user/register", data)
        .then((res) => {
            data.email = "";
            data.password = "";
            success.value = res.data.msg;
        })
        .catch((error) => {
            console.log(error);
            errorMsg.value = error.response.data.msg;
        });
}

</script>

<style scoped></style>