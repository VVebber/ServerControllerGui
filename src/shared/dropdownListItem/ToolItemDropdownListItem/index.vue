<template>
    <div class="conteiner">
        <li>
            <RouterLink :to="{name: href }">
                <Icon :type="icon"></Icon>
                
                <Typography
                class="text">
                    {{label}}
                </Typography>
            </RouterLink>
        </li>
    </div>
</template>

<script>
    import Typography         from '@/shared/Typography/index.vue';
    import Icon               from '@/shared/Icon/index.vue';

    export default {
        components: { Icon },
        props: {
            href :{
                type: String,
                default: ''
            },
            label : {
                type: String,
                default: "tetx"
            },
            icon : {
                type: String,
                default: ''
            }
        }
    }

</script>

<style scoped>
.conteiner li > a {
    display: flex;
    flex-direction: row;

    align-items: center;
    gap: 8px;

    color: wheat;
    text-decoration: none;

    padding: 8px 12px;
    border-radius: 6px;
    transition: background 0.2s;
}

.BoxList li {
    list-style: none;
    margin: 5px 0;
}

.BoxList li a:hover {
    background-color: rgba(40, 41, 59, 0.4); 
}

</style>