const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controler')
const app = express()
const { auth, isAuthenticated } = require('./auth.controler')
//const auth2 = require('./auth.controler-prueba')
const port = 2000

app.use(express.json())


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
    console.log('arrancando en el puerto 2000')
})


