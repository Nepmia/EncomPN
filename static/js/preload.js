window.onload = function() {
    $("#preloader").removeAttr("loop");
    footerPlacer();
    $("video").on("ended", function(){
        $(".preloader-table").addClass("hidden");
        setTimeout(() => {
            $(".preloader-table").addClass("none");
        },200);
    });
  }