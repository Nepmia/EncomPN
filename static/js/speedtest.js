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
var from = null;
var to = null;

function dropCreation() {
    cityImporter(".drop1");
    cityImporter(".drop2");
}
function cityImporter(targ) {
    for (city_name in cities.sort()) {
        var type = $(targ).attr("type")
        $(targ).append("<li class='btrans eDrop-list-item uL eDrop-marg' type='" + type + "' item='" + cities[city_name] + "'>" + cities[city_name] + "</li>");
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
    var type = $(this).attr("type");
    var item = $(this).attr("item");
    $(".opened").addClass("Selected").removeClass("noSelect");
    $(".opened").animate({ scrollTop: scrolled.top }, "slow", () => { // Rescroll up
    });
    closeDrop();
    if (type == "from") {
        from = item;
    } else {
        to = item;
    }
});

$(document).on("click", ".speedTestRun", function(){
    if ( from == to && from != null ) {
        $("#eDrop-error").text("ERROR: From and to are equal! Please make them different!")
        $("#eDrop-error").removeClass("hidden");
    } else if (from != null && to != null) {
        $("#eDrop-error").addClass("hidden");
        $(".pre-test").addClass("hidden");
        setTimeout(() => {
            $(".pre-test").addClass("noExistence");
        },300)
        launchTest();
    } else {
        $("#eDrop-error").text("ERROR: Either from or to is not selected, please select both and try again.")
        $("#eDrop-error").removeClass("hidden");
    }
});

var virtInstance;
var transfInstance;
var totimeInstance;
function launchTest(){
    $(".test-title").text("From " + from + " to " + to);
    var virt = 10
    var transf = Math.random() * (0.99 - 0.01) + 0.01;
    var totime = virt + transf;
    $(".eTime-virt").text(virt + " s");
    $(".eTime-transf").text(transf.toFixed(2) + " s");
    $(".eTime-totime").text(totime.toFixed(2) + " s");

    setTimeout(() => {
        $(".ran-test").removeClass("noExistence").removeClass("hidden");
    },300);

    $(".virt").css("transition", virt + "s ease");
    $(".transf").css("transition", transf.toFixed(2) + "s ease");
    $(".totime").css("transition", 10 + transf + "s ease");
    
    $(".virt").delay(0).queue(function() {
        $(this).addClass("eProgress-done");
    });
    $(".transf").delay(10000).queue(function() {
        $(this).addClass("eProgress-done");
        $(".eTime-virt").removeClass("ec-elt-off");
        $(".eTime-transf").delay(transf).queue(function(){
            $(".eTime-transf").removeClass("ec-elt-off");
            $(".eTime-totime").removeClass("ec-elt-off");
        });
    });
    $(".totime").delay(0).queue(function() {
        $(this).addClass("eProgress-done");        
    });
}