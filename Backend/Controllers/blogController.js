const { response } = require('express');
var express = require('express');
var db=require('../models');


//methode ajouter
exports.ajouterBlog =(req,res)=>{
    db.blogs_model.create(req.body).then((response)=>{
     res.status(201).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
    };


//methode afficher par id
exports.afficherBlogId= (req,res)=>{
        db.blogs_model.findOne({where:{idB: req.params.id}}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
        res.status(400).send(err)
       })
};


//methode afficher
exports.afficherBlog= (req,res)=>{
           db.blogs_model.findAll().then((response)=>{
           res.status(200).send(response)}).catch((err)=>{
           res.status(400).send(err)
        })
};

//methode delete
exports.deleteBlog =(req,res)=>{
       db.blogs_model.destroy({where:{idB:req.params.id}}).then(()=>{
        res.status(200).send(req.params.id)}).catch((err)=>{
       res.status(400).send(err)
       })
  };


//methode update
exports.updateBlog = (req,res)=>{
    db.blogs_model.update(req.body,{where:{idB:req.params.id}}).then((response)=>{
     res.status(200).send(response)}).catch((err)=>{
     res.status(400).send(err)
     })
}

//methode search
//one to many
// blogs_model.hasMany(publicites_model)
// publicites_model.belongsTo(blogs_model)
