var express =require('express');
var router=express.Router();

router.get('/', function (reg,res,next){
    res.render('galeria')//se dirige  a galeria.hbs
})

module.exports=router;