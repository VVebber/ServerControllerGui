<script>
  export default {
    props: {
      deviceData: Object
    }
  }


</script>

<template>
  <div class="device-card">
  <div class="device-card__icon">🖥</div>

  <div>
    <div class="device-card__title">WORKSTATION-01</div>
    <div class="device-card__meta">
      <span>{{ deviceData.ipv4 }}</span>
      <span>Windows 11</span>
      <span>00:1A:2B:3C:4D:5E</span>
    </div>
  </div>

  <div class="device-card__side">
    <span class="device-badge">Онлайн</span>
    <button class="device-btn">Подробнее</button>
  </div>
</div>
</template>

<style scoped>
.device-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.2rem;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(21, 27, 38, 0.96), rgba(15, 20, 30, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
  transition: transform 0.18s ease, border-color 0.18s ease;
}

.device-btn {
  padding: 0.35rem 0.8rem;
  border-radius: 10px;
  border: 1px solid rgba(120, 170, 255, 0.25);
  background: rgba(120, 170, 255, 0.08);
  color: #dbe7ff;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.18s ease;
}

.device-btn:hover {
  background: rgba(120, 170, 255, 0.18);
  border-color: rgba(120, 170, 255, 0.4);
  color: #ffffff;
}

.device-btn:active {
  transform: scale(0.97);
}

.device-card:hover {
  transform: translateY(-2px);
  border-color: rgba(120, 170, 255, 0.22);
}

.device-card__icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.04);
}

.device-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: #f5f7fb;
}

.device-card__meta {
  margin-top: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.8rem;
  color: rgba(220, 228, 240, 0.7);
  font-size: 0.9rem;
}

.device-card__side {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.device-badge {
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  background: rgba(70, 190, 120, 0.14);
  color: #8df0af;
}
</style>
