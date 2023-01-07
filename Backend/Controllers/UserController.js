var db=require('../models')
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');


exports.GetAllUsers=(req,res)=>{
     db.User.findAll().then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
     res.status(400).send(err)
       })
 
       };
exports.GetUserByID=(req,res)=>{
      db.User.findOne({where:{idU: req.params.idU}}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
        res.status(400).send(err)
        })
       
       
        };

exports.DeleteUser=(req,res)=>{
      db.User.destroy({where:{idU:req.params.idU}}).then((response)=>{
        res.sendStatus( 200 )}).catch((err)=>{
      res.status(400).send(err)
      })
  }

exports.UpdateUser=(req,res)=>{
    db.User.update(req.body,{where:{idU:req.params.idU}}).then((response)=>{
      res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
 
 
  }


exports.register=(nom,prenom,email,pwd,telephone,role,photo)=>{
    return new Promise((resolve,reject)=>{
    db.User.count({where:{email:email}}).then(doc=>{
        if (doc!=0){
          reject("this email is used")
        }{
          bcrypt.hash(pwd,10).then(hashedpwd=>{
        
            db.User.create({
              nom : nom,
              prenom : prenom,
              email : email,
              pwd : hashedpwd,
              telephone: telephone,
              role :role,
              photo :photo
             }).then((response)=>resolve(response))
             .catch((err)=>reject(err))
            
          })
        
        }
        
         })
        })
}

const privateKey="this is private key iuygutycfvgbihgyuvcfj!!qiejfuhqnb?irfirfu"

exports.login=(email,pwd)=>{
    return new Promise((resolve,reject)=>{
    db.User.findOne({where:{email:email}}).then(user=>{
        if (!user){
          reject("invalid email and password")
        }else{
          bcrypt.compare(pwd,user.pwd).then(same=>{
            if(same=true){
              let token=jwt.sign({id:user.idU,nom:user.nom,role:user.role},privateKey,{
                expiresIn:"24h"
              })
              resolve({token})
            }else{
              reject("invalid email and password")
            }
          })
        }})
    
})}

