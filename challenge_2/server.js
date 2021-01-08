const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

app.get('/price', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(apiRes => res.send(apiRes.data).status(200))
  .catch(err => res.send(err).status(400))
})

app.listen(port, () => {
  console.log(`Mini app challenge 2 running on http://localhost:${port}`);
})

