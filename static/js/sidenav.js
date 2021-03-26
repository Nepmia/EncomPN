
$(document).ready(() => {
    $(".navbar-ham").click(() =>{
        sideNav("on")
    });
});

function sideNav (status){
    if (status == "on") {
        $(".sidenav").addClass("sideOn").removeClass("sideOff");
        $(".sidenav-noInt").removeClass("none").addClass("visible");
    }
    else {
        $(".sidenav").addClass("sideOff").removeClass("sideOn");
        $(".sidenav-noInt").removeClass("visible").addClass("hidden");
        setTimeout(() => {
            $(".sidenav-noInt").addClass("none");
        }, 300)
    }
}





