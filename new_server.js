const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('Server is running at http://localhost:${port}')
});

app.post('/data', (req, res) => {
    res.send('Received a POST request');
});

app.put('/data', (res, res) => {
    res.send('Received a PUT request');
});

app.delete('/data', (req, res) => {
    res.send('Received a DELETE request');
});

const body_parser = require('body-parser');
app.use(body_parser.json());

app.post('/json', (req, res) => {
    console.log(req.body);
    res.send('Received JSON data');
})