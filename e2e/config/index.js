const { env } = process

module.exports = {
    client: 'pg',
    host: env.PG_HOST || 'localhost',
    port: parseInt(env.PG_PORT) || 5432,
    database: env.POSTGRES_DB || 'users',
    password: env.POSTGRES_PASSWORD || 'users12345',
    user: env.POSTGRES_USER || 'users',
}