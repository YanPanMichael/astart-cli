const chalk = require('chalk')

const BannerUtil = {
  print: function (version, runtime) {
    let runtimeStrLine = ''
    let runtimeStr = ''
    if (runtime && runtime !== '') {
      runtimeStr = runtime
      runtimeStr = `Runtime<${runtimeStr}>`
      runtimeStrLine = '\n│'
      runtimeStrLine +=
        chalk.yellow.bold(
          runtimeStr.padStart(25 + Math.floor(runtimeStr.length / 2)).padEnd(50)
        ) + '│'
    }
    console.log(`
   █████╗ ███████╗████████╗ █████╗ ██████╗ ████████╗
  ██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝
  ███████║███████╗   ██║   ███████║██████╔╝   ██║   
  ██╔══██║╚════██║   ██║   ██╔══██║██╔══██╗   ██║   
  ██║  ██║███████║   ██║   ██║  ██║██║  ██║   ██║   
  ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
                                                      
          \\__\\_/  ${chalk.italic(
            ('@astart-cli@' + version).padStart(9)
          )}  \\_/__/

╭──────────────────────────────────────────────────╮
│       Web Application Development Scaffold       │${runtimeStrLine}
╰──────────────────────────────────────────────────╯
`)
  }
}

module.exports = BannerUtil
