var totalScore = 0;
var winCount = 0;
var lossCount = 0;

//select a random number
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//insert random number into the Random Number box on page load
function setup() {
    document.getElementById('randomNum').innerHTML = randomNumber;
    
//on click assign a random number for each crystal
    for(let i = 0; i < 4; i++) {
    let crystalNum = Math.floor(Math.random() * 10) + 1;
    $("[data-id=cry" + i + "]").attr("value", crystalNum);
    console.log($("[data-id=cry" + i + "]"))
    }

$(".crystals").click(handleClick);
$("#startOver").click(startOver);
}

//make crystals clickable and add teh crystal numbers together
function handleClick(e) {
    var x = e.currentTarget.innerText;
    let clickedNum = parseInt($(this).attr('value'));
    console.log(clickedNum);
    totalScore += clickedNum;

//when a user clicks a crystal display number in Total Score box
    $("#totalScore").text(totalScore);
    console.log(totalScore, randomNumber);

//if total score matches random number increment wins
    if(totalScore == randomNumber){
        winCount++;
        document.getElementById('wins').innerHTML = winCount;
        setTimeout(function() { alert("You Win!"); });
    }

//if total score exceeds random number
    else if(totalScore > randomNumber){
        lossCount++;
        document.getElementById('loss').innerHTML = lossCount;
        setTimeout(function() { alert("You Lose!"); });
    }    
}

//clear random number, total score number, start a new game
function startOver(e) {

   $("#totalScore").text("");

   totalScore = 0;

   randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

    document.getElementById('randomNum').innerHTML = randomNumber;
    
    for(let i = 0; i < 4; i++) {
        let crystalNum = Math.floor(Math.random() * 10) + 1;
        $("[data-id=cry" + i + "]").attr("value", crystalNum);
        console.log($("[data-id=cry" + i + "]"));
        console.log(crystalNum);
        }
}

