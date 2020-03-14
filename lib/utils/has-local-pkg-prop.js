const has = require('lodash.has')

const { pkg } = require('./constants')

const hasLocalPkgProp = path => {
  return has(pkg, path)
}

module.exports = hasLocalPkgProp
