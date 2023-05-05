const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

const recipies = require('./data/recipies.json')

app.get('/', (req, res) =>{
    res.send('The Food Network Will Coming...');
})
// cors npm instal
app.use(cors())

app.get('/recipies', (req, res) =>{
    res.send(recipies);
})

app.get('/recipies/:id', (req, res) =>{
    const id = req.params.id;
    if(id == 0){
        res.send(recipies)
    }
    else{
        const selectedRecipes = recipies.find(recipe => recipe.id === id)
        res.send(selectedRecipes)
    }
})

app.listen(port, () =>{
    console.log(`The Food Network Port Is: ${port}`)
})