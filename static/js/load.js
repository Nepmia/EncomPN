window.onload = function() {
    $("#preloader").removeAttr("loop");
    footerPlacer();
    $("video").on("ended", function(){
        $(".preloader-table").addClass("hidden");
        setTimeout(() => {
            $(".preloader-table").addClass("d-none");
            $(".anPre").removeClass("anPre");
            if ($(".current").attr("page") == "home"){
              progressBar();
            } else {
              // pass
            }
        },200);
    });
  }