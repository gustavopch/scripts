const { join } = require('path')

const resolveScript = script => {
  try {
    const scriptPath = join(__dirname, '../scripts', script)
    return require.resolve(scriptPath)
  } catch (error) {
    return null
  }
}

module.exports = resolveScript
