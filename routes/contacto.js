var express =require('express');
var router=express.Router();
var nodemailer=require('nodemailer');//para que levante nodemailer

router.get('/', function (reg,res,next){
    res.render('contacto', {
        isContacto:true
    })//se dirige  a contacto.hbs
})
// funcionamiento del formulario
router.post('/', async function (req,res,next){
     //console.log(req.body); para ver por comsola si anda
    //  va a procesar lo que pase en el formulario
    var nombre= req.body.nombre;// nombre hace referencia  al formulario, al imput name=nombre en mcontacto.hbs
    var email= req.body.email;// email imput name=mail del contacto.hbs
    var tel= req.body.tel;// tel imput name=tel del contacto.hbs
    var mensaje= req.body.comentarios;// mensaje imput name=comentarios del contacto.hbs


/*datos para el envio, a quien va */
var obj={
    to:'matymdq2015@gmail.com',
    subject:'contacto desde la web transporte ',
    html: 'se contacto' + nombre +'y su correo es '+ email+ '. <br> su telefono es '+tel+'.<br> y su comentario es '+ mensaje+'.'
    
}
// lo sacamos de la pagina https://mailtrap.io/
var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,//para que se comunique con .env
    port: process.env.SMTP_PORT,
    auth: {
      user:process.env.SMTP_USER,
      pass:process.env.SMTP_PASS 
    }
  });
  


  var info=await transport.sendMail(obj);//evio de datos
  res.render('contacto',{
      message:'mensaje enviado correctamente',
      isContacto:true
  })

})

module.exports=router;