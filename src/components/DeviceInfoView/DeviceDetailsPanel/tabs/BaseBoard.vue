<script>
import { getDeviceBaceBoard } from "@/api/devceBaceBoard.api"

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
      baseBoardData: null
    }
  },

  async mounted() {
    this.baseBoardData = await getDeviceBaceBoard(this.ipv4)
  },

  computed: {
    poweredOnText() {
      return this.formatBoolean(this.baseBoardData?.poweredOn)
    },

    hostingBoardText() {
      return this.formatBoolean(this.baseBoardData?.hostingBoard)
    },

    hotSwappableText() {
      return this.formatBoolean(this.baseBoardData?.hotSwappable)
    },

    removableText() {
      return this.formatBoolean(this.baseBoardData?.removable)
    },

    replaceableText() {
      return this.formatBoolean(this.baseBoardData?.replaceable)
    },

    requiresDaughterBoardText() {
      return this.formatBoolean(this.baseBoardData?.requiresDaughterBoard)
    }
  },

  methods: {
    formatBoolean(value) {
      if (value === null || value === undefined) return "—"
      return value ? (this.local.yes ?? "Да") : (this.local.no ?? "Нет")
    }
  }
}
</script>

<template>
  <div class="system-card">
    <div v-if="baseBoardData" class="card-block">
      <div class="card-header">
        <h2>{{ baseBoardData.product ?? baseBoardData.name ?? "—" }}</h2>
        <p class="section-title">{{ local.description ?? "—" }}</p>
      </div>

      <div class="main-info">
        <div class="info-box">
          <span>{{ local.manufacturer ?? "—" }}</span>
          <strong>{{ baseBoardData.manufacturer ?? "—" }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.version ?? "—" }}</span>
          <strong>{{ baseBoardData.version ?? "—" }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.serialNumber ?? "—" }}</span>
          <strong>{{ baseBoardData.serialNumber ?? "—" }}</strong>
        </div>

        <div class="info-box">
          <span>{{ local.tag ?? "—" }}</span>
          <strong>{{ baseBoardData.tag ?? "—" }}</strong>
        </div>
      </div>

      <div class="section-title">{{ local.sectionTitle ?? "—" }}</div>

      <div class="main-info">
        <div class="detail-row">
          <div class="label">{{ local.poweredOn ?? "—" }}</div>
          <div class="value">{{ poweredOnText }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.hostingBoard ?? "—" }}</div>
          <div class="value">{{ hostingBoardText }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.hotSwappable ?? "—" }}</div>
          <div class="value">{{ hotSwappableText }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.removable ?? "—" }}</div>
          <div class="value">{{ removableText }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.replaceable ?? "—" }}</div>
          <div class="value">{{ replaceableText }}</div>
        </div>

        <div class="detail-row">
          <div class="label">{{ local.requiresDaughterBoard ?? "—" }}</div>
          <div class="value">{{ requiresDaughterBoardText }}</div>
        </div>
      </div>

      <div class="details">

        <div class="detail-row">
          <div class="label">{{ local.descriptionLabel ?? "—" }}</div>
          <div class="value">{{ baseBoardData.description ?? "—" }}</div>
        </div>
      </div>

      <div class="footer-dates">
          <div> {{ local.product ?? "—" }}:
            {{ baseBoardData.product ?? "—" }}</div>

          <div>{{ local.status ?? "—" }}:
            {{ baseBoardData.status ?? local.ok ?? "OK" }}</div>
      </div>
    </div>

    <p v-else class="empty-state">
      Данные отсутствуют или загружаются
    </p>
  </div>
</template>

<style scoped src="./tabStyles.css"></style>
