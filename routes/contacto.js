var express =require('express');
var router=express.Router();

router.get('/', function (reg,res,next){
    res.render('contacto')//se dirige  a contacto.hbs
})

module.exports=router;