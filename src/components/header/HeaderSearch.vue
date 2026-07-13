<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  components: { BaseButton }
}
</script>

<template>
  <div class="flex header-search">
    <BaseButton iconName="filter" class="header-control-filter" />

    <input placeholder="Ввод" class="header-search-bar" />

    <BaseButton tag="RouterLink" to="/SearchView" iconName="search" class="header-control-search" />
  </div>
</template>

<style scoped>
.header-search {
  background: var(--bg-color);
  padding: var(--padding-vertical) var(--padding-horizontal);

  border: 1px solid var(--field-border-color);
  border-radius: var(--field-border-radius);
  gap: var(--field-gap);
}

.header-search-bar {
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-color);
  flex: 1;
  font-size: var(--field-font-size);

  margin: 0.5rem 0;
}

.header-control-filter,
.header-control-search {
  background: none;
  color: var(--header-control-fg);

  width: 18px;
  height: 18px;
  margin: 0.5rem;
}

@media (max-width: 767px) {

  .header-search-bar,
  .header-control-filter {
    display: none;
  }
}

@media (max-width: 1024px) {


}
</style>
