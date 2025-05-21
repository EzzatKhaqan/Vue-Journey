import { reactive } from "vue";

const layoutState = reactive({
  isSidebarOpen: false,
});

export const useLayout = () => {
  const toggleSidebar = () => {
    layoutState.isSidebarOpen = !layoutState.isSidebarOpen;
  };

  return {
    layoutState,
    toggleSidebar,
  };
};
