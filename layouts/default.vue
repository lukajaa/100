<template :class="$colorMode.value">
  <div class="min-h-screen p-4 font-mono transition duration-500 ease-in-out">
    <ThemeSwitcher />
    <slot />
    <Footer />
  </div>
</template>
