<script>

export default {
  props: {
    activeTab: {
      type: String,
      required: true
    }
  },
  emits: ['update:activeTab'],
  data() {
    return {
      groups: [
        {
          key: 'system',
          label: 'Система',
          items: [
            { key: 'operatingSystem', label: 'ОС' },
            { key: 'deviceSystem', label: 'Компьютер' },
            { key: 'bios', label: 'BIOS' },
            { key: 'baseBoard', label: 'Плата' },
            { key: 'computerSystemProduct', label: 'Устройство' },
            { key: 'pagefileUsage', label: 'Файл подкачки' }
          ]
        },
        {
          key: 'hardware',
          label: 'Железо',
          items: [
            { key: 'processor', label: 'CPU' },
            { key: 'physicalMemory', label: 'RAM' },
            { key: 'diskDrive', label: 'Диски' },
            { key: 'logicalDisk', label: 'Разделы' },
            { key: 'videoController', label: 'Видео' }
          ]
        },
        {
          key: 'network',
          label: 'Сеть',
          items: [
            { key: 'networkAdapter', label: 'Адаптеры' },
            { key: 'networkAdapterConfiguration', label: 'IP/DNS' }
          ]
        },
        {
          key: 'accounts',
          label: 'Пользователи',
          items: [
            { key: 'userAccount', label: 'Учетки' },
            { key: 'group', label: 'Группы' },
            { key: 'share', label: 'Шары' }
          ]
        }
      ]
    }
  },
  computed: {
    activeGroupKey() {
      const found = this.groups.find(g => g.items.some(i => i.key === this.activeTab))
      return found ? found.key : this.groups[0].key
    },
    activeGroup() {
      return this.groups.find(g => g.key === this.activeGroupKey) || this.groups[0]
    }
  },
  methods: {
    setGroup(groupKey) {
      const group = this.groups.find(g => g.key === groupKey)
      if (!group || group.items.length === 0) return

      this.$emit('update:activeTab', group.items[0].key)
    }
  }
}
</script>

<template>
  <div class="tabs">
    <div class="tab-row tab-row--groups">
      <button v-for="g in groups" :key="g.key" class="tab-btn" :class="{ active: activeGroupKey === g.key }"
        @click="setGroup(g.key)">
        {{ g.label }}
      </button>
    </div>

    <div class="tab-row tab-row--items">
      <button v-for="item in activeGroup.items" :key="item.key" class="tab-btn"
        :class="{ active: activeTab === item.key }" @click="$emit('update:activeTab', item.key)">
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>

.tabs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tab-row {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 2px;
}

.tab-row::-webkit-scrollbar {
  height: 6px;
}

.tab-row::-webkit-scrollbar-track {
  background: transparent;
}

.tab-row::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
}

.tab-row--groups {
  justify-content: flex-start;
}

.tab-row--items {
  justify-content: flex-start;
}

.tab-btn {
  color: rgba(255, 255, 255, 0.85);
  background: none;

  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.16);

  padding: 6px 10px;

  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tab-btn:hover {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.28);
}

.tab-btn.active {
  color: white;
  border-bottom-color: aqua;
}
</style>
