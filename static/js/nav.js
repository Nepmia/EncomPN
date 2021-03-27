/* Page Navigation */
const titles = {
    home: "Home - EncomPN",
    demo: "Demo - EncomPN",
    map: "Relay Map - EncomPN"
};

$(document).ready(() => {
    $(".pageChanger").click(function() {
        var newPage = $(this).attr("page");
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        changePage(newPage);
        contentUnload(newPage);
    });
});
function changePage(newPage){
    var newTitle = eval("titles." + newPage);
    document.title = newTitle;
    saved_scroll = 0;
    window.location.hash = newPage;
};
function contentUnload(newPage){
    $("footer").addClass("hidden");
    setTimeout(() => {
        $(".page-content").empty();
        loadContent(newPage);
    },300);
};
function loadContent(newPage){
    var thisUrl = window.location.origin;
    var newUrl = thisUrl + "/template/" + newPage;
    // $(".page-content").load( newUrl + " div.page-content");
    $("footer").removeClass("hidden");
};
function navCheck(){
    var newPage = window.location.hash;
    navSwitch(newPage)
};



window.onhashchange = navCheck;





function toggleNavbar(status){
  if ( status == "on"){
    $(".navbar").css("transform", "translateY(0px)");
  } else {
    $(".navbar").css("transform", "translateY(-50px)");
  } 
}
