'use strict';
$(function(){


  jQuery.fn.slider = function(options){
    var setting = jQuery.extend({
      time : 3000
    },options);
    this.each(function(){
      var $slider = $(this);
      var n = $(this).children().size();
      var i = 0;
      setInterval(function(){
        i = (i + 1) % n;
        $slider.children().hide(1000);
        $slider.children().eq(i).fadeIn(1500);
      }, setting.time);

    });
  };
});
