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

$(document).on("click", ".eDrop-bg", function(){
    if ($(this).hasClass("opened")) {
        $(this).css({"height": "50px","overflow-y": "hidden"}).removeClass("opened");
        if ($(this).hasClass("noSelect")){
            $(this).animate({ scrollTop: 0 }, "slow", () => { // Rescroll up
                // pass
            });
        }
    } else {
        $(this).css({"height": "350px","overflow-y": "scroll"}).addClass("opened");
    }
});