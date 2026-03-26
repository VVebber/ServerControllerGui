<script>
  import AppHeader    from "@/components/AppHeader.vue";

  export default {
      components: {AppHeader}
  }
</script>

<template>
  <main>
      <AppHeader />
      <RouterView />
  </main>
</template>

<style scoped>


</style>
