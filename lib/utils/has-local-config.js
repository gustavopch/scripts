const { cosmiconfigSync } = require('cosmiconfig')

const { pkgPath } = require('./constants')

const hasLocalConfig = (moduleName, searchOptions = {}) => {
  const explorer = cosmiconfigSync(moduleName, searchOptions)
  const result = explorer.search(pkgPath)

  return result !== null
}

module.exports = hasLocalConfig
