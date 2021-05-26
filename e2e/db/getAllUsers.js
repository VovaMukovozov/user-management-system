const knex = require('./knexfile')

module.exports = async () => {
  const users = await knex('users').select('*')
  return users
}