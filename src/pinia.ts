import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import router from './router'
import type { Router } from 'vue-router'

export const pinia = createPinia()

pinia.use( ({ store }) => {
    store.router = markRaw(router)
})

declare module 'pinia' {
    interface PiniaCustomProperties {
        router: Router
    }
}

pinia.use( ({ store }) => {
    store.$onAction( ({ store, name, args, after, onError }) => {
        console.log(`[${store.$id}] action ${name}, args: ${JSON.stringify(args)}`)

        after(result => {
            console.log(`[${store.$id}] action ${name}, result: ${JSON.stringify(result)} `)
        })

        onError( error => {
            console.error(`[${store.$id}] action ${name}, error: ${error}`)
        })
    })
})
