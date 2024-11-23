import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000

// Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)
// Get the directory name from the file path
const __dirname = dirname(__filename)

//Middleware
app.use(express.json())
//Serves the HTML file from the /public directory
//Tells express to serve all files from the public folder as static assets / file.
// Any request for the css file will be resolved by the public directory

app.use(express.static(path.join(__dirname, '../public')))



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Routes
app.get('/auth', authRoutes)


app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})