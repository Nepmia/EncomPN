var eContainerInstance; // Initialize eContainerInstance
function eContainerPop(){
    $(".ec-frame").removeClass("eCoff"); // Animation purpose
    eContainerInstance =    setTimeout(() => {
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
function eContentPop() {
    $('.ec-c').children().each(function(i){ // for each elt in .ec-c
        setTimeout ( function(){ 
            $('.ec-elt' + i).removeClass('ec-elt-off'); // Make content appear with a delay between them
          },i * 50);
        });
}