var express = require('express');
const { database } = require('../config/helper');
var router = express.Router();
//var UserController=require('../Controllers/UserController');
var OrdersController = require('../Controllers/OrdersController');


router.get('/fetch',OrdersController.getAllOrder);
router.get('/order/:id',OrdersController.getOrder);


router.post('/orderr',async (req,res)=>{
   let {userId, evenements}= req.body;
   console.log(userId)
  if(userId !== null && userId > 0){
    database.table('orders')
    .insert({
        idUser : userId
    }).then(function (newOrderId) {
        console.log(newOrderId);
            if (newOrderId.insertId > 0) {
                evenements.forEach(async (p) => {
                    let data = await database.table('evenements').filter({ idE: p.id }).withFields(['nbrT']).get();
                    console.log(p.id);
                    let inCart = parseInt(p.incart);
                    console.log(data.nbrT);
                    if (data.nbrT > 0) {
                        data.nbrT = data.nbrT - inCart;
                        if (data.nbrT < 0) {
                            data.nbrT = 0;
                        }
                    } else {
                        data.nbrT = 0;
                    }

                    console.log("============================");

                    database.table('ordersdetails')
                        .insert({
                            idOrders: newOrderId.insertId,
                            idEvents: p.id,
                            quantity: inCart
                        }).then(newId => {
                            database.table('evenements')
                                .filter({ idE: p.id })
                                .update({
                                    nbrT: data.nbrT
                                }).then(successNum => {
                                    res.status(200).json({message:"new order added"})
                                }).catch(err => console.log(err));
                        }).catch(err => console.log(err));
                });

            } else {

                res.json({ message: 'New order failed while adding order details', success: false });
            }
            // res.json({
            //     message: `Order successfully placed with order id ${newOrderId}`,
            //     success: true,
            //     idOrders: newOrderId,
            //     evenements: evenements
            // })
        }).catch(err=> console.log(err));
  }
  else {
    res.json({message: 'New order failed', success: false});
}
 });






module.exports = router;