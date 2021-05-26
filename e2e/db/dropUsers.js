const knex = require('./knexfile')

knex('users').del().then(res => {
  console.log(res)
  process.exit(0)
})