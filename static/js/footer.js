function footerPlacer() {
    var page = $(".page-content");  
    var footer_pos = page.position().top + page.outerHeight(true);
    $(".foot").css("top", footer_pos + "px");
}

footerPlacer();

window.onresize = footerPlacer;