const chalk = require('chalk');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  error: process.stderr
});

function recordTechUsed(obj) {
  rl.question(chalk.yellow('\nWhat technologies are you using? Separate with a space\n'), (input) => {
    obj.techUsed = input;
    return recordDescription(obj);
  });
}

function recordDescription(obj) {
  rl.question(chalk.yellow('\nGive a brief description of the problem\n'), (input) => {
    obj.description = input;
    console.log(chalk.green.bold('\nRecorded error to your logs\n'));
    rl.close();
  })
}

module.exports = {
  recordError(stderr, command, errorLog){
    rl.output.write(chalk.bgYellow.bold(`\n\nELI encountered an error with your command`) + `\n\nRan:\n\n` + command + `\n\n\nError:\n\n` + chalk.red.bold(stderr) + `\n` + chalk.yellow(`Would you like to log this error?`) + `(Y/N)\n`);

    rl.on('line', (input) => {
      if (input === 'Y') {
        return recordTechUsed(errorLog);
      } else {
        rl.output.write('Exiting console....\n')
        rl.close();
      }
    })
  }
}
