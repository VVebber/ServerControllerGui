<script>
import MenuIcon from './icons/MenuIcon.vue';
import ScriptsIcon from './icons/ScriptsIcon.vue';
import DownloadIcon from './icons/DownloadIcon.vue';
import OutIcon from './icons/OutIcon.vue';
import MapPinnedIcon from './icons/MapPinnedIcon.vue';
import SearchIcon from './icons/SearchIcon.vue';
import RepostIcon from './icons/RepostIcon.vue';
import FilterIcon from './icons/FilterIcon.vue';
import SettingsIcon from './icons/SettingsIcon.vue';
import NotificationsIcon from './icons/NotificationsIcon.vue';

const icons = {
  menu: MenuIcon,
  scripts: ScriptsIcon,
  download: DownloadIcon,
  out: OutIcon,
  mapPinned: MapPinnedIcon,
  search: SearchIcon,
  repost: RepostIcon,
  filter: FilterIcon,
  settings: SettingsIcon,
  notifications: NotificationsIcon,
}

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      }
    }
  },
  computed: {
    iconComponent() {
      return icons[this.name]
    }
  }
}
</script>

<template>
  <component :is="iconComponent" role="img" />
</template>
