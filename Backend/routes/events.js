const express= require('express');
const router= express.Router();
const eventController= require('../Controllers/eventController');



router.post('/addEvent/' , eventController.addEvent);
router.put('/update/:id' , eventController.updateEvent);
router.delete('/delete/:id' , eventController.deleteEvent);
router.get('/showEvent/:id' , eventController.showEvntById);
router.get('/ShowAllEvents' , eventController.showEvents);





module.exports=router;