// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently. 
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team). 
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins! 
// Your tasks: 
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
// 2. Use the function to calculate the average for both teams 
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)" 
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2 
// 5. Ignore draws this time 
const calcAverage = (points) => {
    let sum = 0;
    for (let i = 0; i < points.length; i++) {
        sum += points[i];
    }
    return sum / points.length;
}
const checkWinver = (avgDolphins, avgKoalas) => console.log(avgDolphins > avgKoalas ? `Dolphins win (${avgDolphins} vs. ${avgKoalas})` : `Koalas win (${avgKoalas} vs. ${avgDolphins})`);

//Data 1:
const dolphins_score = [44, 23, 71];
const koala_score = [65, 54, 49];
checkWinver(calcAverage(dolphins_score), calcAverage(koala_score));

//Data 2:
const dolphins_score2 = [85, 54, 41];
const koala_score2 = [23, 34, 27];
checkWinver(calcAverage(dolphins_score2), calcAverage(koala_score2));