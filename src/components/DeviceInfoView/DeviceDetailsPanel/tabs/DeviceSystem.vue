<script>
import { getDeviceSystem } from "@/api/deviceSystem.api"

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
      systemData: null
    }
  },

  async mounted() {
    this.systemData = await getDeviceSystem(this.ipv4)
  },
  computed: {
    formattedMemory() {
      const memory = Number(this.systemData?.totalPhysicalMemory)

      if (!memory) return "—"

      const gb = memory / 1024 / 1024 / 1024
      return `${gb.toFixed(1)} GB`
    },
    partOfDomainText() {
      if (this.systemData?.partOfDomain === null || this.systemData?.partOfDomain === undefined) {
        return "—"
      }

      return this.systemData.partOfDomain ? "Да" :  "Нет"
    },
    hypervisorText() {
      if (this.systemData?.hypervisorPresent === null || this.systemData?.hypervisorPresent === undefined) {
        return "—"
      }

      return this.systemData.hypervisorPresent ? "Да" :  "Нет"
    },
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="systemData" class="card-block">
      <div class="card-header">
          <h2>{{ systemData.model ?? "—" }}</h2>
          <p class="section-title">{{ local.description ?? "—" }}</p>
      </div>

      <div class="main-info">
        <div class="info-box">
          <span>{{ local.manufacturer ?? "—" }}</span>
          <strong>{{ systemData.manufacturer ?? "—" }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.systemType ?? "—" }}</span>
          <strong>{{ systemData.systemType ?? "—" }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.processors ?? "—" }}</span>
          <strong>{{ systemData.numberOfProcessors ?? "—" }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.logicalCores ?? "—" }}</span>
          <strong>{{ systemData.numberOfLogicalProcessors ?? "—" }}</strong>
        </div>
      </div>

      <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

      <div class="details">
        <div class="detail-row">
          <div class="label">{{ local.memory ?? "—" }}</div>
          <div class="value">{{ formattedMemory }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.dnsHostname ?? "—" }}</div>
          <div class="value">{{ systemData.dnsHostName ?? "—" }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.primaryOwner ?? "—" }}</div>
          <div class="value">{{ systemData.primaryOwnerName ?? "—" }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.caption ?? "—" }}</div>
          <div class="value">{{ systemData.caption ?? "—" }}</div>
        </div>
      </div>

      <div class="section-title">{{ local.networkSectionTitle ?? "—" }}</div>

      <div class="details">
        <div class="detail-row">
          <div class="label">{{ local.domain ?? "—" }}</div>
          <div class="value">{{ systemData.domain ?? "—" }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.workgroup ?? "—" }}</div>
          <div class="value">{{ systemData.workgroup ?? "—" }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.partOfDomain ?? "—" }}</div>
          <div class="value">{{ partOfDomainText }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.hypervisor ?? "—" }}</div>
          <div class="value">{{ hypervisorText }}</div>
        </div>
      </div>

    </div>

    <p v-else class="empty-state">
      Данные отсутствуют или загружаются
    </p>
  </div>
</template>

<style scoped src="./tabStyles.css"></style>
