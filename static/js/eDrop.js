const cities = [
    "Paris",
    "Washington D.C.",
    "New York",
    "Berlin",
    "London",
    "Tokyo",
    "Osaka",
    "Kyoto",
    "Madrid",
    "Dublin",
    "Brighton",
    "Lyon",
    "Marseille",
    "Detroit",
    "Montreal",
    "Quebec",
    "Le Caire",
    "Dubaï",
    "Shangai",
    "Séoul",
    "Luxembourg"
]
var from;
var to;


function cityImporter() {
    for (city_name in cities.sort()) {
        $(".eDrop-ul").append("<li class='btrans eDrop-list-item uL eDrop-marg' item='" + cities[city_name] + "'>" + cities[city_name] + "</li>");
    }
}
function closeDrop() {
    $(".eDrop-bg").css({"height": "50px","overflow-y": "hidden"}).removeClass("opened");
    $(".eDrop-bg").find("#eDrop").css("pointer-events", "none");
    if ($(".eDrop-bg").hasClass("noSelect")){
        $(".noSelect").animate({ scrollTop: 0 }, "slow", () => { // Rescroll up
            // pass
        });
    } else if ($(".eDrop-bg").hasClass("Selected")){
        // pass
    }
}

$(document).on("click", ".eDrop-bg", function(event){
    if (event.currentTarget !== event.target) {
        return;
    }
    if ($(".eDrop-bg").hasClass("opened")) {
        closeDrop();
        $(this).css({"height": "350px","overflow-y": "scroll"}).addClass("opened");
        $(this).find("#eDrop").css("pointer-events", "all")
    } else {
        $(this).css({"height": "350px","overflow-y": "scroll"}).addClass("opened");
        $(this).find("#eDrop").css("pointer-events", "all");
    }
});
$(document).on("click", ".eDrop-ul", function(event){
    if (event.currentTarget !== event.target) {
        return;
    }
    closeDrop();
});

$(document).on("click", ".eDrop-list-item", function(){
    var scrolled = $(this).position();
    console.log("clique salope" + scrolled.top);
    console.log($(".opened").find(".eDrop-bg"));
    $(".opened").addClass("Selected").removeClass("noSelect");
    $(".opened").animate({ scrollTop: scrolled.top }, "slow", () => { // Rescroll up
        closeDrop();
    });
});