const {env} = process

export const serverConfig = {
  port: parseInt(env.HTTP_PORT) || 3000,
  address: env.BINDING_ADDRESS || '0.0.0.0',
}

export const db = {
  tableName: 'users',
  client: 'pg',
  host: env.PG_HOST || 'localhost',
  port: parseInt(env.PG_PORT) || 5432,
  database: env.POSTGRES_DB || '',
  password: env.POSTGRES_PASSWORD || '',
  user: env.POSTGRES_USER || '',
}