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

function cityImporter() {
    for (city_name in cities.sort()) {
        $(".eDrop-ul").append("<li class='btrans eDrop-list-item uL eDrop-marg'>" + cities[city_name] + "</li>");
    }
}
function closeDrop() {
    $(".eDrop-bg").css({"height": "50px","overflow-y": "hidden"}).removeClass("opened");
    $(".eDrop-bg").find("#eDrop").css("pointer-events", "none");
}

$(window).click(function() {
    if ($(".eDrop-bg").hasClass("opened")){
        closeDrop();
    }
});

$(document).on("click", ".eDrop-bg", function(event){
    if (event.currentTarget !== event.target) {
        return;
    }
    if ($(".eDrop-bg").hasClass("opened")) {
        closeDrop();
        if ($(".eDrop-bg").hasClass("noSelect")){
            $(".eDrop-bg").animate({ scrollTop: 0 }, "slow", () => { // Rescroll up
                // pass
            });
        } else {}
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
    console.log("CLIKED ON TQ MERE")
});

$(document).on("click", ".eDrop-list-item", function(){
    var scrolled = $(this).position();
    $(this).parent(".eDrop-bg").addClass("Selected").removeClass("noSelect");
    $(this).parent(".eDrop-bg").scroll();
    $(this).parent(".eDrop-bg").animate({
    scrollTop: scrolled
    }, 20);
});