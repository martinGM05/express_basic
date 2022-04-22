// Use express object
const express = require('express')
// App of Express
const app = express()
// Port of the server
const port = 3000

// Path initial, response to url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

// Return an object
app.get('/explorersInNode', (req, res) => {
    const explorer = { name: 'Explorer', msg: 'Hello' }
    res.send(explorer)
})

app.get('/explorers/:explorer', (req, res) => {
    res.send(req.params)
})


// With this initialize this app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})