const { join } = require('path')

const { appDirectory } = require('./constants')

const resolveLocalFile = (...p) => {
  return join(appDirectory, ...p)
}

module.exports = resolveLocalFile
