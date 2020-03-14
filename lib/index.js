#!/usr/bin/env node

const glob = require('glob')
const { basename, join } = require('path')

const { resolveScript, runCommand } = require('./utils')

const [executor, bin, script, ...args] = process.argv

const scriptPath = resolveScript(script)

// Show a simple manual in case there's no script with such name
if (!scriptPath) {
  const availableScripts = glob
    .sync(join(__dirname, 'scripts', '*'))
    .map(s => basename(s).replace(/\.js$/, ''))
    .filter(Boolean)

  const manualLines = [
    `\n  Usage: ${basename(bin)} [command] [flags]`,
    '\n',
    '\n  Commands:',
    ...availableScripts.map(s => `\n    - ${s}`).join(''),
    '\n',
  ]

  console.log(manualLines.join(''))
  process.exit(script ? 1 : 0)
}

// Run the script
const result = runCommand(executor, [scriptPath, ...args])

if (result.signal === 'SIGKILL') {
  console.log(
    `The script "${script}" failed because the process exited too early. ` +
      'This probably means the system ran out of memory or someone called ' +
      '`kill -9` on the process.',
  )
  process.exit(1)
}

if (result.signal === 'SIGTERM') {
  console.log(
    `The script "${script}" failed because the process exited too early. ` +
      'Someone might have called `kill` or `killall`, or the system could ' +
      'be shutting down.',
  )
  process.exit(1)
}
