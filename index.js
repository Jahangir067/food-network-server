const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const recipies = require('./data/recipies.json')

app.get('/', (req, res) =>{
    res.send('The Food Network Will Coming...');
})

app.get('/recipies', (req, res) =>{
    res.send(recipies);
})

app.listen(port, () =>{
    console.log(`The Food Network Port Is: ${port}`)
})