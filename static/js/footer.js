function footerPlacer() {
    var page = $(".page-content").height();  
    var footer = $(".foot").height();
    var footer_pos = page - footer;
    $(".foot").css("top", footer_pos + "px");
    console.log("footer_pos=" + footer_pos);
    console.log("page_h=" + page);
    console.log("footer_h=" + footer);
}
$(document).ready(() =>{
    footerPlacer();
})

window.onresize = footerPlacer;