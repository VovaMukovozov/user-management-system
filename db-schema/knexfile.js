const db = require('./config')

const { client, host, user, password, database } = db

module.exports = {
  development: {
    client,
    connection: {
        host,
        user,
        password,
        database,
    },
  },
}
