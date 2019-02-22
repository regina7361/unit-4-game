function shuffle(operand) {
    var ctr = operand.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = operand[ctr];
        operand[ctr] = operand[index];
        operand[index] = temp;
    }
    return operand;
}
var myArray = [1, 5, 10, 15];
console.log(shuffle(myArray));