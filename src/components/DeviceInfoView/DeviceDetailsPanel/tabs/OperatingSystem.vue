<script>
import { getDeviceOS } from "@/api/deviceOS.api"

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
      osDate: null
    }
  },

  async mounted() {
    this.osDate = await getDeviceOS(this.ipv4);
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="osDate && osDate.length">
      <div class="card-block" v-for="item in osDate" :key="item.id">
        <div class="card-header">
          <h2>{{ item.caption ?? "—" }}</h2>
          <p class="section-title">{{ local.description ?? "—" }}</p>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.version ?? "—" }}</span>
            <strong>{{ item.version ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.architecture ?? "—" }}</span>
            <strong>{{ item.architecture ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.hostname ?? "—" }}</span>
            <strong>{{ item.hostname ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.build ?? "—" }}</span>
            <strong>{{ item.buildNumber ?? "—" }}</strong>
          </div>
        </div>

        <p class="section-title">{{ local.sectionTitle ?? "—" }}</p>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.manufacturer ?? "—" }}</div>
            <div class="value">{{ item.manufacturer ?? "—" }}</div>
          </div>
          <div class="detail-row">
            <div class="label">{{ local.serialNumber ?? "—" }}</div>
            <div class="value">{{ item.serialNumber ?? "—" }}</div>
          </div>
          <div class="detail-row">
            <div class="label">{{ local.systemDrive ?? "—" }}</div>
            <div class="value">{{ item.systemDrive ?? "—" }}</div>
          </div>
          <div class="detail-row">
            <div class="label">{{ local.windowsDirectory ?? "—" }}</div>
            <div class="value">{{ item.windowsDirectory ?? "—" }}</div>
          </div>
        </div>

        <div class="footer-time">
          <div class="footer-time-box">
            <span>{{ local.installDate ?? "—" }}</span>
            <strong>{{ item.installDate ?? "—" }}</strong>
          </div>
          <div class="footer-time-box">
            <span>{{ local.lastBootTime ?? "—" }}</span>
            <strong>{{ item.lastBootTime ?? "—" }}</strong>
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
