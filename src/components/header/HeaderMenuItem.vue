<script>
import { useI18n } from 'vue-i18n';

import BaseIcon from '@/components/ui/Icon.vue'

export default {
  components: { BaseIcon },

  setup() {
    const { tm } = useI18n({ useScope: 'global' })
    const groups = tm('header.menu')

    return {
      groups
    };
  }
}
</script>

<template>
  <ul>
    <li v-for="item, key, index in groups" :key="index" class="header-menu-item">
      <RouterLink :to="{name: key}" class="header-menu-link">
        <BaseIcon :name="key" style="color: black;"></BaseIcon>
        <p>{{ item }}</p>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.header-menu-item {
  list-style: none;
}

.header-menu-link {
  display: flex;
  flex-direction: row;
  align-items: center;

  color: wheat;
  text-decoration: none;

  gap: 8px;
  padding: 8px 12px;

  transition: background 0.2s;
}

.header-menu-link:hover {
  background-color: rgba(40, 41, 59, 0.4);
}
</style>
