<script>

import OsFilters from '@/components/SearchView/OsFilters.vue'
import StatusFliters from '@/components/SearchView/StatusFilter.vue'
import CidrFilter from '@/components/SearchView/CidrFilter.vue'

import DeviceCard from '@/components/SearchView/DeviceCard.vue'
import { searchDevices } from '@/api/search.api';


export default {
  name: 'SearchView',
  components: { OsFilters, StatusFliters, CidrFilter, DeviceCard },
  data() {
    return {
      protocolItems: ['ICMP', 'ARP', 'SNMP', 'WinRM', 'SSH'],
      filters: {
        status: [],
        os: [],
        cidr: [],
        protocol: []
      },
      devices: []
    }
  },
  methods: {
    async fetchDevices() {
      this.devices = await searchDevices(this.filters)
    },

    upsertFilters(arr, value) {
      const index = arr.indexOf(value)

      if (index === -1) {
        arr.push(value)
      } else {
        arr.splice(index, 1)
      }
    },

    onOsFilter(value) {
      this.upsertFilters(this.filters.os, value)
    },
    onStatusFilter(value) {
      this.upsertFilters(this.filters.status, value)
    }
  },
  async mounted() {
    this.fetchDevices();
  }
}

</script>

<template>
  <section>
    <div class="search-layout">
      <div class="search-main">

        <div class="page-intro dark-card">
          <p class="page-overline">Поиск устройств</p>
        </div>

        <div class="results-block dark-card">
          <div class="results-head">
            <p class="results-title">Результаты поиска</p>
            <span class="status">4 устройства</span>
          </div>

          <div class="device-list">
            <DeviceCard v-for="item in devices" :key="item.device_id" />
          </div>

          {{ devices }}
        </div>
      </div>

      <aside class="search-sidebar">
        {{ filters.status }}
        {{ filters.os }}
        <div class=" dark-card">
          <StatusFliters @update:statusFliter="onStatusFilter" />
        </div>

        <div class="dark-card">
          <OsFilters @update:OsFliter="onOsFilter" />
        </div>

        <div class="dark-card">
          <p class="sidebar-title">Протокол</p>
          <label v-for="item in protocolItems" :key="item" class="check-row">
            <input type="checkbox" />
            <span>{{ item }}</span>
          </label>
        </div>

        <div class=" dark-card">
          <CidrFilter />
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.search-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 1rem;
  align-items: start;
}

.search-main {
  min-width: 0;
}

.page-intro {
  margin-top: 0;
}

.page-overline {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #93c5fd;
  margin-bottom: 0.5rem;
}

.page-title {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.96);
  margin-bottom: 0.5rem;
}

.page-subtitle,
.results-note {
  color: rgba(255, 255, 255, 0.64);
  line-height: 1.55;
}

.search-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-fields {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.field-group--wide {
  grid-column: span 1;
}

.field-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.72);
}

.field-group input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.92);
  padding: 0.9rem 1rem;
  outline: none;
}

.field-group input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.search-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.action-button {
  padding: 0.8rem 1.1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.88);
  cursor: pointer;
  transition: 0.18s ease;
}

.action-button:hover {
  background: var(--button-bg-hover);
}

.action-button--primary {
  background: linear-gradient(180deg, rgba(80, 120, 255, 0.28), rgba(80, 120, 255, 0.16));
  border-color: rgba(80, 120, 255, 0.45);
}

.results-head,
.device-card__head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
}

.results-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.3rem;
}

.device-list {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}

.device-card {
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.device-name {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.25rem;
}

.device-meta,
.device-description {
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;
}

.device-description {
  margin: 0.75rem 0;
}

.device-badge {
  white-space: nowrap;
  border-radius: 999px;
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(59, 130, 246, 0.14);
  color: #bfdbfe;
}

.device-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.device-tags span {
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.72);
}

.search-sidebar {
  display: flex;
  flex-direction: column;
  /* gap: 0.1rem; */
}

.sidebar-card {
  margin: 0;
}

.sidebar-title {
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 0.9rem;
}

.sidebar-list {
  list-style: none;
}

.sidebar-list--links li+li {
  margin-top: 0.65rem;
}

.sidebar-list--links a {
  color: #93c5fd;
}

.check-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.74);
}

.check-row+.check-row {
  margin-top: 0.7rem;
}

.check-row input {
  accent-color: #60a5fa;
}

@media (max-width: 1100px) {
  .search-layout {
    grid-template-columns: 1fr;
  }

  .search-sidebar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
}

@media (max-width: 768px) {
  .search-fields {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 1.6rem;
  }

  .results-head,
  .device-card__head {
    flex-direction: column;
  }
}
</style>
