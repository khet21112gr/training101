import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// ensure we can reference the parent folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// explicitly load the .env file from the root
dotenv.config({ path: path.join(__dirname, '../.env') });

// log to confirm it loaded
console.log('Loaded environment variables:');
console.log('DB_USER:', process.env.DB_USER || 'undefined');
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '(hidden)' : 'undefined');

export const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
