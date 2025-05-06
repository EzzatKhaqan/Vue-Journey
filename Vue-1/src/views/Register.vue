<template>
  <div class="cont mt-5">
    <form class="m-4" @submit.prevent="">
      <h1>Register</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">First Name</label>
        <input type="text" placeholder="First Name" class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Last Name</label>
        <input type="text" class="form-control" placeholder="Last Name" id=" exampleInputEmail1"
          aria-describedby="emailHelp">

      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Terms</label>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {

  methods: {

    async callApi(url, method = "get", data = "") {
      try {
        const res = await axios.request({
          method: method,
          url: url,
          data: data
        });
        return res.data
      } catch (e) {
        return e
      }
    }

  }

} 
</script>

<style scoped>
div.cont {
  height: auto;
  display: flex;
  justify-content: center;
}

form {
  width: 400px;
  height: auto;
}
</style>
