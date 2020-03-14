const baseConfig = require('./base')

module.exports = {
  ...baseConfig,
  plugins: [...baseConfig.plugins, '@semantic-release/gitlab'],
}
