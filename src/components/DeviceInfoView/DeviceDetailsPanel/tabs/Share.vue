<script>
import { getDeviceShare } from "@/api/deviceShare.api"

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
      shareData: null
    }
  },

  async mounted() {
    this.shareData = await getDeviceShare(this.ipv4)
  },

  methods: {
    formatType(value) {
      const map = {
        0: "Disk Drive",
        1: "Print Queue",
        2: "Device",
        3: "IPC"
      }

      return map[value] ?? map[Number(value)] ?? "—"
    },

    formatAllowMaximum(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.yes ?? "Да") : (this.local.no ?? "Нет")
    },

    formatMaximumAllowed(value, allowMaximum) {
      if (allowMaximum === true && (value === null || value === undefined)) {
        return this.local.unlimited ?? "Без ограничений"
      }

      if (value === null || value === undefined || value === "") return "—"

      return value
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="shareData && shareData.length">
      <div class="card-block" v-for="item in shareData" :key="item.id">

        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.name ?? "—" }}</h2>
            <p class="section-title">{{ item.path ?? "—" }}</p>
          </div>

          <div class="status">
            {{ item.status ?? "—" }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.type ?? "—" }}</span>
            <strong>{{ formatType(item.type) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.usersLimit ?? "—" }}</span>
            <strong>{{ local.unlimited ?? "Без ограничений" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.allowMaximum ?? "—" }}</span>
            <strong>{{ formatAllowMaximum(item.allowMaximum) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.maximumAllowed ?? "—" }}</span>
            <strong>{{ formatMaximumAllowed(item.maximumAllowed, item.allowMaximum) }}</strong>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.caption ?? "—" }}</div>
            <div class="value">{{ item.caption ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.shareDescription ?? "—" }}</div>
            <div class="value">{{ item.description ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.path ?? "—" }}</div>
            <div class="value">{{ item.path ?? "—" }}</div>
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
