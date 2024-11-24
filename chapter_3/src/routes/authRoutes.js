import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()



// Register a new user endpoint /auth/register
router.post('/register', (req, res) => {
  const { username, password } = req.body
  // save the username and an irreversibly encrypted password
  // save gilgamesh@gmail.com | aklsdfassaf.asssdw.dddffdd.q.weer.f.f

  // encrypt the password
  const hashedPassword = bcrypt.hashSync(password, 8)

  console.log(hashedPassword)
  //console.log(username, password)

  //save the new user and hashed password to the db
  try {
    const insertUser = db.prepare(`INSERT INTO users (username, password)
        VALUES (?, ?)`)
        const result = insertUser.run(username, hashedPassword)

        // now that we have a user, I want to add their first todo for them
        const defaultTodo = `Hello :) Add your first todo!`
        const insertTodo = db.prepare(`INSERT INTO todos (user_id, task)
            VALUES (?, ?)`)
            insertTodo.run(result.lastInsertRowid, defaultTodo)

            // create a token 
            const token = jwt.sign({id: result.lastInsertRowid}, process.env.
              JWT_SECRET, { expiresIn: '24h'})
              res.json({ token })
  } catch (err) {
    console.log(err.message)
    res.sendStatus(503)
  }
  
})

router.post('/login', (req, res) => {
   // we get their email, and we look up the password associated with that 
   // email in the database
   // but we get it back and see it's encrypted, which means that we cannot 
   // compare it to the one the user just used trying to login
   // so what we can to do, is again, one way encrypt the password the user
   // just entered

})


export default router

