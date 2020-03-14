const { join } = require('path')
const resolveBin = require('resolve-bin')
const yargsParser = require('yargs-parser')

const { hasLocalFile, hasLocalPkgProp, runCommand } = require('../utils')

const args = yargsParser(process.argv.slice(2))

// =============================================================================
// Check lockfile
// =============================================================================

runCommand('yarn', ['check', '--integrity'])

// =============================================================================
// Run lint-staged
// =============================================================================

const useBuiltInConfig =
  !('config' in args) &&
  !hasLocalFile('.lintstagedrc') &&
  !hasLocalFile('lint-staged.config.js') &&
  !hasLocalPkgProp('lint-staged')

const config = useBuiltInConfig
  ? ['--config', join(__dirname, '../config/lint-staged')]
  : []

runCommand(resolveBin.sync('lint-staged'), [...config])
