window.onload = function() {
    $("#preloader").removeAttr("loop");
    $("video").on("ended", function(){
        footerPlacer();
        $(".preloader-table").addClass("hidden");
        setTimeout(() => {
            $(".preloader-table").addClass("none");
        },200);
    });
  }