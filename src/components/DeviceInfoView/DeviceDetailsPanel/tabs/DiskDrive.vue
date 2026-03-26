<script>
import { getDeviceDiskDrive } from "@/api/deviceDiskDrive.api"

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
      diskData: null
    }
  },

  async mounted() {
    this.diskData = await getDeviceDiskDrive(this.ipv4)
  },

  methods: {
    formatSize(value) {
      const bytes = Number(value)

      if (!bytes) return "—"

      const gb = bytes / 1024 / 1024 / 1024

      if (gb >= 1024) {
        return `${(gb / 1024).toFixed(1)} TB`
      }

      return `${gb.toFixed(0)} GB`
    },

    formatBoolean(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.yes ?? "Да") : (this.local.no ?? "Нет")
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="diskData && diskData.length">
      <div class="card-block" v-for="item in diskData" :key="item.id">

        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.model ?? item.caption ?? "—" }}</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            {{ item.status ?? "—" }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.size ?? "—" }}</span>
            <strong>{{ formatSize(item.size) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.interfaceType ?? "—" }}</span>
            <strong>{{ item.interfaceType ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.mediaType ?? "—" }}</span>
            <strong>{{ item.mediaType ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.partitions ?? "—" }}</span>
            <strong>{{ item.partitions ?? "—" }}</strong>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.manufacturer ?? "—" }}</div>
            <div class="value">{{ item.manufacturer ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.firmwareRevision ?? "—" }}</div>
            <div class="value">{{ item.firmwareRevision ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.serialNumber ?? "—" }}</div>
            <div class="value">{{ item.serialNumber ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.bytesPerSector ?? "—" }}</div>
            <div class="value">{{ item.bytesPerSector ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.mediaLoaded ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.mediaLoaded) }}</div>
          </div>
        </div>

        <div class="section-title">{{ local.capabilitiesTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.diskIndex ?? "—" }}</div>
            <div class="value">{{ item.index ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.deviceDiskId ?? "—" }}</div>
            <div class="value">{{ item.deviceDiskId ?? "—" }}</div>
          </div>

          <div
            class="detail-row"
            v-for="(capability, index) in item.capabilityDescriptions || []"
            :key="`${item.id}-capability-${index}`"
          >
            <div class="label">{{ local.capabilitiesTitle ?? "—" }}</div>
            <div class="value">{{ capability ?? "—" }}</div>
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
