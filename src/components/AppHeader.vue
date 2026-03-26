<script>
import HeaderSearch from '@/components/header/HeaderSearch.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import HeaderDropdown from '@/components/header/HeaderDropdown.vue';
// import { IconSize }     from '../styles/Header.constants'

export default {
  components: { BaseButton, HeaderDropdown, HeaderSearch }
}
</script>

<template>
  <header>
    <div class="flex-center header-gap">
      <HeaderDropdown />

      <div>
        <BaseButton tag="RouterLink" to="/">
          <h1 class="header-title">WebProject</h1>
        </BaseButton>

        <div class="header-title-version flex">
          <p>v</p>
          <p>0.0.1</p>
        </div>
      </div>
    </div>

    <div class="header-central">
      <HeaderSearch right-icon="search" left-icon="filter" />
    </div>


    <div class="flex-center header-gap">
      <BaseButton icon-name="notifications" class="header-button" />


      <BaseButton class="header-logout-button">
        {{ $t('header.exit') }}
      </BaseButton>
    </div>
  </header>
</template>

<style scoped>
.header-central {
  flex-grow: 1;
}

.header-title {
  font-size: 28px;
}

.header-gap {
  gap: 2rem;
}

.header-logout-button {
  background: var(--header-control-bg);
  color: var(--header-control-fg);

  padding: var(--header-exit-padding-y) var(--header-exit-padding-x);

  border: 1px solid var(--header-control-border-color);
  border-radius: var(--header-exit-radius);
  box-shadow: var(--header-control-shadow);


  transition: all 0.2s ease;
}

.header-button {
  background: var(--header-control-bg);
  color: var(--header-control-fg);

  padding: var(--header-control-py) var(--header-control-px);

  border: 1px solid var(--header-control-border-color);
  border-radius: var(--header-control-radius);
  box-shadow: var(--header-control-shadow);

  transition: all 0.2s ease;
}

.header-logout-button:hover,
.header-button:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
  box-shadow: 0 20px 10px rgba(0, 0, 0, 0.05);
}

  @media (max-width: 768px) {
  .header-title {
    font-size: 28px;
  }

  .header-gap {
    gap: 0.5rem;
  }
}

@media (max-width: 1024px) {
  .header-gap {
    gap: 1rem;
  }
}
</style>
