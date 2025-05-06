import { defineStore } from "pinia";
import { ref } from "vue";
export const useCommonStore = defineStore("commonStore", () => {
  const activeDropdown = ref("");

  function toggleClass(dropdown) {
    activeDropdown.value = activeDropdown.value === dropdown ? "" : dropdown;
  }

  return {
    activeDropdown,
    toggleClass,
  };
});
