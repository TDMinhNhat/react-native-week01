// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
// as an arrow function, and using chaining!

const calcAverageHumanAge = (ages) => {
    return ages.filter(age => (age <= 2 ? 2 * age : 16 + age * 4) >= 18).reduce((preV, currV) => preV + currV, 0) 
            / ages.filter(age => (age <= 2 ? 2 * age : 16 + age * 4) >= 18).length;
}

//Data 1:
const data1 = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(data1));

//Data 2:
const data2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(data2));