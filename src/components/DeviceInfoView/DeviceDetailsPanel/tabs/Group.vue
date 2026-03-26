<script>
import { getDeviceGroup } from "@/api/deviceGroup.api"

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
      groupData: null
    }
  },

  async mounted() {
    this.groupData = await getDeviceGroup(this.ipv4)
  },

  methods: {
    formatAccountType(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.local ?? "Локальная") : (this.local.domainAccount ?? "Доменная")
    },

    formatSidType(value) {
      const map = {
        1: this.local.user ?? "Пользователь",
        2: this.local.group ?? "Группа",
        4: this.local.alias ?? "Псевдоним"
      }

      return map[value] ?? (this.local.unknown ?? "Неизвестно")
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="groupData && groupData.length">
      <div class="card-block" v-for="item in groupData" :key="item.id">

        <div class="flex-between-start">
          <div class="card-header">
            <h2>{{ item.name ?? "—" }}</h2>
            <p class="section-title">{{ local.description ?? "—" }}</p>
          </div>

          <div class="status">
            {{ formatAccountType(item.localAccount) }}
          </div>
        </div>

        <div class="main-info">
          <div class="info-box">
            <span>{{ local.domain ?? "—" }}</span>
            <strong>{{ item.domain ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.status ?? "—" }}</span>
            <strong>{{ item.status ?? "—" }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.sidType ?? "—" }}</span>
            <strong>{{ formatSidType(item.sidType) }}</strong>
          </div>

          <div class="info-box">
            <span>{{ local.caption ?? "—" }}</span>
            <strong>{{ item.caption ?? "—" }}</strong>
          </div>
        </div>

        <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

        <div class="details">
          <div class="detail-row">
            <div class="label">{{ local.sid ?? "—" }}</div>
            <div class="value">{{ item.sid ?? "—" }}</div>
          </div>

          <div class="detail-row">
            <div class="label">{{ local.accountType ?? "—" }}</div>
            <div class="value">{{ formatAccountType(item.localAccount) }}</div>
          </div>

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
