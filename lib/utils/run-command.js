const spawn = require('cross-spawn')

const runCommand = (command, args) => {
  const result = spawn.sync(command, args, {
    stdio: 'inherit',
  })

  if (result.status) {
    process.exit(result.status)
  }

  return result
}

module.exports = runCommand
