<script>
import OsFilters from './OsFilters.vue';

// import { getOsStats } from"@/api/search.api"

export default {
  name: "StatusFilter",
  emits: ["update:statusFliter"],
  data() {
    return {
      StatusFilter: []
    }
  },
  async mounted() {
    this.StatusFilter = await this.$tm("DeviceInfo.status");
  }
}
</script>

<template>
  <h2 class="filter-title">Статус</h2>

  <label v-for="item in StatusFilter" :key="item" class="check-row">
    <input type="checkbox" @change="$emit('update:statusFliter', item)">
    <p class="filter-item">
      {{ item }}
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
