#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.cyan.bold("\n \tWelcome to Shaheer's Word Counter\n"));
let index = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: chalk.green('Write your sentence to count its Words:')
    }
]);
let word = index.sentence.trim().split(' ');
console.log('\nYour Sentence:');
console.log(chalk.blue(word));
console.log(chalk.greenBright(`\nContains ${chalk.bold.underline(word.length)} Words`));
