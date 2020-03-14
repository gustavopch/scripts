const resolveBin = require('resolve-bin')

const { runCommand } = require('../utils')

if (!process.env.HUSKY_GIT_PARAMS) {
  throw new Error(
    "Missing HUSKY_GIT_PARAMS env var; it seems you're not creating a commit",
  )
}

runCommand(resolveBin.sync('@commitlint/cli', { executable: 'commitlint' }), [
  '-E',
  'HUSKY_GIT_PARAMS',
])
