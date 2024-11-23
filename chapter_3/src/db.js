import { DatabaseSync } from 'node:sqlite'
const db = new DatabaseSync(':memory:')

// Execute SQL satements from strings
db.exec(`
    CREATE TABLE user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
`)

db.exec(`
     CREATE TABLE todos (
       id INTEGER,
       user_id INTEGER,
     )
    `)