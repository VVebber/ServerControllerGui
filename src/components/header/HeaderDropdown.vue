<script>
import BaseButton from '@/components/ui/BaseButton.vue';
import HeaderMenuItem from '@/components/header/HeaderMenuItem.vue';

export default {
  components: { BaseButton, HeaderMenuItem },

  data() {
    return {
      isOpen: false
    }
  }
}

</script>

<template>
  <div @keydown.esc="isOpen = false" class="relative" tabindex="0">
    <BaseButton icon-name="menu" @click="isOpen = !isOpen" class="header-menu-button pointer" />

    <HeaderMenuItem v-show="isOpen" class="submenu" />
  </div>
</template>

<style scoped>
.header-menu-button {
  background: var(--header-control-bg);
  color: var(--header-control-fg);

  padding: var(--header-control-py) var(--header-control-px);

  border: 1px solid var(--header-control-border-color);
  border-radius: var(--header-control-radius);
  box-shadow: var(--header-control-shadow);

  transition: all 0.2s ease;
}

.header-menu-button:hover {
  background: var(--header-control-hover-bg);
  transform: translateY(-1px);
  box-shadow: var(--header-control-hover-shadow);
}

.submenu {
  position: fixed;
  top: 0px;
  left: 0px;

  margin-top: var(--height-header);

  background: var(--submenu-bg);
  border: solid 1px var(--submenu-border-color);

  /* border-radius: 0% 0% 20% 0%; */
}
</style>
