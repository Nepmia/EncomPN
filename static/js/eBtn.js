function importer(){
    $('.eBtn').each(function(){ // For loop of each eBtn classes 
        var text = $(this).attr('text'); // get value of btn text   // \/ append eBtn template to this
        $(this).append("<div class='frow center'><div class='eBtn-left frow center'><div class='eBtn-line-c2 fcol center'><div class='eBtn-line2'></div> </div><div class='eBtn-line-c1 fcol center'><div class='eBtn-line1 l1l'></div> </div></div><div class='eBtn-frame'><div class='eBtn-bg'><span id='eBtn' class='eBtn-text uB'>text</span></div></div><div class='eBtn-right frow center'><div class='eBtn-line-c1 fcol center'><div class='eBtn-line1 l1r'></div> </div><div class='eBtn-line-c2 fcol center'><div class='eBtn-line2'></div> </div></div></div>");
        $(this).find("#eBtn").text(text); // Gives the good text to the btn
    });
};

$(document).on("click", ".discoverMore", function(){ // When user click on discoverMore btn
    $([document.documentElement, document.body]).animate({ // animate scroll 
        scrollTop: $("#anchor").offset().top // scroll to targeted element
    }, 1000);
});