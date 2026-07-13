<script>
import { getOsStats } from "@/api/search.api"

  export default  {
    name: "OsState",
    emits: ["update:OsFliter"],
    data() {
      return {
        OsStats: []
      }
    },
    async mounted() {
      this.OsStats = await getOsStats();
    }
  }
</script>

<template>
  <h2 class="filter-title">ОС</h2>

  <label v-for="item in OsStats" :key="item.id" class="check-row">
    <input type="checkbox" @change="$emit('update:OsFliter', item.name)">
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
