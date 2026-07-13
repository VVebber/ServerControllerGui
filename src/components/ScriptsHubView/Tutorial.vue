<script>
import BaseIcon from '@/components/ui/Icon.vue'

export default {
  components: { BaseIcon },
  props: {
    protocol: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isShow: false
    }
  }
}
</script>

<template>
  <div class="protocol">
    <h2>{{ protocol?.title }}</h2>

    <div class="info-row" v-if="protocol?.description">
      <p>{{ protocol?.description }}</p>
      <a v-if="protocol?.download" :href="protocol?.download.url" :download="protocol?.download.filename"
        class="downloadLink">
        <BaseIcon name="download" />
      </a>
    </div>

    <div style="display: flex;">
      <h3>Инструкция пл использованию: </h3>
      <button class="details" @click="isShow = !isShow">Подробнее</button>
    </div>

    <ul v-show="isShow">
      <li v-for="(step, index) in protocol?.instructions" :key="index"> {{ step }}</li>
    </ul>
  </div>
  <p>{{ type }}</p>
</template>

<style scoped>
.info-row {
  display: flex;
  gap: 0.4rem;

  align-items: center;
}

.info-row a {
  color: var(--tutorial-link);
}

.protocol {
  display: flex;
  flex-direction: column;

  color: var(--tutorial-text);

  padding: 0 1rem;
  gap: 0.4rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--tutorial-divider);
}

.details {
  padding-left: 0.2rem;
  color: var(--tutorial-details);
  background: initial;
  border: 0;
}

ul {
  padding-left: 1.5rem;
  list-style-type: decimal;
}

ul li {
  margin-bottom: 0.3rem;
  padding: 0.5rem 1rem;
  border-left: 2px solid var(--tutorial-step-border);
  background: var(--tutorial-step-bg);
  border-radius: 4px;
  transition: all 0.2s ease;
}

ul li:hover {
  background: var(--tutorial-step-bg-hover);
  border-left-color: var(--tutorial-step-border-hover);
}
</style>
