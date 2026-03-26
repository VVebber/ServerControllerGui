<script>
import { getDeviceNetworkAdapter } from "@/api/deviceNetworkAdapter.api"

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
      networkData: null
    }
  },

  async mounted() {
    this.networkData = await getDeviceNetworkAdapter(this.ipv4)
  },

  methods: {
    formatBoolean(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.yes ?? "Да") : (this.local.no ?? "Нет")
    },

    formatSpeed(value) {
      const speed = Number(value)

      if (!speed || !Number.isFinite(speed)) return "—"
      if (speed >= 1000000000) return `${(speed / 1000000000).toFixed(1)} Gbps`
      if (speed >= 1000000) return `${(speed / 1000000).toFixed(0)} Mbps`

      return `${speed} bps`
    },

    formatDate(value) {
      if (!value) return "—"

      const date = new Date(value)
      if (Number.isNaN(date.getTime())) return "—"

      return date.toLocaleString("ru-RU")
    },

    getConnectionStatus(item) {
      return item.netEnabled
        ? (this.local.connected ?? "Подключен")
        : (this.local.disconnected ?? "Отключен")
    },

    getVirtualText(item) {
      if (item.physicalAdapter === null || item.physicalAdapter === undefined) return "—"
      return item.physicalAdapter ? (this.local.no ?? "Нет") : (this.local.yes ?? "Да")
    },

    getActiveLinkText(item) {
      if (item.netConnectionStatus === null || item.netConnectionStatus === undefined) return "—"
      return item.netConnectionStatus === 2
        ? (this.local.yes ?? "Да")
        : (this.local.no ?? "Нет")
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="networkData && networkData.length">
      <div class="card-block" v-for="item in networkData" :key="item.id">

        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.name ?? "—" }}</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            {{ getConnectionStatus(item) }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.manufacturer ?? "—" }}</span>
            <strong>{{ item.manufacturer ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.adapterType ?? "—" }}</span>
            <strong>{{ item.adapterType ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.speed ?? "—" }}</span>
            <strong>{{ formatSpeed(item.speed) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.macAddress ?? "—" }}</span>
            <strong>{{ item.macAddress ?? "—" }}</strong>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.connectionId ?? "—" }}</div>
            <div class="value">{{ item.netConnectionId ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.interfaceIndex ?? "—" }}</div>
            <div class="value">{{ item.interfaceIndex ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.serviceName ?? "—" }}</div>
            <div class="value">{{ item.serviceName ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.lastReset ?? "—" }}</div>
            <div class="value">{{ formatDate(item.timeOfLastReset) }}</div>
          </div>
        </div>

        <div class="section-title">{{ local.stateSectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.enabled ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.netEnabled) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.physical ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.physicalAdapter) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.virtual ?? "—" }}</div>
            <div class="value">{{ getVirtualText(item) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.activeLink ?? "—" }}</div>
            <div class="value">{{ getActiveLinkText(item) }}</div>
          </div>
        </div>

      </div>
    </div>

    <p v-else class="empty-state">
      Данные отсутствуют или загружаются
    </p>
  </div>
</template>

<style scoped src="./tabStyles.css"></style>
