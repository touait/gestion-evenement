const express= require('express');
const router= express.Router();
const blogController= require('../Controllers/blogController');


router.post('/ajouter/' , blogController.ajouterBlog);
router.put('/update/:id' , blogController.updateBlog);
router.delete('/delete/:id' , blogController.deleteBlog);
router.get('/afficher/:id' , blogController.afficherBlogId);
router.get('/afficher' , blogController.afficherBlog);





module.exports=router;