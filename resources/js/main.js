jQuery(document).ready(function() {

    "use strict";
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
      });

      $(".text").typed({
        strings:["<strong>That's Not a </strong><strong class='primary'> cookie.</strong>","<strong>and you know</strong><strong class='primary'> that hue</strong>", "<strong>you know</strong><strong class='primary'> that</strong>"],
         typespeed:0,
         loop:true
     });

     $(window).scroll(function(){
        
      var top = $(window).scrollTop();
       if(top>=60){
         $("nav").addClass('secondary'); 
       }
       
       else 
           if($("nav").hasClass('secondary')){
               $("nav").removeClass('secondary'); 
           }
   });
});