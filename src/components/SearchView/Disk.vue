<script>
import { getDiskStats } from "@/api/search.api"

export default {
  name: "DiskFilter",

  emits: ['update:diskFilter'],

  data() {
    return {
      diskFilter: []
    }
  },

  async mounted() {
    this.diskFilter = await getDiskStats();
  }
}
</script>

<template>
    <h2 class="filter-title">Диски</h2>

  <label
    v-for="item in diskFilter"
    :key="item.name"
    class="check-row"
  >
    <input
      type="checkbox"
      @change="$emit('update:diskFilter', item.name)"
    >

    <p class="filter-item">
      {{ item.name }}
    </p>
  </label>

</template>

<style scoped>
.filter-title {
  color: var(--filter-title-color);
}


.check-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}


.filter-item {
  color: var(--filter-item-color);

  max-width: max-content;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
