<template>
    <div class="cont mt-5" @submit.prevent="">
        <form>
            <h1>Login</h1>
            <div class="mb-3">
                <label for="Email" class="form-label">Email address</label>
                <input type="email" placeholder="Email" class="form-control" id="Email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="Password" class="form-label">Password</label>
                <input type="password" placeholder="Password" class="form-control" id="Password">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cont {
    display: flex;
    justify-content: center;
}

form {
    width: 400px;
}
</style>