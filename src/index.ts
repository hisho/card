#!/usr/bin/env node
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

type dataType = Readonly<{
  [key: string]: {
    label: string,
    description: string
  }
}>

(async () => {
  const heading: string = chalk.white('                               Hisho');
  const data: dataType = {
    work: {
      label: chalk.white.bold('Work:'.padStart(12, ' ')),
      description: chalk.white(`${'Web Developer 📦'}`)
    },
    github: {
      label: chalk.white.bold('GitHub:'.padStart(12, ' ')),
      description: chalk.gray('https://github.com/') + chalk.green('hishohub')
    },
    twitter: {
      label: chalk.white.bold('Twitter:'.padStart(12, ' ')),
      description: chalk.gray('https://twitter.com/') + chalk.cyan('hisho_official')
    },
    note: {
      label: chalk.white.bold('Note:'.padStart(12, ' ')),
      description: chalk.gray('https://note.com/') + chalk.blue('hisho_official')
    },
    web: {
      label: chalk.white.bold('Web:'.padStart(12, ' ')),
      description: chalk.cyan('https://hisho.dev/')
    },
    card: {
      label: chalk.white.bold('Card:'.padStart(12, ' ')),
      description: chalk.red('npx') + ' ' + chalk.white('@hisho/card  (via GitHub Package Registry)')
    }
  }

  type boxenOptionsType = Readonly<Partial<{
    borderColor: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
    borderStyle: 'single' | 'double' | 'round' | 'classic'
    margin: number
    padding: number
    backgroundColor: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
  }>>

  await new Promise(resolve => {
    const boxenOptions:boxenOptionsType = {
      borderColor: "green",
      padding: 1,
      margin: 1,
      borderStyle: "single",
      backgroundColor: "black"
    };
    const output = `${heading}
    
    ${data.work.label}  ${data.work.description}

    ${data.github.label}  ${data.github.description}
    ${data.twitter.label}  ${data.twitter.description}
    ${data.note.label}  ${data.note.description}
    ${data.web.label}  ${data.web.description}
    
    ${data.card.label}  ${data.card.description}`;

    fs.writeFileSync(path.resolve(__dirname, './output'), boxen(output, boxenOptions));
    resolve()
  })
  const output = fs.readFileSync(path.join(__dirname, './output'), 'utf8');
  console.log(output);
})()