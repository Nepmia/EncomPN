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
    for (city_name in cities) {
        $(".eDrop-ul").append("<li class='eDrop-list-item uL' style='margin: 0px 0px 50px 0px'>" + cities[city_name] + "</li>");
    }
}