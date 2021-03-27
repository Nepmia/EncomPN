function footerPlacer() { 
    var page = $(".page-content").height();  // Content height (since we use a container for the page instead of body)
    var footer = $(".foot").height(); // Footer height 
    var footer_pos = page - footer; // Calculate the difference between footer and page so we can move the footer at the bottom of the page
    $(".foot").css("top", footer_pos + "px"); // gives the footer an absolute position at the bottom of the page (also page has min-heigh : 100vh so the footer is always at bottom)
}
$(document).ready(() =>{
    footerPlacer(); // Calculate when page loads
})

$(window).resize(() =>{ // Listen for page resize so we can re-calculate the footer pos
    footerPlacer();
    setTimeout(() =>{ // Just a timeout to be sure the window has correctly maximized 
      footerPlacer();   
    }, 300)
})
