<script>
import { getDeviceBios } from "@/api/deviceBios.api"

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
      biosData: null
    }
  },

  async mounted() {
    this.biosData = await getDeviceBios(this.ipv4)
  },

  computed: {
    formattedReleaseDate() {
      return this.formatDate(this.biosData?.releaseDate)
    },
  },

  methods: {
    formatDate(value) {
      if (!value) return "—"

      const date = new Date(value)
      if (Number.isNaN(date.getTime())) return value

      return date.toLocaleString("ru-RU")
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div class="card-block" v-if="biosData">
      <div class="flex-between-start">
        <div class="card-header">
          <h2>BUOS {{ biosData.smbiosVersion ?? "—" }}</h2>
          <p class="section-title">{{ local.description ?? "—" }}</p>
        </div>
        <div class="status">
          ???
        </div>
      </div>

      <div class="main-info">
        <div class="info-box">
          <span>{{ local.manufacturer ?? "—" }}</span>
          <strong>{{ biosData.manufacturer ?? "—" }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.version ?? "—" }}</span>
          <strong>{{ biosData.version ?? "—" }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.smbios ?? "—" }}</span>
          <strong>{{ biosData.smbiosVersion ?? "—" }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.release ?? "—" }}</span>
          <strong>{{ formattedReleaseDate }}</strong>
        </div>
      </div>

      <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

      <div class="details">
        <div class="detail-row">
          <div class="label">{{ local.serialNumber ?? "—" }}</div>
          <div class="value">{{ biosData.serialNumber ?? "—" }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.name ?? "—" }}</div>
          <div class="value">{{ biosData.name ?? "—" }}</div>
        </div>
      </div>

    </div>

    <p v-else class="empty-state">
      Данные отсутствуют или загружаются
    </p>
  </div>
</template>

<style scoped src="./tabStyles.css"></style>
