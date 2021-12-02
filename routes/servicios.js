var express =require('express');
var router=express.Router();

router.get('/', function (reg,res,next){
    res.render('servicios')//se dirige  a servicios.hbs
})

module.exports=router;