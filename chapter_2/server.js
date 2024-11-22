// The address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383

const express = require("express");
const app = express()
const PORT = 8383

// HTTP VERBS && Routes (or paths)
// The methods informs the nature of request and the route is a further 
// subdirectory (basically we direct the request to the body of code to respond
// appropriately and these locations or routes are called endpoints )


// Type 1 - Website endpoints(these endpoints are for sending back html and they typically 
// come when a user enters a url in a browser)
app.get('/', (req, res) => {

    // this is endpoint number 1
    console.log("Yay i hit an endpoint!", req.method)
    res.sendStatus(201)

})

app.get('/dashboard', (req, res) => {
    console.log('Ohh now I hit the /dashboard endpoint')
    res.send('hiii')
})

// Type 2 - API endpoints (non visual)

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))