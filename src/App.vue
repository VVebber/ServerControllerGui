<script>
import AppHeader from "@/components/AppHeader.vue";
import ThemeToggle from "@/components/ThemeToggle.vue"

export default {
  components: { AppHeader, ThemeToggle }
}
</script>

<template>
  <main>
    <AppHeader />
    <RouterView />
    <ThemeToggle></ThemeToggle>
  </main>
</template>

<style scoped>
</style>
