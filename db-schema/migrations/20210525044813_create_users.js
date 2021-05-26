
exports.up = async knex => {
  const exists = await knex.schema.hasTable('user')
  if ( exists ) return
  return knex.schema.createTable('users', t => {
    t.increments('id').unsigned().primary()

    t.string('firstName').notNull()
    t.string('lastName').notNull()
    t.string('description').nullable()
    t.string('password').notNull()
    t.string('email').unique().notNull()

    t.dateTime('createdAt').notNull()
    t.dateTime('updatedAt').nullable()
    t.dateTime('deletedAt').nullable()
  })
}

exports.down = knex => knex.schema.dropTable('users')
