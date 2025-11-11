<template>
    <label class="base-input">
      <span class="base-input__label">{{ label }}</span>
      
      <div class="base-input__control">
        <span v-if="icon || $slots['prepend']">
          <slot name="prepend">
            <icon :type="icon" />
          </slot>
        </span>

        <input class="base-input__native" :placeholder="placeholder"/>

        <span v-if="rightIcon || $slots['append']">
          <slot name="append">
            <icon :type="icon" />
          </slot>
        </span>
      </div>
    </label>
</template>

<script>
import Icon from '../Icon/index.vue'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
            type: String,
      default: ''
    },
    icon: {
      type: String,
      default: '',
    },
    rightIcon: {
      type: String,
      default: '',
    }
  },

  components: {
    Icon,
  }
}
</script>

<style scoped>
.base-input__native {
  padding: 5px;
}

.base-input__control {
  display: flex;
  align-items: center;
}
</style>
