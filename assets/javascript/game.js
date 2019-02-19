//select a random number
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//insert random number into the Random Number box on page load
function setup() {
    document.getElementById('randomNum').innerHTML = randomNumber;
    $(".crystals").click(handleClick);
}

//make crystals clickable
function handleClick(e) {
    var x = e.currentTarget.innerText;

//on click assign a random number for each crystal
    var crystalNum = Math.floor(Math.random() * 10) + 1;
    x = crystalNum;

//when a user clicks a crystal display number in Total Score box
    document.getElementById('totalScore').innerHTML = crystalNum;
    console.log(x);
}

//crystal keeps the random number that was first selected

//add the crystal numbers together

//if user matches random number user wins
//if user exceeds random number user loses
//increment wins
//increment losses
//clear random number
//clear crystal numbers
//start a new game
