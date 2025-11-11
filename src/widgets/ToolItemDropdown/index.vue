<template>
    <div class="dropdown" 
    @keydown.esc="isOpen = false"
    ref="dropdown">
        <Button IconPos="top" size="S" 
        @click="isOpen = !isOpen"
        class="tool-dropdown-btn">

            <template #Icon>
                <Icon type="instruments" />
            </template>

        </Button>

        <div v-show="isOpen"
            class="BoxList">
            <ul class="list">
                <ToolItemDropdownListItem icon="instruments" 
                href="scripts" label="Скрипты" />
                <ToolItemDropdownListItem />
                <!-- <ToolItemDropdownListItem /> -->
            </ul>
        </div>
    </div>
</template>

<script setup>
    import {nextTick, onMounted, ref, watch}             from 'vue';

    import Button                       from '@/shared/Button/index.vue';
    import Icon                         from '@/shared/Icon/index.vue';
    import ToolItemDropdownListItem     from '@/shared/dropdownListItem/ToolItemDropdownListItem/index.vue'

    const isOpen = ref(false);
    const dropdown = ref(null);

    watch(isOpen, async (newVal) => {
        if (newVal) {
            await nextTick();      
            dropdown.value?.focus(); 
        }
    });

    onMounted(()=>{
        window.addEventListener('click', event => {
            if(dropdown.value && !dropdown.value.contains(event.target)){
                isOpen.value = false;
            }
        })
    })

</script>

<style scoped>
.tool-dropdown-btn{
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 2px 2px 2px 1px rgba(255, 250, 255, 0.05);
    border-radius: 30% 15%;
    cursor: pointer;
    transition: all 0.2s ease;
}

.tool-dropdown-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
    box-shadow: 0 20px 10px rgba(0, 0, 0, 0.05);
  /* box-shadow: 0 4px 12px rgba(0,0,0,0.25); */
}

.list {
    list-style: none;
}

.dropdown {
    position: relative;
}

.BoxList {
    position: absolute;
    top: 100%;
    right: 0%;
    
    margin-top: 18px;
    
    background-color: rgba(30, 41, 59, 0.4);
    
    border: solid 1px black;
    border-radius: 0% 0% 10% 10%;
}
</style>