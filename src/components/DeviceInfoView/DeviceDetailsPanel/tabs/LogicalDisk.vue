<script>
import { getDeviceLogicalDisk } from "@/api/deviceLogicalDisk.api"

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
    this.diskData = await getDeviceLogicalDisk(this.ipv4)
  },

  methods: {
    formatBytesToGb(value) {
      const bytes = Number(value)
      if (!bytes) return "—"

      const gb = bytes / 1024 / 1024 / 1024
      return `${gb.toFixed(0)} GB`
    },

    formatBoolean(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.yes ?? "Да") : (this.local.no ?? "Нет")
    },

    getUsedSpace(size, freeSpace) {
      const total = Number(size)
      const free = Number(freeSpace)

      if (!total || free === null || free === undefined || Number.isNaN(free)) {
        return "—"
      }

      const used = total - free
      if (used < 0) return "—"

      return this.formatBytesToGb(used)
    },

    getUsagePercent(size, freeSpace) {
      const total = Number(size)
      const free = Number(freeSpace)

      if (!total || free === null || free === undefined || Number.isNaN(free)) {
        return 0
      }

      const used = total - free
      const percent = Math.round((used / total) * 100)

      return Math.max(0, Math.min(percent, 100))
    },

    formatDriveType(value) {
      const map = {
        0: "Unknown",
        1: "No Root Directory",
        2: "Removable Disk",
        3: "Fixed Disk",
        4: "Network Drive",
        5: "Compact Disc",
        6: "RAM Disk"
      }

      return map[value] ?? "—"
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
            <h2> Local Disk ({{ item.deviceDiskId ?? "—" }})</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            {{ item.fileSystem ?? "—" }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.volumeName ?? "—" }}</span>
            <strong>{{ item.volumeName ?? item.deviceDiskId ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.driveType ?? "—" }}</span>
            <strong>{{ formatDriveType(item.driveType) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.diskId ?? "—" }}</span>
            <strong>{{ item.deviceId ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.serialNumber ?? "—" }}</span>
            <strong>{{ item.volumeSerialNumber ?? "—" }}</strong>
          </div>
        </div>

        <div class="section-title">{{ local.usageTitle ?? "—" }}</div>

        <div class="progress-container">
          <div class="progress-head">
            <span>{{ local.usageTitle ?? "—" }}</span>
            <span>{{ getUsagePercent(item.size, item.freeSpace) }}%</span>
          </div>

          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{ width: getUsagePercent(item.size, item.freeSpace) + '%' }"
            ></div>
          </div>
        </div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.totalSize ?? "—" }}</div>
            <div class="value">{{ formatBytesToGb(item.size) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.freeSpace ?? "—" }}</div>
            <div class="value">{{ formatBytesToGb(item.freeSpace) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.usedSpace ?? "—" }}</div>
            <div class="value">{{ getUsedSpace(item.size, item.freeSpace) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.fileSystem ?? "—" }}</div>
            <div class="value">{{ item.fileSystem ?? "—" }}</div>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.compressed ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.compressed) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.supportsDiskQuotas ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.supportsDiskQuotas) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.supportsFileBasedCompression ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.supportsFileBasedCompression) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.volumeDirty ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.volumeDirty) }}</div>
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
