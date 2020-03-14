const fs = require('fs')
const micromatch = require('micromatch')

const { resolveLocalFile, runCommand } = require('../utils')

const pattern = '*.{js,jsx,ts,tsx}'

module.exports = {
  [pattern]: [
    'eslint',
    files => {
      const filesToCheck = files.filter(file =>
        micromatch.isMatch(file, pattern),
      )

      // Nothing to be type-checked? Skip
      if (filesToCheck.length === 0) {
        return [] // Because it must return string or string[]
      }

      // Load existing config
      const tsconfigPath = resolveLocalFile('tsconfig.json')
      const tsconfig = require(tsconfigPath)

      // Write a temporary config file
      const tmpTsconfigPath = resolveLocalFile('tsconfig.tmp.json')
      const tmpTsconfig = { ...tsconfig, files: filesToCheck }
      fs.writeFileSync(tmpTsconfigPath, JSON.stringify(tmpTsconfig, null, 2))

      // Stage config file before lint-staged stashes it away
      runCommand('git', ['add', tmpTsconfigPath])

      return [
        // Type-check our files
        `tsc -p ${tmpTsconfigPath} --noEmit`,
        // Remove the temporary config file
        `git rm -f ${tmpTsconfigPath}`,
      ]
    },
  ],
}
