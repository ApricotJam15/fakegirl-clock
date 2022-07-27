const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Fakegirl Clock',
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/fakegirl-clock/' : '/',
  pwa: {
    name: 'Fakegirl Clock',
    manifestOptions: {
      short_name: 'Fakegirl Clock',
      orientation: "portrait"
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
})