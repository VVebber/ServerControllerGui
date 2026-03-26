<script>
import DeviceTabs from "@/components/DeviceInfoView/DeviceDetailsPanel/DeviceTabs.vue"
import OperatingSystem from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/OperatingSystem.vue"
import DeviceSystem from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/DeviceSystem.vue"
import Processor from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/Processor.vue"
import PhysicalMemory from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/PhysicalMemory.vue"
import LogicalDisk from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/LogicalDisk.vue"
import NetworkAdapter from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/NetworkAdapter.vue"
import UserAccount from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/UserAccount.vue"
import Bios from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/Bios.vue"
import BaseBoard from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/BaseBoard.vue"
import NetworkAdapterConfiguration from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/NetworkAdapterConfiguration.vue"
import DiskDrive from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/DiskDrive.vue"
import VideoController from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/VideoController.vue"
import PagefileUsage from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/PagefileUsage.vue"
import Group from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/Group.vue"
import Share from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/Share.vue"
import ComputerSystemProduct from "@/components/DeviceInfoView/DeviceDetailsPanel/tabs/ComputerSystemProduct.vue"

export default {
  components: {
    DeviceTabs,
    OperatingSystem,
    DeviceSystem,
    Processor,
    PhysicalMemory,
    LogicalDisk,
    NetworkAdapter,
    UserAccount,
    Bios,
    BaseBoard,
    NetworkAdapterConfiguration,
    DiskDrive,
    VideoController,
    PagefileUsage,
    Group,
    Share,
    ComputerSystemProduct
  },
  props: {
    ipv4: {
      type: String,
      required: true
    },
    locales: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeTab: 'operatingSystem'
    }
  },
  computed: {
    activeComponent() {
      const map = {
        operatingSystem: 'OperatingSystem',
        deviceSystem: 'DeviceSystem',
        processor: 'Processor',
        physicalMemory: 'PhysicalMemory',
        logicalDisk: 'LogicalDisk',
        networkAdapter: 'NetworkAdapter',
        userAccount: 'UserAccount',
        bios: 'Bios',
        baseBoard: 'BaseBoard',
        networkAdapterConfiguration: 'NetworkAdapterConfiguration',
        diskDrive: 'DiskDrive',
        videoController: 'VideoController',
        pagefileUsage: 'PagefileUsage',
        group: 'Group',
        share: 'Share',
        computerSystemProduct: 'ComputerSystemProduct'
      }

      return map[this.activeTab] || 'OperatingSystem'
    }
  }
}

</script>

<template>
  <div class="container">
    <DeviceTabs :activeTab="activeTab" @update:activeTab="activeTab = $event" />

    <div class="tab-content">
      <component :is="activeComponent" :ipv4="ipv4" :local="locales[activeComponent]"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
}

.tab-content {
  width: 100%;
  flex: 1;
  min-width: 0;

  padding-right: 3px;
  overflow-y: auto;
}

.tab-content::-webkit-scrollbar {
  width: 6px;
}

.tab-content::-webkit-scrollbar-track {
  background: transparent;
}

.tab-content::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.08));
  border-radius: 10px;
  backdrop-filter: blur(6px);
  transition: all 0.2s ease;
}

.tab-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.15));
}
</style>
