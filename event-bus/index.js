const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

const postUrl = 'http://localhost:4000'
const commentUrl = 'http://localhost:4001'
const queryUrl = 'http://localhost:4002'
const moderationUrl = 'http://localhost:4002'

const events = []

app.post('/events', (req, res) => {
    //what ever inside the event, call the request
    const event = req.body
    events.push(event)
    
    axios.post(`${postUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });

    axios.post(`${commentUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });

    axios.post(`${queryUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });
    
    axios.post(`${moderationUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: 'OK'})
})

app.get('/events', (req, res) => {
    res.send(events)
})

app.listen(4005, () => {
    console.log("Listening on port 4005")
})
