$(document).ready(function () {

    // Variables
    var numberToMatch = "";
    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    var crystal1 = Math.floor(Math.random()* 12) + 1;
    var crystal2 = Math.floor(Math.random()* 12) + 1;
    var crystal3 = Math.floor(Math.random()* 12) + 1;
    var crystal4 = Math.floor(Math.random()* 12) + 1;

    // Functions

    // Define newgame
    function newGame() {
       
        currentScore = 0;
        crystal1 = Math.floor(Math.random()* 12) + 1;
        crystal2 = Math.floor(Math.random()* 12) + 1;
        crystal3 = Math.floor(Math.random()* 12) + 1;
        crystal4 = Math.floor(Math.random()* 12) + 1;
        getNumber();
        updateScore();
    };

    // Generate numberToMatch between 90-120; put in #numberToMatch
    function getNumber() {
        numberToMatch = Math.floor(Math.random()* 101) + 19;
        $("#numberToMatch").html(numberToMatch);
        console.log("number to match: " + numberToMatch);
    };

    // Update CurrentScore to #currentScore
    function updateScore () {
        $("#currentScore").html(currentScore);
    };



    // On Click - Generate crystal1 value between 1-12;
    $("#crystal1").on("click", function(){
        console.log("crystal1: " + crystal1);
        currentScore += crystal1;
        updateScore();

        // define win; push to #wins
        // define loss; push to #losses
        if (currentScore === numberToMatch) {
            wins++;
            $("#wins").html("Wins: " + wins);
            newGame();
        }
        if (currentScore > numberToMatch) {
            losses++;
            $("#losses").html("Losses: " + losses);
            newGame();
        }
    });

    // On Click - Generate crystal2 value between 1-12;
    $("#crystal2").on("click", function(){
        console.log("crystal2: " + crystal2);
        currentScore += crystal2;
        updateScore();

        // define win; push to #wins
        // define loss; push to #losses
        if (currentScore === numberToMatch) {
            wins++;
            $("#wins").html("Wins: " + wins);
            newGame();
        }
        if (currentScore > numberToMatch) {
            losses++;
            $("#losses").html("Losses: " + losses);
            newGame();
        }
    });

    // Generate crystal3 value between 1-12
    $("#crystal3").on("click", function(){
        console.log("crystal3: " + crystal3);
        currentScore += crystal3;
        updateScore();

        // define win; push to #wins
        // define loss; push to #losses
        if (currentScore === numberToMatch) {
            wins++;
            $("#wins").html("Wins: " + wins);
            newGame();
        }
        if (currentScore > numberToMatch) {
            losses++;
            $("#losses").html("Losses: " + losses);
            newGame();
        }
    });

    // Generate crystal1 value between 1-12; put in #crystal 1
    $("#crystal4").on("click", function(){
        console.log("crystal4: " + crystal4);
        currentScore += crystal4;
        updateScore();

        // define win; push to #wins
        // define loss; push to #losses
        if (currentScore === numberToMatch) {
            wins++;
            $("#wins").html("Wins: " + wins);
            newGame();
        }
        if (currentScore > numberToMatch) {
            losses++;
            $("#losses").html("Losses: " + losses);
            newGame();
        }
    });

    
    // Main Program
    newGame();
    




});