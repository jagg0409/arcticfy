const express = require('express')
const bcrypt = require('bcrypt')
const { expressjwt } = require("express-jwt")
const jwt = require('jsonwebtoken') 
const { Router } = require('express')
const User = require('./user')
    
const validateJwt = expressjwt({secret: process.env.SECRET, algorithms: ['HS256']})

const singtoken = _id => jwt.sign({_id}, process.env.SECRET)

const findAndAssingUser = async (req, res, next)=>{
    
    try {
        const user = await User.findById(req.auth._id)
    if(!user) {
        return res.send('usuario no existe')    
        }
        
        req.auth = user
        next()
    }
    
    catch(e){
        next (e)
    }
}

    

    const auth ={
        login: async (req, res) =>{
            
        const {body} = req
        try{
            const user = await User.findOne({ email: body.email})
            if(!user){
                res.send('usuario y contraseña incorrecta')
            }else{
                const isMatch= await bcrypt.compare(body.password, user.password)
                
                if(isMatch){
                    const signed = singtoken(user._id)
                    res.send(signed)
                }else{
                    console.log("no es correcta la comparcion");
                }
                }
        }

        catch(e){
            res.send(e.message)
        }
        },

        register: async(req, res)=>{
            const { body } = req
            try {
                const isuser = await User.findOne({email: body.email})
            if(isuser){
                res.send('usuario ya existe')
            }else{
                const salt = await bcrypt.genSalt()
                const hashed = await bcrypt.hash(body.password, salt)
                const user = await User.create({ email: body.email, password: hashed, salt})
                const signed = singtoken(user._id)
                res.send(signed)
            }
            }catch(err){
                res.send(err.message)
            }
        },
    }
    const isAuthenticated = express.Router().use(validateJwt, findAndAssingUser)
module.exports= {auth, isAuthenticated}