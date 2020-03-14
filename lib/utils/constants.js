const fs = require('fs')
const { dirname } = require('path')
const readPkgUp = require('read-pkg-up')

const { packageJson: pkg, path: pkgPath } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
})

const appDirectory = dirname(pkgPath)

module.exports = {
  appDirectory,
  pkg,
  pkgPath,
}
