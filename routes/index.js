/* CONTROLADOR- LE PASA LOS DATOS A LAS VISTAS */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     isHome: true //para activar el nav  en donde se encuentra se lo pasamos en el layout.hbs
    });
});
/* aca ponemos le pasamos propiedades */
module.exports = router;
