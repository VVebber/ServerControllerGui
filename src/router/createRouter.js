import HomeView from '@/views/HomeView.vue'
import ScriptsHubView from '@/views/ScriptsHubView.vue'
import SettingsView from '@/views/SettingsView.vue'
import DeviceInfoView from '@/views/DeviceInfoView.vue'
import SearchView from '@/views/SearchView.vue'

export const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/ScriptsHubView', name: 'scripts', component: ScriptsHubView },
  { path: '/SettingsView', name: 'settings', component: SettingsView },
  {
    path: '/device/:ip',
    name: 'deviceInfo',
    component: DeviceInfoView,
    props: true,
  },
  {
    path: '/SearchView', name: 'search', component: SearchView
  },
]
