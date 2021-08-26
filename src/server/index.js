require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();
app.use(cors());
app.use(bodyParser());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile('./dist/index.html');
});

app.post('/add-url', async (req, res) => {
  const { url } = req.body;
  console.log(`req.body is : `, req.body);
  console.log(`URL is : `, url);
  try {
    await axios
      .post(
        `http://api.meaningcloud.com/summarization-1.0?key=${process.env.API_KEY}&url=${url}&sentences=5`
      )
      .then((data) => {
        return res.json({ data: data.data.summary });
      });
    console.log(
      `URL requires: http://api.meaningcloud.com/summarization-1.0?key=${process.env.API_KEY}&url=${url}&sentences=5`
    );
    console.log(`Data is : `, data);
    console.log(`data in server is: `, data);
  } catch (error) {
    res.status(500).json({ message: 'Error happend with the request' });
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8083, function () {
  console.log('Example app listening on port 8083!');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

// exporting for modle testing
module.exports = {
  app,
};
