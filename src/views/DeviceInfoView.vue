<script>
import { getDeviceStatus } from "@/api/networkOverview.api";
import DeviceDashboard from "@/components/DeviceInfoView/DeviceDashboard.vue"
import DeviceDetailsPanel from "@/components/DeviceInfoView/DeviceDetailsPanel/DeviceDetailsPanel.vue"

export default {
  components: { DeviceDashboard, DeviceDetailsPanel },
  props: {
    ip: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      statusInfo: {
        type: String
      },
      local: {
        status: {}
      },
      // data{}
    }
  },
  async mounted() {
    this.statusInfo = await getDeviceStatus(this.ip);

    this.local = this.$tm("DeviceInfo");
  },
  methods: {

  }


}
</script>
<template>
  <section v-if="local">
    <div class="device-header dark-card">
      <p class="device-title">Пк: Workstation</p>

      <p class="device-item">ip: {{ ip }}</p>
      <p class="device-item " :class='statusInfo.uiClass'>{{ local.status[statusInfo.label] }} - update   {{ statusInfo.checkedAt }}</p>
    </div>

    <div class="device-layout">
      <div class="device-left dark-card">
        <DeviceDashboard />
      </div>
      <div class="dark-card" style="max-width: 400px;">
        <DeviceDetailsPanel :ipv4="ip" :locales="local.DeviceDetailsPanel" />
      </div>
    </div>

    <div class="dark-card">
      <button>Процеесы</button>
      <button>Лого</button>
      <button>Сеть</button>
    </div>

  </section>
</template>

<style scoped>
.device-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.device-title {
  flex-grow: 0.9;
}

.device-item {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, .08);

  background: rgba(255, 255, 255, .06);

  padding: 0.5rem 2rem;

  font-size: 14px;
}

.device-layout {
  display: flex;
  gap: 1rem;
  height: 500px;
}

.device-left {
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.action-bar {
  display: flex;
  gap: 1rem;

  /* padding: 1rem; */
}

.action-bar button {
  padding: 5px 10px;
}

.device-item {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, .08);

  background: rgba(255, 255, 255, .06);

  padding: 0.5rem 2rem;

  font-size: 14px;
}

.status-online {
  color: #86efac;
  /* background: rgba(34, 197, 94, 0.12); */
  border: 1px solid rgba(34, 197, 94, 0.25);
}

.status-offline {
  color: #fca5a5;
  /* background: rgba(239, 68, 68, 0.12); */
  border: 1px solid rgba(239, 68, 68, 0.25);
}

/* error */
.status-error {
  color: #fde68a;
  /* background: rgba(234, 179, 8, 0.12); */
  border: 1px solid rgba(234, 179, 8, 0.25);
}

</style>
