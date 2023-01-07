const express= require('express');
const router= express.Router();
const publiciteController= require('../Controllers/publiciteController');



router.post('/ajouter/' , publiciteController.ajouterPublicite);
router.put('/update/:id' , publiciteController.updatePublicite);
router.delete('/delete/:id' , publiciteController.deletePublicite);
router.get('/afficher/:id' , publiciteController.afficherPubliciteId);
router.get('/afficher' , publiciteController.afficherPublicite);





module.exports=router;