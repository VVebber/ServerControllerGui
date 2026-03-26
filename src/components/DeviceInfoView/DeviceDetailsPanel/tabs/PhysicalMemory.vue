<script>
import { getDevicePhysicalMemory } from "@/api/devicePhysicalMemory.api"

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
      ramData: null
    }
  },

  async mounted() {
    this.ramData = await getDevicePhysicalMemory(this.ipv4)
  },

  methods: {
    formatCapacity(value) {
      const bytes = Number(value)
      if (!bytes) return "—"

      const gb = bytes / 1024 / 1024 / 1024
      return `${gb.toFixed(0)} GB`
    },

    formatMemoryType(type) {
      const map = {
        26: "DDR4"
      }

      return map[type] ?? "—"
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="ramData && ramData.length">
      <div class="card-block" v-for="item in ramData" :key="item.id">

        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.tag ?? "—" }}</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            {{ formatCapacity(item.capacity) }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.manufacturer ?? "—" }}</span>
            <strong>{{ item.manufacturer ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.memoryType ?? "—" }}</span>
            <strong>{{ formatMemoryType(item.smbiosMemoryType) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.speed ?? "—" }}</span>
            <strong>{{ item.speed ?? "—" }} MHz</strong>
          </div>

          <div class="info-box">
            <span>{{ local.configuredSpeed ?? "—" }}</span>
            <strong>{{ item.configuredClockSpeed ?? "—" }} MHz</strong>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.deviceLocator ?? "—" }}</div>
            <div class="value">{{ item.deviceLocator ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.serialNumber ?? "—" }}</div>
            <div class="value">{{ item.serialNumber ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.partNumber ?? "—" }}</div>
            <div class="value">{{ item.partNumber ?? "—" }}</div>
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
