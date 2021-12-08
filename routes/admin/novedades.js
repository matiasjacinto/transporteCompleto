var express = require("express");
var router = express.Router();

var novedadesModel = require("../../models/novedadesModels");

//listado novedades
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  res.render("admin/novedades", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    novedades,
  });
});

//vista del formulario de agrgar
router.get("/agregar", function (req, res, next) {
  res.render("admin/agregar", {
    layout: "admin/layout",
  });
});

//procesa funcionamiento del boton agregar
router.post("/agregar", async function (req, res, next) {
  try {
    console.log(req.body);
    if (
      req.body.titulo != "" &&
      req.body.subtitulo != "" &&
      req.body.contenido != ""
    ) {
      await novedadesModel.insertNovedad(req.body);
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        message: "complete toods los campos",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      message: "no se cargo la novedad",
    });
  }
});

//procesa funcionamiento de eliminar
router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadByID(id);
  res.redirect("/admin/novedades");
});

module.exports = router;
