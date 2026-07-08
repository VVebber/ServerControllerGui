<script>
import { getCidrStats } from "@/api/search.api"

  export default  {
    name: "CidrFilter",
    emits: ['update:cidrFlitter'],
    data() {
      return {
        CidrFilter: []
      }
    },
    async mounted() {
      this.CidrFilter = await getCidrStats();
    }
  }
</script>

<template>
  <h2>Сегмент сети</h2>

  <label v-for="item in CidrFilter" :key="item.id" class="check-row">
    <input type="checkbox" @change="$emit('update:cidrFlitter', item.cidr)">
    <p> {{ item.cidr }}</p>
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
