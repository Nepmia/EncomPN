var eContainerInstance; // Initialize eContainerInstance
function eContainerPop(){
        $(".ec-frame").removeClass("eCoff"); // Animation purpose
        eContainerInstance = setTimeout(() => {
                                $(".ec-c").removeClass("eC-c-off"); // Flicking Animation purpose
                                setTimeout(() =>{
                                    $(".ec-c").addClass("eC-c-off"); // Flicking Animation purpose
                                    setTimeout(() => { 
                                        $(".ec-c").removeClass("eC-c-off"); // Flicking Animation purpose
                                        eContentPop(); // Show content after flicks
                                    },50);   
                                },100);    
                            },1000);
};
function eContainerPopScroll(rClass){
    var rEc = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    $("." + rClass).find(".ec-frame").removeClass("eCoff"); // Animation purpose
    $("." + rClass).find(".ec-c").addClass(rEc);
    eContainerInstance = setTimeout((rEc) => {
                            console.log(rEc)
                            $("." + rEc).removeClass("eC-c-off"); // Flicking Animation purpose
                            setTimeout(() =>{
                                $("." + rEc).addClass("eC-c-off"); // Flicking Animation purpose
                                setTimeout(() => { 
                                    $("." + rEc).removeClass("eC-c-off"); // Flicking Animation purpose
                                    eContentPop(); // Show content after flicks
                                },50);   
                            },100);    
                        },1000);
};
function eContentPop() {
    $('.ec-c').children().each(function(i){ // for each elt in .ec-c
        setTimeout ( function(){ 
            $('.ec-elt' + i).removeClass('ec-elt-off'); // Make content appear with a delay between them
          },i * 50);
        });
}

$(".eContainer-Scroller").onScrolledTo(0.5, function(){
    var rClass = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    $(this).find(".ec-frame").addClass(str);
    eContainerPopScroll(str);
});