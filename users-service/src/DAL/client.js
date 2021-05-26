import knex from 'knex'
import { db } from '../config'

const { client, host, user, password, database } = db

export default knex({
    client,
    connection: {
        host,
        user,
        password,
        database,
    },
    pool: { min: 0, max: 10 }
})