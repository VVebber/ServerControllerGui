<script>
import { getOverview } from '@/api/networkOverview.api';
import DeviceCard from '@/components/HomeView/DeviceCard.vue'

export default {
  components: { DeviceCard },
  data() {
    return {
      data: []
    }
  },
  async mounted() {
    this.data = await getOverview();
  }
}
</script>

<template>
  <section>
    <div v-for="item, index in data" :key="index" class="network-section">
      <p class="network-title">{{ item?.cidr }}</p>
      <div class="network-devices">
        <DeviceCard v-for="item, index in item?.adapters" :key="index" :ipv4="item?.ipv4" :mac="item?.mac" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.network-devices {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.network-title {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;

  color: #9ca3af;
  text-transform: uppercase;

  margin-bottom: 12px;
  padding-left: 6px;

  border-left: 3px solid #374151;
}

.network-section {
  padding: 20px;
}
</style>
