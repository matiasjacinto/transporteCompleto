var express=require('express');
var router=express.Router();

//recibir y mostrar ls vista de admin/login
router.get('/', function(req,res,next){
    res.render('admin/login',{
        layout:'admin/layout'//para que cargue otro layout y no muestare el nav
    })
});




module.exports=router;