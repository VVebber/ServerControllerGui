<script>
import { getCpuStats } from "@/api/search.api"

export default {
  name: "CpuFilter",

  emits: ['update:cpuFilter'],

  data() {
    return {
      cpuStats: []
    }
  },

  async mounted() {
    this.cpuStats = await getCpuStats();
  }
}
</script>

<template>
    <h2 class="filter-title">Процессор</h2>

  <label
    v-for="item in cpuStats"
    :key="item.name"
    class="check-row"
  >
    <input
      type="checkbox"
      @change="$emit('update:cpuFilter', item.name)"
    >

    <p class="filter-item">
      {{ item.name }}
      <span>({{ item.count }})</span>
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
