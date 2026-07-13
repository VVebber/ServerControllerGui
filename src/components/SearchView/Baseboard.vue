<script>
import { getBaseBoardStats } from "@/api/search.api"

export default {
  name: "BaseBoardFilter",

  emits: ['update:baseBoardFilter'],

  data() {
    return {
      baseBoards: []
    }
  },

  async mounted() {
    this.baseBoards = await getBaseBoardStats();
  }
}
</script>


<template>
  <h2 class="filter-title">Материнская плата</h2>

  <label
    v-for="item in baseBoards"
    :key="item.name"
    class="check-row"
  >
    <input
      type="checkbox"
      @change="$emit('update:baseBoardFilter', item.name)"
    >

    <p class="filter-item">
      {{ item.manufacturer }} {{ item.name }}
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
