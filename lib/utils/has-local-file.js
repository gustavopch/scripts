const fs = require('fs')
const { join } = require('path')

const { appDirectory } = require('./constants')

const hasLocalFile = (...p) => {
  return fs.existsSync(join(appDirectory, ...p))
}

module.exports = hasLocalFile
