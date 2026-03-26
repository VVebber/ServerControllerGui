<script>
export default {
  props: {
    status: {
      type: String,
      default: "Warning",
      validator: (value) => {
        return ["Active", "Warning", "Error"].includes(value);
      },
    },
    ipv4: {
      type: String,
      default: "127.0.0.1"
    },
    mac: {
      type: String,
      default: '00:00:00:00:00:00'
    },
    OS: {
      type: String,
      default: 'Unknown'
    }
  }
}
</script>

<template>
  <div class="device-card">
    <div :class="['device-card-status', `device-card-status-${status}`]"></div>

    <div class="device-card-body">
      <div class="device-card-header">
        {{ ipv4 }}
      </div>

      <div class="device-card-table">
        <div class="row">
          <span class="key">MAC</span>
          <span class="value">{{ mac || '—' }}</span>
        </div>
        <div class="row">
          <span class="key">OS</span>
          <span class="value">{{ OS }}</span>
        </div>
      </div>

      <div class="device-card-actions">
        <button>Ping</button>
        <RouterLink :to="{ name: 'deviceInfo', params: { ip: ipv4 } }">Details</RouterLink>
      </div>
    </div>
  </div>

</template>

<style>
.device-card {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background: #1b222a;
  border: 1px solid #242c36;
  transition: transform .15s ease, box-shadow .15s ease;
}

.device-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, .4);
}

.device-card-body {
  margin: 10px;
  flex: 1;
}

.device-card-status {
  width: 6px;
  margin-right: 10px;
}

.device-card-header {
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #e5e7eb;
}

.device-card-table {
  display: grid;
  gap: 6px;
  font-size: 0.85rem;
}

.device-card-table .row {
  display: grid;
  grid-template-columns: 50px 1fr;
}

.device-card-table .key {
  color: #9ca3af;
}

.device-card-table .value {
  color: #e5e7eb;
  font-family: monospace;
  word-break: break-all;
}

.device-card-status-Active {
  background: linear-gradient(180deg, #22c55e, #16a34a);
  box-shadow: 0 0 12px rgba(34, 197, 94, 0.4);
}

.device-card-status-Warning {
  background: linear-gradient(180deg, #f59e0b, #d97706);
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.4);
}

.device-card-status-Error {
  background: linear-gradient(180deg, #ef4444, #dc2626);
  box-shadow: 0 0 12px rgba(239, 68, 68, 0.4);
}

.device-card-actions {
  display: flex;
  gap: 8px;
  margin-top: 0.75rem;
}

.device-card-actions button,
.device-card-actions a {
  flex: 1;
  background: #242c36;
  border: 1px solid #2f3946;
  color: #e5e7eb;
  font-size: 0.75rem;
  padding: 4px 0;
  border-radius: 6px;
  cursor: pointer;

  text-align: center;
}

.device-card-actions button:hover,
.device-card-actions a::hover {
  background: #2f3946;
}
</style>
