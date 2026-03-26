<script>

</script>

<template>
  <p class="section-title">Мониторы</p>

  <div class="device-monitors">
    <div class="monitor-card">1</div>
  </div>
  <div class="buttons">
    <button class="danger">Перезапустить</button>
    <button class="violet">Выключить</button>
    <button class="ok">Обновить</button>
    <button class="info">Удалееный доступ</button>
  </div>
</template>

<style scoped>
.section-title {
  color: rgba(255, 255, 255, .86);
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

  background: white;

  color: black;
  font-size: 3rem;
  /* border: 2px solid black; */
}

.buttons {
  display: flex;
  gap: 1rem
}

.buttons button {
  font-size: 13px;
  padding: 7px 14px;
  border-radius: 12px;

  color: rgba(255, 255, 255, 0.82);

  letter-spacing: .2px;
}

.buttons button:hover {
  background: rgba(255, 255, 255, .07);
}

.danger {
  border: 1px solid rgba(255, 92, 108, .35);
  background: rgba(255, 92, 108, .12);
}

.danger {
  border-color: rgba(255, 92, 108, .35);
  background: rgba(255, 92, 108, .12);
}

.violet {
  border-color: rgba(179, 107, 255, .35);
  background: rgba(179, 107, 255, .12);
}

.info {
  border-color: rgba(74, 163, 255, .35);
  background: rgba(74, 163, 255, .12);
}

.ok {
  border-color: rgba(39, 194, 122, .35);
  background: rgba(39, 194, 122, .12);
}
</style>
