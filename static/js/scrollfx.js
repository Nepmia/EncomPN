var saved_scroll = 0;
$(document).ready(function() {
    $(window).scroll(function() {
          var new_scroll = $(window).scrollTop();
          if (new_scroll > saved_scroll){
              if ( new_scroll > 95){
                toggleNavbar("off");
                $(".navbar").removeClass("toggled");  
              } else {
                  // pass
              }
            saved_scroll = new_scroll;
          } else {
            toggleNavbar("on");
            $(".navbar").addClass("toggled");
            saved_scroll = new_scroll;
          }
    });

    $(".navbar").hover(function(){
      toggleNavbar("on");
    }, function(){
        if ($(".navbar").hasClass("toggled")){
            // pass
        } else {
            toggleNavbar("off");
        }
    });
});