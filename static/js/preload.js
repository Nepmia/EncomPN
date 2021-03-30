window.onload = function() {
    $("#preloader").removeAttr("loop");
    $("video").on("ended", function(){
        footerPlacer();
        $(".preloader-table").addClass("hidden");
        $(".eContainer").each(function(){
            if ($(this).hasClass("eContainer-Scroller")) {
                // pass
            } else {
                var rClass = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                $(this).addClass(rClass);
                eContainerPopScroll(rClass);
            }
        });
    });
  }