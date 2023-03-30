const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

const commentUrl = 'http://localhost:4001'
const postUrl = 'http://localhost:4000'

app.post('/events', (req, res) => {
    //what ever inside the event, call the request
    const event = req.body
    axios.post(`${postUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });

    axios.post(`${commentUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });

    axios.post(`http://localhost:4002/events`, event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: 'OK'})
    
})

app.listen(4005, () => {
    console.log("Listening on port 4005")
})