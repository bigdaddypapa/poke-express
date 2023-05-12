
// Load express...
const express = require('express')
// Instantiate express...
const app = express()
// Other variables...
const port = 3000
// Add dotenv
require('dotenv').config()
// Mongoose info
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
// Middleware...
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Data...

const Pokemon = require('./models/pokemon.js');



// Routes...
// Index : Show all the things!
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App! Type  in /pokemon in the browser to show and create pokemon")
})

app.get('/pokemon', (req, res)=>{
    Pokemon.find({}, (error, allPokemon)=>{
        res.render('../views/index', {
            pokemon: allPokemon
        })
    })
})


// New : An empty form for a new thing  

app.get('/pokemon/new', (req, res) => {
    res.render('../views/New')
})


// Delete/Destroy : Get rid of this particular thing!  


// Update : Update this specific thing with this updated form 


// Create : Make a new thing with this filled out form 

app.post('/pokemon', (req, res)=>{
   
    // fruits.push(req.body) 
    Pokemon.create(req.body, (error, createdPokemon)=>{
        res.send(createdPokemon)
    });
    
    res.redirect('/'); 
})


// Edit : A prefilled form to update a specific thing 


// Show : Show me this one thing by ID

app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('../views/shows', {
            pokemon:foundPokemon
        })
    })
})



// Listen...
app.listen(port, () => {
    console.log(`Jigglypuuuuf, Jigglyyyyypuuuuuuuf on ${port}`)
})