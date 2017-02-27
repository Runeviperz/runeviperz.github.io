function doRoll() {
    
    var random = Math.ceil(Math.random() * 100);
    $("#roll-id").text(random);
}

function calculateWinnings(roll) {
    var distance = Math.abs(50-roll);
    
    if (distance > 20) {
        return 0;
    } 
    var winningsMult = Math.exp((20-distance)/13);
    return parseInt($("#bet-amount").text(), 10) * winningsMult;
}

function updateTotal(winnings) {
    
    var betAmount = parseInt($("#bet-amount").text(), 10);
    var total = parseInt($("#total-amount").text(), 10);
    var newTotal = total-betAmount+Math.floor(winnings);
    $("#total-amount").text(newTotal.toString());
}

function beginning() {
  
    $(".main").hide();
    $(".main").fadeIn(1000);
    $(".spin-button").on("click", function() {
        
        if (parseInt($("#bet-amount").text(), 10) <= parseInt($("#total-amount").text(), 10)) {
            doRoll(); 
            var winnings = calculateWinnings(parseInt($("#roll-id").text(), 10));
            updateTotal(winnings);
            $("#won-amount").text(Math.floor(winnings).toString());
        } else {
            
            
        }
        
        
    });
}




$(document).ready(beginning);