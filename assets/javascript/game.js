$(document).ready(function() {
    $('.toast').toast('show');
  //=============+++++++++++++++++++================//
  //Global Variables// and sets initial text
  //=============+++++++++++++++++++================//
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var selectedValue = "";

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

  function generateNum() {
    while (ranValue.length <= 4) {
      currentValue = Math.floor(Math.random() * 12) + 1;
      if (ranValue.indexOf(currentValue) < 0) {
        ranValue.push(currentValue);
      }
    }
  }
  generateNum(12);


  console.log("the randomcompnum is: " + randomCompChoice);
  //=============+++++++++++++++++++================//
  //Reset Function
  //=============+++++++++++++++++++================//
  function resetGame() {
    $(".buttonS").prop("disabled", false);
    ranValue = [];
    generateNum(12);
    totalScore = 0;
    randomCompChoice = randomCrystalNum(19, 120);
    $("#compChoiceNum").text(randomCompChoice);
    $("#total-score").text(totalScore);
  }

  //=============+++++++++++++++++++================//
  //functions for win and lose
  //=============+++++++++++++++++++================//
  function youWon() {
    wins++;
    alert("You won!");
    $("#wins").text(wins);
    resetGame();
  }

  function youLost() {
    losses++;
    alert("You Lose! Your total score was: " + totalScore);
    $("#losses").html(losses);
    resetGame();
  }

  //=============+++++++++++++++++++================//
  //Begins game with click
  //=============+++++++++++++++++++================//

  var selectedValue = "";
  $(".buttonS").on("click", function() {
    $("#begin").hide();
    $("#button-1").val(ranValue[0]);
    $("#button-2").val(ranValue[1]);
    $("#button-3").val(ranValue[2]);
    $("#button-4").val(ranValue[3]);
    selectedValue = parseInt($(this).val(), 10);
    totalScore = totalScore + selectedValue;
    $("#total-score").text(totalScore);

    //=============+++++++++++++++++++================//
    //checks if conditions are true and disables the buttons temporarily
    //=============+++++++++++++++++++================//
    if (totalScore > randomCompChoice) {
      $(".buttonS").prop("disabled", true);
      setTimeout(youLost, 750);
    } else if (totalScore === randomCompChoice) {
      $(".buttonS").prop("disabled", true);
      setTimeout(youWon, 750);
    }
  });
  //=============+++++++++AUDIO++++++++++================//
  $("#button-1").on("click", function() {
    $("audio#pop")[0].play();
    $("audio#pop")[0].currentTime = 0;
  });

  $("#button-2").on("click", function() {
    $("audio#pop2")[0].play();
    $("audio#pop2")[0].currentTime = 0;
  });

  $("#button-3").on("click", function() {
    $("audio#pop3")[0].play();
    $("audio#pop3")[0].currentTime = 0;
  });

  $("#button-4").on("click", function() {
    $("audio#pop4")[0].play();
    $("audio#pop4")[0].currentTime = 0;
  });
}); //function document ready end *****************
