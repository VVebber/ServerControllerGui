<template>
    <div v-show="devices.length">
        <div class="title">
            <h3>Тип сети: {{name}}</h3>
            <button @click="isShow=!isShow">></button>
        </div>
        <p>size = {{devices.length}}</p>
        <div class="AdapterGroup"
        v-show="isShow">
            <DeviceTitle v-for="device in devices" :key="device"
                :IP='device?.ip' :mac='device?.mac'
            />
        </div>
    </div>
</template>

<script>
    import DeviceTitle from "@/shared/DeviceTile/index.vue"

    export default{
        components: {DeviceTitle},
        data() {
            return {
                isShow: false
            }
        },  
        props: {
            name: {
                type: String,
                default: ''
            },
            index: {
                type: Number,
                default: -1
            },
            devices: {
                type: Array
            }
        }
    };

</script>

<style scoped>

.AdapterGroup {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding-top: 10px;
}

.title {
    display: flex;
    gap: 10px;
}
</style>