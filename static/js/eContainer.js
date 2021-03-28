var eContainerInstance;
function eContainerPop(){
    eContainerInstance = $(".ec-frame").removeClass("eCoff");
                            setTimeout(() => {
                                $(".ec-c").removeClass("eC-c-off");
                                setTimeout(() =>{
                                    $(".ec-c").addClass("eC-c-off");
                                    setTimeout(() => {
                                        $(".ec-c").removeClass("eC-c-off");
                                        eContentPop();  
                                    },50);   
                                },100);    
                            },1000);
};
function eContentPop() {
    $('.ec-c').children().each(function(i){
        setTimeout ( function(){
            $('.ec-elt' + i).removeClass('ec-elt-off');
          },i * 50);
        });
}