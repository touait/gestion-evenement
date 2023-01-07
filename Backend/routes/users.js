var express = require('express');
var router = express.Router();
var UserController=require('../Controllers/UserController');

router.put('/updateuser/:idU', UserController.UpdateUser);
/* Delete user */
router.delete('/removeuser/:idU', UserController.DeleteUser);
/* GET user by id  */
router.get('/user/:idU', UserController.GetUserByID);
/*GetAllUser*/
router.get('/fetch', UserController.GetAllUsers);


/*Register user */
router.post('/register',(req,res)=>{

  UserController.register(req.body.nom,req.body.prenom,req.body.email,req.body.pwd,req.body.telephone,req.body.role,req.body.photo)   
  .then(response=>res.status(200).json(response))
  .catch(err=>res.status(400).json(err))

});
/*login user*/
  router.post('/login',(req,res)=>{
    UserController.login(req.body.email,req.body.pwd)   
  .then(token=>res.status(200).json({token:token}))
  .catch(err=>res.status(400).json({err:err}))

 });


module.exports = router;
