<script setup>
import { computed } from 'vue';

const props = defineProps ({
    size: {
        type: String,
        default: 'M',
        validator: (value) => ["XS", "S", "M", "L", "XL", "XXL"].includes(value),
    },
    IconPos: {
        type: String,
        default: "right",
        validator: (value) => ["right", "left", "top", "down"].includes(value),
    }
})

const _rootClasses = computed(() => ({
  [`size_${props.size}`]: !!props.size,
  [`IconPos_${props.IconPos}`]: !!props.IconPos,
}));

</script>

<template>
    <button class="button" :class="_rootClasses">
        <slot name="Icon"></slot>
        <span><slot></slot></span>
    </button>
</template>

<style scoped>

.IconPos_top {
    display: flex;
    flex-direction: column;
}

.IconPos_down {
    display: flex;
    flex-direction: column-reverse;
}

.IconPos_left {
    display: flex;
    flex-direction: row-reverse;
}

.size_XS {
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 2px;
}

.size_S {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 3px;
}

.size_M {
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 5px;
}

.size_L {
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 6px;
}

.size_XL {
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 6px;
}

.size_XXL {
  font-size: 20px;
  padding: 12px 24px;
  border-radius: 8px;
}

.button {
    display: flex;
    align-items: center;
}

</style>