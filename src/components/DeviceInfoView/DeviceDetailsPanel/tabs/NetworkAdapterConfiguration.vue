<script>
import { getDeviceNetworkAdapterConfig } from "@/api/deviceNetworkAdapterConfig.api"

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
      networkConfigData: null
    }
  },

  async mounted() {
    this.networkConfigData = await getDeviceNetworkAdapterConfig(this.ipv4)
  },

  methods: {
    formatBoolean(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.yes ?? "Да") : (this.local.no ?? "Нет")
    },

    formatStatus(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.enabled ?? "Включено") : (this.local.disabled ?? "Выключено")
    },

    formatArray(value) {
      if (!value) return "—"
      if (Array.isArray(value)) {
        return value.length ? value.join(", ") : "—"
      }
      return value
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="networkConfigData && networkConfigData.length">
      <div class="card-block" v-for="item in networkConfigData" :key="item.id">

        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.description ?? "—" }}</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            {{ formatStatus(item.ipEnabled) }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.macAddress ?? "—" }}</span>
            <strong>{{ item.macAddress ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.serviceName ?? "—" }}</span>
            <strong>{{ item.serviceName ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.dnsHostName ?? "—" }}</span>
            <strong>{{ item.dnsHostName ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.dhcpServer ?? "—" }}</span>
            <strong>{{ item.dhcpServer ?? "—" }}</strong>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.ipAddress ?? "—" }}</div>
            <div class="value">{{ formatArray(item.ipAddress) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.ipSubnet ?? "—" }}</div>
            <div class="value">{{ formatArray(item.ipSubnet) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.defaultIpGateway ?? "—" }}</div>
            <div class="value">{{ formatArray(item.defaultIpGateway) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.dnsServerSearchOrder ?? "—" }}</div>
            <div class="value">{{ formatArray(item.dnsServerSearchOrder) }}</div>
          </div>
        </div>

        <div class="section-title">{{ local.optionsTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.dhcpEnabled ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.dhcpEnabled) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.fullDnsRegistrationEnabled ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.fullDnsRegistrationEnabled) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.domainDnsRegistrationEnabled ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.domainDnsRegistrationEnabled) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.ipActive ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.ipEnabled) }}</div>
          </div>
        </div>

      </div>
    </div>

    <p v-else class="empty-state">
      Данные отсутствуют или загружаются  {{ local ?? "not" }}
    </p>
  </div>
</template>

<style scoped src="./tabStyles.css"></style>
