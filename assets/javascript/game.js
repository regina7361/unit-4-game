//select a random number on page load
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//insert random number into Random Number div
function setup() {
    document.getElementById('randomNum').innerHTML = randomNumber;
    $(".crystals").click(handleClick);
}

//make crystals clickable
function handleClick(e) {
    var x = e.currentTarget.innerText;
    console.log(x);
}


//on click assign a random number for each crystal



//add the crystal numbers together
//if user matches random number user wins
//if user exceeds random number user loses
//increment wins
//increment losses
//clear random number
//clear crystal numbers
//start a new game
