const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://jagg0409:lolazo0409@arcticfy.6tbtlze.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model('user', {
    username: String,
    pass: String, 
})
module.exports = User

const crear = async ()=>{
    const user = new User({ username:'gabi', pass:'04'}) 
    const save = await user.save() 
    console.log (save)
} 
//crear() 

const buscar = async () =>{
    const users=await User.find()
    console.log(users)
}
//buscar()

const busca = async () =>{
    const nick = await User.find({username:'jagg0409'})
    console.log(nick)
}
//busca()

const busca1 = async() => {
    const uno = await User.findOne({username:'jagg'})//.findOne nos va a devolver un objeto mientras un .find nos devuelve un array(arreglo)
    console.log(uno)
}
//busca1 ()

const actu = async () =>{
    const user =await User.findOne({ username:'jagg0409'})
    console.log(user)
    user.pass = 301005
    await user.save()
}
//actu()

const eliminar = async ()=>{
    const user  = await User.findOne({username: 'jagg'})
    console.log(user)
    if (user) {
        await user.deleteOne()
    }
}
//eliminar()