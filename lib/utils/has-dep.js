const hasLocalPkgProp = require('./has-local-pkg-prop')

const hasDep = dep => {
  return (
    hasLocalPkgProp(`dependencies.${dep}`) ||
    hasLocalPkgProp(`peerDependencies.${dep}`) ||
    hasLocalPkgProp(`devDependencies.${dep}`)
  )
}

module.exports = hasDep
