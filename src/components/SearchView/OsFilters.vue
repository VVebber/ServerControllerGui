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
  <h2>ОС</h2>

  <label v-for="item in OsStats" :key="item.id" class="check-row">
    <input type="checkbox" @change="$emit('update:OsFliter', item.name)">
    <p> {{ item.name }}</p>
  </label>


</template>

<style scoped>
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
  text-overflow: ellipsis;
}
</style>
