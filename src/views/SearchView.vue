<script>
import OsFilters from '@/components/SearchView/OsFilters.vue'
import StatusFliters from '@/components/SearchView/StatusFilter.vue'
import CidrFilter from '@/components/SearchView/CidrFilter.vue'

import DeviceCard from '@/components/SearchView/DeviceCard.vue'
import { searchDevices } from '@/api/search.api'

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
        protocol: [],
      },
      devices: [],
      total: 0,
      totalPages: 1,

      page: 1,
    }
  },
  methods: {
    async fetchDevices() {
      const res = await searchDevices(this.filters, this.page, 7)

      this.devices = res.items
      this.total = res.total
      this.totalPages = res.totalPages
    },

    upsertFilters(arr, value) {
      const index = arr.indexOf(value)

      if (index === -1) {
        arr.push(value)
      } else {
        arr.splice(index, 1)
      }

      this.fetchDevices()
    },

    onOsFilter(value) {
      this.upsertFilters(this.filters.os, value)
    },

    onStatusFilter(value) {
      this.upsertFilters(this.filters.status, value)
    },

    onCidrFilter(value) {
      this.upsertFilters(this.filters.cidr, value)
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++
        this.fetchDevices()
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--
        this.fetchDevices()
      }
    },
  },
  async mounted() {
    this.fetchDevices()
  },
}
</script>

<template>
  <section>
    <div class="search-layout">
      <div>
        <div class="dark-card header-padding">
          <p class="page-overline">Поиск устройств</p>
        </div>

        <div class="dark-card">
          <div class="flex-between-start">
            <p>Результаты поиска</p>
            <span class="status">{{ total }} устройства</span>
          </div>

          <div class="device-list" v-if="devices">
            <DeviceCard v-for="item in devices" :key="item" :deviceData="item" />
          </div>

          <div class="pagination">
            <button class="page-btn" @click="prevPage" :disabled="page === 1">← Назад</button>

            <span class="page-info"> {{ page }} / {{ totalPages }} </span>

            <button class="page-btn" @click="nextPage" :disabled="page === totalPages">
              Вперёд →
            </button>
          </div>
        </div>
      </div>

      <aside class="search-sidebar">
        <div class="dark-card">
          <StatusFliters @update:statusFliter="onStatusFilter" />
        </div>

        <div class="dark-card">
          <OsFilters @update:OsFliter="onOsFilter" />
        </div>

        <div class="dark-card">
          <p>Протокол</p>
        </div>

        <div class="dark-card">
          <CidrFilter @update:cidrFlitter="onCidrFilter" />
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.header-padding {
  padding: 0.5rem 1rem;
}

.search-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 1rem;
}

.page-overline {
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  color: #93c5fd;
  text-transform: uppercase;
}

.device-list {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}

.search-sidebar {
  display: flex;
  flex-direction: column;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.page-btn {
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #334155;
  background: rgba(15, 23, 42, 0.6);
  color: #cbd5e1;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

/* hover */
.page-btn:hover:not(:disabled) {
  border-color: #60a5fa;
  color: #60a5fa;
  background: rgba(37, 99, 235, 0.1);
}

/* active (нажатие) */
.page-btn:active:not(:disabled) {
  transform: scale(0.96);
}

/* disabled */
.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* текст страницы */
.page-info {
  font-size: 0.8rem;
  color: #94a3b8;
}
</style>
