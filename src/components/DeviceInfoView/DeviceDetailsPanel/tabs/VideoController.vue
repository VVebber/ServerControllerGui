<script>
import { getDeviceVideoController } from "@/api/deviceVideoController.api"

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
      videoData: null
    }
  },

  async mounted() {
    this.videoData = await getDeviceVideoController(this.ipv4)
  },

  methods: {
    formatAdapterRam(value) {
      const bytes = Number(value)
      if (!bytes) return "—"

      const gb = bytes / 1024 / 1024 / 1024

      if (gb >= 1) {
        return `${gb.toFixed(gb % 1 === 0 ? 0 : 1)} GB`
      }

      const mb = bytes / 1024 / 1024
      return `${mb.toFixed(0)} MB`
    },

    formatDate(value) {
      if (!value) return "—"

      const date = new Date(value)
      if (Number.isNaN(date.getTime())) return "—"

      return date.toLocaleDateString("ru-RU")
    },

    formatResolution(item) {
      if (!item?.currentHorizontalResolution || !item?.currentVerticalResolution) {
        return this.local.noData ?? "Нет данных"
      }

      return `${item.currentHorizontalResolution} × ${item.currentVerticalResolution}`
    },

    formatResolutionMeta(item) {
      if (!item?.currentBitsPerPixel) {
        return this.local.noData ?? "Нет данных"
      }

      return `${item.currentBitsPerPixel}-bit`
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="videoData && videoData.length">
      <div class="card-block" v-for="item in videoData" :key="item.id">
        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.name ?? "—" }}</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            {{ item.status ?? "—" }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.videoProcessor ?? "—" }}</span>
            <strong>{{ item.videoProcessor ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.adapterRAM ?? "—" }}</span>
            <strong>{{ formatAdapterRam(item.adapterRAM) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.adapterCompatibility ?? "—" }}</span>
            <strong>{{ item.adapterCompatibility ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.adapterDACType ?? "—" }}</span>
            <strong>{{ item.adapterDACType ?? "—" }}</strong>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.driverVersion ?? "—" }}</div>
            <div class="value">{{ item.driverVersion ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.driverDate ?? "—" }}</div>
            <div class="value">{{ formatDate(item.driverDate) }}</div>
          </div>
        </div>

        <div class="section-title">{{ local.resolutionSectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.videoModeDescription ?? "—" }}</div>
            <div class="value">{{ item.videoModeDescription ?? (local.noData ?? "Нет данных") }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.pnpDeviceId ?? "—" }}</div>
            <div class="value">{{ item.pnpDeviceId ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">Resolution</div>
            <div class="value">{{ formatResolution(item) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">Color Depth</div>
            <div class="value">{{ formatResolutionMeta(item) }}</div>
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
