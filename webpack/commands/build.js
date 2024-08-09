'use strict'

const loadEnv = require('../utils/loadEnv.js')
loadEnv()
loadEnv('production')

const { rimraf } = require('rimraf')
const webpack = require('webpack')

const { error, done } = require('../utils/logger.js')
const { logWithSpinner, stopSpinner } = require('../utils/spinner.js')
const paths = require('../utils/paths.js')

const webpackConfig = require('../config/prod.js')
const config = require('../project.config.js')

logWithSpinner('Building for production...\n')

rimraf(paths.resolve(config.outputDir)).then(() => {
  webpack(webpackConfig, (err, stats) => {
    stopSpinner(false)

    if (err) throw err

    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n',
    )

    if (stats.hasErrors()) {
      error('Build failed with errors.\n')
      process.exit(1)
    }

    done('Build complete.\n')
  })
})
