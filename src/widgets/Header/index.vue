<template>
    <header class="Header">
        <Container class="HeaderContains">

            <Typography teg="h1" size="XL">WebProject</Typography>

            <Field placeholder="Найти что-то...">
            </Field>

            <ToolItemDropdown />

            <div class="versionBlock">
                <Typography size="XS">
                    Версия
                </Typography>

                <Typography size="XS" style="max-width: 100px; overflow: hidden; text-overflow: ellipsis; "> 
                    0.0.1
                </Typography>
            </div>
            
            <Typography size="M" teg="h1">
                Баринов В. К.
            </Typography>
            
            <Button size="XS" > 
                <template #Icon>
                    <Icon type="out"></Icon>
                </template>
                    Выход
            </Button>
        </Container>
    </header>

</template>

<script setup>
    import Field              from '@/shared/Field/index.vue';
    import Typography         from '@/shared/Typography/index.vue';
    import Button             from '@/shared/Button/index.vue'; 
    import Icon               from '@/shared/Icon/index.vue';
    import Container          from '@/shared/Conteiner/index.vue';
    import ToolItemDropdown   from '@/widgets/ToolItemDropdown/index.vue';
</script>

<style scoped>

.HeaderContains {
    display: flex;
    align-items: center;
    justify-content:  space-evenly;

    height: 70px; 
}

.Header {
    /* display: flex;  */
    position: sticky;

    top: 0;
    left: 0;

    background: var(--main-header-bg);

    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.versionBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>

