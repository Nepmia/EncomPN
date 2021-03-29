var eContainerInstance; // Initialize eContainerInstance
var rEc;
function eContainerPopScroll(rClass){ // Target specific eContainer to animate it
    rEc = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5); // Generate random class str
    $("." + rClass).find(".ec-frame").removeClass("eCoff"); // Animation purpose
    $("." + rClass).find(".ec-c").addClass(rEc); // add random generated element class str to the target 
    eContainerInstance = setTimeout((rEc) => {
                            $("." + rEc).removeClass("eC-c-off"); // Flicking Animation purpose
                            setTimeout(() =>{
                                $("." + rEc).addClass("eC-c-off"); // Flicking Animation purpose
                                setTimeout(() => { 
                                    $("." + rEc).removeClass("eC-c-off"); // Flicking Animation purpose
                                    eContentPop(rEc); // Show content after flicks
                                },50, rEc);   
                            },100, rEc);    
                        },500, rEc);
};
function eContentPop(rEc) {
    $("." + rEc).children().each(function(i){ // for each elt in random .ec-c
        setTimeout ( function(){ 
            $("." + rEc).find(".ec-elt" + i).removeClass("ec-elt-off"); // Make content appear with a delay between them
          },i * 50, rEc);
        });
}
$(window).scroll(function(){ // When user scrolls
    $(".eContainer-Scroller").onScrolledTo(0.5, function(){ // if eContainer enters in 20% of viewport
        if (this.hasClass("scrolled")){ // Verify if the targeted container is already shown
            // pass
        } else { 
            rClass = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5); // Generate random class str
            this.addClass("scrolled"); // gives scrolled class so this function don't loop
            this.addClass(rClass); // gives random class
            eContainerPopScroll(rClass); // make targeted container appear
        }
    });
});
