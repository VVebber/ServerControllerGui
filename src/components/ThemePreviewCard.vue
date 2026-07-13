<script setup>
const props = defineProps({
  theme: {
    type: String,
  }
})

</script>

<template>
  <button @click="$emit('setTheme', props.theme)">
    <span :data-theme="props.theme" class="theme-card">
      <span class="name">{{ props.theme }} </span>

      <span class="theme-container">
        <span class="color bg"></span>
        <span class="color card"></span>
        <span class="color control"></span>
        <span class="color text"></span>
        <span class="color accent"></span>
      </span>
    </span>
  </button>

</template>

<style scoped>
.theme-card {
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: space-between;
}

button {
  display: flex;

  width: 100%;

  padding: 1rem 2rem;
  border: 1px solid var(--box-shadow-color);
  border-radius: 1rem;

}

.name {
  margin-right: 1rem;
  color:
}

.theme-container {
  display: flex;
  gap: 0.2rem;
}

.color {
  display: inline-block;

  width: 1vh;
  height: 2vh;
  border-radius: 40%;
}

.bg {
  background: var(--theme-preview-bg);
}

.card {
  background: var(--theme-preview-card);
}

.control {
  background: var(--theme-preview-control);
}

.text {
  background: var(--theme-preview-text);
}

.accent {
  background: var(--theme-preview-accent);
}
</style>
