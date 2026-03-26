<script>
import { getDeviceUserAccount } from "@/api/deviceUserAccount.api"

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
      userData: null
    }
  },

  async mounted() {
    this.userData = await getDeviceUserAccount(this.ipv4)
  },

  methods: {
    formatBoolean(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.yes ?? "Да") : (this.local.no ?? "Нет")
    },

    formatAccountType(value) {
      const map = {
        512: this.local.user ?? "Пользователь"
      }

      return map[value] ?? value ?? "—"
    },

    formatStatus(item) {
      if (item.lockout) return this.local.locked ?? "Заблокирована"
      if (item.disabled) return this.local.disabled ?? "Отключена"
      return this.local.enabled ?? "Активна"
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="userData && userData.length">
      <div class="card-block" v-for="item in userData" :key="item.id">

        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.name ?? "—" }}</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            {{ formatStatus(item) }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.fullName ?? "—" }}</span>
            <strong>{{ item.fullName ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.domain ?? "—" }}</span>
            <strong>{{ item.domain ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.accountType ?? "—" }}</span>
            <strong>{{ formatAccountType(item.accountType) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.sid ?? "—" }}</span>
            <strong>{{ item.sid ?? "—" }}</strong>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.passwordRequired ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.passwordRequired) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.passwordChangeable ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.passwordChangeable) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.passwordExpires ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.passwordExpires) }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.lockout ?? "—" }}</div>
            <div class="value">{{ formatBoolean(item.lockout) }}</div>
          </div>
        </div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.descriptionLabel ?? "—" }}</div>
            <div class="value">{{ item.description ?? "—" }}</div>
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
