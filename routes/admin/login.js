var express=require('express');
var router=express.Router();
var usuariosModel=require('./../../models/usuariosModels');//



//recibir y mostrar ls vista de admin/login
router.get('/', function(req,res,next){
    res.render('admin/login',{
        layout:'admin/layout'//para que cargue otro layout y no muestare el nav
    })
});

router.post('/', async function(req,res,next){
    try{
        var usuario=req.body.usuario;
        //este dato de la variable va a data
        var password=req.body.password;
        //este dato de la variable va a data


        var data= await usuariosModel.getUserAndPassword(usuario, password);

        if(data !=undefined){
            req.session.id_usuario=data.id;
            req.session.nombre=data.usuario;
            
            res.redirect('/admin/novedades');
        }else{
            res.render('admin/login',{
                layout:'admin/layout',
                error:true//si exite error de autentificacion coloco el error  en login.hbs para que se vea en pantalla, debajo del form

            })
        }

    }catch(error){
    console.log(error)
    }


})



module.exports=router;