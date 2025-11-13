import mariadb from 'mariadb'

export const getPool = () => {
  // server-side only: use Nuxt runtime config for secrets
  const cfg = useRuntimeConfig().mariadb || {}
  // cfg: { host, port, user, password, database, connectionLimit }
  return mariadb.createPool({
    host: cfg.host || 'localhost',
    port: cfg.port ? Number(cfg.port) : 3306,
    user: cfg.user || 'root',
    password: cfg.password || '',
    database: cfg.database || 'test',
    connectionLimit: cfg.connectionLimit ? Number(cfg.connectionLimit) : 5,
  })
}

export async function query(sql, params = []) {
  
  const pool = getPool()
  const conn = await pool.getConnection()
  try {
    const rows = await conn.query(sql, params)
    return rows
  } finally {
    conn.end()
  }
}