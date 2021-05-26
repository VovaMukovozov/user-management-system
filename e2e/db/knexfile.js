const knex = require('knex')
const db = require('../config')

const { client, host, user, password, database } = db

module.exports = knex({
  client,
  connection: {
    host,
    user,
    password,
    database,
  },
})
