function footerPlacer() {
    var page = $(".page-content").height();  
    var footer = $(".foot").height();
    var footer_pos = page - footer;
    $(".foot").css("top", footer_pos + "px");
}
$(document).ready(() =>{
    footerPlacer();
})

window.onresize = footerPlacer;