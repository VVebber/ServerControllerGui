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
  <h2 class="sidebar-title">Статус</h2>

  <label v-for="item in StatusFilter" :key="item" class="check-row">
    <input type="checkbox" @change="$emit('update:statusFliter', item)">
    <p> {{ item }}</p>
  </label>


</template>

<style scoped>
.sidebar-title {
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 0.9rem;
}

.check-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.74);
}

.check-row p {
  max-width: max-content;

  white-space: nowrap;
  overflow: hidden;
  /* text-overflow: ellipsis; */
}
</style>
