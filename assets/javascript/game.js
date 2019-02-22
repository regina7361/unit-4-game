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
    console.log("testing")
    for(let i = 0; i < 4; i++) {
    let crystalNum = Math.floor(Math.random() * 10) + 1;
    $("[data-id=cry" + i + "]").attr("value", crystalNum);
    console.log($("[data-id=cry" + i + "]"))
}

$(".crystals").click(handleClick);
}

//make crystals clickable and add teh crystal numbers together
function handleClick(e) {
    var x = e.currentTarget.innerText;
    let clickedNum = parseInt($(this).attr('value'));
    console.log(clickedNum);
    totalScore += clickedNum;

//when a user clicks a crystal display number in Total Score box
    $("#totalScore").text(totalScore);
    console.log(x);
}

//if total score matches random number increment wins
if(totalScore == randomNumber){
    winCount++;
    document.getElementById('wins').innerHTML = winCount;
    alert('You Win!');
}

//if total score exceeds random number
else if(totalScore > randomNumber){
    lossCount++;
    document.getElementById('loss').innerHTML = lossCount;
    alert('You Lose!');
}

//clear random number
//clear crystal numbers
//start a new game
