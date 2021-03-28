function importer(){
    $(".eBtn").each(function(){
        var text = $(this).attr("text");
        $(this).load("/template/eBtn.html")
    });
};