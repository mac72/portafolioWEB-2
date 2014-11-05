'use strict';
$(function(){
  var control = 0;
  var index = 0;
  var $galeria;
  var total = 0;

  $('#seccion-trabajo #trabajos-container a').on('click',function(){
    index = $(this).index();
    $('#seccion-trabajo #colecciones-container').fadeIn();
    $('#seccion-trabajo #colecciones-container .coleccion-container').hide();
    $('#seccion-trabajo #colecciones-container .coleccion-container').eq(index).fadeIn();
    $('#seccion-trabajo #colecciones-container .coleccion-container').eq(index).children().eq(0).children().hide();
    $('#seccion-trabajo #colecciones-container .coleccion-container').eq(index).children().eq(0).children().eq(0).fadeIn();
    control = 0;
    $galeria = $('#' + $(this).attr('href'));
    total = $galeria.children().size();
    return false;
  });
  $('#seccion-trabajo #colecciones-container .coleccion-container .descripcion .cerrar a').on('click', function(){

    $('#seccion-trabajo #colecciones-container').fadeOut();
    return false;
  });

  $('#seccion-trabajo #colecciones-container .coleccion-container .descripcion .controles .siguiente').on('click', function(){
      control = (control + 1) % total;
      $galeria.children().hide();
      $galeria.children().eq(control).fadeIn();
      return false;
  });

   $('#seccion-trabajo #colecciones-container .coleccion-container .descripcion .controles .anterior').on('click', function(){
      control = (control - 1) % total;
      $galeria.children().hide();
      $galeria.children().eq(control).fadeIn();
      return false;
  });

});
