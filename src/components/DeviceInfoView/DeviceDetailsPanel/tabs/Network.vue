<template>
  <div class="system-card">
    <div class="os-block">
      <h2 class="os-title">Сеть</h2>

      <div class="kv-list">
        <div class="kv-row">
          <p class="kv-key">IPv4:</p>
          <p class="kv-val">192.168.1.15</p>
        </div>

        <div class="kv-row">
          <p class="kv-key">MAC:</p>
          <p class="kv-val">52:54:00:12:34:56</p>
        </div>

        <div class="kv-row">
          <p class="kv-key">Интерфейс:</p>
          <p class="kv-val">Ethernet 0</p>
        </div>

        <div class="kv-row">
          <p class="kv-key">DHCP:</p>
          <p class="kv-val">Включен</p>
        </div>

        <div class="kv-row">
          <p class="kv-key">Шлюз:</p>
          <p class="kv-val">192.168.1.1</p>
        </div>

        <div class="kv-row">
          <p class="kv-key">DNS:</p>
          <p class="kv-val">8.8.8.8, 1.1.1.1</p>
        </div>

        <div class="kv-row">
          <p class="kv-key">Маска:</p>
          <p class="kv-val">255.255.255.0</p>
        </div>

        <div class="kv-row">
          <p class="kv-key">Скорость:</p>
          <p class="kv-val">1 Gbps</p>
        </div>

        <div class="kv-row">
          <p class="kv-key">Статус:</p>
          <p class="kv-val ok">UP</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.system-card {}

.os-block {
  padding: 14px 12px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 14px;
}

.kv-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.kv-row {
  display: grid;
  grid-template-columns: 120px 1fr;

  padding: 6px 10px;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.kv-row:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.07);
}

.kv-key {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.1px;
}

.kv-val {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.92);
  text-align: right;
  overflow-wrap: anywhere;
}

.ok {
  color: rgba(120, 255, 170, 0.95);
}

.os-title {
  margin: 0 0 10px 0;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.94);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}
</style>
