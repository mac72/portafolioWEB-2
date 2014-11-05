'use strict';
$(function(){
    jQuery.fn.acordeon =function(){
      this.each(function(){
        var $acordeon = $(this);
        $acordeon.children().on('click',function(){
          var $tab = $(this);
          if($tab.hasClass('tab-activa')){
            $('.tab-activa').removeClass('tab-activa');
            $tab.children('.contenido').slideToggle();
          }else{
              $tab.addClass('tab-activa');
              $tab.children('.contenido').slideToggle();
          }
          return false;
        });
      });
    };

});
