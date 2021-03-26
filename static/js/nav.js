/* Page Navigation */
const titles = {
    home: "Home - EncomPN",
    demo: "Demo - EncomPN",
    map: "Relay Map - EncomPN"
}

$(document).ready(() => {
    $(".pageChanger").click(function() {
            var newPage = $(this).attr("page");
            var newTitle = eval("titles." + newPage);
            document.title = newTitle;
            saved_scroll = 0;
            contentLoad(newPage);
            toggleNavbar("on");
    });
});
function contentLoad(newPage){
    $("footer").addClass("hidden");
    setTimeout(() => {
        $(".page-content").empty();
        loadContent(newPage);
    },300);
};
function loadContent(newPage){
    var thisUrl = window.location.origin;
    var newUrl = thisUrl + "/template/" + newPage;
    $(".page-content").load( newUrl + " div.page-content");
    $("footer").removeClass("hidden");
}



$(document).ready(() =>{
    $(".content").addClass("c-on");
});

/* Navbar scroll fx */
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

function toggleNavbar(status){
  if ( status == "on"){
    $(".navbar").css("transform", "translateY(0px)");
  } else {
    $(".navbar").css("transform", "translateY(-50px)");
  } 
}
