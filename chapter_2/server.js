// The address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383

const express = require("express");
const app = express()
const PORT = 8383

let data = {
    name: 'James'

}

// HTTP VERBS && Routes (or paths)
// The methods informs the nature of request and the route is a further 
// subdirectory (basically we direct the request to the body of code to respond
// appropriately and these locations or routes are called endpoints )


// Type 1 - Website endpoints(these endpoints are for sending back html and they typically 
// come when a user enters a url in a browser)
app.get('/', (req, res) => {

    // this is endpoint number 1
    console.log("Yay i hit an endpoint!", req.method)
    res.send(`<body style="background:pink;color: "blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
        `)

})

app.get('/dashboard', (req, res) => {
    console.log('Ohh now I hit the /dashboard endpoint')
    res.send('hiii')
})

// Type 2 - API endpoints (non visual)

// CRUD-method - create-post read-get update-put and delete-delete

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    // someone wants to create a user (for example when they click a sign up
    // button)
    // the user clicks the sign up button after entering their credentials, and 
    // their browser is wired up to send out a network request to the server to
    // handle that action
    const newEntry = req.body
    res.sendStatus(701)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))