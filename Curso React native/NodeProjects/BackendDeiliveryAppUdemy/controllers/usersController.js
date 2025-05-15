const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
module.exports={
    login(req,res){
        const email = req.body.email;
         const password = req.body.password;
         User.findByEmail(email, async (err,myUser)=>{
            if(err){
                return res.status(501).json({
                    success: false, 
                    message: "Error ",
                    error: err
                });
            }
            console.log("ERROR ", err)
            console.log("my user ", myUser)
            if(!myUser){
              return res.status(401).json({
                    success: false,
                    message: "El email no fue encontado"
                })
            }
             const isPasswordValid = await bcrypt.compare(password, myUser.password)
             if(isPasswordValid){
                const token = jwt.sign({
                    id: myUser.id, email: myUser.email 
                }, keys.secretOrKey,{});
                const data ={
                    id: myUser.id,
                    name: myUser.name,
                    lastname: myUser.lastname,
                    email: myUser.email,
                    phone: myUser.phone,
                    image: myUser.image,
                    session_token: `JWT ${token}`
                }
                return res.status(201).json({
                    success: true,
                    message: "El usuario fue autentificado",
                    data: data
                });
             }
             else{
                  return res.status(401).json({
                    success: false,
                    message: "El password es incorrecto."
                })
             }
       
        })
    },
    register(req,res){
        const user = req.body;
        User.create(user, (err,data)=>{
            if(err){
                return res.status(501).json({
                    success: false, 
                    message: "Hubo un error con el registrodel usuario",
                    error: err
                });
            }
           
            return res.status(201).json({
                    success: true,
                    message: "El registro se realizó correctamente",
                    data: data
                })
        })
    }
}