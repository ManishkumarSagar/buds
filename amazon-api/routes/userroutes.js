const express= require('express')
const usercontrollers= require('../controller/usercontroller');
const route= express.Router();
route.get('/userlist',usercontrollers.userlist);
route.get('/singleuserlist/:id',usercontrollers.singleuserlist);
route.post('/registration',usercontrollers.registration);
route.post('/login',usercontrollers.login);
route.delete('/deleteuser/:id',usercontrollers.deleteuser);
route.put('/updateuser/:id',usercontrollers.updateuser);
module.exports= route;