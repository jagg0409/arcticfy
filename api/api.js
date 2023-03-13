const express = require('express')
const mongoose =require('mongoose')
const user = require('./user.controler')
const app = express()
const port = 2000

app.use(express.json())
  
mongoose.connect('mongodb+srv://jagg0409:lolazo0409@arcticfy.6tbtlze.mongodb.net/?retryWrites=true&w=majority')

app.get('/:username', user.get)
   
app.options('/', user.list)

app.post('/', user.create)

app.put('/:username', user.update)

app.patch('/:id', user.update)

app.delete('/:username', user.delete)

app.use (express.static('web'))

app.get('/', (req, res) =>{
    res.sendFile(`${__dirname}/web/html/registro.html`)
})

app.listen(port, () =>{
    console.log ('arrancando')
})