const projectData = {};
const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const cors = require('cors');
const bodyParser = require('body-parser');
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

// MeaningCloud API Key
app.get('/api', (req, res) => {
    res.send({key: process.env.API_KEY})
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/all', function (req, res) {
    res.send(projectData);
    console.log(projectData);
});

app.post('/meaningData', (req, res) => {
    newData = {

    };
    Object.assign(projectData, newData);
    res.send(projectData);
    console.log(projectData);
});

// var json = {
//     'title': 'test json response',
//     'message': 'this is a message',
//     'time': 'now'
// }