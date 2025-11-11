<template>
    <Container class="GroupsContains">
        <AdapterGroup v-for="adapter in adapters" :key="adapter.id"
            :name="adapter['name']" :index="adapter['id']"
            :devices="adapter?.devices"
        />
    </Container>
</template>
<!--  -->


<script setup>
    import AdapterGroup       from '@/shared/AdapterGroup/index.vue';
    import Container          from '@/shared/Conteiner/index.vue';
    import { getAdapter }     from '@/shared/api/getAdapter';
    import { onMounted, ref } from 'vue';

    const adapters = ref([]);

    onMounted(async () =>{
        adapters.value = await getAdapter();
    })
</script>

<style scoped>

.GroupsContains {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    padding-bottom: 0;
}

</style>