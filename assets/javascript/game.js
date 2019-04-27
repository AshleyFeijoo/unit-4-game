$(document).ready(function() {
    var wins= 0;
    var losses = 0;
    var totalScore=0;
    var crystalNumber;

   //this is a random number chosen
    function randomCompNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

  //this is a random number between 1-12 for the crystals   
    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // var randomCompNum= randomBetween(19,120);
    // $("#compChoiceNum").text("Random Chosen Number: " + randomCompNum);

    
 

    $(".buttonS").on("click", function() {
        let number = $(this).val();          
        crystalNumber = (randomBetween(1, 12));
        console.log( "The number value for the crystal is: " + crystalNumber)
        console.log("number is: " + number);

        if (totalScore == 0){
            randomCompNum= randomBetween(19,120);
        $("#compChoiceNum").text("Random Chosen Number: " + randomCompNum);
        }else{}
        

        if(totalScore < randomCompNum){
            totalScore = totalScore + crystalNumber;
            $("#total-score").text("Total Score is: " + totalScore);
           totalScore = parseInt(totalScore);
        }else{
        }if( totalScore === randomCompNum){
            wins ++;
            $("#wins").text(wins);
            totalScore=0;
        }else{

        }if(totalScore > randomCompNum){
            losses ++;
            $("#losses").text(losses);
            wins= 0;
            totalScore = 0;
            console.log("Total Score is: " + totalScore);
            console.log("randomCompNum = " + randomCompNum);
            $("#total-score").text("Total Score is: " + totalScore);
            randomBetween(19,120);
            $("#compChoiceNum").text("Random Chosen Number: " + randomCompNum);
            

        }

        


        
    }); 
    console.log(totalScore)
});

