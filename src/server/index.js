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

    const projectURL = (`${baseURL}${apiKey}${settingsURL}&url=${userInput}`)
    console.log(projectURL)
    const projectData = await fetch(projectURL)
    .then(projectData => projectData.json())
    .then(data => res.send(data))
    .catch(error => console.log('ERROR in app.post', error));
})