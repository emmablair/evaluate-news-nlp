const projectData = {};
const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();

app.use(cors())
// use JSON
app.use(bodyParser.json())
// use url encoded values
app.use(bodyParser.urlencoded({
    entended: true
}))

app.use(express.static('dist'))

console.log(__dirname)



// app.get('/meaningAPI/:userInput', async (req, res) => {
//     const userInput = req.params.userInput
//     console.log(userInput);
//     const fetch_res = await fetch(`${baseURL}${apiKey}${settingsURL}&url=${userInput}`);
//     const json = await fetch_res.json();
//     res.json(json);
// })

// MeaningCloud API Key
// app.get('/api', (req, res) => {
//     res.send({key: process.env.API_KEY})
// });

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/input', async(req, res) => {
    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
    const apiKey = `key=${process.env.API_KEY}`;
    const settingsURL = `&lang=en&ilang=en`;
    // get get input
    const userInput = req.body.input;
    console.log(userInput)

    const projectData = await fetch(`${baseURL}${apiKey}&of=json${settingsURL}&url=${userInput}`)
    console.log(projectData)
    const jsonData = await fetch(projectData.json())
    .then(data => {
        res.send(data)
        console.log(data)
        return data
    })
    .catch((error) => {
        console.log("error", error);
    });
})