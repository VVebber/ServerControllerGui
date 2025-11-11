
import HomeView           from '@/pages/DevicesHub/index.vue'
import ScriptsHub         from '@/pages/ScriptsHub/index.vue'
import SystemOverview     from '@/pages/SystemOverview/index.vue'

export const routes = [
    { path: '/pages/DevicesHub', name: 'home', component: HomeView },
    { path: '/pages/ScriptsHub', name: 'scripts', component: ScriptsHub },
    { path: '/pages/SystemOverview', name: 'SystemOverview', component: SystemOverview},
 
    { path: '/', redirect: '/pages/DevicesHub' },
]
