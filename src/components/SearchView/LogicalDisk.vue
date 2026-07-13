<script>
import { getLogicalDiskStats } from "@/api/search.api"

export default {
  name: "LogicalDiskFilter",

  emits: ['update:logicalDiskFilter'],

  data() {
    return {
      logicalDiskFilter: []
    }
  },

  async mounted() {
    this.logicalDiskFilter = await getLogicalDiskStats();
  }
}
</script>

<template>
    <h2 class="filter-title">Файловая система дисков</h2>

  <label
    v-for="item in logicalDiskFilter"
    :key="item.filesystem"
    class="check-row"
  >
    <input
      type="checkbox"
      @change="$emit('update:logicalDiskFilter', item.filesystem)"
    >

    <p class="filter-item">
      {{ item.filesystem }}
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
