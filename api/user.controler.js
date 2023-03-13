const User = require('./indice')

const user ={
    get: async (req,res)=>{
       const{username} = req.params
        const user = await User.find({"username": username})
        res.status(200).send(user)

    },
    
    list: async (req,res)=>{
        const user = await User.find()
        res.send(user)
    },
    create: async (req,res) =>{
        const user =new User(req.body)
       const saveduser = await user.save()
        res.status(201).send(saveduser)
    },
    update: async (req,res)=>{
        const {username} = req.params
        const user = await User.findOne({"username": username})
        Object.assign(user, req.body)
       const changed =  await user.save() 
        res.status(201).send(changed)
    },
    delete: async (req,res)=>{
        const {username} = req.params
        const user = await User.findOneAndDelete({"username": username})
        res.status(201).send('eliminando')
    }
}

module.exports = user 