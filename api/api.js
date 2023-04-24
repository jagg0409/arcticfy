const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controler')
const app = express()
const { auth, isAuthenticated } = require('./auth.controler')
//const auth2 = require('./auth.controler-prueba')
const port = 2000

app.use(express.json())

mongoose.connect('mongodb+srv://jagg0409:lolazo0409@arcticfy.6tbtlze.mongodb.net/?retryWrites=true&w=majority')

app.get('/try', (req, res) => {
    if (isAuthenticated) {
        res.sendFile(`${__dirname}/web/html/index.html`)

    } else {
        res.sendFile(`${__dirname}/web/html/sesion.html`)
    }
})
app.get('/prueba', isAuthenticated, (req, res) => {
    res.sendFile(`${__dirname}/web/html/index.html`)

});

app.get('/:email', isAuthenticated, user.get)

app.options('/', user.list)

app.post('/email', isAuthenticated, user.create)

app.post('/login', auth.login)

app.post('/register', auth.register)

app.put('/:email', isAuthenticated, user.update)

app.patch('/:id', isAuthenticated, user.update)

app.delete('/:email', isAuthenticated, user.delete)

app.use(express.static('web'))

app.get('/', (req, res) =>{
    res.sendFile(`${__dirname}/web/html/index.html`)
})



app.listen(port, () => {
    console.log('arrancando')
})


