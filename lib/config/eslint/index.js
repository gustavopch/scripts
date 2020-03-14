const { hasDep } = require('../../utils')
const nodeConfig = require('./node')
const webConfig = require('./web')

module.exports = hasDep('react') ? webConfig : nodeConfig
