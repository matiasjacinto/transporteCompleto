var express =require('express');
var router=express.Router();

router.get('/', function (reg,res,next){
    res.render('novedades')//se dirige  a novedades.hbs
})

module.exports=router;