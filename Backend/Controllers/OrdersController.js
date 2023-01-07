//var db=require('../models');
const {database} = require('../config/helper')
var express = require('express');
const router = require('../routes/users');
/*get all orders*/
exports.getAllOrder=(req,res)=>{
  database.table('ordersdetails as od')
    .join([
        {
            table:'orders as o',
            on: 'o.idO = od.idOrders'
        },
        {
            table: 'evenements as e',
            on: 'e.idE = od.idEvents'
        },
        {
            table: ' users as u ',
            on : 'u.idU = o.idUser'
        }
        ])
        .withFields(['od.id','e.name as name','e.description','od.quantity','u.nom'])
        .getAll()
        .then(orders=>{
            if(orders.length > 0){
                res.status(200).json(orders);
            }else 
            {
                res.json({message: 'no orders found'})
            }
        }).catch(err => console.log(err));
    
}
// get single order 
exports.getOrder=(req,res)=>{
  const orderId = req.params.id;
  database.table('ordersdetails as od')
    .join([
        {
            table:'orders as o',
            on: 'o.idO = od.idOrders'
        },
        {
            table: 'evenements as e',
            on: 'e.idE = od.idEvents'
        },
        {
            table: ' users as u ',
            on : 'u.idU = o.idUser'
        }
        ])
        .withFields(['o.idO','e.nom as name','e.description','e.prixt','u.nom'])
        .filter({'o.idO':orderId})
        .getAll()
        .then(orders=>{
            if(orders.length > 0){
                res.status(200).json(orders);
            }else 
            {
                res.json({message: 'no orders found '})
            }
        }).catch(err => console.log(err));
    
}






// exports.getAllOrder=(req,res)=>{
//           db.orders.findAll().then((response)=>{
//         res.status(200).send(response)}).catch((err)=>{
//        res.status(400).send(err)
//          })
   
//          };

         