<script>
import { getDeviceCsp } from "@/api/devceCsp.api.js"

export default {
  props: {
    ipv4: {
      type: String,
      required: true
    },
    local: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cspData: null
    }
  },
  async mounted() {
    this.cspData = await getDeviceCsp(this.ipv4);
  }
}
</script>

<template>
  <div class="system-card">
    <div class="card-block" v-if="cspData">

      <div class="card-header">
        <h2>{{ cspData.name ?? '—' }}</h2>
        <p class="section-title"> {{ cspData.description ?? '—' }}</p>
        <div class="badge">{{ cspData.vendor ?? '—' }}</div>
      </div>

      <div class="main-info">
        <div class="info-box">
          <span>{{ local.version ?? '—' }}</span>
          <strong>{{ cspData.version ?? '—' }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.skuNumber ?? '—' }}</span>
          <strong>{{ cspData.skuNumber ?? '—' }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.uuid ?? '—' }}</span>
          <strong>{{ cspData.uuid ?? '—' }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.identifyingNumber ?? '—' }}</span>
          <strong>{{ cspData.identifyingNumber ?? '—' }}</strong>
        </div>
      </div>

      <p class="section-title">{{ local.sectionTitle ?? '—' }}</p>

      <div class="details">
        <div class="detail-row">
          <div class="label">{{ local.caption ?? '—' }}</div>
          <div class="value">{{ cspData.caption ?? '—' }}</div>
        </div>
        <div class="detail-row">
          <div class="label">{{ local.vendor ?? '—' }}</div>
          <div class="value">{{ cspData.vendor ?? '—' }}</div>
        </div>
      </div>

    </div>
    <p v-else class="empty-state">
      Данные отсутствуют или загружаются
    </p>
  </div>
</template>

<style scoped src="./tabStyles.css"></style>
