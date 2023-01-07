var db=require('../models');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');


const privateKey="this is private key ôùimulbhopkoopionbhjuyuhbj"

exports.UpdateRec=(req,res)=>{
    db.Rec.update(req.body,{where:{idRec:req.params.idRec}}).then((response)=>{
      res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
 
 
  }


exports.GetAllRec=(req,res)=>{
        db.Rec.findAll().then((response)=>{
      res.status(200).send(response)}).catch((err)=>{
     res.status(400).send(err)
       })
 
       };
exports.GetRecByID=(req,res)=>{
      db.Rec.findOne({where:{idRec: req.params.idRec}}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
        res.status(400).send(err)
        })
       
       
        };

exports.DeleteRec=(req,res)=>{
      db.Rec.destroy({where:{idU:req.params.idU}}).then((response)=>{
        res.sendStatus( 200 )}).catch((err)=>{
      res.status(400).send(err)
      })
  }


 
exports.Addrec=(req,res)=>{
      db.Rec.create(req.body).then((response)=>{
        res.sendStatus( 200 )}).catch((err)=>{
      res.status(400).send(err)
      })
  }
      
      
      
    
  

