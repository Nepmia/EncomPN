function eContainerPop(){
    $(".ec-frame").removeClass("eCoff");
    setTimeout(() => {
        $(".ec-c").removeClass("eC-c-off");
        setTimeout(() =>{
            $(".ec-c").addClass("eC-c-off");
            setTimeout(() => {
                $(".ec-c").removeClass("eC-c-off"); 
            },50);   
        },100);    
    },1000);
    
};