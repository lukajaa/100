export const useFullscreen = defineStore('fullscreen', () => {
  const isFullscreen = ref(false);
  const toggleFullscreen = () => {
    isFullscreen.value = !isFullscreen.value;
  };

  return {
    isFullscreen,
    toggleFullscreen,
  };
});
