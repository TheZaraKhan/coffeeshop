// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login/index.html'),
        signup1: resolve(__dirname, 'signup1/index.html'),
        signup2: resolve(__dirname, 'signup2/index.html')
      }
    }
  }
}

