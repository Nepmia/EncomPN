const cities = [ // Cities array for later implementation
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
var from = null; // Initialization of from var
var to = null; // Initialization of to var

function dropCreation() { // Launch dropdown content creation function
    cityImporter(".drop1");
    cityImporter(".drop2");
}
function cityImporter(targ) {
    for (city_name in cities.sort()) { // Iterate trough cities number
        var type = $(targ).attr("type") // Get current type
        $(targ).append("<li class='btrans eDrop-list-item section-text uL eDrop-marg' type='" + type + "' item='" + cities[city_name] + "'>" + cities[city_name] + "</li>"); // Add city name to dropdown
    }
}
function closeDrop() { // Close dropdown
    $(".eDrop-bg").css({"height": "50px","overflow-y": "hidden"}).removeClass("opened");
    $(".eDrop-bg").find("#eDrop").css("pointer-events", "none");
    if ($(".eDrop-bg").hasClass("noSelect")){ // Only if nothing was selected in dropdown
        $(".noSelect").animate({ scrollTop: 0 }, "slow", () => { // Rescroll up
            // pass
        });
    } else if ($(".eDrop-bg").hasClass("Selected")){
        // pass
    }
}

$(document).on("click", ".eDrop-bg", function(event){ // Listen for edrop bg clicks
    if (event.currentTarget !== event.target) { // Check if click was only on edrop bg and no childs
        return; // Cancel function
    }
    if ($(".eDrop-bg").hasClass("opened")) { // only if dropdown is opened
        closeDrop();
        $(this).css({"height": "350px","overflow-y": "scroll"}).addClass("opened"); // Open the clicked dropdown (if this conditions runs it means another edrop bg elt was clicked)
        $(this).find("#eDrop").css("pointer-events", "all")
    } else { // Just open the dropdown if none is opened
        $(this).css({"height": "350px","overflow-y": "scroll"}).addClass("opened");
        $(this).find("#eDrop").css("pointer-events", "all");
    }
});
$(document).on("click", ".eDrop-ul", function(event){ // Listen for clicks in space between the dropdown content
    if (event.currentTarget !== event.target) { // Check if the click doesn't come from child elt
        return; // Cancel function
    }
    closeDrop(); 
});

$(document).on("click", ".eDrop-list-item", function(){ // Check for dropdown content click
    var scrolled = $(this).position(); // Get distance of clicked elt from top of dropdown bg
    var type = $(this).attr("type"); // Get clicked elt type
    var item = $(this).attr("item"); // get clicked elt name
    $(".opened").addClass("Selected").removeClass("noSelect"); // Add Selected class to dropdown to avoid the selection to be reseted + use it to call if user didn't selected
    $(".opened").animate({ scrollTop: scrolled.top }, "slow", () => { // Scroll to the selection
    });
    closeDrop();
    if (type == "from") { // Verify if type is form if yes give form var its content
        from = item;
    } else { // If type is not form then it's to 
        to = item;
    }
});

$(document).on("click", ".speedTestRun", function(){ // Call for RunBtn clicks
    if ( from == to && from != null ) { // verify if the 2 selected values are equal
        $("#eDrop-error").text("ERROR: From and to are equal! Please make them different!") // Alert user 
        $("#eDrop-error").removeClass("hidden"); // Show error 
    } else if (from != null && to != null) { // Check if selected are not equal and not null
        $("#eDrop-error").addClass("hidden"); // Hide error
        $(".pre-test").addClass("hidden"); // Hide dropdown and btn
        setTimeout(() => { // remove from existence the dropdown and btn
            $(".pre-test").addClass("noExistence");
        },300)
        launchTest(); // Launch the test
    } else { // If any is not selected
        $("#eDrop-error").text("ERROR: Either from or to is not selected, please select both and try again.") // Alert user
        $("#eDrop-error").removeClass("hidden"); // Show error 
    }
});

function launchTest(){
    $(".speedTestRetry").addClass("disabled"); // Disable Retry btn
    $(".test-title").text("From " + from + " to " + to); // Set test title to correct values
    var virt = 10 // virt time contant 
    var transf = Math.random() * (10 - 5) + 0.01; // Random number between 0 and 5 with min of 0.01
    var totime = virt + transf; // Adition of transf and virt
    $(".eTime-virt").text(virt + " s"); // Give text to result in seconds
    $(".eTime-transf").text(transf.toFixed(2) + " s"); // Give text to result in seconds + formating so it doesn't have more than 2 decimals
    $(".eTime-totime").text(totime.toFixed(2) + " s"); // Give text to result in seconds + formating so it doesn't have more than 2 decimals

    setTimeout(() => {
        $(".ran-test").removeClass("noExistence").removeClass("hidden"); // Give text to result in seconds + formating so it doesn't have more than 2 decimals
    },300); 

    $(".virt").css("transition", virt + "s ease"); // Give transition time to cursor
    $(".transf").css("transition", transf.toFixed(2) + "s ease"); // Give transition time to cursor
    $(".totime").css("transition", 10 + "s ease"); // Give const transition time to cursor
    
    $(".virt").delay(0).queue(function(nxt) { // Launch cursor with queue
        $(this).addClass("eProgress-done");
        nxt(); // Reset delay
    });
    
    $(".totime").delay(0).queue(function(nxt) { // Launch cursor with queue
        $(this).addClass("eProgress-50");
        nxt(); // Reset delay      
    });
    
    $(".totime").delay(10000).queue(function(nxt) { // Launch cursor with queue
        $(this).css("transition", transf + "s ease");
        $(this).addClass("eProgress-100");
        nxt(); // Reset delay      
    });

    let total_time = 10000 + ( transf * 1000)
    // Make results appear
    $(".transf").delay(10000).queue(function(nxt) {
        $(this).addClass("eProgress-done");
        $(".eTime-virt").removeClass("ec-elt-off"); // make seconds appear
        nxt(); // Reset delay
    });
    
    $(".eTime-transf").delay(total_time).queue(function(nxt){ 
        console.log(total_time);
        $(".eTime-transf").removeClass("ec-elt-off");  // make seconds appear
        $(".eTime-totime").removeClass("ec-elt-off");  // make seconds appear
        $(".speedTestRetry").removeClass("disabled"); // Enable Retry btn
        nxt(); // Reset delay
    });

}
function resetResults() { // Reset everything to redo the test
    $(".virt, .transf, .totime").css("transition", "0s ease").removeClass(["eProgress-50", "eProgress-100", "eProgress-done"]);
    $(".eTime-virt, .eTime-transf, .eTime-totime").addClass("ec-elt-off");
}

$(document).on("click", ".speedTestRetry", function(){ // Close test resulsts, reset and show the test input 
    $(".ran-test").addClass("hidden"); 
    setTimeout(() => {
        $(".ran-test").addClass("noExistence");
        $(".pre-test").removeClass("noExistence").removeClass("hidden");
        $("#eDrop-error").addClass("hidden");
        resetResults();
    },300)
});