#!/usr/bin/env node

const ecli = require('commander');
const request = require('request');
const fetch = require('node-fetch');
const exec = require('child_process').exec;
const prompt = require('./helpers/prompts');

ecli
  .version('0.0.1')
  .description('ECLI is a tool designed to keep track of your project errors and resolutions')

//Sign-up command: Create a user 
ecli
  .command('signup <username> <password>')
  .alias('S')
  .description('SignUp for ecli')
  .action((username, password) => {
    request.post({
      url: 'http://localhost:8080/users/sign-up',
      form: {
        username: username,
        password: password
      }
    }, (err, res) => {
      console.log('New User Added!!\n\n', res.body);
    })
  })

//Login Command: Log into workspace
// assign current user to logged in user
ecli
  .command('login <username> <password>')
  .alias('L')
  .description('Login to the ecli client')
  .action((username, password) => {
    fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(resp => resp.json())
      .then(resp => {
        console.log(`User ${resp.username} logged in`);
      })
      .catch(err => console.log('Error:', err))
  })

ecli
  .command('eval [command...]')
  .alias('e')
  .description('Output error message')
  .action((command) => {
    command = command.join(' ');
    exec(`${command}`,
      function (error, stdout, stderr) {

        let errorLog = {
          techUsed: '',
          description: ''
        }

        if (error) {
          prompt.recordError(stderr, command, errorLog);
        }
      });
  })

ecli.parse(process.argv);