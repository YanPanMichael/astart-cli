const chalk = require('chalk')
const figlet = require('figlet')

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
    console.log(
      `${figlet.textSync('   ASTART!!', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true
      })}
        \\__\\_/  ${chalk.italic(
          ('@astart-cli@' + version).padStart(9)
        )}  \\_/__/

╭──────────────────────────────────────────────────╮
│       Web Development Application Scaffold       │${runtimeStrLine}
╰──────────────────────────────────────────────────╯
`
    )
    //             console.log(`
    //                    ___
    //  /'\\_/\`\\          /\\_ \\
    // /\\      \\     __  \\//\\ \\      __       __   __  __
    // \\ \\ \\__\\ \\  /'__\`\\  \\ \\ \\   /'__\`\\   /'_ \`\\/\\ \\/\\ \\
    //  \\ \\ \\_/\\ \\/\\ \\L\\.\\_ \\_\\ \\_/\\ \\L\\.\\_/\\ \\L\\ \\ \\ \\_\\ \\
    //   \\ \\_\\\\ \\_\\ \\__/.\\_\\/\\____\\ \\__/.\\_\\ \\____ \\ \\____/
    //    \\/_/ \\/_/\\/__/\\/_/\\/____/\\/__/\\/_/\\/___L\\ \\/___/
    //                                        /\\____/
    // ${chalk.italic((('@malagu/cli@' + version)).padStart(37))}  \\_/__/

    // ╭──────────────────────────────────────────────────╮
    // │      Serverless First Development Framework      │${runtimeStrLine}
    // ╰──────────────────────────────────────────────────╯
    // `);
  }
}

module.exports = BannerUtil
