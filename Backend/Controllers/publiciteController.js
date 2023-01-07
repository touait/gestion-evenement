const { response } = require('express');
var express = require('express');
var db=require('../models');



//methode ajouter
exports.ajouterPublicite =(req,res)=>{
    db.publicites_model.create(req.body).then((response)=>{
     res.status(201).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
    
    };


//methode afficher par id
exports.afficherPubliciteId= (req,res)=>{
        db.publicites_model.findOne({where:{idP: req.params.id}}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
        res.status(400).send(err)
       })
};


//methode afficher
exports.afficherPublicite = (req,res)=>{
           db.publicites_model.findAll().then((response)=>{
           res.status(200).send(response)}).catch((err)=>{
           res.status(400).send(err)
        })
};

//methode delete
exports.deletePublicite =(req,res)=>{
       db.publicites_model.destroy({where:{idP:req.params.id}}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
       res.status(400).send(err)
       })
  };


//methode update
exports.updatePublicite = (req,res)=>{
    db .publicites_model.update(req.body,{where:{idP:req.params.id}}).then((response)=>{
     res.status(200).send(response)}).catch((err)=>{
     res.status(400).send(err)
     })
}

//methode search
