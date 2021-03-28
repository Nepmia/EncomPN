var navLoadInstance;

const titles = {
    home: "Home - EncomPN",
    demo: "Demo - EncomPN",
    map: "Relay Map - EncomPN"
};

$(document).ready(() => {
    $(".pageChanger").click(function() {
        clearTimeout(navTimeoutInstance);
        clearTimeout(navLoadInstance);
        navTimeoutInstance = null;
        navLoadInstance = null;
        var newPage = $(this).attr("page");
        changePage(newPage);
        $(".navbar").addClass("toggled");
    });

    navCheck();
});
function changePage(newPage){
    $(".pageChanger").removeClass("active");
    if (newPage != "404") {
       var newTitle = eval("titles." + newPage);
       $("." + newPage).addClass("active");
       document.title = newTitle; 
    } else {
        document.title = "Error 404 - EncomPN"; 
    }
    $('html,body').animate({ scrollTop: 0 }, "fast", () => {
        saved_scroll = 0;
    });
    window.location.hash = newPage;
};
function contentUnload(newPage){
    $(".content").addClass("cOff");
    navLoadInstance = setTimeout(() => {
                            $(".page-content").empty();
                            loadContent(newPage);
                        },300);
};
function loadContent(newPage){
    var newPath = "/template/" + newPage + ".html";
    $(".page-content").load( newPath );
};
function navSwitch(newPage){
    changePage(newPage);
    contentUnload(newPage);
    sideNav("off");
};
function navCheck(){
    clearTimeout(navTimeoutInstance);
    clearTimeout(navLoadInstance);
    navTimeoutInstance = null;
    navLoadInstance = null;
    var newPage = window.location.hash;
    var page = newPage.replace("#", "");
    if (page in titles) {
        navSwitch(page);  
    } else if (page == ""){
        navSwitch("home");
    } else {
        navSwitch("404");
    }
}


window.addEventListener('hashchange', function() {
    navCheck();
}, false);





function toggleNavbar(status){
  if ( status == "on"){
    $(".navbar").css("transform", "translateY(0px)");
  } else {
    $(".navbar").css("transform", "translateY(-50px)");
  } 
}
function animateLoad(){
    setTimeout(() =>{
        $(".content").removeClass("cStand")
    },10)
}