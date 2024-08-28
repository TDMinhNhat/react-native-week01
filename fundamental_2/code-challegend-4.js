// Let's improve Steven's tip calculator even more, this time using loops! 
// Your tasks: 
// 1. Create an array 'bills' containing all 10 test bill values 
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals') 
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for 
// loop to perform the 10 calculations!

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [], totals = [];

for(let i = 0; i < bills.length; ++i) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log("Totals: " + totals);

//Bonus
const calcAverage = (arr) => {
    sum = 0;
    for(let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log("Average: " + calcAverage(totals));