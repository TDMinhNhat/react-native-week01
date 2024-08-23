// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy! 
// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks g
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy 

// Data 1:
let dolphinsScore = (96 + 108 + 89) / 3;
let koalasScore = (88 + 91 + 110) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore) {
    console.log('Dolphins win the trophy');
}
else if (dolphinsScore < koalasScore) {
    console.log('Koalas win the trophy');
}
else if (dolphinsScore === koalasScore) {
    console.log('It is a draw');
}

// Bonus 1:
let dolphinsScoreBonus1 = (97 + 112 + 101) / 3;
let koalasScoreBonus1 = (109 + 95 + 123) / 3;
console.log(dolphinsScoreBonus1, koalasScoreBonus1);

if (dolphinsScoreBonus1 > koalasScoreBonus1 && dolphinsScoreBonus1 >= 100) {
    console.log('Dolphins win the trophy');
}
else if (dolphinsScoreBonus1 < koalasScoreBonus1 && koalasScoreBonus1 >= 100) {
    console.log('Koalas win the trophy');
}
else if (dolphinsScoreBonus1 === koalasScoreBonus1 && dolphinsScoreBonus1 >= 100 && koalasScoreBonus1 >= 100) {
    console.log('It is a draw');
}
else {
    console.log('No one wins the trophy');
}

// Bonus 2:
let dolphinsScoreBonus2 = (97 + 112 + 101) / 3;
let koalasScoreBonus2 = (109 + 95 + 106) / 3;
console.log(dolphinsScoreBonus2, koalasScoreBonus2);
    
if (dolphinsScoreBonus2 > koalasScoreBonus2 && dolphinsScoreBonus2 >= 100) {
    console.log('Dolphins win the trophy');
}
else if (dolphinsScoreBonus2 < koalasScoreBonus2 && koalasScoreBonus2 >= 100) {
    console.log('Koalas win the trophy');
}
else if (dolphinsScoreBonus2 === koalasScoreBonus2 && dolphinsScoreBonus2 >= 100 && koalasScoreBonus2 >= 100) {
    console.log('It is a draw');
}
else {
    console.log('No one wins the trophy');
}




