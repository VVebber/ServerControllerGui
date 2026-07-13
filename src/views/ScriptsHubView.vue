<script>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue'

import Upload from '@/components/ScriptsHubView/Upload.vue'
import Tutorial from '@/components/ScriptsHubView/Tutorial.vue'

export default {
  components: { Upload, Tutorial },
  setup() {
    const { tm } = useI18n({ useScope: 'global' });
    const groupsTutorials = tm("ScriptsHub.tutorials")
    const groupsOS = tm("ScriptsHub.os");


    const activeBtn = ref(Object.keys(groupsOS)[0]);

    return {
      groupsTutorials,
      groupsOS,
      activeBtn
    };
  }
}
</script>

<template>
  <section>
    <div class="scripts-container">
      <div class="scripts-column">
        <div class="dark-card tab-list">
          <button v-for="item, key, index in groupsOS" :key="index" :class="{ active: activeBtn === key }"
            @click="activeBtn = key">
            {{ item }}
          </button>
        </div>
        <div class="dark-card tutorials">
          <Tutorial v-for='item, index in groupsTutorials' :key="index" :protocol="item" />
        </div>
      </div>
      <div class="side-column">
        <div class="dark-card">
          <Upload />
        </div>
        <div class="dark-card questions">
          <h1>Вопросы и проблемы</h1>

          <div class="question-item">
            <h3>1. Устройство не отвечает на ICMP</h3>
            <p>Проверьте доступность хоста, настройки firewall и корректность IP-адреса.</p>
          </div>

          <div class="question-item">
            <h3>2. Ошибка подключения по WinRM</h3>
            <p>Убедитесь, что служба WinRM запущена и используются корректные учетные данные.</p>
          </div>

          <div class="question-item">
            <h3>3. Не удалось получить данные BIOS</h3>
            <p>Проверьте права администратора и доступность WMI.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scripts-container {
  display: flex;
  justify-content: center;

  max-height: 720px;
  height: 100%;

  gap: 1rem;
}

.questions {
  max-width: 350px;
}

.tutorials {
  flex-grow: 1;
}

.scripts-column {
  display: flex;
  flex-direction: column;

  max-width: 600px;
  width: 100%;
}

/* @media (max-width: 1024px) {} */

.side-column {
  display: flex;
  flex-direction: column;
}

.questions {
  flex-grow: 1;
}

.tab-list {
  display: flex;
  justify-content: space-around;

  padding: 0.75rem;
  gap: 0.5rem;
}

.tab-list button {
  flex: 1;

  padding: 0.6rem 1rem;

  background: var(--tab-bg);
  border: 1px solid var(--tab-border);
  border-radius: 10px;

  color: var(--tab-text);
  font-weight: 500;

  cursor: pointer;

  transition: all 0.18s ease;
}

.tab-list button:hover {
  background: var(--tab-hover-bg);
  color: var(--tab-hover-text);
  border-color: var(--tab-hover-border);
}

.tab-list button.active {
  background: var(--tab-active-bg);
  color: var(--tab-active-text);
  border-color: var(--tab-active-border);
  box-shadow: var(--tab-active-shadow);
}

.questions {
  padding: 1.5rem;
}

.questions h1 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--tab-text);
}

.question-item {
  padding: 1rem;

  color: var(--tab-text);

}
</style>
