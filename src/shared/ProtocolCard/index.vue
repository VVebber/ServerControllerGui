<template>
    <div class="tab-section">
        <h2>{{ tabData.title }}</h2>

        <div class="info-row" v-if="tabData.description">
            <p>{{ tabData.description }}</p>
            <a v-if="tabData.download"
            :href="tabData.download.url"
            :download="tabData.download.filename"
            class="downloadLink"
            >
                <Icon type="download" />
            </a>
        </div>

        <div class="info-row" v-if="tabData.instructions && tabData.instructions.length">
            <h3>Инструкция по использованию:</h3>
            <button class="details" @click="isDetails = !isDetails">подробнее</button>
        </div>

        <ol v-show="isDetails" v-if="tabData.instructions && tabData.instructions.length">
            <li v-for="(step, index) in tabData.instructions" :key="index">{{ step }}</li>
        </ol>

        <b v-if="tabData.note">{{ tabData.note }}</b>
    </div>
</template>

<script>
    import Icon from "@/shared/Icon/index.vue";

    export default {
        components: { Icon },

        props: {
            tabData: {
                type: Array,
            }
        },

        data() {
            return {
                isDetails: false
            };
        }
    };
</script>

<style scoped>
.tab-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.info-row {
    display: flex;
    align-items: center;
}

.details {
    background-color: rgba(30, 41, 59, 0.2);
    border: 1px solid rgba(30, 41, 59, 0.4);

    padding: 5px;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.details:hover {
    background-color: rgba(30, 41, 59, 0.8);;
    color: white;
    transform: translateY(-1px);
}

.downloadLink {
    margin: 4px;
}

ol {
    padding-left: 24px;
    list-style-type: decimal;
    /* color: #e5e7eb; */
}

ol li {
    margin-bottom: 6px;
    padding: 6px 8px;
    border-left: 2px solid rgba(66, 185, 131, 0.4);
    background-color: rgba(30, 41, 59, 0.3);
    border-radius: 4px;
    transition: all 0.2s ease;
}

ol li:hover {
    background-color: rgba(30, 41, 59, 0.6);
    border-left-color: #42b983;
}

</style>