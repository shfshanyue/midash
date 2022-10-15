import { defineClientConfig } from '@vuepress/client'
import pkg from '../../package.json'

export default defineClientConfig({
  async enhance(context) {
    import('../..').then((o) => {
      console.log(
        'You can try midash API using variable %c_%c or %cmidash%c in browser devtools.',
        'font-style: italic; color: red; font-size: 1.5em;', 'font-style: normal',
        'font-style: italic; color: red; font-size: 1.5em;', 'font-style: normal',
      )
      console.log(
        `Version: %cmidash v${pkg.version}%c`,
        'font-style: italic; color: red; font-size: 1.5em;', 'font-style: normal',
      )
      globalThis.midash = o
      globalThis._ = o
    })

    // context.app.use(context.router)
    // if (globalThis.navigator?.language?.includes('zh')) {
    //   context.router.push('/zh/')
    // }
  },
})