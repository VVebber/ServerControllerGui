<script>
import BaseIcon from '@/components/ui/Icon.vue'

export default {
  components: { BaseIcon },
  props: {
    iconName: {
      type: String,
      required: true
    }, tag: {
      type: String,
      default: "button"
    }
  }
}
</script>

<template>
  <component :is="tag" class="base-button">
    <BaseIcon :name="iconName" />
    <slot />
  </component>

</template>

<style>
.base-button {
  display: flex;
  align-items: center;

  border: none;
}
</style>
