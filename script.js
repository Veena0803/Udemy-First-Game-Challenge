// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :) */

//SOLUTION:

var ageJohn = 15;
var ageMark = 15;
var ageRoy = 15;
var heightJohn = 150;
var heightMark = 150;
var heightRoy = 150;

var totalJohn = heightJohn + (5 * ageJohn);
var totalMark = heightMark + (5 * ageMark);
var totalRoy = heightRoy + (5 * ageRoy);

console.log('John: ' + totalJohn);
console.log('Mark: ' + totalMark);
console.log('Roy: ' + totalRoy);

if(totalJohn > totalMark && totalJohn > totalRoy)
    console.log('John is the winner with a score of' + ' ' + totalJohn);
else if(totalJohn < totalMark && totalRoy < totalMark)
    console.log('Mark is the winner with a score of' + ' ' + totalMark)
else if(totalRoy > totalJohn && totalRoy > totalMark)
    console.log('Roy is the winner with a score of' + ' ' + totalRoy);
else
    console.log('All are the winners');
