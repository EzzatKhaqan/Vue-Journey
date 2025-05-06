<template>
  <Nav />
  <div class="container-fluid">
    <slot></slot>
  </div>
  <Footer></Footer>
</template>

<script>
import Nav from '../components/navBar.vue'
import SideBar from "./sideBar.vue";
import Footer from "./footer.vue";
export default {
  components: { SideBar, Footer, Nav },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 732px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
