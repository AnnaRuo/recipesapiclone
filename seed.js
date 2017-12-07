// const request = require('superagent')
// const recipes = require('./db/fixtures/recipes.json')
// const user = require('./db/fixtures/user.json')
//
// const createUrl = (path) => {
//   return `${process.env.HOST || `http://localhost:${process.env.PORT || 3030}`}${path}`
// }
//
// const HOST = 'http://localhost:3030'

// create a user
// post /users

// console.log('Creating a user...')
// fetch(`${HOST}/users`, {
//   method: 'POST',
//   body: user
// })
//
// .then((res) => {
  // authenticate as user
  // POST /sessions
//   console.log('User created! Authenticating...')
//   fetch(`${HOST}/sessions`, {
//     method: 'POST',
//     body: {
//       email: user.email,
//       password: user.password
//     }
//   })
//   .then((res) => res.json())
//   .then((res) => {
//     const {token} = res
//     console.log('Authenticated!', token)
//   })
//   .catch((err) => console.error(err))
// })
//
// .catch((err) => console.error(err))

// create recipes while authenticated via the token
