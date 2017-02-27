function doRoll() {
    
    var random = Math.ceil(Math.random() * 100);
    $("#roll-id").text(random);
}

function beginning() {
  
    $(".main").hide();
    $(".main").fadeIn(1000);
    $(".spin-button").on("click", function() {
        
        doRoll();
    });
}




$(document).ready(beginning);