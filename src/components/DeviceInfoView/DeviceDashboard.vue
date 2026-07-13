<script setup>
import { ref } from 'vue';

import { sendCommand } from "@/api/terminalApi.js"

let deviceInfo = {
  ip: '192.168.0.144',
  name: 'WinRMUser',
  password: 'siteslilqaz1',
  command: '',
}
let command = ref('');
let res = ref('Результат команды:')

async function sendComm(){
  deviceInfo.command = command.value;

  let data = await sendCommand(deviceInfo);

  console.log(data);
}

</script>

<template>
  <p class="section-title">Мониторы</p>
  <div class="input-group">
    <input v-model="command" placeholder="Введите команду..." />
    <button @click="sendComm">Отправить</button>
  </div>

  <div class="device-monitors">
    <div class="monitor-card">{{ res }}</div>
  </div>
  <div class="buttons">
    <button class="danger">Перезапустить</button>
    <button class="violet">Выключить</button>
    <button class="ok">Обновить</button>
    <!-- <button class="info">Удалееный доступ</button> -->
  </div>
</template>

<style scoped>
.section-title {
  color: var(--section-title-color);
  padding-bottom: 1rem;
}

.device-monitors {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.monitor-card {
  height: 14rem;
  width: 14rem;

  background: var(--monitor-bg);
  color: var(--monitor-fg);

  font-size: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem
}

.buttons button {
  font-size: 13px;
  padding: 7px 14px;
  border-radius: 12px;

  color: var(--button-text-color);

  letter-spacing: .2px;
}

.buttons button:hover {
  background: var(--button-hover-bg);
}

.danger {
  border: 1px solid var(--button-danger-border);
  background: var(--button-danger-bg);
}


.violet {
  border: 1px solid var(--button-violet-border);
  background: var(--button-violet-bg);
}


.info {
  border: 1px solid var(--button-info-border);
  background: var(--button-info-bg);
}

.ok {
  border: 1px solid var(--button-ok-border);
  background: var(--button-ok-bg);
}

.input-group {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.input-group input {
  flex: 1;
  padding: 10px 14px;

  border: 1px solid var(--input-border, #444);
  border-radius: 12px;

  background: var(--input-bg, #1f1f1f);
  color: var(--input-text, #fff);

  font-size: 14px;
  outline: none;

  transition: border-color .2s ease,
              box-shadow .2s ease,
              background .2s ease;
}

.input-group input::placeholder {
  color: var(--input-placeholder, #888);
}

.input-group input:focus {
  border-color: var(--button-ok-border);
  box-shadow: 0 0 0 3px rgba(70, 130, 255, 0.15);
}

/* Кнопка отправки */
.input-group button {
  padding: 10px 18px;

  border: 1px solid var(--button-ok-border);
  border-radius: 12px;

  background: var(--button-ok-bg);
  color: var(--button-text-color);

  font-size: 14px;
  font-weight: 500;
  letter-spacing: .2px;

  cursor: pointer;

  transition: background .2s ease,
              transform .15s ease,
              opacity .2s ease;
}

.input-group button:hover {
  background: var(--button-hover-bg);
}

.input-group button:active {
  transform: scale(0.97);
}

.input-group button:disabled {
  opacity: .5;
  cursor: not-allowed;
}

</style>
