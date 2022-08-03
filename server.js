const express = require('express')
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemon')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (err, allPokemon) => {
        res.render('Index', {
            pokemon: allPokemon
        })
    })
})

app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (err, createdPokemon) => {
        res.redirect('/pokemon')
    })
    // pokemon.push(newPoke)
})

app.get('/pokemon/new', (req, res) => {
    res.render("New")
})

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {
            pokemon: foundPokemon
        })
    })
})

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
})