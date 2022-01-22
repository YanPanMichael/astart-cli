#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
const colors = require('colors')
const execa = require('execa')
const { prompt } = require('enquirer')
let progressBar = require('progress')
let log = require('single-line-log').stdout

let copyCount = 0 //需要拷贝的文件数量
let copySchedule = 0 //拷贝进度
let bar //进度条

const colorMap = {
    info: 'blue',
    error: 'red',
    success: 'green'
}

const consoleWithColor = (type, msg) => {
  console.log(colors[colorMap[type]](`${msg}`))
}

const step = (msg) => console.log(colors.cyan(msg))

async function init() {
  try {
    const renameFiles = {
      _gitignore: '.gitignore'
    }

    let projectname = await prompt({
      type: 'input',
      name: 'projectName',
      message: 'projectName/项目名',
      initial: 'seed-app'
    })
    const projectName = await checkProjectName(projectname.projectName)
    let selectTemplate = await prompt({
      type: 'select',
      name: 'ProjectTemplate',
      message: 'Project-template/选择项目模板',
      initial: 'seed-app',
      choices: [{ name: 'seed-app' }, { name: 'vue3-ts-initial' }, { name: 'webpack-protist-js' }]
    })
    const templateDir = path.join(
      __dirname,
      `template-${selectTemplate.ProjectTemplate}`
    )
    let root = path.join(cwd, projectName)

    step(
      `\nScaffolding project in ${projectName}.../创建${projectName}项目中...`
    )

    emptyDir(root)

    calculateCount(path.join(templateDir))

    bar = new progressBar(
      'Current creation progress/当前创建进度: :bar :percent ',
      { total: copyCount, complete: '█', incomplete: '░', width: 30 }
    )

    await copy(path.join(templateDir), root)

    const pkg = require(path.join(templateDir, `package.json`))

    pkg.name = projectName

    const pkgManager = /yarn/.test(process.env.npm_execpath) ? 'yarn' : 'npm'

    step(`\nDone. Now run/完毕。现在运行:`)

    step(`\nDownloading dependencies.../正在下载依赖...`)

    let downShell = pkgManager === 'yarn' ? '' : 'install'
    step(`\nrunning/正在运行:${pkgManager + ' ' + downShell}`)
    const downResult = await execa(`${pkgManager}`, [downShell], {
      cwd: path.relative(cwd, root),
      stdio: 'inherit'
    })
    if (downResult.failed) {
      consoleWithColor('error', '\nFailed to download dependencies/下载依赖失败 ')
      consoleWithColor('info', `${pkgManager === 'yarn' ? `yarn` : `npm install`}\n`)
    } else {
      consoleWithColor('success', `Depend on the download is complete!/依赖下载完成!🥳`)
    }

    if (root !== cwd) {
      consoleWithColor('success', `\ncd ${path.relative(cwd, root)}`)
    }
    consoleWithColor('success', `${pkgManager === 'yarn' ? `yarn dev` : `npm run dev`}\n`)
  } catch (e) {
    console.error(e)
  }
}

async function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    //是否是一个目录 而不是文件。
    copyDir(src, dest)
  } else {
    copySchedule++
    await fs.copyFileSync(src, dest)
  }
  if (bar.complete) {
    log('\nCreated/创建完成\n'.green)
  } else {
    bar.tick(copySchedule / (copyCount / 100))
  }
}

async function checkProjectName(projectName) {
  const packageNameRegExp =
    /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/
  if (packageNameRegExp.test(projectName)) {
    console.log(path.join(cwd, projectName))
    if (fs.existsSync(path.join(cwd, projectName))) {
      let coverQuerySelect = await prompt({
        type: 'select',
        name: 'coverQuery',
        message:
          'The current file name already exists, do you want to overwrite it?/当前文件名已存在，是否覆盖？',
        initial: 'y/确认',
        choices: [{ name: 'y' }, { name: 'n' }]
      })
      if (coverQuerySelect.coverQuery == 'n') {
        prompt.stop()
      }
    }
    return projectName
  } else {
    const suggestedPackageName = projectName
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/^[._]/, '')
      .replace(/[^a-z0-9-~]+/g, '-')

    /**
     console.log(`@type {{ inputPackageName: string }}
    */
    const { inputPackageName } = await prompt({
      type: 'input',
      name: 'inputPackageName',
      message: `Package name:`,
      initial: suggestedPackageName,
      validate: (input) =>
        packageNameRegExp.test(input) ? true : 'Invalid package.json name'
    })
    return inputPackageName
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

/**
 * 计算当前模板文件数量
 */
function calculateCount(srcDir) {
  if (fs.statSync(srcDir).isDirectory()) {
    //是否是一个目录 而不是文件。
    dirCount(srcDir)
  }
}

/***
 * 目录内部数量
 */
function dirCount(srcDir) {
  copyCount += fs.readdirSync(srcDir).length
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    calculateCount(srcFile)
  }
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file)
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs)
      fs.rmdirSync(abs)
    } else {
      fs.unlinkSync(abs)
    }
  }
}

init()
