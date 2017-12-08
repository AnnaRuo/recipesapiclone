const http = require('http')
const socketAuth = require('./config/socket-auth')
const socketIO = require('socket.io')
const express = require('express')
const bodyParser = require('body-parser')
const { games, users, sessions } = require('./routes')
const passport = require('./config/auth')
const cors = require('cors')

const port = process.env.PORT || 3030

const app = express()
const server = http.Server(app)
const io = socketIO(server)

// using auth middleware
io.use(socketAuth);

io.on('connect', socket => {
  socket.emit('ping', `Welcome to the server, ${socket.request.user.name}`)
  console.log(`${socket.request.user.name} connected to the server`)
})

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())
  .use(games(io))

  .use(users)
  .use(sessions)

  // catch 404 and forward to error handler
  .use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
  })

  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      // only print full errors in development
      error: app.get('env') === 'development' ? err : {}
    })
  })


server.listen(port)
