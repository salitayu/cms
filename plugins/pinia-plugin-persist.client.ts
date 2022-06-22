// plugins/pinia-plugin-persist.client.ts
// import { Context } from '@nuxt/types'
import piniaPersist from 'pinia-plugin-persist'

export default ({ app }: any) => {
  app.pinia?.use(piniaPersist)
}