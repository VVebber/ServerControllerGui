<template>
    <div :class="[`state_${state}`, `DeviceTile`]">
        <Typography size="S" teg="h1">
            Username: {{ name }}
        </Typography>

        <Typography size="XS" teg="p">
            IP: {{IP}}
        </Typography>

        <Typography size="XS" teg="p">
            MAC: {{ mac }}
        </Typography>

        <div class="DeviceButton">
            <RouterLink :to="{name :'SystemOverview'}">
                <Button>
                    <template #Icon>
                        <Icon type="search"/>
                    </template>
                </Button>
            </RouterLink>

            <Button>
                <template #Icon>
                    <Icon type="repost"/>
                </template>
            </Button>
        </div>
    </div>
</template>

<script setup>
    import Typography from '@/shared/Typography/index.vue';
    import Button     from '@/shared/Button/index.vue';
    import Icon       from '@/shared/Icon/index.vue';

    const props = defineProps ({
        name: {
            type: String,
            default: 'Don`t name'
        },
        IP: {
            type: String,
            default: '000.000.000.000'
        },
        mac: {
            type: String,
            default: 'FF:FF:FF:FF:FF:FF'
        },
        state: {
            type: String,
            default: "Error",
            validator: (value) => {
                return ["Active", "Warning", "Error"].includes(value); 
            }
        }
        
    })

</script>

<style scoped>
.DeviceTile {
    height: max-content;

    padding: 10px;

    border: solid 1px;
    border-radius: 30px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.DeviceButton {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
}

.state_Error {
    background: var(--gradient-error);
}    

.state_Active {
    background: var(--gradient-active);
}

.state_Warning {
    /* background-color: var(--color-state-warning); */
    background: var(--gradient-warning);
}
</style>
