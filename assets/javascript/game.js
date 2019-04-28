$(document).ready(function () {
//=============+++++++++++++++++++================//
    //Global Variables//
//=============+++++++++++++++++++================//
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + wins);


//=============+++++++++++++++++++================//
    //Selects main random number score and displays it//
//=============+++++++++++++++++++================//
    function randomCrystalNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    var randomCompChoice = randomCrystalNum(19, 120);
    $("#compChoiceNum").text(randomCompChoice);
    console.log("Random num Chose: " + randomCompChoice);

//=============+++++++++++++++++++================//
    //Selects a random value for each crystal//
//=============+++++++++++++++++++================//
    var ranValue = [];
    var currentValue;
    function generateNum(){
    while (ranValue.length < 4) {
      currentValue = Math.floor(Math.random() * 12) + 1;
      if (ranValue.indexOf(currentValue) < 0) {
     ranValue.push(currentValue);
      }
    }
};
generateNum(12);

//=============+++++++++++++++++++================//
    //Reset Function
//=============+++++++++++++++++++================//
function resetGame(){
    totalScore = 0;
    randomCompChoice = randomCrystalNum(19, 120);
    $("#compChoiceNum").text(randomCompChoice);
    console.log("Random num Chose: " + randomCompChoice);
    $("#total-score").text(totalScore);
};

//=============+++++++++++++++++++================//
    //functions for win and lose 
//=============+++++++++++++++++++================//
    function youWon(){
        wins++;
        alert("You won!");
        $("#wins").text("Wins: " + wins);
        resetGame();
    };

    function youLost(){
        losses++;
        alert("You Lose! Your total score was: " + totalScore);
        $("#losses").html("Losses: " + losses);
        resetGame();
    };

//=============+++++++++++++++++++================//
    //Begins game with click 
//=============+++++++++++++++++++================//
    $(".buttonS").on("click", function(){
        $("#button-1").val(ranValue[0]);
        $("#button-2").val(ranValue[1]);
        $("#button-3").val(ranValue[2]);
        $("#button-4").val(ranValue[3]);
        var selectedValue = parseInt($(this).val(), 10);
        console.log(selectedValue);
        totalScore = totalScore + selectedValue;
        $("#total-score").text(totalScore);

        if(totalScore > randomCompChoice){
            youLost();
        } else if(totalScore === randomCompChoice){
            youWon();

        }

      });
    

}); //function document ready end *****************