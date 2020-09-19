'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs-extra')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic',
  backgroundColor: '#231815'
}

// Text + chalk definitions
const data = {
  name: chalk.white('                            Hisho'),
  work: chalk.white('Web Developer 📦'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('hisho_official'),
  github: chalk.gray('https://github.com/') + chalk.green('hishohub'),
  note: chalk.gray('https://note.com/') + chalk.blue('hisho_official'),
  web: chalk.cyan('https://hisho.dev/'),
  npx: chalk.red('npx') + ' ' + chalk.white('@hisho/card  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelNote: chalk.white.bold('       Note:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const github = `${data.labelGitHub}  ${data.github}`
const note = `${data.labelNote}  ${data.note}`
const webb = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               newline + // data.labelOpenSource + data.opensource
               github + newline + // data.labelGitHub + data.github
               twittering + newline + // data.labelTwitter + data.twitter
               note + newline + // data.labelLinkedIn + data.linkedin
               webb + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
