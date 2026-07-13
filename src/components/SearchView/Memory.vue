<script>
import { getMemoryStats } from "@/api/search.api"

export default {
  name: "MemoryFilter",

  emits: ['update:memoryFilter'],

  data() {
    return {
      memoryStats: []
    }
  },

  async mounted() {
    this.memoryStats = await getMemoryStats();
  }
}
</script>

<template>
  <h2 class="filter-title">Оперативная память</h2>

  <label
    v-for="item in memoryStats"
    :key="item.manufacturer + item.type"
    class="check-row"
  >
    <input
      type="checkbox"
      @change="$emit(
        'update:memoryFilter',
        item.manufacturer
      )"
    >

    <p class="filter-item">
      {{ item.manufacturer ?? 'нет памяти'}}
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
