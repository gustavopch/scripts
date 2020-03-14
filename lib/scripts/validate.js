const { join } = require('path')
const resolveBin = require('resolve-bin')
const yargsParser = require('yargs-parser')

const {
  constants,
  hasLocalConfig,
  hasLocalFile,
  hasLocalPkgProp,
  resolveLocalFile,
  runCommand,
} = require('../utils')

const args = yargsParser(process.argv.slice(2))

// =============================================================================
// Check lockfile
// =============================================================================

runCommand('yarn', ['check', '--integrity'])

// =============================================================================
// Run ESLint
// =============================================================================

const useBuiltinEslintConfig =
  !('config' in args) &&
  !hasLocalFile('.eslintrc') &&
  !hasLocalFile('.eslintrc.js') &&
  !hasLocalPkgProp('eslintConfig')

const eslintConfig = useBuiltinEslintConfig
  ? ['--config', join(__dirname, '../config/eslint')]
  : []

const useBuiltinEslintIgnore =
  !('ignore-path' in args) &&
  !hasLocalFile('.eslintignore') &&
  !hasLocalPkgProp('eslintIgnore')

const eslintIgnore = useBuiltinEslintIgnore
  ? ['--ignore-path', join(__dirname, '../config/eslintignore')]
  : []

const eslintCache =
  'no-cache' in args
    ? []
    : [
        '--cache',
        '--cache-location',
        join(constants.appDirectory, 'node_modules/.cache/.eslintcache'),
      ]

const eslintWrite = 'fix' in args ? ['--fix'] : []

const eslintFiles = args._.length > 0 ? [] : ['**/*.{js,jsx,ts,tsx}']

runCommand(resolveBin.sync('eslint'), [
  ...eslintConfig,
  ...eslintIgnore,
  ...eslintCache,
  ...eslintWrite,
  ...eslintFiles,
])

// =============================================================================
// Run Prettier
// =============================================================================

const useBuiltinPrettierConfig =
  !('prettier-config' in args) && !hasLocalConfig('prettier')

const prettierConfig = useBuiltinPrettierConfig
  ? ['--config', join(__dirname, '../config/prettier')]
  : 'prettier-config' in args
  ? ['--config', args['prettier-config']]
  : []

const useBuiltinPrettierIgnore =
  !('prettier-ignore-path' in args) && !hasLocalFile('.prettierignore')

const prettierIgnore = useBuiltinPrettierIgnore
  ? ['--ignore-path', join(__dirname, '../config/prettierignore')]
  : 'prettier-ignore-path' in args
  ? ['--ignore-path', args['prettier-ignore-path']]
  : []

const prettierWrite = 'fix' in args ? ['--write'] : ['--check']

const prettierFiles =
  args._.length > 0
    ? // Convert absolute paths to non-absolute so that they are recognized
      // by glob patterns in .prettierignore.
      [args._.map(a => a.replace(`${process.cwd()}/`, ''))]
    : ['**/*.+(css|js|jsx|json|md|ts|tsx)']

runCommand(resolveBin.sync('prettier'), [
  ...prettierConfig,
  ...prettierIgnore,
  ...prettierWrite,
  ...prettierFiles,
])

// =============================================================================
// Check types with TypeScript
// =============================================================================

if (hasLocalFile('tsconfig.json')) {
  const tsconfigPath = resolveLocalFile('tsconfig.json')

  runCommand(resolveBin.sync('typescript', { executable: 'tsc' }), [
    '-p',
    tsconfigPath,
    '--noEmit',
  ])
}
