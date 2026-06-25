import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

const isLocal =
  process.env.PGHOST === 'localhost' ||
  process.env.PGHOST === '127.0.0.1'

export const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  ssl: isLocal
    ? false
    : {
        rejectUnauthorized: false
      }
})