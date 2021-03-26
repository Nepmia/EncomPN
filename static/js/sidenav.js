function sideNav (status){
    if (status == "on") {
        $(".sidenav").addClass("sideOn").removeClass("sideOff");
        $(".sidenav-noInt").removeClass("none").addClass("visible");
    }
}

$(document).ready(() => {
    $(".navbar-ham").click(() =>{
        sideNav("on")
    });
});