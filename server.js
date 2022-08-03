const express = require('express')
require('dotenv').config()
const pokemon = require('./models/pokemon')
const app = express()
const port = process.env.PORT || 3003

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {
        pokemon: pokemon
    })
})

app.post('/pokemon/', (req, res) => {
    let newPoke = req.body
    newPoke['img'] = `http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}`
    pokemon.push(newPoke)
    res.redirect('/pokemon')
})

app.get('/pokemon/new', (req, res) => {
    res.render("New")
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
})

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
})