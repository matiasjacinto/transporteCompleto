
var express =require('express');
var router=express.Router();

router.get('/', function (reg,res,next){
    res.render('nosotros')//se dirige  a nosotros.hbs
})

module.exports=router;