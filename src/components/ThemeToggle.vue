<script setup>
import { useColorMode } from '@vueuse/core'

import ThemePreviewCard from '@/components/ThemePreviewCard.vue'
import { ref } from 'vue';

const mode = useColorMode({
  emitAuto: true,
  attribute: 'data-theme',
})

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
]


function setTheme(theme) {
  mode.value = theme;
  console.log("setTheme", theme)
  console.log("mode.value", mode.value)
}

</script>

<template>
  <div class="dark-card container">

    <input id="my-drawer-4" type="checkbox" />
    <label for="my-drawer-4" class="side-button-2">
      &lt;
    </label>

    <div class="side-panel">
      <label for="my-drawer-4" class="side-button-1-wr tt">
        <div class="full">
          <div class="menu">
            <h3>Выбрнная тема</h3>
            <ThemePreviewCard :theme="mode" @setTheme="null" />

            <h3>Все темы</h3>
            <ThemePreviewCard v-for="theme in themes" :key="theme" :theme="theme" @setTheme="setTheme" />
          </div>
        </div>
      </label>
    </div>
  </div>
</template>


<style scoped>
#my-drawer-4 {
  position: absolute;
  opacity: 0;
}

#my-drawer-4:checked~.side-panel~.side-button-2 {
  display: none;
}

#my-drawer-4:checked~.side-panel~.side-button-2 {
  display: block;
}

#my-drawer-4:checked~.side-panel {
  right: 1px;
}


.container {
  position: absolute;
  top: 0px;
  right: 1px;
}

.btn {
  position: absolute;
  top: 0;
  right: 0;
}

.side-panel {
  position: fixed;
  z-index: 9999;

  right: -250px;
  transition: all 0.5s;

}

.menu {
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding-right: 0.2rem;

  overflow-y: scroll;
  height: calc(100vh - 70px);
}

.drawer-toggle:checked~.menu {
  background: red;
}

.menu::-webkit-scrollbar {
  width: 8px;
}

.menu::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

.menu::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);

  border-radius: 999px;

  border: 2px solid transparent;
  background-clip: padding-box;
}

.menu::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);

  border: 2px solid transparent;
  background-clip: padding-box;
}
</style>
