const { response } = require('express');
var express = require('express');
var db=require('../models');


//Add event
exports.addEvent =(req,res)=>{
    db.evenements_model.create(req.body).then((response)=>{
     res.status(201).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
    };


//Show event by id
exports.showEvntById= (req,res)=>{
        db.evenements_model.findOne({where:{idE: req.params.id}}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
        res.status(400).send(err)
       })
};


//Show events
exports.showEvents= (req,res)=>{
           db.evenements_model.findAll().then((response)=>{
           res.status(200).send(response)}).catch((err)=>{
           res.status(400).send(err)
        })
};

//Delete
exports.deleteEvent =(req,res)=>{
       db.evenements_model.destroy({where:{idE:req.params.id}}).then(()=>{
        res.status(200).send(req.params.id)}).catch((err)=>{
            res.status(400).send(err)
       })
  };


//Update
exports.updateEvent = (req,res)=>{
    db.evenements_model.update(req.body,{where:{idE:req.params.id}}).then((response)=>{
     res.sendStatus(200).send(response)}).catch((err)=>{
     res.sendStatus(400).send(err)
     })
}