const { response } = require('express');
var express = require('express');
var router = express.Router();
var ReclamationController=require('../Controllers/ReclamationController');

router.put('/updaterec/:idRec', ReclamationController.UpdateRec);

router.delete('/removerec/:idRec', ReclamationController.DeleteRec);
/* GET user by id  */
router.get('/reclamation/:idRec', ReclamationController.GetRecByID);
/*GetAllUser*/
router.get('/fetch', ReclamationController.GetAllRec);
/*add rec */
router.post('/addrec', ReclamationController.Addrec);

 module.exports = router;