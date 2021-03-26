
$(document).ready(() => {
    $(".navbar-ham").click(() =>{
        sideNav("on")
    });

    $(".sidenav-closeBtn").click(() =>{
        sideNav("off")
    });

    $(".sidenav-noInt").click(() =>{
        sideNav("off")
    });
});

function sideNav (status){
    if (status == "on") {
        $(".sidenav").addClass("sideOn").removeClass("sideOff");
        $(".sidenav-noInt").removeClass("none");
        setTimeout(() =>{
            $(".sidenav-noInt").removeClass("hidden").addClass("visible");
        },10);
    }
    else {
        $(".sidenav").addClass("sideOff").removeClass("sideOn");
        $(".sidenav-noInt").removeClass("visible").addClass("hidden");
        setTimeout(() => {
            $(".sidenav-noInt").addClass("none");
        }, 300)
    }
}





