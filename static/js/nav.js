/* Page Navigation */
const titles = {
    home: "Home - EncomPN",
    demo: "Demo - EncomPN",
    map: "Relay Map - EncomPN"
};

$(document).ready(() => {
    $(".pageChanger").click(function() {
        var newPage = $(this).attr("page");
        changePage(newPage);
        $(".navbar").addClass("toggled");
    });

    navCheck();
});
function changePage(newPage){
    var newTitle = eval("titles." + newPage);
    $('html,body').animate({ scrollTop: 0 }, "fast", () => {
        saved_scroll = 0;
    });
    document.title = newTitle;
    window.location.hash = newPage;
    $(".pageChanger").removeClass("active");
    $("." + newPage).addClass("active");
};
function contentUnload(newPage){
    $(".content").addClass("cOff");
    setTimeout(() => {
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
    footerPlacer();
};
function navCheck(){
    var newPage = window.location.hash;
    var page = newPage.replace("#", "");
    navSwitch(page);
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