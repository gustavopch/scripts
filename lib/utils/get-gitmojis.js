const fs = require('fs')
const { join } = require('path')

const url =
  'https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json'

const getGitmojis = () => {
  const filePath = join(__dirname, '../../gitmojis.json')

  // Download gitmojis.json if it doesn't exist yet
  if (!fs.existsSync(filePath)) {
    const result = require('child_process').execFileSync(
      'curl',
      ['--silent', '-L', url],
      { maxBuffer: Infinity },
    )

    fs.writeFileSync(filePath, result)
  }

  return require(filePath).gitmojis
}

module.exports = getGitmojis
