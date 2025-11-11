<script>
    const iconsName =  ["menu", "out", "map-pinned",
                        "search", "download", 
                        "repost", "instruments" ];

    export default {
        props: {
            type: {
                type: String,
                default: '',
                validator: (value) => {
                    return iconsName.includes(value);
                }
            },
        }
    }
</script>


<template>

<svg v-if="type === 'menu'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H20M4 6H20M4 18H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg v-if="type ==='instruments'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7H11M14 17H5M14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17ZM10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg v-if="type === 'download'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<svg v-if="type === 'out'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg v-if="type === 'map-pinned'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.71406 14H5.00406C4.79439 14.0001 4.59005 14.0661 4.41994 14.1886C4.24982 14.3112 4.12253 14.4841 4.05606 14.683L2.05206 20.683C2.00182 20.8333 1.98803 20.9934 2.01182 21.1501C2.03561 21.3068 2.0963 21.4556 2.18888 21.5842C2.28147 21.7128 2.40331 21.8176 2.54434 21.8899C2.68538 21.9622 2.84158 21.9999 3.00006 22H21.0001C21.1584 21.9999 21.3145 21.9621 21.4554 21.8899C21.5964 21.8177 21.7181 21.713 21.8107 21.5845C21.9033 21.456 21.964 21.3074 21.9879 21.1508C22.0118 20.9942 21.9981 20.8343 21.9481 20.684L19.9481 14.684C19.8817 14.4848 19.7543 14.3115 19.584 14.1888C19.4137 14.066 19.209 13.9999 18.9991 14H15.2871M18 8C18 11.613 14.131 15.429 12.607 16.795C12.4327 16.9282 12.2194 17.0003 12 17.0003C11.7806 17.0003 11.5673 16.9282 11.393 16.795C9.87 15.429 6 11.613 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg v-if="type === 'search'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 6H3M10 12H3M10 18H3M21.0001 18.9996L19.1001 17.0996M20 15C20 16.6569 18.6569 18 17 18C15.3431 18 14 16.6569 14 15C14 13.3431 15.3431 12 17 12C18.6569 12 20 13.3431 20 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg v-if="type === 'repost'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21M5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19M9 3H10M9 21H10M14 3H15M14 21H15M3 9V10M21 9V10M3 14V15M21 14V15M7 8H15M7 12H17M7 16H13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</template>

<style scoped>
</style>