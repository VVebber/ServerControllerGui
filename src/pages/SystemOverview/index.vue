<template>
    <Container class="SystemOverviewContainer">
      <!-- Заголовок -->
      <h2 class="pc-title">ПК: Workstation-01</h2>
  
      <!-- Главная информация -->
      <div class="summary">
        <div class="info-card large"><p class="label">IP</p><p class="value">192.168.1.102</p></div>
        <div class="info-card large"><p class="label">OS</p><p class="value">Windows 10 Pro</p></div>
        <div class="info-card large"><p class="label">Статус</p><p class="value online">Online</p></div>
        <div class="info-card large"><p class="label">Uptime</p><p class="value">12:34:56</p></div>
      </div>
  
      <!-- Мониторы и USB -->
      <div class="section">
        <h3>Мониторы / Устройства</h3>
        <div class="monitor-row">
          <div class="monitor">1</div>
          <div class="monitor">2</div>
          <div class="monitor">3</div>
        </div>
        <div class="info-card full">
          <p class="label">USB</p>
          <p class="value">Флешка 16GB, Клавиатура</p>
        </div>
      </div>
  
      <!-- Система + Сеть + Внешние устройства + Пользователи -->
      <div class="section grid-4">
        <div>
          <h3>Система</h3>
          <div class="info-blocks">
            <div class="info-card"><p class="label">Диск C:</p><p class="value">120GB / 50GB свободно</p></div>
            <div class="info-card"><p class="label">Процессор</p><p class="value">Intel i7-12700K</p></div>
            <div class="info-card"><p class="label">Видеокарта</p><p class="value">RTX 3070</p></div>
          </div>
        </div>
  
        <div>
          <h3>Сеть</h3>
          <div class="info-blocks">
            <div class="info-card"><p class="label">MAC</p><p class="value">00:1A:2B:3C:4D:5E</p></div>
            <div class="info-card"><p class="label">Адаптер</p><p class="value">Ethernet</p></div>
            <div class="info-card"><p class="label">Скорость</p><p class="value">1 Gbps</p></div>
          </div>
        </div>
  
        <div>
          <h3>Внешние устройства</h3>
          <div class="info-blocks">
            <div class="info-card"><p class="label">USB</p><p class="value">Флешка 16GB, Клавиатура</p></div>
          </div>
        </div>
  
        <div>
          <h3>Пользователи</h3>
          <ul class="list">
            <li>user1 — Активен</li>
            <li>user2 — Неактивен</li>
          </ul>
        </div>
      </div>
  
      <!-- Программы -->
      <div class="section">
        <h3>Пользователи</h3>
        <ul class="list">
          <li>user1 — Активен</li>
          <li>user2 — Неактивен</li>
        </ul>
      </div>
  
      <!-- Программы -->
      <div class="section">
        <h3>Программы / процессы</h3>
        <ul class="list">
          <li>chrome.exe</li>
          <li>explorer.exe</li>
          <li>discord.exe</li>
          <li>Антивирус: Windows Defender</li>
          <li>Firewall: Включён</li>
        </ul>
      </div>
  
      <!-- Действия -->
      <div class="actions">
        <button class="action-btn restart">Перезагрузить</button>
        <button class="action-btn shutdown">Выключить</button>
        <button class="action-btn remote">Удалённый доступ</button>
        <button class="action-btn ping">Ping</button>
        <button class="action-btn refresh">Обновить</button>
      </div>
    </Container>
  </template>
  
  <script>
  import Container from '@/shared/Conteiner/index.vue'
  export default { components: { Container } }
  </script>
  
  <style scoped>
  .SystemOverviewContainer { display: flex; flex-direction: column; gap: 20px; padding: 20px; background: #f5f5f5; border-radius: 8px; }
  .pc-title { font-size: 24px; font-weight: bold; }
  .section h3 { margin-bottom: 8px; font-size: 18px; font-weight: 600; }
  .summary { display: flex; gap: 15px; flex-wrap: wrap; }
  .info-card { background: #fff; padding: 12px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center; }
  .info-card.large { min-width: 170px; }
  .info-card.full { width: 100%; margin-top: 10px; }
  .label { font-weight: 500; color: #555; }
  .value { font-size: 16px; font-weight: bold; }
  .value.online { color: green; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
  .list { list-style: none; padding: 0; }
  .list li { padding: 6px 12px; background: white; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 5px; }
  .monitor-row { display: flex; gap: 10px; justify-content: center; margin-bottom: 10px; }
  .monitor { width: 90px; height: 90px; background: #333; color: white; display:flex; align-items:center; justify-content:center; border-radius:6px; }
  .actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
  .action-btn { padding: 10px 20px; border-radius:6px; color:#fff; border:none; cursor:pointer; }
  .action-btn.restart { background:#e74c3c; }
  .action-btn.shutdown{ background:#8e44ad; }
  .action-btn.remote{ background:#3498db; }
  .action-btn.ping{ background:#f39c12; }
  .action-btn.refresh{ background:#2ecc71; }
  </style>
  