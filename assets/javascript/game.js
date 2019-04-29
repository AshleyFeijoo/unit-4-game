$(document).ready(function () {
//=============+++++++++++++++++++================//
    //Global Variables// and sets initial text
//=============+++++++++++++++++++================//
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#total-score").text(totalScore);


//=============+++++++++++++++++++================//
    //Selects main random number score and displays it//
//=============+++++++++++++++++++================//
    function randomCrystalNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    var randomCompChoice = randomCrystalNum(19, 120);
    $("#compChoiceNum").text(randomCompChoice);

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
    $("#total-score").text(totalScore);
};

//=============+++++++++++++++++++================//
    //functions for win and lose 
//=============+++++++++++++++++++================//
    function youWon(){
        wins++;
        alert("You won!");
        $("#wins").text(wins);
        resetGame();
    };

    function youLost(){
        losses++;
        // alert("You Lose! Your total score was: " + totalScore);
        $("#losses").html(losses);
        resetGame();
    };
    // =======================++++++++++++++++++

 
    

//=============+++++++++++++++++++================//
    //Begins game with click 
//=============+++++++++++++++++++================//
    //Sound Variables//
//=============+++++++++++++++++++================//
var sound = new Audio("click.wav");


    $(".buttonS").on("click", function(){
        audio = new Audio("click.wav");
        sound.preload = 'auto';
        // sound.load();
        function playSound() {
        var click=sound.cloneNode();
        click.play();  
    }
        playSound();
        $("#button-1").val(ranValue[0]);
        $("#button-2").val(ranValue[1]);
        $("#button-3").val(ranValue[2]);
        $("#button-4").val(ranValue[3]);
        var selectedValue = parseInt($(this).val(), 10);
        totalScore = totalScore + selectedValue;
        $("#total-score").text(totalScore);

        if(totalScore > randomCompChoice){
            youLost();
        } else if(totalScore === randomCompChoice){
            youWon();

        }

      });
    

}); //function document ready end *****************


