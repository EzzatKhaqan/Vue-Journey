<template>
  <h1>Home</h1>
  <button @click="getData">Fetch Data</button>


  <p v-if="user">
    {{ user.first_name }} - {{ user.last_name }} - {{ user.id }}
  </p>

</template>

<script>

import API from "../common/API"

export default {
  mixins: [API],
  data() {
    user: null
  },
  methods: {
    async getData() {
      this.user = await this.callApi("https://random-data-api.com/api/v2/users")
      console.log(this.user);
    }
  }

}



</script>


<style></style>
