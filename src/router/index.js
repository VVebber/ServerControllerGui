import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from './createRouter'

export function createAppRouter() {
    return createRouter({
        history: createMemoryHistory(),
        routes,
    })
}

export const router = createAppRouter();