<script>

export default {

  data() {
    return {
      layout: "Layout",
    };
  },
};
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
</style>
