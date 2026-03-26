<script>
import { getDeviceProcessor } from "@/api/deviceProcessor.api"

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
      processorData: null
    }
  },

  async mounted() {
    this.processorData = await getDeviceProcessor(this.ipv4)
  },
}
</script>

<template>
  <div class="system-card">
    <div v-if="processorData && processorData.length">
      <div class="card-block" v-for="item in processorData" :key="item.id">

        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.name ?? "—" }}</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            Load
            {{ item.loadPercentage ?? "—" }}%
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.manufacturer ?? "—" }}</span>
            <strong>{{ item.manufacturer ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.socket ?? "—" }}</span>
            <strong>{{ item.socketDesignation ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.maxClockSpeed ?? "—" }}</span>
            <strong>{{ item.maxClockSpeed ?? "—" }} MHz</strong>
          </div>

          <div class="info-box">
            <span>{{ local.currentClockSpeed ?? "—" }}</span>
            <strong>{{ item.currentClockSpeed ?? "—" }} MHz</strong>
          </div>
        </div>

        <div class="section-title">{{ local.loadSectionTitle ?? "—" }}</div>

        <div class="progress-container">
          <div class="progress-head">
            <span>Текущая загрузка CPU</span>
            <span>42 / 100</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: (item.loadPercentage ?? 0) + '%' }"></div>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.cores ?? "—" }}</div>
            <div class="value">{{ item.numberOfCores ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.logicalProcessors ?? "—" }}</div>
            <div class="value">{{ item.numberOfLogicalProcessors ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.threadCount ?? "—" }}</div>
            <div class="value">{{ item.threadCount ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.architecture ?? "—" }}</div>
            <div class="value">{{ item.architecture ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.addressWidth ?? "—" }}</div>
            <div class="value">{{ item.addressWidth ?? "—" }}-bit</div>
          </div>
        </div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.virtualization ?? "—" }}</div>
            <div class="value">
              {{ item.virtualizationFirmwareEnabled ? (local.yes ?? "Да") : (local.no ?? "Нет") }}
            </div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.vmMonitorModeExtensions ?? "—" }}</div>
            <div class="value">
              {{ item.vmMonitorModeExtensions ? (local.yes ?? "Да") : (local.no ?? "Нет") }}
            </div>
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
