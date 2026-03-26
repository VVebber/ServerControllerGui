<script>
import { getDevicePageFileUsage } from "@/api/devicePageFileUsage.api"

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
      pageFileData: null
    }
  },

  async mounted() {
    this.pageFileData = await getDevicePageFileUsage(this.ipv4)
  },

  methods: {
    formatMb(value) {
      if (value === null || value === undefined || value === "") return "—"
      return `${value} MB`
    },

    formatBoolean(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.yes ?? "Да") : (this.local.no ?? "Нет")
    },

    formatDate(value) {
      if (!value) return "—"
      const date = new Date(value)
      if (Number.isNaN(date.getTime())) return value
      return date.toLocaleDateString("ru-RU")
    },

    getUsagePercent(item) {
      const allocated = Number(item?.allocatedBaseSize)
      const current = Number(item?.currentUsage)

      if (!allocated || !current) return 0

      const percent = Math.round((current / allocated) * 100)
      return Math.max(0, Math.min(percent, 100))
    },

    getStatusText(item) {
      const percent = this.getUsagePercent(item)

      return percent >= 80
        ? (this.local.warning ?? "Высокая нагрузка")
        : (this.local.normal ?? "Нормально")
    }
  }
}

</script>

<template>
  <div class="system-card">
    <div v-if="pageFileData && pageFileData.length">

      <div v-for="item in pageFileData" :key="item.id" class="card-block">

        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.name ?? "—" }}</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            {{ getStatusText(item) }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.allocatedBaseSize ?? "—" }}</span>
            <strong>{{ formatMb(item.allocatedBaseSize) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.currentUsage ?? "—" }}</span>
            <strong>{{ formatMb(item.currentUsage) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.peakUsage ?? "—" }}</span>
            <strong>{{ formatMb(item.peakUsage) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.tempPageFile ?? "—" }}</span>
            <strong>{{ formatBoolean(item.tempPageFile) }}</strong>
          </div>
        </div>

        <div class="section-title">{{ local.usage ?? "—" }}</div>

        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: getUsagePercent(item) + '%' }"></div>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.caption ?? "—" }}</div>
            <div class="value">{{ item.caption ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.installDate ?? "—" }}</div>
            <div class="value">{{ formatDate(item.installDate) }}</div>
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
