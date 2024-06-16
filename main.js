// .filter() = create a new array by filtering out elements



//EXTRACTING PRIME NUMBERS
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);

// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(evenNums);






//EXTRACTING ODD NUMBERS
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let oddNums = numbers.filter(isOdd);

// function isOdd(num) {
//     return num % 2 !== 0;
// }

// console.log(oddNums);





//Filter out any student under 18
// let age = [16, 17, 18, 18, 20, 60];
// let under18 = age.filter(youngAge);

// function youngAge(num) {
//     return num < 18;
// }

// console.log(under18);





//Filter out any student older than 18
// let age = [16, 17, 18, 18, 20, 60];
// let adult = age.filter(isAdult);

// function isAdult(num) {
//     return num >= 18;
// }

// console.log(adult);




//Return words with under 6 characters
// const words = ["apple", "orange", "banana", "coconut", "pineapple"]
// const under7 = words.filter(shortWords);

// function shortWords(num) {
//     return num.length < 7;
// }

// console.log(under7);




//Return words with more than 6 characters
const words = ["apple", "orange", "banana", "coconut", "pineapple"]
const moreEqualTo7 = words.filter(longWord);

function longWord(num) {
    return num.length >= 7;
}

console.log(moreEqualTo7);

