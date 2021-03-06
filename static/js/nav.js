var navLoadInstance; // Initialize navload instance so it can be cleared when changing page

const titles = { // Titles dict
    home: "Home - EncomPN",
    demo: "Demo - EncomPN",
    map: "Relay Map - EncomPN"
};

$(document).ready(() => {
    $(document).on("click", ".pageChanger", function(){ // When user click on a pagechanger elt
            clearTimeout(eContainerInstance); // Clear the eContainer instance to avoid weird bahavior
            clearTimeout(navLoadInstance); // Clear navLoad instance
            var newPage = $(this).attr("page"); // get clicked elt destination
            console.log(newPage)
            changePage(newPage); // Change page to the desired page
            $(".navbar").addClass("toggled"); // add toggled to navbar to be sure it is not affected by ScrollFx until user scrolls
    });

    navCheck(); // When document load, check the hash to see if a page needs to be loaded
});
function changePage(newPage){
    $(".pageChanger").removeClass("active"); // Remove all active classes for pageChangers
    if (newPage != "404") { // Only if newPage is not equal to 404
       var newTitle = eval("titles." + newPage); // Format newPage to get a title in title dict
       $("." + newPage).addClass("active"); // Give the pagechanger with newPage in their class the active class
       document.title = newTitle; // Change document title to the new parsed one
    } else {
        document.title = "Error 404 - EncomPN"; // Give page a 404 title
    }
    $("html,body").animate({ scrollTop: 0 }, "swing", () => { // Rescroll up
        saved_scroll = 0; // Reset saved scroll so user doesn't get weird navbar
    });
    window.location.hash = newPage; // Change hash to the current page
};
function contentUnload(newPage){ 
    $(".content").addClass("cOff"); // Animation purpose
    navLoadInstance = setTimeout(() => { // Load instance so the content is unload and loaded
                            $(".page-content").empty();
                            loadContent(newPage);
                        },300);
};
function loadContent(newPage){
    var newPath = "/template/" + newPage + ".html"; // Get local template
    $(".page-content").load( newPath ); // load template on page
};
function navSwitch(newPage){
    changePage(newPage); // Change page to the desired page
    contentUnload(newPage); // Unload content
    sideNav("off"); // Disable sidenav (incase it was opened)
};
function navCheck(){
    clearTimeout(eContainerInstance); // Clear the eContainer instance to avoid weird bahavior
    clearTimeout(navLoadInstance); // Clear navLoad instance
    var newPage = window.location.hash; // get new hash
    var page = newPage.replace("#", ""); // parsing purpose
    if (page in titles) { // if new hash is in title dict
        navSwitch(page);  
    } else if (page == "") { // if hash is null
        navSwitch("home");
    } else { // if hash is unknow 
        alert("ERROR 404: The page you requested doesn't exist on this server. Please check URL. Redirecting to home page.")
        navSwitch("home");
    }
}


window.addEventListener('hashchange', function() { // Listen for hash changes
    navCheck();
}, false);





function toggleNavbar(status){
  if ( status == "on"){
    $(".navbar").css("transform", "translateY(0px)");
  } else {
    $(".navbar").css("transform", "translateY(-50px)");
  } 
}
function animateLoad(){ // Animation pupose
    setTimeout(() =>{ 
        $(".content").removeClass("cStand")
    },10)
}