const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const UserController = require('./UserController')

///////////
/*MongoDB*/
///////////
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost:27017/ecli_db',
  { useNewUrlParser: true }
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', () => {
  console.log('Connected to the ecli_db local database')
})

///////////////
/*MiddleWare*/
///////////////
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

///////////
/*Routes*/
///////////
app.use('/users', userRouter)

app.get('/api', (req, res) => {
  res.send('up and running')
})

app.use('/notes', require('./notesFeature/routes.js'))

app.get('/api', (req, res) => {
  res.send('up and running')
})

app.get('/testing', (req, res) => {
  console.log('hit the server')
  res.send('You got it DUDE!!!')
})

app.get('/api/login', UserController.authenticateUser)

app.get(
  '/api/oauth',
  UserController.handleAthenticatedUser,
  UserController.getAuthInfo,
  UserController.checkDB,
  UserController.addUser
)

app.listen(8080, () => console.log('🚦 Now listening on port 8080 🚦'))
