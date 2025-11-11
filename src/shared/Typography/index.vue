<template>
    <component :is="props.teg" :class="[`size_${size}`]">
        <slot></slot>    
    </component>
</template>

<script setup>
    const props = defineProps ({
        teg: {
            type: String,
            default: "p",
            validator: (value) => {
                return ["p", "h1", "h2"].includes(value);
            }
        },
        size: {
        type: String,
        default: 'M',
        validator: (value) => {
            return ["XS", "S", "M", "L", "XL", "XXL"].includes(value);
            },
        }
    })

</script>

<style scoped>
.size_XS {
    font-size: 14px;
    line-height: 1.2;
}

.size_S {
    font-size: 16px;
    line-height: 1.3;
}

.size_M {
    font-size: 18px;
    line-height: 1.4;
}

.size_L {
    font-size: 20px;
    line-height: 1.5;
}

.size_XL {
    font-size: 22px;
    line-height: 1.6;
}

.size_XXL {
    font-size: 24px;
    line-height: 1.7;
}

</style>