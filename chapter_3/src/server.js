import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

console.log('Hello World')

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})