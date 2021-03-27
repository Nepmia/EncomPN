var saved_scroll = 0; // Keep user scroll to compare it later
$(document).ready(function() {
    $(window).scroll(function() { // Exec when user scoll
          var new_scroll = $(window).scrollTop(); // Distance user scrolled from the top of the page
          if (new_scroll > saved_scroll){ // Compare if scrolled distance is higher (if it is then the navbar will be disabled)
              if ( new_scroll > 95){ // Be sure the user scrolled a bit before disabling navbar
                toggleNavbar("off");
                $(".navbar").removeClass("toggled");  
              } else { 
                  // pass
              }
            saved_scroll = new_scroll; // Gives saved scroll the new scroll value so we can use it later
          } else { // That's if new_scroll is lower than saved_scroll, meaning user has scrolled up so we enable the navbar
            toggleNavbar("on");
            $(".navbar").addClass("toggled");
            saved_scroll = new_scroll; // Gives saved scroll the new scroll value so we can use it later
          }
    });

    $(".navbar").hover(function(){ // If user hover the navbar (as a litle bit of the navbar is still on the viewport)
      toggleNavbar("on"); // Activate navbar
    }, function(){ // When user stop hovering navbar
        if ($(".navbar").hasClass("toggled")){ // if the navbar is toggled, means the user is at top of page or has changed page then do nothing
            // pass
        } else { // if the navbar is not toggled just disable it
            toggleNavbar("off");
        }
    });
});